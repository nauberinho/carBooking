import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class AddPlant extends Component {
    render(){
        let state = this.props.state;
                return (
            <div className="content content-main">
                <div className="add-plant-input-container column centered">
                    <input className="input-all add-plant-input" type="text" data-id="name"
                           placeholder="Your plant's name" onKeyUp={this.props.updatePlantToAdd}/>
                    <input className="input-all add-plant-input" type="text" data-id="description"
                           placeholder="Your plant's description" onKeyUp={this.props.updatePlantToAdd}/>
                    <input className="input-all add-plant-input" type="text" data-id="watering"
                           placeholder="Your plant's img url" onKeyUp={this.props.updatePlantToAdd}/>
                    <input className="input-all add-plant-input" type="text" data-id="imgUrl"
                           placeholder="How often does your plant need watering?" onKeyUp={this.props.updatePlantToAdd}/>

                    <select className="input-all add-plant-input" onChange={this.props.updatePlantToAdd} name="Plant category" data-id="category">
                        <option value="vegetable">Vegetable</option>
                        <option value="plant">Plant</option>
                        <option value="flower">Flower</option>
                    </select>

                    <button className="btn-all btn-big add-plant-button" onClick={this.props.addPlant}>Add to my collection</button>


                </div>
            </div>
        )
    }
}
