---
# title: "About Me"
layout: single
classes: wide
permalink: /about/
---

<div class="center-layout-wrapper">

  <div class="profile-header">
    <h1 class="name">황 준 혁</h1>
    <p class="tagline">Game Developer & Performance Architect</p>
  </div>

  <div class="info-grid">
    <div class="info-item">
      <span class="label">AGE</span>
      <span class="value">만 24세 (2001.08.27)</span>
    </div>
    <div class="info-item">
      <span class="label">CONTACT</span>
      <span class="value">NEED TOKEN</span>
    </div>
    <div class="info-item">
      <span class="label">EMAIL</span>
      <span class="value">gaunbabo1999@naver.com</span>
    </div>
  </div>

  <hr class="divider">

  <div class="bio-section">
    <p class="highlight-text">
      <strong>"유저와 소속 집단을 위해 집요함으로 게임을 만듭니다."</strong>
    </p>
    <p class="description">
      경험과 철학을 코드를 통해 유저에게 제공하는 게임 개발자 황준혁 입니다.
    </p>
  </div>

</div>

<style>
  /* 1. 레이아웃 및 배경 설정 (Skills와 동일) */
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
    background-color: transparent !important;
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
    max-width: 700px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  /* 2. 폰트 및 요소 색상 수정 (다크 모드 최적화) */

  /* 이름 (강조) */
  .profile-header .name {
    font-size: 3em;
    margin-bottom: 0.2em;
    letter-spacing: 8px;
    color: #ffffff !important; /* 순백색으로 가독성 확보 */
    font-weight: 900;
    text-shadow: 0 2px 15px rgba(0,0,0,0.5);
  }

  /* 태그라인 (포인트 컬러) */
  .profile-header .tagline {
    font-size: 1.1em;
    color: #4da3ff !important; /* 선명한 스카이 블루 */
    margin-bottom: 3em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  }

  /* 정보 그리드 카드 */
  .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 2em;
    background: #2d333b !important; /* 배경보다 살짝 밝은 다크 그레이 */
    padding: 2em;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
    border: 1px solid #3d444d !important; /* 은은한 테두리 */
  }

  .info-item .label {
    font-size: 0.75em;
    color: #8b949e !important; /* 흐릿한 회색으로 보조 정보 처리 */
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
    text-transform: uppercase;
  }

  .info-item .value {
    font-size: 1em;
    color: #f0f6fc !important; /* 밝은 미색으로 가독성 확보 */
    font-weight: 500;
  }

  /* 구분선 (다크 테마에 어울리게 어둡게 조절) */
  .divider {
    border: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #3d444d, transparent);
    margin: 3em 0;
  }

  /* 자기소개 섹션 */
  .bio-section .highlight-text {
    font-size: 1.4em;
    line-height: 1.6;
    color: #ffffff !important;
    margin-bottom: 1.5em;
    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }

  .bio-section .description {
    line-height: 2;
    color: #cbd5e0 !important; /* 눈이 편안한 연회색 */
    word-break: keep-all;
    font-size: 1.1em;
  }

  /* 모바일 대응 */
  @media (max-width: 600px) {
    .info-grid {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 1.5em;
    }
    .profile-header .name { font-size: 2.2em; letter-spacing: 4px; }
  }
</style>