/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={209:e=>{e.exports={getFooterCopy:function(e){return!0===e?"Holberton School":"Holberton School main dashboard"},getFullYear:function(){return(new Date).getFullYear()},getLatestNotification:function(){return"<strong>Urgent requirement</strong> - complete by EOD"}}},22:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(15),l=n.n(r),i=n(645),o=n.n(i)()(l());o.push([e.id,":root {\n  --holberton-red: #e1484c;\n}\n\nbody {\n  max-width: 90%;\n  margin: 0 auto;\n}\n\ndiv {\n  padding: 2px 8px;\n}\n\n.App {\n  position: relative;\n  min-height: 100vh;\n}\n\n.App-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  border-bottom: 3px solid var(--holberton-red);\n}\n\n.App-header img {\n  width: 150px;\n}\n\n.App-header h1 {\n  margin: auto auto auto 0;\n  color: var(--holberton-red);\n}\n\n.App-body {\n  padding: 36px 24px;\n}\n\n.App-body input {\n  margin: 0 16px 0 8px;\n}\n\n.App-footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.App-footer p {\n  text-align: center;\n  border-top: 3px solid var(--holberton-red);\n  padding: 16px 0;\n}","",{version:3,sources:["webpack://./src/App/App.css"],names:[],mappings:"AAAA;EACE,wBAAwB;AAC1B;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,6CAA6C;AAC/C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,0CAA0C;EAC1C,eAAe;AACjB",sourcesContent:[":root {\n  --holberton-red: #e1484c;\n}\n\nbody {\n  max-width: 90%;\n  margin: 0 auto;\n}\n\ndiv {\n  padding: 2px 8px;\n}\n\n.App {\n  position: relative;\n  min-height: 100vh;\n}\n\n.App-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  border-bottom: 3px solid var(--holberton-red);\n}\n\n.App-header img {\n  width: 150px;\n}\n\n.App-header h1 {\n  margin: auto auto auto 0;\n  color: var(--holberton-red);\n}\n\n.App-body {\n  padding: 36px 24px;\n}\n\n.App-body input {\n  margin: 0 16px 0 8px;\n}\n\n.App-footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.App-footer p {\n  text-align: center;\n  border-top: 3px solid var(--holberton-red);\n  padding: 16px 0;\n}"],sourceRoot:""}]);const a=o},842:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(15),l=n.n(r),i=n(645),o=n.n(i)()(l());o.push([e.id,'.Notifications {\r\n\tborder: 3px dotted var(--holberton-red);\r\n\tpadding: 6px 12px;\r\n\tposition: relative;\r\n\tmargin-top: 12px;\r\n}\r\n\r\nli[data-priority="default"] {\r\n\tcolor: blue;\r\n}\r\n\r\nli[data-priority="urgent"] {\r\n\tcolor: var(--holberton-red);\r\n}',"",{version:3,sources:["webpack://./src/Notifications/Notifications.css"],names:[],mappings:"AAAA;CACC,uCAAuC;CACvC,iBAAiB;CACjB,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,2BAA2B;AAC5B",sourcesContent:['.Notifications {\r\n\tborder: 3px dotted var(--holberton-red);\r\n\tpadding: 6px 12px;\r\n\tposition: relative;\r\n\tmargin-top: 12px;\r\n}\r\n\r\nli[data-priority="default"] {\r\n\tcolor: blue;\r\n}\r\n\r\nli[data-priority="urgent"] {\r\n\tcolor: var(--holberton-red);\r\n}'],sourceRoot:""}]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var l={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(l[o]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&l[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,l=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,l,i=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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