"use strict";
module.exports = (sequelize, DataTypes) => {
  const matchRequest = sequelize.define(
    "matchRequest",
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
      side: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userIdHome: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userIdAway: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      matchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  matchRequest.associate = function (models) {
    matchRequest.hasMany(models.match);
    matchRequest.belongsToMany(models.user, {
      through: "match",
      foreignKey: "userId",
    });
  };
  return matchRequest;
};
