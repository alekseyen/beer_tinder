import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageUploadComponent from './help_comp/image-upload-components';
import './help_comp/test.css'


class AfterRegPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Загрузить аватар
                        </div>
                        <div className="card-body">
                            <ImageUploadComponent/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AfterRegPage
