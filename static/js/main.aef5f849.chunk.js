(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/Sanah.5b6cc9a1.jpg"},27:function(e,a,t){},36:function(e,a,t){e.exports=t(54)},41:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(34),s=t.n(c),i=(t(41),t(14)),o=t(15),l=t(18),m=t(17),d=(t(27),t(28),t(43),t(16)),u=t(25);t(44);var h=function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],s=t[1],i=Object(n.useState)(0),o=Object(u.a)(i,2),l=o[0],m=o[1];function d(){e.correctAnswer!==c?document.getElementById("cardFront").innerHTML="\n            <h1 className='result'>Koniec</h1>\n            <p>"+l+" / 20</p>\n        ":document.getElementById("cardFront").innerHTML="\n            <h1 className='result'>Koniec</h1>\n            <div>\n                <h1>Tw\xf3j wynik</h1>\n                <p>"+(l+1)+" / 20</p>\n            </div>\n            <div>\n                <button>Jeszcze raz</button>\n                <button>Powr\xf3t</button>\n            </div>\n            \n        "}function h(){e.drawCard();for(var a=document.getElementsByName("radio"),t=0;t<a.length;t++)a[t].checked=!1}return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{id:"card",className:"card"},r.a.createElement("div",{id:"cardFront",className:"front"},r.a.createElement("div",{className:"question"},e.questionNumber,"/20"),r.a.createElement("div",{className:"question"},e.question),r.a.createElement("div",{className:"answers"},r.a.createElement("div",{className:"form"},r.a.createElement("input",{className:"form__input",id:"ansA",type:"radio",name:"radio",onChange:function(){return s("A")}}),r.a.createElement("label",{className:"form__label",for:"ansA"},e.answerA)),r.a.createElement("div",{className:"form"},r.a.createElement("input",{className:"form__input",id:"ansB",type:"radio",name:"radio",onChange:function(){return s("B")}}),r.a.createElement("label",{className:"form__label",for:"ansB"},e.answerB)),r.a.createElement("div",{className:"form"},r.a.createElement("input",{className:"form__input",id:"ansC",type:"radio",name:"radio",onChange:function(){return s("C")}}),r.a.createElement("label",{className:"form__label",for:"ansC"},e.answerC)),r.a.createElement("div",{className:"form"},r.a.createElement("input",{className:"form__input",id:"ansD",type:"radio",name:"radio",onChange:function(){return s("D")}}),r.a.createElement("label",{className:"form__label",for:"ansD"},e.answerD))),r.a.createElement("button",{className:"button",onClick:function(){if(""!==c)return document.getElementById("card").classList.add("cardRotate"),e.correctAnswer===c&&m((function(e){return e+1})),s(""),setTimeout(h,500),e.answerLength<=1?setTimeout(d,500):void 0}},"Odpowiedz")),r.a.createElement("div",{className:"front back"},r.a.createElement("h1",null,"Sanah Quiz"))))},p=t(19),E=t.n(p),f=t(4),N=t(9),v=t(10),w={apiKey:"AIzaSyCFcPQQ-5gLojPHstLFMzLUvf5g1WGDu_E",authDomain:"quiz-41451.firebaseapp.com",databaseURL:"https://quiz-41451.firebaseio.com",projectId:"quiz-41451",storageBucket:"quiz-41451.appspot.com",messagingSenderId:"1028140037635",appId:"1:1028140037635:web:c3b0d91ad130fa9e964036",measurementId:"G-V36EBPG1VD"},z=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).updateCard=n.updateCard.bind(Object(d.a)(n)),n.state={cards:[],currentCard:{},randomIndex:1,questionNumber:1},n}return Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this,a=this.state.cards;E.a.apps.length||E.a.initializeApp(w),E.a.database().ref().child("cards").on("child_added",(function(t){a.push({id:t.key,question:t.val().question,answerA:t.val().answerA,answerB:t.val().answerB,answerC:t.val().answerC,answerD:t.val().answerD,correctAnswer:t.val().correctAnswer}),e.setState({cards:a,currentCard:e.getRandomCard(a)})}))}},{key:"getRandomCard",value:function(e){this.state.randomIndex=Math.floor(Math.random()*e.length);var a=e[this.state.randomIndex];return a===this.state.currentCard&&this.getRandomCard(e),a}},{key:"updateCard",value:function(){var e=this.state.cards;e.splice(this.state.randomIndex,1),e.length<=0||this.setState({cards:e,currentCard:this.getRandomCard(e),questionNumber:this.state.questionNumber+1}),document.getElementById("card").classList.remove("cardRotate")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.b,{to:"/quizy"},r.a.createElement(N.a,{className:"exitButton",icon:v.a})),r.a.createElement("div",{className:"cardRow"},r.a.createElement(h,{question:this.state.currentCard.question,answerA:this.state.currentCard.answerA,answerB:this.state.currentCard.answerB,answerC:this.state.currentCard.answerC,answerD:this.state.currentCard.answerD,correctAnswer:this.state.currentCard.correctAnswer,answerLength:this.state.cards.length,drawCard:this.updateCard,questionNumber:this.state.questionNumber})))}}]),t}(n.Component),C=(t(51),t(12)),b=t.n(C);var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{to:"/"},r.a.createElement(N.a,{className:"exitButton",icon:v.a})),r.a.createElement("div",{className:"quizContainer"},r.a.createElement(f.b,{className:"link",to:"/SanahQuiz"},r.a.createElement("div",{className:"quizCarddwa"}),r.a.createElement("div",{className:"quizCardtrzy"}),r.a.createElement("div",{className:"quizCard"},r.a.createElement("img",{className:"quizCard__image",src:b.a,alt:"Sanah"}),r.a.createElement("h1",{className:"quizCard__header"},"Sanah"),r.a.createElement("h3",{className:"quizCard__description"},"Sprawd\u017a wiedze o najpopularniejszego piosenkarce 2020 roku!"))),r.a.createElement(f.b,{className:"link",to:"/SanahQuiz"},r.a.createElement("div",{className:"quizCarddwa"}),r.a.createElement("div",{className:"quizCardtrzy"}),r.a.createElement("div",{className:"quizCard"},r.a.createElement("img",{className:"quizCard__image",src:b.a,alt:"Sanah"}),r.a.createElement("h1",{className:"quizCard__header"},"Sanah"),r.a.createElement("h3",{className:"quizCard__description"},"Sprawd\u017a wiedze o najpopularniejszego piosenkarce 2020 roku!"))),r.a.createElement(f.b,{className:"link",to:"/SanahQuiz"},r.a.createElement("div",{className:"quizCarddwa"}),r.a.createElement("div",{className:"quizCardtrzy"}),r.a.createElement("div",{className:"quizCard"},r.a.createElement("img",{className:"quizCard__image",src:b.a,alt:"Sanah"}),r.a.createElement("h1",{className:"quizCard__header"},"Sanah"),r.a.createElement("h3",{className:"quizCard__description"},"Sprawd\u017a wiedze o najpopularniejszego piosenkarce 2020 roku!"))),r.a.createElement(f.b,{className:"link",to:"/SanahQuiz"},r.a.createElement("div",{className:"quizCarddwa"}),r.a.createElement("div",{className:"quizCardtrzy"}),r.a.createElement("div",{className:"quizCard"},r.a.createElement("img",{className:"quizCard__image",src:b.a,alt:"Sanah"}),r.a.createElement("h1",{className:"quizCard__header"},"Sanah"),r.a.createElement("h3",{className:"quizCard__description"},"Sprawd\u017a wiedze o najpopularniejszego piosenkarce 2020 roku!")))))};t(52);var _=function(){return r.a.createElement("div",{className:"homeScreen"},r.a.createElement(f.b,{className:"link",to:"/quizy"},r.a.createElement("div",{className:"option quizy"},r.a.createElement("h1",{className:"option__text"},"Quizy"))),r.a.createElement(f.b,{className:"link",to:"/news"},r.a.createElement("div",{className:"option aktualnosci"},r.a.createElement("h1",{className:"option__text"},"Newsletter"))),r.a.createElement(f.b,{className:"link",to:"/users"},r.a.createElement("div",{className:"option omnie"},r.a.createElement("h1",{className:"option__text"},"O mnie"))))};t(53);var q=function(){return r.a.createElement("div",{className:"newsContainer"},r.a.createElement(f.b,{to:"/"},r.a.createElement(N.a,{className:"exitButton",icon:v.a})),r.a.createElement("div",{className:"newsletter"},r.a.createElement("input",{placeholder:"Wpisz adres email...",className:"newsletter__input"}),r.a.createElement("button",{className:"newsletter__button"},"Zapisz si\u0119!")))},k=t(2),y=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/"},r.a.createElement(_,null)),r.a.createElement(k.a,{path:"/quizy"},r.a.createElement(g,null)),r.a.createElement(k.a,{path:"/SanahQuiz"},r.a.createElement(z,null)),r.a.createElement(k.a,{path:"/news"},r.a.createElement(q,null)))))}}]),t}(n.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/QuizApp",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/QuizApp","/service-worker.js");j?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):S(e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.aef5f849.chunk.js.map