

import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class ViewPlant extends Component{
    componentDidMount(){
        let plantId = this.props.match.params.plant;
        this.props.focusOnPlant(plantId);
    }
    render(){
        let state = this.props.state;
        let focusPlant = state.focusPlant;
        return (
            <div className="content content-main" id="Item_VIEW">
                <div className="container">
                    <main>
                        <section>
                            <div className="img-center column">
                                <img className="view-plant-img" src={focusPlant.imgUrl} alt={focusPlant.imgUrl}/>
                            </div>
                            <div>
                                <div className="text-center">
                                    <h3>Header</h3>
                                    <hr/>
                                    <p>User description</p>
                                </div>
                                <div className="text-center">
                                    <span>Automatic</span>
                                    <button className="btn">Toggle</button>
                                </div>
                                <div className="text-center">
                                    <span>Manual</span>
                                    <button className="btn btn-all" onClick={this.props.water}>Water now</button>
                                </div>
                            </div>
                        </section>
                        <aside>
                            <li>
                                <div className="bullet">
                                    <div className="line zero"></div>
                                    <div className="line one"></div>
                                    <div className="line two"></div>
                                    <div className="line three"></div>
                                    <div className="line four"></div>
                                    <div className="line five"></div>
                                    <div className="line six"></div>
                                    <div className="line seven"></div>
                                </div>
                        </li>
                        </aside>
                    </main>
                    <figure>
                        <div className="figure-corner-div"></div>
                        <div className="figure-corner-div"></div>
                    </figure>
                </div>
            </div>



        )
    }
}
