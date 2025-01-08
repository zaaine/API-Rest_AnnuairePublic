const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  company: { type: String },
  jobTitle: { type: String },
  address: { type: String },
});

module.exports = mongoose.model("Contact", contactSchema);
