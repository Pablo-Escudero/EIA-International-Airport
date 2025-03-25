const express = require('express');
const router = express.Router();
const personnelController = require('../controller/personnel.controller');

router.get('/', personnelController.getAll);
router.get('/:id', personnelController.getById);
router.post('/', personnelController.create);
router.put('/:id', personnelController.update);
router.delete('/:id', personnelController.delete);

module.exports = router;
