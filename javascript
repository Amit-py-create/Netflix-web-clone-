// src/index.js

// Example of handling dropdown interaction
document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('languagesSelect');
  
  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    // Handle language change logic here
    console.log('Selected language:', selectedLanguage);
  });
});
