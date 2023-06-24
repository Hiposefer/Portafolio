const textarea0 = document.querySelector(".textarea")
const textarea1 = document.querySelector(".textarea1")
const copiar = document.querySelector(".copiar")
copia.style.display = "none"

function mostrar() {
    const mostrarencriptacion = btnEncriptar(textarea0.value)
    textarea1.value = mostrarencriptacion
    textarea0.value = "";
    textarea1.style.backgroundImage = "none"
    copia.style.display = "block"
}

function btnEncriptar (encriptacion) {
    let matriz = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptacion = encriptacion.toLowerCase()

    for (let i = 0; i < matriz.length; i++) {
        if (encriptacion.includes(matriz[i][0])) {
            encriptacion = encriptacion.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return encriptacion
}


function mostrardesen() {
    const mostrarencriptacion = btnDesencriptar(textarea0.value)
    textarea1.value = mostrarencriptacion
    textarea0.value = "";
    textarea1.style.backgroundImage = "none"
    copia.style.display = "block"
}

function btnDesencriptar (desencriptacion) {
    let matriz = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencriptacion = desencriptacion.toLowerCase()

    for (let i = 0; i < matriz.length; i++) {
        if (desencriptacion.includes(matriz[i][0])) {
            desencriptacion = desencriptacion.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return desencriptacion
}

function copi(){
    textarea1.select();
    navigator.clipboard.writeText(textarea1.value)
    textarea1.value = "";
    alert("Texto Copiado")
}