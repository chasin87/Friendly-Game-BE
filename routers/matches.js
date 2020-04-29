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

module.exports = router;
