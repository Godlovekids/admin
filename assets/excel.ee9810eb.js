import{e as a}from"./index.f45647a5.js";import{a as e,j as l,r as s,b as r,c as t,f as d,w as n,u as o,F as p,h as u,l as b}from"./vendor.fe04a56c.js";const c={class:"excel"},m=b("导出Excel");var f=e({expose:[],setup(e){const b=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],f=l([{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516"}]);return(e,l)=>{const i=s("el-button"),v=s("el-row"),x=s("el-table-column"),j=s("el-table");return r(),t("div",c,[d(v,null,{default:n((()=>[d(i,{onClick:l[1]||(l[1]=e=>o(a)(b,f.value))},{default:n((()=>[m])),_:1})])),_:1}),d(j,{data:f.value,stripe:""},{default:n((()=>[(r(),t(p,null,u(b,(a=>d(x,{"align-center":"",prop:a.prop,label:a.label,key:a.label},null,8,["prop","label"]))),64))])),_:1},8,["data"])])}}});export default f;