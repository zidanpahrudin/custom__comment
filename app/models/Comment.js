const mongoose = require("mongoose");
const { model, Schema } = mongoose;


const commentSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    presence: {
        type: {},
    }
},
    { timestamps: true },
    { collection: "comments" }

);

module.exports = Comment = model("comments", commentSchema);