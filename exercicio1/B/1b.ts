function contVogais(): number {
    let campo: HTMLInputElement = document.getElementById("palavra") as HTMLInputElement;
    let palavra: string = campo.value

    let contador: number = 0;
    let vogais: string = "aáàâãeéèêẽiíìîĩoóòôõuúùûũ";

    for(let letra of palavra.toLowerCase()){ // conta a quantidade de vogais
        if (vogais.includes(letra)) contador++; 
    }
    
    alert(contador)

    return contador
}
