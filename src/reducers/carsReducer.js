/**
 * Created by naube on 2017-09-28.
 */
    var carsList = [];


    var req = new XMLHttpRequest();
    req.open('GET', "http://localhost:7000/api/cars");
    req.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(req.response);
            console.log('Updated data!')
            console.log(data)
            for (var car in data) {
                carsList.push(data[car])
            }
        }
    	
    }
    req.send();
    


const carsReducer = (state = {
    cars: carsList,
    filteredCars:[],
    carObject: "",
    display: false

}, action) => {
    let newState = state;
    switch(action.type){


        case 'UPDATE_CAR_CHOICE':
            newState.carId = action.payload.target.value;
            return newState;

        case 'BOOK_CAR':
            console.log('in book car')
            var carId = action.payload.target.getAttribute('data-id');
            let bookReq = new XMLHttpRequest;
            bookReq.open('POST', "http://localhost:7000/api/cars/book?id=" + carId, false);
            bookReq.send()
          

            return newState;

        case 'SAY_HELLO':
            console.log('HELLO WORLD')
            newState = {...newState}

            return newState;

        case 'FILTER':
        let filteredList
            let condition = action.payload.target.value;
            console.log(action.payload.target.value);
            let filterReq = new XMLHttpRequest();
            filterReq.open('POST', 'http://localhost:7000/api/cars/filter', false); 
            filterReq.setRequestHeader("Content-Type", "application/json");              
            filterReq.onreadystatechange = function () {
                console.log('onreadystatechange')
                if (this.readyState === 4 && this.status === 200) {

                    filteredList= JSON.parse( filterReq.response);
                    console.log(filteredList)
                    
                    console.log(' =filteredList')

                }
            }
                    
            filterReq.send(JSON.stringify({condition: condition}));            
            newState.filteredCars = filteredList;
            return newState;

        case 'UPDATE_CARS_LIST':
        var newCarsList = [];
	    var req = new XMLHttpRequest();
	    req.open('GET', "http://localhost:7000/api/cars");
	    req.onreadystatechange = function(){
	        if (this.readyState === 4 && this.status === 200) {
	            let data = JSON.parse(req.response);
	            console.log('Updated data!')
	            console.log(data)
	            for (var car in data) {
	                newCarsList.push(data[car])
	            }
	        }
	    	
	    }
	    req.send();    
        newState.cars = newCarsList;
        return newState;

        default:
            return newState;
    }
}

export default carsReducer;

