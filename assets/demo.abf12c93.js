import{c as e}from"./mobile.4cb2b3ef.js";import{a as s,s as i,x as n,r as l,o as t,c as o,f as a,q as c}from"./vendor.ce30e942.js";import"./index.5e9b6455.js";const{createDemo:m}=e("actionsheet");var u=m({props:{},setup(){const e=s({isVisible1:!1,isVisible2:!1,isVisible3:!1,isVisible4:!1,isVisible5:!1,val1:"",val2:"",val3:"",val4:"",desc:"这是一段描述信息",chooseTagValue:"着色选项"});return{state:e,menuItemsOne:[{name:"选项一"},{name:"选项二"},{name:"选项三"}],menuItemsTwo:[{name:"选项一"},{name:"选项二"},{name:"选项三",subname:"描述信息"}],menuItemsThree:[{name:"着色选项"},{name:"禁用选项",disable:!0}],chooseItem:s=>{console.log(s,"itemParams"),e.val1=s.name},chooseItemTwo:function(s){e.val2=s.name},chooseItemThree:function(s){e.val3=s.name},switchActionSheet:s=>{e[s]=!e[s]}}}});const h=c();i("data-v-164e86ea");const b={class:"demo-list demo"},r=a("h2",null,"基本用法",-1),v=a("span",null,[a("label",null,"基础用法")],-1),d=a("span",null,[a("label",null,"展示取消按钮")],-1),p=a("span",null,[a("label",null,"展示描述信息")],-1),T=a("h2",null,"选项状态",-1),I=a("span",null,[a("label",null,"选项状态")],-1);n();const V=h(((e,s,i,n,c,m)=>{const u=l("nut-cell"),V=l("nut-actionsheet");return t(),o("div",b,[r,a(u,{"show-icon":!0,isLink:!0,onClick:s[1]||(s[1]=s=>e.switchActionSheet("isVisible1"))},{default:h((()=>[v,a("div",{class:"selected-option",innerHTML:e.state.val1},null,8,["innerHTML"])])),_:1}),a(u,{showIcon:!0,isLink:!0,onClick:s[2]||(s[2]=s=>e.switchActionSheet("isVisible2"))},{default:h((()=>[d,a("div",{class:"selected-option",innerHTML:e.state.val2},null,8,["innerHTML"])])),_:1}),a(u,{isLink:!0,onClick:s[3]||(s[3]=s=>e.switchActionSheet("isVisible3"))},{default:h((()=>[p,a("div",{class:"selected-option",innerHTML:e.state.val3},null,8,["innerHTML"])])),_:1}),T,a(u,{isLink:!0,onClick:s[4]||(s[4]=s=>e.switchActionSheet("isVisible4"))},{default:h((()=>[I])),_:1}),a(V,{"is-visible":e.state.isVisible1,"menu-items":e.menuItemsOne,onChoose:e.chooseItem},null,8,["is-visible","menu-items","onChoose"]),a(V,{"is-visible":e.state.isVisible2,"cancel-txt":"取消","menu-items":e.menuItemsOne,onChoose:e.chooseItemTwo},null,8,["is-visible","menu-items","onChoose"]),a(V,{"is-visible":e.state.isVisible3,description:e.state.desc,"menu-items":e.menuItemsTwo,onChoose:e.chooseItemThree,"cancel-txt":"取消"},null,8,["is-visible","description","menu-items","onChoose"]),a(V,{"is-visible":e.state.isVisible4,"cancel-txt":"取消","menu-items":e.menuItemsThree,"choose-tag-value":e.state.chooseTagValue},null,8,["is-visible","menu-items","choose-tag-value"])])}));u.render=V,u.__scopeId="data-v-164e86ea";export default u;