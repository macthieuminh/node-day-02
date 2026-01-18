const postModel = require('../models/post.model')

// GET /api/posts
const getAll = (req, res) => {
    const posts = postModel.findAll()
    res.send({
        data: posts
    })
};

// GET /api/posts/:id
const getOne = (req, res) => {
    const id = +req.params.id;
    const post = postModel.findOne(id);

    if (post) {
        res.send({
            data: post
        });
    } else {
        res.status(404).send('Post not found');
    }
};

// POST /api/posts
const createPost = (req, res) => {
    const {title, content} = req.body

    if (!title || !content) {
        return res.status(400).send('Title and content are required');
    }

    const newPost = postModel.create(
        title,
        content
    )

    res.status(201).send(newPost);
};

// PUT /api/posts/:id
const editPost = (req, res) => {
    const id = +req.params.id
    const {title,content} = req.body

    const editedPost = postModel.edit(id,title,content)

    if (editedPost) {
        res.send({
            data: editedPost
        });
    } else {
        res.status(404).send('Post not found');
    }
};

// DELETE /api/posts/:id
const deletePost = (req, res) => {
    const id = +req.params.id;
    const deletedPost = postModel.delete(id)

    if (deletedPost) {
        res.status(204).send('Deleted');
    } else {
        res.status(404).send('Post not found');
    }
};

module.exports = { getAll, getOne, createPost, editPost, deletePost };