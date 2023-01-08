!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactHookForm={},e.React)}(this,(function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=r(t),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"==typeof e;var u=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>Array.isArray(e)?e.filter(Boolean):[],f=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s};const y="blur",g="focusout",h="change",p="onBlur",_="onChange",v="onSubmit",b="onTouched",A="all",x="max",V="min",F="maxLength",S="minLength",w="pattern",k="required",D="validate",C=s.default.createContext(null),E=()=>s.default.useContext(C);var j=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t._proxyFormState[a]!==A&&(t._proxyFormState[a]=!s||A),r&&(r[a]=!0),e[a]}});return a},O=e=>u(e)&&!Object.keys(e).length,T=(e,t,r)=>{const{name:s,...a}=e;return O(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||A)))},U=e=>Array.isArray(e)?e:[e],B=(e,t,r)=>r&&t?e===t:!e||!t||e===t||U(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function L(e){const t=s.default.useRef(e);t.current=e,s.default.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}function M(e){const t=E(),{control:r=t.control,disabled:a,name:n,exact:i}=e||{},[o,u]=s.default.useState(r._formState),l=s.default.useRef(!0),c=s.default.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=s.default.useRef(n);return d.current=n,L({disabled:a,next:e=>l.current&&B(d.current,e.name,i)&&T(e,c.current)&&u({...r._formState,...e}),subject:r._subjects.state}),s.default.useEffect((()=>{l.current=!0;const e=r._proxyFormState.isDirty&&r._getDirty();return e!==r._formState.isDirty&&r._subjects.state.next({isDirty:e}),r._updateValid(),()=>{l.current=!1}}),[r]),j(o,r,c.current,!1)}var N=e=>"string"==typeof e,R=(e,t,r,s,a)=>N(e)?(s&&t.watch.add(e),m(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),m(r,e)))):(s&&(t.watchAll=!0),r),q="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function P(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(q&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},Array.isArray(e)||(e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)t[r]=P(e[r]);else t=e}return t}function W(e){const t=E(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},u=s.default.useRef(a);u.current=a,L({disabled:i,subject:r._subjects.watch,next:e=>{B(u.current,e.name,o)&&c(P(R(u.current,r._names,e.values||r._formValues,!1,n)))}});const[l,c]=s.default.useState(r._getWatch(a,n));return s.default.useEffect((()=>r._removeUnmounted())),l}function $(e){const t=E(),{name:r,control:a=t.control,shouldUnregister:n}=e,i=c(a._names.array,r),o=W({control:a,name:r,defaultValue:m(a._formValues,r,m(a._defaultValues,r,e.defaultValue)),exact:!0}),u=M({control:a,name:r}),d=s.default.useRef(a.register(r,{...e.rules,value:o}));return s.default.useEffect((()=>{const e=(e,t)=>{const r=m(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||n;(i?t&&!a._stateFlags.action:t)?a.unregister(r):e(r,!1)}}),[r,a,i,n]),{field:{name:r,value:o,onChange:s.default.useCallback((e=>d.current.onChange({target:{value:l(e),name:r},type:h})),[r]),onBlur:s.default.useCallback((()=>d.current.onBlur({target:{value:m(a._formValues,r),name:r},type:y})),[r,a]),ref:e=>{const t=m(a._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:u,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!m(u.errors,r)},isDirty:{enumerable:!0,get:()=>!!m(u.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!m(u.touchedFields,r)},error:{enumerable:!0,get:()=>m(u.errors,r)}})}}var I=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},H=e=>/^\w*$/.test(e),z=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function G(e,t,r){let s=-1;const a=H(t)?[t]:z(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const J=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=m(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(s)&&J(s,t)}}};var K=()=>{const e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const r=(16*Math.random()+e)%16|0;return("x"==t?r:3&r|8).toString(16)}))},Q=(e,t,r={})=>r.shouldFocus||f(r.shouldFocus)?r.focusName||`${e}.${f(r.focusIndex)?t:r.focusIndex}.`:"",X=e=>({isOnSubmit:!e||e===v,isOnBlur:e===p,isOnChange:e===_,isOnAll:e===A,isOnTouch:e===b}),Y=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),Z=(e,t,r)=>{const s=d(m(e,r));return G(s,"root",t[r]),G(e,r,s),e},ee=e=>"boolean"==typeof e,te=e=>"file"===e.type,re=e=>"function"==typeof e,se=e=>{if(!q)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ae=e=>N(e)||s.default.isValidElement(e),ne=e=>"radio"===e.type,ie=e=>e instanceof RegExp;const oe={value:!1,isValid:!1},ue={value:!0,isValid:!0};var le=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?ue:{value:e[0].value,isValid:!0}:ue:oe}return oe};const ce={isValid:!1,value:null};var de=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ce):ce;function fe(e,t,r="validate"){if(ae(e)||Array.isArray(e)&&e.every(ae)||ee(e)&&!e)return{type:r,message:ae(e)?e:"",ref:t}}var me=e=>u(e)&&!ie(e)?e:{value:e,message:""},ye=async(e,t,r,s,n)=>{const{ref:o,refs:l,required:c,maxLength:d,minLength:m,min:y,max:g,pattern:h,validate:p,name:_,valueAsNumber:v,mount:b,disabled:A}=e._f;if(!b||A)return{};const C=l?l[0]:o,E=e=>{s&&C.reportValidity&&(C.setCustomValidity(ee(e)?"":e||""),C.reportValidity())},j={},T=ne(o),U=a(o),B=T||U,L=(v||te(o))&&f(o.value)&&f(t)||se(o)&&""===o.value||""===t||Array.isArray(t)&&!t.length,M=I.bind(null,_,r,j),R=(e,t,r,s=F,a=S)=>{const n=e?t:r;j[_]={type:e?s:a,message:n,ref:o,...M(e?s:a,n)}};if(n?!Array.isArray(t)||!t.length:c&&(!B&&(L||i(t))||ee(t)&&!t||U&&!le(l).isValid||T&&!de(l).isValid)){const{value:e,message:t}=ae(c)?{value:!!c,message:c}:me(c);if(e&&(j[_]={type:k,message:t,ref:C,...M(k,t)},!r))return E(t),j}if(!(L||i(y)&&i(g))){let e,s;const a=me(g),n=me(y);if(i(t)||isNaN(t)){const r=o.valueAsDate||new Date(t),i=e=>new Date((new Date).toDateString()+" "+e),u="time"==o.type,l="week"==o.type;N(a.value)&&t&&(e=u?i(t)>i(a.value):l?t>a.value:r>new Date(a.value)),N(n.value)&&t&&(s=u?i(t)<i(n.value):l?t<n.value:r<new Date(n.value))}else{const r=o.valueAsNumber||(t?+t:t);i(a.value)||(e=r>a.value),i(n.value)||(s=r<n.value)}if((e||s)&&(R(!!e,a.message,n.message,x,V),!r))return E(j[_].message),j}if((d||m)&&!L&&(N(t)||n&&Array.isArray(t))){const e=me(d),s=me(m),a=!i(e.value)&&t.length>e.value,n=!i(s.value)&&t.length<s.value;if((a||n)&&(R(a,e.message,s.message),!r))return E(j[_].message),j}if(h&&!L&&N(t)){const{value:e,message:s}=me(h);if(ie(e)&&!t.match(e)&&(j[_]={type:w,message:s,ref:o,...M(w,s)},!r))return E(s),j}if(p)if(re(p)){const e=fe(await p(t),C);if(e&&(j[_]={...e,...M(D,e.message)},!r))return E(e.message),j}else if(u(p)){let e={};for(const s in p){if(!O(e)&&!r)break;const a=fe(await p[s](t),C,s);a&&(e={...a,...M(s,a.message)},E(a.message),r&&(j[_]=e))}if(!O(e)&&(j[_]={ref:C,...e},!r))return j}return E(!0),j};function ge(e,t){return[...e,...U(t)]}var he=e=>Array.isArray(e)?e.map((()=>{})):void 0;function pe(e,t,r){return[...e.slice(0,t),...U(r),...e.slice(t)]}var _e=(e,t,r)=>Array.isArray(e)?(f(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function ve(e,t){return[...U(t),...U(e)]}var be=(e,t)=>f(t)?[]:function(e,t){let r=0;const s=[...e];for(const e of t)s.splice(e-r,1),r++;return d(s).length?s:[]}(e,U(t).sort(((e,t)=>e-t))),Ae=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]};function xe(e){for(const t in e)if(!f(e[t]))return!1;return!0}function Ve(e,t){const r=H(t)?[t]:z(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let n;s&&delete s[a];for(let t=0;t<r.slice(0,-1).length;t++){let s,a=-1;const i=r.slice(0,-(t+1)),o=i.length-1;for(t>0&&(n=e);++a<i.length;){const t=i[a];s=s?s[t]:e[t],o===a&&(u(s)&&O(s)||Array.isArray(s)&&xe(s))&&(n?delete n[t]:delete e[t]),n=s}}return e}var Fe=(e,t,r)=>(e[t]=r,e);function Se(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var we=e=>i(e)||!o(e);function ke(e,t){if(we(e)||we(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ke(r,e):r!==e)return!1}}return!0}var De=e=>"select-multiple"===e.type,Ce=e=>se(e)&&e.isConnected,Ee=e=>{for(const t in e)if(re(e[t]))return!0;return!1};function je(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const r in e)Array.isArray(e[r])||u(e[r])&&!Ee(e[r])?(t[r]=Array.isArray(e[r])?[]:{},je(e[r],t[r])):i(e[r])||(t[r]=!0);return t}function Oe(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const s in e)Array.isArray(e[s])||u(e[s])&&!Ee(e[s])?f(t)||we(r[s])?r[s]=Array.isArray(e[s])?je(e[s],[]):{...je(e[s])}:Oe(e[s],i(t)?{}:t[s],r[s]):ke(e[s],t[s])?delete r[s]:r[s]=!0;return r}var Te=(e,t)=>Oe(e,t,je(t)),Ue=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:e?+e:e:r&&N(e)?new Date(e):s?s(e):e;function Be(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return te(t)?t.files:ne(t)?de(e.refs).value:De(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?le(e.refs).value:Ue(f(t.value)?e.ref.value:t.value,e)}var Le=e=>f(e)?e:ie(e)?e.source:u(e)?ie(e.value)?e.value.source:e.value:e;function Me(e,t,r){const s=m(e,r);if(s||H(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=m(t,s),i=m(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}const Ne={mode:v,reValidateMode:_,shouldFocusError:!0};function Re(e={},t){let r={...Ne,...e};const s=e.resetOptions&&e.resetOptions.keepDirtyValues;let o,h={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},p={},_=u(r.defaultValues)&&P(r.defaultValues)||{},v=r.shouldUnregister?{}:P(_),b={action:!1,mount:!1,watch:!1},x={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},S={watch:Se(),array:Se(),state:Se()},w=X(r.mode),k=X(r.reValidateMode),D=r.criteriaMode===A,C=async()=>{if(F.isValid){const e=r.resolver?O((await L()).errors):await M(p,!0);e!==h.isValid&&(h.isValid=e,S.state.next({isValid:e}))}},E=e=>F.isValidating&&S.state.next({isValidating:e}),j=(e,t,r,s)=>{const a=m(p,e);if(a){const n=m(v,e,f(r)?m(_,e):r);f(n)||s&&s.defaultChecked||t?G(v,e,t?n:Be(a._f)):I(e,n),b.mount&&C()}},T=(e,t,r,s,a)=>{let n=!1,i=!1;const o={name:e};if(!r||s){F.isDirty&&(i=h.isDirty,h.isDirty=o.isDirty=W(),n=i!==o.isDirty);const r=ke(m(_,e),t);i=m(h.dirtyFields,e),r?Ve(h.dirtyFields,e):G(h.dirtyFields,e,!0),o.dirtyFields=h.dirtyFields,n=n||F.dirtyFields&&i!==!r}if(r){const t=m(h.touchedFields,e);t||(G(h.touchedFields,e,r),o.touchedFields=h.touchedFields,n=n||F.touchedFields&&t!==r)}return n&&a&&S.state.next(o),n?o:{}},B=(t,r,s,a)=>{const n=m(h.errors,t),i=F.isValid&&ee(r)&&h.isValid!==r;var u;if(e.delayError&&s?(u=()=>((e,t)=>{G(h.errors,e,t),S.state.next({errors:h.errors})})(t,s),o=e=>{clearTimeout(V),V=window.setTimeout(u,e)},o(e.delayError)):(clearTimeout(V),o=null,s?G(h.errors,t,s):Ve(h.errors,t)),(s?!ke(n,s):n)||!O(a)||i){const e={...a,...i&&ee(r)?{isValid:r}:{},errors:h.errors,name:t};h={...h,...e},S.state.next(e)}E(!1)},L=async e=>await r.resolver(v,r.context,((e,t,r,s)=>{const a={};for(const r of e){const e=m(t,r);e&&G(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||x.mount,p,r.criteriaMode,r.shouldUseNativeValidation)),M=async(e,t,s={valid:!0})=>{for(const a in e){const n=e[a];if(n){const{_f:e,...a}=n;if(e){const a=x.array.has(e.name),i=await ye(n,m(v,e.name),D,r.shouldUseNativeValidation,a);if(i[e.name]&&(s.valid=!1,t))break;!t&&(m(i,e.name)?a?Z(h.errors,i,e.name):G(h.errors,e.name,i[e.name]):Ve(h.errors,e.name))}a&&await M(a,t,s)}}return s.valid},W=(e,t)=>(e&&t&&G(v,e,t),!ke(ae(),_)),$=(e,t,r)=>R(e,x,{...b.mount?v:f(t)?_:N(e)?{[e]:t}:t},r,t),I=(e,t,r={})=>{const s=m(p,e);let n=t;if(s){const r=s._f;r&&(!r.disabled&&G(v,e,Ue(t,r)),n=se(r.ref)&&i(t)?"":t,De(r.ref)?[...r.ref.options].forEach((e=>e.selected=n.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value))):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach((e=>e.checked=e.value===n)):te(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||S.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&T(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&Q(e)},H=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,o=m(p,i);!x.array.has(e)&&we(a)&&(!o||o._f)||n(a)?I(i,a,r):H(i,a,r)}},z=(e,r,s={})=>{const a=m(p,e),n=x.array.has(e),o=P(r);G(v,e,o),n?(S.array.next({name:e,values:v}),(F.isDirty||F.dirtyFields)&&s.shouldDirty&&(h.dirtyFields=Te(_,v),S.state.next({name:e,dirtyFields:h.dirtyFields,isDirty:W(e,o)}))):!a||a._f||i(o)?I(e,o,s):H(e,o,s),Y(e,x)&&S.state.next({}),S.watch.next({name:e}),!b.mount&&t()},K=async e=>{const t=e.target;let s=t.name;const a=m(p,s);if(a){let i,u;const c=t.type?Be(a._f):l(e),d=e.type===y||e.type===g,f=!((n=a._f).mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate)||r.resolver||m(h.errors,s)||a._f.deps)||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(d,m(h.touchedFields,s),h.isSubmitted,k,w),_=Y(s,x,d);G(v,s,c),d?(a._f.onBlur&&a._f.onBlur(e),o&&o(0)):a._f.onChange&&a._f.onChange(e);const b=T(s,c,d,!1),A=!O(b)||_;if(!d&&S.watch.next({name:s,type:e.type}),f)return F.isValid&&C(),A&&S.state.next({name:s,..._?{}:b});if(!d&&_&&S.state.next({}),E(!0),r.resolver){const{errors:e}=await L([s]),t=Me(h.errors,p,s),r=Me(e,p,t.name||s);i=r.error,s=r.name,u=O(e)}else i=(await ye(a,m(v,s),D,r.shouldUseNativeValidation))[s],i?u=!1:F.isValid&&(u=await M(p,!0));a._f.deps&&Q(a._f.deps),B(s,u,i,b)}var n},Q=async(e,t={})=>{let s,a;const n=U(e);if(E(!0),r.resolver){const t=await(async e=>{const{errors:t}=await L();if(e)for(const r of e){const e=m(t,r);e?G(h.errors,r,e):Ve(h.errors,r)}else h.errors=t;return t})(f(e)?e:n);s=O(t),a=e?!n.some((e=>m(t,e))):s}else e?(a=(await Promise.all(n.map((async e=>{const t=m(p,e);return await M(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||h.isValid)&&C()):a=s=await M(p);return S.state.next({...!N(e)||F.isValid&&s!==h.isValid?{}:{name:e},...r.resolver||!e?{isValid:s}:{},errors:h.errors,isValidating:!1}),t.shouldFocus&&!a&&J(p,(e=>e&&m(h.errors,e)),e?n:x.mount),a},ae=e=>{const t={..._,...b.mount?v:{}};return f(e)?t:N(e)?m(t,e):e.map((e=>m(t,e)))},ie=(e,t)=>({invalid:!!m((t||h).errors,e),isDirty:!!m((t||h).dirtyFields,e),isTouched:!!m((t||h).touchedFields,e),error:m((t||h).errors,e)}),oe=(e,t={})=>{for(const s of e?U(e):x.mount)x.mount.delete(s),x.array.delete(s),m(p,s)&&(t.keepValue||(Ve(p,s),Ve(v,s)),!t.keepError&&Ve(h.errors,s),!t.keepDirty&&Ve(h.dirtyFields,s),!t.keepTouched&&Ve(h.touchedFields,s),!r.shouldUnregister&&!t.keepDefaultValue&&Ve(_,s));S.watch.next({}),S.state.next({...h,...t.keepDirty?{isDirty:W()}:{}}),!t.keepIsValid&&C()},ue=(e,t={})=>{let s=m(p,e);const n=ee(t.disabled);return G(p,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),x.mount.add(e),s?n&&G(v,e,t.disabled?void 0:m(v,e,Be(s._f))):j(e,!0,t.value),{...n?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:Le(t.min),max:Le(t.max),minLength:Le(t.minLength),maxLength:Le(t.maxLength),pattern:Le(t.pattern)}:{},name:e,onChange:K,onBlur:K,ref:n=>{if(n){ue(e,t),s=m(p,e);const r=f(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,i=(e=>ne(e)||a(e))(r),o=s._f.refs||[];if(i?o.find((e=>e===r)):r===s._f.ref)return;G(p,e,{_f:{...s._f,...i?{refs:[...o.filter(Ce),r,...Array.isArray(m(_,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),j(e,!1,void 0,r)}else s=m(p,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(x.array,e)||!b.action)&&x.unMount.add(e)}}},le=()=>r.shouldFocusError&&J(p,(e=>e&&m(h.errors,e)),x.mount),ce=(r,a={})=>{const n=r||_,i=P(n),o=r&&!O(r)?i:_;if(a.keepDefaultValues||(_=n),!a.keepValues){if(a.keepDirtyValues||s)for(const e of x.mount)m(h.dirtyFields,e)?G(o,e,m(v,e)):z(e,m(o,e));else{if(q&&f(r))for(const e of x.mount){const t=m(p,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(se(e)){const t=e.closest("form");if(t){t.reset();break}}}}p={}}v=e.shouldUnregister?a.keepDefaultValues?P(_):{}:i,S.array.next({values:o}),S.watch.next({values:o})}x={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&t(),b.mount=!F.isValid||!!a.keepIsValid,b.watch=!!e.shouldUnregister,S.state.next({submitCount:a.keepSubmitCount?h.submitCount:0,isDirty:a.keepDirty||a.keepDirtyValues?h.isDirty:!(!a.keepDefaultValues||ke(r,_)),isSubmitted:!!a.keepIsSubmitted&&h.isSubmitted,dirtyFields:a.keepDirty||a.keepDirtyValues?h.dirtyFields:a.keepDefaultValues&&r?Te(_,r):{},touchedFields:a.keepTouched?h.touchedFields:{},errors:a.keepErrors?h.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},de=(e,t)=>ce(re(e)?e(v):e,t);return re(r.defaultValues)&&r.defaultValues().then((e=>{de(e,r.resetOptions),S.state.next({isLoading:!1})})),{control:{register:ue,unregister:oe,getFieldState:ie,_executeSchema:L,_focusError:le,_getWatch:$,_getDirty:W,_updateValid:C,_removeUnmounted:()=>{for(const e of x.unMount){const t=m(p,e);t&&(t._f.refs?t._f.refs.every((e=>!Ce(e))):!Ce(t._f.ref))&&oe(e)}x.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,n=!0)=>{if(s&&r){if(b.action=!0,n&&Array.isArray(m(p,e))){const t=r(m(p,e),s.argA,s.argB);a&&G(p,e,t)}if(n&&Array.isArray(m(h.errors,e))){const t=r(m(h.errors,e),s.argA,s.argB);a&&G(h.errors,e,t),((e,t)=>{!d(m(e,t)).length&&Ve(e,t)})(h.errors,e)}if(F.touchedFields&&n&&Array.isArray(m(h.touchedFields,e))){const t=r(m(h.touchedFields,e),s.argA,s.argB);a&&G(h.touchedFields,e,t)}F.dirtyFields&&(h.dirtyFields=Te(_,v)),S.state.next({name:e,isDirty:W(e,t),dirtyFields:h.dirtyFields,errors:h.errors,isValid:h.isValid})}else G(v,e,t)},_getFieldArray:t=>d(m(b.mount?v:_,t,e.shouldUnregister?m(_,t,[]):[])),_reset:ce,_subjects:S,_proxyFormState:F,get _fields(){return p},get _formValues(){return v},get _stateFlags(){return b},set _stateFlags(e){b=e},get _defaultValues(){return _},get _names(){return x},set _names(e){x=e},get _formState(){return h},set _formState(e){h=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:Q,register:ue,handleSubmit:(e,t)=>async s=>{s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let a=!0,n=P(v);S.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await L();h.errors=e,n=t}else await M(p);O(h.errors)?(S.state.next({errors:{},isSubmitting:!0}),await e(n,s)):(t&&await t({...h.errors},s),le())}catch(e){throw a=!1,e}finally{h.isSubmitted=!0,S.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(h.errors)&&a,submitCount:h.submitCount+1,errors:h.errors})}},watch:(e,t)=>re(e)?S.watch.subscribe({next:r=>e($(void 0,t),r)}):$(e,t,!0),setValue:z,getValues:ae,reset:de,resetField:(e,t={})=>{m(p,e)&&(f(t.defaultValue)?z(e,m(_,e)):(z(e,t.defaultValue),G(_,e,t.defaultValue)),t.keepTouched||Ve(h.touchedFields,e),t.keepDirty||(Ve(h.dirtyFields,e),h.isDirty=t.defaultValue?W(e,m(_,e)):W()),t.keepError||(Ve(h.errors,e),F.isValid&&C()),S.state.next({...h}))},clearErrors:e=>{e?U(e).forEach((e=>Ve(h.errors,e))):h.errors={},S.state.next({errors:h.errors})},unregister:oe,setError:(e,t,r)=>{const s=(m(p,e,{_f:{}})._f||{}).ref;G(h.errors,e,{...t,ref:s}),S.state.next({name:e,errors:h.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},setFocus:(e,t={})=>{const r=m(p,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ie}}e.Controller=e=>e.render($(e)),e.FormProvider=e=>{const{children:t,...r}=e;return s.default.createElement(C.Provider,{value:r},t)},e.appendErrors=I,e.get=m,e.set=G,e.useController=$,e.useFieldArray=function(e){const t=E(),{control:r=t.control,name:a,keyName:n="id",shouldUnregister:i}=e,[o,u]=s.default.useState(r._getFieldArray(a)),l=s.default.useRef(r._getFieldArray(a).map(K)),c=s.default.useRef(o),d=s.default.useRef(a),f=s.default.useRef(!1);d.current=a,c.current=o,r._names.array.add(a),e.rules&&r.register(a,e.rules),L({next:({values:e,name:t})=>{if(t===d.current||!t){const t=m(e,d.current);Array.isArray(t)&&(u(t),l.current=t.map(K))}},subject:r._subjects.array});const y=s.default.useCallback((e=>{f.current=!0,r._updateFieldArray(a,e)}),[r,a]);return s.default.useEffect((()=>{if(r._stateFlags.action=!1,Y(a,r._names)&&r._subjects.state.next({}),f.current&&(!X(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([a]).then((e=>{const t=m(e.errors,a),s=m(r._formState.errors,a);(s?!t&&s.type:t&&t.type)&&(t?G(r._formState.errors,a,t):Ve(r._formState.errors,a),r._subjects.state.next({errors:r._formState.errors}))}));else{const e=m(r._fields,a);e&&e._f&&ye(e,m(r._formValues,a),r._options.criteriaMode===A,r._options.shouldUseNativeValidation,!0).then((e=>!O(e)&&r._subjects.state.next({errors:Z(r._formState.errors,e,a)})))}r._subjects.watch.next({name:a,values:r._formValues}),r._names.focus&&J(r._fields,(e=>!!e&&e.startsWith(r._names.focus||""))),r._names.focus="",r._proxyFormState.isValid&&r._updateValid()}),[o,a,r]),s.default.useEffect((()=>(!m(r._formValues,a)&&r._updateFieldArray(a),()=>{(r._options.shouldUnregister||i)&&r.unregister(a)})),[a,r,n,i]),{swap:s.default.useCallback(((e,t)=>{const s=r._getFieldArray(a);Ae(s,e,t),Ae(l.current,e,t),y(s),u(s),r._updateFieldArray(a,s,Ae,{argA:e,argB:t},!1)}),[y,a,r]),move:s.default.useCallback(((e,t)=>{const s=r._getFieldArray(a);_e(s,e,t),_e(l.current,e,t),y(s),u(s),r._updateFieldArray(a,s,_e,{argA:e,argB:t},!1)}),[y,a,r]),prepend:s.default.useCallback(((e,t)=>{const s=U(P(e)),n=ve(r._getFieldArray(a),s);r._names.focus=Q(a,0,t),l.current=ve(l.current,s.map(K)),y(n),u(n),r._updateFieldArray(a,n,ve,{argA:he(e)})}),[y,a,r]),append:s.default.useCallback(((e,t)=>{const s=U(P(e)),n=ge(r._getFieldArray(a),s);r._names.focus=Q(a,n.length-1,t),l.current=ge(l.current,s.map(K)),y(n),u(n),r._updateFieldArray(a,n,ge,{argA:he(e)})}),[y,a,r]),remove:s.default.useCallback((e=>{const t=be(r._getFieldArray(a),e);l.current=be(l.current,e),y(t),u(t),r._updateFieldArray(a,t,be,{argA:e})}),[y,a,r]),insert:s.default.useCallback(((e,t,s)=>{const n=U(P(t)),i=pe(r._getFieldArray(a),e,n);r._names.focus=Q(a,e,s),l.current=pe(l.current,e,n.map(K)),y(i),u(i),r._updateFieldArray(a,i,pe,{argA:e,argB:he(t)})}),[y,a,r]),update:s.default.useCallback(((e,t)=>{const s=P(t),n=Fe(r._getFieldArray(a),e,s);l.current=[...n].map(((t,r)=>t&&r!==e?l.current[r]:K())),y(n),u([...n]),r._updateFieldArray(a,n,Fe,{argA:e,argB:s},!0,!1)}),[y,a,r]),replace:s.default.useCallback((e=>{const t=U(P(e));l.current=t.map(K),y([...t]),u([...t]),r._updateFieldArray(a,[...t],(e=>e),{},!0,!1)}),[y,a,r]),fields:s.default.useMemo((()=>o.map(((e,t)=>({...e,[n]:l.current[t]||K()})))),[o,n])}},e.useForm=function(e={}){const t=s.default.useRef(),[r,a]=s.default.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:re(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Re(e,(()=>a((e=>({...e}))))),formState:r});const n=t.current.control;return n._options=e,L({subject:n._subjects.state,next:e=>{T(e,n._proxyFormState,!0)&&(n._formState={...n._formState,...e},a({...n._formState}))}}),s.default.useEffect((()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()})),s.default.useEffect((()=>{e.values&&!ke(e.values,n._defaultValues)&&n._reset(e.values,n._options.resetOptions)}),[e.values,n]),s.default.useEffect((()=>{r.submitCount&&n._focusError()}),[n,r.submitCount]),t.current.formState=j(r,n),t.current},e.useFormContext=E,e.useFormState=M,e.useWatch=W,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map