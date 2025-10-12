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

  const getAnswer = (question: string): string => {
    const q = question.toLowerCase()

    // Pricing questions
    if (q.includes('precio') || q.includes('cost') || q.includes('cuanto') || q.includes('how much')) {
      return language === 'es'
        ? 'Tenemos 3 planes: Starter (€49/mes), Professional (€99/mes) y Enterprise (personalizado). Todos incluyen 14 días gratis sin tarjeta. ¿Te gustaría más detalles sobre algún plan específico?'
        : 'We have 3 plans: Starter (€49/month), Professional (€99/month) and Enterprise (custom). All include 14 days free without card. Would you like more details about a specific plan?'
    }

    // Features questions
    if (q.includes('funcionalidad') || q.includes('feature') || q.includes('características') || q.includes('hace')) {
      return language === 'es'
        ? 'StorageFy incluye: gestión de unidades, contratos digitales, cobros automáticos, reportes en tiempo real, widget de reservas, fotos DNI seguras, recordatorios automáticos y mucho más. ¿Hay alguna funcionalidad específica que te interese?'
        : 'StorageFy includes: unit management, digital contracts, automatic payments, real-time reports, booking widget, secure ID photos, automatic reminders and much more. Is there a specific feature you\'re interested in?'
    }

    // Demo questions
    if (q.includes('demo') || q.includes('prueba') || q.includes('try') || q.includes('test')) {
      return language === 'es'
        ? '¡Por supuesto! Puedes solicitar una demo gratis de 14 días sin necesidad de tarjeta. Visita nuestra página de Demo o te puedo conectar con el equipo ahora mismo. ¿Qué prefieres?'
        : 'Of course! You can request a 14-day free demo without a credit card. Visit our Demo page or I can connect you with the team right now. Which do you prefer?'
    }

    // Support questions
    if (q.includes('soporte') || q.includes('support') || q.includes('ayuda') || q.includes('help')) {
      return language === 'es'
        ? 'Ofrecemos soporte en todos los planes: Email (24h) en Starter, Prioritario (4h) en Professional, y 24/7 con account manager en Enterprise. También puedes contactarnos por WhatsApp: +34 654 082 728'
        : 'We offer support in all plans: Email (24h) on Starter, Priority (4h) on Professional, and 24/7 with account manager on Enterprise. You can also contact us via WhatsApp: +34 654 082 728'
    }

    // Integration questions
    if (q.includes('integra') || q.includes('stripe') || q.includes('pago')) {
      return language === 'es'
        ? 'Nos integramos con Stripe para pagos online, sistemas de cerraduras inteligentes, cámaras de seguridad, y más. El plan Enterprise incluye integraciones personalizadas con tus sistemas actuales.'
        : 'We integrate with Stripe for online payments, smart lock systems, security cameras, and more. The Enterprise plan includes custom integrations with your current systems.'
    }

    // Migration questions
    if (q.includes('migra') || q.includes('datos') || q.includes('excel') || q.includes('data')) {
      return language === 'es'
        ? '¡Sí! La migración de datos está incluida en todos los planes. Nuestro equipo te ayuda a migrar desde Excel, otros sistemas, o cualquier formato que uses actualmente. Es completamente gratis.'
        : 'Yes! Data migration is included in all plans. Our team helps you migrate from Excel, other systems, or any format you currently use. It\'s completely free.'
    }

    // Location/multi-location questions
    if (q.includes('locacion') || q.includes('location') || q.includes('sedes') || q.includes('múltiples')) {
      return language === 'es'
        ? 'Starter incluye 1 locación, Professional hasta 3, y Enterprise locaciones ilimitadas. Puedes gestionar todas tus sedes desde un único panel de control centralizado.'
        : 'Starter includes 1 location, Professional up to 3, and Enterprise unlimited locations. You can manage all your locations from a single centralized control panel.'
    }

    // Contact questions
    if (q.includes('contacto') || q.includes('contact') || q.includes('hablar') || q.includes('talk')) {
      return language === 'es'
        ? 'Puedes contactarnos por Email: hello@storagefy.co (respuesta <24h) o WhatsApp: +34 654 082 728 (respuesta inmediata). ¿Prefieres que el equipo te contacte directamente?'
        : 'You can contact us by Email: hello@storagefy.co (response <24h) or WhatsApp: +34 654 082 728 (immediate response). Would you prefer the team to contact you directly?'
    }

    // Default response
    return language === 'es'
      ? 'Interesante pregunta. Para darte la mejor respuesta, te recomiendo contactar con nuestro equipo directamente: WhatsApp +34 654 082 728 o hello@storagefy.co. También puedes solicitar una demo gratis para ver todo en acción. ¿Te ayudo con algo más?'
      : 'Interesting question. To give you the best answer, I recommend contacting our team directly: WhatsApp +34 654 082 728 or hello@storagefy.co. You can also request a free demo to see everything in action. Can I help you with anything else?'
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
      const answer = getAnswer(userInput)
      setTimeout(() => {
        addBotMessage(answer, 800)
      }, 500)
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

