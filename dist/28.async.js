(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{EW72:function(e,a,t){"use strict";t.r(a);t("76GV");for(var l=t("XiP4"),s=(t("nDpc"),t("9i6L")),n=(t("5fwP"),t("QEt6")),r=(t("wUcm"),t("/X1W")),i=(t("WTyv"),t("+HAJ")),m=t("2w0b"),c=t.n(m),d=t("lvdA"),o=t("BS6i"),E=t.n(o),g=t("yM86"),p=t.n(g),u=t("KTCi"),k=i["a"].RangePicker,y=r["a"].TabPane,f=[],M=0;M<7;M+=1)f.push({title:Object(d["formatMessage"])({id:"app.analysis.test"},{no:M}),total:323234});var N=Object(m["memo"])(function(e){var a=e.rangePickerValue,t=e.salesData,i=e.isActive,m=e.handleRangePickerChange,o=e.loading,g=e.selectDate;return c.a.createElement(l["a"],{loading:o,bordered:!1,bodyStyle:{padding:0}},c.a.createElement("div",{className:p.a.salesCard},c.a.createElement(r["a"],{tabBarExtraContent:c.a.createElement("div",{className:p.a.salesExtraWrap},c.a.createElement("div",{className:p.a.salesExtra},c.a.createElement("a",{className:i("today"),onClick:function(){return g("today")}},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.all-day",defaultMessage:"All Day"})),c.a.createElement("a",{className:i("week"),onClick:function(){return g("week")}},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.all-week",defaultMessage:"All Week"})),c.a.createElement("a",{className:i("month"),onClick:function(){return g("month")}},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.all-month",defaultMessage:"All Month"})),c.a.createElement("a",{className:i("year"),onClick:function(){return g("year")}},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.all-year",defaultMessage:"All Year"}))),c.a.createElement(k,{value:a,onChange:m,style:{width:256}})),size:"large",tabBarStyle:{marginBottom:24}},c.a.createElement(y,{tab:c.a.createElement(d["FormattedMessage"],{id:"app.analysis.sales",defaultMessage:"Sales"}),key:"sales"},c.a.createElement(s["a"],null,c.a.createElement(n["a"],{xl:16,lg:12,md:12,sm:24,xs:24},c.a.createElement("div",{className:p.a.salesBar},c.a.createElement(u["a"],{height:295,title:c.a.createElement(d["FormattedMessage"],{id:"app.analysis.sales-trend",defaultMessage:"Sales Trend"}),data:t}))),c.a.createElement(n["a"],{xl:8,lg:12,md:12,sm:24,xs:24},c.a.createElement("div",{className:p.a.salesRank},c.a.createElement("h4",{className:p.a.rankingTitle},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.sales-ranking",defaultMessage:"Sales Ranking"})),c.a.createElement("ul",{className:p.a.rankingList},f.map(function(e,a){return c.a.createElement("li",{key:e.title},c.a.createElement("span",{className:"".concat(p.a.rankingItemNumber," ").concat(a<3?p.a.active:"")},a+1),c.a.createElement("span",{className:p.a.rankingItemTitle,title:e.title},e.title),c.a.createElement("span",{className:p.a.rankingItemValue},E()(e.total).format("0,0")))})))))),c.a.createElement(y,{tab:c.a.createElement(d["FormattedMessage"],{id:"app.analysis.visits",defaultMessage:"Visits"}),key:"views"},c.a.createElement(s["a"],null,c.a.createElement(n["a"],{xl:16,lg:12,md:12,sm:24,xs:24},c.a.createElement("div",{className:p.a.salesBar},c.a.createElement(u["a"],{height:292,title:c.a.createElement(d["FormattedMessage"],{id:"app.analysis.visits-trend",defaultMessage:"Visits Trend"}),data:t}))),c.a.createElement(n["a"],{xl:8,lg:12,md:12,sm:24,xs:24},c.a.createElement("div",{className:p.a.salesRank},c.a.createElement("h4",{className:p.a.rankingTitle},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.visits-ranking",defaultMessage:"Visits Ranking"})),c.a.createElement("ul",{className:p.a.rankingList},f.map(function(e,a){return c.a.createElement("li",{key:e.title},c.a.createElement("span",{className:"".concat(p.a.rankingItemNumber," ").concat(a<3?p.a.active:"")},a+1),c.a.createElement("span",{className:p.a.rankingItemTitle,title:e.title},e.title),c.a.createElement("span",null,E()(e.total).format("0,0")))})))))))))});a["default"]=N}}]);