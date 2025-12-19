'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  Mail,
  Lock,
  Building2,
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Loader2,
  AlertCircle,
  Eye,
  EyeOff,
  CreditCard,
  Clock,
  DollarSign,
  BarChart3,
  Calendar,
  MoreHorizontal,
  Search,
  Facebook,
  Instagram,
  Users,
  Sparkles,
  ChevronDown,
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import type { SignupFormData } from '@/lib/types/signup'
import { isValidEmail, isValidPassword, isValidCIF } from '@/lib/utils/signup-validation'

export default function SignupPageClient() {
  const { language } = useLanguage()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState<SignupFormData>({
    userName: '',
    userEmail: '',
    userPassword: '',
    organizationName: '',
    taxId: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Spain',
    businessType: 'STORAGE',
    wantsVerifacti: false,
    heardFrom: '',
    numLocations: undefined,
    numUnits: undefined,
    currentSystem: '',
    mainNeeds: [],
    expectedStartDate: '',
    additionalComments: '',
    promoCode: '',
  })
  const [verificationCode, setVerificationCode] = useState('')
  const [accountCreated, setAccountCreated] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [promoCode, setPromoCode] = useState('')
  const [promoCodeValidated, setPromoCodeValidated] = useState(false)
  const [promoCodeMessage, setPromoCodeMessage] = useState('')
  const [promoCodeDetails, setPromoCodeDetails] = useState('')
  const [validatingPromo, setValidatingPromo] = useState(false)
  const [wantsMarketingEmails, setWantsMarketingEmails] = useState(false)

  const totalSteps = 5

  const validateStep1 = (): boolean => {
    if (!formData.userName.trim()) {
      setError(language === 'es' ? 'El nombre es requerido' : 'Name is required')
      return false
    }
    if (!formData.userEmail.trim()) {
      setError(language === 'es' ? 'El email es requerido' : 'Email is required')
      return false
    }
    if (!isValidEmail(formData.userEmail)) {
      setError(
        language === 'es'
          ? 'El email no tiene un formato válido'
          : 'Email format is invalid'
      )
      return false
    }
    if (!formData.userPassword) {
      setError(
        language === 'es' ? 'La contraseña es requerida' : 'Password is required'
      )
      return false
    }
    if (!isValidPassword(formData.userPassword)) {
      setError(
        language === 'es'
          ? 'La contraseña debe tener al menos 6 caracteres'
          : 'Password must be at least 6 characters'
      )
      return false
    }
    return true
  }

  const validateStep2 = (): boolean => {
    if (!formData.organizationName.trim()) {
      setError(
        language === 'es'
          ? 'El nombre de la empresa es requerido'
          : 'Company name is required'
      )
      return false
    }
    // Validar CIF solo si se proporciona (opcional)
    if (formData.taxId && formData.taxId.trim().length > 0 && !isValidCIF(formData.taxId)) {
      setError(
        language === 'es'
          ? 'El CIF/NIF debe tener formato válido (letra + 8 dígitos)'
          : 'CIF/NIF must have valid format (letter + 8 digits)'
      )
      return false
    }
    return true
  }

  const handleValidatePromoCode = async () => {
    if (!promoCode.trim()) {
      setError(language === 'es' ? 'Ingresa un código' : 'Enter a code')
      return
    }

    setValidatingPromo(true)
    setError('')

    try {
      const response = await fetch('/api/validate-promo-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: promoCode.trim().toUpperCase() }),
      })

      const data = await response.json()

      if (!response.ok || !data.valid) {
        throw new Error(data.error || 'Código inválido')
      }

      setPromoCodeValidated(true)
      setPromoCodeMessage(data.message || data.benefit?.description || 'Código válido')
      setPromoCodeDetails(data.details || '')
      setError('')
    } catch (err: any) {
      setError(err.message || 'Código promocional inválido')
      setPromoCodeValidated(false)
      setPromoCodeMessage('')
      setPromoCodeDetails('')
    } finally {
      setValidatingPromo(false)
    }
  }

  const handleStep1Next = () => {
    if (validateStep1()) {
      setError('')
      setStep(2)
    }
  }

  const handleStep2Next = async () => {
    if (!validateStep2()) {
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          promoCode: promoCodeValidated ? promoCode.trim().toUpperCase() : undefined,
          emailVerified: emailVerified, // true si verificó, false si saltó
          language,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 409) {
          // Determinar qué campo está duplicado según el código de error
          const errorCode = data.code || ''
          let errorMessage = ''
          
          if (errorCode === 'DUPLICATE_USER') {
            errorMessage = language === 'es'
              ? 'Ya existe un usuario con ese email. ¿Ya tienes una cuenta?'
              : 'A user with that email already exists. Do you already have an account?'
          } else if (errorCode === 'DUPLICATE_ORGANIZATION') {
            // Intentar determinar si es email o CIF basado en el mensaje o detalles
            const errorText = (data.error || '').toLowerCase()
            if (errorText.includes('email')) {
              errorMessage = language === 'es'
                ? 'Ya existe una organización con ese email de contacto. ¿Ya tienes una cuenta?'
                : 'An organization with that contact email already exists. Do you already have an account?'
            } else if (errorText.includes('cif') || errorText.includes('taxid') || errorText.includes('nif')) {
              errorMessage = language === 'es'
                ? 'Ya existe una organización con ese CIF/NIF. ¿Ya tienes una cuenta?'
                : 'An organization with that CIF/NIF already exists. Do you already have an account?'
            } else {
              // Mensaje genérico si no podemos determinar
              errorMessage = language === 'es'
                ? 'Ya existe una organización con ese email o CIF/NIF. ¿Ya tienes una cuenta?'
                : 'An organization with that email or CIF/NIF already exists. Do you already have an account?'
            }
          } else {
            // Código de error desconocido, usar mensaje genérico
            errorMessage = data.error || (language === 'es'
              ? 'Ya existe una cuenta con ese email o CIF. ¿Ya tienes una cuenta?'
              : 'An account with that email or CIF already exists. Do you already have an account?')
          }
          
          throw new Error(errorMessage)
        } else if (response.status === 401) {
          throw new Error(
            language === 'es'
              ? 'Error de configuración. Por favor contacta con soporte.'
              : 'Configuration error. Please contact support.'
          )
        } else if (data.details) {
          throw new Error(data.details[0]?.message || data.error || 'Error')
        } else {
          throw new Error(data.error || 'Error al crear la cuenta')
        }
      }

      setAccountCreated(true)
      setStep(3)
    } catch (err: any) {
      setError(err.message || 'Error al crear la cuenta')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyEmail = async () => {
    if (!verificationCode || verificationCode.length !== 6) {
      setError(
        language === 'es'
          ? 'Por favor ingresa el código de 6 dígitos'
          : 'Please enter the 6-digit code'
      )
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.userEmail,
          code: verificationCode,
          language,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Código inválido')
      }

      setError('')
      setEmailVerified(true) // Marcar como verificado
      setStep(4)
    } catch (err: any) {
      setError(err.message || 'Código de verificación inválido')
    } finally {
      setLoading(false)
    }
  }

  const handleCompleteSignup = () => {
    // Opcional: Enviar preguntas opcionales a un endpoint si es necesario
    // Por ahora, simplemente redirigir a página de éxito
    window.location.href = '/signup/success'
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
    } else if (type === 'number') {
      setFormData((prev) => ({
        ...prev,
        [name]: value ? parseInt(value, 10) : undefined,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
    setError('')
  }

  const toggleMainNeed = (need: string) => {
    setFormData((prev) => {
      const currentNeeds = prev.mainNeeds || []
      const updatedNeeds = currentNeeds.includes(need)
        ? currentNeeds.filter((n) => n !== need)
        : [...currentNeeds, need]
      return {
        ...prev,
        mainNeeds: updatedNeeds,
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Columna izquierda - Beneficios (arriba en mobile, izquierda en desktop) */}
          <div className="space-y-6 lg:space-y-8 pt-4 lg:pt-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  {language === 'es' ? 'Empieza de inmediato' : 'Start immediately'}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {language === 'es'
                    ? 'Configura tu sistema en minutos con nuestra plataforma intuitiva. Sin necesidad de conocimientos técnicos avanzados, gestiona tu negocio desde el primer día.'
                    : 'Set up your system in minutes with our intuitive platform. No need for advanced technical knowledge, manage your business from day one.'}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  {language === 'es'
                    ? 'Acepta cualquier modelo de negocio'
                    : 'Accept any business model'}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {language === 'es'
                    ? 'Trasteros, parkings, almacenes y mucho más. Todo lo que necesitas para gestionar tu negocio de almacenamiento en una plataforma unificada.'
                    : 'Storage units, parking, warehouses and much more. Everything you need to manage your storage business in a unified platform.'}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  {language === 'es'
                    ? 'Únete a empresas que confían en StorageFy'
                    : 'Join businesses that trust StorageFy'}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {language === 'es'
                    ? 'Empresas de todos los tamaños confían en StorageFy para gestionar sus operaciones diarias de manera eficiente y profesional.'
                    : 'Businesses of all sizes trust StorageFy to manage their daily operations efficiently and professionally.'}
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario (arriba en mobile, derecha en desktop) */}
          <div className="w-full order-1 lg:order-2">
            {/* Progress Bar */}
            <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  step >= s
                    ? 'bg-accent-500 border-accent-500 text-white'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}
              >
                {step > s ? <CheckCircle className="w-5 h-5" /> : s}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-accent-500 to-accent-600 h-2 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Información básica */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold text-primary-800 mb-2">
                    {language === 'es'
                      ? 'Crea tu cuenta'
                      : 'Create your account'}
                  </h2>
                  <p className="text-primary-600 mb-4">
                    {language === 'es'
                      ? 'Completa tus datos personales para comenzar'
                      : 'Complete your personal information to get started'}
                  </p>
                </div>

                {/* Banner informativo */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-700">
                      <CreditCard className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold">
                        {language === 'es'
                          ? 'Sin tarjeta de crédito'
                          : 'No credit card required'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-700">
                      <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold">
                        {language === 'es'
                          ? 'Cuenta lista en 2 minutos'
                          : 'Account ready in 2 minutes'}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    {language === 'es'
                      ? 'Nombre completo'
                      : 'Full name'}{' '}
                    *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="userName"
                      autoComplete="name"
                      value={formData.userName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder={
                        language === 'es' ? 'Juan Pérez' : 'John Doe'
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    {language === 'es' ? 'Email' : 'Email'} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="userEmail"
                      autoComplete="email"
                      value={formData.userEmail}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder={
                        language === 'es'
                          ? 'tu@email.com'
                          : 'your@email.com'
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    {language === 'es'
                      ? 'Contraseña'
                      : 'Password'}{' '}
                    *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="userPassword"
                      autoComplete="new-password"
                      value={formData.userPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder={
                        language === 'es'
                          ? 'Mínimo 6 caracteres'
                          : 'Minimum 6 characters'
                      }
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === 'es'
                      ? 'Mínimo 6 caracteres'
                      : 'Minimum 6 characters'}
                  </p>
                </div>

                {/* Checkbox de marketing emails */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={wantsMarketingEmails}
                      onChange={(e) => setWantsMarketingEmails(e.target.checked)}
                      className="mt-1 w-4 h-4 text-accent-600 border-gray-300 rounded focus:ring-accent-500"
                    />
                    <span className="text-sm text-primary-600">
                      {language === 'es' ? (
                        <>
                          Recibe correos electrónicos de StorageFy sobre actualizaciones de productos, 
                          novedades del sector y eventos. Puedes cancelar la suscripción en cualquier momento.{' '}
                          <a 
                            href="/privacy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent-600 hover:text-accent-700 underline"
                          >
                            Política de privacidad
                          </a>
                        </>
                      ) : (
                        <>
                          Receive emails from StorageFy about product updates, industry news, and events. 
                          You can unsubscribe at any time.{' '}
                          <a 
                            href="/privacy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent-600 hover:text-accent-700 underline"
                          >
                            Privacy Policy
                          </a>
                        </>
                      )}
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                {/* Link "¿Ya tienes una cuenta?" */}
                <div className="text-center pt-2">
                  <p className="text-sm text-primary-600">
                    {language === 'es' ? (
                      <>
                        ¿Ya tienes una cuenta?{' '}
                        <a 
                          href="https://storagefy.app/auth/signin" 
                          className="text-accent-600 hover:text-accent-700 font-semibold underline"
                        >
                          Inicia sesión
                        </a>
                      </>
                    ) : (
                      <>
                        Already have an account?{' '}
                        <a 
                          href="https://storagefy.app/auth/signin" 
                          className="text-accent-600 hover:text-accent-700 font-semibold underline"
                        >
                          Log in
                        </a>
                      </>
                    )}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleStep1Next}
                    className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 flex items-center gap-2"
                  >
                    {language === 'es' ? 'Continuar' : 'Continue'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Datos de empresa */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold text-primary-800 mb-2">
                    {language === 'es'
                      ? 'Información de tu empresa'
                      : 'Your company information'}
                  </h2>
                  <p className="text-primary-600">
                    {language === 'es'
                      ? 'Completa los datos de tu organización'
                      : 'Complete your organization information'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    {language === 'es'
                      ? 'Nombre de la empresa'
                      : 'Company name'}{' '}
                    *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder={
                        language === 'es'
                          ? 'Mi Empresa SL'
                          : 'My Company Ltd'
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    CIF/NIF {language === 'es' ? '(opcional)' : '(optional)'}
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="taxId"
                      value={formData.taxId}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent uppercase"
                      placeholder="B12345678"
                      maxLength={9}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === 'es'
                      ? 'Formato: Letra + 8 dígitos (ej: B12345678). Puedes completarlo después.'
                      : 'Format: Letter + 8 digits (e.g. B12345678). You can complete it later.'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    {language === 'es' ? 'Teléfono' : 'Phone'} {language === 'es' ? '(opcional)' : '(optional)'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="+34612345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    {language === 'es' ? 'Código promocional' : 'Promo code'} {language === 'es' ? '(opcional)' : '(optional)'}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value.toUpperCase())
                        setPromoCodeValidated(false)
                        setPromoCodeMessage('')
                        setPromoCodeDetails('')
                        setError('')
                      }}
                      disabled={promoCodeValidated}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent uppercase disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder={language === 'es' ? 'Ej: STORAGEFY30' : 'E.g: STORAGEFY30'}
                    />
                    {!promoCodeValidated ? (
                      <button
                        type="button"
                        onClick={handleValidatePromoCode}
                        disabled={validatingPromo || !promoCode.trim()}
                        className="px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {validatingPromo ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            {language === 'es' ? 'Validando...' : 'Validating...'}
                          </>
                        ) : (
                          <>
                            {language === 'es' ? 'Validar' : 'Validate'}
                          </>
                        )}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setPromoCode('')
                          setPromoCodeValidated(false)
                          setPromoCodeMessage('')
                          setPromoCodeDetails('')
                        }}
                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
                      >
                        {language === 'es' ? 'Cambiar' : 'Change'}
                      </button>
                    )}
                  </div>
                  {promoCodeValidated && promoCodeMessage && (
                    <div className="mt-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium">{promoCodeMessage}</p>
                          {promoCodeDetails && (
                            <p className="text-sm mt-1 opacity-90">{promoCodeDetails}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    {language === 'es' ? 'Atrás' : 'Back'}
                  </button>
                  <button
                    onClick={handleStep2Next}
                    disabled={loading}
                    className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {language === 'es' ? 'Creando cuenta...' : 'Creating account...'}
                      </>
                    ) : (
                      <>
                        {language === 'es' ? 'Crear cuenta' : 'Create account'}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Verificación de email */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-800 mb-2">
                    {language === 'es'
                      ? 'Verifica tu email'
                      : 'Verify your email'}
                  </h2>
                  <p className="text-primary-600 mb-4">
                    {language === 'es'
                      ? `Hemos enviado un código de verificación a ${formData.userEmail}`
                      : `We've sent a verification code to ${formData.userEmail}`}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    {language === 'es'
                      ? 'Código de verificación'
                      : 'Verification code'}
                  </label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 6)
                      setVerificationCode(value)
                      setError('')
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-center text-2xl font-mono tracking-widest"
                    placeholder="000000"
                    maxLength={6}
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {language === 'es'
                      ? 'Ingresa el código de 6 dígitos que recibiste por email'
                      : 'Enter the 6-digit code you received by email'}
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                <div className="flex justify-between gap-4">
                  <button
                    onClick={() => {
                      setEmailVerified(false) // Marcar como no verificado al saltar
                      setStep(4)
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
                  >
                    {language === 'es' ? 'Verificar luego' : 'Verify later'}
                  </button>
                  <button
                    onClick={handleVerifyEmail}
                    disabled={loading || verificationCode.length !== 6}
                    className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {language === 'es' ? 'Verificando...' : 'Verifying...'}
                      </>
                    ) : (
                      <>
                        {language === 'es' ? 'Verificar' : 'Verify'}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Preguntas opcionales */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold text-primary-800 mb-2">
                    {language === 'es'
                      ? 'Cuéntanos sobre tu negocio'
                      : 'Tell us about your business'}
                  </h2>
                  <p className="text-primary-600">
                    {language === 'es'
                      ? 'Esta información nos ayuda a conocerte mejor (opcional)'
                      : 'This information helps us get to know you better (optional)'}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-2">
                      {language === 'es'
                        ? '¿Cuántas ubicaciones tienes?'
                        : 'How many locations do you have?'}
                    </label>
                    <input
                      type="number"
                      name="numLocations"
                      value={formData.numLocations || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="0"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-2">
                      {language === 'es'
                        ? '¿Cuántas unidades aproximadamente?'
                        : 'Approximately how many units?'}
                    </label>
                    <input
                      type="number"
                      name="numUnits"
                      value={formData.numUnits || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-3">
                    {language === 'es'
                      ? '¿Qué sistema usas actualmente?'
                      : 'What system do you currently use?'}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'Excel', label: 'Excel', icon: FileText },
                      { value: 'Google Sheets', label: 'Google Sheets', icon: FileText },
                      { value: 'Otro software', label: language === 'es' ? 'Otro software' : 'Other software', icon: Building2 },
                      { value: 'Manual', label: language === 'es' ? 'Manual' : 'Manual', icon: FileText },
                      { value: 'Ninguno', label: language === 'es' ? 'Ninguno' : 'None', icon: FileText },
                    ].map((option) => {
                      const Icon = option.icon
                      const isSelected = formData.currentSystem === option.value
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              currentSystem: isSelected ? '' : option.value,
                            })
                          }}
                          className={`
                            relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200
                            ${isSelected
                              ? 'border-accent-500 bg-accent-50 shadow-md'
                              : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                            }
                          `}
                        >
                          <div className={`
                            w-10 h-10 rounded-lg flex items-center justify-center
                            ${isSelected ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-600'}
                          `}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className={`font-medium flex-1 text-left ${isSelected ? 'text-accent-700' : 'text-primary-700'}`}>
                            {option.label}
                          </span>
                          {isSelected && (
                            <CheckCircle className="w-5 h-5 text-accent-500" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-3">
                    {language === 'es'
                      ? '¿Cuáles son tus principales necesidades?'
                      : 'What are your main needs?'}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'pagos', label: language === 'es' ? 'Pagos' : 'Payments', icon: DollarSign },
                      { value: 'contratos', label: language === 'es' ? 'Contratos' : 'Contracts', icon: FileText },
                      { value: 'reportes', label: language === 'es' ? 'Reportes' : 'Reports', icon: BarChart3 },
                      { value: 'reservas', label: language === 'es' ? 'Reservas online' : 'Online reservations', icon: Calendar },
                      { value: 'otras', label: language === 'es' ? 'Otras' : 'Others', icon: MoreHorizontal },
                    ].map((need) => {
                      const Icon = need.icon
                      const isSelected = formData.mainNeeds?.includes(need.value) || false
                      return (
                        <button
                          key={need.value}
                          type="button"
                          onClick={() => toggleMainNeed(need.value)}
                          className={`
                            relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200
                            ${isSelected
                              ? 'border-accent-500 bg-accent-50 shadow-md'
                              : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                            }
                          `}
                        >
                          <div className={`
                            w-10 h-10 rounded-lg flex items-center justify-center
                            ${isSelected ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-600'}
                          `}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className={`font-medium flex-1 text-left ${isSelected ? 'text-accent-700' : 'text-primary-700'}`}>
                            {need.label}
                          </span>
                          {isSelected && (
                            <CheckCircle className="w-5 h-5 text-accent-500" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-3">
                    {language === 'es'
                      ? '¿Cómo nos conociste?'
                      : 'How did you find us?'}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { value: 'Google', label: 'Google', icon: Search },
                      { value: 'Facebook', label: 'Facebook', icon: Facebook },
                      { value: 'Instagram', label: 'Instagram', icon: Instagram },
                      { value: 'Recomendación', label: language === 'es' ? 'Recomendación' : 'Recommendation', icon: Users },
                      { value: 'Otro', label: language === 'es' ? 'Otro' : 'Other', icon: MoreHorizontal },
                    ].map((option) => {
                      const Icon = option.icon
                      const isSelected = formData.heardFrom === option.value
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              heardFrom: isSelected ? '' : option.value,
                            })
                          }}
                          className={`
                            relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200
                            ${isSelected
                              ? 'border-accent-500 bg-accent-50 shadow-md'
                              : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                            }
                          `}
                        >
                          <div className={`
                            w-10 h-10 rounded-lg flex items-center justify-center
                            ${isSelected ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-600'}
                          `}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className={`text-sm font-medium ${isSelected ? 'text-accent-700' : 'text-primary-700'}`}>
                            {option.label}
                          </span>
                          {isSelected && (
                            <CheckCircle className="w-4 h-4 text-accent-500 absolute top-2 right-2" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-3">
                    {language === 'es'
                      ? '¿Estás interesado en Verifacti?'
                      : 'Are you interested in Verifacti?'}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        wantsVerifacti: !formData.wantsVerifacti,
                      })
                    }}
                    className={`
                      w-full relative flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200
                      ${formData.wantsVerifacti
                        ? 'border-accent-500 bg-accent-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center
                      ${formData.wantsVerifacti ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-600'}
                    `}>
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`font-semibold ${formData.wantsVerifacti ? 'text-accent-700' : 'text-primary-700'}`}>
                        {language === 'es' ? 'Verifacti' : 'Verifacti'}
                      </p>
                      <p className={`text-sm ${formData.wantsVerifacti ? 'text-accent-600' : 'text-gray-600'}`}>
                        {language === 'es'
                          ? 'Verificación de identidad para tus clientes'
                          : 'Identity verification for your customers'}
                      </p>
                    </div>
                    {formData.wantsVerifacti && (
                      <CheckCircle className="w-6 h-6 text-accent-500" />
                    )}
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    {language === 'es'
                      ? 'Comentarios adicionales'
                      : 'Additional comments'}
                  </label>
                  <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder={
                      language === 'es'
                        ? 'Cuéntanos algo más sobre tu negocio...'
                        : 'Tell us more about your business...'
                    }
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    {language === 'es' ? 'Atrás' : 'Back'}
                  </button>
                  <button
                    onClick={handleCompleteSignup}
                    className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 flex items-center gap-2"
                  >
                    {language === 'es' ? 'Finalizar' : 'Finish'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Confirmación */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-12 h-12 text-accent-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800">
                  {language === 'es'
                    ? '¡Cuenta creada exitosamente!'
                    : 'Account created successfully!'}
                </h2>
                <p className="text-primary-600">
                  {language === 'es'
                    ? 'Tu cuenta está pendiente de activación por nuestro equipo. Te notificaremos cuando esté lista.'
                    : 'Your account is pending activation by our team. We will notify you when it is ready.'}
                </p>
                <div className="pt-6">
                  <a
                    href="/signup/success"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
                  >
                    {language === 'es' ? 'Ver detalles' : 'View details'}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

