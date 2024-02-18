//Here is a list that save the API datas
let statesList = {};


//reset the user choice and showing the another choice.
const reset = function(){
    
};

//these functions get the value the user chooses and call the API with the selected state
//by the user. Get the API information, create a list, and get the data from states.
function displayStates() {
    const stateSelected = document.getElementById('state').value;
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
            // the state selected go in the list, get the datas on the position(cases,death,suspects)
            statesList[stateSelected]={
                cases: data.cases,
                deaths: data.deaths,
                suspects: data.suspects
        };
        //function calling    
        updatePanel(stateSelected);
            console.log('Cases Numbers:', cases);
            console.log('Death Numbers:', deaths);
            console.log('Suspects Numbers:', suspects);    
        })
        .catch(error => {
            // handler error
            console.log('ERROR CALLING', error);
        });
}
//this function is creating variables that cause the API data to be displayed on the screen.
function updatePanel(state) {
    let cases = statesList[state].cases;
    let deaths = statesList[state].deaths;
    let suspects = statesList[state].suspects;

    document.getElementById('cases').textContent = ` Cases Numbers: ${cases}`;
    document.getElementById('deaths').textContent = ` Death Numbers: ${deaths}`;
    document.getElementById('suspects').textContent = ` Suspects Numbers: ${suspects}`;
}

document.getElementById('state').addEventListener('change',function (){
    reset()
    displayStates();
});

displayStates();


