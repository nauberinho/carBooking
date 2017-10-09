/**
 * Created by naube on 2017-10-09.
 */


const loginReducer = (state = {
    cars: [],
    display: false

}, action) => {

    let newState = {...state};

    switch(action.type){
        case 'CHANGE_VIEW':
            newState = {...newState, view: action.payload.target.id}
            return newState;

        case 'ADD_CAR':
            let addCarSubmit = action.payload.target;
            console.log(addCarSubmit);
            return newState;

        case 'REMOVE_CAR':
            let removeCarSubmit = action.payload.target;
            console.log(removeCarSubmit);



        default:
            return newState;

    }

}

export default loginReducer;
