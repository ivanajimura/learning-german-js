function loadTranslationDeEn(dictionary){
    let quantity = 1
    
    const wordElementDeEn = document.getElementById('wordText')
    const textInputElementDeEn = document.getElementById('englishInput')
    const feedbackElementDeEn = document.getElementById('translationDeEnFeedbackText')
    const checkButtonElementDeEn = document.getElementById('englishSubmit')
    const anotherButtonElementDeEn = document.getElementById('restartTranslationDeEnButton')

    loadNewWordDeEn()
    checkButtonElementDeEn.addEventListener('click', checkTranslationDeEn)
    textInputElementDeEn.addEventListener('keypress', function(event) {
        if (event.key === "Enter"){
            checkButtonElementDeEn.click()
        }
    })

    anotherButtonElementDeEn.addEventListener('click', loadNewWordDeEn)
    textInputElementDeEn.addEventListener('keydown', function(event) {
        if (event.key === "Escape"){
            anotherButtonElementDeEn.click()
        }
    })

    function checkTranslationDeEn(){
        console.log(textInputElementDeEn.value.toLowerCase())
        if (textInputElementDeEn.value.toLowerCase() === randomJSONDeEn[0]['translation'].toLowerCase()){
            feedbackElementDeEn.style.color = '#00EEEE'
            feedbackElementDeEn.innerText = "Correct!"
        } else {
            feedbackElementDeEn.style.color = '#EE0000'
            feedbackElementDeEn.innerText = randomJSONDeEn[0]['translation']
            textInputElementDeEn.value = ''
        }
    }


    function loadNewWordDeEn(){
        randomJSONDeEn = randomFilter(dictionary, quantity)
        try{
            wordElementDeEn.innerText = randomJSONDeEn[0]['word']
        }
            
        catch(err){
            alert('This dictionary does not contain nouns yet. Please pick another one.')
        }
            
        textInputElementDeEn.value = ''
        feedbackElementDeEn.innerText = ''
    }
}