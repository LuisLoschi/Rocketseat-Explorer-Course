const sqlite3 = require("sqlite3"); //driver de conexão
const sqlite = require("sqlite"); //fazs conexão
const path = require("path"); // resolve os caminhos dos arquivos

async function sqliteConnection() {
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });
    
    return database;
}

module.exports = sqliteConnection;