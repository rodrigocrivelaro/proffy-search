const DataBase = require('./db');
const createProffy = require('./createProffy');

DataBase.then(async (db) => {
    proffyValue = {
        name: "Rodrigo Crivelaro",
        avatar: "https://avatars0.githubusercontent.com/u/10005368?s=460&u=6f50a3364b1bbf68304ed7e8735d69f9d4874fa5&v=4",
        whatsapp: "16992039785",
        bio: "Sou mestre Jedi e amante de motorcycles...",
    };

    classValue = {
        subject: 2,
        cost: "7000,00",
        // o id do proffy virá do bd
    };

    classScheduleValues = [
        // class_id virá do bd
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        }
    ];

    // Incluir os professores
    //await createProffy(db,{proffyValue, classValue, classScheduleValues});

    // Consultar os dados inseridos
    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys);
    
    // Todas as classes
    // const selectedClasses = await db.all("SELECT * FROM classes");
    // console.log(selectedClasses);
    
    // Todas as class_schedule
    // const selectedClasseSchedule = await db.all("SELECT * FROM class_schedule");
    // console.log(selectedClasseSchedule);

    // Consultar as classes de um determinado proffy e trazer junto os dados do proffy
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 4;
    `);
    // console.log(selectClassesAndProffys);

    //Consulta por horário. O horário escolhido deve estar no intervalo do horário do professor
    const selectClassesSchedules = await db.all(`
        SELECT cs.*
        FROM class_schedule cs
        WHERE cs.class_id = 1
        AND cs.weekday = "0"
        AND cs.time_from <=850 AND cs.time_to > 850
    `);
    console.log(selectClassesSchedules);
})