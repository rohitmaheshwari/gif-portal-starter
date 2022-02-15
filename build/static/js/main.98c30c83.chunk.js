(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){},108:function(e,t){},111:function(e,t){},133:function(e,t){},134:function(e,t){},158:function(e,t,n){"use strict";n.r(t);var c=n(24),r=n.n(c),a=n(95),s=n.n(a),o=(n(105),n(3)),i=n(9),u=n(1),l=n.n(u),f=n.p+"static/media/twitter-logo.4844b78f.svg",p=(n(107),n(8)),b=n(25),d=n(53),m=n(99),g=n(15),j=b.d.SystemProgram,v=(b.d.Keypair,Object.values(m._keypair.secretKey)),h=new Uint8Array(v),x=b.d.Keypair.fromSecretKey(h),y=new p.PublicKey(d.metadata.address),w=Object(p.clusterApiUrl)("devnet"),O="processed",k="_buildspace",S="https://twitter.com/".concat(k),N=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),u=s[0],m=s[1],v=Object(c.useState)([]),h=Object(i.a)(v,2),N=h[0],K=h[1];Object(c.useEffect)((function(){var e=function(){A()};return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]);var G=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=E(),n=new b.a(d,y,t),e.next=5,n.account.baseAccount.fetch(x.publicKey);case 5:c=e.sent,console.log("Got the account",c),K(c.gifList),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getGifList: ",e.t0),K(null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){n&&(console.log("Fetching GIF list..."),G())}),[n]);var A=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=13;break}if(!n.isPhantom){e.next=12;break}return console.log("Phantom Wallet Found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:c=e.sent,console.log("Connected with public key: ",c.publicKey.toString()),r(c.publicKey.toString()),e.next=13;break;case 12:console.log("Solana object not found. Get a phantom wallet");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:c=e.sent,console.log("Connected with public key: ",c.publicKey.toString()),r(c.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e){var t=e.target.value;m(t)},E=function(){var e=new p.Connection(w,O);return new b.b(e,window.solana,O)},P=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=E(),n=new b.a(d,y,t),console.log("ping"),e.next=6,n.rpc.startStuffOff({accounts:{baseAccount:x.publicKey,user:t.wallet.publicKey,systemProgram:j.programId},signers:[x]});case 6:return console.log("Created a new BaseAccount w/ address:",x.publicKey.toString()),e.next=9,G();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==u.length){e.next=3;break}return console.log("No gif link given!"),e.abrupt("return");case 3:return m(""),console.log("Gif link:",u),e.prev=5,t=E(),n=new b.a(d,y,t),e.next=10,n.rpc.addGif(u,{accounts:{baseAccount:x.publicKey,user:t.wallet.publicKey}});case 10:return console.log("GIF successfully sent to program",u),e.next=13,G();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log("Error sending GIF:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"header-container",children:[Object(g.jsx)("p",{className:"header",children:"\ud83d\uddbc GIF Portal"}),Object(g.jsx)("p",{className:"sub-text",children:"View your GIF collection in the metaverse \u2728"})]}),!n&&Object(g.jsx)("button",{className:"cta-button connect-wallet-button",onClick:function(){return I()},children:"Connect to Wallet"}),n&&(null===N?Object(g.jsx)("div",{className:"connected-container",children:Object(g.jsx)("button",{className:"cta-button submit-gif-button",onClick:P,children:"Do One-Time Initialization For GIF Program Account"})}):Object(g.jsxs)("div",{className:"connected-container",children:[Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F()},children:[Object(g.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:u,onChange:C}),Object(g.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(g.jsx)("div",{className:"gif-grid",children:N.map((function(e,t){return Object(g.jsxs)("div",{className:"gif-item",children:[Object(g.jsx)("img",{className:"gif",src:e.gifLink}),Object(g.jsx)("p",{style:{color:"white",fontSize:"10px"},children:e.userAddress.toString()})]},t)}))})]})),Object(g.jsxs)("div",{className:"footer-container",children:[Object(g.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:f}),Object(g.jsx)("a",{className:"footer-text",href:S,target:"_blank",rel:"noreferrer",children:"built on @".concat(k)})]})]})})};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root"))},53:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"myepicproject","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"}]}}],"metadata":{"address":"CtE2JJNwh3Pv6vc2xXHbvgCJgmN7w3ZnP1SG7mnRNHGM"}}')},99:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":24,"1":96,"2":235,"3":105,"4":254,"5":37,"6":30,"7":24,"8":28,"9":235,"10":36,"11":75,"12":73,"13":51,"14":21,"15":108,"16":36,"17":96,"18":208,"19":198,"20":127,"21":90,"22":84,"23":104,"24":60,"25":127,"26":114,"27":93,"28":211,"29":239,"30":234,"31":11},"secretKey":{"0":157,"1":91,"2":123,"3":20,"4":212,"5":224,"6":162,"7":236,"8":99,"9":238,"10":81,"11":164,"12":174,"13":162,"14":57,"15":53,"16":198,"17":158,"18":90,"19":190,"20":50,"21":20,"22":220,"23":127,"24":252,"25":18,"26":118,"27":165,"28":187,"29":202,"30":137,"31":154,"32":24,"33":96,"34":235,"35":105,"36":254,"37":37,"38":30,"39":24,"40":28,"41":235,"42":36,"43":75,"44":73,"45":51,"46":21,"47":108,"48":36,"49":96,"50":208,"51":198,"52":127,"53":90,"54":84,"55":104,"56":60,"57":127,"58":114,"59":93,"60":211,"61":239,"62":234,"63":11}}}')}},[[158,1,2]]]);
//# sourceMappingURL=main.98c30c83.chunk.js.map