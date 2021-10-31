let initialArray: Array<any> = [1, 5, 4];

let validation: boolean = true;
initialArray.forEach(el => { // validar se e numerico
    if(typeof(el) !== "number") validation = false;
})

if (!validation) {
    console.log(["O array passado não é numérico"]); 
}
else {
    initialArray.sort();
    
    let max: number = initialArray[initialArray.length - 1];
    let min: number = initialArray[0];
    
    let sum: number = 0;
    
    initialArray.forEach(el => { sum += el; })
    
    let average: number = (sum/initialArray.length);
    
    let newArray: Array<number> = [min, average, max];
    
    console.log([
        `Menor valor: ${newArray[0]}, Média: ${newArray[1].toFixed(2)}, Maior valor: ${newArray[2]}`
    ]);
}