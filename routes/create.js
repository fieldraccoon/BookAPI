const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.render("create")
})

let posts = []

createPost = () => {
    
}

router.post("/", (req,res) => {
    const post = {
        title: req.body.inputTitle,
        author: req.body.inputAuthor,
        description: req.body.inputDescription,
        price: req.body.inputPrice,
        pages: req.body.inputPages
    }
    res.render("/")
    posts.push(post)
    console.log(posts);
})


module.exports = router;
