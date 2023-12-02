let score = 0;
let playerName = '';
let playerNickname = '';
let isGamePaused = false;
document.getElementById('level').style.display = 'none';
const winningMessages = [
    'You have triumphed over the CAPTCHA challenge!',
    'In the realm of codes, you are a true warrior!',
    'Congratulations, mighty conqueror of CAPTCHAs!',
    'Victory is yours, warrior!',
];
const losingMessages = [
    'Oh no! Time is up.',
    'You ran out of time. Try again!',
    'Time over! Better luck next time.',
    'Oops! Time flew by.'
];


function startGame() {

    resetGame();

    document.getElementById('login').style.display = 'none';
    document.getElementById('level').style.display = 'none';
    document.getElementById('greensubmit2').style.display = 'none';
    document.getElementById('greensubmit3').style.display = 'none';
    document.getElementById('reset-button2').style.display = 'none';
    document.getElementById('reset-button3').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    document.getElementById('greeting').textContent = `Hello, ${playerName} (${playerNickname})!`;
    generateCaptcha();
}




function startGame2() {
 
    resetGame();

    document.getElementById('login').style.display = 'none';
    document.getElementById('level').style.display = 'none';
    document.getElementById('greensubmit').style.display = 'none';
    document.getElementById('greensubmit3').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
    document.getElementById('reset-button3').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    document.getElementById('greeting').textContent = `Hello, ${playerName} (${playerNickname})!`;
    generateCaptcha2();
}



function startGame3() {


    resetGame3();

    document.getElementById('login').style.display = 'none';
    document.getElementById('level').style.display = 'none';
    document.getElementById('greensubmit').style.display = 'none';
    document.getElementById('greensubmit2').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
    document.getElementById('reset-button2').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    document.getElementById('greeting').textContent = `Hello, ${playerName} (${playerNickname})!`;
    generateCaptcha3();
}



function levelpage() {

    playerName = document.getElementById('name').value.trim();
    playerNickname = document.getElementById('nickname').value.trim();

    if (playerName === '' || playerNickname === '') {
        alert('Please enter both your name and nickname.');
        return;
    }


    document.getElementById('login').style.display = 'none';
    document.getElementById('level').style.display = 'block';
    document.getElementById('game').style.display = 'none';
}






function resetGame() {
    score = 0;
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('userInput').value = '';
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = '';
    captchaElement.style.visibility = 'visible'; // Reset button
    
    let timeouts = [];
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
        window.clearTimeout(id); 
    }
    
    generateCaptcha(); 
}



function resetGame2() {
    score = 0;
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('userInput').value = '';
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = '';
    captchaElement.style.visibility = 'visible'; // Reset button
    
    let timeouts = [];
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
        window.clearTimeout(id); 
    }
    
    generateCaptcha2(); 
}


function resetGame3() {
    score = 0;
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('userInput').value = '';
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = '';
    captchaElement.style.visibility = 'visible'; // Reset button
    
    let timeouts = [];
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
        window.clearTimeout(id); 
    }
    
    generateCaptcha3(); 
}




function resetGame1() {
    document.getElementById('userInput').value = '';
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = '';
    captchaElement.style.visibility = 'visible'; //reset time 
    
    let timeouts = [];
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
        window.clearTimeout(id); 
    }
    
    generateCaptcha(); 
}


function resetGame12() {
    document.getElementById('userInput').value = '';
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = '';
    captchaElement.style.visibility = 'visible'; //reset time 
    
    let timeouts = [];
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
        window.clearTimeout(id); 
    }
    
    generateCaptcha2(); 
}


function resetGame13() {
    document.getElementById('userInput').value = '';
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = '';
    captchaElement.style.visibility = 'visible'; //reset time 
    
    let timeouts = [];
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
        window.clearTimeout(id); 
    }
    
    generateCaptcha3(); 
}







function generateCaptcha() {
    if (!isGamePaused) {
    const captchaElement = document.getElementById('captcha');
    const timerElement = document.getElementById('timer'); // timer
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    let timer = 9; 

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }

    
    console.log('Generated Captcha:', captcha);

    captchaElement.textContent = captcha;
    timerElement.textContent = `Time: ${timer}s`; 

    
    const countdown = setInterval(() => {
        timer--;
        timerElement.textContent = `Time: ${timer}s`;
        

        if (timer === 0) {
            clearInterval(countdown);
            captchaElement.style.visibility = 'visible';
            captchaElement.textContent = '';
            document.getElementById('userInput').value = '';
            document.getElementById('userInput').focus();
            const currentScore = score;
            const randomlosingMessage = losingMessages[Math.floor(Math.random() * losingMessages.length)];
            document.getElementById('timeup').textContent = `${randomlosingMessage}`;
            document.getElementById('sco1').textContent = `Your Score: ${currentScore}`;
            popup.style.display = 'block';
            score = 0; 
            document.getElementById('scoreValue').textContent = score;
        }
    }, 1000);


    setTimeout(() => {
        captchaElement.style.visibility = 'hidden';
    }, 2000);

    if (score >= 10) {
        clearInterval(countdown);
        captchaElement.style.visibility = 'visible';
        captchaElement.textContent = '';
        document.getElementById('userInput').value = '';
        document.getElementById('userInput').focus();
        const currentScore = score;
        const randomWinningMessage = winningMessages[Math.floor(Math.random() * winningMessages.length)];
        document.getElementById('win').textContent = `${randomWinningMessage}`;
        document.getElementById('sco').textContent = `Your Score: ${currentScore}`;
        winpopup.style.display = 'block';
        score = 0;
        document.getElementById('scoreValue').textContent = score;
    }
}
}




function generateCaptcha2() {
    if (!isGamePaused) {
    const captchaElement = document.getElementById('captcha');
    const timerElement = document.getElementById('timer'); // timer
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    let timer = 11; 

    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }

    console.log('Generated Captcha:', captcha);

    captchaElement.textContent = captcha;
    timerElement.textContent = `Time: ${timer}s`; 


    const countdown = setInterval(() => {
        timer--;
        timerElement.textContent = `Time: ${timer}s`;

        if (timer === 0) {
            clearInterval(countdown);
            captchaElement.style.visibility = 'visible';
            captchaElement.textContent = '';
            document.getElementById('userInput').value = '';
            document.getElementById('userInput').focus();
            const currentScore = score;
            const randomlosingMessage = losingMessages[Math.floor(Math.random() * losingMessages.length)];
            document.getElementById('timeup').textContent = `${randomlosingMessage}`;
            document.getElementById('sco1').textContent = `Your Score: ${currentScore}`;
            popup.style.display = 'block';
            score = 0; 
            document.getElementById('scoreValue').textContent = score;
        }
    }, 1000);

    setTimeout(() => {
        captchaElement.style.visibility = 'hidden';
    }, 3000);

    if (score >= 5) {
        clearInterval(countdown);
        captchaElement.style.visibility = 'visible';
        captchaElement.textContent = '';
        document.getElementById('userInput').value = '';
        document.getElementById('userInput').focus();
        const currentScore = score;
        const randomWinningMessage = winningMessages[Math.floor(Math.random() * winningMessages.length)];
        document.getElementById('win').textContent = `${randomWinningMessage}`;
        document.getElementById('sco').textContent = `Your Score: ${currentScore}`;
        winpopup.style.display = 'block';
        score = 0;
        document.getElementById('scoreValue').textContent = score;
    }
}
}





function generateCaptcha3() {
    if (!isGamePaused) {
    const captchaElement = document.getElementById('captcha');
    const timerElement = document.getElementById('timer'); // timer
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    let timer = 20; 

    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }

    console.log('Generated Captcha:', captcha);

    captchaElement.textContent = captcha;
    timerElement.textContent = `Time: ${timer}s`; 


    const countdown = setInterval(() => {
        timer--;
        timerElement.textContent = `Time: ${timer}s`;

        if (timer === 0) {
            clearInterval(countdown);
            captchaElement.style.visibility = 'visible';
            captchaElement.textContent = '';
            document.getElementById('userInput').value = '';
            document.getElementById('userInput').focus();
            const currentScore = score;
            const randomlosingMessage = losingMessages[Math.floor(Math.random() * losingMessages.length)];
            document.getElementById('timeup').textContent = `${randomlosingMessage}`;
            document.getElementById('sco1').textContent = `Your Score: ${currentScore}`;
            popup.style.display = 'block';
            score = 0; 
            document.getElementById('scoreValue').textContent = score;
        }
    }, 1000);

    setTimeout(() => {
        captchaElement.style.visibility = 'hidden';
    }, 5000);

    if (score >= 5) {
        clearInterval(countdown);
        captchaElement.style.visibility = 'visible';
        captchaElement.textContent = '';
        document.getElementById('userInput').value = '';
        document.getElementById('userInput').focus();
        const currentScore = score;
        const randomWinningMessage = winningMessages[Math.floor(Math.random() * winningMessages.length)];
        document.getElementById('win').textContent = `${randomWinningMessage}`;
        document.getElementById('sco').textContent = `Your Score: ${currentScore}`;
        winpopup.style.display = 'block';
        score = 0;
        document.getElementById('scoreValue').textContent = score;
    }
    
}
}


function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function winclosePopup() {
    const winpopup = document.getElementById('winpopup');
    winpopup.style.display = 'none';
}





function checkCaptcha() {
    const userInput = document.getElementById('userInput').value.toUpperCase();
    const captchaElement = document.getElementById('captcha');
    const captchaText = captchaElement.textContent.trim();

    console.log('User Input:', userInput);
    console.log('Captcha Text:', captchaText);

    if (userInput === captchaText && userInput !== '') {
        score++;
        document.getElementById('scoreValue').textContent = score;

        resetGame1()
    } else {
        alert('Incorrect! Try again.');
    }

    if (score >= 10) {
        winpopup.style.display = 'block';
    }

}


function checkCaptcha2() {
    const userInput = document.getElementById('userInput').value.toUpperCase();
    const captchaElement = document.getElementById('captcha');
    const captchaText = captchaElement.textContent.trim();

    console.log('User Input:', userInput);
    console.log('Captcha Text:', captchaText);

    if (userInput === captchaText && userInput !== '') {
        score++;
        document.getElementById('scoreValue').textContent = score;

        resetGame12()
    } else {
        alert('Incorrect! Try again.');
    }

    if (score >= 5) {
        winpopup.style.display = 'block';
    }

}



function checkCaptcha3() {
    const userInput = document.getElementById('userInput').value.toUpperCase();
    const captchaElement = document.getElementById('captcha');
    const captchaText = captchaElement.textContent.trim();

    console.log('User Input:', userInput);
    console.log('Captcha Text:', captchaText);

    if (userInput === captchaText && userInput !== '') {
        score++;
        document.getElementById('scoreValue').textContent = score;

        resetGame13()
    } else {
        alert('Incorrect! Try again.');
    }

    if (score >= 5) {
        winpopup.style.display = 'block';
    }

}



document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); //Enter key
        checkCaptcha(); 
    }
});






const bgAudio = document.getElementById('bgAudio');
const audioToggleBtn = document.getElementById('audioToggleBtn');

function toggleAudio() {
    if (bgAudio.paused) {
        
        bgAudio.play();
        audioToggleBtn.textContent = '🔇';
    } else {
        
        bgAudio.pause();
        audioToggleBtn.textContent = 'Unmute Audio';
    }
}






