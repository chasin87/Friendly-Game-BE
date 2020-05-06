"use strict";

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
      matchRequestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  match.associate = function (models) {
    match.belongsTo(models.user);
    match.belongsTo(models.matchRequest);
  };
  return match;
};
