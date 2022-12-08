const  {Sequelize, Model, sequelize} = require('../DB')
const {createGender, createCardStatus, createTypeOfAnalysis, createAgeGroup, createNormScore, createTypeOfShifts,
    createTypeOfAppointment, createAnalysisNorm
} = require("./funcDBstart");


sequelize.authenticate()
    .then(() => {console.log('Hurray!!! You are connected)))');})
    .then(() => {
        //1. Card_status
        createCardStatus("В регистратуре");
        createCardStatus("У врача");
        createCardStatus("У пациента");

        //3. Type_of_analyzes
        createTypeOfAnalysis("Сахар в крови");
        createTypeOfAnalysis("Железо в крови");
        createTypeOfAnalysis("Халестерин");
        createTypeOfAnalysis("Пульс");

        //4. Age_group
        createAgeGroup("от 0 до 1 года");
        createAgeGroup("от 1 до 3 лет");
        createAgeGroup("от 3 до 6 лет");
        createAgeGroup("от 6 до 14 лет");
        createAgeGroup("от 14 до 18 лет");

        //5. Gender
        createGender("Мужчина");
        createGender("Женщина");

        //6.Norms_scores
        createNormScore("Ниже нормы");
        createNormScore("Норма");
        createNormScore("Выше нормы");

        //14.Types_of_shifts
        createTypeOfShifts("1 смена (8-12)","08:00", "12:00" );
        createTypeOfShifts("2 смена (12-16)","12:00", "16:00" );
        createTypeOfShifts("3 смена (16-20)","16:00", "20:00" );

        //18.Types_of_appointments
        createTypeOfAppointment("первичный");
        createTypeOfAppointment("вторичный");
        createTypeOfAppointment("медосмотр");
        createTypeOfAppointment("день здорового ребёнка");
    })
    .then(()=>{
        //7.Analysis_norms
            //Сахар у мальчиков
        createAnalysisNorm("1","1","1", 2.8, 5.6, "ммоль/л")
        createAnalysisNorm("1","1","2", 2.8, 5.6, "ммоль/л")
        createAnalysisNorm("1","1","3", 2.8, 5.6, "ммоль/л")
        createAnalysisNorm("1","1","4", 2.8, 5.6, "ммоль/л")
        createAnalysisNorm("1","1","5", 4.1, 5.9, "ммоль/л")
            //Сахар у девочек
        createAnalysisNorm("1","2","1", 2.8, 5.6, "ммоль/л")
        createAnalysisNorm("1","2","2", 2.8, 5.6, "ммоль/л")
        createAnalysisNorm("1","2","3", 2.8, 5.6, "ммоль/л")
        createAnalysisNorm("1","2","4", 2.8, 5.6, "ммоль/л")
        createAnalysisNorm("1","2","5", 4.1, 5.9, "ммоль/л")
            //Железо у мальчиков
        createAnalysisNorm("2","1","1", 107, 141, "г/л")
        createAnalysisNorm("2","1","2", 100, 140, "г/л")
        createAnalysisNorm("2","1","3", 100, 140, "г/л")
        createAnalysisNorm("2","1","4", 115, 150, "г/л")
        createAnalysisNorm("2","1","5", 120, 166, "г/л")
            //Железо у девочек
        createAnalysisNorm("2","2","1", 107, 141, "г/л")
        createAnalysisNorm("2","2","2", 100, 140, "г/л")
        createAnalysisNorm("2","2","3", 100, 140, "г/л")
        createAnalysisNorm("2","2","4", 115, 150, "г/л")
        createAnalysisNorm("2","2","5", 115, 153, "г/л")
            //Халестерин у мальчиков
        createAnalysisNorm("3","1","1", 2.95, 5.25, "ммоль/л")
        createAnalysisNorm("3","1","2", 2.95, 5.25, "ммоль/л")
        createAnalysisNorm("3","1","3", 2.95, 5.25, "ммоль/л")
        createAnalysisNorm("3","1","4", 3.13, 5.23, "ммоль/л")
        createAnalysisNorm("3","1","5", 3.08, 5.10, "ммоль/л")
            //Халестерин у девочек
        createAnalysisNorm("3","2","1", 2.90, 5.18, "ммоль/л")
        createAnalysisNorm("3","2","2", 2.90, 5.18, "ммоль/л")
        createAnalysisNorm("3","2","3", 2.90, 5.30, "ммоль/л")
        createAnalysisNorm("3","2","4", 2.26, 5.20, "ммоль/л")
        createAnalysisNorm("3","2","5", 3.21, 5.18, "ммоль/л")
            //Пульс у мальчиков
        createAnalysisNorm("4","1","1", 120, 135, "ударов")
        createAnalysisNorm("4","1","2", 120, 125, "ударов")
        createAnalysisNorm("4","1","3", 105, 110, "ударов")
        createAnalysisNorm("4","1","4", 90, 95, "ударов")
        createAnalysisNorm("4","1","5", 72, 80, "ударов")
            //Пульс у девочек
        createAnalysisNorm("4","2","1", 120, 135, "ударов")
        createAnalysisNorm("4","2","2", 120, 125, "ударов")
        createAnalysisNorm("4","2","3", 105, 110, "ударов")
        createAnalysisNorm("4","2","4", 90, 95, "ударов")
        createAnalysisNorm("4","2","5", 72, 80, "ударов")

    })
    .catch(err => {console.log('Error!!!!DB is not connect(((:',err.message);});