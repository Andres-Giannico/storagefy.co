'use client'

function processInlineMarkdown(text: string): string {
  let processed = text
  processed = processed.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>')
  processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
    const isInternal = url.startsWith('/') || url.startsWith('#')
    const attrs = isInternal ? '' : ' target="_blank" rel="noopener noreferrer"'
    return `<a href="${url}" class="text-accent-600 hover:text-accent-700 underline"${attrs}>${text}</a>`
  })
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-primary-800">$1</strong>')
  processed = processed.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
  return processed
}

export function renderBlogMarkdown(content: string): string {
  const lines = content.split('\n')
  const processedLines: string[] = []
  let inList = false
  let listType: 'ul' | 'ol' | null = null
  let inTable = false
  let tableHeaderDone = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    if (trimmed.startsWith('### ')) {
      if (inList) {
        processedLines.push(`</${listType}>`)
        inList = false
        listType = null
      }
      const text = trimmed.substring(4).trim()
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      processedLines.push(`<h3 class="text-xl font-semibold text-primary-800 mt-8 mb-4" id="${id}">${text}</h3>`)
      continue
    }

    if (trimmed.startsWith('## ')) {
      if (inList) {
        processedLines.push(`</${listType}>`)
        inList = false
        listType = null
      }
      const text = trimmed.substring(3).trim()
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      processedLines.push(`<h2 class="text-2xl font-bold text-primary-800 mt-10 mb-6" id="${id}">${text}</h2>`)
      continue
    }

    if (trimmed.startsWith('# ')) {
      if (inList) {
        processedLines.push(`</${listType}>`)
        inList = false
        listType = null
      }
      const text = trimmed.substring(2).trim()
      processedLines.push(`<h1 class="text-3xl font-bold text-primary-800 mb-6">${text}</h1>`)
      continue
    }

    const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/)
    if (numberedMatch) {
      if (!inList || listType !== 'ol') {
        if (inList) processedLines.push(`</${listType}>`)
        processedLines.push('<ol class="list-decimal list-inside mb-4 space-y-2 ml-4">')
        inList = true
        listType = 'ol'
      }
      processedLines.push(`<li class="mb-2 text-primary-700">${processInlineMarkdown(numberedMatch[2])}</li>`)
      continue
    }

    const bulletMatch = trimmed.match(/^[-*]\s+(.+)$/)
    if (bulletMatch) {
      if (!inList || listType !== 'ul') {
        if (inList) processedLines.push(`</${listType}>`)
        processedLines.push('<ul class="list-disc list-inside mb-4 space-y-2 ml-4">')
        inList = true
        listType = 'ul'
      }
      processedLines.push(`<li class="mb-2 text-primary-700">${processInlineMarkdown(bulletMatch[1])}</li>`)
      continue
    }

    // Tables: | col1 | col2 |  (header) then | --- | --- | (separator) then data rows
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (inList) {
        processedLines.push(`</${listType}>`)
        inList = false
        listType = null
      }
      const tableCells = trimmed.split('|').map((c) => c.trim()).filter(Boolean)
      const isSeparator = tableCells.every((c) => /^-+$/.test(c))
      if (isSeparator) {
        if (inTable && !tableHeaderDone) {
          processedLines.push('</thead><tbody>')
          tableHeaderDone = true
        }
        continue
      }
      if (!inTable) {
        processedLines.push('<div class="overflow-x-auto my-6"><table class="min-w-full border border-gray-200 rounded-lg"><thead><tr>')
        inTable = true
      }
      const isHeader = !tableHeaderDone
      if (isHeader) tableHeaderDone = true
      const tag = isHeader ? 'th' : 'td'
      const cellClass = isHeader ? 'px-4 py-3 bg-gray-50 font-semibold text-primary-800 border-b border-gray-200' : 'px-4 py-3 border-b border-gray-200 text-primary-700'
      processedLines.push(tableCells.map((cell) => `<${tag} class="${cellClass}">${processInlineMarkdown(cell)}</${tag}>`).join('') + '</tr>')
      continue
    }

    if (inTable) {
      processedLines.push('</tbody></table></div>')
      inTable = false
      tableHeaderDone = false
    }

    if (trimmed === '' && inList) {
      processedLines.push(`</${listType}>`)
      inList = false
      listType = null
      continue
    }

    if (trimmed && !trimmed.startsWith('<')) {
      if (inList) {
        processedLines.push(`</${listType}>`)
        inList = false
        listType = null
      }
      processedLines.push(`<p class="mb-4 text-primary-700 leading-relaxed">${processInlineMarkdown(trimmed)}</p>`)
      continue
    }

    if (trimmed === '') continue
    processedLines.push(line)
  }

  if (inList && listType) processedLines.push(`</${listType}>`)
  if (inTable) {
    processedLines.push('</tbody></table></div>')
  }


  return processedLines.join('\n')
}
