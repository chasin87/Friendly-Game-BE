"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

/**
 * - importing the User model here to seed data
 * - that way createdAt and updatedAt are added for us
 */

const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * using User.upsert & Promise.all to create users
     *
     * why:
     *
     * - allows us to run "npx sequelize-cli db:seed:all" multiple times
     * - without having to drop the database
     * - it also allows us to harcode the email and id we want
     * - we can now use these ids to seed related data in other seed files
     *
     * how .upsert works
     * - if a user with this email and id doesn't exist: create it
     * - if a user with this email and id does exist: update that user
     * - since we want to create multiple users this way we use Promise.all
     *
     * if you still get a: "ERROR: Validation error", while running this seed
     * - you might have a user with a different id that you're trying to give the same email
     * - you might have a user with a different email that you're trying to assign the same id
     *
     * how to solve the above error:
     *
     * - make sure the combination of id and email in this file are unique
     * - get rid of any duplicates by dropping the db, creating it again, migrating and seeding
     *
     * You can do this using:
     * npx sequelize-cli db:drop
     * npm run initdev (creates db, migrates & seeds)
     *
     */
    const users = await Promise.all([
      User.upsert({
        id: 1,
        name: "HYS",
        logo: "https://hyshaarlem.nl/wp-content/uploads/2019/09/HYS_LOGO.png",
        email: "hys@hys.com",
        password: bcrypt.hashSync("hys", SALT_ROUNDS),
        klasse: "3e Klasse",
        alert: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      User.upsert({
        id: 2,
        name: "DSK",
        logo:
          "https://media.hollandsevelden.nl/images/club_logo_van_voetbalvereniging_dsk_uit_haarlem.png",
        email: "dsk@dsk.com",
        password: bcrypt.hashSync("dsk", SALT_ROUNDS),
        klasse: "2e Klasse",
        alert: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);

    console.log(`SEEDED: ${users.length} users`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
