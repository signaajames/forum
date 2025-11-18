import './style.css'

document.querySelector('#app').innerHTML = /*html*/`
  <div class="page">
    <div class="answer-box">
      <input
        class="answer-input"
        type="text"
        placeholder=""
      />
      <div class="answer-hint">
        Press <span class="key">↵ Enter</span> to submit the <span class="key">code</span>
      </div>
    </div>
  </div>
`

let codesplaceholder = [
  "minecraft",
  "signaajames",
  "super_duper_signa",
  "i misspelt some things",
  "Enter codes here!",
  "Code put here"
]

const codes = [
  "orange"
]

const answerinput = document.getElementsByClassName('answer-input')[0]
const answerHint = document.getElementsByClassName('answer-hint')[0]
const defaultHintHtml = answerHint.innerHTML

function handleSubmit(event) {
  if (event.key !== 'Enter') return

  const value = answerinput.value.trim().toLowerCase()

  if (!value) {
    answerinput.classList.remove('answer-input-error')
    answerHint.classList.remove('answer-hint-error')
    answerHint.innerHTML = defaultHintHtml
    return
  }


  let isValidCode = false

  for (let i = 0; i < codes.length; i++) {
    if (value === codes[i]) {
      isValidCode = true
      break
    }
  }

  if (isValidCode) {
    answerinput.classList.remove('answer-input-error')
    answerHint.classList.remove('answer-hint-error')
    answerHint.innerHTML = defaultHintHtml
    window.location.href = value
  } else {
    answerHint.textContent = 'Wrong code. Ask for the correct code and try again.'
    answerHint.classList.add('answer-hint-error')

    answerinput.classList.remove('answer-input-error')
    void answerinput.offsetWidth
    answerinput.classList.add('answer-input-error')
  }
}

answerinput.addEventListener('keydown', handleSubmit)
answerinput.addEventListener('input', () => {
  answerinput.classList.remove('answer-input-error')
  answerHint.classList.remove('answer-hint-error')
  answerHint.innerHTML = defaultHintHtml
})

async function changePlaceholderText() {
  try {
    for (let i = 0; i < codesplaceholder.length; i++) {
      let randIndex = Math.floor(Math.random() * codesplaceholder.length)
      answerinput.placeholder = codesplaceholder[randIndex]
      console.log(i)
    }
  } catch(e) {
    console.log(e);
  }
}

changePlaceholderText()
