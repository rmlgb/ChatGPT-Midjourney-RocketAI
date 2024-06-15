import{d as h,O as T,r as g,y as S,c as o,o as q,e as D,h as e,i as n,f as b,l as U,P as f,E as p,z as B,s as I}from"./index-a2cde0ca.js";const E={class:"flex justify-between"},N=b("b",null,"签到奖励赠送配置",-1),O=h({__name:"signIn",setup(R){const t=T({signInStatus:"",signInModel3Count:"",signInModel4Count:"",signInMjDrawToken:""}),C=g({signInStatus:[{required:!0,trigger:"blur",message:"请选择是否开启签到奖励"}],signInModel3Count:[{required:!0,trigger:"blur",message:"请填写赠送的基础模型额度"}],signInModel4Count:[{required:!0,trigger:"blur",message:"请填写赠送的高级模型额度"}],signInMjDrawToken:[{required:!0,trigger:"blur",message:"请填写赠送的绘画Token数量"}]}),c=g();async function _(){const a=await f.queryConfig({keys:["signInStatus","signInModel3Count","signInModel4Count","signInMjDrawToken"]});Object.assign(t,a.data)}function M(){var a;(a=c.value)==null||a.validate(async l=>{if(l){try{await f.setConfig({settings:w(t)}),p.success("变更配置信息成功")}catch{}_()}else p.error("请填写完整信息")})}function w(a){return Object.keys(a).map(l=>({configKey:l,configVal:a[l]}))}return S(()=>{_()}),(a,l)=>{const m=o("el-alert"),x=B,y=o("el-button"),V=o("el-switch"),k=o("el-tooltip"),u=o("el-form-item"),r=o("el-col"),i=o("el-row"),d=o("el-input"),v=o("el-form"),j=o("el-card");return q(),D("div",null,[e(x,null,{default:n(()=>[e(m,{closable:!1,"show-icon":"",title:"签到奖励说明",description:"开启签到奖励则会在用户端展示签到入口、用户每日可签到一次、获得对应下方设置的奖励、注意不能为负数不赠送模块可以填为0！",type:"warning"})]),_:1}),e(j,{style:{margin:"20px"}},{header:n(()=>[b("div",E,[N,e(y,{class:"button",text:"",onClick:M},{default:n(()=>[U(" 保存设置 ")]),_:1})])]),default:n(()=>[e(v,{ref_key:"formRef",ref:c,rules:C.value,model:t,"label-width":"170px"},{default:n(()=>[e(i,null,{default:n(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:n(()=>[e(u,{label:"开启签到奖励",prop:"signInStatus"},{default:n(()=>[e(k,{class:"box-item",effect:"dark",content:"如您启用签到奖励、则用户端则可以通过每日签到获取额度！",placement:"right"},{default:n(()=>[e(V,{modelValue:t.signInStatus,"onUpdate:modelValue":l[0]||(l[0]=s=>t.signInStatus=s),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,null,{default:n(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:n(()=>[e(u,{label:"赠送基础模型额度",prop:"signInModel3Count"},{default:n(()=>[e(d,{modelValue:t.signInModel3Count,"onUpdate:modelValue":l[1]||(l[1]=s=>t.signInModel3Count=s),type:"number",placeholder:"请填写签到赠送的基础模型额度",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:n(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:n(()=>[e(u,{label:"赠送高级模型额度",prop:"signInModel4Count"},{default:n(()=>[e(d,{modelValue:t.signInModel4Count,"onUpdate:modelValue":l[2]||(l[2]=s=>t.signInModel4Count=s),type:"number",placeholder:"请填写签到赠送的高级模型额度",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:n(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:n(()=>[e(u,{label:"赠送绘画额度",prop:"signInMjDrawToken"},{default:n(()=>[e(d,{modelValue:t.signInMjDrawToken,"onUpdate:modelValue":l[3]||(l[3]=s=>t.signInMjDrawToken=s),type:"number",placeholder:"请填写签到赠送绘画额度",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof I=="function"&&I(O);export{O as default};