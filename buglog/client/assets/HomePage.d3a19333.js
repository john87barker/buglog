import{r as t,A as a,c as e,p as s,e as o,d as r,o as l,a as c,b as n,w as d}from"./vendor.d399f1f7.js";import{b as u,P as b,_ as m,a as p,A as g}from"./index.1d734f39.js";const i={name:"Home",props:{bugs:{type:Array,required:!0}},setup(){const s=t();return a((async()=>{try{await u.getAllBugs(),console.log("mounted get all")}catch(t){b.toast(t,"error")}})),{state:s,account:e((()=>g.account)),components:{TableTop:m,CreateBugModal:p}}}},f=d();s("data-v-599bb72a");const v={class:"home flex-grow-1 d-flex flex-column align-items-center justify-content-between row "},y={class:"col-md-12 col-sm-12 "},w={class:"row pt-3"},x=n("div",{class:"col-md-6 col-sm-12  pb-4"},[n("h2",null,"Bugs")],-1),B={class:"col-md-6 col-sm-12 pb-4 "},A=n("button",{type:"button","data-target":"#createBugReport","data-toggle":"modal",class:"mx-2 my-1 btn btn-gradient report",title:"report bug"}," Report Bug ",-1);o();const T=f(((t,a,e,s,o,d)=>{const u=r("CreateBugModal"),b=r("TableTop");return l(),c("div",v,[n("div",y,[n("div",w,[x,n("div",B,[A,n(u,{bug:t.b},null,8,["bug"])]),n(b)])])])}));i.render=T,i.__scopeId="data-v-599bb72a";export default i;
