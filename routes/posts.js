const express = require('express');
const router = express.Router();

app.get('/', (req,res)=>{
    res.send("Posts");
});

app.get('/posts', (req,res)=>{
    res.send("Posts alanı");
});

router.get('/posts')

module.exports = router;