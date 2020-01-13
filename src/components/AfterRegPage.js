import ImageUploadComponent from './help_comp/image-upload-components';
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from "react-widgets-moment";
import 'react-widgets/dist/css/react-widgets.css'
import {Component} from 'react';
import {TextField} from "@material-ui/core";
import {connect} from "react-redux";


//брал отсюда: https://redux-form.com/7.2.2/examples/react-widgets/
//ToDO:
// 1. Разобраться с Redux()
// 2. Научится отправлять это Json Никите

momentLocaliser(moment)

const colors = [{color: 'Red', value: 'ff0000'},
    {color: 'Green', value: '00ff00'},
    {color: 'Blue', value: '0000ff'}]

const renderDropdownList = ({input, data, valueField, textField}) =>
    <DropdownList {...input}
                  data={data}
                  valueField={valueField}
                  textField={textField}
                  onChange={input.onChange}/>;

const renderMultiselect = ({input, data, valueField, textField}) =>
    <Multiselect {...input}
                 onBlur={() => input.onBlur()}
                 value={input.value || []} // requires value to be an array
                 data={data}
                 valueField={valueField}
                 textField={textField}
    />

const renderSelectList = ({input, data}) =>
    <SelectList {...input}
                onBlur={() => input.onBlur()}
                data={data}/>

const renderDateTimePicker = ({input: {onChange, value}, showTime}) =>
    <DateTimePicker
        onChange={onChange}
        format="DD MMM YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
    />

class AfterRegPage extends Component {

    send_request = async () => {
        console.log("Current token: " + this.state.token);
        console.log("Sending this stuff...");
        console.log(JSON.stringify({
                token: this.props.token,
                name: this.state.name,
                age: parseInt(this.state.age),
                sex: this.state.sex == "male",
                preferences: this.state.preferences,
                description: this.state.bio
            }));
        fetch('http://84.201.136.171:8000/api/user_info/', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: this.props.token,
                name: this.state.name,
                age: parseInt(this.state.age),
                sex: this.state.sex,
                preferences: this.state.preferences,
                description: this.state.description
            })
        }).then(
            response => response.json()
        ).then(jsondata => {
                console.log('Got this:')
                console.log(jsondata);
            }
        );
    }


    state = {
        name: "Alex",
        sex: true,
        age: 20,
        preferences: "react programming",
        bio: "black",
    }

    handleSubmit = (e) => {
        console.log(this.state);
        this.send_request();
    }

    handleChangeSex = () => {
        this.setState({
            sex: !this.state.sex,
        });
    }

    handleChangeAge = (e) => {
        this.setState({age: e.target.value});
    }

    FirstNameChange(event) {
        this.setState({name: event.target.value});
        console.log(this.state)
    }

    handleChangePref = (e) => {
        this.setState({preferences: e.target.value});
    }

    handleChangeBio = (e) => {
        this.setState({description: e.target.value});
    }


    render() {
        const {pristine, reset, submitting} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <h3 className="App">Tell others a bit more about you!</h3>



                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name"
                       onChange={(e) => this.FirstNameChange(e)}/>
            <div>
                <label>Sex</label><br />
                <label className="radio-inline">
                    <input type="radio" name="sex_radio" checked={this.state.sex}
                    onChange={ this.handleChangeSex }/>&nbsp;Male&nbsp;
                </label>
                <label className="radio-inline">
                    <input type="radio" name="sex_radio" checked={!this.state.sex}
                    onChange={ this.handleChangeSex }/>&nbsp;Female
                </label>
            </div>
            <div>
                <label>Age</label>
                <input type="text" className="form-control" placeholder="20"
                       onChange={(e) => this.handleChangeAge(e)}/>
            </div>

                <label>Describe your preferences:</label>
                <div className="form-horizontal">
                    <div className="form-group">
                        <div>
                            <textarea className="form-control" rows="3" placeholder="Dark beer like stouts and porters"
                                      required onChange={(e) => this.handleChangePref(e)}></textarea>
                        </div>
                    </div>
                </div>

                <label>Tell something about yourself:</label>
                <div className="form-horizontal">
                    <div className="form-group">
                        <div>
                            <textarea className="form-control" rows="3" placeholder="Love machine learning and data science"
                                      required onChange={(e) => this.handleChangeBio(e)}></textarea>
                        </div>
                    </div>
                </div>

            <div>
                <button type="submit" className="btn btn-primary btn-block" onClick={e => {
                    e.preventDefault();
                    this.handleSubmit()
                }}>Continue
                </button>
                {/*<button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values</button>*/}
            </div>

        </form>
        )
    }
}

AfterRegPage = reduxForm({
    form: 'reactWidgets'  // a unique identifier for this form
})(AfterRegPage)

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

export default connect(mapStateToProps, mapDispatchToProps)(AfterRegPage)
//image Upload
