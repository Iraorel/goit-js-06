const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBth = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');


let counterValue = 0;
const increaseByOne = () => {
  counterValue -= 1;
  return (valueRef.textContent = counterValue);
};
const reduceByOne = () => {
  counterValue += 1;
  return (valueRef.textContent = counterValue);
};
minusBtn.addEventListener("click", increaseByOne);
plusBtn.addEventListener("click", reduceByOne);