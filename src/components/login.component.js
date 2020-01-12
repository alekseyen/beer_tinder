import React, { Component } from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../pic/logo.svg";

export default class Login extends Component {
    state = {
        email: "lox",
        password: "123"
    }

    constructor(props) {
        super(props);

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailChange(event){
        this.setState({email: event.target.value});
    }

    passwordChange(event){
        this.setState({password: event.target.value});
    }

    send_request = async (email, password) => {
        fetch('http://84.201.136.171:8000/auth/', {
            method: 'POST',
            dataType: 'json',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "email": "lox",
                "password": "123"
            })
        }).then(
            data => {
                //вот тут надо переходить на новую страничку
                console.log(data);
            }
        );

        console.log(email);
        console.log(password);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.send_request(this.state.email, this.state.password);

        console.log('Отправленная почта: ' + this.state.email);
        console.log('Отправленный пароль: ' + this.state.password);

        //ToDo с Никитой
        if (3 > 5)
            window.location.assign('http://localhost:3000/final/');
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/sign-in"}> <FontAwesomeIcon/> Beerder</Link>
                        <img src={logo} className="App-logo" alt="logo"/>


                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link log_method={this.handleSubmit} className="nav-link"
                                          to={"/sign-in"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <form onSubmit={this.handleSubmit}>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={this.emailChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={this.passwordChange} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        );
    }
}
