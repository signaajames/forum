(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
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
`;let l=["minecraft","signaajames","super_duper_signa","i misspelt some things","Enter codes here!","Code put here"];const u=["orange"],t=document.getElementsByClassName("answer-input")[0],n=document.getElementsByClassName("answer-hint")[0],d=n.innerHTML;function f(o){if(o.key!=="Enter")return;const s=t.value.trim().toLowerCase();if(!s){t.classList.remove("answer-input-error"),n.classList.remove("answer-hint-error"),n.innerHTML=d;return}let a=!1;for(let i=0;i<u.length;i++)if(s===u[i]){a=!0;break}a?(t.classList.remove("answer-input-error"),n.classList.remove("answer-hint-error"),n.innerHTML=d,window.location.href=s):(n.textContent="Wrong code. Ask for the correct code and try again.",n.classList.add("answer-hint-error"),t.classList.remove("answer-input-error"),t.offsetWidth,t.classList.add("answer-input-error"))}t.addEventListener("keydown",f);t.addEventListener("input",()=>{t.classList.remove("answer-input-error"),n.classList.remove("answer-hint-error"),n.innerHTML=d});async function p(){try{for(let o=0;o<l.length;o++){let s=Math.floor(Math.random()*l.length);t.placeholder=l[s],console.log(o)}}catch(o){console.log(o)}}p();
