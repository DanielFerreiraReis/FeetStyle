import { FaShoePrints } from "react-icons/fa";
import styles from "../../css/Home.module.css";
import { Link, Navigate } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <div className={styles.logoSection}>
          <FaShoePrints className={styles.logoIcon} />
          <h1 className={styles.homeTitle}>FeetStyle</h1>
        </div>

        <p className={styles.homeSubtitle}>
          Bem-vindo ao <strong>FeetStyle</strong> — um sistema logístico desenvolvido
          para gerenciar o estoque, as vendas e o controle administrativo de uma loja
          de sapatos.
        </p>

        <div className={styles.aboutCard}>
          <h2>Sobre o Projeto</h2>
          <p>
            Projeto criado para atender ao recurso da disciplina
            <strong> Programação Web</strong> do curso Técnico em Informática do
            <strong> IFPA Campus Tucuruí</strong>.
          </p>
          <p>
            O objetivo é aplicar conceitos de desenvolvimento web e design responsivo,
            simulando uma aplicação real utilizada em lojas do setor de varejo.
          </p>
        </div>

        <Link to="/login">
            <button className={styles.button}> Navegar no Sistema </button>
        </Link>
        

        <footer className={styles.footer}>
          © {new Date().getFullYear()} FeetStyle — IFPA Tucuruí
        </footer>
      </div>
    </div>
  );
}

export default Home;