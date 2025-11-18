import './style.css'

document.querySelector('#orange').innerHTML = /*html*/`
  <div class="page">
    <div class="answer-box">
      <forum>
        <section id='name'>
          <div class='textarea'>
            <h3><span class='req'>*</span> What's your Discord username?</h3>
            <p class='desc'>Type your Discord username below</p>
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
            <p class='desc'>The server is not bedrock</p>
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
            <p class='desc'>Optional, it mostly shows how well you know the game</p>
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
            <p class='desc'>Minimum is 11 and max is 16.<br><br><br><br><br><br><br>It's nice to have people around the same age</p>
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
            <p class='desc'>Do i really need to explain?</p>
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
            <p class='desc'>Enter a link to a video about yourself.<br><br><br><br><br><br><br>Or tell us about yourself</p>
          </div>

          <textarea
            class="answer-input answer-textarea"
            placeholder="youtube.com/watch?v=....."
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