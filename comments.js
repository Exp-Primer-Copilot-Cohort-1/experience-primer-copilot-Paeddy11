// Create web server

// Import express
const express = require('express');

// Import comments controller
const commentsController = require('../controllers/commentsController.js');

// Create router
const router = express.Router();

// Get all comments
router.get('/', commentsController.getAllComments);

// Get comments by id
router.get('/:id', commentsController.getCommentsById);

// Get comments by post id
router.get('/post/:id', commentsController.getCommentsByPostId);

// Create comment
router.post('/', commentsController.createComment);

// Update comment
router.put('/:id', commentsController.updateComment);

// Delete comment
router.delete('/:id', commentsController.deleteComment);

// Export module
module.exports = router;