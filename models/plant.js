const mongoose = require("./connection.js");

const PlantSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  diseases: {
    name: ""
  }
});

const plantCollection = mongoose.model("Sample", PlantSchema);

const getPlants = () => {
  return plantCollection.find({});
};

const getPlantbyId = id => {
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
  getPlantbyId,
  createPlant,
  deletePlant,
  updatePlant
};
