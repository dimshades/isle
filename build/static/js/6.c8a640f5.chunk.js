(this.webpackJsonpisle2=this.webpackJsonpisle2||[]).push([[6],{192:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t),n.d(t,"GalleryWrapper",(function(){return p}));var a=n(9),o=n(191),r=n(190),i=(n(192),n(0)),l=n.n(i),c=n(10);function s(){var e=Object(a.a)(["\n    padding: 4rem 0 0 2rem;\n    position: relative;\n    z-index: 1;\n\n    .gallery-list-item {\n        margin: 2rem 0;\n        box-sizing: border-box;\n        position: relative;\n        overflow: hidden;\n\n        &:hover::after {\n            content: attr(data-hover);\n            color: white;\n            position: absolute;\n            box-sizing: border-box;\n            padding: 6rem 0 0 2rem;\n            cursor: pointer;\n            background-color: #17171730;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            opacity: 0;\n            animation: fade-in 0.45s forwards;\n        }\n    }\n    .gallery-list-image {\n        width: 32rem;\n        cursor: pointer;\n        box-sizing: border-box;\n    }\n"]);return s=function(){return e},e}var d=[{title:"coon",imageUrl:"https://cdn.pixabay.com/photo/2017/01/15/19/04/red-panda-1982445__340.jpg",text:"the coon:\n\n Click to view (\u70b9\u51fb\u67e5\u770b)",alt:"the coon"},{title:"the woods",imageUrl:"https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg",text:"the woods:\n\n Click to view (\u70b9\u51fb\u67e5\u770b)",alt:"the woods"},{title:"the fall",imageUrl:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",text:"the fall:\n\n Click to view (\u70b9\u51fb\u67e5\u770b)",alt:"the fall"}],p=c.a.div(s());t.default=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(""),s=Object(o.a)(c,2),m=s[0],u=s[1];return l.a.createElement(p,null,d.map((function(e,t){return l.a.createElement("div",{className:"gallery-list-item",key:t,"data-hover":e.text,onClick:function(){return function(e){u(e),a(!0)}(e.imageUrl)}},l.a.createElement("img",{alt:e.alt,src:e.imageUrl,className:"gallery-list-image"}))})),l.a.createElement(r.a,{url:m,onClose:function(){a(!1)},visible:n,operatorBar:["free-drag","free-rotate","reset"]}))}}}]);
//# sourceMappingURL=6.c8a640f5.chunk.js.map