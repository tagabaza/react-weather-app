(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{10:function(e,t,a){e.exports={card:"Forecast_card__n_nZv",box:"Forecast_box__1v5YN",tbRow:"Forecast_tbRow__2Jg6I"}},14:function(e,t,a){e.exports={heading:"Header_heading__sAf1D",light:"Header_light__1p9Mt"}},16:function(e,t,a){e.exports={input:"Form_input__2ESfd",button:"Form_button__243jh"}},27:function(e,t,a){e.exports={box:"Page_box__2nPNz"}},29:function(e,t,a){e.exports={error:"Error_error__1Ykqe"}},30:function(e,t,a){e.exports={box:"Loader_box__XZ2hR"}},31:function(e,t,a){e.exports={card:"CurrentDay_card__2-yzD",currentDayTitle:"CurrentDay_currentDayTitle__1gct3",cardInner:"CurrentDay_cardInner__2lPAt",weekday:"CurrentDay_weekday__2xnub"}},32:function(e,t,a){e.exports={weekList:"UpcomingDaysForecast_weekList__3DYk_"}},33:function(e,t,a){e.exports={weekday:"UpcomingDaysForecastItem_weekday__quQBM"}},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(26),s=a.n(c),i=(a(38),a(39),a(27)),o=a.n(i),u=a(14),l=a.n(u),d=a(0),m=function(){return Object(d.jsxs)("h1",{className:l.a.heading,children:[Object(d.jsx)("span",{className:l.a.light,children:"Weather"})," Forecast"]})},b=a(4),j=a(16),h=a.n(j),x=function(e){var t=e.submitSearch,a=Object(n.useState)(),r=Object(b.a)(a,2),c=r[0],s=r[1],i=function(e){e.preventDefault(),c&&""!==c&&t(c)};return Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsx)("input",{"aria-label":"location",type:"text",placeholder:"Search location",required:!0,className:"".concat(h.a.input," form control"),onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:h.a.button,onClick:i,children:"SEARCH"})]})},p=a(29),f=a.n(p),w=function(e){var t=e.message;return Object(d.jsx)("div",{className:"".concat(f.a.error," alert position-absolute"),role:"alert",children:t})};w.defaultProps={message:"An error occurred"};var O=w,_=a(30),v=a.n(_),g=function(){return Object(d.jsx)("div",{className:v.a.box,children:Object(d.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"54px",height:"60px",viewBox:"0 0 24 30",children:[Object(d.jsx)("rect",{x:"0",y:"0",width:"3",height:"10",fill:"#333",children:Object(d.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0",dur:"0.6s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:"10",y:"0",width:"3",height:"10",fill:"#333",children:Object(d.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:"20",y:"0",width:"3",height:"10",fill:"#333",children:Object(d.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"})})]})})},y=a(2),N=a(64),k=a(65),D=a(66),C=a(10),F=a.n(C),S=a(31),M=a.n(S),T=function(e){var t=e.weekday,a=e.date,n=e.location,r=e.temperature,c=e.weatherIcon,s=e.weatherDescription;return Object(d.jsx)("div",{className:"d-flex",children:Object(d.jsxs)("div",{className:"".concat(M.a.cardInner," d-flex flex-column pt-5 pb-2"),children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsxs)("h5",{className:"currentDayTitle",children:[t," ",a]}),Object(d.jsxs)("h2",{className:"font-weight-bold mb-3 mt-3 text-center",children:[n," (",r,"\xb0C)"]})]}),Object(d.jsxs)("div",{className:"col-xs-12 text-center mt-1",children:[Object(d.jsx)("img",{className:"mb-3",width:"65",src:c}),Object(d.jsx)("h5",{className:"font-weight-lighter",children:s})]})]})})},I=a(32),L=a.n(I),E=a(33),R=a.n(E),q=function(e){var t=e.weekday,a=e.temperature,n=e.imgUrl;return Object(d.jsxs)("li",{className:"".concat(R.a.weekday," d-flex flex-column justify-content-center align-items-center p-2"),children:[Object(d.jsx)("img",{className:"mb-2",width:"30",src:"".concat("https://www.metaweather.com/static/","img/weather/").concat(n,".svg"),alt:""}),Object(d.jsx)("span",{className:"mb-2",children:t}),Object(d.jsxs)("span",{className:"font-weight-bold",children:[a,"\xb0"]})]})},P=function(e){var t=e.days;return Object(d.jsx)("ul",{className:"".concat(L.a.weekList," d-flex justify-content-between p-0 mx-auto"),children:t.map((function(e){return Object(n.createElement)(q,Object(y.a)(Object(y.a)({},e),{},{key:e.weekday}))}))})},A=function(e){var t=e.name,a=e.value,n=e.unit;return Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsx)("p",{className:"mb-4 font-weight-bolder text-uppercase",children:t}),Object(d.jsxs)("p",{className:"mb-0",children:[a," ",n]})]})},B=function(e){var t=e.forecast;return Object(d.jsx)("div",{className:"mt-4 mt-md-2",children:Object(d.jsx)("div",{className:"d-flex flex-column mb-2",children:t.map((function(e){return Object(n.createElement)(A,Object(y.a)(Object(y.a)({},e),{},{key:e.name}))}))})})},U=function(e){var t=e.forecast;return Object(d.jsxs)(N.a,{className:F.a.box,children:[Object(d.jsxs)(k.a,{className:F.a.tbRow,children:[Object(d.jsx)(D.a,{xs:12,md:6,children:Object(d.jsx)("div",{className:F.a.card,children:Object(d.jsx)(T,Object(y.a)({},t.currentDay))})}),Object(d.jsx)(D.a,{xs:12,md:6,className:"mt-4 d-flex flex-column justify-content-between",children:Object(d.jsx)(B,{forecast:t.currentDayDetails})})]}),Object(d.jsx)(k.a,{xs:12,className:"mt-3",children:Object(d.jsx)(P,{days:t.upcomingDays})})]})},H=a(7),J=a.n(H),Y=a(11),z=a(17),Z=a.n(z),Q=a(9),W=a.n(Q),X=function(e,t){return{weekday:W()(e.applicable_date).format("dddd"),date:W()(e.applicable_date).format("Do MMMM"),location:t,temperature:Math.round(e.the_temp),weatherIcon:"https://www.metaweather.com/static/img/weather/".concat(e.weather_state_abbr,".svg"),weatherDescription:e.weather_state_name}},G=function(e){return[{name:"predictability",value:e.predictability,unit:"%"},{name:"humidity",value:e.humidity,unit:"%"},{name:"wind",value:Math.round(e.wind_speed),unit:"km/h"},{name:"air pressure",value:e.air_pressure,unit:"mb"},{name:"max temp",value:Math.round(e.max_temp),unit:"\xb0C"},{name:"min temp",value:Math.round(e.min_temp),unit:"\xb0C"}]},K=function(e){return e.slice(1).map((function(e){return{imgUrl:e.weather_state_abbr,temperature:Math.round(e.max_temp),weekday:(t=e.applicable_date,W()(t).format("dddd").substring(0,3))};var t}))},V="".concat("https://the-ultimate-api-challenge.herokuapp.com","/").concat("https://www.metaweather.com/api/location"),$=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(null),l=Object(b.a)(u,2),d=l[0],m=l[1],j=function(){var e=Object(Y.a)(J.a.mark((function e(t){var a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z()("".concat(V,"/search"),{params:{query:t}});case 2:if(a=e.sent,(n=a.data)&&0!==n.length){e.next=8;break}return r("There is no such location"),o(!1),e.abrupt("return");case 8:return e.abrupt("return",n[0]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(Y.a)(J.a.mark((function e(t){var a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z()("".concat(V,"/").concat(t));case 2:if(a=e.sent,(n=a.data)&&0!==n.length){e.next=8;break}return r("Something went wrong"),o(!1),e.abrupt("return");case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(Y.a)(J.a.mark((function e(t){var a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),r(!1),e.next=4,j(t);case 4:if(null===(a=e.sent)||void 0===a?void 0:a.woeid){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,h(a.woeid);case 9:if(n=e.sent){e.next=12;break}return e.abrupt("return");case 12:console.log(n),p(n);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=X(e.consolidated_weather[0],e.title),a=G(e.consolidated_weather[0]),n=K(e.consolidated_weather);m({currentDay:t,currentDayDetails:a,upcomingDays:n}),o(!1)};return{isError:a,isLoading:i,forecast:d,submitRequest:x}},ee=function(){var e=$(),t=e.isError,a=e.isLoading,r=e.forecast,c=e.submitRequest;return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(m,{}),!r&&Object(d.jsxs)("div",{className:"".concat(o.a.box," position-relative"),children:[!a&&Object(d.jsx)(x,{submitSearch:function(e){c(e)}}),t&&Object(d.jsx)(O,{message:t}),a&&Object(d.jsx)(g,{})]}),r&&Object(d.jsx)(U,{forecast:r})]})};var te=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(ee,{})})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(te,{})}),document.getElementById("root")),ae()}},[[62,1,2]]]);
//# sourceMappingURL=main.5bd5139b.chunk.js.map