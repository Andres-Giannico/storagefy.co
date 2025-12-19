'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function PrivacyPage() {
  const { language } = useLanguage()

  const translations = {
    es: {
      title: 'Política de Privacidad del Sitio Web',
      lastUpdate: 'Última actualización',
      sections: {
        privacy: {
          title: 'I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS',
          content: `Respetando lo establecido en la legislación vigente, Storagefy (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.`,
        },
        laws: {
          title: 'Leyes que incorpora esta política de privacidad',
          content: `Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:

- El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).
- La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).
- El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).
- La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).`,
        },
        controller: {
          title: 'Identidad del responsable del tratamiento de los datos personales',
          content: `El responsable del tratamiento de los datos personales recogidos en Storagefy es: StorageFY S.L, provista de NIF/CIF: B24986580 e inscrito en: Ibiza con los siguientes datos registrales: , cuyo representante es: (en adelante, Responsable del tratamiento). Sus datos de contacto son los siguientes:

**Dirección:** Carrer de polls 10, Sant jordi de ses salines, 07817, San José, Ibiza
**Teléfono de contacto:** +34 871 242 618
**Email de contacto:** hello@storagefy.co`,
        },
        registry: {
          title: 'Registro de Datos de Carácter Personal',
          content: `En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por Storagefy, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre Storagefy y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.`,
        },
        principles: {
          title: 'Principios aplicables al tratamiento de los datos personales',
          content: `El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:

- **Principio de licitud, lealtad y transparencia:** se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.
- **Principio de limitación de la finalidad:** los datos personales serán recogidos con fines determinados, explícitos y legítimos.
- **Principio de minimización de datos:** los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.
- **Principio de exactitud:** los datos personales deben ser exactos y estar siempre actualizados.
- **Principio de limitación del plazo de conservación:** los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.
- **Principio de integridad y confidencialidad:** los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.
- **Principio de responsabilidad proactiva:** el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.`,
        },
        categories: {
          title: 'Categorías de datos personales',
          content: `Las categorías de datos que se tratan en Storagefy son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.`,
        },
        legalBasis: {
          title: 'Base legal para el tratamiento de los datos personales',
          content: `La base legal para el tratamiento de los datos personales es el consentimiento. Storagefy se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.

El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.

En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.`,
        },
        purposes: {
          title: 'Fines del tratamiento a que se destinan los datos personales',
          content: `Los datos personales son recabados y gestionados por Storagefy con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.

Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de Storagefy, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.

En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada.`,
        },
        retention: {
          title: 'Períodos de retención de los datos personales',
          content: `Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: el tiempo necesario para los fines para los cuales fueron recogidos, o hasta que el Usuario solicite su supresión.

En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este plazo.`,
        },
        recipients: {
          title: 'Destinatarios de los datos personales',
          content: `Los datos personales del Usuario no serán compartidos con terceros.

En cualquier caso, en el momento en que se obtengan los datos personales, se informará al Usuario acerca de los destinatarios o las categorías de destinatarios de los datos personales.`,
        },
        minors: {
          title: 'Datos personales de menores de edad',
          content: `Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por Storagefy. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.`,
        },
        security: {
          title: 'Secreto y seguridad de los datos personales',
          content: `Storagefy se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.

El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada.

Sin embargo, debido a que Storagefy no puede garantizar la inexpugnabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.

Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.`,
        },
        rights: {
          title: 'Derechos derivados del tratamiento de los datos personales',
          content: `El Usuario tiene sobre Storagefy y podrá, por tanto, ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:

- **Derecho de acceso:** Es el derecho del Usuario a obtener confirmación de si Storagefy está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que Storagefy haya realizado o realice, así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o previstas de los mismos.
- **Derecho de rectificación:** Es el derecho del Usuario a que se modifiquen sus datos personales que resulten ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.
- **Derecho de supresión ("el derecho al olvido"):** Es el derecho del Usuario, siempre que la legislación vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; el Usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados ilícitamente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, el Responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su aplicación, deberá adoptar medidas razonables para informar a los responsables que estén tratando los datos personales de la solicitud del interesado de supresión de cualquier enlace a esos datos personales.
- **Derecho a la limitación del tratamiento:** Es el derecho del Usuario a limitar el tratamiento de sus datos personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; el tratamiento sea ilícito; el Responsable del tratamiento ya no necesite los datos personales, pero el Usuario lo necesite para hacer reclamaciones; y cuando el Usuario se haya opuesto al tratamiento.
- **Derecho a la portabilidad de los datos:** En caso de que el tratamiento se efectúe por medios automatizados, el Usuario tendrá derecho a recibir del Responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre que sea técnicamente posible, el Responsable del tratamiento transmitirá directamente los datos a ese otro responsable.
- **Derecho de oposición:** Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos por parte de Storagefy.
- **Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles:** Es el derecho del Usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.

Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del tratamiento con la referencia "RGPD-Storagefy.co", especificando su nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación por el mismo medio de la persona que representa al Usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro medio válido en derecho que acredite la identidad.

- Nombre, apellidos del Usuario y copia del DNI o pasaporte.
- Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.
- Domicilio a efecto de notificaciones.
- Fecha y firma del solicitante.
- Todo documento que acredite la petición que formula.

Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:
**Dirección postal:** Carrer de polls 10, Sant jordi de ses salines, 07817, San José, Ibiza
**Correo electrónico:** hello@storagefy.co`,
        },
        thirdParty: {
          title: 'Enlaces a sitios web de terceros',
          content: `El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de Storagefy, y que por tanto no son operados por Storagefy. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.`,
        },
        claims: {
          title: 'Reclamaciones ante la autoridad de control',
          content: `En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española de Protección de Datos (https://www.aepd.es/).`,
        },
        acceptance: {
          title: 'II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD',
          content: `Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo.

Storagefy se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones.

Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.`,
        },
      },
    },
    en: {
      title: 'Website Privacy Policy',
      lastUpdate: 'Last update',
      sections: {
        privacy: {
          title: 'I. PRIVACY AND DATA PROTECTION POLICY',
          content: `Respecting the provisions of current legislation, Storagefy (hereinafter, also Website) undertakes to adopt the necessary technical and organizational measures, according to the level of security appropriate to the risk of the data collected.`,
        },
        laws: {
          title: 'Laws that this privacy policy incorporates',
          content: `This privacy policy is adapted to current Spanish and European regulations on personal data protection on the internet. Specifically, it respects the following regulations:

- Regulation (EU) 2016/679 of the European Parliament and of the Council, of April 27, 2016, regarding the protection of natural persons with regard to the processing of personal data and on the free movement of such data (GDPR).
- Organic Law 3/2018, of December 5, on Personal Data Protection and guarantee of digital rights (LOPD-GDD).
- Royal Decree 1720/2007, of December 21, which approves the Development Regulation of Organic Law 15/1999, of December 13, on Personal Data Protection (RDLOPD).
- Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce (LSSI-CE).`,
        },
        controller: {
          title: 'Identity of the controller of personal data processing',
          content: `The controller of the personal data collected in Storagefy is: StorageFY S.L, provided with NIF/CIF: B24986580 and registered in: Ibiza with the following registration data: , whose representative is: (hereinafter, Controller). Their contact details are as follows:

**Address:** Carrer de polls 10, Sant jordi de ses salines, 07817, San José, Ibiza
**Contact phone:** +34 871 242 618
**Contact email:** hello@storagefy.co`,
        },
        rights: {
          title: 'Rights derived from the processing of personal data',
          content: `The User has over Storagefy and may, therefore, exercise against the Controller the following rights recognized in the GDPR and Organic Law 3/2018, of December 5, on Personal Data Protection and guarantee of digital rights:

- **Right of access:** It is the User's right to obtain confirmation of whether Storagefy is processing their personal data or not and, if so, obtain information about their specific personal data and the processing that Storagefy has carried out or carries out, as well as, among others, the information available on the origin of such data and the recipients of the communications made or planned of them.
- **Right of rectification:** It is the User's right to have their personal data that prove to be inaccurate or, taking into account the purposes of the processing, incomplete modified.
- **Right of erasure ("the right to be forgotten"):** It is the User's right, provided that current legislation does not establish otherwise, to obtain the erasure of their personal data when these are no longer necessary for the purposes for which they were collected or processed; the User has withdrawn their consent to the processing and this does not have another legal basis; the User objects to the processing and there is no other legitimate reason to continue with it; the personal data have been unlawfully processed; the personal data must be erased in compliance with a legal obligation; or the personal data have been obtained as a result of a direct offer of information society services to a minor under 14 years of age.
- **Right to restriction of processing:** It is the User's right to limit the processing of their personal data. The User has the right to obtain the restriction of processing when they challenge the accuracy of their personal data; the processing is unlawful; the Controller no longer needs the personal data, but the User needs it to make claims; and when the User has objected to the processing.
- **Right to data portability:** In the event that the processing is carried out by automated means, the User will have the right to receive from the Controller their personal data in a structured, commonly used and machine-readable format, and to transmit them to another controller. Whenever technically possible, the Controller will directly transmit the data to that other controller.
- **Right of objection:** It is the User's right that the processing of their personal data not be carried out or that the processing of them by Storagefy cease.
- **Right not to be subject to a decision based solely on automated processing, including profiling:** It is the User's right not to be subject to an individualized decision based solely on automated processing of their personal data, including profiling, existing unless current legislation establishes otherwise.

Thus, the User may exercise their rights by means of written communication addressed to the Controller with the reference "RGPD-Storagefy.co", specifying their name, User's surnames and copy of ID. In cases where representation is admitted, identification by the same means of the person representing the User will also be necessary, as well as the document accrediting the representation. The photocopy of the ID may be replaced, by any other valid means in law that proves identity.

- Name, User's surnames and copy of ID or passport.
- Request with the specific reasons for the request or information to which access is desired.
- Address for notification purposes.
- Date and signature of the applicant.
- Any document that accredits the request being made.

This request and any other attached document may be sent to the following address and/or email:
**Postal address:** Carrer de polls 10, Sant jordi de ses salines, 07817, San José, Ibiza
**Email:** hello@storagefy.co`,
        },
        claims: {
          title: 'Claims before the control authority',
          content: `In the event that the User considers that there is a problem or infringement of current regulations in the way their personal data is being processed, they will have the right to effective judicial protection and to file a claim before a control authority, in particular, in the State in which they have their habitual residence, place of work or place of the alleged infringement. In the case of Spain, the control authority is the Spanish Data Protection Agency (https://www.aepd.es/).`,
        },
      },
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/60 via-white to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-2xl bg-accent-100 p-3 text-accent-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary-500">
                {t.lastUpdate}: 19 de diciembre de 2025
              </p>
              <h1 className="text-4xl font-semibold md:text-5xl text-primary-900 mt-2">
                {t.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {Object.entries(t.sections).map(([key, section]) => (
              <motion.section
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12 rounded-3xl border border-primary-100 bg-white/90 p-8 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-primary-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-primary-700 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
