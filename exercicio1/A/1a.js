function contVogais(palavra) {
    let contador = 0;
    let vogais = "aáàâãeéèễẽiiíìîĩoóòôõuúùûũ";
    for (let letra of palavra.toLowerCase()) { // conta a quantidade de vogais
        if (vogais.includes(letra))
            contador++;
    }
    return contador;
}
console.log(contVogais("áEIOUĩŨ"));
