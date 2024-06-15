import{d as K,O as w,r as f,y as C,c as n,o as q,e as U,h as e,i as t,f as S,l as j,P as m,E as v,z as E,s as B}from"./index-a2cde0ca.js";const N={class:"flex justify-between"},O=S("b",null,"百度文本审核参数设置",-1),R=K({__name:"builtIn",setup(M){const o=w({rocketaiBuiltInSensitiveStatus:"",rocketaiBuiltInSensitiveApiBase:"",rocketaiBuiltInSensitiveAuthKey:""}),g=f({rocketaiBuiltInSensitiveStatus:[{required:!0,trigger:"blur",message:"请选择是否启用官方敏感词审核"}],rocketaiBuiltInSensitiveApiBase:[{required:!0,trigger:"blur",message:"请填写官方敏感词审核Api地址"}],rocketaiBuiltInSensitiveAuthKey:[{required:!0,trigger:"blur",message:"请填写官方敏感词审核授权Key"}]}),c=f();async function _(){const i=await m.queryConfig({keys:["rocketaiBuiltInSensitiveStatus","rocketaiBuiltInSensitiveAuthKey","rocketaiBuiltInSensitiveApiBase"]});Object.assign(o,i.data)}function k(){var i;(i=c.value)==null||i.validate(async l=>{if(l){try{await m.setConfig({settings:y(o)}),v.success("变更配置信息成功")}catch{}_()}else v.error("请填写完整信息")})}function y(i){return Object.keys(i).map(l=>({configKey:l,configVal:i[l]}))}return C(()=>{_()}),(i,l)=>{const p=n("el-alert"),I=E,b=n("el-button"),A=n("el-switch"),h=n("el-tooltip"),s=n("el-form-item"),u=n("el-col"),r=n("el-row"),d=n("el-input"),x=n("el-form"),V=n("el-card");return q(),U("div",null,[e(I,null,{default:t(()=>[e(p,{closable:!1,"show-icon":"",title:"RocKetAi敏感词说明",description:"官方提供的敏感词检测Api、价格相对实惠、如需使用请联系管理员购买、后续开通专有的通道！",type:"success"})]),_:1}),e(V,{style:{margin:"20px"}},{header:t(()=>[S("div",N,[O,e(b,{class:"button",text:"",onClick:k},{default:t(()=>[j(" 保存设置 ")]),_:1})])]),default:t(()=>[e(x,{ref_key:"formRef",ref:c,rules:g.value,model:o,"label-width":"150px"},{default:t(()=>[e(r,null,{default:t(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(s,{label:"开启此敏感词设置",prop:"rocketaiBuiltInSensitiveStatus"},{default:t(()=>[e(h,{content:"开启将打开敏感词检测、如果同时开启其他敏感词将会通过菜单顺序仅同时开启一个！",placement:"top","show-after":500},{default:t(()=>[e(A,{modelValue:o.rocketaiBuiltInSensitiveStatus,"onUpdate:modelValue":l[0]||(l[0]=a=>o.rocketaiBuiltInSensitiveStatus=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(s,{label:"文本审核ApiKey",prop:"rocketaiBuiltInSensitiveApiBase"},{default:t(()=>[e(d,{modelValue:o.rocketaiBuiltInSensitiveApiBase,"onUpdate:modelValue":l[1]||(l[1]=a=>o.rocketaiBuiltInSensitiveApiBase=a),placeholder:"请填写官方敏感词审核Api地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(s,{label:"文本审核SecretKey",prop:"rocketaiBuiltInSensitiveAuthKey"},{default:t(()=>[e(d,{modelValue:o.rocketaiBuiltInSensitiveAuthKey,"onUpdate:modelValue":l[2]||(l[2]=a=>o.rocketaiBuiltInSensitiveAuthKey=a),placeholder:"请填写官方敏感词审核授权Key",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof B=="function"&&B(R);export{R as default};