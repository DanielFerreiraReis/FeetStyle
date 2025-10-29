import React from "react";
import styles from "./BarraInferior.module.css";

const BarraInferior = () => {
  return (
    <footer className={styles.container}>
      <button className={styles.botaoRegistrar}>Registrar</button>
    </footer>
  );
};

export default BarraInferior;
