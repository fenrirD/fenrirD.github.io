"use strict";(self.webpackChunkfenrir_d_github_io=self.webpackChunkfenrir_d_github_io||[]).push([[7918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},A="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),A=c(t),b=i,k=A["".concat(o,".").concat(b)]||A[b]||d[b]||s;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=b;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[A]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1007:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294),i=t(6010);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function a(e){let{children:n,minHeight:t,url:a="http://localhost:3000"}=e;return r.createElement("div",{className:s.browserWindow,style:{minHeight:t}},r.createElement("div",{className:s.browserWindowHeader},r.createElement("div",{className:s.buttons},r.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),r.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),r.createElement("span",{className:s.dot,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,i.Z)(s.browserWindowAddressBar,"text--truncate")},a),r.createElement("div",{className:s.browserWindowMenuIcon},r.createElement("div",null,r.createElement("span",{className:s.bar}),r.createElement("span",{className:s.bar}),r.createElement("span",{className:s.bar})))),r.createElement("div",{className:s.browserWindowBody},n))}},2271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));t(1007);const s={slug:"jenkins-build-refactoring",title:"\uc820\ud0a8\uc2a4 \ube4c\ub4dc \ub9ac\ud329\ud1a0\ub9c1",authors:["fenrir"],tags:["jenkins","groovy","CI/CD","k8s"]},a=void 0,l={permalink:"/blog/jenkins-build-refactoring",source:"@site/blog/2023-09-18-Jenkins-Build-Refactoring/index.md",title:"\uc820\ud0a8\uc2a4 \ube4c\ub4dc \ub9ac\ud329\ud1a0\ub9c1",description:"\ub3c4\uc785",date:"2023-09-18T00:00:00.000Z",formattedDate:"2023\ub144 9\uc6d4 18\uc77c",tags:[{label:"jenkins",permalink:"/blog/tags/jenkins"},{label:"groovy",permalink:"/blog/tags/groovy"},{label:"CI/CD",permalink:"/blog/tags/ci-cd"},{label:"k8s",permalink:"/blog/tags/k-8-s"}],readingTime:9.555,hasTruncateMarker:!0,authors:[{name:"Fenrir",title:"\ubc14\ubcf4\uc5d0\uc11c \ubc97\uc5b4\ub098\uae38 \ud76c\ub9dd\ud558\ub294 \uc790",url:"https://github.com/FenrirD",imageURL:"https://github.com/fenrirD.png",key:"fenrir"}],frontMatter:{slug:"jenkins-build-refactoring",title:"\uc820\ud0a8\uc2a4 \ube4c\ub4dc \ub9ac\ud329\ud1a0\ub9c1",authors:["fenrir"],tags:["jenkins","groovy","CI/CD","k8s"]},nextItem:{title:"js \ud638\uc774\uc2a4\ud305",permalink:"/blog/js-hoisting"}},o={authorsImageUrls:[void 0]},c=[{value:"\ub3c4\uc785",id:"\ub3c4\uc785",level:2},{value:"\ubcf8\ub860",id:"\ubcf8\ub860",level:2},{value:"\uae30\uc874 CI/CD \ubc29\uc2dd",id:"\uae30\uc874-cicd-\ubc29\uc2dd",level:3},{value:"\uae30\uc874 CI/CD \ubb38\uc81c\uc810",id:"\uae30\uc874-cicd-\ubb38\uc81c\uc810",level:4},{value:"\uac1c\uc120\ud558\uace0\uc790 \ud558\ub294 \ubc29\ud5a5",id:"\uac1c\uc120\ud558\uace0\uc790-\ud558\ub294-\ubc29\ud5a5",level:4},{value:"\uc0c8\ub85c\uc6b4 CI/CD \ubc29\uc2dd",id:"\uc0c8\ub85c\uc6b4-cicd-\ubc29\uc2dd",level:3},{value:"1. Groovy script \uc791\uc131",id:"1-groovy-script-\uc791\uc131",level:4},{value:"2. Jenkins \uad6c\uc131 \ubcc0\uacbd",id:"2-jenkins-\uad6c\uc131-\ubcc0\uacbd",level:4},{value:"3. CI/CD \uacfc\uc815 \ud55c\ub208\uc5d0 \ubcf4\uae30",id:"3-cicd-\uacfc\uc815-\ud55c\ub208\uc5d0-\ubcf4\uae30",level:4},{value:"4. \ud300\uc6d0\ub4e4\uc758 \uc694\uad6c\uc0ac\ud56d \uc218\ub3d9 \ubc30\ud3ec \uc124\uc815",id:"4-\ud300\uc6d0\ub4e4\uc758-\uc694\uad6c\uc0ac\ud56d-\uc218\ub3d9-\ubc30\ud3ec-\uc124\uc815",level:4},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],p={toc:c},A="wrapper";function d(e){let{components:n,...s}=e;return(0,i.kt)(A,(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\ub3c4\uc785"},"\ub3c4\uc785"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\uc774\uc9c1 \ud6c4 \uc810\uc810 \uc801\uc751\uc744 \ud558\uace0, \uac1c\ubc1c\uc744 \ud558\uba74\uc11c \ud604 \ud68c\uc0ac\uc758 \ud658\uacbd\uc5d0 \uc775\uc219\ud574 \uc9c0\ub294 \uacfc\uc815\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uac1c\ubc1c \ud658\uacbd\uc744 \uad6c\uc131\ud558\ub294 \uc5c5\ubb34\ub97c\n\ub2f4\ub2f9\ud558\uac8c \ub418\uc5c8\uace0, \uc5c5\ubb34\ub97c \uc218\ud589\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ub208\uc5d0 \uac70\uc2ac\ub9ac\ub294\uac8c \uc788\uc5c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"build img",src:t(1388).Z,width:"235",height:"105"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jenkins img",src:t(9176).Z,width:"226",height:"61"})),(0,i.kt)("p",null,"\ubc14\ub85c \uc11c\ubc84 \ubcc4\ub85c\uc788\ub294 Jenkins Job\ub4e4\uacfc Source\uc548\uc5d0 SH \ud30c\uc77c(shell script)\uac00 \uc788\ub2e4\ub294 \uac83\uc774\uc600\ub2e4."),(0,i.kt)("p",null,"\uc804 \ud68c\uc0ac\uc5d0\uc11c \uc2ec\uc2ec\ud560 \ub54c CI/CD\ub97c \uac1c\uc120\ud558\ub294 \uc791\uc5c5\uc744 \ud588\ub358 \ub098\uc5d0\uac8c \ubb54\uac00 \uacb0\uc2ec\uc744 \ud558\uac8c \ub9cc\ub4e4\uc5c8\ub2e4."),(0,i.kt)("h2",{id:"\ubcf8\ub860"},"\ubcf8\ub860"),(0,i.kt)("p",null,"\uc0c8\ub85c\uc6b4 \uac1c\ubc1c \ud658\uacbd \uc11c\ubc84\ub97c \ucd94\uac00\ud558\ub294 \uc5c5\ubb34\ub97c \ud558\ub294 \uacfc\uc815\uc5d0\uc11c \uc11c\ubc84\ub97c \uad6c\uc131\ud558\uace0 CI/CD\ub97c \uc124\uc815\ud558\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 \uae30\uc874\uc758 CI/CD \ud504\ub85c\uc138\uc2a4\ub97c \ubd84\uc11d\ud574\uc57c \ud588\ub2e4. "),(0,i.kt)("h3",{id:"\uae30\uc874-cicd-\ubc29\uc2dd"},"\uae30\uc874 CI/CD \ubc29\uc2dd"),(0,i.kt)("p",null,"\uae30\uc874\uc758 \ube4c\ub4dc \ubc29\uc2dd\uc744 \uac04\ub2e8\ud558\uac8c \uae00\ub85c \uc791\uc131\ud558\uba74 \uac1c\ubc1c\uc790\uac00 Gitlab\uc5d0 push\ub97c \ud558\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook"),"\uc744 \ud1b5\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"jenkins"),"\uc5d0\uc11c \ube4c\ub4dc\ud558\uace0 k8s\uc5d0\n\ubc30\ud3ec\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c CI/CD\uac00 \uad6c\uc131\ub418\uc5b4 \uc788\uc5c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img1",src:t(3076).Z,width:"1796",height:"738"})),(0,i.kt)("p",null,"\uac04\ub2e8\ud558\uac8c \uae30\uc874 CI/CD \ud504\ub85c\uc138\uc2a4\ub97c \uc774\ubbf8\uc9c0\ud654 \ud558\uba74 \uc704\uc640 \uac19\ub2e4."),(0,i.kt)("p",null,"\uc11c\ubc84\ub97c \ucd94\uac00\ud558\uae30 \uc704\ud574 \uac70\uc758 \ub3d9\uc77c\ud55c \ub0b4\uc6a9\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"shell scriprt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jenkins job")," \ub4f1\uc744 \ucd94\uac00 \ud574\uc57c \ud588\ub2e4."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"STG \uc11c\ubc84\ub97c \ucd94\uac00\ud558\uba74\uc11c \ub0b4\uac00 \uc791\uc5c5 \ud588\ub358 \uc5c5\ubb34 \ub9ac\uc2a4\ud2b8",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"STG Pod")," \ubc30\ud3ec"),(0,i.kt)("li",{parentName:"ol"},"\ube4c\ub4dc\ub97c \uc704\ud55c ",(0,i.kt)("inlineCode",{parentName:"li"},"Shell Script")," \uc791\uc131"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Webhook")," \ucd94\uac00"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Jenkins Job")," \ucd94\uac00"))))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"STG")," \uc11c\ubc84 \ucd94\uac00 \uc791\uc5c5\uc744 \ud560 \ub54c\ub294 \uc77c\ub2e8 \uae30\uc874\uc758 \ubc29\uc2dd\ub300\ub85c \uc791\uc5c5\uc744 \ud588\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7ec\ub098 \ud3c9\uc18c ",(0,i.kt)("inlineCode",{parentName:"p"},"DevOps"),"\uc5d0 \uad00\uc2ec\uc774 \uc788\ub358 \ub098\ub294 \uc774\uac8c \ucd5c\uc120\uc77c\uae4c? \ub77c\ub294 \uc0dd\uac01\uc744 \ud558\uac8c \ub418\uc5c8\uace0\n\uc2dc\uac04\uc774 \ub0a8\uc744 \ub54c, \uc870\uae08\uc529 CI/CD \ud504\ub85c\uc138\uc2a4\ub97c \uc218\uc815\uc744 \ud558\uace0\uc790 \ud588\ub2e4."),(0,i.kt)("p",null,"\uba3c\uc800 \uac1c\uc120\uc5d0 \uc55e\uc11c \uae30\uc874 \ubc29\uc2dd\uc758 \ubb38\uc81c\uc810\uc744 \uc0dd\uac01\ud588\ub2e4."),(0,i.kt)("h4",{id:"\uae30\uc874-cicd-\ubb38\uc81c\uc810"},"\uae30\uc874 CI/CD \ubb38\uc81c\uc810"),(0,i.kt)("p",null,"\ub0b4\uac00 \uc0dd\uac01\ud55c \uae30\uc874 CI/CD\uc758 \ubb38\uc81c\uc810\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc11c\ubc84 \ud658\uacbd\uc774 N\uac1c\ub85c \ub298\uc5b4\ub098\uba74 N\uac1c\uc758 ",(0,i.kt)("inlineCode",{parentName:"li"},"sh file"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"jenkins job"),"\uc774 \ud544\uc694\ud558\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sh file"),"\uc774 FE Source\uc640 \ud568\uaed8 \uad00\ub9ac \ub41c\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"Jenkins \uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"sh"),"\ub97c \uc2e4\ud589 \uc2dc\ucf1c\uc8fc\ub294 \uc5ed\ud560\ub9cc \ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc5b4\ub290 \uacfc\uc815\uc5d0\uc11c \uc2e4\ud328 \ud588\ub294\uc9c0 \ud30c\uc545\ud558\uae30 \uc5b4\ub835\ub2e4.")),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \ubb38\uc81c\uc810\uc744 \ud574\uacb0 \ud558\uae30\uc704\ud574 \ub0b4\uac00 \uc0dd\uac01\ud55c \ubc29\ud5a5\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,i.kt)("h4",{id:"\uac1c\uc120\ud558\uace0\uc790-\ud558\ub294-\ubc29\ud5a5"},"\uac1c\uc120\ud558\uace0\uc790 \ud558\ub294 \ubc29\ud5a5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"shell scirpt"),"\uc744 ",(0,i.kt)("inlineCode",{parentName:"li"},"FE source"),"\uc5d0\uc11c \uc81c\uac70\ud558\uace0, \ubcc4\ub3c4\uc758 Repository\uc5d0\uc11c \uad00\ub9ac\ud55c\ub2e4.  "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Jenkins Job"),"\uc744 \ud558\ub098\ub85c \uc5ec\ub7ec \ud658\uacbd\uc73c\ub85c \ube4c\ub4dc \ubc0f \ubc30\ud3ec\ub97c \uc9c4\ud589\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc5b4\ub290 \uacfc\uc815\uc5d0\uc11c \uc2e4\ud328 \ud588\ub294\uc9c0 \ucd94\uc801\uc774 \uc27d\uac8c\ud55c\ub2e4.")),(0,i.kt)("h3",{id:"\uc0c8\ub85c\uc6b4-cicd-\ubc29\uc2dd"},"\uc0c8\ub85c\uc6b4 CI/CD \ubc29\uc2dd"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img2",src:t(5569).Z,width:"1796",height:"738"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc0c8\ub86d\uac8c \uac1c\uc120\ud558\uace0\uc790 \ud558\ub294 CI/CD \ud504\ub85c\uc138\uc2a4 \uc774\ubbf8\uc9c0")),(0,i.kt)("p",null,"\uc704 \uc774\ubbf8\uc9c0 \ucc98\ub7fc \uc5ec\ub7ec\uac1c\uc758 \ube0c\ub79c\uce58\uc5d0\uc11c Webhook\uc744 \ud1b5\ud574 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uba74 \ud558\ub098\uc758 jenkins Job\uc5d0\uc11c \ube4c\ub4dc\ub97c \ud558\uace0,\n\uadf8\ub9ac\uace0 \ubc30\ud3ec\ud558\uace0\uc790 \ud558\ub294 \uc11c\ubc84\ub85c \uc790\ub3d9\uc73c\ub85c \ubc30\ud3ec\uac00 \ub418\uac8c \uc218\uc815\uc744 \ud558\uace0\uc790 \ud588\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7ec\uae30 \uc704\ud574\uc11c\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc218\uc815\uc744 \ud574\uc57c \ud588\ub294\ub370 \uba3c\uc800 \ube4c\ub4dc \ud30c\uc77c\uc774 FE source\uc640 \ud568\uaed8 \uad00\ub9ac\ub418\uace0, ",(0,i.kt)("strong",{parentName:"p"},"Jenkins"),"\uc5d0\uc11c\ub294 \ub2e8\uc21c\ud788 ",(0,i.kt)("inlineCode",{parentName:"p"},"shell sciprt"),"\ub9cc \uc2e4\ud589 \uc2dc\ucf1c\uc8fc\ub294 \ube4c\ub4dc \ubc29\uc2dd\uc744 \ubcc0\uacbd\ud558\uace0\uc790 \ud588\uace0,\n\uadf8 \uacb0\uacfc ",(0,i.kt)("strong",{parentName:"p"},"groovy script"),"\ub97c \uc791\uc131\ud588\ub2e4."),(0,i.kt)("h4",{id:"1-groovy-script-\uc791\uc131"},"1. Groovy script \uc791\uc131"),(0,i.kt)("p",null,"\ub098\ub294 Groovy \ubb38\ubc95\uc744 \uc798 \ubaa8\ub974\uc9c0\ub9cc \ucd5c\ub300\ud55c ",(0,i.kt)("strong",{parentName:"p"},"document"),"\ub97c \ucc38\uace0\ud558\uba74\uc11c \uc791\uc131\uc744 \ud588\ub2e4.\n\uba3c\uc800 \uae30\uc874\uc5d0\ub294 \ube0c\ub79c\uce58(\ubc30\ud3ec\ud558\ub824\ub294 \uc11c\ubc84)\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"Jenkins Job"),"\uc758 \uad00\uacc4\uac00 1:1 \uc5ec\uc11c \uc0c8\ub85c\uc6b4 \ud658\uacbd\uc774 \ucd94\uac00 \ub420 \ub54c\ub9c8\ub2e4\n\ub86d\uac8c \ucd94\uac00\ud574\uc918\uc57c\ud558\ub294 \ubc29\uc2dd\uc774\uc600\ub2e4\uba74 N(\ubc30\ud3ec\ud558\ub824\ub294 \uc11c\ubc84) : 1(Jenkins Job) \uad00\uacc4\ub97c \uac16\uac8c \ud558\ub824\uace0 \uc791\uc5c5\uc744 \ud588\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"package cip\n\npipeline {\n  agent any\n  tools {\n    nodejs 'NodeJs-14.13.1'\n  }\n  stages {\n    stage('Initial VARIABLES') {\n      steps {\n        script {\n          CHOISE_BUILD_TARGET=\"${params.BUILD_TARGET}\"\n          BUILD_TARGET='\"\"'\n          BRANCH_NAME=env.gitlabBranch\n          echo \"BRANCH_NAME1: ${BRANCH_NAME} \"\n          REPO_URL='[GIT_FE_SOURCE_REPOSITORY_URL]'\n          // \uc218\ub3d9\uc73c\ub85c \ubc30\ud3ec \ud588\uc744 \ub54c, \ube0c\ub79c\uce58\uc640 \ube4c\ub4dc \ud0c0\uac9f\uc744 \uc815\ud574\uc8fc\uae30 \uc704\ud55c \uc870\uac74\ubb38\n          if(CHOISE_BUILD_TARGET) {\n            if(CHOISE_BUILD_TARGET=='dev'){\n              BRANCH_NAME=\"develop\"\n            }else if(CHOISE_BUILD_TARGET =='stg'){\n              BRANCH_NAME=\"stage\"\n              BUILD_TARGET=\"-stg\"\n            } else if(CHOISE_BUILD_TARGET =='prd') {\n              BRANCH_NAME=\"master\"\n            }\n          }\n          if(BRANCH_NAME == 'stage') {\n            BUILD_TARGET= '-stg'\n          } else if(BRANCH_NAME == 'master'){\n            BUILD_TARGET= '-prd'\n          }\n          ADMIN_POD=[DEPLOY_ADMIN_POD_NAME]\n          CLIENT_POD=[DEPLOY_CLIENT_POD_NAME]\n          DIRECTORY='./dist/js'\n          sh \"echo '${BUILD_TARGET}'\"\n          echo \"Build Target: ${BUILD_TARGET}\"\n          echo \"BRANCH_NAME: ${BRANCH_NAME} \"\n        }\n      }\n    }\n    stage(\"Branch Checkout\") {\n      steps{\n        checkout([$class: 'GitSCM', branches: [[name: BRANCH_NAME]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: CREDENTIALS_ID, url: REPO_URL]]])\n      }\n    }\n    stage(\"Npm install\") {\n      steps{\n        sh 'npm install'\n      }\n    }\n    stage('Npm Run Build  for Develop') {\n      when {\n        expression {\n          return BRANCH_NAME=='develop'\n        }\n      }\n      steps {\n        sh 'npm run build_dev'\n      }\n    }\n    stage('Npm Run Build  for Stage') {\n      when {\n        expression {\n          return BRANCH_NAME=='stage'\n        }\n      }\n      steps {\n        sh 'npm run build_stg'\n      }\n    }\n    stage('Npm Run Build  for CIP-Product') {\n      when {\n        expression {\n          return BRANCH_NAME=='master'\n        }\n      }\n      steps {\n        sh 'npm run build_cip_prd'\n      }\n    }\n    stage('K8S Apply') {\n      steps {\n        echo '===========================\\n'\n        echo 'Build cp ADMIN'\n        echo '===========================\\n'\n        sh \"kubectl exec ${ADMIN_POD} -n [TARGET_POD_NAMESPACE] --kubeconfig=[KUBE_CONFIG_PATH] --context=[CONTEXT] -- sh -c 'rm -rf /usr/share/nginx/html/admin/dist'\"\n        sh \"kubectl cp ${WORKSPACE}/dist  saas/${ADMIN_POD}:/usr/share/nginx/html/admin --kubeconfig=[KUBE_CONFIG_PATH] --context=[CONTEXT]\"\n\n        echo '===========================\\n'\n        echo 'Build cp Client'\n        echo '===========================\\n'\n\n        sh \"kubectl exec ${CLIENT_POD} -n TARGET_POD_NAMESPACE] --kubeconfig=[KUBE_CONFIG_PATH] --context=[CONTEXT] -- sh -c 'rm -rf /usr/share/nginx/html/client/dist'\"\n        sh \"kubectl cp ${WORKSPACE}/dist  saas/${CLIENT_POD}:/usr/share/nginx/html/client --kubeconfig=[KUBE_CONFIG_PATH] --context=[CONTEXT]\"\n      }\n    }\n  }\n}\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud574\ub2f9 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc740 \uc0dd\ub7b5\ud55c\ub2e4. ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Jenkins Multibranch Pipeline")," \ub97c \ud65c\uc6a9\uc744 \ud588\ub2e4\uba74 \ube0c\ub79c\uce58 \uad00\ub828\ud574\uc11c \ubb38\ubc95\uc774 \ub354 \uac04\ub2e8 \ud588\uaca0\uc9c0\ub9cc \ubc84\uc804 \ubb38\uc81c\ub85c \uc0ac\uc6a9\ud558\uc9c0 \ubabb \ud588\ub2e4.\n\ub610\ud55c \ud300\uc6d0\ub4e4\uc758 \uc694\uccad\uc73c\ub85c \uc218\ub3d9 \ubc30\ud3ec \ubc29\uc2dd\ub3c4 \uac00\ub2a5\ud558\uac8c \uc791\uc131\ud588\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"groovy script"),"\ub294 \ubcc4\ub3c4\uc758 Repository\uc5d0\uc11c \uad00\ub9ac\ub97c \ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ubcc0\uacbd\ud588\ub2e4."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Groovy \ubb38\ubc95 \uad00\ub828\ud574\uc11c\ub294 \uacf5\uc2dd \ub3c4\ud050\uba3c\ud2b8\ub97c \ucc38\uace0\ud558\uc790.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/pipeline/steps/workflow-cps/#pipeline-groovy"},"Jenkins Pipeline groovy"))),(0,i.kt)("h4",{id:"2-jenkins-\uad6c\uc131-\ubcc0\uacbd"},"2. Jenkins \uad6c\uc131 \ubcc0\uacbd"),(0,i.kt)("p",null,"\uae30\uc874\uc5d0\ub294 Jenkins\uc5d0\uc11c sh \ud30c\uc77c\uc744 \uc2e4\ud589 \uc2dc\ud0a4\ub294 \ubc29\uc2dd\uc73c\ub85c\ub9cc \uc0ac\uc6a9 \ud588\uc9c0\ub9cc \uc0c8\ub86d\uac8c \uac1c\uc120\ud55c \ubc29\ud5a5\uc73c\ub85c\ub294\n\ubcc4\ub3c4\uc758 Repository\uc5d0\uc11c groovy script\ub97c \uc77d\uace0 \ube4c\ub4dc \ubc0f \ubc30\ud3ec\ub97c \uc9c4\ud589\ud558\uace0\uc790 \ud574\uc11c jenkins job\uc758 \uad6c\uc131\uc744 \ubcc0\uacbd\ud588\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img3",src:t(8158).Z,width:"819",height:"393"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uae30\uc874\uc5d0\ub294 Jenkins \uad6c\uc131\uc740 \ub2e8\uc9c0 checkout \ubc1b\uc740 \uc18c\uc2a4\uc5d0\uc11c sh \ud30c\uc77c\uc744 \uc2e4\ud589\uc2dc\ucf1c\uc8fc\ub294 \uc5ed\ud560\ub9cc \ud588\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img4",src:t(2939).Z,width:"717",height:"393"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ube4c\ub4dc \ud30c\uc77c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubcc4\ub3c4\uc758 Repository\uc5d0\uc11c \uad00\ub9ac, \ud30c\uc774\ud504\ub77c\uc778 \ubc29\uc2dd\uc73c\ub85c \ubcc0\uacbd")),(0,i.kt)("h4",{id:"3-cicd-\uacfc\uc815-\ud55c\ub208\uc5d0-\ubcf4\uae30"},"3. CI/CD \uacfc\uc815 \ud55c\ub208\uc5d0 \ubcf4\uae30"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img5",src:t(9885).Z,width:"1196",height:"596"})),(0,i.kt)("p",null,"\ud30c\uc774\ud504\ub77c\uc778\uc744 \uc774\uc6a9\ud558\uace0, groovy script\uc5d0\uc11c stage \uae30\uc900\uc73c\ub85c \ub2e8\uacc4\ub97c \uc815\uc758 \ud588\uae30 \ub54c\ubb38\uc5d0 \uc704 \uc774\ubbf8\uc9c0 \ucc98\ub7fc \uc5b4\ub290 \ub2e8\uacc4\uc5d0\uc11c \uc2e4\ud328 \ud588\ub294\uc9c0\n\ubcf4\ub2e4 \ud655\uc778\ud558\uae30 \uc27d\uac8c \uac1c\uc120\uc744 \ud588\ub2e4."),(0,i.kt)("h4",{id:"4-\ud300\uc6d0\ub4e4\uc758-\uc694\uad6c\uc0ac\ud56d-\uc218\ub3d9-\ubc30\ud3ec-\uc124\uc815"},"4. \ud300\uc6d0\ub4e4\uc758 \uc694\uad6c\uc0ac\ud56d \uc218\ub3d9 \ubc30\ud3ec \uc124\uc815"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img6",src:t(9534).Z,width:"364",height:"178"})),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 \ud300\uc6d0\ub4e4\uc758 \uc694\uad6c \uc0ac\ud56d\uc778 webhook\uc744 \ud1b5\ud55c \ubc30\ud3ec \uc678\uc5d0\ub3c4 \uc9c1\uc811 \ubc30\ud3ec\ud560 \uc11c\ubc84\ub97c \uc120\ud0dd\ud574\uc11c \uc218\ub3d9\uc73c\ub85c \ubc30\ud3ec\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc73c\ub85c\ub294\njenkins\uc758 Choice Parameter\ub97c \ud65c\uc6a9\ud574\uc11c \uc801\uc6a9\ud588\ub2e4."),(0,i.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,i.kt)("p",null,"\uc74c.. 2 ~ 3\uc77c\uc774 \uc18c\uc694\ub418\ub294 \uc791\uc5c5\uc774\uc600\uace0, \uadf8 \uacfc\uc815\uc5d0\uc11c Jenkins version \ubb38\uc81c\uc640 groovy \ubb38\ubc95\uc744 \uc815\ud655\ud788 \ubab0\ub77c\uc11c \ub9ce\uc740 \ud2b8\ub7ec\ube14\uc774 \uc788\uc5c8\uace0,\n\ud574\uacb0\ud574\ub098\uac00\ub294 \uacfc\uc815\uc5d0\uc11c \uc870\uae08 \uc131\uc7a5\ud588\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4."),(0,i.kt)("p",null,"\ub610\ud55c, \ub0b4\uac00 \ud55c \ubc29\ubc95\uc774 \uc815\ub2f5\uc774\ub77c\uace0\ub294 \uc0dd\uac01\ud558\uc9c0 \uc54a\ub294\ub2e4. \ubd84\uba85 \ub0b4\uac00 \ud55c \ubc29\ubc95\uc740 \ube44 \ud6a8\uc728\uc801\uc77c\uc218\ub3c4 \uc788\ub2e4.\n\ud558\uc9c0\ub9cc \uc5b4\ub5bb\uac8c \ud558\uba74 \ub0b4\uac00 \ub354 \uac1c\ubc1c\uc5d0 \uc9d1\uc911\ud558\uace0, \ub354 \ub098\uc544\uac00 \uac19\uc774 \uc77c\ud558\ub294 \ub3d9\ub8cc\ub4e4\uc774 \uac1c\ubc1c\uc5d0 \ub354 \uc9d1\uc911\ud560\uc218 \uc788\ub294 \uc2dc\uac04\uc774 \uc870\uae08\uc774\ub77c\uace0 \ud5a5\uc0c1\ub418\uc5c8\ub2e4\uba74\n\uadf8\uac78\ub85c \ub9cc\uc871\ud55c\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 \ucf54\ub4dc\ub9ac\ubdf0 \uc2dc\uac04\uc5d0 \uc774\ub7ec\ud55c \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\uc11c \ub9ac\ubdf0\ub97c \ud558\uc600\uace0, \ud300\uc6d0\ub4e4\uc740 \uae0d\uc815\uc801\uc778 \ubc18\uc751\uc744 \ubcf4\uc5ec\uc92c\ub2e4."),(0,i.kt)("p",null,"\ub610\ud55c \uc774 \uae00\uc744 \uc77d\ub294 \ub3c5\uc790\uac00 \uc870\uae08\uc774\ub77c\ub3c4 DevOps \ucabd\uc5d0 \ud765\ubbf8\ub97c \uac16\uace0, \uae30\uc874 \uc2dc\uc2a4\ud15c\uc744 \uac1c\uc120\ud558\ub294 \uacc4\uae30\uac00 \ub418\uc5c8\uc73c\uba74 \ud55c\ub2e4."),(0,i.kt)("p",null,"\uae30\ud68c\uac00 \ub41c\ub2e4\uba74 \ub2e4\uc591\ud55c \uac1c\uc120 \ubc29\ubc95\uc5d0 \ub300\ud574 \uacf5\ubd80\ud558\uace0 \uc801\uc6a9\ud574\ubcf4\uace0 \uc2f6\ub2e4."))}d.isMDXComponent=!0},1388:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"},9176:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"},3076:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/jenkins_img1-69350262e1b161ea7ffe33c2a2171f4c.png"},5569:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/jenkins_img2-0857efce2662f62ea484d67f9bab6efe.png"},8158:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/jenkins_job_img1-da86f77f5609b26b3375684523a3da49.png"},2939:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/jenkins_job_img2-cb0e99bf009f95db7ace6dc9d6e09413.png"},9885:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/jenkins_log_img-033c6bb3f074f9de806e4b8745b7ecd7.png"},9534:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"}}]);