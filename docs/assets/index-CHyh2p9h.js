(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function O0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var qf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function Ey(){if(d_)return wo;d_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var p_;function Ty(){return p_||(p_=1,qf.exports=Ey()),qf.exports}var Mt=Ty(),Yf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function by(){if(m_)return se;m_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function _(O,tt,ht){this.props=O,this.context=tt,this.refs=S,this.updater=ht||b}_.prototype.isReactComponent={},_.prototype.setState=function(O,tt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,tt,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=_.prototype;function D(O,tt,ht){this.props=O,this.context=tt,this.refs=S,this.updater=ht||b}var C=D.prototype=new P;C.constructor=D,R(C,_.prototype),C.isPureReactComponent=!0;var k=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function L(O,tt,ht){var G=ht.ref;return{$$typeof:r,type:O,key:tt,ref:G!==void 0?G:null,props:ht}}function w(O,tt){return L(O.type,tt,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function ct(O){var tt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ht){return tt[ht]})}var rt=/\/+/g;function gt(O,tt){return typeof O=="object"&&O!==null&&O.key!=null?ct(""+O.key):tt.toString(36)}function _t(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(tt){O.status==="pending"&&(O.status="fulfilled",O.value=tt)},function(tt){O.status==="pending"&&(O.status="rejected",O.reason=tt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function I(O,tt,ht,G,ot){var St=typeof O;(St==="undefined"||St==="boolean")&&(O=null);var xt=!1;if(O===null)xt=!0;else switch(St){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(O.$$typeof){case r:case e:xt=!0;break;case g:return xt=O._init,I(xt(O._payload),tt,ht,G,ot)}}if(xt)return ot=ot(O),xt=G===""?"."+gt(O,0):G,k(ot)?(ht="",xt!=null&&(ht=xt.replace(rt,"$&/")+"/"),I(ot,tt,ht,"",function(ae){return ae})):ot!=null&&(H(ot)&&(ot=w(ot,ht+(ot.key==null||O&&O.key===ot.key?"":(""+ot.key).replace(rt,"$&/")+"/")+xt)),tt.push(ot)),1;xt=0;var Pt=G===""?".":G+":";if(k(O))for(var It=0;It<O.length;It++)G=O[It],St=Pt+gt(G,It),xt+=I(G,tt,ht,St,ot);else if(It=M(O),typeof It=="function")for(O=It.call(O),It=0;!(G=O.next()).done;)G=G.value,St=Pt+gt(G,It++),xt+=I(G,tt,ht,St,ot);else if(St==="object"){if(typeof O.then=="function")return I(_t(O),tt,ht,G,ot);throw tt=String(O),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function K(O,tt,ht){if(O==null)return O;var G=[],ot=0;return I(O,G,"","",function(St){return tt.call(ht,St,ot++)}),G}function Z(O){if(O._status===-1){var tt=O._result;tt=tt(),tt.then(function(ht){(O._status===0||O._status===-1)&&(O._status=1,O._result=ht)},function(ht){(O._status===0||O._status===-1)&&(O._status=2,O._result=ht)}),O._status===-1&&(O._status=0,O._result=tt)}if(O._status===1)return O._result.default;throw O._result}var yt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Tt={map:K,forEach:function(O,tt,ht){K(O,function(){tt.apply(this,arguments)},ht)},count:function(O){var tt=0;return K(O,function(){tt++}),tt},toArray:function(O){return K(O,function(tt){return tt})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=x,se.Children=Tt,se.Component=_,se.Fragment=i,se.Profiler=l,se.PureComponent=D,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,tt,ht){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var G=R({},O.props),ot=O.key;if(tt!=null)for(St in tt.key!==void 0&&(ot=""+tt.key),tt)!Y.call(tt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&tt.ref===void 0||(G[St]=tt[St]);var St=arguments.length-2;if(St===1)G.children=ht;else if(1<St){for(var xt=Array(St),Pt=0;Pt<St;Pt++)xt[Pt]=arguments[Pt+2];G.children=xt}return L(O.type,ot,G)},se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},se.createElement=function(O,tt,ht){var G,ot={},St=null;if(tt!=null)for(G in tt.key!==void 0&&(St=""+tt.key),tt)Y.call(tt,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(ot[G]=tt[G]);var xt=arguments.length-2;if(xt===1)ot.children=ht;else if(1<xt){for(var Pt=Array(xt),It=0;It<xt;It++)Pt[It]=arguments[It+2];ot.children=Pt}if(O&&O.defaultProps)for(G in xt=O.defaultProps,xt)ot[G]===void 0&&(ot[G]=xt[G]);return L(O,St,ot)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:d,render:O}},se.isValidElement=H,se.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:Z}},se.memo=function(O,tt){return{$$typeof:p,type:O,compare:tt===void 0?null:tt}},se.startTransition=function(O){var tt=z.T,ht={};z.T=ht;try{var G=O(),ot=z.S;ot!==null&&ot(ht,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(N,yt)}catch(St){yt(St)}finally{tt!==null&&ht.types!==null&&(tt.types=ht.types),z.T=tt}},se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},se.use=function(O){return z.H.use(O)},se.useActionState=function(O,tt,ht){return z.H.useActionState(O,tt,ht)},se.useCallback=function(O,tt){return z.H.useCallback(O,tt)},se.useContext=function(O){return z.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,tt){return z.H.useDeferredValue(O,tt)},se.useEffect=function(O,tt){return z.H.useEffect(O,tt)},se.useEffectEvent=function(O){return z.H.useEffectEvent(O)},se.useId=function(){return z.H.useId()},se.useImperativeHandle=function(O,tt,ht){return z.H.useImperativeHandle(O,tt,ht)},se.useInsertionEffect=function(O,tt){return z.H.useInsertionEffect(O,tt)},se.useLayoutEffect=function(O,tt){return z.H.useLayoutEffect(O,tt)},se.useMemo=function(O,tt){return z.H.useMemo(O,tt)},se.useOptimistic=function(O,tt){return z.H.useOptimistic(O,tt)},se.useReducer=function(O,tt,ht){return z.H.useReducer(O,tt,ht)},se.useRef=function(O){return z.H.useRef(O)},se.useState=function(O){return z.H.useState(O)},se.useSyncExternalStore=function(O,tt,ht){return z.H.useSyncExternalStore(O,tt,ht)},se.useTransition=function(){return z.H.useTransition()},se.version="19.2.4",se}var g_;function vd(){return g_||(g_=1,Yf.exports=by()),Yf.exports}var Oe=vd();const wh=O0(Oe);var jf={exports:{}},Do={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function Ay(){return __||(__=1,(function(r){function e(I,K){var Z=I.length;I.push(K);t:for(;0<Z;){var yt=Z-1>>>1,Tt=I[yt];if(0<l(Tt,K))I[yt]=K,I[Z]=Tt,Z=yt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var K=I[0],Z=I.pop();if(Z!==K){I[0]=Z;t:for(var yt=0,Tt=I.length,O=Tt>>>1;yt<O;){var tt=2*(yt+1)-1,ht=I[tt],G=tt+1,ot=I[G];if(0>l(ht,Z))G<Tt&&0>l(ot,ht)?(I[yt]=ot,I[G]=Z,yt=G):(I[yt]=ht,I[tt]=Z,yt=tt);else if(G<Tt&&0>l(ot,Z))I[yt]=ot,I[G]=Z,yt=G;else break t}}return K}function l(I,K){var Z=I.sortIndex-K.sortIndex;return Z!==0?Z:I.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,y=3,M=!1,b=!1,R=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=I)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function k(I){if(R=!1,C(I),!b)if(i(m)!==null)b=!0,N||(N=!0,ct());else{var K=i(p);K!==null&&_t(k,K.startTime-I)}}var N=!1,z=-1,Y=5,L=-1;function w(){return S?!0:!(r.unstable_now()-L<Y)}function H(){if(S=!1,N){var I=r.unstable_now();L=I;var K=!0;try{t:{b=!1,R&&(R=!1,P(z),z=-1),M=!0;var Z=y;try{e:{for(C(I),x=i(m);x!==null&&!(x.expirationTime>I&&w());){var yt=x.callback;if(typeof yt=="function"){x.callback=null,y=x.priorityLevel;var Tt=yt(x.expirationTime<=I);if(I=r.unstable_now(),typeof Tt=="function"){x.callback=Tt,C(I),K=!0;break e}x===i(m)&&s(m),C(I)}else s(m);x=i(m)}if(x!==null)K=!0;else{var O=i(p);O!==null&&_t(k,O.startTime-I),K=!1}}break t}finally{x=null,y=Z,M=!1}K=void 0}}finally{K?ct():N=!1}}}var ct;if(typeof D=="function")ct=function(){D(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=H,ct=function(){gt.postMessage(null)}}else ct=function(){_(H,0)};function _t(I,K){z=_(function(){I(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(I){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Z=y;y=K;try{return I()}finally{y=Z}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=y;y=I;try{return K()}finally{y=Z}},r.unstable_scheduleCallback=function(I,K,Z){var yt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,I){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Z+Tt,I={id:g++,callback:K,priorityLevel:I,startTime:Z,expirationTime:Tt,sortIndex:-1},Z>yt?(I.sortIndex=Z,e(p,I),i(m)===null&&I===i(p)&&(R?(P(z),z=-1):R=!0,_t(k,Z-yt))):(I.sortIndex=Tt,e(m,I),b||M||(b=!0,N||(N=!0,ct()))),I},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(I){var K=y;return function(){var Z=y;y=K;try{return I.apply(this,arguments)}finally{y=Z}}}})(Kf)),Kf}var v_;function Ry(){return v_||(v_=1,Zf.exports=Ay()),Zf.exports}var Qf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function Cy(){if(x_)return Rn;x_=1;var r=vd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var y_;function wy(){if(y_)return Qf.exports;y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qf.exports=Cy(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Dy(){if(S_)return Do;S_=1;var r=Ry(),e=vd(),i=wy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,o=f;break}if(T===o){v=!0,o=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,o=c;break}if(T===o){v=!0,o=f,a=c;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case D:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var _t=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function O(t){return{current:t}}function tt(t){0>Tt||(t.current=yt[Tt],yt[Tt]=null,Tt--)}function ht(t,n){Tt++,yt[Tt]=t.current,t.current=n}var G=O(null),ot=O(null),St=O(null),xt=O(null);function Pt(t,n){switch(ht(St,n),ht(ot,t),ht(G,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zg(n),t=Ig(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(G),ht(G,t)}function It(){tt(G),tt(ot),tt(St)}function ae(t){t.memoizedState!==null&&ht(xt,t);var n=G.current,a=Ig(n,t.type);n!==a&&(ht(ot,t),ht(G,a))}function Re(t){ot.current===t&&(tt(G),tt(ot)),xt.current===t&&(tt(xt),bo._currentValue=Z)}var fe,ke;function q(t){if(fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);fe=n&&n[1]||"",ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fe+t+ke}var Kt=!1;function Qt(t,n){if(!t||Kt)return"";Kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(st){var et=st}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(st){et=st}t.call(mt.prototype)}}else{try{throw Error()}catch(st){et=st}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(st){if(st&&et&&typeof st.stack=="string")return[st.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),$=T.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===$.length)for(o=B.length-1,c=$.length-1;1<=o&&0<=c&&B[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==$[c]){var ut=`
`+B[o].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=o&&0<=c);break}}}finally{Kt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?q(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return q(t.type);case 16:return q("Lazy");case 13:return t.child!==n&&n!==null?q("Suspense Fallback"):q("Suspense");case 19:return q("SuspenseList");case 0:case 15:return Qt(t.type,!1);case 11:return Qt(t.type.render,!1);case 1:return Qt(t.type,!0);case 31:return q("Activity");default:return""}}function Vt(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var xe=Object.prototype.hasOwnProperty,Lt=r.unstable_scheduleCallback,U=r.unstable_cancelCallback,E=r.unstable_shouldYield,Q=r.unstable_requestPaint,ft=r.unstable_now,Et=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,qt=r.unstable_UserBlockingPriority,Ut=r.unstable_NormalPriority,Bt=r.unstable_LowPriority,ge=r.unstable_IdlePriority,At=r.log,Ft=r.unstable_setDisableYieldValue,Zt=null,Yt=null;function zt(t){if(typeof At=="function"&&Ft(t),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(Zt,t)}catch{}}var ee=Math.clz32?Math.clz32:V,oe=Math.log,Pe=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(oe(t)/Pe|0)|0}var Rt=256,lt=262144,vt=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Ct(o):(v&=T,v!==0?c=Ct(v):a||(a=T&~t,a!==0&&(c=Ct(a))))):(T=o&~f,T!==0?c=Ct(T):v!==0?c=Ct(v):a||(a=o&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ye(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var t=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function di(t,n,a,o,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=v&~a;0<a;){var ut=31-ee(a),mt=1<<ut;T[ut]=0,B[ut]=-1;var et=$[ut];if(et!==null)for($[ut]=null,ut=0;ut<et.length;ut++){var st=et[ut];st!==null&&(st.lane&=-536870913)}a&=~mt}o!==0&&Ir(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ir(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ee(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Br(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ee(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Ri(t,n){var a=n&-n;return a=(a&42)!==0?1:Ka(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ka(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Cs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fr(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:r_(t.type))}function Qa(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var pi=Math.random().toString(36).slice(2),Ze="__reactFiber$"+pi,xn="__reactProps$"+pi,Bi="__reactContainer$"+pi,Hr="__reactEvents$"+pi,Fc="__reactListeners$"+pi,Hc="__reactHandles$"+pi,A="__reactResources$"+pi,X="__reactMarker$"+pi;function at(t){delete t[Ze],delete t[xn],delete t[Hr],delete t[Fc],delete t[Hc]}function it(t){var n=t[Ze];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Bi]||a[Ze]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Xg(t);t!==null;){if(a=t[Ze])return a;t=Xg(t)}return n}t=a,a=t.parentNode}return null}function W(t){if(t=t[Ze]||t[Bi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function bt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function wt(t){var n=t[A];return n||(n=t[A]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Dt(t){t[X]=!0}var kt=new Set,ie={};function te(t,n){Ht(t,n),Ht(t+"Capture",n)}function Ht(t,n){for(ie[t]=n,t=0;t<n.length;t++)kt.add(n[t])}var Me=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ue={},ze={};function bn(t){return xe.call(ze,t)?!0:xe.call(Ue,t)?!1:Me.test(t)?ze[t]=!0:(Ue[t]=!0,!1)}function ye(t,n,a){if(bn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function cn(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function re(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pa(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function yn(t){if(!t._valueTracker){var n=Pn(t)?"checked":"value";t._valueTracker=pa(t,n,""+t[n])}}function ma(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Pn(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function we(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ti=/[\n"\\]/g;function mn(t){return t.replace(ti,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,o,c,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+re(n)):t.value!==""+re(n)&&(t.value=""+re(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?ei(t,v,re(n)):a!=null?ei(t,v,re(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+re(T):t.removeAttribute("name")}function mi(t,n,a,o,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yn(t);return}a=a!=null?""+re(a):"",n=n!=null?""+re(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),yn(t)}function ei(t,n,a){n==="number"&&we(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fi(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+re(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ud(t,n,a){if(n!=null&&(n=""+re(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+re(a):""}function Ld(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(_t(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=re(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),yn(t)}function ws(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var vv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||vv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Od(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Nd(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Nd(t,f,n[f])}function Gc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(t){return yv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var Vc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ds=null,Us=null;function Pd(t){var n=W(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[xn]||null;if(!c)throw Error(s(90));An(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&ma(o)}break t;case"textarea":Ud(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Fi(t,!!a.multiple,n,!1)}}}var Xc=!1;function zd(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var o=t(n);return o}finally{if(Xc=!1,(Ds!==null||Us!==null)&&(Ol(),Ds&&(n=Ds,t=Us,Us=Ds=null,Pd(n),t)))for(n=0;n<t.length;n++)Pd(t[n])}}function Gr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Gi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Wc=!1}var ga=null,qc=null,jo=null;function Id(){if(jo)return jo;var t,n=qc,a=n.length,o,c="value"in ga?ga.value:ga.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===c[f-o];o++);return jo=c.slice(t,1<o?1-o:void 0)}function Zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function Bd(){return!1}function zn(t){function n(a,o,c,f,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Bd,this.isPropagationStopped=Bd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=zn(Ja),kr=x({},Ja,{view:0,detail:0}),Sv=zn(kr),Yc,jc,Xr,Jo=x({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(Yc=t.screenX-Xr.screenX,jc=t.screenY-Xr.screenY):jc=Yc=0,Xr=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Fd=zn(Jo),Mv=x({},Jo,{dataTransfer:0}),Ev=zn(Mv),Tv=x({},kr,{relatedTarget:0}),Zc=zn(Tv),bv=x({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=zn(bv),Rv=x({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cv=zn(Rv),wv=x({},Ja,{data:0}),Hd=zn(wv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Lv[t])?!!n[t]:!1}function Kc(){return Nv}var Ov=x({},kr,{key:function(t){if(t.key){var n=Dv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pv=zn(Ov),zv=x({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=zn(zv),Iv=x({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),Bv=zn(Iv),Fv=x({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=zn(Fv),Gv=x({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=zn(Gv),kv=x({},Ja,{newState:0,oldState:0}),Xv=zn(kv),Wv=[9,13,27,32],Qc=Gi&&"CompositionEvent"in window,Wr=null;Gi&&"documentMode"in document&&(Wr=document.documentMode);var qv=Gi&&"TextEvent"in window&&!Wr,Vd=Gi&&(!Qc||Wr&&8<Wr&&11>=Wr),kd=" ",Xd=!1;function Wd(t,n){switch(t){case"keyup":return Wv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function Yv(t,n){switch(t){case"compositionend":return qd(n);case"keypress":return n.which!==32?null:(Xd=!0,kd);case"textInput":return t=n.data,t===kd&&Xd?null:t;default:return null}}function jv(t,n){if(Ls)return t==="compositionend"||!Qc&&Wd(t,n)?(t=Id(),jo=qc=ga=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vd&&n.locale!=="ko"?null:n.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zv[t.type]:n==="textarea"}function jd(t,n,a,o){Ds?Us?Us.push(o):Us=[o]:Ds=o,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var qr=null,Yr=null;function Kv(t){Dg(t,0)}function $o(t){var n=bt(t);if(ma(n))return t}function Zd(t,n){if(t==="change")return n}var Kd=!1;if(Gi){var Jc;if(Gi){var $c="oninput"in document;if(!$c){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),$c=typeof Qd.oninput=="function"}Jc=$c}else Jc=!1;Kd=Jc&&(!document.documentMode||9<document.documentMode)}function Jd(){qr&&(qr.detachEvent("onpropertychange",$d),Yr=qr=null)}function $d(t){if(t.propertyName==="value"&&$o(Yr)){var n=[];jd(n,Yr,t,kc(t)),zd(Kv,n)}}function Qv(t,n,a){t==="focusin"?(Jd(),qr=n,Yr=a,qr.attachEvent("onpropertychange",$d)):t==="focusout"&&Jd()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(Yr)}function $v(t,n){if(t==="click")return $o(n)}function tx(t,n){if(t==="input"||t==="change")return $o(n)}function ex(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:ex;function jr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!xe.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,n){var a=tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tp(a)}}function np(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?np(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=we(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=we(t.document)}return n}function tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var nx=Gi&&"documentMode"in document&&11>=document.documentMode,Ns=null,eu=null,Zr=null,nu=!1;function ap(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Ns==null||Ns!==we(o)||(o=Ns,"selectionStart"in o&&tu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zr&&jr(Zr,o)||(Zr=o,o=Gl(eu,"onSelect"),0<o.length&&(n=new Qo("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ns)))}function $a(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Os={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},iu={},sp={};Gi&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function ts(t){if(iu[t])return iu[t];if(!Os[t])return t;var n=Os[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in sp)return iu[t]=n[a];return t}var rp=ts("animationend"),op=ts("animationiteration"),lp=ts("animationstart"),ix=ts("transitionrun"),ax=ts("transitionstart"),sx=ts("transitioncancel"),cp=ts("transitionend"),up=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function gi(t,n){up.set(t,n),te(n,[t])}var tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Ps=0,su=0;function el(){for(var t=Ps,n=su=Ps=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}f!==0&&fp(a,c,f)}}function nl(t,n,a,o){ni[Ps++]=t,ni[Ps++]=n,ni[Ps++]=a,ni[Ps++]=o,su|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ru(t,n,a,o){return nl(t,n,a,o),il(t)}function es(t,n){return nl(t,null,null,n),il(t)}function fp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ee(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function il(t){if(50<vo)throw vo=0,gf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var zs={};function rx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,o){return new rx(t,n,a,o)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function al(t,n,a,o,c,f){var v=0;if(o=t,typeof t=="function")ou(t)&&(v=1);else if(typeof t=="string")v=fy(t,a,G.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case L:return t=qn(31,a,n,c),t.elementType=L,t.lanes=f,t;case R:return ns(a.children,c,f,n);case S:v=8,c|=24;break;case _:return t=qn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case k:return t=qn(13,a,n,c),t.elementType=k,t.lanes=f,t;case N:return t=qn(19,a,n,c),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:v=10;break t;case P:v=9;break t;case C:v=11;break t;case z:v=14;break t;case Y:v=16,o=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=qn(v,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function ns(t,n,a,o){return t=qn(7,t,o,n),t.lanes=a,t}function lu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function dp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function cu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var pp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Vt(n)},pp.set(t,n),n)}return{value:t,source:n,stack:Vt(n)}}var Is=[],Bs=0,sl=null,Kr=0,ai=[],si=0,_a=null,Ci=1,wi="";function ki(t,n){Is[Bs++]=Kr,Is[Bs++]=sl,sl=t,Kr=n}function mp(t,n,a){ai[si++]=Ci,ai[si++]=wi,ai[si++]=_a,_a=t;var o=Ci;t=wi;var c=32-ee(o)-1;o&=~(1<<c),a+=1;var f=32-ee(n)+c;if(30<f){var v=c-c%5;f=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Ci=1<<32-ee(n)+c|a<<c|o,wi=f+t}else Ci=1<<f|a<<c|o,wi=t}function uu(t){t.return!==null&&(ki(t,1),mp(t,1,0))}function fu(t){for(;t===sl;)sl=Is[--Bs],Is[Bs]=null,Kr=Is[--Bs],Is[Bs]=null;for(;t===_a;)_a=ai[--si],ai[si]=null,wi=ai[--si],ai[si]=null,Ci=ai[--si],ai[si]=null}function gp(t,n){ai[si++]=Ci,ai[si++]=wi,ai[si++]=_a,Ci=n.id,wi=n.overflow,_a=t}var Sn=null,We=null,Se=!1,va=null,ri=!1,hu=Error(s(519));function xa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(ii(n,t)),hu}function _p(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Ze]=t,n[xn]=o,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)me(yo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),mi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Ld(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Og(n.textContent,a)?(o.popover!=null&&(me("beforetoggle",n),me("toggle",n)),o.onScroll!=null&&me("scroll",n),o.onScrollEnd!=null&&me("scrollend",n),o.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||xa(t,!0)}function vp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:Sn=Sn.return}}function Fs(t){if(t!==Sn)return!1;if(!Se)return vp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Uf(t.type,t.memoizedProps)),a=!a),a&&We&&xa(t),vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=kg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=kg(t)}else n===27?(n=We,Na(t.type)?(t=zf,zf=null,We=t):We=n):We=Sn?li(t.stateNode.nextSibling):null;return!0}function is(){We=Sn=null,Se=!1}function du(){var t=va;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),va=null),t}function Qr(t){va===null?va=[t]:va.push(t)}var pu=O(null),as=null,Xi=null;function ya(t,n,a){ht(pu,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=pu.current,tt(pu)}function mu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function gu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),mu(f.return,a,t),o||(v=null);break t}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),mu(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Hs(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=c.type;Wn(c.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(c===xt.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&gu(n,t,a,o),n.flags|=262144}function rl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ss(t){as=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return xp(as,t)}function ol(t,n){return as===null&&ss(t),xp(t,n)}function xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(t===null)throw Error(s(308));Xi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xi=Xi.next=n;return a}var ox=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lx=r.unstable_scheduleCallback,cx=r.unstable_NormalPriority,nn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new ox,data:new Map,refCount:0}}function Jr(t){t.refCount--,t.refCount===0&&lx(cx,function(){t.controller.abort()})}var $r=null,vu=0,Gs=0,Vs=null;function ux(t,n){if($r===null){var a=$r=[];vu=0,Gs=Mf(),Vs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return vu++,n.then(yp,yp),n}function yp(){if(--vu===0&&$r!==null){Vs!==null&&(Vs.status="fulfilled");var t=$r;$r=null,Gs=0,Vs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Sp=I.S;I.S=function(t,n){ag=ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ux(t,n),Sp!==null&&Sp(t,n)};var rs=O(null);function xu(){var t=rs.current;return t!==null?t:Xe.pooledCache}function ll(t,n){n===null?ht(rs,rs.current):ht(rs,n.pool)}function Mp(){var t=xu();return t===null?null:{parent:nn._currentValue,pool:t}}var ks=Error(s(460)),yu=Error(s(474)),cl=Error(s(542)),ul={then:function(){}};function Ep(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Tp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ap(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ap(t),t}throw ls=n,ks}}function os(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ls=a,ks):a}}var ls=null;function bp(){if(ls===null)throw Error(s(459));var t=ls;return ls=null,t}function Ap(t){if(t===ks||t===cl)throw Error(s(483))}var Xs=null,to=0;function fl(t){var n=to;return to+=1,Xs===null&&(Xs=[]),Tp(Xs,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function hl(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Rp(t){function n(j,F){if(t){var J=j.deletions;J===null?(j.deletions=[F],j.flags|=16):J.push(F)}}function a(j,F){if(!t)return null;for(;F!==null;)n(j,F),F=F.sibling;return null}function o(j){for(var F=new Map;j!==null;)j.key!==null?F.set(j.key,j):F.set(j.index,j),j=j.sibling;return F}function c(j,F){return j=Vi(j,F),j.index=0,j.sibling=null,j}function f(j,F,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<F?(j.flags|=67108866,F):J):(j.flags|=67108866,F)):(j.flags|=1048576,F)}function v(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,F,J,dt){return F===null||F.tag!==6?(F=lu(J,j.mode,dt),F.return=j,F):(F=c(F,J),F.return=j,F)}function B(j,F,J,dt){var jt=J.type;return jt===R?ut(j,F,J.props.children,dt,J.key):F!==null&&(F.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===Y&&os(jt)===F.type)?(F=c(F,J.props),eo(F,J),F.return=j,F):(F=al(J.type,J.key,J.props,null,j.mode,dt),eo(F,J),F.return=j,F)}function $(j,F,J,dt){return F===null||F.tag!==4||F.stateNode.containerInfo!==J.containerInfo||F.stateNode.implementation!==J.implementation?(F=cu(J,j.mode,dt),F.return=j,F):(F=c(F,J.children||[]),F.return=j,F)}function ut(j,F,J,dt,jt){return F===null||F.tag!==7?(F=ns(J,j.mode,dt,jt),F.return=j,F):(F=c(F,J),F.return=j,F)}function mt(j,F,J){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=lu(""+F,j.mode,J),F.return=j,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case M:return J=al(F.type,F.key,F.props,null,j.mode,J),eo(J,F),J.return=j,J;case b:return F=cu(F,j.mode,J),F.return=j,F;case Y:return F=os(F),mt(j,F,J)}if(_t(F)||ct(F))return F=ns(F,j.mode,J,null),F.return=j,F;if(typeof F.then=="function")return mt(j,fl(F),J);if(F.$$typeof===D)return mt(j,ol(j,F),J);hl(j,F)}return null}function et(j,F,J,dt){var jt=F!==null?F.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return jt!==null?null:T(j,F,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===jt?B(j,F,J,dt):null;case b:return J.key===jt?$(j,F,J,dt):null;case Y:return J=os(J),et(j,F,J,dt)}if(_t(J)||ct(J))return jt!==null?null:ut(j,F,J,dt,null);if(typeof J.then=="function")return et(j,F,fl(J),dt);if(J.$$typeof===D)return et(j,F,ol(j,J),dt);hl(j,J)}return null}function st(j,F,J,dt,jt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return j=j.get(J)||null,T(F,j,""+dt,jt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return j=j.get(dt.key===null?J:dt.key)||null,B(F,j,dt,jt);case b:return j=j.get(dt.key===null?J:dt.key)||null,$(F,j,dt,jt);case Y:return dt=os(dt),st(j,F,J,dt,jt)}if(_t(dt)||ct(dt))return j=j.get(J)||null,ut(F,j,dt,jt,null);if(typeof dt.then=="function")return st(j,F,J,fl(dt),jt);if(dt.$$typeof===D)return st(j,F,J,ol(F,dt),jt);hl(F,dt)}return null}function Gt(j,F,J,dt){for(var jt=null,be=null,Wt=F,ce=F=0,ve=null;Wt!==null&&ce<J.length;ce++){Wt.index>ce?(ve=Wt,Wt=null):ve=Wt.sibling;var Ae=et(j,Wt,J[ce],dt);if(Ae===null){Wt===null&&(Wt=ve);break}t&&Wt&&Ae.alternate===null&&n(j,Wt),F=f(Ae,F,ce),be===null?jt=Ae:be.sibling=Ae,be=Ae,Wt=ve}if(ce===J.length)return a(j,Wt),Se&&ki(j,ce),jt;if(Wt===null){for(;ce<J.length;ce++)Wt=mt(j,J[ce],dt),Wt!==null&&(F=f(Wt,F,ce),be===null?jt=Wt:be.sibling=Wt,be=Wt);return Se&&ki(j,ce),jt}for(Wt=o(Wt);ce<J.length;ce++)ve=st(Wt,j,ce,J[ce],dt),ve!==null&&(t&&ve.alternate!==null&&Wt.delete(ve.key===null?ce:ve.key),F=f(ve,F,ce),be===null?jt=ve:be.sibling=ve,be=ve);return t&&Wt.forEach(function(Ba){return n(j,Ba)}),Se&&ki(j,ce),jt}function $t(j,F,J,dt){if(J==null)throw Error(s(151));for(var jt=null,be=null,Wt=F,ce=F=0,ve=null,Ae=J.next();Wt!==null&&!Ae.done;ce++,Ae=J.next()){Wt.index>ce?(ve=Wt,Wt=null):ve=Wt.sibling;var Ba=et(j,Wt,Ae.value,dt);if(Ba===null){Wt===null&&(Wt=ve);break}t&&Wt&&Ba.alternate===null&&n(j,Wt),F=f(Ba,F,ce),be===null?jt=Ba:be.sibling=Ba,be=Ba,Wt=ve}if(Ae.done)return a(j,Wt),Se&&ki(j,ce),jt;if(Wt===null){for(;!Ae.done;ce++,Ae=J.next())Ae=mt(j,Ae.value,dt),Ae!==null&&(F=f(Ae,F,ce),be===null?jt=Ae:be.sibling=Ae,be=Ae);return Se&&ki(j,ce),jt}for(Wt=o(Wt);!Ae.done;ce++,Ae=J.next())Ae=st(Wt,j,ce,Ae.value,dt),Ae!==null&&(t&&Ae.alternate!==null&&Wt.delete(Ae.key===null?ce:Ae.key),F=f(Ae,F,ce),be===null?jt=Ae:be.sibling=Ae,be=Ae);return t&&Wt.forEach(function(My){return n(j,My)}),Se&&ki(j,ce),jt}function Fe(j,F,J,dt){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var jt=J.key;F!==null;){if(F.key===jt){if(jt=J.type,jt===R){if(F.tag===7){a(j,F.sibling),dt=c(F,J.props.children),dt.return=j,j=dt;break t}}else if(F.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===Y&&os(jt)===F.type){a(j,F.sibling),dt=c(F,J.props),eo(dt,J),dt.return=j,j=dt;break t}a(j,F);break}else n(j,F);F=F.sibling}J.type===R?(dt=ns(J.props.children,j.mode,dt,J.key),dt.return=j,j=dt):(dt=al(J.type,J.key,J.props,null,j.mode,dt),eo(dt,J),dt.return=j,j=dt)}return v(j);case b:t:{for(jt=J.key;F!==null;){if(F.key===jt)if(F.tag===4&&F.stateNode.containerInfo===J.containerInfo&&F.stateNode.implementation===J.implementation){a(j,F.sibling),dt=c(F,J.children||[]),dt.return=j,j=dt;break t}else{a(j,F);break}else n(j,F);F=F.sibling}dt=cu(J,j.mode,dt),dt.return=j,j=dt}return v(j);case Y:return J=os(J),Fe(j,F,J,dt)}if(_t(J))return Gt(j,F,J,dt);if(ct(J)){if(jt=ct(J),typeof jt!="function")throw Error(s(150));return J=jt.call(J),$t(j,F,J,dt)}if(typeof J.then=="function")return Fe(j,F,fl(J),dt);if(J.$$typeof===D)return Fe(j,F,ol(j,J),dt);hl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,F!==null&&F.tag===6?(a(j,F.sibling),dt=c(F,J),dt.return=j,j=dt):(a(j,F),dt=lu(J,j.mode,dt),dt.return=j,j=dt),v(j)):a(j,F)}return function(j,F,J,dt){try{to=0;var jt=Fe(j,F,J,dt);return Xs=null,jt}catch(Wt){if(Wt===ks||Wt===cl)throw Wt;var be=qn(29,Wt,null,j.mode);return be.lanes=dt,be.return=j,be}finally{}}}var cs=Rp(!0),Cp=Rp(!1),Sa=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=il(t),fp(t,null,a),n}return nl(t,o,n,a),il(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Br(t,a)}}function Eu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function io(){if(Tu){var t=Vs;if(t!==null)throw t}}function ao(t,n,a,o){Tu=!1;var c=t.updateQueue;Sa=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,$=B.next;B.next=null,v===null?f=$:v.next=$,v=B;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==v&&(T===null?ut.firstBaseUpdate=$:T.next=$,ut.lastBaseUpdate=B))}if(f!==null){var mt=c.baseState;v=0,ut=$=B=null,T=f;do{var et=T.lane&-536870913,st=et!==T.lane;if(st?(_e&et)===et:(o&et)===et){et!==0&&et===Gs&&(Tu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Gt=t,$t=T;et=n;var Fe=a;switch($t.tag){case 1:if(Gt=$t.payload,typeof Gt=="function"){mt=Gt.call(Fe,mt,et);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=$t.payload,et=typeof Gt=="function"?Gt.call(Fe,mt,et):Gt,et==null)break t;mt=x({},mt,et);break t;case 2:Sa=!0}}et=T.callback,et!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[et]:st.push(et))}else st={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?($=ut=st,B=mt):ut=ut.next=st,v|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;st=T,T=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ut===null&&(B=mt),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ca|=v,t.lanes=v,t.memoizedState=mt}}function wp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Dp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wp(a[t],n)}var Ws=O(null),dl=O(0);function Up(t,n){t=ta,ht(dl,t),ht(Ws,n),ta=t|n.baseLanes}function bu(){ht(dl,ta),ht(Ws,Ws.current)}function Au(){ta=dl.current,tt(Ws),tt(dl)}var Yn=O(null),oi=null;function Ta(t){var n=t.alternate;ht(Je,Je.current&1),ht(Yn,t),oi===null&&(n===null||Ws.current!==null||n.memoizedState!==null)&&(oi=t)}function Ru(t){ht(Je,Je.current),ht(Yn,t),oi===null&&(oi=t)}function Lp(t){t.tag===22?(ht(Je,Je.current),ht(Yn,t),oi===null&&(oi=t)):ba()}function ba(){ht(Je,Je.current),ht(Yn,Yn.current)}function jn(t){tt(Yn),oi===t&&(oi=null),tt(Je)}var Je=O(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||Pf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,le=null,Ie=null,an=null,ml=!1,qs=!1,us=!1,gl=0,so=0,Ys=null,hx=0;function Ke(){throw Error(s(321))}function Cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function wu(t,n,a,o,c,f){return qi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?mm:Xu,us=!1,f=a(o,c),us=!1,qs&&(f=Op(n,a,o,c)),Np(t),f}function Np(t){I.H=lo;var n=Ie!==null&&Ie.next!==null;if(qi=0,an=Ie=le=null,ml=!1,so=0,Ys=null,n)throw Error(s(300));t===null||sn||(t=t.dependencies,t!==null&&rl(t)&&(sn=!0))}function Op(t,n,a,o){le=t;var c=0;do{if(qs&&(Ys=null),so=0,qs=!1,25<=c)throw Error(s(301));if(c+=1,an=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=gm,f=n(a,o)}while(qs);return f}function dx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(le.flags|=1024),n}function Du(){var t=gl!==0;return gl=0,t}function Uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Lu(t){if(ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ml=!1}qi=0,an=Ie=le=null,qs=!1,so=gl=0,Ys=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?le.memoizedState=an=t:an=an.next=t,an}function $e(){if(Ie===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=an===null?le.memoizedState:an.next;if(n!==null)an=n,Ie=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},an===null?le.memoizedState=an=t:an=an.next=t}return an}function _l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=so;return so+=1,Ys===null&&(Ys=[]),t=Tp(Ys,t,n),n=le,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?mm:Xu),t}function vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===D)return Mn(t)}throw Error(s(438,String(t)))}function Nu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_l(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Yi(t,n){return typeof n=="function"?n(t):n}function xl(t){var n=$e();return Ou(n,Ie,t)}function Ou(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=v=null,B=null,$=n,ut=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(_e&mt)===mt:(qi&mt)===mt){var et=$.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===Gs&&(ut=!0);else if((qi&et)===et){$=$.next,et===Gs&&(ut=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=mt,v=f):B=B.next=mt,le.lanes|=et,Ca|=et;mt=$.action,us&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else et={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=et,v=f):B=B.next=et,le.lanes|=mt,Ca|=mt;$=$.next}while($!==null&&$!==n);if(B===null?v=f:B.next=T,!Wn(f,t.memoizedState)&&(sn=!0,ut&&(a=Vs,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Pu(t){var n=$e(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);Wn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Pp(t,n,a){var o=le,c=$e(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Wn((Ie||c).memoizedState,a);if(v&&(c.memoizedState=a,sn=!0),c=c.queue,Bu(Bp.bind(null,o,c,t),[t]),c.getSnapshot!==n||v||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,js(9,{destroy:void 0},Ip.bind(null,o,c,a,n),null),Xe===null)throw Error(s(349));f||(qi&127)!==0||zp(o,n,a)}return a}function zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=_l(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ip(t,n,a,o){n.value=a,n.getSnapshot=o,Fp(n)&&Hp(t)}function Bp(t,n,a){return a(function(){Fp(n)&&Hp(t)})}function Fp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Hp(t){var n=es(t,2);n!==null&&Gn(n,t,2)}function zu(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),us){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},n}function Gp(t,n,a,o){return t.baseState=a,Ou(t,Ie,typeof o=="function"?o:Yi)}function px(t,n,a,o,c){if(Ml(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Vp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=I.T,v={};I.T=v;try{var T=a(c,o),B=I.S;B!==null&&B(v,T),kp(t,n,T)}catch($){Iu(t,n,$)}finally{f!==null&&v.types!==null&&(f.types=v.types),I.T=f}}else try{f=a(c,o),kp(t,n,f)}catch($){Iu(t,n,$)}}function kp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Xp(t,n,o)},function(o){return Iu(t,n,o)}):Xp(t,n,a)}function Xp(t,n,a){n.status="fulfilled",n.value=a,Wp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Vp(t,a)))}function Iu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Wp(n),n=n.next;while(n!==o)}t.action=null}function Wp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qp(t,n){return n}function Yp(t,n){if(Se){var a=Xe.formState;if(a!==null){t:{var o=le;if(Se){if(We){e:{for(var c=We,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=li(c.nextSibling),o=c.data==="F!";break t}}xa(o)}o=!1}o&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qp,lastRenderedState:n},a.queue=o,a=hm.bind(null,le,o),o.dispatch=a,o=zu(!1),f=ku.bind(null,le,!1,o.queue),o=Un(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=px.bind(null,le,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function jp(t){var n=$e();return Zp(n,Ie,t)}function Zp(t,n,a){if(n=Ou(t,n,qp)[0],t=xl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ro(n)}catch(v){throw v===ks?cl:v}else o=n;n=$e();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,js(9,{destroy:void 0},mx.bind(null,c,a),null)),[o,f,t]}function mx(t,n){t.action=n}function Kp(t){var n=$e(),a=Ie;if(a!==null)return Zp(n,a,t);$e(),n=n.memoizedState,a=$e();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function js(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=_l(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Qp(){return $e().memoizedState}function yl(t,n,a,o){var c=Un();le.flags|=t,c.memoizedState=js(1|n,{destroy:void 0},a,o===void 0?null:o)}function Sl(t,n,a,o){var c=$e();o=o===void 0?null:o;var f=c.memoizedState.inst;Ie!==null&&o!==null&&Cu(o,Ie.memoizedState.deps)?c.memoizedState=js(n,f,a,o):(le.flags|=t,c.memoizedState=js(1|n,f,a,o))}function Jp(t,n){yl(8390656,8,t,n)}function Bu(t,n){Sl(2048,8,t,n)}function gx(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=_l(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function $p(t){var n=$e().memoizedState;return gx({ref:n,nextImpl:t}),function(){if((Ce&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function tm(t,n){return Sl(4,2,t,n)}function em(t,n){return Sl(4,4,t,n)}function nm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function im(t,n,a){a=a!=null?a.concat([t]):null,Sl(4,4,nm.bind(null,n,t),a)}function Fu(){}function am(t,n){var a=$e();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Cu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function sm(t,n){var a=$e();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Cu(n,o[1]))return o[0];if(o=t(),us){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[o,n],o}function Hu(t,n,a){return a===void 0||(qi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=rg(),le.lanes|=t,Ca|=t,a)}function rm(t,n,a,o){return Wn(a,n)?a:Ws.current!==null?(t=Hu(t,a,o),Wn(t,n)||(sn=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(_e&261930)===0?(sn=!0,t.memoizedState=a):(t=rg(),le.lanes|=t,Ca|=t,n)}function om(t,n,a,o,c){var f=K.p;K.p=f!==0&&8>f?f:8;var v=I.T,T={};I.T=T,ku(t,!1,n,a);try{var B=c(),$=I.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ut=fx(B,o);oo(t,n,ut,Qn(t))}else oo(t,n,o,Qn(t))}catch(mt){oo(t,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{K.p=f,v!==null&&T.types!==null&&(v.types=T.types),I.T=v}}function _x(){}function Gu(t,n,a,o){if(t.tag!==5)throw Error(s(476));var c=lm(t).queue;om(t,c,n,Z,a===null?_x:function(){return cm(t),a(o)})}function lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function cm(t){var n=lm(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},Qn())}function Vu(){return Mn(bo)}function um(){return $e().memoizedState}function fm(){return $e().memoizedState}function vx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ma(a);var o=Ea(n,t,a);o!==null&&(Gn(o,n,a),no(o,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function xx(t,n,a){var o=Qn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(t)?dm(n,a):(a=ru(t,n,a,o),a!==null&&(Gn(a,t,o),pm(a,n,o)))}function hm(t,n,a){var o=Qn();oo(t,n,a,o)}function oo(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(t))dm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,v))return nl(t,n,c,0),Xe===null&&el(),!1}catch{}finally{}if(a=ru(t,n,c,o),a!==null)return Gn(a,t,o),pm(a,n,o),!0}return!1}function ku(t,n,a,o){if(o={lane:2,revertLane:Mf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ml(t)){if(n)throw Error(s(479))}else n=ru(t,a,o,2),n!==null&&Gn(n,t,2)}function Ml(t){var n=t.alternate;return t===le||n!==null&&n===le}function dm(t,n){qs=ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function pm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Br(t,a)}}var lo={readContext:Mn,use:vl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};lo.useEffectEvent=Ke;var mm={readContext:Mn,use:vl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Jp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,yl(4194308,4,nm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return yl(4194308,4,t,n)},useInsertionEffect:function(t,n){yl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var o=t();if(us){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Un();if(a!==void 0){var c=a(n);if(us){zt(!0);try{a(n)}finally{zt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=xx.bind(null,le,t),[o.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=zu(t);var n=t.queue,a=hm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Un();return Hu(a,t,n)},useTransition:function(){var t=zu(!1);return t=om.bind(null,le,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=le,c=Un();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(_e&127)!==0||zp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jp(Bp.bind(null,o,f,t),[t]),o.flags|=2048,js(9,{destroy:void 0},Ip.bind(null,o,f,a,n),null),a},useId:function(){var t=Un(),n=Xe.identifierPrefix;if(Se){var a=wi,o=Ci;a=(o&~(1<<32-ee(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:Yp,useActionState:Yp,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return Un().memoizedState=vx.bind(null,le)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:Mn,use:vl,useCallback:am,useContext:Mn,useEffect:Bu,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:sm,useReducer:xl,useRef:Qp,useState:function(){return xl(Yi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=$e();return rm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=xl(Yi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Vu,useFormState:jp,useActionState:jp,useOptimistic:function(t,n){var a=$e();return Gp(a,Ie,t,n)},useMemoCache:Nu,useCacheRefresh:fm};Xu.useEffectEvent=$p;var gm={readContext:Mn,use:vl,useCallback:am,useContext:Mn,useEffect:Bu,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:sm,useReducer:Pu,useRef:Qp,useState:function(){return Pu(Yi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=$e();return Ie===null?Hu(a,t,n):rm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Pu(Yi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Vu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=$e();return Ie!==null?Gp(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:fm};gm.useEffectEvent=$p;function Wu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qu={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Qn(),c=Ma(o);c.payload=n,a!=null&&(c.callback=a),n=Ea(t,c,o),n!==null&&(Gn(n,t,o),no(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Qn(),c=Ma(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ea(t,c,o),n!==null&&(Gn(n,t,o),no(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),o=Ma(a);o.tag=2,n!=null&&(o.callback=n),n=Ea(t,o,a),n!==null&&(Gn(n,t,a),no(n,t,a))}};function _m(t,n,a,o,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!jr(a,o)||!jr(c,f):!0}function vm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&qu.enqueueReplaceState(n,n.state,null)}function fs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function xm(t){tl(t)}function ym(t){console.error(t)}function Sm(t){tl(t)}function El(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Mm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Yu(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){El(t,n)},a}function Em(t){return t=Ma(t),t.tag=3,t}function Tm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Mm(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Mm(n,a,o),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function yx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Hs(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Pl():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),xf(t,o,c)),!1;case 22:return a.flags|=65536,o===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),xf(t,o,c)),!1}throw Error(s(435,a.tag))}return xf(t,o,c),Pl(),!1}if(Se)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==hu&&(t=Error(s(422),{cause:o}),Qr(ii(t,a)))):(o!==hu&&(n=Error(s(423),{cause:o}),Qr(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ii(o,a),c=Yu(t.stateNode,o,c),Eu(t,c),Qe!==4&&(Qe=2)),!1;var f=Error(s(520),{cause:o});if(f=ii(f,a),_o===null?_o=[f]:_o.push(f),Qe!==4&&(Qe=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Yu(a.stateNode,o,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Em(c),Tm(c,t,a,o),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var ju=Error(s(461)),sn=!1;function En(t,n,a,o){n.child=t===null?Cp(n,null,a,o):cs(n,t.child,a,o)}function bm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return ss(n),o=wu(t,n,a,v,f,c),T=Du(),t!==null&&!sn?(Uu(t,n,c),ji(t,n,c)):(Se&&T&&uu(n),n.flags|=1,En(t,n,o,c),n.child)}function Am(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Rm(t,n,f,o,c)):(t=al(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(v,o)&&t.ref===n.ref)return ji(t,n,c)}return n.flags|=1,t=Vi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Rm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(jr(f,o)&&t.ref===n.ref)if(sn=!1,n.pendingProps=o=f,nf(t,c))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,ji(t,n,c)}return Zu(t,n,a,o,c)}function Cm(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return wm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ll(n,f!==null?f.cachePool:null),f!==null?Up(n,f):bu(),Lp(n);else return o=n.lanes=536870912,wm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(ll(n,f.cachePool),Up(n,f),ba(),n.memoizedState=null):(t!==null&&ll(n,null),bu(),ba());return En(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wm(t,n,a,o,c){var f=xu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ll(n,null),bu(),Lp(n),t!==null&&Hs(t,n,o,!0),n.childLanes=c,null}function Tl(t,n){return n=Al({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Dm(t,n,a){return cs(n,t.child,null,a),t=Tl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function Sx(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(o.mode==="hidden")return t=Tl(n,o),n.lanes=536870912,co(null,t);if(Ru(n),(t=We)?(t=Vg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=dp(t),a.return=n,n.child=a,Sn=n,We=null)):t=null,t===null)throw xa(n);return n.lanes=536870912,null}return Tl(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Ru(n),c)if(n.flags&256)n.flags&=-257,n=Dm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(sn||Hs(t,n,a,!1),c=(a&t.childLanes)!==0,sn||c){if(o=Xe,o!==null&&(v=Ri(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,es(t,v),Gn(o,t,v),ju;Pl(),n=Dm(t,n,a)}else t=f.treeContext,We=li(v.nextSibling),Sn=n,Se=!0,va=null,ri=!1,t!==null&&gp(n,t),n=Tl(n,o),n.flags|=4096;return n}return t=Vi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,o,c){return ss(n),a=wu(t,n,a,o,void 0,c),o=Du(),t!==null&&!sn?(Uu(t,n,c),ji(t,n,c)):(Se&&o&&uu(n),n.flags|=1,En(t,n,a,c),n.child)}function Um(t,n,a,o,c,f){return ss(n),n.updateQueue=null,a=Op(n,o,a,c),Np(t),o=Du(),t!==null&&!sn?(Uu(t,n,f),ji(t,n,f)):(Se&&o&&uu(n),n.flags|=1,En(t,n,a,f),n.child)}function Lm(t,n,a,o,c){if(ss(n),n.stateNode===null){var f=zs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Mn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Su(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Mn(v):zs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Wu(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&qu.enqueueReplaceState(f,f.state,null),ao(n,o,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=fs(a,T);f.props=B;var $=f.context,ut=a.contextType;v=zs,typeof ut=="object"&&ut!==null&&(v=Mn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==v)&&vm(n,f,o,v),Sa=!1;var et=n.memoizedState;f.state=et,ao(n,o,f,c),io(),$=n.memoizedState,T||et!==$||Sa?(typeof mt=="function"&&(Wu(n,a,mt,o),$=n.memoizedState),(B=Sa||_m(n,a,B,o,et,$,v))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=v,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Mu(t,n),v=n.memoizedProps,ut=fs(a,v),f.props=ut,mt=n.pendingProps,et=f.context,$=a.contextType,B=zs,typeof $=="object"&&$!==null&&(B=Mn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||et!==B)&&vm(n,f,o,B),Sa=!1,et=n.memoizedState,f.state=et,ao(n,o,f,c),io();var st=n.memoizedState;v!==mt||et!==st||Sa||t!==null&&t.dependencies!==null&&rl(t.dependencies)?(typeof T=="function"&&(Wu(n,a,T,o),st=n.memoizedState),(ut=Sa||_m(n,a,ut,o,et,st,B)||t!==null&&t.dependencies!==null&&rl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=B,o=ut):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,bl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=cs(n,t.child,null,c),n.child=cs(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ji(t,n,c),t}function Nm(t,n,a,o){return is(),n.flags|=256,En(t,n,a,o),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:Mp()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Om(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(Je.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?Ta(n):ba(),(t=We)?(t=Vg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=dp(t),a.return=n,n.child=a,Sn=n,We=null)):t=null,t===null)throw xa(n);return Pf(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(ba(),c=n.mode,T=Al({mode:"hidden",children:T},c),o=ns(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Qu(a),o.childLanes=Ju(t,v,a),n.memoizedState=Ku,co(null,o)):(Ta(n),$u(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Ta(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(ba(),n.child=t.child,n.flags|=128,n=null):(ba(),T=o.fallback,c=n.mode,o=Al({mode:"visible",children:o.children},c),T=ns(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,cs(n,t.child,null,a),o=n.child,o.memoizedState=Qu(a),o.childLanes=Ju(t,v,a),n.memoizedState=Ku,n=co(null,o));else if(Ta(n),Pf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var $=v.dgst;v=$,o=Error(s(419)),o.stack="",o.digest=v,Qr({value:o,source:null,stack:null}),n=tf(t,n,a)}else if(sn||Hs(t,n,a,!1),v=(a&t.childLanes)!==0,sn||v){if(v=Xe,v!==null&&(o=Ri(v,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,es(t,o),Gn(v,t,o),ju;Of(T)||Pl(),n=tf(t,n,a)}else Of(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,We=li(T.nextSibling),Sn=n,Se=!0,va=null,ri=!1,t!==null&&gp(n,t),n=$u(n,o.children),n.flags|=4096);return n}return c?(ba(),T=o.fallback,c=n.mode,B=t.child,$=B.sibling,o=Vi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?T=Vi($,T):(T=ns(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,co(null,o),o=n.child,T=t.child.memoizedState,T===null?T=Qu(a):(c=T.cachePool,c!==null?(B=nn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Mp(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=Ju(t,v,a),n.memoizedState=Ku,co(t.child,o)):(Ta(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=Al({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Al(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function tf(t,n,a){return cs(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Pm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),mu(t.return,n,a)}function ef(t,n,a,o,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function zm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var v=Je.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,ht(Je,v),En(t,n,o,a),o=Se?Kr:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pm(t,a,n);else if(t.tag===19)Pm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f,o);break;case"together":ef(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Hs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&rl(t)))}function Mx(t,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),ya(n,nn,t.memoizedState.cache),is();break;case 27:case 5:ae(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Om(t,n,a):(Ta(n),t=ji(t,n,a),t!==null?t.sibling:null);Ta(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Hs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return zm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ht(Je,Je.current),o)break;return null;case 22:return n.lanes=0,Cm(t,n,a,n.pendingProps);case 24:ya(n,nn,t.memoizedState.cache)}return ji(t,n,a)}function Im(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return sn=!1,Mx(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,Se&&(n.flags&1048576)!==0&&mp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=os(n.elementType),n.type=t,typeof t=="function")ou(t)?(o=fs(t,o),n.tag=1,n=Lm(null,n,t,o,a)):(n.tag=0,n=Zu(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===C){n.tag=11,n=bm(null,n,t,o,a);break t}else if(c===z){n.tag=14,n=Am(null,n,t,o,a);break t}}throw n=gt(t)||t,Error(s(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=fs(o,n.pendingProps),Lm(t,n,o,c,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Mu(t,n),ao(n,o,null,a);var v=n.memoizedState;if(o=v.cache,ya(n,nn,o),o!==f.cache&&gu(n,[nn],a,!0),io(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Nm(t,n,o,a);break t}else if(o!==c){c=ii(Error(s(424)),n),Qr(c),n=Nm(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(We=li(t.firstChild),Sn=n,Se=!0,va=null,ri=!0,a=Cp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(is(),o===c){n=ji(t,n,a);break t}En(t,n,o,a)}n=n.child}return n;case 26:return bl(t,n),t===null?(a=jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,o=Vl(St.current).createElement(a),o[Ze]=n,o[xn]=t,Tn(o,a,t),Dt(o),n.stateNode=o):n.memoizedState=jg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ae(n),t===null&&Se&&(o=n.stateNode=Wg(n.type,n.pendingProps,St.current),Sn=n,ri=!0,c=We,Na(n.type)?(zf=c,We=li(o.firstChild)):We=c),En(t,n,n.pendingProps.children,a),bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=o=We)&&(o=Jx(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,Sn=n,We=li(o.firstChild),ri=!1,c=!0):c=!1),c||xa(n)),ae(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,Uf(c,f)?o=null:v!==null&&Uf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=wu(t,n,dx,null,null,a),bo._currentValue=c),bl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Se&&((t=a=We)&&(a=$x(a,n.pendingProps,ri),a!==null?(n.stateNode=a,Sn=n,We=null,t=!0):t=!1),t||xa(n)),null;case 13:return Om(t,n,a);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=cs(n,null,o,a):En(t,n,o,a),n.child;case 11:return bm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ss(n),c=Mn(c),o=o(c),n.flags|=1,En(t,n,o,a),n.child;case 14:return Am(t,n,n.type,n.pendingProps,a);case 15:return Rm(t,n,n.type,n.pendingProps,a);case 19:return zm(t,n,a);case 31:return Sx(t,n,a);case 22:return Cm(t,n,a,n.pendingProps);case 24:return ss(n),o=Mn(nn),t===null?(c=xu(),c===null&&(c=Xe,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Su(n),ya(n,nn,c)):((t.lanes&a)!==0&&(Mu(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ya(n,nn,o)):(o=f.cache,ya(n,nn,o),o!==c.cache&&gu(n,[nn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(t){t.flags|=4}function af(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(ug())t.flags|=8192;else throw ls=ul,yu}else t.flags&=-16777217}function Bm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$g(n))if(ug())t.flags|=8192;else throw ls=ul,yu}function Rl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ln():536870912,t.lanes|=n,Js|=n)}function uo(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ex(t,n,a){var o=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(nn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fs(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Zi(n),f!==null?(qe(n),Bm(n,f)):(qe(n),af(n,c,null,o,a))):f?f!==t.memoizedState?(Zi(n),qe(n),Bm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Zi(n),qe(n),af(n,c,t,o,a)),null;case 27:if(Re(n),a=St.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}t=G.current,Fs(n)?_p(n):(t=Wg(c,o,a),n.stateNode=t,Zi(n))}return qe(n),null;case 5:if(Re(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=G.current,Fs(n))_p(n);else{var v=Vl(St.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}f[Ze]=n,f[xn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Tn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Zi(n)}}return qe(n),af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=St.current,Fs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[Ze]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Og(t.nodeValue,a)),t||xa(n,!0)}else t=Vl(t).createTextNode(o),t[Ze]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Fs(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ze]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Fs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ze]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),qe(n),null);case 4:return It(),t===null&&Af(n.stateNode.containerInfo),qe(n),null;case 10:return Wi(n.type),qe(n),null;case 19:if(tt(Je),o=n.memoizedState,o===null)return qe(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)uo(o,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,uo(o,!1),t=f.updateQueue,n.updateQueue=t,Rl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)hp(a,t),a=a.sibling;return ht(Je,Je.current&1|2),Se&&ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&ft()>Ll&&(n.flags|=128,c=!0,uo(o,!1),n.lanes=4194304)}else{if(!c)if(t=pl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Rl(n,t),uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Se)return qe(n),null}else 2*ft()-o.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,c=!0,uo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ft(),t.sibling=null,a=Je.current,ht(Je,c?a&1|2:a&1),Se&&ki(n,o.treeForkCount),t):(qe(n),null);case 22:case 23:return jn(n),Au(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&tt(rs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(nn),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Tx(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(nn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Re(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(Je),null;case 4:return It(),null;case 10:return Wi(n.type),null;case 22:case 23:return jn(n),Au(),t!==null&&tt(rs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(nn),null;case 25:return null;default:return null}}function Fm(t,n){switch(fu(n),n.tag){case 3:Wi(nn),It();break;case 26:case 27:case 5:Re(n);break;case 4:It();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:tt(Je);break;case 10:Wi(n.type);break;case 22:case 23:jn(n),Au(),t!==null&&tt(rs);break;case 24:Wi(nn)}}function fo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==c)}}catch(T){Ne(n,n.return,T)}}function Aa(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var B=a,$=T;try{$()}catch(ut){Ne(c,B,ut)}}}o=o.next}while(o!==f)}}catch(ut){Ne(n,n.return,ut)}}function Hm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Dp(n,a)}catch(o){Ne(t,t.return,o)}}}function Gm(t,n,a){a.props=fs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ne(t,n,o)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Ne(t,n,c)}}function Di(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ne(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ne(t,n,c)}else a.current=null}function Vm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ne(t,t.return,c)}}function sf(t,n,a){try{var o=t.stateNode;qx(o,t.type,a,n),o[xn]=n}catch(c){Ne(t,t.return,c)}}function km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(o!==4&&(o===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(of(t,n,a),t=t.sibling;t!==null;)of(t,n,a),t=t.sibling}function Cl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Cl(t,n,a),t=t.sibling;t!==null;)Cl(t,n,a),t=t.sibling}function Xm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[Ze]=t,n[xn]=a}catch(f){Ne(t,t.return,f)}}var Ki=!1,rn=!1,lf=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function bx(t,n){if(t=t.containerInfo,wf=Zl,t=ip(t),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,B=-1,$=0,ut=0,mt=t,et=null;e:for(;;){for(var st;mt!==a||c!==0&&mt.nodeType!==3||(T=v+c),mt!==f||o!==0&&mt.nodeType!==3||(B=v+o),mt.nodeType===3&&(v+=mt.nodeValue.length),(st=mt.firstChild)!==null;)et=mt,mt=st;for(;;){if(mt===t)break e;if(et===a&&++$===c&&(T=v),et===f&&++ut===o&&(B=v),(st=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=st}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:t,selectionRange:a},Zl=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Gt=fs(a.type,c);t=o.getSnapshotBeforeUpdate(Gt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch($t){Ne(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function qm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),o&4&&fo(5,a);break;case 1:if(Ji(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ne(a,a.return,v)}else{var c=fs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ne(a,a.return,v)}}o&64&&Hm(a),o&512&&ho(a,a.return);break;case 3:if(Ji(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dp(t,n)}catch(v){Ne(a,a.return,v)}}break;case 27:n===null&&o&4&&Xm(a);case 26:case 5:Ji(t,a),n===null&&o&4&&Vm(a),o&512&&ho(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),o&4&&Zm(t,a);break;case 13:Ji(t,a),o&4&&Km(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ox.bind(null,a),ty(t,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||rn,c=Ki;var f=rn;Ki=o,(rn=n)&&!f?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=c,rn=f}break;case 30:break;default:Ji(t,a)}}function Ym(t){var n=t.alternate;n!==null&&(t.alternate=null,Ym(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&at(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,In=!1;function Qi(t,n,a){for(a=a.child;a!==null;)jm(t,n,a),a=a.sibling}function jm(t,n,a){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:rn||Di(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Di(a,n);var o=je,c=In;Na(a.type)&&(je=a.stateNode,In=!1),Qi(t,n,a),Mo(a.stateNode),je=o,In=c;break;case 5:rn||Di(a,n);case 6:if(o=je,c=In,je=null,Qi(t,n,a),je=o,In=c,je!==null)if(In)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Ne(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Ne(a,n,f)}break;case 18:je!==null&&(In?(t=je,Hg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),rr(t)):Hg(je,a.stateNode));break;case 4:o=je,c=In,je=a.stateNode.containerInfo,In=!0,Qi(t,n,a),je=o,In=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),rn||Aa(4,a,n),Qi(t,n,a);break;case 1:rn||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Gm(a,n,o)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,Qi(t,n,a),rn=o;break;default:Qi(t,n,a)}}function Zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{rr(t)}catch(a){Ne(n,n.return,a)}}}function Km(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{rr(t)}catch(a){Ne(n,n.return,a)}}function Ax(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Wm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Wm),n;default:throw Error(s(435,t.tag))}}function wl(t,n){var a=Ax(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Px.bind(null,t,o);o.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Na(T.type)){je=T.stateNode,In=!1;break t}break;case 5:je=T.stateNode,In=!1;break t;case 3:case 4:je=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(je===null)throw Error(s(160));jm(f,v,c),je=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Qm(n,t),n=n.sibling}var _i=null;function Qm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Fn(t),o&4&&(Aa(3,t,t.return),fo(3,t),Aa(5,t,t.return));break;case 1:Bn(n,t),Fn(t),o&512&&(rn||a===null||Di(a,a.return)),o&64&&Ki&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=_i;if(Bn(n,t),Fn(t),o&512&&(rn||a===null||Di(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[X]||f[Ze]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,o,a),f[Ze]=t,Dt(f),o=f;break t;case"link":var v=Qg("link","href",c).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;case"meta":if(v=Qg("meta","content",c).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[Ze]=t,Dt(f),o=f}t.stateNode=o}else Jg(c,t.type,t.stateNode);else t.stateNode=Kg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Jg(c,t.type,t.stateNode):Kg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Fn(t),o&512&&(rn||a===null||Di(a,a.return)),a!==null&&o&4&&sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Fn(t),o&512&&(rn||a===null||Di(a,a.return)),t.flags&32){c=t.stateNode;try{ws(c,"")}catch(Gt){Ne(t,t.return,Gt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,sf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(lf=!0);break;case 6:if(Bn(n,t),Fn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Gt){Ne(t,t.return,Gt)}}break;case 3:if(Wl=null,c=_i,_i=kl(n.containerInfo),Bn(n,t),_i=c,Fn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(Gt){Ne(t,t.return,Gt)}lf&&(lf=!1,Jm(t));break;case 4:o=_i,_i=kl(t.stateNode.containerInfo),Bn(n,t),Fn(t),_i=o;break;case 12:Bn(n,t),Fn(t);break;case 31:Bn(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,wl(t,o)));break;case 13:Bn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,wl(t,o)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=Ki,ut=rn;if(Ki=$||c,rn=ut||B,Bn(n,t),rn=ut,Ki=$,Fn(t),o&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Ki||rn||hs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var mt=B.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Gt){Ne(B,B.return,Gt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Gt){Ne(B,B.return,Gt)}}}else if(n.tag===18){if(a===null){B=n;try{var st=B.stateNode;c?Gg(st,!0):Gg(B.stateNode,!1)}catch(Gt){Ne(B,B.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wl(t,a))));break;case 19:Bn(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,wl(t,o)));break;case 30:break;case 21:break;default:Bn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(km(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=rf(t);Cl(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(ws(v,""),a.flags&=-33);var T=rf(t);Cl(t,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,$=rf(t);of(t,$,B);break;default:throw Error(s(161))}}catch(ut){Ne(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Jm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qm(t,n.alternate,n),n=n.sibling}function hs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),hs(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gm(n,n.return,a),hs(n);break;case 27:Mo(n.stateNode);case 26:case 5:Di(n,n.return),hs(n);break;case 22:n.memoizedState===null&&hs(n);break;case 30:hs(n);break;default:hs(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:$i(c,f,a),fo(4,f);break;case 1:if($i(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ne(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)wp(B[c],T)}catch($){Ne(o,o.return,$)}}a&&v&64&&Hm(f),ho(f,f.return);break;case 27:Xm(f);case 26:case 5:$i(c,f,a),a&&o===null&&v&4&&Vm(f),ho(f,f.return);break;case 12:$i(c,f,a);break;case 31:$i(c,f,a),a&&v&4&&Zm(c,f);break;case 13:$i(c,f,a),a&&v&4&&Km(c,f);break;case 22:f.memoizedState===null&&$i(c,f,a),ho(f,f.return);break;case 30:break;default:$i(c,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Jr(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t))}function vi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$m(t,n,a,o),n=n.sibling}function $m(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,o),c&2048&&fo(9,n);break;case 1:vi(t,n,a,o);break;case 3:vi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t)));break;case 12:if(c&2048){vi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ne(n,n.return,B)}}else vi(t,n,a,o);break;case 31:vi(t,n,a,o);break;case 13:vi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,o):po(t,n):f._visibility&2?vi(t,n,a,o):(f._visibility|=2,Zs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&cf(v,n);break;case 24:vi(t,n,a,o),c&2048&&uf(n.alternate,n);break;default:vi(t,n,a,o)}}function Zs(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,B=o,$=v.flags;switch(v.tag){case 0:case 11:case 15:Zs(f,v,T,B,c),fo(8,v);break;case 23:break;case 22:var ut=v.stateNode;v.memoizedState!==null?ut._visibility&2?Zs(f,v,T,B,c):po(f,v):(ut._visibility|=2,Zs(f,v,T,B,c)),c&&$&2048&&cf(v.alternate,v);break;case 24:Zs(f,v,T,B,c),c&&$&2048&&uf(v.alternate,v);break;default:Zs(f,v,T,B,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:po(a,o),c&2048&&cf(o.alternate,o);break;case 24:po(a,o),c&2048&&uf(o.alternate,o);break;default:po(a,o)}n=n.sibling}}var mo=8192;function Ks(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)tg(t,n,a),t=t.sibling}function tg(t,n,a){switch(t.tag){case 26:Ks(t,n,a),t.flags&mo&&t.memoizedState!==null&&hy(a,_i,t.memoizedState,t.memoizedProps);break;case 5:Ks(t,n,a);break;case 3:case 4:var o=_i;_i=kl(t.stateNode.containerInfo),Ks(t,n,a),_i=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=mo,mo=16777216,Ks(t,n,a),mo=o):Ks(t,n,a));break;default:Ks(t,n,a)}}function eg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ig(o,t)}eg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ng(t),t=t.sibling}function ng(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Dl(t)):go(t);break;default:go(t)}}function Dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ig(o,t)}eg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}t=t.sibling}}function ig(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=t;gn!==null;){o=gn;var c=o.sibling,f=o.return;if(Ym(o),o===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var Rx={getCacheForType:function(t){var n=Mn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(nn).controller.signal}},Cx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Xe=null,pe=null,_e=0,Le=0,Zn=null,Ra=!1,Qs=!1,ff=!1,ta=0,Qe=0,Ca=0,ds=0,hf=0,Kn=0,Js=0,_o=null,Hn=null,df=!1,Ul=0,ag=0,Ll=1/0,Nl=null,wa=null,un=0,Da=null,$s=null,ea=0,pf=0,mf=null,sg=null,vo=0,gf=null;function Qn(){return(Ce&2)!==0&&_e!==0?_e&-_e:I.T!==null?Mf():Fr()}function rg(){if(Kn===0)if((_e&536870912)===0||Se){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Gn(t,n,a){(t===Xe&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(tr(t,0),Ua(t,_e,Kn,!1)),vn(t,a),((Ce&2)===0||t!==Xe)&&(t===Xe&&((Ce&2)===0&&(ds|=a),Qe===4&&Ua(t,_e,Kn,!1)),Ui(t))}function og(t,n,a){if((Ce&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||ne(t,n),c=o?Ux(t,n):vf(t,n,!0),f=o;do{if(c===0){Qs&&!o&&Ua(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!wx(a)){c=vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;c=_o;var B=T.current.memoizedState.isDehydrated;if(B&&(tr(T,v).flags|=256),v=vf(T,v,!1),v!==2){if(ff&&!B){T.errorRecoveryDisabledLanes|=f,ds|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){tr(t,0),Ua(t,n,0,!0);break}t:{switch(o=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,Kn,!Ra);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ul+300-ft(),10<c)){if(Ua(o,n,Kn,!Ra),Nt(o,0,!0)!==0)break t;ea=n,o.timeoutHandle=Bg(lg.bind(null,o,a,Hn,Nl,df,n,Kn,ds,Js,Ra,f,"Throttled",-0,0),c);break t}lg(o,a,Hn,Nl,df,n,Kn,ds,Js,Ra,f,null,-0,0)}}break}while(!0);Ui(t)}function lg(t,n,a,o,c,f,v,T,B,$,ut,mt,et,st){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},tg(n,f,mt);var Gt=(f&62914560)===f?Ul-ft():(f&4194048)===f?ag-ft():0;if(Gt=dy(mt,Gt),Gt!==null){ea=f,t.cancelPendingCommit=Gt(gg.bind(null,t,n,f,a,o,c,v,T,B,ut,mt,null,et,st)),Ua(t,f,v,!$);return}}gg(t,n,f,a,o,c,v,T,B)}function wx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(t,n,a,o){n&=~hf,n&=~ds,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-ee(c),v=1<<f;o[f]=-1,c&=~v}a!==0&&Ir(t,a,n)}function Ol(){return(Ce&6)===0?(xo(0),!1):!0}function _f(){if(pe!==null){if(Le===0)var t=pe.return;else t=pe,Xi=as=null,Lu(t),Xs=null,to=0,t=pe;for(;t!==null;)Fm(t.alternate,t),t=t.return;pe=null}}function tr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,_f(),Xe=t,pe=a=Vi(t.current,null),_e=n,Le=0,Zn=null,Ra=!1,Qs=ne(t,n),ff=!1,Js=Kn=hf=ds=Ca=Qe=0,Hn=_o=null,df=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-ee(o),f=1<<c;n|=t[c],o&=~f}return ta=n,el(),a}function cg(t,n){le=null,I.H=lo,n===ks||n===cl?(n=bp(),Le=3):n===yu?(n=bp(),Le=4):Le=n===ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(Qe=1,El(t,ii(n,t.current)))}function ug(){var t=Yn.current;return t===null?!0:(_e&4194048)===_e?oi===null:(_e&62914560)===_e||(_e&536870912)!==0?t===oi:!1}function fg(){var t=I.H;return I.H=lo,t===null?lo:t}function hg(){var t=I.A;return I.A=Rx,t}function Pl(){Qe=4,Ra||(_e&4194048)!==_e&&Yn.current!==null||(Qs=!0),(Ca&134217727)===0&&(ds&134217727)===0||Xe===null||Ua(Xe,_e,Kn,!1)}function vf(t,n,a){var o=Ce;Ce|=2;var c=fg(),f=hg();(Xe!==t||_e!==n)&&(Nl=null,tr(t,n)),n=!1;var v=Qe;t:do try{if(Le!==0&&pe!==null){var T=pe,B=Zn;switch(Le){case 8:_f(),v=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var $=Le;if(Le=0,Zn=null,er(t,T,B,$),a&&Qs){v=0;break t}break;default:$=Le,Le=0,Zn=null,er(t,T,B,$)}}Dx(),v=Qe;break}catch(ut){cg(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Xi=as=null,Ce=o,I.H=c,I.A=f,pe===null&&(Xe=null,_e=0,el()),v}function Dx(){for(;pe!==null;)dg(pe)}function Ux(t,n){var a=Ce;Ce|=2;var o=fg(),c=hg();Xe!==t||_e!==n?(Nl=null,Ll=ft()+500,tr(t,n)):Qs=ne(t,n);t:do try{if(Le!==0&&pe!==null){n=pe;var f=Zn;e:switch(Le){case 1:Le=0,Zn=null,er(t,n,f,1);break;case 2:case 9:if(Ep(f)){Le=0,Zn=null,pg(n);break}n=function(){Le!==2&&Le!==9||Xe!==t||(Le=7),Ui(t)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:Ep(f)?(Le=0,Zn=null,pg(n)):(Le=0,Zn=null,er(t,n,f,7));break;case 5:var v=null;switch(pe.tag){case 26:v=pe.memoizedState;case 5:case 27:var T=pe;if(v?$g(v):T.stateNode.complete){Le=0,Zn=null;var B=T.sibling;if(B!==null)pe=B;else{var $=T.return;$!==null?(pe=$,zl($)):pe=null}break e}}Le=0,Zn=null,er(t,n,f,5);break;case 6:Le=0,Zn=null,er(t,n,f,6);break;case 8:_f(),Qe=6;break t;default:throw Error(s(462))}}Lx();break}catch(ut){cg(t,ut)}while(!0);return Xi=as=null,I.H=o,I.A=c,Ce=a,pe!==null?0:(Xe=null,_e=0,el(),Qe)}function Lx(){for(;pe!==null&&!E();)dg(pe)}function dg(t){var n=Im(t.alternate,t,ta);t.memoizedProps=t.pendingProps,n===null?zl(t):pe=n}function pg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Um(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Um(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Lu(n);default:Fm(a,n),n=pe=hp(n,ta),n=Im(a,n,ta)}t.memoizedProps=t.pendingProps,n===null?zl(t):pe=n}function er(t,n,a,o){Xi=as=null,Lu(n),Xs=null,to=0;var c=n.return;try{if(yx(t,c,n,a,_e)){Qe=1,El(t,ii(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;Qe=1,El(t,ii(a,t.current)),pe=null;return}n.flags&32768?(Se||o===1?t=!0:Qs||(_e&536870912)!==0?t=!1:(Ra=t=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),mg(n,t)):zl(n)}function zl(t){var n=t;do{if((n.flags&32768)!==0){mg(n,Ra);return}t=n.return;var a=Ex(n.alternate,n,ta);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);Qe===0&&(Qe=5)}function mg(t,n){do{var a=Tx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);Qe=6,pe=null}function gg(t,n,a,o,c,f,v,T,B){t.cancelPendingCommit=null;do Il();while(un!==0);if((Ce&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=su,di(t,a,f,v,T,B),t===Xe&&(pe=Xe=null,_e=0),$s=n,Da=t,ea=a,pf=f,mf=c,sg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zx(Ut,function(){return Sg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=K.p,K.p=2,v=Ce,Ce|=4;try{bx(t,n,a)}finally{Ce=v,K.p=c,I.T=o}}un=1,_g(),vg(),xg()}}function _g(){if(un===1){un=0;var t=Da,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var c=Ce;Ce|=4;try{Qm(n,t);var f=Df,v=ip(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&np(T.ownerDocument.documentElement,T)){if(B!==null&&tu(T)){var $=B.start,ut=B.end;if(ut===void 0&&(ut=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ut,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var st=et.getSelection(),Gt=T.textContent.length,$t=Math.min(B.start,Gt),Fe=B.end===void 0?$t:Math.min(B.end,Gt);!st.extend&&$t>Fe&&(v=Fe,Fe=$t,$t=v);var j=ep(T,$t),F=ep(T,Fe);if(j&&F&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==F.node||st.focusOffset!==F.offset)){var J=mt.createRange();J.setStart(j.node,j.offset),st.removeAllRanges(),$t>Fe?(st.addRange(J),st.extend(F.node,F.offset)):(J.setEnd(F.node,F.offset),st.addRange(J))}}}}for(mt=[],st=T;st=st.parentNode;)st.nodeType===1&&mt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var dt=mt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Zl=!!wf,Df=wf=null}finally{Ce=c,K.p=o,I.T=a}}t.current=n,un=2}}function vg(){if(un===2){un=0;var t=Da,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var c=Ce;Ce|=4;try{qm(t,n.alternate,n)}finally{Ce=c,K.p=o,I.T=a}}un=3}}function xg(){if(un===4||un===3){un=0,Q();var t=Da,n=$s,a=ea,o=sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,$s=Da=null,yg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(wa=null),Cs(a),n=n.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Zt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,c=K.p,K.p=2,I.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var T=o[v];f(T.value,{componentStack:T.stack})}}finally{I.T=n,K.p=c}}(ea&3)!==0&&Il(),Ui(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===gf?vo++:(vo=0,gf=t):vo=0,xo(0)}}function yg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Jr(n)))}function Il(){return _g(),vg(),xg(),Sg()}function Sg(){if(un!==5)return!1;var t=Da,n=pf;pf=0;var a=Cs(ea),o=I.T,c=K.p;try{K.p=32>a?32:a,I.T=null,a=mf,mf=null;var f=Da,v=ea;if(un=0,$s=Da=null,ea=0,(Ce&6)!==0)throw Error(s(331));var T=Ce;if(Ce|=4,ng(f.current),$m(f,f.current,v,a),Ce=T,xo(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Zt,f)}catch{}return!0}finally{K.p=c,I.T=o,yg(t,n)}}function Mg(t,n,a){n=ii(a,n),n=Yu(t.stateNode,n,2),t=Ea(t,n,2),t!==null&&(vn(t,2),Ui(t))}function Ne(t,n,a){if(t.tag===3)Mg(t,t,a);else for(;n!==null;){if(n.tag===3){Mg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){t=ii(a,t),a=Em(2),o=Ea(n,a,2),o!==null&&(Tm(a,o,n,t),vn(o,2),Ui(o));break}}n=n.return}}function xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Cx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(ff=!0,c.add(a),t=Nx.bind(null,t,n,a),n.then(t,t))}function Nx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(_e&a)===a&&(Qe===4||Qe===3&&(_e&62914560)===_e&&300>ft()-Ul?(Ce&2)===0&&tr(t,0):hf|=a,Js===_e&&(Js=0)),Ui(t)}function Eg(t,n){n===0&&(n=ln()),t=es(t,n),t!==null&&(vn(t,n),Ui(t))}function Ox(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Eg(t,a)}function Px(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Eg(t,a)}function zx(t,n){return Lt(t,n)}var Bl=null,nr=null,yf=!1,Fl=!1,Sf=!1,La=0;function Ui(t){t!==nr&&t.next===null&&(nr===null?Bl=nr=t:nr=nr.next=t),Fl=!0,yf||(yf=!0,Bx())}function xo(t,n){if(!Sf&&Fl){Sf=!0;do for(var a=!1,o=Bl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var v=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-ee(42|t)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rg(o,f))}else f=_e,f=Nt(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ne(o,f)||(a=!0,Rg(o,f));o=o.next}while(a);Sf=!1}}function Ix(){Tg()}function Tg(){Fl=yf=!1;var t=0;La!==0&&jx()&&(t=La);for(var n=ft(),a=null,o=Bl;o!==null;){var c=o.next,f=bg(o,n);f===0?(o.next=null,a===null?Bl=c:a.next=c,c===null&&(nr=a)):(a=o,(t!==0||(f&3)!==0)&&(Fl=!0)),o=c}un!==0&&un!==5||xo(t),La!==0&&(La=0)}function bg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-ee(f),T=1<<v,B=c[v];B===-1?((T&a)===0||(T&o)!==0)&&(c[v]=Ye(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xe,a=_e,a=Nt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ne(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&U(o),Cs(a)){case 2:case 8:a=qt;break;case 32:a=Ut;break;case 268435456:a=ge;break;default:a=Ut}return o=Ag.bind(null,t),a=Lt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&U(o),t.callbackPriority=2,t.callbackNode=null,2}function Ag(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Il()&&t.callbackNode!==a)return null;var o=_e;return o=Nt(t,t===Xe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(og(t,o,n),bg(t,ft()),t.callbackNode!=null&&t.callbackNode===a?Ag.bind(null,t):null)}function Rg(t,n){if(Il())return null;og(t,n,!0)}function Bx(){Kx(function(){(Ce&6)!==0?Lt(pt,Ix):Tg()})}function Mf(){if(La===0){var t=Gs;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),La=t}return La}function Cg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yo(""+t)}function wg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Fx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Cg((c[xn]||null).action),v=o.submitter;v&&(n=(n=v[xn]||null)?Cg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Qo("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(La!==0){var B=v?wg(c,v):new FormData(c);Gu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?wg(c,v):new FormData(c),Gu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Ef=0;Ef<au.length;Ef++){var Tf=au[Ef],Hx=Tf.toLowerCase(),Gx=Tf[0].toUpperCase()+Tf.slice(1);gi(Hx,"on"+Gx)}gi(rp,"onAnimationEnd"),gi(op,"onAnimationIteration"),gi(lp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(ix,"onTransitionRun"),gi(ax,"onTransitionStart"),gi(sx,"onTransitionCancel"),gi(cp,"onTransitionEnd"),Ht("onMouseEnter",["mouseout","mouseover"]),Ht("onMouseLeave",["mouseout","mouseover"]),Ht("onPointerEnter",["pointerout","pointerover"]),Ht("onPointerLeave",["pointerout","pointerover"]),te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),te("onBeforeInput",["compositionend","keypress","textInput","paste"]),te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Dg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var T=o[v],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ut){tl(ut)}c.currentTarget=null,f=B}else for(v=0;v<o.length;v++){if(T=o[v],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ut){tl(ut)}c.currentTarget=null,f=B}}}}function me(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=t+"__bubble";a.has(o)||(Ug(n,t,2,!1),a.add(o))}function bf(t,n,a){var o=0;n&&(o|=4),Ug(a,t,o,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[Hl]){t[Hl]=!0,kt.forEach(function(a){a!=="selectionchange"&&(Vx.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,bf("selectionchange",!1,n))}}function Ug(t,n,a,o){switch(r_(n)){case 2:var c=gy;break;case 8:c=_y;break;default:c=Gf}a=c.bind(null,n,a,t),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Rf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=o.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=it(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){o=f=v;continue t}T=T.parentNode}}o=o.return}zd(function(){var $=f,ut=kc(a),mt=[];t:{var et=up.get(t);if(et!==void 0){var st=Qo,Gt=t;switch(t){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":st=Pv;break;case"focusin":Gt="focus",st=Zc;break;case"focusout":Gt="blur",st=Zc;break;case"beforeblur":case"afterblur":st=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Bv;break;case rp:case op:case lp:st=Av;break;case cp:st=Hv;break;case"scroll":case"scrollend":st=Sv;break;case"wheel":st=Vv;break;case"copy":case"cut":case"paste":st=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Gd;break;case"toggle":case"beforetoggle":st=Xv}var $t=(n&4)!==0,Fe=!$t&&(t==="scroll"||t==="scrollend"),j=$t?et!==null?et+"Capture":null:et;$t=[];for(var F=$,J;F!==null;){var dt=F;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||j===null||(dt=Gr(F,j),dt!=null&&$t.push(So(F,dt,J))),Fe)break;F=F.return}0<$t.length&&(et=new st(et,Gt,null,a,ut),mt.push({event:et,listeners:$t}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",et&&a!==Vc&&(Gt=a.relatedTarget||a.fromElement)&&(it(Gt)||Gt[Bi]))break t;if((st||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,st?(Gt=a.relatedTarget||a.toElement,st=$,Gt=Gt?it(Gt):null,Gt!==null&&(Fe=u(Gt),$t=Gt.tag,Gt!==Fe||$t!==5&&$t!==27&&$t!==6)&&(Gt=null)):(st=null,Gt=$),st!==Gt)){if($t=Fd,dt="onMouseLeave",j="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&($t=Gd,dt="onPointerLeave",j="onPointerEnter",F="pointer"),Fe=st==null?et:bt(st),J=Gt==null?et:bt(Gt),et=new $t(dt,F+"leave",st,a,ut),et.target=Fe,et.relatedTarget=J,dt=null,it(ut)===$&&($t=new $t(j,F+"enter",Gt,a,ut),$t.target=J,$t.relatedTarget=Fe,dt=$t),Fe=dt,st&&Gt)e:{for($t=kx,j=st,F=Gt,J=0,dt=j;dt;dt=$t(dt))J++;dt=0;for(var jt=F;jt;jt=$t(jt))dt++;for(;0<J-dt;)j=$t(j),J--;for(;0<dt-J;)F=$t(F),dt--;for(;J--;){if(j===F||F!==null&&j===F.alternate){$t=j;break e}j=$t(j),F=$t(F)}$t=null}else $t=null;st!==null&&Lg(mt,et,st,$t,!1),Gt!==null&&Fe!==null&&Lg(mt,Fe,Gt,$t,!0)}}t:{if(et=$?bt($):window,st=et.nodeName&&et.nodeName.toLowerCase(),st==="select"||st==="input"&&et.type==="file")var be=Zd;else if(Yd(et))if(Kd)be=tx;else{be=Jv;var Wt=Qv}else st=et.nodeName,!st||st.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Gc($.elementType)&&(be=Zd):be=$v;if(be&&(be=be(t,$))){jd(mt,be,a,ut);break t}Wt&&Wt(t,et,$),t==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&ei(et,"number",et.value)}switch(Wt=$?bt($):window,t){case"focusin":(Yd(Wt)||Wt.contentEditable==="true")&&(Ns=Wt,eu=$,Zr=null);break;case"focusout":Zr=eu=Ns=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,ap(mt,a,ut);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":ap(mt,a,ut)}var ce;if(Qc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Ls?Wd(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Vd&&a.locale!=="ko"&&(Ls||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ls&&(ce=Id()):(ga=ut,qc="value"in ga?ga.value:ga.textContent,Ls=!0)),Wt=Gl($,ve),0<Wt.length&&(ve=new Hd(ve,t,null,a,ut),mt.push({event:ve,listeners:Wt}),ce?ve.data=ce:(ce=qd(a),ce!==null&&(ve.data=ce)))),(ce=qv?Yv(t,a):jv(t,a))&&(ve=Gl($,"onBeforeInput"),0<ve.length&&(Wt=new Hd("onBeforeInput","beforeinput",null,a,ut),mt.push({event:Wt,listeners:ve}),Wt.data=ce)),Fx(mt,t,$,a,ut)}Dg(mt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(t,a),c!=null&&o.unshift(So(t,c,f)),c=Gr(t,n),c!=null&&o.push(So(t,c,f))),t.tag===3)return o;t=t.return}return[]}function kx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lg(t,n,a,o,c){for(var f=n._reactName,v=[];a!==null&&a!==o;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||$===null||(B=$,c?($=Gr(a,f),$!=null&&v.unshift(So(a,$,B))):c||($=Gr(a,f),$!=null&&v.push(So(a,$,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Xx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(Xx,`
`).replace(Wx,"")}function Og(t,n){return n=Ng(n),Ng(t)===n}function Be(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ws(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ws(t,""+o);break;case"className":Xt(t,"class",o);break;case"tabIndex":Xt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(t,a,o);break;case"style":Od(t,o,f);break;case"data":if(n!=="object"){Xt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Yo(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Yo(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Hi);break;case"onScroll":o!=null&&me("scroll",t);break;case"onScrollEnd":o!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Yo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":me("beforetoggle",t),me("toggle",t),ye(t,"popover",o);break;case"xlinkActuate":cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":cn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":cn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":cn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":cn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ye(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xv.get(a)||a,ye(t,a,o))}}function Cf(t,n,a,o,c,f){switch(a){case"style":Od(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ws(t,o):(typeof o=="number"||typeof o=="bigint")&&ws(t,""+o);break;case"onScroll":o!=null&&me("scroll",t);break;case"onScrollEnd":o!=null&&me("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ie.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ye(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,v,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),o&&Be(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var T=f=v=c=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":v=ut;break;case"checked":B=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Be(t,n,o,ut,a,null)}}mi(t,f,T,B,$,v,c,!1);return;case"select":me("invalid",t),o=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:Be(t,n,c,T,a,null)}n=f,a=v,t.multiple=!!o,n!=null?Fi(t,!!o,n,!1):a!=null&&Fi(t,!!o,a,!0);return;case"textarea":me("invalid",t),f=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Be(t,n,v,T,a,null)}Ld(t,o,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(t,n,B,o,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(o=0;o<yo.length;o++)me(yo[o],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,$,o,a,null)}return;default:if(Gc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Cf(t,n,ut,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Be(t,n,T,o,a,null))}function qx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,B=null,$=null,ut=null;for(st in a){var mt=a[st];if(a.hasOwnProperty(st)&&mt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=mt;default:o.hasOwnProperty(st)||Be(t,n,st,null,o,mt)}}for(var et in o){var st=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(st!=null||mt!=null))switch(et){case"type":f=st;break;case"name":c=st;break;case"checked":$=st;break;case"defaultChecked":ut=st;break;case"value":v=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==mt&&Be(t,n,et,st,o,mt)}}An(t,v,T,B,$,ut,f,c);return;case"select":st=v=T=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:o.hasOwnProperty(f)||Be(t,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&Be(t,n,c,f,o,B)}n=T,a=v,o=st,et!=null?Fi(t,!!a,et,!1):!!o!=!!a&&(n!=null?Fi(t,!!a,n,!0):Fi(t,!!a,a?[]:"",!1));return;case"textarea":st=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(t,n,T,null,o,c)}for(v in o)if(c=o[v],f=a[v],o.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":et=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,v,c,o,f)}Ud(t,et,st);return;case"option":for(var Gt in a)if(et=a[Gt],a.hasOwnProperty(Gt)&&et!=null&&!o.hasOwnProperty(Gt))switch(Gt){case"selected":t.selected=!1;break;default:Be(t,n,Gt,null,o,et)}for(B in o)if(et=o[B],st=a[B],o.hasOwnProperty(B)&&et!==st&&(et!=null||st!=null))switch(B){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Be(t,n,B,et,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)et=a[$t],a.hasOwnProperty($t)&&et!=null&&!o.hasOwnProperty($t)&&Be(t,n,$t,null,o,et);for($ in o)if(et=o[$],st=a[$],o.hasOwnProperty($)&&et!==st&&(et!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Be(t,n,$,et,o,st)}return;default:if(Gc(n)){for(var Fe in a)et=a[Fe],a.hasOwnProperty(Fe)&&et!==void 0&&!o.hasOwnProperty(Fe)&&Cf(t,n,Fe,void 0,o,et);for(ut in o)et=o[ut],st=a[ut],!o.hasOwnProperty(ut)||et===st||et===void 0&&st===void 0||Cf(t,n,ut,et,o,st);return}}for(var j in a)et=a[j],a.hasOwnProperty(j)&&et!=null&&!o.hasOwnProperty(j)&&Be(t,n,j,null,o,et);for(mt in o)et=o[mt],st=a[mt],!o.hasOwnProperty(mt)||et===st||et==null&&st==null||Be(t,n,mt,et,o,st)}function Pg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&Pg(v)){for(v=0,T=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>T)break;var ut=B.transferSize,mt=B.initiatorType;ut&&Pg(mt)&&(B=B.responseEnd,v+=ut*(B<T?1:(T-$)/(B-$)))}if(--o,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wf=null,Df=null;function Vl(t){return t.nodeType===9?t:t.ownerDocument}function zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function jx(){var t=window.event;return t&&t.type==="popstate"?t===Lf?!1:(Lf=t,!0):(Lf=null,!1)}var Bg=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(t){return Fg.resolve(null).then(t).catch(Qx)}:Bg;function Qx(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Hg(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),rr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[X]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);rr(n)}function Gg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jx(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[X])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function $x(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Vg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Of(t){return t.data==="$?"||t.data==="$~"}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ty(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var zf=null;function kg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Xg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Wg(t,n,a){switch(n=Vl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);at(t)}var ci=new Map,qg=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=K.d;K.d={f:ey,r:ny,D:iy,C:ay,L:sy,m:ry,X:ly,S:oy,M:cy};function ey(){var t=na.f(),n=Ol();return t||n}function ny(t){var n=W(t);n!==null&&n.tag===5&&n.type==="form"?cm(n):na.r(t)}var ir=typeof document>"u"?null:document;function Yg(t,n,a){var o=ir;if(o&&typeof n=="string"&&n){var c=mn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),qg.has(c)||(qg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",t),Dt(n),o.head.appendChild(n)))}}function iy(t){na.D(t),Yg("dns-prefetch",t,null)}function ay(t,n){na.C(t,n),Yg("preconnect",t,n)}function sy(t,n,a){na.L(t,n,a);var o=ir;if(o&&t&&n){var c='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mn(a.imageSizes)+'"]')):c+='[href="'+mn(t)+'"]';var f=c;switch(n){case"style":f=ar(t);break;case"script":f=sr(t)}ci.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Eo(f))||n==="script"&&o.querySelector(To(f))||(n=o.createElement("link"),Tn(n,"link",t),Dt(n),o.head.appendChild(n)))}}function ry(t,n){na.m(t,n);var a=ir;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mn(o)+'"][href="'+mn(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(t)}if(!ci.has(f)&&(t=x({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}o=a.createElement("link"),Tn(o,"link",t),Dt(o),a.head.appendChild(o)}}}function oy(t,n,a){na.S(t,n,a);var o=ir;if(o&&t){var c=wt(o).hoistableStyles,f=ar(t);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(Eo(f)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&If(t,a);var B=v=o.createElement("link");Dt(B),Tn(B,"link",t),B._p=new Promise(function($,ut){B.onload=$,B.onerror=ut}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Xl(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function ly(t,n){na.X(t,n);var a=ir;if(a&&t){var o=wt(a).hoistableScripts,c=sr(t),f=o.get(c);f||(f=a.querySelector(To(c)),f||(t=x({src:t,async:!0},n),(n=ci.get(c))&&Bf(t,n),f=a.createElement("script"),Dt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function cy(t,n){na.M(t,n);var a=ir;if(a&&t){var o=wt(a).hoistableScripts,c=sr(t),f=o.get(c);f||(f=a.querySelector(To(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Bf(t,n),f=a.createElement("script"),Dt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function jg(t,n,a,o){var c=(c=St.current)?kl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=wt(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ar(a.href);var f=wt(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(Eo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||uy(c,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=wt(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ar(t){return'href="'+mn(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function Zg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function uy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),Dt(n),t.head.appendChild(n))}function sr(t){return'[src="'+mn(t)+'"]'}function To(t){return"script[async]"+t}function Kg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+mn(a.href)+'"]');if(o)return n.instance=o,Dt(o),o;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Dt(o),Tn(o,"style",c),Xl(o,a.precedence,t),n.instance=o;case"stylesheet":c=ar(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,Dt(f),f;o=Zg(a),(c=ci.get(c))&&If(o,c),f=(t.ownerDocument||t).createElement("link"),Dt(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Tn(f,"link",o),n.state.loading|=4,Xl(f,a.precedence,t),n.instance=f;case"script":return f=sr(a.src),(c=t.querySelector(To(f)))?(n.instance=c,Dt(c),c):(o=a,(c=ci.get(f))&&(o=x({},a),Bf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),Dt(c),Tn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Xl(o,a.precedence,t));return n.instance}function Xl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wl=null;function Qg(t,n,a){if(Wl===null){var o=new Map,c=Wl=new Map;c.set(a,o)}else c=Wl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[X]||f[Ze]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=o.get(v);T?T.push(f):o.set(v,[f])}}return o}function Jg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $g(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function hy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ar(o.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Dt(f);return}f=n.ownerDocument||n,o=Zg(o),(c=ci.get(c))&&If(o,c),f=f.createElement("link"),Dt(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Tn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function dy(t,n){return t.stylesheets&&t.count===0&&jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*Yx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yl=null;function jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yl=new Map,n.forEach(py,t),Yl=null,ql.call(t))}function py(t,n){if(!(n.state.loading&4)){var a=Yl.get(t);if(a)var o=a.get(null);else{a=new Map,Yl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,c),a.set(v,c),this.count++,o=ql.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:D,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function my(t,n,a,o,c,f,v,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function t_(t,n,a,o,c,f,v,T,B,$,ut,mt){return t=new my(t,n,a,v,B,$,ut,mt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Su(f),t}function e_(t){return t?(t=zs,t):zs}function n_(t,n,a,o,c,f){c=e_(c),o.context===null?o.context=c:o.pendingContext=c,o=Ma(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ea(t,o,n),a!==null&&(Gn(a,t,n),no(a,t,n))}function i_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){i_(t,n),(t=t.alternate)&&i_(t,n)}function a_(t){if(t.tag===13||t.tag===31){var n=es(t,67108864);n!==null&&Gn(n,t,67108864),Hf(t,67108864)}}function s_(t){if(t.tag===13||t.tag===31){var n=Qn();n=Ka(n);var a=es(t,n);a!==null&&Gn(a,t,n),Hf(t,n)}}var Zl=!0;function gy(t,n,a,o){var c=I.T;I.T=null;var f=K.p;try{K.p=2,Gf(t,n,a,o)}finally{K.p=f,I.T=c}}function _y(t,n,a,o){var c=I.T;I.T=null;var f=K.p;try{K.p=8,Gf(t,n,a,o)}finally{K.p=f,I.T=c}}function Gf(t,n,a,o){if(Zl){var c=Vf(o);if(c===null)Rf(t,n,o,Kl,a),o_(t,o);else if(xy(c,t,n,a,o))o.stopPropagation();else if(o_(t,o),n&4&&-1<vy.indexOf(t)){for(;c!==null;){var f=W(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ct(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-ee(v);T.entanglements[1]|=B,v&=~B}Ui(f),(Ce&6)===0&&(Ll=ft()+500,xo(0))}}break;case 31:case 13:T=es(f,2),T!==null&&Gn(T,f,2),Ol(),Hf(f,2)}if(f=Vf(o),f===null&&Rf(t,n,o,Kl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Rf(t,n,o,null,a)}}function Vf(t){return t=kc(t),kf(t)}var Kl=null;function kf(t){if(Kl=null,t=it(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Kl=t,null}function r_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case pt:return 2;case qt:return 8;case Ut:case Bt:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Xf=!1,Oa=null,Pa=null,za=null,Ao=new Map,Ro=new Map,Ia=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(t,n){switch(t){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=W(n),n!==null&&a_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function xy(t,n,a,o,c){switch(n){case"focusin":return Oa=Co(Oa,t,n,a,o,c),!0;case"dragenter":return Pa=Co(Pa,t,n,a,o,c),!0;case"mouseover":return za=Co(za,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,o,c)),!0}return!1}function l_(t){var n=it(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Qa(t.priority,function(){s_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Qa(t.priority,function(){s_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Vc=o,a.target.dispatchEvent(o),Vc=null}else return n=W(a),n!==null&&a_(n),t.blockedOn=a,!1;n.shift()}return!0}function c_(t,n,a){Ql(t)&&a.delete(n)}function yy(){Xf=!1,Oa!==null&&Ql(Oa)&&(Oa=null),Pa!==null&&Ql(Pa)&&(Pa=null),za!==null&&Ql(za)&&(za=null),Ao.forEach(c_),Ro.forEach(c_)}function Jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yy)))}var $l=null;function u_(t){$l!==t&&($l=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){$l===t&&($l=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(kf(o||a)===null)continue;break}var f=W(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function rr(t){function n(B){return Jl(B,t)}Oa!==null&&Jl(Oa,t),Pa!==null&&Jl(Pa,t),za!==null&&Jl(za,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Ia.length;a++){var o=Ia[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)l_(a),a.blockedOn===null&&Ia.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],v=c[xn]||null;if(typeof f=="function")v||u_(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[xn]||null)T=v.formAction;else if(kf(c)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),u_(a)}}}function f_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(t){this._internalRoot=t}tc.prototype.render=Wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qn();n_(a,o,t,n,null,null)},tc.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;n_(t.current,2,null,t,null,null),Ol(),n[Bi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,t),a===0&&l_(t)}};var h_=e.version;if(h_!=="19.2.4")throw Error(s(527,h_,"19.2.4"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Sy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Zt=ec.inject(Sy),Yt=ec}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",c=xm,f=ym,v=Sm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=t_(t,1,!1,null,null,a,o,null,c,f,v,f_),t[Bi]=n.current,Af(t),new Wf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,c="",f=xm,v=ym,T=Sm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=t_(t,1,!0,n,a??null,o,c,B,f,v,T,f_),n.context=e_(null),a=n.current,o=Qn(),o=Ka(o),c=Ma(o),c.callback=null,Ea(a,c,o),a=o,n.current.lanes=a,vn(n,a),Ui(n),t[Bi]=n.current,Af(t),new tc(n)},Do.version="19.2.4",Do}var M_;function Uy(){if(M_)return jf.exports;M_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),jf.exports=Dy(),jf.exports}var Ly=Uy();const Ny=O0(Ly);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="170",Tr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oy=0,E_=1,Py=2,P0=1,zy=2,la=3,Za=0,On=1,Oi=2,Ya=0,br=1,Dh=2,T_=3,b_=4,Iy=5,Ss=100,By=101,Fy=102,Hy=103,Gy=104,Vy=200,ky=201,Xy=202,Wy=203,Uh=204,Lh=205,qy=206,Yy=207,jy=208,Zy=209,Ky=210,Qy=211,Jy=212,$y=213,tS=214,Nh=0,Oh=1,Ph=2,Cr=3,zh=4,Ih=5,Bh=6,Fh=7,z0=0,eS=1,nS=2,ja=0,iS=1,aS=2,sS=3,rS=4,oS=5,lS=6,cS=7,I0=300,wr=301,Dr=302,Hh=303,Gh=304,Pc=306,Ur=1e3,Pi=1001,Vh=1002,Ti=1003,uS=1004,nc=1005,Dn=1006,Jf=1007,Es=1008,ha=1009,B0=1010,F0=1011,Fo=1012,yd=1013,Ts=1014,ca=1015,Go=1016,Sd=1017,Md=1018,Lr=1020,H0=35902,G0=1021,V0=1022,Mi=1023,k0=1024,X0=1025,Ar=1026,Nr=1027,W0=1028,Ed=1029,q0=1030,Td=1031,bd=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,kh=35840,Xh=35841,Wh=35842,qh=35843,Yh=36196,jh=37492,Zh=37496,Kh=37808,Qh=37809,Jh=37810,$h=37811,td=37812,ed=37813,nd=37814,id=37815,ad=37816,sd=37817,rd=37818,od=37819,ld=37820,cd=37821,Uc=36492,ud=36494,fd=36495,Y0=36283,hd=36284,dd=36285,pd=36286,fS=3200,hS=3201,dS=0,pS=1,qa="",fi="srgb",Pr="srgb-linear",zc="linear",He="srgb",or=7680,A_=519,mS=512,gS=513,_S=514,j0=515,vS=516,xS=517,yS=518,SS=519,R_=35044,C_="300 es",ua=2e3,Oc=2001;class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,md=180/Math.PI;function Vo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Nn(r,e,i){return Math.max(e,Math.min(i,r))}function MS(r,e){return(r%e+e)%e}function $f(r,e,i){return(1-i)*r+i*e}function Uo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ES={DEG2RAD:Lc};class de{constructor(e=0,i=0){de.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(e,i,s,l,u,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],x=s[7],y=s[2],M=s[5],b=s[8],R=l[0],S=l[3],_=l[6],P=l[1],D=l[4],C=l[7],k=l[2],N=l[5],z=l[8];return u[0]=h*R+d*P+m*k,u[3]=h*S+d*D+m*N,u[6]=h*_+d*C+m*z,u[1]=p*R+g*P+x*k,u[4]=p*S+g*D+x*N,u[7]=p*_+g*C+x*z,u[2]=y*R+M*P+b*k,u[5]=y*S+M*D+b*N,u[8]=y*_+M*C+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=g*h-d*p,y=d*m-g*u,M=p*u-h*m,b=i*x+s*y+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=x*R,e[1]=(l*p-g*s)*R,e[2]=(d*s-l*h)*R,e[3]=y*R,e[4]=(g*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(s*m-p*i)*R,e[8]=(h*i-s*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(th.makeScale(e,i)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,i){return this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new ue;function Z0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function TS(){const r=Ho("canvas");return r.style.display="block",r}const w_={};function Io(r){r in w_||(w_[r]=!0,console.warn(r))}function bS(r,e,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function AS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function RS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Te={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(r,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===He&&(r.r=fa(r.r),r.g=fa(r.g),r.b=fa(r.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===He&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qa?zc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,i){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function fa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const D_=[.64,.33,.3,.6,.15,.06],U_=[.2126,.7152,.0722],L_=[.3127,.329],N_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Pr]:{primaries:D_,whitePoint:L_,transfer:zc,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:U_,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:D_,whitePoint:L_,transfer:He,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:U_,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}});let lr;class CS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{lr===void 0&&(lr=Ho("canvas")),lr.width=e.width,lr.height=e.height;const s=lr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=lr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ho("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=fa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wS=0;class K0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(eh(l[h].image)):u.push(eh(l[h]))}else u=eh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function eh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?CS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DS=0;class hn extends Rs{constructor(e=hn.DEFAULT_IMAGE,i=hn.DEFAULT_MAPPING,s=Pi,l=Pi,u=Dn,h=Es,d=Mi,m=ha,p=hn.DEFAULT_ANISOTROPY,g=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Vo(),this.name="",this.source=new K0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=I0;hn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],y=m[1],M=m[5],b=m[9],R=m[2],S=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-R)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+R)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,C=(M+1)/2,k=(_+1)/2,N=(g+y)/4,z=(x+R)/4,Y=(b+S)/4;return D>C&&D>k?D<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(D),l=N/s,u=z/s):C>k?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=N/l,u=Y/l):k<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),s=z/u,l=Y/u),this.set(s,l,u,i),this}let P=Math.sqrt((S-b)*(S-b)+(x-R)*(x-R)+(y-g)*(y-g));return Math.abs(P)<.001&&(P=1),this.x=(S-b)/P,this.y=(x-R)/P,this.z=(y-g)/P,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class US extends Rs{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new hn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new K0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends US{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Q0 extends hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3];const y=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(x!==R||m!==y||p!==M||g!==b){let S=1-d;const _=m*y+p*M+g*b+x*R,P=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const k=Math.sqrt(D),N=Math.atan2(k,_*P);S=Math.sin(S*N)/k,d=Math.sin(d*N)/k}const C=d*P;if(m=m*S+y*C,p=p*S+M*C,g=g*S+b*C,x=x*S+R*C,S===1-d){const k=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=k,p*=k,g*=k,x*=k}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=u[h],y=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+g*x+m*M-p*y,e[i+1]=m*b+g*y+p*x-d*M,e[i+2]=p*b+g*M+d*y-m*x,e[i+3]=g*b-d*x-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),x=d(u/2),y=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=y*g*x+p*M*b,this._y=p*M*x-y*g*b,this._z=p*g*b+y*M*x,this._w=p*g*x-y*M*b;break;case"YXZ":this._x=y*g*x+p*M*b,this._y=p*M*x-y*g*b,this._z=p*g*b-y*M*x,this._w=p*g*x+y*M*b;break;case"ZXY":this._x=y*g*x-p*M*b,this._y=p*M*x+y*g*b,this._z=p*g*b+y*M*x,this._w=p*g*x-y*M*b;break;case"ZYX":this._x=y*g*x-p*M*b,this._y=p*M*x+y*g*b,this._z=p*g*b-y*M*x,this._w=p*g*x+y*M*b;break;case"YZX":this._x=y*g*x+p*M*b,this._y=p*M*x+y*g*b,this._z=p*g*b-y*M*x,this._w=p*g*x-y*M*b;break;case"XZY":this._x=y*g*x-p*M*b,this._y=p*M*x-y*g*b,this._z=p*g*b+y*M*x,this._w=p*g*x+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=s+d+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*x+this._w*y,this._x=s*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(P_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(P_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),g=2*(d*i-u*l),x=2*(u*s-h*i);return this.x=i+m*p+h*x-d*g,this.y=s+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new nt,P_=new As;class ko{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ac.subVectors(this.max,Lo),cr.subVectors(e.a,Lo),ur.subVectors(e.b,Lo),fr.subVectors(e.c,Lo),Fa.subVectors(ur,cr),Ha.subVectors(fr,ur),ps.subVectors(cr,fr);let i=[0,-Fa.z,Fa.y,0,-Ha.z,Ha.y,0,-ps.z,ps.y,Fa.z,0,-Fa.x,Ha.z,0,-Ha.x,ps.z,0,-ps.x,-Fa.y,Fa.x,0,-Ha.y,Ha.x,0,-ps.y,ps.x,0];return!ih(i,cr,ur,fr,ac)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,cr,ur,fr,ac))?!1:(sc.crossVectors(Fa,Ha),i=[sc.x,sc.y,sc.z],ih(i,cr,ur,fr,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ia=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],xi=new nt,ic=new ko,cr=new nt,ur=new nt,fr=new nt,Fa=new nt,Ha=new nt,ps=new nt,Lo=new nt,ac=new nt,sc=new nt,ms=new nt;function ih(r,e,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){ms.fromArray(r,u);const d=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=e.dot(ms),p=i.dot(ms),g=s.dot(ms);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const NS=new ko,No=new nt,ah=new nt;class Ic{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):NS.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(No,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(ah)),this.expandByPoint(No.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const aa=new nt,sh=new nt,rc=new nt,Ga=new nt,rh=new nt,oc=new nt,oh=new nt;class Ad{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){sh.copy(e).add(i).multiplyScalar(.5),rc.copy(i).sub(e).normalize(),Ga.copy(this.origin).sub(sh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(rc),d=Ga.dot(this.direction),m=-Ga.dot(rc),p=Ga.lengthSq(),g=Math.abs(1-h*h);let x,y,M,b;if(g>0)if(x=h*m-d,y=h*d-m,b=u*g,x>=0)if(y>=-b)if(y<=b){const R=1/g;x*=R,y*=R,M=x*(x+h*y+2*d)+y*(h*x+y+2*m)+p}else y=u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*m)+p;else y<=-b?(x=Math.max(0,-(-h*u+d)),y=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p):y<=b?(x=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(x=Math.max(0,-(h*u+d)),y=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p);else y=h>0?-u:u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(sh).addScaledVector(rc,y),M}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(u=(e.min.y-y.y)*g,h=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,h=(e.min.y-y.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-y.z)*x,m=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,m=(e.min.z-y.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,s,l,u){rh.subVectors(i,e),oc.subVectors(s,e),oh.crossVectors(rh,oc);let h=this.direction.dot(oh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ga.subVectors(this.origin,e);const m=d*this.direction.dot(oc.crossVectors(Ga,oc));if(m<0)return null;const p=d*this.direction.dot(rh.cross(Ga));if(p<0||m+p>h)return null;const g=-d*Ga.dot(oh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,s,l,u,h,d,m,p,g,x,y,M,b,R,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,g,x,y,M,b,R,S)}set(e,i,s,l,u,h,d,m,p,g,x,y,M,b,R,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=y,_[3]=M,_[7]=b,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/hr.setFromMatrixColumn(e,0).length(),u=1/hr.setFromMatrixColumn(e,1).length(),h=1/hr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=h*g,M=h*x,b=d*g,R=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+b*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*g,M=m*x,b=p*g,R=p*x;i[0]=y+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=R+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*g,M=m*x,b=p*g,R=p*x;i[0]=y-R*d,i[4]=-h*x,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*g,M=h*x,b=d*g,R=d*x;i[0]=m*g,i[4]=b*p-M,i[8]=y*p+R,i[1]=m*x,i[5]=R*p+y,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-y*x,i[8]=b*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*x+b,i[10]=y-R*x}else if(e.order==="XZY"){const y=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+R,i[5]=h*g,i[9]=M*x-b,i[2]=b*x-M,i[6]=d*g,i[10]=R*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OS,e,PS)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Va.crossVectors(s,Jn),Va.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Va.crossVectors(s,Jn)),Va.normalize(),lc.crossVectors(Jn,Va),l[0]=Va.x,l[4]=lc.x,l[8]=Jn.x,l[1]=Va.y,l[5]=lc.y,l[9]=Jn.y,l[2]=Va.z,l[6]=lc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],x=s[5],y=s[9],M=s[13],b=s[2],R=s[6],S=s[10],_=s[14],P=s[3],D=s[7],C=s[11],k=s[15],N=l[0],z=l[4],Y=l[8],L=l[12],w=l[1],H=l[5],ct=l[9],rt=l[13],gt=l[2],_t=l[6],I=l[10],K=l[14],Z=l[3],yt=l[7],Tt=l[11],O=l[15];return u[0]=h*N+d*w+m*gt+p*Z,u[4]=h*z+d*H+m*_t+p*yt,u[8]=h*Y+d*ct+m*I+p*Tt,u[12]=h*L+d*rt+m*K+p*O,u[1]=g*N+x*w+y*gt+M*Z,u[5]=g*z+x*H+y*_t+M*yt,u[9]=g*Y+x*ct+y*I+M*Tt,u[13]=g*L+x*rt+y*K+M*O,u[2]=b*N+R*w+S*gt+_*Z,u[6]=b*z+R*H+S*_t+_*yt,u[10]=b*Y+R*ct+S*I+_*Tt,u[14]=b*L+R*rt+S*K+_*O,u[3]=P*N+D*w+C*gt+k*Z,u[7]=P*z+D*H+C*_t+k*yt,u[11]=P*Y+D*ct+C*I+k*Tt,u[15]=P*L+D*rt+C*K+k*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],x=e[6],y=e[10],M=e[14],b=e[3],R=e[7],S=e[11],_=e[15];return b*(+u*m*x-l*p*x-u*d*y+s*p*y+l*d*M-s*m*M)+R*(+i*m*M-i*p*y+u*h*y-l*h*M+l*p*g-u*m*g)+S*(+i*p*x-i*d*M-u*h*x+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*x+i*d*y+l*h*x-s*h*y+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=e[9],y=e[10],M=e[11],b=e[12],R=e[13],S=e[14],_=e[15],P=x*S*p-R*y*p+R*m*M-d*S*M-x*m*_+d*y*_,D=b*y*p-g*S*p-b*m*M+h*S*M+g*m*_-h*y*_,C=g*R*p-b*x*p+b*d*M-h*R*M-g*d*_+h*x*_,k=b*x*m-g*R*m-b*d*y+h*R*y+g*d*S-h*x*S,N=i*P+s*D+l*C+u*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=P*z,e[1]=(R*y*u-x*S*u-R*l*M+s*S*M+x*l*_-s*y*_)*z,e[2]=(d*S*u-R*m*u+R*l*p-s*S*p-d*l*_+s*m*_)*z,e[3]=(x*m*u-d*y*u-x*l*p+s*y*p+d*l*M-s*m*M)*z,e[4]=D*z,e[5]=(g*S*u-b*y*u+b*l*M-i*S*M-g*l*_+i*y*_)*z,e[6]=(b*m*u-h*S*u-b*l*p+i*S*p+h*l*_-i*m*_)*z,e[7]=(h*y*u-g*m*u+g*l*p-i*y*p-h*l*M+i*m*M)*z,e[8]=C*z,e[9]=(b*x*u-g*R*u-b*s*M+i*R*M+g*s*_-i*x*_)*z,e[10]=(h*R*u-b*d*u+b*s*p-i*R*p-h*s*_+i*d*_)*z,e[11]=(g*d*u-h*x*u-g*s*p+i*x*p+h*s*M-i*d*M)*z,e[12]=k*z,e[13]=(g*R*l-b*x*l+b*s*y-i*R*y-g*s*S+i*x*S)*z,e[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*S-i*d*S)*z,e[15]=(h*x*l-g*d*l+g*s*m-i*x*m-h*s*y+i*d*y)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,y=u*p,M=u*g,b=u*x,R=h*g,S=h*x,_=d*x,P=m*p,D=m*g,C=m*x,k=s.x,N=s.y,z=s.z;return l[0]=(1-(R+_))*k,l[1]=(M+C)*k,l[2]=(b-D)*k,l[3]=0,l[4]=(M-C)*N,l[5]=(1-(y+_))*N,l[6]=(S+P)*N,l[7]=0,l[8]=(b+D)*z,l[9]=(S-P)*z,l[10]=(1-(y+R))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=hr.set(l[0],l[1],l[2]).length();const h=hr.set(l[4],l[5],l[6]).length(),d=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],yi.copy(this);const p=1/u,g=1/h,x=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=x,yi.elements[9]*=x,yi.elements[10]*=x,i.setFromRotationMatrix(yi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=ua){const m=this.elements,p=2*u/(i-e),g=2*u/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let M,b;if(d===ua)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Oc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=ua){const m=this.elements,p=1/(i-e),g=1/(s-l),x=1/(h-u),y=(i+e)*p,M=(s+l)*g;let b,R;if(d===ua)b=(h+u)*x,R=-2*x;else if(d===Oc)b=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const hr=new nt,yi=new en,OS=new nt(0,0,0),PS=new nt(1,1,1),Va=new nt,lc=new nt,Jn=new nt,z_=new en,I_=new As;class da{constructor(e=0,i=0,s=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Nn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Nn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return I_.setFromEuler(this),this.setFromQuaternion(I_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";let J0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zS=0;const B_=new nt,dr=new As,sa=new en,cc=new nt,Oo=new nt,IS=new nt,BS=new As,F_=new nt(1,0,0),H_=new nt(0,1,0),G_=new nt(0,0,1),V_={type:"added"},FS={type:"removed"},pr={type:"childadded",child:null},lh={type:"childremoved",child:null};class Xn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new nt,i=new da,s=new As,l=new nt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ue}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(F_,e)}rotateY(e){return this.rotateOnAxis(H_,e)}rotateZ(e){return this.rotateOnAxis(G_,e)}translateOnAxis(e,i){return B_.copy(e).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F_,e)}translateY(e){return this.translateOnAxis(H_,e)}translateZ(e){return this.translateOnAxis(G_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?cc.copy(e):cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Oo,cc,this.up):sa.lookAt(cc,Oo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(sa),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(V_),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(FS),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(V_),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,IS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),x=h(e.shapes),y=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new nt(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new nt,ra=new nt,ch=new nt,oa=new nt,mr=new nt,gr=new nt,k_=new nt,uh=new nt,fh=new nt,hh=new nt,dh=new tn,ph=new tn,mh=new tn;let Po=class Sr{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Si.subVectors(e,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Si.subVectors(l,i),ra.subVectors(s,i),ch.subVectors(e,i);const h=Si.dot(Si),d=Si.dot(ra),m=Si.dot(ch),p=ra.dot(ra),g=ra.dot(ch),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const y=1/x,M=(p*m-d*g)*y,b=(h*g-d*m)*y;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,oa.x),m.addScaledVector(h,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(dh,u.x),h.addScaledVector(ph,u.y),h.addScaledVector(mh,u.z),h}static isFrontFacing(e,i,s,l){return Si.subVectors(s,i),ra.subVectors(e,i),Si.cross(ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Si.cross(ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Sr.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Sr.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Sr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;mr.subVectors(l,s),gr.subVectors(u,s),uh.subVectors(e,s);const m=mr.dot(uh),p=gr.dot(uh);if(m<=0&&p<=0)return i.copy(s);fh.subVectors(e,l);const g=mr.dot(fh),x=gr.dot(fh);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(mr,h);hh.subVectors(e,u);const M=mr.dot(hh),b=gr.dot(hh);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(gr,d);const S=g*b-M*x;if(S<=0&&x-g>=0&&M-b>=0)return k_.subVectors(u,l),d=(x-g)/(x-g+(M-b)),i.copy(l).addScaledVector(k_,d);const _=1/(S+R+y);return h=R*_,d=y*_,i.copy(s).addScaledVector(mr,h).addScaledVector(gr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},uc={h:0,s:0,l:0};function gh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class De{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=s,Te.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Te.workingColorSpace){if(e=MS(e,1),i=Nn(i,0,1),s=Nn(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=gh(h,u,e+1/3),this.g=gh(h,u,e),this.b=gh(h,u,e-1/3)}return Te.toWorkingColorSpace(this,l),this}setStyle(e,i=fi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const s=$0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Te.fromWorkingColorSpace(wn.copy(this),e),Math.round(Nn(wn.r*255,0,255))*65536+Math.round(Nn(wn.g*255,0,255))*256+Math.round(Nn(wn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Te.workingColorSpace){return Te.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=fi){Te.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+i,ka.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ka),e.getHSL(uc);const s=$f(ka.h,uc.h,i),l=$f(ka.s,uc.s,i),u=$f(ka.l,uc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new De;De.NAMES=$0;let HS=0;class Xo extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Vo(),this.name="",this.blending=br,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Lh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(s.blending=this.blending),this.side!==Za&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Uh&&(s.blendSrc=this.blendSrc),this.blendDst!==Lh&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tv extends Xo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new nt,fc=new de;class bi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=R_,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(e),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R_&&(e.usage=this.usage),e}}class ev extends bi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class nv extends bi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class zi extends bi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let GS=0;const ui=new en,_h=new Xn,_r=new nt,$n=new ko,zo=new ko,_n=new nt;class Ii extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?nv:ev)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ue().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,s){return ui.makeTranslation(e,i,s),this.applyMatrix4(ui),this}scale(e,i,s){return ui.makeScale(e,i,s),this.applyMatrix4(ui),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new zi(s,3))}else{for(let s=0,l=i.count;s<l;s++){const u=e[s];i.setXYZ(s,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,zo.min),$n.expandByPoint(_n),_n.addVectors($n.max,zo.max),$n.expandByPoint(_n)):($n.expandByPoint(zo.min),$n.expandByPoint(zo.max))}$n.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(e,p),_n.add(_r)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new nt,m[Y]=new nt;const p=new nt,g=new nt,x=new nt,y=new de,M=new de,b=new de,R=new nt,S=new nt;function _(Y,L,w){p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,L),x.fromBufferAttribute(s,w),y.fromBufferAttribute(u,Y),M.fromBufferAttribute(u,L),b.fromBufferAttribute(u,w),g.sub(p),x.sub(p),M.sub(y),b.sub(y);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(H),S.copy(x).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(H),d[Y].add(R),d[L].add(R),d[w].add(R),m[Y].add(S),m[L].add(S),m[w].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let Y=0,L=P.length;Y<L;++Y){const w=P[Y],H=w.start,ct=w.count;for(let rt=H,gt=H+ct;rt<gt;rt+=3)_(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const D=new nt,C=new nt,k=new nt,N=new nt;function z(Y){k.fromBufferAttribute(l,Y),N.copy(k);const L=d[Y];D.copy(L),D.sub(k.multiplyScalar(k.dot(L))).normalize(),C.crossVectors(N,L);const H=C.dot(m[Y])<0?-1:1;h.setXYZW(Y,D.x,D.y,D.z,H)}for(let Y=0,L=P.length;Y<L;++Y){const w=P[Y],H=w.start,ct=w.count;for(let rt=H,gt=H+ct;rt<gt;rt+=3)z(e.getX(rt+0)),z(e.getX(rt+1)),z(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,m=new nt,p=new nt,g=new nt,x=new nt;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),R=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,x=d.normalized,y=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,S=m.length;R<S;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)y[b++]=p[M++]}return new bi(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const y=p[g],M=e(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let y=0,M=x.length;y<M;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X_=new en,gs=new Ad,hc=new Ic,W_=new nt,dc=new nt,pc=new nt,mc=new nt,vh=new nt,gc=new nt,q_=new nt,_c=new nt;class Ei extends Xn{constructor(e=new Ii,i=new tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){gc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(vh.fromBufferAttribute(x,e),h?gc.addScaledVector(vh,g):gc.addScaledVector(vh.sub(i),g))}i.add(gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(u),gs.copy(e.ray).recast(e.near),!(hc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(hc,W_)===null||gs.origin.distanceToSquared(W_)>(e.far-e.near)**2))&&(X_.copy(u).invert(),gs.copy(e.ray).applyMatrix4(X_),!(s.boundingBox!==null&&gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,gs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const S=y[b],_=h[S.materialIndex],P=Math.max(S.start,M.start),D=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let C=P,k=D;C<k;C+=3){const N=d.getX(C),z=d.getX(C+1),Y=d.getX(C+2);l=vc(this,_,e,s,p,g,x,N,z,Y),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let S=b,_=R;S<_;S+=3){const P=d.getX(S),D=d.getX(S+1),C=d.getX(S+2);l=vc(this,h,e,s,p,g,x,P,D,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const S=y[b],_=h[S.materialIndex],P=Math.max(S.start,M.start),D=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let C=P,k=D;C<k;C+=3){const N=C,z=C+1,Y=C+2;l=vc(this,_,e,s,p,g,x,N,z,Y),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let S=b,_=R;S<_;S+=3){const P=S,D=S+1,C=S+2;l=vc(this,h,e,s,p,g,x,P,D,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function VS(r,e,i,s,l,u,h,d){let m;if(e.side===On?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Za,d),m===null)return null;_c.copy(d),_c.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:r}}function vc(r,e,i,s,l,u,h,d,m,p){r.getVertexPosition(d,dc),r.getVertexPosition(m,pc),r.getVertexPosition(p,mc);const g=VS(r,e,i,s,dc,pc,mc,q_);if(g){const x=new nt;Po.getBarycoord(q_,dc,pc,mc,x),l&&(g.uv=Po.getInterpolatedAttribute(l,d,m,p,x,new de)),u&&(g.uv1=Po.getInterpolatedAttribute(u,d,m,p,x,new de)),h&&(g.normal=Po.getInterpolatedAttribute(h,d,m,p,x,new nt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new nt,materialIndex:0};Po.getNormal(dc,pc,mc,y.normal),g.face=y,g.barycoord=x}return g}class Wo extends Ii{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let y=0,M=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new zi(p,3)),this.setAttribute("normal",new zi(g,3)),this.setAttribute("uv",new zi(x,2));function b(R,S,_,P,D,C,k,N,z,Y,L){const w=C/z,H=k/Y,ct=C/2,rt=k/2,gt=N/2,_t=z+1,I=Y+1;let K=0,Z=0;const yt=new nt;for(let Tt=0;Tt<I;Tt++){const O=Tt*H-rt;for(let tt=0;tt<_t;tt++){const ht=tt*w-ct;yt[R]=ht*P,yt[S]=O*D,yt[_]=gt,p.push(yt.x,yt.y,yt.z),yt[R]=0,yt[S]=0,yt[_]=N>0?1:-1,g.push(yt.x,yt.y,yt.z),x.push(tt/z),x.push(1-Tt/Y),K+=1}}for(let Tt=0;Tt<Y;Tt++)for(let O=0;O<z;O++){const tt=y+O+_t*Tt,ht=y+O+_t*(Tt+1),G=y+(O+1)+_t*(Tt+1),ot=y+(O+1)+_t*Tt;m.push(tt,ht,ot),m.push(ht,G,ot),Z+=6}d.addGroup(M,Z,L),M+=Z,y+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(r){const e={};for(let i=0;i<r.length;i++){const s=Or(r[i]);for(const l in s)e[l]=s[l]}return e}function kS(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function iv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const XS={clone:Or,merge:Ln};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Xo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=kS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class av extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=ua}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new nt,Y_=new de,j_=new de;class hi extends av{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=md*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return md*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,i){return this.getViewBounds(e,Y_,j_),i.subVectors(j_,Y_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Lc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,xr=1;class YS extends Xn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(vr,xr,e,i);l.layers=this.layers,this.add(l);const u=new hi(vr,xr,e,i);u.layers=this.layers,this.add(u);const h=new hi(vr,xr,e,i);h.layers=this.layers,this.add(h);const d=new hi(vr,xr,e,i);d.layers=this.layers,this.add(d);const m=new hi(vr,xr,e,i);m.layers=this.layers,this.add(m);const p=new hi(vr,xr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ua)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(x,y,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class sv extends hn{constructor(e,i,s,l,u,h,d,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:wr,super(e,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends bs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new sv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Dn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wo(5,5,5),u=new Ai({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:Ya});u.uniforms.tEquirect.value=i;const h=new Ei(l,u),d=i.minFilter;return i.minFilter===Es&&(i.minFilter=Dn),new YS(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}const xh=new nt,ZS=new nt,KS=new ue;class Wa{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=xh.subVectors(s,i).cross(ZS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||KS.getNormalMatrix(e),l=this.coplanarPoint(xh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Ic,xc=new nt;class rv{constructor(e=new Wa,i=new Wa,s=new Wa,l=new Wa,u=new Wa,h=new Wa){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ua){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],y=l[7],M=l[8],b=l[9],R=l[10],S=l[11],_=l[12],P=l[13],D=l[14],C=l[15];if(s[0].setComponents(m-u,y-p,S-M,C-_).normalize(),s[1].setComponents(m+u,y+p,S+M,C+_).normalize(),s[2].setComponents(m+h,y+g,S+b,C+P).normalize(),s[3].setComponents(m-h,y-g,S-b,C-P).normalize(),s[4].setComponents(m-d,y-x,S-R,C-D).normalize(),i===ua)s[5].setComponents(m+d,y+x,S+R,C+D).normalize();else if(i===Oc)s[5].setComponents(d,x,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ov(){let r=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function QS(r){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const g=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,g);else{x.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<x.length;M++){const b=x[y],R=x[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++y,x[y]=R)}x.length=y+1;for(let M=0,b=x.length;M<b;M++){const R=x[M];r.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}class qo extends Ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,x=e/d,y=i/m,M=[],b=[],R=[],S=[];for(let _=0;_<g;_++){const P=_*y-h;for(let D=0;D<p;D++){const C=D*x-u;b.push(C,-P,0),R.push(0,0,1),S.push(D/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<d;P++){const D=P+p*_,C=P+p*(_+1),k=P+1+p*(_+1),N=P+1+p*_;M.push(D,C,N),M.push(C,k,N)}this.setIndex(M),this.setAttribute("position",new zi(b,3)),this.setAttribute("normal",new zi(R,3)),this.setAttribute("uv",new zi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.widthSegments,e.heightSegments)}}var JS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$S=`#ifdef USE_ALPHAHASH
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
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
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
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
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
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fM=`#ifdef USE_IRIDESCENCE
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
#endif`,hM=`#ifdef USE_BUMPMAP
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
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,SM=`#define PI 3.141592653589793
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
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
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
}`,HM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
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
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
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
#endif`,KM=`struct PhysicalMaterial {
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
}`,QM=`
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
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
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zE=`float getShadowMask() {
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
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
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
}`,aT=`#if DEPTH_PACKING == 3200
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
}`,sT=`#define DISTANCE
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
}`,rT=`#define DISTANCE
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
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
}`,uT=`uniform vec3 diffuse;
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
}`,fT=`#include <common>
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
}`,hT=`uniform vec3 diffuse;
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
}`,dT=`#define LAMBERT
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define MATCAP
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
}`,gT=`#define MATCAP
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
}`,_T=`#define NORMAL
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
}`,vT=`#define NORMAL
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
}`,xT=`#define PHONG
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
}`,yT=`#define PHONG
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
}`,ST=`#define STANDARD
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
}`,MT=`#define STANDARD
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
}`,ET=`#define TOON
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
}`,TT=`#define TOON
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
}`,bT=`uniform float size;
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
}`,AT=`uniform vec3 diffuse;
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
}`,RT=`#include <common>
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
}`,CT=`uniform vec3 color;
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
}`,wT=`uniform float rotation;
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
}`,DT=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:JS,alphahash_pars_fragment:$S,alphamap_fragment:tM,alphamap_pars_fragment:eM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:aM,aomap_pars_fragment:sM,batching_pars_vertex:rM,batching_vertex:oM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:fM,bumpmap_pars_fragment:hM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:_M,color_pars_fragment:vM,color_pars_vertex:xM,color_vertex:yM,common:SM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:EM,displacementmap_pars_vertex:TM,displacementmap_vertex:bM,emissivemap_fragment:AM,emissivemap_pars_fragment:RM,colorspace_fragment:CM,colorspace_pars_fragment:wM,envmap_fragment:DM,envmap_common_pars_fragment:UM,envmap_pars_fragment:LM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:XM,envmap_vertex:OM,fog_vertex:PM,fog_pars_vertex:zM,fog_fragment:IM,fog_pars_fragment:BM,gradientmap_pars_fragment:FM,lightmap_pars_fragment:HM,lights_lambert_fragment:GM,lights_lambert_pars_fragment:VM,lights_pars_begin:kM,lights_toon_fragment:WM,lights_toon_pars_fragment:qM,lights_phong_fragment:YM,lights_phong_pars_fragment:jM,lights_physical_fragment:ZM,lights_physical_pars_fragment:KM,lights_fragment_begin:QM,lights_fragment_maps:JM,lights_fragment_end:$M,logdepthbuf_fragment:tE,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:aE,map_pars_fragment:sE,map_particle_fragment:rE,map_particle_pars_fragment:oE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:fE,morphnormal_vertex:hE,morphtarget_pars_vertex:dE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:_E,normal_pars_vertex:vE,normal_vertex:xE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:EE,iridescence_pars_fragment:TE,opaque_fragment:bE,packing:AE,premultiplied_alpha_fragment:RE,project_vertex:CE,dithering_fragment:wE,dithering_pars_fragment:DE,roughnessmap_fragment:UE,roughnessmap_pars_fragment:LE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:OE,shadowmap_vertex:PE,shadowmask_pars_fragment:zE,skinbase_vertex:IE,skinning_pars_vertex:BE,skinning_vertex:FE,skinnormal_vertex:HE,specularmap_fragment:GE,specularmap_pars_fragment:VE,tonemapping_fragment:kE,tonemapping_pars_fragment:XE,transmission_fragment:WE,transmission_pars_fragment:qE,uv_pars_fragment:YE,uv_pars_vertex:jE,uv_vertex:ZE,worldpos_vertex:KE,background_vert:QE,background_frag:JE,backgroundCube_vert:$E,backgroundCube_frag:tT,cube_vert:eT,cube_frag:nT,depth_vert:iT,depth_frag:aT,distanceRGBA_vert:sT,distanceRGBA_frag:rT,equirect_vert:oT,equirect_frag:lT,linedashed_vert:cT,linedashed_frag:uT,meshbasic_vert:fT,meshbasic_frag:hT,meshlambert_vert:dT,meshlambert_frag:pT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:_T,meshnormal_frag:vT,meshphong_vert:xT,meshphong_frag:yT,meshphysical_vert:ST,meshphysical_frag:MT,meshtoon_vert:ET,meshtoon_frag:TT,points_vert:bT,points_frag:AT,shadow_vert:RT,shadow_frag:CT,sprite_vert:wT,sprite_frag:DT},Ot={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ni={basic:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Ln([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Ln([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Ln([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Ln([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Ln([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Ln([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Ln([Ot.common,Ot.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Ln([Ot.lights,Ot.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ni.physical={uniforms:Ln([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const yc={r:0,b:0,g:0},vs=new da,UT=new en;function LT(r,e,i,s,l,u,h){const d=new De(0);let m=u===!0?0:1,p,g,x=null,y=0,M=null;function b(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?i:e).get(D)),D}function R(P){let D=!1;const C=b(P);C===null?_(d,m):C&&C.isColor&&(_(C,1),D=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(P,D){const C=b(D);C&&(C.isCubeTexture||C.mapping===Pc)?(g===void 0&&(g=new Ei(new Wo(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Or(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vs.copy(D.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(UT.makeRotationFromEuler(vs)),g.material.toneMapped=Te.getTransfer(C.colorSpace)!==He,(x!==C||y!==C.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,x=C,y=C.version,M=r.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Ei(new qo(2,2),new Ai({name:"BackgroundMaterial",uniforms:Or(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Te.getTransfer(C.colorSpace)!==He,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||y!==C.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,x=C,y=C.version,M=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,D){P.getRGB(yc,iv(r)),s.buffers.color.setClear(yc.r,yc.g,yc.b,D,h)}return{getClearColor:function(){return d},setClearColor:function(P,D=1){d.set(P),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,_(d,m)},render:R,addToRenderList:S}}function NT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,h=!1;function d(w,H,ct,rt,gt){let _t=!1;const I=x(rt,ct,H);u!==I&&(u=I,p(u.object)),_t=M(w,rt,ct,gt),_t&&b(w,rt,ct,gt),gt!==null&&e.update(gt,r.ELEMENT_ARRAY_BUFFER),(_t||h)&&(h=!1,C(w,H,ct,rt),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function x(w,H,ct){const rt=ct.wireframe===!0;let gt=s[w.id];gt===void 0&&(gt={},s[w.id]=gt);let _t=gt[H.id];_t===void 0&&(_t={},gt[H.id]=_t);let I=_t[rt];return I===void 0&&(I=y(m()),_t[rt]=I),I}function y(w){const H=[],ct=[],rt=[];for(let gt=0;gt<i;gt++)H[gt]=0,ct[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ct,attributeDivisors:rt,object:w,attributes:{},index:null}}function M(w,H,ct,rt){const gt=u.attributes,_t=H.attributes;let I=0;const K=ct.getAttributes();for(const Z in K)if(K[Z].location>=0){const Tt=gt[Z];let O=_t[Z];if(O===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),Tt===void 0||Tt.attribute!==O||O&&Tt.data!==O.data)return!0;I++}return u.attributesNum!==I||u.index!==rt}function b(w,H,ct,rt){const gt={},_t=H.attributes;let I=0;const K=ct.getAttributes();for(const Z in K)if(K[Z].location>=0){let Tt=_t[Z];Tt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));const O={};O.attribute=Tt,Tt&&Tt.data&&(O.data=Tt.data),gt[Z]=O,I++}u.attributes=gt,u.attributesNum=I,u.index=rt}function R(){const w=u.newAttributes;for(let H=0,ct=w.length;H<ct;H++)w[H]=0}function S(w){_(w,0)}function _(w,H){const ct=u.newAttributes,rt=u.enabledAttributes,gt=u.attributeDivisors;ct[w]=1,rt[w]===0&&(r.enableVertexAttribArray(w),rt[w]=1),gt[w]!==H&&(r.vertexAttribDivisor(w,H),gt[w]=H)}function P(){const w=u.newAttributes,H=u.enabledAttributes;for(let ct=0,rt=H.length;ct<rt;ct++)H[ct]!==w[ct]&&(r.disableVertexAttribArray(ct),H[ct]=0)}function D(w,H,ct,rt,gt,_t,I){I===!0?r.vertexAttribIPointer(w,H,ct,gt,_t):r.vertexAttribPointer(w,H,ct,rt,gt,_t)}function C(w,H,ct,rt){R();const gt=rt.attributes,_t=ct.getAttributes(),I=H.defaultAttributeValues;for(const K in _t){const Z=_t[K];if(Z.location>=0){let yt=gt[K];if(yt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const Tt=yt.normalized,O=yt.itemSize,tt=e.get(yt);if(tt===void 0)continue;const ht=tt.buffer,G=tt.type,ot=tt.bytesPerElement,St=G===r.INT||G===r.UNSIGNED_INT||yt.gpuType===yd;if(yt.isInterleavedBufferAttribute){const xt=yt.data,Pt=xt.stride,It=yt.offset;if(xt.isInstancedInterleavedBuffer){for(let ae=0;ae<Z.locationSize;ae++)_(Z.location+ae,xt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ae=0;ae<Z.locationSize;ae++)S(Z.location+ae);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let ae=0;ae<Z.locationSize;ae++)D(Z.location+ae,O/Z.locationSize,G,Tt,Pt*ot,(It+O/Z.locationSize*ae)*ot,St)}else{if(yt.isInstancedBufferAttribute){for(let xt=0;xt<Z.locationSize;xt++)_(Z.location+xt,yt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let xt=0;xt<Z.locationSize;xt++)S(Z.location+xt);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let xt=0;xt<Z.locationSize;xt++)D(Z.location+xt,O/Z.locationSize,G,Tt,O*ot,O/Z.locationSize*xt*ot,St)}}else if(I!==void 0){const Tt=I[K];if(Tt!==void 0)switch(Tt.length){case 2:r.vertexAttrib2fv(Z.location,Tt);break;case 3:r.vertexAttrib3fv(Z.location,Tt);break;case 4:r.vertexAttrib4fv(Z.location,Tt);break;default:r.vertexAttrib1fv(Z.location,Tt)}}}}P()}function k(){Y();for(const w in s){const H=s[w];for(const ct in H){const rt=H[ct];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete H[ct]}delete s[w]}}function N(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const ct in H){const rt=H[ct];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete H[ct]}delete s[w.id]}function z(w){for(const H in s){const ct=s[H];if(ct[w.id]===void 0)continue;const rt=ct[w.id];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete ct[w.id]}}function Y(){L(),h=!0,u!==l&&(u=l,p(u.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:L,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:S,disableUnusedAttributes:P}}function OT(r,e,i){let s;function l(p){s=p}function u(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,x){x!==0&&(r.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let M=0;for(let b=0;b<x;b++)M+=g[b];i.update(M,s,1)}function m(p,g,x,y){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,x);let b=0;for(let R=0;R<x;R++)b+=g[R]*y[R];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function PT(r,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Mi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Y=z===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ha&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ca&&!Y)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=b>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:k,maxSamples:N}}function zT(r){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Wa,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||s!==0||l;return l=y,s=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,M){const b=x.clippingPlanes,R=x.clipIntersection,S=x.clipShadows,_=r.get(x);if(!l||b===null||b.length===0||u&&!S)u?g(null):p();else{const P=u?0:s,D=P*4;let C=_.clippingState||null;m.value=C,C=g(b,y,D,M);for(let k=0;k!==D;++k)C[k]=i[k];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,y,M,b){const R=x!==null?x.length:0;let S=null;if(R!==0){if(S=m.value,b!==!0||S===null){const _=M+R*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,C=M;D!==R;++D,C+=4)h.copy(x[D]).applyMatrix4(P,d),h.normal.toArray(S,C),S[C+3]=h.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function IT(r){let e=new WeakMap;function i(h,d){return d===Hh?h.mapping=wr:d===Gh&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Hh||d===Gh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new jS(m.height);return p.fromEquirectangularTexture(r,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class BT extends av{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Er=4,Z_=[.125,.215,.35,.446,.526,.582],Ms=20,yh=new BT,K_=new De;let Sh=null,Mh=0,Eh=0,Th=!1;const ys=(1+Math.sqrt(5))/2,yr=1/ys,Q_=[new nt(-ys,yr,0),new nt(ys,yr,0),new nt(-yr,0,ys),new nt(yr,0,ys),new nt(0,ys,-yr),new nt(0,ys,yr),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)];class J_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Mh,Eh),this._renderer.xr.enabled=Th,e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Go,format:Mi,colorSpace:Pr,depthBuffer:!1},l=$_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(u)),this._blurMaterial=HT(u,e,i)}return l}_compileMaterial(e){const i=new Ei(this._lodPlanes[0],e);this._renderer.compile(i,yh)}_sceneToCubeUV(e,i,s,l){const d=new hi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(K_),g.toneMapping=ja,g.autoClear=!1;const M=new tv({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),b=new Ei(new Wo,M);let R=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,R=!0):(M.color.copy(K_),R=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):P===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const D=this._cubeSize;Sc(l,P*D,_>2?D:0,D,D),g.setRenderTarget(l),R&&g.render(b,d),g.render(e,d)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=y,g.autoClear=x,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===wr||e.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ei(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Sc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,yh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Q_[(l-u-1)%Q_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Ei(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ms-1),R=u/b,S=isFinite(u)?1+Math.floor(g*R):Ms;S>Ms&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ms}`);const _=[];let P=0;for(let z=0;z<Ms;++z){const Y=z/R,L=Math.exp(-Y*Y/2);_.push(L),z===0?P+=L:z<S&&(P+=2*L)}for(let z=0;z<_.length;z++)_[z]=_[z]/P;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=b,y.mipInt.value=D-s;const C=this._sizeLods[l],k=3*C*(l>D-Er?l-D+Er:0),N=4*(this._cubeSize-C);Sc(i,k,N,3*C,2*C),m.setRenderTarget(i),m.render(x,yh)}}function FT(r){const e=[],i=[],s=[];let l=r;const u=r-Er+1+Z_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Er?m=Z_[h-r+Er-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,b=6,R=3,S=2,_=1,P=new Float32Array(R*b*M),D=new Float32Array(S*b*M),C=new Float32Array(_*b*M);for(let N=0;N<M;N++){const z=N%3*2/3-1,Y=N>2?0:-1,L=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];P.set(L,R*b*N),D.set(y,S*b*N);const w=[N,N,N,N,N,N];C.set(w,_*b*N)}const k=new Ii;k.setAttribute("position",new bi(P,R)),k.setAttribute("uv",new bi(D,S)),k.setAttribute("faceIndex",new bi(C,_)),e.push(k),l>Er&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function $_(r,e,i){const s=new bs(r,e,i);return s.texture.mapping=Pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Sc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function HT(r,e,i){const s=new Float32Array(Ms),l=new nt(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function t0(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function e0(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Rd(){return`

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
	`}function GT(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Hh||m===Gh,g=m===wr||m===Dr;if(p||g){let x=e.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new J_(r)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new J_(r)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function VT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Io("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function kT(r,e,i,s){const l={},u=new WeakMap;function h(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);for(const b in y.morphAttributes){const R=y.morphAttributes[b];for(let S=0,_=R.length;S<_;S++)e.remove(R[S])}y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const b in y)e.update(y[b],r.ARRAY_BUFFER);const M=x.morphAttributes;for(const b in M){const R=M[b];for(let S=0,_=R.length;S<_;S++)e.update(R[S],r.ARRAY_BUFFER)}}function p(x){const y=[],M=x.index,b=x.attributes.position;let R=0;if(M!==null){const P=M.array;R=M.version;for(let D=0,C=P.length;D<C;D+=3){const k=P[D+0],N=P[D+1],z=P[D+2];y.push(k,N,N,z,z,k)}}else if(b!==void 0){const P=b.array;R=b.version;for(let D=0,C=P.length/3-1;D<C;D+=3){const k=D+0,N=D+1,z=D+2;y.push(k,N,N,z,z,k)}}else return;const S=new(Z0(y)?nv:ev)(y,1);S.version=R;const _=u.get(x);_&&e.remove(_),u.set(x,S)}function g(x){const y=u.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function XT(r,e,i){let s;function l(y){s=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,M){r.drawElements(s,M,u,y*h),i.update(M,s,1)}function p(y,M,b){b!==0&&(r.drawElementsInstanced(s,M,u,y*h,b),i.update(M,s,b))}function g(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,y,0,b);let S=0;for(let _=0;_<b;_++)S+=M[_];i.update(S,s,1)}function x(y,M,b,R){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/h,M[_],R[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,u,y,0,R,0,b);let _=0;for(let P=0;P<b;P++)_+=M[P]*R[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function WT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function qT(r,e,i){const s=new WeakMap,l=new tn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==x){let w=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),R===!0&&(C=2),S===!0&&(C=3);let k=d.attributes.position.count*C,N=1;k>e.maxTextureSize&&(N=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*N*4*x),Y=new Q0(z,k,N,x);Y.type=ca,Y.needsUpdate=!0;const L=C*4;for(let H=0;H<x;H++){const ct=_[H],rt=P[H],gt=D[H],_t=k*N*4*H;for(let I=0;I<ct.count;I++){const K=I*L;b===!0&&(l.fromBufferAttribute(ct,I),z[_t+K+0]=l.x,z[_t+K+1]=l.y,z[_t+K+2]=l.z,z[_t+K+3]=0),R===!0&&(l.fromBufferAttribute(rt,I),z[_t+K+4]=l.x,z[_t+K+5]=l.y,z[_t+K+6]=l.z,z[_t+K+7]=0),S===!0&&(l.fromBufferAttribute(gt,I),z[_t+K+8]=l.x,z[_t+K+9]=l.y,z[_t+K+10]=l.z,z[_t+K+11]=gt.itemSize===4?l.w:1)}}y={count:x,texture:Y,size:new de(k,N)},s.set(d,y),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:u}}function YT(r,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class lv extends hn{constructor(e,i,s,l,u,h,d,m,p,g=Ar){if(g!==Ar&&g!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Ar&&(s=Ts),s===void 0&&g===Nr&&(s=Lr),super(null,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const cv=new hn,n0=new lv(1,1),uv=new Q0,fv=new LS,hv=new sv,i0=[],a0=[],s0=new Float32Array(16),r0=new Float32Array(9),o0=new Float32Array(4);function zr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let u=i0[l];if(u===void 0&&(u=new Float32Array(l),i0[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(u,d)}return u}function dn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function pn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Bc(r,e){let i=a0[e];i===void 0&&(i=new Int32Array(e),a0[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function jT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function ZT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;r.uniform2fv(this.addr,e),pn(i,e)}}function KT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;r.uniform3fv(this.addr,e),pn(i,e)}}function QT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;r.uniform4fv(this.addr,e),pn(i,e)}}function JT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;o0.set(s),r.uniformMatrix2fv(this.addr,!1,o0),pn(i,s)}}function $T(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;r0.set(s),r.uniformMatrix3fv(this.addr,!1,r0),pn(i,s)}}function tb(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;s0.set(s),r.uniformMatrix4fv(this.addr,!1,s0),pn(i,s)}}function eb(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function nb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;r.uniform2iv(this.addr,e),pn(i,e)}}function ib(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;r.uniform3iv(this.addr,e),pn(i,e)}}function ab(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;r.uniform4iv(this.addr,e),pn(i,e)}}function sb(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function rb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;r.uniform2uiv(this.addr,e),pn(i,e)}}function ob(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;r.uniform3uiv(this.addr,e),pn(i,e)}}function lb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;r.uniform4uiv(this.addr,e),pn(i,e)}}function cb(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(n0.compareFunction=j0,u=n0):u=cv,i.setTexture2D(e||u,l)}function ub(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||fv,l)}function fb(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||hv,l)}function hb(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||uv,l)}function db(r){switch(r){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return tb;case 5124:case 35670:return eb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return ab;case 5125:return sb;case 36294:return rb;case 36295:return ob;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return hb}}function pb(r,e){r.uniform1fv(this.addr,e)}function mb(r,e){const i=zr(e,this.size,2);r.uniform2fv(this.addr,i)}function gb(r,e){const i=zr(e,this.size,3);r.uniform3fv(this.addr,i)}function _b(r,e){const i=zr(e,this.size,4);r.uniform4fv(this.addr,i)}function vb(r,e){const i=zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function xb(r,e){const i=zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function yb(r,e){const i=zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Sb(r,e){r.uniform1iv(this.addr,e)}function Mb(r,e){r.uniform2iv(this.addr,e)}function Eb(r,e){r.uniform3iv(this.addr,e)}function Tb(r,e){r.uniform4iv(this.addr,e)}function bb(r,e){r.uniform1uiv(this.addr,e)}function Ab(r,e){r.uniform2uiv(this.addr,e)}function Rb(r,e){r.uniform3uiv(this.addr,e)}function Cb(r,e){r.uniform4uiv(this.addr,e)}function wb(r,e,i){const s=this.cache,l=e.length,u=Bc(i,l);dn(s,u)||(r.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||cv,u[h])}function Db(r,e,i){const s=this.cache,l=e.length,u=Bc(i,l);dn(s,u)||(r.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||fv,u[h])}function Ub(r,e,i){const s=this.cache,l=e.length,u=Bc(i,l);dn(s,u)||(r.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||hv,u[h])}function Lb(r,e,i){const s=this.cache,l=e.length,u=Bc(i,l);dn(s,u)||(r.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||uv,u[h])}function Nb(r){switch(r){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return vb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return bb;case 36294:return Ab;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Lb}}class Ob{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=db(i.type)}}class Pb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Nb(i.type)}}class zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function l0(r,e){r.seq.push(e),r.map[e.id]=e}function Ib(r,e,i){const s=r.name,l=s.length;for(bh.lastIndex=0;;){const u=bh.exec(s),h=bh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){l0(i,p===void 0?new Ob(d,r,e):new Pb(d,r,e));break}else{let x=i.map[d];x===void 0&&(x=new zb(d),l0(i,x)),i=x}}}class Nc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Ib(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function c0(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const Bb=37297;let Fb=0;function Hb(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const u0=new ue;function Gb(r){Te._getMatrix(u0,Te.workingColorSpace,r);const e=`mat3( ${u0.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case zc:return[e,"LinearTransferOETF"];case He:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function f0(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Hb(r.getShaderSource(e),h)}else return l}function Vb(r,e){const i=Gb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function kb(r,e){let i;switch(e){case iS:i="Linear";break;case aS:i="Reinhard";break;case sS:i="Cineon";break;case rS:i="ACESFilmic";break;case lS:i="AgX";break;case cS:i="Neutral";break;case oS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new nt;function Xb(){Te.getLuminanceCoefficients(Mc);const r=Mc.x.toFixed(4),e=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function qb(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Yb(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(e,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Bo(r){return r!==""}function h0(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(r){return r.replace(jb,Kb)}const Zb=new Map;function Kb(r,e){let i=he[e];if(i===void 0){const s=Zb.get(e);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return gd(i)}const Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p0(r){return r.replace(Qb,Jb)}function Jb(r,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function m0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $b(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zy?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===la&&(e="SHADOWMAP_TYPE_VSM"),e}function t1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function n1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case z0:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case nS:e="ENVMAP_BLENDING_ADD";break}return e}function i1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function a1(r,e,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=$b(i),p=t1(i),g=e1(i),x=n1(i),y=i1(i),M=Wb(i),b=qb(u),R=l.createProgram();let S,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),_.length>0&&(_+=`
`)):(S=[m0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),_=[m0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?he.tonemapping_pars_fragment:"",i.toneMapping!==ja?kb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Vb("linearToOutputTexel",i.outputColorSpace),Xb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=gd(h),h=h0(h,i),h=d0(h,i),d=gd(d),d=h0(d,i),d=d0(d,i),h=p0(h),d=p0(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=P+S+h,C=P+_+d,k=c0(l,l.VERTEX_SHADER,D),N=c0(l,l.FRAGMENT_SHADER,C);l.attachShader(R,k),l.attachShader(R,N),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(H){if(r.debug.checkShaderErrors){const ct=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(k).trim(),gt=l.getShaderInfoLog(N).trim();let _t=!0,I=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(_t=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,k,N);else{const K=f0(l,k,"vertex"),Z=f0(l,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+K+`
`+Z)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(rt===""||gt==="")&&(I=!1);I&&(H.diagnostics={runnable:_t,programLog:ct,vertexShader:{log:rt,prefix:S},fragmentShader:{log:gt,prefix:_}})}l.deleteShader(k),l.deleteShader(N),Y=new Nc(l,R),L=Yb(l,R)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,Bb)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Fb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=N,this}let s1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new o1(e),i.set(e,s)),s}}class o1{constructor(e){this.id=s1++,this.code=e,this.usedTimes=0}}function l1(r,e,i,s,l,u,h){const d=new J0,m=new r1,p=new Set,g=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(L){return p.add(L),L===0?"uv":`uv${L}`}function S(L,w,H,ct,rt){const gt=ct.fog,_t=rt.geometry,I=L.isMeshStandardMaterial?ct.environment:null,K=(L.isMeshStandardMaterial?i:e).get(L.envMap||I),Z=K&&K.mapping===Pc?K.image.height:null,yt=b[L.type];L.precision!==null&&(M=l.getMaxPrecision(L.precision),M!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const Tt=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,O=Tt!==void 0?Tt.length:0;let tt=0;_t.morphAttributes.position!==void 0&&(tt=1),_t.morphAttributes.normal!==void 0&&(tt=2),_t.morphAttributes.color!==void 0&&(tt=3);let ht,G,ot,St;if(yt){const Ee=Ni[yt];ht=Ee.vertexShader,G=Ee.fragmentShader}else ht=L.vertexShader,G=L.fragmentShader,m.update(L),ot=m.getVertexShaderID(L),St=m.getFragmentShaderID(L);const xt=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),It=rt.isInstancedMesh===!0,ae=rt.isBatchedMesh===!0,Re=!!L.map,fe=!!L.matcap,ke=!!K,q=!!L.aoMap,Kt=!!L.lightMap,Qt=!!L.bumpMap,Jt=!!L.normalMap,Vt=!!L.displacementMap,xe=!!L.emissiveMap,Lt=!!L.metalnessMap,U=!!L.roughnessMap,E=L.anisotropy>0,Q=L.clearcoat>0,ft=L.dispersion>0,Et=L.iridescence>0,pt=L.sheen>0,qt=L.transmission>0,Ut=E&&!!L.anisotropyMap,Bt=Q&&!!L.clearcoatMap,ge=Q&&!!L.clearcoatNormalMap,At=Q&&!!L.clearcoatRoughnessMap,Ft=Et&&!!L.iridescenceMap,Zt=Et&&!!L.iridescenceThicknessMap,Yt=pt&&!!L.sheenColorMap,zt=pt&&!!L.sheenRoughnessMap,ee=!!L.specularMap,oe=!!L.specularColorMap,Pe=!!L.specularIntensityMap,V=qt&&!!L.transmissionMap,Rt=qt&&!!L.thicknessMap,lt=!!L.gradientMap,vt=!!L.alphaMap,Ct=L.alphaTest>0,Nt=!!L.alphaHash,ne=!!L.extensions;let Ye=ja;L.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Ye=r.toneMapping);const ln={shaderID:yt,shaderType:L.type,shaderName:L.name,vertexShader:ht,fragmentShader:G,defines:L.defines,customVertexShaderID:ot,customFragmentShaderID:St,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,batching:ae,batchingColor:ae&&rt._colorsTexture!==null,instancing:It,instancingColor:It&&rt.instanceColor!==null,instancingMorph:It&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xt===null?r.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Pr,alphaToCoverage:!!L.alphaToCoverage,map:Re,matcap:fe,envMap:ke,envMapMode:ke&&K.mapping,envMapCubeUVHeight:Z,aoMap:q,lightMap:Kt,bumpMap:Qt,normalMap:Jt,displacementMap:y&&Vt,emissiveMap:xe,normalMapObjectSpace:Jt&&L.normalMapType===pS,normalMapTangentSpace:Jt&&L.normalMapType===dS,metalnessMap:Lt,roughnessMap:U,anisotropy:E,anisotropyMap:Ut,clearcoat:Q,clearcoatMap:Bt,clearcoatNormalMap:ge,clearcoatRoughnessMap:At,dispersion:ft,iridescence:Et,iridescenceMap:Ft,iridescenceThicknessMap:Zt,sheen:pt,sheenColorMap:Yt,sheenRoughnessMap:zt,specularMap:ee,specularColorMap:oe,specularIntensityMap:Pe,transmission:qt,transmissionMap:V,thicknessMap:Rt,gradientMap:lt,opaque:L.transparent===!1&&L.blending===br&&L.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ct,alphaHash:Nt,combine:L.combine,mapUv:Re&&R(L.map.channel),aoMapUv:q&&R(L.aoMap.channel),lightMapUv:Kt&&R(L.lightMap.channel),bumpMapUv:Qt&&R(L.bumpMap.channel),normalMapUv:Jt&&R(L.normalMap.channel),displacementMapUv:Vt&&R(L.displacementMap.channel),emissiveMapUv:xe&&R(L.emissiveMap.channel),metalnessMapUv:Lt&&R(L.metalnessMap.channel),roughnessMapUv:U&&R(L.roughnessMap.channel),anisotropyMapUv:Ut&&R(L.anisotropyMap.channel),clearcoatMapUv:Bt&&R(L.clearcoatMap.channel),clearcoatNormalMapUv:ge&&R(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&R(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&R(L.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&R(L.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&R(L.sheenColorMap.channel),sheenRoughnessMapUv:zt&&R(L.sheenRoughnessMap.channel),specularMapUv:ee&&R(L.specularMap.channel),specularColorMapUv:oe&&R(L.specularColorMap.channel),specularIntensityMapUv:Pe&&R(L.specularIntensityMap.channel),transmissionMapUv:V&&R(L.transmissionMap.channel),thicknessMapUv:Rt&&R(L.thicknessMap.channel),alphaMapUv:vt&&R(L.alphaMap.channel),vertexTangents:!!_t.attributes.tangent&&(Jt||E),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!_t.attributes.uv&&(Re||vt),fog:!!gt,useFog:L.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Pt,skinning:rt.isSkinnedMesh===!0,morphTargets:_t.morphAttributes.position!==void 0,morphNormals:_t.morphAttributes.normal!==void 0,morphColors:_t.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Re&&L.map.isVideoTexture===!0&&Te.getTransfer(L.map.colorSpace)===He,decodeVideoTextureEmissive:xe&&L.emissiveMap.isVideoTexture===!0&&Te.getTransfer(L.emissiveMap.colorSpace)===He,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Oi,flipSided:L.side===On,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ne&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&L.extensions.multiDraw===!0||ae)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function _(L){const w=[];if(L.shaderID?w.push(L.shaderID):(w.push(L.customVertexShaderID),w.push(L.customFragmentShaderID)),L.defines!==void 0)for(const H in L.defines)w.push(H),w.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(P(w,L),D(w,L),w.push(r.outputColorSpace)),w.push(L.customProgramCacheKey),w.join()}function P(L,w){L.push(w.precision),L.push(w.outputColorSpace),L.push(w.envMapMode),L.push(w.envMapCubeUVHeight),L.push(w.mapUv),L.push(w.alphaMapUv),L.push(w.lightMapUv),L.push(w.aoMapUv),L.push(w.bumpMapUv),L.push(w.normalMapUv),L.push(w.displacementMapUv),L.push(w.emissiveMapUv),L.push(w.metalnessMapUv),L.push(w.roughnessMapUv),L.push(w.anisotropyMapUv),L.push(w.clearcoatMapUv),L.push(w.clearcoatNormalMapUv),L.push(w.clearcoatRoughnessMapUv),L.push(w.iridescenceMapUv),L.push(w.iridescenceThicknessMapUv),L.push(w.sheenColorMapUv),L.push(w.sheenRoughnessMapUv),L.push(w.specularMapUv),L.push(w.specularColorMapUv),L.push(w.specularIntensityMapUv),L.push(w.transmissionMapUv),L.push(w.thicknessMapUv),L.push(w.combine),L.push(w.fogExp2),L.push(w.sizeAttenuation),L.push(w.morphTargetsCount),L.push(w.morphAttributeCount),L.push(w.numDirLights),L.push(w.numPointLights),L.push(w.numSpotLights),L.push(w.numSpotLightMaps),L.push(w.numHemiLights),L.push(w.numRectAreaLights),L.push(w.numDirLightShadows),L.push(w.numPointLightShadows),L.push(w.numSpotLightShadows),L.push(w.numSpotLightShadowsWithMaps),L.push(w.numLightProbes),L.push(w.shadowMapType),L.push(w.toneMapping),L.push(w.numClippingPlanes),L.push(w.numClipIntersection),L.push(w.depthPacking)}function D(L,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),L.push(d.mask)}function C(L){const w=b[L.type];let H;if(w){const ct=Ni[w];H=XS.clone(ct.uniforms)}else H=L.uniforms;return H}function k(L,w){let H;for(let ct=0,rt=g.length;ct<rt;ct++){const gt=g[ct];if(gt.cacheKey===w){H=gt,++H.usedTimes;break}}return H===void 0&&(H=new a1(r,w,L,u),g.push(H)),H}function N(L){if(--L.usedTimes===0){const w=g.indexOf(L);g[w]=g[g.length-1],g.pop(),L.destroy()}}function z(L){m.remove(L)}function Y(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:C,acquireProgram:k,releaseProgram:N,releaseShaderCache:z,programs:g,dispose:Y}}function c1(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function u1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function g0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _0(){const r=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(x,y,M,b,R,S){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:y,material:M,groupOrder:b,renderOrder:x.renderOrder,z:R,group:S},r[e]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=M,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=R,_.group=S),e++,_}function d(x,y,M,b,R,S){const _=h(x,y,M,b,R,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,y,M,b,R,S){const _=h(x,y,M,b,R,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,y){i.length>1&&i.sort(x||u1),s.length>1&&s.sort(y||g0),l.length>1&&l.sort(y||g0)}function g(){for(let x=e,y=r.length;x<y;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function f1(){let r=new WeakMap;function e(s,l){const u=r.get(s);let h;return u===void 0?(h=new _0,r.set(s,[h])):l>=u.length?(h=new _0,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function h1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new De};break;case"SpotLight":i={position:new nt,direction:new nt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return r[e.id]=i,i}}}function d1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let p1=0;function m1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function g1(r){const e=new h1,i=d1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new nt);const l=new nt,u=new en,h=new en;function d(p){let g=0,x=0,y=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,b=0,R=0,S=0,_=0,P=0,D=0,C=0,k=0,N=0,z=0;p.sort(m1);for(let L=0,w=p.length;L<w;L++){const H=p[L],ct=H.color,rt=H.intensity,gt=H.distance,_t=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ct.r*rt,x+=ct.g*rt,y+=ct.b*rt;else if(H.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(H.sh.coefficients[I],rt);z++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,Z=i.get(H);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=_t,s.directionalShadowMatrix[M]=H.shadow.matrix,P++}s.directional[M]=I,M++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(ct).multiplyScalar(rt),I.distance=gt,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,s.spot[R]=I;const K=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,K.updateMatrices(H),H.castShadow&&N++),s.spotLightMatrix[R]=K.matrix,H.castShadow){const Z=i.get(H);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[R]=Z,s.spotShadowMap[R]=_t,C++}R++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy(ct).multiplyScalar(rt),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=I,S++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const K=H.shadow,Z=i.get(H);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=_t,s.pointShadowMatrix[b]=H.shadow.matrix,D++}s.point[b]=I,b++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar(rt),I.groundColor.copy(H.groundColor).multiplyScalar(rt),s.hemi[_]=I,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=y;const Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==b||Y.spotLength!==R||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==P||Y.numPointShadows!==D||Y.numSpotShadows!==C||Y.numSpotMaps!==k||Y.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=S,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=C+k-N,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=z,Y.directionalLength=M,Y.pointLength=b,Y.spotLength=R,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=P,Y.numPointShadows=D,Y.numSpotShadows=C,Y.numSpotMaps=k,Y.numLightProbes=z,s.version=p1++)}function m(p,g){let x=0,y=0,M=0,b=0,R=0;const S=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const D=p[_];if(D.isDirectionalLight){const C=s.directional[x];C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),x++}else if(D.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const C=s.rectArea[b];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),h.identity(),u.copy(D.matrixWorld),u.premultiply(S),h.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),b++}else if(D.isPointLight){const C=s.point[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const C=s.hemi[R];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),R++}}}return{setup:d,setupView:m,state:s}}function v0(r){const e=new g1(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function _1(r){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new v0(r),e.set(l,[d])):u>=h.length?(d=new v0(r),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}class v1 extends Xo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x1 extends Xo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
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
}`;function M1(r,e,i){let s=new rv;const l=new de,u=new de,h=new tn,d=new v1({depthPacking:hS}),m=new x1,p={},g=i.maxTextureSize,x={[Za]:On,[On]:Za,[Oi]:Oi},y=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:y1,fragmentShader:S1}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ii;b.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ei(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P0;let _=this.type;this.render=function(N,z,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const L=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),ct=r.state;ct.setBlending(Ya),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const rt=_!==la&&this.type===la,gt=_===la&&this.type!==la;for(let _t=0,I=N.length;_t<I;_t++){const K=N[_t],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const yt=Z.getFrameExtents();if(l.multiply(yt),u.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/yt.x),l.x=u.x*yt.x,Z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/yt.y),l.y=u.y*yt.y,Z.mapSize.y=u.y)),Z.map===null||rt===!0||gt===!0){const O=this.type!==la?{minFilter:Ti,magFilter:Ti}:{};Z.map!==null&&Z.map.dispose(),Z.map=new bs(l.x,l.y,O),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const Tt=Z.getViewportCount();for(let O=0;O<Tt;O++){const tt=Z.getViewport(O);h.set(u.x*tt.x,u.y*tt.y,u.x*tt.z,u.y*tt.w),ct.viewport(h),Z.updateMatrices(K,O),s=Z.getFrustum(),C(z,Y,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===la&&P(Z,Y),Z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(L,w,H)};function P(N,z){const Y=e.update(R);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new bs(l.x,l.y)),y.uniforms.shadow_pass.value=N.map.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,Y,y,R,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,Y,M,R,null)}function D(N,z,Y,L){let w=null;const H=Y.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)w=H;else if(w=Y.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ct=w.uuid,rt=z.uuid;let gt=p[ct];gt===void 0&&(gt={},p[ct]=gt);let _t=gt[rt];_t===void 0&&(_t=w.clone(),gt[rt]=_t,z.addEventListener("dispose",k)),w=_t}if(w.visible=z.visible,w.wireframe=z.wireframe,L===la?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:x[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ct=r.properties.get(w);ct.light=Y}return w}function C(N,z,Y,L,w){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===la)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,N.matrixWorld);const rt=e.update(N),gt=N.material;if(Array.isArray(gt)){const _t=rt.groups;for(let I=0,K=_t.length;I<K;I++){const Z=_t[I],yt=gt[Z.materialIndex];if(yt&&yt.visible){const Tt=D(N,yt,L,w);N.onBeforeShadow(r,N,z,Y,rt,Tt,Z),r.renderBufferDirect(Y,null,rt,Tt,N,Z),N.onAfterShadow(r,N,z,Y,rt,Tt,Z)}}}else if(gt.visible){const _t=D(N,gt,L,w);N.onBeforeShadow(r,N,z,Y,rt,_t,null),r.renderBufferDirect(Y,null,rt,_t,N,null),N.onAfterShadow(r,N,z,Y,rt,_t,null)}}const ct=N.children;for(let rt=0,gt=ct.length;rt<gt;rt++)C(ct[rt],z,Y,L,w)}function k(N){N.target.removeEventListener("dispose",k);for(const Y in p){const L=p[Y],w=N.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}const E1={[Nh]:Oh,[Ph]:Bh,[zh]:Fh,[Cr]:Ih,[Oh]:Nh,[Bh]:Ph,[Fh]:zh,[Ih]:Cr};function T1(r,e){function i(){let V=!1;const Rt=new tn;let lt=null;const vt=new tn(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!V&&(r.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){V=Ct},setClear:function(Ct,Nt,ne,Ye,ln){ln===!0&&(Ct*=Ye,Nt*=Ye,ne*=Ye),Rt.set(Ct,Nt,ne,Ye),vt.equals(Rt)===!1&&(r.clearColor(Ct,Nt,ne,Ye),vt.copy(Rt))},reset:function(){V=!1,lt=null,vt.set(-1,0,0,0)}}}function s(){let V=!1,Rt=!1,lt=null,vt=null,Ct=null;return{setReversed:function(Nt){if(Rt!==Nt){const ne=e.get("EXT_clip_control");Rt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const Ye=Ct;Ct=null,this.setClear(Ye)}Rt=Nt},getReversed:function(){return Rt},setTest:function(Nt){Nt?xt(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(Nt){lt!==Nt&&!V&&(r.depthMask(Nt),lt=Nt)},setFunc:function(Nt){if(Rt&&(Nt=E1[Nt]),vt!==Nt){switch(Nt){case Nh:r.depthFunc(r.NEVER);break;case Oh:r.depthFunc(r.ALWAYS);break;case Ph:r.depthFunc(r.LESS);break;case Cr:r.depthFunc(r.LEQUAL);break;case zh:r.depthFunc(r.EQUAL);break;case Ih:r.depthFunc(r.GEQUAL);break;case Bh:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=Nt}},setLocked:function(Nt){V=Nt},setClear:function(Nt){Ct!==Nt&&(Rt&&(Nt=1-Nt),r.clearDepth(Nt),Ct=Nt)},reset:function(){V=!1,lt=null,vt=null,Ct=null,Rt=!1}}}function l(){let V=!1,Rt=null,lt=null,vt=null,Ct=null,Nt=null,ne=null,Ye=null,ln=null;return{setTest:function(Ee){V||(Ee?xt(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!V&&(r.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,vn,di){(lt!==Ee||vt!==vn||Ct!==di)&&(r.stencilFunc(Ee,vn,di),lt=Ee,vt=vn,Ct=di)},setOp:function(Ee,vn,di){(Nt!==Ee||ne!==vn||Ye!==di)&&(r.stencilOp(Ee,vn,di),Nt=Ee,ne=vn,Ye=di)},setLocked:function(Ee){V=Ee},setClear:function(Ee){ln!==Ee&&(r.clearStencil(Ee),ln=Ee)},reset:function(){V=!1,Rt=null,lt=null,vt=null,Ct=null,Nt=null,ne=null,Ye=null,ln=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},y=new WeakMap,M=[],b=null,R=!1,S=null,_=null,P=null,D=null,C=null,k=null,N=null,z=new De(0,0,0),Y=0,L=!1,w=null,H=null,ct=null,rt=null,gt=null;const _t=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,K=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),I=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),I=K>=2);let yt=null,Tt={};const O=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),ht=new tn().fromArray(O),G=new tn().fromArray(tt);function ot(V,Rt,lt,vt){const Ct=new Uint8Array(4),Nt=r.createTexture();r.bindTexture(V,Nt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<lt;ne++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Rt+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Nt}const St={};St[r.TEXTURE_2D]=ot(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),xt(r.DEPTH_TEST),h.setFunc(Cr),Qt(!1),Jt(E_),xt(r.CULL_FACE),q(Ya);function xt(V){g[V]!==!0&&(r.enable(V),g[V]=!0)}function Pt(V){g[V]!==!1&&(r.disable(V),g[V]=!1)}function It(V,Rt){return x[V]!==Rt?(r.bindFramebuffer(V,Rt),x[V]=Rt,V===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Rt),V===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ae(V,Rt){let lt=M,vt=!1;if(V){lt=y.get(Rt),lt===void 0&&(lt=[],y.set(Rt,lt));const Ct=V.textures;if(lt.length!==Ct.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let Nt=0,ne=Ct.length;Nt<ne;Nt++)lt[Nt]=r.COLOR_ATTACHMENT0+Nt;lt.length=Ct.length,vt=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,vt=!0);vt&&r.drawBuffers(lt)}function Re(V){return b!==V?(r.useProgram(V),b=V,!0):!1}const fe={[Ss]:r.FUNC_ADD,[By]:r.FUNC_SUBTRACT,[Fy]:r.FUNC_REVERSE_SUBTRACT};fe[Hy]=r.MIN,fe[Gy]=r.MAX;const ke={[Vy]:r.ZERO,[ky]:r.ONE,[Xy]:r.SRC_COLOR,[Uh]:r.SRC_ALPHA,[Ky]:r.SRC_ALPHA_SATURATE,[jy]:r.DST_COLOR,[qy]:r.DST_ALPHA,[Wy]:r.ONE_MINUS_SRC_COLOR,[Lh]:r.ONE_MINUS_SRC_ALPHA,[Zy]:r.ONE_MINUS_DST_COLOR,[Yy]:r.ONE_MINUS_DST_ALPHA,[Qy]:r.CONSTANT_COLOR,[Jy]:r.ONE_MINUS_CONSTANT_COLOR,[$y]:r.CONSTANT_ALPHA,[tS]:r.ONE_MINUS_CONSTANT_ALPHA};function q(V,Rt,lt,vt,Ct,Nt,ne,Ye,ln,Ee){if(V===Ya){R===!0&&(Pt(r.BLEND),R=!1);return}if(R===!1&&(xt(r.BLEND),R=!0),V!==Iy){if(V!==S||Ee!==L){if((_!==Ss||C!==Ss)&&(r.blendEquation(r.FUNC_ADD),_=Ss,C=Ss),Ee)switch(V){case br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dh:r.blendFunc(r.ONE,r.ONE);break;case T_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case b_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case T_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case b_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}P=null,D=null,k=null,N=null,z.set(0,0,0),Y=0,S=V,L=Ee}return}Ct=Ct||Rt,Nt=Nt||lt,ne=ne||vt,(Rt!==_||Ct!==C)&&(r.blendEquationSeparate(fe[Rt],fe[Ct]),_=Rt,C=Ct),(lt!==P||vt!==D||Nt!==k||ne!==N)&&(r.blendFuncSeparate(ke[lt],ke[vt],ke[Nt],ke[ne]),P=lt,D=vt,k=Nt,N=ne),(Ye.equals(z)===!1||ln!==Y)&&(r.blendColor(Ye.r,Ye.g,Ye.b,ln),z.copy(Ye),Y=ln),S=V,L=!1}function Kt(V,Rt){V.side===Oi?Pt(r.CULL_FACE):xt(r.CULL_FACE);let lt=V.side===On;Rt&&(lt=!lt),Qt(lt),V.blending===br&&V.transparent===!1?q(Ya):q(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const vt=V.stencilWrite;d.setTest(vt),vt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),xe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xt(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(V){w!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),w=V)}function Jt(V){V!==Oy?(xt(r.CULL_FACE),V!==H&&(V===E_?r.cullFace(r.BACK):V===Py?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),H=V}function Vt(V){V!==ct&&(I&&r.lineWidth(V),ct=V)}function xe(V,Rt,lt){V?(xt(r.POLYGON_OFFSET_FILL),(rt!==Rt||gt!==lt)&&(r.polygonOffset(Rt,lt),rt=Rt,gt=lt)):Pt(r.POLYGON_OFFSET_FILL)}function Lt(V){V?xt(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function U(V){V===void 0&&(V=r.TEXTURE0+_t-1),yt!==V&&(r.activeTexture(V),yt=V)}function E(V,Rt,lt){lt===void 0&&(yt===null?lt=r.TEXTURE0+_t-1:lt=yt);let vt=Tt[lt];vt===void 0&&(vt={type:void 0,texture:void 0},Tt[lt]=vt),(vt.type!==V||vt.texture!==Rt)&&(yt!==lt&&(r.activeTexture(lt),yt=lt),r.bindTexture(V,Rt||St[V]),vt.type=V,vt.texture=Rt)}function Q(){const V=Tt[yt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ft(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ft(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Zt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(V){ht.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ht.copy(V))}function zt(V){G.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),G.copy(V))}function ee(V,Rt){let lt=p.get(Rt);lt===void 0&&(lt=new WeakMap,p.set(Rt,lt));let vt=lt.get(V);vt===void 0&&(vt=r.getUniformBlockIndex(Rt,V.name),lt.set(V,vt))}function oe(V,Rt){const vt=p.get(Rt).get(V);m.get(Rt)!==vt&&(r.uniformBlockBinding(Rt,vt,V.__bindingPointIndex),m.set(Rt,vt))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,Tt={},x={},y=new WeakMap,M=[],b=null,R=!1,S=null,_=null,P=null,D=null,C=null,k=null,N=null,z=new De(0,0,0),Y=0,L=!1,w=null,H=null,ct=null,rt=null,gt=null,ht.set(0,0,r.canvas.width,r.canvas.height),G.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:xt,disable:Pt,bindFramebuffer:It,drawBuffers:ae,useProgram:Re,setBlending:q,setMaterial:Kt,setFlipSided:Qt,setCullFace:Jt,setLineWidth:Vt,setPolygonOffset:xe,setScissorTest:Lt,activeTexture:U,bindTexture:E,unbindTexture:Q,compressedTexImage2D:ft,compressedTexImage3D:Et,texImage2D:Ft,texImage3D:Zt,updateUBOMapping:ee,uniformBlockBinding:oe,texStorage2D:ge,texStorage3D:At,texSubImage2D:pt,texSubImage3D:qt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Bt,scissor:Yt,viewport:zt,reset:Pe}}function x0(r,e,i,s){const l=b1(s);switch(i){case G0:return r*e;case k0:return r*e;case X0:return r*e*2;case W0:return r*e/l.components*l.byteLength;case Ed:return r*e/l.components*l.byteLength;case q0:return r*e*2/l.components*l.byteLength;case Td:return r*e*2/l.components*l.byteLength;case V0:return r*e*3/l.components*l.byteLength;case Mi:return r*e*4/l.components*l.byteLength;case bd:return r*e*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wc:case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xh:case qh:return Math.max(r,16)*Math.max(e,8)/4;case kh:case Wh:return Math.max(r,8)*Math.max(e,8)/2;case Yh:case jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case id:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Uc:case ud:case fd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Y0:case hd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case dd:case pd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function b1(r){switch(r){case ha:case B0:return{byteLength:1,components:1};case Fo:case F0:case Go:return{byteLength:2,components:1};case Sd:case Md:return{byteLength:2,components:4};case Ts:case yd:case ca:return{byteLength:4,components:1};case H0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function A1(r,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new de,g=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return M?new OffscreenCanvas(U,E):Ho("canvas")}function R(U,E,Q){let ft=1;const Et=Lt(U);if((Et.width>Q||Et.height>Q)&&(ft=Q/Math.max(Et.width,Et.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(ft*Et.width),qt=Math.floor(ft*Et.height);x===void 0&&(x=b(pt,qt));const Ut=E?b(pt,qt):x;return Ut.width=pt,Ut.height=qt,Ut.getContext("2d").drawImage(U,0,0,pt,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+qt+")."),Ut}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),U;return U}function S(U){return U.generateMipmaps}function _(U){r.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(U,E,Q,ft,Et=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=E;if(E===r.RED&&(Q===r.FLOAT&&(pt=r.R32F),Q===r.HALF_FLOAT&&(pt=r.R16F),Q===r.UNSIGNED_BYTE&&(pt=r.R8)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pt=r.R8UI),Q===r.UNSIGNED_SHORT&&(pt=r.R16UI),Q===r.UNSIGNED_INT&&(pt=r.R32UI),Q===r.BYTE&&(pt=r.R8I),Q===r.SHORT&&(pt=r.R16I),Q===r.INT&&(pt=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(pt=r.RG32F),Q===r.HALF_FLOAT&&(pt=r.RG16F),Q===r.UNSIGNED_BYTE&&(pt=r.RG8)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pt=r.RG8UI),Q===r.UNSIGNED_SHORT&&(pt=r.RG16UI),Q===r.UNSIGNED_INT&&(pt=r.RG32UI),Q===r.BYTE&&(pt=r.RG8I),Q===r.SHORT&&(pt=r.RG16I),Q===r.INT&&(pt=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),Q===r.UNSIGNED_INT&&(pt=r.RGB32UI),Q===r.BYTE&&(pt=r.RGB8I),Q===r.SHORT&&(pt=r.RGB16I),Q===r.INT&&(pt=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),Q===r.UNSIGNED_INT&&(pt=r.RGBA32UI),Q===r.BYTE&&(pt=r.RGBA8I),Q===r.SHORT&&(pt=r.RGBA16I),Q===r.INT&&(pt=r.RGBA32I)),E===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),E===r.RGBA){const qt=Et?zc:Te.getTransfer(ft);Q===r.FLOAT&&(pt=r.RGBA32F),Q===r.HALF_FLOAT&&(pt=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(pt=qt===He?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function C(U,E){let Q;return U?E===null||E===Ts||E===Lr?Q=r.DEPTH24_STENCIL8:E===ca?Q=r.DEPTH32F_STENCIL8:E===Fo&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===Lr?Q=r.DEPTH_COMPONENT24:E===ca?Q=r.DEPTH_COMPONENT32F:E===Fo&&(Q=r.DEPTH_COMPONENT16),Q}function k(U,E){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ti&&U.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function N(U){const E=U.target;E.removeEventListener("dispose",N),Y(E),E.isVideoTexture&&g.delete(E)}function z(U){const E=U.target;E.removeEventListener("dispose",z),w(E)}function Y(U){const E=s.get(U);if(E.__webglInit===void 0)return;const Q=U.source,ft=y.get(Q);if(ft){const Et=ft[E.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&L(U),Object.keys(ft).length===0&&y.delete(Q)}s.remove(U)}function L(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const Q=U.source,ft=y.get(Q);delete ft[E.__cacheKey],h.memory.textures--}function w(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let Et=0;Et<E.__webglFramebuffer[ft].length;Et++)r.deleteFramebuffer(E.__webglFramebuffer[ft][Et]);else r.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)r.deleteFramebuffer(E.__webglFramebuffer[ft]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=U.textures;for(let ft=0,Et=Q.length;ft<Et;ft++){const pt=s.get(Q[ft]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(Q[ft])}s.remove(U)}let H=0;function ct(){H=0}function rt(){const U=H;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function gt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function _t(U,E){const Q=s.get(U);if(U.isVideoTexture&&Vt(U),U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(Q,U,E);return}}i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function I(U,E){const Q=s.get(U);if(U.version>0&&Q.__version!==U.version){G(Q,U,E);return}i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function K(U,E){const Q=s.get(U);if(U.version>0&&Q.__version!==U.version){G(Q,U,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function Z(U,E){const Q=s.get(U);if(U.version>0&&Q.__version!==U.version){ot(Q,U,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const yt={[Ur]:r.REPEAT,[Pi]:r.CLAMP_TO_EDGE,[Vh]:r.MIRRORED_REPEAT},Tt={[Ti]:r.NEAREST,[uS]:r.NEAREST_MIPMAP_NEAREST,[nc]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Jf]:r.LINEAR_MIPMAP_NEAREST,[Es]:r.LINEAR_MIPMAP_LINEAR},O={[mS]:r.NEVER,[SS]:r.ALWAYS,[gS]:r.LESS,[j0]:r.LEQUAL,[_S]:r.EQUAL,[yS]:r.GEQUAL,[vS]:r.GREATER,[xS]:r.NOTEQUAL};function tt(U,E){if(E.type===ca&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===Jf||E.magFilter===nc||E.magFilter===Es||E.minFilter===Dn||E.minFilter===Jf||E.minFilter===nc||E.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,yt[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,yt[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,yt[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Tt[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Tt[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ti||E.minFilter!==nc&&E.minFilter!==Es||E.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ht(U,E){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",N));const ft=E.source;let Et=y.get(ft);Et===void 0&&(Et={},y.set(ft,Et));const pt=gt(E);if(pt!==U.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),Et[pt].usedTimes++;const qt=Et[U.__cacheKey];qt!==void 0&&(Et[U.__cacheKey].usedTimes--,qt.usedTimes===0&&L(E)),U.__cacheKey=pt,U.__webglTexture=Et[pt].texture}return Q}function G(U,E,Q){let ft=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=r.TEXTURE_3D);const Et=ht(U,E),pt=E.source;i.bindTexture(ft,U.__webglTexture,r.TEXTURE0+Q);const qt=s.get(pt);if(pt.version!==qt.__version||Et===!0){i.activeTexture(r.TEXTURE0+Q);const Ut=Te.getPrimaries(Te.workingColorSpace),Bt=E.colorSpace===qa?null:Te.getPrimaries(E.colorSpace),ge=E.colorSpace===qa||Ut===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let At=R(E.image,!1,l.maxTextureSize);At=xe(E,At);const Ft=u.convert(E.format,E.colorSpace),Zt=u.convert(E.type);let Yt=D(E.internalFormat,Ft,Zt,E.colorSpace,E.isVideoTexture);tt(ft,E);let zt;const ee=E.mipmaps,oe=E.isVideoTexture!==!0,Pe=qt.__version===void 0||Et===!0,V=pt.dataReady,Rt=k(E,At);if(E.isDepthTexture)Yt=C(E.format===Nr,E.type),Pe&&(oe?i.texStorage2D(r.TEXTURE_2D,1,Yt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Yt,At.width,At.height,0,Ft,Zt,null));else if(E.isDataTexture)if(ee.length>0){oe&&Pe&&i.texStorage2D(r.TEXTURE_2D,Rt,Yt,ee[0].width,ee[0].height);for(let lt=0,vt=ee.length;lt<vt;lt++)zt=ee[lt],oe?V&&i.texSubImage2D(r.TEXTURE_2D,lt,0,0,zt.width,zt.height,Ft,Zt,zt.data):i.texImage2D(r.TEXTURE_2D,lt,Yt,zt.width,zt.height,0,Ft,Zt,zt.data);E.generateMipmaps=!1}else oe?(Pe&&i.texStorage2D(r.TEXTURE_2D,Rt,Yt,At.width,At.height),V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,At.width,At.height,Ft,Zt,At.data)):i.texImage2D(r.TEXTURE_2D,0,Yt,At.width,At.height,0,Ft,Zt,At.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Yt,ee[0].width,ee[0].height,At.depth);for(let lt=0,vt=ee.length;lt<vt;lt++)if(zt=ee[lt],E.format!==Mi)if(Ft!==null)if(oe){if(V)if(E.layerUpdates.size>0){const Ct=x0(zt.width,zt.height,E.format,E.type);for(const Nt of E.layerUpdates){const ne=zt.data.subarray(Nt*Ct/zt.data.BYTES_PER_ELEMENT,(Nt+1)*Ct/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,Nt,zt.width,zt.height,1,Ft,ne)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,zt.width,zt.height,At.depth,Ft,zt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,lt,Yt,zt.width,zt.height,At.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?V&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,zt.width,zt.height,At.depth,Ft,Zt,zt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,lt,Yt,zt.width,zt.height,At.depth,0,Ft,Zt,zt.data)}else{oe&&Pe&&i.texStorage2D(r.TEXTURE_2D,Rt,Yt,ee[0].width,ee[0].height);for(let lt=0,vt=ee.length;lt<vt;lt++)zt=ee[lt],E.format!==Mi?Ft!==null?oe?V&&i.compressedTexSubImage2D(r.TEXTURE_2D,lt,0,0,zt.width,zt.height,Ft,zt.data):i.compressedTexImage2D(r.TEXTURE_2D,lt,Yt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?V&&i.texSubImage2D(r.TEXTURE_2D,lt,0,0,zt.width,zt.height,Ft,Zt,zt.data):i.texImage2D(r.TEXTURE_2D,lt,Yt,zt.width,zt.height,0,Ft,Zt,zt.data)}else if(E.isDataArrayTexture)if(oe){if(Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Yt,At.width,At.height,At.depth),V)if(E.layerUpdates.size>0){const lt=x0(At.width,At.height,E.format,E.type);for(const vt of E.layerUpdates){const Ct=At.data.subarray(vt*lt/At.data.BYTES_PER_ELEMENT,(vt+1)*lt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Ft,Zt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ft,Zt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Yt,At.width,At.height,At.depth,0,Ft,Zt,At.data);else if(E.isData3DTexture)oe?(Pe&&i.texStorage3D(r.TEXTURE_3D,Rt,Yt,At.width,At.height,At.depth),V&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ft,Zt,At.data)):i.texImage3D(r.TEXTURE_3D,0,Yt,At.width,At.height,At.depth,0,Ft,Zt,At.data);else if(E.isFramebufferTexture){if(Pe)if(oe)i.texStorage2D(r.TEXTURE_2D,Rt,Yt,At.width,At.height);else{let lt=At.width,vt=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,Yt,lt,vt,0,Ft,Zt,null),lt>>=1,vt>>=1}}else if(ee.length>0){if(oe&&Pe){const lt=Lt(ee[0]);i.texStorage2D(r.TEXTURE_2D,Rt,Yt,lt.width,lt.height)}for(let lt=0,vt=ee.length;lt<vt;lt++)zt=ee[lt],oe?V&&i.texSubImage2D(r.TEXTURE_2D,lt,0,0,Ft,Zt,zt):i.texImage2D(r.TEXTURE_2D,lt,Yt,Ft,Zt,zt);E.generateMipmaps=!1}else if(oe){if(Pe){const lt=Lt(At);i.texStorage2D(r.TEXTURE_2D,Rt,Yt,lt.width,lt.height)}V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ft,Zt,At)}else i.texImage2D(r.TEXTURE_2D,0,Yt,Ft,Zt,At);S(E)&&_(ft),qt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ot(U,E,Q){if(E.image.length!==6)return;const ft=ht(U,E),Et=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Q);const pt=s.get(Et);if(Et.version!==pt.__version||ft===!0){i.activeTexture(r.TEXTURE0+Q);const qt=Te.getPrimaries(Te.workingColorSpace),Ut=E.colorSpace===qa?null:Te.getPrimaries(E.colorSpace),Bt=E.colorSpace===qa||qt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,At=E.image[0]&&E.image[0].isDataTexture,Ft=[];for(let vt=0;vt<6;vt++)!ge&&!At?Ft[vt]=R(E.image[vt],!0,l.maxCubemapSize):Ft[vt]=At?E.image[vt].image:E.image[vt],Ft[vt]=xe(E,Ft[vt]);const Zt=Ft[0],Yt=u.convert(E.format,E.colorSpace),zt=u.convert(E.type),ee=D(E.internalFormat,Yt,zt,E.colorSpace),oe=E.isVideoTexture!==!0,Pe=pt.__version===void 0||ft===!0,V=Et.dataReady;let Rt=k(E,Zt);tt(r.TEXTURE_CUBE_MAP,E);let lt;if(ge){oe&&Pe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,ee,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){lt=Ft[vt].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Nt=lt[Ct];E.format!==Mi?Yt!==null?oe?V&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Nt.width,Nt.height,Yt,Nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,ee,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Nt.width,Nt.height,Yt,zt,Nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,ee,Nt.width,Nt.height,0,Yt,zt,Nt.data)}}}else{if(lt=E.mipmaps,oe&&Pe){lt.length>0&&Rt++;const vt=Lt(Ft[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,ee,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){oe?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ft[vt].width,Ft[vt].height,Yt,zt,Ft[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ee,Ft[vt].width,Ft[vt].height,0,Yt,zt,Ft[vt].data);for(let Ct=0;Ct<lt.length;Ct++){const ne=lt[Ct].image[vt].image;oe?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,ne.width,ne.height,Yt,zt,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,ee,ne.width,ne.height,0,Yt,zt,ne.data)}}else{oe?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Yt,zt,Ft[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ee,Yt,zt,Ft[vt]);for(let Ct=0;Ct<lt.length;Ct++){const Nt=lt[Ct];oe?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,Yt,zt,Nt.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,ee,Yt,zt,Nt.image[vt])}}}S(E)&&_(r.TEXTURE_CUBE_MAP),pt.__version=Et.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function St(U,E,Q,ft,Et,pt){const qt=u.convert(Q.format,Q.colorSpace),Ut=u.convert(Q.type),Bt=D(Q.internalFormat,qt,Ut,Q.colorSpace),ge=s.get(E),At=s.get(Q);if(At.__renderTarget=E,!ge.__hasExternalTextures){const Ft=Math.max(1,E.width>>pt),Zt=Math.max(1,E.height>>pt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,pt,Bt,Ft,Zt,E.depth,0,qt,Ut,null):i.texImage2D(Et,pt,Bt,Ft,Zt,0,qt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Jt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,Et,At.__webglTexture,0,Qt(E)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,Et,At.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(U,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const ft=E.depthTexture,Et=ft&&ft.isDepthTexture?ft.type:null,pt=C(E.stencilBuffer,Et),qt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=Qt(E);Jt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,pt,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,pt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qt,r.RENDERBUFFER,U)}else{const ft=E.textures;for(let Et=0;Et<ft.length;Et++){const pt=ft[Et],qt=u.convert(pt.format,pt.colorSpace),Ut=u.convert(pt.type),Bt=D(pt.internalFormat,qt,Ut,pt.colorSpace),ge=Qt(E);Q&&Jt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Bt,E.width,E.height):Jt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,Bt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_t(E.depthTexture,0);const Et=ft.__webglTexture,pt=Qt(E);if(E.depthTexture.format===Ar)Jt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0);else if(E.depthTexture.format===Nr)Jt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function It(U){const E=s.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const Et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",Et)};ft.addEventListener("dispose",Et),E.__depthDisposeCallback=Et}E.__boundDepthTexture=ft}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Pt(E.__webglFramebuffer,U)}else if(Q){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=r.createRenderbuffer(),xt(E.__webglDepthbuffer[ft],U,!1);else{const Et=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),xt(E.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Et),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,Et)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(U,E,Q){const ft=s.get(U);E!==void 0&&St(ft.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&It(U)}function Re(U){const E=U.texture,Q=s.get(U),ft=s.get(E);U.addEventListener("dispose",z);const Et=U.textures,pt=U.isWebGLCubeRenderTarget===!0,qt=Et.length>1;if(qt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=E.version,h.memory.textures++),pt){Q.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ut]=[];for(let Bt=0;Bt<E.mipmaps.length;Bt++)Q.__webglFramebuffer[Ut][Bt]=r.createFramebuffer()}else Q.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)Q.__webglFramebuffer[Ut]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(qt)for(let Ut=0,Bt=Et.length;Ut<Bt;Ut++){const ge=s.get(Et[Ut]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&Jt(U)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Et.length;Ut++){const Bt=Et[Ut];Q.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut]);const ge=u.convert(Bt.format,Bt.colorSpace),At=u.convert(Bt.type),Ft=D(Bt.internalFormat,ge,At,Bt.colorSpace,U.isXRRenderTarget===!0),Zt=Qt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Ft,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),xt(Q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),tt(r.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)St(Q.__webglFramebuffer[Ut][Bt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Bt);else St(Q.__webglFramebuffer[Ut],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(E)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ut=0,Bt=Et.length;Ut<Bt;Ut++){const ge=Et[Ut],At=s.get(ge);i.bindTexture(r.TEXTURE_2D,At.__webglTexture),tt(r.TEXTURE_2D,ge),St(Q.__webglFramebuffer,U,ge,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,0),S(ge)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ft.__webglTexture),tt(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)St(Q.__webglFramebuffer[Bt],U,E,r.COLOR_ATTACHMENT0,Ut,Bt);else St(Q.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,Ut,0);S(E)&&_(Ut),i.unbindTexture()}U.depthBuffer&&It(U)}function fe(U){const E=U.textures;for(let Q=0,ft=E.length;Q<ft;Q++){const Et=E[Q];if(S(Et)){const pt=P(U),qt=s.get(Et).__webglTexture;i.bindTexture(pt,qt),_(pt),i.unbindTexture()}}}const ke=[],q=[];function Kt(U){if(U.samples>0){if(Jt(U)===!1){const E=U.textures,Q=U.width,ft=U.height;let Et=r.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qt=s.get(U),Ut=E.length>1;if(Ut)for(let Bt=0;Bt<E.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qt.__webglColorRenderbuffer[Bt]);const ge=s.get(E[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,Q,ft,0,0,Q,ft,Et,r.NEAREST),m===!0&&(ke.length=0,q.length=0,ke.push(r.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ke.push(pt),q.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,q)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let Bt=0;Bt<E.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,qt.__webglColorRenderbuffer[Bt]);const ge=s.get(E[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Qt(U){return Math.min(l.maxSamples,U.samples)}function Jt(U){const E=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Vt(U){const E=h.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function xe(U,E){const Q=U.colorSpace,ft=U.format,Et=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Pr&&Q!==qa&&(Te.getTransfer(Q)===He?(ft!==Mi||Et!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}function Lt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=ct,this.setTexture2D=_t,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=ae,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Jt}function R1(r,e){function i(s,l=qa){let u;const h=Te.getTransfer(l);if(s===ha)return r.UNSIGNED_BYTE;if(s===Sd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Md)return r.UNSIGNED_SHORT_5_5_5_1;if(s===H0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===B0)return r.BYTE;if(s===F0)return r.SHORT;if(s===Fo)return r.UNSIGNED_SHORT;if(s===yd)return r.INT;if(s===Ts)return r.UNSIGNED_INT;if(s===ca)return r.FLOAT;if(s===Go)return r.HALF_FLOAT;if(s===G0)return r.ALPHA;if(s===V0)return r.RGB;if(s===Mi)return r.RGBA;if(s===k0)return r.LUMINANCE;if(s===X0)return r.LUMINANCE_ALPHA;if(s===Ar)return r.DEPTH_COMPONENT;if(s===Nr)return r.DEPTH_STENCIL;if(s===W0)return r.RED;if(s===Ed)return r.RED_INTEGER;if(s===q0)return r.RG;if(s===Td)return r.RG_INTEGER;if(s===bd)return r.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===He)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kh||s===Xh||s===Wh||s===qh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===kh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yh||s===jh||s===Zh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Yh||s===jh)return h===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Zh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Kh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===td)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ed)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===id)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ad)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===od)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ld)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===ud||s===fd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Uc)return h===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ud)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Y0||s===hd||s===dd||s===pd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===hd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class C1 extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ec extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w1={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const S=i.getJointPose(R,s),_=this._getHandJoint(p,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ec;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
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

}`;class L1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ai({vertexShader:D1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new qo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N1 extends Rs{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,y=null,M=null,b=null;const R=new L1,S=i.getContextAttributes();let _=null,P=null;const D=[],C=[],k=new de;let N=null;const z=new hi;z.viewport=new tn;const Y=new hi;Y.viewport=new tn;const L=[z,Y],w=new C1;let H=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ot=D[G];return ot===void 0&&(ot=new Ah,D[G]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(G){let ot=D[G];return ot===void 0&&(ot=new Ah,D[G]=ot),ot.getGripSpace()},this.getHand=function(G){let ot=D[G];return ot===void 0&&(ot=new Ah,D[G]=ot),ot.getHandSpace()};function rt(G){const ot=C.indexOf(G.inputSource);if(ot===-1)return;const St=D[ot];St!==void 0&&(St.update(G.inputSource,G.frame,p||h),St.dispatchEvent({type:G.type,data:G.inputSource}))}function gt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",_t);for(let G=0;G<D.length;G++){const ot=C[G];ot!==null&&(C[G]=null,D[G].disconnect(ot))}H=null,ct=null,R.reset(),e.setRenderTarget(_),M=null,y=null,x=null,l=null,P=null,ht.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){u=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){d=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(G){p=G},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",_t),S.xrCompatible!==!0&&await i.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(k),l.renderState.layers===void 0){const ot={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ot),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new bs(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:ha,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ot=null,St=null,xt=null;S.depth&&(xt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ot=S.stencil?Nr:Ar,St=S.stencil?Lr:Ts);const Pt={colorFormat:i.RGBA8,depthFormat:xt,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Pt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new bs(y.textureWidth,y.textureHeight,{format:Mi,type:ha,depthTexture:new lv(y.textureWidth,y.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),ht.setContext(l),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function _t(G){for(let ot=0;ot<G.removed.length;ot++){const St=G.removed[ot],xt=C.indexOf(St);xt>=0&&(C[xt]=null,D[xt].disconnect(St))}for(let ot=0;ot<G.added.length;ot++){const St=G.added[ot];let xt=C.indexOf(St);if(xt===-1){for(let It=0;It<D.length;It++)if(It>=C.length){C.push(St),xt=It;break}else if(C[It]===null){C[It]=St,xt=It;break}if(xt===-1)break}const Pt=D[xt];Pt&&Pt.connect(St)}}const I=new nt,K=new nt;function Z(G,ot,St){I.setFromMatrixPosition(ot.matrixWorld),K.setFromMatrixPosition(St.matrixWorld);const xt=I.distanceTo(K),Pt=ot.projectionMatrix.elements,It=St.projectionMatrix.elements,ae=Pt[14]/(Pt[10]-1),Re=Pt[14]/(Pt[10]+1),fe=(Pt[9]+1)/Pt[5],ke=(Pt[9]-1)/Pt[5],q=(Pt[8]-1)/Pt[0],Kt=(It[8]+1)/It[0],Qt=ae*q,Jt=ae*Kt,Vt=xt/(-q+Kt),xe=Vt*-q;if(ot.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(xe),G.translateZ(Vt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Pt[10]===-1)G.projectionMatrix.copy(ot.projectionMatrix),G.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Lt=ae+Vt,U=Re+Vt,E=Qt-xe,Q=Jt+(xt-xe),ft=fe*Re/U*Lt,Et=ke*Re/U*Lt;G.projectionMatrix.makePerspective(E,Q,ft,Et,Lt,U),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function yt(G,ot){ot===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ot.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;let ot=G.near,St=G.far;R.texture!==null&&(R.depthNear>0&&(ot=R.depthNear),R.depthFar>0&&(St=R.depthFar)),w.near=Y.near=z.near=ot,w.far=Y.far=z.far=St,(H!==w.near||ct!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,ct=w.far),z.layers.mask=G.layers.mask|2,Y.layers.mask=G.layers.mask|4,w.layers.mask=z.layers.mask|Y.layers.mask;const xt=G.parent,Pt=w.cameras;yt(w,xt);for(let It=0;It<Pt.length;It++)yt(Pt[It],xt);Pt.length===2?Z(w,z,Y):w.projectionMatrix.copy(z.projectionMatrix),Tt(G,w,xt)};function Tt(G,ot,St){St===null?G.matrix.copy(ot.matrixWorld):(G.matrix.copy(St.matrixWorld),G.matrix.invert(),G.matrix.multiply(ot.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ot.projectionMatrix),G.projectionMatrixInverse.copy(ot.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=md*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(G){m=G,y!==null&&(y.fixedFoveation=G),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=G)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let O=null;function tt(G,ot){if(g=ot.getViewerPose(p||h),b=ot,g!==null){const St=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let xt=!1;St.length!==w.cameras.length&&(w.cameras.length=0,xt=!0);for(let It=0;It<St.length;It++){const ae=St[It];let Re=null;if(M!==null)Re=M.getViewport(ae);else{const ke=x.getViewSubImage(y,ae);Re=ke.viewport,It===0&&(e.setRenderTargetTextures(P,ke.colorTexture,y.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(P))}let fe=L[It];fe===void 0&&(fe=new hi,fe.layers.enable(It),fe.viewport=new tn,L[It]=fe),fe.matrix.fromArray(ae.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ae.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Re.x,Re.y,Re.width,Re.height),It===0&&(w.matrix.copy(fe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),xt===!0&&w.cameras.push(fe)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const It=x.getDepthInformation(St[0]);It&&It.isValid&&It.texture&&R.init(e,It,l.renderState)}}for(let St=0;St<D.length;St++){const xt=C[St],Pt=D[St];xt!==null&&Pt!==void 0&&Pt.update(xt,ot,p||h)}O&&O(G,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),b=null}const ht=new ov;ht.setAnimationLoop(tt),this.setAnimationLoop=function(G){O=G},this.dispose=function(){}}}const xs=new da,O1=new en;function P1(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,iv(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,P,D,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,C)):_.isMeshMatcapMaterial?(u(S,_),b(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),R(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,P,D):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===On&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===On&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const P=e.get(_),D=P.envMap,C=P.envMapRotation;D&&(S.envMap.value=D,xs.copy(C),xs.x*=-1,xs.y*=-1,xs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),S.envMapRotation.value.setFromMatrix4(O1.makeRotationFromEuler(xs)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,P,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*P,S.scale.value=D*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,P){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const P=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function z1(r,e,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,D){const C=D.program;s.uniformBlockBinding(P,C)}function p(P,D){let C=l[P.id];C===void 0&&(b(P),C=g(P),l[P.id]=C,P.addEventListener("dispose",S));const k=D.program;s.updateUBOMapping(P,k);const N=e.render.frame;u[P.id]!==N&&(y(P),u[P.id]=N)}function g(P){const D=x();P.__bindingPointIndex=D;const C=r.createBuffer(),k=P.__size,N=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,k,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,C),C}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const D=l[P.id],C=P.uniforms,k=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let N=0,z=C.length;N<z;N++){const Y=Array.isArray(C[N])?C[N]:[C[N]];for(let L=0,w=Y.length;L<w;L++){const H=Y[L];if(M(H,N,L,k)===!0){const ct=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let gt=0;for(let _t=0;_t<rt.length;_t++){const I=rt[_t],K=R(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,ct+gt,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,gt),gt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ct,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,D,C,k){const N=P.value,z=D+"_"+C;if(k[z]===void 0)return typeof N=="number"||typeof N=="boolean"?k[z]=N:k[z]=N.clone(),!0;{const Y=k[z];if(typeof N=="number"||typeof N=="boolean"){if(Y!==N)return k[z]=N,!0}else if(Y.equals(N)===!1)return Y.copy(N),!0}return!1}function b(P){const D=P.uniforms;let C=0;const k=16;for(let z=0,Y=D.length;z<Y;z++){const L=Array.isArray(D[z])?D[z]:[D[z]];for(let w=0,H=L.length;w<H;w++){const ct=L[w],rt=Array.isArray(ct.value)?ct.value:[ct.value];for(let gt=0,_t=rt.length;gt<_t;gt++){const I=rt[gt],K=R(I),Z=C%k,yt=Z%K.boundary,Tt=Z+yt;C+=yt,Tt!==0&&k-Tt<K.storage&&(C+=k-Tt),ct.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=C,C+=K.storage}}}const N=C%k;return N>0&&(C+=k-N),P.__size=C,P.__cache={},this}function R(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function S(P){const D=P.target;D.removeEventListener("dispose",S);const C=h.indexOf(D.__bindingPointIndex);h.splice(C,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class I1{constructor(e={}){const{canvas:i=TS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let S=null,_=null;const P=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=ja,this.toneMappingExposure=1;const C=this;let k=!1,N=0,z=0,Y=null,L=-1,w=null;const H=new tn,ct=new tn;let rt=null;const gt=new De(0);let _t=0,I=i.width,K=i.height,Z=1,yt=null,Tt=null;const O=new tn(0,0,I,K),tt=new tn(0,0,I,K);let ht=!1;const G=new rv;let ot=!1,St=!1;const xt=new en,Pt=new en,It=new nt,ae=new tn,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ke(){return Y===null?Z:1}let q=s;function Kt(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xd}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),q===null){const X="webgl2";if(q=Kt(X,A),q===null)throw Kt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qt,Jt,Vt,xe,Lt,U,E,Q,ft,Et,pt,qt,Ut,Bt,ge,At,Ft,Zt,Yt,zt,ee,oe,Pe,V;function Rt(){Qt=new VT(q),Qt.init(),oe=new R1(q,Qt),Jt=new PT(q,Qt,e,oe),Vt=new T1(q,Qt),Jt.reverseDepthBuffer&&y&&Vt.buffers.depth.setReversed(!0),xe=new WT(q),Lt=new c1,U=new A1(q,Qt,Vt,Lt,Jt,oe,xe),E=new IT(C),Q=new GT(C),ft=new QS(q),Pe=new NT(q,ft),Et=new kT(q,ft,xe,Pe),pt=new YT(q,Et,ft,xe),Yt=new qT(q,Jt,U),At=new zT(Lt),qt=new l1(C,E,Q,Qt,Jt,Pe,At),Ut=new P1(C,Lt),Bt=new f1,ge=new _1(Qt),Zt=new LT(C,E,Q,Vt,pt,M,m),Ft=new M1(C,pt,Jt),V=new z1(q,xe,Jt,Vt),zt=new OT(q,Qt,xe),ee=new XT(q,Qt,xe),xe.programs=qt.programs,C.capabilities=Jt,C.extensions=Qt,C.properties=Lt,C.renderLists=Bt,C.shadowMap=Ft,C.state=Vt,C.info=xe}Rt();const lt=new N1(C,q);this.xr=lt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(I,K,!1))},this.getSize=function(A){return A.set(I,K)},this.setSize=function(A,X,at=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,K=X,i.width=Math.floor(A*Z),i.height=Math.floor(X*Z),at===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(I*Z,K*Z).floor()},this.setDrawingBufferSize=function(A,X,at){I=A,K=X,Z=at,i.width=Math.floor(A*at),i.height=Math.floor(X*at),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,X,at,it){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,X,at,it),Vt.viewport(H.copy(O).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(tt)},this.setScissor=function(A,X,at,it){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,X,at,it),Vt.scissor(ct.copy(tt).multiplyScalar(Z).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){Vt.setScissorTest(ht=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){Tt=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(A=!0,X=!0,at=!0){let it=0;if(A){let W=!1;if(Y!==null){const bt=Y.texture.format;W=bt===bd||bt===Td||bt===Ed}if(W){const bt=Y.texture.type,wt=bt===ha||bt===Ts||bt===Fo||bt===Lr||bt===Sd||bt===Md,Dt=Zt.getClearColor(),kt=Zt.getClearAlpha(),ie=Dt.r,te=Dt.g,Ht=Dt.b;wt?(b[0]=ie,b[1]=te,b[2]=Ht,b[3]=kt,q.clearBufferuiv(q.COLOR,0,b)):(R[0]=ie,R[1]=te,R[2]=Ht,R[3]=kt,q.clearBufferiv(q.COLOR,0,R))}else it|=q.COLOR_BUFFER_BIT}X&&(it|=q.DEPTH_BUFFER_BIT),at&&(it|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Bt.dispose(),ge.dispose(),Lt.dispose(),E.dispose(),Q.dispose(),pt.dispose(),Pe.dispose(),V.dispose(),qt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Ir),lt.removeEventListener("sessionend",Br),Ri.stop()};function vt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=xe.autoReset,X=Ft.enabled,at=Ft.autoUpdate,it=Ft.needsUpdate,W=Ft.type;Rt(),xe.autoReset=A,Ft.enabled=X,Ft.autoUpdate=at,Ft.needsUpdate=it,Ft.type=W}function Nt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ne(A){const X=A.target;X.removeEventListener("dispose",ne),Ye(X)}function Ye(A){ln(A),Lt.remove(A)}function ln(A){const X=Lt.get(A).programs;X!==void 0&&(X.forEach(function(at){qt.releaseProgram(at)}),A.isShaderMaterial&&qt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,at,it,W,bt){X===null&&(X=Re);const wt=W.isMesh&&W.matrixWorld.determinant()<0,Dt=Hr(A,X,at,it,W);Vt.setMaterial(it,wt);let kt=at.index,ie=1;if(it.wireframe===!0){if(kt=Et.getWireframeAttribute(at),kt===void 0)return;ie=2}const te=at.drawRange,Ht=at.attributes.position;let Me=te.start*ie,Ue=(te.start+te.count)*ie;bt!==null&&(Me=Math.max(Me,bt.start*ie),Ue=Math.min(Ue,(bt.start+bt.count)*ie)),kt!==null?(Me=Math.max(Me,0),Ue=Math.min(Ue,kt.count)):Ht!=null&&(Me=Math.max(Me,0),Ue=Math.min(Ue,Ht.count));const ze=Ue-Me;if(ze<0||ze===1/0)return;Pe.setup(W,it,Dt,at,kt);let bn,ye=zt;if(kt!==null&&(bn=ft.get(kt),ye=ee,ye.setIndex(bn)),W.isMesh)it.wireframe===!0?(Vt.setLineWidth(it.wireframeLinewidth*ke()),ye.setMode(q.LINES)):ye.setMode(q.TRIANGLES);else if(W.isLine){let Xt=it.linewidth;Xt===void 0&&(Xt=1),Vt.setLineWidth(Xt*ke()),W.isLineSegments?ye.setMode(q.LINES):W.isLineLoop?ye.setMode(q.LINE_LOOP):ye.setMode(q.LINE_STRIP)}else W.isPoints?ye.setMode(q.POINTS):W.isSprite&&ye.setMode(q.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ye.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xt=W._multiDrawStarts,cn=W._multiDrawCounts,re=W._multiDrawCount,Pn=kt?ft.get(kt).bytesPerElement:1,pa=Lt.get(it).currentProgram.getUniforms();for(let yn=0;yn<re;yn++)pa.setValue(q,"_gl_DrawID",yn),ye.render(Xt[yn]/Pn,cn[yn])}else if(W.isInstancedMesh)ye.renderInstances(Me,ze,W.count);else if(at.isInstancedBufferGeometry){const Xt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,cn=Math.min(at.instanceCount,Xt);ye.renderInstances(Me,ze,cn)}else ye.render(Me,ze)};function Ee(A,X,at){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,Ze(A,X,at),A.side=Za,A.needsUpdate=!0,Ze(A,X,at),A.side=Oi):Ze(A,X,at)}this.compile=function(A,X,at=null){at===null&&(at=A),_=ge.get(at),_.init(X),D.push(_),at.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),A!==at&&A.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const it=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const bt=W.material;if(bt)if(Array.isArray(bt))for(let wt=0;wt<bt.length;wt++){const Dt=bt[wt];Ee(Dt,at,W),it.add(Dt)}else Ee(bt,at,W),it.add(bt)}),D.pop(),_=null,it},this.compileAsync=function(A,X,at=null){const it=this.compile(A,X,at);return new Promise(W=>{function bt(){if(it.forEach(function(wt){Lt.get(wt).currentProgram.isReady()&&it.delete(wt)}),it.size===0){W(A);return}setTimeout(bt,10)}Qt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let vn=null;function di(A){vn&&vn(A)}function Ir(){Ri.stop()}function Br(){Ri.start()}const Ri=new ov;Ri.setAnimationLoop(di),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(A){vn=A,lt.setAnimationLoop(A),A===null?Ri.stop():Ri.start()},lt.addEventListener("sessionstart",Ir),lt.addEventListener("sessionend",Br),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(X),X=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,Y),_=ge.get(A,D.length),_.init(X),D.push(_),Pt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),G.setFromProjectionMatrix(Pt),St=this.localClippingEnabled,ot=At.init(this.clippingPlanes,St),S=Bt.get(A,P.length),S.init(),P.push(S),lt.enabled===!0&&lt.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Ka(bt,X,-1/0,C.sortObjects)}Ka(A,X,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(yt,Tt),fe=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,fe&&Zt.addToRenderList(S,A),this.info.render.frame++,ot===!0&&At.beginShadows();const at=_.state.shadowsArray;Ft.render(at,A,X),ot===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=S.opaque,W=S.transmissive;if(_.setupLights(),X.isArrayCamera){const bt=X.cameras;if(W.length>0)for(let wt=0,Dt=bt.length;wt<Dt;wt++){const kt=bt[wt];Fr(it,W,A,kt)}fe&&Zt.render(A);for(let wt=0,Dt=bt.length;wt<Dt;wt++){const kt=bt[wt];Cs(S,A,kt,kt.viewport)}}else W.length>0&&Fr(it,W,A,X),fe&&Zt.render(A),Cs(S,A,X);Y!==null&&(U.updateMultisampleRenderTarget(Y),U.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(C,A,X),Pe.resetDefaultState(),L=-1,w=null,D.pop(),D.length>0?(_=D[D.length-1],ot===!0&&At.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Ka(A,X,at,it){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){it&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pt);const wt=pt.update(A),Dt=A.material;Dt.visible&&S.push(A,wt,Dt,at,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){const wt=pt.update(A),Dt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ae.copy(wt.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(Pt)),Array.isArray(Dt)){const kt=wt.groups;for(let ie=0,te=kt.length;ie<te;ie++){const Ht=kt[ie],Me=Dt[Ht.materialIndex];Me&&Me.visible&&S.push(A,wt,Me,at,ae.z,Ht)}}else Dt.visible&&S.push(A,wt,Dt,at,ae.z,null)}}const bt=A.children;for(let wt=0,Dt=bt.length;wt<Dt;wt++)Ka(bt[wt],X,at,it)}function Cs(A,X,at,it){const W=A.opaque,bt=A.transmissive,wt=A.transparent;_.setupLightsView(at),ot===!0&&At.setGlobalState(C.clippingPlanes,at),it&&Vt.viewport(H.copy(it)),W.length>0&&Qa(W,X,at),bt.length>0&&Qa(bt,X,at),wt.length>0&&Qa(wt,X,at),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Fr(A,X,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[it.id]===void 0&&(_.state.transmissionRenderTarget[it.id]=new bs(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Go:ha,minFilter:Es,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const bt=_.state.transmissionRenderTarget[it.id],wt=it.viewport||H;bt.setSize(wt.z,wt.w);const Dt=C.getRenderTarget();C.setRenderTarget(bt),C.getClearColor(gt),_t=C.getClearAlpha(),_t<1&&C.setClearColor(16777215,.5),C.clear(),fe&&Zt.render(at);const kt=C.toneMapping;C.toneMapping=ja;const ie=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),_.setupLightsView(it),ot===!0&&At.setGlobalState(C.clippingPlanes,it),Qa(A,at,it),U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ht=0,Me=X.length;Ht<Me;Ht++){const Ue=X[Ht],ze=Ue.object,bn=Ue.geometry,ye=Ue.material,Xt=Ue.group;if(ye.side===Oi&&ze.layers.test(it.layers)){const cn=ye.side;ye.side=On,ye.needsUpdate=!0,pi(ze,at,it,bn,ye,Xt),ye.side=cn,ye.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt))}C.setRenderTarget(Dt),C.setClearColor(gt,_t),ie!==void 0&&(it.viewport=ie),C.toneMapping=kt}function Qa(A,X,at){const it=X.isScene===!0?X.overrideMaterial:null;for(let W=0,bt=A.length;W<bt;W++){const wt=A[W],Dt=wt.object,kt=wt.geometry,ie=it===null?wt.material:it,te=wt.group;Dt.layers.test(at.layers)&&pi(Dt,X,at,kt,ie,te)}}function pi(A,X,at,it,W,bt){A.onBeforeRender(C,X,at,it,W,bt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,X,at,it,A,bt),W.transparent===!0&&W.side===Oi&&W.forceSinglePass===!1?(W.side=On,W.needsUpdate=!0,C.renderBufferDirect(at,X,it,W,A,bt),W.side=Za,W.needsUpdate=!0,C.renderBufferDirect(at,X,it,W,A,bt),W.side=Oi):C.renderBufferDirect(at,X,it,W,A,bt),A.onAfterRender(C,X,at,it,W,bt)}function Ze(A,X,at){X.isScene!==!0&&(X=Re);const it=Lt.get(A),W=_.state.lights,bt=_.state.shadowsArray,wt=W.state.version,Dt=qt.getParameters(A,W.state,bt,X,at),kt=qt.getProgramCacheKey(Dt);let ie=it.programs;it.environment=A.isMeshStandardMaterial?X.environment:null,it.fog=X.fog,it.envMap=(A.isMeshStandardMaterial?Q:E).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,ie===void 0&&(A.addEventListener("dispose",ne),ie=new Map,it.programs=ie);let te=ie.get(kt);if(te!==void 0){if(it.currentProgram===te&&it.lightsStateVersion===wt)return Bi(A,Dt),te}else Dt.uniforms=qt.getUniforms(A),A.onBeforeCompile(Dt,C),te=qt.acquireProgram(Dt,kt),ie.set(kt,te),it.uniforms=Dt.uniforms;const Ht=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=At.uniform),Bi(A,Dt),it.needsLights=Hc(A),it.lightsStateVersion=wt,it.needsLights&&(Ht.ambientLightColor.value=W.state.ambient,Ht.lightProbe.value=W.state.probe,Ht.directionalLights.value=W.state.directional,Ht.directionalLightShadows.value=W.state.directionalShadow,Ht.spotLights.value=W.state.spot,Ht.spotLightShadows.value=W.state.spotShadow,Ht.rectAreaLights.value=W.state.rectArea,Ht.ltc_1.value=W.state.rectAreaLTC1,Ht.ltc_2.value=W.state.rectAreaLTC2,Ht.pointLights.value=W.state.point,Ht.pointLightShadows.value=W.state.pointShadow,Ht.hemisphereLights.value=W.state.hemi,Ht.directionalShadowMap.value=W.state.directionalShadowMap,Ht.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ht.spotShadowMap.value=W.state.spotShadowMap,Ht.spotLightMatrix.value=W.state.spotLightMatrix,Ht.spotLightMap.value=W.state.spotLightMap,Ht.pointShadowMap.value=W.state.pointShadowMap,Ht.pointShadowMatrix.value=W.state.pointShadowMatrix),it.currentProgram=te,it.uniformsList=null,te}function xn(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Nc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Bi(A,X){const at=Lt.get(A);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function Hr(A,X,at,it,W){X.isScene!==!0&&(X=Re),U.resetTextureUnits();const bt=X.fog,wt=it.isMeshStandardMaterial?X.environment:null,Dt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Pr,kt=(it.isMeshStandardMaterial?Q:E).get(it.envMap||wt),ie=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,te=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ht=!!at.morphAttributes.position,Me=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let ze=ja;it.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ze=C.toneMapping);const bn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ye=bn!==void 0?bn.length:0,Xt=Lt.get(it),cn=_.state.lights;if(ot===!0&&(St===!0||A!==w)){const An=A===w&&it.id===L;At.setState(it,A,An)}let re=!1;it.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==cn.state.version||Xt.outputColorSpace!==Dt||W.isBatchedMesh&&Xt.batching===!1||!W.isBatchedMesh&&Xt.batching===!0||W.isBatchedMesh&&Xt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xt.instancing===!1||!W.isInstancedMesh&&Xt.instancing===!0||W.isSkinnedMesh&&Xt.skinning===!1||!W.isSkinnedMesh&&Xt.skinning===!0||W.isInstancedMesh&&Xt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xt.instancingMorph===!1&&W.morphTexture!==null||Xt.envMap!==kt||it.fog===!0&&Xt.fog!==bt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==At.numPlanes||Xt.numIntersection!==At.numIntersection)||Xt.vertexAlphas!==ie||Xt.vertexTangents!==te||Xt.morphTargets!==Ht||Xt.morphNormals!==Me||Xt.morphColors!==Ue||Xt.toneMapping!==ze||Xt.morphTargetsCount!==ye)&&(re=!0):(re=!0,Xt.__version=it.version);let Pn=Xt.currentProgram;re===!0&&(Pn=Ze(it,X,W));let pa=!1,yn=!1,ma=!1;const we=Pn.getUniforms(),ti=Xt.uniforms;if(Vt.useProgram(Pn.program)&&(pa=!0,yn=!0,ma=!0),it.id!==L&&(L=it.id,yn=!0),pa||w!==A){Vt.buffers.depth.getReversed()?(xt.copy(A.projectionMatrix),AS(xt),RS(xt),we.setValue(q,"projectionMatrix",xt)):we.setValue(q,"projectionMatrix",A.projectionMatrix),we.setValue(q,"viewMatrix",A.matrixWorldInverse);const mi=we.map.cameraPosition;mi!==void 0&&mi.setValue(q,It.setFromMatrixPosition(A.matrixWorld)),Jt.logarithmicDepthBuffer&&we.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&we.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,yn=!0,ma=!0)}if(W.isSkinnedMesh){we.setOptional(q,W,"bindMatrix"),we.setOptional(q,W,"bindMatrixInverse");const An=W.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),we.setValue(q,"boneTexture",An.boneTexture,U))}W.isBatchedMesh&&(we.setOptional(q,W,"batchingTexture"),we.setValue(q,"batchingTexture",W._matricesTexture,U),we.setOptional(q,W,"batchingIdTexture"),we.setValue(q,"batchingIdTexture",W._indirectTexture,U),we.setOptional(q,W,"batchingColorTexture"),W._colorsTexture!==null&&we.setValue(q,"batchingColorTexture",W._colorsTexture,U));const mn=at.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Yt.update(W,at,Pn),(yn||Xt.receiveShadow!==W.receiveShadow)&&(Xt.receiveShadow=W.receiveShadow,we.setValue(q,"receiveShadow",W.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ti.envMap.value=kt,ti.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&X.environment!==null&&(ti.envMapIntensity.value=X.environmentIntensity),yn&&(we.setValue(q,"toneMappingExposure",C.toneMappingExposure),Xt.needsLights&&Fc(ti,ma),bt&&it.fog===!0&&Ut.refreshFogUniforms(ti,bt),Ut.refreshMaterialUniforms(ti,it,Z,K,_.state.transmissionRenderTarget[A.id]),Nc.upload(q,xn(Xt),ti,U)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Nc.upload(q,xn(Xt),ti,U),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&we.setValue(q,"center",W.center),we.setValue(q,"modelViewMatrix",W.modelViewMatrix),we.setValue(q,"normalMatrix",W.normalMatrix),we.setValue(q,"modelMatrix",W.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const An=it.uniformsGroups;for(let mi=0,ei=An.length;mi<ei;mi++){const Fi=An[mi];V.update(Fi,Pn),V.bind(Fi,Pn)}}return Pn}function Fc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Hc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,X,at){Lt.get(A.texture).__webglTexture=X,Lt.get(A.depthTexture).__webglTexture=at;const it=Lt.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=at===void 0,it.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const at=Lt.get(A);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,at=0){Y=A,N=X,z=at;let it=!0,W=null,bt=!1,wt=!1;if(A){const kt=Lt.get(A);if(kt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(q.FRAMEBUFFER,null),it=!1;else if(kt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(kt.__hasExternalTextures)U.rebindTextures(A,Lt.get(A.texture).__webglTexture,Lt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ht=A.depthTexture;if(kt.__boundDepthTexture!==Ht){if(Ht!==null&&Lt.has(Ht)&&(A.width!==Ht.image.width||A.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const ie=A.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(wt=!0);const te=Lt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[X])?W=te[X][at]:W=te[X],bt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?W=Lt.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?W=te[at]:W=te,H.copy(A.viewport),ct.copy(A.scissor),rt=A.scissorTest}else H.copy(O).multiplyScalar(Z).floor(),ct.copy(tt).multiplyScalar(Z).floor(),rt=ht;if(Vt.bindFramebuffer(q.FRAMEBUFFER,W)&&it&&Vt.drawBuffers(A,W),Vt.viewport(H),Vt.scissor(ct),Vt.setScissorTest(rt),bt){const kt=Lt.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,kt.__webglTexture,at)}else if(wt){const kt=Lt.get(A.texture),ie=X||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,kt.__webglTexture,at||0,ie)}L=-1},this.readRenderTargetPixels=function(A,X,at,it,W,bt,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Vt.bindFramebuffer(q.FRAMEBUFFER,Dt);try{const kt=A.texture,ie=kt.format,te=kt.type;if(!Jt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-it&&at>=0&&at<=A.height-W&&q.readPixels(X,at,it,W,oe.convert(ie),oe.convert(te),bt)}finally{const kt=Y!==null?Lt.get(Y).__webglFramebuffer:null;Vt.bindFramebuffer(q.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,X,at,it,W,bt,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const kt=A.texture,ie=kt.format,te=kt.type;if(!Jt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-it&&at>=0&&at<=A.height-W){Vt.bindFramebuffer(q.FRAMEBUFFER,Dt);const Ht=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ht),q.bufferData(q.PIXEL_PACK_BUFFER,bt.byteLength,q.STREAM_READ),q.readPixels(X,at,it,W,oe.convert(ie),oe.convert(te),0);const Me=Y!==null?Lt.get(Y).__webglFramebuffer:null;Vt.bindFramebuffer(q.FRAMEBUFFER,Me);const Ue=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await bS(q,Ue,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ht),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,bt),q.deleteBuffer(Ht),q.deleteSync(Ue),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,at=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const it=Math.pow(2,-at),W=Math.floor(A.image.width*it),bt=Math.floor(A.image.height*it),wt=X!==null?X.x:0,Dt=X!==null?X.y:0;U.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,at,0,0,wt,Dt,W,bt),Vt.unbindTexture()},this.copyTextureToTexture=function(A,X,at=null,it=null,W=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],X=arguments[2],W=arguments[3]||0,at=null);let bt,wt,Dt,kt,ie,te,Ht,Me,Ue;const ze=A.isCompressedTexture?A.mipmaps[W]:A.image;at!==null?(bt=at.max.x-at.min.x,wt=at.max.y-at.min.y,Dt=at.isBox3?at.max.z-at.min.z:1,kt=at.min.x,ie=at.min.y,te=at.isBox3?at.min.z:0):(bt=ze.width,wt=ze.height,Dt=ze.depth||1,kt=0,ie=0,te=0),it!==null?(Ht=it.x,Me=it.y,Ue=it.z):(Ht=0,Me=0,Ue=0);const bn=oe.convert(X.format),ye=oe.convert(X.type);let Xt;X.isData3DTexture?(U.setTexture3D(X,0),Xt=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(U.setTexture2DArray(X,0),Xt=q.TEXTURE_2D_ARRAY):(U.setTexture2D(X,0),Xt=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const cn=q.getParameter(q.UNPACK_ROW_LENGTH),re=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Pn=q.getParameter(q.UNPACK_SKIP_PIXELS),pa=q.getParameter(q.UNPACK_SKIP_ROWS),yn=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,ze.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ze.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,kt),q.pixelStorei(q.UNPACK_SKIP_ROWS,ie),q.pixelStorei(q.UNPACK_SKIP_IMAGES,te);const ma=A.isDataArrayTexture||A.isData3DTexture,we=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const ti=Lt.get(A),mn=Lt.get(X),An=Lt.get(ti.__renderTarget),mi=Lt.get(mn.__renderTarget);Vt.bindFramebuffer(q.READ_FRAMEBUFFER,An.__webglFramebuffer),Vt.bindFramebuffer(q.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let ei=0;ei<Dt;ei++)ma&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Lt.get(A).__webglTexture,W,te+ei),A.isDepthTexture?(we&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Lt.get(X).__webglTexture,W,Ue+ei),q.blitFramebuffer(kt,ie,bt,wt,Ht,Me,bt,wt,q.DEPTH_BUFFER_BIT,q.NEAREST)):we?q.copyTexSubImage3D(Xt,W,Ht,Me,Ue+ei,kt,ie,bt,wt):q.copyTexSubImage2D(Xt,W,Ht,Me,Ue+ei,kt,ie,bt,wt);Vt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else we?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Xt,W,Ht,Me,Ue,bt,wt,Dt,bn,ye,ze.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(Xt,W,Ht,Me,Ue,bt,wt,Dt,bn,ze.data):q.texSubImage3D(Xt,W,Ht,Me,Ue,bt,wt,Dt,bn,ye,ze):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,W,Ht,Me,bt,wt,bn,ye,ze.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,W,Ht,Me,ze.width,ze.height,bn,ze.data):q.texSubImage2D(q.TEXTURE_2D,W,Ht,Me,bt,wt,bn,ye,ze);q.pixelStorei(q.UNPACK_ROW_LENGTH,cn),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,re),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Pn),q.pixelStorei(q.UNPACK_SKIP_ROWS,pa),q.pixelStorei(q.UNPACK_SKIP_IMAGES,yn),W===0&&X.generateMipmaps&&q.generateMipmap(Xt),Vt.unbindTexture()},this.copyTextureToTexture3D=function(A,X,at=null,it=null,W=0){return A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,it=arguments[1]||null,A=arguments[2],X=arguments[3],W=arguments[4]||0),Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,at,it,W)},this.initRenderTarget=function(A){Lt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Vt.unbindTexture()},this.resetState=function(){N=0,z=0,Y=null,Vt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}class B1 extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class dv extends Xo{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const y0=new en,_d=new Ad,Tc=new Ic,bc=new nt;class F1 extends Xn{constructor(e=new Ii,i=new dv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=u,e.ray.intersectsSphere(Tc)===!1)return;y0.copy(l).invert(),_d.copy(e.ray).applyMatrix4(y0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,x=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=y,R=M;b<R;b++){const S=p.getX(b);bc.fromBufferAttribute(x,S),S0(bc,S,m,l,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(x.count,h.start+h.count);for(let b=y,R=M;b<R;b++)bc.fromBufferAttribute(x,b),S0(bc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function S0(r,e,i,s,l,u,h){const d=_d.distanceSqToPoint(r);if(d<i){const m=new nt;_d.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class pv extends hn{constructor(e,i,s,l,u,h,d,m,p){super(e,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cd extends Ii{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],x=new nt,y=new nt,M=[],b=[],R=[],S=[];for(let _=0;_<=s;_++){const P=[],D=_/s;let C=0;_===0&&h===0?C=.5/i:_===s&&m===Math.PI&&(C=-.5/i);for(let k=0;k<=i;k++){const N=k/i;x.x=-e*Math.cos(l+N*u)*Math.sin(h+D*d),x.y=e*Math.cos(h+D*d),x.z=e*Math.sin(l+N*u)*Math.sin(h+D*d),b.push(x.x,x.y,x.z),y.copy(x).normalize(),R.push(y.x,y.y,y.z),S.push(N+C,1-D),P.push(p++)}g.push(P)}for(let _=0;_<s;_++)for(let P=0;P<i;P++){const D=g[_][P+1],C=g[_][P],k=g[_+1][P],N=g[_+1][P+1];(_!==0||h>0)&&M.push(D,C,N),(_!==s-1||m<Math.PI)&&M.push(C,k,N)}this.setIndex(M),this.setAttribute("position",new zi(b,3)),this.setAttribute("normal",new zi(R,3)),this.setAttribute("uv",new zi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const M0={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class H1{constructor(e,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,y=p.length;x<y;x+=2){const M=p[x],b=p[x+1];if(M.global&&(M.lastIndex=0),M.test(g))return b}return null}}}const G1=new H1;class wd{constructor(e){this.manager=e!==void 0?e:G1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wd.DEFAULT_MATERIAL_NAME="__DEFAULT";class V1 extends wd{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=M0.get(e);if(h!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0),h;const d=Ho("img");function m(){g(),M0.add(e,this),i&&i(this),u.manager.itemEnd(e)}function p(x){g(),l&&l(x),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class k1 extends wd{constructor(e){super(e)}load(e,i,s,l){const u=new hn,h=new V1(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class E0{constructor(e=1,i=0,s=0){return this.radius=e,this.phi=i,this.theta=s,this}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class X1 extends Rs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);const T0={type:"change"},Dd={type:"start"},mv={type:"end"},Ac=new Ad,b0=new Wa,W1=Math.cos(70*ES.DEG2RAD),fn=new nt,kn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6;class q1 extends X1{constructor(e,i=null){super(e,i),this.state=Ge.NONE,this.enabled=!0,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new As,this._lastTargetPosition=new nt,this._quat=new As().setFromUnitVectors(e.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new E0,this._sphericalDelta=new E0,this._scale=1,this._panOffset=new nt,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new nt,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=j1.bind(this),this._onPointerDown=Y1.bind(this),this._onPointerUp=Z1.bind(this),this._onContextMenu=nA.bind(this),this._onMouseWheel=J1.bind(this),this._onKeyDown=$1.bind(this),this._onTouchStart=tA.bind(this),this._onTouchMove=eA.bind(this),this._onMouseDown=K1.bind(this),this._onMouseMove=Q1.bind(this),this._interceptControlDown=iA.bind(this),this._interceptControlUp=aA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(T0),this.update(),this.state=Ge.NONE}update(e=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<W1?this.object.lookAt(this.target):(b0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(b0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(T0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let u=fn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new de,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Y1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function j1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Z1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mv),this.state=Ge.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function K1(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ge.DOLLY;break;case Tr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ge.ROTATE}break;case Tr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Dd)}function Q1(r){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function J1(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(r.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(mv))}function $1(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function tA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ge.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ge.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Dd)}function eA(r){switch(this._trackPointer(r),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ge.NONE}}function nA(r){this.enabled!==!1&&r.preventDefault()}function iA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const sA={STANDARD:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},HOT:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"Humanitarian OSM Team",url:"https://www.hotosm.org/"}]},OPENTOPOMAP:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"SRTM",url:"https://www2.jpl.nasa.gov/srtm/"},{text:"OpenTopoMap",url:"https://opentopomap.org/"}]},CARTODARK:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"CARTO",url:"https://carto.com/attributions"}]},CARTOVOYAGER:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"CARTO",url:"https://carto.com/attributions"}]},BLUE_MARBLE:{text:"Imagery: ",links:[{text:"NASA Blue Marble",url:"https://visibleearth.nasa.gov/collection/1484/blue-marble"},{text:"NASA Goddard Space Flight Center",url:"https://www.nasa.gov/goddard"}]},NASA_VIIRS:{text:"Imagery: ",links:[{text:"NASA EOSDIS GIBS",url:"https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs"},{text:"VIIRS",url:"https://www.nasa.gov/mission_pages/NPP/mission_overview/index.html"}]}},rA={HIKING_TRAILS:{text:"Overlay: © ",links:[{text:"Waymarked Trails",url:"https://waymarkedtrails.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},CYCLING_ROUTES:{text:"Overlay: © ",links:[{text:"Waymarked Trails",url:"https://waymarkedtrails.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},MTB_TRAILS:{text:"Overlay: © ",links:[{text:"Waymarked Trails",url:"https://waymarkedtrails.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},OPEN_RAILWAY_MAP:{text:"Overlay: © ",links:[{text:"OpenRailwayMap",url:"https://www.openrailwaymap.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},PLACE_LABELS:{text:"Overlay: © ",links:[{text:"CARTO",url:"https://carto.com/attributions"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]}},oA=({mapLayer:r,overlayLayer:e,sidebarOffset:i})=>{const s=sA[r],l=e!=="NONE"?rA[e]:null;return Mt.jsx("div",{className:"fixed bottom-4 z-50 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",style:{right:`${i+16}px`},children:Mt.jsxs("div",{className:"flex flex-col gap-1 text-[9px] font-mono text-zinc-300 tracking-wide",children:[Mt.jsxs("div",{className:"flex items-center",children:[Mt.jsx("span",{children:s.text}),s.links.map((u,h)=>Mt.jsxs(wh.Fragment,{children:[h>0&&Mt.jsx("span",{className:"mx-1",children:"|"}),Mt.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white hover:underline transition-colors",children:u.text})]},u.url))]}),l&&Mt.jsxs("div",{className:"flex items-center",children:[Mt.jsx("span",{children:l.text}),l.links.map((u,h)=>Mt.jsxs(wh.Fragment,{children:[h>0&&Mt.jsx("span",{className:"mx-1",children:"|"}),Mt.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white hover:underline transition-colors",children:u.text})]},u.url))]})]})})},lA={STANDARD:{url:"https://tile.openstreetmap.org",format:"xyz"},HOT:{url:"https://a.tile.openstreetmap.fr/hot",format:"xyz"},OPENTOPOMAP:{url:"https://a.tile.opentopomap.org",format:"xyz"},CARTODARK:{url:"https://a.basemaps.cartocdn.com/dark_all",format:"xyz"},CARTOVOYAGER:{url:"https://a.basemaps.cartocdn.com/rastertiles/voyager",format:"xyz"},BLUE_MARBLE:{url:"/Projection-lab/blue-marble.jpg",format:"static"},NASA_VIIRS:{url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default",format:"xyz"}},cA={HIKING_TRAILS:{url:"https://tile.waymarkedtrails.org/hiking",format:"xyz"},CYCLING_ROUTES:{url:"https://tile.waymarkedtrails.org/cycling",format:"xyz"},MTB_TRAILS:{url:"https://tile.waymarkedtrails.org/mtb",format:"xyz"},OPEN_RAILWAY_MAP:{url:"https://tiles.openrailwaymap.org/standard",format:"xyz"},PLACE_LABELS:{url:"https://a.basemaps.cartocdn.com/dark_only_labels",format:"xyz"}};async function uA(r){return console.log(`Loading static texture from: ${r}`),new Promise((e,i)=>{new k1().load(r,l=>{console.log("✓ Static texture loaded successfully"),l.wrapS=Ur,l.wrapT=Pi,l.minFilter=Dn,l.magFilter=Dn,l.anisotropy=16,e(l)},l=>{if(l.lengthComputable){const u=(l.loaded/l.total*100).toFixed(0);console.log(`Loading texture: ${u}%`)}},l=>{console.error("✗ Failed to load static texture:",l),i(l)})})}async function A0(r,e,i=!1){const l=Math.pow(2,e);console.log(`Creating stitched texture with ${l}x${l} tiles at zoom ${e}, overlay: ${i}`);const u=document.createElement("canvas");u.width=l*256,u.height=l*256;const h=u.getContext("2d",{alpha:!0});if(!h)throw new Error("Could not create canvas context");if(i)h.clearRect(0,0,u.width,u.height);else{const x=h.createLinearGradient(0,0,0,u.height);x.addColorStop(0,"#1a3a52"),x.addColorStop(1,"#0d1b2a"),h.fillStyle=x,h.fillRect(0,0,u.width,u.height)}const d=[];let m=0;const p=[];for(let x=0;x<l;x++)for(let y=0;y<l;y++){const M=r(x,y,e),b=new Promise(R=>{const S=new Image;S.crossOrigin="anonymous";const _=setTimeout(()=>{console.warn(`⏱️ Tile request timeout: ${M}`),p.push(M),R()},5e3);S.onload=()=>{clearTimeout(_),m++,h.drawImage(S,x*256,y*256,256,256),console.log(`✓ Loaded tile ${x},${y}`),R()},S.onerror=()=>{clearTimeout(_),p.push(M),console.warn(`✗ Failed to load tile: ${M}`),R()},S.src=M});d.push(b)}await Promise.all(d),console.log(`Texture complete. Loaded ${m}/${d.length} tiles`),p.length>0&&console.warn(`Failed URLs (${p.length}): ${p.slice(0,2).join(", ")}${p.length>2?" ...":""}`),!i&&m===0&&(h.fillStyle="rgba(255, 100, 100, 0.3)",h.font="bold 50px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText("⚠️ TILES FAILED",u.width/2,u.height/2-30),h.font="20px Arial",h.fillText("Check console",u.width/2,u.height/2+30));const g=new pv(u);return g.wrapS=Ur,g.wrapT=Pi,g.minFilter=Dn,g.magFilter=Dn,g.anisotropy=16,g.needsUpdate=!0,g}const Li=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,fA=({settings:r,sidebarOffset:e})=>{const i=Oe.useRef(null),s=Oe.useRef(null),l=Oe.useRef(null),u=Oe.useRef(r),h=Oe.useRef(e),d=Oe.useRef(e),m=Oe.useRef(0),p=Oe.useRef(null),g=Oe.useRef({torus:0,sphere:0,cylinder:0,cone:0,disc:0,mercator:0,gallPeters:0,sinusoidal:0,robinson:0,infinite:0}),x=Oe.useRef("SPHERE"),[y,M]=Oe.useState(!0),b=Oe.useRef([]),R=Oe.useRef(r.viewMode==="SPHERE"?1:0),S=Oe.useRef(!0),_=()=>{const P=document.createElement("canvas");P.width=512,P.height=512;const D=P.getContext("2d");if(!D)throw new Error("Could not create canvas context");D.fillStyle="#1a3a52",D.fillRect(0,0,512,512);const C=D.createLinearGradient(0,0,512,512);C.addColorStop(0,"#0d1b2a"),C.addColorStop(1,"#1a3a52"),D.fillStyle=C,D.fillRect(0,0,512,512),D.strokeStyle="#2a5a7a",D.lineWidth=2;for(let N=0;N<=8;N++){const z=N/8*512;D.beginPath(),D.moveTo(z,0),D.lineTo(z,512),D.stroke(),D.beginPath(),D.moveTo(0,z),D.lineTo(512,z),D.stroke()}D.fillStyle="#4a9aca",D.font="bold 24px monospace",D.textAlign="center",D.textBaseline="middle",D.fillText("Loading Tiles...",256,256);const k=new pv(P);return k.wrapS=Ur,k.wrapT=Pi,k.minFilter=Dn,k.magFilter=Dn,k};return Oe.useEffect(()=>{u.current=r,h.current=e,console.log("Settings updated:",r.viewMode,r.mapLayer)},[r,e]),Oe.useEffect(()=>{M(!0);const P=lA[r.mapLayer];if(P.format==="static"){console.log("Loading static texture for layer:",r.mapLayer),uA(P.url).then(C=>{if(console.log("Static texture loaded successfully"),l.current){const k=l.current.uniforms.uTexture.value;k instanceof hn&&k.image&&k.dispose(),l.current.uniforms.uTexture.value=C,l.current.uniforms.uUseEquirectangular.value=1}M(!1)}).catch(C=>{console.error("Failed to load static texture:",C),M(!1)});return}const D=(C,k,N)=>{if(r.mapLayer==="NASA_VIIRS"){const Y=new Date;Y.setDate(Y.getDate()-1);const L=Y.toISOString().split("T")[0];return`${P.url}/${L}/GoogleMapsCompatible_Level9/${N}/${k}/${C}.jpg`}return`${P.url}/${N}/${C}/${k}.png`};console.log("Starting texture load for layer:",r.mapLayer),console.log("Sample URL:",D(0,0,4)),A0(D,4).then(C=>{if(console.log("Texture loaded successfully"),l.current){const k=l.current.uniforms.uTexture.value;k instanceof hn&&k.image&&k.dispose(),l.current.uniforms.uTexture.value=C,l.current.uniforms.uUseEquirectangular.value=0}M(!1)}).catch(C=>{console.error("Failed to load texture:",C),M(!1)})},[r.mapLayer]),Oe.useEffect(()=>{const P=r.overlayLayer;if(P==="NONE"){l.current&&(l.current.uniforms.uOverlayVisible.value=0),console.log("Overlay disabled");return}const D=cA[P],C=(k,N,z)=>`${D.url}/${z}/${k}/${N}.png`;console.log("Loading overlay texture for layer:",P),console.log("Sample overlay URL:",C(0,0,5)),A0(C,5,!0).then(k=>{if(console.log("Overlay texture loaded successfully"),l.current){const N=l.current.uniforms.uOverlayTexture.value;N instanceof hn&&N.image&&N.dispose(),l.current.uniforms.uOverlayTexture.value=k,l.current.uniforms.uOverlayVisible.value=1}}).catch(k=>{console.error("Failed to load overlay texture:",k),l.current&&(l.current.uniforms.uOverlayVisible.value=0)})},[r.overlayLayer]),Oe.useEffect(()=>{if(!i.current)return;if(s.current){console.log("Scene already exists, skipping recreation");return}const P=new B1;P.background=new De(5);const D=new hi(45,window.innerWidth/window.innerHeight,.1,1e4);D.position.set(0,0,250),console.log("Scene created with camera position:",D.position);const C=new I1({antialias:!0,alpha:!0});C.setSize(window.innerWidth,window.innerHeight),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current.appendChild(C.domElement),console.log("Renderer created and appended to DOM"),s.current=C;const k=new q1(D,C.domElement);k.enableDamping=!0,k.dampingFactor=.05,k.autoRotate=!1,k.enableZoom=!0,k.enablePan=!0,k.enableRotate=!0,k.minDistance=5,C.domElement.addEventListener("mousedown",ht=>{console.log("🖱️ Mouse down at:",ht.clientX,ht.clientY)}),C.domElement.addEventListener("mousemove",ht=>{ht.buttons>0&&console.log("🖱️ Mouse dragging at:",ht.clientX,ht.clientY)}),C.domElement.addEventListener("mouseup",ht=>{console.log("🖱️ Mouse up at:",ht.clientX,ht.clientY)});const N=`
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
      uniform sampler2D uOverlayTexture;
      uniform float uOverlayVisible;
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

        float grid = 0.0;
        if (uShowGrid > 0.5) {
          vec2 gridSpacing = vec2(18.0, 10.0);
          vec2 gridUv = fract(vFinalUv * gridSpacing);
          float line = step(0.98, gridUv.x) + step(0.98, gridUv.y);
          grid = clamp(line * 0.08, 0.0, 0.5);
        }

        gl_FragColor = vec4(texColor.rgb + grid, texColor.a);
      }
    `,Y=new Ai({vertexShader:N,fragmentShader:z,uniforms:{uTorusT:{value:0},uSphereT:{value:0},uCylinderT:{value:0},uConeT:{value:0},uDiscT:{value:0},uMercatorT:{value:0},uGallPetersT:{value:0},uSinusoidalT:{value:0},uRobinsonT:{value:0},uInfiniteT:{value:0},uTexture:{value:_()},uOverlayTexture:{value:_()},uOverlayVisible:{value:0},uShowGrid:{value:u.current.showGrid?1:0},uUseEquirectangular:{value:0}},side:Oi,transparent:!1});l.current=Y;const L=new qo(1,1,400,400),w=new Ei(L,Y);w.scale.set(5,5,5),P.add(w),console.log("✓ Plane mesh added to scene with",L.attributes.position.count,"vertices"),console.log("✓ Initial mode:",u.current.viewMode),console.log("✓ Initial map layer:",u.current.mapLayer);const H=`
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
    `,ct=[],rt=50,gt=new Ai({vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:H,uniforms:{uLayerIntensity:{value:u.current.viewMode==="SPHERE"&&u.current.showAtmosphere?.5:0}},transparent:!0,side:On,blending:Dh,depthWrite:!1,depthTest:!0}),_t=new Cd(rt*1.05,64,64),I=new Ei(_t,gt);I.visible=u.current.viewMode==="SPHERE",P.add(I),ct.push(I),b.current=ct,console.log("✓ Sphere atmosphere added");const K=12e3,Z=new Ii,yt=new Float32Array(K*3);for(let ht=0;ht<K;ht++){const G=600+Math.random()*800,ot=2*Math.PI*Math.random(),St=Math.acos(2*Math.random()-1);yt[ht*3]=G*Math.sin(St)*Math.cos(ot),yt[ht*3+1]=G*Math.sin(St)*Math.sin(ot),yt[ht*3+2]=G*Math.cos(St)}Z.setAttribute("position",new bi(yt,3));const Tt=new F1(Z,new dv({size:.7,color:8956671,transparent:!0,opacity:.8}));P.add(Tt),p.current=Tt;const O=ht=>{const G=(ht-m.current)/1e3;m.current=ht;const ot=5;if(d.current+=(h.current-d.current)*Math.min(G*ot,1),D.setViewOffset(window.innerWidth,window.innerHeight,d.current/2,0,window.innerWidth,window.innerHeight),p.current&&(p.current.rotation.y+=5e-5),l.current){const Kt=u.current.viewMode;Kt!==x.current&&(console.log("✓ Geometry mode changed:",x.current,"→",Kt),x.current==="SPHERE"?S.current=!1:S.current=!0,x.current=Kt);const Qt={torus:Kt==="TORUS"?1:0,sphere:Kt==="SPHERE"?1:0,cylinder:Kt==="CYLINDER"?1:0,cone:Kt==="CONE"?1:0,disc:Kt==="DISC"?1:0,mercator:Kt==="MERCATOR"?1:0,gallPeters:Kt==="GALL_PETERS"?1:0,sinusoidal:Kt==="SINUSOIDAL"?1:0,robinson:Kt==="ROBINSON"?1:0,infinite:Kt==="INFINITE"||Kt==="TORUS"?1:0},Jt=Kt==="SPHERE",Vt=Jt&&u.current.showAtmosphere?1:0;if(Jt&&g.current.sphere<.99)R.current=Math.max(0,R.current-G*8);else{const U=Vt<R.current?8:3;R.current+=(Vt-R.current)*G*U}!S.current&&R.current<.01&&(S.current=!0),Object.keys(Qt).forEach(U=>{let E=Qt[U];U==="torus"&&E===1&&g.current.infinite<.9&&(E=0);const Q=g.current[U],ft=U==="torus"?.5:1.5;S.current&&(Q<E?g.current[U]=Math.min(E,Q+G*ft):Q>E&&(g.current[U]=Math.max(E,Q-G*1.5)))});const xe=Li(g.current.torus);k.target.set(0,0,-25*xe);const Lt=l.current;Lt.uniforms.uInfiniteT.value=Li(g.current.infinite),Lt.uniforms.uMercatorT.value=Li(g.current.mercator),Lt.uniforms.uGallPetersT.value=Li(g.current.gallPeters),Lt.uniforms.uSinusoidalT.value=Li(g.current.sinusoidal),Lt.uniforms.uRobinsonT.value=Li(g.current.robinson),Lt.uniforms.uSphereT.value=Li(g.current.sphere),Lt.uniforms.uCylinderT.value=Li(g.current.cylinder),Lt.uniforms.uConeT.value=Li(g.current.cone),Lt.uniforms.uDiscT.value=Li(g.current.disc),Lt.uniforms.uTorusT.value=g.current.torus,Lt.uniforms.uShowGrid.value=u.current.showGrid?1:0,b.current.forEach(U=>{U.material instanceof Ai&&(U.material.uniforms.uLayerIntensity.value=R.current*.5,U.visible=R.current>.01)})}k.update(),u.current.viewMode;const St=5,xt=10*St,Pt=5,It=g.current.sphere,ae=g.current.torus,Re=g.current.cylinder,fe=g.current.cone,ke=g.current.disc;if(It>.01||ae>.01||Re>.01||fe>.01||ke>.01){const Kt=D.position.clone();k.target.clone();let Qt=0;if(It>.5){const Jt=Kt.length();Qt=xt+Pt,Jt<Qt&&(Kt.normalize().multiplyScalar(Qt),D.position.copy(Kt))}else if(ae>.5){const Jt=25*St,Vt=5*St,xe=new nt(0,0,-Jt),Lt=Kt.clone().sub(xe),E=new de(Lt.x,Lt.z).length(),Q=Math.abs(E-Jt),ft=Math.sqrt(Q*Q+Lt.y*Lt.y)-Vt;if(ft<Pt){const Et=Lt.clone().normalize(),pt=Pt-ft;D.position.add(Et.multiplyScalar(pt))}}else if(Re>.5){const Jt=Math.sqrt(Kt.x*Kt.x+Kt.z*Kt.z);if(Qt=xt+Pt,Jt<Qt){const Vt=Qt/Jt;D.position.x*=Vt,D.position.z*=Vt}}else if(fe>.5){const Jt=1.1*xt,Vt=Math.PI*xt,xe=Kt.y/Vt+.5,Lt=Jt*(1.1-Math.max(0,Math.min(1,xe))),U=Math.sqrt(Kt.x*Kt.x+Kt.z*Kt.z);if(Qt=Lt+Pt,U<Qt&&Lt>0){const E=Qt/U;D.position.x*=E,D.position.z*=E}}else if(ke>.5){const Jt=2*xt;Math.sqrt(Kt.x*Kt.x+Kt.z*Kt.z)<Jt&&Math.abs(Kt.y)<Pt&&(D.position.y=Kt.y>=0?Pt:-Pt)}}C.render(P,D),requestAnimationFrame(O)};m.current=performance.now(),requestAnimationFrame(O),console.log("✓ Animation loop started");const tt=()=>{D.aspect=window.innerWidth/window.innerHeight,D.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",tt),()=>{window.removeEventListener("resize",tt),C.dispose(),L.dispose(),Y.dispose()}},[]),Mt.jsxs("div",{ref:i,className:"w-full h-full bg-[#000005] cursor-move",style:{touchAction:"none"},children:[y&&Mt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md z-10 pointer-events-none",children:Mt.jsxs("div",{className:"text-center space-y-4",children:[Mt.jsx("div",{className:"w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin mx-auto"}),Mt.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400",children:"Initializing Playground..."})]})}),Mt.jsx(oA,{mapLayer:r.mapLayer,overlayLayer:r.overlayLayer,sidebarOffset:e})]})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=r=>{const e=dA(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=Oe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>Oe.createElement("svg",{ref:m,...pA,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:gv("lucide",l),...!u&&!mA(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>Oe.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(r,e)=>{const i=Oe.forwardRef(({className:s,...l},u)=>Oe.createElement(gA,{ref:u,iconNode:e,className:gv(`lucide-${hA(R0(r))}`,`lucide-${r}`,s),...l}));return i.displayName=R0(r),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],C0=Ve("activity",_A);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],xA=Ve("bike",vA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],SA=Ve("box",yA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],EA=Ve("chevron-down",MA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],bA=Ve("chevron-left",TA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],RA=Ve("chevron-right",AA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],wA=Ve("chevron-up",CA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],UA=Ve("cloud",DA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],NA=Ve("compass",LA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]],PA=Ve("cylinder",OA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],IA=Ve("disc",zA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],w0=Ve("earth",BA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],HA=Ve("footprints",FA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],D0=Ve("globe",GA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],U0=Ve("grid-3x3",VA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],XA=Ve("heart",kA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],qA=Ve("info",WA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],L0=Ve("layers",YA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Ch=Ve("map",jA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],KA=Ve("moon",ZA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],N0=Ve("mountain",QA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],$A=Ve("navigation",JA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],eR=Ve("pyramid",tR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],iR=Ve("rotate-3d",nR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]],sR=Ve("tram-front",aR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],oR=Ve("triangle",rR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],cR=Ve("wind",lR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],fR=Ve("zap",uR),hR=()=>{const[r,e]=Oe.useState({zoom:1,rotation:{x:0,y:0},showGrid:!0,showAtmosphere:!0,viewMode:"SPHERE",mapLayer:"BLUE_MARBLE",overlayLayer:"NONE"}),[i,s]=Oe.useState(!0),[l,u]=Oe.useState(!1),h=Oe.useRef("STANDARD"),d=Oe.useCallback(N=>{console.log("✓ setMode called with:",N),["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(N)||(h.current=N),e(Y=>(console.log("✓ Settings updated to viewMode:",N),{...Y,viewMode:N}))},[]),m=N=>{console.log("✓ setLayer called with:",N),e(z=>(console.log("✓ Settings updated to mapLayer:",N),{...z,mapLayer:N}))},p=N=>{console.log("✓ setOverlay called with:",N),e(z=>(console.log("✓ Settings updated to overlayLayer:",N),{...z,overlayLayer:N}))},g=()=>e(N=>({...N,showGrid:!N.showGrid})),x=()=>e(N=>({...N,showAtmosphere:!N.showAtmosphere})),y=N=>{const z=r.viewMode;d(z===N?h.current:N)},M=r.viewMode==="TORUS",b=r.viewMode==="SPHERE",R=r.viewMode==="CYLINDER",S=r.viewMode==="CONE",_=r.viewMode==="DISC",P=M||b||R||S||_,D=[{id:"STANDARD",name:"Standard (Plate Carrée)",icon:U0},{id:"GALL_PETERS",name:"Gall-Peters (Equal Area)",icon:Ch},{id:"MERCATOR",name:"Mercator (Navigational)",icon:NA},{id:"ROBINSON",name:"Robinson (Pseudocylindrical)",icon:w0},{id:"SINUSOIDAL",name:"Sinusoidal (Equal Area)",icon:oR},{id:"INFINITE",name:"Infinite (Transverse)",icon:fR}],C=[{id:"BLUE_MARBLE",name:"NASA Blue Marble",icon:w0,color:"text-cyan-400"},{id:"NASA_VIIRS",name:"NASA VIIRS",icon:D0,color:"text-purple-400"},{id:"OPENTOPOMAP",name:"OpenTopoMap",icon:N0,color:"text-amber-400"},{id:"HOT",name:"Humanitarian",icon:XA,color:"text-rose-400"},{id:"STANDARD",name:"OSM Standard",icon:$A,color:"text-blue-400"},{id:"CARTODARK",name:"Carto Dark",icon:KA,color:"text-indigo-400"}],k=[{id:"NONE",name:"No Overlay",icon:L0,color:"text-zinc-400"},{id:"HIKING_TRAILS",name:"Hiking Trails",icon:HA,color:"text-green-400"},{id:"CYCLING_ROUTES",name:"Cycling Routes",icon:xA,color:"text-orange-400"},{id:"MTB_TRAILS",name:"MTB Trails",icon:N0,color:"text-amber-400"},{id:"OPEN_RAILWAY_MAP",name:"Railways",icon:sR,color:"text-purple-400"},{id:"PLACE_LABELS",name:"Place Labels",icon:Ch,color:"text-cyan-400"}];return Mt.jsxs("div",{className:"flex h-screen w-screen bg-zinc-950 font-sans text-zinc-100 overflow-hidden",children:[Mt.jsxs("div",{className:"relative flex-1 h-full",children:[Mt.jsx(fA,{settings:r,sidebarOffset:i?380:0}),!i&&Mt.jsx("button",{onClick:()=>s(!0),className:"absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 hover:bg-zinc-800 transition-colors shadow-xl",children:Mt.jsx(bA,{size:20})})]}),Mt.jsx("aside",{className:`fixed top-0 right-0 h-full bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl z-40 ${i?"translate-x-0":"translate-x-full"} w-full sm:w-[380px]`,children:Mt.jsxs("div",{className:"h-full flex flex-col p-10 overflow-y-auto",children:[Mt.jsxs("div",{className:"flex items-center justify-between mb-12",children:[Mt.jsxs("div",{className:"flex items-center gap-4",children:[Mt.jsx("div",{className:`p-3 rounded-2xl border transition-all duration-500 ${P?"bg-emerald-600/20 border-emerald-500/30":"bg-blue-600/20 border-blue-500/30"}`,children:Mt.jsx(C0,{className:P?"text-emerald-400":"text-blue-400",size:20})}),Mt.jsxs("div",{children:[Mt.jsx("h1",{className:"text-[11px] font-black uppercase tracking-[0.4em] text-white",children:"Projection Lab v43"}),Mt.jsx("p",{className:"text-[9px] text-zinc-500 font-mono text-nowrap uppercase",children:"Map Projection Playground"})]})]}),Mt.jsx("button",{onClick:()=>s(!1),className:"p-2 hover:bg-white/5 rounded-full transition-colors",children:Mt.jsx(RA,{size:18})})]}),Mt.jsxs("section",{className:"space-y-10 pb-12",children:[Mt.jsxs("div",{className:"space-y-5",children:[Mt.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[Mt.jsx(L0,{size:12})," Map Engine"]}),Mt.jsx("div",{className:"grid grid-cols-2 gap-2",children:C.map(N=>Mt.jsxs("button",{onClick:()=>m(N.id),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${r.mapLayer===N.id?"bg-white text-zinc-950 border-white shadow-lg":"bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800"}`,children:[Mt.jsx(N.icon,{size:20,className:r.mapLayer===N.id?"text-zinc-950":N.color}),Mt.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-center",children:N.name})]},N.id))})]}),Mt.jsxs("div",{className:"space-y-5",children:[Mt.jsxs("button",{onClick:()=>u(!l),className:"w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors",children:[Mt.jsxs("div",{className:"flex items-center gap-2",children:[Mt.jsx(C0,{size:12}),"Overlay Layers"]}),l?Mt.jsx(wA,{size:14}):Mt.jsx(EA,{size:14})]}),l&&Mt.jsx("div",{className:"grid grid-cols-2 gap-2 animate-in fade-in duration-300",children:k.map(N=>Mt.jsxs("button",{onClick:()=>p(N.id),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300
                        ${r.overlayLayer===N.id?"bg-white text-zinc-950 border-white shadow-lg":"bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800"}`,children:[Mt.jsx(N.icon,{size:20,className:r.overlayLayer===N.id?"text-zinc-950":N.color}),Mt.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-center",children:N.name})]},N.id))})]}),Mt.jsxs("div",{className:"space-y-6",children:[Mt.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[Mt.jsx(Ch,{size:12})," Cartography (2D)"]}),Mt.jsx("div",{className:"space-y-2.5",children:D.map(N=>Mt.jsx("button",{onClick:()=>d(N.id),className:`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 relative group ${r.viewMode===N.id?"bg-zinc-100 text-zinc-950 border-white shadow-lg":M&&N.id==="INFINITE"?"bg-blue-900/40 border-blue-500 text-blue-100":"bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-700"}`,children:Mt.jsxs("div",{className:"flex items-center gap-3",children:[Mt.jsx(N.icon,{size:16,className:`transition-colors ${r.viewMode===N.id?"text-zinc-950":M&&N.id==="INFINITE"?"text-blue-400":"text-zinc-500"}`}),Mt.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest",children:N.name})]})},N.id))})]}),Mt.jsxs("div",{className:"space-y-6",children:[Mt.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[Mt.jsx(SA,{size:12})," Dimensional (3D)"]}),Mt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[Mt.jsxs("button",{onClick:()=>y("SPHERE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${b?"bg-emerald-600 text-white border-emerald-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Mt.jsx(D0,{size:20,className:b?"animate-pulse":""}),Mt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest",children:"Sphere"})]}),Mt.jsxs("button",{onClick:()=>y("DISC"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${_?"bg-rose-600 text-white border-rose-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Mt.jsx(IA,{size:20,className:_?"animate-pulse":""}),Mt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Disc World"})]}),Mt.jsxs("button",{onClick:()=>y("CONE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${S?"bg-orange-600 text-white border-orange-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Mt.jsx(eR,{size:20,className:S?"animate-pulse":""}),Mt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cone"})]}),Mt.jsxs("button",{onClick:()=>y("CYLINDER"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${R?"bg-indigo-600 text-white border-indigo-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Mt.jsx(PA,{size:20,className:R?"animate-pulse":""}),Mt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cylinder"})]}),Mt.jsxs("button",{onClick:()=>y("TORUS"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 col-span-2 ${M?"bg-blue-600 text-white border-blue-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Mt.jsx(iR,{size:20,className:M?"animate-pulse":""}),Mt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Torus"})]})]})]}),Mt.jsxs("div",{className:"space-y-4",children:[Mt.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[Mt.jsx(cR,{size:12})," Visualization"]}),Mt.jsxs("div",{className:"flex items-center justify-between px-2",children:[Mt.jsxs("div",{className:"flex items-center gap-2",children:[Mt.jsx(U0,{size:12,className:"text-zinc-500"}),Mt.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Geo Grid"})]}),Mt.jsx("button",{onClick:g,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${r.showGrid?"bg-emerald-600 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:Mt.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${r.showGrid?"translate-x-5":"translate-x-0"}`})})]}),Mt.jsxs("div",{className:"flex items-center justify-between px-2",children:[Mt.jsxs("div",{className:"flex items-center gap-2",children:[Mt.jsx(UA,{size:12,className:"text-zinc-500"}),Mt.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Atmosphere"})]}),Mt.jsx("button",{onClick:x,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${r.viewMode==="SPHERE"&&r.showAtmosphere?"bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:Mt.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${r.viewMode==="SPHERE"&&r.showAtmosphere?"translate-x-5":"translate-x-0"}`})})]})]}),Mt.jsx("div",{className:"pt-10 border-t border-white/5",children:Mt.jsxs("div",{className:"flex items-start gap-4 p-5 bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl",children:[Mt.jsx(qA,{className:"text-blue-500/60 shrink-0 mt-0.5",size:16}),Mt.jsxs("p",{className:"text-[10px] text-zinc-500 leading-relaxed font-medium",children:["Licensed under ",Mt.jsx("a",{href:"https://github.com/arand4/Projection-lab/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline",children:"GNU GPL v3"}),". View source on ",Mt.jsx("a",{href:"https://github.com/arand4/Projection-lab",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline",children:"GitHub"}),"."]})]})})]}),Mt.jsx("div",{className:"mt-auto pt-6 text-[8px] text-zinc-800 text-center font-mono uppercase tracking-[0.5em]",children:"Projection Lab v43"})]})})]})},_v=document.getElementById("root");if(!_v)throw new Error("Could not find root element to mount to");const dR=Ny.createRoot(_v);dR.render(Mt.jsx(wh.StrictMode,{children:Mt.jsx(hR,{})}));
