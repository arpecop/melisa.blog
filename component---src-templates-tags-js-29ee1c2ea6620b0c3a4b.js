(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0Wn5":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=t("17x9"),o=function(e){var a=e.content;return r.a.createElement("h1",null,a)};o.propsTypes={content:t.n(i).a.string},a.a=o},MN1z:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),i=t("ctJk"),o=t("0Wn5");a.default=function(e){var a=e.pageContext,t=e.data,n=a.tag,l=t.allMarkdownRemark,c=l.edges,m=l.totalCount,d=m+" post"+(1===m?"":"s")+' tagged with "'+n+'"';return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(o.a,{content:d}),c.map((function(e,a){var t=e.node;return r.a.createElement(i.a,{nodeObj:t,index:a})}))))}},ctJk:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=t("Wbzz"),o=t("5Wrh"),l=t("9eSz"),c=t.n(l),m=t("vOnD").b.article.withConfig({displayName:"BlogItem__BlogItemStyles",componentId:"sc-153efr4-0"})(["margin:calc(var(--spacing) * 4) 0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto auto;grid-gap:var(--spacing);@media (min-width:768px){margin:calc(var(--spacing) * 6) 0;grid-template-rows:auto auto;grid-gap:calc(var(--spacing) * 2);}@media (min-width:1200px){margin:calc(var(--spacing) * 8) 0;grid-gap:calc(var(--spacing) * 3);}> figure{grid-column:1 / 3;grid-row:1 / 2;overflow:hidden;background-color:#000;margin:0;opacity:1;img{transition:transform var(--transSlow) ease,opacity var(--transSlow) ease !important;opacity:1;}}&:hover{> figure{img{transform:scale(1.1);opacity:0.5 !important;}}}h2{grid-column:1 / 3;grid-row:2 / 3;font-size:var(--h3);margin:0;}a{text-decoration:none;}@media (min-width:768px){h2{grid-column:1 / 2;}}> div{grid-column:1 / 3;grid-row:3 / 4;p{margin-top:0;}@media (min-width:768px){grid-column:2 / 3;grid-row:2 / 3;p{margin-bottom:calc(var(--spacing) * 2);}}}.meta{display:flex;justify-content:space-between;h4{margin:0;font-size:var(--h5);color:var(--primaryColor);}}"]);a.a=function(e){var a=e.index,t=e.nodeObj.excerpt,n=e.nodeObj.frontmatter,l=n.title,d=n.date,g=n.path,p=n.featuredImageAlt,s=e.nodeObj.frontmatter.featuredImage.childImageSharp.fluid;return r.a.createElement(m,{key:"blog-item-"+a},s&&r.a.createElement("figure",null,r.a.createElement(i.Link,{to:g},r.a.createElement(c.a,{fluid:s,alt:p}))),l&&r.a.createElement("h2",null,r.a.createElement(i.Link,{to:g},l)),t&&r.a.createElement("div",null,r.a.createElement("p",null,t),g&&r.a.createElement("div",{className:"meta"},r.a.createElement(i.Link,{className:"btn-link",to:g},r.a.createElement(o.a,null)),r.a.createElement("h4",null,d))))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-29ee1c2ea6620b0c3a4b.js.map