(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{orV7:function(e,a,t){"use strict";t.r(a);t("76GV");var n=t("XiP4"),r=(t("D5eq"),t("hiA1")),s=(t("nDpc"),t("9i6L")),l=(t("5fwP"),t("QEt6")),i=(t("UGkV"),t("KWz7")),o=(t("Pbqo"),t("mtdH")),d=t("2w0b"),c=t.n(d),m=t("lvdA"),u=t("BS6i"),g=t.n(u),p=t("YR7N"),y=t("yM86"),E=t.n(y),f=t("LOQS"),h=t("KTCi"),M=[{title:c.a.createElement(m["FormattedMessage"],{id:"app.analysis.table.rank",defaultMessage:"Rank"}),dataIndex:"index",key:"index"},{title:c.a.createElement(m["FormattedMessage"],{id:"app.analysis.table.search-keyword",defaultMessage:"Search keyword"}),dataIndex:"keyword",key:"keyword",render:function(e){return c.a.createElement("a",{href:"/"},e)}},{title:c.a.createElement(m["FormattedMessage"],{id:"app.analysis.table.users",defaultMessage:"Users"}),dataIndex:"count",key:"count",sorter:function(e,a){return e.count-a.count},className:E.a.alignRight},{title:c.a.createElement(m["FormattedMessage"],{id:"app.analysis.table.weekly-range",defaultMessage:"Weekly Range"}),dataIndex:"range",key:"range",sorter:function(e,a){return e.range-a.range},render:function(e,a){return c.a.createElement(p["a"],{flag:1===a.status?"down":"up"},c.a.createElement("span",{style:{marginRight:4}},e,"%"))},align:"right"}],w=Object(d["memo"])(function(e){var a=e.loading,t=e.visitData2,d=e.searchData,u=e.dropdownGroup;return c.a.createElement(n["a"],{loading:a,bordered:!1,title:c.a.createElement(m["FormattedMessage"],{id:"app.analysis.online-top-search",defaultMessage:"Online Top Search"}),extra:u,style:{marginTop:24}},c.a.createElement(s["a"],{gutter:68},c.a.createElement(l["a"],{sm:12,xs:24,style:{marginBottom:24}},c.a.createElement(f["a"],{subTitle:c.a.createElement("span",null,c.a.createElement(m["FormattedMessage"],{id:"app.analysis.search-users",defaultMessage:"search users"}),c.a.createElement(i["a"],{title:c.a.createElement(m["FormattedMessage"],{id:"app.analysis.introduce",defaultMessage:"introduce"})},c.a.createElement(o["a"],{style:{marginLeft:8},type:"info-circle-o"}))),gap:8,total:g()(12321).format("0,0"),status:"up",subTotal:17.1}),c.a.createElement(h["d"],{line:!0,height:45,data:t})),c.a.createElement(l["a"],{sm:12,xs:24,style:{marginBottom:24}},c.a.createElement(f["a"],{subTitle:c.a.createElement("span",null,c.a.createElement(m["FormattedMessage"],{id:"app.analysis.per-capita-search",defaultMessage:"Per Capita Search"}),c.a.createElement(i["a"],{title:c.a.createElement(m["FormattedMessage"],{id:"app.analysis.introduce",defaultMessage:"introduce"})},c.a.createElement(o["a"],{style:{marginLeft:8},type:"info-circle-o"}))),total:2.7,status:"down",subTotal:26.2,gap:8}),c.a.createElement(h["d"],{line:!0,height:45,data:t}))),c.a.createElement(r["a"],{rowKey:function(e){return e.index},size:"small",columns:M,dataSource:d,pagination:{style:{marginBottom:0},pageSize:5}}))});a["default"]=w}}]);