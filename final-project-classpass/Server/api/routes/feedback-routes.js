const express = require('express');
const feedbackController = require('../controllers/feedback-controller');

const router = express.Router();

// to submit a feedback
router.route('/addFeedback')
.post(feedbackController.savefeedback);

module.exports = router;