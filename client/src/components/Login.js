import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

export default class Login extends Component {
    

      inputSet = (set) =>{
        
        this.setState(
            {
                info : set.target.value
            }
        )
      
    } 
    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form action="/">
                    <label htmlFor="username" >Username</label>
                        <input type="text" placeholder="Enter Username" name="username" id="username" onChange={this.inputSet} required /><br />
                    <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" required /><br />
                    <br />
                    <div>
                        <button type="submit" onSubmit= {this.submitForm} >Submit</button>
                    </div>
                </form>
                <Link to="/register" className="nav-link">New user? Click here to register</Link>
            </div>
        );
    }
}