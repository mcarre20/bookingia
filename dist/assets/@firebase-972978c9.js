import{_ as Cr}from"./tslib-6635c9de.js";import{o as Rh}from"./idb-81bdbf9b.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Nh=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(t[l],t[h],t[d],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Nh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new Dh;const d=r<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oh=function(n){const e=cc(n);return uc.encodeByteArray(e,!0)},As=function(n){return Oh(n).replace(/\./g,"")},lc=function(n){try{return uc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=()=>Ph().__FIREBASE_DEFAULTS__,Mh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&lc(n[1]);return e&&JSON.parse(e)},kr=()=>{try{return Lh()||Mh()||xh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hc=n=>{var e,t;return(t=(e=kr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},dc=n=>{const e=hc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},fc=()=>{var n;return(n=kr())===null||n===void 0?void 0:n.config},pc=n=>{var e;return(e=kr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[As(JSON.stringify(t)),As(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function Vh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $h(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bh(){const n=ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jh(){try{return typeof indexedDB=="object"}catch{return!1}}function qh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="FirebaseError";class Ne extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Hh,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vn.prototype.create)}}class Vn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?zh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ne(i,a,s)}}function zh(n,e){return n.replace(Kh,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Kh=/\{\$([^}]+)}/g;function Gh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Fo(r)&&Fo(o)){if(!Cs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Fo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function an(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function cn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wh(n,e){const t=new Qh(n,e);return t.subscribe.bind(t)}class Qh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Yh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Ri),i.error===void 0&&(i.error=Ri),i.complete===void 0&&(i.complete=Ri);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ri(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n){return n&&n._delegate?n._delegate:n}class Ye{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Uh;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zh(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rt){return this.instances.has(e)}getOptions(e=rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=rt){return this.component?this.component.multipleInstances?e:rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jh(n){return n===rt?void 0:n}function Zh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const td={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},nd=N.INFO,sd={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},id=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=sd[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class br{constructor(e){this.name=e,this._logLevel=nd,this._logHandler=id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?td[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(od(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function od(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wi="@firebase/app",Vo="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new br("@firebase/app"),ad="@firebase/app-compat",cd="@firebase/analytics-compat",ud="@firebase/analytics",ld="@firebase/app-check-compat",hd="@firebase/app-check",dd="@firebase/auth",fd="@firebase/auth-compat",pd="@firebase/database",gd="@firebase/database-compat",md="@firebase/functions",yd="@firebase/functions-compat",vd="@firebase/installations",wd="@firebase/installations-compat",_d="@firebase/messaging",Ed="@firebase/messaging-compat",Id="@firebase/performance",Td="@firebase/performance-compat",Sd="@firebase/remote-config",Ad="@firebase/remote-config-compat",Cd="@firebase/storage",kd="@firebase/storage-compat",bd="@firebase/firestore",Rd="@firebase/firestore-compat",Nd="firebase",Dd="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]",Od={[Wi]:"fire-core",[ad]:"fire-core-compat",[ud]:"fire-analytics",[cd]:"fire-analytics-compat",[hd]:"fire-app-check",[ld]:"fire-app-check-compat",[dd]:"fire-auth",[fd]:"fire-auth-compat",[pd]:"fire-rtdb",[gd]:"fire-rtdb-compat",[md]:"fire-fn",[yd]:"fire-fn-compat",[vd]:"fire-iid",[wd]:"fire-iid-compat",[_d]:"fire-fcm",[Ed]:"fire-fcm-compat",[Id]:"fire-perf",[Td]:"fire-perf-compat",[Sd]:"fire-rc",[Ad]:"fire-rc-compat",[Cd]:"fire-gcs",[kd]:"fire-gcs-compat",[bd]:"fire-fst",[Rd]:"fire-fst-compat","fire-js":"fire-js",[Nd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Map,Yi=new Map;function Pd(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ft(n){const e=n.name;if(Yi.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;Yi.set(e,n);for(const t of ks.values())Pd(t,n);return!0}function Ws(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},We=new Vn("app","Firebase",Ld);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=Dd;function xd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw We.create("bad-app-name",{appName:String(i)});if(t||(t=fc()),!t)throw We.create("no-options");const r=ks.get(i);if(r){if(Cs(t,r.options)&&Cs(s,r.config))return r;throw We.create("duplicate-app",{appName:i})}const o=new ed(i);for(const c of Yi.values())o.addComponent(c);const a=new Md(t,s,o);return ks.set(i,a),a}function Rr(n=Qi){const e=ks.get(n);if(!e&&n===Qi&&fc())return xd();if(!e)throw We.create("no-app",{appName:n});return e}function Le(n,e,t){var s;let i=(s=Od[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}ft(new Ye(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="firebase-heartbeat-database",Fd=1,_n="firebase-heartbeat-store";let Ni=null;function mc(){return Ni||(Ni=Rh(Ud,Fd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_n)}}}).catch(n=>{throw We.create("idb-open",{originalErrorMessage:n.message})})),Ni}async function Vd(n){try{return await(await mc()).transaction(_n).objectStore(_n).get(yc(n))}catch(e){if(e instanceof Ne)dt.warn(e.message);else{const t=We.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function $o(n,e){try{const s=(await mc()).transaction(_n,"readwrite");await s.objectStore(_n).put(e,yc(n)),await s.done}catch(t){if(t instanceof Ne)dt.warn(t.message);else{const s=We.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(s.message)}}}function yc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=1024,Bd=30*24*60*60*1e3;class jd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hd(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Bd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bo(),{heartbeatsToSend:t,unsentEntries:s}=qd(this._heartbeatsCache.heartbeats),i=As(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bo(){return new Date().toISOString().substring(0,10)}function qd(n,e=$d){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),jo(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),jo(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Hd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jh()?qh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jo(n){return As(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n){ft(new Ye("platform-logger",e=>new rd(e),"PRIVATE")),ft(new Ye("heartbeat",e=>new jd(e),"PRIVATE")),Le(Wi,Vo,n),Le(Wi,Vo,"esm2017"),Le("fire-js","")}zd("");function vc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kd=vc,wc=new Vn("auth","Firebase",vc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new br("@firebase/auth");function Gd(n,...e){bs.logLevel<=N.WARN&&bs.warn(`Auth (${_t}): ${n}`,...e)}function ys(n,...e){bs.logLevel<=N.ERROR&&bs.error(`Auth (${_t}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,...e){throw Nr(n,...e)}function Ce(n,...e){return Nr(n,...e)}function Wd(n,e,t){const s=Object.assign(Object.assign({},Kd()),{[e]:t});return new Vn("auth","Firebase",s).create(e,{appName:n.name})}function Nr(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return wc.create(n,...e)}function T(n,e,...t){if(!n)throw Nr(e,...t)}function De(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ys(e),new Error(e)}function Ue(n,e){n||De(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Qd(){return qo()==="http:"||qo()==="https:"}function qo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qd()||Vh()||"connection"in navigator)?navigator.onLine:!0}function Xd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ue(t>e,"Short delay should be less than long delay!"),this.isMobile=Fh()||$h()}get(){return Yd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n,e){Ue(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;De("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;De("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;De("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new Bn(3e4,6e4);function Kt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Gt(n,e,t,s,i={}){return Ec(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=$n(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),_c.fetch()(Ic(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Ec(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Jd),e);try{const i=new ef(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw rs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rs(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rs(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw rs(n,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wd(n,l,u);_e(n,l)}}catch(i){if(i instanceof Ne)throw i;_e(n,"network-request-failed",{message:String(i)})}}async function jn(n,e,t,s,i={}){const r=await Gt(n,e,t,s,i);return"mfaPendingCredential"in r&&_e(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ic(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Dr(n.config,i):`${n.config.apiScheme}://${i}`}class ef{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ce(this.auth,"network-request-failed")),Zd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rs(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ce(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(n,e){return Gt(n,"POST","/v1/accounts:delete",e)}async function nf(n,e){return Gt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sf(n,e=!1){const t=z(n),s=await t.getIdToken(e),i=Or(s);T(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:pn(Di(i.auth_time)),issuedAtTime:pn(Di(i.iat)),expirationTime:pn(Di(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Di(n){return Number(n)*1e3}function Or(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=lc(t);return i?JSON.parse(i):(ys("Failed to decode base64 JWT payload"),null)}catch(i){return ys("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rf(n){const e=Or(n);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ne&&of(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function of({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(n){var e;const t=n.auth,s=await n.getIdToken(),i=await En(n,nf(t,{idToken:s}));T(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?lf(r.providerUserInfo):[],a=uf(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Tc(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function cf(n){const e=z(n);await Rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uf(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function lf(n){return n.map(e=>{var{providerId:t}=e,s=Cr(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(n,e){const t=await Ec(n,{},async()=>{const s=$n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Ic(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_c.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await hf(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new In;return s&&(T(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(T(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return De("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,e){T(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ut{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Cr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new af(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Tc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await En(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sf(this,e)}reload(){return cf(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Rs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await En(this,tf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,u,l;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=t.createdAt)!==null&&u!==void 0?u:void 0,V=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:L,emailVerified:M,isAnonymous:me,providerData:ve,stsTokenManager:st}=t;T(L&&st,e,"internal-error");const it=In.fromJSON(this.name,st);T(typeof L=="string",e,"internal-error"),je(h,e.name),je(d,e.name),T(typeof M=="boolean",e,"internal-error"),T(typeof me=="boolean",e,"internal-error"),je(p,e.name),je(y,e.name),je(I,e.name),je(w,e.name),je(P,e.name),je(V,e.name);const At=new ut({uid:L,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:me,photoURL:y,phoneNumber:p,tenantId:I,stsTokenManager:it,createdAt:P,lastLoginAt:V});return ve&&Array.isArray(ve)&&(At.providerData=ve.map(bh=>Object.assign({},bh))),w&&(At._redirectEventId=w),At}static async _fromIdTokenResponse(e,t,s=!1){const i=new In;i.updateFromServerResponse(t);const r=new ut({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Rs(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Map;function Oe(n){Ue(n instanceof Function,"Expected a class definition");let e=Ho.get(n);return e?(Ue(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ho.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sc.type="NONE";const zo=Sc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n,e,t){return`firebase:${n}:${e}:${t}`}class Dt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=vs(this.userKey,i.apiKey,r),this.fullPersistenceKey=vs("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Dt(Oe(zo),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Oe(zo);const o=vs(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=ut._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Dt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Dt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ac(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rc(e))return"Blackberry";if(Nc(e))return"Webos";if(Pr(e))return"Safari";if((e.includes("chrome/")||Cc(e))&&!e.includes("edge/"))return"Chrome";if(bc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ac(n=ce()){return/firefox\//i.test(n)}function Pr(n=ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cc(n=ce()){return/crios\//i.test(n)}function kc(n=ce()){return/iemobile/i.test(n)}function bc(n=ce()){return/android/i.test(n)}function Rc(n=ce()){return/blackberry/i.test(n)}function Nc(n=ce()){return/webos/i.test(n)}function Qs(n=ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function df(n=ce()){var e;return Qs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ff(){return Bh()&&document.documentMode===10}function Dc(n=ce()){return Qs(n)||bc(n)||Nc(n)||Rc(n)||/windows phone/i.test(n)||kc(n)}function pf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n,e=[]){let t;switch(n){case"Browser":t=Ko(ce());break;case"Worker":t=`${Ko(ce())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_t}/${s}`}async function Pc(n,e){return Gt(n,"GET","/v2/recaptchaConfig",Kt(n,e))}function Go(n){return n!==void 0&&n.enterprise!==void 0}class Lc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Mc(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Ce("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",gf().appendChild(s)})}function mf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const yf="https://www.google.com/recaptcha/enterprise.js?render=",vf="recaptcha-enterprise",wf="NO_RECAPTCHA";class xc{constructor(e){this.type=vf,this.auth=Wt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Pc(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Lc(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Go(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(wf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&Go(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Mc(yf+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ns(n,e,t,s=!1){const i=new xc(n);let r;try{r=await i.verify(t)}catch{r=await i.verify(t,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wo(this),this.idTokenSubscription=new Wo(this),this.beforeStateQueue=new _f(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Oe(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Dt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?z(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}async initializeRecaptchaConfig(){const e=await Pc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Lc(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new xc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Oe(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await Dt.create(this,[Oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Gd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Wt(n){return z(n)}class Wo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wh(t=>this.observer=t)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(n,e){const t=Ws(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Cs(r,e??{}))return i;_e(i,"already-initialized")}return t.initialize({options:e})}function Tf(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Oe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Sf(n,e,t){const s=Wt(n);T(s._canInitEmulator,s,"emulator-config-failed"),T(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=Uc(e),{host:o,port:a}=Af(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Cf()}function Uc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Af(n){const e=Uc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Qo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Qo(o)}}}function Qo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Cf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return De("not implemented")}_getIdTokenResponse(e){return De("not implemented")}_linkToIdToken(e,t){return De("not implemented")}_getReauthenticationResolver(e){return De("not implemented")}}async function kf(n,e){return Gt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(n,e){return jn(n,"POST","/v1/accounts:signInWithPassword",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(n,e){return jn(n,"POST","/v1/accounts:signInWithEmailLink",Kt(n,e))}async function Rf(n,e){return jn(n,"POST","/v1/accounts:signInWithEmailLink",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Lr{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Tn(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Tn(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Ns(e,s,"signInWithPassword");return Oi(e,i)}else return Oi(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Ns(e,s,"signInWithPassword");return Oi(e,r)}else return Promise.reject(i)});case"emailLink":return bf(e,{email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return kf(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rf(e,{idToken:t,email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(n,e){return jn(n,"POST","/v1/accounts:signInWithIdp",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="http://localhost";class pt extends Lr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Cr(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new pt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ot(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ot(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ot(e,t)}buildRequest(){const e={requestUri:Nf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$n(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Of(n){const e=an(cn(n)).link,t=e?an(cn(e)).deep_link_id:null,s=an(cn(n)).deep_link_id;return(s?an(cn(s)).link:null)||s||t||e||n}class Mr{constructor(e){var t,s,i,r,o,a;const c=an(cn(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Df((i=c.mode)!==null&&i!==void 0?i:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Of(e);try{return new Mr(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.providerId=Qt.PROVIDER_ID}static credential(e,t){return Tn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Mr.parseLink(t);return T(s,"argument-error"),Tn._fromEmailAndCode(e,s.code,s.tenantId)}}Qt.PROVIDER_ID="password";Qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends qn{constructor(){super("facebook.com")}static credential(e){return pt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.FACEBOOK_SIGN_IN_METHOD="facebook.com";qe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends qn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return He.credential(t,s)}catch{return null}}}He.GOOGLE_SIGN_IN_METHOD="google.com";He.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends qn{constructor(){super("github.com")}static credential(e){return pt._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends qn{constructor(){super("twitter.com")}static credential(e,t){return pt._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ke.credential(t,s)}catch{return null}}}Ke.TWITTER_SIGN_IN_METHOD="twitter.com";Ke.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(n,e){return jn(n,"POST","/v1/accounts:signUp",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await ut._fromIdTokenResponse(e,s,i),o=Yo(s);return new gt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Yo(s);return new gt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Yo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Ne{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ds.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Ds(e,t,s,i)}}function Vc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ds._fromErrorAndOperation(n,r,e,s):r})}async function Pf(n,e,t=!1){const s=await En(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gt._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await En(n,Vc(s,i,e,n),t);T(r.idToken,s,"internal-error");const o=Or(r.idToken);T(o,s,"internal-error");const{sub:a}=o;return T(n.uid===a,s,"user-mismatch"),gt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_e(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(n,e,t=!1){const s="signIn",i=await Vc(n,s,e),r=await gt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function Mf(n,e){return $c(Wt(n),e)}async function e_(n,e,t){var s;const i=Wt(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const u=await Ns(i,r,"signUpPassword");o=Pi(i,u)}else o=Pi(i,r).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Ns(i,r,"signUpPassword");return Pi(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await gt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function t_(n,e,t){return Mf(z(n),Qt.credential(e,t))}function xf(n,e,t,s){return z(n).onIdTokenChanged(e,t,s)}function Uf(n,e,t){return z(n).beforeAuthStateChanged(e,t)}function n_(n){return z(n).signOut()}const Os="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(){const n=ce();return Pr(n)||Qs(n)}const Vf=1e3,$f=10;class jc extends Bc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ff()&&pf(),this.fallbackToPolling=Dc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);ff()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$f):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Vf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jc.type="LOCAL";const Bf=jc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends Bc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qc.type="SESSION";const Hc=qc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Ys(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,r)),c=await jf(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=xr("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return window}function Hf(n){ke().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){return typeof ke().WorkerGlobalScope<"u"&&typeof ke().importScripts=="function"}async function zf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gf(){return zc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="firebaseLocalStorageDb",Wf=1,Ps="firebaseLocalStorage",Gc="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xs(n,e){return n.transaction([Ps],e?"readwrite":"readonly").objectStore(Ps)}function Qf(){const n=indexedDB.deleteDatabase(Kc);return new Hn(n).toPromise()}function Ji(){const n=indexedDB.open(Kc,Wf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ps,{keyPath:Gc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ps)?e(s):(s.close(),await Qf(),e(await Ji()))})})}async function Xo(n,e,t){const s=Xs(n,!0).put({[Gc]:e,value:t});return new Hn(s).toPromise()}async function Yf(n,e){const t=Xs(n,!1).get(e),s=await new Hn(t).toPromise();return s===void 0?null:s.value}function Jo(n,e){const t=Xs(n,!0).delete(e);return new Hn(t).toPromise()}const Xf=800,Jf=3;class Wc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ji(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Jf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(Gf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zf(),!this.activeServiceWorker)return;this.sender=new qf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ji();return await Xo(e,Os,"1"),await Jo(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xo(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Yf(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Xs(i,!1).getAll();return new Hn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wc.type="LOCAL";const Zf=Wc;new Bn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n,e){return e?Oe(e):(T(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Lr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tp(n){return $c(n.auth,new Ur(n),n.bypassAuthState)}function np(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Lf(t,new Ur(n),n.bypassAuthState)}async function sp(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Pf(t,new Ur(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tp;case"linkViaPopup":case"linkViaRedirect":return sp;case"reauthViaPopup":case"reauthViaRedirect":return np;default:_e(this.auth,"internal-error")}}resolve(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Bn(2e3,1e4);class Rt extends Qc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Rt.currentPopupAction&&Rt.currentPopupAction.cancel(),Rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){Ue(this.filter.length===1,"Popup operations only handle one event");const e=xr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ip.get())};e()}}Rt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="pendingRedirect",ws=new Map;class op extends Qc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ws.get(this.auth._key());if(!e){try{const s=await ap(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ws.set(this.auth._key(),e)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ap(n,e){const t=lp(e),s=up(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function cp(n,e){ws.set(n._key(),e)}function up(n){return Oe(n._redirectPersistence)}function lp(n){return vs(rp,n.config.apiKey,n.name)}async function hp(n,e,t=!1){const s=Wt(n),i=ep(s,e),o=await new op(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=10*60*1e3;class fp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Yc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ce(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zo(e))}saveEventToCache(e){this.cachedEventUids.add(Zo(e)),this.lastProcessedEventTime=Date.now()}}function Zo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gp(n,e={}){return Gt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yp=/^https?/;async function vp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gp(n);for(const t of e)try{if(wp(t))return}catch{}_e(n,"unauthorized-domain")}function wp(n){const e=Xi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!yp.test(t))return!1;if(mp.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new Bn(3e4,6e4);function ea(){const n=ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ep(n){return new Promise((e,t)=>{var s,i,r;function o(){ea(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ea(),t(Ce(n,"network-request-failed"))},timeout:_p.get()})}if(!((i=(s=ke().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ke().gapi)===null||r===void 0)&&r.load)o();else{const a=mf("iframefcb");return ke()[a]=()=>{gapi.load?o():t(Ce(n,"network-request-failed"))},Mc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw _s=null,e})}let _s=null;function Ip(n){return _s=_s||Ep(n),_s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new Bn(5e3,15e3),Sp="__/auth/iframe",Ap="emulator/auth/iframe",Cp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bp(n){const e=n.config;T(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Dr(e,Ap):`https://${n.config.authDomain}/${Sp}`,s={apiKey:e.apiKey,appName:n.name,v:_t},i=kp.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${$n(s).slice(1)}`}async function Rp(n){const e=await Ip(n),t=ke().gapi;return T(t,n,"internal-error"),e.open({where:document.body,url:bp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cp,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ce(n,"network-request-failed"),a=ke().setTimeout(()=>{r(o)},Tp.get());function c(){ke().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dp=500,Op=600,Pp="_blank",Lp="http://localhost";class ta{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mp(n,e,t,s=Dp,i=Op){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Np),{width:s.toString(),height:i.toString(),top:r,left:o}),u=ce().toLowerCase();t&&(a=Cc(u)?Pp:t),Ac(u)&&(e=e||Lp,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(df(u)&&a!=="_self")return xp(e||"",a),new ta(null);const h=window.open(e||"",a,l);T(h,n,"popup-blocked");try{h.focus()}catch{}return new ta(h)}function xp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="__/auth/handler",Fp="emulator/auth/handler",Vp=encodeURIComponent("fac");async function na(n,e,t,s,i,r){T(n.config.authDomain,n,"auth-domain-config-required"),T(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:_t,eventId:i};if(e instanceof Fc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Gh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(r||{}))o[l]=h}if(e instanceof qn){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${Vp}=${encodeURIComponent(c)}`:"";return`${$p(n)}?${$n(a).slice(1)}${u}`}function $p({config:n}){return n.emulator?Dr(n,Fp):`https://${n.authDomain}/${Up}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="webStorageSupport";class Bp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hc,this._completeRedirectFn=hp,this._overrideRedirectResult=cp}async _openPopup(e,t,s,i){var r;Ue((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await na(e,t,s,Xi(),i);return Mp(e,o,xr())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await na(e,t,s,Xi(),i);return Hf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Ue(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Rp(e),s=new fp(e);return t.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Li,{type:Li},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Li];o!==void 0&&t(!!o),_e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Dc()||Pr()||Qs()}}const jp=Bp;var sa="@firebase/auth",ia="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zp(n){ft(new Ye("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oc(n)},u=new Ef(s,i,r,c);return Tf(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ft(new Ye("auth-internal",e=>{const t=Wt(e.getProvider("auth").getImmediate());return(s=>new qp(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(sa,ia,Hp(n)),Le(sa,ia,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=5*60,Gp=pc("authIdTokenMaxAge")||Kp;let ra=null;const Wp=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Gp)return;const i=t==null?void 0:t.token;ra!==i&&(ra=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function s_(n=Rr()){const e=Ws(n,"auth");if(e.isInitialized())return e.getImmediate();const t=If(n,{popupRedirectResolver:jp,persistence:[Zf,Bf,Hc]}),s=pc("authTokenSyncURL");if(s){const r=Wp(s);Uf(t,r,()=>r(t.currentUser)),xf(t,o=>r(o))}const i=hc("auth");return i&&Sf(t,`http://${i}`),t}zp("Browser");var Qp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Fr=Fr||{},A=Qp||self;function Js(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function zn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Yp(n){return Object.prototype.hasOwnProperty.call(n,Mi)&&n[Mi]||(n[Mi]=++Xp)}var Mi="closure_uid_"+(1e9*Math.random()>>>0),Xp=0;function Jp(n,e,t){return n.call.apply(n.bind,arguments)}function Zp(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function re(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?re=Jp:re=Zp,re.apply(null,arguments)}function os(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function Y(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function et(){this.s=this.s,this.o=this.o}var eg=0;et.prototype.s=!1;et.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),eg!=0)&&Yp(this)};et.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xc=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Vr(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function oa(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Js(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function oe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var tg=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",()=>{},e),A.removeEventListener("test",()=>{},e)}catch{}return n}();function Sn(n){return/^[\s\xa0]*$/.test(n)}function Zs(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function Te(n){return Zs().indexOf(n)!=-1}function $r(n){return $r[" "](n),n}$r[" "]=function(){};function ng(n,e){var t=Wg;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var sg=Te("Opera"),Ut=Te("Trident")||Te("MSIE"),Jc=Te("Edge"),Zi=Jc||Ut,Zc=Te("Gecko")&&!(Zs().toLowerCase().indexOf("webkit")!=-1&&!Te("Edge"))&&!(Te("Trident")||Te("MSIE"))&&!Te("Edge"),ig=Zs().toLowerCase().indexOf("webkit")!=-1&&!Te("Edge");function eu(){var n=A.document;return n?n.documentMode:void 0}var er;e:{var xi="",Ui=function(){var n=Zs();if(Zc)return/rv:([^\);]+)(\)|;)/.exec(n);if(Jc)return/Edge\/([\d\.]+)/.exec(n);if(Ut)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ig)return/WebKit\/(\S+)/.exec(n);if(sg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ui&&(xi=Ui?Ui[1]:""),Ut){var Fi=eu();if(Fi!=null&&Fi>parseFloat(xi)){er=String(Fi);break e}}er=xi}var tr;if(A.document&&Ut){var aa=eu();tr=aa||parseInt(er,10)||void 0}else tr=void 0;var rg=tr;function An(n,e){if(oe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Zc){e:{try{$r(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:og[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&An.$.h.call(this)}}Y(An,oe);var og={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Kn="closure_listenable_"+(1e6*Math.random()|0),ag=0;function cg(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.la=i,this.key=++ag,this.fa=this.ia=!1}function ei(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Br(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function ug(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function tu(n){const e={};for(const t in n)e[t]=n[t];return e}const ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nu(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<ca.length;r++)t=ca[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function ti(n){this.src=n,this.g={},this.h=0}ti.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=sr(n,e,s,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new cg(e,this.src,r,!!s,i),e.ia=t,n.push(e)),e};function nr(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=Xc(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ei(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function sr(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==s)return i}return-1}var jr="closure_lm_"+(1e6*Math.random()|0),Vi={};function su(n,e,t,s,i){if(s&&s.once)return ru(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)su(n,e[r],t,s,i);return null}return t=zr(t),n&&n[Kn]?n.O(e,t,zn(s)?!!s.capture:!!s,i):iu(n,e,t,!1,s,i)}function iu(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=zn(i)?!!i.capture:!!i,a=Hr(n);if(a||(n[jr]=a=new ti(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=lg(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)tg||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(au(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function lg(){function n(t){return e.call(n.src,n.listener,t)}const e=hg;return n}function ru(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ru(n,e[r],t,s,i);return null}return t=zr(t),n&&n[Kn]?n.P(e,t,zn(s)?!!s.capture:!!s,i):iu(n,e,t,!0,s,i)}function ou(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ou(n,e[r],t,s,i);else s=zn(s)?!!s.capture:!!s,t=zr(t),n&&n[Kn]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=sr(r,t,s,i),-1<t&&(ei(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=Hr(n))&&(e=n.g[e.toString()],n=-1,e&&(n=sr(e,t,s,i)),(t=-1<n?e[n]:null)&&qr(t))}function qr(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Kn])nr(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(au(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=Hr(e))?(nr(t,n),t.h==0&&(t.src=null,e[jr]=null)):ei(n)}}}function au(n){return n in Vi?Vi[n]:Vi[n]="on"+n}function hg(n,e){if(n.fa)n=!0;else{e=new An(e,this);var t=n.listener,s=n.la||n.src;n.ia&&qr(n),n=t.call(s,e)}return n}function Hr(n){return n=n[jr],n instanceof ti?n:null}var $i="__closure_events_fn_"+(1e9*Math.random()>>>0);function zr(n){return typeof n=="function"?n:(n[$i]||(n[$i]=function(e){return n.handleEvent(e)}),n[$i])}function W(){et.call(this),this.i=new ti(this),this.S=this,this.J=null}Y(W,et);W.prototype[Kn]=!0;W.prototype.removeEventListener=function(n,e,t,s){ou(this,n,e,t,s)};function ee(n,e){var t,s=n.J;if(s)for(t=[];s;s=s.J)t.push(s);if(n=n.S,s=e.type||e,typeof e=="string")e=new oe(e,n);else if(e instanceof oe)e.target=e.target||n;else{var i=e;e=new oe(s,n),nu(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=as(o,s,!0,e)&&i}if(o=e.g=n,i=as(o,s,!0,e)&&i,i=as(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=as(o,s,!1,e)&&i}W.prototype.N=function(){if(W.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)ei(t[s]);delete n.g[e],n.h--}}this.J=null};W.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};W.prototype.P=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function as(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&nr(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Kr=A.JSON.stringify;class dg{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function fg(){var n=Gr;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class pg{constructor(){this.h=this.g=null}add(e,t){const s=cu.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var cu=new dg(()=>new gg,n=>n.reset());class gg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function mg(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function yg(n){A.setTimeout(()=>{throw n},0)}let Cn,kn=!1,Gr=new pg,uu=()=>{const n=A.Promise.resolve(void 0);Cn=()=>{n.then(vg)}};var vg=()=>{for(var n;n=fg();){try{n.h.call(n.g)}catch(t){yg(t)}var e=cu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}kn=!1};function ni(n,e){W.call(this),this.h=n||1,this.g=e||A,this.j=re(this.qb,this),this.l=Date.now()}Y(ni,W);m=ni.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ee(this,"tick"),this.ga&&(Wr(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wr(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}m.N=function(){ni.$.N.call(this),Wr(this),delete this.g};function Qr(n,e,t){if(typeof n=="function")t&&(n=re(n,t));else if(n&&typeof n.handleEvent=="function")n=re(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function lu(n){n.g=Qr(()=>{n.g=null,n.i&&(n.i=!1,lu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class wg extends et{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lu(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(n){et.call(this),this.h=n,this.g={}}Y(bn,et);var ua=[];function hu(n,e,t,s){Array.isArray(t)||(t&&(ua[0]=t.toString()),t=ua);for(var i=0;i<t.length;i++){var r=su(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function du(n){Br(n.g,function(e,t){this.g.hasOwnProperty(t)&&qr(e)},n),n.g={}}bn.prototype.N=function(){bn.$.N.call(this),du(this)};bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function si(){this.g=!0}si.prototype.Ea=function(){this.g=!1};function _g(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Eg(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function Nt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Tg(n,t)+(s?" "+s:"")})}function Ig(n,e){n.info(function(){return"TIMEOUT: "+e})}si.prototype.info=function(){};function Tg(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kr(t)}catch{return e}}var Et={},la=null;function ii(){return la=la||new W}Et.Ta="serverreachability";function fu(n){oe.call(this,Et.Ta,n)}Y(fu,oe);function Rn(n){const e=ii();ee(e,new fu(e))}Et.STAT_EVENT="statevent";function pu(n,e){oe.call(this,Et.STAT_EVENT,n),this.stat=e}Y(pu,oe);function he(n){const e=ii();ee(e,new pu(e,n))}Et.Ua="timingevent";function gu(n,e){oe.call(this,Et.Ua,n),this.size=e}Y(gu,oe);function Gn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var ri={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Yr(){}Yr.prototype.h=null;function ha(n){return n.h||(n.h=n.i())}function yu(){}var Wn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xr(){oe.call(this,"d")}Y(Xr,oe);function Jr(){oe.call(this,"c")}Y(Jr,oe);var ir;function oi(){}Y(oi,Yr);oi.prototype.g=function(){return new XMLHttpRequest};oi.prototype.i=function(){return{}};ir=new oi;function Qn(n,e,t,s){this.l=n,this.j=e,this.m=t,this.W=s||1,this.U=new bn(this),this.P=Sg,n=Zi?125:void 0,this.V=new ni(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vu}function vu(){this.i=null,this.g="",this.h=!1}var Sg=45e3,rr={},Ls={};m=Qn.prototype;m.setTimeout=function(n){this.P=n};function or(n,e,t){n.L=1,n.v=ci(Fe(e)),n.s=t,n.S=!0,wu(n,null)}function wu(n,e){n.G=Date.now(),Yn(n),n.A=Fe(n.v);var t=n.A,s=n.W;Array.isArray(s)||(s=[String(s)]),ku(t.i,"t",s),n.C=0,t=n.l.J,n.h=new vu,n.g=Wu(n.l,t?e:null,!n.s),0<n.O&&(n.M=new wg(re(n.Pa,n,n.g),n.O)),hu(n.U,n.g,"readystatechange",n.nb),e=n.I?tu(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Rn(),_g(n.j,n.u,n.A,n.m,n.W,n.s)}m.nb=function(n){n=n.target;const e=this.M;e&&Se(n)==3?e.l():this.Pa(n)};m.Pa=function(n){try{if(n==this.g)e:{const l=Se(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Zi||this.g&&(this.h.h||this.g.ja()||ga(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Rn(3):Rn(2)),ai(this);var t=this.g.da();this.ca=t;t:if(_u(this)){var s=ga(this.g);n="";var i=s.length,r=Se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ot(this),gn(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,Eg(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Sn(a)){var u=a;break t}}u=null}if(t=u)Nt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ar(this,t);else{this.i=!1,this.o=3,he(12),ot(this),gn(this);break e}}this.S?(Eu(this,l,o),Zi&&this.i&&l==3&&(hu(this.U,this.V,"tick",this.mb),this.V.start())):(Nt(this.j,this.m,o,null),ar(this,o)),l==4&&ot(this),this.i&&!this.J&&(l==4?Hu(this.l,this):(this.i=!1,Yn(this)))}else zg(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),ot(this),gn(this)}}}catch{}finally{}};function _u(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Eu(n,e,t){let s=!0,i;for(;!n.J&&n.C<t.length;)if(i=Ag(n,t),i==Ls){e==4&&(n.o=4,he(14),s=!1),Nt(n.j,n.m,null,"[Incomplete Response]");break}else if(i==rr){n.o=4,he(15),Nt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Nt(n.j,n.m,i,null),ar(n,i);_u(n)&&i!=Ls&&i!=rr&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,he(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),io(e),e.M=!0,he(11))):(Nt(n.j,n.m,t,"[Invalid Chunked Response]"),ot(n),gn(n))}m.mb=function(){if(this.g){var n=Se(this.g),e=this.g.ja();this.C<e.length&&(ai(this),Eu(this,n,e),this.i&&n!=4&&Yn(this))}};function Ag(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Ls:(t=Number(e.substring(t,s)),isNaN(t)?rr:(s+=1,s+t>e.length?Ls:(e=e.slice(s,s+t),n.C=s+t,e)))}m.cancel=function(){this.J=!0,ot(this)};function Yn(n){n.Y=Date.now()+n.P,Iu(n,n.P)}function Iu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Gn(re(n.lb,n),e)}function ai(n){n.B&&(A.clearTimeout(n.B),n.B=null)}m.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Ig(this.j,this.A),this.L!=2&&(Rn(),he(17)),ot(this),this.o=2,gn(this)):Iu(this,this.Y-n)};function gn(n){n.l.H==0||n.J||Hu(n.l,n)}function ot(n){ai(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Wr(n.V),du(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function ar(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||cr(t.i,n))){if(!n.K&&cr(t.i,n)&&t.H==3){try{var s=t.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Us(t),hi(t);else break e;so(t),he(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Gn(re(t.ib,t),6e3));if(1>=Nu(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else at(t,11)}else if((n.K||t.g==n)&&Us(t),!Sn(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.L=s,t.l.info("backChannelRequestTimeoutMs_="+s)),s=t;const p=n.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.i;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zr(r,r.h),r.h=null))}if(s.F){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.Da=I,x(s.I,s.F,I))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),s=t;var o=n;if(s.wa=Gu(s,s.J?s.pa:null,s.Y),o.K){Du(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(ai(a),Yn(a)),s.g=o}else ju(s);0<t.j.length&&di(t)}else u[0]!="stop"&&u[0]!="close"||at(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?at(t,7):no(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Rn(4)}catch{}}function Cg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Js(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function kg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Js(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function Tu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Js(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=kg(n),s=Cg(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var Su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bg(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function lt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof lt){this.h=n.h,Ms(this,n.j),this.s=n.s,this.g=n.g,xs(this,n.m),this.l=n.l;var e=n.i,t=new Nn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),da(this,t),this.o=n.o}else n&&(e=String(n).match(Su))?(this.h=!1,Ms(this,e[1]||"",!0),this.s=un(e[2]||""),this.g=un(e[3]||"",!0),xs(this,e[4]),this.l=un(e[5]||"",!0),da(this,e[6]||"",!0),this.o=un(e[7]||"")):(this.h=!1,this.i=new Nn(null,this.h))}lt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ln(e,fa,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ln(e,fa,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ln(t,t.charAt(0)=="/"?Dg:Ng,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ln(t,Pg)),n.join("")};function Fe(n){return new lt(n)}function Ms(n,e,t){n.j=t?un(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function xs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function da(n,e,t){e instanceof Nn?(n.i=e,Lg(n.i,n.h)):(t||(e=ln(e,Og)),n.i=new Nn(e,n.h))}function x(n,e,t){n.i.set(e,t)}function ci(n){return x(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function un(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ln(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Rg),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Rg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var fa=/[#\/\?@]/g,Ng=/[#\?:]/g,Dg=/[#\?]/g,Og=/[#\?@]/g,Pg=/#/g;function Nn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function tt(n){n.g||(n.g=new Map,n.h=0,n.i&&bg(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}m=Nn.prototype;m.add=function(n,e){tt(this),this.i=null,n=Yt(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Au(n,e){tt(n),e=Yt(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Cu(n,e){return tt(n),e=Yt(n,e),n.g.has(e)}m.forEach=function(n,e){tt(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};m.ta=function(){tt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};m.Z=function(n){tt(this);let e=[];if(typeof n=="string")Cu(this,n)&&(e=e.concat(this.g.get(Yt(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};m.set=function(n,e){return tt(this),this.i=null,n=Yt(this,n),Cu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};m.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function ku(n,e,t){Au(n,e),0<t.length&&(n.i=null,n.g.set(Yt(n,e),Vr(t)),n.h+=t.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function Yt(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Lg(n,e){e&&!n.j&&(tt(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(Au(this,s),ku(this,i,t))},n)),n.j=e}var Mg=class{constructor(n,e){this.g=n,this.map=e}};function bu(n){this.l=n||xg,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xg=10;function Ru(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Nu(n){return n.h?1:n.g?n.g.size:0}function cr(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Zr(n,e){n.g?n.g.add(e):n.h=e}function Du(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}bu.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ou(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Vr(n.i)}var Ug=class{stringify(n){return A.JSON.stringify(n,void 0)}parse(n){return A.JSON.parse(n,void 0)}};function Fg(){this.g=new Ug}function Vg(n,e,t){const s=t||"";try{Tu(n,function(i,r){let o=i;zn(i)&&(o=Kr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function $g(n,e){const t=new si;if(A.Image){const s=new Image;s.onload=os(cs,t,s,"TestLoadImage: loaded",!0,e),s.onerror=os(cs,t,s,"TestLoadImage: error",!1,e),s.onabort=os(cs,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=os(cs,t,s,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function cs(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Xn(n){this.l=n.fc||null,this.j=n.ob||!1}Y(Xn,Yr);Xn.prototype.g=function(){return new ui(this.l,this.j)};Xn.prototype.i=function(n){return function(){return n}}({});function ui(n,e){W.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=eo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Y(ui,W);var eo=0;m=ui.prototype;m.open=function(n,e){if(this.readyState!=eo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Dn(this)};m.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||A).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=eo};m.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Pu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}m.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Jn(this):Dn(this),this.readyState==3&&Pu(this)}};m.Za=function(n){this.g&&(this.response=this.responseText=n,Jn(this))};m.Ya=function(n){this.g&&(this.response=n,Jn(this))};m.ka=function(){this.g&&Jn(this)};function Jn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Dn(n)}m.setRequestHeader=function(n,e){this.v.append(n,e)};m.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Dn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Bg=A.JSON.parse;function B(n){W.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Lu,this.L=this.M=!1}Y(B,W);var Lu="",jg=/^https?$/i,qg=["POST","PUT"];m=B.prototype;m.Oa=function(n){this.M=n};m.ha=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ir.g(),this.C=this.u?ha(this.u):ha(ir),this.g.onreadystatechange=re(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){pa(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=A.FormData&&n instanceof A.FormData,!(0<=Xc(qg,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Uu(this),0<this.B&&((this.L=Hg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=re(this.ua,this)):this.A=Qr(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){pa(this,r)}};function Hg(n){return Ut&&typeof n.timeout=="number"&&n.ontimeout!==void 0}m.ua=function(){typeof Fr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ee(this,"timeout"),this.abort(8))};function pa(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Mu(n),li(n)}function Mu(n){n.F||(n.F=!0,ee(n,"complete"),ee(n,"error"))}m.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ee(this,"complete"),ee(this,"abort"),li(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),li(this,!0)),B.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?xu(this):this.kb())};m.kb=function(){xu(this)};function xu(n){if(n.h&&typeof Fr<"u"&&(!n.C[1]||Se(n)!=4||n.da()!=2)){if(n.v&&Se(n)==4)Qr(n.La,0,n);else if(ee(n,"readystatechange"),Se(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=o===0){var i=String(n.I).match(Su)[1]||null;!i&&A.self&&A.self.location&&(i=A.self.location.protocol.slice(0,-1)),s=!jg.test(i?i.toLowerCase():"")}t=s}if(t)ee(n,"complete"),ee(n,"success");else{n.m=6;try{var r=2<Se(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",Mu(n)}}finally{li(n)}}}}function li(n,e){if(n.g){Uu(n);const t=n.g,s=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ee(n,"ready");try{t.onreadystatechange=s}catch{}}}function Uu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}m.isActive=function(){return!!this.g};function Se(n){return n.g?n.g.readyState:0}m.da=function(){try{return 2<Se(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Bg(e)}};function ga(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Lu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function zg(n){const e={};n=(n.g&&2<=Se(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<n.length;s++){if(Sn(n[s]))continue;var t=mg(n[s]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[i]||[];e[i]=r,r.push(t)}ug(e,function(s){return s.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fu(n){let e="";return Br(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function to(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Fu(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):x(n,e,t))}function sn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Vu(n){this.Ga=0,this.j=[],this.l=new si,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=sn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=sn("baseRetryDelayMs",5e3,n),this.hb=sn("retryDelaySeedMs",1e4,n),this.eb=sn("forwardChannelMaxRetries",2,n),this.xa=sn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new bu(n&&n.concurrentRequestLimit),this.Ja=new Fg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=Vu.prototype;m.ra=8;m.H=1;function no(n){if($u(n),n.H==3){var e=n.W++,t=Fe(n.I);if(x(t,"SID",n.K),x(t,"RID",e),x(t,"TYPE","terminate"),Zn(n,t),e=new Qn(n,n.l,e),e.L=2,e.v=ci(Fe(t)),t=!1,A.navigator&&A.navigator.sendBeacon)try{t=A.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&A.Image&&(new Image().src=e.v,t=!0),t||(e.g=Wu(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Yn(e)}Ku(n)}function hi(n){n.g&&(io(n),n.g.cancel(),n.g=null)}function $u(n){hi(n),n.u&&(A.clearTimeout(n.u),n.u=null),Us(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function di(n){if(!Ru(n.i)&&!n.m){n.m=!0;var e=n.Na;Cn||uu(),kn||(Cn(),kn=!0),Gr.add(e,n),n.C=0}}function Kg(n,e){return Nu(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Gn(re(n.Na,n,e),zu(n,n.C)),n.C++,!0)}m.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Qn(this,this.l,n);let r=this.s;if(this.U&&(r?(r=tu(r),nu(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var s=this.j[t];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Bu(this,i,e),t=Fe(this.I),x(t,"RID",n),x(t,"CVER",22),this.F&&x(t,"X-HTTP-Session-Id",this.F),Zn(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(Fu(r)))+"&"+e:this.o&&to(t,this.o,r)),Zr(this.i,i),this.bb&&x(t,"TYPE","init"),this.P?(x(t,"$req",e),x(t,"SID","null"),i.aa=!0,or(i,t,null)):or(i,t,e),this.H=2}}else this.H==3&&(n?ma(this,n):this.j.length==0||Ru(this.i)||ma(this))};function ma(n,e){var t;e?t=e.m:t=n.W++;const s=Fe(n.I);x(s,"SID",n.K),x(s,"RID",t),x(s,"AID",n.V),Zn(n,s),n.o&&n.s&&to(s,n.o,n.s),t=new Qn(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Bu(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Zr(n.i,t),or(t,s,e)}function Zn(n,e){n.na&&Br(n.na,function(t,s){x(e,s,t)}),n.h&&Tu({},function(t,s){x(e,s,t)})}function Bu(n,e,t){t=Math.min(n.j.length,t);var s=n.h?re(n.h.Va,n.h,n):null;e:{var i=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=r,0>u)r=Math.max(0,i[c].g-100),a=!1;else try{Vg(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,s}function ju(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Cn||uu(),kn||(Cn(),kn=!0),Gr.add(e,n),n.A=0}}function so(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Gn(re(n.Ma,n),zu(n,n.A)),n.A++,!0)}m.Ma=function(){if(this.u=null,qu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Gn(re(this.jb,this),n)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,he(10),hi(this),qu(this))};function io(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function qu(n){n.g=new Qn(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Fe(n.wa);x(e,"RID","rpc"),x(e,"SID",n.K),x(e,"AID",n.V),x(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&x(e,"TO",n.qa),x(e,"TYPE","xmlhttp"),Zn(n,e),n.o&&n.s&&to(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=ci(Fe(e)),t.s=null,t.S=!0,wu(t,n)}m.ib=function(){this.v!=null&&(this.v=null,hi(this),so(this),he(19))};function Us(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function Hu(n,e){var t=null;if(n.g==e){Us(n),io(n),n.g=null;var s=2}else if(cr(n.i,e))t=e.F,Du(n.i,e),s=1;else return;if(n.H!=0){if(e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;s=ii(),ee(s,new gu(s,t)),di(n)}else ju(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&Kg(n,e)||s==2&&so(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:at(n,5);break;case 4:at(n,10);break;case 3:at(n,6);break;default:at(n,2)}}}function zu(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function at(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var s=re(n.pb,n);t||(t=new lt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Ms(t,"https"),ci(t)),$g(t.toString(),s)}else he(2);n.H=0,n.h&&n.h.za(e),Ku(n),$u(n)}m.pb=function(n){n?(this.l.info("Successfully pinged google.com"),he(2)):(this.l.info("Failed to ping google.com"),he(1))};function Ku(n){if(n.H=0,n.ma=[],n.h){const e=Ou(n.i);(e.length!=0||n.j.length!=0)&&(oa(n.ma,e),oa(n.ma,n.j),n.i.i.length=0,Vr(n.j),n.j.length=0),n.h.ya()}}function Gu(n,e,t){var s=t instanceof lt?Fe(t):new lt(t);if(s.g!="")e&&(s.g=e+"."+s.g),xs(s,s.m);else{var i=A.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new lt(null);s&&Ms(r,s),e&&(r.g=e),i&&xs(r,i),t&&(r.l=t),s=r}return t=n.F,e=n.Da,t&&e&&x(s,t,e),x(s,"VER",n.ra),Zn(n,s),s}function Wu(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new B(new Xn({ob:!0})):new B(n.va),e.Oa(n.J),e}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function Qu(){}m=Qu.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function Fs(){if(Ut&&!(10<=Number(rg)))throw Error("Environmental error: no available transport.")}Fs.prototype.g=function(n,e){return new ge(n,e)};function ge(n,e){W.call(this),this.g=new Vu(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Sn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Sn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Xt(this)}Y(ge,W);ge.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;he(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Gu(n,null,n.Y),di(n)};ge.prototype.close=function(){no(this.g)};ge.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Kr(n),n=t);e.j.push(new Mg(e.fb++,n)),e.H==3&&di(e)};ge.prototype.N=function(){this.g.h=null,delete this.j,no(this.g),delete this.g,ge.$.N.call(this)};function Yu(n){Xr.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Y(Yu,Xr);function Xu(){Jr.call(this),this.status=1}Y(Xu,Jr);function Xt(n){this.g=n}Y(Xt,Qu);Xt.prototype.Ba=function(){ee(this.g,"a")};Xt.prototype.Aa=function(n){ee(this.g,new Yu(n))};Xt.prototype.za=function(n){ee(this.g,new Xu)};Xt.prototype.ya=function(){ee(this.g,"b")};function Gg(){this.blockSize=-1}function Ee(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Y(Ee,Gg);Ee.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bi(n,e,t){t||(t=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)s[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var r=n.g[3],o=e+(r^t&(i^r))+s[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(t^i))+s[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^r)+s[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~r))+s[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+r&4294967295}Ee.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=t;)Bi(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(s[i++]=n.charCodeAt(r++),i==this.blockSize){Bi(this,s),i=0;break}}else for(;r<e;)if(s[i++]=n[r++],i==this.blockSize){Bi(this,s),i=0;break}}this.h=i,this.i+=e};Ee.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var s=0;32>s;s+=8)n[t++]=this.g[e]>>>s&255;return n};function O(n,e){this.h=e;for(var t=[],s=!0,i=n.length-1;0<=i;i--){var r=n[i]|0;s&&r==e||(t[i]=r,s=!1)}this.g=t}var Wg={};function ro(n){return-128<=n&&128>n?ng(n,function(e){return new O([e|0],0>e?-1:0)}):new O([n|0],0>n?-1:0)}function Ae(n){if(isNaN(n)||!isFinite(n))return Pt;if(0>n)return Z(Ae(-n));for(var e=[],t=1,s=0;n>=t;s++)e[s]=n/t|0,t*=ur;return new O(e,0)}function Ju(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Z(Ju(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ae(Math.pow(e,8)),s=Pt,i=0;i<n.length;i+=8){var r=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+r),e);8>r?(r=Ae(Math.pow(e,r)),s=s.R(r).add(Ae(o))):(s=s.R(t),s=s.add(Ae(o)))}return s}var ur=4294967296,Pt=ro(0),lr=ro(1),ya=ro(16777216);m=O.prototype;m.ea=function(){if(ye(this))return-Z(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var s=this.D(t);n+=(0<=s?s:ur+s)*e,e*=ur}return n};m.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Pe(this))return"0";if(ye(this))return"-"+Z(this).toString(n);for(var e=Ae(Math.pow(n,6)),t=this,s="";;){var i=$s(t,e).g;t=Vs(t,i.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Pe(t))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};m.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Pe(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function ye(n){return n.h==-1}m.X=function(n){return n=Vs(this,n),ye(n)?-1:Pe(n)?0:1};function Z(n){for(var e=n.g.length,t=[],s=0;s<e;s++)t[s]=~n.g[s];return new O(t,~n.h).add(lr)}m.abs=function(){return ye(this)?Z(this):this};m.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(n.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,t[i]=o<<16|r}return new O(t,t[t.length-1]&-2147483648?-1:0)};function Vs(n,e){return n.add(Z(e))}m.R=function(n){if(Pe(this)||Pe(n))return Pt;if(ye(this))return ye(n)?Z(this).R(Z(n)):Z(Z(this).R(n));if(ye(n))return Z(this.R(Z(n)));if(0>this.X(ya)&&0>n.X(ya))return Ae(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],s=0;s<2*e;s++)t[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<n.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*s+2*i]+=o*c,us(t,2*s+2*i),t[2*s+2*i+1]+=r*c,us(t,2*s+2*i+1),t[2*s+2*i+1]+=o*a,us(t,2*s+2*i+1),t[2*s+2*i+2]+=r*a,us(t,2*s+2*i+2)}for(s=0;s<e;s++)t[s]=t[2*s+1]<<16|t[2*s];for(s=e;s<2*e;s++)t[s]=0;return new O(t,0)};function us(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function rn(n,e){this.g=n,this.h=e}function $s(n,e){if(Pe(e))throw Error("division by zero");if(Pe(n))return new rn(Pt,Pt);if(ye(n))return e=$s(Z(n),e),new rn(Z(e.g),Z(e.h));if(ye(e))return e=$s(n,Z(e)),new rn(Z(e.g),e.h);if(30<n.g.length){if(ye(n)||ye(e))throw Error("slowDivide_ only works with positive integers.");for(var t=lr,s=e;0>=s.X(n);)t=va(t),s=va(s);var i=Ct(t,1),r=Ct(s,1);for(s=Ct(s,2),t=Ct(t,2);!Pe(s);){var o=r.add(s);0>=o.X(n)&&(i=i.add(t),r=o),s=Ct(s,1),t=Ct(t,1)}return e=Vs(n,i.R(e)),new rn(i,e)}for(i=Pt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),s=Math.ceil(Math.log(t)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Ae(t),o=r.R(e);ye(o)||0<o.X(n);)t-=s,r=Ae(t),o=r.R(e);Pe(r)&&(r=lr),i=i.add(r),n=Vs(n,o)}return new rn(i,n)}m.gb=function(n){return $s(this,n).h};m.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)&n.D(s);return new O(t,this.h&n.h)};m.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)|n.D(s);return new O(t,this.h|n.h)};m.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)^n.D(s);return new O(t,this.h^n.h)};function va(n){for(var e=n.g.length+1,t=[],s=0;s<e;s++)t[s]=n.D(s)<<1|n.D(s-1)>>>31;return new O(t,n.h)}function Ct(n,e){var t=e>>5;e%=32;for(var s=n.g.length-t,i=[],r=0;r<s;r++)i[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new O(i,n.h)}Fs.prototype.createWebChannel=Fs.prototype.g;ge.prototype.send=ge.prototype.u;ge.prototype.open=ge.prototype.m;ge.prototype.close=ge.prototype.close;ri.NO_ERROR=0;ri.TIMEOUT=8;ri.HTTP_ERROR=6;mu.COMPLETE="complete";yu.EventType=Wn;Wn.OPEN="a";Wn.CLOSE="b";Wn.ERROR="c";Wn.MESSAGE="d";W.prototype.listen=W.prototype.O;B.prototype.listenOnce=B.prototype.P;B.prototype.getLastError=B.prototype.Sa;B.prototype.getLastErrorCode=B.prototype.Ia;B.prototype.getStatus=B.prototype.da;B.prototype.getResponseJson=B.prototype.Wa;B.prototype.getResponseText=B.prototype.ja;B.prototype.send=B.prototype.ha;B.prototype.setWithCredentials=B.prototype.Oa;Ee.prototype.digest=Ee.prototype.l;Ee.prototype.reset=Ee.prototype.reset;Ee.prototype.update=Ee.prototype.j;O.prototype.add=O.prototype.add;O.prototype.multiply=O.prototype.R;O.prototype.modulo=O.prototype.gb;O.prototype.compare=O.prototype.X;O.prototype.toNumber=O.prototype.ea;O.prototype.toString=O.prototype.toString;O.prototype.getBits=O.prototype.D;O.fromNumber=Ae;O.fromString=Ju;var Qg=function(){return new Fs},Yg=function(){return ii()},ji=ri,Xg=mu,Jg=Et,wa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Zg=Xn,ls=yu,em=B,tm=Ee,Lt=O;const _a="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ne.UNAUTHENTICATED=new ne(null),ne.GOOGLE_CREDENTIALS=new ne("google-credentials-uid"),ne.FIRST_PARTY=new ne("first-party-uid"),ne.MOCK_USER=new ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new br("@firebase/firestore");function Ea(){return mt.logLevel}function _(n,...e){if(mt.logLevel<=N.DEBUG){const t=e.map(oo);mt.debug(`Firestore (${Jt}): ${n}`,...t)}}function Ve(n,...e){if(mt.logLevel<=N.ERROR){const t=e.map(oo);mt.error(`Firestore (${Jt}): ${n}`,...t)}}function Ft(n,...e){if(mt.logLevel<=N.WARN){const t=e.map(oo);mt.warn(`Firestore (${Jt}): ${n}`,...t)}}function oo(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n="Unexpected state"){const e=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: `+n;throw Ve(e),new Error(e)}function U(n,e){n||S()}function k(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Ne{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ne.UNAUTHENTICATED))}shutdown(){}}class sm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class im{constructor(e){this.t=e,this.currentUser=ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Qe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Qe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(U(typeof s.accessToken=="string"),new Zu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new ne(e)}}class rm{constructor(e,t,s){this.h=e,this.l=t,this.m=s,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class om{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new rm(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class am{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cm{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const s=r=>{r.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(U(typeof t.token=="string"),this.T=t.token,new am(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=um(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function D(n,e){return n<e?-1:n>e?1:0}function Vt(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new K(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new K(0,0))}static max(){return new C(new K(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,s){t===void 0?t=0:t>e.length&&S(),s===void 0?s=e.length-t:s>e.length-t&&S(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return On.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof On?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends On{construct(e,t,s){return new F(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new F(t)}static emptyPath(){return new F([])}}const lm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends On{construct(e,t,s){return new ie(e,t,s)}static isValidIdentifier(e){return lm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ie(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ie(t)}static emptyPath(){return new ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(F.fromString(e))}static fromName(e){return new E(F.fromString(e).popFirst(5))}static empty(){return new E(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new F(e.slice()))}}function hm(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=C.fromTimestamp(s===1e9?new K(t+1,0):new K(t,s));return new Xe(i,E.empty(),e)}function dm(n){return new Xe(n.readTime,n.key,-1)}class Xe{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Xe(C.min(),E.empty(),-1)}static max(){return new Xe(C.max(),E.empty(),-1)}}function fm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=E.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==pm)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,s)=>{t(e)})}static reject(e){return new g((t,s)=>{s(e)})}static waitFor(e){return new g((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=g.resolve(!1);for(const s of e)t=t.next(i=>i?g.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new g((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,t){return new g((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function ts(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>t.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ao.ct=-1;function fi(n){return n==null}function Bs(n){return n===0&&1/n==-1/0}function mm(n){return typeof n=="number"&&Number.isInteger(n)&&!Bs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function It(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t){this.comparator=e,this.root=t||J.EMPTY}insert(e,t){return new $(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,J.BLACK,null,null))}remove(e){return new $(this.comparator,this.root.remove(e,this.comparator).copy(null,null,J.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hs(this.root,e,this.comparator,!0)}}class hs{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class J{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??J.RED,this.left=i??J.EMPTY,this.right=r??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new J(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return J.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(n,e,t,s,i){return this}insert(n,e,t){return new J(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new $(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ta(this.data.getIterator())}getIteratorFrom(e){return new Ta(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class Ta{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.fields=e,e.sort(ie.comparator)}static empty(){return new we([])}unionWith(e){let t=new ae(ie.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new we(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vt(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nl("Invalid base64 string: "+i):i}}(e);return new ue(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const ym=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Je(n){if(U(!!n),typeof n=="string"){let e=0;const t=ym.exec(n);if(U(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:q(n.seconds),nanos:q(n.nanos)}}function q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yt(n){return typeof n=="string"?ue.fromBase64String(n):ue.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function uo(n){const e=n.mapValue.fields.__previous_value__;return co(e)?uo(e):e}function Pn(n){const e=Je(n.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t,s,i,r,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Ln{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?co(n)?4:wm(n)?9007199254740991:10:S()}function Re(n,e){if(n===e)return!0;const t=vt(n);if(t!==vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pn(n).isEqual(Pn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Je(s.timestampValue),o=Je(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return yt(s.bytesValue).isEqual(yt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return q(s.geoPointValue.latitude)===q(i.geoPointValue.latitude)&&q(s.geoPointValue.longitude)===q(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return q(s.integerValue)===q(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=q(s.doubleValue),o=q(i.doubleValue);return r===o?Bs(r)===Bs(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return Vt(n.arrayValue.values||[],e.arrayValue.values||[],Re);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ia(r)!==Ia(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Re(r[a],o[a])))return!1;return!0}(n,e);default:return S()}}function Mn(n,e){return(n.values||[]).find(t=>Re(t,e))!==void 0}function $t(n,e){if(n===e)return 0;const t=vt(n),s=vt(e);if(t!==s)return D(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=q(i.integerValue||i.doubleValue),a=q(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Sa(n.timestampValue,e.timestampValue);case 4:return Sa(Pn(n),Pn(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,r){const o=yt(i),a=yt(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=D(q(i.latitude),q(r.latitude));return o!==0?o:D(q(i.longitude),q(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=$t(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ds.mapValue&&r===ds.mapValue)return 0;if(i===ds.mapValue)return 1;if(r===ds.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=$t(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(n.mapValue,e.mapValue);default:throw S()}}function Sa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=Je(n),s=Je(e),i=D(t.seconds,s.seconds);return i!==0?i:D(t.nanos,s.nanos)}function Bt(n){return hr(n)}function hr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=Je(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?yt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,E.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=hr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${hr(s.fields[a])}`;return r+"}"}(n.mapValue):S();var e,t}function Aa(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function dr(n){return!!n&&"integerValue"in n}function lo(n){return!!n&&"arrayValue"in n}function Ca(n){return!!n&&"nullValue"in n}function ka(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Es(n){return!!n&&"mapValue"in n}function mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return It(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=mn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=mn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function wm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.value=e}static empty(){return new de({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Es(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mn(t)}setAll(e){let t=ie.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=mn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Es(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Re(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Es(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){It(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new de(mn(this.value))}}function sl(n){const e=[];return It(n.fields,(t,s)=>{const i=new ie([t]);if(Es(s)){const r=sl(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new we(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new se(e,0,C.min(),C.min(),C.min(),de.empty(),0)}static newFoundDocument(e,t,s,i){return new se(e,1,t,C.min(),s,i,0)}static newNoDocument(e,t){return new se(e,2,t,C.min(),C.min(),de.empty(),0)}static newUnknownDocument(e,t){return new se(e,3,t,C.min(),C.min(),de.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=de.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=de.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.position=e,this.inclusive=t}}function ba(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),t.key):s=$t(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ra(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Re(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t="asc"){this.field=e,this.dir=t}}function _m(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{}class H extends il{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Im(e,t,s):t==="array-contains"?new Am(e,s):t==="in"?new Cm(e,s):t==="not-in"?new km(e,s):t==="array-contains-any"?new bm(e,s):new H(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Tm(e,s):new Sm(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison($t(t,this.value)):t!==null&&vt(this.value)===vt(t)&&this.matchesComparison($t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ie extends il{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ie(e,t)}matches(e){return rl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function rl(n){return n.op==="and"}function ol(n){return Em(n)&&rl(n)}function Em(n){for(const e of n.filters)if(e instanceof Ie)return!1;return!0}function fr(n){if(n instanceof H)return n.field.canonicalString()+n.op.toString()+Bt(n.value);if(ol(n))return n.filters.map(e=>fr(e)).join(",");{const e=n.filters.map(t=>fr(t)).join(",");return`${n.op}(${e})`}}function al(n,e){return n instanceof H?function(t,s){return s instanceof H&&t.op===s.op&&t.field.isEqual(s.field)&&Re(t.value,s.value)}(n,e):n instanceof Ie?function(t,s){return s instanceof Ie&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&al(r,s.filters[o]),!0):!1}(n,e):void S()}function cl(n){return n instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${Bt(e.value)}`}(n):n instanceof Ie?function(e){return e.op.toString()+" {"+e.getFilters().map(cl).join(" ,")+"}"}(n):"Filter"}class Im extends H{constructor(e,t,s){super(e,t,s),this.key=E.fromName(s.referenceValue)}matches(e){const t=E.comparator(e.key,this.key);return this.matchesComparison(t)}}class Tm extends H{constructor(e,t){super(e,"in",t),this.keys=ul("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Sm extends H{constructor(e,t){super(e,"not-in",t),this.keys=ul("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ul(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>E.fromName(s.referenceValue))}class Am extends H{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return lo(t)&&Mn(t.arrayValue,this.value)}}class Cm extends H{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mn(this.value.arrayValue,t)}}class km extends H{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Mn(this.value.arrayValue,t)}}class bm extends H{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!lo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Mn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Na(n,e=null,t=[],s=[],i=null,r=null,o=null){return new Rm(n,e,t,s,i,r,o)}function ho(n){const e=k(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>fr(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),fi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Bt(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Bt(s)).join(",")),e.dt=t}return e.dt}function fo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_m(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!al(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ra(n.startAt,e.startAt)&&Ra(n.endAt,e.endAt)}function pr(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function Nm(n,e,t,s,i,r,o,a){return new Zt(n,e,t,s,i,r,o,a)}function po(n){return new Zt(n)}function Da(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ll(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function go(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function hl(n){return n.collectionGroup!==null}function Mt(n){const e=k(n);if(e.wt===null){e.wt=[];const t=go(e),s=ll(e);if(t!==null&&s===null)t.isKeyField()||e.wt.push(new yn(t)),e.wt.push(new yn(ie.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new yn(ie.keyField(),r))}}}return e.wt}function $e(n){const e=k(n);if(!e._t)if(e.limitType==="F")e._t=Na(e.path,e.collectionGroup,Mt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Mt(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new yn(r.field,o))}const s=e.endAt?new js(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new js(e.startAt.position,e.startAt.inclusive):null;e._t=Na(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e._t}function gr(n,e){e.getFirstInequalityField(),go(n);const t=n.filters.concat([e]);return new Zt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function mr(n,e,t){return new Zt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function pi(n,e){return fo($e(n),$e(e))&&n.limitType===e.limitType}function dl(n){return`${ho($e(n))}|lt:${n.limitType}`}function yr(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>cl(s)).join(", ")}]`),fi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Bt(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Bt(s)).join(",")),`Target(${t})`}($e(n))}; limitType=${n.limitType})`}function gi(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):E.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of Mt(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=ba(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,Mt(t),s)||t.endAt&&!function(i,r,o){const a=ba(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,Mt(t),s))}(n,e)}function Dm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fl(n){return(e,t)=>{let s=!1;for(const i of Mt(n)){const r=Om(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Om(n,e,t){const s=n.field.isKeyField()?E.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?$t(a,c):S()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){It(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return tl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=new $(E.comparator);function Be(){return Pm}const pl=new $(E.comparator);function hn(...n){let e=pl;for(const t of n)e=e.insert(t.key,t);return e}function gl(n){let e=pl;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ct(){return vn()}function ml(){return vn()}function vn(){return new en(n=>n.toString(),(n,e)=>n.isEqual(e))}const Lm=new $(E.comparator),Mm=new ae(E.comparator);function b(...n){let e=Mm;for(const t of n)e=e.add(t);return e}const xm=new ae(D);function Um(){return xm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bs(e)?"-0":e}}function vl(n){return{integerValue:""+n}}function Fm(n,e){return mm(e)?vl(e):yl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this._=void 0}}function Vm(n,e,t){return n instanceof qs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&co(i)&&(i=uo(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof jt?_l(n,e):n instanceof xn?El(n,e):function(s,i){const r=wl(s,i),o=Oa(r)+Oa(s.gt);return dr(r)&&dr(s.gt)?vl(o):yl(s.serializer,o)}(n,e)}function $m(n,e,t){return n instanceof jt?_l(n,e):n instanceof xn?El(n,e):t}function wl(n,e){return n instanceof Hs?dr(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class qs extends mi{}class jt extends mi{constructor(e){super(),this.elements=e}}function _l(n,e){const t=Il(e);for(const s of n.elements)t.some(i=>Re(i,s))||t.push(s);return{arrayValue:{values:t}}}class xn extends mi{constructor(e){super(),this.elements=e}}function El(n,e){let t=Il(e);for(const s of n.elements)t=t.filter(i=>!Re(i,s));return{arrayValue:{values:t}}}class Hs extends mi{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Oa(n){return q(n.integerValue||n.doubleValue)}function Il(n){return lo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t){this.field=e,this.transform=t}}function jm(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof jt&&s instanceof jt||t instanceof xn&&s instanceof xn?Vt(t.elements,s.elements,Re):t instanceof Hs&&s instanceof Hs?Re(t.gt,s.gt):t instanceof qs&&s instanceof qs}(n.transform,e.transform)}class qm{constructor(e,t){this.version=e,this.transformResults=t}}class Me{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Is(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yi{}function Tl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Al(n.key,Me.none()):new vi(n.key,n.data,Me.none());{const t=n.data,s=de.empty();let i=new ae(ie.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Tt(n.key,s,new we(i.toArray()),Me.none())}}function Hm(n,e,t){n instanceof vi?function(s,i,r){const o=s.value.clone(),a=La(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Tt?function(s,i,r){if(!Is(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=La(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Sl(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function wn(n,e,t,s){return n instanceof vi?function(i,r,o,a){if(!Is(i.precondition,r))return o;const c=i.value.clone(),u=Ma(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof Tt?function(i,r,o,a){if(!Is(i.precondition,r))return o;const c=Ma(i.fieldTransforms,a,r),u=r.data;return u.setAll(Sl(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,s):function(i,r,o){return Is(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function zm(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=wl(s.transform,i||null);r!=null&&(t===null&&(t=de.empty()),t.set(s.field,r))}return t||null}function Pa(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Vt(t,s,(i,r)=>jm(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vi extends yi{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Tt extends yi{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Sl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function La(n,e,t){const s=new Map;U(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,$m(o,a,t[i]))}return s}function Ma(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,Vm(r,o,e))}return s}class Al extends yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Km extends yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Hm(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=wn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=wn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ml();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=Tl(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),b())}isEqual(e){return this.batchId===e.batchId&&Vt(this.mutations,e.mutations,(t,s)=>Pa(t,s))&&Vt(this.baseMutations,e.baseMutations,(t,s)=>Pa(t,s))}}class mo{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){U(e.mutations.length===s.length);let i=Lm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new mo(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,R;function Ym(n){switch(n){default:return S();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Cl(n){if(n===void 0)return Ve("GRPC error has no .code"),f.UNKNOWN;switch(n){case j.OK:return f.OK;case j.CANCELLED:return f.CANCELLED;case j.UNKNOWN:return f.UNKNOWN;case j.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case j.INTERNAL:return f.INTERNAL;case j.UNAVAILABLE:return f.UNAVAILABLE;case j.UNAUTHENTICATED:return f.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case j.NOT_FOUND:return f.NOT_FOUND;case j.ALREADY_EXISTS:return f.ALREADY_EXISTS;case j.PERMISSION_DENIED:return f.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case j.ABORTED:return f.ABORTED;case j.OUT_OF_RANGE:return f.OUT_OF_RANGE;case j.UNIMPLEMENTED:return f.UNIMPLEMENTED;case j.DATA_LOSS:return f.DATA_LOSS;default:return S()}}(R=j||(j={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fs}static getOrCreateInstance(){return fs===null&&(fs=new yo),fs}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let fs=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new Lt([4294967295,4294967295],0);function xa(n){const e=Xm().encode(n),t=new tm;return t.update(e),new Uint8Array(t.digest())}function Ua(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Lt([t,s],0),new Lt([i,r],0)]}class vo{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new dn(`Invalid padding: ${t}`);if(s<0)throw new dn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new dn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new dn(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Lt.fromNumber(this.It)}Et(e,t,s){let i=e.add(t.multiply(Lt.fromNumber(s)));return i.compare(Jm)===1&&(i=new Lt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=xa(e),[s,i]=Ua(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new vo(r,i,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=xa(e),[s,i]=Ua(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class dn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,ns.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new wi(C.min(),i,new $(D),Be(),b())}}class ns{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ns(s,t,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,s,i){this.Pt=e,this.removedTargetIds=t,this.key=s,this.bt=i}}class kl{constructor(e,t){this.targetId=e,this.Vt=t}}class bl{constructor(e,t,s=ue.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Fa{constructor(){this.St=0,this.Dt=$a(),this.Ct=ue.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=b(),t=b(),s=b();return this.Dt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:S()}}),new ns(this.Ct,this.xt,e,t,s)}Ft(){this.Nt=!1,this.Dt=$a()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Zm{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Be(),this.zt=Va(),this.Wt=new $(D)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const s=this.Zt(t);switch(e.state){case 0:this.te(t)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(t);break;case 3:this.te(t)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),s.$t(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((s,i)=>{this.te(i)&&t(i)})}ne(e){var t;const s=e.targetId,i=e.Vt.count,r=this.se(s);if(r){const o=r.target;if(pr(o))if(i===0){const a=new E(o.path);this.Yt(s,a,se.newNoDocument(a,C.min()))}else U(i===1);else{const a=this.ie(s);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(t=yo.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,p,y,I,w,P;const V={localCacheCount:l,existenceFilterCount:h.count},L=h.unchangedNames;return L&&(V.bloomFilter={applied:u===0,hashCount:(d=L==null?void 0:L.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(I=(y=(p=L==null?void 0:L.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&I!==void 0?I:0,padding:(P=(w=L==null?void 0:L.bits)===null||w===void 0?void 0:w.padding)!==null&&P!==void 0?P:0}),V}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:s,count:i}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let c,u;try{c=yt(r).toUint8Array()}catch(l){if(l instanceof nl)return Ft("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new vo(c,o,a)}catch(l){return Ft(l instanceof dn?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const s=this.Gt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.vt(a)||(this.Yt(e,r,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&pr(a.target)){const c=new E(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,se.newNoDocument(c,e))}r.Mt&&(t.set(o,r.Ot()),r.Ft())}});let s=b();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const i=new wi(e,t,this.Wt,this.jt,s);return this.jt=Be(),this.zt=Va(),this.Wt=new $(D),i}Jt(e,t){if(!this.te(e))return;const s=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,s),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,s){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),s&&(this.jt=this.jt.insert(t,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Fa,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new ae(D),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Fa),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Va(){return new $(E.comparator)}function $a(){return new $(E.comparator)}const ey=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ty=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ny=(()=>({and:"AND",or:"OR"}))();class sy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vr(n,e){return n.useProto3Json||fi(e)?e:{value:e}}function zs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function iy(n,e){return zs(n,e.toTimestamp())}function be(n){return U(!!n),C.fromTimestamp(function(e){const t=Je(e);return new K(t.seconds,t.nanos)}(n))}function wo(n,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Nl(n){const e=F.fromString(n);return U(Ll(e)),e}function wr(n,e){return wo(n.databaseId,e.path)}function qi(n,e){const t=Nl(e);if(t.get(1)!==n.databaseId.projectId)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new E(Dl(t))}function _r(n,e){return wo(n.databaseId,e)}function ry(n){const e=Nl(n);return e.length===4?F.emptyPath():Dl(e)}function Er(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dl(n){return U(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ba(n,e,t){return{name:wr(n,e),fields:t.value.mapValue.fields}}function oy(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(U(u===void 0||typeof u=="string"),ue.fromBase64String(u||"")):(U(u===void 0||u instanceof Uint8Array),ue.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Cl(c.code);return new v(u,c.message||"")}(o);t=new bl(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=qi(n,s.document.name),r=be(s.document.updateTime),o=s.document.createTime?be(s.document.createTime):C.min(),a=new de({mapValue:{fields:s.document.fields}}),c=se.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];t=new Ts(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=qi(n,s.document),r=s.readTime?be(s.readTime):C.min(),o=se.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Ts([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=qi(n,s.document),r=s.removedTargetIds||[];t=new Ts([],r,i,null)}else{if(!("filter"in e))return S();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Qm(i,r),a=s.targetId;t=new kl(a,o)}}return t}function ay(n,e){let t;if(e instanceof vi)t={update:Ba(n,e.key,e.value)};else if(e instanceof Al)t={delete:wr(n,e.key)};else if(e instanceof Tt)t={update:Ba(n,e.key,e.data),updateMask:my(e.fieldMask)};else{if(!(e instanceof Km))return S();t={verify:wr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof qs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof jt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hs)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw S()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:iy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:S()}(n,e.precondition)),t}function cy(n,e){return n&&n.length>0?(U(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?be(s.updateTime):be(i);return r.isEqual(C.min())&&(r=be(i)),new qm(r,s.transformResults||[])}(t,e))):[]}function uy(n,e){return{documents:[_r(n,e.path)]}}function ly(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=_r(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=_r(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Pl(Ie.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:kt(l.field),direction:fy(l.dir)}}(u))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=vr(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function hy(n){let e=ry(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){U(s===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];t.where&&(r=function(l){const h=Ol(l);return h instanceof Ie&&ol(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new yn(bt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,fi(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new js(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new js(d,h)}(t.endAt)),Nm(e,i,o,r,a,"F",c,u)}function dy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ol(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=bt(e.unaryFilter.field);return H.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=bt(e.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bt(e.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=bt(e.unaryFilter.field);return H.create(r,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(n):n.fieldFilter!==void 0?function(e){return H.create(bt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ie.create(e.compositeFilter.filters.map(t=>Ol(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(n):S()}function fy(n){return ey[n]}function py(n){return ty[n]}function gy(n){return ny[n]}function kt(n){return{fieldPath:n.canonicalString()}}function bt(n){return ie.fromServerFormat(n.fieldPath)}function Pl(n){return n instanceof H?function(e){if(e.op==="=="){if(ka(e.value))return{unaryFilter:{field:kt(e.field),op:"IS_NAN"}};if(Ca(e.value))return{unaryFilter:{field:kt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ka(e.value))return{unaryFilter:{field:kt(e.field),op:"IS_NOT_NAN"}};if(Ca(e.value))return{unaryFilter:{field:kt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kt(e.field),op:py(e.op),value:e.value}}}(n):n instanceof Ie?function(e){const t=e.getFilters().map(s=>Pl(s));return t.length===1?t[0]:{compositeFilter:{op:gy(e.op),filters:t}}}(n):S()}function my(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ll(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,s,i,r=C.min(),o=C.min(),a=ue.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ge(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.fe=e}}function vy(n){const e=hy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.rn=new _y}addToCollectionParentIndex(e,t){return this.rn.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(Xe.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(Xe.min())}updateCollectionGroup(e,t,s){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class _y{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new ae(F.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ae(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new qt(0)}static Mn(){return new qt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.changes=new en(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?g.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&wn(s.mutation,i,we.empty(),K.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,b()).next(()=>s))}getLocalViewOfDocuments(e,t,s=b()){const i=ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=hn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=ct();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,b()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=Be();const o=vn(),a=vn();return t.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Tt)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),wn(l.mutation,u,l.mutation.getFieldMask(),K.now())):o.set(u.key,we.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new Iy(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=vn();let i=new $((o,a)=>o-a),r=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=s.get(c)||we.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||b()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ml();l.forEach(d=>{if(!r.has(d)){const p=Tl(t.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):g.resolve(ct());let a=-1,c=r;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?g.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,b())).next(l=>({batchId:a,changes:gl(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new E(t)).next(s=>{let i=hn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=hn();return this.indexManager.getCollectionParents(e,i).next(o=>g.forEach(o,a=>{const c=function(u,l){return new Zt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,se.newInvalidDocument(u)))});let o=hn();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&wn(u.mutation,c,we.empty(),K.now()),gi(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return g.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var s;return this.cs.set(t.id,{id:(s=t).id,version:s.version,createTime:be(s.createTime)}),g.resolve()}getNamedQuery(e,t){return g.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(s){return{name:s.name,query:vy(s.bundledQuery),readTime:be(s.readTime)}}(t)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.overlays=new $(E.comparator),this.ls=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ct();return g.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.we(e,t,r)}),g.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),g.resolve()}getOverlaysForCollection(e,t,s){const i=ct(),r=t.length+1,o=new E(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new $((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=ct(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ct(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return g.resolve(a)}we(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Wm(t,s));let r=this.ls.get(t);r===void 0&&(r=b(),this.ls.set(t,r)),this.ls.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.fs=new ae(G.ds),this.ws=new ae(G._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const s=new G(e,t);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.ys(new G(e,t))}ps(e,t){e.forEach(s=>this.removeReference(s,t))}Is(e){const t=new E(new F([])),s=new G(t,e),i=new G(t,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new E(new F([])),s=new G(t,e),i=new G(t,e+1);let r=b();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new G(e,0),s=this.fs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class G{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return E.comparator(e.key,t.key)||D(e.As,t.As)}static _s(e,t){return D(e.As,t.As)||E.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new ae(G.ds)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gm(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new G(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.bs(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new G(t,0),i=new G(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ae(D);return t.forEach(i=>{const r=new G(i,0),o=new G(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),g.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new G(new E(r),0);let a=new ae(D);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),g.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){U(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return g.forEach(t.mutations,i=>{const r=new G(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,t){const s=new G(t,0),i=this.Rs.firstAfterOrEqual(s);return g.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.Ds=e,this.docs=new $(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return g.resolve(s?s.document.mutableCopy():se.newInvalidDocument(t))}getEntries(e,t){let s=Be();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():se.newInvalidDocument(i))}),g.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Be();const o=t.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||fm(dm(l),s)<=0||(i.has(l.key)||gi(t,l))&&(r=r.insert(l.key,l.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(e,t,s,i){S()}Cs(e,t){return g.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new by(this)}getSize(e){return g.resolve(this.size)}}class by extends Ey{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),g.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.persistence=e,this.xs=new en(t=>ho(t),fo),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Ns=0,this.ks=new _o,this.targetCount=0,this.Ms=qt.kn()}forEachTarget(e,t){return this.xs.forEach((s,i)=>t(i)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Ns&&(this.Ns=t),g.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new qt(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.Fn(t),g.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const s=this.xs.get(t)||null;return g.resolve(s)}addMatchingKeys(e,t,s){return this.ks.gs(t,s),g.resolve()}removeMatchingKeys(e,t,s){this.ks.ps(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),g.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ks.Es(t);return g.resolve(s)}containsKey(e,t){return g.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.$s={},this.overlays={},this.Os=new ao(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Ry(this),this.indexManager=new wy,this.remoteDocumentCache=function(s){return new ky(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new yy(t),this.qs=new Sy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ay,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.$s[e.toKey()];return s||(s=new Cy(t,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,s){_("MemoryPersistence","Starting transaction:",e);const i=new Dy(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,t){return g.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,t)))}}class Dy extends gm{constructor(e){super(),this.currentSequenceNumber=e}}class Eo{constructor(e){this.persistence=e,this.Qs=new _o,this.js=null}static zs(e){return new Eo(e)}get Ws(){if(this.js)return this.js;throw S()}addReference(e,t,s){return this.Qs.addReference(s,t),this.Ws.delete(s.toString()),g.resolve()}removeReference(e,t,s){return this.Qs.removeReference(s,t),this.Ws.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),g.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ws,s=>{const i=E.fromPath(s);return this.Hs(e,i).next(r=>{r||t.removeEntry(i,C.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(s=>{s?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return g.or([()=>g.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Fi=s,this.Bi=i}static Li(e,t){let s=b(),i=b();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Io(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,s,i){return this.Ki(e,t).next(r=>r||this.Gi(e,t,i,s)).next(r=>r||this.Qi(e,t))}Ki(e,t){if(Da(t))return g.resolve(null);let s=$e(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=mr(t,null,"F"),s=$e(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=b(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,mr(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,s,i){return Da(t)||i.isEqual(C.min())?this.Qi(e,t):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(t,r);return this.zi(t,o,s,i)?this.Qi(e,t):(Ea()<=N.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yr(t)),this.Wi(e,o,t,hm(i,-1)))})}ji(e,t){let s=new ae(fl(e));return t.forEach((i,r)=>{gi(e,r)&&(s=s.add(r))}),s}zi(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,t){return Ea()<=N.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",yr(t)),this.Ui.getDocumentsMatchingQuery(e,t,Xe.min())}Wi(e,t,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t,s,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new $(D),this.Yi=new en(r=>ho(r),fo),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ty(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function Ly(n,e,t,s){return new Py(n,e,t,s)}async function Ml(n,e){const t=k(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.tr(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=b();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(s,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function My(n,e){const t=k(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=g.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const I=c.docVersions.get(p);U(I!==null),y.version.compareTo(I)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=b();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function xl(n){const e=k(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function xy(n,e){const t=k(n),s=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(r,l.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ue.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),i=i.insert(h,p),function(y,I,w){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,l)&&a.push(t.Bs.updateTargetData(r,p))});let c=Be(),u=b();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(Uy(r,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!s.isEqual(C.min())){const l=t.Bs.getLastRemoteSnapshotVersion(r).next(h=>t.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.Ji=i,r))}function Uy(n,e,t){let s=b(),i=b();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=Be();return t.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function Fy(n,e){const t=k(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Vy(n,e){const t=k(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Bs.getTargetData(s,e).next(r=>r?(i=r,g.resolve(i)):t.Bs.allocateTargetId(s).next(o=>(i=new Ge(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(s.targetId,s),t.Yi.set(e,s.targetId)),s})}async function Ir(n,e,t){const s=k(n),i=s.Ji.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ts(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function ja(n,e,t){const s=k(n);let i=C.min(),r=b();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=k(a),h=l.Yi.get(u);return h!==void 0?g.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(s,o,$e(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,t?i:C.min(),t?r:b())).next(a=>($y(s,Dm(e),a),{documents:a,ir:r})))}function $y(n,e,t){let s=n.Xi.get(e)||C.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Xi.set(e,s)}class qa{constructor(){this.activeTargetIds=Um()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class By{constructor(){this.Hr=new qa,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,s){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new qa,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps=null;function Hi(){return ps===null?ps=268435456+Math.round(2147483648*Math.random()):ps++,"0x"+ps.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="WebChannelConnection";class zy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,s,i,r){const o=Hi(),a=this.To(e,t);_("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,i,r),this.Ao(e,a,c,s).then(u=>(_("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ft("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}vo(e,t,s,i,r,o){return this.Io(e,t,s,i,r)}Eo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,t){const s=qy[e];return`${this.mo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,s,i){const r=Hi();return new Promise((o,a)=>{const c=new em;c.setWithCredentials(!0),c.listenOnce(Xg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ji.NO_ERROR:const l=c.getResponseJson();_(te,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(l)),o(l);break;case ji.TIMEOUT:_(te,`RPC '${e}' ${r} timed out`),a(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case ji.HTTP_ERROR:const h=c.getStatus();if(_(te,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(I){const w=I.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(w)>=0?w:f.UNKNOWN}(p.status);a(new v(y,p.message))}else a(new v(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new v(f.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{_(te,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);_(te,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",u,s,15)})}Ro(e,t,s){const i=Hi(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qg(),a=Yg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new Zg({})),this.Eo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const l=r.join("");_(te,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,p=!1;const y=new Hy({ro:w=>{p?_(te,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(_(te,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(te,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),I=(w,P,V)=>{w.listen(P,L=>{try{V(L)}catch(M){setTimeout(()=>{throw M},0)}})};return I(h,ls.EventType.OPEN,()=>{p||_(te,`RPC '${e}' stream ${i} transport opened.`)}),I(h,ls.EventType.CLOSE,()=>{p||(p=!0,_(te,`RPC '${e}' stream ${i} transport closed`),y.wo())}),I(h,ls.EventType.ERROR,w=>{p||(p=!0,Ft(te,`RPC '${e}' stream ${i} transport errored:`,w),y.wo(new v(f.UNAVAILABLE,"The operation could not be completed")))}),I(h,ls.EventType.MESSAGE,w=>{var P;if(!p){const V=w.data[0];U(!!V);const L=V,M=L.error||((P=L[0])===null||P===void 0?void 0:P.error);if(M){_(te,`RPC '${e}' stream ${i} received error:`,M);const me=M.status;let ve=function(it){const At=j[it];if(At!==void 0)return Cl(At)}(me),st=M.message;ve===void 0&&(ve=f.INTERNAL,st="Unknown error status: "+me+" with message "+M.message),p=!0,y.wo(new v(ve,st)),h.close()}else _(te,`RPC '${e}' stream ${i} received:`,V),y._o(V)}}),I(a,Jg.STAT_EVENT,w=>{w.stat===wa.PROXY?_(te,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===wa.NOPROXY&&_(te,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n){return new sy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-s);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,s,i,r,o,a,c){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Ul(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(Ve(t.toString()),Ve("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===t&&this.Zo(s,i)},s=>{e(()=>{const i=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,t){const s=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ky extends Fl{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=oy(this.serializer,e),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?be(r.readTime):C.min()}(e);return this.listener.nu(t,s)}su(e){const t={};t.database=Er(this.serializer),t.addTarget=function(i,r){let o;const a=r.target;if(o=pr(a)?{documents:uy(i,a)}:{query:ly(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Rl(i,r.resumeToken);const c=vr(i,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(C.min())>0){o.readTime=zs(i,r.snapshotVersion.toTimestamp());const c=vr(i,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=dy(this.serializer,e);s&&(t.labels=s),this.Wo(t)}iu(e){const t={};t.database=Er(this.serializer),t.removeTarget=e,this.Wo(t)}}class Gy extends Fl{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=cy(e.writeResults,e.commitTime),s=be(e.commitTime);return this.listener.cu(s,t)}return U(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Er(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>ay(this.serializer,s))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(f.UNKNOWN,i.toString())})}vo(e,t,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Qy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ve(t),this.mu=!1):_("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{St(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=k(a);c.vu.add(4),await ss(c),c.bu.set("Unknown"),c.vu.delete(4),await Ei(c)}(this))})}),this.bu=new Qy(s,i)}}async function Ei(n){if(St(n))for(const e of n.Ru)await e(!0)}async function ss(n){for(const e of n.Ru)await e(!1)}function Vl(n,e){const t=k(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Ao(t)?So(t):tn(t).Ko()&&To(t,e))}function $l(n,e){const t=k(n),s=tn(t);t.Au.delete(e),s.Ko()&&Bl(t,e),t.Au.size===0&&(s.Ko()?s.jo():St(t)&&t.bu.set("Unknown"))}function To(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(C.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}tn(n).su(e)}function Bl(n,e){n.Vu.qt(e),tn(n).iu(e)}function So(n){n.Vu=new Zm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),tn(n).start(),n.bu.gu()}function Ao(n){return St(n)&&!tn(n).Uo()&&n.Au.size>0}function St(n){return k(n).vu.size===0}function jl(n){n.Vu=void 0}async function Xy(n){n.Au.forEach((e,t)=>{To(n,e)})}async function Jy(n,e){jl(n),Ao(n)?(n.bu.Iu(e),So(n)):n.bu.set("Unknown")}async function Zy(n,e,t){if(n.bu.set("Online"),e instanceof bl&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(n,e)}catch(s){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ks(n,s)}else if(e instanceof Ts?n.Vu.Ht(e):e instanceof kl?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(C.min()))try{const s=await xl(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(ue.EMPTY_BYTE_STRING,u.snapshotVersion)),Bl(i,a);const l=new Ge(u.target,a,c,u.sequenceNumber);To(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){_("RemoteStore","Failed to raise snapshot:",s),await Ks(n,s)}}async function Ks(n,e,t){if(!ts(e))throw e;n.vu.add(1),await ss(n),n.bu.set("Offline"),t||(t=()=>xl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Ei(n)})}function ql(n,e){return e().catch(t=>Ks(n,t,e))}async function Ii(n){const e=k(n),t=Ze(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ev(e);)try{const i=await Fy(e.localStore,s);if(i===null){e.Eu.length===0&&t.jo();break}s=i.batchId,tv(e,i)}catch(i){await Ks(e,i)}Hl(e)&&zl(e)}function ev(n){return St(n)&&n.Eu.length<10}function tv(n,e){n.Eu.push(e);const t=Ze(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function Hl(n){return St(n)&&!Ze(n).Uo()&&n.Eu.length>0}function zl(n){Ze(n).start()}async function nv(n){Ze(n).hu()}async function sv(n){const e=Ze(n);for(const t of n.Eu)e.uu(t.mutations)}async function iv(n,e,t){const s=n.Eu.shift(),i=mo.from(s,e,t);await ql(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ii(n)}async function rv(n,e){e&&Ze(n).ou&&await async function(t,s){if(i=s.code,Ym(i)&&i!==f.ABORTED){const r=t.Eu.shift();Ze(t).Qo(),await ql(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ii(t)}var i}(n,e),Hl(n)&&zl(n)}async function za(n,e){const t=k(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const s=St(t);t.vu.add(3),await ss(t),s&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Ei(t)}async function ov(n,e){const t=k(n);e?(t.vu.delete(2),await Ei(t)):e||(t.vu.add(2),await ss(t),t.bu.set("Unknown"))}function tn(n){return n.Su||(n.Su=function(e,t,s){const i=k(e);return i.fu(),new Ky(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{uo:Xy.bind(null,n),ao:Jy.bind(null,n),nu:Zy.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),Ao(n)?So(n):n.bu.set("Unknown")):(await n.Su.stop(),jl(n))})),n.Su}function Ze(n){return n.Du||(n.Du=function(e,t,s){const i=k(e);return i.fu(),new Gy(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{uo:nv.bind(null,n),ao:rv.bind(null,n),au:sv.bind(null,n),cu:iv.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await Ii(n)):(await n.Du.stop(),n.Eu.length>0&&(_("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Co(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ko(n,e){if(Ve("AsyncQueue",`${e}: ${n}`),ts(n))return new v(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||E.comparator(t.key,s.key):(t,s)=>E.comparator(t.key,s.key),this.keyedMap=hn(),this.sortedSet=new $(this.comparator)}static emptySet(e){return new xt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new xt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.Cu=new $(E.comparator)}track(e){const t=e.doc.key,s=this.Cu.get(t);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(t):e.type===1&&s.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):S():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ht{constructor(e,t,s,i,r,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Ht(e,t,xt.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.Nu=void 0,this.listeners=[]}}class cv{constructor(){this.queries=new en(e=>dl(e),pi),this.onlineState="Unknown",this.ku=new Set}}async function Kl(n,e){const t=k(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new av),i)try{r.Nu=await t.onListen(s)}catch(o){const a=ko(o,`Initialization of query '${yr(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.Mu(t.onlineState),r.Nu&&e.$u(r.Nu)&&bo(t)}async function Gl(n,e){const t=k(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function uv(n,e){const t=k(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&bo(t)}function lv(n,e,t){const s=k(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function bo(n){n.ku.forEach(e=>{e.next()})}class Wl{constructor(e,t,s){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ht(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ht.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.key=e}}class Yl{constructor(e){this.key=e}}class hv{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=b(),this.mutatedKeys=b(),this.tc=fl(e),this.ec=new xt(this.tc)}get nc(){return this.Yu}sc(e,t){const s=t?t.ic:new Ka,i=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),p=gi(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?y!==I&&(s.track({type:3,doc:p}),w=!0):this.rc(d,p)||(s.track({type:2,doc:p}),w=!0,(c&&this.tc(p,c)>0||u&&this.tc(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),w=!0):d&&!p&&(s.track({type:1,doc:d}),w=!0,(c||u)&&(a=!0)),w&&(p?(o=o.add(p),r=I?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((u,l)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return p(h)-p(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(s);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new Ht(this.query,e.ec,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ka,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=b(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const t=[];return e.forEach(s=>{this.Zu.has(s)||t.push(new Yl(s))}),this.Zu.forEach(s=>{e.has(s)||t.push(new Ql(s))}),t}hc(e){this.Yu=e.ir,this.Zu=b();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Ht.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class dv{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class fv{constructor(e){this.key=e,this.fc=!1}}class pv{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new en(a=>dl(a),pi),this._c=new Map,this.mc=new Set,this.gc=new $(E.comparator),this.yc=new Map,this.Ic=new _o,this.Tc={},this.Ec=new Map,this.Ac=qt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function gv(n,e){const t=Av(n);let s,i;const r=t.wc.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await Vy(t.localStore,$e(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await mv(t,e,s,a==="current",o.resumeToken),t.isPrimaryClient&&Vl(t.remoteStore,o)}return i}async function mv(n,e,t,s,i){n.Rc=(h,d,p)=>async function(y,I,w,P){let V=I.view.sc(w);V.zi&&(V=await ja(y.localStore,I.query,!1).then(({documents:me})=>I.view.sc(me,V)));const L=P&&P.targetChanges.get(I.targetId),M=I.view.applyChanges(V,y.isPrimaryClient,L);return Wa(y,I.targetId,M.cc),M.snapshot}(n,h,d,p);const r=await ja(n.localStore,e,!0),o=new hv(e,r.ir),a=o.sc(r.documents),c=ns.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Wa(n,t,u.cc);const l=new dv(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function yv(n,e){const t=k(n),s=t.wc.get(e),i=t._c.get(s.targetId);if(i.length>1)return t._c.set(s.targetId,i.filter(r=>!pi(r,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Ir(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),$l(t.remoteStore,s.targetId),Tr(t,s.targetId)}).catch(es)):(Tr(t,s.targetId),await Ir(t.localStore,s.targetId,!0))}async function vv(n,e,t){const s=Cv(n);try{const i=await function(r,o){const a=k(r),c=K.now(),u=o.reduce((d,p)=>d.add(p.key),b());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Be(),y=b();return a.Zi.getEntries(d,u).next(I=>{p=I,p.forEach((w,P)=>{P.isValidDocument()||(y=y.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(I=>{l=I;const w=[];for(const P of o){const V=zm(P,l.get(P.key).overlayedDocument);V!=null&&w.push(new Tt(P.key,V,sl(V.value.mapValue),Me.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(I=>{h=I;const w=I.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(d,I.batchId,w)})}).then(()=>({batchId:h.batchId,changes:gl(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new $(D)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(s,i.batchId,t),await is(s,i.changes),await Ii(s.remoteStore)}catch(i){const r=ko(i,"Failed to persist write");t.reject(r)}}async function Xl(n,e){const t=k(n);try{const s=await xy(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.yc.get(r);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?U(o.fc):i.removedDocuments.size>0&&(U(o.fc),o.fc=!1))}),await is(t,s,e)}catch(s){await es(s)}}function Ga(n,e,t){const s=k(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=k(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&bo(a)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wv(n,e,t){const s=k(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.yc.get(e),r=i&&i.key;if(r){let o=new $(E.comparator);o=o.insert(r,se.newNoDocument(r,C.min()));const a=b().add(r),c=new wi(C.min(),new Map,new $(D),o,a);await Xl(s,c),s.gc=s.gc.remove(r),s.yc.delete(e),Ro(s)}else await Ir(s.localStore,e,!1).then(()=>Tr(s,e,t)).catch(es)}async function _v(n,e){const t=k(n),s=e.batch.batchId;try{const i=await My(t.localStore,e);Zl(t,s,null),Jl(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await is(t,i)}catch(i){await es(i)}}async function Ev(n,e,t){const s=k(n);try{const i=await function(r,o){const a=k(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(U(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Zl(s,e,t),Jl(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await is(s,i)}catch(i){await es(i)}}function Jl(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function Zl(n,e,t){const s=k(n);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}function Tr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n._c.get(e))n.wc.delete(s),t&&n.dc.Pc(s,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(s=>{n.Ic.containsKey(s)||eh(n,s)})}function eh(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&($l(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),Ro(n))}function Wa(n,e,t){for(const s of t)s instanceof Ql?(n.Ic.addReference(s.key,e),Iv(n,s)):s instanceof Yl?(_("SyncEngine","Document no longer in limbo: "+s.key),n.Ic.removeReference(s.key,e),n.Ic.containsKey(s.key)||eh(n,s.key)):S()}function Iv(n,e){const t=e.key,s=t.path.canonicalString();n.gc.get(t)||n.mc.has(s)||(_("SyncEngine","New document in limbo: "+t),n.mc.add(s),Ro(n))}function Ro(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new E(F.fromString(e)),s=n.Ac.next();n.yc.set(s,new fv(t)),n.gc=n.gc.insert(t,s),Vl(n.remoteStore,new Ge($e(po(t.path)),s,"TargetPurposeLimboResolution",ao.ct))}}async function is(n,e,t){const s=k(n),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,t).then(u=>{if((u||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Io.Li(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,c){const u=k(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>g.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ts(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,y)}}}(s.localStore,r))}async function Tv(n,e){const t=k(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const s=await Ml(t.localStore,e);t.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,r))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await is(t,s.er)}}function Sv(n,e){const t=k(n),s=t.yc.get(e);if(s&&s.fc)return b().add(s.key);{let i=b();const r=t._c.get(e);if(!r)return i;for(const o of r){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function Av(n){const e=k(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wv.bind(null,e),e.dc.nu=uv.bind(null,e.eventManager),e.dc.Pc=lv.bind(null,e.eventManager),e}function Cv(n){const e=k(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_v.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ev.bind(null,e),e}class Qa{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_i(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Ly(this.persistence,new Oy,e.initialUser,this.serializer)}createPersistence(e){return new Ny(Eo.zs,this.serializer)}createSharedClientState(e){return new By}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ga(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tv.bind(null,this.syncEngine),await ov(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cv}createDatastore(e){const t=_i(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new zy(i));var i;return function(r,o,a,c){return new Wy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Ga(this.syncEngine,a,0),o=Ha.D()?new Ha:new jy,new Yy(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,u){const l=new pv(s,i,r,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=k(e);_("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await ss(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ve("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=ne.UNAUTHENTICATED,this.clientId=el.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{_("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(_("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ko(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ki(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ml(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ya(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Nv(n);_("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>za(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>za(e.remoteStore,r)),n._onlineComponents=e}function Rv(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Nv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ki(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Rv(t))throw t;Ft("Error using user provided cache. Falling back to memory cache: "+t),await Ki(n,new Qa)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Ki(n,new Qa);return n._offlineComponents}async function nh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Ya(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Ya(n,new kv))),n._onlineComponents}function Dv(n){return nh(n).then(e=>e.syncEngine)}async function Sr(n){const e=await nh(n),t=e.eventManager;return t.onListen=gv.bind(null,e.syncEngine),t.onUnlisten=yv.bind(null,e.syncEngine),t}function Ov(n,e,t={}){const s=new Qe;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new th({next:h=>{r.enqueueAndForget(()=>Gl(i,l)),h.fromCache&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Wl(o,u,{includeMetadataChanges:!0,Ku:!0});return Kl(i,l)}(await Sr(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(n,e,t){if(!t)throw new v(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Pv(n,e,t,s){if(e===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ja(n){if(!E.isDocumentKey(n))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ti(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":S()}function xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ti(n);throw new v(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sh((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new v(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new v(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new v(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,t.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,s}}class Si{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Za({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Za(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new nm;switch(t.type){case"firstParty":return new om(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Xa.get(e);t&&(_("ComponentProvider","Removing Datastore"),Xa.delete(e),t.terminate())}(this),Promise.resolve()}}function Lv(n,e,t,s={}){var i;const r=(n=xe(n,Si))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ft("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ne.MOCK_USER;else{a=gc(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new v(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ne(u)}n._authCredentials=new sm(new Zu(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}}class nt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new nt(this.firestore,e,this._query)}}class Un extends nt{constructor(e,t,s){super(e,t,po(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new E(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function i_(n,e){if(n=xe(n,Si),ih("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nt(n,null,function(t){return new Zt(F.emptyPath(),t)}(e))}function r_(n,e,...t){if(n=z(n),arguments.length===1&&(e=el.A()),ih("doc","path",e),n instanceof Si){const s=F.fromString(e,...t);return Ja(s),new pe(n,null,new E(s))}{if(!(n instanceof pe||n instanceof Un))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(F.fromString(e,...t));return Ja(s),new pe(n.firestore,n instanceof Un?n.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Ul(this,"async_queue_retry"),this.Xc=()=>{const t=zi();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=zi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=zi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new Qe;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ts(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ve("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=t,t}enqueueAfterDelay(e,t,s){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=Co.createAndSchedule(this,e,t,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&S()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function ec(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Fn extends Si{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Mv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rh(this),this._firestoreClient.terminate()}}function o_(n,e){const t=typeof n=="object"?n:Rr(),s=typeof n=="string"?n:e||"(default)",i=Ws(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=dc("firestore");r&&Lv(i,...r)}return i}function No(n){return n._firestoreClient||rh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function rh(n){var e,t,s;const i=n._freezeSettings(),r=function(o,a,c,u){return new vm(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,sh(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new bv(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(ue.fromBase64String(e))}catch(t){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new zt(ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=/^__.*__$/;class oh{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Tt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ah(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class ki{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ki(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:s,la:!1});return i.fa(e),i}da(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:s,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Gs(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ah(this.ca)&&xv.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Uv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||_i(e)}ya(e,t,s,i=!1){return new ki({ca:e,methodName:t,ga:s,path:ie.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ch(n){const e=n._freezeSettings(),t=_i(n._databaseId);return new Uv(n._databaseId,!!e.ignoreUndefinedProperties,t)}class bi extends Ci{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bi}}function Fv(n,e,t){return new ki({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Vv extends Ci{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Fv(this,e,!0),s=this.pa.map(r=>nn(r,t)),i=new jt(s);return new Bm(e.path,i)}isEqual(e){return this===e}}function $v(n,e,t,s){const i=n.ya(1,e,t);lh("Data must be an object, but it was:",i,s);const r=[],o=de.empty();It(s,(c,u)=>{const l=Oo(e,c,t);u=z(u);const h=i.da(l);if(u instanceof bi)r.push(l);else{const d=nn(u,h);d!=null&&(r.push(l),o.set(l,d))}});const a=new we(r);return new oh(o,a,i.fieldTransforms)}function Bv(n,e,t,s,i,r){const o=n.ya(1,e,t),a=[tc(e,s,t)],c=[i];if(r.length%2!=0)throw new v(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(tc(e,r[d])),c.push(r[d+1]);const u=[],l=de.empty();for(let d=a.length-1;d>=0;--d)if(!zv(u,a[d])){const p=a[d];let y=c[d];y=z(y);const I=o.da(p);if(y instanceof bi)u.push(p);else{const w=nn(y,I);w!=null&&(u.push(p),l.set(p,w))}}const h=new we(u);return new oh(l,h,o.fieldTransforms)}function jv(n,e,t,s=!1){return nn(t,n.ya(s?4:3,e))}function nn(n,e){if(uh(n=z(n)))return lh("Unsupported field value:",e,n),qv(n,e);if(n instanceof Ci)return function(t,s){if(!ah(s.ca))throw s._a(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=nn(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=z(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Fm(s.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=K.fromDate(t);return{timestampValue:zs(s.serializer,i)}}if(t instanceof K){const i=new K(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:zs(s.serializer,i)}}if(t instanceof Do)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof zt)return{bytesValue:Rl(s.serializer,t._byteString)};if(t instanceof pe){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wo(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s._a(`Unsupported field value: ${Ti(t)}`)}(n,e)}function qv(n,e){const t={};return tl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):It(n,(s,i)=>{const r=nn(i,e.ha(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function uh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof Do||n instanceof zt||n instanceof pe||n instanceof Ci)}function lh(n,e,t){if(!uh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Ti(t);throw s==="an object"?e._a(n+" a custom object"):e._a(n+" "+s)}}function tc(n,e,t){if((e=z(e))instanceof Ai)return e._internalPath;if(typeof e=="string")return Oo(n,e);throw Gs("Field path arguments must be of type string or ",n,!1,void 0,t)}const Hv=new RegExp("[~\\*/\\[\\]]");function Oo(n,e,t){if(e.search(Hv)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ai(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gs(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(f.INVALID_ARGUMENT,a+n+c)}function zv(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Kv extends hh{data(){return super.data()}}function dh(n,e){return typeof e=="string"?Oo(n,e):e instanceof Ai?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new v(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Po{}class Gv extends Po{}function a_(n,e,...t){let s=[];e instanceof Po&&s.push(e),s=s.concat(t),function(i){const r=i.filter(a=>a instanceof Mo).length,o=i.filter(a=>a instanceof Lo).length;if(r>1||r>0&&o>0)throw new v(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Lo extends Gv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Lo(e,t,s)}_apply(e){const t=this._parse(e);return ph(e._query,t),new nt(e.firestore,e.converter,gr(e._query,t))}_parse(e){const t=ch(e.firestore);return function(i,r,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new v(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){sc(l,u);const d=[];for(const p of l)d.push(nc(a,i,p));h={arrayValue:{values:d}}}else h=nc(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||sc(l,u),h=jv(o,r,l,u==="in"||u==="not-in");return H.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Mo extends Po{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Mo(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Ie.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)ph(r,a),r=gr(r,a)}(e._query,t),new nt(e.firestore,e.converter,gr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function nc(n,e,t){if(typeof(t=z(t))=="string"){if(t==="")throw new v(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hl(e)&&t.indexOf("/")!==-1)throw new v(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(F.fromString(t));if(!E.isDocumentKey(s))throw new v(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Aa(n,new E(s))}if(t instanceof pe)return Aa(n,t._key);throw new v(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ti(t)}.`)}function sc(n,e){if(!Array.isArray(n)||n.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ph(n,e){if(e.isInequality()){const s=go(n),i=e.field;if(s!==null&&!s.isEqual(i))throw new v(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=ll(n);r!==null&&Wv(n,i,r)}const t=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new v(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new v(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Wv(n,e,t){if(!t.isEqual(e))throw new v(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Qv{convertValue(e,t="none"){switch(vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return It(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new Do(q(e.latitude),q(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=uo(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Pn(e));default:return null}}convertTimestamp(e){const t=Je(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=F.fromString(e);U(Ll(s));const i=new Ln(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(t)||Ve(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gh extends hh{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(dh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Ss extends gh{data(e={}){return super.data(e)}}class mh{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new fn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ss(this._firestore,this._userDataWriter,s.key,s,new fn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new v(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ss(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ss(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Yv(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Yv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class xo extends Qv{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function c_(n){n=xe(n,nt);const e=xe(n.firestore,Fn),t=No(e),s=new xo(e);return fh(n._query),Ov(t,n._query).then(i=>new mh(e,s,n,i))}function u_(n,e,t,...s){n=xe(n,pe);const i=xe(n.firestore,Fn),r=ch(i);let o;return o=typeof(e=z(e))=="string"||e instanceof Ai?Bv(r,"updateDoc",n._key,e,t,s):$v(r,"updateDoc",n._key,e),Xv(i,[o.toMutation(n._key,Me.exists(!0))])}function l_(n,...e){var t,s,i;n=z(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ec(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ec(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof pe)u=xe(n.firestore,Fn),l=po(n._key.path),c={next:h=>{e[o]&&e[o](Jv(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=xe(n,nt);u=xe(h.firestore,Fn),l=h._query;const d=new xo(u);c={next:p=>{e[o]&&e[o](new mh(u,d,h,p))},error:e[o+1],complete:e[o+2]},fh(n._query)}return function(h,d,p,y){const I=new th(y),w=new Wl(d,I,p);return h.asyncQueue.enqueueAndForget(async()=>Kl(await Sr(h),w)),()=>{I.Dc(),h.asyncQueue.enqueueAndForget(async()=>Gl(await Sr(h),w))}}(No(u),l,a,c)}function Xv(n,e){return function(t,s){const i=new Qe;return t.asyncQueue.enqueueAndForget(async()=>vv(await Dv(t),s,i)),i.promise}(No(n),e)}function Jv(n,e,t){const s=t.docs.get(e._key),i=new xo(n);return new gh(n,i,e._key,s,new fn(t.hasPendingWrites,t.fromCache),e.converter)}function h_(...n){return new Vv("arrayUnion",n)}(function(n,e=!0){(function(t){Jt=t})(_t),ft(new Ye("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new Fn(new im(t.getProvider("auth-internal")),new cm(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Le(_a,"3.13.0",n),Le(_a,"3.13.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="firebasestorage.googleapis.com",vh="storageBucket",Zv=2*60*1e3,ew=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Ne{constructor(e,t,s=0){super(Gi(e),`Firebase Storage: ${t} (${Gi(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,X.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Q;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Q||(Q={}));function Gi(n){return"storage/"+n}function wh(){const n="An unknown error occurred, please check the error payload for server response.";return new X(Q.UNKNOWN,n)}function tw(n){return new X(Q.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function nw(n){return new X(Q.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function sw(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new X(Q.UNAUTHENTICATED,n)}function iw(){return new X(Q.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rw(n){return new X(Q.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ow(){return new X(Q.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aw(){return new X(Q.CANCELED,"User canceled the upload/download.")}function cw(n){return new X(Q.INVALID_URL,"Invalid URL '"+n+"'.")}function uw(n){return new X(Q.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function lw(){return new X(Q.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vh+"' property when initializing the app?")}function hw(){return new X(Q.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ar(n){return new X(Q.INVALID_ARGUMENT,n)}function _h(){return new X(Q.APP_DELETED,"The Firebase app was deleted.")}function dw(n){return new X(Q.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function on(n){throw new X(Q.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=fe.makeFromUrl(e,t)}catch{return new fe(e,"")}if(s.path==="")return s;throw uw(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},I=t===yh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,w="([^?#]*)",P=new RegExp(`^https?://${I}/${i}/${w}`,"i"),L=[{regex:a,indices:c,postModify:r},{regex:p,indices:y,postModify:u},{regex:P,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<L.length;M++){const me=L[M],ve=me.regex.exec(e);if(ve){const st=ve[me.indices.bucket];let it=ve[me.indices.path];it||(it=""),s=new fe(st,it),me.postModify(s);break}}if(s==null)throw cw(e);return s}}class fw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,n(p,c())},w)}function d(){r&&clearTimeout(r)}function p(w,...P){if(u){d();return}if(w){d(),l.call(null,w,...P);return}if(c()||o){d(),l.call(null,w,...P);return}s<64&&(s*=2);let L;a===1?(a=2,L=0):L=(s+Math.random())*1e3,h(L)}let y=!1;function I(w){y||(y=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,I(!0)},t),I}function gw(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n){return n!==void 0}function yw(n){return typeof n=="object"&&!Array.isArray(n)}function Eh(n){return typeof n=="string"||n instanceof String}function ic(n,e,t,s){if(s<e)throw Ar(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Ar(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Th(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ht||(ht={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t,s,i,r,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new gs(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ht.NO_ERROR,c=r.getStatus();if(!a||vw(c,this.additionalRetryCodes_)&&this.retry){const l=r.getErrorCode()===ht.ABORT;s(!1,new gs(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new gs(u,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());mw(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=wh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?_h():aw();o(c)}else{const c=ow();o(c)}};this.canceled_?t(!1,new gs(!1,null,!0)):this.backoffId_=pw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gs{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function _w(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Ew(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Iw(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Tw(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Sw(n,e,t,s,i,r,o=!0){const a=Th(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return Iw(u,e),_w(u,t),Ew(u,r),Tw(u,s),new ww(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(n){let e;try{e=JSON.parse(n)}catch{return null}return yw(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Cw(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Ah(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(n,e){return e}class le{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||kw}}let ms=null;function bw(n){return!Eh(n)||n.length<2?n:Ah(n)}function Rw(){if(ms)return ms;const n=[];n.push(new le("bucket")),n.push(new le("generation")),n.push(new le("metageneration")),n.push(new le("name","fullPath",!0));function e(r,o){return bw(o)}const t=new le("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new le("size");return i.xform=s,n.push(i),n.push(new le("timeCreated")),n.push(new le("updated")),n.push(new le("md5Hash",null,!0)),n.push(new le("cacheControl",null,!0)),n.push(new le("contentDisposition",null,!0)),n.push(new le("contentEncoding",null,!0)),n.push(new le("contentLanguage",null,!0)),n.push(new le("contentType",null,!0)),n.push(new le("metadata","customMetadata",!0)),ms=n,ms}function Nw(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new fe(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function Dw(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return Nw(s,n),s}function Ow(n,e,t){const s=Sh(e);return s===null?null:Dw(n,s,t)}function Pw(n,e,t,s){const i=Sh(e);if(i===null||!Eh(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const l=n.bucket,h=n.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Ih(d,t,s),y=Th({alt:"media",token:u});return p+y})[0]}class Lw{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(n){if(!n)throw wh()}function xw(n,e){function t(s,i){const r=Ow(n,i,e);return Mw(r!==null),Pw(r,i,n.host,n._protocol)}return t}function Uw(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=iw():i=sw():t.getStatus()===402?i=nw(n.bucket):t.getStatus()===403?i=rw(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Fw(n){const e=Uw(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=tw(n.path)),r.serverResponse=i.serverResponse,r}return t}function Vw(n,e,t){const s=e.fullServerUrl(),i=Ih(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Lw(i,r,xw(n,t),o);return a.errorHandler=Fw(e),a}class $w{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ht.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ht.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ht.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw on("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw on("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw on("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw on("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw on("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Bw extends $w{initXhr(){this.xhr_.responseType="text"}}function jw(){return new Bw}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this._service=e,t instanceof fe?this._location=t:this._location=fe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new wt(e,t)}get root(){const e=new fe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ah(this._location.path)}get storage(){return this._service}get parent(){const e=Aw(this._location.path);if(e===null)return null;const t=new fe(this._location.bucket,e);return new wt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw dw(e)}}function qw(n){n._throwIfRoot("getDownloadURL");const e=Vw(n.storage,n._location,Rw());return n.storage.makeRequestWithTokens(e,jw).then(t=>{if(t===null)throw hw();return t})}function Hw(n,e){const t=Cw(n._location.path,e),s=new fe(n._location.bucket,t);return new wt(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(n){return/^[A-Za-z]+:\/\//.test(n)}function Kw(n,e){return new wt(n,e)}function Ch(n,e){if(n instanceof Uo){const t=n;if(t._bucket==null)throw lw();const s=new wt(t,t._bucket);return e!=null?Ch(s,e):s}else return e!==void 0?Hw(n,e):n}function Gw(n,e){if(e&&zw(e)){if(n instanceof Uo)return Kw(n,e);throw Ar("To use ref(service, url), the first argument must be a Storage instance.")}else return Ch(n,e)}function rc(n,e){const t=e==null?void 0:e[vh];return t==null?null:fe.makeFromBucketSpec(t,n)}function Ww(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:gc(i,n.app.options.projectId))}class Uo{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=yh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Zv,this._maxUploadRetryTime=ew,this._requests=new Set,i!=null?this._bucket=fe.makeFromBucketSpec(i,this._host):this._bucket=rc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fe.makeFromBucketSpec(this._url,e):this._bucket=rc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ic("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ic("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wt(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new fw(_h());{const o=Sw(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const oc="@firebase/storage",ac="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="storage";function d_(n){return n=z(n),qw(n)}function f_(n,e){return n=z(n),Gw(n,e)}function p_(n=Rr(),e){n=z(n);const s=Ws(n,kh).getImmediate({identifier:e}),i=dc("storage");return i&&Qw(s,...i),s}function Qw(n,e,t,s={}){Ww(n,e,t,s)}function Yw(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Uo(t,s,i,e,_t)}function Xw(){ft(new Ye(kh,Yw,"PUBLIC").setMultipleInstances(!0)),Le(oc,ac,""),Le(oc,ac,"esm2017")}Xw();export{l_ as I,o_ as P,h_ as Q,a_ as R,p_ as a,r_ as b,d_ as c,c_ as d,f_ as e,u_ as f,s_ as g,t_ as h,xd as i,e_ as j,i_ as m,Le as r,n_ as s};
