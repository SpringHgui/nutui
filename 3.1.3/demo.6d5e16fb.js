import{c as e}from"./mobile.e4c7a2c6.js";import{m as l,r as a,o as u,e as o,j as t,g as d}from"./vendor.df414d47.js";import"./index.84d39d93.js";const{createDemo:m}=e("textarea");var n=m({setup:()=>({value:l(""),value2:l(""),value3:l("")})});const s={class:"demo full"},r=d("h2",null,"基础用法",-1),v=d("h2",null,"显示字数统计",-1),i=d("h2",null,"高度自定义，拉伸",-1),c=d("h2",null,"只读",-1),h=d("h2",null,"禁用",-1);n.render=function(e,l,d,m,n,V){const p=a("nut-textarea");return u(),o("div",s,[r,t(p,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l)},null,8,["modelValue"]),v,t(p,{modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value2=l),"limit-show":"","max-length":"20"},null,8,["modelValue"]),i,t(p,{modelValue:e.value3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.value3=l),rows:"10",autosize:""},null,8,["modelValue"]),c,t(p,{readonly:"","model-value":"textarea直读状态"}),h,t(p,{disabled:"","model-value":"textarea禁用状态","limit-show":"","max-length":"20"})])};export{n as default};