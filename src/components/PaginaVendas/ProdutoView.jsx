import React from "react";

const ProdutoView = () => {
  return (
    <div className="produto-view">

      {/* Imagem do produto */}
      <div className="foto-produto">
        <img src="/assets/camisa.webp" alt="Imagem do Produto" />
      </div>

      {/* Informações do produto */}
      <div className="dados-produto">

        {/* Código do Produto */}
        <div className="caixa">
          <div className="titulo-caixa">CÓDIGO DO PRODUTO (ID)</div>
          <div className="conteudo-caixa">
            <input type="number" placeholder="Ex: 15" />
          </div>
        </div>

        {/* Nome do Produto */}
        <div className="caixa">
          <div className="titulo-caixa">NOME DO PRODUTO</div>
          <div className="conteudo-caixa">
            <input type="text" disabled placeholder="Modelo retornado do BD" />
          </div>
        </div>

        {/* Tamanho */}
        <div className="caixa">
          <div className="titulo-caixa">TAMANHO</div>
          <div className="conteudo-caixa">
            <input type="text" disabled />
          </div>
        </div>

        {/* Gênero */}
        <div className="caixa">
          <div className="titulo-caixa">GÊNERO</div>
          <div className="conteudo-caixa">
            <input type="text" disabled />
          </div>
        </div>

        {/* Cor */}
        <div className="caixa">
          <div className="titulo-caixa">COR</div>
          <div className="conteudo-caixa">
            <input type="text" disabled />
          </div>
        </div>

        {/* Preço Unitário */}
        <div className="caixa">
          <div className="titulo-caixa">VALOR UNITÁRIO R$</div>
          <div className="conteudo-caixa">
            <input type="number" disabled />
          </div>
        </div>

        {/* Quantidade */}
        <div className="caixa">
          <div className="titulo-caixa">QUANTIDADE</div>
          <div className="conteudo-caixa">
            <input type="number" min="1" placeholder="1" />
          </div>
        </div>

        {/* Subtotal */}
        <div className="caixa">
          <div className="titulo-caixa">SUBTOTAL R$</div>
          <div className="conteudo-caixa">
            <input type="number" disabled />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProdutoView;
