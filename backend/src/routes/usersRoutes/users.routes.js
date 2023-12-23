const { Router } = require('express');
const { createNewUserController,loginUserController } = require('../../controllers/users/usersControllers');

const router = Router();

router.post('/new', createNewUserController);
router.post('/login', loginUserController);

module.exports = router;
