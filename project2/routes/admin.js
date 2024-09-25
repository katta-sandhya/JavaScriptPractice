const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../lib/Adminlib'); // Ensure this path is correct and the file is properly named


const privateKey = '!@#DFTbnhu*';
// Render the login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login POST request
router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username, password });

        if (admin) {
            const token = jwt.sign({ email: admin.email, role: 'admin' }, privateKey, { algorithm: 'HS256', expiresIn: '1h' });

            
            const cookieValue = {
                email: admin.email,  
                token: token         // JWT token for authentication
            };

            // Set the cookie with the defined value (maxAge in milliseconds)
            res.cookie('loggedIn', cookieValue, { maxAge: 15000,     
                secure: false,     
                httpOnly: true      // Prevents client-side JavaScript from accessing the cookie
 });
            res.redirect('/bankForm'); // Redirect to bankForm on successful login
        } else {
            res.status(401).send('Invalid login credentials'); // Send a 401 status for invalid credentials
        }
    } catch (error) {
        next(error); // Pass any errors to the error-handling middleware
    }
});

module.exports = router;
