// Client

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();


var Car = require('./models/car.js');
mongoose.connect('mongodb://localhost/rentalCars', {useMongoClient:true});
var db = mongoose.connection;

db.dropDatabase()

var car = new Car(

    {
        name: 'Volvo'
    }

)


car.save(function(err, result){
    if(err){

        console.log(err)

    }
    else{


    }
})


app.get('/', function(req, res) {
    res.send('Hej');
});

app.get('/api/cars', function(req, res) {
    Car.getCarTypes(function(err, cars){
    	if(err) {
    		throw err;
    	}
    	res.json(cars);
    })
});

app.get('/api/cars/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});



app.listen(3009);
console.log('Listening on port 3000...');