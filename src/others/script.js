const elementAnswer = document.querySelector('#answer');
const inputQuestion = document.querySelector('#inputQuestion');
const buttonQuestion = document.querySelector('#buttonQuestion');

const answers = [
  'Não',
  'Sim',
  'Provavelmente',
  'Talvez',
  'Com certeza',
  'Sinais apontam que sim.',
];

function makeQuestion() {
  if (!inputQuestion.value) return alert('Digite sua pergunta');

  buttonQuestion.setAttribute('disabled', true);

  const question = '<div>' + inputQuestion.value + '</div>';

  const answerSend = answers[Math.floor(Math.random() * answers.length)];

  elementAnswer.innerHTML = question + answerSend;

  elementAnswer.style.opacity = 1;

  setTimeout(() => {
    elementAnswer.style.opacity = 0;
    buttonQuestion.removeAttribute('disabled');
  }, 3000);
}