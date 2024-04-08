const { Router } = require("express");
 
const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router(); //Inicia o route

const tagsController = new TagsController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");



tagsRoutes.get("/", ensureAuthenticated, tagsController.index);


module.exports = tagsRoutes; //exporta esse arquivo para ser acessado em qualquer outro arquivp