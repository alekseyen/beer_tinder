import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageUploadComponent from './help_comp/image-upload-components';
import {connect} from "react-redux";

//ToDo : перенести проект чела [Артем]
//Это страничка будет рендриться после:
// a) Успешного Login
// б) Второго этапа ргеистрации
class FinalPage extends Component {
    render() {
        return (
            <div className="lol">
                <h1>
                    {this.props.token}
                </h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(FinalPage)

