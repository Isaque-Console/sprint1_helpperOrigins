var initialArray = [1, 5, 4];
var validation = true;
initialArray.forEach(function (el) {
    if (typeof (el) !== "number")
        validation = false;
});
if (!validation) {
    console.log(["O array passado não é numérico"]);
}
else {
    initialArray.sort();
    var max = initialArray[initialArray.length - 1];
    var min = initialArray[0];
    var sum_1 = 0;
    initialArray.forEach(function (el) { sum_1 += el; });
    var average = (sum_1 / initialArray.length);
    var newArray = [min, average, max];
    console.log([
        "Menor valor: " + newArray[0] + ", M\u00E9dia: " + newArray[1].toFixed(2) + ", Maior valor: " + newArray[2]
    ]);
}
