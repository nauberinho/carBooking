/**
 * Created by naube on 2017-09-28.
 */


const mainReducer = (state = {

    view: "home",
    carChoice: 'Mercedes',
    carObject: []

}, action) => {

    let newState = {...state};

    switch(action.type){
        case 'CHANGE_VIEW':
            newState = {...newState, view: action.payload.target.id}
            return newState;

        case 'UPDATE_CAR_CHOICE':
            newState.carChoice = action.payload.target.value;
            return newState;

        case 'BOOK_CAR':
            var req = new XMLHttpRequest;
            var data = [];

            req.open('GET', "http://localhost:3009/api/cars")

            req.send()

            req.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {

                     data = JSON.parse(req.response);
                    newState.carObject = data;

                }
            }
            return newState;

        case 'INITIAL_RENDER':

            console.log('Car booked')
            return newState;

        default:
            return newState;
    }

}

export default mainReducer;

