import { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            fullName:'',
            email:'',
            username:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
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

        const registered = {
            fullName: this.state.fullName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        axios.post('/api/register', registered) 

        window.location = '/';
        this.setState({
            fullName:'',
            email:'',
            username:'',
            password:''
        })
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <div className='form-div'>    
                    <form onSubmit={this.onSubmit}>
                        <br/>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            name="fullName"
                            id="fullName"
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className="form-control form-group"
                            required={true}
                        /> 
                        <br/>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            id="email"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className="form-control form-group"
                            required={true}
                        /> 
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
                        {/* <br/>
                        <InputField
                            type="date"
                            placeholder="Enter Birthday"
                            name="birthday"
                            id="birthday"
                            onChange={this.handleInputChange}
                            required={true}
                        />  */}
                        <br/><br/>
                        <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                    </form>
                </div>
                <Link to="/login" className="nav-link">Returning user? Click here to log in</Link>
            </div>
        );
    }
}
