import{G as N,g as $,a as P}from"./index-DKLpuLUd.js";import{a0 as Pe,S as xe,q as _e}from"./UncertaintyAnalysisView-DFnBaeEm.js";import{S as Ce}from"./SeriesData-CtqMyWBx.js";import"./extension-BHPZzXIT.js";import"./renderers-Dq-mUGYH.js";import"./index-BzxH5ATb.js";const be={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var n in t)e||!t[n].value?t[n].value=[]:t[n].value=Array.prototype.slice.call(t[n].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}};var Y=$.vec3,ae=[[0,0],[1,1]],k=N.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new N.Attribute("position","float",3,"POSITION"),positionPrev:new N.Attribute("positionPrev","float",3),positionNext:new N.Attribute("positionNext","float",3),prevPositionPrev:new N.Attribute("prevPositionPrev","float",3),prevPosition:new N.Attribute("prevPosition","float",3),prevPositionNext:new N.Attribute("prevPositionNext","float",3),offset:new N.Attribute("offset","float",1),color:new N.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,n,r){var i=Y.dist(e,t)+Y.dist(n,t)+Y.dist(r,n),a=1/(i+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,n,r){var i=this._getCubicCurveApproxStep(e,t,n,r),a=Math.ceil(1/i);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,n,r){var i=this._getCubicCurveApproxStep(e,t,n,r),a=Math.ceil(1/i);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(ae)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(ae)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var n=typeof e[0]!="number";t=n?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var n=typeof e[0]!="number";t=n?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,n,r,i,a){a==null&&(a=1);for(var f=e[0],s=e[1],v=e[2],g=t[0],h=t[1],_=t[2],m=n[0],o=n[1],l=n[2],c=r[0],u=r[1],C=r[2],x=this._getCubicCurveApproxStep(e,t,n,r),b=x*x,O=b*x,y=3*x,V=3*b,w=6*b,A=6*O,z=f-g*2+m,U=s-h*2+o,R=v-_*2+l,D=(g-m)*3-f+c,S=(h-o)*3-s+u,G=(_-l)*3-v+C,d=f,j=s,B=v,J=(g-f)*y+z*V+D*O,X=(h-s)*y+U*V+S*O,q=(_-v)*y+R*V+G*O,ee=z*w+D*A,te=U*w+S*A,re=R*w+G*A,ge=D*A,he=S*A,ye=G*A,ne=0,Q=0,ie=Math.ceil(1/x),F=new Float32Array((ie+1)*3),F=[],K=0,Q=0;Q<ie+1;Q++)F[K++]=d,F[K++]=j,F[K++]=B,d+=J,j+=X,B+=q,J+=ee,X+=te,q+=re,ee+=ge,te+=he,re+=ye,ne+=x,ne>1&&(d=J>0?Math.min(d,c):Math.max(d,c),j=X>0?Math.min(j,u):Math.max(j,u),B=q>0?Math.min(B,C):Math.max(B,C));return this.addPolyline(F,i,a)},addLine:function(e,t,n,r){return this.addPolyline([e,t],n,r)},addPolyline:function(e,t,n,r,i){if(e.length){var a=typeof e[0]!="number";if(i==null&&(i=a?e.length:e.length/3),!(i<2)){r==null&&(r=0),n==null&&(n=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",f=a?typeof t[0]!="number":t.length/4===i,s=this.attributes.position,v=this.attributes.positionPrev,g=this.attributes.positionNext,h=this.attributes.color,_=this.attributes.offset,m=this.indices,o=this._vertexOffset,l,c;n=Math.max(n,.01);for(var u=r;u<i;u++){if(a)l=e[u],f?c=t[u]:c=t;else{var C=u*3;if(l=l||[],l[0]=e[C],l[1]=e[C+1],l[2]=e[C+2],f){var x=u*4;c=c||[],c[0]=t[x],c[1]=t[x+1],c[2]=t[x+2],c[3]=t[x+3]}else c=t}if(this.useNativeLine?u>1&&(s.copy(o,o-1),h.copy(o,o-1),o++):(u<i-1&&(v.set(o+2,l),v.set(o+3,l)),u>0&&(g.set(o-2,l),g.set(o-1,l)),s.set(o,l),s.set(o+1,l),h.set(o,c),h.set(o+1,c),_.set(o,n/2),_.set(o+1,-n/2),o+=2),this.useNativeLine)h.set(o,c),s.set(o,l),o++;else if(u>0){var b=this._triangleOffset*3,m=this.indices;m[b]=o-4,m[b+1]=o-3,m[b+2]=o-2,m[b+3]=o-3,m[b+4]=o-1,m[b+5]=o-2,this._triangleOffset+=2}}if(!this.useNativeLine){var O=this._vertexOffset,y=this._vertexOffset+i*2;v.copy(O,O+2),v.copy(O+1,O+3),g.copy(y-1,y-3),g.copy(y-2,y-4)}return this._vertexOffset=o,this._vertexOffset}}},setItemColor:function(e,t){for(var n=this._itemVertexOffsets[e],r=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,i=n;i<r;i++)this.attributes.color.set(i,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});Pe(k.prototype,be);const we=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`;function ue(e,t){const n=e.getItemVisual(t,"style");if(n){const r=e.getVisual("drawType");return n[r]}}function pe(e,t){const n=e.getItemVisual(t,"style");return n&&n.opacity}var p=$.vec3,oe=$.vec2,T=p.normalize,H=p.cross,se=p.sub,Z=p.add,I=p.create,M=I(),L=I(),E=I(),W=I(),le=[],fe=[];function Ae(e,t){oe.copy(le,e[0]),oe.copy(fe,e[1]);var n=[],r=n[0]=I(),i=n[1]=I(),a=n[2]=I(),f=n[3]=I();t.dataToPoint(le,r),t.dataToPoint(fe,f),T(M,r),se(L,f,r),T(L,L),H(E,L,M),T(E,E),H(L,M,E),Z(i,M,L),T(i,i),T(M,f),se(L,r,f),T(L,L),H(E,L,M),T(E,E),H(L,M,E),Z(a,M,L),T(a,a),Z(W,r,f),T(W,W);var s=p.dot(r,W),v=p.dot(W,i),g=(Math.max(p.len(r),p.len(f))-s)/v*2;return p.scaleAndAdd(i,r,i,g),p.scaleAndAdd(a,f,a,g),n}function Le(e,t,n){var r=[],i=r[0]=p.create(),a=r[1]=p.create(),f=r[2]=p.create(),s=r[3]=p.create();t.dataToPoint(e[0],i),t.dataToPoint(e[1],s);var v=p.dist(i,s);return p.lerp(a,i,s,.3),p.lerp(f,i,s,.3),p.scaleAndAdd(a,a,n,Math.min(v*.1,10)),p.scaleAndAdd(f,f,n,Math.min(v*.1,10)),r}function de(e,t){for(var n=new Float32Array(e.length*3),r=0,i=[],a=0;a<e.length;a++)t.dataToPoint(e[a],i),n[r++]=i[0],n[r++]=i[1],n[r++]=i[2];return n}function me(e){var t=[];return e.each(function(n){var r=e.getItemModel(n),i=r.option instanceof Array?r.option:r.getShallow("coords",!0);t.push(i)}),{coordsList:t}}function Oe(e,t){var n=e.getData(),r=e.get("polyline");n.setLayout("lineType",r?"polyline":"cubicBezier");var i=me(n);n.each(function(a){var f=i.coordsList[a],s=r?de:Ae;n.setItemLayout(a,s(f,t))})}function ce(e,t,n){var r=e.getData(),i=e.get("polyline"),a=me(r);r.setLayout("lineType",i?"polyline":"cubicBezier"),r.each(function(f){var s=a.coordsList[f],v=i?de(s,t):Le(s,t,n);r.setItemLayout(f,v)})}function Se(e,t){e.eachSeriesByType("lines3D",function(n){var r=n.coordinateSystem;r.type==="globe"?Oe(n,r):r.type==="geo3D"?ce(n,r,[0,1,0]):(r.type==="mapbox3D"||r.type==="maptalks3D")&&ce(n,r,[0,0,1])})}const De=xe.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var n=new Ce(["value"],this);return n.hasItemOption=!1,n.initData(e.data,[],function(r,i,a,f){if(r instanceof Array)return NaN;n.hasItemOption=!0;var s=r.value;if(s!=null)return s instanceof Array?s[f]:s}),n},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),Ne=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`;var ve=$.vec3;function Te(e){return e>0?1:-1}P.Shader.import(Ne);const Me=P.Mesh.extend(function(){var e=new P.Material({shader:new P.Shader(P.Shader.source("ecgl.trail2.vertex"),P.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new k({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,n){var r=e.hostModel,i=this.geometry,a=r.getModel("effect"),f=a.get("trailWidth")*t.getDevicePixelRatio(),s=a.get("trailLength"),v=r.get("effect.constantSpeed"),g=r.get("effect.period")*1e3,h=v!=null;h?this.material.set("speed",v/1e3):this.material.set("period",g),this.material[h?"define":"undefine"]("vertex","CONSTANT_SPEED");var _=r.get("polyline");i.trailLength=s,this.material.set("trailLength",s),i.resetOffset(),["position","positionPrev","positionNext"].forEach(function(w){i.attributes[w].value=n.attributes[w].value});var m=["dist","distAll","start","offset","color"];m.forEach(function(w){i.attributes[w].init(i.vertexCount)}),i.indices=n.indices;var o=[],l=a.get("trailColor"),c=a.get("trailOpacity"),u=l!=null,C=c!=null;this.updateWorldTransform();var x=this.worldTransform.x.len(),b=this.worldTransform.y.len(),O=this.worldTransform.z.len(),y=0,V=0;e.each(function(w){var A=e.getItemLayout(w),z=C?c:pe(e,w),U=ue(e,w);z==null&&(z=1),o=P.parseColor(u?l:U,o),o[3]*=z;for(var R=_?n.getPolylineVertexCount(A):n.getCubicCurveVertexCount(A[0],A[1],A[2],A[3]),D=0,S=[],G=[],d=y;d<y+R;d++)i.attributes.position.get(d,S),S[0]*=x,S[1]*=b,S[2]*=O,d>y&&(D+=ve.dist(S,G)),i.attributes.dist.set(d,D),ve.copy(G,S);V=Math.max(V,D);for(var j=Math.random()*(h?D:g),d=y;d<y+R;d++)i.attributes.distAll.set(d,D),i.attributes.start.set(d,j),i.attributes.offset.set(d,Te(n.attributes.offset.get(d))*f/2),i.attributes.color.set(d,o);y+=R}),this.material.set("spotSize",V*.1*s),this.material.set("spotIntensity",a.get("spotIntensity")),i.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});P.Shader.import(we);function Ee(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}const Ie=_e.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new P.Node,this._meshLinesMaterial=new P.Material({shader:P.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new P.Mesh({geometry:new k,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new Me},render:function(e,t,n){this.groupGL.add(this._linesMesh);var r=e.coordinateSystem,i=e.getData();if(r&&r.viewGL){var a=r.viewGL;a.add(this.groupGL),this._updateLines(e,t,n);var f=r.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[f]("fragment","SRGB_DECODE"),this._trailMesh.material[f]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(i,n,this._linesMesh.geometry),s.__time=s.__time||0;var v=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(v,{__time:v}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?P.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,n){var r=e.getData(),i=e.coordinateSystem,a=this._linesMesh.geometry,f=e.get("polyline");a.expandLine=!0;var s=Ee(i);a.segmentScale=s/20;var v="lineStyle.width".split("."),g=n.getDevicePixelRatio();r.each(function(o){var l=r.getItemModel(o),c=l.get(v);c==null&&(c=1),r.setItemVisual(o,"lineWidth",c)}),a.useNativeLine=!1;var h=0,_=0;r.each(function(o){var l=r.getItemLayout(o);f?(h+=a.getPolylineVertexCount(l),_+=a.getPolylineTriangleCount(l)):(h+=a.getCubicCurveVertexCount(l[0],l[1],l[2],l[3]),_+=a.getCubicCurveTriangleCount(l[0],l[1],l[2],l[3]))}),a.setVertexCount(h),a.setTriangleCount(_),a.resetOffset();var m=[];r.each(function(o){var l=r.getItemLayout(o),c=ue(r,o),u=pe(r,o),C=r.getItemVisual(o,"lineWidth")*g;u==null&&(u=1),m=P.parseColor(c,m),m[3]*=u,f?a.addPolyline(l,m,C):a.addCubicCurve(l[0],l[1],l[2],l[3],m,C)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Fe(e){e.registerChartView(Ie),e.registerSeriesModel(De),e.registerLayout(Se),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}export{Fe as Lines3DChart};
