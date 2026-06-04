<<<<<<< HEAD
// h1 = título principal da página. é pra selecionar só o h1
//let titulo = document.querySelector ('h1');
// innerHTML = Dentro do HTML
//titulo.innerHTML = 'Jogo do número secreto';
// significa, selecionar só o paragrafo do html 
//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10'
let listaDeNumerosSorteados = [];
let numeroLimite = 10; 
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial () {
exibirTextoNaTela ('h1', 'Jogo do número secreto');
exibirTextoNaTela ('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial (); 

function gerarNumeroAleatorio () {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
        // Vai verificar se o número escolhido foi repetido ou não
        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 

            if (quantidadeDeElementosNaLista == numeroLimite) {
                listaDeNumerosSorteados = []
            }
            
        return gerarNumeroAleatorio ();
        }
else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido; 
     }

}

function verificarChute () {
    let chute = document.querySelector ('input').value;
    console.log (chute == numeroSecreto);  // chute vai ser o número que o usuário vai inserir. Número secreto é igual ao número aleatório que vai ser gerado com * 10 + 1
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Parabéns!');
        let palavraTentativa = numeroSecreto > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Voce acertou com ${tentativas} tentativas`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
}

else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'O número secreto é menor...');
} else {
        exibirTextoNaTela ('p', 'O número secreto é maior...');
}
    tentativas++; // tentativas = tentativas +1
    limparCampo ();
}
}

function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    tentativas = 1; 
    limparCampo ();
    exibirMensagemInicial (); 
    document.getElementById ('reiniciar').setAttribute ('disabled', true);
=======
// h1 = título principal da página. é pra selecionar só o h1
//let titulo = document.querySelector ('h1');
// innerHTML = Dentro do HTML
//titulo.innerHTML = 'Jogo do número secreto';
// significa, selecionar só o paragrafo do html 
//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10'
let listaDeNumerosSorteados = [];
let numeroLimite = 10; 
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial () {
exibirTextoNaTela ('h1', 'Jogo do número secreto');
exibirTextoNaTela ('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial (); 

function gerarNumeroAleatorio () {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
        // Vai verificar se o número escolhido foi repetido ou não
        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 

            if (quantidadeDeElementosNaLista == numeroLimite) {
                listaDeNumerosSorteados = []
            }
            
        return gerarNumeroAleatorio ();
        }
else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido; 
     }

}

function verificarChute () {
    let chute = document.querySelector ('input').value;
    console.log (chute == numeroSecreto);  // chute vai ser o número que o usuário vai inserir. Número secreto é igual ao número aleatório que vai ser gerado com * 10 + 1
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Parabéns!');
        let palavraTentativa = numeroSecreto > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Voce acertou com ${tentativas} tentativas`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
}

else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'O número secreto é menor...');
} else {
        exibirTextoNaTela ('p', 'O número secreto é maior...');
}
    tentativas++; // tentativas = tentativas +1
    limparCampo ();
}
}

function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    tentativas = 1; 
    limparCampo ();
    exibirMensagemInicial (); 
    document.getElementById ('reiniciar').setAttribute ('disabled', true);
>>>>>>> 57538248d29b45b5967dc9bbf4518a480e206821
}