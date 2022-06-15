const router = require('express').Router();
const userRouter = require('./user-routes');
const classRouter = require('./class-routes');
const feedbackRouter = require('./feedback-routes');

// route to '/'
router.use('/', userRouter);

//route to '/classes'
router.use('/classes', classRouter);

// route to 'feedback
router.use('/feedback', feedbackRouter);

module.exports = router;