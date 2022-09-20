// const usersRoute = require('../routes/users');
// const basesRoute = require('../routes/bases');
// const clientsRoute = require('../routes/clients');
// const statisticsRoute = require('../routes/statistics');
const polisRoute = require('../routes/polis');

module.exports = function(app){
	// app.use('/api/users', usersRoute);
	// app.use('/api/bases', basesRoute);	
	// app.use('/api/clients', clientsRoute);
	// app.use('/api/statistics', statisticsRoute);
	app.use('/api/polis', polisRoute);
}
