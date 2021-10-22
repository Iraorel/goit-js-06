const listId= document.querySelector('#categories');
const allCategories = document.querySelectorAll('.item');

function itemElCount() {
    console.log('Number of categories: ${allCategories.length}');
};
itemElCount(allCategories);


const classItem = document.querySelectorAll('h2');
console.log('Category:', classItem);
classItem.forEach(classItem => {console.log(classItem.textContent);});
const  elementsEl = document.querySelectorAll('.item li');
console.log('Elements', elementsEl);
elementsEl.forEach(element => {console.log(elementsEl);});


//listCategories.forEach(list =>{const listElements = list.children;




