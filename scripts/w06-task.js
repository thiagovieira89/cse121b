let statesList = {};
const panelStates = document.getElementById('panel');

//reset the user choice and showing the another choice.
const reset = function(){
    
};

//this functions get the value that the user choose, and call the API with the state selected
//by the user.
function displayStates() {
    const stateSelected = document.getElementById('state').value;
    const apiUrl = `https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/${stateSelected.toUppercase()}`;
    
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
            statesList[stateSelected]={
                cases: data.cases,
                deaths: data.deaths,
                suspects: data.suspects
        };
            
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


