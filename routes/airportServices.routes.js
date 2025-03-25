const express = require('express');
const router = express.Router();
const airportServiceController = require('../controller/airportservice.controller');

router.get('/', airportServiceController.getAll);
router.get('/:id', airportServiceController.getById);
router.post('/', airportServiceController.create);
router.put('/:id', airportServiceController.update);
router.delete('/:id', airportServiceController.delete);

module.exports = router;
