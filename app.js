// DOM Elements
const encryptFileInput = document.getElementById('encrypt-file');
const decryptFileInput = document.getElementById('decrypt-file');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const encryptPassword = document.getElementById('encrypt-password');
const decryptPassword = document.getElementById('decrypt-password');
const encryptFileNames = document.getElementById('encrypt-file-names');
const decryptFileName = document.getElementById('decrypt-file-name');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const passwordStrength = document.getElementById('password-strength');
const strengthText = document.getElementById('strength-text');

// Modal Elements
const securityModal = document.getElementById('security-modal');
const helpModal = document.getElementById('help-modal');
const securityBtn = document.getElementById('security-btn');
const helpBtn = document.getElementById('help-btn');
const closeSecurity = document.getElementById('close-security');
const closeHelp = document.getElementById('close-help');

// File selection handlers
encryptFileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
        encryptFileNames.innerHTML = files.map(file => 
            `<div class="truncate">• ${file.name}</div>`
        ).join('');
    } else {
        encryptFileNames.innerHTML = '';
    }
});

decryptFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        decryptFileName.innerHTML = `<div class="truncate">${e.target.files[0].name}</div>`;
    } else {
        decryptFileName.innerHTML = '';
    }
});

// Password strength indicator
encryptPassword.addEventListener('input', (e) => {
    const password = e.target.value;
    const strength = calculatePasswordStrength(password);
    
    // Update visual indicator
    passwordStrength.style.width = `${strength.score * 25}%`;}
    
    // Set color based on strength
    if (strength.score < 2) {
        passwordStrength.style.backgroundColor = '#ef4444'; // red
        strengthText.textContent = 'Weak';
    } 
    else if (strength.score < 4) {
        passwordStrength.style.backgroundColor = '#f59e0b'; // orange
        strengthText.textContent
    }