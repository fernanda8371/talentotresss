export type EventModality = "Online de pago" | "Presencial de pago" | "Presencial gratuito" | "Online gratuito"

export type Event = {
  id: string
  title: string
  date: string
  time: string
  image: string
  description: string
  location: string
  modality: EventModality
  price: number
  registered: number
  isPublic: boolean
  ticketUrl?: string
}

export const eventsData: Event[] = [
  {
    id: "1",
    title: "Las 5 Llaves de la Magia del Servicio al Cliente en Oaxaca",
    date: "Junio 18, 2025",
    time: "9:00 AM - 6:00 PM",
    image: "/POST-18-JUNIO.png",
    description: "​¡Prepárate para una experiencia mágica en Oaxaca! Próximo miércoles 18 de junio de 2025 de 9:00 AM a 6:00 PM las 5 Llaves de la Magia del Servicio al Cliente, un evento que transformará la manera en que interactúas con tus clientes. Organizado por Transforma, Talento 3.0 y La Magia del Aprendizaje este evento promete ser una fiesta de aprendizaje donde desvelaremos los secretos para ofrecer un servicio excepcional que dejará a tus clientes encantados.",
    location: "Zorba el Griego, Oaxaca",
    modality: "Presencial de pago",
    price:3500.00 ,
    registered: 200,
    isPublic: true,
    ticketUrl: "https://lu.ma/s4i9s4yd"
  },
  {
    id: "2",
    title: "Las 5 Llaves de la Magia del Servicio al Cliente en Oaxaca",
    date: "Junio 19, 2025",
    time: "9:00 AM - 6:00 PM",
    image: "/POST-19-JUNIO.png",
    description: "​Durante este taller, aprenderás a crear un ambiente seguro y acogedor, a mostrar cortesía en cada interacción, y a ser inclusivo con todos tus clientes, sin importar su origen o cultura. Además, te enseñaremos a montar un espectáculo inolvidable que sorprenderá a tus clientes y a ser eficiente en cada paso del camino. No te pierdas esta oportunidad de llevar tu servicio al cliente al siguiente nivel y crear experiencias que tus clientes recordarán para siempre. ¡Nos vemos en Oaxaca!",
    location: "Zorba el Griego, Oaxaca",
    modality: "Presencial de pago",
    price: 3500.00,
    registered: 132,
    isPublic: true,
    ticketUrl: "https://lu.ma/qh8we8cq"
  },
  {
    id: "3",
    title: "La Magia del Liderazgo y el Trabajo en Equipo en Oaxaca",
    date: "Junio 20, 2025",
    time: "9:00 AM - 6:00 PM",
    image: "/Post-Liderazgo-20-junio.png",
    description: "​El viernes 20 de junio de 2025, de 9:00 a 18:00 horas nos reuniremos para explorar cómo Disney ha perfeccionado el arte de liderar con inspiración y fomentar la colaboración en un ambiente empresarial vibrante y competitivo.​A través de dinámicas lúdicas y ejemplos prácticos, aprenderás a aplicar estos principios en tu propio entorno laboral. Desde habilidades de liderazgo inspirador hasta estrategias efectivas de servicio al cliente, este curso te equipará con las herramientas necesarias para motivar a tu equipo y alcanzar el éxito. ¡Y no te preocupes, no será solo teoría! Con siete dinámicas interactivas, te sumergirás en un aprendizaje divertido y memorable que te permitirá experimentar y practicar las habilidades de liderazgo al estilo Disney.​Así que, si estás listo para transformar tu enfoque de liderazgo y trabajo en equipo, únete a nosotros en esta experiencia única. ¡Nos vemos en el enlace mágico que te llevará al lugar del evento!",
    location: "Zorba el Griego, Oaxaca",
    modality: "Presencial de pago",
    price: 3500.00,
    registered: 32,
    isPublic: true,
    ticketUrl: "https://lu.ma/pd2a26pn"
  }
] 