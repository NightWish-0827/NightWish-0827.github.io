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
      <a href="{{ post.url | relative_url }}" class="project-card{% if post.badges contains 'active' %} project-card--hot{% endif %}">
        {% if post.header.teaser %}
          <div class="project-teaser">
            <img src="{{ post.header.teaser | relative_url }}" alt="Teaser Image">
          </div>
        {% endif %}

        {% if post.badges %}
          <div class="badge-row">
            {% for badge in post.badges %}
              <span class="badge badge-{{ badge }}">
                <span class="badge-dot"></span>
                {% case badge %}
                  {% when 'new' %}신규 출시
                  {% when 'active' %}HOT
                  {% when 'wiki' %}공식 Wiki
                  {% when 'stable' %}안정 버전
                  {% when 'beta' %}베타
                {% endcase %}
              </span>
            {% endfor %}
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

  /* 6. 배지 스타일 */
  .badge-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    line-height: 1.6;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .badge-new {
    background: rgba(51, 188, 120, 0.15);
    color: #3dba78;
    border: 1px solid rgba(51, 188, 120, 0.3);
  }
  .badge-new .badge-dot { background: #3dba78; }

  .badge-active {
    background: rgba(247, 79, 60, 0.15);
    color: #ff0000;
    border: 1px solid rgba(247, 60, 60, 0.3);
    animation: badge-pulse 2s ease-in-out infinite;
  }
  .badge-active .badge-dot { background: #ff0000; }

  @keyframes badge-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(247, 155, 60, 0); }
    50%       { box-shadow: 0 0 0 4px rgba(247, 155, 60, 0.15); }
  }

  .badge-wiki {
    background: rgba(77, 163, 255, 0.15);
    color: #4da3ff;
    border: 1px solid rgba(77, 163, 255, 0.3);
  }
  .badge-wiki .badge-dot { background: #4da3ff; }

  .badge-stable {
    background: rgba(140, 140, 160, 0.15);
    color: #a0aab8;
    border: 1px solid rgba(140, 140, 160, 0.3);
  }
  .badge-stable .badge-dot { background: #a0aab8; }

  .badge-beta {
    background: rgba(168, 85, 247, 0.15);
    color: #c084fc;
    border: 1px solid rgba(168, 85, 247, 0.3);
  }
  .badge-beta .badge-dot { background: #c084fc; }

  /* 7. HOT 카드 강조 */
  /* 7. HOT 카드 강조 (네온 글로우 + 샤인 + 불티 파티클) */
  .project-card--hot {
    position: relative;
    overflow: hidden; /* 내부 파티클과 빛 효과가 카드 밖으로 벗어나지 않게 클리핑 */
    animation: card-hot-neon 2s ease-in-out infinite alternate;
  }

  /* 네온 글로우 펄스 애니메이션 */
  @keyframes card-hot-neon {
    0% {
      box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 0 15px rgba(255, 79, 60, 0.2), inset 0 0 10px rgba(255, 79, 60, 0.1);
      border-color: rgba(255, 79, 60, 0.4) !important;
    }
    100% {
      box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 0 25px rgba(255, 79, 60, 0.6), 0 0 15px rgba(255, 200, 0, 0.3), inset 0 0 20px rgba(255, 79, 60, 0.2);
      border-color: rgba(255, 180, 0, 0.8) !important;
    }
  }

  /* 스쳐 지나가는 빛 (Shimmer/Shine) 효과 */
  .project-card--hot::before {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 60%;
    height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255,255,255,0) 100%);
    transform: skewX(-25deg);
    animation: hot-shine 4s ease-in-out infinite;
    pointer-events: none;
    z-index: 10;
  }

  @keyframes hot-shine {
    0%, 50% { left: -150%; }
    100% { left: 200%; }
  }

  /* 불티(Embers) 파티클 효과 (CSS box-shadow 활용) */
  .project-card--hot::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: transparent;
    /* 여러 개의 파티클을 좌표(box-shadow)로 생성 */
    box-shadow: 
      40px 20px 2px rgba(255, 100, 50, 0.8),
      120px 40px 1px rgba(255, 200, 50, 0.6),
      200px 10px 3px rgba(255, 50, 50, 0.9),
      280px 50px 2px rgba(255, 150, 50, 0.7),
      360px 30px 1px rgba(255, 100, 50, 0.5),
      80px 60px 2px rgba(255, 200, 50, 0.8);
    animation: hot-embers 3s linear infinite;
    pointer-events: none;
    z-index: 5;
  }

  @keyframes hot-embers {
    0% { transform: translateY(0) scale(1); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-150px) scale(0.5); opacity: 0; }
  }

  /* 호버 시 강조 효과 (애니메이션 정지 및 강한 글로우) */
  .project-card--hot:hover {
    transform: translateY(-5px);
    animation: none !important;
    border-color: #ffb74d !important;
    box-shadow: 0 15px 40px rgba(0,0,0,0.5), 0 0 40px 10px rgba(255, 79, 60, 0.4), inset 0 0 20px rgba(255, 79, 60, 0.3) !important;
  }
  
  /* HOT 카드 전용 타이틀 색상 및 호버 처리 */
  .project-card--hot .project-title {
    color: #ff8a65 !important;
    border-bottom-color: rgba(255, 138, 101, 0.3) !important;
  }
  
  .project-card--hot:hover .project-title {
    color: #ffffff !important;
    text-shadow: 0 0 10px rgba(255, 138, 101, 0.8);
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