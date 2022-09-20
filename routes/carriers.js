const Carriers = require('../models/carriers');
const { Op } = require("sequelize");
const {sequelize} = require('../db');

const { auth, express, jsonParser } = require('./general');
const router = express.Router();

router.get("/show", [ jsonParser, auth, ] , async (req, res) => {


});

module.exports = router;