!function(e,o,n,d,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t="function"==typeof i.parcelRequire4442&&i.parcelRequire4442,l=t.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(o,n){if(!l[o]){if(!e[o]){var d="function"==typeof i.parcelRequire4442&&i.parcelRequire4442;if(!n&&d)return d(o,!0);if(t)return t(o,!0);if(c&&"string"==typeof o)return c(o);var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}a.resolve=function(n){var d=e[o][1][n];return null!=d?d:n},a.cache={};var f=l[o]=new u.Module(o);e[o][0].call(f.exports,a,f,f.exports,this)}return l[o].exports;function a(e){var o=a.resolve(e);return!1===o?{}:u(o)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=t,u.register=function(o,n){e[o]=[function(e,o){o.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return i.parcelRequire4442}}),i.parcelRequire4442=u;for(var f=0;f<o.length;f++)u(o[f]);var a=u(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=a:"function"==typeof define&&define.amd&&define((function(){return a}))}({e2GVl:[function(e,o,n){importScripts("https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js");var d=new BroadcastChannel("selfies_channel"),r={decoder:function(e){return null},encoder:function(e){return null},pyodideLoaded:"loading",selfiesLoaded:"loading"};console.log("SELFIE WORKER: Started"),importScripts("https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"),loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"}).then((function(e){r.pyodideLoaded="loaded",e.loadPackage("micropip").then((function(){e.runPythonAsync("\n            import micropip\n            await micropip.install('selfies==".concat(2,"')\n            from selfies import encoder, decoder\n        "),(function(e){r.pyodideLoaded="failed",r.selfiesLoaded="failed"})).then((function(){r.selfiesLoaded="loaded";var o=e.globals.get("decoder");r.decoder=function(e){try{return o(e)}catch(e){return console.log(e),null}};var n=e.globals.get("encoder");r.encoder=function(e){try{return n(e)}catch(e){return console.log(e),null}},console.log("Loaded selfies")}))}),(function(e){r.selfiesLoaded="failed"}))})),d.onmessage=function(e){var o=e.data,n=o[0],i=o[1],t="";"loading-status"===n?t={pyodide:r.pyodideLoaded,selfies:r.selfiesLoaded}:"encoder"===n?t=r.encoder(o[2]):"decoder"===n&&(t=r.decoder(o[2])),d.postMessage([n,i,t])}},{}]},["e2GVl"],"e2GVl");
//# sourceMappingURL=selfies_worker.bbd75952.js.map