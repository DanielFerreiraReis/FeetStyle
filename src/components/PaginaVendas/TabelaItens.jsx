import React from "react";
import styles from "./TabelaItens.module.css";

const TabelaItens = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Itens da venda</h3>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
              <th>Qtd</th>
              <th>Val.Unit</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className={styles.empty}>Nenhum item adicionado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaItens;
