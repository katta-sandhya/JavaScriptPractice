const express = require('express');
const router = express.Router();
const mysqlConnFun = require('../lib/mysqloperations');

// GET route for rendering the study links management page
router.get('/study_link_admin', (req, res) => {
    mysqlConnFun().then((poolObj) => {
        poolObj.query('SELECT * FROM study_links', (err, links) => {
            if (err) {
                console.error('Error fetching study links:', err);
                return res.status(500).send('Database error');
            }
            const isAdmin = req.user && req.user.role === 'admin';
            res.render('study_link_admin', { links, isAdmin:true });
        });
    }).catch((e) => {
        console.error('Database connection error:', e);
        res.status(500).send('Database connection error');
    });
});

// POST route for adding a new study link
router.post('/study_link_admin/addLinks', (req, res) => {
    console.log('Form Data:', req.body);
    const { name, url } = req.body;

    mysqlConnFun().then((poolObj) => {
        const insertQuery = 'INSERT INTO study_links (name, url) VALUES (?, ?)';
        poolObj.query(insertQuery, [name, url], (err, results) => {
            if (err) {
                console.error('Database insert error:', err);
                return res.status(500).send('Database insert error');
            }
            res.redirect('/study_link_admin');
        });
    }).catch((e) => {
        console.error('Database connection error:', e);
        res.status(500).send('Database connection error');
    });
});



// POST route for updating a study link
router.post('/study_link_admin/updateLinks', (req, res) => {
    const { id, name, url } = req.body;

    mysqlConnFun().then((poolObj) => {
        const updateQuery = 'UPDATE study_links SET name = ?, url = ? WHERE id = ?';
        poolObj.query(updateQuery, [name, url, id], (err, results) => {
            if (err) {
                console.error('Database update error:', err);
                return res.status(500).send('Database update error');
            }
            res.redirect('/study_link_admin');
        });
    }).catch((e) => {
        console.error('Database connection error:', e);
        res.status(500).send('Database connection error');
    });
});




// POST route for deleting a study link
router.post('/study_link_admin/deleteLinks', (req, res) => {
    const { id } = req.body;

    mysqlConnFun().then((poolObj) => {
        const deleteQuery = 'DELETE FROM study_links WHERE id = ?';
        poolObj.query(deleteQuery, [id], (err, results) => {
            if (err) {
                console.error('Database delete error:', err);
                return res.status(500).send('Database delete error');
            }
            res.redirect('/study_link_admin');
        });
    }).catch((e) => {
        console.error('Database connection error:', e);
        res.status(500).send('Database connection error');
    });
});



module.exports = router;
