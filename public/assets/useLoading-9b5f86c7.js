import{b as s,r as e}from"./index-62750275.js";function r(){const r=s();let a;const t=e(!1),o=(s,e)=>{e&&("error"===s&&r.error(e),"success"===s&&r.success(e)),c()},c=()=>{a&&a.destroy(),a=void 0,t.value=!1};return{loading:a,status:t,startLoading:async(s="加载中...",e,c)=>{if(o(),t.value=!0,!c&&(a=r.loading(s,{duration:0})),e)try{await e()}catch(n){o("error",n||n.message||"加载失败!")}},closeLoading:o,createMessage:r.create}}export{r as u};