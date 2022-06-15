const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const userService = {
    // function to resgister new user
    AddUser(userObj, response) {
        userModel.create(userObj, (err, data) => {
            if (err) {
                response.json({ Status: "Failed" });
            } else {
                response.json({ Status: "Success", record: data });
            }
        })
    },

    // function to update exixting user
    updateUser(userObj, response) {
        userModel.findByIdAndUpdate(userObj.id, userObj, (err, data) => {
            if (err) {
                console.log("Error is ", err);
                response.json({ Status: "Failed" });
            } else {
                response.json({ Status: "Success", record: data });
            }
        })
    },

    // function to login new user
    login(userObj, response) {
        userModel.findOne(userObj, (err, data) => {
            if (err) {
                response.json({ Status: "Failed", msg: err});
            } else {
                // if the Login ID and Password doesn't match
                if (data) {
                    jwt.sign({ data }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                        response.json({ Status: "Success", msg: "welcome " + data.username, token: token });
                    });
                }else {
                    response.json({ Status: "Failed", msg: "Invalid username or password" });
                }
            }
        })
    },

    // function to update user
    updateUser(userObject, response) {
        userModel.findByIdAndUpdate(userObject.id, userObject, (err, doc) => {
            if (err) {
                console.log("Error is ", err);
                response.json({ Status: "Failed" });
            } else {
                response.json({ Status: "Success", record: doc });
            }
        })
    },

}

module.exports = userService;