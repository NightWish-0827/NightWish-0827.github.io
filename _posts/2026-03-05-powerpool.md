---
categories: sdks
title: "Power Pool"
layout: single
classes: wide
read_time: true
excerpt: "Ref Struct 기반 Unity 오브젝트 풀 프레임워크"

badges: [beta]

tags:
  - Unity
  - OpenSource
  - C#
---

# PowerPool – Ref Struct 기반 Unity 오브젝트 풀 프레임워크

![](https://img.shields.io/badge/unity-2021.3%2B-black)
![](https://img.shields.io/badge/license-MIT-blue)

> **PowerPool**은 Unity를 위한 고성능 오브젝트 풀링 프레임워크입니다.  
>**Zero Allocation 런타임**, **O(1) 반환 복잡도**, 그리고 **버전 기반 메모리 안전 검증**을 제공합니다.

`ref struct` 기반의 스택 할당 빌더 패턴, 버전 기반 안전 검증, 캐시 친화적 데이터 구조를 결합하여  
GC 스파이크와 런타임 조회 오버헤드 없이 오브젝트 풀링을 처리합니다.

<img width="797" height="90" alt="image" src="https://github.com/user-attachments/assets/67a707ab-46cb-4bb6-bc4a-39dfe6650b54" />

`https://github.com/NightWish-0827/PowerPool.git?path=/com.nightwishlab.powerpool`  
UPM에서 git URL로 패키지를 추가하시면 됩니다.

---

# 주요 기능

### Zero Allocation Fluent Builder

`ref struct` 기반의 스택 할당 빌더 패턴을 사용합니다.  
위치·회전·부모 Transform·초기화 콜백 등의 스폰 설정을 fluent API로 구성하며, **이 과정에서 힙 할당이 전혀 발생하지 않습니다.**

---

### GC-Free 런타임

오브젝트 Rent 및 Return 연산은 완전히 allocation-free로 동작합니다.  
반환 핸들은 경량 구조체 `readonly struct PoolHandle<T>`로 구현되어 풀링 과정에서 GC 스파이크가 발생하지 않습니다.

---

### O(1) 반환 복잡도

각 `PoolHandle<T>`는 자신을 생성한 Pool 인스턴스에 대한 직접 참조를 보유합니다.  
Dictionary 조회, 타입 검사, 런타임 풀 탐색 없이 **항상 O(1) 상수 시간**으로 반환이 수행됩니다.

---

### Anti-Zombie 오브젝트 보호

이미 반환된 오브젝트에 계속 접근하는 Zombie Reference 문제를 **버전 기반 검증 시스템**으로 방지합니다.  
핸들 발급 시점의 Version을 기록하고, 반환 시 Version을 증가시킵니다.  
이미 반환된 핸들이 접근을 시도하면 Version 불일치를 감지하여 해당 연산을 차단하고 경고 또는 예외를 발생시킵니다.

---

### 캐시 친화적 병렬 배열 구조

내부적으로 `_items[]`(풀링된 컴포넌트)와 `_trackers[]`(생명 주기 트래커)를  
동일한 인덱스로 관리하는 병렬 배열 구조를 사용합니다. 빠른 조회와 캐시 친화적인 반복 처리가 가능합니다.

---

### Zero Runtime GetComponent

`IPoolCleanable`을 구현한 컴포넌트는 오브젝트 생성 시점에 한 번만 캐싱됩니다.  
반환 시에는 캐싱된 배열을 통해 `OnReturnToPool()`을 직접 호출하므로, 추가적인 `GetComponent` 탐색이 발생하지 않습니다.

---

### 프리팹 단위 풀 독립성

풀을 구분할 때 컴포넌트 타입 `<T>`뿐 아니라 **Prefab InstanceID**도 함께 사용합니다.  
동일한 컴포넌트를 사용하더라도 서로 다른 프리팹은 항상 독립된 풀로 관리됩니다.

```
SlimePrefab  → Pool A
OrcPrefab    → Pool B
// 두 프리팹 모두 Monster 스크립트를 사용해도 풀은 완전히 분리됩니다.
```

---

### 예상치 못한 Destroy 감지

외부에서 `Destroy()` 호출이나 씬 전환으로 풀링 오브젝트가 파괴되면 `PowerPoolTracker`가 이를 자동으로 감지합니다.  
생명 주기 오류, 메모리 누수 가능성, 풀 상태 손상 등의 문제를 빠르게 파악할 수 있습니다.

---

# 코드 사용법

## Fluent Spawn Builder

빌더는 `ref struct`로 구현되어 스택 전용 할당을 보장합니다.  
`ref struct`는 저장하거나 캡처할 수 없으므로 API 사용 패턴이 자연스럽게 one-shot 형태로 유도됩니다.

```csharp
PoolHandle<MyComponent> handle =
    PowerPool.Spawn(myPrefab)
        .At(position, rotation)
        .Under(parentTransform)
        .Rent();
```

---

## 스폰 설정

`At()`, `Under()`, `WithState()`를 조합하여 스폰 설정을 구성합니다.

```csharp
var handle = PowerPool.Spawn(prefab)
    .At(spawnPosition, spawnRotation)
    .Under(parentTransform)
    .Rent();
```

스폰 시점에 초기화 데이터를 직접 주입하려면 `WithState()`를 사용합니다.  
콜백을 `static`으로 선언하면 클로저 할당도 발생하지 않습니다.

```csharp
var handle = PowerPool.Spawn(prefab)
    .At(pos, rot)
    .WithState(
        state: new SpawnState(color, impulse),
        onInitialize: static (item, s) =>
        {
            var st = (SpawnState)s;
            item.Init(st.Color, st.Impulse);
        })
    .Rent();
```

---

## 핸들 기반 생명 주기

PowerPool은 오브젝트 대신 `PoolHandle<T>`를 반환합니다.  
핸들에는 source pool 참조, 오브젝트 tracker, 발급 시점의 version이 포함되어 double return, zombie reference, stale handle을 감지합니다.

```csharp
PoolHandle<MyComponent> handle = PowerPool.Spawn(prefab).Rent();
```

---

## 반환 방식

상황에 따라 세 가지 방식으로 반환할 수 있습니다.

```csharp
// 명시적 반환 — ref 패턴으로 핸들을 즉시 무효화
PowerPool.Return(ref handle);

// 인스턴스 메서드 반환
handle.Return();

// 스코프 기반 자동 반환 — 블록 종료 시 자동으로 반환
using (var fx = PowerPool.Spawn(effectPrefab).Rent())
{
    // 임시 이펙트 사용
}
```

---

## 초기화 콜백 — `IPoolCleanable`

오브젝트에 `IPoolCleanable`을 구현하면 반환 시 `OnReturnToPool()`이 자동으로 호출됩니다.

```csharp
public class MyEntity : MonoBehaviour, IPoolCleanable
{
    public void OnReturnToPool()
    {
        // 상태 초기화
        // 버프 해제
        // HP 복원
    }
}
```

---

## 풀 사전 준비 및 등록

최초 Spawn 시 Lazy Initialization으로 생성되지만, 런타임 Instantiate로 인한 프레임 스파이크를 방지하려면 초기화 단계에서 `Register`로 사전 준비하는 것을 권장합니다.

```csharp
PowerPool.Register(
    prefab,
    initialCapacity: 32,
    poolRoot: poolTransform,
    maxPoolSize: 256,
    overflowPolicy: PowerPoolOverflowPolicy.Expand);
```

---

## 지연 반환

코루틴, 타이머, async 로직 등 지연 반환이 필요한 경우 핸들을 안전하게 저장할 수 있습니다.  
핸들은 내부적으로 version 및 ownership 정보를 추적하므로, 잘못된 반환이나 중복 반환 상황에서도 안전하게 동작합니다.

```csharp
var handle = PowerPool.Spawn(prefab).Rent();
StartCoroutine(ReturnLater(handle, 2f));

// 코루틴 내부
PowerPool.Return(ref handle);
```

---

## 런타임 통계

`PowerPoolStats`를 통해 풀 상태를 실시간으로 모니터링할 수 있습니다.

```csharp
if (PowerPool.TryGetStats(prefab, out var stats))
{
    Debug.Log(
        $"Created={stats.TotalCreated}, " +
        $"InPool={stats.InPool}, " +
        $"Active={stats.ActiveEstimated}");
}
```

생성된 총 오브젝트 수, 활성 오브젝트 수, 풀 내부 오브젝트 수, 풀 확장 횟수 등을 확인할 수 있습니다.

---

# 성능 비교

<img width="1600" height="1200" alt="PowerPool 성능 비교" src="https://github.com/user-attachments/assets/01236128-ef27-499a-a2d7-a310ddaba46c" />

| | 일반 풀링 시스템 | PowerPool |
|--|---------------|----------|
| 스폰 설정 시 할당 | 힙 할당 발생 | `ref struct` 스택 할당 — 힙 할당 없음 |
| 반환 복잡도 | Dictionary 조회 O(n) | 직접 참조 O(1) |
| 반환 시 GetComponent | 호출마다 탐색 | 생성 시점 1회 캐싱 |
| Zombie Reference | 감지 불가 | 버전 기반 검증으로 차단 |

---

# 에디터 도구

**Tracker Window**를 통해 풀링 오브젝트의 상태를 에디터에서 직접 확인할 수 있습니다.

<img width="447" height="276" alt="Tracker Window" src="https://github.com/user-attachments/assets/579b2a3c-4eba-4977-8eb7-5bcac7c38541" />

<img width="750" height="397" alt="Tracker Window 상세" src="https://github.com/user-attachments/assets/27999d2b-dd44-4c21-bc89-5e2b43fc4df6" />

---

# 에디터 경고 안내

에디터에서 PlayMode 테스트 중 Stop 호출 시 다음 로그가 발생할 수 있습니다.

```
[Powerful] An object that failed to pass through the pool was forcibly destroyed.
→ LogWarning

[Powerful] Handle is invalid or has already been returned.
→ LogError
```

이는 에디터 Stop 시 발생하는 노이즈 로그이며 무시해도 안전합니다.  
단, Dev Build 또는 정상 실행 중 동일한 메시지가 발생한다면 풀 반환 사이클 설계를 확인하시기 바랍니다.

---
