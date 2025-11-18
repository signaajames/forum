import './style.css'

document.querySelector('#orange').innerHTML = /*html*/`
  <div class="page">
    <div class="answer-box">
      <forum>
        <section id='name'>
          <div class='textarea'>
            <h3><span class='req'>*</span> What's your Discord username?</h3>
            <p class='desc'>Let us know how to contact you on Discord.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            placeholder="drsteeve"
          />
        </section>

        <section id='javaName'>
          <div class='textarea'>
            <h3><span class='req'>*</span> What's your Java Minecraft username?</h3>
            <p class='desc'>Your in-game name on Java edition (not Bedrock).</p>
          </div>
          <input
            class="answer-input"
            type="text"
            placeholder="DrSteeve"
            required
          />
        </section>

        <section id='timespent'>
          <div class='textarea'>
            <h3>How long have you been playing minecraft?</h3>
            <p class='desc'>Optional. This just helps us understand your experience with the game.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            placeholder="3 years"
          />
        </section>

        <section id='age'>
          <div class='textarea'>
            <h3><span class='req'>*</span> How old are you?</h3>
            <p class='desc'>You must be between 11 and 16 so everyone is around a similar age.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            placeholder="14"
            required
          />
        </section>

        <section id='timeZone'>
          <div class='textarea'>
            <h3><span class='req'>*</span> What's your timezone?</h3>
            <p class='desc'>This helps us know when you’re usually online.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            placeholder="UTC+8/GMT+8"
            required
          />
        </section>

        <section id='knwoyou'>
          <div class='textarea'>
            <h3><span class='req'>*</span> Getting to know you</h3>
            <p class='desc'>Share a short video link or write a few sentences about yourself.</p>
          </div>

          <textarea
            class="answer-input answer-textarea"
            placeholder="Paste a link or introduce yourself here..."
            required
            ></textarea>
        </section>
        
        <input
          class="sumbit"
          type="submit"
          value='Submit'
        />
      </forum>
    </div>
  </div>
`
