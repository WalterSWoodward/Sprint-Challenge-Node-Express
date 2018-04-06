// require

const express = require("express");
const router = express.Router();
const db = require("../data/helpers/projectModel.js");

// handles routes that start with: /api/projects

router.get("/", (req, res) => {
  // get data
  db
    .get()
    // send the data
    .then(projects => {
      res.json(projects);
    })
    // send error if there is one
    .catch(error => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db
    .get(req.params.id)
    .then(projects => {
      res.json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  const project = req.body;
  if (!project.name || !project.description) {
    res.status(400).json({ error: "name AND description are Required" });
  } else if (typeof project.name !== "string") {
    res.status(400).json({ error: "name must be a typeof string" });
  } else if (typeof project.description !== "string") {
    res.status(400).json({ error: "description must be a typeof string" });
  } else if (project.name.length > 128 || project.description.length > 128) {
    res.status(400).json({ error: "max length is 128 characters" });
  } else {
    db
      .insert(project)
      .then(response => {
        res.status(201).json(response);
      })
      .catch(error => {
        res
          .status(500)
          .json({ error: "The projects information could not be retrieved." });
      });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  //const project = req;
  db
    .remove(id)
    .then(response => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const project = req.body;
  if (project.name === undefined && project.description === undefined) {
    res.status(400).json({ error: "name or description is required" });
  } else if (typeof project.name !== "string") {
    res.status(400).json({ error: "name must be a typeof string" });
  } else if (typeof project.description !== "string") {
    res.status(400).json({ error: "description must be a typeof string" });
  } else if (project.name.length > 128 || project.description.length > 128) {
    res.status(400).json({ error: "The Max length is 128 characters" });
  } else {
    db
      .update(id, project)
      .then(count => {
        if (count > 0) {
          db
            .get(id)
            .then(project => {
              res.status(200).json(project);
            })
            .catch(error => {
              res.status(400).json(error);
            });
        } else {
          res.status(404).json({ errorMessage: "project not found" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  }
});

module.exports = router;
