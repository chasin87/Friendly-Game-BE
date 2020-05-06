const { Router } = require("express");
const MatchRequests = require("../models").matchRequest;
const auth = require("../auth/middleware");
const User = require("../models").user;
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
    const allMatchRequests = await MatchRequests.findAll({
      where: { userIdHome: req.params.id },
    });
    res.status(200).json(allMatchRequests);
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = router;

///request naar fetch naar DB is gelukt
// nu de wedstrijden displayen onder account
