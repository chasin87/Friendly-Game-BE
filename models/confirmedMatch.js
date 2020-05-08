"use strict";
module.exports = (sequelize, DataTypes) => {
  const confirmedMatch = sequelize.define(
    "confirmedMatch",
    {
      homeTeam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      awayTeam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      matchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    {}
  );
  confirmedMatch.associate = function (models) {
    confirmedMatch.hasMany(models.matchRequest);
  };
  return confirmedMatch;
};
