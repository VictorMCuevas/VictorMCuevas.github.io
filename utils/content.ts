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
  headline: `Hola soy ${PROFILE.firstname}, ${PROFILE.role}. `,
  subline : `Si has llegado hasta aquí, te invito a conocer un poco más sobre mí y los proyectos en los que he trabajado.`
}

export const SERVICE = {
  label: 'Skills',
  headline: `Tecnologías.`,
  subline: `Tecnologías con las que he trabajado para desarrollar proyectos web, desde la interfaz hasta la lógica y el diseño de experiencias de usuario.`,
  services: [
    {
      name: "Vue 3",
      icon: 'logos:vue',
      description: 'Desarrollo de SPAs con Vue 3 utilizando Composition API, Pinia y enrutamiento dinámico.',
      thumbnails: ''
    },
    {
      name: "Laravel & PHP",
      icon: 'logos:laravel',
      description: 'Construcción de backends, frontend y APIs con Laravel.',
      thumbnails: ''
    },
    {
      name: "Tailwind CSS",
      icon: 'logos:tailwindcss-icon',
      description: 'Uso de clases de utilidad para construir interfaces responsive, apoyándome en la documentación oficial.',
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
      name: "MySQL",
      icon: 'logos:mysql',
      description: 'Diseño y consulta de bases de datos relacionales con MySQL: modelado de tablas, relaciones y consultas.',
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
    // {
    //   name: "Proyecto Mapas",
    //   live_demo: 'https://victormcuevas.github.io/ProyectoMapas/',
    //   description: 'Uno de mis primeros proyectos utilizando JavaScript. Muestra un mapa con marcadores predeterminados y permite crear marcadores personalizados.',
    //   thumbnails: 'mapas.png',
    //   type: 'Página web'
    // },
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
    `Mi nombre es ${PROFILE.fullname}, soy ${PROFILE.role}. Después de años en trabajos que no me motivaban, decidí dar el paso, apostar por mi mismo y formarme en lo que siempre me había gustado, la informática.`,
    ` Cuando no estoy curioseando, probablemente esté jugando a algún videojuego, saliendo con mi cámara a hacer fotografías o disfrutando de una ruta en moto.`
  ]
}

export const TIMELINE = {
  label: 'Formación',
  title: 'Mi formación',
  description: 'Esta es mi formación actual, aunque sigo formándome cada día.',
  items: [
    {
      id: 'item1',
      label: '2026',
      title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
      subtitle: '2024 - 2026',
      description: [
                      'Desarrollo de aplicaciones web',
                      'Gestión de bases de datos',
                      'Configuración de entornos de desarrollo'
                    ]
    },
    {
      id: 'item2',
      label: '2019',
      title: 'Técnico Superior en Administración de Sistemas Informáticos en Red',
      subtitle: '2017 - 2019',
      description: [
                      'Administración de sistemas operativos',
                      'Gestión de servicios de red',
                      'Configuración de infraestructuras de red'
                    ]
    },
    {
      id: 'item3',
      label: '2017',
      title: 'Técnico en Sistemas Microinformáticos y Redes',
      subtitle: '2015 - 2017',
      description:[
                    'Instalación, configuración y mantenimiento de sistemas informáticos',
                    'Despliegue redes locales en pequeños entornos',
                    'Montaje y reparación de equipos',
                    'Gestión de software base y de aplicación'
      ] 
    },
  ]
}

export const CTA = {
  label: 'Contacto',
  description: 'Si te han gustado mis proyectos, puedes ver el resto en mi perfil de GitHub o ponerte en contacto conmigo.'
}