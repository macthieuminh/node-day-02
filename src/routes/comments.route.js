const express = require('express')

const router = express.Router()
const commentController = require('../controllers/comment.controller.js')

// GET
router.get('/', commentController.getAll)
router.get('/:id', commentController.getOne)
// POST
router.post('/', commentController.createComment)
router.put('/:id', commentController.editComment)
// DELETE
router.delete('/:id', commentController.deleteComment)

module.exports = router