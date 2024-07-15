const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', function (event) {
  const { name, value } = event.target;
  if (name === 'email' || name === 'message') {
    formData[name] = value;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  formData.email = savedData.email;
  formData.message = savedData.message;
  updateForm();
}

function updateForm() {
  document.querySelector('[name="email"]').value = formData.email;
  document.querySelector('[name="message"]').value = formData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    clearFormData();
    clearLocalStorage();
  }
});

function clearFormData() {
  formData.email = '';
  formData.message = '';
  updateForm();
}

function clearLocalStorage() {
  localStorage.removeItem('feedback-form-state');
}
