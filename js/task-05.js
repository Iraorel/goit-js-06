const nameInput =document.querySelector('#name-input'); 
const nameOutput = document.querySelector('#name-output');

function onClikInput () {
    
    if ( nameInput.value === ""){
      return  nameOutput.textContent = "Anonymous";
    } 
 return nameOutput.textContent = nameInput.value;
}

nameInput.addEventListener('input', onClikInput)

