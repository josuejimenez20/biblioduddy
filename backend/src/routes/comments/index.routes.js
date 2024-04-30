const { Router } = require('express');
const { createNewCommentController,
    getCommentsByPostIdController, updateCommentController }
    = require('../../controllers/comments/commentsControllers');

const router = Router();

router.get('/all/:postId', getCommentsByPostIdController);
router.post('/new', createNewCommentController);
router.post('/update', updateCommentController);


module.exports = router;
