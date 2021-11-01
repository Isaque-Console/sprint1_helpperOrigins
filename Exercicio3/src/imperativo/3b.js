var initialArray = [1, 5, 4];
var validation = true;
initialArray.forEach(function (arrayElement) {
    if (typeof (arrayElement) !== "number")
        validation = false;
});
if (!validation) {
    console.log(["O array passado não é numérico"]);
}
else {
    initialArray.sort();
    var max = initialArray[initialArray.length - 1];
    var min = initialArray[0];
    var sum = 0;
    sum = initialArray.reduce(function (previousValue, currentValue) { return previousValue + currentValue; });
    var average = (sum / initialArray.length);
    var newArray = [min, average, max];
    console.log([
        "Menor valor: " + newArray[0] + ", M\u00E9dia: " + newArray[1].toFixed(2) + ", Maior valor: " + newArray[2]
    ]);
}
