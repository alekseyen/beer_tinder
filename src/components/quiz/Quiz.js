import React from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup} from 'react-transition-group';

import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        <TransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div key={props.questionId}>
                <QuestionCount counter={props.questionId} total={props.questionTotal}/>
                <Question content={props.question}/>
                <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
            </div>
        </TransitionGroup>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;


// https://codesandbox.io/s/ymmzn7l1q1
//
// constructor(props) {
//     super(props);
//     this.state = { isCompleted: false };
//     this.onCompleteComponent = this.onCompleteComponent.bind(this);
// }
// onCompleteComponent() {
//     this.setState({ isCompleted: true });
// }
//
// render() {
//     let json = {
//         questions: [
//             {
//                 type: "checkbox",
//                 name: "test",
//                 title: "What are you favourite beer?",
//                 isRequired: true,
//                 // hasSelectAll: true,
//                 // hasNone: true,
//                 // noneText: "None of the above",
//                 colCount: 4,
//                 choicesOrder: "asc",
//                 choices: [
//                     "Guinness",
//                     "Козел",
//                     "Tinkoff"
//                 ]
//             }
//         ]
//     };
//     var surveyRender = !this.state.isCompleted ? (
//         <Survey.Survey
//             json={json}
//             showCompletedPage={false}
//             onComplete={this.onCompleteComponent}
//         />
//     ) : null;
//     var onCompleteComponent = this.state.isCompleted ? (
//         <div>The component after onComplete event</div>
//     ) : null;
//     return (
//         <div>
//             {surveyRender}
//             {onCompleteComponent}
//         </div>
//     );
// }
