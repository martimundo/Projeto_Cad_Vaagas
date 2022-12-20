const Sequelize = require("sequelize");
const db = require('../db/conection');

const Job = db.define('job', {

    titulo: {
        type: Sequelize.STRING,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    salario: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job:{
        type:Sequelize.INTEGER,
    },
   

});
module.exports = Job;