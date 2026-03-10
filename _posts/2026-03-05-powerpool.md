---
categories: sdks
title: "Power Pool"
layout: single
classes: wide
read_time: true
excerpt: "Pure Unity에서 가능한 '최고 성능 Pooling 시스템'"

tags:
  - Unity
  - OpenSource
  - C#
---

# PowerPool – High-Performance Unity Object Pooling SDK

![](https://img.shields.io/badge/unity-2021.3%2B-black)
![](https://img.shields.io/badge/license-MIT-blue)

> **PowerPool**은 Unity를 위한 **고성능 오브젝트 풀링 프레임워크**임.
> **zero-allocation runtime**, **O(1) 반환 복잡도**,  
> 그리고 **메모리 안전 라이프사이클 제어**를 목표로 설계되었음.

**스택 기반 빌더 패턴**, **버전 기반 안전 검증**,
그리고 **캐시 친화적 데이터 구조**를 결합하여  
PowerPool은 기존 풀링 구현에서 흔히 발생하는 **GC 비용**이나
**런타임 조회 오버헤드 없이** 매우 효율적인 객체 생성을 처리.

단순히 오브젝트를 enable/disable 하는 기존 풀링 시스템과 달리
PowerPool은 **성능**, **메모리 안정성**, **개발 편의성**을 중심으로   
설계된 **완전한 라이프사이클 아키텍처**를 제공함.

<img width="797" height="90" alt="image" src="https://github.com/user-attachments/assets/67a707ab-46cb-4bb6-bc4a-39dfe6650b54" />  

`https://github.com/NightWish-0827/PowerPool.git?path=/com.nightwishlab.powerpool`  

UPM Add package from git URL

---

# Table of Contents

* [Core Features](#core-features)

* [API Reference & Usage](#api-reference--usage)

* [Lifecycle & Internal Architecture](#lifecycle--internal-architecture)

* [Telemetry & Runtime Statistics](#telemetry--runtime-statistics)

* [Performance Comparison](#performance-comparison)

* [Editor Supports](#editor-supports)

* [Editor Case](#editor-case)

* [마치며](#마치며)

---

# Core Features

### Zero Allocation Fluent Builder

PowerPool은 `ref struct` 기반의 **스택 할당 빌더 패턴**을 도입했음.

이를 통해 **위치**, **회전**, **부모 Transform**, **초기화 콜백** 등의
스폰 설정을 **fluent API** 형태로 구성할 수 있음.

이 과정에서 **힙 할당이 전혀 발생하지 않음**.

---

### GC-Free Runtime Operation

객체 **Rent** 및 **Return** 연산은 완전히 **allocation-free**로 동작함.

반환 핸들은 경량 구조체인
`readonly struct PoolHandle<T>`로 구현되어 있음.

이를 통해 풀링 과정에서 **GC 스파이크가 발생하지 않도록 보장함**.

---

### O(1) Return Complexity

일반적인 풀링 시스템은 객체 반환 시
어떤 풀에 속한 객체인지 판단하기 위해 **Dictionary 조회**가 필요함.

PowerPool은 이러한 오버헤드를 제거했음.

각 `PoolHandle<T>`는 내부적으로
자신을 생성한 **Pool 인스턴스에 대한 직접 참조**를 보유함.

따라서 객체 반환은 **항상 O(1) 상수 시간**으로 수행됨.

* 해시 조회 없음
* 타입 검사 없음
* 런타임 풀 탐색 없음

---

### Anti-Zombie Object Protection

풀링 시스템에서 가장 위험한 버그 중 하나는
**Zombie Reference 문제**임.

이는 이미 풀로 반환된 객체를 코드가 계속 접근하는 상황을 의미함.

PowerPool은 **generation 기반 검증 시스템**을 통해
이 문제를 원천적으로 방지함.

각 풀링 객체는 **PowerPoolTracker**를 통해
단조 증가하는 **Version 값**을 관리함.

핸들이 발급될 때

* 현재 Version이 핸들에 복사됨
* 반환 시 Tracker Version이 증가함

이미 반환된 핸들이 접근을 시도하면

* Version 불일치가 감지됨
* 해당 연산이 차단됨
* 설정에 따라 Warning 또는 Exception이 발생함

---

### Cache-Friendly Parallel Array Architecture

PowerPoolCore는 내부적으로 **Parallel Array 구조**를 사용함.

```
_items[]      → 풀링된 컴포넌트
_trackers[]   → 라이프사이클 트래커
```

두 배열은 동일한 인덱스를 공유함.

이를 통해 매우 빠른 조회와
캐시 친화적인 반복 처리가 가능함.

이 **데이터 지향 구조(Data-Oriented Structure)**는
일반적인 OOP 기반 풀링 구현보다 훨씬 높은 성능을 제공함.

---

### Zero Runtime GetComponent Overhead

`IPoolCleanable` 인터페이스를 구현한 컴포넌트는
객체 생성 시 **단 한 번만 캐싱**됨.

```
GetComponentsInChildren<IPoolCleanable>(true)
```

이 과정은 **prewarm / instantiate 시점**에만 수행됨.

객체가 풀로 반환될 때는

```
OnReturnToPool()
```

메서드가 캐싱된 배열을 통해 **직접 호출됨**.

따라서 런타임에서 **추가적인 GetComponent 탐색이 발생하지 않음**.

---

### Independent Prefab Pool Isolation

PowerPool은 풀을 구분할 때
컴포넌트 타입 `<T>`뿐 아니라
**Prefab InstanceID**도 함께 사용함.

```
prefab.gameObject.GetInstanceID()
```

이를 통해 동일한 컴포넌트를 사용하더라도
서로 다른 프리팹은 **항상 독립된 풀로 관리됨**.

예시

```
SlimePrefab  → Pool A
OrcPrefab    → Pool B
```

두 프리팹 모두 `Monster` 스크립트를 사용하더라도
풀은 완전히 분리되어 동작함.

---

### Ghost Object Tracking

풀링 객체가 외부에서 `Destroy()` 호출로 제거되거나
씬 전환 과정에서 파괴될 경우

PowerPoolTracker가 이를 자동으로 감지함.

```
OnUnexpectedDestroyed
```

이를 통해 개발자는

* 라이프사이클 오류
* 메모리 누수 가능성
* 풀 상태 손상

등의 문제를 빠르게 파악할 수 있음.

---

# API Reference & Usage

PowerPool API는 **세 가지 핵심 개념**을 중심으로 설계되었음.

* **Fluent Spawn Builder**
* **Handle 기반 라이프사이클 관리**
* **안전하고 결정적인 객체 반환**

기존 풀링 API가 단순한 static 함수 집합을 제공하는 것과 달리
PowerPool은 **구조화된 스폰 파이프라인**을 제공함.

이를 통해 객체 생성 과정이

* **명확하고**
* **안전하며**
* **할당 없이 동작하도록 설계되었음**

---

## Fluent Spawn Builder

객체는 **fluent builder 파이프라인**을 통해 생성됨.

빌더는 **`ref struct`**로 구현되어 있음.

이는 다음을 보장함.

* **스택 전용 할당**
* **Zero GC Pressure**
* **즉시 실행**

`ref struct`는 저장하거나 캡처할 수 없기 때문에
API 사용 패턴 역시 **자연스럽게 one-shot 형태로 유도됨**.

```csharp
PoolHandle<MyComponent> handle =
    PowerPool.Spawn(myPrefab)
        .At(position, rotation)
        .Under(parentTransform)
        .Rent();
```

이 구조는 **가독성을 유지하면서도
중간 힙 할당을 완전히 제거함**.

---

## Spawn Configuration Pipeline

최종 `Rent()` 호출 이전에
빌더를 통해 다양한 스폰 설정을 구성할 수 있음.

### Transform Placement

```csharp
var handle = PowerPool.Spawn(prefab)
    .At(spawnPosition, spawnRotation)
    .Under(parentTransform)
    .Rent();
```

지원되는 Transform 설정

* spawn position
* spawn rotation
* optional parent transform

---

### Initialization Callbacks

`With()` 또는 `WithState()`를 통해
스폰 시점에 추가적인 상태 값을 전달할 수 있음.

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

이 패턴을 통해

* 추가 컴포넌트 탐색 없이
* 글로벌 상태에 의존하지 않고

**객체 초기화 데이터를 직접 주입할 수 있음**.

콜백을 `static`으로 선언할 경우
**클로저 할당 또한 발생하지 않음**.

---

## Handle-Based Lifecycle

PowerPool은 객체를 직접 반환하지 않고
**`PoolHandle<T>`**를 반환함.

```csharp
PoolHandle<MyComponent> handle = PowerPool.Spawn(prefab).Rent();
```

핸들에는 다음 정보가 포함됨.

* **source pool 참조**
* 객체의 **tracker**
* 발급 시점의 **version**

이를 통해 시스템은 다음과 같은 잘못된 사용을 감지할 수 있음.

* double return
* zombie reference
* stale handle

---

## Returning Objects

객체 반환은 여러 방식으로 수행할 수 있음.

---

### Explicit Return

```csharp
PowerPool.Return(ref handle);
```

`ref` 반환 패턴을 사용하여
반환 즉시 핸들이 **무효화되도록 보장함**.

---

### Instance Method Return

```csharp
handle.Return();
```

핸들이 지역 변수로 존재할 때
가장 일반적으로 사용되는 방식임.

---

### Scoped Lifetime (using)

핸들은 `IDisposable`을 구현하고 있음.

```csharp
using (var fx = PowerPool.Spawn(effectPrefab).Rent())
{
    // temporary effect
}
```

스코프가 종료되면
객체는 **자동으로 풀로 반환됨**.

---

## Resetting Objects with IPoolCleanable

객체는 `IPoolCleanable` 인터페이스를 구현하여
자신의 초기화 로직을 정의할 수 있음.

```csharp
public class MyEntity : MonoBehaviour, IPoolCleanable
{
    public void OnReturnToPool()
    {
        // Reset state
        // Clear buffs
        // Restore HP
    }
}
```

PowerPool은 반환 과정에서
`OnReturnToPool()`을 자동 호출함.

이 과정에서 런타임 비용을 줄이기 위해
필요한 컴포넌트는 **객체 생성 시점에 한 번만 캐싱됨**.

---

## Prewarming and Pool Registration

풀은 최초 Spawn 시 **Lazy Initialization**으로 생성될 수 있음.

하지만 일반적으로는 초기화 단계에서
**Prewarm을 수행하는 것이 권장됨**.

```csharp
PowerPool.Register(prefab, initialCapacity, poolRoot);
```

선택 파라미터를 통해 다음을 설정할 수 있음.

* initial capacity
* pool root transform
* maximum pool size
* overflow policy

예시

```csharp
PowerPool.Register(
    prefab,
    initialCapacity: 32,
    poolRoot: poolTransform,
    maxPoolSize: 256,
    overflowPolicy: PowerPoolOverflowPolicy.Expand);
```

Prewarm을 통해
런타임 Instantiate로 인한 **프레임 스파이크를 방지할 수 있음**.

---

## Runtime Statistics

PowerPool은 `PowerPoolStats`를 통해
상세한 런타임 통계를 제공함.

```csharp
if (PowerPool.TryGetStats(prefab, out var stats))
{
    Debug.Log(
        $"Created={stats.TotalCreated}, " +
        $"InPool={stats.InPool}, " +
        $"Active={stats.ActiveEstimated}");
}
```

제공되는 통계

* 생성된 총 객체 수
* 활성 객체 수
* 풀 내부 객체 수
* rent / return 호출 횟수
* pool capacity
* expansion 이벤트
* overflow 정책

이를 통해 개발자는
**런타임 풀 동작과 메모리 사용량을 분석할 수 있음**.

---

## Asynchronous / Delayed Return Patterns

코루틴, 타이머, async 로직 등
지연 반환이 필요한 경우 핸들을 안전하게 저장할 수 있음.

```csharp
var handle = PowerPool.Spawn(prefab).Rent();

StartCoroutine(ReturnLater(handle, 2f));
```

코루틴 내부

```csharp
PowerPool.Return(ref handle);
```

핸들은 내부적으로 **version 및 ownership 정보를 추적**하기 때문에
잘못된 반환이나 중복 반환 상황에서도 시스템 안전성이  
유지됨.

---

### In Practice

PowerPool은 의도적으로 **유연한 설계**를 채택했음.

다음과 같은 다양한 상황에서 활용 가능함.

* 수동 라이프사이클 관리
* scoped temporary objects
* coroutine 기반 이펙트
* 고빈도 projectile 스폰
* 대규모 엔티티 시스템

Fluent Builder와 Handle 시스템은
**성능**, **안정성**, **API 가독성**을 동시에 유지하도록 설계되었음.

---

# Lifecycle & Internal Architecture

PowerPool은 구조화된 런타임 파이프라인을 통해
객체 라이프사이클을 관리함.

```
Pool Initialization
-------------------
PowerPool.Spawn(prefab)
→ Locate or create pool instance
→ Lazy initialization if necessary

Prewarm Phase
-------------
EnsureCapacity / PrewarmAdditional
→ Allocate pool memory ahead of time
→ Prevent runtime allocation spikes

Rent Phase
----------
PoolBuilder<T>.Rent()
→ Retrieve inactive object
→ Assign tracker version
→ Activate object

Return Phase
------------
PoolHandle.Return()
→ Version validation
→ Call IPoolCleanable reset hooks
→ Disable and return to pool

Overflow Handling
-----------------
When pool reaches MaxPoolSize:

Expand
→ dynamically allocate additional objects

DestroyOnReturn
→ destroy objects when returned if capacity exceeded
```

---

# Telemetry & Runtime Statistics

PowerPool은 `PowerPoolStats` 구조체를 통해
런타임 텔레메트리를 제공함.

개발자는 다음 정보를 모니터링할 수 있음.

* 생성된 총 객체 수
* 현재 풀 내부 객체 수
* 씬에서 활성 상태인 객체 수
* 예상치 못한 파괴 이벤트
* 런타임 풀 확장 횟수

이를 통해 팀은 **메모리 사용량과 풀 동작을 실시간으로 분석할 수 있음**.

---

# Performance Comparison

### 가비지 컬렉션 할당 비용 제거  

**PowerPool**은 `ref struct` 기반의 스택 할당 빌더 패턴을 도입하여  
객체 스폰 설정 시 힙 할당이 전혀 발생하지 않음.  

객체의 Rent 및 Return 연산 또한 완전히 **allocation-free**로 동작하며,  
이를 통해 풀링 과정에서 발생하는 GC 스파이크를 원천 방지함.  

### O(1) 반환 복잡도

**일반적인 풀링 시스템**은 객체 반환 시 어떤 풀에 속한 객체인지 찾기 위해  
**Dictionary 조회**  등의 추가적인 런타임 탐색이 필요.  

반면 **PowerPool**은 각 `PoolHandle<T>` 이 자신을 생성한 Pool 인스턴스에 대한 직접 참조를 보유하고 있어  
해시 조회, 타입 검사, 런타임 풀 탐색이 일절 필요 없는 O(1) 상수 시간으로 반환이 수행됨.

### 런타임 Resolve (Getter) 제거  

`IPoolCleanable` 인터페이스로 구현한 컴포넌트는 객체 생성 시점에서  
**단 한 번만 캐싱**

객체가 풀로 반환될 때 캐싱된 배열을 통해 직접 `OnReturnToPool()`
메서드가 호출되므로, 런타임 중에 추가적인 `GetComponent` 가 요구되지 않음.  

<img width="1600" height="1200" alt="unnamed (2)" src="https://github.com/user-attachments/assets/01236128-ef27-499a-a2d7-a310ddaba46c" />

---

# Editor Supports

> 에디터 레벨에서 **Tracker Window**를 제공함.
> 이를 통해 객체 상태를 추적할 수 있음.

<img width="447" height="276" alt="image" src="https://github.com/user-attachments/assets/579b2a3c-4eba-4977-8eb7-5bcac7c38541" />  

<img width="750" height="397" alt="image" src="https://github.com/user-attachments/assets/27999d2b-dd44-4c21-bc89-5e2b43fc4df6" />

---

# Editor Case

> **Editor**에서 **PlayMode 테스트**를 수행할 경우 다음과 같은 오류 또는 경고가 발생할 수 있음.

`[Powerful] An object that failed to pass through the pool was forcibly destroyed.`
: **LogWarning**

`[Powerful] Handle is invalid or has already been returned. (Tracer not found (default handle or external manipulation)`
: **LogError**

이는 **Editor Stop 호출 시 발생하는 노이즈 로그이며 무시해도 안전함**.

다만 Dev Build 또는 정상 종료 상황에서 해당 메시지가 발생한다면  
설계된 Pool Manager 또는 객체 반환 사이클 설계를 잘못했음을 의미함 

---

# 마치며

굉장히 오랫동안 사용하던 패턴을 SDK화 해서 제공하게 되었는데.... 
'LeanPool' 이라는 Pool SDK 신뢰도가 굉장히  
높다길래 제작해봄.  

WEBGL, 기타 프로젝트에서 TC 는 정상적으로 진행했으며,  
내부에 예제도 충분히 구현되어있음.  

당장 Prefab에 묵직한 걸 넣고, Profiler 켜서 커브를 확인해보자    

결과적으로, 이 SDK는 Unity 오브젝트 풀링을  
**안전하고**, **결정적이며**, **극도로 빠르게 만들기 위해 설계된 런타임 시스템임**.

**Zero-allocation 패턴**,
**Generation 기반 안전성 검증**,
**캐시 최적화 데이터 구조**를 결합하여

해당 SDK는 **고부하 런타임 환경에서도 안정적으로 동작하는 풀링 아키텍처**를 제공함.  

---
