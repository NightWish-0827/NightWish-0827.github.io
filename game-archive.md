---
layout: single
permalink: /categories/games/
classes: wide
---

<div class="games-page-header">
<header class="projects-header">
<h1 class="title">GAMES</h1>
<p class="tagline">개발 및 참여한 게임 프로젝트</p>
</header>

<div class="games-sort-toggle">
<button class="sort-btn" id="games-order-toggle" data-order="newest">
<i class="far fa-calendar-alt"></i>
<span class="sort-label">최신순</span>
<i class="fas fa-sort-amount-down sort-icon"></i>
</button>
</div>

</div>

<div class="full-bleed-container">
<div class="entries-horizontal" id="games-scroll-container">

{% assign posts = site.categories["games"] | sort: "date" | reverse %}

{% for post in posts %}
<div class="game-card">

{% if post.header.teaser %}
<div class="game-teaser">
<a href="{{ post.url | relative_url }}" draggable="false">
<img src="{{ post.header.teaser | relative_url }}"
     draggable="false"
     style="object-position: center {% if post.teaser_position %}{{ post.teaser_position }}{% else %}center{% endif %};">
</a>

{% if post.status %}
<span class="status-badge status-{{ post.status | downcase | replace: ' ', '-' }}">{{ post.status }}</span>
{% endif %}

</div>
{% endif %}

<div class="game-content">

<div class="game-meta-badges">

{% if post.engine %}
<span class="badge engine-badge">{{ post.engine }}</span>
{% endif %}

{% if post.platform %}
<span class="badge">{{ post.platform }}</span>
{% endif %}

{% if post.genre %}
<span class="badge">{{ post.genre }}</span>
{% endif %}

{% if post.tags %}
{% for tag in post.tags %}
<span class="badge tag-badge">{{ tag }}</span>
{% endfor %}
{% endif %}

</div>

<h2 class="game-title">
<a href="{{ post.url | relative_url }}">{{ post.title }}</a>
</h2>

<p class="game-excerpt">
{{ post.excerpt | markdownify | strip_html | truncate: 120 }}
</p>

<div class="game-footer-info">

{% if post.role %}
<span class="info-item">
<i class="fas fa-user-cog"></i>
{{ post.role }}
</span>
{% endif %}

{% if post.team_size %}
<span class="info-item">
<i class="fas fa-users"></i>
{{ post.team_size }}인 팀
</span>
{% endif %}

{% if post.duration %}
<span class="info-item">
<i class="fas fa-clock"></i>
{{ post.duration }}
</span>
{% endif %}

{% if post.date %}
<span class="info-item">
<i class="far fa-calendar-alt"></i>
{{ post.date | date: "%Y.%m" }}
</span>
{% endif %}

</div>

{% if post.play_url or post.itch_url or post.github_url %}
<div class="game-links">
{% if post.play_url %}
<a href="{{ post.play_url }}" class="game-link-btn play-btn" target="_blank" rel="noopener">
  <i class="fas fa-play"></i> Play
</a>
{% endif %}
{% if post.itch_url %}
<a href="{{ post.itch_url }}" class="game-link-btn itch-btn" target="_blank" rel="noopener">
  <i class="fab fa-itch-io"></i> itch.io
</a>
{% endif %}
{% if post.github_url %}
<a href="{{ post.github_url }}" class="game-link-btn github-btn" target="_blank" rel="noopener">
  <i class="fab fa-github"></i> GitHub
</a>
{% endif %}
</div>
{% endif %}

</div>
</div>
{% endfor %}

</div>
</div>

<div class="center-layout-wrapper">

<hr class="divider">

<div class="footer-section">
<p class="highlight-text">
<strong>"집요함으로 게임을 제작합니다."</strong>
</p>
</div>

</div>

<style>

html, body {
overflow-x: hidden;
}

.games-page-header {
width: 100%;
text-align: center;
}

.games-sort-toggle{
display:flex;
justify-content:center;
margin-bottom:1em;
}

.sort-btn{
display:inline-flex;
align-items:center;
gap:8px;
background:#2d333b;
color:#cbd5e0;
border:1px solid #3d444d;
border-radius:10px;
padding:10px 20px;
font-size:.82em;
font-weight:600;
letter-spacing:.8px;
text-transform:uppercase;
cursor:pointer;
transition:border-color .25s ease, color .25s ease, box-shadow .25s ease, background .25s ease;
}

.sort-btn:hover{
border-color:#4da3ff;
color:#fff;
box-shadow:0 4px 16px rgba(77,163,255,0.15);
}

.sort-btn.is-old{
background:#1a2028;
border-color:#4da3ff;
color:#4da3ff;
}

.sort-btn i{
color:#4da3ff;
font-size:.95em;
}

.sort-btn.is-old .sort-icon{
transform:rotate(180deg);
}

.sort-icon{
transition:transform .3s ease;
}

.page{
background-color:transparent!important;
border:none!important;
box-shadow:none!important;
}

@media (min-width: 1024px) {
.archive, .page, .single {
padding-right: 0 !important;
float: none !important;
margin: 0 auto !important;
width: 100% !important;
}
}

.page__content{
padding:3em 0;
width:100%!important;
margin:0 auto!important;
float:none!important;
padding-right:0!important;
}

.center-layout-wrapper{
max-width:1100px;
width:100%;
margin:0 auto;
text-align:center;
}

.projects-header{text-align:center;}

.projects-header .title{
font-size:3em;
margin-bottom:.2em;
letter-spacing:8px;
color:#fff!important;
font-weight:900;
}

.projects-header .tagline{
font-size:1.1em;
color:#4da3ff!important;
margin-bottom:3.5em;
font-weight:bold;
letter-spacing:2px;
text-transform:uppercase;
}

/* 기존 .full-bleed-container에 위아래 경계선 살짝 추가 (선택사항) */
.full-bleed-container {
  width: auto;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

/* 👇 새롭게 추가: 인터렉션 범위를 알려주는 어두운 블러+패턴 트랙 */
.full-bleed-container::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  
  /* 기본 배경(#252a34)보다 살짝 더 어두운 베이스 컬러 */
  background-color: #1b1e25; 
  
  /* 은은한 도트 패턴 (너무 튀지 않게 투명도 조절) */
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  
  /* 안쪽으로 짙은 그림자를 주어, 화면 안으로 파인 듯한 공간감과 어두운 블러 효과 제공 */
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.6);
  
  z-index: 0; /* 카드들보다 뒤로 배치 */
  pointer-events: none; /* 스크롤이나 클릭 이벤트를 방해하지 않도록 설정 */
}

/* 기존 .entries-horizontal 수정 */
.entries-horizontal {
  /* 👇 추가: 배경 위로 콘텐츠가 올라오도록 설정 */
  position: relative; 
  z-index: 1;         

  --card-width: 380px;
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  overflow-y: hidden;

  /* 👇 수정: 배경 패턴이 조금 더 잘 보이도록 상하 여백 확장 (기존 20px -> 50px) */
  padding-top: 50px;  
  padding-bottom: 50px; 

  padding-left: calc(50vw - (var(--card-width) / 2));
  padding-right: calc(50vw - (var(--card-width) / 2));
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.entries-horizontal::-webkit-scrollbar{
display:none;
}

@media(max-width:850px){

.entries-horizontal{
--card-width:85vw;
padding-left:calc(50vw - (var(--card-width) / 2));
padding-right:calc(50vw - (var(--card-width) / 2));
}

}

.game-card{

flex:0 0 var(--card-width);

scroll-snap-align:center;
scroll-snap-stop:always;

background:#2d333b!important;
border-radius:16px;

box-shadow:0 10px 30px rgba(0,0,0,0.3)!important;
border:1px solid #3d444d!important;

transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease;

display:flex;
flex-direction:column;

overflow:hidden;
}

.game-card:hover{
transform:translateY(-8px);
border-color:#4da3ff!important;
box-shadow:0 15px 40px rgba(77,163,255,0.15)!important;
}

.game-teaser{
position:relative;
width:100%;
border-bottom:1px solid #3d444d;
overflow:hidden;
}

.game-teaser img{
width:100%;
aspect-ratio:16/9;
object-fit:cover;
display:block;
transition:transform .5s ease;
pointer-events:none;
/* object-position은 인라인 스타일로 post.teaser_position 값을 적용 */
}

.game-card:hover .game-teaser img{
transform:scale(1.03);
}

/* ── Status Badge 정규화 ── */
.status-badge{
position:absolute;
top:15px;
right:15px;
padding:6px 12px;
border-radius:20px;
font-size:.8em;
font-weight:bold;
backdrop-filter:blur(4px);
background:rgba(26,32,40,.85);
}

/* Complete → 초록 */
.status-badge.status-complete{
color:#3fb950;
border:1px solid #3fb950;
}

/* In Progress → 파란 */
.status-badge.status-in-progress{
color:#4da3ff;
border:1px solid #4da3ff;
}

/* Pause → 빨간 */
.status-badge.status-pause{
color:#f85149;
border:1px solid #f85149;
}

/* 미정의 상태 폴백 */
.status-badge:not(.status-complete):not(.status-in-progress):not(.status-pause){
color:#cbd5e0;
border:1px solid #3d444d;
}

.game-content{
padding:1.8em;
display:flex;
flex-direction:column;
flex-grow:1;
text-align:left;
}

.game-meta-badges{
display:flex;
flex-wrap:wrap;
gap:8px;
margin-bottom:1em;
}

.badge{
background:#3d444d;
color:#cbd5e0;
padding:4px 10px;
border-radius:6px;
font-size:.75em;
font-weight:600;
letter-spacing:.5px;
text-transform:uppercase;
}

.engine-badge{
background:#1a2028;
color:#fff;
border:1px solid #3d444d;
}

.tag-badge{
background:transparent;
color:#768390;
border:1px solid #3d444d;
}

.game-title{
font-size:1.3em!important;
margin:0 0 .5em 0!important;
font-weight:700;
}

.game-title a{
color:#fff!important;
text-decoration:none;
transition:color .2s ease;
}

.game-title a:hover{
color:#4da3ff!important;
}

.game-excerpt{
font-size:.9em!important;
color:#8b949e!important;
line-height:1.6;
margin:0 0 1.5em 0!important;
flex-grow:1;
}

.game-footer-info{
display:flex;
flex-wrap:wrap;
gap:.5em 1em;
align-items:center;
padding-top:1em;
border-top:1px solid #3d444d;
font-size:.85em;
color:#768390;
}

.info-item i{
margin-right:5px;
color:#4da3ff;
}

/* ── 링크 버튼 ── */
.game-links{
display:flex;
gap:8px;
flex-wrap:wrap;
margin-top:1em;
padding-top:1em;
border-top:1px solid #3d444d;
}

.game-link-btn{
display:inline-flex;
align-items:center;
gap:5px;
padding:5px 14px;
border-radius:8px;
font-size:.78em;
font-weight:600;
text-decoration:none!important;
transition:opacity .2s ease, transform .2s ease;
}

.game-link-btn:hover{
opacity:.85;
transform:translateY(-1px);
}

.play-btn{
background:#3fb950;
color:#0d1117!important;
}

.itch-btn{
background:#fa5c5c;
color:#fff!important;
}

.github-btn{
background:#3d444d;
color:#cbd5e0!important;
border:1px solid #555f6d;
}

.divider{
border:0;
height:1px;
background:linear-gradient(to right,transparent,#3d444d,transparent);
margin:3em 0;
}

.footer-section{text-align:center;}

.footer-section .highlight-text{
font-size:1.2em;
line-height:1.6;
color:#fff!important;
opacity:.8;
}

</style>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("games-scroll-container");
  const toggle = document.getElementById("games-order-toggle");

  // UX 개선: 연속적인 스크롤 상태를 추적하기 위한 변수
  let scrollTimeout;
  let isHorizontalScrolling = false;

  slider.addEventListener("wheel", (e) => {
    const isHoveringCard = e.target.closest(".game-card");

    // 💡 핵심 UX 로직 (Scroll Intent Lock)
    // 현재 마우스가 카드 위에 없더라도, 직전까지 '연속적인 가로 스크롤 동작 중'이었다면 이벤트를 계속 가로챕니다.
    if (!isHoveringCard && !isHorizontalScrolling) {
      return; 
    }

    // 기본 상하 스크롤을 막고 가로 스크롤 제어 시작
    e.preventDefault();

    // 스크롤 상태를 '활성화'하고 기존 타이머를 취소합니다.
    isHorizontalScrolling = true;
    clearTimeout(scrollTimeout);
    
    // 휠 동작이 멈추고 150ms가 지나면 가로 스크롤 의도가 끝난 것으로 간주하여 상태를 해제합니다.
    scrollTimeout = setTimeout(() => {
      isHorizontalScrolling = false;
    }, 150);

    const dir = e.deltaY > 0 || e.deltaX > 0 ? 1 : -1;
    const cards = [...slider.children];

    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
    let closestIdx = 0;
    let min = Infinity;
    
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const d = Math.abs(cardCenter - sliderCenter);
      if (d < min) { 
        min = d; 
        closestIdx = i; 
      }
    });

    const nextIdx = Math.min(Math.max(closestIdx + dir, 0), cards.length - 1);
    snapTo(cards[nextIdx]);

  }, { passive: false });

  function snapTo(card) {
    const sliderRect = slider.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = slider.scrollLeft + (cardRect.left - sliderRect.left) - (sliderRect.width / 2) + (cardRect.width / 2);
    slider.scrollTo({ left: offset, behavior: "smooth" });
  }

  // 초기 로드 시 첫 번째 카드로 스냅
  const first = slider.children[0];
  if (first) {
    requestAnimationFrame(() => snapTo(first));
  }

  // 정렬 버튼 토글 로직
  toggle.addEventListener("click", () => {
    const isOld = toggle.classList.toggle("is-old");
    const label = toggle.querySelector(".sort-label");
    label.textContent = isOld ? "오래된순" : "최신순";

    const items = [...slider.children];
    items.reverse();
    items.forEach(el => slider.appendChild(el));

    requestAnimationFrame(() => {
      const first = slider.children[0];
      if (first) snapTo(first);
    });
  });
});
</script>