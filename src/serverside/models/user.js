'use strict';

// Load mongo module
var mongoose = require('mongoose');


// User object schema

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    signedIn: {
        type: Boolean,
        default: [false]
    },
    type: String
});

var Users = module.exports = mongoose.model('Users', userSchema);

// Sign in and update user object if found by id

module.exports.signIn = function(_id, callback) {
    Users.findById(_id, function (err, user) {
        if (user) {
            var userObject = user;
            if (userObject.signedIn === false) {
                userObject.signedIn = true;
                console.log('signed in');
            } else {
                userObject.signedIn = false;
                console.log('signed out');
            }
            Users.findOneAndUpdate(_id, userObject, callback);
        }
    })
}

// Add user
module.exports.createUser = function(data, callback) {
    Users.create(data, callback);
}


// Get car by id
module.exports.checkIfSignedIn = function(user, callback) {
    Users.findOne({'username': user.username}, callback)
}
