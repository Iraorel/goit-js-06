const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener("input", changeText);

function changeText(e){
    span.textContent = e.currentTarget.value + "px";
    console.log(span)
}