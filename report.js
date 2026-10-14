const grades = require('./data');
const { calculateAverage } = require('./average');
const { findTopStudent } = require('./topStudent');
const { filterFailed } = require('./failedStudents');
const { addLetterGrade } = require('./letterGrades');

console.log("=== Анализ успеваемости ===");
console.log("1. Средний балл группы:", calculateAverage(grades));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников (кто не сдал):", filterFailed(grades, 60));
console.log("4. Итоговый массив с буквенными оценками:", addLetterGrade(grades));