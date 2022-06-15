const classesService = require('../services/class-services');

const classesController = {
    // get all class Info to the user
    getAllClass(request, response){
        classesService.getClass(request.body,response);
    },

    //add new class into the system
    addClasses(request, response){
        classesService.addClass(request.body,response);
    },

    // add registered class to user
    addUser(request, response){
        classesService.addUser(request.body,response);
    },

    // delete registered class
    deleteRegistration(request, response){
        classesService.deleteRegistration(request.body,response);
    },

    //get user registered class
    getUserRegisteredClasses(request, response){
        classesService.getUserRegisteredClasses(request.body,response);
    }
}

module.exports = classesController;