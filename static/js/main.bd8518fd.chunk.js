(this["webpackJsonptsmc-chatbot"]=this["webpackJsonptsmc-chatbot"]||[]).push([[0],{17:function(e,t,a){},23:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(19),o=a.n(i),c=(a(28),a(12)),l=a(13),u=a(15),h=a(14),r=(a(17),a(6)),m=a(16),b=a.n(m),d={apiKey:"AIzaSyB_kBV5b09S5SWwz7-f73EcpWtzNX9mCo4",authDomain:"tsmc-chatbot.firebaseapp.com",databaseURL:"https://tsmc-chatbot.firebaseio.com",projectId:"tsmc-chatbot",storageBucket:"tsmc-chatbot.appspot.com",messagingSenderId:"518091462698",appId:"1:518091462698:web:21bd8b0eb89cfea4800b53"},p=a(20),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={chatBotNumber:25,chatContent:{},value:"",userName:"",pageTitle:"LEEMI",lastTimeFocus:""},n.handleChangeName=n.handleChangeName.bind(Object(r.a)(n)),n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(r.a)(n)),n.handleFocus=n.handleFocus.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(Date.now());b.a.apps.length||(this.firebaseApp=b.a.initializeApp(d),this.database=this.firebaseApp.database(),this.database.ref("/Test").limitToLast(this.state.chatBotNumber).on("value",(function(t){e.setState({chatContent:t.val(),lastTimeFocus:t.val()[Object.keys(t.val())[e.state.chatBotNumber-1]].timestamp},(function(){var e=localStorage.getItem("lastTimeFocus");console.log("egfegwww"),e<this.state.lastTimeFocus&&(console.log("egfeg"),this.setState({pageTitle:"(*) notification "}))}))})))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleChangeName",value:function(e){this.setState({userName:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.value&&""!==this.state.value&&this.sendMessege()}},{key:"handleKeyDown",value:function(e){"Enter"===e.key&&""!==this.state.value&&this.sendMessege()}},{key:"handleFocus",value:function(e){localStorage.setItem("lastTimeFocus",this.state.lastTimeFocus),this.setState({pageTitle:"LEEMI"})}},{key:"sendMessege",value:function(){var e=Date.now(),t=new Date;this.firebaseApp.database().ref("/Test").push({content:this.state.userName+": "+this.state.value,time:t.getFullYear()+"/"+(parseInt(t.getMonth())+1)+"/"+t.getDate()+"-"+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),timestamp:e,user:this.state.userName}),localStorage.setItem("lastTimeFocus",e),this.setState({value:""})}},{key:"isUser",value:function(e){return e===this.state.userName?"contentRight":"contentLeft"}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.chatContent).map((function(t){return s.a.createElement("p",{value:t,className:e.isUser(e.state.chatContent[t].user)},e.state.chatContent[t].content,s.a.createElement("span",{className:"chatTime"},e.state.chatContent[t].time))}));return s.a.createElement("div",{className:"App"},s.a.createElement(p.a,null,s.a.createElement("title",null,this.state.pageTitle)),s.a.createElement("div",{className:"chatContentBox"},t),s.a.createElement("div",{className:"chatSubmitBox"},s.a.createElement("input",{type:"text",value:this.state.userName,onChange:this.handleChangeName}),s.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,onKeyPress:this.handleKeyDown,onFocus:this.handleFocus}),s.a.createElement("input",{type:"submit",value:"Submit",onClick:this.handleSubmit})))}}]),a}(s.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,null))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.bd8518fd.chunk.js.map