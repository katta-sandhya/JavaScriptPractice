const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const nodemailer = require('nodemailer');


router.get('/bankForm', (req, res) => {
    res.render('bankForm');
});

router.post('/bankForm', (req, res) => {
    const Deposits = req.body.deposit.trim();  
    const Description = req.body.description.trim();

    console.log("Deposits:", Deposits);  // Debugging: log Deposits value
    console.log("Description:", Description);  // Debugging: log Description value


    const results = [];
    const csvFilePath = path.join(__dirname, '../data/result.csv');

    // Ensure the CSV file exists before proceeding
    if (!fs.existsSync(csvFilePath)) {
        return res.send('CSV file not found.');
    }

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => {
            if (data.Deposits === Deposits && data.Description === Description) {
                results.push(data);
            }
        })
        .on('end', () => {
            if (results.length === 0) {
                return res.send('No matching records found.');
            }

            const transporter = nodemailer.createTransport({
                service: 'Outlook365',
                auth: {
                    user: 'katta.sandhya9999@outlook.com',  // Your email
                    pass: 'Sandhya@2223',  // Your password or app-specific password
                },
            });

            const mailOptions = {
                from: 'katta.sandhya9999@outlook.com',
                to: 'katta.sandhya9999@outlook.com',
                subject: 'Customer Deposit Report',
                text: JSON.stringify(results, null, 2),  // Formatted JSON text for readability
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    return res.send('Error sending email');
                }
                res.redirect('/message');
            });
        })
        .on('error', (err) => {
            console.error('Error reading CSV file:', err);
            res.send('Error processing CSV file');
        });
});

router.get('/message', (req, res) => {
    res.render('message', { message: 'Email sent successfully!' });
});

module.exports = router;
