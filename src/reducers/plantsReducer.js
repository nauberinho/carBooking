import socket from '../socket.js'

const plantsReducer = (state = {
    plants: [],
    focusPlant: {},
    plantToAdd: {
        name: "",
        category: "",
        description: "",
        imgUrl: "",
        watering: "",
        __v: 0,
        _id: ""
    }
}, action) => {
    let newState = {...state};
    let plantsList;
    let self = this;
    switch(action.type){

        case 'UPDATE_PLANTS':
            newState.plants = action.payload;
            return newState;

        case 'FOCUS_ON_PLANT':
            newState.focusPlant = action.payload;
            return newState;

        case 'WATER_PLANT':
            console.log(action.payload);
            return newState;

        case 'UPDATE_PLANT_TO_ADD':
            newState.plantToAdd[action.payload.target.getAttribute('data-id')] = action.payload.target.value;
            return newState;

        case 'ADD_PLANT':
            let plantToAdd = newState.plantToAdd;
            console.log(plantToAdd);
            socket.emit('user-add-plant', plantToAdd);
            return newState;

        default:
            return newState;
        }
}
export default plantsReducer;