/**
 * Created by naube on 2017-09-28.
 */


import React, { Component } from 'react';

export default class Book extends Component {
    render(){

        let carList = this.props.state.cars;
        console.log(carList)

        let mapList = carList.map((car, key) => {
            return (
                <li className="col-xs-6 col-sm-4 col-md-3 book-li" data-id={car._id} key={key} onClick={this.props.bookCar}>
                    <div className="col-xs-12">Märke: {car.brand}</div>
                    <div className="col-xs-12">Modell: {car.model}</div>
                    <div className="col-xs-12">Årsmodell: {car.year}</div>
                    <div className="col-xs-12">Växellåda: {car.gearbox}</div>
                    <div className="col-xs-12">Dagshyra: {car.dagshyra}</div>
                    <img className="book-li-img" src={car.imgLink} alt={car.imgLink}/>
                </li>
            )
        })
        return(
            <div className="book-container">

                <button className='btn-default' id='home' onClick={this.props.changeView}>Go Back</button>
                <ul className="book-ul">
                    <div className="col-xs-12 book-ul-title"><h6>Cars to book</h6></div>
                    {mapList}
                </ul>
            </div>
)
}
}
