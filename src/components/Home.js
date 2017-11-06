/**
 * Created by naube on 2017-09-28.
 */

import React, { Component } from 'react';

export default class Home extends Component {

    render(){
        return(


           <div className="home-btns">

                <div className="home-text darkred-text"><h3>Jag vill...</h3></div>
                <button className='btn-default col-xs-3' id='book' onClick={this.props.changeView}>Boka en bil</button>
                <button className='btn-default col-xs-3' id='logIn' onClick={this.props.changeView}>Lägga till, ta bort, och ändra som administratör</button>

                {this.props.state.auth.user === true ||  this.props.state.auth.admin === true ?
                    <button className='btn-default red-text home-log-out' onClick={this.props.handleSignOut}>Logga ut</button>
                : null
                }
            </div>
        )
    }
}