import{r as et,m as ut,a as Et,n as Xt,i as At,d as m,h as R,_ as x,o as d,c as w,b as c,e as f,u,t as M,f as A,g as $,w as B,j as y,k as O,v as W,l as S,p,q as H,s as rt,x as D,y as K,z as Qt,A as _,B as nt,C as It,D as Nt,E as at,F as U,G as X,H as Zt,I as Tt,J as to,K as oo,L as eo,M as ro,N as bt,O as no}from"./plugin-vue_export-helper.f7539447.js";import{l as ao}from"./loading.51384978.js";import"./plugin-vue_export-helper.903f8db0.js";const io="modulepreload",wt={},lo="/wzw-ui.github.io/",Rt=function(o,e){return!e||e.length===0?o():Promise.all(e.map(r=>{if(r=`${lo}${r}`,r in wt)return;wt[r]=!0;const n=r.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":io,n||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),n)return new Promise((s,l)=>{i.addEventListener("load",s),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>o())},P=typeof window!="undefined";function Ht(t,o){return`${t}${o}`.replace(/\/+/g,"/")}function Ut(t){let o=t.replace(/\.html$/,"");if(o.endsWith("/")&&(o+="index"),P){const e="/wzw-ui.github.io/";o=o.slice(e.length).replace(/\//g,"_")+".md";const r=__VP_HASH_MAP__[o.toLowerCase()];o=`${e}assets/${o}.${r}.js`}else o=`./${o.slice(1).replace(/\//g,"_")}.md.js`;return o}const Mt=Symbol(),ft="http://a.com",so=()=>({path:"/",component:null,data:null});function co(t,o){const e=et(so()),r=typeof window!="undefined";function n(s=r?location.href:"/"){const l=new URL(s,ft);return!l.pathname.endsWith("/")&&!l.pathname.endsWith(".html")&&(l.pathname+=".html",s=l.pathname+l.search+l.hash),r&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",s)),i(s)}let a=null;async function i(s,l=0){const b=new URL(s,ft),g=a=b.pathname;try{let h=t(g);if("then"in h&&typeof h.then=="function"&&(h=await h),a===g){a=null;const{default:z,__pageData:k}=h;if(!z)throw new Error(`Invalid route component: ${z}`);e.path=g,e.component=ut(z),e.data=Et(JSON.parse(k)),r&&Xt(()=>{if(b.hash&&!l){const L=document.querySelector(decodeURIComponent(b.hash));if(L){pt(L,b.hash);return}}window.scrollTo(0,l)})}}catch(h){h.message.match(/fetch/)||console.error(h),a===g&&(a=null,e.path=g,e.component=o?ut(o):null)}}return r&&(window.addEventListener("click",s=>{const l=s.target.closest("a");if(l){const{href:b,protocol:g,hostname:h,pathname:z,hash:k,target:L}=l,I=window.location,N=z.match(/\.\w+$/);!s.ctrlKey&&!s.shiftKey&&!s.altKey&&!s.metaKey&&L!=="_blank"&&g===I.protocol&&h===I.hostname&&!(N&&N[0]!==".html")&&(s.preventDefault(),z===I.pathname?k&&k!==I.hash&&(history.pushState(null,"",k),pt(l,k,l.classList.contains("header-anchor"))):n(b))}},{capture:!0}),window.addEventListener("popstate",s=>{i(location.href,s.state&&s.state.scrollPosition||0)}),window.addEventListener("hashchange",s=>{s.preventDefault()})),{route:e,go:n}}function uo(){const t=At(Mt);if(!t)throw new Error("useRouter() is called without provider.");return t}function C(){return uo().route}function pt(t,o,e=!1){const r=document.querySelector(".nav-bar").offsetHeight,n=t.classList.contains(".header-anchor")?t:document.querySelector(decodeURIComponent(o));if(n){const a=n.offsetTop-r-15;!e||Math.abs(a-window.scrollY)>window.innerHeight?window.scrollTo(0,a):window.scrollTo({left:0,top:a,behavior:"smooth"})}}const bo=m({name:"VitePressContent",setup(){const t=C();return()=>t.component?R(t.component):null}});const wo={setup(){return{}}},fo={t:"1596458734865",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4898","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"},po=c("path",{d:"M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144","p-id":"4899",fill:"#666"},null,-1),go=c("path",{d:"M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z","p-id":"4900",fill:"#666"},null,-1),ho=[po,go];function vo(t,o,e,r,n,a){return d(),w("svg",fo,ho)}var mo=x(wo,[["render",vo]]);const xo={setup(){return{}}},ko={t:"1596458647160",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2840","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"22",height:"22"},_o=c("path",{d:"M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",fill:"#666","p-id":"2841"},null,-1),yo=[_o];function zo(t,o,e,r,n,a){return d(),w("svg",ko,yo)}var $o=x(xo,[["render",zo]]);const So=["href"],Lo=c("div",{style:{width:"16px","margin-left":"6px"}},[c("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024","xml:space":"preserve"},[c("g",null,[c("path",{d:"M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z","p-id":"2793",fill:"#555"})])])],-1),Co=[Lo],Bo=m({__name:"OnlineEdit",props:{content:null,importMap:null},setup(t){const o=t,e="https://sfc.vuejs.org/",r=f(()=>{const n={"App.vue":o.content};if(o.importMap)try{n["import-map.json"]=JSON.stringify({imports:JSON.parse(decodeURIComponent(o.importMap))})}catch{}return`${e}#${btoa(unescape(encodeURIComponent(JSON.stringify(n))))}`});return(n,a)=>(d(),w("a",{href:u(r),style:{display:"flex","align-items":"center"},target:"_blank"},Co,8,So))}});function Po(t){const o=et({showTip:!1});function e(){navigator.clipboard.writeText(t),o.showTip=!0,setTimeout(()=>{o.showTip=!1},5*1e3)}return{...M(o),copyCode:e}}const gt=/<script.*>([\s\S]+)<\/script>/,ht=/<style>([\s\S]+)<\/style>/,vt=/<template>([\s\S]+)<\/template>/,Z=t=>o=>{const e=o.match(t);return e&&e[1].trim()},mt=t=>JSON.parse(decodeURIComponent(t));function Eo(t,o,e){const r=et({expand:!1}),n=()=>r.expand=!r.expand,a=f(()=>{const i=Z(gt)(t)||"",s=Z(ht)(t)||"",l=Z(vt)(t)||t.replace(gt,"").replace(ht,"").replace(vt,"").trim(),b=mt(o),g=mt(e);return{js:i,css:s,html:l,jsLibs:b,cssLibs:g}});return{...M(r),toggleExpand:n,parsedCode:a}}const Ao={props:{componentName:String,htmlStr:String,codeStr:String,importMap:String,language:{default:"vue",type:String},platforms:{default:()=>["codepen"],type:Array},jsLibsStr:{type:String,default:"[]"},cssLibsStr:{type:String,default:"[]"},title:{type:String,default:""},desc:{type:String,default:""}},components:{copySvg:mo,codeSvg:$o,OnlineEdit:Bo},setup(t){const o=f(()=>{var l;return decodeURIComponent((l=t.htmlStr)!=null?l:"")}),e=f(()=>{var l;return decodeURIComponent((l=t.codeStr)!=null?l:"")}),{showTip:r,copyCode:n}=Po(e.value),{expand:a,toggleExpand:i,parsedCode:s}=Eo(e.value,t.jsLibsStr,t.cssLibsStr);return{expand:a,toggleExpand:i,decodedHtmlStr:o,parsedCode:s,showTip:r,copyCode:n,decodedCodeStr:e}}},Io={class:"demo-slot"},No={class:"demo-title-desc"},To={class:"demo-title"},Ro={class:"demo-desc"},Ho={class:"demo-actions"},Uo={class:"demo-platforms"},Mo={class:"demo-buttons"},Do={class:"demo-actions-copy"},jo={class:"demo-actions-tip"},Oo=["innerHTML"];function Wo(t,o,e,r,n,a){const i=A("OnlineEdit"),s=A("copySvg"),l=A("codeSvg"),b=A("ClientOnly");return d(),$(b,null,{default:B(()=>[c("article",rt(t.$attrs,{class:"demo"}),[c("div",Io,[y(t.$slots,"default")]),O(c("div",No,[c("span",To,S(e.title),1),c("span",Ro,S(e.desc),1)],512),[[W,e.title||e.desc]]),c("div",Ho,[c("div",Uo,[p(i,{content:r.decodedCodeStr,importMap:e.importMap},null,8,["content","importMap"])]),c("div",Mo,[c("div",Do,[O(c("span",jo,"\u590D\u5236\u6210\u529F!",512),[[W,r.showTip]]),O(p(s,{onClick:r.copyCode,title:"\u590D\u5236"},null,8,["onClick"]),[[W,!r.showTip]])]),p(l,{class:"demo-actions-expand",onClick:o[0]||(o[0]=g=>r.toggleExpand()),title:"\u5C55\u5F00"})])]),O(c("div",{innerHTML:r.decodedHtmlStr,class:H(`language-${e.language} extra-class`)},null,10,Oo),[[W,r.expand]])],16)]),_:3})}var Fo=x(Ao,[["render",Wo]]);const qo=m({setup(t,{slots:o}){const e=D(!1);return K(()=>{e.value=!0}),()=>e.value&&o.default?o.default():null}});function Vo(t,o,e,r){Object.defineProperties(t.config.globalProperties,{$site:{get(){return o.value}},$siteByRoute:{get(){return e.value}},$themeConfig:{get(){return e.value.themeConfig}},$page:{get(){return r.value}},$frontmatter:{get(){return r.value.frontmatter}},$lang:{get(){return e.value.lang}},$localePath:{get(){const{locales:n}=o.value,{lang:a}=e.value,i=Object.keys(n).find(s=>n[s].lang===a);return n&&i||"/"}},$title:{get(){return r.value.title?r.value.title+" | "+e.value.title:e.value.title}},$description:{get(){return r.value.description||e.value.description}},$withBase:{value(n){return Ht(o.value.base,n)}}})}function Go(t){t.component("Content",bo),t.component("ClientOnly",qo),t.component("Demo",Fo),t.component("Debug",()=>null)}var Jo='{"lang":"en-US","title":"WUI","description":"WUI","base":"/wzw-ui.github.io/","head":[],"themeConfig":{"nav":[{"text":"demo","link":"/math"}],"lang":"zh-CN","locales":{"/":{"lang":"zh-CN","title":"WUI","description":"WUI","label":"\u4E2D\u6587","selectText":"\u8BED\u8A00","nav":[{"text":"\u6307\u5357","link":"/"}],"sidebar":[{"text":"Basic \u57FA\u7840\u7EC4\u4EF6","children":[{"text":"Button","link":"/components/button/"},{"text":"Icon","link":"/components/icon/"}]}]},"/en/":{"lang":"en-US","title":"WUI","description":"WUI","label":"English","selectText":"Languages","nav":[{"text":"Guide","link":"/"}],"sidebar":[{"text":"Getting Started","link":"/en/"},{"text":"Button","link":"/en/components/button/"},{"text":"Icon","link":"/components/icon/"}]}},"prevLink":true,"nextLink":true},"locales":{},"customData":{}}';const V=D(Yo(Jo));function Q(){return V}function Yo(t){return Et(JSON.parse(t))}const Ko=typeof window!="undefined";function Xo(t,o){o.sort((e,r)=>{const n=r.split("/").length-e.split("/").length;return n!==0?n:r.length-e.length});for(const e of o)if(t.startsWith(e))return e}function xt(t,o){const e=Xo(o,Object.keys(t));return e?t[e]:void 0}function Qo(t,o){o=Zo(t,o);const e=xt(t.locales||{},o)||{},r=xt(t.themeConfig&&t.themeConfig.locales||{},o)||{};return{...t,...e,themeConfig:{...t.themeConfig,...r,locales:{}},locales:{}}}function Zo(t,o){if(!Ko)return o;const e=t.base,r=e.endsWith("/")?e.slice(0,-1):e;return o.slice(r.length)}function E(t){const o=t||C();return f(()=>Qo(V.value,o.path))}function j(t){const o=t||C();return f(()=>o.data)}function te(t,o){const e=Array.from(document.querySelectorAll("meta"));let r=!0;const n=a=>{if(r){r=!1;return}e.forEach(i=>document.head.removeChild(i)),e.length=0,a&&a.length&&a.forEach(i=>{const s=oe(i);document.head.appendChild(s),e.push(s)})};Qt(()=>{const a=t.data,i=o.value,s=a&&a.title,l=a&&a.description,b=a&&a.frontmatter.head;document.title=(s?s+" | ":"")+i.title,n([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:l||i.description}],...i.head,...b&&re(b)||[]])})}function oe([t,o,e]){const r=document.createElement(t);for(const n in o)r.setAttribute(n,o[n]);return e&&(r.innerHTML=e),r}function ee(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function re(t){return t.filter(o=>!ee(o))}const ne=/#.*$/,ae=/(index)?\.(md|html)$/,G=/\/$/,ie=/^[a-z]+:/i;function le(t){return t==null}function it(t){return Array.isArray(t)}function lt(t){return ie.test(t)}function se(t,o){if(o===void 0)return!1;const e=kt(`/${t.data.relativePath}`),r=kt(o);return e===r}function kt(t){return decodeURI(t).replace(ne,"").replace(ae,"")}function ce(t,o){const e=t.endsWith("/"),r=o.startsWith("/");return e&&r?t.slice(0,-1)+o:!e&&!r?`${t}/${o}`:t+o}function ot(t){return/^\//.test(t)?t:`/${t}`}function Dt(t){return t.replace(/(index)?(\.(md|html))?$/,"")||"/"}function de(t){return t===!1||t==="auto"||it(t)}function ue(t){return t.children!==void 0}function be(t){return it(t)?t.length===0:!t}function st(t,o){if(de(t))return t;o=ot(o);for(const e in t)if(o.startsWith(ot(e)))return t[e];return"auto"}function jt(t){return t.reduce((o,e)=>(e.link&&o.push({text:e.text,link:Dt(e.link)}),ue(e)&&(o=[...o,...jt(e.children)]),o),[])}const we={},fe=["href","aria-label"],pe=["src"];function ge(t,o){return d(),w("a",{class:"nav-bar-title",href:t.$withBase(t.$localePath),"aria-label":`${t.$siteByRoute.title}, back to home`},[t.$themeConfig.logo?(d(),w("img",{key:0,class:"logo",src:t.$withBase(t.$themeConfig.logo),alt:"Logo"},null,8,pe)):_("",!0),nt(" "+S(t.$site.title),1)],8,fe)}var he=x(we,[["render",ge],["__scopeId","data-v-1b41c078"]]);function ve(){const t=C(),o=Q();return f(()=>{const r=o.value.themeConfig.locales;if(!r)return null;const n=Object.keys(r);if(n.length<=1)return null;const a=P?o.value.base:"/",i=a.endsWith("/")?a.slice(0,-1):a,s=t.path.slice(i.length),l=n.find(k=>k==="/"?!1:s.startsWith(k)),b=l?s.substring(l.length-1):s,g=n.map(k=>{const L=k.endsWith("/")?k.slice(0,-1):k;return{text:r[k].label,link:`${L}${b}`}}),h=l||"/";return{text:r[h].selectText?r[h].selectText:"Languages",items:g}})}const me=["GitHub","GitLab","Bitbucket"].map(t=>[t,new RegExp(t,"i")]);function xe(){const t=E();return f(()=>{const o=t.value.themeConfig,e=o.docsRepo||o.repo;if(!e)return null;const r=ke(e);return{text:_e(r,o.repoLabel),link:r}})}function ke(t){return/^https?:/.test(t)?t:`https://github.com/${t}`}function _e(t,o){if(o)return o;const e=t.match(/^https?:\/\/[^/]+/);if(!e)return"Source";const r=me.find(([n,a])=>a.test(e[0]));return r&&r[0]?r[0]:"Source"}function ye(){const t=Q();function o(e){return Ht(t.value.base,e)}return{withBase:o}}function Ot(t){const o=C(),{withBase:e}=ye(),r=lt(t.value.link);return{props:f(()=>{const a=_t(`/${o.data.relativePath}`);let i=!1;if(t.value.activeMatch)i=new RegExp(t.value.activeMatch).test(a);else{const s=_t(e(t.value.link));i=s==="/"?s===a:a.startsWith(s)}return{class:{active:i,isExternal:r},href:r?t.value.link:e(t.value.link),target:t.value.target||r?"_blank":null,rel:t.value.rel||r?"noopener noreferrer":null,"aria-label":t.value.ariaLabel}}),isExternal:r}}function _t(t){return t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const ze={},$e={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Se=c("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Le=c("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Ce=[Se,Le];function Be(t,o){return d(),w("svg",$e,Ce)}var ct=x(ze,[["render",Be]]);const Pe={class:"nav-link"},Ee=m({__name:"NavLink",props:{item:null},setup(t){const e=M(t),{props:r,isExternal:n}=Ot(e.item);return(a,i)=>(d(),w("div",Pe,[c("a",rt({class:"item"},u(r)),[nt(S(t.item.text)+" ",1),u(n)?(d(),$(ct,{key:0})):_("",!0)],16)]))}});var yt=x(Ee,[["__scopeId","data-v-1f9ff7fe"]]);const Ae=t=>(It("data-v-4bc78d6c"),t=t(),Nt(),t),Ie={class:"nav-dropdown-link-item"},Ne=Ae(()=>c("span",{class:"arrow"},null,-1)),Te={class:"text"},Re={class:"icon"},He=m({__name:"NavDropdownLinkItem",props:{item:null},setup(t){const e=M(t),{props:r,isExternal:n}=Ot(e.item);return(a,i)=>(d(),w("div",Ie,[c("a",rt({class:"item"},u(r)),[Ne,c("span",Te,S(t.item.text),1),c("span",Re,[u(n)?(d(),$(ct,{key:0})):_("",!0)])],16)]))}});var Ue=x(He,[["__scopeId","data-v-4bc78d6c"]]);const Me=["aria-label"],De={class:"button-text"},je={class:"dialog"},Oe=m({__name:"NavDropdownLink",props:{item:null},setup(t){const o=C(),e=D(!1);at(()=>o.path,()=>{e.value=!1});function r(){e.value=!e.value}return(n,a)=>(d(),w("div",{class:H(["nav-dropdown-link",{open:e.value}])},[c("button",{class:"button","aria-label":t.item.ariaLabel,onClick:r},[c("span",De,S(t.item.text),1),c("span",{class:H(["button-arrow",e.value?"down":"right"])},null,2)],8,Me),c("ul",je,[(d(!0),w(U,null,X(t.item.items,i=>(d(),w("li",{key:i.text,class:"dialog-item"},[p(Ue,{item:i},null,8,["item"])]))),128))])],2))}});var zt=x(Oe,[["__scopeId","data-v-187d37a9"]]);const We={key:0,class:"nav-links"},Fe={key:1,class:"item"},qe={key:2,class:"item"},Ve=m({__name:"NavLinks",setup(t){const o=E(),e=ve(),r=xe(),n=f(()=>a.value||r.value),a=f(()=>o.value.themeConfig.nav);return(i,s)=>u(n)?(d(),w("nav",We,[u(a)?(d(!0),w(U,{key:0},X(u(a),l=>(d(),w("div",{key:l.text,class:"item"},[l.items?(d(),$(zt,{key:0,item:l},null,8,["item"])):(d(),$(yt,{key:1,item:l},null,8,["item"]))]))),128)):_("",!0),u(e)?(d(),w("div",Fe,[p(zt,{item:u(e)},null,8,["item"])])):_("",!0),u(r)?(d(),w("div",qe,[p(yt,{item:u(r)},null,8,["item"])])):_("",!0)])):_("",!0)}});var Wt=x(Ve,[["__scopeId","data-v-3aa21775"]]);const Ge={emits:["toggle"]},Je=c("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[c("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Ye=[Je];function Ke(t,o,e,r,n,a){return d(),w("div",{class:"sidebar-button",onClick:o[0]||(o[0]=i=>t.$emit("toggle"))},Ye)}var Xe=x(Ge,[["render",Ke]]);const Qe=t=>(It("data-v-a9edc5f2"),t=t(),Nt(),t),Ze={class:"nav-bar"},tr=Qe(()=>c("div",{class:"flex-grow"},null,-1)),or={class:"nav"},er=m({__name:"NavBar",emits:["toggle"],setup(t){return(o,e)=>(d(),w("header",Ze,[p(Xe,{onToggle:e[0]||(e[0]=r=>o.$emit("toggle"))}),p(he),tr,c("div",or,[p(Wt)]),y(o.$slots,"search",{},void 0,!0)]))}});var rr=x(er,[["__scopeId","data-v-a9edc5f2"]]);function nr(){let t=null,o=null;const e=cr(r,300);function r(){const i=ar(),s=ir(i);for(let l=0;l<s.length;l++){const b=s[l],g=s[l+1],[h,z]=sr(l,b,g);if(h){history.replaceState(null,document.title,z||" "),n(z);return}}}function n(i){if(a(o),a(t),o=document.querySelector(`.sidebar a[href="${i}"]`),!o)return;o.classList.add("active");const s=o.closest(".sidebar-links > ul > li");s&&s!==o.parentElement?(t=s.querySelector("a"),t&&t.classList.add("active")):t=null}function a(i){i&&i.classList.remove("active")}K(()=>{r(),window.addEventListener("scroll",e)}),Zt(()=>{n(decodeURIComponent(location.hash))}),Tt(()=>{window.removeEventListener("scroll",e)})}function ar(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function ir(t){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(o=>t.some(e=>e.hash===o.hash))}function lr(){return document.querySelector(".nav-bar").offsetHeight}function $t(t){const o=lr();return t.parentElement.offsetTop-o-15}function sr(t,o,e){const r=window.scrollY;return t===0&&r===0?[!0,null]:r<$t(o)?[!1,null]:!e||r<$t(e)?[!0,decodeURIComponent(o.hash)]:[!1,null]}function cr(t,o){let e,r=!1;return()=>{e&&clearTimeout(e),r?e=setTimeout(t,o):(t(),r=!0,setTimeout(()=>{r=!1},o))}}function dr(){const t=C(),o=E();return nr(),f(()=>{const e=t.data.headers,r=t.data.frontmatter.sidebar,n=t.data.frontmatter.sidebarDepth;if(r===!1)return[];if(r==="auto")return St(e,n);const a=st(o.value.themeConfig.sidebar,t.data.relativePath);return a===!1?[]:a==="auto"?St(e,n):a})}function St(t,o){const e=[];if(t===void 0)return[];let r;return t.forEach(({level:n,title:a,slug:i})=>{if(n-1>o)return;const s={text:a,link:`#${i}`};n===2?(r=s,e.push(s)):r&&(r.children||(r.children=[])).push(s)}),e}const Ft=t=>{const o=C(),e=Q();o.data.headers;const r=t.item.text,n=ur(e.value.base,t.item.link),a=t.item.children,i=se(o,t.item.link),s=br(i,a);return R("li",{class:"sidebar-link"},[R(n?"a":"p",{class:{"sidebar-link-item":!0,active:i},href:n},r),s])};function ur(t,o){return o===void 0||o.startsWith("#")?o:ce(t,o)}function br(t,o,e){return o&&o.length>0?R("ul",{class:"sidebar-links"},o.map(r=>R(Ft,{item:r}))):null}const wr={key:0,class:"sidebar-links"},fr=m({__name:"SideBarLinks",setup(t){const o=dr();return(e,r)=>u(o).length>0?(d(),w("ul",wr,[(d(!0),w(U,null,X(u(o),n=>(d(),$(u(Ft),{key:n.text,item:n},null,8,["item"]))),128))])):_("",!0)}});const pr={setup(){const t=C();return{slugs:f(()=>{var n;const e=((n=t.data.headers)!=null?n:[]).filter(a=>a.level>1);let r=10;for(const{level:a}of e)r>a&&(r=a);return e.filter(a=>a.level<r+2).map(a=>({...a,link:`#${a.slug}`,level:a.level===r?1:2}))})}}},gr={class:"right-slug"},hr=["href"];function vr(t,o,e,r,n,a){return d(),w("ul",gr,[(d(!0),w(U,null,X(r.slugs,({level:i,link:s,title:l})=>(d(),w("li",{class:H(`slug-item level-${i}`),key:s},[c("a",{href:s,class:"link"},S(l),9,hr)],2))),128))])}var mr=x(pr,[["render",vr],["__scopeId","data-v-0b0f9f60"]]);const xr=m({__name:"SideBar",props:{open:{type:Boolean,required:!0}},setup(t){return(o,e)=>(d(),w(U,null,[c("aside",{class:H(["sidebar hover-scrollbar",{open:t.open}])},[p(Wt,{class:"nav"}),y(o.$slots,"sidebar-top",{},void 0,!0),p(fr),y(o.$slots,"sidebar-bottom",{},void 0,!0)],2),p(mr)],64))}});var kr=x(xr,[["__scopeId","data-v-8ae47126"]]);const _r=/bitbucket.org/;function yr(){const t=E(),o=j(),e=f(()=>{const n=le(o.value.frontmatter.editLink)?t.value.themeConfig.editLinks:o.value.frontmatter.editLink,{repo:a,docsDir:i="",docsBranch:s="master",docsRepo:l=a}=t.value.themeConfig,{relativePath:b}=o.value;return!n||!b||!a?null:zr(a,l,i,s,b)}),r=f(()=>t.value.themeConfig.editLinkText||"Edit this page");return{url:e,text:r}}function zr(t,o,e,r,n){return _r.test(t)?Sr(t,o,e,r,n):$r(t,o,e,r,n)}function $r(t,o,e,r,n){return(lt(o)?o:`https://github.com/${o}`).replace(G,"")+`/edit/${r}/`+(e?e.replace(G,"")+"/":"")+n}function Sr(t,o,e,r,n){return(lt(o)?o:t).replace(G,"")+`/src/${r}/`+(e?e.replace(G,"")+"/":"")+n+`?mode=edit&spa=0&at=${r}&fileviewer=file-view-default`}const Lr={class:"edit-link"},Cr=["href"],Br=m({__name:"EditLink",setup(t){const{url:o,text:e}=yr();return(r,n)=>(d(),w("div",Lr,[u(o)?(d(),w("a",{key:0,class:"link",href:u(o),target:"_blank",rel:"noopener noreferrer"},[nt(S(u(e))+" ",1),p(ct,{class:"icon"})],8,Cr)):_("",!0)]))}});var Pr=x(Br,[["__scopeId","data-v-45c7bd43"]]);const Er={key:0,class:"last-updated"},Ar={class:"prefix"},Ir={class:"datetime"},Nr=m({__name:"LastUpdated",setup(t){const o=E(),e=j(),r=f(()=>{const i=o.value.themeConfig.lastUpdated;return i!==void 0&&i!==!1}),n=f(()=>{const i=o.value.themeConfig.lastUpdated;return i===!0?"Last Updated":i}),a=D("");return K(()=>{a.value=new Date(e.value.lastUpdated).toLocaleString("en-US")}),(i,s)=>u(r)?(d(),w("p",Er,[c("span",Ar,S(u(n))+":",1),c("span",Ir,S(a.value),1)])):_("",!0)}});var Tr=x(Nr,[["__scopeId","data-v-bfa9194c"]]);const Rr={class:"page-footer"},Hr={class:"edit"},Ur={class:"updated"},Mr=m({__name:"PageFooter",setup(t){return(o,e)=>(d(),w("footer",Rr,[c("div",Hr,[p(Pr)]),c("div",Ur,[p(Tr)])]))}});var Dr=x(Mr,[["__scopeId","data-v-4e7d7f0d"]]);function jr(){const t=E(),o=j(),e=f(()=>Dt(ot(o.value.relativePath))),r=f(()=>{const l=st(t.value.themeConfig.sidebar,e.value);return it(l)?jt(l):[]}),n=f(()=>r.value.findIndex(l=>l.link===e.value)),a=f(()=>{if(t.value.themeConfig.nextLinks!==!1&&n.value>-1&&n.value<r.value.length-1)return r.value[n.value+1]}),i=f(()=>{if(t.value.themeConfig.prevLinks!==!1&&n.value>0)return r.value[n.value-1]}),s=f(()=>!!a.value||!!i.value);return{next:a,prev:i,hasLinks:s}}const Or={},Wr={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Fr=c("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),qr=[Fr];function Vr(t,o){return d(),w("svg",Wr,qr)}var Gr=x(Or,[["render",Vr]]);const Jr={},Yr={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Kr=c("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Xr=[Kr];function Qr(t,o){return d(),w("svg",Yr,Xr)}var Zr=x(Jr,[["render",Qr]]);const tn={key:0,class:"next-and-prev-link"},on={class:"container"},en={class:"prev"},rn=["href"],nn={class:"text"},an={class:"next"},ln=["href"],sn={class:"text"},cn=m({__name:"NextAndPrevLinks",setup(t){const{hasLinks:o,prev:e,next:r}=jr();return(n,a)=>u(o)?(d(),w("div",tn,[c("div",on,[c("div",en,[u(e)?(d(),w("a",{key:0,class:"link",href:n.$withBase(u(e).link)},[p(Gr,{class:"icon icon-prev"}),c("span",nn,S(u(e).text),1)],8,rn)):_("",!0)]),c("div",an,[u(r)?(d(),w("a",{key:0,class:"link",href:n.$withBase(u(r).link)},[c("span",sn,S(u(r).text),1),p(Zr,{class:"icon icon-next"})],8,ln)):_("",!0)])])])):_("",!0)}});var dn=x(cn,[["__scopeId","data-v-9cf85ac0"]]);const un={class:"page"},bn={class:"container hover-scrollbar"},wn={class:"content"},fn=m({__name:"Page",setup(t){return(o,e)=>{const r=A("Content");return d(),w("main",un,[c("div",bn,[y(o.$slots,"top",{},void 0,!0),c("div",wn,[p(r)]),p(Dr),p(dn),y(o.$slots,"bottom",{},void 0,!0)])])}}});var pn=x(fn,[["__scopeId","data-v-07bae5a0"]]);const gn={key:0,id:"ads-container"},hn=m({__name:"Layout",setup(t){const o=to(()=>Rt(()=>import("./Home.7f5ce81d.js"),["assets/Home.7f5ce81d.js","assets/plugin-vue_export-helper.f7539447.js","assets/loading.51384978.js","assets/plugin-vue_export-helper.903f8db0.js"])),e=()=>null,r=e,n=e,a=e,i=C(),s=Q(),l=E(),b=f(()=>s.value.themeConfig),g=j(),h=f(()=>!!i.data.frontmatter.customLayout),z=f(()=>!!i.data.frontmatter.home),k=f(()=>{const{themeConfig:v}=l.value,{frontmatter:T}=i.data;return T.navbar===!1||v.navbar===!1?!1:s.value.title||v.logo||v.repo||v.nav}),L=D(!1),I=f(()=>{const{frontmatter:v}=i.data;if(v.home||v.sidebar===!1)return!1;const{themeConfig:T}=l.value;return!be(st(T.sidebar,i.data.relativePath))}),N=v=>{L.value=typeof v=="boolean"?v:!L.value},Gt=N.bind(null,!1);at(i,Gt);const Jt=f(()=>[{"no-navbar":!k.value,"sidebar-open":L.value,"no-sidebar":!I.value}]);return(v,T)=>{const Yt=A("Content"),Kt=A("Debug");return d(),w(U,null,[c("div",{class:H(["theme",u(Jt)])},[u(k)?(d(),$(rr,{key:0,onToggle:N},{search:B(()=>[y(v.$slots,"navbar-search",{},()=>[u(b).algolia?(d(),$(u(a),{key:0,options:u(b).algolia},null,8,["options"])):_("",!0)])]),_:3})):_("",!0),p(kr,{open:L.value},{"sidebar-top":B(()=>[y(v.$slots,"sidebar-top")]),"sidebar-bottom":B(()=>[y(v.$slots,"sidebar-bottom")]),_:3},8,["open"]),c("div",{class:"sidebar-mask",onClick:T[0]||(T[0]=qn=>N(!1))}),u(h)?(d(),$(Yt,{key:1})):u(z)?(d(),$(u(o),{key:2},{hero:B(()=>[y(v.$slots,"home-hero")]),features:B(()=>[y(v.$slots,"home-features")]),footer:B(()=>[y(v.$slots,"home-footer")]),_:3})):(d(),$(pn,{key:3},{top:B(()=>[y(v.$slots,"page-top-ads",{},()=>[u(b).carbonAds&&u(b).carbonAds.carbon?(d(),w("div",gn,[(d(),$(u(r),{key:"carbon"+u(g).relativePath,code:u(b).carbonAds.carbon,placement:u(b).carbonAds.placement},null,8,["code","placement"]))])):_("",!0)]),y(v.$slots,"page-top")]),bottom:B(()=>[y(v.$slots,"page-bottom"),y(v.$slots,"page-bottom-ads",{},()=>[u(b).carbonAds&&u(b).carbonAds.custom?(d(),$(u(n),{key:"custom"+u(g).relativePath,code:u(b).carbonAds.custom,placement:u(b).carbonAds.placement},null,8,["code","placement"])):_("",!0)])]),_:3}))],2),p(Kt)],64)}}}),vn={class:"theme"},mn=c("h1",null,"404",-1),xn=["href"],kn=m({__name:"NotFound",setup(t){const o=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function e(){return o[Math.floor(Math.random()*o.length)]}return(r,n)=>(d(),w("div",vn,[mn,c("blockquote",null,S(e()),1),c("a",{href:r.$site.base,"aria-label":"go to home"},"Take me home.",8,xn)]))}}),_n={Layout:hn,NotFound:kn},yn={type:{type:String,default:""},plain:Boolean,round:Boolean,circle:Boolean,disabled:Boolean,link:Boolean,text:Boolean,bg:Boolean,color:String,loading:Boolean,loadingIcon:{type:Object,default:()=>ao},nativeType:{type:String,default:"button"},icon:{type:Object},size:{type:String,default:""}},zn={size:{type:String,default:""},type:{type:String,default:""}},qt=Symbol("w-button-group");function F(t,o,e){let r=t;return o&&(r+=`__${o}`),e&&(r+=`--${e}`),r}function dt(t,o=!1){const e=o?`.w-${t}`:`w-${t}`;return{b:()=>F(e),e:l=>l?F(e,l):"",m:l=>l?F(e,"",l):"",em:(l,b)=>l&&b?F(e,l,b):"",is:l=>l||""}}function $n(t,o){const e=dt("button"),r=At(qt,null),n=f(()=>(r==null?void 0:r.size.value)||t.size),a=f(()=>(r==null?void 0:r.type.value)||t.type),i=f(()=>({[e.b()]:!0,[e.m(n.value)]:n.value,[e.m(a.value)]:a.value,[e.is("is-plain")]:t.plain,[e.is("is-round")]:t.round,[e.is("is-circle")]:t.circle,[e.is("is-disabled")]:t.disabled,[e.is("is-link")]:t.link,[e.is("is-text")]:t.text,[e.is("is-has-bg")]:t.bg,[e.is("is-loading")]:t.loading})),s=f(()=>({[e.is("is-loading")]:t.loading}));return{classes:i,iconClass:s}}const Sn={color:{type:String,default:""},size:{type:[Number,String],default:""}};function Ln(t,o){const e=dt("icon");return{classes:f(()=>({[e.b()]:!0}))}}var Lt;const Cn=typeof window!="undefined",Bn=t=>typeof t=="number";Cn&&((Lt=window==null?void 0:window.navigator)==null?void 0:Lt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Pn(t,o="px"){if(!t)return"";if(oo(t))return t;if(Bn(t))return`${t}${o}`;console.warn("\u7ED1\u5B9A\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u6570\u5B57")}const En=t=>t===void 0;var J=m({name:"WIcon",props:Sn,setup(t,o){const{classes:e}=Ln(),r=f(()=>({fontSize:En(t.size)?void 0:Pn(t.size),"--color":t.color}));return()=>{var n,a;return p("i",{class:[e.value],style:r.value},[(a=(n=o.slots).default)==null?void 0:a.call(n)])}}}),An={install(t){t.component(J.name,J)}};function Ct(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!eo(t)}var Bt=m({name:"WButton",props:yn,setup(t,o){const{classes:e,iconClass:r}=$n(t),{icon:n,disabled:a,loading:i,nativeType:s,loadingIcon:l}=M(t),b=()=>{console.log(t)};return()=>{let g,h;return p("button",{type:s.value,disabled:a.value||i.value,"aria-disabled":a.value||i.value,class:e.value,onClick:b},[o.slots.loading&&o.slots.loading(),!o.slots.loading&&i.value&&l.value&&p(J,{class:r.value},Ct(g=l.value.render())?g:{default:()=>[g]}),(n==null?void 0:n.value)&&p(J,null,Ct(h=n.value.render())?h:{default:()=>[h]}),o.slots.default&&p("span",{class:"button-content"},[o.slots.default()])])}}});var Pt=m({name:"WButtonGroup",props:zn,setup(t,{slots:o}){const e=dt("button-group");return ro(qt,{size:bt(t,"size"),type:bt(t,"type")}),()=>p("div",{class:e.b()},[o.default&&o.default()])}}),In={install(t){t.component(Bt.name,Bt),t.component(Pt.name,Pt)}};const Nn=[In,An];var Tn={version:"1.0.0-rc.0",install(t){Nn.forEach(o=>t.use(o))}};var Y={..._n,enhanceApp({app:t,router:o,siteData:e}){t.use(Tn)}};const tt=new Set,Vt=()=>document.createElement("link"),Rn=t=>{const o=Vt();o.rel="prefetch",o.href=t,document.head.appendChild(o)},Hn=t=>{const o=new XMLHttpRequest;o.open("GET",t,o.withCredentials=!0),o.send()};let q;const Un=P&&(q=Vt())&&q.relList&&q.relList.supports&&q.relList.supports("prefetch")?Rn:Hn;function Mn(){if(!P||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const o=window.requestIdleCallback||setTimeout;let e=null;const r=()=>{e&&e.disconnect(),e=new IntersectionObserver(a=>{a.forEach(i=>{if(i.isIntersecting){const s=i.target;e.unobserve(s);const{pathname:l}=s;if(!tt.has(l)){tt.add(l);const b=Ut(l);Un(b)}}})}),o(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:i,hostname:s,pathname:l}=a,b=l.match(/\.\w+$/);b&&b[0]!==".html"||i!=="_blank"&&s===location.hostname&&(l!==location.pathname?e.observe(a):tt.add(l))})})};K(r);const n=C();at(()=>n.path,r),Tt(()=>{e&&e.disconnect()})}const Dn=Y.NotFound||(()=>"404 Not Found"),jn={name:"VitePressApp",setup(){return Mn(),()=>R(Y.Layout)}};function On(){const t=Fn(),o=Wn();o.provide(Mt,t);const e=E(t.route),r=j(t.route);return P&&te(t.route,e),Vo(o,V,e,r),Go(o),Y.enhanceApp&&Y.enhanceApp({app:o,router:t,siteData:V}),{app:o,router:t}}function Wn(){return no(jn)}function Fn(){let t=P,o;return co(e=>{let r=Ut(e);return t&&(o=r),(t||o===r)&&(r=r.replace(/\.js$/,".lean.js")),P?(t=!1,Rt(()=>import(r),[])):require(r)},Dn)}if(P){const{app:t,router:o}=On();o.go().then(()=>{t.mount("#app")})}export{yt as N,E as a,On as createApp,j as u};
