/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templesList = []

/* async displayTemples Function */
const displayTemples = (templesList) => {
    templesList.forEach(temple => {
        let article = document.createElement('article');
        
        let templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;

        let imageUrl = document.createElement('img');
        imageUrl.src = temple.imageUrl;
        imageUrl.alt = temple.location;

        article.appendChild(templeName);
        article.appendChild(imageUrl);

        templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
   const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
   
   if (response.ok){

    const data = await response.json();
    templesList = data;
    displayTemples(templesList);
    console.log(templesList)

   }
};

/* reset Function */
const reset = function(){
    templesElement.innerHTML = '';
};


/* filterTemples Function */
function filterTemples(temples){
    reset()
    const filter = document.getElementById('filtered').value.toLowerCase();

    switch(filter){
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
            break;

        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
            break;

        case 'older' :
            displayTemples(temples.filter(temple => new Date (temple.dedicated) < new Date (1950, 0, 1)));
            break;

        case 'all' : 
            displayTemples (temples);
            break;

        default:
            console.error('Invalid filter:', filter);
            break; 
    }
    
};

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templesList)});

