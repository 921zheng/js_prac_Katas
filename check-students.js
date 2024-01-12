function checkStudents(students, cohort) {
    if(students.length === 0) return true
    if(students.length === 1 && students[0].cohort === cohort) return true
    for (let i = 0; i < students.length; i++) {
        if(students[i].cohort !== cohort) {
            return false
        }
    }
    return true
}

module.exports = checkStudents;
