import React from "react";
import styles from "./TabelaItens.module.css";

const TabelaItens = () => {
  return (
    <div className={styles.container}>
      <h3>Itens da venda</h3>

      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Valor Unitário R$</th>
            <th>Subtotal R$</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan={5} className={styles.vazio}>
              Nenhum item adicionado
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaItens;
