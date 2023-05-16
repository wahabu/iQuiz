const quiz = [
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
];

function startQuiz() {
  for(let i = 0; i < quiz.length; i++) {
    const answer = prompt(quiz[i].question + '\n' + quiz[i].answers.join('\n'));
    if(answer === quiz[i].correctAnswer) {
      alert('Correct!');
    } else {
      alert('Incorrect. The correct answer was ' + quiz[i].correctAnswer);
    }
  }
}

startQuiz();
