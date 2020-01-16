const express = require("express");

const diseaseApi = require("../models/disease.js");

const diseaseRouter = express.Router();

diseaseRouter.get("/", (req, res) => {
  diseaseApi
    .getDiseases()
    .then(allDiseases => {
      res.json(allDiseases);
    })
    .catch(error => {
      console.log("Failed to retrieve all Diseases");
      console.log(error);
      res.send(error);
    });
});
diseaseRouter.get("/:id", (req, res) => {
  diseaseApi
    .getDiseaseById(req.params.id)
    .then(singleDisease => {
      res.json(singleDisease);
    })
    .catch(error => {
      console.log("Failed to retrieve disease by Id");
      console.log(error);
      res.send(error);
    });
});
diseaseRouter.post("/", (req, res) => {
  diseaseApi
    .createDisease(req.body)
    .then(diseaseCreated => {
      res.json(diseaseCreated);
    })
    .catch(error => {
      console.log("Failed to create Disease");
      console.log(error);
      res.send(error);
    });
});
diseaseRouter.delete("/:id", (req, res) => {
  diseaseApi
    .deleteDisease(req.params.id)
    .then(() => {
      res.send("Disease was deleted");
    })
    .catch(error => {
      console.log("Failed to delete disease");
      console.log(error);
      res.send(error);
    });
});
diseaseRouter.put("/:id", (req, res) => {
  diseaseApi
    .updateDisease(req.params.id, req.body)
    .then(updatedDisease => {
      res.json(updatedDisease);
    })
    .catch(error => {
      console.log("Failed to update disease");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  diseaseRouter
};
