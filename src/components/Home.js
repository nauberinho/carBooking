/**
 * Created by naube on 2017-09-28.
 */

import React, { Component } from 'react';

export default class Home extends Component {

    componentWillMount() {
        this.props.initialRender();
    }

    render(){
        return(
            <div>
                HOME

                <button id='book' onClick={this.props.changeView}>Book a car</button>
                <button id='logIn' onClick={this.props.changeView}>Log in as administrator</button>

            </div>
        )
    }
}