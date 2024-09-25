var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const mysqlConnFun = require('../lib/mysqloperations');

/* POST admin login. */
router.post('/admin_login', function(req, res, next) {
    const { email, password } = req.body; // Get email and password from the request body
    const privateKey = '!@#DFTbnhu*';
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }


    mysqlConnFun().then((poolObj) => {
        poolObj.query('SELECT * FROM admins WHERE email = ?', [email], (err, results) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                return res.status(500).json({ error: 'Database query error' });
            }

            if (results.length === 0) {
                return res.status(401).json({ error: 'Admin not found' });
            }

            const admin = results[0];

            // For production, hash and compare the password securely
            if (admin.password === password) { 
                // Replace this with hashed password comparison in production
                // Authentication successful
                try {
                    // Generate a JWT token
                    const token = jwt.sign({ email: admin.email, role: 'admin' }, privateKey, { algorithm: 'HS256' });
                    
                    // Define the cookie value object
                    const cookieValue = {
                        email: admin.email,
                        password: admin.password, // In a real-world scenario, avoid storing plain-text passwords in cookies
                        token: token
                    };

                    // Set the cookie with the defined value
                    res.cookie('loggedIn', cookieValue, { maxAge: 15000, secure: false, httpOnly: false });

                    // Authentication successful
                    res.redirect('study_link_admin');
                } catch (err) {
                    return res.status(500).json({ error: 'Failed to generate token' });
                }


               
               // res.redirect('study_link_admin');
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        });
    }).catch((e) => {
        console.log(e);
        res.status(500).json({ error: 'Database connection error' });
    });
});

module.exports = router;
