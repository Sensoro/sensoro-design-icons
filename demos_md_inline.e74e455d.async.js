(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{aGSV:function(e,t,a){"use strict";a.r(t);a("Ysrh");var n,r=a("RVz0"),c=(a("yf2y"),a("t1mP")),l=a("Vhn3"),o=a("1QO0"),i=a.n(o),s=a("Pjim"),m=(a("y3/a"),a("/DcM")),u=(a("Lifx"),a("mMcV")),d=a("LDmD"),p=a("vPwb"),v=e=>{var t=e.name,a=e.isNew,n=e.theme,r=e.onCopied,c=Object(d["a"])(),l=c.copy,o=Object(p["a"])({[n]:!!n}),m=()=>{var e="import ".concat(t," from '@sensoro-design/icons/").concat(t,"'");l(e),r(t,e)};return i.a.createElement("li",{className:o,onClick:m},i.a.createElement(s[t]),i.a.createElement("span",{className:"sen-icon-class"},i.a.createElement(u["a"],{dot:a},t)))},E={direction:"\u65b9\u5411\u6027\u56fe\u6807",operation:"\u64cd\u4f5c\u7c7b\u56fe\u6807",suggestion:"\u63d0\u793a\u5efa\u8bae\u6027\u56fe\u6807",data:"\u6570\u636e\u7c7b\u56fe\u6807",device:"\u8bbe\u5907\u7c7b\u56fe\u6807",other:"\u7f51\u7ad9\u901a\u7528\u56fe\u6807",logo:"\u54c1\u724c\u548c\u6807\u8bc6"},h=e=>{var t=e.title,a=e.icons,n=void 0===a?[]:a,r=e.newIcons,c=void 0===r?[]:r,l=e.theme,o=(e,t)=>{m["b"].success(i.a.createElement("span",null,i.a.createElement("code",{className:"copied-code"},t)," copied \ud83c\udf89"))};return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",{style:{margin:"1.6em 0px 0.6em"}},E[t]),i.a.createElement("ul",{className:"sen-icons-list"},n.map((e=>i.a.createElement(v,{key:e,name:e,theme:l,isNew:c.indexOf(e)>=0,onCopied:o})))))},C=a("TIWS"),g=Object.keys(C).map((e=>e.replace(/(Outlined|Filled|TwoTone)$/,""))).filter(((e,t,a)=>a.indexOf(e)===t)),w=["Up","Down","Left","Right","MenuFold","MenuUnfold"],f=["Delete","Form","Play","PlayCircle","Pause","PauseCircle","Rotation","RotationClose"],O=["Drone","Camera","AircircuitBreaker","Smoke","WaterFlow","FireHydrant","FireCamera","WaterLevel","ElectricalFire","Co","Co2","O2","Ch4","Pm","Nh3","Thermometer","SmartWatch","IntelligentAccess","AudibleAlarm","TemperaturePatch"],b=["Plus","Check","CheckCircle","CheckSquare","Close","CloseCircle","CloseSquare","PlusCircle","Minus","MinusCircle","MinusSquare","Warning"],y=[],T=[],j=[...w,...b,...y,...T,...f,...O],k=g.filter((e=>!j.includes(e))),F={direction:w,suggestion:b,operation:f,data:y,device:O,logo:T,other:k},P=a("/r+8"),x=e=>{var t="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z";return i.a.createElement("svg",Object(P["a"])({},e,{viewBox:"0 0 1024 1024"}),i.a.createElement("path",{d:t}))},M=e=>{var t="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z";return i.a.createElement("svg",Object(P["a"])({},e,{viewBox:"0 0 1024 1024"}),i.a.createElement("path",{d:t}))},S=e=>{var t="M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z";return i.a.createElement("svg",Object(P["a"])({},e,{viewBox:"0 0 1024 1024"}),i.a.createElement("path",{d:t}))};(function(e){e["Outlined"]="Outlined",e["Filled"]="Filled",e["TwoTone"]="TwoTone"})(n||(n={}));var V=s,z=()=>{var e=Object(o["useState"])(n.Outlined),t=Object(l["a"])(e,2),a=t[0],m=t[1],u=Object(o["useState"])(),d=Object(l["a"])(u,2),p=d[0],v=(d[1],()=>{var e=Object.keys(F).map((e=>{var t=F[e];if(p){var n=p.replace(new RegExp("^<([a-zA-Z]*)\\s/>$","gi"),((e,t)=>t)).replace(/(Filled|Outlined|TwoTone)$/,"").toLowerCase();t=t.filter((e=>e.toLowerCase().includes(n)))}return t=t.filter((e=>"CopyrightCircle"!==e)),{category:e,icons:t.map((e=>e+a)).filter((e=>V[e]))}})).filter((e=>{var t=e.icons;return!!t.length})).map((e=>{var t=e.category,n=e.icons;return i.a.createElement(h,{key:t,title:t,theme:a,icons:n,newIcons:[]})}));return 0===e.length?i.a.createElement(c["a"],{style:{margin:"2em 0"}}):e}),E=e=>{m(e.target.value)};return i.a.createElement("div",null,i.a.createElement(r["a"].Group,{value:a,onChange:E},i.a.createElement(r["a"].Button,{value:n.Outlined},i.a.createElement(s["default"],{component:M})," \u7ebf\u6846\u98ce\u683c"),i.a.createElement(r["a"].Button,{value:n.Filled},i.a.createElement(s["default"],{component:x})," \u5b9e\u5e95\u98ce\u683c"),i.a.createElement(r["a"].Button,{value:n.TwoTone},i.a.createElement(s["default"],{component:S})," \u53cc\u8272\u98ce\u683c")),v())};a("nxsE"),t["default"]=z},nxsE:function(e,t,a){}}]);