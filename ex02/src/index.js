var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61],
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];

    for (var i = 0; i < newTemps.length; i++) {
        var sum = 0;
        for (var x = 0; x < newTemps[i].length; x++) {
            sum += newTemps[i][x];
        }
        var average = sum / newTemps[x].length;
        averageDayTemp.push(average);
    }

    return averageDayTemp;
}

console.log(myArrayFunction(temps));

module.exports = myArrayFunction;
