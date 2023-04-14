  form.appendChild(questionsContainer)
  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.innerText = 'Submit'
  form.appendChild(submitButton)

  document.body.appendChild(form)
  form.addEventListener('submit', event => {
    event.preventDefault()
    // handle form submission
  })

  const scorewrapper = document.createElement('div')
  scorewrapper.style.position = 'sticky'
  scorewrapper.style.top = 0
  scorewrapper.style.right = 0
  scorewrapper.style.backgroundColor = '#f2f2f2'
  scorewrapper.style.padding = '10px'
  scorewrapper.style.width = '200px'
  scorewrapper.innerText = 'Score: 0'
  
  document.body.appendChild(scorewrapper)
  
  form.addEventListener('submit', event => {
    event.preventDefault()
    let score = 0
    const formElements = event.target.elements
    for (let i = 0; i < formElements.length - 1; i++) {
      const input = formElements[i]
      const questionIndex = parseInt(input.name.slice(1))
      const answer = questions[questionIndex].answer
      if (input.checked && input.value === answer) {
        score++
      }
    }
    const scoreText = `Score: ${score}/${questions.length}`
    scorewrapper.innerText = scoreText
  })
}
