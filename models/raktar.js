const { DataTypes } = require("sequelize");
import sequelize from "../config/config.js";


const Raktar = sequelize.define("Raktar", {
  azonosito: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rendszam: { type: DataTypes.TEXT, allowNull: false },
  megjegyzes: { type: DataTypes.TEXT, allowNull: false },
}, {
  tableName: "raktar",
  timestamps: false,
});

module.exports = Raktar;
