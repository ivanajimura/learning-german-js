(async () => {
    const dictionaryList = await fetchDictionaryList()
    
    await populateRadioButtons(dictionaryList)

    const dictionaryPath = await selectRandomDictionary(dictionaryList)
    const dictonary = await fetchDictionary(dictionaryPath)

    const nouns = await getNouns(dictonary)
    await loadNounGenderGame(nouns)

    const dictWithoutPhrases = await removePhrases(dictonary)
    await loadTranslationDeEn(dictWithoutPhrases)
})()
