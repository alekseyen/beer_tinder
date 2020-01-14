import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from './pic/logo.svg'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import AfterRegPage from "./components/AfterRegPage"
import FinalPage from "./components/FinalPage"

//for Redux
import {Provider} from 'react-redux';
import {Redux} from 'react-redux'
//import store from './store';
import { createStore } from "redux";

import { SELECT_NEXT_BEER, MATCH_BEER } from './actions';


//const { createStore } = Redux;
//const store = createStore();

const initState = {
  token: null,
  noMoreBeer: false,
  activeOne: {
    name: 'Triple Karmeliet',
    id: 1,
    image: 'https://sun9-61.userapi.com/c858424/v858424934/f77c4/AjsWhgH0HYs.jpg',
  },
  matchedBeers: [
    {
      name: 'Kastel',
      id: 0,
      image: 'https://sun9-10.userapi.com/c855328/v855328641/e9efd/B4ztkFKd0ls.jpg',
    },
  ],
  beers: [
    {
      "id": "1",
      "name": "Andey Sazikov",
      "image": "https://sun9-21.userapi.com/c639519/v639519230/1584d/VTYmWQhXSNo.jpg"
    },
    {
      "id": "2",
      "name": "Artem Yamalutdinov",
      "image": "https://sun1-25.userapi.com/c851120/v851120226/341c7/nNl-g-2rfz8.jpg"
    },
    {
      "id": "3",
      "name": "Dmitry Pavlov",
      "image": "https://sun9-57.userapi.com/c851336/v851336289/b0659/4sL-Q12VRM4.jpg"
    },
    {
      "id": "4",
      "name": "Aleksey Podkidyshev",
      "image": "https://sun9-49.userapi.com/c858016/v858016729/645c6/n-G4AZXJ38A.jpg"
    },
    {
      "id": "5",
      "name": "Haritonov Aleksandr",
      "image": "https://sun9-69.userapi.com/c858424/v858424541/62545/R4L7atpT1gU.jpg"
    },
    {
      "id": "6",
      "name": "Popov Nikita",
      "image": "https://sun9-56.userapi.com/c636029/v636029857/1da7a/kKppJl_nP0Y.jpg"
    },
    {
      "id": "7",
      "name": "Pablichenkp Nikita",
      "image": "https://sun9-8.userapi.com/c849532/v849532818/9cb09/AOmdSJLmktY.jpg"
    }
  ],
};


function myReducer(state = initState, action) {
  console.log('Previous state:', state)
  console.log('Doing action...')
  console.log(action);
  switch (action.type) {
    case 'SET_TOKEN':
      console.log('Setting token...', action.token);
      return {
        matchedBeers: state.matchedBeers,
        noMoreBeer: state.noMoreBeer,
        beers: state.beers,
        activeOne: state.activeOne,
        token: action.token
      };
    case SELECT_NEXT_BEER: {
      const { activeOne, beers, token } = state;
      if (activeOne.id === -1) { return state; }
      const [firstBeer, ...othersBeers] = beers;
      const newBeers = [...othersBeers];
      if (Object.keys(activeOne).length !== 0) {
        newBeers.push(activeOne);
      }
      return { ...state,
        beers: newBeers,
        activeOne: firstBeer,
        token: action.token
      };
    }
    case MATCH_BEER: {
      const { activeOne, matchedBeers, beers, token } = state;
      if (activeOne.id === -1) { return state; }
      const newMatched = [...matchedBeers, activeOne];
      const [firstBeer, ...othersBeers] = beers;
      const newBeers = [...othersBeers];
      let activeTemp = firstBeer;
      if (firstBeer === undefined) {
        activeTemp = {
          id: -1,
          name: 'No more beers',
          image: '',
        };
      }
      return {
        ...state,
        matchedBeers: newMatched,
        beers: newBeers,
        activeOne: activeTemp,
        token: action.token
      };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(myReducer);

store.subscribe(() => {
  console.log('..token updated. New state:');
  console.log(store.getState());
})

class App extends React.Component {
  // рендер компоненты с Login и Sign up

  render() {
    return (
        <Provider store={store}>
          <Router>
            <div className="App">
              <div className="auth-wrapper">

                <div className="auth-inner">
                  <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path="/sign-in" component={Login}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/after-reg-register" component={AfterRegPage}/>
                    <Route path="/final-card-page" component={FinalPage}/>
                  </Switch>
                </div>
              </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

//Через afterRegPagefterReg будем передавать аргументы

export default App;
