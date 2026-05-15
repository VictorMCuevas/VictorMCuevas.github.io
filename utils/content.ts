export const NAVLINKS= [
  {
    label: 'Inicio',
    url: '/'
  },
  {
    label : 'Información',
    url: '#about'
  },
  {
    label : 'Proyectos',
    url: '#work'
  },
  // {
  //   label : 'Service',
  //   url: '/#service'
  // },
  
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
  label: 'Skils',
  headline: `Tecnologías.`,
  subline: `Tecnologías con las que he trabajado para desarrollar proyectos web, desde la interfaz hasta la lógica y el diseño de experiencias de usuario.`,
  services: [
    {
      name: "Vue 3",
      icon: 'Code',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
    {
      name: "Mobile Development",
      icon: 'MobileProgramming',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: 'https://cdn.dribbble.com/userupload/36796487/file/original-436c64a72733941273f9fd1f4d994883.jpg?resize=752x&vertical=center'
    },
    {
      name: "UI/UX Designer",
      icon: 'PenTool2',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
   
  ]
}

export const WORK = {
  label: 'work',
  headline: 'Custom design solutions for your requirements.',
  subline: 'I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.',
  works: [
    {
      name: "Cafe Street - Landing Page",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'cafestreet-landingpage.webp',
      type: 'landing page'
    },
    {
      name: "FurniLux",
      live_demo: '#',
      description: 'Make your home comfortable with best furniture.',
      thumbnails: 'furnilux-landingpage.webp',
      type: 'landing page'
    },
    {
      name: "Let's Food UI Kit",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'letsfood-landingpage.webp',
      type: 'Web Design'
    },
    {
      name: "Creative Agency",
      live_demo: '#',
      description: 'This website is to improve your business as a software house and reach more customers.',
      thumbnails: 'creativeagency-landingpage.webp',
      type: 'Web Company'
    },
    {
      name: "Login Register Design",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'loginregister-design.webp',
      type: 'UI Design'
    },
    {
      name: "IRATOON - Streaming App",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'iratoon-mobileapp.webp',
      type: 'Mobile App'
    },
  ]
}

export const ABOUT = {
  label: 'Let me introduce my self',
  introduce: [
    `Mi nombre es ${PROFILE.fullname}, and I am a passionate ${PROFILE.role}. I specialize in creating seamless and visually appealing user interfaces, combining design and development to enhance user experiences.`,
    "I love turning ideas into interactive and functional web applications. Excited to collaborate and build amazing digital products together!"
  ]
}

export const CTA = {
  label: 'Let’s Build Something Great Together',
  description: 'Need a clean, functional UI? I’m here to help bring your vision to life—simple, responsive, and user-focused.'
}