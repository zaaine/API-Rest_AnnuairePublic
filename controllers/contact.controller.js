const Contact = require("../models/Contact");
const catchAsync = require("../helpers/catchAsync");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

const create = catchAsync(async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(StatusCodes.ACCEPTED).send(contact);
});

const getAll = catchAsync(async (req, res) => {
  const contacts = await Contact.find(req.query);
  res.status(StatusCodes.ACCEPTED).send(contacts);
});

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
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (contact) {
    res.status(StatusCodes.ACCEPTED).send(contact);
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send("Contact non modifié car non trouvé dans la base de donnée");
  }
});

const deleteById = catchAsync(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (contact) {
    res.status(StatusCodes.ACCEPTED).send(contact);
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send("Contact déjà supprimé de la base de donnée");
  }
});

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
