
/**
 * Created by naube on 2017-09-28.
 */

import React, { Component } from 'react';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.changeAvailability = this.changeAvailability.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeCar = this.removeCar.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.placeholder = this.placeholder.bind(this);
        this.updateData = this.updateData.bind(this);
        this.apiGet = this.apiGet.bind(this);

        this.state = {
            vehicle : {
                fordonstyp: '',
                requiredDrivingLicense: '',
                brand: '',
                model: '',
                year: 0,
                gearbox: '',
                dagshyra: 0,
                fuel: '',
                imgLink: '',
            },
            modal:false,
            editing:false,
            editId:'',
            cars:[],
        };
    }

    componentDidMount() {
        var self = this;
        setTimeout(function() {
            self.apiGet();
        },250)
    }

    apiGet() {
        console.log('API CALL')
        var req = new XMLHttpRequest();
        var carsList = [];
        req.open('GET', "http://localhost:7000/api/cars", false);
        req.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(req.response);
                console.log('Updated data!')
                console.log(data)
                for (var car in data) {
                    carsList.push(data[car])
                }
                
            }           
        }
        req.send();
        this.setState({cars: carsList});
    }

    handleSubmit() {
        let pushSubmit = new XMLHttpRequest();
            pushSubmit.open('POST', 'http://localhost:7000/api/cars/add', true);
            pushSubmit.setRequestHeader("Content-Type", "application/json");
            pushSubmit.send(JSON.stringify(this.state.vehicle));
        this.closeModal();
        var self = this;
        setTimeout(function() {
            self.apiGet();
        },250)
    }

    handleChange(event) {
        var stateCopy = Object.assign({}, this.state.vehicle);
        stateCopy[event.target.id] = event.target.value;
        this.setState({vehicle:stateCopy})
    }

    changeAvailability(car) {
        let statusChange = new XMLHttpRequest();
            statusChange.open('POST', 'http://localhost:7000/api/cars/availability?id=' + car._id, true);
            statusChange.send();
        var self = this;
        setTimeout(function() {
            self.apiGet();
        },250)
    }

    updateData() {
        let updateData = new XMLHttpRequest();
            updateData.open('POST', 'http://localhost:7000/api/cars/update?id=' + this.state.editId, true);
            updateData.setRequestHeader("Content-Type", "application/json");
            updateData.send(JSON.stringify(this.state.vehicle));
        this.closeModal();
        var self = this;
        setTimeout(function() {
            self.apiGet();
        },250)
    }


    openModal(action, car) {
        switch(action) {
            case 'edit':
                let editId = car._id;
                this.setState({editing:true});
                this.setState({modal:true});
                this.setState({editId:editId});
                let actionData = {
                    fordonstyp: car.fordonstyp,
                    requiredDrivingLicense: car.requiredDrivingLicense,
                    brand: car.brand,
                    model: car.model,
                    year: car.year,
                    gearbox: car.gearbox,
                    dagshyra: car.dagshyra,
                    fuel: car.fuel,
                    imgLink: car.imgLink,
                }
                this.setState({vehicle:actionData})
                break;
            case 'new' : 
                this.setState({editing:false});
                this.setState({modal:true});
                break;
        }
    }

    closeModal() {
        this.setState({modal:false})
    }

    placeholder(event) {
        event.preventDefault();
    }

    removeCar(car) {
        let removeSubmit = new XMLHttpRequest();
            removeSubmit.open('POST', 'http://localhost:7000/api/cars/remove?id=' + car._id, true);
            removeSubmit.send();
        var self = this;
        setTimeout(function() {
            self.apiGet();
        },250)

    }

    render(){
        var carsList = this.state.cars.map((car, key) => {
            return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key}>
                    <div className="card">
                        <div className="card-img-align">
                            <img className="card-img-top" src={car.imgLink} alt={'Missing image of: ' + car.brand + ', ' + car.model} width="200px"/>
                        </div>
                        <div className="card-block">
                            <h4 className="card-title">{car.brand}, {car.model}</h4>
                            <p className="card-text">Produktionsår: <span className="text-bold">{car.year}</span></p>
                            <p className="card-text">Fordonstyp: <span className="text-bold">{car.fordonstyp}</span></p>
                            <p className="card-text">Behörighet: <span className="text-bold">{car.requiredDrivingLicense}</span></p>
                            <p className="card-text">Växellåda: <span className="text-bold">{car.gearbox}</span></p>
                            <p className="card-text">Bränsle: <span className="text-bold">{car.fuel}</span></p>
                            <p className="card-text">Dagshyra: <span className="text-bold">{car.dagshyra}kr</span></p>
                            <p className="card-text">Status: {car.status ? (<span className="green-text text-bold">Tillgänglig</span>) : (<span className="red-text text-bold">Bokad</span>)}</p>
                            <hr/>
                            <button className="btn-default" onClick={() => {this.changeAvailability(car)}}> Ändra tillgänglighet </button>
                            <button className="btn-default" onClick={() => {this.removeCar(car)}}> <span className="red-text">Ta bort</span> </button>
                            <button className="btn-default" onClick={() => {this.openModal('edit', car)}}> <span className="orange-text">Ändra</span> </button>
                            <p/>
                        </div>
                    </div>
                </div>
            );
        });

        var form  = (
            <div id="form_overlay">
                <div className="container valign-helper">
                    <form onSubmit={this.placeholder} onChange={this.handleChange} className="card row">
                        <h3 className="text-center">
                            {this.state.editing ? 'Ändra' : 'Lägg till ny'}
                        </h3>
                        <input placeholder="Märke" className="form-control col-xs-6" value={this.state.vehicle.brand} id="brand" />
                        <input placeholder="Modell" className="form-control col-xs-6" value={this.state.vehicle.model} id="model" />
                        <input placeholder="Fordonstyp" className="form-control col-xs-6" value={this.state.vehicle.fordonstyp} id="fordonstyp" />
                        <input placeholder="Produktionsår" className="form-control col-xs-6" value={this.state.vehicle.year} id="year" />
                        <input placeholder="Bränsle" className="form-control col-xs-6" value={this.state.vehicle.fuel} id="fuel" />
                        <input placeholder="Växellåda" className="form-control col-xs-6" value={this.state.vehicle.gearbox} id="gearbox" />
                        <input placeholder="Körkorts-Behörighet" className="form-control col-xs-6" value={this.state.vehicle.requiredDrivingLicense} id="requiredDrivingLicense" />
                        <input placeholder="Dagshyra" className="form-control col-xs-6" value={this.state.vehicle.dagshyra} id="dagshyra" />
                        <input placeholder="Hyperlänk till bild" className="form-control col-xs-6" value={this.state.vehicle.imgLink} id="imgLink" />
                        <button className="btn-default" onClick={this.state.editing ? this.updateData : this.handleSubmit}><span className="green-text">Skicka</span></button>           
                        <button className="btn-default" onClick={this.closeModal}><span className="orange-text">Ångra</span></button>
                    </form>
                </div>
            </div>
        );
        return(
            <div id="view_height" className="container">
                {this.state.modal ? form : null}
                <button className='btn-default' id='home' onClick={this.props.changeView}>Gå tillbaka</button>
                <h3><button className="btn-default" onClick={() => {this.openModal('new')}}> <span className="green-text">Lägg till ny</span> </button></h3>
                <div id="fields" className="row">
                    {carsList}
                </div>
                
            </div>
        )
    }
}