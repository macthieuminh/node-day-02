const express = require('express')

const router = express.Router()
const postController = require('../controllers/post.controller.js')

// GET
router.get('/', postController.getAll)
router.get('/:id', postController.getOne)
// POST
router.post('/', postController.createPost)
router.put('/:id', postController.editPost)
// DELETE
router.delete('/:id', postController.deletePost)

module.exports = router