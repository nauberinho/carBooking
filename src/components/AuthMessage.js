
import React, { Component } from 'react';

export default class authMessage extends Component {
    render(){
        let message;
        this.props.state.view === "book" ? message = "Logga in eller skapa ett konto för att boka en bil." : message = "Logga in eller skapa ett konto för att komma åt administratörssystemet."
        return(
            <div className="auth-message col-sm-12">
                {message}
            </div>
        )
    }
}