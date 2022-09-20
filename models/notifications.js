const { Sequelize, sequelize} = require("../db");


const Notifications = sequelize.define("notifications", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true
  },
  code_astana: {
    type: Sequelize.STRING,
    allowNull: true
  },
  client: {
    type: Sequelize.STRING,
    allowNull: true
  },
  date_begin: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  time_begin: {
    type: Sequelize.TIME,
    allowNull: true
  },
  date_reg: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  time_reg: {
    type: Sequelize.TIME,
    allowNull: true
  },
  date_xmll: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  party: {
    type: Sequelize.STRING,
    allowNull: true
  },
  export_country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  destination_country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  type_transportation: {
    type: Sequelize.STRING,
    allowNull: true
  },
  key_asycuda: {
    type: Sequelize.STRING,
    allowNull: true
  },
  customs_departure: {
    type: Sequelize.STRING,
    allowNull: true
  },
  customs_destination: {
    type: Sequelize.STRING,
    allowNull: true
  },
  transport_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  carrier_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  driver_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  creator_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  operator_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  corrections: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  notes: {
    type: Sequelize.STRING,
    allowNull: true
  },
  required_info: {
    type: Sequelize.STRING,
    allowNull: true
  },
  otgr_spec: {
    type: Sequelize.STRING,
    allowNull: true
  },
  code_guarantee: {
    type: Sequelize.STRING,
    allowNull: true
  },
  guarantee_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  general_sum: {
    type: Sequelize.STRING,
    allowNull: true
  },
  general_currency: {
    type: Sequelize.STRING,
    allowNull: true
  },
  general_brutto: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ____________: {
    type: Sequelize.STRING,
    allowNull: true
  },


},{
  createdAt: false,
  updatedAt: false
});

module.exports=Notifications;