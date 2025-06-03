module.exports = {
  title: "Documentación",
  description:
    "Documentación completa de la aplicación Mental para bienestar y salud mental",
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: "/logo.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Usuarios", link: "/usuarios/" },
      { text: "Hipnosis", link: "/hipnosis/" },
      { text: "Métodos de Pago", link: "/metodos-pago/" },
      { text: "Planes", link: "/planes/" },
    ],
    sidebar: {
      "/usuarios/": [
        {
          text: "Guía de Usuario",
          items: [
            { text: "Introducción", link: "/usuarios/" },
            { text: "Registro y Perfil", link: "/usuarios/registro-perfil" },
            { text: "Navegación en la App", link: "/usuarios/navegacion-app" },
            {
              text: "Configuración y Privacidad",
              link: "/usuarios/configuracion-privacidad",
            },
            { text: "Soporte Técnico", link: "/usuarios/soporte-tecnico" },
          ],
        },
      ],
      "/hipnosis/": [
        {
          text: "Hipnoterapia",
          items: [
            {
              text: "Introducción a la Hipnoterapia",
              link: "/hipnosis/introduccion-hipnoterapia",
            },
            { text: "Sesiones Guiadas", link: "/hipnosis/sesiones-guiadas" },
            {
              text: "Personalización de Experiencia",
              link: "/hipnosis/personalizacion-experiencia",
            },
            {
              text: "Seguimiento del Progreso",
              link: "/hipnosis/seguimiento-progreso",
            },
          ],
        },
      ],
      "/metodos-pago/": [
        {
          text: "Pagos y Facturación",
          items: [
            {
              text: "Opciones Disponibles",
              link: "/metodos-pago/opciones-disponibles",
            },
            {
              text: "Seguridad en Transacciones",
              link: "/metodos-pago/seguridad-transacciones",
            },
            {
              text: "Facturación y Reembolsos",
              link: "/metodos-pago/facturacion-reembolsos",
            },
          ],
        },
      ],
      "/planes/": [
        {
          text: "Planes y Suscripciones",
          items: [
            {
              text: "Comparación de Planes",
              link: "/planes/comparacion-planes",
            },
            { text: "Beneficios Premium", link: "/planes/beneficios-premium" },
            {
              text: "Cambios y Cancelaciones",
              link: "/planes/cambios-cancelaciones",
            },
          ],
        },
      ],
    },
    footer: {
      message: "Mental - Bienvenidos al viaje",
      copyright: "Copyright © 2024 Mental App. Todos los derechos reservados.",
    },
  },
};
