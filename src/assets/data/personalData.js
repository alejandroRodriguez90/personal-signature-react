import davidPhoto1 from "../images/David.PNG";
import davidPhoto2 from "../images/David1.PNG";
import firmaBackground from "../images/Firma.PNG";

export const personalData = {
  name: "David Alejandro Rodríguez",
  title: "Desarrollador Web Full-Stack",

  // Rutas de las imágenes de perfil
  photo1: davidPhoto1,
  photo2: davidPhoto2,

  profileBackground: firmaBackground,
  about:
    "Tecnólogo en Análisis y Desarrollo de Software con 2 años de experiencia y conocimientos en la creación de interfaces de usuario dinámicas con React.js, JavaScript, HTML/CSS y Bootstrap. Cuento con competencia en el desarrollo backend usando Python y Django para construir la lógica de las aplicaciones, así como conocimientos básicos para la gestión de bases de datos con MySQL. En mi flujo de trabajo, aplico el control de versiones con Git y GitHub para garantizar un desarrollo ordenado y colaborativo. Me especializo en entregar sitios web funcionales y con diseño responsive, asegurando una experiencia de usuario intuitiva. Me considero una persona curiosa y estoy en constante aprendizaje, siempre buscando mantenerme al día con las mejores prácticas y nuevas tecnologías del sector.",

  // Habilidades con sus respectivos enlaces
  skills: [
    { name: "React.js", url: "https://www.w3schools.com/react/default.asp" },
    { name: "Node.js", url: "https://www.w3schools.com/nodejs/default.asp" },
    {
      name: "JavaScript (ES6+)",
      url: "https://www.w3schools.com/js/default.asp",
    },
    {
      name: "Bootstrap",
      url: "https://www.w3schools.com/bootstrap/bootstrap_ver.asp",
    },
    { name: "Python", url: "https://www.w3schools.com/python/default.asp" },
    { name: "Django", url: "https://www.w3schools.com/django/index.php" },
    {
      name: "HTML5 & CSS3",
      url: "https://www.w3schools.com/htmlcss/default.asp",
    },
    { name: "mySQL", url: "https://www.w3schools.com/mysql/default.asp" },
    { name: "MongoDB", url: "https://www.w3schools.com/mongodb/index.php" },
    { name: "Git & GitHub" }, // Lo dejamos sin URL como UI/UX
    { name: "UI/UX Design" },
  ],

  // Proyectos reales y actualizados
  projects: [
    {
      title: "Sistema de Gestión de Inventario (SGI)",
      description:
        "Aplicación web full-stack diseñada como prototipo funcional para INGEGASES Y REDES. El backend, construido con Python y Django, expone una API RESTful para gestionar la lógica de negocio, el control de inventario y la autenticación de usuarios. La interfaz, desarrollada en React y estilizada con Bootstrap, consume esta API para ofrecer una experiencia de usuario moderna y responsive, permitiendo la administración de datos complejos y validando el flujo de trabajo completo del sistema.",
      tech: [
        "React.js",
        "Python",
        "Django",
        "Django REST Framework",
        "Bootstrap",
        "JWT",
      ],
      link: "https://login.ingegasesyredes.com/Panel.Admin/dashboard.html",
    },
    {
      title: "Sitio Web Corporativo - INGEGASES Y REDES",
      description:
        "Diseño y desarrollo de la presencia digital para INGEGASES Y REDES, creando una plataforma web visualmente atractiva y centrada en la experiencia del usuario (UX). Utilizando HTML, CSS, JavaScript y la versatilidad de Bootstrap, se construyó un sitio totalmente responsive que comunica eficazmente los servicios de la compañía. El resultado es una navegación intuitiva y un diseño moderno que refuerza la imagen profesional de la marca en cualquier dispositivo.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      link: "https://ingegasesyredes.com/",
    },
    {
      title: "Plataforma E-commerce - 'Sunnies'",
      description:
        "Conceptualización y desarrollo de 'Sunnies', un proyecto personal para crear una experiencia de e-commerce premium enfocada en la venta de gafas de sol y formuladas. La interfaz, construida con HTML, CSS, JS y Bootstrap, ofrece un catálogo de productos visualmente curado, un proceso de compra simplificado a través del carrito de compras, y un sistema de login para la gestión de cuentas de usuario y notificaciones. Actualmente, el backend está en desarrollo con Python y Django, con el objetivo de implementar un panel administrativo para la visualización de dashboards de ventas y gestión de la plataforma.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Python", "Django"],
      link: "https://github.com/alejandroRodriguez90/BrytonGlass-web.git",
    },
  ],

  contact: {
    email: "davidalejandro.rx@live.com",
    phone: "+57 3142038816",
    location: "Bogotá, Colombia",
  },
  socialLinks: [
    {
      name: "facebook",
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/alejandro.rodguez",
    },
    {
      name: "instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/mac_twizy_official?igsh=bTI0bWNncW05dDd4&utm_source=qr",
    },
    {
      name: "linkedin",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/david-alejandro-rodriguez-69624979?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    // ¡AQUÍ ESTÁ LA NUEVA LÍNEA!
    {
      name: "github",
      icon: "fab fa-github",
      url: "https://github.com/alejandroRodriguez90",
    },
    {
      name: "whatsapp",
      icon: "fab fa-whatsapp",
      url: "https://wa.me/573142038816",
    },
  ],

  // Ruta final al CV en la carpeta 'public'
  cvUrl: "/CV-David-Rodriguez.pdf",
};
