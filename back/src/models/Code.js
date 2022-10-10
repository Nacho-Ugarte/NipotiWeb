const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("code", {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },  
    result:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
};