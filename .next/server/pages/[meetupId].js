(()=>{var e={};e.id=549,e.ids=[549,888,660],e.modules={153:e=>{e.exports={detail:"MeetupDetail_detail__fx3Eg"}},42:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>q,default:()=>j,getServerSideProps:()=>w,getStaticPaths:()=>D,getStaticProps:()=>v,reportWebVitals:()=>y,routeModule:()=>k,unstable_getServerProps:()=>I,unstable_getServerSideProps:()=>W,unstable_getStaticParams:()=>A,unstable_getStaticPaths:()=>E,unstable_getStaticProps:()=>M});var s={};r.r(s),r.d(s,{default:()=>_,getStaticPaths:()=>P,getStaticProps:()=>h});var a=r(7093),i=r(5244),n=r(1323),o=r(7481),d=r.n(o),l=r(9140),c=r(997),u=r(8013),p=r(153),m=r.n(p);let g=function(e){return(0,c.jsxs)("section",{className:m().detail,children:[c.jsx("img",{src:e.image,alt:e.title}),c.jsx("h1",{children:e.title}),c.jsx("address",{children:e.address}),c.jsx("p",{children:e.description})]})};var b=r(6689),S=r(968),x=r.n(S);async function P(){let e=await u.MongoClient.connect("mongodb+srv://chrissamps24:QR9b6aZ1ErM5DrAE@cluster0.pbdlods.mongodb.net/meetups?retryWrites=true&w=majority"),t=e.db(),r=t.collection("meetups"),s=await r.find({},{_id:1}).toArray();return e.close(),{fallback:!1,paths:s.map(e=>({params:{meetupId:e._id.toString()}}))}}async function h(e){let t=e.params.meetupId,r=await u.MongoClient.connect("mongodb+srv://chrissamps24:QR9b6aZ1ErM5DrAE@cluster0.pbdlods.mongodb.net/meetups?retryWrites=true&w=majority"),s=r.db(),a=s.collection("meetups"),i=await a.findOne({_id:new u.ObjectId(t)});return r.close(),console.log(i),{props:{meetupData:{id:i._id.toString(),title:i.title,image:i.image,address:i.address,description:i.description}}}}let _=function(e){return(0,c.jsxs)(b.Fragment,{children:[(0,c.jsxs)(x(),{children:[c.jsx("title",{children:e.meetupData.title}),c.jsx("meta",{name:"description",content:e.meetupData.description})]}),c.jsx(g,{image:e.meetupData.image,title:e.meetupData.title,address:e.meetupData.address,description:e.meetupData.description})]})},f=a.PagesRouteModule,j=(0,n.l)(s,"default"),v=(0,n.l)(s,"getStaticProps"),D=(0,n.l)(s,"getStaticPaths"),w=(0,n.l)(s,"getServerSideProps"),q=(0,n.l)(s,"config"),y=(0,n.l)(s,"reportWebVitals"),M=(0,n.l)(s,"unstable_getStaticProps"),E=(0,n.l)(s,"unstable_getStaticPaths"),A=(0,n.l)(s,"unstable_getStaticParams"),I=(0,n.l)(s,"unstable_getServerProps"),W=(0,n.l)(s,"unstable_getServerSideProps"),k=new f({definition:{kind:i.x.PAGES,page:"/[meetupId]",pathname:"/[meetupId]",bundlePath:"",filename:""},components:{App:l.default,Document:d()},userland:s})},8013:e=>{"use strict";e.exports=require("mongodb")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[174,481,664,450,140],()=>r(42));module.exports=s})();