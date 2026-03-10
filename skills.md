---
# title: "Technical Skills"
layout: single
classes: wide
permalink: /skills/
---

<div class="center-layout-wrapper">

  <div class="skills-header">
    <h1 class="title">TECHNICAL STACK</h1>
    <p class="tagline">문제를 해결하는 기술과 퍼포먼스를 만드는 로직</p>
  </div>

  <div class="skills-container">
    
    <div class="skill-item-card">
      <div class="card-header">
        <span class="icon">🎮</span>
        <h3>Game Development</h3>
      </div>
      <ul class="skill-list">
        <li>인 게임 핵심 로직 및 시스템 설계</li>
        <li>객체지향 설계(OOP) 및 디자인 패턴 적용</li>
        <li>유니티 생명주기 기반 고효율 스크립팅</li>
      </ul>
    </div>

    <div class="skill-item-card">
      <div class="card-header">
        <span class="icon">⚡</span>
        <h3>Optimization</h3>
      </div>
      <ul class="skill-list">
        <li>메모리 관리 및 GC 최적화</li>
        <li>Draw Call 절감 및 병목 지점 해결</li>
        <li>PowerPool 등 고성능 풀링 솔루션 구축</li>
      </ul>
    </div>

    <div class="skill-item-card">
      <div class="card-header">
        <span class="icon">✨</span>
        <h3>Technical Art</h3>
      </div>
      <ul class="skill-list">
        <li>HLSL 커스텀 셰이더 제작 (URP/Built-in)</li>
        <li>포스트 프로세싱 및 VFX 최적화</li>
        <li>렌더링 파이프라인 커스터마이징</li>
      </ul>
    </div>

    <div class="skill-item-card">
      <div class="card-header">
        <span class="icon">🛠️</span>
        <h3>Tools & DevOps</h3>
      </div>
      <ul class="skill-list">
        <li>에디터 확장을 통한 생산성 도구 개발</li>
        <li>GitHub Actions 기반 CI/CD 자동화</li>
        <li>WebGL/Mobile 빌드 자동화 파이프라인</li>
      </ul>
    </div>

  </div>

  <hr class="divider">

  <div class="footer-section">
    <p class="highlight-text">
      <strong>"단순히 구현하는 것을 넘어, 확장 가능하고 지속 가능한 코드를 지향합니다."</strong>
    </p>
  </div>

</div>

<style>
  /* 1. 레이아웃 설정 (About과 동일하게 강제 중앙화) */
  .page {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  .page__content {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 85vh;
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
    max-width: 800px; /* About보다 약간 넓게 설정하여 그리드 확보 */
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  /* 2. 헤더 스타일 (About의 Name/Tagline 스타일 상속) */
  .skills-header .title {
    font-size: 3em;
    margin-bottom: 0.2em;
    letter-spacing: 8px;
    color: #ffffff !important;
    font-weight: 900;
  }

  .skills-header .tagline {
    font-size: 1.1em;
    color: #4da3ff !important;
    margin-bottom: 3.5em;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* 3. 스킬 그리드 (About의 info-grid 스타일 적용) */
  .skills-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 2em;
    text-align: left;
  }

  .skill-item-card {
    background: #2d333b !important; /* About의 카드 배경색 */
    padding: 2em;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
    border: 1px solid #3d444d !important;
    transition: transform 0.3s ease;
  }

  .skill-item-card:hover {
    transform: translateY(-5px);
    border-color: #4da3ff !important;
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.2em;
    border-bottom: 1px solid #3d444d;
    padding-bottom: 0.8em;
  }

  .card-header .icon {
    font-size: 1.8em;
    margin-right: 12px;
  }

  .card-header h3 {
    font-size: 1.2em;
    color: #f0f6fc !important;
    margin: 0 !important;
    font-weight: 700;
  }

  /* 4. 리스트 스타일 */
  .skill-list {
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .skill-list li {
    font-size: 0.9em !important;
    color: #cbd5e0 !important;
    margin-bottom: 0.7em;
    line-height: 1.4;
    position: relative;
    padding-left: 1.2em;
  }

  .skill-list li::before {
    content: "•";
    color: #4da3ff;
    position: absolute;
    left: 0;
    font-weight: bold;
  }

  /* 5. 구분선 및 하단 문구 (About과 동기화) */
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
    opacity: 0.9;
  }

  /* 모바일 대응 */
  @media (max-width: 700px) {
    .skills-container {
      grid-template-columns: 1fr;
    }
    .skills-header .title { font-size: 2.2em; letter-spacing: 4px; }
  }
</style>