
import React, { Component } from 'react';
import AuthMessage from './AuthMessage.js';

export default class SignInOrSignUp extends Component {
    render() {
        return (
            <div className="sign-in-or-sign-up-container col-xs-12">
                <div className="col-xs-0 col-sm-2 col-md-3"></div>
                <div className="col-xs-12 col-sm-8 col-md-6">
                    <AuthMessage state={this.props.state}/>
                    <button className='btn-default' id="home" onClick={this.props.changeView}>Gå tillbaka</button>
                    <button className="btn-default col-sm-4 choose-sign-in-btn" data-id="signIn" onClick={this.props.changeView}>Sign In</button>
                    <div className="col-sm-12 or">or</div>
                    <button className="btn-default col-sm-4" data-id="create" onClick={this.props.changeView}>Create account</button>
                </div>
                <div className="col-xs-0 col-sm-2 col-md-3"></div>
            </div>

        )
    }
}

