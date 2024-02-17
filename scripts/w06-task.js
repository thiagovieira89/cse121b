statesList = [];
const userChoice = document.querySelector('#state');


document.getElementById('state').addEventListener('change',displayStates);

//reset the user choice and showing the another choice.
const reset = function(){
};

//this functions get the value that the user choose, and call the API with the state selected
//by the user.
function displayStates() {

    reset();
    const stateSelected = document.getElementById('state').value;
    console.log (stateSelected);

    if (stateSelected !== displayStates.previousState){
        displayStates.previousState = stateSelected;
    }

    const apiUrl = `https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/${stateSelected.toUpperCase()}`;
    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                console.log(response)
                return response.json();
            } else {
                throw new Error('API request failed');
            }
        })
        .then(data => {
            // use the datas as you need to show on the screem!
            let cases = data.cases;
            let death = data.deaths;
            let suspected = data.suspects;

            console.log('Cases Numbers:', cases);
            console.log('Death Numbers:', death);
            console.log('Suspects Numbers:', suspected);    
        })
        .catch(error => {
            // handler error
            console.log('ERRO NA CHAMADA', error);
        });

}

const displayStates = (statesList) =>{
    statesList.forEach(state => {
        
        
    });
}

const getStates = async () => {
    const response = await fetch('https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf');

    if (response.ok) {

        const data = await response.json();
        statesList = data;
        displayStates(statesList);
        console.log(statesList)
    }
};


getStates();


