const express = require('express');
const router = express.Router();
const passengerController = require('../controller/passenger.controller');

router.get('/', passengerController.getAll);
router.get('/:id', passengerController.getById);
router.post('/', passengerController.create);
router.put('/:id', passengerController.update);
router.delete('/:id', passengerController.delete);

module.exports = router;
