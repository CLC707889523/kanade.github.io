const postCtrl = require('../controllers/postCtrl')
const tagCtrl = require('../controllers/tagCtrl')
const commentCtrl = require('../controllers/commentCtrl')
const router = require('express')

// Post
router.get('/getAllPost/:key/:pageNum/:pageSize', postCtrl.getAllPosts)
router.post('/addPost', postCtrl.addPost)
router.get('/getPostDetail/:postId', postCtrl.getPostDetail)
router.delete('/removePost/:postId', postCtrl.removePost)

// Tag
router.get('/getAllTags', tagCtrl.getAllTags)
router.post('/addTag', tagCtrl.addTag)

// comment
router.post('/addComment', commentCtrl.addComment)
router.get('getCommentsByPostId/:postId',commentCtrl.getCommentsByPostId)

module.exports = router
