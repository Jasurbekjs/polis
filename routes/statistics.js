const Notifications = require('../models/notifications');
const Goods = require('../models/goods');
const Users = require('../models/users');

const { Op } = require("sequelize");
const {sequelize} = require('../db');

const { auth, express, jsonParser } = require('./general');
const router = express.Router();

router.post("/operator", [ jsonParser/*, auth*/, ] , async (req, res) => {
	let respData={};
	const search = {
		project: req.body.project,
		date_start: req.body.date_start,
		date_end: req.body.date_end,
		role: req.body.role,
	}
	let elasticSearch = {};

	if(search.date_start){ // есть дата от
	  if(search.date_end){ // есть дата до
	    elasticSearch.date_begin = {[Op.between]: [search.date_start, search.date_end]}
	  } else { // нет даты до
	    elasticSearch.date_begin = search.date_start;
	  }
	} else { // не даты от
	  if(search.date_end){
	    elasticSearch.date_begin = search.date_end;
	  } else {
	    elasticSearch.date_begin = new Date().toISOString().split('T')[0];
	  }
	}
	try{
		await Notifications.findAndCountAll({
			attributes:['id', 'status', 'creator_id'],
			where: elasticSearch,
			raw: true,
	    }).then( async statKaz => {
	    	respData.Statistics = statKaz;
			let setOperators=new Set();
			for(let i=0; i<respData.Statistics.rows.length; i++){
				setOperators.add(respData.Statistics.rows[i].creator_id);
		    }
		    respData.Statistics.Operators = [];
		    respData.Statistics.TotalGoods = 0;
		    respData.Statistics.Total = 0;

		    let getOperators = setOperators.values();
		    for(let i=0; i<setOperators.size; i++){ // Customs
		    	let tempId = getOperators.next().value
		    	let user = await Users.findOne({ where: { id: tempId } });
		    	respData.Statistics.Operators.push({id:tempId, count:0, goods:0, name: user.name, code_id: []});
		    }
		    for(let i=0; i<respData.Statistics.rows.length; i++){
		    	if(respData.Statistics.rows[i].status === 'Зарегистрировано'){
		    		for(let j=0; j<respData.Statistics.Operators.length; j++){
		    			if(respData.Statistics.rows[i].creator_id === respData.Statistics.Operators[j].id){
		    				respData.Statistics.Operators[j].count += 1;
		    				let goods = await Goods.count({where: { notification_id: respData.Statistics.rows[i].id}, distinct: true, col: 'good_id'});
		    				respData.Statistics.Operators[j].goods += Number(goods);
			    			respData.Statistics.TotalGoods += Number(goods);
			    		
		    			}
			    	}
			    	respData.Statistics.Total += 1;
			    }
			    
		    }
		    let documents = respData.Statistics.Operators.sort(function(a, b) {
		      return b.count - a.count;
		    });
		    let goods = respData.Statistics.Operators.sort(function(a, b) {
		      return b.goods - a.goods;
		    });
			res.status(200).send({
				'status': true, 
				'operators': documents,
				'goods': goods,
				'totalGoods': respData.Statistics.TotalGoods,
				'total': respData.Statistics.Total,
				'all': respData.Statistics
		    });
	    });



	} catch(e){
		console.log(e)
		res.status(200).send({'status': false, 'error': e});
	}
    
  	
});

module.exports = router;