const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
const MacaddressValidation = require('../middlewares/MacaddressValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');
route.get('/filter/all', MacaddressValidation, TaskController.all);

module.exports = router;