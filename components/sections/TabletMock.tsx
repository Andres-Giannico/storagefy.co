'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  LayoutDashboard,
  ClipboardList,
  MapPin,
  Package,
  Users,
  FileText,
  DollarSign,
  Receipt,
  BarChart2,
  Settings,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  HelpCircle,
  Filter,
  Plus,
  RefreshCw,
  Building2,
  CheckCircle,
  Lock,
  AlertTriangle,
  TrendingUp,
  Cog,
  Euro,
  Calendar,
  FileDown,
  BarChart3,
  RotateCcw,
  Clock,
  Type,
  LogOut,
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'

const VIEWS = ['dashboard', 'ubicaciones', 'unidades', 'pagos', 'reportes'] as const

const TabletMock = () => {
  const { language } = useLanguage()
  const [activeView, setActiveView] = useState<'dashboard' | 'ubicaciones' | 'unidades' | 'pagos' | 'reportes'>('dashboard')

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView((prev) => {
        const idx = VIEWS.indexOf(prev)
        return VIEWS[(idx + 1) % VIEWS.length]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (activeView === 'unidades' || activeView === 'reportes') {
      setIsLoading(true)
      const t = setTimeout(() => setIsLoading(false), 500)
      return () => clearTimeout(t)
    }
  }, [activeView])

  const LoadingSkeleton = () => (
    <div className="space-y-4 animate-pulse">
      <div className="h-6 bg-zinc-700 rounded w-1/3" />
      <div className="h-3 bg-zinc-700 rounded w-2/3" />
      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-20 bg-zinc-800 rounded-lg" />
        ))}
      </div>
      <div className="h-32 bg-zinc-800 rounded-xl" />
      <div className="h-24 bg-zinc-800 rounded-xl" />
    </div>
  )

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', view: 'dashboard' as const },
    { icon: ClipboardList, label: language === 'es' ? 'Tablón' : 'Board', badge: 8, dot: true },
    { icon: MapPin, label: language === 'es' ? 'Ubicaciones' : 'Locations', view: 'ubicaciones' as const },
    { icon: Package, label: language === 'es' ? 'Unidades' : 'Units', view: 'unidades' as const, dot: true },
    { icon: Users, label: language === 'es' ? 'Clientes' : 'Clients', dot: true },
    { icon: FileText, label: language === 'es' ? 'Contratos' : 'Contracts' },
    { icon: DollarSign, label: language === 'es' ? '$ Pagos' : '$ Payments', view: 'pagos' as const },
    { icon: Receipt, label: language === 'es' ? 'Facturación' : 'Billing', dot: true },
    { icon: BarChart2, label: language === 'es' ? 'Reportes' : 'Reports', view: 'reportes' as const },
    { icon: Settings, label: language === 'es' ? 'Configuración' : 'Settings', dot: true },
  ]

  const summaryCards = [
    { label: language === 'es' ? 'Total' : 'Total', value: '102', sub: language === 'es' ? '8 disponibles' : '8 available', color: 'blue', icon: Package },
    { label: language === 'es' ? 'Disponibles' : 'Available', value: '8', sub: '620 EUR/mes', color: 'green', icon: CheckCircle },
    { label: language === 'es' ? 'Ocupadas' : 'Occupied', value: '94', sub: language === 'es' ? 'En uso actual' : 'In use', color: 'red', icon: Lock },
    { label: language === 'es' ? 'Deudores' : 'Debtors', value: '55', sub: language === 'es' ? 'Con retraso' : 'Delayed', color: 'orange', icon: AlertTriangle },
  ]

  const unitRows = [
    { code: 'MP-108', dims: '1.2x0.8x2.0 m', price: '60.00 EUR', client: 'MARIA GARCIA', payment: 'AL DIA' },
    { code: 'MP-106', dims: '1.6x1.2x2.0 m', price: '90.00 EUR', client: 'CARLOS LOPEZ', payment: 'MOROSO' },
    { code: 'MP-105', dims: '1.2x0.8x2.0 m', price: '60.00 EUR', client: 'ANA MARTINEZ', payment: 'AL DIA' },
    { code: 'SP-26', dims: '1.0x0.6x1.8 m', price: '50.00 EUR', client: 'PEDRO SANCHEZ', payment: 'AL DIA' },
    { code: 'SP-12', dims: '1.4x1.0x2.0 m', price: '80.00 EUR', client: 'LAURA FERNANDEZ', payment: 'AL DIA' },
    { code: 'SP-5', dims: '0.8x0.6x1.5 m', price: '40.00 EUR', client: 'JAVIER RUIZ', payment: 'MOROSO' },
    { code: 'MP-308', dims: '2.0x1.2x2.2 m', price: '120.00 EUR', client: 'ELENA TORRES', payment: 'AL DIA' },
    { code: 'SP-19', dims: '1.2x0.9x1.8 m', price: '70.00 EUR', client: 'ROBERTO BLANCO', payment: 'AL DIA' },
    { code: 'MP-312', dims: '1.5x1.0x2.0 m', price: '95.00 EUR', client: 'SARA MOLINA', payment: 'AL DIA' },
    { code: 'MP-114', dims: '1.8x1.2x2.2 m', price: '110.00 EUR', client: 'DAVID GOMEZ', payment: 'AL DIA' },
  ]

  const dashboardKpis = [
    { label: language === 'es' ? 'OCUPACION' : 'OCCUPANCY', value: '91.3%', sub: '94 de 103 espacios', color: 'teal', icon: Package, progress: 91.3 },
    { label: language === 'es' ? 'INGRESOS MENSUALES' : 'MONTHLY REVENUE', value: '7998 EUR', sub: language === 'es' ? 'De 86 contratos' : 'From 86 contracts', subHighlight: language === 'es' ? 'Cobrado: 3770 EUR' : 'Collected: 3770 EUR', color: 'green', icon: Euro },
    { label: language === 'es' ? 'POTENCIAL DISPONIBLE' : 'AVAILABLE POTENTIAL', value: '620 EUR', sub: language === 'es' ? 'Ingresos si se alquilaran todas las unidades libres' : 'Revenue if all free units rented', color: 'cyan', icon: FileText },
    { label: language === 'es' ? 'CLIENTES' : 'CLIENTS', value: '114', sub: language === 'es' ? 'Clientes registrados' : 'Registered clients', color: 'purple', icon: Users },
    { label: language === 'es' ? 'FACTURAS PENDIENTES' : 'PENDING INVOICES', value: '5', sub: language === 'es' ? '0 vencidas' : '0 overdue', color: 'orange', icon: Receipt },
  ]

  const paymentSummaryCards = [
    { label: language === 'es' ? 'Total Pagos' : 'Total Payments', value: '211', sub: '35017 EUR total', color: 'blue', icon: DollarSign },
    { label: language === 'es' ? 'Pagados' : 'Paid', value: '202', sub: '34062 EUR cobrado', color: 'green', icon: CheckCircle },
    { label: language === 'es' ? 'Pendientes' : 'Pending', value: '9', sub: '955 EUR pendiente', color: 'orange', icon: Clock },
  ]

  const paymentRows = [
    { id: 'PAY-2026-0108', client: 'MARIA GARCIA', unit: 'SP-26', period: '14/02 - 13/03', date: '13/03', amount: '120 €', method: 'Bizum', status: 'Pagado' },
    { id: 'PAY-2026-0107', client: 'CARLOS LOPEZ', unit: 'SP-12', period: '14/02 - 13/03', date: '13/03', amount: '80 €', method: 'Bizum', status: 'Pagado' },
    { id: 'PAY-2026-0106', client: 'ANA MARTINEZ', unit: 'SP-5', period: '19/12 - 18/01', date: '13/03', amount: '50 €', method: 'Bizum', status: 'Pagado' },
    { id: 'PAY-2026-0105', client: 'PEDRO SANCHEZ', unit: 'MP-308', period: '01/04 - 01/04', date: '01/04', amount: '180 €', method: 'Transferencia', status: 'Pagado' },
    { id: 'PAY-2026-0104', client: 'LAURA FERNANDEZ', unit: 'SP-19', period: '07/03 - 06/04', date: '12/03', amount: '90 €', method: 'Revolut', status: 'Pagado' },
    { id: 'PAY-2026-0103', client: 'JAVIER RUIZ', unit: 'SP-21', period: '14/02 - 13/03', date: '11/03', amount: '100 €', method: 'Revolut', status: 'Pagado' },
    { id: 'PAY-2026-0102', client: 'ELENA TORRES', unit: 'SP-2', period: '15/04 - 14/05', date: '10/03', amount: '60 €', method: 'Transferencia', status: 'Pagado' },
    { id: 'PAY-2026-0101', client: 'ROBERTO BLANCO', unit: 'MP-312', period: '01/05 - 31/05', date: '10/03', amount: '55 €', method: 'Transferencia', status: 'Pagado' },
    { id: 'PAY-2026-0100', client: 'SARA MOLINA', unit: 'MP-114', period: '01/02 - 31/03', date: '10/03', amount: '120 €', method: 'Transferencia', status: 'Pagado' },
    { id: 'PAY-2026-0099', client: 'DAVID GOMEZ', unit: 'SP-25', period: '10/03 - 10/04', date: '10/03', amount: '90 €', method: 'Stripe SEPA', status: 'Pendiente' },
  ]

  return (
    <div className="flex justify-center px-2 sm:px-4 w-full">
      <div className="relative w-full max-w-[880px] min-w-[300px]">
        <div className="absolute -inset-6 bg-gradient-to-r from-accent-500/15 to-accent-600/10 rounded-[2.5rem] blur-2xl" />
        {/* iPad Pro M4 - marco aluminio Space Black, 5.1mm ultra-thin */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative w-full rounded-[1.5rem] overflow-hidden"
          style={{
            padding: '8px',
            background: 'linear-gradient(165deg, #5a5a5e 0%, #454548 30%, #363638 60%, #2a2a2c 100%)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.1), inset 0 2px 4px rgba(255,255,255,0.06), inset 0 -1px 2px rgba(0,0,0,0.25), 0 25px 50px -12px rgba(0,0,0,0.5)',
          }}
        >
          <div className="relative rounded-[1.25rem] overflow-hidden bg-zinc-950 flex flex-col" style={{ height: '550px', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.4)' }}>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
              <div className="w-2 h-2 rounded-full bg-zinc-600/80" />
            </div>

            <div className="flex pt-3 flex-1 min-h-0">
              {/* Sidebar: icon-only en mobile/tablet, expandido en desktop */}
              <div className="w-14 md:w-[160px] flex-shrink-0 bg-zinc-900/95 border-r border-zinc-800/80 flex flex-col transition-all duration-300">
                <div className="relative px-2 md:px-4 py-3 md:py-4 flex items-center justify-between md:block">
                  <div className="flex items-center justify-center md:justify-start gap-2 flex-1 md:flex-initial">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image src="/logo.svg" alt="StorageFy" fill className="object-contain" />
                    </div>
                    <span className="hidden md:inline text-xs font-bold bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent leading-tight">
                      StorageFy
                    </span>
                  </div>
                  <button type="button" className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 flex-shrink-0 md:hidden">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="hidden md:block px-4 text-[9px] text-zinc-500 mb-2">{language === 'es' ? 'SOFTWARE TRASTEROS' : 'STORAGE SOFTWARE'}</p>
                <nav className="flex-1 space-y-1 px-2">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = 'view' in item && item.view === activeView
                    const isClickable = 'view' in item
                    const showDot = ('dot' in item && item.dot) && !isActive
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => isClickable && setActiveView(item.view)}
                        title={item.label}
                        className={`w-full flex items-center justify-center md:justify-start gap-2 px-2 md:px-3 py-2 rounded-lg text-[11px] text-left transition-colors ${
                          isActive ? 'bg-accent-500/20 text-accent-400' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        <div className="relative">
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          {showDot && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full" />}
                        </div>
                        <span className="hidden md:inline truncate flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="hidden md:flex bg-blue-500 text-white text-[9px] px-1.5 rounded min-w-[18px] justify-center">{item.badge}</span>
                        )}
                        {!item.badge && <ChevronRight className="hidden md:block w-3.5 h-3.5 flex-shrink-0 opacity-50" />}
                      </button>
                    )
                  })}
                </nav>
                <div className="border-t border-zinc-800 p-2 space-y-1 md:hidden">
                  <button type="button" className="w-full flex items-center justify-center gap-2 px-2 py-1.5 rounded-lg text-zinc-500 hover:text-zinc-300">
                    <Type className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px]">AA</span>
                  </button>
                  <button type="button" className="w-full flex items-center justify-center gap-2 px-2 py-1.5 rounded-lg text-zinc-500 hover:text-zinc-300">
                    <LogOut className="w-4 h-4" />
                    <span className="text-[10px]">{language === 'es' ? 'Salir' : 'Logout'}</span>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-hidden bg-zinc-950/50 min-h-0 flex flex-col">
                <div className="p-5 flex-1 overflow-y-auto min-h-0">
                  {activeView === 'dashboard' ? (
                    <>
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h2 className="text-xl font-bold text-white">{language === 'es' ? 'Panel de Control' : 'Dashboard'}</h2>
                          <p className="text-xs text-zinc-500">{language === 'es' ? 'Bienvenido, Admin. Gestiona tus tareas y alertas.' : 'Welcome, Admin. Manage your tasks and alerts.'}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <MessageSquare className="w-3.5 h-3.5" /> Feedback
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <MapPin className="w-3.5 h-3.5" /> {language === 'es' ? 'Ubicacion' : 'Location'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <Package className="w-3.5 h-3.5" /> {language === 'es' ? 'Unidades' : 'Units'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <RefreshCw className="w-3.5 h-3.5" /> {language === 'es' ? 'Actualizar' : 'Refresh'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <Cog className="w-3.5 h-3.5" /> {language === 'es' ? 'Configurar' : 'Configure'}
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
                        {dashboardKpis.map((card, i) => {
                          const Icon = card.icon
                          const borderColor = card.color === 'teal' ? 'border-l-teal-500' : card.color === 'green' ? 'border-l-green-500' : card.color === 'cyan' ? 'border-l-cyan-500' : card.color === 'purple' ? 'border-l-purple-500' : 'border-l-orange-500'
                          return (
                            <motion.div
                              key={card.label}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className={`bg-zinc-800/80 rounded-lg border-l-4 ${borderColor} p-2.5`}
                            >
                              <Icon className="w-3.5 h-3.5 text-zinc-500 mb-1" />
                              <div className="text-[9px] text-zinc-500 uppercase tracking-wide">{card.label}</div>
                              <div className="text-sm font-bold text-white">{card.value}</div>
                              <div className="text-[9px] text-zinc-500">
                                {card.sub}
                                {card.subHighlight && <span className="text-green-400 ml-1">{card.subHighlight}</span>}
                              </div>
                              {card.progress !== undefined && (
                                <div className="mt-1.5 h-1 bg-zinc-700 rounded-full overflow-hidden">
                                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${card.progress}%` }} />
                                </div>
                              )}
                            </motion.div>
                          )
                        })}
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-zinc-800/60 rounded-xl p-3 border border-zinc-700">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-accent-400" />
                            <span className="text-xs font-semibold text-white">{language === 'es' ? 'COMPARATIVA MENSUAL' : 'MONTHLY COMPARISON'}</span>
                          </div>
                          <p className="text-[9px] text-zinc-500 mb-2">mar 2026 vs feb 2026</p>
                          <div className="space-y-2">
                            <div>
                              <p className="text-[9px] text-zinc-500">{language === 'es' ? 'Por contrato' : 'By contract'}</p>
                              <p className="text-sm font-bold text-white">7998 EUR</p>
                              <p className="text-[9px] text-zinc-500">Feb: 8598 EUR -7.0% (-600 EUR)</p>
                            </div>
                            <div>
                              <p className="text-[9px] text-zinc-500">{language === 'es' ? 'Por pagos' : 'By payments'}</p>
                              <p className="text-sm font-bold text-white">3770 EUR</p>
                              <p className="text-[9px] text-zinc-500">Feb: 3928 EUR -4.0% (-158 EUR)</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-zinc-800/60 rounded-xl p-3 border border-zinc-700">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-accent-400" />
                              <span className="text-xs font-semibold text-white">{language === 'es' ? 'ACTIVIDAD RECIENTE' : 'RECENT ACTIVITY'}</span>
                            </div>
                            <span className="text-[9px] text-accent-400">{language === 'es' ? 'VER REPORTES' : 'VIEW REPORTS'}</span>
                          </div>
                          <p className="text-[9px] text-zinc-500 mb-2">{language === 'es' ? 'Ultimos pagos, contratos y reservas' : 'Latest payments, contracts and bookings'}</p>
                          <div className="flex gap-2">
                            <div className="flex-1 rounded-lg border border-green-500/30 p-2 bg-green-500/5">
                              <DollarSign className="w-3.5 h-3.5 text-green-400 mb-1" />
                              <p className="text-[9px] text-zinc-400">{language === 'es' ? 'Pagos cobrados' : 'Payments received'}</p>
                            </div>
                            <div className="flex-1 rounded-lg border border-purple-500/30 p-2 bg-purple-500/5">
                              <FileText className="w-3.5 h-3.5 text-purple-400 mb-1" />
                              <p className="text-[9px] text-zinc-400">{language === 'es' ? 'Contratos' : 'Contracts'}</p>
                            </div>
                            <div className="flex-1 rounded-lg border border-cyan-500/30 p-2 bg-cyan-500/5">
                              <Calendar className="w-3.5 h-3.5 text-cyan-400 mb-1" />
                              <p className="text-[9px] text-zinc-400">{language === 'es' ? 'Reservas' : 'Bookings'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : activeView === 'ubicaciones' ? (
                    <>
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h2 className="text-xl font-bold text-white">{language === 'es' ? 'Ubicaciones' : 'Locations'}</h2>
                          <p className="text-xs text-zinc-500">{language === 'es' ? 'Gestiona tus almacenes y ubicaciones' : 'Manage your warehouses and locations'}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <MessageSquare className="w-3.5 h-3.5" /> Feedback
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <HelpCircle className="w-3.5 h-3.5" /> {language === 'es' ? 'Ayuda' : 'Help'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <Filter className="w-3.5 h-3.5" /> {language === 'es' ? 'Filtros' : 'Filters'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-medium bg-accent-500 text-white hover:bg-accent-600">
                            <Plus className="w-3.5 h-3.5" /> {language === 'es' ? 'Nueva Ubicacion' : 'New Location'}
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 }}
                          className="bg-zinc-800/80 rounded-lg border-l-4 border-l-blue-500 p-3"
                        >
                          <Building2 className="w-4 h-4 text-zinc-500 mb-1" />
                          <div className="text-[10px] text-zinc-400">{language === 'es' ? 'Total' : 'Total'}</div>
                          <div className="text-lg font-bold text-white">2</div>
                          <div className="text-[10px] text-zinc-500">{language === 'es' ? '2 activas, 0 inactivas' : '2 active, 0 inactive'}</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="bg-zinc-800/80 rounded-lg border-l-4 border-l-green-500 p-3"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 mb-1" />
                          <div className="text-[10px] text-zinc-400">{language === 'es' ? 'Activas' : 'Active'}</div>
                          <div className="text-lg font-bold text-white">2</div>
                          <div className="text-[10px] text-zinc-500">{language === 'es' ? 'En el sistema' : 'In the system'}</div>
                        </motion.div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: 'Centro Principal', city: 'Madrid, Spain', area: '400 m2', spaces: '56', clients: '45', floor: '1' },
                          { name: 'Sucursal Norte', city: 'Barcelona, Spain', area: '140 m2', spaces: '49', clients: '39', floor: '1' },
                        ].map((loc, i) => (
                          <motion.div
                            key={loc.name}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + i * 0.05 }}
                            className="bg-zinc-800/60 rounded-xl p-3 border border-zinc-700"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-bold text-white">{loc.name}</span>
                              <span className="px-2 py-0.5 text-[9px] font-medium bg-green-500/20 text-green-400 rounded">{language === 'es' ? 'Activa' : 'Active'}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 mb-2">
                              <MapPin className="w-3 h-3" /> {loc.city}
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <div className="rounded-lg bg-blue-500/10 p-2 border border-blue-500/20">
                                <div className="text-xs font-bold text-white">{loc.area}</div>
                                <div className="text-[9px] text-zinc-500">{language === 'es' ? 'Area total' : 'Total area'}</div>
                              </div>
                              <div className="rounded-lg bg-green-500/10 p-2 border border-green-500/20">
                                <div className="text-xs font-bold text-white">{loc.spaces}</div>
                                <div className="text-[9px] text-zinc-500">{language === 'es' ? 'Espacios' : 'Spaces'}</div>
                              </div>
                              <div className="rounded-lg bg-purple-500/10 p-2 border border-purple-500/20">
                                <div className="text-xs font-bold text-white">{loc.clients}</div>
                                <div className="text-[9px] text-zinc-500">{language === 'es' ? 'Clientes' : 'Clients'}</div>
                              </div>
                              <div className="rounded-lg bg-orange-500/10 p-2 border border-orange-500/20">
                                <div className="text-xs font-bold text-white">{loc.floor}</div>
                                <div className="text-[9px] text-zinc-500">{language === 'es' ? 'Piso' : 'Floor'}</div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  ) : activeView === 'reportes' ? (
                    <>
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                            <LoadingSkeleton />
                          </motion.div>
                        ) : (
                          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-0">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h2 className="text-xl font-bold text-white">{language === 'es' ? 'Reportes y Analisis' : 'Reports and Analysis'}</h2>
                          <p className="text-xs text-zinc-500">{language === 'es' ? 'Panel completo de metricas y estadisticas' : 'Complete panel of metrics and statistics'}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <MessageSquare className="w-3.5 h-3.5" /> Feedback
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <HelpCircle className="w-3.5 h-3.5" /> {language === 'es' ? 'Ayuda' : 'Help'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <FileDown className="w-3.5 h-3.5" /> {language === 'es' ? 'Exportar PDF' : 'Export PDF'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <RefreshCw className="w-3.5 h-3.5" /> {language === 'es' ? 'Actualizar' : 'Refresh'}
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {[
                          { Icon: Euro, border: 'border-l-green-500', label: language === 'es' ? 'Ingresos del Periodo' : 'Period Income', value: '7998 EUR', sub: '31 pagos recibidos', bar: true, barFull: true },
                          { Icon: Package, border: 'border-l-blue-500', label: language === 'es' ? 'Tasa de Ocupacion' : 'Occupancy Rate', value: '91.3%', sub: '94 de 103 unidades', bar: true, barW: 91.3 },
                          { Icon: AlertTriangle, border: 'border-l-red-500', label: language === 'es' ? 'Contratos Morosos' : 'Delinquent Contracts', value: '51', sub: 'N1: 5  N2: 5  N3: 41' },
                          { Icon: Users, border: 'border-l-purple-500', label: language === 'es' ? 'Clientes Activos' : 'Active Clients', value: '100', sub: '86 contratos, 2 ubicaciones' },
                        ].map((card, i) => (
                          <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            className={`bg-zinc-800/80 rounded-lg border-l-4 ${card.border} p-2.5`}
                          >
                            <card.Icon className="w-3.5 h-3.5 text-zinc-500 mb-1" />
                            <div className="text-[9px] text-zinc-500 uppercase">{card.label}</div>
                            <div className="text-sm font-bold text-white">{card.value}</div>
                            <div className="text-[9px] text-zinc-500">{card.sub}</div>
                            {card.bar && (
                              <div className="mt-1 flex items-center gap-1">
                                <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
                                  <div className="h-full bg-blue-500 rounded-full" style={{ width: card.barFull ? '100%' : `${card.barW ?? 0}%` }} />
                                </div>
                                {card.barFull && <span className="text-[9px] text-green-400">100%</span>}
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-zinc-800/60 rounded-lg p-2.5 border border-zinc-700">
                          <BarChart3 className="w-3.5 h-3.5 text-accent-400 mb-1" />
                          <div className="text-[9px] text-zinc-500 uppercase">{language === 'es' ? 'Esperados vs Reales' : 'Expected vs Actual'}</div>
                          <div className="text-[9px] text-zinc-400">Esperado: 7998 EUR</div>
                          <div className="text-[9px] text-zinc-400">Cobrado: 7998 EUR</div>
                          <div className="text-[9px] text-orange-400">Pendiente: 460 EUR</div>
                          <div className="text-[9px] text-green-400">Tasa: 100%</div>
                        </div>
                        <div className="bg-zinc-800/60 rounded-lg p-2.5 border border-zinc-700">
                          <TrendingUp className="w-3.5 h-3.5 text-accent-400 mb-1" />
                          <div className="text-[9px] text-zinc-500 uppercase">{language === 'es' ? 'Promedio Mensual' : 'Monthly Average'}</div>
                          <div className="text-sm font-bold text-white">7998 EUR</div>
                          <div className="text-[9px] text-zinc-500">3.7 dias cobro</div>
                        </div>
                        <div className="bg-zinc-800/60 rounded-lg p-2.5 border border-zinc-700">
                          <DollarSign className="w-3.5 h-3.5 text-accent-400 mb-1" />
                          <div className="text-[9px] text-zinc-500 uppercase">{language === 'es' ? 'Estado de Pagos' : 'Payment Status'}</div>
                          <div className="flex gap-2 mt-1">
                            <span className="text-[9px] text-green-400">Pagados: 31</span>
                            <span className="text-[9px] text-orange-400">Pend: 4</span>
                            <span className="text-[9px] text-zinc-500">Parc: 0</span>
                            <span className="text-[9px] text-orange-400">Fall: 0</span>
                          </div>
                        </div>
                        <div className="bg-zinc-800/60 rounded-lg p-2.5 border border-zinc-700">
                          <Euro className="w-3.5 h-3.5 text-accent-400 mb-1" />
                          <div className="text-[9px] text-zinc-500 uppercase">{language === 'es' ? 'Valor promedio' : 'Avg per contract'}</div>
                          <div className="text-sm font-bold text-white">93 EUR</div>
                          <div className="text-[9px] text-zinc-500">86 contratos activos</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-zinc-800/60 rounded-lg p-2.5 border border-zinc-700">
                          <MapPin className="w-3.5 h-3.5 text-accent-400 mb-1" />
                          <div className="text-[9px] text-zinc-500 uppercase">{language === 'es' ? 'Ingresos por Unidad' : 'Income per unit'}</div>
                          <div className="text-sm font-bold text-white">85 EUR</div>
                        </div>
                        <div className="bg-zinc-800/60 rounded-lg p-2.5 border border-zinc-700">
                          <RotateCcw className="w-3.5 h-3.5 text-accent-400 mb-1" />
                          <div className="text-[9px] text-zinc-500 uppercase">{language === 'es' ? 'Recurrentes' : 'Recurring'}</div>
                          <div className="text-sm font-bold text-white">7998 EUR</div>
                          <div className="text-[9px] text-zinc-500">100% del total</div>
                        </div>
                        <div className="bg-zinc-800/60 rounded-lg p-2.5 border border-zinc-700">
                          <Users className="w-3.5 h-3.5 text-accent-400 mb-1" />
                          <div className="text-[9px] text-zinc-500 uppercase">{language === 'es' ? 'Retencion' : 'Retention'}</div>
                          <div className="text-sm font-bold text-white">100%</div>
                        </div>
                      </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : activeView === 'unidades' ? (
                    <>
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                            <LoadingSkeleton />
                          </motion.div>
                        ) : (
                          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-0">
                      <div className="mb-5">
                        <h2 className="text-xl font-bold text-white">{language === 'es' ? 'Espacios' : 'Spaces'}</h2>
                        <p className="text-xs text-zinc-500">{language === 'es' ? 'Gestiona las unidades con dimensiones exactas' : 'Manage units with exact dimensions'}</p>
                      </div>
                      <p className="text-[10px] text-zinc-500 mb-3">{language === 'es' ? 'Toca una tarjeta para filtrar' : 'Tap a card to filter'}</p>
                      <div className="grid grid-cols-4 gap-3 mb-5">
                        {summaryCards.map((card, i) => {
                          const Icon = card.icon
                          const borderColor = card.color === 'blue' ? 'border-l-blue-500' : card.color === 'green' ? 'border-l-green-500' : card.color === 'red' ? 'border-l-red-500' : 'border-l-orange-500'
                          return (
                            <motion.div
                              key={card.label}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className={`bg-zinc-800/80 rounded-lg border-l-4 ${borderColor} p-3`}
                            >
                              <Icon className="w-4 h-4 text-zinc-500 mb-1.5" />
                              <div className="text-xs text-zinc-400">{card.label}</div>
                              <div className="text-base font-bold text-white">{card.value}</div>
                              <div className="text-[10px] text-zinc-500">{card.sub}</div>
                            </motion.div>
                          )
                        })}
                      </div>
                      <div className="bg-zinc-800/60 rounded-xl overflow-hidden border border-zinc-700">
                        <div className="px-4 py-3 border-b border-zinc-700 flex items-center gap-2">
                          <Package className="w-4 h-4 text-accent-400" />
                          <span className="text-sm font-semibold text-white">{language === 'es' ? 'Espacios (25)' : 'Spaces (25)'}</span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="text-zinc-500 border-b border-zinc-700">
                                <th className="text-left py-3 px-3 font-medium">{language === 'es' ? 'Codigo' : 'Code'}</th>
                                <th className="text-left py-3 px-3 font-medium">{language === 'es' ? 'Dimensiones' : 'Dimensions'}</th>
                                <th className="text-left py-3 px-3 font-medium">{language === 'es' ? 'Precio' : 'Price'}</th>
                                <th className="text-left py-3 px-3 font-medium">{language === 'es' ? 'Cliente' : 'Client'}</th>
                                <th className="text-left py-3 px-3 font-medium">{language === 'es' ? 'Estado' : 'Status'}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {unitRows.map((row, i) => (
                                <tr key={i} className="border-b border-zinc-700/50 hover:bg-zinc-800/50">
                                  <td className="py-2.5 px-3 text-white font-medium">{row.code}</td>
                                  <td className="py-2.5 px-3 text-zinc-400">{row.dims}</td>
                                  <td className="py-2.5 px-3 text-zinc-300">{row.price}</td>
                                  <td className="py-2.5 px-3 text-zinc-400">{row.client}</td>
                                  <td className="py-2.5 px-3">
                                    <span className={`px-2 py-1 rounded text-[10px] font-medium ${row.payment === 'MOROSO' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                                      {row.payment}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h2 className="text-xl font-bold text-white">{language === 'es' ? 'Gestion de Pagos' : 'Payment Management'}</h2>
                          <p className="text-xs text-zinc-500">{language === 'es' ? 'Administra todos los pagos de alquileres' : 'Manage all rental payments'}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <MessageSquare className="w-3.5 h-3.5" /> Feedback
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <HelpCircle className="w-3.5 h-3.5" /> {language === 'es' ? 'Ayuda' : 'Help'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <Building2 className="w-3.5 h-3.5" /> {language === 'es' ? 'Consolidacion' : 'Reconciliation'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <RefreshCw className="w-3.5 h-3.5" /> {language === 'es' ? 'Actualizar' : 'Refresh'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            {language === 'es' ? 'Cargar todo (25/211)' : 'Load all (25/211)'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-300">
                            <Filter className="w-3.5 h-3.5" /> {language === 'es' ? 'Filtros' : 'Filters'}
                          </button>
                          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-medium bg-accent-500 text-white hover:bg-accent-600">
                            <Plus className="w-3.5 h-3.5" /> {language === 'es' ? 'Nuevo Pago' : 'New Payment'}
                          </button>
                        </div>
                      </div>
                      <p className="text-[10px] text-zinc-500 mb-3">{language === 'es' ? 'Toca una tarjeta para filtrar' : 'Tap a card to filter'}</p>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {paymentSummaryCards.map((card, i) => {
                          const Icon = card.icon
                          const borderColor = card.color === 'blue' ? 'border-l-blue-500' : card.color === 'green' ? 'border-l-green-500' : 'border-l-orange-500'
                          return (
                            <motion.div
                              key={card.label}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.3 }}
                              className={`bg-zinc-800/80 rounded-lg border-l-4 ${borderColor} p-3`}
                            >
                              <Icon className={`w-4 h-4 mb-1 ${card.color === 'blue' ? 'text-blue-400' : card.color === 'green' ? 'text-green-400' : 'text-orange-400'}`} />
                              <div className="text-[10px] text-zinc-400">{card.label}</div>
                              <div className="text-base font-bold text-white">{card.value}</div>
                              <div className="text-[10px] text-zinc-500">{card.sub}</div>
                            </motion.div>
                          )
                        })}
                      </div>
                      <div className="text-[10px] text-zinc-500 mb-2 font-medium">{language === 'es' ? 'Lista de Pagos' : 'List of Payments'}</div>
                      <div className="bg-zinc-800/60 rounded-xl overflow-hidden border border-zinc-700">
                        <div className="overflow-x-auto">
                          <table className="w-full text-[10px]">
                            <thead>
                              <tr className="text-zinc-500 border-b border-zinc-700">
                                <th className="text-left py-2.5 px-2 font-medium">{language === 'es' ? 'N. Pago' : 'Payment #'}</th>
                                <th className="text-left py-2.5 px-2 font-medium">{language === 'es' ? 'Cliente' : 'Client'}</th>
                                <th className="text-left py-2.5 px-2 font-medium">{language === 'es' ? 'Unidad(es)' : 'Unit(s)'}</th>
                                <th className="text-left py-2.5 px-2 font-medium">{language === 'es' ? 'Periodo' : 'Period'}</th>
                                <th className="text-left py-2.5 px-2 font-medium">{language === 'es' ? 'Monto' : 'Amount'}</th>
                                <th className="text-left py-2.5 px-2 font-medium">{language === 'es' ? 'Metodo' : 'Method'}</th>
                                <th className="text-left py-2.5 px-2 font-medium">{language === 'es' ? 'Estado' : 'Status'}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentRows.map((row, i) => (
                                <tr key={i} className="border-b border-zinc-700/50 hover:bg-zinc-800/50">
                                  <td className="py-2 px-2 text-white font-medium">{row.id}</td>
                                  <td className="py-2 px-2 text-zinc-300">{row.client}</td>
                                  <td className="py-2 px-2 text-zinc-400">{row.unit}</td>
                                  <td className="py-2 px-2 text-zinc-400">{row.period}</td>
                                  <td className="py-2 px-2 text-zinc-300">{row.amount}</td>
                                  <td className="py-2 px-2 text-zinc-400">{row.method}</td>
                                  <td className="py-2 px-2">
                                    <span className={`px-2 py-0.5 rounded text-[9px] font-medium ${row.status === 'Pendiente' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'}`}>
                                      {row.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TabletMock
