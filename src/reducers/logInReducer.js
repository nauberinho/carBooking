/**
 * Created by naube on 2017-10-09.
 */





const logInReducer = (state = {
    display: false

}, action) => {

    let newState = {...state};

    switch(action.type){
        case 'ADD_CAR':
            let pushSubmit = new XMLHttpRequest();
            console.log(JSON.stringify(action.payload))
            pushSubmit.open('POST', 'http://localhost:7000/api/cars/add', false);
            pushSubmit.setRequestHeader("Content-Type", "application/json");
            pushSubmit.send(JSON.stringify(action.payload));
            console.log('ADD COMPLETE')
            return newState;

        case 'EDIT_CAR':
            let updateData = new XMLHttpRequest();
            updateData.open('POST', 'http://localhost:7000/api/cars/update?id=' + action.id, true);
            updateData.setRequestHeader("Content-Type", "application/json");
            updateData.send(JSON.stringify(action.car));
            console.log('EDIT COMPLETE')
            return newState;

        case 'REMOVE_CAR':
            let removeSubmit = new XMLHttpRequest();
            removeSubmit.open('POST', 'http://localhost:7000/api/cars/remove?id=' + action.payload, true);
            removeSubmit.send();
            return newState;


        default:
            return newState;

    }

}

export default logInReducer;