const dictionaryList = 'data/dictionaries/dictionaries.json'

async function fetchDictionaryList(dictionaryJson = dictionaryList){
    const fetching = await fetch(dictionaryJson)
    return await fetching.json()
}
/* 
// Deprecated
function populateRadioButtons(dictionaryJson){

    const dictionaryDivElement = document.getElementById('game.dictionary')
    dictionaryDivElement.innerHTML = '<label id="dictionaryText" for="dictionary">Dictionary in use: </label><br>'
    
    dictionaryDivElement.innerHTML += Array.from(dictionaryJson).map(dict => 
        `<input id="${dict.path}" type="radio" name="dictionary" value="${dict.name}">
        <label for="${dict.path}">${dict.name} (${dict.level})</label><br>
        `
    ).join('')

    let radioButtons = document.querySelectorAll("input[name=dictionary]")
    radioButtons.forEach(rb => rb.addEventListener('change', async () => {
        const currentDictionaryElement = document.getElementById('dictionaryText')
        currentDictionaryElement.innerHTML = `<label id="dictionaryText" for="dictionary">Dictionary in use: ${rb['value']}</label><br>`    
        const dictonary = await fetchDictionary(rb['id'])
        const nouns = await getNouns(dictonary)
        await loadNounGenderGame(nouns)
    }))
} */

function populateDropdown(dictionaryJson) {
    const dictionaryDivElement = document.getElementById('game.dictionary');
    dictionaryDivElement.innerHTML = '<label id="dictionaryText" for="dictionarySelect">Dictionary in use: </label><br>';
    
    // Create the dropdown (select element)
    const selectElement = document.createElement('select');
    selectElement.id = 'dictionarySelect';
    selectElement.name = 'dictionary';
    
    // Populate the dropdown with options
    selectElement.innerHTML = Array.from(dictionaryJson).map(dict => 
        `<option value="${dict.path}">${dict.name} (${dict.level})</option>`
    ).join('');
    
    dictionaryDivElement.appendChild(selectElement);
    
    // Add an event listener to the dropdown
    selectElement.addEventListener('change', async () => {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const currentDictionaryElement = document.getElementById('dictionaryText');
        currentDictionaryElement.innerHTML = `Dictionary in use: ${selectedOption.text}`;
        
        const dictionary = await fetchDictionary(selectedOption.value);
        const nouns = await getNouns(dictionary);
        await loadNounGenderGame(nouns);
    });
}



function selectRandomDictionary(dictionary){
    const startingDictionary = randomFilter(dictionary, 1)
    console.log(startingDictionary)
    const currentDictionaryElement = document.getElementById('dictionaryText')
    currentDictionaryElement.innerHTML = `<label id="dictionaryText" for="dictionary">Dictionary in use: ${startingDictionary[0]['name']}</label><br>`
    /* document.getElementById(startingDictionary[0]['path']).checked = true */
    return startingDictionary[0]['path']
}


