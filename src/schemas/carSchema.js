/**
 * Created by naube on 2017-09-21.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var car = new Schema({

        title: {type: String, unique: true},
        year: Number,
        actors: String

    });




module.exports = mongoose.model('Car', car)

