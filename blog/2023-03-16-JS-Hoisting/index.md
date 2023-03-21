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

**MDN**에서 설명 해준 내용을 읽고, 아래의 코드의 실행 결과를 예상해보자.

```js

console.log("hellow", name);

printAge(17)

var name = "Lee"

function printAge(age) {
  console.log('age:',age);
}

```
위 코드는 아래와 같이 출력한다. 

<BrowserWindow>

hellow Lee  
age: 17

</BrowserWindow>


위에 작성한 코드는 **Reference Error** 가 아닌 `name` 과 `printAge` 함수가 정상적으로 수행된다. 
왜? 그게 바로 호이스팅이다.

js에서 **var**로 선언한 변수와 함수의 선언식에서는 인터프리터가 변수와 함수의 메모리 공간을 선언전에 미리 할당하는데
이러한 작업을 호이스팅이라고 한다.


## 결론