'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Mail, Clock, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import Link from 'next/link'

export default function SignupSuccessPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-accent-600" />
          </motion.div>

          <h1 className="text-4xl font-bold text-primary-800 mb-4">
            {language === 'es'
              ? '¡Cuenta creada exitosamente!'
              : 'Account created successfully!'}
          </h1>

          <p className="text-lg text-primary-600 mb-8">
            {language === 'es'
              ? 'Gracias por registrarte en StorageFy. Tu cuenta está pendiente de activación.'
              : 'Thank you for signing up for StorageFy. Your account is pending activation.'}
          </p>

          <div className="bg-primary-50 rounded-lg p-6 mb-8 space-y-4">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-primary-800 mb-1">
                  {language === 'es'
                    ? 'Verifica tu email'
                    : 'Verify your email'}
                </h3>
                <p className="text-sm text-primary-600">
                  {language === 'es'
                    ? 'Hemos enviado un código de verificación a tu email. Revisa tu bandeja de entrada y verifica tu cuenta.'
                    : 'We have sent a verification code to your email. Check your inbox and verify your account.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-primary-800 mb-1">
                  {language === 'es'
                    ? 'Activación manual'
                    : 'Manual activation'}
                </h3>
                <p className="text-sm text-primary-600">
                  {language === 'es'
                    ? 'Nuestro equipo revisará tu registro y activará tu cuenta. Normalmente esto toma 24-48 horas.'
                    : 'Our team will review your registration and activate your account. This usually takes 24-48 hours.'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-primary-700 font-medium">
              {language === 'es'
                ? '¿Qué sigue?'
                : 'What\'s next?'}
            </p>

            <ul className="text-left text-primary-600 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                <span>
                  {language === 'es'
                    ? 'Revisa tu email y verifica tu cuenta'
                    : 'Check your email and verify your account'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                <span>
                  {language === 'es'
                    ? 'Espera la activación de tu cuenta por nuestro equipo'
                    : 'Wait for your account activation by our team'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                <span>
                  {language === 'es'
                    ? 'Recibirás un email cuando tu cuenta esté activa'
                    : 'You will receive an email when your account is active'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                <span>
                  {language === 'es'
                    ? 'Una vez activada, podrás iniciar sesión en storagefy.app'
                    : 'Once activated, you can log in to storagefy.app'}
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="https://storagefy.app/auth/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
              >
                {language === 'es' ? 'Ir a storagefy.app' : 'Go to storagefy.app'}
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-primary-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                {language === 'es' ? 'Volver al inicio' : 'Back to home'}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

