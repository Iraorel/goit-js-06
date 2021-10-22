const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);

function onInputBlur(e){
if(e.currentTarget.value.length === inputhLength){
    return input.classList.add('valid');
};
input.classList.replace('invalid');
};
