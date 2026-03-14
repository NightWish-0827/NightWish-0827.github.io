---
title: "Forge Master Cloning"
categories: [games]
classes: wide
header:
  teaser: /assets/images/tycoon-teaser.png

# ── 썸네일 버티컬 위치 ──────────────────────────────
# 값 예시: top | center | bottom | 20% | 75%
# 기본값: center (미입력 시 자동 적용)
teaser_position: "35%"

# ── 게임 상태 (정규화된 값만 사용) ─────────────────
# Complete    → 초록색 뱃지
# In Progress → 파란색 뱃지
# Pause       → 빨간색 뱃지
status: "Complete"

excerpt: "제작한 SDK의 TC, 개발 보조 능력을 측정하기 위해 제작되었습니다."

# ── 기술 정보 ────────────────────────────────────────
engine: "Unity"           # 엔진 뱃지 (진한 색)
platform: "Mobile" # 플랫폼 뱃지
genre: "D2G / Hyper Casual"              # 장르 뱃지

# ── 팀 정보 ─────────────────────────────────────────
role: "Solo Dev"          # 담당 역할
# team_size: 1              # 팀 인원 수 (숫자). 미입력 시 노출 안 됨
duration: "6 hours"       # 개발 기간. 미입력 시 노출 안 됨

# ── 링크 ────────────────────────────────────────────
# play_url: ""              # 인게임 플레이 링크 (빈 문자열이면 버튼 미노출)
# itch_url: ""              # itch.io 페이지 링크
# github_url: ""            # GitHub 레포 링크

# ── 태그 (선택) ─────────────────────────────────────
# 장르/테마 키워드 자유 입력. 뱃지로 카드에 노출됨.
tags:
  - SDK TC
#  - Cloning
#  - Tycoon

date: 2026-02-03
---

## 제작한 SDK를 검증하기 위한 비 상업용 프로젝트 입니다. 

화제의 D2G 장르. 독일 개발사 **Lessmore**의 **Forge Master** 게임을 클로닝 했습니다. 

리소스는 **[Forge Master](https://play.google.com/store/apps/details?id=com.hariwn.legendofcivilizations&hl=en)** 원작을 Dotpeek 활용하여 분해 후 사용했습니다. <br>

<span style="color:red">``이를 상업적으로 활용한 사례가 일체 없음을 밝힙니다.``</span> 

<div style="width: 100%; max-width: 700px;">
{% include manual_linkcard.html 
   url="https://play.google.com/store/apps/details?id=com.hariwn.legendofcivilizations&hl=en" 
   title="Forge Master" 
   desc="Are you ready for this adventure?." 
   image="https://play-lh.googleusercontent.com/emNDoWnEo13CRoLpnoUfhygnTXQ7zQVZ9SPpcLWZrSEOZ8Jbk6dhx0bZ2zgY0BFg4g=w240-h480-rw" 
%}
</div>
---

## Screen Shots & Videos

<img src="/assets/images/tycoon-teaser.png" width="300">

<video controls width="300">
  <source src="/assets/videos/fg.mp4" type="video/mp4">
</video>

---

## My Package List

| SDK | Description |
|-----|-------------|
| **[UNFinder](https://github.com/NightWish-0827/UNFinder)** | Find 심벌을 Editor 에서 최적화 하여 사용 |
| **[PowerPool](https://github.com/NightWish-0827/PowerPool)** | 초고성능 Object Pooling 시스템 |
| **[UNInject]** | Unity 직렬화 Bake Up을 활용한 Lapid Dependecy Injection SDK (UPM 지원 예정) |

---

## Open Source SDK List

| SDK | Description |
|-----|-------------|
| **[Unitask](https://github.com/Cysharp/UniTask)** | 스레드 기반 비동기 메서드 지원 |
| **[DOTween](https://github.com/Demigiant/dotween)** | Unity 스크립트 애니메이션 시퀀스 |
| **[Json For Unity](https://github.com/applejag/Newtonsoft.Json-for-Unity)** | Json 읽기 쓰기 호환 |

---

## Test Device

| 테스트 기기 | 컴파일 |
|------------|--------|
| **LG VELVET (LM-G900N)** | IL2CPP |
| **Iphone 15 (MTP43KH/A)** | Dev Build | 

---

## 간단한 후기

잉여 시간에 SDK TC 진행겸 제작하게 된 게임입니다.<br>

원작의 리소스가 단순함을 넘어, **특이점이 온 수준의 표현 억제**가 특징입니다. <br> 
하지만 의외로 게임 자체가 중독성이 매우 강하여, 개발 하면서도 제법 즐겁게 진행했습니다. 

---