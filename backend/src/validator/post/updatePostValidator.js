const { check } = require("express-validator");
const { validateResult } = require('../validator')

const updatePostValidator = [
    check("post_id").exists().not().isEmpty(),
    check("title").exists().not().isEmpty(),
    check("content").exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { updatePostValidator }