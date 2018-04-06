// require

const express = require("express");
const router = express.Router();
const db = require("../data/helpers/actionModel.js");

// handles routes that start with: /api/actions

router.get("/", (req, res) => {
  // get data
  db
    .get()
    // send the data
    .then(actions => {
      res.json(actions);
    })
    // send error if there is one
    .catch(error => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db
    .get(req.params.id)
    .then(actions => {
      res.json(actions);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  const action = req.body;
  if (!action.project_id || !action.description) {
    res.status(400).json({ error: "project_id AND description are Required" });
  } else if (typeof action.project_id !== "string") {
    res.status(400).json({ error: "project_id must be a typeof string" });
  } else if (typeof action.description !== "string") {
    res.status(400).json({ error: "description must be a typeof string" });
  } else if (action.project_id.length > 128 || action.description.length > 128) {
    res.status(400).json({ error: "max length is 128 characters" });
  } else {
  db
    .insert(action)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The actions information could not be retrieved." });
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  //const action = req;
  db
    .remove(id)
    .then(response => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const action = req.body;
  if (action.project_id === undefined && action.description === undefined) {
    res.status(400).json({ error: "project_id or description are required" });
  } else if (typeof action.project_id !== "string") {
    res.status(400).json({ error: "project_id is required" });
  } else if (
    action.project_id.length > 128 ||
    action.description.length > 128
  ) {
    res.status(400).json({ error: "The Max length is 128 characters" });
  } else {
    db
      .update(id, action)
      .then(count => {
        if (count > 0) {
          db
            .get(id)
            .then(action => {
              res.status(200).json(action);
            })
            .catch(error => {
              res.status(400).json(error);
            });
        } else {
          res.status(404).json({ errorMessage: "action not found" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  }
});

module.exports = router;
