(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-da9c"],{"6EGh":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"c",function(){return i}),r.d(t,"d",function(){return l}),r.d(t,"b",function(){return o});var a=r("t3Un");function n(e){return Object(a.a)({url:"/admin/leavemes/page",method:"post",params:e})}function i(e){return Object(a.a)({url:"/admin/leavemes/save",method:"post",data:e})}function l(e){return Object(a.a)({url:"/admin/leavemes/update",method:"post",data:e})}function o(e){return Object(a.a)({url:"/admin/leavemes/remove",method:"post",data:e})}},HlY4:function(e,t,r){},vwIu:function(e,t,r){"use strict";r.r(t);var a=r("6EGh"),n={name:"LeavemesTest",data:function(){return{temp:{title:"",createDate:"2018-12-14 10:27:37",name:"",mobile:"17626013473",email:"1074199421@qq.com",address:"",content:null},loading:!1,rules:{title:[{required:!0,message:"请填写留言标题(150字符以内)",trigger:"blur"},{min:1,max:150,message:"长度在150字符以内",trigger:"blur"}],name:[{required:!0,message:"请填写姓名",trigger:"blur"}],mobile:[{required:!0,message:"请填写手机号码",trigger:"blur"},{validator:function(e,t,r){!1===/^1[34578]\d{9}$/.test(t)?r(new Error("请输入正确的手机号")):r()},trigger:"blur"}],email:[{required:!0,message:"请填写email",trigger:"blur"},{type:"email",message:"请输入正确的email地址",trigger:["blur","change"]}],address:[{required:!0,message:"请填写地址",trigger:"blur"}],content:[{required:!0,message:"请填写留言内容(500字符以内)",trigger:"blur"},{min:1,max:500,message:"长度在500字符以内",trigger:"blur"}]}}},methods:{backToIndex:function(){this.$router.push({path:"/leavemes/leavemes"})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&(e.loading=!0,Object(a.c)(e.temp).then(function(){e.loading=!1,e.backToIndex(),e.$notify({title:"成功",message:"新增成功",type:"success",duration:2e3})}))})},resetForm:function(e){this.$refs[e].resetFields()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)}}},i=(r("wgaU"),r("KHd+")),l=Object(i.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("\n    此处模拟前端页面的提交\n  ")]),e._v(" "),r("div",{staticStyle:{margin:"20px"}}),e._v(" "),r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataForm",staticStyle:{width:"80%","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"80px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{model:{value:e.temp.title,callback:function(t){e.$set(e.temp,"title","string"==typeof t?t.trim():t)},expression:"temp.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"姓名",prop:"name"}},[r("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name","string"==typeof t?t.trim():t)},expression:"temp.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[r("el-input",{model:{value:e.temp.mobile,callback:function(t){e.$set(e.temp,"mobile","string"==typeof t?t.trim():t)},expression:"temp.mobile"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.temp.email,callback:function(t){e.$set(e.temp,"email","string"==typeof t?t.trim():t)},expression:"temp.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"地址",prop:"address"}},[r("el-input",{model:{value:e.temp.address,callback:function(t){e.$set(e.temp,"address","string"==typeof t?t.trim():t)},expression:"temp.address"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"留言内容",prop:"content"}},[r("el-input",{attrs:{rows:5,type:"textarea"},model:{value:e.temp.content,callback:function(t){e.$set(e.temp,"content","string"==typeof t?t.trim():t)},expression:"temp.content"}})],1),e._v(" "),r("el-form-item",{staticStyle:{float:"right"}},[r("el-button",{on:{click:function(t){e.backToIndex()}}},[e._v("返回列表")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.createData()}}},[e._v("立即创建")])],1)],1)],1)},[],!1,null,"6756ccb8",null);l.options.__file="leavemesTest.vue";t.default=l.exports},wgaU:function(e,t,r){"use strict";var a=r("HlY4");r.n(a).a}}]);