const Card = ({titulo = "conteudo"}) => {
    return(
        <div class="caixa">
            <div class="titulo-caixa">{titulo}</div>
            <div class="conteudo-caixa"><input type="number" /></div>
        </div>
    );
}