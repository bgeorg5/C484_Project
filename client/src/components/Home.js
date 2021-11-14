import { Component } from 'react';
import logo from '../logo.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="WeatherOrNot Logo" />;
                <p>This is the home page</p>
            </div>
        );
    }
}