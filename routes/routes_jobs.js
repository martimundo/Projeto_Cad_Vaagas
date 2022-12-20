//importando o express
const express = require('express');

//importando o Router do express
const router = express.Router();

//importando a model de Jon
const Job = require('../models/Job');

router.get('/test', (req, res) => {
    res.send("TUDO CERTO");
})
router.post('/ola', (req, res) => {
    res.send("TUDO CERTO");
})

//adicionando um job no DB.
//ROUTE VIA POST
router.post('/add', (req, res) => {

    let { titulo, descricao, salario, company, email, new_job } = req.body;
    //inserindo dados no sistema.
    Job.create({

        titulo,
        descricao,
        salario,
        company,
        email,
        new_job
    })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error));
});

module.exports = router;