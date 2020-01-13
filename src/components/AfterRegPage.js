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
    state = {
        name: "Alex",
        color: "black",
        hobbies: "react programming",
        sex: "multi",
        dob: "20.04.1999"
    }

    handleSubmit = (e) => {
        console.log(this.state)
    }

    handleChangeColor = (e) => {
        this.setState({color: e});
    }

    handleChangeHobbies = (e) => {
        this.setState({hobbies: e});
    }

    handleChangeSex = (e) => {
        this.setState({sex: e});
    }

    handleChangeDob = (e) => {
        this.setState({dob: e});
    }

    FirstNameChange(event) {
        this.setState({FirstName: event.target.value});
    }

    render() {
        const {pristine, reset, submitting} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <h3 className="App"> Ава</h3>
                <div className="card">
                    <div className="card-header">
                        Загрузить аватар*
                    </div>
                    <div className="card-body">
                        <ImageUploadComponent/>
                    </div>
                </div>

            <div>
                <label>Name</label>
                <input type="text" className="form-control" placeholder="First name"
                       onChange={(e) => this.FirstNameChange(e)}/>

                <label>Favorite Color</label>
                <Field
                    name="favoriteColor"
                    id='favoriteColor'
                    component={renderDropdownList}
                    data={colors}
                    valueField="value"
                    textField="color"
                    onChange={(e) => this.handleChangeColor(e)}
                />
            </div>
            <div>
                <label>Hobbies</label>
                <Field
                    name="hobbies"
                    id="hobbies"
                    component={renderMultiselect}
                    data={['Guitar', 'Cycling', 'Hiking']}
                    onChange={(e) => this.handleChangeHobbies(e)}/>
            </div>
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
                <label>DOB</label>
                <Field
                    name="dob"
                    id="dob"
                    showTime={false}
                    component={renderDateTimePicker}
                    onChange={(e) => this.handleChangeDob(e)}
                />
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
