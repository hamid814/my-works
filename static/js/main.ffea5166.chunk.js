(this["webpackJsonpmy-works"]=this["webpackJsonpmy-works"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),c=a.n(o),r=function(e){var t=e.item,a={background:t.backgroundColor};return i.a.createElement("div",{className:"item",style:a},i.a.createElement("div",{className:"title"},t.name),i.a.createElement("div",{className:"button-panel"},i.a.createElement("div",{className:"button",onClick:function(){window.open(t.codeURL)}},i.a.createElement("div",{className:"text"},"code")),i.a.createElement("div",{className:"button",onClick:function(){window.open(t.viewURL)}},i.a.createElement("div",{className:"text"},"view"))))},l=Object(n.createContext)(),m=function(){var e=Object(n.useContext)(l).items;return i.a.createElement("div",{className:"container"},e.map((function(e){return i.a.createElement(r,{key:e.id,item:e})})),i.a.createElement("div",{className:"bottom-right"},i.a.createElement("div",{className:"github"},i.a.createElement("div",{className:"background"}),"github"),i.a.createElement("div",{className:"contact"},i.a.createElement("div",{className:"background"}),"contact")))},s=a(3),u=a(4),d=function(e,t){switch(t.type){case"test":return Object(u.a)({},e);default:return e}},p=function(e){var t=Object(n.useReducer)(d,{items:[{id:1,name:"formi",backgroundColor:"tan",codeURL:"https://github.com/hamid814/r-p",viewURL:"https://hamid814.github.io/r-p/",isBeta:!1},{id:2,name:"trello clone",backgroundColor:"teal",codeURL:"https://github.com/hamid814/trello-clone",viewURL:"https://hamid814.github.io/trello-clone/",isBeta:!1},{id:3,name:"diprella sigin concept",backgroundColor:"#cb9f24",codeURL:"https://github.com/hamid814/signup-signin-concept",viewURL:"https://hamid814.github.io/signup-signin-concept/",isBeta:!1},{id:4,name:"todo app",backgroundColor:"tomato",codeURL:"https://github.com/hamid814/todo-app",viewURL:"https://hamid814.github.io/todo-app/",isBeta:!1},{id:5,name:"my portfolio",backgroundColor:"#a37e5b",codeURL:"https://github.com/hamid814/portfolio-app",viewURL:"https://hamid814.github.io/portfolio-app/",isBeta:!0}]}),a=Object(s.a)(t,2),o=a[0],c=a[1];return i.a.createElement(l.Provider,{value:{items:o.items,testFunction:function(e){c({type:"test"})}}},e.children)},h=(a(10),function(){return i.a.createElement(m,null)});c.a.render(i.a.createElement((function(){return i.a.createElement(p,null,i.a.createElement(h,null))}),null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.ffea5166.chunk.js.map