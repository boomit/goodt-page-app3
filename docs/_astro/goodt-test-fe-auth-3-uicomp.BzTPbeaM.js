var s={exports:{}},r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function i(l,e,o){var a=null;if(o!==void 0&&(a=""+o),e.key!==void 0&&(a=""+e.key),"key"in e){o={};for(var n in e)n!=="key"&&(o[n]=e[n])}else o=e;return e=o.ref,{$$typeof:t,type:l,key:a,ref:e!==void 0?e:null,props:o}}r.Fragment=f;r.jsx=i;r.jsxs=i;s.exports=r;var v=s.exports;const y=()=>v.jsx("div",{children:"Hello, test-fe-auth-3 UI Library!"});export{y as Comp};
