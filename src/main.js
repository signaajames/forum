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
  ""
]

const answerinput = document.getElementsByClassName('answer-input')[0]

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