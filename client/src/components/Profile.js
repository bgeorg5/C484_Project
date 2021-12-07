import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/authService';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }
  
    render() {
        const { currentUser } = this.state;
    
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}'s</strong> Profile
                    </h3>
                </header>
                <br/>
                <p>
                    <strong>Name:</strong>{" "}
                    {currentUser.fullName}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {currentUser.roles &&
                        currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
                <Link to="/settings" className="nav-link">Account Settings</Link>
            </div>
        );
    }
}
