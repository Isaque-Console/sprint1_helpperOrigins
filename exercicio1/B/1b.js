function contVogais() {
    let campo = document.getElementById("palavra");
    let palavra = campo.value;
    let contador = 0;
    let vogais = "aáàâãeéèêẽiíìîĩoóòôõuúùûũ";
    for (let letra of palavra.toLowerCase()) { // conta a quantidade de vogais
        if (vogais.includes(letra))
            contador++;
    }
    alert(contador);
    return contador;
}
