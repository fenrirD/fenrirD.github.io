---
slug: js-asynchronous
title: js 비동기 프로그래밍
authors: [fenrir]
tags: [batch, react, 기술면접]
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import SyncTest from '@site/src/components/SyncTest';

## 도입

---

Q. js에서 비동기 대해 설명해주세요

A. 네? 비동기요? 비동기가 어떻게 이루어지는 지를 말씀히시는건가요?

Q. 네 뭐든요.

A. 이벤트 루프 어쩌구 저쩌구 프로미스 어저꾸 저쩌구 async, await 주저리주저리..

Q. 프로미스 이전에는 어떻게 비동기를 처리했죠?

A. 어.. 그러니까 음...(뇌는 하얗게 변함 🤯) 

Q. 콜백 지옥이라고 들어보셨죠?

A. 네. 콜백은 호출하는 함수를 파라미터로 전달에서 어떠한 동작이 끝나고 호출  

Q. 개발하시면서 콜백 지옥을 경험해본적은?

A. (이미 뇌는 멈췄다) 어... 그러니까...

Q. ...

A. ...

---

대략 이런 대화였다. 지금와서 생각해보면 js 특징과 js가 어떻게 비동기 처리를 하는지 알고있는지를 물어보려고 하신거 같다.
아마 실제 답을 할때는 내 스스로 정리도 안되고 내 머리속에서 떠다니는 단편적인 지식들을 조합해서 대답을 했다.

<!--truncate-->

지금 생각하면 어떤 기능을 개발하기에만 급급하고 그 기능을 구현할 때 사용하는 기본적인 지식 습득에는 관심이 없어서 대답을 저렇게 한거같다.
항상 어떤 개발을 할 때, 왜 사용하는지를 알고 해결하고 끝이 아닌 정리를 하지 않으면 기술면접에서는 영원히 불합격할거 같다.

 

## Javascript 특징이 뭐에요?

에? js에 특징이요? 어... 그러니까 js는 *인터프리터 언어*이고 *싱글 스레드* 뭐 블라블라 라고 대답을 하겠다.  
js 비동기 프로그래밍에서 중요한건 *싱글 스레드*이다. js가 싱글 스레드라는 의미는 작업이 시작되면 이 작업이 완료되기 까지 다른 작업을 할 수 없다.

왜곡된 설명을 하자면 한 식당이 있다. 이 식당의 기본적인 프로세스는 주문 -> 요리 -> 서빙 순으로 진행된다. 이 식당에 근로자가 1명이라면? 
첫번째 손님이 오면 근로자는 위에 프로세스대로 일을 한다. 서빙을 마치고 두번째 손님이 왔다면 다시 위 프로세스를 진행한다.
만약 요리하는 와중에 세번쨰 손님이 오면 이 손님은 주문을 하려해도 근로자가 서빙까지 마치고나서야 주문을 할 수 있다는 것이다.

즉 js는 한번에 하나의 일밖에 처리 못하는 `single Thread`다  

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

## 비동기 프로그래밍
비동기 프로그래밍이란 어떤 작업이 완료 될 때까지 기다리지 않고 다른 작업을 수행 하는것이다.  
엥? 근데 js는 싱글 스레드다. 어떻게할까? 

javascript 엔진과 V8 구조에 대해서 어느정도 이해가 필요하다.

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
  
아래 코드를 보면서 이해를 해보자.


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
<SyncTest>
</SyncTest>

```mdx-code-block
</BrowserWindow>
```
아까 본 코드를 실행해보면 조리 시간과 상산없이 피자, 치킨, 물이 출력되는데 위 코드의 실행순서를 그림으로 보면 아래와 같다.



## 콜백 지옥


## Promise

## async / await


## JS 엔진 구조
<BrowserWindow>

<SyncTest>
</SyncTest>

</BrowserWindow>