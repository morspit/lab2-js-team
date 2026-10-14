const grades = require('./data');

function calculateAverage(data) {
    let sum = 0;
    for (let student of data) {
        sum = sum + student.score;
    }
    return sum / data.length;
}

module.exports = { calculateAverage };

console.log("Проверка Дениса:", calculateAverage(grades));