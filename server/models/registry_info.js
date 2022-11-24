// const {Sequelize, Model, sequelize, DataTypes} = require('../DB')
//
// const {Pacients, Sectors} = require('./users_and_medical')
// //const {Pacients, Sectors} = require('./users')
//
// class Types_of_appointments extends Model{}
// class Types_of_shifts extends Model{}
// class House_calls extends Model{}
// class Timetable extends Model{}
// class Appointments extends Model{}
//
// Types_of_appointments.init(
//     {
//         id:     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         name:   {type: DataTypes.STRING, allowNull:false}
//     },
//     {sequelize, modelName:'Types_of_appointments', tableName:'Types_of_appointments', timestamps:false}
// );
// Types_of_shifts.init(
//     {
//         id:                     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         period_name:            {type: DataTypes.STRING, allowNull:false},
//         beginning_of_period:    {type: DataTypes.TIME, allowNull:false},
//         end_of_period:          {type: DataTypes.TIME, allowNull:false}
//     },
//     {sequelize, modelName:'Types_of_shifts', tableName:'Types_of_shifts', timestamps:false}
// );
// House_calls.init(
//     {
//         id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_pacient: {type: DataTypes.INTEGER, allowNull:false},
//         remark:     {type: DataTypes.STRING, allowNull:false}
//     },
//     {sequelize, modelName:'House_calls', tableName:'House_calls', timestamps:false}
// );
// Timetable.init(
//     {
//         id:                 {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_type_of_shifts:  {type: DataTypes.INTEGER, allowNull:false},
//         id_sector:          {type: DataTypes.INTEGER, allowNull:false},
//         date:               {type: DataTypes.DATEONLY, allowNull:false}
//     },
//     {sequelize, modelName:'Timetable', tableName:'Timetable', timestamps:false}
// );
// Appointments.init(
//     {
//         id:                     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
//         id_shift:               {type: DataTypes.INTEGER, allowNull:false},
//         id_pacient:             {type: DataTypes.INTEGER, allowNull:false},
//         id_type_of_appointment: {type: DataTypes.INTEGER, allowNull:false},
//         remark:                 {type: DataTypes.STRING, allowNull:false}
//     },
//     {sequelize, modelName:'Appointments', tableName:'Appointments', timestamps:false}
// )
//
// Timetable.hasMany(Sectors, {foreignKey: 'id_sector'});
// Sectors.belongsTo(Timetable, {foreignKey: 'id_sector'});
//
// Timetable.hasMany(Types_of_shifts, {foreignKey: 'id_type_of_shift'});
// Types_of_shifts.belongsTo(Timetable, {foreignKey: 'id_type_of_shift'});
//
// House_calls.hasMany(Pacients, {foreignKey: 'id_pacient'});
// Pacients.belongsTo(House_calls, {foreignKey: 'id_pacient'});
//
// Appointments.hasMany(Timetable, {foreignKey: 'id_shift'});
// Timetable.belongsTo(Appointments, {foreignKey: 'id_shift'});
//
// Appointments.hasMany(Pacients, {foreignKey: 'id_pacient'});
// Pacients.belongsTo(Appointments, {foreignKey: 'id_pacient'});
//
// Appointments.hasMany(Types_of_appointments, {foreignKey: 'id_type_of_appointment'});
// Types_of_appointments.belongsTo(Appointments, {foreignKey: 'id_type_of_appointment'});
//
// sequelize.sync({alter:true});
//
// module.exports = {Appointments, Timetable, House_calls, Types_of_shifts, Types_of_appointments};