import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <img src={logo} width="10%" height="7.5%"/>
        <Link to="/" className="navbar-brand">WeatherOrNot</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/login" className="nav-link">Log in</Link>
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