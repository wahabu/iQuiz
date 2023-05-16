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
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Japanese Quiz</h1>
        {/* We'll add more here later */}
      </div>
    );
  }
}

export default App;
