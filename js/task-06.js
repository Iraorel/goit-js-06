const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');
console.log(inputLength);
input.addEventListener('blur', onInputBlur);

function onInputBlur(event){
if(event.currentTarget.value.length === inputhLength){
    return input.classList.add('valid');
};
input.classList.replace('invalid');
};
