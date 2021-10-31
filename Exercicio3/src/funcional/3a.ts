function isNumber(array: Array<any>): boolean { // validar se o array e numerico
    let validation: boolean = true;
    array.forEach(el => {
        if(typeof(el) !== "number") validation = false;
    })
    return validation;
}

function average(array: Array<any>): number {
    let sum: number = 0;

    array.forEach(el => { sum += el; })

   let average: number = (sum/array.length);

   return average
}

function calculate(array: Array<any>): Array<number> {
    array.sort();

    let max: number = array[array.length - 1];
    let min: number = array[0];
    let mid: number = average(array)

    return [min, mid, max];
}

function generateArray(array: Array<any>): Array<string> {
    if (!isNumber(array)) {
        return ["O array passado não é numérico"];
    }

    let newArray: Array<number> = calculate(array); // recebe os valores menor, media e maior
    
    return [
        `Menor valor: ${newArray[0]}, Média: ${newArray[1].toFixed(2)}, Maior valor: ${newArray[2]}`
    ];
}

console.log(generateArray([1, "5", 4]));