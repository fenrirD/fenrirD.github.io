---
slug: react-batch
title: React Batch?
authors: [fenrir]
tags: [React, Batch, 기술면접]
---

## 도입
---

Q. React로 개발을 하셨는데 한 함수(Event Handler) 내에서 같은 상태를 2번 변경하면 어떻게 되나요? 그리고 랜더링은 몇번 이루어 지나요?  
A. 음..? (왜 똑같은 상태를 2번 바꾸지? 의미가 있나?) 어.. 일단 마지막에 변경된 값으로 상태가 변합니다. 랜더링은 1번 이루어 질거라고 생각합니다.  
Q. 왜요?  
A. 어... 그러니까.. 음 한번도 같은 상태를 연속으로 바꾼적이... 아마 지연?  
Q. 아.. 네

---

위 Q&A는 내가 면접 때 질문을 듣고 대답한 내용이다.  
내가 FE 개발자로 React를 공부했다고 하면서 이런 질문에 다시는 얼버무리지 않기 위해 정리하고자 한다.

> State 업데이트는 **비동기적**일 수도 있습니다.  
React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리할 수 있습니다.

## Batch?

Batching 이란? React가 더 나은 성능을 위해 *여러 상태 업데이트를 단일 재랜더링으로 그룹화* 하는 경우이다.
쉽게 생각해서 다이소에서 물건 10개를 살 때, 모든 물건의 값을 지불하는게 아닌 물건 각각 계산을 해서 영수증을 10개를 받게 된다면 얼마나 비효율적인지 생각하면 쉽다.
그래서 React 도 상태가 변경 될 때마다 DOM을 다시 그리는게 아닌 변경된 상태를 한번에 DOM에 반영하는 것이다.

```jsx live

function Counter() {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  
  useEffect(()=>setRenderCount(c=>c+1),[count])
  
  const click =() =>{
    setCount(c=>c+1);
    setCount(c=>c+1);
    setCount(c=>c+1);
  }
  
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={click}>Add</button>
      <h2>render Counter: {renderCount}</h2>
    </div>
  );
}

```

`add` 버튼을 누르면 `count`는 3이 증가하고 `renderCount`는 1증가한다. 즉 상태는 3번의 변경이 있었지만 실제 DOM에 반영된 횟수는 1번이고 React는 상태를 일괄 적으로 처리한다는걸 알수 있다.
일괄 처리는 React의 `Transation` 객체를 통해 이루어 진다. 내가 이해한 바로는 상태변경은 컴포넌트의 모든 작업이 끝난 뒤에 발생을 하기 위해서 큐(queue)에 등록후 일괄 처리 한다는 것이다.    

:::tip
Transation 객체에 대해서는 자세한 내용은 아래 글을 참조.  
[Naver D2- React의 작동 방법](https://d2.naver.com/helloworld/9297403#ch1-3)
:::

그렇다고 모든 상태 변경에 대한 처리가 일괄처리 되는것은 아니다.  

```jsx live

function Counter() {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  
  useEffect(()=>setRenderCount(c=>c+1),[count])
  
  const click = () => {
    setTimeout(()=>{
      setCount(c=>c+1)
      setCount(c=>c+1);
      setCount(c=>c+1);
    }, 0);
    
  }
  
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={click}>Add</button>
      <h2>render Counter: {renderCount}</h2>
    </div>
  );
}

```

위 코드를 실행하면 `renderCount`가 `setCount` 횟수만큼 증가한다.  
즉 Batching은 `Promise`, `setTimeout`, `native Event Handler` 등은 일괄 처리 되지 않는다.

### Automatic Batch
:::info
React 18 버전 부터는 `Automatic Batch` 을 지원한다.  
[공식 문서 - Automatic Batching](https://ko.reactjs.org/blog/2022/03/29/react-v18.html#new-feature-automatic-batching)
:::

이 글에 React 18버전의 Auto Batching이 어떻게 이루어지는지 코드 블럭을 통해 작성하고 싶지만 현재 Docusaurus의 버전이 17버전이므로 18버전으로 작성된 [React18 -Automatic Batch 예제](https://codesandbox.io/s/great-babycat-p98g6x)
위 샌드박스에서 `add` 버튼을 누르면 17버전과 다르게 `renderCounter`가 1번만 증가 하는거를 알수 있다.

### Batch 를 사용하지 않으려면?

batch를 원하지 않을 때가 있다. 그런 경우가 뭐가 있을까? 음.. 생각이 안난다. 아무튼 예제 코드는 작성해본다.

```jsx 
import { flushSync } from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  
  useEffect(()=>setRenderCount(c=>c+1),[count])
  
  const click = () => {
    flushSync(()=>setCount(c=>c+1))
    flushSync(()=>setCount(c=>c+1))
  }
  
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={click}>Add</button>
      <h2>render Counter: {renderCount}</h2>
    </div>
  );
}

```
[flushSync를 사용해서 Automatic Batch 비활성화](https://codesandbox.io/s/summer-sun-w1kqsp?file=/src/App.js)
:::info
`flushSync`는 react 18 부터
:::

## 결론
공부한 내용을 바탕으로 Q&A를 다시 해본다면 아마 이렇게 답을 할거같다.

---
Q. React로 개발을 하셨는데 한 함수(Event Handler)내에서 같은 상태를 2번 변경하면 어떻게 되나요? 그리고 랜더링은 몇번 이루어 지나요?  
A. (자신감 있게) 네. 같은 상태를 2번 변경해도 React의 `Batch` 로 인해 상태 업데이트를 일괄 처리하기 때문에 상태는 2번 변경되지만 랜더링 자체는 1번만 됩니다.    
Q. 일괄 처리 된다고요? 그러면 비동기요청은요?  
A. 네. 비동기 요청의 경우에는 현재 사용하는 *React Version*에 따라서 달라집니다. 18버전 이전의 경우에는 비동기 요청의 콜백 함수에 상태 변경이 있는 횟수만큼 랜더링 됩니다. 하지만 18 버전에는 Automatic Batch가 추가 되면서
비동기 요청의 콜백에 상태 변화가 몇번이 발생해도 일괄 처리 대기 때문에 랜더링은 1회만 발생합니다. 또한 18버전에서 자동으로 일괄처리 되는것을 막기위해 `flushSync`를 사용합니다.
Q. 오호. 합격!
---

이라는 시나리오를 쓰면서 글을 마무리한다.

참조
> [React 18 Automatic Batch](https://github.com/reactwg/react-18/discussions/21)
> [Naver D2 기술 블로그](https://d2.naver.com/helloworld/9297403#ch2)










