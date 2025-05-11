"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import styles from "./about.module.css";
import Layout from "@/components/layout/layout";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <Layout>
      <div className={styles.container}>
        {/* About Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <div className={styles.badgeDot}></div>
            <span>¿Quiénes Somos?</span>
          </div>

          <h1 className={styles.title}>
            Gestión
            <div className={styles.titleUnderline}></div>
            Inteligente
          </h1>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            {/* Tabs */}
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${
                  activeTab === "mission" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("mission")}
              >
                Misión
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "vision" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("vision")}
              >
                Visión
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "values" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("values")}
              >
                Valores
              </button>
            </div>

            {/* Tab Content */}
            <div className={styles.tabContent}>
              {activeTab === "mission" && (
                <div className={styles.missionContent}>
                  <p className={styles.missionText}>
                    Nuestra misión es crear el mejor servicio, no procesar datos
                    innecesarios, utilizar el negocio para inspirar e
                    implementar soluciones para el problema de empleabilidad.
                  </p>
                  <div className={styles.ctaWrapper}>
                    <Link href="#" className={styles.ctaButton}>
                      Obtener una cotización
                      <div className={styles.buttonIcon}>
                        <ArrowRight className={styles.arrowIcon} />
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div className={styles.visionContent}>
                  <p className={styles.visionText}>
                    Queremos ser la empresa de reclutamiento líder en México, por
                    la rapidez de respuesta y satisfacción de nuestros clientes.
                  </p>
                  <div className={styles.ctaWrapper}>
                    <Link href="#" className={styles.ctaButton}>
                      Contáctanos
                      <div className={styles.buttonIcon}>
                        <ArrowRight className={styles.arrowIcon} />
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className={styles.valuesContent}>
                  <p className={styles.valuesText}>
                    Nuestros valores son la rapidez, la innovación y el
                    compromiso con nuestros clientes, asegurando siempre un
                    servicio de calidad.
                  </p>
                  <div className={styles.ctaWrapper}>
                    <Link href="#" className={styles.ctaButton}>
                      Aprende más
                      <div className={styles.buttonIcon}>
                        <ArrowRight className={styles.arrowIcon} />
                      </div>
                    </Link>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column - Team Image */}
          <div className={styles.rightColumn}>
            <div className={styles.teamImageWrapper}>
              <Image
                src="/team.png"
                alt="Business Team"
                width={400}
                height={600}
                className={styles.teamImage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}