import{a as e,j as a,o as l,k as s,c as o,f as r,r as u,i as n,b as d,w as t,A as i,u as m,l as p,B as c}from"./vendor.ea77945f.js";import{s as g,r as v}from"./index.20149851.js";const f=e=>{e.resetFormFields()},w={class:"login-container"},h=p("Login"),_=p("重置"),b=p("登陆");var y=e({expose:[],setup(e){const p=a({username:"admin",password:"admin"}),y=a({passwordType:"password",loading:!1}),V=a(null);l((()=>{const e=n();s(e,(()=>{var a;V.value=null==(a=e.query)?void 0:a.redirect}))}));const j=a(null),k={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},q=()=>{j.value.validate((e=>{e?(y.value.loading=!0,g().login(p).then((()=>{var e;c.success("登录成功"),y.value.loading=!1,v.push({path:null!=(e=V.value)?e:"/"})})).catch((e=>{throw y.value.loading=!1,new Error(e)}))):c.warning("请填写用户信息")}))};return(e,a)=>{const l=u("el-row"),s=u("svg-icon"),n=u("el-input"),c=u("el-form-item"),g=u("el-button"),v=u("el-form");return d(),o("div",w,[r(v,{model:p.value,rules:k,ref:j,class:"login-form","label-position":"left"},{default:t((()=>[r(l,{class:"login-title"},{default:t((()=>[h])),_:1}),r(c,{prop:"username"},{default:t((()=>[r(s,{name:"user",size:"1.2em"}),r(n,{modelValue:p.value.username,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value.username=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),r(c,{prop:"password"},{default:t((()=>[r(s,{name:"password",size:"1.2em"}),r(n,{modelValue:p.value.password,"onUpdate:modelValue":a[2]||(a[2]=e=>p.value.password=e),placeholder:"请输入密码","show-password":"",onKeyup:i(q,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),r(l,{class:"login-button"},{default:t((()=>[r(g,{onClick:a[3]||(a[3]=e=>m(f)(j.value))},{default:t((()=>[_])),_:1}),r(g,{loading:y.value.loading,type:"primary",onClick:q},{default:t((()=>[b])),_:1},8,["loading"])])),_:1})])),_:1},8,["model"])])}}});export default y;
