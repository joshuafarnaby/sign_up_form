const signUpForm = document.getElementById('sign-up-form');

const firstNameControl = document.getElementById('first-name');
const firstNameError = document.getElementById('first-name-error');

firstNameControl.addEventListener('input', (ev) => {
  console.log(firstNameControl.validity);

  // if (firstNameControl.validity.valid) {
  //   firstNameError.textContent = '';
  // } else {
  //   if (firstNameControl.validity.valueMissing) {
  //     firstNameError.textContent = 'You must enter a first name'
  //   }
  // }
})
