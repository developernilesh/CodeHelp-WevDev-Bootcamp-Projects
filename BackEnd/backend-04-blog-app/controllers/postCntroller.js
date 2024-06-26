const Post = require('../models/postModel')

exports.createPost = async(req,res) => {
    try {
        const {title, description} = req.body;
        const post = new Post({
            title,description
        })
        const savedPost = await post.save();

        res.status(200).json(
            {
                post: savedPost,
            }
        )
    } catch (error) {
        return res.status(500).json({
            error: 'Error while creating post'
        })
    }
}

exports.getAllPosts = async(req,res) => {
    try {
        const posts = await Post.find()
                                .populate("likes")
                                .populate("comments")
                                .exec()
        res.status(200).json({
            posts: posts,
        })
    } 
    catch (error) {
        return res.status(500).json({
            error: 'Error while fetching post'
        })
    }
}