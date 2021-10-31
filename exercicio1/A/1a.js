function contVogais(palavra) {
    var contador = 0;
    var vogais = "aáàâãeéèễẽiiíìîĩoóòôõuúùûũ";
    var arrayPalavra = Array.from(palavra);
    for (var i in arrayPalavra) { // conta a quantidade de vogais
        if (vogais.includes(arrayPalavra[i].toLowerCase()))
            contador++;
    }
    return contador;
}
console.log(contVogais("áEIOUĩŨ"));
