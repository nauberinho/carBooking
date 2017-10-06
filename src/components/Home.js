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
            <div className="home-btns">
                <button className='btn-default col-xs-3' id='book' onClick={this.props.changeView}>Book a car</button>
                <button className='btn-default col-xs-3' id='logIn' onClick={this.props.changeView}>Log in as administrator</button>
            </div>
        )
    }
}