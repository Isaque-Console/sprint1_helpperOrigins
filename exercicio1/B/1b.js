function contVogais() {
    var campo = document.getElementById("palavra");
    var palavra = campo.value;
    var contador = 0;
    var vogais = "aáàâãeéèêẽiíìîĩoóòôõuúùûũ";
    var arrayPalavra = Array.from(palavra);
    for (var i in arrayPalavra) { // conta a quantidade de vogais
        if (vogais.includes(palavra[i].toLowerCase()))
            contador++;
    }
    alert(contador);
    return contador;
}
