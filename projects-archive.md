---
# title: "SDKs"
layout: single
permalink: /categories/sdks/
classes: wide
---

<div class="center-layout-wrapper">
  <header class="projects-header">
    <h1 class="title">TECH SUPPORTS</h1>
    <p class="tagline">오픈 소스 SDK 기술 지원</p>
  </header>

  <div class="entries-grid">
    {% for post in site.categories["sdks"] %}
      <a href="{{ post.url | relative_url }}" class="project-card">
        {% if post.header.teaser %}
          <div class="project-teaser">
            <img src="{{ post.header.teaser | relative_url }}" alt="Teaser Image">
          </div>
        {% endif %}
        
        <h2 class="project-title">
          {{ post.title }}
        </h2>
        
        <p class="project-excerpt">
          {{ post.excerpt | markdownify | strip_html | truncate: 160 }}
        </p>
      </a>
    {% endfor %}
  </div>

  <div class="notion-special-wrapper">
    <a href="https://nightwish0827.notion.site/sdk-pre-release-rnd" target="_blank" rel="noopener noreferrer" class="notion-special-card">
      <div class="notion-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion Logo">
      </div>
      <div class="notion-content">
        <h3 class="notion-title">Early Access: SDK 선공개 & 문서</h3>
        <p class="notion-desc">앞으로 공개될 Unity SDK와 상세한 R&D 문서들은 노션 워크스페이스에서 가장 먼저 확인하실 수 있습니다.</p>
      </div>
      <div class="notion-action">
        <span>보러 가기</span> <i class="fas fa-fw fa-arrow-right"></i>
      </div>
    </a>
  </div>

  <hr class="divider">

  <div class="footer-section">
    <p class="highlight-text">
      <strong>"정식 공개된 SDK들은 자유롭게 사용 및 수정이 가능합니다."</strong>
    </p>
  </div>
</div>

<style>
  /* 1. 레이아웃 설정 */
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
    max-width: 1100px; 
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
    grid-template-columns: repeat(2, 1fr); 
    gap: 30px; 
    text-align: left;
    margin-bottom: 1em; 
    align-items: stretch;
  }

  /* 🔥 a 태그에 맞게 텍스트 밑줄 제거 및 색상 상속 추가 */
  .project-card {
    background: #2d333b !important;
    padding: 1.8em;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
    border: 1px solid #3d444d !important;
    transition: transform 0.3s ease, border-color 0.3s ease;
    display: flex;
    flex-direction: column;
    text-decoration: none !important; 
    color: inherit; 
  }

  .project-card:hover {
    transform: translateY(-5px);
    border-color: #4da3ff !important;
  }

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

  /* 🔥 제목 색상 및 호버 애니메이션 로직 변경 */
  .project-title {
    font-size: 1.25em !important;
    margin: 0 0 0.5em 0 !important;
    font-weight: 700;
    border-bottom: 1px solid #3d444d;
    padding-bottom: 0.5em;
    color: #4da3ff !important;
    transition: color 0.3s ease;
  }
  
  /* 카드 전체에 마우스를 올렸을 때 제목 색상이 변하도록 처리 */
  .project-card:hover .project-title {
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

  /* 5. 노션 스페셜 임베드 카드 스타일 */
  .notion-special-wrapper {
    margin: 3em 0 1em 0; 
    width: 100%;
  }

  .notion-special-card {
    display: flex;
    align-items: center;
    background: linear-gradient(145deg, #2d333b, #22272e) !important;
    padding: 1.5em 2em;
    border-radius: 16px;
    border: 1px solid #3d444d !important;
    text-decoration: none !important;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
  }

  .notion-special-card:hover {
    transform: translateY(-5px);
    border-color: #4da3ff !important;
    box-shadow: 0 15px 35px rgba(77, 163, 255, 0.15) !important; 
  }

  .notion-icon {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 12px;
    padding: 10px;
    margin-right: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .notion-icon img {
    width: 100%;
    height: auto;
  }

  .notion-content {
    flex-grow: 1;
    text-align: left;
  }

  .notion-title {
    color: #ffffff !important;
    font-size: 1.3em !important;
    margin: 0 0 0.3em 0 !important;
    font-weight: 700;
  }

  .notion-desc {
    color: #cbd5e0 !important;
    font-size: 0.95em !important;
    margin: 0 !important;
    line-height: 1.5;
  }

  .notion-action {
    flex-shrink: 0;
    color: #4da3ff;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 1.5em;
    padding: 10px 20px;
    background: rgba(77, 163, 255, 0.1);
    border-radius: 8px;
    transition: background 0.2s ease;
  }

  .notion-special-card:hover .notion-action {
    background: rgba(77, 163, 255, 0.2);
  }

  /* 모바일 대응 */
  @media (max-width: 850px) { 
    .entries-grid {
      grid-template-columns: 1fr;
    }
    .projects-header .title { font-size: 2.2em; letter-spacing: 4px; }
    
    .notion-special-card {
      flex-direction: column;
      text-align: center;
      padding: 1.5em;
    }
    .notion-icon {
      margin: 0 0 1em 0;
    }
    .notion-content {
      text-align: center;
      margin-bottom: 1.2em;
    }
    .notion-action {
      margin-left: 0;
      width: 100%;
      justify-content: center;
    }
  }
</style>