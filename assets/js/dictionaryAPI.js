const SAMPLEDICTIONARYURL = 'data/dictionaries/sample.json'

async function fetchDictionary(dictionaryURL = SAMPLEDICTIONARYURL){
    const fetching = await fetch(dictionaryURL)
    return await fetching.json()
}


