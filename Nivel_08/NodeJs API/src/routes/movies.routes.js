const { Router } = require("express");

const MovieController = require("../controllers/MovieController"); // Chama o controller

const moviesRoutes = Router(); //Inicia o route

const moviesController = new MovieController();

//Requisições
moviesRoutes.post("/:user_id", moviesController.create);

moviesRoutes.get("/:id", moviesController.show);

moviesRoutes.delete("/:id", moviesController.delete);

moviesRoutes.get("/", moviesController.index);

module.exports = moviesRoutes; //exporta esse arquivo para ser acessado em qualquer outro arquivp'