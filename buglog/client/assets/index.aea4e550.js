import{r as t,c as e,o as a,a as o,b as s,F as n,d as r,p as c,e as l,w as i,t as d,f as u,C as g,S as p,g as m,h as b,i as v,j as y,k as A,l as h,u as f,$ as B,m as w,n as _,v as x,q as C,s as E,x as T,y as S,z as k}from"./vendor.f95a75e2.js";const N=t({user:{},account:{},bugs:[],activeBug:{},notes:[]});const O={name:"App",setup:()=>({appState:e((()=>N))})},D={class:"center"},M={class:"container-fluid bg-grey"},L=s("footer",null,[s("div",{class:"bg-dark text-light text-center p-3 fixed-bottom"})],-1);O.render=function(t,e,c,l,i,d){const u=r("Navbar"),g=r("router-view");return a(),o(n,null,[s("header",D,[s(u)]),s("main",M,[s(g)]),L],64)};const I={name:"Component",setup:()=>({}),components:{}},j=i("data-v-2917f8b1");c("data-v-2917f8b1");const R={class:"component col-md-12  bg-primary top "},U={class:"row pt-1 text-light"},P=s("div",{class:"col-md-3 text-right pr-5"},[s("button",{type:"button","data-target":"#createNote","data-toggle":"modal",class:"mx-2 my-1 btn btn-outline-secondary",title:"create note"}," Notes ")],-1),Q={class:"row"};l();const z=j(((t,e,n,c,l,i)=>{const d=r("NoteModal"),u=r("BugDescription");return a(),o("div",R,[s("div",U,[P,s(d)]),s("div",Q,[s(u)])])}));I.render=z,I.__scopeId="data-v-2917f8b1";var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const q={name:"Component",props:{bug:{type:Object,required:!0}},setup:()=>({}),components:{}},Y=i("data-v-6a0a873e");c("data-v-6a0a873e");const G={class:"d-flex justify-content-around",title:"go to bug"},W={key:0,class:"col-md-3 text-left text-light "},F={key:1,class:"col-md-3"},H={class:"col-md-3 text-right pr-3"},X={class:"col-md-3 text-right pr-5"},Z={key:0,class:"red"},J={key:1,class:"green"};l();const K=Y(((t,e,n,r,c,l)=>(a(),o("div",G,[n.bug.creator?(a(),o("div",W,d(n.bug.title),1)):u("",!0),n.bug.creator?(a(),o("div",F,d(n.bug.creator.name),1)):u("",!0),s("div",H,d(new Date(n.bug.createdAt).toLocaleDateString()),1),s("div",X,[1==n.bug.closed?(a(),o("div",Z," Closed ")):(a(),o("div",J," Open "))])]))));q.render=K,q.__scopeId="data-v-6a0a873e";var $=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const tt=window.location.origin.includes("localhost"),et=tt?"http://localhost:3000":"";function at(t,e){if(tt)console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e)}}const ot={log(){at("log",arguments)},error(){at("error",arguments)},warn(){at("warn",arguments)},assert(){at("assert",arguments)},trace(){at("trace",arguments)}},st=g.create({baseURL:et,timeout:8e3});const nt=new class{async getNotesByBugId(t){const e=await st.get(`api/bugs/${t}/notes`);ot.log(e.data),N.notes=e.data}async createNote(t){try{const e=await st.post("api/notes",t);return ot.log(e.data),N.notes=[e.data,...N.notes],e.data}catch(e){ot.log(e)}}async destroyNote(t){await st.delete("api/notes/"+t);const e=N.notes;console.log(t),N.notes=e.filter((e=>e.id!==t))}};class rt{static async confirm(t="Are you sure?",e="You won't be able to revert this!",a="warning",o="Yes, delete it!"){try{return!!(await p.fire({title:t,text:e,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:o})).isConfirmed}catch(s){return!1}}static toast(t="Warning!",e="warning",a="top-end",o=3e3,s=!0){p.fire({title:t,icon:e,position:a,timer:o,timerProgressBar:s,toast:!0,showConfirmButton:!1})}}const ct={name:"BugNotes",props:{},setup:()=>({notes:e((()=>N.notes)),account:e((()=>N.account)),activeBug:e((()=>N.activeBug)),async destroyNote(t){try{await m.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((async e=>{e.isConfirmed&&(await nt.destroyNote(t),m.fire("Congratulations","Your note is gone.","success"))}))}catch(e){rt.toast(e,"error")}}}),components:{}},lt=i("data-v-012a3640");c("data-v-012a3640");const it={class:"row"},dt={class:"m-2"},ut={class:"row d-flex justify-content-between mb-3"},gt={class:"col-md-4 border border-secondary d-flex pb-2 rounded"},pt={key:0},mt={class:"row"},bt={class:"col-md-12 bg-dark-grey py-2 rounded"};l();const vt=lt(((t,e,r,c,l,i)=>(a(),o("div",it,[(a(!0),o(n,null,b(c.notes,(t=>(a(),o("div",{class:"BugNotes col-md-12  bg-primary px-5 list py-3 shadow mt-3 rounded",key:t.id},[s("div",dt,[s("div",ut,[s("div",gt,[s("div",null,[s("img",{src:t.creator.picture,alt:"",class:"pic mr-3"},null,8,["src"])]),s("div",null,d(t.creator.name),1)]),0==c.activeBug.closed&&t.creatorId==c.account.id?(a(),o("div",pt,[s("button",{class:" btn btn-outline-warning",onClick:e=>c.destroyNote(t.id),title:"close note"}," Delete Note ",8,["onClick"])])):u("",!0)]),s("div",mt,[s("div",bt,d(t.body),1)])])])))),128))]))));ct.render=vt,ct.__scopeId="data-v-012a3640";var yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct});const At=new class{async getAllBugs(){const t=await st.get("api/bugs");console.log(t.data),N.bugs=t.data}async getBugById(t){const e=await st.get(`api/bugs/${t}`);N.activeBug=e.data}async getNotesByBugId(t){const e=await st.get(`api/bugs/${t}/notes`);ot.log(e.data),N.notes=e.data,console.log(e.data)}async createBug(t){try{const e=await st.post("api/bugs",t);return ot.log(e.data),N.bugs=[e.data,...N.bugs],e.data}catch(e){ot.log(e)}}async editBug(t,e){const a=await st.put("api/bugs/"+t,e);return N.bugs=a.data,a.data}async destroyBug(t){await st.delete("api/bugs/"+t);const e=N.bugs;N.bugs=e.filter((e=>e.id!==t))}};let ht;const ft={},Bt=function(t,e){if(!e||0===e.length)return t();if(void 0===ht){const t=document.createElement("link").relList;ht=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in ft)return;ft[t]=!0;const e=t.endsWith(".css"),a=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const o=document.createElement("link");return o.rel=e?"stylesheet":ht,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e?new Promise(((t,e)=>{o.addEventListener("load",t),o.addEventListener("error",e)})):void 0}))).then((()=>t()))};function wt(t){return()=>function(t){switch(t){case"./pages/AboutPage.vue":return Bt((()=>import("./AboutPage.f2192f3e.js")),["/assets/AboutPage.f2192f3e.js","/assets/vendor.f95a75e2.js"]);case"./pages/AccountPage.vue":return Bt((()=>import("./AccountPage.91acdf47.js")),["/assets/AccountPage.91acdf47.js","/assets/AccountPage.f3fa63f7.css","/assets/vendor.f95a75e2.js"]);case"./pages/BugDetailsPage.vue":return Bt((()=>import("./BugDetailsPage.c599e4cb.js")),["/assets/BugDetailsPage.c599e4cb.js","/assets/BugDetailsPage.6f1fa415.css","/assets/vendor.f95a75e2.js"]);case"./pages/HomePage.vue":return Bt((()=>import("./HomePage.76916b8b.js")),["/assets/HomePage.76916b8b.js","/assets/HomePage.beb71d65.css","/assets/vendor.f95a75e2.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+t))}}(`./pages/${t}.vue`)}const _t=[{path:"/",name:"Home",component:wt("HomePage")},{path:"/bugdetails/:id",name:"BugDetails",component:wt("BugDetailsPage"),beforeEnter:A},{path:"/account",name:"Account",component:wt("AccountPage"),beforeEnter:A}],xt=v({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:y(),routes:_t});const Ct={name:"BugDescription",props:{note:{type:Object,required:!0}},setup:()=>({account:e((()=>N.account)),bugs:e((()=>N.bugs)),activeBug:e((()=>N.activeBug)),notes:e((()=>N.notes)),async destroyBug(t){await m.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, it is finished!"}).then((async e=>{e.isConfirmed&&(xt.push({name:"Home"}),await At.destroyBug(t),m.fire("Congratulations","Your case is closed.","success"))}))}}),components:{NotesComponent:ct}},Et=i("data-v-503869fc");c("data-v-503869fc");const Tt={class:"component col-md-12 bg-primary top "},St={class:"row pt-1 text-light"},kt={class:"col-md-12 text-right  my-2 d-flex justify-content-between"},Nt={key:0},Ot=s("button",{type:"button","data-target":"#createNote","data-toggle":"modal",class:"mx-2 my-1 btn btn-outline-secondary",title:"create note"}," Add a Note ",-1),Dt={key:0},Mt={class:"BugDescription col-md-12 bg-dark-grey px-5 list py-3 mb-5 shadow"},Lt={class:"row my-3"},It={key:0,class:"col-md-4 d-flex"},jt={class:"pl-2 pt-3"},Rt={class:"col-md-4 pt-3 text-grey"},Ut=s("div",null," Last Updated: ",-1),Pt={class:"col-md-4 pt-3"},Qt={class:"col-md-3 text-right pr-5"},zt=h(" Status: "),Vt={key:0,class:"red"},qt=s("h5",null," Closed ",-1),Yt={key:1,class:"green"},Gt=s("h5",null," Open ",-1),Wt={class:"row"},Ft={class:"col-md-12 pb-4"},Ht=s("div",null," Report Details: ",-1);l();const Xt=Et(((t,e,n,c,l,i)=>{const g=r("NoteModal"),p=r("NotesComponent");return a(),o("div",Tt,[s("div",St,[s("div",kt,[0==c.activeBug.closed?(a(),o("div",Nt,[Ot,s(g)])):u("",!0),s(g),s("div",null,[0==c.activeBug.closed?(a(),o("div",Dt,[s("button",{type:"button",class:"mx-2 my-1 btn btn-outline-warning",onClick:e[1]||(e[1]=t=>c.destroyBug(c.activeBug.id)),title:"close bug"}," Close this bug ")])):u("",!0)])]),s("div",Mt,[s("div",Lt,[c.activeBug.creator?(a(),o("div",It,[s("div",null,[s("img",{src:c.activeBug.creator.picture,alt:"",class:"rounded pic"},null,8,["src"])]),s("div",jt,d(c.activeBug.creator.name),1)])):u("",!0),s("div",Rt,[Ut,s("div",null,d(new Date(c.activeBug.updatedAt).toLocaleDateString()),1)]),s("div",Pt,[s("div",Qt,[zt,1==c.activeBug.closed?(a(),o("div",Vt,[qt])):(a(),o("div",Yt,[Gt]))])])]),s("div",Wt,[s("div",Ft,[Ht,s("div",null,d(c.activeBug.description),1)])]),s(p)])])])}));Ct.render=Xt,Ct.__scopeId="data-v-503869fc";var Zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ct});const Jt={name:"Component",props:{},setup:()=>({bugs:e((()=>N.bugs))}),components:{}},Kt=i("data-v-63cae7ad");c("data-v-63cae7ad");const $t={class:"component col-md-12 bg-dark-grey px-5 list pt-3 mb-4"};l();const te=Kt(((t,e,c,l,i,d)=>{const u=r("Bug"),g=r("router-link");return a(),o("div",$t,[(a(!0),o(n,null,b(l.bugs,(t=>(a(),o("div",{class:"col-md-12 py-3 bg-primary shadow mb-3 bug text-light rounded right ",key:t.id},[s(g,{to:{name:"BugDetails",params:{id:t.id}},class:"text-light"},{default:Kt((()=>[s(u,{bug:t},null,8,["bug"])])),_:2},1032,["to"])])))),128))])}));Jt.render=te,Jt.__scopeId="data-v-63cae7ad";var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jt});const ae={name:"CreateBugModal",props:{bugs:{type:Array,required:!0}},setup(){const a=f(),o=t({newBug:{}});return{state:o,account:e((()=>N.account)),async createBug(){try{const t=await At.createBug(o.newBug);o.newBug={},rt.toast("Bug has been reported","success"),console.log(t.id),B("#createBugReport").modal("toggle"),a.push({name:"BugDetails",params:{id:t.id}})}catch(t){rt.toast(t,"error")}}}},components:{}},oe=i("data-v-716228ef");c("data-v-716228ef");const se={class:"modal fade",id:"createBugReport",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ne={class:"modal-dialog "},re={class:"modal-content bg-dark-grey"},ce=s("div",{class:"modal-header bg-primary "},[s("h5",{class:"modal-title bg-primary",id:"exampleModalLabel"}," Report a Bug "),s("button",{type:"button",class:"btn-close btn btn-outline-secondary","data-dismiss":"modal","aria-label":"Close",title:"close"}," X ")],-1),le={class:"modal-body modal-body-scrollable"},ie=s("div",{class:"modal-footer"},[s("button",{type:"submit",class:"btn btn-secondary",title:"submit form"}," Save Report ")],-1);l();const de=oe(((t,e,n,r,c,l)=>(a(),o("div",se,[s("div",ne,[s("form",{onSubmit:e[3]||(e[3]=w(((...t)=>r.createBug&&r.createBug(...t)),["prevent"]))},[s("div",re,[ce,s("div",le,[_(s("input",{class:"form-control my-2",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>r.state.newBug.title=t),required:"",id:"bugTitle",placeholder:"Problem title..."},null,512),[[x,r.state.newBug.title]]),_(s("textarea",{class:"form-control my-2","onUpdate:modelValue":e[2]||(e[2]=t=>r.state.newBug.description=t),required:"",id:"bugDescription",rows:"6",placeholder:"Describe the problem..."},"\r\n          ",512),[[x,r.state.newBug.description]])]),ie])],32)])]))));ae.render=de,ae.__scopeId="data-v-716228ef";var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});const ge={name:"CreateBugModal",props:{bug:{type:Object,required:!0}},setup(a){const o=f(),s=t({activeBug:{}});return{state:s,account:e((()=>N.account)),async editBug(){try{const t=await At.editBug(a.bug.id,s.activeBug);console.log(t),s.activeBug={},rt.toast("Bug has been reported","success"),o.push({name:"BugDetails",params:{id:t.id}})}catch(t){rt.toast(t,"error")}}}},components:{}},pe=i("data-v-f7f9d564");c("data-v-f7f9d564");const me={class:"modal fade",id:"editBugReport",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},be={class:"modal-dialog "},ve={class:"modal-content bg-dark-grey"},ye=s("div",{class:"modal-header bg-primary "},[s("h5",{class:"modal-title bg-primary",id:"exampleModalLabel"}," Edit your bug "),s("button",{type:"button",class:"btn-close btn btn-outline-secondary","data-dismiss":"modal","aria-label":"Close",title:"close"}," X ")],-1),Ae={class:"modal-body modal-body-scrollable"},he={class:"modal-footer"};l();const fe=pe(((t,e,n,r,c,l)=>(a(),o("div",me,[s("div",be,[s("div",ve,[ye,s("div",Ae,[_(s("input",{class:"form-control my-2",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>r.state.activeBug.title=t),id:"bugTitle",placeholder:"Edit the title..."},null,512),[[x,r.state.activeBug.title]]),_(s("textarea",{class:"form-control my-2","onUpdate:modelValue":e[2]||(e[2]=t=>r.state.activeBug.description=t),id:"bugDescription",rows:"6",placeholder:"Edit your description..."},"\r\n          ",512),[[x,r.state.activeBug.description]])]),s("div",he,[s("button",{type:"submit",onClick:e[3]||(e[3]=(...t)=>r.editBug&&r.editBug(...t)),class:"btn btn-secondary",title:"submit","data-toggle":"modal","data-target":"#editBugReport"}," Update Report ")])])])]))));ge.render=fe,ge.__scopeId="data-v-f7f9d564";var Be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge}),we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAACWUlEQVRo3u2Yy2oUQRSG/8roystGQcbbQnCT5B3EKwhRhySIotm5UBMi+gKC7+AuboQQIa+QrVsXSXSXhcGN0XEhBieXmc/F9EBTU9Pd1d3TnWD/0NCnq8+p/z99qrqqpAoVKlQ4tABqwHvgUQrfaWAJOFom+UW62Acee5LfC3yXSxERIt/DHvAggd/9EPkeFssQMAXsWkT2gZkIn2kH+V1gqnABAaEGsOMQsQJ8A/4CreB+xUG+BdwphXxIxO2AqC9awN2s/Y/koOGypFpK3/O5ZtMXwJsUmbfxuizy9wYQWgVeAGPAseAaC56tDfCZyc7Ij/xZ4Iejpp8BIxF+NWDWMfB/AxeGRTbpgLzqEfOaQ4QTRQl4miLu3EERsBpVNhFxa8B6VgF5TKMLxpiOr5Mxpi3pXQ79e2duw0rSqNWeOKPAuNW84csnzRc4Y9mbGfLxNSZ2LIyvg51FY4yJau/rMOZ9uz0OeYyBUhGr1jejvsga/9B/gUpA2TgS94LvLJO1pv+7WSiNgO2wAZxI2zlw0nr0pwgB3y07yzr+omVv+QaIHQMJVoQ3JX3pGZ41fMuyL2X9MzsFxGAN8N7UB8vpzwdhPwAwmyLufJLARQnYAa57xLxB/6necAQMIFAHthwi5qLKKSibeQf5X8C5oZCNIDMBdBxJWwde0t2sHA+uceDVgJpvA5OFkg+JeEL3LDQt2sDzUsiHRDSAZgryTaBRKvmQiNPAAsnOeraBt0A9j76z/ST6hZyS9FDSFUmjkuqSOpJ+Svok6aOkD8aYZqEZrlChQoWh4R8QB49DH0FELgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xM1QyMTozNTozNSswMDowMCP/+C8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMTNUMjE6MzU6MzUrMDA6MDBSokCTAAAAAElFTkSuQmCC";const _e={name:"Component",setup:()=>({}),components:{}},xe=i("data-v-59486d01");c("data-v-59486d01");const Ce={class:"home flex-grow-1 d-flex flex-column align-items-center justify-content-center"},Ee=s("img",{src:we,alt:"BugLog Logo"},null,-1),Te=s("h1",{class:"my-5 bg-dark text-light p-3 rounded d-flex align-items-center"},[s("span",{class:"mx-2 text-white"},"Log your Bugs!")],-1);l();const Se=xe(((t,e,s,n,r,c)=>(a(),o("div",Ce,[Ee,Te]))));_e.render=Se,_e.__scopeId="data-v-59486d01";var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e});const Ne=new class{async getAccount(){try{const t=await st.get("/account");N.account=t.data}catch(t){ot.error("HAVE YOU STARTED YOUR SERVER YET???",t)}}};let Oe=!1,De=[];const Me="connected",Le="authenticate",Ie="authenticated",je="error";const Re=new class extends class{constructor(t=et){this.socket=C(t||et),this.on(Me,this.onConnected).on(Ie,this.onAuthenticated).on(je,this.onError)}on(t,e){return this.socket.on(t,e.bind(this)),this}onConnected(t){ot.log("[SOCKET_CONNECTION]",t),Oe=!0}onAuthenticated(t){ot.log("[SOCKET_AUTHENTICATED]",t);const e=[...De];De=[],e.forEach((t=>{this.emit(t.action,t.payload)}))}authenticate(t){this.socket.emit(Le,t)}onError(t){ot.error("[SOCKET_ERROR]",t)}emit(t,e){if(!Oe)return ot.log("[ENQUEING_ACTION]",{action:t,payload:e}),De.push({action:t,payload:e});this.socket.emit(t,e)}}{constructor(){super(),this.on("error",this.onError)}onError(t){ot.error("[SOCKET_ERROR]",t),rt.toast(t.message,"error")}},Ue=E({domain:"john87barker.us.auth0.com",clientId:"QDEPzwUGYLPDpbduros4CY73LftMWiqb",audience:"https://buglog1.herokuapp.com/#/",useRefreshTokens:!0,onRedirectCallback:t=>{xt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});async function Pe(t){if(!Ue.isAuthenticated)return t;const e=1e3*Ue.identity.exp,a=e<Date.now(),o=e<Date.now()+432e5;return a?await Ue.loginWithPopup():o&&(await Ue.getTokenSilently(),st.defaults.headers.authorization=Ue.bearer,Re.authenticate(Ue.bearer)),t}Ue.on(Ue.AUTH_EVENTS.AUTHENTICATED,(async function(){st.defaults.headers.authorization=Ue.bearer,st.interceptors.request.use(Pe),N.user=Ue.user,await Ne.getAccount(),Re.authenticate(Ue.bearer)}));const Qe={setup:()=>({state:t({dropOpen:!1}),user:e((()=>N.user)),async login(){Ue.loginWithPopup()},async logout(){Ue.logout({returnTo:window.location.origin})}})},ze=i("data-v-d79e9df6");c("data-v-d79e9df6");const Ve={class:"navbar navbar-expand-lg navbar-dark bg-gradient row"},qe={class:"col-md-6 center"},Ye=s("div",{class:"d-flex flex-column align-items-center  ",title:"home"},[s("img",{alt:"logo",src:we,height:"45"}),h(" BugLog ")],-1),Ge=s("button",{class:"navbar-toggler lines",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),We={class:"collapse navbar-collapse col-md-6  d-flex justify-content-end col-md-6",id:"navbarText"},Fe={class:"navbar-text"},He={key:1,class:"dropdown "},Xe={class:"mx-3"},Ze=s("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);l();const Je=ze(((t,e,n,c,l,i)=>{const u=r("router-link");return a(),o("nav",Ve,[s("div",qe,[s(u,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:ze((()=>[Ye])),_:1}),Ge]),s("div",We,[s("span",Fe,[c.user.isAuthenticated?(a(),o("div",He,[s("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>c.state.dropOpen=!c.state.dropOpen)},[s("img",{src:c.user.picture,alt:"user photo",height:"40",class:"rounded-circle"},null,8,["src"]),s("span",Xe,d(c.user.name),1)]),s("div",{class:["dropdown-menu p-0 list-group w-100",{show:c.state.dropOpen}],onClick:e[4]||(e[4]=t=>c.state.dropOpen=!1)},[s(u,{to:{name:"Account"}},{default:ze((()=>[Ze])),_:1}),s("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>c.logout&&c.logout(...t))}," logout ")],2)])):(a(),o("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>c.login&&c.login(...t))}," Login "))])])])}));Qe.render=Je,Qe.__scopeId="data-v-d79e9df6";var Ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe});const $e={name:"Component",props:{bug:{type:Object,required:!0},note:{type:Object,required:!0}},setup(a){const o=T(),s=t({newNote:{}});return{state:s,account:e((()=>N.account)),notes:e((()=>N.notes)),async createNote(){try{s.newNote.bugId=o.params.id,await nt.createNote(s.newNote),s.newNote={},B("#createNote").modal("toggle")}catch(t){rt.toast(t,"error")}}}},components:{}},ta=i("data-v-75915778");c("data-v-75915778");const ea={class:"modal fade",id:"createNote",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},aa={class:"modal-dialog "},oa={class:"modal-content bg-dark-grey"},sa=s("div",{class:"modal-header bg-primary "},[s("h5",{class:"modal-title bg-primary",id:"exampleModalLabel"}," Create a Note "),s("button",{type:"button",class:"btn-close btn btn-outline-secondary","data-dismiss":"modal","aria-label":"Close",title:"close"}," X ")],-1),na={class:"modal-body modal-body-scrollable"},ra=s("div",{class:"modal-footer"},[s("button",{type:"submit",class:"btn btn-secondary",title:"submit"}," Save Note ")],-1);l();const ca=ta(((t,e,n,r,c,l)=>(a(),o("div",ea,[s("div",aa,[s("form",{onSubmit:e[2]||(e[2]=w(((...t)=>r.createNote&&r.createNote(...t)),["prevent"]))},[s("div",oa,[sa,s("div",na,[_(s("textarea",{class:"form-control",id:"noteDescription","onUpdate:modelValue":e[1]||(e[1]=t=>r.state.newNote.body=t),required:"",rows:"3",placeholder:"Add a note..."},"\r\n          ",512),[[x,r.state.newNote.body]])]),ra])],32)])]))));$e.render=ca,$e.__scopeId="data-v-75915778";var la=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$e});const ia={name:"Component",setup:()=>({}),components:{}},da=i("data-v-2a35470f");c("data-v-2a35470f");const ua={class:"component col-md-12 col-sm-12 bg-primary top center"},ga=S('<div class="row pt-1 text-light justify-content-between" data-v-2a35470f><h4 class="col-md-3 pl-5" data-v-2a35470f> Title </h4><h4 class="col-md-3 " data-v-2a35470f> Reported By </h4><h4 class="col-md-3 pl-5" data-v-2a35470f> Last Update </h4><h4 class="col-md-3 " data-v-2a35470f> Status </h4></div>',1),pa={class:"row"};l();const ma=da(((t,e,n,c,l,i)=>{const d=r("BugList");return a(),o("div",ua,[ga,s("div",pa,[s(d)])])}));ia.render=ma,ia.__scopeId="data-v-2a35470f";var ba=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ia});const va=k(O);!function(t){const e={"./components/BackStrip.vue":V,"./components/Bug.vue":$,"./components/BugDescription.vue":Zt,"./components/BugList.vue":ee,"./components/CreateBugModal.vue":ue,"./components/EditBug.vue":Be,"./components/LoadComponent.vue":ke,"./components/Navbar.vue":Ke,"./components/NoteModal.vue":la,"./components/NotesComponenet.vue":yt,"./components/TableTop.vue":ba};Object.entries(e).forEach((([e,a])=>{const o=a.name||e.substr(e.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(o,a.default)}))}(va),va.use(xt).mount("#app");export{N as A,rt as P,ia as _,ae as a,At as b,nt as n};