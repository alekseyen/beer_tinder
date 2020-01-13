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

export default class AfterRegPage extends Component {

    send_request = async () => {
        fetch('http://84.201.136.171:8000/user_info/', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: 228,
                name: this.state.name,
                age: parseInt(this.state.age, 10),
                sex: this.state.sex == "male",
                preferences: this.state.preferences,
                description: this.state.bio
            })
        }).then(
            response => response.json()
        ).then(jsondata => {
                console.log("lol")
            }
        );
    }


    state = {
        name: "Alex",
        sex: "multi",
        age: 20,
        preferences: "react programming",
        bio: "black",
    }

    handleSubmit = (e) => {
        console.log(this.state);
        this.send_request();

    }

    handleChangeSex = (e) => {
        this.setState({sex: e});
    }

    handleChangeAge = (e) => {
        this.setState({age: e});
    }

    FirstNameChange(event) {
        this.setState({FirstName: event.target.value});
    }

    handleChangePref = (e) => {
        this.setState({color: e});
    }

    handleChangeBio = (e) => {
        this.setState({hobbies: e});
    }


    render() {
        const {pristine, reset, submitting} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <h3 className="App"> Ава</h3>
                <div className="card">
                    <div className="card-header">
                        Upload picture
                    </div>
                    <div className="card-body">
                        <ImageUploadComponent/>
                    </div>
                </div>


                <label>Name</label>
                <input type="text" className="form-control" placeholder="First name"
                       onChange={(e) => this.FirstNameChange(e)}/>
            <div>
                <label>Sex</label>
                <Field
                    name="sex"
                    id="sex"
                    component={renderSelectList}
                    data={['male', 'female']}
                    onChange={(e) => this.handleChangeSex(e)}/>
            </div>
            <div>
                <label>Age</label>
                <input type="text" className="form-control" placeholder="20"
                       onChange={(e) => this.handleChangeAge(e)}/>


            </div>

                <label>Tell about yourself:</label>
                <div className="form-horizontal">
                    <div className="form-group">
                        <div>
                            <textarea className="form-control" rows="3" placeholder="What's up?"
                                      required></textarea>
                        </div>
                    </div>
                </div>

                <label>Tell about your preferences:</label>
                <div className="form-horizontal">
                    <div className="form-group">
                        <div>
                            <textarea className="form-control" rows="3" placeholder="What's up?"
                                      required onChange={(e) => this.handleChangePref(e)}></textarea>
                        </div>
                    </div>
                </div>

            <div>
                <button type="submit" onClick={e => {
                    e.preventDefault();
                    this.handleSubmit()
                }}>Submit
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

//image Upload
