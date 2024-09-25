const express = require('express');
const router = express.Router();
const mysqlConnFun = require('../lib/mysqloperations');

// Render study links page for users

router.get('/study_link_user', (req, res) => {
    mysqlConnFun().then((poolObj) => {
    poolObj.query('SELECT * FROM study_links', (err, links) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        res.render('study_link_user', { links });
    });
    }).catch((e) => {
        console.log(e);
    });
}); 

module.exports = router;