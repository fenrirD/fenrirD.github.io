---
slug: js-asynchronous
title: js 비동기 프로그래밍
authors: [fenrir]
tags: [비동기, javascript, promise, event loop]
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import SyncTest from '@site/src/components/SyncTest';
import AsyncTest from '@site/src/components/AsyncTest';

## 도입

---

Q. js에서 비동기 대해 설명해주세요

A. 네? 비동기요? 비동기가 어떻게 이루어지는 지를 말씀히시는건가요?

Q. 네 뭐든요.

A. 이벤트 루프 어쩌구 저쩌구 프로미스 어저꾸 저쩌구 async, await 주저리주저리..

Q. Ajax 아시죠?

A. 네. Ajax는 비동기 통신을 위한 저는 JQuery 어저꾸 저쩌구 (뇌는 하얗게 변함 🤯)

Q. 콜백 지옥이라고 들어보셨죠?

A. 네. 콜백은 호출하는 함수를 파라미터로 전달에서 어떠한 동작이 끝나고 호출

Q. 개발하시면서 콜백 지옥을 경험해본적은?

A. (이미 뇌는 멈췄다) 어... 그러니까...

Q. ...

A. ...

---

대략 이런 대화였다. 지금 와서 생각해보면 JS 특징과 JS가 어떻게 비동기 처리를 하는지 알고 있는지를 물어보려고 하신 거 같다. 
아마 실제 답을 할 때는 나 스스로 정리도 안 되고 내 머릿속에서 떠다니는 단편적인 지식을 조합해서 대답했다.

<!--truncate-->

지금 생각하면 어떤 기능을 개발하기에만 급급하고 그 기능을 구현할 때 사용하는 기본적인 지식 습득에는 관심이 없어서 대답을 저렇게 한 거 같다.
항상 어떤 개발을 할 때, 왜 사용하는지를 알고 해결하고 끝이 아닌 정리를 하지 않으면 기술 면접에서는 영원히 불합격할 거 같다.

 

## 본론
### Javascript 특징이 뭐에요?

에? JS에 특징이요? 어... 그러니까 JS는 *인터프리터 언어*이고 *싱글 스레드* 뭐 블라블라 라고 대답하겠다.
JS 비동기 프로그래밍에서 중요한 건 *싱글 스레드*이다. JS가 싱글 스레드라는 의미는 작업이 시작되면 이 작업이 완료되기까지 다른 작업을 할 수 없다.

왜곡된 설명을 하자면 한 식당이 있다. 이 식당의 기본적인 프로세스는 주문 -> 요리 -> 서빙 순으로 진행된다. 이 식당에 근로자가 1명이라면?
첫 번째 손님이 오면 근로자는 위에 프로세스대로 일한다. 서빙을 마치고 두 번째 손님이 왔다면 다시 위 프로세스를 진행한다.
만약 요리하는 와중에 세 번째 손님이 오면 이 손님은 주문을 하려 해도 근로자가 서빙까지 마치고 나서야 주문을 할 수 있다는 것이다.

즉 JS는 한번에 하나의 일밖에 처리 못하는 `single Thread`다  

:::info
Thread: 스레드는 어떠한 프로그램이 실행되는 작업을 말함
:::

```js
function sleep (ms) {
  const loopTime = Date.now() + ms;
  while (Date.now() < loopTime) {
  }
}

function order(o) {
  cook(o)
}

function cook(o) {
  const ms = Math.floor(Math.random() * 10000) ;
  sleep(ms)
  serve(o, ms)
}

function serve(o, ms) {
  console.log("메뉴: " , o, "조리시간: ", ms/1000, "초")
}

order('피자')
order('치킨')
order('물')

```

<BrowserWindow>
피자

치킨  
물
</BrowserWindow>

위에 예시를 실행하면 항상 조리시간(ms) 상관없이 피자, 치킨, 물로 출력이 된다. 

### 비동기 프로그래밍
비동기 프로그래밍이란 어떤 작업이 완료 될 때까지 기다리지 않고 다른 작업을 수행 하는것이다.  
엥? 근데 js는 싱글 스레드다. 어떻게할까? 

javascript 엔진(V8)과  브라우저에 대해서 어느정도 이해가 필요하다.

[구조 사진 들어가는 곳]

* Stack
  * 스택은 우리가 잘 아는 자료구조의 하나인 스택과 비슷한 개념으로 함수를 호출하면 `stack`에 push 된다.
* Heap
  * js에 객체 등 메모리 할당이 발생하는 곳
* Web API
  * DOM, AJAX, 등 브라우저가 제공하는 API
* callback queue
  * DOM, AJAX, 등의 이벤트가 끝난 후 `queue`에서 대기한다.

* Event Loop
  * Event Loop는 *Stack*이 비어있으면 queue에 있는 함수를 Stack으로 전달한다.

:::info
callback queue는 **microtask queue** 와 **macrotask queue**가 존재하고 우선 순위도 다르지만 자세한 설명은 생략한다. 
:::
위 구조를 이해하기 위해 간단한 예제인 아래 코드를 보면서 이해를 해보자.

#### 동기 (진동기 부회장 아님)

```mdx-code-block
<BrowserWindow>
```

```jsx
const SyncTest = () => {

  const [foods, setFoods] = useState([]);

  function sleep(ms) {
    const loopTime = Date.now() + ms;
    while (Date.now() < loopTime) {
    }
  }

  function order() {
    const foods = ['피자', '치킨', '물'];
    foods.forEach(cook);
  }

  function cook(food) {
    const ms = Math.floor(Math.random() * 10000);
    console.log('조리 시간:', ms);
    sleep(ms);
    serve(food, ms);
  }

  function serve(food, time) {
    time = time / 1000;
    setFoods((old) => [...old, {food, time}]);
    console.log("서빙 : ", food);
  }

  return (
    <div style={{display: 'flex', flex: '1', flexDirection: 'column'}}>
      <div onClick={order} style={{display: 'flex', flexDirection: 'column'}}>
        <button> 주문</button>
      </div>
      <hr/>
      <div>
        {
          foods.map(({food, time}, idx) => <div key={"food_" + idx}>음식:{food}, 시간: {time} 초</div>)
        }
      </div>
    </div>
  )
}
```
<SyncTest >
</SyncTest>

```mdx-code-block
</BrowserWindow>
```
아까 본 코드를 실행해보면 조리 시간과 상관없이 피자, 치킨, 물이 출력되는데 위 코드의 실행순서를 그림으로 보면 아래와 같다.

[JS 구조와 실행순서 그림(동기)]

1. `onClick` Event 실행 되고, 큐에 할당되고, 스택이 비어있으므로 바로 스택에서 실행된다.   
2. `order` 함수가 스택에 쌓이고, `cook` 함수를 호출한다.
3. `cook` 함수가 스택에 쌓이고, `sleep` 함수를 호출한다.
4. `sleep` 함수에서 인자로 받은 값 만큼 대기하고, `sleep` 함수가 스택에서 제거된다.
5. `serve` 함수를 호출하고, `log` 출력 후, 스택에 쌓인 함수들이 순차적으로 제거된다.
6. 위 과정을 `foods` 길이 만큼 반복한다.

#### 비동기

```mdx-code-block
<BrowserWindow>
```

```jsx
const AsyncTest = () => {

  const [foods, setFoods] = useState([]);

  function order() {
    const foods = ['피자', '치킨', '물'];
    foods.forEach(cook);
  }

  function cook(food) {
    const ms = Math.floor(Math.random() * 10000);
    console.log('조리 시간:', ms);
    setTimeout(()=> {
      serve(food, ms)
    },ms)
  }

  function serve(food, time) {
    time = time / 1000;
    setFoods((old) => [...old, {food, time}]);
    console.log("서빙 : ", food);
  }

  return (
    <div style={{display: 'flex', flex: '1', flexDirection: 'column'}}>
      <div onClick={order} style={{display: 'flex', flexDirection: 'column'}}>
        <button> 주문</button>
      </div>
      <hr/>
      <div>
        {
          foods.map(({food, time}, idx) => <div key={"food_" + idx}>음식:{food}, 시간: {time} 초</div>)
        }
      </div>
    </div>
  )
}

```

<AsyncTest />

```mdx-code-block
</BrowserWindow>
```

[Timeout을 실행 방법]

1. `onClick` Event 실행 되고, 큐에 할당되고, 스택이 비어있으므로 바로 스택에서 실행된다.
2. `order` 함수가 스택에 쌓이고, `cook` 함수를 호출한다.
3. `cook` 함수가 스택에 쌓이고, `serve`함수는 `setTimeout`에 의해 브라우저의 `WebAPI` 에서 `ms` 후에 실행 된다.
4. `cook` 함수가 스텍에서 제거된다.
5. 위 과정을 `foods` 길이 만큼 반복한후, `order` 함수도 스택에서 제거된다.
6. `setTimeout`이 `ms` 값에 따라 실행된 순서대로, 큐에 쌓인다.
7. 스택이 비어 있으면 이벤트 루프에 의해 스택에 쌓이고 `serve` 함수를 호출한다.
8. `log` 출력 후, `serve`가 제거된다.
9. 6~8번의 과정이 큐에 값이 없을 때 이벤트 루프에 의해 까지 반복 된다.

---

위에 두 코드의 가장 큰 차이점은 `sleep` 과 `setTimeout`을 통한 지연이다. `sleep`의 경우 스택에서 실행되어 지연되고 `setTimeout`은 브라우저의 WebAPI 통해 실행된다.

즉 JS에서 비동기 처리는 브라우저의 WebAPI 에서 실행되고, 실행이 끝난후 큐에 쌓이고, 이벤트 루프에 의해서 스택이 비어있으면 스택에 쌓인뒤 실행된다는 것을 알수있다.

> 스택에 쌓인뒤 실행되는 함수를 콜백 함수라고 한다. 

### 콜백
콜백이란 특별한 의미가 아닌 당장 실행되지 않고 미래에 실행하는 단순한 의미이다. 비동기 프로그래밍은 언제 해당 함수의 처리가 완료 될지 모르므로
해당 함수가 종료 된 후, 그 다음 함수를 실행하기 위해 파라미터를 함수로 인자로 전달한뒤, 해당 로직이 끝난 후 실행하는것을 보장하기 위한 방법이다.

* callback을 사용하는 예시
```js
// forEach에서 사용하는 callback
[1,2,3].forEach(n=>{
  console.log(n)
})

// setTimeout에서 사용하는 callback
setTimeout(()=>{
  callback()
},0)

function func1(num, callback) {
  console.log('func1')
  num += 1;
  callback(num)
}

function call(){
  func1(0, num=>
        console.log(num)
  )
}

call()

```

> js에서 함수도 object이므로 파라미터로 전달하는게 가능하다 

그리고 비동기 관련 질문에서 빼놓을수 없는게 콜백 지옥(👹)이다.

#### 콜백 지옥
콜백 지옥은 무수히 많은 콜백으로 인해 코드가 직관적이지 않고 가독성이 떨어지는 상황이다.

* 이미지를 로드하고 그리는 상황에 예시
```js
getImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B8c7i0OCqgXJiV7al7cTXiaAjDWEHharTg&usqp=CAU",(img,err)=>{
  if(err){
    throw new Error(err)
  } else {
    resizeImage(img, (img, err)=>{
      console.log(img, img.width, img.height)
    })  
  }
})
```
위 코드는 이미지를 불러오고 사이즈를 재조정하는 코드이다. 음 아직까지는 읽을만하다.🙄

아래 코드를 살펴 보자
```js

getImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B8c7i0OCqgXJiV7al7cTXiaAjDWEHharTg&usqp=CAU",(img,err)=>{
  if(err){
    throw new Error(err)
  } else {
    resizeImage(img, (img, err)=>{
      if(err) {
        throw new Error(err)
      } else {
        applyFilter(img, (img, err)=> {
          if(err) {
            throw new Error(err)
          } else {
            saveImage(img, (img, err)=> {
              if(err) {
                throw new Error(err)
              } else {
                console.log('Save Image')
              }
            })
          }
        })
      }
    })
  }
})

```

위 코드는 이미지를 불러오고, 사이즈를 조정하고, 필터를 씌우고, 이미지를 저장하고, 출력한다.

... 점점 복잡해 진다.🤯   
만약 여기서 더 기능을 추가하면 수 많은 `})`를 보게 되고, 코드의 가독성은 점점 줄어든다.
위 코드처럼 *~~콜백에 콜백에 콜백을 더해서 어머 깜짝이야~~* 하는 상황이 콜백 지옥이다.

엥? 콜백 지옥을 어떻게 벗어남?
:::info
콜백 지옥에서 벗어나는 방법:
[Callback hell](http://callbackhell.com/) 
:::

### Promise (🤙)
위와 같이 **Callback Hell** 을 벗어나기 위해서 ES6에서 나온 문법이 `Promise`다.

> 프로미스는 어느 시점에 비동기 작업의 최종 완료 혹은 실패에대한 결과값을 나타낸다.

#### 프로미스 문법
프로미스 객체는 `callback`을 받는 생성자를 통해 사용가능하며 파라미터로는 `resolve` 와 `reject`를 사용한다.

```js
new Promise((resolve, reject)=>{})
```
<BrowserWindow>

Promise   
[[PromiseState]]: 'pending'  
[[PromiseResult]]: undefiend
</BrowserWindow>

위를 콘솔창에 실행하면 `PromiseState`와 `PromiseResult` 값을 반환한다.

`PromiseState`는 `pending`이고, `PromiseResult`는 `undefiend` 값을 갖고 있다.
`PromiseState`와 `PromiseResult`를 통해 무언가를 하지 않는다.
하지만 `Promise`가 어떤 상태를 값을 갖고 그 상태 값의 의미는 알아야 한다.

#### 프로미스의 상태

프로미스의 상태는 `pending`, `fulfilled`, `rejected`를 갖고 있다.

* ⏳`pending`: Promise는 해결(fulfilled) 혹은 실패(rejected)되지도 않고 대기중인 상태
* ✔`fullfilled`: Promise가 해결(resolve)된 상태
* ✖ `rejected`: 어떤 이유로 Promise가 실패(rejected)한 상태

```js
new Promise((resolve, reject)=>{
  if(true) {
    resolve("성공")
  } else {
    reject("실패")
  }
})

```

위 코드를 실행해보면 아래와 같은 값을 볼 수 있다.
<BrowserWindow>

Promise   
[[PromiseState]]: "fulfilled"  
[[PromiseResult]]: "성공"
</BrowserWindow>



#### 프로미스로 콜백지옥을 벗어나자.

* 프로미스의 상태는 `pending`, `fullfilled`, `rejected`를 갖음
* `resolve`, `reject`
* `then`, `cacth`, `finally`
* 사실 callback queue 에는 두가지 task queue가 존재함 
  * microtask queue
    * promise, process.nextTick, queueMicrotask
  * macrotask queue
    * setTimeout, setInterval, setImmediate
  * 우선순위는 마이크로태스크 큐가 더 높음
* ES6에서 두두등장

#### 프로미스의 우선순위

```js
console.log('first log')

setTimeout(()=>{console.log("timeout log")},0)

Promise.resolve("Promist log").then((res)=>console.log(res))

console.log('final log')

```
위에 실행 결과는 어떻게 될까?
<BrowserWindow>

first log  
final log  
Promist log  
timeout log  

</BrowserWindow>


### async / await

* ES7에 두두등장 ( Promise는 ES6에서 등장함)
* 사용법은 `async`는 function 앞페 `await`은 `promise`를 리턴받아야함!
* `async`는 프로미스를 리턴함

### 제너레이터 

## 결론
Javascript에서 비동기에 관련해서 깊고 더 깊이 설명하기 위해서는 많은 공부가 필요하다. 사실 면접관님도 나에게 도움을 주고자 힌트를
많이 던져주셨지만 힌트를 방어 코드로 거부했다. 그 이유로는 내가 과정보다는 결과에만 급급해서 코딩을 하기 떄문인거 같다.

그리고 비동기 관련해서는 모든 내용을 완성하고 싶지만 `Promise`, `async/ await`, `제너레이터`는  사용해 보고, 
대충 알지만 글로 정리하기 위해서는 스스로 아는 개념을 확인도 하고, 부족한 내용을 채우고, 아는 내용은 서로 연결하는 과정이 필요하다.
그래서 추후에 작성을 하려고 한다.

그건 그렇고 면접 때 받은 질문을 다시 각색해보자.

---

Q. js에서 비동기 대해 설명해주세요

A. 네? 비동기요? 비동기가 어떻게 이루어지는 지를 말씀히시는건가요?

Q. 네 뭐든요.

A. 네. JS는 싱글 스레드를 특징으로 갖고 있습니다. 싱글 스레드는 한번에 하나의 처리 밖에 못하므로 JS에서 비동기를 이해하기 위해서는 먼저 
JS 엔진(V8)과 브라우저의 WebAPI에 대해서 이해야합니다. JS엔진에는 메모리가 할당되는 `heap` 영역과 `Call Stack`이 존재하고 호출 된 함수는 
`Call Stack`영역에서 처리합니다. 하지만 비동기 처리 `DOM EVENT`, `AJAX`, `Timer` 등 브라우저의 WebAPI에서 실행됩니다. WebAPI에서 실행이
끝난 후 브라우저의 `callback queue`에서 대기 하고, `Event Loop`는 `Call Stack`이 비어있으면 `callback queue`에서 대기중인 콜백 함수를
`Call Stack`에 푸쉬하고 JS 엔진은 콜백을 실행합니다.😎

Q. 콜백이나 콜백 지옥은 아시나요?(😒)

A. 네. 콜백 자체의 의미는 단순히 즉시 실행하는게 아닌 미래에 실행되는 의미로 아까 설명한대로 비동기 처리가 끝난 후, 실행되는 함수를 콜백이라고 할 수 있습니다.
그리고 콜백 지옥은 콜백에 콜백이 이루어져서 피라미드 구조를 갖게되어 해당 코드에 대해 직관성이 떨어지고, 유지 보수가 어렵게 되어 생산성을 떨어트립니다. 
콜백 지옥을 회피하기 위한 방법으로 코드를 얕게 유지, 모듈화를 통한 방법이 있습니다. 또한, ES6에서는 `promise`를 사용해서 Chain 구조를 사용하여 회피 할 수 있습니다.😎

Q. 개발하시면서 콜백 지옥을 경험해본적은?

A. 제가 경험한 프로젝트에서 휴대폰으로 사진을 찍고, 해당 사진을 `Crop` 하여 갤러리에 저장하고, 그 저장한 이미지를 서버에 전송하는 프로세스가 있었습니다.
당시에는 `Promise`를 사용하여 처리를 했던 기억이 있습니다.😎

Q. 😲

---

이라는 시나리오를 쓰면서 글을 마무리한다.

참조
> [Callback Hell](http://callbackhell.com/)  
> [Introducing asynchronous JavaScript](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Introducing#%EC%BD%9C%EB%B0%B1)  
> [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)  
> [javascript-visualized-event-loop-3dif](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)  
> 
