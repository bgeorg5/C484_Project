import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form>
                    <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Enter Username" name="username" id="username" required /><br />
                    <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" required /><br />
                    <br />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <Link to="/register" className="nav-link">New user? Click here to register</Link>
            </div>
        );
    }
}