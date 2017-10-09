'use strict';

// Load mongo module
var mongoose = require('mongoose');

// Car object schema
var carSchema = mongoose.Schema({
    fordonstyp:String,
    requiredDrivingLicense:String,
    brand:String,
    model:String,
    year:Number,
    gearbox:String,
    dagshyra:Number,
    fuel:String,
    imgLink:String,
    status: {
        type: Boolean,
        default: [true]
    }
});

var Cars = module.exports = mongoose.model('Cars', carSchema);

// Get all cars
module.exports.getCars = function(callback, limit) {
    Cars.find(callback).limit(limit);
}

// Get car by id
module.exports.getCarById = function(id, callback) {
    Cars.findById(id, callback);
}

// Add car
module.exports.addCar = function(data, callback) {
    Cars.create(data, callback);
}

// Update car
module.exports.updateCar = function(_id, car, options, callback) {
    var update = {
        fordonstyp: car.fordonstyp,
        requiredDrivingLicense: car.requiredDrivingLicense,
        brand: car.brand,
        model: car.model,
        year: car.year,
        gearbox: car.gearbox,
        dagshyra: car.dagshyra,
        fuel: car.fuel,
        imgLink: car.imgLink,
        status: car.status
    }
    Cars.findOneAndUpdate(_id, update, options, callback);
}

module.exports.removeCar = function(_id, callback) {
    Cars.findByIdAndRemove(_id, callback);
};

module.exports.bookCar = function(_id, callback) {
    Cars.findById(_id, function (err, car) {
        if (car) {
            var carToChange = car;
            if (car.status === true) {
                carToChange.status = false;
                console.log('trying to UNBOOK...');
            } else {
                carToChange.status = true;
                console.log('trying to BOOK...');
            }
            Cars.findOneAndUpdate(_id, carToChange, callback);
        }
    })
}