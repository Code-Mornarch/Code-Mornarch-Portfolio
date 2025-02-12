// Select the back-to-home button
const backToHomeButton = document.getElementById('back-to-home');

// Add click event listener
backToHomeButton.addEventListener('click', () => {
  // Redirect to the home page
  window.location.href = '/';
});