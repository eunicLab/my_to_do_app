(this.webpackJsonpmy_to_do_app=this.webpackJsonpmy_to_do_app||[]).push([[0],{10:function(e,t,a){},20:function(e,t,a){"use strict";(function(e){var n=a(4),i=a(5),l=a(7),s=a(6),u=a(1),o=a(8),c=a(0),r=a.n(c),d=a(21),h=(a(10),a(3)),m=a.n(h),p=function(t){function a(t){var i;return Object(n.a)(this,a),i=Object(l.a)(this,Object(s.a)(a).call(this,t)),e.clickCount=0,e.inputArray=[],e.backendData="",i.state={textboxStatus:"noTextBox",userInput:"",todos:e.inputArray,dateInput:"",timeInput:"",alert:""},i.handleRefresh=i.handleRefresh.bind(Object(u.a)(i)),i.handleAdd=i.handleAdd.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.handleChange=i.handleChange.bind(Object(u.a)(i)),i.handleCancel=i.handleCancel.bind(Object(u.a)(i)),i.handleDate=i.handleDate.bind(Object(u.a)(i)),i.handleTime=i.handleTime.bind(Object(u.a)(i)),i}return Object(o.a)(a,t),Object(i.a)(a,[{key:"handleRefresh",value:function(){window.location.reload(!1)}},{key:"handleAdd",value:function(e){e.preventDefault(),this.setState({textboxStatus:"formStyle",userInput:"",dateInput:"",timeInput:"",alert:""})}},{key:"componentDidMount",value:function(){var e=this;m.a.get("https://still-everglades-82859.herokuapp.com/api/stuff").then((function(t){t.data.length>0&&t.data.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),e.setState({todos:t.data})}))}},{key:"handleSubmit",value:function(t){""!==this.state.userInput?(e.inputArray[e.clickCount]={id:"",text:this.state.userInput,date:this.state.dateInput,time:this.state.timeInput},m.a.post("https://still-everglades-82859.herokuapp.com/api/stuff",e.inputArray[e.clickCount]).then((function(e){window.location="/"})),e.inputArray.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),t.preventDefault(),this.setState({textboxStatus:"noTextBox"}),e.clickCount++):(t.preventDefault(),this.setState({textboxStatus:"formStyle",userInput:"",dateInput:""}))}},{key:"handleCancel",value:function(e){e.preventDefault(),this.setState({textboxStatus:"noTextBox",userInput:"",dateInput:"",timeInput:""})}},{key:"handleDate",value:function(e){this.setState({dateInput:e.target.value})}},{key:"handleTime",value:function(e){this.setState({timeInput:e.target.value})}},{key:"handleChange",value:function(e){this.setState({userInput:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return r.a.createElement(d.a,{item:t,handleEdit:e.handleEditParent})}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"todo-list"},r.a.createElement("h6",{className:"motivation"},"Tick says the Clock...Do what you have to do"),r.a.createElement("form",{className:this.state.textboxStatus},r.a.createElement("input",{type:"text",name:"userInput",placeholder:"To do Item",value:this.state.userInput,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",name:"date",placeholder:"Due Date",value:this.state.dateInput,onChange:this.handleDate}),r.a.createElement("br",null),r.a.createElement("input",{type:"time",name:"time",placeholder:"Time",value:this.state.timeInput,onChange:this.handleTime}),r.a.createElement("br",null),r.a.createElement("button",{className:"formButton",onClick:this.handleSubmit}," OK "),r.a.createElement("button",{className:"formButton",onClick:this.handleCancel},"CANCEL")),r.a.createElement("button",{className:"btn",onClick:this.handleAdd},"Add a New Item"),r.a.createElement("button",{className:"btn",onClick:this.handleRefresh}," Start a New List"),t)))}}]),a}(r.a.Component);t.a=p}).call(this,a(30))},21:function(e,t,a){"use strict";var n=a(4),i=a(5),l=a(7),s=a(6),u=a(1),o=a(8),c=a(0),r=a.n(c),d=(a(10),a(22)),h=a.n(d),m=a(23),p=a.n(m),b=a(3),f=a.n(b),v=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={checkBoxStatus:!1,styleText:"unchecked",reminder:null,alert:!1,editBoxStatus:"noTextBox",userInput:"",dateInput:"",timeInput:""},e.handleBoxChange=e.handleBoxChange.bind(Object(u.a)(e)),e.reminderLogic=e.reminderLogic.bind(Object(u.a)(e)),e.handleDelete=e.handleDelete.bind(Object(u.a)(e)),e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleCancel=e.handleCancel.bind(Object(u.a)(e)),e.handleDate=e.handleDate.bind(Object(u.a)(e)),e.handleTime=e.handleTime.bind(Object(u.a)(e)),e.handleEdit=e.handleEdit.bind(Object(u.a)(e)),e.handleUpdate=e.handleUpdate.bind(Object(u.a)(e)),e.reminder=e.reminder.bind(Object(u.a)(e)),e}return Object(o.a)(t,e),Object(i.a)(t,[{key:"reminderLogic",value:function(){var e,t=new Date,a=t.getFullYear(),n=t.getMonth(),i=t.getDate(),l=new Date(this.props.item.date),s=l.getFullYear(),u=l.getMonth(),o=l.getDate(),c=o-i,r=u-n,d=s-a;return 1===d&&(e=!1),-1===d&&(e=!0),d>1&&(e=!1),d<1&&(e=!0),r>0&&0===d&&(e=!1),r<0&&0===d&&(e=!0),c>0&&0===r&&0===d&&(e=!1),c<0&&0===r&&0===d&&(e=!0),0===c&&0===r&&0===d&&(e=!0),e}},{key:"reminder",value:function(){var e,t=new Date,a=t.getFullYear(),n=t.getMonth(),i=t.getDate(),l=new Date(this.props.item.date),s=l.getFullYear(),u=l.getMonth(),o=l.getDate(),c=o-i,r=u-n,d=s-a;return 1===d&&(e="Due next year"),-1===d&&(e="Due last year"),d>1&&(e="due in "+d+" year(s) time"),d<1&&(e="due "+(a-s)+" year(s) ago"),r>0&&0===d&&(e="Due in "+r+" month(s) time"),r<0&&0===d&&(e="Due "+(n-u)+" month(s) ago"),c>0&&0===r&&0===d&&(e="Due in "+c+" day(s)"),c<0&&0===r&&0===d&&(e="Due "+(i-o)+" day(s) ago"),0===c&&0===r&&0===d&&(e="Due today"),e}},{key:"handleDate",value:function(e){this.setState({dateInput:e.target.value})}},{key:"handleTime",value:function(e){this.setState({timeInput:e.target.value})}},{key:"handleChange",value:function(e){this.setState({userInput:e.target.value})}},{key:"handleBoxChange",value:function(e){this.setState({checkBoxStatus:e.target.checked})}},{key:"handleEdit",value:function(e){e.preventDefault(),this.setState({editBoxStatus:"formStyle",userInput:this.props.item.text,dateInput:this.props.item.date,timeInput:this.props.item.time})}},{key:"handleUpdate",value:function(e){e.preventDefault();var t={text:this.state.userInput,date:this.state.dateInput,time:this.state.timeInput};f.a.put("https://still-everglades-82859.herokuapp.com/api/stuff/"+this.props.item._id,t).then((function(e){window.location="/"})),this.setState({editBoxStatus:"noTextBox"})}},{key:"handleCancel",value:function(e){e.preventDefault(),this.setState({editBoxStatus:"noTextBox"})}},{key:"handleDelete",value:function(e){console.log(this.props.item._id),f.a.delete("https://still-everglades-82859.herokuapp.com/api/stuff/"+this.props.item._id).then((function(e){window.location="/"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"todo-item"},r.a.createElement("input",{type:"checkbox",name:"checkbox",checked:this.state.checkBoxStatus,onChange:this.handleBoxChange}),r.a.createElement("p",{className:this.state.checkBoxStatus?"checked":"unchecked"},this.props.item.text),r.a.createElement("p",{className:"date"},this.props.item.date),r.a.createElement("br",null),r.a.createElement("img",{src:h.a,className:"icon1",onClick:this.handleEdit}),r.a.createElement("img",{src:p.a,className:"icon2",onClick:this.handleDelete})),r.a.createElement("p",{className:!0===this.reminderLogic()&&0==this.state.checkBoxStatus?"reminderAlert":"reminder"},this.reminder()),r.a.createElement("form",{className:this.state.editBoxStatus},r.a.createElement("input",{type:"text",name:"userInput",value:this.state.userInput,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",name:"date",value:this.state.dateInput,onChange:this.handleDate}),r.a.createElement("br",null),r.a.createElement("input",{type:"time",name:"time",value:this.state.timeInput,onChange:this.handleTime}),r.a.createElement("br",null),r.a.createElement("button",{className:"formButton",onClick:this.handleUpdate},"Update"),r.a.createElement("button",{className:"formButton",onClick:this.handleCancel},"CANCEL")))}}]),t}(r.a.Component);t.a=v},22:function(e,t,a){e.exports=a.p+"static/media/edit_icon.e764b070.png"},23:function(e,t,a){e.exports=a.p+"static/media/delete_icon.1cd05d53.png"},24:function(e,t,a){e.exports=a(49)},29:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(19),s=a.n(l),u=(a(29),a(20));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(u.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f162af8b.chunk.js.map