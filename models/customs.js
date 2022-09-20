const { Sequelize, sequelize, oldDB, mainDB} = require("../db");


const Customs = sequelize.define("customs", {
  custom_id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  code: {
    type: Sequelize.STRING,
    allowNull: true
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  createdAt: false,
  updatedAt: false
});

module.exports=Customs;
