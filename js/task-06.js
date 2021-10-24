const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('[data-length="6"]');


function onInputBlur(e){
if(e.currentTarget.value.length === 6){
 
    e.currentTarget.classList.add("valid");
    e.currentTarget.classList.replace("invalid","valid"); 
    
} else{
    e.currentTarget.classList.add("invalid");

e.currentTarget.classList.replace("valid", "invalid");
}
};
input.addEventListener('blur', onInputBlur);