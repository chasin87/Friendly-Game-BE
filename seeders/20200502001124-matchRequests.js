"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "matchRequests",
      [
        {
          homeTeam: "HYS",
          awayTeam: "DSK",
          date: "2020-11-07",
          time: "14:30",
          side: "Home",
          userIdHome: 1,
          userIdAway: 2,
          matchId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          homeTeam: "DSK",
          awayTeam: "HYS",
          date: "2020-09-12",
          time: "12:30",
          side: "Home",
          userIdHome: 2,
          userIdAway: 1,
          matchId: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("matchRequests", null, {});
  },
};
