require("express-async-errors"); //Biblioteca de tratamento de erros
const AppError = require("./utils/AppError");

const express = require("express"); //Chama o framework

const routes = require("./routes");

const migrationsRun = require("./database/sqlite/migrations") //importa a db

migrationsRun(); //executa banco de dados

const app = express(); //Inicia express
app.use(express.json()); //Request body: estilo de chamada da aplicação = JSON

app.use(routes); //Iniciar a aplicação com as rotas desse arquivo


//Tratamento de erros
app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal serve error"
    });
});

const PORT = 3333; //Endereço de requisição
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));