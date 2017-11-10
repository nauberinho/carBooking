
import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import MyPlants from './MyPlants.js';
import ViewPlant from './ViewPlant.js';
import AddPlant from './AddPlant.js';
import ProfileMenu from './ProfileMenu.js';

export default class Authenticated extends Component {

    componentDidMount(){
        let self = this;


        console.log(this.props.match)

    }

    render(){
        let state = this.props.state;
        let self = this;

        return (
            <BrowserRouter>
                <div className="authenticated-container">

                    <div className="authenticated-content">

                        <div className="content-header">
                            <div className="content-header-title">
                                C.H.I.P. Watering <br/>
                                <span className="header-content-span">Don't give up on your plants</span>
                            </div>

                                <div className="content-header-menu">
                                <span className="content-header-menu-span">
                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                </span>
                                    <button data-id="toggleUserMenu" className="btn-cover" onClick={this.props.toggleMenu}></button>
                                </div>
                        </div>
                        <div className="content-wrapper">
                            {
                                state.userMenu === "visible" ?
                                    <ProfileMenu
                                        navigate={this.props.navigate}
                                        handleSignOut={this.props.handleSignOut}
                                    />
                                : null
                            }
                            <Switch>

                                <Route exact path="/signedin" render={(props) =>
                                    (
                                        <Redirect to="/signedin/myplants"/>
                                    )
                                }>
                                </Route>

                                <Route exact path="/signedin/myplants" render={(props) => (
                                    <MyPlants
                                    state={state}
                                    plantsState={this.props.plantsState}
                                    match={this.props.match}
                                    />
                                )}>
                                </Route>

                                <Route path="/signedin/addplant" render={(props) => (
                                    <AddPlant
                                        state={state}
                                        plantsState={this.props.plantsState}
                                        updatePlantToAdd={this.props.updatePlantToAdd}
                                        addPlant={this.props.addPlant}
                                    />
                                )}>
                                </Route>

                                <Route path="/signedin/myplants/:plant" render={(props) => (
                                    <ViewPlant
                                        match={props.match}
                                        water={this.props.water}
                                        focusOnPlant={this.props.focusOnPlant}
                                        state={this.props.plantsState}
                                    />
                                )}>

                                </Route>

                                <Route path="/signedin/myprofile" render={(props) => (
                                    <div className="content content-main">
                                        MY PROFILE
                                    </div>
                                )}>
                                </Route>



                                <Route path="/signedin/mysettings" render={(props) => (
                                    <div className="content content-main">
                                        MY SETTINGS
                                    </div>

                                )}>
                                </Route>

                                <Route path="/signedin/updateplants" render={(props) => (
                                    <div className="content content-main">
                                        UPDATE MY PLANTS
                                    </div>
                                )}>
                                </Route>

                                <Route exact path="/" render={(props) => (
                                    <Redirect to="/home"/>

                                )}>
                                </Route>

                            </Switch>
                    </div>
                        {/*<button className="btn-all btn-big my-plants-button" onClick={this.props.fetchPlants}>Uppdatera plantor</button>*/}
                    </div>

                </div>
            </BrowserRouter>
        )
    }
}
