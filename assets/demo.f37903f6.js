import{c as t}from"./mobile.c3875bc0.js";import{T as s}from"./index.7a290284.js";import{r as i,o,c as e,f as n}from"./vendor.91b30fe3.js";import"./index.00b2b72d.js";const{createDemo:a}=t("toast"),r=a({setup:()=>({textToast:t=>{s.text(t,{duration:1e5})},successToast:t=>{s.success(t)},errorToast:t=>{s.fail(t)},warningToast:t=>{s.warn(t)},loadingToast:t=>{s.loading(t,{duration:0,id:"test"}),setTimeout((()=>{s.success("加载完成",{id:"test",duration:2e3})}),2e3)}})}),l={class:"demo"},c=n("h2",null,"基本用法",-1),d=n("h2",null,"动态更新",-1);r.render=function(t,s,a,r,u,T){const m=i("nut-cell");return o(),e("div",l,[c,n("div",null,[n(m,{title:"Text 文字提示","is-link":"",onClick:s[1]||(s[1]=s=>t.textToast("网络失败，请稍后再试~"))}),n(m,{title:"Success 成功提示","is-link":"",onClick:s[2]||(s[2]=s=>t.successToast("成功提示"))}),n(m,{title:"Error 失败提示","is-link":"",onClick:s[3]||(s[3]=s=>t.errorToast("失败提示"))}),n(m,{title:"Warning 警告提示","is-link":"",onClick:s[4]||(s[4]=s=>t.warningToast("警告提示"))})]),d,n(m,{title:"Loading 加载提示","is-link":"",onClick:s[5]||(s[5]=s=>t.loadingToast("加载中"))})])};export default r;
