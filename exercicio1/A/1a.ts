function contVogais(palavra: string): number {
    let contador: number = 0;
    let vogais: string = "aáàâãeéèễẽiiíìîĩoóòôõuúùûũ";
    let arrayPalavra: Array<string> = Array.from(palavra);

    for(let i in arrayPalavra) { // conta a quantidade de vogais
        if (vogais.includes(arrayPalavra[i].toLowerCase())) contador++;
    }
    
    return contador
}

console.log(contVogais("áEIOUĩŨ"));
