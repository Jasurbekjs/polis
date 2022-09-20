const { mainDB, oldDB,  Sequelize } = require("../db");
// определяем модель User
const Users = oldDB.define("users", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pass: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  token: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  token_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  session: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
},
{
  timestamps: false,
  updatedAt: false,
});

module.exports=Users;