const { Router } = require("express");
const ConfirmedMatches = require("../models").confirmedMatch;
const auth = require("../auth/middleware");
const router = new Router();

router.post("/", auth, async (req, res) => {
  try {
    const newConfirmedMatch = await ConfirmedMatches.create(req.body);
    console.log(newConfirmedMatch.dataValues);
    res.status(201).send({
      message: "new Confirmed match",
      confirmedMatch: newConfirmedMatch,
    });
  } catch (error) {
    console.log("error: ", error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allConfirmedMatches = await ConfirmedMatches.findAll();
    res.status(200).json(allConfirmedMatches);
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = router;
