// const sequelize = require('../DB')
// const {DataTypes} = require('sequelize')
//
// const types_of_tests = sequelize.define('types_of_tests',{
//     id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//     test_name:  {type: DataTypes.STRING, allowNull:false}
// })
//
// const card_statuses = sequelize.define('card_statuses',{
//     id:     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//     status: {type: DataTypes.STRING, allowNull:false}
// })
//
// const medical_cards = sequelize.define('medical_cards',{
//     id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//     card_number:    {type: DataTypes.STRING, allowNull:false},
//     card_status:    {type: DataTypes.STRING, allowNull:false}
// })
//
// const test_results = sequelize.define('test_results',{
//     id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//     id_medcard:     {type: DataTypes.INTEGER, allowNull:false},
//     id_test_type:   {type: DataTypes.INTEGER, allowNull:false},
//     result:         {type: DataTypes.STRING, allowNull:false},
//     recommendation: {type: DataTypes.STRING, allowNull:true}
// })
//
// const medcards_records = sequelize.define('medcards_records', {
//     id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//     id_medcard:     {type: DataTypes.INTEGER, allowNull:false},
//     date:           {type: DataTypes.DATEONLY, allowNull:false},
//     record:         {type: DataTypes.STRING, allowNull:false},
//     recommendation: {type: DataTypes.STRING, allowNull: true}
// })
//
// medical_cards.hasMany(card_statuses, {foreignKey: 'id_medcard'});
// card_statuses.belongsTo(medical_cards, {foreignKey: 'id_medcard'});
//
// medical_cards.hasMany(medcards_records);
// medcards_records.belongsTo(medical_cards);
//
// medical_cards.hasMany(test_results);
// test_results.belongsTo(medical_cards);
//
// test_results.hasMany(types_of_tests);
// types_of_tests.belongsTo(test_results)
//
// //sequelize.sync({force:true});
//
// module.exports = {types_of_tests, card_statuses, medical_cards/*, Test_results, Medcards_records*/};
