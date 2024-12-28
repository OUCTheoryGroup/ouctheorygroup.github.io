import{a1 as V,J as it,y as q,E as ce,a0 as ve,v as mt,M as he,a2 as fe,a3 as de,a4 as ge,K as Pt,a5 as pe,D as I,B as ye,I as Ht,a6 as Gt,a7 as W,a8 as Mt,a9 as ot,aa as me,w as N,ab as X,X as Me,ac as kt,ad as be,ae as Lt,af as yt,H as xe,ag as _e,ah as we,ai as It}from"./UncertaintyAnalysisView-B8quyIFh.js";var bt=1e3,xt=bt*60,Z=xt*60,S=Z*24,Ot=S*365,K={year:"{yyyy}",month:"{MMM}",day:"{d}",hour:"{HH}:{mm}",minute:"{HH}:{mm}",second:"{HH}:{mm}:{ss}",millisecond:"{HH}:{mm}:{ss} {SSS}",none:"{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"},tt="{yyyy}-{MM}-{dd}",Ct={year:"{yyyy}",month:"{yyyy}-{MM}",day:tt,hour:tt+" "+K.hour,minute:tt+" "+K.minute,second:tt+" "+K.second,millisecond:K.none},pt=["year","month","day","hour","minute","second","millisecond"],Vt=["year","half-year","quarter","month","week","half-week","day","half-day","quarter-day","hour","minute","second","millisecond"];function F(e,r){return e+="","0000".substr(0,r-e.length)+e}function H(e){switch(e){case"half-year":case"quarter":return"month";case"week":case"half-week":return"day";case"half-day":case"quarter-day":return"hour";default:return e}}function Ee(e){return e===H(e)}function Ne(e){switch(e){case"year":case"month":return"day";case"millisecond":return"millisecond";default:return"second"}}function qt(e,r,t,a){var n=V(e),i=n[_t(t)](),o=n[G(t)]()+1,l=Math.floor((o-1)/3)+1,u=n[lt(t)](),s=n["get"+(t?"UTC":"")+"Day"](),c=n[Q(t)](),h=(c-1)%12+1,f=n[ut(t)](),v=n[st(t)](),g=n[ct(t)](),m=c>=12?"pm":"am",M=m.toUpperCase(),d=a instanceof he?a:fe(a||ge)||de(),y=d.getModel("time"),b=y.get("month"),p=y.get("monthAbbr"),E=y.get("dayOfWeek"),B=y.get("dayOfWeekAbbr");return(r||"").replace(/{a}/g,m+"").replace(/{A}/g,M+"").replace(/{yyyy}/g,i+"").replace(/{yy}/g,F(i%100+"",2)).replace(/{Q}/g,l+"").replace(/{MMMM}/g,b[o-1]).replace(/{MMM}/g,p[o-1]).replace(/{MM}/g,F(o,2)).replace(/{M}/g,o+"").replace(/{dd}/g,F(u,2)).replace(/{d}/g,u+"").replace(/{eeee}/g,E[s]).replace(/{ee}/g,B[s]).replace(/{e}/g,s+"").replace(/{HH}/g,F(c,2)).replace(/{H}/g,c+"").replace(/{hh}/g,F(h+"",2)).replace(/{h}/g,h+"").replace(/{mm}/g,F(f,2)).replace(/{m}/g,f+"").replace(/{ss}/g,F(v,2)).replace(/{s}/g,v+"").replace(/{SSS}/g,F(g,3)).replace(/{S}/g,g+"")}function Se(e,r,t,a,n){var i=null;if(it(t))i=t;else if(q(t))i=t(e.value,r,{level:e.level});else{var o=ce({},K);if(e.level>0)for(var l=0;l<pt.length;++l)o[pt[l]]="{primary|"+o[pt[l]]+"}";var u=t?t.inherit===!1?t:ve(t,o):o,s=zt(e.value,n);if(u[s])i=u[s];else if(u.inherit){for(var c=Vt.indexOf(s),l=c-1;l>=0;--l)if(u[s]){i=u[s];break}i=i||o.none}if(mt(i)){var h=e.level==null?0:e.level>=0?e.level:i.length+e.level;h=Math.min(h,i.length-1),i=i[h]}}return qt(new Date(e.value),i,n,a)}function zt(e,r){var t=V(e),a=t[G(r)]()+1,n=t[lt(r)](),i=t[Q(r)](),o=t[ut(r)](),l=t[st(r)](),u=t[ct(r)](),s=u===0,c=s&&l===0,h=c&&o===0,f=h&&i===0,v=f&&n===1,g=v&&a===1;return g?"year":v?"month":f?"day":h?"hour":c?"minute":s?"second":"millisecond"}function Wt(e,r,t){var a=Pt(e)?V(e):e;switch(r=r||zt(e,t),r){case"year":return a[_t(t)]();case"half-year":return a[G(t)]()>=6?1:0;case"quarter":return Math.floor((a[G(t)]()+1)/4);case"month":return a[G(t)]();case"day":return a[lt(t)]();case"half-day":return a[Q(t)]()/24;case"hour":return a[Q(t)]();case"minute":return a[ut(t)]();case"second":return a[st(t)]();case"millisecond":return a[ct(t)]()}}function _t(e){return e?"getUTCFullYear":"getFullYear"}function G(e){return e?"getUTCMonth":"getMonth"}function lt(e){return e?"getUTCDate":"getDate"}function Q(e){return e?"getUTCHours":"getHours"}function ut(e){return e?"getUTCMinutes":"getMinutes"}function st(e){return e?"getUTCSeconds":"getSeconds"}function ct(e){return e?"getUTCMilliseconds":"getMilliseconds"}function ke(e){return e?"setUTCFullYear":"setFullYear"}function Yt(e){return e?"setUTCMonth":"setMonth"}function Kt(e){return e?"setUTCDate":"setDate"}function Xt(e){return e?"setUTCHours":"setHours"}function Zt(e){return e?"setUTCMinutes":"setMinutes"}function Jt(e){return e?"setUTCSeconds":"setSeconds"}function Qt(e){return e?"setUTCMilliseconds":"setMilliseconds"}var C=function(){function e(r){this._setting=r||{},this._extent=[1/0,-1/0]}return e.prototype.getSetting=function(r){return this._setting[r]},e.prototype.unionExtent=function(r){var t=this._extent;r[0]<t[0]&&(t[0]=r[0]),r[1]>t[1]&&(t[1]=r[1])},e.prototype.unionExtentFromData=function(r,t){this.unionExtent(r.getApproximateExtent(t))},e.prototype.getExtent=function(){return this._extent.slice()},e.prototype.setExtent=function(r,t){var a=this._extent;isNaN(r)||(a[0]=r),isNaN(t)||(a[1]=t)},e.prototype.isInExtentRange=function(r){return this._extent[0]<=r&&this._extent[1]>=r},e.prototype.isBlank=function(){return this._isBlank},e.prototype.setBlank=function(r){this._isBlank=r},e}();pe(C);var Le=0,Bt=function(){function e(r){this.categories=r.categories||[],this._needCollect=r.needCollect,this._deduplication=r.deduplication,this.uid=++Le}return e.createByAxisModel=function(r){var t=r.option,a=t.data,n=a&&I(a,Ie);return new e({categories:n,needCollect:!n,deduplication:t.dedplication!==!1})},e.prototype.getOrdinal=function(r){return this._getOrCreateMap().get(r)},e.prototype.parseAndCollect=function(r){var t,a=this._needCollect;if(!it(r)&&!a)return r;if(a&&!this._deduplication)return t=this.categories.length,this.categories[t]=r,t;var n=this._getOrCreateMap();return t=n.get(r),t==null&&(a?(t=this.categories.length,this.categories[t]=r,n.set(r,t)):t=NaN),t},e.prototype._getOrCreateMap=function(){return this._map||(this._map=ye(this.categories))},e}();function Ie(e){return Ht(e)&&e.value!=null?e.value:e+""}function Oe(e,r,t,a){var n={},i=e[1]-e[0],o=n.interval=Gt(i/r);t!=null&&o<t&&(o=n.interval=t),a!=null&&o>a&&(o=n.interval=a);var l=n.intervalPrecision=$t(o),u=n.niceTickExtent=[W(Math.ceil(e[0]/o)*o,l),W(Math.floor(e[1]/o)*o,l)];return Ce(u,e),n}function $t(e){return Mt(e)+2}function Dt(e,r,t){e[r]=Math.max(Math.min(e[r],t[1]),t[0])}function Ce(e,r){!isFinite(e[0])&&(e[0]=r[0]),!isFinite(e[1])&&(e[1]=r[1]),Dt(e,0,r),Dt(e,1,r),e[0]>e[1]&&(e[0]=e[1])}function vt(e,r){return e>=r[0]&&e<=r[1]}function ht(e,r){return r[1]===r[0]?.5:(e-r[0])/(r[1]-r[0])}function ft(e,r){return e*(r[1]-r[0])+r[0]}var jt=function(e){ot(r,e);function r(t){var a=e.call(this,t)||this;a.type="ordinal";var n=a.getSetting("ordinalMeta");return n||(n=new Bt({})),mt(n)&&(n=new Bt({categories:I(n,function(i){return Ht(i)?i.value:i})})),a._ordinalMeta=n,a._extent=a.getSetting("extent")||[0,n.categories.length-1],a}return r.prototype.parse=function(t){return t==null?NaN:it(t)?this._ordinalMeta.getOrdinal(t):Math.round(t)},r.prototype.contain=function(t){return t=this.parse(t),vt(t,this._extent)&&this._ordinalMeta.categories[t]!=null},r.prototype.normalize=function(t){return t=this._getTickNumber(this.parse(t)),ht(t,this._extent)},r.prototype.scale=function(t){return t=Math.round(ft(t,this._extent)),this.getRawOrdinalNumber(t)},r.prototype.getTicks=function(){for(var t=[],a=this._extent,n=a[0];n<=a[1];)t.push({value:n}),n++;return t},r.prototype.getMinorTicks=function(t){},r.prototype.setSortInfo=function(t){if(t==null){this._ordinalNumbersByTick=this._ticksByOrdinalNumber=null;return}for(var a=t.ordinalNumbers,n=this._ordinalNumbersByTick=[],i=this._ticksByOrdinalNumber=[],o=0,l=this._ordinalMeta.categories.length,u=Math.min(l,a.length);o<u;++o){var s=a[o];n[o]=s,i[s]=o}for(var c=0;o<l;++o){for(;i[c]!=null;)c++;n.push(c),i[c]=o}},r.prototype._getTickNumber=function(t){var a=this._ticksByOrdinalNumber;return a&&t>=0&&t<a.length?a[t]:t},r.prototype.getRawOrdinalNumber=function(t){var a=this._ordinalNumbersByTick;return a&&t>=0&&t<a.length?a[t]:t},r.prototype.getLabel=function(t){if(!this.isBlank()){var a=this.getRawOrdinalNumber(t.value),n=this._ordinalMeta.categories[a];return n==null?"":n+""}},r.prototype.count=function(){return this._extent[1]-this._extent[0]+1},r.prototype.unionExtentFromData=function(t,a){this.unionExtent(t.getApproximateExtent(a))},r.prototype.isInExtentRange=function(t){return t=this._getTickNumber(t),this._extent[0]<=t&&this._extent[1]>=t},r.prototype.getOrdinalMeta=function(){return this._ordinalMeta},r.prototype.calcNiceTicks=function(){},r.prototype.calcNiceExtent=function(){},r.type="ordinal",r}(C);C.registerClass(jt);var T=W,j=function(e){ot(r,e);function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.type="interval",t._interval=0,t._intervalPrecision=2,t}return r.prototype.parse=function(t){return t},r.prototype.contain=function(t){return vt(t,this._extent)},r.prototype.normalize=function(t){return ht(t,this._extent)},r.prototype.scale=function(t){return ft(t,this._extent)},r.prototype.setExtent=function(t,a){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(a)||(n[1]=parseFloat(a))},r.prototype.unionExtent=function(t){var a=this._extent;t[0]<a[0]&&(a[0]=t[0]),t[1]>a[1]&&(a[1]=t[1]),this.setExtent(a[0],a[1])},r.prototype.getInterval=function(){return this._interval},r.prototype.setInterval=function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=$t(t)},r.prototype.getTicks=function(t){var a=this._interval,n=this._extent,i=this._niceExtent,o=this._intervalPrecision,l=[];if(!a)return l;var u=1e4;n[0]<i[0]&&(t?l.push({value:T(i[0]-a,o)}):l.push({value:n[0]}));for(var s=i[0];s<=i[1]&&(l.push({value:s}),s=T(s+a,o),s!==l[l.length-1].value);)if(l.length>u)return[];var c=l.length?l[l.length-1].value:i[1];return n[1]>c&&(t?l.push({value:T(c+a,o)}):l.push({value:n[1]})),l},r.prototype.getMinorTicks=function(t){for(var a=this.getTicks(!0),n=[],i=this.getExtent(),o=1;o<a.length;o++){for(var l=a[o],u=a[o-1],s=0,c=[],h=l.value-u.value,f=h/t;s<t-1;){var v=T(u.value+(s+1)*f);v>i[0]&&v<i[1]&&c.push(v),s++}n.push(c)}return n},r.prototype.getLabel=function(t,a){if(t==null)return"";var n=a&&a.precision;n==null?n=Mt(t.value)||0:n==="auto"&&(n=this._intervalPrecision);var i=T(t.value,n,!0);return me(i)},r.prototype.calcNiceTicks=function(t,a,n){t=t||5;var i=this._extent,o=i[1]-i[0];if(isFinite(o)){o<0&&(o=-o,i.reverse());var l=Oe(i,t,a,n);this._intervalPrecision=l.intervalPrecision,this._interval=l.interval,this._niceExtent=l.niceTickExtent}},r.prototype.calcNiceExtent=function(t){var a=this._extent;if(a[0]===a[1])if(a[0]!==0){var n=Math.abs(a[0]);t.fixMax||(a[1]+=n/2),a[0]-=n/2}else a[1]=1;var i=a[1]-a[0];isFinite(i)||(a[0]=0,a[1]=1),this.calcNiceTicks(t.splitNumber,t.minInterval,t.maxInterval);var o=this._interval;t.fixMin||(a[0]=T(Math.floor(a[0]/o)*o)),t.fixMax||(a[1]=T(Math.ceil(a[1]/o)*o))},r.prototype.setNiceExtent=function(t,a){this._niceExtent=[t,a]},r.type="interval",r}(C);C.registerClass(j);var We="__ec_stack_";function Ut(e){return e.get("stack")||We+e.seriesIndex}function te(e){return e.dim+e.index}function Be(e,r){var t=[];return r.eachSeriesByType(e,function(a){Re(a)&&t.push(a)}),t}function De(e){var r={};N(e,function(u){var s=u.coordinateSystem,c=s.getBaseAxis();if(!(c.type!=="time"&&c.type!=="value"))for(var h=u.getData(),f=c.dim+"_"+c.index,v=h.getDimensionIndex(h.mapDimension(c.dim)),g=h.getStore(),m=0,M=g.count();m<M;++m){var d=g.get(v,m);r[f]?r[f].push(d):r[f]=[d]}});var t={};for(var a in r)if(r.hasOwnProperty(a)){var n=r[a];if(n){n.sort(function(u,s){return u-s});for(var i=null,o=1;o<n.length;++o){var l=n[o]-n[o-1];l>0&&(i=i===null?l:Math.min(i,l))}t[a]=i}}return t}function Fe(e){var r=De(e),t=[];return N(e,function(a){var n=a.coordinateSystem,i=n.getBaseAxis(),o=i.getExtent(),l;if(i.type==="category")l=i.getBandWidth();else if(i.type==="value"||i.type==="time"){var u=i.dim+"_"+i.index,s=r[u],c=Math.abs(o[1]-o[0]),h=i.scale.getExtent(),f=Math.abs(h[1]-h[0]);l=s?c/f*s:c}else{var v=a.getData();l=Math.abs(o[1]-o[0])/v.count()}var g=X(a.get("barWidth"),l),m=X(a.get("barMaxWidth"),l),M=X(a.get("barMinWidth")||(Pe(a)?.5:1),l),d=a.get("barGap"),y=a.get("barCategoryGap");t.push({bandWidth:l,barWidth:g,barMaxWidth:m,barMinWidth:M,barGap:d,barCategoryGap:y,axisKey:te(i),stackId:Ut(a)})}),Te(t)}function Te(e){var r={};N(e,function(a,n){var i=a.axisKey,o=a.bandWidth,l=r[i]||{bandWidth:o,remainedWidth:o,autoWidthCount:0,categoryGap:null,gap:"20%",stacks:{}},u=l.stacks;r[i]=l;var s=a.stackId;u[s]||l.autoWidthCount++,u[s]=u[s]||{width:0,maxWidth:0};var c=a.barWidth;c&&!u[s].width&&(u[s].width=c,c=Math.min(l.remainedWidth,c),l.remainedWidth-=c);var h=a.barMaxWidth;h&&(u[s].maxWidth=h);var f=a.barMinWidth;f&&(u[s].minWidth=f);var v=a.barGap;v!=null&&(l.gap=v);var g=a.barCategoryGap;g!=null&&(l.categoryGap=g)});var t={};return N(r,function(a,n){t[n]={};var i=a.stacks,o=a.bandWidth,l=a.categoryGap;if(l==null){var u=Me(i).length;l=Math.max(35-u*4,15)+"%"}var s=X(l,o),c=X(a.gap,1),h=a.remainedWidth,f=a.autoWidthCount,v=(h-s)/(f+(f-1)*c);v=Math.max(v,0),N(i,function(d){var y=d.maxWidth,b=d.minWidth;if(d.width){var p=d.width;y&&(p=Math.min(p,y)),b&&(p=Math.max(p,b)),d.width=p,h-=p+c*p,f--}else{var p=v;y&&y<p&&(p=Math.min(y,h)),b&&b>p&&(p=b),p!==v&&(d.width=p,h-=p+c*p,f--)}}),v=(h-s)/(f+(f-1)*c),v=Math.max(v,0);var g=0,m;N(i,function(d,y){d.width||(d.width=v),m=d,g+=d.width*(1+c)}),m&&(g-=m.width*c);var M=-g/2;N(i,function(d,y){t[n][y]=t[n][y]||{bandWidth:o,offset:M,width:d.width},M+=d.width*(1+c)})}),t}function Ae(e,r,t){if(e&&r){var a=e[te(r)];return a!=null&&t!=null?a[Ut(t)]:a}}function Re(e){return e.coordinateSystem&&e.coordinateSystem.type==="cartesian2d"}function Pe(e){return e.pipelineContext&&e.pipelineContext.large}var He=function(e,r,t,a){for(;t<a;){var n=t+a>>>1;e[n][1]<r?t=n+1:a=n}return t},ee=function(e){ot(r,e);function r(t){var a=e.call(this,t)||this;return a.type="time",a}return r.prototype.getLabel=function(t){var a=this.getSetting("useUTC");return qt(t.value,Ct[Ne(H(this._minLevelUnit))]||Ct.second,a,this.getSetting("locale"))},r.prototype.getFormattedLabel=function(t,a,n){var i=this.getSetting("useUTC"),o=this.getSetting("locale");return Se(t,a,n,o,i)},r.prototype.getTicks=function(){var t=this._interval,a=this._extent,n=[];if(!t)return n;n.push({value:a[0],level:0});var i=this.getSetting("useUTC"),o=Xe(this._minLevelUnit,this._approxInterval,i,a);return n=n.concat(o),n.push({value:a[1],level:0}),n},r.prototype.calcNiceExtent=function(t){var a=this._extent;if(a[0]===a[1]&&(a[0]-=S,a[1]+=S),a[1]===-1/0&&a[0]===1/0){var n=new Date;a[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),a[0]=a[1]-S}this.calcNiceTicks(t.splitNumber,t.minInterval,t.maxInterval)},r.prototype.calcNiceTicks=function(t,a,n){t=t||10;var i=this._extent,o=i[1]-i[0];this._approxInterval=o/t,a!=null&&this._approxInterval<a&&(this._approxInterval=a),n!=null&&this._approxInterval>n&&(this._approxInterval=n);var l=et.length,u=Math.min(He(et,this._approxInterval,0,l),l-1);this._interval=et[u][1],this._minLevelUnit=et[Math.max(u-1,0)][0]},r.prototype.parse=function(t){return Pt(t)?t:+V(t)},r.prototype.contain=function(t){return vt(this.parse(t),this._extent)},r.prototype.normalize=function(t){return ht(this.parse(t),this._extent)},r.prototype.scale=function(t){return ft(t,this._extent)},r.type="time",r}(j),et=[["second",bt],["minute",xt],["hour",Z],["quarter-day",Z*6],["half-day",Z*12],["day",S*1.2],["half-week",S*3.5],["week",S*7],["month",S*31],["quarter",S*95],["half-year",Ot/2],["year",Ot]];function Ge(e,r,t,a){var n=V(r),i=V(t),o=function(g){return Wt(n,g,a)===Wt(i,g,a)},l=function(){return o("year")},u=function(){return l()&&o("month")},s=function(){return u()&&o("day")},c=function(){return s()&&o("hour")},h=function(){return c()&&o("minute")},f=function(){return h()&&o("second")},v=function(){return f()&&o("millisecond")};switch(e){case"year":return l();case"month":return u();case"day":return s();case"hour":return c();case"minute":return h();case"second":return f();case"millisecond":return v()}}function Ve(e,r){return e/=S,e>16?16:e>7.5?7:e>3.5?4:e>1.5?2:1}function qe(e){var r=30*S;return e/=r,e>6?6:e>3?3:e>2?2:1}function ze(e){return e/=Z,e>12?12:e>6?6:e>3.5?4:e>2?2:1}function Ft(e,r){return e/=r?xt:bt,e>30?30:e>20?20:e>15?15:e>10?10:e>5?5:e>2?2:1}function Ye(e){return Gt(e)}function Ke(e,r,t){var a=new Date(e);switch(H(r)){case"year":case"month":a[Yt(t)](0);case"day":a[Kt(t)](1);case"hour":a[Xt(t)](0);case"minute":a[Zt(t)](0);case"second":a[Jt(t)](0),a[Qt(t)](0)}return a.getTime()}function Xe(e,r,t,a){var n=1e4,i=Vt,o=0;function l(w,x,A,R,gt,O,Y){for(var P=new Date(x),_=x,k=P[R]();_<A&&_<=a[1];)Y.push({value:_}),k+=w,P[gt](k),_=P.getTime();Y.push({value:_,notAdd:!0})}function u(w,x,A){var R=[],gt=!x.length;if(!Ge(H(w),a[0],a[1],t)){gt&&(x=[{value:Ke(new Date(a[0]),w,t)},{value:a[1]}]);for(var O=0;O<x.length-1;O++){var Y=x[O].value,P=x[O+1].value;if(Y!==P){var _=void 0,k=void 0,D=void 0,St=!1;switch(w){case"year":_=Math.max(1,Math.round(r/S/365)),k=_t(t),D=ke(t);break;case"half-year":case"quarter":case"month":_=qe(r),k=G(t),D=Yt(t);break;case"week":case"half-week":case"day":_=Ve(r),k=lt(t),D=Kt(t),St=!0;break;case"half-day":case"quarter-day":case"hour":_=ze(r),k=Q(t),D=Xt(t);break;case"minute":_=Ft(r,!0),k=ut(t),D=Zt(t);break;case"second":_=Ft(r,!1),k=st(t),D=Jt(t);break;case"millisecond":_=Ye(r),k=ct(t),D=Qt(t);break}l(_,Y,P,k,D,St,R),w==="year"&&A.length>1&&O===0&&A.unshift({value:A[0].value-_})}}for(var O=0;O<R.length;O++)A.push(R[O]);return R}}for(var s=[],c=[],h=0,f=0,v=0;v<i.length&&o++<n;++v){var g=H(i[v]);if(Ee(i[v])){u(i[v],s[s.length-1]||[],c);var m=i[v+1]?H(i[v+1]):null;if(g!==m){if(c.length){f=h,c.sort(function(w,x){return w.value-x.value});for(var M=[],d=0;d<c.length;++d){var y=c[d].value;(d===0||c[d-1].value!==y)&&(M.push(c[d]),y>=a[0]&&y<=a[1]&&h++)}var b=(a[1]-a[0])/r;if(h>b*1.5&&f>b/1.5||(s.push(M),h>b||e===i[v]))break}c=[]}}}for(var p=kt(I(s,function(w){return kt(w,function(x){return x.value>=a[0]&&x.value<=a[1]&&!x.notAdd})}),function(w){return w.length>0}),E=[],B=p.length-1,v=0;v<p.length;++v)for(var z=p[v],dt=0;dt<z.length;++dt)E.push({value:z[dt].value,level:B-v});E.sort(function(w,x){return w.value-x.value});for(var Nt=[],v=0;v<E.length;++v)(v===0||E[v].value!==E[v-1].value)&&Nt.push(E[v]);return Nt}C.registerClass(ee);var Tt=C.prototype,J=j.prototype,Ze=W,Je=Math.floor,Qe=Math.ceil,at=Math.pow,L=Math.log,wt=function(e){ot(r,e);function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.type="log",t.base=10,t._originalScale=new j,t._interval=0,t}return r.prototype.getTicks=function(t){var a=this._originalScale,n=this._extent,i=a.getExtent(),o=J.getTicks.call(this,t);return I(o,function(l){var u=l.value,s=W(at(this.base,u));return s=u===n[0]&&this._fixMin?rt(s,i[0]):s,s=u===n[1]&&this._fixMax?rt(s,i[1]):s,{value:s}},this)},r.prototype.setExtent=function(t,a){var n=L(this.base);t=L(Math.max(0,t))/n,a=L(Math.max(0,a))/n,J.setExtent.call(this,t,a)},r.prototype.getExtent=function(){var t=this.base,a=Tt.getExtent.call(this);a[0]=at(t,a[0]),a[1]=at(t,a[1]);var n=this._originalScale,i=n.getExtent();return this._fixMin&&(a[0]=rt(a[0],i[0])),this._fixMax&&(a[1]=rt(a[1],i[1])),a},r.prototype.unionExtent=function(t){this._originalScale.unionExtent(t);var a=this.base;t[0]=L(t[0])/L(a),t[1]=L(t[1])/L(a),Tt.unionExtent.call(this,t)},r.prototype.unionExtentFromData=function(t,a){this.unionExtent(t.getApproximateExtent(a))},r.prototype.calcNiceTicks=function(t){t=t||10;var a=this._extent,n=a[1]-a[0];if(!(n===1/0||n<=0)){var i=be(n),o=t/n*i;for(o<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var l=[W(Qe(a[0]/i)*i),W(Je(a[1]/i)*i)];this._interval=i,this._niceExtent=l}},r.prototype.calcNiceExtent=function(t){J.calcNiceExtent.call(this,t),this._fixMin=t.fixMin,this._fixMax=t.fixMax},r.prototype.parse=function(t){return t},r.prototype.contain=function(t){return t=L(t)/L(this.base),vt(t,this._extent)},r.prototype.normalize=function(t){return t=L(t)/L(this.base),ht(t,this._extent)},r.prototype.scale=function(t){return t=ft(t,this._extent),at(this.base,t)},r.type="log",r}(C),ae=wt.prototype;ae.getMinorTicks=J.getMinorTicks;ae.getLabel=J.getLabel;function rt(e,r){return Ze(e,Mt(r))}C.registerClass(wt);var $e=function(){function e(r,t,a){this._prepareParams(r,t,a)}return e.prototype._prepareParams=function(r,t,a){a[1]<a[0]&&(a=[NaN,NaN]),this._dataMin=a[0],this._dataMax=a[1];var n=this._isOrdinal=r.type==="ordinal";this._needCrossZero=r.type==="interval"&&t.getNeedCrossZero&&t.getNeedCrossZero();var i=t.get("min",!0);i==null&&(i=t.get("startValue",!0));var o=this._modelMinRaw=i;q(o)?this._modelMinNum=nt(r,o({min:a[0],max:a[1]})):o!=="dataMin"&&(this._modelMinNum=nt(r,o));var l=this._modelMaxRaw=t.get("max",!0);if(q(l)?this._modelMaxNum=nt(r,l({min:a[0],max:a[1]})):l!=="dataMax"&&(this._modelMaxNum=nt(r,l)),n)this._axisDataLen=t.getCategories().length;else{var u=t.get("boundaryGap"),s=mt(u)?u:[u||0,u||0];typeof s[0]=="boolean"||typeof s[1]=="boolean"?this._boundaryGapInner=[0,0]:this._boundaryGapInner=[Lt(s[0],1),Lt(s[1],1)]}},e.prototype.calculate=function(){var r=this._isOrdinal,t=this._dataMin,a=this._dataMax,n=this._axisDataLen,i=this._boundaryGapInner,o=r?null:a-t||Math.abs(t),l=this._modelMinRaw==="dataMin"?t:this._modelMinNum,u=this._modelMaxRaw==="dataMax"?a:this._modelMaxNum,s=l!=null,c=u!=null;l==null&&(l=r?n?0:NaN:t-i[0]*o),u==null&&(u=r?n?n-1:NaN:a+i[1]*o),(l==null||!isFinite(l))&&(l=NaN),(u==null||!isFinite(u))&&(u=NaN);var h=yt(l)||yt(u)||r&&!n;this._needCrossZero&&(l>0&&u>0&&!s&&(l=0),l<0&&u<0&&!c&&(u=0));var f=this._determinedMin,v=this._determinedMax;return f!=null&&(l=f,s=!0),v!=null&&(u=v,c=!0),{min:l,max:u,minFixed:s,maxFixed:c,isBlank:h}},e.prototype.modifyDataMinMax=function(r,t){this[Ue[r]]=t},e.prototype.setDeterminedMinMax=function(r,t){var a=je[r];this[a]=t},e.prototype.freeze=function(){this.frozen=!0},e}(),je={min:"_determinedMin",max:"_determinedMax"},Ue={min:"_dataMin",max:"_dataMax"};function ta(e,r,t){var a=e.rawExtentInfo;return a||(a=new $e(e,r,t),e.rawExtentInfo=a,a)}function nt(e,r){return r==null?null:yt(r)?NaN:e.parse(r)}function ea(e,r){var t=e.type,a=ta(e,r,e.getExtent()).calculate();e.setBlank(a.isBlank);var n=a.min,i=a.max,o=r.ecModel;if(o&&t==="time"){var l=Be("bar",o),u=!1;if(N(l,function(h){u=u||h.getBaseAxis()===r.axis}),u){var s=Fe(l),c=aa(n,i,r,s);n=c.min,i=c.max}}return{extent:[n,i],fixMin:a.minFixed,fixMax:a.maxFixed}}function aa(e,r,t,a){var n=t.axis.getExtent(),i=n[1]-n[0],o=Ae(a,t.axis);if(o===void 0)return{min:e,max:r};var l=1/0;N(o,function(v){l=Math.min(v.offset,l)});var u=-1/0;N(o,function(v){u=Math.max(v.offset+v.width,u)}),l=Math.abs(l),u=Math.abs(u);var s=l+u,c=r-e,h=1-(l+u)/i,f=c/h-c;return r+=f*(u/s),e-=f*(l/s),{min:e,max:r}}function ga(e,r){var t=r,a=ea(e,t),n=a.extent,i=t.get("splitNumber");e instanceof wt&&(e.base=t.get("logBase"));var o=e.type,l=t.get("interval"),u=o==="interval"||o==="time";e.setExtent(n[0],n[1]),e.calcNiceExtent({splitNumber:i,fixMin:a.fixMin,fixMax:a.fixMax,minInterval:u?t.get("minInterval"):null,maxInterval:u?t.get("maxInterval"):null}),l!=null&&e.setInterval&&e.setInterval(l)}function pa(e,r){if(r=r||e.get("type"),r)switch(r){case"category":return new jt({ordinalMeta:e.getOrdinalMeta?e.getOrdinalMeta():e.getCategories(),extent:[1/0,-1/0]});case"time":return new ee({locale:e.ecModel.getLocaleModel(),useUTC:e.ecModel.get("useUTC")});default:return new(C.getClass(r)||j)}}function U(e){var r=e.getLabelModel().get("formatter"),t=e.type==="category"?e.scale.getExtent()[0]:null;return e.scale.type==="time"?function(a){return function(n,i){return e.scale.getFormattedLabel(n,i,a)}}(r):it(r)?function(a){return function(n){var i=e.scale.getLabel(n),o=a.replace("{value}",i??"");return o}}(r):q(r)?function(a){return function(n,i){return t!=null&&(i=n.value-t),a(ra(e,n),i,n.level!=null?{level:n.level}:null)}}(r):function(a){return e.scale.getLabel(a)}}function ra(e,r){return e.type==="category"?e.scale.getLabel(r):r.value}function Et(e){var r=e.get("interval");return r??"auto"}function na(e){return e.type==="category"&&Et(e.getLabelModel())===0}var $=xe();function re(e,r){var t=I(r,function(a){return e.scale.parse(a)});return e.type==="time"&&t.length>0&&(t.sort(),t.unshift(t[0]),t.push(t[t.length-1])),t}function ia(e){var r=e.getLabelModel().get("customValues");if(r){var t=U(e);return{labels:re(e,r).map(function(a){var n={value:a};return{formattedLabel:t(n),rawLabel:e.scale.getLabel(n),tickValue:a}})}}return e.type==="category"?la(e):sa(e)}function oa(e,r){var t=e.getTickModel().get("customValues");return t?{ticks:re(e,t)}:e.type==="category"?ua(e,r):{ticks:I(e.scale.getTicks(),function(a){return a.value})}}function la(e){var r=e.getLabelModel(),t=ne(e,r);return!r.get("show")||e.scale.isBlank()?{labels:[],labelCategoryInterval:t.labelCategoryInterval}:t}function ne(e,r){var t=ie(e,"labels"),a=Et(r),n=oe(t,a);if(n)return n;var i,o;return q(a)?i=se(e,a):(o=a==="auto"?ca(e):a,i=ue(e,o)),le(t,a,{labels:i,labelCategoryInterval:o})}function ua(e,r){var t=ie(e,"ticks"),a=Et(r),n=oe(t,a);if(n)return n;var i,o;if((!r.get("show")||e.scale.isBlank())&&(i=[]),q(a))i=se(e,a,!0);else if(a==="auto"){var l=ne(e,e.getLabelModel());o=l.labelCategoryInterval,i=I(l.labels,function(u){return u.tickValue})}else o=a,i=ue(e,o,!0);return le(t,a,{ticks:i,tickCategoryInterval:o})}function sa(e){var r=e.scale.getTicks(),t=U(e);return{labels:I(r,function(a,n){return{level:a.level,formattedLabel:t(a,n),rawLabel:e.scale.getLabel(a),tickValue:a.value}})}}function ie(e,r){return $(e)[r]||($(e)[r]=[])}function oe(e,r){for(var t=0;t<e.length;t++)if(e[t].key===r)return e[t].value}function le(e,r,t){return e.push({key:r,value:t}),t}function ca(e){var r=$(e).autoInterval;return r??($(e).autoInterval=e.calculateCategoryInterval())}function va(e){var r=ha(e),t=U(e),a=(r.axisRotate-r.labelRotate)/180*Math.PI,n=e.scale,i=n.getExtent(),o=n.count();if(i[1]-i[0]<1)return 0;var l=1;o>40&&(l=Math.max(1,Math.floor(o/40)));for(var u=i[0],s=e.dataToCoord(u+1)-e.dataToCoord(u),c=Math.abs(s*Math.cos(a)),h=Math.abs(s*Math.sin(a)),f=0,v=0;u<=i[1];u+=l){var g=0,m=0,M=_e(t({value:u}),r.font,"center","top");g=M.width*1.3,m=M.height*1.3,f=Math.max(f,g,7),v=Math.max(v,m,7)}var d=f/c,y=v/h;isNaN(d)&&(d=1/0),isNaN(y)&&(y=1/0);var b=Math.max(0,Math.floor(Math.min(d,y))),p=$(e.model),E=e.getExtent(),B=p.lastAutoInterval,z=p.lastTickCount;return B!=null&&z!=null&&Math.abs(B-b)<=1&&Math.abs(z-o)<=1&&B>b&&p.axisExtent0===E[0]&&p.axisExtent1===E[1]?b=B:(p.lastTickCount=o,p.lastAutoInterval=b,p.axisExtent0=E[0],p.axisExtent1=E[1]),b}function ha(e){var r=e.getLabelModel();return{axisRotate:e.getRotate?e.getRotate():e.isHorizontal&&!e.isHorizontal()?90:0,labelRotate:r.get("rotate")||0,font:r.getFont()}}function ue(e,r,t){var a=U(e),n=e.scale,i=n.getExtent(),o=e.getLabelModel(),l=[],u=Math.max((r||0)+1,1),s=i[0],c=n.count();s!==0&&u>1&&c/u>2&&(s=Math.round(Math.ceil(s/u)*u));var h=na(e),f=o.get("showMinLabel")||h,v=o.get("showMaxLabel")||h;f&&s!==i[0]&&m(i[0]);for(var g=s;g<=i[1];g+=u)m(g);v&&g-u!==i[1]&&m(i[1]);function m(M){var d={value:M};l.push(t?M:{formattedLabel:a(d),rawLabel:n.getLabel(d),tickValue:M})}return l}function se(e,r,t){var a=e.scale,n=U(e),i=[];return N(a.getTicks(),function(o){var l=a.getLabel(o),u=o.value;r(o.value,l)&&i.push(t?u:{formattedLabel:n(o),rawLabel:l,tickValue:u})}),i}var At=[0,1],ya=function(){function e(r,t,a){this.onBand=!1,this.inverse=!1,this.dim=r,this.scale=t,this._extent=a||[0,0]}return e.prototype.contain=function(r){var t=this._extent,a=Math.min(t[0],t[1]),n=Math.max(t[0],t[1]);return r>=a&&r<=n},e.prototype.containData=function(r){return this.scale.contain(r)},e.prototype.getExtent=function(){return this._extent.slice()},e.prototype.getPixelPrecision=function(r){return we(r||this.scale.getExtent(),this._extent)},e.prototype.setExtent=function(r,t){var a=this._extent;a[0]=r,a[1]=t},e.prototype.dataToCoord=function(r,t){var a=this._extent,n=this.scale;return r=n.normalize(r),this.onBand&&n.type==="ordinal"&&(a=a.slice(),Rt(a,n.count())),It(r,At,a,t)},e.prototype.coordToData=function(r,t){var a=this._extent,n=this.scale;this.onBand&&n.type==="ordinal"&&(a=a.slice(),Rt(a,n.count()));var i=It(r,a,At,t);return this.scale.scale(i)},e.prototype.pointToData=function(r,t){},e.prototype.getTicksCoords=function(r){r=r||{};var t=r.tickModel||this.getTickModel(),a=oa(this,t),n=a.ticks,i=I(n,function(l){return{coord:this.dataToCoord(this.scale.type==="ordinal"?this.scale.getRawOrdinalNumber(l):l),tickValue:l}},this),o=t.get("alignWithLabel");return fa(this,i,o,r.clamp),i},e.prototype.getMinorTicksCoords=function(){if(this.scale.type==="ordinal")return[];var r=this.model.getModel("minorTick"),t=r.get("splitNumber");t>0&&t<100||(t=5);var a=this.scale.getMinorTicks(t),n=I(a,function(i){return I(i,function(o){return{coord:this.dataToCoord(o),tickValue:o}},this)},this);return n},e.prototype.getViewLabels=function(){return ia(this).labels},e.prototype.getLabelModel=function(){return this.model.getModel("axisLabel")},e.prototype.getTickModel=function(){return this.model.getModel("axisTick")},e.prototype.getBandWidth=function(){var r=this._extent,t=this.scale.getExtent(),a=t[1]-t[0]+(this.onBand?1:0);a===0&&(a=1);var n=Math.abs(r[1]-r[0]);return Math.abs(n)/a},e.prototype.calculateCategoryInterval=function(){return va(this)},e}();function Rt(e,r){var t=e[1]-e[0],a=r,n=t/a/2;e[0]+=n,e[1]-=n}function fa(e,r,t,a){var n=r.length;if(!e.onBand||t||!n)return;var i=e.getExtent(),o,l;if(n===1)r[0].coord=i[0],o=r[1]={coord:i[1]};else{var u=r[n-1].tickValue-r[0].tickValue,s=(r[n-1].coord-r[0].coord)/u;N(r,function(v){v.coord-=s/2});var c=e.scale.getExtent();l=1+c[1]-r[n-1].tickValue,o={coord:r[n-1].coord+s*l},r.push(o)}var h=i[0]>i[1];f(r[0].coord,i[0])&&(a?r[0].coord=i[0]:r.shift()),a&&f(i[0],r[0].coord)&&r.unshift({coord:i[0]}),f(i[1],o.coord)&&(a?o.coord=i[1]:r.pop()),a&&f(o.coord,i[1])&&r.push({coord:i[1]});function f(v,g){return v=W(v),g=W(g),h?v>g:v<g}}export{ya as A,pa as c,ga as n};