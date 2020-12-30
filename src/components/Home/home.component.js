import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        alert(e.target.name)
        this.props.history.push('/' + e.target.name);
    }
    render() {

        return (
            <div className="home-buttons">
                <button type="button" onClick={this.handleClick} name="input" className="btn btn-secondary btn-lg mr-5">View Input</button>
                <button type="button" onClick={this.handleClick} name="dashboard" className="btn btn-secondary btn-lg">Dashboard</button>
            </div>

        );
    }
}
