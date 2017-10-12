/**
 * Created by naube on 2017-09-28.
 */
function updateCars(){
    var newCarsList = [];
    var req = new XMLHttpRequest();
    req.open('GET', "http://localhost:7000/api/cars", false);
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

    return newCarsList;

}

const carsReducer = (state = {
    cars: updateCars(),
    filteredCars:[],
    filterCategory: "",
    carObject: "",
    display: false

}, action) => {
    let newState = state;
    switch(action.type){


        case 'UPDATE_CAR_CHOICE':
            newState.carId = action.payload.target.value;
            return newState;

        case 'BOOK_CAR':
            console.log('in book car');
            var carId = action.payload.target.getAttribute('data-id');
            let bookReq = new XMLHttpRequest;
            bookReq.open('POST', "http://localhost:7000/api/cars/book", true);
            bookReq.setRequestHeader("Content-Type", "application/json");
            bookReq.send(JSON.stringify({id: carId}));

        case 'UNBOOK_CAR':
            console.log('unbooking');
            var carId1 = action.payload.target.getAttribute('data-id');
            console.log(carId1)
            let unBookReq = new XMLHttpRequest;
            unBookReq.open('POST', "http://localhost:7000/api/cars/unbook", true);
            unBookReq.setRequestHeader("Content-Type", "application/json");
            unBookReq.send(JSON.stringify({id: carId1}));

            return newState;

        case 'FILTER':
        let filteredList
            let conditions = {category: action.payload.target.getAttribute('data-category'), value: action.payload.target.getAttribute('data-value')};
            console.log(action.payload.target.getAttribute('data-value'));
            let filterReq = new XMLHttpRequest();
            filterReq.open('POST', 'http://localhost:7000/api/cars/filter',  false);
            filterReq.setRequestHeader("Content-Type", "application/json");              
            filterReq.onreadystatechange = function () {
                console.log('onreadystatechange')
                if (this.readyState === 4 && this.status === 200) {

                    filteredList = JSON.parse( filterReq.response);
                    console.log(filteredList)
                    
                    console.log(' =filteredList')
                    newState.filteredCars = filteredList;
                    newState.filterCategory =  conditions.category + ": " + conditions.value;

                }
            };
            filterReq.send(JSON.stringify({conditions: conditions}));
            return newState;

        case 'FILTER_ALL':
            newState.filterCategory = "";
            newState.filteredCars = [];
            return newState;

        case 'UPDATE_CARS_LIST':

            newState.cars = updateCars();

            return newState;

        default:
            return newState;
    }
}

export default carsReducer;

