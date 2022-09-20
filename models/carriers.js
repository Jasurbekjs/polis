const { Sequelize, sequelize} = require("../db");


const Carriers = sequelize.define("carriers", {
  carrier_id: {
    type: Sequelize.INTEGER(7),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  region: {
    type: Sequelize.STRING,
    allowNull: true
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  street: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  createdAt: false,
  updatedAt: false
});

module.exports=Carriers;