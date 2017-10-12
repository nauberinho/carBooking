
import React, { Component } from 'react';

export default class authMessage extends Component {

    render(){
        let message;
        this.props.state.view === "book" ? message = "Sign in or create an account to book a car." : message = "Sign in or create an account to access the admin page."
        return(
            <div className="auth-message col-sm-12">
                {message}
            </div>
        )
    }
}