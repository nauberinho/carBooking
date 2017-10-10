/**
 * Created by naube on 2017-10-10.
 */
import React, { Component } from 'react';


export default class Authentication extends Component {
    render() {
        let state = this.props.state;
        return (


            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>

                    { state.auth.create === true ?


                        <div className="col-sm-6">
                            <form className="form-signin" onSubmit={this.props.handleCreateAccount}
                                  onChange={this.props.updateAuthObject}>
                                <h2 className="form-signin-heading">Please sign in</h2>
                                <label className="sr-only">Email address</label>
                                <input type="email" id="inputEmail" className="form-control"
                                       placeholder="Email address" required
                                       autoFocus/>
                                <label className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control"
                                       placeholder="Password" required/>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </form>
                        </div>

                        :

                        <div className="col-sm-6">
                            <form className="form-signin" onSubmit={this.props.handleSignIn}
                                  onChange={this.props.updateAuthObject}>
                                <h2 className="form-signin-heading">Create an account</h2>
                                <label className="sr-only">Username</label>
                                <input type="email" id="username" className="form-control"
                                       placeholder="Email address" required
                                       autoFocus/>
                                <label className="sr-only">Password</label>
                                <input type="password" id="password" className="form-control"
                                       placeholder="Password" required/>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </form>
                        </div>
                    }



                    <div className="col-sm-3"></div>

                </div>
            </div>

        )
    }
}
