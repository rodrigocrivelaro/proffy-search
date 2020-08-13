// Criando um servidor node para rodar a aplicação
const express = require('express');
const server = express();
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages');

// Configurando o nunjucks (Template Engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor criado
server
.use(express.urlencoded({ extended: true })) // Recebe os dados no req.body ao invés do padrão req.query
.use(express.static("public")) // Configura o caminho dos arquivos estáticos(css, scripts, imagens, etc)
.get("/", pageLanding) // rota pag principal
.get("/study", pageStudy) // rota pag study
.get("/give-classes", pageGiveClasses) // rota pag give-classes
.post("/save-classes", saveClasses)
.listen(5500); // porta que o servidor utiliza