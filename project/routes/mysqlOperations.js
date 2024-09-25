var express = require('express');
var router = express.Router();
const mysqlConnFun = require('../lib/mysqloperations')
/* GET home page. */
router.get('/find', function(req, res, next) {
 // res.render('details', { title: 'Express' });
 mysqlConnFun().then((poolObj) => {
    poolObj.query('SELECT * FROM form', (err, results) => {
        // Release the connection back to the pool
        

        if (err) {
            console.error('Error executing MySQL query:', err);
            //res.status(500).send('Database query error');
            return res.status(500).json({ error: 'Database query error'});
        }

        // Send the results as the response
       
        res.json(results);
    });
 }).catch((e) => {
    console.log(e);
 })

});

module.exports = router;
