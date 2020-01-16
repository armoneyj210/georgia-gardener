const express = require("express");

const chemicalApi = require("../models/chemical.js");

const chemicalRouter = express.Router();

chemicalRouter.get("/", (req, res) => {
  chemicalApi
    .getChemicals()
    .then(allChemicals => {
      res.json(allChemicals);
    })
    .catch(error => {
      console.log("Failed to retrieve all Chemicals");
      console.log(error);
      res.send(error);
    });
});
chemicalRouter.get("/:id", (req, res) => {
  chemicalApi
    .getChemicalById(req.params.id)
    .then(singleChemical => {
      res.json(singleChemical);
    })
    .catch(error => {
      console.log("Failed to retrieve chemical by Id");
      console.log(error);
      res.send(error);
    });
});
chemicalRouter.post("/", (req, res) => {
  chemicalApi
    .createChemical(req.body)
    .then(chemicalCreated => {
      res.json(chemicalCreated);
    })
    .catch(error => {
      console.log("Failed to create Chemical");
      console.log(error);
      res.send(error);
    });
});
chemicalRouter.delete("/:id", (req, res) => {
  chemicalApi
    .deleteChemical(req.params.id)
    .then(() => {
      res.send("Chemical was deleted");
    })
    .catch(error => {
      console.log("Failed to delete chemical");
      console.log(error);
      res.send(error);
    });
});
chemicalRouter.put("/:id", (req, res) => {
  chemicalApi
    .updateChemical(req.params.id, req.body)
    .then(updatedChemical => {
      res.json(updatedChemical);
    })
    .catch(error => {
      console.log("Failed to update chemical");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  chemicalRouter
};
