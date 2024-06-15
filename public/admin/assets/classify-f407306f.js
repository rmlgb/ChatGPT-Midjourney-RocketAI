import{d as re,r as m,O as h,I as $,y as ue,c as s,Q as de,o as b,e as U,h as e,i as a,k as ie,m as pe,J as ce,K as me,L as z,g as r,l as i,w as fe,t as P,f as _e,M as ge,R as C,S as ve,E as V,z as be,s as q}from"./index-a2cde0ca.js";import{u as ye}from"./utcformatTime-e76e5157.js";import{E as we,Q as Ve}from"./index-f74fb548.js";const ke=["src"],Ce={class:"flex justify-end mr-5"},Ie=re({__name:"classify",setup(he){const S=m(),T=m(0),f=m(!1),k=m(!1),B=m("/api/upload/file"),d=h({name:"",status:"",page:1,size:10}),I=m(),v=m(0),n=h({name:"",des:"",coverImg:"",order:100,status:0}),N=h({name:[{required:!0,message:"请填写分类名称",trigger:"blur"}],des:[{required:!0,message:"请填写分类描述",trigger:"blur"}],coverImg:[{required:!1,message:"请填写分类封面图片地址",trigger:"blur"}],order:[{required:!1,message:"请填写排序ID",trigger:"blur"}],status:[{required:!0,message:"请选择分类状态",trigger:"change"}]}),x=m([]),R=$(()=>v.value?"更新套餐":"新增套餐"),j=$(()=>v.value?"确认更新":"确认新增");async function p(){try{k.value=!0;const o=await C.queryCats(d),{rows:l,count:y}=o.data;k.value=!1,T.value=y,x.value=l}catch{k.value=!1}}function K(o){v.value=o.id;const{name:l,status:y,des:w,order:_,coverImg:u}=o;ve(()=>{Object.assign(n,{name:l,status:y,des:w,order:_,coverImg:u})}),f.value=!0}function O(o){v.value=0,o==null||o.resetFields()}async function F(o){await C.deleteCats({id:o.id}),V.success("删除分类成功"),p()}function L(o){o==null||o.resetFields(),p()}const Y=(o,l)=>{n.coverImg=o.data},G=o=>{if(["image/png","image/jpeg","image/gif","image/webp"].includes(o.type)){if(o.size/1024>300)return V.error("当前限制文件最大不超过 300KB!"),!1}else return V.error("当前系统仅支持 PNG、JPEG、GIF、和 WebP 格式的图片!"),!1;return!0};function Q(o){o==null||o.validate(async l=>{l&&(v.value?(await C.updateCats({id:v.value,...n}),V({type:"success",message:"更新套餐成功！"})):(await C.createCats(n),V({type:"success",message:"创建新的套餐成功！"})),f.value=!1,p())})}return ue(()=>{p()}),(o,l)=>{const y=s("el-alert"),w=be,_=s("el-input"),u=s("el-form-item"),J=s("el-option"),W=s("el-select"),g=s("el-button"),D=s("Plus"),A=s("el-icon"),M=s("el-form"),H=s("el-image"),c=s("el-table-column"),X=s("el-tag"),Z=s("el-popconfirm"),E=s("el-table"),ee=s("el-pagination"),le=s("el-row"),te=s("el-switch"),ae=s("el-upload"),oe=s("el-dialog"),se=de("loading");return b(),U("div",null,[e(w,null,{default:a(()=>[e(y,{closable:!1,"show-icon":"",title:"应用分类说明",description:"你创建的为系统内置分类、可能会被多个用户收藏、一旦创建、不建议删除、系统或限制已经创建的应用、请合理规范应用以免造成不必要的迷惑。",type:"success"})]),_:1}),e(w,null,{default:a(()=>[e(M,{ref_key:"formRef",ref:S,inline:!0,model:d},{default:a(()=>[e(u,{label:"分类名称",prop:"name"},{default:a(()=>[e(_,{modelValue:d.name,"onUpdate:modelValue":l[0]||(l[0]=t=>d.name=t),placeholder:"分类名称[模糊搜索]",onKeydown:ie(pe(p,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])]),_:1}),e(u,{label:"分类状态",prop:"status"},{default:a(()=>[e(W,{modelValue:d.status,"onUpdate:modelValue":l[1]||(l[1]=t=>d.status=t),placeholder:"请选择分类状态",clearable:""},{default:a(()=>[(b(!0),U(ce,null,me(r(we),t=>(b(),z(J,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:a(()=>[e(g,{type:"primary",onClick:p},{default:a(()=>[i(" 查询 ")]),_:1}),e(g,{onClick:l[2]||(l[2]=t=>L(r(S)))},{default:a(()=>[i(" 重置 ")]),_:1})]),_:1}),e(g,{type:"success",style:{float:"right"},onClick:l[3]||(l[3]=t=>f.value=!0)},{default:a(()=>[i(" 创建分类 "),e(A,{class:"ml-3"},{default:a(()=>[e(D)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(w,{style:{width:"100%"}},{default:a(()=>[fe((b(),z(E,{border:"",data:r(x),style:{width:"100%"},size:"large"},{default:a(()=>[e(c,{prop:"coverImg",label:"套餐封面",width:"120"},{default:a(t=>[e(H,{style:{height:"50px"},src:t.row.coverImg,fit:"fill"},null,8,["src"])]),_:1}),e(c,{prop:"name",label:"分类名称"}),e(c,{prop:"appCount",label:"app数量"}),e(c,{prop:"order",label:"排序ID"}),e(c,{prop:"status",label:"分类状态"},{default:a(t=>[e(X,{type:t.row.status===1?"success":"danger"},{default:a(()=>[i(P(r(Ve)[t.row.status]),1)]),_:2},1032,["type"])]),_:1}),e(c,{prop:"des",label:"描述信息",width:"300"}),e(c,{prop:"createdAt",label:"创建时间",width:"200"},{default:a(t=>[i(P(r(ye)(t.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),e(c,{label:"操作",width:"200"},{default:a(t=>[e(g,{link:"",type:"primary",size:"small",onClick:ne=>K(t.row)},{default:a(()=>[i(" 编辑 ")]),_:2},1032,["onClick"]),e(Z,{title:"确认删除此分类么?",width:"200","icon-color":"red",onConfirm:ne=>F(t.row)},{reference:a(()=>[e(g,{link:"",type:"danger",size:"small"},{default:a(()=>[i(" 删除分类 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[se,r(k)]]),e(le,{class:"flex justify-end mt-5"},{default:a(()=>[e(ee,{"current-page":d.page,"onUpdate:currentPage":l[4]||(l[4]=t=>d.page=t),"page-size":d.size,"onUpdate:pageSize":l[5]||(l[5]=t=>d.size=t),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:r(T),onSizeChange:p,onCurrentChange:p},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(oe,{modelValue:r(f),"onUpdate:modelValue":l[13]||(l[13]=t=>ge(f)?f.value=t:null),"close-on-click-modal":!1,title:r(R),width:"570",onClose:l[14]||(l[14]=t=>O(r(I)))},{footer:a(()=>[_e("span",Ce,[e(g,{onClick:l[11]||(l[11]=t=>f.value=!1)},{default:a(()=>[i("取消")]),_:1}),e(g,{type:"primary",onClick:l[12]||(l[12]=t=>Q(r(I)))},{default:a(()=>[i(P(r(j)),1)]),_:1})])]),default:a(()=>[e(M,{ref_key:"formPackageRef",ref:I,"label-position":"right","label-width":"100px",model:n,rules:N},{default:a(()=>[e(u,{label:"分类名称",prop:"name"},{default:a(()=>[e(_,{modelValue:n.name,"onUpdate:modelValue":l[6]||(l[6]=t=>n.name=t),placeholder:"请填写分类名称"},null,8,["modelValue"])]),_:1}),e(u,{label:"分类状态",prop:"status"},{default:a(()=>[e(te,{modelValue:n.status,"onUpdate:modelValue":l[7]||(l[7]=t=>n.status=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),e(u,{label:"背景地址",prop:"coverImg"},{default:a(()=>[e(_,{modelValue:n.coverImg,"onUpdate:modelValue":l[8]||(l[8]=t=>n.coverImg=t),placeholder:"请填写封面图地址"},null,8,["modelValue"])]),_:1}),e(u,{label:"封面",prop:"coverImg"},{default:a(()=>[e(ae,{class:"avatar-uploader",action:r(B),"show-file-list":!1,"on-success":Y,"before-upload":G},{default:a(()=>[n.coverImg?(b(),U("img",{key:0,src:n.coverImg,style:{width:"100px"},class:"avatar"},null,8,ke)):(b(),z(A,{key:1,class:"avatar-uploader-icon"},{default:a(()=>[e(D)]),_:1}))]),_:1},8,["action"])]),_:1}),e(u,{label:"排序ID",prop:"order"},{default:a(()=>[e(_,{modelValue:n.order,"onUpdate:modelValue":l[9]||(l[9]=t=>n.order=t),modelModifiers:{number:!0},placeholder:"请填写排序ID[数字越大越靠前]"},null,8,["modelValue"])]),_:1}),e(u,{label:"套餐描述",prop:"des"},{default:a(()=>[e(_,{modelValue:n.des,"onUpdate:modelValue":l[10]||(l[10]=t=>n.des=t),type:"textarea",placeholder:"请填写分类介绍信息、用于对外展示...",rows:4},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof q=="function"&&q(Ie);export{Ie as default};