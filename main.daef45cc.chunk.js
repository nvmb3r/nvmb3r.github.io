(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{75:function(e,t,s){},76:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),a=s(30),i=s.n(a),o=(s(75),s(14)),c=s(21),d=s(22),l=s(26),u=s(25),h=(s(76),s(31)),m=s(130),p=s(125),g=s(2),j=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e))._handle_new_MessageToken=function(e){n.props.updateMessageToken(e)},n.handle_post_message=function(e){n.toPost=e.target.value},n._handleKeyUp=function(e){if("Enter"===e.key&&n.toPost){var t=new XMLHttpRequest;t.open("POST",n.props.serverPath+"message"),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.setRequestHeader("Authorization","Bearer "+n.props.message_token),t.send("message="+n.toPost),t.onload=function(){if(201===t.status){e.target.value="";var s=t.getResponseHeader("Token");this._handle_new_MessageToken(s)}else{alert("Hehehehe Good try buddy."),e.target.value="";var n=t.getResponseHeader("Token");this._handle_new_MessageToken(n)}}.bind(Object(h.a)(n))}},n._handle_new_MessageToken=n._handle_new_MessageToken.bind(Object(h.a)(n)),n}return Object(d.a)(s,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(m.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(g.jsx)(p.a,{fullWidth:!0,label:"SEND A MESSAGE :)",id:"fullWidth",variant:"outlined",onChange:this.handle_post_message,onKeyUp:this._handleKeyUp,style:{marginLeft:20,marginRight:20}})})})}}]),s}(n.Component),v=s(126),f=s(129),b=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).username="",n.password="",n.serverPath="",n.username_input=function(e){n.username=e.target.value},n.password_input=function(e){n.password=e.target.value},n.server_input=function(e){n.serverPath=e.target.value,console.log("ServerPath: ",n.serverPath)},n.handleLogInState=n.handleLogInState.bind(Object(h.a)(n)),n.logIn=n.logIn.bind(Object(h.a)(n)),n}return Object(d.a)(s,[{key:"handleLogInState",value:function(e,t,s){console.log("InsideHandleLogInState"),this.props.handleLogInState(e,t,s)}},{key:"logIn",value:function(){if(this.serverPath||(this.serverPath="http://localhost:4567/"),this.username&&this.password&&this.serverPath){var e=new XMLHttpRequest;e.open("POST",this.serverPath+"/login"),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("username="+this.username+"&password="+this.password),e.onload=function(){201===e.status?(this.data=JSON.parse(e.responseText),this.props.handleLogInState(!0,this.data,this.serverPath)):alert("Nooopeeeee.")}.bind(this)}}},{key:"render",value:function(){return Object(g.jsx)(f.a,{className:"container",style:{justifyContent:"center"},children:Object(g.jsxs)(m.a,{id:"box",component:"form",sx:{"& .MuiTextField-root":{m:1,width:"35vh",display:"flex",justifyContent:"center",flexWrap:"wrap"}},noValidate:!0,autoComplete:"off",children:[Object(g.jsx)("div",{children:Object(g.jsx)(p.a,{required:!0,id:"server-path-input",label:"Required",defaultValue:"http://localhost:4567/",helperText:"Address of chat server",onChange:this.server_input})}),Object(g.jsx)("div",{children:Object(g.jsx)(p.a,{required:!0,id:"username-input",label:"Required",defaultValue:"",helperText:"Username",onChange:this.username_input})}),Object(g.jsx)("div",{children:Object(g.jsx)(p.a,{required:!0,id:"password-input",label:"Required",defaultValue:"",helperText:"Password",onChange:this.password_input})}),Object(g.jsx)("div",{children:Object(g.jsx)(v.a,{variant:"contained",style:{width:"100%"},onClick:this.logIn,children:"Login"})})]})})}}]),s}(n.Component),y=s(127),O=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).date_format=function(e){var t=new Date(1e3*e);return t.toLocaleDateString("en-US")+" "+t.toLocaleTimeString("en-US")},n.scrollToBottom=function(){n.messagesEnd.scrollIntoView({behavior:"smooth"})},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=[];return this.props.messages.forEach((function(s){var n=Object.keys(s)[0],r=JSON.parse(s[n]);switch(n){case"ServerStatus":var a=Object(g.jsx)("div",{children:Object(g.jsx)(y.a,{style:{border:"1px solid pink"},primary:r.status,secondary:e.date_format(r.created)+" --- From: Server"},s+Math.random())},s+Math.random());t.push(a);break;case"Message":var i=Object(g.jsx)("div",{children:Object(g.jsx)(y.a,{style:{border:"1px solid pink"},primary:r.message,secondary:e.date_format(r.created)+" --- From: "+r.user},s+Math.random())},s+Math.random());t.push(i);break;case"Join":var o=Object(g.jsx)("div",{children:Object(g.jsx)(y.a,{style:{border:"1px solid pink"},primary:"User: "+r.user+" just joined the chat!",secondary:e.date_format(r.created)+" --- From: Server"},s+Math.random())},s+Math.random());t.push(o);break;case"Part":var c=Object(g.jsx)("div",{children:Object(g.jsx)(y.a,{style:{border:"1px solid pink"},primary:"User: "+r.user+" is no longer with us :(",secondary:e.date_format(r.created)},s+Math.random())},s+Math.random());t.push(c)}})),Object(g.jsx)("div",{style:{maxWidth:"100%",justifyContent:"center",alignItems:"center",marginLeft:50,marginRight:50},children:Object(g.jsxs)("ul",{id:"messagesOrderedList",children:[t,Object(g.jsx)("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}})]})})}}]),s}(n.Component),_=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e)}return Object(d.a)(s,[{key:"render",value:function(){var e=[];return this.props.userList&&(e=this.props.userList.map((function(e){return Object(g.jsxs)("li",{children:[" ",e," "]},e)}))),Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{style:{textAlign:"center"},children:" Online Users "}),Object(g.jsx)("ul",{id:"userList",style:{textAlign:"center",listStyleType:"none",padding:0,border:"1px solid black",marginLeft:"25%",marginRight:"25%"},children:e})]})}}]),s}(n.Component),x=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).date_format=function(e){var t=new Date(1e3*e);return t.toLocaleDateString("en-US")+" "+t.toLocaleTimeString("en-US")},n.updateMessageToken=function(e){n.setState({message_token:e})},n.initStream=function(){n.server=new EventSource(n.state.serverPath+"stream/"+n.state.stream_token),n.server.onopen=function(){n.myHeader.current.style="background: green;"},n.server.onerror=function(e){console.log("Something went wrong with opening a EventSource stream, disconnecting the user now."),console.log("About to close the  stream..."),2===e.target.readyState?(n.server.close(),n.setState({isLoggedIn:!1,message_token:null,stream_token:null,userList:[],mess_history:[]})):0===e.target.readyState&&(n.myHeader.current.style="background: #ff7575;")},n.server.addEventListener("Users",(function(e){var t=JSON.parse(e.data).users;n.setState({userList:t})})),n.server.addEventListener("Join",(function(e){var t=JSON.parse(e.data).user;n.state.mess_history.push({Join:e.data});var s=[];(s=n.state.userList.map((function(e){return e}))).push(t),n.setState({mess_history:n.state.mess_history,userList:Object(o.a)(new Set(s))})})),n.server.addEventListener("ServerStatus",(function(e){n.state.mess_history.push({ServerStatus:e.data}),n.setState({mess_history:n.state.mess_history})})),n.server.addEventListener("Message",(function(e){n.state.mess_history.push({Message:e.data}),n.setState({mess_history:n.state.mess_history})})),n.server.addEventListener("Part",(function(e){var t=JSON.parse(e.data).user;n.state.mess_history.push({Part:e.data});var s;s=n.state.userList.map((function(e){if(e!==t)return e})),n.setState({mess_history:n.state.mess_history,userList:s})})),n.server.addEventListener("Disconnect",(function(e){n.server.close(),n.myHeader.current.style="background: #ff7575;",n.setState({isLoggedIn:!1,message_token:null,stream_token:null,userList:[],mess_history:[]})}))},n.handleLogInState=function(e,t,s){n.setState({isLoggedIn:e,message_token:t.message_token,stream_token:t.stream_token,serverPath:s}),n.initStream()},n.UserListElement=r.a.createRef(),n.myHeader=r.a.createRef(),n.state={isLoggedIn:!1,message_token:!1,stream_token:!1,userList:[],mess_history:[]},n}return Object(d.a)(s,[{key:"render",value:function(){return this.state.isLoggedIn?this.loginWindow=Object(g.jsxs)("div",{id:"central-part",children:[Object(g.jsx)(_,{userList:this.state.userList,ref:this.UserListElement},this.state.userList),Object(g.jsx)(O,{messages:this.state.mess_history}),Object(g.jsx)(j,{updateMessageToken:this.updateMessageToken,message_token:this.state.message_token,serverPath:this.state.serverPath})]}):this.loginWindow=Object(g.jsx)("div",{id:"central-part",children:Object(g.jsx)(b,{handleLogInState:this.handleLogInState.bind(this)})}),Object(g.jsxs)("div",{id:"container",children:[Object(g.jsxs)("header",{ref:this.myHeader,style:{background:"#ff7575"},children:[" ",Object(g.jsx)("h3",{children:"Project 3 Chat Client"})]}),this.loginWindow]})}}]),s}(n.Component),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,131)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root")),S()}},[[85,1,2]]]);