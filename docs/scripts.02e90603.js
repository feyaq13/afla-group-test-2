parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"imtx":[function(require,module,exports) {
function e(e,n){return s(e)||r(e,n)||a(e,n)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(o){r=!0,s=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw s}}return a}}function s(e){if(Array.isArray(e))return e}window.onload=function(){var t,a=[{name:"Выручка",cssClass:"revenue",visible:!1,data:[500521,480521,480521,620999,340559,480521,340559,340559]},{name:"Наличные",cssClass:"cash",visible:!1,data:[3e5,3e5,3e5,3e5,3e5,3e5,3e5,3e5]},{name:"Безналичный расчет",cssClass:"cashless",visible:!1,data:[1e5,1e5,1e5,1e5,1e5,1e5,1e5,1e5]},{name:"Кредитные карты",cssClass:"credit",visible:!1,data:[100521,100521,100521,100521,100521,100521,100521,100521]},{name:"Средний чек, руб",cssClass:"average-check",visible:!1,data:[1300,900,900,900,900,900,900,900]},{name:"Средний гость, руб",cssClass:"average-guest",visible:!1,data:[1200,800,800,800,800,800,800,800]},{name:"Удаление из чека (после оплаты), руб",cssClass:"deletion-from-check",visible:!1,data:[1e3,1100,900,900,900,900,900,900]},{name:"Удаление из счета (до оплаты), руб",cssClass:"deletion-from-account",visible:!1,data:[1300,1300,900,900,900,900,900,900]},{name:"Количество чеков",cssClass:"number-of-checks",visible:!1,data:[34,36,34,34,34,34,34,34]},{name:"Количество гостей",cssClass:"number-of-guests",visible:!1,data:[34,36,32,32,32,32,32,32]}],n=document.createElement("tr"),r=document.createElement("td");function s(){t=Highcharts.chart(r,{title:{text:"Название"},subtitle:{text:"Подпись"},yAxis:{title:{text:"Number of"}},xAxis:{accessibility:{rangeDescription:"Range: 1 to 7"}},series:a,legend:{enabled:!1},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:1}},responsive:{rules:[{condition:{maxWidth:300},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}})}n.classList.add("revenue-chart"),n.appendChild(r),r.colSpan=5,s();var i=document.querySelector("table");function l(e){return Number.parseInt(e).toLocaleString("ru-RU",{useGrouping:!0})}i.appendChild(n),a.forEach(function(t){var a=e(t.data,7),n=a[0],r=a[1],s=(a[2],a[3],a[4],a[5],a[6]),o=document.createElement("tr");o.classList.add(t.cssClass),o._record=t,i.appendChild(o);var c=document.createElement("th");c.innerText=t.name,o.appendChild(c);var d=document.createElement("td");d.classList.add("current-day"),d.innerText=l(n),o.appendChild(d);var u=document.createElement("td");u.innerText=l(r),o.appendChild(u);var m=document.createElement("td");m.classList.add("percentage-of-deviation");var v=100*n/s-100;v<0?m.classList.add("negative"):v>0&&m.classList.add("positive"),m.innerText=v.toFixed(0)+"%",o.appendChild(m);var p=document.createElement("td");p.innerText=l(s),o.appendChild(p)}),i.addEventListener("click",function(e){var t=e.target.closest("tr");t._record.visible=!0,t._record,s(),console.dir(e.target.closest("tr"))});document.getElementsByClassName("revenue")[0];window.chard=t};
},{}]},{},["imtx"], null)
//# sourceMappingURL=scripts.02e90603.js.map