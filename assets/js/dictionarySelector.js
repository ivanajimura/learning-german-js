const dictionaryList = 'data/dictionaries/dictionaries.json'

async function fetchDictionaryList(dictionaryJson = dictionaryList){
    const fetching = await fetch(dictionaryJson)
    return await fetching.json()
}

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
}

function selectRandomDictionary(dictionary){
    const startingDictionary = randomFilter(dictionary, 1)
    console.log(startingDictionary)
    const currentDictionaryElement = document.getElementById('dictionaryText')
    currentDictionaryElement.innerHTML = `<label id="dictionaryText" for="dictionary">Dictionary in use: ${startingDictionary[0]['name']}</label><br>`
    document.getElementById(startingDictionary[0]['path']).checked = true
    return startingDictionary[0]['path']
}


