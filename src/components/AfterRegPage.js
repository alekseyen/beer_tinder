import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageUploadComponent from './help_comp/image-upload-components';
import './help_comp/test.css'

//ToDo
// 1. Сделать чтобы она норм отображалась (не в малеьнком окошке)а
// 2. Саму страничку я попробую написать
// 3. Сделать кнопку чтобы был переход на final page
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
