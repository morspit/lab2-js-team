function findTopStudent(data) {
    let topStudent = data[0];
    for (let student of data) {
        if (student.score > topStudent.score) {
            topStudent = student;
        }
    }
    return topStudent.name;
}

module.exports = { findTopStudent };