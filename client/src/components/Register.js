import { Component } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Home from './Home';

function Send(e){
    // var info =[]

    return(
        <div>
        e
            {document.getElementById('email')}
        </div>
    )
}
export default class Register extends Component {
    constructor(props) {
        super(props);
        // const dataRef = 
        this.state ={
            user: "",
            email: "",
            pw: "",
            fName: "",
            lName:'',
            bDay: ''
        }
    };
    userN(e){
        return(<div>
            Hello {e.target.value}
        </div>)
        const p =
        this.setState({
            user: p
        })
    }
    mail(e){
        console.log(e.target.value)
        const p = e.target.value
        this.setState({

            email: p
        })
    } firstN(e){
        
        const p = e.target.value
        this.setState({
            fName: p
        })
    } lastN(e){
        
        const p = e
        this.setState({
            lName: p
        })
    } passw(e){
        const p = e
        this.setState({
            pw: p
        })
    } birth(e){
        
        const p = ''
        this.setState({
            bDay: p
        })
    }
  
    data(){
        var info = []
        info[0]= this.state.email
        info[1]= this.state.user
        info[2]= this.state.pw
        info[3]= this.state.fName
        info[4]= this.state.lName
        info[5]= this.state.bDay
        
        return(
            <div>
                {info[0]}
                {info[1]}
                {info[2]}
                {info[3]}
                {info[4]}
                {info[5]}
            </div>
            
        )
        
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form action={this.data}>
                    <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" id="email" onChange={this.mail} required /><br />
                    
                  <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Enter Username" name="username" id="username" onChange={this.userN} required /><br />
                    <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" onChange={this.passw} required /><br />
                    <label htmlFor="fName">First Name</label>
                        <input type="text" placeholder="Enter First Name" name="fName" id="fName" onChange={this.firstN} required /><br />
                    <label htmlFor="lName">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" name="lName" id="lName" onChange={this.lastN} required /><br />
                    <label htmlFor="birthday">Birthday</label>
                        <input type="date" placeholder="Enter Birthday" name="birthday" id="birthday" onChange={this.birth} required /><br />
                    <br />
                    <div>
                        <button type="submit"  onSubmit={<Home/>}>Submit</button>
                    </div>
                </form>
                <Link to="/login" className="nav-link">Returning user? Click here to log in</Link>
            </div>
        );
    }
}