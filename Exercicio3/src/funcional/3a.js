function isNumber(array) {
    var validation = true;
    array.forEach(function (arrayElement) {
        if (typeof (arrayElement) !== "number")
            validation = false;
    });
    return validation;
}
function average(array) {
    var sum = 0;
    sum = array.reduce(function (previousValue, currentValue) { return previousValue + currentValue; });
    // array.forEach(el => { sum += el; })
    var average = (sum / array.length);
    return average;
}
function calculate(array) {
    array.sort();
    var max = array[array.length - 1];
    var min = array[0];
    var mid = average(array);
    return [min, mid, max];
}
function generateArray(array) {
    if (!isNumber(array)) {
        return ["O array passado não é numérico"];
    }
    var newArray = calculate(array); // recebe os valores menor, media e maior
    return [
        "Menor valor: " + newArray[0] + ", M\u00E9dia: " + newArray[1].toFixed(2) + ", Maior valor: " + newArray[2]
    ];
}
console.log(generateArray([1, "5", 4]));
