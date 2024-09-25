var express = require('express');
var router = express.Router();
const mysqlConnFun = require('../lib/mysqloperations');

router.post('/insert', function(req, res, next) {
    const { first_name, last_name, phone_number, email, password, gender, age, degree } = req.body;

    mysqlConnFun().then((poolObj) => {
        const insertQuery = 'INSERT INTO form (first_name, last_name, phone_number, email, password, gender, age, degree) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [first_name, last_name, phone_number, email, password, gender, age, degree];

        poolObj.query(insertQuery, values, (err, results) => {
            if (err) {
                console.error('Error executing MySQL insert query:', err);
                return res.status(500).json({ error: 'Database insert error' });
            }
            res.json({ message: 'Data inserted successfully', id: results.insertId });
        });
    }).catch((e) => {
        console.log(e);
        res.status(500).json({ error: 'Database connection error' });
    });
});

module.exports = router;
