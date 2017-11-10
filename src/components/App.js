import '../style/main.css'
import Header from './Header.js'
import Authenticated from './Authenticated.js';
import Authentication from './Authentication.js';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import socket from '../socket.js'
import {
    changeView,
    initRender,
    handleSignIn,
    updateAuthObject,
    handleCreateAccount,
    changeAuthType,
    handleSignOut,
    filter,
    fetchPlants,
    toggleMenu,
    navigate,
    water,
    focusOnPlant,
    updatePlantToAdd,
    addPlant

} from '../actions/commonActions.js';

import {connect} from 'react-redux';
import React, { Component } from 'react';


class App extends Component {

    componentDidMount(){
        console.log(this)

        this.props.fetchPlants();
        socket.on('water-confirmation', function(data) {
            console.log(data)
        })

    }

  render() {

      return (

          <BrowserRouter>
              <div className="main-container container-fluid simplebar">

                  <Route exact path="/" render={(props) =>
                      (
                          <Redirect to="/home"/>
                      )
                  }>
                  </Route>

                          <Route path="/home" render={(props) =>
                              (
                                  <Authentication
                                      handleSignIn={this.props.handleSignIn}
                                      updateAuthObject={this.props.updateAuthObject}
                                      state={this.props.mainState}
                                      changeView={this.props.changeView}
                                      handleCreateAccount={this.props.handleCreateAccount}
                                      sayHello={this.props.sayHello}
                                  />
                              )
                          }>
                          </Route>

                          <Route path="/signedin" render={(props) =>
                              (
                                  <Authenticated
                                      state={this.props.authenticatedState}
                                      plantsState={this.props.plantsState}
                                      initRender={this.props.initRender}
                                      fetchPlants={this.props.fetchPlants}
                                      toggleMenu={this.props.toggleMenu}
                                      mainState={this.props.mainState}
                                      handleSignOut={this.props.handleSignOut}
                                      navigate={this.props.navigate}
                                      water={this.props.water}
                                      match={props.match}
                                      focusOnPlant={this.props.focusOnPlant}
                                      updatePlantToAdd={this.props.updatePlantToAdd}
                                      addPlant={this.props.addPlant}
                                  />
                              )
                          }>

                              <Route exact path="/" render={(props) =>
                                  (
                                      <Redirect to="/home"/>
                                  )
                              }>
                              </Route>
                          </Route>
              </div>
          </BrowserRouter>


      );
  }
}

const mapStateToProps = (state) => {
    return {
        mainState: state.mainReducer,
        carsState: state.carsReducer,
        plantsState: state.plantsReducer,
        authenticatedState: state.authenticatedReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
            changeView: (event) => {
                dispatch(changeView(event))
            },

            filter: (event) => {
              dispatch(filter(event))
            },

            handleSignIn: (event) => {
                dispatch(handleSignIn (event))
            },

            updateAuthObject: (event) => {
                dispatch(updateAuthObject (event))
            },

            handleCreateAccount: (event) => {
                dispatch(handleCreateAccount (event))
            },

            changeAuthType: (event) => {
                dispatch(changeAuthType (event))
            },

            handleSignOut: (event) => {

                dispatch(handleSignOut(event))
            },

            initRender: () => {

                dispatch(initRender())
            },



            toggleMenu: (event) => {
                dispatch(toggleMenu(event))
            },

            navigate: (event) => {
                dispatch(navigate(event))
            },

            fetchPlants: (data) => {
                dispatch(fetchPlants(data))
            },


            focusOnPlant: (plantId) => {

            dispatch(focusOnPlant(plantId))
            },

            water: (event) => {
                dispatch(water(event))
            },

            updatePlantToAdd: (event) => {
                dispatch(updatePlantToAdd(event))
            },

            addPlant: (event) => {
                dispatch( addPlant(event))

            }
        }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
