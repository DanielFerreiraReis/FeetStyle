import React, { useState, useEffect } from "react";
import styles from "./ProdutoInputs.module.css";

// Simulação do banco de dados (por enquanto)
  const bancoSimulado = [
    {
      id: "101",
      descricao: "Camiseta Algodão",
      cor: "Azul",
      tamanho: "M",
      genero: "Unissex",
      valor: 59.9
    }
  ];

const ProdutoInputs = () => {
  const [codigoProduto, setCodigoProduto] = useState("");
  const [dadosProduto, setDadosProduto] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
 
  useEffect(() => {
    if (codigoProduto.trim() === "") {
      setDadosProduto(null);
      return;
    }

    const produto = bancoSimulado.find(
      (p) => p.id === codigoProduto.trim()
    );

    if (!produto) {
      setDadosProduto(null);
      
      return;
    }

    setDadosProduto(produto);
  }, [codigoProduto]);

  const totalItem = dadosProduto 
    ? (quantidade * dadosProduto.valor).toFixed(2).replace('.', ',') 
    : "0,00";


  return (
    <div className={styles.container}>
      <div className={styles.gridInputs}>
        
        <div className={styles.campo}>
          <label>Código da Venda</label>
          <input type="text" disabled value="000123" />
        </div>

        <div className={styles.campo}>
          <label>Cor</label>
          <input
            type="text"
            disabled
            value={dadosProduto?.cor || ""} />
        </div>

        <div className={styles.campo}>
          <label>Tamanho</label>
          <input
            type="text"
            disabled
            value={dadosProduto?.tamanho || ""} />
        </div>

        <div className={styles.campo}>
          <label>Gênero</label>
          <input
            type="text"
            disabled
            value={dadosProduto?.genero || ""} />
        </div>

        <div className={styles.campo}>
          <label>Valor Unit. R$</label>
          <input
            type="text"
            disabled
            value={dadosProduto?.valor || ""} />
        </div>

        <div className={styles.campo}>
          <label>Total Item R$</label>
          <input type="text" disabled value={totalItem} />
        </div>
      </div>

      {/* Entrada abaixo (quantidade) */}
      <div className={styles.campo}>
        <label>Quantidade</label>
        <input
          type="number"
          min="1"
          value={quantidade}
          disabled={!dadosProduto}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            setQuantidade(isNaN(val) ? 1 : Math.max(1, val));
          }}
        />
      </div>

      {/* Código do produto */}
      <div className={styles.campo}>
        <label>Código do Produto</label>
        <input
          type="text"
          value={codigoProduto}
          onChange={(e) => setCodigoProduto(e.target.value)}
        />
      </div>

      <button
        className={styles.btnCarrinho}
        disabled={!dadosProduto}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProdutoInputs;
