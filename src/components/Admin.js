
/**
 * Created by naube on 2017-09-28.
 */

import React, { Component } from 'react';

export default class Admin extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeCar = this.removeCar.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.placeholder = this.placeholder.bind(this);
        this.updateData = this.updateData.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            vehicle : {
                fordonstyp: 'Personbil',
                requiredDrivingLicense: 'B',
                brand: 'Volvo',
                model: 'xc60',
                year: 2016,
                gearbox: 'Automat',
                dagshyra: 1150,
                fuel: 'Bensin',
                imgLink: 'https://vcs.fbinhouse.se/vcs-nya-xc60-site-q2-2017/img/xc60-model.png',
                status: true,
            },
            modal:false,
            editing:false,
            editId:'',
        };

    }



    handleSubmit() {
        this.closeModal();
        this.props.addCar(this.state.vehicle);
        this.props.updateCarsList();
    }

    update() {
        this.props.updateCarsList();
    }

    updateData() {
        var self = this;
        this.closeModal();
        this.props.editCar(this.state.vehicle, this.state.editId);
        setTimeout(function() {
            self.props.updateCarsList();
        },100)
    }

    removeCar(car) {
        var self = this;
        this.props.removeCar(car._id);
        setTimeout(function() {
            self.props.updateCarsList();
        },300)
    }

    handleChange(event) {
        var stateCopy = Object.assign({}, this.state.vehicle);
        stateCopy[event.target.id] = event.target.value;
        this.setState({vehicle:stateCopy})
    }

    closeModal() {
        this.setState({modal:false})
    }

    placeholder(event) {
        event.preventDefault();
    }

    openModal(action, car) {
        switch(action) {
            case 'edit':
                console.log(car)
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
                    status: true,
                }
                this.setState({vehicle:actionData})
                break;
            case 'new' :
                this.setState({editing:false});
                this.setState({modal:true});
                break;
        }
    }

    render(){
        var carsList = this.props.state.cars.map((car, key) => {
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
                <div className="admin-auth-div"><button className='btn-default admin-go-back' id='home' onClick={this.props.changeView}>Gå tillbaka</button>
                    <button className='btn-default red-text admin-log-out col-xs-3 col-md-3' onClick={this.props.handleSignOut}>Logga ut</button></div>

                <h3><button className="btn-default" onClick={() => {this.openModal('new')}}> <span className="green-text">Lägg till ny</span> </button></h3>
                <div id="fields" className="row">
                    {carsList}
                </div>

            </div>
        )
    }
}