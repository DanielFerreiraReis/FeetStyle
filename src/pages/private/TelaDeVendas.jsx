import React from "react";
import BarraSuperior from "../../components/PaginaVendas/BarraSuperior";
import ProdutoView from "../../components/PaginaVendas/ProdutoView";
import ProdutoInputs from "../../components/PaginaVendas/ProdutoInputs";
import TabelaItens from "../../components/PaginaVendas/TabelaItens";

import styles from "../../styles/TelaVendas.module.css";

const TelaDeVendas = () => {
  return (
    <div className={styles.tela}>
      <BarraSuperior />

      <div className={styles.conteudo}>
        <ProdutoView />
        <ProdutoInputs />

        <div className={styles.secaoDireita}>
          <TabelaItens />
        </div>
      </div>

    </div>
  );
};

export default TelaDeVendas;
