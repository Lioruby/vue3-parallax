(function(e){function t(t){for(var l,i,a=t[0],s=t[1],o=t[2],u=0,f=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,o||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],l=!0,a=1;a<r.length;a++){var s=r[a];0!==n[s]&&(l=!1)}l&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var l={},n={app:0},c=[];function i(t){if(l[t])return l[t].exports;var r=l[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=l,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(r,l,function(t){return e[t]}.bind(null,l));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3-parallax/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var d=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var l=r("7a23"),n={class:"img__title",style:{display:"flex","justify-content":"flex-end","align-item":"center"}},c={class:"img__title"},i=Object(l["d"])("div",{class:"spacing"},null,-1),a={class:"horizontal__content"},s={style:{display:"flex","justify-content":"flex-start"}},o={class:"horizontal__elements"},d={style:{display:"flex","align-item":"center"}},u={class:"img__title"},f={class:"img__title",style:{}};function p(e,t,r,p,b,h){var j=Object(l["g"])("scroll-parallax");return Object(l["e"])(),Object(l["c"])(l["a"],null,[Object(l["d"])("section",null,[Object(l["d"])(j,{speed:.35},{default:Object(l["i"])((function(){return[Object(l["d"])("img",{class:"img__background",src:b.src1},null,8,["src"])]})),_:1},8,["speed"]),Object(l["d"])(j,{speed:.2},{default:Object(l["i"])((function(){return[Object(l["d"])("div",n,[Object(l["d"])("img",{src:b.src2,alt:""},null,8,["src"])]),Object(l["d"])("div",c,[Object(l["d"])("code",null,Object(l["h"])(b.scrollY),1)])]})),_:1},8,["speed"])]),i,Object(l["d"])("section",a,[Object(l["d"])(j,{speed:.25,left:!0,direction:"x"},{default:Object(l["i"])((function(){return[Object(l["d"])("div",s,[Object(l["d"])("img",{class:"img__background",src:b.src3},null,8,["src"]),Object(l["d"])("img",{class:"img__background",src:b.src1},null,8,["src"])])]})),_:1},8,["speed"]),Object(l["d"])("div",o,[Object(l["d"])(j,{speed:.15,direction:"x"},{default:Object(l["i"])((function(){return[Object(l["d"])("div",d,[Object(l["d"])("div",u,[Object(l["d"])("img",{src:b.src2,alt:""},null,8,["src"])]),Object(l["d"])("div",f,[Object(l["d"])("code",null,Object(l["h"])(b.scrollX),1)])])]})),_:1},8,["speed"])])])],64)}var b={ref:"scrollParallax"};function h(e,t,r,n,c,i){return Object(l["e"])(),Object(l["c"])("div",b,[Object(l["f"])(e.$slots,"default")],512)}r("99af"),r("a9e3");var j={name:"ScrollParallax",props:{speed:{type:Number,required:!0,default:.15},down:{type:Boolean,default:!1,required:!1},up:{type:Boolean,default:!0,required:!1},right:{type:Boolean,default:!0,required:!1},left:{type:Boolean,default:!1,requiredequired:!1},direction:{type:String,default:"y",required:!1}},data:function(){return{el:null,axes:null,speedCoeff:null}},methods:{loadParallax:function(){var e=this;this.initDirection(),this.el=this.$refs.scrollParallax,window.addEventListener("scroll",(function(){e.el.style.transform="translate".concat(e.axes,"(").concat(window.pageYOffset*e.speedCoeff,"px)")}))},initDirection:function(){"x"===this.direction?(this.axes="X",this.left?this.speedCoeff=-this.speed:this.speedCoeff=this.speed):"y"===this.direction&&(this.axes="Y",this.up?this.speedCoeff=this.speed:this.speedCoeff=-this.speed)}},mounted:function(){this.loadParallax()}};j.render=h;var x=j,O={components:{ScrollParallax:x},data:function(){return{src1:"https://images.unsplash.com/photo-1527685609591-44b0aef2400b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1791&q=80",src2:"https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",src3:"https://images.unsplash.com/photo-1590880449155-b54f958ce314?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",scrollY:'<scroll-parallax direction="y"></scroll-parallax>',scrollX:'<scroll-parallax :left="true" direction="x"></scroll-parallax>'}}};r("ec9d");O.render=p;var y=O;Object(l["b"])(y).mount("#app")},cf00:function(e,t,r){},ec9d:function(e,t,r){"use strict";r("cf00")}});
//# sourceMappingURL=app.3d48008b.js.map