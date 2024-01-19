/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Thiago Cavalcanti Vieira';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/tv foto.jpg';


/* Step 3 - Element Variables */

const nameElement = document.querySelector('#name');
const foodElement = document.querySelector('#food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName} the BYU student`);


/* Step 5 - Array */
let food = ["strawberry", "pizza", "applepie", "barbecue"];
// document.getElementById('food').innerHTML = food;
foodElement.innerHTML = food;
let newfood = 'Chocolate';
food.push(newfood);
foodElement.innerHTML += `<br> ${food}`;








