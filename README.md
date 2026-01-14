# Firma-React: Portafolio Interactivo y Moderno

Este es un portafolio personal de una sola página (Single Page Application) construido con React.js y Vite. El proyecto transforma una tarjeta de presentación estática en una experiencia web dinámica, interactiva y totalmente responsive, con un enfoque en la experiencia de usuario (UX) y micro-interacciones pulidas.

## ✨ Características Principales

- **Layout de Barra Lateral Fija:** Una barra lateral (`sidebar`) que permanece visible mientras el contenido principal se desplaza.
- **Scroll Snapping Vertical:** La navegación por el contenido se realiza por secciones a pantalla completa, creando un efecto de "diapositivas".
- **Menú Interactivo "Medallón":** Una navegación minimalista y moderna que se despliega al pasar el cursor.
- **Componentes Dinámicos:** Toda la información (datos personales, habilidades, proyectos) se gestiona desde un único archivo de datos, haciendo el proyecto fácilmente actualizable.
- **Totalmente Responsive:** Diseño adaptable que funciona perfectamente en dispositivos de escritorio, tablets y móviles.
- **Micro-interacciones:** Efectos de `hover` y transiciones suaves en toda la interfaz para una experiencia de usuario premium.

## 🚀 Stack Tecnológico

- **Frontend:** React.js, Vite, JavaScript (ES6+), CSS3
- **Estilos:** CSS plano con una arquitectura modular (BEM-like).
- **Iconos:** Font Awesome

---

## 🏗️ Arquitectura del Proyecto

La estructura del proyecto está organizada para ser modular, escalable y fácil de mantener, separando la lógica, los estilos y los datos.

/
├── public/ # Archivos estáticos públicos (CV.pdf, favicons, etc.)
│ └── CV-David-Rodriguez.pdf
├── src/ # Directorio principal del código fuente de React
│ ├── assets/ # Recursos como imágenes y datos
│ │ ├── data/
│ │ │ └── personalData.js # Objeto central con toda la información del portafolio
│ │ └── images/
│ │ ├── David.PNG
│ │ └── Firma.PNG
│ │
│ ├── components/ # Componentes reutilizables de React
│ │ ├── InfoSection.jsx # Contenedor principal scrollable para el contenido
│ │ ├── ProfileSection.jsx # La barra lateral fija
│ │ ├── ProjectCard.jsx # Tarjeta para mostrar cada proyecto
│ │ ├── SkillBadge.jsx # Badge interactivo para cada habilidad
│ │ └── SocialLinks.jsx # Componente para los iconos de redes sociales
│ │
│ ├── styles/ # Archivos de estilos CSS
│ │ ├── components/ # Estilos específicos para cada componente
│ │ │ ├── InfoSection.css
│ │ │ ├── ProfileSection.css
│ │ │ ├── ProjectCard.css
│ │ │ └── SkillBadge.css
│ │ ├── global.css # Estilos globales y reseteo
│ │ └── variables.css # Variables de color y fuentes (CSS Custom Properties)
│ │
│ ├── App.jsx # Componente principal que ensambla el layout
│ └── main.jsx # Punto de entrada de la aplicación
│
├── .gitignore # Archivos y carpetas ignorados por Git
├── index.html # Plantilla HTML principal
├── package.json # Dependencias y scripts del proyecto
└── README.md # Esta documentación
code
Code

### Explicación de la Arquitectura

- **/public:** Contiene recursos que no se procesan durante la compilación, como tu CV en PDF. Son accesibles directamente desde la raíz del sitio.
- **/src/assets:** Almacena todos los recursos que sí son parte del código fuente. Se divide en **data** (para la lógica de la información) y **images**.
- **/src/components:** El corazón de la aplicación. Cada pieza de la UI es un componente aislado, lo que facilita su mantenimiento y reutilización.
- **/src/styles:** Sigue una arquitectura de CSS modular. `global.css` y `variables.css` establecen la base, y cada componente tiene su propio archivo de estilos para evitar conflictos.

---

## ⚙️ Cómo Ejecutar el Proyecto Localmente

Para clonar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/Firma-React.git
    ```

2.  **Navega a la carpeta del proyecto:**

    ```bash
    cd Firma-React
    ```

3.  **Instala las dependencias:**

    ```bash
    npm install
    ```

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.
