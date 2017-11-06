



const plantsReducer = (state = {
    plants: []


}, action) => {
    let newState = {...state};
    let plantsList;
    let self = this;
    switch(action.type){

        case 'INIT_RENDER':


            var request = new Request('https://sigma-itc-watering.herokuapp.com/plants', {
                method: 'GET',
                mode: "cors",
                headers: new Headers()
            });
            fetch(request) // Transform the data into json
                .then(function(response) {
                    return response.text();
                }).then(function(response) {
                console.log(response)
                modifyState(JSON.parse(response));
            });

            function modifyState(data) {

                newState.plants = data;
            }

            return newState;

        case 'FETCH_PLANTS':

            let self = this;
            var request = new Request('https://sigma-itc-watering.herokuapp.com/plants', {
                method: 'GET',
                mode: "cors",
                headers: new Headers()
            });
            fetch(request) // Transform the data into json
                .then(function(response) {
                    return response.text();
                }).then(function(response) {
                console.log(response)
                modifyState(JSON.parse(response));
            });

            function modifyState(data) {
                newState.plants = data;
            }

            return newState;

        default:
            return newState;
    }



}
export default plantsReducer;