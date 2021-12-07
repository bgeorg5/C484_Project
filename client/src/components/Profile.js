import { Component } from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
// import Login from './Login';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.compref = React.createRef();
        // this.focusref = this.focusTextInput.bind(this);

        this.state = {
            user: "joelt",
            email: "joel@gmail.com",
            pw: "something",
            fName: "joel",
            lName: 'Torn',
            bDay: '05/20/2005'
        }



    }

    inputSet = (set) => {

        this.setState(
            {
                info: set.target.value
            }
        )

    }
    render() {
        var each = '';
        if (this.compref.current === true) {
            each = this.state.info
        }
        return (
            <div>
                <h1>Profile</h1>
                {/* <img src={pfp} alt=""/> */}
                <img src='./favicon.png' className='pfp' alt='profile' />
                <div>


                </div>
                <form>

                    <label htmlFor="email">Email</label>
                    <input type="email" value={this.state.email} placeholder="Enter Email" name="email" id="email" onChange={this.inputSet} required /><br />
                    <label htmlFor="username" id='user'>Username</label>
                    <input type="text" value={this.state.user} name="username" id="username" required /><br />
                    <label htmlFor="fName">First Name</label>
                    <input type="text" value={this.state.fName} placeholder="Enter First Name" name="fName" id="fName" required /><br />
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" value={this.state.lName} placeholder="Enter Last Name" name="lName" id="lName" required /><br />
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" value={this.state.bDay} placeholder="Enter Birthday" name="birthday" id="birthday" required /><br />
                    <br />

                </form>

                {/* <Data/> */}
                <Link to="/settings" className="nav-link">Account Settings</Link>
            </div>
        );


    }

}