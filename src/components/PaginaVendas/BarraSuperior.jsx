import React from "react";
import styles from "./BarraSuperior.module.css";

const BarraSuperior = () => {
  return (
    <header className={styles.container}>
      <img src="/assets/logomarca.png" alt="Logo" className={styles.logo} />
      <button className={styles.botaoVoltar}>Voltar</button>
    </header>
  );
};

export default BarraSuperior;
