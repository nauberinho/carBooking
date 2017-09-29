/**
 * Created by naube on 2017-09-28.
 */


import React, { Component } from 'react';

export default class Book extends Component {
    render(){
        return(
            <div>
                <select onChange={this.props.updateCarChoice} defaultValue="Mercedes">
                    <option value="Audi">Audi</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Volvo">Volvo</option>
                </select>

                <button onClick={this.props.bookCar}>Book your car</button>
                <button id='home' onClick={this.props.changeView}>Go Back</button>
            </div>
        )
    }
}
