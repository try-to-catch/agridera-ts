import{u as b,D as y}from"./products-2c175757.js";import{u as k}from"./cart-eea4fed5.js";import{f as C,k as p,g as j,r as _,o as s,c,b as o,a as t,w as f,j as B,t as l,e as I,i as P,F as V}from"./index-cc3302a1.js";import"./MobileHeader-5ce14c9a.js";const D="/assets/arrow-bdbc4e30.svg",N="/assets/tomato-remark-ba1a9187.svg",A={key:0,class:"pb-28 md:pb-[168px]"},T={class:"text-custom-green my-[18px] mx-2.5 lg:container lg:mx-auto"},F=t("img",{alt:"arrow",class:"w-6",src:D},null,-1),S=t("span",{class:"ml-4"},"Return to all tomatoes",-1),q={class:"lg:container lg:mx-auto mx-2.5 flex flex-col-reverse lg:flex-row md:gap-x-11 justify-items-center lg:justify-items-start"},E={class:"flex flex-col items-center"},G={class:"max-h-[500px] max-w-[540px] overflow-hidden"},H=["src"],M={class:"mt-[30px] max-w-[540px] w-full lg:max-w-full lg:w-full"},R=t("span",{class:"font-bold text-[17px]"},"Add to cart",-1),U=t("span",{class:"font-bold text-[17px]"},"Go to cart",-1),$={class:"lg:text-start text-center"},z={class:"font-bold text-custom-green text-4xl lg:text-5xl"},J={class:"text-custom-gray-900"},K=t("div",{class:"pt-10 lg:block hidden text-custom-green text-[20px]"},"*****",-1),L=t("div",{class:"flex items-center space-x-6 py-10 justify-center lg:justify-start"},[t("div",{class:"basis-20 h-20"},[t("img",{alt:"tomato-remark",class:"h-full w-full",src:N})]),t("h4",{class:"text-custom-red-800 max-w-[395px] text-2xl lg:text-3xl font-bold"}," Very high yield and excellent fruits quality! ")],-1),O={class:"lg:container lg:mx-auto mx-2.5 pt-10"},Q=t("h5",{class:"text-3xl font-bold"}," Description: ",-1),et=C({__name:"ShowProducts",props:{routeId:null},setup(n){const r=n,{getProduct:g}=b(),{addToCart:h,isProductInCart:v}=k(),e=p(),a=p(!0);j(()=>{e.value=g(r.routeId),a.value=!v(r.routeId)});const w=i=>{h(i),a.value=!1};return(i,d)=>{const u=_("router-link"),x=_("font-awesome-icon");return s(),c(V,null,[o(y),e.value?(s(),c("main",A,[t("section",T,[o(u,{to:{name:"products.index"},class:"flex"},{default:f(()=>[F,S]),_:1},8,["to"])]),t("section",q,[t("div",E,[t("div",G,[t("img",{src:e.value.image,alt:"product_image"},null,8,H)]),t("div",M,[a.value?(s(),c("button",{key:0,class:"text-custom-green w-full space-x-5 py-2.5 justify-center px-[30px] border-custom-green border-2 flex items-center rounded-[60px]",onClick:d[0]||(d[0]=W=>{var m;return w(((m=e.value)==null?void 0:m.id)||n.routeId)})},[o(x,{icon:["fas","cart-shopping"]}),R])):(s(),B(u,{key:1,to:{name:"contactUs"},class:"text-custom-green w-full space-x-5 py-2.5 justify-center px-[30px] border-custom-green border-2 flex items-center rounded-[60px]"},{default:f(()=>[o(x,{icon:["fas","cart-shopping"]}),U]),_:1}))])]),t("div",null,[t("div",$,[t("h1",z,[t("span",J,l(e.value.title),1),I(" "+l(e.value.short_text),1)]),K]),L])]),t("section",O,[Q,t("p",null,l(e.value.description),1)])])):P("",!0)],64)}}});export{et as default};