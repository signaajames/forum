import"./modulepreload-polyfill-B5Qt9EMX.js";const g="https://discord.com/api/webhooks/1440185420205002822/KftqU5u05haDfE_GDIKdZ1Id_UnlRt15NeSgm_yZOiMP61-0SkfLmYgUOz5VT_qJUTk8";document.querySelector("#orange").innerHTML=`
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

    <div class="submit-overlay" id="submit-overlay">
      <div class="submit-overlay-inner">
        <span class="submit-overlay-text">Submitting</span>
      </div>
    </div>
  </div>
`;const r=document.querySelector(".orange-form"),d=document.getElementById("submit-overlay"),b=d?.querySelector(".submit-overlay-text"),l=Array.from(r.querySelectorAll(".step"));let p=!1,v=null;function f(e){l.forEach((t,s)=>{t.classList.toggle("active",s===e)})}function w(){if(!d||(d.classList.add("active"),!b))return;let e=0;b.textContent="Submitting",v=setInterval(()=>{e=(e+1)%4;const t=".".repeat(e);b.textContent=`Submitting${t}`},400)}function x(){d&&(d.classList.remove("active"),v&&(clearInterval(v),v=null))}function o(e,t,s){const a=e.querySelector(".answer-hint");a&&(a.textContent=t,a.classList.add("answer-hint-error")),s&&s.classList.add("answer-input-error")}function h(e){const t=e.querySelector(".answer-hint");t&&(t.textContent="",t.classList.remove("answer-hint-error"))}l.forEach((e,t)=>{const s=e.querySelector(".next-btn"),a=e.querySelector(".back-btn");s&&s.addEventListener("click",()=>{h(e);const u=e.querySelectorAll("[required]");for(const n of u)if(!n.value.trim()){o(e,"This field is required.",n),n.focus();return}const m=e.id;if(m==="name"){const n=e.querySelector('input[name="discord"]'),i=n.value.trim(),c=/^[A-Za-z0-9._]+$/;if(i.length<2||i.length>32){o(e,"Discord username must be between 2 and 32 characters.",n),n.focus();return}if(!c.test(i)){o(e,"Discord username can only contain letters, numbers, underscores, and periods.",n),n.focus();return}}if(m==="javaName"){const n=e.querySelector('input[name="javaName"]'),i=n.value.trim(),c=/^[A-Za-z0-9_]+$/;if(i.length<4||!c.test(i)){const y=i.length<4?"Minecraft username must be at least 4 characters.":"Minecraft username can only contain letters, numbers, and underscores.";o(e,y,n),n.focus();return}}if(m==="age"){const n=e.querySelector('input[name="age"]'),i=n.value.trim(),c=Number(i);if(!Number.isFinite(c)){o(e,"Age must be a number.",n),n.focus();return}if(c<11||c>16){o(e,"Age must be between 11 and 16.",n),n.focus();return}}if(m==="timeZone"){const n=e.querySelector('input[name="timeZone"]'),i=n.value.trim();if(!/^[A-Za-z]{3}[+-][0-9]{1,2}$/.test(i)){o(e,"Timezone must be 3 letters, then + or -, then a 1–2 digit number (e.g. UTC+8).",n),n.focus();return}}t<l.length-1&&f(t+1)}),a&&a.addEventListener("click",()=>{t>0&&f(t-1)})});r.addEventListener("submit",async e=>{if(p){e.preventDefault();return}if(!r.checkValidity()){e.preventDefault();const s=r.querySelector(":invalid");if(s){const a=s.closest(".step"),u=l.indexOf(a);u!==-1&&f(u),o(a,"Please fix this field.",s),s.focus()}return}e.preventDefault(),p=!0,w();const t={discord:r.discord.value.trim(),javaName:r.javaName.value.trim(),timeSpent:r.timeSpent.value.trim(),age:r.age.value.trim(),timeZone:r.timeZone.value.trim(),about:r.about.value.trim()};try{const s=["**New application**",`Discord: ${t.discord}`,`MC Java: ${t.javaName}`,`Age: ${t.age}`,`Timezone: ${t.timeZone}`,`Playing for: ${t.timeSpent||"N/A"}`,`About: ${t.about||"N/A"}`].join(`
`),a=new FormData;a.append("content",s),await fetch(g,{method:"POST",mode:"no-cors",body:a}),window.location.href="/forum/"}catch(s){console.error(s);const a=l[l.length-1];o(a,"Something went wrong sending your application. Try again in a minute."),x(),p=!1}});const S=r.querySelectorAll(".answer-input");S.forEach(e=>{e.addEventListener("input",()=>{e.classList.remove("answer-input-error");const t=e.closest(".step");t&&h(t)}),e.addEventListener("keydown",t=>{if(t.key!=="Enter"||e.tagName==="TEXTAREA")return;t.preventDefault();const s=e.closest(".step");if(!s)return;const a=s.querySelector(".next-btn"),u=s.querySelector(".submit-btn");a?a.click():u&&u.click()})});
