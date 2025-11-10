// Quiz Data and State
let quizData = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// Load quiz data from JSON file
async function loadQuizData() {
    try {
        const response = await fetch('mcqs.json');
        const data = await response.json();
        quizData = data.mcqs;
        
        // Initialize user answers array
        userAnswers = new Array(quizData.length).fill(null);
        
        // Update total questions display
        document.getElementById('totalQuestions').textContent = quizData.length;
        document.getElementById('totalQuestionsQuiz').textContent = quizData.length;
        document.getElementById('totalQuestionsResult').textContent = quizData.length;
        
        console.log(`Loaded ${quizData.length} questions successfully`);
    } catch (error) {
        console.error('Error loading quiz data:', error);
        alert('Failed to load quiz questions. Please make sure mcqs.json is in the same folder.');
    }
}

// Start Quiz
function startQuiz() {
    if (quizData.length === 0) {
        alert('Quiz data not loaded yet. Please wait...');
        return;
    }
    
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    score = 0;
    
    showScreen('quizScreen');
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const question = quizData[currentQuestionIndex];
    
    // Update question counter
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Update score
    document.getElementById('currentScore').textContent = score;
    
    // Display question text
    document.getElementById('questionText').textContent = question.question;
    
    // Hide explanation initially
    const explanationDiv = document.getElementById('explanationDiv');
    explanationDiv.style.display = 'none';
    explanationDiv.innerHTML = '';
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    const wasAnswered = userAnswers[currentQuestionIndex] !== null;
    const userAnswer = userAnswers[currentQuestionIndex];
    const correctAnswer = question.answer_index;
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        // If already answered, show the result
        if (wasAnswered) {
            optionElement.classList.add('disabled');
            if (index === correctAnswer) {
                optionElement.classList.add('correct');
            }
            if (index === userAnswer) {
                optionElement.classList.add('selected');
                if (userAnswer !== correctAnswer) {
                    optionElement.classList.add('incorrect');
                }
            }
        } else {
            optionElement.onclick = () => selectOption(index);
        }
        
        optionElement.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)}.</span>
            <span class="option-text">${option}</span>
        `;
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Show explanation if already answered
    if (wasAnswered) {
        const isCorrect = userAnswer === correctAnswer;
        showExplanation(isCorrect);
        document.getElementById('showAnswerBtn').style.display = 'none';
    } else {
        document.getElementById('showAnswerBtn').style.display = 'inline-block';
    }
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Select an option
function selectOption(optionIndex) {
    // Save the answer
    const wasAnswered = userAnswers[currentQuestionIndex] !== null;
    userAnswers[currentQuestionIndex] = optionIndex;
    
    const question = quizData[currentQuestionIndex];
    const correctIndex = question.answer_index;
    const isCorrect = optionIndex === correctIndex;
    
    // Update UI - show correct/incorrect
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        opt.classList.remove('selected');
        opt.classList.add('disabled'); // Disable further selection
        
        if (idx === correctIndex) {
            opt.classList.add('correct');
        }
        if (idx === optionIndex && !isCorrect) {
            opt.classList.add('incorrect');
        }
        if (idx === optionIndex) {
            opt.classList.add('selected');
        }
    });
    
    // Show explanation
    showExplanation(isCorrect);
    
    // Hide "Show Answer" button after selection
    document.getElementById('showAnswerBtn').style.display = 'none';
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
    
    // Update score if this is a new answer
    if (!wasAnswered) {
        checkAnswer(optionIndex);
    } else {
        // Recalculate score if answer changed
        recalculateScore();
    }
}

// Show explanation after answer
function showExplanation(isCorrect) {
    const question = quizData[currentQuestionIndex];
    const explanationDiv = document.getElementById('explanationDiv');
    
    const resultClass = isCorrect ? 'correct-answer' : 'incorrect-answer';
    const resultIcon = isCorrect ? '✓' : '✗';
    const resultText = isCorrect ? 'Correct!' : 'Incorrect';
    
    explanationDiv.className = `explanation-box ${resultClass}`;
    explanationDiv.innerHTML = `
        <div class="explanation-header">
            <span class="explanation-icon">${resultIcon}</span>
            <span class="explanation-title">${resultText}</span>
        </div>
        <div class="explanation-content">
            <p><strong>Correct Answer:</strong> ${question.options[question.answer_index]}</p>
            ${question.explanation ? `<p><strong>Explanation:</strong> ${question.explanation}</p>` : ''}
            <p class="explanation-source"><strong>Source:</strong> ${question.source_file || 'Course Materials'} - ${question.topic || 'Operating Systems'}</p>
        </div>
    `;
    explanationDiv.style.display = 'block';
}

// Show answer without selecting (Show Answer button)
function showAnswer() {
    const question = quizData[currentQuestionIndex];
    const correctIndex = question.answer_index;
    
    // Highlight correct answer
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === correctIndex) {
            opt.classList.add('correct');
        }
    });
    
    // Show explanation
    const explanationDiv = document.getElementById('explanationDiv');
    explanationDiv.className = 'explanation-box answer-revealed';
    explanationDiv.innerHTML = `
        <div class="explanation-header">
            <span class="explanation-icon">💡</span>
            <span class="explanation-title">Answer Revealed</span>
        </div>
        <div class="explanation-content">
            <p><strong>Correct Answer:</strong> ${question.options[question.answer_index]}</p>
            ${question.explanation ? `<p><strong>Explanation:</strong> ${question.explanation}</p>` : ''}
            <p class="explanation-source"><strong>Source:</strong> ${question.source_file || 'Course Materials'} - ${question.topic || 'Operating Systems'}</p>
        </div>
    `;
    explanationDiv.style.display = 'block';
    
    // Hide show answer button
    document.getElementById('showAnswerBtn').style.display = 'none';
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

// Check if answer is correct
function checkAnswer(selectedIndex) {
    const question = quizData[currentQuestionIndex];
    if (selectedIndex === question.answer_index) {
        score++;
        document.getElementById('currentScore').textContent = score;
    }
}

// Recalculate total score
function recalculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer !== null && answer === quizData[index].answer_index) {
            score++;
        }
    });
    document.getElementById('currentScore').textContent = score;
}

// Navigation functions
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Update navigation button states
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Next/Submit button
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
        nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
    }
}

// Submit quiz and show results
function submitQuiz() {
    // Calculate final statistics
    const correctAnswers = score;
    const incorrectAnswers = userAnswers.filter((answer, index) => 
        answer !== null && answer !== quizData[index].answer_index
    ).length;
    const unansweredQuestions = userAnswers.filter(answer => answer === null).length;
    const percentage = Math.round((correctAnswers / quizData.length) * 100);
    
    // Update results display
    document.getElementById('finalScore').textContent = correctAnswers;
    document.getElementById('percentageScore').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('incorrectCount').textContent = incorrectAnswers;
    document.getElementById('unansweredCount').textContent = unansweredQuestions;
    
    // Show results screen
    showScreen('resultsScreen');
}

// Review answers
function reviewAnswers() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.answer_index;
        const isCorrect = userAnswer === correctAnswer;
        const isAnswered = userAnswer !== null;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        let statusClass = 'unanswered';
        let statusText = 'Not Answered';
        if (isAnswered) {
            statusClass = isCorrect ? 'correct' : 'incorrect';
            statusText = isCorrect ? '✓ Correct' : '✗ Incorrect';
        }
        
        let optionsHTML = '';
        question.options.forEach((option, optIndex) => {
            let optionClass = 'review-option';
            let badge = '';
            
            if (optIndex === correctAnswer) {
                optionClass += ' correct-answer';
                badge = '<span style="color: #28a745; font-weight: bold; margin-left: 10px;">✓ Correct Answer</span>';
            }
            
            if (optIndex === userAnswer && userAnswer !== correctAnswer) {
                optionClass += ' wrong-answer';
                badge = '<span style="color: #dc3545; font-weight: bold; margin-left: 10px;">✗ Your Answer</span>';
            }
            
            if (optIndex === userAnswer && userAnswer === correctAnswer) {
                badge = '<span style="color: #28a745; font-weight: bold; margin-left: 10px;">✓ Your Answer (Correct)</span>';
            }
            
            optionsHTML += `
                <div class="${optionClass}">
                    <span class="option-label">${String.fromCharCode(65 + optIndex)}.</span>
                    <span class="option-text">${option}</span>
                    ${badge}
                </div>
            `;
        });
        
        const sourceFile = question.source_file ? question.source_file.split('\\').pop() : 'Unknown';
        
        reviewItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="color: #4a90e2;">Question ${index + 1}</h3>
                <span class="review-status ${statusClass}">${statusText}</span>
            </div>
            <div class="review-question">${question.question}</div>
            <div class="review-options">${optionsHTML}</div>
            <div class="source-info">
                <strong>Source:</strong> ${sourceFile}
                ${question.source_sentence ? `<br><strong>Original sentence:</strong> "${question.source_sentence.substring(0, 150)}${question.source_sentence.length > 150 ? '...' : ''}"` : ''}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
    
    showScreen('reviewScreen');
}

// Back to results from review
function backToResults() {
    showScreen('resultsScreen');
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    score = 0;
    startQuiz();
}

// Show specific screen
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadQuizData();
    showScreen('startScreen');
});

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    const activeScreen = document.querySelector('.screen.active').id;
    
    if (activeScreen === 'quizScreen') {
        if (event.key === 'ArrowLeft') {
            if (!document.getElementById('prevBtn').disabled) {
                previousQuestion();
            }
        } else if (event.key === 'ArrowRight') {
            if (!document.getElementById('nextBtn').disabled) {
                nextQuestion();
            }
        } else if (event.key >= '1' && event.key <= '4') {
            const optionIndex = parseInt(event.key) - 1;
            if (optionIndex < quizData[currentQuestionIndex].options.length) {
                selectOption(optionIndex);
            }
        }
    }
});
