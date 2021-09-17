const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Posts");
});

router.get('/post', (req,res)=>{
    res.send("Posts alanı");
});



module.exports = router;