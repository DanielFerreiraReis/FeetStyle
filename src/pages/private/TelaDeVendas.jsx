import React from "react";
import BarraSuperior from "../../components/PaginaVendas/BarraSuperior";
import ProdutoView from "../../components/PaginaVendas/ProdutoView";
import ProdutoInputs from "../../components/PaginaVendas/ProdutoInputs";
import TabelaItens from "../../components/PaginaVendas/TabelaItens";
import styles from "../../styles/TelaVendas.module.css";


const TelaDeVendas = () => {
  return (
  <div className={styles.container}>

    {/* Coluna esquerda */}
    <div className={styles.leftColumn}>
      <ProdutoView />

      {/* Tabela abaixo da imagem */}
      <TabelaItens />

      {/* Botões abaixo da tabela */}
      <div className={styles.actionButtons}>
        <button className={styles.payButton}>Pagamento</button>
        <button className={styles.deleteButton}>Excluir</button>
      </div>
    </div>

    {/* Coluna direita */}
    <div className={styles.rightColumn}>
      <ProdutoInputs />
    </div>

  </div>
);
};

export default TelaDeVendas;
