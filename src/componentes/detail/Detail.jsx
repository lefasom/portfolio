import React from 'react';
import './detail.css';

function ChatProject() {
  return (
    <div className="chat-project">
      <h2 className="project-title">Chat en Tiempo Real con Vue 3, Vuex 4, Node.js, MongoDB y Firebase</h2>
      <div className="project-description">
        <p>
          Chat es una emocionante aplicación de sala de chat en tiempo real que ofrece a los usuarios la capacidad de leer, eliminar y guardar mensajes en tiempo real.
          Además, proporciona una sólida gestión de cuentas de usuario con un enfoque en la seguridad, y la persistencia de datos se logra mediante Cookies HttpOnly.
          También incluye notificaciones push para mantener a los usuarios siempre informados.
        </p>
        <p>
          Este proyecto representa la convergencia de tecnologías modernas para brindar una experiencia de usuario excepcional.
        </p>
      </div>
      <div className="project-technologies">
        <h3>Tecnologías Utilizadas:</h3>
        <ul>
          <li>Vue 3: Un marco de trabajo progresivo para crear interfaces de usuario interactivas y dinámicas.</li>
          <li>Vuex 4: Un estado centralizado que facilita la gestión de datos en toda la aplicación.</li>
          <li>Node.js: Utilizado para administrar la seguridad de las cuentas de usuario mediante la autenticación JWT (JSON Web Tokens) y la gestión de conexiones en tiempo real con Socket.io.</li>
          <li>MongoDB: Una base de datos NoSQL que garantiza la persistencia de los datos de los usuarios con un alto grado de seguridad.</li>
          <li>Firebase: Utilizado para la autenticación de usuarios y la persistencia de datos, especialmente útil cuando no se necesita un control detallado de la información del usuario.</li>
          <li>Web-push: Maneja las notificaciones push para mantener a los usuarios informados en tiempo real.</li>
        </ul>
      </div>
      <div className="project-observations">
        <h3>Observaciones:</h3>
        <p>
          Si necesitas un control más exhaustivo sobre los datos del usuario, es recomendable implementar un servidor propio utilizando tecnologías como MongoDB y Node.js. Esto garantiza la seguridad de los datos y un código más ordenado.
        </p>
        <p>
          Por otro lado, si la aplicación se centra en la autenticación de usuarios y la persistencia de datos simples, Firebase es una excelente opción debido a su facilidad de uso y versatilidad.
        </p>
      </div>
    </div>
  );
}

export default ChatProject;
