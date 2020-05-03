"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "matches",
      [
        {
          id: 1,
          name: "HYS",
          date: "2020-08-07",
          time: "14:30",
          side: "Home",
          userId: 1,
          matchId: 1,
          matchRequestId: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "DSK",
          date: "2015-08-07",
          time: "13:30",
          side: "Away",
          userId: 2,
          matchId: 2,
          matchRequestId: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("matches", null, {});
  },
};
//Bezig met the matchrequest model enz created, route maken om the posten met send request button
