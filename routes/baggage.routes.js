const express = require('express');
const router = express.Router();
const baggageController = require('../controller/baggage.controller');

router.get('/', baggageController.getAll);
router.get('/:id', baggageController.getById);
router.post('/', baggageController.create);
router.put('/:id', baggageController.update);
router.delete('/:id', baggageController.delete);

module.exports = router;
