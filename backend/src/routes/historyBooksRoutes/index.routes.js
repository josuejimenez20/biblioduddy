const { Router } = require('express');
const { createNewHistoryBookController,
    editHistoryBookController, deleteHistoryBookController,
    getHistoryBooksController }
    = require('../../controllers/historyBooksControllers/historyBooksControllers');

const router = Router();

router.post('/new', createNewHistoryBookController);
router.post('/edit', editHistoryBookController);
router.delete('/delete/:bookId', deleteHistoryBookController);
router.get('/:userId', getHistoryBooksController);

module.exports = router;
