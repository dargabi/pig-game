(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function f(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=f(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">3</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>

`;const s=document.querySelector(".player--0"),l=document.querySelector(".player--1"),b=document.querySelector("#score--0"),S=document.querySelector("#score--1"),g=document.querySelector("#current--0"),v=document.querySelector("#current--1"),L=document.querySelector(".btn--new"),u=document.querySelector(".btn--hold"),y=document.querySelector(".btn--roll"),a=document.querySelector(".dice");let o,c,t;const p=()=>{o=[0,0],c=0,t=0,a.classList.add("hidden"),b.textContent=0,S.textContent=0,g.textContent=0,v.textContent=0,document.querySelector("#name--0").textContent="Player 1",document.querySelector("#name--1").textContent="Player 2",s.classList.remove("player--winner"),l.classList.remove("player--winner"),s.classList.add("player--active"),l.classList.remove("player--active"),y.disabled=!1,u.disabled=!1};p();y.addEventListener("click",()=>{const n=Math.trunc(Math.random()*6)+1;a.src=`dice-${n}.png`,a.classList.remove("hidden"),n!==1?(c+=n,document.querySelector(`#current--${t}`).textContent=c):(c=0,document.querySelector(`#current--${t}`).textContent=c,t=t===0?1:0,s.classList.toggle("player--active"),l.classList.toggle("player--active"))});u.addEventListener("click",()=>{o[t]+=c,document.querySelector(`#score--${t}`).textContent=o[t],c=0,document.querySelector(`#current--${t}`).textContent=c,o[t]>=100?(document.querySelector(`#name--${t}`).textContent="Winner!",a.classList.add("hidden"),document.querySelector(`.player--${t}`).classList.add("player--winner"),y.disabled=!0,u.disabled=!0):(t=t===0?1:0,s.classList.toggle("player--active"),l.classList.toggle("player--active"))});L.addEventListener("click",p);
