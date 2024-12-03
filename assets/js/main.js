(async () => {
    const dictionaryList = await fetchDictionaryList()
    
    populateRadioButtons(dictionaryList)

    const dictionaryPath = selectRandomDictionary(dictionaryList)

    const dictonary = await fetchDictionary(dictionaryPath)
    const nouns = await getNouns(dictonary)
    await loadNounGenderGame(nouns)
    /* console.log(nouns) */
})()
