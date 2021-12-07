import React,{ Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Login from './Login'

export default class Navbar extends Component {

  render() {
    // const refer = useRef()
    // refer.current = {Login,submitForm()}
    // if({Login }){
    var user = ''
    var userN =''
    if(user!==''){
   userN = 'Hi,' + {Login}
   user ='/profile'
      }else{
        userN = 'log in'
        user = '/register'
      }
    // }
  
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <img src={logo} alt="" width="10%" height="7.5%"/>
        <Link to="/" className="navbar-brand">WeatherOrNot</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to={user} className="nav-link">{userN}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile" className="nav-link">Profile</Link>{/* only visible if logged in, hide log in */}
          </li>
          <li className="navbar-item">
            <Link to="/forums" className="nav-link">Forums</Link>
          </li>
          <li className="navbar-item">
            <Link to="/weather" className="nav-link">Weather</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}