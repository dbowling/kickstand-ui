(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{315:function(e,i,r){"use strict";r.r(i),r.d(i,"ks_card",(function(){return t}));var s=r(13),t=function(){function e(e){Object(s.i)(this,e),this.imgDirection="top",this.clickable=!1,this.collapse="xs",this.linkTag="a",this.hrefProp="href"}return e.prototype.componentDidLoad=function(){var e=this;this.clickable&&this.href&&this.$el.addEventListener("click",(function(i){e.$link!==i.target&&e.$link.click()}))},e.prototype.render=function(){var e,i,r=this,t=((e={"ks-card":!0})["img-"+this.imgDirection]=!0,e.pointer=this.clickable&&""!==this.href&&void 0!==this.href,e["collapse-"+this.collapse]="behind"!==this.imgDirection,e),c=((i={})[this.hrefProp]=this.href,i),o=this.linkTag;return Object(s.g)(s.b,{class:t},this.imgSrc&&Object(s.g)("div",{class:"card-img"},this.href?Object(s.g)(o,Object.assign({},c,{ref:function(e){return r.$link=e}}),Object(s.g)("ks-img",{alt:this.alt,lazy:this.lazy,src:this.imgSrc,threshold:this.threshold,width:this.imgWidth,height:this.imgHeight,"aspect-ratio":this.imgAspectRatio})):Object(s.g)("ks-img",{alt:this.alt,lazy:this.lazy,src:this.imgSrc,threshold:this.threshold,width:this.imgWidth,height:this.imgHeight,"aspect-ratio":this.imgAspectRatio})),Object(s.g)("div",{class:"card-content"},Object(s.g)("slot",null)))},Object.defineProperty(e.prototype,"$el",{get:function(){return Object(s.f)(this)},enumerable:!1,configurable:!0}),e}();t.style=".ks-card{position:relative;overflow:hidden;border-top-left-radius:var(--ks-border-radius-sm);border-top-right-radius:var(--ks-border-radius-sm);border-bottom-left-radius:var(--ks-border-radius-sm);border-bottom-right-radius:var(--ks-border-radius-sm);border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-dark),1);-webkit-box-shadow:var(--ks-shadow-sm);box-shadow:var(--ks-shadow-sm)}.ks-card.img-top{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.ks-card.img-top .card-img{-ms-flex-negative:0;flex-shrink:0}.ks-card.img-bottom{display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.ks-card.img-bottom .card-img{-ms-flex-negative:0;flex-shrink:0}.ks-card.img-left{display:-ms-flexbox;display:flex}.ks-card.img-right{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.ks-card.img-behind{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.ks-card.img-behind .card-img{-ms-flex-negative:0;flex-shrink:0}.ks-card.img-behind .card-content{position:absolute;top:0;right:0;bottom:0;left:0}.ks-card.img-behind .card-content .card-body .body-header .heading,.ks-card.img-behind .card-content .card-body .body-header .subheading,.ks-card.img-behind .card-content .card-body .body-text{color:#fff;text-shadow:2px 2px 4px rgba(var(--ks-color-dark-base),1)}@media screen and (max-width:89rem){.ks-card.collapse-xl{-ms-flex-direction:column;flex-direction:column}}@media screen and (max-width:74rem){.ks-card.collapse-lg{-ms-flex-direction:column;flex-direction:column}}@media screen and (max-width:61rem){.ks-card.collapse-md{-ms-flex-direction:column;flex-direction:column}}@media screen and (max-width:47rem){.ks-card.collapse-sm{-ms-flex-direction:column;flex-direction:column}}@media screen and (max-width:29rem){.ks-card.collapse-xs{-ms-flex-direction:column;flex-direction:column}}@media screen and (max-width:19rem){.ks-card.collapse-xxs{-ms-flex-direction:column;flex-direction:column}}@media screen and (prefers-color-scheme:light){.ks-card.collapse-light-mode{-ms-flex-direction:column;flex-direction:column}}@media screen and (prefers-color-scheme:dark){.ks-card.collapse-dark-mode{-ms-flex-direction:column;flex-direction:column}}@media print{.ks-card.collapse-print{-ms-flex-direction:column;flex-direction:column}}.ks-card .card-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;padding:var(--ks-spacing-size-md)}.ks-card .card-content .card-body{display:block}.ks-card .card-content .card-body .body-header .heading{font-size:var(--ks-font-size-lg);margin-bottom:var(--ks-spacing-size-none)}.ks-card .card-content .card-body .body-header .subheading{color:#596d7f;margin-bottom:var(--ks-spacing-size-xs)}.ks-card .card-content .card-body .body-text{color:#37444f}.ks-card .card-content .card-footer{display:block;margin-top:var(--ks-spacing-size-md)}"}}]);