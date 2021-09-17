const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Posts");
});

router.post('/', (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err =>{
            res.json( err)
        });
});



module.exports = router;