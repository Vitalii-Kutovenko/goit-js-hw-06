const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = this.elements.email.value.trim();
  const password = this.elements.password.value.trim();

  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  const formData = {
    email,
    password
  };

  console.log(formData);

  this.reset();
});

