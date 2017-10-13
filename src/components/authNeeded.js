
import React, { Component } from 'react';


export default class Authentication extends Component {
    render(){
        let state = this.props.state;
        let self = this;
        return (
            <div className="auth-container">
                <div className="book-header col-sm-12">
                    <button className='btn-default book-go-back col-xs-3 col-md-3' id='home' onClick={this.props.changeView}>Gå tillbaka</button>
                    <div className="book-logo col-xs-6 col-md-6"><span className="darkred-text">Olssons Fordon</span><span className="lightblue-text"> AB</span></div>
                    <button className='btn-default red-text book-log-out col-xs-3 col-md-3' onClick={this.props.handleSignOut}>Logga ut</button>
                </div>

                <div className="auth-needed-message">

                    För att logga in som administratör behöver ditt konto ha
                    administratörsbehörighet. Det väljer du när du skapar ditt konto.

                </div>



            </div>
        )
    }
}
