const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"89987654534",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }
]

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

    //Server sends archivier
    function pageLanding(req, res){
        return res.render("index.html")
    }

    function pageStudy(req, res){
        const filters = req.query
        return res.render("study.html", { proffys, filters, subjects, weekdays })
    }

    function pageGiveClasses(req, res){

        const data = req.query
        //transformando em um array
        //se tiver data adicionar 
        const isNotEmpty = Object.keys(data).length > 0
    
        if (isNotEmpty){
            //adicionar data a lista de proffys
            data.subject = getSubject(data.subject)
            proffys.push(data)
            return res.redirect("/study")
        }

        //se nao, nao adicionar
       
        

        return res.render("give-classes.html", { subjects, weekdays } )
    }


//servidor
const express = require ('express')
const server = express()

//configurando nunjucks
const nunjucks = require('nunjucks')

nunjucks.configure('src/views',{
    express: server,
    noCache: true
})



//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))

//rotas da aplcaccao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses) 
//iniciando o servidor na porta 5500
.listen(5500)


