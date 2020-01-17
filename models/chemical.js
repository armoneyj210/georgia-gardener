const mongoose = require("./connection.js");

const ChemicalSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

const chemicalCollection = mongoose.model("Chemical", ChemicalSchema);

const getChemicals = () => {
  return chemicalCollection.find({});
};

const getChemicalById = id => {
  return chemicalCollection.findById(id);
};

const createChemical = chemicalObject => {
  return chemicalCollection.create(chemicalObject);
};

const deleteChemical = id => {
  return chemicalCollection.deleteOne({ _id: id });
};

const updateChemical = (id, updatedChemicalObject) => {
  return chemicalCollection.updateOne({ _id: id }, updatedChemicalObject);
};
module.exports = {
  getChemicals,
  getChemicalById,
  createChemical,
  deleteChemical,
  updateChemical
};
