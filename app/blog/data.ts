export type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  author: {
    name: string
 
  }
  date: string
  readTime: string
  categories: string[]
  slug: string
  relatedPosts?: {
    title: string
    slug: string
    featuredImage: string
  }[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Diplomado en RH 2025",
    excerpt: "Te presentamos la tan esperada tercera edición del diplomado «Construyendo Organizaciones Altamente Competitivas y Profundamente Humanas», en una colaboración estratégica entre Praxis Asesores Corporativos, Instituto Desafío y nuestra querida casa, Talento 3.0.  Este diplomado representa una excelente oportunidad para desarrollar y fortalecer habilidades ejecutivas en temas de capital humano, dirigido a emprendedores, empresarios, directores, gerentes y especialistas en recursos humanos. Nuestra alianza con instituciones de alto prestigio en la comunidad empresarial garantiza una experiencia educativa de calidad y relevancia.",
    content: `<p>Te presentamos la tan esperada tercera edición del diplomado «Construyendo Organizaciones Altamente Competitivas y Profundamente Humanas», en una colaboración estratégica entre Praxis Asesores Corporativos, Instituto Desafío y nuestra querida casa, Talento 3.0.

Este diplomado representa una excelente oportunidad para desarrollar y fortalecer habilidades ejecutivas en temas de capital humano, dirigido a emprendedores, empresarios, directores, gerentes y especialistas en recursos humanos. Nuestra alianza con instituciones de alto prestigio en la comunidad empresarial garantiza una experiencia educativa de calidad y relevancia.

Descarga el brochure

Bajo la tutela de expertos con una amplia experiencia en la gestión organizacional, exploraremos los temas más importantes en la gestión profesional actual. Desde estrategia hasta finanzas, operaciones, talento y mercado, abordaremos cada área con un enfoque práctico y humanista.</p>`,
    featuredImage: "/rh2025.png",
    author: {
      name: "Web Manager",
 
    },
    date: "13 Mar 2025",
    readTime: "8 min read",
    categories: ["Atracción de talento", "Autogestión", "Capacitación", "Clima laboral"],
    slug: "diplomado-rh-2025",
    relatedPosts: [
      {
        title: "La Metodología Ágil: Transformación Organizacional desde la Gestión RRHH",
        slug: "metodologia-agil",
        featuredImage: "/agil.png",
      },
      {
        title: "Trabajos vacíos, empleados desconectados: Lo que «Bullshit Jobs» nos enseña",
        slug: "bs-jobs",
        featuredImage: "/bs.png",
      },
    ],
  },
  {
    id: "2",
    title: "La Metodología Ágil: Transformación Organizacional desde la Gestión RRHH",
    excerpt: "La metodología Ágil ha dejado de ser exclusiva del sector tecnológico y se ha convertido en una estrategia ampliamente utilizada en diversas áreas, incluyendo la gestión de Recursos Humanos (RR.HH.). La capacidad de adaptarse rápidamente al cambio y responder de forma ágil a las demandas del mercado ha hecho de este enfoque una prioridad para muchas organizaciones.",
    content: `<p>La metodología Ágil ha dejado de ser exclusiva del sector tecnológico y se ha convertido en una estrategia ampliamente utilizada en diversas áreas, incluyendo la gestión de Recursos Humanos (RR.HH.). La capacidad de adaptarse rápidamente al cambio y responder de forma ágil a las demandas del mercado ha hecho de este enfoque una prioridad para muchas organizaciones.

La metodología Ágil es un enfoque de gestión de proyectos centrado en la flexibilidad, la colaboración y la capacidad de adaptación. Nació en el desarrollo de software, con el Manifiesto Ágil de 2001, que estableció principios fundamentales como la entrega continua de valor, la colaboración activa entre equipos, y la priorización de responder al cambio sobre el seguimiento de un plan.

La implementación de Ágil en una empresa implica trabajar en ciclos cortos o «sprints» en los que se entrega valor incrementalmente, en lugar de esperar hasta la finalización de un proyecto completo. Así, las empresas pueden adaptarse rápidamente a las necesidades del negocio y de los clientes, promoviendo la innovación y el crecimiento.</p>`,
    featuredImage: "/agil.png",
    author: {
      name: "Administrador",

    },
    date: "28 April 2025",
    readTime: "6 min read",
    categories: ["AGIL", "CAPACITACIÓN"],
    slug: "metodologia-agil",
    relatedPosts: [
      {
        title: "Diplomado en RH 2025",
        slug: "diplomado-rh-2025",
        featuredImage: "/rh2025.png",
      },
      {
        title: "Trabajos vacíos, empleados desconectados: Lo que «Bullshit Jobs» nos enseña",
        slug: "bs-jobs",
        featuredImage: "/bs.png",
      },
    ],
  },
  {
    id: "3",
    title: "Trabajos vacíos, empleados desconectados: Lo que «Bullshit Jobs» nos enseña",
    excerpt: "Actualmente, la «renuncia silenciosa» y la escasez de talento son dos de los desafíos más apremiantes en el mundo laboral. La «renuncia silenciosa» se refiere a aquellos empleados que, insatisfechos con sus roles, se limitan a cumplir con lo estrictamente necesario, sin mostrar mayor compromiso ni entusiasmo. Esta desconexión no es solo un tema de falta de motivación, sino que en muchos casos refleja un problema más profundo: trabajos que carecen de propósito o significado. David Graeber, en su libro Bullshit Jobs, aborda este tipo de trabajos, describiéndolos como roles que, aunque existen, no aportan valor real ni a la empresa ni a la sociedad, lo que genera insatisfacción tanto en quienes los ocupan como en el entorno laboral.",
    content: `<p>Actualmente, la «renuncia silenciosa» y la escasez de talento son dos de los desafíos más apremiantes en el mundo laboral. La «renuncia silenciosa» se refiere a aquellos empleados que, insatisfechos con sus roles, se limitan a cumplir con lo estrictamente necesario, sin mostrar mayor compromiso ni entusiasmo. Esta desconexión no es solo un tema de falta de motivación, sino que en muchos casos refleja un problema más profundo: trabajos que carecen de propósito o significado. David Graeber, en su libro Bullshit Jobs, aborda este tipo de trabajos, describiéndolos como roles que, aunque existen, no aportan valor real ni a la empresa ni a la sociedad, lo que genera insatisfacción tanto en quienes los ocupan como en el entorno laboral.

¿Qué es un «bullshit job»?
Graeber define estos trabajos como una forma de empleo remunerado que es completamente inútil, innecesario o perjudicial, hasta el punto de que el propio empleado no puede justificar su existencia, aunque se sienta obligado a fingir lo contrario. Esta desconexión entre la realidad y las apariencias es lo que caracteriza a los bullshit jobs, y es también la fuente del profundo malestar que experimentan quienes los desempeñan.

A nivel mundial, la escasez de talento se ha intensificado. En México, por ejemplo, el 69% de los empleadores reportan dificultades para cubrir posiciones clave (Factorial). Ante esta situación, las empresas se ven obligadas a reevaluar no solo sus estrategias de atracción de talento, sino también la forma en que diseñan los roles laborales dentro de sus organizaciones. Graeber argumenta que muchos trabajos son innecesarios y no aportan valor, y este tipo de tareas contribuyen a la desmotivación y al aumento de la rotación laboral.

Cinco categorías de bullshit jobs:
Graeber identifica cinco tipos de bullshit jobs:

Lacayos (Flunkies): Existen principalmente para hacer que alguien más parezca o se sienta importante (ej. recepcionistas sin tareas reales).
Esbirros (Goons): Trabajan para avanzar los intereses de sus empleadores, aunque su impacto general sea perjudicial para la humanidad (ej. cabilderos, PR).
Tapones (Duct Tapers): Existen solo para solucionar problemas que no deberían existir en primer lugar (ej. resolver problemas temporales en lugar de arreglar la causa raíz).
Marcadores de casillas (Box Tickers): Se contratan para dar la impresión de que la empresa está haciendo algo que realmente no está haciendo (ej. consultores que escriben informes irrelevantes).
Capataces (Taskmasters): Se dividen en dos: aquellos que supervisan innecesariamente a otros y aquellos que crean tareas inútiles para los demás.

Una encuesta reciente muestra que casi el 90% de los trabajadores mexicanos desearían semanas laborales más cortas para mejorar su balance entre trabajo y vida personal (Factorial). Esto refleja una tendencia global hacia la búsqueda de mayor flexibilidad y un sentido más profundo de propósito en el trabajo. Los empleados ya no están dispuestos a desempeñar trabajos que no les ofrezcan satisfacción o que no les permitan ver un impacto tangible en el mundo.

La desconexión emocional y la falta de sentido en los trabajos están generando fenómenos como la renuncia silenciosa. Por ello, es más importante que nunca que los empleadores rediseñen sus estrategias de gestión del talento. A continuación, se presentan algunas recomendaciones clave para empleadores y dueños de negocios que buscan combatir estos desafíos y generar una fuerza laboral más comprometida y productiva.

Recomendaciones para líderes:
Diseñar roles con sentido: Uno de los principales problemas que destaca David Graeber en Bullshit Jobs es la existencia de roles que no aportan valor real. Al revisar los puestos dentro de tu organización, asegúrate de que cada rol esté alineado con los objetivos estratégicos de la empresa. Si no puedes identificar claramente el impacto de un puesto, puede ser el momento de reformular su propósito. Un rol significativo no solo mejora el compromiso de los empleados, sino que también maximiza la eficiencia organizacional.
Ofrecer flexibilidad y un balance saludable: La flexibilidad laboral es una tendencia en crecimiento, impulsada por la búsqueda de un mejor balance entre vida personal y profesional. Las jornadas reducidas y los horarios flexibles no solo son una demanda creciente entre los empleados, sino que también pueden aumentar la satisfacción y reducir la rotación. Implementar estas medidas puede ser clave para mantener a los empleados motivados y felices.
Fomentar el reskilling y upskilling: En lugar de buscar constantemente talento externo, las empresas pueden centrarse en desarrollar las habilidades de su propio personal. El reskilling (capacitar para nuevas funciones) y el upskilling (mejorar habilidades existentes) no solo permiten cubrir brechas de talento, sino que también demuestran a los empleados que su desarrollo es una prioridad para la empresa, lo que refuerza su compromiso y lealtad.
Crear una cultura que valore el trabajo significativo: Los empleados desean sentir que lo que hacen tiene un impacto tangible. Crear una cultura organizacional donde el trabajo significativo sea valorado y promovido puede reducir la desmotivación y la desconexión que llevan a la renuncia silenciosa. Al fomentar un entorno donde los empleados sepan que sus esfuerzos contribuyen a un propósito mayor, las empresas pueden aumentar la satisfacción y retener mejor el talento.
En su análisis sobre los bullshit jobs, David Graeber llega a una conclusión muy interesante: una solución para abordar el problema del trabajo sin propósito y la desconexión de los empleados es la implementación de un Ingreso Básico Universal (UBI). Según Graeber, un UBI permitiría que las personas tengan la libertad de rechazar trabajos que consideran inútiles o alienantes, lo que llevaría a una revalorización del trabajo verdaderamente significativo y socialmente útil. Esta política ofrecería a los trabajadores un colchón económico que les permita priorizar el trabajo que genera valor real, tanto para ellos mismos como para la sociedad.

En este sentido, el camino que está tomando México puede ser un referente para otros países. Aunque México aún no ha implementado un UBI, ha avanzado en la implementación de políticas sociales que buscan apoyar a los sectores más vulnerables y reducir la desigualdad. Programas como «Jóvenes Construyendo el Futuro», que brinda becas para capacitación a jóvenes, o la pensión universal para adultos mayores, son ejemplos de políticas que apuntan en la dirección de un apoyo económico más amplio, similar a lo que un UBI podría ofrecer. Estos programas representan un paso hacia un modelo en el que el trabajo no solo se vea como una necesidad para la subsistencia, sino como una oportunidad para el desarrollo personal y la contribución social.

Por tanto, la adopción de un UBI no solo podría combatir la renuncia silenciosa, sino que también reconfiguraría la economía del trabajo, permitiendo a las personas rechazar roles que no contribuyen al bienestar colectivo y optar por trabajos con un propósito real y tangible. México, con su enfoque avanzado en políticas sociales, está en una posición única para explorar y quizás liderar este camino en América Latina.</p>`,
    featuredImage: "/bs.png",
    author: {
      name: "Administrador",
    },
    date: "15 April 2025",
    readTime: "10 min read",
    categories: ["Empleos", "AI", "Innovation"],
    slug: "bs-jobs",
    relatedPosts: [
      {
        title: "Diplomado en RH 2025",
        slug: "diplomado-rh-2025",
        featuredImage: "/rh2025.png",
      },
      {
        title: "La Metodología Ágil: Transformación Organizacional desde la Gestión RRHH",
        slug: "metodologia-agil",
        featuredImage: "/agil.png",
      },
    ],
  }
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
} 