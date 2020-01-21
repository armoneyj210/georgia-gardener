const mongoose = require("./connection.js");

const PlantSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  disease: String
});

const plantCollection = mongoose.model("Plant", PlantSchema);

const getPlants = () => {
  return plantCollection.find({});
};

const getPlantById = id => {
  return plantCollection.findById(id);
};

const createPlant = plantObject => {
  return plantCollection.create(plantObject);
};

const deletePlant = id => {
  return plantCollection.deleteOne({ _id: id });
};

const updatePlant = (id, updatedPlantObject) => {
  return plantCollection.updateOne({ _id: id }, updatedPlantObject);
};
module.exports = {
  getPlants,
  getPlantById,
  createPlant,
  deletePlant,
  updatePlant
};
