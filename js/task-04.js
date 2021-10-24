const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBth = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');


let counterValue = 0;
const increaseByOne = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
 
};
const reduceByOne = () => {
  
  valueEl.textContent = (counterValue += 1);
};

minusBtn.addEventListener("click", increaseByOne);
plusBth.addEventListener("click", reduceByOne);

