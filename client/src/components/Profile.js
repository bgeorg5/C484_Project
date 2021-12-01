import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <Link to="/settings" className="nav-link">Account Settings</Link>
            </div>
        );
    }
}