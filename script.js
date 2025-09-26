// ATENÇÃO: SUBSTITUA O TEXTO ABAIXO PELO NOME REAL DA PESSOA!
const NOME_SECRETO_CORRETO = "NOMEDAPESSOA"; // Ex: "ANA"
const MENSAGEM_FINAL_SUCESSO = "🎉 VOCÊ É A LUZ NO MEU PÔR DO SOL! Esta página inteira foi criada para celebrar a pessoa incrível que você é. Eu te amo! 🎉";
// --- FIM DA EDIÇÃO OBRIGATÓRIA ---

// 1. Lógica do Tema Dinâmico (Mantida)
function aplicarTemaPorHorario() {
    const agora = new Date();
    const hora = agora.getHours(); // Pega a hora atual (0 a 23)
    const body = document.body;
    
    body.classList.remove('tema-dia', 'tema-por-do-sol', 'tema-noite');

    if (hora >= 6 && hora < 17) {
        body.classList.add('tema-dia');
        
    } else if (hora >= 17 && hora < 19) {
        body.classList.add('tema-por-do-sol');
        
    } else {
        body.classList.add('tema-noite');
    }
}

// 2. Lógica da Rotação dos Cards de Poder (Nova!)
function flipCard(cardContainer) {
    cardContainer.classList.toggle('flipped');
}

// 3. Lógica de Validação do Nome (Mantida)
function validarNome() {
    const nomeDigitado = document.getElementById('nome-input').value.trim().toLowerCase();
    const nomeCorreto = NOME_SECRETO_CORRETO.trim().toLowerCase();
    const mensagemElemento = document.getElementById('mensagem-final');
    
    // Garante que a mensagem final apareça com a transição
    mensagemElemento.classList.add('revelado');

    if (nomeDigitado === nomeCorreto) {
        mensagemElemento.innerHTML = MENSAGEM_FINAL_SUCESSO;
        mensagemElemento.style.color = 'gold'; 
        
    } else {
        mensagemElemento.innerHTML = "O nome é um segredo guardado pelo pôr do sol. Tente novamente.";
        mensagemElemento.style.color = 'red'; 
    }
}

// Inicializa o tema ao carregar a página
document.addEventListener('DOMContentLoaded', aplicarTemaPorHorario);