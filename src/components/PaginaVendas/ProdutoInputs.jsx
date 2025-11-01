// import React, { useState, useEffect } from "react";
// import styles from "../../styles/ProdutoInputs.module.css";

// const bancoSimulado = [
//   {
//     id: "101",
//     descricao: "Camiseta Algodão",
//     cor: "Azul",
//     tamanho: "M",
//     genero: "Unissex",
//     valor: 59.9,
//   },
// ];

// const ProdutoInputs = ({ onAdicionarCarrinho }) => {
//   const [codigoProduto, setCodigoProduto] = useState("");
//   const [dadosProduto, setDadosProduto] = useState(null);
//   const [quantidade, setQuantidade] = useState(1);

//   useEffect(() => {
//     if (codigoProduto.trim() === "") {
//       setDadosProduto(null);
//       return;
//     }

//     const produto = bancoSimulado.find((p) => p.id === codigoProduto.trim());
//     setDadosProduto(produto || null);
//   }, [codigoProduto]);

//   const totalItem = dadosProduto
//     ? (quantidade * dadosProduto.valor).toFixed(2).replace(".", ",")
//     : "0,00";

//   const handleAdicionarCarrinho = () => {
//     if (dadosProduto) {
//       const item = {
//         ...dadosProduto,
//         quantidade,
//         total: parseFloat(totalItem.replace(",", ".")),
//       };
//       onAdicionarCarrinho?.(item);
//       // Reset form
//       setCodigoProduto("");
//       setQuantidade(1);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Detalhes do Produto</h2>

//       <div className={styles.formGrid}>
//         <div className={styles.formGroup}>
//           <label>Código da Venda</label>
//           <input type="text" disabled value="000123" />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Código do Produto</label>
//           <input
//             type="text"
//             value={codigoProduto}
//             onChange={(e) => setCodigoProduto(e.target.value)}
//             placeholder="Ex: 101"
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Descrição</label>
//           <input
//             type="text"
//             disabled
//             value={dadosProduto?.descricao || ""}
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Cor</label>
//           <input type="text" disabled value={dadosProduto?.cor || ""} />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Tamanho</label>
//           <input type="text" disabled value={dadosProduto?.tamanho || ""} />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Gênero</label>
//           <input type="text" disabled value={dadosProduto?.genero || ""} />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Valor Unit. (R$)</label>
//           <input
//             type="text"
//             disabled
//             value={dadosProduto?.valor?.toFixed(2).replace(".", ",") || ""}
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Quantidade</label>
//           <input
//             type="number"
//             min="1"
//             value={quantidade}
//             disabled={!dadosProduto}
//             onChange={(e) => {
//               const val = parseInt(e.target.value, 10);
//               setQuantidade(isNaN(val) ? 1 : Math.max(1, val));
//             }}
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Total Item (R$)</label>
//           <input type="text" disabled value={totalItem} />
//         </div>
//       </div>

//       <button
//         className={styles.addCartButton}
//         disabled={!dadosProduto}
//         onClick={handleAdicionarCarrinho}
//       >
//         Adicionar ao Carrinho
//       </button>
//     </div>
//   );
// };

// export default ProdutoInputs;
