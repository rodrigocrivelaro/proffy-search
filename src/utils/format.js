const subjects = [
    "Artes", 
    "Biologia", 
    "Ciências", 
    "Educação Física", 
    "Física", 
    "Geografia", 
    "História", 
    "Matemática", 
    "Português", 
    "Química",
    "JavaScript",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubjects(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position];
}

function convertHoursToMinutes(time) {
    const [hour, min] = time.split(":");
    return Number((hour * 60) + min);
}

module.exports = {subjects, weekdays, getSubjects, convertHoursToMinutes};