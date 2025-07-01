const postController = require('../controllers/postsController');
const express = require('express');
const router = express();

//index
router.get('/', postController);

//show
router.get('/:id', postController);

//destroy
router.delete('/:id', postController);

module.exports = router;