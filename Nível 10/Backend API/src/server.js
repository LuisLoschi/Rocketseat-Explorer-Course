require("express-async-errors"); //Biblioteca de tratamento de erros

const AppError = require("./utils/AppError");
const migrationsRun = require("./database/sqlite/migrations") //importa a db
const uploadConfig = require("./config/upload");

const express = require("express"); //Chama o framework
const routes = require("./routes");
const cors = require("cors")

migrationsRun(); //executa banco de dados

const app = express(); //Inicia express
app.use(express.json()); //Request body: estilo de chamada da aplicação = JSON
app.use(cors()); //Integração backend e frontend

app.use("/files", express.static(uploadConfig.UPLOAD_FOLDER)); //Pega as fotos do banco de dados

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