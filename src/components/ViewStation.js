import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import PulseLoaderViewstation from './PulseLoader.js';
import "react-toggle/style.css"
import Toggle from 'react-toggle'

export default class ViewStation extends Component{
    componentWillMount(){
        this.forceUpdate()
        let username = this.props.mainState.auth.sessionUser.username;
        let stationName= this.props.match.params.station;
        console.log(this.props);
        this.props.fetchStations(username)
        //Retrieving desired station from database on render, based on the "station" parameter of the router.
        this.props.fetchOneStation(username, stationName);
    }
    render(){
        let state = this.props.stationsState;
        if(state.focusStation !== {}) {
            let username = this.props.mainState.auth.sessionUser.username;

            let focusStation = state.focusStation;
            console.log(focusStation, ' =plants')
            let stationParam = this.props.match.params.station;
            console.log(stationParam)
            let navButtons = state.stations.map((station, key) => {
                return (
                    <Link key={key} className="view-station-nav-button centered"
                          to={"/signedin/mystations/" + station.name} onClick={() => {
                        this.props.fetchOneStation(username, station.name)
                    }}>
                        {station._id === this.props.match.params.station ?
                            <i className="fa fa-square" aria-hidden="true"></i>
                            :
                            <i className="fa fa-square-o" aria-hidden="true"></i>
                        }
                    </Link>
                )
            });

            let plantsList = state.focusStation.plants.map(function (plant, key) {

                return (
                    <Link to={"/signedin/mystations/" + plant._id} key={key}
                          className="my-plants-plant-div col-xs-6 col-sm-4 col-md-3 vertically-centered">
                        <div className="plant-div-name column">
                            <div className="centered">{plant.name}</div>
                        </div>
                        <div className="plant-div-name column">
                            <div className="centered">{plant.date}</div>
                        </div>
                        <div className="plant-div-img-wrapper column"><img className="plant-div-plant-img centered"
                                                                           src={plant.imgUrl} alt={plant.imgUrl}/></div>
                        <Link to={"/signedin/myplants/" + plant._id} className="btn-all btn-big plant-div-view-button">View</Link>
                    </Link>
                )
            });


            return (

                <div className="content content-main" id="Item_VIEW">

                    { focusStation.name === stationParam ?
                        <div>
                            {focusStation.name}
                            <div className="column">

                                {plantsList}
                            </div>
                            {navButtons}

                        </div>
                        :
                        <div className="col-sm-12 column div-cover">
                            <PulseLoaderViewstation/>
                        </div>

                    }
                </div>
            )
        }
    }
}

