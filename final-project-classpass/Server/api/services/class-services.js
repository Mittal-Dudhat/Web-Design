const classModel = require('../models/classModel');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const classService = {
    // function to add new class
    addClass(classObj, response) {
        classModel.create(classObj, (err, data) => {
            if (err) {
                response.json({ Status: "Failed" });
            } else {
                response.json({ Status: "Success", record: data });
            }
        })
    },

    //function to get all class
    getClass(classobj,response) {
        classModel.find((err, data) => {
            if (!err) {
                response.json({ Status: "Success", record: data });
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    },

    // function to Register user to class
    async addUser(userclassObj, response) {
        var checkUserExist = await userModel.find(userclassObj.user);
        if(checkUserExist)
        {
            userModel.findOneAndUpdate({ username: userclassObj.username },
                { "$push": {"classData": { "title": userclassObj.title, "fromDate": userclassObj.inp.fromDate, "toDate": userclassObj.inp.toDate, "slot": userclassObj.inp.slot, "contact":userclassObj.inp.contact } } }, { "new": true },
                (err,data)=>{
                    if(err){
                        console.log(err);
                    }else{
                        response.json({Status: "Success",msg: "Registered succesfully",data: data});
                    }
                }
            )
        }
        else {
            response.json({ Status: "F", msg: "Not registerd yet" });
        }
    },

    //remove user registration from class
    deleteRegistration(reqBody,response){
        userModel.findOneAndUpdate({username: reqBody.username,"classData.title":reqBody.classes.title},{$pull : {classData : {title: reqBody.classes.title,fromDate: reqBody.classes.fromDate,toDate: reqBody.classes.toDate,slot: reqBody.classes.slot,contact: reqBody.classes.contact}}},{"new": true},
        (err,data)=>{
            if(err){
                console.log(err);
            }else{
                response.json({Status: "Success",msg: "Removed Registration succesfully",data: data});
            }
        })
    },

    // get user registered classes
    getUserRegisteredClasses(userObject, response) {
        userModel.findOne(userObject, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                response.json({ Status: "Success",data: doc });
            }
        })
    }
}

module.exports = classService;