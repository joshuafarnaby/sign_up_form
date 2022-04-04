const APP = (() => {
  const signUpForm = document.getElementById('sign-up-form');

  const firstNameControl = document.getElementById('first-name');
  const lastNameControl = document.getElementById('last-name');
  const emailControl = document.getElementById('email');

  const validateName = function () {
    let formControl = this;
    let nameType = formControl.name == 'first-name' ? 'first' : 'last';
    let errorContainer = formControl.parentElement.querySelector('span.error-msg');

    if (formControl.validity.valid) {
      removeError(errorContainer);
    } else if (formControl.validity.valueMissing) {
      showError(errorContainer, `Please enter a ${nameType} name`);
    }
  }

  const validateEmail = function () {
    const errorContainer = emailControl.parentElement.querySelector('span.error-msg');

    if (emailControl.validity.valid) {
      removeError(errorContainer)
    } else if (emailControl.validity.typeMismatch || emailControl.validity.valueMissing) {
      showError(errorContainer, 'Please enter an email address in format a@b')
    }
  }

  const removeError = (element) => element.textContent = '';
  const showError = (element, msg) => element.textContent = msg;

  firstNameControl.addEventListener('input', validateName.bind(firstNameControl));
  lastNameControl.addEventListener('input', validateName.bind(lastNameControl));
  emailControl.addEventListener('change', validateEmail);
})();
