import"./modulepreload-polyfill-B5Qt9EMX.js";const v="https://discord.com/api/webhooks/1440185420205002822/KftqU5u05haDfE_GDIKdZ1Id_UnlRt15NeSgm_yZOiMP61-0SkfLmYgUOz5VT_qJUTk8";document.querySelector("#orange").innerHTML=`
  <div class="page">
    <div class="answer-box">
      <form class="orange-form">
        <section id="name" class="step active">
          <div class="textarea">
            <h3><span class="req">*</span> What's your Discord username?</h3>
            <p class="desc">Let us know how to contact you on Discord.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="discord"
            placeholder="drsteeve"
            minlength="2"
            maxlength="32"
            required
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="javaName" class="step">
          <div class="textarea">
            <h3><span class="req">*</span> What's your Java Minecraft username?</h3>
            <p class="desc">Your in-game name on Java edition (not Bedrock).</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="javaName"
            placeholder="DrSteeve"
            minlength="4"
            required
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="timespent" class="step">
          <div class="textarea">
            <h3>How long have you been playing Minecraft?</h3>
            <p class="desc">Optional. This just helps us understand your experience with the game.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="timeSpent"
            placeholder="3 years"
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="age" class="step">
          <div class="textarea">
            <h3><span class="req">*</span> How old are you?</h3>
            <p class="desc">You must be between 11 and 16 so everyone is around a similar age.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="age"
            placeholder="14"
            required
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="timeZone" class="step">
          <div class="textarea">
            <h3><span class="req">*</span> What's your timezone?</h3>
            <p class="desc">This helps us know when you’re usually online.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="timeZone"
            placeholder="UTC+8"
            pattern="[A-Za-z]{3}[+-][0-9]{1,2}"
            required
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="knwoyou" class="step">
          <div class="textarea">
            <h3><span class="req">*</span> Getting to know you</h3>
            <p class="desc">Share a short video link or write a few sentences about yourself.</p>
          </div>

          <textarea
            class="answer-input answer-textarea"
            name="about"
            placeholder="Paste a link or introduce yourself here..."
            required
          ></textarea>

          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="submit-btn sumbit" type="submit">Submit</button>
          </div>
        </section>
      </form>
    </div>
  </div>
`;const i=document.querySelector(".orange-form"),l=Array.from(i.querySelectorAll(".step"));function m(e){l.forEach((t,s)=>{t.classList.toggle("active",s===e)})}function o(e,t,s){const a=e.querySelector(".answer-hint");a&&(a.textContent=t,a.classList.add("answer-hint-error")),s&&s.classList.add("answer-input-error")}function p(e){const t=e.querySelector(".answer-hint");t&&(t.textContent="",t.classList.remove("answer-hint-error"))}l.forEach((e,t)=>{const s=e.querySelector(".next-btn"),a=e.querySelector(".back-btn");s&&s.addEventListener("click",()=>{p(e);const u=e.querySelectorAll("[required]");for(const n of u)if(!n.value.trim()){o(e,"This field is required.",n),n.focus();return}const d=e.id;if(d==="name"){const n=e.querySelector('input[name="discord"]'),r=n.value.trim(),c=/^[A-Za-z0-9._]+$/;if(r.length<2||r.length>32){o(e,"Discord username must be between 2 and 32 characters.",n),n.focus();return}if(!c.test(r)){o(e,"Discord username can only contain letters, numbers, underscores, and periods.",n),n.focus();return}}if(d==="javaName"){const n=e.querySelector('input[name="javaName"]'),r=n.value.trim(),c=/^[A-Za-z0-9_]+$/;if(r.length<4||!c.test(r)){const b=r.length<4?"Minecraft username must be at least 4 characters.":"Minecraft username can only contain letters, numbers, and underscores.";o(e,b,n),n.focus();return}}if(d==="age"){const n=e.querySelector('input[name="age"]'),r=n.value.trim(),c=Number(r);if(!Number.isFinite(c)){o(e,"Age must be a number.",n),n.focus();return}if(c<11||c>16){o(e,"Age must be between 11 and 16.",n),n.focus();return}}if(d==="timeZone"){const n=e.querySelector('input[name="timeZone"]'),r=n.value.trim();if(!/^[A-Za-z]{3}[+-][0-9]{1,2}$/.test(r)){o(e,"Timezone must be 3 letters, then + or -, then a 1–2 digit number (e.g. UTC+8).",n),n.focus();return}}t<l.length-1&&m(t+1)}),a&&a.addEventListener("click",()=>{t>0&&m(t-1)})});i.addEventListener("submit",async e=>{if(!i.checkValidity()){e.preventDefault();const s=i.querySelector(":invalid");if(s){const a=s.closest(".step"),u=l.indexOf(a);u!==-1&&m(u),o(a,"Please fix this field.",s),s.focus()}return}e.preventDefault();const t={discord:i.discord.value.trim(),javaName:i.javaName.value.trim(),timeSpent:i.timeSpent.value.trim(),age:i.age.value.trim(),timeZone:i.timeZone.value.trim(),about:i.about.value.trim()};try{const s=["**New application**",`Discord: ${t.discord}`,`MC Java: ${t.javaName}`,`Age: ${t.age}`,`Timezone: ${t.timeZone}`,`Playing for: ${t.timeSpent||"N/A"}`,`About: ${t.about||"N/A"}`].join(`
`);await fetch(v,{method:"POST",mode:"no-cors",body:JSON.stringify({content:s})}),i.reset(),m(0)}catch(s){console.error(s);const a=l[l.length-1];o(a,"Something went wrong sending your application. Try again in a minute.")}});const h=i.querySelectorAll(".answer-input");h.forEach(e=>{e.addEventListener("input",()=>{e.classList.remove("answer-input-error");const t=e.closest(".step");t&&p(t)}),e.addEventListener("keydown",t=>{if(t.key!=="Enter"||e.tagName==="TEXTAREA")return;t.preventDefault();const s=e.closest(".step");if(!s)return;const a=s.querySelector(".next-btn"),u=s.querySelector(".submit-btn");a?a.click():u&&u.click()})});
