const express = require('express');
const userController = require('../controllers/user-controller');
const emailController = require('../controllers/email-controller');

const router = express.Router();

// to register new user
router.route('/signup')
.post(userController.signIn);

// to get all users
router.route('/getUser')
.get(userController.getUser);

// to login user
router.route('/login')
.post(userController.login);

// to update user
router.route('/updateUser/:id')
.post(userController.updateUser);

// email verification 
router.route('/email')
.post(emailController.sendmail);

module.exports = router;