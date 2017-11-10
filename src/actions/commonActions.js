import socket from '../socket.js'

export function initRender (){
    return {
        type: 'INIT_RENDER'
    }
}

export function changeView (event){
    return {
        type: 'CHANGE_VIEW',
        payload: event
    }
}

export function navigate (event){
    return {
        type: 'NAVIGATE',
        payload: event
    }
}


export function toggleMenu (event){
    return {
        type: 'TOGGLE_MENU',
        payload: event
    }
}

export function filter(event){
    return {
        type: 'FILTER',
        payload: event
    }
}

export function changeAuthType (event){

    return {
        type: 'CHANGE_AUTH_TYPE',
        payload: event
    }

}

export function updateAuthObject(event){
    return {
        type: 'UPDATE_AUTH_OBJECT',
        payload: event
    }
}

export function handleSignIn(event){
    return {
        type: 'HANDLE_SIGN_IN',
        payload: event
    }
}



export function handleSignOut(event){
    return {
        type: 'HANDLE_SIGN_OUT',
        payload: event
    }
}

export function handleCreateAccount(event){

    return {
        type: 'HANDLE_CREATE_ACCOUNT',
        payload: event
    }

}

export function updatePlantToAdd(event){
    return {
        type: 'UPDATE_PLANT_TO_ADD',
        payload: event
    }
}

export function addPlant(event){

    return {
        type: 'ADD_PLANT',
        payload: event
    }
}

export function water(plantId){
    socket.emit('user-water-plant', (
            {
                plant: {
                    id: plantId
                }
            }
        )
    );
    return (dispatch) => {
        socket.on('user-water-plant-confirmation', function(data){
            dispatch({type: 'WATER_PLANT', payload: data})
        })

    }
}

export function fetchPlants(){
    let userId = 1234;
    socket.emit('user-get-plants', ({id: userId}));
    return (dispatch) => {
        socket.on('user-get-plants-confirmation', function(data){
            dispatch({type: 'UPDATE_PLANTS', payload: data})
        })

    }
}

export function focusOnPlant (plantId){
    socket.emit('user-get-one-plant', (
            {
                plant: {
                    id: plantId
                }
            }
        )
    );
    return (dispatch) => {
        socket.on('user-get-one-plant-confirmation', function(data){
            dispatch({type: 'FOCUS_ON_PLANT', payload: data})
        })

    }
}

