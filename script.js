// ATENÇÃO: SUBSTITUA O TEXTO ABAIXO PELO NOME REAL DA PESSOA!
const NOME_SECRETO_CORRETO = "NOMEDAPESSOA"; // Ex: "ANA"
const MENSAGEM_FINAL_SUCESSO = "🎉 VOCÊ É A LUZ NO MEU PÔR DO SOL! Esta página inteira foi criada para celebrar a pessoa incrível que você é. Eu te amo! 🎉";
// --- FIM DA EDIÇÃO OBRIGATÓRIA ---

// 1. Lógica do Tema Dinâmico
function aplicarTemaPorHorario() {
    const agora = new Date();
    const hora = agora.getHours(); // Pega a hora atual (0 a 23)
    const body = document.body;
    
    // Remove qualquer classe de tema anterior
    body.classList.remove('tema-dia', 'tema-por-do-sol', 'tema-noite');

    if (hora >= 6 && hora < 17) {
        // Dia: 6h às 16h59 (Tema Dia)
        body.classList.add('tema-dia');
        
    } else if (hora >= 17 && hora < 19) {
        // Pôr do Sol: 17h às 18h59 (Tema Pôr do Sol)
        body.classList.add('tema-por-do-sol');
        
    } else {
        // Noite: 19h às 5h59 (Tema Noite)
        body.classList.add('tema-noite');
    }
}

// 2. Lógica da Revelação Suave dos Elogios (Card de Poderes)
function revelarElogio(elementoCard) {
    // Encontra o parágrafo do elogio secreto dentro do item clicado
    const elogio = elementoCard.querySelector('.elogio-secreto');
    
    // Alterna a classe 'revelado', ativando a transição CSS
    elogio.classList.toggle('revelado'); 
}

// 3. Lógica de Validação do Nome (Card Mistério)
function validarNome() {
    // Pega o nome digitado, remove espaços e converte para minúsculas
    const nomeDigitado = document.getElementById('nome-input').value.trim().toLowerCase();
    const nomeCorreto = NOME_SECRETO_CORRETO.trim().toLowerCase();
    const mensagemElemento = document.getElementById('mensagem-final');
    
    // Garante que a mensagem final apareça com a transição
    mensagemElemento.classList.add('revelado');

    if (nomeDigitado === nomeCorreto) {
        // Sucesso: revela a mensagem final
        mensagemElemento.innerHTML = MENSAGEM_FINAL_SUCESSO;
        mensagemElemento.style.color = 'gold'; 
        
    } else {
        // Fracasso: mantém o mistério
        mensagemElemento.innerHTML = "O nome é um segredo guardado pelo pôr do sol. Tente novamente.";
        mensagemElemento.style.color = 'red'; 
    }
}

// Inicializa o tema ao carregar a página
document.addEventListener('DOMContentLoaded', aplicarTemaPorHorario);
