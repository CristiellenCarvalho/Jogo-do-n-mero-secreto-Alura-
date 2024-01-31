let listaNumerosSorteados= [];
let quantidadeLimiteTentativas = 10;
let numeroSecreto = gerandoNumeroSecreto();
let tentativas = 1; 



function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} )
}

function exibirMensagemInicial() {
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p','Digite um número de 1 à 10');
}

function verificarChute(){ 
    let chute = document.querySelector('input').value;
    
    if(numeroSecreto == chute) {
        exibirTexto('h1','Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTexto('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else { 
        if(chute > numeroSecreto) {
            exibirTexto('p', 'O número é menor');
        } else{
            exibirTexto('p', 'O número é maior');
        }
        tentativas++;
        limpaCampo();
    }
    
}

exibirMensagemInicial();

function gerandoNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeLimiteTentativas + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if( quantidadeDeElementosNaLista == quantidadeLimiteTentativas) {
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerandoNumeroSecreto();
    } else { 
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limpaCampo(){
     chute = document.querySelector('input');
     chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerandoNumeroSecreto();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}