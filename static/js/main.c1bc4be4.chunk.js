(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),i=n.n(r),c=(n(14),n(4)),s=n(1),l=n(2),u=n(5),d=n(3),f=n(6);n(16);function h(e){return a.a.createElement("ul",null,e.todos.map(function(t,n){return a.a.createElement("li",{key:n},t.title,a.a.createElement("button",{type:"button",onClick:function(){return e.deleteTodo(t)},className:"dltbtn"},"delete"))}))}var p=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"addTodo",value:function(){this.props.addTodo(this.refs.newText.value),this.refs.newText.value=""}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("input",{type:"text",ref:"newText",className:"txtbox",placeholder:"Task"}),a.a.createElement("button",{type:"button",className:"addbtn",onClick:function(){return e.addTodo()}},"Add"))}}]),t}(o.Component),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={todos:[{title:"tf-idf"},{title:"Django"},{title:"React"},{title:"Vue.js"}]},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"addTodo",value:function(e){""!==e&&this.setState(function(t){return{todos:Object(c.a)(t.todos).concat([{title:e}])}})}},{key:"deleteTodo",value:function(e){this.setState(function(t){var n=Object(c.a)(t.todos),o=n.indexOf(e);return n.splice(o,1),{todos:n}})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"ToDoApp"),a.a.createElement(p,{addTodo:function(t){return e.addTodo(t)}}),a.a.createElement(h,{todos:this.state.todos,deleteTodo:function(t){return e.deleteTodo(t)}}))}}]),t}(o.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-todoapp",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-todoapp","/service-worker.js");w?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):m(e)})}}()},9:function(e,t,n){e.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.c1bc4be4.chunk.js.map