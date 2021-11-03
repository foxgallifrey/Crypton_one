interface Student {
    name: string;
    avgMark: number;
}

interface Statistics {
    avgMark: number;
    highestMark: string;
    lowestMark: string;
}

function getStatistics(marks: Student[]): Statistics {

    let avgMark: number = 0;

    for (let key in marks){
        avgMark += marks[key].avgMark;
    }

    avgMark = avgMark/marks.length;

    marks.sort(function(a, b){
        return a.avgMark-b.avgMark
    }); // сортировка по возрастанию среднего балла

    const lowestMark: string = marks[0].name;
    const highestMark: string = marks[marks.length - 1].name;

    return {
        avgMark: avgMark,
        highestMark: highestMark,
        lowestMark: lowestMark
    }
}

const testMarks = [{
    name: "Vasya",
    avgMark: 3.75
}, {
    name: "Lena",
    avgMark: 4.89
}];

const start_time = Date.now();

console.log(getStatistics(testMarks));

let end_time = Date.now() - start_time;
console.log('Time:', end_time / 1000, 's');