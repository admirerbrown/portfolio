form.addEventListener('submit', (event) => {
    const usermail = email.value;
    if (/[A-Z]/.test(usermail)) {
      errorMsg.innerHTML = 'failed: email must be in lowercase.eg(johndoe@gmail.com)';
      errorMsg.classList.add('invalid');
      event.preventDefault();
    }
  const email = document.querySelector('#email');
  const form = document.querySelector('#form');
  const errorMsg = document.querySelector('.error-msg');
});