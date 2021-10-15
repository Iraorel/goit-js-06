const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);
ingredients.forEach( liIngrediens =>{const element = document.createElement("li");
console.log(element);
element.textContent = liIngrediens;
element.classList.add('item');
})
 
