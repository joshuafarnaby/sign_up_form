const APP = (() => {
  const signUpForm = document.getElementById('sign-up-form');

  const firstNameControl = document.getElementById('first-name');
  const lastNameControl = document.getElementById('last-name');
  const emailControl = document.getElementById('email');
  const numberControl = document.getElementById('number');
  const passwordControl = document.getElementById('password');
  const passwordControl2 = document.getElementById('password2');

  const validateName = function () {
    let formControl = this;
    let nameType = formControl.name == 'first-name' ? 'first' : 'last';

    if (formControl.validity.valid) {
      removeError(formControl);
    } else if (formControl.validity.valueMissing) {
      showError(formControl, `Please enter a ${nameType} name`);
    }
  }

  const validateEmail = function () {
    if (emailControl.validity.valid) {
      removeError(emailControl)
    } else if (emailControl.validity.typeMismatch || emailControl.validity.valueMissing) {
      showError(emailControl, 'Please enter an email address in format a@b')
    }
  }

  const validateNumber = function () {
    const values = numberControl.value.split('');
    const lastValue = values[values.length - 1];

    if (numberControl.validity.valueMissing) {
      showError(numberControl, 'Please enter a number between 8 and 12 digits')
    } else if (!/[0-9]/.test(lastValue)) {
      showError(numberControl, 'Please only include digits 0-9')
    } else if (numberControl.validity.tooShort || numberControl.validity.tooShort) {
      showError(numberControl, 'Please enter a number between 8 and 12 digits')
    } else if (numberControl.validity.valid) {
      removeError(numberControl)
    }
  }

  const validatePassword = function () {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!pattern.test(this.value)) {
      showError(this, '8 characters with 1 letter and 1 number')
    } else {
      removeError(this);
    }

    if (this.id == 'password2') {
      if (this.value != passwordControl.value) {
        showError(this, 'Passwords do not match')
      } else {
        removeError(this)
      }
    }
  }

  const removeError = (formControl) => formControl.parentElement.querySelector('span.error-msg').textContent = '';
  const showError = (formControl, msg) => formControl.parentElement.querySelector('span.error-msg').textContent = msg;

  firstNameControl.addEventListener('input', validateName.bind(firstNameControl));
  lastNameControl.addEventListener('input', validateName.bind(lastNameControl));
  emailControl.addEventListener('input', validateEmail);
  numberControl.addEventListener('input', validateNumber);
  passwordControl.addEventListener('input', validatePassword.bind(passwordControl));
  passwordControl2.addEventListener('input', validatePassword.bind(passwordControl2));
})();
