const logForm = document.querySelector('login-form');
const message = 'Invalid Email or Password! Try again plese.';

logForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    if(email.value ==="" || password.value ===""){
        return alert(message);
    }
    logForm.reset();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

 formData.forEach((value, name) => {
    dataFormResult[name] = value;
  });

  console.log(dataFormResult);

}


