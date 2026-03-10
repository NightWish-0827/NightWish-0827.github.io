---
# title: "SDKs"
layout: single
permalink: /categories/sdks/
classes: wide
---

<div class="center-layout-wrapper">
  <header class="projects-header">
    <h1 class="title">TECH SUPPORT</h1>
    <p class="tagline">오픈 소스 SDK 기술 지원</p>
  </header>

  <div class="entries-grid">
    {% for post in site.categories["sdks"] %}
      <div class="project-card">
        {% if post.header.teaser %}
          <div class="project-teaser">
            <img src="{{ post.header.teaser | relative_url }}" alt="Teaser Image">
          </div>
        {% endif %}
        
        <h2 class="project-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        
        <p class="project-excerpt">
          {{ post.excerpt | markdownify | strip_html | truncate: 160 }}
        </p>
      </div>
    {% endfor %}
  </div>

  <hr class="divider">

  <div class="footer-section">
    <p class="highlight-text">
      <strong>"자유롭게 사용 및 수정이 가능합니다."</strong>
    </p>
  </div>
</div>

<style>
  /* 1. 레이아웃 설정 (전체 폭을 늘려 각 그리드 아이템의 가로 사이즈 확장) */
  .page {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  .page__content {
    padding: 3em 0;
    width: 100% !important;
    margin: 0 auto !important;
  }

  @media (min-width: 1024px) {
    .archive, .page, .single {
      padding-right: 0 !important;
      float: none !important;
      margin: 0 auto !important;
      width: 100% !important;
    }
  }

  .center-layout-wrapper {
    max-width: 1100px; /* 🔥 기존 800px에서 1100px로 확장하여 카드가 넓어짐 */
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  /* 2. 헤더 스타일 */
  .projects-header .title {
    font-size: 3em;
    margin-bottom: 0.2em;
    letter-spacing: 8px;
    color: #ffffff !important;
    font-weight: 900;
  }

  .projects-header .tagline {
    font-size: 1.1em;
    color: #4da3ff !important;
    margin-bottom: 3.5em;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* 3. 그리드 및 카드 스타일 */
  .entries-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2열 고정 */
    gap: 30px; /* 🔥 카드가 넓어진 만큼 카드 간의 간격(gap)도 20px -> 30px로 살짝 넓혀 안정감 부여 */
    text-align: left;
    margin-bottom: 3em;
    align-items: stretch;
  }

  .project-card {
    background: #2d333b !important;
    padding: 1.8em;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
    border: 1px solid #3d444d !important;
    transition: transform 0.3s ease, border-color 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    transform: translateY(-5px);
    border-color: #4da3ff !important;
  }

  /* 썸네일 이미지 비율 및 보호 */
  .project-teaser {
    border-radius: 10px;
    margin-bottom: 1.2em;
    overflow: hidden;
    border: 1px solid #3d444d;
  }

  .project-teaser img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
  }

  /* 카드 내 텍스트 스타일 */
  .project-title {
    font-size: 1.25em !important;
    margin: 0 0 0.5em 0 !important;
    font-weight: 700;
    border-bottom: 1px solid #3d444d;
    padding-bottom: 0.5em;
  }

  .project-title a {
    color: #4da3ff !important;
    text-decoration: none;
  }
  
  .project-title a:hover {
    color: #f0f6fc !important;
  }

  .project-excerpt {
    font-size: 0.9em !important;
    color: #cbd5e0 !important;
    line-height: 1.6;
    margin: 0 !important;
    flex-grow: 1;
  }

  /* 4. 구분선 및 하단 문구 */
  .divider {
    border: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #3d444d, transparent);
    margin: 3em 0;
  }

  .footer-section .highlight-text {
    font-size: 1.2em;
    line-height: 1.6;
    color: #ffffff !important;
    opacity: 0.8;
  }

  /* 모바일 대응 */
  @media (max-width: 850px) { /* 모바일 전환 기준점도 살짝 높임 */
    .entries-grid {
      grid-template-columns: 1fr;
    }
    .projects-header .title { font-size: 2.2em; letter-spacing: 4px; }
  }
</style>