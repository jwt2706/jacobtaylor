function d_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function h_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var em={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),p_=Symbol.for("react.portal"),m_=Symbol.for("react.fragment"),g_=Symbol.for("react.strict_mode"),v_=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),x_=Symbol.for("react.context"),y_=Symbol.for("react.forward_ref"),S_=Symbol.for("react.suspense"),M_=Symbol.for("react.memo"),E_=Symbol.for("react.lazy"),fd=Symbol.iterator;function T_(t){return t===null||typeof t!="object"?null:(t=fd&&t[fd]||t["@@iterator"],typeof t=="function"?t:null)}var tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nm=Object.assign,im={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=im,this.updater=n||tm}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rm(){}rm.prototype=Ao.prototype;function of(t,e,n){this.props=t,this.context=e,this.refs=im,this.updater=n||tm}var sf=of.prototype=new rm;sf.constructor=of;nm(sf,Ao.prototype);sf.isPureReactComponent=!0;var dd=Array.isArray,om=Object.prototype.hasOwnProperty,af={current:null},sm={key:!0,ref:!0,__self:!0,__source:!0};function am(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)om.call(e,i)&&!sm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Cs,type:t,key:o,ref:s,props:r,_owner:af.current}}function w_(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function A_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hd=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?A_(""+t.key):e.toString(36)}function ba(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Cs:case p_:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+ql(s,0):i,dd(r)?(n="",t!=null&&(n=t.replace(hd,"$&/")+"/"),ba(r,e,n,"",function(u){return u})):r!=null&&(lf(r)&&(r=w_(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(hd,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",dd(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+ql(o,a);s+=ba(o,e,n,l,r)}else if(l=T_(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+ql(o,a++),s+=ba(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Vs(t,e,n){if(t==null)return t;var i=[],r=0;return ba(t,i,"","",function(o){return e.call(n,o,r++)}),i}function C_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},La={transition:null},R_={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:La,ReactCurrentOwner:af};ke.Children={map:Vs,forEach:function(t,e,n){Vs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vs(t,function(){e++}),e},toArray:function(t){return Vs(t,function(e){return e})||[]},only:function(t){if(!lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Ao;ke.Fragment=m_;ke.Profiler=v_;ke.PureComponent=of;ke.StrictMode=g_;ke.Suspense=S_;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=nm({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=af.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)om.call(e,l)&&!sm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Cs,type:t.type,key:r,ref:o,props:i,_owner:s}};ke.createContext=function(t){return t={$$typeof:x_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:__,_context:t},t.Consumer=t};ke.createElement=am;ke.createFactory=function(t){var e=am.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:y_,render:t}};ke.isValidElement=lf;ke.lazy=function(t){return{$$typeof:E_,_payload:{_status:-1,_result:t},_init:C_}};ke.memo=function(t,e){return{$$typeof:M_,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=La.transition;La.transition={};try{t()}finally{La.transition=e}};ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ke.useCallback=function(t,e){return Gt.current.useCallback(t,e)};ke.useContext=function(t){return Gt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Gt.current.useEffect(t,e)};ke.useId=function(){return Gt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Gt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};ke.useRef=function(t){return Gt.current.useRef(t)};ke.useState=function(t){return Gt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Gt.current.useTransition()};ke.version="18.2.0";em.exports=ke;var $=em.exports;const _n=h_($),P_=d_({__proto__:null,default:_n},[$]);var tc={},lm={exports:{}},un={},um={exports:{}},cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,H){var G=P.length;P.push(H);e:for(;0<G;){var ne=G-1>>>1,de=P[ne];if(0<r(de,H))P[ne]=H,P[G]=de,G=ne;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var H=P[0],G=P.pop();if(G!==H){P[0]=G;e:for(var ne=0,de=P.length,ze=de>>>1;ne<ze;){var V=2*(ne+1)-1,Q=P[V],ce=V+1,oe=P[ce];if(0>r(Q,G))ce<de&&0>r(oe,Q)?(P[ne]=oe,P[ce]=G,ne=ce):(P[ne]=Q,P[V]=G,ne=V);else if(ce<de&&0>r(oe,G))P[ne]=oe,P[ce]=G,ne=ce;else break e}}return H}function r(P,H){var G=P.sortIndex-H.sortIndex;return G!==0?G:P.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,d=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=P)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function M(P){if(x=!1,g(P),!_)if(n(l)!==null)_=!0,ee(b);else{var H=n(u);H!==null&&J(M,H.startTime-P)}}function b(P,H){_=!1,x&&(x=!1,c(L),L=-1),m=!0;var G=h;try{for(g(H),d=n(l);d!==null&&(!(d.expirationTime>H)||P&&!I());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var de=ne(d.expirationTime<=H);H=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(l)&&i(l),g(H)}else i(l);d=n(l)}if(d!==null)var ze=!0;else{var V=n(u);V!==null&&J(M,V.startTime-H),ze=!1}return ze}finally{d=null,h=G,m=!1}}var C=!1,w=null,L=-1,T=5,S=-1;function I(){return!(t.unstable_now()-S<T)}function W(){if(w!==null){var P=t.unstable_now();S=P;var H=!0;try{H=w(!0,P)}finally{H?D():(C=!1,w=null)}}else C=!1}var D;if(typeof v=="function")D=function(){v(W)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,j=Y.port2;Y.port1.onmessage=W,D=function(){j.postMessage(null)}}else D=function(){p(W,0)};function ee(P){w=P,C||(C=!0,D())}function J(P,H){L=p(function(){P(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,ee(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var G=h;h=H;try{return P()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=h;h=P;try{return H()}finally{h=G}},t.unstable_scheduleCallback=function(P,H,G){var ne=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ne+G:ne):G=ne,P){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=G+de,P={id:f++,callback:H,priorityLevel:P,startTime:G,expirationTime:de,sortIndex:-1},G>ne?(P.sortIndex=G,e(u,P),n(l)===null&&P===n(u)&&(x?(c(L),L=-1):x=!0,J(M,G-ne))):(P.sortIndex=de,e(l,P),_||m||(_=!0,ee(b))),P},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(P){var H=h;return function(){var G=h;h=H;try{return P.apply(this,arguments)}finally{h=G}}}})(cm);um.exports=cm;var b_=um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm=$,ln=b_;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dm=new Set,as={};function Tr(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(as[t]=e,t=0;t<e.length;t++)dm.add(e[t])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=Object.prototype.hasOwnProperty,L_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pd={},md={};function D_(t){return nc.call(md,t)?!0:nc.call(pd,t)?!1:L_.test(t)?md[t]=!0:(pd[t]=!0,!1)}function N_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function U_(t,e,n,i){if(e===null||typeof e>"u"||N_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,cf);bt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,cf);bt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,cf);bt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ff(t,e,n,i){var r=bt.hasOwnProperty(e)?bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(U_(e,n,r,i)&&(n=null),i||r===null?D_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fi=fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),ic=Symbol.for("react.profiler"),hm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),rc=Symbol.for("react.suspense"),oc=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),Si=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),gd=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=gd&&t[gd]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Kl;function Yo(t){if(Kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kl=e&&e[1]||""}return`
`+Kl+t}var Zl=!1;function Ql(t,e){if(!t||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yo(t):""}function I_(t){switch(t.tag){case 5:return Yo(t.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return t=Ql(t.type,!1),t;case 11:return t=Ql(t.type.render,!1),t;case 1:return t=Ql(t.type,!0),t;default:return""}}function sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case jr:return"Portal";case ic:return"Profiler";case df:return"StrictMode";case rc:return"Suspense";case oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pm:return(t.displayName||"Context")+".Consumer";case hm:return(t._context.displayName||"Context")+".Provider";case hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:sc(t.type)||"Memo";case Si:e=t._payload,t=t._init;try{return sc(t(e))}catch{}}return null}function F_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(e);case 8:return e===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O_(t){var e=gm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ws(t){t._valueTracker||(t._valueTracker=O_(t))}function vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ac(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _m(t,e){e=e.checked,e!=null&&ff(t,"checked",e,!1)}function lc(t,e){_m(t,e);var n=Hi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&uc(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _d(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uc(t,e,n){(e!=="number"||Ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function oo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if($o(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function xm(t,e){var n=Hi(e.value),i=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ym(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ym(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xs,Sm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xs=Xs||document.createElement("div"),Xs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k_=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(t){k_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qo[e]=Qo[t]})});function Mm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qo.hasOwnProperty(t)&&Qo[t]?(""+e).trim():e+"px"}function Em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var z_=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dc(t,e){if(e){if(z_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function hc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pc=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mc=null,so=null,ao=null;function Sd(t){if(t=bs(t)){if(typeof mc!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=Cl(e),mc(t.stateNode,t.type,e))}}function Tm(t){so?ao?ao.push(t):ao=[t]:so=t}function wm(){if(so){var t=so,e=ao;if(ao=so=null,Sd(t),e)for(t=0;t<e.length;t++)Sd(e[t])}}function Am(t,e){return t(e)}function Cm(){}var Jl=!1;function Rm(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return Am(t,e,n)}finally{Jl=!1,(so!==null||ao!==null)&&(Cm(),wm())}}function us(t,e){var n=t.stateNode;if(n===null)return null;var i=Cl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var gc=!1;if(si)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{gc=!1}function B_(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Jo=!1,Wa=null,Xa=!1,vc=null,H_={onError:function(t){Jo=!0,Wa=t}};function V_(t,e,n,i,r,o,s,a,l){Jo=!1,Wa=null,B_.apply(H_,arguments)}function G_(t,e,n,i,r,o,s,a,l){if(V_.apply(this,arguments),Jo){if(Jo){var u=Wa;Jo=!1,Wa=null}else throw Error(Z(198));Xa||(Xa=!0,vc=u)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Md(t){if(wr(t)!==t)throw Error(Z(188))}function W_(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Md(r),t;if(o===i)return Md(r),e;o=o.sibling}throw Error(Z(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function bm(t){return t=W_(t),t!==null?Lm(t):null}function Lm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lm(t);if(e!==null)return e;t=t.sibling}return null}var Dm=ln.unstable_scheduleCallback,Ed=ln.unstable_cancelCallback,X_=ln.unstable_shouldYield,j_=ln.unstable_requestPaint,pt=ln.unstable_now,Y_=ln.unstable_getCurrentPriorityLevel,gf=ln.unstable_ImmediatePriority,Nm=ln.unstable_UserBlockingPriority,ja=ln.unstable_NormalPriority,$_=ln.unstable_LowPriority,Um=ln.unstable_IdlePriority,El=null,Gn=null;function q_(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:Q_,K_=Math.log,Z_=Math.LN2;function Q_(t){return t>>>=0,t===0?32:31-(K_(t)/Z_|0)|0}var js=64,Ys=4194304;function qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ya(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=qo(a):(o&=s,o!==0&&(i=qo(o)))}else s=n&~r,s!==0?i=qo(s):o!==0&&(i=qo(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-bn(e),r=1<<n,i|=t[n],e&=~r;return i}function J_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-bn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=J_(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function _c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Im(){var t=js;return js<<=1,!(js&4194240)&&(js=64),t}function eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function t0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-bn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function Fm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Om,_f,km,zm,Bm,xc=!1,$s=[],bi=null,Li=null,Di=null,cs=new Map,fs=new Map,Ei=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(t,e){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(e.pointerId)}}function Io(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=bs(e),e!==null&&_f(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function i0(t,e,n,i,r){switch(e){case"focusin":return bi=Io(bi,t,e,n,i,r),!0;case"dragenter":return Li=Io(Li,t,e,n,i,r),!0;case"mouseover":return Di=Io(Di,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return cs.set(o,Io(cs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,fs.set(o,Io(fs.get(o)||null,t,e,n,i,r)),!0}return!1}function Hm(t){var e=ur(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Pm(n),e!==null){t.blockedOn=e,Bm(t.priority,function(){km(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Da(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);pc=i,n.target.dispatchEvent(i),pc=null}else return e=bs(n),e!==null&&_f(e),t.blockedOn=n,!1;e.shift()}return!0}function wd(t,e,n){Da(t)&&n.delete(e)}function r0(){xc=!1,bi!==null&&Da(bi)&&(bi=null),Li!==null&&Da(Li)&&(Li=null),Di!==null&&Da(Di)&&(Di=null),cs.forEach(wd),fs.forEach(wd)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,xc||(xc=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,r0)))}function ds(t){function e(r){return Fo(r,t)}if(0<$s.length){Fo($s[0],t);for(var n=1;n<$s.length;n++){var i=$s[n];i.blockedOn===t&&(i.blockedOn=null)}}for(bi!==null&&Fo(bi,t),Li!==null&&Fo(Li,t),Di!==null&&Fo(Di,t),cs.forEach(e),fs.forEach(e),n=0;n<Ei.length;n++)i=Ei[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ei.length&&(n=Ei[0],n.blockedOn===null);)Hm(n),n.blockedOn===null&&Ei.shift()}var lo=fi.ReactCurrentBatchConfig,$a=!0;function o0(t,e,n,i){var r=$e,o=lo.transition;lo.transition=null;try{$e=1,xf(t,e,n,i)}finally{$e=r,lo.transition=o}}function s0(t,e,n,i){var r=$e,o=lo.transition;lo.transition=null;try{$e=4,xf(t,e,n,i)}finally{$e=r,lo.transition=o}}function xf(t,e,n,i){if($a){var r=yc(t,e,n,i);if(r===null)cu(t,e,i,qa,n),Td(t,i);else if(i0(r,t,e,n,i))i.stopPropagation();else if(Td(t,i),e&4&&-1<n0.indexOf(t)){for(;r!==null;){var o=bs(r);if(o!==null&&Om(o),o=yc(t,e,n,i),o===null&&cu(t,e,i,qa,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else cu(t,e,i,null,n)}}var qa=null;function yc(t,e,n,i){if(qa=null,t=mf(i),t=ur(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function Vm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y_()){case gf:return 1;case Nm:return 4;case ja:case $_:return 16;case Um:return 536870912;default:return 16}default:return 16}}var Ai=null,yf=null,Na=null;function Gm(){if(Na)return Na;var t,e=yf,n=e.length,i,r="value"in Ai?Ai.value:Ai.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Na=r.slice(t,1<i?1-i:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qs(){return!0}function Ad(){return!1}function cn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qs:Ad,this.isPropagationStopped=Ad,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),e}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=cn(Co),Ps=ct({},Co,{view:0,detail:0}),a0=cn(Ps),tu,nu,Oo,Tl=ct({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(tu=t.screenX-Oo.screenX,nu=t.screenY-Oo.screenY):nu=tu=0,Oo=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:nu}}),Cd=cn(Tl),l0=ct({},Tl,{dataTransfer:0}),u0=cn(l0),c0=ct({},Ps,{relatedTarget:0}),iu=cn(c0),f0=ct({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=cn(f0),h0=ct({},Co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p0=cn(h0),m0=ct({},Co,{data:0}),Rd=cn(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_0[t])?!!e[t]:!1}function Mf(){return x0}var y0=ct({},Ps,{key:function(t){if(t.key){var e=g0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S0=cn(y0),M0=ct({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=cn(M0),E0=ct({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),T0=cn(E0),w0=ct({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=cn(w0),C0=ct({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=cn(C0),P0=[9,13,27,32],Ef=si&&"CompositionEvent"in window,es=null;si&&"documentMode"in document&&(es=document.documentMode);var b0=si&&"TextEvent"in window&&!es,Wm=si&&(!Ef||es&&8<es&&11>=es),bd=" ",Ld=!1;function Xm(t,e){switch(t){case"keyup":return P0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function L0(t,e){switch(t){case"compositionend":return jm(e);case"keypress":return e.which!==32?null:(Ld=!0,bd);case"textInput":return t=e.data,t===bd&&Ld?null:t;default:return null}}function D0(t,e){if($r)return t==="compositionend"||!Ef&&Xm(t,e)?(t=Gm(),Na=yf=Ai=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wm&&e.locale!=="ko"?null:e.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N0[t.type]:e==="textarea"}function Ym(t,e,n,i){Tm(i),e=Ka(e,"onChange"),0<e.length&&(n=new Sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ts=null,hs=null;function U0(t){rg(t,0)}function wl(t){var e=Zr(t);if(vm(e))return t}function I0(t,e){if(t==="change")return e}var $m=!1;if(si){var ru;if(si){var ou="oninput"in document;if(!ou){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),ou=typeof Nd.oninput=="function"}ru=ou}else ru=!1;$m=ru&&(!document.documentMode||9<document.documentMode)}function Ud(){ts&&(ts.detachEvent("onpropertychange",qm),hs=ts=null)}function qm(t){if(t.propertyName==="value"&&wl(hs)){var e=[];Ym(e,hs,t,mf(t)),Rm(U0,e)}}function F0(t,e,n){t==="focusin"?(Ud(),ts=e,hs=n,ts.attachEvent("onpropertychange",qm)):t==="focusout"&&Ud()}function O0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(hs)}function k0(t,e){if(t==="click")return wl(e)}function z0(t,e){if(t==="input"||t==="change")return wl(e)}function B0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:B0;function ps(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nc.call(e,r)||!Nn(t[r],e[r]))return!1}return!0}function Id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fd(t,e){var n=Id(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Id(n)}}function Km(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Km(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zm(){for(var t=window,e=Ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ga(t.document)}return e}function Tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function H0(t){var e=Zm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Km(n.ownerDocument.documentElement,n)){if(i!==null&&Tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Fd(n,o);var s=Fd(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V0=si&&"documentMode"in document&&11>=document.documentMode,qr=null,Sc=null,ns=null,Mc=!1;function Od(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mc||qr==null||qr!==Ga(i)||(i=qr,"selectionStart"in i&&Tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ns&&ps(ns,i)||(ns=i,i=Ka(Sc,"onSelect"),0<i.length&&(e=new Sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qr)))}function Ks(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},su={},Qm={};si&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Al(t){if(su[t])return su[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qm)return su[t]=e[n];return t}var Jm=Al("animationend"),eg=Al("animationiteration"),tg=Al("animationstart"),ng=Al("transitionend"),ig=new Map,kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){ig.set(t,e),Tr(e,[t])}for(var au=0;au<kd.length;au++){var lu=kd[au],G0=lu.toLowerCase(),W0=lu[0].toUpperCase()+lu.slice(1);Xi(G0,"on"+W0)}Xi(Jm,"onAnimationEnd");Xi(eg,"onAnimationIteration");Xi(tg,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(ng,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function zd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,G_(i,e,void 0,t),t.currentTarget=null}function rg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;zd(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;zd(r,a,u),o=l}}}if(Xa)throw t=vc,Xa=!1,vc=null,t}function Je(t,e){var n=e[Cc];n===void 0&&(n=e[Cc]=new Set);var i=t+"__bubble";n.has(i)||(og(e,t,2,!1),n.add(i))}function uu(t,e,n){var i=0;e&&(i|=4),og(n,t,i,e)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function ms(t){if(!t[Zs]){t[Zs]=!0,dm.forEach(function(n){n!=="selectionchange"&&(X0.has(n)||uu(n,!1,t),uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zs]||(e[Zs]=!0,uu("selectionchange",!1,e))}}function og(t,e,n,i){switch(Vm(e)){case 1:var r=o0;break;case 4:r=s0;break;default:r=xf}n=r.bind(null,e,n,t),r=void 0,!gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=ur(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Rm(function(){var u=o,f=mf(n),d=[];e:{var h=ig.get(t);if(h!==void 0){var m=Sf,_=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":m=S0;break;case"focusin":_="focus",m=iu;break;case"focusout":_="blur",m=iu;break;case"beforeblur":case"afterblur":m=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=T0;break;case Jm:case eg:case tg:m=d0;break;case ng:m=A0;break;case"scroll":m=a0;break;case"wheel":m=R0;break;case"copy":case"cut":case"paste":m=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pd}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,c!==null&&(M=us(v,c),M!=null&&x.push(gs(v,M,g)))),p)break;v=v.return}0<x.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==pc&&(_=n.relatedTarget||n.fromElement)&&(ur(_)||_[ai]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?ur(_):null,_!==null&&(p=wr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(x=Cd,M="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Pd,M="onPointerLeave",c="onPointerEnter",v="pointer"),p=m==null?h:Zr(m),g=_==null?h:Zr(_),h=new x(M,v+"leave",m,n,f),h.target=p,h.relatedTarget=g,M=null,ur(f)===u&&(x=new x(c,v+"enter",_,n,f),x.target=g,x.relatedTarget=p,M=x),p=M,m&&_)t:{for(x=m,c=_,v=0,g=x;g;g=Rr(g))v++;for(g=0,M=c;M;M=Rr(M))g++;for(;0<v-g;)x=Rr(x),v--;for(;0<g-v;)c=Rr(c),g--;for(;v--;){if(x===c||c!==null&&x===c.alternate)break t;x=Rr(x),c=Rr(c)}x=null}else x=null;m!==null&&Bd(d,h,m,x,!1),_!==null&&p!==null&&Bd(d,p,_,x,!0)}}e:{if(h=u?Zr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=I0;else if(Dd(h))if($m)b=z0;else{b=O0;var C=F0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=k0);if(b&&(b=b(t,u))){Ym(d,b,n,f);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&uc(h,"number",h.value)}switch(C=u?Zr(u):window,t){case"focusin":(Dd(C)||C.contentEditable==="true")&&(qr=C,Sc=u,ns=null);break;case"focusout":ns=Sc=qr=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,Od(d,n,f);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":Od(d,n,f)}var w;if(Ef)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else $r?Xm(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Wm&&n.locale!=="ko"&&($r||L!=="onCompositionStart"?L==="onCompositionEnd"&&$r&&(w=Gm()):(Ai=f,yf="value"in Ai?Ai.value:Ai.textContent,$r=!0)),C=Ka(u,L),0<C.length&&(L=new Rd(L,t,null,n,f),d.push({event:L,listeners:C}),w?L.data=w:(w=jm(n),w!==null&&(L.data=w)))),(w=b0?L0(t,n):D0(t,n))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(f=new Rd("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=w))}rg(d,e)})}function gs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ka(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=us(t,n),o!=null&&i.unshift(gs(t,o,r)),o=us(t,e),o!=null&&i.push(gs(t,o,r))),t=t.return}return i}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bd(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=us(n,o),l!=null&&s.unshift(gs(n,l,a))):r||(l=us(n,o),l!=null&&s.push(gs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var j0=/\r\n?/g,Y0=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(j0,`
`).replace(Y0,"")}function Qs(t,e,n){if(e=Hd(e),Hd(t)!==e&&n)throw Error(Z(425))}function Za(){}var Ec=null,Tc=null;function wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(t){return Vd.resolve(null).then(t).catch(K0)}:Ac;function K0(t){setTimeout(function(){throw t})}function fu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ds(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ds(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Ro,vs="__reactProps$"+Ro,ai="__reactContainer$"+Ro,Cc="__reactEvents$"+Ro,Z0="__reactListeners$"+Ro,Q0="__reactHandles$"+Ro;function ur(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ai]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gd(t);t!==null;){if(n=t[Bn])return n;t=Gd(t)}return e}t=n,n=t.parentNode}return null}function bs(t){return t=t[Bn]||t[ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function Cl(t){return t[vs]||null}var Rc=[],Qr=-1;function ji(t){return{current:t}}function tt(t){0>Qr||(t.current=Rc[Qr],Rc[Qr]=null,Qr--)}function Ze(t,e){Qr++,Rc[Qr]=t.current,t.current=e}var Vi={},kt=ji(Vi),qt=ji(!1),_r=Vi;function go(t,e){var n=t.type.contextTypes;if(!n)return Vi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Kt(t){return t=t.childContextTypes,t!=null}function Qa(){tt(qt),tt(kt)}function Wd(t,e,n){if(kt.current!==Vi)throw Error(Z(168));Ze(kt,e),Ze(qt,n)}function sg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,F_(t)||"Unknown",r));return ct({},n,i)}function Ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,_r=kt.current,Ze(kt,t),Ze(qt,qt.current),!0}function Xd(t,e,n){var i=t.stateNode;if(!i)throw Error(Z(169));n?(t=sg(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,tt(qt),tt(kt),Ze(kt,t)):tt(qt),Ze(qt,n)}var Jn=null,Rl=!1,du=!1;function ag(t){Jn===null?Jn=[t]:Jn.push(t)}function J0(t){Rl=!0,ag(t)}function Yi(){if(!du&&Jn!==null){du=!0;var t=0,e=$e;try{var n=Jn;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Jn=null,Rl=!1}catch(r){throw Jn!==null&&(Jn=Jn.slice(t+1)),Dm(gf,Yi),r}finally{$e=e,du=!1}}return null}var Jr=[],eo=0,el=null,tl=0,hn=[],pn=0,xr=null,ti=1,ni="";function ir(t,e){Jr[eo++]=tl,Jr[eo++]=el,el=t,tl=e}function lg(t,e,n){hn[pn++]=ti,hn[pn++]=ni,hn[pn++]=xr,xr=t;var i=ti;t=ni;var r=32-bn(i)-1;i&=~(1<<r),n+=1;var o=32-bn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,ti=1<<32-bn(e)+r|n<<r|i,ni=o+t}else ti=1<<o|n<<r|i,ni=t}function wf(t){t.return!==null&&(ir(t,1),lg(t,1,0))}function Af(t){for(;t===el;)el=Jr[--eo],Jr[eo]=null,tl=Jr[--eo],Jr[eo]=null;for(;t===xr;)xr=hn[--pn],hn[pn]=null,ni=hn[--pn],hn[pn]=null,ti=hn[--pn],hn[pn]=null}var an=null,sn=null,ot=!1,Rn=null;function ug(t,e){var n=gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,sn=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:ti,overflow:ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,sn=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bc(t){if(ot){var e=sn;if(e){var n=e;if(!jd(t,e)){if(Pc(t))throw Error(Z(418));e=Ni(n.nextSibling);var i=an;e&&jd(t,e)?ug(i,n):(t.flags=t.flags&-4097|2,ot=!1,an=t)}}else{if(Pc(t))throw Error(Z(418));t.flags=t.flags&-4097|2,ot=!1,an=t}}}function Yd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function Js(t){if(t!==an)return!1;if(!ot)return Yd(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wc(t.type,t.memoizedProps)),e&&(e=sn)){if(Pc(t))throw cg(),Error(Z(418));for(;e;)ug(t,e),e=Ni(e.nextSibling)}if(Yd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=an?Ni(t.stateNode.nextSibling):null;return!0}function cg(){for(var t=sn;t;)t=Ni(t.nextSibling)}function vo(){sn=an=null,ot=!1}function Cf(t){Rn===null?Rn=[t]:Rn.push(t)}var ex=fi.ReactCurrentBatchConfig;function An(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var nl=ji(null),il=null,to=null,Rf=null;function Pf(){Rf=to=il=null}function bf(t){var e=nl.current;tt(nl),t._currentValue=e}function Lc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){il=t,Rf=to=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(Rf!==t)if(t={context:t,memoizedValue:e,next:null},to===null){if(il===null)throw Error(Z(308));to=t,il.dependencies={lanes:0,firstContext:t}}else to=to.next=t;return e}var cr=null;function Lf(t){cr===null?cr=[t]:cr.push(t)}function fg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Lf(e)):(n.next=r.next,r.next=n),e.interleaved=n,li(t,i)}function li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mi=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,li(t,n)}return r=i.interleaved,r===null?(e.next=e,Lf(i)):(e.next=r.next,r.next=e),i.interleaved=e,li(t,n)}function Ia(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}function $d(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,i){var r=t.updateQueue;Mi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,f=u=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=ct({},d,h);break e;case 2:Mi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Sr|=s,t.lanes=s,t.memoizedState=d}}function qd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var hg=new fm.Component().refs;function Dc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pl={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Fi(t),o=oi(i,r);o.payload=e,n!=null&&(o.callback=n),e=Ui(t,o,r),e!==null&&(Ln(e,t,r,i),Ia(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Fi(t),o=oi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ui(t,o,r),e!==null&&(Ln(e,t,r,i),Ia(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),i=Fi(t),r=oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(Ln(e,t,i,n),Ia(e,t,i))}};function Kd(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ps(n,i)||!ps(r,o):!0}function pg(t,e,n){var i=!1,r=Vi,o=e.contextType;return typeof o=="object"&&o!==null?o=yn(o):(r=Kt(e)?_r:kt.current,i=e.contextTypes,o=(i=i!=null)?go(t,r):Vi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Zd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pl.enqueueReplaceState(e,e.state,null)}function Nc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=hg,Df(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=yn(o):(o=Kt(e)?_r:kt.current,r.context=go(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Dc(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pl.enqueueReplaceState(r,r.state,null),rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var i=n.stateNode}if(!i)throw Error(Z(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===hg&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qd(t){var e=t._init;return e(t._payload)}function mg(t){function e(c,v){if(t){var g=c.deletions;g===null?(c.deletions=[v],c.flags|=16):g.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=Oi(c,v),c.index=0,c.sibling=null,c}function o(c,v,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<v?(c.flags|=2,v):g):(c.flags|=2,v)):(c.flags|=1048576,v)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,g,M){return v===null||v.tag!==6?(v=xu(g,c.mode,M),v.return=c,v):(v=r(v,g),v.return=c,v)}function l(c,v,g,M){var b=g.type;return b===Yr?f(c,v,g.props.children,M,g.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Si&&Qd(b)===v.type)?(M=r(v,g.props),M.ref=ko(c,v,g),M.return=c,M):(M=Ha(g.type,g.key,g.props,null,c.mode,M),M.ref=ko(c,v,g),M.return=c,M)}function u(c,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=yu(g,c.mode,M),v.return=c,v):(v=r(v,g.children||[]),v.return=c,v)}function f(c,v,g,M,b){return v===null||v.tag!==7?(v=mr(g,c.mode,M,b),v.return=c,v):(v=r(v,g),v.return=c,v)}function d(c,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=xu(""+v,c.mode,g),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gs:return g=Ha(v.type,v.key,v.props,null,c.mode,g),g.ref=ko(c,null,v),g.return=c,g;case jr:return v=yu(v,c.mode,g),v.return=c,v;case Si:var M=v._init;return d(c,M(v._payload),g)}if($o(v)||No(v))return v=mr(v,c.mode,g,null),v.return=c,v;ea(c,v)}return null}function h(c,v,g,M){var b=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(c,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gs:return g.key===b?l(c,v,g,M):null;case jr:return g.key===b?u(c,v,g,M):null;case Si:return b=g._init,h(c,v,b(g._payload),M)}if($o(g)||No(g))return b!==null?null:f(c,v,g,M,null);ea(c,g)}return null}function m(c,v,g,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(g)||null,a(v,c,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Gs:return c=c.get(M.key===null?g:M.key)||null,l(v,c,M,b);case jr:return c=c.get(M.key===null?g:M.key)||null,u(v,c,M,b);case Si:var C=M._init;return m(c,v,g,C(M._payload),b)}if($o(M)||No(M))return c=c.get(g)||null,f(v,c,M,b,null);ea(v,M)}return null}function _(c,v,g,M){for(var b=null,C=null,w=v,L=v=0,T=null;w!==null&&L<g.length;L++){w.index>L?(T=w,w=null):T=w.sibling;var S=h(c,w,g[L],M);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(c,w),v=o(S,v,L),C===null?b=S:C.sibling=S,C=S,w=T}if(L===g.length)return n(c,w),ot&&ir(c,L),b;if(w===null){for(;L<g.length;L++)w=d(c,g[L],M),w!==null&&(v=o(w,v,L),C===null?b=w:C.sibling=w,C=w);return ot&&ir(c,L),b}for(w=i(c,w);L<g.length;L++)T=m(w,c,L,g[L],M),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?L:T.key),v=o(T,v,L),C===null?b=T:C.sibling=T,C=T);return t&&w.forEach(function(I){return e(c,I)}),ot&&ir(c,L),b}function x(c,v,g,M){var b=No(g);if(typeof b!="function")throw Error(Z(150));if(g=b.call(g),g==null)throw Error(Z(151));for(var C=b=null,w=v,L=v=0,T=null,S=g.next();w!==null&&!S.done;L++,S=g.next()){w.index>L?(T=w,w=null):T=w.sibling;var I=h(c,w,S.value,M);if(I===null){w===null&&(w=T);break}t&&w&&I.alternate===null&&e(c,w),v=o(I,v,L),C===null?b=I:C.sibling=I,C=I,w=T}if(S.done)return n(c,w),ot&&ir(c,L),b;if(w===null){for(;!S.done;L++,S=g.next())S=d(c,S.value,M),S!==null&&(v=o(S,v,L),C===null?b=S:C.sibling=S,C=S);return ot&&ir(c,L),b}for(w=i(c,w);!S.done;L++,S=g.next())S=m(w,c,L,S.value,M),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?L:S.key),v=o(S,v,L),C===null?b=S:C.sibling=S,C=S);return t&&w.forEach(function(W){return e(c,W)}),ot&&ir(c,L),b}function p(c,v,g,M){if(typeof g=="object"&&g!==null&&g.type===Yr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Gs:e:{for(var b=g.key,C=v;C!==null;){if(C.key===b){if(b=g.type,b===Yr){if(C.tag===7){n(c,C.sibling),v=r(C,g.props.children),v.return=c,c=v;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Si&&Qd(b)===C.type){n(c,C.sibling),v=r(C,g.props),v.ref=ko(c,C,g),v.return=c,c=v;break e}n(c,C);break}else e(c,C);C=C.sibling}g.type===Yr?(v=mr(g.props.children,c.mode,M,g.key),v.return=c,c=v):(M=Ha(g.type,g.key,g.props,null,c.mode,M),M.ref=ko(c,v,g),M.return=c,c=M)}return s(c);case jr:e:{for(C=g.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(c,v.sibling),v=r(v,g.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=yu(g,c.mode,M),v.return=c,c=v}return s(c);case Si:return C=g._init,p(c,v,C(g._payload),M)}if($o(g))return _(c,v,g,M);if(No(g))return x(c,v,g,M);ea(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,g),v.return=c,c=v):(n(c,v),v=xu(g,c.mode,M),v.return=c,c=v),s(c)):n(c,v)}return p}var _o=mg(!0),gg=mg(!1),Ls={},Wn=ji(Ls),_s=ji(Ls),xs=ji(Ls);function fr(t){if(t===Ls)throw Error(Z(174));return t}function Nf(t,e){switch(Ze(xs,e),Ze(_s,t),Ze(Wn,Ls),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fc(e,t)}tt(Wn),Ze(Wn,e)}function xo(){tt(Wn),tt(_s),tt(xs)}function vg(t){fr(xs.current);var e=fr(Wn.current),n=fc(e,t.type);e!==n&&(Ze(_s,t),Ze(Wn,n))}function Uf(t){_s.current===t&&(tt(Wn),tt(_s))}var lt=ji(0);function ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function If(){for(var t=0;t<hu.length;t++)hu[t]._workInProgressVersionPrimary=null;hu.length=0}var Fa=fi.ReactCurrentDispatcher,pu=fi.ReactCurrentBatchConfig,yr=0,ut=null,_t=null,Tt=null,sl=!1,is=!1,ys=0,tx=0;function Nt(){throw Error(Z(321))}function Ff(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function Of(t,e,n,i,r,o){if(yr=o,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=t===null||t.memoizedState===null?ox:sx,t=n(i,r),is){o=0;do{if(is=!1,ys=0,25<=o)throw Error(Z(301));o+=1,Tt=_t=null,e.updateQueue=null,Fa.current=ax,t=n(i,r)}while(is)}if(Fa.current=al,e=_t!==null&&_t.next!==null,yr=0,Tt=_t=ut=null,sl=!1,e)throw Error(Z(300));return t}function kf(){var t=ys!==0;return ys=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ut.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Sn(){if(_t===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Tt===null?ut.memoizedState:Tt.next;if(e!==null)Tt=e,_t=t;else{if(t===null)throw Error(Z(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Tt===null?ut.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function Ss(t,e){return typeof e=="function"?e(t):e}function mu(t){var e=Sn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=_t,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((yr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,ut.lanes|=f,Sr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Nn(i,e.memoizedState)||($t=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ut.lanes|=o,Sr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gu(t){var e=Sn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Nn(o,e.memoizedState)||($t=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function _g(){}function xg(t,e){var n=ut,i=Sn(),r=e(),o=!Nn(i.memoizedState,r);if(o&&(i.memoizedState=r,$t=!0),i=i.queue,zf(Mg.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,Ms(9,Sg.bind(null,n,i,r,e),void 0,null),wt===null)throw Error(Z(349));yr&30||yg(n,e,r)}return r}function yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sg(t,e,n,i){e.value=n,e.getSnapshot=i,Eg(e)&&Tg(t)}function Mg(t,e,n){return n(function(){Eg(e)&&Tg(t)})}function Eg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function Tg(t){var e=li(t,1);e!==null&&Ln(e,t,1,-1)}function Jd(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:t},e.queue=t,t=t.dispatch=rx.bind(null,ut,t),[e.memoizedState,t]}function Ms(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function wg(){return Sn().memoizedState}function Oa(t,e,n,i){var r=On();ut.flags|=t,r.memoizedState=Ms(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=Sn();i=i===void 0?null:i;var o=void 0;if(_t!==null){var s=_t.memoizedState;if(o=s.destroy,i!==null&&Ff(i,s.deps)){r.memoizedState=Ms(e,n,o,i);return}}ut.flags|=t,r.memoizedState=Ms(1|e,n,o,i)}function eh(t,e){return Oa(8390656,8,t,e)}function zf(t,e){return bl(2048,8,t,e)}function Ag(t,e){return bl(4,2,t,e)}function Cg(t,e){return bl(4,4,t,e)}function Rg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pg(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,Rg.bind(null,e,t),n)}function Bf(){}function bg(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ff(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Lg(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ff(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Dg(t,e,n){return yr&21?(Nn(n,e)||(n=Im(),ut.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function nx(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=pu.transition;pu.transition={};try{t(!1),e()}finally{$e=n,pu.transition=i}}function Ng(){return Sn().memoizedState}function ix(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ug(t))Ig(e,n);else if(n=fg(t,e,n,i),n!==null){var r=Vt();Ln(n,t,i,r),Fg(n,e,i)}}function rx(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ug(t))Ig(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Nn(a,s)){var l=e.interleaved;l===null?(r.next=r,Lf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=fg(t,e,r,i),n!==null&&(r=Vt(),Ln(n,t,i,r),Fg(n,e,i))}}function Ug(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Ig(t,e){is=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}var al={readContext:yn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},ox={readContext:yn,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:eh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,Rg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=On();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ix.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:Jd,useDebugValue:Bf,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=Jd(!1),e=t[0];return t=nx.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=On();if(ot){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),wt===null)throw Error(Z(349));yr&30||yg(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,eh(Mg.bind(null,i,o,t),[t]),i.flags|=2048,Ms(9,Sg.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=On(),e=wt.identifierPrefix;if(ot){var n=ni,i=ti;n=(i&~(1<<32-bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sx={readContext:yn,useCallback:bg,useContext:yn,useEffect:zf,useImperativeHandle:Pg,useInsertionEffect:Ag,useLayoutEffect:Cg,useMemo:Lg,useReducer:mu,useRef:wg,useState:function(){return mu(Ss)},useDebugValue:Bf,useDeferredValue:function(t){var e=Sn();return Dg(e,_t.memoizedState,t)},useTransition:function(){var t=mu(Ss)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:_g,useSyncExternalStore:xg,useId:Ng,unstable_isNewReconciler:!1},ax={readContext:yn,useCallback:bg,useContext:yn,useEffect:zf,useImperativeHandle:Pg,useInsertionEffect:Ag,useLayoutEffect:Cg,useMemo:Lg,useReducer:gu,useRef:wg,useState:function(){return gu(Ss)},useDebugValue:Bf,useDeferredValue:function(t){var e=Sn();return _t===null?e.memoizedState=t:Dg(e,_t.memoizedState,t)},useTransition:function(){var t=gu(Ss)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:_g,useSyncExternalStore:xg,useId:Ng,unstable_isNewReconciler:!1};function yo(t,e){try{var n="",i=e;do n+=I_(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function vu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lx=typeof WeakMap=="function"?WeakMap:Map;function Og(t,e,n){n=oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ul||(ul=!0,Wc=i),Uc(t,e)},n}function kg(t,e,n){n=oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uc(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uc(t,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function th(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new lx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Mx.bind(null,t,e,n),e.then(t,t))}function nh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ih(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=oi(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var ux=fi.ReactCurrentOwner,$t=!1;function Ht(t,e,n,i){e.child=t===null?gg(e,null,n,i):_o(e,t.child,n,i)}function rh(t,e,n,i,r){n=n.render;var o=e.ref;return uo(e,r),i=Of(t,e,n,i,o,r),n=kf(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ui(t,e,r)):(ot&&n&&wf(e),e.flags|=1,Ht(t,e,i,r),e.child)}function oh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!$f(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,zg(t,e,o,i,r)):(t=Ha(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ps,n(s,i)&&t.ref===e.ref)return ui(t,e,r)}return e.flags|=1,t=Oi(o,i),t.ref=e.ref,t.return=e,e.child=t}function zg(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ps(o,i)&&t.ref===e.ref)if($t=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,ui(t,e,r)}return Ic(t,e,n,i,r)}function Bg(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(io,on),on|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ze(io,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ze(io,on),on|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ze(io,on),on|=i;return Ht(t,e,r,n),e.child}function Hg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ic(t,e,n,i,r){var o=Kt(n)?_r:kt.current;return o=go(e,o),uo(e,r),n=Of(t,e,n,i,o,r),i=kf(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ui(t,e,r)):(ot&&i&&wf(e),e.flags|=1,Ht(t,e,n,r),e.child)}function sh(t,e,n,i,r){if(Kt(n)){var o=!0;Ja(e)}else o=!1;if(uo(e,r),e.stateNode===null)ka(t,e),pg(e,n,i),Nc(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=Kt(n)?_r:kt.current,u=go(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Zd(e,s,i,u),Mi=!1;var h=e.memoizedState;s.state=h,rl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||qt.current||Mi?(typeof f=="function"&&(Dc(e,n,f,i),l=e.memoizedState),(a=Mi||Kd(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,dg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:An(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=Kt(n)?_r:kt.current,l=go(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Zd(e,s,i,l),Mi=!1,h=e.memoizedState,s.state=h,rl(e,i,s,r);var _=e.memoizedState;a!==d||h!==_||qt.current||Mi?(typeof m=="function"&&(Dc(e,n,m,i),_=e.memoizedState),(u=Mi||Kd(e,n,u,i,h,_,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Fc(t,e,n,i,o,r)}function Fc(t,e,n,i,r,o){Hg(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Xd(e,n,!1),ui(t,e,o);i=e.stateNode,ux.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=_o(e,t.child,null,o),e.child=_o(e,null,a,o)):Ht(t,e,a,o),e.memoizedState=i.state,r&&Xd(e,n,!0),e.child}function Vg(t){var e=t.stateNode;e.pendingContext?Wd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wd(t,e.context,!1),Nf(t,e.containerInfo)}function ah(t,e,n,i,r){return vo(),Cf(r),e.flags|=256,Ht(t,e,n,i),e.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gg(t,e,n){var i=e.pendingProps,r=lt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ze(lt,r&1),t===null)return bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Nl(s,i,0,null),t=mr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=kc(n),e.memoizedState=Oc,t):Hf(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return cx(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Oi(a,o):(o=mr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?kc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Oc,i}return o=t.child,t=o.sibling,i=Oi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Hf(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,i){return i!==null&&Cf(i),_o(e,t.child,null,n),t=Hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cx(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=vu(Error(Z(422))),ta(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Nl({mode:"visible",children:i.children},r,0,null),o=mr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&_o(e,t.child,null,s),e.child.memoizedState=kc(s),e.memoizedState=Oc,o);if(!(e.mode&1))return ta(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Z(419)),i=vu(o,i,void 0),ta(t,e,s,i)}if(a=(s&t.childLanes)!==0,$t||a){if(i=wt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,li(t,r),Ln(i,t,r,-1))}return Yf(),i=vu(Error(Z(421))),ta(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ex.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,sn=Ni(r.nextSibling),an=e,ot=!0,Rn=null,t!==null&&(hn[pn++]=ti,hn[pn++]=ni,hn[pn++]=xr,ti=t.id,ni=t.overflow,xr=e),e=Hf(e,i.children),e.flags|=4096,e)}function lh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Lc(t.return,e,n)}function _u(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Wg(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Ht(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lh(t,n,e);else if(t.tag===19)lh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ze(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_u(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_u(e,!0,n,null,o);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=Oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fx(t,e,n){switch(e.tag){case 3:Vg(e),vo();break;case 5:vg(e);break;case 1:Kt(e.type)&&Ja(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ze(nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ze(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Gg(t,e,n):(Ze(lt,lt.current&1),t=ui(t,e,n),t!==null?t.sibling:null);Ze(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Wg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ze(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bg(t,e,n)}return ui(t,e,n)}var Xg,zc,jg,Yg;Xg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zc=function(){};jg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,fr(Wn.current);var o=null;switch(n){case"input":r=ac(t,r),i=ac(t,i),o=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),o=[];break;case"textarea":r=cc(t,r),i=cc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Za)}dc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(as.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(as.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Je("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Yg=function(t,e,n,i){n!==i&&(e.flags|=4)};function zo(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function dx(t,e,n){var i=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Kt(e.type)&&Qa(),Ut(e),null;case 3:return i=e.stateNode,xo(),tt(qt),tt(kt),If(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Yc(Rn),Rn=null))),zc(t,e),Ut(e),null;case 5:Uf(e);var r=fr(xs.current);if(n=e.type,t!==null&&e.stateNode!=null)jg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Ut(e),null}if(t=fr(Wn.current),Js(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Bn]=e,i[vs]=o,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",i),Je("close",i);break;case"iframe":case"object":case"embed":Je("load",i);break;case"video":case"audio":for(r=0;r<Ko.length;r++)Je(Ko[r],i);break;case"source":Je("error",i);break;case"img":case"image":case"link":Je("error",i),Je("load",i);break;case"details":Je("toggle",i);break;case"input":vd(i,o),Je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Je("invalid",i);break;case"textarea":xd(i,o),Je("invalid",i)}dc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Qs(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Qs(i.textContent,a,t),r=["children",""+a]):as.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Je("scroll",i)}switch(n){case"input":Ws(i),_d(i,o,!0);break;case"textarea":Ws(i),yd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Za)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ym(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Bn]=e,t[vs]=i,Xg(t,e,!1,!1),e.stateNode=t;e:{switch(s=hc(n,i),n){case"dialog":Je("cancel",t),Je("close",t),r=i;break;case"iframe":case"object":case"embed":Je("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ko.length;r++)Je(Ko[r],t);r=i;break;case"source":Je("error",t),r=i;break;case"img":case"image":case"link":Je("error",t),Je("load",t),r=i;break;case"details":Je("toggle",t),r=i;break;case"input":vd(t,i),r=ac(t,i),Je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),Je("invalid",t);break;case"textarea":xd(t,i),r=cc(t,i),Je("invalid",t);break;default:r=i}dc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Em(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sm(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ls(t,l):typeof l=="number"&&ls(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(as.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Je("scroll",t):l!=null&&ff(t,o,l,s))}switch(n){case"input":Ws(t),_d(t,i,!1);break;case"textarea":Ws(t),yd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?oo(t,!!i.multiple,o,!1):i.defaultValue!=null&&oo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)Yg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(n=fr(xs.current),fr(Wn.current),Js(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bn]=e,(o=i.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:Qs(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qs(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bn]=e,e.stateNode=i}return Ut(e),null;case 13:if(tt(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&sn!==null&&e.mode&1&&!(e.flags&128))cg(),vo(),e.flags|=98560,o=!1;else if(o=Js(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Z(317));o[Bn]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),o=!1}else Rn!==null&&(Yc(Rn),Rn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?xt===0&&(xt=3):Yf())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return xo(),zc(t,e),t===null&&ms(e.stateNode.containerInfo),Ut(e),null;case 10:return bf(e.type._context),Ut(e),null;case 17:return Kt(e.type)&&Qa(),Ut(e),null;case 19:if(tt(lt),o=e.memoizedState,o===null)return Ut(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)zo(o,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ol(t),s!==null){for(e.flags|=128,zo(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ze(lt,lt.current&1|2),e.child}t=t.sibling}o.tail!==null&&pt()>So&&(e.flags|=128,i=!0,zo(o,!1),e.lanes=4194304)}else{if(!i)if(t=ol(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ot)return Ut(e),null}else 2*pt()-o.renderingStartTime>So&&n!==1073741824&&(e.flags|=128,i=!0,zo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=pt(),e.sibling=null,n=lt.current,Ze(lt,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return jf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function hx(t,e){switch(Af(e),e.tag){case 1:return Kt(e.type)&&Qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),tt(qt),tt(kt),If(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uf(e),null;case 13:if(tt(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(lt),null;case 4:return xo(),null;case 10:return bf(e.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var na=!1,Ot=!1,px=typeof WeakSet=="function"?WeakSet:Set,fe=null;function no(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function Bc(t,e,n){try{n()}catch(i){ft(t,e,i)}}var uh=!1;function mx(t,e){if(Ec=$a,t=Zm(),Tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++f===i&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tc={focusedElem:t,selectionRange:n},$a=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:An(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(M){ft(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=uh,uh=!1,_}function rs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Bc(e,n,o)}r=r.next}while(r!==i)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Hc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $g(t){var e=t.alternate;e!==null&&(t.alternate=null,$g(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[vs],delete e[Cc],delete e[Z0],delete e[Q0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qg(t){return t.tag===5||t.tag===3||t.tag===4}function ch(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Za));else if(i!==4&&(t=t.child,t!==null))for(Vc(t,e,n),t=t.sibling;t!==null;)Vc(t,e,n),t=t.sibling}function Gc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gc(t,e,n),t=t.sibling;t!==null;)Gc(t,e,n),t=t.sibling}var At=null,Cn=!1;function pi(t,e,n){for(n=n.child;n!==null;)Kg(t,e,n),n=n.sibling}function Kg(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:Ot||no(n,e);case 6:var i=At,r=Cn;At=null,pi(t,e,n),At=i,Cn=r,At!==null&&(Cn?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(Cn?(t=At,n=n.stateNode,t.nodeType===8?fu(t.parentNode,n):t.nodeType===1&&fu(t,n),ds(t)):fu(At,n.stateNode));break;case 4:i=At,r=Cn,At=n.stateNode.containerInfo,Cn=!0,pi(t,e,n),At=i,Cn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Bc(n,e,s),r=r.next}while(r!==i)}pi(t,e,n);break;case 1:if(!Ot&&(no(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ft(n,e,a)}pi(t,e,n);break;case 21:pi(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,pi(t,e,n),Ot=i):pi(t,e,n);break;default:pi(t,e,n)}}function fh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new px),e.forEach(function(i){var r=Tx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:At=a.stateNode,Cn=!1;break e;case 3:At=a.stateNode.containerInfo,Cn=!0;break e;case 4:At=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(At===null)throw Error(Z(160));Kg(o,s,r),At=null,Cn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ft(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zg(e,t),e=e.sibling}function Zg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),Fn(t),i&4){try{rs(3,t,t.return),Ll(3,t)}catch(x){ft(t,t.return,x)}try{rs(5,t,t.return)}catch(x){ft(t,t.return,x)}}break;case 1:Mn(e,t),Fn(t),i&512&&n!==null&&no(n,n.return);break;case 5:if(Mn(e,t),Fn(t),i&512&&n!==null&&no(n,n.return),t.flags&32){var r=t.stateNode;try{ls(r,"")}catch(x){ft(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&_m(r,o),hc(a,s);var u=hc(a,o);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?Em(r,d):f==="dangerouslySetInnerHTML"?Sm(r,d):f==="children"?ls(r,d):ff(r,f,d,u)}switch(a){case"input":lc(r,o);break;case"textarea":xm(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?oo(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?oo(r,!!o.multiple,o.defaultValue,!0):oo(r,!!o.multiple,o.multiple?[]:"",!1))}r[vs]=o}catch(x){ft(t,t.return,x)}}break;case 6:if(Mn(e,t),Fn(t),i&4){if(t.stateNode===null)throw Error(Z(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){ft(t,t.return,x)}}break;case 3:if(Mn(e,t),Fn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ds(e.containerInfo)}catch(x){ft(t,t.return,x)}break;case 4:Mn(e,t),Fn(t);break;case 13:Mn(e,t),Fn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Wf=pt())),i&4&&fh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||f,Mn(e,t),Ot=u):Mn(e,t),Fn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(fe=t,f=t.child;f!==null;){for(d=fe=f;fe!==null;){switch(h=fe,m=h.child,h.tag){case 0:case 11:case 14:case 15:rs(4,h,h.return);break;case 1:no(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){ft(i,n,x)}}break;case 5:no(h,h.return);break;case 22:if(h.memoizedState!==null){hh(d);continue}}m!==null?(m.return=h,fe=m):hh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mm("display",s))}catch(x){ft(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ft(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Mn(e,t),Fn(t),i&4&&fh(t);break;case 21:break;default:Mn(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qg(n)){var i=n;break e}n=n.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ls(r,""),i.flags&=-33);var o=ch(t);Gc(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=ch(t);Vc(t,a,s);break;default:throw Error(Z(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gx(t,e,n){fe=t,Qg(t)}function Qg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||na;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=na;var u=Ot;if(na=s,(Ot=l)&&!u)for(fe=r;fe!==null;)s=fe,l=s.child,s.tag===22&&s.memoizedState!==null?ph(r):l!==null?(l.return=s,fe=l):ph(r);for(;o!==null;)fe=o,Qg(o),o=o.sibling;fe=r,na=a,Ot=u}dh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,fe=o):dh(t)}}function dh(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&qd(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qd(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ds(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Ot||e.flags&512&&Hc(e)}catch(h){ft(e,e.return,h)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function hh(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function ph(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(l){ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ft(e,r,l)}}var o=e.return;try{Hc(e)}catch(l){ft(e,o,l)}break;case 5:var s=e.return;try{Hc(e)}catch(l){ft(e,s,l)}}}catch(l){ft(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var vx=Math.ceil,ll=fi.ReactCurrentDispatcher,Vf=fi.ReactCurrentOwner,xn=fi.ReactCurrentBatchConfig,Ve=0,wt=null,gt=null,Rt=0,on=0,io=ji(0),xt=0,Es=null,Sr=0,Dl=0,Gf=0,os=null,jt=null,Wf=0,So=1/0,Qn=null,ul=!1,Wc=null,Ii=null,ia=!1,Ci=null,cl=0,ss=0,Xc=null,za=-1,Ba=0;function Vt(){return Ve&6?pt():za!==-1?za:za=pt()}function Fi(t){return t.mode&1?Ve&2&&Rt!==0?Rt&-Rt:ex.transition!==null?(Ba===0&&(Ba=Im()),Ba):(t=$e,t!==0||(t=window.event,t=t===void 0?16:Vm(t.type)),t):1}function Ln(t,e,n,i){if(50<ss)throw ss=0,Xc=null,Error(Z(185));Rs(t,n,i),(!(Ve&2)||t!==wt)&&(t===wt&&(!(Ve&2)&&(Dl|=n),xt===4&&Ti(t,Rt)),Zt(t,i),n===1&&Ve===0&&!(e.mode&1)&&(So=pt()+500,Rl&&Yi()))}function Zt(t,e){var n=t.callbackNode;e0(t,e);var i=Ya(t,t===wt?Rt:0);if(i===0)n!==null&&Ed(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ed(n),e===1)t.tag===0?J0(mh.bind(null,t)):ag(mh.bind(null,t)),q0(function(){!(Ve&6)&&Yi()}),n=null;else{switch(Fm(i)){case 1:n=gf;break;case 4:n=Nm;break;case 16:n=ja;break;case 536870912:n=Um;break;default:n=ja}n=sv(n,Jg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jg(t,e){if(za=-1,Ba=0,Ve&6)throw Error(Z(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var i=Ya(t,t===wt?Rt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fl(t,i);else{e=i;var r=Ve;Ve|=2;var o=tv();(wt!==t||Rt!==e)&&(Qn=null,So=pt()+500,pr(t,e));do try{yx();break}catch(a){ev(t,a)}while(!0);Pf(),ll.current=o,Ve=r,gt!==null?e=0:(wt=null,Rt=0,e=xt)}if(e!==0){if(e===2&&(r=_c(t),r!==0&&(i=r,e=jc(t,r))),e===1)throw n=Es,pr(t,0),Ti(t,i),Zt(t,pt()),n;if(e===6)Ti(t,i);else{if(r=t.current.alternate,!(i&30)&&!_x(r)&&(e=fl(t,i),e===2&&(o=_c(t),o!==0&&(i=o,e=jc(t,o))),e===1))throw n=Es,pr(t,0),Ti(t,i),Zt(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:rr(t,jt,Qn);break;case 3:if(Ti(t,i),(i&130023424)===i&&(e=Wf+500-pt(),10<e)){if(Ya(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Vt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ac(rr.bind(null,t,jt,Qn),e);break}rr(t,jt,Qn);break;case 4:if(Ti(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-bn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vx(i/1960))-i,10<i){t.timeoutHandle=Ac(rr.bind(null,t,jt,Qn),i);break}rr(t,jt,Qn);break;case 5:rr(t,jt,Qn);break;default:throw Error(Z(329))}}}return Zt(t,pt()),t.callbackNode===n?Jg.bind(null,t):null}function jc(t,e){var n=os;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=fl(t,e),t!==2&&(e=jt,jt=n,e!==null&&Yc(e)),t}function Yc(t){jt===null?jt=t:jt.push.apply(jt,t)}function _x(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Nn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ti(t,e){for(e&=~Gf,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),i=1<<n;t[n]=-1,e&=~i}}function mh(t){if(Ve&6)throw Error(Z(327));co();var e=Ya(t,0);if(!(e&1))return Zt(t,pt()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var i=_c(t);i!==0&&(e=i,n=jc(t,i))}if(n===1)throw n=Es,pr(t,0),Ti(t,e),Zt(t,pt()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,jt,Qn),Zt(t,pt()),null}function Xf(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(So=pt()+500,Rl&&Yi())}}function Mr(t){Ci!==null&&Ci.tag===0&&!(Ve&6)&&co();var e=Ve;Ve|=1;var n=xn.transition,i=$e;try{if(xn.transition=null,$e=1,t)return t()}finally{$e=i,xn.transition=n,Ve=e,!(Ve&6)&&Yi()}}function jf(){on=io.current,tt(io)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$0(n)),gt!==null)for(n=gt.return;n!==null;){var i=n;switch(Af(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qa();break;case 3:xo(),tt(qt),tt(kt),If();break;case 5:Uf(i);break;case 4:xo();break;case 13:tt(lt);break;case 19:tt(lt);break;case 10:bf(i.type._context);break;case 22:case 23:jf()}n=n.return}if(wt=t,gt=t=Oi(t.current,null),Rt=on=e,xt=0,Es=null,Gf=Dl=Sr=0,jt=os=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}cr=null}return t}function ev(t,e){do{var n=gt;try{if(Pf(),Fa.current=al,sl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sl=!1}if(yr=0,Tt=_t=ut=null,is=!1,ys=0,Vf.current=null,n===null||n.return===null){xt=1,Es=e,gt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=nh(s);if(m!==null){m.flags&=-257,ih(m,s,a,o,e),m.mode&1&&th(o,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){th(o,u,e),Yf();break e}l=Error(Z(426))}}else if(ot&&a.mode&1){var p=nh(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),ih(p,s,a,o,e),Cf(yo(l,a));break e}}o=l=yo(l,a),xt!==4&&(xt=2),os===null?os=[o]:os.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=Og(o,l,e);$d(o,c);break e;case 1:a=l;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ii===null||!Ii.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var M=kg(o,a,e);$d(o,M);break e}}o=o.return}while(o!==null)}iv(n)}catch(b){e=b,gt===n&&n!==null&&(gt=n=n.return);continue}break}while(!0)}function tv(){var t=ll.current;return ll.current=al,t===null?al:t}function Yf(){(xt===0||xt===3||xt===2)&&(xt=4),wt===null||!(Sr&268435455)&&!(Dl&268435455)||Ti(wt,Rt)}function fl(t,e){var n=Ve;Ve|=2;var i=tv();(wt!==t||Rt!==e)&&(Qn=null,pr(t,e));do try{xx();break}catch(r){ev(t,r)}while(!0);if(Pf(),Ve=n,ll.current=i,gt!==null)throw Error(Z(261));return wt=null,Rt=0,xt}function xx(){for(;gt!==null;)nv(gt)}function yx(){for(;gt!==null&&!X_();)nv(gt)}function nv(t){var e=ov(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?iv(t):gt=e,Vf.current=null}function iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hx(n,e),n!==null){n.flags&=32767,gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,gt=null;return}}else if(n=dx(n,e,on),n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);xt===0&&(xt=5)}function rr(t,e,n){var i=$e,r=xn.transition;try{xn.transition=null,$e=1,Sx(t,e,n,i)}finally{xn.transition=r,$e=i}return null}function Sx(t,e,n,i){do co();while(Ci!==null);if(Ve&6)throw Error(Z(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(t0(t,o),t===wt&&(gt=wt=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,sv(ja,function(){return co(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xn.transition,xn.transition=null;var s=$e;$e=1;var a=Ve;Ve|=4,Vf.current=null,mx(t,n),Zg(n,t),H0(Tc),$a=!!Ec,Tc=Ec=null,t.current=n,gx(n),j_(),Ve=a,$e=s,xn.transition=o}else t.current=n;if(ia&&(ia=!1,Ci=t,cl=r),o=t.pendingLanes,o===0&&(Ii=null),q_(n.stateNode),Zt(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ul)throw ul=!1,t=Wc,Wc=null,t;return cl&1&&t.tag!==0&&co(),o=t.pendingLanes,o&1?t===Xc?ss++:(ss=0,Xc=t):ss=0,Yi(),null}function co(){if(Ci!==null){var t=Fm(cl),e=xn.transition,n=$e;try{if(xn.transition=null,$e=16>t?16:t,Ci===null)var i=!1;else{if(t=Ci,Ci=null,cl=0,Ve&6)throw Error(Z(331));var r=Ve;for(Ve|=4,fe=t.current;fe!==null;){var o=fe,s=o.child;if(fe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var f=fe;switch(f.tag){case 0:case 11:case 15:rs(8,f,o)}var d=f.child;if(d!==null)d.return=f,fe=d;else for(;fe!==null;){f=fe;var h=f.sibling,m=f.return;if($g(f),f===u){fe=null;break}if(h!==null){h.return=m,fe=h;break}fe=m}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}fe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,fe=s;else e:for(;fe!==null;){if(o=fe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:rs(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,fe=c;break e}fe=o.return}}var v=t.current;for(fe=v;fe!==null;){s=fe;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,fe=g;else e:for(s=v;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ll(9,a)}}catch(b){ft(a,a.return,b)}if(a===s){fe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,fe=M;break e}fe=a.return}}if(Ve=r,Yi(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(El,t)}catch{}i=!0}return i}finally{$e=n,xn.transition=e}}return!1}function gh(t,e,n){e=yo(n,e),e=Og(t,e,1),t=Ui(t,e,1),e=Vt(),t!==null&&(Rs(t,1,e),Zt(t,e))}function ft(t,e,n){if(t.tag===3)gh(t,t,n);else for(;e!==null;){if(e.tag===3){gh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){t=yo(n,t),t=kg(e,t,1),e=Ui(e,t,1),t=Vt(),e!==null&&(Rs(e,1,t),Zt(e,t));break}}e=e.return}}function Mx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(Rt&n)===n&&(xt===4||xt===3&&(Rt&130023424)===Rt&&500>pt()-Wf?pr(t,0):Gf|=n),Zt(t,e)}function rv(t,e){e===0&&(t.mode&1?(e=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):e=1);var n=Vt();t=li(t,e),t!==null&&(Rs(t,e,n),Zt(t,n))}function Ex(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rv(t,n)}function Tx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),rv(t,n)}var ov;ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,fx(t,e,n);$t=!!(t.flags&131072)}else $t=!1,ot&&e.flags&1048576&&lg(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ka(t,e),t=e.pendingProps;var r=go(e,kt.current);uo(e,n),r=Of(null,e,i,t,r,n);var o=kf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(i)?(o=!0,Ja(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=Pl,e.stateNode=r,r._reactInternals=e,Nc(e,i,t,n),e=Fc(null,e,i,!0,o,n)):(e.tag=0,ot&&o&&wf(e),Ht(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ka(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ax(i),t=An(i,t),r){case 0:e=Ic(null,e,i,t,n);break e;case 1:e=sh(null,e,i,t,n);break e;case 11:e=rh(null,e,i,t,n);break e;case 14:e=oh(null,e,i,An(i.type,t),n);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),Ic(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),sh(t,e,i,r,n);case 3:e:{if(Vg(e),t===null)throw Error(Z(387));i=e.pendingProps,o=e.memoizedState,r=o.element,dg(t,e),rl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=yo(Error(Z(423)),e),e=ah(t,e,i,n,r);break e}else if(i!==r){r=yo(Error(Z(424)),e),e=ah(t,e,i,n,r);break e}else for(sn=Ni(e.stateNode.containerInfo.firstChild),an=e,ot=!0,Rn=null,n=gg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),i===r){e=ui(t,e,n);break e}Ht(t,e,i,n)}e=e.child}return e;case 5:return vg(e),t===null&&bc(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,wc(i,r)?s=null:o!==null&&wc(i,o)&&(e.flags|=32),Hg(t,e),Ht(t,e,s,n),e.child;case 6:return t===null&&bc(e),null;case 13:return Gg(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_o(e,null,i,n):Ht(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),rh(t,e,i,r,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Ze(nl,i._currentValue),i._currentValue=s,o!==null)if(Nn(o.value,s)){if(o.children===r.children&&!qt.current){e=ui(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=oi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lc(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(Z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Lc(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ht(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,uo(e,n),r=yn(r),i=i(r),e.flags|=1,Ht(t,e,i,n),e.child;case 14:return i=e.type,r=An(i,e.pendingProps),r=An(i.type,r),oh(t,e,i,r,n);case 15:return zg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),ka(t,e),e.tag=1,Kt(i)?(t=!0,Ja(e)):t=!1,uo(e,n),pg(e,i,r),Nc(e,i,r,n),Fc(null,e,i,!0,t,n);case 19:return Wg(t,e,n);case 22:return Bg(t,e,n)}throw Error(Z(156,e.tag))};function sv(t,e){return Dm(t,e)}function wx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(t,e,n,i){return new wx(t,e,n,i)}function $f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ax(t){if(typeof t=="function")return $f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hf)return 11;if(t===pf)return 14}return 2}function Oi(t,e){var n=t.alternate;return n===null?(n=gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")$f(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Yr:return mr(n.children,r,o,e);case df:s=8,r|=8;break;case ic:return t=gn(12,n,e,r|2),t.elementType=ic,t.lanes=o,t;case rc:return t=gn(13,n,e,r),t.elementType=rc,t.lanes=o,t;case oc:return t=gn(19,n,e,r),t.elementType=oc,t.lanes=o,t;case mm:return Nl(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hm:s=10;break e;case pm:s=9;break e;case hf:s=11;break e;case pf:s=14;break e;case Si:s=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=gn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function mr(t,e,n,i){return t=gn(7,t,i,e),t.lanes=n,t}function Nl(t,e,n,i){return t=gn(22,t,i,e),t.elementType=mm,t.lanes=n,t.stateNode={isHidden:!1},t}function xu(t,e,n){return t=gn(6,t,null,e),t.lanes=n,t}function yu(t,e,n){return e=gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qf(t,e,n,i,r,o,s,a,l){return t=new Cx(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=gn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(o),t}function Rx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function av(t){if(!t)return Vi;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(Kt(n))return sg(t,n,e)}return e}function lv(t,e,n,i,r,o,s,a,l){return t=qf(n,i,!0,t,r,o,s,a,l),t.context=av(null),n=t.current,i=Vt(),r=Fi(n),o=oi(i,r),o.callback=e??null,Ui(n,o,r),t.current.lanes=r,Rs(t,r,i),Zt(t,i),t}function Ul(t,e,n,i){var r=e.current,o=Vt(),s=Fi(r);return n=av(n),e.context===null?e.context=n:e.pendingContext=n,e=oi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,s),t!==null&&(Ln(t,r,s,o),Ia(t,r,s)),s}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kf(t,e){vh(t,e),(t=t.alternate)&&vh(t,e)}function Px(){return null}var uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zf(t){this._internalRoot=t}Il.prototype.render=Zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));Ul(t,e,null,null)};Il.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Ul(null,t,null,null)}),e[ai]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=zm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ei.length&&e!==0&&e<Ei[n].priority;n++);Ei.splice(n,0,t),n===0&&Hm(t)}};function Qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _h(){}function bx(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=dl(s);o.call(u)}}var s=lv(e,i,t,0,null,!1,!1,"",_h);return t._reactRootContainer=s,t[ai]=s.current,ms(t.nodeType===8?t.parentNode:t),Mr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=dl(l);a.call(u)}}var l=qf(t,0,!1,null,null,!1,!1,"",_h);return t._reactRootContainer=l,t[ai]=l.current,ms(t.nodeType===8?t.parentNode:t),Mr(function(){Ul(e,l,n,i)}),l}function Ol(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=dl(s);a.call(l)}}Ul(e,s,t,r)}else s=bx(n,e,t,r,i);return dl(s)}Om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qo(e.pendingLanes);n!==0&&(vf(e,n|1),Zt(e,pt()),!(Ve&6)&&(So=pt()+500,Yi()))}break;case 13:Mr(function(){var i=li(t,1);if(i!==null){var r=Vt();Ln(i,t,1,r)}}),Kf(t,1)}};_f=function(t){if(t.tag===13){var e=li(t,134217728);if(e!==null){var n=Vt();Ln(e,t,134217728,n)}Kf(t,134217728)}};km=function(t){if(t.tag===13){var e=Fi(t),n=li(t,e);if(n!==null){var i=Vt();Ln(n,t,e,i)}Kf(t,e)}};zm=function(){return $e};Bm=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};mc=function(t,e,n){switch(e){case"input":if(lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cl(i);if(!r)throw Error(Z(90));vm(i),lc(i,r)}}}break;case"textarea":xm(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};Am=Xf;Cm=Mr;var Lx={usingClientEntryPoint:!1,Events:[bs,Zr,Cl,Tm,wm,Xf]},Bo={findFiberByHostInstance:ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Dx={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bm(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||Px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{El=ra.inject(Dx),Gn=ra}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(Z(200));return Rx(t,e,null,n)};un.createRoot=function(t,e){if(!Qf(t))throw Error(Z(299));var n=!1,i="",r=uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qf(t,1,!1,null,null,n,!1,i,r),t[ai]=e.current,ms(t.nodeType===8?t.parentNode:t),new Zf(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=bm(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return Mr(t)};un.hydrate=function(t,e,n){if(!Fl(e))throw Error(Z(200));return Ol(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!Qf(t))throw Error(Z(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=uv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=lv(e,null,t,1,n??null,r,!1,o,s),t[ai]=e.current,ms(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Il(e)};un.render=function(t,e,n){if(!Fl(e))throw Error(Z(200));return Ol(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!Fl(t))throw Error(Z(40));return t._reactRootContainer?(Mr(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[ai]=null})}),!0):!1};un.unstable_batchedUpdates=Xf;un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fl(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return Ol(t,e,n,!1,i)};un.version="18.2.0-next-9e3b772b8-20220608";function cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)}catch(t){console.error(t)}}cv(),lm.exports=un;var Nx=lm.exports,xh=Nx;tc.createRoot=xh.createRoot,tc.hydrateRoot=xh.hydrateRoot;var fv={exports:{}},kl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=$,Ix=Symbol.for("react.element"),Fx=Symbol.for("react.fragment"),Ox=Object.prototype.hasOwnProperty,kx=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zx={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Ox.call(e,i)&&!zx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ix,type:t,key:o,ref:s,props:r,_owner:kx.current}}kl.Fragment=Fx;kl.jsx=dv;kl.jsxs=dv;fv.exports=kl;var ie=fv.exports;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ts.apply(this,arguments)}var Ri;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ri||(Ri={}));const yh="popstate";function Bx(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return $c("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:pv(r)}return Vx(e,n,null,t)}function Pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hx(){return Math.random().toString(36).substr(2,8)}function Sh(t,e){return{usr:t.state,key:t.key,idx:e}}function $c(t,e,n,i){return n===void 0&&(n=null),Ts({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Po(e):e,{state:n,key:e&&e.key||i||Hx()})}function pv(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Vx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Ri.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(Ts({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function d(){a=Ri.Pop;let p=f(),c=p==null?null:p-u;u=p,l&&l({action:a,location:x.location,delta:c})}function h(p,c){a=Ri.Push;let v=$c(x.location,p,c);n&&n(v,p),u=f()+1;let g=Sh(v,u),M=x.createHref(v);try{s.pushState(g,"",M)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(M)}o&&l&&l({action:a,location:x.location,delta:1})}function m(p,c){a=Ri.Replace;let v=$c(x.location,p,c);n&&n(v,p),u=f();let g=Sh(v,u),M=x.createHref(v);s.replaceState(g,"",M),o&&l&&l({action:a,location:x.location,delta:0})}function _(p){let c=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:pv(p);return v=v.replace(/ $/,"%20"),Pt(c,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,c)}let x={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(yh,d),l=p,()=>{r.removeEventListener(yh,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let c=_(p);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:m,go(p){return s.go(p)}};return x}var Mh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Mh||(Mh={}));function Gx(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Po(e):e,r=vv(i.pathname||"/",n);if(r==null)return null;let o=mv(t);Wx(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=ny(r);s=Jx(o[a],l)}return s}function mv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Pt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=gr([i,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Pt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),mv(o.children,e,f,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Zx(u,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of gv(o.path))r(o,s,l)}),e}function gv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=gv(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Wx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Qx(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Xx=/^:[\w-]+$/,jx=3,Yx=2,$x=1,qx=10,Kx=-2,Eh=t=>t==="*";function Zx(t,e){let n=t.split("/"),i=n.length;return n.some(Eh)&&(i+=Kx),e&&(i+=Yx),n.filter(r=>!Eh(r)).reduce((r,o)=>r+(Xx.test(o)?jx:o===""?$x:qx),i)}function Qx(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Jx(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",f=ey({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(i,f.params);let d=a.route;o.push({params:i,pathname:gr([r,f.pathname]),pathnameBase:sy(gr([r,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(r=gr([r,f.pathnameBase]))}return o}function ey(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ty(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,f,d)=>{let{paramName:h,isOptional:m}=f;if(h==="*"){let x=a[d]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const _=a[d];return m&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function ty(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function ny(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function iy(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Po(t):t;return{pathname:n?n.startsWith("/")?n:ry(n,e):e,search:ay(i),hash:ly(r)}}function ry(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Su(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _v(t,e){let n=oy(t);return e?n.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function xv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Po(t):(r=Ts({},t),Pt(!r.pathname||!r.pathname.includes("?"),Su("?","pathname","search",r)),Pt(!r.pathname||!r.pathname.includes("#"),Su("#","pathname","hash",r)),Pt(!r.search||!r.search.includes("#"),Su("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let d=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=iy(r,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const gr=t=>t.join("/").replace(/\/\/+/g,"/"),sy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ay=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ly=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function uy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const yv=["post","put","patch","delete"];new Set(yv);const cy=["get",...yv];new Set(cy);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ws.apply(this,arguments)}const Jf=$.createContext(null),fy=$.createContext(null),Ds=$.createContext(null),zl=$.createContext(null),Ar=$.createContext({outlet:null,matches:[],isDataRoute:!1}),Sv=$.createContext(null);function Ns(){return $.useContext(zl)!=null}function ed(){return Ns()||Pt(!1),$.useContext(zl).location}function Mv(t){$.useContext(Ds).static||$.useLayoutEffect(t)}function Ev(){let{isDataRoute:t}=$.useContext(Ar);return t?Ty():dy()}function dy(){Ns()||Pt(!1);let t=$.useContext(Jf),{basename:e,future:n,navigator:i}=$.useContext(Ds),{matches:r}=$.useContext(Ar),{pathname:o}=ed(),s=JSON.stringify(_v(r,n.v7_relativeSplatPath)),a=$.useRef(!1);return Mv(()=>{a.current=!0}),$.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let d=xv(u,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:gr([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,s,o,t])}function hy(t,e){return py(t,e)}function py(t,e,n,i){Ns()||Pt(!1);let{navigator:r}=$.useContext(Ds),{matches:o}=$.useContext(Ar),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=ed(),f;if(e){var d;let p=typeof e=="string"?Po(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||Pt(!1),f=p}else f=u;let h=f.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Gx(t,{pathname:m}),x=xy(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:gr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:gr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,i);return e&&x?$.createElement(zl.Provider,{value:{location:ws({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ri.Pop}},x):x}function my(){let t=Ey(),e=uy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:r},n):null,null)}const gy=$.createElement(my,null);class vy extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$.createElement(Ar.Provider,{value:this.props.routeContext},$.createElement(Sv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _y(t){let{routeContext:e,match:n,children:i}=t,r=$.useContext(Jf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(Ar.Provider,{value:e},i)}function xy(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));f>=0||Pt(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<s.length;f++){let d=s[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:h,errors:m}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,d,h)=>{let m,_=!1,x=null,p=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||gy,l&&(u<0&&h===0?(wy("route-fallback",!1),_=!0,p=null):u===h&&(_=!0,p=d.route.hydrateFallbackElement||null)));let c=e.concat(s.slice(0,h+1)),v=()=>{let g;return m?g=x:_?g=p:d.route.Component?g=$.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,$.createElement(_y,{match:d,routeContext:{outlet:f,matches:c,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?$.createElement(vy,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:v(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):v()},null)}var Tv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Tv||{}),hl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hl||{});function yy(t){let e=$.useContext(Jf);return e||Pt(!1),e}function Sy(t){let e=$.useContext(fy);return e||Pt(!1),e}function My(t){let e=$.useContext(Ar);return e||Pt(!1),e}function wv(t){let e=My(),n=e.matches[e.matches.length-1];return n.route.id||Pt(!1),n.route.id}function Ey(){var t;let e=$.useContext(Sv),n=Sy(hl.UseRouteError),i=wv(hl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Ty(){let{router:t}=yy(Tv.UseNavigateStable),e=wv(hl.UseNavigateStable),n=$.useRef(!1);return Mv(()=>{n.current=!0}),$.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ws({fromRouteId:e},o)))},[t,e])}const Th={};function wy(t,e,n){!e&&!Th[t]&&(Th[t]=!0)}function Ay(t){let{to:e,replace:n,state:i,relative:r}=t;Ns()||Pt(!1);let{future:o,static:s}=$.useContext(Ds),{matches:a}=$.useContext(Ar),{pathname:l}=ed(),u=Ev(),f=xv(e,_v(a,o.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(f);return $.useEffect(()=>u(JSON.parse(d),{replace:n,state:i,relative:r}),[u,d,r,n,i]),null}function Cy(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ri.Pop,navigator:o,static:s=!1,future:a}=t;Ns()&&Pt(!1);let l=e.replace(/^\/*/,"/"),u=$.useMemo(()=>({basename:l,navigator:o,static:s,future:ws({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=Po(i));let{pathname:f="/",search:d="",hash:h="",state:m=null,key:_="default"}=i,x=$.useMemo(()=>{let p=vv(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:_},navigationType:r}},[l,f,d,h,m,_,r]);return x==null?null:$.createElement(Ds.Provider,{value:u},$.createElement(zl.Provider,{children:n,value:x}))}new Promise(()=>{});/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ry="6";try{window.__reactRouterVersion=Ry}catch{}const Py="startTransition",wh=P_[Py];function by(t){let{basename:e,children:n,future:i,window:r}=t,o=$.useRef();o.current==null&&(o.current=Bx({window:r,v5Compat:!0}));let s=o.current,[a,l]=$.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},f=$.useCallback(d=>{u&&wh?wh(()=>l(d)):l(d)},[l,u]);return $.useLayoutEffect(()=>s.listen(f),[s,f]),$.createElement(Cy,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:i})}var Ah;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ah||(Ah={}));var Ch;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ch||(Ch={}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const td="163",Ly=0,Rh=1,Dy=2,Av=1,Ny=2,Zn=3,Gi=0,Qt=1,ei=2,ki=0,fo=1,Ph=2,bh=3,Lh=4,Uy=5,ar=100,Iy=101,Fy=102,Oy=103,ky=104,zy=200,By=201,Hy=202,Vy=203,qc=204,Kc=205,Gy=206,Wy=207,Xy=208,jy=209,Yy=210,$y=211,qy=212,Ky=213,Zy=214,Qy=0,Jy=1,eS=2,pl=3,tS=4,nS=5,iS=6,rS=7,Cv=0,oS=1,sS=2,zi=0,aS=1,lS=2,uS=3,cS=4,fS=5,dS=6,hS=7,Rv=300,Mo=301,Eo=302,Zc=303,Qc=304,Bl=306,Jc=1e3,dr=1001,ef=1002,vn=1003,pS=1004,oa=1005,Pn=1006,Mu=1007,hr=1008,Bi=1009,mS=1010,gS=1011,Pv=1012,bv=1013,To=1014,Pi=1015,ml=1016,Lv=1017,Dv=1018,Us=1020,vS=35902,_S=1021,xS=1022,Vn=1023,yS=1024,SS=1025,ho=1026,As=1027,MS=1028,Nv=1029,ES=1030,Uv=1031,Iv=1033,Eu=33776,Tu=33777,wu=33778,Au=33779,Dh=35840,Nh=35841,Uh=35842,Ih=35843,Fv=36196,Fh=37492,Oh=37496,kh=37808,zh=37809,Bh=37810,Hh=37811,Vh=37812,Gh=37813,Wh=37814,Xh=37815,jh=37816,Yh=37817,$h=37818,qh=37819,Kh=37820,Zh=37821,Cu=36492,Qh=36494,Jh=36495,TS=36283,ep=36284,tp=36285,np=36286,wS=3200,AS=3201,CS=0,RS=1,wi="",kn="srgb",$i="srgb-linear",nd="display-p3",Hl="display-p3-linear",gl="linear",et="srgb",vl="rec709",_l="p3",Pr=7680,ip=519,PS=512,bS=513,LS=514,Ov=515,DS=516,NS=517,US=518,IS=519,rp=35044,op="300 es",ii=2e3,xl=2001;class bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,tf=180/Math.PI;function Is(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function FS(t,e){return(t%e+e)%e}function Pu(t,e,n){return(1-n)*t+n*e}function Ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,o,s,a,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],c=r[6],v=r[1],g=r[4],M=r[7],b=r[2],C=r[5],w=r[8];return o[0]=s*x+a*v+l*b,o[3]=s*p+a*g+l*C,o[6]=s*c+a*M+l*w,o[1]=u*x+f*v+d*b,o[4]=u*p+f*g+d*C,o[7]=u*c+f*M+d*w,o[2]=h*x+m*v+_*b,o[5]=h*p+m*g+_*C,o[8]=h*c+m*M+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*s-a*u,h=a*l-f*o,m=u*o-s*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new Ie;function kv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function OS(){const t=yl("canvas");return t.style.display="block",t}const sp={};function kS(t){t in sp||(sp[t]=!0,console.warn(t))}const ap=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lp=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[$i]:{transfer:gl,primaries:vl,toReference:t=>t,fromReference:t=>t},[kn]:{transfer:et,primaries:vl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hl]:{transfer:gl,primaries:_l,toReference:t=>t.applyMatrix3(lp),fromReference:t=>t.applyMatrix3(ap)},[nd]:{transfer:et,primaries:_l,toReference:t=>t.convertSRGBToLinear().applyMatrix3(lp),fromReference:t=>t.applyMatrix3(ap).convertLinearToSRGB()}},zS=new Set([$i,Hl]),qe={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!zS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=sa[e].toReference,r=sa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return sa[t].primaries},getTransfer:function(t){return t===wi?gl:sa[t].transfer}};function po(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class BS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=yl("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=po(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(po(n[i]/255)*255):n[i]=po(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HS=0;class zv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Du(r[s].image)):o.push(Du(r[s]))}else o=Du(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?BS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VS=0;class Jt extends bo{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=dr,r=dr,o=Pn,s=hr,a=Vn,l=Bi,u=Jt.DEFAULT_ANISOTROPY,f=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Is(),this.name="",this.source=new zv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jc:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jc:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Rv;Jt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,M=(m+1)/2,b=(c+1)/2,C=(f+h)/4,w=(d+x)/4,L=(_+p)/4;return g>M&&g>b?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=C/i,o=w/i):M>b?M<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),i=C/r,o=L/r):b<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),i=w/o,r=L/o),this.set(i,r,o,n),this}let v=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-x)/v,this.z=(h-f)/v,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GS extends bo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const o=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new zv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends GS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Bv extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WS extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],_=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||u!==m||f!==_){let p=1-a;const c=l*h+u*m+f*_+d*x,v=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const b=Math.sqrt(g),C=Math.atan2(b,c*v);p=Math.sin(p*C)/b,a=Math.sin(a*C)/b}const M=a*v;if(l=l*p+h*M,u=u*p+m*M,f=f*p+_*M,d=d*p+x*M,p===1-a){const b=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=b,u*=b,f*=b,d*=b}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=o[s],h=o[s+1],m=o[s+2],_=o[s+3];return e[n]=a*_+f*d+l*m-u*h,e[n+1]=l*_+f*h+u*d-a*m,e[n+2]=u*_+f*m+a*h-l*d,e[n+3]=f*_-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*f*d+u*m*_,this._y=u*m*d-h*f*_,this._z=u*f*_+h*m*d,this._w=u*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+u*m*_,this._y=u*m*d-h*f*_,this._z=u*f*_-h*m*d,this._w=u*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-u*m*_,this._y=u*m*d+h*f*_,this._z=u*f*_+h*m*d,this._w=u*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-u*m*_,this._y=u*m*d+h*f*_,this._z=u*f*_-h*m*d,this._w=u*f*d+h*m*_;break;case"YZX":this._x=h*f*d+u*m*_,this._y=u*m*d+h*f*_,this._z=u*f*_-h*m*d,this._w=u*f*d-h*m*_;break;case"XZY":this._x=h*f*d-u*m*_,this._y=u*m*d-h*f*_,this._z=u*f*_+h*m*d,this._w=u*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),f=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*f,this.y=i+l*f+a*u-o*d,this.z=r+l*d+o*f-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nu=new k,up=new Fs;class Os{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(En.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(En.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=En.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,En):En.fromBufferAttribute(o,s),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),la.subVectors(this.max,Vo),Lr.subVectors(e.a,Vo),Dr.subVectors(e.b,Vo),Nr.subVectors(e.c,Vo),mi.subVectors(Dr,Lr),gi.subVectors(Nr,Dr),Zi.subVectors(Lr,Nr);let n=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Zi.z,Zi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Zi.z,0,-Zi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Zi.y,Zi.x,0];return!Uu(n,Lr,Dr,Nr,la)||(n=[1,0,0,0,1,0,0,0,1],!Uu(n,Lr,Dr,Nr,la))?!1:(ua.crossVectors(mi,gi),n=[ua.x,ua.y,ua.z],Uu(n,Lr,Dr,Nr,la))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,aa=new Os,Lr=new k,Dr=new k,Nr=new k,mi=new k,gi=new k,Zi=new k,Vo=new k,la=new k,ua=new k,Qi=new k;function Uu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Qi.fromArray(t,o);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),u=n.dot(Qi),f=i.dot(Qi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const XS=new Os,Go=new k,Iu=new k;class Vl{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const n=Go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Iu)),this.expandByPoint(Go.copy(e.center).sub(Iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new k,Fu=new k,ca=new k,vi=new k,Ou=new k,fa=new k,ku=new k;class Hv{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,n),Yn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fu.copy(e).add(n).multiplyScalar(.5),ca.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(Fu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(ca),a=vi.dot(this.direction),l=-vi.dot(ca),u=vi.lengthSq(),f=Math.abs(1-s*s);let d,h,m,_;if(f>0)if(d=s*l-a,h=s*a-l,_=o*f,d>=0)if(h>=-_)if(h<=_){const x=1/f;d*=x,h*=x,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fu).addScaledVector(ca,h),m}intersectSphere(e,n){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(o=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(o=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,n,i,r,o){Ou.subVectors(n,e),fa.subVectors(i,e),ku.crossVectors(Ou,fa);let s=this.direction.dot(ku),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(fa.crossVectors(vi,fa));if(l<0)return null;const u=a*this.direction.dot(Ou.cross(vi));if(u<0||l+u>s)return null;const f=-a*vi.dot(ku);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,o,s,a,l,u,f,d,h,m,_,x,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,f,d,h,m,_,x,p)}set(e,n,i,r,o,s,a,l,u,f,d,h,m,_,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=_,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),o=1/Ur.setFromMatrixColumn(e,1).length(),s=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*f,m=s*d,_=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+_*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=_+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=u*f,x=u*d;n[0]=h+x*a,n[4]=_*a-m,n[8]=s*u,n[1]=s*d,n[5]=s*f,n[9]=-a,n[2]=m*a-_,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=u*f,x=u*d;n[0]=h-x*a,n[4]=-s*d,n[8]=_+m*a,n[1]=m+_*a,n[5]=s*f,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*f,m=s*d,_=a*f,x=a*d;n[0]=l*f,n[4]=_*u-m,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=m*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,_=a*l,x=a*u;n[0]=l*f,n[4]=x-h*d,n[8]=_*d+m,n[1]=d,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,m=s*u,_=a*l,x=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=s*f,n[9]=m*d-_,n[2]=_*d-m,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jS,e,YS)}lookAt(e,n,i){const r=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),_i.crossVectors(i,nn),_i.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),_i.crossVectors(i,nn)),_i.normalize(),da.crossVectors(nn,_i),r[0]=_i.x,r[4]=da.x,r[8]=nn.x,r[1]=_i.y,r[5]=da.y,r[9]=nn.y,r[2]=_i.z,r[6]=da.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],c=i[14],v=i[3],g=i[7],M=i[11],b=i[15],C=r[0],w=r[4],L=r[8],T=r[12],S=r[1],I=r[5],W=r[9],D=r[13],Y=r[2],j=r[6],ee=r[10],J=r[14],P=r[3],H=r[7],G=r[11],ne=r[15];return o[0]=s*C+a*S+l*Y+u*P,o[4]=s*w+a*I+l*j+u*H,o[8]=s*L+a*W+l*ee+u*G,o[12]=s*T+a*D+l*J+u*ne,o[1]=f*C+d*S+h*Y+m*P,o[5]=f*w+d*I+h*j+m*H,o[9]=f*L+d*W+h*ee+m*G,o[13]=f*T+d*D+h*J+m*ne,o[2]=_*C+x*S+p*Y+c*P,o[6]=_*w+x*I+p*j+c*H,o[10]=_*L+x*W+p*ee+c*G,o[14]=_*T+x*D+p*J+c*ne,o[3]=v*C+g*S+M*Y+b*P,o[7]=v*w+g*I+M*j+b*H,o[11]=v*L+g*W+M*ee+b*G,o[15]=v*T+g*D+M*J+b*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],c=e[15];return _*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*f-o*l*f)+p*(+n*u*d-n*a*m-o*s*d+i*s*m+o*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*s*d-i*s*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],c=e[15],v=d*p*u-x*h*u+x*l*m-a*p*m-d*l*c+a*h*c,g=_*h*u-f*p*u-_*l*m+s*p*m+f*l*c-s*h*c,M=f*x*u-_*d*u+_*a*m-s*x*m-f*a*c+s*d*c,b=_*d*l-f*x*l-_*a*h+s*x*h+f*a*p-s*d*p,C=n*v+i*g+r*M+o*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=v*w,e[1]=(x*h*o-d*p*o-x*r*m+i*p*m+d*r*c-i*h*c)*w,e[2]=(a*p*o-x*l*o+x*r*u-i*p*u-a*r*c+i*l*c)*w,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(f*p*o-_*h*o+_*r*m-n*p*m-f*r*c+n*h*c)*w,e[6]=(_*l*o-s*p*o-_*r*u+n*p*u+s*r*c-n*l*c)*w,e[7]=(s*h*o-f*l*o+f*r*u-n*h*u-s*r*m+n*l*m)*w,e[8]=M*w,e[9]=(_*d*o-f*x*o-_*i*m+n*x*m+f*i*c-n*d*c)*w,e[10]=(s*x*o-_*a*o+_*i*u-n*x*u-s*i*c+n*a*c)*w,e[11]=(f*a*o-s*d*o-f*i*u+n*d*u+s*i*m-n*a*m)*w,e[12]=b*w,e[13]=(f*x*r-_*d*r+_*i*h-n*x*h-f*i*p+n*d*p)*w,e[14]=(_*a*r-s*x*r-_*i*l+n*x*l+s*i*p-n*a*p)*w,e[15]=(s*d*r-f*a*r+f*i*l-n*d*l-s*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,d=a+a,h=o*u,m=o*f,_=o*d,x=s*f,p=s*d,c=a*d,v=l*u,g=l*f,M=l*d,b=i.x,C=i.y,w=i.z;return r[0]=(1-(x+c))*b,r[1]=(m+M)*b,r[2]=(_-g)*b,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(h+c))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(_+g)*w,r[9]=(p-v)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Ur.set(r[0],r[1],r[2]).length();const s=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const u=1/o,f=1/s,d=1/a;return Tn.elements[0]*=u,Tn.elements[1]*=u,Tn.elements[2]*=u,Tn.elements[4]*=f,Tn.elements[5]*=f,Tn.elements[6]*=f,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,n.setFromRotationMatrix(Tn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=ii){const l=this.elements,u=2*o/(n-e),f=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===ii)m=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===xl)m=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=ii){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(s-o),h=(n+e)*u,m=(i+r)*f;let _,x;if(a===ii)_=(s+o)*d,x=-2*d;else if(a===xl)_=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new k,Tn=new vt,jS=new k(0,0,0),YS=new k(1,1,1),_i=new k,da=new k,nn=new k,cp=new vt,fp=new Fs;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fp.setFromEuler(this),this.setFromQuaternion(fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $S=0;const dp=new k,Ir=new Fs,$n=new vt,ha=new k,Wo=new k,qS=new k,KS=new Fs,hp=new k(1,0,0),pp=new k(0,1,0),mp=new k(0,0,1),gp={type:"added"},ZS={type:"removed"},Fr={type:"childadded",child:null},zu={type:"childremoved",child:null};class en extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new k,n=new ci,i=new Fs,r=new k(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ie}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(mp,e)}translateOnAxis(e,n){return dp.copy(e).applyQuaternion(this.quaternion),this.position.add(dp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ha.copy(e):ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Wo,ha,this.up):$n.lookAt(ha,Wo,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix($n),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZS),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new k(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new k,qn=new k,Bu=new k,Kn=new k,Or=new k,kr=new k,vp=new k,Hu=new k,Vu=new k,Gu=new k;class Hn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wn.subVectors(e,n),r.cross(wn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){wn.subVectors(r,n),qn.subVectors(i,n),Bu.subVectors(e,n);const s=wn.dot(wn),a=wn.dot(qn),l=wn.dot(Bu),u=qn.dot(qn),f=qn.dot(Bu),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,m=(u*l-a*f)*h,_=(s*f-a*l)*h;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Kn.x),l.addScaledVector(s,Kn.y),l.addScaledVector(a,Kn.z),l)}static isFrontFacing(e,n,i,r){return wn.subVectors(i,n),qn.subVectors(e,n),wn.cross(qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),wn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Or.subVectors(r,i),kr.subVectors(o,i),Hu.subVectors(e,i);const l=Or.dot(Hu),u=kr.dot(Hu);if(l<=0&&u<=0)return n.copy(i);Vu.subVectors(e,r);const f=Or.dot(Vu),d=kr.dot(Vu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(Or,s);Gu.subVectors(e,o);const m=Or.dot(Gu),_=kr.dot(Gu);if(_>=0&&m<=_)return n.copy(o);const x=m*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(kr,a);const p=f*_-m*d;if(p<=0&&d-f>=0&&m-_>=0)return vp.subVectors(o,r),a=(d-f)/(d-f+(m-_)),n.copy(r).addScaledVector(vp,a);const c=1/(p+x+h);return s=x*c,a=h*c,n.copy(i).addScaledVector(Or,s).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=FS(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Wu(s,o,e+1/3),this.g=Wu(s,o,e),this.b=Wu(s,o,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,n=kn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=Gv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}copyLinearToSRGB(e){return this.r=Lu(e.r),this.g=Lu(e.g),this.b=Lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Yt(Ft.r*255,0,255))*65536+Math.round(Yt(Ft.g*255,0,255))*256+Math.round(Yt(Ft.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,o=Ft.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=f<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=kn){qe.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+n,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xi),e.getHSL(pa);const i=Pu(xi.h,pa.h,n),r=Pu(xi.s,pa.s,n),o=Pu(xi.l,pa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ye;Ye.NAMES=Gv;let QS=0;class ks extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=fo,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Kc,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==Kc&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ip&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wv extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new k,ma=new Ge;class Dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return kS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ma.fromBufferAttribute(this,n),ma.applyMatrix3(e),this.setXY(n,ma.x,ma.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rp&&(e.usage=this.usage),e}}class Xv extends Dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jv extends Dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vr extends Dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let JS=0;const dn=new vt,Xu=new en,zr=new k,rn=new Os,Xo=new Os,Et=new k;class di extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kv(e)?jv:Xv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ie().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,n,i){return dn.makeTranslation(e,n,i),this.applyMatrix4(dn),this}scale(e,n,i){return dn.makeScale(e,n,i),this.applyMatrix4(dn),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new vr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(rn.min,Xo.min),rn.expandByPoint(Et),Et.addVectors(rn.max,Xo.max),rn.expandByPoint(Et)):(rn.expandByPoint(Xo.min),rn.expandByPoint(Xo.max))}rn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Et.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Et));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Et.fromBufferAttribute(a,u),l&&(zr.fromBufferAttribute(e,u),Et.add(zr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new k,l[L]=new k;const u=new k,f=new k,d=new k,h=new Ge,m=new Ge,_=new Ge,x=new k,p=new k;function c(L,T,S){u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.fromBufferAttribute(o,L),m.fromBufferAttribute(o,T),_.fromBufferAttribute(o,S),f.sub(u),d.sub(u),m.sub(h),_.sub(h);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(I),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(I),a[L].add(x),a[T].add(x),a[S].add(x),l[L].add(p),l[T].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,T=v.length;L<T;++L){const S=v[L],I=S.start,W=S.count;for(let D=I,Y=I+W;D<Y;D+=3)c(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const g=new k,M=new k,b=new k,C=new k;function w(L){b.fromBufferAttribute(r,L),C.copy(b);const T=a[L];g.copy(T),g.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(C,T);const I=M.dot(l[L])<0?-1:1;s.setXYZW(L,g.x,g.y,g.z,I)}for(let L=0,T=v.length;L<T;++L){const S=v[L],I=S.start,W=S.count;for(let D=I,Y=I+W;D<Y;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new k,o=new k,s=new k,a=new k,l=new k,u=new k,f=new k,d=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Et.fromBufferAttribute(e,n),Et.normalize(),e.setXYZ(n,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let c=0;c<f;c++)h[_++]=u[m++]}return new Dn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],d=o[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _p=new vt,Ji=new Hv,ga=new Vl,xp=new k,Br=new k,Hr=new k,Vr=new k,ju=new k,va=new k,_a=new Ge,xa=new Ge,ya=new Ge,yp=new k,Sp=new k,Mp=new k,Sa=new k,Ma=new k;class ri extends en{constructor(e=new di,n=new Wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){va.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],d=o[l];f!==0&&(ju.fromBufferAttribute(d,e),s?va.addScaledVector(ju,f):va.addScaledVector(ju.sub(n),f))}n.add(va)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(o),Ji.copy(e.ray).recast(e.near),!(ga.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ga,xp)===null||Ji.origin.distanceToSquared(xp)>(e.far-e.near)**2))&&(_p.copy(o).invert(),Ji.copy(e.ray).applyMatrix4(_p),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ji)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],c=s[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,b=g;M<b;M+=3){const C=a.getX(M),w=a.getX(M+1),L=a.getX(M+2);r=Ea(this,c,e,i,u,f,d,C,w,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,c=x;p<c;p+=3){const v=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=Ea(this,s,e,i,u,f,d,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],c=s[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,b=g;M<b;M+=3){const C=M,w=M+1,L=M+2;r=Ea(this,c,e,i,u,f,d,C,w,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,c=x;p<c;p+=3){const v=p,g=p+1,M=p+2;r=Ea(this,s,e,i,u,f,d,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function eM(t,e,n,i,r,o,s,a){let l;if(e.side===Qt?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Gi,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ma);return u<n.near||u>n.far?null:{distance:u,point:Ma.clone(),object:t}}function Ea(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Br),t.getVertexPosition(l,Hr),t.getVertexPosition(u,Vr);const f=eM(t,e,n,i,Br,Hr,Vr,Sa);if(f){r&&(_a.fromBufferAttribute(r,a),xa.fromBufferAttribute(r,l),ya.fromBufferAttribute(r,u),f.uv=Hn.getInterpolation(Sa,Br,Hr,Vr,_a,xa,ya,new Ge)),o&&(_a.fromBufferAttribute(o,a),xa.fromBufferAttribute(o,l),ya.fromBufferAttribute(o,u),f.uv1=Hn.getInterpolation(Sa,Br,Hr,Vr,_a,xa,ya,new Ge)),s&&(yp.fromBufferAttribute(s,a),Sp.fromBufferAttribute(s,l),Mp.fromBufferAttribute(s,u),f.normal=Hn.getInterpolation(Sa,Br,Hr,Vr,yp,Sp,Mp,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new k,materialIndex:0};Hn.getNormal(Br,Hr,Vr,d.normal),f.face=d}return f}class zs extends di{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new vr(u,3)),this.setAttribute("normal",new vr(f,3)),this.setAttribute("uv",new vr(d,2));function _(x,p,c,v,g,M,b,C,w,L,T){const S=M/w,I=b/L,W=M/2,D=b/2,Y=C/2,j=w+1,ee=L+1;let J=0,P=0;const H=new k;for(let G=0;G<ee;G++){const ne=G*I-D;for(let de=0;de<j;de++){const ze=de*S-W;H[x]=ze*v,H[p]=ne*g,H[c]=Y,u.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[c]=C>0?1:-1,f.push(H.x,H.y,H.z),d.push(de/w),d.push(1-G/L),J+=1}}for(let G=0;G<L;G++)for(let ne=0;ne<w;ne++){const de=h+ne+j*G,ze=h+ne+j*(G+1),V=h+(ne+1)+j*(G+1),Q=h+(ne+1)+j*G;l.push(de,ze,Q),l.push(ze,V,Q),P+=6}a.addGroup(m,P,T),m+=P,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=wo(t[n]);for(const r in i)e[r]=i[r]}return e}function tM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Yv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const nM={clone:wo,merge:zt};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $v extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new k,Ep=new Ge,Tp=new Ge;class mn extends $v{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,n){return this.getViewBounds(e,Ep,Tp),n.subVectors(Tp,Ep)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ru*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,Wr=1;class oM extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Gr,Wr,e,n);r.layers=this.layers,this.add(r);const o=new mn(Gr,Wr,e,n);o.layers=this.layers,this.add(o);const s=new mn(Gr,Wr,e,n);s.layers=this.layers,this.add(s);const a=new mn(Gr,Wr,e,n);a.layers=this.layers,this.add(a);const l=new mn(Gr,Wr,e,n);l.layers=this.layers,this.add(l);const u=new mn(Gr,Wr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class qv extends Jt{constructor(e,n,i,r,o,s,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Mo,super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sM extends Er{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zs(5,5,5),o=new Wi({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ki});o.uniforms.tEquirect.value=n;const s=new ri(r,o),a=n.minFilter;return n.minFilter===hr&&(n.minFilter=Pn),new oM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Yu=new k,aM=new k,lM=new Ie;class or{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yu.subVectors(i,n).cross(aM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lM.getNormalMatrix(e),r=this.coplanarPoint(Yu).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Vl,Ta=new k;class Kv{constructor(e=new or,n=new or,i=new or,r=new or,o=new or,s=new or){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],c=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-o,h-u,p-m,M-c).normalize(),i[1].setComponents(l+o,h+u,p+m,M+c).normalize(),i[2].setComponents(l+s,h+f,p+_,M+v).normalize(),i[3].setComponents(l-s,h-f,p-_,M-v).normalize(),i[4].setComponents(l-a,h-d,p-x,M-g).normalize(),n===ii)i[5].setComponents(l+a,h+d,p+x,M+g).normalize();else if(n===xl)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ta.x=r.normal.x>0?e.max.x:e.min.x,Ta.y=r.normal.y>0?e.max.y:e.min.y,Ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zv(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function uM(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const f=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),d.count===-1&&h.length===0&&t.bufferSubData(u,0,f),h.length!==0){for(let m=0,_=h.length;m<_;m++){const x=h[m];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class Gl extends di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,m=[],_=[],x=[],p=[];for(let c=0;c<f;c++){const v=c*h-s;for(let g=0;g<u;g++){const M=g*d-o;_.push(M,-v,0),x.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const g=v+u*c,M=v+u*(c+1),b=v+1+u*(c+1),C=v+1+u*c;m.push(g,M,C),m.push(M,b,C)}this.setIndex(m),this.setAttribute("position",new vr(_,3)),this.setAttribute("normal",new vr(x,3)),this.setAttribute("uv",new vr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,AE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,V1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:cM,alphahash_pars_fragment:fM,alphamap_fragment:dM,alphamap_pars_fragment:hM,alphatest_fragment:pM,alphatest_pars_fragment:mM,aomap_fragment:gM,aomap_pars_fragment:vM,batching_pars_vertex:_M,batching_vertex:xM,begin_vertex:yM,beginnormal_vertex:SM,bsdfs:MM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:wM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:RM,color_fragment:PM,color_pars_fragment:bM,color_pars_vertex:LM,color_vertex:DM,common:NM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:IM,displacementmap_pars_vertex:FM,displacementmap_vertex:OM,emissivemap_fragment:kM,emissivemap_pars_fragment:zM,colorspace_fragment:BM,colorspace_pars_fragment:HM,envmap_fragment:VM,envmap_common_pars_fragment:GM,envmap_pars_fragment:WM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:iE,envmap_vertex:jM,fog_vertex:YM,fog_pars_vertex:$M,fog_fragment:qM,fog_pars_fragment:KM,gradientmap_pars_fragment:ZM,lightmap_fragment:QM,lightmap_pars_fragment:JM,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:rE,lights_toon_pars_fragment:oE,lights_phong_fragment:sE,lights_phong_pars_fragment:aE,lights_physical_fragment:lE,lights_physical_pars_fragment:uE,lights_fragment_begin:cE,lights_fragment_maps:fE,lights_fragment_end:dE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:gE,map_fragment:vE,map_pars_fragment:_E,map_particle_fragment:xE,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:EE,morphcolor_vertex:TE,morphnormal_vertex:wE,morphtarget_pars_vertex:AE,morphtarget_vertex:CE,normal_fragment_begin:RE,normal_fragment_maps:PE,normal_pars_fragment:bE,normal_pars_vertex:LE,normal_vertex:DE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:IE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:OE,opaque_fragment:kE,packing:zE,premultiplied_alpha_fragment:BE,project_vertex:HE,dithering_fragment:VE,dithering_pars_fragment:GE,roughnessmap_fragment:WE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:YE,shadowmap_vertex:$E,shadowmask_pars_fragment:qE,skinbase_vertex:KE,skinning_pars_vertex:ZE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:r1,transmission_pars_fragment:o1,uv_pars_fragment:s1,uv_pars_vertex:a1,uv_vertex:l1,worldpos_vertex:u1,background_vert:c1,background_frag:f1,backgroundCube_vert:d1,backgroundCube_frag:h1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:v1,distanceRGBA_vert:_1,distanceRGBA_frag:x1,equirect_vert:y1,equirect_frag:S1,linedashed_vert:M1,linedashed_frag:E1,meshbasic_vert:T1,meshbasic_frag:w1,meshlambert_vert:A1,meshlambert_frag:C1,meshmatcap_vert:R1,meshmatcap_frag:P1,meshnormal_vert:b1,meshnormal_frag:L1,meshphong_vert:D1,meshphong_frag:N1,meshphysical_vert:U1,meshphysical_frag:I1,meshtoon_vert:F1,meshtoon_frag:O1,points_vert:k1,points_frag:z1,shadow_vert:B1,shadow_frag:H1,sprite_vert:V1,sprite_frag:G1},le={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},zn={basic:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:zt([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:zt([le.lights,le.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};zn.physical={uniforms:zt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const wa={r:0,b:0,g:0},tr=new ci,W1=new vt;function X1(t,e,n,i,r,o,s){const a=new Ye(0);let l=o===!0?0:1,u,f,d=null,h=0,m=null;function _(p,c){let v=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Bl)?(f===void 0&&(f=new ri(new zs(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:wo(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),tr.copy(c.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(W1.makeRotationFromEuler(tr)),f.material.toneMapped=qe.getTransfer(g.colorSpace)!==et,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new ri(new Gl(2,2),new Wi({name:"BackgroundMaterial",uniforms:wo(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=qe.getTransfer(g.colorSpace)!==et,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,c){p.getRGB(wa,Yv(t)),i.buffers.color.setClear(wa.r,wa.g,wa.b,c,s)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function j1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(S,I,W,D,Y){let j=!1;const ee=d(D,W,I);o!==ee&&(o=ee,u(o.object)),j=m(S,D,W,Y),j&&_(S,D,W,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,M(S,I,W,D),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function d(S,I,W){const D=W.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let j=Y[I.id];j===void 0&&(j={},Y[I.id]=j);let ee=j[D];return ee===void 0&&(ee=h(l()),j[D]=ee),ee}function h(S){const I=[],W=[],D=[];for(let Y=0;Y<n;Y++)I[Y]=0,W[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:D,object:S,attributes:{},index:null}}function m(S,I,W,D){const Y=o.attributes,j=I.attributes;let ee=0;const J=W.getAttributes();for(const P in J)if(J[P].location>=0){const G=Y[P];let ne=j[P];if(ne===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),G===void 0||G.attribute!==ne||ne&&G.data!==ne.data)return!0;ee++}return o.attributesNum!==ee||o.index!==D}function _(S,I,W,D){const Y={},j=I.attributes;let ee=0;const J=W.getAttributes();for(const P in J)if(J[P].location>=0){let G=j[P];G===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(G=S.instanceColor));const ne={};ne.attribute=G,G&&G.data&&(ne.data=G.data),Y[P]=ne,ee++}o.attributes=Y,o.attributesNum=ee,o.index=D}function x(){const S=o.newAttributes;for(let I=0,W=S.length;I<W;I++)S[I]=0}function p(S){c(S,0)}function c(S,I){const W=o.newAttributes,D=o.enabledAttributes,Y=o.attributeDivisors;W[S]=1,D[S]===0&&(t.enableVertexAttribArray(S),D[S]=1),Y[S]!==I&&(t.vertexAttribDivisor(S,I),Y[S]=I)}function v(){const S=o.newAttributes,I=o.enabledAttributes;for(let W=0,D=I.length;W<D;W++)I[W]!==S[W]&&(t.disableVertexAttribArray(W),I[W]=0)}function g(S,I,W,D,Y,j,ee){ee===!0?t.vertexAttribIPointer(S,I,W,Y,j):t.vertexAttribPointer(S,I,W,D,Y,j)}function M(S,I,W,D){x();const Y=D.attributes,j=W.getAttributes(),ee=I.defaultAttributeValues;for(const J in j){const P=j[J];if(P.location>=0){let H=Y[J];if(H===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(H=S.instanceColor)),H!==void 0){const G=H.normalized,ne=H.itemSize,de=e.get(H);if(de===void 0)continue;const ze=de.buffer,V=de.type,Q=de.bytesPerElement,ce=V===t.INT||V===t.UNSIGNED_INT||H.gpuType===bv;if(H.isInterleavedBufferAttribute){const oe=H.data,Ce=oe.stride,Re=H.offset;if(oe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<P.locationSize;Oe++)c(P.location+Oe,oe.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Oe=0;Oe<P.locationSize;Oe++)p(P.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Oe=0;Oe<P.locationSize;Oe++)g(P.location+Oe,ne/P.locationSize,V,G,Ce*Q,(Re+ne/P.locationSize*Oe)*Q,ce)}else{if(H.isInstancedBufferAttribute){for(let oe=0;oe<P.locationSize;oe++)c(P.location+oe,H.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let oe=0;oe<P.locationSize;oe++)p(P.location+oe);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let oe=0;oe<P.locationSize;oe++)g(P.location+oe,ne/P.locationSize,V,G,ne*Q,ne/P.locationSize*oe*Q,ce)}}else if(ee!==void 0){const G=ee[J];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(P.location,G);break;case 3:t.vertexAttrib3fv(P.location,G);break;case 4:t.vertexAttrib4fv(P.location,G);break;default:t.vertexAttrib1fv(P.location,G)}}}}v()}function b(){L();for(const S in i){const I=i[S];for(const W in I){const D=I[W];for(const Y in D)f(D[Y].object),delete D[Y];delete I[W]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const W in I){const D=I[W];for(const Y in D)f(D[Y].object),delete D[Y];delete I[W]}delete i[S.id]}function w(S){for(const I in i){const W=i[I];if(W[S.id]===void 0)continue;const D=W[S.id];for(const Y in D)f(D[Y].object),delete D[Y];delete W[S.id]}}function L(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Y1(t,e,n){let i;function r(l){i=l}function o(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function s(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function a(l,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(l[h],u[h]);else{d.multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let m=0;m<f;m++)h+=u[m];n.update(h,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function $1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=n.precision!==void 0?n.precision:"highp";const a=o(s);a!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",a,"instead."),s=a);const l=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),p=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),c=f>0,v=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:p,vertexTextures:c,maxSamples:v}}function q1(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new or,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||_===null||_.length===0||o&&!p)o?f(null):u();else{const v=o?0:i,g=v*4;let M=c.clippingState||null;l.value=M,M=f(_,h,g,m);for(let b=0;b!==g;++b)M[b]=n[b];c.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const c=m+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,M=m;g!==x;++g,M+=4)s.copy(d[g]).applyMatrix4(v,a),s.normal.toArray(p,M),p[M+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function K1(t){let e=new WeakMap;function n(s,a){return a===Zc?s.mapping=Mo:a===Qc&&(s.mapping=Eo),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Zc||a===Qc)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new sM(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Z1 extends $v{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ro=4,wp=[.125,.215,.35,.446,.526,.582],lr=20,$u=new Z1,Ap=new Ye;let qu=null,Ku=0,Zu=0,Qu=!1;const sr=(1+Math.sqrt(5))/2,Xr=1/sr,Cp=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,sr,Xr),new k(0,sr,-Xr),new k(Xr,0,sr),new k(-Xr,0,sr),new k(sr,Xr,0),new k(-sr,Xr,0)];class Rp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,Ku,Zu),this._renderer.xr.enabled=Qu,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Mo||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ml,format:Vn,colorSpace:$i,depthBuffer:!1},r=Pp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q1(o)),this._blurMaterial=J1(o,e,n)}return r}_compileMaterial(e){const n=new ri(this._lodPlanes[0],e);this._renderer.compile(n,$u)}_sceneToCubeUV(e,n,i,r){const a=new mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Ap),f.toneMapping=zi,f.autoClear=!1;const m=new Wv({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new ri(new zs,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Ap),x=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;Aa(r,v*g,c>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Mo||e.mapping===Eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ri(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Aa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,$u)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Cp[(r-1)%Cp.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ri(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*lr-1),x=o/_,p=isFinite(o)?1+Math.floor(f*x):lr;p>lr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${lr}`);const c=[];let v=0;for(let w=0;w<lr;++w){const L=w/x,T=Math.exp(-L*L/2);c.push(T),w===0?v+=T:w<p&&(v+=2*T)}for(let w=0;w<c.length;w++)c[w]=c[w]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const M=this._sizeLods[r],b=3*M*(r>g-ro?r-g+ro:0),C=4*(this._cubeSize-M);Aa(n,b,C,3*M,2*M),l.setRenderTarget(n),l.render(d,$u)}}function Q1(t){const e=[],n=[],i=[];let r=t;const o=t-ro+1+wp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-ro?l=wp[s-t+ro-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,x=3,p=2,c=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),M=new Float32Array(c*_*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,L=C>2?0:-1,T=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];v.set(T,x*_*C),g.set(h,p*_*C);const S=[C,C,C,C,C,C];M.set(S,c*_*C)}const b=new di;b.setAttribute("position",new Dn(v,x)),b.setAttribute("uv",new Dn(g,p)),b.setAttribute("faceIndex",new Dn(M,c)),e.push(b),r>ro&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pp(t,e,n){const i=new Er(t,e,n);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function J1(t,e,n){const i=new Float32Array(lr),r=new k(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function bp(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Lp(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Zc||l===Qc,f=l===Mo||l===Eo;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Rp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return u&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Rp(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function tT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nT(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,c=x.length;p<c;p++)e.remove(x[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,c=x.length;p<c;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,M=v.length;g<M;g+=3){const b=v[g+0],C=v[g+1],w=v[g+2];h.push(b,C,C,w,w,b)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const b=g+0,C=g+1,w=g+2;h.push(b,C,C,w,w,b)}}else return;const p=new(kv(h)?jv:Xv)(h,1);p.version=x;const c=o.get(d);c&&e.remove(c),o.set(d,p)}function f(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function iT(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,h){t.drawElements(i,h,o,d*s),n.update(h,i,1)}function u(d,h,m){m!==0&&(t.drawElementsInstanced(i,h,o,d*s,m),n.update(h,i,m))}function f(d,h,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<m;x++)this.render(d[x]/s,h[x]);else{_.multiDrawElementsWEBGL(i,h,0,o,d,0,m);let x=0;for(let p=0;p<m;p++)x+=h[p];n.update(x,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function rT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oT(t,e,n){const i=new WeakMap,r=new Ct;function o(s,a,l){const u=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),p===!0&&(M=3);let b=a.attributes.position.count*M,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*C*4*d),L=new Bv(w,b,C,d);L.type=Pi,L.needsUpdate=!0;const T=M*4;for(let I=0;I<d;I++){const W=c[I],D=v[I],Y=g[I],j=b*C*4*I;for(let ee=0;ee<W.count;ee++){const J=ee*T;_===!0&&(r.fromBufferAttribute(W,ee),w[j+J+0]=r.x,w[j+J+1]=r.y,w[j+J+2]=r.z,w[j+J+3]=0),x===!0&&(r.fromBufferAttribute(D,ee),w[j+J+4]=r.x,w[j+J+5]=r.y,w[j+J+6]=r.z,w[j+J+7]=0),p===!0&&(r.fromBufferAttribute(Y,ee),w[j+J+8]=r.x,w[j+J+9]=r.y,w[j+J+10]=r.z,w[j+J+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new Ge(b,C)},i.set(a,h),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let p=0;p<u.length;p++)_+=u[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function sT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class Qv extends Jt{constructor(e,n,i,r,o,s,a,l,u,f){if(f=f!==void 0?f:ho,f!==ho&&f!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ho&&(i=To),i===void 0&&f===As&&(i=Us),super(null,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jv=new Jt,e_=new Qv(1,1);e_.compareFunction=Ov;const t_=new Bv,n_=new WS,i_=new qv,Dp=[],Np=[],Up=new Float32Array(16),Ip=new Float32Array(9),Fp=new Float32Array(4);function Lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Dp[r];if(o===void 0&&(o=new Float32Array(r),Dp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wl(t,e){let n=Np[e];n===void 0&&(n=new Int32Array(e),Np[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;Fp.set(i),t.uniformMatrix2fv(this.addr,!1,Fp),St(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;Ip.set(i),t.uniformMatrix3fv(this.addr,!1,Ip),St(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;Up.set(i),t.uniformMatrix4fv(this.addr,!1,Up),St(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function _T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?e_:Jv;n.setTexture2D(e||o,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||n_,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||i_,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||t_,r)}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return _T;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return wT}}function CT(t,e){t.uniform1fv(this.addr,e)}function RT(t,e){const n=Lo(e,this.size,2);t.uniform2fv(this.addr,n)}function PT(t,e){const n=Lo(e,this.size,3);t.uniform3fv(this.addr,n)}function bT(t,e){const n=Lo(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=Lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DT(t,e){const n=Lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function NT(t,e){const n=Lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function UT(t,e){t.uniform1iv(this.addr,e)}function IT(t,e){t.uniform2iv(this.addr,e)}function FT(t,e){t.uniform3iv(this.addr,e)}function OT(t,e){t.uniform4iv(this.addr,e)}function kT(t,e){t.uniform1uiv(this.addr,e)}function zT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function VT(t,e,n){const i=this.cache,r=e.length,o=Wl(n,r);yt(i,o)||(t.uniform1iv(this.addr,o),St(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Jv,o[s])}function GT(t,e,n){const i=this.cache,r=e.length,o=Wl(n,r);yt(i,o)||(t.uniform1iv(this.addr,o),St(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||n_,o[s])}function WT(t,e,n){const i=this.cache,r=e.length,o=Wl(n,r);yt(i,o)||(t.uniform1iv(this.addr,o),St(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||i_,o[s])}function XT(t,e,n){const i=this.cache,r=e.length,o=Wl(n,r);yt(i,o)||(t.uniform1iv(this.addr,o),St(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||t_,o[s])}function jT(t){switch(t){case 5126:return CT;case 35664:return RT;case 35665:return PT;case 35666:return bT;case 35674:return LT;case 35675:return DT;case 35676:return NT;case 5124:case 35670:return UT;case 35667:case 35671:return IT;case 35668:case 35672:return FT;case 35669:case 35673:return OT;case 5125:return kT;case 36294:return zT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AT(n.type)}}class $T{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}}class qT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function Op(t,e){t.seq.push(e),t.map[e.id]=e}function KT(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const o=Ju.exec(i),s=Ju.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Op(n,u===void 0?new YT(a,t,e):new $T(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new qT(a),Op(n,d)),n=d}}}class Va{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);KT(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function kp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZT=37297;let QT=0;function JT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function ew(t){const e=qe.getPrimaries(qe.workingColorSpace),n=qe.getPrimaries(t);let i;switch(e===n?i="":e===_l&&n===vl?i="LinearDisplayP3ToLinearSRGB":e===vl&&n===_l&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case Hl:return[i,"LinearTransferOETF"];case kn:case nd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function zp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+JT(t.getShaderSource(e),s)}else return r}function tw(t,e){const n=ew(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nw(t,e){let n;switch(e){case aS:n="Linear";break;case lS:n="Reinhard";break;case uS:n="OptimizedCineon";break;case cS:n="ACESFilmic";break;case dS:n="AgX";break;case hS:n="Neutral";break;case fS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function iw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function rw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ow(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Zo(t){return t!==""}function Bp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(t){return t.replace(sw,lw)}const aw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lw(t,e){let n=Ue[e];if(n===void 0){const i=aw.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nf(n)}const uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(t){return t.replace(uw,cw)}function cw(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Gp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Av?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function dw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Mo:case Eo:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function pw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Cv:e="ENVMAP_BLENDING_MULTIPLY";break;case oS:e="ENVMAP_BLENDING_MIX";break;case sS:e="ENVMAP_BLENDING_ADD";break}return e}function mw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gw(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=fw(n),u=dw(n),f=hw(n),d=pw(n),h=mw(n),m=iw(n),_=rw(o),x=r.createProgram();let p,c,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zo).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zo).join(`
`),c.length>0&&(c+=`
`)):(p=[Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),c=[Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==zi?nw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,tw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zo).join(`
`)),s=nf(s),s=Bp(s,n),s=Hp(s,n),a=nf(a),a=Bp(a,n),a=Hp(a,n),s=Vp(s),a=Vp(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=v+p+s,M=v+c+a,b=kp(r,r.VERTEX_SHADER,g),C=kp(r,r.FRAGMENT_SHADER,M);r.attachShader(x,b),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(I){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),D=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(C).trim();let j=!0,ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,C);else{const J=zp(r,b,"vertex"),P=zp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+J+`
`+P)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(D===""||Y==="")&&(ee=!1);ee&&(I.diagnostics={runnable:j,programLog:W,vertexShader:{log:D,prefix:p},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(b),r.deleteShader(C),L=new Va(r,x),T=ow(r,x)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,ZT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=C,this}let vw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xw(e),n.set(e,i)),i}}class xw{constructor(e){this.id=vw++,this.code=e,this.usedTimes=0}}function yw(t,e,n,i,r,o,s){const a=new Vv,l=new _w,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function p(T,S,I,W,D){const Y=W.fog,j=D.geometry,ee=T.isMeshStandardMaterial?W.environment:null,J=(T.isMeshStandardMaterial?n:e).get(T.envMap||ee),P=J&&J.mapping===Bl?J.image.height:null,H=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const G=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ne=G!==void 0?G.length:0;let de=0;j.morphAttributes.position!==void 0&&(de=1),j.morphAttributes.normal!==void 0&&(de=2),j.morphAttributes.color!==void 0&&(de=3);let ze,V,Q,ce;if(H){const Lt=zn[H];ze=Lt.vertexShader,V=Lt.fragmentShader}else ze=T.vertexShader,V=T.fragmentShader,l.update(T),Q=l.getVertexShaderID(T),ce=l.getFragmentShaderID(T);const oe=t.getRenderTarget(),Ce=D.isInstancedMesh===!0,Re=D.isBatchedMesh===!0,Oe=!!T.map,F=!!T.matcap,Fe=!!J,Me=!!T.aoMap,dt=!!T.lightMap,we=!!T.bumpMap,We=!!T.normalMap,A=!!T.displacementMap,y=!!T.emissiveMap,N=!!T.metalnessMap,X=!!T.roughnessMap,K=T.anisotropy>0,q=T.clearcoat>0,Ee=T.iridescence>0,te=T.sheen>0,xe=T.transmission>0,Te=K&&!!T.anisotropyMap,ae=q&&!!T.clearcoatMap,he=q&&!!T.clearcoatNormalMap,Pe=q&&!!T.clearcoatRoughnessMap,pe=Ee&&!!T.iridescenceMap,me=Ee&&!!T.iridescenceThicknessMap,Be=te&&!!T.sheenColorMap,He=te&&!!T.sheenRoughnessMap,je=!!T.specularMap,Xe=!!T.specularColorMap,nt=!!T.specularIntensityMap,ve=xe&&!!T.transmissionMap,R=xe&&!!T.thicknessMap,se=!!T.gradientMap,re=!!T.alphaMap,_e=T.alphaTest>0,ye=!!T.alphaHash,Ke=!!T.extensions;let it=zi;T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(it=t.toneMapping);const st={shaderID:H,shaderType:T.type,shaderName:T.name,vertexShader:ze,fragmentShader:V,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Re,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,instancingMorph:Ce&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:$i,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:F,envMap:Fe,envMapMode:Fe&&J.mapping,envMapCubeUVHeight:P,aoMap:Me,lightMap:dt,bumpMap:we,normalMap:We,displacementMap:h&&A,emissiveMap:y,normalMapObjectSpace:We&&T.normalMapType===RS,normalMapTangentSpace:We&&T.normalMapType===CS,metalnessMap:N,roughnessMap:X,anisotropy:K,anisotropyMap:Te,clearcoat:q,clearcoatMap:ae,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,iridescence:Ee,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:te,sheenColorMap:Be,sheenRoughnessMap:He,specularMap:je,specularColorMap:Xe,specularIntensityMap:nt,transmission:xe,transmissionMap:ve,thicknessMap:R,gradientMap:se,opaque:T.transparent===!1&&T.blending===fo&&T.alphaToCoverage===!1,alphaMap:re,alphaTest:_e,alphaHash:ye,combine:T.combine,mapUv:Oe&&x(T.map.channel),aoMapUv:Me&&x(T.aoMap.channel),lightMapUv:dt&&x(T.lightMap.channel),bumpMapUv:we&&x(T.bumpMap.channel),normalMapUv:We&&x(T.normalMap.channel),displacementMapUv:A&&x(T.displacementMap.channel),emissiveMapUv:y&&x(T.emissiveMap.channel),metalnessMapUv:N&&x(T.metalnessMap.channel),roughnessMapUv:X&&x(T.roughnessMap.channel),anisotropyMapUv:Te&&x(T.anisotropyMap.channel),clearcoatMapUv:ae&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:He&&x(T.sheenRoughnessMap.channel),specularMapUv:je&&x(T.specularMap.channel),specularColorMapUv:Xe&&x(T.specularColorMap.channel),specularIntensityMapUv:nt&&x(T.specularIntensityMap.channel),transmissionMapUv:ve&&x(T.transmissionMap.channel),thicknessMapUv:R&&x(T.thicknessMap.channel),alphaMapUv:re&&x(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(We||K),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!j.attributes.uv&&(Oe||re),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&qe.getTransfer(T.map.colorSpace)===et,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ei,flipSided:T.side===Qt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ke&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return st.vertexUv1s=u.has(1),st.vertexUv2s=u.has(2),st.vertexUv3s=u.has(3),u.clear(),st}function c(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)S.push(I),S.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(v(S,T),g(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function g(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),T.push(a.mask)}function M(T){const S=_[T.type];let I;if(S){const W=zn[S];I=nM.clone(W.uniforms)}else I=T.uniforms;return I}function b(T,S){let I;for(let W=0,D=f.length;W<D;W++){const Y=f[W];if(Y.cacheKey===S){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new gw(t,S,T,o),f.push(I)),I}function C(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function w(T){l.remove(T)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:M,acquireProgram:b,releaseProgram:C,releaseShaderCache:w,programs:f,dispose:L}}function Sw(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Mw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xp(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,m,_,x,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=_,c.renderOrder=d.renderOrder,c.z=x,c.group=p),e++,c}function a(d,h,m,_,x,p){const c=s(d,h,m,_,x,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,_,x,p){const c=s(d,h,m,_,x,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||Mw),i.length>1&&i.sort(h||Wp),r.length>1&&r.sort(h||Wp)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function Ew(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Xp,t.set(i,[s])):r>=o.length?(s=new Xp,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Tw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ye};break;case"SpotLight":n={position:new k,direction:new k,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function ww(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Aw=0;function Cw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Rw(t){const e=new Tw,n=ww(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,o=new vt,s=new vt;function a(u,f){let d=0,h=0,m=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,x=0,p=0,c=0,v=0,g=0,M=0,b=0,C=0,w=0,L=0;u.sort(Cw);const T=f===!0?Math.PI:1;for(let I=0,W=u.length;I<W;I++){const D=u[I],Y=D.color,j=D.intensity,ee=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=Y.r*j*T,h+=Y.g*j*T,m+=Y.b*j*T;else if(D.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(D.sh.coefficients[P],j);L++}else if(D.isDirectionalLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const H=D.shadow,G=n.get(D);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,i.directionalShadow[_]=G,i.directionalShadowMap[_]=J,i.directionalShadowMatrix[_]=D.shadow.matrix,g++}i.directional[_]=P,_++}else if(D.isSpotLight){const P=e.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(Y).multiplyScalar(j*T),P.distance=ee,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,i.spot[p]=P;const H=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,H.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[p]=H.matrix,D.castShadow){const G=n.get(D);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,i.spotShadow[p]=G,i.spotShadowMap[p]=J,b++}p++}else if(D.isRectAreaLight){const P=e.get(D);P.color.copy(Y).multiplyScalar(j),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),i.rectArea[c]=P,c++}else if(D.isPointLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity*T),P.distance=D.distance,P.decay=D.decay,D.castShadow){const H=D.shadow,G=n.get(D);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,i.pointShadow[x]=G,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=D.shadow.matrix,M++}i.point[x]=P,x++}else if(D.isHemisphereLight){const P=e.get(D);P.skyColor.copy(D.color).multiplyScalar(j*T),P.groundColor.copy(D.groundColor).multiplyScalar(j*T),i.hemi[v]=P,v++}}c>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=m;const S=i.hash;(S.directionalLength!==_||S.pointLength!==x||S.spotLength!==p||S.rectAreaLength!==c||S.hemiLength!==v||S.numDirectionalShadows!==g||S.numPointShadows!==M||S.numSpotShadows!==b||S.numSpotMaps!==C||S.numLightProbes!==L)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=c,i.point.length=x,i.hemi.length=v,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=L,S.directionalLength=_,S.pointLength=x,S.spotLength=p,S.rectAreaLength=c,S.hemiLength=v,S.numDirectionalShadows=g,S.numPointShadows=M,S.numSpotShadows=b,S.numSpotMaps=C,S.numLightProbes=L,i.version=Aw++)}function l(u,f){let d=0,h=0,m=0,_=0,x=0;const p=f.matrixWorldInverse;for(let c=0,v=u.length;c<v;c++){const g=u[c];if(g.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),s.identity(),o.copy(g.matrixWorld),o.premultiply(p),s.extractRotation(o),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(g.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),h++}else if(g.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function jp(t){const e=new Rw(t),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function a(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Pw(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new jp(t),e.set(r,[a])):o>=s.length?(a=new jp(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class bw extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lw extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Uw(t,e,n){let i=new Kv;const r=new Ge,o=new Ge,s=new Ct,a=new bw({depthPacking:AS}),l=new Lw,u={},f=n.maxTextureSize,d={[Gi]:Qt,[Qt]:Gi,[ei]:ei},h=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Dw,fragmentShader:Nw}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new di;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ri(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Av;let c=this.type;this.render=function(C,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),W=t.state;W.setBlending(ki),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const D=c!==Zn&&this.type===Zn,Y=c===Zn&&this.type!==Zn;for(let j=0,ee=C.length;j<ee;j++){const J=C[j],P=J.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const H=P.getFrameExtents();if(r.multiply(H),o.copy(P.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/H.x),r.x=o.x*H.x,P.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/H.y),r.y=o.y*H.y,P.mapSize.y=o.y)),P.map===null||D===!0||Y===!0){const ne=this.type!==Zn?{minFilter:vn,magFilter:vn}:{};P.map!==null&&P.map.dispose(),P.map=new Er(r.x,r.y,ne),P.map.texture.name=J.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const G=P.getViewportCount();for(let ne=0;ne<G;ne++){const de=P.getViewport(ne);s.set(o.x*de.x,o.y*de.y,o.x*de.z,o.y*de.w),W.viewport(s),P.updateMatrices(J,ne),i=P.getFrustum(),M(w,L,P.camera,J,this.type)}P.isPointLightShadow!==!0&&this.type===Zn&&v(P,L),P.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(T,S,I)};function v(C,w){const L=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Er(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,L,h,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,L,m,x,null)}function g(C,w,L,T){let S=null;const I=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=S.uuid,D=w.uuid;let Y=u[W];Y===void 0&&(Y={},u[W]=Y);let j=Y[D];j===void 0&&(j=S.clone(),Y[D]=j,w.addEventListener("dispose",b)),S=j}if(S.visible=w.visible,S.wireframe=w.wireframe,T===Zn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=L}return S}function M(C,w,L,T,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Zn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const D=e.update(C),Y=C.material;if(Array.isArray(Y)){const j=D.groups;for(let ee=0,J=j.length;ee<J;ee++){const P=j[ee],H=Y[P.materialIndex];if(H&&H.visible){const G=g(C,H,T,S);C.onBeforeShadow(t,C,w,L,D,G,P),t.renderBufferDirect(L,null,D,G,C,P),C.onAfterShadow(t,C,w,L,D,G,P)}}}else if(Y.visible){const j=g(C,Y,T,S);C.onBeforeShadow(t,C,w,L,D,j,null),t.renderBufferDirect(L,null,D,j,C,null),C.onAfterShadow(t,C,w,L,D,j,null)}}const W=C.children;for(let D=0,Y=W.length;D<Y;D++)M(W[D],w,L,T,S)}function b(C){C.target.removeEventListener("dispose",b);for(const L in u){const T=u[L],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function Iw(t){function e(){let R=!1;const se=new Ct;let re=null;const _e=new Ct(0,0,0,0);return{setMask:function(ye){re!==ye&&!R&&(t.colorMask(ye,ye,ye,ye),re=ye)},setLocked:function(ye){R=ye},setClear:function(ye,Ke,it,st,Lt){Lt===!0&&(ye*=st,Ke*=st,it*=st),se.set(ye,Ke,it,st),_e.equals(se)===!1&&(t.clearColor(ye,Ke,it,st),_e.copy(se))},reset:function(){R=!1,re=null,_e.set(-1,0,0,0)}}}function n(){let R=!1,se=null,re=null,_e=null;return{setTest:function(ye){ye?ce(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ye){se!==ye&&!R&&(t.depthMask(ye),se=ye)},setFunc:function(ye){if(re!==ye){switch(ye){case Qy:t.depthFunc(t.NEVER);break;case Jy:t.depthFunc(t.ALWAYS);break;case eS:t.depthFunc(t.LESS);break;case pl:t.depthFunc(t.LEQUAL);break;case tS:t.depthFunc(t.EQUAL);break;case nS:t.depthFunc(t.GEQUAL);break;case iS:t.depthFunc(t.GREATER);break;case rS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=ye}},setLocked:function(ye){R=ye},setClear:function(ye){_e!==ye&&(t.clearDepth(ye),_e=ye)},reset:function(){R=!1,se=null,re=null,_e=null}}}function i(){let R=!1,se=null,re=null,_e=null,ye=null,Ke=null,it=null,st=null,Lt=null;return{setTest:function(Qe){R||(Qe?ce(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!R&&(t.stencilMask(Qe),se=Qe)},setFunc:function(Qe,Un,In){(re!==Qe||_e!==Un||ye!==In)&&(t.stencilFunc(Qe,Un,In),re=Qe,_e=Un,ye=In)},setOp:function(Qe,Un,In){(Ke!==Qe||it!==Un||st!==In)&&(t.stencilOp(Qe,Un,In),Ke=Qe,it=Un,st=In)},setLocked:function(Qe){R=Qe},setClear:function(Qe){Lt!==Qe&&(t.clearStencil(Qe),Lt=Qe)},reset:function(){R=!1,se=null,re=null,_e=null,ye=null,Ke=null,it=null,st=null,Lt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],m=null,_=!1,x=null,p=null,c=null,v=null,g=null,M=null,b=null,C=new Ye(0,0,0),w=0,L=!1,T=null,S=null,I=null,W=null,D=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ee=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=ee>=2);let P=null,H={};const G=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),de=new Ct().fromArray(G),ze=new Ct().fromArray(ne);function V(R,se,re,_e){const ye=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(R,Ke),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<re;it++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(se+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return Ke}const Q={};Q[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(t.DEPTH_TEST),o.setFunc(pl),we(!1),We(Rh),ce(t.CULL_FACE),Me(ki);function ce(R){u[R]!==!0&&(t.enable(R),u[R]=!0)}function oe(R){u[R]!==!1&&(t.disable(R),u[R]=!1)}function Ce(R,se){return f[R]!==se?(t.bindFramebuffer(R,se),f[R]=se,R===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=se),R===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(R,se){let re=h,_e=!1;if(R){re=d.get(se),re===void 0&&(re=[],d.set(se,re));const ye=R.textures;if(re.length!==ye.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,it=ye.length;Ke<it;Ke++)re[Ke]=t.COLOR_ATTACHMENT0+Ke;re.length=ye.length,_e=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,_e=!0);_e&&t.drawBuffers(re)}function Oe(R){return m!==R?(t.useProgram(R),m=R,!0):!1}const F={[ar]:t.FUNC_ADD,[Iy]:t.FUNC_SUBTRACT,[Fy]:t.FUNC_REVERSE_SUBTRACT};F[Oy]=t.MIN,F[ky]=t.MAX;const Fe={[zy]:t.ZERO,[By]:t.ONE,[Hy]:t.SRC_COLOR,[qc]:t.SRC_ALPHA,[Yy]:t.SRC_ALPHA_SATURATE,[Xy]:t.DST_COLOR,[Gy]:t.DST_ALPHA,[Vy]:t.ONE_MINUS_SRC_COLOR,[Kc]:t.ONE_MINUS_SRC_ALPHA,[jy]:t.ONE_MINUS_DST_COLOR,[Wy]:t.ONE_MINUS_DST_ALPHA,[$y]:t.CONSTANT_COLOR,[qy]:t.ONE_MINUS_CONSTANT_COLOR,[Ky]:t.CONSTANT_ALPHA,[Zy]:t.ONE_MINUS_CONSTANT_ALPHA};function Me(R,se,re,_e,ye,Ke,it,st,Lt,Qe){if(R===ki){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(ce(t.BLEND),_=!0),R!==Uy){if(R!==x||Qe!==L){if((p!==ar||g!==ar)&&(t.blendEquation(t.FUNC_ADD),p=ar,g=ar),Qe)switch(R){case fo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ph:t.blendFunc(t.ONE,t.ONE);break;case bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ph:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}c=null,v=null,M=null,b=null,C.set(0,0,0),w=0,x=R,L=Qe}return}ye=ye||se,Ke=Ke||re,it=it||_e,(se!==p||ye!==g)&&(t.blendEquationSeparate(F[se],F[ye]),p=se,g=ye),(re!==c||_e!==v||Ke!==M||it!==b)&&(t.blendFuncSeparate(Fe[re],Fe[_e],Fe[Ke],Fe[it]),c=re,v=_e,M=Ke,b=it),(st.equals(C)===!1||Lt!==w)&&(t.blendColor(st.r,st.g,st.b,Lt),C.copy(st),w=Lt),x=R,L=!1}function dt(R,se){R.side===ei?oe(t.CULL_FACE):ce(t.CULL_FACE);let re=R.side===Qt;se&&(re=!re),we(re),R.blending===fo&&R.transparent===!1?Me(ki):Me(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);const _e=R.stencilWrite;s.setTest(_e),_e&&(s.setMask(R.stencilWriteMask),s.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),s.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),y(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(R){T!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),T=R)}function We(R){R!==Ly?(ce(t.CULL_FACE),R!==S&&(R===Rh?t.cullFace(t.BACK):R===Dy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),S=R}function A(R){R!==I&&(j&&t.lineWidth(R),I=R)}function y(R,se,re){R?(ce(t.POLYGON_OFFSET_FILL),(W!==se||D!==re)&&(t.polygonOffset(se,re),W=se,D=re)):oe(t.POLYGON_OFFSET_FILL)}function N(R){R?ce(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function X(R){R===void 0&&(R=t.TEXTURE0+Y-1),P!==R&&(t.activeTexture(R),P=R)}function K(R,se,re){re===void 0&&(P===null?re=t.TEXTURE0+Y-1:re=P);let _e=H[re];_e===void 0&&(_e={type:void 0,texture:void 0},H[re]=_e),(_e.type!==R||_e.texture!==se)&&(P!==re&&(t.activeTexture(re),P=re),t.bindTexture(R,se||Q[R]),_e.type=R,_e.texture=se)}function q(){const R=H[P];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(R){de.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),de.copy(R))}function je(R){ze.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),ze.copy(R))}function Xe(R,se){let re=l.get(se);re===void 0&&(re=new WeakMap,l.set(se,re));let _e=re.get(R);_e===void 0&&(_e=t.getUniformBlockIndex(se,R.name),re.set(R,_e))}function nt(R,se){const _e=l.get(se).get(R);a.get(se)!==_e&&(t.uniformBlockBinding(se,_e,R.__bindingPointIndex),a.set(se,_e))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},P=null,H={},f={},d=new WeakMap,h=[],m=null,_=!1,x=null,p=null,c=null,v=null,g=null,M=null,b=null,C=new Ye(0,0,0),w=0,L=!1,T=null,S=null,I=null,W=null,D=null,de.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:ce,disable:oe,bindFramebuffer:Ce,drawBuffers:Re,useProgram:Oe,setBlending:Me,setMaterial:dt,setFlipSided:we,setCullFace:We,setLineWidth:A,setPolygonOffset:y,setScissorTest:N,activeTexture:X,bindTexture:K,unbindTexture:q,compressedTexImage2D:Ee,compressedTexImage3D:te,texImage2D:me,texImage3D:Be,updateUBOMapping:Xe,uniformBlockBinding:nt,texStorage2D:Pe,texStorage3D:pe,texSubImage2D:xe,texSubImage3D:Te,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:He,viewport:je,reset:ve}}function Fw(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ge,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return m?new OffscreenCanvas(A,y):yl("canvas")}function x(A,y,N){let X=1;const K=We(A);if((K.width>N||K.height>N)&&(X=N/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(X*K.width),Ee=Math.floor(X*K.height);d===void 0&&(d=_(q,Ee));const te=y?_(q,Ee):d;return te.width=q,te.height=Ee,te.getContext("2d").drawImage(A,0,0,q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+Ee+")."),te}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==vn&&A.minFilter!==Pn}function c(A){t.generateMipmap(A)}function v(A,y,N,X,K=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=y;if(y===t.RED&&(N===t.FLOAT&&(q=t.R32F),N===t.HALF_FLOAT&&(q=t.R16F),N===t.UNSIGNED_BYTE&&(q=t.R8)),y===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(q=t.R8UI),N===t.UNSIGNED_SHORT&&(q=t.R16UI),N===t.UNSIGNED_INT&&(q=t.R32UI),N===t.BYTE&&(q=t.R8I),N===t.SHORT&&(q=t.R16I),N===t.INT&&(q=t.R32I)),y===t.RG&&(N===t.FLOAT&&(q=t.RG32F),N===t.HALF_FLOAT&&(q=t.RG16F),N===t.UNSIGNED_BYTE&&(q=t.RG8)),y===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(q=t.RG8UI),N===t.UNSIGNED_SHORT&&(q=t.RG16UI),N===t.UNSIGNED_INT&&(q=t.RG32UI),N===t.BYTE&&(q=t.RG8I),N===t.SHORT&&(q=t.RG16I),N===t.INT&&(q=t.RG32I)),y===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),y===t.RGBA){const Ee=K?gl:qe.getTransfer(X);N===t.FLOAT&&(q=t.RGBA32F),N===t.HALF_FLOAT&&(q=t.RGBA16F),N===t.UNSIGNED_BYTE&&(q=Ee===et?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==vn&&A.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function M(A){const y=A.target;y.removeEventListener("dispose",M),C(y),y.isVideoTexture&&f.delete(y)}function b(A){const y=A.target;y.removeEventListener("dispose",b),L(y)}function C(A){const y=i.get(A);if(y.__webglInit===void 0)return;const N=A.source,X=h.get(N);if(X){const K=X[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(A),Object.keys(X).length===0&&h.delete(N)}i.remove(A)}function w(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const N=A.source,X=h.get(N);delete X[y.__cacheKey],s.memory.textures--}function L(A){const y=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let K=0;K<y.__webglFramebuffer[X].length;K++)t.deleteFramebuffer(y.__webglFramebuffer[X][K]);else t.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)t.deleteFramebuffer(y.__webglFramebuffer[X]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=A.textures;for(let X=0,K=N.length;X<K;X++){const q=i.get(N[X]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(N[X])}i.remove(A)}let T=0;function S(){T=0}function I(){const A=T;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),T+=1,A}function W(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function D(A,y){const N=i.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(N,A,y);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+y)}function Y(A,y){const N=i.get(A);if(A.version>0&&N.__version!==A.version){de(N,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+y)}function j(A,y){const N=i.get(A);if(A.version>0&&N.__version!==A.version){de(N,A,y);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+y)}function ee(A,y){const N=i.get(A);if(A.version>0&&N.__version!==A.version){ze(N,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+y)}const J={[Jc]:t.REPEAT,[dr]:t.CLAMP_TO_EDGE,[ef]:t.MIRRORED_REPEAT},P={[vn]:t.NEAREST,[pS]:t.NEAREST_MIPMAP_NEAREST,[oa]:t.NEAREST_MIPMAP_LINEAR,[Pn]:t.LINEAR,[Mu]:t.LINEAR_MIPMAP_NEAREST,[hr]:t.LINEAR_MIPMAP_LINEAR},H={[PS]:t.NEVER,[IS]:t.ALWAYS,[bS]:t.LESS,[Ov]:t.LEQUAL,[LS]:t.EQUAL,[US]:t.GEQUAL,[DS]:t.GREATER,[NS]:t.NOTEQUAL};function G(A,y){if(y.type===Pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Pn||y.magFilter===Mu||y.magFilter===oa||y.magFilter===hr||y.minFilter===Pn||y.minFilter===Mu||y.minFilter===oa||y.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,J[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,J[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,J[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,P[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,P[y.minFilter]),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,H[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vn||y.minFilter!==oa&&y.minFilter!==hr||y.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ne(A,y){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",M));const X=y.source;let K=h.get(X);K===void 0&&(K={},h.set(X,K));const q=W(y);if(q!==A.__cacheKey){K[q]===void 0&&(K[q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,N=!0),K[q].usedTimes++;const Ee=K[A.__cacheKey];Ee!==void 0&&(K[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(y)),A.__cacheKey=q,A.__webglTexture=K[q].texture}return N}function de(A,y,N){let X=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=t.TEXTURE_3D);const K=ne(A,y),q=y.source;n.bindTexture(X,A.__webglTexture,t.TEXTURE0+N);const Ee=i.get(q);if(q.version!==Ee.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const te=qe.getPrimaries(qe.workingColorSpace),xe=y.colorSpace===wi?null:qe.getPrimaries(y.colorSpace),Te=y.colorSpace===wi||te===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ae=x(y.image,!1,r.maxTextureSize);ae=we(y,ae);const he=o.convert(y.format,y.colorSpace),Pe=o.convert(y.type);let pe=v(y.internalFormat,he,Pe,y.colorSpace,y.isVideoTexture);G(X,y);let me;const Be=y.mipmaps,He=y.isVideoTexture!==!0&&pe!==Fv,je=Ee.__version===void 0||K===!0,Xe=q.dataReady,nt=g(y,ae);if(y.isDepthTexture)pe=t.DEPTH_COMPONENT16,y.type===Pi?pe=t.DEPTH_COMPONENT32F:y.type===To?pe=t.DEPTH_COMPONENT24:y.type===Us&&(pe=t.DEPTH24_STENCIL8),je&&(He?n.texStorage2D(t.TEXTURE_2D,1,pe,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,pe,ae.width,ae.height,0,he,Pe,null));else if(y.isDataTexture)if(Be.length>0){He&&je&&n.texStorage2D(t.TEXTURE_2D,nt,pe,Be[0].width,Be[0].height);for(let ve=0,R=Be.length;ve<R;ve++)me=Be[ve],He?Xe&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,me.width,me.height,he,Pe,me.data):n.texImage2D(t.TEXTURE_2D,ve,pe,me.width,me.height,0,he,Pe,me.data);y.generateMipmaps=!1}else He?(je&&n.texStorage2D(t.TEXTURE_2D,nt,pe,ae.width,ae.height),Xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,he,Pe,ae.data)):n.texImage2D(t.TEXTURE_2D,0,pe,ae.width,ae.height,0,he,Pe,ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,nt,pe,Be[0].width,Be[0].height,ae.depth);for(let ve=0,R=Be.length;ve<R;ve++)me=Be[ve],y.format!==Vn?he!==null?He?Xe&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,me.width,me.height,ae.depth,he,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,pe,me.width,me.height,ae.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,me.width,me.height,ae.depth,he,Pe,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,pe,me.width,me.height,ae.depth,0,he,Pe,me.data)}else{He&&je&&n.texStorage2D(t.TEXTURE_2D,nt,pe,Be[0].width,Be[0].height);for(let ve=0,R=Be.length;ve<R;ve++)me=Be[ve],y.format!==Vn?he!==null?He?Xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,me.width,me.height,he,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Xe&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,me.width,me.height,he,Pe,me.data):n.texImage2D(t.TEXTURE_2D,ve,pe,me.width,me.height,0,he,Pe,me.data)}else if(y.isDataArrayTexture)He?(je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,nt,pe,ae.width,ae.height,ae.depth),Xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,he,Pe,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ae.width,ae.height,ae.depth,0,he,Pe,ae.data);else if(y.isData3DTexture)He?(je&&n.texStorage3D(t.TEXTURE_3D,nt,pe,ae.width,ae.height,ae.depth),Xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,he,Pe,ae.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ae.width,ae.height,ae.depth,0,he,Pe,ae.data);else if(y.isFramebufferTexture){if(je)if(He)n.texStorage2D(t.TEXTURE_2D,nt,pe,ae.width,ae.height);else{let ve=ae.width,R=ae.height;for(let se=0;se<nt;se++)n.texImage2D(t.TEXTURE_2D,se,pe,ve,R,0,he,Pe,null),ve>>=1,R>>=1}}else if(Be.length>0){if(He&&je){const ve=We(Be[0]);n.texStorage2D(t.TEXTURE_2D,nt,pe,ve.width,ve.height)}for(let ve=0,R=Be.length;ve<R;ve++)me=Be[ve],He?Xe&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,he,Pe,me):n.texImage2D(t.TEXTURE_2D,ve,pe,he,Pe,me);y.generateMipmaps=!1}else if(He){if(je){const ve=We(ae);n.texStorage2D(t.TEXTURE_2D,nt,pe,ve.width,ve.height)}Xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Pe,ae)}else n.texImage2D(t.TEXTURE_2D,0,pe,he,Pe,ae);p(y)&&c(X),Ee.__version=q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ze(A,y,N){if(y.image.length!==6)return;const X=ne(A,y),K=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+N);const q=i.get(K);if(K.version!==q.__version||X===!0){n.activeTexture(t.TEXTURE0+N);const Ee=qe.getPrimaries(qe.workingColorSpace),te=y.colorSpace===wi?null:qe.getPrimaries(y.colorSpace),xe=y.colorSpace===wi||Ee===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Te=y.isCompressedTexture||y.image[0].isCompressedTexture,ae=y.image[0]&&y.image[0].isDataTexture,he=[];for(let R=0;R<6;R++)!Te&&!ae?he[R]=x(y.image[R],!0,r.maxCubemapSize):he[R]=ae?y.image[R].image:y.image[R],he[R]=we(y,he[R]);const Pe=he[0],pe=o.convert(y.format,y.colorSpace),me=o.convert(y.type),Be=v(y.internalFormat,pe,me,y.colorSpace),He=y.isVideoTexture!==!0,je=q.__version===void 0||X===!0,Xe=K.dataReady;let nt=g(y,Pe);G(t.TEXTURE_CUBE_MAP,y);let ve;if(Te){He&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,nt,Be,Pe.width,Pe.height);for(let R=0;R<6;R++){ve=he[R].mipmaps;for(let se=0;se<ve.length;se++){const re=ve[se];y.format!==Vn?pe!==null?He?Xe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,se,0,0,re.width,re.height,pe,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,se,Be,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,se,0,0,re.width,re.height,pe,me,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,se,Be,re.width,re.height,0,pe,me,re.data)}}}else{if(ve=y.mipmaps,He&&je){ve.length>0&&nt++;const R=We(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,nt,Be,R.width,R.height)}for(let R=0;R<6;R++)if(ae){He?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,he[R].width,he[R].height,pe,me,he[R].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Be,he[R].width,he[R].height,0,pe,me,he[R].data);for(let se=0;se<ve.length;se++){const _e=ve[se].image[R].image;He?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,se+1,0,0,_e.width,_e.height,pe,me,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,se+1,Be,_e.width,_e.height,0,pe,me,_e.data)}}else{He?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,pe,me,he[R]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Be,pe,me,he[R]);for(let se=0;se<ve.length;se++){const re=ve[se];He?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,se+1,0,0,pe,me,re.image[R]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,se+1,Be,pe,me,re.image[R])}}}p(y)&&c(t.TEXTURE_CUBE_MAP),q.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function V(A,y,N,X,K,q){const Ee=o.convert(N.format,N.colorSpace),te=o.convert(N.type),xe=v(N.internalFormat,Ee,te,N.colorSpace);if(!i.get(y).__hasExternalTextures){const ae=Math.max(1,y.width>>q),he=Math.max(1,y.height>>q);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,q,xe,ae,he,y.depth,0,Ee,te,null):n.texImage2D(K,q,xe,ae,he,0,Ee,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Me(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,K,i.get(N).__webglTexture,0,Fe(y)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,K,i.get(N).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Q(A,y,N){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let X=t.DEPTH_COMPONENT24;if(N||Me(y)){const K=y.depthTexture;K&&K.isDepthTexture&&(K.type===Pi?X=t.DEPTH_COMPONENT32F:K.type===To&&(X=t.DEPTH_COMPONENT24));const q=Fe(y);Me(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,X,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,q,X,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,X,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const X=Fe(y);N&&Me(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,X,t.DEPTH24_STENCIL8,y.width,y.height):Me(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const X=y.textures;for(let K=0;K<X.length;K++){const q=X[K],Ee=o.convert(q.format,q.colorSpace),te=o.convert(q.type),xe=v(q.internalFormat,Ee,te,q.colorSpace),Te=Fe(y);N&&Me(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,xe,y.width,y.height):Me(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,xe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,xe,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),D(y.depthTexture,0);const X=i.get(y.depthTexture).__webglTexture,K=Fe(y);if(y.depthTexture.format===ho)Me(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0);else if(y.depthTexture.format===As)Me(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function oe(A){const y=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ce(y.__webglFramebuffer,A)}else if(N){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]=t.createRenderbuffer(),Q(y.__webglDepthbuffer[X],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),Q(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(A,y,N){const X=i.get(A);y!==void 0&&V(X.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&oe(A)}function Re(A){const y=A.texture,N=i.get(A),X=i.get(y);A.addEventListener("dispose",b);const K=A.textures,q=A.isWebGLCubeRenderTarget===!0,Ee=K.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=y.version,s.memory.textures++),q){N.__webglFramebuffer=[];for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[te]=[];for(let xe=0;xe<y.mipmaps.length;xe++)N.__webglFramebuffer[te][xe]=t.createFramebuffer()}else N.__webglFramebuffer[te]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let te=0;te<y.mipmaps.length;te++)N.__webglFramebuffer[te]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let te=0,xe=K.length;te<xe;te++){const Te=i.get(K[te]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&Me(A)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let te=0;te<K.length;te++){const xe=K[te];N.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[te]);const Te=o.convert(xe.format,xe.colorSpace),ae=o.convert(xe.type),he=v(xe.internalFormat,Te,ae,xe.colorSpace,A.isXRRenderTarget===!0),Pe=Fe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,he,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,N.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Q(N.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),G(t.TEXTURE_CUBE_MAP,y);for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)V(N.__webglFramebuffer[te][xe],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe);else V(N.__webglFramebuffer[te],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(y)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let te=0,xe=K.length;te<xe;te++){const Te=K[te],ae=i.get(Te);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),G(t.TEXTURE_2D,Te),V(N.__webglFramebuffer,A,Te,t.COLOR_ATTACHMENT0+te,t.TEXTURE_2D,0),p(Te)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,X.__webglTexture),G(te,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)V(N.__webglFramebuffer[xe],A,y,t.COLOR_ATTACHMENT0,te,xe);else V(N.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,te,0);p(y)&&c(te),n.unbindTexture()}A.depthBuffer&&oe(A)}function Oe(A){const y=A.textures;for(let N=0,X=y.length;N<X;N++){const K=y[N];if(p(K)){const q=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(K).__webglTexture;n.bindTexture(q,Ee),c(q),n.unbindTexture()}}}function F(A){if(A.samples>0&&Me(A)===!1){const y=A.textures,N=A.width,X=A.height;let K=t.COLOR_BUFFER_BIT;const q=[],Ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=i.get(A),xe=y.length>1;if(xe)for(let Te=0;Te<y.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){q.push(t.COLOR_ATTACHMENT0+Te),A.depthBuffer&&q.push(Ee);const ae=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(ae===!1&&(A.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&te.__isTransmissionRenderTarget!==!0&&(K|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,te.__webglColorRenderbuffer[Te]),ae===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),xe){const he=i.get(y[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,N,X,0,0,N,X,K,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Te=0;Te<y.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,te.__webglColorRenderbuffer[Te]);const ae=i.get(y[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function Fe(A){return Math.min(r.maxSamples,A.samples)}function Me(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function dt(A){const y=s.render.frame;f.get(A)!==y&&(f.set(A,y),A.update())}function we(A,y){const N=A.colorSpace,X=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==$i&&N!==wi&&(qe.getTransfer(N)===et?(X!==Vn||K!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function We(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=D,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=ee,this.rebindTextures=Ce,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Me}function Ow(t,e){function n(i,r=wi){let o;const s=qe.getTransfer(r);if(i===Bi)return t.UNSIGNED_BYTE;if(i===Lv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===mS)return t.BYTE;if(i===gS)return t.SHORT;if(i===Pv)return t.UNSIGNED_SHORT;if(i===bv)return t.INT;if(i===To)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===ml)return t.HALF_FLOAT;if(i===_S)return t.ALPHA;if(i===xS)return t.RGB;if(i===Vn)return t.RGBA;if(i===yS)return t.LUMINANCE;if(i===SS)return t.LUMINANCE_ALPHA;if(i===ho)return t.DEPTH_COMPONENT;if(i===As)return t.DEPTH_STENCIL;if(i===MS)return t.RED;if(i===Nv)return t.RED_INTEGER;if(i===ES)return t.RG;if(i===Uv)return t.RG_INTEGER;if(i===Iv)return t.RGBA_INTEGER;if(i===Eu||i===Tu||i===wu||i===Au)if(s===et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Eu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Au)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Eu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Au)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dh||i===Nh||i===Uh||i===Ih)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ih)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Fh||i===Oh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Fh)return s===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Oh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kh||i===zh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===Xh||i===jh||i===Yh||i===$h||i===qh||i===Kh||i===Zh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===kh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$h)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zh)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cu||i===Qh||i===Jh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Cu)return s===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===TS||i===ep||i===tp||i===np)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Cu)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ep)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===np)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class kw extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ca extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zw={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Wi({vertexShader:Bw,fragmentShader:Hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ri(new Gl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Gw extends bo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,_=null;const x=new Vw,p=n.getContextAttributes();let c=null,v=null;const g=[],M=[],b=new Ge;let C=null;const w=new mn;w.layers.enable(1),w.viewport=new Ct;const L=new mn;L.layers.enable(2),L.viewport=new Ct;const T=[w,L],S=new kw;S.layers.enable(1),S.layers.enable(2);let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=g[V];return Q===void 0&&(Q=new ec,g[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=g[V];return Q===void 0&&(Q=new ec,g[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=g[V];return Q===void 0&&(Q=new ec,g[V]=Q),Q.getHandSpace()};function D(V){const Q=M.indexOf(V.inputSource);if(Q===-1)return;const ce=g[Q];ce!==void 0&&(ce.update(V.inputSource,V.frame,u||s),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",j);for(let V=0;V<g.length;V++){const Q=M[V];Q!==null&&(M[V]=null,g[V].disconnect(Q))}I=null,W=null,x.reset(),e.setRenderTarget(c),m=null,h=null,d=null,r=null,v=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Er(m.framebufferWidth,m.framebufferHeight,{format:Vn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ce=null,oe=null;p.depth&&(oe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=p.stencil?As:ho,ce=p.stencil?Us:To);const Ce={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Er(h.textureWidth,h.textureHeight,{format:Vn,type:Bi,depthTexture:new Qv(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Re=e.properties.get(v);Re.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(V){for(let Q=0;Q<V.removed.length;Q++){const ce=V.removed[Q],oe=M.indexOf(ce);oe>=0&&(M[oe]=null,g[oe].disconnect(ce))}for(let Q=0;Q<V.added.length;Q++){const ce=V.added[Q];let oe=M.indexOf(ce);if(oe===-1){for(let Re=0;Re<g.length;Re++)if(Re>=M.length){M.push(ce),oe=Re;break}else if(M[Re]===null){M[Re]=ce,oe=Re;break}if(oe===-1)break}const Ce=g[oe];Ce&&Ce.connect(ce)}}const ee=new k,J=new k;function P(V,Q,ce){ee.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(ce.matrixWorld);const oe=ee.distanceTo(J),Ce=Q.projectionMatrix.elements,Re=ce.projectionMatrix.elements,Oe=Ce[14]/(Ce[10]-1),F=Ce[14]/(Ce[10]+1),Fe=(Ce[9]+1)/Ce[5],Me=(Ce[9]-1)/Ce[5],dt=(Ce[8]-1)/Ce[0],we=(Re[8]+1)/Re[0],We=Oe*dt,A=Oe*we,y=oe/(-dt+we),N=y*-dt;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(N),V.translateZ(y),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const X=Oe+y,K=F+y,q=We-N,Ee=A+(oe-N),te=Fe*F/K*X,xe=Me*F/K*X;V.projectionMatrix.makePerspective(q,Ee,te,xe,X,K),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function H(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;x.texture!==null&&(V.near=x.depthNear,V.far=x.depthFar),S.near=L.near=w.near=V.near,S.far=L.far=w.far=V.far,(I!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,W=S.far,w.near=I,w.far=W,L.near=I,L.far=W,w.updateProjectionMatrix(),L.updateProjectionMatrix(),V.updateProjectionMatrix());const Q=V.parent,ce=S.cameras;H(S,Q);for(let oe=0;oe<ce.length;oe++)H(ce[oe],Q);ce.length===2?P(S,w,L):S.projectionMatrix.copy(w.projectionMatrix),G(V,S,Q)};function G(V,Q,ce){ce===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=tf*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null};let ne=null;function de(V,Q){if(f=Q.getViewerPose(u||s),_=Q,f!==null){const ce=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let oe=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Re=0;Re<ce.length;Re++){const Oe=ce[Re];let F=null;if(m!==null)F=m.getViewport(Oe);else{const Me=d.getViewSubImage(h,Oe);F=Me.viewport,Re===0&&(e.setRenderTargetTextures(v,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(v))}let Fe=T[Re];Fe===void 0&&(Fe=new mn,Fe.layers.enable(Re),Fe.viewport=new Ct,T[Re]=Fe),Fe.matrix.fromArray(Oe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Oe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(F.x,F.y,F.width,F.height),Re===0&&(S.matrix.copy(Fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Fe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Re=d.getDepthInformation(ce[0]);Re&&Re.isValid&&Re.texture&&x.init(e,Re,r.renderState)}}for(let ce=0;ce<g.length;ce++){const oe=M[ce],Ce=g[ce];oe!==null&&Ce!==void 0&&Ce.update(oe,Q,u||s)}x.render(e,S),ne&&ne(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const ze=new Zv;ze.setAnimationLoop(de),this.setAnimationLoop=function(V){ne=V},this.dispose=function(){}}}const nr=new ci,Ww=new vt;function Xw(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,Yv(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,v,g,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(p,c):c.isMeshToonMaterial?(o(p,c),d(p,c)):c.isMeshPhongMaterial?(o(p,c),f(p,c)):c.isMeshStandardMaterial?(o(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,M)):c.isMeshMatcapMaterial?(o(p,c),_(p,c)):c.isMeshDepthMaterial?o(p,c):c.isMeshDistanceMaterial?(o(p,c),x(p,c)):c.isMeshNormalMaterial?o(p,c):c.isLineBasicMaterial?(s(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,v,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===Qt&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===Qt&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const v=e.get(c),g=v.envMap,M=v.envMapRotation;if(g&&(p.envMap.value=g,nr.copy(M),nr.x*=-1,nr.y*=-1,nr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),p.envMapRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(nr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const b=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*b,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function s(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,v,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*v,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,v){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Qt&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const v=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jw(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function u(v,g){let M=r[v.id];M===void 0&&(_(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",p));const b=g.program;i.updateUBOMapping(v,b);const C=e.render.frame;o[v.id]!==C&&(h(v),o[v.id]=C)}function f(v){const g=d();v.__bindingPointIndex=g;const M=t.createBuffer(),b=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function d(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],M=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=M.length;C<w;C++){const L=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,S=L.length;T<S;T++){const I=L[T];if(m(I,C,T,b)===!0){const W=I.__offset,D=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let j=0;j<D.length;j++){const ee=D[j],J=x(ee);typeof ee=="number"||typeof ee=="boolean"?(I.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,W+Y,I.__data)):ee.isMatrix3?(I.__data[0]=ee.elements[0],I.__data[1]=ee.elements[1],I.__data[2]=ee.elements[2],I.__data[3]=0,I.__data[4]=ee.elements[3],I.__data[5]=ee.elements[4],I.__data[6]=ee.elements[5],I.__data[7]=0,I.__data[8]=ee.elements[6],I.__data[9]=ee.elements[7],I.__data[10]=ee.elements[8],I.__data[11]=0):(ee.toArray(I.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,b){const C=v.value,w=g+"_"+M;if(b[w]===void 0)return typeof C=="number"||typeof C=="boolean"?b[w]=C:b[w]=C.clone(),!0;{const L=b[w];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return b[w]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(v){const g=v.uniforms;let M=0;const b=16;for(let w=0,L=g.length;w<L;w++){const T=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,I=T.length;S<I;S++){const W=T[S],D=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,j=D.length;Y<j;Y++){const ee=D[Y],J=x(ee),P=M%b;P!==0&&b-P<J.boundary&&(M+=b-P),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=J.storage}}}const C=M%b;return C>0&&(M+=b-C),v.__size=M,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const M=s.indexOf(g.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class Yw{constructor(e={}){const{canvas:n=OS(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const g=this;let M=!1,b=0,C=0,w=null,L=-1,T=null;const S=new Ct,I=new Ct;let W=null;const D=new Ye(0);let Y=0,j=n.width,ee=n.height,J=1,P=null,H=null;const G=new Ct(0,0,j,ee),ne=new Ct(0,0,j,ee);let de=!1;const ze=new Kv;let V=!1,Q=!1;const ce=new vt,oe=new Ge,Ce=new k,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return w===null?J:1}let F=i;function Fe(E,U){const z=n.getContext(E,U);return z!==null?z:null}try{const E={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${td}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",_e,!1),F===null){const U="webgl2";if(F=Fe(U,E),F===null)throw Fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Me,dt,we,We,A,y,N,X,K,q,Ee,te,xe,Te,ae,he,Pe,pe,me,Be,He,je,Xe,nt;function ve(){Me=new tT(F),Me.init(),dt=new $1(F,Me,e),je=new Ow(F,Me),we=new Iw(F),We=new rT(F),A=new Sw,y=new Fw(F,Me,we,A,dt,je,We),N=new K1(g),X=new eT(g),K=new uM(F),Xe=new j1(F,K),q=new nT(F,K,We,Xe),Ee=new sT(F,q,K,We),me=new oT(F,dt,y),he=new q1(A),te=new yw(g,N,X,Me,dt,Xe,he),xe=new Xw(g,A),Te=new Ew,ae=new Pw(Me),pe=new X1(g,N,X,we,Ee,h,l),Pe=new Uw(g,Ee,dt),nt=new jw(F,We,dt,we),Be=new Y1(F,Me,We),He=new iT(F,Me,We),We.programs=te.programs,g.capabilities=dt,g.extensions=Me,g.properties=A,g.renderLists=Te,g.shadowMap=Pe,g.state=we,g.info=We}ve();const R=new Gw(g,F);this.xr=R,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(j,ee,!1))},this.getSize=function(E){return E.set(j,ee)},this.setSize=function(E,U,z=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,ee=U,n.width=Math.floor(E*J),n.height=Math.floor(U*J),z===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(j*J,ee*J).floor()},this.setDrawingBufferSize=function(E,U,z){j=E,ee=U,J=z,n.width=Math.floor(E*z),n.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(G)},this.setViewport=function(E,U,z,B){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,U,z,B),we.viewport(S.copy(G).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,U,z,B){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,U,z,B),we.scissor(I.copy(ne).multiplyScalar(J).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){we.setScissorTest(de=E)},this.setOpaqueSort=function(E){P=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(E=!0,U=!0,z=!0){let B=0;if(E){let O=!1;if(w!==null){const ue=w.texture.format;O=ue===Iv||ue===Uv||ue===Nv}if(O){const ue=w.texture.type,ge=ue===Bi||ue===To||ue===Pv||ue===Us||ue===Lv||ue===Dv,Se=pe.getClearColor(),Ae=pe.getClearAlpha(),Le=Se.r,be=Se.g,De=Se.b;ge?(m[0]=Le,m[1]=be,m[2]=De,m[3]=Ae,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Le,_[1]=be,_[2]=De,_[3]=Ae,F.clearBufferiv(F.COLOR,0,_))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT),z&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Te.dispose(),ae.dispose(),A.dispose(),N.dispose(),X.dispose(),Ee.dispose(),Xe.dispose(),nt.dispose(),te.dispose(),R.dispose(),R.removeEventListener("sessionstart",Un),R.removeEventListener("sessionend",In),qi.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=We.autoReset,U=Pe.enabled,z=Pe.autoUpdate,B=Pe.needsUpdate,O=Pe.type;ve(),We.autoReset=E,Pe.enabled=U,Pe.autoUpdate=z,Pe.needsUpdate=B,Pe.type=O}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ye(E){const U=E.target;U.removeEventListener("dispose",ye),Ke(U)}function Ke(E){it(E),A.remove(E)}function it(E){const U=A.get(E).programs;U!==void 0&&(U.forEach(function(z){te.releaseProgram(z)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,B,O,ue){U===null&&(U=Re);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Se=l_(E,U,z,B,O);we.setMaterial(B,ge);let Ae=z.index,Le=1;if(B.wireframe===!0){if(Ae=q.getWireframeAttribute(z),Ae===void 0)return;Le=2}const be=z.drawRange,De=z.attributes.position;let ht=be.start*Le,tn=(be.start+be.count)*Le;ue!==null&&(ht=Math.max(ht,ue.start*Le),tn=Math.min(tn,(ue.start+ue.count)*Le)),Ae!==null?(ht=Math.max(ht,0),tn=Math.min(tn,Ae.count)):De!=null&&(ht=Math.max(ht,0),tn=Math.min(tn,De.count));const Mt=tn-ht;if(Mt<0||Mt===1/0)return;Xe.setup(O,B,Se,z,Ae);let Xn,at=Be;if(Ae!==null&&(Xn=K.get(Ae),at=He,at.setIndex(Xn)),O.isMesh)B.wireframe===!0?(we.setLineWidth(B.wireframeLinewidth*Oe()),at.setMode(F.LINES)):at.setMode(F.TRIANGLES);else if(O.isLine){let Ne=B.linewidth;Ne===void 0&&(Ne=1),we.setLineWidth(Ne*Oe()),O.isLineSegments?at.setMode(F.LINES):O.isLineLoop?at.setMode(F.LINE_LOOP):at.setMode(F.LINE_STRIP)}else O.isPoints?at.setMode(F.POINTS):O.isSprite&&at.setMode(F.TRIANGLES);if(O.isBatchedMesh)at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)at.renderInstances(ht,Mt,O.count);else if(z.isInstancedBufferGeometry){const Ne=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Xl=Math.min(z.instanceCount,Ne);at.renderInstances(ht,Mt,Xl)}else at.render(ht,Mt)};function st(E,U,z){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,Hs(E,U,z),E.side=Gi,E.needsUpdate=!0,Hs(E,U,z),E.side=ei):Hs(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),p=ae.get(z),p.init(),v.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==z&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(g._useLegacyLights);const B=new Set;return E.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const Se=ue[ge];st(Se,z,O),B.add(Se)}else st(ue,z,O),B.add(ue)}),v.pop(),p=null,B},this.compileAsync=function(E,U,z=null){const B=this.compile(E,U,z);return new Promise(O=>{function ue(){if(B.forEach(function(ge){A.get(ge).currentProgram.isReady()&&B.delete(ge)}),B.size===0){O(E);return}setTimeout(ue,10)}Me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Lt=null;function Qe(E){Lt&&Lt(E)}function Un(){qi.stop()}function In(){qi.start()}const qi=new Zv;qi.setAnimationLoop(Qe),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(E){Lt=E,R.setAnimationLoop(E),E===null?qi.stop():qi.start()},R.addEventListener("sessionstart",Un),R.addEventListener("sessionend",In),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(U),U=R.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,U,w),p=ae.get(E,v.length),p.init(),v.push(p),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(ce),Q=this.localClippingEnabled,V=he.init(this.clippingPlanes,Q),x=Te.get(E,c.length),x.init(),c.push(x),rd(E,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(P,H),this.info.render.frame++,V===!0&&he.beginShadows();const z=p.state.shadowsArray;if(Pe.render(z,E,U),V===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1)&&pe.render(x,E),p.setupLights(g._useLegacyLights),U.isArrayCamera){const B=U.cameras;for(let O=0,ue=B.length;O<ue;O++){const ge=B[O];od(x,E,ge,ge.viewport)}}else od(x,E,U);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(g,E,U),Xe.resetDefaultState(),L=-1,T=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function rd(E,U,z,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){B&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const ge=Ee.update(E),Se=E.material;Se.visible&&x.push(E,ge,Se,z,Ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const ge=Ee.update(E),Se=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ce.copy(ge.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(Se)){const Ae=ge.groups;for(let Le=0,be=Ae.length;Le<be;Le++){const De=Ae[Le],ht=Se[De.materialIndex];ht&&ht.visible&&x.push(E,ge,ht,z,Ce.z,De)}}else Se.visible&&x.push(E,ge,Se,z,Ce.z,null)}}const ue=E.children;for(let ge=0,Se=ue.length;ge<Se;ge++)rd(ue[ge],U,z,B)}function od(E,U,z,B){const O=E.opaque,ue=E.transmissive,ge=E.transparent;p.setupLightsView(z),V===!0&&he.setGlobalState(g.clippingPlanes,z),ue.length>0&&a_(O,ue,U,z),B&&we.viewport(S.copy(B)),O.length>0&&Bs(O,U,z),ue.length>0&&Bs(ue,U,z),ge.length>0&&Bs(ge,U,z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function a_(E,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Er(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?ml:Bi,minFilter:hr,samples:4,stencilBuffer:o});const Le=A.get(p.state.transmissionRenderTarget);Le.__isTransmissionRenderTarget=!0}const ue=p.state.transmissionRenderTarget;g.getDrawingBufferSize(oe),ue.setSize(oe.x,oe.y);const ge=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(D),Y=g.getClearAlpha(),Y<1&&g.setClearColor(16777215,.5),g.clear();const Se=g.toneMapping;g.toneMapping=zi,Bs(E,z,B),y.updateMultisampleRenderTarget(ue),y.updateRenderTargetMipmap(ue);let Ae=!1;for(let Le=0,be=U.length;Le<be;Le++){const De=U[Le],ht=De.object,tn=De.geometry,Mt=De.material,Xn=De.group;if(Mt.side===ei&&ht.layers.test(B.layers)){const at=Mt.side;Mt.side=Qt,Mt.needsUpdate=!0,sd(ht,z,B,tn,Mt,Xn),Mt.side=at,Mt.needsUpdate=!0,Ae=!0}}Ae===!0&&(y.updateMultisampleRenderTarget(ue),y.updateRenderTargetMipmap(ue)),g.setRenderTarget(ge),g.setClearColor(D,Y),g.toneMapping=Se}function Bs(E,U,z){const B=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ue=E.length;O<ue;O++){const ge=E[O],Se=ge.object,Ae=ge.geometry,Le=B===null?ge.material:B,be=ge.group;Se.layers.test(z.layers)&&sd(Se,U,z,Ae,Le,be)}}function sd(E,U,z,B,O,ue){E.onBeforeRender(g,U,z,B,O,ue),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(g,U,z,B,E,ue),O.transparent===!0&&O.side===ei&&O.forceSinglePass===!1?(O.side=Qt,O.needsUpdate=!0,g.renderBufferDirect(z,U,B,O,E,ue),O.side=Gi,O.needsUpdate=!0,g.renderBufferDirect(z,U,B,O,E,ue),O.side=ei):g.renderBufferDirect(z,U,B,O,E,ue),E.onAfterRender(g,U,z,B,O,ue)}function Hs(E,U,z){U.isScene!==!0&&(U=Re);const B=A.get(E),O=p.state.lights,ue=p.state.shadowsArray,ge=O.state.version,Se=te.getParameters(E,O.state,ue,U,z),Ae=te.getProgramCacheKey(Se);let Le=B.programs;B.environment=E.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(E.isMeshStandardMaterial?X:N).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",ye),Le=new Map,B.programs=Le);let be=Le.get(Ae);if(be!==void 0){if(B.currentProgram===be&&B.lightsStateVersion===ge)return ld(E,Se),be}else Se.uniforms=te.getUniforms(E),E.onBuild(z,Se,g),E.onBeforeCompile(Se,g),be=te.acquireProgram(Se,Ae),Le.set(Ae,be),B.uniforms=Se.uniforms;const De=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=he.uniform),ld(E,Se),B.needsLights=c_(E),B.lightsStateVersion=ge,B.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=be,B.uniformsList=null,be}function ad(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Va.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ld(E,U){const z=A.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function l_(E,U,z,B,O){U.isScene!==!0&&(U=Re),y.resetTextureUnits();const ue=U.fog,ge=B.isMeshStandardMaterial?U.environment:null,Se=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:$i,Ae=(B.isMeshStandardMaterial?X:N).get(B.envMap||ge),Le=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,be=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),De=!!z.morphAttributes.position,ht=!!z.morphAttributes.normal,tn=!!z.morphAttributes.color;let Mt=zi;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Mt=g.toneMapping);const Xn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=Xn!==void 0?Xn.length:0,Ne=A.get(B),Xl=p.state.lights;if(V===!0&&(Q===!0||E!==T)){const fn=E===T&&B.id===L;he.setState(B,E,fn)}let rt=!1;B.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Xl.state.version||Ne.outputColorSpace!==Se||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==Ae||B.fog===!0&&Ne.fog!==ue||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==he.numPlanes||Ne.numIntersection!==he.numIntersection)||Ne.vertexAlphas!==Le||Ne.vertexTangents!==be||Ne.morphTargets!==De||Ne.morphNormals!==ht||Ne.morphColors!==tn||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==at)&&(rt=!0):(rt=!0,Ne.__version=B.version);let Ki=Ne.currentProgram;rt===!0&&(Ki=Hs(B,U,O));let ud=!1,Do=!1,jl=!1;const Dt=Ki.getUniforms(),hi=Ne.uniforms;if(we.useProgram(Ki.program)&&(ud=!0,Do=!0,jl=!0),B.id!==L&&(L=B.id,Do=!0),ud||T!==E){Dt.setValue(F,"projectionMatrix",E.projectionMatrix),Dt.setValue(F,"viewMatrix",E.matrixWorldInverse);const fn=Dt.map.cameraPosition;fn!==void 0&&fn.setValue(F,Ce.setFromMatrixPosition(E.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Dt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,Do=!0,jl=!0)}if(O.isSkinnedMesh){Dt.setOptional(F,O,"bindMatrix"),Dt.setOptional(F,O,"bindMatrixInverse");const fn=O.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Dt.setValue(F,"boneTexture",fn.boneTexture,y))}O.isBatchedMesh&&(Dt.setOptional(F,O,"batchingTexture"),Dt.setValue(F,"batchingTexture",O._matricesTexture,y));const Yl=z.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0)&&me.update(O,z,Ki),(Do||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,Dt.setValue(F,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(hi.envMap.value=Ae,hi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(hi.envMapIntensity.value=U.environmentIntensity),Do&&(Dt.setValue(F,"toneMappingExposure",g.toneMappingExposure),Ne.needsLights&&u_(hi,jl),ue&&B.fog===!0&&xe.refreshFogUniforms(hi,ue),xe.refreshMaterialUniforms(hi,B,J,ee,p.state.transmissionRenderTarget),Va.upload(F,ad(Ne),hi,y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Va.upload(F,ad(Ne),hi,y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Dt.setValue(F,"center",O.center),Dt.setValue(F,"modelViewMatrix",O.modelViewMatrix),Dt.setValue(F,"normalMatrix",O.normalMatrix),Dt.setValue(F,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const fn=B.uniformsGroups;for(let $l=0,f_=fn.length;$l<f_;$l++){const cd=fn[$l];nt.update(cd,Ki),nt.bind(cd,Ki)}}return Ki}function u_(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function c_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,z){A.get(E.texture).__webglTexture=U,A.get(E.depthTexture).__webglTexture=z;const B=A.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const z=A.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,z=0){w=E,b=U,C=z;let B=!0,O=null,ue=!1,ge=!1;if(E){const Ae=A.get(E);Ae.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(F.FRAMEBUFFER,null),B=!1):Ae.__webglFramebuffer===void 0?y.setupRenderTarget(E):Ae.__hasExternalTextures&&y.rebindTextures(E,A.get(E.texture).__webglTexture,A.get(E.depthTexture).__webglTexture);const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ge=!0);const be=A.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[U])?O=be[U][z]:O=be[U],ue=!0):E.samples>0&&y.useMultisampledRTT(E)===!1?O=A.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?O=be[z]:O=be,S.copy(E.viewport),I.copy(E.scissor),W=E.scissorTest}else S.copy(G).multiplyScalar(J).floor(),I.copy(ne).multiplyScalar(J).floor(),W=de;if(we.bindFramebuffer(F.FRAMEBUFFER,O)&&B&&we.drawBuffers(E,O),we.viewport(S),we.scissor(I),we.setScissorTest(W),ue){const Ae=A.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,z)}else if(ge){const Ae=A.get(E.texture),Le=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,Le)}L=-1},this.readRenderTargetPixels=function(E,U,z,B,O,ue,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){we.bindFramebuffer(F.FRAMEBUFFER,Se);try{const Ae=E.texture,Le=Ae.format,be=Ae.type;if(Le!==Vn&&je.convert(Le)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=be===ml&&(Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float"));if(be!==Bi&&je.convert(be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&be!==Pi&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&z>=0&&z<=E.height-O&&F.readPixels(U,z,B,O,je.convert(Le),je.convert(be),ue)}finally{const Ae=w!==null?A.get(w).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(E,U,z=0){const B=Math.pow(2,-z),O=Math.floor(U.image.width*B),ue=Math.floor(U.image.height*B);y.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,E.x,E.y,O,ue),we.unbindTexture()},this.copyTextureToTexture=function(E,U,z,B=0){const O=U.image.width,ue=U.image.height,ge=je.convert(z.format),Se=je.convert(z.type);y.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,E.x,E.y,O,ue,ge,Se,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,ge,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,B,E.x,E.y,ge,Se,U.image),B===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z,B,O=0){const ue=Math.round(E.max.x-E.min.x),ge=Math.round(E.max.y-E.min.y),Se=E.max.z-E.min.z+1,Ae=je.convert(B.format),Le=je.convert(B.type);let be;if(B.isData3DTexture)y.setTexture3D(B,0),be=F.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)y.setTexture2DArray(B,0),be=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const De=F.getParameter(F.UNPACK_ROW_LENGTH),ht=F.getParameter(F.UNPACK_IMAGE_HEIGHT),tn=F.getParameter(F.UNPACK_SKIP_PIXELS),Mt=F.getParameter(F.UNPACK_SKIP_ROWS),Xn=F.getParameter(F.UNPACK_SKIP_IMAGES),at=z.isCompressedTexture?z.mipmaps[O]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,at.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(be,O,U.x,U.y,U.z,ue,ge,Se,Ae,Le,at.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(be,O,U.x,U.y,U.z,ue,ge,Se,Ae,at.data):F.texSubImage3D(be,O,U.x,U.y,U.z,ue,ge,Se,Ae,Le,at),F.pixelStorei(F.UNPACK_ROW_LENGTH,De),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),F.pixelStorei(F.UNPACK_SKIP_PIXELS,tn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xn),O===0&&B.generateMipmaps&&F.generateMipmap(be),we.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?y.setTextureCube(E,0):E.isData3DTexture?y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?y.setTexture2DArray(E,0):y.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){b=0,C=0,w=null,we.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===nd?"display-p3":"srgb",n.unpackColorSpace=qe.workingColorSpace===Hl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $w extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class r_ extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yp=new vt,rf=new Hv,Ra=new Vl,Pa=new k;class qw extends en{constructor(e=new di,n=new r_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=o,e.ray.intersectsSphere(Ra)===!1)return;Yp.copy(r).invert(),rf.copy(e.ray).applyMatrix4(Yp);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let _=h,x=m;_<x;_++){const p=u.getX(_);Pa.fromBufferAttribute(d,p),$p(Pa,p,l,r,e,n,this)}}else{const h=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let _=h,x=m;_<x;_++)Pa.fromBufferAttribute(d,_),$p(Pa,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function $p(t,e,n,i,r,o,s){const a=rf.distanceSqToPoint(t);if(a<n){const l=new k;rf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=td);function Kw(){const t=$.useRef();return $.useEffect(()=>{const i=t.current,r=new $w,o=new mn(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Yw({alpha:!0}),a=new di,l=new r_({color:16777215}),u=new Ge,f=new Ge;let d=500,h=window.innerWidth<640,m=!0;o.position.z=500,s.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(s.domElement);const _=new Float32Array(1e3*3);for(let M=0;M<1e3;M++)_[M*3]=g(),_[M*3+1]=g(),_[M*3+2]=g();a.setAttribute("position",new Dn(_,3));const x=new qw(a,l);r.add(x);function p(M){u.x=M.clientX/window.innerWidth*2-1,u.y=-(M.clientY/window.innerHeight)*2+1}window.addEventListener("mousemove",p,!1);const c=setInterval(()=>{d+=m?1:-1,d>=400?m=!1:d<=-200&&(m=!0)},100);function v(){requestAnimationFrame(v),h?(f.x+=.001,f.y+=.001):(f.x=u.y*.2,f.y=u.x*.2),x.rotation.x+=(f.x-x.rotation.x)*.05,x.rotation.y+=(f.y-x.rotation.y)*.05,o.position.z+=(d-o.position.z)*.01,s.render(r,o)}v();function g(){return Math.random()*800-400}return()=>{window.removeEventListener("mousemove",p),clearInterval(c),i&&i.removeChild(s.domElement)}},[]),_n.createElement("div",{ref:t,id:"galaxy"})}var o_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qp=_n.createContext&&_n.createContext(o_),Zw=["attr","size","title"];function Qw(t,e){if(t==null)return{};var n=Jw(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Jw(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Sl.apply(this,arguments)}function Kp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ml(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kp(Object(n),!0).forEach(function(i){eA(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function eA(t,e,n){return e=tA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tA(t){var e=nA(t,"string");return typeof e=="symbol"?e:String(e)}function nA(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function s_(t){return t&&t.map((e,n)=>_n.createElement(e.tag,Ml({key:n},e.attr),s_(e.child)))}function Cr(t){return e=>_n.createElement(iA,Sl({attr:Ml({},t.attr)},e),s_(t.child))}function iA(t){var e=n=>{var{attr:i,size:r,title:o}=t,s=Qw(t,Zw),a=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),_n.createElement("svg",Sl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:l,style:Ml(Ml({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&_n.createElement("title",null,o),t.children)};return qp!==void 0?_n.createElement(qp.Consumer,null,n=>e(n)):e(o_)}function rA(t){return Cr({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function Zp(t){return Cr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(t)}function oA(t){return Cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function sA(t){return Cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(t)}const aA=()=>{const[t,e]=$.useState([]),[n,i]=$.useState(!1),[r,o]=$.useState(null),[s,a]=$.useState(window.innerWidth>640),l=$.useMemo(()=>["FRC2706/MergeData","read-me-35/read-me-35.github.io"],[]),u=[{name:"Food Classification 86M",repo:"jwt2706/google-vit-base-patch16-224-in21k-finetuned-food-classification-86M-v0.1"}];return $.useEffect(()=>{const f=async m=>{try{const _=await fetch(`https://api.github.com/repos/${m}`);if(!_.ok)throw new Error(`HTTP error! status: ${_.status}`);return await _.json()}catch(_){o(_)}},d=async()=>{try{const m=await fetch("https://api.github.com/users/jwt2706/repos");if(!m.ok)throw new Error(`HTTP error! status: ${m.status}`);return(await m.json()).filter(x=>x.description&&x.description.includes("[s!]"))}catch(m){o(m)}};(async()=>{i(!0);try{const m=await d();let _=[];return Array.isArray(l)&&(_=await Promise.all(l.map(f))),[...m,..._]}catch(m){o(m)}finally{i(!1)}})().then(m=>{if(m){const _=m.filter(x=>!!x);_.sort((x,p)=>new Date(p.created_at).getTime()-new Date(x.created_at).getTime()),e(_)}})},[l]),ie.jsxs("div",{children:[ie.jsx("button",{onClick:()=>a(!s),className:"fixed top-0 left-0 m-4 z-20 text-white border border-white hover:bg-white hover:text-black font-bold px-2 py-1 rounded-md",children:s?"Hide":"Show"}),ie.jsxs("aside",{className:`fixed left-0 top-0 z-10 h-screen w-64 bg-gray-800 bg-opacity-90 sm:bg-opacity-50 text-white p-6 transition-all duration-500 shadow-lg overflow-y-auto ${s?"translate-x-0":"-translate-x-full"}`,children:[ie.jsx("br",{}),ie.jsx("h2",{className:"text-2xl mt-4 text-center",children:"Featured Projects"}),ie.jsx("h6",{className:"text-center mb-4 text-sm text-gray-400",children:"See docs (and demo if available)"}),n?ie.jsx("p",{children:"Fetching repos..."}):r?ie.jsx("p",{children:"There was a problem fetching the repos... D:"}):ie.jsxs(ie.Fragment,{children:[ie.jsx("ul",{className:"list-none list-inside",children:t.map(f=>ie.jsxs("li",{className:"mb-2 px-4 py-3 hover:bg-gray-700 rounded border border-gray-500 border-opacity-50",title:f.description.replace("[s!]",""),children:[ie.jsx("span",{className:"block text-left",children:f.name}),ie.jsx("span",{className:"block text-sm mb-2 text-gray-400 truncate",children:f.description.replace("[s!]","")}),ie.jsxs("div",{className:"flex space-x-2",children:[f.has_pages&&ie.jsx("a",{href:`https://${f.owner.login}.github.io/${f.name}`,className:"text-blue-400 transition-transform duration-200 transform hover:scale-150","aria-label":"External link to project",children:ie.jsx(sA,{})}),ie.jsx("a",{href:`https://github.com/${f.owner.login}/${f.name}/blob/main/README.md`,className:"text-blue-400 transition-transform duration-200 transform hover:scale-150",target:"_blank",rel:"noopener noreferrer",title:"Go to README","aria-label":"External link to project documentation",children:ie.jsx(Zp,{})})]})]},f.id))}),ie.jsx("hr",{className:"my-4"}),ie.jsx("h2",{className:"text-2xl mt-4 text-center",children:"Hugging Face"}),ie.jsx("h6",{className:"text-center mb-4 text-sm text-gray-400",children:"Neural network stuff"}),ie.jsx("ul",{className:"list-none list-inside",children:u.map(f=>ie.jsxs("li",{className:"mb-2 px-4 py-3 hover:bg-gray-700 rounded border border-gray-500 border-opacity-50",children:[ie.jsx("span",{className:"block text-left mb-2",children:f.name}),ie.jsx("a",{href:`https://huggingface.co/${f.repo}`,className:"text-blue-400 transition-transform duration-200 transform hover:scale-150",target:"_blank",rel:"noopener noreferrer",title:"See model on Hugging Face","aria-label":"External link to Hugging Face repository",children:ie.jsx(Zp,{})})]},f.repo))})]})]})]})};var Bt=function(){return Bt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Bt.apply(this,arguments)};function jo(t,e,n){var i=$.useRef(e);$.useEffect(function(){i.current=e}),$.useEffect(function(){var r=n===void 0?window:n,o=function(s){return i.current(s)};return r==null||r.addEventListener(t,o),function(){r==null||r.removeEventListener(t,o)}},[t,n])}var lA=function(){var t=$.useState({info:"",Android:function(){return null},BlackBerry:function(){return null},IEMobile:function(){return null},iOS:function(){return null},iPad:function(){return null},OperaMini:function(){return null},any:function(){return!1}}),e=t[0],n=t[1];return $.useEffect(function(){if(typeof navigator<"u"){var i=navigator.userAgent;n(function(r){return Bt(Bt({},r),{info:i,Android:function(){return i.match(/Android/i)},BlackBerry:function(){return i.match(/BlackBerry/i)},IEMobile:function(){return i.match(/IEMobile/i)},iOS:function(){return i.match(/iPhone|iPad|iPod/i)},iPad:function(){return!!(i.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)},OperaMini:function(){return i.match(/Opera Mini/i)},any:function(){var o,s,a,l,u;return!!(!((o=r.Android())===null||o===void 0)&&o.length||!((s=r.BlackBerry())===null||s===void 0)&&s.length||!((a=r.iOS())===null||a===void 0)&&a.length||r.iPad()||!((l=r.OperaMini())===null||l===void 0)&&l.length||!((u=r.IEMobile())===null||u===void 0)&&u.length)}})})}},[]),e};function Qp(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(typeof e!="function")throw new TypeError("callback must be a function");for(var r=Object(t),o=r.length>>>0,s=n[2],a=0;a<o;a++){var l=r[a];if(e.call(s,l,a,r))return l}}function uA(t){var e=t.clickables,n=e===void 0?["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]:e,i=t.children,r=t.color,o=r===void 0?"220, 90, 90":r,s=t.innerScale,a=s===void 0?.6:s,l=t.innerSize,u=l===void 0?8:l,f=t.innerStyle,d=t.outerAlpha,h=d===void 0?.4:d,m=t.outerScale,_=m===void 0?6:m,x=t.outerSize,p=x===void 0?8:x,c=t.outerStyle,v=t.showSystemCursor,g=v===void 0?!1:v,M=t.trailingSpeed,b=M===void 0?8:M,C=$.useMemo(function(){return{children:i,color:o,innerScale:a,innerSize:u,innerStyle:f,outerAlpha:h,outerScale:_,outerSize:p,outerStyle:c}},[i,o,a,u,f,h,_,p,c]),w=$.useRef(null),L=$.useRef(null),T=$.useRef(null),S=$.useRef(null),I=$.useState({x:0,y:0}),W=I[0],D=I[1],Y=$.useState(!1),j=Y[0],ee=Y[1],J=$.useState(C),P=J[0],H=J[1],G=$.useState(!1),ne=G[0],de=G[1],ze=$.useState(!1),V=ze[0],Q=ze[1],ce=$.useRef(0),oe=$.useRef(0),Ce=$.useCallback(function(y){var N=y.clientX,X=y.clientY;D({x:N,y:X}),L.current!==null&&(L.current.style.top="".concat(X,"px"),L.current.style.left="".concat(N,"px")),ce.current=N,oe.current=X},[]),Re=$.useCallback(function(y){S.current!==void 0&&(W.x+=(ce.current-W.x)/b,W.y+=(oe.current-W.y)/b,w.current!==null&&(w.current.style.top="".concat(W.y,"px"),w.current.style.left="".concat(W.x,"px"))),S.current=y,T.current=requestAnimationFrame(Re)},[T]);$.useEffect(function(){return T.current=requestAnimationFrame(Re),function(){T.current!==null&&cancelAnimationFrame(T.current)}},[Re]);var Oe=function(y,N){return"".concat(parseInt(String(y*N)),"px")},F=$.useCallback(function(y,N,X){y&&(y.style.height=Oe(N,X),y.style.width=Oe(N,X))},[]),Fe=$.useCallback(function(){return de(!0)},[]),Me=$.useCallback(function(){return de(!1)},[]),dt=$.useCallback(function(){return ee(!0)},[]),we=$.useCallback(function(){return ee(!1)},[]);jo("mousemove",Ce),jo("mousedown",Fe),jo("mouseup",Me),jo("mouseover",dt),jo("mouseout",we),$.useEffect(function(){ne?(F(L.current,P.innerSize,P.innerScale),F(w.current,P.outerSize,P.outerScale)):(F(L.current,P.innerSize,1),F(w.current,P.outerSize,1))},[P.innerSize,P.innerScale,P.outerSize,P.outerScale,F,ne]),$.useEffect(function(){V&&(F(L.current,P.innerSize,P.innerScale*1.2),F(w.current,P.outerSize,P.outerScale*1.4))},[P.innerSize,P.innerScale,P.outerSize,P.outerScale,F,V]),$.useEffect(function(){L.current==null||w.current==null||(j?(L.current.style.opacity="1",w.current.style.opacity="1"):(L.current.style.opacity="0",w.current.style.opacity="0"))},[j]),$.useEffect(function(){var y=document.querySelectorAll(n.map(function(N){return typeof N=="object"&&(N!=null&&N.target)?N.target:N??""}).join(","));return y.forEach(function(N){g||(N.style.cursor="none");var X=typeof n=="object"?Qp(n,function(q){return typeof q=="object"&&N.matches(q.target)}):{},K=Bt(Bt({},C),X);N.addEventListener("mouseover",function(){de(!0),H(K)}),N.addEventListener("click",function(){de(!0),Q(!1)}),N.addEventListener("mousedown",function(){Q(!0)}),N.addEventListener("mouseup",function(){de(!0)}),N.addEventListener("mouseout",function(){de(!1),Q(!1),H(C)})}),function(){y.forEach(function(N){var X=typeof n=="object"?Qp(n,function(q){return typeof q=="object"&&N.matches(q.target)}):{},K=Bt(Bt({},C),X);N.removeEventListener("mouseover",function(){de(!0),H(K)}),N.removeEventListener("click",function(){de(!0),Q(!1)}),N.removeEventListener("mousedown",function(){Q(!0)}),N.removeEventListener("mouseup",function(){de(!0)}),N.removeEventListener("mouseout",function(){de(!1),Q(!1),H(C)})})}},[ne,n,g,C]),$.useEffect(function(){typeof window=="object"&&!g&&(document.body.style.cursor="none")},[g]);var We={zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:"opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"},A={cursorInner:Bt(Bt({width:P.children?"auto":P.innerSize,height:P.children?"auto":P.innerSize,backgroundColor:P.children?"transparent":"rgba(".concat(P.color,", 1)")},We),P.innerStyle&&P.innerStyle),cursorOuter:Bt(Bt({width:P.outerSize,height:P.outerSize,backgroundColor:"rgba(".concat(P.color,", ").concat(P.outerAlpha,")")},We),P.outerStyle&&P.outerStyle)};return ie.jsxs(ie.Fragment,{children:[ie.jsx("div",{ref:w,style:A.cursorOuter}),ie.jsx("div",Bt({ref:L,style:A.cursorInner},{children:ie.jsx("div",Bt({style:{opacity:P.children?1:0,transition:"opacity 0.3s ease-in-out"}},{children:P.children}))}))]})}function cA(t){var e=t.children,n=t.clickables,i=t.color,r=t.innerScale,o=t.innerSize,s=t.innerStyle,a=t.outerAlpha,l=t.outerScale,u=t.outerSize,f=t.outerStyle,d=t.showSystemCursor,h=t.trailingSpeed,m=lA();return typeof navigator<"u"&&m.any()?ie.jsx(ie.Fragment,{}):ie.jsx(uA,Bt({clickables:n,color:i,innerScale:r,innerSize:o,innerStyle:s,outerAlpha:a,outerScale:l,outerSize:u,outerStyle:f,showSystemCursor:d,trailingSpeed:h},{children:e}))}function fA(t){return Cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M96.85 286.62a8 8 0 0 0-12.53 8.25C102.07 373.28 172.3 432 256 432a175.31 175.31 0 0 0 52.41-8 8 8 0 0 0 .79-15 1120 1120 0 0 1-109.48-55.61 1126.24 1126.24 0 0 1-102.87-66.77zm395.87 52.89c-4.19-5.58-9.11-11.44-14.7-17.53a15.83 15.83 0 0 0-26.56 5.13c0 .16-.11.31-.17.47a15.75 15.75 0 0 0 3.15 16.06c22.74 25 26.42 38.51 25.48 41.36-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46-6.76-2.08-13.79-4.49a176.76 176.76 0 0 0 19.54-27.25c.17-.29.35-.58.52-.88A175.39 175.39 0 0 0 432 256a178.87 178.87 0 0 0-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 0 0-106.4 35.89 177.4 177.4 0 0 0-45.83 51.84c-.16.29-.34.58-.51.87a175.48 175.48 0 0 0-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14-29.57-30.26-33.09-45.61-32.16-48.45 2-2.23 15.54-5.87 48.62 1.31A15.82 15.82 0 0 0 96.22 123l.36-.44a15.74 15.74 0 0 0-8.67-25.43A237.38 237.38 0 0 0 64.13 93c-30.72-3.53-50.83 2.52-59.78 18-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64 7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19 9.09-15.62 4.08-36.32-14.86-61.5z"},child:[]}]})(t)}const dA=$.createContext(void 0),hA=({children:t,className:e,containerClassName:n})=>{const i=$.useRef(null),[r,o]=$.useState(!1),s=a=>{if(!i.current)return;const{left:l,top:u,width:f,height:d}=i.current.getBoundingClientRect(),h=(a.clientX-l-f/2)/25,m=-(a.clientY-u-d/2)/25;i.current.style.transform=`rotateY(${h}deg) rotateX(${m}deg)`};return $.useEffect(()=>(window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}),[]),ie.jsx(dA.Provider,{value:[r,o],children:ie.jsx("div",{className:"py-10 flex items-center justify-center "+(n||""),style:{perspective:"1000px"},children:ie.jsx("div",{ref:i,className:"flex items-center justify-center relative transition-all duration-200 ease-linear "+(e||""),style:{transformStyle:"preserve-3d"},children:t})})})},pA=({children:t,className:e})=>ie.jsx("div",{className:"h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d] "+(e||""),children:t}),Jp=({as:t="div",children:e,className:n,translateX:i=0,translateY:r=0,translateZ:o=0,rotateX:s=0,rotateY:a=0,rotateZ:l=0,...u})=>{const f=$.useRef(null),d=$.useCallback(()=>{f.current&&(f.current.style.transform=`translateX(${i}px) translateY(${r}px) translateZ(${o}px) rotateX(${s}deg) rotateY(${a}deg) rotateZ(${l}deg)`)},[s,a,l,i,r,o]);return $.useEffect(()=>{d()},[d]),ie.jsx(t,{ref:f,className:"w-fit transition duration-200 ease-linear "+(n||""),...u,children:e})},mA=()=>ie.jsx(hA,{className:"w-full sm:w-80 p-4 sm:p-6",children:ie.jsxs(pA,{className:"bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border  ",children:[ie.jsx(Jp,{className:"text-xl mb-2 font-bold mx-auto text-neutral-600 dark:text-white",children:"Check out my projects, or contact me!"}),ie.jsxs(Jp,{translateZ:"75",className:"flex flex-col sm:flex-row justify-center sm:justify-around items-center w-full mt-4",children:[ie.jsx("div",{className:"flex flex-col items-center logo svg",children:ie.jsxs("a",{href:"https://github.com/jwt2706",target:"_blank",rel:"noopener noreferrer",className:"w-1/2 p-4 flex flex-col items-center",children:[ie.jsx(rA,{size:110,color:"black"}),ie.jsx("p",{className:"mt-4 mb-2 underline-animation",children:"github.com/jwt2706"})]})}),ie.jsx("div",{className:"flex flex-col items-center logo svg",children:ie.jsxs("a",{href:"mailto:work@jwt2706.ca",className:"w-1/2 p-4 flex flex-col items-center",children:[ie.jsx(oA,{size:110,color:"black"}),ie.jsx("p",{className:"mt-4 mb-2 underline-animation",children:"work@jwt2706.ca"})]})})]})]})});function gA(t){return Cr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M15 9.354a4 4 0 1 0 0 5.292"},child:[]}]})(t)}function vA(t){return Cr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(t)}const _A=()=>{const t=$.useState("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0);return ie.jsx("div",{className:"animate-fade-in",children:ie.jsxs("div",{className:"app flex flex-col min-h-screen text-white",children:[ie.jsx(aA,{}),ie.jsxs("main",{className:"scrollable flex-grow overflow-y-auto",children:[!t&&ie.jsx(cA,{innerSize:20,outerSize:16,color:"265, 265, 265",outerAlpha:.2,innerScale:.7,outerScale:5,clickables:["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]}),ie.jsxs("div",{children:[ie.jsx("br",{}),ie.jsx("div",{className:"mx-auto inline-block p-4",children:ie.jsx("div",{className:"transition-transform duration-500 ease-in-out hover:scale-130",children:ie.jsx(fA,{size:110,color:"black"})})}),ie.jsx("br",{}),ie.jsx("h1",{children:ie.jsx("span",{className:"text-4xl underline-animation",children:"Hey, I'm Jacob"})}),ie.jsx("br",{}),ie.jsxs("code",{className:"text-gray-400",children:["I'm a software engineering undergrad.",ie.jsx("br",{}),"Check out some of my projects on the sidebar!"]})]}),ie.jsx(mA,{}),ie.jsxs("a",{href:"/jwt2706_public.key",target:"_blank",rel:"noopener noreferrer","aria-label":"GPG key",className:"inline-flex items-center px-2 text-gray-400 text-lg bg-neutral-800 p-1 rounded mb-4",children:["GPG key",ie.jsx(vA,{className:"ml-2","aria-hidden":"true"})]})]}),ie.jsx("footer",{children:ie.jsxs("code",{children:["Made with <3 | ",ie.jsx(gA,{style:{display:"inline"}})," ","jwt2706 ",new Date().getFullYear()]})}),ie.jsx(Kw,{})]})})},xA=()=>{const t=Ev();return $.useEffect(()=>{t("/")},[t]),hy([{path:"/",element:ie.jsx(_A,{})},{path:"*",element:ie.jsx(Ay,{to:"/",replace:!0})}])},yA=()=>ie.jsx(by,{children:ie.jsx(xA,{})});tc.createRoot(document.getElementById("root")).render(_n.createElement(_n.StrictMode,null,_n.createElement(yA,null)));
