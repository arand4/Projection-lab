(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function F_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function Cy(){if(m0)return Uo;m0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var g0;function wy(){return g0||(g0=1,Kf.exports=Cy()),Kf.exports}var K=wy(),Qf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function Dy(){if(_0)return oe;_0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function g(L,tt,St){this.props=L,this.context=tt,this.refs=S,this.updater=St||E}g.prototype.isReactComponent={},g.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},g.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function z(){}z.prototype=g.prototype;function N(L,tt,St){this.props=L,this.context=tt,this.refs=S,this.updater=St||E}var D=N.prototype=new z;D.constructor=N,C(D,g.prototype),D.isPureReactComponent=!0;var $=Array.isArray;function G(){}var O={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function w(L,tt,St){var k=St.ref;return{$$typeof:o,type:L,key:tt,ref:k!==void 0?k:null,props:St}}function T(L,tt){return w(L.type,tt,L.props)}function F(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ct(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(St){return tt[St]})}var rt=/\/+/g;function gt(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?ct(""+L.key):tt.toString(36)}function xt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,tt,St,k,ft){var At=typeof L;(At==="undefined"||At==="boolean")&&(L=null);var Mt=!1;if(L===null)Mt=!0;else switch(At){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(L.$$typeof){case o:case e:Mt=!0;break;case _:return Mt=L._init,P(Mt(L._payload),tt,St,k,ft)}}if(Mt)return ft=ft(L),Mt=k===""?"."+gt(L,0):k,$(ft)?(St="",Mt!=null&&(St=Mt.replace(rt,"$&/")+"/"),P(ft,tt,St,"",function(mt){return mt})):ft!=null&&(F(ft)&&(ft=T(ft,St+(ft.key==null||L&&L.key===ft.key?"":(""+ft.key).replace(rt,"$&/")+"/")+Mt)),tt.push(ft)),1;Mt=0;var zt=k===""?".":k+":";if($(L))for(var Ft=0;Ft<L.length;Ft++)k=L[Ft],At=zt+gt(k,Ft),Mt+=P(k,tt,St,At,ft);else if(Ft=M(L),typeof Ft=="function")for(L=Ft.call(L),Ft=0;!(k=L.next()).done;)k=k.value,At=zt+gt(k,Ft++),Mt+=P(k,tt,St,At,ft);else if(At==="object"){if(typeof L.then=="function")return P(xt(L),tt,St,k,ft);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function Z(L,tt,St){if(L==null)return L;var k=[],ft=0;return P(L,k,"","",function(At){return tt.call(St,At,ft++)}),k}function j(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(St){(L._status===0||L._status===-1)&&(L._status=1,L._result=St)},function(St){(L._status===0||L._status===-1)&&(L._status=2,L._result=St)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var Tt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},bt={map:Z,forEach:function(L,tt,St){Z(L,function(){tt.apply(this,arguments)},St)},count:function(L){var tt=0;return Z(L,function(){tt++}),tt},toArray:function(L){return Z(L,function(tt){return tt})||[]},only:function(L){if(!F(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return oe.Activity=v,oe.Children=bt,oe.Component=g,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=N,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,oe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(L,tt,St){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var k=C({},L.props),ft=L.key;if(tt!=null)for(At in tt.key!==void 0&&(ft=""+tt.key),tt)!B.call(tt,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&tt.ref===void 0||(k[At]=tt[At]);var At=arguments.length-2;if(At===1)k.children=St;else if(1<At){for(var Mt=Array(At),zt=0;zt<At;zt++)Mt[zt]=arguments[zt+2];k.children=Mt}return w(L.type,ft,k)},oe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},oe.createElement=function(L,tt,St){var k,ft={},At=null;if(tt!=null)for(k in tt.key!==void 0&&(At=""+tt.key),tt)B.call(tt,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(ft[k]=tt[k]);var Mt=arguments.length-2;if(Mt===1)ft.children=St;else if(1<Mt){for(var zt=Array(Mt),Ft=0;Ft<Mt;Ft++)zt[Ft]=arguments[Ft+2];ft.children=zt}if(L&&L.defaultProps)for(k in Mt=L.defaultProps,Mt)ft[k]===void 0&&(ft[k]=Mt[k]);return w(L,At,ft)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:d,render:L}},oe.isValidElement=F,oe.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:j}},oe.memo=function(L,tt){return{$$typeof:p,type:L,compare:tt===void 0?null:tt}},oe.startTransition=function(L){var tt=O.T,St={};O.T=St;try{var k=L(),ft=O.S;ft!==null&&ft(St,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(G,Tt)}catch(At){Tt(At)}finally{tt!==null&&St.types!==null&&(tt.types=St.types),O.T=tt}},oe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},oe.use=function(L){return O.H.use(L)},oe.useActionState=function(L,tt,St){return O.H.useActionState(L,tt,St)},oe.useCallback=function(L,tt){return O.H.useCallback(L,tt)},oe.useContext=function(L){return O.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,tt){return O.H.useDeferredValue(L,tt)},oe.useEffect=function(L,tt){return O.H.useEffect(L,tt)},oe.useEffectEvent=function(L){return O.H.useEffectEvent(L)},oe.useId=function(){return O.H.useId()},oe.useImperativeHandle=function(L,tt,St){return O.H.useImperativeHandle(L,tt,St)},oe.useInsertionEffect=function(L,tt){return O.H.useInsertionEffect(L,tt)},oe.useLayoutEffect=function(L,tt){return O.H.useLayoutEffect(L,tt)},oe.useMemo=function(L,tt){return O.H.useMemo(L,tt)},oe.useOptimistic=function(L,tt){return O.H.useOptimistic(L,tt)},oe.useReducer=function(L,tt,St){return O.H.useReducer(L,tt,St)},oe.useRef=function(L){return O.H.useRef(L)},oe.useState=function(L){return O.H.useState(L)},oe.useSyncExternalStore=function(L,tt,St){return O.H.useSyncExternalStore(L,tt,St)},oe.useTransition=function(){return O.H.useTransition()},oe.version="19.2.4",oe}var v0;function Sd(){return v0||(v0=1,Qf.exports=Dy()),Qf.exports}var fe=Sd();const Nh=F_(fe);var Jf={exports:{}},Lo={},$f={exports:{}},th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function Uy(){return x0||(x0=1,(function(o){function e(P,Z){var j=P.length;P.push(Z);t:for(;0<j;){var Tt=j-1>>>1,bt=P[Tt];if(0<l(bt,Z))P[Tt]=Z,P[j]=bt,j=Tt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Z=P[0],j=P.pop();if(j!==Z){P[0]=j;t:for(var Tt=0,bt=P.length,L=bt>>>1;Tt<L;){var tt=2*(Tt+1)-1,St=P[tt],k=tt+1,ft=P[k];if(0>l(St,j))k<bt&&0>l(ft,St)?(P[Tt]=ft,P[k]=j,Tt=k):(P[Tt]=St,P[tt]=j,Tt=tt);else if(k<bt&&0>l(ft,j))P[Tt]=ft,P[k]=j,Tt=k;else break t}}return Z}function l(P,Z){var j=P.sortIndex-Z.sortIndex;return j!==0?j:P.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,y=3,M=!1,E=!1,C=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=P)s(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function $(P){if(C=!1,D(P),!E)if(i(m)!==null)E=!0,G||(G=!0,ct());else{var Z=i(p);Z!==null&&xt($,Z.startTime-P)}}var G=!1,O=-1,B=5,w=-1;function T(){return S?!0:!(o.unstable_now()-w<B)}function F(){if(S=!1,G){var P=o.unstable_now();w=P;var Z=!0;try{t:{E=!1,C&&(C=!1,z(O),O=-1),M=!0;var j=y;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&T());){var Tt=v.callback;if(typeof Tt=="function"){v.callback=null,y=v.priorityLevel;var bt=Tt(v.expirationTime<=P);if(P=o.unstable_now(),typeof bt=="function"){v.callback=bt,D(P),Z=!0;break e}v===i(m)&&s(m),D(P)}else s(m);v=i(m)}if(v!==null)Z=!0;else{var L=i(p);L!==null&&xt($,L.startTime-P),Z=!1}}break t}finally{v=null,y=j,M=!1}Z=void 0}}finally{Z?ct():G=!1}}}var ct;if(typeof N=="function")ct=function(){N(F)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=F,ct=function(){gt.postMessage(null)}}else ct=function(){g(F,0)};function xt(P,Z){O=g(function(){P(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(P){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var j=y;y=Z;try{return P()}finally{y=j}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=y;y=P;try{return Z()}finally{y=j}},o.unstable_scheduleCallback=function(P,Z,j){var Tt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Tt+j:Tt):j=Tt,P){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=j+bt,P={id:_++,callback:Z,priorityLevel:P,startTime:j,expirationTime:bt,sortIndex:-1},j>Tt?(P.sortIndex=j,e(p,P),i(m)===null&&P===i(p)&&(C?(z(O),O=-1):C=!0,xt($,j-Tt))):(P.sortIndex=bt,e(m,P),E||M||(E=!0,G||(G=!0,ct()))),P},o.unstable_shouldYield=T,o.unstable_wrapCallback=function(P){var Z=y;return function(){var j=y;y=Z;try{return P.apply(this,arguments)}finally{y=j}}}})(th)),th}var y0;function Ly(){return y0||(y0=1,$f.exports=Uy()),$f.exports}var eh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function Ny(){if(S0)return Rn;S0=1;var o=Sd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Rn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var M0;function Oy(){if(M0)return eh.exports;M0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),eh.exports=Ny(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function Py(){if(E0)return Lo;E0=1;var o=Ly(),e=Sd(),i=Oy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,b=c.child;b;){if(b===a){x=!0,a=c,r=f;break}if(b===r){x=!0,r=c,a=f;break}b=b.sibling}if(!x){for(b=f.child;b;){if(b===a){x=!0,a=f,r=c;break}if(b===r){x=!0,r=f,a=c;break}b=b.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case $:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case B:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var xt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Tt=[],bt=-1;function L(t){return{current:t}}function tt(t){0>bt||(t.current=Tt[bt],Tt[bt]=null,bt--)}function St(t,n){bt++,Tt[bt]=t.current,t.current=n}var k=L(null),ft=L(null),At=L(null),Mt=L(null);function zt(t,n){switch(St(At,n),St(ft,t),St(k,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Bg(n),t=Fg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(k),St(k,t)}function Ft(){tt(k),tt(ft),tt(At)}function mt(t){t.memoizedState!==null&&St(Mt,t);var n=k.current,a=Fg(n,t.type);n!==a&&(St(ft,t),St(k,a))}function ie(t){ft.current===t&&(tt(k),tt(ft)),Mt.current===t&&(tt(Mt),Ro._currentValue=j)}var se,Oe;function X(t){if(se===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);se=n&&n[1]||"",Oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+t+Oe}var _e=!1;function $t(t,n){if(!t||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(lt){var at=lt}Reflect.construct(t,[],yt)}else{try{yt.call()}catch(lt){at=lt}t.call(yt.prototype)}}else{try{throw Error()}catch(lt){at=lt}(yt=t())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],b=f[1];if(x&&b){var I=x.split(`
`),J=b.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===J.length)for(r=I.length-1,c=J.length-1;1<=r&&0<=c&&I[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==J[c]){var ht=`
`+I[r].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=r&&0<=c);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?X(a):""}function le(t,n){switch(t.tag){case 26:case 27:case 5:return X(t.type);case 16:return X("Lazy");case 13:return t.child!==n&&n!==null?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return $t(t.type,!1);case 11:return $t(t.type.render,!1);case 1:return $t(t.type,!0);case 31:return X("Activity");default:return""}}function Xt(t){try{var n="",a=null;do n+=le(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Te=Object.prototype.hasOwnProperty,Kt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,A=o.unstable_shouldYield,it=o.unstable_requestPaint,dt=o.unstable_now,Et=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,Wt=o.unstable_UserBlockingPriority,Lt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,me=o.unstable_IdlePriority,Ct=o.log,Gt=o.unstable_setDisableYieldValue,Qt=null,Zt=null;function vt(t){if(typeof Ct=="function"&&Gt(t),Zt&&typeof Zt.setStrictMode=="function")try{Zt.setStrictMode(Qt,t)}catch{}}var It=Math.clz32?Math.clz32:V,Ht=Math.log,re=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(Ht(t)/re|0)|0}var Rt=256,nt=262144,ut=4194304;function Dt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ut(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=Dt(r):(x&=b,x!==0?c=Dt(x):a||(a=b&~t,a!==0&&(c=Dt(a))))):(b=r&~f,b!==0?c=Dt(b):x!==0?c=Dt(x):a||(a=r&~t,a!==0&&(c=Dt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var t=ut;return ut<<=1,(ut&62914560)===0&&(ut=4194304),t}function Ae(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,r,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,I=t.expirationTimes,J=t.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-It(a),yt=1<<ht;b[ht]=0,I[ht]=-1;var at=J[ht];if(at!==null)for(J[ht]=null,ht=0;ht<at.length;ht++){var lt=at[ht];lt!==null&&(lt.lane&=-536870913)}a&=~yt}r!==0&&Fr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Fr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-It(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Hr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-It(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ci(t,n){var a=n&-n;return a=(a&42)!==0?1:Ja(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ja(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ds(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gr(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:l0(t.type))}function $a(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var _i=Math.random().toString(36).slice(2),Ke="__reactFiber$"+_i,xn="__reactProps$"+_i,Fi="__reactContainer$"+_i,Vr="__reactEvents$"+_i,kc="__reactListeners$"+_i,Xc="__reactHandles$"+_i,R="__reactResources$"+_i,W="__reactMarker$"+_i;function ot(t){delete t[Ke],delete t[xn],delete t[Vr],delete t[kc],delete t[Xc]}function st(t){var n=t[Ke];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Fi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Yg(t);t!==null;){if(a=t[Ke])return a;t=Yg(t)}return n}t=a,a=t.parentNode}return null}function Y(t){if(t=t[Ke]||t[Fi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function wt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Nt(t){var n=t[R];return n||(n=t[R]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ot(t){t[W]=!0}var Yt=new Set,ae={};function ne(t,n){Vt(t,n),Vt(t+"Capture",n)}function Vt(t,n){for(ae[t]=n,t=0;t<n.length;t++)Yt.add(n[t])}var be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ze={},Fe={};function bn(t){return Te.call(Fe,t)?!0:Te.call(ze,t)?!1:be.test(t)?Fe[t]=!0:(ze[t]=!0,!1)}function Me(t,n,a){if(bn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function cn(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _a(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function yn(t){if(!t._valueTracker){var n=Pn(t)?"checked":"value";t._valueTracker=_a(t,n,""+t[n])}}function va(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Pn(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Ne(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ni=/[\n"\\]/g;function mn(t){return t.replace(ni,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,r,c,f,x,b){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ce(n)):t.value!==""+ce(n)&&(t.value=""+ce(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?ii(t,x,ce(n)):a!=null?ii(t,x,ce(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ce(b):t.removeAttribute("name")}function vi(t,n,a,r,c,f,x,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yn(t);return}a=a!=null?""+ce(a):"",n=n!=null?""+ce(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),yn(t)}function ii(t,n,a){n==="number"&&Ne(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Hi(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ce(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Nd(t,n,a){if(n!=null&&(n=""+ce(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ce(a):""}function Od(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(xt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ce(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),yn(t)}function Us(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ev=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pd(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Ev.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function zd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Pd(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Pd(t,f,n[f])}function Wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return bv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Gi(){}var Yc=null;function qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ls=null,Ns=null;function Id(t){var n=Y(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[xn]||null;if(!c)throw Error(s(90));An(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&va(r)}break t;case"textarea":Nd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Hi(t,!!a.multiple,n,!1)}}}var jc=!1;function Bd(t,n,a){if(jc)return t(n,a);jc=!0;try{var r=t(n);return r}finally{if(jc=!1,(Ls!==null||Ns!==null)&&(Il(),Ls&&(n=Ls,t=Ns,Ns=Ls=null,Id(n),t)))for(n=0;n<t.length;n++)Id(t[n])}}function kr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Vi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Zc=!1}var xa=null,Kc=null,Qo=null;function Fd(){if(Qo)return Qo;var t,n=Kc,a=n.length,r,c="value"in xa?xa.value:xa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return Qo=c.slice(t,1<r?1-r:void 0)}function Jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Hd(){return!1}function zn(t){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Hd,this.isPropagationStopped=Hd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=zn(ts),Wr=v({},ts,{view:0,detail:0}),Av=zn(Wr),Qc,Jc,Yr,el=v({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(Qc=t.screenX-Yr.screenX,Jc=t.screenY-Yr.screenY):Jc=Qc=0,Yr=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),Gd=zn(el),Rv=v({},el,{dataTransfer:0}),Cv=zn(Rv),wv=v({},Wr,{relatedTarget:0}),$c=zn(wv),Dv=v({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=zn(Dv),Lv=v({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nv=zn(Lv),Ov=v({},ts,{data:0}),Vd=zn(Ov),Pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Iv[t])?!!n[t]:!1}function tu(){return Bv}var Fv=v({},Wr,{key:function(t){if(t.key){var n=Pv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hv=zn(Fv),Gv=v({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=zn(Gv),Vv=v({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),kv=zn(Vv),Xv=v({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=zn(Xv),Yv=v({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=zn(Yv),jv=v({},ts,{newState:0,oldState:0}),Zv=zn(jv),Kv=[9,13,27,32],eu=Vi&&"CompositionEvent"in window,qr=null;Vi&&"documentMode"in document&&(qr=document.documentMode);var Qv=Vi&&"TextEvent"in window&&!qr,Xd=Vi&&(!eu||qr&&8<qr&&11>=qr),Wd=" ",Yd=!1;function qd(t,n){switch(t){case"keyup":return Kv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function Jv(t,n){switch(t){case"compositionend":return jd(n);case"keypress":return n.which!==32?null:(Yd=!0,Wd);case"textInput":return t=n.data,t===Wd&&Yd?null:t;default:return null}}function $v(t,n){if(Os)return t==="compositionend"||!eu&&qd(t,n)?(t=Fd(),Qo=Kc=xa=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xd&&n.locale!=="ko"?null:n.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!tx[t.type]:n==="textarea"}function Kd(t,n,a,r){Ls?Ns?Ns.push(r):Ns=[r]:Ls=r,n=Xl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var jr=null,Zr=null;function ex(t){Lg(t,0)}function nl(t){var n=wt(t);if(va(n))return t}function Qd(t,n){if(t==="change")return n}var Jd=!1;if(Vi){var nu;if(Vi){var iu="oninput"in document;if(!iu){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),iu=typeof $d.oninput=="function"}nu=iu}else nu=!1;Jd=nu&&(!document.documentMode||9<document.documentMode)}function tp(){jr&&(jr.detachEvent("onpropertychange",ep),Zr=jr=null)}function ep(t){if(t.propertyName==="value"&&nl(Zr)){var n=[];Kd(n,Zr,t,qc(t)),Bd(ex,n)}}function nx(t,n,a){t==="focusin"?(tp(),jr=n,Zr=a,jr.attachEvent("onpropertychange",ep)):t==="focusout"&&tp()}function ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(Zr)}function ax(t,n){if(t==="click")return nl(n)}function sx(t,n){if(t==="input"||t==="change")return nl(n)}function rx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:rx;function Kr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Te.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,n){var a=np(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=np(a)}}function ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ne(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ne(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ox=Vi&&"documentMode"in document&&11>=document.documentMode,Ps=null,su=null,Qr=null,ru=!1;function rp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Ps==null||Ps!==Ne(r)||(r=Ps,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Kr(Qr,r)||(Qr=r,r=Xl(su,"onSelect"),0<r.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ps)))}function es(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var zs={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionrun:es("Transition","TransitionRun"),transitionstart:es("Transition","TransitionStart"),transitioncancel:es("Transition","TransitionCancel"),transitionend:es("Transition","TransitionEnd")},ou={},op={};Vi&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function ns(t){if(ou[t])return ou[t];if(!zs[t])return t;var n=zs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return ou[t]=n[a];return t}var lp=ns("animationend"),cp=ns("animationiteration"),up=ns("animationstart"),lx=ns("transitionrun"),cx=ns("transitionstart"),ux=ns("transitioncancel"),fp=ns("transitionend"),hp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function xi(t,n){hp.set(t,n),ne(n,[t])}var il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Is=0,cu=0;function al(){for(var t=Is,n=cu=Is=0;n<t;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&dp(a,c,f)}}function sl(t,n,a,r){ai[Is++]=t,ai[Is++]=n,ai[Is++]=a,ai[Is++]=r,cu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function uu(t,n,a,r){return sl(t,n,a,r),rl(t)}function is(t,n){return sl(t,null,null,n),rl(t)}function dp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-It(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function rl(t){if(50<yo)throw yo=0,yf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Bs={};function fx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,r){return new fx(t,n,a,r)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ki(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ol(t,n,a,r,c,f){var x=0;if(r=t,typeof t=="function")fu(t)&&(x=1);else if(typeof t=="string")x=gy(t,a,k.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Yn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return as(a.children,c,f,n);case S:x=8,c|=24;break;case g:return t=Yn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case $:return t=Yn(13,a,n,c),t.elementType=$,t.lanes=f,t;case G:return t=Yn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break t;case z:x=9;break t;case D:x=11;break t;case O:x=14;break t;case B:x=16,r=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(x,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function as(t,n,a,r){return t=Yn(7,t,r,n),t.lanes=a,t}function hu(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function mp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function du(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var gp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xt(n)},gp.set(t,n),n)}return{value:t,source:n,stack:Xt(n)}}var Fs=[],Hs=0,ll=null,Jr=0,ri=[],oi=0,ya=null,wi=1,Di="";function Xi(t,n){Fs[Hs++]=Jr,Fs[Hs++]=ll,ll=t,Jr=n}function _p(t,n,a){ri[oi++]=wi,ri[oi++]=Di,ri[oi++]=ya,ya=t;var r=wi;t=Di;var c=32-It(r)-1;r&=~(1<<c),a+=1;var f=32-It(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,wi=1<<32-It(n)+c|a<<c|r,Di=f+t}else wi=1<<f|a<<c|r,Di=t}function pu(t){t.return!==null&&(Xi(t,1),_p(t,1,0))}function mu(t){for(;t===ll;)ll=Fs[--Hs],Fs[Hs]=null,Jr=Fs[--Hs],Fs[Hs]=null;for(;t===ya;)ya=ri[--oi],ri[oi]=null,Di=ri[--oi],ri[oi]=null,wi=ri[--oi],ri[oi]=null}function vp(t,n){ri[oi++]=wi,ri[oi++]=Di,ri[oi++]=ya,wi=n.id,Di=n.overflow,ya=t}var Sn=null,qe=null,Ee=!1,Sa=null,li=!1,gu=Error(s(519));function Ma(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $r(si(n,t)),gu}function xp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ke]=t,n[xn]=r,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)xe(Mo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),vi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Od(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||zg(n.textContent,a)?(r.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),r.onScroll!=null&&xe("scroll",n),r.onScrollEnd!=null&&xe("scrollend",n),r.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||Ma(t,!0)}function yp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Sn=Sn.return}}function Gs(t){if(t!==Sn)return!1;if(!Ee)return yp(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pf(t.type,t.memoizedProps)),a=!a),a&&qe&&Ma(t),yp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=Wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=Wg(t)}else n===27?(n=qe,za(t.type)?(t=Hf,Hf=null,qe=t):qe=n):qe=Sn?ui(t.stateNode.nextSibling):null;return!0}function ss(){qe=Sn=null,Ee=!1}function _u(){var t=Sa;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),Sa=null),t}function $r(t){Sa===null?Sa=[t]:Sa.push(t)}var vu=L(null),rs=null,Wi=null;function Ea(t,n,a){St(vu,n._currentValue),n._currentValue=a}function Yi(t){t._currentValue=vu.current,tt(vu)}function xu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function yu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),xu(f.return,a,t),r||(x=null);break t}f=b.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),xu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Vs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var b=c.type;Wn(c.pendingProps.value,x.value)||(t!==null?t.push(b):t=[b])}}else if(c===Mt.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}c=c.return}t!==null&&yu(n,t,a,r),n.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function os(t){rs=t,Wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Sp(rs,t)}function ul(t,n){return rs===null&&os(t),Sp(t,n)}function Sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(t===null)throw Error(s(308));Wi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Wi=Wi.next=n;return a}var hx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},dx=o.unstable_scheduleCallback,px=o.unstable_NormalPriority,an={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new hx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&dx(px,function(){t.controller.abort()})}var eo=null,Mu=0,ks=0,Xs=null;function mx(t,n){if(eo===null){var a=eo=[];Mu=0,ks=Af(),Xs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Mu++,n.then(Mp,Mp),n}function Mp(){if(--Mu===0&&eo!==null){Xs!==null&&(Xs.status="fulfilled");var t=eo;eo=null,ks=0,Xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function gx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Ep=P.S;P.S=function(t,n){rg=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&mx(t,n),Ep!==null&&Ep(t,n)};var ls=L(null);function Eu(){var t=ls.current;return t!==null?t:We.pooledCache}function fl(t,n){n===null?St(ls,ls.current):St(ls,n.pool)}function Tp(){var t=Eu();return t===null?null:{parent:an._currentValue,pool:t}}var Ws=Error(s(460)),Tu=Error(s(474)),hl=Error(s(542)),dl={then:function(){}};function bp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ap(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t}throw us=n,Ws}}function cs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(us=a,Ws):a}}var us=null;function Rp(){if(us===null)throw Error(s(459));var t=us;return us=null,t}function Cp(t){if(t===Ws||t===hl)throw Error(s(483))}var Ys=null,no=0;function pl(t){var n=no;return no+=1,Ys===null&&(Ys=[]),Ap(Ys,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function wp(t){function n(q,H){if(t){var Q=q.deletions;Q===null?(q.deletions=[H],q.flags|=16):Q.push(H)}}function a(q,H){if(!t)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function r(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function c(q,H){return q=ki(q,H),q.index=0,q.sibling=null,q}function f(q,H,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<H?(q.flags|=67108866,H):Q):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function x(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function b(q,H,Q,_t){return H===null||H.tag!==6?(H=hu(Q,q.mode,_t),H.return=q,H):(H=c(H,Q),H.return=q,H)}function I(q,H,Q,_t){var Jt=Q.type;return Jt===C?ht(q,H,Q.props.children,_t,Q.key):H!==null&&(H.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===B&&cs(Jt)===H.type)?(H=c(H,Q.props),io(H,Q),H.return=q,H):(H=ol(Q.type,Q.key,Q.props,null,q.mode,_t),io(H,Q),H.return=q,H)}function J(q,H,Q,_t){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=du(Q,q.mode,_t),H.return=q,H):(H=c(H,Q.children||[]),H.return=q,H)}function ht(q,H,Q,_t,Jt){return H===null||H.tag!==7?(H=as(Q,q.mode,_t,Jt),H.return=q,H):(H=c(H,Q),H.return=q,H)}function yt(q,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=hu(""+H,q.mode,Q),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return Q=ol(H.type,H.key,H.props,null,q.mode,Q),io(Q,H),Q.return=q,Q;case E:return H=du(H,q.mode,Q),H.return=q,H;case B:return H=cs(H),yt(q,H,Q)}if(xt(H)||ct(H))return H=as(H,q.mode,Q,null),H.return=q,H;if(typeof H.then=="function")return yt(q,pl(H),Q);if(H.$$typeof===N)return yt(q,ul(q,H),Q);ml(q,H)}return null}function at(q,H,Q,_t){var Jt=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Jt!==null?null:b(q,H,""+Q,_t);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Jt?I(q,H,Q,_t):null;case E:return Q.key===Jt?J(q,H,Q,_t):null;case B:return Q=cs(Q),at(q,H,Q,_t)}if(xt(Q)||ct(Q))return Jt!==null?null:ht(q,H,Q,_t,null);if(typeof Q.then=="function")return at(q,H,pl(Q),_t);if(Q.$$typeof===N)return at(q,H,ul(q,Q),_t);ml(q,Q)}return null}function lt(q,H,Q,_t,Jt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return q=q.get(Q)||null,b(H,q,""+_t,Jt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return q=q.get(_t.key===null?Q:_t.key)||null,I(H,q,_t,Jt);case E:return q=q.get(_t.key===null?Q:_t.key)||null,J(H,q,_t,Jt);case B:return _t=cs(_t),lt(q,H,Q,_t,Jt)}if(xt(_t)||ct(_t))return q=q.get(Q)||null,ht(H,q,_t,Jt,null);if(typeof _t.then=="function")return lt(q,H,Q,pl(_t),Jt);if(_t.$$typeof===N)return lt(q,H,Q,ul(H,_t),Jt);ml(H,_t)}return null}function kt(q,H,Q,_t){for(var Jt=null,De=null,jt=H,he=H=0,Se=null;jt!==null&&he<Q.length;he++){jt.index>he?(Se=jt,jt=null):Se=jt.sibling;var Ue=at(q,jt,Q[he],_t);if(Ue===null){jt===null&&(jt=Se);break}t&&jt&&Ue.alternate===null&&n(q,jt),H=f(Ue,H,he),De===null?Jt=Ue:De.sibling=Ue,De=Ue,jt=Se}if(he===Q.length)return a(q,jt),Ee&&Xi(q,he),Jt;if(jt===null){for(;he<Q.length;he++)jt=yt(q,Q[he],_t),jt!==null&&(H=f(jt,H,he),De===null?Jt=jt:De.sibling=jt,De=jt);return Ee&&Xi(q,he),Jt}for(jt=r(jt);he<Q.length;he++)Se=lt(jt,q,he,Q[he],_t),Se!==null&&(t&&Se.alternate!==null&&jt.delete(Se.key===null?he:Se.key),H=f(Se,H,he),De===null?Jt=Se:De.sibling=Se,De=Se);return t&&jt.forEach(function(Ga){return n(q,Ga)}),Ee&&Xi(q,he),Jt}function ee(q,H,Q,_t){if(Q==null)throw Error(s(151));for(var Jt=null,De=null,jt=H,he=H=0,Se=null,Ue=Q.next();jt!==null&&!Ue.done;he++,Ue=Q.next()){jt.index>he?(Se=jt,jt=null):Se=jt.sibling;var Ga=at(q,jt,Ue.value,_t);if(Ga===null){jt===null&&(jt=Se);break}t&&jt&&Ga.alternate===null&&n(q,jt),H=f(Ga,H,he),De===null?Jt=Ga:De.sibling=Ga,De=Ga,jt=Se}if(Ue.done)return a(q,jt),Ee&&Xi(q,he),Jt;if(jt===null){for(;!Ue.done;he++,Ue=Q.next())Ue=yt(q,Ue.value,_t),Ue!==null&&(H=f(Ue,H,he),De===null?Jt=Ue:De.sibling=Ue,De=Ue);return Ee&&Xi(q,he),Jt}for(jt=r(jt);!Ue.done;he++,Ue=Q.next())Ue=lt(jt,q,he,Ue.value,_t),Ue!==null&&(t&&Ue.alternate!==null&&jt.delete(Ue.key===null?he:Ue.key),H=f(Ue,H,he),De===null?Jt=Ue:De.sibling=Ue,De=Ue);return t&&jt.forEach(function(Ry){return n(q,Ry)}),Ee&&Xi(q,he),Jt}function Ve(q,H,Q,_t){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Jt=Q.key;H!==null;){if(H.key===Jt){if(Jt=Q.type,Jt===C){if(H.tag===7){a(q,H.sibling),_t=c(H,Q.props.children),_t.return=q,q=_t;break t}}else if(H.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===B&&cs(Jt)===H.type){a(q,H.sibling),_t=c(H,Q.props),io(_t,Q),_t.return=q,q=_t;break t}a(q,H);break}else n(q,H);H=H.sibling}Q.type===C?(_t=as(Q.props.children,q.mode,_t,Q.key),_t.return=q,q=_t):(_t=ol(Q.type,Q.key,Q.props,null,q.mode,_t),io(_t,Q),_t.return=q,q=_t)}return x(q);case E:t:{for(Jt=Q.key;H!==null;){if(H.key===Jt)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(q,H.sibling),_t=c(H,Q.children||[]),_t.return=q,q=_t;break t}else{a(q,H);break}else n(q,H);H=H.sibling}_t=du(Q,q.mode,_t),_t.return=q,q=_t}return x(q);case B:return Q=cs(Q),Ve(q,H,Q,_t)}if(xt(Q))return kt(q,H,Q,_t);if(ct(Q)){if(Jt=ct(Q),typeof Jt!="function")throw Error(s(150));return Q=Jt.call(Q),ee(q,H,Q,_t)}if(typeof Q.then=="function")return Ve(q,H,pl(Q),_t);if(Q.$$typeof===N)return Ve(q,H,ul(q,Q),_t);ml(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(q,H.sibling),_t=c(H,Q),_t.return=q,q=_t):(a(q,H),_t=hu(Q,q.mode,_t),_t.return=q,q=_t),x(q)):a(q,H)}return function(q,H,Q,_t){try{no=0;var Jt=Ve(q,H,Q,_t);return Ys=null,Jt}catch(jt){if(jt===Ws||jt===hl)throw jt;var De=Yn(29,jt,null,q.mode);return De.lanes=_t,De.return=q,De}finally{}}}var fs=wp(!0),Dp=wp(!1),Ta=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Aa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=rl(t),dp(t,null,a),n}return sl(t,r,n,a),rl(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Hr(t,a)}}function Ru(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cu=!1;function so(){if(Cu){var t=Xs;if(t!==null)throw t}}function ro(t,n,a,r){Cu=!1;var c=t.updateQueue;Ta=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,J=I.next;I.next=null,x===null?f=J:x.next=J,x=I;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==x&&(b===null?ht.firstBaseUpdate=J:b.next=J,ht.lastBaseUpdate=I))}if(f!==null){var yt=c.baseState;x=0,ht=J=I=null,b=f;do{var at=b.lane&-536870913,lt=at!==b.lane;if(lt?(ye&at)===at:(r&at)===at){at!==0&&at===ks&&(Cu=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var kt=t,ee=b;at=n;var Ve=a;switch(ee.tag){case 1:if(kt=ee.payload,typeof kt=="function"){yt=kt.call(Ve,yt,at);break t}yt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ee.payload,at=typeof kt=="function"?kt.call(Ve,yt,at):kt,at==null)break t;yt=v({},yt,at);break t;case 2:Ta=!0}}at=b.callback,at!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(J=ht=lt,I=yt):ht=ht.next=lt,x|=at;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ht===null&&(I=yt),c.baseState=I,c.firstBaseUpdate=J,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Ua|=x,t.lanes=x,t.memoizedState=yt}}function Up(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Lp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Up(a[t],n)}var qs=L(null),gl=L(0);function Np(t,n){t=ea,St(gl,t),St(qs,n),ea=t|n.baseLanes}function wu(){St(gl,ea),St(qs,qs.current)}function Du(){ea=gl.current,tt(qs),tt(gl)}var qn=L(null),ci=null;function Ra(t){var n=t.alternate;St($e,$e.current&1),St(qn,t),ci===null&&(n===null||qs.current!==null||n.memoizedState!==null)&&(ci=t)}function Uu(t){St($e,$e.current),St(qn,t),ci===null&&(ci=t)}function Op(t){t.tag===22?(St($e,$e.current),St(qn,t),ci===null&&(ci=t)):Ca()}function Ca(){St($e,$e.current),St(qn,qn.current)}function jn(t){tt(qn),ci===t&&(ci=null),tt($e)}var $e=L(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,ue=null,He=null,sn=null,vl=!1,js=!1,hs=!1,xl=0,oo=0,Zs=null,_x=0;function Qe(){throw Error(s(321))}function Lu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Nu(t,n,a,r,c,f){return qi=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?_m:ju,hs=!1,f=a(r,c),hs=!1,js&&(f=zp(n,a,r,c)),Pp(t),f}function Pp(t){P.H=uo;var n=He!==null&&He.next!==null;if(qi=0,sn=He=ue=null,vl=!1,oo=0,Zs=null,n)throw Error(s(300));t===null||rn||(t=t.dependencies,t!==null&&cl(t)&&(rn=!0))}function zp(t,n,a,r){ue=t;var c=0;do{if(js&&(Zs=null),oo=0,js=!1,25<=c)throw Error(s(301));if(c+=1,sn=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=vm,f=n(a,r)}while(js);return f}function vx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(ue.flags|=1024),n}function Ou(){var t=xl!==0;return xl=0,t}function Pu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zu(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}qi=0,sn=He=ue=null,js=!1,oo=xl=0,Zs=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?ue.memoizedState=sn=t:sn=sn.next=t,sn}function tn(){if(He===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=sn===null?ue.memoizedState:sn.next;if(n!==null)sn=n,He=t;else{if(t===null)throw ue.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},sn===null?ue.memoizedState=sn=t:sn=sn.next=t}return sn}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,Zs===null&&(Zs=[]),t=Ap(Zs,t,n),n=ue,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?_m:ju),t}function Sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===N)return Mn(t)}throw Error(s(438,String(t)))}function Iu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=T;return n.index++,a}function ji(t,n){return typeof n=="function"?n(t):n}function Ml(t){var n=tn();return Bu(n,He,t)}function Bu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=x=null,I=null,J=n,ht=!1;do{var yt=J.lane&-536870913;if(yt!==J.lane?(ye&yt)===yt:(qi&yt)===yt){var at=J.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),yt===ks&&(ht=!0);else if((qi&at)===at){J=J.next,at===ks&&(ht=!0);continue}else yt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(b=I=yt,x=f):I=I.next=yt,ue.lanes|=at,Ua|=at;yt=J.action,hs&&a(f,yt),f=J.hasEagerState?J.eagerState:a(f,yt)}else at={lane:yt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(b=I=at,x=f):I=I.next=at,ue.lanes|=yt,Ua|=yt;J=J.next}while(J!==null&&J!==n);if(I===null?x=f:I.next=b,!Wn(f,t.memoizedState)&&(rn=!0,ht&&(a=Xs,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Fu(t){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Wn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Ip(t,n,a){var r=ue,c=tn(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Wn((He||c).memoizedState,a);if(x&&(c.memoizedState=a,rn=!0),c=c.queue,Vu(Hp.bind(null,r,c,t),[t]),c.getSnapshot!==n||x||sn!==null&&sn.memoizedState.tag&1){if(r.flags|=2048,Ks(9,{destroy:void 0},Fp.bind(null,r,c,a,n),null),We===null)throw Error(s(349));f||(qi&127)!==0||Bp(r,n,a)}return a}function Bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=yl(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fp(t,n,a,r){n.value=a,n.getSnapshot=r,Gp(n)&&Vp(t)}function Hp(t,n,a){return a(function(){Gp(n)&&Vp(t)})}function Gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Vp(t){var n=is(t,2);n!==null&&Gn(n,t,2)}function Hu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),hs){vt(!0);try{a()}finally{vt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:t},n}function kp(t,n,a,r){return t.baseState=a,Bu(t,He,typeof r=="function"?r:ji)}function xx(t,n,a,r,c){if(bl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Xp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Xp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var b=a(c,r),I=P.S;I!==null&&I(x,b),Wp(t,n,b)}catch(J){Gu(t,n,J)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(c,r),Wp(t,n,f)}catch(J){Gu(t,n,J)}}function Wp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Yp(t,n,r)},function(r){return Gu(t,n,r)}):Yp(t,n,a)}function Yp(t,n,a){n.status="fulfilled",n.value=a,qp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Xp(t,a)))}function Gu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,qp(n),n=n.next;while(n!==r)}t.action=null}function qp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function jp(t,n){return n}function Zp(t,n){if(Ee){var a=We.formState;if(a!==null){t:{var r=ue;if(Ee){if(qe){e:{for(var c=qe,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qe=ui(c.nextSibling),r=c.data==="F!";break t}}Ma(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jp,lastRenderedState:n},a.queue=r,a=pm.bind(null,ue,r),r.dispatch=a,r=Hu(!1),f=qu.bind(null,ue,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=xx.bind(null,ue,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Kp(t){var n=tn();return Qp(n,He,t)}function Qp(t,n,a){if(n=Bu(t,n,jp)[0],t=Ml(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=lo(n)}catch(x){throw x===Ws?hl:x}else r=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Ks(9,{destroy:void 0},yx.bind(null,c,a),null)),[r,f,t]}function yx(t,n){t.action=n}function Jp(t){var n=tn(),a=He;if(a!==null)return Qp(n,a,t);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ks(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=yl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function $p(){return tn().memoizedState}function El(t,n,a,r){var c=Ln();ue.flags|=t,c.memoizedState=Ks(1|n,{destroy:void 0},a,r===void 0?null:r)}function Tl(t,n,a,r){var c=tn();r=r===void 0?null:r;var f=c.memoizedState.inst;He!==null&&r!==null&&Lu(r,He.memoizedState.deps)?c.memoizedState=Ks(n,f,a,r):(ue.flags|=t,c.memoizedState=Ks(1|n,f,a,r))}function tm(t,n){El(8390656,8,t,n)}function Vu(t,n){Tl(2048,8,t,n)}function Sx(t){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=yl(),ue.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function em(t){var n=tn().memoizedState;return Sx({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function nm(t,n){return Tl(4,2,t,n)}function im(t,n){return Tl(4,4,t,n)}function am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sm(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,am.bind(null,n,t),a)}function ku(){}function rm(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Lu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function om(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Lu(n,r[1]))return r[0];if(r=t(),hs){vt(!0);try{t()}finally{vt(!1)}}return a.memoizedState=[r,n],r}function Xu(t,n,a){return a===void 0||(qi&1073741824)!==0&&(ye&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=lg(),ue.lanes|=t,Ua|=t,a)}function lm(t,n,a,r){return Wn(a,n)?a:qs.current!==null?(t=Xu(t,a,r),Wn(t,n)||(rn=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(ye&261930)===0?(rn=!0,t.memoizedState=a):(t=lg(),ue.lanes|=t,Ua|=t,n)}function cm(t,n,a,r,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var x=P.T,b={};P.T=b,qu(t,!1,n,a);try{var I=c(),J=P.S;if(J!==null&&J(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=gx(I,r);co(t,n,ht,Qn(t))}else co(t,n,r,Qn(t))}catch(yt){co(t,n,{then:function(){},status:"rejected",reason:yt},Qn())}finally{Z.p=f,x!==null&&b.types!==null&&(x.types=b.types),P.T=x}}function Mx(){}function Wu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=um(t).queue;cm(t,c,n,j,a===null?Mx:function(){return fm(t),a(r)})}function um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function fm(t){var n=um(t);n.next===null&&(n=t.alternate.memoizedState),co(t,n.next.queue,{},Qn())}function Yu(){return Mn(Ro)}function hm(){return tn().memoizedState}function dm(){return tn().memoizedState}function Ex(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=ba(a);var r=Aa(n,t,a);r!==null&&(Gn(r,n,a),ao(r,n,a)),n={cache:Su()},t.payload=n;return}n=n.return}}function Tx(t,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(t)?mm(n,a):(a=uu(t,n,a,r),a!==null&&(Gn(a,t,r),gm(a,n,r)))}function pm(t,n,a){var r=Qn();co(t,n,a,r)}function co(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(t))mm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,b=f(x,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,x))return sl(t,n,c,0),We===null&&al(),!1}catch{}finally{}if(a=uu(t,n,c,r),a!==null)return Gn(a,t,r),gm(a,n,r),!0}return!1}function qu(t,n,a,r){if(r={lane:2,revertLane:Af(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bl(t)){if(n)throw Error(s(479))}else n=uu(t,a,r,2),n!==null&&Gn(n,t,2)}function bl(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function mm(t,n){js=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function gm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Hr(t,a)}}var uo={readContext:Mn,use:Sl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};uo.useEffectEvent=Qe;var _m={readContext:Mn,use:Sl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var r=t();if(hs){vt(!0);try{t()}finally{vt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(hs){vt(!0);try{a(n)}finally{vt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=Tx.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Hu(t);var n=t.queue,a=pm.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(t,n){var a=Ln();return Xu(a,t,n)},useTransition:function(){var t=Hu(!1);return t=cm.bind(null,ue,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ue,c=Ln();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(ye&127)!==0||Bp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tm(Hp.bind(null,r,f,t),[t]),r.flags|=2048,Ks(9,{destroy:void 0},Fp.bind(null,r,f,a,n),null),a},useId:function(){var t=Ln(),n=We.identifierPrefix;if(Ee){var a=Di,r=wi;a=(r&~(1<<32-It(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_x++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:Iu,useCacheRefresh:function(){return Ln().memoizedState=Ex.bind(null,ue)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:Mn,use:Sl,useCallback:rm,useContext:Mn,useEffect:Vu,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Ml,useRef:$p,useState:function(){return Ml(ji)},useDebugValue:ku,useDeferredValue:function(t,n){var a=tn();return lm(a,He.memoizedState,t,n)},useTransition:function(){var t=Ml(ji)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Yu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=tn();return kp(a,He,t,n)},useMemoCache:Iu,useCacheRefresh:dm};ju.useEffectEvent=em;var vm={readContext:Mn,use:Sl,useCallback:rm,useContext:Mn,useEffect:Vu,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Fu,useRef:$p,useState:function(){return Fu(ji)},useDebugValue:ku,useDeferredValue:function(t,n){var a=tn();return He===null?Xu(a,t,n):lm(a,He.memoizedState,t,n)},useTransition:function(){var t=Fu(ji)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Yu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=tn();return He!==null?kp(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:dm};vm.useEffectEvent=em;function Zu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ba(r);c.payload=n,a!=null&&(c.callback=a),n=Aa(t,c,r),n!==null&&(Gn(n,t,r),ao(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ba(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Aa(t,c,r),n!==null&&(Gn(n,t,r),ao(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),r=ba(a);r.tag=2,n!=null&&(r.callback=n),n=Aa(t,r,a),n!==null&&(Gn(n,t,a),ao(n,t,a))}};function xm(t,n,a,r,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,r)||!Kr(c,f):!0}function ym(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ku.enqueueReplaceState(n,n.state,null)}function ds(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Sm(t){il(t)}function Mm(t){console.error(t)}function Em(t){il(t)}function Al(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Tm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qu(t,n,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(t,n)},a}function bm(t){return t=ba(t),t.tag=3,t}function Am(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Tm(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Tm(n,a,r),typeof c!="function"&&(La===null?La=new Set([this]):La.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function bx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Bl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ef(t,r,c)),!1;case 22:return a.flags|=65536,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ef(t,r,c)),!1}throw Error(s(435,a.tag))}return Ef(t,r,c),Bl(),!1}if(Ee)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==gu&&(t=Error(s(422),{cause:r}),$r(si(t,a)))):(r!==gu&&(n=Error(s(423),{cause:r}),$r(si(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=si(r,a),c=Qu(t.stateNode,r,c),Ru(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),xo===null?xo=[f]:xo.push(f),Je!==4&&(Je=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Qu(a.stateNode,r,t),Ru(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(La===null||!La.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=bm(c),Am(c,t,a,r),Ru(a,c),!1}a=a.return}while(a!==null);return!1}var Ju=Error(s(461)),rn=!1;function En(t,n,a,r){n.child=t===null?Dp(n,null,a,r):fs(n,t.child,a,r)}function Rm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var b in r)b!=="ref"&&(x[b]=r[b])}else x=r;return os(n),r=Nu(t,n,a,x,f,c),b=Ou(),t!==null&&!rn?(Pu(t,n,c),Zi(t,n,c)):(Ee&&b&&pu(n),n.flags|=1,En(t,n,r,c),n.child)}function Cm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wm(t,n,f,r,c)):(t=ol(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(x,r)&&t.ref===n.ref)return Zi(t,n,c)}return n.flags|=1,t=ki(f,r),t.ref=n.ref,t.return=n,n.child=t}function wm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Kr(f,r)&&t.ref===n.ref)if(rn=!1,n.pendingProps=r=f,of(t,c))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,Zi(t,n,c)}return $u(t,n,a,r,c)}function Dm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Um(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Np(n,f):wu(),Op(n);else return r=n.lanes=536870912,Um(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(fl(n,f.cachePool),Np(n,f),Ca(),n.memoizedState=null):(t!==null&&fl(n,null),wu(),Ca());return En(t,n,c,a),n.child}function fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(t,n,a,r,c){var f=Eu();return f=f===null?null:{parent:an._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&fl(n,null),wu(),Op(n),t!==null&&Vs(t,n,r,!0),n.childLanes=c,null}function Rl(t,n){return n=wl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Lm(t,n,a){return fs(n,t.child,null,a),t=Rl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function Ax(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ee){if(r.mode==="hidden")return t=Rl(n,r),n.lanes=536870912,fo(null,t);if(Uu(n),(t=qe)?(t=Xg(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ya!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,Sn=n,qe=null)):t=null,t===null)throw Ma(n);return n.lanes=536870912,null}return Rl(n,r)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Lm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(rn||Vs(t,n,a,!1),c=(a&t.childLanes)!==0,rn||c){if(r=We,r!==null&&(x=Ci(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,is(t,x),Gn(r,t,x),Ju;Bl(),n=Lm(t,n,a)}else t=f.treeContext,qe=ui(x.nextSibling),Sn=n,Ee=!0,Sa=null,li=!1,t!==null&&vp(n,t),n=Rl(n,r),n.flags|=4096;return n}return t=ki(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $u(t,n,a,r,c){return os(n),a=Nu(t,n,a,r,void 0,c),r=Ou(),t!==null&&!rn?(Pu(t,n,c),Zi(t,n,c)):(Ee&&r&&pu(n),n.flags|=1,En(t,n,a,c),n.child)}function Nm(t,n,a,r,c,f){return os(n),n.updateQueue=null,a=zp(n,r,a,c),Pp(t),r=Ou(),t!==null&&!rn?(Pu(t,n,f),Zi(t,n,f)):(Ee&&r&&pu(n),n.flags|=1,En(t,n,a,f),n.child)}function Om(t,n,a,r,c){if(os(n),n.stateNode===null){var f=Bs,x=a.contextType;typeof x=="object"&&x!==null&&(f=Mn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},bu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Mn(x):Bs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Zu(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Ku.enqueueReplaceState(f,f.state,null),ro(n,r,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,I=ds(a,b);f.props=I;var J=f.context,ht=a.contextType;x=Bs,typeof ht=="object"&&ht!==null&&(x=Mn(ht));var yt=a.getDerivedStateFromProps;ht=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==x)&&ym(n,f,r,x),Ta=!1;var at=n.memoizedState;f.state=at,ro(n,r,f,c),so(),J=n.memoizedState,b||at!==J||Ta?(typeof yt=="function"&&(Zu(n,a,yt,r),J=n.memoizedState),(I=Ta||xm(n,a,I,r,at,J,x))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=x,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Au(t,n),x=n.memoizedProps,ht=ds(a,x),f.props=ht,yt=n.pendingProps,at=f.context,J=a.contextType,I=Bs,typeof J=="object"&&J!==null&&(I=Mn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==yt||at!==I)&&ym(n,f,r,I),Ta=!1,at=n.memoizedState,f.state=at,ro(n,r,f,c),so();var lt=n.memoizedState;x!==yt||at!==lt||Ta||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof b=="function"&&(Zu(n,a,b,r),lt=n.memoizedState),(ht=Ta||xm(n,a,ht,r,at,lt,I)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=I,r=ht):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Cl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=fs(n,t.child,null,c),n.child=fs(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Zi(t,n,c),t}function Pm(t,n,a,r){return ss(),n.flags|=256,En(t,n,a,r),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Tp()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function zm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(c?Ra(n):Ca(),(t=qe)?(t=Xg(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ya!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,Sn=n,qe=null)):t=null,t===null)throw Ma(n);return Ff(t)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,c?(Ca(),c=n.mode,b=wl({mode:"hidden",children:b},c),r=as(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=ef(a),r.childLanes=nf(t,x,a),n.memoizedState=tf,fo(null,r)):(Ra(n),af(n,b))}var I=t.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(Ra(n),n.flags&=-257,n=sf(t,n,a)):n.memoizedState!==null?(Ca(),n.child=t.child,n.flags|=128,n=null):(Ca(),b=r.fallback,c=n.mode,r=wl({mode:"visible",children:r.children},c),b=as(b,c,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,fs(n,t.child,null,a),r=n.child,r.memoizedState=ef(a),r.childLanes=nf(t,x,a),n.memoizedState=tf,n=fo(null,r));else if(Ra(n),Ff(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var J=x.dgst;x=J,r=Error(s(419)),r.stack="",r.digest=x,$r({value:r,source:null,stack:null}),n=sf(t,n,a)}else if(rn||Vs(t,n,a,!1),x=(a&t.childLanes)!==0,rn||x){if(x=We,x!==null&&(r=Ci(x,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,is(t,r),Gn(x,t,r),Ju;Bf(b)||Bl(),n=sf(t,n,a)}else Bf(b)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,qe=ui(b.nextSibling),Sn=n,Ee=!0,Sa=null,li=!1,t!==null&&vp(n,t),n=af(n,r.children),n.flags|=4096);return n}return c?(Ca(),b=r.fallback,c=n.mode,I=t.child,J=I.sibling,r=ki(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,J!==null?b=ki(J,b):(b=as(b,c,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,fo(null,r),r=n.child,b=t.child.memoizedState,b===null?b=ef(a):(c=b.cachePool,c!==null?(I=an._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Tp(),b={baseLanes:b.baseLanes|a,cachePool:c}),r.memoizedState=b,r.childLanes=nf(t,x,a),n.memoizedState=tf,fo(t.child,r)):(Ra(n),a=t.child,t=a.sibling,a=ki(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function wl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function sf(t,n,a){return fs(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Im(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),xu(t.return,n,a)}function rf(t,n,a,r,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function Bm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var x=$e.current,b=(x&2)!==0;if(b?(x=x&1|2,n.flags|=128):x&=1,St($e,x),En(t,n,r,a),r=Ee?Jr:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Im(t,a,n);else if(t.tag===19)Im(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),rf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&_l(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}rf(n,!0,a,null,f,r);break;case"together":rf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Vs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function Rx(t,n,a){switch(n.tag){case 3:zt(n,n.stateNode.containerInfo),Ea(n,an,t.memoizedState.cache),ss();break;case 27:case 5:mt(n);break;case 4:zt(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(t,n,a):(Ra(n),t=Zi(t,n,a),t!==null?t.sibling:null);Ra(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Vs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Bm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St($e,$e.current),r)break;return null;case 22:return n.lanes=0,Dm(t,n,a,n.pendingProps);case 24:Ea(n,an,t.memoizedState.cache)}return Zi(t,n,a)}function Fm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!of(t,a)&&(n.flags&128)===0)return rn=!1,Rx(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,Ee&&(n.flags&1048576)!==0&&_p(n,Jr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=cs(n.elementType),n.type=t,typeof t=="function")fu(t)?(r=ds(t,r),n.tag=1,n=Om(null,n,t,r,a)):(n.tag=0,n=$u(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Rm(null,n,t,r,a);break t}else if(c===O){n.tag=14,n=Cm(null,n,t,r,a);break t}}throw n=gt(t)||t,Error(s(306,n,""))}}return n;case 0:return $u(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ds(r,n.pendingProps),Om(t,n,r,c,a);case 3:t:{if(zt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Au(t,n),ro(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Ea(n,an,r),r!==f.cache&&yu(n,[an],a,!0),so(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pm(t,n,r,a);break t}else if(r!==c){c=si(Error(s(424)),n),$r(c),n=Pm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=ui(t.firstChild),Sn=n,Ee=!0,Sa=null,li=!0,a=Dp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ss(),r===c){n=Zi(t,n,a);break t}En(t,n,r,a)}n=n.child}return n;case 26:return Cl(t,n),t===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,r=Wl(At.current).createElement(a),r[Ke]=n,r[xn]=t,Tn(r,a,t),Ot(r),n.stateNode=r):n.memoizedState=Kg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return mt(n),t===null&&Ee&&(r=n.stateNode=qg(n.type,n.pendingProps,At.current),Sn=n,li=!0,c=qe,za(n.type)?(Hf=c,qe=ui(r.firstChild)):qe=c),En(t,n,n.pendingProps.children,a),Cl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((c=r=qe)&&(r=iy(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,Sn=n,qe=ui(r.firstChild),li=!1,c=!0):c=!1),c||Ma(n)),mt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,r=f.children,Pf(c,f)?r=null:x!==null&&Pf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Nu(t,n,vx,null,null,a),Ro._currentValue=c),Cl(t,n),En(t,n,r,a),n.child;case 6:return t===null&&Ee&&((t=a=qe)&&(a=ay(a,n.pendingProps,li),a!==null?(n.stateNode=a,Sn=n,qe=null,t=!0):t=!1),t||Ma(n)),null;case 13:return zm(t,n,a);case 4:return zt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=fs(n,null,r,a):En(t,n,r,a),n.child;case 11:return Rm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ea(n,n.type,r.value),En(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,os(n),c=Mn(c),r=r(c),n.flags|=1,En(t,n,r,a),n.child;case 14:return Cm(t,n,n.type,n.pendingProps,a);case 15:return wm(t,n,n.type,n.pendingProps,a);case 19:return Bm(t,n,a);case 31:return Ax(t,n,a);case 22:return Dm(t,n,a,n.pendingProps);case 24:return os(n),r=Mn(an),t===null?(c=Eu(),c===null&&(c=We,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},bu(n),Ea(n,an,c)):((t.lanes&a)!==0&&(Au(t,n),ro(n,null,null,a),so()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ea(n,an,r)):(r=f.cache,Ea(n,an,r),r!==c.cache&&yu(n,[an],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(t){t.flags|=4}function lf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(hg())t.flags|=8192;else throw us=dl,Tu}else t.flags&=-16777217}function Hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e0(n))if(hg())t.flags|=8192;else throw us=dl,Tu}function Dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ye():536870912,t.lanes|=n,tr|=n)}function ho(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Cx(t,n,a){var r=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Yi(an),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Gs(n)?Ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),je(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ki(n),f!==null?(je(n),Hm(n,f)):(je(n),lf(n,c,null,r,a))):f?f!==t.memoizedState?(Ki(n),je(n),Hm(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ki(n),je(n),lf(n,c,t,r,a)),null;case 27:if(ie(n),a=At.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ki(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}t=k.current,Gs(n)?xp(n):(t=qg(c,r,a),n.stateNode=t,Ki(n))}return je(n),null;case 5:if(ie(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ki(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=k.current,Gs(n))xp(n);else{var x=Wl(At.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}f[Ke]=n,f[xn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Tn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ki(n)}}return je(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ki(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=At.current,Gs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ke]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||zg(t.nodeValue,a)),t||Ma(n,!0)}else t=Wl(t).createTextNode(r),t[Ke]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Gs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ke]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Gs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ke]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),je(n),null);case 4:return Ft(),t===null&&Df(n.stateNode.containerInfo),je(n),null;case 10:return Yi(n.type),je(n),null;case 19:if(tt($e),r=n.memoizedState,r===null)return je(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ho(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,ho(r,!1),t=f.updateQueue,n.updateQueue=t,Dl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)pp(a,t),a=a.sibling;return St($e,$e.current&1|2),Ee&&Xi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&dt()>Pl&&(n.flags|=128,c=!0,ho(r,!1),n.lanes=4194304)}else{if(!c)if(t=_l(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Dl(n,t),ho(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ee)return je(n),null}else 2*dt()-r.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,c=!0,ho(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=dt(),t.sibling=null,a=$e.current,St($e,c?a&1|2:a&1),Ee&&Xi(n,r.treeForkCount),t):(je(n),null);case 22:case 23:return jn(n),Du(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&tt(ls),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(an),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function wx(t,n){switch(mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Yi(an),Ft(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ie(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt($e),null;case 4:return Ft(),null;case 10:return Yi(n.type),null;case 22:case 23:return jn(n),Du(),t!==null&&tt(ls),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Yi(an),null;case 25:return null;default:return null}}function Gm(t,n){switch(mu(n),n.tag){case 3:Yi(an),Ft();break;case 26:case 27:case 5:ie(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:tt($e);break;case 10:Yi(n.type);break;case 22:case 23:jn(n),Du(),t!==null&&tt(ls);break;case 24:Yi(an)}}function po(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(b){Be(n,n.return,b)}}function wa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var x=r.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,c=n;var I=a,J=b;try{J()}catch(ht){Be(c,I,ht)}}}r=r.next}while(r!==f)}}catch(ht){Be(n,n.return,ht)}}function Vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Lp(n,a)}catch(r){Be(t,t.return,r)}}}function km(t,n,a){a.props=ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Be(t,n,r)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Be(t,n,c)}}function Ui(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function Xm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function cf(t,n,a){try{var r=t.stateNode;Qx(r,t.type,a,n),r[xn]=n}catch(c){Be(t,t.return,c)}}function Wm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&za(t.type)||t.tag===4}function uf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi));else if(r!==4&&(r===27&&za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Ul(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ul(t,n,a),t=t.sibling;t!==null;)Ul(t,n,a),t=t.sibling}function Ym(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[Ke]=t,n[xn]=a}catch(f){Be(t,t.return,f)}}var Qi=!1,on=!1,hf=!1,qm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Dx(t,n){if(t=t.containerInfo,Nf=Jl,t=sp(t),au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,b=-1,I=-1,J=0,ht=0,yt=t,at=null;e:for(;;){for(var lt;yt!==a||c!==0&&yt.nodeType!==3||(b=x+c),yt!==f||r!==0&&yt.nodeType!==3||(I=x+r),yt.nodeType===3&&(x+=yt.nodeValue.length),(lt=yt.firstChild)!==null;)at=yt,yt=lt;for(;;){if(yt===t)break e;if(at===a&&++J===c&&(b=x),at===f&&++ht===r&&(I=x),(lt=yt.nextSibling)!==null)break;yt=at,at=yt.parentNode}yt=lt}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},Jl=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var kt=ds(a.type,c);t=r.getSnapshotBeforeUpdate(kt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(ee){Be(a,a.return,ee)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)If(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":If(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function jm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),r&4&&po(5,a);break;case 1:if($i(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Be(a,a.return,x)}else{var c=ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}r&64&&Vm(a),r&512&&mo(a,a.return);break;case 3:if($i(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(t,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&r&4&&Ym(a);case 26:case 5:$i(t,a),n===null&&r&4&&Xm(a),r&512&&mo(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),r&4&&Qm(t,a);break;case 13:$i(t,a),r&4&&Jm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Fx.bind(null,a),sy(t,a))));break;case 22:if(r=a.memoizedState!==null||Qi,!r){n=n!==null&&n.memoizedState!==null||on,c=Qi;var f=on;Qi=r,(on=n)&&!f?ta(t,a,(a.subtreeFlags&8772)!==0):$i(t,a),Qi=c,on=f}break;case 30:break;default:$i(t,a)}}function Zm(t){var n=t.alternate;n!==null&&(t.alternate=null,Zm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ot(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,In=!1;function Ji(t,n,a){for(a=a.child;a!==null;)Km(t,n,a),a=a.sibling}function Km(t,n,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:on||Ui(a,n),Ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Ui(a,n);var r=Ze,c=In;za(a.type)&&(Ze=a.stateNode,In=!1),Ji(t,n,a),To(a.stateNode),Ze=r,In=c;break;case 5:on||Ui(a,n);case 6:if(r=Ze,c=In,Ze=null,Ji(t,n,a),Ze=r,In=c,Ze!==null)if(In)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Ze!==null&&(In?(t=Ze,Vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),lr(t)):Vg(Ze,a.stateNode));break;case 4:r=Ze,c=In,Ze=a.stateNode.containerInfo,In=!0,Ji(t,n,a),Ze=r,In=c;break;case 0:case 11:case 14:case 15:wa(2,a,n),on||wa(4,a,n),Ji(t,n,a);break;case 1:on||(Ui(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&km(a,n,r)),Ji(t,n,a);break;case 21:Ji(t,n,a);break;case 22:on=(r=on)||a.memoizedState!==null,Ji(t,n,a),on=r;break;default:Ji(t,n,a)}}function Qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{lr(t)}catch(a){Be(n,n.return,a)}}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{lr(t)}catch(a){Be(n,n.return,a)}}function Ux(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new qm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new qm),n;default:throw Error(s(435,t.tag))}}function Ll(t,n){var a=Ux(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Hx.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(za(b.type)){Ze=b.stateNode,In=!1;break t}break;case 5:Ze=b.stateNode,In=!1;break t;case 3:case 4:Ze=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Ze===null)throw Error(s(160));Km(f,x,c),Ze=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,t),n=n.sibling}var yi=null;function $m(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Fn(t),r&4&&(wa(3,t,t.return),po(3,t),wa(5,t,t.return));break;case 1:Bn(n,t),Fn(t),r&512&&(on||a===null||Ui(a,a.return)),r&64&&Qi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=yi;if(Bn(n,t),Fn(t),r&512&&(on||a===null||Ui(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[W]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[Ke]=t,Ot(f),r=f;break t;case"link":var x=$g("link","href",c).get(r+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(f=x[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(x=$g("meta","content",c).get(r+(a.content||""))){for(b=0;b<x.length;b++)if(f=x[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ke]=t,Ot(f),r=f}t.stateNode=r}else t0(c,t.type,t.stateNode);else t.stateNode=Jg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?t0(c,t.type,t.stateNode):Jg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Fn(t),r&512&&(on||a===null||Ui(a,a.return)),a!==null&&r&4&&cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Fn(t),r&512&&(on||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{Us(c,"")}catch(kt){Be(t,t.return,kt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,cf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(hf=!0);break;case 6:if(Bn(n,t),Fn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(kt){Be(t,t.return,kt)}}break;case 3:if(jl=null,c=yi,yi=Yl(n.containerInfo),Bn(n,t),yi=c,Fn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(kt){Be(t,t.return,kt)}hf&&(hf=!1,tg(t));break;case 4:r=yi,yi=Yl(t.stateNode.containerInfo),Bn(n,t),Fn(t),yi=r;break;case 12:Bn(n,t),Fn(t);break;case 31:Bn(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ll(t,r)));break;case 13:Bn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=dt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ll(t,r)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=Qi,ht=on;if(Qi=J||c,on=ht||I,Bn(n,t),on=ht,Qi=J,Fn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Qi||on||ps(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=I.stateNode;var yt=I.memoizedProps.style,at=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;b.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(kt){Be(I,I.return,kt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(kt){Be(I,I.return,kt)}}}else if(n.tag===18){if(a===null){I=n;try{var lt=I.stateNode;c?kg(lt,!0):kg(I.stateNode,!1)}catch(kt){Be(I,I.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ll(t,a))));break;case 19:Bn(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ll(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Wm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(t);Ul(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Us(x,""),a.flags&=-33);var b=uf(t);Ul(t,b,x);break;case 3:case 4:var I=a.stateNode.containerInfo,J=uf(t);ff(t,J,I);break;default:throw Error(s(161))}}catch(ht){Be(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jm(t,n.alternate,n),n=n.sibling}function ps(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),ps(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),ps(n);break;case 27:To(n.stateNode);case 26:case 5:Ui(n,n.return),ps(n);break;case 22:n.memoizedState===null&&ps(n);break;case 30:ps(n);break;default:ps(n)}t=t.sibling}}function ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ta(c,f,a),po(4,f);break;case 1:if(ta(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Be(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Up(I[c],b)}catch(J){Be(r,r.return,J)}}a&&x&64&&Vm(f),mo(f,f.return);break;case 27:Ym(f);case 26:case 5:ta(c,f,a),a&&r===null&&x&4&&Xm(f),mo(f,f.return);break;case 12:ta(c,f,a);break;case 31:ta(c,f,a),a&&x&4&&Qm(c,f);break;case 13:ta(c,f,a),a&&x&4&&Jm(c,f);break;case 22:f.memoizedState===null&&ta(c,f,a),mo(f,f.return);break;case 30:break;default:ta(c,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Si(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)eg(t,n,a,r),n=n.sibling}function eg(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,r),c&2048&&po(9,n);break;case 1:Si(t,n,a,r);break;case 3:Si(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(c&2048){Si(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,b=f.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Be(n,n.return,I)}}else Si(t,n,a,r);break;case 31:Si(t,n,a,r);break;case 13:Si(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,r):go(t,n):f._visibility&2?Si(t,n,a,r):(f._visibility|=2,Qs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(x,n);break;case 24:Si(t,n,a,r),c&2048&&pf(n.alternate,n);break;default:Si(t,n,a,r)}}function Qs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,b=a,I=r,J=x.flags;switch(x.tag){case 0:case 11:case 15:Qs(f,x,b,I,c),po(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?Qs(f,x,b,I,c):go(f,x):(ht._visibility|=2,Qs(f,x,b,I,c)),c&&J&2048&&df(x.alternate,x);break;case 24:Qs(f,x,b,I,c),c&&J&2048&&pf(x.alternate,x);break;default:Qs(f,x,b,I,c)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:go(a,r),c&2048&&df(r.alternate,r);break;case 24:go(a,r),c&2048&&pf(r.alternate,r);break;default:go(a,r)}n=n.sibling}}var _o=8192;function Js(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)ng(t,n,a),t=t.sibling}function ng(t,n,a){switch(t.tag){case 26:Js(t,n,a),t.flags&_o&&t.memoizedState!==null&&_y(a,yi,t.memoizedState,t.memoizedProps);break;case 5:Js(t,n,a);break;case 3:case 4:var r=yi;yi=Yl(t.stateNode.containerInfo),Js(t,n,a),yi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=_o,_o=16777216,Js(t,n,a),_o=r):Js(t,n,a));break;default:Js(t,n,a)}}function ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];gn=r,sg(r,t)}ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(t),t=t.sibling}function ag(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&wa(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Nl(t)):vo(t);break;default:vo(t)}}function Nl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];gn=r,sg(r,t)}ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}t=t.sibling}}function sg(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:to(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,gn=r;else t:for(a=t;gn!==null;){r=gn;var c=r.sibling,f=r.return;if(Zm(r),r===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var Lx={getCacheForType:function(t){var n=Mn(an),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(an).controller.signal}},Nx=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,ve=null,ye=0,Ie=0,Zn=null,Da=!1,$s=!1,mf=!1,ea=0,Je=0,Ua=0,ms=0,gf=0,Kn=0,tr=0,xo=null,Hn=null,_f=!1,Ol=0,rg=0,Pl=1/0,zl=null,La=null,un=0,Na=null,er=null,na=0,vf=0,xf=null,og=null,yo=0,yf=null;function Qn(){return(Le&2)!==0&&ye!==0?ye&-ye:P.T!==null?Af():Gr()}function lg(){if(Kn===0)if((ye&536870912)===0||Ee){var t=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),Kn=t}else Kn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Kn}function Gn(t,n,a){(t===We&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(nr(t,0),Oa(t,ye,Kn,!1)),vn(t,a),((Le&2)===0||t!==We)&&(t===We&&((Le&2)===0&&(ms|=a),Je===4&&Oa(t,ye,Kn,!1)),Li(t))}function cg(t,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||te(t,n),c=r?zx(t,n):Mf(t,n,!0),f=r;do{if(c===0){$s&&!r&&Oa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ox(a)){c=Mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=t;c=xo;var I=b.current.memoizedState.isDehydrated;if(I&&(nr(b,x).flags|=256),x=Mf(b,x,!1),x!==2){if(mf&&!I){b.errorRecoveryDisabledLanes|=f,ms|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){nr(t,0),Oa(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Oa(r,n,Kn,!Da);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ol+300-dt(),10<c)){if(Oa(r,n,Kn,!Da),Ut(r,0,!0)!==0)break t;na=n,r.timeoutHandle=Hg(ug.bind(null,r,a,Hn,zl,_f,n,Kn,ms,tr,Da,f,"Throttled",-0,0),c);break t}ug(r,a,Hn,zl,_f,n,Kn,ms,tr,Da,f,null,-0,0)}}break}while(!0);Li(t)}function ug(t,n,a,r,c,f,x,b,I,J,ht,yt,at,lt){if(t.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},ng(n,f,yt);var kt=(f&62914560)===f?Ol-dt():(f&4194048)===f?rg-dt():0;if(kt=vy(yt,kt),kt!==null){na=f,t.cancelPendingCommit=kt(vg.bind(null,t,n,f,a,r,c,x,b,I,ht,yt,null,at,lt)),Oa(t,f,x,!J);return}}vg(t,n,f,a,r,c,x,b,I)}function Ox(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(t,n,a,r){n&=~gf,n&=~ms,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-It(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&Fr(t,a,n)}function Il(){return(Le&6)===0?(So(0),!1):!0}function Sf(){if(ve!==null){if(Ie===0)var t=ve.return;else t=ve,Wi=rs=null,zu(t),Ys=null,no=0,t=ve;for(;t!==null;)Gm(t.alternate,t),t=t.return;ve=null}}function nr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ty(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,Sf(),We=t,ve=a=ki(t.current,null),ye=n,Ie=0,Zn=null,Da=!1,$s=te(t,n),mf=!1,tr=Kn=gf=ms=Ua=Je=0,Hn=xo=null,_f=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-It(r),f=1<<c;n|=t[c],r&=~f}return ea=n,al(),a}function fg(t,n){ue=null,P.H=uo,n===Ws||n===hl?(n=Rp(),Ie=3):n===Tu?(n=Rp(),Ie=4):Ie=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,ve===null&&(Je=1,Al(t,si(n,t.current)))}function hg(){var t=qn.current;return t===null?!0:(ye&4194048)===ye?ci===null:(ye&62914560)===ye||(ye&536870912)!==0?t===ci:!1}function dg(){var t=P.H;return P.H=uo,t===null?uo:t}function pg(){var t=P.A;return P.A=Lx,t}function Bl(){Je=4,Da||(ye&4194048)!==ye&&qn.current!==null||($s=!0),(Ua&134217727)===0&&(ms&134217727)===0||We===null||Oa(We,ye,Kn,!1)}function Mf(t,n,a){var r=Le;Le|=2;var c=dg(),f=pg();(We!==t||ye!==n)&&(zl=null,nr(t,n)),n=!1;var x=Je;t:do try{if(Ie!==0&&ve!==null){var b=ve,I=Zn;switch(Ie){case 8:Sf(),x=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var J=Ie;if(Ie=0,Zn=null,ir(t,b,I,J),a&&$s){x=0;break t}break;default:J=Ie,Ie=0,Zn=null,ir(t,b,I,J)}}Px(),x=Je;break}catch(ht){fg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Wi=rs=null,Le=r,P.H=c,P.A=f,ve===null&&(We=null,ye=0,al()),x}function Px(){for(;ve!==null;)mg(ve)}function zx(t,n){var a=Le;Le|=2;var r=dg(),c=pg();We!==t||ye!==n?(zl=null,Pl=dt()+500,nr(t,n)):$s=te(t,n);t:do try{if(Ie!==0&&ve!==null){n=ve;var f=Zn;e:switch(Ie){case 1:Ie=0,Zn=null,ir(t,n,f,1);break;case 2:case 9:if(bp(f)){Ie=0,Zn=null,gg(n);break}n=function(){Ie!==2&&Ie!==9||We!==t||(Ie=7),Li(t)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:bp(f)?(Ie=0,Zn=null,gg(n)):(Ie=0,Zn=null,ir(t,n,f,7));break;case 5:var x=null;switch(ve.tag){case 26:x=ve.memoizedState;case 5:case 27:var b=ve;if(x?e0(x):b.stateNode.complete){Ie=0,Zn=null;var I=b.sibling;if(I!==null)ve=I;else{var J=b.return;J!==null?(ve=J,Fl(J)):ve=null}break e}}Ie=0,Zn=null,ir(t,n,f,5);break;case 6:Ie=0,Zn=null,ir(t,n,f,6);break;case 8:Sf(),Je=6;break t;default:throw Error(s(462))}}Ix();break}catch(ht){fg(t,ht)}while(!0);return Wi=rs=null,P.H=r,P.A=c,Le=a,ve!==null?0:(We=null,ye=0,al(),Je)}function Ix(){for(;ve!==null&&!A();)mg(ve)}function mg(t){var n=Fm(t.alternate,t,ea);t.memoizedProps=t.pendingProps,n===null?Fl(t):ve=n}function gg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Nm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Nm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:zu(n);default:Gm(a,n),n=ve=pp(n,ea),n=Fm(a,n,ea)}t.memoizedProps=t.pendingProps,n===null?Fl(t):ve=n}function ir(t,n,a,r){Wi=rs=null,zu(n),Ys=null,no=0;var c=n.return;try{if(bx(t,c,n,a,ye)){Je=1,Al(t,si(a,t.current)),ve=null;return}}catch(f){if(c!==null)throw ve=c,f;Je=1,Al(t,si(a,t.current)),ve=null;return}n.flags&32768?(Ee||r===1?t=!0:$s||(ye&536870912)!==0?t=!1:(Da=t=!0,(r===2||r===9||r===3||r===6)&&(r=qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),_g(n,t)):Fl(n)}function Fl(t){var n=t;do{if((n.flags&32768)!==0){_g(n,Da);return}t=n.return;var a=Cx(n.alternate,n,ea);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=t}while(n!==null);Je===0&&(Je=5)}function _g(t,n){do{var a=wx(t.alternate,t);if(a!==null){a.flags&=32767,ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ve=t;return}ve=t=a}while(t!==null);Je=6,ve=null}function vg(t,n,a,r,c,f,x,b,I){t.cancelPendingCommit=null;do Hl();while(un!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=cu,gi(t,a,f,x,b,I),t===We&&(ve=We=null,ye=0),er=n,Na=t,na=a,vf=f,xf=c,og=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gx(Lt,function(){return Eg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=Z.p,Z.p=2,x=Le,Le|=4;try{Dx(t,n,a)}finally{Le=x,Z.p=c,P.T=r}}un=1,xg(),yg(),Sg()}}function xg(){if(un===1){un=0;var t=Na,n=er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=Z.p;Z.p=2;var c=Le;Le|=4;try{$m(n,t);var f=Of,x=sp(t.containerInfo),b=f.focusedElem,I=f.selectionRange;if(x!==b&&b&&b.ownerDocument&&ap(b.ownerDocument.documentElement,b)){if(I!==null&&au(b)){var J=I.start,ht=I.end;if(ht===void 0&&(ht=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ht,b.value.length);else{var yt=b.ownerDocument||document,at=yt&&yt.defaultView||window;if(at.getSelection){var lt=at.getSelection(),kt=b.textContent.length,ee=Math.min(I.start,kt),Ve=I.end===void 0?ee:Math.min(I.end,kt);!lt.extend&&ee>Ve&&(x=Ve,Ve=ee,ee=x);var q=ip(b,ee),H=ip(b,Ve);if(q&&H&&(lt.rangeCount!==1||lt.anchorNode!==q.node||lt.anchorOffset!==q.offset||lt.focusNode!==H.node||lt.focusOffset!==H.offset)){var Q=yt.createRange();Q.setStart(q.node,q.offset),lt.removeAllRanges(),ee>Ve?(lt.addRange(Q),lt.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),lt.addRange(Q))}}}}for(yt=[],lt=b;lt=lt.parentNode;)lt.nodeType===1&&yt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<yt.length;b++){var _t=yt[b];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Jl=!!Nf,Of=Nf=null}finally{Le=c,Z.p=r,P.T=a}}t.current=n,un=2}}function yg(){if(un===2){un=0;var t=Na,n=er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=Z.p;Z.p=2;var c=Le;Le|=4;try{jm(t,n.alternate,n)}finally{Le=c,Z.p=r,P.T=a}}un=3}}function Sg(){if(un===4||un===3){un=0,it();var t=Na,n=er,a=na,r=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,er=Na=null,Mg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(La=null),Ds(a),n=n.stateNode,Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Qt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=Z.p,Z.p=2,P.T=null;try{for(var f=t.onRecoverableError,x=0;x<r.length;x++){var b=r[x];f(b.value,{componentStack:b.stack})}}finally{P.T=n,Z.p=c}}(na&3)!==0&&Hl(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===yf?yo++:(yo=0,yf=t):yo=0,So(0)}}function Mg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Hl(){return xg(),yg(),Sg(),Eg()}function Eg(){if(un!==5)return!1;var t=Na,n=vf;vf=0;var a=Ds(na),r=P.T,c=Z.p;try{Z.p=32>a?32:a,P.T=null,a=xf,xf=null;var f=Na,x=na;if(un=0,er=Na=null,na=0,(Le&6)!==0)throw Error(s(331));var b=Le;if(Le|=4,ag(f.current),eg(f,f.current,x,a),Le=b,So(0,!1),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Qt,f)}catch{}return!0}finally{Z.p=c,P.T=r,Mg(t,n)}}function Tg(t,n,a){n=si(a,n),n=Qu(t.stateNode,n,2),t=Aa(t,n,2),t!==null&&(vn(t,2),Li(t))}function Be(t,n,a){if(t.tag===3)Tg(t,t,a);else for(;n!==null;){if(n.tag===3){Tg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(La===null||!La.has(r))){t=si(a,t),a=bm(2),r=Aa(n,a,2),r!==null&&(Am(a,r,n,t),vn(r,2),Li(r));break}}n=n.return}}function Ef(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Nx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(mf=!0,c.add(a),t=Bx.bind(null,t,n,a),n.then(t,t))}function Bx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(ye&a)===a&&(Je===4||Je===3&&(ye&62914560)===ye&&300>dt()-Ol?(Le&2)===0&&nr(t,0):gf|=a,tr===ye&&(tr=0)),Li(t)}function bg(t,n){n===0&&(n=Ye()),t=is(t,n),t!==null&&(vn(t,n),Li(t))}function Fx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(t,a)}function Hx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),bg(t,a)}function Gx(t,n){return Kt(t,n)}var Gl=null,ar=null,Tf=!1,Vl=!1,bf=!1,Pa=0;function Li(t){t!==ar&&t.next===null&&(ar===null?Gl=ar=t:ar=ar.next=t),Vl=!0,Tf||(Tf=!0,kx())}function So(t,n){if(!bf&&Vl){bf=!0;do for(var a=!1,r=Gl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-It(42|t)+1)-1,f&=c&~(x&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,wg(r,f))}else f=ye,f=Ut(r,r===We?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||te(r,f)||(a=!0,wg(r,f));r=r.next}while(a);bf=!1}}function Vx(){Ag()}function Ag(){Vl=Tf=!1;var t=0;Pa!==0&&$x()&&(t=Pa);for(var n=dt(),a=null,r=Gl;r!==null;){var c=r.next,f=Rg(r,n);f===0?(r.next=null,a===null?Gl=c:a.next=c,c===null&&(ar=a)):(a=r,(t!==0||(f&3)!==0)&&(Vl=!0)),r=c}un!==0&&un!==5||So(t),Pa!==0&&(Pa=0)}function Rg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-It(f),b=1<<x,I=c[x];I===-1?((b&a)===0||(b&r)!==0)&&(c[x]=Pe(b,n)):I<=n&&(t.expiredLanes|=b),f&=~b}if(n=We,a=ye,a=Ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&U(r),Ds(a)){case 2:case 8:a=Wt;break;case 32:a=Lt;break;case 268435456:a=me;break;default:a=Lt}return r=Cg.bind(null,t),a=Kt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&U(r),t.callbackPriority=2,t.callbackNode=null,2}function Cg(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var r=ye;return r=Ut(t,t===We?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(cg(t,r,n),Rg(t,dt()),t.callbackNode!=null&&t.callbackNode===a?Cg.bind(null,t):null)}function wg(t,n){if(Hl())return null;cg(t,n,!0)}function kx(){ey(function(){(Le&6)!==0?Kt(pt,Vx):Ag()})}function Af(){if(Pa===0){var t=ks;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Pa=t}return Pa}function Dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function Ug(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Xx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Dg((c[xn]||null).action),x=r.submitter;x&&(n=(n=x[xn]||null)?Dg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var b=new tl("action","action",null,r,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Pa!==0){var I=x?Ug(c,x):new FormData(c);Wu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=x?Ug(c,x):new FormData(c),Wu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],Wx=Cf.toLowerCase(),Yx=Cf[0].toUpperCase()+Cf.slice(1);xi(Wx,"on"+Yx)}xi(lp,"onAnimationEnd"),xi(cp,"onAnimationIteration"),xi(up,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(lx,"onTransitionRun"),xi(cx,"onTransitionStart"),xi(ux,"onTransitionCancel"),xi(fp,"onTransitionEnd"),Vt("onMouseEnter",["mouseout","mouseover"]),Vt("onMouseLeave",["mouseout","mouseover"]),Vt("onPointerEnter",["pointerout","pointerover"]),Vt("onPointerLeave",["pointerout","pointerover"]),ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var b=r[x],I=b.instance,J=b.currentTarget;if(b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ht){il(ht)}c.currentTarget=null,f=I}else for(x=0;x<r.length;x++){if(b=r[x],I=b.instance,J=b.currentTarget,b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ht){il(ht)}c.currentTarget=null,f=I}}}}function xe(t,n){var a=n[Vr];a===void 0&&(a=n[Vr]=new Set);var r=t+"__bubble";a.has(r)||(Ng(n,t,2,!1),a.add(r))}function wf(t,n,a){var r=0;n&&(r|=4),Ng(a,t,r,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[kl]){t[kl]=!0,Yt.forEach(function(a){a!=="selectionchange"&&(qx.has(a)||wf(a,!1,t),wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[kl]||(n[kl]=!0,wf("selectionchange",!1,n))}}function Ng(t,n,a,r){switch(l0(n)){case 2:var c=Sy;break;case 8:c=My;break;default:c=Wf}a=c.bind(null,n,a,t),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Uf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var b=r.stateNode.containerInfo;if(b===c)break;if(x===4)for(x=r.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;b!==null;){if(x=st(b),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){r=f=x;continue t}b=b.parentNode}}r=r.return}Bd(function(){var J=f,ht=qc(a),yt=[];t:{var at=hp.get(t);if(at!==void 0){var lt=tl,kt=t;switch(t){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":lt=Hv;break;case"focusin":kt="focus",lt=$c;break;case"focusout":kt="blur",lt=$c;break;case"beforeblur":case"afterblur":lt=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=kv;break;case lp:case cp:case up:lt=Uv;break;case fp:lt=Wv;break;case"scroll":case"scrollend":lt=Av;break;case"wheel":lt=qv;break;case"copy":case"cut":case"paste":lt=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=kd;break;case"toggle":case"beforetoggle":lt=Zv}var ee=(n&4)!==0,Ve=!ee&&(t==="scroll"||t==="scrollend"),q=ee?at!==null?at+"Capture":null:at;ee=[];for(var H=J,Q;H!==null;){var _t=H;if(Q=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||Q===null||q===null||(_t=kr(H,q),_t!=null&&ee.push(Eo(H,_t,Q))),Ve)break;H=H.return}0<ee.length&&(at=new lt(at,kt,null,a,ht),yt.push({event:at,listeners:ee}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",at&&a!==Yc&&(kt=a.relatedTarget||a.fromElement)&&(st(kt)||kt[Fi]))break t;if((lt||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=J,kt=kt?st(kt):null,kt!==null&&(Ve=u(kt),ee=kt.tag,kt!==Ve||ee!==5&&ee!==27&&ee!==6)&&(kt=null)):(lt=null,kt=J),lt!==kt)){if(ee=Gd,_t="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(ee=kd,_t="onPointerLeave",q="onPointerEnter",H="pointer"),Ve=lt==null?at:wt(lt),Q=kt==null?at:wt(kt),at=new ee(_t,H+"leave",lt,a,ht),at.target=Ve,at.relatedTarget=Q,_t=null,st(ht)===J&&(ee=new ee(q,H+"enter",kt,a,ht),ee.target=Q,ee.relatedTarget=Ve,_t=ee),Ve=_t,lt&&kt)e:{for(ee=jx,q=lt,H=kt,Q=0,_t=q;_t;_t=ee(_t))Q++;_t=0;for(var Jt=H;Jt;Jt=ee(Jt))_t++;for(;0<Q-_t;)q=ee(q),Q--;for(;0<_t-Q;)H=ee(H),_t--;for(;Q--;){if(q===H||H!==null&&q===H.alternate){ee=q;break e}q=ee(q),H=ee(H)}ee=null}else ee=null;lt!==null&&Og(yt,at,lt,ee,!1),kt!==null&&Ve!==null&&Og(yt,Ve,kt,ee,!0)}}t:{if(at=J?wt(J):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var De=Qd;else if(Zd(at))if(Jd)De=sx;else{De=ix;var jt=nx}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?J&&Wc(J.elementType)&&(De=Qd):De=ax;if(De&&(De=De(t,J))){Kd(yt,De,a,ht);break t}jt&&jt(t,at,J),t==="focusout"&&J&&at.type==="number"&&J.memoizedProps.value!=null&&ii(at,"number",at.value)}switch(jt=J?wt(J):window,t){case"focusin":(Zd(jt)||jt.contentEditable==="true")&&(Ps=jt,su=J,Qr=null);break;case"focusout":Qr=su=Ps=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,rp(yt,a,ht);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":rp(yt,a,ht)}var he;if(eu)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Os?qd(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Xd&&a.locale!=="ko"&&(Os||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Os&&(he=Fd()):(xa=ht,Kc="value"in xa?xa.value:xa.textContent,Os=!0)),jt=Xl(J,Se),0<jt.length&&(Se=new Vd(Se,t,null,a,ht),yt.push({event:Se,listeners:jt}),he?Se.data=he:(he=jd(a),he!==null&&(Se.data=he)))),(he=Qv?Jv(t,a):$v(t,a))&&(Se=Xl(J,"onBeforeInput"),0<Se.length&&(jt=new Vd("onBeforeInput","beforeinput",null,a,ht),yt.push({event:jt,listeners:Se}),jt.data=he)),Xx(yt,t,J,a,ht)}Lg(yt,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Xl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=kr(t,a),c!=null&&r.unshift(Eo(t,c,f)),c=kr(t,n),c!=null&&r.push(Eo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function jx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Og(t,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var b=a,I=b.alternate,J=b.stateNode;if(b=b.tag,I!==null&&I===r)break;b!==5&&b!==26&&b!==27||J===null||(I=J,c?(J=kr(a,f),J!=null&&x.unshift(Eo(a,J,I))):c||(J=kr(a,f),J!=null&&x.push(Eo(a,J,I)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Zx=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(Zx,`
`).replace(Kx,"")}function zg(t,n){return n=Pg(n),Pg(t)===n}function Ge(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Us(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Us(t,""+r);break;case"className":qt(t,"class",r);break;case"tabIndex":qt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(t,a,r);break;case"style":zd(t,r,f);break;case"data":if(n!=="object"){qt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ko(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",c.name,c,null),Ge(t,n,"formEncType",c.formEncType,c,null),Ge(t,n,"formMethod",c.formMethod,c,null),Ge(t,n,"formTarget",c.formTarget,c,null)):(Ge(t,n,"encType",c.encType,c,null),Ge(t,n,"method",c.method,c,null),Ge(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ko(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Gi);break;case"onScroll":r!=null&&xe("scroll",t);break;case"onScrollEnd":r!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ko(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Me(t,"popover",r);break;case"xlinkActuate":cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":cn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":cn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":cn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":cn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Me(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tv.get(a)||a,Me(t,a,r))}}function Lf(t,n,a,r,c,f){switch(a){case"style":zd(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Us(t,r):(typeof r=="number"||typeof r=="bigint")&&Us(t,""+r);break;case"onScroll":r!=null&&xe("scroll",t);break;case"onScrollEnd":r!=null&&xe("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ae.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Me(t,a,r)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,f,x,a,null)}}c&&Ge(t,n,"srcSet",a.srcSet,a,null),r&&Ge(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var b=f=x=c=null,I=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":c=ht;break;case"type":x=ht;break;case"checked":I=ht;break;case"defaultChecked":J=ht;break;case"value":f=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ge(t,n,r,ht,a,null)}}vi(t,f,b,I,J,x,c,!1);return;case"select":xe("invalid",t),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":x=b;break;case"multiple":r=b;default:Ge(t,n,c,b,a,null)}n=f,a=x,t.multiple=!!r,n!=null?Hi(t,!!r,n,!1):a!=null&&Hi(t,!!r,a,!0);return;case"textarea":xe("invalid",t),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ge(t,n,x,b,a,null)}Od(t,r,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ge(t,n,I,r,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(r=0;r<Mo.length;r++)xe(Mo[r],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,J,r,a,null)}return;default:if(Wc(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&Lf(t,n,ht,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ge(t,n,b,r,a,null))}function Qx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,b=null,I=null,J=null,ht=null;for(lt in a){var yt=a[lt];if(a.hasOwnProperty(lt)&&yt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=yt;default:r.hasOwnProperty(lt)||Ge(t,n,lt,null,r,yt)}}for(var at in r){var lt=r[at];if(yt=a[at],r.hasOwnProperty(at)&&(lt!=null||yt!=null))switch(at){case"type":f=lt;break;case"name":c=lt;break;case"checked":J=lt;break;case"defaultChecked":ht=lt;break;case"value":x=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==yt&&Ge(t,n,at,lt,r,yt)}}An(t,x,b,I,J,ht,f,c);return;case"select":lt=x=b=at=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:r.hasOwnProperty(f)||Ge(t,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":at=f;break;case"defaultValue":b=f;break;case"multiple":x=f;default:f!==I&&Ge(t,n,c,f,r,I)}n=b,a=x,r=lt,at!=null?Hi(t,!!a,at,!1):!!r!=!!a&&(n!=null?Hi(t,!!a,n,!0):Hi(t,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(t,n,b,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":at=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ge(t,n,x,c,r,f)}Nd(t,at,lt);return;case"option":for(var kt in a)if(at=a[kt],a.hasOwnProperty(kt)&&at!=null&&!r.hasOwnProperty(kt))switch(kt){case"selected":t.selected=!1;break;default:Ge(t,n,kt,null,r,at)}for(I in r)if(at=r[I],lt=a[I],r.hasOwnProperty(I)&&at!==lt&&(at!=null||lt!=null))switch(I){case"selected":t.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Ge(t,n,I,at,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)at=a[ee],a.hasOwnProperty(ee)&&at!=null&&!r.hasOwnProperty(ee)&&Ge(t,n,ee,null,r,at);for(J in r)if(at=r[J],lt=a[J],r.hasOwnProperty(J)&&at!==lt&&(at!=null||lt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Ge(t,n,J,at,r,lt)}return;default:if(Wc(n)){for(var Ve in a)at=a[Ve],a.hasOwnProperty(Ve)&&at!==void 0&&!r.hasOwnProperty(Ve)&&Lf(t,n,Ve,void 0,r,at);for(ht in r)at=r[ht],lt=a[ht],!r.hasOwnProperty(ht)||at===lt||at===void 0&&lt===void 0||Lf(t,n,ht,at,r,lt);return}}for(var q in a)at=a[q],a.hasOwnProperty(q)&&at!=null&&!r.hasOwnProperty(q)&&Ge(t,n,q,null,r,at);for(yt in r)at=r[yt],lt=a[yt],!r.hasOwnProperty(yt)||at===lt||at==null&&lt==null||Ge(t,n,yt,at,r,lt)}function Ig(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,x=c.initiatorType,b=c.duration;if(f&&b&&Ig(x)){for(x=0,b=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],J=I.startTime;if(J>b)break;var ht=I.transferSize,yt=I.initiatorType;ht&&Ig(yt)&&(I=I.responseEnd,x+=ht*(I<b?1:(b-J)/(I-J)))}if(--r,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nf=null,Of=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function Bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Pf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function $x(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(ny)}:Hg;function ny(t){setTimeout(function(){throw t})}function za(t){return t==="head"}function Vg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),lr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")To(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var x=f.nextSibling,b=f.nodeName;f[W]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&To(t.ownerDocument.body);a=c}while(a);lr(n)}function kg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function If(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),ot(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function iy(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[W])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function ay(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Xg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Bf(t){return t.data==="$?"||t.data==="$~"}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function Wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Yg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function qg(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ot(t)}var fi=new Map,jg=new Set;function Yl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ia=Z.d;Z.d={f:ry,r:oy,D:ly,C:cy,L:uy,m:fy,X:dy,S:hy,M:py};function ry(){var t=ia.f(),n=Il();return t||n}function oy(t){var n=Y(t);n!==null&&n.tag===5&&n.type==="form"?fm(n):ia.r(t)}var sr=typeof document>"u"?null:document;function Zg(t,n,a){var r=sr;if(r&&typeof n=="string"&&n){var c=mn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jg.has(c)||(jg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",t),Ot(n),r.head.appendChild(n)))}}function ly(t){ia.D(t),Zg("dns-prefetch",t,null)}function cy(t,n){ia.C(t,n),Zg("preconnect",t,n)}function uy(t,n,a){ia.L(t,n,a);var r=sr;if(r&&t&&n){var c='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mn(a.imageSizes)+'"]')):c+='[href="'+mn(t)+'"]';var f=c;switch(n){case"style":f=rr(t);break;case"script":f=or(t)}fi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(bo(f))||n==="script"&&r.querySelector(Ao(f))||(n=r.createElement("link"),Tn(n,"link",t),Ot(n),r.head.appendChild(n)))}}function fy(t,n){ia.m(t,n);var a=sr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mn(r)+'"][href="'+mn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=or(t)}if(!fi.has(f)&&(t=v({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}r=a.createElement("link"),Tn(r,"link",t),Ot(r),a.head.appendChild(r)}}}function hy(t,n,a){ia.S(t,n,a);var r=sr;if(r&&t){var c=Nt(r).hoistableStyles,f=rr(t);n=n||"default";var x=c.get(f);if(!x){var b={loading:0,preload:null};if(x=r.querySelector(bo(f)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Gf(t,a);var I=x=r.createElement("link");Ot(I),Tn(I,"link",t),I._p=new Promise(function(J,ht){I.onload=J,I.onerror=ht}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ql(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:b},c.set(f,x)}}}function dy(t,n){ia.X(t,n);var a=sr;if(a&&t){var r=Nt(a).hoistableScripts,c=or(t),f=r.get(c);f||(f=a.querySelector(Ao(c)),f||(t=v({src:t,async:!0},n),(n=fi.get(c))&&Vf(t,n),f=a.createElement("script"),Ot(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function py(t,n){ia.M(t,n);var a=sr;if(a&&t){var r=Nt(a).hoistableScripts,c=or(t),f=r.get(c);f||(f=a.querySelector(Ao(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Vf(t,n),f=a.createElement("script"),Ot(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Kg(t,n,a,r){var c=(c=At.current)?Yl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=Nt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=rr(a.href);var f=Nt(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(bo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||my(c,t,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=Nt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function rr(t){return'href="'+mn(t)+'"'}function bo(t){return'link[rel="stylesheet"]['+t+"]"}function Qg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function my(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),Ot(n),t.head.appendChild(n))}function or(t){return'[src="'+mn(t)+'"]'}function Ao(t){return"script[async]"+t}function Jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+mn(a.href)+'"]');if(r)return n.instance=r,Ot(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ot(r),Tn(r,"style",c),ql(r,a.precedence,t),n.instance=r;case"stylesheet":c=rr(a.href);var f=t.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,Ot(f),f;r=Qg(a),(c=fi.get(c))&&Gf(r,c),f=(t.ownerDocument||t).createElement("link"),Ot(f);var x=f;return x._p=new Promise(function(b,I){x.onload=b,x.onerror=I}),Tn(f,"link",r),n.state.loading|=4,ql(f,a.precedence,t),n.instance=f;case"script":return f=or(a.src),(c=t.querySelector(Ao(f)))?(n.instance=c,Ot(c),c):(r=a,(c=fi.get(f))&&(r=v({},a),Vf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ot(c),Tn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ql(r,a.precedence,t));return n.instance}function ql(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var b=r[x];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jl=null;function $g(t,n,a){if(jl===null){var r=new Map,c=jl=new Map;c.set(a,r)}else c=jl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[W]||f[Ke]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var b=r.get(x);b?b.push(f):r.set(x,[f])}}return r}function t0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _y(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=rr(r.href),f=n.querySelector(bo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Zl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ot(f);return}f=n.ownerDocument||n,r=Qg(r),(c=fi.get(c))&&Gf(r,c),f=f.createElement("link"),Ot(f);var x=f;x._p=new Promise(function(b,I){x.onload=b,x.onerror=I}),Tn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Zl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function vy(t,n){return t.stylesheets&&t.count===0&&Ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&kf===0&&(kf=62500*Jx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>kf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kl=null;function Ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kl=new Map,n.forEach(xy,t),Kl=null,Zl.call(t))}function xy(t,n){if(!(n.state.loading&4)){var a=Kl.get(t);if(a)var r=a.get(null);else{a=new Map,Kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=Zl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function yy(t,n,a,r,c,f,x,b,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function n0(t,n,a,r,c,f,x,b,I,J,ht,yt){return t=new yy(t,n,a,x,I,J,ht,yt,b),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=Su(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},bu(f),t}function i0(t){return t?(t=Bs,t):Bs}function a0(t,n,a,r,c,f){c=i0(c),r.context===null?r.context=c:r.pendingContext=c,r=ba(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Aa(t,r,n),a!==null&&(Gn(a,t,n),ao(a,t,n))}function s0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Xf(t,n){s0(t,n),(t=t.alternate)&&s0(t,n)}function r0(t){if(t.tag===13||t.tag===31){var n=is(t,67108864);n!==null&&Gn(n,t,67108864),Xf(t,67108864)}}function o0(t){if(t.tag===13||t.tag===31){var n=Qn();n=Ja(n);var a=is(t,n);a!==null&&Gn(a,t,n),Xf(t,n)}}var Jl=!0;function Sy(t,n,a,r){var c=P.T;P.T=null;var f=Z.p;try{Z.p=2,Wf(t,n,a,r)}finally{Z.p=f,P.T=c}}function My(t,n,a,r){var c=P.T;P.T=null;var f=Z.p;try{Z.p=8,Wf(t,n,a,r)}finally{Z.p=f,P.T=c}}function Wf(t,n,a,r){if(Jl){var c=Yf(r);if(c===null)Uf(t,n,r,$l,a),c0(t,r);else if(Ty(c,t,n,a,r))r.stopPropagation();else if(c0(t,r),n&4&&-1<Ey.indexOf(t)){for(;c!==null;){var f=Y(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Dt(f.pendingLanes);if(x!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var I=1<<31-It(x);b.entanglements[1]|=I,x&=~I}Li(f),(Le&6)===0&&(Pl=dt()+500,So(0))}}break;case 31:case 13:b=is(f,2),b!==null&&Gn(b,f,2),Il(),Xf(f,2)}if(f=Yf(r),f===null&&Uf(t,n,r,$l,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Uf(t,n,r,null,a)}}function Yf(t){return t=qc(t),qf(t)}var $l=null;function qf(t){if($l=null,t=st(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function l0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case pt:return 2;case Wt:return 8;case Lt:case Bt:return 32;case me:return 268435456;default:return 32}default:return 32}}var jf=!1,Ia=null,Ba=null,Fa=null,Co=new Map,wo=new Map,Ha=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c0(t,n){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Y(n),n!==null&&r0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Ty(t,n,a,r,c){switch(n){case"focusin":return Ia=Do(Ia,t,n,a,r,c),!0;case"dragenter":return Ba=Do(Ba,t,n,a,r,c),!0;case"mouseover":return Fa=Do(Fa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Co.set(f,Do(Co.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,wo.set(f,Do(wo.get(f)||null,t,n,a,r,c)),!0}return!1}function u0(t){var n=st(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,$a(t.priority,function(){o0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,$a(t.priority,function(){o0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Yf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=Y(a),n!==null&&r0(n),t.blockedOn=a,!1;n.shift()}return!0}function f0(t,n,a){tc(t)&&a.delete(n)}function by(){jf=!1,Ia!==null&&tc(Ia)&&(Ia=null),Ba!==null&&tc(Ba)&&(Ba=null),Fa!==null&&tc(Fa)&&(Fa=null),Co.forEach(f0),wo.forEach(f0)}function ec(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,by)))}var nc=null;function h0(t){nc!==t&&(nc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===t&&(nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(qf(r||a)===null)continue;break}var f=Y(a);f!==null&&(t.splice(n,3),n-=3,Wu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function lr(t){function n(I){return ec(I,t)}Ia!==null&&ec(Ia,t),Ba!==null&&ec(Ba,t),Fa!==null&&ec(Fa,t),Co.forEach(n),wo.forEach(n);for(var a=0;a<Ha.length;a++){var r=Ha[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)u0(a),a.blockedOn===null&&Ha.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[xn]||null;if(typeof f=="function")x||h0(a);else if(x){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[xn]||null)b=x.formAction;else if(qf(c)!==null)continue}else b=x.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),h0(a)}}}function d0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Zf(t){this._internalRoot=t}ic.prototype.render=Zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();a0(a,r,t,n,null,null)},ic.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;a0(t.current,2,null,t,null,null),Il(),n[Fi]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=Gr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,t),a===0&&u0(t)}};var p0=e.version;if(p0!=="19.2.4")throw Error(s(527,p0,"19.2.4"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Ay={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Qt=ac.inject(Ay),Zt=ac}catch{}}return Lo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Sm,f=Mm,x=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=n0(t,1,!1,null,null,a,r,null,c,f,x,d0),t[Fi]=n.current,Df(t),new Zf(n)},Lo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Sm,x=Mm,b=Em,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=n0(t,1,!0,n,a??null,r,c,I,f,x,b,d0),n.context=i0(null),a=n.current,r=Qn(),r=Ja(r),c=ba(r),c.callback=null,Aa(a,c,r),a=r,n.current.lanes=a,vn(n,a),Li(n),t[Fi]=n.current,Df(t),new ic(n)},Lo.version="19.2.4",Lo}var T0;function zy(){if(T0)return Jf.exports;T0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=Py(),Jf.exports}var Iy=zy();const By=F_(Iy);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="170",pi={ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fy=0,b0=1,Hy=2,H_=1,Gy=2,ua=3,pa=0,Un=1,Oi=2,Ka=0,Rr=1,Ic=2,A0=3,R0=4,Vy=5,Es=100,ky=101,Xy=102,Wy=103,Yy=104,qy=200,jy=201,Zy=202,Ky=203,Oh=204,Ph=205,Qy=206,Jy=207,$y=208,tS=209,eS=210,nS=211,iS=212,aS=213,sS=214,zh=0,Ih=1,Bh=2,Dr=3,Fh=4,Hh=5,Gh=6,Vh=7,G_=0,rS=1,oS=2,Qa=0,lS=1,cS=2,uS=3,fS=4,hS=5,dS=6,pS=7,V_=300,Ur=301,Lr=302,kh=303,Xh=304,Fc=306,Nr=1e3,zi=1001,Wh=1002,Ai=1003,mS=1004,sc=1005,Dn=1006,nh=1007,bs=1008,ma=1009,k_=1010,X_=1011,Vo=1012,Ed=1013,As=1014,fa=1015,Xo=1016,Td=1017,bd=1018,Or=1020,W_=35902,Y_=1021,q_=1022,bi=1023,j_=1024,Z_=1025,Cr=1026,Pr=1027,K_=1028,Ad=1029,Q_=1030,Rd=1031,Cd=1033,Dc=33776,Uc=33777,Lc=33778,Nc=33779,Yh=35840,qh=35841,jh=35842,Zh=35843,Kh=36196,Qh=37492,Jh=37496,$h=37808,td=37809,ed=37810,nd=37811,id=37812,ad=37813,sd=37814,rd=37815,od=37816,ld=37817,cd=37818,ud=37819,fd=37820,hd=37821,Oc=36492,dd=36494,pd=36495,J_=36283,md=36284,gd=36285,_d=36286,gS=3200,_S=3201,vS=0,xS=1,Za="",di="srgb",Ir="srgb-linear",Hc="linear",ke="srgb",cr=7680,C0=519,yS=512,SS=513,MS=514,$_=515,ES=516,TS=517,bS=518,AS=519,w0=35044,D0="300 es",ha=2e3,Bc=2001;class ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,vd=180/Math.PI;function Wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function On(o,e,i){return Math.max(e,Math.min(i,o))}function RS(o,e){return(o%e+e)%e}function ih(o,e,i){return(1-i)*o+i*e}function No(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const CS={DEG2RAD:Pc};class ge{constructor(e=0,i=0){ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(On(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(e,i,s,l,u,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],y=s[2],M=s[5],E=s[8],C=l[0],S=l[3],g=l[6],z=l[1],N=l[4],D=l[7],$=l[2],G=l[5],O=l[8];return u[0]=h*C+d*z+m*$,u[3]=h*S+d*N+m*G,u[6]=h*g+d*D+m*O,u[1]=p*C+_*z+v*$,u[4]=p*S+_*N+v*G,u[7]=p*g+_*D+v*O,u[2]=y*C+M*z+E*$,u[5]=y*S+M*N+E*G,u[8]=y*g+M*D+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*h-d*p,y=d*m-_*u,M=p*u-h*m,E=i*v+s*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(l*p-_*s)*C,e[2]=(d*s-l*h)*C,e[3]=y*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ah.makeScale(e,i)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,i){return this.premultiply(ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new de;function tv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ko(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wS(){const o=ko("canvas");return o.style.display="block",o}const U0={};function Fo(o){o in U0||(U0[o]=!0,console.warn(o))}function DS(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function US(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function LS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Re={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(o,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===ke&&(o.r=da(o.r),o.g=da(o.g),o.b=da(o.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===ke&&(o.r=wr(o.r),o.g=wr(o.g),o.b=wr(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Za?Hc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,i){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const L0=[.64,.33,.3,.6,.15,.06],N0=[.2126,.7152,.0722],O0=[.3127,.329],P0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Re.define({[Ir]:{primaries:L0,whitePoint:O0,transfer:Hc,toXYZ:P0,fromXYZ:z0,luminanceCoefficients:N0,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:L0,whitePoint:O0,transfer:ke,toXYZ:P0,fromXYZ:z0,luminanceCoefficients:N0,outputColorSpaceConfig:{drawingBufferColorSpace:di}}});let ur;class NS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ur===void 0&&(ur=ko("canvas")),ur.width=e.width,ur.height=e.height;const s=ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ur}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ko("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=da(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(da(i[s]/255)*255):i[s]=da(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OS=0;class ev{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(sh(l[h].image)):u.push(sh(l[h]))}else u=sh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function sh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?NS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PS=0;class hn extends ws{constructor(e=hn.DEFAULT_IMAGE,i=hn.DEFAULT_MAPPING,s=zi,l=zi,u=Dn,h=bs,d=bi,m=ma,p=hn.DEFAULT_ANISOTROPY,_=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Wo(),this.name="",this.source=new ev(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nr:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nr:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=V_;hn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],_=m[4],v=m[8],y=m[1],M=m[5],E=m[9],C=m[2],S=m[6],g=m[10];if(Math.abs(_-y)<.01&&Math.abs(v-C)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(v+C)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(M+1)/2,$=(g+1)/2,G=(_+y)/4,O=(v+C)/4,B=(E+S)/4;return N>D&&N>$?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=G/s,u=O/s):D>$?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=G/l,u=B/l):$<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt($),s=O/u,l=B/u),this.set(s,l,u,i),this}let z=Math.sqrt((S-E)*(S-E)+(v-C)*(v-C)+(y-_)*(y-_));return Math.abs(z)<.001&&(z=1),this.x=(S-E)/z,this.y=(v-C)/z,this.z=(y-_)/z,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zS extends ws{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new hn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new ev(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends zS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class nv extends hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IS extends hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3];const y=u[h+0],M=u[h+1],E=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=E,e[i+3]=C;return}if(v!==C||m!==y||p!==M||_!==E){let S=1-d;const g=m*y+p*M+_*E+v*C,z=g>=0?1:-1,N=1-g*g;if(N>Number.EPSILON){const $=Math.sqrt(N),G=Math.atan2($,g*z);S=Math.sin(S*G)/$,d=Math.sin(d*G)/$}const D=d*z;if(m=m*S+y*D,p=p*S+M*D,_=_*S+E*D,v=v*S+C*D,S===1-d){const $=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=$,p*=$,_*=$,v*=$}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[h],y=u[h+1],M=u[h+2],E=u[h+3];return e[i]=d*E+_*v+m*M-p*y,e[i+1]=m*E+_*y+p*v-d*M,e[i+2]=p*E+_*M+d*y-m*v,e[i+3]=_*E-d*v-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(u/2),y=m(s/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=y*_*v+p*M*E,this._y=p*M*v-y*_*E,this._z=p*_*E+y*M*v,this._w=p*_*v-y*M*E;break;case"YXZ":this._x=y*_*v+p*M*E,this._y=p*M*v-y*_*E,this._z=p*_*E-y*M*v,this._w=p*_*v+y*M*E;break;case"ZXY":this._x=y*_*v-p*M*E,this._y=p*M*v+y*_*E,this._z=p*_*E+y*M*v,this._w=p*_*v-y*M*E;break;case"ZYX":this._x=y*_*v-p*M*E,this._y=p*M*v+y*_*E,this._z=p*_*E-y*M*v,this._w=p*_*v+y*M*E;break;case"YZX":this._x=y*_*v+p*M*E,this._y=p*M*v+y*_*E,this._z=p*_*E-y*M*v,this._w=p*_*v-y*M*E;break;case"XZY":this._x=y*_*v-p*M*E,this._y=p*M*v-y*_*E,this._z=p*_*E+y*M*v,this._w=p*_*v+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],y=s+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=h*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(e=0,i=0,s=0){et.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(I0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(I0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),_=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*_,this.y=s+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(On(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new et,I0=new Cs;class Yo{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Mi):Mi.fromBufferAttribute(u,h),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rc.copy(s.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),oc.subVectors(this.max,Oo),fr.subVectors(e.a,Oo),hr.subVectors(e.b,Oo),dr.subVectors(e.c,Oo),Va.subVectors(hr,fr),ka.subVectors(dr,hr),gs.subVectors(fr,dr);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-gs.z,gs.y,Va.z,0,-Va.x,ka.z,0,-ka.x,gs.z,0,-gs.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-gs.y,gs.x,0];return!oh(i,fr,hr,dr,oc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,fr,hr,dr,oc))?!1:(lc.crossVectors(Va,ka),i=[lc.x,lc.y,lc.z],oh(i,fr,hr,dr,oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const aa=[new et,new et,new et,new et,new et,new et,new et,new et],Mi=new et,rc=new Yo,fr=new et,hr=new et,dr=new et,Va=new et,ka=new et,gs=new et,Oo=new et,oc=new et,lc=new et,_s=new et;function oh(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){_s.fromArray(o,u);const d=l.x*Math.abs(_s.x)+l.y*Math.abs(_s.y)+l.z*Math.abs(_s.z),m=e.dot(_s),p=i.dot(_s),_=s.dot(_s);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const BS=new Yo,Po=new et,lh=new et;class Gc{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):BS.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Po,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(lh)),this.expandByPoint(Po.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sa=new et,ch=new et,cc=new et,Xa=new et,uh=new et,uc=new et,fh=new et;class wd{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ch.copy(e).add(i).multiplyScalar(.5),cc.copy(i).sub(e).normalize(),Xa.copy(this.origin).sub(ch);const u=e.distanceTo(i)*.5,h=-this.direction.dot(cc),d=Xa.dot(this.direction),m=-Xa.dot(cc),p=Xa.lengthSq(),_=Math.abs(1-h*h);let v,y,M,E;if(_>0)if(v=h*m-d,y=h*d-m,E=u*_,v>=0)if(y>=-E)if(y<=E){const C=1/_;v*=C,y*=C,M=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y=-u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y<=-E?(v=Math.max(0,-(-h*u+d)),y=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+y*(y+2*m)+p):y<=E?(v=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(v=Math.max(0,-(h*u+d)),y=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+y*(y+2*m)+p);else y=h>0?-u:u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ch).addScaledVector(cc,y),M}intersectSphere(e,i){sa.subVectors(e.center,this.origin);const s=sa.dot(this.direction),l=sa.dot(sa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(u=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(u=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,i,s,l,u){uh.subVectors(i,e),uc.subVectors(s,e),fh.crossVectors(uh,uc);let h=this.direction.dot(fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Xa.subVectors(this.origin,e);const m=d*this.direction.dot(uc.crossVectors(Xa,uc));if(m<0)return null;const p=d*this.direction.dot(uh.cross(Xa));if(p<0||m+p>h)return null;const _=-d*Xa.dot(fh);return _<0?null:this.at(_/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,s,l,u,h,d,m,p,_,v,y,M,E,C,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,_,v,y,M,E,C,S)}set(e,i,s,l,u,h,d,m,p,_,v,y,M,E,C,S){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=y,g[3]=M,g[7]=E,g[11]=C,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/pr.setFromMatrixColumn(e,0).length(),u=1/pr.setFromMatrixColumn(e,1).length(),h=1/pr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const y=h*_,M=h*v,E=d*_,C=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=y-C*p,i[9]=-d*m,i[2]=C-y*p,i[6]=E+M*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,M=m*v,E=p*_,C=p*v;i[0]=y+C*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-E,i[6]=C+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,M=m*v,E=p*_,C=p*v;i[0]=y-C*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*_,i[9]=C-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,M=h*v,E=d*_,C=d*v;i[0]=m*_,i[4]=E*p-M,i[8]=y*p+C,i[1]=m*v,i[5]=C*p+y,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,M=h*p,E=d*m,C=d*p;i[0]=m*_,i[4]=C-y*v,i[8]=E*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+E,i[10]=y-C*v}else if(e.order==="XZY"){const y=h*m,M=h*p,E=d*m,C=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=y*v+C,i[5]=h*_,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*_,i[10]=C*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FS,e,HS)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Wa.crossVectors(s,Jn),Wa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Wa.crossVectors(s,Jn)),Wa.normalize(),fc.crossVectors(Jn,Wa),l[0]=Wa.x,l[4]=fc.x,l[8]=Jn.x,l[1]=Wa.y,l[5]=fc.y,l[9]=Jn.y,l[2]=Wa.z,l[6]=fc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],y=s[9],M=s[13],E=s[2],C=s[6],S=s[10],g=s[14],z=s[3],N=s[7],D=s[11],$=s[15],G=l[0],O=l[4],B=l[8],w=l[12],T=l[1],F=l[5],ct=l[9],rt=l[13],gt=l[2],xt=l[6],P=l[10],Z=l[14],j=l[3],Tt=l[7],bt=l[11],L=l[15];return u[0]=h*G+d*T+m*gt+p*j,u[4]=h*O+d*F+m*xt+p*Tt,u[8]=h*B+d*ct+m*P+p*bt,u[12]=h*w+d*rt+m*Z+p*L,u[1]=_*G+v*T+y*gt+M*j,u[5]=_*O+v*F+y*xt+M*Tt,u[9]=_*B+v*ct+y*P+M*bt,u[13]=_*w+v*rt+y*Z+M*L,u[2]=E*G+C*T+S*gt+g*j,u[6]=E*O+C*F+S*xt+g*Tt,u[10]=E*B+C*ct+S*P+g*bt,u[14]=E*w+C*rt+S*Z+g*L,u[3]=z*G+N*T+D*gt+$*j,u[7]=z*O+N*F+D*xt+$*Tt,u[11]=z*B+N*ct+D*P+$*bt,u[15]=z*w+N*rt+D*Z+$*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],y=e[10],M=e[14],E=e[3],C=e[7],S=e[11],g=e[15];return E*(+u*m*v-l*p*v-u*d*y+s*p*y+l*d*M-s*m*M)+C*(+i*m*M-i*p*y+u*h*y-l*h*M+l*p*_-u*m*_)+S*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*_-s*p*_)+g*(-l*d*_-i*m*v+i*d*y+l*h*v-s*h*y+s*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],y=e[10],M=e[11],E=e[12],C=e[13],S=e[14],g=e[15],z=v*S*p-C*y*p+C*m*M-d*S*M-v*m*g+d*y*g,N=E*y*p-_*S*p-E*m*M+h*S*M+_*m*g-h*y*g,D=_*C*p-E*v*p+E*d*M-h*C*M-_*d*g+h*v*g,$=E*v*m-_*C*m-E*d*y+h*C*y+_*d*S-h*v*S,G=i*z+s*N+l*D+u*$;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return e[0]=z*O,e[1]=(C*y*u-v*S*u-C*l*M+s*S*M+v*l*g-s*y*g)*O,e[2]=(d*S*u-C*m*u+C*l*p-s*S*p-d*l*g+s*m*g)*O,e[3]=(v*m*u-d*y*u-v*l*p+s*y*p+d*l*M-s*m*M)*O,e[4]=N*O,e[5]=(_*S*u-E*y*u+E*l*M-i*S*M-_*l*g+i*y*g)*O,e[6]=(E*m*u-h*S*u-E*l*p+i*S*p+h*l*g-i*m*g)*O,e[7]=(h*y*u-_*m*u+_*l*p-i*y*p-h*l*M+i*m*M)*O,e[8]=D*O,e[9]=(E*v*u-_*C*u-E*s*M+i*C*M+_*s*g-i*v*g)*O,e[10]=(h*C*u-E*d*u+E*s*p-i*C*p-h*s*g+i*d*g)*O,e[11]=(_*d*u-h*v*u-_*s*p+i*v*p+h*s*M-i*d*M)*O,e[12]=$*O,e[13]=(_*C*l-E*v*l+E*s*y-i*C*y-_*s*S+i*v*S)*O,e[14]=(E*d*l-h*C*l-E*s*m+i*C*m+h*s*S-i*d*S)*O,e[15]=(h*v*l-_*d*l+_*s*m-i*v*m-h*s*y+i*d*y)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,y=u*p,M=u*_,E=u*v,C=h*_,S=h*v,g=d*v,z=m*p,N=m*_,D=m*v,$=s.x,G=s.y,O=s.z;return l[0]=(1-(C+g))*$,l[1]=(M+D)*$,l[2]=(E-N)*$,l[3]=0,l[4]=(M-D)*G,l[5]=(1-(y+g))*G,l[6]=(S+z)*G,l[7]=0,l[8]=(E+N)*O,l[9]=(S-z)*O,l[10]=(1-(y+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=pr.set(l[0],l[1],l[2]).length();const h=pr.set(l[4],l[5],l[6]).length(),d=pr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Ei.copy(this);const p=1/u,_=1/h,v=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,i.setFromRotationMatrix(Ei),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=ha){const m=this.elements,p=2*u/(i-e),_=2*u/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let M,E;if(d===ha)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Bc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=ha){const m=this.elements,p=1/(i-e),_=1/(s-l),v=1/(h-u),y=(i+e)*p,M=(s+l)*_;let E,C;if(d===ha)E=(h+u)*v,C=-2*v;else if(d===Bc)E=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const pr=new et,Ei=new nn,FS=new et(0,0,0),HS=new et(1,1,1),Wa=new et,fc=new et,Jn=new et,B0=new nn,F0=new Cs;class ga{constructor(e=0,i=0,s=0,l=ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-On(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(On(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-On(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(On(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return B0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return F0.setFromEuler(this),this.setFromQuaternion(F0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ga.DEFAULT_ORDER="XYZ";let iv=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},GS=0;const H0=new et,mr=new Cs,ra=new nn,hc=new et,zo=new et,VS=new et,kS=new Cs,G0=new et(1,0,0),V0=new et(0,1,0),k0=new et(0,0,1),X0={type:"added"},XS={type:"removed"},gr={type:"childadded",child:null},hh={type:"childremoved",child:null};class Xn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new et,i=new ga,s=new Cs,l=new et(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new de}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return mr.setFromAxisAngle(e,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,i){return mr.setFromAxisAngle(e,i),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(G0,e)}rotateY(e){return this.rotateOnAxis(V0,e)}rotateZ(e){return this.rotateOnAxis(k0,e)}translateOnAxis(e,i){return H0.copy(e).applyQuaternion(this.quaternion),this.position.add(H0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(G0,e)}translateY(e){return this.translateOnAxis(V0,e)}translateZ(e){return this.translateOnAxis(k0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?hc.copy(e):hc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(zo,hc,this.up):ra.lookAt(hc,zo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),mr.setFromRotationMatrix(ra),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X0),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(XS),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X0),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,VS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,kS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),v=h(e.shapes),y=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new et(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new et,oa=new et,dh=new et,la=new et,_r=new et,vr=new et,W0=new et,ph=new et,mh=new et,gh=new et,_h=new en,vh=new en,xh=new en;let Io=class br{constructor(e=new et,i=new et,s=new et){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ti.subVectors(e,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ti.subVectors(l,i),oa.subVectors(s,i),dh.subVectors(e,i);const h=Ti.dot(Ti),d=Ti.dot(oa),m=Ti.dot(dh),p=oa.dot(oa),_=oa.dot(dh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const y=1/v,M=(p*m-d*_)*y,E=(h*_-d*m)*y;return u.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,la.x),m.addScaledVector(h,la.y),m.addScaledVector(d,la.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return _h.setScalar(0),vh.setScalar(0),xh.setScalar(0),_h.fromBufferAttribute(e,i),vh.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(_h,u.x),h.addScaledVector(vh,u.y),h.addScaledVector(xh,u.z),h}static isFrontFacing(e,i,s,l){return Ti.subVectors(s,i),oa.subVectors(e,i),Ti.cross(oa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ti.cross(oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return br.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return br.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return br.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return br.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return br.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;_r.subVectors(l,s),vr.subVectors(u,s),ph.subVectors(e,s);const m=_r.dot(ph),p=vr.dot(ph);if(m<=0&&p<=0)return i.copy(s);mh.subVectors(e,l);const _=_r.dot(mh),v=vr.dot(mh);if(_>=0&&v<=_)return i.copy(l);const y=m*v-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(_r,h);gh.subVectors(e,u);const M=_r.dot(gh),E=vr.dot(gh);if(E>=0&&M<=E)return i.copy(u);const C=M*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(vr,d);const S=_*E-M*v;if(S<=0&&v-_>=0&&M-E>=0)return W0.subVectors(u,l),d=(v-_)/(v-_+(M-E)),i.copy(l).addScaledVector(W0,d);const g=1/(S+C+y);return h=C*g,d=y*g,i.copy(s).addScaledVector(_r,h).addScaledVector(vr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},dc={h:0,s:0,l:0};function yh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=s,Re.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Re.workingColorSpace){if(e=RS(e,1),i=On(i,0,1),s=On(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=yh(h,u,e+1/3),this.g=yh(h,u,e),this.b=yh(h,u,e-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(e,i=di){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const s=av[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Re.fromWorkingColorSpace(wn.copy(this),e),Math.round(On(wn.r*255,0,255))*65536+Math.round(On(wn.g*255,0,255))*256+Math.round(On(wn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=di){Re.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ya),this.setHSL(Ya.h+e,Ya.s+i,Ya.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ya),e.getHSL(dc);const s=ih(Ya.h,dc.h,i),l=ih(Ya.s,dc.s,i),u=ih(Ya.l,dc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ce;Ce.NAMES=av;let WS=0;class qo extends ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=Wo(),this.name="",this.blending=Rr,this.side=pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Ph,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==pa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Oh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ph&&(s.blendDst=this.blendDst),this.blendEquation!==Es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sv extends qo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ga,this.combine=G_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new et,pc=new ge;class Ri{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=w0,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(e),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w0&&(e.usage=this.usage),e}}class rv extends Ri{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class ov extends Ri{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ii extends Ri{constructor(e,i,s){super(new Float32Array(e),i,s)}}let YS=0;const hi=new nn,Sh=new Xn,xr=new et,$n=new Yo,Bo=new Yo,_n=new et;class Bi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tv(e)?ov:rv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,s){return hi.makeTranslation(e,i,s),this.applyMatrix4(hi),this}scale(e,i,s){return hi.makeScale(e,i,s),this.applyMatrix4(hi),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ii(s,3))}else{for(let s=0,l=i.count;s<l;s++){const u=e[s];i.setXYZ(s,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,Bo.min),$n.expandByPoint(_n),_n.addVectors($n.max,Bo.max),$n.expandByPoint(_n)):($n.expandByPoint(Bo.min),$n.expandByPoint(Bo.max))}$n.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)_n.fromBufferAttribute(d,p),m&&(xr.fromBufferAttribute(e,p),_n.add(xr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let B=0;B<s.count;B++)d[B]=new et,m[B]=new et;const p=new et,_=new et,v=new et,y=new ge,M=new ge,E=new ge,C=new et,S=new et;function g(B,w,T){p.fromBufferAttribute(s,B),_.fromBufferAttribute(s,w),v.fromBufferAttribute(s,T),y.fromBufferAttribute(u,B),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,T),_.sub(p),v.sub(p),M.sub(y),E.sub(y);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(F),S.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(F),d[B].add(C),d[w].add(C),d[T].add(C),m[B].add(S),m[w].add(S),m[T].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let B=0,w=z.length;B<w;++B){const T=z[B],F=T.start,ct=T.count;for(let rt=F,gt=F+ct;rt<gt;rt+=3)g(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const N=new et,D=new et,$=new et,G=new et;function O(B){$.fromBufferAttribute(l,B),G.copy($);const w=d[B];N.copy(w),N.sub($.multiplyScalar($.dot(w))).normalize(),D.crossVectors(G,w);const F=D.dot(m[B])<0?-1:1;h.setXYZW(B,N.x,N.y,N.z,F)}for(let B=0,w=z.length;B<w;++B){const T=z[B],F=T.start,ct=T.count;for(let rt=F,gt=F+ct;rt<gt;rt+=3)O(e.getX(rt+0)),O(e.getX(rt+1)),O(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new et,u=new et,h=new et,d=new et,m=new et,p=new et,_=new et,v=new et;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),C=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,y=new p.constructor(m.length*_);let M=0,E=0;for(let C=0,S=m.length;C<S;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*_;for(let g=0;g<_;g++)y[E++]=p[M++]}return new Ri(y,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const y=p[_],M=e(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],v=u[p];for(let y=0,M=v.length;y<M;y++)_.push(v[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y0=new nn,vs=new wd,mc=new Gc,q0=new et,gc=new et,_c=new et,vc=new et,Mh=new et,xc=new et,j0=new et,yc=new et;class ei extends Xn{constructor(e=new Bi,i=new sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){xc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(Mh.fromBufferAttribute(v,e),h?xc.addScaledVector(Mh,_):xc.addScaledVector(Mh.sub(i),_))}i.add(xc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(u),vs.copy(e.ray).recast(e.near),!(mc.containsPoint(vs.origin)===!1&&(vs.intersectSphere(mc,q0)===null||vs.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&(Y0.copy(u).invert(),vs.copy(e.ray).applyMatrix4(Y0),!(s.boundingBox!==null&&vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,vs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=y.length;E<C;E++){const S=y[E],g=h[S.materialIndex],z=Math.max(S.start,M.start),N=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=z,$=N;D<$;D+=3){const G=d.getX(D),O=d.getX(D+1),B=d.getX(D+2);l=Sc(this,g,e,s,p,_,v,G,O,B),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=E,g=C;S<g;S+=3){const z=d.getX(S),N=d.getX(S+1),D=d.getX(S+2);l=Sc(this,h,e,s,p,_,v,z,N,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,C=y.length;E<C;E++){const S=y[E],g=h[S.materialIndex],z=Math.max(S.start,M.start),N=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=z,$=N;D<$;D+=3){const G=D,O=D+1,B=D+2;l=Sc(this,g,e,s,p,_,v,G,O,B),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=E,g=C;S<g;S+=3){const z=S,N=S+1,D=S+2;l=Sc(this,h,e,s,p,_,v,z,N,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function qS(o,e,i,s,l,u,h,d){let m;if(e.side===Un?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===pa,d),m===null)return null;yc.copy(d),yc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:o}}function Sc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,gc),o.getVertexPosition(m,_c),o.getVertexPosition(p,vc);const _=qS(o,e,i,s,gc,_c,vc,j0);if(_){const v=new et;Io.getBarycoord(j0,gc,_c,vc,v),l&&(_.uv=Io.getInterpolatedAttribute(l,d,m,p,v,new ge)),u&&(_.uv1=Io.getInterpolatedAttribute(u,d,m,p,v,new ge)),h&&(_.normal=Io.getInterpolatedAttribute(h,d,m,p,v,new et),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new et,materialIndex:0};Io.getNormal(gc,_c,vc,y.normal),_.face=y,_.barycoord=v}return _}class jo extends Bi{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let y=0,M=0;E("z","y","x",-1,-1,s,i,e,h,u,0),E("z","y","x",1,-1,s,i,-e,h,u,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,u,4),E("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ii(p,3)),this.setAttribute("normal",new Ii(_,3)),this.setAttribute("uv",new Ii(v,2));function E(C,S,g,z,N,D,$,G,O,B,w){const T=D/O,F=$/B,ct=D/2,rt=$/2,gt=G/2,xt=O+1,P=B+1;let Z=0,j=0;const Tt=new et;for(let bt=0;bt<P;bt++){const L=bt*F-rt;for(let tt=0;tt<xt;tt++){const St=tt*T-ct;Tt[C]=St*z,Tt[S]=L*N,Tt[g]=gt,p.push(Tt.x,Tt.y,Tt.z),Tt[C]=0,Tt[S]=0,Tt[g]=G>0?1:-1,_.push(Tt.x,Tt.y,Tt.z),v.push(tt/O),v.push(1-bt/B),Z+=1}}for(let bt=0;bt<B;bt++)for(let L=0;L<O;L++){const tt=y+L+xt*bt,St=y+L+xt*(bt+1),k=y+(L+1)+xt*(bt+1),ft=y+(L+1)+xt*bt;m.push(tt,St,ft),m.push(St,k,ft),j+=6}d.addGroup(M,j,w),M+=j,y+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const s=zr(o[i]);for(const l in s)e[l]=s[l]}return e}function jS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function lv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const ZS={clone:zr,merge:Nn};var KS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends qo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KS,this.fragmentShader=QS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=jS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class cv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=ha}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new et,Z0=new ge,K0=new ge;class mi extends cv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=vd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vd*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-e/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(qa.x,qa.y).multiplyScalar(-e/qa.z)}getViewSize(e,i){return this.getViewBounds(e,Z0,K0),i.subVectors(K0,Z0)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Pc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const yr=-90,Sr=1;class JS extends Xn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(yr,Sr,e,i);l.layers=this.layers,this.add(l);const u=new mi(yr,Sr,e,i);u.layers=this.layers,this.add(u);const h=new mi(yr,Sr,e,i);h.layers=this.layers,this.add(h);const d=new mi(yr,Sr,e,i);d.layers=this.layers,this.add(d);const m=new mi(yr,Sr,e,i);m.layers=this.layers,this.add(m);const p=new mi(yr,Sr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ha)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Bc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(v,y,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class uv extends hn{constructor(e,i,s,l,u,h,d,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:Ur,super(e,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $S extends Rs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new uv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Dn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jo(5,5,5),u=new ti({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:Ka});u.uniforms.tEquirect.value=i;const h=new ei(l,u),d=i.minFilter;return i.minFilter===bs&&(i.minFilter=Dn),new JS(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}const Eh=new et,tM=new et,eM=new de;class ja{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Eh.subVectors(s,i).cross(tM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Eh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||eM.getNormalMatrix(e),l=this.coplanarPoint(Eh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Gc,Mc=new et;class fv{constructor(e=new ja,i=new ja,s=new ja,l=new ja,u=new ja,h=new ja){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ha){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],y=l[7],M=l[8],E=l[9],C=l[10],S=l[11],g=l[12],z=l[13],N=l[14],D=l[15];if(s[0].setComponents(m-u,y-p,S-M,D-g).normalize(),s[1].setComponents(m+u,y+p,S+M,D+g).normalize(),s[2].setComponents(m+h,y+_,S+E,D+z).normalize(),s[3].setComponents(m-h,y-_,S-E,D-z).normalize(),s[4].setComponents(m-d,y-v,S-C,D-N).normalize(),i===ha)s[5].setComponents(m+d,y+v,S+C,D+N).normalize();else if(i===Bc)s[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Mc.x=l.normal.x>0?e.max.x:e.min.x,Mc.y=l.normal.y>0?e.max.y:e.min.y,Mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function nM(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<v.length;M++){const E=v[y],C=v[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++y,v[y]=C)}v.length=y+1;for(let M=0,E=v.length;M<E;M++){const C=v[M];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}class Zo extends Bi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=e/d,y=i/m,M=[],E=[],C=[],S=[];for(let g=0;g<_;g++){const z=g*y-h;for(let N=0;N<p;N++){const D=N*v-u;E.push(D,-z,0),C.push(0,0,1),S.push(N/d),S.push(1-g/m)}}for(let g=0;g<m;g++)for(let z=0;z<d;z++){const N=z+p*g,D=z+p*(g+1),$=z+1+p*(g+1),G=z+1+p*g;M.push(N,D,G),M.push(D,$,G)}this.setIndex(M),this.setAttribute("position",new Ii(E,3)),this.setAttribute("normal",new Ii(C,3)),this.setAttribute("uv",new Ii(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
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
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
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
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
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
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AM=`#define PI 3.141592653589793
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
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XM=`#ifdef USE_GRADIENTMAP
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
}`,WM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
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
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tE=`PhysicalMaterial material;
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
#endif`,eE=`struct PhysicalMaterial {
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
}`,nE=`
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hE=`#if defined( USE_POINTS_UV )
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
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
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
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
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
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GE=`float getShadowMask() {
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
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,YE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
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
#endif`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,uT=`#define DISTANCE
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
}`,fT=`#define DISTANCE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`uniform float scale;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,_T=`uniform vec3 diffuse;
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
}`,vT=`#define LAMBERT
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
}`,xT=`#define LAMBERT
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
}`,yT=`#define MATCAP
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
}`,ST=`#define MATCAP
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
}`,MT=`#define NORMAL
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
}`,ET=`#define NORMAL
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
}`,TT=`#define PHONG
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
}`,bT=`#define PHONG
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
}`,AT=`#define STANDARD
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
}`,RT=`#define STANDARD
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
}`,CT=`#define TOON
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
}`,wT=`#define TOON
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
}`,DT=`uniform float size;
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
}`,UT=`uniform vec3 diffuse;
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
}`,LT=`#include <common>
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
}`,NT=`uniform vec3 color;
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
}`,OT=`uniform float rotation;
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
}`,PT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:iM,alphahash_pars_fragment:aM,alphamap_fragment:sM,alphamap_pars_fragment:rM,alphatest_fragment:oM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,batching_pars_vertex:fM,batching_vertex:hM,begin_vertex:dM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:SM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:bM,common:AM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:CM,displacementmap_pars_vertex:wM,displacementmap_vertex:DM,emissivemap_fragment:UM,emissivemap_pars_fragment:LM,colorspace_fragment:NM,colorspace_pars_fragment:OM,envmap_fragment:PM,envmap_common_pars_fragment:zM,envmap_pars_fragment:IM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:ZM,envmap_vertex:FM,fog_vertex:HM,fog_pars_vertex:GM,fog_fragment:VM,fog_pars_fragment:kM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:WM,lights_lambert_fragment:YM,lights_lambert_pars_fragment:qM,lights_pars_begin:jM,lights_toon_fragment:KM,lights_toon_pars_fragment:QM,lights_phong_fragment:JM,lights_phong_pars_fragment:$M,lights_physical_fragment:tE,lights_physical_pars_fragment:eE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:aE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:hE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:yE,normal_fragment_maps:SE,normal_pars_fragment:ME,normal_pars_vertex:EE,normal_vertex:TE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:wE,opaque_fragment:DE,packing:UE,premultiplied_alpha_fragment:LE,project_vertex:NE,dithering_fragment:OE,dithering_pars_fragment:PE,roughnessmap_fragment:zE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:FE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:VE,skinning_pars_vertex:kE,skinning_vertex:XE,skinnormal_vertex:WE,specularmap_fragment:YE,specularmap_pars_fragment:qE,tonemapping_fragment:jE,tonemapping_pars_fragment:ZE,transmission_fragment:KE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:$E,uv_vertex:tT,worldpos_vertex:eT,background_vert:nT,background_frag:iT,backgroundCube_vert:aT,backgroundCube_frag:sT,cube_vert:rT,cube_frag:oT,depth_vert:lT,depth_frag:cT,distanceRGBA_vert:uT,distanceRGBA_frag:fT,equirect_vert:hT,equirect_frag:dT,linedashed_vert:pT,linedashed_frag:mT,meshbasic_vert:gT,meshbasic_frag:_T,meshlambert_vert:vT,meshlambert_frag:xT,meshmatcap_vert:yT,meshmatcap_frag:ST,meshnormal_vert:MT,meshnormal_frag:ET,meshphong_vert:TT,meshphong_frag:bT,meshphysical_vert:AT,meshphysical_frag:RT,meshtoon_vert:CT,meshtoon_frag:wT,points_vert:DT,points_frag:UT,shadow_vert:LT,shadow_frag:NT,sprite_vert:OT,sprite_frag:PT},Pt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ni={basic:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Nn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Nn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Nn([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Nn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Nn([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Nn([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Nn([Pt.common,Pt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Nn([Pt.lights,Pt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Ni.physical={uniforms:Nn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Ec={r:0,b:0,g:0},ys=new ga,zT=new nn;function IT(o,e,i,s,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,_,v=null,y=0,M=null;function E(z){let N=z.isScene===!0?z.background:null;return N&&N.isTexture&&(N=(z.backgroundBlurriness>0?i:e).get(N)),N}function C(z){let N=!1;const D=E(z);D===null?g(d,m):D&&D.isColor&&(g(D,1),N=!0);const $=o.xr.getEnvironmentBlendMode();$==="additive"?s.buffers.color.setClear(0,0,0,1,h):$==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(z,N){const D=E(N);D&&(D.isCubeTexture||D.mapping===Fc)?(_===void 0&&(_=new ei(new jo(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:zr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function($,G,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ys.copy(N.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),_.material.uniforms.envMap.value=D,_.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(zT.makeRotationFromEuler(ys)),_.material.toneMapped=Re.getTransfer(D.colorSpace)!==ke,(v!==D||y!==D.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=D,y=D.version,M=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new ei(new Zo(2,2),new ti({name:"BackgroundMaterial",uniforms:zr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:pa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Re.getTransfer(D.colorSpace)!==ke,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||y!==D.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=D,y=D.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function g(z,N){z.getRGB(Ec,lv(o)),s.buffers.color.setClear(Ec.r,Ec.g,Ec.b,N,h)}return{getClearColor:function(){return d},setClearColor:function(z,N=1){d.set(z),m=N,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,g(d,m)},render:C,addToRenderList:S}}function BT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,h=!1;function d(T,F,ct,rt,gt){let xt=!1;const P=v(rt,ct,F);u!==P&&(u=P,p(u.object)),xt=M(T,rt,ct,gt),xt&&E(T,rt,ct,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(xt||h)&&(h=!1,D(T,F,ct,rt),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(T){return o.bindVertexArray(T)}function _(T){return o.deleteVertexArray(T)}function v(T,F,ct){const rt=ct.wireframe===!0;let gt=s[T.id];gt===void 0&&(gt={},s[T.id]=gt);let xt=gt[F.id];xt===void 0&&(xt={},gt[F.id]=xt);let P=xt[rt];return P===void 0&&(P=y(m()),xt[rt]=P),P}function y(T){const F=[],ct=[],rt=[];for(let gt=0;gt<i;gt++)F[gt]=0,ct[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ct,attributeDivisors:rt,object:T,attributes:{},index:null}}function M(T,F,ct,rt){const gt=u.attributes,xt=F.attributes;let P=0;const Z=ct.getAttributes();for(const j in Z)if(Z[j].location>=0){const bt=gt[j];let L=xt[j];if(L===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(L=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(L=T.instanceColor)),bt===void 0||bt.attribute!==L||L&&bt.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==rt}function E(T,F,ct,rt){const gt={},xt=F.attributes;let P=0;const Z=ct.getAttributes();for(const j in Z)if(Z[j].location>=0){let bt=xt[j];bt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(bt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(bt=T.instanceColor));const L={};L.attribute=bt,bt&&bt.data&&(L.data=bt.data),gt[j]=L,P++}u.attributes=gt,u.attributesNum=P,u.index=rt}function C(){const T=u.newAttributes;for(let F=0,ct=T.length;F<ct;F++)T[F]=0}function S(T){g(T,0)}function g(T,F){const ct=u.newAttributes,rt=u.enabledAttributes,gt=u.attributeDivisors;ct[T]=1,rt[T]===0&&(o.enableVertexAttribArray(T),rt[T]=1),gt[T]!==F&&(o.vertexAttribDivisor(T,F),gt[T]=F)}function z(){const T=u.newAttributes,F=u.enabledAttributes;for(let ct=0,rt=F.length;ct<rt;ct++)F[ct]!==T[ct]&&(o.disableVertexAttribArray(ct),F[ct]=0)}function N(T,F,ct,rt,gt,xt,P){P===!0?o.vertexAttribIPointer(T,F,ct,gt,xt):o.vertexAttribPointer(T,F,ct,rt,gt,xt)}function D(T,F,ct,rt){C();const gt=rt.attributes,xt=ct.getAttributes(),P=F.defaultAttributeValues;for(const Z in xt){const j=xt[Z];if(j.location>=0){let Tt=gt[Z];if(Tt===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(Tt=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(Tt=T.instanceColor)),Tt!==void 0){const bt=Tt.normalized,L=Tt.itemSize,tt=e.get(Tt);if(tt===void 0)continue;const St=tt.buffer,k=tt.type,ft=tt.bytesPerElement,At=k===o.INT||k===o.UNSIGNED_INT||Tt.gpuType===Ed;if(Tt.isInterleavedBufferAttribute){const Mt=Tt.data,zt=Mt.stride,Ft=Tt.offset;if(Mt.isInstancedInterleavedBuffer){for(let mt=0;mt<j.locationSize;mt++)g(j.location+mt,Mt.meshPerAttribute);T.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let mt=0;mt<j.locationSize;mt++)S(j.location+mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let mt=0;mt<j.locationSize;mt++)N(j.location+mt,L/j.locationSize,k,bt,zt*ft,(Ft+L/j.locationSize*mt)*ft,At)}else{if(Tt.isInstancedBufferAttribute){for(let Mt=0;Mt<j.locationSize;Mt++)g(j.location+Mt,Tt.meshPerAttribute);T.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Mt=0;Mt<j.locationSize;Mt++)S(j.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Mt=0;Mt<j.locationSize;Mt++)N(j.location+Mt,L/j.locationSize,k,bt,L*ft,L/j.locationSize*Mt*ft,At)}}else if(P!==void 0){const bt=P[Z];if(bt!==void 0)switch(bt.length){case 2:o.vertexAttrib2fv(j.location,bt);break;case 3:o.vertexAttrib3fv(j.location,bt);break;case 4:o.vertexAttrib4fv(j.location,bt);break;default:o.vertexAttrib1fv(j.location,bt)}}}}z()}function $(){B();for(const T in s){const F=s[T];for(const ct in F){const rt=F[ct];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete F[ct]}delete s[T]}}function G(T){if(s[T.id]===void 0)return;const F=s[T.id];for(const ct in F){const rt=F[ct];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete F[ct]}delete s[T.id]}function O(T){for(const F in s){const ct=s[F];if(ct[T.id]===void 0)continue;const rt=ct[T.id];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete ct[T.id]}}function B(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:w,dispose:$,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:z}}function FT(o,e,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E];i.update(M,s,1)}function m(p,_,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],_[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,y,0,v);let E=0;for(let C=0;C<v;C++)E+=_[C]*y[C];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function HT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==bi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const B=O===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ma&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==fa&&!B)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:$,maxSamples:G}}function GT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new ja,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||s!==0||l;return l=y,s=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){i=_(v,y,0)},this.setState=function(v,y,M){const E=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,g=o.get(v);if(!l||E===null||E.length===0||u&&!S)u?_(null):p();else{const z=u?0:s,N=z*4;let D=g.clippingState||null;m.value=D,D=_(E,y,N,M);for(let $=0;$!==N;++$)D[$]=i[$];g.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,y,M,E){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=m.value,E!==!0||S===null){const g=M+C*4,z=y.matrixWorldInverse;d.getNormalMatrix(z),(S===null||S.length<g)&&(S=new Float32Array(g));for(let N=0,D=M;N!==C;++N,D+=4)h.copy(v[N]).applyMatrix4(z,d),h.normal.toArray(S,D),S[D+3]=h.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function VT(o){let e=new WeakMap;function i(h,d){return d===kh?h.mapping=Ur:d===Xh&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===kh||d===Xh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new $S(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class kT extends cv{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ar=4,Q0=[.125,.215,.35,.446,.526,.582],Ts=20,Th=new kT,J0=new Ce;let bh=null,Ah=0,Rh=0,Ch=!1;const Ms=(1+Math.sqrt(5))/2,Mr=1/Ms,$0=[new et(-Ms,Mr,0),new et(Ms,Mr,0),new et(-Mr,0,Ms),new et(Mr,0,Ms),new et(0,Ms,-Mr),new et(0,Ms,Mr),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)];class t_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){bh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ur||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Xo,format:bi,colorSpace:Ir,depthBuffer:!1},l=e_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XT(u)),this._blurMaterial=WT(u,e,i)}return l}_compileMaterial(e){const i=new ei(this._lodPlanes[0],e);this._renderer.compile(i,Th)}_sceneToCubeUV(e,i,s,l){const d=new mi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(J0),_.toneMapping=Qa,_.autoClear=!1;const M=new sv({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new ei(new jo,M);let C=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,C=!0):(M.color.copy(J0),C=!0);for(let g=0;g<6;g++){const z=g%3;z===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):z===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const N=this._cubeSize;Tc(l,z*N,g>2?N:0,N,N),_.setRenderTarget(l),C&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ur||e.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ei(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Tc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Th)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=$0[(l-u-1)%$0.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new ei(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ts-1),C=u/E,S=isFinite(u)?1+Math.floor(_*C):Ts;S>Ts&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ts}`);const g=[];let z=0;for(let O=0;O<Ts;++O){const B=O/C,w=Math.exp(-B*B/2);g.push(w),O===0?z+=w:O<S&&(z+=2*w)}for(let O=0;O<g.length;O++)g[O]=g[O]/z;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-s;const D=this._sizeLods[l],$=3*D*(l>N-Ar?l-N+Ar:0),G=4*(this._cubeSize-D);Tc(i,$,G,3*D,2*D),m.setRenderTarget(i),m.render(v,Th)}}function XT(o){const e=[],i=[],s=[];let l=o;const u=o-Ar+1+Q0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ar?m=Q0[h-o+Ar-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,v=1+p,y=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,C=3,S=2,g=1,z=new Float32Array(C*E*M),N=new Float32Array(S*E*M),D=new Float32Array(g*E*M);for(let G=0;G<M;G++){const O=G%3*2/3-1,B=G>2?0:-1,w=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];z.set(w,C*E*G),N.set(y,S*E*G);const T=[G,G,G,G,G,G];D.set(T,g*E*G)}const $=new Bi;$.setAttribute("position",new Ri(z,C)),$.setAttribute("uv",new Ri(N,S)),$.setAttribute("faceIndex",new Ri(D,g)),e.push($),l>Ar&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function e_(o,e,i){const s=new Rs(o,e,i);return s.texture.mapping=Fc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function WT(o,e,i){const s=new Float32Array(Ts),l=new et(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function n_(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function i_(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Dd(){return`

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
	`}function YT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===kh||m===Xh,_=m===Ur||m===Lr;if(p||_){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new t_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new t_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function qT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function jT(o,e,i,s){const l={},u=new WeakMap;function h(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const C=y.morphAttributes[E];for(let S=0,g=C.length;S<g;S++)e.remove(C[S])}y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const E in y)e.update(y[E],o.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const C=M[E];for(let S=0,g=C.length;S<g;S++)e.update(C[S],o.ARRAY_BUFFER)}}function p(v){const y=[],M=v.index,E=v.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let N=0,D=z.length;N<D;N+=3){const $=z[N+0],G=z[N+1],O=z[N+2];y.push($,G,G,O,O,$)}}else if(E!==void 0){const z=E.array;C=E.version;for(let N=0,D=z.length/3-1;N<D;N+=3){const $=N+0,G=N+1,O=N+2;y.push($,G,G,O,O,$)}}else return;const S=new(tv(y)?ov:rv)(y,1);S.version=C;const g=u.get(v);g&&e.remove(g),u.set(v,S)}function _(v){const y=u.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function ZT(o,e,i){let s;function l(y){s=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,M){o.drawElements(s,M,u,y*h),i.update(M,s,1)}function p(y,M,E){E!==0&&(o.drawElementsInstanced(s,M,u,y*h,E),i.update(M,s,E))}function _(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,y,0,E);let S=0;for(let g=0;g<E;g++)S+=M[g];i.update(S,s,1)}function v(y,M,E,C){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)p(y[g]/h,M[g],C[g]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,u,y,0,C,0,E);let g=0;for(let z=0;z<E;z++)g+=M[z]*C[z];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function KT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function QT(o,e,i){const s=new WeakMap,l=new en;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let T=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",T)};var M=T;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),C===!0&&(D=2),S===!0&&(D=3);let $=d.attributes.position.count*D,G=1;$>e.maxTextureSize&&(G=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const O=new Float32Array($*G*4*v),B=new nv(O,$,G,v);B.type=fa,B.needsUpdate=!0;const w=D*4;for(let F=0;F<v;F++){const ct=g[F],rt=z[F],gt=N[F],xt=$*G*4*F;for(let P=0;P<ct.count;P++){const Z=P*w;E===!0&&(l.fromBufferAttribute(ct,P),O[xt+Z+0]=l.x,O[xt+Z+1]=l.y,O[xt+Z+2]=l.z,O[xt+Z+3]=0),C===!0&&(l.fromBufferAttribute(rt,P),O[xt+Z+4]=l.x,O[xt+Z+5]=l.y,O[xt+Z+6]=l.z,O[xt+Z+7]=0),S===!0&&(l.fromBufferAttribute(gt,P),O[xt+Z+8]=l.x,O[xt+Z+9]=l.y,O[xt+Z+10]=l.z,O[xt+Z+11]=gt.itemSize===4?l.w:1)}}y={count:v,texture:B,size:new ge($,G)},s.set(d,y),d.addEventListener("dispose",T)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function JT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class dv extends hn{constructor(e,i,s,l,u,h,d,m,p,_=Cr){if(_!==Cr&&_!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Cr&&(s=As),s===void 0&&_===Pr&&(s=Or),super(null,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ai,this.minFilter=m!==void 0?m:Ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const pv=new hn,a_=new dv(1,1),mv=new nv,gv=new IS,_v=new uv,s_=[],r_=[],o_=new Float32Array(16),l_=new Float32Array(9),c_=new Float32Array(4);function Br(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=s_[l];if(u===void 0&&(u=new Float32Array(l),s_[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Vc(o,e){let i=r_[e];i===void 0&&(i=new Int32Array(e),r_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function $T(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function t1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function e1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function n1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function i1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;c_.set(s),o.uniformMatrix2fv(this.addr,!1,c_),pn(i,s)}}function a1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;l_.set(s),o.uniformMatrix3fv(this.addr,!1,l_),pn(i,s)}}function s1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;o_.set(s),o.uniformMatrix4fv(this.addr,!1,o_),pn(i,s)}}function r1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function o1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function l1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function c1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function u1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function f1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function h1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function d1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function p1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(a_.compareFunction=$_,u=a_):u=pv,i.setTexture2D(e||u,l)}function m1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||gv,l)}function g1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||_v,l)}function _1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||mv,l)}function v1(o){switch(o){case 5126:return $T;case 35664:return t1;case 35665:return e1;case 35666:return n1;case 35674:return i1;case 35675:return a1;case 35676:return s1;case 5124:case 35670:return r1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return f1;case 36295:return h1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}function x1(o,e){o.uniform1fv(this.addr,e)}function y1(o,e){const i=Br(e,this.size,2);o.uniform2fv(this.addr,i)}function S1(o,e){const i=Br(e,this.size,3);o.uniform3fv(this.addr,i)}function M1(o,e){const i=Br(e,this.size,4);o.uniform4fv(this.addr,i)}function E1(o,e){const i=Br(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function T1(o,e){const i=Br(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function b1(o,e){const i=Br(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function A1(o,e){o.uniform1iv(this.addr,e)}function R1(o,e){o.uniform2iv(this.addr,e)}function C1(o,e){o.uniform3iv(this.addr,e)}function w1(o,e){o.uniform4iv(this.addr,e)}function D1(o,e){o.uniform1uiv(this.addr,e)}function U1(o,e){o.uniform2uiv(this.addr,e)}function L1(o,e){o.uniform3uiv(this.addr,e)}function N1(o,e){o.uniform4uiv(this.addr,e)}function O1(o,e,i){const s=this.cache,l=e.length,u=Vc(i,l);dn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||pv,u[h])}function P1(o,e,i){const s=this.cache,l=e.length,u=Vc(i,l);dn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||gv,u[h])}function z1(o,e,i){const s=this.cache,l=e.length,u=Vc(i,l);dn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||_v,u[h])}function I1(o,e,i){const s=this.cache,l=e.length,u=Vc(i,l);dn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||mv,u[h])}function B1(o){switch(o){case 5126:return x1;case 35664:return y1;case 35665:return S1;case 35666:return M1;case 35674:return E1;case 35675:return T1;case 35676:return b1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return w1;case 5125:return D1;case 36294:return U1;case 36295:return L1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return I1}}class F1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=v1(i.type)}}class H1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=B1(i.type)}}class G1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function u_(o,e){o.seq.push(e),o.map[e.id]=e}function V1(o,e,i){const s=o.name,l=s.length;for(wh.lastIndex=0;;){const u=wh.exec(s),h=wh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){u_(i,p===void 0?new F1(d,o,e):new H1(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new G1(d),u_(i,v)),i=v}}}class zc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);V1(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function f_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const k1=37297;let X1=0;function W1(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const h_=new de;function Y1(o){Re._getMatrix(h_,Re.workingColorSpace,o);const e=`mat3( ${h_.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Hc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function d_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+W1(o.getShaderSource(e),h)}else return l}function q1(o,e){const i=Y1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function j1(o,e){let i;switch(e){case lS:i="Linear";break;case cS:i="Reinhard";break;case uS:i="Cineon";break;case fS:i="ACESFilmic";break;case dS:i="AgX";break;case pS:i="Neutral";break;case hS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new et;function Z1(){Re.getLuminanceCoefficients(bc);const o=bc.x.toFixed(4),e=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Q1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function J1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ho(o){return o!==""}function p_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(o){return o.replace($1,eb)}const tb=new Map;function eb(o,e){let i=pe[e];if(i===void 0){const s=tb.get(e);if(s!==void 0)i=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return xd(i)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(o){return o.replace(nb,ib)}function ib(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function __(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function ab(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===H_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Gy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ua&&(e="SHADOWMAP_TYPE_VSM"),e}function sb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ur:case Lr:e="ENVMAP_TYPE_CUBE";break;case Fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function ob(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case G_:e="ENVMAP_BLENDING_MULTIPLY";break;case rS:e="ENVMAP_BLENDING_MIX";break;case oS:e="ENVMAP_BLENDING_ADD";break}return e}function lb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function cb(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=ab(i),p=sb(i),_=rb(i),v=ob(i),y=lb(i),M=K1(i),E=Q1(u),C=l.createProgram();let S,g,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),g.length>0&&(g+=`
`)):(S=[__(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),g=[__(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qa?"#define TONE_MAPPING":"",i.toneMapping!==Qa?pe.tonemapping_pars_fragment:"",i.toneMapping!==Qa?j1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,q1("linearToOutputTexel",i.outputColorSpace),Z1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=xd(h),h=p_(h,i),h=m_(h,i),d=xd(d),d=p_(d,i),d=m_(d,i),h=g_(h),d=g_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=z+S+h,D=z+g+d,$=f_(l,l.VERTEX_SHADER,N),G=f_(l,l.FRAGMENT_SHADER,D);l.attachShader(C,$),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(F){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(C).trim(),rt=l.getShaderInfoLog($).trim(),gt=l.getShaderInfoLog(G).trim();let xt=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(xt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,$,G);else{const Z=d_(l,$,"vertex"),j=d_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ct+`
`+Z+`
`+j)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(rt===""||gt==="")&&(P=!1);P&&(F.diagnostics={runnable:xt,programLog:ct,vertexShader:{log:rt,prefix:S},fragmentShader:{log:gt,prefix:g}})}l.deleteShader($),l.deleteShader(G),B=new zc(l,C),w=J1(l,C)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(C,k1)),T},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=X1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=$,this.fragmentShader=G,this}let ub=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new hb(e),i.set(e,s)),s}}class hb{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}}function db(o,e,i,s,l,u,h){const d=new iv,m=new fb,p=new Set,_=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,T,F,ct,rt){const gt=ct.fog,xt=rt.geometry,P=w.isMeshStandardMaterial?ct.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),j=Z&&Z.mapping===Fc?Z.image.height:null,Tt=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const bt=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,L=bt!==void 0?bt.length:0;let tt=0;xt.morphAttributes.position!==void 0&&(tt=1),xt.morphAttributes.normal!==void 0&&(tt=2),xt.morphAttributes.color!==void 0&&(tt=3);let St,k,ft,At;if(Tt){const Ae=Ni[Tt];St=Ae.vertexShader,k=Ae.fragmentShader}else St=w.vertexShader,k=w.fragmentShader,m.update(w),ft=m.getVertexShaderID(w),At=m.getFragmentShaderID(w);const Mt=o.getRenderTarget(),zt=o.state.buffers.depth.getReversed(),Ft=rt.isInstancedMesh===!0,mt=rt.isBatchedMesh===!0,ie=!!w.map,se=!!w.matcap,Oe=!!Z,X=!!w.aoMap,_e=!!w.lightMap,$t=!!w.bumpMap,le=!!w.normalMap,Xt=!!w.displacementMap,Te=!!w.emissiveMap,Kt=!!w.metalnessMap,U=!!w.roughnessMap,A=w.anisotropy>0,it=w.clearcoat>0,dt=w.dispersion>0,Et=w.iridescence>0,pt=w.sheen>0,Wt=w.transmission>0,Lt=A&&!!w.anisotropyMap,Bt=it&&!!w.clearcoatMap,me=it&&!!w.clearcoatNormalMap,Ct=it&&!!w.clearcoatRoughnessMap,Gt=Et&&!!w.iridescenceMap,Qt=Et&&!!w.iridescenceThicknessMap,Zt=pt&&!!w.sheenColorMap,vt=pt&&!!w.sheenRoughnessMap,It=!!w.specularMap,Ht=!!w.specularColorMap,re=!!w.specularIntensityMap,V=Wt&&!!w.transmissionMap,Rt=Wt&&!!w.thicknessMap,nt=!!w.gradientMap,ut=!!w.alphaMap,Dt=w.alphaTest>0,Ut=!!w.alphaHash,te=!!w.extensions;let Pe=Qa;w.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Pe=o.toneMapping);const Ye={shaderID:Tt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:k,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:At,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:mt,batchingColor:mt&&rt._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&rt.instanceColor!==null,instancingMorph:Ft&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ir,alphaToCoverage:!!w.alphaToCoverage,map:ie,matcap:se,envMap:Oe,envMapMode:Oe&&Z.mapping,envMapCubeUVHeight:j,aoMap:X,lightMap:_e,bumpMap:$t,normalMap:le,displacementMap:y&&Xt,emissiveMap:Te,normalMapObjectSpace:le&&w.normalMapType===xS,normalMapTangentSpace:le&&w.normalMapType===vS,metalnessMap:Kt,roughnessMap:U,anisotropy:A,anisotropyMap:Lt,clearcoat:it,clearcoatMap:Bt,clearcoatNormalMap:me,clearcoatRoughnessMap:Ct,dispersion:dt,iridescence:Et,iridescenceMap:Gt,iridescenceThicknessMap:Qt,sheen:pt,sheenColorMap:Zt,sheenRoughnessMap:vt,specularMap:It,specularColorMap:Ht,specularIntensityMap:re,transmission:Wt,transmissionMap:V,thicknessMap:Rt,gradientMap:nt,opaque:w.transparent===!1&&w.blending===Rr&&w.alphaToCoverage===!1,alphaMap:ut,alphaTest:Dt,alphaHash:Ut,combine:w.combine,mapUv:ie&&C(w.map.channel),aoMapUv:X&&C(w.aoMap.channel),lightMapUv:_e&&C(w.lightMap.channel),bumpMapUv:$t&&C(w.bumpMap.channel),normalMapUv:le&&C(w.normalMap.channel),displacementMapUv:Xt&&C(w.displacementMap.channel),emissiveMapUv:Te&&C(w.emissiveMap.channel),metalnessMapUv:Kt&&C(w.metalnessMap.channel),roughnessMapUv:U&&C(w.roughnessMap.channel),anisotropyMapUv:Lt&&C(w.anisotropyMap.channel),clearcoatMapUv:Bt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:vt&&C(w.sheenRoughnessMap.channel),specularMapUv:It&&C(w.specularMap.channel),specularColorMapUv:Ht&&C(w.specularColorMap.channel),specularIntensityMapUv:re&&C(w.specularIntensityMap.channel),transmissionMapUv:V&&C(w.transmissionMap.channel),thicknessMapUv:Rt&&C(w.thicknessMap.channel),alphaMapUv:ut&&C(w.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(le||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!xt.attributes.uv&&(ie||ut),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:zt,skinning:rt.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:tt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ie&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===ke,decodeVideoTextureEmissive:Te&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oi,flipSided:w.side===Un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:te&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&w.extensions.multiDraw===!0||mt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ye.vertexUv1s=p.has(1),Ye.vertexUv2s=p.has(2),Ye.vertexUv3s=p.has(3),p.clear(),Ye}function g(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)T.push(F),T.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(z(T,w),N(T,w),T.push(o.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function z(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function N(w,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reverseDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const T=E[w.type];let F;if(T){const ct=Ni[T];F=ZS.clone(ct.uniforms)}else F=w.uniforms;return F}function $(w,T){let F;for(let ct=0,rt=_.length;ct<rt;ct++){const gt=_[ct];if(gt.cacheKey===T){F=gt,++F.usedTimes;break}}return F===void 0&&(F=new cb(o,T,w,u),_.push(F)),F}function G(w){if(--w.usedTimes===0){const T=_.indexOf(w);_[T]=_[_.length-1],_.pop(),w.destroy()}}function O(w){m.remove(w)}function B(){m.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:D,acquireProgram:$,releaseProgram:G,releaseShaderCache:O,programs:_,dispose:B}}function pb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function mb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function v_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function x_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(v,y,M,E,C,S){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:y,material:M,groupOrder:E,renderOrder:v.renderOrder,z:C,group:S},o[e]=g):(g.id=v.id,g.object=v,g.geometry=y,g.material=M,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=C,g.group=S),e++,g}function d(v,y,M,E,C,S){const g=h(v,y,M,E,C,S);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,y,M,E,C,S){const g=h(v,y,M,E,C,S);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,y){i.length>1&&i.sort(v||mb),s.length>1&&s.sort(y||v_),l.length>1&&l.sort(y||v_)}function _(){for(let v=e,y=o.length;v<y;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function gb(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new x_,o.set(s,[h])):l>=u.length?(h=new x_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function _b(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new Ce};break;case"SpotLight":i={position:new et,direction:new et,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function vb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let xb=0;function yb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Sb(o){const e=new _b,i=vb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new et);const l=new et,u=new nn,h=new nn;function d(p){let _=0,v=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,E=0,C=0,S=0,g=0,z=0,N=0,D=0,$=0,G=0,O=0;p.sort(yb);for(let w=0,T=p.length;w<T;w++){const F=p[w],ct=F.color,rt=F.intensity,gt=F.distance,xt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=ct.r*rt,v+=ct.g*rt,y+=ct.b*rt;else if(F.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(F.sh.coefficients[P],rt);O++}else if(F.isDirectionalLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,j=i.get(F);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=xt,s.directionalShadowMatrix[M]=F.shadow.matrix,z++}s.directional[M]=P,M++}else if(F.isSpotLight){const P=e.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(ct).multiplyScalar(rt),P.distance=gt,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,s.spot[C]=P;const Z=F.shadow;if(F.map&&(s.spotLightMap[$]=F.map,$++,Z.updateMatrices(F),F.castShadow&&G++),s.spotLightMatrix[C]=Z.matrix,F.castShadow){const j=i.get(F);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,s.spotShadow[C]=j,s.spotShadowMap[C]=xt,D++}C++}else if(F.isRectAreaLight){const P=e.get(F);P.color.copy(ct).multiplyScalar(rt),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),s.rectArea[S]=P,S++}else if(F.isPointLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const Z=F.shadow,j=i.get(F);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,s.pointShadow[E]=j,s.pointShadowMap[E]=xt,s.pointShadowMatrix[E]=F.shadow.matrix,N++}s.point[E]=P,E++}else if(F.isHemisphereLight){const P=e.get(F);P.skyColor.copy(F.color).multiplyScalar(rt),P.groundColor.copy(F.groundColor).multiplyScalar(rt),s.hemi[g]=P,g++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=y;const B=s.hash;(B.directionalLength!==M||B.pointLength!==E||B.spotLength!==C||B.rectAreaLength!==S||B.hemiLength!==g||B.numDirectionalShadows!==z||B.numPointShadows!==N||B.numSpotShadows!==D||B.numSpotMaps!==$||B.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=S,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+$-G,s.spotLightMap.length=$,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=O,B.directionalLength=M,B.pointLength=E,B.spotLength=C,B.rectAreaLength=S,B.hemiLength=g,B.numDirectionalShadows=z,B.numPointShadows=N,B.numSpotShadows=D,B.numSpotMaps=$,B.numLightProbes=O,s.version=xb++)}function m(p,_){let v=0,y=0,M=0,E=0,C=0;const S=_.matrixWorldInverse;for(let g=0,z=p.length;g<z;g++){const N=p[g];if(N.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),v++}else if(N.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),h.identity(),u.copy(N.matrixWorld),u.premultiply(S),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),y++}else if(N.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(S),C++}}}return{setup:d,setupView:m,state:s}}function y_(o){const e=new Sb(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Mb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new y_(o),e.set(l,[d])):u>=h.length?(d=new y_(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}class Eb extends qo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tb extends qo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ab=`uniform sampler2D shadow_pass;
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
}`;function Rb(o,e,i){let s=new fv;const l=new ge,u=new ge,h=new en,d=new Eb({depthPacking:_S}),m=new Tb,p={},_=i.maxTextureSize,v={[pa]:Un,[Un]:pa,[Oi]:Oi},y=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:bb,fragmentShader:Ab}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new Bi;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ei(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H_;let g=this.type;this.render=function(G,O,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),T=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Ka),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const rt=g!==ua&&this.type===ua,gt=g===ua&&this.type!==ua;for(let xt=0,P=G.length;xt<P;xt++){const Z=G[xt],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Tt=j.getFrameExtents();if(l.multiply(Tt),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/Tt.x),l.x=u.x*Tt.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/Tt.y),l.y=u.y*Tt.y,j.mapSize.y=u.y)),j.map===null||rt===!0||gt===!0){const L=this.type!==ua?{minFilter:Ai,magFilter:Ai}:{};j.map!==null&&j.map.dispose(),j.map=new Rs(l.x,l.y,L),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const bt=j.getViewportCount();for(let L=0;L<bt;L++){const tt=j.getViewport(L);h.set(u.x*tt.x,u.y*tt.y,u.x*tt.z,u.y*tt.w),ct.viewport(h),j.updateMatrices(Z,L),s=j.getFrustum(),D(O,B,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ua&&z(j,B),j.needsUpdate=!1}g=this.type,S.needsUpdate=!1,o.setRenderTarget(w,T,F)};function z(G,O){const B=e.update(C);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Rs(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(O,null,B,y,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(O,null,B,M,C,null)}function N(G,O,B,w){let T=null;const F=B.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(F!==void 0)T=F;else if(T=B.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ct=T.uuid,rt=O.uuid;let gt=p[ct];gt===void 0&&(gt={},p[ct]=gt);let xt=gt[rt];xt===void 0&&(xt=T.clone(),gt[rt]=xt,O.addEventListener("dispose",$)),T=xt}if(T.visible=O.visible,T.wireframe=O.wireframe,w===ua?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:v[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ct=o.properties.get(T);ct.light=B}return T}function D(G,O,B,w,T){if(G.visible===!1)return;if(G.layers.test(O.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&T===ua)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,G.matrixWorld);const rt=e.update(G),gt=G.material;if(Array.isArray(gt)){const xt=rt.groups;for(let P=0,Z=xt.length;P<Z;P++){const j=xt[P],Tt=gt[j.materialIndex];if(Tt&&Tt.visible){const bt=N(G,Tt,w,T);G.onBeforeShadow(o,G,O,B,rt,bt,j),o.renderBufferDirect(B,null,rt,bt,G,j),G.onAfterShadow(o,G,O,B,rt,bt,j)}}}else if(gt.visible){const xt=N(G,gt,w,T);G.onBeforeShadow(o,G,O,B,rt,xt,null),o.renderBufferDirect(B,null,rt,xt,G,null),G.onAfterShadow(o,G,O,B,rt,xt,null)}}const ct=G.children;for(let rt=0,gt=ct.length;rt<gt;rt++)D(ct[rt],O,B,w,T)}function $(G){G.target.removeEventListener("dispose",$);for(const B in p){const w=p[B],T=G.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const Cb={[zh]:Ih,[Bh]:Gh,[Fh]:Vh,[Dr]:Hh,[Ih]:zh,[Gh]:Bh,[Vh]:Fh,[Hh]:Dr};function wb(o,e){function i(){let V=!1;const Rt=new en;let nt=null;const ut=new en(0,0,0,0);return{setMask:function(Dt){nt!==Dt&&!V&&(o.colorMask(Dt,Dt,Dt,Dt),nt=Dt)},setLocked:function(Dt){V=Dt},setClear:function(Dt,Ut,te,Pe,Ye){Ye===!0&&(Dt*=Pe,Ut*=Pe,te*=Pe),Rt.set(Dt,Ut,te,Pe),ut.equals(Rt)===!1&&(o.clearColor(Dt,Ut,te,Pe),ut.copy(Rt))},reset:function(){V=!1,nt=null,ut.set(-1,0,0,0)}}}function s(){let V=!1,Rt=!1,nt=null,ut=null,Dt=null;return{setReversed:function(Ut){if(Rt!==Ut){const te=e.get("EXT_clip_control");Rt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Pe=Dt;Dt=null,this.setClear(Pe)}Rt=Ut},getReversed:function(){return Rt},setTest:function(Ut){Ut?Mt(o.DEPTH_TEST):zt(o.DEPTH_TEST)},setMask:function(Ut){nt!==Ut&&!V&&(o.depthMask(Ut),nt=Ut)},setFunc:function(Ut){if(Rt&&(Ut=Cb[Ut]),ut!==Ut){switch(Ut){case zh:o.depthFunc(o.NEVER);break;case Ih:o.depthFunc(o.ALWAYS);break;case Bh:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Fh:o.depthFunc(o.EQUAL);break;case Hh:o.depthFunc(o.GEQUAL);break;case Gh:o.depthFunc(o.GREATER);break;case Vh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ut=Ut}},setLocked:function(Ut){V=Ut},setClear:function(Ut){Dt!==Ut&&(Rt&&(Ut=1-Ut),o.clearDepth(Ut),Dt=Ut)},reset:function(){V=!1,nt=null,ut=null,Dt=null,Rt=!1}}}function l(){let V=!1,Rt=null,nt=null,ut=null,Dt=null,Ut=null,te=null,Pe=null,Ye=null;return{setTest:function(Ae){V||(Ae?Mt(o.STENCIL_TEST):zt(o.STENCIL_TEST))},setMask:function(Ae){Rt!==Ae&&!V&&(o.stencilMask(Ae),Rt=Ae)},setFunc:function(Ae,vn,gi){(nt!==Ae||ut!==vn||Dt!==gi)&&(o.stencilFunc(Ae,vn,gi),nt=Ae,ut=vn,Dt=gi)},setOp:function(Ae,vn,gi){(Ut!==Ae||te!==vn||Pe!==gi)&&(o.stencilOp(Ae,vn,gi),Ut=Ae,te=vn,Pe=gi)},setLocked:function(Ae){V=Ae},setClear:function(Ae){Ye!==Ae&&(o.clearStencil(Ae),Ye=Ae)},reset:function(){V=!1,Rt=null,nt=null,ut=null,Dt=null,Ut=null,te=null,Pe=null,Ye=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},y=new WeakMap,M=[],E=null,C=!1,S=null,g=null,z=null,N=null,D=null,$=null,G=null,O=new Ce(0,0,0),B=0,w=!1,T=null,F=null,ct=null,rt=null,gt=null;const xt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),P=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),P=Z>=2);let Tt=null,bt={};const L=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),St=new en().fromArray(L),k=new en().fromArray(tt);function ft(V,Rt,nt,ut){const Dt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(V,Ut),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let te=0;te<nt;te++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,ut,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(Rt+te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return Ut}const At={};At[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),At[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),At[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(Dr),$t(!1),le(b0),Mt(o.CULL_FACE),X(Ka);function Mt(V){_[V]!==!0&&(o.enable(V),_[V]=!0)}function zt(V){_[V]!==!1&&(o.disable(V),_[V]=!1)}function Ft(V,Rt){return v[V]!==Rt?(o.bindFramebuffer(V,Rt),v[V]=Rt,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Rt),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function mt(V,Rt){let nt=M,ut=!1;if(V){nt=y.get(Rt),nt===void 0&&(nt=[],y.set(Rt,nt));const Dt=V.textures;if(nt.length!==Dt.length||nt[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,te=Dt.length;Ut<te;Ut++)nt[Ut]=o.COLOR_ATTACHMENT0+Ut;nt.length=Dt.length,ut=!0}}else nt[0]!==o.BACK&&(nt[0]=o.BACK,ut=!0);ut&&o.drawBuffers(nt)}function ie(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const se={[Es]:o.FUNC_ADD,[ky]:o.FUNC_SUBTRACT,[Xy]:o.FUNC_REVERSE_SUBTRACT};se[Wy]=o.MIN,se[Yy]=o.MAX;const Oe={[qy]:o.ZERO,[jy]:o.ONE,[Zy]:o.SRC_COLOR,[Oh]:o.SRC_ALPHA,[eS]:o.SRC_ALPHA_SATURATE,[$y]:o.DST_COLOR,[Qy]:o.DST_ALPHA,[Ky]:o.ONE_MINUS_SRC_COLOR,[Ph]:o.ONE_MINUS_SRC_ALPHA,[tS]:o.ONE_MINUS_DST_COLOR,[Jy]:o.ONE_MINUS_DST_ALPHA,[nS]:o.CONSTANT_COLOR,[iS]:o.ONE_MINUS_CONSTANT_COLOR,[aS]:o.CONSTANT_ALPHA,[sS]:o.ONE_MINUS_CONSTANT_ALPHA};function X(V,Rt,nt,ut,Dt,Ut,te,Pe,Ye,Ae){if(V===Ka){C===!0&&(zt(o.BLEND),C=!1);return}if(C===!1&&(Mt(o.BLEND),C=!0),V!==Vy){if(V!==S||Ae!==w){if((g!==Es||D!==Es)&&(o.blendEquation(o.FUNC_ADD),g=Es,D=Es),Ae)switch(V){case Rr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ic:o.blendFunc(o.ONE,o.ONE);break;case A0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Rr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ic:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case A0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}z=null,N=null,$=null,G=null,O.set(0,0,0),B=0,S=V,w=Ae}return}Dt=Dt||Rt,Ut=Ut||nt,te=te||ut,(Rt!==g||Dt!==D)&&(o.blendEquationSeparate(se[Rt],se[Dt]),g=Rt,D=Dt),(nt!==z||ut!==N||Ut!==$||te!==G)&&(o.blendFuncSeparate(Oe[nt],Oe[ut],Oe[Ut],Oe[te]),z=nt,N=ut,$=Ut,G=te),(Pe.equals(O)===!1||Ye!==B)&&(o.blendColor(Pe.r,Pe.g,Pe.b,Ye),O.copy(Pe),B=Ye),S=V,w=!1}function _e(V,Rt){V.side===Oi?zt(o.CULL_FACE):Mt(o.CULL_FACE);let nt=V.side===Un;Rt&&(nt=!nt),$t(nt),V.blending===Rr&&V.transparent===!1?X(Ka):X(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const ut=V.stencilWrite;d.setTest(ut),ut&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Te(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):zt(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(V){T!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),T=V)}function le(V){V!==Fy?(Mt(o.CULL_FACE),V!==F&&(V===b0?o.cullFace(o.BACK):V===Hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):zt(o.CULL_FACE),F=V}function Xt(V){V!==ct&&(P&&o.lineWidth(V),ct=V)}function Te(V,Rt,nt){V?(Mt(o.POLYGON_OFFSET_FILL),(rt!==Rt||gt!==nt)&&(o.polygonOffset(Rt,nt),rt=Rt,gt=nt)):zt(o.POLYGON_OFFSET_FILL)}function Kt(V){V?Mt(o.SCISSOR_TEST):zt(o.SCISSOR_TEST)}function U(V){V===void 0&&(V=o.TEXTURE0+xt-1),Tt!==V&&(o.activeTexture(V),Tt=V)}function A(V,Rt,nt){nt===void 0&&(Tt===null?nt=o.TEXTURE0+xt-1:nt=Tt);let ut=bt[nt];ut===void 0&&(ut={type:void 0,texture:void 0},bt[nt]=ut),(ut.type!==V||ut.texture!==Rt)&&(Tt!==nt&&(o.activeTexture(nt),Tt=nt),o.bindTexture(V,Rt||At[V]),ut.type=V,ut.texture=Rt)}function it(){const V=bt[Tt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function dt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ct(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qt(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Zt(V){St.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),St.copy(V))}function vt(V){k.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),k.copy(V))}function It(V,Rt){let nt=p.get(Rt);nt===void 0&&(nt=new WeakMap,p.set(Rt,nt));let ut=nt.get(V);ut===void 0&&(ut=o.getUniformBlockIndex(Rt,V.name),nt.set(V,ut))}function Ht(V,Rt){const ut=p.get(Rt).get(V);m.get(Rt)!==ut&&(o.uniformBlockBinding(Rt,ut,V.__bindingPointIndex),m.set(Rt,ut))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Tt=null,bt={},v={},y=new WeakMap,M=[],E=null,C=!1,S=null,g=null,z=null,N=null,D=null,$=null,G=null,O=new Ce(0,0,0),B=0,w=!1,T=null,F=null,ct=null,rt=null,gt=null,St.set(0,0,o.canvas.width,o.canvas.height),k.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:zt,bindFramebuffer:Ft,drawBuffers:mt,useProgram:ie,setBlending:X,setMaterial:_e,setFlipSided:$t,setCullFace:le,setLineWidth:Xt,setPolygonOffset:Te,setScissorTest:Kt,activeTexture:U,bindTexture:A,unbindTexture:it,compressedTexImage2D:dt,compressedTexImage3D:Et,texImage2D:Gt,texImage3D:Qt,updateUBOMapping:It,uniformBlockBinding:Ht,texStorage2D:me,texStorage3D:Ct,texSubImage2D:pt,texSubImage3D:Wt,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Bt,scissor:Zt,viewport:vt,reset:re}}function S_(o,e,i,s){const l=Db(s);switch(i){case Y_:return o*e;case j_:return o*e;case Z_:return o*e*2;case K_:return o*e/l.components*l.byteLength;case Ad:return o*e/l.components*l.byteLength;case Q_:return o*e*2/l.components*l.byteLength;case Rd:return o*e*2/l.components*l.byteLength;case q_:return o*e*3/l.components*l.byteLength;case bi:return o*e*4/l.components*l.byteLength;case Cd:return o*e*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:case Zh:return Math.max(o,16)*Math.max(e,8)/4;case Yh:case jh:return Math.max(o,8)*Math.max(e,8)/2;case Kh:case Qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ed:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ad:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case sd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case od:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case fd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case hd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Oc:case dd:case pd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case J_:case md:return Math.ceil(o/4)*Math.ceil(e/4)*8;case gd:case _d:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Db(o){switch(o){case ma:case k_:return{byteLength:1,components:1};case Vo:case X_:case Xo:return{byteLength:2,components:1};case Td:case bd:return{byteLength:2,components:4};case As:case Ed:case fa:return{byteLength:4,components:1};case W_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Ub(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ge,_=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,A){return M?new OffscreenCanvas(U,A):ko("canvas")}function C(U,A,it){let dt=1;const Et=Kt(U);if((Et.width>it||Et.height>it)&&(dt=it/Math.max(Et.width,Et.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(dt*Et.width),Wt=Math.floor(dt*Et.height);v===void 0&&(v=E(pt,Wt));const Lt=A?E(pt,Wt):v;return Lt.width=pt,Lt.height=Wt,Lt.getContext("2d").drawImage(U,0,0,pt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+Wt+")."),Lt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),U;return U}function S(U){return U.generateMipmaps}function g(U){o.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,A,it,dt,Et=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=A;if(A===o.RED&&(it===o.FLOAT&&(pt=o.R32F),it===o.HALF_FLOAT&&(pt=o.R16F),it===o.UNSIGNED_BYTE&&(pt=o.R8)),A===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.R8UI),it===o.UNSIGNED_SHORT&&(pt=o.R16UI),it===o.UNSIGNED_INT&&(pt=o.R32UI),it===o.BYTE&&(pt=o.R8I),it===o.SHORT&&(pt=o.R16I),it===o.INT&&(pt=o.R32I)),A===o.RG&&(it===o.FLOAT&&(pt=o.RG32F),it===o.HALF_FLOAT&&(pt=o.RG16F),it===o.UNSIGNED_BYTE&&(pt=o.RG8)),A===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RG8UI),it===o.UNSIGNED_SHORT&&(pt=o.RG16UI),it===o.UNSIGNED_INT&&(pt=o.RG32UI),it===o.BYTE&&(pt=o.RG8I),it===o.SHORT&&(pt=o.RG16I),it===o.INT&&(pt=o.RG32I)),A===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),it===o.UNSIGNED_INT&&(pt=o.RGB32UI),it===o.BYTE&&(pt=o.RGB8I),it===o.SHORT&&(pt=o.RGB16I),it===o.INT&&(pt=o.RGB32I)),A===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),it===o.UNSIGNED_INT&&(pt=o.RGBA32UI),it===o.BYTE&&(pt=o.RGBA8I),it===o.SHORT&&(pt=o.RGBA16I),it===o.INT&&(pt=o.RGBA32I)),A===o.RGB&&it===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),A===o.RGBA){const Wt=Et?Hc:Re.getTransfer(dt);it===o.FLOAT&&(pt=o.RGBA32F),it===o.HALF_FLOAT&&(pt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(pt=Wt===ke?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function D(U,A){let it;return U?A===null||A===As||A===Or?it=o.DEPTH24_STENCIL8:A===fa?it=o.DEPTH32F_STENCIL8:A===Vo&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===As||A===Or?it=o.DEPTH_COMPONENT24:A===fa?it=o.DEPTH_COMPONENT32F:A===Vo&&(it=o.DEPTH_COMPONENT16),it}function $(U,A){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ai&&U.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function G(U){const A=U.target;A.removeEventListener("dispose",G),B(A),A.isVideoTexture&&_.delete(A)}function O(U){const A=U.target;A.removeEventListener("dispose",O),T(A)}function B(U){const A=s.get(U);if(A.__webglInit===void 0)return;const it=U.source,dt=y.get(it);if(dt){const Et=dt[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&w(U),Object.keys(dt).length===0&&y.delete(it)}s.remove(U)}function w(U){const A=s.get(U);o.deleteTexture(A.__webglTexture);const it=U.source,dt=y.get(it);delete dt[A.__cacheKey],h.memory.textures--}function T(U){const A=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(A.__webglFramebuffer[dt]))for(let Et=0;Et<A.__webglFramebuffer[dt].length;Et++)o.deleteFramebuffer(A.__webglFramebuffer[dt][Et]);else o.deleteFramebuffer(A.__webglFramebuffer[dt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[dt])}else{if(Array.isArray(A.__webglFramebuffer))for(let dt=0;dt<A.__webglFramebuffer.length;dt++)o.deleteFramebuffer(A.__webglFramebuffer[dt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let dt=0;dt<A.__webglColorRenderbuffer.length;dt++)A.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[dt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const it=U.textures;for(let dt=0,Et=it.length;dt<Et;dt++){const pt=s.get(it[dt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(it[dt])}s.remove(U)}let F=0;function ct(){F=0}function rt(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function gt(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function xt(U,A){const it=s.get(U);if(U.isVideoTexture&&Xt(U),U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(it,U,A);return}}i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+A)}function P(U,A){const it=s.get(U);if(U.version>0&&it.__version!==U.version){k(it,U,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+A)}function Z(U,A){const it=s.get(U);if(U.version>0&&it.__version!==U.version){k(it,U,A);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+A)}function j(U,A){const it=s.get(U);if(U.version>0&&it.__version!==U.version){ft(it,U,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+A)}const Tt={[Nr]:o.REPEAT,[zi]:o.CLAMP_TO_EDGE,[Wh]:o.MIRRORED_REPEAT},bt={[Ai]:o.NEAREST,[mS]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[Dn]:o.LINEAR,[nh]:o.LINEAR_MIPMAP_NEAREST,[bs]:o.LINEAR_MIPMAP_LINEAR},L={[yS]:o.NEVER,[AS]:o.ALWAYS,[SS]:o.LESS,[$_]:o.LEQUAL,[MS]:o.EQUAL,[bS]:o.GEQUAL,[ES]:o.GREATER,[TS]:o.NOTEQUAL};function tt(U,A){if(A.type===fa&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Dn||A.magFilter===nh||A.magFilter===sc||A.magFilter===bs||A.minFilter===Dn||A.minFilter===nh||A.minFilter===sc||A.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Tt[A.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Tt[A.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Tt[A.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,bt[A.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,bt[A.minFilter]),A.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ai||A.minFilter!==sc&&A.minFilter!==bs||A.type===fa&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function St(U,A){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",G));const dt=A.source;let Et=y.get(dt);Et===void 0&&(Et={},y.set(dt,Et));const pt=gt(A);if(pt!==U.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),Et[pt].usedTimes++;const Wt=Et[U.__cacheKey];Wt!==void 0&&(Et[U.__cacheKey].usedTimes--,Wt.usedTimes===0&&w(A)),U.__cacheKey=pt,U.__webglTexture=Et[pt].texture}return it}function k(U,A,it){let dt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=o.TEXTURE_3D);const Et=St(U,A),pt=A.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+it);const Wt=s.get(pt);if(pt.version!==Wt.__version||Et===!0){i.activeTexture(o.TEXTURE0+it);const Lt=Re.getPrimaries(Re.workingColorSpace),Bt=A.colorSpace===Za?null:Re.getPrimaries(A.colorSpace),me=A.colorSpace===Za||Lt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ct=C(A.image,!1,l.maxTextureSize);Ct=Te(A,Ct);const Gt=u.convert(A.format,A.colorSpace),Qt=u.convert(A.type);let Zt=N(A.internalFormat,Gt,Qt,A.colorSpace,A.isVideoTexture);tt(dt,A);let vt;const It=A.mipmaps,Ht=A.isVideoTexture!==!0,re=Wt.__version===void 0||Et===!0,V=pt.dataReady,Rt=$(A,Ct);if(A.isDepthTexture)Zt=D(A.format===Pr,A.type),re&&(Ht?i.texStorage2D(o.TEXTURE_2D,1,Zt,Ct.width,Ct.height):i.texImage2D(o.TEXTURE_2D,0,Zt,Ct.width,Ct.height,0,Gt,Qt,null));else if(A.isDataTexture)if(It.length>0){Ht&&re&&i.texStorage2D(o.TEXTURE_2D,Rt,Zt,It[0].width,It[0].height);for(let nt=0,ut=It.length;nt<ut;nt++)vt=It[nt],Ht?V&&i.texSubImage2D(o.TEXTURE_2D,nt,0,0,vt.width,vt.height,Gt,Qt,vt.data):i.texImage2D(o.TEXTURE_2D,nt,Zt,vt.width,vt.height,0,Gt,Qt,vt.data);A.generateMipmaps=!1}else Ht?(re&&i.texStorage2D(o.TEXTURE_2D,Rt,Zt,Ct.width,Ct.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct.width,Ct.height,Gt,Qt,Ct.data)):i.texImage2D(o.TEXTURE_2D,0,Zt,Ct.width,Ct.height,0,Gt,Qt,Ct.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ht&&re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Zt,It[0].width,It[0].height,Ct.depth);for(let nt=0,ut=It.length;nt<ut;nt++)if(vt=It[nt],A.format!==bi)if(Gt!==null)if(Ht){if(V)if(A.layerUpdates.size>0){const Dt=S_(vt.width,vt.height,A.format,A.type);for(const Ut of A.layerUpdates){const te=vt.data.subarray(Ut*Dt/vt.data.BYTES_PER_ELEMENT,(Ut+1)*Dt/vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,nt,0,0,Ut,vt.width,vt.height,1,Gt,te)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,nt,0,0,0,vt.width,vt.height,Ct.depth,Gt,vt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,nt,Zt,vt.width,vt.height,Ct.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,nt,0,0,0,vt.width,vt.height,Ct.depth,Gt,Qt,vt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,nt,Zt,vt.width,vt.height,Ct.depth,0,Gt,Qt,vt.data)}else{Ht&&re&&i.texStorage2D(o.TEXTURE_2D,Rt,Zt,It[0].width,It[0].height);for(let nt=0,ut=It.length;nt<ut;nt++)vt=It[nt],A.format!==bi?Gt!==null?Ht?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,nt,0,0,vt.width,vt.height,Gt,vt.data):i.compressedTexImage2D(o.TEXTURE_2D,nt,Zt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?V&&i.texSubImage2D(o.TEXTURE_2D,nt,0,0,vt.width,vt.height,Gt,Qt,vt.data):i.texImage2D(o.TEXTURE_2D,nt,Zt,vt.width,vt.height,0,Gt,Qt,vt.data)}else if(A.isDataArrayTexture)if(Ht){if(re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Zt,Ct.width,Ct.height,Ct.depth),V)if(A.layerUpdates.size>0){const nt=S_(Ct.width,Ct.height,A.format,A.type);for(const ut of A.layerUpdates){const Dt=Ct.data.subarray(ut*nt/Ct.data.BYTES_PER_ELEMENT,(ut+1)*nt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ut,Ct.width,Ct.height,1,Gt,Qt,Dt)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,Qt,Ct.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,Ct.width,Ct.height,Ct.depth,0,Gt,Qt,Ct.data);else if(A.isData3DTexture)Ht?(re&&i.texStorage3D(o.TEXTURE_3D,Rt,Zt,Ct.width,Ct.height,Ct.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,Qt,Ct.data)):i.texImage3D(o.TEXTURE_3D,0,Zt,Ct.width,Ct.height,Ct.depth,0,Gt,Qt,Ct.data);else if(A.isFramebufferTexture){if(re)if(Ht)i.texStorage2D(o.TEXTURE_2D,Rt,Zt,Ct.width,Ct.height);else{let nt=Ct.width,ut=Ct.height;for(let Dt=0;Dt<Rt;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,Zt,nt,ut,0,Gt,Qt,null),nt>>=1,ut>>=1}}else if(It.length>0){if(Ht&&re){const nt=Kt(It[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Zt,nt.width,nt.height)}for(let nt=0,ut=It.length;nt<ut;nt++)vt=It[nt],Ht?V&&i.texSubImage2D(o.TEXTURE_2D,nt,0,0,Gt,Qt,vt):i.texImage2D(o.TEXTURE_2D,nt,Zt,Gt,Qt,vt);A.generateMipmaps=!1}else if(Ht){if(re){const nt=Kt(Ct);i.texStorage2D(o.TEXTURE_2D,Rt,Zt,nt.width,nt.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,Qt,Ct)}else i.texImage2D(o.TEXTURE_2D,0,Zt,Gt,Qt,Ct);S(A)&&g(dt),Wt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ft(U,A,it){if(A.image.length!==6)return;const dt=St(U,A),Et=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+it);const pt=s.get(Et);if(Et.version!==pt.__version||dt===!0){i.activeTexture(o.TEXTURE0+it);const Wt=Re.getPrimaries(Re.workingColorSpace),Lt=A.colorSpace===Za?null:Re.getPrimaries(A.colorSpace),Bt=A.colorSpace===Za||Wt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,Ct=A.image[0]&&A.image[0].isDataTexture,Gt=[];for(let ut=0;ut<6;ut++)!me&&!Ct?Gt[ut]=C(A.image[ut],!0,l.maxCubemapSize):Gt[ut]=Ct?A.image[ut].image:A.image[ut],Gt[ut]=Te(A,Gt[ut]);const Qt=Gt[0],Zt=u.convert(A.format,A.colorSpace),vt=u.convert(A.type),It=N(A.internalFormat,Zt,vt,A.colorSpace),Ht=A.isVideoTexture!==!0,re=pt.__version===void 0||dt===!0,V=Et.dataReady;let Rt=$(A,Qt);tt(o.TEXTURE_CUBE_MAP,A);let nt;if(me){Ht&&re&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,It,Qt.width,Qt.height);for(let ut=0;ut<6;ut++){nt=Gt[ut].mipmaps;for(let Dt=0;Dt<nt.length;Dt++){const Ut=nt[Dt];A.format!==bi?Zt!==null?Ht?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,0,0,Ut.width,Ut.height,Zt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,It,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,0,0,Ut.width,Ut.height,Zt,vt,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,It,Ut.width,Ut.height,0,Zt,vt,Ut.data)}}}else{if(nt=A.mipmaps,Ht&&re){nt.length>0&&Rt++;const ut=Kt(Gt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,It,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Ct){Ht?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Gt[ut].width,Gt[ut].height,Zt,vt,Gt[ut].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,It,Gt[ut].width,Gt[ut].height,0,Zt,vt,Gt[ut].data);for(let Dt=0;Dt<nt.length;Dt++){const te=nt[Dt].image[ut].image;Ht?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,0,0,te.width,te.height,Zt,vt,te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,It,te.width,te.height,0,Zt,vt,te.data)}}else{Ht?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Zt,vt,Gt[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,It,Zt,vt,Gt[ut]);for(let Dt=0;Dt<nt.length;Dt++){const Ut=nt[Dt];Ht?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,0,0,Zt,vt,Ut.image[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,It,Zt,vt,Ut.image[ut])}}}S(A)&&g(o.TEXTURE_CUBE_MAP),pt.__version=Et.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function At(U,A,it,dt,Et,pt){const Wt=u.convert(it.format,it.colorSpace),Lt=u.convert(it.type),Bt=N(it.internalFormat,Wt,Lt,it.colorSpace),me=s.get(A),Ct=s.get(it);if(Ct.__renderTarget=A,!me.__hasExternalTextures){const Gt=Math.max(1,A.width>>pt),Qt=Math.max(1,A.height>>pt);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,pt,Bt,Gt,Qt,A.depth,0,Wt,Lt,null):i.texImage2D(Et,pt,Bt,Gt,Qt,0,Wt,Lt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),le(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Et,Ct.__webglTexture,0,$t(A)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Et,Ct.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Mt(U,A,it){if(o.bindRenderbuffer(o.RENDERBUFFER,U),A.depthBuffer){const dt=A.depthTexture,Et=dt&&dt.isDepthTexture?dt.type:null,pt=D(A.stencilBuffer,Et),Wt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=$t(A);le(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,pt,A.width,A.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,pt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,pt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,U)}else{const dt=A.textures;for(let Et=0;Et<dt.length;Et++){const pt=dt[Et],Wt=u.convert(pt.format,pt.colorSpace),Lt=u.convert(pt.type),Bt=N(pt.internalFormat,Wt,Lt,pt.colorSpace),me=$t(A);it&&le(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,Bt,A.width,A.height):le(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,Bt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function zt(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(A.depthTexture);dt.__renderTarget=A,(!dt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),xt(A.depthTexture,0);const Et=dt.__webglTexture,pt=$t(A);if(A.depthTexture.format===Cr)le(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(A.depthTexture.format===Pr)le(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Ft(U){const A=s.get(U),it=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),dt){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,dt.removeEventListener("dispose",Et)};dt.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=dt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");zt(A.__webglFramebuffer,U)}else if(it){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]===void 0)A.__webglDepthbuffer[dt]=o.createRenderbuffer(),Mt(A.__webglDepthbuffer[dt],U,!1);else{const Et=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Mt(A.__webglDepthbuffer,U,!1);else{const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Et),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,Et)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function mt(U,A,it){const dt=s.get(U);A!==void 0&&At(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Ft(U)}function ie(U){const A=U.texture,it=s.get(U),dt=s.get(A);U.addEventListener("dispose",O);const Et=U.textures,pt=U.isWebGLCubeRenderTarget===!0,Wt=Et.length>1;if(Wt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=A.version,h.memory.textures++),pt){it.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer[Lt]=[];for(let Bt=0;Bt<A.mipmaps.length;Bt++)it.__webglFramebuffer[Lt][Bt]=o.createFramebuffer()}else it.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer=[];for(let Lt=0;Lt<A.mipmaps.length;Lt++)it.__webglFramebuffer[Lt]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Lt=0,Bt=Et.length;Lt<Bt;Lt++){const me=s.get(Et[Lt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&le(U)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Et.length;Lt++){const Bt=Et[Lt];it.__webglColorRenderbuffer[Lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Lt]);const me=u.convert(Bt.format,Bt.colorSpace),Ct=u.convert(Bt.type),Gt=N(Bt.internalFormat,me,Ct,Bt.colorSpace,U.isXRRenderTarget===!0),Qt=$t(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Gt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,it.__webglColorRenderbuffer[Lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Mt(it.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,A);for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)At(it.__webglFramebuffer[Lt][Bt],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Bt);else At(it.__webglFramebuffer[Lt],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);S(A)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Lt=0,Bt=Et.length;Lt<Bt;Lt++){const me=Et[Lt],Ct=s.get(me);i.bindTexture(o.TEXTURE_2D,Ct.__webglTexture),tt(o.TEXTURE_2D,me),At(it.__webglFramebuffer,U,me,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,0),S(me)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Lt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Lt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,dt.__webglTexture),tt(Lt,A),A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)At(it.__webglFramebuffer[Bt],U,A,o.COLOR_ATTACHMENT0,Lt,Bt);else At(it.__webglFramebuffer,U,A,o.COLOR_ATTACHMENT0,Lt,0);S(A)&&g(Lt),i.unbindTexture()}U.depthBuffer&&Ft(U)}function se(U){const A=U.textures;for(let it=0,dt=A.length;it<dt;it++){const Et=A[it];if(S(Et)){const pt=z(U),Wt=s.get(Et).__webglTexture;i.bindTexture(pt,Wt),g(pt),i.unbindTexture()}}}const Oe=[],X=[];function _e(U){if(U.samples>0){if(le(U)===!1){const A=U.textures,it=U.width,dt=U.height;let Et=o.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=s.get(U),Lt=A.length>1;if(Lt)for(let Bt=0;Bt<A.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Bt]);const me=s.get(A[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,it,dt,0,0,it,dt,Et,o.NEAREST),m===!0&&(Oe.length=0,X.length=0,Oe.push(o.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Oe.push(pt),X.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,X)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Oe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Lt)for(let Bt=0;Bt<A.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Bt]);const me=s.get(A[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const A=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function $t(U){return Math.min(l.maxSamples,U.samples)}function le(U){const A=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xt(U){const A=h.render.frame;_.get(U)!==A&&(_.set(U,A),U.update())}function Te(U,A){const it=U.colorSpace,dt=U.format,Et=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||it!==Ir&&it!==Za&&(Re.getTransfer(it)===ke?(dt!==bi||Et!==ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),A}function Kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=ct,this.setTexture2D=xt,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=mt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=At,this.useMultisampledRTT=le}function Lb(o,e){function i(s,l=Za){let u;const h=Re.getTransfer(l);if(s===ma)return o.UNSIGNED_BYTE;if(s===Td)return o.UNSIGNED_SHORT_4_4_4_4;if(s===bd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===W_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===k_)return o.BYTE;if(s===X_)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===Ed)return o.INT;if(s===As)return o.UNSIGNED_INT;if(s===fa)return o.FLOAT;if(s===Xo)return o.HALF_FLOAT;if(s===Y_)return o.ALPHA;if(s===q_)return o.RGB;if(s===bi)return o.RGBA;if(s===j_)return o.LUMINANCE;if(s===Z_)return o.LUMINANCE_ALPHA;if(s===Cr)return o.DEPTH_COMPONENT;if(s===Pr)return o.DEPTH_STENCIL;if(s===K_)return o.RED;if(s===Ad)return o.RED_INTEGER;if(s===Q_)return o.RG;if(s===Rd)return o.RG_INTEGER;if(s===Cd)return o.RGBA_INTEGER;if(s===Dc||s===Uc||s===Lc||s===Nc)if(h===ke)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yh||s===qh||s===jh||s===Zh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Yh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kh||s===Qh||s===Jh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Kh||s===Qh)return h===ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Jh)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===$h)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===td)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ed)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===id)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ad)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===od)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ld)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ud)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oc||s===dd||s===pd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Oc)return h===ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===dd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===J_||s===md||s===gd||s===_d)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Oc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===md)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_d)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Or?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class Nb extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ac extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ob={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,s),g=this._getHandJoint(p,C);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=_.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ob)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ac;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zb=`
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

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ti({vertexShader:Pb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ei(new Zo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bb extends ws{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,y=null,M=null,E=null;const C=new Ib,S=i.getContextAttributes();let g=null,z=null;const N=[],D=[],$=new ge;let G=null;const O=new mi;O.viewport=new en;const B=new mi;B.viewport=new en;const w=[O,B],T=new Nb;let F=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ft=N[k];return ft===void 0&&(ft=new Dh,N[k]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(k){let ft=N[k];return ft===void 0&&(ft=new Dh,N[k]=ft),ft.getGripSpace()},this.getHand=function(k){let ft=N[k];return ft===void 0&&(ft=new Dh,N[k]=ft),ft.getHandSpace()};function rt(k){const ft=D.indexOf(k.inputSource);if(ft===-1)return;const At=N[ft];At!==void 0&&(At.update(k.inputSource,k.frame,p||h),At.dispatchEvent({type:k.type,data:k.inputSource}))}function gt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",xt);for(let k=0;k<N.length;k++){const ft=D[k];ft!==null&&(D[k]=null,N[k].disconnect(ft))}F=null,ct=null,C.reset(),e.setRenderTarget(g),M=null,y=null,v=null,l=null,z=null,St.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize($.width,$.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){u=k,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){d=k,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(k){p=k},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",xt),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize($),l.renderState.layers===void 0){const ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Rs(M.framebufferWidth,M.framebufferHeight,{format:bi,type:ma,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ft=null,At=null,Mt=null;S.depth&&(Mt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=S.stencil?Pr:Cr,At=S.stencil?Or:As);const zt={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:u};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(zt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),z=new Rs(y.textureWidth,y.textureHeight,{format:bi,type:ma,depthTexture:new dv(y.textureWidth,y.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function xt(k){for(let ft=0;ft<k.removed.length;ft++){const At=k.removed[ft],Mt=D.indexOf(At);Mt>=0&&(D[Mt]=null,N[Mt].disconnect(At))}for(let ft=0;ft<k.added.length;ft++){const At=k.added[ft];let Mt=D.indexOf(At);if(Mt===-1){for(let Ft=0;Ft<N.length;Ft++)if(Ft>=D.length){D.push(At),Mt=Ft;break}else if(D[Ft]===null){D[Ft]=At,Mt=Ft;break}if(Mt===-1)break}const zt=N[Mt];zt&&zt.connect(At)}}const P=new et,Z=new et;function j(k,ft,At){P.setFromMatrixPosition(ft.matrixWorld),Z.setFromMatrixPosition(At.matrixWorld);const Mt=P.distanceTo(Z),zt=ft.projectionMatrix.elements,Ft=At.projectionMatrix.elements,mt=zt[14]/(zt[10]-1),ie=zt[14]/(zt[10]+1),se=(zt[9]+1)/zt[5],Oe=(zt[9]-1)/zt[5],X=(zt[8]-1)/zt[0],_e=(Ft[8]+1)/Ft[0],$t=mt*X,le=mt*_e,Xt=Mt/(-X+_e),Te=Xt*-X;if(ft.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Te),k.translateZ(Xt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),zt[10]===-1)k.projectionMatrix.copy(ft.projectionMatrix),k.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Kt=mt+Xt,U=ie+Xt,A=$t-Te,it=le+(Mt-Te),dt=se*ie/U*Kt,Et=Oe*ie/U*Kt;k.projectionMatrix.makePerspective(A,it,dt,Et,Kt,U),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Tt(k,ft){ft===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ft.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;let ft=k.near,At=k.far;C.texture!==null&&(C.depthNear>0&&(ft=C.depthNear),C.depthFar>0&&(At=C.depthFar)),T.near=B.near=O.near=ft,T.far=B.far=O.far=At,(F!==T.near||ct!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,ct=T.far),O.layers.mask=k.layers.mask|2,B.layers.mask=k.layers.mask|4,T.layers.mask=O.layers.mask|B.layers.mask;const Mt=k.parent,zt=T.cameras;Tt(T,Mt);for(let Ft=0;Ft<zt.length;Ft++)Tt(zt[Ft],Mt);zt.length===2?j(T,O,B):T.projectionMatrix.copy(O.projectionMatrix),bt(k,T,Mt)};function bt(k,ft,At){At===null?k.matrix.copy(ft.matrixWorld):(k.matrix.copy(At.matrixWorld),k.matrix.invert(),k.matrix.multiply(ft.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ft.projectionMatrix),k.projectionMatrixInverse.copy(ft.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=vd*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(k){m=k,y!==null&&(y.fixedFoveation=k),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=k)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(T)};let L=null;function tt(k,ft){if(_=ft.getViewerPose(p||h),E=ft,_!==null){const At=_.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let Mt=!1;At.length!==T.cameras.length&&(T.cameras.length=0,Mt=!0);for(let Ft=0;Ft<At.length;Ft++){const mt=At[Ft];let ie=null;if(M!==null)ie=M.getViewport(mt);else{const Oe=v.getViewSubImage(y,mt);ie=Oe.viewport,Ft===0&&(e.setRenderTargetTextures(z,Oe.colorTexture,y.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(z))}let se=w[Ft];se===void 0&&(se=new mi,se.layers.enable(Ft),se.viewport=new en,w[Ft]=se),se.matrix.fromArray(mt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(mt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ie.x,ie.y,ie.width,ie.height),Ft===0&&(T.matrix.copy(se.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Mt===!0&&T.cameras.push(se)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ft=v.getDepthInformation(At[0]);Ft&&Ft.isValid&&Ft.texture&&C.init(e,Ft,l.renderState)}}for(let At=0;At<N.length;At++){const Mt=D[At],zt=N[At];Mt!==null&&zt!==void 0&&zt.update(Mt,ft,p||h)}L&&L(k,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),E=null}const St=new hv;St.setAnimationLoop(tt),this.setAnimationLoop=function(k){L=k},this.dispose=function(){}}}const Ss=new ga,Fb=new nn;function Hb(o,e){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function s(S,g){g.color.getRGB(S.fogColor.value,lv(o)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,z,N,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),v(S,g)):g.isMeshPhongMaterial?(u(S,g),_(S,g)):g.isMeshStandardMaterial?(u(S,g),y(S,g),g.isMeshPhysicalMaterial&&M(S,g,D)):g.isMeshMatcapMaterial?(u(S,g),E(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),C(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(h(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?m(S,g,z,N):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Un&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Un&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const z=e.get(g),N=z.envMap,D=z.envMapRotation;N&&(S.envMap.value=N,Ss.copy(D),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),S.envMapRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(Ss)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function h(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function m(S,g,z,N){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*z,S.scale.value=N*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function v(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,z){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function C(S,g){const z=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Gb(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,N){const D=N.program;s.uniformBlockBinding(z,D)}function p(z,N){let D=l[z.id];D===void 0&&(E(z),D=_(z),l[z.id]=D,z.addEventListener("dispose",S));const $=N.program;s.updateUBOMapping(z,$);const G=e.render.frame;u[z.id]!==G&&(y(z),u[z.id]=G)}function _(z){const N=v();z.__bindingPointIndex=N;const D=o.createBuffer(),$=z.__size,G=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,$,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function v(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const N=l[z.id],D=z.uniforms,$=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,O=D.length;G<O;G++){const B=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,T=B.length;w<T;w++){const F=B[w];if(M(F,G,w,$)===!0){const ct=F.__offset,rt=Array.isArray(F.value)?F.value:[F.value];let gt=0;for(let xt=0;xt<rt.length;xt++){const P=rt[xt],Z=C(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ct+gt,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,N,D,$){const G=z.value,O=N+"_"+D;if($[O]===void 0)return typeof G=="number"||typeof G=="boolean"?$[O]=G:$[O]=G.clone(),!0;{const B=$[O];if(typeof G=="number"||typeof G=="boolean"){if(B!==G)return $[O]=G,!0}else if(B.equals(G)===!1)return B.copy(G),!0}return!1}function E(z){const N=z.uniforms;let D=0;const $=16;for(let O=0,B=N.length;O<B;O++){const w=Array.isArray(N[O])?N[O]:[N[O]];for(let T=0,F=w.length;T<F;T++){const ct=w[T],rt=Array.isArray(ct.value)?ct.value:[ct.value];for(let gt=0,xt=rt.length;gt<xt;gt++){const P=rt[gt],Z=C(P),j=D%$,Tt=j%Z.boundary,bt=j+Tt;D+=Tt,bt!==0&&$-bt<Z.storage&&(D+=$-bt),ct.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=D,D+=Z.storage}}}const G=D%$;return G>0&&(D+=$-G),z.__size=D,z.__cache={},this}function C(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),N}function S(z){const N=z.target;N.removeEventListener("dispose",S);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function g(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class Vb{constructor(e={}){const{canvas:i=wS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),C=new Int32Array(4);let S=null,g=null;const z=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=Qa,this.toneMappingExposure=1;const D=this;let $=!1,G=0,O=0,B=null,w=-1,T=null;const F=new en,ct=new en;let rt=null;const gt=new Ce(0);let xt=0,P=i.width,Z=i.height,j=1,Tt=null,bt=null;const L=new en(0,0,P,Z),tt=new en(0,0,P,Z);let St=!1;const k=new fv;let ft=!1,At=!1;const Mt=new nn,zt=new nn,Ft=new et,mt=new en,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Oe(){return B===null?j:1}let X=s;function _e(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Md}`),i.addEventListener("webglcontextlost",ut,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),X===null){const W="webgl2";if(X=_e(W,R),X===null)throw _e(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $t,le,Xt,Te,Kt,U,A,it,dt,Et,pt,Wt,Lt,Bt,me,Ct,Gt,Qt,Zt,vt,It,Ht,re,V;function Rt(){$t=new qT(X),$t.init(),Ht=new Lb(X,$t),le=new HT(X,$t,e,Ht),Xt=new wb(X,$t),le.reverseDepthBuffer&&y&&Xt.buffers.depth.setReversed(!0),Te=new KT(X),Kt=new pb,U=new Ub(X,$t,Xt,Kt,le,Ht,Te),A=new VT(D),it=new YT(D),dt=new nM(X),re=new BT(X,dt),Et=new jT(X,dt,Te,re),pt=new JT(X,Et,dt,Te),Zt=new QT(X,le,U),Ct=new GT(Kt),Wt=new db(D,A,it,$t,le,re,Ct),Lt=new Hb(D,Kt),Bt=new gb,me=new Mb($t),Qt=new IT(D,A,it,Xt,pt,M,m),Gt=new Rb(D,pt,le),V=new Gb(X,Te,le,Xt),vt=new FT(X,$t,Te),It=new ZT(X,$t,Te),Te.programs=Wt.programs,D.capabilities=le,D.extensions=$t,D.properties=Kt,D.renderLists=Bt,D.shadowMap=Gt,D.state=Xt,D.info=Te}Rt();const nt=new Bb(D,X);this.xr=nt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(P,Z,!1))},this.getSize=function(R){return R.set(P,Z)},this.setSize=function(R,W,ot=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Z=W,i.width=Math.floor(R*j),i.height=Math.floor(W*j),ot===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(P*j,Z*j).floor()},this.setDrawingBufferSize=function(R,W,ot){P=R,Z=W,j=ot,i.width=Math.floor(R*ot),i.height=Math.floor(W*ot),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,W,ot,st){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,W,ot,st),Xt.viewport(F.copy(L).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(tt)},this.setScissor=function(R,W,ot,st){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,W,ot,st),Xt.scissor(ct.copy(tt).multiplyScalar(j).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Xt.setScissorTest(St=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){bt=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(R=!0,W=!0,ot=!0){let st=0;if(R){let Y=!1;if(B!==null){const wt=B.texture.format;Y=wt===Cd||wt===Rd||wt===Ad}if(Y){const wt=B.texture.type,Nt=wt===ma||wt===As||wt===Vo||wt===Or||wt===Td||wt===bd,Ot=Qt.getClearColor(),Yt=Qt.getClearAlpha(),ae=Ot.r,ne=Ot.g,Vt=Ot.b;Nt?(E[0]=ae,E[1]=ne,E[2]=Vt,E[3]=Yt,X.clearBufferuiv(X.COLOR,0,E)):(C[0]=ae,C[1]=ne,C[2]=Vt,C[3]=Yt,X.clearBufferiv(X.COLOR,0,C))}else st|=X.COLOR_BUFFER_BIT}W&&(st|=X.DEPTH_BUFFER_BIT),ot&&(st|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ut,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Bt.dispose(),me.dispose(),Kt.dispose(),A.dispose(),it.dispose(),pt.dispose(),re.dispose(),V.dispose(),Wt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Fr),nt.removeEventListener("sessionend",Hr),Ci.stop()};function ut(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const R=Te.autoReset,W=Gt.enabled,ot=Gt.autoUpdate,st=Gt.needsUpdate,Y=Gt.type;Rt(),Te.autoReset=R,Gt.enabled=W,Gt.autoUpdate=ot,Gt.needsUpdate=st,Gt.type=Y}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function te(R){const W=R.target;W.removeEventListener("dispose",te),Pe(W)}function Pe(R){Ye(R),Kt.remove(R)}function Ye(R){const W=Kt.get(R).programs;W!==void 0&&(W.forEach(function(ot){Wt.releaseProgram(ot)}),R.isShaderMaterial&&Wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ot,st,Y,wt){W===null&&(W=ie);const Nt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=Vr(R,W,ot,st,Y);Xt.setMaterial(st,Nt);let Yt=ot.index,ae=1;if(st.wireframe===!0){if(Yt=Et.getWireframeAttribute(ot),Yt===void 0)return;ae=2}const ne=ot.drawRange,Vt=ot.attributes.position;let be=ne.start*ae,ze=(ne.start+ne.count)*ae;wt!==null&&(be=Math.max(be,wt.start*ae),ze=Math.min(ze,(wt.start+wt.count)*ae)),Yt!==null?(be=Math.max(be,0),ze=Math.min(ze,Yt.count)):Vt!=null&&(be=Math.max(be,0),ze=Math.min(ze,Vt.count));const Fe=ze-be;if(Fe<0||Fe===1/0)return;re.setup(Y,st,Ot,ot,Yt);let bn,Me=vt;if(Yt!==null&&(bn=dt.get(Yt),Me=It,Me.setIndex(bn)),Y.isMesh)st.wireframe===!0?(Xt.setLineWidth(st.wireframeLinewidth*Oe()),Me.setMode(X.LINES)):Me.setMode(X.TRIANGLES);else if(Y.isLine){let qt=st.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*Oe()),Y.isLineSegments?Me.setMode(X.LINES):Y.isLineLoop?Me.setMode(X.LINE_LOOP):Me.setMode(X.LINE_STRIP)}else Y.isPoints?Me.setMode(X.POINTS):Y.isSprite&&Me.setMode(X.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Me.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))Me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qt=Y._multiDrawStarts,cn=Y._multiDrawCounts,ce=Y._multiDrawCount,Pn=Yt?dt.get(Yt).bytesPerElement:1,_a=Kt.get(st).currentProgram.getUniforms();for(let yn=0;yn<ce;yn++)_a.setValue(X,"_gl_DrawID",yn),Me.render(qt[yn]/Pn,cn[yn])}else if(Y.isInstancedMesh)Me.renderInstances(be,Fe,Y.count);else if(ot.isInstancedBufferGeometry){const qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,cn=Math.min(ot.instanceCount,qt);Me.renderInstances(be,Fe,cn)}else Me.render(be,Fe)};function Ae(R,W,ot){R.transparent===!0&&R.side===Oi&&R.forceSinglePass===!1?(R.side=Un,R.needsUpdate=!0,Ke(R,W,ot),R.side=pa,R.needsUpdate=!0,Ke(R,W,ot),R.side=Oi):Ke(R,W,ot)}this.compile=function(R,W,ot=null){ot===null&&(ot=R),g=me.get(ot),g.init(W),N.push(g),ot.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==ot&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const st=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const wt=Y.material;if(wt)if(Array.isArray(wt))for(let Nt=0;Nt<wt.length;Nt++){const Ot=wt[Nt];Ae(Ot,ot,Y),st.add(Ot)}else Ae(wt,ot,Y),st.add(wt)}),N.pop(),g=null,st},this.compileAsync=function(R,W,ot=null){const st=this.compile(R,W,ot);return new Promise(Y=>{function wt(){if(st.forEach(function(Nt){Kt.get(Nt).currentProgram.isReady()&&st.delete(Nt)}),st.size===0){Y(R);return}setTimeout(wt,10)}$t.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let vn=null;function gi(R){vn&&vn(R)}function Fr(){Ci.stop()}function Hr(){Ci.start()}const Ci=new hv;Ci.setAnimationLoop(gi),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){vn=R,nt.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},nt.addEventListener("sessionstart",Fr),nt.addEventListener("sessionend",Hr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(W),W=nt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,B),g=me.get(R,N.length),g.init(W),N.push(g),zt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),k.setFromProjectionMatrix(zt),At=this.localClippingEnabled,ft=Ct.init(this.clippingPlanes,At),S=Bt.get(R,z.length),S.init(),z.push(S),nt.enabled===!0&&nt.isPresenting===!0){const wt=D.xr.getDepthSensingMesh();wt!==null&&Ja(wt,W,-1/0,D.sortObjects)}Ja(R,W,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Tt,bt),se=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,se&&Qt.addToRenderList(S,R),this.info.render.frame++,ft===!0&&Ct.beginShadows();const ot=g.state.shadowsArray;Gt.render(ot,R,W),ft===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,Y=S.transmissive;if(g.setupLights(),W.isArrayCamera){const wt=W.cameras;if(Y.length>0)for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++){const Yt=wt[Nt];Gr(st,Y,R,Yt)}se&&Qt.render(R);for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++){const Yt=wt[Nt];Ds(S,R,Yt,Yt.viewport)}}else Y.length>0&&Gr(st,Y,R,W),se&&Qt.render(R),Ds(S,R,W);B!==null&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(D,R,W),re.resetDefaultState(),w=-1,T=null,N.pop(),N.length>0?(g=N[N.length-1],ft===!0&&Ct.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,z.pop(),z.length>0?S=z[z.length-1]:S=null};function Ja(R,W,ot,st){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||k.intersectsSprite(R)){st&&mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(zt);const Nt=pt.update(R),Ot=R.material;Ot.visible&&S.push(R,Nt,Ot,ot,mt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||k.intersectsObject(R))){const Nt=pt.update(R),Ot=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),mt.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),mt.copy(Nt.boundingSphere.center)),mt.applyMatrix4(R.matrixWorld).applyMatrix4(zt)),Array.isArray(Ot)){const Yt=Nt.groups;for(let ae=0,ne=Yt.length;ae<ne;ae++){const Vt=Yt[ae],be=Ot[Vt.materialIndex];be&&be.visible&&S.push(R,Nt,be,ot,mt.z,Vt)}}else Ot.visible&&S.push(R,Nt,Ot,ot,mt.z,null)}}const wt=R.children;for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++)Ja(wt[Nt],W,ot,st)}function Ds(R,W,ot,st){const Y=R.opaque,wt=R.transmissive,Nt=R.transparent;g.setupLightsView(ot),ft===!0&&Ct.setGlobalState(D.clippingPlanes,ot),st&&Xt.viewport(F.copy(st)),Y.length>0&&$a(Y,W,ot),wt.length>0&&$a(wt,W,ot),Nt.length>0&&$a(Nt,W,ot),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Gr(R,W,ot,st){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Rs(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Xo:ma,minFilter:bs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const wt=g.state.transmissionRenderTarget[st.id],Nt=st.viewport||F;wt.setSize(Nt.z,Nt.w);const Ot=D.getRenderTarget();D.setRenderTarget(wt),D.getClearColor(gt),xt=D.getClearAlpha(),xt<1&&D.setClearColor(16777215,.5),D.clear(),se&&Qt.render(ot);const Yt=D.toneMapping;D.toneMapping=Qa;const ae=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),ft===!0&&Ct.setGlobalState(D.clippingPlanes,st),$a(R,ot,st),U.updateMultisampleRenderTarget(wt),U.updateRenderTargetMipmap(wt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Vt=0,be=W.length;Vt<be;Vt++){const ze=W[Vt],Fe=ze.object,bn=ze.geometry,Me=ze.material,qt=ze.group;if(Me.side===Oi&&Fe.layers.test(st.layers)){const cn=Me.side;Me.side=Un,Me.needsUpdate=!0,_i(Fe,ot,st,bn,Me,qt),Me.side=cn,Me.needsUpdate=!0,ne=!0}}ne===!0&&(U.updateMultisampleRenderTarget(wt),U.updateRenderTargetMipmap(wt))}D.setRenderTarget(Ot),D.setClearColor(gt,xt),ae!==void 0&&(st.viewport=ae),D.toneMapping=Yt}function $a(R,W,ot){const st=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,wt=R.length;Y<wt;Y++){const Nt=R[Y],Ot=Nt.object,Yt=Nt.geometry,ae=st===null?Nt.material:st,ne=Nt.group;Ot.layers.test(ot.layers)&&_i(Ot,W,ot,Yt,ae,ne)}}function _i(R,W,ot,st,Y,wt){R.onBeforeRender(D,W,ot,st,Y,wt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(D,W,ot,st,R,wt),Y.transparent===!0&&Y.side===Oi&&Y.forceSinglePass===!1?(Y.side=Un,Y.needsUpdate=!0,D.renderBufferDirect(ot,W,st,Y,R,wt),Y.side=pa,Y.needsUpdate=!0,D.renderBufferDirect(ot,W,st,Y,R,wt),Y.side=Oi):D.renderBufferDirect(ot,W,st,Y,R,wt),R.onAfterRender(D,W,ot,st,Y,wt)}function Ke(R,W,ot){W.isScene!==!0&&(W=ie);const st=Kt.get(R),Y=g.state.lights,wt=g.state.shadowsArray,Nt=Y.state.version,Ot=Wt.getParameters(R,Y.state,wt,W,ot),Yt=Wt.getProgramCacheKey(Ot);let ae=st.programs;st.environment=R.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(R.isMeshStandardMaterial?it:A).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ae===void 0&&(R.addEventListener("dispose",te),ae=new Map,st.programs=ae);let ne=ae.get(Yt);if(ne!==void 0){if(st.currentProgram===ne&&st.lightsStateVersion===Nt)return Fi(R,Ot),ne}else Ot.uniforms=Wt.getUniforms(R),R.onBeforeCompile(Ot,D),ne=Wt.acquireProgram(Ot,Yt),ae.set(Yt,ne),st.uniforms=Ot.uniforms;const Vt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Vt.clippingPlanes=Ct.uniform),Fi(R,Ot),st.needsLights=Xc(R),st.lightsStateVersion=Nt,st.needsLights&&(Vt.ambientLightColor.value=Y.state.ambient,Vt.lightProbe.value=Y.state.probe,Vt.directionalLights.value=Y.state.directional,Vt.directionalLightShadows.value=Y.state.directionalShadow,Vt.spotLights.value=Y.state.spot,Vt.spotLightShadows.value=Y.state.spotShadow,Vt.rectAreaLights.value=Y.state.rectArea,Vt.ltc_1.value=Y.state.rectAreaLTC1,Vt.ltc_2.value=Y.state.rectAreaLTC2,Vt.pointLights.value=Y.state.point,Vt.pointLightShadows.value=Y.state.pointShadow,Vt.hemisphereLights.value=Y.state.hemi,Vt.directionalShadowMap.value=Y.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Vt.spotShadowMap.value=Y.state.spotShadowMap,Vt.spotLightMatrix.value=Y.state.spotLightMatrix,Vt.spotLightMap.value=Y.state.spotLightMap,Vt.pointShadowMap.value=Y.state.pointShadowMap,Vt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=ne,st.uniformsList=null,ne}function xn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=zc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Fi(R,W){const ot=Kt.get(R);ot.outputColorSpace=W.outputColorSpace,ot.batching=W.batching,ot.batchingColor=W.batchingColor,ot.instancing=W.instancing,ot.instancingColor=W.instancingColor,ot.instancingMorph=W.instancingMorph,ot.skinning=W.skinning,ot.morphTargets=W.morphTargets,ot.morphNormals=W.morphNormals,ot.morphColors=W.morphColors,ot.morphTargetsCount=W.morphTargetsCount,ot.numClippingPlanes=W.numClippingPlanes,ot.numIntersection=W.numClipIntersection,ot.vertexAlphas=W.vertexAlphas,ot.vertexTangents=W.vertexTangents,ot.toneMapping=W.toneMapping}function Vr(R,W,ot,st,Y){W.isScene!==!0&&(W=ie),U.resetTextureUnits();const wt=W.fog,Nt=st.isMeshStandardMaterial?W.environment:null,Ot=B===null?D.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ir,Yt=(st.isMeshStandardMaterial?it:A).get(st.envMap||Nt),ae=st.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ne=!!ot.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Vt=!!ot.morphAttributes.position,be=!!ot.morphAttributes.normal,ze=!!ot.morphAttributes.color;let Fe=Qa;st.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Fe=D.toneMapping);const bn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Me=bn!==void 0?bn.length:0,qt=Kt.get(st),cn=g.state.lights;if(ft===!0&&(At===!0||R!==T)){const An=R===T&&st.id===w;Ct.setState(st,R,An)}let ce=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==cn.state.version||qt.outputColorSpace!==Ot||Y.isBatchedMesh&&qt.batching===!1||!Y.isBatchedMesh&&qt.batching===!0||Y.isBatchedMesh&&qt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qt.instancing===!1||!Y.isInstancedMesh&&qt.instancing===!0||Y.isSkinnedMesh&&qt.skinning===!1||!Y.isSkinnedMesh&&qt.skinning===!0||Y.isInstancedMesh&&qt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qt.instancingMorph===!1&&Y.morphTexture!==null||qt.envMap!==Yt||st.fog===!0&&qt.fog!==wt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Ct.numPlanes||qt.numIntersection!==Ct.numIntersection)||qt.vertexAlphas!==ae||qt.vertexTangents!==ne||qt.morphTargets!==Vt||qt.morphNormals!==be||qt.morphColors!==ze||qt.toneMapping!==Fe||qt.morphTargetsCount!==Me)&&(ce=!0):(ce=!0,qt.__version=st.version);let Pn=qt.currentProgram;ce===!0&&(Pn=Ke(st,W,Y));let _a=!1,yn=!1,va=!1;const Ne=Pn.getUniforms(),ni=qt.uniforms;if(Xt.useProgram(Pn.program)&&(_a=!0,yn=!0,va=!0),st.id!==w&&(w=st.id,yn=!0),_a||T!==R){Xt.buffers.depth.getReversed()?(Mt.copy(R.projectionMatrix),US(Mt),LS(Mt),Ne.setValue(X,"projectionMatrix",Mt)):Ne.setValue(X,"projectionMatrix",R.projectionMatrix),Ne.setValue(X,"viewMatrix",R.matrixWorldInverse);const vi=Ne.map.cameraPosition;vi!==void 0&&vi.setValue(X,Ft.setFromMatrixPosition(R.matrixWorld)),le.logarithmicDepthBuffer&&Ne.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ne.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,yn=!0,va=!0)}if(Y.isSkinnedMesh){Ne.setOptional(X,Y,"bindMatrix"),Ne.setOptional(X,Y,"bindMatrixInverse");const An=Y.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ne.setValue(X,"boneTexture",An.boneTexture,U))}Y.isBatchedMesh&&(Ne.setOptional(X,Y,"batchingTexture"),Ne.setValue(X,"batchingTexture",Y._matricesTexture,U),Ne.setOptional(X,Y,"batchingIdTexture"),Ne.setValue(X,"batchingIdTexture",Y._indirectTexture,U),Ne.setOptional(X,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ne.setValue(X,"batchingColorTexture",Y._colorsTexture,U));const mn=ot.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Zt.update(Y,ot,Pn),(yn||qt.receiveShadow!==Y.receiveShadow)&&(qt.receiveShadow=Y.receiveShadow,Ne.setValue(X,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(ni.envMap.value=Yt,ni.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(ni.envMapIntensity.value=W.environmentIntensity),yn&&(Ne.setValue(X,"toneMappingExposure",D.toneMappingExposure),qt.needsLights&&kc(ni,va),wt&&st.fog===!0&&Lt.refreshFogUniforms(ni,wt),Lt.refreshMaterialUniforms(ni,st,j,Z,g.state.transmissionRenderTarget[R.id]),zc.upload(X,xn(qt),ni,U)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(zc.upload(X,xn(qt),ni,U),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ne.setValue(X,"center",Y.center),Ne.setValue(X,"modelViewMatrix",Y.modelViewMatrix),Ne.setValue(X,"normalMatrix",Y.normalMatrix),Ne.setValue(X,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const An=st.uniformsGroups;for(let vi=0,ii=An.length;vi<ii;vi++){const Hi=An[vi];V.update(Hi,Pn),V.bind(Hi,Pn)}}return Pn}function kc(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Xc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,W,ot){Kt.get(R.texture).__webglTexture=W,Kt.get(R.depthTexture).__webglTexture=ot;const st=Kt.get(R);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=ot===void 0,st.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const ot=Kt.get(R);ot.__webglFramebuffer=W,ot.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,ot=0){B=R,G=W,O=ot;let st=!0,Y=null,wt=!1,Nt=!1;if(R){const Yt=Kt.get(R);if(Yt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(X.FRAMEBUFFER,null),st=!1;else if(Yt.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Yt.__hasExternalTextures)U.rebindTextures(R,Kt.get(R.texture).__webglTexture,Kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Vt=R.depthTexture;if(Yt.__boundDepthTexture!==Vt){if(Vt!==null&&Kt.has(Vt)&&(R.width!==Vt.image.width||R.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const ae=R.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Nt=!0);const ne=Kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?Y=ne[W][ot]:Y=ne[W],wt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?Y=Kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?Y=ne[ot]:Y=ne,F.copy(R.viewport),ct.copy(R.scissor),rt=R.scissorTest}else F.copy(L).multiplyScalar(j).floor(),ct.copy(tt).multiplyScalar(j).floor(),rt=St;if(Xt.bindFramebuffer(X.FRAMEBUFFER,Y)&&st&&Xt.drawBuffers(R,Y),Xt.viewport(F),Xt.scissor(ct),Xt.setScissorTest(rt),wt){const Yt=Kt.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Yt.__webglTexture,ot)}else if(Nt){const Yt=Kt.get(R.texture),ae=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Yt.__webglTexture,ot||0,ae)}w=-1},this.readRenderTargetPixels=function(R,W,ot,st,Y,wt,Nt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){Xt.bindFramebuffer(X.FRAMEBUFFER,Ot);try{const Yt=R.texture,ae=Yt.format,ne=Yt.type;if(!le.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-st&&ot>=0&&ot<=R.height-Y&&X.readPixels(W,ot,st,Y,Ht.convert(ae),Ht.convert(ne),wt)}finally{const Yt=B!==null?Kt.get(B).__webglFramebuffer:null;Xt.bindFramebuffer(X.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,W,ot,st,Y,wt,Nt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){const Yt=R.texture,ae=Yt.format,ne=Yt.type;if(!le.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-st&&ot>=0&&ot<=R.height-Y){Xt.bindFramebuffer(X.FRAMEBUFFER,Ot);const Vt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Vt),X.bufferData(X.PIXEL_PACK_BUFFER,wt.byteLength,X.STREAM_READ),X.readPixels(W,ot,st,Y,Ht.convert(ae),Ht.convert(ne),0);const be=B!==null?Kt.get(B).__webglFramebuffer:null;Xt.bindFramebuffer(X.FRAMEBUFFER,be);const ze=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await DS(X,ze,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Vt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,wt),X.deleteBuffer(Vt),X.deleteSync(ze),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,ot=0){R.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const st=Math.pow(2,-ot),Y=Math.floor(R.image.width*st),wt=Math.floor(R.image.height*st),Nt=W!==null?W.x:0,Ot=W!==null?W.y:0;U.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ot,0,0,Nt,Ot,Y,wt),Xt.unbindTexture()},this.copyTextureToTexture=function(R,W,ot=null,st=null,Y=0){R.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,R=arguments[1],W=arguments[2],Y=arguments[3]||0,ot=null);let wt,Nt,Ot,Yt,ae,ne,Vt,be,ze;const Fe=R.isCompressedTexture?R.mipmaps[Y]:R.image;ot!==null?(wt=ot.max.x-ot.min.x,Nt=ot.max.y-ot.min.y,Ot=ot.isBox3?ot.max.z-ot.min.z:1,Yt=ot.min.x,ae=ot.min.y,ne=ot.isBox3?ot.min.z:0):(wt=Fe.width,Nt=Fe.height,Ot=Fe.depth||1,Yt=0,ae=0,ne=0),st!==null?(Vt=st.x,be=st.y,ze=st.z):(Vt=0,be=0,ze=0);const bn=Ht.convert(W.format),Me=Ht.convert(W.type);let qt;W.isData3DTexture?(U.setTexture3D(W,0),qt=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),qt=X.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),qt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const cn=X.getParameter(X.UNPACK_ROW_LENGTH),ce=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Pn=X.getParameter(X.UNPACK_SKIP_PIXELS),_a=X.getParameter(X.UNPACK_SKIP_ROWS),yn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Fe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Fe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Yt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ae),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ne);const va=R.isDataArrayTexture||R.isData3DTexture,Ne=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const ni=Kt.get(R),mn=Kt.get(W),An=Kt.get(ni.__renderTarget),vi=Kt.get(mn.__renderTarget);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,An.__webglFramebuffer),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let ii=0;ii<Ot;ii++)va&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Kt.get(R).__webglTexture,Y,ne+ii),R.isDepthTexture?(Ne&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Kt.get(W).__webglTexture,Y,ze+ii),X.blitFramebuffer(Yt,ae,wt,Nt,Vt,be,wt,Nt,X.DEPTH_BUFFER_BIT,X.NEAREST)):Ne?X.copyTexSubImage3D(qt,Y,Vt,be,ze+ii,Yt,ae,wt,Nt):X.copyTexSubImage2D(qt,Y,Vt,be,ze+ii,Yt,ae,wt,Nt);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ne?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(qt,Y,Vt,be,ze,wt,Nt,Ot,bn,Me,Fe.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(qt,Y,Vt,be,ze,wt,Nt,Ot,bn,Fe.data):X.texSubImage3D(qt,Y,Vt,be,ze,wt,Nt,Ot,bn,Me,Fe):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,Vt,be,wt,Nt,bn,Me,Fe.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,Vt,be,Fe.width,Fe.height,bn,Fe.data):X.texSubImage2D(X.TEXTURE_2D,Y,Vt,be,wt,Nt,bn,Me,Fe);X.pixelStorei(X.UNPACK_ROW_LENGTH,cn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ce),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Pn),X.pixelStorei(X.UNPACK_SKIP_ROWS,_a),X.pixelStorei(X.UNPACK_SKIP_IMAGES,yn),Y===0&&W.generateMipmaps&&X.generateMipmap(qt),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ot=null,st=null,Y=0){return R.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,st=arguments[1]||null,R=arguments[2],W=arguments[3],Y=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,ot,st,Y)},this.initRenderTarget=function(R){Kt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){G=0,O=0,B=null,Xt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(e),i.unpackColorSpace=Re._getUnpackColorSpace()}}class kb extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ga,this.environmentIntensity=1,this.environmentRotation=new ga,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class vv extends qo{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const M_=new nn,yd=new wd,Rc=new Gc,Cc=new et;class Xb extends Xn{constructor(e=new Bi,i=new vv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=u,e.ray.intersectsSphere(Rc)===!1)return;M_.copy(l).invert(),yd.copy(e.ray).applyMatrix4(M_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=y,C=M;E<C;E++){const S=p.getX(E);Cc.fromBufferAttribute(v,S),E_(Cc,S,m,l,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let E=y,C=M;E<C;E++)Cc.fromBufferAttribute(v,E),E_(Cc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function E_(o,e,i,s,l,u,h){const d=yd.distanceSqToPoint(o);if(d<i){const m=new et;yd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class xv extends hn{constructor(e,i,s,l,u,h,d,m,p){super(e,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Go extends Bi{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],v=new et,y=new et,M=[],E=[],C=[],S=[];for(let g=0;g<=s;g++){const z=[],N=g/s;let D=0;g===0&&h===0?D=.5/i:g===s&&m===Math.PI&&(D=-.5/i);for(let $=0;$<=i;$++){const G=$/i;v.x=-e*Math.cos(l+G*u)*Math.sin(h+N*d),v.y=e*Math.cos(h+N*d),v.z=e*Math.sin(l+G*u)*Math.sin(h+N*d),E.push(v.x,v.y,v.z),y.copy(v).normalize(),C.push(y.x,y.y,y.z),S.push(G+D,1-N),z.push(p++)}_.push(z)}for(let g=0;g<s;g++)for(let z=0;z<i;z++){const N=_[g][z+1],D=_[g][z],$=_[g+1][z],G=_[g+1][z+1];(g!==0||h>0)&&M.push(N,D,G),(g!==s-1||m<Math.PI)&&M.push(D,$,G)}this.setIndex(M),this.setAttribute("position",new Ii(E,3)),this.setAttribute("normal",new Ii(C,3)),this.setAttribute("uv",new Ii(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const T_={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Wb{constructor(e,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.itemStart=function(_){d++,u===!1&&l.onStart!==void 0&&l.onStart(_,h,d),u=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,y=p.length;v<y;v+=2){const M=p[v],E=p[v+1];if(M.global&&(M.lastIndex=0),M.test(_))return E}return null}}}const Yb=new Wb;class Ud{constructor(e){this.manager=e!==void 0?e:Yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ud.DEFAULT_MATERIAL_NAME="__DEFAULT";class qb extends Ud{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=T_.get(e);if(h!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0),h;const d=ko("img");function m(){_(),T_.add(e,this),i&&i(this),u.manager.itemEnd(e)}function p(v){_(),l&&l(v),u.manager.itemError(e),u.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class jb extends Ud{constructor(e){super(e)}load(e,i,s,l){const u=new hn,h=new qb(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class b_{constructor(e=1,i=0,s=0){return this.radius=e,this.phi=i,this.theta=s,this}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(On(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zb extends ws{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);const A_={type:"change"},Ld={type:"start"},yv={type:"end"},wc=new wd,R_=new ja,Kb=Math.cos(70*CS.DEG2RAD),fn=new et,kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uh=1e-6;class Qb extends Zb{constructor(e,i=null){super(e,i),this.state=Xe.NONE,this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new Cs,this._lastTargetPosition=new et,this._quat=new Cs().setFromUnitVectors(e.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new b_,this._sphericalDelta=new b_,this._scale=1,this._panOffset=new et,this._rotateStart=new ge,this._rotateEnd=new ge,this._rotateDelta=new ge,this._panStart=new ge,this._panEnd=new ge,this._panDelta=new ge,this._dollyStart=new ge,this._dollyEnd=new ge,this._dollyDelta=new ge,this._dollyDirection=new et,this._mouse=new ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$b.bind(this),this._onPointerDown=Jb.bind(this),this._onPointerUp=tA.bind(this),this._onContextMenu=oA.bind(this),this._onMouseWheel=iA.bind(this),this._onKeyDown=aA.bind(this),this._onTouchStart=sA.bind(this),this._onTouchMove=rA.bind(this),this._onMouseDown=eA.bind(this),this._onMouseMove=nA.bind(this),this._interceptControlDown=lA.bind(this),this._interceptControlUp=cA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(A_),this.update(),this.state=Xe.NONE}update(e=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new et(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(wc.origin.copy(this.object.position),wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wc.direction))<Kb?this.object.lookAt(this.target):(R_.setFromNormalAndCoplanarPoint(this.object.up,this.target),wc.intersectPlane(R_,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uh||this._lastTargetPosition.distanceToSquared(this.target)>Uh?(this.dispatchEvent(A_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let u=fn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ge,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Jb(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function $b(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function tA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yv),this.state=Xe.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function eA(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Xe.DOLLY;break;case pi.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Xe.ROTATE}break;case pi.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Ld)}function nA(o){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function iA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(o.preventDefault(),this.dispatchEvent(Ld),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(yv))}function aA(o){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(o)}function sA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Xe.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Xe.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Ld)}function rA(o){switch(this._trackPointer(o),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Xe.NONE}}function oA(o){this.enabled!==!1&&o.preventDefault()}function lA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const uA={STANDARD:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},HOT:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"Humanitarian OSM Team",url:"https://www.hotosm.org/"}]},OPENTOPOMAP:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"SRTM",url:"https://www2.jpl.nasa.gov/srtm/"},{text:"OpenTopoMap",url:"https://opentopomap.org/"}]},CARTODARK:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"CARTO",url:"https://carto.com/attributions"}]},CARTOVOYAGER:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"CARTO",url:"https://carto.com/attributions"}]},BLUE_MARBLE:{text:"Imagery: ",links:[{text:"NASA Blue Marble",url:"https://visibleearth.nasa.gov/collection/1484/blue-marble"},{text:"NASA Goddard Space Flight Center",url:"https://www.nasa.gov/goddard"}]},NASA_VIIRS:{text:"Imagery: ",links:[{text:"NASA EOSDIS GIBS",url:"https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs"},{text:"VIIRS",url:"https://www.nasa.gov/mission_pages/NPP/mission_overview/index.html"}]}},fA={HIKING_TRAILS:{text:"Overlay: © ",links:[{text:"Waymarked Trails",url:"https://waymarkedtrails.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},CYCLING_ROUTES:{text:"Overlay: © ",links:[{text:"Waymarked Trails",url:"https://waymarkedtrails.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},MTB_TRAILS:{text:"Overlay: © ",links:[{text:"Waymarked Trails",url:"https://waymarkedtrails.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},OPEN_RAILWAY_MAP:{text:"Overlay: © ",links:[{text:"OpenRailwayMap",url:"https://www.openrailwaymap.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},PLACE_LABELS:{text:"Overlay: © ",links:[{text:"CARTO",url:"https://carto.com/attributions"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]}},hA=({mapLayer:o,overlayLayer:e,sidebarOffset:i})=>{const s=uA[o],l=e!=="NONE"?fA[e]:null;return K.jsx("div",{className:"fixed bottom-4 z-50 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",style:{right:`${i+16}px`},children:K.jsxs("div",{className:"flex flex-col gap-1 text-[9px] font-mono text-zinc-300 tracking-wide",children:[K.jsxs("div",{className:"flex items-center",children:[K.jsx("span",{children:s.text}),s.links.map((u,h)=>K.jsxs(Nh.Fragment,{children:[h>0&&K.jsx("span",{className:"mx-1",children:"|"}),K.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white hover:underline transition-colors",children:u.text})]},u.url))]}),l&&K.jsxs("div",{className:"flex items-center",children:[K.jsx("span",{children:l.text}),l.links.map((u,h)=>K.jsxs(Nh.Fragment,{children:[h>0&&K.jsx("span",{className:"mx-1",children:"|"}),K.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white hover:underline transition-colors",children:u.text})]},u.url))]})]})})},dA={STANDARD:{url:"https://tile.openstreetmap.org",format:"xyz"},HOT:{url:"https://a.tile.openstreetmap.fr/hot",format:"xyz"},OPENTOPOMAP:{url:"https://a.tile.opentopomap.org",format:"xyz"},CARTODARK:{url:"https://a.basemaps.cartocdn.com/dark_all",format:"xyz"},CARTOVOYAGER:{url:"https://a.basemaps.cartocdn.com/rastertiles/voyager",format:"xyz"},BLUE_MARBLE:{url:"/Projection-lab/blue-marble.jpg",format:"static"},NASA_VIIRS:{url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default",format:"xyz"}},pA={HIKING_TRAILS:{url:"https://tile.waymarkedtrails.org/hiking",format:"xyz"},CYCLING_ROUTES:{url:"https://tile.waymarkedtrails.org/cycling",format:"xyz"},MTB_TRAILS:{url:"https://tile.waymarkedtrails.org/mtb",format:"xyz"},OPEN_RAILWAY_MAP:{url:"https://tiles.openrailwaymap.org/standard",format:"xyz"},PLACE_LABELS:{url:"https://a.basemaps.cartocdn.com/dark_only_labels",format:"xyz"}};async function mA(o){return console.log(`Loading static texture from: ${o}`),new Promise((e,i)=>{new jb().load(o,l=>{console.log("✓ Static texture loaded successfully"),l.wrapS=Nr,l.wrapT=zi,l.minFilter=Dn,l.magFilter=Dn,l.anisotropy=16,e(l)},l=>{if(l.lengthComputable){const u=(l.loaded/l.total*100).toFixed(0);console.log(`Loading texture: ${u}%`)}},l=>{console.error("✗ Failed to load static texture:",l),i(l)})})}async function C_(o,e,i=!1){const l=Math.pow(2,e);console.log(`Creating stitched texture with ${l}x${l} tiles at zoom ${e}, overlay: ${i}`);const u=document.createElement("canvas");u.width=l*256,u.height=l*256;const h=u.getContext("2d",{alpha:!0});if(!h)throw new Error("Could not create canvas context");if(i)h.clearRect(0,0,u.width,u.height);else{const v=h.createLinearGradient(0,0,0,u.height);v.addColorStop(0,"#1a3a52"),v.addColorStop(1,"#0d1b2a"),h.fillStyle=v,h.fillRect(0,0,u.width,u.height)}const d=[];let m=0;const p=[];for(let v=0;v<l;v++)for(let y=0;y<l;y++){const M=o(v,y,e),E=new Promise(C=>{const S=new Image;S.crossOrigin="anonymous";const g=setTimeout(()=>{console.warn(`⏱️ Tile request timeout: ${M}`),p.push(M),C()},5e3);S.onload=()=>{clearTimeout(g),m++,h.drawImage(S,v*256,y*256,256,256),console.log(`✓ Loaded tile ${v},${y}`),C()},S.onerror=()=>{clearTimeout(g),p.push(M),console.warn(`✗ Failed to load tile: ${M}`),C()},S.src=M});d.push(E)}await Promise.all(d),console.log(`Texture complete. Loaded ${m}/${d.length} tiles`),p.length>0&&console.warn(`Failed URLs (${p.length}): ${p.slice(0,2).join(", ")}${p.length>2?" ...":""}`),!i&&m===0&&(h.fillStyle="rgba(255, 100, 100, 0.3)",h.font="bold 50px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText("⚠️ TILES FAILED",u.width/2,u.height/2-30),h.font="20px Arial",h.fillText("Check console",u.width/2,u.height/2+30));const _=new xv(u);return _.wrapS=Nr,_.wrapT=zi,_.minFilter=Dn,_.magFilter=Dn,_.anisotropy=16,_.needsUpdate=!0,_}const ca=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,gA=({settings:o,sidebarOffset:e,resetOrbitTrigger:i})=>{const s=fe.useRef(null),l=fe.useRef(null),u=fe.useRef(null),h=fe.useRef(null),d=fe.useRef(o),m=fe.useRef(e),p=fe.useRef(e),_=fe.useRef(0),v=fe.useRef(null),y=fe.useRef(null),M=fe.useRef(null),E=fe.useRef({torus:0,sphere:0,cylinder:0,cone:0,disc:0,mercator:0,gallPeters:0,sinusoidal:0,robinson:0,infinite:0}),C=fe.useRef("SPHERE"),[S,g]=fe.useState(!0),z=fe.useRef([]),N=fe.useRef(o.viewMode==="SPHERE"?1:0),D=fe.useRef(o.showDayNight?1:0),$=fe.useRef(!0),G=()=>{const O=document.createElement("canvas");O.width=512,O.height=512;const B=O.getContext("2d");if(!B)throw new Error("Could not create canvas context");B.fillStyle="#1a3a52",B.fillRect(0,0,512,512);const w=B.createLinearGradient(0,0,512,512);w.addColorStop(0,"#0d1b2a"),w.addColorStop(1,"#1a3a52"),B.fillStyle=w,B.fillRect(0,0,512,512),B.strokeStyle="#2a5a7a",B.lineWidth=2;for(let F=0;F<=8;F++){const ct=F/8*512;B.beginPath(),B.moveTo(ct,0),B.lineTo(ct,512),B.stroke(),B.beginPath(),B.moveTo(0,ct),B.lineTo(512,ct),B.stroke()}B.fillStyle="#4a9aca",B.font="bold 24px monospace",B.textAlign="center",B.textBaseline="middle",B.fillText("Loading Tiles...",256,256);const T=new xv(O);return T.wrapS=Nr,T.wrapT=zi,T.minFilter=Dn,T.magFilter=Dn,T};return fe.useEffect(()=>{d.current=o,m.current=e,console.log("Settings updated:",o.viewMode,"showDayNight:",o.showDayNight)},[o,e]),fe.useEffect(()=>{if(i>0&&h.current){const O=h.current.object,B=h.current.target.clone(),w=O.position.distanceTo(B);M.current=new et(B.x,B.y,B.z+w),console.log("Smooth orbit reset initiated")}},[i]),fe.useEffect(()=>{v.current&&(v.current.visible=o.showStars)},[o.showStars]),fe.useEffect(()=>{},[o.showDayNight]),fe.useEffect(()=>{g(!0);const O=dA[o.mapLayer];if(O.format==="static"){console.log("Loading static texture for layer:",o.mapLayer),mA(O.url).then(w=>{if(console.log("Static texture loaded successfully"),u.current){const T=u.current.uniforms.uTexture.value;T instanceof hn&&T.image&&T.dispose(),u.current.uniforms.uTexture.value=w,u.current.uniforms.uUseEquirectangular.value=1}g(!1)}).catch(w=>{console.error("Failed to load static texture:",w),g(!1)});return}const B=(w,T,F)=>{if(o.mapLayer==="NASA_VIIRS"){const rt=new Date;rt.setDate(rt.getDate()-1);const gt=rt.toISOString().split("T")[0];return`${O.url}/${gt}/GoogleMapsCompatible_Level9/${F}/${T}/${w}.jpg`}return`${O.url}/${F}/${w}/${T}.png`};console.log("Starting texture load for layer:",o.mapLayer),console.log("Sample URL:",B(0,0,4)),C_(B,4).then(w=>{if(console.log("Texture loaded successfully"),u.current){const T=u.current.uniforms.uTexture.value;T instanceof hn&&T.image&&T.dispose(),u.current.uniforms.uTexture.value=w,u.current.uniforms.uUseEquirectangular.value=0}g(!1)}).catch(w=>{console.error("Failed to load texture:",w),g(!1)})},[o.mapLayer]),fe.useEffect(()=>{const O=o.overlayLayer;if(O==="NONE"){u.current&&(u.current.uniforms.uOverlayVisible.value=0),console.log("Overlay disabled");return}const B=pA[O],w=(T,F,ct)=>`${B.url}/${ct}/${T}/${F}.png`;console.log("Loading overlay texture for layer:",O),console.log("Sample overlay URL:",w(0,0,5)),C_(w,5,!0).then(T=>{if(console.log("Overlay texture loaded successfully"),u.current){const F=u.current.uniforms.uOverlayTexture.value;F instanceof hn&&F.image&&F.dispose(),u.current.uniforms.uOverlayTexture.value=T,u.current.uniforms.uOverlayVisible.value=1}}).catch(T=>{console.error("Failed to load overlay texture:",T),u.current&&(u.current.uniforms.uOverlayVisible.value=0)})},[o.overlayLayer]),fe.useEffect(()=>{if(!s.current)return;if(l.current){console.log("Scene already exists, skipping recreation");return}const O=new kb;O.background=new Ce(5);const B=new mi(45,window.innerWidth/window.innerHeight,.1,1e4);B.position.set(0,0,250),console.log("Scene created with camera position:",B.position);const w=new Vb({antialias:!0,alpha:!0});w.setSize(window.innerWidth,window.innerHeight),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(w.domElement),console.log("Renderer created and appended to DOM"),l.current=w;const T=new Qb(B,w.domElement);T.enableDamping=!0,T.dampingFactor=.05,T.autoRotate=!1,T.autoRotateSpeed=1,T.enableZoom=!0,T.enablePan=!0,T.enableRotate=!0,T.minDistance=5,h.current=T,T.addEventListener("start",()=>{M.current=null}),w.domElement.addEventListener("mousedown",_e=>{console.log("🖱️ Mouse down at:",_e.clientX,_e.clientY)}),w.domElement.addEventListener("mousemove",_e=>{_e.buttons>0&&console.log("🖱️ Mouse dragging at:",_e.clientX,_e.clientY)}),w.domElement.addEventListener("mouseup",_e=>{console.log("🖱️ Mouse up at:",_e.clientX,_e.clientY)});const F=`
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
    `,ct=`
      varying vec2 vUv;
      varying vec2 vFinalUv;
      uniform sampler2D uTexture;
      uniform sampler2D uOverlayTexture;
      uniform float uOverlayVisible;
      uniform float uShowGrid;
      uniform float uUseEquirectangular;
      uniform float uShowDayNight;
      uniform float uIs3D;
      uniform vec3 uSunDirection;
      uniform vec3 uCameraPosition;

      #define PI 3.14159265359

      float latToMercator(float lat) {
        float latLimit = 0.005;
        float clampedLat = clamp(lat, latLimit, 1.0 - latLimit);
        float latRad = (clampedLat - 0.5) * PI;
        return (log(tan(PI / 4.0 + latRad / 2.0)) / PI + 1.0) / 2.0;
      }

      void main() {
        // Base texture coordinates: Apply Mercator transformation only for tiled sources
        // Skip for equirectangular sources like Blue Marble
        vec2 baseTexCoords = vFinalUv;
        if (uUseEquirectangular < 0.5) {
          // Tiled sources need Mercator adjustment
          baseTexCoords.y = latToMercator(vFinalUv.y);
        }

        vec4 texColor = texture2D(uTexture, baseTexCoords);

        // Blend overlay texture if visible
        // Overlays are ALWAYS Web Mercator tiles, regardless of base map projection
        if (uOverlayVisible > 0.5) {
          vec2 overlayTexCoords = vFinalUv;
          overlayTexCoords.y = latToMercator(vFinalUv.y);
          vec4 overlayColor = texture2D(uOverlayTexture, overlayTexCoords);
          // Blend overlay on top of base using alpha compositing
          texColor.rgb = mix(texColor.rgb, overlayColor.rgb, overlayColor.a);
        }

        // Apply day/night terminator effect and sun reflection
        if (uShowDayNight > 0.5) {
          // Convert UV to spherical coordinates (lat/lon)
          float lon = (vFinalUv.x - 0.5) * 2.0 * PI; // -PI to PI
          float lat = (vFinalUv.y - 0.5) * PI;       // -PI/2 to PI/2

          // Calculate surface normal in world space for equirectangular projection
          // In Three.js: X=right, Y=up, Z=toward camera
          // Map convention: lon=0 faces +Z, lat=0 is equator
          vec3 surfaceNormal = vec3(
            cos(lat) * sin(lon),   // X: east-west
            sin(lat),              // Y: north-south  
            cos(lat) * cos(lon)    // Z: toward camera at lon=0
          );

          // Calculate illumination based on dot product with sun direction
          vec3 sunDir = normalize(uSunDirection);
          float illumination = dot(surfaceNormal, sunDir);
          
          // Smooth terminator with twilight zone
          float daylight = smoothstep(-0.1, 0.1, illumination);
          
          // Apply shadow to night side (darken to about 15% brightness)
          texColor.rgb *= mix(0.15, 1.0, daylight);
          
          // Specular reflection (sun glint on ocean/water) - only for 3D modes
          // Use blue channel dominance to detect water (ocean is blue-ish)
          float blueRatio = texColor.b / (max(texColor.r + texColor.g + texColor.b, 0.01) / 3.0);
          float brightness = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
          // Water tends to be darker and more blue
          float isWater = smoothstep(0.3, 0.15, brightness) * smoothstep(0.8, 1.2, blueRatio);
          float specularity = isWater * 0.9 * uIs3D;
          
          // View direction (camera looks along -Z in view space, but we need world direction)
          vec3 viewDir = normalize(uCameraPosition);
          
          // Specular highlight using reflection
          vec3 reflectDir = reflect(-sunDir, surfaceNormal);
          float specAngle = max(dot(reflectDir, viewDir), 0.0);
          // Softer, broader specular highlight
          float specular = pow(specAngle, 20.0) * specularity * daylight * 0.6;
          
          // Add warm sun reflection color
          vec3 sunColor = vec3(1.0, 0.95, 0.85);
          texColor.rgb += specular * sunColor * 1.2;
        }

        float grid = 0.0;
        if (uShowGrid > 0.5) {
          vec2 gridSpacing = vec2(18.0, 10.0);
          vec2 gridUv = fract(vFinalUv * gridSpacing);
          float line = step(0.98, gridUv.x) + step(0.98, gridUv.y);
          grid = clamp(line * 0.08, 0.0, 0.5);
        }

        gl_FragColor = vec4(texColor.rgb + grid, texColor.a);
      }
    `,rt=new ti({vertexShader:F,fragmentShader:ct,uniforms:{uTorusT:{value:0},uSphereT:{value:0},uCylinderT:{value:0},uConeT:{value:0},uDiscT:{value:0},uMercatorT:{value:0},uGallPetersT:{value:0},uSinusoidalT:{value:0},uRobinsonT:{value:0},uInfiniteT:{value:0},uTexture:{value:G()},uOverlayTexture:{value:G()},uOverlayVisible:{value:0},uShowGrid:{value:d.current.showGrid?1:0},uUseEquirectangular:{value:0},uShowDayNight:{value:d.current.showDayNight?1:0},uIs3D:{value:0},uSunDirection:{value:new et(1,0,0)},uCameraPosition:{value:new et(0,0,250)}},side:Oi,transparent:!1});u.current=rt;const gt=new Zo(1,1,400,400),xt=new ei(gt,rt);xt.scale.set(5,5,5),xt.frustumCulled=!1,O.add(xt),console.log("✓ Plane mesh added to scene with",gt.attributes.position.count,"vertices"),console.log("✓ Initial mode:",d.current.viewMode),console.log("✓ Initial map layer:",d.current.mapLayer);const P=`
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
    `,Z=[],j=50,Tt=new ti({vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:P,uniforms:{uLayerIntensity:{value:d.current.viewMode==="SPHERE"&&d.current.showAtmosphere?.5:0}},transparent:!0,side:Un,blending:Ic,depthWrite:!1,depthTest:!0}),bt=new Go(j*1.05,64,64),L=new ei(bt,Tt);L.visible=d.current.viewMode==="SPHERE",O.add(L),Z.push(L),z.current=Z,console.log("✓ Sphere atmosphere added");const tt=12e3,St=new Bi,k=new Float32Array(tt*3);for(let _e=0;_e<tt;_e++){const $t=600+Math.random()*800,le=2*Math.PI*Math.random(),Xt=Math.acos(2*Math.random()-1);k[_e*3]=$t*Math.sin(Xt)*Math.cos(le),k[_e*3+1]=$t*Math.sin(Xt)*Math.sin(le),k[_e*3+2]=$t*Math.cos(Xt)}St.setAttribute("position",new Ri(k,3));const ft=new Xb(St,new vv({size:.7,color:8956671,transparent:!0,opacity:.8}));O.add(ft),v.current=ft;const At=new Go(10,32,32),Mt=new ti({uniforms:{glowColor:{value:new Ce(16768324)},coreColor:{value:new Ce(16777198)},uOpacity:{value:1}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 glowColor;
        uniform vec3 coreColor;
        uniform float uOpacity;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          // Calculate rim factor based on view angle
          vec3 viewDir = normalize(vViewPosition);
          float rim = dot(vNormal, viewDir);
          
          // Core is bright where facing camera, orange at edges
          vec3 color = mix(glowColor, coreColor, rim);
          
          // Solid in center, fades at rim
          float alpha = smoothstep(0.0, 0.3, rim);
          
          gl_FragColor = vec4(color, alpha * uOpacity);
        }
      `,transparent:!0,side:pa,depthWrite:!1}),zt=new ei(At,Mt),Ft=[1.5,2.2,3.2],mt=[.35,.2,.1];Ft.forEach((_e,$t)=>{const le=new Go(10*_e,32,32),Xt=new ti({uniforms:{glowColor:{value:new Ce(16755251)},uOpacity:{value:1}},vertexShader:`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          uniform vec3 glowColor;
          uniform float uOpacity;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec3 viewDir = normalize(vViewPosition);
            // Inverted rim for BackSide - glow at edges
            float rim = 1.0 - abs(dot(vNormal, viewDir));
            float intensity = pow(rim, 1.5) * ${mt[$t].toFixed(2)};
            gl_FragColor = vec4(glowColor, intensity * uOpacity);
          }
        `,transparent:!0,side:Un,blending:Ic,depthWrite:!1}),Te=new ei(le,Xt);zt.add(Te)});const ie=d.current.viewMode,se=d.current.showDayNight&&["SPHERE","CYLINDER","CONE"].includes(ie);zt.visible=se,zt.position.set(0,0,400),O.add(zt),y.current=zt,console.log("✓ Sun mesh created, visible:",se);const Oe=_e=>{const $t=_.current===0?.016:Math.min((_e-_.current)/1e3,.1);_.current=_e;const le=5;if(p.current+=(m.current-p.current)*Math.min($t*le,1),B.setViewOffset(window.innerWidth,window.innerHeight,p.current/2,0,window.innerWidth,window.innerHeight),M.current&&h.current){const vt=M.current,It=B.position,Ht=4;It.x+=(vt.x-It.x)*Math.min($t*Ht,1),It.y+=(vt.y-It.y)*Math.min($t*Ht,1),It.z+=(vt.z-It.z)*Math.min($t*Ht,1),h.current.update(),It.distanceTo(vt)<.1&&(M.current=null)}u.current&&u.current.uniforms.uCameraPosition.value.copy(B.position);const Xt=d.current.showDayNight?1:0,Te=$t*2,Kt=D.current;if(D.current<Xt?D.current=Math.min(D.current+Te,Xt):D.current>Xt&&(D.current=Math.max(D.current-Te,Xt)),Math.abs(Kt-D.current)>.01&&console.log("Day/night fade:",D.current.toFixed(2),"target:",Xt),u.current&&(u.current.uniforms.uShowDayNight.value=D.current),v.current&&(v.current.rotation.y+=5e-5),y.current&&u.current){const vt=d.current.timeOfDay??12,It=d.current.dayOfYear??1,Ht=(12-vt)*15*(Math.PI/180),re=-23.44*Math.cos(2*Math.PI/365*(It+10))*(Math.PI/180),V=new et(Math.cos(re)*Math.sin(Ht),Math.sin(re),Math.cos(re)*Math.cos(Ht)).normalize();u.current.uniforms.uSunDirection.value.copy(V);const nt=10*5,ut=d.current.viewMode,Dt=["SPHERE","CYLINDER","CONE"].includes(ut),Ut=Dt&&D.current>.01;y.current.visible=Ut;const te=y.current.material;te.uniforms&&te.uniforms.uOpacity&&(te.uniforms.uOpacity.value=D.current),y.current.children.forEach(Pe=>{const Ye=Pe.material;Ye.uniforms&&Ye.uniforms.uOpacity&&(Ye.uniforms.uOpacity.value=D.current)}),Dt&&(ut==="SPHERE"?y.current.position.set(V.x*400,V.y*400,V.z*400):ut==="CYLINDER"?y.current.position.set(Math.sin(Ht)*400,Math.sin(re)*nt*.5,Math.cos(Ht)*400):ut==="CONE"&&y.current.position.set(Math.sin(Ht)*400,Math.sin(re)*nt*.3,Math.cos(Ht)*400))}if(u.current){const vt=d.current.viewMode;if(vt!==C.current){console.log("✓ Geometry mode changed:",C.current,"→",vt),C.current==="SPHERE"?$.current=!1:$.current=!0;const nt=["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(C.current),ut=["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(vt);nt!==ut&&T.target.set(0,0,0),C.current=vt}const It={torus:vt==="TORUS"?1:0,sphere:vt==="SPHERE"?1:0,cylinder:vt==="CYLINDER"?1:0,cone:vt==="CONE"?1:0,disc:vt==="DISC"?1:0,mercator:vt==="MERCATOR"?1:0,gallPeters:vt==="GALL_PETERS"?1:0,sinusoidal:vt==="SINUSOIDAL"?1:0,robinson:vt==="ROBINSON"?1:0,infinite:vt==="INFINITE"||vt==="TORUS"?1:0},Ht=vt==="SPHERE",re=Ht&&d.current.showAtmosphere?1:0;if(Ht&&E.current.sphere<.99)N.current=Math.max(0,N.current-$t*8);else{const nt=re<N.current?8:3;N.current+=(re-N.current)*$t*nt}!$.current&&N.current<.01&&($.current=!0),Object.keys(It).forEach(nt=>{let ut=It[nt];nt==="torus"&&ut===1&&E.current.infinite<.9&&(ut=0);const Dt=E.current[nt],Ut=nt==="torus"?.5:1.5;$.current&&(Dt<ut?E.current[nt]=Math.min(ut,Dt+$t*Ut):Dt>ut&&(E.current[nt]=Math.max(ut,Dt-$t*1.5)))});const V=["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(vt);if(V){const nt=E.current.torus,ut=Math.max(0,Math.min(1,nt*2-1)),Ut=-125*(ut<.5?4*ut*ut*ut:1-Math.pow(-2*ut+2,3)/2);T.target.set(0,0,Ut)}const Rt=u.current;Rt.uniforms.uInfiniteT.value=ca(E.current.infinite),Rt.uniforms.uMercatorT.value=ca(E.current.mercator),Rt.uniforms.uGallPetersT.value=ca(E.current.gallPeters),Rt.uniforms.uSinusoidalT.value=ca(E.current.sinusoidal),Rt.uniforms.uRobinsonT.value=ca(E.current.robinson),Rt.uniforms.uSphereT.value=ca(E.current.sphere),Rt.uniforms.uCylinderT.value=ca(E.current.cylinder),Rt.uniforms.uConeT.value=ca(E.current.cone),Rt.uniforms.uDiscT.value=ca(E.current.disc),Rt.uniforms.uTorusT.value=E.current.torus,Rt.uniforms.uShowGrid.value=d.current.showGrid?1:0,Rt.uniforms.uIs3D.value=V?1:0,z.current.forEach(nt=>{nt.material instanceof ti&&(nt.material.uniforms.uLayerIntensity.value=N.current*.5,nt.visible=N.current>.01)})}T.autoRotate=d.current.autoRotate;const U=d.current.viewMode;["STANDARD","MERCATOR","GALL_PETERS","SINUSOIDAL","ROBINSON","INFINITE"].includes(U)?(T.mouseButtons={LEFT:pi.PAN,MIDDLE:pi.DOLLY,RIGHT:pi.ROTATE},T.touches={ONE:Pi.PAN,TWO:Pi.DOLLY_ROTATE},T.screenSpacePanning=!0,T.panSpeed=1.5):(T.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},T.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},T.panSpeed=1,T.screenSpacePanning=!0),T.update();const it=d.current.viewMode,dt=5,Et=10*dt,pt=5,Wt=E.current.sphere,Lt=E.current.torus,Bt=E.current.cylinder,me=E.current.cone,Ct=E.current.disc,Gt=["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(it),Qt=Wt>.01||Lt>.01||Bt>.01||me>.01||Ct>.01;if(Gt||Qt){const vt=B.position.clone();T.target.clone();let It=0;if(Wt>.5){const Ht=vt.length();It=Et+pt,Ht<It&&(vt.normalize().multiplyScalar(It),B.position.copy(vt))}else if(Lt>.5){const Ht=25*dt,re=5*dt,V=new et(0,0,-Ht),Rt=vt.clone().sub(V),ut=new ge(Rt.x,Rt.z).length(),Dt=Math.abs(ut-Ht),Ut=Math.sqrt(Dt*Dt+Rt.y*Rt.y)-re;if(Ut<pt){const te=Rt.clone().normalize(),Pe=pt-Ut;B.position.add(te.multiplyScalar(Pe))}}else if(Bt>.5){const Ht=Math.sqrt(vt.x*vt.x+vt.z*vt.z);if(It=Et+pt,Ht<It){const re=It/Ht;B.position.x*=re,B.position.z*=re}}else if(me>.5){const Ht=1.1*Et,re=Math.PI*Et,V=vt.y/re+.5,Rt=Ht*(1.1-Math.max(0,Math.min(1,V))),nt=Math.sqrt(vt.x*vt.x+vt.z*vt.z);if(It=Rt+pt,nt<It&&Rt>0){const ut=It/nt;B.position.x*=ut,B.position.z*=ut}}else if(Ct>.5){const Ht=2*Et;Math.sqrt(vt.x*vt.x+vt.z*vt.z)<Ht&&Math.abs(vt.y)<pt&&(B.position.y=vt.y>=0?pt:-pt)}}else B.position.z<5&&(B.position.z=5),T.target.z<0&&(T.target.z=0);w.render(O,B),requestAnimationFrame(Oe)};_.current=performance.now(),requestAnimationFrame(Oe),console.log("✓ Animation loop started");const X=()=>{B.aspect=window.innerWidth/window.innerHeight,B.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",X),()=>{window.removeEventListener("resize",X),w.dispose(),gt.dispose(),rt.dispose()}},[]),K.jsxs("div",{ref:s,className:"w-full h-full bg-[#000005] cursor-move",style:{touchAction:"none"},children:[S&&K.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md z-10 pointer-events-none",children:K.jsxs("div",{className:"text-center space-y-4",children:[K.jsx("div",{className:"w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin mx-auto"}),K.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400",children:"Initializing Playground..."})]})}),K.jsx(hA,{mapLayer:o.mapLayer,overlayLayer:o.overlayLayer,sidebarOffset:e})]})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=o=>{const e=vA(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=fe.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>fe.createElement("svg",{ref:m,...xA,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Sv("lucide",l),...!u&&!yA(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>fe.createElement(p,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(o,e)=>{const i=fe.forwardRef(({className:s,...l},u)=>fe.createElement(SA,{ref:u,iconNode:e,className:Sv(`lucide-${_A(w_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=w_(o),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],D_=we("activity",MA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],TA=we("bike",EA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],AA=we("box",bA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],CA=we("calendar",RA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Er=we("chevron-down",wA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],UA=we("chevron-left",DA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],NA=we("chevron-right",LA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Tr=we("chevron-up",OA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],zA=we("clock",PA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],BA=we("cloud",IA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],HA=we("compass",FA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]],VA=we("cylinder",GA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],XA=we("disc",kA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],U_=we("earth",WA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],qA=we("footprints",YA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],L_=we("globe",jA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],N_=we("grid-3x3",ZA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],QA=we("heart",KA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],$A=we("info",JA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],O_=we("layers",t2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Lh=we("map",e2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],i2=we("moon",n2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],P_=we("mountain",a2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],r2=we("navigation",s2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],l2=we("pyramid",o2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],z_=we("rotate-3d",c2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],I_=we("rotate-ccw",u2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],h2=we("star",f2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],B_=we("sun",d2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]],m2=we("tram-front",p2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],_2=we("triangle",g2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],x2=we("wind",v2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],S2=we("zap",y2),M2=()=>{const o=new Date,e=o.getUTCHours()+o.getUTCMinutes()/60,i=Math.floor((o.getTime()-new Date(o.getFullYear(),0,0).getTime())/864e5),[s,l]=fe.useState({zoom:1,rotation:{x:0,y:0},showGrid:!0,showAtmosphere:!0,showStars:!0,showDayNight:!0,autoRotate:!1,viewMode:"SPHERE",mapLayer:"BLUE_MARBLE",overlayLayer:"NONE",timeOfDay:e,dayOfYear:i}),[u,h]=fe.useState(!0),[d,m]=fe.useState(!0),[p,_]=fe.useState(!1),[v,y]=fe.useState(!0),[M,E]=fe.useState(!0),[C,S]=fe.useState(!1),[g,z]=fe.useState(!1),[N,D]=fe.useState(0),$=fe.useRef("STANDARD"),G=fe.useCallback(mt=>{console.log("✓ setMode called with:",mt),["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(mt)||($.current=mt),l(se=>(console.log("✓ Settings updated to viewMode:",mt),{...se,viewMode:mt}))},[]),O=mt=>{console.log("✓ setLayer called with:",mt),l(ie=>(console.log("✓ Settings updated to mapLayer:",mt),{...ie,mapLayer:mt}))},B=mt=>{console.log("✓ setOverlay called with:",mt),l(ie=>(console.log("✓ Settings updated to overlayLayer:",mt),{...ie,overlayLayer:mt}))},w=()=>l(mt=>({...mt,showGrid:!mt.showGrid})),T=()=>l(mt=>({...mt,showAtmosphere:!mt.showAtmosphere})),F=()=>l(mt=>({...mt,autoRotate:!mt.autoRotate})),ct=()=>l(mt=>({...mt,showStars:!mt.showStars})),rt=()=>l(mt=>({...mt,showDayNight:!mt.showDayNight})),gt=mt=>l(ie=>({...ie,timeOfDay:mt})),xt=mt=>l(ie=>({...ie,dayOfYear:mt})),P=()=>D(mt=>mt+1),Z=()=>{const mt=new Date,ie=mt.getUTCHours()+mt.getUTCMinutes()/60,se=Math.floor((mt.getTime()-new Date(mt.getFullYear(),0,0).getTime())/864e5);l(Oe=>({...Oe,timeOfDay:ie,dayOfYear:se}))},j=mt=>{const ie=Math.floor(mt),se=Math.floor((mt-ie)*60);return`${ie.toString().padStart(2,"0")}:${se.toString().padStart(2,"0")} UTC`},Tt=mt=>new Date(new Date().getFullYear(),0,mt).toLocaleDateString("en-US",{month:"short",day:"numeric"}),bt=mt=>{const ie=s.viewMode;G(ie===mt?$.current:mt)},L=s.viewMode==="TORUS",tt=s.viewMode==="SPHERE",St=s.viewMode==="CYLINDER",k=s.viewMode==="CONE",ft=s.viewMode==="DISC",At=L||tt||St||k||ft,Mt=[{id:"STANDARD",name:"Standard (Plate Carrée)",icon:N_},{id:"GALL_PETERS",name:"Gall-Peters (Equal Area)",icon:Lh},{id:"MERCATOR",name:"Mercator (Navigational)",icon:HA},{id:"ROBINSON",name:"Robinson (Pseudocylindrical)",icon:U_},{id:"SINUSOIDAL",name:"Sinusoidal (Equal Area)",icon:_2},{id:"INFINITE",name:"Infinite (Transverse)",icon:S2}],zt=[{id:"BLUE_MARBLE",name:"NASA Blue Marble",icon:U_,color:"text-cyan-400"},{id:"NASA_VIIRS",name:"NASA VIIRS",icon:L_,color:"text-purple-400"},{id:"OPENTOPOMAP",name:"OpenTopoMap",icon:P_,color:"text-amber-400"},{id:"HOT",name:"Humanitarian",icon:QA,color:"text-rose-400"},{id:"STANDARD",name:"OSM Standard",icon:r2,color:"text-blue-400"},{id:"CARTODARK",name:"Carto Dark",icon:i2,color:"text-indigo-400"}],Ft=[{id:"NONE",name:"No Overlay",icon:O_,color:"text-zinc-400"},{id:"HIKING_TRAILS",name:"Hiking Trails",icon:qA,color:"text-green-400"},{id:"CYCLING_ROUTES",name:"Cycling Routes",icon:TA,color:"text-orange-400"},{id:"MTB_TRAILS",name:"MTB Trails",icon:P_,color:"text-amber-400"},{id:"OPEN_RAILWAY_MAP",name:"Railways",icon:m2,color:"text-purple-400"},{id:"PLACE_LABELS",name:"Place Labels",icon:Lh,color:"text-cyan-400"}];return K.jsxs("div",{className:"flex h-screen w-screen bg-zinc-950 font-sans text-zinc-100 overflow-hidden",children:[K.jsxs("div",{className:"relative flex-1 h-full",children:[K.jsx(gA,{settings:s,sidebarOffset:u?380:0,resetOrbitTrigger:N}),!u&&K.jsx("button",{onClick:()=>h(!0),className:"absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 hover:bg-zinc-800 transition-colors shadow-xl",children:K.jsx(UA,{size:20})})]}),K.jsx("aside",{className:`fixed top-0 right-0 h-full bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl z-40 ${u?"translate-x-0":"translate-x-full"} w-full sm:w-[380px]`,children:K.jsxs("div",{className:"h-full flex flex-col p-10 overflow-y-auto",children:[K.jsxs("div",{className:"flex items-center justify-between mb-12",children:[K.jsxs("div",{className:"flex items-center gap-4",children:[K.jsx("div",{className:`p-3 rounded-2xl border transition-all duration-500 ${At?"bg-emerald-600/20 border-emerald-500/30":"bg-blue-600/20 border-blue-500/30"}`,children:K.jsx(D_,{className:At?"text-emerald-400":"text-blue-400",size:20})}),K.jsxs("div",{children:[K.jsx("h1",{className:"text-[11px] font-black uppercase tracking-[0.4em] text-white",children:"Projection Lab v43"}),K.jsx("p",{className:"text-[9px] text-zinc-500 font-mono text-nowrap uppercase",children:"Map Projection Playground"})]})]}),K.jsx("button",{onClick:()=>h(!1),className:"p-2 hover:bg-white/5 rounded-full transition-colors",children:K.jsx(NA,{size:18})})]}),K.jsxs("section",{className:"space-y-10 pb-12",children:[K.jsxs("div",{className:"space-y-5",children:[K.jsxs("button",{onClick:()=>m(!d),className:"w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(O_,{size:12}),"Map Engine"]}),d?K.jsx(Tr,{size:14}):K.jsx(Er,{size:14})]}),d&&K.jsx("div",{className:"grid grid-cols-2 gap-2 animate-in fade-in duration-300",children:zt.map(mt=>K.jsxs("button",{onClick:()=>O(mt.id),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${s.mapLayer===mt.id?"bg-white text-zinc-950 border-white shadow-lg":"bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800"}`,children:[K.jsx(mt.icon,{size:20,className:s.mapLayer===mt.id?"text-zinc-950":mt.color}),K.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-center",children:mt.name})]},mt.id))})]}),K.jsxs("div",{className:"space-y-5",children:[K.jsxs("button",{onClick:()=>_(!p),className:"w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(D_,{size:12}),"Overlay Layers"]}),p?K.jsx(Tr,{size:14}):K.jsx(Er,{size:14})]}),p&&K.jsx("div",{className:"grid grid-cols-2 gap-2 animate-in fade-in duration-300",children:Ft.map(mt=>K.jsxs("button",{onClick:()=>B(mt.id),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300
                        ${s.overlayLayer===mt.id?"bg-white text-zinc-950 border-white shadow-lg":"bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800"}`,children:[K.jsx(mt.icon,{size:20,className:s.overlayLayer===mt.id?"text-zinc-950":mt.color}),K.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-center",children:mt.name})]},mt.id))})]}),K.jsxs("div",{className:"space-y-5",children:[K.jsxs("button",{onClick:()=>y(!v),className:"w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(Lh,{size:12}),"Cartography (2D)"]}),v?K.jsx(Tr,{size:14}):K.jsx(Er,{size:14})]}),v&&K.jsx("div",{className:"space-y-2.5 animate-in fade-in duration-300",children:Mt.map(mt=>K.jsx("button",{onClick:()=>G(mt.id),className:`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 relative group ${s.viewMode===mt.id?"bg-zinc-100 text-zinc-950 border-white shadow-lg":L&&mt.id==="INFINITE"?"bg-blue-900/40 border-blue-500 text-blue-100":"bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-700"}`,children:K.jsxs("div",{className:"flex items-center gap-3",children:[K.jsx(mt.icon,{size:16,className:`transition-colors ${s.viewMode===mt.id?"text-zinc-950":L&&mt.id==="INFINITE"?"text-blue-400":"text-zinc-500"}`}),K.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest",children:mt.name})]})},mt.id))})]}),K.jsxs("div",{className:"space-y-5",children:[K.jsxs("button",{onClick:()=>E(!M),className:"w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(AA,{size:12}),"Dimensional (3D)"]}),M?K.jsx(Tr,{size:14}):K.jsx(Er,{size:14})]}),M&&K.jsxs("div",{className:"grid grid-cols-2 gap-3 animate-in fade-in duration-300",children:[K.jsxs("button",{onClick:()=>bt("SPHERE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${tt?"bg-emerald-600 text-white border-emerald-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[K.jsx(L_,{size:20,className:tt?"animate-pulse":""}),K.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest",children:"Sphere"})]}),K.jsxs("button",{onClick:()=>bt("DISC"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${ft?"bg-rose-600 text-white border-rose-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[K.jsx(XA,{size:20,className:ft?"animate-pulse":""}),K.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Disc World"})]}),K.jsxs("button",{onClick:()=>bt("CONE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${k?"bg-orange-600 text-white border-orange-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[K.jsx(l2,{size:20,className:k?"animate-pulse":""}),K.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cone"})]}),K.jsxs("button",{onClick:()=>bt("CYLINDER"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${St?"bg-indigo-600 text-white border-indigo-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[K.jsx(VA,{size:20,className:St?"animate-pulse":""}),K.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cylinder"})]}),K.jsxs("button",{onClick:()=>bt("TORUS"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 col-span-2 ${L?"bg-blue-600 text-white border-blue-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[K.jsx(z_,{size:20,className:L?"animate-pulse":""}),K.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Torus"})]})]})]}),K.jsxs("div",{className:"space-y-4",children:[K.jsxs("button",{onClick:()=>S(!C),className:"w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(x2,{size:12}),"Settings"]}),C?K.jsx(Tr,{size:14}):K.jsx(Er,{size:14})]}),C&&K.jsxs("div",{className:"space-y-4 animate-in fade-in duration-300",children:[K.jsxs("div",{className:"flex items-center justify-between px-2",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(z_,{size:12,className:"text-zinc-500"}),K.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Auto Rotate"})]}),K.jsx("button",{onClick:F,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${s.autoRotate?"bg-amber-600 border-amber-400 shadow-[0_0_10px_rgba(217,119,6,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:K.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${s.autoRotate?"translate-x-5":"translate-x-0"}`})})]}),K.jsxs("div",{className:"flex items-center justify-between px-2",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(N_,{size:12,className:"text-zinc-500"}),K.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Geo Grid"})]}),K.jsx("button",{onClick:w,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${s.showGrid?"bg-emerald-600 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:K.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${s.showGrid?"translate-x-5":"translate-x-0"}`})})]}),K.jsxs("div",{className:"flex items-center justify-between px-2",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(BA,{size:12,className:"text-zinc-500"}),K.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Atmosphere"})]}),K.jsx("button",{onClick:T,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${s.viewMode==="SPHERE"&&s.showAtmosphere?"bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:K.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${s.viewMode==="SPHERE"&&s.showAtmosphere?"translate-x-5":"translate-x-0"}`})})]}),K.jsxs("div",{className:"flex items-center justify-between px-2",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(h2,{size:12,className:"text-zinc-500"}),K.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Stars"})]}),K.jsx("button",{onClick:ct,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${s.showStars?"bg-purple-600 border-purple-400 shadow-[0_0_10px_rgba(147,51,234,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:K.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${s.showStars?"translate-x-5":"translate-x-0"}`})})]})]})]}),K.jsxs("div",{className:"space-y-4",children:[K.jsxs("button",{onClick:()=>z(!g),className:"w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(B_,{size:12}),"Day/Night & Time"]}),g?K.jsx(Tr,{size:14}):K.jsx(Er,{size:14})]}),g&&K.jsxs("div",{className:"space-y-4 animate-in fade-in duration-300",children:[K.jsxs("div",{className:"flex items-center justify-between px-2",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(B_,{size:12,className:"text-zinc-500"}),K.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Day/Night"})]}),K.jsx("button",{onClick:rt,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${s.showDayNight?"bg-yellow-600 border-yellow-400 shadow-[0_0_10px_rgba(202,138,4,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:K.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${s.showDayNight?"translate-x-5":"translate-x-0"}`})})]}),s.showDayNight&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:"px-2",children:[K.jsxs("div",{className:"flex items-center justify-between mb-2",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(zA,{size:10,className:"text-zinc-600"}),K.jsx("span",{className:"text-[8px] font-bold text-zinc-600 uppercase tracking-widest",children:"Time"})]}),K.jsx("span",{className:"text-[9px] font-mono text-yellow-500",children:j(s.timeOfDay)})]}),K.jsx("input",{type:"range",min:"0",max:"24",step:"0.1",value:s.timeOfDay,onChange:mt=>gt(parseFloat(mt.target.value)),className:"w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"})]}),K.jsxs("div",{className:"px-2",children:[K.jsxs("div",{className:"flex items-center justify-between mb-2",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(CA,{size:10,className:"text-zinc-600"}),K.jsx("span",{className:"text-[8px] font-bold text-zinc-600 uppercase tracking-widest",children:"Date"})]}),K.jsx("span",{className:"text-[9px] font-mono text-yellow-500",children:Tt(s.dayOfYear)})]}),K.jsx("input",{type:"range",min:"1",max:"365",step:"1",value:s.dayOfYear,onChange:mt=>xt(parseInt(mt.target.value)),className:"w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"})]}),K.jsx("div",{className:"pt-2",children:K.jsxs("button",{onClick:Z,className:"w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-600/40 transition-all duration-300 text-yellow-500 hover:text-yellow-400",children:[K.jsx(I_,{size:12}),K.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest",children:"Reset to Current"})]})})]})]})]}),K.jsx("div",{className:"pt-6",children:K.jsxs("button",{onClick:P,className:"w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all duration-300 text-zinc-400 hover:text-zinc-200",children:[K.jsx(I_,{size:12}),K.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest",children:"Reset Orbit"})]})}),K.jsx("div",{className:"pt-10 border-t border-white/5",children:K.jsxs("div",{className:"flex items-start gap-4 p-5 bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl",children:[K.jsx($A,{className:"text-blue-500/60 shrink-0 mt-0.5",size:16}),K.jsxs("p",{className:"text-[10px] text-zinc-500 leading-relaxed font-medium",children:["Licensed under ",K.jsx("a",{href:"https://github.com/arand4/Projection-lab/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline",children:"GNU GPL v3"}),". View source on ",K.jsx("a",{href:"https://github.com/arand4/Projection-lab",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline",children:"GitHub"}),"."]})]})})]}),K.jsx("div",{className:"mt-auto pt-6 text-[8px] text-zinc-800 text-center font-mono uppercase tracking-[0.5em]",children:"Projection Lab v43"})]})})]})},Mv=document.getElementById("root");if(!Mv)throw new Error("Could not find root element to mount to");const E2=By.createRoot(Mv);E2.render(K.jsx(Nh.StrictMode,{children:K.jsx(M2,{})}));
