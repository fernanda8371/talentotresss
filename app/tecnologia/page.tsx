"use client"
import Layout from "@/components/layout/layout"
import styles from "./tecnologia.module.css"
import { useState } from "react"
import { Monitor, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react"

const excelServices = [
  { title: "Aumentos de sueldo", desc: "Un formato de aumento de sueldo en Excel es una herramienta que se utiliza para documentar y gestionar los aumentos salariales de los empleados de una organización. Proporciona un registro estructurado en el que se pueden ingresar datos relacionados con el aumento de sueldo de un empleado en particular." },
  { title: "Aviso por finalización de contrato temporal", desc: "Es una herramienta que se utiliza para notificar a un empleado que su contrato de trabajo temporal llegará a su término en una fecha específica." },
  { title: "Base de datos de empleados", desc: "Herramienta diseñada para recopilar, organizar y gestionar información relacionada con los empleados de una organización. Este tipo de formato es fundamental para llevar un registro completo y estructurado de los datos de los empleados y facilita la gestión de recursos humanos." },
  { title: "Calcular el índice de rotación", desc: "Un formato de cálculo del índice de rotación en Excel es una herramienta que se utiliza para calcular y analizar la tasa de rotación de empleados en una organización. El índice de rotación mide la frecuencia con la que los empleados ingresan y salen de la empresa en un período determinado." },
  { title: "Cálculo de costo empresa", desc: "Calcula el costo real de cada empleado y optimiza tu presupuesto de recursos humanos." },
  { title: "Checklist para el onboarding", desc: "Asegura una integración exitosa de nuevos empleados con listas de verificación personalizadas." },
  { title: "Control de KPIs de RRHH", desc: "Monitorea y reporta los indicadores clave de recursos humanos en tiempo real." },
  { title: "Control horario", desc: "Gestiona y registra la asistencia y horarios de tu equipo de manera sencilla." },
  { title: "Cuestionarios NOM 035", desc: "Gestiona y registra la asistencia y horarios de tu equipo de manera sencilla." },
  { title: "Descripción de Puestos de Trabajo", desc: "Gestiona y registra la asistencia y horarios de tu equipo de manera sencilla." },
  { title: "Encuesta de clima laboral", desc: "Gestiona y registra la asistencia y horarios de tu equipo de manera sencilla." },
  { title: "Evaluación de desempeño", desc: "Gestiona y registra la asistencia y horarios de tu equipo de manera sencilla." },
  { title: "Finiquito", desc: "Gestiona y registra la asistencia y horarios de tu equipo de manera sencilla." },

]

const airtableServices = [
  { title: "Gestión de proyectos colaborativos", desc: "Organiza tareas, asigna responsables y haz seguimiento visual de proyectos en tiempo real." },
  { title: "Automatización de flujos de trabajo", desc: "Crea automatizaciones para ahorrar tiempo y reducir errores en procesos repetitivos." },
  { title: "Integración con otras apps", desc: "Conecta Airtable con tus herramientas favoritas para centralizar la información." },
  { title: "Dashboards personalizados", desc: "Visualiza tus datos con paneles interactivos y reportes a medida." },
]

function AccordionList({ items }: { items: { title: string, desc: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className={styles.accordionList}>
      {items.map((item, idx) => (
        <div key={idx} className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <Monitor className={styles.accordionIcon} />
            <span>{item.title}</span>
            <span className={styles.accordionToggle}>
              {openIndex === idx ? <Minus size={22} /> : <Plus size={22} />}
            </span>
          </button>
          {openIndex === idx && (
            <div className={styles.accordionContent}>
              {item.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const serviceCards = [
  {
    logo: "/excel_logo.png",
    title: "Servicios en Excel",
    desc: "Automatización de reportes, dashboards interactivos, macros, análisis de datos y soluciones personalizadas en Excel para optimizar tus procesos empresariales.",
    details: <AccordionList items={excelServices} />,
  },
  {
    logo: "/airtable.png",
    title: "Servicios en Airtable",
    desc: "Administración de permisos y vacaciones",
    details: (
      <div className={styles.airtableInfoContainer}>
        <p>
          Si es gerente de una organización, coordinar las solicitudes de vacaciones de sus equipos puede resultar difícil. Las solicitudes llegan por correo electrónico, se pierden en la combinación de todos los demás elementos prioritarios y pueden pasarse por alto por completo. A veces ves la solicitud y te olvidas de aprobar. A veces la aprobación se pierde.<br /><br />
          ¿Cómo sabe su equipo cuando sus compañeros están de vacaciones? ¿Tiene que rechazar solicitudes de vacaciones porque hay demasiadas personas libres al mismo tiempo? ¿Y cómo se puede saber quién ya ha agotado su asignación anual de vacaciones y quién tiene tantos días de vacaciones acumulados que podría tomarse un mes libre?<br /><br />
          Nuestro equipo de desarrollo te puede ayudar a construir una solución modular a la medida de tu organización, sin importar el número de colaboradores que tengas, esta aplicación se integrará a tu control interno actual fácil de implementar e integrar a tus demás procesos, como la nómina y portal de servicio de tus colaboradores.
        </p>
        <img src="/air-table.png" alt="Airtable solución vacaciones" className={styles.airtableImage} />
      </div>
    ),
  },
]

export default function Tecnologia() {
  const [current, setCurrent] = useState(0)
  const goLeft = () => setCurrent((prev) => (prev === 0 ? serviceCards.length - 1 : prev - 1))
  const goRight = () => setCurrent((prev) => (prev === serviceCards.length - 1 ? 0 : prev + 1))

  return (
    <Layout>
      <div className={styles.techContainer}>
        <h1 className={styles.pageTitle}>Soluciones en Tecnología</h1>
        <p className={styles.pageSubtitle}>Automatización, gestión y análisis de datos para tu empresa</p>
        <div className={styles.carouselWrapper}>
          <button className={styles.carouselArrow} onClick={goLeft} aria-label="Ver anterior">
            <ChevronLeft size={32} />
          </button>
          <div className={styles.carouselCard}>
            <section className={styles.serviceCard}>
              <img src={serviceCards[current].logo} alt={serviceCards[current].title} className={styles.serviceLogo} />
              <h2 className={styles.serviceTitle}>{serviceCards[current].title}</h2>
              <p className={styles.serviceDesc}>{serviceCards[current].desc}</p>
              <div className={styles.serviceDetails}>{serviceCards[current].details}</div>
            </section>
          </div>
          <button className={styles.carouselArrow} onClick={goRight} aria-label="Ver siguiente">
            <ChevronRight size={32} />
          </button>
        </div>
        <div className={styles.carouselIndicators}>
          {serviceCards.map((_, idx) => (
            <span
              key={idx}
              className={current === idx ? styles.carouselDotActive : styles.carouselDot}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
  