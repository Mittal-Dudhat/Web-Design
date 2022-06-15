const express = require('express');
const classesController = require('../controllers/classes-controller');

const router = express.Router();

// to get all class data
router.route('/getAllClassData')
.get(classesController.getAllClass);

//add new class
router.route('/addClassData')
.post(classesController.addClasses);

//Register user for class
router.route('/addUser')
.post(classesController.addUser);

//Remove Registeration
router.route('/removeUserRegistration')
.post(classesController.deleteRegistration);

//get user registered classes
router.route('/getUserRegisteredClass')
.post(classesController.getUserRegisteredClasses);

module.exports = router;