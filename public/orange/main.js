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