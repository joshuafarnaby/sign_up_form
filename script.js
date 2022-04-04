const APP = (() => {
  const signUpForm = document.getElementById('sign-up-form');

  const firstNameControl = document.getElementById('first-name');
  const lastNameControl = document.getElementById('last-name');

  const validateName = function () {
    let formControl = this;
    let nameType = formControl.name == 'first-name' ? 'first' : 'last';
    let errorContainer = formControl.parentElement.querySelector('span.error-msg');

    if (formControl.validity.valid) {
      removeError(errorContainer);
    } else if (formControl.validity.valueMissing) {
      showError(errorContainer, `A ${nameType} name is required`);
    }
  }

  const removeError = (element) => element.textContent = '';
  const showError = (element, msg) => element.textContent = msg;

  firstNameControl.addEventListener('input', validateName.bind(firstNameControl));
  lastNameControl.addEventListener('input', validateName.bind(lastNameControl));
})();
