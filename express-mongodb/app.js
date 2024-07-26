const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'student';

// Middleware to parse JSON
app.use(express.json());


// Connect to MongoDB
MongoClient.connect(url)
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db(dbName);
  
  



// pass the db object to the Routes
const indexRouter = require('./routes/index')(db);
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  }).catch(error => console.error(error));


