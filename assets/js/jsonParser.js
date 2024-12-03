function getNouns(jsonFile){
    return jsonFile
        .map(item => (item.partOfSpeech === 'noun' ? item : null))
        .filter(item => item !== null) // remove null entries
}

function getAdjectives(jsonFile){
    return jsonFile
        .map(item => (item.partOfSpeech === 'adjective' ? item : null))
        .filter(item => item !== null) // remove null entries
}


function getVerbs(jsonFile){
    return jsonFile
        .map(item => (item.partOfSpeech === 'verb' ? item : null))
        .filter(item => item !== null) // remove null entries
}

function randomFilter(jsonFile, quantity = 1){
    const keys = Object.keys(jsonFile)   
    randomJson = []
    while (randomJson.length < quantity){
        let randomNumber = Math.floor(Math.random() * keys.length)
        if (!(jsonFile[randomNumber] in randomJson)){
            randomJson.push(jsonFile[randomNumber])
        }
    }
    
    return randomJson
}