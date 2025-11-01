// import React from "react";
// import styles from "../../styles/TabelaItens.module.css";

// const TabelaItens = ({ itens = [] }) => {
//   const total = itens.reduce((acc, item) => acc + item.total, 0);

//   return (
//     <div className={styles.container}>
//       <h3 className={styles.title}>Itens da Venda</h3>

//       <div className={styles.tableWrap}>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Código</th>
//               <th>Descrição</th>
//               <th>Qtd</th>
//               <th>Val.Unit</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {itens.length === 0 ? (
//               <tr>
//                 <td colSpan={5} className={styles.empty}>
//                   Nenhum item adicionado
//                 </td>
//               </tr>
//             ) : (
//               itens.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.id}</td>
//                   <td>{item.descricao}</td>
//                   <td>{item.quantidade}</td>
//                   <td>R$ {item.valor.toFixed(2).replace(".", ",")}</td>
//                   <td>R$ {item.total.toFixed(2).replace(".", ",")}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {itens.length > 0 && (
//         <div className={styles.summary}>
//           <strong>Total Geral:</strong>
//           <span>R$ {total.toFixed(2).replace(".", ",")}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TabelaItens;
