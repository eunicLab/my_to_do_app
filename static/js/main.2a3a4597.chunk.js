(this.webpackJsonpmy_to_do_app=this.webpackJsonpmy_to_do_app||[]).push([[0],{12:function(t,e,a){},26:function(t,e,a){"use strict";(function(t){var n=a(4),s=a(5),i=a(7),o=a(6),l=a(8),r=a(0),u=a.n(r),c=(a(40),a(3)),p=a.n(c),d=function(e){function a(e){var s;return Object(n.a)(this,a),(s=Object(i.a)(this,Object(o.a)(a).call(this,e))).handleTopSignUpButton=function(t){t.preventDefault(),s.setState({signUpTop:"buttonTopActive",loginTop:"buttonTop",createBtn:"btnlogin",loginBtn:"noDisplay",firstName:"",error:0})},s.handleTopLoginButton=function(t){t.preventDefault(),s.setState({signUpTop:"buttonTop",loginTop:"buttonTopActive",createBtn:"noDisplay",loginBtn:"btnlogin",firstName:"noDisplay",error:0})},s.handleEmail=function(t){s.setState({emailInput:t.target.value})},s.handlePassword=function(t){s.setState({passwordInput:t.target.value})},s.handleFirstName=function(t){s.setState({firstnameInput:t.target.value})},s.handleLogin=function(e){e.preventDefault(),p.a.post("https://still-everglades-82859.herokuapp.com/api/auth/login",{email:s.state.emailInput.toLowerCase(),password:s.state.passwordInput}).then((function(e){t.email=s.state.emailInput.toLowerCase(),s.setState({loggedIn:!0,error:0}),s.sendData(),s.sendEmail()}),(function(t){return s.setState({loggedIn:!1,error:1})}))},s.handleGuest=function(e){e.preventDefault(),p.a.post("https://still-everglades-82859.herokuapp.com/api/auth/login",{email:"guest",password:"guest"}).then((function(e){t.email="guest",s.setState({loggedIn:!0}),s.sendData(),s.sendEmail()}))},s.handleSignUp=function(e){e.preventDefault(),""!==s.state.passwordInput&&""!==s.state.firstnameInput&&""!==s.state.emailInput?p.a.post("https://still-everglades-82859.herokuapp.com/api/auth/signup",{email:s.state.emailInput.toLowerCase(),password:s.state.passwordInput}).then((function(e){t.email=s.state.emailInput.toLowerCase(),t.firstName=s.state.firstnameInput,s.setState({loggedIn:!0,error:0}),s.sendData(),s.sendEmail(),s.sendFirstName(),p.a.post("https://still-everglades-82859.herokuapp.com/api/stuff",{id:"",text:"A",date:"",time:"",email:t.email,username:t.firstName})}),(function(t){return s.setState({loggedIn:!1,error:3})})):s.setState({error:2})},s.sendData=function(){s.props.parentCallback(s.state.loggedIn)},s.sendEmail=function(){s.props.parentCallback2(t.email)},s.sendFirstName=function(){s.props.parentCallback3(t.firstName)},t.email="",t.error=0,t.firstName="",s.state={createBtn:"btnlogin",loginBtn:"noDisplay",signUpTop:"buttonTopActive",loginTop:"buttonTop",firstName:"",loggedIn:!1,emailInput:"",passwordInput:"",firstnameInput:"",error:0},s}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:this.state.loggedIn?"noDisplay":"fullBackground"},u.a.createElement("form",null,u.a.createElement("button",{className:this.state.signUpTop,onClick:this.handleTopSignUPButton},"Sign Up"),u.a.createElement("button",{className:this.state.loginTop,onClick:this.handleTopLoginButton},"Log in"),u.a.createElement("p",{className:"error"},1!==this.state.error||this.state.loggedIn?2!==this.state.error||this.state.loggedIn?3!==this.state.error||this.state.loggedIn?"":"There is already an account with this email address":"Required field empty":"Incorrect email address or password"),u.a.createElement("input",{name:"firstName",placeholder:"First Name",className:this.state.firstName,value:this.state.firstnameInput,onChange:this.handleFirstName}),u.a.createElement("input",{type:"email",name:"email",placeholder:"Email",className:this.state.email,value:this.state.emailInput,onChange:this.handleEmail}),u.a.createElement("input",{type:"password",name:"password",placeholder:"Password",className:this.state.password,value:this.state.passwordInput,onChange:this.handlePassword}),u.a.createElement("button",{className:this.state.createBtn,onClick:this.handleSignUp},"Create Account"),u.a.createElement("button",{className:this.state.loginBtn,onClick:this.handleLogin},"Log in"),u.a.createElement("h5",null,"Continue as"," ",u.a.createElement("button",{className:"btnlogin",onClick:this.handleGuest},"Guest"))))}}]),a}(u.a.Component);e.a=d}).call(this,a(10))},27:function(t,e,a){"use strict";(function(t){var n=a(4),s=a(5),i=a(7),o=a(6),l=a(8),r=a(0),u=a.n(r),c=a(28),p=(a(12),a(3)),d=a.n(p),m=function(e){function a(e){var s;return Object(n.a)(this,a),(s=Object(i.a)(this,Object(o.a)(a).call(this,e))).handleAdd=function(t){t.preventDefault(),s.setState({textboxStatus:"formStyle",userInput:"",dateInput:"",timeInput:"",alert:""})},s.handleSubmit=function(e){""!==s.state.userInput?(t.inputArray[t.clickCount]={id:"",text:s.state.userInput,date:s.state.dateInput,time:s.state.timeInput,email:s.props.emailFromParent,username:s.state.username},console.log(s.state.username),d.a.post("https://still-everglades-82859.herokuapp.com/api/stuff",t.inputArray[t.clickCount]).then((function(t){s.componentDidMount()})),e.preventDefault(),s.setState({textboxStatus:"noTextBox"}),t.clickCount++):(e.preventDefault(),s.setState({textboxStatus:"formStyle",userInput:"",dateInput:""}))},s.handleCancel=function(t){t.preventDefault(),s.setState({textboxStatus:"noTextBox",userInput:"",dateInput:"",timeInput:""})},s.handleDate=function(t){s.setState({dateInput:t.target.value})},s.handleTime=function(t){s.setState({timeInput:t.target.value})},s.handleChange=function(t){s.setState({userInput:t.target.value})},s.callbackFunction=function(t){s.setState({data:t}),console.log(s.state.data)},t.clickCount=0,t.inputArray=[],t.backendData="",t.updateCount=0,t.checker=1,s.state={textboxStatus:"noTextBox",userInput:"",todos:t.inputArray,dateInput:"",timeInput:"",alert:"",updateCount:0,data:0},s}return Object(l.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;if(!0===this.props.dataFromParent){var e=[];d.a.get("https://still-everglades-82859.herokuapp.com/api/stuff").then((function(a){a.data.length>0&&a.data.sort((function(t,e){return new Date(t.date)-new Date(e.date)}));for(var n=0;n<a.data.length;n++)a.data[n].email===t.props.emailFromParent&&e.push(a.data[n]);e.length>0?t.setState({username:e[0].username}):t.setState({username:t.props.firstNameFromParent}),e.shift(),t.setState({todos:e,data:0,email:t.props.emailFromParent})}))}}},{key:"componentDidUpdate",value:function(){(0!==this.state.data||t.checker>=1)&&(t.checker--,this.componentDidMount())}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return u.a.createElement(c.a,{item:e,parentCallback:t.callbackFunction})}));return u.a.createElement("div",{className:!0===this.props.dataFromParent?"App":"noDisplay"},u.a.createElement("div",{className:"todo-list"},u.a.createElement("h6",{className:"motivation"},"Tick says the Clock ",this.state.username," ...Do what you have to do"),u.a.createElement("form",{className:this.state.textboxStatus},u.a.createElement("input",{type:"text",name:"userInput",placeholder:"To do Item",value:this.state.userInput,onChange:this.handleChange}),u.a.createElement("br",null),u.a.createElement("input",{type:"date",name:"date",placeholder:"Due Date",value:this.state.dateInput,onChange:this.handleDate}),u.a.createElement("br",null),u.a.createElement("input",{type:"time",name:"time",placeholder:"Time",value:this.state.timeInput,onChange:this.handleTime}),u.a.createElement("br",null),u.a.createElement("button",{className:"formButton",onClick:this.handleSubmit}," ","OK"," "),u.a.createElement("button",{className:"formButton",onClick:this.handleCancel},"CANCEL")),u.a.createElement("button",{className:"btn",onClick:this.handleAdd},"Add a New Item"),e))}}]),a}(u.a.Component);e.a=m}).call(this,a(10))},28:function(t,e,a){"use strict";(function(t){var n=a(4),s=a(5),i=a(7),o=a(6),l=a(2),r=a(8),u=a(0),c=a.n(u),p=(a(12),a(29)),d=a.n(p),m=a(30),h=a.n(m),f=a(3),g=a.n(f),b=function(e){function a(e){var s;return Object(n.a)(this,a),(s=Object(i.a)(this,Object(o.a)(a).call(this,e))).sendData=function(){s.props.parentCallback(s.state.updateCount)},t.updateCount=0,s.state={checkBoxStatus:!1,styleText:"unchecked",reminder:null,alert:!1,editBoxStatus:"noTextBox",userInput:"",dateInput:"",timeInput:"",updateCount:t.updateCount},s.handleBoxChange=s.handleBoxChange.bind(Object(l.a)(s)),s.reminderLogic=s.reminderLogic.bind(Object(l.a)(s)),s.handleDelete=s.handleDelete.bind(Object(l.a)(s)),s.handleChange=s.handleChange.bind(Object(l.a)(s)),s.handleCancel=s.handleCancel.bind(Object(l.a)(s)),s.handleDate=s.handleDate.bind(Object(l.a)(s)),s.handleTime=s.handleTime.bind(Object(l.a)(s)),s.handleEdit=s.handleEdit.bind(Object(l.a)(s)),s.handleUpdate=s.handleUpdate.bind(Object(l.a)(s)),s.reminder=s.reminder.bind(Object(l.a)(s)),s}return Object(r.a)(a,e),Object(s.a)(a,[{key:"reminderLogic",value:function(){var t,e=new Date,a=e.getFullYear(),n=e.getMonth(),s=e.getDate(),i=new Date(this.props.item.date),o=i.getFullYear(),l=i.getMonth(),r=i.getDate(),u=r-s,c=l-n,p=o-a;return 1===p&&(t=!1),-1===p&&(t=!0),p>1&&(t=!1),p<1&&(t=!0),c>0&&0===p&&(t=!1),c<0&&0===p&&(t=!0),u>0&&0===c&&0===p&&(t=!1),u<0&&0===c&&0===p&&(t=!0),0===u&&0===c&&0===p&&(t=!0),t}},{key:"reminder",value:function(){var t,e=new Date,a=e.getFullYear(),n=e.getMonth(),s=e.getDate(),i=new Date(this.props.item.date),o=i.getFullYear(),l=i.getMonth(),r=i.getDate(),u=r-s,c=l-n,p=o-a;return 1===p&&(t="Due next year"),-1===p&&(t="Due last year"),p>1&&(t="due in "+p+" year(s) time"),p<1&&(t="due "+(a-o)+" year(s) ago"),c>0&&0===p&&(t="Due in "+c+" month(s) time"),c<0&&0===p&&(t="Due "+(n-l)+" month(s) ago"),u>0&&0===c&&0===p&&(t="Due in "+u+" day(s)"),u<0&&0===c&&0===p&&(t="Due "+(s-r)+" day(s) ago"),0===u&&0===c&&0===p&&(t="Due today"),t}},{key:"handleDate",value:function(t){this.setState({dateInput:t.target.value})}},{key:"handleTime",value:function(t){this.setState({timeInput:t.target.value})}},{key:"handleChange",value:function(t){this.setState({userInput:t.target.value})}},{key:"handleBoxChange",value:function(t){this.setState({checkBoxStatus:t.target.checked})}},{key:"handleEdit",value:function(t){t.preventDefault(),this.setState({editBoxStatus:"formStyle",userInput:this.props.item.text,dateInput:this.props.item.date,timeInput:this.props.item.time})}},{key:"handleUpdate",value:function(e){var a=this;e.preventDefault();var n={text:this.state.userInput,date:this.state.dateInput,time:this.state.timeInput};g.a.put("https://still-everglades-82859.herokuapp.com/api/stuff/"+this.props.item._id,n).then((function(e){t.updateCount++,a.setState({updateCount:t.updateCount}),a.sendData()})),this.setState({editBoxStatus:"noTextBox"})}},{key:"handleCancel",value:function(t){t.preventDefault(),this.setState({editBoxStatus:"noTextBox"})}},{key:"handleDelete",value:function(e){var a=this;e.preventDefault(),g.a.delete("https://still-everglades-82859.herokuapp.com/api/stuff/"+this.props.item._id).then((function(e){t.updateCount++,a.setState({updateCount:t.updateCount}),a.sendData()}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"todo-item"},c.a.createElement("input",{type:"checkbox",name:"checkbox",checked:this.state.checkBoxStatus,onChange:this.handleBoxChange,className:"myCheckBox"}),c.a.createElement("p",{className:this.state.checkBoxStatus?"checked":"unchecked"},this.props.item.text),c.a.createElement("p",{className:"date"},this.props.item.date),c.a.createElement("img",{src:d.a,className:"icon1",alt:"An edit button",onClick:this.handleEdit}),c.a.createElement("img",{src:h.a,className:"icon2",alt:"A delete button",onClick:this.handleDelete})),c.a.createElement("p",{className:!0===this.reminderLogic()&&0==this.state.checkBoxStatus?"reminderAlert":"reminder"},this.reminder()),c.a.createElement("form",{className:this.state.editBoxStatus},c.a.createElement("input",{type:"text",name:"userInput",value:this.state.userInput,onChange:this.handleChange}),c.a.createElement("br",null),c.a.createElement("input",{type:"date",name:"date",value:this.state.dateInput,onChange:this.handleDate}),c.a.createElement("br",null),c.a.createElement("input",{type:"time",name:"time",value:this.state.timeInput,onChange:this.handleTime}),c.a.createElement("br",null),c.a.createElement("button",{className:"formButton",onClick:this.handleUpdate},"Update"),c.a.createElement("button",{className:"formButton",onClick:this.handleCancel},"CANCEL")))}}]),a}(c.a.Component);e.a=b}).call(this,a(10))},29:function(t,e,a){t.exports=a.p+"static/media/edit_icon.e764b070.png"},30:function(t,e,a){t.exports=a.p+"static/media/delete_icon.1cd05d53.png"},34:function(t,e,a){t.exports=a(62)},39:function(t,e,a){},40:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(25),o=a.n(i),l=(a(39),a(4)),r=a(5),u=a(7),c=a(6),p=a(8),d=a(26),m=a(27),h=(a(12),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(c.a)(e).call(this,t))).callbackFunction=function(t){a.setState({data:t})},a.callbackFunction2=function(t){a.setState({email:t})},a.callbackFunction3=function(t){a.setState({firstName:t})},a.state={data:"",email:"",firstName:""},a}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d.a,{parentCallback:this.callbackFunction,parentCallback2:this.callbackFunction2,parentCallback3:this.callbackFunction3,parentCallback4:this.callbackFunction4}),s.a.createElement(m.a,{dataFromParent:this.state.data,emailFromParent:this.state.email,firstNameFromParent:this.state.firstName}))}}]),e}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(33);o.a.render(s.a.createElement(f.a,null,s.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2a3a4597.chunk.js.map