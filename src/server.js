const proffys = [
    {
        name: "Rodrigo Crivelaro",
        avatar: "https://avatars0.githubusercontent.com/u/10005368?s=460&u=6f50a3364b1bbf68304ed7e8735d69f9d4874fa5&v=4",
        whatsapp: "16992039785",
        bio: "Sou mestre Jedi e amante de motorcycles...",
        subject: "Ciências",
        cost: "7000,00",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "999992345",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Química",
        cost: "20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Iara Gatinha Crivelaro",
        avatar: "https://avatars1.githubusercontent.com/u/66339183?s=460&u=c858045371ea3daf68af303652b73711c885ed71&v=4",
        whatsapp: "16994653007",
        bio: "Entusiasta das melhores tecnologias de computação avançada.<br><br>Apaixonada por dar aulas e por mudar a vida das pessoas através dedelas. Mais de 500.000 pessoas já passaram por uma das minhas aulas.",
        subject: "JavaScript",
        cost: "50,00",
        weekday: [1,2,3,4,5],
        time_from: [720],
        time_to: [1220]
    }
];

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

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position];
}

function pageLanding(req, resp) {
    return resp.render("index.html");
}

function pageStudy(req, resp) {
    const filters = req.query;
    return resp.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses (req, resp) {
    const dados = req.query;

    const isNotEmpty = Object.keys(dados).length > 0;
    
    if(isNotEmpty) {
        dados.subject = getSubject(dados.subject);

        proffys.push(dados);
        return resp.redirect("/study"); 
    }

    return resp.render("give-classes.html", { subjects, weekdays });
}

// Criando um servidor node para rodar a aplicação
const express = require('express');
const server = express();

// Configurando o nunjucks (Template Engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor criado
server
.use(express.static("public")) // Configura o caminho dos arquivos estáticos(css, scripts, imagens, etc)
.get("/", pageLanding) // rota pag principal
.get("/study", pageStudy) // rota pag study
.get("/give-classes", pageGiveClasses) // rota pag give-classes
.listen(5500); // porta que o servidor utiliza