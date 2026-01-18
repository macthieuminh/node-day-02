const express = require('express')
const router = express.Router()

const postRoute = require('./posts.route.js')
const commentRoute = require('./comments.route.js')

router.use('/posts', postRoute)
router.use('/comments', commentRoute)

module.exports = router
