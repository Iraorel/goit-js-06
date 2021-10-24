const form = document.querySelector('login-form');
const message = 'Invalid Email or Password! Try again plese.'



const onFormSubmit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log(formData);

    formData.forEach((value, name) => {
        console.log('onForSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });

    if (email.value === "" || password.value ===""){
    return alert(message);
   };

 form.reset();
}


form.addEventListener('submit', onFormSubmit);