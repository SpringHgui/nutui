import{c as e}from"./mobile.c9e73a2c.js";import{k as l,r as n,o as s,c as r,f as t,i as a}from"./vendor.80bf15c7.js";import"./index.77feaf28.js";const{createDemo:u}=e("price");var c=u({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}});const i={class:"demo"},o=t("h2",null,"基本用法",-1),d=t("h2",null,"有人民币符号，无千位分隔",-1),p=t("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),m=t("h2",null,"异步随机变更",-1);c.render=function(e,l,u,c,f,h){const b=n("nut-price"),v=n("nut-cell");return s(),r("div",i,[o,t(v,null,{default:a((()=>[t(b,{price:1010,"need-symbol":!1,thousands:!0})])),_:1}),d,t(v,null,{default:a((()=>[t(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,t(v,null,{default:a((()=>[t(b,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),m,t(v,null,{default:a((()=>[t(b,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])};export default c;
