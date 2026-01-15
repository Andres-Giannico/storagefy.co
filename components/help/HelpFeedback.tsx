'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown, MessageSquare, Check, Loader2 } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'

interface HelpFeedbackProps {
  articleId: string
  articleTitle?: string
  articleUrl?: string
}

export default function HelpFeedback({ articleId, articleTitle, articleUrl }: HelpFeedbackProps) {
  const { language } = useLanguage()
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedback(type)
    setError(null)
  }

  const handleSubmit = async () => {
    if (!feedback) return

    setLoading(true)
    setError(null)

    try {
      // Construir URL del artículo si no se proporciona
      const currentUrl = articleUrl || (typeof window !== 'undefined' ? window.location.href : '')
      
      const response = await fetch('/api/send-help-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articleId,
          feedback,
          comment: comment.trim() || undefined,
          articleTitle,
          articleUrl: currentUrl,
          language
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar feedback')
      }

      // Guardar en localStorage también (para tracking local)
      const feedbackData = {
        articleId,
        feedback,
        comment: comment.trim() || undefined,
        timestamp: new Date().toISOString()
      }
      
      const existing = JSON.parse(localStorage.getItem('help-feedback') || '[]')
      existing.push(feedbackData)
      localStorage.setItem('help-feedback', JSON.stringify(existing))

      setSubmitted(true)
      setTimeout(() => {
        setComment('')
        setSubmitted(false)
        setFeedback(null)
      }, 3000)
    } catch (err) {
      console.error('Error sending feedback:', err)
      setError(err instanceof Error ? err.message : 'Error al enviar feedback')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2 text-accent-600 p-4 bg-accent-50 rounded-lg border border-accent-200"
      >
        <Check className="w-5 h-5" />
        <span className="text-sm font-medium">
          {language === 'es' ? '¡Gracias por tu feedback!' : 'Thanks for your feedback!'}
        </span>
      </motion.div>
    )
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-primary-800 mb-4">
          {language === 'es' ? '¿Fue útil este artículo?' : 'Was this article helpful?'}
        </h3>
        
        <div className="flex items-center gap-4 mb-4">
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            onClick={() => handleFeedback('positive')}
            disabled={loading}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
              ${feedback === 'positive'
                ? 'bg-green-100 text-green-700 border-2 border-green-300'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-green-50'
              }
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            <ThumbsUp className="w-5 h-5" />
            <span>{language === 'es' ? 'Sí' : 'Yes'}</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            onClick={() => handleFeedback('negative')}
            disabled={loading}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
              ${feedback === 'negative'
                ? 'bg-red-100 text-red-700 border-2 border-red-300'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-red-50'
              }
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            <ThumbsDown className="w-5 h-5" />
            <span>{language === 'es' ? 'No' : 'No'}</span>
          </motion.button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4"
            >
              <div className="flex items-start gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-gray-500 mt-1" />
                <label className="text-sm font-medium text-primary-700">
                  {language === 'es' 
                    ? '¿Tienes algún comentario o sugerencia? (opcional)'
                    : 'Do you have any comments or suggestions? (optional)'
                  }
                </label>
              </div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={
                  language === 'es'
                    ? 'Escribe tu comentario aquí...'
                    : 'Write your comment here...'
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none resize-none"
                rows={3}
                disabled={loading}
              />
              <div className="flex justify-end mt-3">
                <motion.button
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`
                    px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2
                    ${loading
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-accent-600 text-white hover:bg-accent-700'
                    }
                  `}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <span>{language === 'es' ? 'Enviar' : 'Submit'}</span>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

