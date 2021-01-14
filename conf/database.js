const mysql = require('mysql2')
const pool = mysql.createPool(
                            {host:"localhost",
                            user:"photoapp",
                            password:"photo1221@",
                            database:"csc317db",
                            debug:false});

const promisePool = pool.promise();
module.exports = promisePool;