(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){},function(e,t,n){var r=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],c=n[l]||0,h="".concat(l," ").concat(c);n[l]=c+1;var u=a(h),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(d)):s.push({identifier:h,updater:v(d,t),references:1}),r.push(h)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var h,u=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,g=0;function v(e,t){var n,r,i;if(t.singleton){var o=g++;n=f||(f=c(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=l(e,t),c=0;c<n.length;c++){var h=a(n[c]);0===s[h].references&&(s[h].updater(),s.splice(h,1))}n=o}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,".slider{user-select:none;box-sizing:border-box;position:relative;background-color:#ccc;width:100% !important;height:6px;border-radius:6px;cursor:pointer}.slider *{box-sizing:border-box}.slider .progress{width:100%;height:100%;border-radius:inherit;position:absolute;z-index:0;background-color:#ffb428}.slider .scale{position:absolute;width:100%;height:30px;top:6px;left:5px}.slider .scale:not(.vertical){padding-top:10px}.slider .scale.vertical{width:30px;height:100%;top:3px;padding-left:14px}.slider .scale.vertical .scale__el{transform:rotate(-90deg)}.slider .scale__el{font-size:12px;position:absolute;min-width:12px;width:12px;max-width:12px;display:flex;flex-direction:column;align-items:center}.slider .scale__el.selected{color:red;font-weight:bold}.slider .scale__el.selected .scale__line{background-color:red}.slider .scale__el.hidden{display:none}.slider .scale__el .scale__line{width:1px;height:3px;background-color:#333}.slider.vertical{width:6px !important;height:100%}.slider.vertical .slider__control{top:0;left:-8px}.slider.vertical .slider__control-info{top:1px;left:-34px}.slider.vertical .slider__control-info::after{content:'';position:absolute;box-sizing:border-box;top:7px;left:30px;width:0;height:0;border-left:3px solid red;border-right:3px solid transparent;border-top:3px solid transparent;border-bottom:3px solid transparent}.slider__control{position:absolute;top:-8px;width:22px;height:22px;border-radius:50%;background-color:red;z-index:1}.slider__control.hover:hover .slider__control-info{display:flex}.slider__control.always .slider__control-info{display:flex}.slider__control.never .slider__control-info{display:none}.slider__control-info{position:absolute;top:-29px;left:-4px;background-color:red;width:30px;height:20px;border-radius:5px;color:#fff;font-size:12px;display:none;align-items:center;justify-content:center}.slider__control-info::after{content:'';position:absolute;box-sizing:border-box;top:20px;left:12px;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid red}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var s,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var r=function(){function e(e,t){this.model=e,this.view=t,this.view.init(),this.model.init(this.view.sliderLength),this.view.updateState(this.model.getState()),this.initEvents(),this.initTrigger()}return e.prototype.initEvents=function(){var e=this;$(this.view).on("view:selectChanged",(function(t,n,r){e.model.updateStateCurrent(n,r),e.view.isSnapping&&(r=e.model.pixelOfCurrent(n)),e.view.updatePosAndValue(n,r,e.model.currentValue(n),e.model.currentArr)})),$(this.view).on("view:resized",(function(){e.model.resizeLogic(e.view.sliderLength),e.view.updateState(e.model.getState()),e.initTrigger()})),$(this.model).on("model:stateChanged",(function(t,n){"updateViewState"===n?e.view.updateState(e.model.getState()):"redrawWholeView"===n&&(e.view.destroy(),e.view.updateState(e.model.getState()),e.view.init()),e.initTrigger()}))},e.prototype.initTrigger=function(){$(this.view).trigger("view:selectChanged",[0,this.model.pixelOfCurrent(0)]),this.model.getState().selectRange&&$(this.view).trigger("view:selectChanged",[1,this.model.pixelOfCurrent(1)])},e}();function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n){var r=n.value;if("function"!=typeof r)throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(i(r)));var o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(t)||"function"!=typeof r)return r;var n=r.bind(this);return o=!0,Object.defineProperty(this,t,{configurable:!0,get:function(){return n},set:function(e){r=e,delete this[t]}}),o=!1,n},set:function(e){r=e}}}function s(e,t,n){if(2===e.length&&a(e)&&n)e=function(e,t){var n,r=e>t;r&&(e=(n=[t,e])[0],t=n[1]);var i=[];if("string"==typeof e&&"string"==typeof t)for(var o=["[","]","^","_","`","\\"],s=e.charCodeAt(0),a=t.charCodeAt(0);s<=a;++s){var l=String.fromCharCode(s);o.includes(l)||i.push(l)}else if("number"==typeof e&&"number"==typeof t)for(var c=e;c<=t;c++)i.push(c);return r?i.reverse():i}(e[0],e[1]);else if(2===e.length&&!a(e)&&n)throw new Error('SliderPlugin: If you want to "generateValues", all elements of provided range array should have same type: string or number');return e.filter((function(e,n){return n%t==0})).map((function(e){return String(e)}))}function a(e){return!("string"!=typeof e[0]&&"number"!=typeof e[0]||"string"!=typeof e[1]&&"number"!=typeof e[1])&&typeof e[0]==typeof e[1]}function l(e){return JSON.parse(JSON.stringify(e))}var c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},h=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},u=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},p=function(){function e(e,t){this.state=l(t),this.$root=e}return e.prototype.init=function(){return u(this,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return this.$slider=new f(this.state),this.$control=this.$slider.$control,[4,$(this.$root).html(this.$slider.HTML)];case 1:return e.sent(),[4,this.updateProgressBar()];case 2:return e.sent(),[4,$(this.$slider.$el).on("mousedown",this.eventHandler)];case 3:return e.sent(),[2]}}))}))},e.prototype.updateState=function(e){this.state=c(c({},this.state),e),this.$slider.updateState(e)},e.prototype.eventHandler=function(e){this.change(e),$("html").on("mousemove",this.mousemoveHandler),$("html").on("mouseup",this.mouseUp)},e.prototype.mousemoveHandler=function(e){this.change(e)},e.prototype.change=function(e){var t=this.$slider.getSelectedControlIndex(e),n=this.$slider.offset(),r=e.pageX;this.state.vertical&&(r=e.pageY);var i=r-n-this.$control[0].width()/2;$(this).trigger("view:selectChanged",[t,i])},e.prototype.updatePosAndValue=function(e,t,n,r){this.$control[e].changeControlPos(t,this.sliderLength,this.state.vertical),this.$control[e].$controlInfo.text=n,this.updateProgressBar(),this.$slider.$scale&&this.$slider.$scale.highliteEls(r)},e.prototype.mouseUp=function(e){this.$slider.removeZindex(),this.$slider.$selectedControl=null,$("html").off("mousemove"),$("html").off("mouseup")},e.prototype.updateProgressBar=function(){this.$slider.$progressBar.update(this.state.vertical,this.$control)},Object.defineProperty(e.prototype,"isSnapping",{get:function(){return this.state.snapping},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sliderLength",{get:function(){return this.$slider.length},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){$("html").off("mousemove"),$("html").off("mouseup"),$(this.$slider.$el).off("mousedown"),$(this.$root).empty()},h([o],e.prototype,"eventHandler",null),h([o],e.prototype,"mousemoveHandler",null),h([o],e.prototype,"mouseUp",null),e}(),f=function(){function e(e){this.$selectedControl=null,this.state=e,this.$el=document.createElement("div"),this.$el.className="slider "+this.state.class+" "+(this.state.vertical?"vertical":""),this.$scale=new g(this.state,this.$el),this.$progressBar=new v(this.state.progressBar),this.state.selectRange?this.$control=[new y("0",this.state.showSelected),new y("1",this.state.showSelected)]:this.$control=[new y("0",this.state.showSelected)],this.state.selectRange?this.$el.append(this.$control[0].$el,this.$progressBar.element,this.$control[1].$el):this.$el.append(this.$progressBar.element,this.$control[0].$el)}return e.prototype.updateState=function(e){var t=this;this.state=c(c({},this.state),e),this.$progressBar.updateState(this.state.progressBar),this.$control.forEach((function(e){return e.updateState(t.state.showSelected)})),this.$scale&&this.$scale.updateState(e)},e.prototype.getSelectedControlIndex=function(e){if(this.$selectedControl)return this.$selectedControl.index;var t=this.offset(),n=e.pageX;this.state.vertical&&(n=e.pageY);var r=n-t-this.$control[0].width()/2,i=0;if(this.$control.length>1){var o=[this.$control[0].position(this.state.vertical),this.$control[1].position(this.state.vertical)];i=o.indexOf(o.reduce((function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e})))}return this.$selectedControl=this.$control[i],this.addZindex(),i},e.prototype.addZindex=function(){this.$selectedControl&&($(this.$selectedControl.$el).css("z-index",100),this.whenDragged("add"))},e.prototype.removeZindex=function(){this.$selectedControl&&($(this.$selectedControl.$el).css("z-index",1),this.whenDragged("remove"))},e.prototype.whenDragged=function(e){var t;"hover"===this.state.showSelected&&(null===(t=this.$selectedControl)||void 0===t||t.$el.classList[e]("always"))},e.prototype.offset=function(){return this.state.vertical?$(this.$el).offset().top:$(this.$el).offset().left},Object.defineProperty(e.prototype,"length",{get:function(){return this.state.vertical?$(this.$el).height()-this.$control[0].height():$(this.$el).width()-this.$control[0].width()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HTML",{get:function(){return this.$el},enumerable:!1,configurable:!0}),e}(),g=function(){function e(e,t){this.state=e,this.$root=t,this.$wrapper=document.createElement("div"),this.$wrapper.classList.add("scale"),this.state.vertical&&this.$wrapper.classList.add("vertical"),this.$els=[],this.state.rangeOfPixels&&(0===this.$els.length||this.$els.length!==this.state.range.length?this.generateScale():this.updateEls())}return e.prototype.highliteEls=function(e){var t=this;this.$els.forEach((function(n,r){t.shouldBeHighlited(e,r)?n.classList.add("selected"):n.classList.remove("selected")}))},e.prototype.shouldBeHighlited=function(e,t){var n;if(this.state.scaleHighlighting){var r=e[0],i=e[1];if(r>i&&(r=(n=[i,r])[0],i=n[1]),e.length>1&&t>=r&&t<=i)return!0}return e.includes(t)},e.prototype.generateScale=function(){var e,t=this;$(this.$wrapper).empty(),this.$els=[],null===(e=this.state.range)||void 0===e||e.forEach((function(e,n,r){var i=document.createElement("div");i.classList.add("scale__el");var o=document.createElement("div");o.classList.add("scale__line");var s=document.createElement("div");s.classList.add("scale__val"),s.textContent=e,t.handleHidden(n,i,r.length),i.append(o,s),t.$els.push(i),t.state.vertical?$(i).css("top",t.state.rangeOfPixels[n]):$(i).css("left",t.state.rangeOfPixels[n])})),this.$els.forEach((function(e){t.$wrapper.appendChild(e)})),this.$root.appendChild(this.$wrapper)},Object.defineProperty(e.prototype,"scaleState",{get:function(){return this.state},enumerable:!1,configurable:!0}),e.prototype.updateState=function(e){this.state=c(c({},this.state),e),this.highliteEls(this.state.current),this.state.showScale?$(this.$wrapper).css("display",""):this.state.showScale||$(this.$wrapper).css("display","none"),0===this.$els.length||this.$els.length!==this.state.range.length?this.generateScale():this.updateEls()},e.prototype.updateEls=function(){var e=this;this.$els.forEach((function(t,n,r){t.querySelector(".scale__val").textContent=e.state.range[n],t.classList.remove("hidden"),e.handleHidden(n,t,r.length),e.state.vertical?($(t).css("top",e.state.rangeOfPixels[n]),$(t).css("left","")):($(t).css("left",e.state.rangeOfPixels[n]),$(t).css("top",""))}))},e.prototype.handleHidden=function(e,t,n){e%this.state.scaleStep!=0&&(t.classList.add("hidden"),0===this.state.scaleStep&&(0===e||e===n-1||n%2!=0&&e===(n-1)/2)&&t.classList.remove("hidden"))},e}(),v=function(){function e(e){this.$el=document.createElement("div"),this.$el.className="progress",this.updateState(e)}return e.prototype.updateState=function(e){e?$(this.$el).css("display",""):$(this.$el).css("display","none")},Object.defineProperty(e.prototype,"element",{get:function(){return this.$el},enumerable:!1,configurable:!0}),e.prototype.update=function(e,t){var n,r=e?"top":"left",i=e?"height":"width";if(t.length>1){var o=t[0].position(e),s=t[1].position(e);o>s&&(o=(n=[s,o])[0],s=n[1]),$(this.$el).css(r,o),$(this.$el).css(i,s-o+t[0].width())}else $(this.$el).css(i,t[0].position(e)+t[0].width())},e}(),y=function(){function e(e,t){this.index=+e,this.$el=document.createElement("div"),this.$el.setAttribute("data-control_index",e),this.$el.className="slider__control "+t,this.$controlInfo=new m,this.$el.append(this.$controlInfo.$el)}return e.prototype.changeControlPos=function(e,t,n){var r=n?"top":"left";e>=t?$(this.$el).css(r,t):e<=0?$(this.$el).css(r,0):$(this.$el).css(r,e)},e.prototype.updateState=function(e){this.$el.className="slider__control "+e},e.prototype.position=function(e){return e?parseInt($(this.$el).css("top")):parseInt($(this.$el).css("left"))},e.prototype.width=function(){return $(this.$el).width()},e.prototype.height=function(){return $(this.$el).height()},e}(),m=function(){function e(){this.$el=document.createElement("div"),this.$el.className="slider__control-info"}return Object.defineProperty(e.prototype,"text",{set:function(e){this.$el.innerHTML=e},enumerable:!1,configurable:!0}),e}(),w=(n(1),function(){function e(e){this.state=l(e),this.initRange=l(this.state.range)}return e.prototype.init=function(e){this.state.range=s(this.state.range,this.state.step,this.state.generateValues),this.generateRangeOfPixels(e)},e.prototype.generateValues=function(e){"boolean"==typeof e?this.state.generateValues=e:console.warn("generateValues option should take boolean: true or false")},e.prototype.scaleHighlighting=function(e){"boolean"==typeof e?(this.state.scaleHighlighting=e,$(this).trigger("model:stateChanged","updateViewState")):console.warn("scaleHighlighting option should take boolean: true or false")},e.prototype.scaleStep=function(e){"number"==typeof e?(this.state.scaleStep=e,$(this).trigger("model:stateChanged","updateViewState")):console.warn("scaleStep option should take INTEGER")},e.prototype.showScale=function(e){"boolean"==typeof e?(this.state.showScale=e,$(this).trigger("model:stateChanged","updateViewState")):console.warn("showScale option should take boolean: true or false")},e.prototype.showSelected=function(e){"always"===e||"hover"===e||"never"===e||!0===e||!1===e?(!0===e?e="always":!1===e&&(e="never"),this.state.showSelected=e,$(this).trigger("model:stateChanged","updateViewState")):console.warn('showSelected option can take:\n        boolean: true or false,\n        string: "always" | "hover" | "never"')},e.prototype.progressBar=function(e){"boolean"==typeof e?(this.state.progressBar=e,$(this).trigger("model:stateChanged","updateViewState")):console.warn("progressBar option should take boolean: true or false")},e.prototype.vertical=function(e){"boolean"==typeof e?(this.state.vertical=e,$(this).trigger("model:stateChanged","redrawWholeView")):console.warn("vertical option should take boolean: true or false")},e.prototype.selectRange=function(e){"boolean"==typeof e?(this.state.selectRange=e,this.state.current=[this.state.current[0]],$(this).trigger("model:stateChanged","redrawWholeView")):console.warn("selectRange option should take boolean: true or false")},e.prototype.changeClass=function(e){"string"==typeof e?(this.state.class=e,$(this).trigger("model:stateChanged","redrawWholeView")):console.warn("changeClass option should take string")},e.prototype.snapping=function(e){"boolean"==typeof e?(this.state.snapping=e,$(this).trigger("model:stateChanged","updateViewState")):console.warn("Snapping option should take boolean: true or false")},e.prototype.changeStep=function(e){0!==e&&e%1==0?(this.state.step=e,this.state.range=s(this.initRange,this.state.step,this.state.generateValues),this.generateRangeOfPixels(),$(this).trigger("model:stateChanged","updateViewState")):console.warn("Step should be more then 0 and an integer")},e.prototype.resizeLogic=function(e){this.generateRangeOfPixels(e)},e.prototype.newRange=function(e){Array.isArray(e)?(this.state.range=s(e,this.state.step,this.state.generateValues),this.initRange=l(this.state.range),this.generateRangeOfPixels(),$(this).trigger("model:stateChanged","updateViewState")):console.warn("newRange should be an Array")},e.prototype.chooseValue=function(e,t){var n,r=void 0!==e?String(e):void 0,i=void 0!==t?String(t):void 0;"string"==typeof r&&(-1!==(n=this.state.range.indexOf(r))&&(this.state.current[0]=n));"string"==typeof i&&this.state.selectRange&&(-1!==(n=this.state.range.indexOf(i))&&(this.state.current[1]=n));$(this).trigger("model:stateChanged")},e.prototype.deleteSelected=function(){var e=this.selectedValues;return this.state.range=this.state.range.filter((function(t){return-1===e.indexOf(t)})),this.state.range.length<2&&(0===this.state.range.length?this.state.range.push("out of values","out of values"):1===this.state.range.length&&this.state.range.push("out of values")),this.generateRangeOfPixels(),$(this).trigger("model:stateChanged","updateViewState"),e},e.prototype.getState=function(){return this.state},e.prototype.pixelOfCurrent=function(e){var t;return null!==(t=this.state.rangeOfPixels[this.state.current[e]])&&void 0!==t?t:0},e.prototype.currentValue=function(e){return this.state.range[this.state.current[e]]},Object.defineProperty(e.prototype,"currentArr",{get:function(){var e;return this.state.selectRange&&(this.state.current[1]=null!==(e=this.state.current[1])&&void 0!==e?e:0),this.state.current},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedValues",{get:function(){var e;if(!this.state.selectRange)return this.currentValue(0);var t=this.state.current[0],n=this.state.current[1];t>n&&(t=(e=[n,t])[0],n=e[1]);for(var r=[];t<=n;t++)r.push(this.state.range[t]);return r},enumerable:!1,configurable:!0}),e.prototype.updateStateCurrent=function(e,t){var n,r=this.state.rangeOfPixels.reduce((function(e,n,r){return Math.abs(n-t)<Math.abs(e-t)?n:e})),i=null===(n=this.state.rangeOfPixels)||void 0===n?void 0:n.indexOf(r);this.state.current[e]=i},e.prototype.generateRangeOfPixels=function(e){var t;if(void 0===e&&(e=void 0),void 0===e){if(!this.state.rangeOfPixels)throw new Error("Provide sliderWidth variable!");e=this.state.rangeOfPixels[(null===(t=this.state.rangeOfPixels)||void 0===t?void 0:t.length)-1]}var n=e/(this.state.range.length-1),r=this.state.range.map((function(e,t){return Math.round(t*n)}));this.state.rangeOfPixels=r},e}()),b=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},x=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},S=function(){function e(e,t){var n=this;this.resized=function(){$(n._view).trigger("view:resized")},this.selectedValues=function(){return n._model.selectedValues},this.chooseValue=function(e,t){return n._model.chooseValue(e,t)},this.allValues=function(){return n._model.getState().range},this.deleteSelected=function(){return n._model.deleteSelected()},this.newRange=function(e){return n._model.newRange(e)},this.generateValues=function(e){return n._model.generateValues(e)},this.changeStep=function(e){return n._model.changeStep(e)},this.snapping=function(e){return n._model.snapping(e)},this.changeClass=function(e){return n._model.changeClass(e)},this.selectRange=function(e){return n._model.selectRange(e)},this.vertical=function(e){return n._model.vertical(e)},this.progressBar=function(e){return n._model.progressBar(e)},this.showSelected=function(e){return n._model.showSelected(e)},this.showScale=function(e){return n._model.showScale(e)},this.scaleStep=function(e){return n._model.scaleStep(e)},this.scaleHighlighting=function(e){return n._model.scaleHighlighting(e)},this._el=e,this._$el=$(e),this._initSettings=t,this.init()}return e.prototype.init=function(){return b(this,void 0,void 0,(function(){var e,t,n;return x(this,(function(i){switch(i.label){case 0:return e=this,[4,new p(this._$el,this._initSettings)];case 1:return e._view=i.sent(),t=this,[4,new w(this._initSettings)];case 2:return t._model=i.sent(),n=this,[4,new r(this._model,this._view)];case 3:return n._presenter=i.sent(),[4,this.observeResize()];case 4:return i.sent(),[2]}}))}))},e.prototype.observeResize=function(){e.resizeObserver.observe(this._el)},e.resizeObserver=new ResizeObserver((function(e){e.forEach((function(e){var t=e.target;$(t).data("sliderPlugin").resized()}))})),e}(),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},C={range:[0,100],generateValues:!0,step:1,current:[0],snapping:!1,class:"",selectRange:!1,vertical:!1,progressBar:!0,showSelected:"always",showScale:!1,scaleStep:1,scaleHighlighting:!0};!function(e){e.fn.sliderPlugin=function(t){var n;void 0===t&&(t=C),t=_(_({},t),{class:""+(null!==(n=t.class)&&void 0!==n?n:""),current:Array.isArray(t.current)?t.current:[0]});var r=e.extend({},C,t);return this.each((function(){e.data(this,"sliderPlugin")||e.data(this,"sliderPlugin",new S(this,r))}))},e((function(){e(".sliderPlugin").length&&e(".sliderPlugin").sliderPlugin()}))}(jQuery)}],[[5,1]]]);