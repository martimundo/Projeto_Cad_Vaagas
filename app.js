
const express = require("express");
const app = express();
const db = require('./db/conection');
const bodyParser = require('body-parser');


const PORT = 3000;

app.listen(PORT, function () {
    console.log(`O servidor esta rodando na porta ${PORT}`);
});

//body parser
app.unsubscribe(bodyParser.urlencoded({ extended: false }));

//DB CONNECTION
db
    .authenticate().then(() => {
        console.log("Conexão realizada com sucesso");
    })
    .catch(err => {
        console.log("Falha na conexão", err);
    })


//ROUTES
app.get('/', function (resp, res) {
    res.send("Servidor no AR 006+!!!");
});
app.use('/jobs', require('./routes/routes_jobs'));



