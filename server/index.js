require('dotenv').config();
const express = require('express')
const {sequelize} = require('./DB')
const {logger} = require("sequelize/lib/utils/logger");

//const {types_of_tests, card_statuses, medical_cards, Test_results, Medcards_records} = require('./models/medical_vid');
//const {types_of_tests, card_statuses, medical_cards, Test_results, Medcards_records} = require('./models/medical');
// const medical = require('./models/medical');
//const registry_info = require('./models/registry_info');
//const users = require('./models/users');
const model = require('./models/users_and_medical');


const PORT = process.env.PORT || 5000;
const app = express();

const start = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
    }catch(e) {
        console.log(e)
    }
}
start();
