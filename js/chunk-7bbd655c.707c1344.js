(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bbd655c"],{"22c8":function(t,e,n){"use strict";var r=n("c5f5");e["a"]={mixins:[r["a"]],props:{struct:{type:Function,default:function(){return[]}},value:{required:!0}},computed:{model:{get:function(){try{return JSON.parse(this.value)}catch(e){var t=this.struct();return this.model=t,t}},set:function(t){this.$emit("input",JSON.stringify(t))}}}}},"641c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("EditorArrayFile",t._b({model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},"EditorArrayFile",t.$attrs,!1))},i=[],u=(n("d3b7"),n("22c8")),c={name:"EditorArrayJSONFile",components:{EditorArrayFile:function(){return n.e("chunk-dea8b958").then(n.bind(null,"3b02"))}},mixins:[u["a"]]},o=c,s=n("2877"),a=Object(s["a"])(o,r,i,!1,null,null,null);e["default"]=a.exports},c5f5:function(t,e,n){"use strict";var r=n("5530");e["a"]={computed:{listenersWithoutInput:function(){var t=Object(r["a"])({},this.$listeners);return delete t.input,t}}}}}]);