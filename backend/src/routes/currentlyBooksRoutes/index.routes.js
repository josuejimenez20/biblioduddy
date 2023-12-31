const { Router } = require('express');
const { createNewCurrneltyBookController,
    editCurrneltyBookController, deleteCurrneltyBookController,
    getCurrentlyBooksController }
    = require('../../controllers/currentlyBooks/currenltyBooksControllers');

const router = Router();

router.post('/new', createNewCurrneltyBookController);
router.post('/edit', editCurrneltyBookController);
router.delete('/delete/:bookId', deleteCurrneltyBookController);
router.get('/:userId', getCurrentlyBooksController);

module.exports = router;
