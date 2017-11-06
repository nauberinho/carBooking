import '../style/main.css';
import Home from './Home.js';
import Book from './Book.js';
import Header from './Header.js'
import Authenticated from './Authenticated.js';
import Authentication from './Authentication.js';
import AuthNeeded from './NeedAuth.js';

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
    toggleMenu

} from '../actions/commonActions.js';

import {connect} from 'react-redux';
import React, { Component } from 'react';


class App extends Component {

  render() {
      console.log(this.props)
      return (


          <div className="main-container container-fluid simplebar">


              {
                  this.props.mainState.auth.user === true ?
                      <Authenticated
                          state={this.props.plantsState}
                          initRender={this.props.initRender}
                          fetchPlants={this.props.fetchPlants}
                          toggleMenu={this.props.toggleMenu}
                          mainState={this.props.mainState}
                          handleSignOut={this.props.handleSignOut}
                      />
                      :

                    null
              }

              {
                  this.props.mainState.view === 'home' &&  this.props.mainState.auth.user === false ?

                          <Authentication
                              handleSignIn={this.props.handleSignIn}
                              updateAuthObject={this.props.updateAuthObject}
                              state={this.props.mainState}
                              changeView={this.props.changeView}
                              handleCreateAccount={this.props.handleCreateAccount}
                              sayHello={this.props.sayHello}
                          />


                      :

                      null
              }


          </div>


      );
  }
}

const mapStateToProps = (state) => {
    return {
        mainState: state.mainReducer,
        carsState: state.carsReducer,
        plantsState: state.plantsReducer
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

            fetchPlants: () => {
            dispatch(fetchPlants())
            },

            toggleMenu: (event) => {
                dispatch(toggleMenu(event))
            },

        }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
