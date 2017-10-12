/**
 * Created by naube on 2017-09-28.
 */

import React, { Component } from 'react';

export default class Home extends Component {

    render(){
        return(


            <div className="home-btns">
                <div className="home-logo"><h2><span className="darkred-text">Olssons Fordon</span><span className="lightblue-text"> AB</span></h2></div>
                <div className="home-text darkred-text"><h3>Jag vill...</h3></div>
                <button className='btn-default col-xs-3' id='book' onClick={this.props.changeView}>Boka en bil</button>
                <button className='btn-default col-xs-3' id='logIn' onClick={this.props.changeView}>Lägga till, ta bort, och ändra som administratör</button>
            </div>
        )
    }
}