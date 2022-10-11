const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    dni: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telephone:{
      type: DataTypes.STRING,
      allowNull:true
    },
    cargas: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
    
  });
};