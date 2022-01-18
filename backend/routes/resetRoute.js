const express = require('express')
const resetController = require('../controllers/resetController');


const router = express.Router()


router
    .route('/')
    .patch(resetController.updateFilter)
    .delete(resetController.deleteFilter);



module.exports = router;