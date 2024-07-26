// src/index.js
const express = require('express');
const connection = require('./db');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Route to create the table
app.get('/create-table', (req, res) => {
  const createTableQuery = `
    CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  connection.query(createTableQuery, (err, results, fields) => {
    if (err) {
      console.error('Error creating table:', err.stack);
      res.status(500).send('Error creating table');
      return;
    }
    res.send('Table created successfully');
  });
});


// Route to update the email of a user by name
app.put('/update-email-by-name', (req, res) => {
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).send('Name and email are required');
    }
  
    const updateQuery = 'UPDATE users SET email = ? WHERE name = ?';
  
    connection.query(updateQuery, [email, name], (err, results) => {
      if (err) {
        console.error('Error updating email:', err.stack);
        return res.status(500).send('Error updating email');
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('User not found');
      }
      res.send('Email updated successfully');
    });
  });
  
app.post('/add-user', (req, res) => {//only 1 user is inserted
    const { name, email } = req.body;
  
    const insertQuery = `
      INSERT INTO users (name, email)
      VALUES (?, ?)
    `;
  
    connection.query(insertQuery, [name, email], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err.stack);
        res.status(500).send('Error inserting data');
        return;
      }
      res.send('User added successfully');
    });
  });

  


  // Route to insert multiple users
app.post('/add-users', (req, res) => {
    const users = req.body.users; // Expecting an array of users
    
    // Ensure users is an array and not empty
    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).send('Invalid input: expected an array of users');
    }
  
    const values = users.map(user => [user.name, user.email]);
  
    const insertQuery = `
      INSERT INTO users (name, email)
      VALUES ?
    `;
  
    connection.query(insertQuery, [values], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err.stack);
        res.status(500).send('Error inserting data');
        return;
      }
      res.send('Users added successfully');
    });
  });


  // Simple update route
app.put('/update-user/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
  
    const updateQuery = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  
    connection.query(updateQuery, [name, email, id], (err, results) => {
      if (err) {
        console.error('Error updating record:', err.stack);
        res.status(500).send('Error updating record');
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send('User not found');
      } else {
        res.send('User updated successfully');
      }
    });
  });


  // Route to delete a user by ID
app.delete('/delete-user/:id', (req, res) => {
    const { id } = req.params;
  
    const deleteQuery = 'DELETE FROM users WHERE id = ?';
  
    connection.query(deleteQuery, [id], (err, results) => {
      if (err) {
        console.error('Error deleting record:', err.stack);
        return res.status(500).send('Error deleting record');
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('User not found');
      }
      res.send('User deleted successfully');
    });
  });
  
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
