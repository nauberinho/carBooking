/**
 * Created by naube on 2017-09-28.
 */

export function changeView (event){
    return {
        type: 'CHANGE_VIEW',
        payload: event
    }
}

export function bookCar(){
    return {
        type: 'BOOK_CAR'
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
