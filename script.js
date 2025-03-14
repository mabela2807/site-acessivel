document.addEventListener('DOMContentLoaded', function() {
const aumentaFonteBotao = document.getElementById ('aumentar-fonte'); 
const diminuirFonteBotao = document.getElementById ('diminuir-fonte');
const BotaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

BotaoDeAcessibilidade.addEventListener('click', Function (){
BotaoDeAcessibilidade.classList.toggle('rotacao-botao');
opcoesDeAcessibilidade.classList.toggle(apresenta-Lista);
});

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        
        
    }); 
    diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

     });
});