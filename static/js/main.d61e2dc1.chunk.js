(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),i=n(2),o=n.n(i),m=n(3),s=n(4),l=n(6),c=n(5),h=n(7),u=function(e){return t.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children,";")};var d=function(e){var a=e.id,n=e.name,r=e.email;return t.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},t.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=200x200"),alt:"robots"}),t.a.createElement("div",null,t.a.createElement("h1",null,n),t.a.createElement("p",null,r)))},b=function(e){var a=e.robots;return t.a.createElement("div",null,a.map((function(e,n){return t.a.createElement(d,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))},f=function(e){return t.a.createElement("div",{className:"pa2"},t.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robo Friends",onChange:e.seacrhChange}))},g=[{id:1,name:"Mothi Nivas",username:"Mothi",email:"mothi@april.biz"},{id:2,name:"Gowtham",username:"Gowtham",email:"gowtham@melissa.tv"},{id:3,name:"Hudson",username:"Hudson",email:"hudson@yesenia.net"},{id:4,name:"Shomesh",username:"Shomesh",email:"shomesh@kory.org"},{id:5,name:"Arshad peer",username:"Arshad",email:"arshad@annie.ca"},{id:6,name:"Prakash",username:"Prakash",email:"prakash@jasper.info"},{id:7,name:"Aakash",username:"Aakash",email:"aakash@billy.biz"},{id:8,name:"Jothi Lingam",username:"Lingam",email:"lingam@rosamond.me"},{id:9,name:"Manimaram",username:"Mani",email:"mani@dana.io"},{id:10,name:"Amir ul dheen",username:"Amir",email:"amir@karina.biz"},{id:11,name:"Govindha Rajalu",username:"Rajalu",email:"rajalu@knort.org"},{id:12,name:"Praveen Kumar",username:"Praveen",email:"praveen@umail.com"},{id:13,name:"Karthick",username:"karthick",email:"karthick@uml.info"}],v=(n(13),function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(l.a)(this,Object(c.a)(a).call(this))).onSearch=function(a){e.setState({seacrhfield:a.target.value})},e.state={robots:g,seacrhfield:""},e}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.robots,n=e.seacrhfield,r=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.length?t.a.createElement("div",{className:"tc"},t.a.createElement("h1",{className:"hudson f1"},"Welcome to robofriends"),t.a.createElement(f,{seacrhChange:this.onSearch}),t.a.createElement("hr",null),t.a.createElement(u,null,t.a.createElement(b,{robots:r}))):t.a.createElement("h1",null,"Loading")}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14),n(15);o.a.render(t.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.d61e2dc1.chunk.js.map