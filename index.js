const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const contactRoutes = require("./routes/contact.routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/carnet-adresses");

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/contacts", contactRoutes);

app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).send("Page non trouvée");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR);
});

app.listen(3000, () => {
  console.log("Application lancée sur le port 3000");
});
