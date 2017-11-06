
import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'

export default class Authenticated extends Component {

    componentDidMount(){
        let self = this;
        setTimeout(function() {
            self.props.initRender();
        }, 2000)
    }

    render(){
        let state = this.props.state;
        let plantList = this.props.state.plants.map(function(plant, key){

            return (

                <div key={key} className="my-plants-plant-div col-xs-6 col-sm-4 col-md-3">
                    {plant.name}
                </div>

            )


        })
        return (
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

                    <div className="content-my-plants">
                        {
                            this.props.mainState.userMenu === "visible" ?
                        <div className="profile-menu">
                            <button className="profile-menu-button btn-all">Min profil</button>
                            <button className="profile-menu-button btn-all">Uppdatera plantor</button>
                            <button className="profile-menu-button btn-all">Tema</button>
                            <button className="profile-menu-button btn-all">Settings</button>
                            <button className="profile-menu-button btn-all" onClick={this.props.handleSignOut}>Sign Out</button>
                        </div>
                                : null

                        }

                        {plantList}

                    </div>
                    {/*<button className="btn-all btn-big my-plants-button" onClick={this.props.fetchPlants}>Uppdatera plantor</button>*/}
                </div>

            </div>
        )
    }
}
