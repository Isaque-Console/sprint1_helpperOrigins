let initialArray: Array<any> = [1, 5, 4];

let validation: boolean = true;
initialArray.forEach(arrayElement => { // validar se e numerico
    if(typeof(arrayElement) !== "number") validation = false;
})

if (!validation) {
    console.log(["O array passado não é numérico"]); 
}
else {
    initialArray.sort();
    
    // corrigir nome das variaves max, min, mid
    let max: number = initialArray[initialArray.length - 1];
    let min: number = initialArray[0];
    
    let sum: number = 0;
    
    sum = initialArray.reduce((previousValue: number, currentValue: number) =>  previousValue + currentValue);
    
    let average: number = (sum/initialArray.length);
    
    let newArray: Array<number> = [min, average, max];
    
    console.log([
        `Menor valor: ${newArray[0]}, Média: ${newArray[1].toFixed(2)}, Maior valor: ${newArray[2]}`
    ]);
}