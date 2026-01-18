const commentModel = require('../models/comment.model.js')

// GET /api/comments
const getAll = (req, res) => {
    const comments = commentModel.findAll()
    res.send(comments)
};

// GET /api/comments/:id
const getOne = (req, res) => {
    const id = +req.params.id;
    const comments = commentModel.findOne(id);

    if (comments) {
        res.send(comments);
    } else {
        res.status(404).send('Comment not found');
    }
};

// POST /api/comments
const createComment = (req, res) => {
    const {postId, content} = req.body

    if (!postId || !content) {
        return res.status(400).send('Comment ID and content are required');
    }

    const newComment = commentModel.create(
        postId,
        content
    )

    res.status(201).send(newComment);
};

// PUT /api/comments/:id
const editComment = (req, res) => {
    const id = +req.params.id
    const {content} = req.body

    const editedComment = commentModel.edit(id,content)

    if (editedComment) {
        res.send(editedComment);
    } else {
        res.status(404).send('Comment not found');
    }
};

// DELETE /api/comments/:id
const deleteComment = (req, res) => {
    const id = +req.params.id;
    const deletedComment = commentModel.delete(id)

    if (deletedComment) {
        res.status(204).send('Deleted');
    } else {
        res.status(404).send('Comment not found');
    }
};

module.exports = { getAll, getOne, createComment, editComment, deleteComment };