const express = require('express');
const router = express.Router()

const {createComment} = require('../controllers/commentController')
const {createPost,getAllPosts} = require('../controllers/postCntroller')
const {likePost,unlikePost} = require('../controllers/Likecontroller')

router.post('/comments/create',createComment)
router.post('/create/post',createPost)
router.get('/getallposts',getAllPosts)
router.post('/likes/like',likePost)
router.post('/likes/unlike',unlikePost)

module.exports = router;