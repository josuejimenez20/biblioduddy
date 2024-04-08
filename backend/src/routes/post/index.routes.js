const { Router } = require('express');
const { createNewPostController, updatePostController,
    deletePostController, getAllPostsController,
    getPostByIdController, getAllPostsByIdController }
    = require('../../controllers/post/postControllers');
const { createNewPostValidator, updatePostValidator
} = require('../../validator/post/index.post.validator');


const router = Router();

router.post('/new', createNewPostValidator, createNewPostController);
router.post('/update', updatePostValidator, updatePostController);
router.delete('/:postId', deletePostController);
router.get('/all', getAllPostsController);
router.get('/:postId', getPostByIdController);
router.get('/all/:userId', getAllPostsByIdController);


module.exports = router;
