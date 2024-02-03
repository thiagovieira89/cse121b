/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Thiago Vieira",
    photo : "images/tv foto.jpg",
    favoriteFoods : [
        "Barbecue",
        "Milk Shake",
        "Cassava Cake",
        "Sushi",
        "Peanut butter with jelly",
    ],
    hobbies : [
        "Soccer",
        "Travel",
        "Reading a book",
        "Video Games",
    ],
    placesLived : [
        
    ],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : "Jaboatão dos Guararapes, PE",
        length : "20 anos",
    }
);
myProfile.placesLived.push(
    {
        place : "Recife, PE",
        length : "8 anos",
    }
);
myProfile.placesLived.push(
    {
        place : "Paulista, PE",
        length : "5 anos",
    }
);
myProfile.placesLived.push(
    {
        place : "São Paulo, SP",
        length : "2 anos",
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */

let imgPhoto = document.querySelector("#photo");

imgPhoto.src = myProfile.photo;
imgPhoto.alt = myProfile.name;
/* Favorite Foods List*/
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myProfile.favoriteFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myProfile.favoriteFoods[1];

// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myProfile.favoriteFoods[2];

// let favoriteFood4 = document.createElement("li");
// favoriteFood4.textContent = myProfile.favoriteFoods[3];

// let favoriteFood5 = document.createElement("li");
// favoriteFood5.textContent = myProfile.favoriteFoods[4];

// document.querySelector("#favorite-foods").textContent = [favoriteFood1,favoriteFood2,
// favoriteFood3,favoriteFood4,favoriteFood5];

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

let containerPlacesLived = document.querySelector("#places-lived");

myProfile.placesLived.forEach(places =>{

    let placeDt = document.createElement("dt");
    placeDt.textContent = places.place;

    let lenghtDd = document.createElement("dd");
    lenghtDd.textContent = places.length;

    containerPlacesLived.appendChild(placeDt);
    containerPlacesLived.appendChild(lenghtDd);
});


