// Requires
const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const { jsonParser } = require('./routes/general')

const PORT=2000;
// Database
const { Sequelize, polisDB} = require('./db');

// Use
app.use(cors());
app.use(jsonParser);
//Routes
require('./startup/routes')(app);
// Start server
// синхронизация с бд, после успшной синхронизации запускаем сервер
polisDB.sync().then(()=>{
  http.listen(2000, () => {
    console.log('listening on *:'+PORT );
  });
}).catch(err=>console.log(err));
