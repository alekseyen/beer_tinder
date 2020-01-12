import React, { Component } from "react";
import Request from 'react-http-request';

export default class SignUp extends Component {
    state = {
        FirstName: undefined,
        SecondNameChange: undefined,
        email:undefined,
        password: undefined
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

    send_request = async () =>{
        fetch('http://84.201.136.171:8000/api/users/', {
            method: 'POST',
            dataType:'json',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": "username", //заменить
                "password": "12345" //заменить
            })
        }).then(
            data => {
                //вот тут надо переходить на новую страничку
                console.log(data);
            }
        );
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        // send the request
        this.send_request();

        console.log('Отправленная почта: ' + this.state.email);
        console.log('Отправленный пароль: ' + this.state.password);

        console.log('Отправленное имя: ' + this.state.FirstName);
        console.log('Отправленная фамилия: ' + this.state.SecondNameChange);

        //Добавь сразу переход на новую страницу с опросом, потом сделаешь привязку с токеном
        if (3 > 5)
            window.location.assign('http://localhost:3000/after-reg-register/');
    }

    render() {
        return (
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
        );
    }
}
