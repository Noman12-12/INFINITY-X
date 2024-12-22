// Form validation for empty fields
document.querySelector('.login-form').addEventListener('submit', function(event) {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const country = document.getElementById('country').value;

  if (!username || !password || !country) {
    alert('Please fill in all fields.');
    event.preventDefault();
  } else {
    alert('Thank you 💫!');
  }
});