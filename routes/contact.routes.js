const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");

// Route de recherche des contacts
router.get("/search", contactController.search);

// Routes liées aux contacts
router.post("/", contactController.create); // Créer un contact
router.get("/", contactController.getAll); // Lister tous les contacts
router.get("/:id", contactController.updateContact); // Route pour afficher le formulaire de modification
router.get("/:id/edit", contactController.getContactForEdit); // Route pour traiter la mise à jour
router.patch("/:id", contactController.updateById); // Mettre à jour un contact
router.delete("/:id", contactController.deleteById); // Supprimer un contact
router.get("/:id/delete", contactController.getContactForDelete); // Afficher la confirmation de suppression

router.get("/:id", contactController.getById); // Afficher un contact par ID
module.exports = router;
