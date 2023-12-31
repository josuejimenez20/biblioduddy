const { Router } = require('express');
const { createNewPendingBookController,
    editPendingBookController, deletePendingBookController,
    getPendingBooksController }
    = require('../../controllers/pendingBooksControllers/pendingBooksControllers');

const router = Router();

router.post('/new', createNewPendingBookController);
router.post('/edit', editPendingBookController);
router.delete('/delete/:bookId', deletePendingBookController);
router.get('/:userId', getPendingBooksController);

module.exports = router;
