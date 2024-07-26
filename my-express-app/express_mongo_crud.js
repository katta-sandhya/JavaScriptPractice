const express =require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app= express();
//const port= 5678;
//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5678;
const MONGOURL = process.env.MONGO_URL;
mongoose.connect(MONGOURL).then(() =>{
console.log("success");
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})
}).catch((error)=> console.log(error))
  

 
 
