

import '../style/main.css';
import Home from './Home.js';
import Book from './Book.js';
import Admin from './Admin.js';
import Authentication from './Authentication.js';



import {
    changeView,
    updateCarChoice,
    bookCar,
    editCar,
    addCar,
    removeCar,
    handleSignIn,
    updateAuthObject,
    handleCreateAccount,
    changeAuthType,
    handleSignOut,
    updateCarsList,
    filter,
    filterAll,
    unBookCar
} from '../actions/commonActions.js';

import {connect} from 'react-redux';
import React, { Component } from 'react';


class App extends Component {

  render() {
      console.log(this.props)
      return (
          <div className="main-container container-fluid simplebar">

              {
                  this.props.mainState.view === 'home' ?
                      <Home changeView={this.props.changeView} state={this.props.mainState} initialRender={this.props.initialRender}/>
                      :null
              }

              {
                  this.props.mainState.view === 'book'
                      ?
                      this.props.mainState.auth.user === true ?
                          <Book bookCar={this.props.bookCar}
                                unBookCar={this.props.unBookCar}
                                updateCarsList={this.props.updateCarsList}
                                updateCarChoice={this.props.updateCarChoice}
                                state={this.props.carsState}
                                changeView={this.props.changeView}
                                handleSignOut={this.props.handleSignOut}
                                filter={this.props.filter}
                                filterAll={this.props.filterAll}
                          />
                          :


                          <Authentication handleSignIn={this.props.handleSignIn}
                                          updateAuthObject={this.props.updateAuthObject}
                                          state={this.props.mainState}
                                          changeView={this.props.changeView}
                                          handleCreateAccount={this.props.handleCreateAccount}
                                          sayHello={this.props.sayHello}

                          />
                      :null
              }

              {
                  this.props.mainState.view === 'logIn'?
                      this.props.mainState.auth.admin === true ?
                          <Admin
                              state={this.props.carsState}
                              changeView={this.props.changeView}
                              addCar={this.props.addCar}
                              removeCar={this.props.removeCar}
                              editCar={this.props.editCar}
                              updateCarsList={this.props.updateCarsList}
                              handleSignOut={this.props.handleSignOut}
                          />
                          :


                          <Authentication handleSignIn={this.props.handleSignIn}
                                          updateAuthObject={this.props.updateAuthObject}
                                          state={this.props.mainState}
                                          changeView={this.props.changeView}
                                          handleCreateAccount={this.props.handleCreateAccount}
                                          sayHello={this.props.sayHello}

                          />
                      :null
              }
          </div>


      );
  }
}

const mapStateToProps = (state) => {
    return {
        mainState: state.mainReducer,
        carsState: state.carsReducer
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

            filterAll: (event) => {
               dispatch(filterAll(event))
            },

            updateCarsList: () => {
                dispatch(updateCarsList())
            },

            updateCarChoice: (event) => {
                dispatch(updateCarChoice(event))
            },

            bookCar: (event) => {
                dispatch(bookCar(event))
            },

            unBookCar: (event) => {
            dispatch(unBookCar(event))
             },

            addCar: (event) => {
                dispatch( addCar(event))
            },

            editCar: (car, id) => {
            dispatch(editCar(car, id))
            },


            removeCar: (event) => {
                dispatch( removeCar(event))
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
            }


        }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
