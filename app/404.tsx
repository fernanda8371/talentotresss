import Link from "next/link";
import styles from "./error.module.css";
import Layout from "@/components/layout/layout";

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>404 - Página no encontrada</h1>
        <p className={styles.description}>
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link href="/" className={styles.homeButton}>
          Volver al Inicio
        </Link>
      </div>
    </Layout>
  );
}