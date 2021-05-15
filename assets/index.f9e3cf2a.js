var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,l=(e,l)=>{for(var s in l||(l={}))t.call(l,s)&&o(e,s,l[s]);if(n)for(var s of n(l))a.call(l,s)&&o(e,s,l[s]);return e};import{x as s,d as r,a as i,o as c,c as d,r as u,b as m,e as p,w as h,f as v,u as f,g as _,v as w,t as g,F as b,h as y,i as x,j as L,k,l as z,T as E,K as M,m as R,n as j,p as O,q as V,s as P,y as T,z as C}from"./vendor.ea77945f.js";let B;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,l)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const r=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){l(new Error(`Failed to import: ${e}`)),o(i)},onload(){n(self[t].moduleMap[s]),o(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");const $={},I=function(e,t){if(!t)return e();if(void 0===B){const e=document.createElement("link").relList;B=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in $)return;$[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":B,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},S=[{name:"system",path:"/system",component:()=>I((()=>__import__("./layout.54dc9ab1.js")),["./assets/layout.54dc9ab1.js","./assets/vendor.ea77945f.js"]),redirect:"/system/editor",meta:{id:"1",title:"功能管理",icon:"system"},children:[{name:"editor",path:"/system/editor",component:()=>I((()=>__import__("./editor.d44b377e.js")),["./assets/editor.d44b377e.js","./assets/editor.49c73bc7.css","./assets/vendor.ea77945f.js"]),meta:{id:"2",title:"富文本",icon:"editor"}},{name:"excel",path:"/system/excel",component:()=>I((()=>__import__("./excel.44ad3296.js")),["./assets/excel.44ad3296.js","./assets/excel.43594697.css","./assets/vendor.ea77945f.js"]),meta:{id:"3",title:"Excel",icon:"excel"}}]}],A=localStorage;function D(){return A.getItem("token")}function H(e,t){const n=[];return e.forEach((e=>{const a=l({},e);(function(e,t){var n;return!!e.includes(null==(n=t.meta)?void 0:n.id)})(t,a)&&(a.children&&(a.children=H(a.children,t)),n.push(a))})),n}function U(e,t,n="表格",a="数据导出"){const o=[],l=["序号",...e.map((e=>null==e?void 0:e.label))];o.push(l),t.forEach(((e,t)=>{const n=[];n.push(t+1,...Object.values(e)),o.push(n)}));const r=s.utils.aoa_to_sheet(o),i=s.utils.book_new();s.utils.book_append_sheet(i,r,n),s.writeFile(i,`${a}.xlsx`)}const F=r({id:"main",state:()=>({collapse:!1,token:"",name:"",limitRoutes:[]}),actions:{login(e){var t;return this.name=e.value.username,t=e.value.username,A.setItem("token",t),Promise.resolve()},setToken(e){this.token=e},setRoutes(e){const t=[];"admin"===e?t.push("1","2","3"):t.push("1","2");const n=H(S,t);return this.limitRoutes=n,Promise.resolve(n)},changeCollapsed(){this.collapse=!this.collapse},setCollapse(e){this.collapse=e},reset(){this.name="",this.token="",this.limitRoutes=[],A.removeItem("token")}}});var q=i({expose:[],setup:e=>(c((()=>{window.onresize=()=>{const e=document.body.clientWidth<768;F().setCollapse(e)}})),(e,t)=>{const n=u("router-view");return m(),d(n)})});const W=p((()=>F().collapse));var N=i({expose:[],setup:e=>(e,t)=>{const n=u("el-image"),a=u("el-row");return m(),d(a,{class:"app-logo"},{default:h((()=>[v(n,{src:f("./assets/logo.1a621e30.png")},null,8,["src"]),_(v("span",null,"后台管理系统",512),[[w,!f(W)]])])),_:1})}});var K={menuText:"#bfcbd9",menuActiveText:"#fff",menuBg:"#001529",sideBarWidth:"210px"};const G={class:"app-menu-title"},J={class:"app-menu-title"};var Q=i({expose:[],props:["menuList"],setup:e=>(t,n)=>{const a=u("svg-icon"),o=u("menu-item",!0),l=u("el-menu-item-group"),s=u("el-submenu"),r=u("el-menu-item");return e.menuList.children&&e.menuList.children.length>0?(m(),d(s,{key:0,index:e.menuList.path,"popper-class":"app-menu-submenu"},{title:h((()=>{var t;return[v(a,{name:null==(t=e.menuList.meta)?void 0:t.icon},null,8,["name"]),v("span",G,g(e.menuList.meta.title),1)]})),default:h((()=>[v(l,null,{default:h((()=>[(m(!0),d(b,null,y(e.menuList.children,(e=>(m(),d(o,{key:e.path,"menu-list":e},null,8,["menu-list"])))),128))])),_:1})])),_:1},8,["index"])):(m(),d(r,{key:1,index:e.menuList.path},{title:h((()=>{var t;return[v("span",J,g(null==(t=e.menuList.meta)?void 0:t.title),1)]})),default:h((()=>{var t;return[v(a,{name:null==(t=e.menuList.meta)?void 0:t.icon},null,8,["name"])]})),_:1},8,["index"]))}}),X=i({expose:[],setup(e){const t=p((()=>function(e){const t=e=>{const n=[];return e.filter((e=>{var t;return!(null==(t=e.meta)?void 0:t.hidden)})).forEach((e=>{var a;const o=e.children&&e.children.filter((e=>!e.meta.hidden));let l=e;!(null==(a=e.meta)?void 0:a.alwaysShow)&&o&&1===o.length&&([l]=o),n.push(l),l.children&&l.children.length>0&&(n[n.length-1].children=t(l.children))})),n};return t(e)}(ve.filter((e=>!e.hidden)).concat(F().limitRoutes)))),n=p((()=>{const e=x();return e.meta.activeMenu?e.meta.activeMenu:e.path}));return(e,a)=>{const o=u("el-menu"),l=u("el-scrollbar");return m(),d(l,null,{default:h((()=>[v(o,{"default-active":f(n),collapse:f(W),"unique-opened":!1,"background-color":f(K).menuBg,"text-color":f(K).menuText,"active-text-color":f(K).menuActiveText,router:"",class:"app-menu-list"},{default:h((()=>[(m(!0),d(b,null,y(f(t),(e=>(m(),d(Q,{key:e.path,"menu-list":e},null,8,["menu-list"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])])),_:1})}}}),Y=i({expose:[],setup:e=>(e,t)=>(m(),d("div",{class:["app-sidebar",{collapse:f(W)}]},[v(N),v(X)],2))}),Z=i({expose:[],setup(e){const t=L([]),n=["error"],a=x();return k((()=>a.path),(()=>{t.value=[],a.matched[0]&&n.includes(a.matched[0].name)||a.matched.forEach((e=>{const n={title:e.meta.title,name:e.name};t.value.push(n)}))}),{immediate:!0}),(e,n)=>{const a=u("el-breadcrumb-item"),o=u("el-breadcrumb");return m(),d(o,{"separator-class":"el-icon-arrow-right"},{default:h((()=>[(m(!0),d(b,null,y(t.value,(e=>(m(),d(a,{key:"b"+e.name,to:{name:e.name}},{default:h((()=>[z(g(null==e?void 0:e.title),1)])),_:2},1032,["to"])))),128))])),_:1})}}});const ee={},te=v("i",{class:"el-icon-bell"},null,-1);ee.render=function(e,t){const n=u("el-badge"),a=u("el-tab-pane"),o=u("el-tabs"),l=u("el-dropdown-menu"),s=u("el-dropdown");return m(),d(s,{class:"app-notice"},{dropdown:h((()=>[v(l,{class:"app-notice-dropdown"},{default:h((()=>[v(o,{type:"card"},{default:h((()=>[v(a,{label:"通知"}),v(a,{label:"关注"}),v(a,{label:"待办"})])),_:1})])),_:1})])),default:h((()=>[v(n,{value:6,max:99,type:"danger"},{default:h((()=>[te])),_:1})])),_:1})};const ne={class:"app-user"},ae={class:"app-name"},oe=v("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),le=z("退出登录");var se=i({expose:[],setup(e){const t=p((()=>F().name)),n=()=>{F().reset(),window.location.reload()};return(e,a)=>{const o=u("el-avatar"),l=u("el-dropdown-item"),s=u("el-dropdown-menu"),r=u("el-dropdown");return m(),d("div",ne,[v(o,{size:30,src:"https://img1.baidu.com/it/u=2680422136,3870612526&fm=26&fmt=auto&gp=0.jpg"}),v(r,null,{dropdown:h((()=>[v(s,null,{default:h((()=>[v(l,{onClick:n},{default:h((()=>[le])),_:1})])),_:1})])),default:h((()=>[v("div",null,[v("span",ae,g(f(t)||"未知"),1),oe])])),_:1})])}}});const re={class:"app-nav"},ie={class:"app-load"},ce={class:"app-message"};var de=i({expose:[],setup(e){const t=()=>{F().changeCollapsed()};return(e,n)=>(m(),d("div",re,[v("div",ie,[v("i",{class:["app-fold",{"el-icon-s-fold":!f(W),"el-icon-s-unfold":f(W)}],onClick:t},null,2),v(Z)]),v("div",ce,[v(ee),v(se)])]))}});const ue={},me={class:"app-main"};ue.render=function(e,t){const n=u("router-view"),a=u("el-scrollbar");return m(),d("div",me,[v(a,null,{default:h((()=>[v(n,null,{default:h((({Component:e})=>[v(E,{name:"el-fade-in"},{default:h((()=>[(m(),d(M,null,[(m(),d(R(e)))],1024))])),_:2},1024)])),_:1})])),_:1})])};const pe={class:"app-con"};var he=i({expose:[],setup:e=>(e,t)=>(m(),d(b,null,[v(Y),v("div",pe,[v(de),v(ue)])],64))});const ve=[{name:"login",path:"/login",meta:{title:"登录",hidden:!0},component:()=>I((()=>__import__("./login.2459db9d.js")),["./assets/login.2459db9d.js","./assets/login.a5f4e270.css","./assets/vendor.ea77945f.js"])},{name:"/",path:"/",redirect:"/dashboard",meta:{hidden:!0}},{name:"dashboard",path:"/dashboard",component:he,redirect:"/dashboard/chart",meta:{title:"导航"},children:[{name:"chart",path:"/dashboard/chart",meta:{title:"图表",icon:"chart"},component:()=>I((()=>__import__("./chart.3469ae63.js")),["./assets/chart.3469ae63.js","./assets/chart.e63a2962.css","./assets/vendor.ea77945f.js"])}]},{name:"error",path:"/error",meta:{title:"错误页面",hidden:!0},component:he,redirect:"/error/404",children:[{name:"404",path:"/error/404",component:I((()=>__import__("./404.867b31fd.js")),["./assets/404.867b31fd.js","./assets/404.9a29f12f.css","./assets/vendor.ea77945f.js"]),meta:{title:"404",hidden:!0}}]}],fe=[{path:"/:pathMatch(.*)*",meta:{title:"NotFound",hidden:!0},redirect:"/error/404"}],_e=j({history:O(),routes:ve});document.addEventListener("DOMContentLoaded",(()=>{let e=document.body,t=document.getElementById("__svg__icons__dom__1621073841610__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.display="none",t.id="__svg__icons__dom__1621073841610__"),t.innerHTML='<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-chart"><path d="M908.075 618.667a42.667 42.667 0 0 1 33.045 69.674l-67.2 82.198V908.8l-63.275-16.981V746.773l52.438-64.106H712.96L768 746.453v133.91l-63.765-17.131V770.56l-70.166-81.323a42.667 42.667 0 0 1 32.299-70.57h241.707zM540.373 160.853 798.72 275.605a64 64 0 0 1 38.037 58.496V576h-64V394.347l-216.32 96.106v343.894h-1.77v22.4l-14.315 6.357a64 64 0 0 1-51.947 0l-258.389-114.73A64 64 0 0 1 192 689.898V334.1a64 64 0 0 1 38.016-58.496l258.39-114.73a64 64 0 0 1 51.946 0zM256 391.36v298.56l236.437 105.003V489.152L256 391.339zm258.368-171.968L270.016 327.893 526.229 433.92l235.499-104.683-247.36-109.866z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-editor"><path d="M516.757 149.333a120.896 120.896 0 0 1 114.006 161.174h104.064a64 64 0 0 1 64 64v436.16a64 64 0 0 1-64 64h-436.16a64 64 0 0 1-64-64v-87.104c0-15.702 11.989-28.63 27.306-30.08l2.923-.15a90.667 90.667 0 0 0 4.395-181.226l-4.395-.107a30.23 30.23 0 0 1-30.08-27.307l-.15-2.944V374.507a64 64 0 0 1 64-64h104.065a120.704 120.704 0 0 1-6.87-40.32c0-85.44 35.414-120.854 120.896-120.854zm0 64a56.896 56.896 0 0 0-53.674 75.862l30.144 85.312h-194.56v77.184a154.73 154.73 0 0 1 5.162 300.693l-5.162 1.259v57.024h436.16V374.528l-194.56-.021 30.144-85.334a56.896 56.896 0 0 0-53.675-75.84z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-excel"><path d="m168.107 621.44 120.746 57.963L512.128 787.54l215.317-104.32 128.768-61.674a64 64 0 0 1-29.952 84.97L540.032 845.141a64 64 0 0 1-55.808 0l-286.23-138.624a64 64 0 0 1-29.887-85.077zm687.829-133.93a64 64 0 0 1-29.675 85.546L540.011 711.68a64 64 0 0 1-55.808 0L197.995 573.056a64 64 0 0 1-31.168-82.176L483.84 640.405l28.288 13.696 286.23-138.624-.15-.064 57.728-27.882zM540.032 185.791 826.24 324.395a64 64 0 0 1 0 115.2L540.032 578.219a64 64 0 0 1-55.808 0l-286.23-138.624a64 64 0 0 1 0-115.2l286.23-138.582a64 64 0 0 1 55.808 0zm-27.904 57.6-286.23 138.603 286.23 138.624 286.23-138.624-286.23-138.603z" /></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-password"><path d="M108.8 44.322H89.6v-5.36c0-9.04-3.308-24.163-25.6-24.163-23.145 0-25.6 16.881-25.6 24.162v5.361H19.2v-5.36C19.2 15.281 36.798 0 64 0c27.202 0 44.8 15.281 44.8 38.961v5.361zm-32 39.356c0-5.44-5.763-9.832-12.8-9.832-7.037 0-12.8 4.392-12.8 9.832 0 3.682 2.567 6.808 6.407 8.477v11.205c0 2.718 2.875 4.962 6.4 4.962 3.524 0 6.4-2.244 6.4-4.962V92.155c3.833-1.669 6.393-4.795 6.393-8.477zM128 64v49.201c0 8.158-8.645 14.799-19.2 14.799H19.2C8.651 128 0 121.359 0 113.201V64c0-8.153 8.645-14.799 19.2-14.799h89.6c10.555 0 19.2 6.646 19.2 14.799z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-system"><path d="M490.667 533.333v256a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h256zm298.666 0a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-256h256zm-362.666 64h-192v192h192v-192zm362.666 0h-192v192h192v-192zM426.667 170.667a64 64 0 0 1 64 64v256h-256a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192zm266.666 0a160 160 0 1 1 0 320 160 160 0 0 1 0-320zm-266.666 64h-192v192h192v-192zm266.666 0a96 96 0 1 0 0 192 96 96 0 0 0 0-192z" /></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" id="icon-user"><path d="M63.444 64.996c20.633 0 37.359-14.308 37.359-31.953 0-17.649-16.726-31.952-37.359-31.952-20.631 0-37.36 14.303-37.358 31.952 0 17.645 16.727 31.953 37.359 31.953zM80.57 75.65H49.434c-26.652 0-48.26 18.477-48.26 41.27v2.664c0 9.316 21.608 9.325 48.26 9.325H80.57c26.649 0 48.256-.344 48.256-9.325v-2.663c0-22.794-21.605-41.271-48.256-41.271z" stroke="#979797" /></symbol>',e.insertBefore(t,e.firstChild)}));var we=i({expose:[],props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#fff"},size:{type:String,default:"1.6em"}},setup(e){const t=e,n=p((()=>`#${t.prefix}-${t.name}`));return(a,o)=>(m(),d("svg",{"aria-hidden":"true",class:"svg-icon",style:{width:e.size,height:e.size}},[v("use",{"xlink:href":f(n),fill:t.color},null,8,["xlink:href","fill"])],4))}});const ge="后台管理系统";V.configure({showSpinner:!1}),_e.beforeEach((async(e,t,n)=>{D()&&!F().token&&F().setToken(D()),V.start(),document.title=`${ge}-${e.meta.title}`;const a=F().token;if(a)if("/login"===e.path)n("/");else{const{limitRoutes:t}=F();if(t&&t.length>0)n();else{const t=(await F().setRoutes(a)).concat(fe);for(let e=0;e<t.length;e++)_e.addRoute(t[e]);n(l(l({},e),{replace:!0}))}}else"/login"===e.path?n():n(`/login?redirect=${e.fullPath}`)})),_e.afterEach((()=>{V.done()})),P(q).component("svg-icon",we).use(_e).use(T()).use(C).mount("#app");export{he as _,U as e,_e as r,F as s};
