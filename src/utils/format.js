const subjects = [
    
    "Artes",
    "Biologia",
    "Ciência",
    "Educação-física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
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
    //create function for get position and modify to array number.
    function getSubject(subjectNumber){
        const position = +subjectNumber - 1
        return subjects[position]
    }

    function convertHoursToMinutes(time) {
        const [hour, minutes] = time.split(":")
        return Number((hour * 60) + minutes)
        
    
    }

    module.exports = {
        subjects,
        weekdays,
        getSubject,
        convertHoursToMinutes
    }