(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{336:function(t,s,e){"use strict";e.r(s),e.d(s,"ks_tabs",(function(){return i}));var r=e(13),a=e(338),i=function(){function t(t){Object(r.i)(this,t),this.$selectedTab=null,this.tabId="tabs_"+o++,this.position="top",this.align="start",this.selectedIndex=0}return t.prototype.connectedCallback=function(){this.initElements(),this.initTabs()},t.prototype.componentDidLoad=function(){this.$tabs=Array.from(this.$el.querySelectorAll('[role="tab"]'))},t.prototype.initElements=function(){this.$tabPanels=Array.from(this.$el.querySelectorAll("ks-tab"))},t.prototype.initTabs=function(){var t=this;0!==this.$tabPanels.length&&this.$tabPanels.forEach((function(s,e){s.hidden=e>0,s.id=s.id||t.tabId+"_tab_"+e,s.setAttribute("aria-labelledby",(s.id||t.tabId+"_tab_"+e)+"_button")}))},t.prototype.clickHandler=function(t,s){var e=t.target;this.selectedIndex=s,this.$tabList.querySelectorAll('[aria-selected="true"]').forEach((function(t){return t.setAttribute("aria-selected","false")})),e.setAttribute("aria-selected","true"),this.$tabPanels.forEach((function(t){return t.setAttribute("hidden","true")})),this.$tabPanels[s].removeAttribute("hidden")},t.prototype.keydownHandler=function(t){t.keyCode!==a.c.RIGHT_ARROW&&t.keyCode!==a.c.LEFT_ARROW||(this.deselectTab(),t.keyCode===a.c.RIGHT_ARROW?this.goToNextTab():this.goToPreviousTab(),this.selectTab())},t.prototype.goToNextTab=function(){this.selectedIndex++,this.selectedIndex>=this.$tabs.length&&(this.selectedIndex=0)},t.prototype.goToPreviousTab=function(){this.selectedIndex--,this.selectedIndex<0&&(this.selectedIndex=this.$tabs.length-1)},t.prototype.deselectTab=function(){this.$tabs[this.selectedIndex].setAttribute("tabindex","-1"),this.$tabs[this.selectedIndex].setAttribute("aria-selected","false"),this.$tabPanels[this.selectedIndex].setAttribute("hidden","true")},t.prototype.selectTab=function(){this.$tabs[this.selectedIndex].setAttribute("tabindex","0"),this.$tabs[this.selectedIndex].setAttribute("aria-selected","true"),this.$tabPanels[this.selectedIndex].removeAttribute("hidden"),this.$tabs[this.selectedIndex].focus()},t.prototype.render=function(){var t=this;return Object(r.g)(r.b,{class:"ks-tabs align-"+this.position},Object(r.g)("div",{role:"tablist",class:"tab-list justify-"+this.align,"aria-label":this.label,ref:function(s){return t.$tabList=s},onKeyDown:function(s){return t.keydownHandler(s)}},this.$tabPanels.map((function(s,e){return Object(r.g)("button",{role:"tab",class:"tab-item","aria-selected":""+(0===e),"aria-controls":s.id||t.tabId+"_tab_"+e,id:(s.id||t.tabId+"_"+e)+"_button",tabIndex:0===e?0:-1,onClick:function(s){return t.clickHandler(s,e)}},s.tabText)}))),Object(r.g)("slot",null))},Object.defineProperty(t.prototype,"$el",{get:function(){return Object(r.f)(this)},enumerable:!1,configurable:!0}),t}(),o=0;i.style=".ks-tabs{display:-ms-flexbox;display:flex;-webkit-box-shadow:var(--ks-shadow-sm);box-shadow:var(--ks-shadow-sm);border-top-left-radius:var(--ks-border-radius-sm);border-top-right-radius:var(--ks-border-radius-sm);border-bottom-left-radius:var(--ks-border-radius-sm);border-bottom-right-radius:var(--ks-border-radius-sm)}.ks-tabs .tab-list{display:-ms-flexbox;display:flex;color:rgba(var(--ks-color-light-lighter-text),1);background-color:rgba(var(--ks-color-light-lighter),1);padding:var(--ks-spacing-size-none);margin:var(--ks-spacing-size-none)}.ks-tabs .tab-list.justify-justified .tab-item{width:100%;text-align:center}.ks-tabs .tab-list .tab-item{text-decoration:none;white-space:nowrap;background-color:transparent;vertical-align:inherit;border:0;color:rgba(var(--ks-color-primary-base),1);padding:var(--ks-spacing-size-md) var(--ks-spacing-size-lg)}.ks-tabs .tab-list .tab-item :hover{text-decoration:none}.ks-tabs .tab-list .tab-item :focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset)}.ks-tabs .tab-list .tab-item[aria-selected=true]{color:rgba(var(--ks-color-primary-base),1);-webkit-box-shadow:var(--ks-shadow-sm);box-shadow:var(--ks-shadow-sm);margin:calc(-1*var(--ks-spacing-size-xxxs))}.ks-tabs .tab-list .tab-item[aria-selected=true],.ks-tabs .tab-panel{background-color:#fff;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-tabs .tab-panel{width:100%;white-space:normal;padding:var(--ks-spacing-size-lg)}.ks-tabs.align-top{-ms-flex-direction:column;flex-direction:column}.ks-tabs.align-top .tab-list{-ms-flex-wrap:wrap;flex-wrap:wrap;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);border-top-left-radius:var(--ks-border-radius-sm);border-top-right-radius:var(--ks-border-radius-sm)}.ks-tabs.align-top .tab-list.justify-justified{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ks-tabs.align-top .tab-list .tab-item[aria-selected=true]{border-bottom:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1);border-top-left-radius:var(--ks-border-radius-sm);border-top-right-radius:var(--ks-border-radius-sm)}.ks-tabs.align-top .tab-panel{-ms-flex-negative:0;flex-shrink:0;border-top:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1);border-bottom-left-radius:var(--ks-border-radius-sm);border-bottom-right-radius:var(--ks-border-radius-sm)}.ks-tabs.align-bottom{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.ks-tabs.align-bottom .tab-list{-ms-flex-wrap:wrap;flex-wrap:wrap;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);border-bottom-left-radius:var(--ks-border-radius-sm);border-bottom-right-radius:var(--ks-border-radius-sm)}.ks-tabs.align-bottom .tab-list.justify-justified{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ks-tabs.align-bottom .tab-list .tab-item[aria-selected=true]{position:relative;border-top:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1);border-bottom-left-radius:var(--ks-border-radius-sm);border-bottom-right-radius:var(--ks-border-radius-sm)}.ks-tabs.align-bottom .tab-panel{-ms-flex-negative:0;flex-shrink:0;border-bottom:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1);border-top-left-radius:var(--ks-border-radius-sm);border-top-right-radius:var(--ks-border-radius-sm)}.ks-tabs.align-left{-ms-flex-direction:row;flex-direction:row}.ks-tabs.align-left .tab-list{-ms-flex-direction:column;flex-direction:column;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);border-top-left-radius:var(--ks-border-radius-sm);border-bottom-left-radius:var(--ks-border-radius-sm)}.ks-tabs.align-left .tab-list.justify-justified .tab-item{height:100%}.ks-tabs.align-left .tab-list .tab-item{-ms-flex-item-align:end;align-self:flex-end;width:100%;margin-right:calc(-1*var(--ks-spacing-size-xxs));width:101%}.ks-tabs.align-left .tab-list .tab-item[aria-selected=true]{-webkit-box-shadow:var(--ks-shadow-sm);box-shadow:var(--ks-shadow-sm);border-right:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1);border-top-left-radius:var(--ks-border-radius-sm);border-bottom-left-radius:var(--ks-border-radius-sm)}.ks-tabs.align-left .tab-panel{border-left:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1);border-top-right-radius:var(--ks-border-radius-sm);border-bottom-right-radius:var(--ks-border-radius-sm)}.ks-tabs.align-right{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.ks-tabs.align-right .tab-list{-ms-flex-direction:column;flex-direction:column;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);border-top-right-radius:var(--ks-border-radius-sm);border-bottom-right-radius:var(--ks-border-radius-sm)}.ks-tabs.align-right .tab-list.justify-justified .tab-item{height:100%}.ks-tabs.align-right .tab-list .tab-item{-ms-flex-item-align:start;align-self:flex-start;width:100%;width:101%}.ks-tabs.align-right .tab-list .tab-item[aria-selected=true]{-webkit-box-shadow:var(--ks-shadow-sm);box-shadow:var(--ks-shadow-sm);border-left:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1);border-top-right-radius:var(--ks-border-radius-sm);border-bottom-right-radius:var(--ks-border-radius-sm)}.ks-tabs.align-right .tab-panel{border-right:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1);border-top-left-radius:var(--ks-border-radius-sm);border-bottom-left-radius:var(--ks-border-radius-sm)}"},338:function(t,s,e){"use strict";e.d(s,"a",(function(){return r})),e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return a}));var r='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',a={TAB:9,ENTER:13,SHIFT:16,CTRL:17,ESC:27,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,SPACE:32},i=function(t,s){var e;return function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];e&&clearTimeout(e),e=setTimeout((function(){t.apply(void 0,r)}),s)}}}}]);