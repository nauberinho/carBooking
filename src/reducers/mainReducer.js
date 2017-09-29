/**
 * Created by naube on 2017-09-28.
 */


const mainReducer = (state = {

    view: "home",
    carChoice: 'Mercedes'

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

            console.log('Car booked')
            return newState;

        case 'INITIAL_RENDER':

            console.log('Car booked')
            return newState;

        default:
            return newState;
    }

}

export default mainReducer;

