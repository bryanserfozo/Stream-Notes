/*
==============================
DOM Review Activity (With Descriptions)
==============================
*/

// === DOM Selection ===

// DOM selection is the process of identifying and capturing HTML elements from the document object model. This is essential for interacting with and manipulating elements on a 
// web page. In JavaScript, the `document.querySelector` and `document.getElementById` methods are commonly used for selecting individual elements based on CSS selectors or 
// element IDs.

// 1. Select the <h1> element and change its text content to "DOM Magic!"
const h1Element = document.querySelector('h1');
h1Element.textContent = 'DOM Magic!';

// 2. Select the button with the id "changeColorBtn" and add a click event listener.
// When the button is clicked, change the background color of the container to a random color.
const container = document.querySelector('.container');
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function () {
  const randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  container.style.backgroundColor = randomColor;
});

// === DOM Manipulation ===

// DOM manipulation involves changing the content, structure, or style of HTML elements using JavaScript. Common manipulations include creating new elements, appending or 
// removing elements, and modifying their attributes or text content.

// 3. Select the <ul> element with the id "listContainer" and append a new <li> with the text "New Item".
const listContainer = document.getElementById('listContainer');
const newItem = document.createElement('li');
newItem.textContent = 'New Item';
listContainer.appendChild(newItem);

// 4. Change the text content of the first <li> in the list to "Updated Item".
const firstLi = listContainer.querySelector('li');
firstLi.textContent = 'Updated Item';

// === Events and Listeners ===

// Events and listeners allow us to respond to user interactions with the web page. Adding event listeners enables the execution of specific functions when events like 
// clicks, mouseovers, or keypresses occur.

// 5. Add a mouseover event listener to the <h1> element.
// When the mouse is over the <h1>, log "Mouse over!" to the console.
h1Element.addEventListener('mouseover', function () {
  console.log('Mouse over!');
});

// 6. Add a double click event listener to the second <li> in the list.
// When double-clicked, log "Double Clicked!" to the console.
const secondLi = listContainer.querySelectorAll('li')[1];
secondLi.addEventListener('dblclick', function () {
  console.log('Double Clicked!');
});

// === For-of / For-in Loops ===

// For-of and for-in loops are used for iterating over collections of data. For-of is specifically designed for iterating over iterable objects like arrays, while for-in is used for iterating over object properties.

// 7. Use a for-of loop to log each item in the list to the console.
for (const item of listContainer.children) {
  console.log(item.textContent);
}

// 8. Use a for-in loop to log each property of the button element to the console.
for (const property in changeColorBtn) {
  console.log(property);
}

