"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook para obtener la ruta activa
import { Phone } from "lucide-react";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <div className={styles.logoCircle}>
              <div className={styles.logoInner}></div>
            </div>
            <span className={styles.logoText}>Talento 3.0</span>
          </div>
        </div>

        <nav className={styles.nav}>
  <Link
    href="/"
    className={pathname === "/" ? styles.navLinkActive : styles.navLink}
  >
    Inicio
  </Link>
  <Link
    href="/about"
    className={pathname === "/about" ? styles.navLinkActive : styles.navLink}
  >
    Nosotros
  </Link>

  {/* Dropdown Menu for Soluciones RRHH */}
  <div className={styles.dropdown}>
    <button className={styles.dropdownButton}>
      Soluciones RRHH <span className={styles.dropdownArrow}></span>
    </button>
    <div className={styles.dropdownMenu}>
      <Link href="/reclutamiento" className={styles.dropdownItem}>
        Reclutamiento
      </Link>
      
      <Link href="/tecnologia" className={styles.dropdownItem}>
        Tecnología
      </Link>

      <Link href="/chat-empleo" className={styles.dropdownItem}>
        Chat Empleo
      </Link>
    </div>
  </div>

  <Link
    href="/events"
    className={pathname === "/events" ? styles.navLinkActive : styles.navLink}
  >
    Eventos
  </Link>
  <Link
    href="/blog"
    className={pathname === "/blog" ? styles.navLinkActive : styles.navLink}
  >
    Blog
  </Link>
  <Link
    href="/store"
    className={pathname === "/store" ? styles.navLinkActive : styles.navLink}
  >
    Tienda
  </Link>
</nav>

        <div className={styles.contactInfo}>
          <Phone className={styles.phoneIcon} />
          <div className={styles.contactText}>
            <p className={styles.contactLabel}>Contacto</p>
            <p className={styles.contactNumber}>(800) 00 106 89</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          {/* Logo and Slogan */}
          <div className={styles.footerLogo}>
            <div className={styles.logoCircle}></div>
            <span className={styles.logoTextFooter}>Talento 3.0</span>
          </div>
          <p className={styles.footerSlogan}>Impulsando el talento hacia el éxito</p>

          {/* Social Media Links */}
          <div className={styles.footerSocials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
Facebook            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
LinkedIn            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
Instagram            </a>
          </div>

          {/* Privacy Statement */}
          <p className={styles.footerPrivacy}>
            <a href="/privacy-policy" className={styles.privacyLink}>Política de Privacidad</a>
          </p>
        </div>
      </footer>
    </div>
  );
}