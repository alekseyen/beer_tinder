import React, {Component} from 'react'
import ImageUploadComponent from './help_comp/image-upload-components';
import './help_comp/test.css'

//////////////////ToDo
import DropdownList from 'react-widgets/lib/DropdownList'
import {Field, reduxForm} from 'redux-form'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'


import 'react-widgets/dist/css/react-widgets.css'

const colors = [{color: 'Red', value: 'ff0000'},
    {color: 'Green', value: '00ff00'},
    {color: 'Blue', value: '0000ff'}]

const renderDropdownList = ({input, data, valueField, textField}) =>
    <DropdownList {...input}
                  data={data}
                  valueField={valueField}
                  textField={textField}
                  onChange={input.onChange}/>

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

///////////

class AfterRegPage extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="App">
                <h2> Расскажите о себе</h2>

                <h3> Ава</h3>
                    <div className="card">
                        <div className="card-header">
                            Загрузить аватар
                        </div>
                        <div className="card-body">
                            <ImageUploadComponent/>
                        </div>
                    </div>
                <h3> Field </h3>
                {/*<form>*/}
                {/*    <TextField*/}
                {/*        id="filled-multiline-static"*/}
                {/*        label="Multiline"*/}
                {/*        multiline*/}
                {/*        rows="5"*/}
                {/*        defaultValue="О Себе..."*/}
                {/*        variant="filled"*/}
                {/*    />*/}
                {/*</form>*/}

                <h3> Выбор пола </h3>
                <label>Sex</label>
                <Field
                    name="sex"
                    component={renderSelectList}
                    data={['male', 'female']}/>
            </div>
        );
    }
}

export default AfterRegPage
