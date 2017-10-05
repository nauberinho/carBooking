
// ----- Dependencies ----- //
var express = require('express');
var mongoose = require('mongoose');

// ----- Init app ----- //
var app = express();

//  ----- Init database connection -----//
mongoose.connect('mongodb://localhost/rentalCars', {useMongoClient:true});
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var db = mongoose.connection;

// ----- Make app use body query parser ----- //
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({ type: 'application/json' });
app.use(jsonParser);





// ----- Load car model ----- //
Cars = require('./models/car.js');



// ------------------ //
// ----- Routes ----- //
// ------------------ //

// ----- Get avaliable cars ----- //
app.get('/api/cars', function(req, res) {
    Cars.getCars(function(err, success) {
        // If successful, return json data, else throw error;
        success ? res.json(success) : (err) => {throw err};
    });
});



app.get('/api/cars:_id', function(req, res) {
    Cars.getCars(function(err, success) {
        // If successful, return json data, else throw error;
        success ? res.json(success) : (err) => {throw err};
    });
});


// ----- Add new car ----- //
app.post('/api/cars', function(req, res) {
    var car = req.body;
    console.log(req.body)
    //Cars.addCar(car, function(err, success) {
    // If successful, return json data, else throw error;
    //	success ? res.json(success) : (err) => {throw err};
    //});
});

// ----- Update a car by id ----- //

app.put('/api/cars', function(req, res) {
    var _id = req.query.id
    console.log('found car')
    Cars.getCarById(_id, function(err, success) {
        console.log('before update')
		if(success) {
            success.status = true;
            Cars.updateCar(_id, success, {}, function (err, success) {
                success ? console.log('updated Car! : ' + success) : (err) => {
                    throw err
                };
            })
        }
    });
});






// ----- Start server ----- //
app.listen(5000);
console.log('Listening on port 5000...');