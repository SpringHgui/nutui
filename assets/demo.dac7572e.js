var n=Object.defineProperty,e=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,t=(e,l,i)=>l in e?n(e,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[l]=i;import{c as o}from"./mobile.4cb2b3ef.js";import{a as c,r as a,o as r,c as k,f as s,i as C}from"./vendor.ce30e942.js";import"./index.5e9b6455.js";const{createDemo:O}=o("navbar");var d=O({setup:(n,{emit:o})=>((n,o)=>{for(var c in o||(o={}))e.call(o,c)&&t(n,c,o[c]);if(l)for(var c of l(o))i.call(o,c)&&t(n,c,o[c]);return n})({back:()=>{alert("header头部， 点击返回")},title:()=>{alert("header头部， 点击title")},right:()=>{alert("header头部， 点击右侧按钮")},send:()=>{alert("发送")},edit:()=>{alert("编辑")},clear:()=>{alert("清空")},more:()=>{alert("更多")},list:()=>{alert("列表")},icon:()=>{alert("icon")},morelist:()=>{alert("多个更多")},switchTab:function(n,e){console.log(n,e)}},c({tabList:[{id:"11",name:"商品"},{id:"22",name:"评价"},{id:"33",name:"详情"},{id:"44",name:"推荐"},{id:"55",name:"商品"},{id:"66",name:"评价"},{id:"77",name:"详情"},{id:"88",name:"推荐"}]}))});const b={class:"demo full"},m=s("h2",null,"基础用法",-1),u=s("h2",null,"增加tab及右侧按钮",-1),h=s("h2",null,"多tab切换导航",-1);d.render=function(n,e,l,i,t,o){const c=a("nut-navbar"),O=a("nut-icon");return r(),k("div",b,[m,s(c,{onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickSend:n.send,title:"订单详情",icon:"share-n"},null,8,["onOnClickBack","onOnClickTitle","onOnClickSend"]),s(c,{onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickClear:n.clear,title:"浏览记录",desc:"清空"},null,8,["onOnClickBack","onOnClickTitle","onOnClickClear"]),s(c,{"left-show":!1,onOnClickTitle:n.title,onOnClickIcon:n.icon,onOnClickClear:n.edit,onOnClickSend:n.more,title:"购物车",titIcon:"locationg3",desc:"编辑",icon:"more-x"},null,8,["onOnClickTitle","onOnClickIcon","onOnClickClear","onOnClickSend"]),u,s(c,{tab:"",tabs:[{id:"11",name:"商品"},{id:"22",name:"店铺"}],onSwitchTab:n.switchTab,onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickClear:n.edit,onOnClickSend:n.list,desc:"编辑",icon:"horizontal-n"},null,8,["onSwitchTab","onOnClickBack","onOnClickTitle","onOnClickClear","onOnClickSend"]),h,s(c,{tabs:n.tabList,onSwitchTab:n.switchTab,onOnClickBack:n.back,icon:"more-x",onOnClickSend:n.send},{icons:C((()=>[s(O,{class:"icon",name:"share",onOnClickSlotSend:n.morelist},null,8,["onOnClickSlotSend"])])),_:1},8,["tabs","onSwitchTab","onOnClickBack","onOnClickSend"])])};export default d;