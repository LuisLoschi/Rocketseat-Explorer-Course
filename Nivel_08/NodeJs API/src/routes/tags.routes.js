const { Router } = require("express");
 
const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router(); //Inicia o route

const tagsController = new TagsController();


tagsRoutes.get("/:user_id", tagsController.index);


module.exports = tagsRoutes; //exporta esse arquivo para ser acessado em qualquer outro arquivp