import{r as i,c as l,e as B,w as d,f as _,b as n,_ as N,g as u,B as U,o as s,h as m,a as p,d as w}from"./index-Be3XaFZe.js";import{a as C,U as P,I as b}from"./api-DF7AwzxZ.js";import{D as V}from"./EyeOutlined-CsWVpAWc.js";const M={class:"container mx-auto flex flex-col items-center max-h-screen p-4 space-y-4"},D={key:1,class:"space-y-4"},G={class:"ant-upload-drag-icon"},$=p("p",{class:"ant-upload-text"},"拖拽文件到此处，或点击上传",-1),I=p("p",{class:"ant-upload-hint"},"仅支持PNG文件",-1),j={key:2,class:"flex items-center justify-center w-full"},E={key:0},F={key:1,class:"text-center text-gray-500"},T={__name:"MonthlyForecastPredictView",setup(L){const a=i(null),c=i([]),o=i(!1),f=t=>{const e=t.type==="image/png";return e||u.error("仅支持PNG文件"),e},h=t=>{const{status:e}=t.file;e==="done"?u.success(`${t.file.name} 文件上传成功`):e==="error"&&u.error(`${t.file.name} 文件上传失败`)},v=()=>{if(a.value){const t=a.value.year(),e=a.value.month();C(t,e).then(r=>{c.value=r,o.value=!0})}else u.error("请选择月份")},g=()=>{o.value=!1,c.value=[],a.value=null};return(t,e)=>{const r=U,k=P,y=V;return s(),l("div",M,[o.value?(s(),B(r,{key:0,class:"self-start",onClick:g},{default:d(()=>[m(" 返回 ")]),_:1})):_("",!0),o.value?_("",!0):(s(),l("div",D,[n(k,{beforeUpload:f,multiple:!1,showUploadList:!1,onChange:h},{default:d(()=>[p("p",G,[n(w(b))]),$,I]),_:1}),n(y,{value:a.value,"onUpdate:value":e[0]||(e[0]=x=>a.value=x),picker:"month",placeholder:"选择月份"},null,8,["value"]),n(r,{type:"primary",onClick:v},{default:d(()=>[m("提交")]),_:1})])),o.value?(s(),l("div",j,[c.value.length?(s(),l("div",E,[n(N,{images:c.value},null,8,["images"])])):(s(),l("div",F,"请上传图片并选择月份以查看预测结果"))])):_("",!0)])}}};export{T as default};