require('dotenv').config();
const {createPool} = require('mysql');
// create connection varaiable
let connection = createPool({
    host:process.env.dbHost,
    user:process.env.dbUser,
    password:process.env.dbPwd,
    port:process.env.dbPort,
    database:process.env.dbName,
    multipleStatments:true
});
module.ecport = connection;