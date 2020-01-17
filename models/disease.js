const mongoose = require("./connection.js");

const DiseaseSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

const diseaseCollection = mongoose.model("Disease", DiseaseSchema);

const getDiseases = () => {
  return diseaseCollection.find({});
};

const getDiseaseById = id => {
  return diseaseCollection.findById(id);
};

const createDisease = diseaseObject => {
  return diseaseCollection.create(diseaseObject);
};

const deleteDisease = id => {
  return diseaseCollection.deleteOne({ _id: id });
};

const updateDisease = (id, updatedDiseaseObject) => {
  return diseaseCollection.updateOne({ _id: id }, updatedDiseaseObject);
};
module.exports = {
  getDiseases,
  getDiseaseById,
  createDisease,
  deleteDisease,
  updateDisease
};
