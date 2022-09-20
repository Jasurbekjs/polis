const Sequelize = require("sequelize");

const polisDB = new Sequelize("gbh_polis", "hestiaJas_gbh", "hestiaJas_gbh13", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

module.exports = {
  polisDB,
  Sequelize,
};