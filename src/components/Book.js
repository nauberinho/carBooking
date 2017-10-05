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
                <li data-id={car._id} key={key} onClick={this.props.bookCar}>

                    {car._id}

                </li>
            )


        })

        return(
            <div>

                <select onChange={this.props.updateCarChoice} defaultValue="Mercedes">

                    <option value="59d51bcce4f30c0bac5e8e08">Only value</option>

                </select>

                <button id='home' onClick={this.props.changeView}>Go Back</button>







                        <ul>

                            {mapList}

                        </ul>




            </div>

)

}
}
