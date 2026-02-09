(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function P0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Yf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function TS(){if(d_)return wo;d_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var p_;function bS(){return p_||(p_=1,Yf.exports=TS()),Yf.exports}var xt=bS(),qf={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function AS(){if(m_)return ne;m_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function _(O,tt,yt){this.props=O,this.context=tt,this.refs=y,this.updater=yt||b}_.prototype.isReactComponent={},_.prototype.setState=function(O,tt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,tt,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=_.prototype;function N(O,tt,yt){this.props=O,this.context=tt,this.refs=y,this.updater=yt||b}var A=N.prototype=new I;A.constructor=N,C(A,_.prototype),A.isPureReactComponent=!0;var q=Array.isArray;function P(){}var D={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function U(O,tt,yt){var G=yt.ref;return{$$typeof:r,type:O,key:tt,ref:G!==void 0?G:null,props:yt}}function w(O,tt){return U(O.type,tt,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function ut(O){var tt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(yt){return tt[yt]})}var st=/\/+/g;function gt(O,tt){return typeof O=="object"&&O!==null&&O.key!=null?ut(""+O.key):tt.toString(36)}function _t(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(P,P):(O.status="pending",O.then(function(tt){O.status==="pending"&&(O.status="fulfilled",O.value=tt)},function(tt){O.status==="pending"&&(O.status="rejected",O.reason=tt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,tt,yt,G,ot){var Et=typeof O;(Et==="undefined"||Et==="boolean")&&(O=null);var St=!1;if(O===null)St=!0;else switch(Et){case"bigint":case"string":case"number":St=!0;break;case"object":switch(O.$$typeof){case r:case e:St=!0;break;case v:return St=O._init,z(St(O._payload),tt,yt,G,ot)}}if(St)return ot=ot(O),St=G===""?"."+gt(O,0):G,q(ot)?(yt="",St!=null&&(yt=St.replace(st,"$&/")+"/"),z(ot,tt,yt,"",function(Qt){return Qt})):ot!=null&&(H(ot)&&(ot=w(ot,yt+(ot.key==null||O&&O.key===ot.key?"":(""+ot.key).replace(st,"$&/")+"/")+St)),tt.push(ot)),1;St=0;var kt=G===""?".":G+":";if(q(O))for(var It=0;It<O.length;It++)G=O[It],Et=kt+gt(G,It),St+=z(G,tt,yt,Et,ot);else if(It=M(O),typeof It=="function")for(O=It.call(O),It=0;!(G=O.next()).done;)G=G.value,Et=kt+gt(G,It++),St+=z(G,tt,yt,Et,ot);else if(Et==="object"){if(typeof O.then=="function")return z(_t(O),tt,yt,G,ot);throw tt=String(O),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return St}function K(O,tt,yt){if(O==null)return O;var G=[],ot=0;return z(O,G,"","",function(Et){return tt.call(yt,Et,ot++)}),G}function Z(O){if(O._status===-1){var tt=O._result;tt=tt(),tt.then(function(yt){(O._status===0||O._status===-1)&&(O._status=1,O._result=yt)},function(yt){(O._status===0||O._status===-1)&&(O._status=2,O._result=yt)}),O._status===-1&&(O._status=0,O._result=tt)}if(O._status===1)return O._result.default;throw O._result}var Mt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Tt={map:K,forEach:function(O,tt,yt){K(O,function(){tt.apply(this,arguments)},yt)},count:function(O){var tt=0;return K(O,function(){tt++}),tt},toArray:function(O){return K(O,function(tt){return tt})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ne.Activity=g,ne.Children=Tt,ne.Component=_,ne.Fragment=i,ne.Profiler=l,ne.PureComponent=N,ne.StrictMode=s,ne.Suspense=m,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,ne.__COMPILER_RUNTIME={__proto__:null,c:function(O){return D.H.useMemoCache(O)}},ne.cache=function(O){return function(){return O.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(O,tt,yt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var G=C({},O.props),ot=O.key;if(tt!=null)for(Et in tt.key!==void 0&&(ot=""+tt.key),tt)!V.call(tt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&tt.ref===void 0||(G[Et]=tt[Et]);var Et=arguments.length-2;if(Et===1)G.children=yt;else if(1<Et){for(var St=Array(Et),kt=0;kt<Et;kt++)St[kt]=arguments[kt+2];G.children=St}return U(O.type,ot,G)},ne.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ne.createElement=function(O,tt,yt){var G,ot={},Et=null;if(tt!=null)for(G in tt.key!==void 0&&(Et=""+tt.key),tt)V.call(tt,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(ot[G]=tt[G]);var St=arguments.length-2;if(St===1)ot.children=yt;else if(1<St){for(var kt=Array(St),It=0;It<St;It++)kt[It]=arguments[It+2];ot.children=kt}if(O&&O.defaultProps)for(G in St=O.defaultProps,St)ot[G]===void 0&&(ot[G]=St[G]);return U(O,Et,ot)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(O){return{$$typeof:d,render:O}},ne.isValidElement=H,ne.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:Z}},ne.memo=function(O,tt){return{$$typeof:p,type:O,compare:tt===void 0?null:tt}},ne.startTransition=function(O){var tt=D.T,yt={};D.T=yt;try{var G=O(),ot=D.S;ot!==null&&ot(yt,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(P,Mt)}catch(Et){Mt(Et)}finally{tt!==null&&yt.types!==null&&(tt.types=yt.types),D.T=tt}},ne.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},ne.use=function(O){return D.H.use(O)},ne.useActionState=function(O,tt,yt){return D.H.useActionState(O,tt,yt)},ne.useCallback=function(O,tt){return D.H.useCallback(O,tt)},ne.useContext=function(O){return D.H.useContext(O)},ne.useDebugValue=function(){},ne.useDeferredValue=function(O,tt){return D.H.useDeferredValue(O,tt)},ne.useEffect=function(O,tt){return D.H.useEffect(O,tt)},ne.useEffectEvent=function(O){return D.H.useEffectEvent(O)},ne.useId=function(){return D.H.useId()},ne.useImperativeHandle=function(O,tt,yt){return D.H.useImperativeHandle(O,tt,yt)},ne.useInsertionEffect=function(O,tt){return D.H.useInsertionEffect(O,tt)},ne.useLayoutEffect=function(O,tt){return D.H.useLayoutEffect(O,tt)},ne.useMemo=function(O,tt){return D.H.useMemo(O,tt)},ne.useOptimistic=function(O,tt){return D.H.useOptimistic(O,tt)},ne.useReducer=function(O,tt,yt){return D.H.useReducer(O,tt,yt)},ne.useRef=function(O){return D.H.useRef(O)},ne.useState=function(O){return D.H.useState(O)},ne.useSyncExternalStore=function(O,tt,yt){return D.H.useSyncExternalStore(O,tt,yt)},ne.useTransition=function(){return D.H.useTransition()},ne.version="19.2.4",ne}var g_;function vd(){return g_||(g_=1,qf.exports=AS()),qf.exports}var we=vd();const wh=P0(we);var jf={exports:{}},Do={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function RS(){return __||(__=1,(function(r){function e(z,K){var Z=z.length;z.push(K);t:for(;0<Z;){var Mt=Z-1>>>1,Tt=z[Mt];if(0<l(Tt,K))z[Mt]=K,z[Z]=Tt,Z=Mt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],Z=z.pop();if(Z!==K){z[0]=Z;t:for(var Mt=0,Tt=z.length,O=Tt>>>1;Mt<O;){var tt=2*(Mt+1)-1,yt=z[tt],G=tt+1,ot=z[G];if(0>l(yt,Z))G<Tt&&0>l(ot,yt)?(z[Mt]=ot,z[G]=Z,Mt=G):(z[Mt]=yt,z[tt]=Z,Mt=tt);else if(G<Tt&&0>l(ot,Z))z[Mt]=ot,z[G]=Z,Mt=G;else break t}}return K}function l(z,K){var Z=z.sortIndex-K.sortIndex;return Z!==0?Z:z.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,S=3,M=!1,b=!1,C=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function A(z){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=z)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function q(z){if(C=!1,A(z),!b)if(i(m)!==null)b=!0,P||(P=!0,ut());else{var K=i(p);K!==null&&_t(q,K.startTime-z)}}var P=!1,D=-1,V=5,U=-1;function w(){return y?!0:!(r.unstable_now()-U<V)}function H(){if(y=!1,P){var z=r.unstable_now();U=z;var K=!0;try{t:{b=!1,C&&(C=!1,I(D),D=-1),M=!0;var Z=S;try{e:{for(A(z),g=i(m);g!==null&&!(g.expirationTime>z&&w());){var Mt=g.callback;if(typeof Mt=="function"){g.callback=null,S=g.priorityLevel;var Tt=Mt(g.expirationTime<=z);if(z=r.unstable_now(),typeof Tt=="function"){g.callback=Tt,A(z),K=!0;break e}g===i(m)&&s(m),A(z)}else s(m);g=i(m)}if(g!==null)K=!0;else{var O=i(p);O!==null&&_t(q,O.startTime-z),K=!1}}break t}finally{g=null,S=Z,M=!1}K=void 0}}finally{K?ut():P=!1}}}var ut;if(typeof N=="function")ut=function(){N(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,gt=st.port2;st.port1.onmessage=H,ut=function(){gt.postMessage(null)}}else ut=function(){_(H,0)};function _t(z,K){D=_(function(){z(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(z){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Z=S;S=K;try{return z()}finally{S=Z}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=S;S=z;try{return K()}finally{S=Z}},r.unstable_scheduleCallback=function(z,K,Z){var Mt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Mt+Z:Mt):Z=Mt,z){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Z+Tt,z={id:v++,callback:K,priorityLevel:z,startTime:Z,expirationTime:Tt,sortIndex:-1},Z>Mt?(z.sortIndex=Z,e(p,z),i(m)===null&&z===i(p)&&(C?(I(D),D=-1):C=!0,_t(q,Z-Mt))):(z.sortIndex=Tt,e(m,z),b||M||(b=!0,P||(P=!0,ut()))),z},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(z){var K=S;return function(){var Z=S;S=K;try{return z.apply(this,arguments)}finally{S=Z}}}})(Kf)),Kf}var v_;function CS(){return v_||(v_=1,Zf.exports=RS()),Zf.exports}var Qf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function wS(){if(x_)return Rn;x_=1;var r=vd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},Rn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var S_;function DS(){if(S_)return Qf.exports;S_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qf.exports=wS(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function US(){if(y_)return Do;y_=1;var r=CS(),e=vd(),i=DS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,o=f;break}if(T===o){x=!0,o=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,o=c;break}if(T===o){x=!0,o=f,a=c;break}T=T.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),N=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case q:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case V:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var _t=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Mt=[],Tt=-1;function O(t){return{current:t}}function tt(t){0>Tt||(t.current=Mt[Tt],Mt[Tt]=null,Tt--)}function yt(t,n){Tt++,Mt[Tt]=t.current,t.current=n}var G=O(null),ot=O(null),Et=O(null),St=O(null);function kt(t,n){switch(yt(Et,n),yt(ot,t),yt(G,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zg(n),t=Ig(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(G),yt(G,t)}function It(){tt(G),tt(ot),tt(Et)}function Qt(t){t.memoizedState!==null&&yt(St,t);var n=G.current,a=Ig(n,t.type);n!==a&&(yt(ot,t),yt(G,a))}function de(t){ot.current===t&&(tt(G),tt(ot)),St.current===t&&(tt(St),bo._currentValue=Z)}var ue,Ve;function X(t){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",Ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+t+Ve}var on=!1;function oe(t,n){if(!t||on)return"";on=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(rt){var et=rt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(rt){et=rt}t.call(mt.prototype)}}else{try{throw Error()}catch(rt){et=rt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(rt){if(rt&&et&&typeof rt.stack=="string")return[rt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var B=x.split(`
`),$=T.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===$.length)for(o=B.length-1,c=$.length-1;1<=o&&0<=c&&B[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==$[c]){var ht=`
`+B[o].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=o&&0<=c);break}}}finally{on=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?X(a):""}function pe(t,n){switch(t.tag){case 26:case 27:case 5:return X(t.type);case 16:return X("Lazy");case 13:return t.child!==n&&n!==null?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return X("Activity");default:return""}}function bt(t){try{var n="",a=null;do n+=pe(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ae=Object.prototype.hasOwnProperty,zt=r.unstable_scheduleCallback,L=r.unstable_cancelCallback,E=r.unstable_shouldYield,Q=r.unstable_requestPaint,lt=r.unstable_now,dt=r.unstable_getCurrentPriorityLevel,ft=r.unstable_ImmediatePriority,Ft=r.unstable_UserBlockingPriority,Ct=r.unstable_NormalPriority,Bt=r.unstable_LowPriority,_e=r.unstable_IdlePriority,Rt=r.log,Ht=r.unstable_setDisableYieldValue,Zt=null,qt=null;function Pt(t){if(typeof Rt=="function"&&Ht(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(Zt,t)}catch{}}var $t=Math.clz32?Math.clz32:k,se=Math.log,Oe=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(se(t)/Oe|0)|0}var wt=256,ct=262144,vt=4194304;function Dt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Dt(o):(x&=T,x!==0?c=Dt(x):a||(a=T&~t,a!==0&&(c=Dt(a))))):(T=o&~f,T!==0?c=Dt(T):x!==0?c=Dt(x):a||(a=o&~t,a!==0&&(c=Dt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ye(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var t=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pi(t,n,a,o,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-$t(a),mt=1<<ht;T[ht]=0,B[ht]=-1;var et=$[ht];if(et!==null)for($[ht]=null,ht=0;ht<et.length;ht++){var rt=et[ht];rt!==null&&(rt.lane&=-536870913)}a&=~mt}o!==0&&Ir(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Ir(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-$t(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Br(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-$t(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Ci(t,n){var a=n&-n;return a=(a&42)!==0?1:Ja(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ja(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ds(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fr(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:r_(t.type))}function $a(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var mi=Math.random().toString(36).slice(2),je="__reactFiber$"+mi,xn="__reactProps$"+mi,Hi="__reactContainer$"+mi,Hr="__reactEvents$"+mi,Fc="__reactListeners$"+mi,Hc="__reactHandles$"+mi,R="__reactResources$"+mi,W="__reactMarker$"+mi;function at(t){delete t[je],delete t[xn],delete t[Hr],delete t[Fc],delete t[Hc]}function it(t){var n=t[je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hi]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Xg(t);t!==null;){if(a=t[je])return a;t=Xg(t)}return n}t=a,a=t.parentNode}return null}function Y(t){if(t=t[je]||t[Hi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function At(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ut(t){var n=t[R];return n||(n=t[R]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Lt(t){t[W]=!0}var Xt=new Set,ee={};function Jt(t,n){Gt(t,n),Gt(t+"Capture",n)}function Gt(t,n){for(ee[t]=n,t=0;t<n.length;t++)Xt.add(n[t])}var Me=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ue={},Pe={};function bn(t){return ae.call(Pe,t)?!0:ae.call(Ue,t)?!1:Me.test(t)?Pe[t]=!0:(Ue[t]=!0,!1)}function Se(t,n,a){if(bn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Wt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function cn(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ie(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ga(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Sn(t){if(!t._valueTracker){var n=Pn(t)?"checked":"value";t._valueTracker=ga(t,n,""+t[n])}}function _a(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Pn(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Ce(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ti=/[\n"\\]/g;function mn(t){return t.replace(ti,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,o,c,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ie(n)):t.value!==""+ie(n)&&(t.value=""+ie(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?ei(t,x,ie(n)):a!=null?ei(t,x,ie(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ie(T):t.removeAttribute("name")}function gi(t,n,a,o,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sn(t);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Sn(t)}function ei(t,n,a){n==="number"&&Ce(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Gi(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ud(t,n,a){if(n!=null&&(n=""+ie(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ie(a):""}function Ld(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(_t(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Sn(t)}function Us(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var xv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||xv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Od(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Nd(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Nd(t,f,n[f])}function Gc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(t){return yv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vi(){}var Vc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ls=null,Ns=null;function Pd(t){var n=Y(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[xn]||null;if(!c)throw Error(s(90));An(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&_a(o)}break t;case"textarea":Ud(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Gi(t,!!a.multiple,n,!1)}}}var Xc=!1;function zd(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var o=t(n);return o}finally{if(Xc=!1,(Ls!==null||Ns!==null)&&(Ol(),Ls&&(n=Ls,t=Ns,Ns=Ls=null,Pd(n),t)))for(n=0;n<t.length;n++)Pd(t[n])}}function Gr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(ki)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Wc=!1}var va=null,Yc=null,jo=null;function Id(){if(jo)return jo;var t,n=Yc,a=n.length,o,c="value"in va?va.value:va.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return jo=c.slice(t,1<o?1-o:void 0)}function Zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function Bd(){return!1}function zn(t){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Bd,this.isPropagationStopped=Bd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=zn(ts),kr=g({},ts,{view:0,detail:0}),Mv=zn(kr),qc,jc,Xr,Jo=g({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(qc=t.screenX-Xr.screenX,jc=t.screenY-Xr.screenY):jc=qc=0,Xr=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Fd=zn(Jo),Ev=g({},Jo,{dataTransfer:0}),Tv=zn(Ev),bv=g({},kr,{relatedTarget:0}),Zc=zn(bv),Av=g({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=zn(Av),Cv=g({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wv=zn(Cv),Dv=g({},ts,{data:0}),Hd=zn(Dv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Nv[t])?!!n[t]:!1}function Kc(){return Ov}var Pv=g({},kr,{key:function(t){if(t.key){var n=Uv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zv=zn(Pv),Iv=g({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=zn(Iv),Bv=g({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),Fv=zn(Bv),Hv=g({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=zn(Hv),Vv=g({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=zn(Vv),Xv=g({},ts,{newState:0,oldState:0}),Wv=zn(Xv),Yv=[9,13,27,32],Qc=ki&&"CompositionEvent"in window,Wr=null;ki&&"documentMode"in document&&(Wr=document.documentMode);var qv=ki&&"TextEvent"in window&&!Wr,Vd=ki&&(!Qc||Wr&&8<Wr&&11>=Wr),kd=" ",Xd=!1;function Wd(t,n){switch(t){case"keyup":return Yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function jv(t,n){switch(t){case"compositionend":return Yd(n);case"keypress":return n.which!==32?null:(Xd=!0,kd);case"textInput":return t=n.data,t===kd&&Xd?null:t;default:return null}}function Zv(t,n){if(Os)return t==="compositionend"||!Qc&&Wd(t,n)?(t=Id(),jo=Yc=va=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vd&&n.locale!=="ko"?null:n.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Kv[t.type]:n==="textarea"}function jd(t,n,a,o){Ls?Ns?Ns.push(o):Ns=[o]:Ls=o,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Yr=null,qr=null;function Qv(t){Dg(t,0)}function $o(t){var n=At(t);if(_a(n))return t}function Zd(t,n){if(t==="change")return n}var Kd=!1;if(ki){var Jc;if(ki){var $c="oninput"in document;if(!$c){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),$c=typeof Qd.oninput=="function"}Jc=$c}else Jc=!1;Kd=Jc&&(!document.documentMode||9<document.documentMode)}function Jd(){Yr&&(Yr.detachEvent("onpropertychange",$d),qr=Yr=null)}function $d(t){if(t.propertyName==="value"&&$o(qr)){var n=[];jd(n,qr,t,kc(t)),zd(Qv,n)}}function Jv(t,n,a){t==="focusin"?(Jd(),Yr=n,qr=a,Yr.attachEvent("onpropertychange",$d)):t==="focusout"&&Jd()}function $v(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(qr)}function tx(t,n){if(t==="click")return $o(n)}function ex(t,n){if(t==="input"||t==="change")return $o(n)}function nx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:nx;function jr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!ae.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,n){var a=tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tp(a)}}function np(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?np(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ce(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ce(t.document)}return n}function tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ix=ki&&"documentMode"in document&&11>=document.documentMode,Ps=null,eu=null,Zr=null,nu=!1;function ap(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Ps==null||Ps!==Ce(o)||(o=Ps,"selectionStart"in o&&tu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zr&&jr(Zr,o)||(Zr=o,o=Gl(eu,"onSelect"),0<o.length&&(n=new Qo("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ps)))}function es(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var zs={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionrun:es("Transition","TransitionRun"),transitionstart:es("Transition","TransitionStart"),transitioncancel:es("Transition","TransitionCancel"),transitionend:es("Transition","TransitionEnd")},iu={},sp={};ki&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function ns(t){if(iu[t])return iu[t];if(!zs[t])return t;var n=zs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in sp)return iu[t]=n[a];return t}var rp=ns("animationend"),op=ns("animationiteration"),lp=ns("animationstart"),ax=ns("transitionrun"),sx=ns("transitionstart"),rx=ns("transitioncancel"),cp=ns("transitionend"),up=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function _i(t,n){up.set(t,n),Jt(n,[t])}var tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Is=0,su=0;function el(){for(var t=Is,n=su=Is=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&fp(a,c,f)}}function nl(t,n,a,o){ni[Is++]=t,ni[Is++]=n,ni[Is++]=a,ni[Is++]=o,su|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ru(t,n,a,o){return nl(t,n,a,o),il(t)}function is(t,n){return nl(t,null,null,n),il(t)}function fp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-$t(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function il(t){if(50<vo)throw vo=0,gf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Bs={};function ox(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,o){return new ox(t,n,a,o)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function al(t,n,a,o,c,f){var x=0;if(o=t,typeof t=="function")ou(t)&&(x=1);else if(typeof t=="string")x=hS(t,a,G.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=Yn(31,a,n,c),t.elementType=U,t.lanes=f,t;case C:return as(a.children,c,f,n);case y:x=8,c|=24;break;case _:return t=Yn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case q:return t=Yn(13,a,n,c),t.elementType=q,t.lanes=f,t;case P:return t=Yn(19,a,n,c),t.elementType=P,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break t;case I:x=9;break t;case A:x=11;break t;case D:x=14;break t;case V:x=16,o=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Yn(x,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function as(t,n,a,o){return t=Yn(7,t,o,n),t.lanes=a,t}function lu(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function dp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function cu(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var pp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:bt(n)},pp.set(t,n),n)}return{value:t,source:n,stack:bt(n)}}var Fs=[],Hs=0,sl=null,Kr=0,ai=[],si=0,xa=null,wi=1,Di="";function Wi(t,n){Fs[Hs++]=Kr,Fs[Hs++]=sl,sl=t,Kr=n}function mp(t,n,a){ai[si++]=wi,ai[si++]=Di,ai[si++]=xa,xa=t;var o=wi;t=Di;var c=32-$t(o)-1;o&=~(1<<c),a+=1;var f=32-$t(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,wi=1<<32-$t(n)+c|a<<c|o,Di=f+t}else wi=1<<f|a<<c|o,Di=t}function uu(t){t.return!==null&&(Wi(t,1),mp(t,1,0))}function fu(t){for(;t===sl;)sl=Fs[--Hs],Fs[Hs]=null,Kr=Fs[--Hs],Fs[Hs]=null;for(;t===xa;)xa=ai[--si],ai[si]=null,Di=ai[--si],ai[si]=null,wi=ai[--si],ai[si]=null}function gp(t,n){ai[si++]=wi,ai[si++]=Di,ai[si++]=xa,wi=n.id,Di=n.overflow,xa=t}var yn=null,Xe=null,ye=!1,Sa=null,ri=!1,hu=Error(s(519));function ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(ii(n,t)),hu}function _p(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[je]=t,n[xn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)ge(So[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),gi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Ld(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Og(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||ya(t,!0)}function vp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:yn=yn.return}}function Gs(t){if(t!==yn)return!1;if(!ye)return vp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Uf(t.type,t.memoizedProps)),a=!a),a&&Xe&&ya(t),vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=kg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=kg(t)}else n===27?(n=Xe,Pa(t.type)?(t=zf,zf=null,Xe=t):Xe=n):Xe=yn?li(t.stateNode.nextSibling):null;return!0}function ss(){Xe=yn=null,ye=!1}function du(){var t=Sa;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),Sa=null),t}function Qr(t){Sa===null?Sa=[t]:Sa.push(t)}var pu=O(null),rs=null,Yi=null;function Ma(t,n,a){yt(pu,n._currentValue),n._currentValue=a}function qi(t){t._currentValue=pu.current,tt(pu)}function mu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function gu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),mu(f.return,a,t),o||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),mu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Vs(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var T=c.type;Wn(c.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(c===St.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&gu(n,t,a,o),n.flags|=262144}function rl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function os(t){rs=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return xp(rs,t)}function ol(t,n){return rs===null&&os(t),xp(t,n)}function xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(s(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var lx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},cx=r.unstable_scheduleCallback,ux=r.unstable_NormalPriority,en={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new lx,data:new Map,refCount:0}}function Jr(t){t.refCount--,t.refCount===0&&cx(ux,function(){t.controller.abort()})}var $r=null,vu=0,ks=0,Xs=null;function fx(t,n){if($r===null){var a=$r=[];vu=0,ks=Mf(),Xs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return vu++,n.then(Sp,Sp),n}function Sp(){if(--vu===0&&$r!==null){Xs!==null&&(Xs.status="fulfilled");var t=$r;$r=null,ks=0,Xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function hx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var yp=z.S;z.S=function(t,n){ag=lt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fx(t,n),yp!==null&&yp(t,n)};var ls=O(null);function xu(){var t=ls.current;return t!==null?t:ke.pooledCache}function ll(t,n){n===null?yt(ls,ls.current):yt(ls,n.pool)}function Mp(){var t=xu();return t===null?null:{parent:en._currentValue,pool:t}}var Ws=Error(s(460)),Su=Error(s(474)),cl=Error(s(542)),ul={then:function(){}};function Ep(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Tp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ap(t),t;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ap(t),t}throw us=n,Ws}}function cs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(us=a,Ws):a}}var us=null;function bp(){if(us===null)throw Error(s(459));var t=us;return us=null,t}function Ap(t){if(t===Ws||t===cl)throw Error(s(483))}var Ys=null,to=0;function fl(t){var n=to;return to+=1,Ys===null&&(Ys=[]),Tp(Ys,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function hl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Rp(t){function n(j,F){if(t){var J=j.deletions;J===null?(j.deletions=[F],j.flags|=16):J.push(F)}}function a(j,F){if(!t)return null;for(;F!==null;)n(j,F),F=F.sibling;return null}function o(j){for(var F=new Map;j!==null;)j.key!==null?F.set(j.key,j):F.set(j.index,j),j=j.sibling;return F}function c(j,F){return j=Xi(j,F),j.index=0,j.sibling=null,j}function f(j,F,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<F?(j.flags|=67108866,F):J):(j.flags|=67108866,F)):(j.flags|=1048576,F)}function x(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,F,J,pt){return F===null||F.tag!==6?(F=lu(J,j.mode,pt),F.return=j,F):(F=c(F,J),F.return=j,F)}function B(j,F,J,pt){var jt=J.type;return jt===C?ht(j,F,J.props.children,pt,J.key):F!==null&&(F.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===V&&cs(jt)===F.type)?(F=c(F,J.props),eo(F,J),F.return=j,F):(F=al(J.type,J.key,J.props,null,j.mode,pt),eo(F,J),F.return=j,F)}function $(j,F,J,pt){return F===null||F.tag!==4||F.stateNode.containerInfo!==J.containerInfo||F.stateNode.implementation!==J.implementation?(F=cu(J,j.mode,pt),F.return=j,F):(F=c(F,J.children||[]),F.return=j,F)}function ht(j,F,J,pt,jt){return F===null||F.tag!==7?(F=as(J,j.mode,pt,jt),F.return=j,F):(F=c(F,J),F.return=j,F)}function mt(j,F,J){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=lu(""+F,j.mode,J),F.return=j,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case M:return J=al(F.type,F.key,F.props,null,j.mode,J),eo(J,F),J.return=j,J;case b:return F=cu(F,j.mode,J),F.return=j,F;case V:return F=cs(F),mt(j,F,J)}if(_t(F)||ut(F))return F=as(F,j.mode,J,null),F.return=j,F;if(typeof F.then=="function")return mt(j,fl(F),J);if(F.$$typeof===N)return mt(j,ol(j,F),J);hl(j,F)}return null}function et(j,F,J,pt){var jt=F!==null?F.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return jt!==null?null:T(j,F,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===jt?B(j,F,J,pt):null;case b:return J.key===jt?$(j,F,J,pt):null;case V:return J=cs(J),et(j,F,J,pt)}if(_t(J)||ut(J))return jt!==null?null:ht(j,F,J,pt,null);if(typeof J.then=="function")return et(j,F,fl(J),pt);if(J.$$typeof===N)return et(j,F,ol(j,J),pt);hl(j,J)}return null}function rt(j,F,J,pt,jt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,T(F,j,""+pt,jt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return j=j.get(pt.key===null?J:pt.key)||null,B(F,j,pt,jt);case b:return j=j.get(pt.key===null?J:pt.key)||null,$(F,j,pt,jt);case V:return pt=cs(pt),rt(j,F,J,pt,jt)}if(_t(pt)||ut(pt))return j=j.get(J)||null,ht(F,j,pt,jt,null);if(typeof pt.then=="function")return rt(j,F,J,fl(pt),jt);if(pt.$$typeof===N)return rt(j,F,J,ol(F,pt),jt);hl(F,pt)}return null}function Vt(j,F,J,pt){for(var jt=null,be=null,Yt=F,le=F=0,xe=null;Yt!==null&&le<J.length;le++){Yt.index>le?(xe=Yt,Yt=null):xe=Yt.sibling;var Ae=et(j,Yt,J[le],pt);if(Ae===null){Yt===null&&(Yt=xe);break}t&&Yt&&Ae.alternate===null&&n(j,Yt),F=f(Ae,F,le),be===null?jt=Ae:be.sibling=Ae,be=Ae,Yt=xe}if(le===J.length)return a(j,Yt),ye&&Wi(j,le),jt;if(Yt===null){for(;le<J.length;le++)Yt=mt(j,J[le],pt),Yt!==null&&(F=f(Yt,F,le),be===null?jt=Yt:be.sibling=Yt,be=Yt);return ye&&Wi(j,le),jt}for(Yt=o(Yt);le<J.length;le++)xe=rt(Yt,j,le,J[le],pt),xe!==null&&(t&&xe.alternate!==null&&Yt.delete(xe.key===null?le:xe.key),F=f(xe,F,le),be===null?jt=xe:be.sibling=xe,be=xe);return t&&Yt.forEach(function(Ha){return n(j,Ha)}),ye&&Wi(j,le),jt}function Kt(j,F,J,pt){if(J==null)throw Error(s(151));for(var jt=null,be=null,Yt=F,le=F=0,xe=null,Ae=J.next();Yt!==null&&!Ae.done;le++,Ae=J.next()){Yt.index>le?(xe=Yt,Yt=null):xe=Yt.sibling;var Ha=et(j,Yt,Ae.value,pt);if(Ha===null){Yt===null&&(Yt=xe);break}t&&Yt&&Ha.alternate===null&&n(j,Yt),F=f(Ha,F,le),be===null?jt=Ha:be.sibling=Ha,be=Ha,Yt=xe}if(Ae.done)return a(j,Yt),ye&&Wi(j,le),jt;if(Yt===null){for(;!Ae.done;le++,Ae=J.next())Ae=mt(j,Ae.value,pt),Ae!==null&&(F=f(Ae,F,le),be===null?jt=Ae:be.sibling=Ae,be=Ae);return ye&&Wi(j,le),jt}for(Yt=o(Yt);!Ae.done;le++,Ae=J.next())Ae=rt(Yt,j,le,Ae.value,pt),Ae!==null&&(t&&Ae.alternate!==null&&Yt.delete(Ae.key===null?le:Ae.key),F=f(Ae,F,le),be===null?jt=Ae:be.sibling=Ae,be=Ae);return t&&Yt.forEach(function(ES){return n(j,ES)}),ye&&Wi(j,le),jt}function Be(j,F,J,pt){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var jt=J.key;F!==null;){if(F.key===jt){if(jt=J.type,jt===C){if(F.tag===7){a(j,F.sibling),pt=c(F,J.props.children),pt.return=j,j=pt;break t}}else if(F.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===V&&cs(jt)===F.type){a(j,F.sibling),pt=c(F,J.props),eo(pt,J),pt.return=j,j=pt;break t}a(j,F);break}else n(j,F);F=F.sibling}J.type===C?(pt=as(J.props.children,j.mode,pt,J.key),pt.return=j,j=pt):(pt=al(J.type,J.key,J.props,null,j.mode,pt),eo(pt,J),pt.return=j,j=pt)}return x(j);case b:t:{for(jt=J.key;F!==null;){if(F.key===jt)if(F.tag===4&&F.stateNode.containerInfo===J.containerInfo&&F.stateNode.implementation===J.implementation){a(j,F.sibling),pt=c(F,J.children||[]),pt.return=j,j=pt;break t}else{a(j,F);break}else n(j,F);F=F.sibling}pt=cu(J,j.mode,pt),pt.return=j,j=pt}return x(j);case V:return J=cs(J),Be(j,F,J,pt)}if(_t(J))return Vt(j,F,J,pt);if(ut(J)){if(jt=ut(J),typeof jt!="function")throw Error(s(150));return J=jt.call(J),Kt(j,F,J,pt)}if(typeof J.then=="function")return Be(j,F,fl(J),pt);if(J.$$typeof===N)return Be(j,F,ol(j,J),pt);hl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,F!==null&&F.tag===6?(a(j,F.sibling),pt=c(F,J),pt.return=j,j=pt):(a(j,F),pt=lu(J,j.mode,pt),pt.return=j,j=pt),x(j)):a(j,F)}return function(j,F,J,pt){try{to=0;var jt=Be(j,F,J,pt);return Ys=null,jt}catch(Yt){if(Yt===Ws||Yt===cl)throw Yt;var be=Yn(29,Yt,null,j.mode);return be.lanes=pt,be.return=j,be}finally{}}}var fs=Rp(!0),Cp=Rp(!1),Ea=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ta(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=il(t),fp(t,null,a),n}return nl(t,o,n,a),il(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Br(t,a)}}function Eu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function io(){if(Tu){var t=Xs;if(t!==null)throw t}}function ao(t,n,a,o){Tu=!1;var c=t.updateQueue;Ea=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,$=B.next;B.next=null,x===null?f=$:x.next=$,x=B;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==x&&(T===null?ht.firstBaseUpdate=$:T.next=$,ht.lastBaseUpdate=B))}if(f!==null){var mt=c.baseState;x=0,ht=$=B=null,T=f;do{var et=T.lane&-536870913,rt=et!==T.lane;if(rt?(ve&et)===et:(o&et)===et){et!==0&&et===ks&&(Tu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=t,Kt=T;et=n;var Be=a;switch(Kt.tag){case 1:if(Vt=Kt.payload,typeof Vt=="function"){mt=Vt.call(Be,mt,et);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=Kt.payload,et=typeof Vt=="function"?Vt.call(Be,mt,et):Vt,et==null)break t;mt=g({},mt,et);break t;case 2:Ea=!0}}et=T.callback,et!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[et]:rt.push(et))}else rt={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?($=ht=rt,B=mt):ht=ht.next=rt,x|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ht===null&&(B=mt),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Da|=x,t.lanes=x,t.memoizedState=mt}}function wp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Dp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wp(a[t],n)}var qs=O(null),dl=O(0);function Up(t,n){t=na,yt(dl,t),yt(qs,n),na=t|n.baseLanes}function bu(){yt(dl,na),yt(qs,qs.current)}function Au(){na=dl.current,tt(qs),tt(dl)}var qn=O(null),oi=null;function Aa(t){var n=t.alternate;yt(Qe,Qe.current&1),yt(qn,t),oi===null&&(n===null||qs.current!==null||n.memoizedState!==null)&&(oi=t)}function Ru(t){yt(Qe,Qe.current),yt(qn,t),oi===null&&(oi=t)}function Lp(t){t.tag===22?(yt(Qe,Qe.current),yt(qn,t),oi===null&&(oi=t)):Ra()}function Ra(){yt(Qe,Qe.current),yt(qn,qn.current)}function jn(t){tt(qn),oi===t&&(oi=null),tt(Qe)}var Qe=O(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||Pf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=0,re=null,ze=null,nn=null,ml=!1,js=!1,hs=!1,gl=0,so=0,Zs=null,dx=0;function Ze(){throw Error(s(321))}function Cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function wu(t,n,a,o,c,f){return ji=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?mm:Xu,hs=!1,f=a(o,c),hs=!1,js&&(f=Op(n,a,o,c)),Np(t),f}function Np(t){z.H=lo;var n=ze!==null&&ze.next!==null;if(ji=0,nn=ze=re=null,ml=!1,so=0,Zs=null,n)throw Error(s(300));t===null||an||(t=t.dependencies,t!==null&&rl(t)&&(an=!0))}function Op(t,n,a,o){re=t;var c=0;do{if(js&&(Zs=null),so=0,js=!1,25<=c)throw Error(s(301));if(c+=1,nn=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=gm,f=n(a,o)}while(js);return f}function px(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(re.flags|=1024),n}function Du(){var t=gl!==0;return gl=0,t}function Uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Lu(t){if(ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ml=!1}ji=0,nn=ze=re=null,js=!1,so=gl=0,Zs=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?re.memoizedState=nn=t:nn=nn.next=t,nn}function Je(){if(ze===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=nn===null?re.memoizedState:nn.next;if(n!==null)nn=n,ze=t;else{if(t===null)throw re.alternate===null?Error(s(467)):Error(s(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},nn===null?re.memoizedState=nn=t:nn=nn.next=t}return nn}function _l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=so;return so+=1,Zs===null&&(Zs=[]),t=Tp(Zs,t,n),n=re,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?mm:Xu),t}function vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===N)return Mn(t)}throw Error(s(438,String(t)))}function Nu(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_l(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Zi(t,n){return typeof n=="function"?n(t):n}function xl(t){var n=Je();return Ou(n,ze,t)}function Ou(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=x=null,B=null,$=n,ht=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(ve&mt)===mt:(ji&mt)===mt){var et=$.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===ks&&(ht=!0);else if((ji&et)===et){$=$.next,et===ks&&(ht=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=mt,x=f):B=B.next=mt,re.lanes|=et,Da|=et;mt=$.action,hs&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else et={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=et,x=f):B=B.next=et,re.lanes|=mt,Da|=mt;$=$.next}while($!==null&&$!==n);if(B===null?x=f:B.next=T,!Wn(f,t.memoizedState)&&(an=!0,ht&&(a=Xs,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Pu(t){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Wn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Pp(t,n,a){var o=re,c=Je(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Wn((ze||c).memoizedState,a);if(x&&(c.memoizedState=a,an=!0),c=c.queue,Bu(Bp.bind(null,o,c,t),[t]),c.getSnapshot!==n||x||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Ks(9,{destroy:void 0},Ip.bind(null,o,c,a,n),null),ke===null)throw Error(s(349));f||(ji&127)!==0||zp(o,n,a)}return a}function zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=_l(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ip(t,n,a,o){n.value=a,n.getSnapshot=o,Fp(n)&&Hp(t)}function Bp(t,n,a){return a(function(){Fp(n)&&Hp(t)})}function Fp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Hp(t){var n=is(t,2);n!==null&&Gn(n,t,2)}function zu(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),hs){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},n}function Gp(t,n,a,o){return t.baseState=a,Ou(t,ze,typeof o=="function"?o:Zi)}function mx(t,n,a,o,c){if(Ml(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Vp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var T=a(c,o),B=z.S;B!==null&&B(x,T),kp(t,n,T)}catch($){Iu(t,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),z.T=f}}else try{f=a(c,o),kp(t,n,f)}catch($){Iu(t,n,$)}}function kp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Xp(t,n,o)},function(o){return Iu(t,n,o)}):Xp(t,n,a)}function Xp(t,n,a){n.status="fulfilled",n.value=a,Wp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Vp(t,a)))}function Iu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Wp(n),n=n.next;while(n!==o)}t.action=null}function Wp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yp(t,n){return n}function qp(t,n){if(ye){var a=ke.formState;if(a!==null){t:{var o=re;if(ye){if(Xe){e:{for(var c=Xe,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xe=li(c.nextSibling),o=c.data==="F!";break t}}ya(o)}o=!1}o&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yp,lastRenderedState:n},a.queue=o,a=hm.bind(null,re,o),o.dispatch=a,o=zu(!1),f=ku.bind(null,re,!1,o.queue),o=Un(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=mx.bind(null,re,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function jp(t){var n=Je();return Zp(n,ze,t)}function Zp(t,n,a){if(n=Ou(t,n,Yp)[0],t=xl(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ro(n)}catch(x){throw x===Ws?cl:x}else o=n;n=Je();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Ks(9,{destroy:void 0},gx.bind(null,c,a),null)),[o,f,t]}function gx(t,n){t.action=n}function Kp(t){var n=Je(),a=ze;if(a!==null)return Zp(n,a,t);Je(),n=n.memoizedState,a=Je();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Ks(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=re.updateQueue,n===null&&(n=_l(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Qp(){return Je().memoizedState}function Sl(t,n,a,o){var c=Un();re.flags|=t,c.memoizedState=Ks(1|n,{destroy:void 0},a,o===void 0?null:o)}function yl(t,n,a,o){var c=Je();o=o===void 0?null:o;var f=c.memoizedState.inst;ze!==null&&o!==null&&Cu(o,ze.memoizedState.deps)?c.memoizedState=Ks(n,f,a,o):(re.flags|=t,c.memoizedState=Ks(1|n,f,a,o))}function Jp(t,n){Sl(8390656,8,t,n)}function Bu(t,n){yl(2048,8,t,n)}function _x(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=_l(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function $p(t){var n=Je().memoizedState;return _x({ref:n,nextImpl:t}),function(){if((Re&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function tm(t,n){return yl(4,2,t,n)}function em(t,n){return yl(4,4,t,n)}function nm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function im(t,n,a){a=a!=null?a.concat([t]):null,yl(4,4,nm.bind(null,n,t),a)}function Fu(){}function am(t,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Cu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function sm(t,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Cu(n,o[1]))return o[0];if(o=t(),hs){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[o,n],o}function Hu(t,n,a){return a===void 0||(ji&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=rg(),re.lanes|=t,Da|=t,a)}function rm(t,n,a,o){return Wn(a,n)?a:qs.current!==null?(t=Hu(t,a,o),Wn(t,n)||(an=!0),t):(ji&42)===0||(ji&1073741824)!==0&&(ve&261930)===0?(an=!0,t.memoizedState=a):(t=rg(),re.lanes|=t,Da|=t,n)}function om(t,n,a,o,c){var f=K.p;K.p=f!==0&&8>f?f:8;var x=z.T,T={};z.T=T,ku(t,!1,n,a);try{var B=c(),$=z.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=hx(B,o);oo(t,n,ht,Qn(t))}else oo(t,n,o,Qn(t))}catch(mt){oo(t,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{K.p=f,x!==null&&T.types!==null&&(x.types=T.types),z.T=x}}function vx(){}function Gu(t,n,a,o){if(t.tag!==5)throw Error(s(476));var c=lm(t).queue;om(t,c,n,Z,a===null?vx:function(){return cm(t),a(o)})}function lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function cm(t){var n=lm(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},Qn())}function Vu(){return Mn(bo)}function um(){return Je().memoizedState}function fm(){return Je().memoizedState}function xx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ta(a);var o=ba(n,t,a);o!==null&&(Gn(o,n,a),no(o,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function Sx(t,n,a){var o=Qn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(t)?dm(n,a):(a=ru(t,n,a,o),a!==null&&(Gn(a,t,o),pm(a,n,o)))}function hm(t,n,a){var o=Qn();oo(t,n,a,o)}function oo(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(t))dm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,x))return nl(t,n,c,0),ke===null&&el(),!1}catch{}finally{}if(a=ru(t,n,c,o),a!==null)return Gn(a,t,o),pm(a,n,o),!0}return!1}function ku(t,n,a,o){if(o={lane:2,revertLane:Mf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ml(t)){if(n)throw Error(s(479))}else n=ru(t,a,o,2),n!==null&&Gn(n,t,2)}function Ml(t){var n=t.alternate;return t===re||n!==null&&n===re}function dm(t,n){js=ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function pm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Br(t,a)}}var lo={readContext:Mn,use:vl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};lo.useEffectEvent=Ze;var mm={readContext:Mn,use:vl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Jp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Sl(4194308,4,nm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Sl(4194308,4,t,n)},useInsertionEffect:function(t,n){Sl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var o=t();if(hs){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Un();if(a!==void 0){var c=a(n);if(hs){Pt(!0);try{a(n)}finally{Pt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Sx.bind(null,re,t),[o.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=zu(t);var n=t.queue,a=hm.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Un();return Hu(a,t,n)},useTransition:function(){var t=zu(!1);return t=om.bind(null,re,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=re,c=Un();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(ve&127)!==0||zp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jp(Bp.bind(null,o,f,t),[t]),o.flags|=2048,Ks(9,{destroy:void 0},Ip.bind(null,o,f,a,n),null),a},useId:function(){var t=Un(),n=ke.identifierPrefix;if(ye){var a=Di,o=wi;a=(o&~(1<<32-$t(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:qp,useActionState:qp,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return Un().memoizedState=xx.bind(null,re)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((Re&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:Mn,use:vl,useCallback:am,useContext:Mn,useEffect:Bu,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:sm,useReducer:xl,useRef:Qp,useState:function(){return xl(Zi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Je();return rm(a,ze.memoizedState,t,n)},useTransition:function(){var t=xl(Zi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Vu,useFormState:jp,useActionState:jp,useOptimistic:function(t,n){var a=Je();return Gp(a,ze,t,n)},useMemoCache:Nu,useCacheRefresh:fm};Xu.useEffectEvent=$p;var gm={readContext:Mn,use:vl,useCallback:am,useContext:Mn,useEffect:Bu,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:sm,useReducer:Pu,useRef:Qp,useState:function(){return Pu(Zi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Je();return ze===null?Hu(a,t,n):rm(a,ze.memoizedState,t,n)},useTransition:function(){var t=Pu(Zi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Vu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=Je();return ze!==null?Gp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:fm};gm.useEffectEvent=$p;function Wu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Yu={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Qn(),c=Ta(o);c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,o),n!==null&&(Gn(n,t,o),no(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Qn(),c=Ta(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,o),n!==null&&(Gn(n,t,o),no(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),o=Ta(a);o.tag=2,n!=null&&(o.callback=n),n=ba(t,o,a),n!==null&&(Gn(n,t,a),no(n,t,a))}};function _m(t,n,a,o,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!jr(a,o)||!jr(c,f):!0}function vm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Yu.enqueueReplaceState(n,n.state,null)}function ds(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function xm(t){tl(t)}function Sm(t){console.error(t)}function ym(t){tl(t)}function El(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Mm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(t,n,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){El(t,n)},a}function Em(t){return t=Ta(t),t.tag=3,t}function Tm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Mm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Mm(n,a,o),typeof c!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function yx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Pl():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),xf(t,o,c)),!1;case 22:return a.flags|=65536,o===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),xf(t,o,c)),!1}throw Error(s(435,a.tag))}return xf(t,o,c),Pl(),!1}if(ye)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==hu&&(t=Error(s(422),{cause:o}),Qr(ii(t,a)))):(o!==hu&&(n=Error(s(423),{cause:o}),Qr(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ii(o,a),c=qu(t.stateNode,o,c),Eu(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:o});if(f=ii(f,a),_o===null?_o=[f]:_o.push(f),Ke!==4&&(Ke=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=qu(a.stateNode,o,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ua===null||!Ua.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Em(c),Tm(c,t,a,o),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var ju=Error(s(461)),an=!1;function En(t,n,a,o){n.child=t===null?Cp(n,null,a,o):fs(n,t.child,a,o)}function bm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return os(n),o=wu(t,n,a,x,f,c),T=Du(),t!==null&&!an?(Uu(t,n,c),Ki(t,n,c)):(ye&&T&&uu(n),n.flags|=1,En(t,n,o,c),n.child)}function Am(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Rm(t,n,f,o,c)):(t=al(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(x,o)&&t.ref===n.ref)return Ki(t,n,c)}return n.flags|=1,t=Xi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Rm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(jr(f,o)&&t.ref===n.ref)if(an=!1,n.pendingProps=o=f,nf(t,c))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,Ki(t,n,c)}return Zu(t,n,a,o,c)}function Cm(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return wm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ll(n,f!==null?f.cachePool:null),f!==null?Up(n,f):bu(),Lp(n);else return o=n.lanes=536870912,wm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(ll(n,f.cachePool),Up(n,f),Ra(),n.memoizedState=null):(t!==null&&ll(n,null),bu(),Ra());return En(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wm(t,n,a,o,c){var f=xu();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ll(n,null),bu(),Lp(n),t!==null&&Vs(t,n,o,!0),n.childLanes=c,null}function Tl(t,n){return n=Al({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Dm(t,n,a){return fs(n,t.child,null,a),t=Tl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function Mx(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(o.mode==="hidden")return t=Tl(n,o),n.lanes=536870912,co(null,t);if(Ru(n),(t=Xe)?(t=Vg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=dp(t),a.return=n,n.child=a,yn=n,Xe=null)):t=null,t===null)throw ya(n);return n.lanes=536870912,null}return Tl(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Ru(n),c)if(n.flags&256)n.flags&=-257,n=Dm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(an||Vs(t,n,a,!1),c=(a&t.childLanes)!==0,an||c){if(o=ke,o!==null&&(x=Ci(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,is(t,x),Gn(o,t,x),ju;Pl(),n=Dm(t,n,a)}else t=f.treeContext,Xe=li(x.nextSibling),yn=n,ye=!0,Sa=null,ri=!1,t!==null&&gp(n,t),n=Tl(n,o),n.flags|=4096;return n}return t=Xi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,o,c){return os(n),a=wu(t,n,a,o,void 0,c),o=Du(),t!==null&&!an?(Uu(t,n,c),Ki(t,n,c)):(ye&&o&&uu(n),n.flags|=1,En(t,n,a,c),n.child)}function Um(t,n,a,o,c,f){return os(n),n.updateQueue=null,a=Op(n,o,a,c),Np(t),o=Du(),t!==null&&!an?(Uu(t,n,f),Ki(t,n,f)):(ye&&o&&uu(n),n.flags|=1,En(t,n,a,f),n.child)}function Lm(t,n,a,o,c){if(os(n),n.stateNode===null){var f=Bs,x=a.contextType;typeof x=="object"&&x!==null&&(f=Mn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},yu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Mn(x):Bs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Wu(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Yu.enqueueReplaceState(f,f.state,null),ao(n,o,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=ds(a,T);f.props=B;var $=f.context,ht=a.contextType;x=Bs,typeof ht=="object"&&ht!==null&&(x=Mn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==x)&&vm(n,f,o,x),Ea=!1;var et=n.memoizedState;f.state=et,ao(n,o,f,c),io(),$=n.memoizedState,T||et!==$||Ea?(typeof mt=="function"&&(Wu(n,a,mt,o),$=n.memoizedState),(B=Ea||_m(n,a,B,o,et,$,x))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=x,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Mu(t,n),x=n.memoizedProps,ht=ds(a,x),f.props=ht,mt=n.pendingProps,et=f.context,$=a.contextType,B=Bs,typeof $=="object"&&$!==null&&(B=Mn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==mt||et!==B)&&vm(n,f,o,B),Ea=!1,et=n.memoizedState,f.state=et,ao(n,o,f,c),io();var rt=n.memoizedState;x!==mt||et!==rt||Ea||t!==null&&t.dependencies!==null&&rl(t.dependencies)?(typeof T=="function"&&(Wu(n,a,T,o),rt=n.memoizedState),(ht=Ea||_m(n,a,ht,o,et,rt,B)||t!==null&&t.dependencies!==null&&rl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=B,o=ht):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,bl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=fs(n,t.child,null,c),n.child=fs(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ki(t,n,c),t}function Nm(t,n,a,o){return ss(),n.flags|=256,En(t,n,a,o),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:Mp()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Om(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(c?Aa(n):Ra(),(t=Xe)?(t=Vg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=dp(t),a.return=n,n.child=a,yn=n,Xe=null)):t=null,t===null)throw ya(n);return Pf(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(Ra(),c=n.mode,T=Al({mode:"hidden",children:T},c),o=as(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Qu(a),o.childLanes=Ju(t,x,a),n.memoizedState=Ku,co(null,o)):(Aa(n),$u(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Aa(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(Ra(),n.child=t.child,n.flags|=128,n=null):(Ra(),T=o.fallback,c=n.mode,o=Al({mode:"visible",children:o.children},c),T=as(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,fs(n,t.child,null,a),o=n.child,o.memoizedState=Qu(a),o.childLanes=Ju(t,x,a),n.memoizedState=Ku,n=co(null,o));else if(Aa(n),Pf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(s(419)),o.stack="",o.digest=x,Qr({value:o,source:null,stack:null}),n=tf(t,n,a)}else if(an||Vs(t,n,a,!1),x=(a&t.childLanes)!==0,an||x){if(x=ke,x!==null&&(o=Ci(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,is(t,o),Gn(x,t,o),ju;Of(T)||Pl(),n=tf(t,n,a)}else Of(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Xe=li(T.nextSibling),yn=n,ye=!0,Sa=null,ri=!1,t!==null&&gp(n,t),n=$u(n,o.children),n.flags|=4096);return n}return c?(Ra(),T=o.fallback,c=n.mode,B=t.child,$=B.sibling,o=Xi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?T=Xi($,T):(T=as(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,co(null,o),o=n.child,T=t.child.memoizedState,T===null?T=Qu(a):(c=T.cachePool,c!==null?(B=en._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Mp(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=Ju(t,x,a),n.memoizedState=Ku,co(t.child,o)):(Aa(n),a=t.child,t=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=Al({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Al(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function tf(t,n,a){return fs(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Pm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),mu(t.return,n,a)}function ef(t,n,a,o,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function zm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var x=Qe.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,yt(Qe,x),En(t,n,o,a),o=ye?Kr:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pm(t,a,n);else if(t.tag===19)Pm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f,o);break;case"together":ef(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Vs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Xi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Xi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&rl(t)))}function Ex(t,n,a){switch(n.tag){case 3:kt(n,n.stateNode.containerInfo),Ma(n,en,t.memoizedState.cache),ss();break;case 27:case 5:Qt(n);break;case 4:kt(n,n.stateNode.containerInfo);break;case 10:Ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Om(t,n,a):(Aa(n),t=Ki(t,n,a),t!==null?t.sibling:null);Aa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Vs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return zm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(Qe,Qe.current),o)break;return null;case 22:return n.lanes=0,Cm(t,n,a,n.pendingProps);case 24:Ma(n,en,t.memoizedState.cache)}return Ki(t,n,a)}function Im(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return an=!1,Ex(t,n,a);an=(t.flags&131072)!==0}else an=!1,ye&&(n.flags&1048576)!==0&&mp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=cs(n.elementType),n.type=t,typeof t=="function")ou(t)?(o=ds(t,o),n.tag=1,n=Lm(null,n,t,o,a)):(n.tag=0,n=Zu(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===A){n.tag=11,n=bm(null,n,t,o,a);break t}else if(c===D){n.tag=14,n=Am(null,n,t,o,a);break t}}throw n=gt(t)||t,Error(s(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ds(o,n.pendingProps),Lm(t,n,o,c,a);case 3:t:{if(kt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Mu(t,n),ao(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ma(n,en,o),o!==f.cache&&gu(n,[en],a,!0),io(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Nm(t,n,o,a);break t}else if(o!==c){c=ii(Error(s(424)),n),Qr(c),n=Nm(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=li(t.firstChild),yn=n,ye=!0,Sa=null,ri=!0,a=Cp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ss(),o===c){n=Ki(t,n,a);break t}En(t,n,o,a)}n=n.child}return n;case 26:return bl(t,n),t===null?(a=jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,o=Vl(Et.current).createElement(a),o[je]=n,o[xn]=t,Tn(o,a,t),Lt(o),n.stateNode=o):n.memoizedState=jg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qt(n),t===null&&ye&&(o=n.stateNode=Wg(n.type,n.pendingProps,Et.current),yn=n,ri=!0,c=Xe,Pa(n.type)?(zf=c,Xe=li(o.firstChild)):Xe=c),En(t,n,n.pendingProps.children,a),bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((c=o=Xe)&&(o=$x(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,yn=n,Xe=li(o.firstChild),ri=!1,c=!0):c=!1),c||ya(n)),Qt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,Uf(c,f)?o=null:x!==null&&Uf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=wu(t,n,px,null,null,a),bo._currentValue=c),bl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&ye&&((t=a=Xe)&&(a=tS(a,n.pendingProps,ri),a!==null?(n.stateNode=a,yn=n,Xe=null,t=!0):t=!1),t||ya(n)),null;case 13:return Om(t,n,a);case 4:return kt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=fs(n,null,o,a):En(t,n,o,a),n.child;case 11:return bm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ma(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,os(n),c=Mn(c),o=o(c),n.flags|=1,En(t,n,o,a),n.child;case 14:return Am(t,n,n.type,n.pendingProps,a);case 15:return Rm(t,n,n.type,n.pendingProps,a);case 19:return zm(t,n,a);case 31:return Mx(t,n,a);case 22:return Cm(t,n,a,n.pendingProps);case 24:return os(n),o=Mn(en),t===null?(c=xu(),c===null&&(c=ke,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},yu(n),Ma(n,en,c)):((t.lanes&a)!==0&&(Mu(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ma(n,en,o)):(o=f.cache,Ma(n,en,o),o!==c.cache&&gu(n,[en],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Qi(t){t.flags|=4}function af(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(ug())t.flags|=8192;else throw us=ul,Su}else t.flags&=-16777217}function Bm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$g(n))if(ug())t.flags|=8192;else throw us=ul,Su}function Rl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ln():536870912,t.lanes|=n,tr|=n)}function uo(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Tx(t,n,a){var o=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(en),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Gs(n)?Qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),We(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Qi(n),f!==null?(We(n),Bm(n,f)):(We(n),af(n,c,null,o,a))):f?f!==t.memoizedState?(Qi(n),We(n),Bm(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Qi(n),We(n),af(n,c,t,o,a)),null;case 27:if(de(n),a=Et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return We(n),null}t=G.current,Gs(n)?_p(n):(t=Wg(c,o,a),n.stateNode=t,Qi(n))}return We(n),null;case 5:if(de(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(f=G.current,Gs(n))_p(n);else{var x=Vl(Et.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}f[je]=n,f[xn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Tn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Qi(n)}}return We(n),af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Et.current,Gs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=yn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[je]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Og(t.nodeValue,a)),t||ya(n,!0)}else t=Vl(t).createTextNode(o),t[je]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Gs(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[je]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Gs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[je]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),We(n),null);case 4:return It(),t===null&&Af(n.stateNode.containerInfo),We(n),null;case 10:return qi(n.type),We(n),null;case 19:if(tt(Qe),o=n.memoizedState,o===null)return We(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)uo(o,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,uo(o,!1),t=f.updateQueue,n.updateQueue=t,Rl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)hp(a,t),a=a.sibling;return yt(Qe,Qe.current&1|2),ye&&Wi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&lt()>Ll&&(n.flags|=128,c=!0,uo(o,!1),n.lanes=4194304)}else{if(!c)if(t=pl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Rl(n,t),uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!ye)return We(n),null}else 2*lt()-o.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,c=!0,uo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=lt(),t.sibling=null,a=Qe.current,yt(Qe,c?a&1|2:a&1),ye&&Wi(n,o.treeForkCount),t):(We(n),null);case 22:case 23:return jn(n),Au(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&tt(ls),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(en),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function bx(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return qi(en),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(Qe),null;case 4:return It(),null;case 10:return qi(n.type),null;case 22:case 23:return jn(n),Au(),t!==null&&tt(ls),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return qi(en),null;case 25:return null;default:return null}}function Fm(t,n){switch(fu(n),n.tag){case 3:qi(en),It();break;case 26:case 27:case 5:de(n);break;case 4:It();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:tt(Qe);break;case 10:qi(n.type);break;case 22:case 23:jn(n),Au(),t!==null&&tt(ls);break;case 24:qi(en)}}function fo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(T){Ne(n,n.return,T)}}function Ca(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var B=a,$=T;try{$()}catch(ht){Ne(c,B,ht)}}}o=o.next}while(o!==f)}}catch(ht){Ne(n,n.return,ht)}}function Hm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Dp(n,a)}catch(o){Ne(t,t.return,o)}}}function Gm(t,n,a){a.props=ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ne(t,n,o)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Ne(t,n,c)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ne(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ne(t,n,c)}else a.current=null}function Vm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ne(t,t.return,c)}}function sf(t,n,a){try{var o=t.stateNode;qx(o,t.type,a,n),o[xn]=n}catch(c){Ne(t,t.return,c)}}function km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi));else if(o!==4&&(o===27&&Pa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(of(t,n,a),t=t.sibling;t!==null;)of(t,n,a),t=t.sibling}function Cl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Pa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Cl(t,n,a),t=t.sibling;t!==null;)Cl(t,n,a),t=t.sibling}function Xm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[je]=t,n[xn]=a}catch(f){Ne(t,t.return,f)}}var Ji=!1,sn=!1,lf=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Ax(t,n){if(t=t.containerInfo,wf=Zl,t=ip(t),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,B=-1,$=0,ht=0,mt=t,et=null;e:for(;;){for(var rt;mt!==a||c!==0&&mt.nodeType!==3||(T=x+c),mt!==f||o!==0&&mt.nodeType!==3||(B=x+o),mt.nodeType===3&&(x+=mt.nodeValue.length),(rt=mt.firstChild)!==null;)et=mt,mt=rt;for(;;){if(mt===t)break e;if(et===a&&++$===c&&(T=x),et===f&&++ht===o&&(B=x),(rt=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=rt}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:t,selectionRange:a},Zl=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Vt=ds(a.type,c);t=o.getSnapshotBeforeUpdate(Vt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Ne(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function Ym(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),o&4&&fo(5,a);break;case 1:if(ta(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ne(a,a.return,x)}else{var c=ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ne(a,a.return,x)}}o&64&&Hm(a),o&512&&ho(a,a.return);break;case 3:if(ta(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dp(t,n)}catch(x){Ne(a,a.return,x)}}break;case 27:n===null&&o&4&&Xm(a);case 26:case 5:ta(t,a),n===null&&o&4&&Vm(a),o&512&&ho(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),o&4&&Zm(t,a);break;case 13:ta(t,a),o&4&&Km(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Px.bind(null,a),eS(t,a))));break;case 22:if(o=a.memoizedState!==null||Ji,!o){n=n!==null&&n.memoizedState!==null||sn,c=Ji;var f=sn;Ji=o,(sn=n)&&!f?ea(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),Ji=c,sn=f}break;case 30:break;default:ta(t,a)}}function qm(t){var n=t.alternate;n!==null&&(t.alternate=null,qm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&at(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,In=!1;function $i(t,n,a){for(a=a.child;a!==null;)jm(t,n,a),a=a.sibling}function jm(t,n,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:sn||Ui(a,n),$i(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ui(a,n);var o=qe,c=In;Pa(a.type)&&(qe=a.stateNode,In=!1),$i(t,n,a),Mo(a.stateNode),qe=o,In=c;break;case 5:sn||Ui(a,n);case 6:if(o=qe,c=In,qe=null,$i(t,n,a),qe=o,In=c,qe!==null)if(In)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ne(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ne(a,n,f)}break;case 18:qe!==null&&(In?(t=qe,Hg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),lr(t)):Hg(qe,a.stateNode));break;case 4:o=qe,c=In,qe=a.stateNode.containerInfo,In=!0,$i(t,n,a),qe=o,In=c;break;case 0:case 11:case 14:case 15:Ca(2,a,n),sn||Ca(4,a,n),$i(t,n,a);break;case 1:sn||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Gm(a,n,o)),$i(t,n,a);break;case 21:$i(t,n,a);break;case 22:sn=(o=sn)||a.memoizedState!==null,$i(t,n,a),sn=o;break;default:$i(t,n,a)}}function Zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{lr(t)}catch(a){Ne(n,n.return,a)}}}function Km(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{lr(t)}catch(a){Ne(n,n.return,a)}}function Rx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Wm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Wm),n;default:throw Error(s(435,t.tag))}}function wl(t,n){var a=Rx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=zx.bind(null,t,o);o.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Pa(T.type)){qe=T.stateNode,In=!1;break t}break;case 5:qe=T.stateNode,In=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(qe===null)throw Error(s(160));jm(f,x,c),qe=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Qm(n,t),n=n.sibling}var vi=null;function Qm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Fn(t),o&4&&(Ca(3,t,t.return),fo(3,t),Ca(5,t,t.return));break;case 1:Bn(n,t),Fn(t),o&512&&(sn||a===null||Ui(a,a.return)),o&64&&Ji&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=vi;if(Bn(n,t),Fn(t),o&512&&(sn||a===null||Ui(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[W]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,o,a),f[je]=t,Lt(f),o=f;break t;case"link":var x=Qg("link","href",c).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;case"meta":if(x=Qg("meta","content",c).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[je]=t,Lt(f),o=f}t.stateNode=o}else Jg(c,t.type,t.stateNode);else t.stateNode=Kg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Jg(c,t.type,t.stateNode):Kg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Fn(t),o&512&&(sn||a===null||Ui(a,a.return)),a!==null&&o&4&&sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Fn(t),o&512&&(sn||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{Us(c,"")}catch(Vt){Ne(t,t.return,Vt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,sf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(lf=!0);break;case 6:if(Bn(n,t),Fn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Vt){Ne(t,t.return,Vt)}}break;case 3:if(Wl=null,c=vi,vi=kl(n.containerInfo),Bn(n,t),vi=c,Fn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(Vt){Ne(t,t.return,Vt)}lf&&(lf=!1,Jm(t));break;case 4:o=vi,vi=kl(t.stateNode.containerInfo),Bn(n,t),Fn(t),vi=o;break;case 12:Bn(n,t),Fn(t);break;case 31:Bn(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,wl(t,o)));break;case 13:Bn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=lt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,wl(t,o)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=Ji,ht=sn;if(Ji=$||c,sn=ht||B,Bn(n,t),sn=ht,Ji=$,Fn(t),o&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Ji||sn||ps(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=B.stateNode;var mt=B.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Vt){Ne(B,B.return,Vt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Vt){Ne(B,B.return,Vt)}}}else if(n.tag===18){if(a===null){B=n;try{var rt=B.stateNode;c?Gg(rt,!0):Gg(B.stateNode,!1)}catch(Vt){Ne(B,B.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wl(t,a))));break;case 19:Bn(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,wl(t,o)));break;case 30:break;case 21:break;default:Bn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(km(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=rf(t);Cl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Us(x,""),a.flags&=-33);var T=rf(t);Cl(t,T,x);break;case 3:case 4:var B=a.stateNode.containerInfo,$=rf(t);of(t,$,B);break;default:throw Error(s(161))}}catch(ht){Ne(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Jm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ym(t,n.alternate,n),n=n.sibling}function ps(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ca(4,n,n.return),ps(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gm(n,n.return,a),ps(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ui(n,n.return),ps(n);break;case 22:n.memoizedState===null&&ps(n);break;case 30:ps(n);break;default:ps(n)}t=t.sibling}}function ea(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ea(c,f,a),fo(4,f);break;case 1:if(ea(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ne(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)wp(B[c],T)}catch($){Ne(o,o.return,$)}}a&&x&64&&Hm(f),ho(f,f.return);break;case 27:Xm(f);case 26:case 5:ea(c,f,a),a&&o===null&&x&4&&Vm(f),ho(f,f.return);break;case 12:ea(c,f,a);break;case 31:ea(c,f,a),a&&x&4&&Zm(c,f);break;case 13:ea(c,f,a),a&&x&4&&Km(c,f);break;case 22:f.memoizedState===null&&ea(c,f,a),ho(f,f.return);break;case 30:break;default:ea(c,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Jr(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t))}function xi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$m(t,n,a,o),n=n.sibling}function $m(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,o),c&2048&&fo(9,n);break;case 1:xi(t,n,a,o);break;case 3:xi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t)));break;case 12:if(c&2048){xi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ne(n,n.return,B)}}else xi(t,n,a,o);break;case 31:xi(t,n,a,o);break;case 13:xi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,o):po(t,n):f._visibility&2?xi(t,n,a,o):(f._visibility|=2,Qs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&cf(x,n);break;case 24:xi(t,n,a,o),c&2048&&uf(n.alternate,n);break;default:xi(t,n,a,o)}}function Qs(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,T=a,B=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:Qs(f,x,T,B,c),fo(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?Qs(f,x,T,B,c):po(f,x):(ht._visibility|=2,Qs(f,x,T,B,c)),c&&$&2048&&cf(x.alternate,x);break;case 24:Qs(f,x,T,B,c),c&&$&2048&&uf(x.alternate,x);break;default:Qs(f,x,T,B,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:po(a,o),c&2048&&cf(o.alternate,o);break;case 24:po(a,o),c&2048&&uf(o.alternate,o);break;default:po(a,o)}n=n.sibling}}var mo=8192;function Js(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)tg(t,n,a),t=t.sibling}function tg(t,n,a){switch(t.tag){case 26:Js(t,n,a),t.flags&mo&&t.memoizedState!==null&&dS(a,vi,t.memoizedState,t.memoizedProps);break;case 5:Js(t,n,a);break;case 3:case 4:var o=vi;vi=kl(t.stateNode.containerInfo),Js(t,n,a),vi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=mo,mo=16777216,Js(t,n,a),mo=o):Js(t,n,a));break;default:Js(t,n,a)}}function eg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ig(o,t)}eg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ng(t),t=t.sibling}function ng(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&Ca(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Dl(t)):go(t);break;default:go(t)}}function Dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ig(o,t)}eg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ca(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}t=t.sibling}}function ig(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=t;gn!==null;){o=gn;var c=o.sibling,f=o.return;if(qm(o),o===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var Cx={getCacheForType:function(t){var n=Mn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(en).controller.signal}},wx=typeof WeakMap=="function"?WeakMap:Map,Re=0,ke=null,me=null,ve=0,Le=0,Zn=null,wa=!1,$s=!1,ff=!1,na=0,Ke=0,Da=0,ms=0,hf=0,Kn=0,tr=0,_o=null,Hn=null,df=!1,Ul=0,ag=0,Ll=1/0,Nl=null,Ua=null,un=0,La=null,er=null,ia=0,pf=0,mf=null,sg=null,vo=0,gf=null;function Qn(){return(Re&2)!==0&&ve!==0?ve&-ve:z.T!==null?Mf():Fr()}function rg(){if(Kn===0)if((ve&536870912)===0||ye){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),Kn=t}else Kn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Kn}function Gn(t,n,a){(t===ke&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(nr(t,0),Na(t,ve,Kn,!1)),vn(t,a),((Re&2)===0||t!==ke)&&(t===ke&&((Re&2)===0&&(ms|=a),Ke===4&&Na(t,ve,Kn,!1)),Li(t))}function og(t,n,a){if((Re&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||te(t,n),c=o?Lx(t,n):vf(t,n,!0),f=o;do{if(c===0){$s&&!o&&Na(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Dx(a)){c=vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;c=_o;var B=T.current.memoizedState.isDehydrated;if(B&&(nr(T,x).flags|=256),x=vf(T,x,!1),x!==2){if(ff&&!B){T.errorRecoveryDisabledLanes|=f,ms|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){nr(t,0),Na(t,n,0,!0);break}t:{switch(o=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,Kn,!wa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ul+300-lt(),10<c)){if(Na(o,n,Kn,!wa),Nt(o,0,!0)!==0)break t;ia=n,o.timeoutHandle=Bg(lg.bind(null,o,a,Hn,Nl,df,n,Kn,ms,tr,wa,f,"Throttled",-0,0),c);break t}lg(o,a,Hn,Nl,df,n,Kn,ms,tr,wa,f,null,-0,0)}}break}while(!0);Li(t)}function lg(t,n,a,o,c,f,x,T,B,$,ht,mt,et,rt){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},tg(n,f,mt);var Vt=(f&62914560)===f?Ul-lt():(f&4194048)===f?ag-lt():0;if(Vt=pS(mt,Vt),Vt!==null){ia=f,t.cancelPendingCommit=Vt(gg.bind(null,t,n,f,a,o,c,x,T,B,ht,mt,null,et,rt)),Na(t,f,x,!$);return}}gg(t,n,f,a,o,c,x,T,B)}function Dx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(t,n,a,o){n&=~hf,n&=~ms,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-$t(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&Ir(t,a,n)}function Ol(){return(Re&6)===0?(xo(0),!1):!0}function _f(){if(me!==null){if(Le===0)var t=me.return;else t=me,Yi=rs=null,Lu(t),Ys=null,to=0,t=me;for(;t!==null;)Fm(t.alternate,t),t=t.return;me=null}}function nr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Kx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ia=0,_f(),ke=t,me=a=Xi(t.current,null),ve=n,Le=0,Zn=null,wa=!1,$s=te(t,n),ff=!1,tr=Kn=hf=ms=Da=Ke=0,Hn=_o=null,df=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-$t(o),f=1<<c;n|=t[c],o&=~f}return na=n,el(),a}function cg(t,n){re=null,z.H=lo,n===Ws||n===cl?(n=bp(),Le=3):n===Su?(n=bp(),Le=4):Le=n===ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,me===null&&(Ke=1,El(t,ii(n,t.current)))}function ug(){var t=qn.current;return t===null?!0:(ve&4194048)===ve?oi===null:(ve&62914560)===ve||(ve&536870912)!==0?t===oi:!1}function fg(){var t=z.H;return z.H=lo,t===null?lo:t}function hg(){var t=z.A;return z.A=Cx,t}function Pl(){Ke=4,wa||(ve&4194048)!==ve&&qn.current!==null||($s=!0),(Da&134217727)===0&&(ms&134217727)===0||ke===null||Na(ke,ve,Kn,!1)}function vf(t,n,a){var o=Re;Re|=2;var c=fg(),f=hg();(ke!==t||ve!==n)&&(Nl=null,nr(t,n)),n=!1;var x=Ke;t:do try{if(Le!==0&&me!==null){var T=me,B=Zn;switch(Le){case 8:_f(),x=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var $=Le;if(Le=0,Zn=null,ir(t,T,B,$),a&&$s){x=0;break t}break;default:$=Le,Le=0,Zn=null,ir(t,T,B,$)}}Ux(),x=Ke;break}catch(ht){cg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Yi=rs=null,Re=o,z.H=c,z.A=f,me===null&&(ke=null,ve=0,el()),x}function Ux(){for(;me!==null;)dg(me)}function Lx(t,n){var a=Re;Re|=2;var o=fg(),c=hg();ke!==t||ve!==n?(Nl=null,Ll=lt()+500,nr(t,n)):$s=te(t,n);t:do try{if(Le!==0&&me!==null){n=me;var f=Zn;e:switch(Le){case 1:Le=0,Zn=null,ir(t,n,f,1);break;case 2:case 9:if(Ep(f)){Le=0,Zn=null,pg(n);break}n=function(){Le!==2&&Le!==9||ke!==t||(Le=7),Li(t)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:Ep(f)?(Le=0,Zn=null,pg(n)):(Le=0,Zn=null,ir(t,n,f,7));break;case 5:var x=null;switch(me.tag){case 26:x=me.memoizedState;case 5:case 27:var T=me;if(x?$g(x):T.stateNode.complete){Le=0,Zn=null;var B=T.sibling;if(B!==null)me=B;else{var $=T.return;$!==null?(me=$,zl($)):me=null}break e}}Le=0,Zn=null,ir(t,n,f,5);break;case 6:Le=0,Zn=null,ir(t,n,f,6);break;case 8:_f(),Ke=6;break t;default:throw Error(s(462))}}Nx();break}catch(ht){cg(t,ht)}while(!0);return Yi=rs=null,z.H=o,z.A=c,Re=a,me!==null?0:(ke=null,ve=0,el(),Ke)}function Nx(){for(;me!==null&&!E();)dg(me)}function dg(t){var n=Im(t.alternate,t,na);t.memoizedProps=t.pendingProps,n===null?zl(t):me=n}function pg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Um(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Um(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Lu(n);default:Fm(a,n),n=me=hp(n,na),n=Im(a,n,na)}t.memoizedProps=t.pendingProps,n===null?zl(t):me=n}function ir(t,n,a,o){Yi=rs=null,Lu(n),Ys=null,to=0;var c=n.return;try{if(yx(t,c,n,a,ve)){Ke=1,El(t,ii(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Ke=1,El(t,ii(a,t.current)),me=null;return}n.flags&32768?(ye||o===1?t=!0:$s||(ve&536870912)!==0?t=!1:(wa=t=!0,(o===2||o===9||o===3||o===6)&&(o=qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),mg(n,t)):zl(n)}function zl(t){var n=t;do{if((n.flags&32768)!==0){mg(n,wa);return}t=n.return;var a=Tx(n.alternate,n,na);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Ke===0&&(Ke=5)}function mg(t,n){do{var a=bx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Ke=6,me=null}function gg(t,n,a,o,c,f,x,T,B){t.cancelPendingCommit=null;do Il();while(un!==0);if((Re&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=su,pi(t,a,f,x,T,B),t===ke&&(me=ke=null,ve=0),er=n,La=t,ia=a,pf=f,mf=c,sg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ix(Ct,function(){return yg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=K.p,K.p=2,x=Re,Re|=4;try{Ax(t,n,a)}finally{Re=x,K.p=c,z.T=o}}un=1,_g(),vg(),xg()}}function _g(){if(un===1){un=0;var t=La,n=er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var c=Re;Re|=4;try{Qm(n,t);var f=Df,x=ip(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&np(T.ownerDocument.documentElement,T)){if(B!==null&&tu(T)){var $=B.start,ht=B.end;if(ht===void 0&&(ht=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ht,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var rt=et.getSelection(),Vt=T.textContent.length,Kt=Math.min(B.start,Vt),Be=B.end===void 0?Kt:Math.min(B.end,Vt);!rt.extend&&Kt>Be&&(x=Be,Be=Kt,Kt=x);var j=ep(T,Kt),F=ep(T,Be);if(j&&F&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==F.node||rt.focusOffset!==F.offset)){var J=mt.createRange();J.setStart(j.node,j.offset),rt.removeAllRanges(),Kt>Be?(rt.addRange(J),rt.extend(F.node,F.offset)):(J.setEnd(F.node,F.offset),rt.addRange(J))}}}}for(mt=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Zl=!!wf,Df=wf=null}finally{Re=c,K.p=o,z.T=a}}t.current=n,un=2}}function vg(){if(un===2){un=0;var t=La,n=er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var c=Re;Re|=4;try{Ym(t,n.alternate,n)}finally{Re=c,K.p=o,z.T=a}}un=3}}function xg(){if(un===4||un===3){un=0,Q();var t=La,n=er,a=ia,o=sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,er=La=null,Sg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ua=null),Ds(a),n=n.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Zt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var T=o[x];f(T.value,{componentStack:T.stack})}}finally{z.T=n,K.p=c}}(ia&3)!==0&&Il(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===gf?vo++:(vo=0,gf=t):vo=0,xo(0)}}function Sg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Jr(n)))}function Il(){return _g(),vg(),xg(),yg()}function yg(){if(un!==5)return!1;var t=La,n=pf;pf=0;var a=Ds(ia),o=z.T,c=K.p;try{K.p=32>a?32:a,z.T=null,a=mf,mf=null;var f=La,x=ia;if(un=0,er=La=null,ia=0,(Re&6)!==0)throw Error(s(331));var T=Re;if(Re|=4,ng(f.current),$m(f,f.current,x,a),Re=T,xo(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Zt,f)}catch{}return!0}finally{K.p=c,z.T=o,Sg(t,n)}}function Mg(t,n,a){n=ii(a,n),n=qu(t.stateNode,n,2),t=ba(t,n,2),t!==null&&(vn(t,2),Li(t))}function Ne(t,n,a){if(t.tag===3)Mg(t,t,a);else for(;n!==null;){if(n.tag===3){Mg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){t=ii(a,t),a=Em(2),o=ba(n,a,2),o!==null&&(Tm(a,o,n,t),vn(o,2),Li(o));break}}n=n.return}}function xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new wx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(ff=!0,c.add(a),t=Ox.bind(null,t,n,a),n.then(t,t))}function Ox(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(ve&a)===a&&(Ke===4||Ke===3&&(ve&62914560)===ve&&300>lt()-Ul?(Re&2)===0&&nr(t,0):hf|=a,tr===ve&&(tr=0)),Li(t)}function Eg(t,n){n===0&&(n=ln()),t=is(t,n),t!==null&&(vn(t,n),Li(t))}function Px(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Eg(t,a)}function zx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Eg(t,a)}function Ix(t,n){return zt(t,n)}var Bl=null,ar=null,Sf=!1,Fl=!1,yf=!1,Oa=0;function Li(t){t!==ar&&t.next===null&&(ar===null?Bl=ar=t:ar=ar.next=t),Fl=!0,Sf||(Sf=!0,Fx())}function xo(t,n){if(!yf&&Fl){yf=!0;do for(var a=!1,o=Bl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-$t(42|t)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rg(o,f))}else f=ve,f=Nt(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||te(o,f)||(a=!0,Rg(o,f));o=o.next}while(a);yf=!1}}function Bx(){Tg()}function Tg(){Fl=Sf=!1;var t=0;Oa!==0&&Zx()&&(t=Oa);for(var n=lt(),a=null,o=Bl;o!==null;){var c=o.next,f=bg(o,n);f===0?(o.next=null,a===null?Bl=c:a.next=c,c===null&&(ar=a)):(a=o,(t!==0||(f&3)!==0)&&(Fl=!0)),o=c}un!==0&&un!==5||xo(t),Oa!==0&&(Oa=0)}function bg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-$t(f),T=1<<x,B=c[x];B===-1?((T&a)===0||(T&o)!==0)&&(c[x]=Ye(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=ke,a=ve,a=Nt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&L(o),Ds(a)){case 2:case 8:a=Ft;break;case 32:a=Ct;break;case 268435456:a=_e;break;default:a=Ct}return o=Ag.bind(null,t),a=zt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&L(o),t.callbackPriority=2,t.callbackNode=null,2}function Ag(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Il()&&t.callbackNode!==a)return null;var o=ve;return o=Nt(t,t===ke?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(og(t,o,n),bg(t,lt()),t.callbackNode!=null&&t.callbackNode===a?Ag.bind(null,t):null)}function Rg(t,n){if(Il())return null;og(t,n,!0)}function Fx(){Qx(function(){(Re&6)!==0?zt(ft,Bx):Tg()})}function Mf(){if(Oa===0){var t=ks;t===0&&(t=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Oa=t}return Oa}function Cg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qo(""+t)}function wg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Hx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Cg((c[xn]||null).action),x=o.submitter;x&&(n=(n=x[xn]||null)?Cg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Qo("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Oa!==0){var B=x?wg(c,x):new FormData(c);Gu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=x?wg(c,x):new FormData(c),Gu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Ef=0;Ef<au.length;Ef++){var Tf=au[Ef],Gx=Tf.toLowerCase(),Vx=Tf[0].toUpperCase()+Tf.slice(1);_i(Gx,"on"+Vx)}_i(rp,"onAnimationEnd"),_i(op,"onAnimationIteration"),_i(lp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(ax,"onTransitionRun"),_i(sx,"onTransitionStart"),_i(rx,"onTransitionCancel"),_i(cp,"onTransitionEnd"),Gt("onMouseEnter",["mouseout","mouseover"]),Gt("onMouseLeave",["mouseout","mouseover"]),Gt("onPointerEnter",["pointerout","pointerover"]),Gt("onPointerLeave",["pointerout","pointerover"]),Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Dg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ht){tl(ht)}c.currentTarget=null,f=B}else for(x=0;x<o.length;x++){if(T=o[x],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ht){tl(ht)}c.currentTarget=null,f=B}}}}function ge(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=t+"__bubble";a.has(o)||(Ug(n,t,2,!1),a.add(o))}function bf(t,n,a){var o=0;n&&(o|=4),Ug(a,t,o,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[Hl]){t[Hl]=!0,Xt.forEach(function(a){a!=="selectionchange"&&(kx.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,bf("selectionchange",!1,n))}}function Ug(t,n,a,o){switch(r_(n)){case 2:var c=_S;break;case 8:c=vS;break;default:c=Gf}a=c.bind(null,n,a,t),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Rf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=it(T),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=f=x;continue t}T=T.parentNode}}o=o.return}zd(function(){var $=f,ht=kc(a),mt=[];t:{var et=up.get(t);if(et!==void 0){var rt=Qo,Vt=t;switch(t){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":rt=zv;break;case"focusin":Vt="focus",rt=Zc;break;case"focusout":Vt="blur",rt=Zc;break;case"beforeblur":case"afterblur":rt=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Fv;break;case rp:case op:case lp:rt=Rv;break;case cp:rt=Gv;break;case"scroll":case"scrollend":rt=Mv;break;case"wheel":rt=kv;break;case"copy":case"cut":case"paste":rt=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Gd;break;case"toggle":case"beforetoggle":rt=Wv}var Kt=(n&4)!==0,Be=!Kt&&(t==="scroll"||t==="scrollend"),j=Kt?et!==null?et+"Capture":null:et;Kt=[];for(var F=$,J;F!==null;){var pt=F;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=Gr(F,j),pt!=null&&Kt.push(yo(F,pt,J))),Be)break;F=F.return}0<Kt.length&&(et=new rt(et,Vt,null,a,ht),mt.push({event:et,listeners:Kt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",et&&a!==Vc&&(Vt=a.relatedTarget||a.fromElement)&&(it(Vt)||Vt[Hi]))break t;if((rt||et)&&(et=ht.window===ht?ht:(et=ht.ownerDocument)?et.defaultView||et.parentWindow:window,rt?(Vt=a.relatedTarget||a.toElement,rt=$,Vt=Vt?it(Vt):null,Vt!==null&&(Be=u(Vt),Kt=Vt.tag,Vt!==Be||Kt!==5&&Kt!==27&&Kt!==6)&&(Vt=null)):(rt=null,Vt=$),rt!==Vt)){if(Kt=Fd,pt="onMouseLeave",j="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Gd,pt="onPointerLeave",j="onPointerEnter",F="pointer"),Be=rt==null?et:At(rt),J=Vt==null?et:At(Vt),et=new Kt(pt,F+"leave",rt,a,ht),et.target=Be,et.relatedTarget=J,pt=null,it(ht)===$&&(Kt=new Kt(j,F+"enter",Vt,a,ht),Kt.target=J,Kt.relatedTarget=Be,pt=Kt),Be=pt,rt&&Vt)e:{for(Kt=Xx,j=rt,F=Vt,J=0,pt=j;pt;pt=Kt(pt))J++;pt=0;for(var jt=F;jt;jt=Kt(jt))pt++;for(;0<J-pt;)j=Kt(j),J--;for(;0<pt-J;)F=Kt(F),pt--;for(;J--;){if(j===F||F!==null&&j===F.alternate){Kt=j;break e}j=Kt(j),F=Kt(F)}Kt=null}else Kt=null;rt!==null&&Lg(mt,et,rt,Kt,!1),Vt!==null&&Be!==null&&Lg(mt,Be,Vt,Kt,!0)}}t:{if(et=$?At($):window,rt=et.nodeName&&et.nodeName.toLowerCase(),rt==="select"||rt==="input"&&et.type==="file")var be=Zd;else if(qd(et))if(Kd)be=ex;else{be=$v;var Yt=Jv}else rt=et.nodeName,!rt||rt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Gc($.elementType)&&(be=Zd):be=tx;if(be&&(be=be(t,$))){jd(mt,be,a,ht);break t}Yt&&Yt(t,et,$),t==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&ei(et,"number",et.value)}switch(Yt=$?At($):window,t){case"focusin":(qd(Yt)||Yt.contentEditable==="true")&&(Ps=Yt,eu=$,Zr=null);break;case"focusout":Zr=eu=Ps=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,ap(mt,a,ht);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":ap(mt,a,ht)}var le;if(Qc)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Os?Wd(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Vd&&a.locale!=="ko"&&(Os||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Os&&(le=Id()):(va=ht,Yc="value"in va?va.value:va.textContent,Os=!0)),Yt=Gl($,xe),0<Yt.length&&(xe=new Hd(xe,t,null,a,ht),mt.push({event:xe,listeners:Yt}),le?xe.data=le:(le=Yd(a),le!==null&&(xe.data=le)))),(le=qv?jv(t,a):Zv(t,a))&&(xe=Gl($,"onBeforeInput"),0<xe.length&&(Yt=new Hd("onBeforeInput","beforeinput",null,a,ht),mt.push({event:Yt,listeners:xe}),Yt.data=le)),Hx(mt,t,$,a,ht)}Dg(mt,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(t,a),c!=null&&o.unshift(yo(t,c,f)),c=Gr(t,n),c!=null&&o.push(yo(t,c,f))),t.tag===3)return o;t=t.return}return[]}function Xx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lg(t,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||$===null||(B=$,c?($=Gr(a,f),$!=null&&x.unshift(yo(a,$,B))):c||($=Gr(a,f),$!=null&&x.push(yo(a,$,B)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Wx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(Yx,"")}function Og(t,n){return n=Ng(n),Ng(t)===n}function Ie(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Us(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Us(t,""+o);break;case"className":Wt(t,"class",o);break;case"tabIndex":Wt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Wt(t,a,o);break;case"style":Od(t,o,f);break;case"data":if(n!=="object"){Wt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=qo(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=qo(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Vi);break;case"onScroll":o!=null&&ge("scroll",t);break;case"onScrollEnd":o!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=qo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Se(t,"popover",o);break;case"xlinkActuate":cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":cn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":cn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":cn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":cn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Se(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sv.get(a)||a,Se(t,a,o))}}function Cf(t,n,a,o,c,f){switch(a){case"style":Od(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Us(t,o):(typeof o=="number"||typeof o=="bigint")&&Us(t,""+o);break;case"onScroll":o!=null&&ge("scroll",t);break;case"onScrollEnd":o!=null&&ge("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ee.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Se(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,f,x,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),o&&Ie(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var T=f=x=c=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":c=ht;break;case"type":x=ht;break;case"checked":B=ht;break;case"defaultChecked":$=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ie(t,n,o,ht,a,null)}}gi(t,f,T,B,$,x,c,!1);return;case"select":ge("invalid",t),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:Ie(t,n,c,T,a,null)}n=f,a=x,t.multiple=!!o,n!=null?Gi(t,!!o,n,!1):a!=null&&Gi(t,!!o,a,!0);return;case"textarea":ge("invalid",t),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ie(t,n,x,T,a,null)}Ld(t,o,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(t,n,B,o,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(o=0;o<So.length;o++)ge(So[o],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,$,o,a,null)}return;default:if(Gc(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Cf(t,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ie(t,n,T,o,a,null))}function qx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,B=null,$=null,ht=null;for(rt in a){var mt=a[rt];if(a.hasOwnProperty(rt)&&mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=mt;default:o.hasOwnProperty(rt)||Ie(t,n,rt,null,o,mt)}}for(var et in o){var rt=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(rt!=null||mt!=null))switch(et){case"type":f=rt;break;case"name":c=rt;break;case"checked":$=rt;break;case"defaultChecked":ht=rt;break;case"value":x=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==mt&&Ie(t,n,et,rt,o,mt)}}An(t,x,T,B,$,ht,f,c);return;case"select":rt=x=T=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":rt=B;default:o.hasOwnProperty(f)||Ie(t,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==B&&Ie(t,n,c,f,o,B)}n=T,a=x,o=rt,et!=null?Gi(t,!!a,et,!1):!!o!=!!a&&(n!=null?Gi(t,!!a,n,!0):Gi(t,!!a,a?[]:"",!1));return;case"textarea":rt=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(t,n,T,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":et=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ie(t,n,x,c,o,f)}Ud(t,et,rt);return;case"option":for(var Vt in a)if(et=a[Vt],a.hasOwnProperty(Vt)&&et!=null&&!o.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:Ie(t,n,Vt,null,o,et)}for(B in o)if(et=o[B],rt=a[B],o.hasOwnProperty(B)&&et!==rt&&(et!=null||rt!=null))switch(B){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ie(t,n,B,et,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)et=a[Kt],a.hasOwnProperty(Kt)&&et!=null&&!o.hasOwnProperty(Kt)&&Ie(t,n,Kt,null,o,et);for($ in o)if(et=o[$],rt=a[$],o.hasOwnProperty($)&&et!==rt&&(et!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Ie(t,n,$,et,o,rt)}return;default:if(Gc(n)){for(var Be in a)et=a[Be],a.hasOwnProperty(Be)&&et!==void 0&&!o.hasOwnProperty(Be)&&Cf(t,n,Be,void 0,o,et);for(ht in o)et=o[ht],rt=a[ht],!o.hasOwnProperty(ht)||et===rt||et===void 0&&rt===void 0||Cf(t,n,ht,et,o,rt);return}}for(var j in a)et=a[j],a.hasOwnProperty(j)&&et!=null&&!o.hasOwnProperty(j)&&Ie(t,n,j,null,o,et);for(mt in o)et=o[mt],rt=a[mt],!o.hasOwnProperty(mt)||et===rt||et==null&&rt==null||Ie(t,n,mt,et,o,rt)}function Pg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,x=c.initiatorType,T=c.duration;if(f&&T&&Pg(x)){for(x=0,T=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>T)break;var ht=B.transferSize,mt=B.initiatorType;ht&&Pg(mt)&&(B=B.responseEnd,x+=ht*(B<T?1:(T-$)/(B-$)))}if(--o,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wf=null,Df=null;function Vl(t){return t.nodeType===9?t:t.ownerDocument}function zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function Zx(){var t=window.event;return t&&t.type==="popstate"?t===Lf?!1:(Lf=t,!0):(Lf=null,!1)}var Bg=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(t){return Fg.resolve(null).then(t).catch(Jx)}:Bg;function Jx(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function Hg(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),lr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[W]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);lr(n)}function Gg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $x(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[W])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function tS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Vg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Of(t){return t.data==="$?"||t.data==="$~"}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function eS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var zf=null;function kg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Xg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Wg(t,n,a){switch(n=Vl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);at(t)}var ci=new Map,Yg=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=K.d;K.d={f:nS,r:iS,D:aS,C:sS,L:rS,m:oS,X:cS,S:lS,M:uS};function nS(){var t=aa.f(),n=Ol();return t||n}function iS(t){var n=Y(t);n!==null&&n.tag===5&&n.type==="form"?cm(n):aa.r(t)}var sr=typeof document>"u"?null:document;function qg(t,n,a){var o=sr;if(o&&typeof n=="string"&&n){var c=mn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Yg.has(c)||(Yg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",t),Lt(n),o.head.appendChild(n)))}}function aS(t){aa.D(t),qg("dns-prefetch",t,null)}function sS(t,n){aa.C(t,n),qg("preconnect",t,n)}function rS(t,n,a){aa.L(t,n,a);var o=sr;if(o&&t&&n){var c='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mn(a.imageSizes)+'"]')):c+='[href="'+mn(t)+'"]';var f=c;switch(n){case"style":f=rr(t);break;case"script":f=or(t)}ci.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Eo(f))||n==="script"&&o.querySelector(To(f))||(n=o.createElement("link"),Tn(n,"link",t),Lt(n),o.head.appendChild(n)))}}function oS(t,n){aa.m(t,n);var a=sr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mn(o)+'"][href="'+mn(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=or(t)}if(!ci.has(f)&&(t=g({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}o=a.createElement("link"),Tn(o,"link",t),Lt(o),a.head.appendChild(o)}}}function lS(t,n,a){aa.S(t,n,a);var o=sr;if(o&&t){var c=Ut(o).hoistableStyles,f=rr(t);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(Eo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&If(t,a);var B=x=o.createElement("link");Lt(B),Tn(B,"link",t),B._p=new Promise(function($,ht){B.onload=$,B.onerror=ht}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Xl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function cS(t,n){aa.X(t,n);var a=sr;if(a&&t){var o=Ut(a).hoistableScripts,c=or(t),f=o.get(c);f||(f=a.querySelector(To(c)),f||(t=g({src:t,async:!0},n),(n=ci.get(c))&&Bf(t,n),f=a.createElement("script"),Lt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function uS(t,n){aa.M(t,n);var a=sr;if(a&&t){var o=Ut(a).hoistableScripts,c=or(t),f=o.get(c);f||(f=a.querySelector(To(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Bf(t,n),f=a.createElement("script"),Lt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function jg(t,n,a,o){var c=(c=Et.current)?kl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=Ut(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=rr(a.href);var f=Ut(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(Eo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||fS(c,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=Ut(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function rr(t){return'href="'+mn(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function Zg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function fS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),Lt(n),t.head.appendChild(n))}function or(t){return'[src="'+mn(t)+'"]'}function To(t){return"script[async]"+t}function Kg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+mn(a.href)+'"]');if(o)return n.instance=o,Lt(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Lt(o),Tn(o,"style",c),Xl(o,a.precedence,t),n.instance=o;case"stylesheet":c=rr(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,Lt(f),f;o=Zg(a),(c=ci.get(c))&&If(o,c),f=(t.ownerDocument||t).createElement("link"),Lt(f);var x=f;return x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),Tn(f,"link",o),n.state.loading|=4,Xl(f,a.precedence,t),n.instance=f;case"script":return f=or(a.src),(c=t.querySelector(To(f)))?(n.instance=c,Lt(c),c):(o=a,(c=ci.get(f))&&(o=g({},a),Bf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),Lt(c),Tn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Xl(o,a.precedence,t));return n.instance}function Xl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wl=null;function Qg(t,n,a){if(Wl===null){var o=new Map,c=Wl=new Map;c.set(a,o)}else c=Wl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[W]||f[je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=o.get(x);T?T.push(f):o.set(x,[f])}}return o}function Jg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function hS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $g(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=rr(o.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Yl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Lt(f);return}f=n.ownerDocument||n,o=Zg(o),(c=ci.get(c))&&If(o,c),f=f.createElement("link"),Lt(f);var x=f;x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),Tn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Yl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function pS(t,n){return t.stylesheets&&t.count===0&&jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*jx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Yl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ql=null;function jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ql=new Map,n.forEach(mS,t),ql=null,Yl.call(t))}function mS(t,n){if(!(n.state.loading&4)){var a=ql.get(t);if(a)var o=a.get(null);else{a=new Map,ql.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=Yl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function gS(t,n,a,o,c,f,x,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function t_(t,n,a,o,c,f,x,T,B,$,ht,mt){return t=new gS(t,n,a,x,B,$,ht,mt,T),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},yu(f),t}function e_(t){return t?(t=Bs,t):Bs}function n_(t,n,a,o,c,f){c=e_(c),o.context===null?o.context=c:o.pendingContext=c,o=Ta(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ba(t,o,n),a!==null&&(Gn(a,t,n),no(a,t,n))}function i_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){i_(t,n),(t=t.alternate)&&i_(t,n)}function a_(t){if(t.tag===13||t.tag===31){var n=is(t,67108864);n!==null&&Gn(n,t,67108864),Hf(t,67108864)}}function s_(t){if(t.tag===13||t.tag===31){var n=Qn();n=Ja(n);var a=is(t,n);a!==null&&Gn(a,t,n),Hf(t,n)}}var Zl=!0;function _S(t,n,a,o){var c=z.T;z.T=null;var f=K.p;try{K.p=2,Gf(t,n,a,o)}finally{K.p=f,z.T=c}}function vS(t,n,a,o){var c=z.T;z.T=null;var f=K.p;try{K.p=8,Gf(t,n,a,o)}finally{K.p=f,z.T=c}}function Gf(t,n,a,o){if(Zl){var c=Vf(o);if(c===null)Rf(t,n,o,Kl,a),o_(t,o);else if(SS(c,t,n,a,o))o.stopPropagation();else if(o_(t,o),n&4&&-1<xS.indexOf(t)){for(;c!==null;){var f=Y(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Dt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var B=1<<31-$t(x);T.entanglements[1]|=B,x&=~B}Li(f),(Re&6)===0&&(Ll=lt()+500,xo(0))}}break;case 31:case 13:T=is(f,2),T!==null&&Gn(T,f,2),Ol(),Hf(f,2)}if(f=Vf(o),f===null&&Rf(t,n,o,Kl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Rf(t,n,o,null,a)}}function Vf(t){return t=kc(t),kf(t)}var Kl=null;function kf(t){if(Kl=null,t=it(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Kl=t,null}function r_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case ft:return 2;case Ft:return 8;case Ct:case Bt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Xf=!1,za=null,Ia=null,Ba=null,Ao=new Map,Ro=new Map,Fa=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(t,n){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Y(n),n!==null&&a_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function SS(t,n,a,o,c){switch(n){case"focusin":return za=Co(za,t,n,a,o,c),!0;case"dragenter":return Ia=Co(Ia,t,n,a,o,c),!0;case"mouseover":return Ba=Co(Ba,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,o,c)),!0}return!1}function l_(t){var n=it(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,$a(t.priority,function(){s_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,$a(t.priority,function(){s_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Vc=o,a.target.dispatchEvent(o),Vc=null}else return n=Y(a),n!==null&&a_(n),t.blockedOn=a,!1;n.shift()}return!0}function c_(t,n,a){Ql(t)&&a.delete(n)}function yS(){Xf=!1,za!==null&&Ql(za)&&(za=null),Ia!==null&&Ql(Ia)&&(Ia=null),Ba!==null&&Ql(Ba)&&(Ba=null),Ao.forEach(c_),Ro.forEach(c_)}function Jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yS)))}var $l=null;function u_(t){$l!==t&&($l=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){$l===t&&($l=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(kf(o||a)===null)continue;break}var f=Y(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function lr(t){function n(B){return Jl(B,t)}za!==null&&Jl(za,t),Ia!==null&&Jl(Ia,t),Ba!==null&&Jl(Ba,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Fa.length;a++){var o=Fa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)l_(a),a.blockedOn===null&&Fa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[xn]||null;if(typeof f=="function")x||u_(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[xn]||null)T=x.formAction;else if(kf(c)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),u_(a)}}}function f_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(t){this._internalRoot=t}tc.prototype.render=Wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qn();n_(a,o,t,n,null,null)},tc.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;n_(t.current,2,null,t,null,null),Ol(),n[Hi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,t),a===0&&l_(t)}};var h_=e.version;if(h_!=="19.2.4")throw Error(s(527,h_,"19.2.4"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var MS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Zt=ec.inject(MS),qt=ec}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",c=xm,f=Sm,x=ym;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=t_(t,1,!1,null,null,a,o,null,c,f,x,f_),t[Hi]=n.current,Af(t),new Wf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,c="",f=xm,x=Sm,T=ym,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=t_(t,1,!0,n,a??null,o,c,B,f,x,T,f_),n.context=e_(null),a=n.current,o=Qn(),o=Ja(o),c=Ta(o),c.callback=null,ba(a,c,o),a=o,n.current.lanes=a,vn(n,a),Li(n),t[Hi]=n.current,Af(t),new tc(n)},Do.version="19.2.4",Do}var M_;function LS(){if(M_)return jf.exports;M_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),jf.exports=US(),jf.exports}var NS=LS();const OS=P0(NS);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="170",hi={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},PS=0,E_=1,zS=2,z0=1,IS=2,ua=3,Qa=0,On=1,Pi=2,Za=0,br=1,Dh=2,T_=3,b_=4,BS=5,Es=100,FS=101,HS=102,GS=103,VS=104,kS=200,XS=201,WS=202,YS=203,Uh=204,Lh=205,qS=206,jS=207,ZS=208,KS=209,QS=210,JS=211,$S=212,ty=213,ey=214,Nh=0,Oh=1,Ph=2,Cr=3,zh=4,Ih=5,Bh=6,Fh=7,I0=0,ny=1,iy=2,Ka=0,ay=1,sy=2,ry=3,oy=4,ly=5,cy=6,uy=7,B0=300,wr=301,Dr=302,Hh=303,Gh=304,Pc=306,Ur=1e3,Ii=1001,Vh=1002,bi=1003,fy=1004,nc=1005,Dn=1006,Jf=1007,bs=1008,pa=1009,F0=1010,H0=1011,Fo=1012,Sd=1013,As=1014,fa=1015,Go=1016,yd=1017,Md=1018,Lr=1020,G0=35902,V0=1021,k0=1022,Ei=1023,X0=1024,W0=1025,Ar=1026,Nr=1027,Y0=1028,Ed=1029,q0=1030,Td=1031,bd=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,kh=35840,Xh=35841,Wh=35842,Yh=35843,qh=36196,jh=37492,Zh=37496,Kh=37808,Qh=37809,Jh=37810,$h=37811,td=37812,ed=37813,nd=37814,id=37815,ad=37816,sd=37817,rd=37818,od=37819,ld=37820,cd=37821,Uc=36492,ud=36494,fd=36495,j0=36283,hd=36284,dd=36285,pd=36286,hy=3200,dy=3201,py=0,my=1,ja="",fi="srgb",Pr="srgb-linear",zc="linear",Fe="srgb",cr=7680,A_=519,gy=512,_y=513,vy=514,Z0=515,xy=516,Sy=517,yy=518,My=519,R_=35044,C_="300 es",ha=2e3,Oc=2001;class ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,md=180/Math.PI;function Vo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Nn(r,e,i){return Math.max(e,Math.min(i,r))}function Ey(r,e){return(r%e+e)%e}function $f(r,e,i){return(1-i)*r+i*e}function Uo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ty={DEG2RAD:Lc};class he{constructor(e=0,i=0){he.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(e,i,s,l,u,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],S=s[2],M=s[5],b=s[8],C=l[0],y=l[3],_=l[6],I=l[1],N=l[4],A=l[7],q=l[2],P=l[5],D=l[8];return u[0]=h*C+d*I+m*q,u[3]=h*y+d*N+m*P,u[6]=h*_+d*A+m*D,u[1]=p*C+v*I+g*q,u[4]=p*y+v*N+g*P,u[7]=p*_+v*A+g*D,u[2]=S*C+M*I+b*q,u[5]=S*y+M*N+b*P,u[8]=S*_+M*A+b*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*h-d*p,S=d*m-v*u,M=p*u-h*m,b=i*g+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=g*C,e[1]=(l*p-v*s)*C,e[2]=(d*s-l*h)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(th.makeScale(e,i)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,i){return this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new ce;function K0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function by(){const r=Ho("canvas");return r.style.display="block",r}const w_={};function Io(r){r in w_||(w_[r]=!0,console.warn(r))}function Ay(r,e,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function Ry(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Te={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(r,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===Fe&&(r.r=da(r.r),r.g=da(r.g),r.b=da(r.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Fe&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ja?zc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,i){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const D_=[.64,.33,.3,.6,.15,.06],U_=[.2126,.7152,.0722],L_=[.3127,.329],N_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Pr]:{primaries:D_,whitePoint:L_,transfer:zc,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:U_,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:D_,whitePoint:L_,transfer:Fe,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:U_,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}});let ur;class wy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ur===void 0&&(ur=Ho("canvas")),ur.width=e.width,ur.height=e.height;const s=ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ur}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ho("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=da(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(da(i[s]/255)*255):i[s]=da(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dy=0;class Q0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(eh(l[h].image)):u.push(eh(l[h]))}else u=eh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function eh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uy=0;class hn extends ws{constructor(e=hn.DEFAULT_IMAGE,i=hn.DEFAULT_MAPPING,s=Ii,l=Ii,u=Dn,h=bs,d=Ei,m=pa,p=hn.DEFAULT_ANISOTROPY,v=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Vo(),this.name="",this.source=new Q0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=B0;hn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],v=m[4],g=m[8],S=m[1],M=m[5],b=m[9],C=m[2],y=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+C)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,A=(M+1)/2,q=(_+1)/2,P=(v+S)/4,D=(g+C)/4,V=(b+y)/4;return N>A&&N>q?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=P/s,u=D/s):A>q?A<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(A),s=P/l,u=V/l):q<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),s=D/u,l=V/u),this.set(s,l,u,i),this}let I=Math.sqrt((y-b)*(y-b)+(g-C)*(g-C)+(S-v)*(S-v));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(g-C)/I,this.z=(S-v)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ly extends ws{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new hn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Q0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends Ly{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class J0 extends hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ny extends hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=C;return}if(g!==C||m!==S||p!==M||v!==b){let y=1-d;const _=m*S+p*M+v*b+g*C,I=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const q=Math.sqrt(N),P=Math.atan2(q,_*I);y=Math.sin(y*P)/q,d=Math.sin(d*P)/q}const A=d*I;if(m=m*y+S*A,p=p*y+M*A,v=v*y+b*A,g=g*y+C*A,y===1-d){const q=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=q,p*=q,v*=q,g*=q}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+v*g+m*M-p*S,e[i+1]=m*b+v*S+p*g-d*M,e[i+2]=p*b+v*M+d*S-m*g,e[i+3]=v*b-d*g-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(u/2),S=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*v*g+p*M*b,this._y=p*M*g-S*v*b,this._z=p*v*b+S*M*g,this._w=p*v*g-S*M*b;break;case"YXZ":this._x=S*v*g+p*M*b,this._y=p*M*g-S*v*b,this._z=p*v*b-S*M*g,this._w=p*v*g+S*M*b;break;case"ZXY":this._x=S*v*g-p*M*b,this._y=p*M*g+S*v*b,this._z=p*v*b+S*M*g,this._w=p*v*g-S*M*b;break;case"ZYX":this._x=S*v*g-p*M*b,this._y=p*M*g+S*v*b,this._z=p*v*b-S*M*g,this._w=p*v*g+S*M*b;break;case"YZX":this._x=S*v*g+p*M*b,this._y=p*M*g+S*v*b,this._z=p*v*b-S*M*g,this._w=p*v*g-S*M*b;break;case"XZY":this._x=S*v*g-p*M*b,this._y=p*M*g-S*v*b,this._z=p*v*b+S*M*g,this._w=p*v*g+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],S=s+d+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,S=Math.sin(i*v)/p;return this._w=h*g+this._w*S,this._x=s*g+this._x*S,this._y=l*g+this._y*S,this._z=u*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(P_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(P_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),v=2*(d*i-u*l),g=2*(u*s-h*i);return this.x=i+m*p+h*g-d*v,this.y=s+m*v+d*p-u*g,this.z=l+m*g+u*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new nt,P_=new Cs;class ko{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Si):Si.fromBufferAttribute(u,h),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ac.subVectors(this.max,Lo),fr.subVectors(e.a,Lo),hr.subVectors(e.b,Lo),dr.subVectors(e.c,Lo),Ga.subVectors(hr,fr),Va.subVectors(dr,hr),gs.subVectors(fr,dr);let i=[0,-Ga.z,Ga.y,0,-Va.z,Va.y,0,-gs.z,gs.y,Ga.z,0,-Ga.x,Va.z,0,-Va.x,gs.z,0,-gs.x,-Ga.y,Ga.x,0,-Va.y,Va.x,0,-gs.y,gs.x,0];return!ih(i,fr,hr,dr,ac)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,fr,hr,dr,ac))?!1:(sc.crossVectors(Ga,Va),i=[sc.x,sc.y,sc.z],ih(i,fr,hr,dr,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sa=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Si=new nt,ic=new ko,fr=new nt,hr=new nt,dr=new nt,Ga=new nt,Va=new nt,gs=new nt,Lo=new nt,ac=new nt,sc=new nt,_s=new nt;function ih(r,e,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){_s.fromArray(r,u);const d=l.x*Math.abs(_s.x)+l.y*Math.abs(_s.y)+l.z*Math.abs(_s.z),m=e.dot(_s),p=i.dot(_s),v=s.dot(_s);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Oy=new ko,No=new nt,ah=new nt;class Ic{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Oy.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(No,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(ah)),this.expandByPoint(No.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ra=new nt,sh=new nt,rc=new nt,ka=new nt,rh=new nt,oc=new nt,oh=new nt;class Ad{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ra)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ra.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){sh.copy(e).add(i).multiplyScalar(.5),rc.copy(i).sub(e).normalize(),ka.copy(this.origin).sub(sh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(rc),d=ka.dot(this.direction),m=-ka.dot(rc),p=ka.lengthSq(),v=Math.abs(1-h*h);let g,S,M,b;if(v>0)if(g=h*m-d,S=h*d-m,b=u*v,g>=0)if(S>=-b)if(S<=b){const C=1/v;g*=C,S*=C,M=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-h*u+d)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(h*u+d)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=h>0?-u:u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(sh).addScaledVector(rc,S),M}intersectSphere(e,i){ra.subVectors(e.center,this.origin);const s=ra.dot(this.direction),l=ra.dot(ra)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ra)!==null}intersectTriangle(e,i,s,l,u){rh.subVectors(i,e),oc.subVectors(s,e),oh.crossVectors(rh,oc);let h=this.direction.dot(oh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ka.subVectors(this.origin,e);const m=d*this.direction.dot(oc.crossVectors(ka,oc));if(m<0)return null;const p=d*this.direction.dot(rh.cross(ka));if(p<0||m+p>h)return null;const v=-d*ka.dot(oh);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,s,l,u,h,d,m,p,v,g,S,M,b,C,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,v,g,S,M,b,C,y)}set(e,i,s,l,u,h,d,m,p,v,g,S,M,b,C,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=S,_[3]=M,_[7]=b,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/pr.setFromMatrixColumn(e,0).length(),u=1/pr.setFromMatrixColumn(e,1).length(),h=1/pr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=h*v,M=h*g,b=d*v,C=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,M=m*g,b=p*v,C=p*g;i[0]=S+C*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=M*d-b,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,M=m*g,b=p*v,C=p*g;i[0]=S-C*d,i[4]=-h*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*v,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,M=h*g,b=d*v,C=d*g;i[0]=m*v,i[4]=b*p-M,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=C-S*g,i[8]=b*g+M,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*g+b,i[10]=S-C*g}else if(e.order==="XZY"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=S*g+C,i[5]=h*v,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*v,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Py,e,zy)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Xa.crossVectors(s,Jn),Xa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Xa.crossVectors(s,Jn)),Xa.normalize(),lc.crossVectors(Jn,Xa),l[0]=Xa.x,l[4]=lc.x,l[8]=Jn.x,l[1]=Xa.y,l[5]=lc.y,l[9]=Jn.y,l[2]=Xa.z,l[6]=lc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],S=s[9],M=s[13],b=s[2],C=s[6],y=s[10],_=s[14],I=s[3],N=s[7],A=s[11],q=s[15],P=l[0],D=l[4],V=l[8],U=l[12],w=l[1],H=l[5],ut=l[9],st=l[13],gt=l[2],_t=l[6],z=l[10],K=l[14],Z=l[3],Mt=l[7],Tt=l[11],O=l[15];return u[0]=h*P+d*w+m*gt+p*Z,u[4]=h*D+d*H+m*_t+p*Mt,u[8]=h*V+d*ut+m*z+p*Tt,u[12]=h*U+d*st+m*K+p*O,u[1]=v*P+g*w+S*gt+M*Z,u[5]=v*D+g*H+S*_t+M*Mt,u[9]=v*V+g*ut+S*z+M*Tt,u[13]=v*U+g*st+S*K+M*O,u[2]=b*P+C*w+y*gt+_*Z,u[6]=b*D+C*H+y*_t+_*Mt,u[10]=b*V+C*ut+y*z+_*Tt,u[14]=b*U+C*st+y*K+_*O,u[3]=I*P+N*w+A*gt+q*Z,u[7]=I*D+N*H+A*_t+q*Mt,u[11]=I*V+N*ut+A*z+q*Tt,u[15]=I*U+N*st+A*K+q*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],S=e[10],M=e[14],b=e[3],C=e[7],y=e[11],_=e[15];return b*(+u*m*g-l*p*g-u*d*S+s*p*S+l*d*M-s*m*M)+C*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*v-u*m*v)+y*(+i*p*g-i*d*M-u*h*g+s*h*M+u*d*v-s*p*v)+_*(-l*d*v-i*m*g+i*d*S+l*h*g-s*h*S+s*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],S=e[10],M=e[11],b=e[12],C=e[13],y=e[14],_=e[15],I=g*y*p-C*S*p+C*m*M-d*y*M-g*m*_+d*S*_,N=b*S*p-v*y*p-b*m*M+h*y*M+v*m*_-h*S*_,A=v*C*p-b*g*p+b*d*M-h*C*M-v*d*_+h*g*_,q=b*g*m-v*C*m-b*d*S+h*C*S+v*d*y-h*g*y,P=i*I+s*N+l*A+u*q;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=I*D,e[1]=(C*S*u-g*y*u-C*l*M+s*y*M+g*l*_-s*S*_)*D,e[2]=(d*y*u-C*m*u+C*l*p-s*y*p-d*l*_+s*m*_)*D,e[3]=(g*m*u-d*S*u-g*l*p+s*S*p+d*l*M-s*m*M)*D,e[4]=N*D,e[5]=(v*y*u-b*S*u+b*l*M-i*y*M-v*l*_+i*S*_)*D,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*D,e[7]=(h*S*u-v*m*u+v*l*p-i*S*p-h*l*M+i*m*M)*D,e[8]=A*D,e[9]=(b*g*u-v*C*u-b*s*M+i*C*M+v*s*_-i*g*_)*D,e[10]=(h*C*u-b*d*u+b*s*p-i*C*p-h*s*_+i*d*_)*D,e[11]=(v*d*u-h*g*u-v*s*p+i*g*p+h*s*M-i*d*M)*D,e[12]=q*D,e[13]=(v*C*l-b*g*l+b*s*S-i*C*S-v*s*y+i*g*y)*D,e[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*y-i*d*y)*D,e[15]=(h*g*l-v*d*l+v*s*m-i*g*m-h*s*S+i*d*S)*D,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,g=d+d,S=u*p,M=u*v,b=u*g,C=h*v,y=h*g,_=d*g,I=m*p,N=m*v,A=m*g,q=s.x,P=s.y,D=s.z;return l[0]=(1-(C+_))*q,l[1]=(M+A)*q,l[2]=(b-N)*q,l[3]=0,l[4]=(M-A)*P,l[5]=(1-(S+_))*P,l[6]=(y+I)*P,l[7]=0,l[8]=(b+N)*D,l[9]=(y-I)*D,l[10]=(1-(S+C))*D,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=pr.set(l[0],l[1],l[2]).length();const h=pr.set(l[4],l[5],l[6]).length(),d=pr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],yi.copy(this);const p=1/u,v=1/h,g=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=g,yi.elements[9]*=g,yi.elements[10]*=g,i.setFromRotationMatrix(yi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=ha){const m=this.elements,p=2*u/(i-e),v=2*u/(s-l),g=(i+e)/(i-e),S=(s+l)/(s-l);let M,b;if(d===ha)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Oc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=ha){const m=this.elements,p=1/(i-e),v=1/(s-l),g=1/(h-u),S=(i+e)*p,M=(s+l)*v;let b,C;if(d===ha)b=(h+u)*g,C=-2*g;else if(d===Oc)b=u*g,C=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const pr=new nt,yi=new tn,Py=new nt(0,0,0),zy=new nt(1,1,1),Xa=new nt,lc=new nt,Jn=new nt,z_=new tn,I_=new Cs;class ma{constructor(e=0,i=0,s=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Nn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return I_.setFromEuler(this),this.setFromQuaternion(I_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";let $0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Iy=0;const B_=new nt,mr=new Cs,oa=new tn,cc=new nt,Oo=new nt,By=new nt,Fy=new Cs,F_=new nt(1,0,0),H_=new nt(0,1,0),G_=new nt(0,0,1),V_={type:"added"},Hy={type:"removed"},gr={type:"childadded",child:null},lh={type:"childremoved",child:null};class Xn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new nt,i=new ma,s=new Cs,l=new nt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ce}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return mr.setFromAxisAngle(e,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,i){return mr.setFromAxisAngle(e,i),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(F_,e)}rotateY(e){return this.rotateOnAxis(H_,e)}rotateZ(e){return this.rotateOnAxis(G_,e)}translateOnAxis(e,i){return B_.copy(e).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F_,e)}translateY(e){return this.translateOnAxis(H_,e)}translateZ(e){return this.translateOnAxis(G_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?cc.copy(e):cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Oo,cc,this.up):oa.lookAt(cc,Oo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),mr.setFromRotationMatrix(oa),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(V_),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Hy),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(V_),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,By),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),g=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new nt(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new nt,la=new nt,ch=new nt,ca=new nt,_r=new nt,vr=new nt,k_=new nt,uh=new nt,fh=new nt,hh=new nt,dh=new $e,ph=new $e,mh=new $e;let Po=class Er{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Mi.subVectors(l,i),la.subVectors(s,i),ch.subVectors(e,i);const h=Mi.dot(Mi),d=Mi.dot(la),m=Mi.dot(ch),p=la.dot(la),v=la.dot(ch),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-d*v)*S,b=(h*v-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ca.x),m.addScaledVector(h,ca.y),m.addScaledVector(d,ca.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(dh,u.x),h.addScaledVector(ph,u.y),h.addScaledVector(mh,u.z),h}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),la.subVectors(e,i),Mi.cross(la).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Mi.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Er.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Er.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;_r.subVectors(l,s),vr.subVectors(u,s),uh.subVectors(e,s);const m=_r.dot(uh),p=vr.dot(uh);if(m<=0&&p<=0)return i.copy(s);fh.subVectors(e,l);const v=_r.dot(fh),g=vr.dot(fh);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(_r,h);hh.subVectors(e,u);const M=_r.dot(hh),b=vr.dot(hh);if(b>=0&&M<=b)return i.copy(u);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(vr,d);const y=v*b-M*g;if(y<=0&&g-v>=0&&M-b>=0)return k_.subVectors(u,l),d=(g-v)/(g-v+(M-b)),i.copy(l).addScaledVector(k_,d);const _=1/(y+C+S);return h=C*_,d=S*_,i.copy(s).addScaledVector(_r,h).addScaledVector(vr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},uc={h:0,s:0,l:0};function gh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class De{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=s,Te.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Te.workingColorSpace){if(e=Ey(e,1),i=Nn(i,0,1),s=Nn(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=gh(h,u,e+1/3),this.g=gh(h,u,e),this.b=gh(h,u,e-1/3)}return Te.toWorkingColorSpace(this,l),this}setStyle(e,i=fi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const s=tv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Te.fromWorkingColorSpace(wn.copy(this),e),Math.round(Nn(wn.r*255,0,255))*65536+Math.round(Nn(wn.g*255,0,255))*256+Math.round(Nn(wn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Te.workingColorSpace){return Te.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=fi){Te.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Wa),this.setHSL(Wa.h+e,Wa.s+i,Wa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Wa),e.getHSL(uc);const s=$f(Wa.h,uc.h,i),l=$f(Wa.s,uc.s,i),u=$f(Wa.l,uc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new De;De.NAMES=tv;let Gy=0;class Xo extends ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Vo(),this.name="",this.blending=br,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Lh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Uh&&(s.blendSrc=this.blendSrc),this.blendDst!==Lh&&(s.blendDst=this.blendDst),this.blendEquation!==Es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ev extends Xo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new nt,fc=new he;class Ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=R_,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(e),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R_&&(e.usage=this.usage),e}}class nv extends Ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class iv extends Ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Bi extends Ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Vy=0;const ui=new tn,_h=new Xn,xr=new nt,$n=new ko,zo=new ko,_n=new nt;class Fi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K0(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ce().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,s){return ui.makeTranslation(e,i,s),this.applyMatrix4(ui),this}scale(e,i,s){return ui.makeScale(e,i,s),this.applyMatrix4(ui),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Bi(s,3))}else{for(let s=0,l=i.count;s<l;s++){const u=e[s];i.setXYZ(s,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,zo.min),$n.expandByPoint(_n),_n.addVectors($n.max,zo.max),$n.expandByPoint(_n)):($n.expandByPoint(zo.min),$n.expandByPoint(zo.max))}$n.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)_n.fromBufferAttribute(d,p),m&&(xr.fromBufferAttribute(e,p),_n.add(xr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new nt,m[V]=new nt;const p=new nt,v=new nt,g=new nt,S=new he,M=new he,b=new he,C=new nt,y=new nt;function _(V,U,w){p.fromBufferAttribute(s,V),v.fromBufferAttribute(s,U),g.fromBufferAttribute(s,w),S.fromBufferAttribute(u,V),M.fromBufferAttribute(u,U),b.fromBufferAttribute(u,w),v.sub(p),g.sub(p),M.sub(S),b.sub(S);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(H),y.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(H),d[V].add(C),d[U].add(C),d[w].add(C),m[V].add(y),m[U].add(y),m[w].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let V=0,U=I.length;V<U;++V){const w=I[V],H=w.start,ut=w.count;for(let st=H,gt=H+ut;st<gt;st+=3)_(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const N=new nt,A=new nt,q=new nt,P=new nt;function D(V){q.fromBufferAttribute(l,V),P.copy(q);const U=d[V];N.copy(U),N.sub(q.multiplyScalar(q.dot(U))).normalize(),A.crossVectors(P,U);const H=A.dot(m[V])<0?-1:1;h.setXYZW(V,N.x,N.y,N.z,H)}for(let V=0,U=I.length;V<U;++V){const w=I[V],H=w.start,ut=w.count;for(let st=H,gt=H+ut;st<gt;st+=3)D(e.getX(st+0)),D(e.getX(st+1)),D(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,m=new nt,p=new nt,v=new nt,g=new nt;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,u),g.subVectors(l,u),v.cross(g),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,S=new p.constructor(m.length*v);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*v;for(let _=0;_<v;_++)S[b++]=p[M++]}return new Ai(S,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,g=p.length;v<g;v++){const S=p[v],M=e(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],g=u[p];for(let S=0,M=g.length;S<M;S++)v.push(g[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X_=new tn,vs=new Ad,hc=new Ic,W_=new nt,dc=new nt,pc=new nt,mc=new nt,vh=new nt,gc=new nt,Y_=new nt,_c=new nt;class Ti extends Xn{constructor(e=new Fi,i=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){gc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],g=u[m];v!==0&&(vh.fromBufferAttribute(g,e),h?gc.addScaledVector(vh,v):gc.addScaledVector(vh.sub(i),v))}i.add(gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(u),vs.copy(e.ray).recast(e.near),!(hc.containsPoint(vs.origin)===!1&&(vs.intersectSphere(hc,W_)===null||vs.origin.distanceToSquared(W_)>(e.far-e.near)**2))&&(X_.copy(u).invert(),vs.copy(e.ray).applyMatrix4(X_),!(s.boundingBox!==null&&vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,vs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],_=h[y.materialIndex],I=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let A=I,q=N;A<q;A+=3){const P=d.getX(A),D=d.getX(A+1),V=d.getX(A+2);l=vc(this,_,e,s,p,v,g,P,D,V),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,_=C;y<_;y+=3){const I=d.getX(y),N=d.getX(y+1),A=d.getX(y+2);l=vc(this,h,e,s,p,v,g,I,N,A),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],_=h[y.materialIndex],I=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let A=I,q=N;A<q;A+=3){const P=A,D=A+1,V=A+2;l=vc(this,_,e,s,p,v,g,P,D,V),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,_=C;y<_;y+=3){const I=y,N=y+1,A=y+2;l=vc(this,h,e,s,p,v,g,I,N,A),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ky(r,e,i,s,l,u,h,d){let m;if(e.side===On?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Qa,d),m===null)return null;_c.copy(d),_c.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:r}}function vc(r,e,i,s,l,u,h,d,m,p){r.getVertexPosition(d,dc),r.getVertexPosition(m,pc),r.getVertexPosition(p,mc);const v=ky(r,e,i,s,dc,pc,mc,Y_);if(v){const g=new nt;Po.getBarycoord(Y_,dc,pc,mc,g),l&&(v.uv=Po.getInterpolatedAttribute(l,d,m,p,g,new he)),u&&(v.uv1=Po.getInterpolatedAttribute(u,d,m,p,g,new he)),h&&(v.normal=Po.getInterpolatedAttribute(h,d,m,p,g,new nt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new nt,materialIndex:0};Po.getNormal(dc,pc,mc,S.normal),v.face=S,v.barycoord=g}return v}class Wo extends Fi{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],g=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Bi(p,3)),this.setAttribute("normal",new Bi(v,3)),this.setAttribute("uv",new Bi(g,2));function b(C,y,_,I,N,A,q,P,D,V,U){const w=A/D,H=q/V,ut=A/2,st=q/2,gt=P/2,_t=D+1,z=V+1;let K=0,Z=0;const Mt=new nt;for(let Tt=0;Tt<z;Tt++){const O=Tt*H-st;for(let tt=0;tt<_t;tt++){const yt=tt*w-ut;Mt[C]=yt*I,Mt[y]=O*N,Mt[_]=gt,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[y]=0,Mt[_]=P>0?1:-1,v.push(Mt.x,Mt.y,Mt.z),g.push(tt/D),g.push(1-Tt/V),K+=1}}for(let Tt=0;Tt<V;Tt++)for(let O=0;O<D;O++){const tt=S+O+_t*Tt,yt=S+O+_t*(Tt+1),G=S+(O+1)+_t*(Tt+1),ot=S+(O+1)+_t*Tt;m.push(tt,yt,ot),m.push(yt,G,ot),Z+=6}d.addGroup(M,Z,U),M+=Z,S+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(r){const e={};for(let i=0;i<r.length;i++){const s=Or(r[i]);for(const l in s)e[l]=s[l]}return e}function Xy(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function av(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const Wy={clone:Or,merge:Ln};var Yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Xo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ha}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new nt,q_=new he,j_=new he;class di extends sv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=md*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return md*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z)}getViewSize(e,i){return this.getViewBounds(e,q_,j_),i.subVectors(j_,q_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Lc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sr=-90,yr=1;class jy extends Xn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Sr,yr,e,i);l.layers=this.layers,this.add(l);const u=new di(Sr,yr,e,i);u.layers=this.layers,this.add(u);const h=new di(Sr,yr,e,i);h.layers=this.layers,this.add(h);const d=new di(Sr,yr,e,i);d.layers=this.layers,this.add(d);const m=new di(Sr,yr,e,i);m.layers=this.layers,this.add(m);const p=new di(Sr,yr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ha)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class rv extends hn{constructor(e,i,s,l,u,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:wr,super(e,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zy extends Rs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new rv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Dn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wo(5,5,5),u=new Ri({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:Za});u.uniforms.tEquirect.value=i;const h=new Ti(l,u),d=i.minFilter;return i.minFilter===bs&&(i.minFilter=Dn),new jy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}const xh=new nt,Ky=new nt,Qy=new ce;class qa{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=xh.subVectors(s,i).cross(Ky.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Qy.getNormalMatrix(e),l=this.coplanarPoint(xh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Ic,xc=new nt;class ov{constructor(e=new qa,i=new qa,s=new qa,l=new qa,u=new qa,h=new qa){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ha){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],g=l[6],S=l[7],M=l[8],b=l[9],C=l[10],y=l[11],_=l[12],I=l[13],N=l[14],A=l[15];if(s[0].setComponents(m-u,S-p,y-M,A-_).normalize(),s[1].setComponents(m+u,S+p,y+M,A+_).normalize(),s[2].setComponents(m+h,S+v,y+b,A+I).normalize(),s[3].setComponents(m-h,S-v,y-b,A-I).normalize(),s[4].setComponents(m-d,S-g,y-C,A-N).normalize(),i===ha)s[5].setComponents(m+d,S+g,y+C,A+N).normalize();else if(i===Oc)s[5].setComponents(d,g,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lv(){let r=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function Jy(r){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,v);else{g.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<g.length;M++){const b=g[S],C=g[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,g[S]=C)}g.length=S+1;for(let M=0,b=g.length;M<b;M++){const C=g[M];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}class Yo extends Fi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=e/d,S=i/m,M=[],b=[],C=[],y=[];for(let _=0;_<v;_++){const I=_*S-h;for(let N=0;N<p;N++){const A=N*g-u;b.push(A,-I,0),C.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const N=I+p*_,A=I+p*(_+1),q=I+1+p*(_+1),P=I+1+p*_;M.push(N,A,P),M.push(A,q,P)}this.setIndex(M),this.setAttribute("position",new Bi(b,3)),this.setAttribute("normal",new Bi(C,3)),this.setAttribute("uv",new Bi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
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
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
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
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
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
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,dM=`#ifdef USE_BUMPMAP
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MM=`#define PI 3.141592653589793
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
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TM=`vec3 transformedNormal = objectNormal;
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
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",DM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
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
}`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
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
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,YM=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
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
#endif`,QM=`struct PhysicalMaterial {
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
}`,JM=`
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lE=`#if defined( USE_POINTS_UV )
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
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
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
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IE=`float getShadowMask() {
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
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`#include <common>
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
}`,sT=`#if DEPTH_PACKING == 3200
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
}`,rT=`#define DISTANCE
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
}`,oT=`#define DISTANCE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
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
}`,fT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,vT=`#define NORMAL
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
}`,xT=`#define NORMAL
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
}`,ST=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,ET=`#define STANDARD
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
}`,TT=`#define TOON
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
}`,bT=`#define TOON
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
}`,AT=`uniform float size;
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,wT=`uniform vec3 color;
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
}`,DT=`uniform float rotation;
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
}`,UT=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:$y,alphahash_pars_fragment:tM,alphamap_fragment:eM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:sM,aomap_pars_fragment:rM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:fM,iridescence_fragment:hM,bumpmap_pars_fragment:dM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:SM,color_vertex:yM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:TM,displacementmap_pars_vertex:bM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:wM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:WM,envmap_vertex:PM,fog_vertex:zM,fog_pars_vertex:IM,fog_fragment:BM,fog_pars_fragment:FM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:kM,lights_pars_begin:XM,lights_toon_fragment:YM,lights_toon_pars_fragment:qM,lights_phong_fragment:jM,lights_phong_pars_fragment:ZM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:tE,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:aE,map_fragment:sE,map_pars_fragment:rE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:fE,morphcolor_vertex:hE,morphnormal_vertex:dE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:SE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:bE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:wE,dithering_fragment:DE,dithering_pars_fragment:UE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:PE,shadowmap_vertex:zE,shadowmask_pars_fragment:IE,skinbase_vertex:BE,skinning_pars_vertex:FE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:kE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:YE,transmission_pars_fragment:qE,uv_pars_fragment:jE,uv_pars_vertex:ZE,uv_vertex:KE,worldpos_vertex:QE,background_vert:JE,background_frag:$E,backgroundCube_vert:tT,backgroundCube_frag:eT,cube_vert:nT,cube_frag:iT,depth_vert:aT,depth_frag:sT,distanceRGBA_vert:rT,distanceRGBA_frag:oT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:fT,meshbasic_vert:hT,meshbasic_frag:dT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:_T,meshnormal_vert:vT,meshnormal_frag:xT,meshphong_vert:ST,meshphong_frag:yT,meshphysical_vert:MT,meshphysical_frag:ET,meshtoon_vert:TT,meshtoon_frag:bT,points_vert:AT,points_frag:RT,shadow_vert:CT,shadow_frag:wT,sprite_vert:DT,sprite_frag:UT},Ot={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Oi={basic:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Ln([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Ln([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Ln([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Ln([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Ln([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Ln([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Ln([Ot.common,Ot.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Ln([Ot.lights,Ot.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Oi.physical={uniforms:Ln([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Sc={r:0,b:0,g:0},Ss=new ma,LT=new tn;function NT(r,e,i,s,l,u,h){const d=new De(0);let m=u===!0?0:1,p,v,g=null,S=0,M=null;function b(I){let N=I.isScene===!0?I.background:null;return N&&N.isTexture&&(N=(I.backgroundBlurriness>0?i:e).get(N)),N}function C(I){let N=!1;const A=b(I);A===null?_(d,m):A&&A.isColor&&(_(A,1),N=!0);const q=r.xr.getEnvironmentBlendMode();q==="additive"?s.buffers.color.setClear(0,0,0,1,h):q==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(I,N){const A=b(N);A&&(A.isCubeTexture||A.mapping===Pc)?(v===void 0&&(v=new Ti(new Wo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Or(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(q,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ss.copy(N.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),v.material.uniforms.envMap.value=A,v.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(Ss)),v.material.toneMapped=Te.getTransfer(A.colorSpace)!==Fe,(g!==A||S!==A.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,g=A,S=A.version,M=r.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Ti(new Yo(2,2),new Ri({name:"BackgroundMaterial",uniforms:Or(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Te.getTransfer(A.colorSpace)!==Fe,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||S!==A.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=A,S=A.version,M=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function _(I,N){I.getRGB(Sc,av(r)),s.buffers.color.setClear(Sc.r,Sc.g,Sc.b,N,h)}return{getClearColor:function(){return d},setClearColor:function(I,N=1){d.set(I),m=N,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(I){m=I,_(d,m)},render:C,addToRenderList:y}}function OT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(w,H,ut,st,gt){let _t=!1;const z=g(st,ut,H);u!==z&&(u=z,p(u.object)),_t=M(w,st,ut,gt),_t&&b(w,st,ut,gt),gt!==null&&e.update(gt,r.ELEMENT_ARRAY_BUFFER),(_t||h)&&(h=!1,A(w,H,ut,st),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function v(w){return r.deleteVertexArray(w)}function g(w,H,ut){const st=ut.wireframe===!0;let gt=s[w.id];gt===void 0&&(gt={},s[w.id]=gt);let _t=gt[H.id];_t===void 0&&(_t={},gt[H.id]=_t);let z=_t[st];return z===void 0&&(z=S(m()),_t[st]=z),z}function S(w){const H=[],ut=[],st=[];for(let gt=0;gt<i;gt++)H[gt]=0,ut[gt]=0,st[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ut,attributeDivisors:st,object:w,attributes:{},index:null}}function M(w,H,ut,st){const gt=u.attributes,_t=H.attributes;let z=0;const K=ut.getAttributes();for(const Z in K)if(K[Z].location>=0){const Tt=gt[Z];let O=_t[Z];if(O===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),Tt===void 0||Tt.attribute!==O||O&&Tt.data!==O.data)return!0;z++}return u.attributesNum!==z||u.index!==st}function b(w,H,ut,st){const gt={},_t=H.attributes;let z=0;const K=ut.getAttributes();for(const Z in K)if(K[Z].location>=0){let Tt=_t[Z];Tt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));const O={};O.attribute=Tt,Tt&&Tt.data&&(O.data=Tt.data),gt[Z]=O,z++}u.attributes=gt,u.attributesNum=z,u.index=st}function C(){const w=u.newAttributes;for(let H=0,ut=w.length;H<ut;H++)w[H]=0}function y(w){_(w,0)}function _(w,H){const ut=u.newAttributes,st=u.enabledAttributes,gt=u.attributeDivisors;ut[w]=1,st[w]===0&&(r.enableVertexAttribArray(w),st[w]=1),gt[w]!==H&&(r.vertexAttribDivisor(w,H),gt[w]=H)}function I(){const w=u.newAttributes,H=u.enabledAttributes;for(let ut=0,st=H.length;ut<st;ut++)H[ut]!==w[ut]&&(r.disableVertexAttribArray(ut),H[ut]=0)}function N(w,H,ut,st,gt,_t,z){z===!0?r.vertexAttribIPointer(w,H,ut,gt,_t):r.vertexAttribPointer(w,H,ut,st,gt,_t)}function A(w,H,ut,st){C();const gt=st.attributes,_t=ut.getAttributes(),z=H.defaultAttributeValues;for(const K in _t){const Z=_t[K];if(Z.location>=0){let Mt=gt[K];if(Mt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const Tt=Mt.normalized,O=Mt.itemSize,tt=e.get(Mt);if(tt===void 0)continue;const yt=tt.buffer,G=tt.type,ot=tt.bytesPerElement,Et=G===r.INT||G===r.UNSIGNED_INT||Mt.gpuType===Sd;if(Mt.isInterleavedBufferAttribute){const St=Mt.data,kt=St.stride,It=Mt.offset;if(St.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Z.locationSize;Qt++)_(Z.location+Qt,St.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Qt=0;Qt<Z.locationSize;Qt++)y(Z.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Qt=0;Qt<Z.locationSize;Qt++)N(Z.location+Qt,O/Z.locationSize,G,Tt,kt*ot,(It+O/Z.locationSize*Qt)*ot,Et)}else{if(Mt.isInstancedBufferAttribute){for(let St=0;St<Z.locationSize;St++)_(Z.location+St,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let St=0;St<Z.locationSize;St++)y(Z.location+St);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let St=0;St<Z.locationSize;St++)N(Z.location+St,O/Z.locationSize,G,Tt,O*ot,O/Z.locationSize*St*ot,Et)}}else if(z!==void 0){const Tt=z[K];if(Tt!==void 0)switch(Tt.length){case 2:r.vertexAttrib2fv(Z.location,Tt);break;case 3:r.vertexAttrib3fv(Z.location,Tt);break;case 4:r.vertexAttrib4fv(Z.location,Tt);break;default:r.vertexAttrib1fv(Z.location,Tt)}}}}I()}function q(){V();for(const w in s){const H=s[w];for(const ut in H){const st=H[ut];for(const gt in st)v(st[gt].object),delete st[gt];delete H[ut]}delete s[w]}}function P(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const ut in H){const st=H[ut];for(const gt in st)v(st[gt].object),delete st[gt];delete H[ut]}delete s[w.id]}function D(w){for(const H in s){const ut=s[H];if(ut[w.id]===void 0)continue;const st=ut[w.id];for(const gt in st)v(st[gt].object),delete st[gt];delete ut[w.id]}}function V(){U(),h=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:U,dispose:q,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:C,enableAttribute:y,disableUnusedAttributes:I}}function PT(r,e,i){let s;function l(p){s=p}function u(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];i.update(M,s,1)}function m(p,v,g,S){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,g);let b=0;for(let C=0;C<g;C++)b+=v[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function zT(r,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(D){return!(D!==Ei&&s.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(D){const V=D===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==pa&&s.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==fa&&!V)}function m(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),q=b>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:A,vertexTextures:q,maxSamples:P}}function IT(r){const e=this;let i=null,s=0,l=!1,u=!1;const h=new qa,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||s!==0||l;return l=S,s=g.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,M){const b=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,_=r.get(g);if(!l||b===null||b.length===0||u&&!y)u?v(null):p();else{const I=u?0:s,N=I*4;let A=_.clippingState||null;m.value=A,A=v(b,S,N,M);for(let q=0;q!==N;++q)A[q]=i[q];_.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,S,M,b){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const _=M+C*4,I=S.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,A=M;N!==C;++N,A+=4)h.copy(g[N]).applyMatrix4(I,d),h.normal.toArray(y,A),y[A+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function BT(r){let e=new WeakMap;function i(h,d){return d===Hh?h.mapping=wr:d===Gh&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Hh||d===Gh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Zy(m.height);return p.fromEquirectangularTexture(r,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class FT extends sv{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Tr=4,Z_=[.125,.215,.35,.446,.526,.582],Ts=20,Sh=new FT,K_=new De;let yh=null,Mh=0,Eh=0,Th=!1;const Ms=(1+Math.sqrt(5))/2,Mr=1/Ms,Q_=[new nt(-Ms,Mr,0),new nt(Ms,Mr,0),new nt(-Mr,0,Ms),new nt(Mr,0,Ms),new nt(0,Ms,-Mr),new nt(0,Ms,Mr),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)];class J_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Mh,Eh),this._renderer.xr.enabled=Th,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Go,format:Ei,colorSpace:Pr,depthBuffer:!1},l=$_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HT(u)),this._blurMaterial=GT(u,e,i)}return l}_compileMaterial(e){const i=new Ti(this._lodPlanes[0],e);this._renderer.compile(i,Sh)}_sceneToCubeUV(e,i,s,l){const d=new di(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(K_),v.toneMapping=Ka,v.autoClear=!1;const M=new ev({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),b=new Ti(new Wo,M);let C=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,C=!0):(M.color.copy(K_),C=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):I===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const N=this._cubeSize;yc(l,I*N,_>2?N:0,N,N),v.setRenderTarget(l),C&&v.render(b,d),v.render(e,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=g,e.background=y}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===wr||e.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ti(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;yc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Sh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Q_[(l-u-1)%Q_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Ti(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ts-1),C=u/b,y=isFinite(u)?1+Math.floor(v*C):Ts;y>Ts&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ts}`);const _=[];let I=0;for(let D=0;D<Ts;++D){const V=D/C,U=Math.exp(-V*V/2);_.push(U),D===0?I+=U:D<y&&(I+=2*U)}for(let D=0;D<_.length;D++)_[D]=_[D]/I;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-s;const A=this._sizeLods[l],q=3*A*(l>N-Tr?l-N+Tr:0),P=4*(this._cubeSize-A);yc(i,q,P,3*A,2*A),m.setRenderTarget(i),m.render(g,Sh)}}function HT(r){const e=[],i=[],s=[];let l=r;const u=r-Tr+1+Z_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Tr?m=Z_[h-r+Tr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,g=1+p,S=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,C=3,y=2,_=1,I=new Float32Array(C*b*M),N=new Float32Array(y*b*M),A=new Float32Array(_*b*M);for(let P=0;P<M;P++){const D=P%3*2/3-1,V=P>2?0:-1,U=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];I.set(U,C*b*P),N.set(S,y*b*P);const w=[P,P,P,P,P,P];A.set(w,_*b*P)}const q=new Fi;q.setAttribute("position",new Ai(I,C)),q.setAttribute("uv",new Ai(N,y)),q.setAttribute("faceIndex",new Ai(A,_)),e.push(q),l>Tr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function $_(r,e,i){const s=new Rs(r,e,i);return s.texture.mapping=Pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function GT(r,e,i){const s=new Float32Array(Ts),l=new nt(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function t0(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function e0(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function Rd(){return`

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
	`}function VT(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Hh||m===Gh,v=m===wr||m===Dr;if(p||v){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new J_(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new J_(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function kT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Io("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function XT(r,e,i,s){const l={},u=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const C=S.morphAttributes[b];for(let y=0,_=C.length;y<_;y++)e.remove(C[y])}S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const b in S)e.update(S[b],r.ARRAY_BUFFER);const M=g.morphAttributes;for(const b in M){const C=M[b];for(let y=0,_=C.length;y<_;y++)e.update(C[y],r.ARRAY_BUFFER)}}function p(g){const S=[],M=g.index,b=g.attributes.position;let C=0;if(M!==null){const I=M.array;C=M.version;for(let N=0,A=I.length;N<A;N+=3){const q=I[N+0],P=I[N+1],D=I[N+2];S.push(q,P,P,D,D,q)}}else if(b!==void 0){const I=b.array;C=b.version;for(let N=0,A=I.length/3-1;N<A;N+=3){const q=N+0,P=N+1,D=N+2;S.push(q,P,P,D,D,q)}}else return;const y=new(K0(S)?iv:nv)(S,1);y.version=C;const _=u.get(g);_&&e.remove(_),u.set(g,y)}function v(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function WT(r,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){r.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(r.drawElementsInstanced(s,M,u,S*h,b),i.update(M,s,b))}function v(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function g(S,M,b,C){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,C,0,b);let _=0;for(let I=0;I<b;I++)_+=M[I]*C[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function YT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function qT(r,e,i){const s=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let w=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let A=0;b===!0&&(A=1),C===!0&&(A=2),y===!0&&(A=3);let q=d.attributes.position.count*A,P=1;q>e.maxTextureSize&&(P=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const D=new Float32Array(q*P*4*g),V=new J0(D,q,P,g);V.type=fa,V.needsUpdate=!0;const U=A*4;for(let H=0;H<g;H++){const ut=_[H],st=I[H],gt=N[H],_t=q*P*4*H;for(let z=0;z<ut.count;z++){const K=z*U;b===!0&&(l.fromBufferAttribute(ut,z),D[_t+K+0]=l.x,D[_t+K+1]=l.y,D[_t+K+2]=l.z,D[_t+K+3]=0),C===!0&&(l.fromBufferAttribute(st,z),D[_t+K+4]=l.x,D[_t+K+5]=l.y,D[_t+K+6]=l.z,D[_t+K+7]=0),y===!0&&(l.fromBufferAttribute(gt,z),D[_t+K+8]=l.x,D[_t+K+9]=l.y,D[_t+K+10]=l.z,D[_t+K+11]=gt.itemSize===4?l.w:1)}}S={count:g,texture:V,size:new he(q,P)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:u}}function jT(r,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class cv extends hn{constructor(e,i,s,l,u,h,d,m,p,v=Ar){if(v!==Ar&&v!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===Ar&&(s=As),s===void 0&&v===Nr&&(s=Lr),super(null,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:bi,this.minFilter=m!==void 0?m:bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const uv=new hn,n0=new cv(1,1),fv=new J0,hv=new Ny,dv=new rv,i0=[],a0=[],s0=new Float32Array(16),r0=new Float32Array(9),o0=new Float32Array(4);function zr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let u=i0[l];if(u===void 0&&(u=new Float32Array(l),i0[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(u,d)}return u}function dn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function pn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Bc(r,e){let i=a0[e];i===void 0&&(i=new Int32Array(e),a0[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function ZT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function KT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;r.uniform2fv(this.addr,e),pn(i,e)}}function QT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;r.uniform3fv(this.addr,e),pn(i,e)}}function JT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;r.uniform4fv(this.addr,e),pn(i,e)}}function $T(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;o0.set(s),r.uniformMatrix2fv(this.addr,!1,o0),pn(i,s)}}function tb(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;r0.set(s),r.uniformMatrix3fv(this.addr,!1,r0),pn(i,s)}}function eb(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;s0.set(s),r.uniformMatrix4fv(this.addr,!1,s0),pn(i,s)}}function nb(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function ib(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;r.uniform2iv(this.addr,e),pn(i,e)}}function ab(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;r.uniform3iv(this.addr,e),pn(i,e)}}function sb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;r.uniform4iv(this.addr,e),pn(i,e)}}function rb(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function ob(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;r.uniform2uiv(this.addr,e),pn(i,e)}}function lb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;r.uniform3uiv(this.addr,e),pn(i,e)}}function cb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;r.uniform4uiv(this.addr,e),pn(i,e)}}function ub(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(n0.compareFunction=Z0,u=n0):u=uv,i.setTexture2D(e||u,l)}function fb(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||hv,l)}function hb(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||dv,l)}function db(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||fv,l)}function pb(r){switch(r){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tb;case 35676:return eb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return ab;case 35669:case 35673:return sb;case 5125:return rb;case 36294:return ob;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return db}}function mb(r,e){r.uniform1fv(this.addr,e)}function gb(r,e){const i=zr(e,this.size,2);r.uniform2fv(this.addr,i)}function _b(r,e){const i=zr(e,this.size,3);r.uniform3fv(this.addr,i)}function vb(r,e){const i=zr(e,this.size,4);r.uniform4fv(this.addr,i)}function xb(r,e){const i=zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Sb(r,e){const i=zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function yb(r,e){const i=zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Mb(r,e){r.uniform1iv(this.addr,e)}function Eb(r,e){r.uniform2iv(this.addr,e)}function Tb(r,e){r.uniform3iv(this.addr,e)}function bb(r,e){r.uniform4iv(this.addr,e)}function Ab(r,e){r.uniform1uiv(this.addr,e)}function Rb(r,e){r.uniform2uiv(this.addr,e)}function Cb(r,e){r.uniform3uiv(this.addr,e)}function wb(r,e){r.uniform4uiv(this.addr,e)}function Db(r,e,i){const s=this.cache,l=e.length,u=Bc(i,l);dn(s,u)||(r.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||uv,u[h])}function Ub(r,e,i){const s=this.cache,l=e.length,u=Bc(i,l);dn(s,u)||(r.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||hv,u[h])}function Lb(r,e,i){const s=this.cache,l=e.length,u=Bc(i,l);dn(s,u)||(r.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||dv,u[h])}function Nb(r,e,i){const s=this.cache,l=e.length,u=Bc(i,l);dn(s,u)||(r.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||fv,u[h])}function Ob(r){switch(r){case 5126:return mb;case 35664:return gb;case 35665:return _b;case 35666:return vb;case 35674:return xb;case 35675:return Sb;case 35676:return yb;case 5124:case 35670:return Mb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return bb;case 5125:return Ab;case 36294:return Rb;case 36295:return Cb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Nb}}class Pb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=pb(i.type)}}class zb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ob(i.type)}}class Ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function l0(r,e){r.seq.push(e),r.map[e.id]=e}function Bb(r,e,i){const s=r.name,l=s.length;for(bh.lastIndex=0;;){const u=bh.exec(s),h=bh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){l0(i,p===void 0?new Pb(d,r,e):new zb(d,r,e));break}else{let g=i.map[d];g===void 0&&(g=new Ib(d),l0(i,g)),i=g}}}class Nc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Bb(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function c0(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const Fb=37297;let Hb=0;function Gb(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const u0=new ce;function Vb(r){Te._getMatrix(u0,Te.workingColorSpace,r);const e=`mat3( ${u0.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case zc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function f0(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Gb(r.getShaderSource(e),h)}else return l}function kb(r,e){const i=Vb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Xb(r,e){let i;switch(e){case ay:i="Linear";break;case sy:i="Reinhard";break;case ry:i="Cineon";break;case oy:i="ACESFilmic";break;case cy:i="AgX";break;case uy:i="Neutral";break;case ly:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new nt;function Wb(){Te.getLuminanceCoefficients(Mc);const r=Mc.x.toFixed(4),e=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function qb(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function jb(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(e,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Bo(r){return r!==""}function h0(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(r){return r.replace(Zb,Qb)}const Kb=new Map;function Qb(r,e){let i=fe[e];if(i===void 0){const s=Kb.get(e);if(s!==void 0)i=fe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return gd(i)}const Jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p0(r){return r.replace(Jb,$b)}function $b(r,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function m0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function t1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===IS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ua&&(e="SHADOWMAP_TYPE_VSM"),e}function e1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function i1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case I0:e="ENVMAP_BLENDING_MULTIPLY";break;case ny:e="ENVMAP_BLENDING_MIX";break;case iy:e="ENVMAP_BLENDING_ADD";break}return e}function a1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function s1(r,e,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=t1(i),p=e1(i),v=n1(i),g=i1(i),S=a1(i),M=Yb(i),b=qb(u),C=l.createProgram();let y,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),_.length>0&&(_+=`
`)):(y=[m0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),_=[m0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?fe.tonemapping_pars_fragment:"",i.toneMapping!==Ka?Xb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,kb("linearToOutputTexel",i.outputColorSpace),Wb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=gd(h),h=h0(h,i),h=d0(h,i),d=gd(d),d=h0(d,i),d=d0(d,i),h=p0(h),d=p0(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=I+y+h,A=I+_+d,q=c0(l,l.VERTEX_SHADER,N),P=c0(l,l.FRAGMENT_SHADER,A);l.attachShader(C,q),l.attachShader(C,P),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function D(H){if(r.debug.checkShaderErrors){const ut=l.getProgramInfoLog(C).trim(),st=l.getShaderInfoLog(q).trim(),gt=l.getShaderInfoLog(P).trim();let _t=!0,z=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(_t=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,q,P);else{const K=f0(l,q,"vertex"),Z=f0(l,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ut+`
`+K+`
`+Z)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(st===""||gt==="")&&(z=!1);z&&(H.diagnostics={runnable:_t,programLog:ut,vertexShader:{log:st,prefix:y},fragmentShader:{log:gt,prefix:_}})}l.deleteShader(q),l.deleteShader(P),V=new Nc(l,C),U=jb(l,C)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let U;this.getAttributes=function(){return U===void 0&&D(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,Fb)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Hb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=q,this.fragmentShader=P,this}let r1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new l1(e),i.set(e,s)),s}}class l1{constructor(e){this.id=r1++,this.code=e,this.usedTimes=0}}function c1(r,e,i,s,l,u,h){const d=new $0,m=new o1,p=new Set,v=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(U){return p.add(U),U===0?"uv":`uv${U}`}function y(U,w,H,ut,st){const gt=ut.fog,_t=st.geometry,z=U.isMeshStandardMaterial?ut.environment:null,K=(U.isMeshStandardMaterial?i:e).get(U.envMap||z),Z=K&&K.mapping===Pc?K.image.height:null,Mt=b[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const Tt=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,O=Tt!==void 0?Tt.length:0;let tt=0;_t.morphAttributes.position!==void 0&&(tt=1),_t.morphAttributes.normal!==void 0&&(tt=2),_t.morphAttributes.color!==void 0&&(tt=3);let yt,G,ot,Et;if(Mt){const Ee=Oi[Mt];yt=Ee.vertexShader,G=Ee.fragmentShader}else yt=U.vertexShader,G=U.fragmentShader,m.update(U),ot=m.getVertexShaderID(U),Et=m.getFragmentShaderID(U);const St=r.getRenderTarget(),kt=r.state.buffers.depth.getReversed(),It=st.isInstancedMesh===!0,Qt=st.isBatchedMesh===!0,de=!!U.map,ue=!!U.matcap,Ve=!!K,X=!!U.aoMap,on=!!U.lightMap,oe=!!U.bumpMap,pe=!!U.normalMap,bt=!!U.displacementMap,ae=!!U.emissiveMap,zt=!!U.metalnessMap,L=!!U.roughnessMap,E=U.anisotropy>0,Q=U.clearcoat>0,lt=U.dispersion>0,dt=U.iridescence>0,ft=U.sheen>0,Ft=U.transmission>0,Ct=E&&!!U.anisotropyMap,Bt=Q&&!!U.clearcoatMap,_e=Q&&!!U.clearcoatNormalMap,Rt=Q&&!!U.clearcoatRoughnessMap,Ht=dt&&!!U.iridescenceMap,Zt=dt&&!!U.iridescenceThicknessMap,qt=ft&&!!U.sheenColorMap,Pt=ft&&!!U.sheenRoughnessMap,$t=!!U.specularMap,se=!!U.specularColorMap,Oe=!!U.specularIntensityMap,k=Ft&&!!U.transmissionMap,wt=Ft&&!!U.thicknessMap,ct=!!U.gradientMap,vt=!!U.alphaMap,Dt=U.alphaTest>0,Nt=!!U.alphaHash,te=!!U.extensions;let Ye=Ka;U.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Ye=r.toneMapping);const ln={shaderID:Mt,shaderType:U.type,shaderName:U.name,vertexShader:yt,fragmentShader:G,defines:U.defines,customVertexShaderID:ot,customFragmentShaderID:Et,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&st._colorsTexture!==null,instancing:It,instancingColor:It&&st.instanceColor!==null,instancingMorph:It&&st.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:St===null?r.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Pr,alphaToCoverage:!!U.alphaToCoverage,map:de,matcap:ue,envMap:Ve,envMapMode:Ve&&K.mapping,envMapCubeUVHeight:Z,aoMap:X,lightMap:on,bumpMap:oe,normalMap:pe,displacementMap:S&&bt,emissiveMap:ae,normalMapObjectSpace:pe&&U.normalMapType===my,normalMapTangentSpace:pe&&U.normalMapType===py,metalnessMap:zt,roughnessMap:L,anisotropy:E,anisotropyMap:Ct,clearcoat:Q,clearcoatMap:Bt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Rt,dispersion:lt,iridescence:dt,iridescenceMap:Ht,iridescenceThicknessMap:Zt,sheen:ft,sheenColorMap:qt,sheenRoughnessMap:Pt,specularMap:$t,specularColorMap:se,specularIntensityMap:Oe,transmission:Ft,transmissionMap:k,thicknessMap:wt,gradientMap:ct,opaque:U.transparent===!1&&U.blending===br&&U.alphaToCoverage===!1,alphaMap:vt,alphaTest:Dt,alphaHash:Nt,combine:U.combine,mapUv:de&&C(U.map.channel),aoMapUv:X&&C(U.aoMap.channel),lightMapUv:on&&C(U.lightMap.channel),bumpMapUv:oe&&C(U.bumpMap.channel),normalMapUv:pe&&C(U.normalMap.channel),displacementMapUv:bt&&C(U.displacementMap.channel),emissiveMapUv:ae&&C(U.emissiveMap.channel),metalnessMapUv:zt&&C(U.metalnessMap.channel),roughnessMapUv:L&&C(U.roughnessMap.channel),anisotropyMapUv:Ct&&C(U.anisotropyMap.channel),clearcoatMapUv:Bt&&C(U.clearcoatMap.channel),clearcoatNormalMapUv:_e&&C(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&C(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&C(U.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&C(U.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&C(U.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&C(U.sheenRoughnessMap.channel),specularMapUv:$t&&C(U.specularMap.channel),specularColorMapUv:se&&C(U.specularColorMap.channel),specularIntensityMapUv:Oe&&C(U.specularIntensityMap.channel),transmissionMapUv:k&&C(U.transmissionMap.channel),thicknessMapUv:wt&&C(U.thicknessMap.channel),alphaMapUv:vt&&C(U.alphaMap.channel),vertexTangents:!!_t.attributes.tangent&&(pe||E),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!_t.attributes.uv&&(de||vt),fog:!!gt,useFog:U.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:kt,skinning:st.isSkinnedMesh===!0,morphTargets:_t.morphAttributes.position!==void 0,morphNormals:_t.morphAttributes.normal!==void 0,morphColors:_t.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ye,decodeVideoTexture:de&&U.map.isVideoTexture===!0&&Te.getTransfer(U.map.colorSpace)===Fe,decodeVideoTextureEmissive:ae&&U.emissiveMap.isVideoTexture===!0&&Te.getTransfer(U.emissiveMap.colorSpace)===Fe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Pi,flipSided:U.side===On,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:te&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&U.extensions.multiDraw===!0||Qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function _(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)w.push(H),w.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(I(w,U),N(w,U),w.push(r.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function I(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function N(U,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),U.push(d.mask)}function A(U){const w=b[U.type];let H;if(w){const ut=Oi[w];H=Wy.clone(ut.uniforms)}else H=U.uniforms;return H}function q(U,w){let H;for(let ut=0,st=v.length;ut<st;ut++){const gt=v[ut];if(gt.cacheKey===w){H=gt,++H.usedTimes;break}}return H===void 0&&(H=new s1(r,w,U,u),v.push(H)),H}function P(U){if(--U.usedTimes===0){const w=v.indexOf(U);v[w]=v[v.length-1],v.pop(),U.destroy()}}function D(U){m.remove(U)}function V(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:A,acquireProgram:q,releaseProgram:P,releaseShaderCache:D,programs:v,dispose:V}}function u1(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function f1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function g0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _0(){const r=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(g,S,M,b,C,y){let _=r[e];return _===void 0?(_={id:g.id,object:g,geometry:S,material:M,groupOrder:b,renderOrder:g.renderOrder,z:C,group:y},r[e]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=M,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=C,_.group=y),e++,_}function d(g,S,M,b,C,y){const _=h(g,S,M,b,C,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,S,M,b,C,y){const _=h(g,S,M,b,C,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||f1),s.length>1&&s.sort(S||g0),l.length>1&&l.sort(S||g0)}function v(){for(let g=e,S=r.length;g<S;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function h1(){let r=new WeakMap;function e(s,l){const u=r.get(s);let h;return u===void 0?(h=new _0,r.set(s,[h])):l>=u.length?(h=new _0,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function d1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new De};break;case"SpotLight":i={position:new nt,direction:new nt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return r[e.id]=i,i}}}function p1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let m1=0;function g1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _1(r){const e=new d1,i=p1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new nt);const l=new nt,u=new tn,h=new tn;function d(p){let v=0,g=0,S=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,b=0,C=0,y=0,_=0,I=0,N=0,A=0,q=0,P=0,D=0;p.sort(g1);for(let U=0,w=p.length;U<w;U++){const H=p[U],ut=H.color,st=H.intensity,gt=H.distance,_t=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=ut.r*st,g+=ut.g*st,S+=ut.b*st;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],st);D++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,Z=i.get(H);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=_t,s.directionalShadowMatrix[M]=H.shadow.matrix,I++}s.directional[M]=z,M++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(ut).multiplyScalar(st),z.distance=gt,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[C]=z;const K=H.shadow;if(H.map&&(s.spotLightMap[q]=H.map,q++,K.updateMatrices(H),H.castShadow&&P++),s.spotLightMatrix[C]=K.matrix,H.castShadow){const Z=i.get(H);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[C]=Z,s.spotShadowMap[C]=_t,A++}C++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(ut).multiplyScalar(st),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=z,y++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const K=H.shadow,Z=i.get(H);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=_t,s.pointShadowMatrix[b]=H.shadow.matrix,N++}s.point[b]=z,b++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(st),z.groundColor.copy(H.groundColor).multiplyScalar(st),s.hemi[_]=z,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=S;const V=s.hash;(V.directionalLength!==M||V.pointLength!==b||V.spotLength!==C||V.rectAreaLength!==y||V.hemiLength!==_||V.numDirectionalShadows!==I||V.numPointShadows!==N||V.numSpotShadows!==A||V.numSpotMaps!==q||V.numLightProbes!==D)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=A+q-P,s.spotLightMap.length=q,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=D,V.directionalLength=M,V.pointLength=b,V.spotLength=C,V.rectAreaLength=y,V.hemiLength=_,V.numDirectionalShadows=I,V.numPointShadows=N,V.numSpotShadows=A,V.numSpotMaps=q,V.numLightProbes=D,s.version=m1++)}function m(p,v){let g=0,S=0,M=0,b=0,C=0;const y=v.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const N=p[_];if(N.isDirectionalLight){const A=s.directional[g];A.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(y),g++}else if(N.isSpotLight){const A=s.spot[M];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const A=s.rectArea[b];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),A.halfWidth.set(N.width*.5,0,0),A.halfHeight.set(0,N.height*.5,0),A.halfWidth.applyMatrix4(h),A.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const A=s.point[S];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const A=s.hemi[C];A.direction.setFromMatrixPosition(N.matrixWorld),A.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function v0(r){const e=new _1(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function v1(r){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new v0(r),e.set(l,[d])):u>=h.length?(d=new v0(r),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}class x1 extends Xo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S1 extends Xo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
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
}`;function E1(r,e,i){let s=new ov;const l=new he,u=new he,h=new $e,d=new x1({depthPacking:dy}),m=new S1,p={},v=i.maxTextureSize,g={[Qa]:On,[On]:Qa,[Pi]:Pi},S=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:y1,fragmentShader:M1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Fi;b.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ti(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z0;let _=this.type;this.render=function(P,D,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const U=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),ut=r.state;ut.setBlending(Za),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const st=_!==ua&&this.type===ua,gt=_===ua&&this.type!==ua;for(let _t=0,z=P.length;_t<z;_t++){const K=P[_t],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Mt=Z.getFrameExtents();if(l.multiply(Mt),u.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/Mt.x),l.x=u.x*Mt.x,Z.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/Mt.y),l.y=u.y*Mt.y,Z.mapSize.y=u.y)),Z.map===null||st===!0||gt===!0){const O=this.type!==ua?{minFilter:bi,magFilter:bi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Rs(l.x,l.y,O),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const Tt=Z.getViewportCount();for(let O=0;O<Tt;O++){const tt=Z.getViewport(O);h.set(u.x*tt.x,u.y*tt.y,u.x*tt.z,u.y*tt.w),ut.viewport(h),Z.updateMatrices(K,O),s=Z.getFrustum(),A(D,V,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ua&&I(Z,V),Z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(U,w,H)};function I(P,D){const V=e.update(C);S.defines.VSM_SAMPLES!==P.blurSamples&&(S.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Rs(l.x,l.y)),S.uniforms.shadow_pass.value=P.map.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(D,null,V,S,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(D,null,V,M,C,null)}function N(P,D,V,U){let w=null;const H=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)w=H;else if(w=V.isPointLight===!0?m:d,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ut=w.uuid,st=D.uuid;let gt=p[ut];gt===void 0&&(gt={},p[ut]=gt);let _t=gt[st];_t===void 0&&(_t=w.clone(),gt[st]=_t,D.addEventListener("dispose",q)),w=_t}if(w.visible=D.visible,w.wireframe=D.wireframe,U===ua?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:g[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ut=r.properties.get(w);ut.light=V}return w}function A(P,D,V,U,w){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===ua)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const st=e.update(P),gt=P.material;if(Array.isArray(gt)){const _t=st.groups;for(let z=0,K=_t.length;z<K;z++){const Z=_t[z],Mt=gt[Z.materialIndex];if(Mt&&Mt.visible){const Tt=N(P,Mt,U,w);P.onBeforeShadow(r,P,D,V,st,Tt,Z),r.renderBufferDirect(V,null,st,Tt,P,Z),P.onAfterShadow(r,P,D,V,st,Tt,Z)}}}else if(gt.visible){const _t=N(P,gt,U,w);P.onBeforeShadow(r,P,D,V,st,_t,null),r.renderBufferDirect(V,null,st,_t,P,null),P.onAfterShadow(r,P,D,V,st,_t,null)}}const ut=P.children;for(let st=0,gt=ut.length;st<gt;st++)A(ut[st],D,V,U,w)}function q(P){P.target.removeEventListener("dispose",q);for(const V in p){const U=p[V],w=P.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const T1={[Nh]:Oh,[Ph]:Bh,[zh]:Fh,[Cr]:Ih,[Oh]:Nh,[Bh]:Ph,[Fh]:zh,[Ih]:Cr};function b1(r,e){function i(){let k=!1;const wt=new $e;let ct=null;const vt=new $e(0,0,0,0);return{setMask:function(Dt){ct!==Dt&&!k&&(r.colorMask(Dt,Dt,Dt,Dt),ct=Dt)},setLocked:function(Dt){k=Dt},setClear:function(Dt,Nt,te,Ye,ln){ln===!0&&(Dt*=Ye,Nt*=Ye,te*=Ye),wt.set(Dt,Nt,te,Ye),vt.equals(wt)===!1&&(r.clearColor(Dt,Nt,te,Ye),vt.copy(wt))},reset:function(){k=!1,ct=null,vt.set(-1,0,0,0)}}}function s(){let k=!1,wt=!1,ct=null,vt=null,Dt=null;return{setReversed:function(Nt){if(wt!==Nt){const te=e.get("EXT_clip_control");wt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Ye=Dt;Dt=null,this.setClear(Ye)}wt=Nt},getReversed:function(){return wt},setTest:function(Nt){Nt?St(r.DEPTH_TEST):kt(r.DEPTH_TEST)},setMask:function(Nt){ct!==Nt&&!k&&(r.depthMask(Nt),ct=Nt)},setFunc:function(Nt){if(wt&&(Nt=T1[Nt]),vt!==Nt){switch(Nt){case Nh:r.depthFunc(r.NEVER);break;case Oh:r.depthFunc(r.ALWAYS);break;case Ph:r.depthFunc(r.LESS);break;case Cr:r.depthFunc(r.LEQUAL);break;case zh:r.depthFunc(r.EQUAL);break;case Ih:r.depthFunc(r.GEQUAL);break;case Bh:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){Dt!==Nt&&(wt&&(Nt=1-Nt),r.clearDepth(Nt),Dt=Nt)},reset:function(){k=!1,ct=null,vt=null,Dt=null,wt=!1}}}function l(){let k=!1,wt=null,ct=null,vt=null,Dt=null,Nt=null,te=null,Ye=null,ln=null;return{setTest:function(Ee){k||(Ee?St(r.STENCIL_TEST):kt(r.STENCIL_TEST))},setMask:function(Ee){wt!==Ee&&!k&&(r.stencilMask(Ee),wt=Ee)},setFunc:function(Ee,vn,pi){(ct!==Ee||vt!==vn||Dt!==pi)&&(r.stencilFunc(Ee,vn,pi),ct=Ee,vt=vn,Dt=pi)},setOp:function(Ee,vn,pi){(Nt!==Ee||te!==vn||Ye!==pi)&&(r.stencilOp(Ee,vn,pi),Nt=Ee,te=vn,Ye=pi)},setLocked:function(Ee){k=Ee},setClear:function(Ee){ln!==Ee&&(r.clearStencil(Ee),ln=Ee)},reset:function(){k=!1,wt=null,ct=null,vt=null,Dt=null,Nt=null,te=null,Ye=null,ln=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},S=new WeakMap,M=[],b=null,C=!1,y=null,_=null,I=null,N=null,A=null,q=null,P=null,D=new De(0,0,0),V=0,U=!1,w=null,H=null,ut=null,st=null,gt=null;const _t=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=K>=2);let Mt=null,Tt={};const O=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),yt=new $e().fromArray(O),G=new $e().fromArray(tt);function ot(k,wt,ct,vt){const Dt=new Uint8Array(4),Nt=r.createTexture();r.bindTexture(k,Nt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<ct;te++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(wt+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return Nt}const Et={};Et[r.TEXTURE_2D]=ot(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[r.TEXTURE_2D_ARRAY]=ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),St(r.DEPTH_TEST),h.setFunc(Cr),oe(!1),pe(E_),St(r.CULL_FACE),X(Za);function St(k){v[k]!==!0&&(r.enable(k),v[k]=!0)}function kt(k){v[k]!==!1&&(r.disable(k),v[k]=!1)}function It(k,wt){return g[k]!==wt?(r.bindFramebuffer(k,wt),g[k]=wt,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=wt),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function Qt(k,wt){let ct=M,vt=!1;if(k){ct=S.get(wt),ct===void 0&&(ct=[],S.set(wt,ct));const Dt=k.textures;if(ct.length!==Dt.length||ct[0]!==r.COLOR_ATTACHMENT0){for(let Nt=0,te=Dt.length;Nt<te;Nt++)ct[Nt]=r.COLOR_ATTACHMENT0+Nt;ct.length=Dt.length,vt=!0}}else ct[0]!==r.BACK&&(ct[0]=r.BACK,vt=!0);vt&&r.drawBuffers(ct)}function de(k){return b!==k?(r.useProgram(k),b=k,!0):!1}const ue={[Es]:r.FUNC_ADD,[FS]:r.FUNC_SUBTRACT,[HS]:r.FUNC_REVERSE_SUBTRACT};ue[GS]=r.MIN,ue[VS]=r.MAX;const Ve={[kS]:r.ZERO,[XS]:r.ONE,[WS]:r.SRC_COLOR,[Uh]:r.SRC_ALPHA,[QS]:r.SRC_ALPHA_SATURATE,[ZS]:r.DST_COLOR,[qS]:r.DST_ALPHA,[YS]:r.ONE_MINUS_SRC_COLOR,[Lh]:r.ONE_MINUS_SRC_ALPHA,[KS]:r.ONE_MINUS_DST_COLOR,[jS]:r.ONE_MINUS_DST_ALPHA,[JS]:r.CONSTANT_COLOR,[$S]:r.ONE_MINUS_CONSTANT_COLOR,[ty]:r.CONSTANT_ALPHA,[ey]:r.ONE_MINUS_CONSTANT_ALPHA};function X(k,wt,ct,vt,Dt,Nt,te,Ye,ln,Ee){if(k===Za){C===!0&&(kt(r.BLEND),C=!1);return}if(C===!1&&(St(r.BLEND),C=!0),k!==BS){if(k!==y||Ee!==U){if((_!==Es||A!==Es)&&(r.blendEquation(r.FUNC_ADD),_=Es,A=Es),Ee)switch(k){case br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dh:r.blendFunc(r.ONE,r.ONE);break;case T_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case b_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case T_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case b_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}I=null,N=null,q=null,P=null,D.set(0,0,0),V=0,y=k,U=Ee}return}Dt=Dt||wt,Nt=Nt||ct,te=te||vt,(wt!==_||Dt!==A)&&(r.blendEquationSeparate(ue[wt],ue[Dt]),_=wt,A=Dt),(ct!==I||vt!==N||Nt!==q||te!==P)&&(r.blendFuncSeparate(Ve[ct],Ve[vt],Ve[Nt],Ve[te]),I=ct,N=vt,q=Nt,P=te),(Ye.equals(D)===!1||ln!==V)&&(r.blendColor(Ye.r,Ye.g,Ye.b,ln),D.copy(Ye),V=ln),y=k,U=!1}function on(k,wt){k.side===Pi?kt(r.CULL_FACE):St(r.CULL_FACE);let ct=k.side===On;wt&&(ct=!ct),oe(ct),k.blending===br&&k.transparent===!1?X(Za):X(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const vt=k.stencilWrite;d.setTest(vt),vt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ae(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):kt(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){w!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),w=k)}function pe(k){k!==PS?(St(r.CULL_FACE),k!==H&&(k===E_?r.cullFace(r.BACK):k===zS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):kt(r.CULL_FACE),H=k}function bt(k){k!==ut&&(z&&r.lineWidth(k),ut=k)}function ae(k,wt,ct){k?(St(r.POLYGON_OFFSET_FILL),(st!==wt||gt!==ct)&&(r.polygonOffset(wt,ct),st=wt,gt=ct)):kt(r.POLYGON_OFFSET_FILL)}function zt(k){k?St(r.SCISSOR_TEST):kt(r.SCISSOR_TEST)}function L(k){k===void 0&&(k=r.TEXTURE0+_t-1),Mt!==k&&(r.activeTexture(k),Mt=k)}function E(k,wt,ct){ct===void 0&&(Mt===null?ct=r.TEXTURE0+_t-1:ct=Mt);let vt=Tt[ct];vt===void 0&&(vt={type:void 0,texture:void 0},Tt[ct]=vt),(vt.type!==k||vt.texture!==wt)&&(Mt!==ct&&(r.activeTexture(ct),Mt=ct),r.bindTexture(k,wt||Et[k]),vt.type=k,vt.texture=wt)}function Q(){const k=Tt[Mt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function lt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(k){yt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Pt(k){G.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),G.copy(k))}function $t(k,wt){let ct=p.get(wt);ct===void 0&&(ct=new WeakMap,p.set(wt,ct));let vt=ct.get(k);vt===void 0&&(vt=r.getUniformBlockIndex(wt,k.name),ct.set(k,vt))}function se(k,wt){const vt=p.get(wt).get(k);m.get(wt)!==vt&&(r.uniformBlockBinding(wt,vt,k.__bindingPointIndex),m.set(wt,vt))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Mt=null,Tt={},g={},S=new WeakMap,M=[],b=null,C=!1,y=null,_=null,I=null,N=null,A=null,q=null,P=null,D=new De(0,0,0),V=0,U=!1,w=null,H=null,ut=null,st=null,gt=null,yt.set(0,0,r.canvas.width,r.canvas.height),G.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:St,disable:kt,bindFramebuffer:It,drawBuffers:Qt,useProgram:de,setBlending:X,setMaterial:on,setFlipSided:oe,setCullFace:pe,setLineWidth:bt,setPolygonOffset:ae,setScissorTest:zt,activeTexture:L,bindTexture:E,unbindTexture:Q,compressedTexImage2D:lt,compressedTexImage3D:dt,texImage2D:Ht,texImage3D:Zt,updateUBOMapping:$t,uniformBlockBinding:se,texStorage2D:_e,texStorage3D:Rt,texSubImage2D:ft,texSubImage3D:Ft,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Bt,scissor:qt,viewport:Pt,reset:Oe}}function x0(r,e,i,s){const l=A1(s);switch(i){case V0:return r*e;case X0:return r*e;case W0:return r*e*2;case Y0:return r*e/l.components*l.byteLength;case Ed:return r*e/l.components*l.byteLength;case q0:return r*e*2/l.components*l.byteLength;case Td:return r*e*2/l.components*l.byteLength;case k0:return r*e*3/l.components*l.byteLength;case Ei:return r*e*4/l.components*l.byteLength;case bd:return r*e*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wc:case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xh:case Yh:return Math.max(r,16)*Math.max(e,8)/4;case kh:case Wh:return Math.max(r,8)*Math.max(e,8)/2;case qh:case jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case id:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Uc:case ud:case fd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case j0:case hd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case dd:case pd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function A1(r){switch(r){case pa:case F0:return{byteLength:1,components:1};case Fo:case H0:case Go:return{byteLength:2,components:1};case yd:case Md:return{byteLength:2,components:4};case As:case Sd:case fa:return{byteLength:4,components:1};case G0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function R1(r,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,v=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Ho("canvas")}function C(L,E,Q){let lt=1;const dt=zt(L);if((dt.width>Q||dt.height>Q)&&(lt=Q/Math.max(dt.width,dt.height)),lt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(lt*dt.width),Ft=Math.floor(lt*dt.height);g===void 0&&(g=b(ft,Ft));const Ct=E?b(ft,Ft):g;return Ct.width=ft,Ct.height=Ft,Ct.getContext("2d").drawImage(L,0,0,ft,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ft+"x"+Ft+")."),Ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(L,E,Q,lt,dt=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=E;if(E===r.RED&&(Q===r.FLOAT&&(ft=r.R32F),Q===r.HALF_FLOAT&&(ft=r.R16F),Q===r.UNSIGNED_BYTE&&(ft=r.R8)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ft=r.R8UI),Q===r.UNSIGNED_SHORT&&(ft=r.R16UI),Q===r.UNSIGNED_INT&&(ft=r.R32UI),Q===r.BYTE&&(ft=r.R8I),Q===r.SHORT&&(ft=r.R16I),Q===r.INT&&(ft=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(ft=r.RG32F),Q===r.HALF_FLOAT&&(ft=r.RG16F),Q===r.UNSIGNED_BYTE&&(ft=r.RG8)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ft=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ft=r.RG16UI),Q===r.UNSIGNED_INT&&(ft=r.RG32UI),Q===r.BYTE&&(ft=r.RG8I),Q===r.SHORT&&(ft=r.RG16I),Q===r.INT&&(ft=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),Q===r.UNSIGNED_INT&&(ft=r.RGB32UI),Q===r.BYTE&&(ft=r.RGB8I),Q===r.SHORT&&(ft=r.RGB16I),Q===r.INT&&(ft=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ft=r.RGBA32UI),Q===r.BYTE&&(ft=r.RGBA8I),Q===r.SHORT&&(ft=r.RGBA16I),Q===r.INT&&(ft=r.RGBA32I)),E===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),E===r.RGBA){const Ft=dt?zc:Te.getTransfer(lt);Q===r.FLOAT&&(ft=r.RGBA32F),Q===r.HALF_FLOAT&&(ft=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ft=Ft===Fe?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function A(L,E){let Q;return L?E===null||E===As||E===Lr?Q=r.DEPTH24_STENCIL8:E===fa?Q=r.DEPTH32F_STENCIL8:E===Fo&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===As||E===Lr?Q=r.DEPTH_COMPONENT24:E===fa?Q=r.DEPTH_COMPONENT32F:E===Fo&&(Q=r.DEPTH_COMPONENT16),Q}function q(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==bi&&L.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function P(L){const E=L.target;E.removeEventListener("dispose",P),V(E),E.isVideoTexture&&v.delete(E)}function D(L){const E=L.target;E.removeEventListener("dispose",D),w(E)}function V(L){const E=s.get(L);if(E.__webglInit===void 0)return;const Q=L.source,lt=S.get(Q);if(lt){const dt=lt[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&U(L),Object.keys(lt).length===0&&S.delete(Q)}s.remove(L)}function U(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const Q=L.source,lt=S.get(Q);delete lt[E.__cacheKey],h.memory.textures--}function w(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let dt=0;dt<E.__webglFramebuffer[lt].length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[lt][dt]);else r.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)r.deleteFramebuffer(E.__webglFramebuffer[lt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=L.textures;for(let lt=0,dt=Q.length;lt<dt;lt++){const ft=s.get(Q[lt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove(Q[lt])}s.remove(L)}let H=0;function ut(){H=0}function st(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function gt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function _t(L,E){const Q=s.get(L);if(L.isVideoTexture&&bt(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const lt=L.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(Q,L,E);return}}i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function z(L,E){const Q=s.get(L);if(L.version>0&&Q.__version!==L.version){G(Q,L,E);return}i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function K(L,E){const Q=s.get(L);if(L.version>0&&Q.__version!==L.version){G(Q,L,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function Z(L,E){const Q=s.get(L);if(L.version>0&&Q.__version!==L.version){ot(Q,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const Mt={[Ur]:r.REPEAT,[Ii]:r.CLAMP_TO_EDGE,[Vh]:r.MIRRORED_REPEAT},Tt={[bi]:r.NEAREST,[fy]:r.NEAREST_MIPMAP_NEAREST,[nc]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Jf]:r.LINEAR_MIPMAP_NEAREST,[bs]:r.LINEAR_MIPMAP_LINEAR},O={[gy]:r.NEVER,[My]:r.ALWAYS,[_y]:r.LESS,[Z0]:r.LEQUAL,[vy]:r.EQUAL,[yy]:r.GEQUAL,[xy]:r.GREATER,[Sy]:r.NOTEQUAL};function tt(L,E){if(E.type===fa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===Jf||E.magFilter===nc||E.magFilter===bs||E.minFilter===Dn||E.minFilter===Jf||E.minFilter===nc||E.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Mt[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Mt[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Mt[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Tt[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Tt[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bi||E.minFilter!==nc&&E.minFilter!==bs||E.type===fa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(L,E){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P));const lt=E.source;let dt=S.get(lt);dt===void 0&&(dt={},S.set(lt,dt));const ft=gt(E);if(ft!==L.__cacheKey){dt[ft]===void 0&&(dt[ft]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),dt[ft].usedTimes++;const Ft=dt[L.__cacheKey];Ft!==void 0&&(dt[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&U(E)),L.__cacheKey=ft,L.__webglTexture=dt[ft].texture}return Q}function G(L,E,Q){let lt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=r.TEXTURE_3D);const dt=yt(L,E),ft=E.source;i.bindTexture(lt,L.__webglTexture,r.TEXTURE0+Q);const Ft=s.get(ft);if(ft.version!==Ft.__version||dt===!0){i.activeTexture(r.TEXTURE0+Q);const Ct=Te.getPrimaries(Te.workingColorSpace),Bt=E.colorSpace===ja?null:Te.getPrimaries(E.colorSpace),_e=E.colorSpace===ja||Ct===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Rt=C(E.image,!1,l.maxTextureSize);Rt=ae(E,Rt);const Ht=u.convert(E.format,E.colorSpace),Zt=u.convert(E.type);let qt=N(E.internalFormat,Ht,Zt,E.colorSpace,E.isVideoTexture);tt(lt,E);let Pt;const $t=E.mipmaps,se=E.isVideoTexture!==!0,Oe=Ft.__version===void 0||dt===!0,k=ft.dataReady,wt=q(E,Rt);if(E.isDepthTexture)qt=A(E.format===Nr,E.type),Oe&&(se?i.texStorage2D(r.TEXTURE_2D,1,qt,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,qt,Rt.width,Rt.height,0,Ht,Zt,null));else if(E.isDataTexture)if($t.length>0){se&&Oe&&i.texStorage2D(r.TEXTURE_2D,wt,qt,$t[0].width,$t[0].height);for(let ct=0,vt=$t.length;ct<vt;ct++)Pt=$t[ct],se?k&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,Ht,Zt,Pt.data):i.texImage2D(r.TEXTURE_2D,ct,qt,Pt.width,Pt.height,0,Ht,Zt,Pt.data);E.generateMipmaps=!1}else se?(Oe&&i.texStorage2D(r.TEXTURE_2D,wt,qt,Rt.width,Rt.height),k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Ht,Zt,Rt.data)):i.texImage2D(r.TEXTURE_2D,0,qt,Rt.width,Rt.height,0,Ht,Zt,Rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&Oe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,wt,qt,$t[0].width,$t[0].height,Rt.depth);for(let ct=0,vt=$t.length;ct<vt;ct++)if(Pt=$t[ct],E.format!==Ei)if(Ht!==null)if(se){if(k)if(E.layerUpdates.size>0){const Dt=x0(Pt.width,Pt.height,E.format,E.type);for(const Nt of E.layerUpdates){const te=Pt.data.subarray(Nt*Dt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*Dt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,Nt,Pt.width,Pt.height,1,Ht,te)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Pt.width,Pt.height,Rt.depth,Ht,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,qt,Pt.width,Pt.height,Rt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Pt.width,Pt.height,Rt.depth,Ht,Zt,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ct,qt,Pt.width,Pt.height,Rt.depth,0,Ht,Zt,Pt.data)}else{se&&Oe&&i.texStorage2D(r.TEXTURE_2D,wt,qt,$t[0].width,$t[0].height);for(let ct=0,vt=$t.length;ct<vt;ct++)Pt=$t[ct],E.format!==Ei?Ht!==null?se?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,Ht,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,ct,qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?k&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,Ht,Zt,Pt.data):i.texImage2D(r.TEXTURE_2D,ct,qt,Pt.width,Pt.height,0,Ht,Zt,Pt.data)}else if(E.isDataArrayTexture)if(se){if(Oe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,wt,qt,Rt.width,Rt.height,Rt.depth),k)if(E.layerUpdates.size>0){const ct=x0(Rt.width,Rt.height,E.format,E.type);for(const vt of E.layerUpdates){const Dt=Rt.data.subarray(vt*ct/Rt.data.BYTES_PER_ELEMENT,(vt+1)*ct/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Rt.width,Rt.height,1,Ht,Zt,Dt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Zt,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,qt,Rt.width,Rt.height,Rt.depth,0,Ht,Zt,Rt.data);else if(E.isData3DTexture)se?(Oe&&i.texStorage3D(r.TEXTURE_3D,wt,qt,Rt.width,Rt.height,Rt.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Zt,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,qt,Rt.width,Rt.height,Rt.depth,0,Ht,Zt,Rt.data);else if(E.isFramebufferTexture){if(Oe)if(se)i.texStorage2D(r.TEXTURE_2D,wt,qt,Rt.width,Rt.height);else{let ct=Rt.width,vt=Rt.height;for(let Dt=0;Dt<wt;Dt++)i.texImage2D(r.TEXTURE_2D,Dt,qt,ct,vt,0,Ht,Zt,null),ct>>=1,vt>>=1}}else if($t.length>0){if(se&&Oe){const ct=zt($t[0]);i.texStorage2D(r.TEXTURE_2D,wt,qt,ct.width,ct.height)}for(let ct=0,vt=$t.length;ct<vt;ct++)Pt=$t[ct],se?k&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Ht,Zt,Pt):i.texImage2D(r.TEXTURE_2D,ct,qt,Ht,Zt,Pt);E.generateMipmaps=!1}else if(se){if(Oe){const ct=zt(Rt);i.texStorage2D(r.TEXTURE_2D,wt,qt,ct.width,ct.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ht,Zt,Rt)}else i.texImage2D(r.TEXTURE_2D,0,qt,Ht,Zt,Rt);y(E)&&_(lt),Ft.__version=ft.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ot(L,E,Q){if(E.image.length!==6)return;const lt=yt(L,E),dt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Q);const ft=s.get(dt);if(dt.version!==ft.__version||lt===!0){i.activeTexture(r.TEXTURE0+Q);const Ft=Te.getPrimaries(Te.workingColorSpace),Ct=E.colorSpace===ja?null:Te.getPrimaries(E.colorSpace),Bt=E.colorSpace===ja||Ft===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,Ht=[];for(let vt=0;vt<6;vt++)!_e&&!Rt?Ht[vt]=C(E.image[vt],!0,l.maxCubemapSize):Ht[vt]=Rt?E.image[vt].image:E.image[vt],Ht[vt]=ae(E,Ht[vt]);const Zt=Ht[0],qt=u.convert(E.format,E.colorSpace),Pt=u.convert(E.type),$t=N(E.internalFormat,qt,Pt,E.colorSpace),se=E.isVideoTexture!==!0,Oe=ft.__version===void 0||lt===!0,k=dt.dataReady;let wt=q(E,Zt);tt(r.TEXTURE_CUBE_MAP,E);let ct;if(_e){se&&Oe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,wt,$t,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){ct=Ht[vt].mipmaps;for(let Dt=0;Dt<ct.length;Dt++){const Nt=ct[Dt];E.format!==Ei?qt!==null?se?k&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Nt.width,Nt.height,qt,Nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,$t,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Nt.width,Nt.height,qt,Pt,Nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,$t,Nt.width,Nt.height,0,qt,Pt,Nt.data)}}}else{if(ct=E.mipmaps,se&&Oe){ct.length>0&&wt++;const vt=zt(Ht[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,wt,$t,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Rt){se?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ht[vt].width,Ht[vt].height,qt,Pt,Ht[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,$t,Ht[vt].width,Ht[vt].height,0,qt,Pt,Ht[vt].data);for(let Dt=0;Dt<ct.length;Dt++){const te=ct[Dt].image[vt].image;se?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,te.width,te.height,qt,Pt,te.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,$t,te.width,te.height,0,qt,Pt,te.data)}}else{se?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,qt,Pt,Ht[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,$t,qt,Pt,Ht[vt]);for(let Dt=0;Dt<ct.length;Dt++){const Nt=ct[Dt];se?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,qt,Pt,Nt.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,$t,qt,Pt,Nt.image[vt])}}}y(E)&&_(r.TEXTURE_CUBE_MAP),ft.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Et(L,E,Q,lt,dt,ft){const Ft=u.convert(Q.format,Q.colorSpace),Ct=u.convert(Q.type),Bt=N(Q.internalFormat,Ft,Ct,Q.colorSpace),_e=s.get(E),Rt=s.get(Q);if(Rt.__renderTarget=E,!_e.__hasExternalTextures){const Ht=Math.max(1,E.width>>ft),Zt=Math.max(1,E.height>>ft);dt===r.TEXTURE_3D||dt===r.TEXTURE_2D_ARRAY?i.texImage3D(dt,ft,Bt,Ht,Zt,E.depth,0,Ft,Ct,null):i.texImage2D(dt,ft,Bt,Ht,Zt,0,Ft,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),pe(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,dt,Rt.__webglTexture,0,oe(E)):(dt===r.TEXTURE_2D||dt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,dt,Rt.__webglTexture,ft),i.bindFramebuffer(r.FRAMEBUFFER,null)}function St(L,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const lt=E.depthTexture,dt=lt&&lt.isDepthTexture?lt.type:null,ft=A(E.stencilBuffer,dt),Ft=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=oe(E);pe(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,ft,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,ft,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ft,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ft,r.RENDERBUFFER,L)}else{const lt=E.textures;for(let dt=0;dt<lt.length;dt++){const ft=lt[dt],Ft=u.convert(ft.format,ft.colorSpace),Ct=u.convert(ft.type),Bt=N(ft.internalFormat,Ft,Ct,ft.colorSpace),_e=oe(E);Q&&pe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,Bt,E.width,E.height):pe(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,Bt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=s.get(E.depthTexture);lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_t(E.depthTexture,0);const dt=lt.__webglTexture,ft=oe(E);if(E.depthTexture.format===Ar)pe(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Nr)pe(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function It(L){const E=s.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const lt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",dt)};lt.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=lt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");kt(E.__webglFramebuffer,L)}else if(Q){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=r.createRenderbuffer(),St(E.__webglDepthbuffer[lt],L,!1);else{const dt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[lt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,ft)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),St(E.__webglDepthbuffer,L,!1);else{const lt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,lt,r.RENDERBUFFER,dt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(L,E,Q){const lt=s.get(L);E!==void 0&&Et(lt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&It(L)}function de(L){const E=L.texture,Q=s.get(L),lt=s.get(E);L.addEventListener("dispose",D);const dt=L.textures,ft=L.isWebGLCubeRenderTarget===!0,Ft=dt.length>1;if(Ft||(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=E.version,h.memory.textures++),ft){Q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ct]=[];for(let Bt=0;Bt<E.mipmaps.length;Bt++)Q.__webglFramebuffer[Ct][Bt]=r.createFramebuffer()}else Q.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)Q.__webglFramebuffer[Ct]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ft)for(let Ct=0,Bt=dt.length;Ct<Bt;Ct++){const _e=s.get(dt[Ct]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&pe(L)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<dt.length;Ct++){const Bt=dt[Ct];Q.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ct]);const _e=u.convert(Bt.format,Bt.colorSpace),Rt=u.convert(Bt.type),Ht=N(Bt.internalFormat,_e,Rt,Bt.colorSpace,L.isXRRenderTarget===!0),Zt=oe(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Ht,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),St(Q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){i.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),tt(r.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)Et(Q.__webglFramebuffer[Ct][Bt],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Bt);else Et(Q.__webglFramebuffer[Ct],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Ct=0,Bt=dt.length;Ct<Bt;Ct++){const _e=dt[Ct],Rt=s.get(_e);i.bindTexture(r.TEXTURE_2D,Rt.__webglTexture),tt(r.TEXTURE_2D,_e),Et(Q.__webglFramebuffer,L,_e,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,0),y(_e)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,lt.__webglTexture),tt(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)Et(Q.__webglFramebuffer[Bt],L,E,r.COLOR_ATTACHMENT0,Ct,Bt);else Et(Q.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,Ct,0);y(E)&&_(Ct),i.unbindTexture()}L.depthBuffer&&It(L)}function ue(L){const E=L.textures;for(let Q=0,lt=E.length;Q<lt;Q++){const dt=E[Q];if(y(dt)){const ft=I(L),Ft=s.get(dt).__webglTexture;i.bindTexture(ft,Ft),_(ft),i.unbindTexture()}}}const Ve=[],X=[];function on(L){if(L.samples>0){if(pe(L)===!1){const E=L.textures,Q=L.width,lt=L.height;let dt=r.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=s.get(L),Ct=E.length>1;if(Ct)for(let Bt=0;Bt<E.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[Bt]);const _e=s.get(E[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,Q,lt,0,0,Q,lt,dt,r.NEAREST),m===!0&&(Ve.length=0,X.length=0,Ve.push(r.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ve.push(ft),X.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,X)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ve))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let Bt=0;Bt<E.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[Bt]);const _e=s.get(E[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,_e,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function oe(L){return Math.min(l.maxSamples,L.samples)}function pe(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function bt(L){const E=h.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function ae(L,E){const Q=L.colorSpace,lt=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==Pr&&Q!==ja&&(Te.getTransfer(Q)===Fe?(lt!==Ei||dt!==pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}function zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=ut,this.setTexture2D=_t,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=Qt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=pe}function C1(r,e){function i(s,l=ja){let u;const h=Te.getTransfer(l);if(s===pa)return r.UNSIGNED_BYTE;if(s===yd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Md)return r.UNSIGNED_SHORT_5_5_5_1;if(s===G0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===F0)return r.BYTE;if(s===H0)return r.SHORT;if(s===Fo)return r.UNSIGNED_SHORT;if(s===Sd)return r.INT;if(s===As)return r.UNSIGNED_INT;if(s===fa)return r.FLOAT;if(s===Go)return r.HALF_FLOAT;if(s===V0)return r.ALPHA;if(s===k0)return r.RGB;if(s===Ei)return r.RGBA;if(s===X0)return r.LUMINANCE;if(s===W0)return r.LUMINANCE_ALPHA;if(s===Ar)return r.DEPTH_COMPONENT;if(s===Nr)return r.DEPTH_STENCIL;if(s===Y0)return r.RED;if(s===Ed)return r.RED_INTEGER;if(s===q0)return r.RG;if(s===Td)return r.RG_INTEGER;if(s===bd)return r.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kh||s===Xh||s===Wh||s===Yh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===kh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qh||s===jh||s===Zh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===qh||s===jh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===ud||s===fd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Uc)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ud)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===j0||s===hd||s===dd||s===pd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===hd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class w1 extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ec extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D1={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),_=this._getHandJoint(p,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=v.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(D1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ec;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const U1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L1=`
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

}`;class N1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ri({vertexShader:U1,fragmentShader:L1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ti(new Yo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O1 extends ws{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,S=null,M=null,b=null;const C=new N1,y=i.getContextAttributes();let _=null,I=null;const N=[],A=[],q=new he;let P=null;const D=new di;D.viewport=new $e;const V=new di;V.viewport=new $e;const U=[D,V],w=new w1;let H=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ot=N[G];return ot===void 0&&(ot=new Ah,N[G]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(G){let ot=N[G];return ot===void 0&&(ot=new Ah,N[G]=ot),ot.getGripSpace()},this.getHand=function(G){let ot=N[G];return ot===void 0&&(ot=new Ah,N[G]=ot),ot.getHandSpace()};function st(G){const ot=A.indexOf(G.inputSource);if(ot===-1)return;const Et=N[ot];Et!==void 0&&(Et.update(G.inputSource,G.frame,p||h),Et.dispatchEvent({type:G.type,data:G.inputSource}))}function gt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",_t);for(let G=0;G<N.length;G++){const ot=A[G];ot!==null&&(A[G]=null,N[G].disconnect(ot))}H=null,ut=null,C.reset(),e.setRenderTarget(_),M=null,S=null,g=null,l=null,I=null,yt.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(q.width,q.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){u=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){d=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(G){p=G},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",_t),y.xrCompatible!==!0&&await i.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(q),l.renderState.layers===void 0){const ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ot),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Rs(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:pa,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ot=null,Et=null,St=null;y.depth&&(St=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ot=y.stencil?Nr:Ar,Et=y.stencil?Lr:As);const kt={colorFormat:i.RGBA8,depthFormat:St,scaleFactor:u};g=new XRWebGLBinding(l,i),S=g.createProjectionLayer(kt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),I=new Rs(S.textureWidth,S.textureHeight,{format:Ei,type:pa,depthTexture:new cv(S.textureWidth,S.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function _t(G){for(let ot=0;ot<G.removed.length;ot++){const Et=G.removed[ot],St=A.indexOf(Et);St>=0&&(A[St]=null,N[St].disconnect(Et))}for(let ot=0;ot<G.added.length;ot++){const Et=G.added[ot];let St=A.indexOf(Et);if(St===-1){for(let It=0;It<N.length;It++)if(It>=A.length){A.push(Et),St=It;break}else if(A[It]===null){A[It]=Et,St=It;break}if(St===-1)break}const kt=N[St];kt&&kt.connect(Et)}}const z=new nt,K=new nt;function Z(G,ot,Et){z.setFromMatrixPosition(ot.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const St=z.distanceTo(K),kt=ot.projectionMatrix.elements,It=Et.projectionMatrix.elements,Qt=kt[14]/(kt[10]-1),de=kt[14]/(kt[10]+1),ue=(kt[9]+1)/kt[5],Ve=(kt[9]-1)/kt[5],X=(kt[8]-1)/kt[0],on=(It[8]+1)/It[0],oe=Qt*X,pe=Qt*on,bt=St/(-X+on),ae=bt*-X;if(ot.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ae),G.translateZ(bt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),kt[10]===-1)G.projectionMatrix.copy(ot.projectionMatrix),G.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const zt=Qt+bt,L=de+bt,E=oe-ae,Q=pe+(St-ae),lt=ue*de/L*zt,dt=Ve*de/L*zt;G.projectionMatrix.makePerspective(E,Q,lt,dt,zt,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Mt(G,ot){ot===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ot.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;let ot=G.near,Et=G.far;C.texture!==null&&(C.depthNear>0&&(ot=C.depthNear),C.depthFar>0&&(Et=C.depthFar)),w.near=V.near=D.near=ot,w.far=V.far=D.far=Et,(H!==w.near||ut!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,ut=w.far),D.layers.mask=G.layers.mask|2,V.layers.mask=G.layers.mask|4,w.layers.mask=D.layers.mask|V.layers.mask;const St=G.parent,kt=w.cameras;Mt(w,St);for(let It=0;It<kt.length;It++)Mt(kt[It],St);kt.length===2?Z(w,D,V):w.projectionMatrix.copy(D.projectionMatrix),Tt(G,w,St)};function Tt(G,ot,Et){Et===null?G.matrix.copy(ot.matrixWorld):(G.matrix.copy(Et.matrixWorld),G.matrix.invert(),G.matrix.multiply(ot.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ot.projectionMatrix),G.projectionMatrixInverse.copy(ot.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=md*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(G){m=G,S!==null&&(S.fixedFoveation=G),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=G)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(w)};let O=null;function tt(G,ot){if(v=ot.getViewerPose(p||h),b=ot,v!==null){const Et=v.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let St=!1;Et.length!==w.cameras.length&&(w.cameras.length=0,St=!0);for(let It=0;It<Et.length;It++){const Qt=Et[It];let de=null;if(M!==null)de=M.getViewport(Qt);else{const Ve=g.getViewSubImage(S,Qt);de=Ve.viewport,It===0&&(e.setRenderTargetTextures(I,Ve.colorTexture,S.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(I))}let ue=U[It];ue===void 0&&(ue=new di,ue.layers.enable(It),ue.viewport=new $e,U[It]=ue),ue.matrix.fromArray(Qt.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Qt.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(de.x,de.y,de.width,de.height),It===0&&(w.matrix.copy(ue.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),St===!0&&w.cameras.push(ue)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const It=g.getDepthInformation(Et[0]);It&&It.isValid&&It.texture&&C.init(e,It,l.renderState)}}for(let Et=0;Et<N.length;Et++){const St=A[Et],kt=N[Et];St!==null&&kt!==void 0&&kt.update(St,ot,p||h)}O&&O(G,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),b=null}const yt=new lv;yt.setAnimationLoop(tt),this.setAnimationLoop=function(G){O=G},this.dispose=function(){}}}const ys=new ma,P1=new tn;function z1(r,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,av(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,I,N,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),g(y,_)):_.isMeshPhongMaterial?(u(y,_),v(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,A)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),C(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,I,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===On&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===On&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),N=I.envMap,A=I.envMapRotation;N&&(y.envMap.value=N,ys.copy(A),ys.x*=-1,ys.y*=-1,ys.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),y.envMapRotation.value.setFromMatrix4(P1.makeRotationFromEuler(ys)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,I,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function I1(r,e,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,N){const A=N.program;s.uniformBlockBinding(I,A)}function p(I,N){let A=l[I.id];A===void 0&&(b(I),A=v(I),l[I.id]=A,I.addEventListener("dispose",y));const q=N.program;s.updateUBOMapping(I,q);const P=e.render.frame;u[I.id]!==P&&(S(I),u[I.id]=P)}function v(I){const N=g();I.__bindingPointIndex=N;const A=r.createBuffer(),q=I.__size,P=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,q,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,A),A}function g(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const N=l[I.id],A=I.uniforms,q=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let P=0,D=A.length;P<D;P++){const V=Array.isArray(A[P])?A[P]:[A[P]];for(let U=0,w=V.length;U<w;U++){const H=V[U];if(M(H,P,U,q)===!0){const ut=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let gt=0;for(let _t=0;_t<st.length;_t++){const z=st[_t],K=C(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,ut+gt,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,gt),gt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ut,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(I,N,A,q){const P=I.value,D=N+"_"+A;if(q[D]===void 0)return typeof P=="number"||typeof P=="boolean"?q[D]=P:q[D]=P.clone(),!0;{const V=q[D];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return q[D]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function b(I){const N=I.uniforms;let A=0;const q=16;for(let D=0,V=N.length;D<V;D++){const U=Array.isArray(N[D])?N[D]:[N[D]];for(let w=0,H=U.length;w<H;w++){const ut=U[w],st=Array.isArray(ut.value)?ut.value:[ut.value];for(let gt=0,_t=st.length;gt<_t;gt++){const z=st[gt],K=C(z),Z=A%q,Mt=Z%K.boundary,Tt=Z+Mt;A+=Mt,Tt!==0&&q-Tt<K.storage&&(A+=q-Tt),ut.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=A,A+=K.storage}}}const P=A%q;return P>0&&(A+=q-P),I.__size=A,I.__cache={},this}function C(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function y(I){const N=I.target;N.removeEventListener("dispose",y);const A=h.indexOf(N.__bindingPointIndex);h.splice(A,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const I in l)r.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class B1{constructor(e={}){const{canvas:i=by(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const I=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=Ka,this.toneMappingExposure=1;const A=this;let q=!1,P=0,D=0,V=null,U=-1,w=null;const H=new $e,ut=new $e;let st=null;const gt=new De(0);let _t=0,z=i.width,K=i.height,Z=1,Mt=null,Tt=null;const O=new $e(0,0,z,K),tt=new $e(0,0,z,K);let yt=!1;const G=new ov;let ot=!1,Et=!1;const St=new tn,kt=new tn,It=new nt,Qt=new $e,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Ve(){return V===null?Z:1}let X=s;function on(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xd}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),X===null){const W="webgl2";if(X=on(W,R),X===null)throw on(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,pe,bt,ae,zt,L,E,Q,lt,dt,ft,Ft,Ct,Bt,_e,Rt,Ht,Zt,qt,Pt,$t,se,Oe,k;function wt(){oe=new kT(X),oe.init(),se=new C1(X,oe),pe=new zT(X,oe,e,se),bt=new b1(X,oe),pe.reverseDepthBuffer&&S&&bt.buffers.depth.setReversed(!0),ae=new YT(X),zt=new u1,L=new R1(X,oe,bt,zt,pe,se,ae),E=new BT(A),Q=new VT(A),lt=new Jy(X),Oe=new OT(X,lt),dt=new XT(X,lt,ae,Oe),ft=new jT(X,dt,lt,ae),qt=new qT(X,pe,L),Rt=new IT(zt),Ft=new c1(A,E,Q,oe,pe,Oe,Rt),Ct=new z1(A,zt),Bt=new h1,_e=new v1(oe),Zt=new NT(A,E,Q,bt,ft,M,m),Ht=new E1(A,ft,pe),k=new I1(X,ae,pe,bt),Pt=new PT(X,oe,ae),$t=new WT(X,oe,ae),ae.programs=Ft.programs,A.capabilities=pe,A.extensions=oe,A.properties=zt,A.renderLists=Bt,A.shadowMap=Ht,A.state=bt,A.info=ae}wt();const ct=new O1(A,X);this.xr=ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,W,at=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=W,i.width=Math.floor(R*Z),i.height=Math.floor(W*Z),at===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(z*Z,K*Z).floor()},this.setDrawingBufferSize=function(R,W,at){z=R,K=W,Z=at,i.width=Math.floor(R*at),i.height=Math.floor(W*at),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,W,at,it){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,W,at,it),bt.viewport(H.copy(O).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(tt)},this.setScissor=function(R,W,at,it){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,W,at,it),bt.scissor(ut.copy(tt).multiplyScalar(Z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){bt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){Tt=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(R=!0,W=!0,at=!0){let it=0;if(R){let Y=!1;if(V!==null){const At=V.texture.format;Y=At===bd||At===Td||At===Ed}if(Y){const At=V.texture.type,Ut=At===pa||At===As||At===Fo||At===Lr||At===yd||At===Md,Lt=Zt.getClearColor(),Xt=Zt.getClearAlpha(),ee=Lt.r,Jt=Lt.g,Gt=Lt.b;Ut?(b[0]=ee,b[1]=Jt,b[2]=Gt,b[3]=Xt,X.clearBufferuiv(X.COLOR,0,b)):(C[0]=ee,C[1]=Jt,C[2]=Gt,C[3]=Xt,X.clearBufferiv(X.COLOR,0,C))}else it|=X.COLOR_BUFFER_BIT}W&&(it|=X.DEPTH_BUFFER_BIT),at&&(it|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Bt.dispose(),_e.dispose(),zt.dispose(),E.dispose(),Q.dispose(),ft.dispose(),Oe.dispose(),k.dispose(),Ft.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Ir),ct.removeEventListener("sessionend",Br),Ci.stop()};function vt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const R=ae.autoReset,W=Ht.enabled,at=Ht.autoUpdate,it=Ht.needsUpdate,Y=Ht.type;wt(),ae.autoReset=R,Ht.enabled=W,Ht.autoUpdate=at,Ht.needsUpdate=it,Ht.type=Y}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function te(R){const W=R.target;W.removeEventListener("dispose",te),Ye(W)}function Ye(R){ln(R),zt.remove(R)}function ln(R){const W=zt.get(R).programs;W!==void 0&&(W.forEach(function(at){Ft.releaseProgram(at)}),R.isShaderMaterial&&Ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,at,it,Y,At){W===null&&(W=de);const Ut=Y.isMesh&&Y.matrixWorld.determinant()<0,Lt=Hr(R,W,at,it,Y);bt.setMaterial(it,Ut);let Xt=at.index,ee=1;if(it.wireframe===!0){if(Xt=dt.getWireframeAttribute(at),Xt===void 0)return;ee=2}const Jt=at.drawRange,Gt=at.attributes.position;let Me=Jt.start*ee,Ue=(Jt.start+Jt.count)*ee;At!==null&&(Me=Math.max(Me,At.start*ee),Ue=Math.min(Ue,(At.start+At.count)*ee)),Xt!==null?(Me=Math.max(Me,0),Ue=Math.min(Ue,Xt.count)):Gt!=null&&(Me=Math.max(Me,0),Ue=Math.min(Ue,Gt.count));const Pe=Ue-Me;if(Pe<0||Pe===1/0)return;Oe.setup(Y,it,Lt,at,Xt);let bn,Se=Pt;if(Xt!==null&&(bn=lt.get(Xt),Se=$t,Se.setIndex(bn)),Y.isMesh)it.wireframe===!0?(bt.setLineWidth(it.wireframeLinewidth*Ve()),Se.setMode(X.LINES)):Se.setMode(X.TRIANGLES);else if(Y.isLine){let Wt=it.linewidth;Wt===void 0&&(Wt=1),bt.setLineWidth(Wt*Ve()),Y.isLineSegments?Se.setMode(X.LINES):Y.isLineLoop?Se.setMode(X.LINE_LOOP):Se.setMode(X.LINE_STRIP)}else Y.isPoints?Se.setMode(X.POINTS):Y.isSprite&&Se.setMode(X.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Se.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Se.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Wt=Y._multiDrawStarts,cn=Y._multiDrawCounts,ie=Y._multiDrawCount,Pn=Xt?lt.get(Xt).bytesPerElement:1,ga=zt.get(it).currentProgram.getUniforms();for(let Sn=0;Sn<ie;Sn++)ga.setValue(X,"_gl_DrawID",Sn),Se.render(Wt[Sn]/Pn,cn[Sn])}else if(Y.isInstancedMesh)Se.renderInstances(Me,Pe,Y.count);else if(at.isInstancedBufferGeometry){const Wt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,cn=Math.min(at.instanceCount,Wt);Se.renderInstances(Me,Pe,cn)}else Se.render(Me,Pe)};function Ee(R,W,at){R.transparent===!0&&R.side===Pi&&R.forceSinglePass===!1?(R.side=On,R.needsUpdate=!0,je(R,W,at),R.side=Qa,R.needsUpdate=!0,je(R,W,at),R.side=Pi):je(R,W,at)}this.compile=function(R,W,at=null){at===null&&(at=R),_=_e.get(at),_.init(W),N.push(_),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),R!==at&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const it=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const At=Y.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Lt=At[Ut];Ee(Lt,at,Y),it.add(Lt)}else Ee(At,at,Y),it.add(At)}),N.pop(),_=null,it},this.compileAsync=function(R,W,at=null){const it=this.compile(R,W,at);return new Promise(Y=>{function At(){if(it.forEach(function(Ut){zt.get(Ut).currentProgram.isReady()&&it.delete(Ut)}),it.size===0){Y(R);return}setTimeout(At,10)}oe.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let vn=null;function pi(R){vn&&vn(R)}function Ir(){Ci.stop()}function Br(){Ci.start()}const Ci=new lv;Ci.setAnimationLoop(pi),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){vn=R,ct.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},ct.addEventListener("sessionstart",Ir),ct.addEventListener("sessionend",Br),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(W),W=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,V),_=_e.get(R,N.length),_.init(W),N.push(_),kt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(kt),Et=this.localClippingEnabled,ot=Rt.init(this.clippingPlanes,Et),y=Bt.get(R,I.length),y.init(),I.push(y),ct.enabled===!0&&ct.isPresenting===!0){const At=A.xr.getDepthSensingMesh();At!==null&&Ja(At,W,-1/0,A.sortObjects)}Ja(R,W,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(Mt,Tt),ue=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ue&&Zt.addToRenderList(y,R),this.info.render.frame++,ot===!0&&Rt.beginShadows();const at=_.state.shadowsArray;Ht.render(at,R,W),ot===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=y.opaque,Y=y.transmissive;if(_.setupLights(),W.isArrayCamera){const At=W.cameras;if(Y.length>0)for(let Ut=0,Lt=At.length;Ut<Lt;Ut++){const Xt=At[Ut];Fr(it,Y,R,Xt)}ue&&Zt.render(R);for(let Ut=0,Lt=At.length;Ut<Lt;Ut++){const Xt=At[Ut];Ds(y,R,Xt,Xt.viewport)}}else Y.length>0&&Fr(it,Y,R,W),ue&&Zt.render(R),Ds(y,R,W);V!==null&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(A,R,W),Oe.resetDefaultState(),U=-1,w=null,N.pop(),N.length>0?(_=N[N.length-1],ot===!0&&Rt.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Ja(R,W,at,it){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){it&&Qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(kt);const Ut=ft.update(R),Lt=R.material;Lt.visible&&y.push(R,Ut,Lt,at,Qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){const Ut=ft.update(R),Lt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Qt.copy(Ut.boundingSphere.center)),Qt.applyMatrix4(R.matrixWorld).applyMatrix4(kt)),Array.isArray(Lt)){const Xt=Ut.groups;for(let ee=0,Jt=Xt.length;ee<Jt;ee++){const Gt=Xt[ee],Me=Lt[Gt.materialIndex];Me&&Me.visible&&y.push(R,Ut,Me,at,Qt.z,Gt)}}else Lt.visible&&y.push(R,Ut,Lt,at,Qt.z,null)}}const At=R.children;for(let Ut=0,Lt=At.length;Ut<Lt;Ut++)Ja(At[Ut],W,at,it)}function Ds(R,W,at,it){const Y=R.opaque,At=R.transmissive,Ut=R.transparent;_.setupLightsView(at),ot===!0&&Rt.setGlobalState(A.clippingPlanes,at),it&&bt.viewport(H.copy(it)),Y.length>0&&$a(Y,W,at),At.length>0&&$a(At,W,at),Ut.length>0&&$a(Ut,W,at),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Fr(R,W,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[it.id]===void 0&&(_.state.transmissionRenderTarget[it.id]=new Rs(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Go:pa,minFilter:bs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const At=_.state.transmissionRenderTarget[it.id],Ut=it.viewport||H;At.setSize(Ut.z,Ut.w);const Lt=A.getRenderTarget();A.setRenderTarget(At),A.getClearColor(gt),_t=A.getClearAlpha(),_t<1&&A.setClearColor(16777215,.5),A.clear(),ue&&Zt.render(at);const Xt=A.toneMapping;A.toneMapping=Ka;const ee=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),_.setupLightsView(it),ot===!0&&Rt.setGlobalState(A.clippingPlanes,it),$a(R,at,it),L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Gt=0,Me=W.length;Gt<Me;Gt++){const Ue=W[Gt],Pe=Ue.object,bn=Ue.geometry,Se=Ue.material,Wt=Ue.group;if(Se.side===Pi&&Pe.layers.test(it.layers)){const cn=Se.side;Se.side=On,Se.needsUpdate=!0,mi(Pe,at,it,bn,Se,Wt),Se.side=cn,Se.needsUpdate=!0,Jt=!0}}Jt===!0&&(L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At))}A.setRenderTarget(Lt),A.setClearColor(gt,_t),ee!==void 0&&(it.viewport=ee),A.toneMapping=Xt}function $a(R,W,at){const it=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,At=R.length;Y<At;Y++){const Ut=R[Y],Lt=Ut.object,Xt=Ut.geometry,ee=it===null?Ut.material:it,Jt=Ut.group;Lt.layers.test(at.layers)&&mi(Lt,W,at,Xt,ee,Jt)}}function mi(R,W,at,it,Y,At){R.onBeforeRender(A,W,at,it,Y,At),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(A,W,at,it,R,At),Y.transparent===!0&&Y.side===Pi&&Y.forceSinglePass===!1?(Y.side=On,Y.needsUpdate=!0,A.renderBufferDirect(at,W,it,Y,R,At),Y.side=Qa,Y.needsUpdate=!0,A.renderBufferDirect(at,W,it,Y,R,At),Y.side=Pi):A.renderBufferDirect(at,W,it,Y,R,At),R.onAfterRender(A,W,at,it,Y,At)}function je(R,W,at){W.isScene!==!0&&(W=de);const it=zt.get(R),Y=_.state.lights,At=_.state.shadowsArray,Ut=Y.state.version,Lt=Ft.getParameters(R,Y.state,At,W,at),Xt=Ft.getProgramCacheKey(Lt);let ee=it.programs;it.environment=R.isMeshStandardMaterial?W.environment:null,it.fog=W.fog,it.envMap=(R.isMeshStandardMaterial?Q:E).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",te),ee=new Map,it.programs=ee);let Jt=ee.get(Xt);if(Jt!==void 0){if(it.currentProgram===Jt&&it.lightsStateVersion===Ut)return Hi(R,Lt),Jt}else Lt.uniforms=Ft.getUniforms(R),R.onBeforeCompile(Lt,A),Jt=Ft.acquireProgram(Lt,Xt),ee.set(Xt,Jt),it.uniforms=Lt.uniforms;const Gt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=Rt.uniform),Hi(R,Lt),it.needsLights=Hc(R),it.lightsStateVersion=Ut,it.needsLights&&(Gt.ambientLightColor.value=Y.state.ambient,Gt.lightProbe.value=Y.state.probe,Gt.directionalLights.value=Y.state.directional,Gt.directionalLightShadows.value=Y.state.directionalShadow,Gt.spotLights.value=Y.state.spot,Gt.spotLightShadows.value=Y.state.spotShadow,Gt.rectAreaLights.value=Y.state.rectArea,Gt.ltc_1.value=Y.state.rectAreaLTC1,Gt.ltc_2.value=Y.state.rectAreaLTC2,Gt.pointLights.value=Y.state.point,Gt.pointLightShadows.value=Y.state.pointShadow,Gt.hemisphereLights.value=Y.state.hemi,Gt.directionalShadowMap.value=Y.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Gt.spotShadowMap.value=Y.state.spotShadowMap,Gt.spotLightMatrix.value=Y.state.spotLightMatrix,Gt.spotLightMap.value=Y.state.spotLightMap,Gt.pointShadowMap.value=Y.state.pointShadowMap,Gt.pointShadowMatrix.value=Y.state.pointShadowMatrix),it.currentProgram=Jt,it.uniformsList=null,Jt}function xn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Nc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Hi(R,W){const at=zt.get(R);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function Hr(R,W,at,it,Y){W.isScene!==!0&&(W=de),L.resetTextureUnits();const At=W.fog,Ut=it.isMeshStandardMaterial?W.environment:null,Lt=V===null?A.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Pr,Xt=(it.isMeshStandardMaterial?Q:E).get(it.envMap||Ut),ee=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Jt=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Gt=!!at.morphAttributes.position,Me=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let Pe=Ka;it.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Pe=A.toneMapping);const bn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Se=bn!==void 0?bn.length:0,Wt=zt.get(it),cn=_.state.lights;if(ot===!0&&(Et===!0||R!==w)){const An=R===w&&it.id===U;Rt.setState(it,R,An)}let ie=!1;it.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==cn.state.version||Wt.outputColorSpace!==Lt||Y.isBatchedMesh&&Wt.batching===!1||!Y.isBatchedMesh&&Wt.batching===!0||Y.isBatchedMesh&&Wt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Wt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Wt.instancing===!1||!Y.isInstancedMesh&&Wt.instancing===!0||Y.isSkinnedMesh&&Wt.skinning===!1||!Y.isSkinnedMesh&&Wt.skinning===!0||Y.isInstancedMesh&&Wt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Wt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Wt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Wt.instancingMorph===!1&&Y.morphTexture!==null||Wt.envMap!==Xt||it.fog===!0&&Wt.fog!==At||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Rt.numPlanes||Wt.numIntersection!==Rt.numIntersection)||Wt.vertexAlphas!==ee||Wt.vertexTangents!==Jt||Wt.morphTargets!==Gt||Wt.morphNormals!==Me||Wt.morphColors!==Ue||Wt.toneMapping!==Pe||Wt.morphTargetsCount!==Se)&&(ie=!0):(ie=!0,Wt.__version=it.version);let Pn=Wt.currentProgram;ie===!0&&(Pn=je(it,W,Y));let ga=!1,Sn=!1,_a=!1;const Ce=Pn.getUniforms(),ti=Wt.uniforms;if(bt.useProgram(Pn.program)&&(ga=!0,Sn=!0,_a=!0),it.id!==U&&(U=it.id,Sn=!0),ga||w!==R){bt.buffers.depth.getReversed()?(St.copy(R.projectionMatrix),Ry(St),Cy(St),Ce.setValue(X,"projectionMatrix",St)):Ce.setValue(X,"projectionMatrix",R.projectionMatrix),Ce.setValue(X,"viewMatrix",R.matrixWorldInverse);const gi=Ce.map.cameraPosition;gi!==void 0&&gi.setValue(X,It.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&Ce.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ce.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Sn=!0,_a=!0)}if(Y.isSkinnedMesh){Ce.setOptional(X,Y,"bindMatrix"),Ce.setOptional(X,Y,"bindMatrixInverse");const An=Y.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ce.setValue(X,"boneTexture",An.boneTexture,L))}Y.isBatchedMesh&&(Ce.setOptional(X,Y,"batchingTexture"),Ce.setValue(X,"batchingTexture",Y._matricesTexture,L),Ce.setOptional(X,Y,"batchingIdTexture"),Ce.setValue(X,"batchingIdTexture",Y._indirectTexture,L),Ce.setOptional(X,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ce.setValue(X,"batchingColorTexture",Y._colorsTexture,L));const mn=at.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&qt.update(Y,at,Pn),(Sn||Wt.receiveShadow!==Y.receiveShadow)&&(Wt.receiveShadow=Y.receiveShadow,Ce.setValue(X,"receiveShadow",Y.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ti.envMap.value=Xt,ti.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&W.environment!==null&&(ti.envMapIntensity.value=W.environmentIntensity),Sn&&(Ce.setValue(X,"toneMappingExposure",A.toneMappingExposure),Wt.needsLights&&Fc(ti,_a),At&&it.fog===!0&&Ct.refreshFogUniforms(ti,At),Ct.refreshMaterialUniforms(ti,it,Z,K,_.state.transmissionRenderTarget[R.id]),Nc.upload(X,xn(Wt),ti,L)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Nc.upload(X,xn(Wt),ti,L),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ce.setValue(X,"center",Y.center),Ce.setValue(X,"modelViewMatrix",Y.modelViewMatrix),Ce.setValue(X,"normalMatrix",Y.normalMatrix),Ce.setValue(X,"modelMatrix",Y.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const An=it.uniformsGroups;for(let gi=0,ei=An.length;gi<ei;gi++){const Gi=An[gi];k.update(Gi,Pn),k.bind(Gi,Pn)}}return Pn}function Fc(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Hc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,W,at){zt.get(R.texture).__webglTexture=W,zt.get(R.depthTexture).__webglTexture=at;const it=zt.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=at===void 0,it.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const at=zt.get(R);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,at=0){V=R,P=W,D=at;let it=!0,Y=null,At=!1,Ut=!1;if(R){const Xt=zt.get(R);if(Xt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(X.FRAMEBUFFER,null),it=!1;else if(Xt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Xt.__hasExternalTextures)L.rebindTextures(R,zt.get(R.texture).__webglTexture,zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Gt=R.depthTexture;if(Xt.__boundDepthTexture!==Gt){if(Gt!==null&&zt.has(Gt)&&(R.width!==Gt.image.width||R.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ut=!0);const Jt=zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[W])?Y=Jt[W][at]:Y=Jt[W],At=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?Y=zt.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?Y=Jt[at]:Y=Jt,H.copy(R.viewport),ut.copy(R.scissor),st=R.scissorTest}else H.copy(O).multiplyScalar(Z).floor(),ut.copy(tt).multiplyScalar(Z).floor(),st=yt;if(bt.bindFramebuffer(X.FRAMEBUFFER,Y)&&it&&bt.drawBuffers(R,Y),bt.viewport(H),bt.scissor(ut),bt.setScissorTest(st),At){const Xt=zt.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Xt.__webglTexture,at)}else if(Ut){const Xt=zt.get(R.texture),ee=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xt.__webglTexture,at||0,ee)}U=-1},this.readRenderTargetPixels=function(R,W,at,it,Y,At,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){bt.bindFramebuffer(X.FRAMEBUFFER,Lt);try{const Xt=R.texture,ee=Xt.format,Jt=Xt.type;if(!pe.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-it&&at>=0&&at<=R.height-Y&&X.readPixels(W,at,it,Y,se.convert(ee),se.convert(Jt),At)}finally{const Xt=V!==null?zt.get(V).__webglFramebuffer:null;bt.bindFramebuffer(X.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,W,at,it,Y,At,Ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){const Xt=R.texture,ee=Xt.format,Jt=Xt.type;if(!pe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-it&&at>=0&&at<=R.height-Y){bt.bindFramebuffer(X.FRAMEBUFFER,Lt);const Gt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Gt),X.bufferData(X.PIXEL_PACK_BUFFER,At.byteLength,X.STREAM_READ),X.readPixels(W,at,it,Y,se.convert(ee),se.convert(Jt),0);const Me=V!==null?zt.get(V).__webglFramebuffer:null;bt.bindFramebuffer(X.FRAMEBUFFER,Me);const Ue=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Ay(X,Ue,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Gt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,At),X.deleteBuffer(Gt),X.deleteSync(Ue),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,at=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const it=Math.pow(2,-at),Y=Math.floor(R.image.width*it),At=Math.floor(R.image.height*it),Ut=W!==null?W.x:0,Lt=W!==null?W.y:0;L.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,at,0,0,Ut,Lt,Y,At),bt.unbindTexture()},this.copyTextureToTexture=function(R,W,at=null,it=null,Y=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],W=arguments[2],Y=arguments[3]||0,at=null);let At,Ut,Lt,Xt,ee,Jt,Gt,Me,Ue;const Pe=R.isCompressedTexture?R.mipmaps[Y]:R.image;at!==null?(At=at.max.x-at.min.x,Ut=at.max.y-at.min.y,Lt=at.isBox3?at.max.z-at.min.z:1,Xt=at.min.x,ee=at.min.y,Jt=at.isBox3?at.min.z:0):(At=Pe.width,Ut=Pe.height,Lt=Pe.depth||1,Xt=0,ee=0,Jt=0),it!==null?(Gt=it.x,Me=it.y,Ue=it.z):(Gt=0,Me=0,Ue=0);const bn=se.convert(W.format),Se=se.convert(W.type);let Wt;W.isData3DTexture?(L.setTexture3D(W,0),Wt=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Wt=X.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Wt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const cn=X.getParameter(X.UNPACK_ROW_LENGTH),ie=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Pn=X.getParameter(X.UNPACK_SKIP_PIXELS),ga=X.getParameter(X.UNPACK_SKIP_ROWS),Sn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Pe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Pe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Xt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ee),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Jt);const _a=R.isDataArrayTexture||R.isData3DTexture,Ce=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const ti=zt.get(R),mn=zt.get(W),An=zt.get(ti.__renderTarget),gi=zt.get(mn.__renderTarget);bt.bindFramebuffer(X.READ_FRAMEBUFFER,An.__webglFramebuffer),bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let ei=0;ei<Lt;ei++)_a&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,zt.get(R).__webglTexture,Y,Jt+ei),R.isDepthTexture?(Ce&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,zt.get(W).__webglTexture,Y,Ue+ei),X.blitFramebuffer(Xt,ee,At,Ut,Gt,Me,At,Ut,X.DEPTH_BUFFER_BIT,X.NEAREST)):Ce?X.copyTexSubImage3D(Wt,Y,Gt,Me,Ue+ei,Xt,ee,At,Ut):X.copyTexSubImage2D(Wt,Y,Gt,Me,Ue+ei,Xt,ee,At,Ut);bt.bindFramebuffer(X.READ_FRAMEBUFFER,null),bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ce?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Wt,Y,Gt,Me,Ue,At,Ut,Lt,bn,Se,Pe.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Wt,Y,Gt,Me,Ue,At,Ut,Lt,bn,Pe.data):X.texSubImage3D(Wt,Y,Gt,Me,Ue,At,Ut,Lt,bn,Se,Pe):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,Gt,Me,At,Ut,bn,Se,Pe.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,Gt,Me,Pe.width,Pe.height,bn,Pe.data):X.texSubImage2D(X.TEXTURE_2D,Y,Gt,Me,At,Ut,bn,Se,Pe);X.pixelStorei(X.UNPACK_ROW_LENGTH,cn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ie),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Pn),X.pixelStorei(X.UNPACK_SKIP_ROWS,ga),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Sn),Y===0&&W.generateMipmaps&&X.generateMipmap(Wt),bt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,at=null,it=null,Y=0){return R.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,it=arguments[1]||null,R=arguments[2],W=arguments[3],Y=arguments[4]||0),Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,at,it,Y)},this.initRenderTarget=function(R){zt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),bt.unbindTexture()},this.resetState=function(){P=0,D=0,V=null,bt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}class F1 extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class pv extends Xo{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const S0=new tn,_d=new Ad,Tc=new Ic,bc=new nt;class H1 extends Xn{constructor(e=new Fi,i=new pv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=u,e.ray.intersectsSphere(Tc)===!1)return;S0.copy(l).invert(),_d.copy(e.ray).applyMatrix4(S0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=S,C=M;b<C;b++){const y=p.getX(b);bc.fromBufferAttribute(g,y),y0(bc,y,m,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=S,C=M;b<C;b++)bc.fromBufferAttribute(g,b),y0(bc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function y0(r,e,i,s,l,u,h){const d=_d.distanceSqToPoint(r);if(d<i){const m=new nt;_d.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class mv extends hn{constructor(e,i,s,l,u,h,d,m,p){super(e,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cd extends Fi{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],g=new nt,S=new nt,M=[],b=[],C=[],y=[];for(let _=0;_<=s;_++){const I=[],N=_/s;let A=0;_===0&&h===0?A=.5/i:_===s&&m===Math.PI&&(A=-.5/i);for(let q=0;q<=i;q++){const P=q/i;g.x=-e*Math.cos(l+P*u)*Math.sin(h+N*d),g.y=e*Math.cos(h+N*d),g.z=e*Math.sin(l+P*u)*Math.sin(h+N*d),b.push(g.x,g.y,g.z),S.copy(g).normalize(),C.push(S.x,S.y,S.z),y.push(P+A,1-N),I.push(p++)}v.push(I)}for(let _=0;_<s;_++)for(let I=0;I<i;I++){const N=v[_][I+1],A=v[_][I],q=v[_+1][I],P=v[_+1][I+1];(_!==0||h>0)&&M.push(N,A,P),(_!==s-1||m<Math.PI)&&M.push(A,q,P)}this.setIndex(M),this.setAttribute("position",new Bi(b,3)),this.setAttribute("normal",new Bi(C,3)),this.setAttribute("uv",new Bi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const M0={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class G1{constructor(e,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.itemStart=function(v){d++,u===!1&&l.onStart!==void 0&&l.onStart(v,h,d),u=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,g){return p.push(v,g),this},this.removeHandler=function(v){const g=p.indexOf(v);return g!==-1&&p.splice(g,2),this},this.getHandler=function(v){for(let g=0,S=p.length;g<S;g+=2){const M=p[g],b=p[g+1];if(M.global&&(M.lastIndex=0),M.test(v))return b}return null}}}const V1=new G1;class wd{constructor(e){this.manager=e!==void 0?e:V1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wd.DEFAULT_MATERIAL_NAME="__DEFAULT";class k1 extends wd{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=M0.get(e);if(h!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0),h;const d=Ho("img");function m(){v(),M0.add(e,this),i&&i(this),u.manager.itemEnd(e)}function p(g){v(),l&&l(g),u.manager.itemError(e),u.manager.itemEnd(e)}function v(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class X1 extends wd{constructor(e){super(e)}load(e,i,s,l){const u=new hn,h=new k1(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class E0{constructor(e=1,i=0,s=0){return this.radius=e,this.phi=i,this.theta=s,this}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class W1 extends ws{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);const T0={type:"change"},Dd={type:"start"},gv={type:"end"},Ac=new Ad,b0=new qa,Y1=Math.cos(70*Ty.DEG2RAD),fn=new nt,kn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6;class q1 extends W1{constructor(e,i=null){super(e,i),this.state=He.NONE,this.enabled=!0,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new Cs,this._lastTargetPosition=new nt,this._quat=new Cs().setFromUnitVectors(e.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new E0,this._sphericalDelta=new E0,this._scale=1,this._panOffset=new nt,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new nt,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z1.bind(this),this._onPointerDown=j1.bind(this),this._onPointerUp=K1.bind(this),this._onContextMenu=iA.bind(this),this._onMouseWheel=$1.bind(this),this._onKeyDown=tA.bind(this),this._onTouchStart=eA.bind(this),this._onTouchMove=nA.bind(this),this._onMouseDown=Q1.bind(this),this._onMouseMove=J1.bind(this),this._interceptControlDown=aA.bind(this),this._interceptControlUp=sA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(T0),this.update(),this.state=He.NONE}update(e=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<Y1?this.object.lookAt(this.target):(b0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(b0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(T0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let u=fn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new he,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function j1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Z1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function K1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gv),this.state=He.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function Q1(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=He.DOLLY;break;case hi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}break;case hi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Dd)}function J1(r){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function $1(r){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(r.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(gv))}function tA(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function eA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=He.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=He.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Dd)}function nA(r){switch(this._trackPointer(r),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=He.NONE}}function iA(r){this.enabled!==!1&&r.preventDefault()}function aA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rA={STANDARD:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},HOT:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"Humanitarian OSM Team",url:"https://www.hotosm.org/"}]},OPENTOPOMAP:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"SRTM",url:"https://www2.jpl.nasa.gov/srtm/"},{text:"OpenTopoMap",url:"https://opentopomap.org/"}]},CARTODARK:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"CARTO",url:"https://carto.com/attributions"}]},CARTOVOYAGER:{text:"© ",links:[{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"},{text:"CARTO",url:"https://carto.com/attributions"}]},BLUE_MARBLE:{text:"Imagery: ",links:[{text:"NASA Blue Marble",url:"https://visibleearth.nasa.gov/collection/1484/blue-marble"},{text:"NASA Goddard Space Flight Center",url:"https://www.nasa.gov/goddard"}]},NASA_VIIRS:{text:"Imagery: ",links:[{text:"NASA EOSDIS GIBS",url:"https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs"},{text:"VIIRS",url:"https://www.nasa.gov/mission_pages/NPP/mission_overview/index.html"}]}},oA={HIKING_TRAILS:{text:"Overlay: © ",links:[{text:"Waymarked Trails",url:"https://waymarkedtrails.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},CYCLING_ROUTES:{text:"Overlay: © ",links:[{text:"Waymarked Trails",url:"https://waymarkedtrails.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},MTB_TRAILS:{text:"Overlay: © ",links:[{text:"Waymarked Trails",url:"https://waymarkedtrails.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},OPEN_RAILWAY_MAP:{text:"Overlay: © ",links:[{text:"OpenRailwayMap",url:"https://www.openrailwaymap.org/"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]},PLACE_LABELS:{text:"Overlay: © ",links:[{text:"CARTO",url:"https://carto.com/attributions"},{text:"OpenStreetMap contributors",url:"https://www.openstreetmap.org/copyright"}]}},lA=({mapLayer:r,overlayLayer:e,sidebarOffset:i})=>{const s=rA[r],l=e!=="NONE"?oA[e]:null;return xt.jsx("div",{className:"fixed bottom-4 z-50 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",style:{right:`${i+16}px`},children:xt.jsxs("div",{className:"flex flex-col gap-1 text-[9px] font-mono text-zinc-300 tracking-wide",children:[xt.jsxs("div",{className:"flex items-center",children:[xt.jsx("span",{children:s.text}),s.links.map((u,h)=>xt.jsxs(wh.Fragment,{children:[h>0&&xt.jsx("span",{className:"mx-1",children:"|"}),xt.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white hover:underline transition-colors",children:u.text})]},u.url))]}),l&&xt.jsxs("div",{className:"flex items-center",children:[xt.jsx("span",{children:l.text}),l.links.map((u,h)=>xt.jsxs(wh.Fragment,{children:[h>0&&xt.jsx("span",{className:"mx-1",children:"|"}),xt.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white hover:underline transition-colors",children:u.text})]},u.url))]})]})})},cA={STANDARD:{url:"https://tile.openstreetmap.org",format:"xyz"},HOT:{url:"https://a.tile.openstreetmap.fr/hot",format:"xyz"},OPENTOPOMAP:{url:"https://a.tile.opentopomap.org",format:"xyz"},CARTODARK:{url:"https://a.basemaps.cartocdn.com/dark_all",format:"xyz"},CARTOVOYAGER:{url:"https://a.basemaps.cartocdn.com/rastertiles/voyager",format:"xyz"},BLUE_MARBLE:{url:"/Projection-lab/blue-marble.jpg",format:"static"},NASA_VIIRS:{url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default",format:"xyz"}},uA={HIKING_TRAILS:{url:"https://tile.waymarkedtrails.org/hiking",format:"xyz"},CYCLING_ROUTES:{url:"https://tile.waymarkedtrails.org/cycling",format:"xyz"},MTB_TRAILS:{url:"https://tile.waymarkedtrails.org/mtb",format:"xyz"},OPEN_RAILWAY_MAP:{url:"https://tiles.openrailwaymap.org/standard",format:"xyz"},PLACE_LABELS:{url:"https://a.basemaps.cartocdn.com/dark_only_labels",format:"xyz"}};async function fA(r){return console.log(`Loading static texture from: ${r}`),new Promise((e,i)=>{new X1().load(r,l=>{console.log("✓ Static texture loaded successfully"),l.wrapS=Ur,l.wrapT=Ii,l.minFilter=Dn,l.magFilter=Dn,l.anisotropy=16,e(l)},l=>{if(l.lengthComputable){const u=(l.loaded/l.total*100).toFixed(0);console.log(`Loading texture: ${u}%`)}},l=>{console.error("✗ Failed to load static texture:",l),i(l)})})}async function A0(r,e,i=!1){const l=Math.pow(2,e);console.log(`Creating stitched texture with ${l}x${l} tiles at zoom ${e}, overlay: ${i}`);const u=document.createElement("canvas");u.width=l*256,u.height=l*256;const h=u.getContext("2d",{alpha:!0});if(!h)throw new Error("Could not create canvas context");if(i)h.clearRect(0,0,u.width,u.height);else{const g=h.createLinearGradient(0,0,0,u.height);g.addColorStop(0,"#1a3a52"),g.addColorStop(1,"#0d1b2a"),h.fillStyle=g,h.fillRect(0,0,u.width,u.height)}const d=[];let m=0;const p=[];for(let g=0;g<l;g++)for(let S=0;S<l;S++){const M=r(g,S,e),b=new Promise(C=>{const y=new Image;y.crossOrigin="anonymous";const _=setTimeout(()=>{console.warn(`⏱️ Tile request timeout: ${M}`),p.push(M),C()},5e3);y.onload=()=>{clearTimeout(_),m++,h.drawImage(y,g*256,S*256,256,256),console.log(`✓ Loaded tile ${g},${S}`),C()},y.onerror=()=>{clearTimeout(_),p.push(M),console.warn(`✗ Failed to load tile: ${M}`),C()},y.src=M});d.push(b)}await Promise.all(d),console.log(`Texture complete. Loaded ${m}/${d.length} tiles`),p.length>0&&console.warn(`Failed URLs (${p.length}): ${p.slice(0,2).join(", ")}${p.length>2?" ...":""}`),!i&&m===0&&(h.fillStyle="rgba(255, 100, 100, 0.3)",h.font="bold 50px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText("⚠️ TILES FAILED",u.width/2,u.height/2-30),h.font="20px Arial",h.fillText("Check console",u.width/2,u.height/2+30));const v=new mv(u);return v.wrapS=Ur,v.wrapT=Ii,v.minFilter=Dn,v.magFilter=Dn,v.anisotropy=16,v.needsUpdate=!0,v}const Ni=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,hA=({settings:r,sidebarOffset:e})=>{const i=we.useRef(null),s=we.useRef(null),l=we.useRef(null),u=we.useRef(null),h=we.useRef(r),d=we.useRef(e),m=we.useRef(e),p=we.useRef(0),v=we.useRef(null),g=we.useRef({torus:0,sphere:0,cylinder:0,cone:0,disc:0,mercator:0,gallPeters:0,sinusoidal:0,robinson:0,infinite:0}),S=we.useRef("SPHERE"),[M,b]=we.useState(!0),C=we.useRef([]),y=we.useRef(r.viewMode==="SPHERE"?1:0),_=we.useRef(!0),I=()=>{const N=document.createElement("canvas");N.width=512,N.height=512;const A=N.getContext("2d");if(!A)throw new Error("Could not create canvas context");A.fillStyle="#1a3a52",A.fillRect(0,0,512,512);const q=A.createLinearGradient(0,0,512,512);q.addColorStop(0,"#0d1b2a"),q.addColorStop(1,"#1a3a52"),A.fillStyle=q,A.fillRect(0,0,512,512),A.strokeStyle="#2a5a7a",A.lineWidth=2;for(let D=0;D<=8;D++){const V=D/8*512;A.beginPath(),A.moveTo(V,0),A.lineTo(V,512),A.stroke(),A.beginPath(),A.moveTo(0,V),A.lineTo(512,V),A.stroke()}A.fillStyle="#4a9aca",A.font="bold 24px monospace",A.textAlign="center",A.textBaseline="middle",A.fillText("Loading Tiles...",256,256);const P=new mv(N);return P.wrapS=Ur,P.wrapT=Ii,P.minFilter=Dn,P.magFilter=Dn,P};return we.useEffect(()=>{h.current=r,d.current=e,console.log("Settings updated:",r.viewMode,r.mapLayer)},[r,e]),we.useEffect(()=>{b(!0);const N=cA[r.mapLayer];if(N.format==="static"){console.log("Loading static texture for layer:",r.mapLayer),fA(N.url).then(q=>{if(console.log("Static texture loaded successfully"),l.current){const P=l.current.uniforms.uTexture.value;P instanceof hn&&P.image&&P.dispose(),l.current.uniforms.uTexture.value=q,l.current.uniforms.uUseEquirectangular.value=1}b(!1)}).catch(q=>{console.error("Failed to load static texture:",q),b(!1)});return}const A=(q,P,D)=>{if(r.mapLayer==="NASA_VIIRS"){const U=new Date;U.setDate(U.getDate()-1);const w=U.toISOString().split("T")[0];return`${N.url}/${w}/GoogleMapsCompatible_Level9/${D}/${P}/${q}.jpg`}return`${N.url}/${D}/${q}/${P}.png`};console.log("Starting texture load for layer:",r.mapLayer),console.log("Sample URL:",A(0,0,4)),A0(A,4).then(q=>{if(console.log("Texture loaded successfully"),l.current){const P=l.current.uniforms.uTexture.value;P instanceof hn&&P.image&&P.dispose(),l.current.uniforms.uTexture.value=q,l.current.uniforms.uUseEquirectangular.value=0}b(!1)}).catch(q=>{console.error("Failed to load texture:",q),b(!1)})},[r.mapLayer]),we.useEffect(()=>{const N=r.overlayLayer;if(N==="NONE"){l.current&&(l.current.uniforms.uOverlayVisible.value=0),console.log("Overlay disabled");return}const A=uA[N],q=(P,D,V)=>`${A.url}/${V}/${P}/${D}.png`;console.log("Loading overlay texture for layer:",N),console.log("Sample overlay URL:",q(0,0,5)),A0(q,5,!0).then(P=>{if(console.log("Overlay texture loaded successfully"),l.current){const D=l.current.uniforms.uOverlayTexture.value;D instanceof hn&&D.image&&D.dispose(),l.current.uniforms.uOverlayTexture.value=P,l.current.uniforms.uOverlayVisible.value=1}}).catch(P=>{console.error("Failed to load overlay texture:",P),l.current&&(l.current.uniforms.uOverlayVisible.value=0)})},[r.overlayLayer]),we.useEffect(()=>{if(!i.current)return;if(s.current){console.log("Scene already exists, skipping recreation");return}const N=new F1;N.background=new De(5);const A=new di(45,window.innerWidth/window.innerHeight,.1,1e4);A.position.set(0,0,250),console.log("Scene created with camera position:",A.position);const q=new B1({antialias:!0,alpha:!0});q.setSize(window.innerWidth,window.innerHeight),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current.appendChild(q.domElement),console.log("Renderer created and appended to DOM"),s.current=q;const P=new q1(A,q.domElement);P.enableDamping=!0,P.dampingFactor=.05,P.autoRotate=!1,P.autoRotateSpeed=1,P.enableZoom=!0,P.enablePan=!0,P.enableRotate=!0,P.minDistance=5,u.current=P,q.domElement.addEventListener("mousedown",G=>{console.log("🖱️ Mouse down at:",G.clientX,G.clientY)}),q.domElement.addEventListener("mousemove",G=>{G.buttons>0&&console.log("🖱️ Mouse dragging at:",G.clientX,G.clientY)}),q.domElement.addEventListener("mouseup",G=>{console.log("🖱️ Mouse up at:",G.clientX,G.clientY)});const D=`
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
    `,V=`
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
    `,U=new Ri({vertexShader:D,fragmentShader:V,uniforms:{uTorusT:{value:0},uSphereT:{value:0},uCylinderT:{value:0},uConeT:{value:0},uDiscT:{value:0},uMercatorT:{value:0},uGallPetersT:{value:0},uSinusoidalT:{value:0},uRobinsonT:{value:0},uInfiniteT:{value:0},uTexture:{value:I()},uOverlayTexture:{value:I()},uOverlayVisible:{value:0},uShowGrid:{value:h.current.showGrid?1:0},uUseEquirectangular:{value:0}},side:Pi,transparent:!1});l.current=U;const w=new Yo(1,1,400,400),H=new Ti(w,U);H.scale.set(5,5,5),H.frustumCulled=!1,N.add(H),console.log("✓ Plane mesh added to scene with",w.attributes.position.count,"vertices"),console.log("✓ Initial mode:",h.current.viewMode),console.log("✓ Initial map layer:",h.current.mapLayer);const ut=`
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
    `,st=[],gt=50,_t=new Ri({vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:ut,uniforms:{uLayerIntensity:{value:h.current.viewMode==="SPHERE"&&h.current.showAtmosphere?.5:0}},transparent:!0,side:On,blending:Dh,depthWrite:!1,depthTest:!0}),z=new Cd(gt*1.05,64,64),K=new Ti(z,_t);K.visible=h.current.viewMode==="SPHERE",N.add(K),st.push(K),C.current=st,console.log("✓ Sphere atmosphere added");const Z=12e3,Mt=new Fi,Tt=new Float32Array(Z*3);for(let G=0;G<Z;G++){const ot=600+Math.random()*800,Et=2*Math.PI*Math.random(),St=Math.acos(2*Math.random()-1);Tt[G*3]=ot*Math.sin(St)*Math.cos(Et),Tt[G*3+1]=ot*Math.sin(St)*Math.sin(Et),Tt[G*3+2]=ot*Math.cos(St)}Mt.setAttribute("position",new Ai(Tt,3));const O=new H1(Mt,new pv({size:.7,color:8956671,transparent:!0,opacity:.8}));N.add(O),v.current=O;const tt=G=>{const ot=(G-p.current)/1e3;p.current=G;const Et=5;if(m.current+=(d.current-m.current)*Math.min(ot*Et,1),A.setViewOffset(window.innerWidth,window.innerHeight,m.current/2,0,window.innerWidth,window.innerHeight),v.current&&(v.current.rotation.y+=5e-5),l.current){const bt=h.current.viewMode;if(bt!==S.current){console.log("✓ Geometry mode changed:",S.current,"→",bt),S.current==="SPHERE"?_.current=!1:_.current=!0;const dt=["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(S.current),ft=["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(bt);dt!==ft&&P.target.set(0,0,0),S.current=bt}const ae={torus:bt==="TORUS"?1:0,sphere:bt==="SPHERE"?1:0,cylinder:bt==="CYLINDER"?1:0,cone:bt==="CONE"?1:0,disc:bt==="DISC"?1:0,mercator:bt==="MERCATOR"?1:0,gallPeters:bt==="GALL_PETERS"?1:0,sinusoidal:bt==="SINUSOIDAL"?1:0,robinson:bt==="ROBINSON"?1:0,infinite:bt==="INFINITE"||bt==="TORUS"?1:0},zt=bt==="SPHERE",L=zt&&h.current.showAtmosphere?1:0;if(zt&&g.current.sphere<.99)y.current=Math.max(0,y.current-ot*8);else{const dt=L<y.current?8:3;y.current+=(L-y.current)*ot*dt}!_.current&&y.current<.01&&(_.current=!0),Object.keys(ae).forEach(dt=>{let ft=ae[dt];dt==="torus"&&ft===1&&g.current.infinite<.9&&(ft=0);const Ft=g.current[dt],Ct=dt==="torus"?.5:1.5;_.current&&(Ft<ft?g.current[dt]=Math.min(ft,Ft+ot*Ct):Ft>ft&&(g.current[dt]=Math.max(ft,Ft-ot*1.5)))});const E=Ni(g.current.torus);["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(bt)&&P.target.set(0,0,-25*E);const lt=l.current;lt.uniforms.uInfiniteT.value=Ni(g.current.infinite),lt.uniforms.uMercatorT.value=Ni(g.current.mercator),lt.uniforms.uGallPetersT.value=Ni(g.current.gallPeters),lt.uniforms.uSinusoidalT.value=Ni(g.current.sinusoidal),lt.uniforms.uRobinsonT.value=Ni(g.current.robinson),lt.uniforms.uSphereT.value=Ni(g.current.sphere),lt.uniforms.uCylinderT.value=Ni(g.current.cylinder),lt.uniforms.uConeT.value=Ni(g.current.cone),lt.uniforms.uDiscT.value=Ni(g.current.disc),lt.uniforms.uTorusT.value=g.current.torus,lt.uniforms.uShowGrid.value=h.current.showGrid?1:0,C.current.forEach(dt=>{dt.material instanceof Ri&&(dt.material.uniforms.uLayerIntensity.value=y.current*.5,dt.visible=y.current>.01)})}P.autoRotate=h.current.autoRotate;const St=h.current.viewMode;["STANDARD","MERCATOR","GALL_PETERS","SINUSOIDAL","ROBINSON","INFINITE"].includes(St)?(P.mouseButtons={LEFT:hi.PAN,MIDDLE:hi.DOLLY,RIGHT:hi.ROTATE},P.touches={ONE:zi.PAN,TWO:zi.DOLLY_ROTATE},P.screenSpacePanning=!0,P.panSpeed=1.5):(P.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},P.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},P.panSpeed=1,P.screenSpacePanning=!0),P.update(),h.current.viewMode;const It=5,Qt=10*It,de=5,ue=g.current.sphere,Ve=g.current.torus,X=g.current.cylinder,on=g.current.cone,oe=g.current.disc;if(ue>.01||Ve>.01||X>.01||on>.01||oe>.01){const bt=A.position.clone();P.target.clone();let ae=0;if(ue>.5){const zt=bt.length();ae=Qt+de,zt<ae&&(bt.normalize().multiplyScalar(ae),A.position.copy(bt))}else if(Ve>.5){const zt=25*It,L=5*It,E=new nt(0,0,-zt),Q=bt.clone().sub(E),dt=new he(Q.x,Q.z).length(),ft=Math.abs(dt-zt),Ft=Math.sqrt(ft*ft+Q.y*Q.y)-L;if(Ft<de){const Ct=Q.clone().normalize(),Bt=de-Ft;A.position.add(Ct.multiplyScalar(Bt))}}else if(X>.5){const zt=Math.sqrt(bt.x*bt.x+bt.z*bt.z);if(ae=Qt+de,zt<ae){const L=ae/zt;A.position.x*=L,A.position.z*=L}}else if(on>.5){const zt=1.1*Qt,L=Math.PI*Qt,E=bt.y/L+.5,Q=zt*(1.1-Math.max(0,Math.min(1,E))),lt=Math.sqrt(bt.x*bt.x+bt.z*bt.z);if(ae=Q+de,lt<ae&&Q>0){const dt=ae/lt;A.position.x*=dt,A.position.z*=dt}}else if(oe>.5){const zt=2*Qt;Math.sqrt(bt.x*bt.x+bt.z*bt.z)<zt&&Math.abs(bt.y)<de&&(A.position.y=bt.y>=0?de:-de)}}else A.position.z<5&&(A.position.z=5),P.target.z<0&&(P.target.z=0);q.render(N,A),requestAnimationFrame(tt)};p.current=performance.now(),requestAnimationFrame(tt),console.log("✓ Animation loop started");const yt=()=>{A.aspect=window.innerWidth/window.innerHeight,A.updateProjectionMatrix(),q.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",yt),()=>{window.removeEventListener("resize",yt),q.dispose(),w.dispose(),U.dispose()}},[]),xt.jsxs("div",{ref:i,className:"w-full h-full bg-[#000005] cursor-move",style:{touchAction:"none"},children:[M&&xt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md z-10 pointer-events-none",children:xt.jsxs("div",{className:"text-center space-y-4",children:[xt.jsx("div",{className:"w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin mx-auto"}),xt.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400",children:"Initializing Playground..."})]})}),xt.jsx(lA,{mapLayer:r.mapLayer,overlayLayer:r.overlayLayer,sidebarOffset:e})]})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=r=>{const e=pA(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=we.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>we.createElement("svg",{ref:m,...mA,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:_v("lucide",l),...!u&&!gA(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,v])=>we.createElement(p,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(r,e)=>{const i=we.forwardRef(({className:s,...l},u)=>we.createElement(_A,{ref:u,iconNode:e,className:_v(`lucide-${dA(R0(r))}`,`lucide-${r}`,s),...l}));return i.displayName=R0(r),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],C0=Ge("activity",vA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],SA=Ge("bike",xA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],MA=Ge("box",yA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],TA=Ge("chevron-down",EA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],AA=Ge("chevron-left",bA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],CA=Ge("chevron-right",RA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],DA=Ge("chevron-up",wA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],LA=Ge("cloud",UA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],OA=Ge("compass",NA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]],zA=Ge("cylinder",PA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],BA=Ge("disc",IA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],w0=Ge("earth",FA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],GA=Ge("footprints",HA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],D0=Ge("globe",VA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],U0=Ge("grid-3x3",kA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],WA=Ge("heart",XA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],qA=Ge("info",YA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],L0=Ge("layers",jA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Ch=Ge("map",ZA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],QA=Ge("moon",KA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],N0=Ge("mountain",JA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],tR=Ge("navigation",$A);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],nR=Ge("pyramid",eR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],O0=Ge("rotate-3d",iR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]],sR=Ge("tram-front",aR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],oR=Ge("triangle",rR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],cR=Ge("wind",lR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],fR=Ge("zap",uR),hR=()=>{const[r,e]=we.useState({zoom:1,rotation:{x:0,y:0},showGrid:!0,showAtmosphere:!0,autoRotate:!1,viewMode:"SPHERE",mapLayer:"BLUE_MARBLE",overlayLayer:"NONE"}),[i,s]=we.useState(!0),[l,u]=we.useState(!1),h=we.useRef("STANDARD"),d=we.useCallback(D=>{console.log("✓ setMode called with:",D),["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(D)||(h.current=D),e(U=>(console.log("✓ Settings updated to viewMode:",D),{...U,viewMode:D}))},[]),m=D=>{console.log("✓ setLayer called with:",D),e(V=>(console.log("✓ Settings updated to mapLayer:",D),{...V,mapLayer:D}))},p=D=>{console.log("✓ setOverlay called with:",D),e(V=>(console.log("✓ Settings updated to overlayLayer:",D),{...V,overlayLayer:D}))},v=()=>e(D=>({...D,showGrid:!D.showGrid})),g=()=>e(D=>({...D,showAtmosphere:!D.showAtmosphere})),S=()=>e(D=>({...D,autoRotate:!D.autoRotate})),M=D=>{const V=r.viewMode;d(V===D?h.current:D)},b=r.viewMode==="TORUS",C=r.viewMode==="SPHERE",y=r.viewMode==="CYLINDER",_=r.viewMode==="CONE",I=r.viewMode==="DISC",N=b||C||y||_||I,A=[{id:"STANDARD",name:"Standard (Plate Carrée)",icon:U0},{id:"GALL_PETERS",name:"Gall-Peters (Equal Area)",icon:Ch},{id:"MERCATOR",name:"Mercator (Navigational)",icon:OA},{id:"ROBINSON",name:"Robinson (Pseudocylindrical)",icon:w0},{id:"SINUSOIDAL",name:"Sinusoidal (Equal Area)",icon:oR},{id:"INFINITE",name:"Infinite (Transverse)",icon:fR}],q=[{id:"BLUE_MARBLE",name:"NASA Blue Marble",icon:w0,color:"text-cyan-400"},{id:"NASA_VIIRS",name:"NASA VIIRS",icon:D0,color:"text-purple-400"},{id:"OPENTOPOMAP",name:"OpenTopoMap",icon:N0,color:"text-amber-400"},{id:"HOT",name:"Humanitarian",icon:WA,color:"text-rose-400"},{id:"STANDARD",name:"OSM Standard",icon:tR,color:"text-blue-400"},{id:"CARTODARK",name:"Carto Dark",icon:QA,color:"text-indigo-400"}],P=[{id:"NONE",name:"No Overlay",icon:L0,color:"text-zinc-400"},{id:"HIKING_TRAILS",name:"Hiking Trails",icon:GA,color:"text-green-400"},{id:"CYCLING_ROUTES",name:"Cycling Routes",icon:SA,color:"text-orange-400"},{id:"MTB_TRAILS",name:"MTB Trails",icon:N0,color:"text-amber-400"},{id:"OPEN_RAILWAY_MAP",name:"Railways",icon:sR,color:"text-purple-400"},{id:"PLACE_LABELS",name:"Place Labels",icon:Ch,color:"text-cyan-400"}];return xt.jsxs("div",{className:"flex h-screen w-screen bg-zinc-950 font-sans text-zinc-100 overflow-hidden",children:[xt.jsxs("div",{className:"relative flex-1 h-full",children:[xt.jsx(hA,{settings:r,sidebarOffset:i?380:0}),!i&&xt.jsx("button",{onClick:()=>s(!0),className:"absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 hover:bg-zinc-800 transition-colors shadow-xl",children:xt.jsx(AA,{size:20})})]}),xt.jsx("aside",{className:`fixed top-0 right-0 h-full bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl z-40 ${i?"translate-x-0":"translate-x-full"} w-full sm:w-[380px]`,children:xt.jsxs("div",{className:"h-full flex flex-col p-10 overflow-y-auto",children:[xt.jsxs("div",{className:"flex items-center justify-between mb-12",children:[xt.jsxs("div",{className:"flex items-center gap-4",children:[xt.jsx("div",{className:`p-3 rounded-2xl border transition-all duration-500 ${N?"bg-emerald-600/20 border-emerald-500/30":"bg-blue-600/20 border-blue-500/30"}`,children:xt.jsx(C0,{className:N?"text-emerald-400":"text-blue-400",size:20})}),xt.jsxs("div",{children:[xt.jsx("h1",{className:"text-[11px] font-black uppercase tracking-[0.4em] text-white",children:"Projection Lab v43"}),xt.jsx("p",{className:"text-[9px] text-zinc-500 font-mono text-nowrap uppercase",children:"Map Projection Playground"})]})]}),xt.jsx("button",{onClick:()=>s(!1),className:"p-2 hover:bg-white/5 rounded-full transition-colors",children:xt.jsx(CA,{size:18})})]}),xt.jsxs("section",{className:"space-y-10 pb-12",children:[xt.jsxs("div",{className:"space-y-5",children:[xt.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[xt.jsx(L0,{size:12})," Map Engine"]}),xt.jsx("div",{className:"grid grid-cols-2 gap-2",children:q.map(D=>xt.jsxs("button",{onClick:()=>m(D.id),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${r.mapLayer===D.id?"bg-white text-zinc-950 border-white shadow-lg":"bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800"}`,children:[xt.jsx(D.icon,{size:20,className:r.mapLayer===D.id?"text-zinc-950":D.color}),xt.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-center",children:D.name})]},D.id))})]}),xt.jsxs("div",{className:"space-y-5",children:[xt.jsxs("button",{onClick:()=>u(!l),className:"w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors",children:[xt.jsxs("div",{className:"flex items-center gap-2",children:[xt.jsx(C0,{size:12}),"Overlay Layers"]}),l?xt.jsx(DA,{size:14}):xt.jsx(TA,{size:14})]}),l&&xt.jsx("div",{className:"grid grid-cols-2 gap-2 animate-in fade-in duration-300",children:P.map(D=>xt.jsxs("button",{onClick:()=>p(D.id),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300
                        ${r.overlayLayer===D.id?"bg-white text-zinc-950 border-white shadow-lg":"bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800"}`,children:[xt.jsx(D.icon,{size:20,className:r.overlayLayer===D.id?"text-zinc-950":D.color}),xt.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-center",children:D.name})]},D.id))})]}),xt.jsxs("div",{className:"space-y-6",children:[xt.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[xt.jsx(Ch,{size:12})," Cartography (2D)"]}),xt.jsx("div",{className:"space-y-2.5",children:A.map(D=>xt.jsx("button",{onClick:()=>d(D.id),className:`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 relative group ${r.viewMode===D.id?"bg-zinc-100 text-zinc-950 border-white shadow-lg":b&&D.id==="INFINITE"?"bg-blue-900/40 border-blue-500 text-blue-100":"bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-700"}`,children:xt.jsxs("div",{className:"flex items-center gap-3",children:[xt.jsx(D.icon,{size:16,className:`transition-colors ${r.viewMode===D.id?"text-zinc-950":b&&D.id==="INFINITE"?"text-blue-400":"text-zinc-500"}`}),xt.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest",children:D.name})]})},D.id))})]}),xt.jsxs("div",{className:"space-y-6",children:[xt.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[xt.jsx(MA,{size:12})," Dimensional (3D)"]}),xt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[xt.jsxs("button",{onClick:()=>M("SPHERE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${C?"bg-emerald-600 text-white border-emerald-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[xt.jsx(D0,{size:20,className:C?"animate-pulse":""}),xt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest",children:"Sphere"})]}),xt.jsxs("button",{onClick:()=>M("DISC"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${I?"bg-rose-600 text-white border-rose-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[xt.jsx(BA,{size:20,className:I?"animate-pulse":""}),xt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Disc World"})]}),xt.jsxs("button",{onClick:()=>M("CONE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${_?"bg-orange-600 text-white border-orange-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[xt.jsx(nR,{size:20,className:_?"animate-pulse":""}),xt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cone"})]}),xt.jsxs("button",{onClick:()=>M("CYLINDER"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${y?"bg-indigo-600 text-white border-indigo-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[xt.jsx(zA,{size:20,className:y?"animate-pulse":""}),xt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cylinder"})]}),xt.jsxs("button",{onClick:()=>M("TORUS"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 col-span-2 ${b?"bg-blue-600 text-white border-blue-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[xt.jsx(O0,{size:20,className:b?"animate-pulse":""}),xt.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Torus"})]})]})]}),xt.jsxs("div",{className:"space-y-4",children:[xt.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[xt.jsx(cR,{size:12})," Visualization"]}),xt.jsxs("div",{className:"flex items-center justify-between px-2",children:[xt.jsxs("div",{className:"flex items-center gap-2",children:[xt.jsx(U0,{size:12,className:"text-zinc-500"}),xt.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Geo Grid"})]}),xt.jsx("button",{onClick:v,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${r.showGrid?"bg-emerald-600 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:xt.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${r.showGrid?"translate-x-5":"translate-x-0"}`})})]}),xt.jsxs("div",{className:"flex items-center justify-between px-2",children:[xt.jsxs("div",{className:"flex items-center gap-2",children:[xt.jsx(LA,{size:12,className:"text-zinc-500"}),xt.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Atmosphere"})]}),xt.jsx("button",{onClick:g,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${r.viewMode==="SPHERE"&&r.showAtmosphere?"bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:xt.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${r.viewMode==="SPHERE"&&r.showAtmosphere?"translate-x-5":"translate-x-0"}`})})]}),xt.jsxs("div",{className:"flex items-center justify-between px-2",children:[xt.jsxs("div",{className:"flex items-center gap-2",children:[xt.jsx(O0,{size:12,className:"text-zinc-500"}),xt.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Auto Rotate"})]}),xt.jsx("button",{onClick:S,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${r.autoRotate?"bg-amber-600 border-amber-400 shadow-[0_0_10px_rgba(217,119,6,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:xt.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${r.autoRotate?"translate-x-5":"translate-x-0"}`})})]})]}),xt.jsx("div",{className:"pt-10 border-t border-white/5",children:xt.jsxs("div",{className:"flex items-start gap-4 p-5 bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl",children:[xt.jsx(qA,{className:"text-blue-500/60 shrink-0 mt-0.5",size:16}),xt.jsxs("p",{className:"text-[10px] text-zinc-500 leading-relaxed font-medium",children:["Licensed under ",xt.jsx("a",{href:"https://github.com/arand4/Projection-lab/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline",children:"GNU GPL v3"}),". View source on ",xt.jsx("a",{href:"https://github.com/arand4/Projection-lab",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline",children:"GitHub"}),"."]})]})})]}),xt.jsx("div",{className:"mt-auto pt-6 text-[8px] text-zinc-800 text-center font-mono uppercase tracking-[0.5em]",children:"Projection Lab v43"})]})})]})},vv=document.getElementById("root");if(!vv)throw new Error("Could not find root element to mount to");const dR=OS.createRoot(vv);dR.render(xt.jsx(wh.StrictMode,{children:xt.jsx(hR,{})}));
