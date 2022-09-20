const Polis = require('../models/polis');
const {Parser}=require('../functions/polis');
const { auth} = require('./general');
const { Op } = require("sequelize");
const {generatePDF}=require("../middlewares/pdf")
const { polisDB } = require('../db');
const { express, jsonParser } = require('./general');
const Clients = require("../models/clients");
const fs = require("fs");
const router = express.Router();

router.get("/notifications", async (req, res) => {
    let page=parseInt(req.query.page);
    let limit=parseInt(req.query.limit) || 10;
    let offset= page-1>0 ? ((page-1)*limit) : 0;

    delete req.query.page;
    delete req.query.limit;

    await Polis.findAndCountAll({where: req.query, limit: limit, offset:offset }).then(data=>{
        const totalPages=Math.ceil(data.count/limit);
        const response={
            "totalItems": data.count,
            "totalPages":totalPages,
            "data": data.rows
        }
        return res.send(response);
    });
});
router.post("/add",auth, async (req, res) => {
    if (!req.body.data)
        return res.send("Body is not sended !!!");
    let returnObject = {};
    let temp = 0;
    let text = req.body.data;
    Parser(returnObject, temp, text);
    res.send(returnObject);
})
router.post('/new',auth,async (req,res)=>{
    let polis=req.body.data;
    polis.creator = req.body.user.id;
    polis.operator = req.body.user.id;
    const saved=await new Polis(polis);
    saved.client=polis.client_id;
    await saved.save();
    return res.send("success");
})
router.delete('/:id',auth,async (req,res)=>{
    const polis = await Polis.destroy({ where: { id: req.params.id} });
    console.log(polis);
    res.send({status : true});
})
router.put('/:id',auth,async (req,res)=>{
    req.body.reason = `${(req.body.reason) ? `${req.body.reason} | ` : ''}${req.body.new_reason}`;
    await Polis.update(req.body,{
        where:{ id: req.params.id }
    },).then( async editPolis => {
        if(editPolis){
            res.status(200).send({'status': true,});
        } else {
            res.status(200).send({'status': false,});
        }
    });
})
router.post('/pdf',async (req,res)=>{

    let notification=req.body;
    let generate=generatePDF(notification);
    if(generate){
       generate.then(data=>{
           fs.unlink(data.path,(err)=>{
               if (err){
                   res.send(false);
               }else{
                   console.log("deleted")
               }
           })
           return res.send({content: data.content, fileName: data.fileName});
       })
    }else{
        res.send(false);
    }
})

module.exports = router;
