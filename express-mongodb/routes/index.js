const express = require('express');
const router = express.Router();

module.exports = (db) => {
// Ensure db is not undefined
if (!db) {
    throw new Error('Database connection is not available');
  }

  // Route to create a collection
  router.post('/create-collection', async (req, res) => {
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


  // Route to insert multiple documents into a collection
  router.post('/insert-documents', async (req, res) => {
    try {
      const { collectionName, documents } = req.body;
      if (!collectionName || !Array.isArray(documents)) {
        return res.status(400).json({ error: 'Collection name and documents array are required' });
      }
      const collection = db.collection(collectionName);
      const result = await collection.insertMany(documents);//for only one insert insertOne()
      res.status(201).json({ message: 'Documents inserted successfully', result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//Route to update multiple documents in collection 
  router.put('/update-documents', async (req, res) => {
    try {
      const { collectionName, filter, update } = req.body;
      if (!collectionName || !filter || !update) {
        return res.status(400).json({ error: 'Collection name, filter, and update are required' });
      }
      const collection = db.collection(collectionName);
      const result = await collection.updateMany(filter, { $set: update });//for one update -updateOne()
      res.status(200).json({ message: 'Documents updated successfully', result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  // Route to delete multiple documents
  router.delete('/delete-documents', async (req, res) => {
    try {
      const { collectionName, filter } = req.body;
      if (!collectionName || !filter) {
        return res.status(400).json({ error: 'Collection name and filter are required' });
      }
      const collection = db.collection(collectionName);
      const result = await collection.deleteMany(filter);
      res.status(200).json({ message: 'Documents deleted successfully', result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};
