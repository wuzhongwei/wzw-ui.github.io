import{e as r,_ as u,d as g,u as t,o as a,c as i,b as s,A as n,l,g as k,F as H,G as z,f as A,p as h,j as f}from"./plugin-vue_export-helper.f7539447.js";import{u as F,a as T,N as y}from"./app.24250566.js";import"./loading.51384978.js";import"./plugin-vue_export-helper.903f8db0.js";function $(){const d=F();return r(()=>d.value.frontmatter)}const I={key:0,class:"home-hero"},B={key:0,class:"figure"},L=["src","alt"],C={key:1,id:"main-title",class:"title"},N={key:2,class:"description"},D=g({__name:"HomeHero",setup(d){const o=T(),e=$(),m=r(()=>e.value.heroImage||v.value||c.value||w.value),v=r(()=>e.value.heroText!==null),x=r(()=>e.value.heroText||o.value.title),c=r(()=>e.value.tagline!==null),_=r(()=>e.value.tagline||o.value.description),w=r(()=>e.value.actionLink&&e.value.actionText),b=r(()=>e.value.altActionLink&&e.value.altActionText);return(p,ee)=>t(m)?(a(),i("header",I,[p.$frontmatter.heroImage?(a(),i("figure",B,[s("img",{class:"image",src:p.$withBase(p.$frontmatter.heroImage),alt:p.$frontmatter.heroAlt},null,8,L)])):n("",!0),t(v)?(a(),i("h1",C,l(t(x)),1)):n("",!0),t(c)?(a(),i("p",N,l(t(_)),1)):n("",!0),t(w)?(a(),k(y,{key:3,item:{link:t(e).actionLink,text:t(e).actionText},class:"action"},null,8,["item"])):n("",!0),t(b)?(a(),k(y,{key:4,item:{link:t(e).altActionLink,text:t(e).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});var S=u(D,[["__scopeId","data-v-1cce01ec"]]);const V={key:0,class:"home-features"},j={class:"wrapper"},E={class:"container"},G={class:"features"},P={key:0,class:"title"},R={key:1,class:"details"},q=g({__name:"HomeFeatures",setup(d){const o=$(),e=r(()=>o.value.features&&o.value.features.length>0),m=r(()=>o.value.features?o.value.features:[]);return(v,x)=>t(e)?(a(),i("div",V,[s("div",j,[s("div",E,[s("div",G,[(a(!0),i(H,null,z(t(m),(c,_)=>(a(),i("section",{key:_,class:"feature"},[c.title?(a(),i("h2",P,l(c.title),1)):n("",!0),c.details?(a(),i("p",R,l(c.details),1)):n("",!0)]))),128))])])])])):n("",!0)}});var J=u(q,[["__scopeId","data-v-1154f555"]]);const K={},M={key:0,class:"footer"},O={class:"container"},Q={class:"text"};function U(d,o){return d.$frontmatter.footer?(a(),i("footer",M,[s("div",O,[s("p",Q,l(d.$frontmatter.footer),1)])])):n("",!0)}var W=u(K,[["render",U],["__scopeId","data-v-3cea008a"]]);const X={class:"home","aria-labelledby":"main-title"},Y={class:"home-content"},Z=g({__name:"Home",setup(d){return(o,e)=>{const m=A("Content");return a(),i("main",X,[h(S),f(o.$slots,"hero",{},void 0,!0),h(J),s("div",Y,[h(m)]),f(o.$slots,"features",{},void 0,!0),h(W),f(o.$slots,"footer",{},void 0,!0)])}}});var re=u(Z,[["__scopeId","data-v-64e32af2"]]);export{re as default};
