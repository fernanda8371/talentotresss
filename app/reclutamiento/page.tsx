import Link from "next/link"
import {
  ArrowRight,
  Users,
  UserPlus,
  Search,
  BarChart,
  FileText,
  Briefcase,
  Building,
  Award,
  Shield,
} from "lucide-react"
import styles from "./reclutamiento.module.css"
import Layout from "@/components/layout/layout"

export default function Reclutamiento() {
    
  return (
    <Layout>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <div className={styles.badgeDot}></div>
            <span>Nuestros Servicios</span>
          </div>

          <h1 className={styles.title}>Soluciones en Recursos Humanos</h1>

          <p className={styles.subtitle}>
          15 Años desarrollando formas innovadoras de atracción, 

<br />
gestión y desarrollo de talento.   </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {/* Service 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIconWrapper}>
              <Briefcase className={styles.serviceIcon} />
            </div>
            <h2 className={styles.serviceTitle}>Reclutamiento</h2>
            <p className={styles.serviceDescription}>
            Reclutamiento y selección, niveles ejecutivos, especializados, operativos y fuerza de ventas.{" "}

            Cobertura nacional e internacional.  
            </p>
            <Link href="#" className={styles.readMoreLink}>
              Leer Más <ArrowRight className={styles.arrowIcon} />
            </Link>
          </div>

          {/* Service 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIconWrapper}>
              <FileText className={styles.serviceIcon} />
            </div>
            <h2 className={styles.serviceTitle}>Compensaciones y Beneficios</h2>
            <p className={styles.serviceDescription}>
Un plan de compensación adecuado a su empresa generará mejor nivel de satisfacción, motivación y permanencia en sus colaboradores.            </p>
            <Link href="#" className={styles.readMoreLink}>
            Leer Más  <ArrowRight className={styles.arrowIcon} />
            </Link>
          </div>

          {/* Service 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIconWrapper}>
              <Search className={styles.serviceIcon} />
            </div>
            <h2 className={styles.serviceTitle}>Revitalización Organizacional</h2>
            <p className={styles.serviceDescription}>
              Desarrolle una cultura organizacional que responda a las necesidades actuales de los colaboradores para afianzar su sentido de propósito y compromiso, al mismo tiempo que logra sus objetivos empresariales.
            </p>
            <Link href="#" className={styles.readMoreLink}>
            Leer Más  <ArrowRight className={styles.arrowIcon} />
            </Link>
          </div>

          {/* Service 4 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIconWrapper}>
              <BarChart className={styles.serviceIcon} />
            </div>
            <h2 className={styles.serviceTitle}>Diplomado en RH 2025</h2>
            <p className={styles.serviceDescription}>
            Te presentamos la tan esperada tercera edición del diplomado «Construyendo Organizaciones Altamente Competitivas y Profundamente Humanas», en una colaboración estratégica entre Praxis Asesores Corporativos, Instituto Desafío y nuestra querida casa, Talento 3.0.
            </p>
            <Link href="#" className={styles.readMoreLink}>
              Leer Más <ArrowRight className={styles.arrowIcon} />
            </Link>
          </div>

          {/* Service 5 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIconWrapper}>
              <Building className={styles.serviceIcon} />
            </div>
            <h2 className={styles.serviceTitle}>Indicadores Económicos</h2>
            <p className={styles.serviceDescription}>
            Inflación: 8.7% (2022), 4.7% (2023) <br />
    Tipo de Cambio: $19.77 (2022), $16.95 (2023) <br />
    Salario Mínimo: $172.87 (2022), $207.44 (2023)
            </p>
            <Link href="#" className={styles.readMoreLink}>
            Leer Más <ArrowRight className={styles.arrowIcon} />
            </Link>
          </div>

          {/* Service 6 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIconWrapper}>
              <Award className={styles.serviceIcon} />
            </div>
            <h2 className={styles.serviceTitle}>Automatización RH</h2>
            <p className={styles.serviceDescription}>
  Servicios Compartidos<br />
  Planeación de la fuerza de trabajo<br />
  Presupuesto RH <br />
  <a
    href="https://airtable.com/appipIF9NBTz3hhcB/pagVfArmdfMUVBs3v/form"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    Sistemas HCM
  </a>
</p>
            <Link href="#" className={styles.readMoreLink}>
            Leer Más  <ArrowRight className={styles.arrowIcon} />
            </Link>
          </div>

          
        </div>
      </div>
    </Layout>
  )
}
