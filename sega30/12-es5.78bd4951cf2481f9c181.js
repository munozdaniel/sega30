function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{pKmL:function(n,e,t){"use strict";t.r(e),t.d(e,"CoreModule",(function(){return c}));var r,o,i=t("tyNb"),l=t("fXoL"),a=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:function(){return t.e(14).then(t.bind(null,"fOOd")).then((function(n){return n.HomeModule}))},canActivate:[]},{path:"parametrizar",loadChildren:function(){return Promise.all([t.e(0),t.e(3),t.e(2),t.e(9)]).then(t.bind(null,"OPYL")).then((function(n){return n.ParametrizarModule}))}},{path:"taller",loadChildren:function(){return Promise.all([t.e(0),t.e(3),t.e(4),t.e(2),t.e(16)]).then(t.bind(null,"dVRw")).then((function(n){return n.TallerModule}))},canActivate:[]},{path:"informes",loadChildren:function(){return Promise.all([t.e(0),t.e(3),t.e(4),t.e(15)]).then(t.bind(null,"csHo")).then((function(n){return n.InformesModule}))},canActivate:[]},{path:"administrador",loadChildren:function(){return Promise.all([t.e(0),t.e(2),t.e(10)]).then(t.bind(null,"YZG+")).then((function(n){return n.AdministradorModule}))},canActivate:[]},{path:"auth",loadChildren:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"YuuO")).then((function(n){return n.AuthModule}))},canActivate:[]},{path:"lite",loadChildren:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"mPgx")).then((function(n){return n.LiteModule}))},canActivate:[]}],u=((o=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ob({type:o}),o.\u0275inj=l.Nb({factory:function(n){return new(n||o)},imports:[[i.k.forChild(a)],i.k]}),o),c=((r=function n(e){if(_classCallCheck(this,n),e)throw new Error("CoreModule is already loaded. Import it in the AppModule only")}).\u0275mod=l.Ob({type:r}),r.\u0275inj=l.Nb({factory:function(n){return new(n||r)(l.ac(r,12))},providers:[],imports:[[u]]}),r)}}]);