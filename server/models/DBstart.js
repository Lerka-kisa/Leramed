const  {Sequelize, Model, sequelize} = require('../DB')
const {createGender, createCardStatus, createTypeOfAnalysis, createAgeGroup, createNormScore, createTypeOfShifts,
    createTypeOfAppointment, createAnalysisNorm, createMedicalCard, createAnalysisResult, createMedicalRecord,
    createAutorizationInfo, createDoctors, createSectors, createAddress, createTimetable, createPatient,
    createHouseCalls, createAppointments
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

        //10. Autorization_info
        createAutorizationInfo("Admin", "12345", "mail1", "phone1", "ADMIN")
        createAutorizationInfo("Doctor1", "12345", "mail2", "phone2", "DOCTOR")
        createAutorizationInfo("Doctor2", "12345", "mail3", "phone3", "DOCTOR")
        createAutorizationInfo("User1", "12345", "mail4", "phone4", "PATIENT")
        createAutorizationInfo("User2", "12345", "mail5", "phone5", "PATIENT")
        createAutorizationInfo("User3", "12345", "mail6", "phone6", "PATIENT")

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
        //2. Medical_cards
        createMedicalCard("U-1", "1")
        createMedicalCard("U-2", "1")
        createMedicalCard("U-3", "1")

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

        //11. Doctors
        createDoctors("2", "Раиса", "Игрунова", "Эмуальдовна", "терапевт", "Гы, фотка")
        createDoctors("3", "Наталья", "Царь", "Викторовна", "терапевт", "Га, фотка")
    })
    .then(()=> {
        //8. Analysis_result
        createAnalysisResult("1", "1", "4", 4.2, "2", "HELP ME")
        createAnalysisResult("1", "1", "3", 107, "2", "Hello")
        createAnalysisResult("2", "2", "17", 168, "3", "HELP ME")

        //9. Medical_records
        createMedicalRecord("1", "2022-01-02", "record ....", "kill me!")
        createMedicalRecord("1", "2022-04-08", "record22 ....", "2kill me!")
        createMedicalRecord("2", "2018-10-12", "record33 ....", "3kill me!")
        createMedicalRecord("2", "2022-01-02", "record44 ....", "4kill me!")
        createMedicalRecord("1", "2022-01-02", "record55 ....", "5kill me!")
        createMedicalRecord("1", "2022-12-10", "record66 ....", "6kill me!")

        //12. Sectors
        createSectors("1")
        createSectors("2")
        createSectors("1")
        createSectors("1")
    })
    .then(() => {
        //13. Addresses
        createAddress("1", "Брест","Советская", "33")
        createAddress("2", "Витебск","Студенецкая", "123")
        createAddress("3", "Гомель","50 лет СССР", "123")

        //15. Timetable
        createTimetable("2", "2", "2022-12-09")
        createTimetable("3", "1", "2022-01-09")
        createTimetable("2", "1", "2022-12-09")
    })
    .then(() => {
        //16. Patients
        createPatient("4", "1", "3", "Анна", "Трошко", "Николаевна", "2004-07-07", "2", "2", "43", "ОАО Белгорхимпром")
        createPatient("5", "2", "1", "Владимир", "Трошко", "Николаевич", "2011-07-14", "1", "3", "44", "ОАО БелгорхимпромГаз")
        createPatient("6", "3", "4", "Валерия", "Трошко", "Николаевна", "2002-01-20", "2", "2", "43", "ОАО БелгорхимпромПлюс")
    })
    .then(() => {
        //17. House_calls
        createHouseCalls("1", "1")
        createHouseCalls("2", "3")
        createHouseCalls("2", "4")
        createHouseCalls("1", "5")

        //19.Appointments
        createAppointments("1","1","2","2","1", "12:15")
        createAppointments("2","1","3","6","3", "16:15")
    })
    .catch(err => {console.log('Error!!!!DB is not connect(((:',err.message);});