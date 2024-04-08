const { check } = require("express-validator");
const { validateResult } = require('../validator')

const createNewPostValidator = [
    check("user_id").exists().not().isEmpty(),
    check("title").exists().not().isEmpty(),
    check("content").exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { createNewPostValidator }