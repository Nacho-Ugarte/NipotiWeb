const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    dni: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    celular:{
      type: DataTypes.STRING,
      allowNull:true
    },
    cargas: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
    
  });
};