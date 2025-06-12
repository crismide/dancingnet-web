import { Link } from "react-router";

export default function Politicas() {
  return (
    <div className="md:px-[208px] px-[18px] py-[36px] md:pt-[48px] flex flex-col md:gap-[41px] gap-10">
      <div className="flex justify-end">
        <Link to="/#" className="text-lg hover:underline">
          Página principal
        </Link>
      </div>
       <h1 className="md:text-[48px] text-[40px] font-extrabold bg-gradient-to-r from-[#C286F1] to-[#FFC46B] bg-clip-text text-transparent">Política de Privacidad</h1>
        <p><strong>Última actualización:</strong> 12 de junio de 2025</p>

        <section>
          <h2 className="subtitle">1. Información que recopilamos</h2>
          <p><strong>No recopilamos información personal identificable.</strong></p>
          <p>Nuestra aplicación almacena contenido de forma <strong>local en el dispositivo del usuario</strong>. Esto incluye, entre otros:</p>
          <ul>
            <li>Videos, notas o registros relacionados con procesos creativos en danza.</li>
            <li>Información generada por el usuario dentro de la app.</li>
          </ul>
          <p><strong>No accedemos, recopilamos ni transmitimos esta información a ningún servidor externo.</strong></p>
        </section>

        <section>
          <h2 className="subtitle">2. Uso de la información</h2>
          <p>La información almacenada localmente en la app se utiliza exclusivamente para:</p>
          <ul>
            <li>Permitir al usuario guardar, visualizar y gestionar sus procesos creativos en danza.</li>
            <li>Ofrecer una experiencia personalizada basada en los datos guardados localmente.</li>
          </ul>
        </section>

        <section>
          <h2 className="subtitle">3. Acceso a permisos del dispositivo</h2>
          <p>La aplicación puede solicitar permisos para acceder a:</p>
          <ul>
            <li><strong>Almacenamiento:</strong> Para guardar contenido en el dispositivo.</li>
            <li><strong>Cámara y/o micrófono</strong> (si aplica): Para capturar material audiovisual relacionado con el proceso creativo.</li>
          </ul>
          <p>Estos permisos se solicitan únicamente para funcionalidades esenciales de la aplicación, y <strong>los datos no se comparten con terceros</strong>.</p>
        </section>

        <section>
          <h2 className="subtitle">4. Menores de edad</h2>
          <p>Nuestra aplicación <strong>puede estar destinada a usuarios menores de 13 años</strong>. Por ello, seguimos los lineamientos de la <em>Política de Familias</em> de Google y la <em>Children’s Online Privacy Protection Act (COPPA)</em>:</p>
          <ul>
            <li>No mostramos anuncios personalizados.</li>
            <li>No recopilamos datos personales.</li>
            <li>Toda la información se almacena localmente y no se comparte con terceros.</li>
          </ul>
        </section>

        <section>
          <h2 className="subtitle">5. Seguridad</h2>
          <p>Nos comprometemos a proteger la información del usuario almacenada localmente. Recomendamos que los usuarios protejan su dispositivo mediante contraseñas o mecanismos de bloqueo.</p>
        </section>

        <section>
          <h2 className="subtitle">6. Cambios en esta política</h2>
          <p>Nos reservamos el derecho a modificar esta Política de Privacidad en cualquier momento. Notificaremos a los usuarios sobre los cambios relevantes mediante una actualización dentro de la app o en la ficha de la Play Store.</p>
        </section>

        <section>
          <h2 className="subtitle">7. Contacto</h2>
          <p>Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:</p>
          <p><strong>Correo electrónico:</strong> <a href="mailto:dancedevtech@gmail.com">dancedevtech@gmail.com</a></p>
        </section>

    </div>
  )
}