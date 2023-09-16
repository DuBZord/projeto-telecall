const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const footer = document.querySelector('footer');
  footer.classList.toggle('dark-mode');

  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});

const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
  document.body.classList.add('dark-mode');
  const footer = document.querySelector('footer');
  footer.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
  const footer = document.querySelector('footer');
  footer.classList.remove('dark-mode');
}
