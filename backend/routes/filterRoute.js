const express = require('express')
const filterController = require('../controllers/filterController');


const router = express.Router()


router
    .route('/')
    .get(filterController.getAllFilter)
    .post(filterController.createFilter);

router
    .route('/:id')
    .get(filterController.getFilter)
    .patch(filterController.updateFilter)
    .delete(filterController.deleteFilter);



module.exports = router;