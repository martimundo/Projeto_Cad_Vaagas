const Sequelize = require("sequelize");


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});
//para expoarta os dados para outro local do sistema
module.exports = sequelize;