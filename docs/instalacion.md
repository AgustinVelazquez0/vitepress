# Instalación

Para instalar y usar VitePress en tu proyecto, seguí estos pasos:

1. Asegurate de tener Node.js (versión 18 o superior) instalado.
2. Inicializá un proyecto npm (si no tenés uno):
   ```bash
   npm init -y
   ```
3. Instalá VitePress como dependencia de desarrollo:
   ```bash
   npm install vitepress --save-dev
   ```
4. Creá la carpeta `docs` y agregá un archivo `index.md` con tu contenido.
5. Agregá los scripts necesarios en tu `package.json` para correr VitePress:
   ```json
   "scripts": {
     "dev": "vitepress dev docs",
     "build": "vitepress build docs",
     "serve": "vitepress serve docs"
   }
   ```
6. Ejecutá el servidor de desarrollo para ver la documentación en vivo:
   ```bash
   npm run dev
   ```
7. Abrí tu navegador en [la página principal](/) para ver tu documentación.

---

## Clonar este proyecto

Si querés probar directamente mi proyecto de documentación, podés clonarlo usando:

```bash
git clone https://github.com/tu_usuario/mi-doc-vitepress.git
```
