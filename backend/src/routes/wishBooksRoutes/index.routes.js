const { Router } = require('express');
const { createNewWishBookController,
    editWishBookController, deleteWishBookController,
    getWishBooksController }
    = require('../../controllers/wishBooksControllers/wishBooksControllers');

const router = Router();

router.post('/new', createNewWishBookController);
router.post('/edit', editWishBookController);
router.delete('/delete/:bookId', deleteWishBookController);
router.get('/:userId', getWishBooksController);

module.exports = router;
