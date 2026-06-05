export const NAVLINKS= [
  {
    label: 'Inicio',
    url: '/'
  },
  {
    label : 'Información',
    url: '#informacion'
  },
  {
    label : 'Formación',
    url: '#formacion'
  },
  {
    label : 'Tecnologías',
    url: '#service'
  },
  {
    label : 'Proyectos',
    url: '#work'
  },
  
  
]

export const PROFILE = {
  firstname : 'Víctor M.',
  lastname: 'Cuevas',
  get fullname() {
    return `${this.firstname} ${this.lastname}`
  },
  role : 'desarrollador web junior',
  avatar: '/images/porfolio.png'
}

export const HERO = {
  badge: 'Disponible como desarrollador junior',
  headline: `Hola, soy ${PROFILE.firstname},¡Bienvenid@ a mi porfolio!`,
  subline : `Soy un ${PROFILE.role} enfocado en la creación de aplicaciones web responsive, modernas e intuitivas.`
}

export const SERVICE = {
  label: 'Skills',
  headline: `Tecnologías.`,
  subline: `Tecnologías con las que he trabajado para desarrollar proyectos web, desde la interfaz hasta la lógica y el diseño de experiencias de usuario.`,
  services: [
    {
      name: "Vue 3 & Nuxt 3",
      icon: 'logos:vue',
      description: 'Desarrollo de SPAs y aplicaciones SSR con Vue 3 y Nuxt 3, usando Composition API, Pinia y enrutamiento dinámico.',
      thumbnails: ''
    },
    {
      name: "Laravel & PHP",
      icon: 'logos:laravel',
      description: 'Construcción de backends y frontend con Laravel: autenticación, gestión de ficheros, generación de PDFs y modelos Eloquent.',
      thumbnails: ''
    },
    {
      name: "Tailwind CSS",
      icon: 'logos:tailwindcss-icon',
      description: 'Uso de clases de utilidad para construir interfaces responsivas en proyectos reales, apoyándome en la documentación oficial.',
      thumbnails: ''
    },
    {
      name: "HTML & CSS",
      icon: 'vscode-icons:file-type-html',
      description: 'Maquetación semántica con HTML5 y estilado con CSS3: flexbox, grid y diseño responsive sin frameworks.',
      thumbnails: ''
    },
    {
      name: "JavaScript",
      icon: 'logos:javascript',
      description: 'Lógica de frontend con JavaScript: manipulación del DOM, eventos, fetch y uso de APIs externas.',
      thumbnails: ''
    },
    {
      name: "SQL",
      icon: 'logos:mysql',
      description: 'Diseño y consulta de bases de datos relacionales con MySQL: modelado de tablas, relaciones y consultas aplicadas en proyectos reales.',
      thumbnails: ''
    },
  ]
}

export const WORK = {
  label: 'proyectos',
  headline: 'Proyectos personales.',
  subline: 'Echa un vistazo a algunos de mis trabajos en el desarrollo web.',
  works: [
    {
      name: "Njord",
      live_demo: 'https://njordride.es/',
      description: 'Aplicación pensada para motoristas. Permite creación de usuarios, subida de archivos GPX, visualización en mapa de los archivos y creación de rutas. Aplicación creada con frameworks Laravel y Vue.js.',
      thumbnails: 'njord.png',
      type: 'Aplicación web'
    },
    {
      name: "VicBike",
      live_demo: 'https://vicbike.alwaysdata.net/',
      description: 'Simulación de web para un concesionario multimarca de motocicletas. Permite registrar usuarios y simular la compra de motocicletas, con generación de factura en PDF. Mi primer trabajo en Laravel.',
      thumbnails: 'vicbike.png',
      type: 'Proyecto en Laravel'
    },
    {
      name: "Proyecto Mapas",
      live_demo: 'https://victormcuevas.github.io/ProyectoMapas/',
      description: 'Uno de mis primeros proyectos utilizando JavaScript. Muestra un mapa con marcadores predeterminados y permite crear marcadores personalizados.',
      thumbnails: 'mapas.png',
      type: 'Página web'
    },
    {
      name: "Muestario de mensajes WhatsApp",
      live_demo: 'https://victormcuevas.github.io/muestrario_mensajes_whatsapp/',
      description: 'Muestrario web de diferentes tipos de mensajes que se pueden enviar desde una aplicación web, haciendo uso de la API de Meta.',
      thumbnails: 'api_meta.png',
      type: 'Página Web'
    },
    // {
    //   name: "Login Register Design",
    //   live_demo: '#',
    //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
    //   thumbnails: 'loginregister-design.webp',
    //   type: 'UI Design'
    // },
    // {
    //   name: "IRATOON - Streaming App",
    //   live_demo: '#',
    //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
    //   thumbnails: 'iratoon-mobileapp.webp',
    //   type: 'Mobile App'
    // },
  ]
}

export const ABOUT = {
  label: 'Información personal',
  introduce: [
    `Mi nombre es ${PROFILE.fullname}, soy ${PROFILE.role}. Me gustan los proyectos donde el código tiene que resolver algo concreto y donde aprender forma parte del día a día. Trabajo bien en equipo, me adapto rápido a entornos nuevos y disfruto metiéndome en problemas que no tienen una solución evidente. Busco incorporarme a un equipo donde pueda aportar desde el principio y crecer con cada proyecto.`
  ]
}

export const TIMELINE = {
  label: 'Formación',
  title: 'Mi formación',
  description: 'Formación y experiencia que me han convertido en el desarrollador que soy hoy.',
  items: [
    {
      id: 'item1',
      label: '2026',
      title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
      subtitle: '2024 - 2026',
      description: 'Competencias en desarrollo de aplicaciones web, gestión de bases de datos y configuración de entornos de desarrollo. Capacitado para crear interfaces dinámicas, seguras y adaptadas a distintos dispositivos, aplicando buenas prácticas de usabilidad, despliegue y mantenimiento de software.'
    },
    {
      id: 'item2',
      label: '2019',
      title: 'Técnico Superior en Administración de Sistemas Informáticos en Red',
      subtitle: '2017 - 2019',
      description: 'Competencias en administración de sistemas operativos, gestión de servicios de red y despliegue de bases de datos en entornos empresariales. Capacitado para configurar infraestructuras de red, optimizar el rendimiento del hardware y garantizar la disponibilidad, seguridad y correcto funcionamiento de los sistemas informáticos. Perfil orientado a la resolución de incidencias, la mejora continua y la adaptación a entornos tecnológicos.'
    },
    {
      id: 'item3',
      label: '2017',
      title: 'Técnico en Sistemas Microinformáticos y Redes',
      subtitle: '2015 - 2017',
      description: 'Competencias en instalación, configuración y mantenimiento de sistemas informáticos y redes locales en pequeños entornos. Capacitado para montar y reparar equipos, gestionar software base y de aplicación, y asegurar el correcto funcionamiento de servicios en red con criterios de calidad y seguridad. Perfil orientado a la resolución de incidencias, la atención al usuario, el trabajo en equipo y la adaptación a entornos tecnológicos.'
    },
  ]
}

export const CTA = {
  label: 'Contacto',
  description: 'Si te han gustado mis proyectos, puedes ver el resto en mi perfil de GitHub o ponerte en contacto conmigo.'
}