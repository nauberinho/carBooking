/**
 * Created by naube on 2017-10-10.
 */

import React, { Component } from 'react';

export default class SignInOrSignUp extends Component {
    render() {
        return (


            <div className="col-sm-12">

                <button className="col-sm-6" id="signin" onClick={this.props.chooseAuthType}>Sign In</button>
                <button className="col-sm-6" id="create" onClick={this.props.chooseAuthType}>Create account</button>

            </div>

        )
    }
}

