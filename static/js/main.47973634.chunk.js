(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(2),i=a.n(s),u=a(5),l=a(16),d=a(17),h=a(3),v=a(18),m=a(19),p=a(4),f=a.n(p),b=(a(43),function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={confirmed:0,recovered:0,deaths:0,countries:[]},n.getCountryData=n.getCountryData.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://covid19.mathdro.id/api");case 2:return t=e.sent,e.next=5,f.a.get("https://covid19.mathdro.id/api/countries");case 5:for(a=e.sent,n=[],r=0;r<a.data.countries.length;r++)n.push(a.data.countries[r].name);this.setState({confirmed:t.data.confirmed.value,recovered:t.data.recovered.value,deaths:t.data.deaths.value,countries:n});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCountryData",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Worldwide"!==t.target.value){e.next=2;break}return e.abrupt("return",this.getData());case 2:return e.prev=2,e.next=5,f.a.get("https://covid19.mathdro.id/api/countries/".concat(t.target.value));case 5:a=e.sent,this.setState({confirmed:a.data.confirmed.value,recovered:a.data.recovered.value,deaths:a.data.deaths.value}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),404===e.t0.response.status&&this.setState({confirmed:"No data available",recovered:"No data available",deaths:"No data available"}),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderCountryOptions",value:function(){return this.state.countries.map((function(e,t){return r.a.createElement("option",{key:t},e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Coronavirus Update"),r.a.createElement("select",{className:"dropdown",onChange:this.getCountryData},r.a.createElement("option",null,"Worldwide"),this.renderCountryOptions()),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"box confirmed"},r.a.createElement("h3",null,"Confirmed"),r.a.createElement("h4",null,this.state.confirmed)),r.a.createElement("div",{className:"box recovered"},r.a.createElement("h3",null,"Recovered Cases"),r.a.createElement("h4",null,this.state.recovered)),r.a.createElement("div",{className:"box deaths"},r.a.createElement("h3",null,"Deaths"),r.a.createElement("h4",null,this.state.deaths))))}}]),a}(r.a.Component));o.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.47973634.chunk.js.map