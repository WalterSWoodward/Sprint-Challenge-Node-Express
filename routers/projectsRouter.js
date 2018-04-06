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
  console.log(req.body)
  switch (project.name) {
    case undefined:
      res.status(400).json({ error: "name is required" });
    case (Number(project.name)): // can't use bangers in switch statements???
      res.status(400).json({ error: "name must be a typeof string" });
      break;
    // Not sure how to implement both project.name and project.description base cases when the default needs to
    // the same function...
    default:

      // break;
  // }
  // switch (project.description) {
  //   case !project.description:
  //     res.status(400).json({ error: "description is required" });
  //     break;
  //   case typeof project.description !== 'string':
  //     res.status(400).json({ error: "description must be a typeof string" });
  //     break;
  //   case project.description.length > 128:
  //     res.status(400).json({ error: "The Max length is 128 characters" });
  //     break;
  //   default:
  

  // if/else approach:
  // if (project.name === undefined && project.description === undefined) {
  //   res.status(400).json({ error: "name or description is required" });
  // } else if (project.name && typeof project.name !== "string") {
  //     res.status(400).json({ error: "name must be a typeof string" });
  // } else if (project.name && project.name.length > 128) {
  //     res.status(400).json({ error: "The Max length is 128 characters" });
  // } else if (project.description && typeof project.description !== "string") {
  //     res.status(400).json({ error: "description must be a typeof string" });
  // } else if (project.description && project.description.length > 128) {
  //     res.status(400).json({ error: "The Max length is 128 characters" });
  // } else {
    db
    .update(id, project)
    .then(response => {
      console.log('response', response)
        if (response === undefined) res.status(404).json({error: "That project does not exist"});
        else {
            db.get(id)
            .then(proj => {
                res.status(200).json(proj);
            })
            .catch(error => {
                res.status(400).json({error: "There was an error retrieving the project"});
            })
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error updating the project"});
    })
  }
})

module.exports = router;
