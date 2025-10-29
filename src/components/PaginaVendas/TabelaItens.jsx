import React from "react";

const TabelaItens = () => {
  return (
    <div className="inventario">
      <h3>Itens da Venda</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Valor Unitário</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {/* Temporário */}
          <tr>
            <td colSpan="5">Nenhum item adicionado</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaItens;
