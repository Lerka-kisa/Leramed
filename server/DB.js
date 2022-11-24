const {Sequelize, DataTypes} = require('sequelize');
const Model = Sequelize.Model;

const sequelize = new Sequelize('LeraMed', "sa", "Nata_5442488",
    {host: 'localhost', dialect: 'mssql'}
);
// module.exports = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,{
//         dialect: "postgres",
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT
//     }
// )

module.exports = {Sequelize, Model, sequelize, DataTypes}