const { Router } = require("express");
const MatchRequests = require("../models").matchRequest;
const auth = require("../auth/middleware");
const router = new Router();

router.post("/", auth, async (req, res) => {
  try {
    const newMatchRequest = await MatchRequests.create(req.body);
    console.log(newMatchRequest.dataValues);
    res
      .status(201)
      .send({ message: "new Match request", matchRequest: newMatchRequest });
  } catch (error) {
    console.log("error: ", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const match = await MatchRequests.findOne({
      where: { userIdHome: req.params.id },
    });
    res.status(200).json(match);
  } catch (e) {
    console.log("error: ", e);
  }
});
module.exports = router;

///request naar fetch naar DB is gelukt
// nu de wedstrijden displayen onder account
