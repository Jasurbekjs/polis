const { polisDB,  Sequelize } = require("../db");
// определяем модель User
const Polis = polisDB.define("polis", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true
  },
  date_reg: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  client: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  party: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  company_insurance: {
    type: Sequelize.STRING,
    allowNull: true
  },
  policy: {
    type: Sequelize.STRING,
    allowNull: true
  },
  tractor: {
    type: Sequelize.STRING,
    allowNull: true
  },
  custom_entry: {
    type: Sequelize.STRING,
    allowNull: true
  },
  custom_exit: {
    type: Sequelize.STRING,
    allowNull: true
  },
  mark: {
    type: Sequelize.STRING,
    allowNull: true
  },
  tech_pass: {
    type: Sequelize.STRING,
    allowNull: false
  },
  period: {
    type: Sequelize.STRING,
    allowNull: false
  },
  validity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sum: {
    type: Sequelize.STRING,
    allowNull: false
  },
  prize: {
    type: Sequelize.STRING,
    allowNull: false
  },
  policyholder: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pass: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true
  },
  creator: {
    type: Sequelize.STRING,
    allowNull: true
  },
  operator: {
    type: Sequelize.STRING,
    allowNull: true
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: true
  },
  reason: {
    type: Sequelize.STRING,
    allowNull: true
  },

},
{
  timestamps: true,
  updatedAt: true,
});

module.exports=Polis;
