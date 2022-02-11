const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const passRe = document.getElementById('password-re');
const errorEmail = document.querySelector('#email + span'); //+ is adjacent sibling selector
const errorZip = document.querySelector('#zipcode + span');
const errorPass = document.querySelector('#password + span');
const errorPassConf = document.querySelector('#password-re + span');

form.addEventListener('submit', (e)=> {
    if (!password.validity.valid) {
        e.preventDefault();
    } else if (!passRe.validity.valid) {
        e.preventDefault();
    } else if (!email.validity.valid) {
        e.preventDefault();
    } else {
        alert('Congo boi! You got it!');
    }

})

email.addEventListener('input', (e)=> {
    if(email.validity.typeMismatch) {
        //email.setCustomValidity("Shouldn't this be an email?"); //used to hijack inbuilt error msg
        //email.reportValidity(); //this shows the setcustomvalidity
        errorEmail.textContent = 'A valid email is not provided';
        errorEmail.style.display = 'flex';
    } else if (email.validity.valueMissing) {
        errorEmail.textContent = 'Email Required';
        errorEmail.style.display = 'flex';
    } else {
        errorEmail.textContent = '';
        errorEmail.style.display = 'none';
    }
})

zipcode.addEventListener('input', (e)=> {
    if(zipcode.validity.patternMismatch) {
        errorZip.textContent = 'Only 6 numbered zipcode allowed';
        errorZip.style.display = 'flex';
    }  else if (zipcode.validity.valueMissing) {
        errorZip.textContent = 'Please input zipcode';
        errorZip.style.display = 'flex';
    }  else {
        errorZip.textContent = '';
        errorZip.style.display = 'none';
    }
})

password.addEventListener('input', (e)=> {
    if(password.validity.patternMismatch) {
        errorPass.textContent = 'Your password should contain 1 numberic digit, 1 uppercase and 1 lowercase letter';
        errorPass.style.display = 'flex';
    } else if (password.validity.valueMissing) {
        errorPass.textContent = 'Please input password';
        errorPass.style.display = 'flex';
    } else {
        errorPass.textContent = '';
        errorPass.style.display = 'none';
    }
})

passRe.addEventListener('keyup', (e)=> {
    let value1 = password.value;
    let value2 = passRe.value;
    if(value1 == value2) {
        errorPassConf.textContent = ''; 
        errorPassConf.style.display = 'none';
    } else if (passRe.validity.valueMissing) {
        errorPassConf.textContent = 'Please confirm password';
        errorPassConf.style.display = 'flex';
    } else {
        errorPassConf.textContent = 'Your password does not match';
        errorPassConf.style.display = 'flex';
    }
})