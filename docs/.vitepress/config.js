module.exports = {
  title: "Documentación de VitePress",
  description: "Documentación del proyecto con VitePress",
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: "/logo.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Guía", link: "/introduccion" },
    ],
    sidebar: [
      {
        text: "Sección 1",
        items: [
          { text: "Introducción", link: "/introduccion" },
          { text: "Instalación", link: "/instalacion" },
          { text: "Uso", link: "/uso" },
          { text: "FAQ", link: "/faq" },
        ],
      },
    ],
  },
};
