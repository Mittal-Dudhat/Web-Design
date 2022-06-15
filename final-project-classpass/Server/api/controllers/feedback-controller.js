const feedbackService = require('../services/feedback-services');


const feedbackController = {
 // save feedback of user
 savefeedback(request, response){
    feedbackService.AddFeedback(request.body,response);
},
}




module.exports =  feedbackController;