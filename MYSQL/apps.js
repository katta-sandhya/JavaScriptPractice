const {createPool

}      = require('mysql');
const cTable = require('console.table');
const pool= createPool({
    host:"localhost",
    user: "root",
    password: "sandhya02",
    database:"examples",
    connectionLimit: 10

})

pool.query("Select * from students", (err, result, fields) => {
    if(err){
        return console.log(err);
    }
    return console.table(result);
});
pool.query('SELECT * FROM students WHERE `fname` = "sandhya"', function (error, results, fields) {
    if(error){
        return console.log(error);
    }
    return console.table(results);
  });






