

export function initRender (){
    return {
        type: 'INIT_RENDER'
    }
}

export function fetchPlants (){
    return {
        type: 'FETCH_PLANTS'
    }
}

export function changeView (event){
    return {
        type: 'CHANGE_VIEW',
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