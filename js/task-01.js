const listId= document.querySelector('#categories');
const allCategories = document.querySelectorAll('.item');

function allCategoriesCount() {
    console.log(`Number of categories: ${allCategories.length}` );
};
allCategoriesCount(allCategories);


const classItem = document.querySelectorAll('h2');
console.log('Category:', classItem);

classItem.forEach(classItem => {
    console.log(classItem.textContent);
});
const  elementsEl = document.querySelectorAll('.item li');
console.log('Elements', elementsEl);

elementsEl.forEach(element => 
    {   console.log(elementsEl);});

//allCategories.forEach(element=> {
  //  firstElementChild.textContent;
   // lastElementChild.children.length;
//} )

//listCategories.forEach(list =>{const listElements = list.children;




