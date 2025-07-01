const postController = require('../controllers/postsController');
const express = require('express');
const router = express();

//index
router.get('/', postController.index);

//show
router.get('/:id', postController.show);

//destroy
router.delete('/:id', postController.destroy);

module.exports = router;