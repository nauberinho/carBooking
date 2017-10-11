/**
 * Created by naube on 2017-10-10.
 */

import React, { Component } from 'react';

export default class SignInOrSignUp extends Component {
    render() {

        return (


            <div className="col-sm-12">

                <button className="col-sm-6" data-id="signIn" onClick={this.props.changeView}>Sign In</button>
                <button className="col-sm-6" data-id="create" onClick={this.props.changeView}>Create account</button>
                <button onClick={this.props.sayHello}>sayhello</button>

            </div>

        )
    }
}

