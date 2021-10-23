const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');
console.log(inputLength);
input.addEventListener("blur", onInputBlur);

function onInputBlur(e){
if(e.currentTarget.value.length !== inputLength){
    input.classList.remove("invalid");
    input.classList.add("valid");
} else { 
input.classList.add("invalid");
input.classList.remove("valid");
}
};
