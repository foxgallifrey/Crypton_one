function getStatistics(marks) {
    var avgMark = 0;
    for (var key in marks) {
        avgMark += marks[key].avgMark;
    }
    avgMark = avgMark / marks.length;
    marks.sort(function (a, b) {
        return a.avgMark - b.avgMark;
    }); // сортировка по возрастанию среднего балла
    var lowestMark = marks[0].name;
    var highestMark = marks[marks.length - 1].name;
    return {
        avgMark: avgMark,
        highestMark: highestMark,
        lowestMark: lowestMark
    };
}
var testMarks = [{
        name: "Vasya",
        avgMark: 3.75
    }, {
        name: "Lena",
        avgMark: 4.89
    }];
var start_time = Date.now();
console.log(getStatistics(testMarks));
var end_time = Date.now() - start_time;
console.log('Time:', end_time / 1000, 's');
