const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'nosql';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('instagram');

  //the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

/*const indexName = await collection.createIndex({ title: 1 });
console.log('index name =', indexName);

const indexName1 = await collection.createIndex({ title: 1, category: 1 });
console.log('index name =', indexName1);

const a= await collection.totalIndexSize();
console.log(a);


const index = db.instagram.find(
    {
        title: 'Post Title 2',
        likes: { $gt: 7 }
    } ).sort( { title: 1 } )
    console.log(index);*/


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());