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
  const [units, setUnits] = useState(50)

  // Calculations - More realistic and conservative estimates
  
  // Time savings: Only calculate savings from automation (not all hours worked)
  // StorageFy typically saves 40-60% of admin time, we'll use 50% as conservative estimate
  const timeSavingsPercentage = 0.50
  const hoursSavedPerWeek = hoursPerWeek * timeSavingsPercentage
  const hoursPerMonth = hoursSavedPerWeek * 4.33
  const hoursPerYear = hoursPerMonth * 12
  const hourlyRate = 15 // €15/hour average (conservative for admin work)
  const timeSavings = hoursPerYear * hourlyRate

  // Revenue calculation based on actual units
  // Average price per unit per month: €80-120, we'll use €90 as conservative average
  const averageUnitPricePerMonth = 90
  const monthlyRevenue = units * averageUnitPricePerMonth
  const annualRevenue = monthlyRevenue * 12

  // Delinquency savings: Based on actual revenue
  // More conservative: reduce delinquency by 50% of current rate (minimum 3%)
  const currentDelinquency = delinquencyRate / 100
  const delinquencyReduction = Math.max(0.03, currentDelinquency * 0.5) // At least 50% reduction, minimum 3%
  const newDelinquency = Math.max(0.03, currentDelinquency - delinquencyReduction)
  const delinquencySavings = (currentDelinquency - newDelinquency) * annualRevenue

  // Reservation increase: More conservative estimate
  // Widget typically increases online reservations by 30-50%, we'll use 40% increase
  const reservationIncreaseRate = 0.40
  const additionalReservationsPerMonth = reservationsPerMonth * reservationIncreaseRate
  // Average reservation value: €60-80 per month, we'll use €65
  // But only count first 6 months of new reservations (realistic retention)
  const averageReservationValuePerMonth = 65
  const monthsCounted = 6 // Only count first 6 months (conservative)
  const reservationSavings = additionalReservationsPerMonth * averageReservationValuePerMonth * monthsCounted

  const totalSavings = timeSavings + delinquencySavings + reservationSavings
  
  // Calculate StorageFy cost: 1 EUR per unit per month + VAT (21%)
  // Annual payment gets 20% discount
  const pricePerUnit = 1
  const vatRate = 0.21
  const annualDiscount = 0.20 // 20% discount for annual payment
  const monthlyPrice = units * pricePerUnit
  const monthlyPriceWithVat = monthlyPrice * (1 + vatRate)
  const annualPrice = monthlyPrice * 12
  const annualPriceWithDiscount = annualPrice * (1 - annualDiscount)
  const storagefyCost = annualPriceWithDiscount * (1 + vatRate) // Annual cost with discount and VAT
  
  // ROI calculation
  const netSavings = totalSavings - storagefyCost
  const roi = storagefyCost > 0 ? (netSavings / storagefyCost) * 100 : 0
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
                <label htmlFor="hours-per-week" className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuántas horas semanales dedicas a tareas administrativas?` 
                    : `How many hours per week do you spend on administrative tasks?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="hours-per-week"
                    type="range"
                    min="0"
                    max="40"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="flex-1"
                    aria-label={language === 'es' ? 'Horas semanales' : 'Hours per week'}
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {hoursPerWeek}h
                  </span>
                </div>
              </div>

              {/* Employees */}
              <div>
                <label htmlFor="employees" className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuántos empleados gestionan la administración?` 
                    : `How many employees manage administration?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="employees"
                    type="range"
                    min="1"
                    max="10"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="flex-1"
                    aria-label={language === 'es' ? 'Número de empleados' : 'Number of employees'}
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {employees}
                  </span>
                </div>
              </div>

              {/* Delinquency */}
              <div>
                <label htmlFor="delinquency-rate" className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuál es tu morosidad actual?` 
                    : `What is your current delinquency rate?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="delinquency-rate"
                    type="range"
                    min="0"
                    max="30"
                    value={delinquencyRate}
                    onChange={(e) => setDelinquencyRate(Number(e.target.value))}
                    className="flex-1"
                    aria-label={language === 'es' ? 'Tasa de morosidad' : 'Delinquency rate'}
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {delinquencyRate}%
                  </span>
                </div>
              </div>

              {/* Reservations */}
              <div>
                <label htmlFor="reservations-per-month" className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuántas reservas recibes al mes?` 
                    : `How many reservations do you receive per month?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="reservations-per-month"
                    type="range"
                    min="0"
                    max="100"
                    value={reservationsPerMonth}
                    onChange={(e) => setReservationsPerMonth(Number(e.target.value))}
                    className="flex-1"
                    aria-label={language === 'es' ? 'Reservas mensuales' : 'Monthly reservations'}
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {reservationsPerMonth}
                  </span>
                </div>
              </div>

              {/* Locations */}
              <div>
                <label htmlFor="locations" className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuántas locaciones gestionas?` 
                    : `How many locations do you manage?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="locations"
                    type="range"
                    min="1"
                    max="10"
                    value={locations}
                    onChange={(e) => setLocations(Number(e.target.value))}
                    className="flex-1"
                    aria-label={language === 'es' ? 'Número de locaciones' : 'Number of locations'}
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {locations}
                  </span>
                </div>
              </div>

              {/* Units */}
              <div>
                <label htmlFor="units" className="block text-sm font-semibold text-primary-700 mb-2">
                  {language === 'es' 
                    ? `¿Cuántas unidades gestionas?` 
                    : `How many units do you manage?`}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="units"
                    type="range"
                    min="1"
                    max="200"
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="flex-1"
                    aria-label={language === 'es' ? 'Número de unidades' : 'Number of units'}
                  />
                  <span className="text-2xl font-bold text-accent-600 w-16 text-right">
                    {units}
                  </span>
                </div>
                {units > 200 && (
                  <p className="text-xs text-accent-600 mt-2">
                    {language === 'es' 
                      ? '💡 Más de 200 unidades: Contacta para precio Enterprise personalizado'
                      : '💡 More than 200 units: Contact for custom Enterprise pricing'}
                  </p>
                )}
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
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <Clock className="w-5 h-5 text-accent-600" />
                      <span className="text-primary-700 font-semibold">
                        {language === 'es' ? 'Ahorro en tiempo' : 'Time savings'}
                      </span>
                    </div>
                    <p className="text-xs text-primary-500 ml-8">
                      {language === 'es' 
                        ? `${hoursSavedPerWeek.toFixed(1)}h ahorradas/semana (50% de ${hoursPerWeek}h) × €15/hora = €${timeSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}/año`
                        : `${hoursSavedPerWeek.toFixed(1)}h saved/week (50% of ${hoursPerWeek}h) × €15/hour = €${timeSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}/year`}
                    </p>
                  </div>
                  <span className="text-xl font-bold text-primary-800 ml-4">
                    €{timeSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <DollarSign className="w-5 h-5 text-accent-600" />
                      <span className="text-primary-700 font-semibold">
                        {language === 'es' ? 'Reducción morosidad' : 'Delinquency reduction'}
                      </span>
                    </div>
                    <p className="text-xs text-primary-500 ml-8">
                      {language === 'es' 
                        ? `De ${delinquencyRate}% a ${(newDelinquency * 100).toFixed(1)}% (reducción del ${(delinquencyReduction * 100).toFixed(0)}%) = €${delinquencySavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}/año`
                        : `From ${delinquencyRate}% to ${(newDelinquency * 100).toFixed(1)}% (${(delinquencyReduction * 100).toFixed(0)}% reduction) = €${delinquencySavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}/year`}
                    </p>
                  </div>
                  <span className="text-xl font-bold text-primary-800 ml-4">
                    €{delinquencySavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <Users className="w-5 h-5 text-accent-600" />
                      <span className="text-primary-700 font-semibold">
                        {language === 'es' ? 'Aumento reservas' : 'Reservation increase'}
                      </span>
                    </div>
                    <p className="text-xs text-primary-500 ml-8">
                      {language === 'es' 
                        ? `+${Math.round(additionalReservationsPerMonth)} reservas/mes (40% aumento) × €65/mes × 6 meses = €${reservationSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}/año`
                        : `+${Math.round(additionalReservationsPerMonth)} reservations/month (40% increase) × €65/month × 6 months = €${reservationSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}/year`}
                    </p>
                  </div>
                  <span className="text-xl font-bold text-primary-800 ml-4">
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
                <div className="text-4xl font-bold text-accent-600 mb-2">
                  {roiPercentage.toFixed(0)}%
                </div>
                <div className="text-xs text-primary-500 mb-4">
                  {language === 'es' 
                    ? `Retorno sobre inversión anual` 
                    : `Annual return on investment`}
                </div>
                
                <div className="bg-primary-50 rounded-xl p-4 mb-4 text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary-700">
                      {language === 'es' ? 'Ahorro total:' : 'Total savings:'}
                    </span>
                    <span className="text-lg font-bold text-primary-800">
                      €{totalSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary-700">
                      {language === 'es' ? 'Costo StorageFy:' : 'StorageFy cost:'}
                    </span>
                    <span className="text-lg font-bold text-primary-800">
                      €{storagefyCost.toLocaleString('es-ES', { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="border-t border-primary-200 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-accent-700">
                        {language === 'es' ? 'Ahorro neto:' : 'Net savings:'}
                      </span>
                      <span className="text-xl font-bold text-accent-600">
                        €{netSavings.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-primary-500 mb-4">
                  {language === 'es' 
                    ? `Cálculo: ${units} unidades × €${pricePerUnit}/mes × 12 meses × 0.80 (descuento anual) × 1.21 (IVA) = €${storagefyCost.toLocaleString('es-ES', { maximumFractionDigits: 2 })}/año` 
                    : `Calculation: ${units} units × €${pricePerUnit}/month × 12 months × 0.80 (annual discount) × 1.21 (VAT) = €${storagefyCost.toLocaleString('es-ES', { maximumFractionDigits: 2 })}/year`}
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

