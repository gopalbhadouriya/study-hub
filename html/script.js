function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('quiz-result');
    const correctAnswer = 'c';
    let selectedAnswer;

    for (const answer of form.q1) {
        if (answer.checked) {
            selectedAnswer = answer.value;
            break;
        }
    }

    if (selectedAnswer === undefined) {
        resultDiv.innerHTML = '<p>Please select an answer.</p>';
        return;
    }

    if (selectedAnswer === correctAnswer) {
        resultDiv.innerHTML = '<p>Correct! The capital of France is Paris.</p>';
    } else {
        resultDiv.innerHTML = '<p>Incorrect. The correct answer is Paris.</p>';
    }
}
