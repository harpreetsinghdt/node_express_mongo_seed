const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Post = mongoose.model("Post_", postSchema);
module.export = Post;

// Post.find().populate("user");
