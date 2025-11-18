import"./modulepreload-polyfill-B5Qt9EMX.js";document.querySelector("#app").innerHTML=`
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
`;let a=["minecraft","signaajames","super_duper_signa","i misspelt some things","Enter codes here!","Code put here"];const l=["orange"],e=document.getElementsByClassName("answer-input")[0],n=document.getElementsByClassName("answer-hint")[0],o=n.innerHTML;function c(r){if(r.key!=="Enter")return;const s=e.value.trim().toLowerCase();if(!s){e.classList.remove("answer-input-error"),n.classList.remove("answer-hint-error"),n.innerHTML=o;return}let i=!1;for(let t=0;t<l.length;t++)if(s===l[t]){i=!0;break}if(i){e.classList.remove("answer-input-error"),n.classList.remove("answer-hint-error"),n.innerHTML=o;const t=`/forum/${s}/`;window.location.href=t}else n.textContent="Wrong code. Ask for the correct code and try again.",n.classList.add("answer-hint-error"),e.classList.remove("answer-input-error"),e.offsetWidth,e.classList.add("answer-input-error")}e.addEventListener("keydown",c);e.addEventListener("input",()=>{e.classList.remove("answer-input-error"),n.classList.remove("answer-hint-error"),n.innerHTML=o});async function d(){try{for(let r=0;r<a.length;r++){let s=Math.floor(Math.random()*a.length);e.placeholder=a[s],console.log(r)}}catch(r){console.log(r)}}d();
