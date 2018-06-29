var fdSlider=function(){function i(e){function t(e){(e=!!e)!=Ce&&(Ce=e,I(S()))}function n(e){if(!U||e){try{P(B,-1),Re(B,"focus",s),Re(B,"blur",u),Fe?Re(B,"keypress",d):(Re(B,"keydown",d),Re(B,"keypress",l)),Re(R,"mouseover",f),Re(R,"mouseout",m),Re(R,"mousedown",h),Re(R,"touchstart",h),Ve&&(window.addEventListener&&!window.devicePixelRatio?window.removeEventListener("DOMMouseScroll",c,!1):(Re(document,"mousewheel",c),Re(window,"mousewheel",c)))}catch(t){}ze(R,"fd-slider-focused"),ze(R,"fd-slider-active"),Xe(R,"fd-slider-disabled"),R.setAttribute("aria-disabled",!0),J.disabled=U=!0,clearTimeout(he),e||r("disable")}}function a(e){(U||e)&&(P(B,0),Pe(B,"focus",s),Pe(B,"blur",u),Fe?Pe(B,"keypress",d):(Pe(B,"keydown",d),Pe(B,"keypress",l)),Pe(R,"touchstart",h),Pe(R,"mousedown",h),Pe(R,"mouseover",f),Pe(R,"mouseout",m),ze(R,"fd-slider-disabled"),R.setAttribute("aria-disabled",!1),J.disabled=U=Le=!1,e||r("enable"))}function i(){clearTimeout(he),W=z=B=R=he=null,r("destroy"),se=null}function o(){g();try{var e=R.offsetWidth,t=R.offsetHeight,n=B.offsetWidth,a=B.offsetHeight;z.offsetHeight,z.offsetWidth;Ae=(re?t-a:e-n)/ne,Ne=Math.max(ae?C(A(_)):Math.abs((_-K)/Z)*Ae,0),Ee=Math.min(ae?C(A(q)):Math.abs((q-K)/Z)*Ae,Math.floor(re?t-a:e-n)),be=e,ve=t,I(fe?S():"select"==Y?J.selectedIndex:parseFloat(J.value))}catch(i){}r("redraw")}function r(e){if(ce){if(e.match(/^(blur|focus|change)$/i))if("undefined"!=typeof document.createEventObject)try{var t=document.createEventObject();J.fireEvent("on"+e.toLowerCase(),t)}catch(o){}else if("undefined"!=typeof document.createEvent){(t=document.createEvent("HTMLEvents")).initEvent(e,!0,!0),J.dispatchEvent(t)}}else if(se.hasOwnProperty(e))for(var n,a={disabled:U,elem:J,value:"select"==Y?J.options[J.selectedIndex].value:J.value},i=0;n=se[e][i];i++)n.call(J,a)}function s(){return Xe(R,"fd-slider-focused"),je.onfocus&&(Ce=!0,I(S())),Ve&&(Pe(window,"DOMMouseScroll",c),Pe(document,"mousewheel",c),Fe||Pe(window,"mousewheel",c)),r("focus"),!0}function u(){ze(R,"fd-slider-focused"),Ve&&(Re(document,"mousewheel",c),Re(window,"DOMMouseScroll",c),Fe||Re(window,"mousewheel",c)),pe=!0,r("blur")}function c(e){if(pe){var t,n=0;return(e=e||window.event).wheelDelta?(n=e.wheelDelta/120,Fe&&window.opera.version()<9.2&&(n=-n)):e.detail&&(n=-e.detail/3),re&&(n=-n),n&&(t=S(),Ce=!0,I(E(t+=n<0?-Z:Z))),We(e)}}function l(e){return!(33<=(e=e||window.event).keyCode&&e.keyCode<=40||!pe||45==e.keyCode||46==e.keyCode)||We(e)}function d(e){if(!pe)return!0;var t,n=null!=(e=e||window.event).keyCode?e.keyCode:e.charCode;if(n<33||40<n&&45!=n&&46!=n)return!0;t=S(),37==n||40==n||46==n||34==n?t-=e.ctrlKey||34==n?+ee:+Z:39==n||38==n||45==n||33==n?t+=e.ctrlKey||33==n?+ee:+Z:35==n?t=q:36==n&&(t=_),Ce=!0,I(E(t)),r("update"),Be(e)}function f(){Xe(R,"fd-slider-hover")}function m(){ze(R,"fd-slider-hover")}function h(e){var t;if(e=e||window.event,Be(e),e.target?t=e.target:e.srcElement&&(t=e.srcElement),t&&3==t.nodeType&&(t=t.parentNode),e.touches){if(e.targetTouches&&1!=e.targetTouches.length)return!1;e=e.touches[0],Le=!0}if(clearTimeout(he),he=null,pe=!1,Ce=!0,-1!=t.className.search("fd-slider-handle"))Te=re?e.clientY:e.clientX,Ie=parseInt(re?B.offsetTop:B.offsetLeft)||0,b(e),Le?(Pe(document,"touchmove",b),Pe(document,"touchend",v),Re(R,"mousedown",h)):(Pe(document,"mousemove",b),Pe(document,"mouseup",v)),Xe(R,"fd-slider-active"),Xe(document.body,"fd-slider-drag-"+(re?"vertical":"horizontal")),r("dragstart");else{g();var n=0,a=0,i=0;document.documentElement&&document.documentElement.scrollTop?(i=document.documentElement.scrollTop,a=document.documentElement.scrollLeft):document.body&&(i=document.body.scrollTop,a=document.body.scrollLeft),e.pageX?n=re?e.pageY:e.pageX:e.clientX&&(n=re?e.clientY+i:e.clientX+a),n=k(n-=re?Se+Math.round(B.offsetHeight/2):ye+Math.round(B.offsetWidth/2)),"tween"==oe?(Xe(R,"fd-slider-active"),x(n)):"timed"==oe?(Xe(R,"fd-slider-active"),Pe(document,Le?"touchend":"mouseup",p),ke=n,M()):N(n)}return We(e)}function p(e){return e=e||window.event,Be(e),Re(document,Le?"touchend":"mouseup",p),ze(R,"fd-slider-active"),clearTimeout(he),he=null,pe=!0,We(e)}function v(e){return e=e||window.event,Be(e),Le?(Re(document,"touchmove",b),Re(document,"touchend",v)):(Re(document,"mousemove",b),Re(document,"mouseup",v)),pe=!0,ze(document.body,"fd-slider-drag-"+(re?"vertical":"horizontal")),ze(R,"fd-slider-active"),r("dragend"),We(e)}function b(e){if(e=e||window.event,Be(e),e.touches){if(e.targetTouches&&1!=e.targetTouches.length)return!1;e=e.touches[0]}return N(k(Ie+(re?e.clientY-Te:e.clientX-Te))),!1}function w(e){var t=S();Ce=!0,I(E(t+=e*Z))}function g(){var e=0,t=0,n=R;try{for(;n.offsetParent;)e+=n.offsetLeft,t+=n.offsetTop,n=n.offsetParent}catch(a){}ye=e,Se=t}function M(){var e=parseInt(re?B.offsetTop:B.offsetLeft,10);N(k(e=Math.round(ke<e?Math.max(ke,Math.floor(e-Ae)):Math.min(ke,Math.ceil(e+Ae))))),e!=ke?he=setTimeout(M,20<ne?50:100):(pe=!0,ze(R,"fd-slider-active"),r("finalise"))}function x(e){pe=!1,we=parseInt(e,10),ge=parseInt(re?B.offsetTop:B.offsetLeft,10),Me=we-ge,20,xe=0,he||(he=setTimeout(Oe,20))}function y(e){return isNaN(e)||""===e||void 0===e?(Ce=!1,le):e<Math.min(_,q)?(Ce=!1,Math.min(_,q)):e>Math.max(_,q)?(Ce=!1,Math.max(_,q)):(Ce=!0,e)}function S(){return E("input"==Y?parseFloat(J.value):J.selectedIndex)}function E(e){return isNaN(e)||""===e||void 0===e?le:Math.min(Math.max(e,Math.min(_,q)),Math.max(_,q))}function N(e){var t=E(ae?T(L(e)):re?G-Math.round(e/Ae)*Z:K+Math.round(e/Ae)*Z);B.style[re?"top":"left"]=(e||0)+"px",H(),O("select"==Y||1==Z?Math.round(t):t)}function I(e){var t,n=!1;void 0!==e&&!isNaN(e)&&""!==e||"input"!=Y||fe?t=y(e):(t=le,n=!0,Ce=!1),B.style[re?"top":"left"]=(ae?C(A(t)):re?Math.round((G-t)/Z*Ae):Math.round((t-K)/Z*Ae))+"px",H(),O(n?"":t)}function k(e){if(ae)return Math.max(Math.min(Ee,e),Ne);var t=e%Ae;return t&&Ae/2<=t?e+=Ae-t:e-=t,e<Math.min(Math.abs(Ne),Math.abs(Ee))?e=Math.min(Math.abs(Ne),Math.abs(Ee)):e>Math.max(Math.abs(Ne),Math.abs(Ee))&&(e=Math.max(Math.abs(Ne),Math.abs(Ee))),Math.min(Math.max(e,0),Ee)}function T(e){var t,n=0,a=K;for(var i in ae)ae.hasOwnProperty(i)&&(n<=e&&e<=+i&&(t=a+(e-n)*(+ae[i]-a)/(+i-n)),n=+i,a=+ae[i]);return t}function A(e){var t=0,n=K,a=0;for(var i in ae)ae.hasOwnProperty(i)&&(n<=e&&e<=+ae[i]&&(a=t+(e-n)*(+i-t)/(+ae[i]-n)),t=+i,n=+ae[i]);return a}function C(e){return(R[re?"offsetHeight":"offsetWidth"]-B[re?"offsetHeight":"offsetWidth"])/100*e}function L(e){return e/((R[re?"offsetHeight":"offsetWidth"]-R[B?"offsetHeight":"offsetWidth"])/100)}function O(e){if(r("update"),Ce?ze(R,"fd-slider-no-value"):Xe(R,"fd-slider-no-value"),"select"==Y)try{if(e=parseInt(e,10),J.selectedIndex===e)return void j();J.options[e].selected=!0}catch(t){}else{if(""!=e&&(e=(K+Math.round((e-K)/Z)*Z).toFixed(te)),J.value===e)return void j();J.value=e}j(),r("change")}function V(e,t){q<_?(e=Math.min(K,Math.max(e,t)),t=Math.max(G,Math.min(e,t)),_=Math.max(e,t),q=Math.min(e,t)):(e=Math.max(K,Math.min(e,t)),t=Math.min(G,Math.max(e,t)),_=Math.min(e,t),q=Math.max(e,t)),le<Math.min(_,q)?le=Math.min(_,q):le>Math.max(_,q)&&(le=Math.max(_,q)),B.setAttribute("aria-valuemin",_),B.setAttribute("aria-valuemax",q),y("input"==Y?parseFloat(J.value):J.selectedIndex),o()}function H(){De||(re?X.style.height=z.offsetHeight-B.offsetTop+"px":X.style.width=B.offsetLeft+"px")}function $(){for(var e,t=!1,n=document.getElementsByTagName("label"),a=0;e=n[a];a++)if(e.htmlFor&&e.htmlFor==J.id||e.getAttribute("for")==J.id){t=e;break}return t&&!t.id&&(t.id=J.id+"_label"),t}function j(){B.setAttribute("aria-valuenow","select"==Y?J.options[J.selectedIndex].value:J.value),B.setAttribute("aria-valuetext","select"==Y?J.options[J.selectedIndex].text?J.options[J.selectedIndex].text:J.options[J.selectedIndex].value:J.value)}function D(){Ce=!0,I("input"==Y?parseFloat(J.value):J.selectedIndex),j()}function F(){"input"==Y?J.value=J.defaultValue:J.selectedIndex=de,y("select"==Y?J.options[J.selectedIndex].value:J.value),o(),j()}function t(e){Ce=!!e}function P(e,t){e.setAttribute("tabIndex",t),e.tabIndex=t}var R,W,B,X,z,J=e.inp,U=!1,Y=J.tagName.toLowerCase(),K=+e.min,G=+e.max,_=+e.min,q=+e.max,Q=Math.abs(G-K),Z="select"==Y?1:+e.step,ee=e.maxStep?+e.maxStep:2*Z,te=e.precision||0,ne=Math.ceil(Q/Z),ae=e.scale||!1,ie=!!e.hideInput,oe=e.animation||"",re=!!e.vertical,se=e.callbacks||{},ue=e.classNames||"",ce=!!e.html5Shim,le=G<K?K:K+(G-K)/2,de="select"==Y?J.selectedIndex:J.defaultValue||le,fe=ce||!!e.forceValue,me=!!(ce&&re&&"inpHeight"in e)&&e.inpHeight,he=null,pe=!0,ve=("select"==Y?J.selectedIndex:J.value,0),be=0,we=0,ge=0,Me=0,xe=0,ye=0,Se=0,Ee=0,Ne=0,Ie=0,ke=0,Te=0,Ae=0,Ce=!1,Le=!1;"input"==Y&&fe&&!J.defaultValue&&(J.defaultValue=S()),G<K&&(Z=-Math.abs(Z),ee=-Math.abs(ee)),ae&&(ae[100]=G);var Oe=function(){var e=Me,t=20,n=++xe,a=ge,i=Math.ceil(n==t?a+e:e*(1-Math.pow(2,-10*n/t))+a);N(n==t?we:i),n!=t?(r("move"),he=setTimeout(Oe,20)):(clearTimeout(he),he=null,pe=!0,ze(R,"fd-slider-focused"),ze(R,"fd-slider-active"),r("finalise"))};return function(){ce||ie?Xe(J,"fd-form-element-hidden"):Pe(J,"change",D),ce&&(J.stepUp=function(e){w(e||1)},J.stepDown=function(e){w(e||-1)}),(R=document.createElement("span")).className="fd-slider"+(re?"-vertical ":" ")+(ce?"":" fd-slider-no-value ")+ue,R.id="fd-slider-"+J.id,re&&me&&(R.style.height=me+"px"),(W=document.createElement("span")).className="fd-slider-inner",(z=document.createElement("span")).className="fd-slider-bar",De||((X=document.createElement("span")).className="fd-slider-range"),He?B=document.createElement("span"):((B=document.createElement("a")).setAttribute("href","#"),Pe(B,"click",We)),P(B,0),B.className="fd-slider-handle",B.appendChild(document.createTextNode(String.fromCharCode(160))),R.appendChild(W),De||R.appendChild(X),R.appendChild(z),R.appendChild(B),J.parentNode.insertBefore(R,J),R.setAttribute("role","application"),B.setAttribute("role","slider"),B.setAttribute("aria-valuemin","select"==Y?J.options[0].value:K),B.setAttribute("aria-valuemax","select"==Y?J.options[J.options.length-1].value:G);var e=$();e&&(B.setAttribute("aria-labelledby",e.id),B.id="fd-slider-handle-"+J.id,e.setAttribute("for",B.id)),document.getElementById($e)&&B.setAttribute("aria-describedby",$e),1==J.getAttribute("disabled")?n(!0):a(!0),je.onvalue&&(Ce=!0,y("input"==Y?parseFloat(J.value):J.selectedIndex)),J.form&&Pe(J.form,"reset",F),j(),r("create"),o()}(),{onResize:function(){R.offsetHeight==ve&&R.offsetWidth==be||o()},destroy:function(){i()},reset:function(){I("input"==Y?parseFloat(J.value):J.selectedIndex)},stepUp:function(e){w(Math.abs(e)||1)},stepDown:function(e){w(-Math.abs(e)||-1)},increment:function(e){w(e)},disable:function(){n()},enable:function(){a()},setRange:function(e,t){V(e,t)},getValueSet:function(){return!!Ce},setValueSet:function(e){t(e)},checkValue:function(){je.onvalue&&(Ce=!0,y("input"==Y?parseFloat(J.value):J.selectedIndex)),j(),o()}}}var e,t,n,o={},r=0,Ve=!0,He=!0,$e="fd-slider-describedby",je={onfocus:!0,onvalue:!0},De=!1,s="jump",Fe="[object Opera]"===Object.prototype.toString.call(window.opera),u=/^([-]{0,1}[0-9]+(\.[0-9]+){0,1})$/,c=/^([0-9]+(\.[0-9]+){0,1})$/,a=function(e){if("string"!=typeof e||""==e)return{};try{if("object"==typeof JSON&&JSON.parse)return window.JSON.parse(e);if(/mousewheelenabled|fullaria|describedby|norangebar|html5animation|varsetrules/.test(e.toLowerCase()))return Function(["var document,top,self,window,parent,Number,Date,Object,Function,","Array,String,Math,RegExp,Image,ActiveXObject;","return (",e.replace(/<\!--.+-->/gim,"").replace(/\bfunction\b/g,"function-"),");"].join(""))()}catch(t){}return{err:"Could not parse the JSON object"}},l=function(e){if("object"==typeof e)for(key in e)switch(value=e[key],key.toLowerCase()){case"mousewheelenabled":Ve=!!value;break;case"fullaria":He=!!value;break;case"describedby":$e=String(value);break;case"norangebar":De=!!value;break;case"html5animation":s=-1!=String(value).search(/^(jump|tween|timed)$/i)?String(value).toLowerCase():"jump";break;case"varsetrules":"onfocus"in value&&(je.onfocus=!!value.onfocus),"onvalue"in value&&(je.onvalue=!!value.onvalue)}},Pe=function(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!0)},Re=function(e,t,n){try{e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n,!0)}catch(a){}},We=function(e){return(e=e||window.event).stopPropagation&&(e.stopPropagation(),e.preventDefault()),!1},Be=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1},Xe=function(e,t){new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)||(e.className+=(e.className?" ":"")+t)},ze=function(e,t){e.className=t?e.className.replace(new RegExp("(^|\\s)"+t+"(\\s|$)")," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""):""},d=function(){var e={};for(id in o)e[id]=o[id].getValueSet();return e},f=function(e,t){o[e].setValueSet(!!t)},m=function(e){return!!(e in o&&o.hasOwnProperty(e))},h=function(e){if(!e||!e.inp||!e.inp.tagName||-1==e.inp.tagName.search(/^input|select/i))return!1;if(e.html5Shim=!1,"select"==e.inp.tagName.toLowerCase()){if(e.inp.options.length<2)return!1;e.min=0,e.max=e.inp.options.length-1,e.step=1,e.precision=0,e.scale=!1,e.forceValue=!0}else{if(-1==String(e.inp.type).search(/^text$/i))return!1;e.min=e.min&&-1!=String(e.min).search(u)?+e.min:0,e.max=e.max&&-1!=String(e.max).search(u)?+e.max:100,e.step=e.step&&-1!=String(e.step).search(c)?e.step:1,e.precision=e.precision&&-1!=String(e.precision).search(/^[0-9]+$/)?e.precision:-1!=String(e.step).search(/\.([0-9]+)$/)?String(e.step).match(/\.([0-9]+)$/)[1].length:0,e.scale=e.scale||!1,e.forceValue="forceValue"in e&&!!e.forceValue}return e.maxStep=e.maxStep&&-1!=String(e.maxStep).search(c)?+e.maxStep:2*+e.step,e.classNames=e.classNames||"",e.callbacks=e.callbacks||!1,b(e.inp.id),o[e.inp.id]=new i(e),!0},p=function(e,t){return e.getAttribute(t)||""},v=function(){for(var e,t,n=document.getElementsByTagName("input"),a=0;t=n[a];a++)if("input"==t.tagName.toLowerCase()&&"text"==t.type.toLowerCase()&&(p(t,"min")&&-1!=p(t,"min").search(u)||p(t,"max")&&-1!=p(t,"max").search(u)||p(t,"step")&&-1!=p(t,"step").search(/^(any|([0-9]+(\.[0-9]+){0,1}))$/i))){if(t.id&&document.getElementById("fd-slider-"+t.id))continue;t.id&&!document.getElementById("fd-slider-"+t.id)&&b(t.id),t.id||(t.id="fd-slider-form-elem-"+r++),(e={inp:t,callbacks:[],animation:s,vertical:!!p(t,"data-fd-slider-vertical")||!!(t.offsetHeight>t.offsetWidth),classNames:p(t,"data-fd-slider-vertical"),html5Shim:!0}).vertical&&!p(t,"data-fd-slider-vertical")&&(e.inpHeight=t.offsetHeight),e.min=p(t,"min")||0,e.max=p(t,"max")||100,e.step=-1!=p(t,"step").search(/^any$/i)?e.max-e.min:-1!=p(t,"step").search(c)?t.getAttribute("step"):1,e.precision=-1!=String(e.step).search(/\.([0-9]+)$/)?String(e.step).match(/\.([0-9]+)$/)[1].length:0,e.maxStep=2*e.step,b(e.inp.id),o[e.inp.id]=new i(e)}return!0},b=function(e){return!!(e in o&&o.hasOwnProperty(e))&&(o[e].destroy(),delete o[e],!0)},w=function(){for(slider in o)o.hasOwnProperty(slider)&&o[slider].destroy();o=[]},g=function(){w(),o=null},M=function(){for(slider in o)o.hasOwnProperty(slider)&&o[slider].onResize()},x=function(){Re(window,"load",v),v()},y=function(){Re(window,"load",v)};return Pe(window,"load",v),Pe(window,"load",function(){setTimeout(function(){var e;for(e in o)o[e].checkValue()},0)}),Pe(window,"resize",M),Pe(window,"unload",g),e=document.getElementsByTagName("script"),t=String(e[e.length-1].innerHTML).replace(/[\n\r\s\t]+/g," ").replace(/^\s+/,"").replace(/\s+$/,""),"object"!=typeof(n=a(t))||"err"in n||l(n),{createSlider:function(e){return h(e)},onDomReady:function(){x()},destroyAll:function(){w()},destroySlider:function(e){return b(e)},redrawAll:function(){M()},addEvent:Pe,removeEvent:Re,stopEvent:We,increment:function(e,t){if(!m(e))return!1;o[e].increment(t)},stepUp:function(e,t){if(!m(e))return!1;o[e].stepUp(Math.abs(t)||1)},stepDown:function(e,t){if(!m(e))return!1;o[e].stepDown(-Math.abs(t)||-1)},setRange:function(e,t,n){if(!m(e))return!1;o[e].setRange(t,n)},updateSlider:function(e){if(!m(e))return!1;o[e].reset()},disable:function(e){if(!m(e))return!1;o[e].disable()},enable:function(e){if(!m(e))return!1;o[e].enable()},getValueSet:function(){return d()},setValueSet:function(e,t){if(!m(id))return!1;f(e,t)},setGlobalVariables:function(e){l(e)},removeOnload:function(){y()}}}();