(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60e7334e"],{"0a27":function(e,t,a){"use strict";a("13d5"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0");var i=a("1e3c");t["a"]={mixins:[i["a"]],computed:{valueLabelMap:function(){var e=this.valuefield,t=this.labelfield;return this.candidate.reduce((function(a,i){return a.set(i[e],i[t])}),new Map)}}}},"2bcc":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("ul",{staticClass:"list-group"},e._l(e.value,(function(t,i){return a("li",{key:i,staticClass:"list-group-item"},[e._v(" "+e._s(e.valueLabelMap.has(t)?e.valueLabelMap.get(t):t)+" "),a("i",{staticClass:"el-icon-close pull-right",on:{click:function(t){return e.removeItem(i)}}})])})),0),a("EditorEnumAutocomplete",e._b({attrs:{value:e.selectedId,valuefield:e.valuefield,labelfield:e.labelfield,candidate:e.candidate},on:{input:e.addItem}},"EditorEnumAutocomplete",e.$attrs,!1))],1)},n=[],u=(a("a434"),a("d3b7"),a("2909")),l=a("f533"),s=a("94f0"),c=a("0a27"),r={name:"EditorArrayAutocomplete",components:{EditorEnumAutocomplete:function(){return a.e("chunk-6da09472").then(a.bind(null,"5f1d"))}},mixins:[l["a"],s["a"],c["a"]],data:function(){return{selectedId:""}},methods:{removeItem:function(e){var t=Object(u["a"])(this.value);t.splice(e,1),this.$emit("input",t)},addItem:function(e){this.selectedId=e;var t=Object(u["a"])(this.value);t.push(e),this.$emit("input",t)}}},d=r,o=(a("f2e9"),a("2877")),f=Object(o["a"])(d,i,n,!1,null,"20803f1f",null);t["default"]=f.exports},"4ec9":function(e,t,a){"use strict";var i=a("6d61"),n=a("6566");e.exports=i("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},"562a":function(e,t,a){},"94f0":function(e,t,a){"use strict";t["a"]={props:{value:{type:Array,required:!0}}}},f2e9:function(e,t,a){"use strict";var i=a("562a"),n=a.n(i);n.a},f533:function(e,t,a){"use strict";a("d3b7"),a("6062"),a("3ca3"),a("ddb0");var i=a("b85c"),n=a("172e");t["a"]={mixins:[n["b"]],methods:{validateOption:function(){if(this.isCandidateValid){var e,t=this.allValueSet,a=new Set,n=Object(i["a"])(this.value);try{for(n.s();!(e=n.n()).done;){var u=e.value;if(!t.has(u))return this.handleInvalidValue(this.value,this.allValue);if(a.has(u))return this.handleInvalidValue(this.value,this.allValue);a.add(u)}}catch(l){n.e(l)}finally{n.f()}}}}}}}]);