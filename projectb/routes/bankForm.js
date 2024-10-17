const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const nodemailer = require('nodemailer');
const ExcelJS = require('exceljs');

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
        .on('end', async () => {
            if (results.length === 0) {
                return res.send('No matching records found.');
            }

            // Step 1: Create an Excel file from the results using exceljs
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Filtered Results');

            worksheet.columns = Object.keys(results[0]).map(key => ({ header: key, key }));
            results.forEach((result) => {
                worksheet.addRow(result);
            });

            const excelFilePath = path.join(__dirname, '../data/customer_deposit_report.xlsx');
            await workbook.xlsx.writeFile(excelFilePath);

            // Step 2: Send the Excel file via email
            const transporter = nodemailer.createTransport({
                service: 'Outlook365',
                auth: {
                    user: 'katta.sandhya9999@outlook.com',  // Your email
                    pass: 'xxxxxxxxxx',  // Your password or app-specific password
                },
            });

            const mailOptions = {
                from: 'katta.sandhya9999@outlook.com',
                to: 'katta.sandhya9999@outlook.com',
                subject: 'Customer Deposit Report',
                text: 'Please find attached the customer deposit report.',
                attachments: [
                    {
                        filename: 'customer_deposit_report.xlsx',
                        path: excelFilePath
                    }
                ]
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    return res.send('Error sending email');
                }
                res.redirect('/message');
                
                // Optionally, delete the Excel file after sending the email
                fs.unlink(excelFilePath, (err) => {
                    if (err) {
                        console.error('Error deleting the file:', err);
                    }
                });
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
