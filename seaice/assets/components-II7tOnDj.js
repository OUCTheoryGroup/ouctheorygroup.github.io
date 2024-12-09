import{B as he,V as E,b as Te,r as oe,a as _,S as ut,T as C,u as ae,c as A,d as v,F as z,P as F,e as ht,M as P,f as $,R as me,m as Y,h as Ue,i as R,j as ke,k as B,O as Se,l as ct,t as _e,n as ft,o as pt,p as dt,g as mt}from"./index-DVsc3apz.js";import{M as we,aj as _t,ak as gt,u as vt,C as xt,w as ye,al as W,am as Tt,p as St,a1 as wt,an as yt}from"./UncertaintyAnalysisView-CHHDHO6w.js";import{c as bt,n as Dt,A as Pt}from"./Axis-Cvw-4kA1.js";import"./extension-B4bsB013.js";import"./renderers-CMxOuPZX.js";import"./index-B2XI_na9.js";function Ct(e,t){var i=t;t instanceof we||(i=new we(t));var r=bt(i);return r.setExtent(e[0],e[1]),Dt(r,i),r}const At={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Et={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Lt={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var ee=oe.firstNotNull,Re={left:0,middle:1,right:2};function Me(e){return e instanceof Array||(e=[e,e]),e}var Ge=he.extend(function(){return{zr:null,viewGL:null,_center:new E,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new Te,_panVelocity:new Te,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var i=t.baseDistance||0,r=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+i,o=e.get("orthographicSize")+r;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(f){this[f[0]]=ee(e.get(f[0]),f[1])},this),this.minDistance+=i,this.maxDistance+=i,this.minOrthographicSize+=r,this.maxOrthographicSize+=r;var l=e.ecModel,u={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(f){u[f]=ee(e.get(f),l&&l.get(f))});var s=ee(t.alpha,e.get("alpha"))||0,h=ee(t.beta,e.get("beta"))||0,c=ee(t.center,e.get("center"))||[0,0,0];u.animation&&u.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:s,beta:h,center:c,distance:a,orthographicSize:o,easing:u.animationEasingUpdate,duration:u.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(s),this.setBeta(h),this.setCenter(c),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,i=this,r={},n={};return e.distance!=null&&(r.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(r.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(r.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(r.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(r.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(r).when(e.duration||1e3,n).during(function(){r.alpha!=null&&i.setAlpha(r.alpha),r.beta!=null&&i.setBeta(r.beta),r.distance!=null&&i.setDistance(r.distance),r.center!=null&&i.setCenter(r.center),r.orthographicSize!=null&&i.setOrthographicSize(r.orthographicSize),i._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),i=this._orthoSize,r=i/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-r/2,t.right=r/2,t.top=i/2,t.bottom=-i/2},_updatePan:function(e){var t=this._panVelocity,i=this._distance,r=this.getCamera(),n=r.worldTransform.y,a=r.worldTransform.x;this._center.scaleAndAdd(a,-t.x*i/200).scaleAndAdd(n,-t.y*i/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new E,i=this._theta+Math.PI/2,r=this._phi+Math.PI/2,n=Math.sin(i);t.x=n*Math.cos(r),t.y=-Math.cos(i),t.z=n*Math.sin(r),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var i=e.len();i=i*t,i<1e-4&&(i=0),e.normalize().scale(i)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),i=Math.atan2(e.x,e.z);this._theta=t,this._phi=-i,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,i=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,i)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===Re[this.rotateMouseButton]?this._mode="rotate":e.event.button===Re[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=Me(this.panSensitivity),i=Me(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*i[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*i[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var i=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(i,r))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var i=t.indexOf(e);i>=0&&t.splice(i,1)}),e}});Object.defineProperty(Ge.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});function be(){}be.prototype={constructor:be,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new _.DirectionalLight({shadowBias:.005}),this.ambientLight=new _.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,i=this.ambientLight,r=e.getModel("light"),n=r.getModel("main"),a=r.getModel("ambient");t.intensity=n.get("intensity"),i.intensity=a.get("intensity"),t.color=_.parseColor(n.get("color")).slice(0,3),i.color=_.parseColor(a.get("color")).slice(0,3);var o=n.get("alpha")||0,l=n.get("beta")||0;t.position.setArray(_.directionFromAlphaBeta(o,l)),t.lookAt(_.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=_.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,i){var r=t.getModel("light.ambientCubemap"),n=r.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var o=this;a=this._cubemapLightsCache[n]=_.createAmbientCubemap(r.option,e,i,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),i.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,i){var r=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new ut,n._skybox}var o=a();if(r&&r!=="none")if(r==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var l=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(l),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof r=="object"&&r.colorStops||typeof r=="string"&&_t(r)){this._isSkyboxFromAmbientCubemap=!1;var u=new _.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(u);var s=u.image=document.createElement("canvas");s.width=s.height=16;var h=s.getContext("2d"),c=new gt({shape:{x:0,y:0,width:16,height:16},style:{fill:r}});vt(h,c),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var u=_.loadTexture(r,i,{anisotropic:8,flipY:!1});o.setEnvironmentMap(u),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var f=t.coordinateSystem;if(this._skybox)if(f&&f.viewGL&&r!=="auto"&&!(r.match&&r.match(/.hdr$/))){var m=f.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[m]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var se=function(){this._pool={},this._allocatedTextures=[]};se.prototype={constructor:se,get:function(e){var t=Ne(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var i=this._pool[t];if(!i.length){var r=new C(e);return this._allocatedTextures.push(r),r}return i.pop()},put:function(e){var t=Ne(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var i=this._pool[t];i.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var Ve={width:512,height:512,type:A.UNSIGNED_BYTE,format:A.RGBA,wrapS:A.CLAMP_TO_EDGE,wrapT:A.CLAMP_TO_EDGE,minFilter:A.LINEAR_MIPMAP_LINEAR,magFilter:A.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},ge=Object.keys(Ve);function Ne(e){ae.defaultsWithPropList(e,Ve,ge),Rt(e);for(var t="",i=0;i<ge.length;i++){var r=ge[i],n=e[r].toString();t+=n}return t}function Rt(e){var t=Mt(e.width,e.height);e.format===A.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==A.NEAREST_MIPMAP_NEAREST||e.minFilter==A.NEAREST_MIPMAP_LINEAR?e.minFilter=A.NEAREST:(e.minFilter==A.LINEAR_MIPMAP_LINEAR||e.minFilter==A.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=A.LINEAR)),t||(e.wrapS=A.CLAMP_TO_EDGE,e.wrapT=A.CLAMP_TO_EDGE)}function Mt(e,t){return(e&e-1)===0&&(t&t-1)===0}const Nt=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`;var V=["px","nx","py","ny","pz","nz"];v.import(Nt);function ve(e,t,i){if(i==="alphaMap")return e.material.get("diffuseMap");if(i==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var r=e.material.get("alphaCutoff");return r||0}return 0}else return i==="uvRepeat"?e.material.get("uvRepeat"):i==="uvOffset"?e.material.get("uvOffset"):t.get(i)}function Oe(e,t){var i=e.material,r=t.material;return i.get("diffuseMap")!==r.get("diffuseMap")||(i.get("alphaCutoff")||0)!==(r.get("alphaCutoff")||0)}var I=he.extend(function(){return{softShadow:I.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new z,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new se}},function(){this._gaussianPassH=new F({fragment:v.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new F({fragment:v.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new F({fragment:v.source("clay.sm.debug_depth")})},{render:function(e,t,i,r){i||(i=t.getMainCamera()),this.trigger("beforerender",this,e,t,i),this._renderShadowPass(e,t,i,r),this.trigger("afterrender",this,e,t,i)},renderDebug:function(e,t){e.saveClear();var i=e.viewport,r=0,n=0,a=t||i.width/4,o=a;this.softShadow===I.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var l in this._textures){var u=this._textures[l];e.setViewport(r,n,a*u.width/u.height,o),this._outputDepthPass.setUniform("depthMap",u),this._outputDepthPass.render(e),r+=a*u.width/u.height}e.setViewport(i),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===I.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var i=this.kernelPCF;i&&i.length?t.material.define("fragment","PCF_KERNEL_SIZE",i.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var i=this;t.traverse(function(a){a.isRenderable()&&i._updateReceivers(e,a)});for(var r=0;r<t.lights.length;r++){var n=t.lights[r];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,i,r){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(r||t.update(),i&&i.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],l=[],u=[],s=[],h=[],c=[],f,m=0;m<this._lightsCastShadow.length;m++){var d=this._lightsCastShadow[m];if(d.type==="DIRECTIONAL_LIGHT"){if(f){console.warn("Only one direectional light supported with shadow cascade");continue}if(d.shadowCascade>4){console.warn("Support at most 4 cascade");continue}d.shadowCascade>1&&(f=d),this.renderDirectionalLightShadow(e,t,i,d,h,s,u)}else d.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,d,l,o):d.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,d,c);this._shadowMapNumber[d.type]++}for(var D in this._shadowMapNumber)for(var y=this._shadowMapNumber[D],w=D+"_SHADOWMAP_COUNT",m=0;m<this._receivers.length;m++){var x=this._receivers[m],T=x.material;T.fragmentDefines[w]!==y&&(y>0?T.define("fragment",w,y):T.isDefined("fragment",w)&&T.undefine("fragment",w))}for(var m=0;m<this._receivers.length;m++){var x=this._receivers[m],T=x.material;f?T.define("fragment","SHADOW_CASCADE",f.shadowCascade):T.undefine("fragment","SHADOW_CASCADE")}var p=t.shadowUniforms;function L(X){return X.height}if(u.length>0){var N=u.map(L);if(p.directionalLightShadowMaps={value:u,type:"tv"},p.directionalLightMatrices={value:s,type:"m4v"},p.directionalLightShadowMapSizes={value:N,type:"1fv"},f){var M=h.slice(),O=h.slice();M.pop(),O.shift(),M.reverse(),O.reverse(),s.reverse(),p.shadowCascadeClipsNear={value:M,type:"1fv"},p.shadowCascadeClipsFar={value:O,type:"1fv"}}}if(o.length>0){var b=o.map(L),p=t.shadowUniforms;p.spotLightShadowMaps={value:o,type:"tv"},p.spotLightMatrices={value:l,type:"m4v"},p.spotLightShadowMapSizes={value:b,type:"1fv"}}c.length>0&&(p.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var e=new ht,t=new P,i=new $,r=new P,n=new P,a=new P,o=new P;return function(l,u,s,h,c,f,m){var d=this._getDepthMaterial(h),D={getMaterial:function(de){return de.shadowDepthMaterial||d},isMaterialChanged:Oe,getUniform:ve,ifRender:function(de){return de.castShadow},sortCompare:me.opaqueSortCompare};if(!u.viewBoundingBoxLastFrame.isFinite()){var y=u.getBoundingBox();u.viewBoundingBoxLastFrame.copy(y).applyTransform(s.viewMatrix)}var w=Math.min(-u.viewBoundingBoxLastFrame.min.z,s.far),x=Math.max(-u.viewBoundingBoxLastFrame.max.z,s.near),T=this._getDirectionalLightCamera(h,u,s),p=a.array;o.copy(T.projectionMatrix),Y.invert(n.array,T.worldTransform.array),Y.multiply(n.array,n.array,s.worldTransform.array),Y.multiply(p,o.array,n.array);for(var L=[],N=s instanceof B,M=(s.near+s.far)/(s.near-s.far),O=2*s.near*s.far/(s.near-s.far),b=0;b<=h.shadowCascade;b++){var X=x*Math.pow(w/x,b/h.shadowCascade),re=x+(w-x)*b/h.shadowCascade,ce=X*h.cascadeSplitLogFactor+re*(1-h.cascadeSplitLogFactor);L.push(ce),c.push(-(-ce*M+O)/-ce)}var ne=this._getTexture(h,h.shadowCascade);m.push(ne);var st=l.viewport,fe=l.gl;this._frameBuffer.attach(ne),this._frameBuffer.bind(l),fe.clear(fe.COLOR_BUFFER_BIT|fe.DEPTH_BUFFER_BIT);for(var b=0;b<h.shadowCascade;b++){var Ae=L[b],Ee=L[b+1];N?Y.perspective(t.array,s.fov/180*Math.PI,s.aspect,Ae,Ee):Y.ortho(t.array,s.left,s.right,s.bottom,s.top,Ae,Ee),e.setFromProjection(t),e.getTransformedBoundingBox(i,n),i.applyProjection(o);var q=i.min.array,Z=i.max.array;q[0]=Math.max(q[0],-1),q[1]=Math.max(q[1],-1),Z[0]=Math.min(Z[0],1),Z[1]=Math.min(Z[1],1),r.ortho(q[0],Z[0],q[1],Z[1],1,-1),T.projectionMatrix.multiplyLeft(r);var pe=h.shadowResolution||512;l.setViewport((h.shadowCascade-b-1)*pe,0,pe,pe,1);var lt=u.updateRenderList(T);l.renderPass(lt.opaque,T,D),this.softShadow===I.VSM&&this._gaussianFilter(l,ne,ne.width);var Le=new P;Le.copy(T.viewMatrix).multiplyLeft(T.projectionMatrix),f.push(Le.array),T.projectionMatrix.copy(o)}this._frameBuffer.unbind(l),l.setViewport(st)}}(),renderSpotLightShadow:function(e,t,i,r,n){var a=this._getTexture(i),o=this._getSpotLightCamera(i),l=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT);var u=this._getDepthMaterial(i),s={getMaterial:function(f){return f.shadowDepthMaterial||u},isMaterialChanged:Oe,getUniform:ve,ifRender:function(f){return f.castShadow},sortCompare:me.opaqueSortCompare},h=t.updateRenderList(o);e.renderPass(h.opaque,o,s),this._frameBuffer.unbind(e),this.softShadow===I.VSM&&this._gaussianFilter(e,a,a.width);var c=new P;c.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),n.push(a),r.push(c.array)},renderPointLightShadow:function(e,t,i,r){var n=this._getTexture(i),a=e.gl;r.push(n);var o=this._getDepthMaterial(i),l={getMaterial:function(x){return x.shadowDepthMaterial||o},getUniform:ve,sortCompare:me.opaqueSortCompare},u={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},s=new $,h=i.getWorldPosition().array,c=new $,f=i.range;c.min.setArray(h),c.max.setArray(h);var m=new E(f,f,f);c.max.add(m),c.min.sub(m);var d={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(x){if(x.isRenderable()&&x.castShadow){var T=x.geometry;if(!T.boundingBox){for(var p=0;p<V.length;p++)u[V[p]].push(x);return}if(s.transformFrom(T.boundingBox,x.worldTransform),!s.intersectBoundingBox(c))return;s.updateVertices();for(var p=0;p<V.length;p++)d[V[p]]=!1;for(var p=0;p<8;p++){var L=s.vertices[p],N=L[0]-h[0],M=L[1]-h[1],O=L[2]-h[2],b=Math.abs(N),X=Math.abs(M),re=Math.abs(O);b>X?b>re?d[N>0?"px":"nx"]=!0:d[O>0?"pz":"nz"]=!0:X>re?d[M>0?"py":"ny"]=!0:d[O>0?"pz":"nz"]=!0}for(var p=0;p<V.length;p++)d[V[p]]&&u[V[p]].push(x)}});for(var D=0;D<6;D++){var y=V[D],w=this._getPointLightCamera(i,y);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+D),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(u[y],w,l)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],i=e.type==="POINT_LIGHT";if(!t){var r=i?"clay.sm.distance.":"clay.sm.depth.";t=new Ue({precision:this.precision,shader:new v(v.source(r+"vertex"),v.source(r+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===I.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),i&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,i){var r={width:i,height:i,type:R.FLOAT},n=this._texturePool.get(r);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",i),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",i),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var i=e.__uid__,r=this._textures[i],n=e.shadowResolution||512;return t=t||1,r||(e.type==="POINT_LIGHT"?r=new ke:r=new C,r.width=n*t,r.height=n,this.softShadow===I.VSM?(r.type=R.FLOAT,r.anisotropic=4):(r.minFilter=A.NEAREST,r.magFilter=A.NEAREST,r.useMipmap=!1),this._textures[i]=r),r},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new B,nx:new B,py:new B,ny:new B,pz:new B,nz:new B});var i=this._lightCameras.point[t];switch(i.far=e.range,i.fov=90,i.position.set(0,0,0),t){case"px":i.lookAt(E.POSITIVE_X,E.NEGATIVE_Y);break;case"nx":i.lookAt(E.NEGATIVE_X,E.NEGATIVE_Y);break;case"py":i.lookAt(E.POSITIVE_Y,E.POSITIVE_Z);break;case"ny":i.lookAt(E.NEGATIVE_Y,E.NEGATIVE_Z);break;case"pz":i.lookAt(E.POSITIVE_Z,E.NEGATIVE_Y);break;case"nz":i.lookAt(E.NEGATIVE_Z,E.NEGATIVE_Y);break}return e.getWorldPosition(i.position),i.update(),i},_getDirectionalLightCamera:function(){var e=new P,t=new $,i=new $;return function(r,n,a){this._lightCameras.directional||(this._lightCameras.directional=new Se);var o=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(r.rotation),o.scale.copy(r.scale),o.updateWorldTransform(),P.invert(e,o.worldTransform),P.multiply(e,e,a.worldTransform),i.copy(t).applyTransform(e);var l=i.min.array,u=i.max.array;return o.position.set((l[0]+u[0])/2,(l[1]+u[1])/2,u[2]).transformMat4(o.worldTransform),o.near=0,o.far=-l[2]+u[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=l[0],o.right=u[0],o.top=u[1],o.bottom=l[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new B);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),Y.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var i in this._textures)this._textures[i].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var r=0;r<this._receivers.length;r++){var n=this._receivers[r];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});I.VSM=1;I.PCF=2;var te=he.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var i=this.outputs[e],r=i.parameters,n=i._parametersCopy;if(n||(n=i._parametersCopy={}),r)for(var a in r)a!=="width"&&a!=="height"&&(n[a]=r[a]);var o,l;return r.width instanceof Function?o=r.width.call(this,t):o=r.width,r.height instanceof Function?l=r.height.call(this,t):l=r.height,(n.width!==o||n.height!==l)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=o,n.height=l,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var i=this.outputs[t];if(i)return this._rendered?i.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(i.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,i){this.inputLinks[e]={node:t,pin:i},t.outputLinks[i]||(t.outputLinks[i]=[]),t.outputLinks[i].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var i=this.inputLinks[t];i.node.updateReference(i.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),Fe=he.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var i in t.inputs)if(t.inputs[i]){if(t.pass&&!t.pass.material.isUniformEnabled(i)){console.warn("Pin "+t.name+"."+i+" not used.");continue}var r=t.inputs[i],n=this.findPin(r);n?t.link(i,n.node,n.pin):console.warn(typeof r=="string"?"Node "+r+" not exist":"Pin of "+r.node+"."+r.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof te)&&(e={node:e}),typeof e.node=="string")for(var i=0;i<this.nodes.length;i++){var r=this.nodes[i];r.name===e.node&&(t=r)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),Ot=Fe.extend(function(){return{_outputs:[],_texturePool:new se,_frameBuffer:new z({depthBuffer:!1})}},{addNode:function(e){Fe.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var i=0;i<this.nodes.length;i++)this.nodes[i].outputs||this._outputs.push(this.nodes[i])}for(var i=0;i<this.nodes.length;i++)this.nodes[i].beforeFrame();for(var i=0;i<this._outputs.length;i++)this._outputs[i].updateReference();for(var i=0;i<this._outputs.length;i++)this._outputs[i].render(e,t);for(var i=0;i<this.nodes.length;i++)this.nodes[i].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),Ft=te.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new z},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var i;if(!this.outputs)i=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var r=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),o=this.outputs[n],l=this._compositor.allocateTexture(a);this._outputTextures[n]=l;var u=o.attachment||t.COLOR_ATTACHMENT0;typeof u=="string"&&(u=t[u]),r.attach(l,u)}r.bind(e);var s=e.getGLExtension("EXT_draw_buffers");if(s){var h=[];for(var u in this.outputs)u=parseInt(u),u>=t.COLOR_ATTACHMENT0&&u<=t.COLOR_ATTACHMENT0+8&&h.push(u);s.drawBuffersEXT(h)}e.saveClear(),e.clearBit=A.DEPTH_BUFFER_BIT|A.COLOR_BUFFER_BIT,i=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),r.unbind(e)}this.trigger("afterrender",i),this._rendering=!1,this._rendered=!0}}),Ht=te.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),zt=te.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new F({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var i=e.gl;for(var r in this.inputLinks){var n=this.inputLinks[r],a=n.node.getOutput(e,n.pin);this.pass.setUniform(r,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var l in this.outputs){var u=this.updateParameter(l,e);isNaN(u.width)&&this.updateParameter(l,e);var s=this.outputs[l],h=this._compositor.allocateTexture(u);this._outputTextures[l]=h;var c=s.attachment||i.COLOR_ATTACHMENT0;typeof c=="string"&&(c=i[c]),o[c]=h}this._compositor.getFrameBuffer().bind(e);for(var c in o)this._compositor.getFrameBuffer().attach(o[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var r in this.inputLinks){var n=this.inputLinks[r];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var i=this.outputs[e],r=i.parameters,n=i._parametersCopy;if(n||(n=i._parametersCopy={}),r)for(var a in r)a!=="width"&&a!=="height"&&(n[a]=r[a]);var o,l;return typeof r.width=="function"?o=r.width.call(this,t):o=r.width,typeof r.height=="function"?l=r.height.call(this,t):l=r.height,o=Math.ceil(o),l=Math.ceil(l),(n.width!==o||n.height!==l)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=o,n.height=l,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){te.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const Bt=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,We=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,It=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,je=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Ut=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,Ke=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Xe=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,qe=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Ze=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,Ye=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,kt=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,Qe=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,Je=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function Gt(e){e.import(Bt),e.import(We),e.import(It),e.import(je),e.import(Ut),e.import(Ke),e.import(Xe),e.import(qe),e.import(Ze),e.import(Ye),e.import(kt),e.import(Qe),e.import(Je)}Gt(v);var Vt=/^#source\((.*?)\)/;function Wt(e,t){var i=new Ot;t=t||{};var r={textures:{},parameters:{}},n=function(l,u){for(var s=0;s<e.nodes.length;s++){var h=e.nodes[s],c=jt(h,r,t);c&&i.addNode(c)}};for(var a in e.parameters){var o=e.parameters[a];r.parameters[a]=Pe(o)}return qt(e,r,t,function(l){r.textures=l,n()}),i}function jt(e,t,i){var r=e.type||"filter",n,a,o;if(r==="filter"){var l=e.shader.trim(),u=Vt.exec(l);if(u?n=v.source(u[1].trim()):l.charAt(0)==="#"&&(n=t.shaders[l.substr(1)]),n||(n=l),!n)return}if(e.inputs){a={};for(var s in e.inputs)typeof e.inputs[s]=="string"?a[s]=e.inputs[s]:a[s]={node:e.inputs[s].node,pin:e.inputs[s].pin}}if(e.outputs){o={};for(var s in e.outputs){var h=e.outputs[s];o[s]={},h.attachment!=null&&(o[s].attachment=h.attachment),h.keepLastFrame!=null&&(o[s].keepLastFrame=h.keepLastFrame),h.outputLastFrame!=null&&(o[s].outputLastFrame=h.outputLastFrame),h.parameters&&(o[s].parameters=Pe(h.parameters))}}var c;if(r==="scene"?c=new Ft({name:e.name,scene:i.scene,camera:i.camera,outputs:o}):r==="texture"?c=new Ht({name:e.name,outputs:o}):c=new zt({name:e.name,shader:n,inputs:a,outputs:o}),c){if(e.parameters)for(var s in e.parameters){var f=e.parameters[s];typeof f=="string"?(f=f.trim(),f.charAt(0)==="#"?f=t.textures[f.substr(1)]:c.on("beforerender",Zt(s,$e(f)))):typeof f=="function"&&c.on("beforerender",f),c.setParameter(s,f)}if(e.defines&&c.pass)for(var s in e.defines){var f=e.defines[s];c.pass.material.define("fragment",s,f)}}return c}function Kt(e,t){return e}function Xt(e,t){return t}function Pe(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(r){var n=e[r];n!=null&&(typeof n=="string"&&(n=R[n]),t[r]=n)});var i=e.scale||1;return["width","height"].forEach(function(r){if(e[r]!=null){var n=e[r];typeof n=="string"?(n=n.trim(),t[r]=Yt(r,$e(n),i)):t[r]=n}}),t.width||(t.width=Kt),t.height||(t.height=Xt),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function qt(e,t,i,r){if(!e.textures){r({});return}var n={},a=0,o=!1,l=i.textureRootPath;ae.each(e.textures,function(u,s){var h,c=u.path,f=Pe(u.parameters);if(Array.isArray(c)&&c.length===6)l&&(c=c.map(function(m){return ae.relative2absolute(m,l)})),h=new ke(f);else if(typeof c=="string")l&&(c=ae.relative2absolute(c,l)),h=new C(f);else return;h.load(c),a++,h.once("success",function(){n[s]=h,a--,a===0&&(r(n),o=!0)})}),a===0&&!o&&r(n)}function Zt(e,t){return function(i){var r=i.getDevicePixelRatio(),n=i.getWidth(),a=i.getHeight(),o=t(n,a,r);this.setParameter(e,o)}}function Yt(e,t,i){return i=i||1,function(r){var n=r.getDevicePixelRatio(),a=r.getWidth()*i,o=r.getHeight()*i;return t(a,o,n)}}function $e(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var i=new Function("width","height","dpr","return "+t[1]);return i(1,1),i}catch{throw new Error("Invalid expression.")}}function Q(e,t){for(var i=0,r=1/t,n=e;n>0;)i=i+r*(n%t),n=Math.floor(n/t),r=r/t;return i}const Qt=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;v.import(Qt);function et(e){for(var t=new Uint8Array(e*e*4),i=0,r=new E,n=0;n<e;n++)for(var a=0;a<e;a++)r.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[i++]=(r.x*.5+.5)*255,t[i++]=(r.y*.5+.5)*255,t[i++]=0,t[i++]=255;return t}function He(e){return new C({pixels:et(e),wrapS:R.REPEAT,wrapT:R.REPEAT,width:e,height:e})}function Jt(e,t,i){var r=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=Q(n+t,2)*(i?1:2)*Math.PI,o=Q(n+t,3)*Math.PI,l=Math.random(),u=Math.cos(a)*Math.sin(o)*l,s=Math.cos(o)*l,h=Math.sin(a)*Math.sin(o)*l;r[n*3]=u,r[n*3+1]=s,r[n*3+2]=h}return r}function k(e){e=e||{},this._ssaoPass=new F({fragment:v.source("ecgl.ssao.estimate")}),this._blurPass=new F({fragment:v.source("ecgl.ssao.blur")}),this._framebuffer=new z({depthBuffer:!1}),this._ssaoTexture=new C,this._blurTexture=new C,this._blurTexture2=new C,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}k.prototype.setDepthTexture=function(e){this._depthTex=e};k.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};k.prototype.update=function(e,t,i){var r=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[i%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var l=new P;P.transpose(l,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",l.array);var u=this._ssaoTexture,s=this._blurTexture,h=this._blurTexture2;u.width=r/2,u.height=n/2,s.width=r,s.height=n,h.width=r,h.height=n,this._framebuffer.attach(u),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[r/2,n/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(s),o.setUniform("direction",0),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.attach(h),o.setUniform("textureSize",[r,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",s),o.render(e),this._framebuffer.unbind(e);var c=e.clearColor;e.gl.clearColor(c[0],c[1],c[2],c[3])};k.prototype.getTargetTexture=function(){return this._blurTexture2};k.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};k.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=Jt(e,t*e,!!this._normalTex)};k.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=et(e),t.width=t.height=e,t.dirty()):(t=He(e),this._ssaoPass.setUniform("noiseTex",He(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};k.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const $t=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;v.import($t);function G(e){e=e||{},this._ssrPass=new F({fragment:v.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new F({fragment:v.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new F({fragment:v.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new F({fragment:v.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new C({type:R.HALF_FLOAT}),this._texture2=new C({type:R.HALF_FLOAT}),this._texture3=new C({type:R.HALF_FLOAT}),this._prevTexture=new C({type:R.HALF_FLOAT}),this._currentTexture=new C({type:R.HALF_FLOAT}),this._frameBuffer=new z({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}G.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var i=e&&t;this._ssrPass.material[i?"enableTexture":"disableTexture"]("specularCubemap")};G.prototype.update=function(e,t,i,r){var n=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,l=this._texture2,u=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,l.width=u.width=n,l.height=u.height=a;var s=this._frameBuffer,h=this._ssrPass,c=this._blurPass1,f=this._blurPass2,m=this._blendPass,d=new P,D=new P;P.transpose(d,t.worldTransform),P.transpose(D,t.viewMatrix),h.setUniform("sourceTexture",i),h.setUniform("projection",t.projectionMatrix.array),h.setUniform("projectionInv",t.invProjectionMatrix.array),h.setUniform("toViewSpace",d.array),h.setUniform("toWorldSpace",D.array),h.setUniform("nearZ",t.near);var y=r/this._totalSamples*this._samplePerFrame;if(h.setUniform("jitterOffset",y),h.setUniform("sampleOffset",r*this._samplePerFrame),c.setUniform("textureSize",[o.width,o.height]),f.setUniform("textureSize",[n,a]),f.setUniform("sourceTexture",i),c.setUniform("projection",t.projectionMatrix.array),f.setUniform("projection",t.projectionMatrix.array),s.attach(o),s.bind(e),h.render(e),this._physicallyCorrect&&(s.attach(this._currentTexture),m.setUniform("texture1",this._prevTexture),m.setUniform("texture2",o),m.material.set({weight1:r>=1?.95:0,weight2:r>=1?.05:1}),m.render(e)),s.attach(l),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),c.render(e),s.attach(u),f.setUniform("texture",l),f.render(e),s.unbind(e),this._physicallyCorrect){var w=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=w}};G.prototype.getTargetTexture=function(){return this._texture3};G.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};G.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=ct.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};G.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};G.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};G.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const ze=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],ei=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;v.import(ei);function xe(e,t,i,r,n){var a=e.gl;t.setUniform(a,"1i",i,n),a.activeTexture(a.TEXTURE0+n),r.isRenderable()?r.bind(e):r.unbind(e)}function ti(e,t,i,r,n){var a,o,l,u,s=e.gl;return function(h,c,f){if(!(u&&u.material===h.material)){var m=h.material,d=h.__program,D=m.get("roughness");D==null&&(D=1);var y=m.get("normalMap")||t,w=m.get("roughnessMap"),x=m.get("bumpMap"),T=m.get("uvRepeat"),p=m.get("uvOffset"),L=m.get("detailUvRepeat"),N=m.get("detailUvOffset"),M=!!x&&m.isTextureEnabled("bumpMap"),O=!!w&&m.isTextureEnabled("roughnessMap"),b=m.isDefined("fragment","DOUBLE_SIDED");x=x||i,w=w||r,f!==c?(c.set("normalMap",y),c.set("bumpMap",x),c.set("roughnessMap",w),c.set("useBumpMap",M),c.set("useRoughnessMap",O),c.set("doubleSide",b),T!=null&&c.set("uvRepeat",T),p!=null&&c.set("uvOffset",p),L!=null&&c.set("detailUvRepeat",L),N!=null&&c.set("detailUvOffset",N),c.set("roughness",D)):(d.setUniform(s,"1f","roughness",D),a!==y&&xe(e,d,"normalMap",y,0),o!==x&&x&&xe(e,d,"bumpMap",x,1),l!==w&&w&&xe(e,d,"roughnessMap",w,2),T!=null&&d.setUniform(s,"2f","uvRepeat",T),p!=null&&d.setUniform(s,"2f","uvOffset",p),L!=null&&d.setUniform(s,"2f","detailUvRepeat",L),N!=null&&d.setUniform(s,"2f","detailUvOffset",N),d.setUniform(s,"1i","useBumpMap",+M),d.setUniform(s,"1i","useRoughnessMap",+O),d.setUniform(s,"1i","doubleSide",+b)),a=y,o=x,l=w,u=h}}}function J(e){this._depthTex=new C({format:R.DEPTH_COMPONENT,type:R.UNSIGNED_INT}),this._normalTex=new C({type:R.HALF_FLOAT}),this._framebuffer=new z,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,z.DEPTH_ATTACHMENT),this._normalMaterial=new Ue({shader:new v(v.source("ecgl.normal.vertex"),v.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=_e.createBlank("#000"),this._defaultBumpMap=_e.createBlank("#000"),this._defaultRoughessMap=_e.createBlank("#000"),this._debugPass=new F({fragment:v.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}J.prototype.getDepthTexture=function(){return this._depthTex};J.prototype.getNormalTexture=function(){return this._normalTex};J.prototype.update=function(e,t,i){var r=e.getWidth(),n=e.getHeight(),a=this._depthTex,o=this._normalTex,l=this._normalMaterial;a.width=r,a.height=n,o.width=r,o.height=n;var u=t.getRenderList(i).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(u,i,{getMaterial:function(){return l},ifRender:function(s){return s.renderNormal},beforeRender:ti(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};J.prototype.renderDebug=function(e){this._debugPass.render(e)};J.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function ie(e){e=e||{},this._edgePass=new F({fragment:v.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new C({type:R.HALF_FLOAT}),this._frameBuffer=new z,this._frameBuffer.attach(this._targetTexture)}ie.prototype.update=function(e,t,i,r){var n=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var l=this._frameBuffer;l.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",i),this._edgePass.render(e),l.unbind(e)};ie.prototype.getTargetTexture=function(){return this._targetTexture};ie.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};ie.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const ii={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},ri=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,ni=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;v.import(We);v.import(je);v.import(Ke);v.import(Xe);v.import(qe);v.import(Ze);v.import(Ye);v.import(Qe);v.import(Je);v.import(ri);v.import(ni);function tt(e,t){return{color:{parameters:{width:e,height:t}}}}var Ce=["composite","FXAA"];function g(){this._width,this._height,this._dpr,this._sourceTexture=new C({type:R.HALF_FLOAT}),this._depthTexture=new C({format:R.DEPTH_COMPONENT,type:R.UNSIGNED_INT}),this._framebuffer=new z,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,z.DEPTH_ATTACHMENT),this._normalPass=new J,this._compositor=Wt(ii);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(r){return this._compositor.getNodeByName(r)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=Ce.map(function(r){return this._compositor.getNodeByName(r)},this);var i={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new k(i),this._ssrPass=new G(i),this._edgePass=new ie(i)}g.prototype.resize=function(r,n,i){i=i||1;var r=r*i,n=n*i,a=this._sourceTexture,o=this._depthTexture;a.width=r,a.height=n,o.width=r,o.height=n;var l={getWidth:function(){return r},getHeight:function(){return n},getDevicePixelRatio:function(){return i}};function u(s,h){if(typeof s[h]=="function"){var c=s[h].__original||s[h];s[h]=function(f){return c.call(this,l)},s[h].__original=c}}this._compositor.nodes.forEach(function(s){for(var h in s.outputs){var c=s.outputs[h].parameters;c&&(u(c,"width"),u(c,"height"))}for(var f in s.parameters)u(s.parameters,f)}),this._width=r,this._height=n,this._dpr=i};g.prototype.getWidth=function(){return this._width};g.prototype.getHeight=function(){return this._height};g.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};g.prototype._getPrevNode=function(e){for(var t=Ce.indexOf(e.name)-1,i=this._finalNodesChain[t];i&&!this._compositor.getNodeByName(i.name);)t-=1,i=this._finalNodesChain[t];return i};g.prototype._getNextNode=function(e){for(var t=Ce.indexOf(e.name)+1,i=this._finalNodesChain[t];i&&!this._compositor.getNodeByName(i.name);)t+=1,i=this._finalNodesChain[t];return i};g.prototype._addChainNode=function(e){var t=this._getPrevNode(e),i=this._getNextNode(e);t&&(e.inputs.texture=t.name,i?(e.outputs=tt(this.getWidth.bind(this),this.getHeight.bind(this)),i.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};g.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),i=this._getNextNode(e);t&&(i?(t.outputs=tt(this.getWidth.bind(this),this.getHeight.bind(this)),i.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};g.prototype.updateNormal=function(e,t,i,r){this._ifRenderNormalPass()&&this._normalPass.update(e,t,i)};g.prototype.updateSSAO=function(e,t,i,r){this._ssaoPass.update(e,i,r)};g.prototype.enableSSAO=function(){this._enableSSAO=!0};g.prototype.disableSSAO=function(){this._enableSSAO=!1};g.prototype.enableSSR=function(){this._enableSSR=!0};g.prototype.disableSSR=function(){this._enableSSR=!1};g.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};g.prototype.getSourceFrameBuffer=function(){return this._framebuffer};g.prototype.getSourceTexture=function(){return this._sourceTexture};g.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};g.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};g.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};g.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};g.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};g.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};g.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};g.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};g.prototype.enableEdge=function(){this._enableEdge=!0};g.prototype.disableEdge=function(){this._enableEdge=!1};g.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};g.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var i={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",i);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};g.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var i=0;i<this._dofBlurNodes.length;i++)this._dofBlurNodes[i].setParameter("blurRadius",t);break;case"quality":var r={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=r;for(var i=0;i<this._dofBlurNodes.length;i++)this._dofBlurNodes[i].pass.material.define("POISSON_KERNEL_SIZE",r);this._dofBlurKernel=new Float32Array(r*2);break}};g.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var i={low:10,medium:15,high:30,ultra:80}[t]||20,r={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",i),this._ssrPass.setParameter("pixelStride",r);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};g.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};g.prototype.setEdgeColor=function(e){var t=_.parseColor(e);this._edgePass.setParameter("edgeColor",t)};g.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};g.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:_.Texture.NEAREST,magFilter:_.Texture.NEAREST,flipY:!1})};g.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};g.prototype.isSSREnabled=function(){return this._enableSSR};g.prototype.composite=function(e,t,i,r,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,i,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,i,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var l=this._dofBlurKernel,u=this._dofBlurKernelSize,s=Math.floor(ze.length/2/u),h=n%s,c=0;c<u*2;c++)l[c]=ze[c+h*u*2];for(var c=0;c<this._dofBlurNodes.length;c++)this._dofBlurNodes[c].setParameter("percent",n/30),this._dofBlurNodes[c].setParameter("poissonKernel",l);this._cocNode.setParameter("zNear",i.near),this._cocNode.setParameter("zFar",i.far),this._compositor.render(e,r)};g.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function De(e){for(var t=[],i=0;i<30;i++)t.push([Q(i,2),Q(i,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new C,this._sourceFb=new z,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new C,this._outputTex=new C;var r=this._blendPass=new F({fragment:v.source("clay.compositor.blend")});r.material.disableTexturesAll(),r.material.enableTexture(["texture1","texture2"]),this._blendFb=new z({depthBuffer:!1}),this._outputPass=new F({fragment:v.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}De.prototype={constructor:De,jitterProjection:function(e,t){var i=e.viewport,r=i.devicePixelRatio||e.getDevicePixelRatio(),n=i.width*r,a=i.height*r,o=this._haltonSequence[this._frame%this._haltonSequence.length],l=new P;l.array[12]=(o[0]*2-1)/n,l.array[13]=(o[1]*2-1)/a,P.mul(t.projectionMatrix,l,t.projectionMatrix),P.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,i){var r=this._blendPass;this._frame===0?(r.setUniform("weight1",0),r.setUniform("weight2",1)):(r.setUniform("weight1",.9),r.setUniform("weight2",.1)),r.setUniform("texture1",this._prevFrameTex),r.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),r.render(e),this._blendFb.unbind(e),i||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function S(e){e=e||"perspective",this.layer=null,this.scene=new ft,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new g,this._temporalSS=new De,this._shadowMapPass=new I;for(var t=[],i=0,r=0;r<30;r++){for(var n=[],a=0;a<6;a++)n.push(Q(i,2)*4-2),n.push(Q(i,3)*4-2),i++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(o,l,u){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,u)},this)}S.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof B||(this.camera=new B,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Se||(this.camera=new Se,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};S.prototype.setViewport=function(e,t,i,r,n){this.camera instanceof B&&(this.camera.aspect=i/r),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=i,this.viewport.height=r,this.viewport.devicePixelRatio=n,this._compositor.resize(i*n,r*n),this._temporalSS.resize(i*n,r*n)};S.prototype.containPoint=function(e,t){var i=this.viewport,r=this.layer.renderer.getHeight();return t=r-t,e>=i.x&&t>=i.y&&e<=i.x+i.width&&t<=i.y+i.height};var Be=new Te;S.prototype.castRay=function(e,t,i){var r=this.layer.renderer,n=r.viewport;return r.viewport=this.viewport,r.screenToNDC(e,t,Be),this.camera.castRay(Be,i),r.viewport=n,i};S.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var i=e.transparent[t],r=i.geometry;r.needsSortVerticesProgressively&&r.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),r.needsSortTrianglesProgressively&&r.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};S.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};S.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};S.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};S.prototype.hasDOF=function(){return this._enableDOF};S.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};S.prototype._doRender=function(e,t,i){var r=this.scene,n=this.camera;i=i||0,this._updateTransparent(e,r,n,i),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,r,n,!0)),this._updateShadowPCFKernel(i);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,r,n,this._temporalSS.getFrame())),this._updateSSAO(e,r,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(r,n,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,r,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,r,n,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(r,n,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(r,n,!0,!0)};S.prototype._updateTransparent=function(e,t,i,r){for(var n=new E,a=new P,o=i.getWorldPosition(),l=t.getRenderList(i).transparent,u=0;u<l.length;u++){var s=l[u],h=s.geometry;P.invert(a,s.worldTransform),E.transformMat4(n,o,a),h.needsSortTriangles&&h.needsSortTriangles()&&h.doSortTriangles(n,r),h.needsSortVertices&&h.needsSortVertices()&&h.doSortVertices(n,r)}};S.prototype._updateSSAO=function(e,t,i){var r=this._enableSSAO&&this._enablePostEffect;r&&this._compositor.updateSSAO(e,t,i,this._temporalSS.getFrame());for(var n=t.getRenderList(i),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[r?"enableTexture":"disableTexture"]("ssaoMap"),r&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};S.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],i=this.scene.getRenderList(this.camera),r=i.opaque,n=0;n<r.length;n++)r[n].receiveShadow&&(r[n].material.set("pcfKernel",t),r[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};S.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};S.prototype.setPostEffect=function(e,t){var i=this._compositor;this._enablePostEffect=e.get("enable");var r=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),l=e.getModel("SSR",e.getModel("screenSpaceReflection")),u=e.getModel("FXAA"),s=e.getModel("colorCorrection");r.get("enable")?i.enableBloom():i.disableBloom(),a.get("enable")?i.enableDOF():i.disableDOF(),l.get("enable")?i.enableSSR():i.disableSSR(),s.get("enable")?i.enableColorCorrection():i.disableColorCorrection(),n.get("enable")?i.enableEdge():i.disableEdge(),u.get("enable")?i.enableFXAA():i.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?i.enableSSAO():i.disableSSAO(),i.setBloomIntensity(r.get("intensity")),i.setEdgeColor(n.get("color")),i.setColorLookupTexture(s.get("lookupTexture"),t),i.setExposure(s.get("exposure")),["radius","quality","intensity"].forEach(function(h){i.setSSAOParameter(h,o.get(h))}),["quality","maxRoughness","physical"].forEach(function(h){i.setSSRParameter(h,l.get(h))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(h){i.setDOFParameter(h,a.get(h))}),["brightness","contrast","saturation"].forEach(function(h){i.setColorCorrection(h,s.get(h))})};S.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};S.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};S.prototype.isLinearSpace=function(){return this._enablePostEffect};S.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),i=0;i<t.length;i++)e.add(t[i]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};S.prototype.add=function(e){this.rootNode.add(e)};S.prototype.remove=function(e){this.rootNode.remove(e)};S.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(S.prototype,pt);const ai={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}};function Ie(e,t){e.id=e.id||e.name||t+""}var j=xt.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){j.superApply(this,"init",arguments),ye(this.option.layers,function(e,t){W(e,this.defaultLayerOption),Ie(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,j.superApply(this,"mergeOption",arguments);function i(o){return Tt(o,function(l,u,s){return Ie(u,s),l[u.id]=u,l},{})}if(t&&t.length){var r=i(e.layers),n=i(t);for(var a in r)n[a]?W(n[a],r[a],!0):t.push(e.layers[a]);this.option.layers=t}ye(this.option.layers,function(o){W(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,i){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=i},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});W(j.prototype,At);W(j.prototype,Et);W(j.prototype,Lt);W(j.prototype,ai);var it=Math.PI,H=Math.sin,U=Math.cos,rt=Math.tan,nt=Math.asin,at=Math.atan2,K=it/180,oi=1e3*60*60*24,si=2440588,li=2451545;function ui(e){return e.valueOf()/oi-.5+si}function hi(e){return ui(e)-li}var le=K*23.4397;function ci(e,t){return at(H(e)*U(le)-rt(t)*H(le),U(e))}function fi(e,t){return nt(H(t)*U(le)+U(t)*H(le)*H(e))}function pi(e,t,i){return at(H(e),U(e)*H(t)-rt(i)*U(t))}function di(e,t,i){return nt(H(t)*H(i)+U(t)*U(i)*U(e))}function mi(e,t){return K*(280.16+360.9856235*e)-t}function _i(e){return K*(357.5291+.98560028*e)}function gi(e){var t=K*(1.9148*H(e)+.02*H(2*e)+3e-4*H(3*e)),i=K*102.9372;return e+t+i+it}function vi(e){var t=_i(e),i=gi(t);return{dec:fi(i,0),ra:ci(i,0)}}var ot={};ot.getPosition=function(e,t,i){var r=K*-i,n=K*t,a=hi(e),o=vi(a),l=mi(a,r)-o.ra;return{azimuth:pi(l,n,o.dec),altitude:di(l,n,o.dec)}};const xi=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;_.Shader.import(dt);_.Shader.import(xi);const Ti=St.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new _.Node,this._sphereGeometry=new _.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new _.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new _.PlaneGeometry,this._earthMesh=new _.Mesh({renderNormal:!0}),this._atmosphereMesh=new _.Mesh,this._atmosphereGeometry=new _.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new _.Material({shader:new _.Shader(_.Shader.source("ecgl.atmosphere.vertex"),_.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=_.Mesh.CW,this._lightRoot=new _.Node,this._sceneHelper=new be,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new Ge({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,i){var r=e.coordinateSystem,n=e.get("shading");r.viewGL.add(this._lightRoot),e.get("show")?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL),this._sceneHelper.setScene(r.viewGL.scene),r.viewGL.setPostEffect(e.getModel("postEffect"),i),r.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+n;(!a.material||a.material.shader.name!==o)&&(a.material=_.createMaterial(o)),_.setMaterialFromModel(n,a.material,e,i),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(c){var f=a.material.get(c);f&&(f.flipY=!1)}),a.material.set("color",_.parseColor(e.get("baseColor")));var l=r.radius*.99;if(a.scale.set(l,l,l),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var u=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(l+u,l+u,l+u)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var s=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),i,{flipY:!1,anisotropic:8});s&&s.surface&&s.surface.attachToMesh(a);var h=a.material.setTextureImage("bumpMap",e.get("heightTexture"),i,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,i),this._displaceVertices(e,i),this._updateViewControl(e,i),this._updateLayers(e,i)},afterRender:function(e,t,i,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,i),this._sceneHelper.updateSkybox(n,e,i)},_updateLayers:function(e,t){var i=e.coordinateSystem,r=e.get("layers"),n=i.radius,a=[],o=[],l=[],u=[];ye(r,function(m){var d=new we(m),D=d.get("type"),y=_.loadTexture(d.get("texture"),t,{flipY:!1,anisotropic:8});if(y.surface&&y.surface.attachToMesh(this._earthMesh),D==="blend"){var w=d.get("blendTo"),x=oe.firstNotNull(d.get("intensity"),1);w==="emission"?(l.push(y),u.push(x)):(a.push(y),o.push(x))}else{var T=d.get("id"),p=this._layerMeshes[T];p||(p=this._layerMeshes[T]=new _.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var L=d.get("shading");L==="lambert"?(p.material=p.__lambertMaterial||new _.Material({autoUpdateTextureStatus:!1,shader:_.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),p.__lambertMaterial=p.material):(p.material=p.__colorMaterial||new _.Material({autoUpdateTextureStatus:!1,shader:_.createShader("ecgl.color"),transparent:!0,depthMask:!1}),p.__colorMaterial=p.material),p.material.enableTexture("diffuseMap");var N=d.get("distance"),M=n+(N??i.radius/100);p.scale.set(M,M,M),n=M;var O=this._blankTexture||(this._blankTexture=_.createBlankTexture("rgba(255, 255, 255, 0)"));p.material.set("diffuseMap",O),_.loadTexture(d.get("texture"),t,{flipY:!1,anisotropic:8},function(b){b.surface&&b.surface.attachToMesh(p),p.material.set("diffuseMap",b),t.getZr().refresh()}),d.get("show")?this.groupGL.add(p):this.groupGL.remove(p)}},this);var s=this._earthMesh.material;s.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),s.define("fragment","LAYER_EMISSIVEMAP_COUNT",l.length),s.set("layerDiffuseMap",a),s.set("layerDiffuseIntensity",o),s.set("layerEmissiveMap",l),s.set("layerEmissionIntensity",u);var h=e.getModel("debug.wireframe");if(h.get("show")){s.define("both","WIREFRAME_TRIANGLE");var c=_.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)"),f=oe.firstNotNull(h.get("lineStyle.width"),1);s.set("wireframeLineWidth",f),s.set("wireframeLineColor",c)}else s.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var i=e.coordinateSystem,r=e.getModel("viewControl");i.viewGL.camera;var n=this;function a(){return{type:"globeChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-i.radius,center:o.getCenter(),from:n.uid,globeId:e.id}}var o=this._control;o.setViewGL(i.viewGL);var l=r.get("targetCoord"),u,s;l!=null&&(s=l[0]+90,u=l[1]),o.setFromViewControlModel(r,{baseDistance:i.radius,alpha:u,beta:s}),o.off("update"),o.on("update",function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var i=e.get("displacementQuality"),r=e.get("debug.wireframe.show"),n=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&i===this._displacementQuality&&r===this._showDebugWireframe)){this._displacementQuality=i,this._showDebugWireframe=r;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[i]||200,l=o/2;(a.widthSegments!==o||r)&&(a.widthSegments=o,a.heightSegments=l,a.build()),this._doDisplaceVertices(a,n),r&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var i=e.attributes.position.value,r=e.attributes.texcoord0.value,n=e.__originalPosition;(!n||n.length!==i.length)&&(n=new Float32Array(i.length),n.set(i),e.__originalPosition=n);for(var a=t.displacementWidth,o=t.displacementHeight,l=t.displacementData,u=0;u<e.vertexCount;u++){var s=u*3,h=u*2,c=n[s+1],f=n[s+2],m=n[s+3],d=r[h++],D=r[h++],y=Math.round(d*(a-1)),w=Math.round(D*(o-1)),x=w*a+y,T=l?l[x]:0;i[s+1]=c+c*T,i[s+2]=f+f*T,i[s+3]=m+m*T}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var i=this._earthMesh;this._sceneHelper.updateLight(e);var r=this._sceneHelper.mainLight,n=e.get("light.main.time")||new Date,a=ot.getPosition(wt(n),0,0),o=Math.cos(a.altitude);r.position.y=-o*Math.cos(a.azimuth),r.position.x=Math.sin(a.altitude),r.position.z=o*Math.sin(a.azimuth),r.lookAt(i.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}});var Si=mt.vec3;function ue(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}ue.prototype={constructor:ue,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,i){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=i},_getDisplacementScale:function(e,t){var i=(e+180)/360*(this.displacementWidth-1),r=(90-t)/180*(this.displacementHeight-1),n=Math.round(i)+Math.round(r)*this.displacementWidth;return this.displacementData[n]},dataToPoint:function(e,t){var i=e[0],r=e[1],n=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(i,r)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(n)),i=i*Math.PI/180,r=r*Math.PI/180;var o=Math.cos(r)*a;return t=t||[],t[0]=-o*Math.cos(i+Math.PI),t[1]=Math.sin(r)*a,t[2]=o*Math.sin(i+Math.PI),t},pointToData:function(e,t){var i=e[0],r=e[1],n=e[2],a=Si.len(e);i/=a,r/=a,n/=a;var o=Math.asin(r),l=Math.atan2(n,-i);l<0&&(l=Math.PI*2+l);var u=o*180/Math.PI,s=l*180/Math.PI-180;return t=t||[],t[0]=s,t[1]=u,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function wi(e,t){var i=document.createElement("canvas"),r=i.getContext("2d"),n=e.width,a=e.height;i.width=n,i.height=a,r.drawImage(e,0,0,n,a);for(var o=r.getImageData(0,0,n,a).data,l=new Float32Array(o.length/4),u=0;u<o.length/4;u++){var s=o[u*4];l[u]=s/255*t}return{data:l,width:n,height:a}}function yi(e,t){var i=e.getBoxLayoutParams(),r=yt(i,{width:t.getWidth(),height:t.getHeight()});r.y=t.getHeight()-r.y-r.height,this.viewGL.setViewport(r.x,r.y,r.width,r.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var n=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function bi(e,t){var i=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData(),o=n.coordDimToDataDim("alt"),l=o&&o[0];if(l){var u=a.getDataExtent(l,!0);i[0]=Math.min(i[0],u[0]),i[1]=Math.max(i[1],u[1])}}},this),i&&isFinite(i[1]-i[0])){var r=Ct(i,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new Pt("altitude",r),this.resize(this.model,t)}}var Di={dimensions:ue.prototype.dimensions,create:function(e,t){var i=[];return e.eachComponent("globe",function(r){r.__viewGL=r.__viewGL||new S;var n=new ue;n.viewGL=r.__viewGL,r.coordinateSystem=n,n.model=r,i.push(n),n.resize=yi,n.resize(r,t),n.update=bi}),e.eachSeries(function(r){if(r.get("coordinateSystem")==="globe"){var n=r.getReferringComponents("globe").models[0];if(n||(n=e.getComponent("globe")),!n)throw new Error('globe "'+oe.firstNotNull(r.get("globe3DIndex"),r.get("globe3DId"),0)+'" not found');var a=n.coordinateSystem;r.coordinateSystem=a}}),e.eachComponent("globe",function(r,n){var a=r.coordinateSystem,o=r.getDisplacementTexture(),l=r.getDisplacemenScale();if(r.isDisplacementChanged()){if(r.hasDisplacement()){var u=!0;_.loadTexture(o,t,function(s){var h=s.image,c=wi(h,l);r.setDisplacementData(c.data,c.width,c.height),u||t.dispatchAction({type:"globeUpdateDisplacment"})}),u=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(r.displacementData,r.displacementWidth,r.displacementHeight)}}),i}};function Mi(e){e.registerComponentModel(j),e.registerComponentView(Ti),e.registerCoordinateSystem("globe",Di),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,i){i.eachComponent({mainType:"globe",query:t},function(r){r.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,i){})}export{Mi as GlobeComponent};
