'use client'

import { motion } from 'framer-motion'
import { FileText, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function TermsPage() {
  const { language } = useLanguage()

  const translations = {
    es: {
      title: 'Aviso Legal y Condiciones Generales de Uso',
      lastUpdate: 'Última actualización',
      sections: {
        general: {
          title: 'I. INFORMACIÓN GENERAL',
          content: `En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:

La titularidad de este sitio web, Storagefy.co, (en adelante, Sitio Web) la ostenta: Storagefy S.L, provista de NIF: B24986580 e inscrita en: Ibiza con los siguientes datos registrales: , cuyo representante es: , y cuyos datos de contacto son:

**Dirección:** 
**Teléfono de contacto:** +34 871 242 618
**Email de contacto:** hello@storagefy.co`,
        },
        object: {
          title: 'II. TÉRMINOS Y CONDICIONES GENERALES DE USO',
          subtitle: 'El objeto de las condiciones: El Sitio Web',
          content: `El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).

Storage FY se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento Storage FY pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.

El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario.

La utilización de alguno de los Contenidos o Servicios del Sitio Web podrá hacerse mediante la suscripción o registro previo del Usuario.`,
        },
        user: {
          title: 'El Usuario',
          content: `El acceso, la navegación y uso del Sitio Web, así como por los espacios habilitados para interactuar entre los Usuarios, y el Usuario y Storage FY, como los comentarios y/o espacios de blogging, confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda al Usuario leerlas cada vez que visite el Sitio Web.

El Sitio Web de Storage FY proporciona gran diversidad de información, servicios y datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:

- Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por Storage FY sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.
- La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por Storage FY para el acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio Web. En todo caso, el Usuario notificará de forma inmediata a Storage FY acerca de cualquier hecho que permita el uso indebido de la información registrada en dichos formularios, tales como, pero no solo, el robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata cancelación.

Storage FY se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren la ley, el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, spamming, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados para su publicación.

En cualquier caso, Storage FY no será responsable de las opiniones vertidas por los Usuarios a través de comentarios u otras herramientas de blogging o de participación que pueda haber.

El mero acceso a este Sitio Web no supone entablar ningún tipo de relación de carácter comercial entre Storage FY y el Usuario.

Siempre en el respeto de la legislación vigente, este Sitio Web de Storage FY se dirige a todas las personas, sin importar su edad, que puedan acceder y/o navegar por las páginas del Sitio Web.`,
        },
        access: {
          title: 'III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD',
          content: `Storage FY no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios. Storage FY hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error.

Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio Web, esté libre de error o cause un daño al sistema informático (software y hardware) del Usuario. En ningún caso Storage FY será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y el uso del Sitio Web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas informáticos o los provocados por la introducción de virus.

Storage FY tampoco se hace responsable de los daños que pudiesen ocasionarse a los usuarios por un uso inadecuado de este Sitio Web. En particular, no se hace responsable en modo alguno de las caídas, interrupciones, falta o defecto de las telecomunicaciones que pudieran ocurrir.`,
        },
        links: {
          title: 'IV. POLÍTICA DE ENLACES',
          content: `Se informa que el Sitio Web de Storage FY pone o puede poner a disposición de los Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros.

La instalación de estos enlaces, directorios y motores de búsqueda en el Sitio Web tiene por objeto facilitar a los Usuarios la búsqueda de y acceso a la información disponible en Internet, sin que pueda considerarse una sugerencia, recomendación o invitación para la visita de los mismos.

Storage FY no ofrece ni comercializa por sí ni por medio de terceros los productos y/o servicios disponibles en dichos sitios enlazados.

Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o legalidad de sitios ajenos a su propiedad a los que se pueda acceder por medio de los enlaces.

Storage FY en ningún caso revisará o controlará el contenido de otros sitios web, así como tampoco aprueba, examina ni hace propios los productos y servicios, contenidos, archivos y cualquier otro material existente en los referidos sitios enlazados.

Storage FY no asume ninguna responsabilidad por los daños y perjuicios que pudieran producirse por el acceso, uso, calidad o licitud de los contenidos, comunicaciones, opiniones, productos y servicios de los sitios web no gestionados por Storage FY y que sean enlazados en este Sitio Web.

El Usuario o tercero que realice un hipervínculo desde una página web de otro, distinto, sitio web al Sitio Web de Storage FY deberá saber que:

- No se permite la reproducción —total o parcialmente— de ninguno de los Contenidos y/o Servicios del Sitio Web sin autorización expresa de Storage FY.
- No se permite tampoco ninguna manifestación falsa, inexacta o incorrecta sobre el Sitio Web de Storage FY, ni sobre los Contenidos y/o Servicios del mismo.
- A excepción del hipervínculo, el sitio web en el que se establezca dicho hiperenlace no contendrá ningún elemento, de este Sitio Web, protegido como propiedad intelectual por el ordenamiento jurídico español, salvo autorización expresa de Storage FY.
- El establecimiento del hipervínculo no implicará la existencia de relaciones entre Storage FY y el titular del sitio web desde el cual se realice, ni el conocimiento y aceptación de Storage FY de los contenidos, servicios y/o actividades ofrecidas en dicho sitio web, y viceversa.`,
        },
        intellectual: {
          title: 'V. PROPIEDAD INTELECTUAL E INDUSTRIAL',
          content: `Storage FY por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (a título enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o textos, marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.). Serán, por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico español, siéndoles aplicables tanto la normativa española y comunitaria en este campo, como los tratados internacionales relativos a la materia y suscritos por España.

Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Storage FY.

El Usuario se compromete a respetar los derechos de propiedad intelectual e industrial de Storage FY. Podrá visualizar los elementos del Sitio Web o incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, exclusivamente, para su uso personal. El Usuario, sin embargo, no podrá suprimir, alterar, o manipular cualquier dispositivo de protección o sistema de seguridad que estuviera instalado en el Sitio Web.

En caso de que el Usuario o tercero considere que cualquiera de los Contenidos del Sitio Web suponga una violación de los derechos de protección de la propiedad intelectual, deberá comunicarlo inmediatamente a Storage FY a través de los datos de contacto del apartado de INFORMACIÓN GENERAL de este Aviso Legal y Condiciones Generales de Uso.`,
        },
        legal: {
          title: 'VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN',
          content: `Storage FY se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones.

La relación entre el Usuario y Storage FY se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a derecho.`,
        },
      },
    },
    en: {
      title: 'Legal Notice and General Terms of Use',
      lastUpdate: 'Last update',
      sections: {
        general: {
          title: 'I. GENERAL INFORMATION',
          content: `In compliance with the duty of information set forth in Law 34/2002 on Services of the Information Society and Electronic Commerce (LSSI-CE) of July 11, the following general information data of this website is provided:

The ownership of this website, Storagefy.co, (hereinafter, Website) is held by: Storagefy S.L, provided with NIF: B24986580 and registered in: Ibiza with the following registration data: , whose representative is: , and whose contact details are:

**Address:** 
**Contact phone:** +34 871 242 618
**Contact email:** hello@storagefy.co`,
        },
        object: {
          title: 'II. GENERAL TERMS AND CONDITIONS OF USE',
          subtitle: 'Purpose of the conditions: The Website',
          content: `The purpose of these General Terms of Use (hereinafter, Terms) is to regulate access to and use of the Website. For the purposes of these Terms, Website shall mean: the external appearance of the screen interfaces, both static and dynamic, i.e., the navigation tree; and all elements integrated both in the screen interfaces and in the navigation tree (hereinafter, Contents) and all those online services or resources that may be offered to Users (hereinafter, Services).

Storage FY reserves the right to modify, at any time, and without prior notice, the presentation and configuration of the Website and the Contents and Services that may be incorporated therein. The User acknowledges and accepts that at any time Storage FY may interrupt, deactivate and/or cancel any of these elements that are integrated into the Website or access to them.

Access to the Website by the User is free and, as a general rule, is free of charge without the User having to provide consideration to enjoy it, except for the cost of connection through the telecommunications network supplied by the access provider that the User has contracted.

The use of any of the Contents or Services of the Website may be made by prior subscription or registration of the User.`,
        },
        user: {
          title: 'The User',
          content: `Access, navigation and use of the Website, as well as the spaces enabled to interact between Users, and the User and Storage FY, such as comments and/or blogging spaces, confers the condition of User, so all the Conditions established here, as well as their subsequent modifications, are accepted from the moment navigation through the Website begins, without prejudice to the application of the corresponding mandatory legal regulations as the case may be. Given the relevance of the above, the User is recommended to read them each time they visit the Website.

The Storage FY Website provides a great diversity of information, services and data. The User assumes responsibility for the correct use of the Website. This responsibility will extend to:

- A use of the information, Contents and/or Services and data offered by Storage FY without being contrary to the provisions of these Terms, the Law, morality or public order, or that in any other way may involve injury to the rights of third parties or the same operation of the Website.
- The truthfulness and legality of the information provided by the User in the forms extended by Storage FY for access to certain Contents or Services offered by the Website. In any case, the User will immediately notify Storage FY about any fact that allows the misuse of the information registered in such forms, such as, but not only, theft, loss, or unauthorized access to identifiers and/or passwords, in order to proceed to their immediate cancellation.

Storage FY reserves the right to withdraw all those comments and contributions that violate the law, respect for the dignity of the person, that are discriminatory, xenophobic, racist, pornographic, spamming, that violate youth or childhood, order or public safety or that, in its judgment, were not suitable for publication.

In any case, Storage FY will not be responsible for the opinions expressed by Users through comments or other blogging or participation tools that may exist.

Mere access to this Website does not imply any type of commercial relationship between Storage FY and the User.

Always respecting the current legislation, this Storage FY Website is aimed at all people, regardless of their age, who can access and/or browse the pages of the Website.`,
        },
        access: {
          title: 'III. ACCESS AND NAVIGATION ON THE WEBSITE: EXCLUSION OF WARRANTIES AND LIABILITY',
          content: `Storage FY does not guarantee the continuity, availability and usefulness of the Website, nor of the Contents or Services. Storage FY will do everything possible for the proper functioning of the Website, however, it is not responsible or guarantee that access to this Website will be uninterrupted or that it is free of error.

Nor is it responsible or guarantees that the content or software that can be accessed through this Website, is free of error or causes damage to the User's computer system (software and hardware). In no case will Storage FY be responsible for losses, damages or losses of any kind that arise from access, navigation and use of the Website, including, but not limited to, those caused to computer systems or those caused by the introduction of viruses.

Storage FY is also not responsible for the damages that may be caused to users by improper use of this Website. In particular, it is not responsible in any way for falls, interruptions, lack or defect of telecommunications that may occur.`,
        },
        links: {
          title: 'IV. LINK POLICY',
          content: `It is reported that the Storage FY Website puts or may put at the disposal of Users means of linking (such as, among others, links, banners, buttons), directories and search engines that allow Users to access websites belonging to and/or managed by third parties.

The installation of these links, directories and search engines on the Website is intended to facilitate Users' search for and access to information available on the Internet, without it being considered a suggestion, recommendation or invitation to visit them.

Storage FY does not offer or market by itself or through third parties the products and/or services available on such linked sites.

Likewise, it will not guarantee the technical availability, accuracy, veracity, validity or legality of sites outside its property that can be accessed through the links.

Storage FY will in no case review or control the content of other websites, nor does it approve, examine or make its own the products and services, content, files and any other material existing in the referred linked sites.

Storage FY assumes no responsibility for the damages and losses that may occur due to the access, use, quality or legality of the contents, communications, opinions, products and services of the websites not managed by Storage FY and that are linked on this Website.

The User or third party that makes a hyperlink from a web page of another, different, website to the Storage FY Website must know that:

- The reproduction —totally or partially— of any of the Contents and/or Services of the Website without express authorization from Storage FY is not allowed.
- No false, inaccurate or incorrect statement about the Storage FY Website, nor about the Contents and/or Services thereof, is also allowed.
- Except for the hyperlink, the website on which such hyperlink is established will not contain any element, of this Website, protected as intellectual property by the Spanish legal system, except express authorization from Storage FY.
- The establishment of the hyperlink will not imply the existence of relations between Storage FY and the owner of the website from which it is made, nor the knowledge and acceptance of Storage FY of the contents, services and/or activities offered on said website, and vice versa.`,
        },
        intellectual: {
          title: 'V. INTELLECTUAL AND INDUSTRIAL PROPERTY',
          content: `Storage FY by itself or as an assignee, is the owner of all intellectual and industrial property rights of the Website, as well as the elements contained therein (by way of example and not exhaustive, images, sound, audio, video, software or texts, trademarks or logos, color combinations, structure and design, selection of materials used, computer programs necessary for its operation, access and use, etc.). They will therefore be works protected as intellectual property by the Spanish legal system, being applicable both Spanish and community regulations in this field, as well as international treaties relating to the subject and signed by Spain.

All rights reserved. Under the provisions of the Intellectual Property Law, the reproduction, distribution and public communication, including its making available modality, of all or part of the contents of this website, for commercial purposes, on any medium and by any technical means, without the authorization of Storage FY, is expressly prohibited.

The User undertakes to respect the intellectual and industrial property rights of Storage FY. You may view the elements of the Website or even print them, copy them and store them on your computer's hard drive or any other physical medium as long as it is, exclusively, for your personal use. The User, however, may not delete, alter, or manipulate any protection device or security system that was installed on the Website.

In the event that the User or third party considers that any of the Contents of the Website constitutes a violation of the rights of protection of intellectual property, they must immediately notify Storage FY through the contact details in the GENERAL INFORMATION section of this Legal Notice and General Terms of Use.`,
        },
        legal: {
          title: 'VI. LEGAL ACTIONS, APPLICABLE LEGISLATION AND JURISDICTION',
          content: `Storage FY reserves the right to file the civil or criminal actions it deems necessary for the improper use of the Website and Contents, or for non-compliance with these Terms.

The relationship between the User and Storage FY will be governed by the regulations in force and applicable in Spanish territory. Should any controversy arise in relation to the interpretation and/or application of these Terms, the parties shall submit their conflicts to the ordinary jurisdiction submitting to the judges and courts that correspond according to law.`,
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
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary-500">
                {t.lastUpdate}: 2 de diciembre de 2025
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
                {'subtitle' in section && section.subtitle && (
                  <h3 className="text-xl font-medium text-primary-800 mb-3 mt-4">
                    {section.subtitle}
                  </h3>
                )}
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
