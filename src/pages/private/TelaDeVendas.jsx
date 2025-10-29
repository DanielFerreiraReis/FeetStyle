import React from "react";
import BarraSuperior from "../../componentesSelect/PaginaVendas/BarraSuperior";
import BarraInferior from "../../componentesSelect/PaginaVendas/BarraInferior";
import ProdutoView from "../../componentesSelect/PaginaVendas/ProdutoView";
import TabelaItens from "../../componentesSelect/PaginaVendas/TabelaItens";
import "../../css/TelaVendas.css";

const TelaDeVendas = () => {
  return (
    <div className="tela">
      <BarraSuperior />
      <div className="conteudo">
        <ProdutoView />
        <TabelaItens />
        <BarraInferior />
      </div>
    </div>
  );
};

export default TelaDeVendas;

