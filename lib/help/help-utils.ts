import { HelpArticle } from './help-categories'

// Calcular tiempo de lectura estimado (promedio: 200 palabras por minuto)
export function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).filter(word => word.length > 0).length
  const minutes = Math.ceil(words / 200)
  return Math.max(1, minutes) // Mínimo 1 minuto
}

// Extraer headings del contenido para generar TOC
export interface Heading {
  id: string
  text: string
  level: number
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = []
  const lines = content.split('\n')
  
  lines.forEach((line, index) => {
    if (line.startsWith('## ')) {
      const text = line.substring(3).trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      headings.push({ id, text, level: 2 })
    } else if (line.startsWith('### ')) {
      const text = line.substring(4).trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      headings.push({ id, text, level: 3 })
    }
  })
  
  return headings
}

// Búsqueda full-text en artículos
export interface SearchResult {
  article: HelpArticle
  score: number
  matches: string[] // snippets donde se encontró el término
}

export function searchArticles(
  query: string,
  articles: HelpArticle[],
  language: 'es' | 'en' = 'es'
): SearchResult[] {
  if (!query.trim()) return []
  
  const searchTerms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(term => term.length > 2)
  
  if (searchTerms.length === 0) return []
  
  const results: SearchResult[] = []
  
  articles.forEach(article => {
    let score = 0
    const matches: string[] = []
    
    // Buscar en título (mayor peso)
    const title = article.title[language].toLowerCase()
    searchTerms.forEach(term => {
      if (title.includes(term)) {
        score += 10
        matches.push(`Título: ${article.title[language]}`)
      }
    })
    
    // Buscar en descripción (peso medio)
    const description = article.description[language].toLowerCase()
    searchTerms.forEach(term => {
      if (description.includes(term)) {
        score += 5
        if (!matches.some(m => m.includes('Descripción'))) {
          matches.push(`Descripción: ${article.description[language]}`)
        }
      }
    })
    
    // Buscar en contenido (peso bajo)
    const content = article.content[language].toLowerCase()
    searchTerms.forEach(term => {
      const occurrences = (content.match(new RegExp(term, 'g')) || []).length
      score += occurrences * 1
      
      // Extraer snippet alrededor de la primera ocurrencia
      const index = content.indexOf(term)
      if (index !== -1 && matches.length < 3) {
        const start = Math.max(0, index - 50)
        const end = Math.min(content.length, index + term.length + 50)
        const snippet = content.substring(start, end).trim()
        matches.push(`Contenido: ...${snippet}...`)
      }
    })
    
    // Buscar en tags
    article.tags.forEach(tag => {
      searchTerms.forEach(term => {
        if (tag.toLowerCase().includes(term)) {
          score += 3
        }
      })
    })
    
    if (score > 0) {
      results.push({ article, score, matches: matches.slice(0, 3) })
    }
  })
  
  // Ordenar por score descendente
  return results.sort((a, b) => b.score - a.score)
}

// Obtener artículos relacionados
export function getRelatedArticles(
  article: HelpArticle,
  allArticles: HelpArticle[],
  language: 'es' | 'en' = 'es',
  limit: number = 4
): HelpArticle[] {
  const related: Array<{ article: HelpArticle; score: number }> = []
  
  allArticles.forEach(otherArticle => {
    if (otherArticle.id === article.id) return
    
    let score = 0
    
    // Misma categoría = mayor peso
    if (otherArticle.categoryId === article.categoryId) {
      score += 10
    }
    
    // Tags compartidos
    const sharedTags = article.tags.filter(tag => 
      otherArticle.tags.includes(tag)
    )
    score += sharedTags.length * 5
    
    // Título similar (palabras comunes)
    const articleWords = article.title[language].toLowerCase().split(/\s+/)
    const otherWords = otherArticle.title[language].toLowerCase().split(/\s+/)
    const commonWords = articleWords.filter(word => 
      otherWords.includes(word) && word.length > 3
    )
    score += commonWords.length * 2
    
    if (score > 0) {
      related.push({ article: otherArticle, score })
    }
  })
  
  return related
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.article)
}

// Generar ID único para headings (evitar duplicados)
export function generateHeadingId(text: string, existingIds: Set<string>): string {
  let baseId = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  
  let id = baseId
  let counter = 1
  
  while (existingIds.has(id)) {
    id = `${baseId}-${counter}`
    counter++
  }
  
  existingIds.add(id)
  return id
}

