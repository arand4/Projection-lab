(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function b0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yf={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function dS(){if(lg)return Co;lg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var cg;function pS(){return cg||(cg=1,Yf.exports=dS()),Yf.exports}var Ot=pS(),qf={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function mS(){if(ug)return ee;ug=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function _(L,J,vt){this.props=L,this.context=J,this.refs=y,this.updater=vt||b}_.prototype.isReactComponent={},_.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function I(){}I.prototype=_.prototype;function N(L,J,vt){this.props=L,this.context=J,this.refs=y,this.updater=vt||b}var D=N.prototype=new I;D.constructor=N,R(D,_.prototype),D.isPureReactComponent=!0;var st=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(L,J,vt){var j=vt.ref;return{$$typeof:o,type:L,key:J,ref:j!==void 0?j:null,props:vt}}function C(L,J){return w(L.type,J,L.props)}function F(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function lt(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return J[vt]})}var it=/\/+/g;function pt(L,J){return typeof L=="object"&&L!==null&&L.key!=null?lt(""+L.key):J.toString(36)}function dt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(H,H):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,J,vt,j,ct){var Et=typeof L;(Et==="undefined"||Et==="boolean")&&(L=null);var yt=!1;if(L===null)yt=!0;else switch(Et){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(L.$$typeof){case o:case e:yt=!0;break;case v:return yt=L._init,O(yt(L._payload),J,vt,j,ct)}}if(yt)return ct=ct(L),yt=j===""?"."+pt(L,0):j,st(ct)?(vt="",yt!=null&&(vt=yt.replace(it,"$&/")+"/"),O(ct,J,vt,"",function(ne){return ne})):ct!=null&&(F(ct)&&(ct=C(ct,vt+(ct.key==null||L&&L.key===ct.key?"":(""+ct.key).replace(it,"$&/")+"/")+yt)),J.push(ct)),1;yt=0;var Ht=j===""?".":j+":";if(st(L))for(var Ft=0;Ft<L.length;Ft++)j=L[Ft],Et=Ht+pt(j,Ft),yt+=O(j,J,vt,Et,ct);else if(Ft=M(L),typeof Ft=="function")for(L=Ft.call(L),Ft=0;!(j=L.next()).done;)j=j.value,Et=Ht+pt(j,Ft++),yt+=O(j,J,vt,Et,ct);else if(Et==="object"){if(typeof L.then=="function")return O(dt(L),J,vt,j,ct);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return yt}function V(L,J,vt){if(L==null)return L;var j=[],ct=0;return O(L,j,"","",function(Et){return J.call(vt,Et,ct++)}),j}function q(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var St=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},xt={map:V,forEach:function(L,J,vt){V(L,function(){J.apply(this,arguments)},vt)},count:function(L){var J=0;return V(L,function(){J++}),J},toArray:function(L){return V(L,function(J){return J})||[]},only:function(L){if(!F(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ee.Activity=x,ee.Children=xt,ee.Component=_,ee.Fragment=i,ee.Profiler=l,ee.PureComponent=N,ee.StrictMode=s,ee.Suspense=m,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ee.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},ee.cache=function(L){return function(){return L.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(L,J,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var j=R({},L.props),ct=L.key;if(J!=null)for(Et in J.key!==void 0&&(ct=""+J.key),J)!Z.call(J,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&J.ref===void 0||(j[Et]=J[Et]);var Et=arguments.length-2;if(Et===1)j.children=vt;else if(1<Et){for(var yt=Array(Et),Ht=0;Ht<Et;Ht++)yt[Ht]=arguments[Ht+2];j.children=yt}return w(L.type,ct,j)},ee.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ee.createElement=function(L,J,vt){var j,ct={},Et=null;if(J!=null)for(j in J.key!==void 0&&(Et=""+J.key),J)Z.call(J,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(ct[j]=J[j]);var yt=arguments.length-2;if(yt===1)ct.children=vt;else if(1<yt){for(var Ht=Array(yt),Ft=0;Ft<yt;Ft++)Ht[Ft]=arguments[Ft+2];ct.children=Ht}if(L&&L.defaultProps)for(j in yt=L.defaultProps,yt)ct[j]===void 0&&(ct[j]=yt[j]);return w(L,Et,ct)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(L){return{$$typeof:d,render:L}},ee.isValidElement=F,ee.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:q}},ee.memo=function(L,J){return{$$typeof:p,type:L,compare:J===void 0?null:J}},ee.startTransition=function(L){var J=P.T,vt={};P.T=vt;try{var j=L(),ct=P.S;ct!==null&&ct(vt,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(H,St)}catch(Et){St(Et)}finally{J!==null&&vt.types!==null&&(J.types=vt.types),P.T=J}},ee.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ee.use=function(L){return P.H.use(L)},ee.useActionState=function(L,J,vt){return P.H.useActionState(L,J,vt)},ee.useCallback=function(L,J){return P.H.useCallback(L,J)},ee.useContext=function(L){return P.H.useContext(L)},ee.useDebugValue=function(){},ee.useDeferredValue=function(L,J){return P.H.useDeferredValue(L,J)},ee.useEffect=function(L,J){return P.H.useEffect(L,J)},ee.useEffectEvent=function(L){return P.H.useEffectEvent(L)},ee.useId=function(){return P.H.useId()},ee.useImperativeHandle=function(L,J,vt){return P.H.useImperativeHandle(L,J,vt)},ee.useInsertionEffect=function(L,J){return P.H.useInsertionEffect(L,J)},ee.useLayoutEffect=function(L,J){return P.H.useLayoutEffect(L,J)},ee.useMemo=function(L,J){return P.H.useMemo(L,J)},ee.useOptimistic=function(L,J){return P.H.useOptimistic(L,J)},ee.useReducer=function(L,J,vt){return P.H.useReducer(L,J,vt)},ee.useRef=function(L){return P.H.useRef(L)},ee.useState=function(L){return P.H.useState(L)},ee.useSyncExternalStore=function(L,J,vt){return P.H.useSyncExternalStore(L,J,vt)},ee.useTransition=function(){return P.H.useTransition()},ee.version="19.2.4",ee}var fg;function md(){return fg||(fg=1,qf.exports=mS()),qf.exports}var qe=md();const _S=b0(qe);var jf={exports:{}},wo={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function gS(){return hg||(hg=1,(function(o){function e(O,V){var q=O.length;O.push(V);t:for(;0<q;){var St=q-1>>>1,xt=O[St];if(0<l(xt,V))O[St]=V,O[q]=xt,q=St;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var V=O[0],q=O.pop();if(q!==V){O[0]=q;t:for(var St=0,xt=O.length,L=xt>>>1;St<L;){var J=2*(St+1)-1,vt=O[J],j=J+1,ct=O[j];if(0>l(vt,q))j<xt&&0>l(ct,vt)?(O[St]=ct,O[j]=q,St=j):(O[St]=vt,O[J]=q,St=J);else if(j<xt&&0>l(ct,q))O[St]=ct,O[j]=q,St=j;else break t}}return V}function l(O,V){var q=O.sortIndex-V.sortIndex;return q!==0?q:O.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,x=null,S=3,M=!1,b=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=O)s(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function st(O){if(R=!1,D(O),!b)if(i(m)!==null)b=!0,H||(H=!0,lt());else{var V=i(p);V!==null&&dt(st,V.startTime-O)}}var H=!1,P=-1,Z=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<Z)}function F(){if(y=!1,H){var O=o.unstable_now();w=O;var V=!0;try{t:{b=!1,R&&(R=!1,I(P),P=-1),M=!0;var q=S;try{e:{for(D(O),x=i(m);x!==null&&!(x.expirationTime>O&&C());){var St=x.callback;if(typeof St=="function"){x.callback=null,S=x.priorityLevel;var xt=St(x.expirationTime<=O);if(O=o.unstable_now(),typeof xt=="function"){x.callback=xt,D(O),V=!0;break e}x===i(m)&&s(m),D(O)}else s(m);x=i(m)}if(x!==null)V=!0;else{var L=i(p);L!==null&&dt(st,L.startTime-O),V=!1}}break t}finally{x=null,S=q,M=!1}V=void 0}}finally{V?lt():H=!1}}}var lt;if(typeof N=="function")lt=function(){N(F)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,pt=it.port2;it.port1.onmessage=F,lt=function(){pt.postMessage(null)}}else lt=function(){_(F,0)};function dt(O,V){P=_(function(){O(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var q=S;S=V;try{return O()}finally{S=q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=S;S=O;try{return V()}finally{S=q}},o.unstable_scheduleCallback=function(O,V,q){var St=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=q+xt,O={id:v++,callback:V,priorityLevel:O,startTime:q,expirationTime:xt,sortIndex:-1},q>St?(O.sortIndex=q,e(p,O),i(m)===null&&O===i(p)&&(R?(I(P),P=-1):R=!0,dt(st,q-St))):(O.sortIndex=xt,e(m,O),b||M||(b=!0,H||(H=!0,lt()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var V=S;return function(){var q=S;S=V;try{return O.apply(this,arguments)}finally{S=q}}}})(Kf)),Kf}var dg;function vS(){return dg||(dg=1,Zf.exports=gS()),Zf.exports}var Qf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function xS(){if(pg)return Rn;pg=1;var o=md();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},Rn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var mg;function SS(){if(mg)return Qf.exports;mg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qf.exports=xS(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function yS(){if(_g)return wo;_g=1;var o=vS(),e=md(),i=SS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,r=f;break}if(E===r){g=!0,r=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,r=c;break}if(E===r){g=!0,r=f,a=c;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case st:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var dt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],xt=-1;function L(t){return{current:t}}function J(t){0>xt||(t.current=St[xt],St[xt]=null,xt--)}function vt(t,n){xt++,St[xt]=t.current,t.current=n}var j=L(null),ct=L(null),Et=L(null),yt=L(null);function Ht(t,n){switch(vt(Et,n),vt(ct,t),vt(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?U_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=U_(n),t=L_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(j),vt(j,t)}function Ft(){J(j),J(ct),J(Et)}function ne(t){t.memoizedState!==null&&vt(yt,t);var n=j.current,a=L_(n,t.type);n!==a&&(vt(ct,t),vt(j,a))}function Le(t){ct.current===t&&(J(j),J(ct)),yt.current===t&&(J(yt),To._currentValue=q)}var fe,ke;function W(t){if(fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);fe=n&&n[1]||"",ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fe+t+ke}var Tn=!1;function ce(t,n){if(!t||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(rt){var $=rt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(rt){$=rt}t.call(_t.prototype)}}else{try{throw Error()}catch(rt){$=rt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(rt){if(rt&&$&&typeof rt.stack=="string")return[rt.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var z=g.split(`
`),Q=E.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===Q.length)for(r=z.length-1,c=Q.length-1;1<=r&&0<=c&&z[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==Q[c]){var ut=`
`+z[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=c);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?W(a):""}function pe(t,n){switch(t.tag){case 26:case 27:case 5:return W(t.type);case 16:return W("Lazy");case 13:return t.child!==n&&n!==null?W("Suspense Fallback"):W("Suspense");case 19:return W("SuspenseList");case 0:case 15:return ce(t.type,!1);case 11:return ce(t.type.render,!1);case 1:return ce(t.type,!0);case 31:return W("Activity");default:return""}}function Zt(t){try{var n="",a=null;do n+=pe(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Re=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,T=o.unstable_shouldYield,tt=o.unstable_requestPaint,ft=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,me=o.unstable_IdlePriority,bt=o.log,zt=o.unstable_setDisableYieldValue,jt=null,Wt=null;function Nt(t){if(typeof bt=="function"&&zt(t),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(jt,t)}catch{}}var Jt=Math.clz32?Math.clz32:G,ae=Math.log,Ne=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(ae(t)/Ne|0)|0}var At=256,ot=262144,gt=4194304;function Rt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ut(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Rt(r):(g&=E,g!==0?c=Rt(g):a||(a=E&~t,a!==0&&(c=Rt(a))))):(E=r&~f,E!==0?c=Rt(E):g!==0?c=Rt(g):a||(a=r&~t,a!==0&&(c=Rt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Xe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function on(){var t=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),t}function ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _n(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function di(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ut=31-Jt(a),_t=1<<ut;E[ut]=0,z[ut]=-1;var $=Q[ut];if($!==null)for(Q[ut]=null,ut=0;ut<$.length;ut++){var rt=$[ut];rt!==null&&(rt.lane&=-536870913)}a&=~_t}r!==0&&zr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function zr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Jt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ir(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Jt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function bi(t,n){var a=n&-n;return a=(a&42)!==0?1:Za(a),(a&(t.suspendedLanes|n))!==0?0:a}function Za(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Cs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Br(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:eg(t.type))}function Ka(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var pi=Math.random().toString(36).slice(2),je="__reactFiber$"+pi,gn="__reactProps$"+pi,Oi="__reactContainer$"+pi,Fr="__reactEvents$"+pi,Fc="__reactListeners$"+pi,Hc="__reactHandles$"+pi,A="__reactResources$"+pi,k="__reactMarker$"+pi;function at(t){delete t[je],delete t[gn],delete t[Fr],delete t[Fc],delete t[Hc]}function nt(t){var n=t[je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Oi]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=F_(t);t!==null;){if(a=t[je])return a;t=F_(t)}return n}t=a,a=t.parentNode}return null}function X(t){if(t=t[je]||t[Oi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Tt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ct(t){var n=t[A];return n||(n=t[A]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function wt(t){t[k]=!0}var Gt=new Set,te={};function Qt(t,n){It(t,n),It(t+"Capture",n)}function It(t,n){for(te[t]=n,t=0;t<n.length;t++)Gt.add(n[t])}var Se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ce={},Oe={};function bn(t){return Re.call(Oe,t)?!0:Re.call(Ce,t)?!1:Se.test(t)?Oe[t]=!0:(Ce[t]=!0,!1)}function ve(t,n,a){if(bn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Vt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ln(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ie(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ha(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function vn(t){if(!t._valueTracker){var n=Nn(t)?"checked":"value";t._valueTracker=ha(t,n,""+t[n])}}function da(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Nn(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Ae(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $n=/[\n"\\]/g;function dn(t){return t.replace($n,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,r,c,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ie(n)):t.value!==""+ie(n)&&(t.value=""+ie(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?ti(t,g,ie(n)):a!=null?ti(t,g,ie(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ie(E):t.removeAttribute("name")}function mi(t,n,a,r,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){vn(t);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),vn(t)}function ti(t,n,a){n==="number"&&Ae(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Pi(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ad(t,n,a){if(n!=null&&(n=""+ie(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ie(a):""}function Rd(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(dt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ie(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),vn(t)}function ws(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var lv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cd(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||lv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function wd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Cd(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Cd(t,f,n[f])}function Gc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(t){return uv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Vc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ds=null,Us=null;function Dd(t){var n=X(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[gn]||null;if(!c)throw Error(s(90));An(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&da(r)}break t;case"textarea":Ad(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Pi(t,!!a.multiple,n,!1)}}}var Xc=!1;function Ud(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var r=t(n);return r}finally{if(Xc=!1,(Ds!==null||Us!==null)&&(Ll(),Ds&&(n=Ds,t=Us,Us=Ds=null,Dd(n),t)))for(n=0;n<t.length;n++)Dd(t[n])}}function Hr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[gn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Ii)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Wc=!1}var pa=null,Yc=null,Yo=null;function Ld(){if(Yo)return Yo;var t,n=Yc,a=n.length,r,c="value"in pa?pa.value:pa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return Yo=c.slice(t,1<r?1-r:void 0)}function qo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function jo(){return!0}function Nd(){return!1}function On(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:Nd,this.isPropagationStopped=Nd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=On(Qa),Vr=x({},Qa,{view:0,detail:0}),fv=On(Vr),qc,jc,kr,Ko=x({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==kr&&(kr&&t.type==="mousemove"?(qc=t.screenX-kr.screenX,jc=t.screenY-kr.screenY):jc=qc=0,kr=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Od=On(Ko),hv=x({},Ko,{dataTransfer:0}),dv=On(hv),pv=x({},Vr,{relatedTarget:0}),Zc=On(pv),mv=x({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),_v=On(mv),gv=x({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vv=On(gv),xv=x({},Qa,{data:0}),Pd=On(xv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Mv[t])?!!n[t]:!1}function Kc(){return Ev}var Tv=x({},Vr,{key:function(t){if(t.key){var n=Sv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bv=On(Tv),Av=x({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=On(Av),Rv=x({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),Cv=On(Rv),wv=x({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dv=On(wv),Uv=x({},Ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lv=On(Uv),Nv=x({},Qa,{newState:0,oldState:0}),Ov=On(Nv),Pv=[9,13,27,32],Qc=Ii&&"CompositionEvent"in window,Xr=null;Ii&&"documentMode"in document&&(Xr=document.documentMode);var zv=Ii&&"TextEvent"in window&&!Xr,Id=Ii&&(!Qc||Xr&&8<Xr&&11>=Xr),Bd=" ",Fd=!1;function Hd(t,n){switch(t){case"keyup":return Pv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function Iv(t,n){switch(t){case"compositionend":return Gd(n);case"keypress":return n.which!==32?null:(Fd=!0,Bd);case"textInput":return t=n.data,t===Bd&&Fd?null:t;default:return null}}function Bv(t,n){if(Ls)return t==="compositionend"||!Qc&&Hd(t,n)?(t=Ld(),Yo=Yc=pa=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Id&&n.locale!=="ko"?null:n.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Fv[t.type]:n==="textarea"}function kd(t,n,a,r){Ds?Us?Us.push(r):Us=[r]:Ds=r,n=Fl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Wr=null,Yr=null;function Hv(t){b_(t,0)}function Qo(t){var n=Tt(t);if(da(n))return t}function Xd(t,n){if(t==="change")return n}var Wd=!1;if(Ii){var Jc;if(Ii){var $c="oninput"in document;if(!$c){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),$c=typeof Yd.oninput=="function"}Jc=$c}else Jc=!1;Wd=Jc&&(!document.documentMode||9<document.documentMode)}function qd(){Wr&&(Wr.detachEvent("onpropertychange",jd),Yr=Wr=null)}function jd(t){if(t.propertyName==="value"&&Qo(Yr)){var n=[];kd(n,Yr,t,kc(t)),Ud(Hv,n)}}function Gv(t,n,a){t==="focusin"?(qd(),Wr=n,Yr=a,Wr.attachEvent("onpropertychange",jd)):t==="focusout"&&qd()}function Vv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(Yr)}function kv(t,n){if(t==="click")return Qo(n)}function Xv(t,n){if(t==="input"||t==="change")return Qo(n)}function Wv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Wv;function qr(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Re.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function Zd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kd(t,n){var a=Zd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zd(a)}}function Qd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Jd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ae(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ae(t.document)}return n}function tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Yv=Ii&&"documentMode"in document&&11>=document.documentMode,Ns=null,eu=null,jr=null,nu=!1;function $d(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Ns==null||Ns!==Ae(r)||(r=Ns,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&qr(jr,r)||(jr=r,r=Fl(eu,"onSelect"),0<r.length&&(n=new Zo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ns)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Os={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},iu={},tp={};Ii&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function $a(t){if(iu[t])return iu[t];if(!Os[t])return t;var n=Os[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in tp)return iu[t]=n[a];return t}var ep=$a("animationend"),np=$a("animationiteration"),ip=$a("animationstart"),qv=$a("transitionrun"),jv=$a("transitionstart"),Zv=$a("transitioncancel"),ap=$a("transitionend"),sp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function _i(t,n){sp.set(t,n),Qt(n,[t])}var Jo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Ps=0,su=0;function $o(){for(var t=Ps,n=su=Ps=0;n<t;){var a=ei[n];ei[n++]=null;var r=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&rp(a,c,f)}}function tl(t,n,a,r){ei[Ps++]=t,ei[Ps++]=n,ei[Ps++]=a,ei[Ps++]=r,su|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function ru(t,n,a,r){return tl(t,n,a,r),el(t)}function ts(t,n){return tl(t,null,null,n),el(t)}function rp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Jt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function el(t){if(50<go)throw go=0,_f=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var zs={};function Kv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,r){return new Kv(t,n,a,r)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function op(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function nl(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")ou(t)&&(g=1);else if(typeof t=="string")g=eS(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Wn(31,a,n,c),t.elementType=w,t.lanes=f,t;case R:return es(a.children,c,f,n);case y:g=8,c|=24;break;case _:return t=Wn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case st:return t=Wn(13,a,n,c),t.elementType=st,t.lanes=f,t;case H:return t=Wn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:g=10;break t;case I:g=9;break t;case D:g=11;break t;case P:g=14;break t;case Z:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function es(t,n,a,r){return t=Wn(7,t,r,n),t.lanes=a,t}function lu(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function lp(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function cu(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var cp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=cp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Zt(n)},cp.set(t,n),n)}return{value:t,source:n,stack:Zt(n)}}var Is=[],Bs=0,il=null,Zr=0,ii=[],ai=0,ma=null,Ai=1,Ri="";function Fi(t,n){Is[Bs++]=Zr,Is[Bs++]=il,il=t,Zr=n}function up(t,n,a){ii[ai++]=Ai,ii[ai++]=Ri,ii[ai++]=ma,ma=t;var r=Ai;t=Ri;var c=32-Jt(r)-1;r&=~(1<<c),a+=1;var f=32-Jt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ai=1<<32-Jt(n)+c|a<<c|r,Ri=f+t}else Ai=1<<f|a<<c|r,Ri=t}function uu(t){t.return!==null&&(Fi(t,1),up(t,1,0))}function fu(t){for(;t===il;)il=Is[--Bs],Is[Bs]=null,Zr=Is[--Bs],Is[Bs]=null;for(;t===ma;)ma=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null,Ai=ii[--ai],ii[ai]=null}function fp(t,n){ii[ai++]=Ai,ii[ai++]=Ri,ii[ai++]=ma,Ai=n.id,Ri=n.overflow,ma=t}var xn=null,Ge=null,xe=!1,_a=null,si=!1,hu=Error(s(519));function ga(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kr(ni(n,t)),hu}function hp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[je]=t,n[gn]=r,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)de(xo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),mi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Rd(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||w_(n.textContent,a)?(r.popover!=null&&(de("beforetoggle",n),de("toggle",n)),r.onScroll!=null&&de("scroll",n),r.onScrollEnd!=null&&de("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||ga(t,!0)}function dp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:xn=xn.return}}function Fs(t){if(t!==xn)return!1;if(!xe)return dp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Uf(t.type,t.memoizedProps)),a=!a),a&&Ge&&ga(t),dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ge=B_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ge=B_(t)}else n===27?(n=Ge,Ua(t.type)?(t=zf,zf=null,Ge=t):Ge=n):Ge=xn?oi(t.stateNode.nextSibling):null;return!0}function ns(){Ge=xn=null,xe=!1}function du(){var t=_a;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),_a=null),t}function Kr(t){_a===null?_a=[t]:_a.push(t)}var pu=L(null),is=null,Hi=null;function va(t,n,a){vt(pu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=pu.current,J(pu)}function mu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function _u(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),mu(f.return,a,t),r||(g=null);break t}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),mu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Hs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=c.type;Xn(c.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(c===yt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}c=c.return}t!==null&&_u(n,t,a,r),n.flags|=262144}function al(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function as(t){is=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return pp(is,t)}function sl(t,n){return is===null&&as(t),pp(t,n)}function pp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(s(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var Qv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Jv=o.unstable_scheduleCallback,$v=o.unstable_NormalPriority,en={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new Qv,data:new Map,refCount:0}}function Qr(t){t.refCount--,t.refCount===0&&Jv($v,function(){t.controller.abort()})}var Jr=null,vu=0,Gs=0,Vs=null;function tx(t,n){if(Jr===null){var a=Jr=[];vu=0,Gs=Mf(),Vs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return vu++,n.then(mp,mp),n}function mp(){if(--vu===0&&Jr!==null){Vs!==null&&(Vs.status="fulfilled");var t=Jr;Jr=null,Gs=0,Vs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ex(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var _p=O.S;O.S=function(t,n){$m=ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&tx(t,n),_p!==null&&_p(t,n)};var ss=L(null);function xu(){var t=ss.current;return t!==null?t:He.pooledCache}function rl(t,n){n===null?vt(ss,ss.current):vt(ss,n.pool)}function gp(){var t=xu();return t===null?null:{parent:en._currentValue,pool:t}}var ks=Error(s(460)),Su=Error(s(474)),ol=Error(s(542)),ll={then:function(){}};function vp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,yp(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=He,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,yp(t),t}throw os=n,ks}}function rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(os=a,ks):a}}var os=null;function Sp(){if(os===null)throw Error(s(459));var t=os;return os=null,t}function yp(t){if(t===ks||t===ol)throw Error(s(483))}var Xs=null,$r=0;function cl(t){var n=$r;return $r+=1,Xs===null&&(Xs=[]),xp(Xs,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ul(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Mp(t){function n(Y,B){if(t){var K=Y.deletions;K===null?(Y.deletions=[B],Y.flags|=16):K.push(B)}}function a(Y,B){if(!t)return null;for(;B!==null;)n(Y,B),B=B.sibling;return null}function r(Y){for(var B=new Map;Y!==null;)Y.key!==null?B.set(Y.key,Y):B.set(Y.index,Y),Y=Y.sibling;return B}function c(Y,B){return Y=Bi(Y,B),Y.index=0,Y.sibling=null,Y}function f(Y,B,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<B?(Y.flags|=67108866,B):K):(Y.flags|=67108866,B)):(Y.flags|=1048576,B)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,B,K,ht){return B===null||B.tag!==6?(B=lu(K,Y.mode,ht),B.return=Y,B):(B=c(B,K),B.return=Y,B)}function z(Y,B,K,ht){var Yt=K.type;return Yt===R?ut(Y,B,K.props.children,ht,K.key):B!==null&&(B.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===Z&&rs(Yt)===B.type)?(B=c(B,K.props),to(B,K),B.return=Y,B):(B=nl(K.type,K.key,K.props,null,Y.mode,ht),to(B,K),B.return=Y,B)}function Q(Y,B,K,ht){return B===null||B.tag!==4||B.stateNode.containerInfo!==K.containerInfo||B.stateNode.implementation!==K.implementation?(B=cu(K,Y.mode,ht),B.return=Y,B):(B=c(B,K.children||[]),B.return=Y,B)}function ut(Y,B,K,ht,Yt){return B===null||B.tag!==7?(B=es(K,Y.mode,ht,Yt),B.return=Y,B):(B=c(B,K),B.return=Y,B)}function _t(Y,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=lu(""+B,Y.mode,K),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case M:return K=nl(B.type,B.key,B.props,null,Y.mode,K),to(K,B),K.return=Y,K;case b:return B=cu(B,Y.mode,K),B.return=Y,B;case Z:return B=rs(B),_t(Y,B,K)}if(dt(B)||lt(B))return B=es(B,Y.mode,K,null),B.return=Y,B;if(typeof B.then=="function")return _t(Y,cl(B),K);if(B.$$typeof===N)return _t(Y,sl(Y,B),K);ul(Y,B)}return null}function $(Y,B,K,ht){var Yt=B!==null?B.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Yt!==null?null:E(Y,B,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Yt?z(Y,B,K,ht):null;case b:return K.key===Yt?Q(Y,B,K,ht):null;case Z:return K=rs(K),$(Y,B,K,ht)}if(dt(K)||lt(K))return Yt!==null?null:ut(Y,B,K,ht,null);if(typeof K.then=="function")return $(Y,B,cl(K),ht);if(K.$$typeof===N)return $(Y,B,sl(Y,K),ht);ul(Y,K)}return null}function rt(Y,B,K,ht,Yt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(K)||null,E(B,Y,""+ht,Yt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return Y=Y.get(ht.key===null?K:ht.key)||null,z(B,Y,ht,Yt);case b:return Y=Y.get(ht.key===null?K:ht.key)||null,Q(B,Y,ht,Yt);case Z:return ht=rs(ht),rt(Y,B,K,ht,Yt)}if(dt(ht)||lt(ht))return Y=Y.get(K)||null,ut(B,Y,ht,Yt,null);if(typeof ht.then=="function")return rt(Y,B,K,cl(ht),Yt);if(ht.$$typeof===N)return rt(Y,B,K,sl(B,ht),Yt);ul(B,ht)}return null}function Bt(Y,B,K,ht){for(var Yt=null,Ee=null,kt=B,re=B=0,ge=null;kt!==null&&re<K.length;re++){kt.index>re?(ge=kt,kt=null):ge=kt.sibling;var Te=$(Y,kt,K[re],ht);if(Te===null){kt===null&&(kt=ge);break}t&&kt&&Te.alternate===null&&n(Y,kt),B=f(Te,B,re),Ee===null?Yt=Te:Ee.sibling=Te,Ee=Te,kt=ge}if(re===K.length)return a(Y,kt),xe&&Fi(Y,re),Yt;if(kt===null){for(;re<K.length;re++)kt=_t(Y,K[re],ht),kt!==null&&(B=f(kt,B,re),Ee===null?Yt=kt:Ee.sibling=kt,Ee=kt);return xe&&Fi(Y,re),Yt}for(kt=r(kt);re<K.length;re++)ge=rt(kt,Y,re,K[re],ht),ge!==null&&(t&&ge.alternate!==null&&kt.delete(ge.key===null?re:ge.key),B=f(ge,B,re),Ee===null?Yt=ge:Ee.sibling=ge,Ee=ge);return t&&kt.forEach(function(za){return n(Y,za)}),xe&&Fi(Y,re),Yt}function Kt(Y,B,K,ht){if(K==null)throw Error(s(151));for(var Yt=null,Ee=null,kt=B,re=B=0,ge=null,Te=K.next();kt!==null&&!Te.done;re++,Te=K.next()){kt.index>re?(ge=kt,kt=null):ge=kt.sibling;var za=$(Y,kt,Te.value,ht);if(za===null){kt===null&&(kt=ge);break}t&&kt&&za.alternate===null&&n(Y,kt),B=f(za,B,re),Ee===null?Yt=za:Ee.sibling=za,Ee=za,kt=ge}if(Te.done)return a(Y,kt),xe&&Fi(Y,re),Yt;if(kt===null){for(;!Te.done;re++,Te=K.next())Te=_t(Y,Te.value,ht),Te!==null&&(B=f(Te,B,re),Ee===null?Yt=Te:Ee.sibling=Te,Ee=Te);return xe&&Fi(Y,re),Yt}for(kt=r(kt);!Te.done;re++,Te=K.next())Te=rt(kt,Y,re,Te.value,ht),Te!==null&&(t&&Te.alternate!==null&&kt.delete(Te.key===null?re:Te.key),B=f(Te,B,re),Ee===null?Yt=Te:Ee.sibling=Te,Ee=Te);return t&&kt.forEach(function(hS){return n(Y,hS)}),xe&&Fi(Y,re),Yt}function Ie(Y,B,K,ht){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var Yt=K.key;B!==null;){if(B.key===Yt){if(Yt=K.type,Yt===R){if(B.tag===7){a(Y,B.sibling),ht=c(B,K.props.children),ht.return=Y,Y=ht;break t}}else if(B.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===Z&&rs(Yt)===B.type){a(Y,B.sibling),ht=c(B,K.props),to(ht,K),ht.return=Y,Y=ht;break t}a(Y,B);break}else n(Y,B);B=B.sibling}K.type===R?(ht=es(K.props.children,Y.mode,ht,K.key),ht.return=Y,Y=ht):(ht=nl(K.type,K.key,K.props,null,Y.mode,ht),to(ht,K),ht.return=Y,Y=ht)}return g(Y);case b:t:{for(Yt=K.key;B!==null;){if(B.key===Yt)if(B.tag===4&&B.stateNode.containerInfo===K.containerInfo&&B.stateNode.implementation===K.implementation){a(Y,B.sibling),ht=c(B,K.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,B);break}else n(Y,B);B=B.sibling}ht=cu(K,Y.mode,ht),ht.return=Y,Y=ht}return g(Y);case Z:return K=rs(K),Ie(Y,B,K,ht)}if(dt(K))return Bt(Y,B,K,ht);if(lt(K)){if(Yt=lt(K),typeof Yt!="function")throw Error(s(150));return K=Yt.call(K),Kt(Y,B,K,ht)}if(typeof K.then=="function")return Ie(Y,B,cl(K),ht);if(K.$$typeof===N)return Ie(Y,B,sl(Y,K),ht);ul(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,B!==null&&B.tag===6?(a(Y,B.sibling),ht=c(B,K),ht.return=Y,Y=ht):(a(Y,B),ht=lu(K,Y.mode,ht),ht.return=Y,Y=ht),g(Y)):a(Y,B)}return function(Y,B,K,ht){try{$r=0;var Yt=Ie(Y,B,K,ht);return Xs=null,Yt}catch(kt){if(kt===ks||kt===ol)throw kt;var Ee=Wn(29,kt,null,Y.mode);return Ee.lanes=ht,Ee.return=Y,Ee}finally{}}}var ls=Mp(!0),Ep=Mp(!1),xa=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(be&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=el(t),rp(t,null,a),n}return tl(t,r,n,a),el(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ir(t,a)}}function Eu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function no(){if(Tu){var t=Vs;if(t!==null)throw t}}function io(t,n,a,r){Tu=!1;var c=t.updateQueue;xa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,Q=z.next;z.next=null,g===null?f=Q:g.next=Q,g=z;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==g&&(E===null?ut.firstBaseUpdate=Q:E.next=Q,ut.lastBaseUpdate=z))}if(f!==null){var _t=c.baseState;g=0,ut=Q=z=null,E=f;do{var $=E.lane&-536870913,rt=$!==E.lane;if(rt?(_e&$)===$:(r&$)===$){$!==0&&$===Gs&&(Tu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Bt=t,Kt=E;$=n;var Ie=a;switch(Kt.tag){case 1:if(Bt=Kt.payload,typeof Bt=="function"){_t=Bt.call(Ie,_t,$);break t}_t=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Kt.payload,$=typeof Bt=="function"?Bt.call(Ie,_t,$):Bt,$==null)break t;_t=x({},_t,$);break t;case 2:xa=!0}}$=E.callback,$!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[$]:rt.push($))}else rt={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(Q=ut=rt,z=_t):ut=ut.next=rt,g|=$;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ut===null&&(z=_t),c.baseState=z,c.firstBaseUpdate=Q,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Aa|=g,t.lanes=g,t.memoizedState=_t}}function Tp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function bp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Tp(a[t],n)}var Ws=L(null),fl=L(0);function Ap(t,n){t=Ki,vt(fl,t),vt(Ws,n),Ki=t|n.baseLanes}function bu(){vt(fl,Ki),vt(Ws,Ws.current)}function Au(){Ki=fl.current,J(Ws),J(fl)}var Yn=L(null),ri=null;function Ma(t){var n=t.alternate;vt(Qe,Qe.current&1),vt(Yn,t),ri===null&&(n===null||Ws.current!==null||n.memoizedState!==null)&&(ri=t)}function Ru(t){vt(Qe,Qe.current),vt(Yn,t),ri===null&&(ri=t)}function Rp(t){t.tag===22?(vt(Qe,Qe.current),vt(Yn,t),ri===null&&(ri=t)):Ea()}function Ea(){vt(Qe,Qe.current),vt(Yn,Yn.current)}function qn(t){J(Yn),ri===t&&(ri=null),J(Qe)}var Qe=L(0);function hl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||Pf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,se=null,Pe=null,nn=null,dl=!1,Ys=!1,cs=!1,pl=0,ao=0,qs=null,nx=0;function Ze(){throw Error(s(321))}function Cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function wu(t,n,a,r,c,f){return Vi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?um:Xu,cs=!1,f=a(r,c),cs=!1,Ys&&(f=wp(n,a,r,c)),Cp(t),f}function Cp(t){O.H=oo;var n=Pe!==null&&Pe.next!==null;if(Vi=0,nn=Pe=se=null,dl=!1,ao=0,qs=null,n)throw Error(s(300));t===null||an||(t=t.dependencies,t!==null&&al(t)&&(an=!0))}function wp(t,n,a,r){se=t;var c=0;do{if(Ys&&(qs=null),ao=0,Ys=!1,25<=c)throw Error(s(301));if(c+=1,nn=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=fm,f=n(a,r)}while(Ys);return f}function ix(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(se.flags|=1024),n}function Du(){var t=pl!==0;return pl=0,t}function Uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Lu(t){if(dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}dl=!1}Vi=0,nn=Pe=se=null,Ys=!1,ao=pl=0,qs=null}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?se.memoizedState=nn=t:nn=nn.next=t,nn}function Je(){if(Pe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=nn===null?se.memoizedState:nn.next;if(n!==null)nn=n,Pe=t;else{if(t===null)throw se.alternate===null?Error(s(467)):Error(s(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},nn===null?se.memoizedState=nn=t:nn=nn.next=t}return nn}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ao;return ao+=1,qs===null&&(qs=[]),t=xp(qs,t,n),n=se,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?um:Xu),t}function _l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===N)return Sn(t)}throw Error(s(438,String(t)))}function Nu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=C;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function gl(t){var n=Je();return Ou(n,Pe,t)}function Ou(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=g=null,z=null,Q=n,ut=!1;do{var _t=Q.lane&-536870913;if(_t!==Q.lane?(_e&_t)===_t:(Vi&_t)===_t){var $=Q.revertLane;if($===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),_t===Gs&&(ut=!0);else if((Vi&$)===$){Q=Q.next,$===Gs&&(ut=!0);continue}else _t={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=_t,g=f):z=z.next=_t,se.lanes|=$,Aa|=$;_t=Q.action,cs&&a(f,_t),f=Q.hasEagerState?Q.eagerState:a(f,_t)}else $={lane:_t,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=$,g=f):z=z.next=$,se.lanes|=_t,Aa|=_t;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?g=f:z.next=E,!Xn(f,t.memoizedState)&&(an=!0,ut&&(a=Vs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=z,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Pu(t){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Xn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Dp(t,n,a){var r=se,c=Je(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Xn((Pe||c).memoizedState,a);if(g&&(c.memoizedState=a,an=!0),c=c.queue,Bu(Np.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||nn!==null&&nn.memoizedState.tag&1){if(r.flags|=2048,js(9,{destroy:void 0},Lp.bind(null,r,c,a,n),null),He===null)throw Error(s(349));f||(Vi&127)!==0||Up(r,n,a)}return a}function Up(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=ml(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Lp(t,n,a,r){n.value=a,n.getSnapshot=r,Op(n)&&Pp(t)}function Np(t,n,a){return a(function(){Op(n)&&Pp(t)})}function Op(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Pp(t){var n=ts(t,2);n!==null&&Fn(n,t,2)}function zu(t){var n=Dn();if(typeof t=="function"){var a=t;if(t=a(),cs){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function zp(t,n,a,r){return t.baseState=a,Ou(t,Pe,typeof r=="function"?r:ki)}function ax(t,n,a,r,c){if(Sl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Ip(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ip(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var E=a(c,r),z=O.S;z!==null&&z(g,E),Bp(t,n,E)}catch(Q){Iu(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,r),Bp(t,n,f)}catch(Q){Iu(t,n,Q)}}function Bp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Fp(t,n,r)},function(r){return Iu(t,n,r)}):Fp(t,n,a)}function Fp(t,n,a){n.status="fulfilled",n.value=a,Hp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ip(t,a)))}function Iu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Hp(n),n=n.next;while(n!==r)}t.action=null}function Hp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Gp(t,n){return n}function Vp(t,n){if(xe){var a=He.formState;if(a!==null){t:{var r=se;if(xe){if(Ge){e:{for(var c=Ge,f=si;c.nodeType!==8;){if(!f){c=null;break e}if(c=oi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ge=oi(c.nextSibling),r=c.data==="F!";break t}}ga(r)}r=!1}r&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gp,lastRenderedState:n},a.queue=r,a=om.bind(null,se,r),r.dispatch=a,r=zu(!1),f=ku.bind(null,se,!1,r.queue),r=Dn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=ax.bind(null,se,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function kp(t){var n=Je();return Xp(n,Pe,t)}function Xp(t,n,a){if(n=Ou(t,n,Gp)[0],t=gl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=so(n)}catch(g){throw g===ks?ol:g}else r=n;n=Je();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,js(9,{destroy:void 0},sx.bind(null,c,a),null)),[r,f,t]}function sx(t,n){t.action=n}function Wp(t){var n=Je(),a=Pe;if(a!==null)return Xp(n,a,t);Je(),n=n.memoizedState,a=Je();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function js(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=se.updateQueue,n===null&&(n=ml(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Yp(){return Je().memoizedState}function vl(t,n,a,r){var c=Dn();se.flags|=t,c.memoizedState=js(1|n,{destroy:void 0},a,r===void 0?null:r)}function xl(t,n,a,r){var c=Je();r=r===void 0?null:r;var f=c.memoizedState.inst;Pe!==null&&r!==null&&Cu(r,Pe.memoizedState.deps)?c.memoizedState=js(n,f,a,r):(se.flags|=t,c.memoizedState=js(1|n,f,a,r))}function qp(t,n){vl(8390656,8,t,n)}function Bu(t,n){xl(2048,8,t,n)}function rx(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=ml(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function jp(t){var n=Je().memoizedState;return rx({ref:n,nextImpl:t}),function(){if((be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Zp(t,n){return xl(4,2,t,n)}function Kp(t,n){return xl(4,4,t,n)}function Qp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Jp(t,n,a){a=a!=null?a.concat([t]):null,xl(4,4,Qp.bind(null,n,t),a)}function Fu(){}function $p(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Cu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function tm(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Cu(n,r[1]))return r[0];if(r=t(),cs){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[r,n],r}function Hu(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=e_(),se.lanes|=t,Aa|=t,a)}function em(t,n,a,r){return Xn(a,n)?a:Ws.current!==null?(t=Hu(t,a,r),Xn(t,n)||(an=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(_e&261930)===0?(an=!0,t.memoizedState=a):(t=e_(),se.lanes|=t,Aa|=t,n)}function nm(t,n,a,r,c){var f=V.p;V.p=f!==0&&8>f?f:8;var g=O.T,E={};O.T=E,ku(t,!1,n,a);try{var z=c(),Q=O.S;if(Q!==null&&Q(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=ex(z,r);ro(t,n,ut,Kn(t))}else ro(t,n,r,Kn(t))}catch(_t){ro(t,n,{then:function(){},status:"rejected",reason:_t},Kn())}finally{V.p=f,g!==null&&E.types!==null&&(g.types=E.types),O.T=g}}function ox(){}function Gu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=im(t).queue;nm(t,c,n,q,a===null?ox:function(){return am(t),a(r)})}function im(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function am(t){var n=im(t);n.next===null&&(n=t.alternate.memoizedState),ro(t,n.next.queue,{},Kn())}function Vu(){return Sn(To)}function sm(){return Je().memoizedState}function rm(){return Je().memoizedState}function lx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=Sa(a);var r=ya(n,t,a);r!==null&&(Fn(r,n,a),eo(r,n,a)),n={cache:gu()},t.payload=n;return}n=n.return}}function cx(t,n,a){var r=Kn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(t)?lm(n,a):(a=ru(t,n,a,r),a!==null&&(Fn(a,t,r),cm(a,n,r)))}function om(t,n,a){var r=Kn();ro(t,n,a,r)}function ro(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(t))lm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Xn(E,g))return tl(t,n,c,0),He===null&&$o(),!1}catch{}finally{}if(a=ru(t,n,c,r),a!==null)return Fn(a,t,r),cm(a,n,r),!0}return!1}function ku(t,n,a,r){if(r={lane:2,revertLane:Mf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Sl(t)){if(n)throw Error(s(479))}else n=ru(t,a,r,2),n!==null&&Fn(n,t,2)}function Sl(t){var n=t.alternate;return t===se||n!==null&&n===se}function lm(t,n){Ys=dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function cm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ir(t,a)}}var oo={readContext:Sn,use:_l,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};oo.useEffectEvent=Ze;var um={readContext:Sn,use:_l,useCallback:function(t,n){return Dn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:qp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,vl(4194308,4,Qp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return vl(4194308,4,t,n)},useInsertionEffect:function(t,n){vl(4,2,t,n)},useMemo:function(t,n){var a=Dn();n=n===void 0?null:n;var r=t();if(cs){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Dn();if(a!==void 0){var c=a(n);if(cs){Nt(!0);try{a(n)}finally{Nt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=cx.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var n=Dn();return t={current:t},n.memoizedState=t},useState:function(t){t=zu(t);var n=t.queue,a=om.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Dn();return Hu(a,t,n)},useTransition:function(){var t=zu(!1);return t=nm.bind(null,se,t.queue,!0,!1),Dn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=se,c=Dn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),He===null)throw Error(s(349));(_e&127)!==0||Up(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,qp(Np.bind(null,r,f,t),[t]),r.flags|=2048,js(9,{destroy:void 0},Lp.bind(null,r,f,a,n),null),a},useId:function(){var t=Dn(),n=He.identifierPrefix;if(xe){var a=Ri,r=Ai;a=(r&~(1<<32-Jt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=nx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:Vp,useActionState:Vp,useOptimistic:function(t){var n=Dn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return Dn().memoizedState=lx.bind(null,se)},useEffectEvent:function(t){var n=Dn(),a={impl:t};return n.memoizedState=a,function(){if((be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:Sn,use:_l,useCallback:$p,useContext:Sn,useEffect:Bu,useImperativeHandle:Jp,useInsertionEffect:Zp,useLayoutEffect:Kp,useMemo:tm,useReducer:gl,useRef:Yp,useState:function(){return gl(ki)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Je();return em(a,Pe.memoizedState,t,n)},useTransition:function(){var t=gl(ki)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Dp,useId:sm,useHostTransitionStatus:Vu,useFormState:kp,useActionState:kp,useOptimistic:function(t,n){var a=Je();return zp(a,Pe,t,n)},useMemoCache:Nu,useCacheRefresh:rm};Xu.useEffectEvent=jp;var fm={readContext:Sn,use:_l,useCallback:$p,useContext:Sn,useEffect:Bu,useImperativeHandle:Jp,useInsertionEffect:Zp,useLayoutEffect:Kp,useMemo:tm,useReducer:Pu,useRef:Yp,useState:function(){return Pu(ki)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Je();return Pe===null?Hu(a,t,n):em(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Pu(ki)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Dp,useId:sm,useHostTransitionStatus:Vu,useFormState:Wp,useActionState:Wp,useOptimistic:function(t,n){var a=Je();return Pe!==null?zp(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:rm};fm.useEffectEvent=jp;function Wu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Yu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Kn(),c=Sa(r);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,r),n!==null&&(Fn(n,t,r),eo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Kn(),c=Sa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,r),n!==null&&(Fn(n,t,r),eo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),r=Sa(a);r.tag=2,n!=null&&(r.callback=n),n=ya(t,r,a),n!==null&&(Fn(n,t,a),eo(n,t,a))}};function hm(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!qr(a,r)||!qr(c,f):!0}function dm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Yu.enqueueReplaceState(n,n.state,null)}function us(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function pm(t){Jo(t)}function mm(t){console.error(t)}function _m(t){Jo(t)}function yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function gm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(t,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(t,n)},a}function vm(t){return t=Sa(t),t.tag=3,t}function xm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){gm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){gm(n,a,r),typeof c!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function ux(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Hs(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Nl():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),xf(t,r,c)),!1;case 22:return a.flags|=65536,r===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),xf(t,r,c)),!1}throw Error(s(435,a.tag))}return xf(t,r,c),Nl(),!1}if(xe)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==hu&&(t=Error(s(422),{cause:r}),Kr(ni(t,a)))):(r!==hu&&(n=Error(s(423),{cause:r}),Kr(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ni(r,a),c=qu(t.stateNode,r,c),Eu(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:r});if(f=ni(f,a),_o===null?_o=[f]:_o.push(f),Ke!==4&&(Ke=2),n===null)return!0;r=ni(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=qu(a.stateNode,r,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=vm(c),xm(c,t,a,r),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var ju=Error(s(461)),an=!1;function yn(t,n,a,r){n.child=t===null?Ep(n,null,a,r):ls(n,t.child,a,r)}function Sm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return as(n),r=wu(t,n,a,g,f,c),E=Du(),t!==null&&!an?(Uu(t,n,c),Xi(t,n,c)):(xe&&E&&uu(n),n.flags|=1,yn(t,n,r,c),n.child)}function ym(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Mm(t,n,f,r,c)):(t=nl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(g,r)&&t.ref===n.ref)return Xi(t,n,c)}return n.flags|=1,t=Bi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Mm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(qr(f,r)&&t.ref===n.ref)if(an=!1,n.pendingProps=r=f,nf(t,c))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,Xi(t,n,c)}return Zu(t,n,a,r,c)}function Em(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Tm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&rl(n,f!==null?f.cachePool:null),f!==null?Ap(n,f):bu(),Rp(n);else return r=n.lanes=536870912,Tm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(rl(n,f.cachePool),Ap(n,f),Ea(),n.memoizedState=null):(t!==null&&rl(n,null),bu(),Ea());return yn(t,n,c,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Tm(t,n,a,r,c){var f=xu();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&rl(n,null),bu(),Rp(n),t!==null&&Hs(t,n,r,!0),n.childLanes=c,null}function Ml(t,n){return n=Tl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function bm(t,n,a){return ls(n,t.child,null,a),t=Ml(n,n.pendingProps),t.flags|=2,qn(n),n.memoizedState=null,t}function fx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=Ml(n,r),n.lanes=536870912,lo(null,t);if(Ru(n),(t=Ge)?(t=I_(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ma!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=lp(t),a.return=n,n.child=a,xn=n,Ge=null)):t=null,t===null)throw ga(n);return n.lanes=536870912,null}return Ml(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Ru(n),c)if(n.flags&256)n.flags&=-257,n=bm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(an||Hs(t,n,a,!1),c=(a&t.childLanes)!==0,an||c){if(r=He,r!==null&&(g=bi(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ts(t,g),Fn(r,t,g),ju;Nl(),n=bm(t,n,a)}else t=f.treeContext,Ge=oi(g.nextSibling),xn=n,xe=!0,_a=null,si=!1,t!==null&&fp(n,t),n=Ml(n,r),n.flags|=4096;return n}return t=Bi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function El(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,r,c){return as(n),a=wu(t,n,a,r,void 0,c),r=Du(),t!==null&&!an?(Uu(t,n,c),Xi(t,n,c)):(xe&&r&&uu(n),n.flags|=1,yn(t,n,a,c),n.child)}function Am(t,n,a,r,c,f){return as(n),n.updateQueue=null,a=wp(n,r,a,c),Cp(t),r=Du(),t!==null&&!an?(Uu(t,n,f),Xi(t,n,f)):(xe&&r&&uu(n),n.flags|=1,yn(t,n,a,f),n.child)}function Rm(t,n,a,r,c){if(as(n),n.stateNode===null){var f=zs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},yu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):zs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Wu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Yu.enqueueReplaceState(f,f.state,null),io(n,r,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=us(a,E);f.props=z;var Q=f.context,ut=a.contextType;g=zs,typeof ut=="object"&&ut!==null&&(g=Sn(ut));var _t=a.getDerivedStateFromProps;ut=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==g)&&dm(n,f,r,g),xa=!1;var $=n.memoizedState;f.state=$,io(n,r,f,c),no(),Q=n.memoizedState,E||$!==Q||xa?(typeof _t=="function"&&(Wu(n,a,_t,r),Q=n.memoizedState),(z=xa||hm(n,a,z,r,$,Q,g))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=g,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Mu(t,n),g=n.memoizedProps,ut=us(a,g),f.props=ut,_t=n.pendingProps,$=f.context,Q=a.contextType,z=zs,typeof Q=="object"&&Q!==null&&(z=Sn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||$!==z)&&dm(n,f,r,z),xa=!1,$=n.memoizedState,f.state=$,io(n,r,f,c),no();var rt=n.memoizedState;g!==_t||$!==rt||xa||t!==null&&t.dependencies!==null&&al(t.dependencies)?(typeof E=="function"&&(Wu(n,a,E,r),rt=n.memoizedState),(ut=xa||hm(n,a,ut,r,$,rt,z)||t!==null&&t.dependencies!==null&&al(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=z,r=ut):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,El(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ls(n,t.child,null,c),n.child=ls(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Xi(t,n,c),t}function Cm(t,n,a,r){return ns(),n.flags|=256,yn(t,n,a,r),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:gp()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Zn),t}function wm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?Ma(n):Ea(),(t=Ge)?(t=I_(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ma!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=lp(t),a.return=n,n.child=a,xn=n,Ge=null)):t=null,t===null)throw ga(n);return Pf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Ea(),c=n.mode,E=Tl({mode:"hidden",children:E},c),r=es(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Qu(a),r.childLanes=Ju(t,g,a),n.memoizedState=Ku,lo(null,r)):(Ma(n),$u(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(Ea(),n.child=t.child,n.flags|=128,n=null):(Ea(),E=r.fallback,c=n.mode,r=Tl({mode:"visible",children:r.children},c),E=es(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,ls(n,t.child,null,a),r=n.child,r.memoizedState=Qu(a),r.childLanes=Ju(t,g,a),n.memoizedState=Ku,n=lo(null,r));else if(Ma(n),Pf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var Q=g.dgst;g=Q,r=Error(s(419)),r.stack="",r.digest=g,Kr({value:r,source:null,stack:null}),n=tf(t,n,a)}else if(an||Hs(t,n,a,!1),g=(a&t.childLanes)!==0,an||g){if(g=He,g!==null&&(r=bi(g,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,ts(t,r),Fn(g,t,r),ju;Of(E)||Nl(),n=tf(t,n,a)}else Of(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Ge=oi(E.nextSibling),xn=n,xe=!0,_a=null,si=!1,t!==null&&fp(n,t),n=$u(n,r.children),n.flags|=4096);return n}return c?(Ea(),E=r.fallback,c=n.mode,z=t.child,Q=z.sibling,r=Bi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,Q!==null?E=Bi(Q,E):(E=es(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,lo(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Qu(a):(c=E.cachePool,c!==null?(z=en._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=gp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Ju(t,g,a),n.memoizedState=Ku,lo(t.child,r)):(Ma(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=Tl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function tf(t,n,a){return ls(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Dm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),mu(t.return,n,a)}function ef(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Um(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=Qe.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,vt(Qe,g),yn(t,n,r,a),r=xe?Zr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dm(t,a,n);else if(t.tag===19)Dm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&hl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&hl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f,r);break;case"together":ef(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Hs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&al(t)))}function hx(t,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),va(n,en,t.memoizedState.cache),ns();break;case 27:case 5:ne(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?wm(t,n,a):(Ma(n),t=Xi(t,n,a),t!==null?t.sibling:null);Ma(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Hs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Um(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt(Qe,Qe.current),r)break;return null;case 22:return n.lanes=0,Em(t,n,a,n.pendingProps);case 24:va(n,en,t.memoizedState.cache)}return Xi(t,n,a)}function Lm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return an=!1,hx(t,n,a);an=(t.flags&131072)!==0}else an=!1,xe&&(n.flags&1048576)!==0&&up(n,Zr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=rs(n.elementType),n.type=t,typeof t=="function")ou(t)?(r=us(t,r),n.tag=1,n=Rm(null,n,t,r,a)):(n.tag=0,n=Zu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Sm(null,n,t,r,a);break t}else if(c===P){n.tag=14,n=ym(null,n,t,r,a);break t}}throw n=pt(t)||t,Error(s(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=us(r,n.pendingProps),Rm(t,n,r,c,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Mu(t,n),io(n,r,null,a);var g=n.memoizedState;if(r=g.cache,va(n,en,r),r!==f.cache&&_u(n,[en],a,!0),no(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Cm(t,n,r,a);break t}else if(r!==c){c=ni(Error(s(424)),n),Kr(c),n=Cm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ge=oi(t.firstChild),xn=n,xe=!0,_a=null,si=!0,a=Ep(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ns(),r===c){n=Xi(t,n,a);break t}yn(t,n,r,a)}n=n.child}return n;case 26:return El(t,n),t===null?(a=k_(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=Hl(Et.current).createElement(a),r[je]=n,r[gn]=t,Mn(r,a,t),wt(r),n.stateNode=r):n.memoizedState=k_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ne(n),t===null&&xe&&(r=n.stateNode=H_(n.type,n.pendingProps,Et.current),xn=n,si=!0,c=Ge,Ua(n.type)?(zf=c,Ge=oi(r.firstChild)):Ge=c),yn(t,n,n.pendingProps.children,a),El(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=r=Ge)&&(r=Vx(r,n.type,n.pendingProps,si),r!==null?(n.stateNode=r,xn=n,Ge=oi(r.firstChild),si=!1,c=!0):c=!1),c||ga(n)),ne(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Uf(c,f)?r=null:g!==null&&Uf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=wu(t,n,ix,null,null,a),To._currentValue=c),El(t,n),yn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=Ge)&&(a=kx(a,n.pendingProps,si),a!==null?(n.stateNode=a,xn=n,Ge=null,t=!0):t=!1),t||ga(n)),null;case 13:return wm(t,n,a);case 4:return Ht(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ls(n,null,r,a):yn(t,n,r,a),n.child;case 11:return Sm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,va(n,n.type,r.value),yn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,as(n),c=Sn(c),r=r(c),n.flags|=1,yn(t,n,r,a),n.child;case 14:return ym(t,n,n.type,n.pendingProps,a);case 15:return Mm(t,n,n.type,n.pendingProps,a);case 19:return Um(t,n,a);case 31:return fx(t,n,a);case 22:return Em(t,n,a,n.pendingProps);case 24:return as(n),r=Sn(en),t===null?(c=xu(),c===null&&(c=He,f=gu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},yu(n),va(n,en,c)):((t.lanes&a)!==0&&(Mu(t,n),io(n,null,null,a),no()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,en,r)):(r=f.cache,va(n,en,r),r!==c.cache&&_u(n,[en],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Wi(t){t.flags|=4}function af(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(s_())t.flags|=8192;else throw os=ll,Su}else t.flags&=-16777217}function Nm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!j_(n))if(s_())t.flags|=8192;else throw os=ll,Su}function bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?on():536870912,t.lanes|=n,Js|=n)}function co(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ve(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function dx(t,n,a){var r=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Gi(en),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fs(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),Ve(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(Ve(n),Nm(n,f)):(Ve(n),af(n,c,null,r,a))):f?f!==t.memoizedState?(Wi(n),Ve(n),Nm(n,f)):(Ve(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Wi(n),Ve(n),af(n,c,t,r,a)),null;case 27:if(Le(n),a=Et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Wi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}t=j.current,Fs(n)?hp(n):(t=H_(c,r,a),n.stateNode=t,Wi(n))}return Ve(n),null;case 5:if(Le(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Wi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(f=j.current,Fs(n))hp(n);else{var g=Hl(Et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[je]=n,f[gn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Mn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Wi(n)}}return Ve(n),af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Wi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Et.current,Fs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[je]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||w_(t.nodeValue,a)),t||ga(n,!0)}else t=Hl(t).createTextNode(r),t[je]=n,n.stateNode=t}return Ve(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Fs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[je]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ve(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Fs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[je]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else c=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),bl(n,n.updateQueue),Ve(n),null);case 4:return Ft(),t===null&&Af(n.stateNode.containerInfo),Ve(n),null;case 10:return Gi(n.type),Ve(n),null;case 19:if(J(Qe),r=n.memoizedState,r===null)return Ve(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)co(r,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=hl(t),f!==null){for(n.flags|=128,co(r,!1),t=f.updateQueue,n.updateQueue=t,bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)op(a,t),a=a.sibling;return vt(Qe,Qe.current&1|2),xe&&Fi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ft()>Dl&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304)}else{if(!c)if(t=hl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,bl(n,t),co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return Ve(n),null}else 2*ft()-r.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ft(),t.sibling=null,a=Qe.current,vt(Qe,c?a&1|2:a&1),xe&&Fi(n,r.treeForkCount),t):(Ve(n),null);case 22:case 23:return qn(n),Au(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&J(ss),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(en),Ve(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function px(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(en),Ft(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(s(340));ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(Qe),null;case 4:return Ft(),null;case 10:return Gi(n.type),null;case 22:case 23:return qn(n),Au(),t!==null&&J(ss),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(en),null;case 25:return null;default:return null}}function Om(t,n){switch(fu(n),n.tag){case 3:Gi(en),Ft();break;case 26:case 27:case 5:Le(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:J(Qe);break;case 10:Gi(n.type);break;case 22:case 23:qn(n),Au(),t!==null&&J(ss);break;case 24:Gi(en)}}function uo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(E){De(n,n.return,E)}}function Ta(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var z=a,Q=E;try{Q()}catch(ut){De(c,z,ut)}}}r=r.next}while(r!==f)}}catch(ut){De(n,n.return,ut)}}function Pm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bp(n,a)}catch(r){De(t,t.return,r)}}}function zm(t,n,a){a.props=us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){De(t,n,r)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){De(t,n,c)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){De(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){De(t,n,c)}else a.current=null}function Im(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){De(t,t.return,c)}}function sf(t,n,a){try{var r=t.stateNode;zx(r,t.type,a,n),r[gn]=n}catch(c){De(t,t.return,c)}}function Bm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ua(t.type)||t.tag===4}function rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Bm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ua(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(r!==4&&(r===27&&Ua(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(of(t,n,a),t=t.sibling;t!==null;)of(t,n,a),t=t.sibling}function Al(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ua(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Al(t,n,a),t=t.sibling;t!==null;)Al(t,n,a),t=t.sibling}function Fm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,r,a),n[je]=t,n[gn]=a}catch(f){De(t,t.return,f)}}var Yi=!1,sn=!1,lf=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function mx(t,n){if(t=t.containerInfo,wf=ql,t=Jd(t),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,z=-1,Q=0,ut=0,_t=t,$=null;e:for(;;){for(var rt;_t!==a||c!==0&&_t.nodeType!==3||(E=g+c),_t!==f||r!==0&&_t.nodeType!==3||(z=g+r),_t.nodeType===3&&(g+=_t.nodeValue.length),(rt=_t.firstChild)!==null;)$=_t,_t=rt;for(;;){if(_t===t)break e;if($===a&&++Q===c&&(E=g),$===f&&++ut===r&&(z=g),(rt=_t.nextSibling)!==null)break;_t=$,$=_t.parentNode}_t=rt}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:t,selectionRange:a},ql=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Bt=us(a.type,c);t=r.getSnapshotBeforeUpdate(Bt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){De(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Gm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),r&4&&uo(5,a);break;case 1:if(ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){De(a,a.return,g)}else{var c=us(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){De(a,a.return,g)}}r&64&&Pm(a),r&512&&fo(a,a.return);break;case 3:if(ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bp(t,n)}catch(g){De(a,a.return,g)}}break;case 27:n===null&&r&4&&Fm(a);case 26:case 5:ji(t,a),n===null&&r&4&&Im(a),r&512&&fo(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),r&4&&Xm(t,a);break;case 13:ji(t,a),r&4&&Wm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Tx.bind(null,a),Xx(t,a))));break;case 22:if(r=a.memoizedState!==null||Yi,!r){n=n!==null&&n.memoizedState!==null||sn,c=Yi;var f=sn;Yi=r,(sn=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),Yi=c,sn=f}break;case 30:break;default:ji(t,a)}}function Vm(t){var n=t.alternate;n!==null&&(t.alternate=null,Vm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&at(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,Pn=!1;function qi(t,n,a){for(a=a.child;a!==null;)km(t,n,a),a=a.sibling}function km(t,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:sn||Ci(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ci(a,n);var r=We,c=Pn;Ua(a.type)&&(We=a.stateNode,Pn=!1),qi(t,n,a),yo(a.stateNode),We=r,Pn=c;break;case 5:sn||Ci(a,n);case 6:if(r=We,c=Pn,We=null,qi(t,n,a),We=r,Pn=c,We!==null)if(Pn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){De(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){De(a,n,f)}break;case 18:We!==null&&(Pn?(t=We,P_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),rr(t)):P_(We,a.stateNode));break;case 4:r=We,c=Pn,We=a.stateNode.containerInfo,Pn=!0,qi(t,n,a),We=r,Pn=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),sn||Ta(4,a,n),qi(t,n,a);break;case 1:sn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&zm(a,n,r)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:sn=(r=sn)||a.memoizedState!==null,qi(t,n,a),sn=r;break;default:qi(t,n,a)}}function Xm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{rr(t)}catch(a){De(n,n.return,a)}}}function Wm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{rr(t)}catch(a){De(n,n.return,a)}}function _x(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Hm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Hm),n;default:throw Error(s(435,t.tag))}}function Rl(t,n){var a=_x(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=bx.bind(null,t,r);r.then(c,c)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Ua(E.type)){We=E.stateNode,Pn=!1;break t}break;case 5:We=E.stateNode,Pn=!1;break t;case 3:case 4:We=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(We===null)throw Error(s(160));km(f,g,c),We=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ym(n,t),n=n.sibling}var gi=null;function Ym(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),In(t),r&4&&(Ta(3,t,t.return),uo(3,t),Ta(5,t,t.return));break;case 1:zn(n,t),In(t),r&512&&(sn||a===null||Ci(a,a.return)),r&64&&Yi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=gi;if(zn(n,t),In(t),r&512&&(sn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[k]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,r,a),f[je]=t,wt(f),r=f;break t;case"link":var g=Y_("link","href",c).get(r+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=Y_("meta","content",c).get(r+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[je]=t,wt(f),r=f}t.stateNode=r}else q_(c,t.type,t.stateNode);else t.stateNode=W_(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?q_(c,t.type,t.stateNode):W_(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),In(t),r&512&&(sn||a===null||Ci(a,a.return)),a!==null&&r&4&&sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),In(t),r&512&&(sn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{ws(c,"")}catch(Bt){De(t,t.return,Bt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,sf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(lf=!0);break;case 6:if(zn(n,t),In(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Bt){De(t,t.return,Bt)}}break;case 3:if(kl=null,c=gi,gi=Gl(n.containerInfo),zn(n,t),gi=c,In(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(Bt){De(t,t.return,Bt)}lf&&(lf=!1,qm(t));break;case 4:r=gi,gi=Gl(t.stateNode.containerInfo),zn(n,t),In(t),gi=r;break;case 12:zn(n,t),In(t);break;case 31:zn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Rl(t,r)));break;case 13:zn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wl=ft()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Rl(t,r)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,Q=Yi,ut=sn;if(Yi=Q||c,sn=ut||z,zn(n,t),sn=ut,Yi=Q,In(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Yi||sn||fs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=z.stateNode;var _t=z.memoizedProps.style,$=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Bt){De(z,z.return,Bt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Bt){De(z,z.return,Bt)}}}else if(n.tag===18){if(a===null){z=n;try{var rt=z.stateNode;c?z_(rt,!0):z_(z.stateNode,!1)}catch(Bt){De(z,z.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Rl(t,a))));break;case 19:zn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Rl(t,r)));break;case 30:break;case 21:break;default:zn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Bm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=rf(t);Al(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(ws(g,""),a.flags&=-33);var E=rf(t);Al(t,E,g);break;case 3:case 4:var z=a.stateNode.containerInfo,Q=rf(t);of(t,Q,z);break;default:throw Error(s(161))}}catch(ut){De(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;qm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gm(t,n.alternate,n),n=n.sibling}function fs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),fs(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&zm(n,n.return,a),fs(n);break;case 27:yo(n.stateNode);case 26:case 5:Ci(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),uo(4,f);break;case 1:if(Zi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){De(r,r.return,Q)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Tp(z[c],E)}catch(Q){De(r,r.return,Q)}}a&&g&64&&Pm(f),fo(f,f.return);break;case 27:Fm(f);case 26:case 5:Zi(c,f,a),a&&r===null&&g&4&&Im(f),fo(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&g&4&&Xm(c,f);break;case 13:Zi(c,f,a),a&&g&4&&Wm(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),fo(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qr(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t))}function vi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jm(t,n,a,r),n=n.sibling}function jm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,r),c&2048&&uo(9,n);break;case 1:vi(t,n,a,r);break;case 3:vi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t)));break;case 12:if(c&2048){vi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){De(n,n.return,z)}}else vi(t,n,a,r);break;case 31:vi(t,n,a,r);break;case 13:vi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,r):ho(t,n):f._visibility&2?vi(t,n,a,r):(f._visibility|=2,Zs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&cf(g,n);break;case 24:vi(t,n,a,r),c&2048&&uf(n.alternate,n);break;default:vi(t,n,a,r)}}function Zs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,z=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:Zs(f,g,E,z,c),uo(8,g);break;case 23:break;case 22:var ut=g.stateNode;g.memoizedState!==null?ut._visibility&2?Zs(f,g,E,z,c):ho(f,g):(ut._visibility|=2,Zs(f,g,E,z,c)),c&&Q&2048&&cf(g.alternate,g);break;case 24:Zs(f,g,E,z,c),c&&Q&2048&&uf(g.alternate,g);break;default:Zs(f,g,E,z,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:ho(a,r),c&2048&&cf(r.alternate,r);break;case 24:ho(a,r),c&2048&&uf(r.alternate,r);break;default:ho(a,r)}n=n.sibling}}var po=8192;function Ks(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)Zm(t,n,a),t=t.sibling}function Zm(t,n,a){switch(t.tag){case 26:Ks(t,n,a),t.flags&po&&t.memoizedState!==null&&nS(a,gi,t.memoizedState,t.memoizedProps);break;case 5:Ks(t,n,a);break;case 3:case 4:var r=gi;gi=Gl(t.stateNode.containerInfo),Ks(t,n,a),gi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=po,po=16777216,Ks(t,n,a),po=r):Ks(t,n,a));break;default:Ks(t,n,a)}}function Km(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Jm(r,t)}Km(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qm(t),t=t.sibling}function Qm(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cl(t)):mo(t);break;default:mo(t)}}function Cl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Jm(r,t)}Km(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}t=t.sibling}}function Jm(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,pn=r;else t:for(a=t;pn!==null;){r=pn;var c=r.sibling,f=r.return;if(Vm(r),r===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}var gx={getCacheForType:function(t){var n=Sn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(en).controller.signal}},vx=typeof WeakMap=="function"?WeakMap:Map,be=0,He=null,he=null,_e=0,we=0,jn=null,ba=!1,Qs=!1,ff=!1,Ki=0,Ke=0,Aa=0,hs=0,hf=0,Zn=0,Js=0,_o=null,Bn=null,df=!1,wl=0,$m=0,Dl=1/0,Ul=null,Ra=null,cn=0,Ca=null,$s=null,Qi=0,pf=0,mf=null,t_=null,go=0,_f=null;function Kn(){return(be&2)!==0&&_e!==0?_e&-_e:O.T!==null?Mf():Br()}function e_(){if(Zn===0)if((_e&536870912)===0||xe){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),Zn=t}else Zn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Zn}function Fn(t,n,a){(t===He&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(tr(t,0),wa(t,_e,Zn,!1)),_n(t,a),((be&2)===0||t!==He)&&(t===He&&((be&2)===0&&(hs|=a),Ke===4&&wa(t,_e,Zn,!1)),wi(t))}function n_(t,n,a){if((be&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||$t(t,n),c=r?yx(t,n):vf(t,n,!0),f=r;do{if(c===0){Qs&&!r&&wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!xx(a)){c=vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;c=_o;var z=E.current.memoizedState.isDehydrated;if(z&&(tr(E,g).flags|=256),g=vf(E,g,!1),g!==2){if(ff&&!z){E.errorRecoveryDisabledLanes|=f,hs|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){tr(t,0),wa(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(r,n,Zn,!ba);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=wl+300-ft(),10<c)){if(wa(r,n,Zn,!ba),Ut(r,0,!0)!==0)break t;Qi=n,r.timeoutHandle=N_(i_.bind(null,r,a,Bn,Ul,df,n,Zn,hs,Js,ba,f,"Throttled",-0,0),c);break t}i_(r,a,Bn,Ul,df,n,Zn,hs,Js,ba,f,null,-0,0)}}break}while(!0);wi(t)}function i_(t,n,a,r,c,f,g,E,z,Q,ut,_t,$,rt){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},Zm(n,f,_t);var Bt=(f&62914560)===f?wl-ft():(f&4194048)===f?$m-ft():0;if(Bt=iS(_t,Bt),Bt!==null){Qi=f,t.cancelPendingCommit=Bt(f_.bind(null,t,n,f,a,r,c,g,E,z,ut,_t,null,$,rt)),wa(t,f,g,!Q);return}}f_(t,n,f,a,r,c,g,E,z)}function xx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(t,n,a,r){n&=~hf,n&=~hs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Jt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&zr(t,a,n)}function Ll(){return(be&6)===0?(vo(0),!1):!0}function gf(){if(he!==null){if(we===0)var t=he.return;else t=he,Hi=is=null,Lu(t),Xs=null,$r=0,t=he;for(;t!==null;)Om(t.alternate,t),t=t.return;he=null}}function tr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Fx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,gf(),He=t,he=a=Bi(t.current,null),_e=n,we=0,jn=null,ba=!1,Qs=$t(t,n),ff=!1,Js=Zn=hf=hs=Aa=Ke=0,Bn=_o=null,df=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Jt(r),f=1<<c;n|=t[c],r&=~f}return Ki=n,$o(),a}function a_(t,n){se=null,O.H=oo,n===ks||n===ol?(n=Sp(),we=3):n===Su?(n=Sp(),we=4):we=n===ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,he===null&&(Ke=1,yl(t,ni(n,t.current)))}function s_(){var t=Yn.current;return t===null?!0:(_e&4194048)===_e?ri===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ri:!1}function r_(){var t=O.H;return O.H=oo,t===null?oo:t}function o_(){var t=O.A;return O.A=gx,t}function Nl(){Ke=4,ba||(_e&4194048)!==_e&&Yn.current!==null||(Qs=!0),(Aa&134217727)===0&&(hs&134217727)===0||He===null||wa(He,_e,Zn,!1)}function vf(t,n,a){var r=be;be|=2;var c=r_(),f=o_();(He!==t||_e!==n)&&(Ul=null,tr(t,n)),n=!1;var g=Ke;t:do try{if(we!==0&&he!==null){var E=he,z=jn;switch(we){case 8:gf(),g=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var Q=we;if(we=0,jn=null,er(t,E,z,Q),a&&Qs){g=0;break t}break;default:Q=we,we=0,jn=null,er(t,E,z,Q)}}Sx(),g=Ke;break}catch(ut){a_(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Hi=is=null,be=r,O.H=c,O.A=f,he===null&&(He=null,_e=0,$o()),g}function Sx(){for(;he!==null;)l_(he)}function yx(t,n){var a=be;be|=2;var r=r_(),c=o_();He!==t||_e!==n?(Ul=null,Dl=ft()+500,tr(t,n)):Qs=$t(t,n);t:do try{if(we!==0&&he!==null){n=he;var f=jn;e:switch(we){case 1:we=0,jn=null,er(t,n,f,1);break;case 2:case 9:if(vp(f)){we=0,jn=null,c_(n);break}n=function(){we!==2&&we!==9||He!==t||(we=7),wi(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:vp(f)?(we=0,jn=null,c_(n)):(we=0,jn=null,er(t,n,f,7));break;case 5:var g=null;switch(he.tag){case 26:g=he.memoizedState;case 5:case 27:var E=he;if(g?j_(g):E.stateNode.complete){we=0,jn=null;var z=E.sibling;if(z!==null)he=z;else{var Q=E.return;Q!==null?(he=Q,Ol(Q)):he=null}break e}}we=0,jn=null,er(t,n,f,5);break;case 6:we=0,jn=null,er(t,n,f,6);break;case 8:gf(),Ke=6;break t;default:throw Error(s(462))}}Mx();break}catch(ut){a_(t,ut)}while(!0);return Hi=is=null,O.H=r,O.A=c,be=a,he!==null?0:(He=null,_e=0,$o(),Ke)}function Mx(){for(;he!==null&&!T();)l_(he)}function l_(t){var n=Lm(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Ol(t):he=n}function c_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Am(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Am(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Lu(n);default:Om(a,n),n=he=op(n,Ki),n=Lm(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Ol(t):he=n}function er(t,n,a,r){Hi=is=null,Lu(n),Xs=null,$r=0;var c=n.return;try{if(ux(t,c,n,a,_e)){Ke=1,yl(t,ni(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;Ke=1,yl(t,ni(a,t.current)),he=null;return}n.flags&32768?(xe||r===1?t=!0:Qs||(_e&536870912)!==0?t=!1:(ba=t=!0,(r===2||r===9||r===3||r===6)&&(r=Yn.current,r!==null&&r.tag===13&&(r.flags|=16384))),u_(n,t)):Ol(n)}function Ol(t){var n=t;do{if((n.flags&32768)!==0){u_(n,ba);return}t=n.return;var a=dx(n.alternate,n,Ki);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ke===0&&(Ke=5)}function u_(t,n){do{var a=px(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ke=6,he=null}function f_(t,n,a,r,c,f,g,E,z){t.cancelPendingCommit=null;do Pl();while(cn!==0);if((be&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=su,di(t,a,f,g,E,z),t===He&&(he=He=null,_e=0),$s=n,Ca=t,Qi=a,pf=f,mf=c,t_=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ax(Dt,function(){return __(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=V.p,V.p=2,g=be,be|=4;try{mx(t,n,a)}finally{be=g,V.p=c,O.T=r}}cn=1,h_(),d_(),p_()}}function h_(){if(cn===1){cn=0;var t=Ca,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=V.p;V.p=2;var c=be;be|=4;try{Ym(n,t);var f=Df,g=Jd(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&Qd(E.ownerDocument.documentElement,E)){if(z!==null&&tu(E)){var Q=z.start,ut=z.end;if(ut===void 0&&(ut=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ut,E.value.length);else{var _t=E.ownerDocument||document,$=_t&&_t.defaultView||window;if($.getSelection){var rt=$.getSelection(),Bt=E.textContent.length,Kt=Math.min(z.start,Bt),Ie=z.end===void 0?Kt:Math.min(z.end,Bt);!rt.extend&&Kt>Ie&&(g=Ie,Ie=Kt,Kt=g);var Y=Kd(E,Kt),B=Kd(E,Ie);if(Y&&B&&(rt.rangeCount!==1||rt.anchorNode!==Y.node||rt.anchorOffset!==Y.offset||rt.focusNode!==B.node||rt.focusOffset!==B.offset)){var K=_t.createRange();K.setStart(Y.node,Y.offset),rt.removeAllRanges(),Kt>Ie?(rt.addRange(K),rt.extend(B.node,B.offset)):(K.setEnd(B.node,B.offset),rt.addRange(K))}}}}for(_t=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var ht=_t[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}ql=!!wf,Df=wf=null}finally{be=c,V.p=r,O.T=a}}t.current=n,cn=2}}function d_(){if(cn===2){cn=0;var t=Ca,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=V.p;V.p=2;var c=be;be|=4;try{Gm(t,n.alternate,n)}finally{be=c,V.p=r,O.T=a}}cn=3}}function p_(){if(cn===4||cn===3){cn=0,tt();var t=Ca,n=$s,a=Qi,r=t_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?cn=5:(cn=0,$s=Ca=null,m_(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ra=null),Cs(a),n=n.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=V.p,V.p=2,O.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var E=r[g];f(E.value,{componentStack:E.stack})}}finally{O.T=n,V.p=c}}(Qi&3)!==0&&Pl(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===_f?go++:(go=0,_f=t):go=0,vo(0)}}function m_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qr(n)))}function Pl(){return h_(),d_(),p_(),__()}function __(){if(cn!==5)return!1;var t=Ca,n=pf;pf=0;var a=Cs(Qi),r=O.T,c=V.p;try{V.p=32>a?32:a,O.T=null,a=mf,mf=null;var f=Ca,g=Qi;if(cn=0,$s=Ca=null,Qi=0,(be&6)!==0)throw Error(s(331));var E=be;if(be|=4,Qm(f.current),jm(f,f.current,g,a),be=E,vo(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{V.p=c,O.T=r,m_(t,n)}}function g_(t,n,a){n=ni(a,n),n=qu(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(_n(t,2),wi(t))}function De(t,n,a){if(t.tag===3)g_(t,t,a);else for(;n!==null;){if(n.tag===3){g_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ra===null||!Ra.has(r))){t=ni(a,t),a=vm(2),r=ya(n,a,2),r!==null&&(xm(a,r,n,t),_n(r,2),wi(r));break}}n=n.return}}function xf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new vx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(ff=!0,c.add(a),t=Ex.bind(null,t,n,a),n.then(t,t))}function Ex(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,He===t&&(_e&a)===a&&(Ke===4||Ke===3&&(_e&62914560)===_e&&300>ft()-wl?(be&2)===0&&tr(t,0):hf|=a,Js===_e&&(Js=0)),wi(t)}function v_(t,n){n===0&&(n=on()),t=ts(t,n),t!==null&&(_n(t,n),wi(t))}function Tx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),v_(t,a)}function bx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),v_(t,a)}function Ax(t,n){return qt(t,n)}var zl=null,nr=null,Sf=!1,Il=!1,yf=!1,Da=0;function wi(t){t!==nr&&t.next===null&&(nr===null?zl=nr=t:nr=nr.next=t),Il=!0,Sf||(Sf=!0,Cx())}function vo(t,n){if(!yf&&Il){yf=!0;do for(var a=!1,r=zl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Jt(42|t)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,M_(r,f))}else f=_e,f=Ut(r,r===He?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||$t(r,f)||(a=!0,M_(r,f));r=r.next}while(a);yf=!1}}function Rx(){x_()}function x_(){Il=Sf=!1;var t=0;Da!==0&&Bx()&&(t=Da);for(var n=ft(),a=null,r=zl;r!==null;){var c=r.next,f=S_(r,n);f===0?(r.next=null,a===null?zl=c:a.next=c,c===null&&(nr=a)):(a=r,(t!==0||(f&3)!==0)&&(Il=!0)),r=c}cn!==0&&cn!==5||vo(t),Da!==0&&(Da=0)}function S_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Jt(f),E=1<<g,z=c[g];z===-1?((E&a)===0||(E&r)!==0)&&(c[g]=Xe(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=He,a=_e,a=Ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&U(r),Cs(a)){case 2:case 8:a=Xt;break;case 32:a=Dt;break;case 268435456:a=me;break;default:a=Dt}return r=y_.bind(null,t),a=qt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&U(r),t.callbackPriority=2,t.callbackNode=null,2}function y_(t,n){if(cn!==0&&cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Pl()&&t.callbackNode!==a)return null;var r=_e;return r=Ut(t,t===He?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(n_(t,r,n),S_(t,ft()),t.callbackNode!=null&&t.callbackNode===a?y_.bind(null,t):null)}function M_(t,n){if(Pl())return null;n_(t,n,!0)}function Cx(){Hx(function(){(be&6)!==0?qt(mt,Rx):x_()})}function Mf(){if(Da===0){var t=Gs;t===0&&(t=At,At<<=1,(At&261888)===0&&(At=256)),Da=t}return Da}function E_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wo(""+t)}function T_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function wx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=E_((c[gn]||null).action),g=r.submitter;g&&(n=(n=g[gn]||null)?E_(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Zo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Da!==0){var z=g?T_(c,g):new FormData(c);Gu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=g?T_(c,g):new FormData(c),Gu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Ef=0;Ef<au.length;Ef++){var Tf=au[Ef],Dx=Tf.toLowerCase(),Ux=Tf[0].toUpperCase()+Tf.slice(1);_i(Dx,"on"+Ux)}_i(ep,"onAnimationEnd"),_i(np,"onAnimationIteration"),_i(ip,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(qv,"onTransitionRun"),_i(jv,"onTransitionStart"),_i(Zv,"onTransitionCancel"),_i(ap,"onTransitionEnd"),It("onMouseEnter",["mouseout","mouseover"]),It("onMouseLeave",["mouseout","mouseover"]),It("onPointerEnter",["pointerout","pointerover"]),It("onPointerLeave",["pointerout","pointerover"]),Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function b_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],z=E.instance,Q=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){Jo(ut)}c.currentTarget=null,f=z}else for(g=0;g<r.length;g++){if(E=r[g],z=E.instance,Q=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){Jo(ut)}c.currentTarget=null,f=z}}}}function de(t,n){var a=n[Fr];a===void 0&&(a=n[Fr]=new Set);var r=t+"__bubble";a.has(r)||(A_(n,t,2,!1),a.add(r))}function bf(t,n,a){var r=0;n&&(r|=4),A_(a,t,r,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[Bl]){t[Bl]=!0,Gt.forEach(function(a){a!=="selectionchange"&&(Lx.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,bf("selectionchange",!1,n))}}function A_(t,n,a,r){switch(eg(n)){case 2:var c=rS;break;case 8:c=oS;break;default:c=Gf}a=c.bind(null,n,a,t),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Rf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=r.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=nt(E),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){r=f=g;continue t}E=E.parentNode}}r=r.return}Ud(function(){var Q=f,ut=kc(a),_t=[];t:{var $=sp.get(t);if($!==void 0){var rt=Zo,Bt=t;switch(t){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":rt=bv;break;case"focusin":Bt="focus",rt=Zc;break;case"focusout":Bt="blur",rt=Zc;break;case"beforeblur":case"afterblur":rt=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Cv;break;case ep:case np:case ip:rt=_v;break;case ap:rt=Dv;break;case"scroll":case"scrollend":rt=fv;break;case"wheel":rt=Lv;break;case"copy":case"cut":case"paste":rt=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=zd;break;case"toggle":case"beforetoggle":rt=Ov}var Kt=(n&4)!==0,Ie=!Kt&&(t==="scroll"||t==="scrollend"),Y=Kt?$!==null?$+"Capture":null:$;Kt=[];for(var B=Q,K;B!==null;){var ht=B;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||Y===null||(ht=Hr(B,Y),ht!=null&&Kt.push(So(B,ht,K))),Ie)break;B=B.return}0<Kt.length&&($=new rt($,Bt,null,a,ut),_t.push({event:$,listeners:Kt}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",$&&a!==Vc&&(Bt=a.relatedTarget||a.fromElement)&&(nt(Bt)||Bt[Oi]))break t;if((rt||$)&&($=ut.window===ut?ut:($=ut.ownerDocument)?$.defaultView||$.parentWindow:window,rt?(Bt=a.relatedTarget||a.toElement,rt=Q,Bt=Bt?nt(Bt):null,Bt!==null&&(Ie=u(Bt),Kt=Bt.tag,Bt!==Ie||Kt!==5&&Kt!==27&&Kt!==6)&&(Bt=null)):(rt=null,Bt=Q),rt!==Bt)){if(Kt=Od,ht="onMouseLeave",Y="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=zd,ht="onPointerLeave",Y="onPointerEnter",B="pointer"),Ie=rt==null?$:Tt(rt),K=Bt==null?$:Tt(Bt),$=new Kt(ht,B+"leave",rt,a,ut),$.target=Ie,$.relatedTarget=K,ht=null,nt(ut)===Q&&(Kt=new Kt(Y,B+"enter",Bt,a,ut),Kt.target=K,Kt.relatedTarget=Ie,ht=Kt),Ie=ht,rt&&Bt)e:{for(Kt=Nx,Y=rt,B=Bt,K=0,ht=Y;ht;ht=Kt(ht))K++;ht=0;for(var Yt=B;Yt;Yt=Kt(Yt))ht++;for(;0<K-ht;)Y=Kt(Y),K--;for(;0<ht-K;)B=Kt(B),ht--;for(;K--;){if(Y===B||B!==null&&Y===B.alternate){Kt=Y;break e}Y=Kt(Y),B=Kt(B)}Kt=null}else Kt=null;rt!==null&&R_(_t,$,rt,Kt,!1),Bt!==null&&Ie!==null&&R_(_t,Ie,Bt,Kt,!0)}}t:{if($=Q?Tt(Q):window,rt=$.nodeName&&$.nodeName.toLowerCase(),rt==="select"||rt==="input"&&$.type==="file")var Ee=Xd;else if(Vd($))if(Wd)Ee=Xv;else{Ee=Vv;var kt=Gv}else rt=$.nodeName,!rt||rt.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Gc(Q.elementType)&&(Ee=Xd):Ee=kv;if(Ee&&(Ee=Ee(t,Q))){kd(_t,Ee,a,ut);break t}kt&&kt(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&ti($,"number",$.value)}switch(kt=Q?Tt(Q):window,t){case"focusin":(Vd(kt)||kt.contentEditable==="true")&&(Ns=kt,eu=Q,jr=null);break;case"focusout":jr=eu=Ns=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,$d(_t,a,ut);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":$d(_t,a,ut)}var re;if(Qc)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else Ls?Hd(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Id&&a.locale!=="ko"&&(Ls||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ls&&(re=Ld()):(pa=ut,Yc="value"in pa?pa.value:pa.textContent,Ls=!0)),kt=Fl(Q,ge),0<kt.length&&(ge=new Pd(ge,t,null,a,ut),_t.push({event:ge,listeners:kt}),re?ge.data=re:(re=Gd(a),re!==null&&(ge.data=re)))),(re=zv?Iv(t,a):Bv(t,a))&&(ge=Fl(Q,"onBeforeInput"),0<ge.length&&(kt=new Pd("onBeforeInput","beforeinput",null,a,ut),_t.push({event:kt,listeners:ge}),kt.data=re)),wx(_t,t,Q,a,ut)}b_(_t,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hr(t,a),c!=null&&r.unshift(So(t,c,f)),c=Hr(t,n),c!=null&&r.push(So(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Nx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function R_(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var E=a,z=E.alternate,Q=E.stateNode;if(E=E.tag,z!==null&&z===r)break;E!==5&&E!==26&&E!==27||Q===null||(z=Q,c?(Q=Hr(a,f),Q!=null&&g.unshift(So(a,Q,z))):c||(Q=Hr(a,f),Q!=null&&g.push(So(a,Q,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Ox=/\r\n?/g,Px=/\u0000|\uFFFD/g;function C_(t){return(typeof t=="string"?t:""+t).replace(Ox,`
`).replace(Px,"")}function w_(t,n){return n=C_(n),C_(t)===n}function ze(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ws(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ws(t,""+r);break;case"className":Vt(t,"class",r);break;case"tabIndex":Vt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(t,a,r);break;case"style":wd(t,r,f);break;case"data":if(n!=="object"){Vt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Wo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(t,n,"name",c.name,c,null),ze(t,n,"formEncType",c.formEncType,c,null),ze(t,n,"formMethod",c.formMethod,c,null),ze(t,n,"formTarget",c.formTarget,c,null)):(ze(t,n,"encType",c.encType,c,null),ze(t,n,"method",c.method,c,null),ze(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Wo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=zi);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Wo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":de("beforetoggle",t),de("toggle",t),ve(t,"popover",r);break;case"xlinkActuate":ln(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ln(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ln(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ln(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ln(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ln(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ln(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ln(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ln(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ve(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cv.get(a)||a,ve(t,a,r))}}function Cf(t,n,a,r,c,f){switch(a){case"style":wd(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?ws(t,r):(typeof r=="number"||typeof r=="bigint")&&ws(t,""+r);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"onClick":r!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ve(t,a,r)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,f,g,a,null)}}c&&ze(t,n,"srcSet",a.srcSet,a,null),r&&ze(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var E=f=g=c=null,z=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":g=ut;break;case"checked":z=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ze(t,n,r,ut,a,null)}}mi(t,f,E,z,Q,g,c,!1);return;case"select":de("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:ze(t,n,c,E,a,null)}n=f,a=g,t.multiple=!!r,n!=null?Pi(t,!!r,n,!1):a!=null&&Pi(t,!!r,a,!0);return;case"textarea":de("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:ze(t,n,g,E,a,null)}Rd(t,r,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ze(t,n,z,r,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(r=0;r<xo.length;r++)de(xo[r],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,Q,r,a,null)}return;default:if(Gc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&Cf(t,n,ut,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&ze(t,n,E,r,a,null))}function zx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,z=null,Q=null,ut=null;for(rt in a){var _t=a[rt];if(a.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=_t;default:r.hasOwnProperty(rt)||ze(t,n,rt,null,r,_t)}}for(var $ in r){var rt=r[$];if(_t=a[$],r.hasOwnProperty($)&&(rt!=null||_t!=null))switch($){case"type":f=rt;break;case"name":c=rt;break;case"checked":Q=rt;break;case"defaultChecked":ut=rt;break;case"value":g=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==_t&&ze(t,n,$,rt,r,_t)}}An(t,g,E,z,Q,ut,f,c);return;case"select":rt=g=E=$=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:r.hasOwnProperty(f)||ze(t,n,f,null,r,z)}for(c in r)if(f=r[c],z=a[c],r.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==z&&ze(t,n,c,f,r,z)}n=E,a=g,r=rt,$!=null?Pi(t,!!a,$,!1):!!r!=!!a&&(n!=null?Pi(t,!!a,n,!0):Pi(t,!!a,a?[]:"",!1));return;case"textarea":rt=$=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ze(t,n,E,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":$=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&ze(t,n,g,c,r,f)}Ad(t,$,rt);return;case"option":for(var Bt in a)if($=a[Bt],a.hasOwnProperty(Bt)&&$!=null&&!r.hasOwnProperty(Bt))switch(Bt){case"selected":t.selected=!1;break;default:ze(t,n,Bt,null,r,$)}for(z in r)if($=r[z],rt=a[z],r.hasOwnProperty(z)&&$!==rt&&($!=null||rt!=null))switch(z){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:ze(t,n,z,$,r,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)$=a[Kt],a.hasOwnProperty(Kt)&&$!=null&&!r.hasOwnProperty(Kt)&&ze(t,n,Kt,null,r,$);for(Q in r)if($=r[Q],rt=a[Q],r.hasOwnProperty(Q)&&$!==rt&&($!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:ze(t,n,Q,$,r,rt)}return;default:if(Gc(n)){for(var Ie in a)$=a[Ie],a.hasOwnProperty(Ie)&&$!==void 0&&!r.hasOwnProperty(Ie)&&Cf(t,n,Ie,void 0,r,$);for(ut in r)$=r[ut],rt=a[ut],!r.hasOwnProperty(ut)||$===rt||$===void 0&&rt===void 0||Cf(t,n,ut,$,r,rt);return}}for(var Y in a)$=a[Y],a.hasOwnProperty(Y)&&$!=null&&!r.hasOwnProperty(Y)&&ze(t,n,Y,null,r,$);for(_t in r)$=r[_t],rt=a[_t],!r.hasOwnProperty(_t)||$===rt||$==null&&rt==null||ze(t,n,_t,$,r,rt)}function D_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ix(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&D_(g)){for(g=0,E=c.responseEnd,r+=1;r<a.length;r++){var z=a[r],Q=z.startTime;if(Q>E)break;var ut=z.transferSize,_t=z.initiatorType;ut&&D_(_t)&&(z=z.responseEnd,g+=ut*(z<E?1:(E-Q)/(z-Q)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wf=null,Df=null;function Hl(t){return t.nodeType===9?t:t.ownerDocument}function U_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function Bx(){var t=window.event;return t&&t.type==="popstate"?t===Lf?!1:(Lf=t,!0):(Lf=null,!1)}var N_=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,O_=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof O_<"u"?function(t){return O_.resolve(null).then(t).catch(Gx)}:N_;function Gx(t){setTimeout(function(){throw t})}function Ua(t){return t==="head"}function P_(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),rr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[k]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);rr(n)}function z_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Vx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[k])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function kx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function I_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Of(t){return t.data==="$?"||t.data==="$~"}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Xx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var zf=null;function B_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function F_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function H_(t,n,a){switch(n=Hl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);at(t)}var li=new Map,G_=new Set;function Gl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=V.d;V.d={f:Wx,r:Yx,D:qx,C:jx,L:Zx,m:Kx,X:Jx,S:Qx,M:$x};function Wx(){var t=Ji.f(),n=Ll();return t||n}function Yx(t){var n=X(t);n!==null&&n.tag===5&&n.type==="form"?am(n):Ji.r(t)}var ir=typeof document>"u"?null:document;function V_(t,n,a){var r=ir;if(r&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),G_.has(c)||(G_.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Mn(n,"link",t),wt(n),r.head.appendChild(n)))}}function qx(t){Ji.D(t),V_("dns-prefetch",t,null)}function jx(t,n){Ji.C(t,n),V_("preconnect",t,n)}function Zx(t,n,a){Ji.L(t,n,a);var r=ir;if(r&&t&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(t)+'"]';var f=c;switch(n){case"style":f=ar(t);break;case"script":f=sr(t)}li.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Mo(f))||n==="script"&&r.querySelector(Eo(f))||(n=r.createElement("link"),Mn(n,"link",t),wt(n),r.head.appendChild(n)))}}function Kx(t,n){Ji.m(t,n);var a=ir;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(r)+'"][href="'+dn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(t)}if(!li.has(f)&&(t=x({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}r=a.createElement("link"),Mn(r,"link",t),wt(r),a.head.appendChild(r)}}}function Qx(t,n,a){Ji.S(t,n,a);var r=ir;if(r&&t){var c=Ct(r).hoistableStyles,f=ar(t);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(Mo(f)))E.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&If(t,a);var z=g=r.createElement("link");wt(z),Mn(z,"link",t),z._p=new Promise(function(Q,ut){z.onload=Q,z.onerror=ut}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Vl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function Jx(t,n){Ji.X(t,n);var a=ir;if(a&&t){var r=Ct(a).hoistableScripts,c=sr(t),f=r.get(c);f||(f=a.querySelector(Eo(c)),f||(t=x({src:t,async:!0},n),(n=li.get(c))&&Bf(t,n),f=a.createElement("script"),wt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function $x(t,n){Ji.M(t,n);var a=ir;if(a&&t){var r=Ct(a).hoistableScripts,c=sr(t),f=r.get(c);f||(f=a.querySelector(Eo(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=li.get(c))&&Bf(t,n),f=a.createElement("script"),wt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function k_(t,n,a,r){var c=(c=Et.current)?Gl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=Ct(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ar(a.href);var f=Ct(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Mo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||tS(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=Ct(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ar(t){return'href="'+dn(t)+'"'}function Mo(t){return'link[rel="stylesheet"]['+t+"]"}function X_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function tS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Mn(n,"link",a),wt(n),t.head.appendChild(n))}function sr(t){return'[src="'+dn(t)+'"]'}function Eo(t){return"script[async]"+t}function W_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+dn(a.href)+'"]');if(r)return n.instance=r,wt(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),wt(r),Mn(r,"style",c),Vl(r,a.precedence,t),n.instance=r;case"stylesheet":c=ar(a.href);var f=t.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,wt(f),f;r=X_(a),(c=li.get(c))&&If(r,c),f=(t.ownerDocument||t).createElement("link"),wt(f);var g=f;return g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),Mn(f,"link",r),n.state.loading|=4,Vl(f,a.precedence,t),n.instance=f;case"script":return f=sr(a.src),(c=t.querySelector(Eo(f)))?(n.instance=c,wt(c),c):(r=a,(c=li.get(f))&&(r=x({},a),Bf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),wt(c),Mn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Vl(r,a.precedence,t));return n.instance}function Vl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var kl=null;function Y_(t,n,a){if(kl===null){var r=new Map,c=kl=new Map;c.set(a,r)}else c=kl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[k]||f[je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(f):r.set(g,[f])}}return r}function q_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function eS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function j_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function nS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ar(r.href),f=n.querySelector(Mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Xl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,wt(f);return}f=n.ownerDocument||n,r=X_(r),(c=li.get(c))&&If(r,c),f=f.createElement("link"),wt(f);var g=f;g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),Mn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Xl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function iS(t,n){return t.stylesheets&&t.count===0&&Yl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*Ix());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wl=null;function Yl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wl=new Map,n.forEach(aS,t),Wl=null,Xl.call(t))}function aS(t,n){if(!(n.state.loading&4)){var a=Wl.get(t);if(a)var r=a.get(null);else{a=new Map,Wl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Xl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var To={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function sS(t,n,a,r,c,f,g,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ye(0),this.hiddenUpdates=ye(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Z_(t,n,a,r,c,f,g,E,z,Q,ut,_t){return t=new sS(t,n,a,g,z,Q,ut,_t,E),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=gu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},yu(f),t}function K_(t){return t?(t=zs,t):zs}function Q_(t,n,a,r,c,f){c=K_(c),r.context===null?r.context=c:r.pendingContext=c,r=Sa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ya(t,r,n),a!==null&&(Fn(a,t,n),eo(a,t,n))}function J_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){J_(t,n),(t=t.alternate)&&J_(t,n)}function $_(t){if(t.tag===13||t.tag===31){var n=ts(t,67108864);n!==null&&Fn(n,t,67108864),Hf(t,67108864)}}function tg(t){if(t.tag===13||t.tag===31){var n=Kn();n=Za(n);var a=ts(t,n);a!==null&&Fn(a,t,n),Hf(t,n)}}var ql=!0;function rS(t,n,a,r){var c=O.T;O.T=null;var f=V.p;try{V.p=2,Gf(t,n,a,r)}finally{V.p=f,O.T=c}}function oS(t,n,a,r){var c=O.T;O.T=null;var f=V.p;try{V.p=8,Gf(t,n,a,r)}finally{V.p=f,O.T=c}}function Gf(t,n,a,r){if(ql){var c=Vf(r);if(c===null)Rf(t,n,r,jl,a),ng(t,r);else if(cS(c,t,n,a,r))r.stopPropagation();else if(ng(t,r),n&4&&-1<lS.indexOf(t)){for(;c!==null;){var f=X(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Rt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var z=1<<31-Jt(g);E.entanglements[1]|=z,g&=~z}wi(f),(be&6)===0&&(Dl=ft()+500,vo(0))}}break;case 31:case 13:E=ts(f,2),E!==null&&Fn(E,f,2),Ll(),Hf(f,2)}if(f=Vf(r),f===null&&Rf(t,n,r,jl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Rf(t,n,r,null,a)}}function Vf(t){return t=kc(t),kf(t)}var jl=null;function kf(t){if(jl=null,t=nt(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jl=t,null}function eg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case mt:return 2;case Xt:return 8;case Dt:case Pt:return 32;case me:return 268435456;default:return 32}default:return 32}}var Xf=!1,La=null,Na=null,Oa=null,bo=new Map,Ao=new Map,Pa=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ng(t,n){switch(t){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=X(n),n!==null&&$_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function cS(t,n,a,r,c){switch(n){case"focusin":return La=Ro(La,t,n,a,r,c),!0;case"dragenter":return Na=Ro(Na,t,n,a,r,c),!0;case"mouseover":return Oa=Ro(Oa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Ro(bo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,r,c)),!0}return!1}function ig(t){var n=nt(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ka(t.priority,function(){tg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ka(t.priority,function(){tg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Vc=r,a.target.dispatchEvent(r),Vc=null}else return n=X(a),n!==null&&$_(n),t.blockedOn=a,!1;n.shift()}return!0}function ag(t,n,a){Zl(t)&&a.delete(n)}function uS(){Xf=!1,La!==null&&Zl(La)&&(La=null),Na!==null&&Zl(Na)&&(Na=null),Oa!==null&&Zl(Oa)&&(Oa=null),bo.forEach(ag),Ao.forEach(ag)}function Kl(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,uS)))}var Ql=null;function sg(t){Ql!==t&&(Ql=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ql===t&&(Ql=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(kf(r||a)===null)continue;break}var f=X(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function rr(t){function n(z){return Kl(z,t)}La!==null&&Kl(La,t),Na!==null&&Kl(Na,t),Oa!==null&&Kl(Oa,t),bo.forEach(n),Ao.forEach(n);for(var a=0;a<Pa.length;a++){var r=Pa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)ig(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[gn]||null;if(typeof f=="function")g||sg(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[gn]||null)E=g.formAction;else if(kf(c)!==null)continue}else E=g.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),sg(a)}}}function rg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(t){this._internalRoot=t}Jl.prototype.render=Wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Kn();Q_(a,r,t,n,null,null)},Jl.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Q_(t.current,2,null,t,null,null),Ll(),n[Oi]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Br();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&ig(t)}};var og=e.version;if(og!=="19.2.4")throw Error(s(527,og,"19.2.4"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var fS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{jt=$l.inject(fS),Wt=$l}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=pm,f=mm,g=_m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Z_(t,1,!1,null,null,a,r,null,c,f,g,rg),t[Oi]=n.current,Af(t),new Wf(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=pm,g=mm,E=_m,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Z_(t,1,!0,n,a??null,r,c,z,f,g,E,rg),n.context=K_(null),a=n.current,r=Kn(),r=Za(r),c=Sa(r),c.callback=null,ya(a,c,r),a=r,n.current.lanes=a,_n(n,a),wi(n),t[Oi]=n.current,Af(t),new Jl(n)},wo.version="19.2.4",wo}var gg;function MS(){if(gg)return jf.exports;gg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),jf.exports=yS(),jf.exports}var ES=MS();const TS=b0(ES);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="170",Tr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bS=0,vg=1,AS=2,A0=1,RS=2,aa=3,ja=0,Vn=1,Li=2,Ya=0,br=1,xg=2,Sg=3,yg=4,CS=5,Ss=100,wS=101,DS=102,US=103,LS=104,NS=200,OS=201,PS=202,zS=203,Ch=204,wh=205,IS=206,BS=207,FS=208,HS=209,GS=210,VS=211,kS=212,XS=213,WS=214,Dh=0,Uh=1,Lh=2,Cr=3,Nh=4,Oh=5,Ph=6,zh=7,R0=0,YS=1,qS=2,qa=0,jS=1,ZS=2,KS=3,QS=4,JS=5,$S=6,ty=7,C0=300,wr=301,Dr=302,Ih=303,Bh=304,Pc=306,Lc=1e3,Wa=1001,Fh=1002,Ei=1003,ey=1004,tc=1005,hi=1006,Jf=1007,Ms=1008,la=1009,w0=1010,D0=1011,Bo=1012,gd=1013,Ts=1014,sa=1015,Fo=1016,vd=1017,xd=1018,Ur=1020,U0=35902,L0=1021,N0=1022,Mi=1023,O0=1024,P0=1025,Ar=1026,Lr=1027,z0=1028,Sd=1029,I0=1030,yd=1031,Md=1033,bc=33776,Ac=33777,Rc=33778,Cc=33779,Hh=35840,Gh=35841,Vh=35842,kh=35843,Xh=36196,Wh=37492,Yh=37496,qh=37808,jh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,td=37815,ed=37816,nd=37817,id=37818,ad=37819,sd=37820,rd=37821,wc=36492,od=36494,ld=36495,B0=36283,cd=36284,ud=36285,fd=36286,ny=3200,iy=3201,ay=0,sy=1,Xa="",ui="srgb",Or="srgb-linear",zc="linear",Be="srgb",or=7680,Mg=519,ry=512,oy=513,ly=514,F0=515,cy=516,uy=517,fy=518,hy=519,Eg=35044,Tg="300 es",ra=2e3,Nc=2001;class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,hd=180/Math.PI;function Ho(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Ln(o,e,i){return Math.max(e,Math.min(i,o))}function dy(o,e){return(o%e+e)%e}function $f(o,e,i){return(1-i)*o+i*e}function Do(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const py={DEG2RAD:Dc};class ue{constructor(e=0,i=0){ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,s,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],x=s[7],S=s[2],M=s[5],b=s[8],R=l[0],y=l[3],_=l[6],I=l[1],N=l[4],D=l[7],st=l[2],H=l[5],P=l[8];return u[0]=h*R+d*I+m*st,u[3]=h*y+d*N+m*H,u[6]=h*_+d*D+m*P,u[1]=p*R+v*I+x*st,u[4]=p*y+v*N+x*H,u[7]=p*_+v*D+x*P,u[2]=S*R+M*I+b*st,u[5]=S*y+M*N+b*H,u[8]=S*_+M*D+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=v*h-d*p,S=d*m-v*u,M=p*u-h*m,b=i*x+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=x*R,e[1]=(l*p-v*s)*R,e[2]=(d*s-l*h)*R,e[3]=S*R,e[4]=(v*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(s*m-p*i)*R,e[8]=(h*i-s*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(th.makeScale(e,i)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,i){return this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new oe;function H0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Oc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function my(){const o=Oc("canvas");return o.style.display="block",o}const bg={};function zo(o){o in bg||(bg[o]=!0,console.warn(o))}function _y(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function gy(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Me={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(o,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===Be&&(o.r=oa(o.r),o.g=oa(o.g),o.b=oa(o.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Be&&(o.r=Rr(o.r),o.g=Rr(o.g),o.b=Rr(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Xa?zc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,i){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ag=[.64,.33,.3,.6,.15,.06],Rg=[.2126,.7152,.0722],Cg=[.3127,.329],wg=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dg=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me.define({[Or]:{primaries:Ag,whitePoint:Cg,transfer:zc,toXYZ:wg,fromXYZ:Dg,luminanceCoefficients:Rg,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:Ag,whitePoint:Cg,transfer:Be,toXYZ:wg,fromXYZ:Dg,luminanceCoefficients:Rg,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}});let lr;class xy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{lr===void 0&&(lr=Oc("canvas")),lr.width=e.width,lr.height=e.height;const s=lr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=lr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Oc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sy=0;class G0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(eh(l[h].image)):u.push(eh(l[h]))}else u=eh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?xy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yy=0;class En extends Rs{constructor(e=En.DEFAULT_IMAGE,i=En.DEFAULT_MAPPING,s=Wa,l=Wa,u=hi,h=Ms,d=Mi,m=la,p=En.DEFAULT_ANISOTROPY,v=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Ho(),this.name="",this.source=new G0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lc:e.x=e.x-Math.floor(e.x);break;case Wa:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lc:e.y=e.y-Math.floor(e.y);break;case Wa:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=C0;En.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],v=m[4],x=m[8],S=m[1],M=m[5],b=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(x-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(x+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(M+1)/2,st=(_+1)/2,H=(v+S)/4,P=(x+R)/4,Z=(b+y)/4;return N>D&&N>st?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=H/s,u=P/s):D>st?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=H/l,u=Z/l):st<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(st),s=P/u,l=Z/u),this.set(s,l,u,i),this}let I=Math.sqrt((y-b)*(y-b)+(x-R)*(x-R)+(S-v)*(S-v));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(x-R)/I,this.z=(S-v)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class My extends Rs{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new En(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new G0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends My{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class V0 extends En{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ey extends En{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],x=s[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(x!==R||m!==S||p!==M||v!==b){let y=1-d;const _=m*S+p*M+v*b+x*R,I=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const st=Math.sqrt(N),H=Math.atan2(st,_*I);y=Math.sin(y*H)/st,d=Math.sin(d*H)/st}const D=d*I;if(m=m*y+S*D,p=p*y+M*D,v=v*y+b*D,x=x*y+R*D,y===1-d){const st=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=st,p*=st,v*=st,x*=st}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],x=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+v*x+m*M-p*S,e[i+1]=m*b+v*S+p*x-d*M,e[i+2]=p*b+v*M+d*S-m*x,e[i+3]=v*b-d*x-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),x=d(u/2),S=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*v*x+p*M*b,this._y=p*M*x-S*v*b,this._z=p*v*b+S*M*x,this._w=p*v*x-S*M*b;break;case"YXZ":this._x=S*v*x+p*M*b,this._y=p*M*x-S*v*b,this._z=p*v*b-S*M*x,this._w=p*v*x+S*M*b;break;case"ZXY":this._x=S*v*x-p*M*b,this._y=p*M*x+S*v*b,this._z=p*v*b+S*M*x,this._w=p*v*x-S*M*b;break;case"ZYX":this._x=S*v*x-p*M*b,this._y=p*M*x+S*v*b,this._z=p*v*b-S*M*x,this._w=p*v*x+S*M*b;break;case"YZX":this._x=S*v*x+p*M*b,this._y=p*M*x+S*v*b,this._z=p*v*b-S*M*x,this._w=p*v*x-S*M*b;break;case"XZY":this._x=S*v*x-p*M*b,this._y=p*M*x-S*v*b,this._z=p*v*b+S*M*x,this._w=p*v*x+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],x=i[10],S=s+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),x=Math.sin((1-i)*v)/p,S=Math.sin(i*v)/p;return this._w=h*x+this._w*S,this._x=s*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(e=0,i=0,s=0){et.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ug.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),v=2*(d*i-u*l),x=2*(u*s-h*i);return this.x=i+m*p+h*x-d*v,this.y=s+m*v+d*p-u*x,this.z=l+m*x+u*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new et,Ug=new As;class Go{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),nc.subVectors(this.max,Uo),cr.subVectors(e.a,Uo),ur.subVectors(e.b,Uo),fr.subVectors(e.c,Uo),Ia.subVectors(ur,cr),Ba.subVectors(fr,ur),ds.subVectors(cr,fr);let i=[0,-Ia.z,Ia.y,0,-Ba.z,Ba.y,0,-ds.z,ds.y,Ia.z,0,-Ia.x,Ba.z,0,-Ba.x,ds.z,0,-ds.x,-Ia.y,Ia.x,0,-Ba.y,Ba.x,0,-ds.y,ds.x,0];return!ih(i,cr,ur,fr,nc)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,cr,ur,fr,nc))?!1:(ic.crossVectors(Ia,Ba),i=[ic.x,ic.y,ic.z],ih(i,cr,ur,fr,nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new et,new et,new et,new et,new et,new et,new et,new et],xi=new et,ec=new Go,cr=new et,ur=new et,fr=new et,Ia=new et,Ba=new et,ds=new et,Uo=new et,nc=new et,ic=new et,ps=new et;function ih(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ps.fromArray(o,u);const d=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=e.dot(ps),p=i.dot(ps),v=s.dot(ps);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Ty=new Go,Lo=new et,ah=new et;class Ic{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Ty.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(ah)),this.expandByPoint(Lo.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new et,sh=new et,ac=new et,Fa=new et,rh=new et,sc=new et,oh=new et;class Ed{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){sh.copy(e).add(i).multiplyScalar(.5),ac.copy(i).sub(e).normalize(),Fa.copy(this.origin).sub(sh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(ac),d=Fa.dot(this.direction),m=-Fa.dot(ac),p=Fa.lengthSq(),v=Math.abs(1-h*h);let x,S,M,b;if(v>0)if(x=h*m-d,S=h*d-m,b=u*v,x>=0)if(S>=-b)if(S<=b){const R=1/v;x*=R,S*=R,M=x*(x+h*S+2*d)+S*(h*x+S+2*m)+p}else S=u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S<=-b?(x=Math.max(0,-(-h*u+d)),S=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p):S<=b?(x=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(x=Math.max(0,-(h*u+d)),S=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p);else S=h>0?-u:u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(sh).addScaledVector(ac,S),M}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-S.z)*x,m=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,m=(e.min.z-S.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,s,l,u){rh.subVectors(i,e),sc.subVectors(s,e),oh.crossVectors(rh,sc);let h=this.direction.dot(oh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,e);const m=d*this.direction.dot(sc.crossVectors(Fa,sc));if(m<0)return null;const p=d*this.direction.dot(rh.cross(Fa));if(p<0||m+p>h)return null;const v=-d*Fa.dot(oh);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,s,l,u,h,d,m,p,v,x,S,M,b,R,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,v,x,S,M,b,R,y)}set(e,i,s,l,u,h,d,m,p,v,x,S,M,b,R,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=x,_[14]=S,_[3]=M,_[7]=b,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/hr.setFromMatrixColumn(e,0).length(),u=1/hr.setFromMatrixColumn(e,1).length(),h=1/hr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=h*v,M=h*x,b=d*v,R=d*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=M+b*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,M=m*x,b=p*v,R=p*x;i[0]=S+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*v,i[9]=-d,i[2]=M*d-b,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,M=m*x,b=p*v,R=p*x;i[0]=S-R*d,i[4]=-h*x,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*v,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,M=h*x,b=d*v,R=d*x;i[0]=m*v,i[4]=b*p-M,i[8]=S*p+R,i[1]=m*x,i[5]=R*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*v,i[4]=R-S*x,i[8]=b*x+M,i[1]=x,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*x+b,i[10]=S-R*x}else if(e.order==="XZY"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=S*x+R,i[5]=h*v,i[9]=M*x-b,i[2]=b*x-M,i[6]=d*v,i[10]=R*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(by,e,Ay)}lookAt(e,i,s){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ha.crossVectors(s,Qn),Ha.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ha.crossVectors(s,Qn)),Ha.normalize(),rc.crossVectors(Qn,Ha),l[0]=Ha.x,l[4]=rc.x,l[8]=Qn.x,l[1]=Ha.y,l[5]=rc.y,l[9]=Qn.y,l[2]=Ha.z,l[6]=rc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],x=s[5],S=s[9],M=s[13],b=s[2],R=s[6],y=s[10],_=s[14],I=s[3],N=s[7],D=s[11],st=s[15],H=l[0],P=l[4],Z=l[8],w=l[12],C=l[1],F=l[5],lt=l[9],it=l[13],pt=l[2],dt=l[6],O=l[10],V=l[14],q=l[3],St=l[7],xt=l[11],L=l[15];return u[0]=h*H+d*C+m*pt+p*q,u[4]=h*P+d*F+m*dt+p*St,u[8]=h*Z+d*lt+m*O+p*xt,u[12]=h*w+d*it+m*V+p*L,u[1]=v*H+x*C+S*pt+M*q,u[5]=v*P+x*F+S*dt+M*St,u[9]=v*Z+x*lt+S*O+M*xt,u[13]=v*w+x*it+S*V+M*L,u[2]=b*H+R*C+y*pt+_*q,u[6]=b*P+R*F+y*dt+_*St,u[10]=b*Z+R*lt+y*O+_*xt,u[14]=b*w+R*it+y*V+_*L,u[3]=I*H+N*C+D*pt+st*q,u[7]=I*P+N*F+D*dt+st*St,u[11]=I*Z+N*lt+D*O+st*xt,u[15]=I*w+N*it+D*V+st*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],x=e[6],S=e[10],M=e[14],b=e[3],R=e[7],y=e[11],_=e[15];return b*(+u*m*x-l*p*x-u*d*S+s*p*S+l*d*M-s*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*v-u*m*v)+y*(+i*p*x-i*d*M-u*h*x+s*h*M+u*d*v-s*p*v)+_*(-l*d*v-i*m*x+i*d*S+l*h*x-s*h*S+s*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=e[9],S=e[10],M=e[11],b=e[12],R=e[13],y=e[14],_=e[15],I=x*y*p-R*S*p+R*m*M-d*y*M-x*m*_+d*S*_,N=b*S*p-v*y*p-b*m*M+h*y*M+v*m*_-h*S*_,D=v*R*p-b*x*p+b*d*M-h*R*M-v*d*_+h*x*_,st=b*x*m-v*R*m-b*d*S+h*R*S+v*d*y-h*x*y,H=i*I+s*N+l*D+u*st;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=I*P,e[1]=(R*S*u-x*y*u-R*l*M+s*y*M+x*l*_-s*S*_)*P,e[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*_+s*m*_)*P,e[3]=(x*m*u-d*S*u-x*l*p+s*S*p+d*l*M-s*m*M)*P,e[4]=N*P,e[5]=(v*y*u-b*S*u+b*l*M-i*y*M-v*l*_+i*S*_)*P,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*P,e[7]=(h*S*u-v*m*u+v*l*p-i*S*p-h*l*M+i*m*M)*P,e[8]=D*P,e[9]=(b*x*u-v*R*u-b*s*M+i*R*M+v*s*_-i*x*_)*P,e[10]=(h*R*u-b*d*u+b*s*p-i*R*p-h*s*_+i*d*_)*P,e[11]=(v*d*u-h*x*u-v*s*p+i*x*p+h*s*M-i*d*M)*P,e[12]=st*P,e[13]=(v*R*l-b*x*l+b*s*S-i*R*S-v*s*y+i*x*y)*P,e[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*y-i*d*y)*P,e[15]=(h*x*l-v*d*l+v*s*m-i*x*m-h*s*S+i*d*S)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,x=d+d,S=u*p,M=u*v,b=u*x,R=h*v,y=h*x,_=d*x,I=m*p,N=m*v,D=m*x,st=s.x,H=s.y,P=s.z;return l[0]=(1-(R+_))*st,l[1]=(M+D)*st,l[2]=(b-N)*st,l[3]=0,l[4]=(M-D)*H,l[5]=(1-(S+_))*H,l[6]=(y+I)*H,l[7]=0,l[8]=(b+N)*P,l[9]=(y-I)*P,l[10]=(1-(S+R))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=hr.set(l[0],l[1],l[2]).length();const h=hr.set(l[4],l[5],l[6]).length(),d=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,v=1/h,x=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=ra){const m=this.elements,p=2*u/(i-e),v=2*u/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let M,b;if(d===ra)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Nc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=ra){const m=this.elements,p=1/(i-e),v=1/(s-l),x=1/(h-u),S=(i+e)*p,M=(s+l)*v;let b,R;if(d===ra)b=(h+u)*x,R=-2*x;else if(d===Nc)b=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const hr=new et,Si=new tn,by=new et(0,0,0),Ay=new et(1,1,1),Ha=new et,rc=new et,Qn=new et,Lg=new tn,Ng=new As;class ca{constructor(e=0,i=0,s=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ln(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ln(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";let k0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ry=0;const Og=new et,dr=new As,ea=new tn,oc=new et,No=new et,Cy=new et,wy=new As,Pg=new et(1,0,0),zg=new et(0,1,0),Ig=new et(0,0,1),Bg={type:"added"},Dy={type:"removed"},pr={type:"childadded",child:null},lh={type:"childremoved",child:null};class kn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new et,i=new ca,s=new As,l=new et(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new oe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(Pg,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(Ig,e)}translateOnAxis(e,i){return Og.copy(e).applyQuaternion(this.quaternion),this.position.add(Og.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Pg,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(Ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?oc.copy(e):oc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(No,oc,this.up):ea.lookAt(oc,No,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(ea),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bg),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Dy),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bg),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,Cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),x=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new et(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new et,na=new et,ch=new et,ia=new et,mr=new et,_r=new et,Fg=new et,uh=new et,fh=new et,hh=new et,dh=new $e,ph=new $e,mh=new $e;let Oo=class yr{constructor(e=new et,i=new et,s=new et){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){yi.subVectors(l,i),na.subVectors(s,i),ch.subVectors(e,i);const h=yi.dot(yi),d=yi.dot(na),m=yi.dot(ch),p=na.dot(na),v=na.dot(ch),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(p*m-d*v)*S,b=(h*v-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(dh,u.x),h.addScaledVector(ph,u.y),h.addScaledVector(mh,u.z),h}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),na.subVectors(e,i),yi.cross(na).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),yi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yr.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return yr.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;mr.subVectors(l,s),_r.subVectors(u,s),uh.subVectors(e,s);const m=mr.dot(uh),p=_r.dot(uh);if(m<=0&&p<=0)return i.copy(s);fh.subVectors(e,l);const v=mr.dot(fh),x=_r.dot(fh);if(v>=0&&x<=v)return i.copy(l);const S=m*x-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(mr,h);hh.subVectors(e,u);const M=mr.dot(hh),b=_r.dot(hh);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(_r,d);const y=v*b-M*x;if(y<=0&&x-v>=0&&M-b>=0)return Fg.subVectors(u,l),d=(x-v)/(x-v+(M-b)),i.copy(l).addScaledVector(Fg,d);const _=1/(y+R+S);return h=R*_,d=S*_,i.copy(s).addScaledVector(mr,h).addScaledVector(_r,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const X0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},lc={h:0,s:0,l:0};function _h(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Me.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Me.workingColorSpace){return this.r=e,this.g=i,this.b=s,Me.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Me.workingColorSpace){if(e=dy(e,1),i=Ln(i,0,1),s=Ln(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=_h(h,u,e+1/3),this.g=_h(h,u,e),this.b=_h(h,u,e-1/3)}return Me.toWorkingColorSpace(this,l),this}setStyle(e,i=ui){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const s=X0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Me.fromWorkingColorSpace(wn.copy(this),e),Math.round(Ln(wn.r*255,0,255))*65536+Math.round(Ln(wn.g*255,0,255))*256+Math.round(Ln(wn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Me.workingColorSpace){Me.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=v<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Me.workingColorSpace){return Me.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ui){Me.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+e,Ga.s+i,Ga.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ga),e.getHSL(lc);const s=$f(Ga.h,lc.h,i),l=$f(Ga.s,lc.s,i),u=$f(Ga.l,lc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ue;Ue.NAMES=X0;let Uy=0;class Vo extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ho(),this.name="",this.blending=br,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=wh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(s.blending=this.blending),this.side!==ja&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ch&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class W0 extends Vo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=R0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new et,cc=new ue;class Ti{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Eg,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(e),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Do(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eg&&(e.usage=this.usage),e}}class Y0 extends Ti{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class q0 extends Ti{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Es extends Ti{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Ly=0;const ci=new tn,gh=new kn,gr=new et,Jn=new Go,Po=new Go,mn=new et;class fa extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?q0:Y0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new oe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,s){return ci.makeTranslation(e,i,s),this.applyMatrix4(ci),this}scale(e,i,s){return ci.makeScale(e,i,s),this.applyMatrix4(ci),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Es(s,3))}else{for(let s=0,l=i.count;s<l;s++){const u=e[s];i.setXYZ(s,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(Jn.min,Po.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,Po.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(Po.min),Jn.expandByPoint(Po.max))}Jn.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)mn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)mn.fromBufferAttribute(d,p),m&&(gr.fromBufferAttribute(e,p),mn.add(gr)),l=Math.max(l,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<s.count;Z++)d[Z]=new et,m[Z]=new et;const p=new et,v=new et,x=new et,S=new ue,M=new ue,b=new ue,R=new et,y=new et;function _(Z,w,C){p.fromBufferAttribute(s,Z),v.fromBufferAttribute(s,w),x.fromBufferAttribute(s,C),S.fromBufferAttribute(u,Z),M.fromBufferAttribute(u,w),b.fromBufferAttribute(u,C),v.sub(p),x.sub(p),M.sub(S),b.sub(S);const F=1/(M.x*b.y-b.x*M.y);isFinite(F)&&(R.copy(v).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(F),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(F),d[Z].add(R),d[w].add(R),d[C].add(R),m[Z].add(y),m[w].add(y),m[C].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Z=0,w=I.length;Z<w;++Z){const C=I[Z],F=C.start,lt=C.count;for(let it=F,pt=F+lt;it<pt;it+=3)_(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const N=new et,D=new et,st=new et,H=new et;function P(Z){st.fromBufferAttribute(l,Z),H.copy(st);const w=d[Z];N.copy(w),N.sub(st.multiplyScalar(st.dot(w))).normalize(),D.crossVectors(H,w);const F=D.dot(m[Z])<0?-1:1;h.setXYZW(Z,N.x,N.y,N.z,F)}for(let Z=0,w=I.length;Z<w;++Z){const C=I[Z],F=C.start,lt=C.count;for(let it=F,pt=F+lt;it<pt;it+=3)P(e.getX(it+0)),P(e.getX(it+1)),P(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new et,u=new et,h=new et,d=new et,m=new et,p=new et,v=new et,x=new et;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),v.subVectors(h,u),x.subVectors(l,u),v.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,u),x.subVectors(l,u),v.cross(x),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,x=d.normalized,S=new p.constructor(m.length*v);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*v;for(let _=0;_<v;_++)S[b++]=p[M++]}return new Ti(S,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fa,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,x=p.length;v<x;v++){const S=p[v],M=e(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],x=u[p];for(let S=0,M=x.length;S<M;S++)v.push(x[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hg=new tn,ms=new Ed,uc=new Ic,Gg=new et,fc=new et,hc=new et,dc=new et,vh=new et,pc=new et,Vg=new et,mc=new et;class Ni extends kn{constructor(e=new fa,i=new W0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){pc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],x=u[m];v!==0&&(vh.fromBufferAttribute(x,e),h?pc.addScaledVector(vh,v):pc.addScaledVector(vh.sub(i),v))}i.add(pc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),uc.copy(s.boundingSphere),uc.applyMatrix4(u),ms.copy(e.ray).recast(e.near),!(uc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(uc,Gg)===null||ms.origin.distanceToSquared(Gg)>(e.far-e.near)**2))&&(Hg.copy(u).invert(),ms.copy(e.ray).applyMatrix4(Hg),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ms)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],_=h[y.materialIndex],I=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,st=N;D<st;D+=3){const H=d.getX(D),P=d.getX(D+1),Z=d.getX(D+2);l=_c(this,_,e,s,p,v,x,H,P,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const I=d.getX(y),N=d.getX(y+1),D=d.getX(y+2);l=_c(this,h,e,s,p,v,x,I,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],_=h[y.materialIndex],I=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,st=N;D<st;D+=3){const H=D,P=D+1,Z=D+2;l=_c(this,_,e,s,p,v,x,H,P,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const I=y,N=y+1,D=y+2;l=_c(this,h,e,s,p,v,x,I,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ny(o,e,i,s,l,u,h,d){let m;if(e.side===Vn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===ja,d),m===null)return null;mc.copy(d),mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(mc);return p<i.near||p>i.far?null:{distance:p,point:mc.clone(),object:o}}function _c(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,fc),o.getVertexPosition(m,hc),o.getVertexPosition(p,dc);const v=Ny(o,e,i,s,fc,hc,dc,Vg);if(v){const x=new et;Oo.getBarycoord(Vg,fc,hc,dc,x),l&&(v.uv=Oo.getInterpolatedAttribute(l,d,m,p,x,new ue)),u&&(v.uv1=Oo.getInterpolatedAttribute(u,d,m,p,x,new ue)),h&&(v.normal=Oo.getInterpolatedAttribute(h,d,m,p,x,new et),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new et,materialIndex:0};Oo.getNormal(fc,hc,dc,S.normal),v.face=S,v.barycoord=x}return v}class ko extends fa{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],x=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Es(p,3)),this.setAttribute("normal",new Es(v,3)),this.setAttribute("uv",new Es(x,2));function b(R,y,_,I,N,D,st,H,P,Z,w){const C=D/P,F=st/Z,lt=D/2,it=st/2,pt=H/2,dt=P+1,O=Z+1;let V=0,q=0;const St=new et;for(let xt=0;xt<O;xt++){const L=xt*F-it;for(let J=0;J<dt;J++){const vt=J*C-lt;St[R]=vt*I,St[y]=L*N,St[_]=pt,p.push(St.x,St.y,St.z),St[R]=0,St[y]=0,St[_]=H>0?1:-1,v.push(St.x,St.y,St.z),x.push(J/P),x.push(1-xt/Z),V+=1}}for(let xt=0;xt<Z;xt++)for(let L=0;L<P;L++){const J=S+L+dt*xt,vt=S+L+dt*(xt+1),j=S+(L+1)+dt*(xt+1),ct=S+(L+1)+dt*xt;m.push(J,vt,ct),m.push(vt,j,ct),q+=6}d.addGroup(M,q,w),M+=q,S+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const s=Nr(o[i]);for(const l in s)e[l]=s[l]}return e}function Oy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function j0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Me.workingColorSpace}const Py={clone:Nr,merge:Un};var zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends Vo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zy,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=Oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Z0 extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new et,kg=new ue,Xg=new ue;class fi extends Z0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-e/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Va.x,Va.y).multiplyScalar(-e/Va.z)}getViewSize(e,i){return this.getViewBounds(e,kg,Xg),i.subVectors(Xg,kg)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Dc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,xr=1;class By extends kn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(vr,xr,e,i);l.layers=this.layers,this.add(l);const u=new fi(vr,xr,e,i);u.layers=this.layers,this.add(u);const h=new fi(vr,xr,e,i);h.layers=this.layers,this.add(h);const d=new fi(vr,xr,e,i);d.layers=this.layers,this.add(d);const m=new fi(vr,xr,e,i);m.layers=this.layers,this.add(m);const p=new fi(vr,xr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(x,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class K0 extends En{constructor(e,i,s,l,u,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:wr,super(e,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fy extends bs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new K0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:hi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ko(5,5,5),u=new ua({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Ya});u.uniforms.tEquirect.value=i;const h=new Ni(l,u),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=hi),new By(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}const xh=new et,Hy=new et,Gy=new oe;class ka{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=xh.subVectors(s,i).cross(Hy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Gy.getNormalMatrix(e),l=this.coplanarPoint(xh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Ic,gc=new et;class Q0{constructor(e=new ka,i=new ka,s=new ka,l=new ka,u=new ka,h=new ka){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],x=l[6],S=l[7],M=l[8],b=l[9],R=l[10],y=l[11],_=l[12],I=l[13],N=l[14],D=l[15];if(s[0].setComponents(m-u,S-p,y-M,D-_).normalize(),s[1].setComponents(m+u,S+p,y+M,D+_).normalize(),s[2].setComponents(m+h,S+v,y+b,D+I).normalize(),s[3].setComponents(m-h,S-v,y-b,D-I).normalize(),s[4].setComponents(m-d,S-x,y-R,D-N).normalize(),i===ra)s[5].setComponents(m+d,S+x,y+R,D+N).normalize();else if(i===Nc)s[5].setComponents(d,x,R,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J0(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Vy(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const v=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,v);else{x.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<x.length;M++){const b=x[S],R=x[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,x[S]=R)}x.length=S+1;for(let M=0,b=x.length;M<b;M++){const R=x[M];o.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}class Xo extends fa{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,x=e/d,S=i/m,M=[],b=[],R=[],y=[];for(let _=0;_<v;_++){const I=_*S-h;for(let N=0;N<p;N++){const D=N*x-u;b.push(D,-I,0),R.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const N=I+p*_,D=I+p*(_+1),st=I+1+p*(_+1),H=I+1+p*_;M.push(N,D,H),M.push(D,st,H)}this.setIndex(M),this.setAttribute("position",new Es(b,3)),this.setAttribute("normal",new Es(R,3)),this.setAttribute("uv",new Es(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xy=`#ifdef USE_ALPHAHASH
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
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zy=`#ifdef USE_AOMAP
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
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qy=`#ifdef USE_BATCHING
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
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nM=`#ifdef USE_IRIDESCENCE
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
#endif`,iM=`#ifdef USE_BUMPMAP
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
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hM=`#define PI 3.141592653589793
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
} // validated`,dM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pM=`vec3 transformedNormal = objectNormal;
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
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DM=`#ifdef USE_GRADIENTMAP
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
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
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
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
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
#endif`,GM=`struct PhysicalMaterial {
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
}`,VM=`
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JM=`#if defined( USE_POINTS_UV )
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
#endif`,$M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
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
#endif`,sE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fE=`#ifdef USE_NORMALMAP
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
#endif`,hE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RE=`float getShadowMask() {
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
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
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
#endif`,DE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UE=`#ifdef USE_SKINNING
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
#endif`,LE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`#include <common>
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
}`,ZE=`#if DEPTH_PACKING == 3200
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
}`,KE=`#define DISTANCE
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
}`,QE=`#define DISTANCE
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
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
}`,eT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 diffuse;
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
}`,aT=`#define LAMBERT
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
}`,sT=`#define LAMBERT
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
}`,rT=`#define MATCAP
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
}`,oT=`#define MATCAP
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
}`,lT=`#define NORMAL
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
}`,cT=`#define NORMAL
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
}`,uT=`#define PHONG
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
}`,fT=`#define PHONG
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
}`,hT=`#define STANDARD
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
}`,dT=`#define STANDARD
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
}`,pT=`#define TOON
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
}`,mT=`#define TOON
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
}`,_T=`uniform float size;
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
}`,gT=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,xT=`uniform vec3 color;
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
}`,ST=`uniform float rotation;
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
}`,yT=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:ky,alphahash_pars_fragment:Xy,alphamap_fragment:Wy,alphamap_pars_fragment:Yy,alphatest_fragment:qy,alphatest_pars_fragment:jy,aomap_fragment:Zy,aomap_pars_fragment:Ky,batching_pars_vertex:Qy,batching_vertex:Jy,begin_vertex:$y,beginnormal_vertex:tM,bsdfs:eM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:oM,color_fragment:lM,color_pars_fragment:cM,color_pars_vertex:uM,color_vertex:fM,common:hM,cube_uv_reflection_fragment:dM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:_M,emissivemap_fragment:gM,emissivemap_pars_fragment:vM,colorspace_fragment:xM,colorspace_pars_fragment:SM,envmap_fragment:yM,envmap_common_pars_fragment:MM,envmap_pars_fragment:EM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:PM,envmap_vertex:bM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:CM,fog_pars_fragment:wM,gradientmap_pars_fragment:DM,lightmap_pars_fragment:UM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:NM,lights_pars_begin:OM,lights_toon_fragment:zM,lights_toon_pars_fragment:IM,lights_phong_fragment:BM,lights_phong_pars_fragment:FM,lights_physical_fragment:HM,lights_physical_pars_fragment:GM,lights_fragment_begin:VM,lights_fragment_maps:kM,lights_fragment_end:XM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:YM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:jM,map_fragment:ZM,map_pars_fragment:KM,map_particle_fragment:QM,map_particle_pars_fragment:JM,metalnessmap_fragment:$M,metalnessmap_pars_fragment:tE,morphinstance_vertex:eE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:aE,morphtarget_vertex:sE,normal_fragment_begin:rE,normal_fragment_maps:oE,normal_pars_fragment:lE,normal_pars_vertex:cE,normal_vertex:uE,normalmap_pars_fragment:fE,clearcoat_normal_fragment_begin:hE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:_E,packing:gE,premultiplied_alpha_fragment:vE,project_vertex:xE,dithering_fragment:SE,dithering_pars_fragment:yE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:EE,shadowmap_pars_fragment:TE,shadowmap_pars_vertex:bE,shadowmap_vertex:AE,shadowmask_pars_fragment:RE,skinbase_vertex:CE,skinning_pars_vertex:wE,skinning_vertex:DE,skinnormal_vertex:UE,specularmap_fragment:LE,specularmap_pars_fragment:NE,tonemapping_fragment:OE,tonemapping_pars_fragment:PE,transmission_fragment:zE,transmission_pars_fragment:IE,uv_pars_fragment:BE,uv_pars_vertex:FE,uv_vertex:HE,worldpos_vertex:GE,background_vert:VE,background_frag:kE,backgroundCube_vert:XE,backgroundCube_frag:WE,cube_vert:YE,cube_frag:qE,depth_vert:jE,depth_frag:ZE,distanceRGBA_vert:KE,distanceRGBA_frag:QE,equirect_vert:JE,equirect_frag:$E,linedashed_vert:tT,linedashed_frag:eT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:aT,meshlambert_frag:sT,meshmatcap_vert:rT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:uT,meshphong_frag:fT,meshphysical_vert:hT,meshphysical_frag:dT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:_T,points_frag:gT,shadow_vert:vT,shadow_frag:xT,sprite_vert:ST,sprite_frag:yT},Lt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ui={basic:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Un([Lt.common,Lt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Un([Lt.lights,Lt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ui.physical={uniforms:Un([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const vc={r:0,b:0,g:0},gs=new ca,MT=new tn;function ET(o,e,i,s,l,u,h){const d=new Ue(0);let m=u===!0?0:1,p,v,x=null,S=0,M=null;function b(I){let N=I.isScene===!0?I.background:null;return N&&N.isTexture&&(N=(I.backgroundBlurriness>0?i:e).get(N)),N}function R(I){let N=!1;const D=b(I);D===null?_(d,m):D&&D.isColor&&(_(D,1),N=!0);const st=o.xr.getEnvironmentBlendMode();st==="additive"?s.buffers.color.setClear(0,0,0,1,h):st==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(I,N){const D=b(N);D&&(D.isCubeTexture||D.mapping===Pc)?(v===void 0&&(v=new Ni(new ko(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:Nr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(st,H,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),gs.copy(N.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(gs)),v.material.toneMapped=Me.getTransfer(D.colorSpace)!==Be,(x!==D||S!==D.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,x=D,S=D.version,M=o.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Ni(new Xo(2,2),new ua({name:"BackgroundMaterial",uniforms:Nr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Me.getTransfer(D.colorSpace)!==Be,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||S!==D.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=D,S=D.version,M=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function _(I,N){I.getRGB(vc,j0(o)),s.buffers.color.setClear(vc.r,vc.g,vc.b,N,h)}return{getClearColor:function(){return d},setClearColor:function(I,N=1){d.set(I),m=N,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(I){m=I,_(d,m)},render:R,addToRenderList:y}}function TT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(C,F,lt,it,pt){let dt=!1;const O=x(it,lt,F);u!==O&&(u=O,p(u.object)),dt=M(C,it,lt,pt),dt&&b(C,it,lt,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(C,F,lt,it),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function x(C,F,lt){const it=lt.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let dt=pt[F.id];dt===void 0&&(dt={},pt[F.id]=dt);let O=dt[it];return O===void 0&&(O=S(m()),dt[it]=O),O}function S(C){const F=[],lt=[],it=[];for(let pt=0;pt<i;pt++)F[pt]=0,lt[pt]=0,it[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:lt,attributeDivisors:it,object:C,attributes:{},index:null}}function M(C,F,lt,it){const pt=u.attributes,dt=F.attributes;let O=0;const V=lt.getAttributes();for(const q in V)if(V[q].location>=0){const xt=pt[q];let L=dt[q];if(L===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),xt===void 0||xt.attribute!==L||L&&xt.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==it}function b(C,F,lt,it){const pt={},dt=F.attributes;let O=0;const V=lt.getAttributes();for(const q in V)if(V[q].location>=0){let xt=dt[q];xt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor));const L={};L.attribute=xt,xt&&xt.data&&(L.data=xt.data),pt[q]=L,O++}u.attributes=pt,u.attributesNum=O,u.index=it}function R(){const C=u.newAttributes;for(let F=0,lt=C.length;F<lt;F++)C[F]=0}function y(C){_(C,0)}function _(C,F){const lt=u.newAttributes,it=u.enabledAttributes,pt=u.attributeDivisors;lt[C]=1,it[C]===0&&(o.enableVertexAttribArray(C),it[C]=1),pt[C]!==F&&(o.vertexAttribDivisor(C,F),pt[C]=F)}function I(){const C=u.newAttributes,F=u.enabledAttributes;for(let lt=0,it=F.length;lt<it;lt++)F[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),F[lt]=0)}function N(C,F,lt,it,pt,dt,O){O===!0?o.vertexAttribIPointer(C,F,lt,pt,dt):o.vertexAttribPointer(C,F,lt,it,pt,dt)}function D(C,F,lt,it){R();const pt=it.attributes,dt=lt.getAttributes(),O=F.defaultAttributeValues;for(const V in dt){const q=dt[V];if(q.location>=0){let St=pt[V];if(St===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const xt=St.normalized,L=St.itemSize,J=e.get(St);if(J===void 0)continue;const vt=J.buffer,j=J.type,ct=J.bytesPerElement,Et=j===o.INT||j===o.UNSIGNED_INT||St.gpuType===gd;if(St.isInterleavedBufferAttribute){const yt=St.data,Ht=yt.stride,Ft=St.offset;if(yt.isInstancedInterleavedBuffer){for(let ne=0;ne<q.locationSize;ne++)_(q.location+ne,yt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ne=0;ne<q.locationSize;ne++)y(q.location+ne);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let ne=0;ne<q.locationSize;ne++)N(q.location+ne,L/q.locationSize,j,xt,Ht*ct,(Ft+L/q.locationSize*ne)*ct,Et)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<q.locationSize;yt++)_(q.location+yt,St.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<q.locationSize;yt++)y(q.location+yt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let yt=0;yt<q.locationSize;yt++)N(q.location+yt,L/q.locationSize,j,xt,L*ct,L/q.locationSize*yt*ct,Et)}}else if(O!==void 0){const xt=O[V];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(q.location,xt);break;case 3:o.vertexAttrib3fv(q.location,xt);break;case 4:o.vertexAttrib4fv(q.location,xt);break;default:o.vertexAttrib1fv(q.location,xt)}}}}I()}function st(){Z();for(const C in s){const F=s[C];for(const lt in F){const it=F[lt];for(const pt in it)v(it[pt].object),delete it[pt];delete F[lt]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const F=s[C.id];for(const lt in F){const it=F[lt];for(const pt in it)v(it[pt].object),delete it[pt];delete F[lt]}delete s[C.id]}function P(C){for(const F in s){const lt=s[F];if(lt[C.id]===void 0)continue;const it=lt[C.id];for(const pt in it)v(it[pt].object),delete it[pt];delete lt[C.id]}}function Z(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:st,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:y,disableUnusedAttributes:I}}function bT(o,e,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,x){x!==0&&(o.drawArraysInstanced(s,p,v,x),i.update(v,s,x))}function d(p,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,x);let M=0;for(let b=0;b<x;b++)M+=v[b];i.update(M,s,1)}function m(p,v,x,S){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,x);let b=0;for(let R=0;R<x;R++)b+=v[R]*S[R];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function AT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Mi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const Z=P===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==la&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==sa&&!Z)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),st=b>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:st,maxSamples:H}}function RT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new ka,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||s!==0||l;return l=S,s=x.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=v(x,S,0)},this.setState=function(x,S,M){const b=x.clippingPlanes,R=x.clipIntersection,y=x.clipShadows,_=o.get(x);if(!l||b===null||b.length===0||u&&!y)u?v(null):p();else{const I=u?0:s,N=I*4;let D=_.clippingState||null;m.value=D,D=v(b,S,N,M);for(let st=0;st!==N;++st)D[st]=i[st];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,S,M,b){const R=x!==null?x.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const _=M+R*4,I=S.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,D=M;N!==R;++N,D+=4)h.copy(x[N]).applyMatrix4(I,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function CT(o){let e=new WeakMap;function i(h,d){return d===Ih?h.mapping=wr:d===Bh&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ih||d===Bh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Fy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class wT extends Z0{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Er=4,Wg=[.125,.215,.35,.446,.526,.582],ys=20,Sh=new wT,Yg=new Ue;let yh=null,Mh=0,Eh=0,Th=!1;const xs=(1+Math.sqrt(5))/2,Sr=1/xs,qg=[new et(-xs,Sr,0),new et(xs,Sr,0),new et(-Sr,0,xs),new et(Sr,0,xs),new et(0,xs,-Sr),new et(0,xs,Sr),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)];class jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Mh,Eh),this._renderer.xr.enabled=Th,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Fo,format:Mi,colorSpace:Or,depthBuffer:!1},l=Zg(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zg(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DT(u)),this._blurMaterial=UT(u,e,i)}return l}_compileMaterial(e){const i=new Ni(this._lodPlanes[0],e);this._renderer.compile(i,Sh)}_sceneToCubeUV(e,i,s,l){const d=new fi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(Yg),v.toneMapping=qa,v.autoClear=!1;const M=new W0({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),b=new Ni(new ko,M);let R=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,R=!0):(M.color.copy(Yg),R=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):I===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const N=this._cubeSize;xc(l,I*N,_>2?N:0,N,N),v.setRenderTarget(l),R&&v.render(b,d),v.render(e,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=y}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===wr||e.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ni(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;xc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Sh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=qg[(l-u-1)%qg.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Ni(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ys-1),R=u/b,y=isFinite(u)?1+Math.floor(v*R):ys;y>ys&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const _=[];let I=0;for(let P=0;P<ys;++P){const Z=P/R,w=Math.exp(-Z*Z/2);_.push(w),P===0?I+=w:P<y&&(I+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/I;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-s;const D=this._sizeLods[l],st=3*D*(l>N-Er?l-N+Er:0),H=4*(this._cubeSize-D);xc(i,st,H,3*D,2*D),m.setRenderTarget(i),m.render(x,Sh)}}function DT(o){const e=[],i=[],s=[];let l=o;const u=o-Er+1+Wg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Er?m=Wg[h-o+Er-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,x=1+p,S=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,b=6,R=3,y=2,_=1,I=new Float32Array(R*b*M),N=new Float32Array(y*b*M),D=new Float32Array(_*b*M);for(let H=0;H<M;H++){const P=H%3*2/3-1,Z=H>2?0:-1,w=[P,Z,0,P+2/3,Z,0,P+2/3,Z+1,0,P,Z,0,P+2/3,Z+1,0,P,Z+1,0];I.set(w,R*b*H),N.set(S,y*b*H);const C=[H,H,H,H,H,H];D.set(C,_*b*H)}const st=new fa;st.setAttribute("position",new Ti(I,R)),st.setAttribute("uv",new Ti(N,y)),st.setAttribute("faceIndex",new Ti(D,_)),e.push(st),l>Er&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Zg(o,e,i){const s=new bs(o,e,i);return s.texture.mapping=Pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function UT(o,e,i){const s=new Float32Array(ys),l=new et(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Kg(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Qg(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function LT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ih||m===Bh,v=m===wr||m===Dr;if(p||v){let x=e.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new jg(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new jg(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function NT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&zo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function OT(o,e,i,s){const l={},u=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const R=S.morphAttributes[b];for(let y=0,_=R.length;y<_;y++)e.remove(R[y])}S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const b in S)e.update(S[b],o.ARRAY_BUFFER);const M=x.morphAttributes;for(const b in M){const R=M[b];for(let y=0,_=R.length;y<_;y++)e.update(R[y],o.ARRAY_BUFFER)}}function p(x){const S=[],M=x.index,b=x.attributes.position;let R=0;if(M!==null){const I=M.array;R=M.version;for(let N=0,D=I.length;N<D;N+=3){const st=I[N+0],H=I[N+1],P=I[N+2];S.push(st,H,H,P,P,st)}}else if(b!==void 0){const I=b.array;R=b.version;for(let N=0,D=I.length/3-1;N<D;N+=3){const st=N+0,H=N+1,P=N+2;S.push(st,H,H,P,P,st)}}else return;const y=new(H0(S)?q0:Y0)(S,1);y.version=R;const _=u.get(x);_&&e.remove(_),u.set(x,y)}function v(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function PT(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,u,S*h,b),i.update(M,s,b))}function v(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function x(S,M,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,R,0,b);let _=0;for(let I=0;I<b;I++)_+=M[I]*R[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function zT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function IT(o,e,i){const s=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==x){let C=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let st=d.attributes.position.count*D,H=1;st>e.maxTextureSize&&(H=Math.ceil(st/e.maxTextureSize),st=e.maxTextureSize);const P=new Float32Array(st*H*4*x),Z=new V0(P,st,H,x);Z.type=sa,Z.needsUpdate=!0;const w=D*4;for(let F=0;F<x;F++){const lt=_[F],it=I[F],pt=N[F],dt=st*H*4*F;for(let O=0;O<lt.count;O++){const V=O*w;b===!0&&(l.fromBufferAttribute(lt,O),P[dt+V+0]=l.x,P[dt+V+1]=l.y,P[dt+V+2]=l.z,P[dt+V+3]=0),R===!0&&(l.fromBufferAttribute(it,O),P[dt+V+4]=l.x,P[dt+V+5]=l.y,P[dt+V+6]=l.z,P[dt+V+7]=0),y===!0&&(l.fromBufferAttribute(pt,O),P[dt+V+8]=l.x,P[dt+V+9]=l.y,P[dt+V+10]=l.z,P[dt+V+11]=pt.itemSize===4?l.w:1)}}S={count:x,texture:Z,size:new ue(st,H)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function BT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,x=e.get(m,v);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class $0 extends En{constructor(e,i,s,l,u,h,d,m,p,v=Ar){if(v!==Ar&&v!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===Ar&&(s=Ts),s===void 0&&v===Lr&&(s=Ur),super(null,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ei,this.minFilter=m!==void 0?m:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const tv=new En,Jg=new $0(1,1),ev=new V0,nv=new Ey,iv=new K0,$g=[],t0=[],e0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function Pr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=$g[l];if(u===void 0&&(u=new Float32Array(l),$g[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Bc(o,e){let i=t0[e];i===void 0&&(i=new Int32Array(e),t0[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function FT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function kT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;i0.set(s),o.uniformMatrix2fv(this.addr,!1,i0),hn(i,s)}}function XT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;n0.set(s),o.uniformMatrix3fv(this.addr,!1,n0),hn(i,s)}}function WT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;e0.set(s),o.uniformMatrix4fv(this.addr,!1,e0),hn(i,s)}}function YT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function KT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function tb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Jg.compareFunction=F0,u=Jg):u=tv,i.setTexture2D(e||u,l)}function eb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||nv,l)}function nb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||iv,l)}function ib(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||ev,l)}function ab(o){switch(o){case 5126:return FT;case 35664:return HT;case 35665:return GT;case 35666:return VT;case 35674:return kT;case 35675:return XT;case 35676:return WT;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return jT;case 35669:case 35673:return ZT;case 5125:return KT;case 36294:return QT;case 36295:return JT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function sb(o,e){o.uniform1fv(this.addr,e)}function rb(o,e){const i=Pr(e,this.size,2);o.uniform2fv(this.addr,i)}function ob(o,e){const i=Pr(e,this.size,3);o.uniform3fv(this.addr,i)}function lb(o,e){const i=Pr(e,this.size,4);o.uniform4fv(this.addr,i)}function cb(o,e){const i=Pr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ub(o,e){const i=Pr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function fb(o,e){const i=Pr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function hb(o,e){o.uniform1iv(this.addr,e)}function db(o,e){o.uniform2iv(this.addr,e)}function pb(o,e){o.uniform3iv(this.addr,e)}function mb(o,e){o.uniform4iv(this.addr,e)}function _b(o,e){o.uniform1uiv(this.addr,e)}function gb(o,e){o.uniform2uiv(this.addr,e)}function vb(o,e){o.uniform3uiv(this.addr,e)}function xb(o,e){o.uniform4uiv(this.addr,e)}function Sb(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||tv,u[h])}function yb(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||nv,u[h])}function Mb(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||iv,u[h])}function Eb(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||ev,u[h])}function Tb(o){switch(o){case 5126:return sb;case 35664:return rb;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return fb;case 5124:case 35670:return hb;case 35667:case 35671:return db;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return _b;case 36294:return gb;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Eb}}class bb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ab(i.type)}}class Ab{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Tb(i.type)}}class Rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function a0(o,e){o.seq.push(e),o.map[e.id]=e}function Cb(o,e,i){const s=o.name,l=s.length;for(bh.lastIndex=0;;){const u=bh.exec(s),h=bh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){a0(i,p===void 0?new bb(d,o,e):new Ab(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new Rb(d),a0(i,x)),i=x}}}class Uc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Cb(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function s0(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const wb=37297;let Db=0;function Ub(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const r0=new oe;function Lb(o){Me._getMatrix(r0,Me.workingColorSpace,o);const e=`mat3( ${r0.elements.map(i=>i.toFixed(4))} )`;switch(Me.getTransfer(o)){case zc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function o0(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Ub(o.getShaderSource(e),h)}else return l}function Nb(o,e){const i=Lb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Ob(o,e){let i;switch(e){case jS:i="Linear";break;case ZS:i="Reinhard";break;case KS:i="Cineon";break;case QS:i="ACESFilmic";break;case $S:i="AgX";break;case ty:i="Neutral";break;case JS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new et;function Pb(){Me.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Ib(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Bb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Io(o){return o!==""}function l0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(o){return o.replace(Fb,Gb)}const Hb=new Map;function Gb(o,e){let i=le[e];if(i===void 0){const s=Hb.get(e);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return dd(i)}const Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(o){return o.replace(Vb,kb)}function kb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function f0(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Xb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===A0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===RS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function Wb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case wr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case R0:e="ENVMAP_BLENDING_MULTIPLY";break;case YS:e="ENVMAP_BLENDING_MIX";break;case qS:e="ENVMAP_BLENDING_ADD";break}return e}function jb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Zb(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Xb(i),p=Wb(i),v=Yb(i),x=qb(i),S=jb(i),M=zb(i),b=Ib(u),R=l.createProgram();let y,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),_.length>0&&(_+=`
`)):(y=[f0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),_=[f0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?le.tonemapping_pars_fragment:"",i.toneMapping!==qa?Ob("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Nb("linearToOutputTexel",i.outputColorSpace),Pb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=dd(h),h=l0(h,i),h=c0(h,i),d=dd(d),d=l0(d,i),d=c0(d,i),h=u0(h),d=u0(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=I+y+h,D=I+_+d,st=s0(l,l.VERTEX_SHADER,N),H=s0(l,l.FRAGMENT_SHADER,D);l.attachShader(R,st),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(F){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R).trim(),it=l.getShaderInfoLog(st).trim(),pt=l.getShaderInfoLog(H).trim();let dt=!0,O=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,st,H);else{const V=o0(l,st,"vertex"),q=o0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+lt+`
`+V+`
`+q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(it===""||pt==="")&&(O=!1);O&&(F.diagnostics={runnable:dt,programLog:lt,vertexShader:{log:it,prefix:y},fragmentShader:{log:pt,prefix:_}})}l.deleteShader(st),l.deleteShader(H),Z=new Uc(l,R),w=Bb(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&P(this),Z};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,wb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Db++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=st,this.fragmentShader=H,this}let Kb=0;class Qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Jb(e),i.set(e,s)),s}}class Jb{constructor(e){this.id=Kb++,this.code=e,this.usedTimes=0}}function $b(o,e,i,s,l,u,h){const d=new k0,m=new Qb,p=new Set,v=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,F,lt,it){const pt=lt.fog,dt=it.geometry,O=w.isMeshStandardMaterial?lt.environment:null,V=(w.isMeshStandardMaterial?i:e).get(w.envMap||O),q=V&&V.mapping===Pc?V.image.height:null,St=b[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const xt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,L=xt!==void 0?xt.length:0;let J=0;dt.morphAttributes.position!==void 0&&(J=1),dt.morphAttributes.normal!==void 0&&(J=2),dt.morphAttributes.color!==void 0&&(J=3);let vt,j,ct,Et;if(St){const ye=Ui[St];vt=ye.vertexShader,j=ye.fragmentShader}else vt=w.vertexShader,j=w.fragmentShader,m.update(w),ct=m.getVertexShaderID(w),Et=m.getFragmentShaderID(w);const yt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),Ft=it.isInstancedMesh===!0,ne=it.isBatchedMesh===!0,Le=!!w.map,fe=!!w.matcap,ke=!!V,W=!!w.aoMap,Tn=!!w.lightMap,ce=!!w.bumpMap,pe=!!w.normalMap,Zt=!!w.displacementMap,Re=!!w.emissiveMap,qt=!!w.metalnessMap,U=!!w.roughnessMap,T=w.anisotropy>0,tt=w.clearcoat>0,ft=w.dispersion>0,Mt=w.iridescence>0,mt=w.sheen>0,Xt=w.transmission>0,Dt=T&&!!w.anisotropyMap,Pt=tt&&!!w.clearcoatMap,me=tt&&!!w.clearcoatNormalMap,bt=tt&&!!w.clearcoatRoughnessMap,zt=Mt&&!!w.iridescenceMap,jt=Mt&&!!w.iridescenceThicknessMap,Wt=mt&&!!w.sheenColorMap,Nt=mt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,ae=!!w.specularColorMap,Ne=!!w.specularIntensityMap,G=Xt&&!!w.transmissionMap,At=Xt&&!!w.thicknessMap,ot=!!w.gradientMap,gt=!!w.alphaMap,Rt=w.alphaTest>0,Ut=!!w.alphaHash,$t=!!w.extensions;let Xe=qa;w.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Xe=o.toneMapping);const on={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:vt,fragmentShader:j,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:ne,batchingColor:ne&&it._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&it.instanceColor!==null,instancingMorph:Ft&&it.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Or,alphaToCoverage:!!w.alphaToCoverage,map:Le,matcap:fe,envMap:ke,envMapMode:ke&&V.mapping,envMapCubeUVHeight:q,aoMap:W,lightMap:Tn,bumpMap:ce,normalMap:pe,displacementMap:S&&Zt,emissiveMap:Re,normalMapObjectSpace:pe&&w.normalMapType===sy,normalMapTangentSpace:pe&&w.normalMapType===ay,metalnessMap:qt,roughnessMap:U,anisotropy:T,anisotropyMap:Dt,clearcoat:tt,clearcoatMap:Pt,clearcoatNormalMap:me,clearcoatRoughnessMap:bt,dispersion:ft,iridescence:Mt,iridescenceMap:zt,iridescenceThicknessMap:jt,sheen:mt,sheenColorMap:Wt,sheenRoughnessMap:Nt,specularMap:Jt,specularColorMap:ae,specularIntensityMap:Ne,transmission:Xt,transmissionMap:G,thicknessMap:At,gradientMap:ot,opaque:w.transparent===!1&&w.blending===br&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:Rt,alphaHash:Ut,combine:w.combine,mapUv:Le&&R(w.map.channel),aoMapUv:W&&R(w.aoMap.channel),lightMapUv:Tn&&R(w.lightMap.channel),bumpMapUv:ce&&R(w.bumpMap.channel),normalMapUv:pe&&R(w.normalMap.channel),displacementMapUv:Zt&&R(w.displacementMap.channel),emissiveMapUv:Re&&R(w.emissiveMap.channel),metalnessMapUv:qt&&R(w.metalnessMap.channel),roughnessMapUv:U&&R(w.roughnessMap.channel),anisotropyMapUv:Dt&&R(w.anisotropyMap.channel),clearcoatMapUv:Pt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&R(w.sheenRoughnessMap.channel),specularMapUv:Jt&&R(w.specularMap.channel),specularColorMapUv:ae&&R(w.specularColorMap.channel),specularIntensityMapUv:Ne&&R(w.specularIntensityMap.channel),transmissionMapUv:G&&R(w.transmissionMap.channel),thicknessMapUv:At&&R(w.thicknessMap.channel),alphaMapUv:gt&&R(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(pe||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!dt.attributes.uv&&(Le||gt),fog:!!pt,useFog:w.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ht,skinning:it.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Le&&w.map.isVideoTexture===!0&&Me.getTransfer(w.map.colorSpace)===Be,decodeVideoTextureEmissive:Re&&w.emissiveMap.isVideoTexture===!0&&Me.getTransfer(w.emissiveMap.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Li,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||ne)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return on.vertexUv1s=p.has(1),on.vertexUv2s=p.has(2),on.vertexUv3s=p.has(3),p.clear(),on}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)C.push(F),C.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(I(C,w),N(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function I(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=b[w.type];let F;if(C){const lt=Ui[C];F=Py.clone(lt.uniforms)}else F=w.uniforms;return F}function st(w,C){let F;for(let lt=0,it=v.length;lt<it;lt++){const pt=v[lt];if(pt.cacheKey===C){F=pt,++F.usedTimes;break}}return F===void 0&&(F=new Zb(o,C,w,u),v.push(F)),F}function H(w){if(--w.usedTimes===0){const C=v.indexOf(w);v[C]=v[v.length-1],v.pop(),w.destroy()}}function P(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:st,releaseProgram:H,releaseShaderCache:P,programs:v,dispose:Z}}function t1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function e1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function h0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function d0(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(x,S,M,b,R,y){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:b,renderOrder:x.renderOrder,z:R,group:y},o[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=R,_.group=y),e++,_}function d(x,S,M,b,R,y){const _=h(x,S,M,b,R,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,S,M,b,R,y){const _=h(x,S,M,b,R,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,S){i.length>1&&i.sort(x||e1),s.length>1&&s.sort(S||h0),l.length>1&&l.sort(S||h0)}function v(){for(let x=e,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function n1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new d0,o.set(s,[h])):l>=u.length?(h=new d0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function i1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new Ue};break;case"SpotLight":i={position:new et,direction:new et,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function a1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let s1=0;function r1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function o1(o){const e=new i1,i=a1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new et);const l=new et,u=new tn,h=new tn;function d(p){let v=0,x=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,R=0,y=0,_=0,I=0,N=0,D=0,st=0,H=0,P=0;p.sort(r1);for(let w=0,C=p.length;w<C;w++){const F=p[w],lt=F.color,it=F.intensity,pt=F.distance,dt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=lt.r*it,x+=lt.g*it,S+=lt.b*it;else if(F.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(F.sh.coefficients[O],it);P++}else if(F.isDirectionalLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const V=F.shadow,q=i.get(F);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=dt,s.directionalShadowMatrix[M]=F.shadow.matrix,I++}s.directional[M]=O,M++}else if(F.isSpotLight){const O=e.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(lt).multiplyScalar(it),O.distance=pt,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,s.spot[R]=O;const V=F.shadow;if(F.map&&(s.spotLightMap[st]=F.map,st++,V.updateMatrices(F),F.castShadow&&H++),s.spotLightMatrix[R]=V.matrix,F.castShadow){const q=i.get(F);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,s.spotShadow[R]=q,s.spotShadowMap[R]=dt,D++}R++}else if(F.isRectAreaLight){const O=e.get(F);O.color.copy(lt).multiplyScalar(it),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=O,y++}else if(F.isPointLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const V=F.shadow,q=i.get(F);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,s.pointShadow[b]=q,s.pointShadowMap[b]=dt,s.pointShadowMatrix[b]=F.shadow.matrix,N++}s.point[b]=O,b++}else if(F.isHemisphereLight){const O=e.get(F);O.skyColor.copy(F.color).multiplyScalar(it),O.groundColor.copy(F.groundColor).multiplyScalar(it),s.hemi[_]=O,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=S;const Z=s.hash;(Z.directionalLength!==M||Z.pointLength!==b||Z.spotLength!==R||Z.rectAreaLength!==y||Z.hemiLength!==_||Z.numDirectionalShadows!==I||Z.numPointShadows!==N||Z.numSpotShadows!==D||Z.numSpotMaps!==st||Z.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+st-H,s.spotLightMap.length=st,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=P,Z.directionalLength=M,Z.pointLength=b,Z.spotLength=R,Z.rectAreaLength=y,Z.hemiLength=_,Z.numDirectionalShadows=I,Z.numPointShadows=N,Z.numSpotShadows=D,Z.numSpotMaps=st,Z.numLightProbes=P,s.version=s1++)}function m(p,v){let x=0,S=0,M=0,b=0,R=0;const y=v.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const N=p[_];if(N.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),x++}else if(N.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function p0(o){const e=new o1(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function l1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new p0(o),e.set(l,[d])):u>=h.length?(d=new p0(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}class c1 extends Vo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u1 extends Vo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function d1(o,e,i){let s=new Q0;const l=new ue,u=new ue,h=new $e,d=new c1({depthPacking:iy}),m=new u1,p={},v=i.maxTextureSize,x={[ja]:Vn,[Vn]:ja,[Li]:Li},S=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:f1,fragmentShader:h1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new fa;b.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ni(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A0;let _=this.type;this.render=function(H,P,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ya),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const it=_!==aa&&this.type===aa,pt=_===aa&&this.type!==aa;for(let dt=0,O=H.length;dt<O;dt++){const V=H[dt],q=V.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const St=q.getFrameExtents();if(l.multiply(St),u.copy(q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/St.x),l.x=u.x*St.x,q.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/St.y),l.y=u.y*St.y,q.mapSize.y=u.y)),q.map===null||it===!0||pt===!0){const L=this.type!==aa?{minFilter:Ei,magFilter:Ei}:{};q.map!==null&&q.map.dispose(),q.map=new bs(l.x,l.y,L),q.map.texture.name=V.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const xt=q.getViewportCount();for(let L=0;L<xt;L++){const J=q.getViewport(L);h.set(u.x*J.x,u.y*J.y,u.x*J.z,u.y*J.w),lt.viewport(h),q.updateMatrices(V,L),s=q.getFrustum(),D(P,Z,q.camera,V,this.type)}q.isPointLightShadow!==!0&&this.type===aa&&I(q,Z),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,F)};function I(H,P){const Z=e.update(R);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new bs(l.x,l.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,Z,S,R,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,Z,M,R,null)}function N(H,P,Z,w){let C=null;const F=Z.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)C=F;else if(C=Z.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const lt=C.uuid,it=P.uuid;let pt=p[lt];pt===void 0&&(pt={},p[lt]=pt);let dt=pt[it];dt===void 0&&(dt=C.clone(),pt[it]=dt,P.addEventListener("dispose",st)),C=dt}if(C.visible=P.visible,C.wireframe=P.wireframe,w===aa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:x[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=Z}return C}function D(H,P,Z,w,C){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===aa)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,H.matrixWorld);const it=e.update(H),pt=H.material;if(Array.isArray(pt)){const dt=it.groups;for(let O=0,V=dt.length;O<V;O++){const q=dt[O],St=pt[q.materialIndex];if(St&&St.visible){const xt=N(H,St,w,C);H.onBeforeShadow(o,H,P,Z,it,xt,q),o.renderBufferDirect(Z,null,it,xt,H,q),H.onAfterShadow(o,H,P,Z,it,xt,q)}}}else if(pt.visible){const dt=N(H,pt,w,C);H.onBeforeShadow(o,H,P,Z,it,dt,null),o.renderBufferDirect(Z,null,it,dt,H,null),H.onAfterShadow(o,H,P,Z,it,dt,null)}}const lt=H.children;for(let it=0,pt=lt.length;it<pt;it++)D(lt[it],P,Z,w,C)}function st(H){H.target.removeEventListener("dispose",st);for(const Z in p){const w=p[Z],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const p1={[Dh]:Uh,[Lh]:Ph,[Nh]:zh,[Cr]:Oh,[Uh]:Dh,[Ph]:Lh,[zh]:Nh,[Oh]:Cr};function m1(o,e){function i(){let G=!1;const At=new $e;let ot=null;const gt=new $e(0,0,0,0);return{setMask:function(Rt){ot!==Rt&&!G&&(o.colorMask(Rt,Rt,Rt,Rt),ot=Rt)},setLocked:function(Rt){G=Rt},setClear:function(Rt,Ut,$t,Xe,on){on===!0&&(Rt*=Xe,Ut*=Xe,$t*=Xe),At.set(Rt,Ut,$t,Xe),gt.equals(At)===!1&&(o.clearColor(Rt,Ut,$t,Xe),gt.copy(At))},reset:function(){G=!1,ot=null,gt.set(-1,0,0,0)}}}function s(){let G=!1,At=!1,ot=null,gt=null,Rt=null;return{setReversed:function(Ut){if(At!==Ut){const $t=e.get("EXT_clip_control");At?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Xe=Rt;Rt=null,this.setClear(Xe)}At=Ut},getReversed:function(){return At},setTest:function(Ut){Ut?yt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(Ut){ot!==Ut&&!G&&(o.depthMask(Ut),ot=Ut)},setFunc:function(Ut){if(At&&(Ut=p1[Ut]),gt!==Ut){switch(Ut){case Dh:o.depthFunc(o.NEVER);break;case Uh:o.depthFunc(o.ALWAYS);break;case Lh:o.depthFunc(o.LESS);break;case Cr:o.depthFunc(o.LEQUAL);break;case Nh:o.depthFunc(o.EQUAL);break;case Oh:o.depthFunc(o.GEQUAL);break;case Ph:o.depthFunc(o.GREATER);break;case zh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Ut}},setLocked:function(Ut){G=Ut},setClear:function(Ut){Rt!==Ut&&(At&&(Ut=1-Ut),o.clearDepth(Ut),Rt=Ut)},reset:function(){G=!1,ot=null,gt=null,Rt=null,At=!1}}}function l(){let G=!1,At=null,ot=null,gt=null,Rt=null,Ut=null,$t=null,Xe=null,on=null;return{setTest:function(ye){G||(ye?yt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(ye){At!==ye&&!G&&(o.stencilMask(ye),At=ye)},setFunc:function(ye,_n,di){(ot!==ye||gt!==_n||Rt!==di)&&(o.stencilFunc(ye,_n,di),ot=ye,gt=_n,Rt=di)},setOp:function(ye,_n,di){(Ut!==ye||$t!==_n||Xe!==di)&&(o.stencilOp(ye,_n,di),Ut=ye,$t=_n,Xe=di)},setLocked:function(ye){G=ye},setClear:function(ye){on!==ye&&(o.clearStencil(ye),on=ye)},reset:function(){G=!1,At=null,ot=null,gt=null,Rt=null,Ut=null,$t=null,Xe=null,on=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},x={},S=new WeakMap,M=[],b=null,R=!1,y=null,_=null,I=null,N=null,D=null,st=null,H=null,P=new Ue(0,0,0),Z=0,w=!1,C=null,F=null,lt=null,it=null,pt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=V>=2);let St=null,xt={};const L=o.getParameter(o.SCISSOR_BOX),J=o.getParameter(o.VIEWPORT),vt=new $e().fromArray(L),j=new $e().fromArray(J);function ct(G,At,ot,gt){const Rt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(G,Ut),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<ot;$t++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(At+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return Ut}const Et={};Et[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Et[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Et[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),yt(o.DEPTH_TEST),h.setFunc(Cr),ce(!1),pe(vg),yt(o.CULL_FACE),W(Ya);function yt(G){v[G]!==!0&&(o.enable(G),v[G]=!0)}function Ht(G){v[G]!==!1&&(o.disable(G),v[G]=!1)}function Ft(G,At){return x[G]!==At?(o.bindFramebuffer(G,At),x[G]=At,G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=At),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ne(G,At){let ot=M,gt=!1;if(G){ot=S.get(At),ot===void 0&&(ot=[],S.set(At,ot));const Rt=G.textures;if(ot.length!==Rt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,$t=Rt.length;Ut<$t;Ut++)ot[Ut]=o.COLOR_ATTACHMENT0+Ut;ot.length=Rt.length,gt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,gt=!0);gt&&o.drawBuffers(ot)}function Le(G){return b!==G?(o.useProgram(G),b=G,!0):!1}const fe={[Ss]:o.FUNC_ADD,[wS]:o.FUNC_SUBTRACT,[DS]:o.FUNC_REVERSE_SUBTRACT};fe[US]=o.MIN,fe[LS]=o.MAX;const ke={[NS]:o.ZERO,[OS]:o.ONE,[PS]:o.SRC_COLOR,[Ch]:o.SRC_ALPHA,[GS]:o.SRC_ALPHA_SATURATE,[FS]:o.DST_COLOR,[IS]:o.DST_ALPHA,[zS]:o.ONE_MINUS_SRC_COLOR,[wh]:o.ONE_MINUS_SRC_ALPHA,[HS]:o.ONE_MINUS_DST_COLOR,[BS]:o.ONE_MINUS_DST_ALPHA,[VS]:o.CONSTANT_COLOR,[kS]:o.ONE_MINUS_CONSTANT_COLOR,[XS]:o.CONSTANT_ALPHA,[WS]:o.ONE_MINUS_CONSTANT_ALPHA};function W(G,At,ot,gt,Rt,Ut,$t,Xe,on,ye){if(G===Ya){R===!0&&(Ht(o.BLEND),R=!1);return}if(R===!1&&(yt(o.BLEND),R=!0),G!==CS){if(G!==y||ye!==w){if((_!==Ss||D!==Ss)&&(o.blendEquation(o.FUNC_ADD),_=Ss,D=Ss),ye)switch(G){case br:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xg:o.blendFunc(o.ONE,o.ONE);break;case Sg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case yg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case br:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Sg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case yg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,N=null,st=null,H=null,P.set(0,0,0),Z=0,y=G,w=ye}return}Rt=Rt||At,Ut=Ut||ot,$t=$t||gt,(At!==_||Rt!==D)&&(o.blendEquationSeparate(fe[At],fe[Rt]),_=At,D=Rt),(ot!==I||gt!==N||Ut!==st||$t!==H)&&(o.blendFuncSeparate(ke[ot],ke[gt],ke[Ut],ke[$t]),I=ot,N=gt,st=Ut,H=$t),(Xe.equals(P)===!1||on!==Z)&&(o.blendColor(Xe.r,Xe.g,Xe.b,on),P.copy(Xe),Z=on),y=G,w=!1}function Tn(G,At){G.side===Li?Ht(o.CULL_FACE):yt(o.CULL_FACE);let ot=G.side===Vn;At&&(ot=!ot),ce(ot),G.blending===br&&G.transparent===!1?W(Ya):W(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),u.setMask(G.colorWrite);const gt=G.stencilWrite;d.setTest(gt),gt&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Re(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(G){C!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),C=G)}function pe(G){G!==bS?(yt(o.CULL_FACE),G!==F&&(G===vg?o.cullFace(o.BACK):G===AS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),F=G}function Zt(G){G!==lt&&(O&&o.lineWidth(G),lt=G)}function Re(G,At,ot){G?(yt(o.POLYGON_OFFSET_FILL),(it!==At||pt!==ot)&&(o.polygonOffset(At,ot),it=At,pt=ot)):Ht(o.POLYGON_OFFSET_FILL)}function qt(G){G?yt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function U(G){G===void 0&&(G=o.TEXTURE0+dt-1),St!==G&&(o.activeTexture(G),St=G)}function T(G,At,ot){ot===void 0&&(St===null?ot=o.TEXTURE0+dt-1:ot=St);let gt=xt[ot];gt===void 0&&(gt={type:void 0,texture:void 0},xt[ot]=gt),(gt.type!==G||gt.texture!==At)&&(St!==ot&&(o.activeTexture(ot),St=ot),o.bindTexture(G,At||Et[G]),gt.type=G,gt.texture=At)}function tt(){const G=xt[St];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ft(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Dt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Wt(G){vt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),vt.copy(G))}function Nt(G){j.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),j.copy(G))}function Jt(G,At){let ot=p.get(At);ot===void 0&&(ot=new WeakMap,p.set(At,ot));let gt=ot.get(G);gt===void 0&&(gt=o.getUniformBlockIndex(At,G.name),ot.set(G,gt))}function ae(G,At){const gt=p.get(At).get(G);m.get(At)!==gt&&(o.uniformBlockBinding(At,gt,G.__bindingPointIndex),m.set(At,gt))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},St=null,xt={},x={},S=new WeakMap,M=[],b=null,R=!1,y=null,_=null,I=null,N=null,D=null,st=null,H=null,P=new Ue(0,0,0),Z=0,w=!1,C=null,F=null,lt=null,it=null,pt=null,vt.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:yt,disable:Ht,bindFramebuffer:Ft,drawBuffers:ne,useProgram:Le,setBlending:W,setMaterial:Tn,setFlipSided:ce,setCullFace:pe,setLineWidth:Zt,setPolygonOffset:Re,setScissorTest:qt,activeTexture:U,bindTexture:T,unbindTexture:tt,compressedTexImage2D:ft,compressedTexImage3D:Mt,texImage2D:zt,texImage3D:jt,updateUBOMapping:Jt,uniformBlockBinding:ae,texStorage2D:me,texStorage3D:bt,texSubImage2D:mt,texSubImage3D:Xt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Pt,scissor:Wt,viewport:Nt,reset:Ne}}function m0(o,e,i,s){const l=_1(s);switch(i){case L0:return o*e;case O0:return o*e;case P0:return o*e*2;case z0:return o*e/l.components*l.byteLength;case Sd:return o*e/l.components*l.byteLength;case I0:return o*e*2/l.components*l.byteLength;case yd:return o*e*2/l.components*l.byteLength;case N0:return o*e*3/l.components*l.byteLength;case Mi:return o*e*4/l.components*l.byteLength;case Md:return o*e*4/l.components*l.byteLength;case bc:case Ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gh:case kh:return Math.max(o,16)*Math.max(e,8)/4;case Hh:case Vh:return Math.max(o,8)*Math.max(e,8)/2;case Xh:case Wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case td:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case sd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case wc:case od:case ld:return Math.ceil(o/4)*Math.ceil(e/4)*16;case B0:case cd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ud:case fd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _1(o){switch(o){case la:case w0:return{byteLength:1,components:1};case Bo:case D0:case Fo:return{byteLength:2,components:1};case vd:case xd:return{byteLength:2,components:4};case Ts:case gd:case sa:return{byteLength:4,components:1};case U0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function g1(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ue,v=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Oc("canvas")}function R(U,T,tt){let ft=1;const Mt=qt(U);if((Mt.width>tt||Mt.height>tt)&&(ft=tt/Math.max(Mt.width,Mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(ft*Mt.width),Xt=Math.floor(ft*Mt.height);x===void 0&&(x=b(mt,Xt));const Dt=T?b(mt,Xt):x;return Dt.width=mt,Dt.height=Xt,Dt.getContext("2d").drawImage(U,0,0,mt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+mt+"x"+Xt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,T,tt,ft,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt=T;if(T===o.RED&&(tt===o.FLOAT&&(mt=o.R32F),tt===o.HALF_FLOAT&&(mt=o.R16F),tt===o.UNSIGNED_BYTE&&(mt=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(mt=o.R8UI),tt===o.UNSIGNED_SHORT&&(mt=o.R16UI),tt===o.UNSIGNED_INT&&(mt=o.R32UI),tt===o.BYTE&&(mt=o.R8I),tt===o.SHORT&&(mt=o.R16I),tt===o.INT&&(mt=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(mt=o.RG32F),tt===o.HALF_FLOAT&&(mt=o.RG16F),tt===o.UNSIGNED_BYTE&&(mt=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(mt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(mt=o.RG16UI),tt===o.UNSIGNED_INT&&(mt=o.RG32UI),tt===o.BYTE&&(mt=o.RG8I),tt===o.SHORT&&(mt=o.RG16I),tt===o.INT&&(mt=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),tt===o.UNSIGNED_INT&&(mt=o.RGB32UI),tt===o.BYTE&&(mt=o.RGB8I),tt===o.SHORT&&(mt=o.RGB16I),tt===o.INT&&(mt=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(mt=o.RGBA32UI),tt===o.BYTE&&(mt=o.RGBA8I),tt===o.SHORT&&(mt=o.RGBA16I),tt===o.INT&&(mt=o.RGBA32I)),T===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),T===o.RGBA){const Xt=Mt?zc:Me.getTransfer(ft);tt===o.FLOAT&&(mt=o.RGBA32F),tt===o.HALF_FLOAT&&(mt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(mt=Xt===Be?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function D(U,T){let tt;return U?T===null||T===Ts||T===Ur?tt=o.DEPTH24_STENCIL8:T===sa?tt=o.DEPTH32F_STENCIL8:T===Bo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ts||T===Ur?tt=o.DEPTH_COMPONENT24:T===sa?tt=o.DEPTH_COMPONENT32F:T===Bo&&(tt=o.DEPTH_COMPONENT16),tt}function st(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ei&&U.minFilter!==hi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function H(U){const T=U.target;T.removeEventListener("dispose",H),Z(T),T.isVideoTexture&&v.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),C(T)}function Z(U){const T=s.get(U);if(T.__webglInit===void 0)return;const tt=U.source,ft=S.get(tt);if(ft){const Mt=ft[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(U),Object.keys(ft).length===0&&S.delete(tt)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const tt=U.source,ft=S.get(tt);delete ft[T.__cacheKey],h.memory.textures--}function C(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let Mt=0;Mt<T.__webglFramebuffer[ft].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[ft][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)o.deleteFramebuffer(T.__webglFramebuffer[ft]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=U.textures;for(let ft=0,Mt=tt.length;ft<Mt;ft++){const mt=s.get(tt[ft]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),s.remove(tt[ft])}s.remove(U)}let F=0;function lt(){F=0}function it(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function pt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function dt(U,T){const tt=s.get(U);if(U.isVideoTexture&&Zt(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(tt,U,T);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function O(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){j(tt,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function V(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){j(tt,U,T);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function q(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){ct(tt,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const St={[Lc]:o.REPEAT,[Wa]:o.CLAMP_TO_EDGE,[Fh]:o.MIRRORED_REPEAT},xt={[Ei]:o.NEAREST,[ey]:o.NEAREST_MIPMAP_NEAREST,[tc]:o.NEAREST_MIPMAP_LINEAR,[hi]:o.LINEAR,[Jf]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},L={[ry]:o.NEVER,[hy]:o.ALWAYS,[oy]:o.LESS,[F0]:o.LEQUAL,[ly]:o.EQUAL,[fy]:o.GEQUAL,[cy]:o.GREATER,[uy]:o.NOTEQUAL};function J(U,T){if(T.type===sa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===hi||T.magFilter===Jf||T.magFilter===tc||T.magFilter===Ms||T.minFilter===hi||T.minFilter===Jf||T.minFilter===tc||T.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,St[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,St[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,St[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,xt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ei||T.minFilter!==tc&&T.minFilter!==Ms||T.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function vt(U,T){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",H));const ft=T.source;let Mt=S.get(ft);Mt===void 0&&(Mt={},S.set(ft,Mt));const mt=pt(T);if(mt!==U.__cacheKey){Mt[mt]===void 0&&(Mt[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),Mt[mt].usedTimes++;const Xt=Mt[U.__cacheKey];Xt!==void 0&&(Mt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(T)),U.__cacheKey=mt,U.__webglTexture=Mt[mt].texture}return tt}function j(U,T,tt){let ft=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=o.TEXTURE_3D);const Mt=vt(U,T),mt=T.source;i.bindTexture(ft,U.__webglTexture,o.TEXTURE0+tt);const Xt=s.get(mt);if(mt.version!==Xt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+tt);const Dt=Me.getPrimaries(Me.workingColorSpace),Pt=T.colorSpace===Xa?null:Me.getPrimaries(T.colorSpace),me=T.colorSpace===Xa||Dt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let bt=R(T.image,!1,l.maxTextureSize);bt=Re(T,bt);const zt=u.convert(T.format,T.colorSpace),jt=u.convert(T.type);let Wt=N(T.internalFormat,zt,jt,T.colorSpace,T.isVideoTexture);J(ft,T);let Nt;const Jt=T.mipmaps,ae=T.isVideoTexture!==!0,Ne=Xt.__version===void 0||Mt===!0,G=mt.dataReady,At=st(T,bt);if(T.isDepthTexture)Wt=D(T.format===Lr,T.type),Ne&&(ae?i.texStorage2D(o.TEXTURE_2D,1,Wt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Wt,bt.width,bt.height,0,zt,jt,null));else if(T.isDataTexture)if(Jt.length>0){ae&&Ne&&i.texStorage2D(o.TEXTURE_2D,At,Wt,Jt[0].width,Jt[0].height);for(let ot=0,gt=Jt.length;ot<gt;ot++)Nt=Jt[ot],ae?G&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Nt.width,Nt.height,zt,jt,Nt.data):i.texImage2D(o.TEXTURE_2D,ot,Wt,Nt.width,Nt.height,0,zt,jt,Nt.data);T.generateMipmaps=!1}else ae?(Ne&&i.texStorage2D(o.TEXTURE_2D,At,Wt,bt.width,bt.height),G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,zt,jt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Wt,bt.width,bt.height,0,zt,jt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Wt,Jt[0].width,Jt[0].height,bt.depth);for(let ot=0,gt=Jt.length;ot<gt;ot++)if(Nt=Jt[ot],T.format!==Mi)if(zt!==null)if(ae){if(G)if(T.layerUpdates.size>0){const Rt=m0(Nt.width,Nt.height,T.format,T.type);for(const Ut of T.layerUpdates){const $t=Nt.data.subarray(Ut*Rt/Nt.data.BYTES_PER_ELEMENT,(Ut+1)*Rt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Ut,Nt.width,Nt.height,1,zt,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Nt.width,Nt.height,bt.depth,zt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Wt,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?G&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Nt.width,Nt.height,bt.depth,zt,jt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Wt,Nt.width,Nt.height,bt.depth,0,zt,jt,Nt.data)}else{ae&&Ne&&i.texStorage2D(o.TEXTURE_2D,At,Wt,Jt[0].width,Jt[0].height);for(let ot=0,gt=Jt.length;ot<gt;ot++)Nt=Jt[ot],T.format!==Mi?zt!==null?ae?G&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Nt.width,Nt.height,zt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Wt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?G&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Nt.width,Nt.height,zt,jt,Nt.data):i.texImage2D(o.TEXTURE_2D,ot,Wt,Nt.width,Nt.height,0,zt,jt,Nt.data)}else if(T.isDataArrayTexture)if(ae){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Wt,bt.width,bt.height,bt.depth),G)if(T.layerUpdates.size>0){const ot=m0(bt.width,bt.height,T.format,T.type);for(const gt of T.layerUpdates){const Rt=bt.data.subarray(gt*ot/bt.data.BYTES_PER_ELEMENT,(gt+1)*ot/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,zt,jt,Rt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,zt,jt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Wt,bt.width,bt.height,bt.depth,0,zt,jt,bt.data);else if(T.isData3DTexture)ae?(Ne&&i.texStorage3D(o.TEXTURE_3D,At,Wt,bt.width,bt.height,bt.depth),G&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,zt,jt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Wt,bt.width,bt.height,bt.depth,0,zt,jt,bt.data);else if(T.isFramebufferTexture){if(Ne)if(ae)i.texStorage2D(o.TEXTURE_2D,At,Wt,bt.width,bt.height);else{let ot=bt.width,gt=bt.height;for(let Rt=0;Rt<At;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Wt,ot,gt,0,zt,jt,null),ot>>=1,gt>>=1}}else if(Jt.length>0){if(ae&&Ne){const ot=qt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,At,Wt,ot.width,ot.height)}for(let ot=0,gt=Jt.length;ot<gt;ot++)Nt=Jt[ot],ae?G&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,zt,jt,Nt):i.texImage2D(o.TEXTURE_2D,ot,Wt,zt,jt,Nt);T.generateMipmaps=!1}else if(ae){if(Ne){const ot=qt(bt);i.texStorage2D(o.TEXTURE_2D,At,Wt,ot.width,ot.height)}G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,jt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Wt,zt,jt,bt);y(T)&&_(ft),Xt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ct(U,T,tt){if(T.image.length!==6)return;const ft=vt(U,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+tt);const mt=s.get(Mt);if(Mt.version!==mt.__version||ft===!0){i.activeTexture(o.TEXTURE0+tt);const Xt=Me.getPrimaries(Me.workingColorSpace),Dt=T.colorSpace===Xa?null:Me.getPrimaries(T.colorSpace),Pt=T.colorSpace===Xa||Xt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let gt=0;gt<6;gt++)!me&&!bt?zt[gt]=R(T.image[gt],!0,l.maxCubemapSize):zt[gt]=bt?T.image[gt].image:T.image[gt],zt[gt]=Re(T,zt[gt]);const jt=zt[0],Wt=u.convert(T.format,T.colorSpace),Nt=u.convert(T.type),Jt=N(T.internalFormat,Wt,Nt,T.colorSpace),ae=T.isVideoTexture!==!0,Ne=mt.__version===void 0||ft===!0,G=Mt.dataReady;let At=st(T,jt);J(o.TEXTURE_CUBE_MAP,T);let ot;if(me){ae&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Jt,jt.width,jt.height);for(let gt=0;gt<6;gt++){ot=zt[gt].mipmaps;for(let Rt=0;Rt<ot.length;Rt++){const Ut=ot[Rt];T.format!==Mi?Wt!==null?ae?G&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,Ut.width,Ut.height,Wt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Jt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,Ut.width,Ut.height,Wt,Nt,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Jt,Ut.width,Ut.height,0,Wt,Nt,Ut.data)}}}else{if(ot=T.mipmaps,ae&&Ne){ot.length>0&&At++;const gt=qt(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Jt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){ae?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,zt[gt].width,zt[gt].height,Wt,Nt,zt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Jt,zt[gt].width,zt[gt].height,0,Wt,Nt,zt[gt].data);for(let Rt=0;Rt<ot.length;Rt++){const $t=ot[Rt].image[gt].image;ae?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,$t.width,$t.height,Wt,Nt,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Jt,$t.width,$t.height,0,Wt,Nt,$t.data)}}else{ae?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Wt,Nt,zt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Jt,Wt,Nt,zt[gt]);for(let Rt=0;Rt<ot.length;Rt++){const Ut=ot[Rt];ae?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,Wt,Nt,Ut.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Jt,Wt,Nt,Ut.image[gt])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),mt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Et(U,T,tt,ft,Mt,mt){const Xt=u.convert(tt.format,tt.colorSpace),Dt=u.convert(tt.type),Pt=N(tt.internalFormat,Xt,Dt,tt.colorSpace),me=s.get(T),bt=s.get(tt);if(bt.__renderTarget=T,!me.__hasExternalTextures){const zt=Math.max(1,T.width>>mt),jt=Math.max(1,T.height>>mt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,mt,Pt,zt,jt,T.depth,0,Xt,Dt,null):i.texImage2D(Mt,mt,Pt,zt,jt,0,Xt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),pe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,Mt,bt.__webglTexture,0,ce(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,Mt,bt.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(U,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const ft=T.depthTexture,Mt=ft&&ft.isDepthTexture?ft.type:null,mt=D(T.stencilBuffer,Mt),Xt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=ce(T);pe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,mt,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,mt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,mt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const ft=T.textures;for(let Mt=0;Mt<ft.length;Mt++){const mt=ft[Mt],Xt=u.convert(mt.format,mt.colorSpace),Dt=u.convert(mt.type),Pt=N(mt.internalFormat,Xt,Dt,mt.colorSpace),me=ce(T);tt&&pe(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,Pt,T.width,T.height):pe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,Pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const Mt=ft.__webglTexture,mt=ce(T);if(T.depthTexture.format===Ar)pe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Lr)pe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Ft(U){const T=s.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",Mt)};ft.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=ft}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ht(T.__webglFramebuffer,U)}else if(tt){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=o.createRenderbuffer(),yt(T.__webglDepthbuffer[ft],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,mt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),yt(T.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ne(U,T,tt){const ft=s.get(U);T!==void 0&&Et(ft.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Ft(U)}function Le(U){const T=U.texture,tt=s.get(U),ft=s.get(T);U.addEventListener("dispose",P);const Mt=U.textures,mt=U.isWebGLCubeRenderTarget===!0,Xt=Mt.length>1;if(Xt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=T.version,h.memory.textures++),mt){tt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Dt]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)tt.__webglFramebuffer[Dt][Pt]=o.createFramebuffer()}else tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Dt=0,Pt=Mt.length;Dt<Pt;Dt++){const me=s.get(Mt[Dt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&pe(U)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const Pt=Mt[Dt];tt.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt]);const me=u.convert(Pt.format,Pt.colorSpace),bt=u.convert(Pt.type),zt=N(Pt.internalFormat,me,bt,Pt.colorSpace,U.isXRRenderTarget===!0),jt=ce(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,zt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),J(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)Et(tt.__webglFramebuffer[Dt][Pt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Pt);else Et(tt.__webglFramebuffer[Dt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Dt=0,Pt=Mt.length;Dt<Pt;Dt++){const me=Mt[Dt],bt=s.get(me);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),J(o.TEXTURE_2D,me),Et(tt.__webglFramebuffer,U,me,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),y(me)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ft.__webglTexture),J(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)Et(tt.__webglFramebuffer[Pt],U,T,o.COLOR_ATTACHMENT0,Dt,Pt);else Et(tt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Dt,0);y(T)&&_(Dt),i.unbindTexture()}U.depthBuffer&&Ft(U)}function fe(U){const T=U.textures;for(let tt=0,ft=T.length;tt<ft;tt++){const Mt=T[tt];if(y(Mt)){const mt=I(U),Xt=s.get(Mt).__webglTexture;i.bindTexture(mt,Xt),_(mt),i.unbindTexture()}}}const ke=[],W=[];function Tn(U){if(U.samples>0){if(pe(U)===!1){const T=U.textures,tt=U.width,ft=U.height;let Mt=o.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(U),Dt=T.length>1;if(Dt)for(let Pt=0;Pt<T.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Pt]);const me=s.get(T[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,Mt,o.NEAREST),m===!0&&(ke.length=0,W.length=0,ke.push(o.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ke.push(mt),W.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,W)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Pt=0;Pt<T.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Pt]);const me=s.get(T[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ce(U){return Math.min(l.maxSamples,U.samples)}function pe(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Zt(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function Re(U,T){const tt=U.colorSpace,ft=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Or&&tt!==Xa&&(Me.getTransfer(tt)===Be?(ft!==Mi||Mt!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=lt,this.setTexture2D=dt,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=q,this.rebindTextures=ne,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=pe}function v1(o,e){function i(s,l=Xa){let u;const h=Me.getTransfer(l);if(s===la)return o.UNSIGNED_BYTE;if(s===vd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===xd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===U0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===w0)return o.BYTE;if(s===D0)return o.SHORT;if(s===Bo)return o.UNSIGNED_SHORT;if(s===gd)return o.INT;if(s===Ts)return o.UNSIGNED_INT;if(s===sa)return o.FLOAT;if(s===Fo)return o.HALF_FLOAT;if(s===L0)return o.ALPHA;if(s===N0)return o.RGB;if(s===Mi)return o.RGBA;if(s===O0)return o.LUMINANCE;if(s===P0)return o.LUMINANCE_ALPHA;if(s===Ar)return o.DEPTH_COMPONENT;if(s===Lr)return o.DEPTH_STENCIL;if(s===z0)return o.RED;if(s===Sd)return o.RED_INTEGER;if(s===I0)return o.RG;if(s===yd)return o.RG_INTEGER;if(s===Md)return o.RGBA_INTEGER;if(s===bc||s===Ac||s===Rc||s===Cc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hh||s===Gh||s===Vh||s===kh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Hh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xh||s===Wh||s===Yh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Xh||s===Wh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===td)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===id)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ad)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wc||s===od||s===ld)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===wc)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===od)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ld)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===B0||s===cd||s===ud||s===fd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===wc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===cd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ud)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class x1 extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S1={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,s),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=v.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(S1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new yc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
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

}`;class E1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new En,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ua({vertexShader:y1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Xo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Rs{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,x=null,S=null,M=null,b=null;const R=new E1,y=i.getContextAttributes();let _=null,I=null;const N=[],D=[],st=new ue;let H=null;const P=new fi;P.viewport=new $e;const Z=new fi;Z.viewport=new $e;const w=[P,Z],C=new x1;let F=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ct=N[j];return ct===void 0&&(ct=new Ah,N[j]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(j){let ct=N[j];return ct===void 0&&(ct=new Ah,N[j]=ct),ct.getGripSpace()},this.getHand=function(j){let ct=N[j];return ct===void 0&&(ct=new Ah,N[j]=ct),ct.getHandSpace()};function it(j){const ct=D.indexOf(j.inputSource);if(ct===-1)return;const Et=N[ct];Et!==void 0&&(Et.update(j.inputSource,j.frame,p||h),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function pt(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",dt);for(let j=0;j<N.length;j++){const ct=D[j];ct!==null&&(D[j]=null,N[j].disconnect(ct))}F=null,lt=null,R.reset(),e.setRenderTarget(_),M=null,S=null,x=null,l=null,I=null,vt.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(st.width,st.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",dt),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(st),l.renderState.layers===void 0){const ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new bs(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:la,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ct=null,Et=null,yt=null;y.depth&&(yt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=y.stencil?Lr:Ar,Et=y.stencil?Ur:Ts);const Ht={colorFormat:i.RGBA8,depthFormat:yt,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(Ht),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),I=new bs(S.textureWidth,S.textureHeight,{format:Mi,type:la,depthTexture:new $0(S.textureWidth,S.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),vt.setContext(l),vt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function dt(j){for(let ct=0;ct<j.removed.length;ct++){const Et=j.removed[ct],yt=D.indexOf(Et);yt>=0&&(D[yt]=null,N[yt].disconnect(Et))}for(let ct=0;ct<j.added.length;ct++){const Et=j.added[ct];let yt=D.indexOf(Et);if(yt===-1){for(let Ft=0;Ft<N.length;Ft++)if(Ft>=D.length){D.push(Et),yt=Ft;break}else if(D[Ft]===null){D[Ft]=Et,yt=Ft;break}if(yt===-1)break}const Ht=N[yt];Ht&&Ht.connect(Et)}}const O=new et,V=new et;function q(j,ct,Et){O.setFromMatrixPosition(ct.matrixWorld),V.setFromMatrixPosition(Et.matrixWorld);const yt=O.distanceTo(V),Ht=ct.projectionMatrix.elements,Ft=Et.projectionMatrix.elements,ne=Ht[14]/(Ht[10]-1),Le=Ht[14]/(Ht[10]+1),fe=(Ht[9]+1)/Ht[5],ke=(Ht[9]-1)/Ht[5],W=(Ht[8]-1)/Ht[0],Tn=(Ft[8]+1)/Ft[0],ce=ne*W,pe=ne*Tn,Zt=yt/(-W+Tn),Re=Zt*-W;if(ct.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Re),j.translateZ(Zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ht[10]===-1)j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const qt=ne+Zt,U=Le+Zt,T=ce-Re,tt=pe+(yt-Re),ft=fe*Le/U*qt,Mt=ke*Le/U*qt;j.projectionMatrix.makePerspective(T,tt,ft,Mt,qt,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function St(j,ct){ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let ct=j.near,Et=j.far;R.texture!==null&&(R.depthNear>0&&(ct=R.depthNear),R.depthFar>0&&(Et=R.depthFar)),C.near=Z.near=P.near=ct,C.far=Z.far=P.far=Et,(F!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,lt=C.far),P.layers.mask=j.layers.mask|2,Z.layers.mask=j.layers.mask|4,C.layers.mask=P.layers.mask|Z.layers.mask;const yt=j.parent,Ht=C.cameras;St(C,yt);for(let Ft=0;Ft<Ht.length;Ft++)St(Ht[Ft],yt);Ht.length===2?q(C,P,Z):C.projectionMatrix.copy(P.projectionMatrix),xt(j,C,yt)};function xt(j,ct,Et){Et===null?j.matrix.copy(ct.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(j){m=j,S!==null&&(S.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let L=null;function J(j,ct){if(v=ct.getViewerPose(p||h),b=ct,v!==null){const Et=v.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let yt=!1;Et.length!==C.cameras.length&&(C.cameras.length=0,yt=!0);for(let Ft=0;Ft<Et.length;Ft++){const ne=Et[Ft];let Le=null;if(M!==null)Le=M.getViewport(ne);else{const ke=x.getViewSubImage(S,ne);Le=ke.viewport,Ft===0&&(e.setRenderTargetTextures(I,ke.colorTexture,S.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(I))}let fe=w[Ft];fe===void 0&&(fe=new fi,fe.layers.enable(Ft),fe.viewport=new $e,w[Ft]=fe),fe.matrix.fromArray(ne.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ne.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Le.x,Le.y,Le.width,Le.height),Ft===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),yt===!0&&C.cameras.push(fe)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Ft=x.getDepthInformation(Et[0]);Ft&&Ft.isValid&&Ft.texture&&R.init(e,Ft,l.renderState)}}for(let Et=0;Et<N.length;Et++){const yt=D[Et],Ht=N[Et];yt!==null&&Ht!==void 0&&Ht.update(yt,ct,p||h)}L&&L(j,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),b=null}const vt=new J0;vt.setAnimationLoop(J),this.setAnimationLoop=function(j){L=j},this.dispose=function(){}}}const vs=new ca,b1=new tn;function A1(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,j0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,I,N,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),v(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,I,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),N=I.envMap,D=I.envMapRotation;N&&(y.envMap.value=N,vs.copy(D),vs.x*=-1,vs.y*=-1,vs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),y.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(vs)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,I,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function R1(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,N){const D=N.program;s.uniformBlockBinding(I,D)}function p(I,N){let D=l[I.id];D===void 0&&(b(I),D=v(I),l[I.id]=D,I.addEventListener("dispose",y));const st=N.program;s.updateUBOMapping(I,st);const H=e.render.frame;u[I.id]!==H&&(S(I),u[I.id]=H)}function v(I){const N=x();I.__bindingPointIndex=N;const D=o.createBuffer(),st=I.__size,H=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,st,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function x(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const N=l[I.id],D=I.uniforms,st=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let H=0,P=D.length;H<P;H++){const Z=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,C=Z.length;w<C;w++){const F=Z[w];if(M(F,H,w,st)===!0){const lt=F.__offset,it=Array.isArray(F.value)?F.value:[F.value];let pt=0;for(let dt=0;dt<it.length;dt++){const O=it[dt],V=R(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,lt+pt,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,pt),pt+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,N,D,st){const H=I.value,P=N+"_"+D;if(st[P]===void 0)return typeof H=="number"||typeof H=="boolean"?st[P]=H:st[P]=H.clone(),!0;{const Z=st[P];if(typeof H=="number"||typeof H=="boolean"){if(Z!==H)return st[P]=H,!0}else if(Z.equals(H)===!1)return Z.copy(H),!0}return!1}function b(I){const N=I.uniforms;let D=0;const st=16;for(let P=0,Z=N.length;P<Z;P++){const w=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,F=w.length;C<F;C++){const lt=w[C],it=Array.isArray(lt.value)?lt.value:[lt.value];for(let pt=0,dt=it.length;pt<dt;pt++){const O=it[pt],V=R(O),q=D%st,St=q%V.boundary,xt=q+St;D+=St,xt!==0&&st-xt<V.storage&&(D+=st-xt),lt.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=V.storage}}}const H=D%st;return H>0&&(D+=st-H),I.__size=D,I.__cache={},this}function R(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function y(I){const N=I.target;N.removeEventListener("dispose",y);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class C1{constructor(e={}){const{canvas:i=my(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const I=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=qa,this.toneMappingExposure=1;const D=this;let st=!1,H=0,P=0,Z=null,w=-1,C=null;const F=new $e,lt=new $e;let it=null;const pt=new Ue(0);let dt=0,O=i.width,V=i.height,q=1,St=null,xt=null;const L=new $e(0,0,O,V),J=new $e(0,0,O,V);let vt=!1;const j=new Q0;let ct=!1,Et=!1;const yt=new tn,Ht=new tn,Ft=new et,ne=new $e,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ke(){return Z===null?q:1}let W=s;function Tn(A,k){return i.getContext(A,k)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_d}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),W===null){const k="webgl2";if(W=Tn(k,A),W===null)throw Tn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,pe,Zt,Re,qt,U,T,tt,ft,Mt,mt,Xt,Dt,Pt,me,bt,zt,jt,Wt,Nt,Jt,ae,Ne,G;function At(){ce=new NT(W),ce.init(),ae=new v1(W,ce),pe=new AT(W,ce,e,ae),Zt=new m1(W,ce),pe.reverseDepthBuffer&&S&&Zt.buffers.depth.setReversed(!0),Re=new zT(W),qt=new t1,U=new g1(W,ce,Zt,qt,pe,ae,Re),T=new CT(D),tt=new LT(D),ft=new Vy(W),Ne=new TT(W,ft),Mt=new OT(W,ft,Re,Ne),mt=new BT(W,Mt,ft,Re),Wt=new IT(W,pe,U),bt=new RT(qt),Xt=new $b(D,T,tt,ce,pe,Ne,bt),Dt=new A1(D,qt),Pt=new n1,me=new l1(ce),jt=new ET(D,T,tt,Zt,mt,M,m),zt=new d1(D,mt,pe),G=new R1(W,Re,pe,Zt),Nt=new bT(W,ce,Re),Jt=new PT(W,ce,Re),Re.programs=Xt.programs,D.capabilities=pe,D.extensions=ce,D.properties=qt,D.renderLists=Pt,D.shadowMap=zt,D.state=Zt,D.info=Re}At();const ot=new T1(D,W);this.xr=ot,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(O,V,!1))},this.getSize=function(A){return A.set(O,V)},this.setSize=function(A,k,at=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,V=k,i.width=Math.floor(A*q),i.height=Math.floor(k*q),at===!0&&(i.style.width=A+"px",i.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(O*q,V*q).floor()},this.setDrawingBufferSize=function(A,k,at){O=A,V=k,q=at,i.width=Math.floor(A*at),i.height=Math.floor(k*at),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,k,at,nt){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,k,at,nt),Zt.viewport(F.copy(L).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,k,at,nt){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,k,at,nt),Zt.scissor(lt.copy(J).multiplyScalar(q).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(A){Zt.setScissorTest(vt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(A=!0,k=!0,at=!0){let nt=0;if(A){let X=!1;if(Z!==null){const Tt=Z.texture.format;X=Tt===Md||Tt===yd||Tt===Sd}if(X){const Tt=Z.texture.type,Ct=Tt===la||Tt===Ts||Tt===Bo||Tt===Ur||Tt===vd||Tt===xd,wt=jt.getClearColor(),Gt=jt.getClearAlpha(),te=wt.r,Qt=wt.g,It=wt.b;Ct?(b[0]=te,b[1]=Qt,b[2]=It,b[3]=Gt,W.clearBufferuiv(W.COLOR,0,b)):(R[0]=te,R[1]=Qt,R[2]=It,R[3]=Gt,W.clearBufferiv(W.COLOR,0,R))}else nt|=W.COLOR_BUFFER_BIT}k&&(nt|=W.DEPTH_BUFFER_BIT),at&&(nt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Pt.dispose(),me.dispose(),qt.dispose(),T.dispose(),tt.dispose(),mt.dispose(),Ne.dispose(),G.dispose(),Xt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",zr),ot.removeEventListener("sessionend",Ir),bi.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),st=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),st=!1;const A=Re.autoReset,k=zt.enabled,at=zt.autoUpdate,nt=zt.needsUpdate,X=zt.type;At(),Re.autoReset=A,zt.enabled=k,zt.autoUpdate=at,zt.needsUpdate=nt,zt.type=X}function Ut(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const k=A.target;k.removeEventListener("dispose",$t),Xe(k)}function Xe(A){on(A),qt.remove(A)}function on(A){const k=qt.get(A).programs;k!==void 0&&(k.forEach(function(at){Xt.releaseProgram(at)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,at,nt,X,Tt){k===null&&(k=Le);const Ct=X.isMesh&&X.matrixWorld.determinant()<0,wt=Fr(A,k,at,nt,X);Zt.setMaterial(nt,Ct);let Gt=at.index,te=1;if(nt.wireframe===!0){if(Gt=Mt.getWireframeAttribute(at),Gt===void 0)return;te=2}const Qt=at.drawRange,It=at.attributes.position;let Se=Qt.start*te,Ce=(Qt.start+Qt.count)*te;Tt!==null&&(Se=Math.max(Se,Tt.start*te),Ce=Math.min(Ce,(Tt.start+Tt.count)*te)),Gt!==null?(Se=Math.max(Se,0),Ce=Math.min(Ce,Gt.count)):It!=null&&(Se=Math.max(Se,0),Ce=Math.min(Ce,It.count));const Oe=Ce-Se;if(Oe<0||Oe===1/0)return;Ne.setup(X,nt,wt,at,Gt);let bn,ve=Nt;if(Gt!==null&&(bn=ft.get(Gt),ve=Jt,ve.setIndex(bn)),X.isMesh)nt.wireframe===!0?(Zt.setLineWidth(nt.wireframeLinewidth*ke()),ve.setMode(W.LINES)):ve.setMode(W.TRIANGLES);else if(X.isLine){let Vt=nt.linewidth;Vt===void 0&&(Vt=1),Zt.setLineWidth(Vt*ke()),X.isLineSegments?ve.setMode(W.LINES):X.isLineLoop?ve.setMode(W.LINE_LOOP):ve.setMode(W.LINE_STRIP)}else X.isPoints?ve.setMode(W.POINTS):X.isSprite&&ve.setMode(W.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ve.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))ve.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Vt=X._multiDrawStarts,ln=X._multiDrawCounts,ie=X._multiDrawCount,Nn=Gt?ft.get(Gt).bytesPerElement:1,ha=qt.get(nt).currentProgram.getUniforms();for(let vn=0;vn<ie;vn++)ha.setValue(W,"_gl_DrawID",vn),ve.render(Vt[vn]/Nn,ln[vn])}else if(X.isInstancedMesh)ve.renderInstances(Se,Oe,X.count);else if(at.isInstancedBufferGeometry){const Vt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ln=Math.min(at.instanceCount,Vt);ve.renderInstances(Se,Oe,ln)}else ve.render(Se,Oe)};function ye(A,k,at){A.transparent===!0&&A.side===Li&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,je(A,k,at),A.side=ja,A.needsUpdate=!0,je(A,k,at),A.side=Li):je(A,k,at)}this.compile=function(A,k,at=null){at===null&&(at=A),_=me.get(at),_.init(k),N.push(_),at.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),A!==at&&A.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const nt=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Tt=X.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const wt=Tt[Ct];ye(wt,at,X),nt.add(wt)}else ye(Tt,at,X),nt.add(Tt)}),N.pop(),_=null,nt},this.compileAsync=function(A,k,at=null){const nt=this.compile(A,k,at);return new Promise(X=>{function Tt(){if(nt.forEach(function(Ct){qt.get(Ct).currentProgram.isReady()&&nt.delete(Ct)}),nt.size===0){X(A);return}setTimeout(Tt,10)}ce.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _n=null;function di(A){_n&&_n(A)}function zr(){bi.stop()}function Ir(){bi.start()}const bi=new J0;bi.setAnimationLoop(di),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){_n=A,ot.setAnimationLoop(A),A===null?bi.stop():bi.start()},ot.addEventListener("sessionstart",zr),ot.addEventListener("sessionend",Ir),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(st===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(k),k=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,k,Z),_=me.get(A,N.length),_.init(k),N.push(_),Ht.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(Ht),Et=this.localClippingEnabled,ct=bt.init(this.clippingPlanes,Et),y=Pt.get(A,I.length),y.init(),I.push(y),ot.enabled===!0&&ot.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Za(Tt,k,-1/0,D.sortObjects)}Za(A,k,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,xt),fe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,fe&&jt.addToRenderList(y,A),this.info.render.frame++,ct===!0&&bt.beginShadows();const at=_.state.shadowsArray;zt.render(at,A,k),ct===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=y.opaque,X=y.transmissive;if(_.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(X.length>0)for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const Gt=Tt[Ct];Br(nt,X,A,Gt)}fe&&jt.render(A);for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const Gt=Tt[Ct];Cs(y,A,Gt,Gt.viewport)}}else X.length>0&&Br(nt,X,A,k),fe&&jt.render(A),Cs(y,A,k);Z!==null&&(U.updateMultisampleRenderTarget(Z),U.updateRenderTargetMipmap(Z)),A.isScene===!0&&A.onAfterRender(D,A,k),Ne.resetDefaultState(),w=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],ct===!0&&bt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Za(A,k,at,nt){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){nt&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);const Ct=mt.update(A),wt=A.material;wt.visible&&y.push(A,Ct,wt,at,ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Ct=mt.update(A),wt=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ne.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ne.copy(Ct.boundingSphere.center)),ne.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(wt)){const Gt=Ct.groups;for(let te=0,Qt=Gt.length;te<Qt;te++){const It=Gt[te],Se=wt[It.materialIndex];Se&&Se.visible&&y.push(A,Ct,Se,at,ne.z,It)}}else wt.visible&&y.push(A,Ct,wt,at,ne.z,null)}}const Tt=A.children;for(let Ct=0,wt=Tt.length;Ct<wt;Ct++)Za(Tt[Ct],k,at,nt)}function Cs(A,k,at,nt){const X=A.opaque,Tt=A.transmissive,Ct=A.transparent;_.setupLightsView(at),ct===!0&&bt.setGlobalState(D.clippingPlanes,at),nt&&Zt.viewport(F.copy(nt)),X.length>0&&Ka(X,k,at),Tt.length>0&&Ka(Tt,k,at),Ct.length>0&&Ka(Ct,k,at),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function Br(A,k,at,nt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[nt.id]===void 0&&(_.state.transmissionRenderTarget[nt.id]=new bs(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Fo:la,minFilter:Ms,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[nt.id],Ct=nt.viewport||F;Tt.setSize(Ct.z,Ct.w);const wt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(pt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),fe&&jt.render(at);const Gt=D.toneMapping;D.toneMapping=qa;const te=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),_.setupLightsView(nt),ct===!0&&bt.setGlobalState(D.clippingPlanes,nt),Ka(A,at,nt),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let It=0,Se=k.length;It<Se;It++){const Ce=k[It],Oe=Ce.object,bn=Ce.geometry,ve=Ce.material,Vt=Ce.group;if(ve.side===Li&&Oe.layers.test(nt.layers)){const ln=ve.side;ve.side=Vn,ve.needsUpdate=!0,pi(Oe,at,nt,bn,ve,Vt),ve.side=ln,ve.needsUpdate=!0,Qt=!0}}Qt===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}D.setRenderTarget(wt),D.setClearColor(pt,dt),te!==void 0&&(nt.viewport=te),D.toneMapping=Gt}function Ka(A,k,at){const nt=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Tt=A.length;X<Tt;X++){const Ct=A[X],wt=Ct.object,Gt=Ct.geometry,te=nt===null?Ct.material:nt,Qt=Ct.group;wt.layers.test(at.layers)&&pi(wt,k,at,Gt,te,Qt)}}function pi(A,k,at,nt,X,Tt){A.onBeforeRender(D,k,at,nt,X,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(D,k,at,nt,A,Tt),X.transparent===!0&&X.side===Li&&X.forceSinglePass===!1?(X.side=Vn,X.needsUpdate=!0,D.renderBufferDirect(at,k,nt,X,A,Tt),X.side=ja,X.needsUpdate=!0,D.renderBufferDirect(at,k,nt,X,A,Tt),X.side=Li):D.renderBufferDirect(at,k,nt,X,A,Tt),A.onAfterRender(D,k,at,nt,X,Tt)}function je(A,k,at){k.isScene!==!0&&(k=Le);const nt=qt.get(A),X=_.state.lights,Tt=_.state.shadowsArray,Ct=X.state.version,wt=Xt.getParameters(A,X.state,Tt,k,at),Gt=Xt.getProgramCacheKey(wt);let te=nt.programs;nt.environment=A.isMeshStandardMaterial?k.environment:null,nt.fog=k.fog,nt.envMap=(A.isMeshStandardMaterial?tt:T).get(A.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",$t),te=new Map,nt.programs=te);let Qt=te.get(Gt);if(Qt!==void 0){if(nt.currentProgram===Qt&&nt.lightsStateVersion===Ct)return Oi(A,wt),Qt}else wt.uniforms=Xt.getUniforms(A),A.onBeforeCompile(wt,D),Qt=Xt.acquireProgram(wt,Gt),te.set(Gt,Qt),nt.uniforms=wt.uniforms;const It=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=bt.uniform),Oi(A,wt),nt.needsLights=Hc(A),nt.lightsStateVersion=Ct,nt.needsLights&&(It.ambientLightColor.value=X.state.ambient,It.lightProbe.value=X.state.probe,It.directionalLights.value=X.state.directional,It.directionalLightShadows.value=X.state.directionalShadow,It.spotLights.value=X.state.spot,It.spotLightShadows.value=X.state.spotShadow,It.rectAreaLights.value=X.state.rectArea,It.ltc_1.value=X.state.rectAreaLTC1,It.ltc_2.value=X.state.rectAreaLTC2,It.pointLights.value=X.state.point,It.pointLightShadows.value=X.state.pointShadow,It.hemisphereLights.value=X.state.hemi,It.directionalShadowMap.value=X.state.directionalShadowMap,It.directionalShadowMatrix.value=X.state.directionalShadowMatrix,It.spotShadowMap.value=X.state.spotShadowMap,It.spotLightMatrix.value=X.state.spotLightMatrix,It.spotLightMap.value=X.state.spotLightMap,It.pointShadowMap.value=X.state.pointShadowMap,It.pointShadowMatrix.value=X.state.pointShadowMatrix),nt.currentProgram=Qt,nt.uniformsList=null,Qt}function gn(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Uc.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Oi(A,k){const at=qt.get(A);at.outputColorSpace=k.outputColorSpace,at.batching=k.batching,at.batchingColor=k.batchingColor,at.instancing=k.instancing,at.instancingColor=k.instancingColor,at.instancingMorph=k.instancingMorph,at.skinning=k.skinning,at.morphTargets=k.morphTargets,at.morphNormals=k.morphNormals,at.morphColors=k.morphColors,at.morphTargetsCount=k.morphTargetsCount,at.numClippingPlanes=k.numClippingPlanes,at.numIntersection=k.numClipIntersection,at.vertexAlphas=k.vertexAlphas,at.vertexTangents=k.vertexTangents,at.toneMapping=k.toneMapping}function Fr(A,k,at,nt,X){k.isScene!==!0&&(k=Le),U.resetTextureUnits();const Tt=k.fog,Ct=nt.isMeshStandardMaterial?k.environment:null,wt=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Or,Gt=(nt.isMeshStandardMaterial?tt:T).get(nt.envMap||Ct),te=nt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Qt=!!at.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),It=!!at.morphAttributes.position,Se=!!at.morphAttributes.normal,Ce=!!at.morphAttributes.color;let Oe=qa;nt.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=D.toneMapping);const bn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ve=bn!==void 0?bn.length:0,Vt=qt.get(nt),ln=_.state.lights;if(ct===!0&&(Et===!0||A!==C)){const An=A===C&&nt.id===w;bt.setState(nt,A,An)}let ie=!1;nt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ln.state.version||Vt.outputColorSpace!==wt||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isBatchedMesh&&Vt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Vt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Vt.instancingMorph===!1&&X.morphTexture!==null||Vt.envMap!==Gt||nt.fog===!0&&Vt.fog!==Tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==bt.numPlanes||Vt.numIntersection!==bt.numIntersection)||Vt.vertexAlphas!==te||Vt.vertexTangents!==Qt||Vt.morphTargets!==It||Vt.morphNormals!==Se||Vt.morphColors!==Ce||Vt.toneMapping!==Oe||Vt.morphTargetsCount!==ve)&&(ie=!0):(ie=!0,Vt.__version=nt.version);let Nn=Vt.currentProgram;ie===!0&&(Nn=je(nt,k,X));let ha=!1,vn=!1,da=!1;const Ae=Nn.getUniforms(),$n=Vt.uniforms;if(Zt.useProgram(Nn.program)&&(ha=!0,vn=!0,da=!0),nt.id!==w&&(w=nt.id,vn=!0),ha||C!==A){Zt.buffers.depth.getReversed()?(yt.copy(A.projectionMatrix),gy(yt),vy(yt),Ae.setValue(W,"projectionMatrix",yt)):Ae.setValue(W,"projectionMatrix",A.projectionMatrix),Ae.setValue(W,"viewMatrix",A.matrixWorldInverse);const mi=Ae.map.cameraPosition;mi!==void 0&&mi.setValue(W,Ft.setFromMatrixPosition(A.matrixWorld)),pe.logarithmicDepthBuffer&&Ae.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ae.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,vn=!0,da=!0)}if(X.isSkinnedMesh){Ae.setOptional(W,X,"bindMatrix"),Ae.setOptional(W,X,"bindMatrixInverse");const An=X.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ae.setValue(W,"boneTexture",An.boneTexture,U))}X.isBatchedMesh&&(Ae.setOptional(W,X,"batchingTexture"),Ae.setValue(W,"batchingTexture",X._matricesTexture,U),Ae.setOptional(W,X,"batchingIdTexture"),Ae.setValue(W,"batchingIdTexture",X._indirectTexture,U),Ae.setOptional(W,X,"batchingColorTexture"),X._colorsTexture!==null&&Ae.setValue(W,"batchingColorTexture",X._colorsTexture,U));const dn=at.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Wt.update(X,at,Nn),(vn||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,Ae.setValue(W,"receiveShadow",X.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&($n.envMap.value=Gt,$n.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&k.environment!==null&&($n.envMapIntensity.value=k.environmentIntensity),vn&&(Ae.setValue(W,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&Fc($n,da),Tt&&nt.fog===!0&&Dt.refreshFogUniforms($n,Tt),Dt.refreshMaterialUniforms($n,nt,q,V,_.state.transmissionRenderTarget[A.id]),Uc.upload(W,gn(Vt),$n,U)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Uc.upload(W,gn(Vt),$n,U),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ae.setValue(W,"center",X.center),Ae.setValue(W,"modelViewMatrix",X.modelViewMatrix),Ae.setValue(W,"normalMatrix",X.normalMatrix),Ae.setValue(W,"modelMatrix",X.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const An=nt.uniformsGroups;for(let mi=0,ti=An.length;mi<ti;mi++){const Pi=An[mi];G.update(Pi,Nn),G.bind(Pi,Nn)}}return Nn}function Fc(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Hc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,k,at){qt.get(A.texture).__webglTexture=k,qt.get(A.depthTexture).__webglTexture=at;const nt=qt.get(A);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=at===void 0,nt.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const at=qt.get(A);at.__webglFramebuffer=k,at.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,at=0){Z=A,H=k,P=at;let nt=!0,X=null,Tt=!1,Ct=!1;if(A){const Gt=qt.get(A);if(Gt.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(W.FRAMEBUFFER,null),nt=!1;else if(Gt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Gt.__hasExternalTextures)U.rebindTextures(A,qt.get(A.texture).__webglTexture,qt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const It=A.depthTexture;if(Gt.__boundDepthTexture!==It){if(It!==null&&qt.has(It)&&(A.width!==It.image.width||A.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const Qt=qt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[k])?X=Qt[k][at]:X=Qt[k],Tt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?X=qt.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?X=Qt[at]:X=Qt,F.copy(A.viewport),lt.copy(A.scissor),it=A.scissorTest}else F.copy(L).multiplyScalar(q).floor(),lt.copy(J).multiplyScalar(q).floor(),it=vt;if(Zt.bindFramebuffer(W.FRAMEBUFFER,X)&&nt&&Zt.drawBuffers(A,X),Zt.viewport(F),Zt.scissor(lt),Zt.setScissorTest(it),Tt){const Gt=qt.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Gt.__webglTexture,at)}else if(Ct){const Gt=qt.get(A.texture),te=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Gt.__webglTexture,at||0,te)}w=-1},this.readRenderTargetPixels=function(A,k,at,nt,X,Tt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){Zt.bindFramebuffer(W.FRAMEBUFFER,wt);try{const Gt=A.texture,te=Gt.format,Qt=Gt.type;if(!pe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-nt&&at>=0&&at<=A.height-X&&W.readPixels(k,at,nt,X,ae.convert(te),ae.convert(Qt),Tt)}finally{const Gt=Z!==null?qt.get(Z).__webglFramebuffer:null;Zt.bindFramebuffer(W.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(A,k,at,nt,X,Tt,Ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){const Gt=A.texture,te=Gt.format,Qt=Gt.type;if(!pe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-nt&&at>=0&&at<=A.height-X){Zt.bindFramebuffer(W.FRAMEBUFFER,wt);const It=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,It),W.bufferData(W.PIXEL_PACK_BUFFER,Tt.byteLength,W.STREAM_READ),W.readPixels(k,at,nt,X,ae.convert(te),ae.convert(Qt),0);const Se=Z!==null?qt.get(Z).__webglFramebuffer:null;Zt.bindFramebuffer(W.FRAMEBUFFER,Se);const Ce=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await _y(W,Ce,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,It),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Tt),W.deleteBuffer(It),W.deleteSync(Ce),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,at=0){A.isTexture!==!0&&(zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const nt=Math.pow(2,-at),X=Math.floor(A.image.width*nt),Tt=Math.floor(A.image.height*nt),Ct=k!==null?k.x:0,wt=k!==null?k.y:0;U.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,at,0,0,Ct,wt,X,Tt),Zt.unbindTexture()},this.copyTextureToTexture=function(A,k,at=null,nt=null,X=0){A.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,A=arguments[1],k=arguments[2],X=arguments[3]||0,at=null);let Tt,Ct,wt,Gt,te,Qt,It,Se,Ce;const Oe=A.isCompressedTexture?A.mipmaps[X]:A.image;at!==null?(Tt=at.max.x-at.min.x,Ct=at.max.y-at.min.y,wt=at.isBox3?at.max.z-at.min.z:1,Gt=at.min.x,te=at.min.y,Qt=at.isBox3?at.min.z:0):(Tt=Oe.width,Ct=Oe.height,wt=Oe.depth||1,Gt=0,te=0,Qt=0),nt!==null?(It=nt.x,Se=nt.y,Ce=nt.z):(It=0,Se=0,Ce=0);const bn=ae.convert(k.format),ve=ae.convert(k.type);let Vt;k.isData3DTexture?(U.setTexture3D(k,0),Vt=W.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),Vt=W.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),Vt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,k.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,k.unpackAlignment);const ln=W.getParameter(W.UNPACK_ROW_LENGTH),ie=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Nn=W.getParameter(W.UNPACK_SKIP_PIXELS),ha=W.getParameter(W.UNPACK_SKIP_ROWS),vn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Oe.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Oe.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Gt),W.pixelStorei(W.UNPACK_SKIP_ROWS,te),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Qt);const da=A.isDataArrayTexture||A.isData3DTexture,Ae=k.isDataArrayTexture||k.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const $n=qt.get(A),dn=qt.get(k),An=qt.get($n.__renderTarget),mi=qt.get(dn.__renderTarget);Zt.bindFramebuffer(W.READ_FRAMEBUFFER,An.__webglFramebuffer),Zt.bindFramebuffer(W.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let ti=0;ti<wt;ti++)da&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qt.get(A).__webglTexture,X,Qt+ti),A.isDepthTexture?(Ae&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qt.get(k).__webglTexture,X,Ce+ti),W.blitFramebuffer(Gt,te,Tt,Ct,It,Se,Tt,Ct,W.DEPTH_BUFFER_BIT,W.NEAREST)):Ae?W.copyTexSubImage3D(Vt,X,It,Se,Ce+ti,Gt,te,Tt,Ct):W.copyTexSubImage2D(Vt,X,It,Se,Ce+ti,Gt,te,Tt,Ct);Zt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ae?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Vt,X,It,Se,Ce,Tt,Ct,wt,bn,ve,Oe.data):k.isCompressedArrayTexture?W.compressedTexSubImage3D(Vt,X,It,Se,Ce,Tt,Ct,wt,bn,Oe.data):W.texSubImage3D(Vt,X,It,Se,Ce,Tt,Ct,wt,bn,ve,Oe):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,It,Se,Tt,Ct,bn,ve,Oe.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,It,Se,Oe.width,Oe.height,bn,Oe.data):W.texSubImage2D(W.TEXTURE_2D,X,It,Se,Tt,Ct,bn,ve,Oe);W.pixelStorei(W.UNPACK_ROW_LENGTH,ln),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ie),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Nn),W.pixelStorei(W.UNPACK_SKIP_ROWS,ha),W.pixelStorei(W.UNPACK_SKIP_IMAGES,vn),X===0&&k.generateMipmaps&&W.generateMipmap(Vt),Zt.unbindTexture()},this.copyTextureToTexture3D=function(A,k,at=null,nt=null,X=0){return A.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,nt=arguments[1]||null,A=arguments[2],k=arguments[3],X=arguments[4]||0),zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,at,nt,X)},this.initRenderTarget=function(A){qt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Zt.unbindTexture()},this.resetState=function(){H=0,P=0,Z=null,Zt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Me._getDrawingBufferColorSpace(e),i.unpackColorSpace=Me._getUnpackColorSpace()}}class w1 extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class av extends Vo{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _0=new tn,pd=new Ed,Mc=new Ic,Ec=new et;class D1 extends kn{constructor(e=new fa,i=new av){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=u,e.ray.intersectsSphere(Mc)===!1)return;_0.copy(l).invert(),pd.copy(e.ray).applyMatrix4(_0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,x=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=S,R=M;b<R;b++){const y=p.getX(b);Ec.fromBufferAttribute(x,y),g0(Ec,y,m,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(x.count,h.start+h.count);for(let b=S,R=M;b<R;b++)Ec.fromBufferAttribute(x,b),g0(Ec,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function g0(o,e,i,s,l,u,h){const d=pd.distanceSqToPoint(o);if(d<i){const m=new et;pd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class U1 extends En{constructor(e,i,s,l,u,h,d,m,p){super(e,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class v0{constructor(e=1,i=0,s=0){return this.radius=e,this.phi=i,this.theta=s,this}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Ln(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class L1 extends Rs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);const x0={type:"change"},bd={type:"start"},sv={type:"end"},Tc=new Ed,S0=new ka,N1=Math.cos(70*py.DEG2RAD),un=new et,Gn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6;class O1 extends L1{constructor(e,i=null){super(e,i),this.state=Fe.NONE,this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new As,this._lastTargetPosition=new et,this._quat=new As().setFromUnitVectors(e.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new v0,this._sphericalDelta=new v0,this._scale=1,this._panOffset=new et,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new et,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z1.bind(this),this._onPointerDown=P1.bind(this),this._onPointerUp=I1.bind(this),this._onContextMenu=X1.bind(this),this._onMouseWheel=H1.bind(this),this._onKeyDown=G1.bind(this),this._onTouchStart=V1.bind(this),this._onTouchMove=k1.bind(this),this._onMouseDown=B1.bind(this),this._onMouseMove=F1.bind(this),this._interceptControlDown=W1.bind(this),this._interceptControlUp=Y1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(x0),this.update(),this.state=Fe.NONE}update(e=null){const i=this.object.position;un.copy(i).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),l<-Math.PI?l+=Gn:l>Math.PI&&(l-=Gn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),i.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=un.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new et(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Tc.origin.copy(this.object.position),Tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tc.direction))<N1?this.object.lookAt(this.target):(S0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tc.intersectPlane(S0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(x0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){un.setFromMatrixColumn(i,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,i){this.screenSpacePanning===!0?un.setFromMatrixColumn(i,1):(un.setFromMatrixColumn(i,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let u=un.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ue,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function P1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function z1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function I1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sv),this.state=Fe.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function B1(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Fe.DOLLY;break;case Tr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Fe.ROTATE}break;case Tr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(bd)}function F1(o){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function H1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(o.preventDefault(),this.dispatchEvent(bd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(sv))}function G1(o){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(o)}function V1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Fe.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Fe.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(bd)}function k1(o){switch(this._trackPointer(o),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Fe.NONE}}function X1(o){this.enabled!==!1&&o.preventDefault()}function W1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const y0={CYCLOSM:"https://a.tile-cyclosm.openstreetmap.fr/cyclosm",STANDARD:"https://tile.openstreetmap.org",HOT:"https://a.tile.openstreetmap.fr/hot",OPENTOPOMAP:"https://a.tile.opentopomap.org",CARTODARK:"https://a.basemaps.cartocdn.com/dark_all",CARTOVOYAGER:"https://a.basemaps.cartocdn.com/rastertiles/voyager",SATELLITE:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile"};async function q1(o,e){const s=Math.pow(2,e),l=document.createElement("canvas");l.width=s*256,l.height=s*256;const u=l.getContext("2d");if(!u)throw new Error("Could not create canvas context");const h=[];for(let m=0;m<s;m++)for(let p=0;p<s;p++){const v=o(m,p,e),x=new Promise(S=>{const M=new Image;M.crossOrigin="anonymous",M.onload=()=>{u.drawImage(M,m*256,p*256,256,256),S()},M.onerror=()=>S(),M.src=v});h.push(x)}await Promise.all(h);const d=new U1(l);return d.wrapS=Lc,d.wrapT=Wa,d.minFilter=hi,d.magFilter=hi,d.anisotropy=16,d}const Di=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,j1=({settings:o,sidebarOffset:e})=>{const i=qe.useRef(null),s=qe.useRef(null),l=qe.useRef(null),u=qe.useRef(o),h=qe.useRef(e),d=qe.useRef(e),m=qe.useRef(0),p=qe.useRef(null),v=qe.useRef({torus:0,sphere:0,cylinder:0,cone:0,disc:0,mercator:0,gallPeters:0,sinusoidal:0,robinson:0,infinite:0}),[x,S]=qe.useState(!0);return qe.useEffect(()=>{u.current=o,h.current=e},[o,e]),qe.useEffect(()=>{S(!0),q1((b,R,y)=>o.mapLayer==="SATELLITE"?`${y0[o.mapLayer]}/${y}/${R}/${b}.jpg`:`${y0[o.mapLayer]}/${y}/${b}/${R}.png`,4).then(b=>{if(l.current){const R=l.current.uniforms.uTexture.value;R instanceof En&&R.image&&R.dispose(),l.current.uniforms.uTexture.value=b}S(!1)})},[o.mapLayer]),qe.useEffect(()=>{if(!i.current)return;const M=new w1,b=new fi(45,window.innerWidth/window.innerHeight,.1,3e3);b.position.set(0,40,110);const R=new C1({antialias:!0,alpha:!0});R.setSize(window.innerWidth,window.innerHeight),R.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current.appendChild(R.domElement),s.current=R;const y=new O1(b,R.domElement);y.enableDamping=!0,y.dampingFactor=.05;const _=`
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
    `,I=`
      varying vec2 vUv;
      varying vec2 vFinalUv;
      uniform sampler2D uTexture;
      uniform float uShowGrid;
      
      #define PI 3.14159265359

      float latToMercator(float lat) {
        float latLimit = 0.005; 
        float clampedLat = clamp(lat, latLimit, 1.0 - latLimit);
        float latRad = (clampedLat - 0.5) * PI;
        return (log(tan(PI / 4.0 + latRad / 2.0)) / PI + 1.0) / 2.0;
      }

      void main() {
        // Map to texture space using mercator adjustment for correctness on conformal modes
        float mercY = latToMercator(vFinalUv.y);
        vec4 texColor = texture2D(uTexture, vec2(vFinalUv.x, mercY));
        
        float grid = 0.0;
        if (uShowGrid > 0.5) {
          vec2 gridSpacing = vec2(18.0, 10.0);
          vec2 gridUv = fract(vFinalUv * gridSpacing);
          float line = step(0.98, gridUv.x) + step(0.98, gridUv.y);
          grid = clamp(line * 0.08, 0.0, 0.5);
        }
        
        gl_FragColor = vec4(texColor.rgb + grid, texColor.a);
      }
    `,N=new ua({vertexShader:_,fragmentShader:I,uniforms:{uTorusT:{value:0},uSphereT:{value:0},uCylinderT:{value:0},uConeT:{value:0},uDiscT:{value:0},uMercatorT:{value:0},uGallPetersT:{value:0},uSinusoidalT:{value:0},uRobinsonT:{value:0},uInfiniteT:{value:0},uTexture:{value:new En},uShowGrid:{value:u.current.showGrid?1:0}},side:Li});l.current=N;const D=new Xo(1,1,400,400),st=new Ni(D,N);M.add(st);const H=12e3,P=new fa,Z=new Float32Array(H*3);for(let it=0;it<H;it++){const pt=600+Math.random()*800,dt=2*Math.PI*Math.random(),O=Math.acos(2*Math.random()-1);Z[it*3]=pt*Math.sin(O)*Math.cos(dt),Z[it*3+1]=pt*Math.sin(O)*Math.sin(dt),Z[it*3+2]=pt*Math.cos(O)}P.setAttribute("position",new Ti(Z,3));const w=new D1(P,new av({size:.7,color:8956671,transparent:!0,opacity:.8}));M.add(w),p.current=w;const C=it=>{const pt=requestAnimationFrame(C),dt=(it-m.current)/1e3;m.current=it;const O=5;if(d.current+=(h.current-d.current)*Math.min(dt*O,1),b.setViewOffset(window.innerWidth,window.innerHeight,d.current/2,0,window.innerWidth,window.innerHeight),p.current&&(p.current.rotation.y+=5e-5),l.current){const V=u.current.viewMode,q={torus:V==="TORUS"?1:0,sphere:V==="SPHERE"?1:0,cylinder:V==="CYLINDER"?1:0,cone:V==="CONE"?1:0,disc:V==="DISC"?1:0,mercator:V==="MERCATOR"?1:0,gallPeters:V==="GALL_PETERS"?1:0,sinusoidal:V==="SINUSOIDAL"?1:0,robinson:V==="ROBINSON"?1:0,infinite:V==="INFINITE"||V==="TORUS"?1:0};Object.keys(q).forEach(L=>{let J=q[L];L==="torus"&&J===1&&v.current.infinite<.9&&(J=0);const vt=v.current[L],j=L==="torus"?.5:1.5;vt<J?v.current[L]=Math.min(J,vt+dt*j):vt>J&&(v.current[L]=Math.max(J,vt-dt*1.5))});const St=Di(v.current.torus);y.target.set(0,0,-25*St);const xt=l.current;xt.uniforms.uInfiniteT.value=Di(v.current.infinite),xt.uniforms.uMercatorT.value=Di(v.current.mercator),xt.uniforms.uGallPetersT.value=Di(v.current.gallPeters),xt.uniforms.uSinusoidalT.value=Di(v.current.sinusoidal),xt.uniforms.uRobinsonT.value=Di(v.current.robinson),xt.uniforms.uSphereT.value=Di(v.current.sphere),xt.uniforms.uCylinderT.value=Di(v.current.cylinder),xt.uniforms.uConeT.value=Di(v.current.cone),xt.uniforms.uDiscT.value=Di(v.current.disc),xt.uniforms.uTorusT.value=v.current.torus,xt.uniforms.uShowGrid.value=u.current.showGrid?1:0}return y.update(),R.render(M,b),pt};m.current=performance.now();const F=C(m.current),lt=()=>{b.aspect=window.innerWidth/window.innerHeight,b.updateProjectionMatrix(),R.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",lt),()=>{window.removeEventListener("resize",lt),cancelAnimationFrame(F),R.dispose(),D.dispose(),N.dispose()}},[]),Ot.jsx("div",{ref:i,className:"w-full h-full bg-[#000005] cursor-move",children:x&&Ot.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md z-10",children:Ot.jsxs("div",{className:"text-center space-y-4",children:[Ot.jsx("div",{className:"w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin mx-auto"}),Ot.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400",children:"Initializing Playground..."})]})})})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=o=>{const e=K1(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=qe.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>qe.createElement("svg",{ref:m,...Q1,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:rv("lucide",l),...!u&&!J1(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,v])=>qe.createElement(p,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(o,e)=>{const i=qe.forwardRef(({className:s,...l},u)=>qe.createElement($1,{ref:u,iconNode:e,className:rv(`lucide-${Z1(M0(o))}`,`lucide-${o}`,s),...l}));return i.displayName=M0(o),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],eA=Ye("activity",tA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],iA=Ye("bike",nA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],sA=Ye("box",aA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],oA=Ye("chevron-left",rA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cA=Ye("chevron-right",lA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],fA=Ye("cloud",uA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],dA=Ye("compass",hA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]],mA=Ye("cylinder",pA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],gA=Ye("disc",_A);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xA=Ye("earth",vA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],yA=Ye("globe",SA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],E0=Ye("grid-3x3",MA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],TA=Ye("heart",EA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],AA=Ye("info",bA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],CA=Ye("layers",RA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],T0=Ye("map",wA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],UA=Ye("moon",DA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],NA=Ye("mountain",LA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],PA=Ye("navigation",OA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],IA=Ye("pyramid",zA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],FA=Ye("rotate-3d",BA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],GA=Ye("triangle",HA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],kA=Ye("wind",VA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],WA=Ye("zap",XA),YA=()=>{const[o,e]=qe.useState({zoom:1,rotation:{x:0,y:0},showGrid:!0,viewMode:"SPHERE",mapLayer:"SATELLITE"}),[i,s]=qe.useState(!0),l=qe.useRef("STANDARD"),u=qe.useCallback(_=>{["SPHERE","TORUS","CYLINDER","CONE","DISC"].includes(_)||(l.current=_),e(N=>({...N,viewMode:_}))},[]),h=_=>e(I=>({...I,mapLayer:_})),d=()=>e(_=>({..._,showGrid:!_.showGrid})),m=_=>{const I=o.viewMode;u(I===_?l.current:_)},p=o.viewMode==="TORUS",v=o.viewMode==="SPHERE",x=o.viewMode==="CYLINDER",S=o.viewMode==="CONE",M=o.viewMode==="DISC",b=p||v||x||S||M,R=[{id:"STANDARD",name:"Standard (Plate Carrée)",icon:E0},{id:"INFINITE",name:"Infinite (Transverse)",icon:WA},{id:"MERCATOR",name:"Mercator (Navigational)",icon:dA},{id:"ROBINSON",name:"Robinson (Pseudocylindrical)",icon:xA},{id:"GALL_PETERS",name:"Gall-Peters (Equal Area)",icon:T0},{id:"SINUSOIDAL",name:"Sinusoidal (Equal Area)",icon:GA}],y=[{id:"CYCLOSM",name:"CyclOSM (Topo)",icon:iA,color:"text-emerald-400"},{id:"SATELLITE",name:"ESRI Satellite",icon:fA,color:"text-sky-400"},{id:"OPENTOPOMAP",name:"OpenTopoMap",icon:NA,color:"text-amber-400"},{id:"STANDARD",name:"OSM Standard",icon:PA,color:"text-blue-400"},{id:"HOT",name:"Humanitarian",icon:TA,color:"text-rose-400"},{id:"CARTODARK",name:"Carto Dark",icon:UA,color:"text-indigo-400"}];return Ot.jsxs("div",{className:"flex h-screen w-screen bg-zinc-950 font-sans text-zinc-100 overflow-hidden",children:[Ot.jsxs("div",{className:"relative flex-1 h-full",children:[Ot.jsx(j1,{settings:o,sidebarOffset:i?380:0}),!i&&Ot.jsx("button",{onClick:()=>s(!0),className:"absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 hover:bg-zinc-800 transition-colors shadow-xl",children:Ot.jsx(oA,{size:20})})]}),Ot.jsx("aside",{className:`fixed top-0 right-0 h-full bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl z-40 ${i?"translate-x-0":"translate-x-full"} w-full sm:w-[380px]`,children:Ot.jsxs("div",{className:"h-full flex flex-col p-10 overflow-y-auto",children:[Ot.jsxs("div",{className:"flex items-center justify-between mb-12",children:[Ot.jsxs("div",{className:"flex items-center gap-4",children:[Ot.jsx("div",{className:`p-3 rounded-2xl border transition-all duration-500 ${b?"bg-emerald-600/20 border-emerald-500/30":"bg-blue-600/20 border-blue-500/30"}`,children:Ot.jsx(eA,{className:b?"text-emerald-400":"text-blue-400",size:20})}),Ot.jsxs("div",{children:[Ot.jsx("h1",{className:"text-[11px] font-black uppercase tracking-[0.4em] text-white",children:"Projection Lab v43"}),Ot.jsx("p",{className:"text-[9px] text-zinc-500 font-mono text-nowrap uppercase",children:"Map Projection Playground"})]})]}),Ot.jsx("button",{onClick:()=>s(!1),className:"p-2 hover:bg-white/5 rounded-full transition-colors",children:Ot.jsx(cA,{size:18})})]}),Ot.jsxs("section",{className:"space-y-10 pb-12",children:[Ot.jsxs("div",{className:"space-y-5",children:[Ot.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[Ot.jsx(CA,{size:12})," Map Engine"]}),Ot.jsx("div",{className:"grid grid-cols-2 gap-2",children:y.map(_=>Ot.jsxs("button",{onClick:()=>h(_.id),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${o.mapLayer===_.id?"bg-white text-zinc-950 border-white shadow-lg":"bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800"}`,children:[Ot.jsx(_.icon,{size:20,className:o.mapLayer===_.id?"text-zinc-950":_.color}),Ot.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-center",children:_.name})]},_.id))})]}),Ot.jsxs("div",{className:"space-y-6",children:[Ot.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[Ot.jsx(T0,{size:12})," Cartography (2D)"]}),Ot.jsx("div",{className:"space-y-2.5",children:R.map(_=>Ot.jsx("button",{onClick:()=>u(_.id),className:`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 relative group ${o.viewMode===_.id?"bg-zinc-100 text-zinc-950 border-white shadow-lg":p&&_.id==="INFINITE"?"bg-blue-900/40 border-blue-500 text-blue-100":"bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-700"}`,children:Ot.jsxs("div",{className:"flex items-center gap-3",children:[Ot.jsx(_.icon,{size:16,className:`transition-colors ${o.viewMode===_.id?"text-zinc-950":p&&_.id==="INFINITE"?"text-blue-400":"text-zinc-500"}`}),Ot.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest",children:_.name})]})},_.id))})]}),Ot.jsxs("div",{className:"space-y-6",children:[Ot.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[Ot.jsx(sA,{size:12})," Dimensional (3D)"]}),Ot.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[Ot.jsxs("button",{onClick:()=>m("SPHERE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${v?"bg-emerald-600 text-white border-emerald-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Ot.jsx(yA,{size:20,className:v?"animate-pulse":""}),Ot.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest",children:"Sphere"})]}),Ot.jsxs("button",{onClick:()=>m("TORUS"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${p?"bg-blue-600 text-white border-blue-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Ot.jsx(FA,{size:20,className:p?"animate-pulse":""}),Ot.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Torus"})]}),Ot.jsxs("button",{onClick:()=>m("CYLINDER"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${x?"bg-indigo-600 text-white border-indigo-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Ot.jsx(mA,{size:20,className:x?"animate-pulse":""}),Ot.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cylinder"})]}),Ot.jsxs("button",{onClick:()=>m("CONE"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${S?"bg-orange-600 text-white border-orange-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Ot.jsx(IA,{size:20,className:S?"animate-pulse":""}),Ot.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Cone"})]}),Ot.jsxs("button",{onClick:()=>m("DISC"),className:`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 col-span-2 ${M?"bg-rose-600 text-white border-rose-400":"bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:[Ot.jsx(gA,{size:20,className:M?"animate-pulse":""}),Ot.jsx("span",{className:"text-[8px] uppercase font-black tracking-widest text-center",children:"Horizontal Disc World"})]})]})]}),Ot.jsxs("div",{className:"space-y-4",children:[Ot.jsxs("label",{className:"text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2",children:[Ot.jsx(kA,{size:12})," Visualization"]}),Ot.jsxs("div",{className:"flex items-center justify-between px-2",children:[Ot.jsxs("div",{className:"flex items-center gap-2",children:[Ot.jsx(E0,{size:12,className:"text-zinc-500"}),Ot.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase tracking-widest",children:"Geo Grid"})]}),Ot.jsx("button",{onClick:d,className:`w-10 h-5 rounded-full transition-all duration-500 relative border ${o.showGrid?"bg-emerald-600 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]":"bg-zinc-900 border-zinc-800"}`,children:Ot.jsx("div",{className:`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${o.showGrid?"translate-x-5":"translate-x-0"}`})})]})]}),Ot.jsx("div",{className:"pt-10 border-t border-white/5",children:Ot.jsxs("div",{className:"flex items-start gap-4 p-5 bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl",children:[Ot.jsx(AA,{className:"text-blue-500/60 shrink-0 mt-0.5",size:16}),Ot.jsx("p",{className:"text-[10px] text-zinc-500 leading-relaxed font-medium",children:"Map Projection Playground: Explore the mathematical beauty of geographic mappings, including the Robinson and Plate Carrée projections."})]})})]}),Ot.jsx("div",{className:"mt-auto pt-6 text-[8px] text-zinc-800 text-center font-mono uppercase tracking-[0.5em]",children:"Projection Lab v43"})]})})]})},ov=document.getElementById("root");if(!ov)throw new Error("Could not find root element to mount to");const qA=TS.createRoot(ov);qA.render(Ot.jsx(_S.StrictMode,{children:Ot.jsx(YA,{})}));
