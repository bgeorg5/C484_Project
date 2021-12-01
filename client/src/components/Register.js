import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form>
                    <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" id="email" required /><br />
                    <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Enter Username" name="username" id="username" required /><br />
                    <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" required /><br />
                    <label htmlFor="fName">First Name</label>
                        <input type="text" placeholder="Enter First Name" name="fName" id="fName" required /><br />
                    <label htmlFor="lName">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" name="lName" id="lName" required /><br />
                    <label htmlFor="birthday">Birthday</label>
                        <input type="date" placeholder="Enter Birthday" name="birthday" id="birthday" required /><br />
                    <br />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <Link to="/login" className="nav-link">Returning user? Click here to log in</Link>
            </div>
        );
    }
}