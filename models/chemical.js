const mongoose = require("./connection.js");

const ChemicalSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

const chemicalCollection = mongoose.model("Sample", ChemicalSchema);

const getChemicals = () => {
  return chemicalCollection.find({});
};

const getChemicalbyId = id => {
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
  getChemicalbyId,
  createChemical,
  deleteChemical,
  updateChemical
};
