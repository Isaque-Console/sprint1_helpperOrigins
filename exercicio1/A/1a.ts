function contVogais(palavra: string): number {
    let contador: number = 0;
    let vogais: string = "aáàâãeéèễẽiiíìîĩoóòôõuúùûũ";

    for(let letra of palavra.toLowerCase()) { // conta a quantidade de vogais
        if (vogais.includes(letra)) contador++;
    }
    
    return contador
}

console.log(contVogais("áEIOUĩŨ"));
