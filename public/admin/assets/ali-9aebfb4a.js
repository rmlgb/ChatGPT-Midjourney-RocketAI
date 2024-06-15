import{d as w,O as h,r as C,I,y as B,c as o,o as R,e as U,h as e,i as l,f as b,l as D,g as m,P as O,E as g,z as N,s as y}from"./index-a2cde0ca.js";const j={class:"flex justify-between"},q=b("b",null,"阿里云OSS参数设置",-1),E=w({__name:"ali",setup(M){const a=h({aliOssStatus:"",aliOssAccessKeyId:"",aliOssAccessKeySecret:"",aliOssRegion:"",aliOssBucket:"",aliOssAcceleratedDomain:""}),f=C();async function _(){const n=await O.queryConfig({keys:["aliOssAccessKeySecret","aliOssRegion","aliOssBucket","aliOssAccessKeyId","aliOssStatus","aliOssAcceleratedDomain"]});Object.assign(a,n.data)}function V(){var n;(n=f.value)==null||n.validate(async s=>{if(s){try{await O.setConfig({settings:x(a)}),g.success("变更配置信息成功")}catch{}_()}else g.error("请填写完整信息")})}function x(n){return Object.keys(n).map(s=>({configKey:s,configVal:n[s]}))}const d=I(()=>[{required:Number(a.aliOssStatus)===1,message:"开启配置后请填写此项",trigger:"change"}]);return B(()=>{_()}),(n,s)=>{const p=o("el-alert"),S=N,A=o("el-button"),K=o("el-switch"),c=o("el-form-item"),u=o("el-col"),i=o("el-row"),r=o("el-input"),k=o("el-form"),v=o("el-card");return R(),U("div",null,[e(S,null,{default:l(()=>[e(p,{closable:!1,"show-icon":"",title:"阿里云COS参数说明",description:"阿里云的对象存储oss服务、前往阿里云申请oss服务 https://oss.console.aliyun.com/ 、如果同时开启多个存储服务、腾讯云高于阿里云优先级！",type:"success"})]),_:1}),e(v,{style:{margin:"20px"}},{header:l(()=>[b("div",j,[q,e(A,{class:"button",text:"",onClick:V},{default:l(()=>[D(" 保存设置 ")]),_:1})])]),default:l(()=>[e(k,{ref_key:"formRef",ref:f,model:a,"label-width":"120px"},{default:l(()=>[e(i,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"服务启用状态",prop:"aliOssStatus"},{default:l(()=>[e(K,{modelValue:a.aliOssStatus,"onUpdate:modelValue":s[0]||(s[0]=t=>a.aliOssStatus=t),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"accessKeyId",prop:"aliOssAccessKeyId",rules:m(d)},{default:l(()=>[e(r,{modelValue:a.aliOssAccessKeyId,"onUpdate:modelValue":s[1]||(s[1]=t=>a.aliOssAccessKeyId=t),placeholder:"请填写SecretId",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"keySecret",prop:"aliOssAccessKeySecret",rules:m(d)},{default:l(()=>[e(r,{modelValue:a.aliOssAccessKeySecret,"onUpdate:modelValue":s[2]||(s[2]=t=>a.aliOssAccessKeySecret=t),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"存储桶名称",prop:"aliOssBucket",rules:m(d)},{default:l(()=>[e(r,{modelValue:a.aliOssBucket,"onUpdate:modelValue":s[3]||(s[3]=t=>a.aliOssBucket=t),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"所属地域",prop:"aliOssRegion",rules:m(d)},{default:l(()=>[e(r,{modelValue:a.aliOssRegion,"onUpdate:modelValue":s[4]||(s[4]=t=>a.aliOssRegion=t),placeholder:"请填写所属地域(oss-cn-shanghai)",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"自定义域名",prop:"aliOssAcceleratedDomain"},{default:l(()=>[e(r,{modelValue:a.aliOssAcceleratedDomain,"onUpdate:modelValue":s[5]||(s[5]=t=>a.aliOssAcceleratedDomain=t),placeholder:"请填写自定义域名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}});typeof y=="function"&&y(E);export{E as default};