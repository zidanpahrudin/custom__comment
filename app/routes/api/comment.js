const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');


// @route   GET api/comment
// @desc    Get all comments
// @access  Public

router.get("/", async (req, res) => {
    try {
        
        let allComment = await Comment.find({});
        if(allComment.length > 0) {
            return res.json({status: "success", data: allComment}); 
        } else {
           return res.json({message: "No comments"});
        }
      
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// @route   POST api/comment
// @desc    Create a comment
// @access  Public
router.post("/", async (req, res) => {
    try {
        const { user, comment, presence } = req.body;
        const newComment = new Comment({
            user,
            comment,
            presence
        });
        const savedComment = await newComment.save();
        
        res.json({status: "success", data: savedComment});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   PUT api/comment/:id
// @desc    Update a comment
// @access  Public
router.put("/:id", async (req, res) => {
    try {
        const { user, comment } = req.body;
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
            user,
            comment
        });
        res.json({status: "success", data: updatedComment});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   DELETE api/comment/:id
// @desc    Delete a comment
// @access  Public
router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        res.json({status: "success", data: deletedComment});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




module.exports = router;