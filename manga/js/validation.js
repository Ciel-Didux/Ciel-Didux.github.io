let registerEmail = document.querySelector('#register_email');
let registerPassword = document.querySelector('#register_password');
let registerConfirmPassword = document.querySelector('#register_confirm_password');
let registerTelephone = document.querySelector('#register_telephone');

let patternEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
let filterRu = /^[\w]{1}[\w-\.]*@[\w-]+\.ru$/i;
let accessChars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM0123456789';

let isOkay = true;

function validate() {
    resetMessages();

    //check email
    if (registerEmail.value === '') {
        showError(registerEmail, ' Вкажіть E-mail');
        isOkay = false;

    } else if (!patternEmail.test(String(registerEmail.value))) {
        showError(registerEmail, ' Введіть коректний E-mail');
        isOkay = false;

    } else if (filterRu.test(String(registerEmail.value))) {
        showError(registerEmail, ' @... .ru не підтримується, використовуйте інші почтові сервіси');
        isOkay = false;
    }

    //check password
    let password = String(registerPassword.value);
    if (password === '') {
        showError(registerPassword, ' Вкажіть пароль');
        isOkay = false;

    } else if (password.length < 8) {
        showError(registerPassword, ' Ваш пароль повинен містити не менше ніж 8 символів');
        isOkay = false;

    } else if (password === password.toLowerCase()) {
        console.log(password.toLowerCase);
        showError(registerPassword, ' Пароль повинен містити як мінімум одну велику літеру');
        isOkay = false;

    } else {
        let isError = true;
        for (let i = 0; i < password.length; i++) {
            isError = true;
            for (let j = 0; j < accessChars.length; j++) {
                if (password[i] == accessChars[j]) {
                    isError = false;
                    break;
                }
            }
            if (isError) {
                showError(registerPassword, ' Пароль повинен містити лише латинські літери a-z, A-Z або цифри 0-9');
                isOkay = false;
                break;
            }
        }
    }

    //check confirm password
    if (password !== String(registerConfirmPassword.value) || registerConfirmPassword.value === '') {
        showError(registerConfirmPassword, ' Паролі не співпадають');
        isOkay = false;
    }


    //chech phone number
    if (typeof Number(registerTelephone.value) !== "number" || registerTelephone.value[0] !== '+' || registerTelephone.value.length != 13) {
        showError(registerTelephone, ' Невірний формат');
        isOkay = false;
    }
    if (isOkay) {
        alert("Ви успішно зареєстровані");
    }
}

function showError(el, message) {
    let errorBlock = el.nextSibling.nextSibling; // .error-message
    errorBlock.innerHTML = message;
}

function resetMessages() {
    let message = document.querySelectorAll('.error-message');
    [].forEach.call(message, function (e) {
        e.innerHTML = '';
    });
}
