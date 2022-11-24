// const {Sequelize, Model, sequelize, DataTypes} = require('../DB')
// // const sequelize = require('../DB')
// // const {DataTypes} = require('sequelize')
// // const Sequelize = require('sequelize')
// // const Model = Sequelize.Model
// //const {Age_group} = require('./users')
//
//
// class Types_of_tests extends Model{}
// class Analysis_norms extends Model{}
// class Card_status extends Model{}
// class Medical_cards extends Model{}
// class Test_results extends Model{}
// class Medcards_records extends Model{}
//
// Types_of_tests.init(
//     {
//         id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         test_name:  {type: DataTypes.STRING, allowNull:false}
//     },
//     {sequelize, modelName:'Types_of_tests', tableName:'Types_of_tests', timestamps:false}
// );
// Analysis_norms.init(
//     {
//         id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_analysis_type: {type: DataTypes.INTEGER, allowNull:false},
//         id_agegroup:   {type: DataTypes.INTEGER, allowNull:false},
//         min:   {type: DataTypes.INTEGER, allowNull:false},
//         max:   {type: DataTypes.INTEGER, allowNull:false},
//         norm_score:   {type: DataTypes.STRING, allowNull:false}
//     },
//     {sequelize, modelName:'Analysis_norms', tableName:'Analysis_norms', timestamps:false}
// );
// Card_status.init(
//     {
//         id:     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         status: {type: DataTypes.STRING, allowNull:false}
//     },
//     {sequelize, modelName:'Card_status', tableName:'Card_status', timestamps:false}
// );
// Medical_cards.init(
//     {
//         id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         card_number:    {type: DataTypes.STRING, allowNull:false},
//         card_status:    {type: DataTypes.STRING, allowNull:false}
//     },
//     {sequelize, modelName:'Medical_cards', tableName:'Medical_cards', timestamps:false}
// );
// Test_results.init(
//     {
//         id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_medcard:     {type: DataTypes.INTEGER, allowNull:false},
//         id_test_type:   {type: DataTypes.INTEGER, allowNull:false},
//         id_norm:        {type: DataTypes.INTEGER, allowNull:false},
//         result:         {type: DataTypes.STRING, allowNull:false},
//         recommendation: {type: DataTypes.STRING, allowNull:true}
//     },
//     {sequelize, modelName:'Test_results', tableName:'Test_results', timestamps:false}
// );
// Medcards_records.init(
//     {
//         id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_medcard:     {type: DataTypes.INTEGER, allowNull:false},
//         date:           {type: DataTypes.DATEONLY, allowNull:false},
//         record:         {type: DataTypes.STRING, allowNull:false},
//         recommendation: {type: DataTypes.STRING, allowNull: true}
//     },
//     {sequelize, modelName:'Medcards_records', tableName:'Medcards_records', timestamps:false}
// )
// Medical_cards.hasMany(Medcards_records, {foreignKey: 'id_medcard'});
// Medcards_records.belongsTo(Medical_cards, {foreignKey: 'id_medcard'});
//
// Medical_cards.hasMany(Card_status, {foreignKey: 'id_medcard'});
// Card_status.belongsTo(Medical_cards, {foreignKey: 'id_medcard'});
//
// Medical_cards.hasMany(Test_results, {foreignKey: 'id_medcard'});
// Test_results.belongsTo(Medical_cards, {foreignKey: 'id_medcard'});
//
// Test_results.hasMany(Types_of_tests, {foreignKey: 'id_test_type'});
// Types_of_tests.belongsTo(Test_results, {foreignKey: 'id_test_type'})
//
// Test_results.hasMany(Analysis_norms, {foreignKey: 'id_norm'});
// Analysis_norms.belongsTo(Test_results, {foreignKey: 'id_norm'})
//     //изменить id_test_type на id_analysis_type
// Analysis_norms.hasMany(Types_of_tests, {foreignKey: 'id_test_type'});
// Types_of_tests.belongsTo(Analysis_norms, {foreignKey: 'id_test_type'})
//
// // Analysis_norms.hasMany(Age_group, {foreignKey: 'id_agegroup'});
// // Age_group.belongsTo(Analysis_norms, {foreignKey: 'id_agegroup'})
//
// sequelize.sync({alter:true});
//
// module.exports = {Types_of_tests, Card_status, Medical_cards, Test_results, Medcards_records, Analysis_norms};
