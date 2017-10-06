

import '../style/main.css';
import Home from './Home.js';
import Book from './Book.js';
import LogIn from './LogIn.js';

import {changeView, updateCarChoice, bookCar, initialRender} from '../actions/commonActions.js'

import {connect} from 'react-redux';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (

        <div className="main-container">

        {
            this.props.mainState.view === 'home'?
                <Home changeView={this.props.changeView} state={this.props.mainState} initialRender={this.props.initialRender}/>
                :null
        }

            {
                this.props.mainState.view === 'book'?
                    <Book bookCar={this.props.bookCar} updateCarChoice={this.props.updateCarChoice} state={this.props.carsState} changeView={this.props.changeView}/>
                    :null
            }

            {
                this.props.mainState.view === 'logIn'?
                    <LogIn state={this.props.mainState} changeView={this.props.changeView}/>
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
            }


        };
    }



export default connect(mapStateToProps, mapDispatchToProps)(App);
