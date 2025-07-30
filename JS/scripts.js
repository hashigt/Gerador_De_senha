// Selecção de Elementos
const generatePassWordButton = document.querySelector("#generate-password")
const generatePassWordElement = document.querySelector("#generated-password")

// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSimbolo = () => {
    const simbolos = "(){}[]+=<>/,.!@#$%¨&*-?";
    return simbolos[Math.floor(Math.random() * simbolos.length)]
}

const geraSenha = (getLetterLowerCase, getLetterUpperCase, getNumber, getSimbolo) 
//Eventos
generatePassWordButton.addEventListener("click", () => {
    console.log("teste")
})