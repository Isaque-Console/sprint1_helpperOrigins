function contVogais(): number {
    let campo: HTMLInputElement = document.getElementById("palavra") as HTMLInputElement;
    let palavra: string = campo.value

    let contador: number = 0;
    let vogais: string = "aáàâãeéèêẽiíìîĩoóòôõuúùûũ";
    let arrayPalavra: Array<string> = Array.from(palavra);

    for(let i in arrayPalavra){ // conta a quantidade de vogais
        if (vogais.includes(palavra[i].toLowerCase())) contador++; 
    }
    
    alert(contador)

    return contador
}
