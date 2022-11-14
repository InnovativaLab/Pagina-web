import PublishCourse from './pages/PublishCourse'
import Info, { infoOptions } from './pages/Info'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RecoverPws from './pages/RecoverPws'
import Header from './components/Header'
import Footer from './components/Footer'
import Error404 from './pages/Error404'
import Busqueda from './pages/Busqueda'
import Teacher from './pages/Teacher'
import Inicio from './pages/Inicio'
import SignIn from './pages/SignIn'
import Curso from './pages/Curso'
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css'
import EditCourse from './pages/EditCourse'

function App () {
  return (
    <div className='App'>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/recoverpws' element={<RecoverPws />} />
        <Route path='/home' element={<Home />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/publish' element={<PublishCourse />} />
        <Route path='/course/:id' element={<Curso />} />
        <Route path='/browse/:toFind' element={<Busqueda />} />
        <Route path='/edit/:id' element={<EditCourse />} />
        <Route
          path='/privacity' element={<Info
            title={infoOptions.Privacity}
            header=''
            text='
            I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS

            Respetando lo establecido en la legislación vigente, InnovativaLab (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.
            Leyes que incorpora esta política de privacidad

            Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:

                El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).
                La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).
                El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).
                La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).

            Identidad del responsable del tratamiento de los datos personales

            El responsable del tratamiento de los datos personales recogidos en InnovativaLab es: xxxnombretitularxxx, con NIF: (en adelante, Responsable del tratamiento). Sus datos de contacto son los siguientes:

            El responsable del tratamiento de los datos personales recogidos en InnovativaLab es: , provista de NIF: e inscrito en: con los siguientes datos registrales: , cuyo representante es: InnovativaLab (en adelante, Responsable del tratamiento). Sus datos de contacto son los siguientes:

            Dirección:

            Teléfono de contacto:

            Email de contacto: innovativalab@gmail.com
            Registro de Datos de Carácter Personal

            En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por InnovativaLab, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre InnovativaLab y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantine un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.
            Principios aplicables al tratamiento de los datos personales

            El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:

                Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.
                Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.
                Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.
                Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.
                Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.
                Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.
                Principio de responsabilidad proactiva: el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.

            Categorías de datos personales

            Las categorías de datos que se tratan en InnovativaLab son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.

            Las categorías de datos que se tratan en InnovativaLab son tanto datos identificativos como categorías especiales de datos personales en el sentido del artículo 9 del RGPD.

            Se entienden como categorías especiales de datos personales aquellos que revelen el origen étnico o racial, las opiniones políticas, las convicciones religiosas o filosóficas, o la afiliación sindical, y el tratamiento de datos genéticos, datos biométricos dirigidos a identificar de manera unívoca a una persona física, datos relativos a la salud o datos relativos a la vida sexual o la orientación sexual de una persona física.

            Para el tratamiento de las categorías especiales de datos personales, será necesario en todo caso el consentimiento explícito del Usuario para uno o varios fines específicos.
            Base legal para el tratamiento de los datos personales

            La base legal para el tratamiento de los datos personales es el consentimiento. InnovativaLab se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.

            El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.

            En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.
            Fines del tratamiento a que se destinan los datos personales

            Los datos personales son recabados y gestionados por InnovativaLab con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.

            Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de InnovativaLab, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.

            En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada.
            Períodos de retención de los datos personales

            Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: 12, o hasta que el Usuario solicite su supresión.

            En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este plazo.
            Destinatarios de los datos personales

            Los datos personales del Usuario no serán compartidos con terceros.

            En cualquier caso, en el momento en que se obtengan los datos personales, se informará al Usuario acerca de los destinatarios o las categorías de destinatarios de los datos personales.

            Los datos personales del Usuario serán compartidos con los siguientes destinatarios o categorías de destinatarios:

            En caso de que el Responsable del tratamiento tenga la intención de transferir datos personales a un tercer país u organización internacional, en el momento en que se obtengan los datos personales, se informará al Usuario acerca del tercer país u organización internacional al cual se tiene la intención de transferir los datos, así como de la existencia o ausencia de una decisión de adecuación de la Comisión.
            Datos personales de menores de edad

            Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por InnovativaLab. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.
            Secreto y seguridad de los datos personales

            InnovativaLab se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.

            El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada.

            Sin embargo, debido a que InnovativaLab no puede garantizar la inexpugabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.

            Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.
            Derechos derivados del tratamiento de los datos personales

            El Usuario tiene sobre InnovativaLab y podrá, por tanto, ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:

                Derecho de acceso: Es el derecho del Usuario a obtener confirmación de si InnovativaLab está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que InnovativaLab haya realizado o realice, así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o previstas de los mismos.
                Derecho de rectificación: Es el derecho del Usuario a que se modifiquen sus datos personales que resulten ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.
                Derecho de supresión ("el derecho al olvido"): Es el derecho del Usuario, siempre que la legislación vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; el Usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados ilícitamentemente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, el Responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su aplicación, deberá adoptar medidas razonables para informar a los responsables que estén tratando los datos personales de la solicitud del interesado de supresión de cualquier enlace a esos datos personales.
                Derecho a la limitación del tratamiento: Es el derecho del Usuario a limitar el tratamiento de sus datos personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; el tratamiento sea ilícito; el Responsable del tratamiento ya no necesite los datos personales, pero el Usuario lo necesite para hacer reclamaciones; y cuando el Usuario se haya opuesto al tratamiento.
                Derecho a la portabilidad de los datos: En caso de que el tratamiento se efectúe por medios automatizados, el Usuario tendrá derecho a recibir del Responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre que sea técnicamente posible, el Responsable del tratamiento transmitirá directamente los datos a ese otro responsable.
                Derecho de oposición: Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos por parte de InnovativaLab.
                Derecho a no ser a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles: Es el derecho del Usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.

            Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del tratamiento con la referencia "RGPD-https://innovativalab.com", especificando:

                Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación por el mismo medio de la persona que representa al Usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro medio válido en derecho que acredite la identidad.
                Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.
                Domicilio a efecto de notificaciones.
                Fecha y firma del solicitante.
                Todo documento que acredite la petición que formula.

            Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:

            Dirección postal:

            Correo electrónico: innovativalab@gmail.com
            Enlaces a sitios web de terceros

            El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de InnovativaLab, y que por tanto no son operados por InnovativaLab. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.
            Reclamaciones ante la autoridad de control

            En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española de Protección de Datos (http://www.agpd.es).
            II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD

            Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo.

            InnovativaLab se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones.

            Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.

            Este documento de Política de Privacidad de un sitio web ha sido creado mediante el generador de plantilla de política de privacidad online el día 01/07/2021.
            '
                                     />}
        />
        <Route
          path='/terms' element={
            <Info
              title={infoOptions.Terms}
              header=''
              text='INFORMACIÓN RELEVANTE

              Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.

              El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos. https://innovativalab.com no asume la responsabilidad en caso de que entregue dicha clave a terceros.

              Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.

              Los precios de los productos ofrecidos en esta Tienda Online es válido solamente en las compras realizadas en este sitio web.

              LICENCIA

              InnovativaLab  a través de su sitio web concede una licencia para que los usuarios utilicen  los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.

              USO NO AUTORIZADO

              En caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo.

              PROPIEDAD

              Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad  de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan  sin ningún tipo de garantía, expresa o implícita. En ningún esta compañía será  responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.

              POLÍTICA DE REEMBOLSO Y GARANTÍA

              En el caso de productos que sean  mercancías irrevocables no-tangibles, no realizamos reembolsos después de que se envíe el producto, usted tiene la responsabilidad de entender antes de comprarlo.  Le pedimos que lea cuidadosamente antes de comprarlo. Hacemos solamente excepciones con esta regla cuando la descripción no se ajusta al producto. Hay algunos productos que pudieran tener garantía y posibilidad de reembolso pero este será especificado al comprar el producto. En tales casos la garantía solo cubrirá fallas de fábrica y sólo se hará efectiva cuando el producto se haya usado correctamente. La garantía no cubre averías o daños ocasionados por uso indebido. Los términos de la garantía están asociados a fallas de fabricación y funcionamiento en condiciones normales de los productos y sólo se harán efectivos estos términos si el equipo ha sido usado correctamente. Esto incluye:

              – De acuerdo a las especificaciones técnicas indicadas para cada producto.
              – En condiciones ambientales acorde con las especificaciones indicadas por el fabricante.
              – En uso específico para la función con que fue diseñado de fábrica.
              – En condiciones de operación eléctricas acorde con las especificaciones y tolerancias indicadas.

              COMPROBACIÓN ANTIFRAUDE

              La compra del cliente puede ser aplazada para la comprobación antifraude. También puede ser suspendida por más tiempo para una investigación más rigurosa, para evitar transacciones fraudulentas.

              PRIVACIDAD

              Este https://innovativalab.com garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.

              La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta.

              InnovativaLab reserva los derechos de cambiar o de modificar estos términos sin previo aviso.

              Estas terminos y condiciones se han generado en terminosycondicionesdeusoejemplo.com.'
            />
}
        />
        <Route
          path='/cookies' element={<Info
            title={infoOptions.Cookies}
            header=''
            text='En esta web se utilizan cookies de terceros y propias para conseguir que tengas una mejor experiencia de navegación, puedas compartir contenido en redes sociales y para que podamos obtener estadísticas de los usuarios.

            Puedes evitar la descarga de cookies a través de la configuración de tu navegador, evitando que las cookies se almacenen en su dispositivo.

            Como propietario de este sitio web, te comunico que no utilizamos ninguna información personal procedente de cookies, tan sólo realizamos estadísticas generales de visitas que no suponen ninguna información personal.

            Es muy importante que leas la presente política de cookies y comprendas que, si continúas navegando, consideraremos que aceptas su uso.

            Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico, si continúas navegando, estarás prestando tu consentimiento para el empleo de los referidos mecanismos.

            Entidad Responsable

            La entidad responsable de la recogida, procesamiento y utilización de tus datos personales, en el sentido establecido por la Ley de Protección de Datos Personales es la página InnovativaLab, propiedad de Franco Adrian Balich – .

            ¿Qué son las cookies?

            Las cookies son un conjunto de datos que un servidor deposita en el navegador del usuario para recoger la información de registro estándar de Internet y la información del comportamiento de los visitantes en un sitio web. Es decir, se trata de pequeños archivos de texto que quedan almacenados en el disco duro del ordenador y que sirven para identificar al usuario cuando se conecta nuevamente al sitio web. Su objetivo es registrar la visita del usuario y guardar cierta información. Su uso es común y frecuente en la web ya que permite a las páginas funcionar de manera más eficiente y conseguir una mayor personalización y análisis sobre el comportamiento del usuario.

            ¿Qué tipos de cookies existen?

            Las cookies utilizadas en nuestro sitio web, son de sesión y de terceros, y nos permiten almacenar y acceder a información relativa al idioma, el tipo de navegador utilizado, y otras características generales predefinidas por el usuario, así como, seguir y analizar la actividad que lleva a cabo, con el objeto de introducir mejoras y prestar nuestros servicios de una manera más eficiente y personalizada.
            Las cookies, en función de su permanencia, pueden dividirse en cookies de sesión o permanentes. Las que expiran cuando el usuario cierra el navegador. Las que expiran en función de cuando se cumpla el objetivo para el que sirven (por ejemplo, para que el usuario se mantenga identificado en los servicios de Franco Adrian Balich) o bien cuando se borran manualmente.
            Nombre Tipo Caducidad Finalidad Clase
            __utma De Terceros (Google Analytics) 2 años Se usa para distinguir usuarios y sesiones. No Exenta
            __utmb De Terceros (Google Analytics) 30 minutos Se usa para determinar nuevas sesiones o visitas No Exenta
            __utmc De Terceros (Google Analytics) Al finalizar la sesión Se configura para su uso con Urchin No Exenta
            __utmz De Terceros (Google Analytics) 6 meses Almacena el origen o la campaña que explica cómo el usuario ha llegado hasta la página web No Exenta Adicionalmente, en función de su objetivo, las cookies pueden clasificarse de la siguiente forma:

            Cookies de rendimiento

            Este tipo de Cookie recuerda sus preferencias para las herramientas que se encuentran en los servicios, por lo que no tiene que volver a configurar el servicio cada vez que usted visita. A modo de ejemplo, en esta tipología se incluyen: Ajustes de volumen de reproductores de vídeo o sonido. Las velocidades de transmisión de vídeo que sean compatibles con su navegador. Los objetos guardados en el “carrito de la compra” en los servicios de e-commerce tales como tiendas.

            Cookies de geo-localización

            Estas cookies son utilizadas para averiguar en qué país se encuentra cuando se solicita un servicio. Esta cookie es totalmente anónima, y sólo se utiliza para ayudar a orientar el contenido a su ubicación.

            Cookies de registro

            Las cookies de registro se generan una vez que el usuario se ha registrado o posteriormente ha abierto su sesión, y se utilizan para identificarle en los servicios con los siguientes objetivos:
            Mantener al usuario identificado de forma que, si cierra un servicio, el navegador o el ordenador y en otro momento u otro día vuelve a entrar en dicho servicio, seguirá identificado, facilitando así su navegación sin tener que volver a identificarse. Esta funcionalidad se puede suprimir si el usuario pulsa la funcionalidad [cerrar sesión], de forma que esta cookie se elimina y la próxima vez que entre en el servicio el usuario tendrá que iniciar sesión para estar identificado.
            Comprobar si el usuario está autorizado para acceder a ciertos servicios, por ejemplo, para participar en un concurso.
            Adicionalmente, algunos servicios pueden utilizar conectores con redes sociales tales como Facebook o Twitter. Cuando el usuario se registra en un servicio con credenciales de una red social, autoriza a la red social a guardar una Cookie persistente que recuerda su identidad y le garantiza acceso a los servicios hasta que expira. El usuario puede borrar esta Cookie y revocar el acceso a los servicios mediante redes sociales actualizando sus preferencias en la red social que específica.

            Cookies de analíticas

            Cada vez que un usuario visita un servicio, una herramienta de un proveedor externo genera una cookie analítica en el ordenador del usuario. Esta cookie que sólo se genera en la visita, servirá en próximas visitas a los servicios de Franco Adrian Balich para identificar de forma anónima al visitante. Los objetivos principales que se persiguen son:
            Permitir la identificación anónima de los usuarios navegantes a través de la cookie (identifica navegadores y dispositivos, no personas) y por lo tanto la contabilización aproximada del número de visitantes y su tendencia en el tiempo.

            Identificar de forma anónima los contenidos más visitados y por lo tanto más atractivos para los usuarios Saber si el usuario que está accediendo es nuevo o repite visita.
            Importante: Salvo que el usuario decida registrarse en un servicio de Franco Adrian Balich, la cookie nunca irá asociada a ningún dato de carácter personal que pueda identificarle. Dichas cookies sólo serán utilizadas con propósitos estadísticos que ayuden a la optimización de la experiencia de los usuarios en el sitio.

            Cookies de publicidad

            Este tipo de cookies permiten ampliar la información de los anuncios mostrados a cada usuario anónimo en los servicios de Franco Adrian Balich. Entre otros, se almacena la duración o frecuencia de visualización de posiciones publicitarias, la interacción con las mismas, o los patrones de navegación y/o comportamientos del usuario ya que ayudan a conformar un perfil de interés publicitario. De este modo, permiten ofrecer publicidad afín a los intereses del usuario.

            Cookies publicitarias de terceros

            Además de la publicidad gestionada por las webs de Franco Adrian Balich en sus servicios, las webs de Franco Adrian Balich ofrecen a sus anunciantes la opción de servir anuncios a través de terceros (“Ad-Servers”). De este modo, estos terceros pueden almacenar cookies enviadas desde los servicios de Franco Adrian Balich procedentes de los navegadores de los usuarios, así como acceder a los datos que en ellas se guardan.
            Las empresas que generan estas cookies tienen sus propias políticas de privacidad. En la actualidad, las webs de Franco Adrian Balich utilizan la plataforma Doubleclick (Google) para gestionar estos servicios. Para más información, acuda a
            http://www.google.es/policies/privacy/ads/#toc-doubleclick y a http://www.google.es/policies/privacy/ads/.

            ¿Cómo puedo deshabilitar las cookies en mi navegador?

            Se pueden configurar los diferentes navegadores para avisar al usuario de la recepción de cookies y, si se desea, impedir su instalación en el equipo. Asimismo, el usuario puede revisar en su navegador qué cookies tiene instaladas y cuál es el plazo de caducidad de las mismas, pudiendo eliminarlas.
            Para ampliar esta información consulte las instrucciones y manuales de su navegador:
            Para más información sobre la administración de las cookies en Google Chrome: https://support.google.com/chrome/answer/95647?hl=es
            Para más información sobre la administración de las cookies en Internet Explorer: http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions
            Para más información sobre la administración de las cookies en Mozilla Firefox: http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
            Para más información sobre la administración de las cookies en Safari: http://www.apple.com/es/privacy/use-of-cookies/
            Para más información sobre la administración de las cookies en Opera: http://help.opera.com/Windows/11.50/es-ES/cookies.html
            Si desea dejar de ser seguido por Google Analytics visite: http://tools.google.com/dlpage/gaoptout

            Para saber más sobre las cookies

            Puede obtener más información sobre la publicidad online basada en el comportamiento y la privacidad online en el siguiente enlace: http://www.youronlinechoices.com/es/
            Protección de datos de Google Analytics: http://www.google.com/analytics/learn/privacy.html
            Cómo usa Google Analytics las cookies: https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs

            Actualizaciones y cambios en la política de privacidad/cookies

            Las webs de Franco Adrian Balich pueden modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.
            Cuando se produzcan cambios significativos en esta Política de Cookies, estos se comunicarán a los usuarios bien mediante la web o a través de correo electrónico a los usuarios registrados.'
                                   />}
        />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
