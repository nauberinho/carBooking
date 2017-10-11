/**
 * Created by naube on 2017-10-10.
 */
import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'


export default class Authentication extends Component {

    componentDidMount(){
        console.log(this)

    }
    render() {
        let state = this.props.state;
        let self = this;
        return (
            <div>
            {state.auth.create === false && state.auth.signIn === false ?

                <SignInOrSignUp sayHello={this.props.sayHello} changeView={this.props.changeView} changeAuthType={self.props.changeAuthType}/>

                :

                <div className="container">
                    <div className="row">
                        <div className="col-sm-3"></div>

                        { state.auth.create === true ?


                            <div className="col-sm-6">


                                    <h2 className="form-signin-heading">Create account</h2>

                                    <input type="email" id="inputEmail" className="form-control"
                                           placeholder="Email address"
                                           autoFocus onKeyUp={this.props.updateAuthObject}/>

                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Password" onKeyUp={this.props.updateAuthObject}/>
                                    <div className="checkbox">

                                            <input type="checkbox" value="remember-me"/> Remember me

                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block" onClick={self.props.handleCreateAccount}>Create account</button>
                                    <button onClick={this.props.sayHello}>Say Hello</button>

                            </div>

                            :


                            <div className="col-sm-6">
                                <form className="form-signin" onSubmit={this.props.handleSignIn}
                                      onChange={this.props.updateAuthObject}>
                                    <h2 className="form-signin-heading">Sign In</h2>
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

    }




            </div>
        )
    }
}
