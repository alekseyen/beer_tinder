import React, { Component } from "react";
import Request from 'react-http-request';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../pic/logo.svg";
import {connect} from "react-redux";

class SignUp extends Component {
    state = {
        FirstName: undefined,
        SecondNameChange: undefined,
        email: "lox2",
        password: "123"
    }

    constructor(props) {
        super(props);

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.FirstNameChange = this.FirstNameChange.bind(this);
        this.SecondNameChange = this.SecondNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    FirstNameChange(event){
        this.setState({FirstName: event.target.value});
    }

    SecondNameChange(event){
        this.setState({SecondNameChange: event.target.value});
    }


    emailChange(event){
        this.setState({email: event.target.value});
    }

    passwordChange(event){
        this.setState({password: event.target.value});
    }

    send_request = async (email, password) => {
        fetch('http://84.201.136.171:8000/api/users/', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.email,
                password: this.state.password
            })
        }).then(
            response => response.json()
        ).then(jsondata => console.log(jsondata))
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        // send the request
        this.send_request();

        console.log('Отправленная почта: ' + this.state.email);
        console.log('Отправленный пароль: ' + this.state.password);

        console.log('Отправленное имя: ' + this.state.FirstName);
        console.log('Отправленная фамилия: ' + this.state.SecondNameChange);

        await new Promise(r => setTimeout(r, 500));
        //ToDo с Никитой
        if (3 < 5) {


            fetch('http://84.201.136.171:8000/auth/', {
                method: 'POST',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.email,
                    password: this.state.password
                })
            }).then(
                response => response.json()
            ).then(jsondata => {
                    console.log(jsondata);
                    console.log(jsondata.token);
                    // localStorage.setItem('token', jsondata.token);
                    console.log(this.props.token);
                    this.props.setToken(jsondata.token);
                }
            );




            this.props.history.push('/after-reg-register');
        }
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
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={this.FirstNameChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={this.SecondNameChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.emailChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.passwordChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (new_token) => { dispatch({type: 'SET_TOKEN', token: new_token}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
