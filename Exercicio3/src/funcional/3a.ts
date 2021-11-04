function isNumber(array: Array<any>): boolean { // validar se o array e numerico
    let validation: boolean = true;
    array.forEach(arrayElement => {
        if(typeof(arrayElement) !== "number") validation = false;
    })
    return validation;
}

function average(array: Array<any>): number {
    let sum: number = 0;

    sum = array.reduce((previousValue: number, currentValue: number) =>  previousValue + currentValue);

   let average: number = (sum/array.length);

   return average
}

function calculate(array: Array<any>): Array<number> {
    array.sort();

    let largerNumber: number = array[array.length - 1];
    let smallerNumber: number = array[0];
    let AverageNumber: number = average(array);

    return [smallerNumber, AverageNumber, largerNumber];
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

console.log(generateArray([1, 5, 4]));