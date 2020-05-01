"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      klasse: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.match);
  };
  return user;
};
