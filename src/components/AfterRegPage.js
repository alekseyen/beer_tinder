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

let AfterRegPage = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Favorite Color</label>
                <Field
                    name="favoriteColor"
                    component={renderDropdownList}
                    data={colors}
                    valueField="value"
                    textField="color"/>
            </div>
            <div>
                <label>Hobbies</label>
                <Field
                    name="hobbies"
                    component={renderMultiselect}
                    data={['Guitar', 'Cycling', 'Hiking']}/>
            </div>
            <div>
                <label>Sex</label>
                <Field
                    name="sex"
                    component={renderSelectList}
                    data={['male', 'female']}/>
            </div>
            <div>
                <label>DOB</label>
                <Field
                    name="dob"
                    showTime={false}
                    component={renderDateTimePicker}
                />
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
                </button>
            </div>

            <div></div>
            <h3> Ава</h3>
            <div className="card">
                <div className="card-header">
                    Загрузить аватар*
                </div>
                <div className="card-body">
                    <ImageUploadComponent/>
                </div>
            </div>
        </form>
    )
}

AfterRegPage = reduxForm({
    form: 'reactWidgets'  // a unique identifier for this form
})(AfterRegPage)

export default AfterRegPage

//image Upload
