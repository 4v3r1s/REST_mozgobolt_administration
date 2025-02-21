const { DataTypes } = require("sequelize");
import sequelize from "../config/config.js";


const Csoport = sequelize.define("Csoport", {
  azonosito: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nev: { type: DataTypes.STRING(50), allowNull: false },
  csoport: { type: DataTypes.INTEGER, allowNull: false },
  hivatkozas: { type: DataTypes.STRING(150), allowNull: false },
  tizennyolc: { type: DataTypes.BOOLEAN, allowNull: true },
}, {
  tableName: "csoport",
  timestamps: false,
});

module.exports = Csoport;
