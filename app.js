const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
const postRoute = require("./routes/posts");
app.use('/posts', postRoute)





//Connect to db
mongoose.connect(
    process.env.db_url,
    {useNewUrlParser:true, 
    useUnifiedTopology:true},
    ()=>console.log("Connected to db")
);

//Routers
app.get('/', (req,res)=>{
    res.send("Merhaba dünya");
});

//Listening
app.listen(3000);