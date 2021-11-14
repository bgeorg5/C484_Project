import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <p>This is the login page</p>
                <Link to="/register" className="nav-link">New user? Click here to register</Link>
            </div>
        );
    }
}