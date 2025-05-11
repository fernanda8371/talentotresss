import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Search, Briefcase, FileText } from "lucide-react"
import styles from "./home.module.css"
import Layout from "@/components/layout/layout"

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Left Column */}
            <div className={styles.heroContent}>
              {/* <div className={styles.badge}>
                <div className={styles.badgeDot}></div>
                <span>Professional Consulting</span>
              </div> */}

              <h1 className={styles.heroTitle}>
              Diagnóstico de <br />
                <span className={styles.accentText}>Efectividad</span>{" "}
                <span className={styles.teamWrapper}>
                  <span className={styles.teamText}>Organizacional</span>
                  <span className={styles.teamAvatars}>

                  </span>
                </span>
              </h1>

              <p className={styles.heroSubtitle}>
               Herramienta para revitalización y
                <br />
                mejora continua
              </p>

              <div className={styles.ctaButtons}>
                <Link href="#" className={styles.primaryButton}>
                  Más Información
                  <div className={styles.buttonIcon}>
                    <ArrowRight className={styles.arrowIcon} />
                  </div>
                </Link>

                <Link href="#" className={styles.secondaryButton}>
                  Explora Nuestros Servicios
                  <div className={styles.secondaryButtonIcon}>
                    <ArrowRight className={styles.arrowIcon} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className={styles.statsGrid}>
              {/* Growth Stat */}
              <div className={styles.statCard}>
                <div className={styles.statTitle}>+87.3%</div>
                <div className={styles.statSubtitle}>Crecimeinto en la última semana</div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: "52.35%" }}></div>
                </div>
                <div className={styles.progressText}>52.35% de incremento</div>
              </div>

              {/* Reach Stat */}
              <div className={styles.statCard}>
                <div className={styles.reachHeader}>
                  <div className={styles.checkIcon}>
                    <Check className={styles.checkMark} />
                  </div>
                  <div className={styles.reachStats}>
                    <div className={styles.statTitle}>+77.5%</div>
                    <div className={styles.statSubtitle}>Alcance</div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: "32.5%" }}></div>
                </div>
                <div className={styles.progressText}>32.5%</div>
              </div>

              {/* Team Members */}
              <div className={styles.statCard}>
                <div className={styles.teamTitle}>Nuestro Equipo</div>
                <div className={styles.teamList}>
                  <div className={styles.teamMember}>
                    <div className={styles.memberInitial}>C</div>
                    <div className={styles.memberInfo}>
                      <div className={styles.memberName}>Carlos Vásquez</div>
                      <div className={styles.memberRole}>Project Manager</div>
                    </div>
                  </div>
                  <div className={styles.teamMember}>
                    <div className={styles.memberInitial}>G</div>
                    <div className={styles.memberInfo}>
                      <div className={styles.memberName}>Geidy Carrasco</div>
                      <div className={styles.memberRole}>Business Analyst</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Sales Tracker */}
              <div className={styles.statCard}>
                <div className={styles.chartTitle}>Seguimiento de negocio</div>
                <div className={styles.chartContainer}>
                  <div className={styles.chartColumn}>
                    <div className={styles.chartBar} style={{ height: "31%" }}></div>
                    <div className={styles.chartLabel}>2021</div>
                  </div>
                  <div className={styles.chartColumn}>
                    <div className={styles.chartBar} style={{ height: "50%" }}></div>
                    <div className={styles.chartLabel}>2022</div>
                  </div>
                  <div className={styles.chartColumn}>
                    <div className={styles.chartBar} style={{ height: "75%" }}></div>
                    <div className={styles.chartLabel}>2023</div>
                  </div>
                  <div className={styles.chartColumn}>
                    <div className={`${styles.chartBar} ${styles.activeBar}`} style={{ height: "100%" }}></div>
                    <div className={styles.chartLabel}>2024</div>
                  </div>
                </div>
                <div className={styles.chartValues}>
                  <div className={styles.chartValue}>60k</div>
                  <div className={styles.chartValue}>40k</div>
                  <div className={styles.chartValue}>20k</div>
                  <div className={styles.chartValue}>10k</div>
                  <div className={styles.chartValue}>5k</div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos */}
{/* Contact Information Row */}
<div className={styles.contactRow}>
  <div className={styles.contactColumn}>
    <h3 className={styles.contactTitle}>Correo Electrónico</h3>
    <p className={styles.contactText}>contacto@talento3.com</p>
  </div>
  <div className={styles.contactColumn}>
    <h3 className={styles.contactTitle}>Servicio al Cliente</h3>
    <p className={styles.contactText}>(800) 00 106 89</p>
  </div>
  <div className={styles.contactColumn}>
    <h3 className={styles.contactTitle}>Ubicación</h3>
    <p className={styles.contactText}>Zona Norte: Monterrey</p>
  </div>
</div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
        {/* <h2 className={styles.servicesTitle}>Soluciones Empresariales</h2> */}

          <div className={styles.servicesGrid}>
            {/* Service Card 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceContent}>
 
                <h3 className={styles.serviceTitle}>Reclutamiento y
                Selección de Personal</h3>
                <p className={styles.serviceDescription}>
                Integramos análisis científico, experiencia práctica y conocimientos de cada sector para contratar profesionales de todos los niveles y funciones para nuestros clientes.                </p>
                <Link href="#" className={styles.serviceLink}>
                  Ver Más
                  <ArrowRight className={styles.serviceLinkIcon} />
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceContent}>
   
                <h3 className={styles.serviceTitle}>Estrategia en
                Capital Humano</h3>
                <p className={styles.serviceDescription}>
                Traducimos la visión empresarial en iniciativas de recursos humanos que mejoren el rendimiento, rentabilidad, crecimiento y compromiso de los empleados.                </p>
                <Link href="#" className={styles.serviceLink}>
                  Ver Más
                  <ArrowRight className={styles.serviceLinkIcon} />
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceContent}>
   
                <h3 className={styles.serviceTitle}>Diplomado en
                Recursos Humanos</h3>
                <p className={styles.serviceDescription}>
                Actualización ejecutiva en temas de Capital Humano. Fortaleciendo las habilidades con una perspectiva humanista, desarrollando competencias de estrategia, finanzas, operaciones, talento y mercado. Para ello, se profundizará en temas de actualidad y se utilizará el modelo de casos, experiencias y aplicaciones prácticas.                </p>
                <Link href="#" className={styles.serviceLink}>
                  Ver Más
                  <ArrowRight className={styles.serviceLinkIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Soluciones Destacadas Section */}
<section className={styles.featuredSolutionsSection}>
  <div className={styles.featuredSolutionsContainer}>
    <h2 className={styles.featuredSolutionsTitle}>Soluciones Destacadas</h2>
    <div className={styles.featuredSolutionsGrid}>
      {/* Card 1 */}
      <div className={styles.featuredSolutionCard}>
        <h3 className={styles.featuredSolutionTitle}>Gestión del Talento</h3>
        <p className={styles.featuredSolutionDescription}>
          Ayudamos a las empresas a identificar, desarrollar y retener el mejor talento para alcanzar sus objetivos estratégicos.
        </p>
      </div>
      {/* Card 2 */}
      <div className={styles.featuredSolutionCard}>
        <h3 className={styles.featuredSolutionTitle}>Capacitación Ejecutiva</h3>
        <p className={styles.featuredSolutionDescription}>
          Diseñamos programas de capacitación personalizados para líderes y equipos de alto rendimiento.
        </p>
      </div>
      {/* Card 3 */}
      <div className={styles.featuredSolutionCard}>
        <h3 className={styles.featuredSolutionTitle}>Consultoría Organizacional</h3>
        <p className={styles.featuredSolutionDescription}>
          Ofrecemos soluciones para optimizar procesos, estructuras y estrategias organizacionales.
        </p>
      </div>
      {/* Card 4 */}
      <div className={styles.featuredSolutionCard}>
        <h3 className={styles.featuredSolutionTitle}>Evaluación de Desempeño</h3>
        <p className={styles.featuredSolutionDescription}>
          Implementamos sistemas de evaluación para medir y mejorar el desempeño de los empleados.
        </p>
      </div>
      {/* Card 5 */}
      <div className={styles.featuredSolutionCard}>
        <h3 className={styles.featuredSolutionTitle}>Planeación Estratégica</h3>
        <p className={styles.featuredSolutionDescription}>
          Ayudamos a las empresas a definir y ejecutar estrategias para el crecimiento sostenible.
        </p>
      </div>
      {/* Card 6 */}
      <div className={styles.featuredSolutionCard}>
        <h3 className={styles.featuredSolutionTitle}>Transformación Digital</h3>
        <p className={styles.featuredSolutionDescription}>
          Apoyamos a las organizaciones en su transición hacia tecnologías digitales para mejorar la eficiencia.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Desarrollo de Liderazgo Section */}
<section className={styles.leadershipBanner}>
  <div className={styles.leadershipContainer}>
    <h2 className={styles.leadershipTitle}>Desarrollo de Liderazgo</h2>
    <p className={styles.leadershipText}>
    Los grandes líderes nacen, pero también pueden hacerse. El desarrollo de liderazgo efectivo ayuda a las organizaciones a que comprometan a su personal, liberen el potencial y experimenten un crecimiento sin precedentes.    </p>
    <Link href="#" className={styles.leadershipButton}>
      Conoce Tu Estilo De Liderazgo
    </Link>
  </div>
</section>
    </Layout>
  )
}
