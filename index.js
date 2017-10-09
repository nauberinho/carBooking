
// ----- Dependencies ----- //
var express = require('express');
var mongoose = require('mongoose');

// ----- Init app ----- //
var app = express();

//  ----- Init database connection -----//
mongoose.connect('mongodb://localhost/rentalCars', {useMongoClient:true});
var db = mongoose.connection;

// ----- Make app use body query parser ----- //
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({ type: 'application/json' });
app.use(jsonParser);

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});



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

// ----- Add new car ----- //
app.post('/api/cars', function(req, res) {
	console.log(req)
	var car = req.body;
	Cars.addCar(car, function(err, success) {
		// If successful, return json data, else throw error;
		success ? res.json(success) : (err) => {throw err};
	});
});

// ----- Update a car by id ----- //
app.put('/api/cars/:_id', function(req, res) {
	var _id = req.params._id;
	var data = req.body;
	Cars.updateCar(_id, data, {new:true}, function(err, success) {
		// If successful, return json data, else throw error;
		success ? res.json(success) : (err) => {throw err};
	});
});

// ----- Book a car by id ----- //
app.post('/api/cars/book', function(req, res) {
    var _id = req.query.id;
    Cars.bookCar(_id, function(err, car) {
        car ? console.log('Booked car! : ' + car) : (err) => {
            throw err
        };
    })
})





// ----- Start server ----- //
app.listen(7000);
console.log('Listening on port 7000...');