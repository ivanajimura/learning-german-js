function loadNounGenderGame(dictionary){
    let quantity = 1
    
    const nounElement = document.getElementById('nounText')
    const textInputElement = document.getElementById('genderInput')
    const feedbackElement = document.getElementById('genderFeedbackText')
    const checkButtonElement = document.getElementById('genderSubmit')
    const anotherButtonElement = document.getElementById('restartGenderButton')

    loadNewWord()
    
    checkButtonElement.addEventListener('click', checkNounGender)
    textInputElement.addEventListener('keypress', function(event) {
        if (event.key === "Enter"){
            checkButtonElement.click()
        }
    })

    anotherButtonElement.addEventListener('click', loadNewWord)
    textInputElement.addEventListener('keydown', function(event) {
        if (event.key === "Escape"){
            anotherButtonElement.click()
        }
    })

    function checkNounGender(){
        if (textInputElement.value === randomJSON[0]['gender']){
            feedbackElement.style.color = '#00EEEE'
            feedbackElement.innerText = "Correct!"
        } else {
            feedbackElement.style.color = '#EE0000'
            feedbackElement.innerText = randomJSON[0]['gender']
            textInputElement.value = ''
        }
    }

    function loadNewWord(){
        feedbackElement.innerText = ''
        randomJSON = randomFilter(dictionary, quantity)
        try{
            nounElement.innerText = randomJSON[0]['word']
        }
            
        catch(err){
            alert('This dictionary does not contain nouns yet. Please pick another one.')
        }
            
        textInputElement.value = ''
        feedbackElement.innerText = ''
    }
}

