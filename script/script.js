const form = document.querySelector('.js-form');
const emailInput = document.querySelector('.js-email');
const error = document.querySelector('.js-error');

form.setAttribute("novalidate", "");

function showError(string) {
    emailInput.classList.add('not-valid');
    error.textContent = string;
    error.classList.remove('hidden');
}

function removeError() {
    emailInput.classList.remove('not-valid');
    error.classList.add('hidden');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!emailInput.value) {
        showError("Whoops! It looks like you forgot to add your email");
    } else if (!isEmail(emailInput.value)) {
        showError("Please provide a valid email address");
    } else {
        emailInput.value = "";
    }
})

emailInput.addEventListener('input', e => {
    if (isEmail(emailInput.value)) {
        removeError();
    }
})