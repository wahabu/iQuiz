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

let currentQuestion = 0;

function showQuestion() {
  const questionItem = quiz[currentQuestion];
  document.getElementById('question').innerText = questionItem.question;
  for(let i = 1; i <= 4; i++) {
      const button = document.getElementById('answer' + i);
      button.innerText = questionItem.answers[i - 1];
      button.onclick = function() {
          if(button.innerText === questionItem.correctAnswer) {
              alert('Correct!');
          } else {
              alert('Incorrect. The correct answer was ' + questionItem.correctAnswer);
          }
          currentQuestion++;
          if(currentQuestion < quiz.length) {
              showQuestion();
          } else {
              alert('Quiz completed!');
          }
      };
  }
}

showQuestion();
