/**
 * Created by naube on 2017-09-28.
 */

import React, { Component } from 'react';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeCar = this.removeCar.bind(this);
        this.state = {
            updatedCar: {

                fordonstyp: "Fordonstyp",
                requiredDrivingLicense:"B",
                brand: "Märke",
                model: "Modell",
                year: 0,
                gearbox: "Växellåda",
                dagshyra: 0,
                fuel: "Bränsle",
                imgLink: "Bildlänk",

            }
        };
    }

handleSubmit(event) {
    event.preventDefault();
    let pushSubmit = new XMLHttpRequest();
    pushSubmit.open('POST', 'http://localhost:7000/api/cars/add', true);
    pushSubmit.setRequestHeader("Content-Type", "application/json");
    pushSubmit.send(JSON.stringify(this.state.updatedCar));
}

handleChange(event) {
    this.setState({updatedCar: { [event.target.id]: event.target.value }});
}

placeholderEvent() {

}

removeCar(event) {
    let removeSubmit = new XMLHttpRequest();
    removeSubmit.open('POST', 'http://localhost:7000/api/cars/remove?id=' + event.target.id, true);
    removeSubmit.send();
}

    render(){
        let carsList = this.props.state.cars.map((car, key) => {
            return (<div key={key}>
                <li>
                    <img src={car.imgLink} alt={'Link to img: ' + car.imgLink} width="200px"/>
                    <br/>
                    {car.brand}, {car.model}, {car.year}
                    <br/>
                    Biltyp: {car.fordonstyp}
                    <br/>
                    Behörighet: {car.requiredDrivingLicense}
                    <br/>
                    Växellåda: {car.gearbox}
                    <br/>
                    Drivmedel: {car.fuel}
                    <br/>
                    Dagshyra: {car.dagshyra}
                    <br/>
                    Tillgänglig: {car.status ? 'Ja' : 'Nej'}
                    <br/>
                    <button id={car._id} onClick={this.removeCar}> Ta bort </button>
                    <p/>
                </li>
            </div>)
        });

        return(
            <div>
                <button className='btn-default' id='home' onClick={this.props.changeView}>Gå tillbaka</button>

                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <input defaultValue={this.state.updatedCar.fordonstyp} placeholder="Fordonstyp" id="fordonstyp" onChange={this.placeholderEvent} />
                    <br/>
                    <input defaultValue={this.state.updatedCar.requiredDrivingLicense} placeholder="Behörighet" id="requiredDrivingLicense" onChange={this.placeholderEvent} />
                    <br/>
                    <input defaultValue={this.state.updatedCar.brand} placeholder="Märke" id="brand" onChange={this.placeholderEvent} />
                    <br/>
                    <input defaultValue={this.state.updatedCar.model} placeholder="Modell" id="model" onChange={this.placeholderEvent} />
                    <br/>
                    <input defaultValue={this.state.updatedCar.year} placeholder="År" id="year" onChange={this.placeholderEvent} />
                    <br/>
                    <input defaultValue={this.state.updatedCar.fuel} placeholder="Bränsle" id="fuel" onChange={this.placeholderEvent} />
                    <br/>
                    <input defaultValue={this.state.updatedCar.gearbox} placeholder="Växellåda" id="gearbox" onChange={this.placeholderEvent} />
                    <br/>
                    <input defaultValue={this.state.updatedCar.dagshyra} placeholder="Dagshyra" id="dagshyra" onChange={this.placeholderEvent} />
                    <br/>
                    <input defaultValue={this.state.updatedCar.imgLink} placeholder="Bildlänk" id="imgLink" onChange={this.placeholderEvent} />
                    <br/>
                    <button>Spara</button>
                </form>

                <br/><hr/><br/>
                <h4>Ta bort bil</h4>
                <ul>
                    {carsList}
                </ul>
            </div>
        )
    }
}