webpackJsonp([1],{"+AsU":function(t,e){},"+e8y":function(t,e){},"/35x":function(t,e){},"0nrk":function(t,e){},"17fl":function(t,e){},"5XV+":function(t,e){},"6APl":function(t,e){},"8J+Y":function(t,e){},"8jA6":function(t,e){},"Dz+W":function(t,e){},FCPg:function(t,e){},FHf5:function(t,e){},"JA//":function(t,e){},Jtk3:function(t,e){},K8Ul:function(t,e){},LZHx:function(t,e){},MJmf:function(t,e){},Mlqx:function(t,e){},NATg:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")({name:"app"},a,!1,function(t){n("8jA6")},null,null).exports,o=n("/ocq"),r=n("u/64"),l=n.n(r),c=n("bOdI"),s=n.n(c),p=n("woOf"),f=n.n(p),d=n("Dd8w"),m=n.n(d),v=n("NYxO"),h={name:"InputTypeText",props:["inputName"],data:function(){return{container:null,inputValue:""}},computed:m()({},Object(v.c)(["selectValue"]),{updatedSelectValue:function(){return this.selectValue}}),watch:{updatedSelectValue:function(){this.checkValue()}},methods:{checkValue:function(){this.inputValue=getComputedStyle(this.container)[this.inputName]},updateValue:function(t){f()(this.container.style,s()({},this.inputName,this.inputValue)),this.$store.commit("updatingSelectValue",{inputValue:this.inputValue})}},mounted:function(){this.container=document.getElementById("flex-container"),this.checkValue()}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-type-text"},[n("div",{staticClass:"property-name"},[t._v("\n    "+t._s(t.inputName)+"\n  ")]),t._v(" "),n("div",{staticClass:"property-value"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputValue},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.updateValue(e)},blur:[t.updateValue,function(e){t.$forceUpdate()}],input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())}}})])])},staticRenderFns:[]};var y=n("VU/8")(h,x,!1,function(t){n("z8DT")},null,null).exports,V={name:"InputTypeSelect",props:["inputName","defaultValue"],data:function(){return{container:null,inputValue:""}},computed:m()({},Object(v.c)(["selectValue","flexProperties"]),{updatedSelectValue:function(){return this.selectValue}}),watch:{inputValue:function(){this.updateValue()},updatedSelectValue:function(){this.checkValue()}},methods:{checkValue:function(){this.inputValue=getComputedStyle(this.container)[this.inputName]},updateValue:function(){f()(this.container.style,s()({},this.inputName,this.inputValue)),this.$store.commit("updatingSelectValue",{inputValue:this.inputValue})}},mounted:function(){this.container=document.getElementById("flex-container"),this.defaultValue?this.inputValue=this.defaultValue:this.checkValue()}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-type-text"},[n("div",{staticClass:"property-name"},[t._v("\n    "+t._s(t.inputName)+"\n  ")]),t._v(" "),n("div",{staticClass:"property-value"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.inputValue=e.target.multiple?n:n[0]}}},t._l(t.flexProperties[t.inputName],function(e,i){return n("option",[t._v("\n        "+t._s(e)+"\n      ")])}))])])},staticRenderFns:[]};var _={name:"FlexDashboard",components:{InputTypeText:y,InputTypeSelect:n("VU/8")(V,g,!1,function(t){n("Wk3O")},null,null).exports},mounted:function(){l()("#flex-dashboard").resizable({edges:{top:!1,bottom:!1,left:!1,right:!0}}).on("resizemove",function(t){t.target.style.flexBasis=t.rect.width+"px"})}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"flex-dashboard"}},[n("div",{staticClass:"properties"},[n("input-type-select",{attrs:{"input-name":"display"}}),t._v(" "),n("input-type-text",{attrs:{"input-name":"flexFlow"}}),t._v(" "),n("input-type-select",{attrs:{"input-name":"flexDirection"}}),t._v(" "),n("input-type-select",{attrs:{"input-name":"flexWrap"}}),t._v(" "),n("input-type-select",{attrs:{"input-name":"justifyContent","default-value":"flex-start"}}),t._v(" "),n("input-type-select",{attrs:{"input-name":"alignContent","default-value":"stretch"}}),t._v(" "),n("input-type-select",{attrs:{"input-name":"alignItems","default-value":"stretch"}})],1)])},staticRenderFns:[]};var b=n("VU/8")(_,w,!1,function(t){n("Dz+W")},"data-v-2698c7b6",null).exports,C={name:"ContainerBox",data:function(){return{}},computed:m()({},Object(v.c)(["containerStyle","itemStyle","itemCount"])),methods:m()({},Object(v.b)(["updateLog"])),mounted:function(){var t=this,e=l.a.createSnapGrid({x:10,y:10});l()("#flex-container").resizable({edges:{top:!0,bottom:!0,left:!0,right:!0},restrictEdges:{outer:"parent",endOnly:!0},snap:{targets:[e]}}).on("resizemove",function(e){var n=e.target,i=parseInt(e.rect.width)+"px",a=parseInt(e.rect.height)+"px";f()(n.style,{width:i,height:a});var u=t.$el.querySelector(".size-log-box");f()(u.style,{transition:"0s",opacity:"1"}),u.innerHTML=i+" x "+a}).on("resizeend",function(){var e=t.$el.querySelector(".size-log-box");f()(e.style,{transition:"1s",opacity:"0"})})}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.containerStyle,attrs:{id:"flex-container"}},[t._l(parseInt(t.itemCount.count),function(e){return n("div",{key:e,staticClass:"item",style:t.itemStyle,on:{click:function(e){t.updateLog({event:e})}}},[t._v(t._s(e)+"\n  ")])}),t._v(" "),n("div",{staticClass:"size-log-box"})],2)},staticRenderFns:[]};var k={name:"FlexViewport",components:{ContainerBox:n("VU/8")(C,S,!1,function(t){n("Vjrt")},"data-v-2a813d5c",null).exports}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"flex-viewport"}},[e("div",{staticClass:"viewport"},[e("div",{staticClass:"container-wrap"},[e("container-box")],1)]),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var N=n("VU/8")(k,F,!1,function(t){n("uMRH")},"data-v-7ace7302",null).exports,z={name:"FlexLog",data:function(){return{}},computed:m()({},Object(v.c)(["logHistory"])),mounted:function(){l()("#flex-log").resizable({edges:{top:!0,bottom:!1,left:!1,right:!1}}).on("resizemove",function(t){t.target.style.flexBasis=t.rect.height+"px"})}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],attrs:{id:"flex-log"}},[n("ul",t._l(t.logHistory,function(e){return n("li",[t._v("\n      "+t._s(e)+"\n    ")])}))])},staticRenderFns:[]};var I={name:"FlexMain",data:function(){return{}},components:{FlexDashboard:b,FlexViewport:N,FlexLog:n("VU/8")(z,O,!1,function(t){n("hOcD")},"data-v-2697c43a",null).exports}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"flex-main"}},[e("flex-dashboard"),this._v(" "),e("flex-viewport",[e("flex-log")],1)],1)},staticRenderFns:[]};var E=n("VU/8")(I,j,!1,function(t){n("i9LO")},"data-v-7e1a8c81",null).exports;i.a.use(o.a);var T=new o.a({routes:[{path:"/",name:"FlexMain",component:E}]});i.a.use(v.a);var $=new v.a.Store({state:{logHistory:[],containerStyle:{display:"flex",flexFlow:"row nowrap",flexDirection:"row",flexWrap:"nowrap",background:"royalblue",width:"100%",height:"300px"},itemStyle:{width:"100px",height:"100px",background:"tomato",flex:"0 3 auto"},itemCount:{count:10},flexProperties:{display:["flex","block"],flexDirection:["row","row-reverse","column","column-reverse"],flexWrap:["nowrap","wrap","wrap-reverse"],justifyContent:["flex-start","flex-end","center","space-between","space-around"],alignContent:["stretch","flex-start","flex-end","center","space-between","space-around"],alignItems:["stretch","flex-start","flex-end","center","baseline"]},selectValue:null},getters:{},mutations:{updateLog:function(t,e){var n=e.event.target,i=n.innerHTML,a=getComputedStyle(n).width,u=getComputedStyle(n).height,o=getComputedStyle(n).flex,r=document.getElementById("flex-container").style.width;t.logHistory.push(i+": "+a+"("+r+") / "+u+" / "+o)},updatingSelectValue:function(t,e){t.selectValue=e.inputValue}},actions:{}}),D=(n("feh2"),n("iodX"),n("bNL2")),H=n.n(D);i.a.use(H.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:T,store:$,template:"<App/>",components:{App:u}})},SG2C:function(t,e){},TewM:function(t,e){},VPMk:function(t,e){},Vjrt:function(t,e){},VpI0:function(t,e){},Wk3O:function(t,e){},X0uL:function(t,e){},XEJZ:function(t,e){},aG4R:function(t,e){},bUuw:function(t,e){},feh2:function(t,e){},hOcD:function(t,e){},i9LO:function(t,e){},jdpu:function(t,e){},kN2P:function(t,e){},ldKY:function(t,e){},n2ri:function(t,e){},qI60:function(t,e){},"qzS+":function(t,e){},"sd0+":function(t,e){},uMRH:function(t,e){},vZCS:function(t,e){},z8DT:function(t,e){},zAZt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.167fe8a96a9a7e9c839f.js.map