const express = require('express');
const router = express.Router();
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const nodemailer = require("nodemailer");
const { parse } = require('json2csv');
const conn = require('../lib/mongoconn');
const CSV = require('csv-string');

exports.autoInterval = () => {
    setInterval(async function () {
        try {
            const db = await conn.connFun();
            console.log('autointerval start');

            let collection = db.collection('Admin');
            const update = await collection.updateOne({ "status": "new" }, { $set: { "status": "in process..." } }, { multi: true });
            console.log(update);

            const findResult = await collection.findOne({ "status": "in process..." });

            if (!findResult) {
                console.log('No matching document found for "in process..." status');
                return;
            }

            const { Description, Deposits } = findResult;
            console.log('Deposits values are:', Description, Deposits);

            collection = db.collection('Admin');
            const count = await collection.countDocuments();
            console.log(count, 'this is the count of data');

            const batch = 300;
            const batchCount = Math.ceil(count / batch);
            console.log(batchCount);

            let allCsvData = ''; // Collect all CSV data

            for (let num = 0; num < batchCount; num++) {
                console.log('for loop started');
                const results = await collection.find({ 
                    Description: Description, 
                    Deposits: parseInt(Deposits) 
                }).limit(batch).skip(num * batch).toArray();

                if (results.length === 0) {
                    console.log('No record found');
                    continue;
                }

                const csv = parse(results, ["_id", "Date", "Description", "Deposits", "Withdrawls", "Balance"]);
                allCsvData += csv + '\n'; // Accumulate CSV data
            }

            if (allCsvData) {
                fs.writeFileSync('result.csv', allCsvData, function (err) {
                    if (err) throw err;
                    console.log('The "data to append" was appended to file!');
                });

                const transporter = nodemailer.createTransport({
                    service: "hotmail",
                    port: 587,
                    auth: {
                        user: "katta.sandhya9999@gmail.com",
                        pass: "Sandhya@123",  // Ideally, store this securely in environment variables
                    },
                });

                await transporter.sendMail({
                    from: "katta.sandhya9999@gmail.com",
                    to: "katta.sandhya9999@gmail.com",
                    subject: "**IMPORTANT**RECORD**",
                    text: "Please check the attachment for your reference! ",
                    html: "<b>You asked for some Bank Details, There is a file containing all Details </b>",
                    attachments: [
                        {
                            filename: "result.csv",
                            path: './result.csv', // Use path to attach the file
                        },
                    ],
                });

                console.log("Message sent to your Email");
            }

            await collection.updateOne({ "status": "in process..." }, { $set: { "status": "finished" } }, { multi: true });
        } catch (err) {
            console.error("Error occurred:", err.message);
        }
    }, 60000);
};
