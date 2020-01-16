const express = require("express");

const plantApi = require("../models/plant.js");

const plantRouter = express.Router();

plantRouter.get("/", (req, res) => {
  plantApi
    .getPlants()
    .then(allPlants => {
      res.json(allPlants);
    })
    .catch(error => {
      console.log("Failed to retrieve all Plants");
      console.log(error);
      res.send(error);
    });
});
plantRouter.get("/:id", (req, res) => {
  plantApi
    .getPlantbyId(req.params.id)
    .then(singlePlant => {
      res.json(singlePlant);
    })
    .catch(error => {
      console.log("Failed to retrieve plant by Id");
      console.log(error);
      res.send(error);
    });
});
plantRouter.post("/", (req, res) => {
  plantApi
    .createPlant(req.body)
    .then(plantCreated => {
      res.json(plantCreated);
    })
    .catch(error => {
      console.log("Failed to create Plant");
      console.log(error);
      res.send(error);
    });
});
plantRouter.delete("/:id", (req, res) => {
  plantApi
    .deletePlant(req.params.id)
    .then(() => {
      res.send("Plant was deleted");
    })
    .catch(error => {
      console.log("Failed to delete plant");
      console.log(error);
      res.send(error);
    });
});
plantRouter.put("/:id", (req, res) => {
  plantApi
    .updatePlant(req.params.id, req.body)
    .then(updatedPlant => {
      res.json(updatedPlant);
    })
    .catch(error => {
      console.log("Failed to update plant");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  plantRouter
};
