var express = require('express');
var router = express.Router();
const mysqlConnFun = require('../lib/mysqloperations');

router.delete('/delete', function(req, res, next) {
    
    const { id } = req.body;

    mysqlConnFun().then((poolObj) => {
        const deleteQuery = 'DELETE FROM form WHERE id = ?';
        const values = [id];

        poolObj.query(deleteQuery, values, (err, results) => {
            if (err) {
                console.error('Error executing MySQL delete query:', err);
                return res.status(500).json({ error: 'Database delete error' });
            }
            res.json({ message: 'Data deleted successfully' });
        });
    }).catch((e) => {
        console.log(e);
        res.status(500).json({ error: 'Database connection error' });
    });
});

module.exports = router;
