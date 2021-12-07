import React, { Component } from 'react';
import logo from '../logo.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <center>
                    <img src={logo} alt="WeatherOrNot Logo" />;
                    <h1>Welcome to WeatherOrNot!</h1>
                </center>
            </div>
        );
    }
}