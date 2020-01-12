import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from './pic/logo.svg'

import styles from './components/quiz/QuizStyle.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import FinalPage from "./components/FinalPage"
import Register from "./components/register";

import quizQuestions from './api/quizQuestions';
import Quiz from './components/quiz/Quiz';

class App extends React.Component {

  // рендер компоненты с Login и Sign up

  render() {
    return (
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>KusokMIPT</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link log_method={this.handleSubmit} className="nav-link" to={"/sign-in"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="auth-wrapper">
              <div className="auth-inner">
                <Switch>
                  <Route exact path='/' component={Login}/>
                  <Route path="/sign-in" component={Login}/>
                  <Route path="/sign-up" component={SignUp}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/final" component={FinalPage}/>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
    );
  }

  /// Все что касается Qiuz'а
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     counter: 0,
  //     questionId: 1,
  //     question: '',
  //     answerOptions: [],
  //     answer: '',
  //     answersCount: {},
  //     result: ''
  //   };
  //
  //   this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  // }
  //
  // componentDidMount() {
  //   const shuffledAnswerOptions = quizQuestions.map(question =>
  //       this.shuffleArray(question.answers)
  //   );
  //   this.setState({
  //     question: quizQuestions[0].question,
  //     answerOptions: shuffledAnswerOptions[0]
  //   });
  // }
  //
  // shuffleArray(array) {
  //   var currentIndex = array.length,
  //       temporaryValue,
  //       randomIndex;
  //
  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //
  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //
  //   return array;
  // }
  //
  // handleAnswerSelected(event) {
  //   this.setUserAnswer(event.currentTarget.value);
  //
  //   if (this.state.questionId < quizQuestions.length) {
  //     setTimeout(() => this.setNextQuestion(), 300);
  //   } else {
  //     setTimeout(() => this.setResults(this.getResults()), 300);
  //   }
  // }
  //
  // setUserAnswer(answer) {
  //   this.setState((state, props) => ({
  //     answersCount: {
  //       ...state.answersCount,
  //       [answer]: (state.answersCount[answer] || 0) + 1
  //     },
  //     answer: answer
  //   }));
  // }
  //
  // setNextQuestion() {
  //   const counter = this.state.counter + 1;
  //   const questionId = this.state.questionId + 1;
  //
  //   this.setState({
  //     counter: counter,
  //     questionId: questionId,
  //     question: quizQuestions[counter].question,
  //     answerOptions: quizQuestions[counter].answers,
  //     answer: ''
  //   });
  // }
  //
  // getResults() {
  //   const answersCount = this.state.answersCount;
  //   const answersCountKeys = Object.keys(answersCount);
  //   const answersCountValues = answersCountKeys.map(key => answersCount[key]);
  //   const maxAnswerCount = Math.max.apply(null, answersCountValues);
  //
  //   return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  // }
  //
  // setResults(result) {
  //   if (result.length === 1) {
  //     this.setState({result: result[0]});
  //   } else {
  //     this.setState({result: 'Undetermined'});
  //   }
  // }
  //
  // renderQuiz() {
  //   return (
  //       <Quiz
  //           answer={this.state.answer}
  //           answerOptions={this.state.answerOptions}
  //           questionId={this.state.questionId}
  //           question={this.state.question}
  //           questionTotal={quizQuestions.length}
  //           onAnswerSelected={this.handleAnswerSelected}
  //       />
  //   );
  // }
  //
  // render() {
  //   return (
  //       <div className='App'>
  //         <div className='App-header'>
  //           Опросик
  //         </div>
  //         <img src={logo} className="App-logo" alt="logo"/>
  //         <div className="styles">
  //           {this.renderQuiz()}
  //         </div>
  //       </div>
  //   );
  // }

};
export default App;
