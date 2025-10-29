import React from "react";
import BarraSuperior from "../../components/PaginaVendas/BarraSuperior";
import BarraInferior from "../../components/PaginaVendas/BarraInferior";
import ProdutoView from "../../components/PaginaVendas/ProdutoView";
import TabelaItens from "../../components/PaginaVendas/TabelaItens";

import styles from "../../styles/css/TelaVendas.module.css";

const TelaDeVendas = () => {
  return (
    <div className={styles.tela}>
      <BarraSuperior />

      <div className={styles.conteudo}>
        <ProdutoView />

        <div className={styles.secaoDireita}>
          <TabelaItens />
        </div>
      </div>

      <BarraInferior />
    </div>
  );
};

export default TelaDeVendas;
