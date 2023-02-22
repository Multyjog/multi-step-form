(function(){"use strict";var e={1346:function(e,a,n){var l=n(9242),r=n(1020),t=n(6653),o=n(3396);function i(e,a,n,l,r,t){const i=(0,o.up)("Form");return(0,o.wg)(),(0,o.j4)(i)}function s(e,a,n,r,t,i){const s=(0,o.up)("ProgressInfo"),d=(0,o.up)("Button"),u=(0,o.Q2)("motion-roll-left");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s,{onGoBack:r.goBack,value:r.currentStep.progress},null,8,["onGoBack","value"]),(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("form",{id:"form",onSubmit:a[1]||(a[1]=(0,l.iM)(((...e)=>r.handleSubmit&&r.handleSubmit(...e)),["prevent"])),class:"current-step"},[(0,o.wy)(((0,o.wg)(),(0,o.j4)((0,o.LL)(r.currentStep.id),{userData:r.dataFromStore,onFormValid:r.storeData,onFormInvalid:a[0]||(a[0]=e=>r.disabled=!0)},null,40,["userData","onFormValid"])),[[u]]),"Results"===r.currentStep.id?((0,o.wg)(),(0,o.j4)(d,{key:0,label:"Start over",onClick:r.restart,class:"start-over-button"},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(d,{key:1,type:"submit",disabled:r.disabled,form:"form",label:"Submit",class:"submit-button"},null,8,["disabled"]))],32)])),[[u]])],64)}var d=n(4870);const u=(0,r.Q_)("form",(()=>{const e=(0,d.iH)({name:"",date:null,email:"",phone:"",card:"",billingName:""}),a=(0,d.iH)([{id:"PersonalInfo",progress:5},{id:"ContactInfo",progress:35},{id:"PaymentInfo",progress:65},{id:"Results",progress:100}]),n=(0,d.iH)({id:"PersonalInfo",progress:5}),l=(0,o.Fl)((()=>n)),r=(0,o.Fl)((()=>{const e=a.value.findIndex((e=>e.id===n.value.id)),l=a.value[e+1];return l})),t=(0,o.Fl)((()=>{const e=a.value.findIndex((e=>e.id===n.value.id)),l=a.value[e-1];return l})),i=(0,o.Fl)((()=>e.value));function s(a,n){e.value[a]=n}function u(e){n.value=e}function m(){e.value={name:"",date:null,email:"",phone:"",card:"",billingName:""},u({id:"PersonalInfo",progress:5})}return{userInfo:e,currentStep:n,getFilledData:i,getNextStep:r,getCurrentStep:l,getPreviousStep:t,addInfo:s,switchStep:u,restart:m}}));var m=n(5939),c=n(1826);const v={class:"button"};function p(e,a,n,l,r,t){const i=(0,o.up)("Button"),s=(0,o.up)("ProgressBar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",v,[(0,o.Wm)(i,{icon:"pi pi-arrow-left",onClick:a[0]||(a[0]=a=>e.$emit("goBack")),class:"p-button-sm",disabled:e.progress<=0},null,8,["disabled"])]),(0,o.Wm)(s,{value:e.progress},null,8,["value"])],64)}var $=n(1492),f=(0,o.aZ)({name:"ProgressInfo",props:["value"],emits:["goBack"],components:{ProgressBar:$.Z,Button:c.Z},setup(e){const a=(0,o.Fl)((()=>e.value));return{progress:a}}}),g=n(89);const b=(0,g.Z)(f,[["render",p],["__scopeId","data-v-74ae9f5d"]]);var w=b,_=n(7139);const h=e=>((0,o.dD)("data-v-1a563f6d"),e=e(),(0,o.Cn)(),e),y=h((()=>(0,o._)("div",{class:"header"},"Personal information:",-1))),D={class:"field"},k={key:0,class:"p-error"},I={class:"field"},V={key:0,class:"p-error"};function C(e,a,n,l,r,t){const i=(0,o.up)("InputText"),s=(0,o.up)("Calendar");return(0,o.wg)(),(0,o.iD)("div",null,[y,(0,o._)("div",D,[(0,o._)("div",null,[(0,o.Wm)(i,{id:"name",placeholder:"Name",modelValue:e.v$.name.$model,"onUpdate:modelValue":a[0]||(a[0]=a=>e.v$.name.$model=a),class:(0,_.C_)({"p-invalid":e.v$.name.$invalid&&e.v$.name.$dirty})},null,8,["modelValue","class"])]),e.v$.name.$dirty&&e.v$.name.$invalid||e.v$.name.$pending.$response?((0,o.wg)(),(0,o.iD)("small",k,(0,_.zw)(e.v$.name.required.$message.replace("Value","Name")),1)):(0,o.kq)("",!0)]),(0,o._)("div",I,[(0,o._)("div",null,[(0,o.Wm)(s,{dateFormat:"dd-mm-yy",placeholder:"DOB",id:"date",modelValue:e.v$.date.$model,"onUpdate:modelValue":a[1]||(a[1]=a=>e.v$.date.$model=a)},null,8,["modelValue"])]),e.v$.date.$dirty&&e.v$.date.$invalid||e.v$.date.$pending.$response?((0,o.wg)(),(0,o.iD)("small",V,(0,_.zw)(e.v$.date.required.$message.replace("Value","Birthday")),1)):(0,o.kq)("",!0)])])}var P=n(6709),Z=n(1578),S=n(9117),F=n(3053),N=(0,o.aZ)({name:"PersonalInfo",emits:["formValid","formInvalid"],props:["userData"],components:{InputText:P.Z,Calendar:Z.Z},setup(e,{emit:a}){const n=(0,d.iH)({name:e.userData.name,date:e.userData.date}),l={name:{required:S.C1},date:{required:S.C1}},r=(0,F.Xw)(l,n);return(0,o.YP)(r,(async(e,l)=>{e.$invalid?a("formInvalid"):a("formValid",n.value)})),{v$:r}}});const q=(0,g.Z)(N,[["render",C],["__scopeId","data-v-1a563f6d"]]);var B=q;const x=e=>((0,o.dD)("data-v-383bb3c4"),e=e(),(0,o.Cn)(),e),O=x((()=>(0,o._)("div",{class:"header"},"Personal information:",-1))),z={class:"field"},H={key:0,class:"p-error"},U={class:"field"},Y={key:0},j={class:"p-error"},W={key:1,class:"p-error"};function M(e,a,n,l,r,t){const i=(0,o.up)("InputMask"),s=(0,o.up)("InputText");return(0,o.wg)(),(0,o.iD)("div",null,[O,(0,o._)("div",z,[(0,o._)("div",null,[(0,o.Wm)(i,{id:"phoneext",mask:"(999) 999-9999",modelValue:e.v$.phone.$model,"onUpdate:modelValue":a[0]||(a[0]=a=>e.v$.phone.$model=a),class:(0,_.C_)({"p-invalid":e.v$.phone.$invalid&&e.v$.phone.$dirty}),placeholder:"(999) 999-9999"},null,8,["modelValue","class"])]),e.v$.phone.$dirty&&e.v$.phone.$invalid||e.v$.phone.$pending.$response?((0,o.wg)(),(0,o.iD)("small",H,(0,_.zw)(e.v$.phone.required.$message.replace("Value","Phone")),1)):(0,o.kq)("",!0)]),(0,o._)("div",U,[(0,o._)("div",null,[(0,o.Wm)(s,{id:"email",modelValue:e.v$.email.$model,"onUpdate:modelValue":a[1]||(a[1]=a=>e.v$.email.$model=a),class:(0,_.C_)({"p-invalid":e.v$.email.$invalid&&e.v$.email.$dirty}),"aria-describedby":"email-error",placeholder:"example@gmail.com"},null,8,["modelValue","class"])]),e.v$.email.$error&&e.v$.email.$dirty?((0,o.wg)(),(0,o.iD)("span",Y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.v$.email.$errors,((e,a)=>((0,o.wg)(),(0,o.iD)("span",{id:"email-error",key:a},[(0,o._)("small",j,(0,_.zw)(e.$message),1)])))),128))])):e.v$.email.$invalid&&e.v$.email.$dirty||e.v$.email.$pending.$response?((0,o.wg)(),(0,o.iD)("small",W,(0,_.zw)(e.v$.email.required.$message.replace("Value","Email")),1)):(0,o.kq)("",!0)])])}var T=n(4697),E=(0,o.aZ)({name:"ContactInfo",emits:["formValid","formInvalid"],props:["userData"],components:{InputText:P.Z,InputMask:T.Z},setup(e,{emit:a}){const n=(0,d.iH)({phone:e.userData.phone,email:e.userData.email}),l={phone:{required:S.C1},email:{required:S.C1,email:S.Do}},r=(0,F.Xw)(l,n);return(0,o.YP)(r,(async(e,l)=>{e.$invalid?a("formInvalid"):a("formValid",n.value)})),{v$:r}}});const R=(0,g.Z)(E,[["render",M],["__scopeId","data-v-383bb3c4"]]);var X=R;const G=e=>((0,o.dD)("data-v-3853d113"),e=e(),(0,o.Cn)(),e),K=G((()=>(0,o._)("div",{class:"header"},"Payment information:",-1))),L={class:"field"},Q={key:0},A={class:"p-error"},J={key:1,class:"p-error"},ee={class:"field"},ae={key:0,class:"p-error"};function ne(e,a,n,l,r,t){const i=(0,o.up)("InputMask"),s=(0,o.up)("InputText");return(0,o.wg)(),(0,o.iD)("div",null,[K,(0,o._)("div",L,[(0,o._)("div",null,[(0,o.Wm)(i,{id:"card",mask:"9999-9999-9999-9999",placeholder:"9999-9999-9999-9999",modelValue:e.v$.card.$model,"onUpdate:modelValue":a[0]||(a[0]=a=>e.v$.card.$model=a),class:(0,_.C_)({"p-invalid":e.v$.card.$invalid&&e.v$.card.$dirty})},null,8,["modelValue","class"])]),e.v$.card.$error&&e.v$.card.$dirty?((0,o.wg)(),(0,o.iD)("span",Q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.v$.card.$errors,((e,a)=>((0,o.wg)(),(0,o.iD)("span",{id:"card-error",key:a},[(0,o._)("small",A,(0,_.zw)(e.$message),1)])))),128))])):e.v$.card.$invalid&&e.v$.card.$dirty||e.v$.card.$pending.$response?((0,o.wg)(),(0,o.iD)("small",J,(0,_.zw)(e.v$.card.required.$message.replace("Value","Card")),1)):(0,o.kq)("",!0)]),(0,o._)("div",ee,[(0,o._)("div",null,[(0,o.Wm)(s,{id:"billing-name",placeholder:"Billing name",modelValue:e.v$.billingName.$model,"onUpdate:modelValue":a[1]||(a[1]=a=>e.v$.billingName.$model=a),class:(0,_.C_)({"p-invalid":e.v$.billingName.$invalid&&e.v$.billingName.$dirty})},null,8,["modelValue","class"])]),e.v$.billingName.$dirty&&e.v$.billingName.$invalid||e.v$.billingName.$pending.$response?((0,o.wg)(),(0,o.iD)("small",ae,(0,_.zw)(e.v$.billingName.required.$message.replace("Value","Name")),1)):(0,o.kq)("",!0)])])}var le=(0,o.aZ)({name:"PaymentInfo",emits:["formValid","formInvalid"],props:["userData"],components:{InputMask:T.Z,InputText:P.Z},setup(e,{emit:a}){const n=(0,d.iH)({card:e.userData.card,billingName:e.userData.billingName}),l={card:{required:S.C1},billingName:{required:S.C1}},r=(0,F.Xw)(l,n);return(0,o.YP)(r,(async(e,l)=>{e.$invalid?a("formInvalid"):a("formValid",n.value)})),{v$:r}}});const re=(0,g.Z)(le,[["render",ne],["__scopeId","data-v-3853d113"]]);var te=re;const oe=(0,o._)("h3",null,"Your Summary:",-1),ie=(0,o._)("strong",null,"Name:",-1),se=(0,o._)("strong",null,"DOB:",-1),de=(0,o._)("strong",null,"Email:",-1),ue=(0,o._)("strong",null,"Phone:",-1),me=(0,o._)("strong",null,"Card number:",-1),ce=(0,o._)("strong",null,"Billing name:",-1);function ve(e,a,n,l,r,t){return(0,o.wg)(),(0,o.iD)("div",null,[oe,(0,o._)("div",null,[ie,(0,o.Uk)(" "+(0,_.zw)(e.data.name),1)]),(0,o._)("div",null,[se,(0,o.Uk)(" "+(0,_.zw)(e.formattedDate),1)]),(0,o._)("div",null,[de,(0,o.Uk)(" "+(0,_.zw)(e.data.email),1)]),(0,o._)("div",null,[ue,(0,o.Uk)(" "+(0,_.zw)(e.data.phone),1)]),(0,o._)("div",null,[me,(0,o.Uk)(" "+(0,_.zw)(e.data.card),1)]),(0,o._)("div",null,[ce,(0,o.Uk)(" "+(0,_.zw)(e.data.billingName),1)])])}var pe=n(5743),$e=n.n(pe),fe=(0,o.aZ)({name:"ResultsInfo",emits:["startOver","formValid","formInvalid"],setup(){const e=u(),a=e.getFilledData,n=$e()(a.date).format("DD-MM-YYYY");return{data:a,formattedDate:n}}});const ge=(0,g.Z)(fe,[["render",ve]]);var be=ge,we={name:"Form-View",components:{Button:c.Z,ProgressInfo:w,PersonalInfo:B,ContactInfo:X,PaymentInfo:te,Results:be},setup(){const e=u(),a=e.getCurrentStep,n=(0,d.iH)(!0),l=(0,d.iH)({}),r=(0,o.Fl)((()=>e.getFilledData)),t=e=>{n.value=!1,l.value=e},i=()=>{e.restart()},s=()=>{const n=Object.keys(l.value);n.forEach((a=>{e.addInfo(a,l.value[a])})),"PaymentInfo"===a.value.id&&c(),v()},c=async()=>{const a=e.getFilledData;m.Z.post("/userInfo",a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},v=()=>{const a=e.getNextStep;n.value=!0,e.switchStep(a)},p=()=>{const a=e.getPreviousStep;n.value=!1,e.switchStep(a)};return{goBack:p,restart:i,disabled:n,storeData:t,currentStep:a,handleSubmit:s,dataFromStore:r,dataFromCurrentForm:l}}};const _e=(0,g.Z)(we,[["render",s],["__scopeId","data-v-34f5b9ec"]]);var he=_e,ye=(0,o.aZ)({name:"App",components:{Form:he}});const De=(0,g.Z)(ye,[["render",i]]);var ke=De,Ie=n(3852);const Ve=(0,l.ri)(ke);Ve.use(Ie.Z);const Ce=(0,r.WB)();Ve.use(t.tc),Ve.use(Ce),Ve.mount("#app")}},a={};function n(l){var r=a[l];if(void 0!==r)return r.exports;var t=a[l]={exports:{}};return e[l].call(t.exports,t,t.exports,n),t.exports}n.m=e,function(){var e=[];n.O=function(a,l,r,t){if(!l){var o=1/0;for(u=0;u<e.length;u++){l=e[u][0],r=e[u][1],t=e[u][2];for(var i=!0,s=0;s<l.length;s++)(!1&t||o>=t)&&Object.keys(n.O).every((function(e){return n.O[e](l[s])}))?l.splice(s--,1):(i=!1,t<o&&(o=t));if(i){e.splice(u--,1);var d=r();void 0!==d&&(a=d)}}return a}t=t||0;for(var u=e.length;u>0&&e[u-1][2]>t;u--)e[u]=e[u-1];e[u]=[l,r,t]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var l in a)n.o(a,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,l){var r,t,o=l[0],i=l[1],s=l[2],d=0;if(o.some((function(a){return 0!==e[a]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(a&&a(l);d<o.length;d++)t=o[d],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(u)},l=self["webpackChunkmulti_step_form"]=self["webpackChunkmulti_step_form"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(1346)}));l=n.O(l)})();
//# sourceMappingURL=app.dc3492a8.js.map