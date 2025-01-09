document.addEventListener('DOMContentLoaded', () => {
  // Dynamically add checkboxes to the list items
  document.querySelectorAll('ol > li').forEach((question, index) => {
    const options = question.querySelectorAll('ul li');
    options.forEach(option => {
      const optionText = option.textContent.trim();
      if (/^[A-Z]\.\s/.test(optionText)) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = `question-${index}`; // Unique identifier for each question
        checkbox.value = optionText.charAt(0); // Use the letter as the value
        option.prepend(checkbox);
      }
    });
  });
});

function submitQuiz() {
  let score = 0;
  let totalQuestions = 0;

  document.querySelectorAll('ol > li').forEach((question, index) => {
    const correctAnswerText = question.querySelector('details p').textContent.match(/Correct answer:\s([A-Z, ]+)/i);
    if (!correctAnswerText) return; // Skip if no correct answers are found

    const correctAnswers = correctAnswerText[1]
      .replace(/\s+/g, '') // Remove spaces
      .split(/,|(?=[A-Z])/); // Split on commas or consecutive uppercase letters

    const selectedOptions = Array.from(
      document.querySelectorAll(`input[name="question-${index}"]:checked`)
    ).map(input => input.value);

    if (correctAnswers.length > 0) {
      totalQuestions++;
    }

    const isCorrect =
      selectedOptions.length === correctAnswers.length &&
      correctAnswers.every(answer => selectedOptions.includes(answer));

    if (isCorrect) {
      score++;
      question.classList.remove('incorrect'); // Remove incorrect class if correct
    } else {
      question.classList.add('incorrect'); // Highlight incorrect questions
    }
  });

  const percentage = totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(2) : 0;

  document.getElementById('score').innerText = `${score} / ${totalQuestions}`;
  document.getElementById('percentage').innerText = percentage;
  document.getElementById('result').style.display = 'block';
}
