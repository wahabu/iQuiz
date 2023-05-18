// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/* ################################################################################## */

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: [
        {
          question: '先生は学生に宿題を________。',
          answers: ['します', 'くれます', 'あげます', 'もらいます'],
          correctAnswer: 'あげます'
        },
        {
          question: 'つくえ',
          answers: ['机', '電話', '車', '服'],
          correctAnswer: '机'
        },
        {
          question: '明日',
          answers: ['あした', 'あさって', 'きょう', 'いま'],
          correctAnswer: 'あした'
        }
      ],
      currentQuestion: 0,
      userAnswer: null,
      isCorrect: null,
      quizEnded: false,
      timer: null,
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);

  }

  handleAnswerClick(answer) {
    const { quiz, currentQuestion } = this.state;
    const isCorrect = quiz[currentQuestion].correctAnswer === answer;

    this.setState({
      userAnswer: answer,
      isCorrect,
    });
  }

  handleNextQuestion() {
    this.setState(prevState => {
      const nextQuestion = prevState.currentQuestion + 1;

      if (nextQuestion >= prevState.quiz.length) {
        return { quizEnded: true};
      }

      return {
        currentQuestion: nextQuestion,
        userAnswer: null,
        isCorrect: null,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      if (this.state.timer) {
        clearTimeout(this.state.timer);
      }
  
      this.setState({
        timer: setTimeout(this.handleNextQuestion, 20000),  // 20 seconds
      });
    }
  }

  componentWillUnmount() {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
  }

  render() {
    const { quiz, currentQuestion, userAnswer, isCorrect, quizEnded } = this.state;

    if (quizEnded) {
      return <h1>Quiz ended! Thanks for playing.</h1>;
    }

    const question = quiz[currentQuestion];
  
    return (
      <div className="App">
        <h1>Japanese Quiz</h1>
        <p>{question.question}</p>
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => this.handleAnswerClick(answer)}>
            {answer}
          </button>
        ))}
        {userAnswer !== null && (
          <>
            <p style={{ color: isCorrect ? 'green' : 'red' }}>
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </p>
            <button onClick={this.handleNextQuestion}>Next Question</button>
          </>
        )}
      </div>
    );
  }   
}

export default App;

