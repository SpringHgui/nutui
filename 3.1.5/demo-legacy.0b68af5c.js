System.register(["./mobile-legacy.86a17535.js","./vendor-legacy.28863f72.js","./index-legacy.7690a450.js"],(function(e){"use strict";var n,l,t,u,c,s,r,i;return{setters:[function(e){n=e.c},function(e){l=e.m,t=e.r,u=e.o,c=e.e,s=e.j,r=e.k,i=e.g},function(){}],execute:function(){const{createDemo:a}=n("price");var o=e("default",a({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}}));const d={class:"demo"},f=i("h2",null,"基本用法",-1),m=i("h2",null,"有人民币符号，无千位分隔",-1),p=i("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),h=i("h2",null,"异步随机变更",-1);o.render=function(e,n,l,i,a,o){const y=t("nut-price"),g=t("nut-cell");return u(),c("div",d,[f,s(g,null,{default:r((()=>[s(y,{price:0,"need-symbol":!1,thousands:!0})])),_:1}),m,s(g,null,{default:r((()=>[s(y,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,s(g,null,{default:r((()=>[s(y,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),h,s(g,null,{default:r((()=>[s(y,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])}}}}));