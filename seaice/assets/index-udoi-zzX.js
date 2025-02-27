import{u as Xn}from"./extension-Diz9XR8L.js";import{CanvasRenderer as ui}from"./renderers-CFLrXA9p.js";import{ao as ar,ap as ci,aq as hi,ar as je,F as Ce,as as li,a0 as di,at as Ke,au as vi,av as _i,aw as Je,ax as ue,ay as yi,az as Ot,aA as we,H as He,y as Qe,X as mi,aB as te,ab as $e,ac as ce,w as Xe,aC as pi,aD as gi,aE as rn,x as Oe,aF as tn,aG as Ei,aH as Ti,a9 as kn,aI as xi,aJ as en,aK as Ai,C as Ri,p as Mi,v as nn,D as an,aL as Ni,aM as Ii,aj as Si,ak as Li,aN as Ci,c as wi,d as Oi,a as bi,aO as Pi}from"./UncertaintyAnalysisView-Cc3TNpT_.js";var qr=[0,0],Zr=[0,0],Vt=new ar,Ht=new ar,be=function(){function r(t,e){this._corners=[],this._axes=[],this._origin=[0,0];for(var n=0;n<4;n++)this._corners[n]=new ar;for(var n=0;n<2;n++)this._axes[n]=new ar;t&&this.fromBoundingRect(t,e)}return r.prototype.fromBoundingRect=function(t,e){var n=this._corners,i=this._axes,a=t.x,s=t.y,o=a+t.width,f=s+t.height;if(n[0].set(a,s),n[1].set(o,s),n[2].set(o,f),n[3].set(a,f),e)for(var u=0;u<4;u++)n[u].transform(e);ar.sub(i[0],n[1],n[0]),ar.sub(i[1],n[3],n[0]),i[0].normalize(),i[1].normalize();for(var u=0;u<2;u++)this._origin[u]=i[u].dot(n[0])},r.prototype.intersect=function(t,e){var n=!0,i=!e;return Vt.set(1/0,1/0),Ht.set(0,0),!this._intersectCheckOneSide(this,t,Vt,Ht,i,1)&&(n=!1,i)||!this._intersectCheckOneSide(t,this,Vt,Ht,i,-1)&&(n=!1,i)||i||ar.copy(e,n?Vt:Ht),n},r.prototype._intersectCheckOneSide=function(t,e,n,i,a,s){for(var o=!0,f=0;f<2;f++){var u=this._axes[f];if(this._getProjMinMaxOnAxis(f,t._corners,qr),this._getProjMinMaxOnAxis(f,e._corners,Zr),qr[1]<Zr[0]||qr[0]>Zr[1]){if(o=!1,a)return o;var c=Math.abs(Zr[0]-qr[1]),l=Math.abs(qr[0]-Zr[1]);Math.min(c,l)>i.len()&&(c<l?ar.scale(i,u,-c*s):ar.scale(i,u,l*s))}else if(n){var c=Math.abs(Zr[0]-qr[1]),l=Math.abs(qr[0]-Zr[1]);Math.min(c,l)<n.len()&&(c<l?ar.scale(n,u,c*s):ar.scale(n,u,-l*s))}}return o},r.prototype._getProjMinMaxOnAxis=function(t,e,n){for(var i=this._axes[t],a=this._origin,s=e[0].dot(i)+a[t],o=s,f=s,u=1;u<e.length;u++){var c=e[u].dot(i)+a[t];o=Math.min(c,o),f=Math.max(c,f)}n[0]=o,n[1]=f},r}(),Mt=Math.PI*2,jr=yi.CMD,Di=["top","right","bottom","left"];function Bi(r,t,e,n,i){var a=e.width,s=e.height;switch(r){case"top":n.set(e.x+a/2,e.y-t),i.set(0,-1);break;case"bottom":n.set(e.x+a/2,e.y+s+t),i.set(0,1);break;case"left":n.set(e.x-t,e.y+s/2),i.set(-1,0);break;case"right":n.set(e.x+a+t,e.y+s/2),i.set(1,0);break}}function Ui(r,t,e,n,i,a,s,o,f){s-=r,o-=t;var u=Math.sqrt(s*s+o*o);s/=u,o/=u;var c=s*e+r,l=o*e+t;if(Math.abs(n-i)%Mt<1e-4)return f[0]=c,f[1]=l,u-e;if(a){var d=n;n=Ot(i),i=Ot(d)}else n=Ot(n),i=Ot(i);n>i&&(i+=Mt);var h=Math.atan2(o,s);if(h<0&&(h+=Mt),h>=n&&h<=i||h+Mt>=n&&h+Mt<=i)return f[0]=c,f[1]=l,u-e;var v=e*Math.cos(n)+r,_=e*Math.sin(n)+t,m=e*Math.cos(i)+r,p=e*Math.sin(i)+t,T=(v-s)*(v-s)+(_-o)*(_-o),g=(m-s)*(m-s)+(p-o)*(p-o);return T<g?(f[0]=v,f[1]=_,Math.sqrt(T)):(f[0]=m,f[1]=p,Math.sqrt(g))}function Pe(r,t,e,n,i,a,s,o){var f=i-r,u=a-t,c=e-r,l=n-t,d=Math.sqrt(c*c+l*l);c/=d,l/=d;var h=f*c+u*l,v=h/d;o&&(v=Math.min(Math.max(v,0),1)),v*=d;var _=s[0]=r+v*c,m=s[1]=t+v*l;return Math.sqrt((_-i)*(_-i)+(m-a)*(m-a))}function Wn(r,t,e,n,i,a,s){e<0&&(r=r+e,e=-e),n<0&&(t=t+n,n=-n);var o=r+e,f=t+n,u=s[0]=Math.min(Math.max(i,r),o),c=s[1]=Math.min(Math.max(a,t),f);return Math.sqrt((u-i)*(u-i)+(c-a)*(c-a))}var Ir=[];function Fi(r,t,e){var n=Wn(t.x,t.y,t.width,t.height,r.x,r.y,Ir);return e.set(Ir[0],Ir[1]),n}function Gi(r,t,e){for(var n=0,i=0,a=0,s=0,o,f,u=1/0,c=t.data,l=r.x,d=r.y,h=0;h<c.length;){var v=c[h++];h===1&&(n=c[h],i=c[h+1],a=n,s=i);var _=u;switch(v){case jr.M:a=c[h++],s=c[h++],n=a,i=s;break;case jr.L:_=Pe(n,i,c[h],c[h+1],l,d,Ir,!0),n=c[h++],i=c[h++];break;case jr.C:_=_i(n,i,c[h++],c[h++],c[h++],c[h++],c[h],c[h+1],l,d,Ir),n=c[h++],i=c[h++];break;case jr.Q:_=vi(n,i,c[h++],c[h++],c[h],c[h+1],l,d,Ir),n=c[h++],i=c[h++];break;case jr.A:var m=c[h++],p=c[h++],T=c[h++],g=c[h++],E=c[h++],S=c[h++];h+=1;var N=!!(1-c[h++]);o=Math.cos(E)*T+m,f=Math.sin(E)*g+p,h<=1&&(a=o,s=f);var D=(l-m)*g/T+m;_=Ui(m,p,g,E,E+S,N,D,d,Ir),n=Math.cos(E+S)*T+m,i=Math.sin(E+S)*g+p;break;case jr.R:a=n=c[h++],s=i=c[h++];var w=c[h++],O=c[h++];_=Wn(a,s,w,O,l,d,Ir);break;case jr.Z:_=Pe(n,i,a,s,l,d,Ir,!0),n=a,i=s;break}_<u&&(u=_,e.set(Ir[0],Ir[1]))}return u}var $r=new ar,ur=new ar,Er=new ar,mt=new ar,Nt=new ar;function sn(r,t){if(r){var e=r.getTextGuideLine(),n=r.getTextContent();if(n&&e){var i=r.textGuideLineConfig||{},a=[[0,0],[0,0],[0,0]],s=i.candidates||Di,o=n.getBoundingRect().clone();o.applyTransform(n.getComputedTransform());var f=1/0,u=i.anchor,c=r.getComputedTransform(),l=c&&ci([],c),d=t.get("length2")||0;u&&Er.copy(u);for(var h=0;h<s.length;h++){var v=s[h];Bi(v,0,o,$r,mt),ar.scaleAndAdd(ur,$r,mt,d),ur.transform(l);var _=r.getBoundingRect(),m=u?u.distance(ur):r instanceof hi?Gi(ur,r.path,Er):Fi(ur,_,Er);m<f&&(f=m,ur.transform(c),Er.transform(c),Er.toArray(a[0]),ur.toArray(a[1]),$r.toArray(a[2]))}Vi(a,t.get("minTurnAngle")),e.setShape({points:a})}}}var on=[],Kr=new ar;function Vi(r,t){if(t<=180&&t>0){t=t/180*Math.PI,$r.fromArray(r[0]),ur.fromArray(r[1]),Er.fromArray(r[2]),ar.sub(mt,$r,ur),ar.sub(Nt,Er,ur);var e=mt.len(),n=Nt.len();if(!(e<.001||n<.001)){mt.scale(1/e),Nt.scale(1/n);var i=mt.dot(Nt),a=Math.cos(t);if(a<i){var s=Pe(ur.x,ur.y,Er.x,Er.y,$r.x,$r.y,on,!1);Kr.fromArray(on),Kr.scaleAndAdd(Nt,s/Math.tan(Math.PI-t));var o=Er.x!==ur.x?(Kr.x-ur.x)/(Er.x-ur.x):(Kr.y-ur.y)/(Er.y-ur.y);if(isNaN(o))return;o<0?ar.copy(Kr,ur):o>1&&ar.copy(Kr,Er),Kr.toArray(r[1])}}}}function he(r,t,e,n){var i=e==="normal",a=i?r:r.ensureState(e);a.ignore=t;var s=n.get("smooth");s&&s===!0&&(s=.3),a.shape=a.shape||{},s>0&&(a.shape.smooth=s);var o=n.getModel("lineStyle").getLineStyle();i?r.useStyle(o):a.style=o}function Hi(r,t){var e=t.smooth,n=t.points;if(n)if(r.moveTo(n[0][0],n[0][1]),e>0&&n.length>=3){var i=Je(n[0],n[1]),a=Je(n[1],n[2]);if(!i||!a){r.lineTo(n[1][0],n[1][1]),r.lineTo(n[2][0],n[2][1]);return}var s=Math.min(i,a)*e,o=ue([],n[1],n[0],s/i),f=ue([],n[1],n[2],s/a),u=ue([],o,f,.5);r.bezierCurveTo(o[0],o[1],o[0],o[1],u[0],u[1]),r.bezierCurveTo(f[0],f[1],f[0],f[1],n[2][0],n[2][1])}else for(var c=1;c<n.length;c++)r.lineTo(n[c][0],n[c][1])}function Xi(r,t,e){var n=r.getTextGuideLine(),i=r.getTextContent();if(!i){n&&r.removeTextGuideLine();return}for(var a=t.normal,s=a.get("show"),o=i.ignore,f=0;f<je.length;f++){var u=je[f],c=t[u],l=u==="normal";if(c){var d=c.get("show"),h=l?o:Ce(i.states[u]&&i.states[u].ignore,o);if(h||!Ce(d,s)){var v=l?n:n&&n.states[u];v&&(v.ignore=!0),n&&he(n,!0,u,c);continue}n||(n=new li,r.setTextGuideLine(n),!l&&(o||!s)&&he(n,!0,"normal",t.normal),r.stateProxy&&(n.stateProxy=r.stateProxy)),he(n,!1,u,c)}}if(n){di(n.style,e),n.style.fill=null;var _=a.get("showAbove"),m=r.textGuideLineConfig=r.textGuideLineConfig||{};m.showAbove=_||!1,n.buildPath=Hi}}function ki(r,t){t=t||"labelLine";for(var e={normal:r.getModel(t)},n=0;n<Ke.length;n++){var i=Ke[n];e[i]=r.getModel([i,t])}return e}function Wi(r){for(var t=[],e=0;e<r.length;e++){var n=r[e];if(!n.defaultAttr.ignore){var i=n.label,a=i.getComputedTransform(),s=i.getBoundingRect(),o=!a||a[1]<1e-5&&a[2]<1e-5,f=i.style.margin||0,u=s.clone();u.applyTransform(a),u.x-=f/2,u.y-=f/2,u.width+=f,u.height+=f;var c=o?new be(s,a):null;t.push({label:i,labelLine:n.labelLine,rect:u,localRect:s,obb:c,priority:n.priority,defaultAttr:n.defaultAttr,layoutOption:n.computedLayoutOption,axisAligned:o,transform:a})}}return t}function zn(r,t,e,n,i,a){var s=r.length;if(s<2)return;r.sort(function(N,D){return N.rect[t]-D.rect[t]});for(var o=0,f,u=!1,c=0;c<s;c++){var l=r[c],d=l.rect;f=d[t]-o,f<0&&(d[t]-=f,l.label[t]-=f,u=!0),o=d[t]+d[e]}var h=r[0],v=r[s-1],_,m;p(),_<0&&E(-_,.8),m<0&&E(m,.8),p(),T(_,m,1),T(m,_,-1),p(),_<0&&S(-_),m<0&&S(m);function p(){_=h.rect[t]-n,m=i-v.rect[t]-v.rect[e]}function T(N,D,w){if(N<0){var O=Math.min(D,-N);if(O>0){g(O*w,0,s);var U=O+N;U<0&&E(-U*w,1)}else E(-N*w,1)}}function g(N,D,w){N!==0&&(u=!0);for(var O=D;O<w;O++){var U=r[O],b=U.rect;b[t]+=N,U.label[t]+=N}}function E(N,D){for(var w=[],O=0,U=1;U<s;U++){var b=r[U-1].rect,k=Math.max(r[U].rect[t]-b[t]-b[e],0);w.push(k),O+=k}if(O){var X=Math.min(Math.abs(N)/O,D);if(N>0)for(var U=0;U<s-1;U++){var F=w[U]*X;g(F,0,U+1)}else for(var U=s-1;U>0;U--){var F=w[U-1]*X;g(-F,U,s)}}}function S(N){var D=N<0?-1:1;N=Math.abs(N);for(var w=Math.ceil(N/(s-1)),O=0;O<s-1;O++)if(D>0?g(w,0,O+1):g(-w,s-O-1,s),N-=w,N<=0)return}return u}function zi(r,t,e,n){return zn(r,"x","width",t,e)}function Yi(r,t,e,n){return zn(r,"y","height",t,e)}function qi(r){var t=[];r.sort(function(_,m){return m.priority-_.priority});var e=new we(0,0,0,0);function n(_){if(!_.ignore){var m=_.ensureState("emphasis");m.ignore==null&&(m.ignore=!1)}_.ignore=!0}for(var i=0;i<r.length;i++){var a=r[i],s=a.axisAligned,o=a.localRect,f=a.transform,u=a.label,c=a.labelLine;e.copy(a.rect),e.width-=.1,e.height-=.1,e.x+=.05,e.y+=.05;for(var l=a.obb,d=!1,h=0;h<t.length;h++){var v=t[h];if(e.intersect(v.rect)){if(s&&v.axisAligned){d=!0;break}if(v.obb||(v.obb=new be(v.localRect,v.transform)),l||(l=new be(o,f)),l.intersect(v.obb)){d=!0;break}}}d?(n(u),c&&n(c)):(u.attr("ignore",a.defaultAttr.ignore),c&&c.attr("ignore",a.defaultAttr.labelGuideIgnore),t.push(a))}}function Zi(r){if(r){for(var t=[],e=0;e<r.length;e++)t.push(r[e].slice());return t}}function ji(r,t){var e=r.label,n=t&&t.getTextGuideLine();return{dataIndex:r.dataIndex,dataType:r.dataType,seriesIndex:r.seriesModel.seriesIndex,text:r.label.style.text,rect:r.hostRect,labelRect:r.rect,align:e.style.align,verticalAlign:e.style.verticalAlign,labelLinePoints:Zi(n&&n.shape.points)}}var fn=["align","verticalAlign","width","height","fontSize"],dr=new Ti,le=He(),Ki=He();function Xt(r,t,e){for(var n=0;n<e.length;n++){var i=e[n];t[i]!=null&&(r[i]=t[i])}}var kt=["x","y","rotation"],Ji=function(){function r(){this._labelList=[],this._chartViewList=[]}return r.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},r.prototype._addLabel=function(t,e,n,i,a){var s=i.style,o=i.__hostTarget,f=o.textConfig||{},u=i.getComputedTransform(),c=i.getBoundingRect().plain();we.applyTransform(c,c,u),u?dr.setLocalTransform(u):(dr.x=dr.y=dr.rotation=dr.originX=dr.originY=0,dr.scaleX=dr.scaleY=1),dr.rotation=Ot(dr.rotation);var l=i.__hostTarget,d;if(l){d=l.getBoundingRect().plain();var h=l.getComputedTransform();we.applyTransform(d,d,h)}var v=d&&l.getTextGuideLine();this._labelList.push({label:i,labelLine:v,seriesModel:n,dataIndex:t,dataType:e,layoutOption:a,computedLayoutOption:null,rect:c,hostRect:d,priority:d?d.width*d.height:0,defaultAttr:{ignore:i.ignore,labelGuideIgnore:v&&v.ignore,x:dr.x,y:dr.y,scaleX:dr.scaleX,scaleY:dr.scaleY,rotation:dr.rotation,style:{x:s.x,y:s.y,align:s.align,verticalAlign:s.verticalAlign,width:s.width,height:s.height,fontSize:s.fontSize},cursor:i.cursor,attachedPos:f.position,attachedRot:f.rotation}})},r.prototype.addLabelsOfSeries=function(t){var e=this;this._chartViewList.push(t);var n=t.__model,i=n.get("labelLayout");(Qe(i)||mi(i).length)&&t.group.traverse(function(a){if(a.ignore)return!0;var s=a.getTextContent(),o=te(a);s&&!s.disableLabelLayout&&e._addLabel(o.dataIndex,o.dataType,n,s,i)})},r.prototype.updateLayoutConfig=function(t){var e=t.getWidth(),n=t.getHeight();function i(g,E){return function(){sn(g,E)}}for(var a=0;a<this._labelList.length;a++){var s=this._labelList[a],o=s.label,f=o.__hostTarget,u=s.defaultAttr,c=void 0;Qe(s.layoutOption)?c=s.layoutOption(ji(s,f)):c=s.layoutOption,c=c||{},s.computedLayoutOption=c;var l=Math.PI/180;f&&f.setTextConfig({local:!1,position:c.x!=null||c.y!=null?null:u.attachedPos,rotation:c.rotate!=null?c.rotate*l:u.attachedRot,offset:[c.dx||0,c.dy||0]});var d=!1;if(c.x!=null?(o.x=$e(c.x,e),o.setStyle("x",0),d=!0):(o.x=u.x,o.setStyle("x",u.style.x)),c.y!=null?(o.y=$e(c.y,n),o.setStyle("y",0),d=!0):(o.y=u.y,o.setStyle("y",u.style.y)),c.labelLinePoints){var h=f.getTextGuideLine();h&&(h.setShape({points:c.labelLinePoints}),d=!1)}var v=le(o);v.needsUpdateLabelLine=d,o.rotation=c.rotate!=null?c.rotate*l:u.rotation,o.scaleX=u.scaleX,o.scaleY=u.scaleY;for(var _=0;_<fn.length;_++){var m=fn[_];o.setStyle(m,c[m]!=null?c[m]:u.style[m])}if(c.draggable){if(o.draggable=!0,o.cursor="move",f){var p=s.seriesModel;if(s.dataIndex!=null){var T=s.seriesModel.getData(s.dataType);p=T.getItemModel(s.dataIndex)}o.on("drag",i(f,p.getModel("labelLine")))}}else o.off("drag"),o.cursor=u.cursor}},r.prototype.layout=function(t){var e=t.getWidth(),n=t.getHeight(),i=Wi(this._labelList),a=ce(i,function(f){return f.layoutOption.moveOverlap==="shiftX"}),s=ce(i,function(f){return f.layoutOption.moveOverlap==="shiftY"});zi(a,0,e),Yi(s,0,n);var o=ce(i,function(f){return f.layoutOption.hideOverlap});qi(o)},r.prototype.processLabelsOverall=function(){var t=this;Xe(this._chartViewList,function(e){var n=e.__model,i=e.ignoreLabelLineUpdate,a=n.isAnimationEnabled();e.group.traverse(function(s){if(s.ignore&&!s.forceLabelAnimation)return!0;var o=!i,f=s.getTextContent();!o&&f&&(o=le(f).needsUpdateLabelLine),o&&t._updateLabelLine(s,n),a&&t._animateLabels(s,n)})})},r.prototype._updateLabelLine=function(t,e){var n=t.getTextContent(),i=te(t),a=i.dataIndex;if(n&&a!=null){var s=e.getData(i.dataType),o=s.getItemModel(a),f={},u=s.getItemVisual(a,"style");if(u){var c=s.getVisual("drawType");f.stroke=u[c]}var l=o.getModel("labelLine");Xi(t,ki(o),f),sn(t,l)}},r.prototype._animateLabels=function(t,e){var n=t.getTextContent(),i=t.getTextGuideLine();if(n&&(t.forceLabelAnimation||!n.ignore&&!n.invisible&&!t.disableLabelAnimation&&!pi(t))){var a=le(n),s=a.oldLayout,o=te(t),f=o.dataIndex,u={x:n.x,y:n.y,rotation:n.rotation},c=e.getData(o.dataType);if(s){n.attr(s);var d=t.prevStates;d&&(Oe(d,"select")>=0&&n.attr(a.oldLayoutSelect),Oe(d,"emphasis")>=0&&n.attr(a.oldLayoutEmphasis)),tn(n,u,e,f)}else if(n.attr(u),!gi(n).valueAnimation){var l=Ce(n.style.opacity,1);n.style.opacity=0,rn(n,{style:{opacity:l}},e,f)}if(a.oldLayout=u,n.states.select){var h=a.oldLayoutSelect={};Xt(h,u,kt),Xt(h,n.states.select,kt)}if(n.states.emphasis){var v=a.oldLayoutEmphasis={};Xt(v,u,kt),Xt(v,n.states.emphasis,kt)}Ei(n,f,c,e,e)}if(i&&!i.ignore&&!i.invisible){var a=Ki(i),s=a.oldLayout,_={points:i.shape.points};s?(i.attr({shape:s}),tn(i,{shape:_},e)):(i.setShape(_),i.style.strokePercent=0,rn(i,{style:{strokePercent:1}},e)),a.oldLayout=_}},r}(),de=He();function Qi(r){r.registerUpdateLifecycle("series:beforeupdate",function(t,e,n){var i=de(e).labelManager;i||(i=de(e).labelManager=new Ji),i.clearLabels()}),r.registerUpdateLifecycle("series:layoutlabels",function(t,e,n){var i=de(e).labelManager;n.updatedSeries.forEach(function(a){i.addLabelsOfSeries(e.getViewOfSeriesModel(a))}),i.updateLayoutConfig(e),i.layout(e),i.processLabelsOverall()})}var $i=function(r){kn(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.type="dataset",e}return t.prototype.init=function(e,n,i){r.prototype.init.call(this,e,n,i),this._sourceManager=new xi(this),en(this)},t.prototype.mergeOption=function(e,n){r.prototype.mergeOption.call(this,e,n),en(this)},t.prototype.optionUpdated=function(){this._sourceManager.dirty()},t.prototype.getSourceManager=function(){return this._sourceManager},t.type="dataset",t.defaultOption={seriesLayoutBy:Ai},t}(Ri),ra=function(r){kn(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.type="dataset",e}return t.type="dataset",t}(Mi);function ta(r){r.registerComponentModel($i),r.registerComponentView(ra)}Xn([ui,ta]);Xn(Qi);function un(r,t,e){typeof t=="object"&&(e=t,t=null);var n=this,i;if(!(r instanceof Function)){i=[];for(var a in r)r.hasOwnProperty(a)&&i.push(a)}var s=function(f){if(n.apply(this,arguments),r instanceof Function?cn(this,r.call(this,f)):ea(this,r,i),this.constructor===s)for(var u=s.__initializers__,c=0;c<u.length;c++)u[c].apply(this,arguments)};s.__super__=n,n.__initializers__?s.__initializers__=n.__initializers__.slice():s.__initializers__=[],t&&s.__initializers__.push(t);var o=function(){};return o.prototype=n.prototype,s.prototype=new o,s.prototype.constructor=s,cn(s.prototype,e),s.extend=n.extend,s.derive=n.extend,s}function cn(r,t){if(t)for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])}function ea(r,t,e){for(var n=0;n<e.length;n++){var i=e[n];r[i]=t[i]}}const na={extend:un,derive:un};function ia(r,t){this.action=r,this.context=t}var Yn={trigger:function(r){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(r)){var t=this.__handlers__[r],e=t.length,n=-1,i=arguments;switch(i.length){case 1:for(;++n<e;)t[n].action.call(t[n].context);return;case 2:for(;++n<e;)t[n].action.call(t[n].context,i[1]);return;case 3:for(;++n<e;)t[n].action.call(t[n].context,i[1],i[2]);return;case 4:for(;++n<e;)t[n].action.call(t[n].context,i[1],i[2],i[3]);return;case 5:for(;++n<e;)t[n].action.call(t[n].context,i[1],i[2],i[3],i[4]);return;default:for(;++n<e;)t[n].action.apply(t[n].context,Array.prototype.slice.call(i,1));return}}},on:function(r,t,e){if(!(!r||!t)){var n=this.__handlers__||(this.__handlers__={});if(!n[r])n[r]=[];else if(this.has(r,t))return;var i=new ia(t,e||this);return n[r].push(i),this}},once:function(r,t,e){if(!r||!t)return;var n=this;function i(){n.off(r,i),t.apply(this,arguments)}return this.on(r,i,e)},before:function(r,t,e){if(!(!r||!t))return r="before"+r,this.on(r,t,e)},after:function(r,t,e){if(!(!r||!t))return r="after"+r,this.on(r,t,e)},success:function(r,t){return this.once("success",r,t)},error:function(r,t){return this.once("error",r,t)},off:function(r,t){var e=this.__handlers__||(this.__handlers__={});if(!t){e[r]=[];return}if(e[r]){for(var n=e[r],i=[],a=0;a<n.length;a++)t&&n[a].action!==t&&i.push(n[a]);e[r]=i}return this},has:function(r,t){var e=this.__handlers__;if(!e||!e[r])return!1;for(var n=e[r],i=0;i<n.length;i++)if(n[i].action===t)return!0}},aa=0,sa=Array.prototype,oa=sa.forEach,cr={genGUID:function(){return++aa},relative2absolute:function(r,t){if(!t||r.match(/^\//))return r;for(var e=r.split("/"),n=t.split("/"),i=e[0];i==="."||i==="..";)i===".."&&n.pop(),e.shift(),i=e[0];return n.join("/")+"/"+e.join("/")},extend:function(r,t){if(t)for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);return r},defaults:function(r,t){if(t)for(var e in t)r[e]===void 0&&(r[e]=t[e]);return r},extendWithPropList:function(r,t,e){if(t)for(var n=0;n<e.length;n++){var i=e[n];r[i]=t[i]}return r},defaultsWithPropList:function(r,t,e){if(t)for(var n=0;n<e.length;n++){var i=e[n];r[i]==null&&(r[i]=t[i])}return r},each:function(r,t,e){if(r&&t)if(r.forEach&&r.forEach===oa)r.forEach(t,e);else if(r.length===+r.length)for(var n=0,i=r.length;n<i;n++)t.call(e,r[n],n,r);else for(var a in r)r.hasOwnProperty(a)&&t.call(e,r[a],a,r)},isObject:function(r){return r===Object(r)},isArray:function(r){return Array.isArray(r)},isArrayLike:function(r){return r?r.length===+r.length:!1},clone:function(r){if(cr.isObject(r)){if(cr.isArray(r))return r.slice();if(cr.isArrayLike(r)){for(var t=new r.constructor(r.length),e=0;e<r.length;e++)t[e]=r[e];return t}else return cr.extend({},r)}else return r}},xr=function(){this.__uid__=cr.genGUID()};xr.__initializers__=[function(r){cr.extend(this,r)}];cr.extend(xr,na);cr.extend(xr.prototype,Yn);var hn=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],ln=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function fa(r){for(var t={},e={},n=0;n<hn.length;n++){var i=hn[n];s(i)}for(var n=0;n<ln.length;n++){var a=ln[n];e[a]=r.getParameter(r[a])}this.getExtension=function(o){return o in t||s(o),t[o]},this.getParameter=function(o){return e[o]};function s(o){if(r.getExtension){var f=r.getExtension(o);f||(f=r.getExtension("MOZ_"+o)),f||(f=r.getExtension("WEBKIT_"+o)),t[o]=f}}}const I={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function ua(r){var t=new XMLHttpRequest;t.open("get",r.url),t.responseType=r.responseType||"text",r.onprogress&&(t.onprogress=function(e){if(e.lengthComputable){var n=e.loaded/e.total;r.onprogress(n,e.loaded,e.total)}else r.onprogress(null)}),t.onload=function(e){t.status>=400?r.onerror&&r.onerror():r.onload&&r.onload(t.response)},r.onerror&&(t.onerror=r.onerror),t.send(null)}const ca={get:ua};var ve,Y={};Y.supportWebGL=function(){if(ve==null)try{var r=document.createElement("canvas"),t=r.getContext("webgl")||r.getContext("experimental-webgl");if(!t)throw new Error}catch{ve=!1}return ve};Y.Int8Array=typeof Int8Array>"u"?Array:Int8Array;Y.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;Y.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;Y.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;Y.Int16Array=typeof Int16Array>"u"?Array:Int16Array;Y.Float32Array=typeof Float32Array>"u"?Array:Float32Array;Y.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var rt={};typeof window<"u"?rt=window:typeof global<"u"&&(rt=global);Y.requestAnimationFrame=rt.requestAnimationFrame||rt.msRequestAnimationFrame||rt.mozRequestAnimationFrame||rt.webkitRequestAnimationFrame||function(r){setTimeout(r,16)};Y.createCanvas=function(){return document.createElement("canvas")};Y.createImage=function(){return new rt.Image};Y.request={get:ca.get};Y.addEventListener=function(r,t,e,n){r.addEventListener(t,e,n)};Y.removeEventListener=function(r,t,e){r.removeEventListener(t,e)};var or=function(){this.head=null,this.tail=null,this._length=0};or.prototype.insert=function(r){var t=new or.Entry(r);return this.insertEntry(t),t};or.prototype.insertAt=function(r,t){if(!(r<0)){for(var e=this.head,n=0;e&&n!=r;)e=e.next,n++;if(e){var i=new or.Entry(t),a=e.prev;a?(a.next=i,i.prev=a):this.head=i,i.next=e,e.prev=i}else this.insert(t)}};or.prototype.insertBeforeEntry=function(r,t){var e=new or.Entry(r),n=t.prev;n?(n.next=e,e.prev=n):this.head=e,e.next=t,t.prev=e,this._length++};or.prototype.insertEntry=function(r){this.head?(this.tail.next=r,r.prev=this.tail,this.tail=r):this.head=this.tail=r,this._length++};or.prototype.remove=function(r){var t=r.prev,e=r.next;t?t.next=e:this.head=e,e?e.prev=t:this.tail=t,r.next=r.prev=null,this._length--};or.prototype.removeAt=function(r){if(!(r<0)){for(var t=this.head,e=0;t&&e!=r;)t=t.next,e++;if(t)return this.remove(t),t.value}};or.prototype.getHead=function(){if(this.head)return this.head.value};or.prototype.getTail=function(){if(this.tail)return this.tail.value};or.prototype.getAt=function(r){if(!(r<0)){for(var t=this.head,e=0;t&&e!=r;)t=t.next,e++;return t.value}};or.prototype.indexOf=function(r){for(var t=this.head,e=0;t;){if(t.value===r)return e;t=t.next,e++}};or.prototype.length=function(){return this._length};or.prototype.isEmpty=function(){return this._length===0};or.prototype.forEach=function(r,t){for(var e=this.head,n=0,i=typeof t<"u";e;)i?r.call(t,e.value,n):r(e.value,n),e=e.next,n++};or.prototype.clear=function(){this.tail=this.head=null,this._length=0};or.Entry=function(r){this.value=r,this.next=null,this.prev=null};var at=function(r){this._list=new or,this._map={},this._maxSize=r||10};at.prototype.setMaxSize=function(r){this._maxSize=r};at.prototype.put=function(r,t){if(!this._map.hasOwnProperty(r)){var e=this._list.length();if(e>=this._maxSize&&e>0){var n=this._list.head;this._list.remove(n),delete this._map[n.key]}var i=this._list.insert(t);i.key=r,this._map[r]=i}};at.prototype.get=function(r){var t=this._map[r];if(this._map.hasOwnProperty(r))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};at.prototype.remove=function(r){var t=this._map[r];typeof t<"u"&&(delete this._map[r],this._list.remove(t))};at.prototype.clear=function(){this._list.clear(),this._map={}};var er={},dn={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function Sr(r){return r=Math.round(r),r<0?0:r>255?255:r}function ha(r){return r=Math.round(r),r<0?0:r>360?360:r}function Bt(r){return r<0?0:r>1?1:r}function _e(r){return r.length&&r.charAt(r.length-1)==="%"?Sr(parseFloat(r)/100*255):Sr(parseInt(r,10))}function gt(r){return r.length&&r.charAt(r.length-1)==="%"?Bt(parseFloat(r)/100):Bt(parseFloat(r))}function ye(r,t,e){return e<0?e+=1:e>1&&(e-=1),e*6<1?r+(t-r)*e*6:e*2<1?t:e*3<2?r+(t-r)*(2/3-e)*6:r}function kr(r,t,e){return r+(t-r)*e}function Nr(r,t,e,n,i){return r[0]=t,r[1]=e,r[2]=n,r[3]=i,r}function De(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r}var qn=new at(20),Wt=null;function ut(r,t){Wt&&De(Wt,t),Wt=qn.put(r,Wt||t.slice())}er.parse=function(r,t){if(r){t=t||[];var e=qn.get(r);if(e)return De(t,e);r=r+"";var n=r.replace(/ /g,"").toLowerCase();if(n in dn)return De(t,dn[n]),ut(r,t),t;if(n.charAt(0)==="#"){if(n.length===4){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=4095)){Nr(t,0,0,0,1);return}return Nr(t,(i&3840)>>4|(i&3840)>>8,i&240|(i&240)>>4,i&15|(i&15)<<4,1),ut(r,t),t}else if(n.length===7){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=16777215)){Nr(t,0,0,0,1);return}return Nr(t,(i&16711680)>>16,(i&65280)>>8,i&255,1),ut(r,t),t}return}var a=n.indexOf("("),s=n.indexOf(")");if(a!==-1&&s+1===n.length){var o=n.substr(0,a),f=n.substr(a+1,s-(a+1)).split(","),u=1;switch(o){case"rgba":if(f.length!==4){Nr(t,0,0,0,1);return}u=gt(f.pop());case"rgb":if(f.length!==3){Nr(t,0,0,0,1);return}return Nr(t,_e(f[0]),_e(f[1]),_e(f[2]),u),ut(r,t),t;case"hsla":if(f.length!==4){Nr(t,0,0,0,1);return}return f[3]=gt(f[3]),Be(f,t),ut(r,t),t;case"hsl":if(f.length!==3){Nr(t,0,0,0,1);return}return Be(f,t),ut(r,t),t;default:return}}Nr(t,0,0,0,1)}};er.parseToFloat=function(r,t){if(t=er.parse(r,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function Be(r,t){var e=(parseFloat(r[0])%360+360)%360/360,n=gt(r[1]),i=gt(r[2]),a=i<=.5?i*(n+1):i+n-i*n,s=i*2-a;return t=t||[],Nr(t,Sr(ye(s,a,e+1/3)*255),Sr(ye(s,a,e)*255),Sr(ye(s,a,e-1/3)*255),1),r.length===4&&(t[3]=r[3]),t}function la(r){if(r){var t=r[0]/255,e=r[1]/255,n=r[2]/255,i=Math.min(t,e,n),a=Math.max(t,e,n),s=a-i,o=(a+i)/2,f,u;if(s===0)f=0,u=0;else{o<.5?u=s/(a+i):u=s/(2-a-i);var c=((a-t)/6+s/2)/s,l=((a-e)/6+s/2)/s,d=((a-n)/6+s/2)/s;t===a?f=d-l:e===a?f=1/3+c-d:n===a&&(f=2/3+l-c),f<0&&(f+=1),f>1&&(f-=1)}var h=[f*360,u,o];return r[3]!=null&&h.push(r[3]),h}}er.lift=function(r,t){var e=er.parse(r);if(e){for(var n=0;n<3;n++)t<0?e[n]=e[n]*(1-t)|0:e[n]=(255-e[n])*t+e[n]|0;return er.stringify(e,e.length===4?"rgba":"rgb")}};er.toHex=function(r){var t=er.parse(r);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};er.fastLerp=function(r,t,e){if(!(!(t&&t.length)||!(r>=0&&r<=1))){e=e||[];var n=r*(t.length-1),i=Math.floor(n),a=Math.ceil(n),s=t[i],o=t[a],f=n-i;return e[0]=Sr(kr(s[0],o[0],f)),e[1]=Sr(kr(s[1],o[1],f)),e[2]=Sr(kr(s[2],o[2],f)),e[3]=Bt(kr(s[3],o[3],f)),e}};er.fastMapToColor=er.fastLerp;er.lerp=function(r,t,e){if(!(!(t&&t.length)||!(r>=0&&r<=1))){var n=r*(t.length-1),i=Math.floor(n),a=Math.ceil(n),s=er.parse(t[i]),o=er.parse(t[a]),f=n-i,u=er.stringify([Sr(kr(s[0],o[0],f)),Sr(kr(s[1],o[1],f)),Sr(kr(s[2],o[2],f)),Bt(kr(s[3],o[3],f))],"rgba");return e?{color:u,leftIndex:i,rightIndex:a,value:n}:u}};er.mapToColor=er.lerp;er.modifyHSL=function(r,t,e,n){if(r=er.parse(r),r)return r=la(r),t!=null&&(r[0]=ha(t)),e!=null&&(r[1]=gt(e)),n!=null&&(r[2]=gt(n)),er.stringify(Be(r),"rgba")};er.modifyAlpha=function(r,t){if(r=er.parse(r),r&&t!=null)return r[3]=Bt(t),er.stringify(r,"rgba")};er.stringify=function(r,t){if(!(!r||!r.length)){var e=r[0]+","+r[1]+","+r[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(e+=","+r[3]),t+"("+e+")"}};var da=er.parseToFloat,me={};function vn(r){var t=Object.keys(r);t.sort();for(var e=[],n=0;n<t.length;n++){var i=t[n],a=r[i];a===null?e.push(i):e.push(i+" "+a.toString())}return e.join(`
`)}function va(r,t,e){e.sort();for(var n=[],i=0;i<e.length;i++){var a=e[i];n.push(a)}var s=vn(r)+`
`+vn(t)+`
`+n.join(`
`);if(me[s])return me[s];var o=cr.genGUID();return me[s]=o,o}var st=xr.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(r,t){t===void 0&&console.warn('Uniform value "'+r+'" is undefined');var e=this.uniforms[r];e&&(typeof t=="string"&&(t=da(t)||t),e.value=t,this.autoUpdateTextureStatus&&e.type==="t"&&(t?this.enableTexture(r):this.disableTexture(r)))},setUniforms:function(r){for(var t in r){var e=r[t];this.setUniform(t,e)}},isUniformEnabled:function(r){return this._enabledUniforms.indexOf(r)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(r,t){if(typeof r=="object")for(var e in r){var n=r[e];this.setUniform(e,n)}else this.setUniform(r,t)},get:function(r){var t=this.uniforms[r];if(t)return t.value},attachShader:function(r,t){var e=this.uniforms;this.uniforms=r.createUniforms(),this.shader=r;var n=this.uniforms;this._enabledUniforms=Object.keys(n),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var c=this.uniforms[u].type;return c==="t"||c==="tv"},this);var i=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=cr.clone(r.vertexDefines),this.fragmentDefines=cr.clone(r.fragmentDefines),t){for(var s in e)n[s]&&(n[s].value=e[s].value);cr.defaults(this.vertexDefines,i),cr.defaults(this.fragmentDefines,a)}var o={};for(var f in r.textures)o[f]={shaderType:r.textures[f].shaderType,type:r.textures[f].type,enabled:t&&this._textureStatus[f]?this._textureStatus[f].enabled:!1};this._textureStatus=o,this._programKey=""},clone:function(){var r=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)r.uniforms[t].value=this.uniforms[t].value;return r.depthTest=this.depthTest,r.depthMask=this.depthMask,r.transparent=this.transparent,r.blend=this.blend,r.vertexDefines=cr.clone(this.vertexDefines),r.fragmentDefines=cr.clone(this.fragmentDefines),r.enableTexture(this.getEnabledTextures()),r.precision=this.precision,r},define:function(r,t,e){var n=this.vertexDefines,i=this.fragmentDefines;r!=="vertex"&&r!=="fragment"&&r!=="both"&&arguments.length<3&&(e=t,t=r,r="both"),e=e??null,(r==="vertex"||r==="both")&&n[t]!==e&&(n[t]=e,this._programKey=""),(r==="fragment"||r==="both")&&i[t]!==e&&(i[t]=e,r!=="both"&&(this._programKey=""))},undefine:function(r,t){r!=="vertex"&&r!=="fragment"&&r!=="both"&&arguments.length<2&&(t=r,r="both"),(r==="vertex"||r==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(r==="fragment"||r==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],r!=="both"&&(this._programKey=""))},isDefined:function(r,t){switch(r){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(r,t){switch(r){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(r){if(Array.isArray(r)){for(var t=0;t<r.length;t++)this.enableTexture(r[t]);return}var e=this._textureStatus[r];if(e){var n=e.enabled;n||(e.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var r=this._textureStatus;for(var t in r)r[t].enabled=!0;this._programKey=""},disableTexture:function(r){if(Array.isArray(r)){for(var t=0;t<r.length;t++)this.disableTexture(r[t]);return}var e=this._textureStatus[r];if(e){var n=!e.enabled;n||(e.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var r=this._textureStatus;for(var t in r)r[t].enabled=!1;this._programKey=""},isTextureEnabled:function(r){var t=this._textureStatus;return!!t[r]&&t[r].enabled},getEnabledTextures:function(){var r=[],t=this._textureStatus;for(var e in t)t[e].enabled&&r.push(e);return r},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=va(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),ee=1e-6,hr=Array,pt=Math.random,M={};M.create=function(){var r=new hr(2);return r[0]=0,r[1]=0,r};M.clone=function(r){var t=new hr(2);return t[0]=r[0],t[1]=r[1],t};M.fromValues=function(r,t){var e=new hr(2);return e[0]=r,e[1]=t,e};M.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r};M.set=function(r,t,e){return r[0]=t,r[1]=e,r};M.add=function(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r};M.subtract=function(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r};M.sub=M.subtract;M.multiply=function(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r};M.mul=M.multiply;M.divide=function(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r};M.div=M.divide;M.min=function(r,t,e){return r[0]=Math.min(t[0],e[0]),r[1]=Math.min(t[1],e[1]),r};M.max=function(r,t,e){return r[0]=Math.max(t[0],e[0]),r[1]=Math.max(t[1],e[1]),r};M.scale=function(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r};M.scaleAndAdd=function(r,t,e,n){return r[0]=t[0]+e[0]*n,r[1]=t[1]+e[1]*n,r};M.distance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1];return Math.sqrt(e*e+n*n)};M.dist=M.distance;M.squaredDistance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1];return e*e+n*n};M.sqrDist=M.squaredDistance;M.length=function(r){var t=r[0],e=r[1];return Math.sqrt(t*t+e*e)};M.len=M.length;M.squaredLength=function(r){var t=r[0],e=r[1];return t*t+e*e};M.sqrLen=M.squaredLength;M.negate=function(r,t){return r[0]=-t[0],r[1]=-t[1],r};M.inverse=function(r,t){return r[0]=1/t[0],r[1]=1/t[1],r};M.normalize=function(r,t){var e=t[0],n=t[1],i=e*e+n*n;return i>0&&(i=1/Math.sqrt(i),r[0]=t[0]*i,r[1]=t[1]*i),r};M.dot=function(r,t){return r[0]*t[0]+r[1]*t[1]};M.cross=function(r,t,e){var n=t[0]*e[1]-t[1]*e[0];return r[0]=r[1]=0,r[2]=n,r};M.lerp=function(r,t,e,n){var i=t[0],a=t[1];return r[0]=i+n*(e[0]-i),r[1]=a+n*(e[1]-a),r};M.random=function(r,t){t=t||1;var e=GLMAT_RANDOM()*2*Math.PI;return r[0]=Math.cos(e)*t,r[1]=Math.sin(e)*t,r};M.transformMat2=function(r,t,e){var n=t[0],i=t[1];return r[0]=e[0]*n+e[2]*i,r[1]=e[1]*n+e[3]*i,r};M.transformMat2d=function(r,t,e){var n=t[0],i=t[1];return r[0]=e[0]*n+e[2]*i+e[4],r[1]=e[1]*n+e[3]*i+e[5],r};M.transformMat3=function(r,t,e){var n=t[0],i=t[1];return r[0]=e[0]*n+e[3]*i+e[6],r[1]=e[1]*n+e[4]*i+e[7],r};M.transformMat4=function(r,t,e){var n=t[0],i=t[1];return r[0]=e[0]*n+e[4]*i+e[12],r[1]=e[1]*n+e[5]*i+e[13],r};M.forEach=function(){var r=M.create();return function(t,e,n,i,a,s){var o,f;for(e||(e=2),n||(n=0),i?f=Math.min(i*e+n,t.length):f=t.length,o=n;o<f;o+=e)r[0]=t[o],r[1]=t[o+1],a(r,r,s),t[o]=r[0],t[o+1]=r[1];return t}}();var V=function(r,t){r=r||0,t=t||0,this.array=M.fromValues(r,t),this._dirty=!0};V.prototype={constructor:V,add:function(r){return M.add(this.array,this.array,r.array),this._dirty=!0,this},set:function(r,t){return this.array[0]=r,this.array[1]=t,this._dirty=!0,this},setArray:function(r){return this.array[0]=r[0],this.array[1]=r[1],this._dirty=!0,this},clone:function(){return new V(this.x,this.y)},copy:function(r){return M.copy(this.array,r.array),this._dirty=!0,this},cross:function(r,t){return M.cross(r.array,this.array,t.array),r._dirty=!0,this},dist:function(r){return M.dist(this.array,r.array)},distance:function(r){return M.distance(this.array,r.array)},div:function(r){return M.div(this.array,this.array,r.array),this._dirty=!0,this},divide:function(r){return M.divide(this.array,this.array,r.array),this._dirty=!0,this},dot:function(r){return M.dot(this.array,r.array)},len:function(){return M.len(this.array)},length:function(){return M.length(this.array)},lerp:function(r,t,e){return M.lerp(this.array,r.array,t.array,e),this._dirty=!0,this},min:function(r){return M.min(this.array,this.array,r.array),this._dirty=!0,this},max:function(r){return M.max(this.array,this.array,r.array),this._dirty=!0,this},mul:function(r){return M.mul(this.array,this.array,r.array),this._dirty=!0,this},multiply:function(r){return M.multiply(this.array,this.array,r.array),this._dirty=!0,this},negate:function(){return M.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return M.normalize(this.array,this.array),this._dirty=!0,this},random:function(r){return M.random(this.array,r),this._dirty=!0,this},scale:function(r){return M.scale(this.array,this.array,r),this._dirty=!0,this},scaleAndAdd:function(r,t){return M.scaleAndAdd(this.array,this.array,r.array,t),this._dirty=!0,this},sqrDist:function(r){return M.sqrDist(this.array,r.array)},squaredDistance:function(r){return M.squaredDistance(this.array,r.array)},sqrLen:function(){return M.sqrLen(this.array)},squaredLength:function(){return M.squaredLength(this.array)},sub:function(r){return M.sub(this.array,this.array,r.array),this._dirty=!0,this},subtract:function(r){return M.subtract(this.array,this.array,r.array),this._dirty=!0,this},transformMat2:function(r){return M.transformMat2(this.array,this.array,r.array),this._dirty=!0,this},transformMat2d:function(r){return M.transformMat2d(this.array,this.array,r.array),this._dirty=!0,this},transformMat3:function(r){return M.transformMat3(this.array,this.array,r.array),this._dirty=!0,this},transformMat4:function(r){return M.transformMat4(this.array,this.array,r.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var _n=V.prototype;Object.defineProperty(_n,"x",{get:function(){return this.array[0]},set:function(r){this.array[0]=r,this._dirty=!0}}),Object.defineProperty(_n,"y",{get:function(){return this.array[1]},set:function(r){this.array[1]=r,this._dirty=!0}})}V.add=function(r,t,e){return M.add(r.array,t.array,e.array),r._dirty=!0,r};V.set=function(r,t,e){return M.set(r.array,t,e),r._dirty=!0,r};V.copy=function(r,t){return M.copy(r.array,t.array),r._dirty=!0,r};V.cross=function(r,t,e){return M.cross(r.array,t.array,e.array),r._dirty=!0,r};V.dist=function(r,t){return M.distance(r.array,t.array)};V.distance=V.dist;V.div=function(r,t,e){return M.divide(r.array,t.array,e.array),r._dirty=!0,r};V.divide=V.div;V.dot=function(r,t){return M.dot(r.array,t.array)};V.len=function(r){return M.length(r.array)};V.lerp=function(r,t,e,n){return M.lerp(r.array,t.array,e.array,n),r._dirty=!0,r};V.min=function(r,t,e){return M.min(r.array,t.array,e.array),r._dirty=!0,r};V.max=function(r,t,e){return M.max(r.array,t.array,e.array),r._dirty=!0,r};V.mul=function(r,t,e){return M.multiply(r.array,t.array,e.array),r._dirty=!0,r};V.multiply=V.mul;V.negate=function(r,t){return M.negate(r.array,t.array),r._dirty=!0,r};V.normalize=function(r,t){return M.normalize(r.array,t.array),r._dirty=!0,r};V.random=function(r,t){return M.random(r.array,t),r._dirty=!0,r};V.scale=function(r,t,e){return M.scale(r.array,t.array,e),r._dirty=!0,r};V.scaleAndAdd=function(r,t,e,n){return M.scaleAndAdd(r.array,t.array,e.array,n),r._dirty=!0,r};V.sqrDist=function(r,t){return M.sqrDist(r.array,t.array)};V.squaredDistance=V.sqrDist;V.sqrLen=function(r){return M.sqrLen(r.array)};V.squaredLength=V.sqrLen;V.sub=function(r,t,e){return M.subtract(r.array,t.array,e.array),r._dirty=!0,r};V.subtract=V.sub;V.transformMat2=function(r,t,e){return M.transformMat2(r.array,t.array,e.array),r._dirty=!0,r};V.transformMat2d=function(r,t,e){return M.transformMat2d(r.array,t.array,e.array),r._dirty=!0,r};V.transformMat3=function(r,t,e){return M.transformMat3(r.array,t.array,e.array),r._dirty=!0,r};V.transformMat4=function(r,t,e){return M.transformMat4(r.array,t.array,e.array),r._dirty=!0,r};var yn=1,mn=2,pe=3,pn={};function _a(r){for(var t=r.split(`
`),e=0,n=t.length;e<n;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function gn(r,t,e){if(!r.getShaderParameter(t,r.COMPILE_STATUS))return[r.getShaderInfoLog(t),_a(e)].join(`
`)}var En=new Y.Float32Array(16),ya=xr.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(r){this._textureSlot=0,r.gl.useProgram(this._program)},hasUniform:function(r){var t=this._locations[r];return t!=null},useTextureSlot:function(r,t,e){t&&(r.gl.activeTexture(r.gl.TEXTURE0+e),t.isRenderable()?t.bind(r):t.unbind(r))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(r){this._textureSlot=r||0},takeCurrentTextureSlot:function(r,t){var e=this._textureSlot;return this.useTextureSlot(r,t,e),this._textureSlot++,e},setUniform:function(r,t,e,n){var i=this._locations,a=i[e];if(a==null)return!1;switch(t){case"m4":if(!(n instanceof Float32Array)){for(var s=0;s<n.length;s++)En[s]=n[s];n=En}r.uniformMatrix4fv(a,!1,n);break;case"2i":r.uniform2i(a,n[0],n[1]);break;case"2f":r.uniform2f(a,n[0],n[1]);break;case"3i":r.uniform3i(a,n[0],n[1],n[2]);break;case"3f":r.uniform3f(a,n[0],n[1],n[2]);break;case"4i":r.uniform4i(a,n[0],n[1],n[2],n[3]);break;case"4f":r.uniform4f(a,n[0],n[1],n[2],n[3]);break;case"1i":r.uniform1i(a,n);break;case"1f":r.uniform1f(a,n);break;case"1fv":r.uniform1fv(a,n);break;case"1iv":r.uniform1iv(a,n);break;case"2iv":r.uniform2iv(a,n);break;case"2fv":r.uniform2fv(a,n);break;case"3iv":r.uniform3iv(a,n);break;case"3fv":r.uniform3fv(a,n);break;case"4iv":r.uniform4iv(a,n);break;case"4fv":r.uniform4fv(a,n);break;case"m2":case"m2v":r.uniformMatrix2fv(a,!1,n);break;case"m3":case"m3v":r.uniformMatrix3fv(a,!1,n);break;case"m4v":if(Array.isArray(n)&&Array.isArray(n[0])){for(var o=new Y.Float32Array(n.length*16),f=0,s=0;s<n.length;s++)for(var u=n[s],c=0;c<16;c++)o[f++]=u[c];r.uniformMatrix4fv(a,!1,o)}else r.uniformMatrix4fv(a,!1,n);break}return!0},setUniformOfSemantic:function(r,t,e){var n=this.uniformSemantics[t];return n?this.setUniform(r,n.type,n.symbol,e):!1},enableAttributes:function(r,t,e){var n=r.gl,i=this._program,a=this._locations,s;e?s=e.__enabledAttributeList:s=pn[r.__uid__],s||(e?s=e.__enabledAttributeList=[]:s=pn[r.__uid__]=[]);for(var o=[],f=0;f<t.length;f++){var u=t[f];if(!this.attributes[u]){o[f]=-1;continue}var c=a[u];if(c==null){if(c=n.getAttribLocation(i,u),c===-1){o[f]=-1;continue}a[u]=c}o[f]=c,s[c]?s[c]=mn:s[c]=yn}for(var f=0;f<s.length;f++)switch(s[f]){case yn:n.enableVertexAttribArray(f),s[f]=pe;break;case mn:s[f]=pe;break;case pe:n.disableVertexAttribArray(f),s[f]=0;break}return o},getAttribLocation:function(r,t){var e=this._locations,n=e[t];return n==null&&(n=r.getAttribLocation(this._program,t),e[t]=n),n},buildProgram:function(r,t,e,n){var i=r.createShader(r.VERTEX_SHADER),a=r.createProgram();r.shaderSource(i,e),r.compileShader(i);var s=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(s,n),r.compileShader(s);var o=gn(r,i,e);if(o||(o=gn(r,s,n),o))return o;if(r.attachShader(a,i),r.attachShader(a,s),t.attributeSemantics.POSITION)r.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var f=Object.keys(this.attributes);r.bindAttribLocation(a,0,f[0])}if(r.linkProgram(a),r.deleteShader(i),r.deleteShader(s),this._program=a,this.vertexCode=e,this.fragmentCode=n,!r.getProgramParameter(a,r.LINK_STATUS))return`Could not link program
`+r.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var c=t.uniforms[u];this._locations[c]=r.getUniformLocation(a,c)}}}),ma=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Tn(r,t,e){function n(s,o,f,u){var c="";isNaN(o)&&(o in t?o=t[o]:o=i[o]),isNaN(f)&&(f in t?f=t[f]:f=i[f]);for(var l=parseInt(o);l<parseInt(f);l++)c+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,l.toFixed(1)).replace(/_idx_/g,l)+"}";return c}var i={};for(var a in e)i[a+"_COUNT"]=e[a];return r.replace(ma,n)}function ge(r,t,e){var n=[];if(t)for(var i in t){var a=t[i];a>0&&n.push("#define "+i.toUpperCase()+"_COUNT "+a)}if(e)for(var s=0;s<e.length;s++){var o=e[s];n.push("#define "+o.toUpperCase()+"_ENABLED")}for(var o in r){var f=r[o];f===null?n.push("#define "+o):n.push("#define "+o+" "+f.toString())}return n.join(`
`)}function pa(r){for(var t=[],e=0;e<r.length;e++)t.push("#extension GL_"+r[e]+" : enable");return t.join(`
`)}function ga(r){return["precision",r,"float"].join(" ")+`;
`+["precision",r,"int"].join(" ")+`;
`+["precision",r,"sampler2D"].join(" ")+`;
`}function Zn(r){this._renderer=r,this._cache={}}Zn.prototype.getProgram=function(r,t,e){var n=this._cache,i=r.isSkinnedMesh&&r.isSkinnedMesh(),a=r.isInstancedMesh&&r.isInstancedMesh(),s="s"+t.shader.shaderID+"m"+t.getProgramKey();e&&(s+="se"+e.getProgramKey(r.lightGroup)),i&&(s+=",sk"+r.joints.length),a&&(s+=",is");var E=n[s];if(E)return E;var o=e?e.getLightsNumbers(r.lightGroup):{},f=this._renderer,u=f.gl,c=t.getEnabledTextures(),l="";if(i){var d={SKINNING:null,JOINT_COUNT:r.joints.length};r.joints.length>f.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),l+=`
`+ge(d)+`
`}a&&(l+=`
#define INSTANCING
`);var h=l+ge(t.vertexDefines,o,c),v=l+ge(t.fragmentDefines,o,c),_=h+`
`+t.shader.vertex,m=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(N){return f.getGLExtension(N)!=null});m.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),m.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var p=pa(m)+`
`+ga(t.precision)+`
`+v+`
`+t.shader.fragment,T=Tn(_,t.vertexDefines,o),g=Tn(p,t.fragmentDefines,o),E=new ya;E.uniformSemantics=t.shader.uniformSemantics,E.attributes=t.shader.attributes;var S=E.buildProgram(u,t.shader,T,g);return E.__error=S,n[s]=E,E};var xn=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,Ea=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,An=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,Ta={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function Br(r){for(var t=[],e=0;e<r;e++)t[e]=0;return t}var Rn={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return Br(2)},vec3:function(){return Br(3)},vec4:function(){return Br(4)},ivec2:function(){return Br(2)},ivec3:function(){return Br(3)},ivec4:function(){return Br(4)},mat2:function(){return Br(4)},mat3:function(){return Br(9)},mat4:function(){return Br(16)},array:function(){return[]}},Ue=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],jn=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],Kn=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],xa={vec4:4,vec3:3,vec2:2,float:1},Ee={},Jn={};function Aa(r,t){var e="vertex:"+r+"fragment:"+t;if(Ee[e])return Ee[e];var n=cr.genGUID();return Ee[e]=n,Jn[n]={vertex:r,fragment:t},n}function Mn(r){return r.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function ct(){console.error("Wrong uniform/attributes syntax")}function Nn(r,t){for(var e=/[,=\(\):]/,n=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+r+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),i=[],a=0;a<n.length;a++)n[a].match(e)?i.push(n[a].charAt(0),n[a].slice(1)):i.push(n[a]);n=i;var s=0,o=1,f=2,u=3,c=4,l=5,d=s,h={},v=null,_;m(n[0]);function m(g){g||ct();var E=g.match(/\[(.*?)\]/);_=g.replace(/\[(.*?)\]/,""),h[_]={},E&&(h[_].isArray=!0,h[_].arraySize=E[1])}for(var a=1;a<n.length;a++){var p=n[a];if(p){if(p==="="){if(d!==s&&d!==u){ct();break}d=o;continue}else if(p===":"){d=c;continue}else if(p===","){if(d===f){if(!(v instanceof Array)){ct();break}v.push(+n[++a])}else d=l;continue}else if(p===")"){h[_].value=new Y.Float32Array(v),v=null,d=l;continue}else if(p==="("){if(d!==f){ct();break}if(!(v instanceof Array)){ct();break}v.push(+n[++a]);continue}else if(p.indexOf("vec")>=0){if(d!==o&&d!==c){ct();break}d=f,v=[];continue}else if(d===o){r==="bool"?h[_].value=p==="true":h[_].value=parseFloat(p),v=null;continue}else if(d===c){var T=p;Ue.indexOf(T)>=0||jn.indexOf(T)>=0||Kn.indexOf(T)>=0?h[_].semantic=T:T==="ignore"||T==="unconfigurable"?h[_].ignore=!0:r==="bool"?h[_].value=T==="true":h[_].value=parseFloat(T);continue}m(p),d=s}}return h}function H(r,t){typeof r=="object"&&(t=r.fragment,r=r.vertex),r=Mn(r),t=Mn(t),this._shaderID=Aa(r,t),this._vertexCode=H.parseImport(r),this._fragmentCode=H.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}H.prototype={constructor:H,createUniforms:function(){var r={};for(var t in this.uniformTemplates){var e=this.uniformTemplates[t];r[t]={type:e.type,value:e.value()}}return r},_parseImport:function(){this._vertexCode=H.parseImport(this.vertex),this._fragmentCode=H.parseImport(this.fragment)},_addSemanticUniform:function(r,t,e){if(Ue.indexOf(e)>=0)this.attributeSemantics[e]={symbol:r,type:t};else if(Kn.indexOf(e)>=0){var n=!1,i=e;e.match(/TRANSPOSE$/)&&(n=!0,i=e.slice(0,-9)),this.matrixSemantics[e]={symbol:r,type:t,isTranspose:n,semanticNoTranspose:i}}else jn.indexOf(e)>=0&&(this.uniformSemantics[e]={symbol:r,type:t})},_addMaterialUniform:function(r,t,e,n,i,a){a[r]={type:e,value:i?Rn.array:n||Rn[t],semantic:null}},_parseUniforms:function(){var r={},t=this,e="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(xn,i),e="fragment",this._fragmentCode=this._fragmentCode.replace(xn,i),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function n(a){return a!=null?function(){return a}:null}function i(a,s,o){var f=Nn(s,o),u=[];for(var c in f){var l=f[c],d=l.semantic,h=c,v=Ta[s],_=n(f[c].value);f[c].isArray&&(h+="["+f[c].arraySize+"]",v+="v"),u.push(h),t._uniformList.push(c),l.ignore||((s==="sampler2D"||s==="samplerCube")&&(t.textures[c]={shaderType:e,type:s}),d?t._addSemanticUniform(c,v,d):t._addMaterialUniform(c,s,v,_,f[c].isArray,r))}return u.length>0?"uniform "+s+" "+u.join(",")+`;
`:""}this.uniformTemplates=r},_parseAttributes:function(){var r={},t=this;this._vertexCode=this._vertexCode.replace(Ea,e);function e(n,i,a){var s=Nn(i,a),o=xa[i]||1,f=[];for(var u in s){var c=s[u].semantic;if(r[u]={type:"float",size:o,semantic:c||null},c){if(Ue.indexOf(c)<0)throw new Error('Unkown semantic "'+c+'"');t.attributeSemantics[c]={symbol:u,type:i}}f.push(u)}return"attribute "+i+" "+f.join(",")+`;
`}this.attributes=r},_parseDefines:function(){var r=this,t="vertex";this._vertexCode=this._vertexCode.replace(An,e),t="fragment",this._fragmentCode=this._fragmentCode.replace(An,e);function e(n,i,a){var s=t==="vertex"?r.vertexDefines:r.fragmentDefines;return s[i]||(a==="false"?s[i]=!1:a==="true"?s[i]=!0:s[i]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var r=Jn[this._shaderID],t=new H(r.vertex,r.fragment);return t}};Object.defineProperty&&(Object.defineProperty(H.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(H.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(H.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(H.prototype,"uniforms",{get:function(){return this._uniformList}}));var Ra=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;H.parseImport=function(r){return r=r.replace(Ra,function(i,e,n){var i=H.source(n);return i?H.parseImport(i):(console.error('Shader chunk "'+n+'" not existed in library'),"")}),r};var Ma=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;H.import=function(r){r.replace(Ma,function(t,e,n,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var s=n.split("."),o=H.codes,f=0,u;f<s.length-1;)u=s[f++],o[u]||(o[u]={}),o=o[u];u=s[f],o[u]=a}return a})};H.codes={};H.source=function(r){for(var t=r.split("."),e=H.codes,n=0;e&&n<t.length;){var i=t[n++];e=e[i]}return typeof e!="string"?(console.error('Shader "'+r+'" not existed in library'),""):e};const Qn=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var R={};R.create=function(){var r=new hr(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r};R.clone=function(r){var t=new hr(16);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t};R.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r};R.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r};R.transpose=function(r,t){if(r===t){var e=t[1],n=t[2],i=t[3],a=t[6],s=t[7],o=t[11];r[1]=t[4],r[2]=t[8],r[3]=t[12],r[4]=e,r[6]=t[9],r[7]=t[13],r[8]=n,r[9]=a,r[11]=t[14],r[12]=i,r[13]=s,r[14]=o}else r[0]=t[0],r[1]=t[4],r[2]=t[8],r[3]=t[12],r[4]=t[1],r[5]=t[5],r[6]=t[9],r[7]=t[13],r[8]=t[2],r[9]=t[6],r[10]=t[10],r[11]=t[14],r[12]=t[3],r[13]=t[7],r[14]=t[11],r[15]=t[15];return r};R.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],f=t[6],u=t[7],c=t[8],l=t[9],d=t[10],h=t[11],v=t[12],_=t[13],m=t[14],p=t[15],T=e*o-n*s,g=e*f-i*s,E=e*u-a*s,S=n*f-i*o,N=n*u-a*o,D=i*u-a*f,w=c*_-l*v,O=c*m-d*v,U=c*p-h*v,b=l*m-d*_,k=l*p-h*_,X=d*p-h*m,F=T*X-g*k+E*b+S*U-N*O+D*w;return F?(F=1/F,r[0]=(o*X-f*k+u*b)*F,r[1]=(i*k-n*X-a*b)*F,r[2]=(_*D-m*N+p*S)*F,r[3]=(d*N-l*D-h*S)*F,r[4]=(f*U-s*X-u*O)*F,r[5]=(e*X-i*U+a*O)*F,r[6]=(m*E-v*D-p*g)*F,r[7]=(c*D-d*E+h*g)*F,r[8]=(s*k-o*U+u*w)*F,r[9]=(n*U-e*k-a*w)*F,r[10]=(v*N-_*E+p*T)*F,r[11]=(l*E-c*N-h*T)*F,r[12]=(o*O-s*b-f*w)*F,r[13]=(e*b-n*O+i*w)*F,r[14]=(_*g-v*S-m*T)*F,r[15]=(c*S-l*g+d*T)*F,r):null};R.adjoint=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],f=t[6],u=t[7],c=t[8],l=t[9],d=t[10],h=t[11],v=t[12],_=t[13],m=t[14],p=t[15];return r[0]=o*(d*p-h*m)-l*(f*p-u*m)+_*(f*h-u*d),r[1]=-(n*(d*p-h*m)-l*(i*p-a*m)+_*(i*h-a*d)),r[2]=n*(f*p-u*m)-o*(i*p-a*m)+_*(i*u-a*f),r[3]=-(n*(f*h-u*d)-o*(i*h-a*d)+l*(i*u-a*f)),r[4]=-(s*(d*p-h*m)-c*(f*p-u*m)+v*(f*h-u*d)),r[5]=e*(d*p-h*m)-c*(i*p-a*m)+v*(i*h-a*d),r[6]=-(e*(f*p-u*m)-s*(i*p-a*m)+v*(i*u-a*f)),r[7]=e*(f*h-u*d)-s*(i*h-a*d)+c*(i*u-a*f),r[8]=s*(l*p-h*_)-c*(o*p-u*_)+v*(o*h-u*l),r[9]=-(e*(l*p-h*_)-c*(n*p-a*_)+v*(n*h-a*l)),r[10]=e*(o*p-u*_)-s*(n*p-a*_)+v*(n*u-a*o),r[11]=-(e*(o*h-u*l)-s*(n*h-a*l)+c*(n*u-a*o)),r[12]=-(s*(l*m-d*_)-c*(o*m-f*_)+v*(o*d-f*l)),r[13]=e*(l*m-d*_)-c*(n*m-i*_)+v*(n*d-i*l),r[14]=-(e*(o*m-f*_)-s*(n*m-i*_)+v*(n*f-i*o)),r[15]=e*(o*d-f*l)-s*(n*d-i*l)+c*(n*f-i*o),r};R.determinant=function(r){var t=r[0],e=r[1],n=r[2],i=r[3],a=r[4],s=r[5],o=r[6],f=r[7],u=r[8],c=r[9],l=r[10],d=r[11],h=r[12],v=r[13],_=r[14],m=r[15],p=t*s-e*a,T=t*o-n*a,g=t*f-i*a,E=e*o-n*s,S=e*f-i*s,N=n*f-i*o,D=u*v-c*h,w=u*_-l*h,O=u*m-d*h,U=c*_-l*v,b=c*m-d*v,k=l*m-d*_;return p*k-T*b+g*U+E*O-S*w+N*D};R.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],f=t[5],u=t[6],c=t[7],l=t[8],d=t[9],h=t[10],v=t[11],_=t[12],m=t[13],p=t[14],T=t[15],g=e[0],E=e[1],S=e[2],N=e[3];return r[0]=g*n+E*o+S*l+N*_,r[1]=g*i+E*f+S*d+N*m,r[2]=g*a+E*u+S*h+N*p,r[3]=g*s+E*c+S*v+N*T,g=e[4],E=e[5],S=e[6],N=e[7],r[4]=g*n+E*o+S*l+N*_,r[5]=g*i+E*f+S*d+N*m,r[6]=g*a+E*u+S*h+N*p,r[7]=g*s+E*c+S*v+N*T,g=e[8],E=e[9],S=e[10],N=e[11],r[8]=g*n+E*o+S*l+N*_,r[9]=g*i+E*f+S*d+N*m,r[10]=g*a+E*u+S*h+N*p,r[11]=g*s+E*c+S*v+N*T,g=e[12],E=e[13],S=e[14],N=e[15],r[12]=g*n+E*o+S*l+N*_,r[13]=g*i+E*f+S*d+N*m,r[14]=g*a+E*u+S*h+N*p,r[15]=g*s+E*c+S*v+N*T,r};R.multiplyAffine=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[4],o=t[5],f=t[6],u=t[8],c=t[9],l=t[10],d=t[12],h=t[13],v=t[14],_=e[0],m=e[1],p=e[2];return r[0]=_*n+m*s+p*u,r[1]=_*i+m*o+p*c,r[2]=_*a+m*f+p*l,_=e[4],m=e[5],p=e[6],r[4]=_*n+m*s+p*u,r[5]=_*i+m*o+p*c,r[6]=_*a+m*f+p*l,_=e[8],m=e[9],p=e[10],r[8]=_*n+m*s+p*u,r[9]=_*i+m*o+p*c,r[10]=_*a+m*f+p*l,_=e[12],m=e[13],p=e[14],r[12]=_*n+m*s+p*u+d,r[13]=_*i+m*o+p*c+h,r[14]=_*a+m*f+p*l+v,r};R.mul=R.multiply;R.mulAffine=R.multiplyAffine;R.translate=function(r,t,e){var n=e[0],i=e[1],a=e[2],s,o,f,u,c,l,d,h,v,_,m,p;return t===r?(r[12]=t[0]*n+t[4]*i+t[8]*a+t[12],r[13]=t[1]*n+t[5]*i+t[9]*a+t[13],r[14]=t[2]*n+t[6]*i+t[10]*a+t[14],r[15]=t[3]*n+t[7]*i+t[11]*a+t[15]):(s=t[0],o=t[1],f=t[2],u=t[3],c=t[4],l=t[5],d=t[6],h=t[7],v=t[8],_=t[9],m=t[10],p=t[11],r[0]=s,r[1]=o,r[2]=f,r[3]=u,r[4]=c,r[5]=l,r[6]=d,r[7]=h,r[8]=v,r[9]=_,r[10]=m,r[11]=p,r[12]=s*n+c*i+v*a+t[12],r[13]=o*n+l*i+_*a+t[13],r[14]=f*n+d*i+m*a+t[14],r[15]=u*n+h*i+p*a+t[15]),r};R.scale=function(r,t,e){var n=e[0],i=e[1],a=e[2];return r[0]=t[0]*n,r[1]=t[1]*n,r[2]=t[2]*n,r[3]=t[3]*n,r[4]=t[4]*i,r[5]=t[5]*i,r[6]=t[6]*i,r[7]=t[7]*i,r[8]=t[8]*a,r[9]=t[9]*a,r[10]=t[10]*a,r[11]=t[11]*a,r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r};R.rotate=function(r,t,e,n){var i=n[0],a=n[1],s=n[2],o=Math.sqrt(i*i+a*a+s*s),f,u,c,l,d,h,v,_,m,p,T,g,E,S,N,D,w,O,U,b,k,X,F,Q;return Math.abs(o)<ee?null:(o=1/o,i*=o,a*=o,s*=o,f=Math.sin(e),u=Math.cos(e),c=1-u,l=t[0],d=t[1],h=t[2],v=t[3],_=t[4],m=t[5],p=t[6],T=t[7],g=t[8],E=t[9],S=t[10],N=t[11],D=i*i*c+u,w=a*i*c+s*f,O=s*i*c-a*f,U=i*a*c-s*f,b=a*a*c+u,k=s*a*c+i*f,X=i*s*c+a*f,F=a*s*c-i*f,Q=s*s*c+u,r[0]=l*D+_*w+g*O,r[1]=d*D+m*w+E*O,r[2]=h*D+p*w+S*O,r[3]=v*D+T*w+N*O,r[4]=l*U+_*b+g*k,r[5]=d*U+m*b+E*k,r[6]=h*U+p*b+S*k,r[7]=v*U+T*b+N*k,r[8]=l*X+_*F+g*Q,r[9]=d*X+m*F+E*Q,r[10]=h*X+p*F+S*Q,r[11]=v*X+T*F+N*Q,t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r)};R.rotateX=function(r,t,e){var n=Math.sin(e),i=Math.cos(e),a=t[4],s=t[5],o=t[6],f=t[7],u=t[8],c=t[9],l=t[10],d=t[11];return t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r[4]=a*i+u*n,r[5]=s*i+c*n,r[6]=o*i+l*n,r[7]=f*i+d*n,r[8]=u*i-a*n,r[9]=c*i-s*n,r[10]=l*i-o*n,r[11]=d*i-f*n,r};R.rotateY=function(r,t,e){var n=Math.sin(e),i=Math.cos(e),a=t[0],s=t[1],o=t[2],f=t[3],u=t[8],c=t[9],l=t[10],d=t[11];return t!==r&&(r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r[0]=a*i-u*n,r[1]=s*i-c*n,r[2]=o*i-l*n,r[3]=f*i-d*n,r[8]=a*n+u*i,r[9]=s*n+c*i,r[10]=o*n+l*i,r[11]=f*n+d*i,r};R.rotateZ=function(r,t,e){var n=Math.sin(e),i=Math.cos(e),a=t[0],s=t[1],o=t[2],f=t[3],u=t[4],c=t[5],l=t[6],d=t[7];return t!==r&&(r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r[0]=a*i+u*n,r[1]=s*i+c*n,r[2]=o*i+l*n,r[3]=f*i+d*n,r[4]=u*i-a*n,r[5]=c*i-s*n,r[6]=l*i-o*n,r[7]=d*i-f*n,r};R.fromRotationTranslation=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=n+n,f=i+i,u=a+a,c=n*o,l=n*f,d=n*u,h=i*f,v=i*u,_=a*u,m=s*o,p=s*f,T=s*u;return r[0]=1-(h+_),r[1]=l+T,r[2]=d-p,r[3]=0,r[4]=l-T,r[5]=1-(c+_),r[6]=v+m,r[7]=0,r[8]=d+p,r[9]=v-m,r[10]=1-(c+h),r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r};R.fromQuat=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e+e,o=n+n,f=i+i,u=e*s,c=n*s,l=n*o,d=i*s,h=i*o,v=i*f,_=a*s,m=a*o,p=a*f;return r[0]=1-l-v,r[1]=c+p,r[2]=d-m,r[3]=0,r[4]=c-p,r[5]=1-u-v,r[6]=h+_,r[7]=0,r[8]=d+m,r[9]=h-_,r[10]=1-u-l,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r};R.frustum=function(r,t,e,n,i,a,s){var o=1/(e-t),f=1/(i-n),u=1/(a-s);return r[0]=a*2*o,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=a*2*f,r[6]=0,r[7]=0,r[8]=(e+t)*o,r[9]=(i+n)*f,r[10]=(s+a)*u,r[11]=-1,r[12]=0,r[13]=0,r[14]=s*a*2*u,r[15]=0,r};R.perspective=function(r,t,e,n,i){var a=1/Math.tan(t/2),s=1/(n-i);return r[0]=a/e,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=a,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(i+n)*s,r[11]=-1,r[12]=0,r[13]=0,r[14]=2*i*n*s,r[15]=0,r};R.ortho=function(r,t,e,n,i,a,s){var o=1/(t-e),f=1/(n-i),u=1/(a-s);return r[0]=-2*o,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*f,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*u,r[11]=0,r[12]=(t+e)*o,r[13]=(i+n)*f,r[14]=(s+a)*u,r[15]=1,r};R.lookAt=function(r,t,e,n){var i,a,s,o,f,u,c,l,d,h,v=t[0],_=t[1],m=t[2],p=n[0],T=n[1],g=n[2],E=e[0],S=e[1],N=e[2];return Math.abs(v-E)<ee&&Math.abs(_-S)<ee&&Math.abs(m-N)<ee?R.identity(r):(c=v-E,l=_-S,d=m-N,h=1/Math.sqrt(c*c+l*l+d*d),c*=h,l*=h,d*=h,i=T*d-g*l,a=g*c-p*d,s=p*l-T*c,h=Math.sqrt(i*i+a*a+s*s),h?(h=1/h,i*=h,a*=h,s*=h):(i=0,a=0,s=0),o=l*s-d*a,f=d*i-c*s,u=c*a-l*i,h=Math.sqrt(o*o+f*f+u*u),h?(h=1/h,o*=h,f*=h,u*=h):(o=0,f=0,u=0),r[0]=i,r[1]=o,r[2]=c,r[3]=0,r[4]=a,r[5]=f,r[6]=l,r[7]=0,r[8]=s,r[9]=u,r[10]=d,r[11]=0,r[12]=-(i*v+a*_+s*m),r[13]=-(o*v+f*_+u*m),r[14]=-(c*v+l*_+d*m),r[15]=1,r)};R.frob=function(r){return Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)+Math.pow(r[3],2)+Math.pow(r[4],2)+Math.pow(r[5],2)+Math.pow(r[6],2)+Math.pow(r[7],2)+Math.pow(r[8],2)+Math.pow(r[9],2)+Math.pow(r[10],2)+Math.pow(r[11],2)+Math.pow(r[12],2)+Math.pow(r[13],2)+Math.pow(r[14],2)+Math.pow(r[15],2))};var y={};y.create=function(){var r=new hr(3);return r[0]=0,r[1]=0,r[2]=0,r};y.clone=function(r){var t=new hr(3);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t};y.fromValues=function(r,t,e){var n=new hr(3);return n[0]=r,n[1]=t,n[2]=e,n};y.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r};y.set=function(r,t,e,n){return r[0]=t,r[1]=e,r[2]=n,r};y.add=function(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r[2]=t[2]+e[2],r};y.subtract=function(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r};y.sub=y.subtract;y.multiply=function(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r[2]=t[2]*e[2],r};y.mul=y.multiply;y.divide=function(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r[2]=t[2]/e[2],r};y.div=y.divide;y.min=function(r,t,e){return r[0]=Math.min(t[0],e[0]),r[1]=Math.min(t[1],e[1]),r[2]=Math.min(t[2],e[2]),r};y.max=function(r,t,e){return r[0]=Math.max(t[0],e[0]),r[1]=Math.max(t[1],e[1]),r[2]=Math.max(t[2],e[2]),r};y.scale=function(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r[2]=t[2]*e,r};y.scaleAndAdd=function(r,t,e,n){return r[0]=t[0]+e[0]*n,r[1]=t[1]+e[1]*n,r[2]=t[2]+e[2]*n,r};y.distance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1],i=t[2]-r[2];return Math.sqrt(e*e+n*n+i*i)};y.dist=y.distance;y.squaredDistance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1],i=t[2]-r[2];return e*e+n*n+i*i};y.sqrDist=y.squaredDistance;y.length=function(r){var t=r[0],e=r[1],n=r[2];return Math.sqrt(t*t+e*e+n*n)};y.len=y.length;y.squaredLength=function(r){var t=r[0],e=r[1],n=r[2];return t*t+e*e+n*n};y.sqrLen=y.squaredLength;y.negate=function(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r};y.inverse=function(r,t){return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r};y.normalize=function(r,t){var e=t[0],n=t[1],i=t[2],a=e*e+n*n+i*i;return a>0&&(a=1/Math.sqrt(a),r[0]=t[0]*a,r[1]=t[1]*a,r[2]=t[2]*a),r};y.dot=function(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]};y.cross=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=e[0],o=e[1],f=e[2];return r[0]=i*f-a*o,r[1]=a*s-n*f,r[2]=n*o-i*s,r};y.lerp=function(r,t,e,n){var i=t[0],a=t[1],s=t[2];return r[0]=i+n*(e[0]-i),r[1]=a+n*(e[1]-a),r[2]=s+n*(e[2]-s),r};y.random=function(r,t){t=t||1;var e=pt()*2*Math.PI,n=pt()*2-1,i=Math.sqrt(1-n*n)*t;return r[0]=Math.cos(e)*i,r[1]=Math.sin(e)*i,r[2]=n*t,r};y.transformMat4=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=e[3]*n+e[7]*i+e[11]*a+e[15];return s=s||1,r[0]=(e[0]*n+e[4]*i+e[8]*a+e[12])/s,r[1]=(e[1]*n+e[5]*i+e[9]*a+e[13])/s,r[2]=(e[2]*n+e[6]*i+e[10]*a+e[14])/s,r};y.transformMat3=function(r,t,e){var n=t[0],i=t[1],a=t[2];return r[0]=n*e[0]+i*e[3]+a*e[6],r[1]=n*e[1]+i*e[4]+a*e[7],r[2]=n*e[2]+i*e[5]+a*e[8],r};y.transformQuat=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=e[0],o=e[1],f=e[2],u=e[3],c=u*n+o*a-f*i,l=u*i+f*n-s*a,d=u*a+s*i-o*n,h=-s*n-o*i-f*a;return r[0]=c*u+h*-s+l*-f-d*-o,r[1]=l*u+h*-o+d*-s-c*-f,r[2]=d*u+h*-f+c*-o-l*-s,r};y.rotateX=function(r,t,e,n){var i=[],a=[];return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],a[0]=i[0],a[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),a[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),r[0]=a[0]+e[0],r[1]=a[1]+e[1],r[2]=a[2]+e[2],r};y.rotateY=function(r,t,e,n){var i=[],a=[];return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],a[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),a[1]=i[1],a[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),r[0]=a[0]+e[0],r[1]=a[1]+e[1],r[2]=a[2]+e[2],r};y.rotateZ=function(r,t,e,n){var i=[],a=[];return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],a[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),a[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),a[2]=i[2],r[0]=a[0]+e[0],r[1]=a[1]+e[1],r[2]=a[2]+e[2],r};y.forEach=function(){var r=y.create();return function(t,e,n,i,a,s){var o,f;for(e||(e=3),n||(n=0),i?f=Math.min(i*e+n,t.length):f=t.length,o=n;o<f;o+=e)r[0]=t[o],r[1]=t[o+1],r[2]=t[o+2],a(r,r,s),t[o]=r[0],t[o+1]=r[1],t[o+2]=r[2];return t}}();y.angle=function(r,t){var e=y.fromValues(r[0],r[1],r[2]),n=y.fromValues(t[0],t[1],t[2]);y.normalize(e,e),y.normalize(n,n);var i=y.dot(e,n);return i>1?0:Math.acos(i)};H.import(Qn);var rr=R.create,In={};function Sn(r){return r.material}function Na(r,t,e){return t.uniforms[e].value}function Ia(r,t,e,n){return e!==n}function Sa(r){return!0}function Ln(){}var Cn={float:I.FLOAT,byte:I.BYTE,ubyte:I.UNSIGNED_BYTE,short:I.SHORT,ushort:I.UNSIGNED_SHORT};function La(r,t,e){this.availableAttributes=r,this.availableAttributeSymbols=t,this.indicesBuffer=e,this.vao=null}function Ca(r){var t,e;this.bind=function(n){t||(t=Y.createCanvas(),t.width=t.height=1,t.getContext("2d"));var i=n.gl,a=!e;a&&(e=i.createTexture()),i.bindTexture(i.TEXTURE_2D,e),a&&i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t)},this.unbind=function(n){n.gl.bindTexture(n.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var Gr=xr.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=Y.createCanvas());var r=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=r.getContext("webgl",t)||r.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new fa(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(e){throw"Error creating WebGL Context "+e}this._programMgr=new Zn(this),this._placeholderTexture=new Ca},{resize:function(r,t){var e=this.canvas,n=this.devicePixelRatio;r!=null?(e.style&&(e.style.width=r+"px",e.style.height=t+"px"),e.width=r*n,e.height=t*n,this._width=r,this._height=t):(this._width=e.width/n,this._height=e.height/n),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var r=this.viewport;return r.width/r.height},setDevicePixelRatio:function(r){this.devicePixelRatio=r,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(r){return this._glinfo.getExtension(r)},getGLParameter:function(r){return this._glinfo.getParameter(r)},setViewport:function(r,t,e,n,i){if(typeof r=="object"){var a=r;r=a.x,t=a.y,e=a.width,n=a.height,i=a.devicePixelRatio}i=i||this.devicePixelRatio,this.gl.viewport(r*i,t*i,e*i,n*i),this.viewport={x:r,y:t,width:e,height:n,devicePixelRatio:i}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var r=this._clearStack.pop();this.clearColor=r.clearColor,this.clearBit=r.clearBit}},bindSceneRendering:function(r){this._sceneRendering=r},render:function(r,t,e,n){var i=this.gl,a=this.clearColor;if(this.clearBit){i.colorMask(!0,!0,!0,!0),i.depthMask(!0);var s=this.viewport,o=!1,f=s.devicePixelRatio;(s.width!==this._width||s.height!==this._height||f&&f!==this.devicePixelRatio||s.x||s.y)&&(o=!0,i.enable(i.SCISSOR_TEST),i.scissor(s.x*f,s.y*f,s.width*f,s.height*f)),i.clearColor(a[0],a[1],a[2],a[3]),i.clear(this.clearBit),o&&i.disable(i.SCISSOR_TEST)}if(e||r.update(!1),r.updateLights(),t=t||r.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=r.updateRenderList(t,!0);this._sceneRendering=r;var c=u.opaque,l=u.transparent,d=r.material;r.trigger("beforerender",this,r,t,u),n?(this.renderPreZ(c,r,t),i.depthFunc(i.LEQUAL)):i.depthFunc(i.LESS);for(var h=rr(),v=y.create(),_=0;_<l.length;_++){var m=l[_];R.multiplyAffine(h,t.viewMatrix.array,m.worldTransform.array),y.transformMat4(v,m.position.array,h),m.__depth=v[2]}this.renderPass(c,t,{getMaterial:function(p){return d||p.material},sortCompare:this.opaqueSortCompare}),this.renderPass(l,t,{getMaterial:function(p){return d||p.material},sortCompare:this.transparentSortCompare}),r.trigger("afterrender",this,r,t,u),this._sceneRendering=null},getProgram:function(r,t,e){return t=t||r.material,this._programMgr.getProgram(r,t,e)},validateProgram:function(r){if(r.__error){var t=r.__error;if(In[r.__uid__])return;if(In[r.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(r,t,e){var n=e&&e.getMaterial||Sn;t=t||null;for(var i=0;i<r.length;i++){var a=r[i],s=n.call(this,a);if(i>0){var o=r[i-1],f=o.joints?o.joints.length:0,u=a.joints?a.joints.length:0;if(u===f&&a.material===o.material&&a.lightGroup===o.lightGroup){a.__program=o.__program;continue}}var c=this._programMgr.getProgram(a,s,t);this.validateProgram(c),a.__program=c}},renderPass:function(r,t,e){this.trigger("beforerenderpass",this,r,t,e),e=e||{},e.getMaterial=e.getMaterial||Sn,e.getUniform=e.getUniform||Na,e.isMaterialChanged=e.isMaterialChanged||Ia,e.beforeRender=e.beforeRender||Ln,e.afterRender=e.afterRender||Ln;var n=e.ifRender||Sa;this.updatePrograms(r,this._sceneRendering,e),e.sortCompare&&r.sort(e.sortCompare);var i=this.viewport,a=i.devicePixelRatio,s=[i.x*a,i.y*a,i.width*a,i.height*a],o=this.devicePixelRatio,f=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*o,this._height*o],u=[s[2],s[3]],c=Date.now();t?(R.copy($.VIEW,t.viewMatrix.array),R.copy($.PROJECTION,t.projectionMatrix.array),R.copy($.VIEWINVERSE,t.worldTransform.array)):(R.identity($.VIEW),R.identity($.PROJECTION),R.identity($.VIEWINVERSE)),R.multiply($.VIEWPROJECTION,$.PROJECTION,$.VIEW),R.invert($.PROJECTIONINVERSE,$.PROJECTION),R.invert($.VIEWPROJECTIONINVERSE,$.VIEWPROJECTION);for(var l=this.gl,d=this._sceneRendering,h,v,_,m,p,T,g,E,S,N,D,w,O=null,U=0;U<r.length;U++){var b=r[U],k=b.worldTransform!=null,X;if(n(b)){k&&(X=b.isSkinnedMesh&&b.isSkinnedMesh()?b.offsetMatrix?b.offsetMatrix.array:$.IDENTITY:b.worldTransform.array);var F=b.geometry,Q=e.getMaterial.call(this,b),q=b.__program,tr=Q.shader,At=F.__uid__+"-"+q.__uid__,Gt=At!==N;N=At,k&&(R.copy($.WORLD,X),R.multiply($.WORLDVIEWPROJECTION,$.VIEWPROJECTION,X),R.multiplyAffine($.WORLDVIEW,$.VIEW,X),(tr.matrixSemantics.WORLDINVERSE||tr.matrixSemantics.WORLDINVERSETRANSPOSE)&&R.invert($.WORLDINVERSE,X),(tr.matrixSemantics.WORLDVIEWINVERSE||tr.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&R.invert($.WORLDVIEWINVERSE,$.WORLDVIEW),(tr.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||tr.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&R.invert($.WORLDVIEWPROJECTIONINVERSE,$.WORLDVIEWPROJECTION)),b.beforeRender&&b.beforeRender(this),e.beforeRender.call(this,b,Q,h);var Rt=q!==v;Rt?(q.bind(this),q.setUniformOfSemantic(l,"VIEWPORT",s),q.setUniformOfSemantic(l,"WINDOW_SIZE",f),t&&(q.setUniformOfSemantic(l,"NEAR",t.near),q.setUniformOfSemantic(l,"FAR",t.far)),q.setUniformOfSemantic(l,"DEVICEPIXELRATIO",a),q.setUniformOfSemantic(l,"TIME",c),q.setUniformOfSemantic(l,"VIEWPORT_SIZE",u),d&&d.setLightUniforms(q,b.lightGroup,this)):q=v,(Rt||e.isMaterialChanged(b,_,Q,h))&&(Q.depthTest!==m&&(Q.depthTest?l.enable(l.DEPTH_TEST):l.disable(l.DEPTH_TEST),m=Q.depthTest),Q.depthMask!==p&&(l.depthMask(Q.depthMask),p=Q.depthMask),Q.transparent!==S&&(Q.transparent?l.enable(l.BLEND):l.disable(l.BLEND),S=Q.transparent),Q.transparent&&(Q.blend?Q.blend(l):(l.blendEquationSeparate(l.FUNC_ADD,l.FUNC_ADD),l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA))),w=this._bindMaterial(b,Q,q,_||null,h||null,v||null,e.getUniform),h=Q);var zr=tr.matrixSemanticKeys;if(k)for(var Vr=0;Vr<zr.length;Vr++){var Yr=zr[Vr],Pr=tr.matrixSemantics[Yr],Dr=$[Yr];if(Pr.isTranspose){var Cr=$[Pr.semanticNoTranspose];R.transpose(Dr,Cr)}q.setUniform(l,Pr.type,Pr.symbol,Dr)}b.cullFace!==g&&(g=b.cullFace,l.cullFace(g)),b.frontFace!==E&&(E=b.frontFace,l.frontFace(E)),b.culling!==T&&(T=b.culling,T?l.enable(l.CULL_FACE):l.disable(l.CULL_FACE)),this._updateSkeleton(b,q,w),Gt&&(D=this._bindVAO(O,tr,F,q)),this._renderObject(b,D,q),e.afterRender(this,b),b.afterRender&&b.afterRender(this),v=q,_=b}}this.trigger("afterrenderpass",this,r,t,e)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(r,t,e){var n=this.gl,i=r.skeleton;if(i)if(i.update(),r.joints.length>this.getMaxJointNumber()){var a=i.getSubSkinMatricesTexture(r.__uid__,r.joints);t.useTextureSlot(this,a,e),t.setUniform(n,"1i","skinMatricesTexture",e),t.setUniform(n,"1f","skinMatricesTextureSize",a.width)}else{var s=i.getSubSkinMatrices(r.__uid__,r.joints);t.setUniformOfSemantic(n,"SKIN_MATRIX",s)}},_renderObject:function(r,t,e){var n=this.gl,i=r.geometry,a=r.mode;a==null&&(a=4);var s=null,o=r.isInstancedMesh&&r.isInstancedMesh();if(o&&(s=this.getGLExtension("ANGLE_instanced_arrays"),!s)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var f;if(o&&(f=this._bindInstancedAttributes(r,e,s)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),c=u&&i.indices instanceof Uint32Array,l=c?n.UNSIGNED_INT:n.UNSIGNED_SHORT;o?s.drawElementsInstancedANGLE(a,t.indicesBuffer.count,l,0,r.getInstanceCount()):n.drawElements(a,t.indicesBuffer.count,l,0)}else o?s.drawArraysInstancedANGLE(a,0,i.vertexCount,r.getInstanceCount()):n.drawArrays(a,0,i.vertexCount);if(o)for(var d=0;d<f.length;d++)n.disableVertexAttribArray(f[d])},_bindInstancedAttributes:function(r,t,e){for(var n=this.gl,i=r.getInstancedAttributesBuffers(this),a=[],s=0;s<i.length;s++){var o=i[s],f=t.getAttribLocation(n,o.symbol);if(!(f<0)){var u=Cn[o.type]||n.FLOAT;n.enableVertexAttribArray(f),n.bindBuffer(n.ARRAY_BUFFER,o.buffer),n.vertexAttribPointer(f,o.size,u,!1,0,0),e.vertexAttribDivisorANGLE(f,o.divisor),a.push(f)}}return a},_bindMaterial:function(r,t,e,n,i,a,s){for(var o=this.gl,f=a===e,u=e.currentTextureSlot(),c=t.getEnabledUniforms(),l=t.getTextureUniforms(),d=this._placeholderTexture,h=0;h<l.length;h++){var v=l[h],_=s(r,t,v),m=t.uniforms[v].type;if(m==="t"&&_)_.__slot=-1;else if(m==="tv")for(var p=0;p<_.length;p++)_[p]&&(_[p].__slot=-1)}d.__slot=-1;for(var h=0;h<c.length;h++){var v=c[h],T=t.uniforms[v],_=s(r,t,v),m=T.type,g=m==="t";if(g&&(!_||!_.isRenderable())&&(_=d),i&&f){var E=s(n,i,v);if(g&&(!E||!E.isRenderable())&&(E=d),E===_){if(g)e.takeCurrentTextureSlot(this,null);else if(m==="tv"&&_)for(var p=0;p<_.length;p++)e.takeCurrentTextureSlot(this,null);continue}}if(_!=null)if(g)if(_.__slot<0){var S=e.currentTextureSlot(),N=e.setUniform(o,"1i",v,S);N&&(e.takeCurrentTextureSlot(this,_),_.__slot=S)}else e.setUniform(o,"1i",v,_.__slot);else if(Array.isArray(_)){if(_.length===0)continue;if(m==="tv"){if(!e.hasUniform(v))continue;for(var D=[],p=0;p<_.length;p++){var w=_[p];if(w.__slot<0){var S=e.currentTextureSlot();D.push(S),e.takeCurrentTextureSlot(this,w),w.__slot=S}else D.push(w.__slot)}e.setUniform(o,"1iv",v,D)}else e.setUniform(o,T.type,v,_)}else e.setUniform(o,T.type,v,_)}var O=e.currentTextureSlot();return e.resetTextureSlot(u),O},_bindVAO:function(r,t,e,n){var i=!e.dynamic,a=this.gl,s=this.__uid__+"-"+n.__uid__,o=e.__vaoCache[s];if(!o){var f=e.getBufferChunks(this);if(!f||!f.length)return;for(var u=f[0],c=u.attributeBuffers,E=u.indicesBuffer,g=[],l=[],d=0;d<c.length;d++){var h=c[d],v=h.name,_=h.semantic,m;if(_){var p=t.attributeSemantics[_];m=p&&p.symbol}else m=v;m&&n.attributes[m]&&(g.push(h),l.push(m))}o=new La(g,l,E),i&&(e.__vaoCache[s]=o)}var T=!0;r&&i&&(o.vao==null?o.vao=r.createVertexArrayOES():T=!1,r.bindVertexArrayOES(o.vao));var g=o.availableAttributes,E=o.indicesBuffer;if(T){for(var S=n.enableAttributes(this,o.availableAttributeSymbols,r&&i&&o),d=0;d<g.length;d++){var N=S[d];if(N!==-1){var h=g[d],D=h.buffer,w=h.size,O=Cn[h.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,D),a.vertexAttribPointer(N,w,O,!1,0,0)}}e.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,E.buffer)}return o},renderPreZ:function(r,t,e){var n=this.gl,i=this._prezMaterial||new st({shader:new H(H.source("clay.prez.vertex"),H.source("clay.prez.fragment"))});this._prezMaterial=i,n.colorMask(!1,!1,!1,!1),n.depthMask(!0),this.renderPass(r,e,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,s){var o=a.material,f=s.material;return o.get("diffuseMap")!==f.get("diffuseMap")||(o.get("alphaCutoff")||0)!==(f.get("alphaCutoff")||0)},getUniform:function(a,s,o){if(o==="alphaMap")return a.material.get("diffuseMap");if(o==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var f=a.material.get("alphaCutoff");return f||0}return 0}else return o==="uvRepeat"?a.material.get("uvRepeat"):o==="uvOffset"?a.material.get("uvOffset"):s.get(o)},getMaterial:function(){return i},sort:this.opaqueSortCompare}),n.colorMask(!0,!0,!0,!0),n.depthMask(!0)},disposeScene:function(r){this.disposeNode(r,!0,!0),r.dispose()},disposeNode:function(r,t,e){r.getParent()&&r.getParent().remove(r);var n={};r.traverse(function(i){var a=i.material;if(i.geometry&&t&&i.geometry.dispose(this),e&&a&&!n[a.__uid__]){for(var s=a.getTextureUniforms(),o=0;o<s.length;o++){var f=s[o],u=a.uniforms[f].value,c=a.uniforms[f].type;if(u){if(c==="t")u.dispose&&u.dispose(this);else if(c==="tv")for(var l=0;l<u.length;l++)u[l]&&u[l].dispose&&u[l].dispose(this)}}n[a.__uid__]=!0}i.dispose&&i.dispose(this)},this)},disposeGeometry:function(r){r.dispose(this)},disposeTexture:function(r){r.dispose(this)},disposeFrameBuffer:function(r){r.dispose(this)},dispose:function(){},screenToNDC:function(r,t,e){e||(e=new V),t=this._height-t;var n=this.viewport,i=e.array;return i[0]=(r-n.x)/n.width,i[0]=i[0]*2-1,i[1]=(t-n.y)/n.height,i[1]=i[1]*2-1,e}});Gr.opaqueSortCompare=Gr.prototype.opaqueSortCompare=function(r,t){return r.renderOrder===t.renderOrder?r.__program===t.__program?r.material===t.material?r.geometry.__uid__-t.geometry.__uid__:r.material.__uid__-t.material.__uid__:r.__program&&t.__program?r.__program.__uid__-t.__program.__uid__:0:r.renderOrder-t.renderOrder};Gr.transparentSortCompare=Gr.prototype.transparentSortCompare=function(r,t){return r.renderOrder===t.renderOrder?r.__depth===t.__depth?r.__program===t.__program?r.material===t.material?r.geometry.__uid__-t.geometry.__uid__:r.material.__uid__-t.material.__uid__:r.__program&&t.__program?r.__program.__uid__-t.__program.__uid__:0:r.__depth-t.__depth:r.renderOrder-t.renderOrder};var $={IDENTITY:rr(),WORLD:rr(),VIEW:rr(),PROJECTION:rr(),WORLDVIEW:rr(),VIEWPROJECTION:rr(),WORLDVIEWPROJECTION:rr(),WORLDINVERSE:rr(),VIEWINVERSE:rr(),PROJECTIONINVERSE:rr(),WORLDVIEWINVERSE:rr(),VIEWPROJECTIONINVERSE:rr(),WORLDVIEWPROJECTIONINVERSE:rr(),WORLDTRANSPOSE:rr(),VIEWTRANSPOSE:rr(),PROJECTIONTRANSPOSE:rr(),WORLDVIEWTRANSPOSE:rr(),VIEWPROJECTIONTRANSPOSE:rr(),WORLDVIEWPROJECTIONTRANSPOSE:rr(),WORLDINVERSETRANSPOSE:rr(),VIEWINVERSETRANSPOSE:rr(),PROJECTIONINVERSETRANSPOSE:rr(),WORLDVIEWINVERSETRANSPOSE:rr(),VIEWPROJECTIONINVERSETRANSPOSE:rr(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:rr()};Gr.COLOR_BUFFER_BIT=I.COLOR_BUFFER_BIT;Gr.DEPTH_BUFFER_BIT=I.DEPTH_BUFFER_BIT;Gr.STENCIL_BUFFER_BIT=I.STENCIL_BUFFER_BIT;var A=function(r,t,e){r=r||0,t=t||0,e=e||0,this.array=y.fromValues(r,t,e),this._dirty=!0};A.prototype={constructor:A,add:function(r){return y.add(this.array,this.array,r.array),this._dirty=!0,this},set:function(r,t,e){return this.array[0]=r,this.array[1]=t,this.array[2]=e,this._dirty=!0,this},setArray:function(r){return this.array[0]=r[0],this.array[1]=r[1],this.array[2]=r[2],this._dirty=!0,this},clone:function(){return new A(this.x,this.y,this.z)},copy:function(r){return y.copy(this.array,r.array),this._dirty=!0,this},cross:function(r,t){return y.cross(this.array,r.array,t.array),this._dirty=!0,this},dist:function(r){return y.dist(this.array,r.array)},distance:function(r){return y.distance(this.array,r.array)},div:function(r){return y.div(this.array,this.array,r.array),this._dirty=!0,this},divide:function(r){return y.divide(this.array,this.array,r.array),this._dirty=!0,this},dot:function(r){return y.dot(this.array,r.array)},len:function(){return y.len(this.array)},length:function(){return y.length(this.array)},lerp:function(r,t,e){return y.lerp(this.array,r.array,t.array,e),this._dirty=!0,this},min:function(r){return y.min(this.array,this.array,r.array),this._dirty=!0,this},max:function(r){return y.max(this.array,this.array,r.array),this._dirty=!0,this},mul:function(r){return y.mul(this.array,this.array,r.array),this._dirty=!0,this},multiply:function(r){return y.multiply(this.array,this.array,r.array),this._dirty=!0,this},negate:function(){return y.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return y.normalize(this.array,this.array),this._dirty=!0,this},random:function(r){return y.random(this.array,r),this._dirty=!0,this},scale:function(r){return y.scale(this.array,this.array,r),this._dirty=!0,this},scaleAndAdd:function(r,t){return y.scaleAndAdd(this.array,this.array,r.array,t),this._dirty=!0,this},sqrDist:function(r){return y.sqrDist(this.array,r.array)},squaredDistance:function(r){return y.squaredDistance(this.array,r.array)},sqrLen:function(){return y.sqrLen(this.array)},squaredLength:function(){return y.squaredLength(this.array)},sub:function(r){return y.sub(this.array,this.array,r.array),this._dirty=!0,this},subtract:function(r){return y.subtract(this.array,this.array,r.array),this._dirty=!0,this},transformMat3:function(r){return y.transformMat3(this.array,this.array,r.array),this._dirty=!0,this},transformMat4:function(r){return y.transformMat4(this.array,this.array,r.array),this._dirty=!0,this},transformQuat:function(r){return y.transformQuat(this.array,this.array,r.array),this._dirty=!0,this},applyProjection:function(r){var t=this.array;if(r=r.array,r[15]===0){var e=-1/t[2];t[0]=r[0]*t[0]*e,t[1]=r[5]*t[1]*e,t[2]=(r[10]*t[2]+r[14])*e}else t[0]=r[0]*t[0]+r[12],t[1]=r[5]*t[1]+r[13],t[2]=r[10]*t[2]+r[14];return this._dirty=!0,this},eulerFromQuat:function(r,t){A.eulerFromQuat(this,r,t)},eulerFromMat3:function(r,t){A.eulerFromMat3(this,r,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var zt=Object.defineProperty;if(zt){var Te=A.prototype;zt(Te,"x",{get:function(){return this.array[0]},set:function(r){this.array[0]=r,this._dirty=!0}}),zt(Te,"y",{get:function(){return this.array[1]},set:function(r){this.array[1]=r,this._dirty=!0}}),zt(Te,"z",{get:function(){return this.array[2]},set:function(r){this.array[2]=r,this._dirty=!0}})}A.add=function(r,t,e){return y.add(r.array,t.array,e.array),r._dirty=!0,r};A.set=function(r,t,e,n){y.set(r.array,t,e,n),r._dirty=!0};A.copy=function(r,t){return y.copy(r.array,t.array),r._dirty=!0,r};A.cross=function(r,t,e){return y.cross(r.array,t.array,e.array),r._dirty=!0,r};A.dist=function(r,t){return y.distance(r.array,t.array)};A.distance=A.dist;A.div=function(r,t,e){return y.divide(r.array,t.array,e.array),r._dirty=!0,r};A.divide=A.div;A.dot=function(r,t){return y.dot(r.array,t.array)};A.len=function(r){return y.length(r.array)};A.lerp=function(r,t,e,n){return y.lerp(r.array,t.array,e.array,n),r._dirty=!0,r};A.min=function(r,t,e){return y.min(r.array,t.array,e.array),r._dirty=!0,r};A.max=function(r,t,e){return y.max(r.array,t.array,e.array),r._dirty=!0,r};A.mul=function(r,t,e){return y.multiply(r.array,t.array,e.array),r._dirty=!0,r};A.multiply=A.mul;A.negate=function(r,t){return y.negate(r.array,t.array),r._dirty=!0,r};A.normalize=function(r,t){return y.normalize(r.array,t.array),r._dirty=!0,r};A.random=function(r,t){return y.random(r.array,t),r._dirty=!0,r};A.scale=function(r,t,e){return y.scale(r.array,t.array,e),r._dirty=!0,r};A.scaleAndAdd=function(r,t,e,n){return y.scaleAndAdd(r.array,t.array,e.array,n),r._dirty=!0,r};A.sqrDist=function(r,t){return y.sqrDist(r.array,t.array)};A.squaredDistance=A.sqrDist;A.sqrLen=function(r){return y.sqrLen(r.array)};A.squaredLength=A.sqrLen;A.sub=function(r,t,e){return y.subtract(r.array,t.array,e.array),r._dirty=!0,r};A.subtract=A.sub;A.transformMat3=function(r,t,e){return y.transformMat3(r.array,t.array,e.array),r._dirty=!0,r};A.transformMat4=function(r,t,e){return y.transformMat4(r.array,t.array,e.array),r._dirty=!0,r};A.transformQuat=function(r,t,e){return y.transformQuat(r.array,t.array,e.array),r._dirty=!0,r};function Ar(r,t,e){return r<t?t:r>e?e:r}var K=Math.atan2,Rr=Math.asin,ht=Math.abs;A.eulerFromQuat=function(r,t,d){r._dirty=!0,t=t.array;var n=r.array,i=t[0],a=t[1],s=t[2],o=t[3],f=i*i,u=a*a,c=s*s,l=o*o,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":n[0]=K(2*(i*o-a*s),l-f-u+c),n[1]=Rr(Ar(2*(i*s+a*o),-1,1)),n[2]=K(2*(s*o-i*a),l+f-u-c);break;case"YXZ":n[0]=Rr(Ar(2*(i*o-a*s),-1,1)),n[1]=K(2*(i*s+a*o),l-f-u+c),n[2]=K(2*(i*a+s*o),l-f+u-c);break;case"ZXY":n[0]=Rr(Ar(2*(i*o+a*s),-1,1)),n[1]=K(2*(a*o-s*i),l-f-u+c),n[2]=K(2*(s*o-i*a),l-f+u-c);break;case"ZYX":n[0]=K(2*(i*o+s*a),l-f-u+c),n[1]=Rr(Ar(2*(a*o-i*s),-1,1)),n[2]=K(2*(i*a+s*o),l+f-u-c);break;case"YZX":n[0]=K(2*(i*o-s*a),l-f+u-c),n[1]=K(2*(a*o-i*s),l+f-u-c),n[2]=Rr(Ar(2*(i*a+s*o),-1,1));break;case"XZY":n[0]=K(2*(i*o+a*s),l-f+u-c),n[1]=K(2*(i*s+a*o),l+f-u-c),n[2]=Rr(Ar(2*(s*o-i*a),-1,1));break;default:console.warn("Unkown order: "+d)}return r};A.eulerFromMat3=function(r,t,v){var n=t.array,i=n[0],a=n[3],s=n[6],o=n[1],f=n[4],u=n[7],c=n[2],l=n[5],d=n[8],h=r.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":h[1]=Rr(Ar(s,-1,1)),ht(s)<.99999?(h[0]=K(-u,d),h[2]=K(-a,i)):(h[0]=K(l,f),h[2]=0);break;case"YXZ":h[0]=Rr(-Ar(u,-1,1)),ht(u)<.99999?(h[1]=K(s,d),h[2]=K(o,f)):(h[1]=K(-c,i),h[2]=0);break;case"ZXY":h[0]=Rr(Ar(l,-1,1)),ht(l)<.99999?(h[1]=K(-c,d),h[2]=K(-a,f)):(h[1]=0,h[2]=K(o,i));break;case"ZYX":h[1]=Rr(-Ar(c,-1,1)),ht(c)<.99999?(h[0]=K(l,d),h[2]=K(o,i)):(h[0]=0,h[2]=K(-a,f));break;case"YZX":h[2]=Rr(Ar(o,-1,1)),ht(o)<.99999?(h[0]=K(-u,f),h[1]=K(-c,i)):(h[0]=0,h[1]=K(s,d));break;case"XZY":h[2]=Rr(-Ar(a,-1,1)),ht(a)<.99999?(h[0]=K(l,f),h[1]=K(s,i)):(h[0]=K(-u,d),h[1]=0);break;default:console.warn("Unkown order: "+v)}return r._dirty=!0,r};Object.defineProperties(A,{POSITIVE_X:{get:function(){return new A(1,0,0)}},NEGATIVE_X:{get:function(){return new A(-1,0,0)}},POSITIVE_Y:{get:function(){return new A(0,1,0)}},NEGATIVE_Y:{get:function(){return new A(0,-1,0)}},POSITIVE_Z:{get:function(){return new A(0,0,1)}},NEGATIVE_Z:{get:function(){return new A(0,0,-1)}},UP:{get:function(){return new A(0,1,0)}},ZERO:{get:function(){return new A}}});var wa=1e-5,nt=function(r,t){this.origin=r||new A,this.direction=t||new A};nt.prototype={constructor:nt,intersectPlane:function(r,t){var e=r.normal.array,n=r.distance,i=this.origin.array,a=this.direction.array,s=y.dot(e,a);if(s===0)return null;t||(t=new A);var o=(y.dot(e,i)-n)/s;return y.scaleAndAdd(t.array,i,a,-o),t._dirty=!0,t},mirrorAgainstPlane:function(r){var t=y.dot(r.normal.array,this.direction.array);y.scaleAndAdd(this.direction.array,this.direction.array,r.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var r=y.create();return function(t){y.sub(r,t,this.origin.array);var e=y.dot(r,this.direction.array);if(e<0)return y.distance(this.origin.array,t);var n=y.lenSquared(r);return Math.sqrt(n-e*e)}}(),intersectSphere:function(){var r=y.create();return function(t,e,n){var i=this.origin.array,a=this.direction.array;t=t.array,y.sub(r,t,i);var s=y.dot(r,a),o=y.squaredLength(r),f=o-s*s,u=e*e;if(!(f>u)){var c=Math.sqrt(u-f),l=s-c,d=s+c;return n||(n=new A),l<0?d<0?null:(y.scaleAndAdd(n.array,i,a,d),n):(y.scaleAndAdd(n.array,i,a,l),n)}}}(),intersectBoundingBox:function(r,t){var e=this.direction.array,n=this.origin.array,i=r.min.array,a=r.max.array,s=1/e[0],o=1/e[1],f=1/e[2],u,c,l,d,h,v;if(s>=0?(u=(i[0]-n[0])*s,c=(a[0]-n[0])*s):(c=(i[0]-n[0])*s,u=(a[0]-n[0])*s),o>=0?(l=(i[1]-n[1])*o,d=(a[1]-n[1])*o):(d=(i[1]-n[1])*o,l=(a[1]-n[1])*o),u>d||l>c||((l>u||u!==u)&&(u=l),(d<c||c!==c)&&(c=d),f>=0?(h=(i[2]-n[2])*f,v=(a[2]-n[2])*f):(v=(i[2]-n[2])*f,h=(a[2]-n[2])*f),u>v||h>c)||((h>u||u!==u)&&(u=h),(v<c||c!==c)&&(c=v),c<0))return null;var _=u>=0?u:c;return t||(t=new A),y.scaleAndAdd(t.array,n,e,_),t},intersectTriangle:function(){var r=y.create(),t=y.create(),e=y.create(),n=y.create();return function(i,a,s,o,f,u){var c=this.direction.array,l=this.origin.array;i=i.array,a=a.array,s=s.array,y.sub(r,a,i),y.sub(t,s,i),y.cross(n,t,c);var d=y.dot(r,n);if(o){if(d>-1e-5)return null}else if(d>-1e-5&&d<wa)return null;y.sub(e,l,i);var h=y.dot(n,e)/d;if(h<0||h>1)return null;y.cross(n,r,e);var v=y.dot(c,n)/d;if(v<0||v>1||h+v>1)return null;y.cross(n,r,t);var _=-y.dot(e,n)/d;return _<0?null:(f||(f=new A),u&&A.set(u,1-h-v,h,v),y.scaleAndAdd(f.array,l,c,_),f)}}(),applyTransform:function(r){A.add(this.direction,this.direction,this.origin),A.transformMat4(this.origin,this.origin,r),A.transformMat4(this.direction,this.direction,r),A.sub(this.direction,this.direction,this.origin),A.normalize(this.direction,this.direction)},copy:function(r){A.copy(this.origin,r.origin),A.copy(this.direction,r.direction)},clone:function(){var r=new nt;return r.copy(this),r}};var x={};x.create=function(){var r=new hr(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=0,r};x.clone=function(r){var t=new hr(4);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t};x.fromValues=function(r,t,e,n){var i=new hr(4);return i[0]=r,i[1]=t,i[2]=e,i[3]=n,i};x.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r};x.set=function(r,t,e,n,i){return r[0]=t,r[1]=e,r[2]=n,r[3]=i,r};x.add=function(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r[2]=t[2]+e[2],r[3]=t[3]+e[3],r};x.subtract=function(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r[3]=t[3]-e[3],r};x.sub=x.subtract;x.multiply=function(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r[2]=t[2]*e[2],r[3]=t[3]*e[3],r};x.mul=x.multiply;x.divide=function(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r[2]=t[2]/e[2],r[3]=t[3]/e[3],r};x.div=x.divide;x.min=function(r,t,e){return r[0]=Math.min(t[0],e[0]),r[1]=Math.min(t[1],e[1]),r[2]=Math.min(t[2],e[2]),r[3]=Math.min(t[3],e[3]),r};x.max=function(r,t,e){return r[0]=Math.max(t[0],e[0]),r[1]=Math.max(t[1],e[1]),r[2]=Math.max(t[2],e[2]),r[3]=Math.max(t[3],e[3]),r};x.scale=function(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r[2]=t[2]*e,r[3]=t[3]*e,r};x.scaleAndAdd=function(r,t,e,n){return r[0]=t[0]+e[0]*n,r[1]=t[1]+e[1]*n,r[2]=t[2]+e[2]*n,r[3]=t[3]+e[3]*n,r};x.distance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1],i=t[2]-r[2],a=t[3]-r[3];return Math.sqrt(e*e+n*n+i*i+a*a)};x.dist=x.distance;x.squaredDistance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1],i=t[2]-r[2],a=t[3]-r[3];return e*e+n*n+i*i+a*a};x.sqrDist=x.squaredDistance;x.length=function(r){var t=r[0],e=r[1],n=r[2],i=r[3];return Math.sqrt(t*t+e*e+n*n+i*i)};x.len=x.length;x.squaredLength=function(r){var t=r[0],e=r[1],n=r[2],i=r[3];return t*t+e*e+n*n+i*i};x.sqrLen=x.squaredLength;x.negate=function(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r};x.inverse=function(r,t){return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r[3]=1/t[3],r};x.normalize=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e*e+n*n+i*i+a*a;return s>0&&(s=1/Math.sqrt(s),r[0]=t[0]*s,r[1]=t[1]*s,r[2]=t[2]*s,r[3]=t[3]*s),r};x.dot=function(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3]};x.lerp=function(r,t,e,n){var i=t[0],a=t[1],s=t[2],o=t[3];return r[0]=i+n*(e[0]-i),r[1]=a+n*(e[1]-a),r[2]=s+n*(e[2]-s),r[3]=o+n*(e[3]-o),r};x.random=function(r,t){return t=t||1,r[0]=pt(),r[1]=pt(),r[2]=pt(),r[3]=pt(),x.normalize(r,r),x.scale(r,r,t),r};x.transformMat4=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3];return r[0]=e[0]*n+e[4]*i+e[8]*a+e[12]*s,r[1]=e[1]*n+e[5]*i+e[9]*a+e[13]*s,r[2]=e[2]*n+e[6]*i+e[10]*a+e[14]*s,r[3]=e[3]*n+e[7]*i+e[11]*a+e[15]*s,r};x.transformQuat=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=e[0],o=e[1],f=e[2],u=e[3],c=u*n+o*a-f*i,l=u*i+f*n-s*a,d=u*a+s*i-o*n,h=-s*n-o*i-f*a;return r[0]=c*u+h*-s+l*-f-d*-o,r[1]=l*u+h*-o+d*-s-c*-f,r[2]=d*u+h*-f+c*-o-l*-s,r};x.forEach=function(){var r=x.create();return function(t,e,n,i,a,s){var o,f;for(e||(e=4),n||(n=0),i?f=Math.min(i*e+n,t.length):f=t.length,o=n;o<f;o+=e)r[0]=t[o],r[1]=t[o+1],r[2]=t[o+2],r[3]=t[o+3],a(r,r,s),t[o]=r[0],t[o+1]=r[1],t[o+2]=r[2],t[o+3]=r[3];return t}}();var B={};B.create=function(){var r=new hr(9);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r};B.fromMat4=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[4],r[4]=t[5],r[5]=t[6],r[6]=t[8],r[7]=t[9],r[8]=t[10],r};B.clone=function(r){var t=new hr(9);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t};B.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r};B.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r};B.transpose=function(r,t){if(r===t){var e=t[1],n=t[2],i=t[5];r[1]=t[3],r[2]=t[6],r[3]=e,r[5]=t[7],r[6]=n,r[7]=i}else r[0]=t[0],r[1]=t[3],r[2]=t[6],r[3]=t[1],r[4]=t[4],r[5]=t[7],r[6]=t[2],r[7]=t[5],r[8]=t[8];return r};B.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],f=t[6],u=t[7],c=t[8],l=c*s-o*u,d=-c*a+o*f,h=u*a-s*f,v=e*l+n*d+i*h;return v?(v=1/v,r[0]=l*v,r[1]=(-c*n+i*u)*v,r[2]=(o*n-i*s)*v,r[3]=d*v,r[4]=(c*e-i*f)*v,r[5]=(-o*e+i*a)*v,r[6]=h*v,r[7]=(-u*e+n*f)*v,r[8]=(s*e-n*a)*v,r):null};B.adjoint=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],f=t[6],u=t[7],c=t[8];return r[0]=s*c-o*u,r[1]=i*u-n*c,r[2]=n*o-i*s,r[3]=o*f-a*c,r[4]=e*c-i*f,r[5]=i*a-e*o,r[6]=a*u-s*f,r[7]=n*f-e*u,r[8]=e*s-n*a,r};B.determinant=function(r){var t=r[0],e=r[1],n=r[2],i=r[3],a=r[4],s=r[5],o=r[6],f=r[7],u=r[8];return t*(u*a-s*f)+e*(-u*i+s*o)+n*(f*i-a*o)};B.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],f=t[5],u=t[6],c=t[7],l=t[8],d=e[0],h=e[1],v=e[2],_=e[3],m=e[4],p=e[5],T=e[6],g=e[7],E=e[8];return r[0]=d*n+h*s+v*u,r[1]=d*i+h*o+v*c,r[2]=d*a+h*f+v*l,r[3]=_*n+m*s+p*u,r[4]=_*i+m*o+p*c,r[5]=_*a+m*f+p*l,r[6]=T*n+g*s+E*u,r[7]=T*i+g*o+E*c,r[8]=T*a+g*f+E*l,r};B.mul=B.multiply;B.translate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],f=t[5],u=t[6],c=t[7],l=t[8],d=e[0],h=e[1];return r[0]=n,r[1]=i,r[2]=a,r[3]=s,r[4]=o,r[5]=f,r[6]=d*n+h*s+u,r[7]=d*i+h*o+c,r[8]=d*a+h*f+l,r};B.rotate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],f=t[5],u=t[6],c=t[7],l=t[8],d=Math.sin(e),h=Math.cos(e);return r[0]=h*n+d*s,r[1]=h*i+d*o,r[2]=h*a+d*f,r[3]=h*s-d*n,r[4]=h*o-d*i,r[5]=h*f-d*a,r[6]=u,r[7]=c,r[8]=l,r};B.scale=function(r,t,e){var n=e[0],i=e[1];return r[0]=n*t[0],r[1]=n*t[1],r[2]=n*t[2],r[3]=i*t[3],r[4]=i*t[4],r[5]=i*t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r};B.fromMat2d=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=0,r[3]=t[2],r[4]=t[3],r[5]=0,r[6]=t[4],r[7]=t[5],r[8]=1,r};B.fromQuat=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e+e,o=n+n,f=i+i,u=e*s,c=n*s,l=n*o,d=i*s,h=i*o,v=i*f,_=a*s,m=a*o,p=a*f;return r[0]=1-l-v,r[3]=c-p,r[6]=d+m,r[1]=c+p,r[4]=1-u-v,r[7]=h-_,r[2]=d-m,r[5]=h+_,r[8]=1-u-l,r};B.normalFromMat4=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],f=t[6],u=t[7],c=t[8],l=t[9],d=t[10],h=t[11],v=t[12],_=t[13],m=t[14],p=t[15],T=e*o-n*s,g=e*f-i*s,E=e*u-a*s,S=n*f-i*o,N=n*u-a*o,D=i*u-a*f,w=c*_-l*v,O=c*m-d*v,U=c*p-h*v,b=l*m-d*_,k=l*p-h*_,X=d*p-h*m,F=T*X-g*k+E*b+S*U-N*O+D*w;return F?(F=1/F,r[0]=(o*X-f*k+u*b)*F,r[1]=(f*U-s*X-u*O)*F,r[2]=(s*k-o*U+u*w)*F,r[3]=(i*k-n*X-a*b)*F,r[4]=(e*X-i*U+a*O)*F,r[5]=(n*U-e*k-a*w)*F,r[6]=(_*D-m*N+p*S)*F,r[7]=(m*E-v*D-p*g)*F,r[8]=(v*N-_*E+p*T)*F,r):null};B.frob=function(r){return Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)+Math.pow(r[3],2)+Math.pow(r[4],2)+Math.pow(r[5],2)+Math.pow(r[6],2)+Math.pow(r[7],2)+Math.pow(r[8],2))};var L={};L.create=function(){var r=new hr(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r};L.rotationTo=function(){var r=y.create(),t=y.fromValues(1,0,0),e=y.fromValues(0,1,0);return function(n,i,a){var s=y.dot(i,a);return s<-.999999?(y.cross(r,t,i),y.length(r)<1e-6&&y.cross(r,e,i),y.normalize(r,r),L.setAxisAngle(n,r,Math.PI),n):s>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(y.cross(r,i,a),n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=1+s,L.normalize(n,n))}}();L.setAxes=function(){var r=B.create();return function(t,e,n,i){return r[0]=n[0],r[3]=n[1],r[6]=n[2],r[1]=i[0],r[4]=i[1],r[7]=i[2],r[2]=-e[0],r[5]=-e[1],r[8]=-e[2],L.normalize(t,L.fromMat3(t,r))}}();L.clone=x.clone;L.fromValues=x.fromValues;L.copy=x.copy;L.set=x.set;L.identity=function(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r};L.setAxisAngle=function(r,t,e){e=e*.5;var n=Math.sin(e);return r[0]=n*t[0],r[1]=n*t[1],r[2]=n*t[2],r[3]=Math.cos(e),r};L.add=x.add;L.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=e[0],f=e[1],u=e[2],c=e[3];return r[0]=n*c+s*o+i*u-a*f,r[1]=i*c+s*f+a*o-n*u,r[2]=a*c+s*u+n*f-i*o,r[3]=s*c-n*o-i*f-a*u,r};L.mul=L.multiply;L.scale=x.scale;L.rotateX=function(r,t,e){e*=.5;var n=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(e),f=Math.cos(e);return r[0]=n*f+s*o,r[1]=i*f+a*o,r[2]=a*f-i*o,r[3]=s*f-n*o,r};L.rotateY=function(r,t,e){e*=.5;var n=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(e),f=Math.cos(e);return r[0]=n*f-a*o,r[1]=i*f+s*o,r[2]=a*f+n*o,r[3]=s*f-i*o,r};L.rotateZ=function(r,t,e){e*=.5;var n=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(e),f=Math.cos(e);return r[0]=n*f+i*o,r[1]=i*f-n*o,r[2]=a*f+s*o,r[3]=s*f-a*o,r};L.calculateW=function(r,t){var e=t[0],n=t[1],i=t[2];return r[0]=e,r[1]=n,r[2]=i,r[3]=Math.sqrt(Math.abs(1-e*e-n*n-i*i)),r};L.dot=x.dot;L.lerp=x.lerp;L.slerp=function(r,t,e,n){var i=t[0],a=t[1],s=t[2],o=t[3],f=e[0],u=e[1],c=e[2],l=e[3],d,h,v,_,m;return h=i*f+a*u+s*c+o*l,h<0&&(h=-h,f=-f,u=-u,c=-c,l=-l),1-h>1e-6?(d=Math.acos(h),v=Math.sin(d),_=Math.sin((1-n)*d)/v,m=Math.sin(n*d)/v):(_=1-n,m=n),r[0]=_*i+m*f,r[1]=_*a+m*u,r[2]=_*s+m*c,r[3]=_*o+m*l,r};L.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e*e+n*n+i*i+a*a,o=s?1/s:0;return r[0]=-e*o,r[1]=-n*o,r[2]=-i*o,r[3]=a*o,r};L.conjugate=function(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r};L.length=x.length;L.len=L.length;L.squaredLength=x.squaredLength;L.sqrLen=L.squaredLength;L.normalize=x.normalize;L.fromMat3=function(r,t){var e=t[0]+t[4]+t[8],n;if(e>0)n=Math.sqrt(e+1),r[3]=.5*n,n=.5/n,r[0]=(t[5]-t[7])*n,r[1]=(t[6]-t[2])*n,r[2]=(t[1]-t[3])*n;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var a=(i+1)%3,s=(i+2)%3;n=Math.sqrt(t[i*3+i]-t[a*3+a]-t[s*3+s]+1),r[i]=.5*n,n=.5/n,r[3]=(t[a*3+s]-t[s*3+a])*n,r[a]=(t[a*3+i]+t[i*3+a])*n,r[s]=(t[s*3+i]+t[i*3+s])*n}return r};var P=function(){this._axisX=new A,this._axisY=new A,this._axisZ=new A,this.array=R.create(),this._dirty=!0};P.prototype={constructor:P,setArray:function(r){for(var t=0;t<this.array.length;t++)this.array[t]=r[t];return this._dirty=!0,this},adjoint:function(){return R.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new P().copy(this)},copy:function(r){return R.copy(this.array,r.array),this._dirty=!0,this},determinant:function(){return R.determinant(this.array)},fromQuat:function(r){return R.fromQuat(this.array,r.array),this._dirty=!0,this},fromRotationTranslation:function(r,t){return R.fromRotationTranslation(this.array,r.array,t.array),this._dirty=!0,this},fromMat2d:function(r){return P.fromMat2d(this,r),this},frustum:function(r,t,e,n,i,a){return R.frustum(this.array,r,t,e,n,i,a),this._dirty=!0,this},identity:function(){return R.identity(this.array),this._dirty=!0,this},invert:function(){return R.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(r,t,e){return R.lookAt(this.array,r.array,t.array,e.array),this._dirty=!0,this},mul:function(r){return R.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return R.mul(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return R.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return R.multiply(this.array,r.array,this.array),this._dirty=!0,this},ortho:function(r,t,e,n,i,a){return R.ortho(this.array,r,t,e,n,i,a),this._dirty=!0,this},perspective:function(r,t,e,n){return R.perspective(this.array,r,t,e,n),this._dirty=!0,this},rotate:function(r,t){return R.rotate(this.array,this.array,r,t.array),this._dirty=!0,this},rotateX:function(r){return R.rotateX(this.array,this.array,r),this._dirty=!0,this},rotateY:function(r){return R.rotateY(this.array,this.array,r),this._dirty=!0,this},rotateZ:function(r){return R.rotateZ(this.array,this.array,r),this._dirty=!0,this},scale:function(r){return R.scale(this.array,this.array,r.array),this._dirty=!0,this},translate:function(r){return R.translate(this.array,this.array,r.array),this._dirty=!0,this},transpose:function(){return R.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var r=y.create(),t=y.create(),e=y.create(),n=B.create();return function(i,a,s){var o=this.array;y.set(r,o[0],o[1],o[2]),y.set(t,o[4],o[5],o[6]),y.set(e,o[8],o[9],o[10]);var f=y.length(r),u=y.length(t),c=y.length(e),l=this.determinant();l<0&&(f=-f),i&&i.set(f,u,c),s.set(o[12],o[13],o[14]),B.fromMat4(n,o),n[0]/=f,n[1]/=f,n[2]/=f,n[3]/=u,n[4]/=u,n[5]/=u,n[6]/=c,n[7]/=c,n[8]/=c,L.fromMat3(a.array,n),L.normalize(a.array,a.array),a._dirty=!0,s._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Yt=Object.defineProperty;if(Yt){var xe=P.prototype;Yt(xe,"z",{get:function(){var r=this.array;return this._axisZ.set(r[8],r[9],r[10]),this._axisZ},set:function(r){var t=this.array;r=r.array,t[8]=r[0],t[9]=r[1],t[10]=r[2],this._dirty=!0}}),Yt(xe,"y",{get:function(){var r=this.array;return this._axisY.set(r[4],r[5],r[6]),this._axisY},set:function(r){var t=this.array;r=r.array,t[4]=r[0],t[5]=r[1],t[6]=r[2],this._dirty=!0}}),Yt(xe,"x",{get:function(){var r=this.array;return this._axisX.set(r[0],r[1],r[2]),this._axisX},set:function(r){var t=this.array;r=r.array,t[0]=r[0],t[1]=r[1],t[2]=r[2],this._dirty=!0}})}P.adjoint=function(r,t){return R.adjoint(r.array,t.array),r._dirty=!0,r};P.copy=function(r,t){return R.copy(r.array,t.array),r._dirty=!0,r};P.determinant=function(r){return R.determinant(r.array)};P.identity=function(r){return R.identity(r.array),r._dirty=!0,r};P.ortho=function(r,t,e,n,i,a,s){return R.ortho(r.array,t,e,n,i,a,s),r._dirty=!0,r};P.perspective=function(r,t,e,n,i){return R.perspective(r.array,t,e,n,i),r._dirty=!0,r};P.lookAt=function(r,t,e,n){return R.lookAt(r.array,t.array,e.array,n.array),r._dirty=!0,r};P.invert=function(r,t){return R.invert(r.array,t.array),r._dirty=!0,r};P.mul=function(r,t,e){return R.mul(r.array,t.array,e.array),r._dirty=!0,r};P.multiply=P.mul;P.fromQuat=function(r,t){return R.fromQuat(r.array,t.array),r._dirty=!0,r};P.fromRotationTranslation=function(r,t,e){return R.fromRotationTranslation(r.array,t.array,e.array),r._dirty=!0,r};P.fromMat2d=function(n,e){n._dirty=!0;var e=e.array,n=n.array;return n[0]=e[0],n[4]=e[2],n[12]=e[4],n[1]=e[1],n[5]=e[3],n[13]=e[5],n};P.rotate=function(r,t,e,n){return R.rotate(r.array,t.array,e,n.array),r._dirty=!0,r};P.rotateX=function(r,t,e){return R.rotateX(r.array,t.array,e),r._dirty=!0,r};P.rotateY=function(r,t,e){return R.rotateY(r.array,t.array,e),r._dirty=!0,r};P.rotateZ=function(r,t,e){return R.rotateZ(r.array,t.array,e),r._dirty=!0,r};P.scale=function(r,t,e){return R.scale(r.array,t.array,e.array),r._dirty=!0,r};P.transpose=function(r,t){return R.transpose(r.array,t.array),r._dirty=!0,r};P.translate=function(r,t,e){return R.translate(r.array,t.array,e.array),r._dirty=!0,r};var j=function(r,t,e,n){r=r||0,t=t||0,e=e||0,n=n===void 0?1:n,this.array=L.fromValues(r,t,e,n),this._dirty=!0};j.prototype={constructor:j,add:function(r){return L.add(this.array,this.array,r.array),this._dirty=!0,this},calculateW:function(){return L.calculateW(this.array,this.array),this._dirty=!0,this},set:function(r,t,e,n){return this.array[0]=r,this.array[1]=t,this.array[2]=e,this.array[3]=n,this._dirty=!0,this},setArray:function(r){return this.array[0]=r[0],this.array[1]=r[1],this.array[2]=r[2],this.array[3]=r[3],this._dirty=!0,this},clone:function(){return new j(this.x,this.y,this.z,this.w)},conjugate:function(){return L.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(r){return L.copy(this.array,r.array),this._dirty=!0,this},dot:function(r){return L.dot(this.array,r.array)},fromMat3:function(r){return L.fromMat3(this.array,r.array),this._dirty=!0,this},fromMat4:function(){var r=B.create();return function(t){return B.fromMat4(r,t.array),B.transpose(r,r),L.fromMat3(this.array,r),this._dirty=!0,this}}(),identity:function(){return L.identity(this.array),this._dirty=!0,this},invert:function(){return L.invert(this.array,this.array),this._dirty=!0,this},len:function(){return L.len(this.array)},length:function(){return L.length(this.array)},lerp:function(r,t,e){return L.lerp(this.array,r.array,t.array,e),this._dirty=!0,this},mul:function(r){return L.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return L.multiply(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return L.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return L.multiply(this.array,r.array,this.array),this._dirty=!0,this},normalize:function(){return L.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(r){return L.rotateX(this.array,this.array,r),this._dirty=!0,this},rotateY:function(r){return L.rotateY(this.array,this.array,r),this._dirty=!0,this},rotateZ:function(r){return L.rotateZ(this.array,this.array,r),this._dirty=!0,this},rotationTo:function(r,t){return L.rotationTo(this.array,r.array,t.array),this._dirty=!0,this},setAxes:function(r,t,e){return L.setAxes(this.array,r.array,t.array,e.array),this._dirty=!0,this},setAxisAngle:function(r,t){return L.setAxisAngle(this.array,r.array,t),this._dirty=!0,this},slerp:function(r,t,e){return L.slerp(this.array,r.array,t.array,e),this._dirty=!0,this},sqrLen:function(){return L.sqrLen(this.array)},squaredLength:function(){return L.squaredLength(this.array)},fromEuler:function(r,t){return j.fromEuler(this,r,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var It=Object.defineProperty;if(It){var qt=j.prototype;It(qt,"x",{get:function(){return this.array[0]},set:function(r){this.array[0]=r,this._dirty=!0}}),It(qt,"y",{get:function(){return this.array[1]},set:function(r){this.array[1]=r,this._dirty=!0}}),It(qt,"z",{get:function(){return this.array[2]},set:function(r){this.array[2]=r,this._dirty=!0}}),It(qt,"w",{get:function(){return this.array[3]},set:function(r){this.array[3]=r,this._dirty=!0}})}j.add=function(r,t,e){return L.add(r.array,t.array,e.array),r._dirty=!0,r};j.set=function(r,t,e,n,i){L.set(r.array,t,e,n,i),r._dirty=!0};j.copy=function(r,t){return L.copy(r.array,t.array),r._dirty=!0,r};j.calculateW=function(r,t){return L.calculateW(r.array,t.array),r._dirty=!0,r};j.conjugate=function(r,t){return L.conjugate(r.array,t.array),r._dirty=!0,r};j.identity=function(r){return L.identity(r.array),r._dirty=!0,r};j.invert=function(r,t){return L.invert(r.array,t.array),r._dirty=!0,r};j.dot=function(r,t){return L.dot(r.array,t.array)};j.len=function(r){return L.length(r.array)};j.lerp=function(r,t,e,n){return L.lerp(r.array,t.array,e.array,n),r._dirty=!0,r};j.slerp=function(r,t,e,n){return L.slerp(r.array,t.array,e.array,n),r._dirty=!0,r};j.mul=function(r,t,e){return L.multiply(r.array,t.array,e.array),r._dirty=!0,r};j.multiply=j.mul;j.rotateX=function(r,t,e){return L.rotateX(r.array,t.array,e),r._dirty=!0,r};j.rotateY=function(r,t,e){return L.rotateY(r.array,t.array,e),r._dirty=!0,r};j.rotateZ=function(r,t,e){return L.rotateZ(r.array,t.array,e),r._dirty=!0,r};j.setAxisAngle=function(r,t,e){return L.setAxisAngle(r.array,t.array,e),r._dirty=!0,r};j.normalize=function(r,t){return L.normalize(r.array,t.array),r._dirty=!0,r};j.sqrLen=function(r){return L.sqrLen(r.array)};j.squaredLength=j.sqrLen;j.fromMat3=function(r,t){return L.fromMat3(r.array,t.array),r._dirty=!0,r};j.setAxes=function(r,t,e,n){return L.setAxes(r.array,t.array,e.array,n.array),r._dirty=!0,r};j.rotationTo=function(r,t,e){return L.rotationTo(r.array,t.array,e.array),r._dirty=!0,r};j.fromEuler=function(r,t,c){r._dirty=!0,t=t.array;var n=r.array,i=Math.cos(t[0]/2),a=Math.cos(t[1]/2),s=Math.cos(t[2]/2),o=Math.sin(t[0]/2),f=Math.sin(t[1]/2),u=Math.sin(t[2]/2),c=(c||"XYZ").toUpperCase();switch(c){case"XYZ":n[0]=o*a*s+i*f*u,n[1]=i*f*s-o*a*u,n[2]=i*a*u+o*f*s,n[3]=i*a*s-o*f*u;break;case"YXZ":n[0]=o*a*s+i*f*u,n[1]=i*f*s-o*a*u,n[2]=i*a*u-o*f*s,n[3]=i*a*s+o*f*u;break;case"ZXY":n[0]=o*a*s-i*f*u,n[1]=i*f*s+o*a*u,n[2]=i*a*u+o*f*s,n[3]=i*a*s-o*f*u;break;case"ZYX":n[0]=o*a*s-i*f*u,n[1]=i*f*s+o*a*u,n[2]=i*a*u-o*f*s,n[3]=i*a*s+o*f*u;break;case"YZX":n[0]=o*a*s+i*f*u,n[1]=i*f*s+o*a*u,n[2]=i*a*u-o*f*s,n[3]=i*a*s-o*f*u;break;case"XZY":n[0]=o*a*s-i*f*u,n[1]=i*f*s-o*a*u,n[2]=i*a*u+o*f*s,n[3]=i*a*s+o*f*u;break}};var Hr=y.set,Zt=y.copy,Tr=function(r,t){this.min=r||new A(1/0,1/0,1/0),this.max=t||new A(-1/0,-1/0,-1/0),this.vertices=null};Tr.prototype={constructor:Tr,updateFromVertices:function(r){if(r.length>0){var t=this.min,e=this.max,n=t.array,i=e.array;Zt(n,r[0]),Zt(i,r[0]);for(var a=1;a<r.length;a++){var s=r[a];s[0]<n[0]&&(n[0]=s[0]),s[1]<n[1]&&(n[1]=s[1]),s[2]<n[2]&&(n[2]=s[2]),s[0]>i[0]&&(i[0]=s[0]),s[1]>i[1]&&(i[1]=s[1]),s[2]>i[2]&&(i[2]=s[2])}t._dirty=!0,e._dirty=!0}},union:function(r){var t=this.min,e=this.max;return y.min(t.array,t.array,r.min.array),y.max(e.array,e.array,r.max.array),t._dirty=!0,e._dirty=!0,this},intersection:function(r){var t=this.min,e=this.max;return y.max(t.array,t.array,r.min.array),y.min(e.array,e.array,r.max.array),t._dirty=!0,e._dirty=!0,this},intersectBoundingBox:function(r){var t=this.min.array,e=this.max.array,n=r.min.array,i=r.max.array;return!(t[0]>i[0]||t[1]>i[1]||t[2]>i[2]||e[0]<n[0]||e[1]<n[1]||e[2]<n[2])},containBoundingBox:function(r){var t=this.min.array,e=this.max.array,n=r.min.array,i=r.max.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&e[0]>=i[0]&&e[1]>=i[1]&&e[2]>=i[2]},containPoint:function(r){var t=this.min.array,e=this.max.array,n=r.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&e[0]>=n[0]&&e[1]>=n[1]&&e[2]>=n[2]},isFinite:function(){var r=this.min.array,t=this.max.array;return isFinite(r[0])&&isFinite(r[1])&&isFinite(r[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(r){this.transformFrom(this,r)},transformFrom:function(){var r=y.create(),t=y.create(),e=y.create(),n=y.create(),i=y.create(),a=y.create();return function(s,o){var f=s.min.array,u=s.max.array,c=o.array;return r[0]=c[0]*f[0],r[1]=c[1]*f[0],r[2]=c[2]*f[0],t[0]=c[0]*u[0],t[1]=c[1]*u[0],t[2]=c[2]*u[0],e[0]=c[4]*f[1],e[1]=c[5]*f[1],e[2]=c[6]*f[1],n[0]=c[4]*u[1],n[1]=c[5]*u[1],n[2]=c[6]*u[1],i[0]=c[8]*f[2],i[1]=c[9]*f[2],i[2]=c[10]*f[2],a[0]=c[8]*u[2],a[1]=c[9]*u[2],a[2]=c[10]*u[2],f=this.min.array,u=this.max.array,f[0]=Math.min(r[0],t[0])+Math.min(e[0],n[0])+Math.min(i[0],a[0])+c[12],f[1]=Math.min(r[1],t[1])+Math.min(e[1],n[1])+Math.min(i[1],a[1])+c[13],f[2]=Math.min(r[2],t[2])+Math.min(e[2],n[2])+Math.min(i[2],a[2])+c[14],u[0]=Math.max(r[0],t[0])+Math.max(e[0],n[0])+Math.max(i[0],a[0])+c[12],u[1]=Math.max(r[1],t[1])+Math.max(e[1],n[1])+Math.max(i[1],a[1])+c[13],u[2]=Math.max(r[2],t[2])+Math.max(e[2],n[2])+Math.max(i[2],a[2])+c[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(r){var t=this.min.array,e=this.max.array,n=r.array,i=t[0],a=t[1],s=t[2],o=e[0],f=e[1],u=t[2],c=e[0],l=e[1],d=e[2];if(n[15]===1)t[0]=n[0]*i+n[12],t[1]=n[5]*a+n[13],e[2]=n[10]*s+n[14],e[0]=n[0]*c+n[12],e[1]=n[5]*l+n[13],t[2]=n[10]*d+n[14];else{var h=-1/s;t[0]=n[0]*i*h,t[1]=n[5]*a*h,e[2]=(n[10]*s+n[14])*h,h=-1/u,e[0]=n[0]*o*h,e[1]=n[5]*f*h,h=-1/d,t[2]=(n[10]*d+n[14])*h}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var r=this.vertices;if(!r){r=[];for(var t=0;t<8;t++)r[t]=y.fromValues(0,0,0);this.vertices=r}var e=this.min.array,n=this.max.array;return Hr(r[0],e[0],e[1],e[2]),Hr(r[1],e[0],n[1],e[2]),Hr(r[2],n[0],e[1],e[2]),Hr(r[3],n[0],n[1],e[2]),Hr(r[4],e[0],e[1],n[2]),Hr(r[5],e[0],n[1],n[2]),Hr(r[6],n[0],e[1],n[2]),Hr(r[7],n[0],n[1],n[2]),this},copy:function(r){var t=this.min,e=this.max;return Zt(t.array,r.min.array),Zt(e.array,r.max.array),t._dirty=!0,e._dirty=!0,this},clone:function(){var r=new Tr;return r.copy(this),r}};var Oa=0,Or=xr.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Oa++),this.position||(this.position=new A),this.rotation||(this.rotation=new j),this.scale||(this.scale=new A(1,1,1)),this.worldTransform=new P,this.localTransform=new P,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(r){var t=this._scene;if(t){var e=t._nodeRepository;delete e[this.name],e[r]=this}this.name=r},add:function(r){var t=r._parent;if(t!==this){t&&t.remove(r),r._parent=this,this._children.push(r);var e=this._scene;e&&e!==r.scene&&r.traverse(this._addSelfToScene,this),r._needsUpdateWorldTransform=!0}},remove:function(r){var t=this._children,e=t.indexOf(r);e<0||(t.splice(e,1),r._parent=null,this._scene&&r.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var r=this._children,t=0;t<r.length;t++)r[t]._parent=null,this._scene&&r[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(r){r._scene.removeFromScene(r),r._scene=null},_addSelfToScene:function(r){this._scene.addToScene(r),r._scene=this._scene},isAncestor:function(r){for(var t=r._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(r){return this._children[r]},getChildByName:function(r){for(var t=this._children,e=0;e<t.length;e++)if(t[e].name===r)return t[e]},getDescendantByName:function(r){for(var t=this._children,e=0;e<t.length;e++){var n=t[e];if(n.name===r)return n;var i=n.getDescendantByName(r);if(i)return i}},queryNode:function(r){if(r){for(var t=r.split("/"),e=this,n=0;n<t.length;n++){var i=t[n];if(i){for(var a=!1,s=e._children,o=0;o<s.length;o++){var f=s[o];if(f.name===i){e=f,a=!0;break}}if(!a)return}}return e}},getPath:function(r){if(!this._parent)return"/";for(var t=this._parent,e=this.name;t._parent&&(e=t.name+"/"+e,t._parent!=r);)t=t._parent;return!t._parent&&r?null:e},traverse:function(r,t){r.call(t,this);for(var e=this._children,n=0,i=e.length;n<i;n++)e[n].traverse(r,t)},eachChild:function(r,t){for(var e=this._children,n=0,i=e.length;n<i;n++){var a=e[n];r.call(t,a,n)}},setLocalTransform:function(r){R.copy(this.localTransform.array,r.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(r){var t=r?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(r){R.copy(this.worldTransform.array,r.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var r=R.create();return function(t){var e=this.localTransform,n=this.worldTransform;this._parent?(R.invert(r,this._parent.worldTransform.array),R.multiply(e.array,r,n.array)):R.copy(e.array,n.array);var i=t?null:this.scale;e.decomposeMatrix(i,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var r=this.position,t=this.rotation,e=this.scale;if(this.transformNeedsUpdate()){var n=this.localTransform.array;R.fromRotationTranslation(n,t.array,r.array),R.scale(n,n,e.array),t._dirty=!1,e._dirty=!1,r._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var r=this.localTransform.array,t=this.worldTransform.array;this._parent?R.multiplyAffine(t,this._parent.worldTransform.array,r):R.copy(t,r)},updateWorldTransform:function(){for(var r=this;r&&r.getParent()&&r.getParent().transformNeedsUpdate();)r=r.getParent();r.update()},update:function(r){this.autoUpdateLocalTransform?this.updateLocalTransform():r=!0,(r||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),r=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,e=0,n=t.length;e<n;e++)t[e].update(r)},getBoundingBox:function(){function r(i){return!i.invisible&&i.geometry}var t=new Tr,e=new P,n=new P;return function(i,a){return a=a||new Tr,this._parent?P.invert(n,this._parent.worldTransform):P.identity(n),this.traverse(function(s){s.geometry&&s.geometry.boundingBox&&(t.copy(s.geometry.boundingBox),P.multiply(e,n,s.worldTransform),t.applyTransform(e),a.union(t))},this,r),a}}(),getWorldPosition:function(r){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(r){var e=r.array;return e[0]=t[12],e[1]=t[13],e[2]=t[14],r}else return new A(t[12],t[13],t[14])},clone:function(){var r=new this.constructor,t=this._children;r.setName(this.name),r.position.copy(this.position),r.rotation.copy(this.rotation),r.scale.copy(this.scale);for(var e=0;e<t.length;e++)r.add(t[e].clone());return r},rotateAround:function(){var r=new A,t=new P;return function(e,n,i){r.copy(this.position).subtract(e);var a=this.localTransform;a.identity(),a.translate(e),a.rotate(i,n),t.fromRotationTranslation(this.rotation,r),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var r=new P;return function(t,e){r.lookAt(this.position,t,e||this.localTransform.y).invert(),this.setLocalTransform(r),this.target=t}}()}),yr=Or.extend({material:null,geometry:null,mode:I.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:I.BACK,frontFace:I.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(r){},afterRender:function(r,t){},getBoundingBox:function(r,t){return t=Or.prototype.getBoundingBox.call(this,r,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var r=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=Or.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var e=0;e<r.length;e++){var n=r[e];t[n]!==this[n]&&(t[n]=this[n])}return t}}()});yr.POINTS=I.POINTS;yr.LINES=I.LINES;yr.LINE_LOOP=I.LINE_LOOP;yr.LINE_STRIP=I.LINE_STRIP;yr.TRIANGLES=I.TRIANGLES;yr.TRIANGLE_STRIP=I.TRIANGLE_STRIP;yr.TRIANGLE_FAN=I.TRIANGLE_FAN;yr.BACK=I.BACK;yr.FRONT=I.FRONT;yr.FRONT_AND_BACK=I.FRONT_AND_BACK;yr.CW=I.CW;yr.CCW=I.CCW;var ke=xr.extend({scene:null,camera:null,renderer:null},function(){this._ray=new nt,this._ndc=new V},{pick:function(r,t,e){var n=this.pickAll(r,t,[],e);return n[0]||null},pickAll:function(r,t,e,n){return this.renderer.screenToNDC(r,t,this._ndc),this.camera.castRay(this._ndc,this._ray),e=e||[],this._intersectNode(this.scene,e,n||!1),e.sort(this._intersectionCompareFunc),e},_intersectNode:function(r,t,e){r instanceof yr&&r.isRenderable()&&(!r.ignorePicking||e)&&(r.mode===I.TRIANGLES&&r.geometry.isUseIndices()||r.geometry.pickByRay||r.geometry.pick)&&this._intersectRenderable(r,t);for(var n=0;n<r._children.length;n++)this._intersectNode(r._children[n],t,e)},_intersectRenderable:function(){var r=new A,t=new A,e=new A,n=new nt,i=new P;return function(a,s){var o=a.isSkinnedMesh();n.copy(this._ray),P.invert(i,a.worldTransform),o||n.applyTransform(i);var f=a.geometry,u=o?a.skeleton.boundingBox:f.boundingBox;if(!(u&&!n.intersectBoundingBox(u))){if(f.pick){f.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,s);return}else if(f.pickByRay){f.pickByRay(n,a,s);return}var c=a.cullFace===I.BACK&&a.frontFace===I.CCW||a.cullFace===I.FRONT&&a.frontFace===I.CW,l,d=f.indices,h=f.attributes.position,v=f.attributes.weight,_=f.attributes.joint,m,p=[];if(!(!h||!h.value||!d)){if(o){m=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var T=0;T<a.joints.length;T++){p[T]=p[T]||[];for(var g=0;g<16;g++)p[T][g]=m[T*16+g]}var E=[],S=[],N=[],D=[],w=[],O=f.attributes.skinnedPosition;(!O||!O.value)&&(f.createAttribute("skinnedPosition","f",3),O=f.attributes.skinnedPosition,O.init(f.vertexCount));for(var T=0;T<f.vertexCount;T++){h.get(T,E),v.get(T,S),_.get(T,N),S[3]=1-S[0]-S[1]-S[2],y.set(D,0,0,0);for(var g=0;g<4;g++)N[g]>=0&&S[g]>1e-4&&(y.transformMat4(w,E,p[N[g]]),y.scaleAndAdd(D,D,w,S[g]));O.set(T,D)}}for(var T=0;T<d.length;T+=3){var U=d[T],b=d[T+1],k=d[T+2],X=o?f.attributes.skinnedPosition:h;if(X.get(U,r.array),X.get(b,t.array),X.get(k,e.array),c?l=n.intersectTriangle(r,t,e,a.culling):l=n.intersectTriangle(r,e,t,a.culling),l){var F=new A;o?A.copy(F,l):A.transformMat4(F,l,a.worldTransform),s.push(new ke.Intersection(l,F,a,[U,b,k],T/3,A.dist(F,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(r,t){return r.distance-t.distance}});ke.Intersection=function(r,t,e,n,i,a){this.point=r,this.pointWorld=t,this.target=e,this.triangle=n,this.triangleIndex=i,this.distance=a};var St="__dt__",Et=function(){this._contextId=0,this._caches=[],this._context={}};Et.prototype={use:function(r,t){var e=this._caches;e[r]||(e[r]={},t&&(e[r]=t())),this._contextId=r,this._context=e[r]},put:function(r,t){this._context[r]=t},get:function(r){return this._context[r]},dirty:function(r){r=r||"";var t=St+r;this.put(t,!0)},dirtyAll:function(r){r=r||"";for(var t=St+r,e=this._caches,n=0;n<e.length;n++)e[n]&&(e[n][t]=!0)},fresh:function(r){r=r||"";var t=St+r;this.put(t,!1)},freshAll:function(r){r=r||"";for(var t=St+r,e=this._caches,n=0;n<e.length;n++)e[n]&&(e[n][t]=!1)},isDirty:function(r){r=r||"";var t=St+r,e=this._context;return!e.hasOwnProperty(t)||e[t]===!0},deleteContext:function(r){delete this._caches[r],this._context={}},delete:function(r){delete this._context[r]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(r,t){var e=Object.keys(this._caches);e.forEach(function(n){r&&r.call(t,n)})},miss:function(r){return!this._context.hasOwnProperty(r)}};Et.prototype.constructor=Et;var C=xr.extend({width:512,height:512,type:I.UNSIGNED_BYTE,format:I.RGBA,wrapS:I.REPEAT,wrapT:I.REPEAT,minFilter:I.LINEAR_MIPMAP_LINEAR,magFilter:I.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Et},{getWebGLTexture:function(r){var t=r.gl,e=this._cache;return e.use(r.__uid__),e.miss("webgl_texture")&&e.put("webgl_texture",t.createTexture()),this.dynamic?this.update(r):e.isDirty()&&(this.update(r),e.fresh()),e.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(r){},updateCommon:function(r){var t=r.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===I.DEPTH_COMPONENT&&(this.useMipmap=!1);var e=r.getGLExtension("EXT_sRGB");this.format===C.SRGB&&!e&&(this.format=C.RGB),this.format===C.SRGB_ALPHA&&!e&&(this.format=C.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?I.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?I.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var r=this.minFilter;return this.NPOT||!this.useMipmap?r===I.NEAREST_MIPMAP_NEAREST||r===I.NEAREST_MIPMAP_LINEAR?I.NEAREST:r===I.LINEAR_MIPMAP_LINEAR||r===I.LINEAR_MIPMAP_NEAREST?I.LINEAR:r:r},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(r){--r;for(var t=1;t<32;t<<=1)r=r|r>>t;return r+1},dispose:function(r){var t=this._cache;t.use(r.__uid__);var e=t.get("webgl_texture");e&&r.gl.deleteTexture(e),t.deleteContext(r.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(C.prototype,"width",{get:function(){return this._width},set:function(r){this._width=r}});Object.defineProperty(C.prototype,"height",{get:function(){return this._height},set:function(r){this._height=r}});C.BYTE=I.BYTE;C.UNSIGNED_BYTE=I.UNSIGNED_BYTE;C.SHORT=I.SHORT;C.UNSIGNED_SHORT=I.UNSIGNED_SHORT;C.INT=I.INT;C.UNSIGNED_INT=I.UNSIGNED_INT;C.FLOAT=I.FLOAT;C.HALF_FLOAT=36193;C.UNSIGNED_INT_24_8_WEBGL=34042;C.DEPTH_COMPONENT=I.DEPTH_COMPONENT;C.DEPTH_STENCIL=I.DEPTH_STENCIL;C.ALPHA=I.ALPHA;C.RGB=I.RGB;C.RGBA=I.RGBA;C.LUMINANCE=I.LUMINANCE;C.LUMINANCE_ALPHA=I.LUMINANCE_ALPHA;C.SRGB=35904;C.SRGB_ALPHA=35906;C.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;C.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;C.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;C.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;C.NEAREST=I.NEAREST;C.LINEAR=I.LINEAR;C.NEAREST_MIPMAP_NEAREST=I.NEAREST_MIPMAP_NEAREST;C.LINEAR_MIPMAP_NEAREST=I.LINEAR_MIPMAP_NEAREST;C.NEAREST_MIPMAP_LINEAR=I.NEAREST_MIPMAP_LINEAR;C.LINEAR_MIPMAP_LINEAR=I.LINEAR_MIPMAP_LINEAR;C.REPEAT=I.REPEAT;C.CLAMP_TO_EDGE=I.CLAMP_TO_EDGE;C.MIRRORED_REPEAT=I.MIRRORED_REPEAT;var pr=yr.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var r=yr.prototype.clone.call(this);return r.skeleton=this.skeleton,this.joints&&(r.joints=this.joints.slice()),r}});pr.POINTS=I.POINTS;pr.LINES=I.LINES;pr.LINE_LOOP=I.LINE_LOOP;pr.LINE_STRIP=I.LINE_STRIP;pr.TRIANGLES=I.TRIANGLES;pr.TRIANGLE_STRIP=I.TRIANGLE_STRIP;pr.TRIANGLE_FAN=I.TRIANGLE_FAN;pr.BACK=I.BACK;pr.FRONT=I.FRONT;pr.FRONT_AND_BACK=I.FRONT_AND_BACK;pr.CW=I.CW;pr.CCW=I.CCW;var Ft={};Ft.isPowerOfTwo=function(r){return(r&r-1)===0};Ft.nextPowerOfTwo=function(r){return r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,r++,r};Ft.nearestPowerOfTwo=function(r){return Math.pow(2,Math.round(Math.log(r)/Math.LN2))};var wn=Ft.isPowerOfTwo;function On(r){return Math.pow(2,Math.round(Math.log(r)/Math.LN2))}function ba(r,t){var e=On(r.width),n=On(r.height);t=t||document.createElement("canvas"),t.width=e,t.height=n;var i=t.getContext("2d");return i.drawImage(r.image,0,0,e,n),t}var lr=C.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(r){var t=r.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(r);var e=this.format,n=this.type,i=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===C.REPEAT||this.wrapT===C.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,i?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,i?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i?this.minFilter:this.getAvailableMinFilter());var a=r.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var s=r.getGLExtension("OES_texture_half_float");s||(n=I.FLOAT)}if(this.mipmaps.length)for(var o=this.width,f=this.height,u=0;u<this.mipmaps.length;u++){var c=this.mipmaps[u];this._updateTextureData(t,c,u,o,f,e,n,!1),o/=2,f/=2}else this._updateTextureData(t,this,0,this.width,this.height,e,n,i),this.useMipmap&&(!this.NPOT||i)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(r,t,e,n,i,a,s,o){if(t.image){var f=t.image;o&&(this._potCanvas=ba(this,this._potCanvas),f=this._potCanvas),r.texImage2D(r.TEXTURE_2D,e,a,a,s,f)}else a<=C.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=C.COMPRESSED_RGB_S3TC_DXT1_EXT?r.compressedTexImage2D(r.TEXTURE_2D,e,a,n,i,0,t.pixels):r.texImage2D(r.TEXTURE_2D,e,a,n,i,0,a,s,t.pixels)},generateMipmap:function(r){var t=r.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return wn(this.width)&&wn(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(r){r.gl.bindTexture(r.gl.TEXTURE_2D,this.getWebGLTexture(r))},unbind:function(r){r.gl.bindTexture(r.gl.TEXTURE_2D,null)},load:function(r,t){var e=Y.createImage();t&&(e.crossOrigin=t);var n=this;return e.onload=function(){n.dirty(),n.trigger("success",n)},e.onerror=function(){n.trigger("error",n)},e.src=r,this.image=e,this}});Object.defineProperty(lr.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(r){this.image?console.warn("Texture from image can't set width"):(this._width!==r&&this.dirty(),this._width=r)}});Object.defineProperty(lr.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(r){this.image?console.warn("Texture from image can't set height"):(this._height!==r&&this.dirty(),this._height=r)}});function $n(r){return{byte:Y.Int8Array,ubyte:Y.Uint8Array,short:Y.Int16Array,ushort:Y.Uint16Array}[r]||Y.Float32Array}function Ae(r){return"attr_"+r}function Tt(r,t,e,n){switch(this.name=r,this.type=t,this.size=e,this.semantic=n||"",this.value=null,e){case 1:this.get=function(i){return this.value[i]},this.set=function(i,a){this.value[i]=a},this.copy=function(i,a){this.value[i]=this.value[i]};break;case 2:this.get=function(i,a){var s=this.value;return a[0]=s[i*2],a[1]=s[i*2+1],a},this.set=function(i,a){var s=this.value;s[i*2]=a[0],s[i*2+1]=a[1]},this.copy=function(i,a){var s=this.value;a*=2,i*=2,s[i]=s[a],s[i+1]=s[a+1]};break;case 3:this.get=function(i,a){var s=i*3,o=this.value;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a},this.set=function(i,a){var s=i*3,o=this.value;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2]},this.copy=function(i,a){var s=this.value;a*=3,i*=3,s[i]=s[a],s[i+1]=s[a+1],s[i+2]=s[a+2]};break;case 4:this.get=function(i,a){var s=this.value,o=i*4;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a[3]=s[o+3],a},this.set=function(i,a){var s=this.value,o=i*4;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2],s[o+3]=a[3]},this.copy=function(i,a){var s=this.value;a*=4,i*=4,s[i]=s[a],s[i+1]=s[a+1],s[i+2]=s[a+2],s[i+3]=s[a+3]}}}Tt.prototype.init=function(r){if(!this.value||this.value.length!==r*this.size){var t=$n(this.type);this.value=new t(r*this.size)}};Tt.prototype.fromArray=function(r){var t=$n(this.type),e;if(r[0]&&r[0].length){var n=0,i=this.size;e=new t(r.length*i);for(var a=0;a<r.length;a++)for(var s=0;s<i;s++)e[n++]=r[a][s]}else e=new t(r);this.value=e};Tt.prototype.clone=function(r){var t=new Tt(this.name,this.type,this.size,this.semantic);return r&&console.warn("todo"),t};function ri(r,t,e,n,i){this.name=r,this.type=t,this.buffer=e,this.size=n,this.semantic=i,this.symbol="",this.needsRemove=!1}function ti(r){this.buffer=r,this.count=0}var mr=xr.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Et,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var r=this.getEnabledAttributes(),t=0;t<r.length;t++)this.dirtyAttribute(r[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(r){this._cache.dirtyAll(Ae(r)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(r,t){if(r<this.triangleCount&&r>=0){t||(t=[]);var e=this.indices;return t[0]=e[r*3],t[1]=e[r*3+1],t[2]=e[r*3+2],t}},setTriangleIndices:function(r,t){var e=this.indices;e[r*3]=t[0],e[r*3+1]=t[1],e[r*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(r){var t,e=this.vertexCount>65535?Y.Uint32Array:Y.Uint16Array;if(r[0]&&r[0].length){var n=0,i=3;t=new e(r.length*i);for(var a=0;a<r.length;a++)for(var s=0;s<i;s++)t[n++]=r[a][s]}else t=new e(r);this.indices=t},createAttribute:function(r,t,e,n){var i=new Tt(r,t,e,n);return this.attributes[r]&&this.removeAttribute(r),this.attributes[r]=i,this._attributeList.push(r),i},removeAttribute:function(r){var t=this._attributeList,e=t.indexOf(r);return e>=0?(t.splice(e,1),delete this.attributes[r],!0):!1},getAttribute:function(r){return this.attributes[r]},getEnabledAttributes:function(){var r=this._enabledAttributes,t=this._attributeList;if(r)return r;for(var e=[],n=this.vertexCount,i=0;i<t.length;i++){var a=t[i],s=this.attributes[a];s.value&&s.value.length===n*s.size&&e.push(a)}return this._enabledAttributes=e,e},getBufferChunks:function(r){var t=this._cache;t.use(r.__uid__);var e=t.isDirty("attributes"),n=t.isDirty("indices");if(e||n){this._updateBuffer(r.gl,e,n);for(var i=this.getEnabledAttributes(),a=0;a<i.length;a++)t.fresh(Ae(i[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(r,t,e){var n=this._cache,i=n.get("chunks"),a=!1;i||(i=[],i[0]={attributeBuffers:[],indicesBuffer:null},n.put("chunks",i),a=!0);var s=i[0],o=s.attributeBuffers,f=s.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),c={};if(!a)for(var l=0;l<o.length;l++)c[o[l].name]=o[l];for(var d=0;d<u.length;d++){var h=u[d],v=this.attributes[h],_;a||(_=c[h]);var m;_?m=_.buffer:m=r.createBuffer(),n.isDirty(Ae(h))&&(r.bindBuffer(r.ARRAY_BUFFER,m),r.bufferData(r.ARRAY_BUFFER,v.value,this.dynamic?r.DYNAMIC_DRAW:r.STATIC_DRAW)),o[d]=new ri(h,v.type,m,v.size,v.semantic)}for(var l=d;l<o.length;l++)r.deleteBuffer(o[l].buffer);o.length=d}this.isUseIndices()&&(e||a)&&(f||(f=new ti(r.createBuffer()),s.indicesBuffer=f),f.count=this.indices.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,f.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?r.DYNAMIC_DRAW:r.STATIC_DRAW))},dispose:function(r){var t=this._cache;t.use(r.__uid__);var e=t.get("chunks");if(e)for(var n=0;n<e.length;n++){for(var i=e[n],a=0;a<i.attributeBuffers.length;a++){var s=i.attributeBuffers[a];r.gl.deleteBuffer(s.buffer)}i.indicesBuffer&&r.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var o=r.getGLExtension("OES_vertex_array_object");for(var f in this.__vaoCache){var u=this.__vaoCache[f].vao;u&&o.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(r.__uid__)}});Object.defineProperty&&(Object.defineProperty(mr.prototype,"vertexCount",{enumerable:!1,get:function(){var r=this.attributes[this.mainAttribute];return r||(r=this.attributes[this._attributeList[0]]),!r||!r.value?0:r.value.length/r.size}}),Object.defineProperty(mr.prototype,"triangleCount",{enumerable:!1,get:function(){var r=this.indices;return r?r.length/3:0}}));mr.STATIC_DRAW=I.STATIC_DRAW;mr.DYNAMIC_DRAW=I.DYNAMIC_DRAW;mr.STREAM_DRAW=I.STREAM_DRAW;mr.AttributeBuffer=ri;mr.IndicesBuffer=ti;mr.Attribute=Tt;var vr=y.create,lt=y.add,Jr=y.set,wr=mr.Attribute,br=mr.extend(function(){return{attributes:{position:new wr("position","float",3,"POSITION"),texcoord0:new wr("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new wr("texcoord1","float",2,"TEXCOORD_1"),normal:new wr("normal","float",3,"NORMAL"),tangent:new wr("tangent","float",4,"TANGENT"),color:new wr("color","float",4,"COLOR"),weight:new wr("weight","float",3,"WEIGHT"),joint:new wr("joint","float",4,"JOINT"),barycentric:new wr("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var r=this.boundingBox;r||(r=this.boundingBox=new Tr);var t=this.attributes.position.value;if(t&&t.length){var e=r.min,n=r.max,i=e.array,a=n.array;y.set(i,t[0],t[1],t[2]),y.set(a,t[0],t[1],t[2]);for(var s=3;s<t.length;){var o=t[s++],f=t[s++],u=t[s++];o<i[0]&&(i[0]=o),f<i[1]&&(i[1]=f),u<i[2]&&(i[2]=u),o>a[0]&&(a[0]=o),f>a[1]&&(a[1]=f),u>a[2]&&(a[2]=u)}e._dirty=!0,n._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var r=this.indices,t=this.attributes,e=t.position.value,n=t.normal.value;if(!n||n.length!==e.length)n=t.normal.value=new Y.Float32Array(e.length);else for(var i=0;i<n.length;i++)n[i]=0;for(var a=vr(),s=vr(),o=vr(),f=vr(),u=vr(),c=vr(),l=r?r.length:this.vertexCount,d,h,v,_=0;_<l;){r?(d=r[_++],h=r[_++],v=r[_++]):(d=_++,h=_++,v=_++),Jr(a,e[d*3],e[d*3+1],e[d*3+2]),Jr(s,e[h*3],e[h*3+1],e[h*3+2]),Jr(o,e[v*3],e[v*3+1],e[v*3+2]),y.sub(f,a,s),y.sub(u,s,o),y.cross(c,f,u);for(var i=0;i<3;i++)n[d*3+i]=n[d*3+i]+c[i],n[h*3+i]=n[h*3+i]+c[i],n[v*3+i]=n[v*3+i]+c[i]}for(var i=0;i<n.length;)Jr(c,n[i],n[i+1],n[i+2]),y.normalize(c,c),n[i++]=c[0],n[i++]=c[1],n[i++]=c[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var r=this.indices,t=this.attributes,e=t.position.value,n=t.normal.value,i=vr(),a=vr(),s=vr(),o=vr(),f=vr(),u=vr();n||(n=t.normal.value=new Float32Array(e.length));for(var c=r?r.length:this.vertexCount,l,d,h,v=0;v<c;){r?(l=r[v++],d=r[v++],h=r[v++]):(l=v++,d=v++,h=v++),Jr(i,e[l*3],e[l*3+1],e[l*3+2]),Jr(a,e[d*3],e[d*3+1],e[d*3+2]),Jr(s,e[h*3],e[h*3+1],e[h*3+2]),y.sub(o,i,a),y.sub(f,a,s),y.cross(u,o,f),y.normalize(u,u);for(var _=0;_<3;_++)n[l*3+_]=u[_],n[d*3+_]=u[_],n[h*3+_]=u[_]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var r=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(r*4));var e=t.texcoord0.value,n=t.position.value,i=t.tangent.value,a=t.normal.value;if(!e){console.warn("Geometry without texcoords can't generate tangents.");return}for(var s=[],o=[],f=0;f<r;f++)s[f]=[0,0,0],o[f]=[0,0,0];for(var u=[0,0,0],c=[0,0,0],l=this.indices,d=l?l.length:this.vertexCount,h,v,_,f=0;f<d;){l?(h=l[f++],v=l[f++],_=l[f++]):(h=f++,v=f++,_=f++);var m=e[h*2],p=e[v*2],T=e[_*2],g=e[h*2+1],E=e[v*2+1],S=e[_*2+1],N=n[h*3],D=n[v*3],w=n[_*3],O=n[h*3+1],U=n[v*3+1],b=n[_*3+1],k=n[h*3+2],X=n[v*3+2],F=n[_*3+2],Q=D-N,q=w-N,tr=U-O,At=b-O,Gt=X-k,Rt=F-k,zr=p-m,Vr=T-m,Yr=E-g,Pr=S-g,Dr=1/(zr*Pr-Yr*Vr);u[0]=(Pr*Q-Yr*q)*Dr,u[1]=(Pr*tr-Yr*At)*Dr,u[2]=(Pr*Gt-Yr*Rt)*Dr,c[0]=(zr*q-Vr*Q)*Dr,c[1]=(zr*At-Vr*tr)*Dr,c[2]=(zr*Rt-Vr*Gt)*Dr,lt(s[h],s[h],u),lt(s[v],s[v],u),lt(s[_],s[_],u),lt(o[h],o[h],c),lt(o[v],o[v],c),lt(o[_],o[_],c)}for(var Cr=vr(),Ze=vr(),ft=vr(),f=0;f<r;f++){ft[0]=a[f*3],ft[1]=a[f*3+1],ft[2]=a[f*3+2];var fe=s[f];y.scale(Cr,ft,y.dot(ft,fe)),y.sub(Cr,fe,Cr),y.normalize(Cr,Cr),y.cross(Ze,ft,fe),i[f*4]=Cr[0],i[f*4+1]=Cr[1],i[f*4+2]=Cr[2],i[f*4+3]=y.dot(Ze,o[f])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new Y.Uint32Array(this.indices));for(var r=this.attributes,t=this.indices,e=this.getEnabledAttributes(),n={},i=0;i<e.length;i++){var a=e[i];n[a]=r[a].value,r[a].init(this.indices.length)}for(var s=0,o=0;o<t.length;o++){for(var f=t[o],i=0;i<e.length;i++)for(var a=e[i],u=r[a].value,c=r[a].size,l=0;l<c;l++)u[s*c+l]=n[a][f*c+l];t[o]=s,s++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var r=this.attributes,t=r.barycentric.value,e=this.indices;if(!(t&&t.length===e.length*3)){t=r.barycentric.value=new Float32Array(e.length*3);for(var n=0;n<(e?e.length:this.vertexCount/3);)for(var i=0;i<3;i++){var a=e?e[n++]:n*3+i;t[a*3+i]=1}this.dirty()}}},applyTransform:function(r){var t=this.attributes,e=t.position.value,n=t.normal.value,i=t.tangent.value;r=r.array;var a=R.create();R.invert(a,r),R.transpose(a,a);var s=y.transformMat4,o=y.forEach;o(e,3,0,null,s,r),n&&o(n,3,0,null,s,a),i&&o(i,4,0,null,s,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(r){var t=this._cache;t.use(r.__uid__);var e=t.get("chunks");if(e)for(var n=0;n<e.length;n++){for(var i=e[n],a=0;a<i.attributeBuffers.length;a++){var s=i.attributeBuffers[a];r.gl.deleteBuffer(s.buffer)}i.indicesBuffer&&r.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var o=r.getGLExtension("OES_vertex_array_object");for(var f in this.__vaoCache){var u=this.__vaoCache[f].vao;u&&o.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(r.__uid__)}});br.STATIC_DRAW=mr.STATIC_DRAW;br.DYNAMIC_DRAW=mr.DYNAMIC_DRAW;br.STREAM_DRAW=mr.STREAM_DRAW;br.AttributeBuffer=mr.AttributeBuffer;br.IndicesBuffer=mr.IndicesBuffer;br.Attribute=wr;const Pa=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`;var Mr="uniform vec3 ",Lt="uniform float ",dt="@export clay.header.",vt="@end",fr=":unconfigurable;";const Da=[dt+"directional_light",Mr+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+fr,Mr+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+fr,vt,dt+"ambient_light",Mr+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+fr,vt,dt+"ambient_sh_light",Mr+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+fr,Mr+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+fr,Pa,vt,dt+"ambient_cubemap_light",Mr+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+fr,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+fr,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+fr,vt,dt+"point_light",Mr+"pointLightPosition[POINT_LIGHT_COUNT]"+fr,Lt+"pointLightRange[POINT_LIGHT_COUNT]"+fr,Mr+"pointLightColor[POINT_LIGHT_COUNT]"+fr,vt,dt+"spot_light",Mr+"spotLightPosition[SPOT_LIGHT_COUNT]"+fr,Mr+"spotLightDirection[SPOT_LIGHT_COUNT]"+fr,Lt+"spotLightRange[SPOT_LIGHT_COUNT]"+fr,Lt+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+fr,Lt+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+fr,Lt+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+fr,Mr+"spotLightColor[SPOT_LIGHT_COUNT]"+fr,vt].join(`
`);H.import(Da);var Lr=Or.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var r=Or.prototype.clone.call(this);return r.color=Array.prototype.slice.call(this.color),r.intensity=this.intensity,r.castShadow=this.castShadow,r.shadowResolution=this.shadowResolution,r}}),Dt=function(r,t){this.normal=r||new A(0,1,0),this.distance=t||0};Dt.prototype={constructor:Dt,distanceToPoint:function(r){return y.dot(r.array,this.normal.array)-this.distance},projectPoint:function(r,t){t||(t=new A);var e=this.distanceToPoint(r);return y.scaleAndAdd(t.array,r.array,this.normal.array,-e),t._dirty=!0,t},normalize:function(){var r=1/y.len(this.normal.array);y.scale(this.normal.array,r),this.distance*=r},intersectFrustum:function(r){for(var t=r.vertices,e=this.normal.array,n=y.dot(t[0].array,e)>this.distance,i=1;i<8;i++)if(y.dot(t[i].array,e)>this.distance!=n)return!0},intersectLine:function(){var r=y.create();return function(t,e,n){var i=this.distanceToPoint(t),a=this.distanceToPoint(e);if(i>0&&a>0||i<0&&a<0)return null;var s=this.normal.array,o=this.distance,f=t.array;y.sub(r,e.array,t.array),y.normalize(r,r);var u=y.dot(s,r);if(u===0)return null;n||(n=new A);var c=(y.dot(s,f)-o)/u;return y.scaleAndAdd(n.array,f,r,-c),n._dirty=!0,n}}(),applyTransform:function(){var r=R.create(),t=x.create(),e=x.create();return e[3]=1,function(n){n=n.array,y.scale(e,this.normal.array,this.distance),x.transformMat4(e,e,n),this.distance=y.dot(e,this.normal.array),R.invert(r,n),R.transpose(r,r),t[3]=0,y.copy(t,this.normal.array),x.transformMat4(t,t,r),y.copy(this.normal.array,t)}}(),copy:function(r){y.copy(this.normal.array,r.normal.array),this.normal._dirty=!0,this.distance=r.distance},clone:function(){var r=new Dt;return r.copy(this),r}};var ir=y.set,bn=y.copy,Pn=y.transformMat4,Re=Math.min,Me=Math.max,We=function(){this.planes=[];for(var r=0;r<6;r++)this.planes.push(new Dt);this.boundingBox=new Tr,this.vertices=[];for(var r=0;r<8;r++)this.vertices[r]=y.fromValues(0,0,0)};We.prototype={setFromProjection:function(r){var t=this.planes,e=r.array,n=e[0],i=e[1],a=e[2],s=e[3],o=e[4],f=e[5],u=e[6],c=e[7],l=e[8],d=e[9],h=e[10],v=e[11],_=e[12],m=e[13],p=e[14],T=e[15];ir(t[0].normal.array,s-n,c-o,v-l),t[0].distance=-(T-_),t[0].normalize(),ir(t[1].normal.array,s+n,c+o,v+l),t[1].distance=-(T+_),t[1].normalize(),ir(t[2].normal.array,s+i,c+f,v+d),t[2].distance=-(T+m),t[2].normalize(),ir(t[3].normal.array,s-i,c-f,v-d),t[3].distance=-(T-m),t[3].normalize(),ir(t[4].normal.array,s-a,c-u,v-h),t[4].distance=-(T-p),t[4].normalize(),ir(t[5].normal.array,s+a,c+u,v+h),t[5].distance=-(T+p),t[5].normalize();var g=this.boundingBox,E=this.vertices;if(T===0){var S=f/n,N=-p/(h-1),D=-p/(h+1),w=-D/f,O=-N/f;g.min.set(-w*S,-w,D),g.max.set(w*S,w,N),ir(E[0],-w*S,-w,D),ir(E[1],-w*S,w,D),ir(E[2],w*S,-w,D),ir(E[3],w*S,w,D),ir(E[4],-O*S,-O,N),ir(E[5],-O*S,O,N),ir(E[6],O*S,-O,N),ir(E[7],O*S,O,N)}else{var U=(-1-_)/n,b=(1-_)/n,k=(1-m)/f,X=(-1-m)/f,F=(-1-p)/h,Q=(1-p)/h;g.min.set(Math.min(U,b),Math.min(X,k),Math.min(Q,F)),g.max.set(Math.max(b,U),Math.max(k,X),Math.max(F,Q));var q=g.min.array,tr=g.max.array;ir(E[0],q[0],q[1],q[2]),ir(E[1],q[0],tr[1],q[2]),ir(E[2],tr[0],q[1],q[2]),ir(E[3],tr[0],tr[1],q[2]),ir(E[4],q[0],q[1],tr[2]),ir(E[5],q[0],tr[1],tr[2]),ir(E[6],tr[0],q[1],tr[2]),ir(E[7],tr[0],tr[1],tr[2])}},getTransformedBoundingBox:function(){var r=y.create();return function(t,e){var n=this.vertices,i=e.array,a=t.min,s=t.max,o=a.array,f=s.array,u=n[0];Pn(r,u,i),bn(o,r),bn(f,r);for(var c=1;c<8;c++)u=n[c],Pn(r,u,i),o[0]=Re(r[0],o[0]),o[1]=Re(r[1],o[1]),o[2]=Re(r[2],o[2]),f[0]=Me(r[0],f[0]),f[1]=Me(r[1],f[1]),f[2]=Me(r[2],f[2]);return a._dirty=!0,s._dirty=!0,t}}()};var xt=Or.extend(function(){return{projectionMatrix:new P,invProjectionMatrix:new P,viewMatrix:new P,frustum:new We}},function(){this.update(!0)},{update:function(r){Or.prototype.update.call(this,r),P.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),P.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(r){P.copy(this.viewMatrix,r),P.invert(this.worldTransform,r),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(r){P.copy(this.projectionMatrix,r),P.invert(this.invProjectionMatrix,r),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var r=x.create();return function(t,e){var n=e!==void 0?e:new nt,i=t.array[0],a=t.array[1];return x.set(r,i,a,-1,1),x.transformMat4(r,r,this.invProjectionMatrix.array),x.transformMat4(r,r,this.worldTransform.array),y.scale(n.origin.array,r,1/r[3]),x.set(r,i,a,1,1),x.transformMat4(r,r,this.invProjectionMatrix.array),x.transformMat4(r,r,this.worldTransform.array),y.scale(r,r,1/r[3]),y.sub(n.direction.array,r,n.origin.array),y.normalize(n.direction.array,n.direction.array),n.direction._dirty=!0,n.origin._dirty=!0,n}}()}),Ba=R.create(),Dn=R.create(),Ne={};function Ua(r){var t=[],e=Object.keys(r);e.sort();for(var n=0;n<e.length;n++){var i=e[n];t.push(i+" "+r[i])}var a=t.join(`
`);if(Ne[a])return Ne[a];var s=cr.genGUID();return Ne[a]=s,s}function oe(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}oe.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};oe.prototype.add=function(r,t){t?this.transparent[this._transparentCount++]=r:this.opaque[this._opaqueCount++]=r};oe.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var ot=Or.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new Tr,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new at(20)}},function(){this._scene=this},{addToScene:function(r){r instanceof xt?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(r)):r instanceof Lr&&this.lights.push(r),r.name&&(this._nodeRepository[r.name]=r)},removeFromScene:function(r){var t;r instanceof xt?(t=this._cameraList.indexOf(r),t>=0&&this._cameraList.splice(t,1)):r instanceof Lr&&(t=this.lights.indexOf(r),t>=0&&this.lights.splice(t,1)),r.name&&delete this._nodeRepository[r.name]},getNode:function(r){return this._nodeRepository[r]},setMainCamera:function(r){var t=this._cameraList.indexOf(r);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(r)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var r=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},e=0;e<r.length;e++){var n=r[e];if(!n.invisible){var i=n.group;t[i]||(t[i]={}),t[i][n.type]=t[i][n.type]||0,t[i][n.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=Ua(t[a]);this._updateLightUniforms()},cloneNode:function(r){var t=r.clone(),e={};function n(i,a){e[i.__uid__]=a;for(var s=0;s<i._children.length;s++){var o=i._children[s],f=a._children[s];n(o,f)}}return n(r,t),t.traverse(function(i){i.skeleton&&(i.skeleton=i.skeleton.clone(e)),i.material&&(i.material=i.material.clone())}),t},updateRenderList:function(r,t){var e=r.__uid__,n=this._renderLists.get(e);n||(n=new oe,this._renderLists.put(e,n)),n.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var i=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,r,i,n,t),n.endCount(),n},getRenderList:function(r){return this._renderLists.get(r.__uid__)},_doUpdateRenderList:function(r,t,e,n,i){if(!r.invisible)for(var a=0;a<r._children.length;a++){var s=r._children[a];if(s.isRenderable()){var o=s.isSkinnedMesh()?Ba:s.worldTransform.array,f=s.geometry;R.multiplyAffine(Dn,t.viewMatrix.array,o),(i&&!f.boundingBox||!this.isFrustumCulled(s,t,Dn))&&n.add(s,s.material.transparent||e)}s._children.length>0&&this._doUpdateRenderList(s,t,e,n,i)}},isFrustumCulled:function(){var r=new Tr,t=new P;return function(e,n,i){var a=e.boundingBox;if(a||(e.skeleton&&e.skeleton.boundingBox?a=e.skeleton.boundingBox:a=e.geometry.boundingBox),!a)return!1;if(t.array=i,r.transformFrom(a,t),e.castShadow&&this.viewBoundingBoxLastFrame.union(r),e.frustumCulling){if(!r.intersectBoundingBox(n.frustum.boundingBox))return!0;t.array=n.projectionMatrix.array,r.max.array[2]>0&&r.min.array[2]<0&&(r.max.array[2]=-1e-20),r.applyProjection(t);var s=r.min.array,o=r.max.array;if(o[0]<-1||s[0]>1||o[1]<-1||s[1]>1||o[2]<-1||s[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var r=this.lights;r.sort(Fa);var t=this._lightUniforms;for(var e in t)for(var n in t[e])t[e][n].value.length=0;for(var i=0;i<r.length;i++){var a=r[i];if(!a.invisible){var e=a.group;for(var n in a.uniformTemplates){var s=a.uniformTemplates[n],o=s.value(a);if(o!=null){t[e]||(t[e]={}),t[e][n]||(t[e][n]={type:"",value:[]});var f=t[e][n];switch(f.type=s.type+"v",s.type){case"1i":case"1f":case"t":f.value.push(o);break;case"2f":case"3f":case"4f":for(var u=0;u<o.length;u++)f.value.push(o[u]);break;default:console.error("Unkown light uniform type "+s.type)}}}}}},getLightGroups:function(){var r=[];for(var t in this._lightNumber)r.push(t);return r},getNumberChangedLightGroups:function(){var r=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&r.push(t);return r},isLightNumberChanged:function(r){var t=this._previousLightNumber,e=this._lightNumber;for(var n in e[r])if(!t[r]||e[r][n]!==t[r][n])return!0;for(var n in t[r])if(!e[r]||e[r][n]!==t[r][n])return!0;return!1},getLightsNumbers:function(r){return this._lightNumber[r]},getProgramKey:function(r){return this._lightProgramKeys[r]},setLightUniforms:function(){function r(t,e,n){for(var i in t){var a=t[i];if(a.type==="tv"){if(!e.hasUniform(i))continue;for(var s=[],o=0;o<a.value.length;o++){var f=a.value[o],u=e.takeCurrentTextureSlot(n,f);s.push(u)}e.setUniform(n.gl,"1iv",i,s)}else e.setUniform(n.gl,a.type,i,a.value)}}return function(t,e,n){r(this._lightUniforms[e],t,n),r(this.shadowUniforms,t,n)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function Fa(r,t){if(t.castShadow&&!r.castShadow)return!0}var jt=Ft.isPowerOfTwo,Ga=["px","nx","py","ny","pz","nz"],Ut=C.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(r){var t=r.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(r);var e=this.format,n=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var i=r.getGLExtension("EXT_texture_filter_anisotropic");if(i&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var a=r.getGLExtension("OES_texture_half_float");a||(n=I.FLOAT)}if(this.mipmaps.length)for(var s=this.width,o=this.height,f=0;f<this.mipmaps.length;f++){var u=this.mipmaps[f];this._updateTextureData(t,u,f,s,o,e,n),s/=2,o/=2}else this._updateTextureData(t,this,0,this.width,this.height,e,n),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(r,t,e,n,i,a,s){for(var o=0;o<6;o++){var f=Ga[o],u=t.image&&t.image[f];u?r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+o,e,a,a,s,u):r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+o,e,a,n,i,0,a,s,t.pixels&&t.pixels[f])}},generateMipmap:function(r){var t=r.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(r){r.gl.bindTexture(r.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(r))},unbind:function(r){r.gl.bindTexture(r.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?jt(this.image.px.width)&&jt(this.image.px.height):jt(this.width)&&jt(this.height)},isRenderable:function(){return this.image.px?_t(this.image.px)&&_t(this.image.nx)&&_t(this.image.py)&&_t(this.image.ny)&&_t(this.image.pz)&&_t(this.image.nz):!!(this.width&&this.height)},load:function(r,t){var e=0,n=this;return cr.each(r,function(i,a){var s=Y.createImage();t&&(s.crossOrigin=t),s.onload=function(){e--,e===0&&(n.dirty(),n.trigger("success",n))},s.onerror=function(){e--},e++,s.src=i,n.image[a]=s}),this}});Object.defineProperty(Ut.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(r){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==r&&this.dirty(),this._width=r)}});Object.defineProperty(Ut.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(r){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==r&&this.dirty(),this._height=r)}});function _t(r){return r.width>0&&r.height>0}var Xr=xt.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var r=this.fov/180*Math.PI;this.projectionMatrix.perspective(r,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var r=this.projectionMatrix.array,t=Math.atan(1/r[5])*2;this.fov=t/Math.PI*180,this.aspect=r[5]/r[0],this.near=r[14]/(r[10]-1),this.far=r[14]/(r[10]+1)},clone:function(){var r=xt.prototype.clone.call(this);return r.fov=this.fov,r.aspect=this.aspect,r.near=this.near,r.far=this.far,r}}),Kt="framebuffer",Ur="renderbuffer",Bn=Ur+"_width",Un=Ur+"_height",Ie=Ur+"_attached",Se="depthtexture_attached",Qr=I.FRAMEBUFFER,Ct=I.RENDERBUFFER,bt=I.DEPTH_ATTACHMENT,ei=I.COLOR_ATTACHMENT0,Wr=xr.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Et,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(r){if(r.__currentFrameBuffer){if(r.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}r.__currentFrameBuffer=this;var t=r.gl;t.bindFramebuffer(Qr,this._getFrameBufferGL(r)),this._boundRenderer=r;var e=this._cache;e.put("viewport",r.viewport);var n=!1,i,a;for(var s in this._textures){n=!0;var o=this._textures[s];o&&(i=o.texture.width,a=o.texture.height,this._doAttach(r,o.texture,s,o.target))}this._width=i,this._height=a,!n&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?r.setViewport(this.viewport):r.setViewport(0,0,i,a,1);var f=e.get("attached_textures");if(f){for(var s in f)if(!this._textures[s]){var u=f[s];this._doDetach(t,s,u)}}if(!e.get(Se)&&this.depthBuffer){e.miss(Ur)&&e.put(Ur,t.createRenderbuffer());var c=e.get(Ur);(i!==e.get(Bn)||a!==e.get(Un))&&(t.bindRenderbuffer(Ct,c),t.renderbufferStorage(Ct,t.DEPTH_COMPONENT16,i,a),e.put(Bn,i),e.put(Un,a),t.bindRenderbuffer(Ct,null)),e.get(Ie)||(t.framebufferRenderbuffer(Qr,bt,Ct,c),e.put(Ie,!0))}},unbind:function(r){r.__currentFrameBuffer=null;var t=r.gl;t.bindFramebuffer(Qr,null),this._boundRenderer=null,this._cache.use(r.__uid__);var e=this._cache.get("viewport");e&&r.setViewport(e),this.updateMipmap(r)},updateMipmap:function(r){var t=r.gl;for(var e in this._textures){var n=this._textures[e];if(n){var i=n.texture;if(!i.NPOT&&i.useMipmap&&i.minFilter===C.LINEAR_MIPMAP_LINEAR){var a=i.textureType==="textureCube"?I.TEXTURE_CUBE_MAP:I.TEXTURE_2D;t.bindTexture(a,i.getWebGLTexture(r)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(r){return r.checkFramebufferStatus(Qr)},_getFrameBufferGL:function(r){var t=this._cache;return t.use(r.__uid__),t.miss(Kt)&&t.put(Kt,r.gl.createFramebuffer()),t.get(Kt)},attach:function(r,t,e){if(!r.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||ei,e=e||I.TEXTURE_2D;var n=this._boundRenderer,i=n&&n.gl,a;if(i){var s=this._cache;s.use(n.__uid__),a=s.get("attached_textures")}var o=this._textures[t];if(!(o&&o.target===e&&o.texture===r&&a&&a[t]!=null)){var f=!0;n&&(f=this._doAttach(n,r,t,e),this.viewport||n.setViewport(0,0,r.width,r.height,1)),f&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=r,this._textures[t].target=e)}},_doAttach:function(r,t,e,n){var i=r.gl,a=t.getWebGLTexture(r),s=this._cache.get("attached_textures");if(s&&s[e]){var o=s[e];if(o.texture===t&&o.target===n)return}e=+e;var f=!0;if(e===bt||e===I.DEPTH_STENCIL_ATTACHMENT){var u=r.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),f=!1),t.format!==I.DEPTH_COMPONENT&&t.format!==I.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),f=!1),f){var c=this._cache.get(Ur);c&&(i.framebufferRenderbuffer(Qr,bt,Ct,null),i.deleteRenderbuffer(c),this._cache.put(Ur,!1)),this._cache.put(Ie,!1),this._cache.put(Se,!0)}}return i.framebufferTexture2D(Qr,e,n,a,0),s||(s={},this._cache.put("attached_textures",s)),s[e]=s[e]||{},s[e].texture=t,s[e].target=n,f},_doDetach:function(r,t,e){r.framebufferTexture2D(Qr,t,e,null,0);var n=this._cache.get("attached_textures");n&&n[t]&&(n[t]=null),(t===bt||t===I.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Se,!1)},detach:function(r,t){if(this._textures[r]=null,this._boundRenderer){var e=this._cache;e.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,r,t)}},dispose:function(r){var t=r.gl,e=this._cache;e.use(r.__uid__);var n=e.get(Ur);n&&t.deleteRenderbuffer(n);var i=e.get(Kt);i&&t.deleteFramebuffer(i),e.deleteContext(r.__uid__),this._textures={}}});Wr.DEPTH_ATTACHMENT=bt;Wr.COLOR_ATTACHMENT0=ei;Wr.STENCIL_ATTACHMENT=I.STENCIL_ATTACHMENT;Wr.DEPTH_STENCIL_ATTACHMENT=I.DEPTH_STENCIL_ATTACHMENT;var Va=["px","nx","py","ny","pz","nz"],ze=xr.extend(function(){var r={position:new A,far:1e3,near:.1,texture:null,shadowMapPass:null},t=r._cameras={px:new Xr({fov:90}),nx:new Xr({fov:90}),py:new Xr({fov:90}),ny:new Xr({fov:90}),pz:new Xr({fov:90}),nz:new Xr({fov:90})};return t.px.lookAt(A.POSITIVE_X,A.NEGATIVE_Y),t.nx.lookAt(A.NEGATIVE_X,A.NEGATIVE_Y),t.py.lookAt(A.POSITIVE_Y,A.POSITIVE_Z),t.ny.lookAt(A.NEGATIVE_Y,A.NEGATIVE_Z),t.pz.lookAt(A.POSITIVE_Z,A.NEGATIVE_Y),t.nz.lookAt(A.NEGATIVE_Z,A.NEGATIVE_Y),r._frameBuffer=new Wr,r},{getCamera:function(r){return this._cameras[r]},render:function(r,t,e){var n=r.gl;e||t.update();for(var i=this.texture.width,a=2*Math.atan(i/(i-.5))/Math.PI*180,s=0;s<6;s++){var o=Va[s],f=this._cameras[o];if(A.copy(f.position,this.position),f.far=this.far,f.near=this.near,f.fov=a,this.shadowMapPass){f.update();var u=t.getBoundingBox();u.applyTransform(f.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(r,t,f,!0)}this._frameBuffer.attach(this.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+s),this._frameBuffer.bind(r),r.render(t,f,!0),this._frameBuffer.unbind(r)}},dispose:function(r){this._frameBuffer.dispose(r)}}),Ye=br.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var r=this.heightSegments,t=this.widthSegments,e=this.attributes,n=[],i=[],a=[],s=[],o=0;o<=r;o++)for(var f=o/r,u=0;u<=t;u++){var c=u/t;if(n.push([2*c-1,2*f-1,0]),i.push([c,f]),a.push([0,0,1]),u<t&&o<r){var l=u+o*(t+1);s.push([l,l+1,l+t+1]),s.push([l+t+1,l+1,l+t+2])}}e.position.fromArray(n),e.texcoord0.fromArray(i),e.normal.fromArray(a),this.initIndicesFromArray(s),this.boundingBox=new Tr,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),nr=new P,ni=br.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var r={px:yt("px",this.depthSegments,this.heightSegments),nx:yt("nx",this.depthSegments,this.heightSegments),py:yt("py",this.widthSegments,this.depthSegments),ny:yt("ny",this.widthSegments,this.depthSegments),pz:yt("pz",this.widthSegments,this.heightSegments),nz:yt("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],e=0,n=0;for(var i in r)e+=r[i].vertexCount,n+=r[i].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(e);this.indices=new Y.Uint16Array(n);var s=0,o=0;for(var i in r){for(var f=r[i],a=0;a<t.length;a++)for(var u=t[a],c=f.attributes[u].value,l=f.attributes[u].size,d=u==="normal",h=0;h<c.length;h++){var v=c[h];this.inside&&d&&(v=-v),this.attributes[u].value[h+l*o]=v}for(var _=f.indices.length,h=0;h<f.indices.length;h++)this.indices[h+s]=o+f.indices[this.inside?_-h-1:h];s+=f.indices.length,o+=f.vertexCount}this.boundingBox=new Tr,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function yt(r,t,e){nr.identity();var n=new Ye({widthSegments:t,heightSegments:e});switch(r){case"px":P.translate(nr,nr,A.POSITIVE_X),P.rotateY(nr,nr,Math.PI/2);break;case"nx":P.translate(nr,nr,A.NEGATIVE_X),P.rotateY(nr,nr,-Math.PI/2);break;case"py":P.translate(nr,nr,A.POSITIVE_Y),P.rotateX(nr,nr,-Math.PI/2);break;case"ny":P.translate(nr,nr,A.NEGATIVE_Y),P.rotateX(nr,nr,Math.PI/2);break;case"pz":P.translate(nr,nr,A.POSITIVE_Z);break;case"nz":P.translate(nr,nr,A.NEGATIVE_Z),P.rotateY(nr,nr,Math.PI);break}return n.applyTransform(nr),n}const Ha=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;H.import(Ha);var ie=pr.extend(function(){var r=new H({vertex:H.source("clay.skybox.vertex"),fragment:H.source("clay.skybox.fragment")}),t=new st({shader:r,depthMask:!1});return{scene:null,geometry:new ni,material:t,environmentMap:null,culling:!1,_dummyCamera:new Xr}},function(){var r=this.scene;r&&this.attachScene(r),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(r){this.scene&&this.detachScene(),r.skybox=this,this.scene=r,r.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(r){this.detachScene(),this.geometry.dispose(r)},setEnvironmentMap:function(r){r.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),r.minFilter=C.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",r)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(r,t,e){this.renderSkybox(r,e)},renderSkybox:function(r,t){var e=this._dummyCamera;e.aspect=r.getViewportAspect(),e.fov=t.fov||50,e.updateProjectionMatrix(),P.invert(e.invProjectionMatrix,e.projectionMatrix),e.worldTransform.copy(t.worldTransform),e.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),r.gl.disable(r.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),r.renderPass([this],e)}}),Xa=542327876,ka=131072,Wa=512,za=4;function qe(r){return r.charCodeAt(0)+(r.charCodeAt(1)<<8)+(r.charCodeAt(2)<<16)+(r.charCodeAt(3)<<24)}var Ya=31,qa=qe("DXT1"),Za=qe("DXT3"),ja=qe("DXT5"),Ka=0,Ja=1,Qa=2,$a=3,rs=4,ts=7,es=20,ns=21,is=28,as={parse:function(r,t){var e=new Int32Array(r,0,Ya);if(e[Ka]!==Xa||!e(es)&za)return null;var n=e(ns),i=e[rs],a=e[$a],s=e[is]&Wa,o=e[Qa]&ka,f,u;switch(n){case qa:f=8,u=C.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Za:f=16,u=C.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ja:f=16,u=C.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var c=e[Ja]+4,l=s?6:1,d=1;o&&(d=Math.max(1,e[ts]));for(var h=[],v=0;v<l;v++){var _=i,m=a;h[v]=new lr({width:_,height:m,format:u});for(var p=[],T=0;T<d;T++){var g=Math.max(4,_)/4*Math.max(4,m)/4*f,E=new Uint8Array(r,c,g);c+=g,_*=.5,m*=.5,p[T]=E}h[v].pixels=p[0],o&&(h[v].mipmaps=p)}if(t)t.width=h[0].width,t.height=h[0].height,t.format=h[0].format,t.pixels=h[0].pixels,t.mipmaps=h[0].mipmaps;else return h[0]}},ne=String.fromCharCode,ss=8,os=32767;function fs(r,t,e,n){if(r[3]>0){var i=Math.pow(2,r[3]-128-8+n);t[e+0]=r[0]*i,t[e+1]=r[1]*i,t[e+2]=r[2]*i}else t[e+0]=0,t[e+1]=0,t[e+2]=0;return t[e+3]=1,t}function us(r,t,e){for(var n="",i=t;i<e;i++)n+=ne(r[i]);return n}function cs(r,t){t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3]}function Fn(r,t,e,n){for(var i=0,a=0,s=n;s>0;)if(r[a][0]=t[e++],r[a][1]=t[e++],r[a][2]=t[e++],r[a][3]=t[e++],r[a][0]===1&&r[a][1]===1&&r[a][2]===1){for(var o=r[a][3]<<i>>>0;o>0;o--)cs(r[a-1],r[a]),a++,s--;i+=8}else a++,s--,i=0;return e}function hs(r,t,e,n){if(n<ss|n>os)return Fn(r,t,e,n);var i=t[e++];if(i!=2)return Fn(r,t,e-1,n);if(r[0][1]=t[e++],r[0][2]=t[e++],i=t[e++],(r[0][2]<<8>>>0|i)>>>0!==n)return null;for(var i=0;i<4;i++)for(var a=0;a<n;){var s=t[e++];if(s>128){s=(s&127)>>>0;for(var o=t[e++];s--;)r[a++][i]=o}else for(;s--;)r[a++][i]=t[e++]}return e}var ls={parseRGBE:function(r,t,e){e==null&&(e=0);var n=new Uint8Array(r),i=n.length;if(us(n,0,2)==="#?"){for(var a=2;a<i&&!(ne(n[a])===`
`&&ne(n[a+1])===`
`);a++);if(!(a>=i)){a+=2;for(var s="";a<i;a++){var o=ne(n[a]);if(o===`
`)break;s+=o}var f=s.split(" "),u=parseInt(f[1]),c=parseInt(f[3]);if(!(!c||!u)){for(var l=a+1,d=[],h=0;h<c;h++){d[h]=[];for(var v=0;v<4;v++)d[h][v]=0}for(var _=new Float32Array(c*u*4),m=0,p=0;p<u;p++){var l=hs(d,n,l,c);if(!l)return null;for(var h=0;h<c;h++)fs(d[h],_,m,e),m+=4}return t||(t=new lr),t.width=c,t.height=u,t.pixels=_,t.type=C.FLOAT,t}}}},parseRGBEFromPNG:function(r){}},it={loadTexture:function(r,t,e,n){var i;if(typeof t=="function"?(e=t,n=e,t={}):t=t||{},typeof r=="string"){if(r.match(/.hdr$/)||t.fileType==="hdr")return i=new lr({width:0,height:0,sRGB:!1}),it._fetchTexture(r,function(a){ls.parseRGBE(a,i,t.exposure),i.dirty(),e&&e(i)},n),i;r.match(/.dds$/)||t.fileType==="dds"?(i=new lr({width:0,height:0}),it._fetchTexture(r,function(a){as.parse(a,i),i.dirty(),e&&e(i)},n)):(i=new lr,i.load(r),i.success(e),i.error(n))}else typeof r=="object"&&typeof r.px<"u"&&(i=new Ut,i.load(r),i.success(e),i.error(n));return i},loadPanorama:function(r,t,e,n,i,a){var s=this;typeof n=="function"?(i=n,a=i,n={}):n=n||{},it.loadTexture(t,n,function(o){o.flipY=n.flipY||!1,s.panoramaToCubeMap(r,o,e,n),o.dispose(r),i&&i(e)},a)},panoramaToCubeMap:function(r,t,e,n){var i=new ze,a=new ie({scene:new ot});return a.setEnvironmentMap(t),n=n||{},n.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),e.sRGB=t.sRGB,i.texture=e,i.render(r,a.scene),i.texture=null,i.dispose(r),e},heightToNormal:function(r,t){var e=document.createElement("canvas"),n=e.width=r.width,i=e.height=r.height,a=e.getContext("2d");a.drawImage(r,0,0,n,i),t=t||!1;for(var s=a.getImageData(0,0,n,i),o=a.createImageData(n,i),f=0;f<s.data.length;f+=4){if(t){var u=s.data[f],c=s.data[f+1],l=s.data[f+2],d=Math.abs(u-c)+Math.abs(c-l);if(d>20)return console.warn("Given image is not a height map"),r}var h,v,_,m;f%(n*4)===0?(h=s.data[f],_=s.data[f+4]):f%(n*4)===(n-1)*4?(h=s.data[f-4],_=s.data[f]):(h=s.data[f-4],_=s.data[f+4]),f<n*4?(v=s.data[f],m=s.data[f+n*4]):f>n*(i-1)*4?(v=s.data[f-n*4],m=s.data[f]):(v=s.data[f-n*4],m=s.data[f+n*4]),o.data[f]=h-_+127,o.data[f+1]=v-m+127,o.data[f+2]=255,o.data[f+3]=255}return a.putImageData(o,0,0),e},isHeightImage:function(r,t,e){if(!r||!r.width||!r.height)return!1;var n=document.createElement("canvas"),i=n.getContext("2d"),a=t||32;e=e||20,n.width=n.height=a,i.drawImage(r,0,0,a,a);for(var s=i.getImageData(0,0,a,a),o=0;o<s.data.length;o+=4){var f=s.data[o],u=s.data[o+1],c=s.data[o+2],l=Math.abs(f-u)+Math.abs(u-c);if(l>e)return!1}return!0},_fetchTexture:function(r,t,e){Y.request.get({url:r,responseType:"arraybuffer",onload:t,onerror:e})},createChessboard:function(r,t,e,n){r=r||512,t=t||64,e=e||"black",n=n||"white";var i=Math.ceil(r/t),a=document.createElement("canvas");a.width=r,a.height=r;var s=a.getContext("2d");s.fillStyle=n,s.fillRect(0,0,r,r),s.fillStyle=e;for(var o=0;o<i;o++)for(var f=0;f<i;f++){var u=f%2?o%2:o%2-1;u&&s.fillRect(o*t,f*t,t,t)}var c=new lr({image:a,anisotropic:8});return c},createBlank:function(r){var t=document.createElement("canvas");t.width=1,t.height=1;var e=t.getContext("2d");e.fillStyle=r,e.fillRect(0,0,1,1);var n=new lr({image:t});return n}},Fe=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function Ge(r){return"_on"+r}var Ve=function(r){var t=this;this._texture=new lr({anisotropic:32,flipY:!1,surface:this,dispose:function(e){t.dispose(),lr.prototype.dispose.call(this,e)}}),Fe.forEach(function(e){this[Ge(e)]=function(n){n.triangle&&this._meshes.forEach(function(i){this.dispatchEvent(e,i,n.triangle,n.point)},this)}},this),this._meshes=[],r&&this.setECharts(r),this.onupdate=null};Ve.prototype={constructor:Ve,getTexture:function(){return this._texture},setECharts:function(r){this._chart=r;var t=r.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var e=this,n=r.getZr(),i=n.__oldRefreshImmediately||n.refreshImmediately;n.refreshImmediately=function(){i.call(this),e._texture.dirty(),e.onupdate&&e.onupdate()},n.__oldRefreshImmediately=i}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var r=new A,t=new A,e=new A,n=new V,i=new V,a=new V,s=new V,o=new A;return function(f,u,c,l){var d=u.geometry,h=d.attributes.position,v=d.attributes.texcoord0,_=A.dot,m=A.cross;h.get(c[0],r.array),h.get(c[1],t.array),h.get(c[2],e.array),v.get(c[0],n.array),v.get(c[1],i.array),v.get(c[2],a.array),m(o,t,e);var p=_(r,o),T=_(l,o)/p;m(o,e,r);var g=_(l,o)/p;m(o,r,t);var E=_(l,o)/p;V.scale(s,n,T),V.scaleAndAdd(s,s,i,g),V.scaleAndAdd(s,s,a,E);var S=s.x*this._chart.getWidth(),N=s.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(f,{zrX:S,zrY:N})}}(),attachToMesh:function(r){this._meshes.indexOf(r)>=0||(Fe.forEach(function(t){r.on(t,this[Ge(t)],this)},this),this._meshes.push(r))},detachFromMesh:function(r){var t=this._meshes.indexOf(r);t>=0&&this._meshes.splice(t,1),Fe.forEach(function(e){r.off(e,this[Ge(e)])},this)},dispose:function(){this._meshes.forEach(function(r){this.detachFromMesh(r)},this)}};var ii=xt.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var r=this.projectionMatrix.array;this.left=(-1-r[12])/r[0],this.right=(1-r[12])/r[0],this.top=(1-r[13])/r[5],this.bottom=(-1-r[13])/r[5],this.near=-(-1-r[14])/r[10],this.far=-(1-r[14])/r[10]},clone:function(){var r=xt.prototype.clone.call(this);return r.left=this.left,r.right=this.right,r.near=this.near,r.far=this.far,r.top=this.top,r.bottom=this.bottom,r}});const ds=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;H.import(ds);var vs=new Ye,Gn=new pr({geometry:vs,frustumCulling:!1}),_s=new ii,ys=xr.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var r=new H(H.source("clay.compositor.vertex"),this.fragment),t=new st({shader:r});t.enableTexturesAll(),this.material=t},{setUniform:function(r,t){this.material.setUniform(r,t)},getUniform:function(r){var t=this.material.uniforms[r];if(t)return t.value},attachOutput:function(r,t){this.outputs||(this.outputs={}),t=t||I.COLOR_ATTACHMENT0,this.outputs[t]=r},detachOutput:function(r){for(var t in this.outputs)this.outputs[t]===r&&(this.outputs[t]=null)},bind:function(r,t){if(this.outputs)for(var e in this.outputs){var n=this.outputs[e];n&&t.attach(n,e)}t&&t.bind(r)},unbind:function(r,t){t.unbind(r)},render:function(r,t){var e=r.gl;if(t){this.bind(r,t);var n=r.getGLExtension("EXT_draw_buffers");if(n&&this.outputs){var i=[];for(var a in this.outputs)a=+a,a>=e.COLOR_ATTACHMENT0&&a<=e.COLOR_ATTACHMENT0+8&&i.push(a);n.drawBuffersEXT(i)}}this.trigger("beforerender",this,r);var s=this.clearDepth?e.DEPTH_BUFFER_BIT:0;if(e.depthMask(!0),this.clearColor){s=s|e.COLOR_BUFFER_BIT,e.colorMask(!0,!0,!0,!0);var o=this.clearColor;Array.isArray(o)&&e.clearColor(o[0],o[1],o[2],o[3])}e.clear(s),this.blendWithPrevious?(e.enable(e.BLEND),this.material.transparent=!0):(e.disable(e.BLEND),this.material.transparent=!1),this.renderQuad(r),this.trigger("afterrender",this,r),t&&this.unbind(r,t)},renderQuad:function(r){Gn.material=this.material,r.renderPass([Gn],_s)},dispose:function(r){}});const ms=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,ps=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`;var Fr={},Le=["px","nx","py","ny","pz","nz"];Fr.prefilterEnvironmentMap=function(r,t,e,n,i){(!i||!n)&&(n=Fr.generateNormalDistribution(),i=Fr.integrateBRDF(r,n)),e=e||{};var a=e.width||64,s=e.height||64,o=e.type||t.type,f=new Ut({width:a,height:s,type:o,flipY:!1,mipmaps:[]});f.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,s),c=Math.log(u)/Math.log(2)+1,l=new st({shader:new H({vertex:H.source("clay.skybox.vertex"),fragment:ps})});l.set("normalDistribution",n),e.encodeRGBM&&l.define("fragment","RGBM_ENCODE"),e.decodeRGBM&&l.define("fragment","RGBM_DECODE");var d=new ot,h;if(t.textureType==="texture2D"){var v=new Ut({width:a,height:s,type:o===C.FLOAT?C.HALF_FLOAT:o});it.panoramaToCubeMap(r,t,v,{encodeRGBM:e.decodeRGBM}),t=v}h=new ie({scene:d,material:l}),h.material.set("environmentMap",t);var _=new ze({texture:f});e.encodeRGBM&&(o=f.type=C.UNSIGNED_BYTE);for(var m=new lr({width:a,height:s,type:o}),p=new Wr({depthBuffer:!1}),T=Y[o===C.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],g=0;g<c;g++){f.mipmaps[g]={pixels:{}},h.material.set("roughness",g/(c-1));for(var E=m.width,S=2*Math.atan(E/(E-.5))/Math.PI*180,N=0;N<Le.length;N++){var D=new T(m.width*m.height*4);p.attach(m),p.bind(r);var w=_.getCamera(Le[N]);w.fov=S,r.render(d,w),r.gl.readPixels(0,0,m.width,m.height,C.RGBA,o,D),p.unbind(r),f.mipmaps[g].pixels[Le[N]]=D}m.width/=2,m.height/=2,m.dirty()}return p.dispose(r),m.dispose(r),h.dispose(r),n.dispose(r),{environmentMap:f,brdfLookup:i,normalDistribution:n,maxMipmapLevel:c}};Fr.integrateBRDF=function(r,t){t=t||Fr.generateNormalDistribution();var e=new Wr({depthBuffer:!1}),n=new ys({fragment:ms}),i=new lr({width:512,height:256,type:C.HALF_FLOAT,wrapS:C.CLAMP_TO_EDGE,wrapT:C.CLAMP_TO_EDGE,minFilter:C.NEAREST,magFilter:C.NEAREST,useMipmap:!1});return n.setUniform("normalDistribution",t),n.setUniform("viewportSize",[512,256]),n.attachOutput(i),n.render(r,e),e.dispose(r),i};Fr.generateNormalDistribution=function(e,n){for(var e=e||256,n=n||1024,i=new lr({width:e,height:n,type:C.FLOAT,minFilter:C.NEAREST,magFilter:C.NEAREST,wrapS:C.CLAMP_TO_EDGE,wrapT:C.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(n*e*4),s=[],o=0;o<e;o++){for(var f=o/e,u=f*f,c=0;c<n;c++){var l=(c<<16|c>>>16)>>>0;l=((l&1431655765)<<1|(l&2863311530)>>>1)>>>0,l=((l&858993459)<<2|(l&3435973836)>>>2)>>>0,l=((l&252645135)<<4|(l&4042322160)>>>4)>>>0,l=(((l&16711935)<<8|(l&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-l)/(1+(u*u-1)*l));s[c]=d}for(var c=0;c<n;c++){var h=(c*e+o)*4,d=s[c],v=Math.sqrt(1-d*d),_=c/n,m=2*Math.PI*_;a[h]=v*Math.cos(m),a[h+1]=d,a[h+2]=v*Math.sin(m),a[h+3]=1}}return i.pixels=a,i};var gs=Lr.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(r,t){if(!r.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Fr.generateNormalDistribution(),this._brdfLookup=Fr.integrateBRDF(r,this._normalDistribution));var e=this.cubemap;if(!e.__prefiltered){var n=Fr.prefilterEnvironmentMap(r,e,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=n.environmentMap,this.cubemap.__prefiltered=!0,e.dispose(r)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}},ambientCubemapLightCubemap:{type:"t",value:function(r){return r.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(r){return r._brdfLookup}}}}),Es=Lr.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new Y.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}},ambientSHLightCoefficients:{type:"3f",value:function(r){for(var t=r._coefficientsTmpArr,e=0;e<r.coefficients.length;e++)t[e]=r.coefficients[e];return t}}}}),ai={},tt=["px","nx","py","ny","pz","nz"];function Ts(r,t){var e=r[0],n=r[1],i=r[2];return t===0?1:t===1?e:t===2?n:t===3?i:t===4?e*i:t===5?n*i:t===6?e*n:t===7?3*i*i-1:e*e-n*n}var xs={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function As(r,t,e,n){for(var i=new Y.Float32Array(27),a=y.create(),s=y.create(),o=y.create(),f=0;f<9;f++){for(var u=y.create(),c=0;c<tt.length;c++){for(var l=t[tt[c]],d=y.create(),h=0,v=0,_=xs[tt[c]],m=0;m<n;m++)for(var p=0;p<e;p++){a[0]=p/(e-1)*2-1,a[1]=m/(n-1)*2-1,a[2]=-1,y.normalize(a,a),o[0]=a[_[0]]*_[3],o[1]=a[_[1]]*_[4],o[2]=a[_[2]]*_[5],s[0]=l[v++]/255,s[1]=l[v++]/255,s[2]=l[v++]/255;var T=l[v++]/255*8.12;s[0]*=T,s[1]*=T,s[2]*=T,y.scaleAndAdd(d,d,s,Ts(o,f)*-a[2]),h+=-a[2]}y.scaleAndAdd(u,u,d,1/h)}i[f*3]=u[0]/6,i[f*3+1]=u[1]/6,i[f*3+2]=u[2]/6}return i}ai.projectEnvironmentMap=function(r,t,e){e=e||{},e.lod=e.lod||0;var n,i=new ot,a=64;t.textureType==="texture2D"?n=new ie({scene:i,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,n=new ie({scene:i,environmentMap:t}));var s=Math.ceil(a/Math.pow(2,e.lod)),o=Math.ceil(a/Math.pow(2,e.lod)),f=new lr({width:s,height:o}),u=new Wr;n.material.define("fragment","RGBM_ENCODE"),e.decodeRGBM&&n.material.define("fragment","RGBM_DECODE"),n.material.set("lod",e.lod);for(var c=new ze({texture:f}),l={},d=0;d<tt.length;d++){l[tt[d]]=new Uint8Array(s*o*4);var h=c.getCamera(tt[d]);h.fov=90,u.attach(f),u.bind(r),r.render(i,h),r.gl.readPixels(0,0,s,o,C.RGBA,C.UNSIGNED_BYTE,l[tt[d]]),u.unbind(r)}return n.dispose(r),u.dispose(r),f.dispose(r),As(r,l,s,o)};var et={firstNotNull:function(){for(var r=0,t=arguments.length;r<t;r++)if(arguments[r]!=null)return arguments[r]},queryDataIndex:function(r,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return nn(t.dataIndex)?an(t.dataIndex,function(e){return r.indexOfRawIndex(e)}):r.indexOfRawIndex(t.dataIndex);if(t.name!=null)return nn(t.name)?an(t.name,function(e){return r.indexOfName(e)}):r.indexOfName(t.name)}},Rs=br.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var r=this.heightSegments,t=this.widthSegments,e=this.attributes.position,n=this.attributes.texcoord0,i=this.attributes.normal,a=(t+1)*(r+1);e.init(a),n.init(a),i.init(a);var s=a>65535?Uint32Array:Uint16Array,o=this.indices=new s(t*r*6),f,u,c,l,d,h,v,g=this.radius,_=this.phiStart,m=this.phiLength,p=this.thetaStart,T=this.thetaLength,g=this.radius,E=[],S=[],N=0,D=1/g;for(v=0;v<=r;v++)for(h=0;h<=t;h++)l=h/t,d=v/r,f=-g*Math.cos(_+l*m)*Math.sin(p+d*T),u=g*Math.cos(p+d*T),c=g*Math.sin(_+l*m)*Math.sin(p+d*T),E[0]=f,E[1]=u,E[2]=c,S[0]=l,S[1]=d,e.set(N,E),n.set(N,S),E[0]*=D,E[1]*=D,E[2]*=D,i.set(N,E),N++;var w,O,U,b,k=t+1,X=0;for(v=0;v<r;v++)for(h=0;h<t;h++)O=v*k+h,w=v*k+h+1,b=(v+1)*k+h+1,U=(v+1)*k+h,o[X++]=w,o[X++]=O,o[X++]=b,o[X++]=O,o[X++]=U,o[X++]=b;this.boundingBox=new Tr,this.boundingBox.max.set(g,g,g),this.boundingBox.min.set(-g,-g,-g)}}),Ms=Lr.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}}}}),Ns=Lr.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(r){return r.__dir=r.__dir||new A,r.__dir.copy(r.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}}},clone:function(){var r=Lr.prototype.clone.call(this);return r.shadowBias=this.shadowBias,r.shadowSlopeScale=this.shadowSlopeScale,r}}),Is=Lr.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(r){return r.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(r){return r.range}},pointLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}}},clone:function(){var r=Lr.prototype.clone.call(this);return r.range=this.range,r}}),Ss=Lr.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(r){return r.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(r){return r.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(r){return Math.cos(r.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(r){return Math.cos(r.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(r){return r.falloffFactor}},spotLightDirection:{type:"3f",value:function(r){return r.__dir=r.__dir||new A,r.__dir.copy(r.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}}},clone:function(){var r=Lr.prototype.clone.call(this);return r.range=this.range,r.umbraAngle=this.umbraAngle,r.penumbraAngle=this.penumbraAngle,r.falloffFactor=this.falloffFactor,r.shadowBias=this.shadowBias,r.shadowSlopeScale=this.shadowSlopeScale,r}}),z=function(r,t,e,n){r=r||0,t=t||0,e=e||0,n=n||0,this.array=x.fromValues(r,t,e,n),this._dirty=!0};z.prototype={constructor:z,add:function(r){return x.add(this.array,this.array,r.array),this._dirty=!0,this},set:function(r,t,e,n){return this.array[0]=r,this.array[1]=t,this.array[2]=e,this.array[3]=n,this._dirty=!0,this},setArray:function(r){return this.array[0]=r[0],this.array[1]=r[1],this.array[2]=r[2],this.array[3]=r[3],this._dirty=!0,this},clone:function(){return new z(this.x,this.y,this.z,this.w)},copy:function(r){return x.copy(this.array,r.array),this._dirty=!0,this},dist:function(r){return x.dist(this.array,r.array)},distance:function(r){return x.distance(this.array,r.array)},div:function(r){return x.div(this.array,this.array,r.array),this._dirty=!0,this},divide:function(r){return x.divide(this.array,this.array,r.array),this._dirty=!0,this},dot:function(r){return x.dot(this.array,r.array)},len:function(){return x.len(this.array)},length:function(){return x.length(this.array)},lerp:function(r,t,e){return x.lerp(this.array,r.array,t.array,e),this._dirty=!0,this},min:function(r){return x.min(this.array,this.array,r.array),this._dirty=!0,this},max:function(r){return x.max(this.array,this.array,r.array),this._dirty=!0,this},mul:function(r){return x.mul(this.array,this.array,r.array),this._dirty=!0,this},multiply:function(r){return x.multiply(this.array,this.array,r.array),this._dirty=!0,this},negate:function(){return x.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return x.normalize(this.array,this.array),this._dirty=!0,this},random:function(r){return x.random(this.array,r),this._dirty=!0,this},scale:function(r){return x.scale(this.array,this.array,r),this._dirty=!0,this},scaleAndAdd:function(r,t){return x.scaleAndAdd(this.array,this.array,r.array,t),this._dirty=!0,this},sqrDist:function(r){return x.sqrDist(this.array,r.array)},squaredDistance:function(r){return x.squaredDistance(this.array,r.array)},sqrLen:function(){return x.sqrLen(this.array)},squaredLength:function(){return x.squaredLength(this.array)},sub:function(r){return x.sub(this.array,this.array,r.array),this._dirty=!0,this},subtract:function(r){return x.subtract(this.array,this.array,r.array),this._dirty=!0,this},transformMat4:function(r){return x.transformMat4(this.array,this.array,r.array),this._dirty=!0,this},transformQuat:function(r){return x.transformQuat(this.array,this.array,r.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var wt=Object.defineProperty;if(wt){var Jt=z.prototype;wt(Jt,"x",{get:function(){return this.array[0]},set:function(r){this.array[0]=r,this._dirty=!0}}),wt(Jt,"y",{get:function(){return this.array[1]},set:function(r){this.array[1]=r,this._dirty=!0}}),wt(Jt,"z",{get:function(){return this.array[2]},set:function(r){this.array[2]=r,this._dirty=!0}}),wt(Jt,"w",{get:function(){return this.array[3]},set:function(r){this.array[3]=r,this._dirty=!0}})}z.add=function(r,t,e){return x.add(r.array,t.array,e.array),r._dirty=!0,r};z.set=function(r,t,e,n,i){x.set(r.array,t,e,n,i),r._dirty=!0};z.copy=function(r,t){return x.copy(r.array,t.array),r._dirty=!0,r};z.dist=function(r,t){return x.distance(r.array,t.array)};z.distance=z.dist;z.div=function(r,t,e){return x.divide(r.array,t.array,e.array),r._dirty=!0,r};z.divide=z.div;z.dot=function(r,t){return x.dot(r.array,t.array)};z.len=function(r){return x.length(r.array)};z.lerp=function(r,t,e,n){return x.lerp(r.array,t.array,e.array,n),r._dirty=!0,r};z.min=function(r,t,e){return x.min(r.array,t.array,e.array),r._dirty=!0,r};z.max=function(r,t,e){return x.max(r.array,t.array,e.array),r._dirty=!0,r};z.mul=function(r,t,e){return x.multiply(r.array,t.array,e.array),r._dirty=!0,r};z.multiply=z.mul;z.negate=function(r,t){return x.negate(r.array,t.array),r._dirty=!0,r};z.normalize=function(r,t){return x.normalize(r.array,t.array),r._dirty=!0,r};z.random=function(r,t){return x.random(r.array,t),r._dirty=!0,r};z.scale=function(r,t,e){return x.scale(r.array,t.array,e),r._dirty=!0,r};z.scaleAndAdd=function(r,t,e,n){return x.scaleAndAdd(r.array,t.array,e.array,n),r._dirty=!0,r};z.sqrDist=function(r,t){return x.sqrDist(r.array,t.array)};z.squaredDistance=z.sqrDist;z.sqrLen=function(r){return x.sqrLen(r.array)};z.squaredLength=z.sqrLen;z.sub=function(r,t,e){return x.subtract(r.array,t.array,e.array),r._dirty=!0,r};z.subtract=z.sub;z.transformMat4=function(r,t,e){return x.transformMat4(r.array,t.array,e.array),r._dirty=!0,r};z.transformQuat=function(r,t,e){return x.transformQuat(r.array,t.array,e.array),r._dirty=!0,r};var W={};W.create=function(){var r=new hr(4);return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r};W.clone=function(r){var t=new hr(4);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t};W.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r};W.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r};W.transpose=function(r,t){if(r===t){var e=t[1];r[1]=t[2],r[2]=e}else r[0]=t[0],r[1]=t[2],r[2]=t[1],r[3]=t[3];return r};W.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e*a-i*n;return s?(s=1/s,r[0]=a*s,r[1]=-n*s,r[2]=-i*s,r[3]=e*s,r):null};W.adjoint=function(r,t){var e=t[0];return r[0]=t[3],r[1]=-t[1],r[2]=-t[2],r[3]=e,r};W.determinant=function(r){return r[0]*r[3]-r[2]*r[1]};W.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=e[0],f=e[1],u=e[2],c=e[3];return r[0]=n*o+a*f,r[1]=i*o+s*f,r[2]=n*u+a*c,r[3]=i*u+s*c,r};W.mul=W.multiply;W.rotate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(e),f=Math.cos(e);return r[0]=n*f+a*o,r[1]=i*f+s*o,r[2]=n*-o+a*f,r[3]=i*-o+s*f,r};W.scale=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=e[0],f=e[1];return r[0]=n*o,r[1]=i*o,r[2]=a*f,r[3]=s*f,r};W.frob=function(r){return Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)+Math.pow(r[3],2))};W.LDU=function(r,t,e,n){return r[2]=n[2]/n[0],e[0]=n[0],e[1]=n[1],e[3]=n[3]-r[2]*e[1],[r,t,e]};var _r=function(){this.array=W.create(),this._dirty=!0};_r.prototype={constructor:_r,setArray:function(r){for(var t=0;t<this.array.length;t++)this.array[t]=r[t];return this._dirty=!0,this},clone:function(){return new _r().copy(this)},copy:function(r){return W.copy(this.array,r.array),this._dirty=!0,this},adjoint:function(){return W.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return W.determinant(this.array)},identity:function(){return W.identity(this.array),this._dirty=!0,this},invert:function(){return W.invert(this.array,this.array),this._dirty=!0,this},mul:function(r){return W.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return W.mul(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return W.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return W.multiply(this.array,r.array,this.array),this._dirty=!0,this},rotate:function(r){return W.rotate(this.array,this.array,r),this._dirty=!0,this},scale:function(r){return W.scale(this.array,this.array,r.array),this._dirty=!0,this},transpose:function(){return W.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};_r.adjoint=function(r,t){return W.adjoint(r.array,t.array),r._dirty=!0,r};_r.copy=function(r,t){return W.copy(r.array,t.array),r._dirty=!0,r};_r.determinant=function(r){return W.determinant(r.array)};_r.identity=function(r){return W.identity(r.array),r._dirty=!0,r};_r.invert=function(r,t){return W.invert(r.array,t.array),r._dirty=!0,r};_r.mul=function(r,t,e){return W.mul(r.array,t.array,e.array),r._dirty=!0,r};_r.multiply=_r.mul;_r.rotate=function(r,t,e){return W.rotate(r.array,t.array,e),r._dirty=!0,r};_r.scale=function(r,t,e){return W.scale(r.array,t.array,e.array),r._dirty=!0,r};_r.transpose=function(r,t){return W.transpose(r.array,t.array),r._dirty=!0,r};var Z={};Z.create=function(){var r=new hr(6);return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r[4]=0,r[5]=0,r};Z.clone=function(r){var t=new hr(6);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t};Z.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r};Z.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r[4]=0,r[5]=0,r};Z.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],f=e*a-n*i;return f?(f=1/f,r[0]=a*f,r[1]=-n*f,r[2]=-i*f,r[3]=e*f,r[4]=(i*o-a*s)*f,r[5]=(n*s-e*o)*f,r):null};Z.determinant=function(r){return r[0]*r[3]-r[1]*r[2]};Z.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],f=t[5],u=e[0],c=e[1],l=e[2],d=e[3],h=e[4],v=e[5];return r[0]=n*u+a*c,r[1]=i*u+s*c,r[2]=n*l+a*d,r[3]=i*l+s*d,r[4]=n*h+a*v+o,r[5]=i*h+s*v+f,r};Z.mul=Z.multiply;Z.rotate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],f=t[5],u=Math.sin(e),c=Math.cos(e);return r[0]=n*c+a*u,r[1]=i*c+s*u,r[2]=n*-u+a*c,r[3]=i*-u+s*c,r[4]=o,r[5]=f,r};Z.scale=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],f=t[5],u=e[0],c=e[1];return r[0]=n*u,r[1]=i*u,r[2]=a*c,r[3]=s*c,r[4]=o,r[5]=f,r};Z.translate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],f=t[5],u=e[0],c=e[1];return r[0]=n,r[1]=i,r[2]=a,r[3]=s,r[4]=n*u+a*c+o,r[5]=i*u+s*c+f,r};Z.frob=function(r){return Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)+Math.pow(r[3],2)+Math.pow(r[4],2)+Math.pow(r[5],2)+1)};var gr=function(){this.array=Z.create(),this._dirty=!0};gr.prototype={constructor:gr,setArray:function(r){for(var t=0;t<this.array.length;t++)this.array[t]=r[t];return this._dirty=!0,this},clone:function(){return new gr().copy(this)},copy:function(r){return Z.copy(this.array,r.array),this._dirty=!0,this},determinant:function(){return Z.determinant(this.array)},identity:function(){return Z.identity(this.array),this._dirty=!0,this},invert:function(){return Z.invert(this.array,this.array),this._dirty=!0,this},mul:function(r){return Z.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return Z.mul(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return Z.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return Z.multiply(this.array,r.array,this.array),this._dirty=!0,this},rotate:function(r){return Z.rotate(this.array,this.array,r),this._dirty=!0,this},scale:function(r){return Z.scale(this.array,this.array,r.array),this._dirty=!0,this},translate:function(r){return Z.translate(this.array,this.array,r.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};gr.copy=function(r,t){return Z.copy(r.array,t.array),r._dirty=!0,r};gr.determinant=function(r){return Z.determinant(r.array)};gr.identity=function(r){return Z.identity(r.array),r._dirty=!0,r};gr.invert=function(r,t){return Z.invert(r.array,t.array),r._dirty=!0,r};gr.mul=function(r,t,e){return Z.mul(r.array,t.array,e.array),r._dirty=!0,r};gr.multiply=gr.mul;gr.rotate=function(r,t,e){return Z.rotate(r.array,t.array,e),r._dirty=!0,r};gr.scale=function(r,t,e){return Z.scale(r.array,t.array,e.array),r._dirty=!0,r};gr.translate=function(r,t,e){return Z.translate(r.array,t.array,e.array),r._dirty=!0,r};var sr=function(){this.array=B.create(),this._dirty=!0};sr.prototype={constructor:sr,setArray:function(r){for(var t=0;t<this.array.length;t++)this.array[t]=r[t];return this._dirty=!0,this},adjoint:function(){return B.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new sr().copy(this)},copy:function(r){return B.copy(this.array,r.array),this._dirty=!0,this},determinant:function(){return B.determinant(this.array)},fromMat2d:function(r){return B.fromMat2d(this.array,r.array),this._dirty=!0,this},fromMat4:function(r){return B.fromMat4(this.array,r.array),this._dirty=!0,this},fromQuat:function(r){return B.fromQuat(this.array,r.array),this._dirty=!0,this},identity:function(){return B.identity(this.array),this._dirty=!0,this},invert:function(){return B.invert(this.array,this.array),this._dirty=!0,this},mul:function(r){return B.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return B.mul(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return B.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return B.multiply(this.array,r.array,this.array),this._dirty=!0,this},rotate:function(r){return B.rotate(this.array,this.array,r),this._dirty=!0,this},scale:function(r){return B.scale(this.array,this.array,r.array),this._dirty=!0,this},translate:function(r){return B.translate(this.array,this.array,r.array),this._dirty=!0,this},normalFromMat4:function(r){return B.normalFromMat4(this.array,r.array),this._dirty=!0,this},transpose:function(){return B.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};sr.adjoint=function(r,t){return B.adjoint(r.array,t.array),r._dirty=!0,r};sr.copy=function(r,t){return B.copy(r.array,t.array),r._dirty=!0,r};sr.determinant=function(r){return B.determinant(r.array)};sr.identity=function(r){return B.identity(r.array),r._dirty=!0,r};sr.invert=function(r,t){return B.invert(r.array,t.array),r};sr.mul=function(r,t,e){return B.mul(r.array,t.array,e.array),r._dirty=!0,r};sr.multiply=sr.mul;sr.fromMat2d=function(r,t){return B.fromMat2d(r.array,t.array),r._dirty=!0,r};sr.fromMat4=function(r,t){return B.fromMat4(r.array,t.array),r._dirty=!0,r};sr.fromQuat=function(r,t){return B.fromQuat(r.array,t.array),r._dirty=!0,r};sr.normalFromMat4=function(r,t){return B.normalFromMat4(r.array,t.array),r._dirty=!0,r};sr.rotate=function(r,t,e){return B.rotate(r.array,t.array,e),r._dirty=!0,r};sr.scale=function(r,t,e){return B.scale(r.array,t.array,e.array),r._dirty=!0,r};sr.transpose=function(r,t){return B.transpose(r.array,t.array),r._dirty=!0,r};sr.translate=function(r,t,e){return B.translate(r.array,t.array,e.array),r._dirty=!0,r};var Ls={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(r,t){this._animators=this._animators||[];var e=this,n;if(r){for(var i=r.split("."),a=e,s=0,o=i.length;s<o;s++)a&&(a=a[i[s]]);a&&(n=a)}else n=e;if(n==null)throw new Error("Target "+r+" not exists");var f=this._animators,u=new Ni(n,t),c=this;return u.during(function(){c.__zr&&c.__zr.refresh()}).done(function(){var l=f.indexOf(u);l>=0&&f.splice(l,1)}),f.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(r){this._animators=this._animators||[];for(var t=this._animators,e=t.length,n=0;n<e;n++)t[n].stop(r);return t.length=0,this},addAnimatorsToZr:function(r){if(this._animators)for(var t=0;t<this._animators.length;t++)r.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(r){if(this._animators)for(var t=0;t<this._animators.length;t++)r.animation.removeAnimator(this._animators[t])}};const Cs=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,ws=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,Os=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,bs=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Ps=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Ds=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,Bs=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(Or.prototype,Ls);H.import(Cs);H.import(Qn);H.import(ws);H.import(Os);H.import(bs);H.import(Ps);H.import(Ds);H.import(Bs);function Us(r){return!r||r==="none"}function si(r){return r instanceof HTMLCanvasElement||r instanceof HTMLImageElement||r instanceof Image}function Fs(r){return r.getZr&&r.setOption}var Gs=ot.prototype.addToScene,Vs=ot.prototype.removeFromScene;ot.prototype.addToScene=function(r){if(Gs.call(this,r),this.__zr){var t=this.__zr;r.traverse(function(e){e.__zr=t,e.addAnimatorsToZr&&e.addAnimatorsToZr(t)})}};ot.prototype.removeFromScene=function(r){Vs.call(this,r),r.traverse(function(t){var e=t.__zr;t.__zr=null,e&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(e)})};st.prototype.setTextureImage=function(r,t,e,n){if(this.shader){var i=e.getZr(),a=this,s;return a.autoUpdateTextureStatus=!1,a.disableTexture(r),Us(t)||(s=G.loadTexture(t,e,n,function(o){a.enableTexture(r),i&&i.refresh()}),a.set(r,s)),s}};var G={};G.Renderer=Gr;G.Node=Or;G.Mesh=pr;G.Shader=H;G.Material=st;G.Texture=C;G.Texture2D=lr;G.Geometry=br;G.SphereGeometry=Rs;G.PlaneGeometry=Ye;G.CubeGeometry=ni;G.AmbientLight=Ms;G.DirectionalLight=Ns;G.PointLight=Is;G.SpotLight=Ss;G.PerspectiveCamera=Xr;G.OrthographicCamera=ii;G.Vector2=V;G.Vector3=A;G.Vector4=z;G.Quaternion=j;G.Matrix2=_r;G.Matrix2d=gr;G.Matrix3=sr;G.Matrix4=P;G.Plane=Dt;G.Ray=nt;G.BoundingBox=Tr;G.Frustum=We;var Qt=null;function Hs(){return Qt!==null||(Qt=it.createBlank("rgba(255,255,255,0)").image),Qt}function Vn(r){return Math.pow(2,Math.round(Math.log(r)/Math.LN2))}function Hn(r){if((r.wrapS===C.REPEAT||r.wrapT===C.REPEAT)&&r.image){var t=Vn(r.width),e=Vn(r.height);if(t!==r.width||e!==r.height){var n=document.createElement("canvas");n.width=t,n.height=e;var i=n.getContext("2d");i.drawImage(r.image,0,0,t,e),r.image=n}}}G.loadTexture=function(r,t,e,n){typeof e=="function"&&(n=e,e={}),e=e||{};for(var i=Object.keys(e).sort(),a="",s=0;s<i.length;s++)a+=i[s]+"_"+e[i[s]]+"_";var o=t.__textureCache=t.__textureCache||new Ii(20);if(Fs(r)){var f=r.__textureid__,u=o.get(a+f);if(u)u.texture.surface.setECharts(r),n&&n(u.texture);else{var c=new Ve(r);c.onupdate=function(){t.getZr().refresh()},u={texture:c.getTexture()};for(var s=0;s<i.length;s++)u.texture[i[s]]=e[i[s]];f=r.__textureid__||"__ecgl_ec__"+u.texture.__uid__,r.__textureid__=f,o.put(a+f,u),n&&n(u.texture)}return u.texture}else if(si(r)){var f=r.__textureid__,u=o.get(a+f);if(!u){u={texture:new G.Texture2D({image:r})};for(var s=0;s<i.length;s++)u.texture[i[s]]=e[i[s]];f=r.__textureid__||"__ecgl_image__"+u.texture.__uid__,r.__textureid__=f,o.put(a+f,u),Hn(u.texture),n&&n(u.texture)}return u.texture}else{var u=o.get(a+r);if(u)u.callbacks?u.callbacks.push(n):n&&n(u.texture);else if(r.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[n]};var l=it.loadTexture(r,{exposure:e.exposure,fileType:"hdr"},function(){l.dirty(),u.callbacks.forEach(function(v){v&&v(l)}),u.callbacks=null});u.texture=l,o.put(a+r,u)}else{for(var l=new G.Texture2D({image:new Image}),s=0;s<i.length;s++)l[i[s]]=e[i[s]];u={texture:l,callbacks:[n]};var d=l.image;d.onload=function(){l.image=d,Hn(l),l.dirty(),u.callbacks.forEach(function(_){_&&_(l)}),u.callbacks=null},d.crossOrigin="Anonymous",d.src=r,l.image=Hs(),o.put(a+r,u)}return u.texture}};G.createAmbientCubemap=function(r,t,e,n){r=r||{};var i=r.texture,a=et.firstNotNull(r.exposure,1),s=new gs({intensity:et.firstNotNull(r.specularIntensity,1)}),o=new Es({intensity:et.firstNotNull(r.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return s.cubemap=G.loadTexture(i,e,{exposure:a},function(){s.cubemap.flipY=!1,s.prefilter(t,32),o.coefficients=ai.projectEnvironmentMap(t,s.cubemap,{lod:1}),n&&n()}),{specular:s,diffuse:o}};G.createBlankTexture=it.createBlank;G.isImage=si;G.additiveBlend=function(r){r.blendEquation(r.FUNC_ADD),r.blendFunc(r.SRC_ALPHA,r.ONE)};G.parseColor=function(r,t){return r instanceof Array?(t||(t=[]),t[0]=r[0],t[1]=r[1],t[2]=r[2],r.length>3?t[3]=r[3]:t[3]=1,t):(t=Si(r||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};G.directionFromAlphaBeta=function(r,t){var e=r/180*Math.PI+Math.PI/2,n=-t/180*Math.PI+Math.PI/2,i=[],a=Math.sin(e);return i[0]=a*Math.cos(n),i[1]=-Math.cos(e),i[2]=a*Math.sin(n),i};G.getShadowResolution=function(r){var t=1024;switch(r){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};G.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];G.createShader=function(r){r==="ecgl.shadow"&&(r="ecgl.displayShadow");var t=H.source(r+".vertex"),e=H.source(r+".fragment");t||console.error("Vertex shader of '%s' not exits",r),e||console.error("Fragment shader of '%s' not exits",r);var n=new H(t,e);return n.name=r,n};G.createMaterial=function(r,t){t instanceof Array||(t=[t]);var e=G.createShader(r),n=new st({shader:e});return t.forEach(function(i){typeof i=="string"&&n.define(i)}),n};G.setMaterialFromModel=function(r,t,e,n){t.autoUpdateTextureStatus=!1;var i=e.getModel(r+"Material"),a=i.get("detailTexture"),s=et.firstNotNull(i.get("textureTiling"),1),o=et.firstNotNull(i.get("textureOffset"),0);typeof s=="number"&&(s=[s,s]),typeof o=="number"&&(o=[o,o]);var f=s[0]>1||s[1]>1?G.Texture.REPEAT:G.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:f,wrapT:f};if(r==="realistic"){var c=i.get("roughness"),l=i.get("metalness");l!=null?isNaN(l)&&(t.setTextureImage("metalnessMap",l,n,u),l=et.firstNotNull(i.get("metalnessAdjust"),.5)):l=0,c!=null?isNaN(c)&&(t.setTextureImage("roughnessMap",c,n,u),c=et.firstNotNull(i.get("roughnessAdjust"),.5)):c=.5;var d=i.get("normalTexture");t.setTextureImage("detailMap",a,n,u),t.setTextureImage("normalMap",d,n,u),t.set({roughness:c,metalness:l,detailUvRepeat:s,detailUvOffset:o})}else if(r==="lambert")t.setTextureImage("detailMap",a,n,u),t.set({detailUvRepeat:s,detailUvOffset:o});else if(r==="color")t.setTextureImage("detailMap",a,n,u),t.set({detailUvRepeat:s,detailUvOffset:o});else if(r==="hatching"){var h=i.get("hatchingTextures")||[];h.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),h[v],n,{anisotropic:8,wrapS:G.Texture.REPEAT,wrapT:G.Texture.REPEAT});t.set({detailUvRepeat:s,detailUvOffset:o})}};G.updateVertexAnimation=function(r,t,e,n){var i=n.get("animation"),a=n.get("animationDurationUpdate"),s=n.get("animationEasingUpdate"),o=e.shadowDepthMaterial;if(i&&t&&a>0&&t.geometry.vertexCount===e.geometry.vertexCount){e.material.define("vertex","VERTEX_ANIMATION"),e.ignorePreZ=!0,o&&o.define("vertex","VERTEX_ANIMATION");for(var f=0;f<r.length;f++)e.geometry.attributes[r[f][0]].value=t.geometry.attributes[r[f][1]].value;e.geometry.dirty(),e.__percent=0,e.material.set("percent",0),e.stopAnimation(),e.animate().when(a,{__percent:1}).during(function(){e.material.set("percent",e.__percent),o&&o.set("percent",e.__percent)}).done(function(){e.ignorePreZ=!1,e.material.undefine("vertex","VERTEX_ANIMATION"),o&&o.undefine("vertex","VERTEX_ANIMATION")}).start(s)}else e.material.undefine("vertex","VERTEX_ANIMATION"),o&&o.undefine("vertex","VERTEX_ANIMATION")};var J=function(r,t){this.id=r,this.zr=t;try{this.renderer=new Gr({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(n){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(n);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var e=this.dom.style;e.position="absolute",e.left="0",e.top="0",this.views=[],this._picking=new ke({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new Li({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};J.prototype.setUnpainted=function(){};J.prototype.addView=function(r){if(r.layer!==this){var t=this._viewsToDispose.indexOf(r);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(r),r.layer=this;var e=this.zr;r.scene.traverse(function(n){n.__zr=e,n.addAnimatorsToZr&&n.addAnimatorsToZr(e)})}};function oi(r){var t=r.__zr;r.__zr=null,t&&r.removeAnimatorsFromZr&&r.removeAnimatorsFromZr(t)}J.prototype.removeView=function(r){if(r.layer===this){var t=this.views.indexOf(r);t>=0&&(this.views.splice(t,1),r.scene.traverse(oi,this),r.layer=null,this._viewsToDispose.push(r))}};J.prototype.removeViewsAll=function(){this.views.forEach(function(r){r.scene.traverse(oi,this),r.layer=null,this._viewsToDispose.push(r)},this),this.views.length=0};J.prototype.resize=function(r,t){var e=this.renderer;e.resize(r,t)};J.prototype.clear=function(){var r=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];r.clearColor(t[0],t[1],t[2],t[3]),r.depthMask(!0),r.colorMask(!0,!0,!0,!0),r.clear(r.DEPTH_BUFFER_BIT|r.COLOR_BUFFER_BIT)};J.prototype.clearDepth=function(){var r=this.renderer.gl;r.clear(r.DEPTH_BUFFER_BIT)};J.prototype.clearColor=function(){var r=this.renderer.gl;r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT)};J.prototype.needsRefresh=function(){this.zr.refresh()};J.prototype.refresh=function(r){this._backgroundColor=r?G.parseColor(r):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};J.prototype.renderToCanvas=function(r){this._startAccumulating(!0),r.drawImage(this.dom,0,0,r.canvas.width,r.canvas.height)};J.prototype._doRender=function(r){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,r);this.renderer.restoreViewport()};J.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Xs=1;J.prototype._startAccumulating=function(r){var t=this;this._stopAccumulating();for(var e=!1,n=0;n<this.views.length;n++)e=this.views[n].needsAccumulate()||e;if(!e)return;function i(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var s=!0,o=0;o<t.views.length;o++)s=t.views[o].isAccumulateFinished()&&e;s||(t._doRender(!0),r?i(a):Ci(function(){i(a)}))}}this._accumulatingId=Xs++,r?i(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){i(t._accumulatingId)},50)};J.prototype._trackAndClean=function(){var r=[],t=[];this._textureList&&(ae(this._textureList),ae(this._geometriesList));for(var e=0;e<this.views.length;e++)ks(this.views[e].scene,r,t);this._textureList&&(se(this.renderer,this._textureList),se(this.renderer,this._geometriesList)),this._textureList=r,this._geometriesList=t};function ae(r){for(var t=0;t<r.length;t++)r[t].__used__=0}function se(r,t){for(var e=0;e<t.length;e++)t[e].__used__||t[e].dispose(r)}function $t(r,t){r.__used__=r.__used__||0,r.__used__++,r.__used__===1&&t.push(r)}function ks(r,t,e){var n,i;r.traverse(function(s){if(s.isRenderable()){var o=s.geometry,f=s.material;if(f!==n)for(var u=f.getTextureUniforms(),c=0;c<u.length;c++){var l=u[c],d=f.uniforms[l].value;if(d){if(d instanceof C)$t(d,t);else if(d instanceof Array)for(var h=0;h<d.length;h++)d[h]instanceof C&&$t(d[h],t)}}o!==i&&$t(o,e),n=f,i=o}});for(var a=0;a<r.lights.length;a++)r.lights[a].cubemap&&$t(r.lights[a].cubemap,t)}J.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(ae(this._textureList),ae(this._geometriesList),se(this.renderer,this._textureList),se(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};J.prototype.onmousedown=function(r){if(!(r.target&&r.target.__isGLToZRProxy)){r=r.event;var t=this.pickObject(r.offsetX,r.offsetY);t&&(this._dispatchEvent("mousedown",r,t),this._dispatchDataEvent("mousedown",r,t)),this._downX=r.offsetX,this._downY=r.offsetY}};J.prototype.onmousemove=function(r){if(!(r.target&&r.target.__isGLToZRProxy)){r=r.event;var t=this.pickObject(r.offsetX,r.offsetY),e=t&&t.target,n=this._hovered;this._hovered=t,n&&e!==n.target&&(n.relatedTarget=e,this._dispatchEvent("mouseout",r,n),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",r,t),t&&(this.zr.setCursorStyle("pointer"),(!n||e!==n.target)&&this._dispatchEvent("mouseover",r,t)),this._dispatchDataEvent("mousemove",r,t)}};J.prototype.onmouseup=function(r){if(!(r.target&&r.target.__isGLToZRProxy)){r=r.event;var t=this.pickObject(r.offsetX,r.offsetY);t&&(this._dispatchEvent("mouseup",r,t),this._dispatchDataEvent("mouseup",r,t)),this._upX=r.offsetX,this._upY=r.offsetY}};J.prototype.onclick=J.prototype.dblclick=function(r){if(!(r.target&&r.target.__isGLToZRProxy)){var t=this._upX-this._downX,e=this._upY-this._downY;if(!(Math.sqrt(t*t+e*e)>20)){r=r.event;var n=this.pickObject(r.offsetX,r.offsetY);n&&(this._dispatchEvent(r.type,r,n),this._dispatchDataEvent(r.type,r,n));var i=this._clickToSetFocusPoint(r);if(i){var a=i.view.setDOFFocusOnPoint(i.distance);a&&this.zr.refresh()}}}};J.prototype._clickToSetFocusPoint=function(r){for(var t=this.renderer,e=t.viewport,n=this.views.length-1;n>=0;n--){var i=this.views[n];if(i.hasDOF()&&i.containPoint(r.offsetX,r.offsetY)){this._picking.scene=i.scene,this._picking.camera=i.camera,t.viewport=i.viewport;var a=this._picking.pick(r.offsetX,r.offsetY,!0);if(a)return a.view=i,a}}t.viewport=e};J.prototype.onglobalout=function(r){var t=this._hovered;t&&this._dispatchEvent("mouseout",r,{target:t.target})};J.prototype.pickObject=function(r,t){for(var e=[],n=this.renderer,i=n.viewport,a=0;a<this.views.length;a++){var s=this.views[a];s.containPoint(r,t)&&(this._picking.scene=s.scene,this._picking.camera=s.camera,n.viewport=s.viewport,this._picking.pickAll(r,t,e))}return n.viewport=i,e.sort(function(o,f){return o.distance-f.distance}),e[0]};J.prototype._dispatchEvent=function(r,t,e){e||(e={});var n=e.target;for(e.cancelBubble=!1,e.event=t,e.type=r,e.offsetX=t.offsetX,e.offsetY=t.offsetY;n&&(n.trigger(r,e),n=n.getParent(),!e.cancelBubble););this._dispatchToView(r,e)};J.prototype._dispatchDataEvent=function(r,t,e){var n=e&&e.target,i=n&&n.dataIndex,a=n&&n.seriesIndex,s=n&&n.eventData,o=!1,f=this._zrEventProxy;f.x=t.offsetX,f.y=t.offsetY,f.update();var u={target:f};const c=te(f);r==="mousemove"&&(i!=null?i!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(c.dataIndex=this._lastDataIndex,c.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),o=!0):s!=null&&s!==this._lastEventData&&(this._lastEventData!=null&&(c.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),o=!0),this._lastEventData=s,this._lastDataIndex=i,this._lastSeriesIndex=a),c.eventData=s,c.dataIndex=i,c.seriesIndex=a,(s!=null||parseInt(i,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,r,t),o&&this.zr.handler.dispatchToElement(u,"mouseover",t))};J.prototype._dispatchToView=function(r,t){for(var e=0;e<this.views.length;e++)this.views[e].containPoint(t.offsetX,t.offsetY)&&this.views[e].trigger(r,t)};Object.assign(J.prototype,Yn);var Ws=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Pt(r,t){if(r&&r[t]&&(r[t].normal||r[t].emphasis)){var e=r[t].normal,n=r[t].emphasis;e&&(r[t]=e),n&&(r.emphasis=r.emphasis||{},r.emphasis[t]=n)}}function zs(r){Pt(r,"itemStyle"),Pt(r,"lineStyle"),Pt(r,"areaStyle"),Pt(r,"label")}function re(r){r&&(r instanceof Array||(r=[r]),Xe(r,function(t){if(t.axisLabel){var e=t.axisLabel;Object.assign(e,e.textStyle),e.textStyle=null}}))}function Ys(r){Xe(r.series,function(t){Oe(Ws,t.type)>=0&&(zs(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",r.mapbox3D=r.mapbox))}),re(r.xAxis3D),re(r.yAxis3D),re(r.zAxis3D),re(r.grid3D),Pt(r.geo3D)}function fi(r){this._layers={},this._zr=r}fi.prototype.update=function(r,t){var e=this,n=t.getZr();if(!n.getWidth()||!n.getHeight()){console.warn("Dom has no width or height");return}function i(o){n.setSleepAfterStill(0);var f;o.coordinateSystem&&o.coordinateSystem.model,f=o.get("zlevel");var u=e._layers,c=u[f];if(!c){if(c=u[f]=new J("gl-"+f,n),n.painter.isSingleCanvas()){c.virtual=!0;var l=new Pi({z:1e4,style:{image:c.renderer.canvas},silent:!0});c.__hostImage=l,n.add(l)}n.painter.insertLayer(f,c)}return c.__hostImage&&c.__hostImage.setStyle({width:c.renderer.getWidth(),height:c.renderer.getHeight()}),c}function a(o,f){o&&o.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:f)})}for(var s in this._layers)this._layers[s].removeViewsAll();r.eachComponent(function(o,f){if(o!=="series"){var u=t.getViewOfComponentModel(f),c=f.coordinateSystem;if(u.__ecgl__){var l;if(c){if(!c.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+f.id);return}l=c.viewGL}else{if(!f.viewGL){console.error("Can't find viewGL of component "+f.id);return}l=c.viewGL}var l=c.viewGL,d=i(f);d.addView(l),u.afterRender&&u.afterRender(f,r,t,d),a(u.groupGL,f.get("silent"))}}}),r.eachSeries(function(o){var f=t.getViewOfSeriesModel(o),u=o.coordinateSystem;if(f.__ecgl__){if(u&&!u.viewGL&&!f.viewGL){console.error("Can't find viewGL of series "+f.id);return}var c=u&&u.viewGL||f.viewGL,l=i(o);l.addView(c),f.afterRender&&f.afterRender(o,r,t,l),a(f.groupGL,o.get("silent"))}})};wi(function(r){var t=r.getZr(),e=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(n){n instanceof J&&n.dispose()}),e.call(this)},t.painter.getRenderedCanvas=function(n){if(n=n||{},this._singleCanvas)return this._layers[0].dom;var i=document.createElement("canvas"),a=n.pixelRatio||this.dpr;i.width=this.getWidth()*a,i.height=this.getHeight()*a;var s=i.getContext("2d");s.dpr=a,s.clearRect(0,0,i.width,i.height),n.backgroundColor&&(s.fillStyle=n.backgroundColor,s.fillRect(0,0,i.width,i.height));var o=this.storage.getDisplayList(!0),f={},u,c=this;function l(_,m){var p=c._zlevelList;_==null&&(_=-1/0);for(var T,g=0;g<p.length;g++){var E=p[g],S=c._layers[E];if(!S.__builtin__&&E>_&&E<m){T=S;break}}T&&T.renderToCanvas&&(s.save(),T.renderToCanvas(s),s.restore())}for(var d={ctx:s},h=0;h<o.length;h++){var v=o[h];v.zlevel!==u&&(l(u,v.zlevel),u=v.zlevel),this._doPaintEl(v,d,!0,null,f)}return l(u,1/0),i}});Oi(function(r,t){var e=t.getZr(),n=e.__egl=e.__egl||new fi(e);n.update(r,t)});bi(Ys);const Ks={vec2:M,vec3:y,vec4:x,mat2:W,mat2d:Z,mat3:B,mat4:R,quat:L};export{xr as B,Wr as F,br as G,P as M,ii as O,ys as P,Gr as R,ie as S,lr as T,A as V,G as a,V as b,I as c,H as d,We as e,Tr as f,Ks as g,st as h,C as i,Ut as j,Xr as k,Fr as l,R as m,ot as n,Yn as o,Cs as p,et as r,it as t,cr as u};
