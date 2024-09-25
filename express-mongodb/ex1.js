const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB and then start the server
MongoClient.connect(url)
  .then(client => {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    // Route to create a collection
    app.post('/create-collection', async (req, res) => {
      try {
        const collectionName = req.body.collectionName;
        if (!collectionName) {
          return res.status(400).json({ error: 'Collection name is required' });
        }
        await db.createCollection(collectionName);
        res.status(201).json({ message: `Collection '${collectionName}' created successfully` });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => console.error('Failed to connect to MongoDB', error));
