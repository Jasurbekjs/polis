const { Sequelize, sequelize} = require("../db");


const Goods = sequelize.define("goods", {
  good_id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  notification_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  consignment_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  tnved_code: {
    type: Sequelize.STRING,
    allowNull: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  place: {
    type: Sequelize.STRING,
    allowNull: true
  },
  package: {
    type: Sequelize.STRING,
    allowNull: true
  },
  brutto: {
    type: Sequelize.STRING,
    allowNull: true
  },
  unit: {
    type: Sequelize.STRING,
    allowNull: true
  },
  unit_value: {
    type: Sequelize.STRING,
    allowNull: true
  },
  amount: {
    type: Sequelize.STRING,
    allowNull: true
  },
  currency: {
    type: Sequelize.STRING,
    allowNull: true
  },
  declaration: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  createdAt: false,
  updatedAt: false
});

module.exports=Goods;
