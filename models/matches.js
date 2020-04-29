"use strict";
var moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define(
    "match",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        unique: true,
        allowNull: false,
      },
      side: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      matchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      request: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  match.associate = function (models) {
    match.belongsTo(models.user);
  };
  return match;
};
