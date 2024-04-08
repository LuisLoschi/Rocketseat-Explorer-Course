const { Router } = require("express");
 
const NotesController = require("../controllers/NotesController"); // Chama o controller

const notesRoutes = Router(); //Inicia o route

const notesController = new NotesController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/", notesController.index);


module.exports = notesRoutes; //exporta esse arquivo para ser acessado em qualquer outro arquivp