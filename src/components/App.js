

import '../style/main.css';
import Home from './Home.js';
import Book from './Book.js';
import Admin from './Admin.js';
import Authentication from './Authentication.js'
import SignInOrSignUp from './SignInOrSignUp.js'

import {
    changeView,
    updateCarChoice,
    bookCar, initialRender,
    addCar,
    removeCar,
    handleSignIn,
    updateAuthObject,
    handleCreateAccount,
    chooseAuthType
} from '../actions/commonActions.js'

import {connect} from 'react-redux';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (

        <div className="main-container">

            {
            this.props.mainState.view === 'home' ?
                (<Home changeView={this.props.changeView} state={this.props.mainState} initialRender={this.props.initialRender}/>,
                <SignInOrSignUp chooseAuthType={this.props.chooseAuthType}/>)

                :null
            }



            {
                this.props.mainState.view === 'book'
                    ?
                        this.props.mainState.auth.user === true ?
                            <Book bookCar={this.props.bookCar}
                            updateCarChoice={this.props.updateCarChoice}
                            state={this.props.carsState}
                            changeView={this.props.changeView}
                            />
                            :
                            this.props.mainState.auth.create === false && this.props.mainState.auth.signIn === false ?

                                <SignInOrSignUp chooseAuthType={this.props.chooseAuthType}/>

                                :

                                <Authentication handleSignIn={this.props.handleSignIn}
                                                updateAuthObject={this.props.updateAuthObject}
                                                state={this.props.mainState}
                                                changeView={this.props.changeView}
                                                handleCreateAccount={this.props.handleCreateAccount}

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
                    />
                        :

                        this.props.mainState.auth.create === false && this.props.mainState.auth.signIn === false ?

                            <SignInOrSignUp chooseAuthType={this.props.chooseAuthType}/>

                            :

                        <Authentication handleSignIn={this.props.handleSignIn}
                                        updateAuthObject={this.props.updateAuthObject}
                                        state={this.props.mainState}
                                        changeView={this.props.changeView}
                                        handleCreateAccount={this.props.handleCreateAccount}

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
}

    const mapDispatchToProps = (dispatch) => {
        return {
            changeView: (event) => {
                dispatch(changeView(event))
            },

            updateCarChoice: (event) => {
                dispatch(updateCarChoice(event))
            },

            bookCar: (event) => {
                dispatch(bookCar(event))
            },

            initialRender: () => {
                dispatch:( initialRender())
            },

            addCar: (event) => {
                dispatch: ( addCar(event))
            },

            removeCar: (event) => {
                dispatch: ( removeCar(event))
            },

            handleSignIn: (event) => {
                dispatch: (handleSignIn (event))
            },

            updateAuthObject: (event) => {
                dispatch: (updateAuthObject (event))
            },

            handleCreateAccount: (event) => {
                dispatch: (handleCreateAccount (event))
            },

            chooseAuthType: (event) => {
                dispatch: (chooseAuthType (event))
            }


        };
    }



export default connect(mapStateToProps, mapDispatchToProps)(App);
