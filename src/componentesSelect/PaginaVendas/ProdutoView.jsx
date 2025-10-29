import React from "react";

const ProdutoView = () => {
  return (
    <div className="produto-view">
      <div className="foto-produto">
        <img src="/assets/camisa.webp" alt="Imagem do Produto" />
      </div>

      <div className="dados-produto">
        {/* Campos de informações futuramente ligados ao banco */}
        <div className="campo-placeholder">
          <p style={{ color: "white" }}>
            Dados do produto aparecerão aqui...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProdutoView;
