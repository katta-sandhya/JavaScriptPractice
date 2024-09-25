var express = require('express');
var router = express.Router();
const mysqlConnFun = require('../lib/mysqloperations');
const jwt = require('jsonwebtoken');
/* POST login. */
router.post('/user_login', function(req, res, next) {
    const { email, password } = req.body; // Get email and password from the request body
    const privateKey = '!@#DFTbnhu*';
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    mysqlConnFun().then((poolObj) => {
        poolObj.query('SELECT * FROM form WHERE email = ?', [email], (err, results) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                return res.status(500).json({ error: 'Database query error' });
            }

            if (results.length === 0) {
                return res.status(401).json({ error: 'User not found' });
            }

            const user = results[0];

            // For production, hash and compare the password securely
            if (user.password === password) { // Replace this with hashed password comparison in production
                // Authentication successful
                try {
                    // Generate a JWT token
                    const token = jwt.sign({ email: user.email, role: 'user' }, privateKey, { algorithm: 'HS256' });
                    
                    // Define the cookie value object
                    const cookieValue = {
                        email: user.email,
                        password: user.password, // In a real-world scenario, avoid storing plain-text passwords in cookies
                        token: token
                    };

                    // Set the cookie with the defined value
                    res.cookie('loggedIn', cookieValue, { maxAge: 15000, secure: false, httpOnly: false });

                    // Authentication successful
                    res.redirect('study_link_user');
                } catch (err) {
                    return res.status(500).json({ error: 'Failed to generate token' });
                }

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
