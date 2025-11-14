import { HelpArticle } from './help-categories'

// Importar artículos por categoría
import { primerospasosArticles } from './content/primeros-pasos'
import { dashboardArticles } from './content/dashboard'
import { unidadesArticles } from './content/unidades'
import { locacionesArticles } from './content/locaciones'
import { clientesArticles } from './content/clientes'
import { contratosArticles } from './content/contratos'
import { pagosArticles } from './content/pagos'
import { facturacionArticles } from './content/facturacion'
import { planosArticles } from './content/planos'
import { reservasArticles } from './content/reservas'
import { reportesArticles } from './content/reportes'
import { tablonArticles } from './content/tablon'
import { usuariosArticles } from './content/usuarios'
import { configuracionArticles } from './content/configuracion'

// Combinar todos los artículos
export const helpArticles: HelpArticle[] = [
  ...primerospasosArticles,
  ...dashboardArticles,
  ...unidadesArticles,
  ...locacionesArticles,
  ...clientesArticles,
  ...contratosArticles,
  ...pagosArticles,
  ...facturacionArticles,
  ...planosArticles,
  ...reservasArticles,
  ...reportesArticles,
  ...tablonArticles,
  ...usuariosArticles,
  ...configuracionArticles
]
