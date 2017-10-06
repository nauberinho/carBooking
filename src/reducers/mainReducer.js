/**
 * Created by naube on 2017-09-28.
 */


const mainReducer = (state = {

    view: "home",
    carChoice: 'Mercedes',
    carObject: [],
    display: false

}, action) => {
    let newState = {...state};
    switch(action.type){
        case 'CHANGE_VIEW':
            newState = {...newState, view: action.payload.target.id}
            return newState;
        case 'INITIAL_RENDER':
            console.log('Car booked')
            return newState;
        default:
            return newState;
    }
}

export default mainReducer;

