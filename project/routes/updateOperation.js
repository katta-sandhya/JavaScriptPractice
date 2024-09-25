var express = require('express');
var router = express.Router();
const mysqlConnFun = require('../lib/mysqloperations');

router.put('/update', function(req, res, next) {
   
    const { id, first_name } = req.body;

    mysqlConnFun().then((poolObj) => {
        const updateQuery = 'UPDATE form SET first_name = ? WHERE id = ?';
        const values = [first_name, id];

        poolObj.query(updateQuery, values, (err, results) => {
            if (err) {
                console.error('Error executing MySQL update query:', err);
                return res.status(500).json({ error: 'Database update error' });
            }
            // res.redirect('/success');
            res.json({ message: 'Data updated successfully' });
        });
    }).catch((e) => {
        console.log(e);
        res.status(500).json({ error: 'Database connection error' });
    });
});

module.exports = router;
