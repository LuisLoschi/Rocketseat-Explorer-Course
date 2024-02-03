const { Router } = require("express");

const UsersController = require("../controllers/UsersController"); // Chama o controller

const usersRoutes = Router(); //Inicia o route

const usersController = new UsersController();

//Requisição POST
usersRoutes.post("/", usersController.create);

//Requisição PUT
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes; //exporta esse arquivo para ser acessado em qualquer outro arquivp