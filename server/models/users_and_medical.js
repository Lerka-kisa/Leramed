const {Sequelize, Model, sequelize, DataTypes} = require('../DB')

//Medical models
class Card_status extends Model{}
class Types_of_analyzes extends Model{}
class Analysis_norms extends Model{}
class Norms_scores extends Model{}
class Medical_cards extends Model{}
class Test_results extends Model{}
class Medcards_records extends Model{}

//Users models
class Authorization_info extends Model{}
class Doctors extends Model{}
class Sectors extends Model{}
class Addresses extends Model{}
class Age_group extends Model{}
class Pacients extends Model{}

//Registry_info models
class Types_of_appointments extends Model{}
class Types_of_shifts extends Model{}
class House_calls extends Model{}
class Timetable extends Model{}
class Appointments extends Model{}

Card_status.init(
    {
        id:     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        status: {type: DataTypes.STRING, allowNull:false}
    },
    {sequelize, modelName:'Card_status', tableName:'Card_status', timestamps:false}
);

Medical_cards.init(
    {
        id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        card_number:    {type: DataTypes.STRING, allowNull:false}
        //card_status
    },
    {sequelize, modelName:'Medical_cards', tableName:'Medical_cards', timestamps:false}
);

Card_status.hasMany(Medical_cards, {foreignKey: 'card_status'});
Medical_cards.belongsTo(Card_status, {foreignKey: 'card_status'});

Types_of_analyzes.init(
    {
        id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        name_analysis:  {type: DataTypes.STRING, allowNull:false}
    },
    {sequelize, modelName:'Types_of_analyzes', tableName:'Types_of_analyzes', timestamps:false}
);

Age_group.init(
    {
        id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        group_name: {type: DataTypes.STRING, allowNull:false}
    },
    {sequelize, modelName:'Age_group', tableName:'Age_group', timestamps:false}
);

Norms_scores.init(
    {
        id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        norm_score: {type: DataTypes.STRING, allowNull:false}
    },
    {sequelize, modelName:'Norms_scores', tableName:'Norms_scores', timestamps:false}
);

Analysis_norms.init(
    {
        id:     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        min:    {type: DataTypes.INTEGER, allowNull:false},
        max:    {type: DataTypes.INTEGER, allowNull:false}
        // id_analysis_type
        // id_agegroup
        // id_norm_score
    },
    {sequelize, modelName:'Analysis_norms', tableName:'Analysis_norms', timestamps:false}
);

Types_of_analyzes.hasMany(Analysis_norms, {foreignKey: 'id_analysis_type'});
Analysis_norms.belongsTo(Types_of_analyzes, {foreignKey: 'id_analysis_type'})

Age_group.hasMany(Analysis_norms, {foreignKey: 'id_agegroup'});
Analysis_norms.belongsTo(Age_group, {foreignKey: 'id_agegroup'})

Norms_scores.hasMany(Analysis_norms, {foreignKey: 'id_norm_score'});
Analysis_norms.belongsTo(Norms_scores, {foreignKey: 'id_norm_score'})

Test_results.init(
    {
        id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        result:         {type: DataTypes.STRING, allowNull:false},
        recommendation: {type: DataTypes.STRING, allowNull:true}
        // id_medcard
        // id_test_type
        // id_norm
    },
    {sequelize, modelName:'Test_results', tableName:'Test_results', timestamps:false}
);

Analysis_norms.hasMany(Test_results, {foreignKey: 'id_norm'});
Test_results.belongsTo(Analysis_norms, {foreignKey: 'id_norm'})

Medical_cards.hasMany(Test_results, {foreignKey: 'id_medcard'});
Test_results.belongsTo(Medical_cards, {foreignKey: 'id_medcard'});

Types_of_analyzes.hasMany(Test_results, {foreignKey: 'id_analysis_type'});
Test_results.belongsTo(Types_of_analyzes, {foreignKey: 'id_analysis_type'})

Medcards_records.init(
    {
        id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        date:           {type: DataTypes.DATEONLY, allowNull:false},
        record:         {type: DataTypes.STRING, allowNull:false},
        recommendation: {type: DataTypes.STRING, allowNull: true}
        //id_medcard
    },
    {sequelize, modelName:'Medcards_records', tableName:'Medcards_records', timestamps:false}
)

Medical_cards.hasMany(Medcards_records, {foreignKey: 'id_medcard'});
Medcards_records.belongsTo(Medical_cards, {foreignKey: 'id_medcard'});

Authorization_info.init(
    {
        id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        login:      {type: DataTypes.STRING, allowNull:false},
        password:   {type: DataTypes.STRING, allowNull:false},
        mail:       {type: DataTypes.STRING, allowNull:false},
        phone:      {type: DataTypes.STRING, allowNull:false},
        role:       {type: DataTypes.STRING, allowNull:false}
    },
    {sequelize, modelName:'Authorization_info', tableName:'Authorization_info', timestamps:false}
);

Doctors.init(
    {
        id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        first_name:     {type: DataTypes.STRING,  allowNull:false},
        last_name:      {type: DataTypes.STRING,  allowNull:false},
        middle_name:    {type: DataTypes.STRING,  allowNull:false},
        specialization: {type: DataTypes.STRING,  allowNull:false}
        // id_auth
    },
    {sequelize, modelName:'Doctors', tableName:'Doctors', timestamps:false}
);

Authorization_info.hasOne(Doctors, {foreignKey: 'id_auth'});
Doctors.belongsTo(Authorization_info, {foreignKey: 'id_auth'});

Sectors.init(
    {
        id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        // id_doctor
    },
    {sequelize, modelName:'Sectors', tableName:'Sectors', timestamps:false}
);

Doctors.hasMany(Sectors,{foreignKey: 'id_doctor'});
Sectors.belongsTo(Doctors,{foreignKey: 'id_doctor'});

Addresses.init(
    {
        id:    {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        city: {type: DataTypes.STRING, allowNull:false},
        street: {type: DataTypes.STRING, allowNull:false},
        house: {type: DataTypes.STRING, allowNull:false}
        // id_sector
    },
    {sequelize, modelName:'Addresses', tableName:'Addresses', timestamps:false}
);

Sectors.hasMany(Addresses, {foreignKey: 'id_sector'});
Addresses.belongsTo(Sectors, {foreignKey: 'id_sector'});

Types_of_shifts.init(
    {
        id:                     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        period_name:            {type: DataTypes.STRING, allowNull:false},
        beginning_of_period:    {type: DataTypes.TIME, allowNull:false},
        end_of_period:          {type: DataTypes.TIME, allowNull:false}
    },
    {sequelize, modelName:'Types_of_shifts', tableName:'Types_of_shifts', timestamps:false}
);

Timetable.init(
    {
        id:                 {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        date:               {type: DataTypes.DATEONLY, allowNull:false}
        // id_type_of_shifts
        // id_sector
    },
    {sequelize, modelName:'Timetable', tableName:'Timetable', timestamps:false}
);

Sectors.hasMany(Timetable, {foreignKey: 'id_sector'});
Timetable.belongsTo(Sectors, {foreignKey: 'id_sector'});

Types_of_shifts.hasMany(Timetable, {foreignKey: 'id_type_of_shift'});
Timetable.belongsTo(Types_of_shifts, {foreignKey: 'id_type_of_shift'});

Pacients.init(
    {
        id:             {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        first_name:     {type: DataTypes.STRING,  allowNull:false},
        last_name:      {type: DataTypes.STRING,  allowNull:false},
        middle_name:    {type: DataTypes.STRING,  allowNull:false},
        birthday:       {type: DataTypes.DATEONLY, allowNull:false},
        phone:          {type: DataTypes.STRING, allowNull:true},
        flat:           {type: DataTypes.STRING, allowNull:true},
        place_of_work:  {type: DataTypes.STRING, allowNull:true}
        // id_parent
        // id_auth
        // id_medcard
        // id_agegroup
        // id_address
    },
    {sequelize, modelName:'Pacients', tableName:'Pacients', timestamps:false}
);

Pacients.hasMany(Pacients, {foreignKey: 'id_parent'});
Pacients.belongsTo(Pacients, {foreignKey: 'id_parent'});

Authorization_info.hasOne(Pacients, {foreignKey: 'id_auth'});
Pacients.belongsTo(Authorization_info, {foreignKey: 'id_auth'});

Medical_cards.hasOne(Pacients, {foreignKey: 'id_medcard'});
Pacients.belongsTo(Medical_cards, {foreignKey: 'id_medcard'});

Age_group.hasMany(Pacients, {foreignKey: 'id_agegroup'});
Pacients.belongsTo(Age_group, {foreignKey: 'id_agegroup'});

Addresses.hasMany(Pacients, {foreignKey: 'id_address'});
Pacients.belongsTo(Addresses, {foreignKey: 'id_address'});

House_calls.init(
    {
        id:         {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        remark:     {type: DataTypes.STRING, allowNull:false}
        // id_pacient
    },
    {sequelize, modelName:'House_calls', tableName:'House_calls', timestamps:false}
);

Pacients.hasMany(House_calls, {foreignKey: 'id_pacient'});
House_calls.belongsTo(Pacients, {foreignKey: 'id_pacient'});

Types_of_appointments.init(
    {
        id:     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        name:   {type: DataTypes.STRING, allowNull:false}
    },
    {sequelize, modelName:'Types_of_appointments', tableName:'Types_of_appointments', timestamps:false}
);

Appointments.init(
    {
        id:                     {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
        remark:                 {type: DataTypes.STRING, allowNull:false}
        // id_type_of_appointment
        // id_shift
        // id_pacient
    },
    {sequelize, modelName:'Appointments', tableName:'Appointments', timestamps:false}
)

Types_of_appointments.hasMany(Appointments, {foreignKey: 'id_type_of_appointment'});
Appointments.belongsTo(Types_of_appointments, {foreignKey: 'id_type_of_appointment'});

Timetable.hasMany(Appointments, {foreignKey: 'id_shift'});
Appointments.belongsTo(Timetable, {foreignKey: 'id_shift'});

Pacients.hasMany(Appointments, {foreignKey: 'id_pacient'});
Appointments.belongsTo(Pacients, {foreignKey: 'id_pacient'});

// sequelize.sync({alter:true});

module.exports = {
    Types_of_analyzes, Card_status, Medical_cards, Test_results, Medcards_records, Analysis_norms,
    Norms_scores, Authorization_info, Doctors, Sectors, Addresses, Age_group, Pacients,
    Appointments, Timetable, House_calls, Types_of_shifts, Types_of_appointments
};