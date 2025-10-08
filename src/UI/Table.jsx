const Tabela = () => {
    return(
        <div class="inventario">
          <h3>Itens</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>PRODUTO</th>
                <th>QUANTIDADE</th>
                <th>VALOR UNITÁRIO R$</th>
                <th>SUBTOTAL R$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Camisa</td>
                <td>2</td>
                <td>50.00</td>
                <td>100.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Calça</td>
                <td>1</td>
                <td>80.00</td>
                <td>80.00</td>
              </tr>
            </tbody>
          </table>
        </div>
    );
}

export default Tabela;