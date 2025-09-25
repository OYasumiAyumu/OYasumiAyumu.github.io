import{d as le,q as re,u as ce,y as de,C as ue,r as k,c as q,o as pe,x as P,z as me,a as l,b as r,e as o,g as x,t as i,i as a,f as p,m as R,F as T,j as L,D as he,n as fe,k as B,K as J,h as ge,_ as ve}from"./main-DguRZa5e.js";import{P as ke}from"./ProgressiveImage-CyZLrskw.js";import{g as b}from"./icons-BbHaNGmN.js";const be="安梦猫窝",ye={title:be},_e={tech:{zh:"技术",en:"Tech",jp:"技術"},blog:{zh:"博客",en:"Blog",jp:"ブログ"},design:{zh:"设计",en:"Design",jp:"デザイン"},creative:{zh:"创意",en:"Creative",jp:"クリエイティブ"},community:{zh:"社区",en:"Community",jp:"コミュニティ"},tool:{zh:"工具",en:"Tool",jp:"ツール"},practical:{zh:"实用",en:"Practical",jp:"実用的"}},xe=[{id:"friends",name:{zh:"好友",en:"Friends",jp:"友達"},description:{zh:"我的好朋友们",en:"My good friends",jp:"私の親友たち"},links:[{id:"RaitoOrange",name:"灯火橘",url:"https://blog.catouo.cn/",avatar:"https://blog.catouo.cn/assets/%E7%9F%B3%E7%82%AD%E5%A4%B4%E5%83%8F%E6%A9%98-tJ8_xt8J.png",description:{zh:"灯火橘的博客",en:"RaitoOrange's blog",jp:"灯火橘のブログ"},tags:["blog"]},{id:"OLC",name:"律影映幻",url:"https://ritsukage.com",avatar:"https://ritsukage.com/assets/avatar.png",description:{zh:"律影映幻的博客",en:"OLC's blog",jp:"律影映幻的博客"},tags:["blog"]},{id:"sorakage",name:"空影",url:"https://sorakage.com/",avatar:"https://api.vrchat.cloud/api/1/image/file_24d51298-5b13-4f88-a695-6a2b7cdb1196/1/1024",description:{zh:"空影的博客",en:"Sorakage's blog",jp:"空影のブログ"},tags:["blog"]}]},{id:"communities",name:{zh:"社区",en:"Communities",jp:"コミュニティ"},description:{zh:"相关社区和组织",en:"Related communities and organizations",jp:"関連コミュニティと組織"},links:[]},{id:"resources",name:{zh:"资源",en:"Resources",jp:"リソース"},description:{zh:"有用的工具和资源",en:"Useful tools and resources",jp:"便利なツールとリソース"},links:[]}],Ce={showTags:!0,showDescription:!0,showAvatar:!0,defaultAvatar:"/assets/avatar.png"},we={tags:_e,categories:xe,settings:Ce},Te=y=>{try{return new URL(y),!0}catch{return!1}},Le=(y,c)=>Te(y)?y:`${window.location.origin}${y}`,je={class:"links-page"},Se={class:"container mx-auto px-3 py-2 flex-1 h-full overflow-hidden"},ze={class:"links-header"},Ee={class:"header-title-section"},Me={class:"links-title"},$e={class:"links-subtitle"},qe={class:"unified-search-bar"},Ie={class:"search-input-container"},De=["value","placeholder"],Ne={class:"control-buttons-group"},Be=["title"],Ae={class:"button-text"},Fe={class:"links-content"},Oe={class:"links-sidebar"},Ue={class:"category-selector"},He={class:"category-list"},Pe={class:"category-name"},Re={class:"category-count"},Je=["onClick"],Ve={class:"category-name"},Xe={class:"category-count"},Qe={key:0,class:"no-links"},Ge={class:"no-links-text"},Ke={key:1,class:"links-grid"},We={class:"category-section-title"},Ye={class:"category-count"},Ze={class:"category-section-description"},et={class:"links-cards"},tt=["onClick"],ot={key:0,class:"link-avatar"},st={class:"link-content"},nt={class:"link-info"},at={class:"link-name"},it={key:0,class:"link-description"},lt={key:0,class:"link-tags"},rt={class:"link-action"},ct={class:"mobile-filter-header"},dt={class:"mobile-filter-body"},ut={class:"category-selector"},pt={class:"category-list"},mt={class:"category-name"},ht={class:"category-count"},ft=["onClick"],gt={class:"category-name"},vt={class:"category-count"},kt=le({__name:"Links",setup(y){const{t:c}=re(),A=ce(),F=de(),{onScreenChange:V}=ue(),m=we,h=k(""),g=k(""),O=k(!1),_=k(!1),j=k(null),C=k(null),U=k(!1),I=k(80),d=q(()=>A.currentLanguage),v=(s,t)=>B(s,t),S=(s,t)=>{const e=m.tags?.[s];return e?B(e,t):s},X=q(()=>{let s=m.categories.flatMap(t=>t.links.map(e=>({...e,categoryId:t.id})));if(g.value&&(s=s.filter(t=>t.categoryId===g.value)),h.value.trim()){const t=h.value.toLowerCase().trim();s=s.filter(e=>{const n=e.name.toLowerCase(),u=v(e.description,d.value).toLowerCase(),f=e.tags?.map(w=>S(w,d.value)).join(" ").toLowerCase()||"";return n.includes(t)||u.includes(t)||f.includes(t)})}return s}),z=q(()=>{const s={};let t=0;return m.categories.forEach(e=>{const n=e.links.filter(u=>{if(!h.value.trim())return!0;const f=h.value.toLowerCase().trim(),w=u.name.toLowerCase(),N=v(u.description,d.value).toLowerCase(),ae=u.tags?.map(ie=>S(ie,d.value)).join(" ").toLowerCase()||"";return w.includes(f)||N.includes(f)||ae.includes(f)});s[e.id]=n.length,t+=n.length}),s[""]=t,s}),Q=q(()=>(g.value?m.categories.filter(t=>t.id===g.value):m.categories).map(t=>({...t,links:t.links.filter(e=>{if(!h.value.trim())return!0;const n=h.value.toLowerCase().trim(),u=e.name.toLowerCase(),f=v(e.description,d.value).toLowerCase(),w=e.tags?.map(N=>S(N,d.value)).join(" ").toLowerCase()||"";return u.includes(n)||f.includes(n)||w.includes(n)})})).filter(t=>t.links.length>0)),H=()=>{const s=document.querySelector(".header"),t=document.querySelector(".footer"),e=document.querySelector(".links-header");s&&document.documentElement.style.setProperty("--app-header-height",`${s.offsetHeight}px`),t&&document.documentElement.style.setProperty("--app-footer-height",`${t.offsetHeight}px`),e&&document.documentElement.style.setProperty("--links-header-height",`${e.offsetHeight}px`)},E=s=>{g.value=s},G=()=>{_.value=!_.value,_.value?document.body.style.overflow="hidden":document.body.style.overflow=""},M=()=>{_.value=!1,document.body.style.overflow=""},K=s=>{j.value&&F.clearTimeout(j.value),j.value=F.setTimeout(()=>{h.value=s,j.value=null},300)},W=()=>{h.value=""},Y=s=>{window.open(s,"_blank","noopener,noreferrer")},Z=()=>{const s=window.location.origin,t=B(J.name,d.value),e=ye.title,n=Le(J.avatar),f=JSON.stringify({name:t,blogName:e,url:s,logo:n},null,2);navigator.clipboard.writeText(f).then(()=>{ee(c("links.copied"))}).catch(()=>{te(f)})},ee=s=>{const t=document.createElement("div");if(t.textContent=s,t.className="friend-link-notification",t.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    font-size: 14px;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `,!document.querySelector("#friend-link-notification-styles")){const e=document.createElement("style");e.id="friend-link-notification-styles",e.textContent=`
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `,document.head.appendChild(e)}document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease-in",setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},300)},3e3)},te=s=>{const t=document.createElement("div");if(t.className="friend-link-modal",t.innerHTML=`
    <div class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3>${c("links.friendLinkGenerated")}</h3>
          <button class="modal-close" onclick="this.closest('.friend-link-modal').remove()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <textarea readonly class="json-textarea">${s}</textarea>
        </div>
        <div class="modal-footer">
          <button class="copy-button" onclick="
            const textarea = this.closest('.modal-content').querySelector('.json-textarea');
            textarea.select();
            document.execCommand('copy');
            this.textContent = '${c("links.copied")}';
            setTimeout(() => this.textContent = '${c("links.copyToClipboard")}', 2000);
          ">${c("links.copyToClipboard")}</button>
        </div>
      </div>
    </div>
  `,t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
  `,!document.querySelector("#friend-link-modal-styles")){const e=document.createElement("style");e.id="friend-link-modal-styles",e.textContent=`
      .friend-link-modal .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .friend-link-modal .modal-content {
        background: white;
        border-radius: 12px;
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow: hidden;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }
      .dark .friend-link-modal .modal-content {
        background: #1f2937;
      }
      .friend-link-modal .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid #e5e7eb;
      }
      .dark .friend-link-modal .modal-header {
        border-bottom-color: #374151;
      }
      .friend-link-modal .modal-header h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #111827;
      }
      .dark .friend-link-modal .modal-header h3 {
        color: #f9fafb;
      }
      .friend-link-modal .modal-close {
        background: none;
        border: none;
        font-size: 16px;
        color: #6b7280;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
      }
      .friend-link-modal .modal-close:hover {
        background: #f3f4f6;
        color: #374151;
      }
      .dark .friend-link-modal .modal-close:hover {
        background: #374151;
        color: #d1d5db;
      }
      .friend-link-modal .modal-body {
        padding: 20px;
      }
      .friend-link-modal .json-textarea {
        width: 100%;
        height: 200px;
        padding: 12px;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 13px;
        line-height: 1.5;
        resize: vertical;
        background: #f9fafb;
        color: #111827;
      }
      .dark .friend-link-modal .json-textarea {
        background: #111827;
        color: #f9fafb;
        border-color: #4b5563;
      }
      .friend-link-modal .modal-footer {
        padding: 20px;
        border-top: 1px solid #e5e7eb;
        display: flex;
        justify-content: flex-end;
      }
      .dark .friend-link-modal .modal-footer {
        border-top-color: #374151;
      }
      .friend-link-modal .copy-button {
        background: #3b82f6;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s;
      }
      .friend-link-modal .copy-button:hover {
        background: #2563eb;
      }
    `,document.head.appendChild(e)}document.body.appendChild(t),t.querySelector(".modal-overlay")?.addEventListener("click",e=>{e.target===e.currentTarget&&t.remove()})},oe=()=>{if(!C.value)return;const{scrollTop:s}=C.value;U.value=s>200,D()},D=()=>{const s=document.querySelector(".footer");if(s){const t=s.getBoundingClientRect(),e=window.innerHeight;if(t.top<e){const n=e-t.top+20;I.value=Math.max(n,80)}else I.value=80}},se=()=>{C.value&&C.value.scrollTo({top:0,behavior:"smooth"})},ne=s=>{s||(_.value=!1,O.value=!1,document.body.style.overflow=""),D(),P(()=>{H()})};let $=null;return pe(()=>{$=V(ne),D(),P(()=>{H()})}),me(()=>{$&&($(),$=null),document.body.style.overflow=""}),(s,t)=>(r(),l("div",je,[o("div",Se,[o("div",ze,[o("div",Ee,[o("h1",Me,i(a(c)("links.title")),1),o("p",$e,i(a(c)("links.subtitle")),1)]),o("div",qe,[o("div",Ie,[o("input",{type:"text",value:h.value,onInput:t[0]||(t[0]=e=>K(e.target.value)),placeholder:a(c)("links.searchPlaceholder"),class:"search-input"},null,40,De),h.value?(r(),l("button",{key:0,onClick:W,class:"search-clear"},[o("i",{class:p(a(b)("times")),"aria-hidden":"true"},null,2)])):x("",!0)]),o("div",Ne,[o("button",{onClick:Z,class:"generate-button group",title:a(c)("links.generateFriendLinkDesc")},[o("i",{class:p([a(b)("code"),"icon"])},null,2),o("span",Ae,i(a(c)("links.generateFriendLink")),1)],8,Be)])])]),o("div",Fe,[o("aside",Oe,[o("div",{class:"sidebar-toggle md:hidden",onClick:G},[o("i",{class:p([a(b)("filter"),"icon"])},null,2),R(" "+i(a(c)("links.categories")),1)]),o("div",{class:p(["sidebar-content",{active:O.value}])},[o("div",Ue,[o("div",He,[o("button",{onClick:t[1]||(t[1]=e=>E("")),class:p(["category-button",{active:g.value===""}])},[o("span",Pe,i(a(c)("links.allCategories")),1),o("span",Re,i(z.value[""]),1)],2),(r(!0),l(T,null,L(a(m).categories,e=>(r(),l("button",{key:e.id,onClick:n=>E(e.id),class:p(["category-button",{active:g.value===e.id}])},[o("span",Ve,i(v(e.name,d.value)),1),o("span",Xe,i(z.value[e.id]),1)],10,Je))),128))])])],2)]),o("div",{class:"links-main",ref_key:"linksMain",ref:C,onScroll:oe},[X.value.length===0?(r(),l("div",Qe,[o("i",{class:p([a(b)("link"),"no-links-icon"])},null,2),o("p",Ge,i(h.value?a(c)("links.noSearchResults"):a(c)("links.noLinks")),1)])):(r(),l("div",Ke,[(r(!0),l(T,null,L(Q.value,e=>(r(),l("div",{key:e.id,class:"category-section"},[o("h2",We,[R(i(v(e.name,d.value))+" ",1),o("span",Ye,"("+i(e.links.length)+")",1)]),o("p",Ze,i(v(e.description,d.value)),1),o("div",et,[(r(!0),l(T,null,L(e.links,n=>(r(),l("div",{key:n.id,class:"link-card",onClick:u=>Y(n.url)},[a(m).settings.showAvatar?(r(),l("div",ot,[ge(ke,{src:n.avatar||a(m).settings.defaultAvatar,alt:n.name,class:"avatar-img","object-fit":"cover","show-loader":!1},null,8,["src","alt"])])):x("",!0),o("div",st,[o("div",nt,[o("h3",at,i(n.name),1),a(m).settings.showDescription?(r(),l("p",it,i(v(n.description,d.value)),1)):x("",!0)]),a(m).settings.showTags&&n.tags&&n.tags.length>0?(r(),l("div",lt,[(r(!0),l(T,null,L(n.tags,u=>(r(),l("span",{key:u,class:"link-tag"},i(S(u,d.value)),1))),128))])):x("",!0)]),o("div",rt,[o("i",{class:p([a(b)("external-link-alt"),"external-icon"])},null,2)])],8,tt))),128))])]))),128))]))],544)])]),_.value?(r(),l("div",{key:0,class:"mobile-filter-overlay",onClick:M},[o("div",{class:"mobile-filter-content",onClick:t[3]||(t[3]=he(()=>{},["stop"]))},[o("div",ct,[o("h3",null,i(a(c)("links.categories")),1),o("button",{onClick:M,class:"close-button"},[o("i",{class:p(a(b)("times"))},null,2)])]),o("div",dt,[o("div",ut,[o("div",pt,[o("button",{onClick:t[2]||(t[2]=e=>{E(""),M()}),class:p(["category-button",{active:g.value===""}])},[o("span",mt,i(a(c)("links.allCategories")),1),o("span",ht,i(z.value[""]),1)],2),(r(!0),l(T,null,L(a(m).categories,e=>(r(),l("button",{key:e.id,onClick:n=>{E(e.id),M()},class:p(["category-button",{active:g.value===e.id}])},[o("span",gt,i(v(e.name,d.value)),1),o("span",vt,i(z.value[e.id]),1)],10,ft))),128))])])])])])):x("",!0),U.value?(r(),l("button",{key:1,onClick:se,class:"scroll-to-top-button",style:fe({bottom:I.value+"px"})},[o("i",{class:p(a(b)("chevron-up"))},null,2)],4)):x("",!0)]))}}),xt=ve(kt,[["__scopeId","data-v-e52d50f4"]]);export{xt as default};
