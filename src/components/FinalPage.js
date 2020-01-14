import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faTimes, faBeer } from '@fortawesome/free-solid-svg-icons';
import './styles/index.scss';
import SideBar from './FinalPage/SideBar';
import MatchChoose from './FinalPage/MatchChoose';


//ToDo : перенести проект чела [Артем]
//Это страничка будет рендриться после:
// a) Успешного Login
// б) Второго этапа ргеистрации
// FontAwesome
library.add(faHeart);
library.add(faTimes);
library.add(faBeer);

class FinalPage extends Component {
    render() {
        return (
            <div className="App">
                <SideBar />
                <MatchChoose />
            </div>
        );
    }
}

export default FinalPage;


