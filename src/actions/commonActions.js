/**
 * Created by naube on 2017-09-28.
 */

export function changeView (event){
    return {
        type: 'CHANGE_VIEW',
        payload: event
    }
}



export function changeAuthType (event){

    return {
        type: 'CHANGE_AUTH_TYPE',
        payload: event
    }

}

export function bookCar(event){
    return {
        type: 'BOOK_CAR',
        payload: event
    }
}

export function updateCarChoice(event){
    return {
        type: 'UPDATE_CAR_CHOICE',
        payload: event
    }
}

export function initialRender(){
    return {
        type: 'INITIAL_RENDER'
    }
}


export function addCar(event){
    return {
        type: 'ADD_CAR',
        payload: event
    }
}

export function removeCar(event){
    return {
        type: 'ADD_CAR',
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

export function handleCreateAccount(event){

    return {
        type: 'HANDLE_CREATE_ACCOUNT',
        payload: event
    }

}

export function sayHello(event){

    return {
        type: 'SAY_HELLO',
        payload: event
    }

}



