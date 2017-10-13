
export function changeView (event){
    return {
        type: 'CHANGE_VIEW',
        payload: event
    }
}

export function filter(event){
    return {
        type: 'FILTER',
        payload: event
    }
}

export function filterAll(event){
    return {
        type: 'FILTER_ALL',
        payload: event
    }
}

export function updateCarsList() {
    return {
        type: 'UPDATE_CARS_LIST'
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

export function unBookCar(event){
    return {
        type: 'BOOK_CAR',
        payload: event
    }
}

export function addCar(car){
    return {
        type: 'ADD_CAR',
        payload: car
    }
}

export function editCar(car, id) {
    return {
        type: 'EDIT_CAR',
        car: car,
        id: id
    }
}

export function removeCar(id){
    return {
        type: 'REMOVE_CAR',
        payload: id
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

export function sayHello(){

    return {
        type: 'SAY_HELLO'

    }

}



