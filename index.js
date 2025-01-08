const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const { StatusCodes } = require("http-status-codes");
const contactRoutes = require("./routes/contact.routes");
const Contact = require("./models/Contact");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/carnet-adresses");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));

// Utiliser la route /contacts avant de définir les routes spécifiques.
app.use("/contacts", contactRoutes);

// Routes générales pour la page d'accueil ou autres fonctionnalités
app.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render("index", { contacts });
  } catch (e) {
    console.log(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Erreur interne");
  }
});

app.get("/createContact", async (req, res) => {
  const contacts = await Contact.find();
  res.render("createContact", { contacts });
});

app.get("/searchContact", async (req, res) => {
  const contacts = await Contact.find();
  res.render("searchContact", { contacts });
});

// Route de suppression
app.get("/contacts/:id/delete", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(StatusCodes.NOT_FOUND).send("Contact non trouvé");
    }
    res.render("deleteContact", { contact });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Erreur interne");
  }
});

// Page 404 si la route n'est pas trouvée
app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).send("Page non trouvée");
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.log(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Erreur interne");
});

app.listen(3000, () => {
  console.log("Application lancée sur le port 3000");
});
