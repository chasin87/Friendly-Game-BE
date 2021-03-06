"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "confirmedMatches",
      [
        {
          homeTeam: "HYS",
          awayTeam: "DSK",
          date: "2020-11-07",
          time: "14:30",
          matchId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          homeTeam: "DSK",
          awayTeam: "HYS",
          date: "2020-09-12",
          time: "12:30",
          matchId: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("confirmedMatches", null, {});
  },
};
