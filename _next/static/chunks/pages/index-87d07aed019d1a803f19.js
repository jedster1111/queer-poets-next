_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"23aj":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r("nKUr"),o=(r("q1tI"),r("YFqc")),a=r.n(o),s=r("atJ6"),c=r.n(s),i=!0;function u(e){var t=e.poets;return Object(n.jsx)("section",{className:c.a.wrapper,children:Object(n.jsx)("div",{className:c.a.poetsList,children:t.map((function(e){var t=e.name,r=e.slug,o=e.portraitPath;return Object(n.jsx)("div",{className:c.a.poetItem,children:Object(n.jsx)(a.a,{href:"/poets/".concat(r),children:Object(n.jsxs)("span",{className:c.a.portraitWrapper,children:[Object(n.jsx)("div",{className:c.a.name,children:t}),Object(n.jsx)("img",{className:c.a.portrait,src:o,alt:"Portrait of the poet"})]})})},t)}))})})}},YFqc:function(e,t,r){e.exports=r("cTJO")},atJ6:function(e,t,r){e.exports={wrapper:"PoetsList_wrapper__VdmX1",imageOuterWrapper:"PoetsList_imageOuterWrapper__2Z2yX",imageInnerWrapper:"PoetsList_imageInnerWrapper__janSQ",poetsList:"PoetsList_poetsList__2dLH0",poetItem:"PoetsList_poetItem__1jE_g",name:"PoetsList_name__3IC6P",portraitWrapper:"PoetsList_portraitWrapper__21AL6",portrait:"PoetsList_portrait__1Xm4Z"}},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),o=r("284h");t.__esModule=!0,t.default=void 0;var a=o(r("q1tI")),s=r("elyg"),c=r("nOHt"),i=r("vNVm"),u={};function l(e,t,r,n){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),o=r&&r.pathname||"/",f=a.default.useMemo((function(){var t=(0,s.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],c=r[1];return{href:a,as:e.as?(0,s.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),p=f.href,d=f.as,_=e.children,v=e.replace,m=e.shallow,h=e.scroll,L=e.locale;"string"===typeof _&&(_=a.default.createElement("a",null,_));var g=a.Children.only(_),b=g&&"object"===typeof g&&g.ref,j=(0,i.useIntersection)({rootMargin:"200px"}),y=n(j,2),w=y[0],E=y[1],N=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,a.useEffect)((function(){var e=E&&t&&(0,s.isLocalURL)(p),n="undefined"!==typeof L?L:r&&r.locale,o=u[p+"%"+d+(n?"%"+n:"")];e&&!o&&l(r,p,d,{locale:n})}),[d,p,E,L,t,r]);var O={ref:N,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,r,p,d,v,m,h,L)},onMouseEnter:function(e){(0,s.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(r,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var P="undefined"!==typeof L?L:r&&r.locale,I=(0,s.getDomainLocale)(d,P,r&&r.locales,r&&r.domainLocales);O.href=I||(0,s.addBasePath)((0,s.addLocale)(d,P,r&&r.defaultLocale))}return a.default.cloneElement(g,O)};t.default=f},vNVm:function(e,t,r){"use strict";var n=r("J4zp"),o=r("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,o=(0,a.useRef)(),u=(0,a.useState)(!1),l=n(u,2),f=l[0],p=l[1],d=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||f||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,s=n.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){c||f||(0,s.default)((function(){return p(!0)}))}),[f]),[d,f]};var a=r("q1tI"),s=o(r("0G5g")),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["/EDR",0,1,2]]]);