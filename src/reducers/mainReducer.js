/**
 * Created by naube on 2017-09-28.
 */
const mainReducer = (state = {
    view: "home"
}, action) => {
    let newState = {...state};
    switch(action.type){
        case 'CHANGE_VIEW':
            newState = {...newState, view: action.payload.target.id}
            return newState;
        case 'INITIAL_RENDER':
            //To use later
            return newState
        default:
            return newState;
    }
}
export default mainReducer;