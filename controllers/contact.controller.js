const Contact = require("../models/Contact");
const catchAsync = require("../helpers/catchAsync");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

const create = catchAsync(async (req, res) => {
  const { firstname, lastname, email, phone, company, jobTitle, address } =
    req.body;

  const contact = await Contact.create({
    firstname,
    lastname,
    email,
    phone,
    company,
    jobTitle,
    address,
  });

  res.status(StatusCodes.ACCEPTED).redirect("/");
});

const getAll = catchAsync(async (req, res) => {
  const contacts = await Contact.find(req.query);
  res.status(StatusCodes.ACCEPTED).send(contacts);
});

const search = async (req, res) => {
  const { firstname, lastname, email } = req.query;

  if (!firstname && !lastname && !email) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Veuillez remplir au moins un champ de recherche.");
  }

  const searchCriteria = {};

  if (firstname) {
    searchCriteria.firstname = new RegExp(firstname, "i");
  }
  if (lastname) {
    searchCriteria.lastname = new RegExp(lastname, "i");
  }
  if (email) {
    searchCriteria.email = new RegExp(email, "i");
  }

  const contacts = await Contact.find(searchCriteria);

  res.render("searchContact", { contacts: contacts || [] });
};

const getById = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(StatusCodes.BAD_REQUEST).send("Format de l'ID invalide");
  }

  const contact = await Contact.findById(id);

  if (contact) {
    res.status(StatusCodes.ACCEPTED).send(contact);
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send("Contact inexistant dans la base de donnée");
  }
});

const updateById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email, phone, company, jobTitle, address } =
    req.body;

  const contact = await Contact.findByIdAndUpdate(
    id,
    {
      firstname,
      lastname,
      email,
      phone,
      company,
      jobTitle,
      address,
    },
    { new: true }
  );

  if (!contact) {
    return res.status(StatusCodes.NOT_FOUND).send("Contact non trouvé");
  }

  res.redirect("/"); // Redirige vers la page d'accueil après la mise à jour
});

const getContactForEdit = catchAsync(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(StatusCodes.NOT_FOUND).send("Contact non trouvé");
  }

  res.render("editContact", { contact });
});

const updateContact = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email, phone, company, jobTitle, address } =
    req.body;

  // Mettre à jour le contact
  const contact = await Contact.findByIdAndUpdate(
    id,
    { firstname, lastname, email, phone, company, jobTitle, address },
    { new: true } // Retourne le document mis à jour
  );

  if (!contact) {
    return res.status(StatusCodes.NOT_FOUND).send("Contact non trouvé");
  }

  // Rediriger vers la page d'accueil après la mise à jour
  res.redirect("/");
});

const getContactForDelete = catchAsync(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  // Vérifier si le contact existe
  if (!contact) {
    return res.status(StatusCodes.NOT_FOUND).send("Contact non trouvé");
  }

  res.render("deleteContact", { contact });
});

const deleteById = catchAsync(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (contact) {
    res.status(StatusCodes.ACCEPTED).redirect("/");
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send("Contact déjà supprimé de la base de donnée")
      .redirect("/");
  }
});

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  getContactForDelete,
  deleteById,
  search,
  getContactForEdit,
  updateContact,
};
