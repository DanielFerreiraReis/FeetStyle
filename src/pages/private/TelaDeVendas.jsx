import BarraSuperior from "../../components/PaginaVendas/BarraSuperior";
import BarraInferior from "../../components/PaginaVendas/BarraInferior";
import ProdutoView from "../../components/PaginaVendas/ProdutoView";
import TabelaItens from "../../components/PaginaVendas/TabelaItens";
import "../../styles/css/TelaVendas.css";

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

