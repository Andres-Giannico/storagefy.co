'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, User, Bot } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'

interface Message {
  id: string
  type: 'bot' | 'user'
  content: string
  timestamp: Date
}

type ChatStep = 'welcome' | 'ask_name' | 'ask_contact' | 'chat' | 'closed'

export default function Chatbot() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [chatStep, setChatStep] = useState<ChatStep>('welcome')
  const [userName, setUserName] = useState('')
  const [userContact, setUserContact] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        language === 'es'
          ? '¡Hola! 👋 Soy el asistente virtual de StorageFy. Estoy aquí para ayudarte con cualquier pregunta sobre nuestra plataforma.'
          : 'Hello! 👋 I\'m StorageFy\'s virtual assistant. I\'m here to help you with any questions about our platform.'
      )
    }
  }, [isOpen])

  const addBotMessage = (content: string, delay = 500) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: 'bot',
        content,
        timestamp: new Date()
      }])
      setIsTyping(false)
    }, delay)
  }

  const addUserMessage = (content: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    }])
  }

  const getAIAnswer = async (question: string): Promise<string> => {
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: question,
          conversationHistory: messages.map(m => ({
            type: m.type,
            content: m.content
          })),
          language,
          userName: userName || undefined
        }),
      })

      const data = await response.json()
      return data.response || (language === 'es' 
        ? 'Disculpa, no pude procesar tu mensaje. ¿Podrías reformularlo?'
        : 'Sorry, I couldn\'t process your message. Could you rephrase it?'
      )
    } catch (error) {
      console.error('Error getting AI response:', error)
      return language === 'es'
        ? 'Lo siento, estoy teniendo problemas técnicos. Por favor contacta con nuestro equipo: WhatsApp +34 654 082 728 o hello@storagefy.co'
        : 'Sorry, I\'m having technical issues. Please contact our team: WhatsApp +34 654 082 728 or hello@storagefy.co'
    }
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userInput = inputValue.trim()
    addUserMessage(userInput)
    setInputValue('')

    // Handle different chat steps
    if (chatStep === 'welcome') {
      setChatStep('ask_name')
      setTimeout(() => {
        addBotMessage(
          language === 'es'
            ? 'Perfecto. Para poder ayudarte mejor, ¿cómo te llamas?'
            : 'Perfect. To help you better, what\'s your name?'
        )
      }, 1000)
    } else if (chatStep === 'ask_name') {
      setUserName(userInput)
      setChatStep('ask_contact')
      setTimeout(() => {
        addBotMessage(
          language === 'es'
            ? `¡Encantado, ${userInput}! ¿Me dejas tu email o teléfono para poder contactarte después si lo necesitas?`
            : `Nice to meet you, ${userInput}! Can you share your email or phone so we can contact you later if needed?`
        )
      }, 1000)
    } else if (chatStep === 'ask_contact') {
      setUserContact(userInput)
      setChatStep('chat')
      setTimeout(() => {
        addBotMessage(
          language === 'es'
            ? `Perfecto, ${userName}. Ahora puedes hacerme cualquier pregunta sobre StorageFy: precios, funcionalidades, demos, soporte, etc. ¿En qué puedo ayudarte?`
            : `Perfect, ${userName}. Now you can ask me any question about StorageFy: pricing, features, demos, support, etc. How can I help you?`
        )
      }, 1000)
    } else if (chatStep === 'chat') {
      // Get AI response
      setIsTyping(true)
      const answer = await getAIAnswer(userInput)
      setIsTyping(false)
      addBotMessage(answer, 100)
    }
  }

  const handleClose = async () => {
    if (chatStep === 'chat' && userName && userContact) {
      // Send transcript to email
      try {
        await fetch('/api/send-chatbot-transcript', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userName,
            userContact,
            messages: messages.map(m => ({
              type: m.type,
              content: m.content,
              timestamp: m.timestamp
            })),
            language
          })
        })
      } catch (error) {
        console.error('Error sending transcript:', error)
      }
    }
    setIsOpen(false)
    // Reset after animation
    setTimeout(() => {
      setMessages([])
      setChatStep('welcome')
      setUserName('')
      setUserContact('')
    }, 300)
  }

  return (
    <>
      {/* Chatbot Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-accent-500/50 transition-shadow"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">StorageFy Bot</div>
                  <div className="text-xs text-white/80">
                    {language === 'es' ? 'En línea' : 'Online'}
                  </div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white'
                        : 'bg-white border border-gray-200 text-primary-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <span className={`text-xs mt-1 block ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString(language === 'es' ? 'es-ES' : 'en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                  {message.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 px-4 py-2 rounded-2xl">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={language === 'es' ? 'Escribe tu mensaje...' : 'Type your message...'}
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none text-sm"
                  disabled={isTyping}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

