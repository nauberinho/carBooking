/**
 * Created by naube on 2017-09-28.
 */

var req = new XMLHttpRequest;

var carsList = [];

req.open('GET', "http://localhost:5000/api/cars");

req.send();

req.onreadystatechange = function() {
    console.log('onreadystatechange')

    if (this.readyState == 4 && this.status == 200) {
        setTimeout(function(){
            let data = JSON.parse(req.response);
            console.log(data)

                for(var car in data){

                carsList.push(data[car])

            }

        }, 100)
    }
}

const carsReducer = (state = {
    cars: carsList,
    carObject: "",
    display: false

}, action) => {
    let newState = state;
    switch(action.type){

        case 'UPDATE_CAR_CHOICE':
            newState.carId = action.payload.target.value;
            return newState;

        case 'BOOK_CAR':
            var carId = action.payload.target.getAttribute('data-id');
            let bookReq = new XMLHttpRequest;
            bookReq.open('PUT', "http://localhost:7000/api/cars?id=" + carId);
            bookReq.send()
            bookReq.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    setTimeout(function () {
                        let data = JSON.parse(bookReq.response);
                        console.log('data: ' + data)
                    }, 100)
                }
            }
            return newState

        default:
            return newState;
    }
}

export default carsReducer;

