import { Component } from 'react';
import Forecast from './weatherApi/Forecast';

export default class Weather extends Component {
    render() {
        return (
            <div>
                <h1>Weather Forecast</h1>
                <main>
                    <Forecast />
                </main>
            </div>
        );
    }
}

//contribution by Thomas
