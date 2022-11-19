//  validate form email input
const email = document.querySelector('#email');
const form = document.querySelector('#form');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', (event) => {
  const usermail = email.value;
  if (/[A-Z]/.test(usermail)) {
    errorMsg.innerHTML = 'failed: email must be in lowercase.eg(johndoe@gmail.com)';
    errorMsg.classList.add('invalid');
    event.preventDefault();
  }
});

// store form data to localStorage
form.addEventListener('input', () => {
  const userData = {
    fname: document.querySelector('#fname').value,
    email: document.querySelector('#email').value,
    comment: document.querySelector('#comments').value,
  };
  localStorage.setItem('formData', JSON.stringify(userData));
});

// pre fill user form details from localStorage
const getUserFormInput = JSON.parse(localStorage.getItem('formData'));
document.querySelector('#fname').value = getUserFormInput.fname;
document.querySelector('#email').value = getUserFormInput.email;
document.querySelector('#comments').value = getUserFormInput.comment;