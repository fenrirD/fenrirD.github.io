---
slug: js-hoisting
title: js 호이스팅
authors: [fenrir]
tags: [javascript, hoisting, var, let, const]
---

import BrowserWindow from '@site/src/components/BrowserWindow';

## 도입
---
![Example banner](./hoisting_img_1.jpg)

JS에서 사용되는 개념인 **Hoisting** 에 대해서 정리를 하고자 한다.
:::warning
둘리의 호잇 아닙니다.
:::
---

**MDN**에서 아주 친절하게 누군가 물어보면  **"변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는 것"** 이렇게 설명 하라고 작성되어 있다.

<!--truncate-->

## 본론

### 호이스팅

**MDN**에서 설명 해준 내용을 읽고, 아래의 코드의 실행 결과를 예상해보자.

```js

console.log("hello", name);

printAge(17)

var name = "Lee"

function printAge(age) {
  console.log('age:',age);
}

```
위 코드는 아래와 같이 출력한다. 

<BrowserWindow>

hello Lee  
age: 17

</BrowserWindow>


위에 작성한 코드는 **Reference Error** 가 아닌 `name` 과 `printAge` 함수가 정상적으로 수행된다. 
왜? 그게 바로 호이스팅이다.

javascript 에서 **var**로 선언한 변수와 함수의 선언식에서는 인터프리터가 변수와 함수의 메모리 공간을 선언전에 미리 할당하는데
이러한 작업을 호이스팅이라고 한다.

더욱 쉽게 설명하면 **호이스팅**은 JavaScript에서 변수 및 함수 선언이 해당 스코프의 최상단으로 옮겨지는 것을 의미합니다.

### 호이스팅 종류

호이스팅 종류에는 두 가지 요소가 있다.

#### 변수 호이스팅
변수 선언은 해당 스코프의 최상단으로 옮겨지지만, 초기화(할당)는 그 자리에 남아 있다.

```js
console.log("hello", name); // undefined

var name = "Lee"
```

위 코드는 Javascript 엔진에 의해 실제로 다음과 같이 실행 된다.

```js
var name;

console.log("hello", name); // undefined

name = "Lee"
```


#### 함수 호이스팅
함수 선언은 해당 스코프의 최상단으로 옮겨지며, 이때 함수의 전체 정의가 옮겨 진다.

```js
printFunc(); // "Hello!"

function printFunc() {
  console.log("Hello!");
}
```
위 코드는 Javascript 엔진에 의해 실제로 다음과 같이 실행 된다.

```js
function printFunc() {
  console.log("Hello!");
}

printFunc(); // "Hello!"
```


#### 주의사항
* 변수 호이스팅 시, 선언만 옮겨지고 초기화는 그 자리에 남아 있으므로 변수를 사용하기 전에 선언되었는지 주의해야 한다.

* 함수 호이스팅은 함수 전체가 옮겨지기 때문에 함수 선언식을 사용하더라도 해당 함수를 호출할 수 있다.

* 함수 표현식(anonymous function expression)의 경우 호이스팅이 되지 않는다.


```js
printFunc(); // Error: printFunc is not a function

var printFunc = function() {
console.log("Hello!");
};
```

위 코드에서는 변수 printFunc은 호이스팅되지만, 해당 변수의 초기화 값이 함수가 아니기 때문에 오류가 발생한다.

호이스팅은 코드의 가독성과 유지보수성을 떨어뜨릴 수 있으므로, 변수와 함수를 선언한 위치에 최대한 가깝게 작성하는 것이 좋다.

## 결론
호이스팅은 의도치 않게 실수를 일으킬 가능성이 있으니 항상 주의해서 코드를 작성하자.
