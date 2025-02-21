import sequelize from "./config/config.js";
sequelize.sync({ force: false }).then(() => {
    console.log("Database synced.");
});
