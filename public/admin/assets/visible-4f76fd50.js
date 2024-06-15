import{d as C,O as T,r as x,y as q,c as l,o as R,e as j,h as e,i as t,f as s,l as E,P as y,E as h,z as N,s as w}from"./index-a2cde0ca.js";const O={class:"flex justify-between"},F=s("b",null,"客户端显示设置",-1),I=s("div",{style:{width:"250px"}}," 用于应用菜单顶部的自定义语句、修改后将生效、不设置则使用默认的！ ",-1),Q=s("div",{style:{width:"250px"}}," 用于应用菜单顶部的自定义背景图片地址、修改后将生效、不设置则使用默认的！ ",-1),z=C({__name:"visible",setup(A){const a=T({appMenuHeaderTips:null,appMenuHeaderBgUrl:null}),M=x({appMenuHeaderTips:[{required:!0,trigger:"blur",message:"填写应用市场的提示语"}],appMenuHeaderBgUrl:[{required:!0,trigger:"blur",message:"请填写应用市场头部背景图地址"}]}),c=x();async function u(){const n=await y.queryConfig({keys:["appMenuHeaderTips","appMenuHeaderBgUrl"]});Object.assign(a,n.data)}function v(){var n;(n=c.value)==null||n.validate(async o=>{if(o){try{await y.setConfig({settings:H(a)}),h.success("变更配置信息成功")}catch{}u()}else h.error("请填写完整信息")})}function H(n){return Object.keys(n).map(o=>({configKey:o,configVal:n[o]}))}return q(()=>{u()}),(n,o)=>{const i=l("el-alert"),V=N,U=l("el-button"),p=l("el-input"),d=l("QuestionFilled"),_=l("el-icon"),f=l("el-tooltip"),m=l("el-form-item"),g=l("el-col"),b=l("el-row"),k=l("el-form"),B=l("el-card");return R(),j("div",null,[e(V,null,{default:t(()=>[e(i,{closable:!1,"show-icon":"",title:"客户端UI设置",description:"对于用户端各个模块的显隐控制、具体显示部分参考提示！app",type:"success"})]),_:1}),e(B,{style:{margin:"20px"}},{header:t(()=>[s("div",O,[F,e(U,{class:"button",text:"",onClick:v},{default:t(()=>[E(" 保存设置 ")]),_:1})])]),default:t(()=>[e(k,{ref_key:"formRef",ref:c,rules:M.value,model:a,"label-width":"150px"},{default:t(()=>[e(b,null,{default:t(()=>[e(g,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(m,{label:"应用菜单顶部提示语",prop:"maxRounds"},{default:t(()=>[e(p,{modelValue:a.appMenuHeaderTips,"onUpdate:modelValue":o[0]||(o[0]=r=>a.appMenuHeaderTips=r),placeholder:"请填写应用菜单顶部提示语",clearable:"",style:{width:"80%"}},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[I]),default:t(()=>[e(_,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(d)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(g,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(m,{label:"应用菜单顶部背景图",prop:"maxRounds"},{default:t(()=>[e(p,{modelValue:a.appMenuHeaderBgUrl,"onUpdate:modelValue":o[1]||(o[1]=r=>a.appMenuHeaderBgUrl=r),placeholder:"请填写应用菜单顶部背景图地址",clearable:"",style:{width:"80%"}},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Q]),default:t(()=>[e(_,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(d)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof w=="function"&&w(z);export{z as default};