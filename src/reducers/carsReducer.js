/**
 * Created by naube on 2017-09-28.
 */
function updateCars() {
    var req = new XMLHttpRequest;
    var carsList = [];
    req.open('GET', "http://localhost:7000/api/cars");
    req.send();
    req.onreadystatechange = function () {
        console.log('onreadystatechange')
        if (this.readyState == 4 && this.status == 200) {
            setTimeout(function () {
                let data = JSON.parse(req.response);
                console.log(data)
                for (var car in data) {
                    carsList.push(data[car])
                }
            }, 100)
        }
    }
    return carsList;
}

const carsReducer = (state = {
    cars: updateCars(),
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
            bookReq.open('POST', "http://localhost:7000/api/cars/book?id=" + carId, true);
            bookReq.send()
            setTimeout(function(){
                newState.cars = updateCars();

            }, 200)

            return newState;

        default:
            return newState;
    }
}

export default carsReducer;

