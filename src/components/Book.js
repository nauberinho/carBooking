import React, { Component } from 'react';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.handleBooking = this.handleBooking.bind(this);
    }

    handleBooking(event) {
        var self = this;

        if (event.target.id="book"){
            this.props.bookCar(event);

        }
        else if (event.target.id="unbook"){
            this.props.unBookCar(event);

        }

        setTimeout(function() {
            self.props.updateCarsList();
        },300)
    }

    render(){

        let optionsList = [];

        for(var car in this.props.state.cars){
            optionsList.push(this.props.state.cars[car].brand)
        }


        let allBrands = [];
        for(let i = 0; i<optionsList.length; i++){
            // If it is not a duplicate, return true
            if (allBrands.includes(optionsList[i]) === false) {
                allBrands.push(optionsList[i]);
                console.log(optionsList[i]);
            }
        };

        console.log(allBrands)

        let finalOptionsList = allBrands.map((car, key) => {
            return(

                <div className='filter-option' onClick={this.props.filter} data-category="brand" key={key} data-value={car}>{car}</div>

            )

        });

        let carList;
        if(this.props.state.filteredCars.length > 0){

            carList = this.props.state.filteredCars;
        }

        else {

            carList = this.props.state.cars;
        }


        let mapList = carList.map((car, key) => {
            var self= this;
            let bookBtn;
            car.status
                ? bookBtn = <button className='btn-default green-text' onClick={this.handleBooking} data-id={car._id}>Book car</button>
                : bookBtn = <button className='btn-default red-text' onClick={this.handleBooking} data-id={car._id}>Unbook car</button>


            return (
                <div key={key} className="book-li-wrapper col-xs-12 col-sm-12">




                        <div className="col-xs-12 col-sm-12 book-li" data-id={car._id} onClick={this.props.bookCar}>
                            <div className="col-xs-12 col-sm-5 info-div">
                                <div className="col-xs-4 col-sm-12">Märke: {car.brand}</div>
                                <div className="col-xs-4 col-sm-12">Modell: {car.model}</div>
                                <div className="col-xs-4 col-sm-12">Årsmodell: {car.year}</div>
                                <div className="col-xs-4 col-sm-12">Växellåda: {car.gearbox}</div>
                                <div className="col-xs-4 col-sm-12">Bränsle: {car.fuel}</div>
                                <div className="col-xs-4 col-sm-12">Dagshyra: {car.dagshyra} SEK</div>
                                <div className="col-xs-4 col-sm-12">Tillgänglig: {car.status ? <span className="green-text">JA</span> : <span className="red-text">Nej</span>}</div>

                            </div>
                            <div className="book-li-img-div col-xs-12 col-sm-5">
                            <img className="book-li-img" src={car.imgLink} alt={car.imgLink}/>

                            </div>
                            {bookBtn}

                        </div>







                </div>

            )
        })

        let filterCategory = this.props.state.filterCategory;
        return(
            <div className="book-container">
                <div className="book-header col-sm-12">
                    <button className='btn-default book-go-back col-xs-3 col-md-3' id='home' onClick={this.props.changeView}>Gå tillbaka</button>
                    <div className="book-logo col-xs-6 col-md-6"><span className="darkred-text">Olssons Fordon</span><span className="lightblue-text"> AB</span></div>
                    <button className='btn-default red-text book-log-out col-xs-3 col-md-3' onClick={this.props.handleSignOut}>Logga ut</button>
                </div>


                <div className="col-sm-12 filter-div">
                <div className='filter-option' type="radio" onClick={this.props.filterAll}>Alla</div>
                <div className='filter-option' type="radio" onClick={this.props.filter} data-category="fuel" data-value="Bensin">Bensin</div>
                <div className='filter-option' type="radio" onClick={this.props.filter} data-category="fuel" data-value="Diesel">Diesel</div>

                <div className='filter-option' type="radio" onClick={this.props.filter} data-category="gearbox" data-value="Automat">Automatisk växellåda</div>
                <div className='filter-option' type="radio" onClick={this.props.filter} data-category="gearbox" data-value="Manuell">Manuell växellåda</div>
                {finalOptionsList}
                </div>

                

                <div className="book-ul col-sm-12">
                    <div className="col-xs-12 book-ul-title"><h5>{filterCategory === "" ? "Visar alla bilar" : "Bilar sorterade på " + filterCategory}</h5></div>
                    {mapList}
                </div>


            </div>
)
}
}