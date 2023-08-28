const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name = "email"]');
const messageInput = form.querySelector('textarea[name = "message"]');
const formDataKey = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(formDataKey)) || {};

const saveDataToLocalStorage = () => {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem(formDataKey, JSON.stringify(formData));
};

const clearFormDataAndLocalStorage = () => {
  formData = {};
  localStorage.removeItem(formDataKey);
  emailInput.value = '';
  messageInput.value = '';
};

emailInput.addEventListener('input', saveDataToLocalStorage);
messageInput.addEventListener('input', saveDataToLocalStorage);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Email', formData.email);
  console.log('Message', formData.message);
  clearFormDataAndLocalStorage();
});

emailInput.value = formData.email || '';
messageInput.value = formData.message || '';
