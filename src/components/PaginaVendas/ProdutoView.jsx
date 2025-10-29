import React from "react";
import styles from "./ProdutoView.module.css";

const ProdutoView = () => {
  return (
    <div className={styles.card}>
      <img
        src="/assets/camisa.webp"
        alt="Produto"
        className={styles.imagemProduto}
      />
    </div>
  );
};

export default ProdutoView;
