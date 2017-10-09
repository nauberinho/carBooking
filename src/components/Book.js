/**
 * Created by naube on 2017-09-28.
 */


import React, { Component } from 'react';

export default class Book extends Component {
    render(){

        let carList = this.props.state.cars;


        let mapList = carList.map((car, key) => {

            let bookBtn;
            car.status
                ? bookBtn = <button className='btn-default green-text' onClick={this.props.bookCar} data-id={car._id}>Book car</button>
                : bookBtn = <button className='btn-default red-text' onClick={this.props.bookCar} data-id={car._id}>Unbook car</button>


            return (
                <div key={key} className="book-li-wrapper col-xs-12">
                    <div className="col-sm-2"></div>
                    <div className="book-li-car-properties col-sm-4">
                        <div className="col-xs-12 col-sm-12 book-li" data-id={car._id} onClick={this.props.bookCar}>
                            <div className="col-xs-4">Märke: {car.brand}</div>
                            <div className="col-xs-4">Modell: {car.model}</div>
                            <div className="col-xs-4">Årsmodell: {car.year}</div>
                            <div className="col-xs-4">Växellåda: {car.gearbox}</div>
                            <div className="col-xs-4">Dagshyra: {car.dagshyra} SEK</div>
                            <div className="col-xs-4">Tillgänglig: {car.status ? <span className="green-text">JA</span> : <span className="red-text">Nej</span>}</div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="img-div col-sm-4">
                        <img className="book-li-img" src={car.imgLink} alt={car.imgLink}/>
                        {bookBtn}
                    </div>


                </div>

            )
        })
        return(
            <div className="book-container">

                <button className='btn-default' id='home' onClick={this.props.changeView}>Gå tillbaka</button>
                <div className="book-ul">
                    <div className="col-xs-12 book-ul-title"><h6>Cars to book</h6></div>
                    {mapList}
                </div>
            </div>
)
}
}
