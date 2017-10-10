/**
 * Created by naube on 2017-09-28.
 */

function updateUser() {
    var req = new XMLHttpRequest;
    var user = {};
    req.open('GET', "http://localhost:7000/api/cars/signin:id");
    req.send();
    req.onreadystatechange = function () {
        console.log('onreadystatechange')
        if (this.readyState == 4 && this.status == 200) {
            setTimeout(function () {
                user = JSON.parse(req.response);
                console.log(user)
            }, 100)
        }
    }
    return user;
}

const mainReducer = (state = {
    view: "home",
    auth: {
        user: false,
        admin: false,
        authObject: {},
        create: true,
        signIn: false
    },

}, action) => {
    let newState = {...state};
    switch(action.type){
        case 'CHANGE_VIEW':
            if(action.payload.target.getAttribute('data-id') === 'signIn' || action.payload.target.getAttribute('data-id') === 'create'){
                let bool = true;
                if(newState.auth[action.payload.target.getAttribute('data-id')] === true){
                    bool = false
                }
                else{
                    bool = true;
                }
                newState.auth.signIn = false;
                newState.auth.create = false;
                newState.auth[action.payload.target.getAttribute('data-id')] = bool;
                console.log('changed auth type')
            }
            console.log('changing view');

            if(action.payload.target.getAttribute('data-id') !== 'signIn' && action.payload.target.getAttribute('data-id') !== 'create') {
            newState = {...newState, view: action.payload.target.id};
            }
            return newState;



        case 'INITIAL_RENDER':
            //To use later
            return newState

        case 'HANDLE_SIGN_IN':
            action.payload.preventDefault();
            let pushSubmit = new XMLHttpRequest();
            pushSubmit.open('POST', 'http://localhost:7000/api/cars/signin', true);
            pushSubmit.setRequestHeader("Content-Type", "application/json");
            pushSubmit.send(JSON.stringify(newState.auth.authObject));
            setTimeout(function(){
                pushSubmit.open('GET', 'http://localhost:7000/api/cars/signin', true);
                pushSubmit.setRequestHeader("Content-Type", "application/json");
                pushSubmit.send(JSON.stringify(newState.auth.authObject));
            }, 200)

            return newState;

        case 'HANDLE_CREATE_ACCOUNT':
            action.payload.preventDefault();
            let create = new XMLHttpRequest();
            create.open('POST', 'http://localhost:7000/api/cars/add', true);
            create.setRequestHeader("Content-Type", "application/json");
            create.send(JSON.stringify(newState.auth.authObject));

            return newState;

        case 'UPDATE_AUTH_OBJECT':
            console.log('updating')
            newState.auth.authObject[action.payload.target.id] = action.payload.target.id

            return newState;

        case 'SAY_HELLO':
            console.log('HELLO WORLD')

            return newState;

        default:
            return newState;
    }

}
export default mainReducer;