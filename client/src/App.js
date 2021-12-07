import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.png';

import AuthService from './services/authService';

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Forums from "./components/Forums";
import Weather from "./components/Weather";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import AdminPage from "./components/AdminPage";
import Error404 from "./components/Error404";

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showAdminPage: false,
            currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showAdminPage: user.roles.includes("ROLE_ADMIN")
            });
        }
    }
    
    logOut() {
        AuthService.logout();
        this.setState({
            showAdminPage: false,
            currentUser: undefined
        });
    }
    
    render() {  
        const { currentUser, showAdminPage } = this.state;

        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand">
                    <img src={logo} alt='logo' width="10%" height="7.5%"/>
                    <Link to="/home" className="navbar-brand">WeatherOrNot</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/weather" className="nav-link">Weather</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/forums" className="nav-link">Forums</Link>
                            </li>

                            {showAdminPage && (
                                <li className='navbar-item'>
                                    <Link to="/admin" className="nav-link">Admin Page</Link>
                                </li>
                            )}

                            {currentUser ? (
                                <div className='navbar-nav m1-auto'>
                                    <li className="navbar-item">
                                        <Link to="/profile" className="nav-link">Profile</Link>
                                    </li>
                                    <li className="navbar-item">
                                        <Link to='/login' className='nav-link' onClick={this.logOut}>Log Out</Link>
                                    </li>
                                </div>
                            ) : (
                                <li className="navbar-item">
                                    <Link to="/login" className="nav-link">Log in</Link>
                                </li>
                            )}
                        </ul>
                  </div>
                </nav>
            
                    <div className="container">
                        <br/>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/home" element={<Home />} />
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/register" element={<Register />} />
                            <Route exact path="/forums" element={<Forums />} />
                            <Route exact path="/weather" element={<Weather />} />
                            <Route exact path="/profile" element={<Profile />} />
                            <Route exact path="/settings" element={<Settings />} />
                            <Route exact path="/admin" element={<AdminPage />} />
                            <Route path="*" element={<Error404 />} />
                        </Routes>
                    </div>
                
            </div>
        );
    }
}

export default App;
