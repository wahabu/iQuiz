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
import ProgressBar from './ProgressBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          question: 'What is the Japanese word for "cat"?',
          choices: ['犬', '猫', '鳥', '馬'],
          correctChoice: 1,
        },
        // Add more questions here
      ],
      currentQuestion: 0,
      selectedChoice: null,
      seconds: 20,
      elapsedSeconds: 0,
      started: false,
      timer: null,
    };
  }

  componentDidMount() {
    // Start the quiz
    this.startQuiz();
  }

  componentWillUnmount() {
    // Clear the timer when the component is unmounted
    clearTimeout(this.state.timer);
  }

  startQuiz() {
    // Set started to true and begin the timer
    this.setState({ started: true });
    this.tick();
  }

  tick() {
    // Update the elapsedSeconds every second until the time is up
    const timer = setTimeout(() => {
      if (this.state.elapsedSeconds < this.state.seconds) {
        this.setState(
          (prevState) => ({
            elapsedSeconds: prevState.elapsedSeconds + 1,
          }),
          () => {
            // Call tick() recursively after each update
            this.tick();
          }
        );
      } else {
        // Time is up, end the quiz
        this.setState({ started: false });
        clearTimeout(timer);
      }
    }, 1000);
    this.setState({ timer });
  }

  handleAnswer(choice) {
    // Set the selectedChoice based on user input
    this.setState({ selectedChoice: choice });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.elapsedSeconds !== this.state.elapsedSeconds) {
      // Re-render the ProgressBar when elapsedSeconds changes
      this.forceUpdate();
    }
  }

  render() {
    const currentQuestion = this.state.questions[this.state.currentQuestion];
    const remainingSeconds = this.state.seconds - this.state.elapsedSeconds;
    const isCorrect = this.state.selectedChoice === currentQuestion.correctChoice;
  
    return (
      <div>
        <h1>Japanese Quiz</h1>
  
        {/* Render the ProgressBar */}
        <ProgressBar in={this.state.started} remainingSeconds={remainingSeconds} />
  
        {/* Render the current question */}
        <div>{currentQuestion.question}</div>
  
        {/* Render the answer choices */}
        <div>
          {currentQuestion.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => this.handleAnswer(index)}
              style={{
                backgroundColor:
                  this.state.selectedChoice === index ? (isCorrect ? 'green' : 'red') : '',
              }}
            >
              {choice}
            </button>
          ))}
        </div>
  
        {/* Render the feedback */}
        {this.state.selectedChoice !== null && (
          <div style={{ color: isCorrect ? 'green' : 'red' }}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </div>
        )}
  
        {/* Render the remaining seconds */}
        <div>{remainingSeconds} seconds remaining</div>
      </div>
    );
  }  
}

export default App;