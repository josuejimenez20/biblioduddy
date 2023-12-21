const { Router } = require('express');
const { createNewUserController } = require('../../controllers/users/usersControllers');

const router = Router();

router.post('/new', createNewUserController);

module.exports = router;
