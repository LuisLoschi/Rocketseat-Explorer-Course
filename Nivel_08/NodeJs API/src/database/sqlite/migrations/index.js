const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");

async function migrationsRun() {
    //Definir as tabelas
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection()
    .then(db => db.exec(schemas)) //executa os schemas
    .catch(error => console.error(error));
}

module.exports = migrationsRun;