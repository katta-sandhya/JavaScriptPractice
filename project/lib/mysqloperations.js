const mysql = require('mysql2');
const mysqlObj = async() => {
   
    var pool  = mysql.createPool({
      connectionLimit : 20,
      host            : 'localhost',
      user            : 'root',
      password        : 'sandhya02',
      database        : 'collegeinfo'
    });
     
   return pool;
  }
module.exports=mysqlObj;

