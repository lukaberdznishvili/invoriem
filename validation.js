
document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    let form = event.target;

    let username = form.querySelector('[name="username"]').value;
     if (username.length < 5) {
        errors.username = 'Min 5 letters';
    }
   let password = form.querySelector('[name="password"]').value;
    let password2 = form.querySelector('[name="password2"]').value;
    if (password.length < 5) {
        errors.password = 'Invalid Password';
    }
    if (password != password2) {
        errors.password = 'Password do not match';
    }
 let agree = form.querySelector('[name="agree"]').checked;
if(!agree) {
        errors.agree = 'You must agree terms and condtitions';
    }
    let gender = false;
form.querySelectorAll('[name="gender"]').forEach(item => {
        if (item.checked) {
            gender = true;
        }
    });
    if (gender === false) {
        errors.gender = 'Please select your gender';
    }
    form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = '';
    }) 
    for (let name in errors) {
        let errorPlaceholder = document.getElementById('error_' + name);
        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[name];
        }
    }
    if (Object.keys(errors).length === 0) {
        form.submit();
    }
    console.log(errors);
});