import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class MyStations extends Component {
    componentDidMount(){

        let sessionUser = this.props.mainState.auth.sessionUser;
        let username = sessionUser.username;
        let password = sessionUser.password;
        this.props.fetchStations('Gunz');
    }
    render(){
        let state = this.props.state;
        let stations = this.props.stationsState.stations;
        let stationsList = stations.map(function(station, key){
            return (
                <Link to={"/signedin/mystations/" + station._id} key={key} className="my-stations-station-div col-xs-6 col-sm-4 col-md-3">
                <div>{station.name}</div>
                </Link>
            )
        });
        return (
            <div className="content content-main">
                <div className="my-stations-header">
                    <div className="my-stations-header-overview column">
                        <div className="vertically-centered">
                            You've got {stations.length} stations registered
                        </div>
                    </div>
                </div>
                <div className="display-stations-div">
                    {stationsList}
                </div>
            </div>
        )
    }
}
