const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');
console.log(inputLength);

input.addEventListener("blur", onInputBlur);

function onInputBlur(e){
if(e.currentTarget.value.length === inputLength){
 
    input.classList.add("valid");
  
} 
else {
input.classList.replace("invalid", "valid")
  
}
};
