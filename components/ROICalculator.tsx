'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, Clock, Users, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function ROICalculator() {
  const { language } = useLanguage()
  
  const [hoursPerWeek, setHoursPerWeek] = useState(10)
  const [employees, setEmployees] = useState(2)
  const [delinquencyRate, setDelinquencyRate] = useState(10)
  const [reservationsPerMonth, setReservationsPerMonth] = useState(20)
  const [locations, setLocations] = useState(1)

  // Calculations
  const hoursPerMonth = hoursPerWeek * 4
  const hoursPerYear = hoursPerMonth * 12
  const hourlyRate = 15 // €15/hour average
  const timeSavings = hoursPerYear * hourlyRate

  const currentDelinquency = delinquencyRate / 100
  const newDelinquency = 0.03 // 3% with StorageFy
  const averageRevenue = 50000 // Example annual revenue
  const delinquencySavings = (currentDelinquency - newDelinquency) * averageRevenue

  const baseReservations = reservationsPerMonth
  const newReservations = baseReservations * 3 // 300% increase with widget
  const additionalReservations = newReservations - baseReservations
  const reservationValue = 500 // Average value per reservation per year
  const reservationSavings = additionalReservations * reservationValue * 12

  const totalSavings = timeSavings + delinquencySavings + reservationSavings
  const storagefyCost = 99 * 12 // Professional plan annual
  const roi = ((totalSavings - storagefyCost) / storagefyCost) * 100
  const roiPercentage = Math.max(0, roi)

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="max-w-6xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6"
          >
            <Calculator className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium text-accent-700">
              {language === 'es' ? 'Calculadora ROI' : 'ROI Calculator'}
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">
              {language === 'es' ? '¿Cuánto ahorrarás' : 'How much will you save'}
            </span>
            <br />
            <span className="text-primary-800">
              {language === 'es' ? 'con StorageFy?' : 'with StorageFy?'}
            </span>
          </h2>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary-800 mb-6">
              {language === 'es' ? 'Tus Datos' : 'Your Data'}
            </h3>

            <div className="space-y-6">
              {/* Hours per week */}
              <div>
                <label className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuántas horas semanales dedicas a tareas administrativas?` 
                    : `How many hours per week do you spend on administrative tasks?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {hoursPerWeek}h
                  </span>
                </div>
              </div>

              {/* Employees */}
              <div>
                <label className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuántos empleados gestionan la administración?` 
                    : `How many employees manage administration?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {employees}
                  </span>
                </div>
              </div>

              {/* Delinquency */}
              <div>
                <label className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuál es tu morosidad actual?` 
                    : `What is your current delinquency rate?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={delinquencyRate}
                    onChange={(e) => setDelinquencyRate(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {delinquencyRate}%
                  </span>
                </div>
              </div>

              {/* Reservations */}
              <div>
                <label className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuántas reservas recibes al mes?` 
                    : `How many reservations do you receive per month?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={reservationsPerMonth}
                    onChange={(e) => setReservationsPerMonth(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {reservationsPerMonth}
                  </span>
                </div>
              </div>

              {/* Locations */}
              <div>
                <label className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuántas locaciones gestionas?` 
                    : `How many locations do you manage?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={locations}
                    onChange={(e) => setLocations(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {locations}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Total Savings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8" />
                <h3 className="text-2xl font-bold">
                  {language === 'es' ? 'Ahorro Anual Estimado' : 'Estimated Annual Savings'}
                </h3>
              </div>
              <div className="text-5xl font-bold mb-2">
                €{totalSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-accent-100">
                {language === 'es' 
                  ? 'Basado en tus datos' 
                  : 'Based on your data'}
              </div>
            </motion.div>

            {/* Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-primary-800 mb-6">
                {language === 'es' ? 'Desglose de Ahorros' : 'Savings Breakdown'}
              </h4>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent-600" />
                    <span className="text-primary-700">
                      {language === 'es' ? 'Ahorro en tiempo' : 'Time savings'}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-primary-800">
                    €{timeSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-accent-600" />
                    <span className="text-primary-700">
                      {language === 'es' ? 'Reducción morosidad' : 'Delinquency reduction'}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-primary-800">
                    €{delinquencySavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent-600" />
                    <span className="text-primary-700">
                      {language === 'es' ? 'Aumento reservas' : 'Reservation increase'}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-primary-800">
                    €{reservationSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>

            {/* ROI */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-sm text-primary-600 mb-2">
                  {language === 'es' ? 'ROI Estimado' : 'Estimated ROI'}
                </div>
                <div className="text-4xl font-bold text-accent-600 mb-4">
                  {roiPercentage.toFixed(0)}%
                </div>
                <div className="text-primary-600 mb-6">
                  {language === 'es' 
                    ? `Costo StorageFy: €${storagefyCost.toLocaleString('es-ES')}/año` 
                    : `StorageFy Cost: €${storagefyCost.toLocaleString('es-ES')}/year`}
                </div>
                <motion.a
                  href="/demo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {language === 'es' ? 'Comenzar Prueba Gratis' : 'Start Free Trial'}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

