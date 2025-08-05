// Seleciona os elementos do HTML usando seus IDs
const generatePassWordButton = document.querySelector("#generate-password");
const generatePassWordElement = document.querySelector("#generated-password");
const abreFechaGeneratorButton = document.querySelector("#open-generate-password");
const generatePasswordContainer = document.querySelector("#generate-options");
const letrasInput = document.querySelector("#letras");
const numberInputs = document.querySelector("#numb");
const lengthInput = document.querySelector("#length");
const symbolsInputs = document.querySelector("#symbols");
const copyPassword = document.querySelector("#copy-password");

// --- Funções para gerar caracteres aleatórios ---

// Gera uma letra minúscula aleatória
const getLetterLowerCase = () => {
    // Retorna um caractere a partir de um código ASCII (97-122 para 'a'-'z')
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Gera uma letra maiúscula aleatória
const getLetterUpperCase = () => {
    // Retorna um caractere a partir de um código ASCII (65-90 para 'A'-'Z')
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Gera um número aleatório de 0 a 9
const getNumber = () => {
    // Retorna um número aleatório convertido para string
    return Math.floor(Math.random() * 10).toString();
};

// Gera um símbolo aleatório
const getSimbolo = () => {
    // String com todos os símbolos disponíveis
    const simbolos = "(){}[]+=<>/,.!@#$%¨&*-?";
    // Retorna um símbolo aleatório da string
    return simbolos[Math.floor(Math.random() * simbolos.length)];
};

// --- Função principal para gerar a senha ---

// Gera a senha com base nas opções selecionadas pelo usuário
const geraSenha = (getLetterLowerCase, getLetterUpperCase, getNumber, getSimbolo) => {
    let senha = "";
    // Pega o valor do input de comprimento da senha e o converte para número
    const senhaLength = +lengthInput.value;
    // Array para armazenar as funções de geração de caracteres selecionadas
    const generators = [];

    // Adiciona as funções ao array 'generators' se as checkboxes estiverem marcadas
    if (letrasInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase);
    }
    if (numberInputs.checked) {
        generators.push(getNumber);
    }
    if (symbolsInputs.checked) {
        generators.push(getSimbolo);
    }

    // Se nenhuma checkbox estiver marcada, a função retorna
    if (generators.length === 0) {
        return;
    }

    // Loop para gerar a senha.
    // O loop original tinha um problema de lógica. A versão corrigida seria:
    for (let i = 0; i < senhaLength; i++) {
        const valorRandom = generators[Math.floor(Math.random() * generators.length)]();
        senha += valorRandom;
    }

    // A versão original do seu código:
    /*
    for(i = 0; i < senhaLength; i = i + generators.length){
        generators.forEach(() => {
            const valorRandom = generators[Math.floor(Math.random() * generators.length)]()
            senha += valorRandom
        })
    }
    senha = senha.slice(0, senhaLength)
    */

    // Exibe o container da senha e atualiza o texto com a senha gerada
    generatePassWordElement.style.display = "block";
    generatePassWordElement.querySelector("h4").innerText = senha;
};

// --- Eventos ---

// Evento de clique para o botão "Criar senha"
generatePassWordButton.addEventListener("click", () => {
    // Chama a função 'geraSenha' com as funções de geração de caracteres
    geraSenha(getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSimbolo);
});

// Evento de clique para o link "Clique aqui"
abreFechaGeneratorButton.addEventListener("click", () => {
    // Alterna a classe 'hide' para mostrar ou esconder o container de opções
    generatePasswordContainer.classList.toggle("hide");
});

// Evento de clique para o botão "Copiar"
copyPassword.addEventListener("click", (e) => {
    e.preventDefault(); // Impede o comportamento padrão do botão
    // Pega o texto da senha gerada
    const password = generatePassWordElement.querySelector("h4").innerText;
    // Usa a API do navegador para copiar o texto para a área de transferência
    navigator.clipboard.writeText(password).then(() => {
        // Altera o texto do botão para "Senha copiada com sucesso"
        copyPassword.innerText = "Senha copiada com sucesso";
        // Usa um timer para voltar o texto do botão para "Copiar" depois de 1 segundo
        setTimeout(() => {
            copyPassword.innerText = "Copiar";
        }, 1000);
    });
});