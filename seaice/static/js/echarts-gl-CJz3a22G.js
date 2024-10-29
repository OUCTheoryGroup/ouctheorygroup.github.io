import{g as Ft,r as zt,a as Bt,b as Ut,C as Ht,c as Gt,p as Vt,M as kt,d as jt,e as Wt,A as Xt,S as Yt,f as Zt,h as Kt}from"./echarts-Cvvs_U_-.js";import{a as Ke,m as qe,ai as qt,_ as Qt,aj as ft,q as dt,ak as Jt,e as de,d as $t,Z as en,z as tn,X as nn,v as ee,N as rn}from"./zrender-CV4R6BYb.js";import{T as L,V as F,a as U,N as mt,S as T,u as pt,p as an,b as me,M as Ee,R as vt,c as on,d as N,G as V,e as sn,P as ln,C as cn,A as hn,D as un,f as fn,g as dn,h as be,O as Fe,i as mn,Q as pn,j as vn,k as _n,l as gn,m as z,n as xn,o as Tn,B as yn,F as bn,t as ae,q as Sn,r as wn,s as An,v as Cn,w as _t,x as En,y as pe,z as Pn,E as k,H as Y,I as Ln,J as Dn,K as Nn,L as On,U as Rn,W as Mn,X as In,Y as Fn,Z as zn,_ as Bn,$ as Un,a0 as Hn}from"./claygl-mnHdDFBj.js";var ze=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function Be(e){return"_on"+e}var Ue=function(e){var t=this;this._texture=new L({anisotropic:32,flipY:!1,surface:this,dispose:function(n){t.dispose(),L.prototype.dispose.call(this,n)}}),ze.forEach(function(n){this[Be(n)]=function(i){i.triangle&&this._meshes.forEach(function(r){this.dispatchEvent(n,r,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Ue.prototype={constructor:Ue,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var n=this,i=e.getZr(),r=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){r.call(this),n._texture.dirty(),n.onupdate&&n.onupdate()},i.__oldRefreshImmediately=r}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new F,t=new F,n=new F,i=new U,r=new U,a=new U,o=new U,s=new F;return function(c,l,h,u){var p=l.geometry,d=p.attributes.position,m=p.attributes.texcoord0,v=F.dot,_=F.cross;d.get(h[0],e.array),d.get(h[1],t.array),d.get(h[2],n.array),m.get(h[0],i.array),m.get(h[1],r.array),m.get(h[2],a.array),_(s,t,n);var y=v(e,s),b=v(u,s)/y;_(s,n,e);var S=v(u,s)/y;_(s,e,t);var g=v(u,s)/y;U.scale(o,i,b),U.scaleAndAdd(o,o,r,S),U.scaleAndAdd(o,o,a,g);var A=o.x*this._chart.getWidth(),O=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(c,{zrX:A,zrY:O})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(ze.forEach(function(t){e.on(t,this[Be(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),ze.forEach(function(n){e.off(n,this[Be(n)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var H={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return Ke(t.dataIndex)?qe(t.dataIndex,function(n){return e.indexOfRawIndex(n)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return Ke(t.name)?qe(t.name,function(n){return e.indexOfName(n)}):e.indexOfName(t.name)}},Gn={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var n=this,i;if(e){for(var r=e.split("."),a=n,o=0,s=r.length;o<s;o++)a&&(a=a[r[o]]);a&&(i=a)}else i=n;if(i==null)throw new Error("Target "+e+" not exists");var c=this._animators,l=new qt(i,t),h=this;return l.during(function(){h.__zr&&h.__zr.refresh()}).done(function(){var u=c.indexOf(l);u>=0&&c.splice(u,1)}),c.push(l),this.__zr&&this.__zr.animation.addAnimator(l),l},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,n=t.length,i=0;i<n;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const Vn=`
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
`,kn=`@export ecgl.color.vertex

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
@end`,jn=`/**
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

@end`,Wn=`@export ecgl.realistic.vertex

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

@end`,Xn=`@export ecgl.hatching.vertex

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
`,Yn=`@export ecgl.sm.depth.vertex

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

@end`;Object.assign(mt.prototype,Gn);T.import(pt);T.import(an);T.import(Vn);T.import(kn);T.import(jn);T.import(Wn);T.import(Xn);T.import(Yn);function Zn(e){return!e||e==="none"}function gt(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function Kn(e){return e.getZr&&e.setOption}var qn=me.prototype.addToScene,Qn=me.prototype.removeFromScene;me.prototype.addToScene=function(e){if(qn.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(n){n.__zr=t,n.addAnimatorsToZr&&n.addAnimatorsToZr(t)})}};me.prototype.removeFromScene=function(e){Qn.call(this,e),e.traverse(function(t){var n=t.__zr;t.__zr=null,n&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(n)})};Ee.prototype.setTextureImage=function(e,t,n,i){if(this.shader){var r=n.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),Zn(t)||(o=f.loadTexture(t,n,i,function(s){a.enableTexture(e),r&&r.refresh()}),a.set(e,o)),o}};var f={};f.Renderer=vt;f.Node=mt;f.Mesh=on;f.Shader=T;f.Material=Ee;f.Texture=N;f.Texture2D=L;f.Geometry=V;f.SphereGeometry=sn;f.PlaneGeometry=ln;f.CubeGeometry=cn;f.AmbientLight=hn;f.DirectionalLight=un;f.PointLight=fn;f.SpotLight=dn;f.PerspectiveCamera=be;f.OrthographicCamera=Fe;f.Vector2=U;f.Vector3=F;f.Vector4=mn;f.Quaternion=pn;f.Matrix2=vn;f.Matrix2d=_n;f.Matrix3=gn;f.Matrix4=z;f.Plane=xn;f.Ray=Tn;f.BoundingBox=yn;f.Frustum=bn;var ge=null;function Jn(){return ge!==null||(ge=ae.createBlank("rgba(255,255,255,0)").image),ge}function Qe(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Je(e){if((e.wrapS===N.REPEAT||e.wrapT===N.REPEAT)&&e.image){var t=Qe(e.width),n=Qe(e.height);if(t!==e.width||n!==e.height){var i=document.createElement("canvas");i.width=t,i.height=n;var r=i.getContext("2d");r.drawImage(e.image,0,0,t,n),e.image=i}}}f.loadTexture=function(e,t,n,i){typeof n=="function"&&(i=n,n={}),n=n||{};for(var r=Object.keys(n).sort(),a="",o=0;o<r.length;o++)a+=r[o]+"_"+n[r[o]]+"_";var s=t.__textureCache=t.__textureCache||new Qt(20);if(Kn(e)){var c=e.__textureid__,l=s.get(a+c);if(l)l.texture.surface.setECharts(e),i&&i(l.texture);else{var h=new Ue(e);h.onupdate=function(){t.getZr().refresh()},l={texture:h.getTexture()};for(var o=0;o<r.length;o++)l.texture[r[o]]=n[r[o]];c=e.__textureid__||"__ecgl_ec__"+l.texture.__uid__,e.__textureid__=c,s.put(a+c,l),i&&i(l.texture)}return l.texture}else if(gt(e)){var c=e.__textureid__,l=s.get(a+c);if(!l){l={texture:new f.Texture2D({image:e})};for(var o=0;o<r.length;o++)l.texture[r[o]]=n[r[o]];c=e.__textureid__||"__ecgl_image__"+l.texture.__uid__,e.__textureid__=c,s.put(a+c,l),Je(l.texture),i&&i(l.texture)}return l.texture}else{var l=s.get(a+e);if(l)l.callbacks?l.callbacks.push(i):i&&i(l.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){l={callbacks:[i]};var u=ae.loadTexture(e,{exposure:n.exposure,fileType:"hdr"},function(){u.dirty(),l.callbacks.forEach(function(m){m&&m(u)}),l.callbacks=null});l.texture=u,s.put(a+e,l)}else{for(var u=new f.Texture2D({image:new Image}),o=0;o<r.length;o++)u[r[o]]=n[r[o]];l={texture:u,callbacks:[i]};var p=u.image;p.onload=function(){u.image=p,Je(u),u.dirty(),l.callbacks.forEach(function(v){v&&v(u)}),l.callbacks=null},p.crossOrigin="Anonymous",p.src=e,u.image=Jn(),s.put(a+e,l)}return l.texture}};f.createAmbientCubemap=function(e,t,n,i){e=e||{};var r=e.texture,a=H.firstNotNull(e.exposure,1),o=new Sn({intensity:H.firstNotNull(e.specularIntensity,1)}),s=new wn({intensity:H.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=f.loadTexture(r,n,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=An.projectEnvironmentMap(t,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}};f.createBlankTexture=ae.createBlank;f.isImage=gt;f.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};f.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=ft(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};f.directionFromAlphaBeta=function(e,t){var n=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,r=[],a=Math.sin(n);return r[0]=a*Math.cos(i),r[1]=-Math.cos(n),r[2]=a*Math.sin(i),r};f.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};f.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];f.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=T.source(e+".vertex"),n=T.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),n||console.error("Fragment shader of '%s' not exits",e);var i=new T(t,n);return i.name=e,i};f.createMaterial=function(e,t){t instanceof Array||(t=[t]);var n=f.createShader(e),i=new Ee({shader:n});return t.forEach(function(r){typeof r=="string"&&i.define(r)}),i};f.setMaterialFromModel=function(e,t,n,i){t.autoUpdateTextureStatus=!1;var r=n.getModel(e+"Material"),a=r.get("detailTexture"),o=H.firstNotNull(r.get("textureTiling"),1),s=H.firstNotNull(r.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var c=o[0]>1||o[1]>1?f.Texture.REPEAT:f.Texture.CLAMP_TO_EDGE,l={anisotropic:8,wrapS:c,wrapT:c};if(e==="realistic"){var h=r.get("roughness"),u=r.get("metalness");u!=null?isNaN(u)&&(t.setTextureImage("metalnessMap",u,i,l),u=H.firstNotNull(r.get("metalnessAdjust"),.5)):u=0,h!=null?isNaN(h)&&(t.setTextureImage("roughnessMap",h,i,l),h=H.firstNotNull(r.get("roughnessAdjust"),.5)):h=.5;var p=r.get("normalTexture");t.setTextureImage("detailMap",a,i,l),t.setTextureImage("normalMap",p,i,l),t.set({roughness:h,metalness:u,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,l),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,i,l),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var d=r.get("hatchingTextures")||[];d.length<6;for(var m=0;m<6;m++)t.setTextureImage("hatch"+(m+1),d[m],i,{anisotropic:8,wrapS:f.Texture.REPEAT,wrapT:f.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};f.updateVertexAnimation=function(e,t,n,i){var r=i.get("animation"),a=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=n.shadowDepthMaterial;if(r&&t&&a>0&&t.geometry.vertexCount===n.geometry.vertexCount){n.material.define("vertex","VERTEX_ANIMATION"),n.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var c=0;c<e.length;c++)n.geometry.attributes[e[c][0]].value=t.geometry.attributes[e[c][1]].value;n.geometry.dirty(),n.__percent=0,n.material.set("percent",0),n.stopAnimation(),n.animate().when(a,{__percent:1}).during(function(){n.material.set("percent",n.__percent),s&&s.set("percent",n.__percent)}).done(function(){n.ignorePreZ=!1,n.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else n.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var w=function(e,t){this.id=e,this.zr=t;try{this.renderer=new vt({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var n=this.dom.style;n.position="absolute",n.left="0",n.top="0",this.views=[],this._picking=new Cn({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new dt({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};w.prototype.setUnpainted=function(){};w.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var n=this.zr;e.scene.traverse(function(i){i.__zr=n,i.addAnimatorsToZr&&i.addAnimatorsToZr(n)})}};function xt(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}w.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(xt,this),e.layer=null,this._viewsToDispose.push(e))}};w.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(xt,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};w.prototype.resize=function(e,t){var n=this.renderer;n.resize(e,t)};w.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};w.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};w.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};w.prototype.needsRefresh=function(){this.zr.refresh()};w.prototype.refresh=function(e){this._backgroundColor=e?f.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};w.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};w.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};w.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var $n=1;w.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var n=!1,i=0;i<this.views.length;i++)n=this.views[i].needsAccumulate()||n;if(!n)return;function r(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&n;o||(t._doRender(!0),e?r(a):Jt(function(){r(a)}))}}this._accumulatingId=$n++,e?r(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){r(t._accumulatingId)},50)};w.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Se(this._textureList),Se(this._geometriesList));for(var n=0;n<this.views.length;n++)ei(this.views[n].scene,e,t);this._textureList&&(we(this.renderer,this._textureList),we(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Se(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function we(e,t){for(var n=0;n<t.length;n++)t[n].__used__||t[n].dispose(e)}function xe(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function ei(e,t,n){var i,r;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,c=o.material;if(c!==i)for(var l=c.getTextureUniforms(),h=0;h<l.length;h++){var u=l[h],p=c.uniforms[u].value;if(p){if(p instanceof N)xe(p,t);else if(p instanceof Array)for(var d=0;d<p.length;d++)p[d]instanceof N&&xe(p[d],t)}}s!==r&&xe(s,n),i=c,r=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&xe(e.lights[a].cubemap,t)}w.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Se(this._textureList),Se(this._geometriesList),we(this.renderer,this._textureList),we(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};w.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};w.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),n=t&&t.target,i=this._hovered;this._hovered=t,i&&n!==i.target&&(i.relatedTarget=n,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||n!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};w.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};w.prototype.onclick=w.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,n=this._upY-this._downY;if(!(Math.sqrt(t*t+n*n)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var r=this._clickToSetFocusPoint(e);if(r){var a=r.view.setDOFFocusOnPoint(r.distance);a&&this.zr.refresh()}}}};w.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,n=t.viewport,i=this.views.length-1;i>=0;i--){var r=this.views[i];if(r.hasDOF()&&r.containPoint(e.offsetX,e.offsetY)){this._picking.scene=r.scene,this._picking.camera=r.camera,t.viewport=r.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=r,a}}t.viewport=n};w.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};w.prototype.pickObject=function(e,t){for(var n=[],i=this.renderer,r=i.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(e,t,n))}return i.viewport=r,n.sort(function(s,c){return s.distance-c.distance}),n[0]};w.prototype._dispatchEvent=function(e,t,n){n||(n={});var i=n.target;for(n.cancelBubble=!1,n.event=t,n.type=e,n.offsetX=t.offsetX,n.offsetY=t.offsetY;i&&(i.trigger(e,n),i=i.getParent(),!n.cancelBubble););this._dispatchToView(e,n)};w.prototype._dispatchDataEvent=function(e,t,n){var i=n&&n.target,r=i&&i.dataIndex,a=i&&i.seriesIndex,o=i&&i.eventData,s=!1,c=this._zrEventProxy;c.x=t.offsetX,c.y=t.offsetY,c.update();var l={target:c};const h=Ft(c);e==="mousemove"&&(r!=null?r!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(h.dataIndex=this._lastDataIndex,h.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(l,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(h.eventData=this._lastEventData,this.zr.handler.dispatchToElement(l,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=r,this._lastSeriesIndex=a),h.eventData=o,h.dataIndex=r,h.seriesIndex=a,(o!=null||parseInt(r,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(l,e,t),s&&this.zr.handler.dispatchToElement(l,"mouseover",t))};w.prototype._dispatchToView=function(e,t){for(var n=0;n<this.views.length;n++)this.views[n].containPoint(t.offsetX,t.offsetY)&&this.views[n].trigger(e,t)};Object.assign(w.prototype,_t);var ti=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function fe(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var n=e[t].normal,i=e[t].emphasis;n&&(e[t]=n),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function ni(e){fe(e,"itemStyle"),fe(e,"lineStyle"),fe(e,"areaStyle"),fe(e,"label")}function Te(e){e&&(e instanceof Array||(e=[e]),de(e,function(t){if(t.axisLabel){var n=t.axisLabel;Object.assign(n,n.textStyle),n.textStyle=null}}))}function ii(e){de(e.series,function(t){$t(ti,t.type)>=0&&(ni(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),Te(e.xAxis3D),Te(e.yAxis3D),Te(e.zAxis3D),Te(e.grid3D),fe(e.geo3D)}function Tt(e){this._layers={},this._zr=e}Tt.prototype.update=function(e,t){var n=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function r(s){i.setSleepAfterStill(0);var c;s.coordinateSystem&&s.coordinateSystem.model,c=s.get("zlevel");var l=n._layers,h=l[c];if(!h){if(h=l[c]=new w("gl-"+c,i),i.painter.isSingleCanvas()){h.virtual=!0;var u=new en({z:1e4,style:{image:h.renderer.canvas},silent:!0});h.__hostImage=u,i.add(u)}i.painter.insertLayer(c,h)}return h.__hostImage&&h.__hostImage.setStyle({width:h.renderer.getWidth(),height:h.renderer.getHeight()}),h}function a(s,c){s&&s.traverse(function(l){l.isRenderable&&l.isRenderable()&&(l.ignorePicking=l.$ignorePicking!=null?l.$ignorePicking:c)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,c){if(s!=="series"){var l=t.getViewOfComponentModel(c),h=c.coordinateSystem;if(l.__ecgl__){var u;if(h){if(!h.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+c.id);return}u=h.viewGL}else{if(!c.viewGL){console.error("Can't find viewGL of component "+c.id);return}u=h.viewGL}var u=h.viewGL,p=r(c);p.addView(u),l.afterRender&&l.afterRender(c,e,t,p),a(l.groupGL,c.get("silent"))}}}),e.eachSeries(function(s){var c=t.getViewOfSeriesModel(s),l=s.coordinateSystem;if(c.__ecgl__){if(l&&!l.viewGL&&!c.viewGL){console.error("Can't find viewGL of series "+c.id);return}var h=l&&l.viewGL||c.viewGL,u=r(s);u.addView(h),c.afterRender&&c.afterRender(s,e,t,u),a(c.groupGL,s.get("silent"))}})};zt(function(e){var t=e.getZr(),n=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof w&&i.dispose()}),n.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var r=document.createElement("canvas"),a=i.pixelRatio||this.dpr;r.width=this.getWidth()*a,r.height=this.getHeight()*a;var o=r.getContext("2d");o.dpr=a,o.clearRect(0,0,r.width,r.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,r.width,r.height));var s=this.storage.getDisplayList(!0),c={},l,h=this;function u(v,_){var y=h._zlevelList;v==null&&(v=-1/0);for(var b,S=0;S<y.length;S++){var g=y[S],A=h._layers[g];if(!A.__builtin__&&g>v&&g<_){b=A;break}}b&&b.renderToCanvas&&(o.save(),b.renderToCanvas(o),o.restore())}for(var p={ctx:o},d=0;d<s.length;d++){var m=s[d];m.zlevel!==l&&(u(l,m.zlevel),l=m.zlevel),this._doPaintEl(m,p,!0,null,c)}return u(l,1/0),r}});Bt(function(e,t){var n=t.getZr(),i=n.__egl=n.__egl||new Tt(n);i.update(e,t)});Ut(ii);const ri={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},ai={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},oi={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var he=H.firstNotNull,$e={left:0,middle:1,right:2};function et(e){return e instanceof Array||(e=[e,e]),e}var yt=En.extend(function(){return{zr:null,viewGL:null,_center:new F,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new U,_panVelocity:new U,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var n=t.baseDistance||0,i=t.baseOrthoSize||1,r=e.get("projection");r!=="perspective"&&r!=="orthographic"&&r!=="isometric"&&(r="perspective"),this._projection=r,this.viewGL.setProjection(r);var a=e.get("distance")+n,o=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(p){this[p[0]]=he(e.get(p[0]),p[1])},this),this.minDistance+=n,this.maxDistance+=n,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var s=e.ecModel,c={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(p){c[p]=he(e.get(p),s&&s.get(p))});var l=he(t.alpha,e.get("alpha"))||0,h=he(t.beta,e.get("beta"))||0,u=he(t.center,e.get("center"))||[0,0,0];c.animation&&c.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:l,beta:h,center:u,distance:a,orthographicSize:o,easing:c.animationEasingUpdate,duration:c.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(l),this.setBeta(h),this.setCenter(u),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,n=this,i={},r={};return e.distance!=null&&(i.distance=this.getDistance(),r.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),r.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),r.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),r.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),r.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,r).during(function(){i.alpha!=null&&n.setAlpha(i.alpha),i.beta!=null&&n.setBeta(i.beta),i.distance!=null&&n.setDistance(i.distance),i.center!=null&&n.setCenter(i.center),i.orthographicSize!=null&&n.setOrthographicSize(i.orthographicSize),n._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),n=this._orthoSize,i=n/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=n/2,t.bottom=-n/2},_updatePan:function(e){var t=this._panVelocity,n=this._distance,i=this.getCamera(),r=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*n/200).scaleAndAdd(r,-t.y*n/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new F,n=this._theta+Math.PI/2,i=this._phi+Math.PI/2,r=Math.sin(n);t.x=r*Math.cos(i),t.y=-Math.cos(n),t.z=r*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var n=e.len();n=n*t,n<1e-4&&(n=0),e.normalize().scale(n)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),n=Math.atan2(e.x,e.z);this._theta=t,this._phi=-n,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,n=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,n)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===$e[this.rotateMouseButton]?this._mode="rotate":e.event.button===$e[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=et(this.panSensitivity),n=et(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*n[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*n[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var n=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(n,i))){var r;this._projection==="perspective"?r=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):r=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*r*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var n=t.indexOf(e);n>=0&&t.splice(n,1)}),e}});Object.defineProperty(yt.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const si={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var n in t)e||!t[n].value?t[n].value=[]:t[n].value=Array.prototype.slice.call(t[n].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}};var Re=pe.vec3,tt=[[0,0],[1,1]],Ve=V.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new V.Attribute("position","float",3,"POSITION"),positionPrev:new V.Attribute("positionPrev","float",3),positionNext:new V.Attribute("positionNext","float",3),prevPositionPrev:new V.Attribute("prevPositionPrev","float",3),prevPosition:new V.Attribute("prevPosition","float",3),prevPositionNext:new V.Attribute("prevPositionNext","float",3),offset:new V.Attribute("offset","float",1),color:new V.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,n,i){var r=Re.dist(e,t)+Re.dist(n,t)+Re.dist(i,n),a=1/(r+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,n,i){var r=this._getCubicCurveApproxStep(e,t,n,i),a=Math.ceil(1/r);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,n,i){var r=this._getCubicCurveApproxStep(e,t,n,i),a=Math.ceil(1/r);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(tt)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(tt)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var n=typeof e[0]!="number";t=n?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var n=typeof e[0]!="number";t=n?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,n,i,r,a){a==null&&(a=1);for(var o=e[0],s=e[1],c=e[2],l=t[0],h=t[1],u=t[2],p=n[0],d=n[1],m=n[2],v=i[0],_=i[1],y=i[2],b=this._getCubicCurveApproxStep(e,t,n,i),S=b*b,g=S*b,A=3*b,O=3*S,E=6*S,R=6*g,M=o-l*2+p,_e=s-h*2+d,ie=c-u*2+m,j=(l-p)*3-o+v,G=(h-d)*3-s+_,re=(u-m)*3-c+y,D=o,$=s,le=c,Pe=(l-o)*A+M*O+j*g,Le=(h-s)*A+_e*O+G*g,De=(u-c)*A+ie*O+re*g,je=M*E+j*R,We=_e*E+G*R,Xe=ie*E+re*R,Rt=j*R,Mt=G*R,It=re*R,Ye=0,Ne=0,Ze=Math.ceil(1/b),ce=new Float32Array((Ze+1)*3),ce=[],Oe=0,Ne=0;Ne<Ze+1;Ne++)ce[Oe++]=D,ce[Oe++]=$,ce[Oe++]=le,D+=Pe,$+=Le,le+=De,Pe+=je,Le+=We,De+=Xe,je+=Rt,We+=Mt,Xe+=It,Ye+=b,Ye>1&&(D=Pe>0?Math.min(D,v):Math.max(D,v),$=Le>0?Math.min($,_):Math.max($,_),le=De>0?Math.min(le,y):Math.max(le,y));return this.addPolyline(ce,r,a)},addLine:function(e,t,n,i){return this.addPolyline([e,t],n,i)},addPolyline:function(e,t,n,i,r){if(e.length){var a=typeof e[0]!="number";if(r==null&&(r=a?e.length:e.length/3),!(r<2)){i==null&&(i=0),n==null&&(n=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===r,s=this.attributes.position,c=this.attributes.positionPrev,l=this.attributes.positionNext,h=this.attributes.color,u=this.attributes.offset,p=this.indices,d=this._vertexOffset,m,v;n=Math.max(n,.01);for(var _=i;_<r;_++){if(a)m=e[_],o?v=t[_]:v=t;else{var y=_*3;if(m=m||[],m[0]=e[y],m[1]=e[y+1],m[2]=e[y+2],o){var b=_*4;v=v||[],v[0]=t[b],v[1]=t[b+1],v[2]=t[b+2],v[3]=t[b+3]}else v=t}if(this.useNativeLine?_>1&&(s.copy(d,d-1),h.copy(d,d-1),d++):(_<r-1&&(c.set(d+2,m),c.set(d+3,m)),_>0&&(l.set(d-2,m),l.set(d-1,m)),s.set(d,m),s.set(d+1,m),h.set(d,v),h.set(d+1,v),u.set(d,n/2),u.set(d+1,-n/2),d+=2),this.useNativeLine)h.set(d,v),s.set(d,m),d++;else if(_>0){var S=this._triangleOffset*3,p=this.indices;p[S]=d-4,p[S+1]=d-3,p[S+2]=d-2,p[S+3]=d-3,p[S+4]=d-1,p[S+5]=d-2,this._triangleOffset+=2}}if(!this.useNativeLine){var g=this._vertexOffset,A=this._vertexOffset+r*2;c.copy(g,g+2),c.copy(g+1,g+3),l.copy(A-1,A-3),l.copy(A-2,A-4)}return this._vertexOffset=d,this._vertexOffset}}},setItemColor:function(e,t){for(var n=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,r=n;r<i;r++)this.attributes.color.set(r,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});tn(Ve.prototype,si);function He(){}He.prototype={constructor:He,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new f.DirectionalLight({shadowBias:.005}),this.ambientLight=new f.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,n=this.ambientLight,i=e.getModel("light"),r=i.getModel("main"),a=i.getModel("ambient");t.intensity=r.get("intensity"),n.intensity=a.get("intensity"),t.color=f.parseColor(r.get("color")).slice(0,3),n.color=f.parseColor(a.get("color")).slice(0,3);var o=r.get("alpha")||0,s=r.get("beta")||0;t.position.setArray(f.directionFromAlphaBeta(o,s)),t.lookAt(f.Vector3.ZERO),t.castShadow=r.get("shadow"),t.shadowResolution=f.getShadowResolution(r.get("shadowQuality"))},updateAmbientCubemap:function(e,t,n){var i=t.getModel("light.ambientCubemap"),r=i.get("texture");if(r){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[r];if(!a){var o=this;a=this._cubemapLightsCache[r]=f.createAmbientCubemap(i.option,e,n,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),n.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,n){var i=t.get("environment"),r=this;function a(){return r._skybox=r._skybox||new Pn,r._skybox}var o=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&ft(i)){this._isSkyboxFromAmbientCubemap=!1;var c=new f.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(c);var l=c.image=document.createElement("canvas");l.width=l.height=16;var h=l.getContext("2d"),u=new dt({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});nn(h,u),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var c=f.loadTexture(i,n,{anisotropic:8,flipY:!1});o.setEnvironmentMap(c),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var p=t.coordinateSystem;if(this._skybox)if(p&&p.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var d=p.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[d]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};const li=`@export ecgl.lines3D.vertex

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

@end`;function oe(e,t){for(var n=0,i=1/t,r=e;r>0;)n=n+i*(r%t),r=Math.floor(r/t),i=i/t;return n}const ci=`@export ecgl.ssao.estimate

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
`;T.import(ci);function bt(e){for(var t=new Uint8Array(e*e*4),n=0,i=new F,r=0;r<e;r++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[n++]=(i.x*.5+.5)*255,t[n++]=(i.y*.5+.5)*255,t[n++]=0,t[n++]=255;return t}function nt(e){return new L({pixels:bt(e),wrapS:N.REPEAT,wrapT:N.REPEAT,width:e,height:e})}function hi(e,t,n){var i=new Float32Array(e*3);t=t||0;for(var r=0;r<e;r++){var a=oe(r+t,2)*(n?1:2)*Math.PI,o=oe(r+t,3)*Math.PI,s=Math.random(),c=Math.cos(a)*Math.sin(o)*s,l=Math.cos(o)*s,h=Math.sin(a)*Math.sin(o)*s;i[r*3]=c,i[r*3+1]=l,i[r*3+2]=h}return i}function Z(e){e=e||{},this._ssaoPass=new k({fragment:T.source("ecgl.ssao.estimate")}),this._blurPass=new k({fragment:T.source("ecgl.ssao.blur")}),this._framebuffer=new Y({depthBuffer:!1}),this._ssaoTexture=new L,this._blurTexture=new L,this._blurTexture2=new L,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Z.prototype.setDepthTexture=function(e){this._depthTex=e};Z.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};Z.prototype.update=function(e,t,n){var i=e.getWidth(),r=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[n%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new z;z.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var c=this._ssaoTexture,l=this._blurTexture,h=this._blurTexture2;c.width=i/2,c.height=r/2,l.width=i,l.height=r,h.width=i,h.height=r,this._framebuffer.attach(c),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[i/2,r/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(l),o.setUniform("direction",0),o.setUniform("ssaoTexture",c),o.render(e),this._framebuffer.attach(h),o.setUniform("textureSize",[i,r]),o.setUniform("direction",1),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.unbind(e);var u=e.clearColor;e.gl.clearColor(u[0],u[1],u[2],u[3])};Z.prototype.getTargetTexture=function(){return this._blurTexture2};Z.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};Z.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=hi(e,t*e,!!this._normalTex)};Z.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=bt(e),t.width=t.height=e,t.dirty()):(t=nt(e),this._ssaoPass.setUniform("noiseTex",nt(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};Z.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const ui=`@export ecgl.ssr.main

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

@end`;T.import(ui);function K(e){e=e||{},this._ssrPass=new k({fragment:T.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new k({fragment:T.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new k({fragment:T.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new k({fragment:T.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new L({type:N.HALF_FLOAT}),this._texture2=new L({type:N.HALF_FLOAT}),this._texture3=new L({type:N.HALF_FLOAT}),this._prevTexture=new L({type:N.HALF_FLOAT}),this._currentTexture=new L({type:N.HALF_FLOAT}),this._frameBuffer=new Y({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}K.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var n=e&&t;this._ssrPass.material[n?"enableTexture":"disableTexture"]("specularCubemap")};K.prototype.update=function(e,t,n,i){var r=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,c=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=r/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=c.width=r,s.height=c.height=a;var l=this._frameBuffer,h=this._ssrPass,u=this._blurPass1,p=this._blurPass2,d=this._blendPass,m=new z,v=new z;z.transpose(m,t.worldTransform),z.transpose(v,t.viewMatrix),h.setUniform("sourceTexture",n),h.setUniform("projection",t.projectionMatrix.array),h.setUniform("projectionInv",t.invProjectionMatrix.array),h.setUniform("toViewSpace",m.array),h.setUniform("toWorldSpace",v.array),h.setUniform("nearZ",t.near);var _=i/this._totalSamples*this._samplePerFrame;if(h.setUniform("jitterOffset",_),h.setUniform("sampleOffset",i*this._samplePerFrame),u.setUniform("textureSize",[o.width,o.height]),p.setUniform("textureSize",[r,a]),p.setUniform("sourceTexture",n),u.setUniform("projection",t.projectionMatrix.array),p.setUniform("projection",t.projectionMatrix.array),l.attach(o),l.bind(e),h.render(e),this._physicallyCorrect&&(l.attach(this._currentTexture),d.setUniform("texture1",this._prevTexture),d.setUniform("texture2",o),d.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),d.render(e)),l.attach(s),u.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),u.render(e),l.attach(c),p.setUniform("texture",s),p.render(e),l.unbind(e),this._physicallyCorrect){var y=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=y}};K.prototype.getTargetTexture=function(){return this._texture3};K.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};K.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Ln.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};K.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};K.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};K.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const it=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],fi=`@export ecgl.normal.vertex

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
@end`;T.import(fi);function Me(e,t,n,i,r){var a=e.gl;t.setUniform(a,"1i",n,r),a.activeTexture(a.TEXTURE0+r),i.isRenderable()?i.bind(e):i.unbind(e)}function di(e,t,n,i,r){var a,o,s,c,l=e.gl;return function(h,u,p){if(!(c&&c.material===h.material)){var d=h.material,m=h.__program,v=d.get("roughness");v==null&&(v=1);var _=d.get("normalMap")||t,y=d.get("roughnessMap"),b=d.get("bumpMap"),S=d.get("uvRepeat"),g=d.get("uvOffset"),A=d.get("detailUvRepeat"),O=d.get("detailUvOffset"),E=!!b&&d.isTextureEnabled("bumpMap"),R=!!y&&d.isTextureEnabled("roughnessMap"),M=d.isDefined("fragment","DOUBLE_SIDED");b=b||n,y=y||i,p!==u?(u.set("normalMap",_),u.set("bumpMap",b),u.set("roughnessMap",y),u.set("useBumpMap",E),u.set("useRoughnessMap",R),u.set("doubleSide",M),S!=null&&u.set("uvRepeat",S),g!=null&&u.set("uvOffset",g),A!=null&&u.set("detailUvRepeat",A),O!=null&&u.set("detailUvOffset",O),u.set("roughness",v)):(m.setUniform(l,"1f","roughness",v),a!==_&&Me(e,m,"normalMap",_,0),o!==b&&b&&Me(e,m,"bumpMap",b,1),s!==y&&y&&Me(e,m,"roughnessMap",y,2),S!=null&&m.setUniform(l,"2f","uvRepeat",S),g!=null&&m.setUniform(l,"2f","uvOffset",g),A!=null&&m.setUniform(l,"2f","detailUvRepeat",A),O!=null&&m.setUniform(l,"2f","detailUvOffset",O),m.setUniform(l,"1i","useBumpMap",+E),m.setUniform(l,"1i","useRoughnessMap",+R),m.setUniform(l,"1i","doubleSide",+M)),a=_,o=b,s=y,c=h}}}function se(e){this._depthTex=new L({format:N.DEPTH_COMPONENT,type:N.UNSIGNED_INT}),this._normalTex=new L({type:N.HALF_FLOAT}),this._framebuffer=new Y,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Y.DEPTH_ATTACHMENT),this._normalMaterial=new Ee({shader:new T(T.source("ecgl.normal.vertex"),T.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=ae.createBlank("#000"),this._defaultBumpMap=ae.createBlank("#000"),this._defaultRoughessMap=ae.createBlank("#000"),this._debugPass=new k({fragment:T.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}se.prototype.getDepthTexture=function(){return this._depthTex};se.prototype.getNormalTexture=function(){return this._normalTex};se.prototype.update=function(e,t,n){var i=e.getWidth(),r=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=i,a.height=r,o.width=i,o.height=r;var c=t.getRenderList(n).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(c,n,{getMaterial:function(){return s},ifRender:function(l){return l.renderNormal},beforeRender:di(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};se.prototype.renderDebug=function(e){this._debugPass.render(e)};se.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function ve(e){e=e||{},this._edgePass=new k({fragment:T.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new L({type:N.HALF_FLOAT}),this._frameBuffer=new Y,this._frameBuffer.attach(this._targetTexture)}ve.prototype.update=function(e,t,n,i){var r=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=r,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[r,a]),this._edgePass.setUniform("texture",n),this._edgePass.render(e),s.unbind(e)};ve.prototype.getTargetTexture=function(){return this._targetTexture};ve.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};ve.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const mi={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},pi=`@export ecgl.dof.coc

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

@end`,vi=`@export ecgl.edge

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
@end`;T.import(Dn);T.import(Nn);T.import(On);T.import(Rn);T.import(Mn);T.import(In);T.import(Fn);T.import(zn);T.import(Bn);T.import(pi);T.import(vi);function St(e,t){return{color:{parameters:{width:e,height:t}}}}var ke=["composite","FXAA"];function x(){this._width,this._height,this._dpr,this._sourceTexture=new L({type:N.HALF_FLOAT}),this._depthTexture=new L({format:N.DEPTH_COMPONENT,type:N.UNSIGNED_INT}),this._framebuffer=new Y,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Y.DEPTH_ATTACHMENT),this._normalPass=new se,this._compositor=Un(mi);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=ke.map(function(i){return this._compositor.getNodeByName(i)},this);var n={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Z(n),this._ssrPass=new K(n),this._edgePass=new ve(n)}x.prototype.resize=function(i,r,n){n=n||1;var i=i*n,r=r*n,a=this._sourceTexture,o=this._depthTexture;a.width=i,a.height=r,o.width=i,o.height=r;var s={getWidth:function(){return i},getHeight:function(){return r},getDevicePixelRatio:function(){return n}};function c(l,h){if(typeof l[h]=="function"){var u=l[h].__original||l[h];l[h]=function(p){return u.call(this,s)},l[h].__original=u}}this._compositor.nodes.forEach(function(l){for(var h in l.outputs){var u=l.outputs[h].parameters;u&&(c(u,"width"),c(u,"height"))}for(var p in l.parameters)c(l.parameters,p)}),this._width=i,this._height=r,this._dpr=n};x.prototype.getWidth=function(){return this._width};x.prototype.getHeight=function(){return this._height};x.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};x.prototype._getPrevNode=function(e){for(var t=ke.indexOf(e.name)-1,n=this._finalNodesChain[t];n&&!this._compositor.getNodeByName(n.name);)t-=1,n=this._finalNodesChain[t];return n};x.prototype._getNextNode=function(e){for(var t=ke.indexOf(e.name)+1,n=this._finalNodesChain[t];n&&!this._compositor.getNodeByName(n.name);)t+=1,n=this._finalNodesChain[t];return n};x.prototype._addChainNode=function(e){var t=this._getPrevNode(e),n=this._getNextNode(e);t&&(e.inputs.texture=t.name,n?(e.outputs=St(this.getWidth.bind(this),this.getHeight.bind(this)),n.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};x.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),n=this._getNextNode(e);t&&(n?(t.outputs=St(this.getWidth.bind(this),this.getHeight.bind(this)),n.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};x.prototype.updateNormal=function(e,t,n,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,n)};x.prototype.updateSSAO=function(e,t,n,i){this._ssaoPass.update(e,n,i)};x.prototype.enableSSAO=function(){this._enableSSAO=!0};x.prototype.disableSSAO=function(){this._enableSSAO=!1};x.prototype.enableSSR=function(){this._enableSSR=!0};x.prototype.disableSSR=function(){this._enableSSR=!1};x.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};x.prototype.getSourceFrameBuffer=function(){return this._framebuffer};x.prototype.getSourceTexture=function(){return this._sourceTexture};x.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};x.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};x.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};x.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};x.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};x.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};x.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};x.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};x.prototype.enableEdge=function(){this._enableEdge=!0};x.prototype.disableEdge=function(){this._enableEdge=!1};x.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};x.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var n={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",n);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};x.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var n=0;n<this._dofBlurNodes.length;n++)this._dofBlurNodes[n].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var n=0;n<this._dofBlurNodes.length;n++)this._dofBlurNodes[n].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};x.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var n={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",n),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};x.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};x.prototype.setEdgeColor=function(e){var t=f.parseColor(e);this._edgePass.setParameter("edgeColor",t)};x.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};x.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:f.Texture.NEAREST,magFilter:f.Texture.NEAREST,flipY:!1})};x.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};x.prototype.isSSREnabled=function(){return this._enableSSR};x.prototype.composite=function(e,t,n,i,r){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,n,a,r),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,n,a,r),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,c=this._dofBlurKernelSize,l=Math.floor(it.length/2/c),h=r%l,u=0;u<c*2;u++)s[u]=it[u+h*c*2];for(var u=0;u<this._dofBlurNodes.length;u++)this._dofBlurNodes[u].setParameter("percent",r/30),this._dofBlurNodes[u].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",n.near),this._cocNode.setParameter("zFar",n.far),this._compositor.render(e,i)};x.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Ge(e){for(var t=[],n=0;n<30;n++)t.push([oe(n,2),oe(n,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new L,this._sourceFb=new Y,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new L,this._outputTex=new L;var i=this._blendPass=new k({fragment:T.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new Y({depthBuffer:!1}),this._outputPass=new k({fragment:T.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(r){r.blendEquationSeparate(r.FUNC_ADD,r.FUNC_ADD),r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA)}}Ge.prototype={constructor:Ge,jitterProjection:function(e,t){var n=e.viewport,i=n.devicePixelRatio||e.getDevicePixelRatio(),r=n.width*i,a=n.height*i,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new z;s.array[12]=(o[0]*2-1)/r,s.array[13]=(o[1]*2-1)/a,z.mul(t.projectionMatrix,s,t.projectionMatrix),z.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,n){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),n||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var r=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=r,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function C(e){e=e||"perspective",this.layer=null,this.scene=new me,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new x,this._temporalSS=new Ge,this._shadowMapPass=new Hn;for(var t=[],n=0,i=0;i<30;i++){for(var r=[],a=0;a<6;a++)r.push(oe(n,2)*4-2),r.push(oe(n,3)*4-2),n++;t.push(r)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,c){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,c)},this)}C.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof be||(this.camera=new be,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Fe||(this.camera=new Fe,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};C.prototype.setViewport=function(e,t,n,i,r){this.camera instanceof be&&(this.camera.aspect=n/i),r=r||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=n,this.viewport.height=i,this.viewport.devicePixelRatio=r,this._compositor.resize(n*r,i*r),this._temporalSS.resize(n*r,i*r)};C.prototype.containPoint=function(e,t){var n=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=n.x&&t>=n.y&&e<=n.x+n.width&&t<=n.y+n.height};var rt=new U;C.prototype.castRay=function(e,t,n){var i=this.layer.renderer,r=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,rt),this.camera.castRay(rt,n),i.viewport=r,n};C.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var n=e.transparent[t],i=n.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};C.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};C.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};C.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};C.prototype.hasDOF=function(){return this._enableDOF};C.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};C.prototype._doRender=function(e,t,n){var i=this.scene,r=this.camera;n=n||0,this._updateTransparent(e,i,r,n),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,r,!0)),this._updateShadowPCFKernel(n);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,r),this._compositor.updateNormal(e,i,r,this._temporalSS.getFrame())),this._updateSSAO(e,i,r,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,r,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,r,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,r,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,r,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,r,!0,!0)};C.prototype._updateTransparent=function(e,t,n,i){for(var r=new F,a=new z,o=n.getWorldPosition(),s=t.getRenderList(n).transparent,c=0;c<s.length;c++){var l=s[c],h=l.geometry;z.invert(a,l.worldTransform),F.transformMat4(r,o,a),h.needsSortTriangles&&h.needsSortTriangles()&&h.doSortTriangles(r,i),h.needsSortVertices&&h.needsSortVertices()&&h.doSortVertices(r,i)}};C.prototype._updateSSAO=function(e,t,n){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,n,this._temporalSS.getFrame());for(var r=t.getRenderList(n),a=0;a<r.opaque.length;a++){var o=r.opaque[a];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};C.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],n=this.scene.getRenderList(this.camera),i=n.opaque,r=0;r<i.length;r++)i[r].receiveShadow&&(i[r].material.set("pcfKernel",t),i[r].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};C.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};C.prototype.setPostEffect=function(e,t){var n=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),r=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),c=e.getModel("FXAA"),l=e.getModel("colorCorrection");i.get("enable")?n.enableBloom():n.disableBloom(),a.get("enable")?n.enableDOF():n.disableDOF(),s.get("enable")?n.enableSSR():n.disableSSR(),l.get("enable")?n.enableColorCorrection():n.disableColorCorrection(),r.get("enable")?n.enableEdge():n.disableEdge(),c.get("enable")?n.enableFXAA():n.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?n.enableSSAO():n.disableSSAO(),n.setBloomIntensity(i.get("intensity")),n.setEdgeColor(r.get("color")),n.setColorLookupTexture(l.get("lookupTexture"),t),n.setExposure(l.get("exposure")),["radius","quality","intensity"].forEach(function(h){n.setSSAOParameter(h,o.get(h))}),["quality","maxRoughness","physical"].forEach(function(h){n.setSSRParameter(h,s.get(h))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(h){n.setDOFParameter(h,a.get(h))}),["brightness","contrast","saturation"].forEach(function(h){n.setColorCorrection(h,l.get(h))})};C.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};C.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};C.prototype.isLinearSpace=function(){return this._enablePostEffect};C.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),n=0;n<t.length;n++)e.add(t[n]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};C.prototype.add=function(e){this.rootNode.add(e)};C.prototype.remove=function(e){this.rootNode.remove(e)};C.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(C.prototype,_t);const _i={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}};function wt(e,t){const n=e.getItemVisual(t,"style");if(n){const i=e.getVisual("drawType");return n[i]}}function At(e,t){const n=e.getItemVisual(t,"style");return n&&n.opacity}function at(e,t){e.id=e.id||e.name||t+""}var te=Ht.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){te.superApply(this,"init",arguments),de(this.option.layers,function(e,t){ee(e,this.defaultLayerOption),at(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,te.superApply(this,"mergeOption",arguments);function n(o){return rn(o,function(s,c,l){return at(c,l),s[c.id]=c,s},{})}if(t&&t.length){var i=n(e.layers),r=n(t);for(var a in i)r[a]?ee(r[a],i[a],!0):t.push(e.layers[a]);this.option.layers=t}de(this.option.layers,function(o){ee(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,n){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=n},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});ee(te.prototype,ri);ee(te.prototype,ai);ee(te.prototype,oi);ee(te.prototype,_i);var Ct=Math.PI,B=Math.sin,X=Math.cos,Et=Math.tan,Pt=Math.asin,Lt=Math.atan2,ne=Ct/180,gi=1e3*60*60*24,xi=2440588,Ti=2451545;function yi(e){return e.valueOf()/gi-.5+xi}function bi(e){return yi(e)-Ti}var Ae=ne*23.4397;function Si(e,t){return Lt(B(e)*X(Ae)-Et(t)*B(Ae),X(e))}function wi(e,t){return Pt(B(t)*X(Ae)+X(t)*B(Ae)*B(e))}function Ai(e,t,n){return Lt(B(e),X(e)*B(t)-Et(n)*X(t))}function Ci(e,t,n){return Pt(B(t)*B(n)+X(t)*X(n)*X(e))}function Ei(e,t){return ne*(280.16+360.9856235*e)-t}function Pi(e){return ne*(357.5291+.98560028*e)}function Li(e){var t=ne*(1.9148*B(e)+.02*B(2*e)+3e-4*B(3*e)),n=ne*102.9372;return e+t+n+Ct}function Di(e){var t=Pi(e),n=Li(t);return{dec:wi(n,0),ra:Si(n,0)}}var Dt={};Dt.getPosition=function(e,t,n){var i=ne*-n,r=ne*t,a=bi(e),o=Di(a),s=Ei(a,i)-o.ra;return{azimuth:Ai(s,r,o.dec),altitude:Ci(s,r,o.dec)}};const Ni=`@export ecgl.atmosphere.vertex
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
@end`;f.Shader.import(pt);f.Shader.import(Ni);const Oi=Gt.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new f.Node,this._sphereGeometry=new f.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new f.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new f.PlaneGeometry,this._earthMesh=new f.Mesh({renderNormal:!0}),this._atmosphereMesh=new f.Mesh,this._atmosphereGeometry=new f.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new f.Material({shader:new f.Shader(f.Shader.source("ecgl.atmosphere.vertex"),f.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=f.Mesh.CW,this._lightRoot=new f.Node,this._sceneHelper=new He,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new yt({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,n){var i=e.coordinateSystem,r=e.get("shading");i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL),this._sceneHelper.setScene(i.viewGL.scene),i.viewGL.setPostEffect(e.getModel("postEffect"),n),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+r;(!a.material||a.material.shader.name!==o)&&(a.material=f.createMaterial(o)),f.setMaterialFromModel(r,a.material,e,n),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(u){var p=a.material.get(u);p&&(p.flipY=!1)}),a.material.set("color",f.parseColor(e.get("baseColor")));var s=i.radius*.99;if(a.scale.set(s,s,s),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var c=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+c,s+c,s+c)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var l=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),n,{flipY:!1,anisotropic:8});l&&l.surface&&l.surface.attachToMesh(a);var h=a.material.setTextureImage("bumpMap",e.get("heightTexture"),n,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,n),this._displaceVertices(e,n),this._updateViewControl(e,n),this._updateLayers(e,n)},afterRender:function(e,t,n,i){var r=i.renderer;this._sceneHelper.updateAmbientCubemap(r,e,n),this._sceneHelper.updateSkybox(r,e,n)},_updateLayers:function(e,t){var n=e.coordinateSystem,i=e.get("layers"),r=n.radius,a=[],o=[],s=[],c=[];de(i,function(d){var m=new kt(d),v=m.get("type"),_=f.loadTexture(m.get("texture"),t,{flipY:!1,anisotropic:8});if(_.surface&&_.surface.attachToMesh(this._earthMesh),v==="blend"){var y=m.get("blendTo"),b=H.firstNotNull(m.get("intensity"),1);y==="emission"?(s.push(_),c.push(b)):(a.push(_),o.push(b))}else{var S=m.get("id"),g=this._layerMeshes[S];g||(g=this._layerMeshes[S]=new f.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var A=m.get("shading");A==="lambert"?(g.material=g.__lambertMaterial||new f.Material({autoUpdateTextureStatus:!1,shader:f.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),g.__lambertMaterial=g.material):(g.material=g.__colorMaterial||new f.Material({autoUpdateTextureStatus:!1,shader:f.createShader("ecgl.color"),transparent:!0,depthMask:!1}),g.__colorMaterial=g.material),g.material.enableTexture("diffuseMap");var O=m.get("distance"),E=r+(O??n.radius/100);g.scale.set(E,E,E),r=E;var R=this._blankTexture||(this._blankTexture=f.createBlankTexture("rgba(255, 255, 255, 0)"));g.material.set("diffuseMap",R),f.loadTexture(m.get("texture"),t,{flipY:!1,anisotropic:8},function(M){M.surface&&M.surface.attachToMesh(g),g.material.set("diffuseMap",M),t.getZr().refresh()}),m.get("show")?this.groupGL.add(g):this.groupGL.remove(g)}},this);var l=this._earthMesh.material;l.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),l.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),l.set("layerDiffuseMap",a),l.set("layerDiffuseIntensity",o),l.set("layerEmissiveMap",s),l.set("layerEmissionIntensity",c);var h=e.getModel("debug.wireframe");if(h.get("show")){l.define("both","WIREFRAME_TRIANGLE");var u=f.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)"),p=H.firstNotNull(h.get("lineStyle.width"),1);l.set("wireframeLineWidth",p),l.set("wireframeLineColor",u)}else l.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var n=e.coordinateSystem,i=e.getModel("viewControl");n.viewGL.camera;var r=this;function a(){return{type:"globeChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-n.radius,center:o.getCenter(),from:r.uid,globeId:e.id}}var o=this._control;o.setViewGL(n.viewGL);var s=i.get("targetCoord"),c,l;s!=null&&(l=s[0]+90,c=s[1]),o.setFromViewControlModel(i,{baseDistance:n.radius,alpha:c,beta:l}),o.off("update"),o.on("update",function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var n=e.get("displacementQuality"),i=e.get("debug.wireframe.show"),r=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&n===this._displacementQuality&&i===this._showDebugWireframe)){this._displacementQuality=n,this._showDebugWireframe=i;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[n]||200,s=o/2;(a.widthSegments!==o||i)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,r),i&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var n=e.attributes.position.value,i=e.attributes.texcoord0.value,r=e.__originalPosition;(!r||r.length!==n.length)&&(r=new Float32Array(n.length),r.set(n),e.__originalPosition=r);for(var a=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,c=0;c<e.vertexCount;c++){var l=c*3,h=c*2,u=r[l+1],p=r[l+2],d=r[l+3],m=i[h++],v=i[h++],_=Math.round(m*(a-1)),y=Math.round(v*(o-1)),b=y*a+_,S=s?s[b]:0;n[l+1]=u+u*S,n[l+2]=p+p*S,n[l+3]=d+d*S}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var n=this._earthMesh;this._sceneHelper.updateLight(e);var i=this._sceneHelper.mainLight,r=e.get("light.main.time")||new Date,a=Dt.getPosition(Vt(r),0,0),o=Math.cos(a.altitude);i.position.y=-o*Math.cos(a.azimuth),i.position.x=Math.sin(a.altitude),i.position.z=o*Math.sin(a.azimuth),i.lookAt(n.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}});var Ri=pe.vec3;function Ce(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}Ce.prototype={constructor:Ce,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,n){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=n},_getDisplacementScale:function(e,t){var n=(e+180)/360*(this.displacementWidth-1),i=(90-t)/180*(this.displacementHeight-1),r=Math.round(n)+Math.round(i)*this.displacementWidth;return this.displacementData[r]},dataToPoint:function(e,t){var n=e[0],i=e[1],r=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(n,i)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(r)),n=n*Math.PI/180,i=i*Math.PI/180;var o=Math.cos(i)*a;return t=t||[],t[0]=-o*Math.cos(n+Math.PI),t[1]=Math.sin(i)*a,t[2]=o*Math.sin(n+Math.PI),t},pointToData:function(e,t){var n=e[0],i=e[1],r=e[2],a=Ri.len(e);n/=a,i/=a,r/=a;var o=Math.asin(i),s=Math.atan2(r,-n);s<0&&(s=Math.PI*2+s);var c=o*180/Math.PI,l=s*180/Math.PI-180;return t=t||[],t[0]=l,t[1]=c,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function Mi(e,t){var n=document.createElement("canvas"),i=n.getContext("2d"),r=e.width,a=e.height;n.width=r,n.height=a,i.drawImage(e,0,0,r,a);for(var o=i.getImageData(0,0,r,a).data,s=new Float32Array(o.length/4),c=0;c<o.length/4;c++){var l=o[c*4];s[c]=l/255*t}return{data:s,width:r,height:a}}function Ii(e,t){var n=e.getBoxLayoutParams(),i=jt(n,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var r=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,r-this.radius)}function Fi(e,t){var n=[1/0,-1/0];if(e.eachSeries(function(r){if(r.coordinateSystem===this){var a=r.getData(),o=r.coordDimToDataDim("alt"),s=o&&o[0];if(s){var c=a.getDataExtent(s,!0);n[0]=Math.min(n[0],c[0]),n[1]=Math.max(n[1],c[1])}}},this),n&&isFinite(n[1]-n[0])){var i=Wt(n,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new Xt("altitude",i),this.resize(this.model,t)}}var zi={dimensions:Ce.prototype.dimensions,create:function(e,t){var n=[];return e.eachComponent("globe",function(i){i.__viewGL=i.__viewGL||new C;var r=new Ce;r.viewGL=i.__viewGL,i.coordinateSystem=r,r.model=i,n.push(r),r.resize=Ii,r.resize(i,t),r.update=Fi}),e.eachSeries(function(i){if(i.get("coordinateSystem")==="globe"){var r=i.getReferringComponents("globe").models[0];if(r||(r=e.getComponent("globe")),!r)throw new Error('globe "'+H.firstNotNull(i.get("globe3DIndex"),i.get("globe3DId"),0)+'" not found');var a=r.coordinateSystem;i.coordinateSystem=a}}),e.eachComponent("globe",function(i,r){var a=i.coordinateSystem,o=i.getDisplacementTexture(),s=i.getDisplacemenScale();if(i.isDisplacementChanged()){if(i.hasDisplacement()){var c=!0;f.loadTexture(o,t,function(l){var h=l.image,u=Mi(h,s);i.setDisplacementData(u.data,u.width,u.height),c||t.dispatchAction({type:"globeUpdateDisplacment"})}),c=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(i.displacementData,i.displacementWidth,i.displacementHeight)}}),n}};function Qi(e){e.registerComponentModel(te),e.registerComponentView(Oi),e.registerCoordinateSystem("globe",zi),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,n){n.eachComponent({mainType:"globe",query:t},function(i){i.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,n){})}var P=pe.vec3,ot=pe.vec2,W=P.normalize,ye=P.cross,st=P.sub,Ie=P.add,J=P.create,q=J(),I=J(),Q=J(),ue=J(),lt=[],ct=[];function Bi(e,t){ot.copy(lt,e[0]),ot.copy(ct,e[1]);var n=[],i=n[0]=J(),r=n[1]=J(),a=n[2]=J(),o=n[3]=J();t.dataToPoint(lt,i),t.dataToPoint(ct,o),W(q,i),st(I,o,i),W(I,I),ye(Q,I,q),W(Q,Q),ye(I,q,Q),Ie(r,q,I),W(r,r),W(q,o),st(I,i,o),W(I,I),ye(Q,I,q),W(Q,Q),ye(I,q,Q),Ie(a,q,I),W(a,a),Ie(ue,i,o),W(ue,ue);var s=P.dot(i,ue),c=P.dot(ue,r),l=(Math.max(P.len(i),P.len(o))-s)/c*2;return P.scaleAndAdd(r,i,r,l),P.scaleAndAdd(a,o,a,l),n}function Ui(e,t,n){var i=[],r=i[0]=P.create(),a=i[1]=P.create(),o=i[2]=P.create(),s=i[3]=P.create();t.dataToPoint(e[0],r),t.dataToPoint(e[1],s);var c=P.dist(r,s);return P.lerp(a,r,s,.3),P.lerp(o,r,s,.3),P.scaleAndAdd(a,a,n,Math.min(c*.1,10)),P.scaleAndAdd(o,o,n,Math.min(c*.1,10)),i}function Nt(e,t){for(var n=new Float32Array(e.length*3),i=0,r=[],a=0;a<e.length;a++)t.dataToPoint(e[a],r),n[i++]=r[0],n[i++]=r[1],n[i++]=r[2];return n}function Ot(e){var t=[];return e.each(function(n){var i=e.getItemModel(n),r=i.option instanceof Array?i.option:i.getShallow("coords",!0);t.push(r)}),{coordsList:t}}function Hi(e,t){var n=e.getData(),i=e.get("polyline");n.setLayout("lineType",i?"polyline":"cubicBezier");var r=Ot(n);n.each(function(a){var o=r.coordsList[a],s=i?Nt:Bi;n.setItemLayout(a,s(o,t))})}function ht(e,t,n){var i=e.getData(),r=e.get("polyline"),a=Ot(i);i.setLayout("lineType",r?"polyline":"cubicBezier"),i.each(function(o){var s=a.coordsList[o],c=r?Nt(s,t):Ui(s,t,n);i.setItemLayout(o,c)})}function Gi(e,t){e.eachSeriesByType("lines3D",function(n){var i=n.coordinateSystem;i.type==="globe"?Hi(n,i):i.type==="geo3D"?ht(n,i,[0,1,0]):(i.type==="mapbox3D"||i.type==="maptalks3D")&&ht(n,i,[0,0,1])})}const Vi=Yt.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var n=new Zt(["value"],this);return n.hasItemOption=!1,n.initData(e.data,[],function(i,r,a,o){if(i instanceof Array)return NaN;n.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),n},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),ki=`@export ecgl.trail2.vertex
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

@end`;var ut=pe.vec3;function ji(e){return e>0?1:-1}f.Shader.import(ki);const Wi=f.Mesh.extend(function(){var e=new f.Material({shader:new f.Shader(f.Shader.source("ecgl.trail2.vertex"),f.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new Ve({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,n){var i=e.hostModel,r=this.geometry,a=i.getModel("effect"),o=a.get("trailWidth")*t.getDevicePixelRatio(),s=a.get("trailLength"),c=i.get("effect.constantSpeed"),l=i.get("effect.period")*1e3,h=c!=null;h?this.material.set("speed",c/1e3):this.material.set("period",l),this.material[h?"define":"undefine"]("vertex","CONSTANT_SPEED");var u=i.get("polyline");r.trailLength=s,this.material.set("trailLength",s),r.resetOffset(),["position","positionPrev","positionNext"].forEach(function(E){r.attributes[E].value=n.attributes[E].value});var p=["dist","distAll","start","offset","color"];p.forEach(function(E){r.attributes[E].init(r.vertexCount)}),r.indices=n.indices;var d=[],m=a.get("trailColor"),v=a.get("trailOpacity"),_=m!=null,y=v!=null;this.updateWorldTransform();var b=this.worldTransform.x.len(),S=this.worldTransform.y.len(),g=this.worldTransform.z.len(),A=0,O=0;e.each(function(E){var R=e.getItemLayout(E),M=y?v:At(e,E),_e=wt(e,E);M==null&&(M=1),d=f.parseColor(_?m:_e,d),d[3]*=M;for(var ie=u?n.getPolylineVertexCount(R):n.getCubicCurveVertexCount(R[0],R[1],R[2],R[3]),j=0,G=[],re=[],D=A;D<A+ie;D++)r.attributes.position.get(D,G),G[0]*=b,G[1]*=S,G[2]*=g,D>A&&(j+=ut.dist(G,re)),r.attributes.dist.set(D,j),ut.copy(re,G);O=Math.max(O,j);for(var $=Math.random()*(h?j:l),D=A;D<A+ie;D++)r.attributes.distAll.set(D,j),r.attributes.start.set(D,$),r.attributes.offset.set(D,ji(n.attributes.offset.get(D))*o/2),r.attributes.color.set(D,d);A+=ie}),this.material.set("spotSize",O*.1*s),this.material.set("spotIntensity",a.get("spotIntensity")),r.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});f.Shader.import(li);function Xi(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}const Yi=Kt.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new f.Node,this._meshLinesMaterial=new f.Material({shader:f.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new f.Mesh({geometry:new Ve,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new Wi},render:function(e,t,n){this.groupGL.add(this._linesMesh);var i=e.coordinateSystem,r=e.getData();if(i&&i.viewGL){var a=i.viewGL;a.add(this.groupGL),this._updateLines(e,t,n);var o=i.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[o]("fragment","SRGB_DECODE"),this._trailMesh.material[o]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(r,n,this._linesMesh.geometry),s.__time=s.__time||0;var c=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(c,{__time:c}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?f.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,n){var i=e.getData(),r=e.coordinateSystem,a=this._linesMesh.geometry,o=e.get("polyline");a.expandLine=!0;var s=Xi(r);a.segmentScale=s/20;var c="lineStyle.width".split("."),l=n.getDevicePixelRatio();i.each(function(d){var m=i.getItemModel(d),v=m.get(c);v==null&&(v=1),i.setItemVisual(d,"lineWidth",v)}),a.useNativeLine=!1;var h=0,u=0;i.each(function(d){var m=i.getItemLayout(d);o?(h+=a.getPolylineVertexCount(m),u+=a.getPolylineTriangleCount(m)):(h+=a.getCubicCurveVertexCount(m[0],m[1],m[2],m[3]),u+=a.getCubicCurveTriangleCount(m[0],m[1],m[2],m[3]))}),a.setVertexCount(h),a.setTriangleCount(u),a.resetOffset();var p=[];i.each(function(d){var m=i.getItemLayout(d),v=wt(i,d),_=At(i,d),y=i.getItemVisual(d,"lineWidth")*l;_==null&&(_=1),p=f.parseColor(v,p),p[3]*=_,o?a.addPolyline(m,p,y):a.addCubicCurve(m[0],m[1],m[2],m[3],p,y)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Ji(e){e.registerChartView(Yi),e.registerSeriesModel(Vi),e.registerLayout(Gi),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}export{Ji as a,Qi as i};
