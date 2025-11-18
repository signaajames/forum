import './style.css'

document.querySelector('#orange').innerHTML = /*html*/`
  <div class="page">
    <div class="answer-box">
      <section id='name'>
        <div class='textarea'>
          <h3><span class='req'>*</span> What's your Discord username?</h3>
          <p class='desc'>Type your Discord username below</p>
        </div>
        <input
          class="answer-input"
          type="text"
          placeholder="Abc"
        />
      </section>
    </div>
  </div>
`