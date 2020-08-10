//servidor
const express = require ('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages') 

//configurando nunjucks
const nunjucks = require('nunjucks')

nunjucks.configure('src/views',{
    express: server,
    noCache: true
})



//configurar arquivos estaticos (css, scripts, imagens)
server
//receber os dados do req.body
.use(express.urlencoded({ extended:true}))
.use(express.static("public"))

//rotas da aplcaccao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses) 
.post("/save-classes", saveClasses) 

//iniciando o servidor na porta 5500
.listen(5500)


