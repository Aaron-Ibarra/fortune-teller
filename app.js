const submitSection = document.getElementById('submit-section');
const answerSection = document.getElementById('answer-section');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

function toggleClass() {
    submitSection.classList.toggle('hide');
    answerSection.classList.toggle('hide');
}

submitBtn.addEventListener('click', () => {
    const answer = document.getElementById('answer');
    const chosenAnswer = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[chosenAnswer].textValue;
    toggleClass();
});

resetBtn.addEventListener('click', () => {
    toggleClass();
});
