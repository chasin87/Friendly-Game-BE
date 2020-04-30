const { Router } = require("express");
const Matches = require("../models").match;
const auth = require("../auth/middleware");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allMatches = await Matches.findAll();
    res.status(200).json(allMatches);
  } catch (e) {
    console.log("error: ", e);
  }
});

//Post Create a Match

router.post("/", auth, async (req, res) => {
  try {
    console.log("what is req.body", req.body);
    const newMatch = await Matches.create(req.body);
    console.log(newMatch.dataValues);
    res.status(201).send({ message: "Create New Match", match: newMatch });
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = router;
