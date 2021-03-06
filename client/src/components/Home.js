import { Component } from 'react';
import logo from '../logo.png';
import UserService from '../services/userService';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) || error.message || error.toString()
                });
            }
        );
    }
    
    render() {
        return (
            <div className='container'>
                <header className='jumbotron'>
                    <center>
                        <img src={logo} alt="WeatherOrNot Logo" />;
                        <h1>Welcome to WeatherOrNot!</h1>
                        {/* <h3>{this.state.content}</h3> */}
                    </center>
                </header>    
            </div>
        );
    }
}