const form = document.querySelector('login-form');
const message = 'Invalid Email or Password! Try again plese.';

 const dataFormResult ={};
    //const formData = new FormData(e.currentTarget);
    //console.log(formData);

    formData.forEach((value, name) => {
        console.log('onForSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });

console.log(dataFormResult);



const onFormSubmit = function (change) {
change.preventDefault();
const { elements: {email, password}} = change.currentTarget;

if (email.value === "" || password.value ===""){
    return alert(message);
   };
console.log( `${emaile.name}: ${email.value}, ${password.name}: ${password.value}`);
 form.reset();
}

form.addEventListener('submit', onFormSubmit);