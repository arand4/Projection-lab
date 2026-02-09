(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function w0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function xS(){if(f_)return wo;f_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var h_;function SS(){return h_||(h_=1,qf.exports=xS()),qf.exports}var At=SS(),Yf={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function yS(){if(d_)return ie;d_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function _(O,$,ft){this.props=O,this.context=$,this.refs=y,this.updater=ft||b}_.prototype.isReactComponent={},_.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=_.prototype;function D(O,$,ft){this.props=O,this.context=$,this.refs=y,this.updater=ft||b}var C=D.prototype=new L;C.constructor=D,R(C,_.prototype),C.isPureReactComponent=!0;var K=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function U(O,$,ft){var V=ft.ref;return{$$typeof:o,type:O,key:$,ref:V!==void 0?V:null,props:ft}}function w(O,$){return U(O.type,$,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function ct(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ft){return $[ft]})}var rt=/\/+/g;function _t(O,$){return typeof O=="object"&&O!==null&&O.key!=null?ct(""+O.key):$.toString(36)}function vt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function($){O.status==="pending"&&(O.status="fulfilled",O.value=$)},function($){O.status==="pending"&&(O.status="rejected",O.reason=$)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,$,ft,V,ot){var pt=typeof O;(pt==="undefined"||pt==="boolean")&&(O=null);var yt=!1;if(O===null)yt=!0;else switch(pt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(O.$$typeof){case o:case e:yt=!0;break;case g:return yt=O._init,P(yt(O._payload),$,ft,V,ot)}}if(yt)return ot=ot(O),yt=V===""?"."+_t(O,0):V,K(ot)?(ft="",yt!=null&&(ft=yt.replace(rt,"$&/")+"/"),P(ot,$,ft,"",function(ne){return ne})):ot!=null&&(H(ot)&&(ot=w(ot,ft+(ot.key==null||O&&O.key===ot.key?"":(""+ot.key).replace(rt,"$&/")+"/")+yt)),$.push(ot)),1;yt=0;var zt=V===""?".":V+":";if(K(O))for(var Pt=0;Pt<O.length;Pt++)V=O[Pt],pt=zt+_t(V,Pt),yt+=P(V,$,ft,pt,ot);else if(Pt=M(O),typeof Pt=="function")for(O=Pt.call(O),Pt=0;!(V=O.next()).done;)V=V.value,pt=zt+_t(V,Pt++),yt+=P(V,$,ft,pt,ot);else if(pt==="object"){if(typeof O.then=="function")return P(vt(O),$,ft,V,ot);throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return yt}function Z(O,$,ft){if(O==null)return O;var V=[],ot=0;return P(O,V,"","",function(pt){return $.call(ft,pt,ot++)}),V}function j(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(ft){(O._status===0||O._status===-1)&&(O._status=1,O._result=ft)},function(ft){(O._status===0||O._status===-1)&&(O._status=2,O._result=ft)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var St=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:Z,forEach:function(O,$,ft){Z(O,function(){$.apply(this,arguments)},ft)},count:function(O){var $=0;return Z(O,function(){$++}),$},toArray:function(O){return Z(O,function($){return $})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ie.Activity=x,ie.Children=Et,ie.Component=_,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=D,ie.StrictMode=s,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ie.cache=function(O){return function(){return O.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(O,$,ft){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var V=R({},O.props),ot=O.key;if($!=null)for(pt in $.key!==void 0&&(ot=""+$.key),$)!Y.call($,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&$.ref===void 0||(V[pt]=$[pt]);var pt=arguments.length-2;if(pt===1)V.children=ft;else if(1<pt){for(var yt=Array(pt),zt=0;zt<pt;zt++)yt[zt]=arguments[zt+2];V.children=yt}return U(O.type,ot,V)},ie.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ie.createElement=function(O,$,ft){var V,ot={},pt=null;if($!=null)for(V in $.key!==void 0&&(pt=""+$.key),$)Y.call($,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ot[V]=$[V]);var yt=arguments.length-2;if(yt===1)ot.children=ft;else if(1<yt){for(var zt=Array(yt),Pt=0;Pt<yt;Pt++)zt[Pt]=arguments[Pt+2];ot.children=zt}if(O&&O.defaultProps)for(V in yt=O.defaultProps,yt)ot[V]===void 0&&(ot[V]=yt[V]);return U(O,pt,ot)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(O){return{$$typeof:d,render:O}},ie.isValidElement=H,ie.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:j}},ie.memo=function(O,$){return{$$typeof:p,type:O,compare:$===void 0?null:$}},ie.startTransition=function(O){var $=z.T,ft={};z.T=ft;try{var V=O(),ot=z.S;ot!==null&&ot(ft,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(B,St)}catch(pt){St(pt)}finally{$!==null&&ft.types!==null&&($.types=ft.types),z.T=$}},ie.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ie.use=function(O){return z.H.use(O)},ie.useActionState=function(O,$,ft){return z.H.useActionState(O,$,ft)},ie.useCallback=function(O,$){return z.H.useCallback(O,$)},ie.useContext=function(O){return z.H.useContext(O)},ie.useDebugValue=function(){},ie.useDeferredValue=function(O,$){return z.H.useDeferredValue(O,$)},ie.useEffect=function(O,$){return z.H.useEffect(O,$)},ie.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ie.useId=function(){return z.H.useId()},ie.useImperativeHandle=function(O,$,ft){return z.H.useImperativeHandle(O,$,ft)},ie.useInsertionEffect=function(O,$){return z.H.useInsertionEffect(O,$)},ie.useLayoutEffect=function(O,$){return z.H.useLayoutEffect(O,$)},ie.useMemo=function(O,$){return z.H.useMemo(O,$)},ie.useOptimistic=function(O,$){return z.H.useOptimistic(O,$)},ie.useReducer=function(O,$,ft){return z.H.useReducer(O,$,ft)},ie.useRef=function(O){return z.H.useRef(O)},ie.useState=function(O){return z.H.useState(O)},ie.useSyncExternalStore=function(O,$,ft){return z.H.useSyncExternalStore(O,$,ft)},ie.useTransition=function(){return z.H.useTransition()},ie.version="19.2.4",ie}var p_;function gd(){return p_||(p_=1,Yf.exports=yS()),Yf.exports}var Ve=gd();const D0=w0(Ve);var jf={exports:{}},Do={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function MS(){return m_||(m_=1,(function(o){function e(P,Z){var j=P.length;P.push(Z);t:for(;0<j;){var St=j-1>>>1,Et=P[St];if(0<l(Et,Z))P[St]=Z,P[j]=Et,j=St;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Z=P[0],j=P.pop();if(j!==Z){P[0]=j;t:for(var St=0,Et=P.length,O=Et>>>1;St<O;){var $=2*(St+1)-1,ft=P[$],V=$+1,ot=P[V];if(0>l(ft,j))V<Et&&0>l(ot,ft)?(P[St]=ot,P[V]=j,St=V):(P[St]=ft,P[$]=j,St=$);else if(V<Et&&0>l(ot,j))P[St]=ot,P[V]=j,St=V;else break t}}return Z}function l(P,Z){var j=P.sortIndex-Z.sortIndex;return j!==0?j:P.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,S=3,M=!1,b=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=P)s(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function K(P){if(R=!1,C(P),!b)if(i(m)!==null)b=!0,B||(B=!0,ct());else{var Z=i(p);Z!==null&&vt(K,Z.startTime-P)}}var B=!1,z=-1,Y=5,U=-1;function w(){return y?!0:!(o.unstable_now()-U<Y)}function H(){if(y=!1,B){var P=o.unstable_now();U=P;var Z=!0;try{t:{b=!1,R&&(R=!1,L(z),z=-1),M=!0;var j=S;try{e:{for(C(P),x=i(m);x!==null&&!(x.expirationTime>P&&w());){var St=x.callback;if(typeof St=="function"){x.callback=null,S=x.priorityLevel;var Et=St(x.expirationTime<=P);if(P=o.unstable_now(),typeof Et=="function"){x.callback=Et,C(P),Z=!0;break e}x===i(m)&&s(m),C(P)}else s(m);x=i(m)}if(x!==null)Z=!0;else{var O=i(p);O!==null&&vt(K,O.startTime-P),Z=!1}}break t}finally{x=null,S=j,M=!1}Z=void 0}}finally{Z?ct():B=!1}}}var ct;if(typeof D=="function")ct=function(){D(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,_t=rt.port2;rt.port1.onmessage=H,ct=function(){_t.postMessage(null)}}else ct=function(){_(H,0)};function vt(P,Z){z=_(function(){P(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var j=S;S=Z;try{return P()}finally{S=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=S;S=P;try{return Z()}finally{S=j}},o.unstable_scheduleCallback=function(P,Z,j){var St=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?St+j:St):j=St,P){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=j+Et,P={id:g++,callback:Z,priorityLevel:P,startTime:j,expirationTime:Et,sortIndex:-1},j>St?(P.sortIndex=j,e(p,P),i(m)===null&&P===i(p)&&(R?(L(z),z=-1):R=!0,vt(K,j-St))):(P.sortIndex=Et,e(m,P),b||M||(b=!0,B||(B=!0,ct()))),P},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(P){var Z=S;return function(){var j=S;S=Z;try{return P.apply(this,arguments)}finally{S=j}}}})(Kf)),Kf}var g_;function ES(){return g_||(g_=1,Zf.exports=MS()),Zf.exports}var Qf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function TS(){if(__)return Rn;__=1;var o=gd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var v_;function bS(){if(v_)return Qf.exports;v_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qf.exports=TS(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function AS(){if(x_)return Do;x_=1;var o=ES(),e=gd(),i=bS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,E=c.child;E;){if(E===a){v=!0,a=c,r=f;break}if(E===r){v=!0,r=c,a=f;break}E=E.sibling}if(!v){for(E=f.child;E;){if(E===a){v=!0,a=f,r=c;break}if(E===r){v=!0,r=f,a=c;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function _t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case K:return"Suspense";case B:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case D:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:_t(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return _t(t(n))}catch{}}return null}var vt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},St=[],Et=-1;function O(t){return{current:t}}function $(t){0>Et||(t.current=St[Et],St[Et]=null,Et--)}function ft(t,n){Et++,St[Et]=t.current,t.current=n}var V=O(null),ot=O(null),pt=O(null),yt=O(null);function zt(t,n){switch(ft(pt,n),ft(ot,t),ft(V,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Og(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Og(n),t=Pg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(V),ft(V,t)}function Pt(){$(V),$(ot),$(pt)}function ne(t){t.memoizedState!==null&&ft(yt,t);var n=V.current,a=Pg(n,t.type);n!==a&&(ft(ot,t),ft(V,a))}function ce(t){ot.current===t&&($(V),$(ot)),yt.current===t&&($(yt),bo._currentValue=j)}var Qt,Ae;function G(t){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",Ae=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+Ae}var dn=!1;function fe(t,n){if(!t||dn)return"";dn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var tt=st}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(st){tt=st}t.call(gt.prototype)}}else{try{throw Error()}catch(st){tt=st}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&tt&&typeof st.stack=="string")return[st.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],E=f[1];if(v&&E){var I=v.split(`
`),J=E.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===J.length)for(r=I.length-1,c=J.length-1;1<=r&&0<=c&&I[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==J[c]){var ut=`
`+I[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=c);break}}}finally{dn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?G(a):""}function me(t,n){switch(t.tag){case 26:case 27:case 5:return G(t.type);case 16:return G("Lazy");case 13:return t.child!==n&&n!==null?G("Suspense Fallback"):G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return fe(t.type,!1);case 11:return fe(t.type.render,!1);case 1:return fe(t.type,!0);case 31:return G("Activity");default:return""}}function Zt(t){try{var n="",a=null;do n+=me(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,Yt=o.unstable_scheduleCallback,N=o.unstable_cancelCallback,T=o.unstable_shouldYield,et=o.unstable_requestPaint,ht=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,Ut=o.unstable_NormalPriority,It=o.unstable_LowPriority,ge=o.unstable_IdlePriority,bt=o.log,Bt=o.unstable_setDisableYieldValue,jt=null,Wt=null;function Ot(t){if(typeof bt=="function"&&Bt(t),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(jt,t)}catch{}}var $t=Math.clz32?Math.clz32:k,se=Math.log,Oe=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(se(t)/Oe|0)|0}var Rt=256,lt=262144,xt=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Lt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Ct(r):(v&=E,v!==0?c=Ct(v):a||(a=E&~t,a!==0&&(c=Ct(a))))):(E=r&~f,E!==0?c=Ct(E):v!==0?c=Ct(v):a||(a=r&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function We(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function on(){var t=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),t}function Me(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function di(t,n,a,r,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,I=t.expirationTimes,J=t.hiddenUpdates;for(a=v&~a;0<a;){var ut=31-$t(a),gt=1<<ut;E[ut]=0,I[ut]=-1;var tt=J[ut];if(tt!==null)for(J[ut]=null,ut=0;ut<tt.length;ut++){var st=tt[ut];st!==null&&(st.lane&=-536870913)}a&=~gt}r!==0&&Ir(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ir(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-$t(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Br(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-$t(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ri(t,n){var a=n&-n;return a=(a&42)!==0?1:Ka(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ka(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Cs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fr(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:a_(t.type))}function Qa(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var pi=Math.random().toString(36).slice(2),je="__reactFiber$"+pi,xn="__reactProps$"+pi,Bi="__reactContainer$"+pi,Hr="__reactEvents$"+pi,Fc="__reactListeners$"+pi,Hc="__reactHandles$"+pi,A="__reactResources$"+pi,X="__reactMarker$"+pi;function at(t){delete t[je],delete t[xn],delete t[Hr],delete t[Fc],delete t[Hc]}function it(t){var n=t[je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Bi]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vg(t);t!==null;){if(a=t[je])return a;t=Vg(t)}return n}t=a,a=t.parentNode}return null}function W(t){if(t=t[je]||t[Bi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Tt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function wt(t){var n=t[A];return n||(n=t[A]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Dt(t){t[X]=!0}var Gt=new Set,ee={};function Jt(t,n){Ft(t,n),Ft(t+"Capture",n)}function Ft(t,n){for(ee[t]=n,t=0;t<n.length;t++)Gt.add(n[t])}var ye=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ue={},Pe={};function bn(t){return De.call(Pe,t)?!0:De.call(Ue,t)?!1:ye.test(t)?Pe[t]=!0:(Ue[t]=!0,!1)}function xe(t,n,a){if(bn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Vt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ln(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ae(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pa(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Sn(t){if(!t._valueTracker){var n=Pn(t)?"checked":"value";t._valueTracker=pa(t,n,""+t[n])}}function ma(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Pn(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Ce(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ti=/[\n"\\]/g;function pn(t){return t.replace(ti,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,r,c,f,v,E){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ae(n)):t.value!==""+ae(n)&&(t.value=""+ae(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?ei(t,v,ae(n)):a!=null?ei(t,v,ae(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ae(E):t.removeAttribute("name")}function mi(t,n,a,r,c,f,v,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sn(t);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Sn(t)}function ei(t,n,a){n==="number"&&Ce(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fi(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function wd(t,n,a){if(n!=null&&(n=""+ae(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ae(a):""}function Dd(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(vt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ae(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Sn(t)}function ws(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var pv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ud(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||pv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ld(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Ud(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Ud(t,f,n[f])}function Gc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(t){return gv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var Vc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ds=null,Us=null;function Nd(t){var n=W(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[xn]||null;if(!c)throw Error(s(90));An(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&ma(r)}break t;case"textarea":wd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Fi(t,!!a.multiple,n,!1)}}}var Xc=!1;function Od(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var r=t(n);return r}finally{if(Xc=!1,(Ds!==null||Us!==null)&&(Ol(),Ds&&(n=Ds,t=Us,Us=Ds=null,Nd(n),t)))for(n=0;n<t.length;n++)Nd(t[n])}}function Gr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Gi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Wc=!1}var ga=null,qc=null,jo=null;function Pd(){if(jo)return jo;var t,n=qc,a=n.length,r,c="value"in ga?ga.value:ga.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return jo=c.slice(t,1<r?1-r:void 0)}function Zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function zd(){return!1}function zn(t){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:zd,this.isPropagationStopped=zd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=zn(Ja),kr=x({},Ja,{view:0,detail:0}),_v=zn(kr),Yc,jc,Xr,Jo=x({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(Yc=t.screenX-Xr.screenX,jc=t.screenY-Xr.screenY):jc=Yc=0,Xr=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Id=zn(Jo),vv=x({},Jo,{dataTransfer:0}),xv=zn(vv),Sv=x({},kr,{relatedTarget:0}),Zc=zn(Sv),yv=x({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=zn(yv),Ev=x({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tv=zn(Ev),bv=x({},Ja,{data:0}),Bd=zn(bv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Cv[t])?!!n[t]:!1}function Kc(){return wv}var Dv=x({},kr,{key:function(t){if(t.key){var n=Av[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uv=zn(Dv),Lv=x({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=zn(Lv),Nv=x({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),Ov=zn(Nv),Pv=x({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=zn(Pv),Iv=x({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=zn(Iv),Fv=x({},Ja,{newState:0,oldState:0}),Hv=zn(Fv),Gv=[9,13,27,32],Qc=Gi&&"CompositionEvent"in window,Wr=null;Gi&&"documentMode"in document&&(Wr=document.documentMode);var Vv=Gi&&"TextEvent"in window&&!Wr,Hd=Gi&&(!Qc||Wr&&8<Wr&&11>=Wr),Gd=" ",Vd=!1;function kd(t,n){switch(t){case"keyup":return Gv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function kv(t,n){switch(t){case"compositionend":return Xd(n);case"keypress":return n.which!==32?null:(Vd=!0,Gd);case"textInput":return t=n.data,t===Gd&&Vd?null:t;default:return null}}function Xv(t,n){if(Ls)return t==="compositionend"||!Qc&&kd(t,n)?(t=Pd(),jo=qc=ga=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hd&&n.locale!=="ko"?null:n.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Wv[t.type]:n==="textarea"}function qd(t,n,a,r){Ds?Us?Us.push(r):Us=[r]:Ds=r,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var qr=null,Yr=null;function qv(t){Cg(t,0)}function $o(t){var n=Tt(t);if(ma(n))return t}function Yd(t,n){if(t==="change")return n}var jd=!1;if(Gi){var Jc;if(Gi){var $c="oninput"in document;if(!$c){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),$c=typeof Zd.oninput=="function"}Jc=$c}else Jc=!1;jd=Jc&&(!document.documentMode||9<document.documentMode)}function Kd(){qr&&(qr.detachEvent("onpropertychange",Qd),Yr=qr=null)}function Qd(t){if(t.propertyName==="value"&&$o(Yr)){var n=[];qd(n,Yr,t,kc(t)),Od(qv,n)}}function Yv(t,n,a){t==="focusin"?(Kd(),qr=n,Yr=a,qr.attachEvent("onpropertychange",Qd)):t==="focusout"&&Kd()}function jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(Yr)}function Zv(t,n){if(t==="click")return $o(n)}function Kv(t,n){if(t==="input"||t==="change")return $o(n)}function Qv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Qv;function jr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function Jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $d(t,n){var a=Jd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jd(a)}}function tp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ep(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ce(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ce(t.document)}return n}function tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Jv=Gi&&"documentMode"in document&&11>=document.documentMode,Ns=null,eu=null,Zr=null,nu=!1;function np(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Ns==null||Ns!==Ce(r)||(r=Ns,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&jr(Zr,r)||(Zr=r,r=Gl(eu,"onSelect"),0<r.length&&(n=new Qo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ns)))}function $a(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Os={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},iu={},ip={};Gi&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function ts(t){if(iu[t])return iu[t];if(!Os[t])return t;var n=Os[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ip)return iu[t]=n[a];return t}var ap=ts("animationend"),sp=ts("animationiteration"),rp=ts("animationstart"),$v=ts("transitionrun"),tx=ts("transitionstart"),ex=ts("transitioncancel"),op=ts("transitionend"),lp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function gi(t,n){lp.set(t,n),Jt(n,[t])}var tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Ps=0,su=0;function el(){for(var t=Ps,n=su=Ps=0;n<t;){var a=ni[n];ni[n++]=null;var r=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&cp(a,c,f)}}function nl(t,n,a,r){ni[Ps++]=t,ni[Ps++]=n,ni[Ps++]=a,ni[Ps++]=r,su|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function ru(t,n,a,r){return nl(t,n,a,r),il(t)}function es(t,n){return nl(t,null,null,n),il(t)}function cp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-$t(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function il(t){if(50<vo)throw vo=0,gf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var zs={};function nx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,r){return new nx(t,n,a,r)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function up(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function al(t,n,a,r,c,f){var v=0;if(r=t,typeof t=="function")ou(t)&&(v=1);else if(typeof t=="string")v=oS(t,a,V.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=qn(31,a,n,c),t.elementType=U,t.lanes=f,t;case R:return ns(a.children,c,f,n);case y:v=8,c|=24;break;case _:return t=qn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case K:return t=qn(13,a,n,c),t.elementType=K,t.lanes=f,t;case B:return t=qn(19,a,n,c),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:v=10;break t;case L:v=9;break t;case C:v=11;break t;case z:v=14;break t;case Y:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(v,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ns(t,n,a,r){return t=qn(7,t,r,n),t.lanes=a,t}function lu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function fp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function cu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var hp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=hp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Zt(n)},hp.set(t,n),n)}return{value:t,source:n,stack:Zt(n)}}var Is=[],Bs=0,sl=null,Kr=0,ai=[],si=0,_a=null,Ci=1,wi="";function ki(t,n){Is[Bs++]=Kr,Is[Bs++]=sl,sl=t,Kr=n}function dp(t,n,a){ai[si++]=Ci,ai[si++]=wi,ai[si++]=_a,_a=t;var r=Ci;t=wi;var c=32-$t(r)-1;r&=~(1<<c),a+=1;var f=32-$t(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,Ci=1<<32-$t(n)+c|a<<c|r,wi=f+t}else Ci=1<<f|a<<c|r,wi=t}function uu(t){t.return!==null&&(ki(t,1),dp(t,1,0))}function fu(t){for(;t===sl;)sl=Is[--Bs],Is[Bs]=null,Kr=Is[--Bs],Is[Bs]=null;for(;t===_a;)_a=ai[--si],ai[si]=null,wi=ai[--si],ai[si]=null,Ci=ai[--si],ai[si]=null}function pp(t,n){ai[si++]=Ci,ai[si++]=wi,ai[si++]=_a,Ci=n.id,wi=n.overflow,_a=t}var yn=null,ke=null,Se=!1,va=null,ri=!1,hu=Error(s(519));function xa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(ii(n,t)),hu}function mp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[je]=t,n[xn]=r,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)pe(So[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),mi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Dd(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Lg(n.textContent,a)?(r.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),r.onScroll!=null&&pe("scroll",n),r.onScrollEnd!=null&&pe("scrollend",n),r.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||xa(t,!0)}function gp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:yn=yn.return}}function Fs(t){if(t!==yn)return!1;if(!Se)return gp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Uf(t.type,t.memoizedProps)),a=!a),a&&ke&&xa(t),gp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Gg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Gg(t)}else n===27?(n=ke,Na(t.type)?(t=zf,zf=null,ke=t):ke=n):ke=yn?li(t.stateNode.nextSibling):null;return!0}function is(){ke=yn=null,Se=!1}function du(){var t=va;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),va=null),t}function Qr(t){va===null?va=[t]:va.push(t)}var pu=O(null),as=null,Xi=null;function Sa(t,n,a){ft(pu,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=pu.current,$(pu)}function mu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function gu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var I=0;I<n.length;I++)if(E.context===n[I]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),mu(f.return,a,t),r||(v=null);break t}f=E.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),mu(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Hs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=c.type;Wn(c.pendingProps.value,v.value)||(t!==null?t.push(E):t=[E])}}else if(c===yt.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&gu(n,t,a,r),n.flags|=262144}function rl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ss(t){as=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return _p(as,t)}function ol(t,n){return as===null&&ss(t),_p(t,n)}function _p(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(t===null)throw Error(s(308));Xi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xi=Xi.next=n;return a}var ix=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ax=o.unstable_scheduleCallback,sx=o.unstable_NormalPriority,en={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new ix,data:new Map,refCount:0}}function Jr(t){t.refCount--,t.refCount===0&&ax(sx,function(){t.controller.abort()})}var $r=null,vu=0,Gs=0,Vs=null;function rx(t,n){if($r===null){var a=$r=[];vu=0,Gs=Mf(),Vs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return vu++,n.then(vp,vp),n}function vp(){if(--vu===0&&$r!==null){Vs!==null&&(Vs.status="fulfilled");var t=$r;$r=null,Gs=0,Vs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ox(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var xp=P.S;P.S=function(t,n){ng=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rx(t,n),xp!==null&&xp(t,n)};var rs=O(null);function xu(){var t=rs.current;return t!==null?t:Ge.pooledCache}function ll(t,n){n===null?ft(rs,rs.current):ft(rs,n.pool)}function Sp(){var t=xu();return t===null?null:{parent:en._currentValue,pool:t}}var ks=Error(s(460)),Su=Error(s(474)),cl=Error(s(542)),ul={then:function(){}};function yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t}throw ls=n,ks}}function os(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ls=a,ks):a}}var ls=null;function Ep(){if(ls===null)throw Error(s(459));var t=ls;return ls=null,t}function Tp(t){if(t===ks||t===cl)throw Error(s(483))}var Xs=null,to=0;function fl(t){var n=to;return to+=1,Xs===null&&(Xs=[]),Mp(Xs,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function hl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function bp(t){function n(q,F){if(t){var Q=q.deletions;Q===null?(q.deletions=[F],q.flags|=16):Q.push(F)}}function a(q,F){if(!t)return null;for(;F!==null;)n(q,F),F=F.sibling;return null}function r(q){for(var F=new Map;q!==null;)q.key!==null?F.set(q.key,q):F.set(q.index,q),q=q.sibling;return F}function c(q,F){return q=Vi(q,F),q.index=0,q.sibling=null,q}function f(q,F,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<F?(q.flags|=67108866,F):Q):(q.flags|=67108866,F)):(q.flags|=1048576,F)}function v(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,F,Q,dt){return F===null||F.tag!==6?(F=lu(Q,q.mode,dt),F.return=q,F):(F=c(F,Q),F.return=q,F)}function I(q,F,Q,dt){var qt=Q.type;return qt===R?ut(q,F,Q.props.children,dt,Q.key):F!==null&&(F.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Y&&os(qt)===F.type)?(F=c(F,Q.props),eo(F,Q),F.return=q,F):(F=al(Q.type,Q.key,Q.props,null,q.mode,dt),eo(F,Q),F.return=q,F)}function J(q,F,Q,dt){return F===null||F.tag!==4||F.stateNode.containerInfo!==Q.containerInfo||F.stateNode.implementation!==Q.implementation?(F=cu(Q,q.mode,dt),F.return=q,F):(F=c(F,Q.children||[]),F.return=q,F)}function ut(q,F,Q,dt,qt){return F===null||F.tag!==7?(F=ns(Q,q.mode,dt,qt),F.return=q,F):(F=c(F,Q),F.return=q,F)}function gt(q,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=lu(""+F,q.mode,Q),F.return=q,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case M:return Q=al(F.type,F.key,F.props,null,q.mode,Q),eo(Q,F),Q.return=q,Q;case b:return F=cu(F,q.mode,Q),F.return=q,F;case Y:return F=os(F),gt(q,F,Q)}if(vt(F)||ct(F))return F=ns(F,q.mode,Q,null),F.return=q,F;if(typeof F.then=="function")return gt(q,fl(F),Q);if(F.$$typeof===D)return gt(q,ol(q,F),Q);hl(q,F)}return null}function tt(q,F,Q,dt){var qt=F!==null?F.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return qt!==null?null:E(q,F,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===qt?I(q,F,Q,dt):null;case b:return Q.key===qt?J(q,F,Q,dt):null;case Y:return Q=os(Q),tt(q,F,Q,dt)}if(vt(Q)||ct(Q))return qt!==null?null:ut(q,F,Q,dt,null);if(typeof Q.then=="function")return tt(q,F,fl(Q),dt);if(Q.$$typeof===D)return tt(q,F,ol(q,Q),dt);hl(q,Q)}return null}function st(q,F,Q,dt,qt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(Q)||null,E(F,q,""+dt,qt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return q=q.get(dt.key===null?Q:dt.key)||null,I(F,q,dt,qt);case b:return q=q.get(dt.key===null?Q:dt.key)||null,J(F,q,dt,qt);case Y:return dt=os(dt),st(q,F,Q,dt,qt)}if(vt(dt)||ct(dt))return q=q.get(Q)||null,ut(F,q,dt,qt,null);if(typeof dt.then=="function")return st(q,F,Q,fl(dt),qt);if(dt.$$typeof===D)return st(q,F,Q,ol(F,dt),qt);hl(F,dt)}return null}function Ht(q,F,Q,dt){for(var qt=null,Te=null,kt=F,oe=F=0,ve=null;kt!==null&&oe<Q.length;oe++){kt.index>oe?(ve=kt,kt=null):ve=kt.sibling;var be=tt(q,kt,Q[oe],dt);if(be===null){kt===null&&(kt=ve);break}t&&kt&&be.alternate===null&&n(q,kt),F=f(be,F,oe),Te===null?qt=be:Te.sibling=be,Te=be,kt=ve}if(oe===Q.length)return a(q,kt),Se&&ki(q,oe),qt;if(kt===null){for(;oe<Q.length;oe++)kt=gt(q,Q[oe],dt),kt!==null&&(F=f(kt,F,oe),Te===null?qt=kt:Te.sibling=kt,Te=kt);return Se&&ki(q,oe),qt}for(kt=r(kt);oe<Q.length;oe++)ve=st(kt,q,oe,Q[oe],dt),ve!==null&&(t&&ve.alternate!==null&&kt.delete(ve.key===null?oe:ve.key),F=f(ve,F,oe),Te===null?qt=ve:Te.sibling=ve,Te=ve);return t&&kt.forEach(function(Ba){return n(q,Ba)}),Se&&ki(q,oe),qt}function Kt(q,F,Q,dt){if(Q==null)throw Error(s(151));for(var qt=null,Te=null,kt=F,oe=F=0,ve=null,be=Q.next();kt!==null&&!be.done;oe++,be=Q.next()){kt.index>oe?(ve=kt,kt=null):ve=kt.sibling;var Ba=tt(q,kt,be.value,dt);if(Ba===null){kt===null&&(kt=ve);break}t&&kt&&Ba.alternate===null&&n(q,kt),F=f(Ba,F,oe),Te===null?qt=Ba:Te.sibling=Ba,Te=Ba,kt=ve}if(be.done)return a(q,kt),Se&&ki(q,oe),qt;if(kt===null){for(;!be.done;oe++,be=Q.next())be=gt(q,be.value,dt),be!==null&&(F=f(be,F,oe),Te===null?qt=be:Te.sibling=be,Te=be);return Se&&ki(q,oe),qt}for(kt=r(kt);!be.done;oe++,be=Q.next())be=st(kt,q,oe,be.value,dt),be!==null&&(t&&be.alternate!==null&&kt.delete(be.key===null?oe:be.key),F=f(be,F,oe),Te===null?qt=be:Te.sibling=be,Te=be);return t&&kt.forEach(function(vS){return n(q,vS)}),Se&&ki(q,oe),qt}function Be(q,F,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var qt=Q.key;F!==null;){if(F.key===qt){if(qt=Q.type,qt===R){if(F.tag===7){a(q,F.sibling),dt=c(F,Q.props.children),dt.return=q,q=dt;break t}}else if(F.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Y&&os(qt)===F.type){a(q,F.sibling),dt=c(F,Q.props),eo(dt,Q),dt.return=q,q=dt;break t}a(q,F);break}else n(q,F);F=F.sibling}Q.type===R?(dt=ns(Q.props.children,q.mode,dt,Q.key),dt.return=q,q=dt):(dt=al(Q.type,Q.key,Q.props,null,q.mode,dt),eo(dt,Q),dt.return=q,q=dt)}return v(q);case b:t:{for(qt=Q.key;F!==null;){if(F.key===qt)if(F.tag===4&&F.stateNode.containerInfo===Q.containerInfo&&F.stateNode.implementation===Q.implementation){a(q,F.sibling),dt=c(F,Q.children||[]),dt.return=q,q=dt;break t}else{a(q,F);break}else n(q,F);F=F.sibling}dt=cu(Q,q.mode,dt),dt.return=q,q=dt}return v(q);case Y:return Q=os(Q),Be(q,F,Q,dt)}if(vt(Q))return Ht(q,F,Q,dt);if(ct(Q)){if(qt=ct(Q),typeof qt!="function")throw Error(s(150));return Q=qt.call(Q),Kt(q,F,Q,dt)}if(typeof Q.then=="function")return Be(q,F,fl(Q),dt);if(Q.$$typeof===D)return Be(q,F,ol(q,Q),dt);hl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,F!==null&&F.tag===6?(a(q,F.sibling),dt=c(F,Q),dt.return=q,q=dt):(a(q,F),dt=lu(Q,q.mode,dt),dt.return=q,q=dt),v(q)):a(q,F)}return function(q,F,Q,dt){try{to=0;var qt=Be(q,F,Q,dt);return Xs=null,qt}catch(kt){if(kt===ks||kt===cl)throw kt;var Te=qn(29,kt,null,q.mode);return Te.lanes=dt,Te.return=q,Te}finally{}}}var cs=bp(!0),Ap=bp(!1),ya=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=il(t),cp(t,null,a),n}return nl(t,r,n,a),il(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Br(t,a)}}function Eu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function io(){if(Tu){var t=Vs;if(t!==null)throw t}}function ao(t,n,a,r){Tu=!1;var c=t.updateQueue;ya=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var I=E,J=I.next;I.next=null,v===null?f=J:v.next=J,v=I;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==v&&(E===null?ut.firstBaseUpdate=J:E.next=J,ut.lastBaseUpdate=I))}if(f!==null){var gt=c.baseState;v=0,ut=J=I=null,E=f;do{var tt=E.lane&-536870913,st=tt!==E.lane;if(st?(_e&tt)===tt:(r&tt)===tt){tt!==0&&tt===Gs&&(Tu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ht=t,Kt=E;tt=n;var Be=a;switch(Kt.tag){case 1:if(Ht=Kt.payload,typeof Ht=="function"){gt=Ht.call(Be,gt,tt);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Kt.payload,tt=typeof Ht=="function"?Ht.call(Be,gt,tt):Ht,tt==null)break t;gt=x({},gt,tt);break t;case 2:ya=!0}}tt=E.callback,tt!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[tt]:st.push(tt))}else st={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(J=ut=st,I=gt):ut=ut.next=st,v|=tt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;st=E,E=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ut===null&&(I=gt),c.baseState=I,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ca|=v,t.lanes=v,t.memoizedState=gt}}function Rp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Cp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Rp(a[t],n)}var Ws=O(null),dl=O(0);function wp(t,n){t=ta,ft(dl,t),ft(Ws,n),ta=t|n.baseLanes}function bu(){ft(dl,ta),ft(Ws,Ws.current)}function Au(){ta=dl.current,$(Ws),$(dl)}var Yn=O(null),oi=null;function Ta(t){var n=t.alternate;ft(Qe,Qe.current&1),ft(Yn,t),oi===null&&(n===null||Ws.current!==null||n.memoizedState!==null)&&(oi=t)}function Ru(t){ft(Qe,Qe.current),ft(Yn,t),oi===null&&(oi=t)}function Dp(t){t.tag===22?(ft(Qe,Qe.current),ft(Yn,t),oi===null&&(oi=t)):ba()}function ba(){ft(Qe,Qe.current),ft(Yn,Yn.current)}function jn(t){$(Yn),oi===t&&(oi=null),$(Qe)}var Qe=O(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||Pf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,re=null,ze=null,nn=null,ml=!1,qs=!1,us=!1,gl=0,so=0,Ys=null,lx=0;function Ze(){throw Error(s(321))}function Cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function wu(t,n,a,r,c,f){return qi=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?dm:Xu,us=!1,f=a(r,c),us=!1,qs&&(f=Lp(n,a,r,c)),Up(t),f}function Up(t){P.H=lo;var n=ze!==null&&ze.next!==null;if(qi=0,nn=ze=re=null,ml=!1,so=0,Ys=null,n)throw Error(s(300));t===null||an||(t=t.dependencies,t!==null&&rl(t)&&(an=!0))}function Lp(t,n,a,r){re=t;var c=0;do{if(qs&&(Ys=null),so=0,qs=!1,25<=c)throw Error(s(301));if(c+=1,nn=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=pm,f=n(a,r)}while(qs);return f}function cx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(re.flags|=1024),n}function Du(){var t=gl!==0;return gl=0,t}function Uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Lu(t){if(ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ml=!1}qi=0,nn=ze=re=null,qs=!1,so=gl=0,Ys=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?re.memoizedState=nn=t:nn=nn.next=t,nn}function Je(){if(ze===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=nn===null?re.memoizedState:nn.next;if(n!==null)nn=n,ze=t;else{if(t===null)throw re.alternate===null?Error(s(467)):Error(s(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},nn===null?re.memoizedState=nn=t:nn=nn.next=t}return nn}function _l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=so;return so+=1,Ys===null&&(Ys=[]),t=Mp(Ys,t,n),n=re,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?dm:Xu),t}function vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===D)return Mn(t)}throw Error(s(438,String(t)))}function Nu(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_l(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=w;return n.index++,a}function Yi(t,n){return typeof n=="function"?n(t):n}function xl(t){var n=Je();return Ou(n,ze,t)}function Ou(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=v=null,I=null,J=n,ut=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(_e&gt)===gt:(qi&gt)===gt){var tt=J.revertLane;if(tt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Gs&&(ut=!0);else if((qi&tt)===tt){J=J.next,tt===Gs&&(ut=!0);continue}else gt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(E=I=gt,v=f):I=I.next=gt,re.lanes|=tt,Ca|=tt;gt=J.action,us&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else tt={lane:gt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(E=I=tt,v=f):I=I.next=tt,re.lanes|=gt,Ca|=gt;J=J.next}while(J!==null&&J!==n);if(I===null?v=f:I.next=E,!Wn(f,t.memoizedState)&&(an=!0,ut&&(a=Vs,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Pu(t){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);Wn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Np(t,n,a){var r=re,c=Je(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Wn((ze||c).memoizedState,a);if(v&&(c.memoizedState=a,an=!0),c=c.queue,Bu(zp.bind(null,r,c,t),[t]),c.getSnapshot!==n||v||nn!==null&&nn.memoizedState.tag&1){if(r.flags|=2048,js(9,{destroy:void 0},Pp.bind(null,r,c,a,n),null),Ge===null)throw Error(s(349));f||(qi&127)!==0||Op(r,n,a)}return a}function Op(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=_l(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Pp(t,n,a,r){n.value=a,n.getSnapshot=r,Ip(n)&&Bp(t)}function zp(t,n,a){return a(function(){Ip(n)&&Bp(t)})}function Ip(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Bp(t){var n=es(t,2);n!==null&&Gn(n,t,2)}function zu(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),us){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},n}function Fp(t,n,a,r){return t.baseState=a,Ou(t,ze,typeof r=="function"?r:Yi)}function ux(t,n,a,r,c){if(Ml(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Hp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var E=a(c,r),I=P.S;I!==null&&I(v,E),Gp(t,n,E)}catch(J){Iu(t,n,J)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(c,r),Gp(t,n,f)}catch(J){Iu(t,n,J)}}function Gp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Vp(t,n,r)},function(r){return Iu(t,n,r)}):Vp(t,n,a)}function Vp(t,n,a){n.status="fulfilled",n.value=a,kp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Hp(t,a)))}function Iu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,kp(n),n=n.next;while(n!==r)}t.action=null}function kp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Xp(t,n){return n}function Wp(t,n){if(Se){var a=Ge.formState;if(a!==null){t:{var r=re;if(Se){if(ke){e:{for(var c=ke,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=li(c.nextSibling),r=c.data==="F!";break t}}xa(r)}r=!1}r&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xp,lastRenderedState:n},a.queue=r,a=um.bind(null,re,r),r.dispatch=a,r=zu(!1),f=ku.bind(null,re,!1,r.queue),r=Un(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=ux.bind(null,re,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function qp(t){var n=Je();return Yp(n,ze,t)}function Yp(t,n,a){if(n=Ou(t,n,Xp)[0],t=xl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ro(n)}catch(v){throw v===ks?cl:v}else r=n;n=Je();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,js(9,{destroy:void 0},fx.bind(null,c,a),null)),[r,f,t]}function fx(t,n){t.action=n}function jp(t){var n=Je(),a=ze;if(a!==null)return Yp(n,a,t);Je(),n=n.memoizedState,a=Je();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function js(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=re.updateQueue,n===null&&(n=_l(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Zp(){return Je().memoizedState}function Sl(t,n,a,r){var c=Un();re.flags|=t,c.memoizedState=js(1|n,{destroy:void 0},a,r===void 0?null:r)}function yl(t,n,a,r){var c=Je();r=r===void 0?null:r;var f=c.memoizedState.inst;ze!==null&&r!==null&&Cu(r,ze.memoizedState.deps)?c.memoizedState=js(n,f,a,r):(re.flags|=t,c.memoizedState=js(1|n,f,a,r))}function Kp(t,n){Sl(8390656,8,t,n)}function Bu(t,n){yl(2048,8,t,n)}function hx(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=_l(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Qp(t){var n=Je().memoizedState;return hx({ref:n,nextImpl:t}),function(){if((Re&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Jp(t,n){return yl(4,2,t,n)}function $p(t,n){return yl(4,4,t,n)}function tm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function em(t,n,a){a=a!=null?a.concat([t]):null,yl(4,4,tm.bind(null,n,t),a)}function Fu(){}function nm(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Cu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function im(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Cu(n,r[1]))return r[0];if(r=t(),us){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function Hu(t,n,a){return a===void 0||(qi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ag(),re.lanes|=t,Ca|=t,a)}function am(t,n,a,r){return Wn(a,n)?a:Ws.current!==null?(t=Hu(t,a,r),Wn(t,n)||(an=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(_e&261930)===0?(an=!0,t.memoizedState=a):(t=ag(),re.lanes|=t,Ca|=t,n)}function sm(t,n,a,r,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var v=P.T,E={};P.T=E,ku(t,!1,n,a);try{var I=c(),J=P.S;if(J!==null&&J(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ut=ox(I,r);oo(t,n,ut,Qn(t))}else oo(t,n,r,Qn(t))}catch(gt){oo(t,n,{then:function(){},status:"rejected",reason:gt},Qn())}finally{Z.p=f,v!==null&&E.types!==null&&(v.types=E.types),P.T=v}}function dx(){}function Gu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=rm(t).queue;sm(t,c,n,j,a===null?dx:function(){return om(t),a(r)})}function rm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function om(t){var n=rm(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},Qn())}function Vu(){return Mn(bo)}function lm(){return Je().memoizedState}function cm(){return Je().memoizedState}function px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ma(a);var r=Ea(n,t,a);r!==null&&(Gn(r,n,a),no(r,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function mx(t,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(t)?fm(n,a):(a=ru(t,n,a,r),a!==null&&(Gn(a,t,r),hm(a,n,r)))}function um(t,n,a){var r=Qn();oo(t,n,a,r)}function oo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(t))fm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,E=f(v,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,v))return nl(t,n,c,0),Ge===null&&el(),!1}catch{}finally{}if(a=ru(t,n,c,r),a!==null)return Gn(a,t,r),hm(a,n,r),!0}return!1}function ku(t,n,a,r){if(r={lane:2,revertLane:Mf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ml(t)){if(n)throw Error(s(479))}else n=ru(t,a,r,2),n!==null&&Gn(n,t,2)}function Ml(t){var n=t.alternate;return t===re||n!==null&&n===re}function fm(t,n){qs=ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function hm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Br(t,a)}}var lo={readContext:Mn,use:vl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};lo.useEffectEvent=Ze;var dm={readContext:Mn,use:vl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Kp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Sl(4194308,4,tm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Sl(4194308,4,t,n)},useInsertionEffect:function(t,n){Sl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var r=t();if(us){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Un();if(a!==void 0){var c=a(n);if(us){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=mx.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=zu(t);var n=t.queue,a=um.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Un();return Hu(a,t,n)},useTransition:function(){var t=zu(!1);return t=sm.bind(null,re,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=re,c=Un();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ge===null)throw Error(s(349));(_e&127)!==0||Op(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Kp(zp.bind(null,r,f,t),[t]),r.flags|=2048,js(9,{destroy:void 0},Pp.bind(null,r,f,a,n),null),a},useId:function(){var t=Un(),n=Ge.identifierPrefix;if(Se){var a=wi,r=Ci;a=(r&~(1<<32-$t(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=lx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:Wp,useActionState:Wp,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return Un().memoizedState=px.bind(null,re)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((Re&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:Mn,use:vl,useCallback:nm,useContext:Mn,useEffect:Bu,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:xl,useRef:Zp,useState:function(){return xl(Yi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Je();return am(a,ze.memoizedState,t,n)},useTransition:function(){var t=xl(Yi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Vu,useFormState:qp,useActionState:qp,useOptimistic:function(t,n){var a=Je();return Fp(a,ze,t,n)},useMemoCache:Nu,useCacheRefresh:cm};Xu.useEffectEvent=Qp;var pm={readContext:Mn,use:vl,useCallback:nm,useContext:Mn,useEffect:Bu,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:Pu,useRef:Zp,useState:function(){return Pu(Yi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Je();return ze===null?Hu(a,t,n):am(a,ze.memoizedState,t,n)},useTransition:function(){var t=Pu(Yi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Vu,useFormState:jp,useActionState:jp,useOptimistic:function(t,n){var a=Je();return ze!==null?Fp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:cm};pm.useEffectEvent=Qp;function Wu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=Ma(r);c.payload=n,a!=null&&(c.callback=a),n=Ea(t,c,r),n!==null&&(Gn(n,t,r),no(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=Ma(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ea(t,c,r),n!==null&&(Gn(n,t,r),no(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),r=Ma(a);r.tag=2,n!=null&&(r.callback=n),n=Ea(t,r,a),n!==null&&(Gn(n,t,a),no(n,t,a))}};function mm(t,n,a,r,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!jr(a,r)||!jr(c,f):!0}function gm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&qu.enqueueReplaceState(n,n.state,null)}function fs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function _m(t){tl(t)}function vm(t){console.error(t)}function xm(t){tl(t)}function El(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Sm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Yu(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){El(t,n)},a}function ym(t){return t=Ma(t),t.tag=3,t}function Mm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Sm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Sm(n,a,r),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function gx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Hs(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Pl():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),xf(t,r,c)),!1;case 22:return a.flags|=65536,r===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),xf(t,r,c)),!1}throw Error(s(435,a.tag))}return xf(t,r,c),Pl(),!1}if(Se)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==hu&&(t=Error(s(422),{cause:r}),Qr(ii(t,a)))):(r!==hu&&(n=Error(s(423),{cause:r}),Qr(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ii(r,a),c=Yu(t.stateNode,r,c),Eu(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:r});if(f=ii(f,a),_o===null?_o=[f]:_o.push(f),Ke!==4&&(Ke=2),n===null)return!0;r=ii(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Yu(a.stateNode,r,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=ym(c),Mm(c,t,a,r),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var ju=Error(s(461)),an=!1;function En(t,n,a,r){n.child=t===null?Ap(n,null,a,r):cs(n,t.child,a,r)}function Em(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var E in r)E!=="ref"&&(v[E]=r[E])}else v=r;return ss(n),r=wu(t,n,a,v,f,c),E=Du(),t!==null&&!an?(Uu(t,n,c),ji(t,n,c)):(Se&&E&&uu(n),n.flags|=1,En(t,n,r,c),n.child)}function Tm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bm(t,n,f,r,c)):(t=al(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(v,r)&&t.ref===n.ref)return ji(t,n,c)}return n.flags|=1,t=Vi(f,r),t.ref=n.ref,t.return=n,n.child=t}function bm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(jr(f,r)&&t.ref===n.ref)if(an=!1,n.pendingProps=r=f,nf(t,c))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,ji(t,n,c)}return Zu(t,n,a,r,c)}function Am(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Rm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ll(n,f!==null?f.cachePool:null),f!==null?wp(n,f):bu(),Dp(n);else return r=n.lanes=536870912,Rm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ll(n,f.cachePool),wp(n,f),ba(),n.memoizedState=null):(t!==null&&ll(n,null),bu(),ba());return En(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rm(t,n,a,r,c){var f=xu();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ll(n,null),bu(),Dp(n),t!==null&&Hs(t,n,r,!0),n.childLanes=c,null}function Tl(t,n){return n=Al({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Cm(t,n,a){return cs(n,t.child,null,a),t=Tl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function _x(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Tl(n,r),n.lanes=536870912,co(null,t);if(Ru(n),(t=ke)?(t=Hg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=fp(t),a.return=n,n.child=a,yn=n,ke=null)):t=null,t===null)throw xa(n);return n.lanes=536870912,null}return Tl(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Ru(n),c)if(n.flags&256)n.flags&=-257,n=Cm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(an||Hs(t,n,a,!1),c=(a&t.childLanes)!==0,an||c){if(r=Ge,r!==null&&(v=Ri(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,es(t,v),Gn(r,t,v),ju;Pl(),n=Cm(t,n,a)}else t=f.treeContext,ke=li(v.nextSibling),yn=n,Se=!0,va=null,ri=!1,t!==null&&pp(n,t),n=Tl(n,r),n.flags|=4096;return n}return t=Vi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,r,c){return ss(n),a=wu(t,n,a,r,void 0,c),r=Du(),t!==null&&!an?(Uu(t,n,c),ji(t,n,c)):(Se&&r&&uu(n),n.flags|=1,En(t,n,a,c),n.child)}function wm(t,n,a,r,c,f){return ss(n),n.updateQueue=null,a=Lp(n,r,a,c),Up(t),r=Du(),t!==null&&!an?(Uu(t,n,f),ji(t,n,f)):(Se&&r&&uu(n),n.flags|=1,En(t,n,a,f),n.child)}function Dm(t,n,a,r,c){if(ss(n),n.stateNode===null){var f=zs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Mn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},yu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Mn(v):zs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Wu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&qu.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,I=fs(a,E);f.props=I;var J=f.context,ut=a.contextType;v=zs,typeof ut=="object"&&ut!==null&&(v=Mn(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==v)&&gm(n,f,r,v),ya=!1;var tt=n.memoizedState;f.state=tt,ao(n,r,f,c),io(),J=n.memoizedState,E||tt!==J||ya?(typeof gt=="function"&&(Wu(n,a,gt,r),J=n.memoizedState),(I=ya||mm(n,a,I,r,tt,J,v))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=v,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Mu(t,n),v=n.memoizedProps,ut=fs(a,v),f.props=ut,gt=n.pendingProps,tt=f.context,J=a.contextType,I=zs,typeof J=="object"&&J!==null&&(I=Mn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==gt||tt!==I)&&gm(n,f,r,I),ya=!1,tt=n.memoizedState,f.state=tt,ao(n,r,f,c),io();var st=n.memoizedState;v!==gt||tt!==st||ya||t!==null&&t.dependencies!==null&&rl(t.dependencies)?(typeof E=="function"&&(Wu(n,a,E,r),st=n.memoizedState),(ut=ya||mm(n,a,ut,r,tt,st,I)||t!==null&&t.dependencies!==null&&rl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,st,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,st,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),f.props=r,f.state=st,f.context=I,r=ut):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,bl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=cs(n,t.child,null,c),n.child=cs(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ji(t,n,c),t}function Um(t,n,a,r){return is(),n.flags|=256,En(t,n,a,r),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:Sp()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Lm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?Ta(n):ba(),(t=ke)?(t=Hg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=fp(t),a.return=n,n.child=a,yn=n,ke=null)):t=null,t===null)throw xa(n);return Pf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(ba(),c=n.mode,E=Al({mode:"hidden",children:E},c),r=ns(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Qu(a),r.childLanes=Ju(t,v,a),n.memoizedState=Ku,co(null,r)):(Ta(n),$u(n,E))}var I=t.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(f)n.flags&256?(Ta(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(ba(),n.child=t.child,n.flags|=128,n=null):(ba(),E=r.fallback,c=n.mode,r=Al({mode:"visible",children:r.children},c),E=ns(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,cs(n,t.child,null,a),r=n.child,r.memoizedState=Qu(a),r.childLanes=Ju(t,v,a),n.memoizedState=Ku,n=co(null,r));else if(Ta(n),Pf(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var J=v.dgst;v=J,r=Error(s(419)),r.stack="",r.digest=v,Qr({value:r,source:null,stack:null}),n=tf(t,n,a)}else if(an||Hs(t,n,a,!1),v=(a&t.childLanes)!==0,an||v){if(v=Ge,v!==null&&(r=Ri(v,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,es(t,r),Gn(v,t,r),ju;Of(E)||Pl(),n=tf(t,n,a)}else Of(E)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,ke=li(E.nextSibling),yn=n,Se=!0,va=null,ri=!1,t!==null&&pp(n,t),n=$u(n,r.children),n.flags|=4096);return n}return c?(ba(),E=r.fallback,c=n.mode,I=t.child,J=I.sibling,r=Vi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,J!==null?E=Vi(J,E):(E=ns(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,co(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Qu(a):(c=E.cachePool,c!==null?(I=en._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Sp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Ju(t,v,a),n.memoizedState=Ku,co(t.child,r)):(Ta(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=Al({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Al(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function tf(t,n,a){return cs(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Nm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),mu(t.return,n,a)}function ef(t,n,a,r,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Om(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=Qe.current,E=(v&2)!==0;if(E?(v=v&1|2,n.flags|=128):v&=1,ft(Qe,v),En(t,n,r,a),r=Se?Kr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nm(t,a,n);else if(t.tag===19)Nm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f,r);break;case"together":ef(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Hs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&rl(t)))}function vx(t,n,a){switch(n.tag){case 3:zt(n,n.stateNode.containerInfo),Sa(n,en,t.memoizedState.cache),is();break;case 27:case 5:ne(n);break;case 4:zt(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Lm(t,n,a):(Ta(n),t=ji(t,n,a),t!==null?t.sibling:null);Ta(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Hs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Om(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ft(Qe,Qe.current),r)break;return null;case 22:return n.lanes=0,Am(t,n,a,n.pendingProps);case 24:Sa(n,en,t.memoizedState.cache)}return ji(t,n,a)}function Pm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return an=!1,vx(t,n,a);an=(t.flags&131072)!==0}else an=!1,Se&&(n.flags&1048576)!==0&&dp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=os(n.elementType),n.type=t,typeof t=="function")ou(t)?(r=fs(t,r),n.tag=1,n=Dm(null,n,t,r,a)):(n.tag=0,n=Zu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===C){n.tag=11,n=Em(null,n,t,r,a);break t}else if(c===z){n.tag=14,n=Tm(null,n,t,r,a);break t}}throw n=_t(t)||t,Error(s(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=fs(r,n.pendingProps),Dm(t,n,r,c,a);case 3:t:{if(zt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Mu(t,n),ao(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Sa(n,en,r),r!==f.cache&&gu(n,[en],a,!0),io(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Um(t,n,r,a);break t}else if(r!==c){c=ii(Error(s(424)),n),Qr(c),n=Um(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ke=li(t.firstChild),yn=n,Se=!0,va=null,ri=!0,a=Ap(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(is(),r===c){n=ji(t,n,a);break t}En(t,n,r,a)}n=n.child}return n;case 26:return bl(t,n),t===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=Vl(pt.current).createElement(a),r[je]=n,r[xn]=t,Tn(r,a,t),Dt(r),n.stateNode=r):n.memoizedState=qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ne(n),t===null&&Se&&(r=n.stateNode=kg(n.type,n.pendingProps,pt.current),yn=n,ri=!0,c=ke,Na(n.type)?(zf=c,ke=li(r.firstChild)):ke=c),En(t,n,n.pendingProps.children,a),bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=ke)&&(r=jx(r,n.type,n.pendingProps,ri),r!==null?(n.stateNode=r,yn=n,ke=li(r.firstChild),ri=!1,c=!0):c=!1),c||xa(n)),ne(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,Uf(c,f)?r=null:v!==null&&Uf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=wu(t,n,cx,null,null,a),bo._currentValue=c),bl(t,n),En(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=ke)&&(a=Zx(a,n.pendingProps,ri),a!==null?(n.stateNode=a,yn=n,ke=null,t=!0):t=!1),t||xa(n)),null;case 13:return Lm(t,n,a);case 4:return zt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=cs(n,null,r,a):En(t,n,r,a),n.child;case 11:return Em(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Sa(n,n.type,r.value),En(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ss(n),c=Mn(c),r=r(c),n.flags|=1,En(t,n,r,a),n.child;case 14:return Tm(t,n,n.type,n.pendingProps,a);case 15:return bm(t,n,n.type,n.pendingProps,a);case 19:return Om(t,n,a);case 31:return _x(t,n,a);case 22:return Am(t,n,a,n.pendingProps);case 24:return ss(n),r=Mn(en),t===null?(c=xu(),c===null&&(c=Ge,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},yu(n),Sa(n,en,c)):((t.lanes&a)!==0&&(Mu(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,en,r)):(r=f.cache,Sa(n,en,r),r!==c.cache&&gu(n,[en],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(t){t.flags|=4}function af(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(lg())t.flags|=8192;else throw ls=ul,Su}else t.flags&=-16777217}function zm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qg(n))if(lg())t.flags|=8192;else throw ls=ul,Su}function Rl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?on():536870912,t.lanes|=n,Js|=n)}function uo(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function xx(t,n,a){var r=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Wi(en),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fs(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),Xe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Zi(n),f!==null?(Xe(n),zm(n,f)):(Xe(n),af(n,c,null,r,a))):f?f!==t.memoizedState?(Zi(n),Xe(n),zm(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Zi(n),Xe(n),af(n,c,t,r,a)),null;case 27:if(ce(n),a=pt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}t=V.current,Fs(n)?mp(n):(t=kg(c,r,a),n.stateNode=t,Zi(n))}return Xe(n),null;case 5:if(ce(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}if(f=V.current,Fs(n))mp(n);else{var v=Vl(pt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[je]=n,f[xn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Tn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Zi(n)}}return Xe(n),af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=pt.current,Fs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=yn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[je]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Lg(t.nodeValue,a)),t||xa(n,!0)}else t=Vl(t).createTextNode(r),t[je]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Fs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[je]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Xe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Fs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[je]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),Xe(n),null);case 4:return Pt(),t===null&&Af(n.stateNode.containerInfo),Xe(n),null;case 10:return Wi(n.type),Xe(n),null;case 19:if($(Qe),r=n.memoizedState,r===null)return Xe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)uo(r,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,uo(r,!1),t=f.updateQueue,n.updateQueue=t,Rl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)up(a,t),a=a.sibling;return ft(Qe,Qe.current&1|2),Se&&ki(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ht()>Ll&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304)}else{if(!c)if(t=pl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Rl(n,t),uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return Xe(n),null}else 2*ht()-r.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ht(),t.sibling=null,a=Qe.current,ft(Qe,c?a&1|2:a&1),Se&&ki(n,r.treeForkCount),t):(Xe(n),null);case 22:case 23:return jn(n),Au(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&$(rs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(en),Xe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Sx(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(en),Pt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(Qe),null;case 4:return Pt(),null;case 10:return Wi(n.type),null;case 22:case 23:return jn(n),Au(),t!==null&&$(rs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(en),null;case 25:return null;default:return null}}function Im(t,n){switch(fu(n),n.tag){case 3:Wi(en),Pt();break;case 26:case 27:case 5:ce(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:$(Qe);break;case 10:Wi(n.type);break;case 22:case 23:jn(n),Au(),t!==null&&$(rs);break;case 24:Wi(en)}}function fo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(E){Ne(n,n.return,E)}}function Aa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var v=r.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,c=n;var I=a,J=E;try{J()}catch(ut){Ne(c,I,ut)}}}r=r.next}while(r!==f)}}catch(ut){Ne(n,n.return,ut)}}function Bm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cp(n,a)}catch(r){Ne(t,t.return,r)}}}function Fm(t,n,a){a.props=fs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ne(t,n,r)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Ne(t,n,c)}}function Di(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ne(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ne(t,n,c)}else a.current=null}function Hm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ne(t,t.return,c)}}function sf(t,n,a){try{var r=t.stateNode;Vx(r,t.type,a,n),r[xn]=n}catch(c){Ne(t,t.return,c)}}function Gm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(r!==4&&(r===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(of(t,n,a),t=t.sibling;t!==null;)of(t,n,a),t=t.sibling}function Cl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Cl(t,n,a),t=t.sibling;t!==null;)Cl(t,n,a),t=t.sibling}function Vm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[je]=t,n[xn]=a}catch(f){Ne(t,t.return,f)}}var Ki=!1,sn=!1,lf=!1,km=typeof WeakSet=="function"?WeakSet:Set,mn=null;function yx(t,n){if(t=t.containerInfo,wf=Zl,t=ep(t),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,E=-1,I=-1,J=0,ut=0,gt=t,tt=null;e:for(;;){for(var st;gt!==a||c!==0&&gt.nodeType!==3||(E=v+c),gt!==f||r!==0&&gt.nodeType!==3||(I=v+r),gt.nodeType===3&&(v+=gt.nodeValue.length),(st=gt.firstChild)!==null;)tt=gt,gt=st;for(;;){if(gt===t)break e;if(tt===a&&++J===c&&(E=v),tt===f&&++ut===r&&(I=v),(st=gt.nextSibling)!==null)break;gt=tt,tt=gt.parentNode}gt=st}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:t,selectionRange:a},Zl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=fs(a.type,c);t=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Ne(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Xm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),r&4&&fo(5,a);break;case 1:if(Ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ne(a,a.return,v)}else{var c=fs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ne(a,a.return,v)}}r&64&&Bm(a),r&512&&ho(a,a.return);break;case 3:if(Ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cp(t,n)}catch(v){Ne(a,a.return,v)}}break;case 27:n===null&&r&4&&Vm(a);case 26:case 5:Ji(t,a),n===null&&r&4&&Hm(a),r&512&&ho(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),r&4&&Ym(t,a);break;case 13:Ji(t,a),r&4&&jm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Dx.bind(null,a),Kx(t,a))));break;case 22:if(r=a.memoizedState!==null||Ki,!r){n=n!==null&&n.memoizedState!==null||sn,c=Ki;var f=sn;Ki=r,(sn=n)&&!f?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=c,sn=f}break;case 30:break;default:Ji(t,a)}}function Wm(t){var n=t.alternate;n!==null&&(t.alternate=null,Wm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&at(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,In=!1;function Qi(t,n,a){for(a=a.child;a!==null;)qm(t,n,a),a=a.sibling}function qm(t,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:sn||Di(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Di(a,n);var r=qe,c=In;Na(a.type)&&(qe=a.stateNode,In=!1),Qi(t,n,a),Mo(a.stateNode),qe=r,In=c;break;case 5:sn||Di(a,n);case 6:if(r=qe,c=In,qe=null,Qi(t,n,a),qe=r,In=c,qe!==null)if(In)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ne(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ne(a,n,f)}break;case 18:qe!==null&&(In?(t=qe,Bg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),rr(t)):Bg(qe,a.stateNode));break;case 4:r=qe,c=In,qe=a.stateNode.containerInfo,In=!0,Qi(t,n,a),qe=r,In=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),sn||Aa(4,a,n),Qi(t,n,a);break;case 1:sn||(Di(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Fm(a,n,r)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:sn=(r=sn)||a.memoizedState!==null,Qi(t,n,a),sn=r;break;default:Qi(t,n,a)}}function Ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{rr(t)}catch(a){Ne(n,n.return,a)}}}function jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{rr(t)}catch(a){Ne(n,n.return,a)}}function Mx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new km),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new km),n;default:throw Error(s(435,t.tag))}}function wl(t,n){var a=Mx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Ux.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,v=n,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Na(E.type)){qe=E.stateNode,In=!1;break t}break;case 5:qe=E.stateNode,In=!1;break t;case 3:case 4:qe=E.stateNode.containerInfo,In=!0;break t}E=E.return}if(qe===null)throw Error(s(160));qm(f,v,c),qe=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zm(n,t),n=n.sibling}var _i=null;function Zm(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Fn(t),r&4&&(Aa(3,t,t.return),fo(3,t),Aa(5,t,t.return));break;case 1:Bn(n,t),Fn(t),r&512&&(sn||a===null||Di(a,a.return)),r&64&&Ki&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=_i;if(Bn(n,t),Fn(t),r&512&&(sn||a===null||Di(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[X]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[je]=t,Dt(f),r=f;break t;case"link":var v=Zg("link","href",c).get(r+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(f=v[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(v=Zg("meta","content",c).get(r+(a.content||""))){for(E=0;E<v.length;E++)if(f=v[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[je]=t,Dt(f),r=f}t.stateNode=r}else Kg(c,t.type,t.stateNode);else t.stateNode=jg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Kg(c,t.type,t.stateNode):jg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Fn(t),r&512&&(sn||a===null||Di(a,a.return)),a!==null&&r&4&&sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Fn(t),r&512&&(sn||a===null||Di(a,a.return)),t.flags&32){c=t.stateNode;try{ws(c,"")}catch(Ht){Ne(t,t.return,Ht)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,sf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(lf=!0);break;case 6:if(Bn(n,t),Fn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ht){Ne(t,t.return,Ht)}}break;case 3:if(Wl=null,c=_i,_i=kl(n.containerInfo),Bn(n,t),_i=c,Fn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(Ht){Ne(t,t.return,Ht)}lf&&(lf=!1,Km(t));break;case 4:r=_i,_i=kl(t.stateNode.containerInfo),Bn(n,t),Fn(t),_i=r;break;case 12:Bn(n,t),Fn(t);break;case 31:Bn(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wl(t,r)));break;case 13:Bn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=ht()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wl(t,r)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=Ki,ut=sn;if(Ki=J||c,sn=ut||I,Bn(n,t),sn=ut,Ki=J,Fn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Ki||sn||hs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=I.stateNode;var gt=I.memoizedProps.style,tt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Ht){Ne(I,I.return,Ht)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Ht){Ne(I,I.return,Ht)}}}else if(n.tag===18){if(a===null){I=n;try{var st=I.stateNode;c?Fg(st,!0):Fg(I.stateNode,!1)}catch(Ht){Ne(I,I.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,wl(t,a))));break;case 19:Bn(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wl(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Gm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=rf(t);Cl(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(ws(v,""),a.flags&=-33);var E=rf(t);Cl(t,E,v);break;case 3:case 4:var I=a.stateNode.containerInfo,J=rf(t);of(t,J,I);break;default:throw Error(s(161))}}catch(ut){Ne(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Km(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xm(t,n.alternate,n),n=n.sibling}function hs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),hs(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Fm(n,n.return,a),hs(n);break;case 27:Mo(n.stateNode);case 26:case 5:Di(n,n.return),hs(n);break;case 22:n.memoizedState===null&&hs(n);break;case 30:hs(n);break;default:hs(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:$i(c,f,a),fo(4,f);break;case 1:if($i(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ne(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Rp(I[c],E)}catch(J){Ne(r,r.return,J)}}a&&v&64&&Bm(f),ho(f,f.return);break;case 27:Vm(f);case 26:case 5:$i(c,f,a),a&&r===null&&v&4&&Hm(f),ho(f,f.return);break;case 12:$i(c,f,a);break;case 31:$i(c,f,a),a&&v&4&&Ym(c,f);break;case 13:$i(c,f,a),a&&v&4&&jm(c,f);break;case 22:f.memoizedState===null&&$i(c,f,a),ho(f,f.return);break;case 30:break;default:$i(c,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Jr(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t))}function vi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qm(t,n,a,r),n=n.sibling}function Qm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,r),c&2048&&fo(9,n);break;case 1:vi(t,n,a,r);break;case 3:vi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t)));break;case 12:if(c&2048){vi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,E=f.onPostCommit;typeof E=="function"&&E(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ne(n,n.return,I)}}else vi(t,n,a,r);break;case 31:vi(t,n,a,r);break;case 13:vi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,r):po(t,n):f._visibility&2?vi(t,n,a,r):(f._visibility|=2,Zs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&cf(v,n);break;case 24:vi(t,n,a,r),c&2048&&uf(n.alternate,n);break;default:vi(t,n,a,r)}}function Zs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,E=a,I=r,J=v.flags;switch(v.tag){case 0:case 11:case 15:Zs(f,v,E,I,c),fo(8,v);break;case 23:break;case 22:var ut=v.stateNode;v.memoizedState!==null?ut._visibility&2?Zs(f,v,E,I,c):po(f,v):(ut._visibility|=2,Zs(f,v,E,I,c)),c&&J&2048&&cf(v.alternate,v);break;case 24:Zs(f,v,E,I,c),c&&J&2048&&uf(v.alternate,v);break;default:Zs(f,v,E,I,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&cf(r.alternate,r);break;case 24:po(a,r),c&2048&&uf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function Ks(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)Jm(t,n,a),t=t.sibling}function Jm(t,n,a){switch(t.tag){case 26:Ks(t,n,a),t.flags&mo&&t.memoizedState!==null&&lS(a,_i,t.memoizedState,t.memoizedProps);break;case 5:Ks(t,n,a);break;case 3:case 4:var r=_i;_i=kl(t.stateNode.containerInfo),Ks(t,n,a),_i=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=mo,mo=16777216,Ks(t,n,a),mo=r):Ks(t,n,a));break;default:Ks(t,n,a)}}function $m(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,eg(r,t)}$m(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tg(t),t=t.sibling}function tg(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Dl(t)):go(t);break;default:go(t)}}function Dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,eg(r,t)}$m(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}t=t.sibling}}function eg(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else t:for(a=t;mn!==null;){r=mn;var c=r.sibling,f=r.return;if(Wm(r),r===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Ex={getCacheForType:function(t){var n=Mn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(en).controller.signal}},Tx=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ge=null,de=null,_e=0,Le=0,Zn=null,Ra=!1,Qs=!1,ff=!1,ta=0,Ke=0,Ca=0,ds=0,hf=0,Kn=0,Js=0,_o=null,Hn=null,df=!1,Ul=0,ng=0,Ll=1/0,Nl=null,wa=null,cn=0,Da=null,$s=null,ea=0,pf=0,mf=null,ig=null,vo=0,gf=null;function Qn(){return(Re&2)!==0&&_e!==0?_e&-_e:P.T!==null?Mf():Fr()}function ag(){if(Kn===0)if((_e&536870912)===0||Se){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Gn(t,n,a){(t===Ge&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(tr(t,0),Ua(t,_e,Kn,!1)),vn(t,a),((Re&2)===0||t!==Ge)&&(t===Ge&&((Re&2)===0&&(ds|=a),Ke===4&&Ua(t,_e,Kn,!1)),Ui(t))}function sg(t,n,a){if((Re&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||te(t,n),c=r?Rx(t,n):vf(t,n,!0),f=r;do{if(c===0){Qs&&!r&&Ua(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!bx(a)){c=vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var E=t;c=_o;var I=E.current.memoizedState.isDehydrated;if(I&&(tr(E,v).flags|=256),v=vf(E,v,!1),v!==2){if(ff&&!I){E.errorRecoveryDisabledLanes|=f,ds|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){tr(t,0),Ua(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ua(r,n,Kn,!Ra);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ul+300-ht(),10<c)){if(Ua(r,n,Kn,!Ra),Lt(r,0,!0)!==0)break t;ea=n,r.timeoutHandle=zg(rg.bind(null,r,a,Hn,Nl,df,n,Kn,ds,Js,Ra,f,"Throttled",-0,0),c);break t}rg(r,a,Hn,Nl,df,n,Kn,ds,Js,Ra,f,null,-0,0)}}break}while(!0);Ui(t)}function rg(t,n,a,r,c,f,v,E,I,J,ut,gt,tt,st){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},Jm(n,f,gt);var Ht=(f&62914560)===f?Ul-ht():(f&4194048)===f?ng-ht():0;if(Ht=cS(gt,Ht),Ht!==null){ea=f,t.cancelPendingCommit=Ht(pg.bind(null,t,n,f,a,r,c,v,E,I,ut,gt,null,tt,st)),Ua(t,f,v,!J);return}}pg(t,n,f,a,r,c,v,E,I)}function bx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(t,n,a,r){n&=~hf,n&=~ds,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-$t(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&Ir(t,a,n)}function Ol(){return(Re&6)===0?(xo(0),!1):!0}function _f(){if(de!==null){if(Le===0)var t=de.return;else t=de,Xi=as=null,Lu(t),Xs=null,to=0,t=de;for(;t!==null;)Im(t.alternate,t),t=t.return;de=null}}function tr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Wx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,_f(),Ge=t,de=a=Vi(t.current,null),_e=n,Le=0,Zn=null,Ra=!1,Qs=te(t,n),ff=!1,Js=Kn=hf=ds=Ca=Ke=0,Hn=_o=null,df=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-$t(r),f=1<<c;n|=t[c],r&=~f}return ta=n,el(),a}function og(t,n){re=null,P.H=lo,n===ks||n===cl?(n=Ep(),Le=3):n===Su?(n=Ep(),Le=4):Le=n===ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,de===null&&(Ke=1,El(t,ii(n,t.current)))}function lg(){var t=Yn.current;return t===null?!0:(_e&4194048)===_e?oi===null:(_e&62914560)===_e||(_e&536870912)!==0?t===oi:!1}function cg(){var t=P.H;return P.H=lo,t===null?lo:t}function ug(){var t=P.A;return P.A=Ex,t}function Pl(){Ke=4,Ra||(_e&4194048)!==_e&&Yn.current!==null||(Qs=!0),(Ca&134217727)===0&&(ds&134217727)===0||Ge===null||Ua(Ge,_e,Kn,!1)}function vf(t,n,a){var r=Re;Re|=2;var c=cg(),f=ug();(Ge!==t||_e!==n)&&(Nl=null,tr(t,n)),n=!1;var v=Ke;t:do try{if(Le!==0&&de!==null){var E=de,I=Zn;switch(Le){case 8:_f(),v=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var J=Le;if(Le=0,Zn=null,er(t,E,I,J),a&&Qs){v=0;break t}break;default:J=Le,Le=0,Zn=null,er(t,E,I,J)}}Ax(),v=Ke;break}catch(ut){og(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Xi=as=null,Re=r,P.H=c,P.A=f,de===null&&(Ge=null,_e=0,el()),v}function Ax(){for(;de!==null;)fg(de)}function Rx(t,n){var a=Re;Re|=2;var r=cg(),c=ug();Ge!==t||_e!==n?(Nl=null,Ll=ht()+500,tr(t,n)):Qs=te(t,n);t:do try{if(Le!==0&&de!==null){n=de;var f=Zn;e:switch(Le){case 1:Le=0,Zn=null,er(t,n,f,1);break;case 2:case 9:if(yp(f)){Le=0,Zn=null,hg(n);break}n=function(){Le!==2&&Le!==9||Ge!==t||(Le=7),Ui(t)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:yp(f)?(Le=0,Zn=null,hg(n)):(Le=0,Zn=null,er(t,n,f,7));break;case 5:var v=null;switch(de.tag){case 26:v=de.memoizedState;case 5:case 27:var E=de;if(v?Qg(v):E.stateNode.complete){Le=0,Zn=null;var I=E.sibling;if(I!==null)de=I;else{var J=E.return;J!==null?(de=J,zl(J)):de=null}break e}}Le=0,Zn=null,er(t,n,f,5);break;case 6:Le=0,Zn=null,er(t,n,f,6);break;case 8:_f(),Ke=6;break t;default:throw Error(s(462))}}Cx();break}catch(ut){og(t,ut)}while(!0);return Xi=as=null,P.H=r,P.A=c,Re=a,de!==null?0:(Ge=null,_e=0,el(),Ke)}function Cx(){for(;de!==null&&!T();)fg(de)}function fg(t){var n=Pm(t.alternate,t,ta);t.memoizedProps=t.pendingProps,n===null?zl(t):de=n}function hg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=wm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=wm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Lu(n);default:Im(a,n),n=de=up(n,ta),n=Pm(a,n,ta)}t.memoizedProps=t.pendingProps,n===null?zl(t):de=n}function er(t,n,a,r){Xi=as=null,Lu(n),Xs=null,to=0;var c=n.return;try{if(gx(t,c,n,a,_e)){Ke=1,El(t,ii(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ke=1,El(t,ii(a,t.current)),de=null;return}n.flags&32768?(Se||r===1?t=!0:Qs||(_e&536870912)!==0?t=!1:(Ra=t=!0,(r===2||r===9||r===3||r===6)&&(r=Yn.current,r!==null&&r.tag===13&&(r.flags|=16384))),dg(n,t)):zl(n)}function zl(t){var n=t;do{if((n.flags&32768)!==0){dg(n,Ra);return}t=n.return;var a=xx(n.alternate,n,ta);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);Ke===0&&(Ke=5)}function dg(t,n){do{var a=Sx(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);Ke=6,de=null}function pg(t,n,a,r,c,f,v,E,I){t.cancelPendingCommit=null;do Il();while(cn!==0);if((Re&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=su,di(t,a,f,v,E,I),t===Ge&&(de=Ge=null,_e=0),$s=n,Da=t,ea=a,pf=f,mf=c,ig=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Lx(Ut,function(){return xg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=Z.p,Z.p=2,v=Re,Re|=4;try{yx(t,n,a)}finally{Re=v,Z.p=c,P.T=r}}cn=1,mg(),gg(),_g()}}function mg(){if(cn===1){cn=0;var t=Da,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=Z.p;Z.p=2;var c=Re;Re|=4;try{Zm(n,t);var f=Df,v=ep(t.containerInfo),E=f.focusedElem,I=f.selectionRange;if(v!==E&&E&&E.ownerDocument&&tp(E.ownerDocument.documentElement,E)){if(I!==null&&tu(E)){var J=I.start,ut=I.end;if(ut===void 0&&(ut=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ut,E.value.length);else{var gt=E.ownerDocument||document,tt=gt&&gt.defaultView||window;if(tt.getSelection){var st=tt.getSelection(),Ht=E.textContent.length,Kt=Math.min(I.start,Ht),Be=I.end===void 0?Kt:Math.min(I.end,Ht);!st.extend&&Kt>Be&&(v=Be,Be=Kt,Kt=v);var q=$d(E,Kt),F=$d(E,Be);if(q&&F&&(st.rangeCount!==1||st.anchorNode!==q.node||st.anchorOffset!==q.offset||st.focusNode!==F.node||st.focusOffset!==F.offset)){var Q=gt.createRange();Q.setStart(q.node,q.offset),st.removeAllRanges(),Kt>Be?(st.addRange(Q),st.extend(F.node,F.offset)):(Q.setEnd(F.node,F.offset),st.addRange(Q))}}}}for(gt=[],st=E;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var dt=gt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Zl=!!wf,Df=wf=null}finally{Re=c,Z.p=r,P.T=a}}t.current=n,cn=2}}function gg(){if(cn===2){cn=0;var t=Da,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=Z.p;Z.p=2;var c=Re;Re|=4;try{Xm(t,n.alternate,n)}finally{Re=c,Z.p=r,P.T=a}}cn=3}}function _g(){if(cn===4||cn===3){cn=0,et();var t=Da,n=$s,a=ea,r=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?cn=5:(cn=0,$s=Da=null,vg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(wa=null),Cs(a),n=n.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=Z.p,Z.p=2,P.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var E=r[v];f(E.value,{componentStack:E.stack})}}finally{P.T=n,Z.p=c}}(ea&3)!==0&&Il(),Ui(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===gf?vo++:(vo=0,gf=t):vo=0,xo(0)}}function vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Jr(n)))}function Il(){return mg(),gg(),_g(),xg()}function xg(){if(cn!==5)return!1;var t=Da,n=pf;pf=0;var a=Cs(ea),r=P.T,c=Z.p;try{Z.p=32>a?32:a,P.T=null,a=mf,mf=null;var f=Da,v=ea;if(cn=0,$s=Da=null,ea=0,(Re&6)!==0)throw Error(s(331));var E=Re;if(Re|=4,tg(f.current),Qm(f,f.current,v,a),Re=E,xo(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{Z.p=c,P.T=r,vg(t,n)}}function Sg(t,n,a){n=ii(a,n),n=Yu(t.stateNode,n,2),t=Ea(t,n,2),t!==null&&(vn(t,2),Ui(t))}function Ne(t,n,a){if(t.tag===3)Sg(t,t,a);else for(;n!==null;){if(n.tag===3){Sg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wa===null||!wa.has(r))){t=ii(a,t),a=ym(2),r=Ea(n,a,2),r!==null&&(Mm(a,r,n,t),vn(r,2),Ui(r));break}}n=n.return}}function xf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Tx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(ff=!0,c.add(a),t=wx.bind(null,t,n,a),n.then(t,t))}function wx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(_e&a)===a&&(Ke===4||Ke===3&&(_e&62914560)===_e&&300>ht()-Ul?(Re&2)===0&&tr(t,0):hf|=a,Js===_e&&(Js=0)),Ui(t)}function yg(t,n){n===0&&(n=on()),t=es(t,n),t!==null&&(vn(t,n),Ui(t))}function Dx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),yg(t,a)}function Ux(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),yg(t,a)}function Lx(t,n){return Yt(t,n)}var Bl=null,nr=null,Sf=!1,Fl=!1,yf=!1,La=0;function Ui(t){t!==nr&&t.next===null&&(nr===null?Bl=nr=t:nr=nr.next=t),Fl=!0,Sf||(Sf=!0,Ox())}function xo(t,n){if(!yf&&Fl){yf=!0;do for(var a=!1,r=Bl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-$t(42|t)+1)-1,f&=c&~(v&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(r,f))}else f=_e,f=Lt(r,r===Ge?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||te(r,f)||(a=!0,bg(r,f));r=r.next}while(a);yf=!1}}function Nx(){Mg()}function Mg(){Fl=Sf=!1;var t=0;La!==0&&Xx()&&(t=La);for(var n=ht(),a=null,r=Bl;r!==null;){var c=r.next,f=Eg(r,n);f===0?(r.next=null,a===null?Bl=c:a.next=c,c===null&&(nr=a)):(a=r,(t!==0||(f&3)!==0)&&(Fl=!0)),r=c}cn!==0&&cn!==5||xo(t),La!==0&&(La=0)}function Eg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-$t(f),E=1<<v,I=c[v];I===-1?((E&a)===0||(E&r)!==0)&&(c[v]=We(E,n)):I<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ge,a=_e,a=Lt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&N(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&N(r),Cs(a)){case 2:case 8:a=Xt;break;case 32:a=Ut;break;case 268435456:a=ge;break;default:a=Ut}return r=Tg.bind(null,t),a=Yt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&N(r),t.callbackPriority=2,t.callbackNode=null,2}function Tg(t,n){if(cn!==0&&cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Il()&&t.callbackNode!==a)return null;var r=_e;return r=Lt(t,t===Ge?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(sg(t,r,n),Eg(t,ht()),t.callbackNode!=null&&t.callbackNode===a?Tg.bind(null,t):null)}function bg(t,n){if(Il())return null;sg(t,n,!0)}function Ox(){qx(function(){(Re&6)!==0?Yt(mt,Nx):Mg()})}function Mf(){if(La===0){var t=Gs;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),La=t}return La}function Ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yo(""+t)}function Rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Px(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ag((c[xn]||null).action),v=r.submitter;v&&(n=(n=v[xn]||null)?Ag(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var E=new Qo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(La!==0){var I=v?Rg(c,v):new FormData(c);Gu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(E.preventDefault(),I=v?Rg(c,v):new FormData(c),Gu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Ef=0;Ef<au.length;Ef++){var Tf=au[Ef],zx=Tf.toLowerCase(),Ix=Tf[0].toUpperCase()+Tf.slice(1);gi(zx,"on"+Ix)}gi(ap,"onAnimationEnd"),gi(sp,"onAnimationIteration"),gi(rp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi($v,"onTransitionRun"),gi(tx,"onTransitionStart"),gi(ex,"onTransitionCancel"),gi(op,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var E=r[v],I=E.instance,J=E.currentTarget;if(E=E.listener,I!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ut){tl(ut)}c.currentTarget=null,f=I}else for(v=0;v<r.length;v++){if(E=r[v],I=E.instance,J=E.currentTarget,E=E.listener,I!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ut){tl(ut)}c.currentTarget=null,f=I}}}}function pe(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var r=t+"__bubble";a.has(r)||(wg(n,t,2,!1),a.add(r))}function bf(t,n,a){var r=0;n&&(r|=4),wg(a,t,r,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[Hl]){t[Hl]=!0,Gt.forEach(function(a){a!=="selectionchange"&&(Bx.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,bf("selectionchange",!1,n))}}function wg(t,n,a,r){switch(a_(n)){case 2:var c=hS;break;case 8:c=dS;break;default:c=Gf}a=c.bind(null,n,a,t),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Rf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var E=r.stateNode.containerInfo;if(E===c)break;if(v===4)for(v=r.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;E!==null;){if(v=it(E),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){r=f=v;continue t}E=E.parentNode}}r=r.return}Od(function(){var J=f,ut=kc(a),gt=[];t:{var tt=lp.get(t);if(tt!==void 0){var st=Qo,Ht=t;switch(t){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":st=Uv;break;case"focusin":Ht="focus",st=Zc;break;case"focusout":Ht="blur",st=Zc;break;case"beforeblur":case"afterblur":st=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Ov;break;case ap:case sp:case rp:st=Mv;break;case op:st=zv;break;case"scroll":case"scrollend":st=_v;break;case"wheel":st=Bv;break;case"copy":case"cut":case"paste":st=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Fd;break;case"toggle":case"beforetoggle":st=Hv}var Kt=(n&4)!==0,Be=!Kt&&(t==="scroll"||t==="scrollend"),q=Kt?tt!==null?tt+"Capture":null:tt;Kt=[];for(var F=J,Q;F!==null;){var dt=F;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||q===null||(dt=Gr(F,q),dt!=null&&Kt.push(yo(F,dt,Q))),Be)break;F=F.return}0<Kt.length&&(tt=new st(tt,Ht,null,a,ut),gt.push({event:tt,listeners:Kt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",tt&&a!==Vc&&(Ht=a.relatedTarget||a.fromElement)&&(it(Ht)||Ht[Bi]))break t;if((st||tt)&&(tt=ut.window===ut?ut:(tt=ut.ownerDocument)?tt.defaultView||tt.parentWindow:window,st?(Ht=a.relatedTarget||a.toElement,st=J,Ht=Ht?it(Ht):null,Ht!==null&&(Be=u(Ht),Kt=Ht.tag,Ht!==Be||Kt!==5&&Kt!==27&&Kt!==6)&&(Ht=null)):(st=null,Ht=J),st!==Ht)){if(Kt=Id,dt="onMouseLeave",q="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Fd,dt="onPointerLeave",q="onPointerEnter",F="pointer"),Be=st==null?tt:Tt(st),Q=Ht==null?tt:Tt(Ht),tt=new Kt(dt,F+"leave",st,a,ut),tt.target=Be,tt.relatedTarget=Q,dt=null,it(ut)===J&&(Kt=new Kt(q,F+"enter",Ht,a,ut),Kt.target=Q,Kt.relatedTarget=Be,dt=Kt),Be=dt,st&&Ht)e:{for(Kt=Fx,q=st,F=Ht,Q=0,dt=q;dt;dt=Kt(dt))Q++;dt=0;for(var qt=F;qt;qt=Kt(qt))dt++;for(;0<Q-dt;)q=Kt(q),Q--;for(;0<dt-Q;)F=Kt(F),dt--;for(;Q--;){if(q===F||F!==null&&q===F.alternate){Kt=q;break e}q=Kt(q),F=Kt(F)}Kt=null}else Kt=null;st!==null&&Dg(gt,tt,st,Kt,!1),Ht!==null&&Be!==null&&Dg(gt,Be,Ht,Kt,!0)}}t:{if(tt=J?Tt(J):window,st=tt.nodeName&&tt.nodeName.toLowerCase(),st==="select"||st==="input"&&tt.type==="file")var Te=Yd;else if(Wd(tt))if(jd)Te=Kv;else{Te=jv;var kt=Yv}else st=tt.nodeName,!st||st.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&Gc(J.elementType)&&(Te=Yd):Te=Zv;if(Te&&(Te=Te(t,J))){qd(gt,Te,a,ut);break t}kt&&kt(t,tt,J),t==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&ei(tt,"number",tt.value)}switch(kt=J?Tt(J):window,t){case"focusin":(Wd(kt)||kt.contentEditable==="true")&&(Ns=kt,eu=J,Zr=null);break;case"focusout":Zr=eu=Ns=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,np(gt,a,ut);break;case"selectionchange":if(Jv)break;case"keydown":case"keyup":np(gt,a,ut)}var oe;if(Qc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Ls?kd(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Hd&&a.locale!=="ko"&&(Ls||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ls&&(oe=Pd()):(ga=ut,qc="value"in ga?ga.value:ga.textContent,Ls=!0)),kt=Gl(J,ve),0<kt.length&&(ve=new Bd(ve,t,null,a,ut),gt.push({event:ve,listeners:kt}),oe?ve.data=oe:(oe=Xd(a),oe!==null&&(ve.data=oe)))),(oe=Vv?kv(t,a):Xv(t,a))&&(ve=Gl(J,"onBeforeInput"),0<ve.length&&(kt=new Bd("onBeforeInput","beforeinput",null,a,ut),gt.push({event:kt,listeners:ve}),kt.data=oe)),Px(gt,t,J,a,ut)}Cg(gt,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(t,a),c!=null&&r.unshift(yo(t,c,f)),c=Gr(t,n),c!=null&&r.push(yo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Fx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Dg(t,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var E=a,I=E.alternate,J=E.stateNode;if(E=E.tag,I!==null&&I===r)break;E!==5&&E!==26&&E!==27||J===null||(I=J,c?(J=Gr(a,f),J!=null&&v.unshift(yo(a,J,I))):c||(J=Gr(a,f),J!=null&&v.push(yo(a,J,I)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Hx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function Ug(t){return(typeof t=="string"?t:""+t).replace(Hx,`
`).replace(Gx,"")}function Lg(t,n){return n=Ug(n),Ug(t)===n}function Ie(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ws(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ws(t,""+r);break;case"className":Vt(t,"class",r);break;case"tabIndex":Vt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(t,a,r);break;case"style":Ld(t,r,f);break;case"data":if(n!=="object"){Vt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Hi);break;case"onScroll":r!=null&&pe("scroll",t);break;case"onScrollEnd":r!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Yo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":pe("beforetoggle",t),pe("toggle",t),xe(t,"popover",r);break;case"xlinkActuate":ln(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ln(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ln(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ln(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ln(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ln(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ln(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ln(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ln(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":xe(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mv.get(a)||a,xe(t,a,r))}}function Cf(t,n,a,r,c,f){switch(a){case"style":Ld(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?ws(t,r):(typeof r=="number"||typeof r=="bigint")&&ws(t,""+r);break;case"onScroll":r!=null&&pe("scroll",t);break;case"onScrollEnd":r!=null&&pe("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ee.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):xe(t,a,r)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,f,v,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),r&&Ie(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var E=f=v=c=null,I=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":v=ut;break;case"checked":I=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Ie(t,n,r,ut,a,null)}}mi(t,f,E,I,J,v,c,!1);return;case"select":pe("invalid",t),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":v=E;break;case"multiple":r=E;default:Ie(t,n,c,E,a,null)}n=f,a=v,t.multiple=!!r,n!=null?Fi(t,!!r,n,!1):a!=null&&Fi(t,!!r,a,!0);return;case"textarea":pe("invalid",t),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ie(t,n,v,E,a,null)}Dd(t,r,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ie(t,n,I,r,a,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(r=0;r<So.length;r++)pe(So[r],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,J,r,a,null)}return;default:if(Gc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&Cf(t,n,ut,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Ie(t,n,E,r,a,null))}function Vx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,E=null,I=null,J=null,ut=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=gt;default:r.hasOwnProperty(st)||Ie(t,n,st,null,r,gt)}}for(var tt in r){var st=r[tt];if(gt=a[tt],r.hasOwnProperty(tt)&&(st!=null||gt!=null))switch(tt){case"type":f=st;break;case"name":c=st;break;case"checked":J=st;break;case"defaultChecked":ut=st;break;case"value":v=st;break;case"defaultValue":E=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==gt&&Ie(t,n,tt,st,r,gt)}}An(t,v,E,I,J,ut,f,c);return;case"select":st=v=E=tt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":st=I;default:r.hasOwnProperty(f)||Ie(t,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":v=f;default:f!==I&&Ie(t,n,c,f,r,I)}n=E,a=v,r=st,tt!=null?Fi(t,!!a,tt,!1):!!r!=!!a&&(n!=null?Fi(t,!!a,n,!0):Fi(t,!!a,a?[]:"",!1));return;case"textarea":st=tt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ie(t,n,E,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":tt=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ie(t,n,v,c,r,f)}wd(t,tt,st);return;case"option":for(var Ht in a)if(tt=a[Ht],a.hasOwnProperty(Ht)&&tt!=null&&!r.hasOwnProperty(Ht))switch(Ht){case"selected":t.selected=!1;break;default:Ie(t,n,Ht,null,r,tt)}for(I in r)if(tt=r[I],st=a[I],r.hasOwnProperty(I)&&tt!==st&&(tt!=null||st!=null))switch(I){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Ie(t,n,I,tt,r,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)tt=a[Kt],a.hasOwnProperty(Kt)&&tt!=null&&!r.hasOwnProperty(Kt)&&Ie(t,n,Kt,null,r,tt);for(J in r)if(tt=r[J],st=a[J],r.hasOwnProperty(J)&&tt!==st&&(tt!=null||st!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Ie(t,n,J,tt,r,st)}return;default:if(Gc(n)){for(var Be in a)tt=a[Be],a.hasOwnProperty(Be)&&tt!==void 0&&!r.hasOwnProperty(Be)&&Cf(t,n,Be,void 0,r,tt);for(ut in r)tt=r[ut],st=a[ut],!r.hasOwnProperty(ut)||tt===st||tt===void 0&&st===void 0||Cf(t,n,ut,tt,r,st);return}}for(var q in a)tt=a[q],a.hasOwnProperty(q)&&tt!=null&&!r.hasOwnProperty(q)&&Ie(t,n,q,null,r,tt);for(gt in r)tt=r[gt],st=a[gt],!r.hasOwnProperty(gt)||tt===st||tt==null&&st==null||Ie(t,n,gt,tt,r,st)}function Ng(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,E=c.duration;if(f&&E&&Ng(v)){for(v=0,E=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],J=I.startTime;if(J>E)break;var ut=I.transferSize,gt=I.initiatorType;ut&&Ng(gt)&&(I=I.responseEnd,v+=ut*(I<E?1:(E-J)/(I-J)))}if(--r,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wf=null,Df=null;function Vl(t){return t.nodeType===9?t:t.ownerDocument}function Og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function Xx(){var t=window.event;return t&&t.type==="popstate"?t===Lf?!1:(Lf=t,!0):(Lf=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch(Yx)}:zg;function Yx(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Bg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),rr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,E=f.nodeName;f[X]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);rr(n)}function Fg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function jx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[X])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Zx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Hg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Of(t){return t.data==="$?"||t.data==="$~"}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Kx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var zf=null;function Gg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function kg(t,n,a){switch(n=Vl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);at(t)}var ci=new Map,Xg=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=Z.d;Z.d={f:Qx,r:Jx,D:$x,C:tS,L:eS,m:nS,X:aS,S:iS,M:sS};function Qx(){var t=na.f(),n=Ol();return t||n}function Jx(t){var n=W(t);n!==null&&n.tag===5&&n.type==="form"?om(n):na.r(t)}var ir=typeof document>"u"?null:document;function Wg(t,n,a){var r=ir;if(r&&typeof n=="string"&&n){var c=pn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Xg.has(c)||(Xg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",t),Dt(n),r.head.appendChild(n)))}}function $x(t){na.D(t),Wg("dns-prefetch",t,null)}function tS(t,n){na.C(t,n),Wg("preconnect",t,n)}function eS(t,n,a){na.L(t,n,a);var r=ir;if(r&&t&&n){var c='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+pn(a.imageSizes)+'"]')):c+='[href="'+pn(t)+'"]';var f=c;switch(n){case"style":f=ar(t);break;case"script":f=sr(t)}ci.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),Tn(n,"link",t),Dt(n),r.head.appendChild(n)))}}function nS(t,n){na.m(t,n);var a=ir;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+pn(r)+'"][href="'+pn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(t)}if(!ci.has(f)&&(t=x({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),Tn(r,"link",t),Dt(r),a.head.appendChild(r)}}}function iS(t,n,a){na.S(t,n,a);var r=ir;if(r&&t){var c=wt(r).hoistableStyles,f=ar(t);n=n||"default";var v=c.get(f);if(!v){var E={loading:0,preload:null};if(v=r.querySelector(Eo(f)))E.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&If(t,a);var I=v=r.createElement("link");Dt(I),Tn(I,"link",t),I._p=new Promise(function(J,ut){I.onload=J,I.onerror=ut}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Xl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:E},c.set(f,v)}}}function aS(t,n){na.X(t,n);var a=ir;if(a&&t){var r=wt(a).hoistableScripts,c=sr(t),f=r.get(c);f||(f=a.querySelector(To(c)),f||(t=x({src:t,async:!0},n),(n=ci.get(c))&&Bf(t,n),f=a.createElement("script"),Dt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function sS(t,n){na.M(t,n);var a=ir;if(a&&t){var r=wt(a).hoistableScripts,c=sr(t),f=r.get(c);f||(f=a.querySelector(To(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Bf(t,n),f=a.createElement("script"),Dt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function qg(t,n,a,r){var c=(c=pt.current)?kl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=wt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ar(a.href);var f=wt(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(Eo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||rS(c,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=wt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ar(t){return'href="'+pn(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function Yg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function rS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),Dt(n),t.head.appendChild(n))}function sr(t){return'[src="'+pn(t)+'"]'}function To(t){return"script[async]"+t}function jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+pn(a.href)+'"]');if(r)return n.instance=r,Dt(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Dt(r),Tn(r,"style",c),Xl(r,a.precedence,t),n.instance=r;case"stylesheet":c=ar(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,Dt(f),f;r=Yg(a),(c=ci.get(c))&&If(r,c),f=(t.ownerDocument||t).createElement("link"),Dt(f);var v=f;return v._p=new Promise(function(E,I){v.onload=E,v.onerror=I}),Tn(f,"link",r),n.state.loading|=4,Xl(f,a.precedence,t),n.instance=f;case"script":return f=sr(a.src),(c=t.querySelector(To(f)))?(n.instance=c,Dt(c),c):(r=a,(c=ci.get(f))&&(r=x({},a),Bf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Dt(c),Tn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xl(r,a.precedence,t));return n.instance}function Xl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var E=r[v];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wl=null;function Zg(t,n,a){if(Wl===null){var r=new Map,c=Wl=new Map;c.set(a,r)}else c=Wl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[X]||f[je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var E=r.get(v);E?E.push(f):r.set(v,[f])}}return r}function Kg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function oS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function lS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ar(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Dt(f);return}f=n.ownerDocument||n,r=Yg(r),(c=ci.get(c))&&If(r,c),f=f.createElement("link"),Dt(f);var v=f;v._p=new Promise(function(E,I){v.onload=E,v.onerror=I}),Tn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function cS(t,n){return t.stylesheets&&t.count===0&&jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*kx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yl=null;function jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yl=new Map,n.forEach(uS,t),Yl=null,ql.call(t))}function uS(t,n){if(!(n.state.loading&4)){var a=Yl.get(t);if(a)var r=a.get(null);else{a=new Map,Yl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=ql.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:D,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function fS(t,n,a,r,c,f,v,E,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Jg(t,n,a,r,c,f,v,E,I,J,ut,gt){return t=new fS(t,n,a,v,I,J,ut,gt,E),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},yu(f),t}function $g(t){return t?(t=zs,t):zs}function t_(t,n,a,r,c,f){c=$g(c),r.context===null?r.context=c:r.pendingContext=c,r=Ma(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ea(t,r,n),a!==null&&(Gn(a,t,n),no(a,t,n))}function e_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){e_(t,n),(t=t.alternate)&&e_(t,n)}function n_(t){if(t.tag===13||t.tag===31){var n=es(t,67108864);n!==null&&Gn(n,t,67108864),Hf(t,67108864)}}function i_(t){if(t.tag===13||t.tag===31){var n=Qn();n=Ka(n);var a=es(t,n);a!==null&&Gn(a,t,n),Hf(t,n)}}var Zl=!0;function hS(t,n,a,r){var c=P.T;P.T=null;var f=Z.p;try{Z.p=2,Gf(t,n,a,r)}finally{Z.p=f,P.T=c}}function dS(t,n,a,r){var c=P.T;P.T=null;var f=Z.p;try{Z.p=8,Gf(t,n,a,r)}finally{Z.p=f,P.T=c}}function Gf(t,n,a,r){if(Zl){var c=Vf(r);if(c===null)Rf(t,n,r,Kl,a),s_(t,r);else if(mS(c,t,n,a,r))r.stopPropagation();else if(s_(t,r),n&4&&-1<pS.indexOf(t)){for(;c!==null;){var f=W(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ct(f.pendingLanes);if(v!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var I=1<<31-$t(v);E.entanglements[1]|=I,v&=~I}Ui(f),(Re&6)===0&&(Ll=ht()+500,xo(0))}}break;case 31:case 13:E=es(f,2),E!==null&&Gn(E,f,2),Ol(),Hf(f,2)}if(f=Vf(r),f===null&&Rf(t,n,r,Kl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Rf(t,n,r,null,a)}}function Vf(t){return t=kc(t),kf(t)}var Kl=null;function kf(t){if(Kl=null,t=it(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Kl=t,null}function a_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case mt:return 2;case Xt:return 8;case Ut:case It:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Xf=!1,Oa=null,Pa=null,za=null,Ao=new Map,Ro=new Map,Ia=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s_(t,n){switch(t){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=W(n),n!==null&&n_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function mS(t,n,a,r,c){switch(n){case"focusin":return Oa=Co(Oa,t,n,a,r,c),!0;case"dragenter":return Pa=Co(Pa,t,n,a,r,c),!0;case"mouseover":return za=Co(za,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,r,c)),!0}return!1}function r_(t){var n=it(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Qa(t.priority,function(){i_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Qa(t.priority,function(){i_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Vc=r,a.target.dispatchEvent(r),Vc=null}else return n=W(a),n!==null&&n_(n),t.blockedOn=a,!1;n.shift()}return!0}function o_(t,n,a){Ql(t)&&a.delete(n)}function gS(){Xf=!1,Oa!==null&&Ql(Oa)&&(Oa=null),Pa!==null&&Ql(Pa)&&(Pa=null),za!==null&&Ql(za)&&(za=null),Ao.forEach(o_),Ro.forEach(o_)}function Jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,gS)))}var $l=null;function l_(t){$l!==t&&($l=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$l===t&&($l=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(kf(r||a)===null)continue;break}var f=W(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function rr(t){function n(I){return Jl(I,t)}Oa!==null&&Jl(Oa,t),Pa!==null&&Jl(Pa,t),za!==null&&Jl(za,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Ia.length;a++){var r=Ia[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)r_(a),a.blockedOn===null&&Ia.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[xn]||null;if(typeof f=="function")v||l_(a);else if(v){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[xn]||null)E=v.formAction;else if(kf(c)!==null)continue}else E=v.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),l_(a)}}}function c_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(t){this._internalRoot=t}tc.prototype.render=Wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();t_(a,r,t,n,null,null)},tc.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t_(t.current,2,null,t,null,null),Ol(),n[Bi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,t),a===0&&r_(t)}};var u_=e.version;if(u_!=="19.2.4")throw Error(s(527,u_,"19.2.4"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var _S={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{jt=ec.inject(_S),Wt=ec}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=_m,f=vm,v=xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Jg(t,1,!1,null,null,a,r,null,c,f,v,c_),t[Bi]=n.current,Af(t),new Wf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=_m,v=vm,E=xm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Jg(t,1,!0,n,a??null,r,c,I,f,v,E,c_),n.context=$g(null),a=n.current,r=Qn(),r=Ka(r),c=Ma(r),c.callback=null,Ea(a,c,r),a=r,n.current.lanes=a,vn(n,a),Ui(n),t[Bi]=n.current,Af(t),new tc(n)},Do.version="19.2.4",Do}var S_;function RS(){if(S_)return jf.exports;S_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),jf.exports=AS(),jf.exports}var CS=RS();const wS=w0(CS);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="170",Tr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DS=0,y_=1,US=2,U0=1,LS=2,la=3,Za=0,On=1,Oi=2,Ya=0,br=1,Ch=2,M_=3,E_=4,NS=5,ys=100,OS=101,PS=102,zS=103,IS=104,BS=200,FS=201,HS=202,GS=203,wh=204,Dh=205,VS=206,kS=207,XS=208,WS=209,qS=210,YS=211,jS=212,ZS=213,KS=214,Uh=0,Lh=1,Nh=2,Cr=3,Oh=4,Ph=5,zh=6,Ih=7,L0=0,QS=1,JS=2,ja=0,$S=1,ty=2,ey=3,ny=4,iy=5,ay=6,sy=7,N0=300,wr=301,Dr=302,Bh=303,Fh=304,Pc=306,Ur=1e3,Pi=1001,Hh=1002,Ti=1003,ry=1004,nc=1005,Dn=1006,Jf=1007,Es=1008,ha=1009,O0=1010,P0=1011,Fo=1012,vd=1013,Ts=1014,ca=1015,Go=1016,xd=1017,Sd=1018,Lr=1020,z0=35902,I0=1021,B0=1022,Mi=1023,F0=1024,H0=1025,Ar=1026,Nr=1027,G0=1028,yd=1029,V0=1030,Md=1031,Ed=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,Gh=35840,Vh=35841,kh=35842,Xh=35843,Wh=36196,qh=37492,Yh=37496,jh=37808,Zh=37809,Kh=37810,Qh=37811,Jh=37812,$h=37813,td=37814,ed=37815,nd=37816,id=37817,ad=37818,sd=37819,rd=37820,od=37821,Uc=36492,ld=36494,cd=36495,k0=36283,ud=36284,fd=36285,hd=36286,oy=3200,ly=3201,cy=0,uy=1,qa="",fi="srgb",Pr="srgb-linear",zc="linear",Fe="srgb",or=7680,T_=519,fy=512,hy=513,dy=514,X0=515,py=516,my=517,gy=518,_y=519,b_=35044,A_="300 es",ua=2e3,Oc=2001;class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,dd=180/Math.PI;function Vo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Nn(o,e,i){return Math.max(e,Math.min(i,o))}function vy(o,e){return(o%e+e)%e}function $f(o,e,i){return(1-i)*o+i*e}function Uo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const xy={DEG2RAD:Lc};class he{constructor(e=0,i=0){he.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(e,i,s,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],x=s[7],S=s[2],M=s[5],b=s[8],R=l[0],y=l[3],_=l[6],L=l[1],D=l[4],C=l[7],K=l[2],B=l[5],z=l[8];return u[0]=h*R+d*L+m*K,u[3]=h*y+d*D+m*B,u[6]=h*_+d*C+m*z,u[1]=p*R+g*L+x*K,u[4]=p*y+g*D+x*B,u[7]=p*_+g*C+x*z,u[2]=S*R+M*L+b*K,u[5]=S*y+M*D+b*B,u[8]=S*_+M*C+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=g*h-d*p,S=d*m-g*u,M=p*u-h*m,b=i*x+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=x*R,e[1]=(l*p-g*s)*R,e[2]=(d*s-l*h)*R,e[3]=S*R,e[4]=(g*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(s*m-p*i)*R,e[8]=(h*i-s*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(th.makeScale(e,i)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,i){return this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new le;function W0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ho(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Sy(){const o=Ho("canvas");return o.style.display="block",o}const R_={};function Io(o){o in R_||(R_[o]=!0,console.warn(o))}function yy(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function My(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ey(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ee={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(o,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===Fe&&(o.r=fa(o.r),o.g=fa(o.g),o.b=fa(o.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Fe&&(o.r=Rr(o.r),o.g=Rr(o.g),o.b=Rr(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===qa?zc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,i){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const C_=[.64,.33,.3,.6,.15,.06],w_=[.2126,.7152,.0722],D_=[.3127,.329],U_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee.define({[Pr]:{primaries:C_,whitePoint:D_,transfer:zc,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:w_,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:C_,whitePoint:D_,transfer:Fe,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:w_,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}});let lr;class Ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{lr===void 0&&(lr=Ho("canvas")),lr.width=e.width,lr.height=e.height;const s=lr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=lr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ho("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=fa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let by=0;class q0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(eh(l[h].image)):u.push(eh(l[h]))}else u=eh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ty.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ay=0;class _n extends Rs{constructor(e=_n.DEFAULT_IMAGE,i=_n.DEFAULT_MAPPING,s=Pi,l=Pi,u=Dn,h=Es,d=Mi,m=ha,p=_n.DEFAULT_ANISOTROPY,g=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Vo(),this.name="",this.source=new q0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=N0;_n.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],S=m[1],M=m[5],b=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(x-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(x+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,C=(M+1)/2,K=(_+1)/2,B=(g+S)/4,z=(x+R)/4,Y=(b+y)/4;return D>C&&D>K?D<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(D),l=B/s,u=z/s):C>K?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=B/l,u=Y/l):K<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(K),s=z/u,l=Y/u),this.set(s,l,u,i),this}let L=Math.sqrt((y-b)*(y-b)+(x-R)*(x-R)+(S-g)*(S-g));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(x-R)/L,this.z=(S-g)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ry extends Rs{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new _n(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new q0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends Ry{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Y0 extends _n{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cy extends _n{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(x!==R||m!==S||p!==M||g!==b){let y=1-d;const _=m*S+p*M+g*b+x*R,L=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const K=Math.sqrt(D),B=Math.atan2(K,_*L);y=Math.sin(y*B)/K,d=Math.sin(d*B)/K}const C=d*L;if(m=m*y+S*C,p=p*y+M*C,g=g*y+b*C,x=x*y+R*C,y===1-d){const K=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=K,p*=K,g*=K,x*=K}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+g*x+m*M-p*S,e[i+1]=m*b+g*S+p*x-d*M,e[i+2]=p*b+g*M+d*S-m*x,e[i+3]=g*b-d*x-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),x=d(u/2),S=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*g*x+p*M*b,this._y=p*M*x-S*g*b,this._z=p*g*b+S*M*x,this._w=p*g*x-S*M*b;break;case"YXZ":this._x=S*g*x+p*M*b,this._y=p*M*x-S*g*b,this._z=p*g*b-S*M*x,this._w=p*g*x+S*M*b;break;case"ZXY":this._x=S*g*x-p*M*b,this._y=p*M*x+S*g*b,this._z=p*g*b+S*M*x,this._w=p*g*x-S*M*b;break;case"ZYX":this._x=S*g*x-p*M*b,this._y=p*M*x+S*g*b,this._z=p*g*b-S*M*x,this._w=p*g*x+S*M*b;break;case"YZX":this._x=S*g*x+p*M*b,this._y=p*M*x+S*g*b,this._z=p*g*b-S*M*x,this._w=p*g*x-S*M*b;break;case"XZY":this._x=S*g*x-p*M*b,this._y=p*M*x-S*g*b,this._z=p*g*b+S*M*x,this._w=p*g*x+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],S=s+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*x+this._w*S,this._x=s*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(N_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(N_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),g=2*(d*i-u*l),x=2*(u*s-h*i);return this.x=i+m*p+h*x-d*g,this.y=s+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new nt,N_=new As;class ko{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ac.subVectors(this.max,Lo),cr.subVectors(e.a,Lo),ur.subVectors(e.b,Lo),fr.subVectors(e.c,Lo),Fa.subVectors(ur,cr),Ha.subVectors(fr,ur),ps.subVectors(cr,fr);let i=[0,-Fa.z,Fa.y,0,-Ha.z,Ha.y,0,-ps.z,ps.y,Fa.z,0,-Fa.x,Ha.z,0,-Ha.x,ps.z,0,-ps.x,-Fa.y,Fa.x,0,-Ha.y,Ha.x,0,-ps.y,ps.x,0];return!ih(i,cr,ur,fr,ac)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,cr,ur,fr,ac))?!1:(sc.crossVectors(Fa,Ha),i=[sc.x,sc.y,sc.z],ih(i,cr,ur,fr,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ia=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],xi=new nt,ic=new ko,cr=new nt,ur=new nt,fr=new nt,Fa=new nt,Ha=new nt,ps=new nt,Lo=new nt,ac=new nt,sc=new nt,ms=new nt;function ih(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ms.fromArray(o,u);const d=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=e.dot(ms),p=i.dot(ms),g=s.dot(ms);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const wy=new ko,No=new nt,ah=new nt;class Ic{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):wy.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(No,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(ah)),this.expandByPoint(No.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const aa=new nt,sh=new nt,rc=new nt,Ga=new nt,rh=new nt,oc=new nt,oh=new nt;class Td{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){sh.copy(e).add(i).multiplyScalar(.5),rc.copy(i).sub(e).normalize(),Ga.copy(this.origin).sub(sh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(rc),d=Ga.dot(this.direction),m=-Ga.dot(rc),p=Ga.lengthSq(),g=Math.abs(1-h*h);let x,S,M,b;if(g>0)if(x=h*m-d,S=h*d-m,b=u*g,x>=0)if(S>=-b)if(S<=b){const R=1/g;x*=R,S*=R,M=x*(x+h*S+2*d)+S*(h*x+S+2*m)+p}else S=u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S<=-b?(x=Math.max(0,-(-h*u+d)),S=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p):S<=b?(x=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(x=Math.max(0,-(h*u+d)),S=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p);else S=h>0?-u:u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(sh).addScaledVector(rc,S),M}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-S.z)*x,m=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,m=(e.min.z-S.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,s,l,u){rh.subVectors(i,e),oc.subVectors(s,e),oh.crossVectors(rh,oc);let h=this.direction.dot(oh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ga.subVectors(this.origin,e);const m=d*this.direction.dot(oc.crossVectors(Ga,oc));if(m<0)return null;const p=d*this.direction.dot(rh.cross(Ga));if(p<0||m+p>h)return null;const g=-d*Ga.dot(oh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,s,l,u,h,d,m,p,g,x,S,M,b,R,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,g,x,S,M,b,R,y)}set(e,i,s,l,u,h,d,m,p,g,x,S,M,b,R,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=S,_[3]=M,_[7]=b,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/hr.setFromMatrixColumn(e,0).length(),u=1/hr.setFromMatrixColumn(e,1).length(),h=1/hr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=h*g,M=h*x,b=d*g,R=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+b*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*g,M=m*x,b=p*g,R=p*x;i[0]=S+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*g,M=m*x,b=p*g,R=p*x;i[0]=S-R*d,i[4]=-h*x,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*g,M=h*x,b=d*g,R=d*x;i[0]=m*g,i[4]=b*p-M,i[8]=S*p+R,i[1]=m*x,i[5]=R*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-S*x,i[8]=b*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*x+b,i[10]=S-R*x}else if(e.order==="XZY"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=S*x+R,i[5]=h*g,i[9]=M*x-b,i[2]=b*x-M,i[6]=d*g,i[10]=R*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dy,e,Uy)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Va.crossVectors(s,Jn),Va.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Va.crossVectors(s,Jn)),Va.normalize(),lc.crossVectors(Jn,Va),l[0]=Va.x,l[4]=lc.x,l[8]=Jn.x,l[1]=Va.y,l[5]=lc.y,l[9]=Jn.y,l[2]=Va.z,l[6]=lc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],x=s[5],S=s[9],M=s[13],b=s[2],R=s[6],y=s[10],_=s[14],L=s[3],D=s[7],C=s[11],K=s[15],B=l[0],z=l[4],Y=l[8],U=l[12],w=l[1],H=l[5],ct=l[9],rt=l[13],_t=l[2],vt=l[6],P=l[10],Z=l[14],j=l[3],St=l[7],Et=l[11],O=l[15];return u[0]=h*B+d*w+m*_t+p*j,u[4]=h*z+d*H+m*vt+p*St,u[8]=h*Y+d*ct+m*P+p*Et,u[12]=h*U+d*rt+m*Z+p*O,u[1]=g*B+x*w+S*_t+M*j,u[5]=g*z+x*H+S*vt+M*St,u[9]=g*Y+x*ct+S*P+M*Et,u[13]=g*U+x*rt+S*Z+M*O,u[2]=b*B+R*w+y*_t+_*j,u[6]=b*z+R*H+y*vt+_*St,u[10]=b*Y+R*ct+y*P+_*Et,u[14]=b*U+R*rt+y*Z+_*O,u[3]=L*B+D*w+C*_t+K*j,u[7]=L*z+D*H+C*vt+K*St,u[11]=L*Y+D*ct+C*P+K*Et,u[15]=L*U+D*rt+C*Z+K*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],x=e[6],S=e[10],M=e[14],b=e[3],R=e[7],y=e[11],_=e[15];return b*(+u*m*x-l*p*x-u*d*S+s*p*S+l*d*M-s*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*g-u*m*g)+y*(+i*p*x-i*d*M-u*h*x+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*x+i*d*S+l*h*x-s*h*S+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=e[9],S=e[10],M=e[11],b=e[12],R=e[13],y=e[14],_=e[15],L=x*y*p-R*S*p+R*m*M-d*y*M-x*m*_+d*S*_,D=b*S*p-g*y*p-b*m*M+h*y*M+g*m*_-h*S*_,C=g*R*p-b*x*p+b*d*M-h*R*M-g*d*_+h*x*_,K=b*x*m-g*R*m-b*d*S+h*R*S+g*d*y-h*x*y,B=i*L+s*D+l*C+u*K;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=L*z,e[1]=(R*S*u-x*y*u-R*l*M+s*y*M+x*l*_-s*S*_)*z,e[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*_+s*m*_)*z,e[3]=(x*m*u-d*S*u-x*l*p+s*S*p+d*l*M-s*m*M)*z,e[4]=D*z,e[5]=(g*y*u-b*S*u+b*l*M-i*y*M-g*l*_+i*S*_)*z,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*z,e[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*M+i*m*M)*z,e[8]=C*z,e[9]=(b*x*u-g*R*u-b*s*M+i*R*M+g*s*_-i*x*_)*z,e[10]=(h*R*u-b*d*u+b*s*p-i*R*p-h*s*_+i*d*_)*z,e[11]=(g*d*u-h*x*u-g*s*p+i*x*p+h*s*M-i*d*M)*z,e[12]=K*z,e[13]=(g*R*l-b*x*l+b*s*S-i*R*S-g*s*y+i*x*y)*z,e[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*y-i*d*y)*z,e[15]=(h*x*l-g*d*l+g*s*m-i*x*m-h*s*S+i*d*S)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,S=u*p,M=u*g,b=u*x,R=h*g,y=h*x,_=d*x,L=m*p,D=m*g,C=m*x,K=s.x,B=s.y,z=s.z;return l[0]=(1-(R+_))*K,l[1]=(M+C)*K,l[2]=(b-D)*K,l[3]=0,l[4]=(M-C)*B,l[5]=(1-(S+_))*B,l[6]=(y+L)*B,l[7]=0,l[8]=(b+D)*z,l[9]=(y-L)*z,l[10]=(1-(S+R))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=hr.set(l[0],l[1],l[2]).length();const h=hr.set(l[4],l[5],l[6]).length(),d=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,g=1/h,x=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=ua){const m=this.elements,p=2*u/(i-e),g=2*u/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let M,b;if(d===ua)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Oc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=ua){const m=this.elements,p=1/(i-e),g=1/(s-l),x=1/(h-u),S=(i+e)*p,M=(s+l)*g;let b,R;if(d===ua)b=(h+u)*x,R=-2*x;else if(d===Oc)b=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const hr=new nt,Si=new tn,Dy=new nt(0,0,0),Uy=new nt(1,1,1),Va=new nt,lc=new nt,Jn=new nt,O_=new tn,P_=new As;class da{constructor(e=0,i=0,s=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Nn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Nn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return O_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return P_.setFromEuler(this),this.setFromQuaternion(P_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";let j0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ly=0;const z_=new nt,dr=new As,sa=new tn,cc=new nt,Oo=new nt,Ny=new nt,Oy=new As,I_=new nt(1,0,0),B_=new nt(0,1,0),F_=new nt(0,0,1),H_={type:"added"},Py={type:"removed"},pr={type:"childadded",child:null},lh={type:"childremoved",child:null};class Xn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new nt,i=new da,s=new As,l=new nt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new le}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(I_,e)}rotateY(e){return this.rotateOnAxis(B_,e)}rotateZ(e){return this.rotateOnAxis(F_,e)}translateOnAxis(e,i){return z_.copy(e).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(I_,e)}translateY(e){return this.translateOnAxis(B_,e)}translateZ(e){return this.translateOnAxis(F_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?cc.copy(e):cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Oo,cc,this.up):sa.lookAt(cc,Oo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(sa),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(H_),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Py),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(H_),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),x=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new nt(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new nt,ra=new nt,ch=new nt,oa=new nt,mr=new nt,gr=new nt,G_=new nt,uh=new nt,fh=new nt,hh=new nt,dh=new $e,ph=new $e,mh=new $e;let Po=class yr{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){yi.subVectors(l,i),ra.subVectors(s,i),ch.subVectors(e,i);const h=yi.dot(yi),d=yi.dot(ra),m=yi.dot(ch),p=ra.dot(ra),g=ra.dot(ch),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(p*m-d*g)*S,b=(h*g-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,oa.x),m.addScaledVector(h,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(dh,u.x),h.addScaledVector(ph,u.y),h.addScaledVector(mh,u.z),h}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),ra.subVectors(e,i),yi.cross(ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),yi.cross(ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yr.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return yr.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;mr.subVectors(l,s),gr.subVectors(u,s),uh.subVectors(e,s);const m=mr.dot(uh),p=gr.dot(uh);if(m<=0&&p<=0)return i.copy(s);fh.subVectors(e,l);const g=mr.dot(fh),x=gr.dot(fh);if(g>=0&&x<=g)return i.copy(l);const S=m*x-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(mr,h);hh.subVectors(e,u);const M=mr.dot(hh),b=gr.dot(hh);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(gr,d);const y=g*b-M*x;if(y<=0&&x-g>=0&&M-b>=0)return G_.subVectors(u,l),d=(x-g)/(x-g+(M-b)),i.copy(l).addScaledVector(G_,d);const _=1/(y+R+S);return h=R*_,d=S*_,i.copy(s).addScaledVector(mr,h).addScaledVector(gr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},uc={h:0,s:0,l:0};function gh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class we{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ee.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ee.workingColorSpace){if(e=vy(e,1),i=Nn(i,0,1),s=Nn(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=gh(h,u,e+1/3),this.g=gh(h,u,e),this.b=gh(h,u,e-1/3)}return Ee.toWorkingColorSpace(this,l),this}setStyle(e,i=fi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const s=Z0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ee.fromWorkingColorSpace(wn.copy(this),e),Math.round(Nn(wn.r*255,0,255))*65536+Math.round(Nn(wn.g*255,0,255))*256+Math.round(Nn(wn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=fi){Ee.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+i,ka.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ka),e.getHSL(uc);const s=$f(ka.h,uc.h,i),l=$f(ka.s,uc.s,i),u=$f(ka.l,uc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new we;we.NAMES=Z0;let zy=0;class Xo extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Vo(),this.name="",this.blending=br,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(s.blending=this.blending),this.side!==Za&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Dh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class K0 extends Xo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=L0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new nt,fc=new he;class bi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=b_,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(e),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==b_&&(e.usage=this.usage),e}}class Q0 extends bi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class J0 extends bi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class zi extends bi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Iy=0;const ui=new tn,_h=new Xn,_r=new nt,$n=new ko,zo=new ko,gn=new nt;class Ii extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W0(e)?J0:Q0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,s){return ui.makeTranslation(e,i,s),this.applyMatrix4(ui),this}scale(e,i,s){return ui.makeScale(e,i,s),this.applyMatrix4(ui),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new zi(s,3))}else{for(let s=0,l=i.count;s<l;s++){const u=e[s];i.setXYZ(s,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors($n.min,zo.min),$n.expandByPoint(gn),gn.addVectors($n.max,zo.max),$n.expandByPoint(gn)):($n.expandByPoint(zo.min),$n.expandByPoint(zo.max))}$n.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(e,p),gn.add(_r)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new nt,m[Y]=new nt;const p=new nt,g=new nt,x=new nt,S=new he,M=new he,b=new he,R=new nt,y=new nt;function _(Y,U,w){p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,U),x.fromBufferAttribute(s,w),S.fromBufferAttribute(u,Y),M.fromBufferAttribute(u,U),b.fromBufferAttribute(u,w),g.sub(p),x.sub(p),M.sub(S),b.sub(S);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(H),y.copy(x).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(H),d[Y].add(R),d[U].add(R),d[w].add(R),m[Y].add(y),m[U].add(y),m[w].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Y=0,U=L.length;Y<U;++Y){const w=L[Y],H=w.start,ct=w.count;for(let rt=H,_t=H+ct;rt<_t;rt+=3)_(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const D=new nt,C=new nt,K=new nt,B=new nt;function z(Y){K.fromBufferAttribute(l,Y),B.copy(K);const U=d[Y];D.copy(U),D.sub(K.multiplyScalar(K.dot(U))).normalize(),C.crossVectors(B,U);const H=C.dot(m[Y])<0?-1:1;h.setXYZW(Y,D.x,D.y,D.z,H)}for(let Y=0,U=L.length;Y<U;++Y){const w=L[Y],H=w.start,ct=w.count;for(let rt=H,_t=H+ct;rt<_t;rt+=3)z(e.getX(rt+0)),z(e.getX(rt+1)),z(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,m=new nt,p=new nt,g=new nt,x=new nt;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,x=d.normalized,S=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)S[b++]=p[M++]}return new bi(S,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const S=p[g],M=e(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let S=0,M=x.length;S<M;S++)g.push(x[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new tn,gs=new Td,hc=new Ic,k_=new nt,dc=new nt,pc=new nt,mc=new nt,vh=new nt,gc=new nt,X_=new nt,_c=new nt;class Ei extends Xn{constructor(e=new Ii,i=new K0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){gc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(vh.fromBufferAttribute(x,e),h?gc.addScaledVector(vh,g):gc.addScaledVector(vh.sub(i),g))}i.add(gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(u),gs.copy(e.ray).recast(e.near),!(hc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(hc,k_)===null||gs.origin.distanceToSquared(k_)>(e.far-e.near)**2))&&(V_.copy(u).invert(),gs.copy(e.ray).applyMatrix4(V_),!(s.boundingBox!==null&&gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,gs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],_=h[y.materialIndex],L=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=L,K=D;C<K;C+=3){const B=d.getX(C),z=d.getX(C+1),Y=d.getX(C+2);l=vc(this,_,e,s,p,g,x,B,z,Y),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const L=d.getX(y),D=d.getX(y+1),C=d.getX(y+2);l=vc(this,h,e,s,p,g,x,L,D,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],_=h[y.materialIndex],L=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=L,K=D;C<K;C+=3){const B=C,z=C+1,Y=C+2;l=vc(this,_,e,s,p,g,x,B,z,Y),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const L=y,D=y+1,C=y+2;l=vc(this,h,e,s,p,g,x,L,D,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function By(o,e,i,s,l,u,h,d){let m;if(e.side===On?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Za,d),m===null)return null;_c.copy(d),_c.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:o}}function vc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,dc),o.getVertexPosition(m,pc),o.getVertexPosition(p,mc);const g=By(o,e,i,s,dc,pc,mc,X_);if(g){const x=new nt;Po.getBarycoord(X_,dc,pc,mc,x),l&&(g.uv=Po.getInterpolatedAttribute(l,d,m,p,x,new he)),u&&(g.uv1=Po.getInterpolatedAttribute(u,d,m,p,x,new he)),h&&(g.normal=Po.getInterpolatedAttribute(h,d,m,p,x,new nt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new nt,materialIndex:0};Po.getNormal(dc,pc,mc,S.normal),g.face=S,g.barycoord=x}return g}class Wo extends Ii{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new zi(p,3)),this.setAttribute("normal",new zi(g,3)),this.setAttribute("uv",new zi(x,2));function b(R,y,_,L,D,C,K,B,z,Y,U){const w=C/z,H=K/Y,ct=C/2,rt=K/2,_t=B/2,vt=z+1,P=Y+1;let Z=0,j=0;const St=new nt;for(let Et=0;Et<P;Et++){const O=Et*H-rt;for(let $=0;$<vt;$++){const ft=$*w-ct;St[R]=ft*L,St[y]=O*D,St[_]=_t,p.push(St.x,St.y,St.z),St[R]=0,St[y]=0,St[_]=B>0?1:-1,g.push(St.x,St.y,St.z),x.push($/z),x.push(1-Et/Y),Z+=1}}for(let Et=0;Et<Y;Et++)for(let O=0;O<z;O++){const $=S+O+vt*Et,ft=S+O+vt*(Et+1),V=S+(O+1)+vt*(Et+1),ot=S+(O+1)+vt*Et;m.push($,ft,ot),m.push(ft,V,ot),j+=6}d.addGroup(M,j,U),M+=j,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const s=Or(o[i]);for(const l in s)e[l]=s[l]}return e}function Fy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function $0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const Hy={clone:Or,merge:Ln};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Xo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class tv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ua}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new nt,W_=new he,q_=new he;class hi extends tv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=dd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dd*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,i){return this.getViewBounds(e,W_,q_),i.subVectors(q_,W_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Lc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,xr=1;class ky extends Xn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(vr,xr,e,i);l.layers=this.layers,this.add(l);const u=new hi(vr,xr,e,i);u.layers=this.layers,this.add(u);const h=new hi(vr,xr,e,i);h.layers=this.layers,this.add(h);const d=new hi(vr,xr,e,i);d.layers=this.layers,this.add(d);const m=new hi(vr,xr,e,i);m.layers=this.layers,this.add(m);const p=new hi(vr,xr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ua)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(x,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class ev extends _n{constructor(e,i,s,l,u,h,d,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:wr,super(e,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xy extends bs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ev(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Dn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wo(5,5,5),u=new Ai({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:Ya});u.uniforms.tEquirect.value=i;const h=new Ei(l,u),d=i.minFilter;return i.minFilter===Es&&(i.minFilter=Dn),new ky(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}const xh=new nt,Wy=new nt,qy=new le;class Wa{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=xh.subVectors(s,i).cross(Wy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qy.getNormalMatrix(e),l=this.coplanarPoint(xh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Ic,xc=new nt;class nv{constructor(e=new Wa,i=new Wa,s=new Wa,l=new Wa,u=new Wa,h=new Wa){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ua){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],S=l[7],M=l[8],b=l[9],R=l[10],y=l[11],_=l[12],L=l[13],D=l[14],C=l[15];if(s[0].setComponents(m-u,S-p,y-M,C-_).normalize(),s[1].setComponents(m+u,S+p,y+M,C+_).normalize(),s[2].setComponents(m+h,S+g,y+b,C+L).normalize(),s[3].setComponents(m-h,S-g,y-b,C-L).normalize(),s[4].setComponents(m-d,S-x,y-R,C-D).normalize(),i===ua)s[5].setComponents(m+d,S+x,y+R,C+D).normalize();else if(i===Oc)s[5].setComponents(d,x,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Yy(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const g=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,g);else{x.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<x.length;M++){const b=x[S],R=x[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,x[S]=R)}x.length=S+1;for(let M=0,b=x.length;M<b;M++){const R=x[M];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}class qo extends Ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,x=e/d,S=i/m,M=[],b=[],R=[],y=[];for(let _=0;_<g;_++){const L=_*S-h;for(let D=0;D<p;D++){const C=D*x-u;b.push(C,-L,0),R.push(0,0,1),y.push(D/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const D=L+p*_,C=L+p*(_+1),K=L+1+p*(_+1),B=L+1+p*_;M.push(D,C,B),M.push(C,K,B)}this.setIndex(M),this.setAttribute("position",new zi(b,3)),this.setAttribute("normal",new zi(R,3)),this.setAttribute("uv",new zi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.widthSegments,e.heightSegments)}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
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
#endif`,Ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tM=`#ifdef USE_AOMAP
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
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oM=`#ifdef USE_IRIDESCENCE
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
#endif`,lM=`#ifdef USE_BUMPMAP
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_M=`#define PI 3.141592653589793
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
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xM=`vec3 transformedNormal = objectNormal;
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
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",bM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
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
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,qM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,YM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,jM=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iE=`#if defined( USE_POINTS_UV )
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
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
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
#endif`,_E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
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
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jE=`uniform sampler2D t2D;
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
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
}`,tT=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eT=`#define DISTANCE
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
}`,nT=`#define DISTANCE
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
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
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
}`,rT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#define LAMBERT
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
}`,uT=`#define LAMBERT
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
}`,fT=`#define MATCAP
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
}`,hT=`#define MATCAP
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
}`,dT=`#define NORMAL
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
}`,pT=`#define NORMAL
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
}`,mT=`#define PHONG
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
}`,gT=`#define PHONG
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
}`,_T=`#define STANDARD
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
}`,vT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,xT=`#define TOON
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
}`,ST=`#define TOON
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
}`,yT=`uniform float size;
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
}`,MT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 color;
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
}`,bT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,AT=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:jy,alphahash_pars_fragment:Zy,alphamap_fragment:Ky,alphamap_pars_fragment:Qy,alphatest_fragment:Jy,alphatest_pars_fragment:$y,aomap_fragment:tM,aomap_pars_fragment:eM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:aM,beginnormal_vertex:sM,bsdfs:rM,iridescence_fragment:oM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:hM,color_fragment:dM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:_M,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:SM,displacementmap_vertex:yM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:TM,colorspace_pars_fragment:bM,envmap_fragment:AM,envmap_common_pars_fragment:RM,envmap_pars_fragment:CM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:HM,envmap_vertex:DM,fog_vertex:UM,fog_pars_vertex:LM,fog_fragment:NM,fog_pars_fragment:OM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:zM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:BM,lights_pars_begin:FM,lights_toon_fragment:GM,lights_toon_pars_fragment:VM,lights_phong_fragment:kM,lights_phong_pars_fragment:XM,lights_physical_fragment:WM,lights_physical_pars_fragment:qM,lights_fragment_begin:YM,lights_fragment_maps:jM,lights_fragment_end:ZM,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:$M,map_fragment:tE,map_pars_fragment:eE,map_particle_fragment:nE,map_particle_pars_fragment:iE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:sE,morphinstance_vertex:rE,morphcolor_vertex:oE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:dE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:_E,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:xE,iridescence_pars_fragment:SE,opaque_fragment:yE,packing:ME,premultiplied_alpha_fragment:EE,project_vertex:TE,dithering_fragment:bE,dithering_pars_fragment:AE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:DE,shadowmap_vertex:UE,shadowmask_pars_fragment:LE,skinbase_vertex:NE,skinning_pars_vertex:OE,skinning_vertex:PE,skinnormal_vertex:zE,specularmap_fragment:IE,specularmap_pars_fragment:BE,tonemapping_fragment:FE,tonemapping_pars_fragment:HE,transmission_fragment:GE,transmission_pars_fragment:VE,uv_pars_fragment:kE,uv_pars_vertex:XE,uv_vertex:WE,worldpos_vertex:qE,background_vert:YE,background_frag:jE,backgroundCube_vert:ZE,backgroundCube_frag:KE,cube_vert:QE,cube_frag:JE,depth_vert:$E,depth_frag:tT,distanceRGBA_vert:eT,distanceRGBA_frag:nT,equirect_vert:iT,equirect_frag:aT,linedashed_vert:sT,linedashed_frag:rT,meshbasic_vert:oT,meshbasic_frag:lT,meshlambert_vert:cT,meshlambert_frag:uT,meshmatcap_vert:fT,meshmatcap_frag:hT,meshnormal_vert:dT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:_T,meshphysical_frag:vT,meshtoon_vert:xT,meshtoon_frag:ST,points_vert:yT,points_frag:MT,shadow_vert:ET,shadow_frag:TT,sprite_vert:bT,sprite_frag:AT},Nt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ni={basic:{uniforms:Ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Ln([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Ln([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Ln([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Ln([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Ln([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Ln([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Ln([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Ln([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Ln([Nt.common,Nt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Ln([Nt.lights,Nt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ni.physical={uniforms:Ln([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Sc={r:0,b:0,g:0},vs=new da,RT=new tn;function CT(o,e,i,s,l,u,h){const d=new we(0);let m=u===!0?0:1,p,g,x=null,S=0,M=null;function b(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function R(L){let D=!1;const C=b(L);C===null?_(d,m):C&&C.isColor&&(_(C,1),D=!0);const K=o.xr.getEnvironmentBlendMode();K==="additive"?s.buffers.color.setClear(0,0,0,1,h):K==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,D){const C=b(D);C&&(C.isCubeTexture||C.mapping===Pc)?(g===void 0&&(g=new Ei(new Wo(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Or(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(K,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vs.copy(D.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(vs)),g.material.toneMapped=Ee.getTransfer(C.colorSpace)!==Fe,(x!==C||S!==C.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,x=C,S=C.version,M=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Ei(new qo(2,2),new Ai({name:"BackgroundMaterial",uniforms:Or(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(C.colorSpace)!==Fe,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||S!==C.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,S=C.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(Sc,$0(o)),s.buffers.color.setClear(Sc.r,Sc.g,Sc.b,D,h)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:R,addToRenderList:y}}function wT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(w,H,ct,rt,_t){let vt=!1;const P=x(rt,ct,H);u!==P&&(u=P,p(u.object)),vt=M(w,rt,ct,_t),vt&&b(w,rt,ct,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(vt||h)&&(h=!1,C(w,H,ct,rt),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function x(w,H,ct){const rt=ct.wireframe===!0;let _t=s[w.id];_t===void 0&&(_t={},s[w.id]=_t);let vt=_t[H.id];vt===void 0&&(vt={},_t[H.id]=vt);let P=vt[rt];return P===void 0&&(P=S(m()),vt[rt]=P),P}function S(w){const H=[],ct=[],rt=[];for(let _t=0;_t<i;_t++)H[_t]=0,ct[_t]=0,rt[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ct,attributeDivisors:rt,object:w,attributes:{},index:null}}function M(w,H,ct,rt){const _t=u.attributes,vt=H.attributes;let P=0;const Z=ct.getAttributes();for(const j in Z)if(Z[j].location>=0){const Et=_t[j];let O=vt[j];if(O===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),Et===void 0||Et.attribute!==O||O&&Et.data!==O.data)return!0;P++}return u.attributesNum!==P||u.index!==rt}function b(w,H,ct,rt){const _t={},vt=H.attributes;let P=0;const Z=ct.getAttributes();for(const j in Z)if(Z[j].location>=0){let Et=vt[j];Et===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor));const O={};O.attribute=Et,Et&&Et.data&&(O.data=Et.data),_t[j]=O,P++}u.attributes=_t,u.attributesNum=P,u.index=rt}function R(){const w=u.newAttributes;for(let H=0,ct=w.length;H<ct;H++)w[H]=0}function y(w){_(w,0)}function _(w,H){const ct=u.newAttributes,rt=u.enabledAttributes,_t=u.attributeDivisors;ct[w]=1,rt[w]===0&&(o.enableVertexAttribArray(w),rt[w]=1),_t[w]!==H&&(o.vertexAttribDivisor(w,H),_t[w]=H)}function L(){const w=u.newAttributes,H=u.enabledAttributes;for(let ct=0,rt=H.length;ct<rt;ct++)H[ct]!==w[ct]&&(o.disableVertexAttribArray(ct),H[ct]=0)}function D(w,H,ct,rt,_t,vt,P){P===!0?o.vertexAttribIPointer(w,H,ct,_t,vt):o.vertexAttribPointer(w,H,ct,rt,_t,vt)}function C(w,H,ct,rt){R();const _t=rt.attributes,vt=ct.getAttributes(),P=H.defaultAttributeValues;for(const Z in vt){const j=vt[Z];if(j.location>=0){let St=_t[Z];if(St===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const Et=St.normalized,O=St.itemSize,$=e.get(St);if($===void 0)continue;const ft=$.buffer,V=$.type,ot=$.bytesPerElement,pt=V===o.INT||V===o.UNSIGNED_INT||St.gpuType===vd;if(St.isInterleavedBufferAttribute){const yt=St.data,zt=yt.stride,Pt=St.offset;if(yt.isInstancedInterleavedBuffer){for(let ne=0;ne<j.locationSize;ne++)_(j.location+ne,yt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ne=0;ne<j.locationSize;ne++)y(j.location+ne);o.bindBuffer(o.ARRAY_BUFFER,ft);for(let ne=0;ne<j.locationSize;ne++)D(j.location+ne,O/j.locationSize,V,Et,zt*ot,(Pt+O/j.locationSize*ne)*ot,pt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<j.locationSize;yt++)_(j.location+yt,St.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<j.locationSize;yt++)y(j.location+yt);o.bindBuffer(o.ARRAY_BUFFER,ft);for(let yt=0;yt<j.locationSize;yt++)D(j.location+yt,O/j.locationSize,V,Et,O*ot,O/j.locationSize*yt*ot,pt)}}else if(P!==void 0){const Et=P[Z];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(j.location,Et);break;case 3:o.vertexAttrib3fv(j.location,Et);break;case 4:o.vertexAttrib4fv(j.location,Et);break;default:o.vertexAttrib1fv(j.location,Et)}}}}L()}function K(){Y();for(const w in s){const H=s[w];for(const ct in H){const rt=H[ct];for(const _t in rt)g(rt[_t].object),delete rt[_t];delete H[ct]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const ct in H){const rt=H[ct];for(const _t in rt)g(rt[_t].object),delete rt[_t];delete H[ct]}delete s[w.id]}function z(w){for(const H in s){const ct=s[H];if(ct[w.id]===void 0)continue;const rt=ct[w.id];for(const _t in rt)g(rt[_t].object),delete rt[_t];delete ct[w.id]}}function Y(){U(),h=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:U,dispose:K,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:L}}function DT(o,e,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,x){x!==0&&(o.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let M=0;for(let b=0;b<x;b++)M+=g[b];i.update(M,s,1)}function m(p,g,x,S){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,x);let b=0;for(let R=0;R<x;R++)b+=g[R]*S[R];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function UT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Mi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Y=z===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ha&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ca&&!Y)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),K=b>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:K,maxSamples:B}}function LT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Wa,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||s!==0||l;return l=S,s=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=g(x,S,0)},this.setState=function(x,S,M){const b=x.clippingPlanes,R=x.clipIntersection,y=x.clipShadows,_=o.get(x);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const L=u?0:s,D=L*4;let C=_.clippingState||null;m.value=C,C=g(b,S,D,M);for(let K=0;K!==D;++K)C[K]=i[K];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,S,M,b){const R=x!==null?x.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const _=M+R*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let D=0,C=M;D!==R;++D,C+=4)h.copy(x[D]).applyMatrix4(L,d),h.normal.toArray(y,C),y[C+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function NT(o){let e=new WeakMap;function i(h,d){return d===Bh?h.mapping=wr:d===Fh&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Bh||d===Fh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Xy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class OT extends tv{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Er=4,Y_=[.125,.215,.35,.446,.526,.582],Ms=20,Sh=new OT,j_=new we;let yh=null,Mh=0,Eh=0,Th=!1;const Ss=(1+Math.sqrt(5))/2,Sr=1/Ss,Z_=[new nt(-Ss,Sr,0),new nt(Ss,Sr,0),new nt(-Sr,0,Ss),new nt(Sr,0,Ss),new nt(0,Ss,-Sr),new nt(0,Ss,Sr),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)];class K_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Mh,Eh),this._renderer.xr.enabled=Th,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Go,format:Mi,colorSpace:Pr,depthBuffer:!1},l=Q_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PT(u)),this._blurMaterial=zT(u,e,i)}return l}_compileMaterial(e){const i=new Ei(this._lodPlanes[0],e);this._renderer.compile(i,Sh)}_sceneToCubeUV(e,i,s,l){const d=new hi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(j_),g.toneMapping=ja,g.autoClear=!1;const M=new K0({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),b=new Ei(new Wo,M);let R=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,R=!0):(M.color.copy(j_),R=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):L===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const D=this._cubeSize;yc(l,L*D,_>2?D:0,D,D),g.setRenderTarget(l),R&&g.render(b,d),g.render(e,d)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=y}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===wr||e.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ei(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;yc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Sh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Z_[(l-u-1)%Z_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Ei(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ms-1),R=u/b,y=isFinite(u)?1+Math.floor(g*R):Ms;y>Ms&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ms}`);const _=[];let L=0;for(let z=0;z<Ms;++z){const Y=z/R,U=Math.exp(-Y*Y/2);_.push(U),z===0?L+=U:z<y&&(L+=2*U)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=b,S.mipInt.value=D-s;const C=this._sizeLods[l],K=3*C*(l>D-Er?l-D+Er:0),B=4*(this._cubeSize-C);yc(i,K,B,3*C,2*C),m.setRenderTarget(i),m.render(x,Sh)}}function PT(o){const e=[],i=[],s=[];let l=o;const u=o-Er+1+Y_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Er?m=Y_[h-o+Er-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,x=1+p,S=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,b=6,R=3,y=2,_=1,L=new Float32Array(R*b*M),D=new Float32Array(y*b*M),C=new Float32Array(_*b*M);for(let B=0;B<M;B++){const z=B%3*2/3-1,Y=B>2?0:-1,U=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];L.set(U,R*b*B),D.set(S,y*b*B);const w=[B,B,B,B,B,B];C.set(w,_*b*B)}const K=new Ii;K.setAttribute("position",new bi(L,R)),K.setAttribute("uv",new bi(D,y)),K.setAttribute("faceIndex",new bi(C,_)),e.push(K),l>Er&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Q_(o,e,i){const s=new bs(o,e,i);return s.texture.mapping=Pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function zT(o,e,i){const s=new Float32Array(Ms),l=new nt(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bd(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function J_(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function $_(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function bd(){return`

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
	`}function IT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Bh||m===Fh,g=m===wr||m===Dr;if(p||g){let x=e.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new K_(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new K_(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function BT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Io("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function FT(o,e,i,s){const l={},u=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const R=S.morphAttributes[b];for(let y=0,_=R.length;y<_;y++)e.remove(R[y])}S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const b in S)e.update(S[b],o.ARRAY_BUFFER);const M=x.morphAttributes;for(const b in M){const R=M[b];for(let y=0,_=R.length;y<_;y++)e.update(R[y],o.ARRAY_BUFFER)}}function p(x){const S=[],M=x.index,b=x.attributes.position;let R=0;if(M!==null){const L=M.array;R=M.version;for(let D=0,C=L.length;D<C;D+=3){const K=L[D+0],B=L[D+1],z=L[D+2];S.push(K,B,B,z,z,K)}}else if(b!==void 0){const L=b.array;R=b.version;for(let D=0,C=L.length/3-1;D<C;D+=3){const K=D+0,B=D+1,z=D+2;S.push(K,B,B,z,z,K)}}else return;const y=new(W0(S)?J0:Q0)(S,1);y.version=R;const _=u.get(x);_&&e.remove(_),u.set(x,y)}function g(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function HT(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,u,S*h,b),i.update(M,s,b))}function g(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function x(S,M,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,R,0,b);let _=0;for(let L=0;L<b;L++)_+=M[L]*R[L];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function GT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function VT(o,e,i){const s=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==x){let w=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let K=d.attributes.position.count*C,B=1;K>e.maxTextureSize&&(B=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const z=new Float32Array(K*B*4*x),Y=new Y0(z,K,B,x);Y.type=ca,Y.needsUpdate=!0;const U=C*4;for(let H=0;H<x;H++){const ct=_[H],rt=L[H],_t=D[H],vt=K*B*4*H;for(let P=0;P<ct.count;P++){const Z=P*U;b===!0&&(l.fromBufferAttribute(ct,P),z[vt+Z+0]=l.x,z[vt+Z+1]=l.y,z[vt+Z+2]=l.z,z[vt+Z+3]=0),R===!0&&(l.fromBufferAttribute(rt,P),z[vt+Z+4]=l.x,z[vt+Z+5]=l.y,z[vt+Z+6]=l.z,z[vt+Z+7]=0),y===!0&&(l.fromBufferAttribute(_t,P),z[vt+Z+8]=l.x,z[vt+Z+9]=l.y,z[vt+Z+10]=l.z,z[vt+Z+11]=_t.itemSize===4?l.w:1)}}S={count:x,texture:Y,size:new he(K,B)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function kT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class av extends _n{constructor(e,i,s,l,u,h,d,m,p,g=Ar){if(g!==Ar&&g!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Ar&&(s=Ts),s===void 0&&g===Nr&&(s=Lr),super(null,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const sv=new _n,t0=new av(1,1),rv=new Y0,ov=new Cy,lv=new ev,e0=[],n0=[],i0=new Float32Array(16),a0=new Float32Array(9),s0=new Float32Array(4);function zr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=e0[l];if(u===void 0&&(u=new Float32Array(l),e0[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Bc(o,e){let i=n0[e];i===void 0&&(i=new Int32Array(e),n0[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function XT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function jT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;s0.set(s),o.uniformMatrix2fv(this.addr,!1,s0),hn(i,s)}}function ZT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;a0.set(s),o.uniformMatrix3fv(this.addr,!1,a0),hn(i,s)}}function KT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;i0.set(s),o.uniformMatrix4fv(this.addr,!1,i0),hn(i,s)}}function QT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function eb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function sb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(t0.compareFunction=X0,u=t0):u=sv,i.setTexture2D(e||u,l)}function rb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||ov,l)}function ob(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||lv,l)}function lb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||rv,l)}function cb(o){switch(o){case 5126:return XT;case 35664:return WT;case 35665:return qT;case 35666:return YT;case 35674:return jT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tb;case 5125:return eb;case 36294:return nb;case 36295:return ib;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(o,e){o.uniform1fv(this.addr,e)}function fb(o,e){const i=zr(e,this.size,2);o.uniform2fv(this.addr,i)}function hb(o,e){const i=zr(e,this.size,3);o.uniform3fv(this.addr,i)}function db(o,e){const i=zr(e,this.size,4);o.uniform4fv(this.addr,i)}function pb(o,e){const i=zr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function mb(o,e){const i=zr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gb(o,e){const i=zr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function _b(o,e){o.uniform1iv(this.addr,e)}function vb(o,e){o.uniform2iv(this.addr,e)}function xb(o,e){o.uniform3iv(this.addr,e)}function Sb(o,e){o.uniform4iv(this.addr,e)}function yb(o,e){o.uniform1uiv(this.addr,e)}function Mb(o,e){o.uniform2uiv(this.addr,e)}function Eb(o,e){o.uniform3uiv(this.addr,e)}function Tb(o,e){o.uniform4uiv(this.addr,e)}function bb(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||sv,u[h])}function Ab(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||ov,u[h])}function Rb(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||lv,u[h])}function Cb(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||rv,u[h])}function wb(o){switch(o){case 5126:return ub;case 35664:return fb;case 35665:return hb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return vb;case 35668:case 35672:return xb;case 35669:case 35673:return Sb;case 5125:return yb;case 36294:return Mb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}class Db{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=cb(i.type)}}class Ub{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=wb(i.type)}}class Lb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function r0(o,e){o.seq.push(e),o.map[e.id]=e}function Nb(o,e,i){const s=o.name,l=s.length;for(bh.lastIndex=0;;){const u=bh.exec(s),h=bh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){r0(i,p===void 0?new Db(d,o,e):new Ub(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new Lb(d),r0(i,x)),i=x}}}class Nc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Nb(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function o0(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Ob=37297;let Pb=0;function zb(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const l0=new le;function Ib(o){Ee._getMatrix(l0,Ee.workingColorSpace,o);const e=`mat3( ${l0.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case zc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function c0(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+zb(o.getShaderSource(e),h)}else return l}function Bb(o,e){const i=Ib(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Fb(o,e){let i;switch(e){case $S:i="Linear";break;case ty:i="Reinhard";break;case ey:i="Cineon";break;case ny:i="ACESFilmic";break;case ay:i="AgX";break;case sy:i="Neutral";break;case iy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new nt;function Hb(){Ee.getLuminanceCoefficients(Mc);const o=Mc.x.toFixed(4),e=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Vb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function kb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Bo(o){return o!==""}function u0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(o){return o.replace(Xb,qb)}const Wb=new Map;function qb(o,e){let i=ue[e];if(i===void 0){const s=Wb.get(e);if(s!==void 0)i=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return pd(i)}const Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(o){return o.replace(Yb,jb)}function jb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function d0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===LS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===la&&(e="SHADOWMAP_TYPE_VSM"),e}function Kb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case wr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function Jb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case L0:e="ENVMAP_BLENDING_MULTIPLY";break;case QS:e="ENVMAP_BLENDING_MIX";break;case JS:e="ENVMAP_BLENDING_ADD";break}return e}function $b(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function t1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Zb(i),p=Kb(i),g=Qb(i),x=Jb(i),S=$b(i),M=Gb(i),b=Vb(u),R=l.createProgram();let y,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),_.length>0&&(_+=`
`)):(y=[d0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),_=[d0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?ue.tonemapping_pars_fragment:"",i.toneMapping!==ja?Fb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Bb("linearToOutputTexel",i.outputColorSpace),Hb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=pd(h),h=u0(h,i),h=f0(h,i),d=pd(d),d=u0(d,i),d=f0(d,i),h=h0(h),d=h0(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=L+y+h,C=L+_+d,K=o0(l,l.VERTEX_SHADER,D),B=o0(l,l.FRAGMENT_SHADER,C);l.attachShader(R,K),l.attachShader(R,B),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(H){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(K).trim(),_t=l.getShaderInfoLog(B).trim();let vt=!0,P=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(vt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,K,B);else{const Z=c0(l,K,"vertex"),j=c0(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+Z+`
`+j)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(rt===""||_t==="")&&(P=!1);P&&(H.diagnostics={runnable:vt,programLog:ct,vertexShader:{log:rt,prefix:y},fragmentShader:{log:_t,prefix:_}})}l.deleteShader(K),l.deleteShader(B),Y=new Nc(l,R),U=kb(l,R)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,Ob)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Pb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=K,this.fragmentShader=B,this}let e1=0;class n1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new i1(e),i.set(e,s)),s}}class i1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function a1(o,e,i,s,l,u,h){const d=new j0,m=new n1,p=new Set,g=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(U){return p.add(U),U===0?"uv":`uv${U}`}function y(U,w,H,ct,rt){const _t=ct.fog,vt=rt.geometry,P=U.isMeshStandardMaterial?ct.environment:null,Z=(U.isMeshStandardMaterial?i:e).get(U.envMap||P),j=Z&&Z.mapping===Pc?Z.image.height:null,St=b[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const Et=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,O=Et!==void 0?Et.length:0;let $=0;vt.morphAttributes.position!==void 0&&($=1),vt.morphAttributes.normal!==void 0&&($=2),vt.morphAttributes.color!==void 0&&($=3);let ft,V,ot,pt;if(St){const Me=Ni[St];ft=Me.vertexShader,V=Me.fragmentShader}else ft=U.vertexShader,V=U.fragmentShader,m.update(U),ot=m.getVertexShaderID(U),pt=m.getFragmentShaderID(U);const yt=o.getRenderTarget(),zt=o.state.buffers.depth.getReversed(),Pt=rt.isInstancedMesh===!0,ne=rt.isBatchedMesh===!0,ce=!!U.map,Qt=!!U.matcap,Ae=!!Z,G=!!U.aoMap,dn=!!U.lightMap,fe=!!U.bumpMap,me=!!U.normalMap,Zt=!!U.displacementMap,De=!!U.emissiveMap,Yt=!!U.metalnessMap,N=!!U.roughnessMap,T=U.anisotropy>0,et=U.clearcoat>0,ht=U.dispersion>0,Mt=U.iridescence>0,mt=U.sheen>0,Xt=U.transmission>0,Ut=T&&!!U.anisotropyMap,It=et&&!!U.clearcoatMap,ge=et&&!!U.clearcoatNormalMap,bt=et&&!!U.clearcoatRoughnessMap,Bt=Mt&&!!U.iridescenceMap,jt=Mt&&!!U.iridescenceThicknessMap,Wt=mt&&!!U.sheenColorMap,Ot=mt&&!!U.sheenRoughnessMap,$t=!!U.specularMap,se=!!U.specularColorMap,Oe=!!U.specularIntensityMap,k=Xt&&!!U.transmissionMap,Rt=Xt&&!!U.thicknessMap,lt=!!U.gradientMap,xt=!!U.alphaMap,Ct=U.alphaTest>0,Lt=!!U.alphaHash,te=!!U.extensions;let We=ja;U.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(We=o.toneMapping);const on={shaderID:St,shaderType:U.type,shaderName:U.name,vertexShader:ft,fragmentShader:V,defines:U.defines,customVertexShaderID:ot,customFragmentShaderID:pt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:ne,batchingColor:ne&&rt._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&rt.instanceColor!==null,instancingMorph:Pt&&rt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Pr,alphaToCoverage:!!U.alphaToCoverage,map:ce,matcap:Qt,envMap:Ae,envMapMode:Ae&&Z.mapping,envMapCubeUVHeight:j,aoMap:G,lightMap:dn,bumpMap:fe,normalMap:me,displacementMap:S&&Zt,emissiveMap:De,normalMapObjectSpace:me&&U.normalMapType===uy,normalMapTangentSpace:me&&U.normalMapType===cy,metalnessMap:Yt,roughnessMap:N,anisotropy:T,anisotropyMap:Ut,clearcoat:et,clearcoatMap:It,clearcoatNormalMap:ge,clearcoatRoughnessMap:bt,dispersion:ht,iridescence:Mt,iridescenceMap:Bt,iridescenceThicknessMap:jt,sheen:mt,sheenColorMap:Wt,sheenRoughnessMap:Ot,specularMap:$t,specularColorMap:se,specularIntensityMap:Oe,transmission:Xt,transmissionMap:k,thicknessMap:Rt,gradientMap:lt,opaque:U.transparent===!1&&U.blending===br&&U.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ct,alphaHash:Lt,combine:U.combine,mapUv:ce&&R(U.map.channel),aoMapUv:G&&R(U.aoMap.channel),lightMapUv:dn&&R(U.lightMap.channel),bumpMapUv:fe&&R(U.bumpMap.channel),normalMapUv:me&&R(U.normalMap.channel),displacementMapUv:Zt&&R(U.displacementMap.channel),emissiveMapUv:De&&R(U.emissiveMap.channel),metalnessMapUv:Yt&&R(U.metalnessMap.channel),roughnessMapUv:N&&R(U.roughnessMap.channel),anisotropyMapUv:Ut&&R(U.anisotropyMap.channel),clearcoatMapUv:It&&R(U.clearcoatMap.channel),clearcoatNormalMapUv:ge&&R(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&R(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&R(U.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&R(U.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&R(U.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&R(U.sheenRoughnessMap.channel),specularMapUv:$t&&R(U.specularMap.channel),specularColorMapUv:se&&R(U.specularColorMap.channel),specularIntensityMapUv:Oe&&R(U.specularIntensityMap.channel),transmissionMapUv:k&&R(U.transmissionMap.channel),thicknessMapUv:Rt&&R(U.thicknessMap.channel),alphaMapUv:xt&&R(U.alphaMap.channel),vertexTangents:!!vt.attributes.tangent&&(me||T),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!vt.attributes.uv&&(ce||xt),fog:!!_t,useFog:U.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:zt,skinning:rt.isSkinnedMesh===!0,morphTargets:vt.morphAttributes.position!==void 0,morphNormals:vt.morphAttributes.normal!==void 0,morphColors:vt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:We,decodeVideoTexture:ce&&U.map.isVideoTexture===!0&&Ee.getTransfer(U.map.colorSpace)===Fe,decodeVideoTextureEmissive:De&&U.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(U.emissiveMap.colorSpace)===Fe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Oi,flipSided:U.side===On,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:te&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&U.extensions.multiDraw===!0||ne)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return on.vertexUv1s=p.has(1),on.vertexUv2s=p.has(2),on.vertexUv3s=p.has(3),p.clear(),on}function _(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)w.push(H),w.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(L(w,U),D(w,U),w.push(o.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function L(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function D(U,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),U.push(d.mask)}function C(U){const w=b[U.type];let H;if(w){const ct=Ni[w];H=Hy.clone(ct.uniforms)}else H=U.uniforms;return H}function K(U,w){let H;for(let ct=0,rt=g.length;ct<rt;ct++){const _t=g[ct];if(_t.cacheKey===w){H=_t,++H.usedTimes;break}}return H===void 0&&(H=new t1(o,w,U,u),g.push(H)),H}function B(U){if(--U.usedTimes===0){const w=g.indexOf(U);g[w]=g[g.length-1],g.pop(),U.destroy()}}function z(U){m.remove(U)}function Y(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:K,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:Y}}function s1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function r1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function p0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function m0(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(x,S,M,b,R,y){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:b,renderOrder:x.renderOrder,z:R,group:y},o[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=R,_.group=y),e++,_}function d(x,S,M,b,R,y){const _=h(x,S,M,b,R,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,S,M,b,R,y){const _=h(x,S,M,b,R,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,S){i.length>1&&i.sort(x||r1),s.length>1&&s.sort(S||p0),l.length>1&&l.sort(S||p0)}function g(){for(let x=e,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function o1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new m0,o.set(s,[h])):l>=u.length?(h=new m0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function l1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new we};break;case"SpotLight":i={position:new nt,direction:new nt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function c1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let u1=0;function f1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function h1(o){const e=new l1,i=c1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new nt);const l=new nt,u=new tn,h=new tn;function d(p){let g=0,x=0,S=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,b=0,R=0,y=0,_=0,L=0,D=0,C=0,K=0,B=0,z=0;p.sort(f1);for(let U=0,w=p.length;U<w;U++){const H=p[U],ct=H.color,rt=H.intensity,_t=H.distance,vt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ct.r*rt,x+=ct.g*rt,S+=ct.b*rt;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],rt);z++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=vt,s.directionalShadowMatrix[M]=H.shadow.matrix,L++}s.directional[M]=P,M++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(ct).multiplyScalar(rt),P.distance=_t,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[R]=P;const Z=H.shadow;if(H.map&&(s.spotLightMap[K]=H.map,K++,Z.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[R]=Z.matrix,H.castShadow){const j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,s.spotShadow[R]=j,s.spotShadowMap[R]=vt,C++}R++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(ct).multiplyScalar(rt),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=P,y++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const Z=H.shadow,j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,s.pointShadow[b]=j,s.pointShadowMap[b]=vt,s.pointShadowMatrix[b]=H.shadow.matrix,D++}s.point[b]=P,b++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(rt),P.groundColor.copy(H.groundColor).multiplyScalar(rt),s.hemi[_]=P,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=S;const Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==b||Y.spotLength!==R||Y.rectAreaLength!==y||Y.hemiLength!==_||Y.numDirectionalShadows!==L||Y.numPointShadows!==D||Y.numSpotShadows!==C||Y.numSpotMaps!==K||Y.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=C+K-B,s.spotLightMap.length=K,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,Y.directionalLength=M,Y.pointLength=b,Y.spotLength=R,Y.rectAreaLength=y,Y.hemiLength=_,Y.numDirectionalShadows=L,Y.numPointShadows=D,Y.numSpotShadows=C,Y.numSpotMaps=K,Y.numLightProbes=z,s.version=u1++)}function m(p,g){let x=0,S=0,M=0,b=0,R=0;const y=g.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const D=p[_];if(D.isDirectionalLight){const C=s.directional[x];C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),x++}else if(D.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const C=s.rectArea[b];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),h.identity(),u.copy(D.matrixWorld),u.premultiply(y),h.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),b++}else if(D.isPointLight){const C=s.point[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),S++}else if(D.isHemisphereLight){const C=s.hemi[R];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function g0(o){const e=new h1(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function d1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new g0(o),e.set(l,[d])):u>=h.length?(d=new g0(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}class p1 extends Xo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m1 extends Xo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
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
}`;function v1(o,e,i){let s=new nv;const l=new he,u=new he,h=new $e,d=new p1({depthPacking:ly}),m=new m1,p={},g=i.maxTextureSize,x={[Za]:On,[On]:Za,[Oi]:Oi},S=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:g1,fragmentShader:_1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ii;b.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ei(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let _=this.type;this.render=function(B,z,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const U=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Ya),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const rt=_!==la&&this.type===la,_t=_===la&&this.type!==la;for(let vt=0,P=B.length;vt<P;vt++){const Z=B[vt],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const St=j.getFrameExtents();if(l.multiply(St),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/St.x),l.x=u.x*St.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/St.y),l.y=u.y*St.y,j.mapSize.y=u.y)),j.map===null||rt===!0||_t===!0){const O=this.type!==la?{minFilter:Ti,magFilter:Ti}:{};j.map!==null&&j.map.dispose(),j.map=new bs(l.x,l.y,O),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Et=j.getViewportCount();for(let O=0;O<Et;O++){const $=j.getViewport(O);h.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),ct.viewport(h),j.updateMatrices(Z,O),s=j.getFrustum(),C(z,Y,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===la&&L(j,Y),j.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(U,w,H)};function L(B,z){const Y=e.update(R);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new bs(l.x,l.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,Y,S,R,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,Y,M,R,null)}function D(B,z,Y,U){let w=null;const H=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)w=H;else if(w=Y.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ct=w.uuid,rt=z.uuid;let _t=p[ct];_t===void 0&&(_t={},p[ct]=_t);let vt=_t[rt];vt===void 0&&(vt=w.clone(),_t[rt]=vt,z.addEventListener("dispose",K)),w=vt}if(w.visible=z.visible,w.wireframe=z.wireframe,U===la?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:x[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ct=o.properties.get(w);ct.light=Y}return w}function C(B,z,Y,U,w){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===la)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const rt=e.update(B),_t=B.material;if(Array.isArray(_t)){const vt=rt.groups;for(let P=0,Z=vt.length;P<Z;P++){const j=vt[P],St=_t[j.materialIndex];if(St&&St.visible){const Et=D(B,St,U,w);B.onBeforeShadow(o,B,z,Y,rt,Et,j),o.renderBufferDirect(Y,null,rt,Et,B,j),B.onAfterShadow(o,B,z,Y,rt,Et,j)}}}else if(_t.visible){const vt=D(B,_t,U,w);B.onBeforeShadow(o,B,z,Y,rt,vt,null),o.renderBufferDirect(Y,null,rt,vt,B,null),B.onAfterShadow(o,B,z,Y,rt,vt,null)}}const ct=B.children;for(let rt=0,_t=ct.length;rt<_t;rt++)C(ct[rt],z,Y,U,w)}function K(B){B.target.removeEventListener("dispose",K);for(const Y in p){const U=p[Y],w=B.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const x1={[Uh]:Lh,[Nh]:zh,[Oh]:Ih,[Cr]:Ph,[Lh]:Uh,[zh]:Nh,[Ih]:Oh,[Ph]:Cr};function S1(o,e){function i(){let k=!1;const Rt=new $e;let lt=null;const xt=new $e(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!k&&(o.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,Lt,te,We,on){on===!0&&(Ct*=We,Lt*=We,te*=We),Rt.set(Ct,Lt,te,We),xt.equals(Rt)===!1&&(o.clearColor(Ct,Lt,te,We),xt.copy(Rt))},reset:function(){k=!1,lt=null,xt.set(-1,0,0,0)}}}function s(){let k=!1,Rt=!1,lt=null,xt=null,Ct=null;return{setReversed:function(Lt){if(Rt!==Lt){const te=e.get("EXT_clip_control");Rt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const We=Ct;Ct=null,this.setClear(We)}Rt=Lt},getReversed:function(){return Rt},setTest:function(Lt){Lt?yt(o.DEPTH_TEST):zt(o.DEPTH_TEST)},setMask:function(Lt){lt!==Lt&&!k&&(o.depthMask(Lt),lt=Lt)},setFunc:function(Lt){if(Rt&&(Lt=x1[Lt]),xt!==Lt){switch(Lt){case Uh:o.depthFunc(o.NEVER);break;case Lh:o.depthFunc(o.ALWAYS);break;case Nh:o.depthFunc(o.LESS);break;case Cr:o.depthFunc(o.LEQUAL);break;case Oh:o.depthFunc(o.EQUAL);break;case Ph:o.depthFunc(o.GEQUAL);break;case zh:o.depthFunc(o.GREATER);break;case Ih:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Ct!==Lt&&(Rt&&(Lt=1-Lt),o.clearDepth(Lt),Ct=Lt)},reset:function(){k=!1,lt=null,xt=null,Ct=null,Rt=!1}}}function l(){let k=!1,Rt=null,lt=null,xt=null,Ct=null,Lt=null,te=null,We=null,on=null;return{setTest:function(Me){k||(Me?yt(o.STENCIL_TEST):zt(o.STENCIL_TEST))},setMask:function(Me){Rt!==Me&&!k&&(o.stencilMask(Me),Rt=Me)},setFunc:function(Me,vn,di){(lt!==Me||xt!==vn||Ct!==di)&&(o.stencilFunc(Me,vn,di),lt=Me,xt=vn,Ct=di)},setOp:function(Me,vn,di){(Lt!==Me||te!==vn||We!==di)&&(o.stencilOp(Me,vn,di),Lt=Me,te=vn,We=di)},setLocked:function(Me){k=Me},setClear:function(Me){on!==Me&&(o.clearStencil(Me),on=Me)},reset:function(){k=!1,Rt=null,lt=null,xt=null,Ct=null,Lt=null,te=null,We=null,on=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},S=new WeakMap,M=[],b=null,R=!1,y=null,_=null,L=null,D=null,C=null,K=null,B=null,z=new we(0,0,0),Y=0,U=!1,w=null,H=null,ct=null,rt=null,_t=null;const vt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),P=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),P=Z>=2);let St=null,Et={};const O=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),ft=new $e().fromArray(O),V=new $e().fromArray($);function ot(k,Rt,lt,xt){const Ct=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(k,Lt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let te=0;te<lt;te++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,xt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Lt}const pt={};pt[o.TEXTURE_2D]=ot(o.TEXTURE_2D,o.TEXTURE_2D,1),pt[o.TEXTURE_CUBE_MAP]=ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[o.TEXTURE_2D_ARRAY]=ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pt[o.TEXTURE_3D]=ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),yt(o.DEPTH_TEST),h.setFunc(Cr),fe(!1),me(y_),yt(o.CULL_FACE),G(Ya);function yt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function zt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function Pt(k,Rt){return x[k]!==Rt?(o.bindFramebuffer(k,Rt),x[k]=Rt,k===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Rt),k===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ne(k,Rt){let lt=M,xt=!1;if(k){lt=S.get(Rt),lt===void 0&&(lt=[],S.set(Rt,lt));const Ct=k.textures;if(lt.length!==Ct.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,te=Ct.length;Lt<te;Lt++)lt[Lt]=o.COLOR_ATTACHMENT0+Lt;lt.length=Ct.length,xt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,xt=!0);xt&&o.drawBuffers(lt)}function ce(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Qt={[ys]:o.FUNC_ADD,[OS]:o.FUNC_SUBTRACT,[PS]:o.FUNC_REVERSE_SUBTRACT};Qt[zS]=o.MIN,Qt[IS]=o.MAX;const Ae={[BS]:o.ZERO,[FS]:o.ONE,[HS]:o.SRC_COLOR,[wh]:o.SRC_ALPHA,[qS]:o.SRC_ALPHA_SATURATE,[XS]:o.DST_COLOR,[VS]:o.DST_ALPHA,[GS]:o.ONE_MINUS_SRC_COLOR,[Dh]:o.ONE_MINUS_SRC_ALPHA,[WS]:o.ONE_MINUS_DST_COLOR,[kS]:o.ONE_MINUS_DST_ALPHA,[YS]:o.CONSTANT_COLOR,[jS]:o.ONE_MINUS_CONSTANT_COLOR,[ZS]:o.CONSTANT_ALPHA,[KS]:o.ONE_MINUS_CONSTANT_ALPHA};function G(k,Rt,lt,xt,Ct,Lt,te,We,on,Me){if(k===Ya){R===!0&&(zt(o.BLEND),R=!1);return}if(R===!1&&(yt(o.BLEND),R=!0),k!==NS){if(k!==y||Me!==U){if((_!==ys||C!==ys)&&(o.blendEquation(o.FUNC_ADD),_=ys,C=ys),Me)switch(k){case br:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ch:o.blendFunc(o.ONE,o.ONE);break;case M_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case E_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case br:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ch:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case M_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case E_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,D=null,K=null,B=null,z.set(0,0,0),Y=0,y=k,U=Me}return}Ct=Ct||Rt,Lt=Lt||lt,te=te||xt,(Rt!==_||Ct!==C)&&(o.blendEquationSeparate(Qt[Rt],Qt[Ct]),_=Rt,C=Ct),(lt!==L||xt!==D||Lt!==K||te!==B)&&(o.blendFuncSeparate(Ae[lt],Ae[xt],Ae[Lt],Ae[te]),L=lt,D=xt,K=Lt,B=te),(We.equals(z)===!1||on!==Y)&&(o.blendColor(We.r,We.g,We.b,on),z.copy(We),Y=on),y=k,U=!1}function dn(k,Rt){k.side===Oi?zt(o.CULL_FACE):yt(o.CULL_FACE);let lt=k.side===On;Rt&&(lt=!lt),fe(lt),k.blending===br&&k.transparent===!1?G(Ya):G(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const xt=k.stencilWrite;d.setTest(xt),xt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):zt(o.SAMPLE_ALPHA_TO_COVERAGE)}function fe(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function me(k){k!==DS?(yt(o.CULL_FACE),k!==H&&(k===y_?o.cullFace(o.BACK):k===US?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):zt(o.CULL_FACE),H=k}function Zt(k){k!==ct&&(P&&o.lineWidth(k),ct=k)}function De(k,Rt,lt){k?(yt(o.POLYGON_OFFSET_FILL),(rt!==Rt||_t!==lt)&&(o.polygonOffset(Rt,lt),rt=Rt,_t=lt)):zt(o.POLYGON_OFFSET_FILL)}function Yt(k){k?yt(o.SCISSOR_TEST):zt(o.SCISSOR_TEST)}function N(k){k===void 0&&(k=o.TEXTURE0+vt-1),St!==k&&(o.activeTexture(k),St=k)}function T(k,Rt,lt){lt===void 0&&(St===null?lt=o.TEXTURE0+vt-1:lt=St);let xt=Et[lt];xt===void 0&&(xt={type:void 0,texture:void 0},Et[lt]=xt),(xt.type!==k||xt.texture!==Rt)&&(St!==lt&&(o.activeTexture(lt),St=lt),o.bindTexture(k,Rt||pt[k]),xt.type=k,xt.texture=Rt)}function et(){const k=Et[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ht(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(k){ft.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),ft.copy(k))}function Ot(k){V.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),V.copy(k))}function $t(k,Rt){let lt=p.get(Rt);lt===void 0&&(lt=new WeakMap,p.set(Rt,lt));let xt=lt.get(k);xt===void 0&&(xt=o.getUniformBlockIndex(Rt,k.name),lt.set(k,xt))}function se(k,Rt){const xt=p.get(Rt).get(k);m.get(Rt)!==xt&&(o.uniformBlockBinding(Rt,xt,k.__bindingPointIndex),m.set(Rt,xt))}function Oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,Et={},x={},S=new WeakMap,M=[],b=null,R=!1,y=null,_=null,L=null,D=null,C=null,K=null,B=null,z=new we(0,0,0),Y=0,U=!1,w=null,H=null,ct=null,rt=null,_t=null,ft.set(0,0,o.canvas.width,o.canvas.height),V.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:yt,disable:zt,bindFramebuffer:Pt,drawBuffers:ne,useProgram:ce,setBlending:G,setMaterial:dn,setFlipSided:fe,setCullFace:me,setLineWidth:Zt,setPolygonOffset:De,setScissorTest:Yt,activeTexture:N,bindTexture:T,unbindTexture:et,compressedTexImage2D:ht,compressedTexImage3D:Mt,texImage2D:Bt,texImage3D:jt,updateUBOMapping:$t,uniformBlockBinding:se,texStorage2D:ge,texStorage3D:bt,texSubImage2D:mt,texSubImage3D:Xt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:It,scissor:Wt,viewport:Ot,reset:Oe}}function _0(o,e,i,s){const l=y1(s);switch(i){case I0:return o*e;case F0:return o*e;case H0:return o*e*2;case G0:return o*e/l.components*l.byteLength;case yd:return o*e/l.components*l.byteLength;case V0:return o*e*2/l.components*l.byteLength;case Md:return o*e*2/l.components*l.byteLength;case B0:return o*e*3/l.components*l.byteLength;case Mi:return o*e*4/l.components*l.byteLength;case Ed:return o*e*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Xh:return Math.max(o,16)*Math.max(e,8)/4;case Gh:case kh:return Math.max(o,8)*Math.max(e,8)/2;case Wh:case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case $h:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case td:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ed:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case sd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case od:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Uc:case ld:case cd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case k0:case ud:return Math.ceil(o/4)*Math.ceil(e/4)*8;case fd:case hd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function y1(o){switch(o){case ha:case O0:return{byteLength:1,components:1};case Fo:case P0:case Go:return{byteLength:2,components:1};case xd:case Sd:return{byteLength:2,components:4};case Ts:case vd:case ca:return{byteLength:4,components:1};case z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function M1(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,g=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return M?new OffscreenCanvas(N,T):Ho("canvas")}function R(N,T,et){let ht=1;const Mt=Yt(N);if((Mt.width>et||Mt.height>et)&&(ht=et/Math.max(Mt.width,Mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const mt=Math.floor(ht*Mt.width),Xt=Math.floor(ht*Mt.height);x===void 0&&(x=b(mt,Xt));const Ut=T?b(mt,Xt):x;return Ut.width=mt,Ut.height=Xt,Ut.getContext("2d").drawImage(N,0,0,mt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+mt+"x"+Xt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(N,T,et,ht,Mt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let mt=T;if(T===o.RED&&(et===o.FLOAT&&(mt=o.R32F),et===o.HALF_FLOAT&&(mt=o.R16F),et===o.UNSIGNED_BYTE&&(mt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.R8UI),et===o.UNSIGNED_SHORT&&(mt=o.R16UI),et===o.UNSIGNED_INT&&(mt=o.R32UI),et===o.BYTE&&(mt=o.R8I),et===o.SHORT&&(mt=o.R16I),et===o.INT&&(mt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(mt=o.RG32F),et===o.HALF_FLOAT&&(mt=o.RG16F),et===o.UNSIGNED_BYTE&&(mt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RG8UI),et===o.UNSIGNED_SHORT&&(mt=o.RG16UI),et===o.UNSIGNED_INT&&(mt=o.RG32UI),et===o.BYTE&&(mt=o.RG8I),et===o.SHORT&&(mt=o.RG16I),et===o.INT&&(mt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),et===o.UNSIGNED_INT&&(mt=o.RGB32UI),et===o.BYTE&&(mt=o.RGB8I),et===o.SHORT&&(mt=o.RGB16I),et===o.INT&&(mt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),et===o.UNSIGNED_INT&&(mt=o.RGBA32UI),et===o.BYTE&&(mt=o.RGBA8I),et===o.SHORT&&(mt=o.RGBA16I),et===o.INT&&(mt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),T===o.RGBA){const Xt=Mt?zc:Ee.getTransfer(ht);et===o.FLOAT&&(mt=o.RGBA32F),et===o.HALF_FLOAT&&(mt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(mt=Xt===Fe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function C(N,T){let et;return N?T===null||T===Ts||T===Lr?et=o.DEPTH24_STENCIL8:T===ca?et=o.DEPTH32F_STENCIL8:T===Fo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ts||T===Lr?et=o.DEPTH_COMPONENT24:T===ca?et=o.DEPTH_COMPONENT32F:T===Fo&&(et=o.DEPTH_COMPONENT16),et}function K(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ti&&N.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function B(N){const T=N.target;T.removeEventListener("dispose",B),Y(T),T.isVideoTexture&&g.delete(T)}function z(N){const T=N.target;T.removeEventListener("dispose",z),w(T)}function Y(N){const T=s.get(N);if(T.__webglInit===void 0)return;const et=N.source,ht=S.get(et);if(ht){const Mt=ht[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(N),Object.keys(ht).length===0&&S.delete(et)}s.remove(N)}function U(N){const T=s.get(N);o.deleteTexture(T.__webglTexture);const et=N.source,ht=S.get(et);delete ht[T.__cacheKey],h.memory.textures--}function w(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let Mt=0;Mt<T.__webglFramebuffer[ht].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[ht][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)o.deleteFramebuffer(T.__webglFramebuffer[ht]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=N.textures;for(let ht=0,Mt=et.length;ht<Mt;ht++){const mt=s.get(et[ht]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),s.remove(et[ht])}s.remove(N)}let H=0;function ct(){H=0}function rt(){const N=H;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function _t(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function vt(N,T){const et=s.get(N);if(N.isVideoTexture&&Zt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(et,N,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function P(N,T){const et=s.get(N);if(N.version>0&&et.__version!==N.version){V(et,N,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function Z(N,T){const et=s.get(N);if(N.version>0&&et.__version!==N.version){V(et,N,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function j(N,T){const et=s.get(N);if(N.version>0&&et.__version!==N.version){ot(et,N,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const St={[Ur]:o.REPEAT,[Pi]:o.CLAMP_TO_EDGE,[Hh]:o.MIRRORED_REPEAT},Et={[Ti]:o.NEAREST,[ry]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[Dn]:o.LINEAR,[Jf]:o.LINEAR_MIPMAP_NEAREST,[Es]:o.LINEAR_MIPMAP_LINEAR},O={[fy]:o.NEVER,[_y]:o.ALWAYS,[hy]:o.LESS,[X0]:o.LEQUAL,[dy]:o.EQUAL,[gy]:o.GEQUAL,[py]:o.GREATER,[my]:o.NOTEQUAL};function $(N,T){if(T.type===ca&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Dn||T.magFilter===Jf||T.magFilter===nc||T.magFilter===Es||T.minFilter===Dn||T.minFilter===Jf||T.minFilter===nc||T.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,St[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,St[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,St[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Et[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ti||T.minFilter!==nc&&T.minFilter!==Es||T.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ft(N,T){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",B));const ht=T.source;let Mt=S.get(ht);Mt===void 0&&(Mt={},S.set(ht,Mt));const mt=_t(T);if(mt!==N.__cacheKey){Mt[mt]===void 0&&(Mt[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Mt[mt].usedTimes++;const Xt=Mt[N.__cacheKey];Xt!==void 0&&(Mt[N.__cacheKey].usedTimes--,Xt.usedTimes===0&&U(T)),N.__cacheKey=mt,N.__webglTexture=Mt[mt].texture}return et}function V(N,T,et){let ht=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=o.TEXTURE_3D);const Mt=ft(N,T),mt=T.source;i.bindTexture(ht,N.__webglTexture,o.TEXTURE0+et);const Xt=s.get(mt);if(mt.version!==Xt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+et);const Ut=Ee.getPrimaries(Ee.workingColorSpace),It=T.colorSpace===qa?null:Ee.getPrimaries(T.colorSpace),ge=T.colorSpace===qa||Ut===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let bt=R(T.image,!1,l.maxTextureSize);bt=De(T,bt);const Bt=u.convert(T.format,T.colorSpace),jt=u.convert(T.type);let Wt=D(T.internalFormat,Bt,jt,T.colorSpace,T.isVideoTexture);$(ht,T);let Ot;const $t=T.mipmaps,se=T.isVideoTexture!==!0,Oe=Xt.__version===void 0||Mt===!0,k=mt.dataReady,Rt=K(T,bt);if(T.isDepthTexture)Wt=C(T.format===Nr,T.type),Oe&&(se?i.texStorage2D(o.TEXTURE_2D,1,Wt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Wt,bt.width,bt.height,0,Bt,jt,null));else if(T.isDataTexture)if($t.length>0){se&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,Wt,$t[0].width,$t[0].height);for(let lt=0,xt=$t.length;lt<xt;lt++)Ot=$t[lt],se?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Bt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,Wt,Ot.width,Ot.height,0,Bt,jt,Ot.data);T.generateMipmaps=!1}else se?(Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,Wt,bt.width,bt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Bt,jt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Wt,bt.width,bt.height,0,Bt,jt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Wt,$t[0].width,$t[0].height,bt.depth);for(let lt=0,xt=$t.length;lt<xt;lt++)if(Ot=$t[lt],T.format!==Mi)if(Bt!==null)if(se){if(k)if(T.layerUpdates.size>0){const Ct=_0(Ot.width,Ot.height,T.format,T.type);for(const Lt of T.layerUpdates){const te=Ot.data.subarray(Lt*Ct/Ot.data.BYTES_PER_ELEMENT,(Lt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Lt,Ot.width,Ot.height,1,Bt,te)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,bt.depth,Bt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Wt,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,bt.depth,Bt,jt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,Wt,Ot.width,Ot.height,bt.depth,0,Bt,jt,Ot.data)}else{se&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,Wt,$t[0].width,$t[0].height);for(let lt=0,xt=$t.length;lt<xt;lt++)Ot=$t[lt],T.format!==Mi?Bt!==null?se?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Bt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,Wt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Bt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,Wt,Ot.width,Ot.height,0,Bt,jt,Ot.data)}else if(T.isDataArrayTexture)if(se){if(Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Wt,bt.width,bt.height,bt.depth),k)if(T.layerUpdates.size>0){const lt=_0(bt.width,bt.height,T.format,T.type);for(const xt of T.layerUpdates){const Ct=bt.data.subarray(xt*lt/bt.data.BYTES_PER_ELEMENT,(xt+1)*lt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Bt,jt,Ct)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Bt,jt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Wt,bt.width,bt.height,bt.depth,0,Bt,jt,bt.data);else if(T.isData3DTexture)se?(Oe&&i.texStorage3D(o.TEXTURE_3D,Rt,Wt,bt.width,bt.height,bt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Bt,jt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Wt,bt.width,bt.height,bt.depth,0,Bt,jt,bt.data);else if(T.isFramebufferTexture){if(Oe)if(se)i.texStorage2D(o.TEXTURE_2D,Rt,Wt,bt.width,bt.height);else{let lt=bt.width,xt=bt.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Wt,lt,xt,0,Bt,jt,null),lt>>=1,xt>>=1}}else if($t.length>0){if(se&&Oe){const lt=Yt($t[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Wt,lt.width,lt.height)}for(let lt=0,xt=$t.length;lt<xt;lt++)Ot=$t[lt],se?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Bt,jt,Ot):i.texImage2D(o.TEXTURE_2D,lt,Wt,Bt,jt,Ot);T.generateMipmaps=!1}else if(se){if(Oe){const lt=Yt(bt);i.texStorage2D(o.TEXTURE_2D,Rt,Wt,lt.width,lt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,jt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Wt,Bt,jt,bt);y(T)&&_(ht),Xt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ot(N,T,et){if(T.image.length!==6)return;const ht=ft(N,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const mt=s.get(Mt);if(Mt.version!==mt.__version||ht===!0){i.activeTexture(o.TEXTURE0+et);const Xt=Ee.getPrimaries(Ee.workingColorSpace),Ut=T.colorSpace===qa?null:Ee.getPrimaries(T.colorSpace),It=T.colorSpace===qa||Xt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let xt=0;xt<6;xt++)!ge&&!bt?Bt[xt]=R(T.image[xt],!0,l.maxCubemapSize):Bt[xt]=bt?T.image[xt].image:T.image[xt],Bt[xt]=De(T,Bt[xt]);const jt=Bt[0],Wt=u.convert(T.format,T.colorSpace),Ot=u.convert(T.type),$t=D(T.internalFormat,Wt,Ot,T.colorSpace),se=T.isVideoTexture!==!0,Oe=mt.__version===void 0||ht===!0,k=Mt.dataReady;let Rt=K(T,jt);$(o.TEXTURE_CUBE_MAP,T);let lt;if(ge){se&&Oe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,$t,jt.width,jt.height);for(let xt=0;xt<6;xt++){lt=Bt[xt].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Lt=lt[Ct];T.format!==Mi?Wt!==null?se?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,Lt.width,Lt.height,Wt,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,$t,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,Lt.width,Lt.height,Wt,Ot,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,$t,Lt.width,Lt.height,0,Wt,Ot,Lt.data)}}}else{if(lt=T.mipmaps,se&&Oe){lt.length>0&&Rt++;const xt=Yt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,$t,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){se?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt[xt].width,Bt[xt].height,Wt,Ot,Bt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,$t,Bt[xt].width,Bt[xt].height,0,Wt,Ot,Bt[xt].data);for(let Ct=0;Ct<lt.length;Ct++){const te=lt[Ct].image[xt].image;se?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,te.width,te.height,Wt,Ot,te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,$t,te.width,te.height,0,Wt,Ot,te.data)}}else{se?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Wt,Ot,Bt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,$t,Wt,Ot,Bt[xt]);for(let Ct=0;Ct<lt.length;Ct++){const Lt=lt[Ct];se?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,Wt,Ot,Lt.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,$t,Wt,Ot,Lt.image[xt])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),mt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function pt(N,T,et,ht,Mt,mt){const Xt=u.convert(et.format,et.colorSpace),Ut=u.convert(et.type),It=D(et.internalFormat,Xt,Ut,et.colorSpace),ge=s.get(T),bt=s.get(et);if(bt.__renderTarget=T,!ge.__hasExternalTextures){const Bt=Math.max(1,T.width>>mt),jt=Math.max(1,T.height>>mt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,mt,It,Bt,jt,T.depth,0,Xt,Ut,null):i.texImage2D(Mt,mt,It,Bt,jt,0,Xt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),me(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,Mt,bt.__webglTexture,0,fe(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,Mt,bt.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(N,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const ht=T.depthTexture,Mt=ht&&ht.isDepthTexture?ht.type:null,mt=C(T.stencilBuffer,Mt),Xt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=fe(T);me(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,mt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,mt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,mt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,N)}else{const ht=T.textures;for(let Mt=0;Mt<ht.length;Mt++){const mt=ht[Mt],Xt=u.convert(mt.format,mt.colorSpace),Ut=u.convert(mt.type),It=D(mt.internalFormat,Xt,Ut,mt.colorSpace),ge=fe(T);et&&me(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge,It,T.width,T.height):me(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge,It,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,It,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function zt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),vt(T.depthTexture,0);const Mt=ht.__webglTexture,mt=fe(T);if(T.depthTexture.format===Ar)me(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Nr)me(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Pt(N){const T=s.get(N),et=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",Mt)};ht.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=ht}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");zt(T.__webglFramebuffer,N)}else if(et){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=o.createRenderbuffer(),yt(T.__webglDepthbuffer[ht],N,!1);else{const Mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,mt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),yt(T.__webglDepthbuffer,N,!1);else{const ht=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ne(N,T,et){const ht=s.get(N);T!==void 0&&pt(ht.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Pt(N)}function ce(N){const T=N.texture,et=s.get(N),ht=s.get(T);N.addEventListener("dispose",z);const Mt=N.textures,mt=N.isWebGLCubeRenderTarget===!0,Xt=Mt.length>1;if(Xt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=T.version,h.memory.textures++),mt){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let It=0;It<T.mipmaps.length;It++)et.__webglFramebuffer[Ut][It]=o.createFramebuffer()}else et.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ut=0,It=Mt.length;Ut<It;Ut++){const ge=s.get(Mt[Ut]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&me(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Mt.length;Ut++){const It=Mt[Ut];et.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const ge=u.convert(It.format,It.colorSpace),bt=u.convert(It.type),Bt=D(It.internalFormat,ge,bt,It.colorSpace,N.isXRRenderTarget===!0),jt=fe(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Bt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),$(o.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let It=0;It<T.mipmaps.length;It++)pt(et.__webglFramebuffer[Ut][It],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,It);else pt(et.__webglFramebuffer[Ut],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ut=0,It=Mt.length;Ut<It;Ut++){const ge=Mt[Ut],bt=s.get(ge);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),$(o.TEXTURE_2D,ge),pt(et.__webglFramebuffer,N,ge,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),y(ge)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ht.__webglTexture),$(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let It=0;It<T.mipmaps.length;It++)pt(et.__webglFramebuffer[It],N,T,o.COLOR_ATTACHMENT0,Ut,It);else pt(et.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Ut,0);y(T)&&_(Ut),i.unbindTexture()}N.depthBuffer&&Pt(N)}function Qt(N){const T=N.textures;for(let et=0,ht=T.length;et<ht;et++){const Mt=T[et];if(y(Mt)){const mt=L(N),Xt=s.get(Mt).__webglTexture;i.bindTexture(mt,Xt),_(mt),i.unbindTexture()}}}const Ae=[],G=[];function dn(N){if(N.samples>0){if(me(N)===!1){const T=N.textures,et=N.width,ht=N.height;let Mt=o.COLOR_BUFFER_BIT;const mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(N),Ut=T.length>1;if(Ut)for(let It=0;It<T.length;It++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let It=0;It<T.length;It++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[It]);const ge=s.get(T[It]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ge,0)}o.blitFramebuffer(0,0,et,ht,0,0,et,ht,Mt,o.NEAREST),m===!0&&(Ae.length=0,G.length=0,Ae.push(o.COLOR_ATTACHMENT0+It),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ae.push(mt),G.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let It=0;It<T.length;It++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[It]);const ge=s.get(T[It]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,ge,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function fe(N){return Math.min(l.maxSamples,N.samples)}function me(N){const T=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Zt(N){const T=h.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function De(N,T){const et=N.colorSpace,ht=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==Pr&&et!==qa&&(Ee.getTransfer(et)===Fe?(ht!==Mi||Mt!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Yt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=ct,this.setTexture2D=vt,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=ne,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=me}function E1(o,e){function i(s,l=qa){let u;const h=Ee.getTransfer(l);if(s===ha)return o.UNSIGNED_BYTE;if(s===xd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Sd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===z0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===O0)return o.BYTE;if(s===P0)return o.SHORT;if(s===Fo)return o.UNSIGNED_SHORT;if(s===vd)return o.INT;if(s===Ts)return o.UNSIGNED_INT;if(s===ca)return o.FLOAT;if(s===Go)return o.HALF_FLOAT;if(s===I0)return o.ALPHA;if(s===B0)return o.RGB;if(s===Mi)return o.RGBA;if(s===F0)return o.LUMINANCE;if(s===H0)return o.LUMINANCE_ALPHA;if(s===Ar)return o.DEPTH_COMPONENT;if(s===Nr)return o.DEPTH_STENCIL;if(s===G0)return o.RED;if(s===yd)return o.RED_INTEGER;if(s===V0)return o.RG;if(s===Md)return o.RG_INTEGER;if(s===Ed)return o.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gh||s===Vh||s===kh||s===Xh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Gh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wh||s===qh||s===Yh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Wh||s===qh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Yh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$h)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===ld||s===cd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Uc)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ld)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===k0||s===ud||s===fd||s===hd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ud)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class T1 extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ec extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b1={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,s),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=g.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(b1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ec;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
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

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new _n,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ai({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new qo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w1 extends Rs{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,S=null,M=null,b=null;const R=new C1,y=i.getContextAttributes();let _=null,L=null;const D=[],C=[],K=new he;let B=null;const z=new hi;z.viewport=new $e;const Y=new hi;Y.viewport=new $e;const U=[z,Y],w=new T1;let H=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ot=D[V];return ot===void 0&&(ot=new Ah,D[V]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(V){let ot=D[V];return ot===void 0&&(ot=new Ah,D[V]=ot),ot.getGripSpace()},this.getHand=function(V){let ot=D[V];return ot===void 0&&(ot=new Ah,D[V]=ot),ot.getHandSpace()};function rt(V){const ot=C.indexOf(V.inputSource);if(ot===-1)return;const pt=D[ot];pt!==void 0&&(pt.update(V.inputSource,V.frame,p||h),pt.dispatchEvent({type:V.type,data:V.inputSource}))}function _t(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",vt);for(let V=0;V<D.length;V++){const ot=C[V];ot!==null&&(C[V]=null,D[V].disconnect(ot))}H=null,ct=null,R.reset(),e.setRenderTarget(_),M=null,S=null,x=null,l=null,L=null,ft.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(K.width,K.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){u=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){d=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",vt),y.xrCompatible!==!0&&await i.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(K),l.renderState.layers===void 0){const ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ot),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new bs(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:ha,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ot=null,pt=null,yt=null;y.depth&&(yt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ot=y.stencil?Nr:Ar,pt=y.stencil?Lr:Ts);const zt={colorFormat:i.RGBA8,depthFormat:yt,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(zt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new bs(S.textureWidth,S.textureHeight,{format:Mi,type:ha,depthTexture:new av(S.textureWidth,S.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),ft.setContext(l),ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function vt(V){for(let ot=0;ot<V.removed.length;ot++){const pt=V.removed[ot],yt=C.indexOf(pt);yt>=0&&(C[yt]=null,D[yt].disconnect(pt))}for(let ot=0;ot<V.added.length;ot++){const pt=V.added[ot];let yt=C.indexOf(pt);if(yt===-1){for(let Pt=0;Pt<D.length;Pt++)if(Pt>=C.length){C.push(pt),yt=Pt;break}else if(C[Pt]===null){C[Pt]=pt,yt=Pt;break}if(yt===-1)break}const zt=D[yt];zt&&zt.connect(pt)}}const P=new nt,Z=new nt;function j(V,ot,pt){P.setFromMatrixPosition(ot.matrixWorld),Z.setFromMatrixPosition(pt.matrixWorld);const yt=P.distanceTo(Z),zt=ot.projectionMatrix.elements,Pt=pt.projectionMatrix.elements,ne=zt[14]/(zt[10]-1),ce=zt[14]/(zt[10]+1),Qt=(zt[9]+1)/zt[5],Ae=(zt[9]-1)/zt[5],G=(zt[8]-1)/zt[0],dn=(Pt[8]+1)/Pt[0],fe=ne*G,me=ne*dn,Zt=yt/(-G+dn),De=Zt*-G;if(ot.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(De),V.translateZ(Zt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),zt[10]===-1)V.projectionMatrix.copy(ot.projectionMatrix),V.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Yt=ne+Zt,N=ce+Zt,T=fe-De,et=me+(yt-De),ht=Qt*ce/N*Yt,Mt=Ae*ce/N*Yt;V.projectionMatrix.makePerspective(T,et,ht,Mt,Yt,N),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function St(V,ot){ot===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ot.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;let ot=V.near,pt=V.far;R.texture!==null&&(R.depthNear>0&&(ot=R.depthNear),R.depthFar>0&&(pt=R.depthFar)),w.near=Y.near=z.near=ot,w.far=Y.far=z.far=pt,(H!==w.near||ct!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,ct=w.far),z.layers.mask=V.layers.mask|2,Y.layers.mask=V.layers.mask|4,w.layers.mask=z.layers.mask|Y.layers.mask;const yt=V.parent,zt=w.cameras;St(w,yt);for(let Pt=0;Pt<zt.length;Pt++)St(zt[Pt],yt);zt.length===2?j(w,z,Y):w.projectionMatrix.copy(z.projectionMatrix),Et(V,w,yt)};function Et(V,ot,pt){pt===null?V.matrix.copy(ot.matrixWorld):(V.matrix.copy(pt.matrixWorld),V.matrix.invert(),V.matrix.multiply(ot.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ot.projectionMatrix),V.projectionMatrixInverse.copy(ot.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=dd*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(V){m=V,S!==null&&(S.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let O=null;function $(V,ot){if(g=ot.getViewerPose(p||h),b=ot,g!==null){const pt=g.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let yt=!1;pt.length!==w.cameras.length&&(w.cameras.length=0,yt=!0);for(let Pt=0;Pt<pt.length;Pt++){const ne=pt[Pt];let ce=null;if(M!==null)ce=M.getViewport(ne);else{const Ae=x.getViewSubImage(S,ne);ce=Ae.viewport,Pt===0&&(e.setRenderTargetTextures(L,Ae.colorTexture,S.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(L))}let Qt=U[Pt];Qt===void 0&&(Qt=new hi,Qt.layers.enable(Pt),Qt.viewport=new $e,U[Pt]=Qt),Qt.matrix.fromArray(ne.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ne.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ce.x,ce.y,ce.width,ce.height),Pt===0&&(w.matrix.copy(Qt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),yt===!0&&w.cameras.push(Qt)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Pt=x.getDepthInformation(pt[0]);Pt&&Pt.isValid&&Pt.texture&&R.init(e,Pt,l.renderState)}}for(let pt=0;pt<D.length;pt++){const yt=C[pt],zt=D[pt];yt!==null&&zt!==void 0&&zt.update(yt,ot,p||h)}O&&O(V,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),b=null}const ft=new iv;ft.setAnimationLoop($),this.setAnimationLoop=function(V){O=V},this.dispose=function(){}}}const xs=new da,D1=new tn;function U1(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,$0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,L,D,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,C)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,L,D):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===On&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===On&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=e.get(_),D=L.envMap,C=L.envMapRotation;D&&(y.envMap.value=D,xs.copy(C),xs.x*=-1,xs.y*=-1,xs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),y.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(xs)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,L,D){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=D*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const L=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function L1(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const C=D.program;s.uniformBlockBinding(L,C)}function p(L,D){let C=l[L.id];C===void 0&&(b(L),C=g(L),l[L.id]=C,L.addEventListener("dispose",y));const K=D.program;s.updateUBOMapping(L,K);const B=e.render.frame;u[L.id]!==B&&(S(L),u[L.id]=B)}function g(L){const D=x();L.__bindingPointIndex=D;const C=o.createBuffer(),K=L.__size,B=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,K,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,C),C}function x(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const D=l[L.id],C=L.uniforms,K=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let B=0,z=C.length;B<z;B++){const Y=Array.isArray(C[B])?C[B]:[C[B]];for(let U=0,w=Y.length;U<w;U++){const H=Y[U];if(M(H,B,U,K)===!0){const ct=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let _t=0;for(let vt=0;vt<rt.length;vt++){const P=rt[vt],Z=R(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ct+_t,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,_t),_t+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,D,C,K){const B=L.value,z=D+"_"+C;if(K[z]===void 0)return typeof B=="number"||typeof B=="boolean"?K[z]=B:K[z]=B.clone(),!0;{const Y=K[z];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return K[z]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function b(L){const D=L.uniforms;let C=0;const K=16;for(let z=0,Y=D.length;z<Y;z++){const U=Array.isArray(D[z])?D[z]:[D[z]];for(let w=0,H=U.length;w<H;w++){const ct=U[w],rt=Array.isArray(ct.value)?ct.value:[ct.value];for(let _t=0,vt=rt.length;_t<vt;_t++){const P=rt[_t],Z=R(P),j=C%K,St=j%Z.boundary,Et=j+St;C+=St,Et!==0&&K-Et<Z.storage&&(C+=K-Et),ct.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=C,C+=Z.storage}}}const B=C%K;return B>0&&(C+=K-B),L.__size=C,L.__cache={},this}function R(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function y(L){const D=L.target;D.removeEventListener("dispose",y);const C=h.indexOf(D.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class N1{constructor(e={}){const{canvas:i=Sy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const L=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=ja,this.toneMappingExposure=1;const C=this;let K=!1,B=0,z=0,Y=null,U=-1,w=null;const H=new $e,ct=new $e;let rt=null;const _t=new we(0);let vt=0,P=i.width,Z=i.height,j=1,St=null,Et=null;const O=new $e(0,0,P,Z),$=new $e(0,0,P,Z);let ft=!1;const V=new nv;let ot=!1,pt=!1;const yt=new tn,zt=new tn,Pt=new nt,ne=new $e,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Ae(){return Y===null?j:1}let G=s;function dn(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_d}`),i.addEventListener("webglcontextlost",xt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),G===null){const X="webgl2";if(G=dn(X,A),G===null)throw dn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let fe,me,Zt,De,Yt,N,T,et,ht,Mt,mt,Xt,Ut,It,ge,bt,Bt,jt,Wt,Ot,$t,se,Oe,k;function Rt(){fe=new BT(G),fe.init(),se=new E1(G,fe),me=new UT(G,fe,e,se),Zt=new S1(G,fe),me.reverseDepthBuffer&&S&&Zt.buffers.depth.setReversed(!0),De=new GT(G),Yt=new s1,N=new M1(G,fe,Zt,Yt,me,se,De),T=new NT(C),et=new IT(C),ht=new Yy(G),Oe=new wT(G,ht),Mt=new FT(G,ht,De,Oe),mt=new kT(G,Mt,ht,De),Wt=new VT(G,me,N),bt=new LT(Yt),Xt=new a1(C,T,et,fe,me,Oe,bt),Ut=new U1(C,Yt),It=new o1,ge=new d1(fe),jt=new CT(C,T,et,Zt,mt,M,m),Bt=new v1(C,mt,me),k=new L1(G,De,me,Zt),Ot=new DT(G,fe,De),$t=new HT(G,fe,De),De.programs=Xt.programs,C.capabilities=me,C.extensions=fe,C.properties=Yt,C.renderLists=It,C.shadowMap=Bt,C.state=Zt,C.info=De}Rt();const lt=new w1(C,G);this.xr=lt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(P,Z,!1))},this.getSize=function(A){return A.set(P,Z)},this.setSize=function(A,X,at=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Z=X,i.width=Math.floor(A*j),i.height=Math.floor(X*j),at===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(P*j,Z*j).floor()},this.setDrawingBufferSize=function(A,X,at){P=A,Z=X,j=at,i.width=Math.floor(A*at),i.height=Math.floor(X*at),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,X,at,it){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,X,at,it),Zt.viewport(H.copy(O).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,X,at,it){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,X,at,it),Zt.scissor(ct.copy($).multiplyScalar(j).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){Zt.setScissorTest(ft=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(A=!0,X=!0,at=!0){let it=0;if(A){let W=!1;if(Y!==null){const Tt=Y.texture.format;W=Tt===Ed||Tt===Md||Tt===yd}if(W){const Tt=Y.texture.type,wt=Tt===ha||Tt===Ts||Tt===Fo||Tt===Lr||Tt===xd||Tt===Sd,Dt=jt.getClearColor(),Gt=jt.getClearAlpha(),ee=Dt.r,Jt=Dt.g,Ft=Dt.b;wt?(b[0]=ee,b[1]=Jt,b[2]=Ft,b[3]=Gt,G.clearBufferuiv(G.COLOR,0,b)):(R[0]=ee,R[1]=Jt,R[2]=Ft,R[3]=Gt,G.clearBufferiv(G.COLOR,0,R))}else it|=G.COLOR_BUFFER_BIT}X&&(it|=G.DEPTH_BUFFER_BIT),at&&(it|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),It.dispose(),ge.dispose(),Yt.dispose(),T.dispose(),et.dispose(),mt.dispose(),Oe.dispose(),k.dispose(),Xt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Ir),lt.removeEventListener("sessionend",Br),Ri.stop()};function xt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const A=De.autoReset,X=Bt.enabled,at=Bt.autoUpdate,it=Bt.needsUpdate,W=Bt.type;Rt(),De.autoReset=A,Bt.enabled=X,Bt.autoUpdate=at,Bt.needsUpdate=it,Bt.type=W}function Lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function te(A){const X=A.target;X.removeEventListener("dispose",te),We(X)}function We(A){on(A),Yt.remove(A)}function on(A){const X=Yt.get(A).programs;X!==void 0&&(X.forEach(function(at){Xt.releaseProgram(at)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,at,it,W,Tt){X===null&&(X=ce);const wt=W.isMesh&&W.matrixWorld.determinant()<0,Dt=Hr(A,X,at,it,W);Zt.setMaterial(it,wt);let Gt=at.index,ee=1;if(it.wireframe===!0){if(Gt=Mt.getWireframeAttribute(at),Gt===void 0)return;ee=2}const Jt=at.drawRange,Ft=at.attributes.position;let ye=Jt.start*ee,Ue=(Jt.start+Jt.count)*ee;Tt!==null&&(ye=Math.max(ye,Tt.start*ee),Ue=Math.min(Ue,(Tt.start+Tt.count)*ee)),Gt!==null?(ye=Math.max(ye,0),Ue=Math.min(Ue,Gt.count)):Ft!=null&&(ye=Math.max(ye,0),Ue=Math.min(Ue,Ft.count));const Pe=Ue-ye;if(Pe<0||Pe===1/0)return;Oe.setup(W,it,Dt,at,Gt);let bn,xe=Ot;if(Gt!==null&&(bn=ht.get(Gt),xe=$t,xe.setIndex(bn)),W.isMesh)it.wireframe===!0?(Zt.setLineWidth(it.wireframeLinewidth*Ae()),xe.setMode(G.LINES)):xe.setMode(G.TRIANGLES);else if(W.isLine){let Vt=it.linewidth;Vt===void 0&&(Vt=1),Zt.setLineWidth(Vt*Ae()),W.isLineSegments?xe.setMode(G.LINES):W.isLineLoop?xe.setMode(G.LINE_LOOP):xe.setMode(G.LINE_STRIP)}else W.isPoints?xe.setMode(G.POINTS):W.isSprite&&xe.setMode(G.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)xe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))xe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Vt=W._multiDrawStarts,ln=W._multiDrawCounts,ae=W._multiDrawCount,Pn=Gt?ht.get(Gt).bytesPerElement:1,pa=Yt.get(it).currentProgram.getUniforms();for(let Sn=0;Sn<ae;Sn++)pa.setValue(G,"_gl_DrawID",Sn),xe.render(Vt[Sn]/Pn,ln[Sn])}else if(W.isInstancedMesh)xe.renderInstances(ye,Pe,W.count);else if(at.isInstancedBufferGeometry){const Vt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ln=Math.min(at.instanceCount,Vt);xe.renderInstances(ye,Pe,ln)}else xe.render(ye,Pe)};function Me(A,X,at){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,je(A,X,at),A.side=Za,A.needsUpdate=!0,je(A,X,at),A.side=Oi):je(A,X,at)}this.compile=function(A,X,at=null){at===null&&(at=A),_=ge.get(at),_.init(X),D.push(_),at.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),A!==at&&A.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const it=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Tt=W.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Dt=Tt[wt];Me(Dt,at,W),it.add(Dt)}else Me(Tt,at,W),it.add(Tt)}),D.pop(),_=null,it},this.compileAsync=function(A,X,at=null){const it=this.compile(A,X,at);return new Promise(W=>{function Tt(){if(it.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&it.delete(wt)}),it.size===0){W(A);return}setTimeout(Tt,10)}fe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let vn=null;function di(A){vn&&vn(A)}function Ir(){Ri.stop()}function Br(){Ri.start()}const Ri=new iv;Ri.setAnimationLoop(di),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(A){vn=A,lt.setAnimationLoop(A),A===null?Ri.stop():Ri.start()},lt.addEventListener("sessionstart",Ir),lt.addEventListener("sessionend",Br),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(X),X=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,Y),_=ge.get(A,D.length),_.init(X),D.push(_),zt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),V.setFromProjectionMatrix(zt),pt=this.localClippingEnabled,ot=bt.init(this.clippingPlanes,pt),y=It.get(A,L.length),y.init(),L.push(y),lt.enabled===!0&&lt.isPresenting===!0){const Tt=C.xr.getDepthSensingMesh();Tt!==null&&Ka(Tt,X,-1/0,C.sortObjects)}Ka(A,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(St,Et),Qt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Qt&&jt.addToRenderList(y,A),this.info.render.frame++,ot===!0&&bt.beginShadows();const at=_.state.shadowsArray;Bt.render(at,A,X),ot===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=y.opaque,W=y.transmissive;if(_.setupLights(),X.isArrayCamera){const Tt=X.cameras;if(W.length>0)for(let wt=0,Dt=Tt.length;wt<Dt;wt++){const Gt=Tt[wt];Fr(it,W,A,Gt)}Qt&&jt.render(A);for(let wt=0,Dt=Tt.length;wt<Dt;wt++){const Gt=Tt[wt];Cs(y,A,Gt,Gt.viewport)}}else W.length>0&&Fr(it,W,A,X),Qt&&jt.render(A),Cs(y,A,X);Y!==null&&(N.updateMultisampleRenderTarget(Y),N.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(C,A,X),Oe.resetDefaultState(),U=-1,w=null,D.pop(),D.length>0?(_=D[D.length-1],ot===!0&&bt.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Ka(A,X,at,it){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){it&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(zt);const wt=mt.update(A),Dt=A.material;Dt.visible&&y.push(A,wt,Dt,at,ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){const wt=mt.update(A),Dt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ne.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ne.copy(wt.boundingSphere.center)),ne.applyMatrix4(A.matrixWorld).applyMatrix4(zt)),Array.isArray(Dt)){const Gt=wt.groups;for(let ee=0,Jt=Gt.length;ee<Jt;ee++){const Ft=Gt[ee],ye=Dt[Ft.materialIndex];ye&&ye.visible&&y.push(A,wt,ye,at,ne.z,Ft)}}else Dt.visible&&y.push(A,wt,Dt,at,ne.z,null)}}const Tt=A.children;for(let wt=0,Dt=Tt.length;wt<Dt;wt++)Ka(Tt[wt],X,at,it)}function Cs(A,X,at,it){const W=A.opaque,Tt=A.transmissive,wt=A.transparent;_.setupLightsView(at),ot===!0&&bt.setGlobalState(C.clippingPlanes,at),it&&Zt.viewport(H.copy(it)),W.length>0&&Qa(W,X,at),Tt.length>0&&Qa(Tt,X,at),wt.length>0&&Qa(wt,X,at),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function Fr(A,X,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[it.id]===void 0&&(_.state.transmissionRenderTarget[it.id]=new bs(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?Go:ha,minFilter:Es,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[it.id],wt=it.viewport||H;Tt.setSize(wt.z,wt.w);const Dt=C.getRenderTarget();C.setRenderTarget(Tt),C.getClearColor(_t),vt=C.getClearAlpha(),vt<1&&C.setClearColor(16777215,.5),C.clear(),Qt&&jt.render(at);const Gt=C.toneMapping;C.toneMapping=ja;const ee=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),_.setupLightsView(it),ot===!0&&bt.setGlobalState(C.clippingPlanes,it),Qa(A,at,it),N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ft=0,ye=X.length;Ft<ye;Ft++){const Ue=X[Ft],Pe=Ue.object,bn=Ue.geometry,xe=Ue.material,Vt=Ue.group;if(xe.side===Oi&&Pe.layers.test(it.layers)){const ln=xe.side;xe.side=On,xe.needsUpdate=!0,pi(Pe,at,it,bn,xe,Vt),xe.side=ln,xe.needsUpdate=!0,Jt=!0}}Jt===!0&&(N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt))}C.setRenderTarget(Dt),C.setClearColor(_t,vt),ee!==void 0&&(it.viewport=ee),C.toneMapping=Gt}function Qa(A,X,at){const it=X.isScene===!0?X.overrideMaterial:null;for(let W=0,Tt=A.length;W<Tt;W++){const wt=A[W],Dt=wt.object,Gt=wt.geometry,ee=it===null?wt.material:it,Jt=wt.group;Dt.layers.test(at.layers)&&pi(Dt,X,at,Gt,ee,Jt)}}function pi(A,X,at,it,W,Tt){A.onBeforeRender(C,X,at,it,W,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,X,at,it,A,Tt),W.transparent===!0&&W.side===Oi&&W.forceSinglePass===!1?(W.side=On,W.needsUpdate=!0,C.renderBufferDirect(at,X,it,W,A,Tt),W.side=Za,W.needsUpdate=!0,C.renderBufferDirect(at,X,it,W,A,Tt),W.side=Oi):C.renderBufferDirect(at,X,it,W,A,Tt),A.onAfterRender(C,X,at,it,W,Tt)}function je(A,X,at){X.isScene!==!0&&(X=ce);const it=Yt.get(A),W=_.state.lights,Tt=_.state.shadowsArray,wt=W.state.version,Dt=Xt.getParameters(A,W.state,Tt,X,at),Gt=Xt.getProgramCacheKey(Dt);let ee=it.programs;it.environment=A.isMeshStandardMaterial?X.environment:null,it.fog=X.fog,it.envMap=(A.isMeshStandardMaterial?et:T).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,ee===void 0&&(A.addEventListener("dispose",te),ee=new Map,it.programs=ee);let Jt=ee.get(Gt);if(Jt!==void 0){if(it.currentProgram===Jt&&it.lightsStateVersion===wt)return Bi(A,Dt),Jt}else Dt.uniforms=Xt.getUniforms(A),A.onBeforeCompile(Dt,C),Jt=Xt.acquireProgram(Dt,Gt),ee.set(Gt,Jt),it.uniforms=Dt.uniforms;const Ft=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=bt.uniform),Bi(A,Dt),it.needsLights=Hc(A),it.lightsStateVersion=wt,it.needsLights&&(Ft.ambientLightColor.value=W.state.ambient,Ft.lightProbe.value=W.state.probe,Ft.directionalLights.value=W.state.directional,Ft.directionalLightShadows.value=W.state.directionalShadow,Ft.spotLights.value=W.state.spot,Ft.spotLightShadows.value=W.state.spotShadow,Ft.rectAreaLights.value=W.state.rectArea,Ft.ltc_1.value=W.state.rectAreaLTC1,Ft.ltc_2.value=W.state.rectAreaLTC2,Ft.pointLights.value=W.state.point,Ft.pointLightShadows.value=W.state.pointShadow,Ft.hemisphereLights.value=W.state.hemi,Ft.directionalShadowMap.value=W.state.directionalShadowMap,Ft.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ft.spotShadowMap.value=W.state.spotShadowMap,Ft.spotLightMatrix.value=W.state.spotLightMatrix,Ft.spotLightMap.value=W.state.spotLightMap,Ft.pointShadowMap.value=W.state.pointShadowMap,Ft.pointShadowMatrix.value=W.state.pointShadowMatrix),it.currentProgram=Jt,it.uniformsList=null,Jt}function xn(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Nc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Bi(A,X){const at=Yt.get(A);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function Hr(A,X,at,it,W){X.isScene!==!0&&(X=ce),N.resetTextureUnits();const Tt=X.fog,wt=it.isMeshStandardMaterial?X.environment:null,Dt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Pr,Gt=(it.isMeshStandardMaterial?et:T).get(it.envMap||wt),ee=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Jt=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ft=!!at.morphAttributes.position,ye=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let Pe=ja;it.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Pe=C.toneMapping);const bn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,xe=bn!==void 0?bn.length:0,Vt=Yt.get(it),ln=_.state.lights;if(ot===!0&&(pt===!0||A!==w)){const An=A===w&&it.id===U;bt.setState(it,A,An)}let ae=!1;it.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ln.state.version||Vt.outputColorSpace!==Dt||W.isBatchedMesh&&Vt.batching===!1||!W.isBatchedMesh&&Vt.batching===!0||W.isBatchedMesh&&Vt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Vt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Vt.instancing===!1||!W.isInstancedMesh&&Vt.instancing===!0||W.isSkinnedMesh&&Vt.skinning===!1||!W.isSkinnedMesh&&Vt.skinning===!0||W.isInstancedMesh&&Vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Vt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Vt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Vt.instancingMorph===!1&&W.morphTexture!==null||Vt.envMap!==Gt||it.fog===!0&&Vt.fog!==Tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==bt.numPlanes||Vt.numIntersection!==bt.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==Jt||Vt.morphTargets!==Ft||Vt.morphNormals!==ye||Vt.morphColors!==Ue||Vt.toneMapping!==Pe||Vt.morphTargetsCount!==xe)&&(ae=!0):(ae=!0,Vt.__version=it.version);let Pn=Vt.currentProgram;ae===!0&&(Pn=je(it,X,W));let pa=!1,Sn=!1,ma=!1;const Ce=Pn.getUniforms(),ti=Vt.uniforms;if(Zt.useProgram(Pn.program)&&(pa=!0,Sn=!0,ma=!0),it.id!==U&&(U=it.id,Sn=!0),pa||w!==A){Zt.buffers.depth.getReversed()?(yt.copy(A.projectionMatrix),My(yt),Ey(yt),Ce.setValue(G,"projectionMatrix",yt)):Ce.setValue(G,"projectionMatrix",A.projectionMatrix),Ce.setValue(G,"viewMatrix",A.matrixWorldInverse);const mi=Ce.map.cameraPosition;mi!==void 0&&mi.setValue(G,Pt.setFromMatrixPosition(A.matrixWorld)),me.logarithmicDepthBuffer&&Ce.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ce.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Sn=!0,ma=!0)}if(W.isSkinnedMesh){Ce.setOptional(G,W,"bindMatrix"),Ce.setOptional(G,W,"bindMatrixInverse");const An=W.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ce.setValue(G,"boneTexture",An.boneTexture,N))}W.isBatchedMesh&&(Ce.setOptional(G,W,"batchingTexture"),Ce.setValue(G,"batchingTexture",W._matricesTexture,N),Ce.setOptional(G,W,"batchingIdTexture"),Ce.setValue(G,"batchingIdTexture",W._indirectTexture,N),Ce.setOptional(G,W,"batchingColorTexture"),W._colorsTexture!==null&&Ce.setValue(G,"batchingColorTexture",W._colorsTexture,N));const pn=at.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Wt.update(W,at,Pn),(Sn||Vt.receiveShadow!==W.receiveShadow)&&(Vt.receiveShadow=W.receiveShadow,Ce.setValue(G,"receiveShadow",W.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ti.envMap.value=Gt,ti.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&X.environment!==null&&(ti.envMapIntensity.value=X.environmentIntensity),Sn&&(Ce.setValue(G,"toneMappingExposure",C.toneMappingExposure),Vt.needsLights&&Fc(ti,ma),Tt&&it.fog===!0&&Ut.refreshFogUniforms(ti,Tt),Ut.refreshMaterialUniforms(ti,it,j,Z,_.state.transmissionRenderTarget[A.id]),Nc.upload(G,xn(Vt),ti,N)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Nc.upload(G,xn(Vt),ti,N),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ce.setValue(G,"center",W.center),Ce.setValue(G,"modelViewMatrix",W.modelViewMatrix),Ce.setValue(G,"normalMatrix",W.normalMatrix),Ce.setValue(G,"modelMatrix",W.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const An=it.uniformsGroups;for(let mi=0,ei=An.length;mi<ei;mi++){const Fi=An[mi];k.update(Fi,Pn),k.bind(Fi,Pn)}}return Pn}function Fc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Hc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,X,at){Yt.get(A.texture).__webglTexture=X,Yt.get(A.depthTexture).__webglTexture=at;const it=Yt.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=at===void 0,it.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const at=Yt.get(A);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,at=0){Y=A,B=X,z=at;let it=!0,W=null,Tt=!1,wt=!1;if(A){const Gt=Yt.get(A);if(Gt.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(G.FRAMEBUFFER,null),it=!1;else if(Gt.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(Gt.__hasExternalTextures)N.rebindTextures(A,Yt.get(A.texture).__webglTexture,Yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ft=A.depthTexture;if(Gt.__boundDepthTexture!==Ft){if(Ft!==null&&Yt.has(Ft)&&(A.width!==Ft.image.width||A.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const ee=A.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(wt=!0);const Jt=Yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[X])?W=Jt[X][at]:W=Jt[X],Tt=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?W=Yt.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?W=Jt[at]:W=Jt,H.copy(A.viewport),ct.copy(A.scissor),rt=A.scissorTest}else H.copy(O).multiplyScalar(j).floor(),ct.copy($).multiplyScalar(j).floor(),rt=ft;if(Zt.bindFramebuffer(G.FRAMEBUFFER,W)&&it&&Zt.drawBuffers(A,W),Zt.viewport(H),Zt.scissor(ct),Zt.setScissorTest(rt),Tt){const Gt=Yt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Gt.__webglTexture,at)}else if(wt){const Gt=Yt.get(A.texture),ee=X||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Gt.__webglTexture,at||0,ee)}U=-1},this.readRenderTargetPixels=function(A,X,at,it,W,Tt,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Zt.bindFramebuffer(G.FRAMEBUFFER,Dt);try{const Gt=A.texture,ee=Gt.format,Jt=Gt.type;if(!me.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-it&&at>=0&&at<=A.height-W&&G.readPixels(X,at,it,W,se.convert(ee),se.convert(Jt),Tt)}finally{const Gt=Y!==null?Yt.get(Y).__webglFramebuffer:null;Zt.bindFramebuffer(G.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(A,X,at,it,W,Tt,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const Gt=A.texture,ee=Gt.format,Jt=Gt.type;if(!me.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-it&&at>=0&&at<=A.height-W){Zt.bindFramebuffer(G.FRAMEBUFFER,Dt);const Ft=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ft),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(X,at,it,W,se.convert(ee),se.convert(Jt),0);const ye=Y!==null?Yt.get(Y).__webglFramebuffer:null;Zt.bindFramebuffer(G.FRAMEBUFFER,ye);const Ue=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await yy(G,Ue,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ft),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(Ft),G.deleteSync(Ue),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,at=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const it=Math.pow(2,-at),W=Math.floor(A.image.width*it),Tt=Math.floor(A.image.height*it),wt=X!==null?X.x:0,Dt=X!==null?X.y:0;N.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,wt,Dt,W,Tt),Zt.unbindTexture()},this.copyTextureToTexture=function(A,X,at=null,it=null,W=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],X=arguments[2],W=arguments[3]||0,at=null);let Tt,wt,Dt,Gt,ee,Jt,Ft,ye,Ue;const Pe=A.isCompressedTexture?A.mipmaps[W]:A.image;at!==null?(Tt=at.max.x-at.min.x,wt=at.max.y-at.min.y,Dt=at.isBox3?at.max.z-at.min.z:1,Gt=at.min.x,ee=at.min.y,Jt=at.isBox3?at.min.z:0):(Tt=Pe.width,wt=Pe.height,Dt=Pe.depth||1,Gt=0,ee=0,Jt=0),it!==null?(Ft=it.x,ye=it.y,Ue=it.z):(Ft=0,ye=0,Ue=0);const bn=se.convert(X.format),xe=se.convert(X.type);let Vt;X.isData3DTexture?(N.setTexture3D(X,0),Vt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(N.setTexture2DArray(X,0),Vt=G.TEXTURE_2D_ARRAY):(N.setTexture2D(X,0),Vt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const ln=G.getParameter(G.UNPACK_ROW_LENGTH),ae=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Pn=G.getParameter(G.UNPACK_SKIP_PIXELS),pa=G.getParameter(G.UNPACK_SKIP_ROWS),Sn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Pe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Gt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Jt);const ma=A.isDataArrayTexture||A.isData3DTexture,Ce=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const ti=Yt.get(A),pn=Yt.get(X),An=Yt.get(ti.__renderTarget),mi=Yt.get(pn.__renderTarget);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let ei=0;ei<Dt;ei++)ma&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yt.get(A).__webglTexture,W,Jt+ei),A.isDepthTexture?(Ce&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yt.get(X).__webglTexture,W,Ue+ei),G.blitFramebuffer(Gt,ee,Tt,wt,Ft,ye,Tt,wt,G.DEPTH_BUFFER_BIT,G.NEAREST)):Ce?G.copyTexSubImage3D(Vt,W,Ft,ye,Ue+ei,Gt,ee,Tt,wt):G.copyTexSubImage2D(Vt,W,Ft,ye,Ue+ei,Gt,ee,Tt,wt);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ce?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Vt,W,Ft,ye,Ue,Tt,wt,Dt,bn,xe,Pe.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Vt,W,Ft,ye,Ue,Tt,wt,Dt,bn,Pe.data):G.texSubImage3D(Vt,W,Ft,ye,Ue,Tt,wt,Dt,bn,xe,Pe):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,W,Ft,ye,Tt,wt,bn,xe,Pe.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,W,Ft,ye,Pe.width,Pe.height,bn,Pe.data):G.texSubImage2D(G.TEXTURE_2D,W,Ft,ye,Tt,wt,bn,xe,Pe);G.pixelStorei(G.UNPACK_ROW_LENGTH,ln),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ae),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Pn),G.pixelStorei(G.UNPACK_SKIP_ROWS,pa),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Sn),W===0&&X.generateMipmaps&&G.generateMipmap(Vt),Zt.unbindTexture()},this.copyTextureToTexture3D=function(A,X,at=null,it=null,W=0){return A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,it=arguments[1]||null,A=arguments[2],X=arguments[3],W=arguments[4]||0),Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,at,it,W)},this.initRenderTarget=function(A){Yt.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),Zt.unbindTexture()},this.resetState=function(){B=0,z=0,Y=null,Zt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}class O1 extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cv extends Xo{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const v0=new tn,md=new Td,Tc=new Ic,bc=new nt;class P1 extends Xn{constructor(e=new Ii,i=new cv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=u,e.ray.intersectsSphere(Tc)===!1)return;v0.copy(l).invert(),md.copy(e.ray).applyMatrix4(v0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,x=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=S,R=M;b<R;b++){const y=p.getX(b);bc.fromBufferAttribute(x,y),x0(bc,y,m,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(x.count,h.start+h.count);for(let b=S,R=M;b<R;b++)bc.fromBufferAttribute(x,b),x0(bc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function x0(o,e,i,s,l,u,h){const d=md.distanceSqToPoint(o);if(d<i){const m=new nt;md.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class uv extends _n{constructor(e,i,s,l,u,h,d,m,p){super(e,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ad extends Ii{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],x=new nt,S=new nt,M=[],b=[],R=[],y=[];for(let _=0;_<=s;_++){const L=[],D=_/s;let C=0;_===0&&h===0?C=.5/i:_===s&&m===Math.PI&&(C=-.5/i);for(let K=0;K<=i;K++){const B=K/i;x.x=-e*Math.cos(l+B*u)*Math.sin(h+D*d),x.y=e*Math.cos(h+D*d),x.z=e*Math.sin(l+B*u)*Math.sin(h+D*d),b.push(x.x,x.y,x.z),S.copy(x).normalize(),R.push(S.x,S.y,S.z),y.push(B+C,1-D),L.push(p++)}g.push(L)}for(let _=0;_<s;_++)for(let L=0;L<i;L++){const D=g[_][L+1],C=g[_][L],K=g[_+1][L],B=g[_+1][L+1];(_!==0||h>0)&&M.push(D,C,B),(_!==s-1||m<Math.PI)&&M.push(C,K,B)}this.setIndex(M),this.setAttribute("position",new zi(b,3)),this.setAttribute("normal",new zi(R,3)),this.setAttribute("uv",new zi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ad(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const S0={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class z1{constructor(e,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,S=p.length;x<S;x+=2){const M=p[x],b=p[x+1];if(M.global&&(M.lastIndex=0),M.test(g))return b}return null}}}const I1=new z1;class Rd{constructor(e){this.manager=e!==void 0?e:I1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rd.DEFAULT_MATERIAL_NAME="__DEFAULT";class B1 extends Rd{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=S0.get(e);if(h!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0),h;const d=Ho("img");function m(){g(),S0.add(e,this),i&&i(this),u.manager.itemEnd(e)}function p(x){g(),l&&l(x),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class F1 extends Rd{constructor(e){super(e)}load(e,i,s,l){const u=new _n,h=new B1(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class y0{constructor(e=1,i=0,s=0){return this.radius=e,this.phi=i,this.theta=s,this}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class H1 extends Rs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);const M0={type:"change"},Cd={type:"start"},fv={type:"end"},Ac=new Td,E0=new Wa,G1=Math.cos(70*xy.DEG2RAD),un=new nt,kn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6;class V1 extends H1{constructor(e,i=null){super(e,i),this.state=He.NONE,this.enabled=!0,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new As,this._lastTargetPosition=new nt,this._quat=new As().setFromUnitVectors(e.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new y0,this._sphericalDelta=new y0,this._scale=1,this._panOffset=new nt,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new nt,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X1.bind(this),this._onPointerDown=k1.bind(this),this._onPointerUp=W1.bind(this),this._onContextMenu=J1.bind(this),this._onMouseWheel=j1.bind(this),this._onKeyDown=Z1.bind(this),this._onTouchStart=K1.bind(this),this._onTouchMove=Q1.bind(this),this._onMouseDown=q1.bind(this),this._onMouseMove=Y1.bind(this),this._interceptControlDown=$1.bind(this),this._interceptControlUp=tA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(M0),this.update(),this.state=He.NONE}update(e=null){const i=this.object.position;un.copy(i).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),i.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=un.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<G1?this.object.lookAt(this.target):(E0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(E0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(M0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){un.setFromMatrixColumn(i,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,i){this.screenSpacePanning===!0?un.setFromMatrixColumn(i,1):(un.setFromMatrixColumn(i,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let u=un.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new he,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function k1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function X1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function W1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fv),this.state=He.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function q1(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=He.DOLLY;break;case Tr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}break;case Tr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Cd)}function Y1(o){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function j1(o){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(o.preventDefault(),this.dispatchEvent(Cd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(fv))}function Z1(o){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(o)}function K1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=He.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=He.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Cd)}function Q1(o){switch(this._trackPointer(o),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=He.NONE}}function J1(o){this.enabled!==!1&&o.preventDefault()}function $1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const eA={STANDARD:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},HOT:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"Humanitarian OSM Team",url:"https://www.hotosm.org/"}]},OPENTOPOMAP:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"SRTM",url:"https://www2.jpl.nasa.gov/srtm/"},{text:"OpenTopoMap",url:"https://opentopomap.org/"}]},CARTODARK:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"CARTO",url:"https://carto.com/attributions"}]},CARTOVOYAGER:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"CARTO",url:"https://carto.com/attributions"}]},BLUE_MARBLE:{text:"Imagery: ",links:[{text:"NASA Blue Marble",url:"https://visibleearth.nasa.gov/collection/1484/blue-marble"},{text:"NASA Goddard Space Flight Center",url:"https://www.nasa.gov/goddard"}]},NASA_VIIRS:{text:"Imagery: ",links:[{text:"NASA EOSDIS GIBS",url:"https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs"},{text:"VIIRS",url:"https://www.nasa.gov/mission_pages/NPP/mission_overview/index.html"}]}},nA=({mapLayer:o,sidebarOffset:e})=>{const i=eA[o];return At.jsx("div",{className:"fixed bottom-4 z-50 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",style:{right:`${e+16}px`},children:At.jsxs("div",{className:"flex items-center text-[9px] font-mono text-zinc-300 tracking-wide",children:[At.jsx("span",{children:i.text}),i.links.map((s,l)=>At.jsxs(D0.Fragment,{children:[l>0&&At.jsx("span",{className:"mx-1",children:"|"}),At.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white hover:underline transition-colors",children:s.text})]},s.url))]})})},iA={STANDARD:{url:"https://tile.openstreetmap.org",format:"xyz"},HOT:{url:"https://a.tile.openstreetmap.fr/hot",format:"xyz"},OPENTOPOMAP:{url:"https://a.tile.opentopomap.org",format:"xyz"},CARTODARK:{url:"https://a.basemaps.cartocdn.com/dark_all",format:"xyz"},CARTOVOYAGER:{url:"https://a.basemaps.cartocdn.com/rastertiles/voyager",format:"xyz"},BLUE_MARBLE:{url:"/Projection-lab/blue-marble.jpg",format:"static"},NASA_VIIRS:{url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default",format:"xyz"}};async function aA(o){return console.log(`Loading static texture from: ${o}`),new Promise((e,i)=>{new F1().load(o,l=>{console.log("✓ Static texture loaded successfully"),l.wrapS=Ur,l.wrapT=Pi,l.minFilter=Dn,l.magFilter=Dn,l.anisotropy=16,e(l)},l=>{if(l.lengthComputable){const u=(l.loaded/l.total*100).toFixed(0);console.log(`Loading texture: ${u}%`)}},l=>{console.error("✗ Failed to load static texture:",l),i(l)})})}async function sA(o,e){const s=Math.pow(2,e);console.log(`Creating stitched texture with ${s}x${s} tiles at zoom ${e}`);const l=document.createElement("canvas");l.width=s*256,l.height=s*256;const u=l.getContext("2d");if(!u)throw new Error("Could not create canvas context");const h=u.createLinearGradient(0,0,0,l.height);h.addColorStop(0,"#1a3a52"),h.addColorStop(1,"#0d1b2a"),u.fillStyle=h,u.fillRect(0,0,l.width,l.height);const d=[];let m=0;const p=[];for(let x=0;x<s;x++)for(let S=0;S<s;S++){const M=o(x,S,e),b=new Promise(R=>{const y=new Image;y.crossOrigin="anonymous";const _=setTimeout(()=>{console.warn(`⏱️ Tile request timeout: ${M}`),p.push(M),R()},5e3);y.onload=()=>{clearTimeout(_),m++,u.drawImage(y,x*256,S*256,256,256),console.log(`✓ Loaded tile ${x},${S}`),R()},y.onerror=()=>{clearTimeout(_),p.push(M),console.warn(`✗ Failed to load tile: ${M}`),R()},y.src=M});d.push(b)}await Promise.all(d),console.log(`Texture complete. Loaded ${m}/${d.length} tiles`),p.length>0&&console.warn(`Failed URLs (${p.length}): ${p.slice(0,2).join(", ")}${p.length>2?" ...":""}`),m===0&&(u.fillStyle="rgba(255, 100, 100, 0.3)",u.font="bold 50px Arial",u.textAlign="center",u.textBaseline="middle",u.fillText("⚠️ TILES FAILED",l.width/2,l.height/2-30),u.font="20px Arial",u.fillText("Check console",l.width/2,l.height/2+30));const g=new uv(l);return g.wrapS=Ur,g.wrapT=Pi,g.minFilter=Dn,g.magFilter=Dn,g.anisotropy=16,g}const Li=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,rA=({settings:o,sidebarOffset:e})=>{const i=Ve.useRef(null),s=Ve.useRef(null),l=Ve.useRef(null),u=Ve.useRef(o),h=Ve.useRef(e),d=Ve.useRef(e),m=Ve.useRef(0),p=Ve.useRef(null),g=Ve.useRef({torus:0,sphere:0,cylinder:0,cone:0,disc:0,mercator:0,gallPeters:0,sinusoidal:0,robinson:0,infinite:0}),x=Ve.useRef("SPHERE"),[S,M]=Ve.useState(!0),b=Ve.useRef([]),R=Ve.useRef(o.viewMode==="SPHERE"?1:0),y=Ve.useRef(!0),_=()=>{const L=document.createElement("canvas");L.width=512,L.height=512;const D=L.getContext("2d");if(!D)throw new Error("Could not create canvas context");D.fillStyle="#1a3a52",D.fillRect(0,0,512,512);const C=D.createLinearGradient(0,0,512,512);C.addColorStop(0,"#0d1b2a"),C.addColorStop(1,"#1a3a52"),D.fillStyle=C,D.fillRect(0,0,512,512),D.strokeStyle="#2a5a7a",D.lineWidth=2;for(let B=0;B<=8;B++){const z=B/8*512;D.beginPath(),D.moveTo(z,0),D.lineTo(z,512),D.stroke(),D.beginPath(),D.moveTo(0,z),D.lineTo(512,z),D.stroke()}D.fillStyle="#4a9aca",D.font="bold 24px monospace",D.textAlign="center",D.textBaseline="middle",D.fillText("Loading Tiles...",256,256);const K=new uv(L);return K.wrapS=Ur,K.wrapT=Pi,K.minFilter=Dn,K.magFilter=Dn,K};return Ve.useEffect(()=>{u.current=o,h.current=e,console.log("Settings updated:",o.viewMode,o.mapLayer)},[o,e]),Ve.useEffect(()=>{M(!0);const L=iA[o.mapLayer];if(L.format==="static"){console.log("Loading static texture for layer:",o.mapLayer),aA(L.url).then(C=>{if(console.log("Static texture loaded successfully"),l.current){const K=l.current.uniforms.uTexture.value;K instanceof _n&&K.image&&K.dispose(),l.current.uniforms.uTexture.value=C,l.current.uniforms.uUseEquirectangular.value=1}M(!1)}).catch(C=>{console.error("Failed to load static texture:",C),M(!1)});return}const D=(C,K,B)=>{if(o.mapLayer==="NASA_VIIRS"){const Y=new Date;Y.setDate(Y.getDate()-1);const U=Y.toISOString().split("T")[0];return`${L.url}/${U}/GoogleMapsCompatible_Level9/${B}/${K}/${C}.jpg`}return`${L.url}/${B}/${C}/${K}.png`};console.log("Starting texture load for layer:",o.mapLayer),console.log("Sample URL:",D(0,0,4)),sA(D,4).then(C=>{if(console.log("Texture loaded successfully"),l.current){const K=l.current.uniforms.uTexture.value;K instanceof _n&&K.image&&K.dispose(),l.current.uniforms.uTexture.value=C,l.current.uniforms.uUseEquirectangular.value=0}M(!1)}).catch(C=>{console.error("Failed to load texture:",C),M(!1)})},[o.mapLayer]),Ve.useEffect(()=>{if(!i.current)return;if(s.current){console.log("Scene already exists, skipping recreation");return}const L=new O1;L.background=new we(5);const D=new hi(45,window.innerWidth/window.innerHeight,.1,1e4);D.position.set(0,0,250),console.log("Scene created with camera position:",D.position);const C=new N1({antialias:!0,alpha:!0});C.setSize(window.innerWidth,window.innerHeight),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current.appendChild(C.domElement),console.log("Renderer created and appended to DOM"),s.current=C;const K=new V1(D,C.domElement);K.enableDamping=!0,K.dampingFactor=.05,K.autoRotate=!1,K.enableZoom=!0,K.enablePan=!0,K.enableRotate=!0,C.domElement.addEventListener("mousedown",ft=>{console.log("🖱️ Mouse down at:",ft.clientX,ft.clientY)}),C.domElement.addEventListener("mousemove",ft=>{ft.buttons>0&&console.log("🖱️ Mouse dragging at:",ft.clientX,ft.clientY)}),C.domElement.addEventListener("mouseup",ft=>{console.log("🖱️ Mouse up at:",ft.clientX,ft.clientY)});const B=`
      varying vec2 vUv;
      varying vec2 vFinalUv;
      
      uniform float uTorusT; 
      uniform float uSphereT;
      uniform float uCylinderT;
      uniform float uConeT;
      uniform float uDiscT;
      uniform float uMercatorT;
      uniform float uGallPetersT;
      uniform float uSinusoidalT;
      uniform float uRobinsonT;
      uniform float uInfiniteT;
      
      #define PI 3.14159265359

      float ease(float t) {
        return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
      }

      // Robinson projection lookup tables
      const float robX[19] = float[19](1.0, 0.9986, 0.9954, 0.99, 0.9822, 0.973, 0.963, 0.951, 0.9394, 0.9264, 0.911, 0.8935, 0.8735, 0.85, 0.8235, 0.793, 0.758, 0.7185, 0.5322);
      const float robY[19] = float[19](0.0, 0.062, 0.124, 0.186, 0.248, 0.31, 0.372, 0.434, 0.4958, 0.5571, 0.6176, 0.6769, 0.7346, 0.7903, 0.8435, 0.8936, 0.9394, 0.9761, 1.0);

      vec2 getRobinsonParams(float latDeg) {
        float aLat = abs(latDeg);
        float indexF = aLat / 5.0;
        int i = int(floor(indexF));
        i = clamp(i, 0, 17);
        float t = fract(indexF);
        
        float x = mix(robX[i], robX[i+1], t);
        float y = mix(robY[i], robY[i+1], t);
        
        if (latDeg < 0.0) y = -y;
        return vec2(x, y);
      }

      void main() {
        vUv = uv;
        
        // --- TEXTURE MAPPING LOGIC ---
        float phiTrans = (uv.y - 0.5) * 2.0 * PI; 
        float thetaTrans = (uv.x - 0.5) * PI;
        vec3 pTransUV = vec3(sin(thetaTrans), cos(thetaTrans) * sin(phiTrans), cos(thetaTrans) * cos(phiTrans));
        float eLatT = asin(clamp(pTransUV.y, -1.0, 1.0));
        float eLonT = atan(pTransUV.x, pTransUV.z);
        vec2 uvInfinite = vec2((eLonT / (2.0 * PI)) + 0.5, (eLatT / PI) + 0.5);

        float mercY = (uv.y - 0.5) * 2.0 * PI; 
        float mLat = 2.0 * atan(exp(mercY)) - PI / 2.0;
        vec2 uvMercator = vec2(uv.x, (mLat / PI) + 0.5);
        
        float sinLatGP = (uv.y - 0.5) * 2.0;
        float gpLat = asin(clamp(sinLatGP, -1.0, 1.0));
        vec2 uvGallPeters = vec2(uv.x, (gpLat / PI) + 0.5);
        
        vec2 uvBase = uv;
        uvBase = mix(uvBase, uvInfinite, uInfiniteT);
        uvBase = mix(uvBase, uvMercator, uMercatorT);
        uvBase = mix(uvBase, uvGallPeters, uGallPetersT);
        vFinalUv = uvBase;

        // --- GEOMETRY PARAMETERS ---
        float sphereRadius = 10.0;
        float planeW = 2.0 * PI * sphereRadius; 
        
        // Height targets to fix squishing
        float hPC = PI * sphereRadius;           // Plate Carree 2:1
        float hM = planeW;                       // Mercator Square (clipped)
        float hGP = 2.0 * sphereRadius;          // Gall-Peters 3.14:1
        float hInf = planeW;                     // Infinite
        float hRob = planeW / 1.97;              // Robinson standard

        float targetHeight = hPC;
        targetHeight = mix(targetHeight, hM, uMercatorT);
        targetHeight = mix(targetHeight, hGP, uGallPetersT);
        targetHeight = mix(targetHeight, hInf, uInfiniteT);
        targetHeight = mix(targetHeight, hRob, uRobinsonT);

        float stdLat = (uv.y - 0.5) * PI;
        float geoWidthFactor = mix(1.0, cos(stdLat), uSinusoidalT);
        
        // 2D BASE POSITION
        vec3 pos2DDefault = vec3((uv.x - 0.5) * planeW * geoWidthFactor, (uv.y - 0.5) * targetHeight, 0.0);

        // Robinson 2D
        vec2 robParams = getRobinsonParams((uv.y - 0.5) * 180.0);
        float robXFactor = 0.8487 * robParams.x;
        float robYVal = 1.3523 * robParams.y * sphereRadius;
        vec3 posRobinson = vec3((uv.x - 0.5) * planeW * robXFactor, robYVal, 0.0);

        vec3 pos2D = mix(pos2DDefault, posRobinson, uRobinsonT);
        
        // 3D CANDIDATES
        float lon = (uv.x - 0.5) * 2.0 * PI;
        vec3 posCylinder = vec3(sphereRadius * sin(lon), (uv.y - 0.5) * targetHeight, sphereRadius * cos(lon));
        float coneRadius = sphereRadius * (1.1 - uv.y); 
        vec3 posCone = vec3(coneRadius * sin(lon), (uv.y - 0.5) * targetHeight, coneRadius * cos(lon));
        float discRadius = sphereRadius * 2.0 * (1.0 - uv.y); 
        vec3 posDisc = vec3(discRadius * sin(lon), 0.0, discRadius * cos(lon));

        float stdLon = (uv.x - 0.5) * 2.0 * PI;
        vec3 pSph = vec3(cos(stdLat) * sin(stdLon), sin(stdLat), cos(stdLat) * cos(stdLon));
        vec3 pSphTrans = vec3(sin(thetaTrans), cos(thetaTrans) * sin(phiTrans), cos(thetaTrans) * cos(phiTrans));
        vec3 posSphere = mix(pSph, pSphTrans, uInfiniteT) * sphereRadius;

        // Torus
        vec3 pos2D_Rect = vec3((uv.x - 0.5) * planeW, (uv.y - 0.5) * targetHeight, 0.0);
        float r_tube = targetHeight / (2.0 * PI);
        float R_hole = 25.0; 
        float tRoll = ease(clamp(uTorusT * 2.0, 0.0, 1.0));
        float rollAngle = (uv.y - 0.5) * 2.0 * PI;
        vec3 pRolled = vec3(pos2D_Rect.x, mix(pos2D_Rect.y, r_tube * sin(rollAngle), tRoll), mix(pos2D_Rect.z, r_tube * (cos(rollAngle) - 1.0), tRoll));
        float tWrap = ease(clamp(uTorusT * 2.0 - 1.0, 0.0, 1.0));
        float targetRingWidth = 2.0 * PI * R_hole;
        float xStretched = mix(pRolled.x, (uv.x - 0.5) * targetRingWidth, tWrap);
        float wrapAngle = xStretched / R_hole;
        float distFromRingCenter = R_hole + pRolled.z;
        vec3 pToroid = vec3(distFromRingCenter * sin(wrapAngle), pRolled.y, distFromRingCenter * cos(wrapAngle) - R_hole);
        vec3 posTorusFinal = mix(pRolled, pToroid, tWrap);

        float wSphere = uSphereT;
        float wCylinder = uCylinderT;
        float wCone = uConeT;
        float wDisc = uDiscT;
        float wTorus = uTorusT;
        
        float total3DWeight = wSphere + wCylinder + wCone + wDisc + wTorus;
        vec3 pos3DCombined = vec3(0.0);
        if (total3DWeight > 0.0) {
          pos3DCombined = (posSphere * wSphere + posCylinder * wCylinder + posCone * wCone + posDisc * wDisc + posTorusFinal * wTorus) / total3DWeight;
        }

        float global3DT = clamp(total3DWeight, 0.0, 1.0);
        vec3 finalPos = mix(pos2D, pos3DCombined, global3DT);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
      }
    `,z=`
      varying vec2 vUv;
      varying vec2 vFinalUv;
      uniform sampler2D uTexture;
      uniform float uShowGrid;
      uniform float uUseEquirectangular;

      #define PI 3.14159265359

      float latToMercator(float lat) {
        float latLimit = 0.005;
        float clampedLat = clamp(lat, latLimit, 1.0 - latLimit);
        float latRad = (clampedLat - 0.5) * PI;
        return (log(tan(PI / 4.0 + latRad / 2.0)) / PI + 1.0) / 2.0;
      }

      void main() {
        // Apply Mercator transformation only for tiled sources (Web Mercator projection)
        // Skip for equirectangular sources like Blue Marble
        vec2 texCoords = vFinalUv;
        if (uUseEquirectangular < 0.5) {
          // Tiled sources need Mercator adjustment
          texCoords.y = latToMercator(vFinalUv.y);
        }

        vec4 texColor = texture2D(uTexture, texCoords);

        float grid = 0.0;
        if (uShowGrid > 0.5) {
          vec2 gridSpacing = vec2(18.0, 10.0);
          vec2 gridUv = fract(vFinalUv * gridSpacing);
          float line = step(0.98, gridUv.x) + step(0.98, gridUv.y);
          grid = clamp(line * 0.08, 0.0, 0.5);
        }

        gl_FragColor = vec4(texColor.rgb + grid, texColor.a);
      }
    `,Y=new Ai({vertexShader:B,fragmentShader:z,uniforms:{uTorusT:{value:0},uSphereT:{value:0},uCylinderT:{value:0},uConeT:{value:0},uDiscT:{value:0},uMercatorT:{value:0},uGallPetersT:{value:0},uSinusoidalT:{value:0},uRobinsonT:{value:0},uInfiniteT:{value:0},uTexture:{value:_()},uShowGrid:{value:u.current.showGrid?1:0},uUseEquirectangular:{value:0}},side:Oi});l.current=Y;const U=new qo(1,1,400,400),w=new Ei(U,Y);w.scale.set(5,5,5),L.add(w),console.log("✓ Plane mesh added to scene with",U.attributes.position.count,"vertices"),console.log("✓ Initial mode:",u.current.viewMode),console.log("✓ Initial map layer:",u.current.mapLayer);const H=`
      varying vec3 vNormal;
      varying vec3 vPosition;

      uniform float uLayerIntensity;

      void main() {
        // Fresnel effect
        vec3 viewDirection = normalize(vPosition);
        float fresnel = abs(dot(vNormal, viewDirection));
        fresnel = 1.0 - fresnel;

        // Enhanced glow with smooth falloff
        float fresnel1 = pow(fresnel, 2.5);
        float fresnel2 = pow(fresnel, 6.0);

        // Realistic atmosphere colors
        vec3 innerColor = vec3(0.6, 0.8, 1.0);
        vec3 outerColor = vec3(0.3, 0.5, 0.9);

        vec3 color = mix(outerColor, innerColor, fresnel2) * (fresnel1 * 1.5 + fresnel2 * 0.5);
        float alpha = (fresnel1 * 0.4 + fresnel2 * 0.6) * uLayerIntensity;

        gl_FragColor = vec4(color, alpha);
      }
    `,ct=[],rt=50,_t=new Ai({vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:H,uniforms:{uLayerIntensity:{value:u.current.viewMode==="SPHERE"&&u.current.showAtmosphere?.5:0}},transparent:!0,side:On,blending:Ch,depthWrite:!1,depthTest:!0}),vt=new Ad(rt*1.05,64,64),P=new Ei(vt,_t);P.visible=u.current.viewMode==="SPHERE",L.add(P),ct.push(P),b.current=ct,console.log("✓ Sphere atmosphere added");const Z=12e3,j=new Ii,St=new Float32Array(Z*3);for(let ft=0;ft<Z;ft++){const V=600+Math.random()*800,ot=2*Math.PI*Math.random(),pt=Math.acos(2*Math.random()-1);St[ft*3]=V*Math.sin(pt)*Math.cos(ot),St[ft*3+1]=V*Math.sin(pt)*Math.sin(ot),St[ft*3+2]=V*Math.cos(pt)}j.setAttribute("position",new bi(St,3));const Et=new P1(j,new cv({size:.7,color:8956671,transparent:!0,opacity:.8}));L.add(Et),p.current=Et;const O=ft=>{const V=(ft-m.current)/1e3;m.current=ft;const ot=5;if(d.current+=(h.current-d.current)*Math.min(V*ot,1),D.setViewOffset(window.innerWidth,window.innerHeight,d.current/2,0,window.innerWidth,window.innerHeight),p.current&&(p.current.rotation.y+=5e-5),l.current){const pt=u.current.viewMode;pt!==x.current&&(console.log("✓ Geometry mode changed:",x.current,"→",pt),x.current==="SPHERE"?y.current=!1:y.current=!0,x.current=pt);const yt={torus:pt==="TORUS"?1:0,sphere:pt==="SPHERE"?1:0,cylinder:pt==="CYLINDER"?1:0,cone:pt==="CONE"?1:0,disc:pt==="DISC"?1:0,mercator:pt==="MERCATOR"?1:0,gallPeters:pt==="GALL_PETERS"?1:0,sinusoidal:pt==="SINUSOIDAL"?1:0,robinson:pt==="ROBINSON"?1:0,infinite:pt==="INFINITE"||pt==="TORUS"?1:0},zt=pt==="SPHERE",Pt=zt&&u.current.showAtmosphere?1:0;if(zt&&g.current.sphere<.99)R.current=Math.max(0,R.current-V*8);else{const Qt=Pt<R.current?8:3;R.current+=(Pt-R.current)*V*Qt}!y.current&&R.current<.01&&(y.current=!0),Object.keys(yt).forEach(Qt=>{let Ae=yt[Qt];Qt==="torus"&&Ae===1&&g.current.infinite<.9&&(Ae=0);const G=g.current[Qt],dn=Qt==="torus"?.5:1.5;y.current&&(G<Ae?g.current[Qt]=Math.min(Ae,G+V*dn):G>Ae&&(g.current[Qt]=Math.max(Ae,G-V*1.5)))});const ne=Li(g.current.torus);K.target.set(0,0,-25*ne);const ce=l.current;ce.uniforms.uInfiniteT.value=Li(g.current.infinite),ce.uniforms.uMercatorT.value=Li(g.current.mercator),ce.uniforms.uGallPetersT.value=Li(g.current.gallPeters),ce.uniforms.uSinusoidalT.value=Li(g.current.sinusoidal),ce.uniforms.uRobinsonT.value=Li(g.current.robinson),ce.uniforms.uSphereT.value=Li(g.current.sphere),ce.uniforms.uCylinderT.value=Li(g.current.cylinder),ce.uniforms.uConeT.value=Li(g.current.cone),ce.uniforms.uDiscT.value=Li(g.current.disc),ce.uniforms.uTorusT.value=g.current.torus,ce.uniforms.uShowGrid.value=u.current.showGrid?1:0,b.current.forEach(Qt=>{Qt.material instanceof Ai&&(Qt.material.uniforms.uLayerIntensity.value=R.current*.5,Qt.visible=R.current>.01)})}K.update(),C.render(L,D),requestAnimationFrame(O)};m.current=performance.now(),requestAnimationFrame(O),console.log("✓ Animation loop started");const $=()=>{D.aspect=window.innerWidth/window.innerHeight,D.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$),C.dispose(),U.dispose(),Y.dispose()}},[]),At.jsxs("div",{ref:i,className:"w-full h-full bg-[#000005] cursor-move",style:{touchAction:"none"},children:[S&&At.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md z-10 pointer-events-none",children:At.jsxs("div",{className:"text-center space-y-4",children:[At.jsx("div",{className:"w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin mx-auto"}),At.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400",children:"Initializing Playground..."})]})}),At.jsx(nA,{mapLayer:o.mapLayer,sidebarOffset:e})]})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=o=>{const e=lA(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=Ve.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>Ve.createElement("svg",{ref:m,...cA,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:hv("lucide",l),...!u&&!uA(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>Ve.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(o,e)=>{const i=Ve.forwardRef(({className:s,...l},u)=>Ve.createElement(fA,{ref:u,iconNode:e,className:hv(`lucide-${oA(T0(o))}`,`lucide-${o}`,s),...l}));return i.displayName=T0(o),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],dA=Ye("activity",hA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],mA=Ye("box",pA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],_A=Ye("chevron-left",gA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xA=Ye("chevron-right",vA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],yA=Ye("cloud",SA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],EA=Ye("compass",MA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]],bA=Ye("cylinder",TA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],RA=Ye("disc",AA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],b0=Ye("earth",CA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],A0=Ye("globe",wA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],R0=Ye("grid-3x3",DA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],LA=Ye("heart",UA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],OA=Ye("info",NA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],zA=Ye("layers",PA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],C0=Ye("map",IA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],FA=Ye("moon",BA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],GA=Ye("mountain",HA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],kA=Ye("navigation",VA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],WA=Ye("pyramid",XA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],YA=Ye("rotate-3d",qA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],ZA=Ye("triangle",jA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],QA=Ye("wind",KA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$A=Ye("zap",JA),tR=()=>{const[o,e]=Ve.useState({zoom:1,rotation:{x:0,y:0},showGrid:!0,showAtmosphere:!0,viewMode:"SPHERE",mapLayer:"BLUE_MARBLE"}),[i,s]=Ve.useState(!0),l=Ve.useRef("STANDARD"),u=Ve.useCallback(L=>{console.log("✓ setMode called with:",L),["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(L)||(l.current=L),e(C=>(console.log("✓ Settings updated to viewMode:",L),{...C,viewMode:L}))},[]),h=L=>{console.log("✓ setLayer called with:",L),e(D=>(console.log("✓ Settings updated to mapLayer:",L),{...D,mapLayer:L}))},d=()=>e(L=>({...L,showGrid:!L.showGrid})),m=()=>e(L=>({...L,showAtmosphere:!L.showAtmosphere})),p=L=>{const D=o.viewMode;u(D===L?l.current:L)},g=o.viewMode==="TORUS",x=o.viewMode==="SPHERE",S=o.viewMode==="CYLINDER",M=o.viewMode==="CONE",b=o.viewMode==="DISC",R=g||x||S||M||b,y=[{id:"STANDARD",name:"Standard (Plate Carrée)",icon:R0},{id:"GALL_PETERS",name:"Gall-Peters (Equal Area)",icon:C0},{id:"MERCATOR",name:"Mercator (Navigational)",icon:EA},{id:"ROBINSON",name:"Robinson (Pseudocylindrical)",icon:b0},{id:"SINUSOIDAL",name:"Sinusoidal (Equal Area)",icon:ZA},{id:"INFINITE",name:"Infinite (Transverse)",icon:$A}],_=[{id:"BLUE_MARBLE",name:"NASA Blue Marble",icon:b0,color:"text-cyan-400"},{id:"NASA_VIIRS",name:"NASA VIIRS",icon:A0,color:"text-purple-400"},{id:"OPENTOPOMAP",name:"OpenTopoMap",icon:GA,color:"text-amber-400"},{id:"HOT",name:"Humanitarian",icon:LA,color:"text-rose-400"},{id:"STANDARD",name:"OSM Standard",icon:kA,color:"text-blue-400"},{id:"CARTODARK",name:"Carto Dark",icon:FA,color:"text-indigo-400"}];return At.jsxs("div",{className:"flex h-screen w-screen bg-zinc-950 font-sans text-zinc-100 overflow-hidden",children:[At.jsxs("div",{className:"relative flex-1 h-full",children:[At.jsx(rA,{settings:o,sidebarOffset:i?380:0}),!i&&At.jsx("button",{onClick:()=>s(!0),className:"absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 hover:bg-zinc-800 transition-colors shadow-xl",children:At.jsx(_A,{size:20})})]}),At.jsx("aside",{className:`fixed top-0 right-0 h-full bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl z-40 ${i?"translate-x-0":"translate-x-full"} w-full sm:w-[380px]`,children:At.jsxs("div",{className:"h-full flex flex-col p-10 overflow-y-auto",children:[At.jsxs("div",{className:"flex items-center justify-between mb-12",children:[At.jsxs("div",{className:"flex items-center gap-4",children:[At.jsx("div",{className:`p-3 rounded-2xl border transition-all duration-500 ${R?"bg-emerald-600/20 border-emerald-500/30":"bg-blue-600/20 border-blue-500/30"}`,children:At.jsx(dA,{className:R?"text-emerald-400":"text-blue-400",size:20})}),At.jsxs("div",{children:[At.jsx("h1",{className:"text-[11px] font-black uppercase tracking-[0.4em] text-white",children:"Projection Lab v43"}),At.jsx("p",{className:"text-[9px] text-zinc-500 font-mono text-nowrap uppercase",children:"Map Projection Playground"})]})]}),At.jsx("button",{onClick:()=>s(!1),className:"p-2 hover:bg-white/5 rounded-full transition-colors",children:At.jsx(xA,{size:18})})]}),At.jsxs("section",{className:"space-y-10 pb-12",children:[At.jsxs("div",{className:"space-y-5",children:[At.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[At.jsx(zA,{size:12})," Map Engine"]}),At.jsx("div",{className:"grid grid-cols-2 gap-2",children:_.map(L=>At.jsxs("button",{onClick:()=>h(L.id),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${o.mapLayer===L.id?"bg-white text-zinc-950 border-white shadow-lg":"bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800"}`,children:[At.jsx(L.icon,{size:20,className:o.mapLayer===L.id?"text-zinc-950":L.color}),At.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-center",children:L.name})]},L.id))})]}),At.jsxs("div",{className:"space-y-6",children:[At.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[At.jsx(C0,{size:12})," Cartography (2D)"]}),At.jsx("div",{className:"space-y-2.5",children:y.map(L=>At.jsx("button",{onClick:()=>u(L.id),className:`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 relative group ${o.viewMode===L.id?"bg-zinc-100 text-zinc-950 border-white shadow-lg":g&&L.id==="INFINITE"?"bg-blue-900/40 border-blue-500 text-blue-100":"bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-700"}`,children:At.jsxs("div",{className:"flex items-center gap-3",children:[At.jsx(L.icon,{size:16,className:`transition-colors ${o.viewMode===L.id?"text-zinc-950":g&&L.id==="INFINITE"?"text-blue-400":"text-zinc-500"}`}),At.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest",children:L.name})]})},L.id))})]}),At.jsxs("div",{className:"space-y-6",children:[At.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[At.jsx(mA,{size:12})," Dimensional (3D)"]}),At.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[At.jsxs("button",{onClick:()=>p("SPHERE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${x?"bg-emerald-600 text-white border-emerald-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[At.jsx(A0,{size:20,className:x?"animate-pulse":""}),At.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest",children:"Sphere"})]}),At.jsxs("button",{onClick:()=>p("DISC"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${b?"bg-rose-600 text-white border-rose-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[At.jsx(RA,{size:20,className:b?"animate-pulse":""}),At.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Disc World"})]}),At.jsxs("button",{onClick:()=>p("CONE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${M?"bg-orange-600 text-white border-orange-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[At.jsx(WA,{size:20,className:M?"animate-pulse":""}),At.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cone"})]}),At.jsxs("button",{onClick:()=>p("CYLINDER"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${S?"bg-indigo-600 text-white border-indigo-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[At.jsx(bA,{size:20,className:S?"animate-pulse":""}),At.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cylinder"})]}),At.jsxs("button",{onClick:()=>p("TORUS"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 col-span-2 ${g?"bg-blue-600 text-white border-blue-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[At.jsx(YA,{size:20,className:g?"animate-pulse":""}),At.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Torus"})]})]})]}),At.jsxs("div",{className:"space-y-4",children:[At.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[At.jsx(QA,{size:12})," Visualization"]}),At.jsxs("div",{className:"flex items-center justify-between px-2",children:[At.jsxs("div",{className:"flex items-center gap-2",children:[At.jsx(R0,{size:12,className:"text-zinc-500"}),At.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Geo Grid"})]}),At.jsx("button",{onClick:d,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${o.showGrid?"bg-emerald-600 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:At.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${o.showGrid?"translate-x-5":"translate-x-0"}`})})]}),At.jsxs("div",{className:"flex items-center justify-between px-2",children:[At.jsxs("div",{className:"flex items-center gap-2",children:[At.jsx(yA,{size:12,className:"text-zinc-500"}),At.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Atmosphere"})]}),At.jsx("button",{onClick:m,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${o.viewMode==="SPHERE"&&o.showAtmosphere?"bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:At.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${o.viewMode==="SPHERE"&&o.showAtmosphere?"translate-x-5":"translate-x-0"}`})})]})]}),At.jsx("div",{className:"pt-10 border-t border-white/5",children:At.jsxs("div",{className:"flex items-start gap-4 p-5 bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl",children:[At.jsx(OA,{className:"text-blue-500/60 shrink-0 mt-0.5",size:16}),At.jsxs("p",{className:"text-[10px] text-zinc-500 leading-relaxed font-medium",children:["Licensed under ",At.jsx("a",{href:"https://github.com/arand4/Projection-lab/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline",children:"GNU GPL v3"}),". View source on ",At.jsx("a",{href:"https://github.com/arand4/Projection-lab",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline",children:"GitHub"}),"."]})]})})]}),At.jsx("div",{className:"mt-auto pt-6 text-[8px] text-zinc-800 text-center font-mono uppercase tracking-[0.5em]",children:"Projection Lab v43"})]})})]})},dv=document.getElementById("root");if(!dv)throw new Error("Could not find root element to mount to");const eR=wS.createRoot(dv);eR.render(At.jsx(D0.StrictMode,{children:At.jsx(tR,{})}));
