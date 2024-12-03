function loadNounGenderGame(dictionary){
    let quantity = 1
    
    const nounElement = document.getElementById('nounText')
    const textInputElement = document.getElementById('genderInput')
    const feedbackElement = document.getElementById('feedbackText')
    const checkButtonElement = document.getElementById('genderSubmit')
    const anotherButtonElement = document.getElementById('restartGenderButton')

    loadNewWord()
    
    checkButtonElement.addEventListener('click', checkNounGender)
    textInputElement.addEventListener('keypress', function(event) {
        if (event.key === "Enter"){
            checkButtonElement.click()
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

    anotherButtonElement.addEventListener('click', loadNewWord)

    function loadNewWord(){
        randomJSON = randomFilter(dictionary, quantity)
        nounElement.innerText = randomJSON[0]['word']
        textInputElement.value = ''
        feedbackElement.innerText = ''
    }
}

