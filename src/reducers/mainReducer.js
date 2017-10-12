/**
 * Created by naube on 2017-09-28.
 */

function updateUser(user) {
    var req = new XMLHttpRequest;
    req.open('GET', "http://localhost:7000/api/cars/signin?id=" + user);
    req.send();
    req.onreadystatechange = function () {
        console.log('onreadystatechange')
        if (this.readyState === 4 && this.status === 200) {
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
        authObject: {
            username: "",
            password: "",
            signedIn: false,
            type: ""

        },
        create: false,
        signIn: false
    },

}, action) => {
    let newState = {...state};
    switch(action.type){

        case 'HANDLE_SIGN_IN':
            let pushSubmit = new XMLHttpRequest();
            pushSubmit.open('POST', 'http://localhost:7000/api/signin', true);
            pushSubmit.setRequestHeader("Content-Type", "application/json");
            pushSubmit.send(JSON.stringify(newState.auth.authObject));
            pushSubmit.onreadystatechange = function () {
                console.log('onreadystatechange')
                if (this.readyState === 4 && this.status === 200) {

                        let user = JSON.parse( pushSubmit.response);
                        newState.auth.authObject = user;
                        if(user.type === "admin"){
                            newState.auth.admin = true;
                            newState.auth.user = true;
                        }
                        else if(user.type === "user"){
                            newState.auth.admin = false;
                            newState.auth.user = true;
                        }
                        console.log(user)

                }
            }
            return newState;

        case 'HANDLE_SIGN_OUT':
            let signOutReq = new XMLHttpRequest();
            signOutReq.open('POST', 'http://localhost:7000/api/signout', true);
            signOutReq.setRequestHeader("Content-Type", "application/json");
            signOutReq.send(JSON.stringify(newState.auth.authObject));
            signOutReq.onreadystatechange = function () {
                console.log('onreadystatechange')
                if (this.readyState === 4 && this.status === 200) {

                        let user = JSON.parse( signOutReq.response);
                        newState.auth.authObject = {
                        username: "",
                            password: "",
                            signedIn: false,
                            type: ""

                    };

                            newState.auth.admin = false;
                            newState.auth.user = false;
                            newState.view = "home"



                }
            }
            return newState;

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
                newState.auth.signIn = false;
                newState.auth.create = false;
            }
            return newState;



        case 'HANDLE_CREATE_ACCOUNT':
            action.payload.preventDefault();
            let create = new XMLHttpRequest();
            create.open('POST', 'http://localhost:7000/api/cars/createaccount', true);
            create.setRequestHeader("Content-Type", "application/json");
            create.send(JSON.stringify(newState.auth.authObject));

            return newState;

        case 'UPDATE_AUTH_OBJECT':
            console.log('updating')
            newState.auth.authObject[action.payload.target.getAttribute('data-id')] = action.payload.target.value;

            return newState;

        case 'SAY_HELLO':
            console.log('HELLO WORLD')
            newState = {...newState}

            return newState;

        default:
            return newState;
    }



}
export default mainReducer;