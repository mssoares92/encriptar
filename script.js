const palavra_digitada = document.querySelector(".palavra_digitada");
const mensagem_criptografada = document.querySelector(".mensagem_criptografada");
const textareaInput = document.querySelector('textarea');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


    // Função Inibir caracteres especiais e letras maiusculas
    textareaInput.addEventListener('keydown', function (event) {
        if (event.key === " ") {
            return;
        }
        if (!/[a-zç,.]/.test(event.key)) {
            event.preventDefault();
            alert('O sistema não permite letras MAIUSCULAS nem ACENTOS.');
        }
    });

    // Botão de Ação Encriptar
    function btnEncriptar() {

        const textoEncriptado = encriptar(palavra_digitada.value);
        mensagem_criptografada.value = textoEncriptado;
        document.querySelector('.mensagem_criptografada').style.backgroundImage = "none";
        
    }

    // Função Encriptar palavras
    function encriptar(stringDesencriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        for (i = 0; i < matrizCodigo.length; i++) {
            if (stringDesencriptada.includes(matrizCodigo[i][0])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return stringDesencriptada;
    
    }
    
    // Botão de Ação Encriptar
    function btnDesencriptar() {
        const textoDesencriptado = desencriptar(palavra_digitada.value);
        mensagem_criptografada.value = textoDesencriptado;
        palavra_digitada.value = "";
    }

    // Função Desencriptar palavras
    function desencriptar(stringDesencriptada) {

        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for (i = 0; i < matrizCodigo.length; i++) {
            if (stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesencriptada;
    }

    // Função Copiar Mensagem Encriptada
    function Copiar(){
        navigator.clipboard.writeText(mensagem_criptografada.value).then(() =>{
            alert('Texto Copiado !')
        })   
    }
    //Botão de Ação Reiniciar Jogo
    function btnLimpar() {
        window.location.reload();
         mensagem_criptografada.value = "";
         palavra_digitada.value = "";
    }