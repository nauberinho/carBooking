import socket from '../socket.js'

const stationsReducer = (state = {

    stations: [{name: 'myStation'}],

    focusStation: {
        name: "",
        key: "",
        plants: []
    },

}, action) => {

    let newState = {...state};

    switch(action.type){

        case 'UPDATE_STATIONS':
            console.log(action.payload)
            newState.stations = action.payload;
            return newState;

        case 'FOCUS_ON_STATION':
            newState.focusStation = action.payload;
            return newState;

        case 'FOCUS_OFF_STATION':
            newState.focusPlant = {
                name: "",
                category: "",
                description: "",
                imgUrl: "",
                slot: Number,
                __v: 0,
                _id: ""
            };
            return newState;

        default:
            return newState;
    }
};

export default stationsReducer;