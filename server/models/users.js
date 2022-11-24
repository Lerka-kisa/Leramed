// const {Sequelize, Model, sequelize, DataTypes} = require('../DB')
// // const sequelize = require('../DB')
// // const {DataTypes} = require('sequelize')
// // const Sequelize = require('sequelize')
// // const Model = Sequelize.Model
//
//
// class Authorization_info extends Model{}
// class Doctors extends Model{}
// class Sectors extends Model{}
// class Addresses extends Model{}
// class Age_group extends Model{}
// class Pacients extends Model{}
//
// Authorization_info.init(
//     {
//         id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         login:      {type: DataTypes.STRING, allowNull:false},
//         password:   {type: DataTypes.STRING, allowNull:false},
//         mail:       {type: DataTypes.STRING, allowNull:false},
//         phone:      {type: DataTypes.STRING, allowNull:false},
//         role:       {type: DataTypes.STRING, allowNull:false/*, defaultValue:"USER"*/}
//     },
//     {sequelize, modelName:'Authorization_info', tableName:'Authorization_info', timestamps:false}
// );
// Doctors.init(
//     {
//         id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_auth:        {type: DataTypes.INTEGER, allowNull:false},
//         first_name:     {type: DataTypes.STRING,  allowNull:false},
//         last_name:      {type: DataTypes.STRING,  allowNull:false},
//         middle_name:    {type: DataTypes.STRING,  allowNull:false},
//         specialization: {type: DataTypes.STRING,  allowNull:false}
//     },
//     {sequelize, modelName:'Doctors', tableName:'Doctors', timestamps:false}
// );
// Sectors.init(
//     {
//         id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_doctor:  {type: DataTypes.INTEGER, allowNull:false}
//     },
//     {sequelize, modelName:'Sectors', tableName:'Sectors', timestamps:false}
// );
// Addresses.init(
//     {
//         id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_sector:  {type: DataTypes.INTEGER,  allowNull:false},
//         city:       {type: DataTypes.STRING, allowNull:false},
//         street:     {type: DataTypes.STRING, allowNull:false},
//         house:      {type: DataTypes.STRING, allowNull:false}
//     },
//     {sequelize, modelName:'Addresses', tableName:'Addresses', timestamps:false}
// );
// Age_group.init(
//     {
//         id:    {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         group: {type: DataTypes.STRING, allowNull:false}
//     },
//     {sequelize, modelName:'Age_group', tableName:'Age_group', timestamps:false}
// );
//
// Pacients.init(
//     {
//         id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_parent:      {type: DataTypes.INTEGER,  allowNull:true},
//         id_auth:        {type: DataTypes.INTEGER,  allowNull:true},
//         id_medcard:     {type: DataTypes.INTEGER,  allowNull:false},
//         id_agegroup:    {type: DataTypes.INTEGER,  allowNull:false},
//         first_name:     {type: DataTypes.STRING,  allowNull:false},
//         last_name:      {type: DataTypes.STRING,  allowNull:false},
//         middle_name:    {type: DataTypes.STRING,  allowNull:false},
//         birthday:       {type: DataTypes.DATEONLY, allowNull:false},
//         phone:          {type: DataTypes.STRING, allowNull:true},
//         id_address:     {type: DataTypes.INTEGER,  allowNull:false},
//         flat:           {type: DataTypes.STRING, allowNull:true},
//         place_of_work:  {type: DataTypes.STRING, allowNull:true}
//     },
//     {sequelize, modelName:'Pacients', tableName:'Pacients', timestamps:false}
// );
//
// Sectors.hasMany(Doctors,{foreignKey: 'id_doctor'});
// Doctors.belongsTo(Sectors,{foreignKey: 'id_doctor'});
//
// Doctors.hasOne(Authorization_info, {foreignKey: 'id_auth'});
// Authorization_info.belongsTo(Doctors, {foreignKey: 'id_auth'});
//
// Pacients.hasOne(Authorization_info, {foreignKey: 'id_auth'});
// Authorization_info.belongsTo(Pacients, {foreignKey: 'id_auth'});
//
// // Pacients.hasOne(Medical_cards, {foreignKey: 'id_medcard'});
// // Medical_cards.belongsTo(Pacients, {foreignKey: 'id_medcard'});
//
// Pacients.hasMany(Age_group, {foreignKey: 'id_agegroup'});
// Age_group.belongsTo(Pacients, {foreignKey: 'id_agegroup'});
//
// Pacients.hasMany(Addresses, {foreignKey: 'id_address'});
// Addresses.belongsTo(Pacients, {foreignKey: 'id_address'});
//
// Pacients.hasMany(Pacients, {foreignKey: 'id_parent'});
// Pacients.belongsTo(Pacients, {foreignKey: 'id_parent'});
//
// Addresses.hasMany(Sectors, {foreignKey: 'id_sector'});
// Sectors.belongsTo(Addresses, {foreignKey: 'id_sector'});
//
// sequelize.sync({alter:true});
//
// module.exports = {Authorization_info, Doctors, Sectors, Addresses, Age_group, Pacients};