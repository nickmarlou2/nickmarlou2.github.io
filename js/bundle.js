!function e(t,o,n){function i(r,s){if(!o[r]){if(!t[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(a)return a(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var u=o[r]={exports:{}};t[r][0].call(u.exports,function(e){var o=t[r][1][e];return i(o?o:e)},u,u.exports,e,t,o,n)}return o[r].exports}for(var a="function"==typeof require&&require,r=0;r<n.length;r++)i(n[r]);return i}({1:[function(e,t,o){!function(){function e(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function o(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())})}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function i(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function a(e){var t=e.a.offsetWidth,o=t+100;return e.f.style.width=o+"px",e.c.scrollLeft=o,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function r(t,o){function n(){var e=i;a(e)&&e.a.parentNode&&o(e.g)}var i=t;e(t.b,n),e(t.c,n),a(t)}function s(e,t){var o=t||{};this.family=e,this.style=o.style||"normal",this.weight=o.weight||"normal",this.stretch=o.stretch||"normal"}function c(){if(null===h)if(l()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);h=!!e&&603>parseInt(e[1],10)}else h=!1;return h}function l(){return null===p&&(p=!!document.fonts),p}function u(){if(null===y){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}y=""!==e.style.font}return y}function d(e,t){return[e.style,e.weight,u()?e.stretch:"","100px",t].join(" ")}var f=null,h=null,y=null,p=null;s.prototype.load=function(e,t){var a=this,s=e||"BESbswy",u=0,h=t||3e3,y=(new Date).getTime();return new Promise(function(e,t){if(l()&&!c()){var p=new Promise(function(e,t){function o(){(new Date).getTime()-y>=h?t():document.fonts.load(d(a,'"'+a.family+'"'),s).then(function(t){1<=t.length?e():setTimeout(o,25)},function(){t()})}o()}),g=new Promise(function(e,t){u=setTimeout(t,h)});Promise.race([g,p]).then(function(){clearTimeout(u),e(a)},function(){t(a)})}else o(function(){function o(){var t;(t=-1!=m&&-1!=v||-1!=m&&-1!=w||-1!=v&&-1!=w)&&((t=m!=v&&m!=w&&v!=w)||(null===f&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),f=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=f&&(m==j&&v==j&&w==j||m==Q&&v==Q&&w==Q||m==b&&v==b&&w==b)),t=!t),t&&(C.parentNode&&C.parentNode.removeChild(C),clearTimeout(u),e(a))}function c(){if((new Date).getTime()-y>=h)C.parentNode&&C.parentNode.removeChild(C),t(a);else{var e=document.hidden;!0!==e&&void 0!==e||(m=l.a.offsetWidth,v=p.a.offsetWidth,w=g.a.offsetWidth,o()),u=setTimeout(c,50)}}var l=new n(s),p=new n(s),g=new n(s),m=-1,v=-1,w=-1,j=-1,Q=-1,b=-1,C=document.createElement("div");C.dir="ltr",i(l,d(a,"sans-serif")),i(p,d(a,"serif")),i(g,d(a,"monospace")),C.appendChild(l.a),C.appendChild(p.a),C.appendChild(g.a),document.body.appendChild(C),j=l.a.offsetWidth,Q=p.a.offsetWidth,b=g.a.offsetWidth,c(),r(l,function(e){m=e,o()}),i(l,d(a,'"'+a.family+'",sans-serif')),r(p,function(e){v=e,o()}),i(p,d(a,'"'+a.family+'",serif')),r(g,function(e){w=e,o()}),i(g,d(a,'"'+a.family+'",monospace'))})})},void 0!==t?t.exports=s:(window.FontFaceObserver=s,window.FontFaceObserver.prototype.load=s.prototype.load)}()},{}],2:[function(e,t,o){(function(e){function o(e,t,o){function i(t){var o=p,n=g;return p=g=void 0,x=t,v=e.apply(n,o)}function a(e){return x=e,w=setTimeout(u,t),S?i(e):v}function c(e){var o=e-C,n=e-x,i=t-o;return k?Q(i,m-n):i}function l(e){var o=e-C,n=e-x;return void 0===C||o>=t||o<0||k&&n>=m}function u(){var e=b();if(l(e))return d(e);w=setTimeout(u,c(e))}function d(e){return w=void 0,O&&p?i(e):(p=g=void 0,v)}function f(){void 0!==w&&clearTimeout(w),x=0,p=C=g=w=void 0}function h(){return void 0===w?v:d(b())}function y(){var e=b(),o=l(e);if(p=arguments,g=this,C=e,o){if(void 0===w)return a(C);if(k)return w=setTimeout(u,t),i(C)}return void 0===w&&(w=setTimeout(u,t)),v}var p,g,m,v,w,C,x=0,S=!1,k=!1,O=!0;if("function"!=typeof e)throw new TypeError(s);return t=r(t)||0,n(o)&&(S=!!o.leading,k="maxWait"in o,m=k?j(r(o.maxWait)||0,t):m,O="trailing"in o?!!o.trailing:O),y.cancel=f,y.flush=h,y}function n(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||i(e)&&w.call(e)==l}function r(e){if("number"==typeof e)return e;if(a(e))return c;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var o=f.test(e);return o||h.test(e)?y(e.slice(2),o?2:8):d.test(e)?c:+e}var s="Expected a function",c=NaN,l="[object Symbol]",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,h=/^0o[0-7]+$/i,y=parseInt,p="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,m=p||g||Function("return this")(),v=Object.prototype,w=v.toString,j=Math.max,Q=Math.min,b=function(){return m.Date.now()};t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("fontfaceobserver"),i=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(){var e=new i.default("Lato Light"),t=new i.default("Lato Regular"),o=new i.default("Lato Semibold"),n=new i.default("Lato Bold"),a=new i.default("Lato Italic"),r=document.documentElement;sessionStorage.fontsLoaded?(r.classList.add("fonts-loaded"),console.log("Шрифт загружен из кэша браузера")):(r.classList.add("fonts-loading"),Promise.race([function(e){return new Promise(function(t,o){setTimeout(o,e)})}(1e3),e.load(),t.load(),o.load(),n.load(),a.load()]).then(function(){console.log("Шрифты загружены меньше, чем за 1 секунду"),sessionStorage.fontsLoaded=!0,console.log("Информация об успешной загрузке шрифтов добавлена в session storage"),r.classList.remove("fonts-loading"),r.classList.add("fonts-loaded")}).catch(function(){console.log("Загрузка шрифтов занимает больше 1 секунды. Не будем их грузить."),sessionStorage.fontsLoaded=!1,console.log("Информация об ошибке в загрузке шрифтов добавлена в session storage"),r.classList.remove("fonts-loading"),r.classList.add("fonts-failed")}))}();o.default=a},{fontfaceobserver:1}],4:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=[];return $(e).each(function(){void 0!==$(this).attr("id")&&t.push("#"+$(this).attr("id"))}),t}function a(){if(1==jQuery("body").hasClass("aboutCleaning")){return"cleaning"}if(1==jQuery("body").hasClass("pestControl")){return"pestControl"}if(1==jQuery("body").hasClass("aboutVacancies")){return"vacancies"}}function r(){var e={actualSelectors:"",displayedCategoryOfServices:""};return e.actualSelectors=v,e.displayedCategoryOfServices=v.categoryOfServices[0],e}function s(e,t){jQuery(e).attr("disabled","disabled"),jQuery(t).removeAttr("disabled")}function c(e){for(var t=0;t<w.buttonsToShowCategoryOfServices.length;t++)jQuery(w.buttonsToShowCategoryOfServices[t]).removeAttr("disabled");jQuery(e).attr("disabled","disabled")}function l(e,t,o,n){jQuery(e).click(function(){console.log("click toggle section"),jQuery(".cleaning-personal").toggle(0),jQuery(".cleaning-corporate").toggle(0),j!==o&&(jQuery(j).hide(),j=o,jQuery(j).show()),s(this,t),c(n),"#showOnce"==n?(jQuery(".calculatePrice").text("Рассчитать стоимость"),jQuery(".calculatePrice").attr("id","openOnetime")):(jQuery(".calculatePrice").text("Оставить заявку"),jQuery(".calculatePrice").attr("id","openGeneralOrder"))})}function u(){for(var e=0;e<w.buttonsToShowCategoryOfServices.length;e++)!function(e){jQuery(w.buttonsToShowCategoryOfServices[e]).click(function(){console.log("click "+w.buttonsToShowCategoryOfServices[e]),"#showComplex"==w.buttonsToShowCategoryOfServices[e]?(jQuery(".calculatePrice").text("Оформить подписку"),jQuery(".calculatePrice").attr("id","openSubscription")):"#showOnce"==w.buttonsToShowCategoryOfServices[e]?(jQuery(".calculatePrice").text("Рассчитать стоимость"),jQuery(".calculatePrice").attr("id","openOnetime")):"#showAfterConstructionWorks"==w.buttonsToShowCategoryOfServices[e]?(jQuery(".calculatePrice").text("Оставить заявку"),jQuery(".calculatePrice").attr("id","openAfterConstr")):(jQuery(".calculatePrice").text("Оставить заявку"),jQuery(".calculatePrice").attr("id","openGeneralOrder")),jQuery(j).animate({opacity:"toggle"},200,"swing",function(){jQuery(this).hide(),j=w.categoryOfServices[e],console.log("displayed element is"+j),jQuery(j).show()}),c(this)})}(e)}function d(){jQuery(".showService").click(function(e){e.preventDefault(),console.log("click showService"),0==jQuery(this).hasClass("actual")?jQuery(this).addClass("actual"):jQuery(this).removeClass("actual");var t=jQuery(this).siblings("p").first(),o=jQuery(this).parent(),n=o.parent();if(t.hasClass("showing-service")!==!0){t.slideToggle(200);var i=n.find(".showing-service");i.slideToggle(200),i.removeClass("showing-service"),i.siblings("button").first().removeClass("actual"),t.addClass("showing-service")}else t.slideToggle(200,function(){jQuery(this).removeClass("showing-service")})})}function f(){var e=jQuery("#facadeFloors").val(),t=jQuery("#facadeSpace").val(),o=parseInt(e,10)*parseInt(t,10);isNaN(o)!==!0?jQuery("#facadePrice").html("Итого:&nbsp<span class='light24'>"+o+"</span>&nbsp руб."):jQuery("#facadePrice").html("<p>Заполните поля выше, чтобы мы могли посчитать сумму</p>")}function h(e){console.log("click open"),e.toggleClass("modal-closed"),e.toggleClass("modal-show-animation"),e.toggleClass("modal-hide-animation"),D.toggleClass("modal-closed"),D.toggleClass("modal-show-animation"),D.toggleClass("modal-hide-animation")}function y(e){console.log("click close"),e.toggleClass("modal-show-animation"),e.toggleClass("modal-hide-animation"),D.toggleClass("modal-show-animation"),D.toggleClass("modal-hide-animation"),setTimeout(function(){e.toggleClass("modal-closed"),D.toggleClass("modal-closed")},I)}var p=e("./controlFontsLoading.js"),g=(n(p),e("lodash.debounce")),m=n(g);jQuery(document).ready(function(){if(1==jQuery("body").hasClass("homepage")&&jQuery(window).width()>600||1==jQuery("body").hasClass("garbageChute")&&jQuery(window).width()>600){var e=function(){if(jQuery(window).width()>600){var e=function(){return jQuery(window).height()},t=function(){return jQuery(document).scrollTop()},o=[];jQuery(".fixed-pagination").children().each(function(){o.push(jQuery(this).attr("href"))}),t()/e()==0||t()/e()>.8&&t()/e()<.98?(console.log(t()/e()),jQuery(".fixed-pagination__link_active").removeClass("fixed-pagination__link_active"),jQuery('[href="'+o[0]+'"]').addClass("fixed-pagination__link_active")):t()/e()>0&&t()/e()<1||t()/e()>1.8&&t()/e()<1.98?(console.log(t()/e()),jQuery(".fixed-pagination__link_active").removeClass("fixed-pagination__link_active"),jQuery('[href="'+o[1]+'"]').addClass("fixed-pagination__link_active")):t()/e()>1&&t()/e()<2||t()/e()>2.8&&t()/e()<2.98?(console.log(t()/e()),jQuery(".fixed-pagination__link_active").removeClass("fixed-pagination__link_active"),jQuery('[href="'+o[2]+'"]').addClass("fixed-pagination__link_active")):(t()/e()>2&&t()/e()<2.2||t()/e()>2.99&&t()/e()<2.9999)&&(console.log(t()/e()),jQuery(".fixed-pagination__link_active").removeClass("fixed-pagination__link_active"),jQuery('[href="'+o[3]+'"]').addClass("fixed-pagination__link_active"))}};$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html, body").animate({scrollTop:t.offset().top},800,function(){e()}),!1}})}),$(function(){jQuery.scrollify({section:".homepage-screen",scrollSpeed:800,afterRender:function(){jQuery(document).on("ready scroll resize",(0,m.default)(e,80,{leading:!0,trailing:!1}))},afterResize:function(){jQuery(window).width()<600?(console.log(jQuery(window).width()),jQuery.scrollify.disable()):jQuery(window).width()>600&&(console.log(jQuery(window).width()),jQuery.scrollify.enable())}})})}});var v={categoryOfServices:[],buttonsToShowCategoryOfServices:[]};!function(){switch(a()){case"cleaning":v.buttonsToShowCategoryOfServices=i(".show-element"),v.categoryOfServices=i(".cleaning-description");break;case"pestControl":v.buttonsToShowCategoryOfServices=i(".show-element"),v.categoryOfServices=i(".cleaning-description");break;case"vacancies":v.buttonsToShowCategoryOfServices=i(".show-element"),v.categoryOfServices=i(".vacancie-description");break;default:console.log("There is no such case in detectActualSelectors")}}();var w=r().actualSelectors,j=r().displayedCategoryOfServices;"cleaning"==a()?(l("#showPersonal","#showCorporate","#once","#showOnce"),l("#showCorporate","#showPersonal","#office","#showOffice"),u(),d()):"pestControl"==a()?(l("#showPersonal","#showCorporate","#rodents","#showRodents"),l("#showCorporate","#showPersonal","#corporate1","#showCorporate1"),u(),d()):"vacancies"==a()&&(l("#showCleaningVacancies","#showPestControlVacancies","#vacancie1","#showVacancie1"),l("#showPestControlVacancies","#showCleaningVacancies","#vacancie7","#showVacancie7"),u(),d()),jQuery("#facadeFloors").on("change keyup past click",function(){f()}),jQuery("#facadeSpace").on("change keyup past click",function(){f()}),f();var Q=jQuery("#openOrderCleaning"),b=jQuery("#openOrderCleaning_insideNav"),C=jQuery("#closeOrderCleaning"),x=(jQuery("#openGeneralOrder"),jQuery("#openGiveFeedback")),S=jQuery("#closeGiveFeedback"),k=(jQuery("#openSubscription"),jQuery("#closeSubscription")),O=(jQuery("#openOnetime"),jQuery("#closeOnetime")),_=(jQuery("#openAfterConstr"),jQuery("#closeAfterConstr")),T=jQuery(".openPestControl"),P=jQuery("#closePestControl"),L=jQuery(".modal"),E=jQuery("#orderCleaning"),M=jQuery("#giveFeedback"),A=jQuery("#subscription"),F=jQuery("#onetime"),N=jQuery("#afterConstr"),W=jQuery("#pestControl"),D=jQuery("#modal-overlay"),I=200;D.click(function(e){console.log("click close"),L.removeClass("modal-show-animation"),L.addClass("modal-hide-animation"),D.removeClass("modal-show-animation"),D.addClass("modal-hide-animation"),setTimeout(function(){L.addClass("modal-closed"),D.addClass("modal-closed")},I)}),Q.click(function(e){h(E)}),b.click(function(e){h(E)}),C.click(function(e){y(E)}),x.click(function(e){h(M)}),S.click(function(e){y(M)}),jQuery(".calculatePrice").click(function(){"openOnetime"==jQuery(this).attr("id")?h(F):"openAfterConstr"==jQuery(this).attr("id")?h(N):"openSubscription"==jQuery(this).attr("id")?h(A):"openGeneralOrder"==jQuery(this).attr("id")&&h(E)}),_.click(function(e){y(N)}),O.click(function(e){y(F)}),k.click(function(e){y(A)}),T.click(function(e){h(W)}),P.click(function(e){y(W)}),jQuery(document).ready(function(){jQuery(".hamburger").click(function(){"showMobileMenu"==jQuery(this).attr("id")?(console.log("click show"),jQuery(this).attr("id","hideMobileMenu"),jQuery("header").addClass("mobile-nav_visible"),jQuery("header> nav").animate({height:"78%",opacity:1},150,function(){jQuery("#hamburger-line-3").toggle(),jQuery("#hamburger-line-1").toggle()})):"hideMobileMenu"==jQuery(this).attr("id")&&(jQuery(this).attr("id","showMobileMenu"),console.log("click hide"),jQuery("header> nav").animate({height:"0%",opacity:0},200,function(){jQuery("header").removeClass("mobile-nav_visible"),jQuery("#hamburger-line-3").toggle(),jQuery("#hamburger-line-1").toggle()}))}),jQuery(window).resize(function(){jQuery(this).width()<601&&jQuery(this).width()>509&&0==jQuery("nav").css("opacity")&&(console.log(0==jQuery("header> nav").css("opacity")),jQuery("header> nav").css("opacity","1"))})})},{"./controlFontsLoading.js":3,"lodash.debounce":2}]},{},[4]);
//# sourceMappingURL=bundle.js.map
