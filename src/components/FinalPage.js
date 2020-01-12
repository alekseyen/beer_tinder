import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageUploadComponent from './help_comp/image-upload-components';


//Это страничка будет рендриться после:
// a) Успешного Login
// б) Второго этапа ргеистрации
class FinalPage extends Component {
    render() {
        return (
            <div className="sosi">
                <h1>
                    Карточки
                </h1>
            </div>
        );
    }
}

export default FinalPage
