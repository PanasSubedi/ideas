(this.webpackJsonpideas=this.webpackJsonpideas||[]).push([[0],{148:function(e,t,a){},255:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a(0),r=a(13),c=a.n(r),o=(a(148),a(85)),l=a(16),s=a(303),u=a(300),d=a(295),j=a(302),f=a(307),b=a(301),g=a(50),m=a(304),h=a(296),O=a(67),p=a.n(O),x=a(84),v=a.n(x),y=a(131),S=a.n(y),C=a(132),E=a.n(C),I=a(134),N=a(297),k=a(298),D=a(299);function w(e){if("tag"!==e&&"idea"!==e)return null;var t=localStorage.getItem("meta");null===t?(t={lastInsertTagID:0,lastInsertIdeaID:0},localStorage.setItem("meta",JSON.stringify(t))):t=JSON.parse(t);var a=t["lastInsert"+e.charAt(0).toUpperCase()+e.slice(1)+"ID"];return t["lastInsert"+e.charAt(0).toUpperCase()+e.slice(1)+"ID"]=parseInt(a)+1,localStorage.setItem("meta",JSON.stringify(t)),a.toString()}function T(e){var t=J(),a=t.filter((function(t){return t.date===e.date}));1===a.length?(t.forEach((function(t){t.date===e.date&&(t.title=e.title,t.tags=e.tags,t.ideas=e.ideas)})),localStorage.setItem("ideas",JSON.stringify(t))):0===a.length&&(t.push(e),localStorage.setItem("ideas",JSON.stringify(t)))}function J(){var e=localStorage.getItem("ideas");return null==e?[]:JSON.parse(e)}function F(e){var t=J();t.forEach((function(e){e.tags=e.tags.map((function(e){return e.tag})),e.ideas=e.ideas.map((function(e){return e.idea}))})),function(e,t){var a="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)),n=document.createElement("a");n.setAttribute("href",a),n.setAttribute("download",e+".json"),document.body.appendChild(n),n.click(),n.remove()}("export",t)}function z(e){var t=J().filter((function(t){return t.date===e}));return 0===t.length?{date:(new Date).toDateString(),title:"",tags:[],ideas:[]}:t[0]}var A=a(306);var M=function(e){var t=e.onClose,a=e.open;return Object(n.jsx)(A.a,{onClose:function(){t()},"aria-labelledby":"simple-dialog-title",open:a,children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)(k.a,{button:!0,onClick:function(){F(),t()},children:Object(n.jsx)(D.a,{primary:"Export ideas as JSON"})}),Object(n.jsx)(k.a,{button:!0,onClick:function(){!function(){alert("Importing will wipe your current data. Click Cancel on the Upload window to stop the process.");var e=document.createElement("input");e.setAttribute("type","file"),e.addEventListener("change",(function(e){var t=e.target.files[0],a=new FileReader;a.readAsText(t,"UTF-8"),a.onload=function(e){JSON.parse(e.target.result).forEach((function(e){T({date:e.date,title:e.title,tags:e.tags.map((function(e){return{id:w("tag"),tag:e,tagEdit:!1}})),ideas:e.ideas.map((function(e){return{id:w("idea"),idea:e,ideaEdit:!1}}))})}))},window.location.reload()})),document.body.appendChild(e),e.click(),e.remove()}(),t()},children:Object(n.jsx)(D.a,{primary:"Import ideas from JSON"})})]})})},P=["January","February","March","April","May","June","July","August","September","October","November","December"],B=z((new Date).toDateString());var L=Object(s.a)((function(e){return{root:{marginTop:40},page:{padding:"70px 70px 20px",backgroundColor:"yellow",minHeight:600,borderTop:"0px"},pageContent:{marginTop:25},lines:{marginTop:10,borderBottom:"1px solid #d4d4d4","&:hover, &.active:hover":{"& button":{display:"inline"}}},date:{fontSize:"75%"},tags:{margin:"0 5px 0 0"},source:{textAlign:"right",fontSize:"75%",fontStyle:"italic"},ideaTextField:{width:"100%"},actionItems:{display:"none",cursor:"pointer"},actionButtons:{marginTop:10},menuIcon:{marginTop:"-30px",marginBottom:"30px"}}})),U=function(){var e=Object(i.useState)(new Date(B.date)),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(i.useState)(B.title),s=Object(l.a)(c,2),O=s[0],x=s[1],y=Object(i.useState)(B.tags),C=Object(l.a)(y,2),F=C[0],A=C[1],U=Object(i.useState)(B.ideas),Y=Object(l.a)(U,2),q=Y[0],K=Y[1],R=Object(i.useState)([]),H=Object(l.a)(R,2),W=H[0],_=H[1],G=Object(i.useState)(!1),Q=Object(l.a)(G,2),V=Q[0],X=Q[1],Z=Object(i.useState)(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ae=Object(i.useState)(!1),ne=Object(l.a)(ae,2),ie=ne[0],re=ne[1],ce=Object(i.useState)(!1),oe=Object(l.a)(ce,2),le=oe[0],se=oe[1],ue=Object(i.useState)(!0),de=Object(l.a)(ue,2),je=de[0],fe=de[1],be=Object(i.useState)(!1),ge=Object(l.a)(be,2),me=ge[0],he=ge[1],Oe=Object(i.useState)(!0),pe=Object(l.a)(Oe,2),xe=pe[0],ve=pe[1],ye=Object(i.useState)(!1),Se=Object(l.a)(ye,2),Ce=Se[0],Ee=Se[1],Ie=L();Object(i.useEffect)((function(){document.title="My Ideas"}),[]),Object(i.useEffect)((function(){var e={date:a.toDateString(),title:O,tags:F,ideas:q};xe&&T(e)}),[q,F,O,a,xe]);var Ne=function(e){var t=z(e.toDateString());ve(!1),r(e),x(t.title),A(t.tags),K(t.ideas),ve(!0),X(!1),he(!1)},ke=function(e){var t;he(!1),X(!0),_((t=e,J().filter((function(e){var a=!1;return e.tags.forEach((function(e){e.tag===t&&(a=!0)})),a}))))},De=function(e){"Enter"!==e.key&&13!==e.keyCode||(A((function(e){var t=[];return e.forEach((function(e){e.tagEdit&&(e.tagEdit=!1),t.push(e)})),t})),te(!1),e.preventDefault())},we=function(e){var t=e.target.value;t.length>15?alert("Maximum tag length reached. Please try a shorter tag."):A((function(e){var a=[];return e.forEach((function(e){e.tagEdit&&(e.tag=t),a.push(e)})),a}))},Te=function(e){"Enter"!==e.key&&13!==e.keyCode||(se(!1),fe(!0),e.preventDefault())},Je=function(e){var t=e.target.value;t.length>75?alert("Maximum title length reached. Please try a shorter title."):x(t)},Fe=function(e){"Enter"!==e.key&&13!==e.keyCode||(K((function(e){var t=[];return e.forEach((function(e){e.ideaEdit&&(e.ideaEdit=!1),t.push(e)})),t})),re(!1),e.preventDefault())},ze=function(e){var t=e.target.value;t.length>150?alert("Maximum idea length reached. Please try a shorter idea or continue on the next line."):K((function(e){var a=[];return e.forEach((function(e){e.ideaEdit&&(e.idea=t),a.push(e)})),a}))},Ae=function(e,t){return e.ideaEdit?Object(n.jsx)(m.a,{className:"".concat(Ie.lines," ").concat(Ie.ideaTextField),label:"Your Idea",variant:"outlined",value:e.idea,autoFocus:!0,id:e.id,onChange:ze,onKeyDown:Fe},e.id):Object(n.jsxs)(g.a,{className:Ie.lines,children:[t+1,". ",e.idea,Object(n.jsx)(h.a,{size:"small",className:Ie.actionItems,onClick:function(){return t=e.id,re(!0),void K((function(e){var a=[];return e.forEach((function(e){e.id===t&&(e.ideaEdit=!0),a.push(e)})),a}));var t},"aria-label":"edit",children:Object(n.jsx)(p.a,{style:{fontSize:"100%"}})}),Object(n.jsx)(h.a,{size:"small",className:Ie.actionItems,onClick:function(){return t=e.id,void K((function(e){return e.filter((function(e){return e.id!==t}))}));var t},"aria-label":"delete",children:Object(n.jsx)(S.a,{style:{fontSize:"100%"}})})]},e.id)},Me=function(e){return e.tagEdit?Object(n.jsx)(m.a,{label:"Your Tag",variant:"outlined",value:e.tag,autoFocus:!0,id:e.id,onChange:we,onKeyDown:De},e.id):Object(n.jsx)(f.a,{variant:"outlined",label:e.tag,className:Ie.tags,size:"small",onDelete:function(){return t=e.id,void A((function(e){return e.filter((function(e){return e.id!==t}))}));var t},onClick:function(){return ke(e.tag)}},e.id)};return Object(n.jsxs)(u.a,{maxWidth:"md",className:Ie.root,children:[Object(n.jsx)(M,{open:Ce,onClose:function(){Ee(!1)}}),Object(n.jsxs)(g.a,{className:Ie.source,children:[Object(n.jsx)(b.a,{href:"https://jamesaltucher.com/blog/the-ultimate-guide-for-becoming-an-idea-machine/",rel:"noreferrer",target:"_blank",style:{color:"#666"},children:"The ultimate guide for becoming an idea machine"})," by James Altucher"]}),Object(n.jsxs)(d.a,{className:Ie.page,square:!0,children:[me&&!V&&Object(n.jsx)(I.a,{light:!0,selection:Ne}),!me&&V&&Object(n.jsxs)(d.a,{elevation:0,className:Ie.pageContent,square:!0,children:[Object(n.jsx)(g.a,{variant:"h6",children:"Titles in the tag"}),Object(n.jsx)(N.a,{children:W.map((function(e){return Object(n.jsx)(k.a,{button:!0,onClick:function(){return Ne(new Date(e.date))},children:Object(n.jsx)(D.a,{primary:e.title})},e.date)}))})]}),!me&&!V&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{size:"small",onClick:function(){Ee(!0)},"aria-label":"open-menu",className:Ie.menuIcon,children:Object(n.jsx)(E.a,{})}),Object(n.jsx)(u.a,{style:{textAlign:"right"},children:Object(n.jsx)(h.a,{size:"small",onClick:function(e){ee?alert("Please complete adding/editing another tag first."):(te(!0),A((function(e){return[].concat(Object(o.a)(e),[{id:w("tag"),tag:"",tagEdit:!0}])}))),e.preventDefault()},"aria-label":"add-tag",children:Object(n.jsx)(v.a,{})})}),Object(n.jsxs)(j.a,{container:!0,justify:"space-between",alignItems:"flex-end",children:[Object(n.jsx)(j.a,{item:!0,children:Object(n.jsxs)(g.a,{className:Ie.date,children:[a.getDate()+" "+P[a.getMonth()]+", "+a.getFullYear(),Object(n.jsx)(h.a,{size:"small",onClick:function(){X(!1),he(!0)},"aria-label":"edit-date",style:{marginLeft:10},children:Object(n.jsx)(p.a,{style:{fontSize:"100%"}})})]})}),Object(n.jsx)(j.a,{item:!0,children:F.map((function(e){return Me(e)}))})]}),Object(n.jsxs)(j.a,{container:!0,children:[Object(n.jsx)(j.a,{item:!0,children:le?Object(n.jsx)(m.a,{className:Ie.ideaTextField,label:"Your Title",variant:"outlined",autoFocus:!0,value:O,onChange:Je,onKeyDown:Te}):""===O?Object(n.jsx)(g.a,{children:"New Title"}):Object(n.jsx)(g.a,{children:O})}),Object(n.jsx)(j.a,{item:!0,style:{marginLeft:10},children:je&&Object(n.jsx)(h.a,{size:"small",onClick:function(){se(!0),fe(!1)},"aria-label":"edit-title",children:Object(n.jsx)(p.a,{style:{fontSize:"100%"}})})})]}),Object(n.jsxs)(d.a,{elevation:0,className:Ie.pageContent,square:!0,children:[q.map((function(e,t){return Ae(e,t)})),Object(n.jsx)(h.a,{onClick:function(e){ie?alert("Please complete adding/editing another idea first."):q.length>=20?alert("Maximum idea limit reached for the current day."):(re(!0),K((function(e){return[].concat(Object(o.a)(e),[{id:w("idea"),idea:"",ideaEdit:!0}])}))),e.preventDefault()},size:"small","aria-label":"add-idea",className:Ie.lines,children:Object(n.jsx)(v.a,{})})]})]})]})]})};var Y=function(){return Object(n.jsx)(U,{})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,309)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(n.jsx)(Y,{}),document.getElementById("root")),q()}},[[255,1,2]]]);
//# sourceMappingURL=main.4a6fcdf9.chunk.js.map