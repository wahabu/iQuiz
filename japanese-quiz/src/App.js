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
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [
        {
          question: 'これは何ですか?',
          options: ['りんご', 'ばなな', 'オレンジ', 'いちご'],
          answer: 0
        },
      ],
      currentQuestion: 0,
      userAnswer: null,
      isCorrect: null,
      quizEnded: false,
      timer: null,
      remainingSeconds: 20,  // The number of remaining seconds
    };

    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleNextQuestion() {
    this.setState(prevState => {
      const nextQuestion = prevState.currentQuestion + 1;

      if (nextQuestion >= prevState.quiz.length) {
        return { quizEnded: true };
      }

      return {
        currentQuestion: nextQuestion,
        userAnswer: null,
        isCorrect: null,
        remainingSeconds: 20,  // Reset the timer to 20 seconds
      };
    });
  }

  handleAnswer(option) {
    this.setState(prevState => {
      const isCorrect = option === prevState.quiz[prevState.currentQuestion].answer;
      return { userAnswer: option, isCorrect };
    });
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState(prevState => ({
          remainingSeconds: prevState.remainingSeconds - 1,
        }), () => {
          if (this.state.remainingSeconds <= 0) {
            this.handleNextQuestion();
          }
        });
      }, 1000)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState({ remainingSeconds: 20 });  // Reset the timer to 20 seconds
    }
  }

  componentWillUnmount() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
  }

  render() {
    const { quiz, currentQuestion, userAnswer, isCorrect, quizEnded, remainingSeconds } = this.state;

    if (quizEnded) {
      return <h1>Quiz ended! Thanks for playing.</h1>;
    }

    const question = quiz[currentQuestion];

    return (
      <div className="App">
        <h1>Japanese Quiz</h1>
        <div style={{ 
            height: '20px', 
            width: `${remainingSeconds * 5}%`, // Each second represents 5% of the bar
            backgroundColor: 'orange',
            transition: 'width 1s ease-in-out'
          }} 
        />
        <p>{question.question}</p>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => this.handleAnswer(index)}
            style={{ backgroundColor: userAnswer === index ? isCorrect ? 'green' : 'red' : '' }}
          >
            {option}
          </button>
        ))}
        <button onClick={this.handleNextQuestion}>Next Question</button>
      </div>
    );
  }
}


export default App;
