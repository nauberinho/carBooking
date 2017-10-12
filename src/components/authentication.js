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
            <div className="auth-container">
                {state.auth.create === false && state.auth.signIn === false ?

                    <SignInOrSignUp sayHello={this.props.sayHello} changeView={this.props.changeView} changeAuthType={self.props.changeAuthType} state={this.props.state}/>

                    :

                    <div className="container auth-div">
                        <div className="row">
                            <div className="col-sm-3"></div>


                            { state.auth.create === true ?


                                <div className="col-sm-6">
                                    <button className='btn-default col-sm-12' id={this.props.state.view} onClick={this.props.changeView}>Gå tillbaka</button>
                                    <h3 className="auth-h2 darkred-text">Skapa konto</h3>
                                    <input type="text" data-id="username" id="usernameInput" className="auth-form darkred-text col-sm-12"
                                           placeholder="Username"
                                           onKeyUp={this.props.updateAuthObject}/>
                                    <input type="password" data-id="password" id="passwordInput" className="auth-form darkred-text col-sm-12"
                                           placeholder="Password" onKeyUp={this.props.updateAuthObject}/>
                                    Jag vill registrera mig som:
                                    <div className="checkbox">
                                        <input data-id="type" type="radio" name="name" value="user" onChange={this.props.updateAuthObject}/> Kund<br/>
                                            <input data-id="type" type="radio" name="name" value="admin" onChange={this.props.updateAuthObject}/> Administratör<br/>
                                        <input type="checkbox" value="remember-me"/> Kom ihåg mig
                                    </div>
                                    <button className="btn-default btn-block" onClick={self.props.handleCreateAccount}>Skapa konto</button>
                                </div>

                                :


                                <div className="col-sm-6">
                                    <button className='btn-default col-sm-12' id={this.props.state.view} onClick={this.props.changeView}>Gå tillbaka</button>

                                    <h2>Sign in</h2>

                                    <input type="email" data-id="username" className="form-control"
                                           placeholder="Email address"
                                           autoFocus onKeyUp={this.props.updateAuthObject}/>

                                    <input type="password" data-id="password" className="form-control"
                                           placeholder="Password" onKeyUp={this.props.updateAuthObject}/>
                                    <div className="checkbox">

                                        <input type="checkbox" value="remember-me"/> Remember me

                                    </div>
                                    <button className="btn-default btn-block" onClick={self.props.handleSignIn}>Sign In</button>


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
