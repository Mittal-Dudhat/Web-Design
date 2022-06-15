const feedbackModel = require('../models/feedbackModel');
const jwt = require('jsonwebtoken');


const feedbackService = {
    // function to save feedback of user
    AddFeedback(feedbackObj, response) {
        feedbackModel.create(feedbackObj, (err, data) => {
            if (err) {
                response.json({ Status: "Failed" });
            } else {
                response.json({ Status: "Success", record: data });
            }
        })
    },


   

}


module.exports = feedbackService;