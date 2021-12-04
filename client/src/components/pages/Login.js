import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const loggedIn = {
            username: this.state.username,
            password: this.state.password
        }

        axios.get('/api/register', loggedIn) 

        window.location = '/';
        /* this.setState({
            fullName:'',
            email:'',
            username:'',
            password:''
        }) */
    }

    render() {
        return (
            <div className="register">
                <h1>Log In</h1>
                <div className='form-div'>
                <form onSubmit={this.onSubmit}>
                    <br/>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        id="username"
                        onChange={this.changeUsername}
                        value={this.state.username}
                        className="form-control form-group"
                        required={true}
                    /> 
                    <br/>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        id="password"
                        onChange={this.changePassword}
                        value={this.state.password}
                        className="form-control form-group"
                        required={true}
                    /> 
                    <br/><br/>
                    <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                </form>
                </div>
                <Link to="/register" className="nav-link">New user? Click here to register</Link>
            </div>
        );
    }
}