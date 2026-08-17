(()=>{var _u=Object.getOwnPropertyNames,si=(e,t,n)=>function(){if(n)throw n[0];try{return e&&(t=(0,e[_u(e)[0]])(e=0)),t}catch(r){throw n=[r],r}},C_=(e,t)=>function(){try{return t||(0,e[_u(e)[0]])((t={exports:{}}).exports,t),t.exports}catch(i){throw t=0,i}};function oi(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[e&255]+Sn[e>>8&255]+Sn[e>>16&255]+Sn[e>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function gn(e,t,n){return Math.max(t,Math.min(n,e))}function Sl(e,t){return(e%t+t)%t}function L_(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)}function P_(e,t,n){return e!==t?(n-e)/(t-e):0}function ks(e,t,n){return(1-n)*e+n*t}function I_(e,t,n,i){return ks(e,t,1-Math.exp(-n*i))}function D_(e,t=1){return t-Math.abs(Sl(e,t*2)-t)}function U_(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function N_(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function O_(e,t){return e+Math.floor(Math.random()*(t-e+1))}function F_(e,t){return e+Math.random()*(t-e)}function B_(e){return e*(.5-Math.random())}function z_(e){e!==void 0&&(wc=e);let t=wc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function k_(e){return e*Tr}function G_(e){return e*Er}function xl(e){return(e&e-1)===0&&e!==0}function H_(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Ko(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function V_(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),h=s((t+i)/2),u=o((t+i)/2),f=s((t-i)/2),d=o((t-i)/2),_=s((i-t)/2),S=o((i-t)/2);switch(r){case"XYX":e.set(a*u,c*f,c*d,a*h);break;case"YZY":e.set(c*d,a*u,c*f,a*h);break;case"ZXZ":e.set(c*f,c*d,a*u,a*h);break;case"XZX":e.set(a*u,c*S,c*_,a*h);break;case"YXY":e.set(c*_,a*u,c*S,a*h);break;case"ZYZ":e.set(c*S,c*_,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}function vu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Gs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function W_(){const e=Gs("canvas");return e.style.display="block",e}function Hs(e){e in Rc||(Rc[e]=!0,console.warn(e))}function us(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function bl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Tl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Pc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function El(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){rr.fromArray(e,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),c=t.dot(rr),h=n.dot(rr),u=i.dot(rr);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>a)return!1}return!0}function Al(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function X_(e,t,n,i,r,s,o,a){let c;if(t.side===Pn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===_i,a),c===null)return null;vo.copy(a),vo.applyMatrix4(e.matrixWorld);const h=n.ray.origin.distanceTo(vo);return h<n.near||h>n.far?null:{distance:h,point:vo.clone(),object:e}}function $o(e,t,n,i,r,s,o,a,c,h){e.getVertexPosition(a,Ur),e.getVertexPosition(c,Nr),e.getVertexPosition(h,Or);const u=X_(e,t,n,i,Ur,Nr,Or,_o);if(u){r&&(po.fromBufferAttribute(r,a),mo.fromBufferAttribute(r,c),go.fromBufferAttribute(r,h),u.uv=ys.getInterpolation(_o,Ur,Nr,Or,po,mo,go,new De)),s&&(po.fromBufferAttribute(s,a),mo.fromBufferAttribute(s,c),go.fromBufferAttribute(s,h),u.uv1=ys.getInterpolation(_o,Ur,Nr,Or,po,mo,go,new De),u.uv2=u.uv1),o&&(Kc.fromBufferAttribute(o,a),$c.fromBufferAttribute(o,c),Jc.fromBufferAttribute(o,h),u.normal=ys.getInterpolation(_o,Ur,Nr,Or,Kc,$c,Jc,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:h,normal:new F,materialIndex:0};ys.getNormal(Ur,Nr,Or,f.normal),u.face=f}return u}function fs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Ln(e){const t={};for(let n=0;n<e.length;n++){const i=fs(e[n]);for(const r in i)t[r]=i[r]}return t}function q_(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Mu(e){return e.getRenderTarget()===null?e.outputColorSpace:Ct.workingColorSpace}function yu(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Y_(e,t){const n=t.isWebGL2,i=new WeakMap;function r(h,u){const f=h.array,d=h.usage,_=f.byteLength,S=e.createBuffer();e.bindBuffer(u,S),e.bufferData(u,f,d),h.onUploadCallback();let M;if(f instanceof Float32Array)M=e.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)M=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=e.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=e.SHORT;else if(f instanceof Uint32Array)M=e.UNSIGNED_INT;else if(f instanceof Int32Array)M=e.INT;else if(f instanceof Int8Array)M=e.BYTE;else if(f instanceof Uint8Array)M=e.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:S,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,u,f){const d=u.array,_=u._updateRange,S=u.updateRanges;if(e.bindBuffer(f,h),_.count===-1&&S.length===0&&e.bufferSubData(f,0,d),S.length!==0){for(let M=0,v=S.length;M<v;M++){const g=S[M];n?e.bufferSubData(f,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count):e.bufferSubData(f,g.start*d.BYTES_PER_ELEMENT,d.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}_.count!==-1&&(n?e.bufferSubData(f,_.offset*d.BYTES_PER_ELEMENT,d,_.offset,_.count):e.bufferSubData(f,_.offset*d.BYTES_PER_ELEMENT,d.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=i.get(h);u&&(e.deleteBuffer(u.buffer),i.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const d=i.get(h);(!d||d.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=i.get(h);if(f===void 0)i.set(h,r(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,h,u),f.version=h.version}}return{get:o,remove:a,update:c}}function j_(e,t,n,i,r,s,o){const a=new $e(0);let c=s===!0?0:1,h,u,f=null,d=0,_=null;function S(v,g){let x=!1,T=g.isScene===!0?g.background:null;T&&T.isTexture&&(T=(g.backgroundBlurriness>0?n:t).get(T)),T===null?M(a,c):T&&T.isColor&&(M(T,1),x=!0);const N=e.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||x)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),T&&(T.isCubeTexture||T.mapping===qs)?(u===void 0&&(u=new re(new Be(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:fs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(G,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Gt,(f!==T||d!==T.version||_!==e.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,_=e.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new re(new yt(2,2),new Bn({name:"BackgroundMaterial",uniforms:fs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Gt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||_!==e.toneMapping)&&(h.material.needsUpdate=!0,f=T,d=T.version,_=e.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function M(v,g){v.getRGB(So,Mu(e)),i.buffers.color.setClear(So.r,So.g,So.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),c=g,M(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,M(a,c)},render:S}}function K_(e,t,n,i){const r=e.getParameter(e.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=v(null);let h=c,u=!1;function f(W,j,J,Me,he){let ce=!1;if(o){const ge=M(Me,J,j);h!==ge&&(h=ge,_(h.object)),ce=g(W,Me,J,he),ce&&x(W,Me,J,he)}else{const ge=j.wireframe===!0;(h.geometry!==Me.id||h.program!==J.id||h.wireframe!==ge)&&(h.geometry=Me.id,h.program=J.id,h.wireframe=ge,ce=!0)}he!==null&&n.update(he,e.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,q(W,j,J,Me),he!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(he).buffer))}function d(){return i.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function _(W){return i.isWebGL2?e.bindVertexArray(W):s.bindVertexArrayOES(W)}function S(W){return i.isWebGL2?e.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function M(W,j,J){const Me=J.wireframe===!0;let he=a[W.id];he===void 0&&(he={},a[W.id]=he);let ce=he[j.id];ce===void 0&&(ce={},he[j.id]=ce);let ge=ce[Me];return ge===void 0&&(ge=v(d()),ce[Me]=ge),ge}function v(W){const j=[],J=[],Me=[];for(let he=0;he<r;he++)j[he]=0,J[he]=0,Me[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:J,attributeDivisors:Me,object:W,attributes:{},index:null}}function g(W,j,J,Me){const he=h.attributes,ce=j.attributes;let ge=0;const _e=J.getAttributes();for(const Z in _e)if(_e[Z].location>=0){const Ae=he[Z];let we=ce[Z];if(we===void 0&&(Z==="instanceMatrix"&&W.instanceMatrix&&(we=W.instanceMatrix),Z==="instanceColor"&&W.instanceColor&&(we=W.instanceColor)),Ae===void 0||Ae.attribute!==we||we&&Ae.data!==we.data)return!0;ge++}return h.attributesNum!==ge||h.index!==Me}function x(W,j,J,Me){const he={},ce=j.attributes;let ge=0;const _e=J.getAttributes();for(const Z in _e)if(_e[Z].location>=0){let Ae=ce[Z];Ae===void 0&&(Z==="instanceMatrix"&&W.instanceMatrix&&(Ae=W.instanceMatrix),Z==="instanceColor"&&W.instanceColor&&(Ae=W.instanceColor));const we={};we.attribute=Ae,Ae&&Ae.data&&(we.data=Ae.data),he[Z]=we,ge++}h.attributes=he,h.attributesNum=ge,h.index=Me}function T(){const W=h.newAttributes;for(let j=0,J=W.length;j<J;j++)W[j]=0}function N(W){G(W,0)}function G(W,j){const J=h.newAttributes,Me=h.enabledAttributes,he=h.attributeDivisors;J[W]=1,Me[W]===0&&(e.enableVertexAttribArray(W),Me[W]=1),he[W]!==j&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,j),he[W]=j)}function P(){const W=h.newAttributes,j=h.enabledAttributes;for(let J=0,Me=j.length;J<Me;J++)j[J]!==W[J]&&(e.disableVertexAttribArray(J),j[J]=0)}function k(W,j,J,Me,he,ce,ge){ge===!0?e.vertexAttribIPointer(W,j,J,he,ce):e.vertexAttribPointer(W,j,J,Me,he,ce)}function q(W,j,J,Me){if(i.isWebGL2===!1&&(W.isInstancedMesh||Me.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;T();const he=Me.attributes,ce=J.getAttributes(),ge=j.defaultAttributeValues;for(const _e in ce){const Z=ce[_e];if(Z.location>=0){let ue=he[_e];if(ue===void 0&&(_e==="instanceMatrix"&&W.instanceMatrix&&(ue=W.instanceMatrix),_e==="instanceColor"&&W.instanceColor&&(ue=W.instanceColor)),ue!==void 0){const Ae=ue.normalized,we=ue.itemSize,Ve=n.get(ue);if(Ve===void 0)continue;const et=Ve.buffer,dt=Ve.type,tt=Ve.bytesPerElement,xt=i.isWebGL2===!0&&(dt===e.INT||dt===e.UNSIGNED_INT||ue.gpuType===kl);if(ue.isInterleavedBufferAttribute){const K=ue.data,Qt=K.stride,ht=ue.offset;if(K.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Z.locationSize;Ge++)G(Z.location+Ge,K.meshPerAttribute);W.isInstancedMesh!==!0&&Me._maxInstanceCount===void 0&&(Me._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ge=0;Ge<Z.locationSize;Ge++)N(Z.location+Ge);e.bindBuffer(e.ARRAY_BUFFER,et);for(let Ge=0;Ge<Z.locationSize;Ge++)k(Z.location+Ge,we/Z.locationSize,dt,Ae,Qt*tt,(ht+we/Z.locationSize*Ge)*tt,xt)}else{if(ue.isInstancedBufferAttribute){for(let K=0;K<Z.locationSize;K++)G(Z.location+K,ue.meshPerAttribute);W.isInstancedMesh!==!0&&Me._maxInstanceCount===void 0&&(Me._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let K=0;K<Z.locationSize;K++)N(Z.location+K);e.bindBuffer(e.ARRAY_BUFFER,et);for(let K=0;K<Z.locationSize;K++)k(Z.location+K,we/Z.locationSize,dt,Ae,we*tt,we/Z.locationSize*K*tt,xt)}}else if(ge!==void 0){const Ae=ge[_e];if(Ae!==void 0)switch(Ae.length){case 2:e.vertexAttrib2fv(Z.location,Ae);break;case 3:e.vertexAttrib3fv(Z.location,Ae);break;case 4:e.vertexAttrib4fv(Z.location,Ae);break;default:e.vertexAttrib1fv(Z.location,Ae)}}}}P()}function R(){le();for(const W in a){const j=a[W];for(const J in j){const Me=j[J];for(const he in Me)S(Me[he].object),delete Me[he];delete j[J]}delete a[W]}}function C(W){if(a[W.id]===void 0)return;const j=a[W.id];for(const J in j){const Me=j[J];for(const he in Me)S(Me[he].object),delete Me[he];delete j[J]}delete a[W.id]}function Q(W){for(const j in a){const J=a[j];if(J[W.id]===void 0)continue;const Me=J[W.id];for(const he in Me)S(Me[he].object),delete Me[he];delete J[W.id]}}function le(){me(),u=!0,h!==c&&(h=c,_(h.object))}function me(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:le,resetDefaultState:me,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:Q,initAttributes:T,enableAttribute:N,disableUnusedAttributes:P}}function $_(e,t,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){e.drawArrays(s,u,f),n.update(f,s,1)}function c(u,f,d){if(d===0)return;let _,S;if(r)_=e,S="drawArraysInstanced";else if(_=t.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](s,u,f,d),n.update(f,s,d)}function h(u,f,d){if(d===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<d;S++)this.render(u[S],f[S]);else{_.multiDrawArraysWEBGL(s,u,0,f,0,d);let S=0;for(let M=0;M<d;M++)S+=f[M];n.update(S,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function J_(e,t,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(k){if(k==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const h=o||t.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),S=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),M=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=d>0,N=o||t.has("OES_texture_float"),G=T&&N,P=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:T,floatFragmentTextures:N,floatVertexTextures:G,maxSamples:P}}function Z_(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new or,a=new Mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||i!==0||r;return r=d,i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,_){const S=f.clippingPlanes,M=f.clipIntersection,v=f.clipShadows,g=e.get(f);if(!r||S===null||S.length===0||s&&!v)s?u(null):h();else{const x=s?0:i,T=x*4;let N=g.clippingState||null;c.value=N,N=u(S,d,T,_);for(let G=0;G!==T;++G)N[G]=n[G];g.clippingState=N,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,_,S){const M=f!==null?f.length:0;let v=null;if(M!==0){if(v=c.value,S!==!0||v===null){const g=_+M*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(v===null||v.length<g)&&(v=new Float32Array(g));for(let T=0,N=_;T!==M;++T,N+=4)o.copy(f[T]).applyMatrix4(x,a),o.normal.toArray(v,N),v[N+3]=o.constant}c.value=v,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,v}}function Q_(e){let t=new WeakMap;function n(o,a){return a===ia?o.mapping=_r:a===ra&&(o.mapping=vr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ia||a===ra)if(t.has(o)){const c=t.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new od(c.height/2);return h.fromEquirectangularTexture(e,o),t.set(o,h),o.addEventListener("dispose",r),n(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}function ev(e){const t=[],n=[],i=[];let r=e;const s=e-zr+1+eh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>e-zr?c=eh[o-e+zr-1]:o===0&&(c=0),i.push(c);const h=1/(a-2),u=-h,f=1+h,d=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,S=6,M=3,v=2,g=1,x=new Float32Array(M*S*_),T=new Float32Array(v*S*_),N=new Float32Array(g*S*_);for(let P=0;P<_;P++){const k=P%3*2/3-1,q=P>2?0:-1,R=[k,q,0,k+2/3,q,0,k+2/3,q+1,0,k,q,0,k+2/3,q+1,0,k,q+1,0];x.set(R,M*S*P),T.set(d,v*S*P);const C=[P,P,P,P,P,P];N.set(C,g*S*P)}const G=new Zt;G.setAttribute("position",new Jt(x,M)),G.setAttribute("uv",new Jt(T,v)),G.setAttribute("faceIndex",new Jt(N,g)),t.push(G),r>zr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Su(e,t,n){const i=new Kn(e,t,n);return i.texture.mapping=qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jo(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function tv(e,t,n){const i=new Float32Array(lr),r=new F(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function xu(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function bu(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nv(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,h=c===ia||c===ra,u=c===_r||c===vr;if(h||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return n===null&&(n=new ih(e)),f=h?n.fromEquirectangular(a,f):n.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(h&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new ih(e));const d=h?n.fromEquirectangular(a):n.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&c++;return c===h}function s(a){const c=a.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iv(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rv(e,t,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const S in d.attributes)t.remove(d.attributes[S]);for(const S in d.morphAttributes){const M=d.morphAttributes[S];for(let v=0,g=M.length;v<g;v++)t.remove(M[v])}d.removeEventListener("dispose",o),delete r[d.id];const _=s.get(d);_&&(t.remove(_),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function c(f){const d=f.attributes;for(const S in d)t.update(d[S],e.ARRAY_BUFFER);const _=f.morphAttributes;for(const S in _){const M=_[S];for(let v=0,g=M.length;v<g;v++)t.update(M[v],e.ARRAY_BUFFER)}}function h(f){const d=[],_=f.index,S=f.attributes.position;let M=0;if(_!==null){const x=_.array;M=_.version;for(let T=0,N=x.length;T<N;T+=3){const G=x[T+0],P=x[T+1],k=x[T+2];d.push(G,P,P,k,k,G)}}else if(S!==void 0){const x=S.array;M=S.version;for(let T=0,N=x.length/3-1;T<N;T+=3){const G=T+0,P=T+1,k=T+2;d.push(G,P,P,k,k,G)}}else return;const v=new(vu(d)?qc:Xc)(d,1);v.version=M;const g=s.get(f);g&&t.remove(g),s.set(f,v)}function u(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&h(f)}else h(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function sv(e,t,n,i){const r=i.isWebGL2;let s;function o(_){s=_}let a,c;function h(_){a=_.type,c=_.bytesPerElement}function u(_,S){e.drawElements(s,S,a,_*c),n.update(S,s,1)}function f(_,S,M){if(M===0)return;let v,g;if(r)v=e,g="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](s,S,a,_*c,M),n.update(S,s,M)}function d(_,S,M){if(M===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<M;g++)this.render(_[g]/c,S[g]);else{v.multiDrawElementsWEBGL(s,S,0,a,_,0,M);let g=0;for(let x=0;x<M;x++)g+=S[x];n.update(g,s,1)}}this.setMode=o,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function ov(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(s/3);break;case e.LINES:n.lines+=a*(s/2);break;case e.LINE_STRIP:n.lines+=a*(s-1);break;case e.LINE_LOOP:n.lines+=a*s;break;case e.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function av(e,t){return e[0]-t[0]}function lv(e,t){return Math.abs(t[1])-Math.abs(e[1])}function cv(e,t,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ht,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function c(h,u,f){const d=h.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=_!==void 0?_.length:0;let M=s.get(u);if(M===void 0||M.count!==S){let x=function(){me.dispose(),s.delete(u),u.removeEventListener("dispose",x)};M!==void 0&&M.texture.dispose();const T=u.morphAttributes.position!==void 0,N=u.morphAttributes.normal!==void 0,G=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],k=u.morphAttributes.normal||[],q=u.morphAttributes.color||[];let R=0;T===!0&&(R=1),N===!0&&(R=2),G===!0&&(R=3);let C=u.attributes.position.count*R,Q=1;C>t.maxTextureSize&&(Q=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const le=new Float32Array(C*Q*4*S),me=new Dc(le,C,Q,S);me.type=Si,me.needsUpdate=!0;const W=R*4;for(let j=0;j<S;j++){const J=P[j],Me=k[j],he=q[j],ce=C*Q*4*j;for(let ge=0;ge<J.count;ge++){const _e=ge*W;T===!0&&(o.fromBufferAttribute(J,ge),le[ce+_e+0]=o.x,le[ce+_e+1]=o.y,le[ce+_e+2]=o.z,le[ce+_e+3]=0),N===!0&&(o.fromBufferAttribute(Me,ge),le[ce+_e+4]=o.x,le[ce+_e+5]=o.y,le[ce+_e+6]=o.z,le[ce+_e+7]=0),G===!0&&(o.fromBufferAttribute(he,ge),le[ce+_e+8]=o.x,le[ce+_e+9]=o.y,le[ce+_e+10]=o.z,le[ce+_e+11]=he.itemSize===4?o.w:1)}}M={count:S,texture:me,size:new De(C,Q)},s.set(u,M),u.addEventListener("dispose",x)}let v=0;for(let x=0;x<d.length;x++)v+=d[x];const g=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(e,"morphTargetBaseInfluence",g),f.getUniforms().setValue(e,"morphTargetInfluences",d),f.getUniforms().setValue(e,"morphTargetsTexture",M.texture,n),f.getUniforms().setValue(e,"morphTargetsTextureSize",M.size)}else{const _=d===void 0?0:d.length;let S=i[u.id];if(S===void 0||S.length!==_){S=[];for(let T=0;T<_;T++)S[T]=[T,0];i[u.id]=S}for(let T=0;T<_;T++){const N=S[T];N[0]=T,N[1]=d[T]}S.sort(lv);for(let T=0;T<8;T++)T<_&&S[T][1]?(a[T][0]=S[T][0],a[T][1]=S[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(av);const M=u.morphAttributes.position,v=u.morphAttributes.normal;let g=0;for(let T=0;T<8;T++){const N=a[T],G=N[0],P=N[1];G!==Number.MAX_SAFE_INTEGER&&P?(M&&u.getAttribute("morphTarget"+T)!==M[G]&&u.setAttribute("morphTarget"+T,M[G]),v&&u.getAttribute("morphNormal"+T)!==v[G]&&u.setAttribute("morphNormal"+T,v[G]),r[T]=P,g+=P):(M&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),v&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const x=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(e,"morphTargetBaseInfluence",x),f.getUniforms().setValue(e,"morphTargetInfluences",r)}}return{update:c}}function hv(e,t,n,i){let r=new WeakMap;function s(c){const h=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:s,dispose:o}}function ds(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=hh[r];if(s===void 0&&(s=new Float32Array(r),hh[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function cn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function hn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Zo(e,t){let n=uh[t];n===void 0&&(n=new Int32Array(t),uh[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function uv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function fv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2fv(this.addr,t),hn(n,t)}}function dv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(cn(n,t))return;e.uniform3fv(this.addr,t),hn(n,t)}}function pv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4fv(this.addr,t),hn(n,t)}}function mv(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hn(n,t)}else{if(cn(n,i))return;ph.set(i),e.uniformMatrix2fv(this.addr,!1,ph),hn(n,i)}}function gv(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hn(n,t)}else{if(cn(n,i))return;dh.set(i),e.uniformMatrix3fv(this.addr,!1,dh),hn(n,i)}}function _v(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hn(n,t)}else{if(cn(n,i))return;fh.set(i),e.uniformMatrix4fv(this.addr,!1,fh),hn(n,i)}}function vv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Mv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2iv(this.addr,t),hn(n,t)}}function yv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3iv(this.addr,t),hn(n,t)}}function Sv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4iv(this.addr,t),hn(n,t)}}function xv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2uiv(this.addr,t),hn(n,t)}}function Tv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3uiv(this.addr,t),hn(n,t)}}function Ev(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4uiv(this.addr,t),hn(n,t)}}function Av(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);const s=this.type===e.SAMPLER_2D_SHADOW?oh:sh;n.setTexture2D(t||s,r)}function wv(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||lh,r)}function Rv(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||ch,r)}function Cv(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||ah,r)}function Lv(e){switch(e){case 5126:return uv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return _v;case 5124:case 35670:return vv;case 35667:case 35671:return Mv;case 35668:case 35672:return yv;case 35669:case 35673:return Sv;case 5125:return xv;case 36294:return bv;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Pv(e,t){e.uniform1fv(this.addr,t)}function Iv(e,t){const n=ds(t,this.size,2);e.uniform2fv(this.addr,n)}function Dv(e,t){const n=ds(t,this.size,3);e.uniform3fv(this.addr,n)}function Uv(e,t){const n=ds(t,this.size,4);e.uniform4fv(this.addr,n)}function Nv(e,t){const n=ds(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ov(e,t){const n=ds(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Fv(e,t){const n=ds(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Bv(e,t){e.uniform1iv(this.addr,t)}function zv(e,t){e.uniform2iv(this.addr,t)}function kv(e,t){e.uniform3iv(this.addr,t)}function Gv(e,t){e.uniform4iv(this.addr,t)}function Hv(e,t){e.uniform1uiv(this.addr,t)}function Vv(e,t){e.uniform2uiv(this.addr,t)}function Wv(e,t){e.uniform3uiv(this.addr,t)}function Xv(e,t){e.uniform4uiv(this.addr,t)}function qv(e,t,n){const i=this.cache,r=t.length,s=Zo(n,r);cn(i,s)||(e.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(t[o]||sh,s[o])}function Yv(e,t,n){const i=this.cache,r=t.length,s=Zo(n,r);cn(i,s)||(e.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||lh,s[o])}function jv(e,t,n){const i=this.cache,r=t.length,s=Zo(n,r);cn(i,s)||(e.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||ch,s[o])}function Kv(e,t,n){const i=this.cache,r=t.length,s=Zo(n,r);cn(i,s)||(e.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||ah,s[o])}function $v(e){switch(e){case 5126:return Pv;case 35664:return Iv;case 35665:return Dv;case 35666:return Uv;case 35674:return Nv;case 35675:return Ov;case 35676:return Fv;case 5124:case 35670:return Bv;case 35667:case 35671:return zv;case 35668:case 35672:return kv;case 35669:case 35673:return Gv;case 5125:return Hv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Tu(e,t){e.seq.push(t),e.map[t.id]=t}function Jv(e,t,n){const i=e.name,r=i.length;for(Na.lastIndex=0;;){const s=Na.exec(i),o=Na.lastIndex;let a=s[1];const c=s[2]==="]",h=s[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===r){Tu(n,h===void 0?new Hm(a,e,t):new Vm(a,e,t));break}else{let f=n.map[a];f===void 0&&(f=new Wm(a),Tu(n,f)),n=f}}}function Eu(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}function Zv(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Qv(e){const t=Ct.getPrimaries(Ct.workingColorSpace),n=Ct.getPrimaries(e);let i;switch(t===n?i="":t===Js&&n===$s?i="LinearDisplayP3ToLinearSRGB":t===$s&&n===Js&&(i="LinearSRGBToLinearDisplayP3"),e){case fn:case js:return[i,"LinearTransferOETF"];case Ot:case pa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Au(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Zv(e.getShaderSource(t),o)}else return r}function eM(e,t){const n=Qv(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tM(e,t){let n;switch(t){case pf:n="Linear";break;case mf:n="Reinhard";break;case gf:n="OptimizedCineon";break;case _f:n="ACESFilmic";break;case Mf:n="AgX";break;case vf:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function nM(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function iM(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ps).join(`
`)}function rM(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function sM(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),o=s.name;let a=1;s.type===e.FLOAT_MAT2&&(a=2),s.type===e.FLOAT_MAT3&&(a=3),s.type===e.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function ps(e){return e!==""}function wu(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Rl(e){return e.replace(Ym,oM)}function oM(e,t){let n=ft[t];if(n===void 0){const i=jm.get(t);if(i!==void 0)n=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rl(n)}function Cu(e){return e.replace(Km,aM)}function aM(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lu(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lM(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Gu?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function cM(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case _r:case vr:t="ENVMAP_TYPE_CUBE";break;case qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hM(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===vr&&(t="ENVMAP_MODE_REFRACTION"),t}function uM(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ol:t="ENVMAP_BLENDING_MULTIPLY";break;case ff:t="ENVMAP_BLENDING_MIX";break;case df:t="ENVMAP_BLENDING_ADD";break}return t}function fM(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function dM(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=lM(n),h=cM(n),u=hM(n),f=uM(n),d=fM(n),_=n.isWebGL2?"":nM(n),S=iM(n),M=rM(s),v=r.createProgram();let g,x,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ps).join(`
`),g.length>0&&(g+=`
`),x=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ps).join(`
`),x.length>0&&(x+=`
`)):(g=[Lu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),x=[_,Lu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?ft.tonemapping_pars_fragment:"",n.toneMapping!==Oi?tM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,eM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ps).join(`
`)),o=Rl(o),o=wu(o,n),o=Ru(o,n),a=Rl(a),a=wu(a,n),a=Ru(a,n),o=Cu(o),a=Cu(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=T+g+o,G=T+x+a,P=Eu(r,r.VERTEX_SHADER,N),k=Eu(r,r.FRAGMENT_SHADER,G);r.attachShader(v,P),r.attachShader(v,k),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function q(le){if(e.debug.checkShaderErrors){const me=r.getProgramInfoLog(v).trim(),W=r.getShaderInfoLog(P).trim(),j=r.getShaderInfoLog(k).trim();let J=!0,Me=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,v,P,k);else{const he=Au(r,P,"vertex"),ce=Au(r,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+me+`
`+he+`
`+ce)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(W===""||j==="")&&(Me=!1);Me&&(le.diagnostics={runnable:J,programLog:me,vertexShader:{log:W,prefix:g},fragmentShader:{log:j,prefix:x}})}r.deleteShader(P),r.deleteShader(k),R=new bo(r,v),C=sM(r,v)}let R;this.getUniforms=function(){return R===void 0&&q(this),R};let C;this.getAttributes=function(){return C===void 0&&q(this),C};let Q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=r.getProgramParameter(v,Xm)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=k,this}function pM(e,t,n,i,r,s,o){const a=new Bc,c=new Jm,h=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return R===0?"uv":`uv${R}`}function v(R,C,Q,le,me){const W=le.fog,j=me.geometry,J=R.isMeshStandardMaterial?le.environment:null,Me=(R.isMeshStandardMaterial?n:t).get(R.envMap||J),he=Me&&Me.mapping===qs?Me.image.height:null,ce=S[R.type];R.precision!==null&&(_=r.getMaxPrecision(R.precision),_!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",_,"instead."));const ge=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=ge!==void 0?ge.length:0;let Z=0;j.morphAttributes.position!==void 0&&(Z=1),j.morphAttributes.normal!==void 0&&(Z=2),j.morphAttributes.color!==void 0&&(Z=3);let ue,Ae,we,Ve;if(ce){const _n=ci[ce];ue=_n.vertexShader,Ae=_n.fragmentShader}else ue=R.vertexShader,Ae=R.fragmentShader,c.update(R),we=c.getVertexShaderID(R),Ve=c.getFragmentShaderID(R);const et=e.getRenderTarget(),dt=me.isInstancedMesh===!0,tt=me.isBatchedMesh===!0,xt=!!R.map,K=!!R.matcap,Qt=!!Me,ht=!!R.aoMap,Ge=!!R.lightMap,Je=!!R.bumpMap,Ye=!!R.normalMap,_t=!!R.displacementMap,ot=!!R.emissiveMap,U=!!R.metalnessMap,A=!!R.roughnessMap,ee=R.anisotropy>0,ve=R.clearcoat>0,oe=R.iridescence>0,pe=R.sheen>0,qe=R.transmission>0,Ee=ee&&!!R.anisotropyMap,Ie=ve&&!!R.clearcoatMap,ye=ve&&!!R.clearcoatNormalMap,at=ve&&!!R.clearcoatRoughnessMap,de=oe&&!!R.iridescenceMap,Wt=oe&&!!R.iridescenceThicknessMap,gt=pe&&!!R.sheenColorMap,Ze=pe&&!!R.sheenRoughnessMap,Ue=!!R.specularMap,Oe=!!R.specularColorMap,mt=!!R.specularIntensityMap,Ut=qe&&!!R.transmissionMap,vt=qe&&!!R.thicknessMap,Lt=!!R.gradientMap,xe=!!R.alphaMap,H=R.alphaTest>0,Te=!!R.alphaHash,Re=!!R.extensions,je=!!j.attributes.uv1,We=!!j.attributes.uv2,Rt=!!j.attributes.uv3;let zt=Oi;return R.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(zt=e.toneMapping),{isWebGL2:u,shaderID:ce,shaderType:R.type,shaderName:R.name,vertexShader:ue,fragmentShader:Ae,defines:R.defines,customVertexShaderID:we,customFragmentShaderID:Ve,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:_,batching:tt,instancing:dt,instancingColor:dt&&me.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:fn,map:xt,matcap:K,envMap:Qt,envMapMode:Qt&&Me.mapping,envMapCubeUVHeight:he,aoMap:ht,lightMap:Ge,bumpMap:Je,normalMap:Ye,displacementMap:d&&_t,emissiveMap:ot,normalMapObjectSpace:Ye&&R.normalMapType===Df,normalMapTangentSpace:Ye&&R.normalMapType===bc,metalnessMap:U,roughnessMap:A,anisotropy:ee,anisotropyMap:Ee,clearcoat:ve,clearcoatMap:Ie,clearcoatNormalMap:ye,clearcoatRoughnessMap:at,iridescence:oe,iridescenceMap:de,iridescenceThicknessMap:Wt,sheen:pe,sheenColorMap:gt,sheenRoughnessMap:Ze,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:mt,transmission:qe,transmissionMap:Ut,thicknessMap:vt,gradientMap:Lt,opaque:R.transparent===!1&&R.blending===gr,alphaMap:xe,alphaTest:H,alphaHash:Te,combine:R.combine,mapUv:xt&&M(R.map.channel),aoMapUv:ht&&M(R.aoMap.channel),lightMapUv:Ge&&M(R.lightMap.channel),bumpMapUv:Je&&M(R.bumpMap.channel),normalMapUv:Ye&&M(R.normalMap.channel),displacementMapUv:_t&&M(R.displacementMap.channel),emissiveMapUv:ot&&M(R.emissiveMap.channel),metalnessMapUv:U&&M(R.metalnessMap.channel),roughnessMapUv:A&&M(R.roughnessMap.channel),anisotropyMapUv:Ee&&M(R.anisotropyMap.channel),clearcoatMapUv:Ie&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:ye&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&M(R.sheenRoughnessMap.channel),specularMapUv:Ue&&M(R.specularMap.channel),specularColorMapUv:Oe&&M(R.specularColorMap.channel),specularIntensityMapUv:mt&&M(R.specularIntensityMap.channel),transmissionMapUv:Ut&&M(R.transmissionMap.channel),thicknessMapUv:vt&&M(R.thicknessMap.channel),alphaMapUv:xe&&M(R.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ye||ee),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:We,vertexUv3s:Rt,pointsUvs:me.isPoints===!0&&!!j.attributes.uv&&(xt||xe),fog:!!W,useFog:R.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:me.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Z,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:e.shadowMap.enabled&&Q.length>0,shadowMapType:e.shadowMap.type,toneMapping:zt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:xt&&R.map.isVideoTexture===!0&&Ct.getTransfer(R.map.colorSpace)===Gt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Bt,flipSided:R.side===Pn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Re&&R.extensions.derivatives===!0,extensionFragDepth:Re&&R.extensions.fragDepth===!0,extensionDrawBuffers:Re&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&R.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function g(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const Q in R.defines)C.push(Q),C.push(R.defines[Q]);return R.isRawShaderMaterial===!1&&(x(C,R),T(C,R),C.push(e.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function x(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function T(R,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),R.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),R.push(a.mask)}function N(R){const C=S[R.type];let Q;if(C){const le=ci[C];Q=Mo.clone(le.uniforms)}else Q=R.uniforms;return Q}function G(R,C){let Q;for(let le=0,me=h.length;le<me;le++){const W=h[le];if(W.cacheKey===C){Q=W,++Q.usedTimes;break}}return Q===void 0&&(Q=new dM(e,C,R,s),h.push(Q)),Q}function P(R){if(--R.usedTimes===0){const C=h.indexOf(R);h[C]=h[h.length-1],h.pop(),R.destroy()}}function k(R){c.remove(R)}function q(){c.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:N,acquireProgram:G,releaseProgram:P,releaseShaderCache:k,programs:h,dispose:q}}function mM(){let e=new WeakMap;function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function n(s){e.delete(s)}function i(s,o,a){e.get(s)[o]=a}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function gM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Pu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Iu(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function o(f,d,_,S,M,v){let g=e[t];return g===void 0?(g={id:f.id,object:f,geometry:d,material:_,groupOrder:S,renderOrder:f.renderOrder,z:M,group:v},e[t]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=_,g.groupOrder=S,g.renderOrder=f.renderOrder,g.z=M,g.group=v),t++,g}function a(f,d,_,S,M,v){const g=o(f,d,_,S,M,v);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):n.push(g)}function c(f,d,_,S,M,v){const g=o(f,d,_,S,M,v);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):n.unshift(g)}function h(f,d){n.length>1&&n.sort(f||gM),i.length>1&&i.sort(d||Pu),r.length>1&&r.sort(d||Pu)}function u(){for(let f=t,d=e.length;f<d;f++){const _=e[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:h}}function _M(){let e=new WeakMap;function t(i,r){const s=e.get(i);let o;return s===void 0?(o=new Iu,e.set(i,[o])):r>=s.length?(o=new Iu,s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function vM(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new $e};break;case"SpotLight":n={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function MM(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function yM(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function SM(e,t){const n=new vM,i=MM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new ut,a=new ut;function c(u,f){let d=0,_=0,S=0;for(let le=0;le<9;le++)r.probe[le].set(0,0,0);let M=0,v=0,g=0,x=0,T=0,N=0,G=0,P=0,k=0,q=0,R=0;u.sort(yM);const C=f===!0?Math.PI:1;for(let le=0,me=u.length;le<me;le++){const W=u[le],j=W.color,J=W.intensity,Me=W.distance,he=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)d+=j.r*J*C,_+=j.g*J*C,S+=j.b*J*C;else if(W.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(W.sh.coefficients[ce],J);R++}else if(W.isDirectionalLight){const ce=n.get(W);if(ce.color.copy(W.color).multiplyScalar(W.intensity*C),W.castShadow){const ge=W.shadow,_e=i.get(W);_e.shadowBias=ge.bias,_e.shadowNormalBias=ge.normalBias,_e.shadowRadius=ge.radius,_e.shadowMapSize=ge.mapSize,r.directionalShadow[M]=_e,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=W.shadow.matrix,N++}r.directional[M]=ce,M++}else if(W.isSpotLight){const ce=n.get(W);ce.position.setFromMatrixPosition(W.matrixWorld),ce.color.copy(j).multiplyScalar(J*C),ce.distance=Me,ce.coneCos=Math.cos(W.angle),ce.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),ce.decay=W.decay,r.spot[g]=ce;const ge=W.shadow;if(W.map&&(r.spotLightMap[k]=W.map,k++,ge.updateMatrices(W),W.castShadow&&q++),r.spotLightMatrix[g]=ge.matrix,W.castShadow){const _e=i.get(W);_e.shadowBias=ge.bias,_e.shadowNormalBias=ge.normalBias,_e.shadowRadius=ge.radius,_e.shadowMapSize=ge.mapSize,r.spotShadow[g]=_e,r.spotShadowMap[g]=he,P++}g++}else if(W.isRectAreaLight){const ce=n.get(W);ce.color.copy(j).multiplyScalar(J),ce.halfWidth.set(W.width*.5,0,0),ce.halfHeight.set(0,W.height*.5,0),r.rectArea[x]=ce,x++}else if(W.isPointLight){const ce=n.get(W);if(ce.color.copy(W.color).multiplyScalar(W.intensity*C),ce.distance=W.distance,ce.decay=W.decay,W.castShadow){const ge=W.shadow,_e=i.get(W);_e.shadowBias=ge.bias,_e.shadowNormalBias=ge.normalBias,_e.shadowRadius=ge.radius,_e.shadowMapSize=ge.mapSize,_e.shadowCameraNear=ge.camera.near,_e.shadowCameraFar=ge.camera.far,r.pointShadow[v]=_e,r.pointShadowMap[v]=he,r.pointShadowMatrix[v]=W.shadow.matrix,G++}r.point[v]=ce,v++}else if(W.isHemisphereLight){const ce=n.get(W);ce.skyColor.copy(W.color).multiplyScalar(J*C),ce.groundColor.copy(W.groundColor).multiplyScalar(J*C),r.hemi[T]=ce,T++}}x>0&&(t.isWebGL2?e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=_,r.ambient[2]=S;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==v||Q.spotLength!==g||Q.rectAreaLength!==x||Q.hemiLength!==T||Q.numDirectionalShadows!==N||Q.numPointShadows!==G||Q.numSpotShadows!==P||Q.numSpotMaps!==k||Q.numLightProbes!==R)&&(r.directional.length=M,r.spot.length=g,r.rectArea.length=x,r.point.length=v,r.hemi.length=T,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=G,r.pointShadowMap.length=G,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=G,r.spotLightMatrix.length=P+k-q,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=R,Q.directionalLength=M,Q.pointLength=v,Q.spotLength=g,Q.rectAreaLength=x,Q.hemiLength=T,Q.numDirectionalShadows=N,Q.numPointShadows=G,Q.numSpotShadows=P,Q.numSpotMaps=k,Q.numLightProbes=R,r.version=Qm++)}function h(u,f){let d=0,_=0,S=0,M=0,v=0;const g=f.matrixWorldInverse;for(let x=0,T=u.length;x<T;x++){const N=u[x];if(N.isDirectionalLight){const G=r.directional[d];G.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),G.direction.sub(s),G.direction.transformDirection(g),d++}else if(N.isSpotLight){const G=r.spot[S];G.position.setFromMatrixPosition(N.matrixWorld),G.position.applyMatrix4(g),G.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),G.direction.sub(s),G.direction.transformDirection(g),S++}else if(N.isRectAreaLight){const G=r.rectArea[M];G.position.setFromMatrixPosition(N.matrixWorld),G.position.applyMatrix4(g),a.identity(),o.copy(N.matrixWorld),o.premultiply(g),a.extractRotation(o),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),G.halfWidth.applyMatrix4(a),G.halfHeight.applyMatrix4(a),M++}else if(N.isPointLight){const G=r.point[_];G.position.setFromMatrixPosition(N.matrixWorld),G.position.applyMatrix4(g),_++}else if(N.isHemisphereLight){const G=r.hemi[v];G.direction.setFromMatrixPosition(N.matrixWorld),G.direction.transformDirection(g),v++}}}return{setup:c,setupView:h,state:r}}function Du(e,t){const n=new SM(e,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function c(f){n.setup(i,f)}function h(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a}}function xM(e,t){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let c;return a===void 0?(c=new Du(e,t),n.set(s,[c])):o>=a.length?(c=new Du(e,t),a.push(c)):c=a[o],c}function r(){n=new WeakMap}return{get:i,dispose:r}}function bM(e,t,n){let i=new La;const r=new De,s=new De,o=new Ht,a=new e0({depthPacking:If}),c=new t0,h={},u=n.maxTextureSize,f={[_i]:Pn,[Pn]:_i,[Bt]:Bt},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const S=new Zt;S.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new re(S,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let g=this.type;this.render=function(P,k,q){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;const R=e.getRenderTarget(),C=e.getActiveCubeFace(),Q=e.getActiveMipmapLevel(),le=e.state;le.setBlending(vi),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const me=g!==gi&&this.type===gi,W=g===gi&&this.type!==gi;for(let j=0,J=P.length;j<J;j++){const Me=P[j],he=Me.shadow;if(he===void 0){console.warn("THREE.WebGLShadowMap:",Me,"has no shadow.");continue}if(he.autoUpdate===!1&&he.needsUpdate===!1)continue;r.copy(he.mapSize);const ce=he.getFrameExtents();if(r.multiply(ce),s.copy(he.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,he.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,he.mapSize.y=s.y)),he.map===null||me===!0||W===!0){const _e=this.type!==gi?{minFilter:nn,magFilter:nn}:{};he.map!==null&&he.map.dispose(),he.map=new Kn(r.x,r.y,_e),he.map.texture.name=Me.name+".shadowMap",he.camera.updateProjectionMatrix()}e.setRenderTarget(he.map),e.clear();const ge=he.getViewportCount();for(let _e=0;_e<ge;_e++){const Z=he.getViewport(_e);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),le.viewport(o),he.updateMatrices(Me,_e),i=he.getFrustum(),N(k,q,he.camera,Me,this.type)}he.isPointLightShadow!==!0&&this.type===gi&&x(he,q),he.needsUpdate=!1}g=this.type,v.needsUpdate=!1,e.setRenderTarget(R,C,Q)};function x(P,k){const q=t.update(M);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Kn(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(k,null,q,d,M,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(k,null,q,_,M,null)}function T(P,k,q,R){let C=null;const Q=q.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(Q!==void 0)C=Q;else if(C=q.isPointLight===!0?c:a,e.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const le=C.uuid,me=k.uuid;let W=h[le];W===void 0&&(W={},h[le]=W);let j=W[me];j===void 0&&(j=C.clone(),W[me]=j,k.addEventListener("dispose",G)),C=j}if(C.visible=k.visible,C.wireframe=k.wireframe,R===gi?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:f[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=e.properties.get(C);le.light=q}return C}function N(P,k,q,R,C){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===gi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld);const me=t.update(P),W=P.material;if(Array.isArray(W)){const j=me.groups;for(let J=0,Me=j.length;J<Me;J++){const he=j[J],ce=W[he.materialIndex];if(ce&&ce.visible){const ge=T(P,ce,R,C);P.onBeforeShadow(e,P,k,q,me,ge,he),e.renderBufferDirect(q,null,me,ge,P,he),P.onAfterShadow(e,P,k,q,me,ge,he)}}}else if(W.visible){const j=T(P,W,R,C);P.onBeforeShadow(e,P,k,q,me,j,null),e.renderBufferDirect(q,null,me,j,P,null),P.onAfterShadow(e,P,k,q,me,j,null)}}const le=P.children;for(let me=0,W=le.length;me<W;me++)N(le[me],k,q,R,C)}function G(P){P.target.removeEventListener("dispose",G);for(const q in h){const R=h[q],C=P.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function TM(e,t,n){const i=n.isWebGL2;function r(){let H=!1;const Te=new Ht;let Re=null;const je=new Ht(0,0,0,0);return{setMask:function(We){Re!==We&&!H&&(e.colorMask(We,We,We,We),Re=We)},setLocked:function(We){H=We},setClear:function(We,Rt,zt,en,_n){_n===!0&&(We*=en,Rt*=en,zt*=en),Te.set(We,Rt,zt,en),je.equals(Te)===!1&&(e.clearColor(We,Rt,zt,en),je.copy(Te))},reset:function(){H=!1,Re=null,je.set(-1,0,0,0)}}}function s(){let H=!1,Te=null,Re=null,je=null;return{setTest:function(We){We?tt(e.DEPTH_TEST):xt(e.DEPTH_TEST)},setMask:function(We){Te!==We&&!H&&(e.depthMask(We),Te=We)},setFunc:function(We){if(Re!==We){switch(We){case sf:e.depthFunc(e.NEVER);break;case of:e.depthFunc(e.ALWAYS);break;case af:e.depthFunc(e.LESS);break;case Xs:e.depthFunc(e.LEQUAL);break;case lf:e.depthFunc(e.EQUAL);break;case cf:e.depthFunc(e.GEQUAL);break;case hf:e.depthFunc(e.GREATER);break;case uf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Re=We}},setLocked:function(We){H=We},setClear:function(We){je!==We&&(e.clearDepth(We),je=We)},reset:function(){H=!1,Te=null,Re=null,je=null}}}function o(){let H=!1,Te=null,Re=null,je=null,We=null,Rt=null,zt=null,en=null,_n=null;return{setTest:function(Tt){H||(Tt?tt(e.STENCIL_TEST):xt(e.STENCIL_TEST))},setMask:function(Tt){Te!==Tt&&!H&&(e.stencilMask(Tt),Te=Tt)},setFunc:function(Tt,ei,qn){(Re!==Tt||je!==ei||We!==qn)&&(e.stencilFunc(Tt,ei,qn),Re=Tt,je=ei,We=qn)},setOp:function(Tt,ei,qn){(Rt!==Tt||zt!==ei||en!==qn)&&(e.stencilOp(Tt,ei,qn),Rt=Tt,zt=ei,en=qn)},setLocked:function(Tt){H=Tt},setClear:function(Tt){_n!==Tt&&(e.clearStencil(Tt),_n=Tt)},reset:function(){H=!1,Te=null,Re=null,je=null,We=null,Rt=null,zt=null,en=null,_n=null}}}const a=new r,c=new s,h=new o,u=new WeakMap,f=new WeakMap;let d={},_={},S=new WeakMap,M=[],v=null,g=!1,x=null,T=null,N=null,G=null,P=null,k=null,q=null,R=new $e(0,0,0),C=0,Q=!1,le=null,me=null,W=null,j=null,J=null;const Me=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,ce=0;const ge=e.getParameter(e.VERSION);ge.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ge)[1]),he=ce>=1):ge.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),he=ce>=2);let _e=null,Z={};const ue=e.getParameter(e.SCISSOR_BOX),Ae=e.getParameter(e.VIEWPORT),we=new Ht().fromArray(ue),Ve=new Ht().fromArray(Ae);function et(H,Te,Re,je){const We=new Uint8Array(4),Rt=e.createTexture();e.bindTexture(H,Rt),e.texParameteri(H,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(H,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let zt=0;zt<Re;zt++)i&&(H===e.TEXTURE_3D||H===e.TEXTURE_2D_ARRAY)?e.texImage3D(Te,0,e.RGBA,1,1,je,0,e.RGBA,e.UNSIGNED_BYTE,We):e.texImage2D(Te+zt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,We);return Rt}const dt={};dt[e.TEXTURE_2D]=et(e.TEXTURE_2D,e.TEXTURE_2D,1),dt[e.TEXTURE_CUBE_MAP]=et(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(dt[e.TEXTURE_2D_ARRAY]=et(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),dt[e.TEXTURE_3D]=et(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),tt(e.DEPTH_TEST),c.setFunc(Xs),ot(!1),U(Ll),tt(e.CULL_FACE),Ye(vi);function tt(H){d[H]!==!0&&(e.enable(H),d[H]=!0)}function xt(H){d[H]!==!1&&(e.disable(H),d[H]=!1)}function K(H,Te){return _[H]!==Te?(e.bindFramebuffer(H,Te),_[H]=Te,i&&(H===e.DRAW_FRAMEBUFFER&&(_[e.FRAMEBUFFER]=Te),H===e.FRAMEBUFFER&&(_[e.DRAW_FRAMEBUFFER]=Te)),!0):!1}function Qt(H,Te){let Re=M,je=!1;if(H)if(Re=S.get(Te),Re===void 0&&(Re=[],S.set(Te,Re)),H.isWebGLMultipleRenderTargets){const We=H.texture;if(Re.length!==We.length||Re[0]!==e.COLOR_ATTACHMENT0){for(let Rt=0,zt=We.length;Rt<zt;Rt++)Re[Rt]=e.COLOR_ATTACHMENT0+Rt;Re.length=We.length,je=!0}}else Re[0]!==e.COLOR_ATTACHMENT0&&(Re[0]=e.COLOR_ATTACHMENT0,je=!0);else Re[0]!==e.BACK&&(Re[0]=e.BACK,je=!0);je&&(n.isWebGL2?e.drawBuffers(Re):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function ht(H){return v!==H?(e.useProgram(H),v=H,!0):!1}const Ge={[Qi]:e.FUNC_ADD,[Vu]:e.FUNC_SUBTRACT,[Wu]:e.FUNC_REVERSE_SUBTRACT};if(i)Ge[Ul]=e.MIN,Ge[Nl]=e.MAX;else{const H=t.get("EXT_blend_minmax");H!==null&&(Ge[Ul]=H.MIN_EXT,Ge[Nl]=H.MAX_EXT)}const Je={[Xu]:e.ZERO,[qu]:e.ONE,[Yu]:e.SRC_COLOR,[ta]:e.SRC_ALPHA,[Qu]:e.SRC_ALPHA_SATURATE,[Ju]:e.DST_COLOR,[Ku]:e.DST_ALPHA,[ju]:e.ONE_MINUS_SRC_COLOR,[na]:e.ONE_MINUS_SRC_ALPHA,[Zu]:e.ONE_MINUS_DST_COLOR,[$u]:e.ONE_MINUS_DST_ALPHA,[ef]:e.CONSTANT_COLOR,[tf]:e.ONE_MINUS_CONSTANT_COLOR,[nf]:e.CONSTANT_ALPHA,[rf]:e.ONE_MINUS_CONSTANT_ALPHA};function Ye(H,Te,Re,je,We,Rt,zt,en,_n,Tt){if(H===vi){g===!0&&(xt(e.BLEND),g=!1);return}if(g===!1&&(tt(e.BLEND),g=!0),H!==Hu){if(H!==x||Tt!==Q){if((T!==Qi||P!==Qi)&&(e.blendEquation(e.FUNC_ADD),T=Qi,P=Qi),Tt)switch(H){case gr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case un:e.blendFunc(e.ONE,e.ONE);break;case Il:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Dl:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case gr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case un:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Il:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Dl:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}N=null,G=null,k=null,q=null,R.set(0,0,0),C=0,x=H,Q=Tt}return}We=We||Te,Rt=Rt||Re,zt=zt||je,(Te!==T||We!==P)&&(e.blendEquationSeparate(Ge[Te],Ge[We]),T=Te,P=We),(Re!==N||je!==G||Rt!==k||zt!==q)&&(e.blendFuncSeparate(Je[Re],Je[je],Je[Rt],Je[zt]),N=Re,G=je,k=Rt,q=zt),(en.equals(R)===!1||_n!==C)&&(e.blendColor(en.r,en.g,en.b,_n),R.copy(en),C=_n),x=H,Q=!1}function _t(H,Te){H.side===Bt?xt(e.CULL_FACE):tt(e.CULL_FACE);let Re=H.side===Pn;Te&&(Re=!Re),ot(Re),H.blending===gr&&H.transparent===!1?Ye(vi):Ye(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const je=H.stencilWrite;h.setTest(je),je&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ee(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):xt(e.SAMPLE_ALPHA_TO_COVERAGE)}function ot(H){le!==H&&(H?e.frontFace(e.CW):e.frontFace(e.CCW),le=H)}function U(H){H!==zu?(tt(e.CULL_FACE),H!==me&&(H===Ll?e.cullFace(e.BACK):H===ku?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):xt(e.CULL_FACE),me=H}function A(H){H!==W&&(he&&e.lineWidth(H),W=H)}function ee(H,Te,Re){H?(tt(e.POLYGON_OFFSET_FILL),(j!==Te||J!==Re)&&(e.polygonOffset(Te,Re),j=Te,J=Re)):xt(e.POLYGON_OFFSET_FILL)}function ve(H){H?tt(e.SCISSOR_TEST):xt(e.SCISSOR_TEST)}function oe(H){H===void 0&&(H=e.TEXTURE0+Me-1),_e!==H&&(e.activeTexture(H),_e=H)}function pe(H,Te,Re){Re===void 0&&(_e===null?Re=e.TEXTURE0+Me-1:Re=_e);let je=Z[Re];je===void 0&&(je={type:void 0,texture:void 0},Z[Re]=je),(je.type!==H||je.texture!==Te)&&(_e!==Re&&(e.activeTexture(Re),_e=Re),e.bindTexture(H,Te||dt[H]),je.type=H,je.texture=Te)}function qe(){const H=Z[_e];H!==void 0&&H.type!==void 0&&(e.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ee(){try{e.compressedTexImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{e.compressedTexImage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{e.texSubImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{e.texSubImage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Wt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{e.texStorage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{e.texStorage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{e.texImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{e.texImage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(H){we.equals(H)===!1&&(e.scissor(H.x,H.y,H.z,H.w),we.copy(H))}function Ut(H){Ve.equals(H)===!1&&(e.viewport(H.x,H.y,H.z,H.w),Ve.copy(H))}function vt(H,Te){let Re=f.get(Te);Re===void 0&&(Re=new WeakMap,f.set(Te,Re));let je=Re.get(H);je===void 0&&(je=e.getUniformBlockIndex(Te,H.name),Re.set(H,je))}function Lt(H,Te){const je=f.get(Te).get(H);u.get(Te)!==je&&(e.uniformBlockBinding(Te,je,H.__bindingPointIndex),u.set(Te,je))}function xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},_e=null,Z={},_={},S=new WeakMap,M=[],v=null,g=!1,x=null,T=null,N=null,G=null,P=null,k=null,q=null,R=new $e(0,0,0),C=0,Q=!1,le=null,me=null,W=null,j=null,J=null,we.set(0,0,e.canvas.width,e.canvas.height),Ve.set(0,0,e.canvas.width,e.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:tt,disable:xt,bindFramebuffer:K,drawBuffers:Qt,useProgram:ht,setBlending:Ye,setMaterial:_t,setFlipSided:ot,setCullFace:U,setLineWidth:A,setPolygonOffset:ee,setScissorTest:ve,activeTexture:oe,bindTexture:pe,unbindTexture:qe,compressedTexImage2D:Ee,compressedTexImage3D:Ie,texImage2D:Ue,texImage3D:Oe,updateUBOMapping:vt,uniformBlockBinding:Lt,texStorage2D:gt,texStorage3D:Ze,texSubImage2D:ye,texSubImage3D:at,compressedTexSubImage2D:de,compressedTexSubImage3D:Wt,scissor:mt,viewport:Ut,reset:xe}}function EM(e,t,n,i,r,s,o){const a=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,A){return _?new OffscreenCanvas(U,A):Gs("canvas")}function M(U,A,ee,ve){let oe=1;if((U.width>ve||U.height>ve)&&(oe=ve/Math.max(U.width,U.height)),oe<1||A===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const pe=A?Ko:Math.floor,qe=pe(oe*U.width),Ee=pe(oe*U.height);f===void 0&&(f=S(qe,Ee));const Ie=ee?S(qe,Ee):f;return Ie.width=qe,Ie.height=Ee,Ie.getContext("2d").drawImage(U,0,0,qe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+qe+"x"+Ee+")."),Ie}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function v(U){return xl(U.width)&&xl(U.height)}function g(U){return a?!1:U.wrapS!==Nn||U.wrapT!==Nn||U.minFilter!==nn&&U.minFilter!==En}function x(U,A){return U.generateMipmaps&&A&&U.minFilter!==nn&&U.minFilter!==En}function T(U){e.generateMipmap(U)}function N(U,A,ee,ve,oe=!1){if(a===!1)return A;if(U!==null){if(e[U]!==void 0)return e[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pe=A;if(A===e.RED&&(ee===e.FLOAT&&(pe=e.R32F),ee===e.HALF_FLOAT&&(pe=e.R16F),ee===e.UNSIGNED_BYTE&&(pe=e.R8)),A===e.RED_INTEGER&&(ee===e.UNSIGNED_BYTE&&(pe=e.R8UI),ee===e.UNSIGNED_SHORT&&(pe=e.R16UI),ee===e.UNSIGNED_INT&&(pe=e.R32UI),ee===e.BYTE&&(pe=e.R8I),ee===e.SHORT&&(pe=e.R16I),ee===e.INT&&(pe=e.R32I)),A===e.RG&&(ee===e.FLOAT&&(pe=e.RG32F),ee===e.HALF_FLOAT&&(pe=e.RG16F),ee===e.UNSIGNED_BYTE&&(pe=e.RG8)),A===e.RGBA){const qe=oe?Ks:Ct.getTransfer(ve);ee===e.FLOAT&&(pe=e.RGBA32F),ee===e.HALF_FLOAT&&(pe=e.RGBA16F),ee===e.UNSIGNED_BYTE&&(pe=qe===Gt?e.SRGB8_ALPHA8:e.RGBA8),ee===e.UNSIGNED_SHORT_4_4_4_4&&(pe=e.RGBA4),ee===e.UNSIGNED_SHORT_5_5_5_1&&(pe=e.RGB5_A1)}return(pe===e.R16F||pe===e.R32F||pe===e.RG16F||pe===e.RG32F||pe===e.RGBA16F||pe===e.RGBA32F)&&t.get("EXT_color_buffer_float"),pe}function G(U,A,ee){return x(U,ee)===!0||U.isFramebufferTexture&&U.minFilter!==nn&&U.minFilter!==En?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function P(U){return U===nn||U===sa||U===Mr?e.NEAREST:e.LINEAR}function k(U){const A=U.target;A.removeEventListener("dispose",k),R(A),A.isVideoTexture&&u.delete(A)}function q(U){const A=U.target;A.removeEventListener("dispose",q),Q(A)}function R(U){const A=i.get(U);if(A.__webglInit===void 0)return;const ee=U.source,ve=d.get(ee);if(ve){const oe=ve[A.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(U),Object.keys(ve).length===0&&d.delete(ee)}i.remove(U)}function C(U){const A=i.get(U);e.deleteTexture(A.__webglTexture);const ee=U.source,ve=d.get(ee);delete ve[A.__cacheKey],o.memory.textures--}function Q(U){const A=U.texture,ee=i.get(U),ve=i.get(A);if(ve.__webglTexture!==void 0&&(e.deleteTexture(ve.__webglTexture),o.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(ee.__webglFramebuffer[oe]))for(let pe=0;pe<ee.__webglFramebuffer[oe].length;pe++)e.deleteFramebuffer(ee.__webglFramebuffer[oe][pe]);else e.deleteFramebuffer(ee.__webglFramebuffer[oe]);ee.__webglDepthbuffer&&e.deleteRenderbuffer(ee.__webglDepthbuffer[oe])}else{if(Array.isArray(ee.__webglFramebuffer))for(let oe=0;oe<ee.__webglFramebuffer.length;oe++)e.deleteFramebuffer(ee.__webglFramebuffer[oe]);else e.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&e.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&e.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let oe=0;oe<ee.__webglColorRenderbuffer.length;oe++)ee.__webglColorRenderbuffer[oe]&&e.deleteRenderbuffer(ee.__webglColorRenderbuffer[oe]);ee.__webglDepthRenderbuffer&&e.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let oe=0,pe=A.length;oe<pe;oe++){const qe=i.get(A[oe]);qe.__webglTexture&&(e.deleteTexture(qe.__webglTexture),o.memory.textures--),i.remove(A[oe])}i.remove(A),i.remove(U)}let le=0;function me(){le=0}function W(){const U=le;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),le+=1,U}function j(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function J(U,A){const ee=i.get(U);if(U.isVideoTexture&&_t(U),U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){const ve=U.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(ee,U,A);return}}n.bindTexture(e.TEXTURE_2D,ee.__webglTexture,e.TEXTURE0+A)}function Me(U,A){const ee=i.get(U);if(U.version>0&&ee.__version!==U.version){we(ee,U,A);return}n.bindTexture(e.TEXTURE_2D_ARRAY,ee.__webglTexture,e.TEXTURE0+A)}function he(U,A){const ee=i.get(U);if(U.version>0&&ee.__version!==U.version){we(ee,U,A);return}n.bindTexture(e.TEXTURE_3D,ee.__webglTexture,e.TEXTURE0+A)}function ce(U,A){const ee=i.get(U);if(U.version>0&&ee.__version!==U.version){Ve(ee,U,A);return}n.bindTexture(e.TEXTURE_CUBE_MAP,ee.__webglTexture,e.TEXTURE0+A)}const ge={[Mi]:e.REPEAT,[Nn]:e.CLAMP_TO_EDGE,[Ys]:e.MIRRORED_REPEAT},_e={[nn]:e.NEAREST,[sa]:e.NEAREST_MIPMAP_NEAREST,[Mr]:e.NEAREST_MIPMAP_LINEAR,[En]:e.LINEAR,[zl]:e.LINEAR_MIPMAP_NEAREST,[yi]:e.LINEAR_MIPMAP_LINEAR},Z={[Uf]:e.NEVER,[kf]:e.ALWAYS,[Nf]:e.LESS,[Ec]:e.LEQUAL,[Of]:e.EQUAL,[zf]:e.GEQUAL,[Ff]:e.GREATER,[Bf]:e.NOTEQUAL};function ue(U,A,ee){if(ee?(e.texParameteri(U,e.TEXTURE_WRAP_S,ge[A.wrapS]),e.texParameteri(U,e.TEXTURE_WRAP_T,ge[A.wrapT]),(U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY)&&e.texParameteri(U,e.TEXTURE_WRAP_R,ge[A.wrapR]),e.texParameteri(U,e.TEXTURE_MAG_FILTER,_e[A.magFilter]),e.texParameteri(U,e.TEXTURE_MIN_FILTER,_e[A.minFilter])):(e.texParameteri(U,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(U,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY)&&e.texParameteri(U,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(A.wrapS!==Nn||A.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(U,e.TEXTURE_MAG_FILTER,P(A.magFilter)),e.texParameteri(U,e.TEXTURE_MIN_FILTER,P(A.minFilter)),A.minFilter!==nn&&A.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(e.texParameteri(U,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(U,e.TEXTURE_COMPARE_FUNC,Z[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ve=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===nn||A.minFilter!==Mr&&A.minFilter!==yi||A.type===Si&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===xi&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(e.texParameterf(U,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Ae(U,A){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",k));const ve=A.source;let oe=d.get(ve);oe===void 0&&(oe={},d.set(ve,oe));const pe=j(A);if(pe!==U.__cacheKey){oe[pe]===void 0&&(oe[pe]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),oe[pe].usedTimes++;const qe=oe[U.__cacheKey];qe!==void 0&&(oe[U.__cacheKey].usedTimes--,qe.usedTimes===0&&C(A)),U.__cacheKey=pe,U.__webglTexture=oe[pe].texture}return ee}function we(U,A,ee){let ve=e.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ve=e.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ve=e.TEXTURE_3D);const oe=Ae(U,A),pe=A.source;n.bindTexture(ve,U.__webglTexture,e.TEXTURE0+ee);const qe=i.get(pe);if(pe.version!==qe.__version||oe===!0){n.activeTexture(e.TEXTURE0+ee);const Ee=Ct.getPrimaries(Ct.workingColorSpace),Ie=A.colorSpace===Hn?null:Ct.getPrimaries(A.colorSpace),ye=A.colorSpace===Hn||Ee===Ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const at=g(A)&&v(A.image)===!1;let de=M(A.image,at,!1,r.maxTextureSize);de=ot(A,de);const Wt=v(de)||a,gt=s.convert(A.format,A.colorSpace);let Ze=s.convert(A.type),Ue=N(A.internalFormat,gt,Ze,A.colorSpace,A.isVideoTexture);ue(ve,A,Wt);let Oe;const mt=A.mipmaps,Ut=a&&A.isVideoTexture!==!0&&Ue!==$l,vt=qe.__version===void 0||oe===!0,Lt=G(A,de,Wt);if(A.isDepthTexture)Ue=e.DEPTH_COMPONENT,a?A.type===Si?Ue=e.DEPTH_COMPONENT32F:A.type===Bi?Ue=e.DEPTH_COMPONENT24:A.type===er?Ue=e.DEPTH24_STENCIL8:Ue=e.DEPTH_COMPONENT16:A.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===tr&&Ue===e.DEPTH_COMPONENT&&A.type!==oa&&A.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Bi,Ze=s.convert(A.type)),A.format===yr&&Ue===e.DEPTH_COMPONENT&&(Ue=e.DEPTH_STENCIL,A.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=er,Ze=s.convert(A.type))),vt&&(Ut?n.texStorage2D(e.TEXTURE_2D,1,Ue,de.width,de.height):n.texImage2D(e.TEXTURE_2D,0,Ue,de.width,de.height,0,gt,Ze,null));else if(A.isDataTexture)if(mt.length>0&&Wt){Ut&&vt&&n.texStorage2D(e.TEXTURE_2D,Lt,Ue,mt[0].width,mt[0].height);for(let xe=0,H=mt.length;xe<H;xe++)Oe=mt[xe],Ut?n.texSubImage2D(e.TEXTURE_2D,xe,0,0,Oe.width,Oe.height,gt,Ze,Oe.data):n.texImage2D(e.TEXTURE_2D,xe,Ue,Oe.width,Oe.height,0,gt,Ze,Oe.data);A.generateMipmaps=!1}else Ut?(vt&&n.texStorage2D(e.TEXTURE_2D,Lt,Ue,de.width,de.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,de.width,de.height,gt,Ze,de.data)):n.texImage2D(e.TEXTURE_2D,0,Ue,de.width,de.height,0,gt,Ze,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ut&&vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Lt,Ue,mt[0].width,mt[0].height,de.depth);for(let xe=0,H=mt.length;xe<H;xe++)Oe=mt[xe],A.format!==Gn?gt!==null?Ut?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,xe,0,0,0,Oe.width,Oe.height,de.depth,gt,Oe.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,xe,Ue,Oe.width,Oe.height,de.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?n.texSubImage3D(e.TEXTURE_2D_ARRAY,xe,0,0,0,Oe.width,Oe.height,de.depth,gt,Ze,Oe.data):n.texImage3D(e.TEXTURE_2D_ARRAY,xe,Ue,Oe.width,Oe.height,de.depth,0,gt,Ze,Oe.data)}else{Ut&&vt&&n.texStorage2D(e.TEXTURE_2D,Lt,Ue,mt[0].width,mt[0].height);for(let xe=0,H=mt.length;xe<H;xe++)Oe=mt[xe],A.format!==Gn?gt!==null?Ut?n.compressedTexSubImage2D(e.TEXTURE_2D,xe,0,0,Oe.width,Oe.height,gt,Oe.data):n.compressedTexImage2D(e.TEXTURE_2D,xe,Ue,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?n.texSubImage2D(e.TEXTURE_2D,xe,0,0,Oe.width,Oe.height,gt,Ze,Oe.data):n.texImage2D(e.TEXTURE_2D,xe,Ue,Oe.width,Oe.height,0,gt,Ze,Oe.data)}else if(A.isDataArrayTexture)Ut?(vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Lt,Ue,de.width,de.height,de.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,gt,Ze,de.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ue,de.width,de.height,de.depth,0,gt,Ze,de.data);else if(A.isData3DTexture)Ut?(vt&&n.texStorage3D(e.TEXTURE_3D,Lt,Ue,de.width,de.height,de.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,gt,Ze,de.data)):n.texImage3D(e.TEXTURE_3D,0,Ue,de.width,de.height,de.depth,0,gt,Ze,de.data);else if(A.isFramebufferTexture){if(vt)if(Ut)n.texStorage2D(e.TEXTURE_2D,Lt,Ue,de.width,de.height);else{let xe=de.width,H=de.height;for(let Te=0;Te<Lt;Te++)n.texImage2D(e.TEXTURE_2D,Te,Ue,xe,H,0,gt,Ze,null),xe>>=1,H>>=1}}else if(mt.length>0&&Wt){Ut&&vt&&n.texStorage2D(e.TEXTURE_2D,Lt,Ue,mt[0].width,mt[0].height);for(let xe=0,H=mt.length;xe<H;xe++)Oe=mt[xe],Ut?n.texSubImage2D(e.TEXTURE_2D,xe,0,0,gt,Ze,Oe):n.texImage2D(e.TEXTURE_2D,xe,Ue,gt,Ze,Oe);A.generateMipmaps=!1}else Ut?(vt&&n.texStorage2D(e.TEXTURE_2D,Lt,Ue,de.width,de.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,gt,Ze,de)):n.texImage2D(e.TEXTURE_2D,0,Ue,gt,Ze,de);x(A,Wt)&&T(ve),qe.__version=pe.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Ve(U,A,ee){if(A.image.length!==6)return;const ve=Ae(U,A),oe=A.source;n.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+ee);const pe=i.get(oe);if(oe.version!==pe.__version||ve===!0){n.activeTexture(e.TEXTURE0+ee);const qe=Ct.getPrimaries(Ct.workingColorSpace),Ee=A.colorSpace===Hn?null:Ct.getPrimaries(A.colorSpace),Ie=A.colorSpace===Hn||qe===Ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ye=A.isCompressedTexture||A.image[0].isCompressedTexture,at=A.image[0]&&A.image[0].isDataTexture,de=[];for(let xe=0;xe<6;xe++)!ye&&!at?de[xe]=M(A.image[xe],!1,!0,r.maxCubemapSize):de[xe]=at?A.image[xe].image:A.image[xe],de[xe]=ot(A,de[xe]);const Wt=de[0],gt=v(Wt)||a,Ze=s.convert(A.format,A.colorSpace),Ue=s.convert(A.type),Oe=N(A.internalFormat,Ze,Ue,A.colorSpace),mt=a&&A.isVideoTexture!==!0,Ut=pe.__version===void 0||ve===!0;let vt=G(A,Wt,gt);ue(e.TEXTURE_CUBE_MAP,A,gt);let Lt;if(ye){mt&&Ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,vt,Oe,Wt.width,Wt.height);for(let xe=0;xe<6;xe++){Lt=de[xe].mipmaps;for(let H=0;H<Lt.length;H++){const Te=Lt[H];A.format!==Gn?Ze!==null?mt?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,H,0,0,Te.width,Te.height,Ze,Te.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,H,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,H,0,0,Te.width,Te.height,Ze,Ue,Te.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,H,Oe,Te.width,Te.height,0,Ze,Ue,Te.data)}}}else{Lt=A.mipmaps,mt&&Ut&&(Lt.length>0&&vt++,n.texStorage2D(e.TEXTURE_CUBE_MAP,vt,Oe,de[0].width,de[0].height));for(let xe=0;xe<6;xe++)if(at){mt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,de[xe].width,de[xe].height,Ze,Ue,de[xe].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Oe,de[xe].width,de[xe].height,0,Ze,Ue,de[xe].data);for(let H=0;H<Lt.length;H++){const Re=Lt[H].image[xe].image;mt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,H+1,0,0,Re.width,Re.height,Ze,Ue,Re.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,H+1,Oe,Re.width,Re.height,0,Ze,Ue,Re.data)}}else{mt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ze,Ue,de[xe]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Oe,Ze,Ue,de[xe]);for(let H=0;H<Lt.length;H++){const Te=Lt[H];mt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,H+1,0,0,Ze,Ue,Te.image[xe]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,H+1,Oe,Ze,Ue,Te.image[xe])}}}x(A,gt)&&T(e.TEXTURE_CUBE_MAP),pe.__version=oe.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function et(U,A,ee,ve,oe,pe){const qe=s.convert(ee.format,ee.colorSpace),Ee=s.convert(ee.type),Ie=N(ee.internalFormat,qe,Ee,ee.colorSpace);if(!i.get(A).__hasExternalTextures){const at=Math.max(1,A.width>>pe),de=Math.max(1,A.height>>pe);oe===e.TEXTURE_3D||oe===e.TEXTURE_2D_ARRAY?n.texImage3D(oe,pe,Ie,at,de,A.depth,0,qe,Ee,null):n.texImage2D(oe,pe,Ie,at,de,0,qe,Ee,null)}n.bindFramebuffer(e.FRAMEBUFFER,U),Ye(A)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,oe,i.get(ee).__webglTexture,0,Je(A)):(oe===e.TEXTURE_2D||oe>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ve,oe,i.get(ee).__webglTexture,pe),n.bindFramebuffer(e.FRAMEBUFFER,null)}function dt(U,A,ee){if(e.bindRenderbuffer(e.RENDERBUFFER,U),A.depthBuffer&&!A.stencilBuffer){let ve=a===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(ee||Ye(A)){const oe=A.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Si?ve=e.DEPTH_COMPONENT32F:oe.type===Bi&&(ve=e.DEPTH_COMPONENT24));const pe=Je(A);Ye(A)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pe,ve,A.width,A.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,pe,ve,A.width,A.height)}else e.renderbufferStorage(e.RENDERBUFFER,ve,A.width,A.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,U)}else if(A.depthBuffer&&A.stencilBuffer){const ve=Je(A);ee&&Ye(A)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,e.DEPTH24_STENCIL8,A.width,A.height):Ye(A)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,e.DEPTH24_STENCIL8,A.width,A.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,U)}else{const ve=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let oe=0;oe<ve.length;oe++){const pe=ve[oe],qe=s.convert(pe.format,pe.colorSpace),Ee=s.convert(pe.type),Ie=N(pe.internalFormat,qe,Ee,pe.colorSpace),ye=Je(A);ee&&Ye(A)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,Ie,A.width,A.height):Ye(A)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye,Ie,A.width,A.height):e.renderbufferStorage(e.RENDERBUFFER,Ie,A.width,A.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function tt(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);const ve=i.get(A.depthTexture).__webglTexture,oe=Je(A);if(A.depthTexture.format===tr)Ye(A)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ve,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ve,0);else if(A.depthTexture.format===yr)Ye(A)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ve,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function xt(U){const A=i.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");tt(A.__webglFramebuffer,U)}else if(ee){A.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)n.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer[ve]),A.__webglDepthbuffer[ve]=e.createRenderbuffer(),dt(A.__webglDepthbuffer[ve],U,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=e.createRenderbuffer(),dt(A.__webglDepthbuffer,U,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function K(U,A,ee){const ve=i.get(U);A!==void 0&&et(ve.__webglFramebuffer,U,U.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),ee!==void 0&&xt(U)}function Qt(U){const A=U.texture,ee=i.get(U),ve=i.get(A);U.addEventListener("dispose",q),U.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture()),ve.__version=A.version,o.memory.textures++);const oe=U.isWebGLCubeRenderTarget===!0,pe=U.isWebGLMultipleRenderTargets===!0,qe=v(U)||a;if(oe){ee.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(a&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Ee]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ee.__webglFramebuffer[Ee][Ie]=e.createFramebuffer()}else ee.__webglFramebuffer[Ee]=e.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)ee.__webglFramebuffer[Ee]=e.createFramebuffer()}else ee.__webglFramebuffer=e.createFramebuffer();if(pe)if(r.drawBuffers){const Ee=U.texture;for(let Ie=0,ye=Ee.length;Ie<ye;Ie++){const at=i.get(Ee[Ie]);at.__webglTexture===void 0&&(at.__webglTexture=e.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&U.samples>0&&Ye(U)===!1){const Ee=pe?A:[A];ee.__webglMultisampledFramebuffer=e.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ee.length;Ie++){const ye=Ee[Ie];ee.__webglColorRenderbuffer[Ie]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie]);const at=s.convert(ye.format,ye.colorSpace),de=s.convert(ye.type),Wt=N(ye.internalFormat,at,de,ye.colorSpace,U.isXRRenderTarget===!0),gt=Je(U);e.renderbufferStorageMultisample(e.RENDERBUFFER,gt,Wt,U.width,U.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ie,e.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie])}e.bindRenderbuffer(e.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=e.createRenderbuffer(),dt(ee.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(oe){n.bindTexture(e.TEXTURE_CUBE_MAP,ve.__webglTexture),ue(e.TEXTURE_CUBE_MAP,A,qe);for(let Ee=0;Ee<6;Ee++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)et(ee.__webglFramebuffer[Ee][Ie],U,A,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ie);else et(ee.__webglFramebuffer[Ee],U,A,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);x(A,qe)&&T(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){const Ee=U.texture;for(let Ie=0,ye=Ee.length;Ie<ye;Ie++){const at=Ee[Ie],de=i.get(at);n.bindTexture(e.TEXTURE_2D,de.__webglTexture),ue(e.TEXTURE_2D,at,qe),et(ee.__webglFramebuffer,U,at,e.COLOR_ATTACHMENT0+Ie,e.TEXTURE_2D,0),x(at,qe)&&T(e.TEXTURE_2D)}n.unbindTexture()}else{let Ee=e.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(a?Ee=U.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ee,ve.__webglTexture),ue(Ee,A,qe),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)et(ee.__webglFramebuffer[Ie],U,A,e.COLOR_ATTACHMENT0,Ee,Ie);else et(ee.__webglFramebuffer,U,A,e.COLOR_ATTACHMENT0,Ee,0);x(A,qe)&&T(Ee),n.unbindTexture()}U.depthBuffer&&xt(U)}function ht(U){const A=v(U)||a,ee=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let ve=0,oe=ee.length;ve<oe;ve++){const pe=ee[ve];if(x(pe,A)){const qe=U.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Ee=i.get(pe).__webglTexture;n.bindTexture(qe,Ee),T(qe),n.unbindTexture()}}}function Ge(U){if(a&&U.samples>0&&Ye(U)===!1){const A=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],ee=U.width,ve=U.height;let oe=e.COLOR_BUFFER_BIT;const pe=[],qe=U.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ee=i.get(U),Ie=U.isWebGLMultipleRenderTargets===!0;if(Ie)for(let ye=0;ye<A.length;ye++)n.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ye=0;ye<A.length;ye++){pe.push(e.COLOR_ATTACHMENT0+ye),U.depthBuffer&&pe.push(qe);const at=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(at===!1&&(U.depthBuffer&&(oe|=e.DEPTH_BUFFER_BIT),U.stencilBuffer&&(oe|=e.STENCIL_BUFFER_BIT)),Ie&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]),at===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[qe]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[qe])),Ie){const de=i.get(A[ye]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,de,0)}e.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,oe,e.NEAREST),h&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pe)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Ie)for(let ye=0;ye<A.length;ye++){n.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);const at=i.get(A[ye]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,at,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function Je(U){return Math.min(r.maxSamples,U.samples)}function Ye(U){const A=i.get(U);return a&&U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function _t(U){const A=o.render.frame;u.get(U)!==A&&(u.set(U,A),U.update())}function ot(U,A){const ee=U.colorSpace,ve=U.format,oe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===ga||ee!==fn&&ee!==Hn&&(Ct.getTransfer(ee)===Gt?a===!1?t.has("EXT_sRGB")===!0&&ve===Gn?(U.format=ga,U.minFilter=En,U.generateMipmaps=!1):A=Pc.sRGBToLinear(A):(ve!==Gn||oe!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}this.allocateTextureUnit=W,this.resetTextureUnits=me,this.setTexture2D=J,this.setTexture2DArray=Me,this.setTexture3D=he,this.setTextureCube=ce,this.rebindTextures=K,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ye}function AM(e,t,n){const i=n.isWebGL2;function r(s,o=Hn){let a;const c=Ct.getTransfer(o);if(s===Fi)return e.UNSIGNED_BYTE;if(s===Gl)return e.UNSIGNED_SHORT_4_4_4_4;if(s===Hl)return e.UNSIGNED_SHORT_5_5_5_1;if(s===Sf)return e.BYTE;if(s===xf)return e.SHORT;if(s===oa)return e.UNSIGNED_SHORT;if(s===kl)return e.INT;if(s===Bi)return e.UNSIGNED_INT;if(s===Si)return e.FLOAT;if(s===xi)return i?e.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===bf)return e.ALPHA;if(s===Gn)return e.RGBA;if(s===Tf)return e.LUMINANCE;if(s===Ef)return e.LUMINANCE_ALPHA;if(s===tr)return e.DEPTH_COMPONENT;if(s===yr)return e.DEPTH_STENCIL;if(s===ga)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Af)return e.RED;if(s===Vl)return e.RED_INTEGER;if(s===wf)return e.RG;if(s===Wl)return e.RG_INTEGER;if(s===Xl)return e.RGBA_INTEGER;if(s===aa||s===la||s===ca||s===ha)if(c===Gt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===la)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ql||s===Yl||s===jl||s===Kl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$l)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jl||s===Zl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jl)return c===Gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zl)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===oc||s===ac||s===lc||s===cc||s===hc||s===uc||s===fc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ql)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ec)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ic)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ac)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===uc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fc)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ua||s===dc||s===pc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ua)return c===Gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===dc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rf||s===mc||s===gc||s===_c)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===ua)return a.COMPRESSED_RED_RGTC1_EXT;if(s===mc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_c)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===er?i?e.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):e[s]!==void 0?e[s]:null}return{convert:r}}function wM(e,t){function n(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function i(v,g){g.color.getRGB(v.fogColor.value,Mu(e)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function r(v,g,x,T,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(v,g):g.isMeshToonMaterial?(s(v,g),f(v,g)):g.isMeshPhongMaterial?(s(v,g),u(v,g)):g.isMeshStandardMaterial?(s(v,g),d(v,g),g.isMeshPhysicalMaterial&&_(v,g,N)):g.isMeshMatcapMaterial?(s(v,g),S(v,g)):g.isMeshDepthMaterial?s(v,g):g.isMeshDistanceMaterial?(s(v,g),M(v,g)):g.isMeshNormalMaterial?s(v,g):g.isLineBasicMaterial?(o(v,g),g.isLineDashedMaterial&&a(v,g)):g.isPointsMaterial?c(v,g,x,T):g.isSpriteMaterial?h(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,n(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Pn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,n(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Pn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,n(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,n(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const x=t.get(g).envMap;if(x&&(v.envMap.value=x,v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap){v.lightMap.value=g.lightMap;const T=e._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=g.lightMapIntensity*T,n(g.lightMap,v.lightMapTransform)}g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,v.aoMapTransform))}function o(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform))}function a(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function c(v,g,x,T){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*x,v.scale.value=T*.5,g.map&&(v.map.value=g.map,n(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function h(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function u(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function f(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function d(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,v.roughnessMapTransform)),t.get(g).envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function _(v,g,x){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&v.clearcoatNormalScale.value.negate())),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,v.specularIntensityMapTransform))}function S(v,g){g.matcap&&(v.matcap.value=g.matcap)}function M(v,g){const x=t.get(g).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RM(e,t,n,i){let r={},s={},o=[];const a=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,T){const N=T.program;i.uniformBlockBinding(x,N)}function h(x,T){let N=r[x.id];N===void 0&&(S(x),N=u(x),r[x.id]=N,x.addEventListener("dispose",v));const G=T.program;i.updateUBOMapping(x,G);const P=t.render.frame;s[x.id]!==P&&(d(x),s[x.id]=P)}function u(x){const T=f();x.__bindingPointIndex=T;const N=e.createBuffer(),G=x.__size,P=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,N),e.bufferData(e.UNIFORM_BUFFER,G,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,N),N}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const T=r[x.id],N=x.uniforms,G=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let P=0,k=N.length;P<k;P++){const q=Array.isArray(N[P])?N[P]:[N[P]];for(let R=0,C=q.length;R<C;R++){const Q=q[R];if(_(Q,P,R,G)===!0){const le=Q.__offset,me=Array.isArray(Q.value)?Q.value:[Q.value];let W=0;for(let j=0;j<me.length;j++){const J=me[j],Me=M(J);typeof J=="number"||typeof J=="boolean"?(Q.__data[0]=J,e.bufferSubData(e.UNIFORM_BUFFER,le+W,Q.__data)):J.isMatrix3?(Q.__data[0]=J.elements[0],Q.__data[1]=J.elements[1],Q.__data[2]=J.elements[2],Q.__data[3]=0,Q.__data[4]=J.elements[3],Q.__data[5]=J.elements[4],Q.__data[6]=J.elements[5],Q.__data[7]=0,Q.__data[8]=J.elements[6],Q.__data[9]=J.elements[7],Q.__data[10]=J.elements[8],Q.__data[11]=0):(J.toArray(Q.__data,W),W+=Me.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,le,Q.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(x,T,N,G){const P=x.value,k=T+"_"+N;if(G[k]===void 0)return typeof P=="number"||typeof P=="boolean"?G[k]=P:G[k]=P.clone(),!0;{const q=G[k];if(typeof P=="number"||typeof P=="boolean"){if(q!==P)return G[k]=P,!0}else if(q.equals(P)===!1)return q.copy(P),!0}return!1}function S(x){const T=x.uniforms;let N=0;const G=16;for(let k=0,q=T.length;k<q;k++){const R=Array.isArray(T[k])?T[k]:[T[k]];for(let C=0,Q=R.length;C<Q;C++){const le=R[C],me=Array.isArray(le.value)?le.value:[le.value];for(let W=0,j=me.length;W<j;W++){const J=me[W],Me=M(J),he=N%G;he!==0&&G-he<Me.boundary&&(N+=G-he),le.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=N,N+=Me.storage}}}const P=N%G;return P>0&&(N+=G-P),x.__size=N,x.__cache={},this}function M(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),T}function v(x){const T=x.target;T.removeEventListener("dispose",v);const N=o.indexOf(T.__bindingPointIndex);o.splice(N,1),e.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function g(){for(const x in r)e.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:h,dispose:g}}function Uu(e,t,n,i,r,s,o){const a=Ha.distanceSqToPoint(e);if(a<n){const c=new F;Ha.closestPointToPoint(e,c),c.applyMatrix4(i);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}function Cl(){let e=0,t=0,n=0,i=0;function r(s,o,a,c){e=s,t=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,h){r(o,a,h*(a-s),h*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,h,u,f){let d=(o-s)/h-(a-s)/(h+u)+(a-o)/u,_=(a-o)/u-(c-o)/(u+f)+(c-a)/f;d*=u,_*=u,r(o,a,d,_)},calc:function(s){const o=s*s,a=o*s;return e+t*s+n*o+i*a}}}function Nu(e,t,n,i,r){const s=(i-t)*.5,o=(r-n)*.5,a=e*e,c=e*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*e+n}function CM(e,t){const n=1-e;return n*n*t}function LM(e,t){return 2*(1-e)*e*t}function PM(e,t){return e*e*t}function Vs(e,t,n,i){return CM(e,t)+LM(e,n)+PM(e,i)}function IM(e,t){const n=1-e;return n*n*n*t}function DM(e,t){const n=1-e;return 3*n*n*e*t}function UM(e,t){return 3*(1-e)*e*e*t}function NM(e,t){return e*e*e*t}function Ws(e,t,n,i,r){return IM(e,t)+DM(e,n)+UM(e,i)+NM(e,r)}function Qo(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function OM(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function FM(e){function t(r,s){return e[r]-e[s]}const n=e.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i}function Ou(e,t,n){const i=e.length,r=new e.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*t;for(let c=0;c!==t;++c)r[o++]=e[a+c]}return r}function Fu(e,t,n,i){let r=1,s=e[0];for(;s!==void 0&&s[i]===void 0;)s=e[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),n.push.apply(n,o)),s=e[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(n,n.length)),s=e[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),n.push(o)),s=e[r++];while(s!==void 0)}function BM(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wr;case"vector":case"vector2":case"vector3":case"vector4":return qr;case"color":return Fh;case"quaternion":return ur;case"bool":case"boolean":return Vr;case"string":return Xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function zM(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=BM(e.type);if(e.times===void 0){const n=[],i=[];Fu(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}function Bu(){return(typeof performance>"u"?Date:performance).now()}var ea,zu,Ll,ku,Pl,Gu,gi,_i,Pn,Bt,vi,gr,un,Il,Dl,Hu,Qi,Vu,Wu,Ul,Nl,Xu,qu,Yu,ju,ta,na,Ku,$u,Ju,Zu,Qu,ef,tf,nf,rf,sf,of,af,Xs,lf,cf,hf,uf,Ol,ff,df,Oi,pf,mf,gf,_f,vf,Mf,Fl,yf,Bl,_r,vr,ia,ra,qs,Mi,Nn,Ys,nn,sa,Mr,En,zl,yi,Fi,Sf,xf,oa,kl,Bi,Si,xi,Gl,Hl,er,bf,Gn,Tf,Ef,tr,yr,Af,Vl,wf,Wl,Xl,aa,la,ca,ha,ql,Yl,jl,Kl,$l,Jl,Zl,Ql,ec,tc,nc,ic,rc,sc,oc,ac,lc,cc,hc,uc,fc,ua,dc,pc,Rf,mc,gc,_c,ms,Sr,fa,vc,Mc,yc,Cf,Lf,Sc,da,xc,nr,Pf,If,bc,Df,Hn,Ot,fn,pa,js,Ks,Gt,$s,Js,xr,Tc,Uf,Nf,Of,Ec,Ff,Bf,zf,kf,ma,Ac,ga,bi,Zs,br,Sn,wc,Tr,Er,Gf,De,Mt,_a,Rc,Cc,Lc,Qs,Hf,Ct,gs,Pc,Vf,Ic,Wf,In,Ht,Xf,Kn,Dc,qf,Ti,F,va,Uc,rn,Ei,$n,eo,Ar,wr,Rr,zi,ki,ir,_s,to,no,rr,Yf,vs,Ma,ai,Ai,ya,io,Gi,Sa,ro,xa,so,ut,Cr,Jn,jf,Kf,Hi,oo,On,Nc,Oc,Fc,Bc,$f,zc,Lr,wi,ao,Ms,Jf,Zf,kc,Gc,Hc,Qf,ed,an,Zn,Ri,ba,Ci,Pr,Ir,Vc,Ta,Ea,Aa,lo,ys,Wc,Vi,co,$e,xn,td,li,ze,sn,ho,Jt,Xc,qc,Dt,nd,Vn,wa,Dr,Fn,Ss,dn,Zt,Yc,sr,uo,jc,Ur,Nr,Or,Ra,fo,po,mo,go,Kc,$c,Jc,_o,vo,re,Be,Mo,id,rd,Bn,Zc,An,Fr,Br,sd,Qc,od,Ca,ad,ld,or,ar,yo,La,yt,cd,hd,ud,fd,dd,pd,md,gd,_d,vd,Md,yd,Sd,xd,bd,Td,Ed,Ad,wd,Rd,Cd,Ld,Pd,Id,Dd,Ud,Nd,Od,Fd,Bd,zd,kd,Gd,Hd,Vd,Wd,Xd,qd,Yd,jd,Kd,$d,Jd,Zd,Qd,ep,tp,np,ip,rp,sp,op,ap,lp,cp,hp,up,fp,dp,pp,mp,gp,_p,vp,Mp,yp,Sp,xp,bp,Tp,Ep,Ap,wp,Rp,Cp,Lp,Pp,Ip,Dp,Up,Np,Op,Fp,Bp,zp,kp,Gp,Hp,Vp,Wp,Xp,qp,Yp,jp,Kp,$p,Jp,Zp,Qp,em,tm,nm,im,rm,sm,om,am,lm,cm,hm,um,fm,dm,pm,mm,gm,_m,vm,Mm,ym,Sm,xm,bm,Tm,Em,Am,wm,Rm,Cm,Lm,Pm,Im,Dm,Um,Nm,Om,Fm,Bm,zm,km,Gm,ft,be,ci,So,xo,zr,eh,lr,Pa,th,Ia,Da,Ua,cr,kr,nh,ih,rh,sh,oh,ah,lh,ch,hh,uh,fh,dh,ph,Hm,Vm,Wm,Na,bo,Xm,qm,Ym,jm,Km,$m,Jm,Zm,Qm,e0,t0,n0,i0,r0,jt,s0,Oa,o0,mh,a0,l0,c0,h0,wn,u0,gh,_h,vh,f0,Mh,To,Fa,yh,Ba,d0,Sh,p0,xh,m0,g0,za,Gr,bh,Eo,Th,_0,xs,bs,v0,Hr,Eh,Ah,wh,ka,Ao,wo,Rh,Ch,Qn,M0,Ga,Lh,Ha,Ro,Co,Ph,Li,Pi,Ih,y0,Lo,Va,Wa,Xa,Dh,S0,x0,b0,T0,E0,Uh,A0,w0,Dn,R0,C0,Po,Io,qa,Do,Wi,Nh,hr,Oh,L0,Ya,Ii,Ts,P0,I0,D0,hi,Vr,Fh,Wr,U0,ur,Xr,qr,N0,Xi,O0,F0,Yr,Di,B0,Bh,z0,zh,ja,Ka,kh,Gh,$a,k0,G0,Hh,Es,Ja,H0,V0,W0,X0,As,q0,Y0,Za,j0,Qa,K0,$0,J0,Z0,Q0,eg,tg,ng,Kt,kM,qi=si({"node_modules/three/build/three.module.js"(){ea="160",zu=0,Ll=1,ku=2,Pl=1,Gu=2,gi=3,_i=0,Pn=1,Bt=2,vi=0,gr=1,un=2,Il=3,Dl=4,Hu=5,Qi=100,Vu=101,Wu=102,Ul=103,Nl=104,Xu=200,qu=201,Yu=202,ju=203,ta=204,na=205,Ku=206,$u=207,Ju=208,Zu=209,Qu=210,ef=211,tf=212,nf=213,rf=214,sf=0,of=1,af=2,Xs=3,lf=4,cf=5,hf=6,uf=7,Ol=0,ff=1,df=2,Oi=0,pf=1,mf=2,gf=3,_f=4,vf=5,Mf=6,Fl="attached",yf="detached",Bl=300,_r=301,vr=302,ia=303,ra=304,qs=306,Mi=1e3,Nn=1001,Ys=1002,nn=1003,sa=1004,Mr=1005,En=1006,zl=1007,yi=1008,Fi=1009,Sf=1010,xf=1011,oa=1012,kl=1013,Bi=1014,Si=1015,xi=1016,Gl=1017,Hl=1018,er=1020,bf=1021,Gn=1023,Tf=1024,Ef=1025,tr=1026,yr=1027,Af=1028,Vl=1029,wf=1030,Wl=1031,Xl=1033,aa=33776,la=33777,ca=33778,ha=33779,ql=35840,Yl=35841,jl=35842,Kl=35843,$l=36196,Jl=37492,Zl=37496,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,rc=37813,sc=37814,oc=37815,ac=37816,lc=37817,cc=37818,hc=37819,uc=37820,fc=37821,ua=36492,dc=36494,pc=36495,Rf=36283,mc=36284,gc=36285,_c=36286,ms=2300,Sr=2301,fa=2302,vc=2400,Mc=2401,yc=2402,Cf=2500,Lf=0,Sc=1,da=2,xc=3e3,nr=3001,Pf=3200,If=3201,bc=0,Df=1,Hn="",Ot="srgb",fn="srgb-linear",pa="display-p3",js="display-p3-linear",Ks="linear",Gt="srgb",$s="rec709",Js="p3",xr=7680,Tc=519,Uf=512,Nf=513,Of=514,Ec=515,Ff=516,Bf=517,zf=518,kf=519,ma=35044,Ac="300 es",ga=1035,bi=2e3,Zs=2001,br=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=1234567,Tr=Math.PI/180,Er=180/Math.PI,Gf={DEG2RAD:Tr,RAD2DEG:Er,generateUUID:oi,clamp:gn,euclideanModulo:Sl,mapLinear:L_,inverseLerp:P_,lerp:ks,damp:I_,pingpong:D_,smoothstep:U_,smootherstep:N_,randInt:O_,randFloat:F_,randFloatSpread:B_,seededRandom:z_,degToRad:k_,radToDeg:G_,isPowerOfTwo:xl,ceilPowerOfTwo:H_,floorPowerOfTwo:Ko,setQuaternionFromProperEuler:V_,normalize:Nt,denormalize:mi},De=class u_{constructor(t=0,n=0){u_.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class f_{constructor(t,n,i,r,s,o,a,c,h){f_.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,c,h)}set(t,n,i,r,s,o,a,c,h){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],h=i[1],u=i[4],f=i[7],d=i[2],_=i[5],S=i[8],M=r[0],v=r[3],g=r[6],x=r[1],T=r[4],N=r[7],G=r[2],P=r[5],k=r[8];return s[0]=o*M+a*x+c*G,s[3]=o*v+a*T+c*P,s[6]=o*g+a*N+c*k,s[1]=h*M+u*x+f*G,s[4]=h*v+u*T+f*P,s[7]=h*g+u*N+f*k,s[2]=d*M+_*x+S*G,s[5]=d*v+_*T+S*P,s[8]=d*g+_*N+S*k,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8];return n*o*u-n*a*h-i*s*u+i*a*c+r*s*h-r*o*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],f=u*o-a*h,d=a*c-u*s,_=h*s-o*c,S=n*f+i*d+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return t[0]=f*M,t[1]=(r*h-u*i)*M,t[2]=(a*i-r*o)*M,t[3]=d*M,t[4]=(u*n-r*c)*M,t[5]=(r*s-a*n)*M,t[6]=_*M,t[7]=(i*c-h*n)*M,t[8]=(o*n-i*s)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const c=Math.cos(s),h=Math.sin(s);return this.set(i*c,i*h,-i*(c*o+h*a)+o+t,-r*h,r*c,-r*(-h*o+c*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(_a.makeScale(t,n)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,n){return this.premultiply(_a.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_a=new Mt,Rc={},Cc=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lc=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[fn]:{transfer:Ks,primaries:$s,toReference:e=>e,fromReference:e=>e},[Ot]:{transfer:Gt,primaries:$s,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[js]:{transfer:Ks,primaries:Js,toReference:e=>e.applyMatrix3(Lc),fromReference:e=>e.applyMatrix3(Cc)},[pa]:{transfer:Gt,primaries:Js,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Lc),fromReference:e=>e.applyMatrix3(Cc).convertLinearToSRGB()}},Hf=new Set([fn,js]),Ct={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Hf.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Qs[t].toReference,r=Qs[n].fromReference;return r(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Qs[e].primaries},getTransfer:function(e){return e===Hn?Ks:Qs[e].transfer}},Pc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=Gs("canvas")),gs.width=e.width,gs.height=e.height;const n=gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=us(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(us(t[n]/255)*255):t[n]=us(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vf=0,Ic=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Tl(i[s].image)):r.push(Tl(i[s]))}else r=Tl(i);n.url=r}return t||(e.images[this.uuid]=n),n}},Wf=0,In=class Ml extends br{constructor(t=Ml.DEFAULT_IMAGE,n=Ml.DEFAULT_MAPPING,i=Nn,r=Nn,s=En,o=yi,a=Gn,c=Fi,h=Ml.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=oi(),this.name="",this.source=new Ic(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===nr?Ot:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Ys:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Ys:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?nr:xc}set encoding(t){Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===nr?Ot:Hn}},In.DEFAULT_IMAGE=null,In.DEFAULT_MAPPING=Bl,In.DEFAULT_ANISOTROPY=1,Ht=class d_{constructor(t=0,n=0,i=0,r=1){d_.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,h=c[0],u=c[4],f=c[8],d=c[1],_=c[5],S=c[9],M=c[2],v=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(S-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(S+v)<.1&&Math.abs(h+_+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(h+1)/2,N=(_+1)/2,G=(g+1)/2,P=(u+d)/4,k=(f+M)/4,q=(S+v)/4;return T>N&&T>G?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=k/i):N>G?N<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(N),i=P/r,s=q/r):G<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),i=k/s,r=q/s),this.set(i,r,s,n),this}let x=Math.sqrt((v-S)*(v-S)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(v-S)/x,this.y=(f-M)/x,this.z=(d-u)/x,this.w=Math.acos((h+_+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xf=class extends br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Hs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===nr?Ot:Hn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new In(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Xf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dc=class extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qf=class extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ti=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let a=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[s+0],d=r[s+1],_=r[s+2],S=r[s+3];if(o===0){e[t+0]=a,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=S;return}if(u!==S||a!==f||c!==d||h!==_){let M=1-o;const v=a*f+c*d+h*_+u*S,g=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){const N=Math.sqrt(x),G=Math.atan2(N,v*g);M=Math.sin(M*G)/N,o=Math.sin(o*G)/N}const T=o*g;if(a=a*M+f*T,c=c*M+d*T,h=h*M+_*T,u=u*M+S*T,M===1-o){const N=1/Math.sqrt(a*a+c*c+h*h+u*u);a*=N,c*=N,h*=N,u*=N}}e[t]=a,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],a=n[i+1],c=n[i+2],h=n[i+3],u=r[s],f=r[s+1],d=r[s+2],_=r[s+3];return e[t]=o*_+h*u+a*d-c*f,e[t+1]=a*_+h*f+c*u-o*d,e[t+2]=c*_+h*d+o*f-a*u,e[t+3]=h*_-o*u-a*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,a=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=a(n/2),d=a(i/2),_=a(r/2);switch(s){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-a)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-a)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(a+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(a+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,a=t._y,c=t._z,h=t._w;return this._x=n*h+s*o+i*c-r*a,this._y=i*h+s*a+r*o-n*c,this._z=r*h+s*c+n*a-i*o,this._w=s*h-n*o-i*a-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const a=1-o*o;if(a<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(a),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=s*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class p_{constructor(t=0,n=0,i=0){p_.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Uc.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+c*h+o*f-a*u,this.y=i+c*u+a*h-s*f,this.z=r+c*f+s*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new F,Uc=new Ti,rn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,$n):$n.fromBufferAttribute(r,s),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),to.subVectors(this.max,_s),Ar.subVectors(e.a,_s),wr.subVectors(e.b,_s),Rr.subVectors(e.c,_s),zi.subVectors(wr,Ar),ki.subVectors(Rr,wr),ir.subVectors(Ar,Rr);let t=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-ir.z,ir.y,zi.z,0,-zi.x,ki.z,0,-ki.x,ir.z,0,-ir.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-ir.y,ir.x,0];return!El(t,Ar,wr,Rr,to)||(t=[1,0,0,0,1,0,0,0,1],!El(t,Ar,wr,Rr,to))?!1:(no.crossVectors(zi,ki),t=[no.x,no.y,no.z],El(t,Ar,wr,Rr,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ei=[new F,new F,new F,new F,new F,new F,new F,new F],$n=new F,eo=new rn,Ar=new F,wr=new F,Rr=new F,zi=new F,ki=new F,ir=new F,_s=new F,to=new F,no=new F,rr=new F,Yf=new rn,vs=new F,Ma=new F,ai=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Ma)),this.expandByPoint(vs.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new F,ya=new F,io=new F,Gi=new F,Sa=new F,ro=new F,xa=new F,so=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ya.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(ya);const r=e.distanceTo(t)*.5,s=-this.direction.dot(io),o=Gi.dot(this.direction),a=-Gi.dot(io),c=Gi.lengthSq(),h=Math.abs(1-s*s);let u,f,d,_;if(h>0)if(u=s*a-o,f=s*o-a,_=r*h,u>=0)if(f>=-_)if(f<=_){const S=1/h;u*=S,f*=S,d=u*(u+s*f+2*o)+f*(s*u+f+2*a)+c}else f=r,u=Math.max(0,-(s*f+o)),d=-u*u+f*(f+2*a)+c;else f=-r,u=Math.max(0,-(s*f+o)),d=-u*u+f*(f+2*a)+c;else f<=-_?(u=Math.max(0,-(-s*r+o)),f=u>0?-r:Math.min(Math.max(-r,-a),r),d=-u*u+f*(f+2*a)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-a),r),d=f*(f+2*a)+c):(u=Math.max(0,-(s*r+o)),f=u>0?r:Math.min(Math.max(-r,-a),r),d=-u*u+f*(f+2*a)+c);else f=s>0?-r:r,u=Math.max(0,-(s*f+o)),d=-u*u+f*(f+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ya).addScaledVector(io,f),d}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,a=n+s;return a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,a;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(o=(e.min.z-f.z)*u,a=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,a=(e.min.z-f.z)*u),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,r){Sa.subVectors(t,e),ro.subVectors(n,e),xa.crossVectors(Sa,ro);let s=this.direction.dot(xa),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Gi.subVectors(this.origin,e);const a=o*this.direction.dot(ro.crossVectors(Gi,ro));if(a<0)return null;const c=o*this.direction.dot(Sa.cross(Gi));if(c<0||a+c>s)return null;const h=-o*Gi.dot(xa);return h<0?null:this.at(h/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class mu{constructor(t,n,i,r,s,o,a,c,h,u,f,d,_,S,M,v){mu.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,c,h,u,f,d,_,S,M,v)}set(t,n,i,r,s,o,a,c,h,u,f,d,_,S,M,v){const g=this.elements;return g[0]=t,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=h,g[6]=u,g[10]=f,g[14]=d,g[3]=_,g[7]=S,g[11]=M,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Cr.setFromMatrixColumn(t,0).length(),s=1/Cr.setFromMatrixColumn(t,1).length(),o=1/Cr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),h=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,_=o*f,S=a*u,M=a*f;n[0]=c*u,n[4]=-c*f,n[8]=h,n[1]=_+S*h,n[5]=d-M*h,n[9]=-a*c,n[2]=M-d*h,n[6]=S+_*h,n[10]=o*c}else if(t.order==="YXZ"){const d=c*u,_=c*f,S=h*u,M=h*f;n[0]=d+M*a,n[4]=S*a-_,n[8]=o*h,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=_*a-S,n[6]=M+d*a,n[10]=o*c}else if(t.order==="ZXY"){const d=c*u,_=c*f,S=h*u,M=h*f;n[0]=d-M*a,n[4]=-o*f,n[8]=S+_*a,n[1]=_+S*a,n[5]=o*u,n[9]=M-d*a,n[2]=-o*h,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){const d=o*u,_=o*f,S=a*u,M=a*f;n[0]=c*u,n[4]=S*h-_,n[8]=d*h+M,n[1]=c*f,n[5]=M*h+d,n[9]=_*h-S,n[2]=-h,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){const d=o*c,_=o*h,S=a*c,M=a*h;n[0]=c*u,n[4]=M-d*f,n[8]=S*f+_,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-h*u,n[6]=_*f+S,n[10]=d-M*f}else if(t.order==="XZY"){const d=o*c,_=o*h,S=a*c,M=a*h;n[0]=c*u,n[4]=-f,n[8]=h*u,n[1]=d*f+M,n[5]=o*u,n[9]=_*f-S,n[2]=S*f-_,n[6]=a*u,n[10]=M*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jf,t,Kf)}lookAt(t,n,i){const r=this.elements;return On.subVectors(t,n),On.lengthSq()===0&&(On.z=1),On.normalize(),Hi.crossVectors(i,On),Hi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Hi.crossVectors(i,On)),Hi.normalize(),oo.crossVectors(On,Hi),r[0]=Hi.x,r[4]=oo.x,r[8]=On.x,r[1]=Hi.y,r[5]=oo.y,r[9]=On.y,r[2]=Hi.z,r[6]=oo.z,r[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],h=i[12],u=i[1],f=i[5],d=i[9],_=i[13],S=i[2],M=i[6],v=i[10],g=i[14],x=i[3],T=i[7],N=i[11],G=i[15],P=r[0],k=r[4],q=r[8],R=r[12],C=r[1],Q=r[5],le=r[9],me=r[13],W=r[2],j=r[6],J=r[10],Me=r[14],he=r[3],ce=r[7],ge=r[11],_e=r[15];return s[0]=o*P+a*C+c*W+h*he,s[4]=o*k+a*Q+c*j+h*ce,s[8]=o*q+a*le+c*J+h*ge,s[12]=o*R+a*me+c*Me+h*_e,s[1]=u*P+f*C+d*W+_*he,s[5]=u*k+f*Q+d*j+_*ce,s[9]=u*q+f*le+d*J+_*ge,s[13]=u*R+f*me+d*Me+_*_e,s[2]=S*P+M*C+v*W+g*he,s[6]=S*k+M*Q+v*j+g*ce,s[10]=S*q+M*le+v*J+g*ge,s[14]=S*R+M*me+v*Me+g*_e,s[3]=x*P+T*C+N*W+G*he,s[7]=x*k+T*Q+N*j+G*ce,s[11]=x*q+T*le+N*J+G*ge,s[15]=x*R+T*me+N*Me+G*_e,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],h=t[13],u=t[2],f=t[6],d=t[10],_=t[14],S=t[3],M=t[7],v=t[11],g=t[15];return S*(+s*c*f-r*h*f-s*a*d+i*h*d+r*a*_-i*c*_)+M*(+n*c*_-n*h*d+s*o*d-r*o*_+r*h*u-s*c*u)+v*(+n*h*f-n*a*_-s*o*f+i*o*_+s*a*u-i*h*u)+g*(-r*a*u-n*c*f+n*a*d+r*o*f-i*o*d+i*c*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],f=t[9],d=t[10],_=t[11],S=t[12],M=t[13],v=t[14],g=t[15],x=f*v*h-M*d*h+M*c*_-a*v*_-f*c*g+a*d*g,T=S*d*h-u*v*h-S*c*_+o*v*_+u*c*g-o*d*g,N=u*M*h-S*f*h+S*a*_-o*M*_-u*a*g+o*f*g,G=S*f*c-u*M*c-S*a*d+o*M*d+u*a*v-o*f*v,P=n*x+i*T+r*N+s*G;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/P;return t[0]=x*k,t[1]=(M*d*s-f*v*s-M*r*_+i*v*_+f*r*g-i*d*g)*k,t[2]=(a*v*s-M*c*s+M*r*h-i*v*h-a*r*g+i*c*g)*k,t[3]=(f*c*s-a*d*s-f*r*h+i*d*h+a*r*_-i*c*_)*k,t[4]=T*k,t[5]=(u*v*s-S*d*s+S*r*_-n*v*_-u*r*g+n*d*g)*k,t[6]=(S*c*s-o*v*s-S*r*h+n*v*h+o*r*g-n*c*g)*k,t[7]=(o*d*s-u*c*s+u*r*h-n*d*h-o*r*_+n*c*_)*k,t[8]=N*k,t[9]=(S*f*s-u*M*s-S*i*_+n*M*_+u*i*g-n*f*g)*k,t[10]=(o*M*s-S*a*s+S*i*h-n*M*h-o*i*g+n*a*g)*k,t[11]=(u*a*s-o*f*s-u*i*h+n*f*h+o*i*_-n*a*_)*k,t[12]=G*k,t[13]=(u*M*r-S*f*r+S*i*d-n*M*d-u*i*v+n*f*v)*k,t[14]=(S*a*r-o*M*r-S*i*c+n*M*c+o*i*v-n*a*v)*k,t[15]=(o*f*r-u*a*r+u*i*c-n*f*c-o*i*d+n*a*d)*k,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,c=t.z,h=s*o,u=s*a;return this.set(h*o+i,h*a-r*c,h*c+r*a,0,h*a+r*c,u*a+i,u*c-r*o,0,h*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,h=s+s,u=o+o,f=a+a,d=s*h,_=s*u,S=s*f,M=o*u,v=o*f,g=a*f,x=c*h,T=c*u,N=c*f,G=i.x,P=i.y,k=i.z;return r[0]=(1-(M+g))*G,r[1]=(_+N)*G,r[2]=(S-T)*G,r[3]=0,r[4]=(_-N)*P,r[5]=(1-(d+g))*P,r[6]=(v+x)*P,r[7]=0,r[8]=(S+T)*k,r[9]=(v-x)*k,r[10]=(1-(d+M))*k,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const o=Cr.set(r[4],r[5],r[6]).length(),a=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Jn.copy(this);const h=1/s,u=1/o,f=1/a;return Jn.elements[0]*=h,Jn.elements[1]*=h,Jn.elements[2]*=h,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o,a=bi){const c=this.elements,h=2*s/(n-t),u=2*s/(i-r),f=(n+t)/(n-t),d=(i+r)/(i-r);let _,S;if(a===bi)_=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Zs)_=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,o,a=bi){const c=this.elements,h=1/(n-t),u=1/(i-r),f=1/(o-s),d=(n+t)*h,_=(i+r)*u;let S,M;if(a===bi)S=(o+s)*f,M=-2*f;else if(a===Zs)S=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=M,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Cr=new F,Jn=new ut,jf=new F(0,0,0),Kf=new F(1,1,1),Hi=new F,oo=new F,On=new F,Nc=new ut,Oc=new Ti,Fc=class m_{constructor(t=0,n=0,i=0,r=m_.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],h=r[5],u=r[9],f=r[2],d=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},Fc.DEFAULT_ORDER="XYZ",Bc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$f=0,zc=new F,Lr=new Ti,wi=new ut,ao=new F,Ms=new F,Jf=new F,Zf=new Ti,kc=new F(1,0,0),Gc=new F(0,1,0),Hc=new F(0,0,1),Qf={type:"added"},ed={type:"removed"},an=class yl extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yl.DEFAULT_UP.clone();const t=new F,n=new Fc,i=new Ti,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Mt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=yl.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yl.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Gc,t)}rotateZ(t){return this.rotateOnAxis(Hc,t)}translateOnAxis(t,n){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Gc,t)}translateZ(t){return this.translateOnAxis(Hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ao.copy(t):ao.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Ms,ao,this.up):wi.lookAt(ao,Ms,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(wi),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ed)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const f=c[h];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(n){const a=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),_=o(t.animations),S=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),_.length>0&&(i.animations=_),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const c=[];for(const h in a){const u=a[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}},an.DEFAULT_UP=new F(0,1,0),an.DEFAULT_MATRIX_AUTO_UPDATE=!0,an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,Zn=new F,Ri=new F,ba=new F,Ci=new F,Pr=new F,Ir=new F,Vc=new F,Ta=new F,Ea=new F,Aa=new F,lo=!1,ys=class hs{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Zn.subVectors(t,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Zn.subVectors(r,n),Ri.subVectors(i,n),ba.subVectors(t,n);const o=Zn.dot(Zn),a=Zn.dot(Ri),c=Zn.dot(ba),h=Ri.dot(Ri),u=Ri.dot(ba),f=o*h-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,_=(h*c-a*u)*d,S=(o*u-a*c)*d;return s.set(1-_-S,S,_)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(t,n,i,r,s,o,a,c){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),this.getInterpolation(t,n,i,r,s,o,a,c)}static getInterpolation(t,n,i,r,s,o,a,c){return this.getBarycoord(t,n,i,r,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ci.x),c.addScaledVector(o,Ci.y),c.addScaledVector(a,Ci.z),c)}static isFrontFacing(t,n,i,r){return Zn.subVectors(i,n),Ri.subVectors(t,n),Zn.cross(Ri).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Zn.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hs.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return hs.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,r,s){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),hs.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}getInterpolation(t,n,i,r,s){return hs.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return hs.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hs.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let o,a;Pr.subVectors(r,i),Ir.subVectors(s,i),Ta.subVectors(t,i);const c=Pr.dot(Ta),h=Ir.dot(Ta);if(c<=0&&h<=0)return n.copy(i);Ea.subVectors(t,r);const u=Pr.dot(Ea),f=Ir.dot(Ea);if(u>=0&&f<=u)return n.copy(r);const d=c*f-u*h;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Pr,o);Aa.subVectors(t,s);const _=Pr.dot(Aa),S=Ir.dot(Aa);if(S>=0&&_<=S)return n.copy(s);const M=_*h-c*S;if(M<=0&&h>=0&&S<=0)return a=h/(h-S),n.copy(i).addScaledVector(Ir,a);const v=u*S-_*f;if(v<=0&&f-u>=0&&_-S>=0)return Vc.subVectors(s,r),a=(f-u)/(f-u+(_-S)),n.copy(r).addScaledVector(Vc,a);const g=1/(v+M+d);return o=M*g,a=d*g,n.copy(i).addScaledVector(Pr,o).addScaledVector(Ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},co={h:0,s:0,l:0},$e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=Sl(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Al(s,r,e+1/3),this.g=Al(s,r,e),this.b=Al(s,r,e-1/3)}return Ct.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=bl(e.r),this.g=bl(e.g),this.b=bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ct.fromWorkingColorSpace(xn.copy(this),e),Math.round(gn(xn.r*255,0,255))*65536+Math.round(gn(xn.g*255,0,255))*256+Math.round(gn(xn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,i=xn.g,r=xn.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,c;const h=(o+s)/2;if(o===s)a=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case n:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-n)/u+2;break;case r:a=(n-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Ot){Ct.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,i=xn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(co);const n=ks(Vi.h,co.h,t),i=ks(Vi.s,co.s,t),r=ks(Vi.l,co.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new $e,$e.NAMES=Wc,td=0,li=class extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=gr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ze=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sn=new F,ho=new De,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),e}},Xc=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},qc=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Dt=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},nd=0,Vn=new ut,wa=new an,Dr=new F,Fn=new rn,Ss=new rn,dn=new F,Zt=class g_ extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vu(t)?qc:Xc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Mt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,n,i){return Vn.makeTranslation(t,n,i),this.applyMatrix4(Vn),this}scale(t,n,i){return Vn.makeScale(t,n,i),this.applyMatrix4(Vn),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Fn.min,Ss.min),Fn.expandByPoint(dn),dn.addVectors(Fn.max,Ss.max),Fn.expandByPoint(dn)):(Fn.expandByPoint(Ss.min),Fn.expandByPoint(Ss.max))}Fn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)dn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(dn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)dn.fromBufferAttribute(a,h),c&&(Dr.fromBufferAttribute(t,h),dn.add(Dr)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let C=0;C<a;C++)h[C]=new F,u[C]=new F;const f=new F,d=new F,_=new F,S=new De,M=new De,v=new De,g=new F,x=new F;function T(C,Q,le){f.fromArray(r,C*3),d.fromArray(r,Q*3),_.fromArray(r,le*3),S.fromArray(o,C*2),M.fromArray(o,Q*2),v.fromArray(o,le*2),d.sub(f),_.sub(f),M.sub(S),v.sub(S);const me=1/(M.x*v.y-v.x*M.y);isFinite(me)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(_,-M.y).multiplyScalar(me),x.copy(_).multiplyScalar(M.x).addScaledVector(d,-v.x).multiplyScalar(me),h[C].add(g),h[Q].add(g),h[le].add(g),u[C].add(x),u[Q].add(x),u[le].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:i.length}]);for(let C=0,Q=N.length;C<Q;++C){const le=N[C],me=le.start,W=le.count;for(let j=me,J=me+W;j<J;j+=3)T(i[j+0],i[j+1],i[j+2])}const G=new F,P=new F,k=new F,q=new F;function R(C){k.fromArray(s,C*3),q.copy(k);const Q=h[C];G.copy(Q),G.sub(k.multiplyScalar(k.dot(Q))).normalize(),P.crossVectors(q,Q);const me=P.dot(u[C])<0?-1:1;c[C*4]=G.x,c[C*4+1]=G.y,c[C*4+2]=G.z,c[C*4+3]=me}for(let C=0,Q=N.length;C<Q;++C){const le=N[C],me=le.start,W=le.count;for(let j=me,J=me+W;j<J;j+=3)R(i[j+0]),R(i[j+1]),R(i[j+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,_=i.count;d<_;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,c=new F,h=new F,u=new F,f=new F;if(t)for(let d=0,_=t.count;d<_;d+=3){const S=t.getX(d+0),M=t.getX(d+1),v=t.getX(d+2);r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,v),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,S),c.fromBufferAttribute(i,M),h.fromBufferAttribute(i,v),a.add(u),c.add(u),h.add(u),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(v,h.x,h.y,h.z)}else for(let d=0,_=n.count;d<_;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)dn.fromBufferAttribute(t,n),dn.normalize(),t.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,c){const h=a.array,u=a.itemSize,f=a.normalized,d=new h.constructor(c.length*u);let _=0,S=0;for(let M=0,v=c.length;M<v;M++){a.isInterleavedBufferAttribute?_=c[M]*a.data.stride+a.offset:_=c[M]*u;for(let g=0;g<u;g++)d[S++]=h[_++]}return new Jt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new g_,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],h=t(c,i);n.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const c=[],h=s[a];for(let u=0,f=h.length;u<f;u++){const d=h[u],_=t(d,i);c.push(_)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let f=0,d=h.length;f<d;f++){const _=h[f];u.push(_.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(n))}const s=t.morphAttributes;for(const h in s){const u=[],f=s[h];for(let d=0,_=f.length;d<_;d++)u.push(f[d].clone(n));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,u=o.length;h<u;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yc=new ut,sr=new so,uo=new ai,jc=new F,Ur=new F,Nr=new F,Or=new F,Ra=new F,fo=new F,po=new De,mo=new De,go=new De,Kc=new F,$c=new F,Jc=new F,_o=new F,vo=new F,re=class extends an{constructor(e=new Zt,t=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const h=o[a],u=r[a];h!==0&&(Ra.fromBufferAttribute(u,e),s?fo.addScaledVector(Ra,h):fo.addScaledVector(Ra.sub(t),h))}t.add(fo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(uo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(uo,jc)===null||sr.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(Yc.copy(r).invert(),sr.copy(e.ray).applyMatrix4(Yc),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,S=f.length;_<S;_++){const M=f[_],v=s[M.materialIndex],g=Math.max(M.start,d.start),x=Math.min(o.count,Math.min(M.start+M.count,d.start+d.count));for(let T=g,N=x;T<N;T+=3){const G=o.getX(T),P=o.getX(T+1),k=o.getX(T+2);i=$o(this,v,e,n,c,h,u,G,P,k),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let M=_,v=S;M<v;M+=3){const g=o.getX(M),x=o.getX(M+1),T=o.getX(M+2);i=$o(this,s,e,n,c,h,u,g,x,T),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let _=0,S=f.length;_<S;_++){const M=f[_],v=s[M.materialIndex],g=Math.max(M.start,d.start),x=Math.min(a.count,Math.min(M.start+M.count,d.start+d.count));for(let T=g,N=x;T<N;T+=3){const G=T,P=T+1,k=T+2;i=$o(this,v,e,n,c,h,u,G,P,k),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),S=Math.min(a.count,d.start+d.count);for(let M=_,v=S;M<v;M+=3){const g=M,x=M+1,T=M+2;i=$o(this,s,e,n,c,h,u,g,x,T),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}}},Be=class __ extends Zt{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],h=[],u=[],f=[];let d=0,_=0;S("z","y","x",-1,-1,i,n,t,o,s,0),S("z","y","x",1,-1,i,n,-t,o,s,1),S("x","z","y",1,1,t,i,n,r,o,2),S("x","z","y",1,-1,t,i,-n,r,o,3),S("x","y","z",1,-1,t,n,i,r,s,4),S("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(f,2));function S(M,v,g,x,T,N,G,P,k,q,R){const C=N/k,Q=G/q,le=N/2,me=G/2,W=P/2,j=k+1,J=q+1;let Me=0,he=0;const ce=new F;for(let ge=0;ge<J;ge++){const _e=ge*Q-me;for(let Z=0;Z<j;Z++){const ue=Z*C-le;ce[M]=ue*x,ce[v]=_e*T,ce[g]=W,h.push(ce.x,ce.y,ce.z),ce[M]=0,ce[v]=0,ce[g]=P>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Z/k),f.push(1-ge/q),Me+=1}}for(let ge=0;ge<q;ge++)for(let _e=0;_e<k;_e++){const Z=d+_e+j*ge,ue=d+_e+j*(ge+1),Ae=d+(_e+1)+j*(ge+1),we=d+(_e+1)+j*ge;c.push(Z,ue,we),c.push(ue,Ae,we),he+=6}a.addGroup(_,he,R),_+=he,d+=Me}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new __(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Mo={clone:fs,merge:Ln},id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Zc=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},An=class extends Zc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,t-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fr=-90,Br=1,sd=class extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(Fr,Br,e,t);i.layers=this.layers,this.add(i);const r=new An(Fr,Br,e,t);r.layers=this.layers,this.add(r);const s=new An(Fr,Br,e,t);s.layers=this.layers,this.add(s);const o=new An(Fr,Br,e,t);o.layers=this.layers,this.add(o);const a=new An(Fr,Br,e,t);a.layers=this.layers,this.add(a);const c=new An(Fr,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,a]=t;for(const c of t)this.remove(c);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,a),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Qc=class extends In{constructor(e,t,n,i,r,s,o,a,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,n,i,r,s,o,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},od=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Hs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===nr?Ot:Hn),this.texture=new Qc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Be(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:vi});r.uniforms.tEquirect.value=t;const s=new re(i,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=En),new sd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}},Ca=new F,ad=new F,ld=new Mt,or=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ca.subVectors(n,t).cross(ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ld.getNormalMatrix(e),i=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new ai,yo=new F,La=class{constructor(e=new or,t=new or,n=new or,i=new or,r=new or,s=new or){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],_=i[9],S=i[10],M=i[11],v=i[12],g=i[13],x=i[14],T=i[15];if(n[0].setComponents(a-r,f-c,M-d,T-v).normalize(),n[1].setComponents(a+r,f+c,M+d,T+v).normalize(),n[2].setComponents(a+s,f+h,M+_,T+g).normalize(),n[3].setComponents(a-s,f-h,M-_,T-g).normalize(),n[4].setComponents(a-o,f-u,M-S,T-x).normalize(),t===bi)n[5].setComponents(a+o,f+u,M+S,T+x).normalize();else if(t===Zs)n[5].setComponents(o,u,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yo.x=i.normal.x>0?e.max.x:e.min.x,yo.y=i.normal.y>0?e.max.y:e.min.y,yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yt=class v_ extends Zt{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),c=Math.floor(r),h=a+1,u=c+1,f=t/a,d=n/c,_=[],S=[],M=[],v=[];for(let g=0;g<u;g++){const x=g*d-o;for(let T=0;T<h;T++){const N=T*f-s;S.push(N,-x,0),M.push(0,0,1),v.push(T/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){const T=x+h*g,N=x+h*(g+1),G=x+1+h*(g+1),P=x+1+h*g;_.push(T,N,P),_.push(N,G,P)}this.setIndex(_),this.setAttribute("position",new Dt(S,3)),this.setAttribute("normal",new Dt(M,3)),this.setAttribute("uv",new Dt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new v_(t.width,t.height,t.widthSegments,t.heightSegments)}},cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_d=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Id=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:cd,alphahash_pars_fragment:hd,alphamap_fragment:ud,alphamap_pars_fragment:fd,alphatest_fragment:dd,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:gd,batching_pars_vertex:_d,batching_vertex:vd,begin_vertex:Md,beginnormal_vertex:yd,bsdfs:Sd,iridescence_fragment:xd,bumpmap_pars_fragment:bd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:wd,color_fragment:Rd,color_pars_fragment:Cd,color_pars_vertex:Ld,color_vertex:Pd,common:Id,cube_uv_reflection_fragment:Dd,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Nd,displacementmap_vertex:Od,emissivemap_fragment:Fd,emissivemap_pars_fragment:Bd,colorspace_fragment:zd,colorspace_pars_fragment:kd,envmap_fragment:Gd,envmap_common_pars_fragment:Hd,envmap_pars_fragment:Vd,envmap_pars_vertex:Wd,envmap_physical_pars_fragment:np,envmap_vertex:Xd,fog_vertex:qd,fog_pars_vertex:Yd,fog_fragment:jd,fog_pars_fragment:Kd,gradientmap_pars_fragment:$d,lightmap_fragment:Jd,lightmap_pars_fragment:Zd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:rp,lights_phong_fragment:sp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:vp,map_particle_pars_fragment:Mp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Sp,morphcolor_vertex:xp,morphnormal_vertex:bp,morphtarget_pars_vertex:Tp,morphtarget_vertex:Ep,normal_fragment_begin:Ap,normal_fragment_maps:wp,normal_pars_fragment:Rp,normal_pars_vertex:Cp,normal_vertex:Lp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Np,opaque_fragment:Op,packing:Fp,premultiplied_alpha_fragment:Bp,project_vertex:zp,dithering_fragment:kp,dithering_pars_fragment:Gp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:jp,skinning_pars_vertex:Kp,skinning_vertex:$p,skinnormal_vertex:Jp,specularmap_fragment:Zp,specularmap_pars_fragment:Qp,tonemapping_fragment:em,tonemapping_pars_fragment:tm,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:rm,uv_pars_vertex:sm,uv_vertex:om,worldpos_vertex:am,background_vert:lm,background_frag:cm,backgroundCube_vert:hm,backgroundCube_frag:um,cube_vert:fm,cube_frag:dm,depth_vert:pm,depth_frag:mm,distanceRGBA_vert:gm,distanceRGBA_frag:_m,equirect_vert:vm,equirect_frag:Mm,linedashed_vert:ym,linedashed_frag:Sm,meshbasic_vert:xm,meshbasic_frag:bm,meshlambert_vert:Tm,meshlambert_frag:Em,meshmatcap_vert:Am,meshmatcap_frag:wm,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Lm,meshphong_frag:Pm,meshphysical_vert:Im,meshphysical_frag:Dm,meshtoon_vert:Um,meshtoon_frag:Nm,points_vert:Om,points_frag:Fm,shadow_vert:Bm,shadow_frag:zm,sprite_vert:km,sprite_frag:Gm},be={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ci={basic:{uniforms:Ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new $e(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Ln([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Ln([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new $e(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Ln([be.points,be.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Ln([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Ln([be.common,be.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Ln([be.sprite,be.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Ln([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Ln([be.lights,be.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}},ci.physical={uniforms:Ln([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},So={r:0,b:0,g:0},xo=class extends Zc{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zr=4,eh=[.125,.215,.35,.446,.526,.582],lr=20,Pa=new xo,th=new $e,Ia=null,Da=0,Ua=0,cr=(1+Math.sqrt(5))/2,kr=1/cr,nh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,cr,kr),new F(0,cr,-kr),new F(kr,0,cr),new F(-kr,0,cr),new F(cr,kr,0),new F(-cr,kr,0)],ih=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Da,Ua),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:xi,format:Gn,colorSpace:fn,depthBuffer:!1},i=Su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ev(r)),this._blurMaterial=tv(r,e,t)}return i}_compileMaterial(e){const t=new re(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,i){const o=new An(90,1,t,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(th),h.toneMapping=Oi,h.autoClear=!1;const d=new ze({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),_=new re(new Be,d);let S=!1;const M=e.background;M?M.isColor&&(d.color.copy(M),e.background=null,S=!0):(d.color.copy(th),S=!0);for(let v=0;v<6;v++){const g=v%3;g===0?(o.up.set(0,a[v],0),o.lookAt(c[v],0,0)):g===1?(o.up.set(0,0,a[v]),o.lookAt(0,c[v],0)):(o.up.set(0,a[v],0),o.lookAt(0,0,c[v]));const x=this._cubeSize;Jo(i,g*x,v>2?x:0,x,x),h.setRenderTarget(i),S&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_r||e.mapping===vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const a=this._cubeSize;Jo(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(s,Pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=nh[(i-1)%nh.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const a=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new re(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*lr-1),S=r/_,M=isFinite(r)?1+Math.floor(h*S):lr;M>lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${lr}`);const v=[];let g=0;for(let P=0;P<lr;++P){const k=P/S,q=Math.exp(-k*k/2);v.push(q),P===0?g+=q:P<M&&(g+=2*q)}for(let P=0;P<v.length;P++)v[P]=v[P]/g;f.envMap.value=e.texture,f.samples.value=M,f.weights.value=v,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const T=this._sizeLods[i],N=3*T*(i>x-zr?i-x+zr:0),G=4*(this._cubeSize-T);Jo(t,N,G,3*T,2*T),a.setRenderTarget(t),a.render(u,Pa)}},rh=class extends In{constructor(e,t,n,i,r,s,o,a,c,h){if(h=h!==void 0?h:tr,h!==tr&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===tr&&(n=Bi),n===void 0&&h===yr&&(n=er),super(null,i,r,s,o,a,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nn,this.minFilter=a!==void 0?a:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sh=new In,oh=new rh(1,1),oh.compareFunction=Ec,ah=new Dc,lh=new qf,ch=new Qc,hh=[],uh=[],fh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4),Hm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lv(t.type)}},Vm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$v(t.type)}},Wm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}},Na=/(\w+)(\])?(\[|\.)?/g,bo=class{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Jv(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}},Xm=37297,qm=0,Ym=/^[ \t]*#include +<([\w\d./]+)>/gm,jm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]),Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,$m=0,Jm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zm(e),t.set(e,n)),n}},Zm=class{constructor(e){this.id=$m++,this.code=e,this.usedTimes=0}},Qm=0,e0=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},t0=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,r0=class extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},jt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},s0={type:"move"},Oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const S of e.hand.values()){const M=t.getJointPose(S,n),v=this._getHandJoint(c,S);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},o0=class extends br{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",a=1,c=null,h=null,u=null,f=null,d=null,_=null;const S=t.getContextAttributes();let M=null,v=null;const g=[],x=[],T=new De;let N=null;const G=new An;G.layers.enable(1),G.viewport=new Ht;const P=new An;P.layers.enable(2),P.viewport=new Ht;const k=[G,P],q=new r0;q.layers.enable(1),q.layers.enable(2);let R=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=g[Z];return ue===void 0&&(ue=new Oa,g[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=g[Z];return ue===void 0&&(ue=new Oa,g[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=g[Z];return ue===void 0&&(ue=new Oa,g[Z]=ue),ue.getHandSpace()};function Q(Z){const ue=x.indexOf(Z.inputSource);if(ue===-1)return;const Ae=g[ue];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,c||s),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function le(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",le),i.removeEventListener("inputsourceschange",me);for(let Z=0;Z<g.length;Z++){const ue=x[Z];ue!==null&&(x[Z]=null,g[Z].disconnect(ue))}R=null,C=null,e.setRenderTarget(M),d=null,f=null,u=null,i=null,v=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",le),i.addEventListener("inputsourceschange",me),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:i.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Kn(d.framebufferWidth,d.framebufferHeight,{format:Gn,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Ae=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=S.stencil?yr:tr,Ae=S.stencil?er:Bi);const Ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Kn(f.textureWidth,f.textureHeight,{format:Gn,type:Fi,depthTexture:new rh(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const et=e.properties.get(v);et.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(a),c=null,s=await i.requestReferenceSpace(o),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function me(Z){for(let ue=0;ue<Z.removed.length;ue++){const Ae=Z.removed[ue],we=x.indexOf(Ae);we>=0&&(x[we]=null,g[we].disconnect(Ae))}for(let ue=0;ue<Z.added.length;ue++){const Ae=Z.added[ue];let we=x.indexOf(Ae);if(we===-1){for(let et=0;et<g.length;et++)if(et>=x.length){x.push(Ae),we=et;break}else if(x[et]===null){x[et]=Ae,we=et;break}if(we===-1)break}const Ve=g[we];Ve&&Ve.connect(Ae)}}const W=new F,j=new F;function J(Z,ue,Ae){W.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(Ae.matrixWorld);const we=W.distanceTo(j),Ve=ue.projectionMatrix.elements,et=Ae.projectionMatrix.elements,dt=Ve[14]/(Ve[10]-1),tt=Ve[14]/(Ve[10]+1),xt=(Ve[9]+1)/Ve[5],K=(Ve[9]-1)/Ve[5],Qt=(Ve[8]-1)/Ve[0],ht=(et[8]+1)/et[0],Ge=dt*Qt,Je=dt*ht,Ye=we/(-Qt+ht),_t=Ye*-Qt;ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(_t),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const ot=dt+Ye,U=tt+Ye,A=Ge-_t,ee=Je+(we-_t),ve=xt*tt/U*ot,oe=K*tt/U*ot;Z.projectionMatrix.makePerspective(A,ee,ve,oe,ot,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function Me(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;q.near=P.near=G.near=Z.near,q.far=P.far=G.far=Z.far,(R!==q.near||C!==q.far)&&(i.updateRenderState({depthNear:q.near,depthFar:q.far}),R=q.near,C=q.far);const ue=Z.parent,Ae=q.cameras;Me(q,ue);for(let we=0;we<Ae.length;we++)Me(Ae[we],ue);Ae.length===2?J(q,G,P):q.projectionMatrix.copy(G.projectionMatrix),he(Z,q,ue)};function he(Z,ue,Ae){Ae===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Er*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(f===null&&d===null))return a},this.setFoveation=function(Z){a=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let ce=null;function ge(Z,ue){if(h=ue.getViewerPose(c||s),_=ue,h!==null){const Ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let we=!1;Ae.length!==q.cameras.length&&(q.cameras.length=0,we=!0);for(let Ve=0;Ve<Ae.length;Ve++){const et=Ae[Ve];let dt=null;if(d!==null)dt=d.getViewport(et);else{const xt=u.getViewSubImage(f,et);dt=xt.viewport,Ve===0&&(e.setRenderTargetTextures(v,xt.colorTexture,f.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(v))}let tt=k[Ve];tt===void 0&&(tt=new An,tt.layers.enable(Ve),tt.viewport=new Ht,k[Ve]=tt),tt.matrix.fromArray(et.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(et.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(dt.x,dt.y,dt.width,dt.height),Ve===0&&(q.matrix.copy(tt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),we===!0&&q.cameras.push(tt)}}for(let Ae=0;Ae<g.length;Ae++){const we=x[Ae],Ve=g[Ae];we!==null&&Ve!==void 0&&Ve.update(we,ue,c||s)}ce&&ce(Z,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),_=null}const _e=new yu;_e.setAnimationLoop(ge),this.setAnimationLoop=function(Z){ce=Z},this.dispose=function(){}}},mh=class{constructor(e={}){const{canvas:t=W_(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=s;const d=new Uint32Array(4),_=new Int32Array(4);let S=null,M=null;const v=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;const x=this;let T=!1,N=0,G=0,P=null,k=-1,q=null;const R=new Ht,C=new Ht;let Q=null;const le=new $e(0);let me=0,W=t.width,j=t.height,J=1,Me=null,he=null;const ce=new Ht(0,0,W,j),ge=new Ht(0,0,W,j);let _e=!1;const Z=new La;let ue=!1,Ae=!1,we=null;const Ve=new ut,et=new De,dt=new F,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xt(){return P===null?J:1}let K=n;function Qt(w,Y){for(let ne=0;ne<w.length;ne++){const ie=w[ne],te=t.getContext(ie,Y);if(te!==null)return te}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",H,!1),K===null){const Y=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&Y.shift(),K=Qt(Y,w),K===null)throw Qt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,Ge,Je,Ye,_t,ot,U,A,ee,ve,oe,pe,qe,Ee,Ie,ye,at,de,Wt,gt,Ze,Ue,Oe,mt;function Ut(){ht=new iv(K),Ge=new J_(K,ht,e),ht.init(Ge),Ue=new AM(K,ht,Ge),Je=new TM(K,ht,Ge),Ye=new ov(K),_t=new mM,ot=new EM(K,ht,Je,_t,Ge,Ue,Ye),U=new Q_(x),A=new nv(x),ee=new Y_(K,Ge),Oe=new K_(K,ht,ee,Ge),ve=new rv(K,ee,Ye,Oe),oe=new hv(K,ve,ee,Ye),Wt=new cv(K,Ge,ot),ye=new Z_(_t),pe=new pM(x,U,A,ht,Ge,Oe,ye),qe=new wM(x,_t),Ee=new _M,Ie=new xM(ht,Ge),de=new j_(x,U,A,Je,oe,f,a),at=new bM(x,oe,Ge),mt=new RM(K,Ye,Ge,Je),gt=new $_(K,ht,Ye,Ge),Ze=new sv(K,ht,Ye,Ge),Ye.programs=pe.programs,x.capabilities=Ge,x.extensions=ht,x.properties=_t,x.renderLists=Ee,x.shadowMap=at,x.state=Je,x.info=Ye}Ut();const vt=new o0(x,K);this.xr=vt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(W,j,!1))},this.getSize=function(w){return w.set(W,j)},this.setSize=function(w,Y,ne=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,j=Y,t.width=Math.floor(w*J),t.height=Math.floor(Y*J),ne===!0&&(t.style.width=w+"px",t.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(W*J,j*J).floor()},this.setDrawingBufferSize=function(w,Y,ne){W=w,j=Y,J=ne,t.width=Math.floor(w*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,Y,ne,ie){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,Y,ne,ie),Je.viewport(R.copy(ce).multiplyScalar(J).floor())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,Y,ne,ie){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,Y,ne,ie),Je.scissor(C.copy(ge).multiplyScalar(J).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){Je.setScissorTest(_e=w)},this.setOpaqueSort=function(w){Me=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(w=!0,Y=!0,ne=!0){let ie=0;if(w){let te=!1;if(P!==null){const Ce=P.texture.format;te=Ce===Xl||Ce===Wl||Ce===Vl}if(te){const Ce=P.texture.type,ke=Ce===Fi||Ce===Bi||Ce===oa||Ce===er||Ce===Gl||Ce===Hl,He=de.getClearColor(),it=de.getClearAlpha(),Qe=He.r,rt=He.g,st=He.b;ke?(d[0]=Qe,d[1]=rt,d[2]=st,d[3]=it,K.clearBufferuiv(K.COLOR,0,d)):(_[0]=Qe,_[1]=rt,_[2]=st,_[3]=it,K.clearBufferiv(K.COLOR,0,_))}else ie|=K.COLOR_BUFFER_BIT}Y&&(ie|=K.DEPTH_BUFFER_BIT),ne&&(ie|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",H,!1),Ee.dispose(),Ie.dispose(),_t.dispose(),U.dispose(),A.dispose(),oe.dispose(),Oe.dispose(),mt.dispose(),pe.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",en),vt.removeEventListener("sessionend",_n),we&&(we.dispose(),we=null),Tt.stop()};function Lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=Ye.autoReset,Y=at.enabled,ne=at.autoUpdate,ie=at.needsUpdate,te=at.type;Ut(),Ye.autoReset=w,at.enabled=Y,at.autoUpdate=ne,at.needsUpdate=ie,at.type=te}function H(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){const Y=w.target;Y.removeEventListener("dispose",Te),Re(Y)}function Re(w){je(w),_t.remove(w)}function je(w){const Y=_t.get(w).programs;Y!==void 0&&(Y.forEach(function(ne){pe.releaseProgram(ne)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ne,ie,te,Ce){Y===null&&(Y=tt);const ke=te.isMesh&&te.matrixWorld.determinant()<0,He=Wg(w,Y,ne,ie,te);Je.setMaterial(ie,ke);let it=ne.index,Qe=1;if(ie.wireframe===!0){if(it=ve.getWireframeAttribute(ne),it===void 0)return;Qe=2}const rt=ne.drawRange,st=ne.attributes.position;let Xt=rt.start*Qe,bn=(rt.start+rt.count)*Qe;Ce!==null&&(Xt=Math.max(Xt,Ce.start*Qe),bn=Math.min(bn,(Ce.start+Ce.count)*Qe)),it!==null?(Xt=Math.max(Xt,0),bn=Math.min(bn,it.count)):st!=null&&(Xt=Math.max(Xt,0),bn=Math.min(bn,st.count));const tn=bn-Xt;if(tn<0||tn===1/0)return;Oe.setup(te,ie,He,ne,it);let ui,Ft=gt;if(it!==null&&(ui=ee.get(it),Ft=Ze,Ft.setIndex(ui)),te.isMesh)ie.wireframe===!0?(Je.setLineWidth(ie.wireframeLinewidth*xt()),Ft.setMode(K.LINES)):Ft.setMode(K.TRIANGLES);else if(te.isLine){let pt=ie.linewidth;pt===void 0&&(pt=1),Je.setLineWidth(pt*xt()),te.isLineSegments?Ft.setMode(K.LINES):te.isLineLoop?Ft.setMode(K.LINE_LOOP):Ft.setMode(K.LINE_STRIP)}else te.isPoints?Ft.setMode(K.POINTS):te.isSprite&&Ft.setMode(K.TRIANGLES);if(te.isBatchedMesh)Ft.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)Ft.renderInstances(Xt,tn,te.count);else if(ne.isInstancedBufferGeometry){const pt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Cs=Math.min(ne.instanceCount,pt);Ft.renderInstances(Xt,tn,Cs)}else Ft.render(Xt,tn)};function We(w,Y,ne){w.transparent===!0&&w.side===Bt&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,Jr(w,Y,ne),w.side=_i,w.needsUpdate=!0,Jr(w,Y,ne),w.side=Bt):Jr(w,Y,ne)}this.compile=function(w,Y,ne=null){ne===null&&(ne=w),M=Ie.get(ne),M.init(),g.push(M),ne.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(M.pushLight(te),te.castShadow&&M.pushShadow(te))}),w!==ne&&w.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(M.pushLight(te),te.castShadow&&M.pushShadow(te))}),M.setupLights(x._useLegacyLights);const ie=new Set;return w.traverse(function(te){const Ce=te.material;if(Ce)if(Array.isArray(Ce))for(let ke=0;ke<Ce.length;ke++){const He=Ce[ke];We(He,ne,te),ie.add(He)}else We(Ce,ne,te),ie.add(Ce)}),g.pop(),M=null,ie},this.compileAsync=function(w,Y,ne=null){const ie=this.compile(w,Y,ne);return new Promise(te=>{function Ce(){if(ie.forEach(function(ke){_t.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){te(w);return}setTimeout(Ce,10)}ht.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Rt=null;function zt(w){Rt&&Rt(w)}function en(){Tt.stop()}function _n(){Tt.start()}const Tt=new yu;Tt.setAnimationLoop(zt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(w){Rt=w,vt.setAnimationLoop(w),w===null?Tt.stop():Tt.start()},vt.addEventListener("sessionstart",en),vt.addEventListener("sessionend",_n),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(Y),Y=vt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,Y,P),M=Ie.get(w,g.length),M.init(),g.push(M),Ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Z.setFromProjectionMatrix(Ve),Ae=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,Ae),S=Ee.get(w,v.length),S.init(),v.push(S),ei(w,Y,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(Me,he),this.info.render.frame++,ue===!0&&ye.beginShadows();const ne=M.state.shadowsArray;if(at.render(ne,w,Y),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(S,w),M.setupLights(x._useLegacyLights),Y.isArrayCamera){const ie=Y.cameras;for(let te=0,Ce=ie.length;te<Ce;te++){const ke=ie[te];qn(S,w,ke,ke.viewport)}}else qn(S,w,Y);P!==null&&(ot.updateMultisampleRenderTarget(P),ot.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,Y),Oe.resetDefaultState(),k=-1,q=null,g.pop(),g.length>0?M=g[g.length-1]:M=null,v.pop(),v.length>0?S=v[v.length-1]:S=null};function ei(w,Y,ne,ie){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){ie&&dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ve);const ke=oe.update(w),He=w.material;He.visible&&S.push(w,ke,He,ne,dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const ke=oe.update(w),He=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),dt.copy(w.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),dt.copy(ke.boundingSphere.center)),dt.applyMatrix4(w.matrixWorld).applyMatrix4(Ve)),Array.isArray(He)){const it=ke.groups;for(let Qe=0,rt=it.length;Qe<rt;Qe++){const st=it[Qe],Xt=He[st.materialIndex];Xt&&Xt.visible&&S.push(w,ke,Xt,ne,dt.z,st)}}else He.visible&&S.push(w,ke,He,ne,dt.z,null)}}const Ce=w.children;for(let ke=0,He=Ce.length;ke<He;ke++)ei(Ce[ke],Y,ne,ie)}function qn(w,Y,ne,ie){const te=w.opaque,Ce=w.transmissive,ke=w.transparent;M.setupLightsView(ne),ue===!0&&ye.setGlobalState(x.clippingPlanes,ne),Ce.length>0&&Uo(te,Ce,Y,ne),ie&&Je.viewport(R.copy(ie)),te.length>0&&$r(te,Y,ne),Ce.length>0&&$r(Ce,Y,ne),ke.length>0&&$r(ke,Y,ne),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Uo(w,Y,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Ce=Ge.isWebGL2;we===null&&(we=new Kn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")?xi:Fi,minFilter:yi,samples:Ce?4:0})),x.getDrawingBufferSize(et),Ce?we.setSize(et.x,et.y):we.setSize(Ko(et.x),Ko(et.y));const ke=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(le),me=x.getClearAlpha(),me<1&&x.setClearColor(16777215,.5),x.clear();const He=x.toneMapping;x.toneMapping=Oi,$r(w,ne,ie),ot.updateMultisampleRenderTarget(we),ot.updateRenderTargetMipmap(we);let it=!1;for(let Qe=0,rt=Y.length;Qe<rt;Qe++){const st=Y[Qe],Xt=st.object,bn=st.geometry,tn=st.material,ui=st.group;if(tn.side===Bt&&Xt.layers.test(ie.layers)){const Ft=tn.side;tn.side=Pn,tn.needsUpdate=!0,No(Xt,ne,ie,bn,tn,ui),tn.side=Ft,tn.needsUpdate=!0,it=!0}}it===!0&&(ot.updateMultisampleRenderTarget(we),ot.updateRenderTargetMipmap(we)),x.setRenderTarget(ke),x.setClearColor(le,me),x.toneMapping=He}function $r(w,Y,ne){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,Ce=w.length;te<Ce;te++){const ke=w[te],He=ke.object,it=ke.geometry,Qe=ie===null?ke.material:ie,rt=ke.group;He.layers.test(ne.layers)&&No(He,Y,ne,it,Qe,rt)}}function No(w,Y,ne,ie,te,Ce){w.onBeforeRender(x,Y,ne,ie,te,Ce),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(x,Y,ne,ie,w,Ce),te.transparent===!0&&te.side===Bt&&te.forceSinglePass===!1?(te.side=Pn,te.needsUpdate=!0,x.renderBufferDirect(ne,Y,ie,te,w,Ce),te.side=_i,te.needsUpdate=!0,x.renderBufferDirect(ne,Y,ie,te,w,Ce),te.side=Bt):x.renderBufferDirect(ne,Y,ie,te,w,Ce),w.onAfterRender(x,Y,ne,ie,te,Ce)}function Jr(w,Y,ne){Y.isScene!==!0&&(Y=tt);const ie=_t.get(w),te=M.state.lights,Ce=M.state.shadowsArray,ke=te.state.version,He=pe.getParameters(w,te.state,Ce,Y,ne),it=pe.getProgramCacheKey(He);let Qe=ie.programs;ie.environment=w.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(w.isMeshStandardMaterial?A:U).get(w.envMap||ie.environment),Qe===void 0&&(w.addEventListener("dispose",Te),Qe=new Map,ie.programs=Qe);let rt=Qe.get(it);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===ke)return ol(w,He),rt}else He.uniforms=pe.getUniforms(w),w.onBuild(ne,He,x),w.onBeforeCompile(He,x),rt=pe.acquireProgram(He,it),Qe.set(it,rt),ie.uniforms=He.uniforms;const st=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(st.clippingPlanes=ye.uniform),ol(w,He),ie.needsLights=eu(w),ie.lightsStateVersion=ke,ie.needsLights&&(st.ambientLightColor.value=te.state.ambient,st.lightProbe.value=te.state.probe,st.directionalLights.value=te.state.directional,st.directionalLightShadows.value=te.state.directionalShadow,st.spotLights.value=te.state.spot,st.spotLightShadows.value=te.state.spotShadow,st.rectAreaLights.value=te.state.rectArea,st.ltc_1.value=te.state.rectAreaLTC1,st.ltc_2.value=te.state.rectAreaLTC2,st.pointLights.value=te.state.point,st.pointLightShadows.value=te.state.pointShadow,st.hemisphereLights.value=te.state.hemi,st.directionalShadowMap.value=te.state.directionalShadowMap,st.directionalShadowMatrix.value=te.state.directionalShadowMatrix,st.spotShadowMap.value=te.state.spotShadowMap,st.spotLightMatrix.value=te.state.spotLightMatrix,st.spotLightMap.value=te.state.spotLightMap,st.pointShadowMap.value=te.state.pointShadowMap,st.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.currentProgram=rt,ie.uniformsList=null,rt}function sl(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=bo.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function ol(w,Y){const ne=_t.get(w);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function Wg(w,Y,ne,ie,te){Y.isScene!==!0&&(Y=tt),ot.resetTextureUnits();const Ce=Y.fog,ke=ie.isMeshStandardMaterial?Y.environment:null,He=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fn,it=(ie.isMeshStandardMaterial?A:U).get(ie.envMap||ke),Qe=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),st=!!ne.morphAttributes.position,Xt=!!ne.morphAttributes.normal,bn=!!ne.morphAttributes.color;let tn=Oi;ie.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(tn=x.toneMapping);const ui=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ft=ui!==void 0?ui.length:0,pt=_t.get(ie),Cs=M.state.lights;if(ue===!0&&(Ae===!0||w!==q)){const Mn=w===q&&ie.id===k;ye.setState(ie,w,Mn)}let qt=!1;ie.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Cs.state.version||pt.outputColorSpace!==He||te.isBatchedMesh&&pt.batching===!1||!te.isBatchedMesh&&pt.batching===!0||te.isInstancedMesh&&pt.instancing===!1||!te.isInstancedMesh&&pt.instancing===!0||te.isSkinnedMesh&&pt.skinning===!1||!te.isSkinnedMesh&&pt.skinning===!0||te.isInstancedMesh&&pt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&pt.instancingColor===!1&&te.instanceColor!==null||pt.envMap!==it||ie.fog===!0&&pt.fog!==Ce||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==ye.numPlanes||pt.numIntersection!==ye.numIntersection)||pt.vertexAlphas!==Qe||pt.vertexTangents!==rt||pt.morphTargets!==st||pt.morphNormals!==Xt||pt.morphColors!==bn||pt.toneMapping!==tn||Ge.isWebGL2===!0&&pt.morphTargetsCount!==Ft)&&(qt=!0):(qt=!0,pt.__version=ie.version);let fi=pt.currentProgram;qt===!0&&(fi=Jr(ie,Y,te));let vn=!1,Ui=!1,dr=!1;const ln=fi.getUniforms(),di=pt.uniforms;if(Je.useProgram(fi.program)&&(vn=!0,Ui=!0,dr=!0),ie.id!==k&&(k=ie.id,Ui=!0),vn||q!==w){ln.setValue(K,"projectionMatrix",w.projectionMatrix),ln.setValue(K,"viewMatrix",w.matrixWorldInverse);const Mn=ln.map.cameraPosition;Mn!==void 0&&Mn.setValue(K,dt.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&ln.setValue(K,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&ln.setValue(K,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,Ui=!0,dr=!0)}if(te.isSkinnedMesh){ln.setOptional(K,te,"bindMatrix"),ln.setOptional(K,te,"bindMatrixInverse");const Mn=te.skeleton;Mn&&(Ge.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),ln.setValue(K,"boneTexture",Mn.boneTexture,ot)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}te.isBatchedMesh&&(ln.setOptional(K,te,"batchingTexture"),ln.setValue(K,"batchingTexture",te._matricesTexture,ot));const Zr=ne.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0&&Ge.isWebGL2===!0)&&Wt.update(te,ne,fi),(Ui||pt.receiveShadow!==te.receiveShadow)&&(pt.receiveShadow=te.receiveShadow,ln.setValue(K,"receiveShadow",te.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(di.envMap.value=it,di.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),Ui&&(ln.setValue(K,"toneMappingExposure",x.toneMappingExposure),pt.needsLights&&Qh(di,dr),Ce&&ie.fog===!0&&qe.refreshFogUniforms(di,Ce),qe.refreshMaterialUniforms(di,ie,J,j,we),bo.upload(K,sl(pt),di,ot)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(bo.upload(K,sl(pt),di,ot),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&ln.setValue(K,"center",te.center),ln.setValue(K,"modelViewMatrix",te.modelViewMatrix),ln.setValue(K,"normalMatrix",te.normalMatrix),ln.setValue(K,"modelMatrix",te.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Mn=ie.uniformsGroups;for(let Oo=0,Qr=Mn.length;Oo<Qr;Oo++)if(Ge.isWebGL2){const es=Mn[Oo];mt.update(es,fi),mt.bind(es,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Qh(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function eu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,Y,ne){_t.get(w.texture).__webglTexture=Y,_t.get(w.depthTexture).__webglTexture=ne;const ie=_t.get(w);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,Y){const ne=_t.get(w);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,ne=0){P=w,N=Y,G=ne;let ie=!0,te=null,Ce=!1,ke=!1;if(w){const it=_t.get(w);it.__useDefaultFramebuffer!==void 0?(Je.bindFramebuffer(K.FRAMEBUFFER,null),ie=!1):it.__webglFramebuffer===void 0?ot.setupRenderTarget(w):it.__hasExternalTextures&&ot.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);const Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ke=!0);const rt=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(rt[Y])?te=rt[Y][ne]:te=rt[Y],Ce=!0):Ge.isWebGL2&&w.samples>0&&ot.useMultisampledRTT(w)===!1?te=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(rt)?te=rt[ne]:te=rt,R.copy(w.viewport),C.copy(w.scissor),Q=w.scissorTest}else R.copy(ce).multiplyScalar(J).floor(),C.copy(ge).multiplyScalar(J).floor(),Q=_e;if(Je.bindFramebuffer(K.FRAMEBUFFER,te)&&Ge.drawBuffers&&ie&&Je.drawBuffers(w,te),Je.viewport(R),Je.scissor(C),Je.setScissorTest(Q),Ce){const it=_t.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it.__webglTexture,ne)}else if(ke){const it=_t.get(w.texture),Qe=Y||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,it.__webglTexture,ne||0,Qe)}k=-1},this.readRenderTargetPixels=function(w,Y,ne,ie,te,Ce,ke){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He){Je.bindFramebuffer(K.FRAMEBUFFER,He);try{const it=w.texture,Qe=it.format,rt=it.type;if(Qe!==Gn&&Ue.convert(Qe)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=rt===xi&&(ht.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&ht.has("EXT_color_buffer_float"));if(rt!==Fi&&Ue.convert(rt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===Si&&(Ge.isWebGL2||ht.has("OES_texture_float")||ht.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-ie&&ne>=0&&ne<=w.height-te&&K.readPixels(Y,ne,ie,te,Ue.convert(Qe),Ue.convert(rt),Ce)}finally{const it=P!==null?_t.get(P).__webglFramebuffer:null;Je.bindFramebuffer(K.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(w,Y,ne=0){const ie=Math.pow(2,-ne),te=Math.floor(Y.image.width*ie),Ce=Math.floor(Y.image.height*ie);ot.setTexture2D(Y,0),K.copyTexSubImage2D(K.TEXTURE_2D,ne,0,0,w.x,w.y,te,Ce),Je.unbindTexture()},this.copyTextureToTexture=function(w,Y,ne,ie=0){const te=Y.image.width,Ce=Y.image.height,ke=Ue.convert(ne.format),He=Ue.convert(ne.type);ot.setTexture2D(ne,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ne.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ne.unpackAlignment),Y.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ie,w.x,w.y,te,Ce,ke,He,Y.image.data):Y.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ie,w.x,w.y,Y.mipmaps[0].width,Y.mipmaps[0].height,ke,Y.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,ie,w.x,w.y,ke,He,Y.image),ie===0&&ne.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Je.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,ne,ie,te=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=w.max.x-w.min.x+1,ke=w.max.y-w.min.y+1,He=w.max.z-w.min.z+1,it=Ue.convert(ie.format),Qe=Ue.convert(ie.type);let rt;if(ie.isData3DTexture)ot.setTexture3D(ie,0),rt=K.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)ot.setTexture2DArray(ie,0),rt=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ie.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ie.unpackAlignment);const st=K.getParameter(K.UNPACK_ROW_LENGTH),Xt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),bn=K.getParameter(K.UNPACK_SKIP_PIXELS),tn=K.getParameter(K.UNPACK_SKIP_ROWS),ui=K.getParameter(K.UNPACK_SKIP_IMAGES),Ft=ne.isCompressedTexture?ne.mipmaps[te]:ne.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Ft.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ft.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,w.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,w.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,w.min.z),ne.isDataTexture||ne.isData3DTexture?K.texSubImage3D(rt,te,Y.x,Y.y,Y.z,Ce,ke,He,it,Qe,Ft.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(rt,te,Y.x,Y.y,Y.z,Ce,ke,He,it,Ft.data)):K.texSubImage3D(rt,te,Y.x,Y.y,Y.z,Ce,ke,He,it,Qe,Ft),K.pixelStorei(K.UNPACK_ROW_LENGTH,st),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Xt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,bn),K.pixelStorei(K.UNPACK_SKIP_ROWS,tn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ui),te===0&&ie.generateMipmaps&&K.generateMipmap(rt),Je.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ot.setTextureCube(w,0):w.isData3DTexture?ot.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ot.setTexture2DArray(w,0):ot.setTexture2D(w,0),Je.unbindTexture()},this.resetState=function(){N=0,G=0,P=null,Je.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pa?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===js?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?nr:xc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===nr?Ot:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},a0=class extends mh{},a0.prototype.isWebGL1Renderer=!0,l0=class M_{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(t),this.density=n}clone(){return new M_(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},c0=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},h0=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new F,u0=class y_{constructor(t,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix4(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.applyNormalMatrix(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.transformDirection(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}setX(t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=mi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=mi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=mi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=mi(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Jt(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new y_(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gh=new F,_h=new Ht,vh=new Ht,f0=new F,Mh=new ut,To=new F,Fa=new ai,yh=new ut,Ba=new so,d0=class extends re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fl,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingBox.expandByPoint(To)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingSphere.expandByPoint(To)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fa.copy(this.boundingSphere),Fa.applyMatrix4(i),e.ray.intersectsSphere(Fa)!==!1&&(yh.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(yh),!(this.boundingBox!==null&&Ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ba)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;_h.fromBufferAttribute(i.attributes.skinIndex,e),vh.fromBufferAttribute(i.attributes.skinWeight,e),gh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=vh.getComponent(r);if(s!==0){const o=_h.getComponent(r);Mh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(f0.copy(gh).applyMatrix4(Mh),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Sh=class extends an{constructor(){super(),this.isBone=!0,this.type="Bone"}},p0=class extends In{constructor(e=null,t=1,n=1,i,r,s,o,a,c=nn,h=nn,u,f){super(null,s,o,a,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xh=new ut,m0=new ut,g0=class S_{constructor(t=[],n=[]){this.uuid=oi(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const i=new ut;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:m0;xh.multiplyMatrices(a,n[s]),xh.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new S_(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const i=new p0(n,t,t,Gn,Si);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(t){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let i=0,r=t.bones.length;i<r;i++){const s=t.bones[i];let o=n[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Sh),this.bones.push(o),this.boneInverses.push(new ut().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const o=n[r];t.bones.push(o.uuid);const a=i[r];t.boneInverses.push(a.toArray())}return t}},za=class extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gr=new ut,bh=new ut,Eo=[],Th=new rn,_0=new ut,xs=new re,bs=new ai,v0=class extends re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new za(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),Th.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(Th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),bs.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gr),bh.multiplyMatrices(n,Gr),xs.matrixWorld=bh,xs.raycast(e,Eo);for(let s=0,o=Eo.length;s<o;s++){const a=Eo[s];a.instanceId=r,a.object=this,t.push(a)}Eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new za(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Hr=class extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Eh=new F,Ah=new F,wh=new ut,ka=new so,Ao=new ai,wo=class extends an{constructor(e=new Zt,t=new Hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Eh.fromBufferAttribute(t,i-1),Ah.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Eh.distanceTo(Ah);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;wh.copy(i).invert(),ka.copy(e.ray).applyMatrix4(wh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=new F,h=new F,u=new F,f=new F,d=this.isLineSegments?2:1,_=n.index,M=n.attributes.position;if(_!==null){const v=Math.max(0,s.start),g=Math.min(_.count,s.start+s.count);for(let x=v,T=g-1;x<T;x+=d){const N=_.getX(x),G=_.getX(x+1);if(c.fromBufferAttribute(M,N),h.fromBufferAttribute(M,G),ka.distanceSqToSegment(c,h,f,u)>a)continue;f.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||t.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,s.start),g=Math.min(M.count,s.start+s.count);for(let x=v,T=g-1;x<T;x+=d){if(c.fromBufferAttribute(M,x),h.fromBufferAttribute(M,x+1),ka.distanceSqToSegment(c,h,f,u)>a)continue;f.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(f);G<e.near||G>e.far||t.push({distance:G,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Rh=new F,Ch=new F,Qn=class extends wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Rh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rh.distanceTo(Ch);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},M0=class extends wo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ga=class extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lh=new ut,Ha=new so,Ro=new ai,Co=new F,Ph=class extends an{constructor(e=new Zt,t=new Ga){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;Lh.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(Lh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let _=f,S=d;_<S;_++){const M=c.getX(_);Co.fromBufferAttribute(u,M),Uu(Co,M,a,i,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let _=f,S=d;_<S;_++)Co.fromBufferAttribute(u,_),Uu(Co,_,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Li=class extends In{constructor(e,t,n,i,r,s,o,a,c){super(e,t,n,i,r,s,o,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(s-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=t||(s.isVector2?new De:new F);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,i=[],r=[],s=[],o=new F,a=new ut;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new F)}r[0]=new F,s[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(gn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,_))}s[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(gn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(a.makeRotationAxis(i[_],d*_)),s[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ih=class extends Pi{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t){const n=t||new De,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=a-this.aX,d=c-this.aY;a=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(a,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},y0=class extends Ih{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}},Lo=new F,Va=new Cl,Wa=new Cl,Xa=new Cl,Dh=class extends Pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Lo.subVectors(i[0],i[1]).add(i[0]),c=Lo);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Lo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),d),S=Math.pow(u.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d);S<1e-4&&(S=1),_<1e-4&&(_=S),M<1e-4&&(M=S),Va.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,S,M),Wa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,S,M),Xa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,S,M)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Wa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Xa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Va.calc(a),Wa.calc(a),Xa.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},S0=class extends Pi{constructor(e=new De,t=new De,n=new De,i=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new De){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ws(e,i.x,r.x,s.x,o.x),Ws(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},x0=class extends Pi{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ws(e,i.x,r.x,s.x,o.x),Ws(e,i.y,r.y,s.y,o.y),Ws(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},b0=class extends Pi{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},T0=class extends Pi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},E0=class extends Pi{constructor(e=new De,t=new De,n=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new De){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Vs(e,i.x,r.x,s.x),Vs(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uh=class extends Pi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Vs(e,i.x,r.x,s.x),Vs(e,i.y,r.y,s.y),Vs(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},A0=class extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],h=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(Nu(o,a.x,c.x,h.x,u.x),Nu(o,a.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new De().fromArray(i))}return this}},w0=Object.freeze({__proto__:null,ArcCurve:y0,CatmullRomCurve3:Dh,CubicBezierCurve:S0,CubicBezierCurve3:x0,EllipseCurve:Ih,LineCurve:b0,LineCurve3:T0,QuadraticBezierCurve:E0,QuadraticBezierCurve3:Uh,SplineCurve:A0}),Dn=class x_ extends Zt{constructor(t=1,n=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const h=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],_=[];let S=0;const M=[],v=i/2;let g=0;x(),o===!1&&(t>0&&T(!0),n>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(_,2));function x(){const N=new F,G=new F;let P=0;const k=(n-t)/i;for(let q=0;q<=s;q++){const R=[],C=q/s,Q=C*(n-t)+t;for(let le=0;le<=r;le++){const me=le/r,W=me*c+a,j=Math.sin(W),J=Math.cos(W);G.x=Q*j,G.y=-C*i+v,G.z=Q*J,f.push(G.x,G.y,G.z),N.set(j,k,J).normalize(),d.push(N.x,N.y,N.z),_.push(me,1-C),R.push(S++)}M.push(R)}for(let q=0;q<r;q++)for(let R=0;R<s;R++){const C=M[R][q],Q=M[R+1][q],le=M[R+1][q+1],me=M[R][q+1];u.push(C,Q,me),u.push(Q,le,me),P+=6}h.addGroup(g,P,0),g+=P}function T(N){const G=S,P=new De,k=new F;let q=0;const R=N===!0?t:n,C=N===!0?1:-1;for(let le=1;le<=r;le++)f.push(0,v*C,0),d.push(0,C,0),_.push(.5,.5),S++;const Q=S;for(let le=0;le<=r;le++){const W=le/r*c+a,j=Math.cos(W),J=Math.sin(W);k.x=R*J,k.y=v*C,k.z=R*j,f.push(k.x,k.y,k.z),d.push(0,C,0),P.x=j*.5+.5,P.y=J*.5*C+.5,_.push(P.x,P.y),S++}for(let le=0;le<r;le++){const me=G+le,W=Q+le;N===!0?u.push(W,W+1,me):u.push(W+1,W,me),q+=3}h.addGroup(g,q,N===!0?1:2),g+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new x_(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},R0=class b_ extends Dn{constructor(t=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new b_(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},C0=class T_ extends Zt{constructor(t=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:r};const s=[],o=[];a(r),h(i),u(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const T=new F,N=new F,G=new F;for(let P=0;P<n.length;P+=3)_(n[P+0],T),_(n[P+1],N),_(n[P+2],G),c(T,N,G,x)}function c(x,T,N,G){const P=G+1,k=[];for(let q=0;q<=P;q++){k[q]=[];const R=x.clone().lerp(N,q/P),C=T.clone().lerp(N,q/P),Q=P-q;for(let le=0;le<=Q;le++)le===0&&q===P?k[q][le]=R:k[q][le]=R.clone().lerp(C,le/Q)}for(let q=0;q<P;q++)for(let R=0;R<2*(P-q)-1;R++){const C=Math.floor(R/2);R%2===0?(d(k[q][C+1]),d(k[q+1][C]),d(k[q][C])):(d(k[q][C+1]),d(k[q+1][C+1]),d(k[q+1][C]))}}function h(x){const T=new F;for(let N=0;N<s.length;N+=3)T.x=s[N+0],T.y=s[N+1],T.z=s[N+2],T.normalize().multiplyScalar(x),s[N+0]=T.x,s[N+1]=T.y,s[N+2]=T.z}function u(){const x=new F;for(let T=0;T<s.length;T+=3){x.x=s[T+0],x.y=s[T+1],x.z=s[T+2];const N=v(x)/2/Math.PI+.5,G=g(x)/Math.PI+.5;o.push(N,1-G)}S(),f()}function f(){for(let x=0;x<o.length;x+=6){const T=o[x+0],N=o[x+2],G=o[x+4],P=Math.max(T,N,G),k=Math.min(T,N,G);P>.9&&k<.1&&(T<.2&&(o[x+0]+=1),N<.2&&(o[x+2]+=1),G<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function _(x,T){const N=x*3;T.x=t[N+0],T.y=t[N+1],T.z=t[N+2]}function S(){const x=new F,T=new F,N=new F,G=new F,P=new De,k=new De,q=new De;for(let R=0,C=0;R<s.length;R+=9,C+=6){x.set(s[R+0],s[R+1],s[R+2]),T.set(s[R+3],s[R+4],s[R+5]),N.set(s[R+6],s[R+7],s[R+8]),P.set(o[C+0],o[C+1]),k.set(o[C+2],o[C+3]),q.set(o[C+4],o[C+5]),G.copy(x).add(T).add(N).divideScalar(3);const Q=v(G);M(P,C+0,x,Q),M(k,C+2,T,Q),M(q,C+4,N,Q)}}function M(x,T,N,G){G<0&&x.x===1&&(o[T]=x.x-1),N.x===0&&N.z===0&&(o[T]=G/2/Math.PI+.5)}function v(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new T_(t.vertices,t.indices,t.radius,t.details)}},Po=new F,Io=new F,qa=new F,Do=new ys,Wi=class extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Tr*t),s=e.getIndex(),o=e.getAttribute("position"),a=s?s.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let _=0;_<a;_+=3){s?(c[0]=s.getX(_),c[1]=s.getX(_+1),c[2]=s.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:S,b:M,c:v}=Do;if(S.fromBufferAttribute(o,c[0]),M.fromBufferAttribute(o,c[1]),v.fromBufferAttribute(o,c[2]),Do.getNormal(qa),u[0]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,u[1]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,u[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let g=0;g<3;g++){const x=(g+1)%3,T=u[g],N=u[x],G=Do[h[g]],P=Do[h[x]],k=`${T}_${N}`,q=`${N}_${T}`;q in f&&f[q]?(qa.dot(f[q].normal)<=r&&(d.push(G.x,G.y,G.z),d.push(P.x,P.y,P.z)),f[q]=null):k in f||(f[k]={index0:c[g],index1:c[x],normal:qa.clone()})}}for(const _ in f)if(f[_]){const{index0:S,index1:M}=f[_];Po.fromBufferAttribute(o,S),Io.fromBufferAttribute(o,M),d.push(Po.x,Po.y,Po.z),d.push(Io.x,Io.y,Io.z)}this.setAttribute("position",new Dt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Nh=class E_ extends C0{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new E_(t.radius,t.detail)}},hr=class A_ extends Zt{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let h=0;const u=[],f=new F,d=new F,_=[],S=[],M=[],v=[];for(let g=0;g<=i;g++){const x=[],T=g/i;let N=0;g===0&&o===0?N=.5/n:g===i&&c===Math.PI&&(N=-.5/n);for(let G=0;G<=n;G++){const P=G/n;f.x=-t*Math.cos(r+P*s)*Math.sin(o+T*a),f.y=t*Math.cos(o+T*a),f.z=t*Math.sin(r+P*s)*Math.sin(o+T*a),S.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),v.push(P+N,1-T),x.push(h++)}u.push(x)}for(let g=0;g<i;g++)for(let x=0;x<n;x++){const T=u[g][x+1],N=u[g][x],G=u[g+1][x],P=u[g+1][x+1];(g!==0||o>0)&&_.push(T,N,P),(g!==i-1||c<Math.PI)&&_.push(N,G,P)}this.setIndex(_),this.setAttribute("position",new Dt(S,3)),this.setAttribute("normal",new Dt(M,3)),this.setAttribute("uv",new Dt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new A_(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Oh=class w_ extends Zt{constructor(t=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],h=[],u=new F,f=new F,d=new F;for(let _=0;_<=i;_++)for(let S=0;S<=r;S++){const M=S/r*s,v=_/i*Math.PI*2;f.x=(t+n*Math.cos(v))*Math.cos(M),f.y=(t+n*Math.cos(v))*Math.sin(M),f.z=n*Math.sin(v),a.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),h.push(S/r),h.push(_/i)}for(let _=1;_<=i;_++)for(let S=1;S<=r;S++){const M=(r+1)*_+S-1,v=(r+1)*(_-1)+S-1,g=(r+1)*(_-1)+S,x=(r+1)*_+S;o.push(M,v,x),o.push(v,g,x)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new w_(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},L0=class R_ extends Zt{constructor(t=new Uh(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new F,c=new F,h=new De;let u=new F;const f=[],d=[],_=[],S=[];M(),this.setIndex(S),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(_,2));function M(){for(let T=0;T<n;T++)v(T);v(s===!1?n:0),x(),g()}function v(T){u=t.getPointAt(T/n,u);const N=o.normals[T],G=o.binormals[T];for(let P=0;P<=r;P++){const k=P/r*Math.PI*2,q=Math.sin(k),R=-Math.cos(k);c.x=R*N.x+q*G.x,c.y=R*N.y+q*G.y,c.z=R*N.z+q*G.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,f.push(a.x,a.y,a.z)}}function g(){for(let T=1;T<=n;T++)for(let N=1;N<=r;N++){const G=(r+1)*(T-1)+(N-1),P=(r+1)*T+(N-1),k=(r+1)*T+N,q=(r+1)*(T-1)+N;S.push(G,P,q),S.push(P,k,q)}}function x(){for(let T=0;T<=n;T++)for(let N=0;N<=r;N++)h.x=T/n,h.y=N/r,_.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new R_(new w0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Ya=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ii=class extends Ya{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ts=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},P0=class extends Ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:r=e,o=2*t-n;break;case yc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Mc:s=e,a=2*n-t;break;case yc:s=1,a=n+i[1]-i[0];break;default:s=e-1,a=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(a-n),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),S=_*_,M=S*_,v=-f*M+2*f*S-f*_,g=(1+f)*M+(-1.5-2*f)*S+(-.5+f)*_+1,x=(-1-d)*M+(1.5+d)*S+.5*_,T=d*M-d*S;for(let N=0;N!==o;++N)r[N]=v*s[h+N]+g*s[c+N]+x*s[a+N]+T*s[u+N];return r}},I0=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=s[c+f]*u+s[a+f]*h;return r}},D0=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},hi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qo(t,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qo(e.times,Array),values:Qo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new D0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new I0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new P0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(i!==void 0&&OM(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fa,r=e.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)a=!0;else{const u=o*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){const S=t[u+_];if(S!==t[f+_]||S!==t[d+_]){a=!0;break}}}if(a){if(o!==s){e[s]=e[o];const u=o*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)t[a+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}},hi.prototype.TimeBufferType=Float32Array,hi.prototype.ValueBufferType=Float32Array,hi.prototype.DefaultInterpolation=Sr,Vr=class extends hi{},Vr.prototype.ValueTypeName="bool",Vr.prototype.ValueBufferType=Array,Vr.prototype.DefaultInterpolation=ms,Vr.prototype.InterpolantFactoryMethodLinear=void 0,Vr.prototype.InterpolantFactoryMethodSmooth=void 0,Fh=class extends hi{},Fh.prototype.ValueTypeName="color",Wr=class extends hi{},Wr.prototype.ValueTypeName="number",U0=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ti.slerpFlat(r,0,s,c-o,s,c,a);return r}},ur=class extends hi{InterpolantFactoryMethodLinear(e){return new U0(this.times,this.values,this.getValueSize(),e)}},ur.prototype.ValueTypeName="quaternion",ur.prototype.DefaultInterpolation=Sr,ur.prototype.InterpolantFactoryMethodSmooth=void 0,Xr=class extends hi{},Xr.prototype.ValueTypeName="string",Xr.prototype.ValueBufferType=Array,Xr.prototype.DefaultInterpolation=ms,Xr.prototype.InterpolantFactoryMethodLinear=void 0,Xr.prototype.InterpolantFactoryMethodSmooth=void 0,qr=class extends hi{},qr.prototype.ValueTypeName="vector",N0=class{constructor(e,t=-1,n,i=Cf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(zM(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(hi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=FM(a);a=Ou(a,1,h),c=Ou(c,1,h),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new Wr(".morphTargetInfluences["+t[o].name+"]",a,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,_,S){if(d.length!==0){const M=[],v=[];Fu(d,M,v,_),M.length!==0&&S.push(new u(f,M,v))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let a=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let S=0;S<f[_].morphTargets.length;S++)d[f[_].morphTargets[S]]=-1;for(const S in d){const M=[],v=[];for(let g=0;g!==f[_].morphTargets.length;++g){const x=f[_];M.push(x.time),v.push(x.morphTarget===S?1:0)}i.push(new Wr(".morphTargetInfluence["+S+"]",M,v))}a=d.length*s}else{const d=".bones["+t[u].name+"]";n(qr,d+".position",f,"pos",i),n(ur,d+".quaternion",f,"rot",i),n(qr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,a,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}},Xi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},O0=class{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,i.onProgress!==void 0&&i.onProgress(h,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}},F0=new O0,Yr=class{constructor(e){this.manager=e!==void 0?e:F0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Yr.DEFAULT_MATERIAL_NAME="__DEFAULT",Di={},B0=class extends Error{constructor(e,t){super(e),this.response=t}},Bh=class extends Yr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:n,onError:i});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Di[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let S=0;const M=new ReadableStream({start(v){g();function g(){u.read().then(({done:x,value:T})=>{if(x)v.close();else{S+=T.byteLength;const N=new ProgressEvent("progress",{lengthComputable:_,loaded:S,total:d});for(let G=0,P=h.length;G<P;G++){const k=h[G];k.onProgress&&k.onProgress(N)}v.enqueue(T),g()}})}}});return new Response(M)}else throw new B0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(a){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Xi.add(e,c);const h=Di[e];delete Di[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Di[e];if(h===void 0)throw this.manager.itemError(e),c;delete Di[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},z0=class extends Yr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Xi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=Gs("img");function a(){h(),Xi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},zh=class extends Yr{constructor(e){super(e)}load(e,t,n,i){const r=new In,s=new z0(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ja=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ka=new ut,kh=new F,Gh=new F,$a=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),Ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},k0=class extends $a{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},G0=class extends ja{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new k0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hh=new ut,Es=new F,Ja=new F,H0=class extends $a{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),n.position.copy(Es),Ja.copy(n.position),Ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ja),n.updateMatrixWorld(),i.makeTranslation(-Es.x,-Es.y,-Es.z),Hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh)}},V0=class extends ja{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new H0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},W0=class extends $a{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},X0=class extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new W0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},As=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},q0=class extends Yr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Xi.get(e);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const a=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Xi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Xi.add(e,a),r.manager.itemStart(e)}},Y0=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Za="\\[\\]\\.:\\/",j0=new RegExp("["+Za+"]","g"),Qa="[^"+Za+"]",K0="[^"+Za.replace("\\.","")+"]",$0=/((?:WC+[\/:])*)/.source.replace("WC",Qa),J0=/(WCOD+)?/.source.replace("WCOD",K0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qa),Q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qa),eg=new RegExp("^"+$0+J0+Z0+Q0+"$"),tg=["material","materials","bones","map"],ng=class{constructor(e,t,n){const i=n||Kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Kt=class zs{constructor(t,n,i){this.path=n,this.parsedPath=i||zs.parseTrackName(n),this.node=zs.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new zs.Composite(t,n,i):new zs(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(j0,"")}static parseTrackName(t){const n=eg.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);tg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const c=i(a.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(t||(t=zs.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const o=t[r];if(o===void 0){const h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},Kt.Composite=ng,Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray],Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],kM=new Float32Array(1),typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea)}}),Vh,ig=si({"node_modules/three/examples/jsm/shaders/CopyShader.js"(){Vh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}}}),ws,rg,sg,og,Wh,el=si({"node_modules/three/examples/jsm/postprocessing/Pass.js"(){qi(),ws=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},rg=new xo(-1,1,1,-1,0,1),sg=class extends Zt{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},og=new sg,Wh=class{constructor(e){this._mesh=new re(og,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}}}),ag,GM=si({"node_modules/three/examples/jsm/postprocessing/ShaderPass.js"(){qi(),el(),ag=class extends ws{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mo.clone(e.uniforms),this.material=new Bn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}}}),Xh,lg,cg=si({"node_modules/three/examples/jsm/postprocessing/MaskPass.js"(){el(),Xh=class extends ws{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},lg=class extends ws{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}}}),hg,HM=si({"node_modules/three/examples/jsm/postprocessing/EffectComposer.js"(){qi(),ig(),GM(),cg(),cg(),hg=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ag(Vh),this.copyPass.material.blending=vi,this.clock=new Y0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xh!==void 0&&(s instanceof Xh?n=!0:s instanceof lg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}}}),ug,VM=si({"node_modules/three/examples/jsm/postprocessing/RenderPass.js"(){qi(),el(),ug=class extends ws{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=i}}}}),fg,WM=si({"node_modules/three/examples/jsm/shaders/LuminosityHighPassShader.js"(){qi(),fg={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}}}),tl,XM=si({"node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js"(){qi(),el(),ig(),WM(),tl=class gu extends ws{constructor(t,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=t!==void 0?new De(t.x,t.y):new De(256,256),this.clearColor=new $e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(s,o,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Kn(s,o,{type:xi});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const _=new Kn(s,o,{type:xi});_.texture.name="UnrealBloomPass.v"+f,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),s=Math.round(s/2),o=Math.round(o/2)}const a=fg;this.highPassUniforms=Mo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new De(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Vh;this.copyUniforms=Mo.clone(u.uniforms),this.blendMaterial=new Bn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:un,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $e,this.oldClearAlpha=1,this.basic=new ze,this.fsQuad=new Wh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new De(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(t,n,i,r,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=gu.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=gu.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const n=[];for(let i=0;i<t;i++)n.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Bn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Bn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}},tl.BlurDirectionX=new De(1,0),tl.BlurDirectionY=new De(0,1)}});function Wn(e,t=!1){const n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),s={},o={},a=e[0].morphTargetsRelative,c=new Zt;let h=0;for(let u=0;u<e.length;++u){const f=e[u];let d=0;if(n!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in f.attributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;s[_]===void 0&&(s[_]=[]),s[_].push(f.attributes[_]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in f.morphAttributes){if(!r.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[_]===void 0&&(o[_]=[]),o[_].push(f.morphAttributes[_])}if(t){let _;if(n)_=f.index.count;else if(f.attributes.position!==void 0)_=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,_,u),h+=_}}if(n){let u=0;const f=[];for(let d=0;d<e.length;++d){const _=e[d].index;for(let S=0;S<_.count;++S)f.push(_.getX(S)+u);u+=e[d].attributes.position.count}c.setIndex(f)}for(const u in s){const f=dg(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const _=[];for(let M=0;M<o[u].length;++M)_.push(o[u][M][d]);const S=dg(_);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(S)}}return c}function dg(e){let t,n,i,r=-1,s=0;for(let h=0;h<e.length;++h){const u=e[h];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.array.length}const o=new t(s);let a=0;for(let h=0;h<e.length;++h)o.set(e[h].array,a),a+=e[h].array.length;const c=new Jt(o,n,i);return r!==void 0&&(c.gpuType=r),c}function pg(e,t){if(t===Lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===da||t===Sc){let n=e.getIndex();if(n===null){const o=[],a=e.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);e.setIndex(o),n=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const i=n.count-2,r=[];if(t===da)for(let o=1;o<=i;o++)r.push(n.getX(0)),r.push(n.getX(o)),r.push(n.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(n.getX(o)),r.push(n.getX(o+1)),r.push(n.getX(o+2))):(r.push(n.getX(o+2)),r.push(n.getX(o+1)),r.push(n.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=e.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}var mg=si({"node_modules/three/examples/jsm/utils/BufferGeometryUtils.js"(){qi()}});function qM(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function YM(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Ya({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),e.DefaultMaterial}function jr(e,t,n){for(const i in n.extensions)e[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=n.extensions[i])}function fr(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function jM(e,t,n){let i=!1,r=!1,s=!1;for(let h=0,u=t.length;h<u;h++){const f=t[h];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(e);const o=[],a=[],c=[];for(let h=0,u=t.length;h<u;h++){const f=t[h];if(i){const d=f.POSITION!==void 0?n.getDependency("accessor",f.POSITION):e.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?n.getDependency("accessor",f.NORMAL):e.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?n.getDependency("accessor",f.COLOR_0):e.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(h){const u=h[0],f=h[1],d=h[2];return i&&(e.morphAttributes.position=u),r&&(e.morphAttributes.normal=f),s&&(e.morphAttributes.color=d),e.morphTargetsRelative=!0,e})}function KM(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,i=t.weights.length;n<i;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)e.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $M(e){let t;const n=e.extensions&&e.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+qh(n.attributes):t=e.indices+":"+qh(e.attributes)+":"+e.mode,e.targets!==void 0)for(let i=0,r=e.targets.length;i<r;i++)t+=":"+qh(e.targets[i]);return t}function qh(e){let t="";const n=Object.keys(e).sort();for(let i=0,r=n.length;i<r;i++)t+=n[i]+":"+e[n[i]]+";";return t}function Yh(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JM(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function ZM(e,t,n){const i=t.attributes,r=new rn;if(i.POSITION!==void 0){const a=n.json.accessors[i.POSITION],c=a.min,h=a.max;if(c!==void 0&&h!==void 0){if(r.set(new F(c[0],c[1],c[2]),new F(h[0],h[1],h[2])),a.normalized){const u=Yh(Kr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new F,c=new F;for(let h=0,u=s.length;h<u;h++){const f=s[h];if(f.POSITION!==void 0){const d=n.json.accessors[f.POSITION],_=d.min,S=d.max;if(_!==void 0&&S!==void 0){if(c.setX(Math.max(Math.abs(_[0]),Math.abs(S[0]))),c.setY(Math.max(Math.abs(_[1]),Math.abs(S[1]))),c.setZ(Math.max(Math.abs(_[2]),Math.abs(S[2]))),d.normalized){const M=Yh(Kr[d.componentType]);c.multiplyScalar(M)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}e.boundingBox=r;const o=new ai;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function gg(e,t,n){const i=t.attributes,r=[];function s(o,a){return n.getDependency("accessor",o).then(function(c){e.setAttribute(a,c)})}for(const o in i){const a=il[o]||o.toLowerCase();a in e.attributes||r.push(s(i[o],a))}if(t.indices!==void 0&&!e.index){const o=n.getDependency("accessor",t.indices).then(function(a){e.setIndex(a)});r.push(o)}return Ct.workingColorSpace!==fn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),fr(e,t),ZM(e,t,n),Promise.all(r).then(function(){return t.targets!==void 0?jM(e,t.targets,n):e})}var _g,St,vg,Mg,yg,Sg,xg,bg,Tg,Eg,Ag,wg,Rg,Cg,Lg,Pg,Ig,Dg,Ug,jh,Rs,Kh,Ng,Og,Fg,Bg,$h,zg,kg,Xn,Kr,Jh,Zh,nl,il,Yi,Gg,rl,Hg,Vg,QM=si({"node_modules/three/examples/jsm/loaders/GLTFLoader.js"(){qi(),mg(),_g=class extends Yr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Sg(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Ig(t)}),this.register(function(t){return new bg(t)}),this.register(function(t){return new Tg(t)}),this.register(function(t){return new Eg(t)}),this.register(function(t){return new Ag(t)}),this.register(function(t){return new yg(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new xg(t)}),this.register(function(t){return new Cg(t)}),this.register(function(t){return new Rg(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new Ug(t)})}load(e,t,n,i){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const c=As.extractUrlBase(e);s=As.resolveURL(c,this.path)}else s=As.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},a=new Bh(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{r.parse(c,s,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={},a=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===jh){try{s[St.KHR_BINARY_GLTF]=new Ng(e)}catch(u){i&&i(u);return}r=JSON.parse(s[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Vg(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,s[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case St.KHR_MATERIALS_UNLIT:s[u]=new Mg;break;case St.KHR_DRACO_MESH_COMPRESSION:s[u]=new Og(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:s[u]=new Fg;break;case St.KHR_MESH_QUANTIZATION:s[u]=new Bg;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}},St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vg=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new $e(16777215);a.color!==void 0&&h.setRGB(a.color[0],a.color[1],a.color[2],fn);const u=a.range!==void 0?a.range:0;switch(a.type){case"directional":c=new X0(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new V0(h),c.distance=u;break;case"spot":c=new G0(h),c.distance=u,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,c.angle=a.spot.outerConeAngle,c.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return c.position.set(0,0,0),c.decay=2,fr(c,a),a.intensity!==void 0&&(c.intensity=a.intensity),c.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}},Mg=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return ze}extendParams(e,t,n){const i=[];e.color=new $e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],fn),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(i)}},yg=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Sg=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(o,o)}return Promise.all(r)}},xg=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}},bg=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],fn)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Ot)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}},Tg=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}},Eg=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(o[0],o[1],o[2],fn),Promise.all(r)}},Ag=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},wg=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(o[0],o[1],o[2],fn),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Ot)),Promise.all(r)}},Rg=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}},Cg=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}},Lg=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}},Pg=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let a=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(a=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ig=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let a=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(a=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Dg=class{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const a=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,a,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Ug=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Xn.TRIANGLES&&c.mode!==Xn.TRIANGLE_STRIP&&c.mode!==Xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],a={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(h=>(a[c]=h,a[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const _ of u){const S=new ut,M=new F,v=new Ti,g=new F(1,1,1),x=new v0(_.geometry,_.material,f);for(let T=0;T<f;T++)a.TRANSLATION&&M.fromBufferAttribute(a.TRANSLATION,T),a.ROTATION&&v.fromBufferAttribute(a.ROTATION,T),a.SCALE&&g.fromBufferAttribute(a.SCALE,T),x.setMatrixAt(T,S.compose(M,v,g));for(const T in a)if(T==="_COLOR_0"){const N=a[T];x.instanceColor=new za(N.array,N.itemSize,N.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&_.geometry.setAttribute(T,a[T]);an.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},jh="glTF",Rs=12,Kh={JSON:1313821514,BIN:5130562},Ng=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Rs,r=new DataView(e,Rs);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===Kh.JSON){const c=new Uint8Array(e,Rs+s,o);this.content=n.decode(c)}else if(a===Kh.BIN){const c=Rs+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Og=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},a={},c={};for(const h in s){const u=il[h]||h.toLowerCase();o[u]=s[h]}for(const h in e.attributes){const u=il[h]||h.toLowerCase();if(s[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Kr[f.componentType];c[u]=d.name,a[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const _ in d.attributes){const S=d.attributes[_],M=a[_];M!==void 0&&(S.normalized=M)}u(d)},o,c,fn,f)})})}},Fg=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bg=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},$h=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,_=e*c,S=_-c,M=-2*d+3*f,v=d-f,g=1-M,x=v-f+u;for(let T=0;T!==o;T++){const N=s[S+T+o],G=s[S+T+a]*h,P=s[_+T+o],k=s[_+T]*h;r[T]=g*N+x*G+M*P+v*k}return r}},zg=new Ti,kg=class extends $h{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return zg.fromArray(r).normalize().toArray(r),r}},Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jh={9728:nn,9729:En,9984:sa,9985:zl,9986:Mr,9987:yi},Zh={33071:Nn,33648:Ys,10497:Mi},nl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Gg={CUBICSPLINE:void 0,LINEAR:Sr,STEP:ms},rl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"},Hg=new ut,Vg=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new zh(this.options.manager):this.textureLoader=new q0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return jr(r,o,i),fr(o,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,a=s.length;o<a;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const a=this.associations.get(s);a!=null&&this.associations.set(o,a);for(const[c,h]of s.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(As.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=nl[i.type],o=Kr[i.componentType],a=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new Jt(c,s,a))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],a=nl[i.type],c=Kr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*a,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let S,M;if(d&&d!==u){const v=Math.floor(f/d),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let x=t.cache.get(g);x||(S=new c(o,v*d,i.count*d/h),x=new h0(S,d/h),t.cache.add(g,x)),M=new u0(x,a,f%d/h,_)}else o===null?S=new c(i.count*a):S=new c(o,f,i.count*a),M=new Jt(S,a,_);if(i.sparse!==void 0){const v=nl.SCALAR,g=Kr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,N=new g(s[1],x,i.sparse.count*v),G=new c(s[2],T,i.sparse.count*a);o!==null&&(M=new Jt(M.array.slice(),M.itemSize,M.normalized));for(let P=0,k=N.length;P<k;P++){const q=N[P];if(M.setX(q,G[P*a]),a>=2&&M.setY(q,G[P*a+1]),a>=3&&M.setZ(q,G[P*a+2]),a>=4&&M.setW(q,G[P*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return M})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const a=n.manager.getHandler(s.uri);a!==null&&(o=a)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],a=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[a])return this.textureCache[a];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[s.sampler]||{};return h.magFilter=Jh[f.magFilter]||En,h.minFilter=Jh[f.minFilter]||yi,h.wrapS=Zh[f.wrapS]||Mi,h.wrapT=Zh[f.wrapT]||Mi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[a]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=i.images[e],o=self.URL||self.webkitURL;let a=s.uri||"",c=!1;if(s.bufferView!==void 0)a=n.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:s.mimeType});return a=o.createObjectURL(f),a});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(a).then(function(u){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(S){const M=new In(S);M.needsUpdate=!0,f(M)}),t.load(As.resolveURL(u,r.path),_,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(a),u.userData.mimeType=s.mimeType||JM(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=r.associations.get(s);s=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,a)}}return i!==void 0&&(s.colorSpace=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Ga,li.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a)),n=a}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Hr,li.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,this.cache.add(o,a)),n=a}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=n.clone(),r&&(a.vertexColors=!0),s&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(n))),n=a}e.material=n}getMaterialType(){return Ya}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},a=r.extensions||{},c=[];if(a[St.KHR_MATERIALS_UNLIT]){const u=i[St.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new $e(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],fn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ot)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bt);const h=r.alphaMode||rl.OPAQUE;if(h===rl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===rl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==ze&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&s!==ze&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==ze){const u=r.emissiveFactor;o.emissive=new $e().setRGB(u[0],u[1],u[2],fn)}return r.emissiveTexture!==void 0&&s!==ze&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(c).then(function(){const u=new s(o);return r.name&&(u.name=r.name),fr(u,r),t.associations.set(u,{materials:e}),r.extensions&&jr(i,u,r),u})}createUniqueName(e){const t=Kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return gg(a,o,t)})}const s=[];for(let o=0,a=e.length;o<a;o++){const c=e[o],h=$M(c),u=i[h];if(u)s.push(u.promise);else{let f;c.extensions&&c.extensions[St.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=gg(new Zt,c,t),i[h]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let a=0,c=s.length;a<c;a++){const h=s[a].material===void 0?YM(this.cache):this.getDependency("material",s[a].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(a){const c=a.slice(0,a.length-1),h=a[a.length-1],u=[];for(let d=0,_=h.length;d<_;d++){const S=h[d],M=s[d];let v;const g=c[d];if(M.mode===Xn.TRIANGLES||M.mode===Xn.TRIANGLE_STRIP||M.mode===Xn.TRIANGLE_FAN||M.mode===void 0)v=r.isSkinnedMesh===!0?new d0(S,g):new re(S,g),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),M.mode===Xn.TRIANGLE_STRIP?v.geometry=pg(v.geometry,Sc):M.mode===Xn.TRIANGLE_FAN&&(v.geometry=pg(v.geometry,da));else if(M.mode===Xn.LINES)v=new Qn(S,g);else if(M.mode===Xn.LINE_STRIP)v=new wo(S,g);else if(M.mode===Xn.LINE_LOOP)v=new M0(S,g);else if(M.mode===Xn.POINTS)v=new Ph(S,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(v.geometry.morphAttributes).length>0&&KM(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),fr(v,r),M.extensions&&jr(i,v,M),t.assignFinalMaterial(v),u.push(v)}for(let d=0,_=u.length;d<_;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&jr(i,u[0],r),u[0];const f=new jt;r.extensions&&jr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=u.length;d<_;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new An(Gf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],a=[];for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u){o.push(u);const f=new ut;r!==null&&f.fromArray(r.array,c*16),a.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new g0(o,a)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,s=[],o=[],a=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],_=i.samplers[d.sampler],S=d.target,M=S.node,v=i.parameters!==void 0?i.parameters[_.input]:_.input,g=i.parameters!==void 0?i.parameters[_.output]:_.output;S.node!==void 0&&(s.push(this.getDependency("node",M)),o.push(this.getDependency("accessor",v)),a.push(this.getDependency("accessor",g)),c.push(_),h.push(S))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],_=u[2],S=u[3],M=u[4],v=[];for(let g=0,x=f.length;g<x;g++){const T=f[g],N=d[g],G=_[g],P=S[g],k=M[g];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const q=n._createAnimationTracks(T,N,G,P,k);if(q)for(let R=0;R<q.length;R++)v.push(q[R])}return new N0(r,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let a=0,c=i.weights.length;a<c;a++)o.morphTargetInfluences[a]=i.weights[a]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)s.push(n.getDependency("node",o[c]));const a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),a]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Hg)});for(let d=0,_=u.length;d<_;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",o=[],a=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return a&&o.push(a),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Sh:c.length>1?h=new jt:c.length===1?h=c[0]:h=new an,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=s),fr(h,r),r.extensions&&jr(n,h,r),r.matrix!==void 0){const u=new ut;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new jt;n.name&&(r.name=i.createUniqueName(n.name)),fr(r,n),n.extensions&&jr(t,r,n);const s=n.nodes||[],o=[];for(let a=0,c=s.length;a<c;a++)o.push(i.getDependency("node",s[a]));return Promise.all(o).then(function(a){for(let h=0,u=a.length;h<u;h++)r.add(a[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof li||f instanceof In)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const s=[],o=e.name?e.name:e.uuid,a=[];Yi[r.path]===Yi.weights?e.traverse(function(f){f.morphTargetInfluences&&a.push(f.name?f.name:f.uuid)}):a.push(o);let c;switch(Yi[r.path]){case Yi.weights:c=Wr;break;case Yi.rotation:c=ur;break;case Yi.position:case Yi.scale:c=qr;break;default:n.itemSize===1?c=Wr:c=qr;break}const h=i.interpolation!==void 0?Gg[i.interpolation]:Sr,u=this._getArrayFromAccessor(n);for(let f=0,d=a.length;f<d;f++){const _=new c(a[f]+"."+Yi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),s.push(_)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Yh(t.constructor),i=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ur?kg:$h;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}}}),ey=C_({"game-web3.js"(){qi(),HM(),VM(),XM(),QM(),mg();var e=Math.PI/180,t=656928,n=2814207,i=16722902,r=16769162;function s(l){return{r:l>>16&255,g:l>>8&255,b:l&255}}var o=[{name:"VICE RUNWAY",music:"vice-runway.mp3",sun:{halo:["rgba(255,178,96,0.34)","rgba(255,96,112,0.13)","rgba(255,60,150,0)"],disc:["#ffcf72","#ff9a3e","#ff5a5f","#ff2f8e","#d81ea0"]},fog:7218768,glow:16731558,haze:16747158,skyA:[[24,12,48],[50,22,70],[92,34,86],[130,52,82],[156,82,66],[74,36,56],[24,13,36]],skyB:[[46,23,86],[90,40,112],[160,58,126],[206,90,112],[222,136,94],[118,58,86],[38,21,58]]},{name:"TURBO KASKADE",music:"turbo-kaskade.mp3",sun:{halo:["rgba(170,195,255,0.30)","rgba(90,130,220,0.12)","rgba(60,90,180,0)"],disc:["#eef4ff","#cdd9f2","#a6bce6","#8098d0","#5f78ba"]},fog:1450058,glow:4881151,haze:6982352,skyA:[[8,12,36],[16,24,60],[28,42,88],[44,64,116],[70,98,150],[40,54,96],[12,16,40]],skyB:[[20,28,68],[34,50,100],[52,78,136],[80,112,168],[116,154,198],[66,90,142],[20,26,62]]},{name:"POISON HEARTBEAT",music:"poison-heartbeat.mp3",sun:{halo:["rgba(150,255,120,0.32)","rgba(60,200,90,0.13)","rgba(30,150,80,0)"],disc:["#eaffb0","#a8ff5e","#4ef05a","#1fc96a","#0d8a5a"]},fog:1456159,glow:5504874,haze:8048746,skyA:[[6,16,20],[10,30,32],[16,48,40],[26,70,48],[44,100,56],[22,52,40],[8,18,18]],skyB:[[14,36,34],[24,62,52],[40,96,64],[64,132,72],[108,176,84],[52,102,64],[16,34,30]]}],a=new c0;a.fog=new l0(7218768,6e-5);var c=new jt;c.visible=!1,a.add(c);var h=new An(66,innerWidth/innerHeight,1,3e4),u=new mh({antialias:!1,alpha:!0,logarithmicDepthBuffer:!0}),f=Math.min(16,u.capabilities.getMaxAnisotropy());u.info.autoReset=!1;var d=0;document.body.appendChild(u.domElement);var _=1.85,S=new hg(u);S.addPass(new ug(a,h));var M=new tl(new De(1,1),.9,.55,.18);S.addPass(M);function v(){h.aspect=innerWidth/innerHeight,h.updateProjectionMatrix();const l=Math.ceil(innerWidth/_),m=Math.ceil(innerHeight/_);u.setSize(l,m,!1),S.setSize(l,m),M.setSize(Math.ceil(l/3),Math.ceil(m/3));const p=u.domElement;p.style.width=innerWidth+"px",p.style.height=innerHeight+"px",p.style.imageRendering="pixelated"}v(),addEventListener("resize",v);var g={},x=l=>g[l]||(g[l]=new Hr({color:l})),T=new ze({color:t,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2});function N(){return T}function G(l,m){const p=l.clone(!0);return p.traverse(y=>{y.isMesh&&(y.material=N(),y.add(new Qn(new Wi(y.geometry,25),x(m))))}),p}function P(l,m,p){l.updateMatrixWorld(!0);const y=new rn().setFromObject(l),E=new F;y.getSize(E),E.y>.001&&l.scale.setScalar(m/E.y),l.updateMatrixWorld(!0);const L=new rn().setFromObject(l);l.position.y=p-L.min.y}var k=new yt(1.9,1.3),q=16765514;function R(l,m,p,y,E,L,z,D,O,V,b){const I=V||10,X=b||4,se=[],fe=[{rot:0,o:L+.95,a:[l+3,y-3]},{rot:Math.PI,o:p-.95,a:[l+3,y-3]},{rot:Math.PI/2,o:y+.95,a:[p+3,L-3]},{rot:-Math.PI/2,o:l-.95,a:[p+3,L-3]}],Le=typeof D=="number"&&D<=1?D:.5;for(const Se of fe)for(let Pe=m+I+5;Pe<E-4;Pe+=I){const bt=Math.min(1,Le*(.35+Math.random()*1.5));for(let Pt=Se.a[0]+X*.5;Pt<Se.a[1];Pt+=X){if(Math.random()>bt)continue;const mn=k.clone(),kn=new ut;Se.rot===0?kn.makeTranslation(Pt,Pe,Se.o):(kn.makeRotationY(Se.rot),kn.setPosition(Se.rot===Math.PI?Pt:Se.o,Pe,Se.rot===Math.PI?Se.o:Pt)),mn.applyMatrix4(kn),se.push(mn)}}se.length||se.push(k.clone().translate(0,m-999,0));const Ne=Wn(se);return se.forEach(Se=>Se.dispose()),new re(Ne,new ze({color:q,transparent:!0,opacity:.8,depthWrite:!1,side:Bt,fog:!O}))}function C(l){const m=document.createElement("canvas");m.width=m.height=256;const p=m.getContext("2d"),y=p.createRadialGradient(128,128,44,128,128,128);y.addColorStop(0,l.halo[0]),y.addColorStop(.5,l.halo[1]),y.addColorStop(1,l.halo[2]),p.fillStyle=y,p.fillRect(0,0,256,256);const E=p.createLinearGradient(0,26,0,230);E.addColorStop(0,l.disc[0]),E.addColorStop(.34,l.disc[1]),E.addColorStop(.62,l.disc[2]),E.addColorStop(.85,l.disc[3]),E.addColorStop(1,l.disc[4]),p.fillStyle=E,p.beginPath(),p.arc(128,128,104,0,7),p.fill(),p.globalCompositeOperation="destination-out";for(let z=0;z<4;z++)p.fillRect(0,102+z*7,256,3);const L=p.createLinearGradient(0,127,0,139);return L.addColorStop(0,"rgba(0,0,0,0)"),L.addColorStop(1,"rgba(0,0,0,1)"),p.fillStyle=L,p.fillRect(0,127,256,129),new Li(m)}var Q=new re(new yt(6400,6400),new ze({map:C(o[0].sun),transparent:!0,depthWrite:!1,fog:!1}));Q.position.set(0,-470,-16800),a.add(Q);function le(l){const{r:m,g:p,b:y}=s(l),E=document.createElement("canvas");E.width=4,E.height=128;const L=E.getContext("2d"),z=L.createLinearGradient(0,0,0,128);return z.addColorStop(0,`rgba(${m},${p},${y},0)`),z.addColorStop(.5,`rgba(${m},${p},${y},0.5)`),z.addColorStop(1,`rgba(${m},${p},${y},0)`),L.fillStyle=z,L.fillRect(0,0,4,128),new Li(E)}var me=new re(new yt(6e4,1500),new ze({map:le(o[0].haze),transparent:!0,depthWrite:!1,fog:!1,blending:un}));me.position.set(0,-10,-6e3),a.add(me);function W(l,m,p){const y=document.createElement("canvas");y.width=l,y.height=m;const E=y.getContext("2d");E.imageSmoothingEnabled=!1,p(E,l,m);const L=new Li(y);return L.magFilter=nn,L.minFilter=nn,L.colorSpace=Ot,L.wrapS=L.wrapT=Mi,L}var j=new ze({color:656918}),J=new ze({color:1314854}),Me=[{base:"#140b28",slab:"#1d1236",mull:"#0d0719",win:"#ffd24a",win2:"#7adcff",acc:"#ff2bd6",shop:["#ff9a3c","#ff2bd6","#2af0ff","#ffe08a"]},{base:"#0e0d2c",slab:"#171a3e",mull:"#080716",win:"#ffe08a",win2:"#9adcff",acc:"#2af0ff",shop:["#ffd24a","#ff5a5f","#2af0ff","#c0ff5e"]},{base:"#190a20",slab:"#241031",mull:"#0e0614",win:"#ffcf5e",win2:"#ff8a7a",acc:"#7b3ff2",shop:["#ff9a3c","#ff2bd6","#ffe08a","#7adcff"]},{base:"#101226",slab:"#1a1e38",mull:"#090a16",win:"#f5d98c",win2:"#8ac8f0",acc:"#ff5a8f",shop:["#ffb45e","#ff4a7c","#4adcff","#ffe08a"]},{base:"#0d1420",slab:"#152238",mull:"#070b12",win:"#ffe6a0",win2:"#6ae0d0",acc:"#2af0ff",shop:["#4adcff","#ffd24a","#ff2bd6","#c0ff5e"]},{base:"#1c0d16",slab:"#2a1522",mull:"#100710",win:"#ffc86a",win2:"#ff7ab0",acc:"#ff2b5c",shop:["#ff5a5f","#ffb45e","#ff2bd6","#ffe08a"]},{base:"#12102a",slab:"#1b1a40",mull:"#0a0918",win:"#e8d48a",win2:"#a0b8ff",acc:"#7b3ff2",shop:["#9a6aff","#2af0ff","#ffd24a","#ff4a7c"]},{base:"#0a1616",slab:"#122424",mull:"#060e0e",win:"#d8ffb0",win2:"#7adcff",acc:"#c0ff5e",shop:["#c0ff5e","#2af0ff","#ffe08a","#ff9a3c"]}];function he(l,m,p,y,E){if(E>=11)return ce(l,m,p,y,E);l.fillStyle=y.base,l.fillRect(0,0,m,p);const L=Math.min(16,p*.08|0)+6,z=6+(Math.random()*6|0),D=p-L;if(E===1){l.fillStyle="rgba(120,180,255,0.05)",l.fillRect(0,0,m,p);for(let V=0;V<m;V+=3)l.fillStyle="rgba(0,0,0,0.18)",l.fillRect(V,0,1,p);let O=0;for(let V=z;V<D-6;V+=6){if(O<=0&&Math.random()<.16&&(O=1+(Math.random()*3|0)),O>0){O--,l.fillStyle=Math.random()<.7?y.win:y.win2,l.globalAlpha=.75,l.fillRect(1,V+1,m-2,4),l.globalAlpha=1;for(let b=0;b<m;b+=3)l.fillStyle="rgba(0,0,0,0.35)",l.fillRect(b,V+1,1,4)}else if(l.fillStyle="rgba(10,16,40,0.55)",l.fillRect(1,V+1,m-2,4),Math.random()<.2){l.fillStyle=y.win2,l.globalAlpha=.5;const b=Math.random()*m*.7|0;l.fillRect(b,V+1,3+Math.random()*8|0,4),l.globalAlpha=1}l.fillStyle="rgba(0,0,0,0.4)",l.fillRect(0,V+5,m,1)}l.fillStyle="rgba(0,0,0,0.5)",l.fillRect(0,0,m,z),l.fillStyle=y.acc,l.fillRect(0,0,m,1),l.fillStyle="#0a0a18",l.fillRect(0,D,m,L),l.fillStyle=y.win2,l.globalAlpha=.55,l.fillRect(2,D+1,m-4,L-3),l.globalAlpha=1;for(let V=2;V<m-2;V+=5)l.fillStyle="rgba(0,0,0,0.5)",l.fillRect(V,D+1,1,L-3)}else if(E===2){for(let V=z;V<D-7;V+=7){l.fillStyle="rgba(0,0,0,0.25)",l.fillRect(0,V+7-1,m,1);for(let b=2;b<m-4;b+=5+(Math.random()*3|0)){const B=Math.random()<.34;l.fillStyle=B?Math.random()<.7?y.win:Math.random()<.85?"#aef2ff":y.acc:"rgba(0,0,0,0.55)",l.fillRect(b,V+2,2+(Math.random()*2|0),3+(Math.random()*2|0)),Math.random()<.16&&(l.fillStyle="rgba(0,0,0,0.6)",l.fillRect(b,V+7-3,4,2)),Math.random()<.05&&(l.fillStyle=y.shop[Math.random()*y.shop.length|0],l.fillRect(b+1,V+1,1,1))}}l.fillStyle="rgba(0,0,0,0.45)",l.fillRect(0,0,m,z),l.fillStyle="#05030c",l.fillRect(0,D,m,L);for(let V=1;V<m-3;){const b=3+(Math.random()*6|0);l.fillStyle=y.shop[Math.random()*y.shop.length|0],l.globalAlpha=.8,l.fillRect(V,D+2,Math.min(b,m-V-2),L-4),l.globalAlpha=1,V+=b+1+(Math.random()*3|0)}}else if(E===3){l.fillStyle="rgba(255,255,255,0.03)";for(let O=0;O<p;O+=24)l.fillRect(0,O,m,12);for(let O=0;O<3;O++){const V=4+Math.random()*(m-8)|0;l.fillStyle="rgba(0,0,0,0.45)",l.fillRect(V,0,2,p),l.fillStyle="rgba(255,255,255,0.08)",l.fillRect(V+2,0,1,p)}for(let O=z+6;O<D-10;O+=26){const V=4+Math.random()*Math.max(4,m-20)|0;for(let b=0;b<4;b++)l.fillStyle="rgba(0,0,0,0.5)",l.fillRect(V,O+b*3,12,2)}for(let O=z+14;O<D-8;O+=34)if(Math.random()<.7){const V=3+Math.random()*Math.max(4,m-12)|0;l.fillStyle=Math.random()<.6?y.win2:y.win,l.globalAlpha=.8,l.fillRect(V,O,7,5),l.globalAlpha=1}l.fillStyle="#0a0808",l.fillRect(0,D,m,L);for(let O=0;O<m;O+=6)l.fillStyle=O/6%2?"#e6c02a":"#141414",l.fillRect(O,D+L-4,6,3);l.fillStyle="#ff2b4c",l.globalAlpha=.8;for(let O=z+8;O<D;O+=40)l.fillRect(m-4,O,2,2);l.globalAlpha=1}else if(E===4){for(let I=z;I<D-8;I+=8){l.fillStyle="rgba(0,0,0,0.4)",l.fillRect(0,I+8-1,m,1);for(let X=2;X<m-4;X+=4)Math.random()<.18&&(l.fillStyle=y.win,l.fillRect(X,I+2,3,4))}const V=p*.22|0,b=p*.4|0,B=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0];if(l.fillStyle="#0b0518",l.fillRect(1,V,m-2,b),l.strokeStyle=B,l.lineWidth=1,l.strokeRect(1.5,V+.5,m-3,b-1),Math.random()<.5){l.fillStyle="#ff9a3c",l.beginPath(),l.arc(m/2,V+b*.42,Math.min(m,b)*.3,0,7),l.fill(),l.fillStyle="#0b0518";for(let I=0;I<4;I++)l.fillRect(2,V+b*.42+I*4,m-4,2);l.fillStyle=B,l.font="8px monospace",l.textBaseline="top",l.fillText(Ye[Math.random()*Ye.length|0],3,V+b-11)}else for(let I=V+4;I<V+b-8;I+=9)for(let X=4;X<m-8;X+=8)Math.random()<.75&&(l.fillStyle=Math.random()<.6?B:"#ffd24a",l.fillRect(X,I,5,5),Math.random()<.5&&l.fillRect(X+2,I+5,2,2));l.fillStyle="#05030c",l.fillRect(0,D,m,L);for(let I=1;I<m-3;){const X=4+(Math.random()*8|0);l.fillStyle=y.shop[Math.random()*y.shop.length|0],l.globalAlpha=.75,l.fillRect(I,D+2,Math.min(X,m-I-2),L-4),l.globalAlpha=1,I+=X+2+(Math.random()*4|0)}}else if(E===6){l.fillStyle="#070b18",l.fillRect(0,0,m,p),l.globalAlpha=.3,l.strokeStyle="#2af0ff",l.lineWidth=1;for(let O=0;O<p;O+=8)l.beginPath(),l.moveTo(0,O+.5),l.lineTo(m,O+.5),l.stroke();for(let O=0;O<m;O+=8)l.beginPath(),l.moveTo(O+.5,0),l.lineTo(O+.5,p),l.stroke();l.globalAlpha=1;for(let O=0;O<p/12;O++){const V=(Math.random()*(m/8)|0)*8+1,b=(Math.random()*(p/8)|0)*8+1;l.fillStyle=Math.random()<.7?"#2af0ff":"#ff2bd6",l.globalAlpha=.45+Math.random()*.45,l.fillRect(V,b,6,6),l.globalAlpha=1}l.fillStyle="#05030c",l.fillRect(0,D,m,L);for(let O=1;O<m-3;){const V=4+(Math.random()*7|0);l.fillStyle=y.shop[Math.random()*y.shop.length|0],l.globalAlpha=.75,l.fillRect(O,D+2,Math.min(V,m-O-2),L-4),l.globalAlpha=1,O+=V+2+(Math.random()*4|0)}}else if(E===7){l.fillStyle="#05060e",l.fillRect(0,0,m,p);for(let b=0;b<m;b+=4)l.fillStyle="rgba(255,255,255,0.025)",l.fillRect(b,0,1,p);l.fillStyle=y.acc,l.globalAlpha=.8,l.fillRect(m*.5|0,z,1,p-z-L),l.globalAlpha=1;const O=p*.2|0,V=Math.max(6,Math.min(m*.28,20))|0;l.strokeStyle=y.acc,l.lineWidth=2,l.beginPath(),l.arc(m/2,O,V,0,7),l.stroke(),Math.random()<.5&&(l.fillStyle=y.acc,l.globalAlpha=.7,l.fillRect(m/2-V*.4,O-1.5,V*.8,3),l.globalAlpha=1);for(let b=z;b<D;b+=10)Math.random()<.14&&(l.fillStyle=y.win2,l.globalAlpha=.45,l.fillRect(2,b,m-4,1),l.globalAlpha=1);l.fillStyle="#04040a",l.fillRect(0,D,m,L),l.fillStyle=y.acc,l.globalAlpha=.8,l.fillRect(m/2-2,D+2,4,L-4),l.globalAlpha=1}else if(E===8){for(let O=z;O<D;O+=3)l.fillStyle=(O/3|0)%2?"#ffd24a":"#ff2bd6",l.fillRect(1,O,2,2),l.fillRect(m-3,O,2,2);for(let O=z+6;O<D-14;O+=18+(Math.random()*10|0)){const V=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.random()*4|0];l.fillStyle="#0a0512",l.fillRect(4,O,m-8,10),l.strokeStyle=V,l.lineWidth=1,l.strokeRect(4.5,O+.5,m-9,9),l.fillStyle=V,l.font="8px monospace",l.textBaseline="top",l.fillText(Ye[Math.random()*Ye.length|0],7,O+1),l.fillStyle="rgba(0,0,0,0.55)";for(let b=O+12;b<Math.min(O+17,D-2);b+=5)for(let B=4;B<m-6;B+=4)l.fillRect(B,b,3,3)}l.fillStyle="#05030c",l.fillRect(0,D,m,L);for(let O=1;O<m-3;){const V=3+(Math.random()*6|0);l.fillStyle=y.shop[Math.random()*y.shop.length|0],l.globalAlpha=.85,l.fillRect(O,D+2,Math.min(V,m-O-2),L-4),l.globalAlpha=1,O+=V+1+(Math.random()*3|0)}}else if(E===9){l.fillStyle="#0a0616",l.fillRect(0,0,m,p);const O=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0],V=Math.random()*3|0;if(V===0){l.fillStyle="#1a1030",l.fillRect(2,2,m-4,p-4);const b=p*.4;l.fillStyle="#ffd8c0",l.fillRect(m*.25,b-p*.12,m*.5,p*.24),l.fillStyle="#141024",l.fillRect(m*.2,b-p*.18,m*.6,p*.08),l.fillRect(m*.2,b-p*.16,m*.12,p*.2),l.fillRect(m*.68,b-p*.16,m*.12,p*.2),l.fillStyle="#ff2b4c",l.beginPath(),l.arc(m*.5,b+p*.02,m*.05,0,7),l.fill(),l.fillStyle="#141024",l.fillRect(m*.34,b-p*.02,m*.08,2),l.fillRect(m*.58,b-p*.02,m*.08,2),l.fillStyle=O,l.font="8px monospace",l.textBaseline="top",l.fillText(Ye[Math.random()*Ye.length|0],4,p*.72|0)}else if(V===1){l.fillStyle="#101a3a",l.fillRect(2,2,m-4,p-4);const b=p*.38,B=m*.18;l.fillStyle="#e8f0ff",l.beginPath(),l.ellipse(m/2,b,m*.32,B,0,0,7),l.fill(),l.fillStyle=O,l.beginPath(),l.arc(m/2,b,B*.6,0,7),l.fill(),l.fillStyle="#08060e",l.beginPath(),l.arc(m/2,b,B*.28,0,7),l.fill()}else{for(let b=4;b<p-4;b+=5){l.fillStyle=Math.random()<.5?O:"#7b3ff2",l.globalAlpha=.4+Math.random()*.5;const B=Math.sin(b*.15)*m*.2+m*.3|0;l.fillRect(4,b,B+(m*.2|0),2)}l.globalAlpha=1}l.fillStyle="rgba(0,0,0,0.35)";for(let b=2;b<p;b+=3)l.fillRect(2,b,m-4,1);l.strokeStyle=O,l.lineWidth=1,l.strokeRect(1.5,1.5,m-3,p-3),l.fillStyle="#05030c",l.fillRect(0,D,m,L)}else if(E===10){l.fillStyle="#141230",l.fillRect(0,0,m,p);for(let B=0;B<p;B+=14+(Math.random()*10|0))for(let I=0;I<m;I+=12+(Math.random()*12|0))l.fillStyle="rgba(255,255,255,"+(.02+Math.random()*.04).toFixed(3)+")",l.fillRect(I,B,10+(Math.random()*12|0),12+(Math.random()*10|0));const O="#2ab4ff",V="#ff2bd6",b=(B,I)=>{l.strokeStyle=I,l.lineWidth=1.5,l.globalAlpha=.95,l.beginPath();let X=2+Math.random()*8;for(l.moveTo(B+.5,X);X<p-10;){const se=14+Math.random()*30;if(X=Math.min(p-6,X+se),l.lineTo(B+.5,X),Math.random()<.55){const fe=(Math.random()<.5?-1:1)*(4+Math.random()*10)|0;B=Math.max(3,Math.min(m-3,B+fe)),l.lineTo(B+.5,X)}}l.stroke(),l.globalAlpha=1};b(3+Math.random()*m*.25|0,O),b(6+Math.random()*m*.2|0,O),b(m-4-Math.random()*m*.25|0,V),b(m-8-Math.random()*m*.2|0,V);for(let B=0;B<3;B++){const I=3+Math.random()*(m-10)|0;l.fillStyle="#0d0b22",l.fillRect(I,4,3,p-8),l.fillStyle="rgba(255,255,255,0.12)",l.fillRect(I+2,4,1,p-8)}if(m>30){const B=4+Math.random()*(m-26)|0,I=p*.3+Math.random()*p*.3|0;l.fillStyle="#0c0a20",l.fillRect(B,I,22,22),l.fillStyle="#050410";for(const X of[[5,5],[16,5],[5,16],[16,16]])l.beginPath(),l.arc(B+X[0],I+X[1],4,0,7),l.fill()}{const B=4+Math.random()*Math.max(6,m-20)|0,I=p*.15+Math.random()*p*.5|0;for(let X=0;X<5;X++)l.fillStyle="#080618",l.fillRect(B,I+X*3,16,2)}for(let B=0;B<3+(p/90|0);B++){const I=4+Math.random()*Math.max(6,m-20)|0,X=6+Math.random()*Math.max(10,p-30)|0;l.fillStyle="#0a0816",l.fillRect(I-1,X-1,14,7);for(let se=0;se<3;se++)l.fillStyle=Math.random()<.85?"#ffb742":"#3a2c14",l.fillRect(I+se*4,X,3,5)}for(let B=0;B<8;B++)l.fillStyle=Math.random()<.5?O:V,l.globalAlpha=.9,l.fillRect(3+Math.random()*(m-6)|0,3+Math.random()*(p-8)|0,2,1),l.globalAlpha=1;l.fillStyle="#0a0a1a",l.fillRect(m*.25,D-2,m*.5,L+2);for(let B=D+1;B<p-3;B+=3)l.fillStyle="rgba(255,255,255,0.06)",l.fillRect(m*.27,B,m*.46,1);for(let B=0;B<m;B+=6)l.fillStyle=(B/6|0)%2?"#e6c02a":"#141414",l.fillRect(B,p-3,6,2)}else{let O=0;const V=["rgba(255,255,255,0.05)","rgba(0,0,0,0.22)","rgba(122,63,242,0.10)","rgba(255,154,60,0.07)","rgba(42,240,255,0.06)"];for(;O<p;){const b=Math.min(p-O,40+(Math.random()*90|0));l.fillStyle=V[Math.random()*V.length|0],l.fillRect(0,O,m,b);const B=6+(Math.random()*3|0),I=3+(Math.random()*2|0),X=.2+Math.random()*.35;for(let se=O+3;se<O+b-B;se+=B)for(let fe=2;fe<m-4;fe+=I+2)l.fillStyle=Math.random()<X?Math.random()<.75?y.win:y.win2:"rgba(0,0,0,0.5)",l.fillRect(fe,se,I,B-3);l.fillStyle="rgba(0,0,0,0.6)",l.fillRect(0,O+b-1,m,1),O+=b}l.fillStyle="#05030c",l.fillRect(0,D,m,L);for(let b=1;b<m-3;){const B=3+(Math.random()*7|0);l.fillStyle=y.shop[Math.random()*y.shop.length|0],l.globalAlpha=.8,l.fillRect(b,D+2,Math.min(B,m-b-2),L-4),l.globalAlpha=1,b+=B+1+(Math.random()*4|0)}}l.fillStyle="rgba(0,0,0,0.4)",l.fillRect(0,0,1,p),l.fillRect(m-1,0,1,p)}function ce(l,m,p,y,E){const L=Math.min(16,p*.08|0)+6,z=p-L,D=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e","#9a6aff"],O=D[Math.random()*D.length|0],V=()=>{l.fillStyle="#05030c",l.fillRect(0,z,m,L);for(let b=1;b<m-3;){const B=4+(Math.random()*7|0);l.fillStyle=y.shop[Math.random()*y.shop.length|0],l.globalAlpha=.8,l.fillRect(b,z+2,Math.min(B,m-b-2),L-4),l.globalAlpha=1,b+=B+2+(Math.random()*3|0)}};if(l.fillStyle=y.base,l.fillRect(0,0,m,p),E===11){for(let b=4,B=0;b<z-6;b+=7,B^=1)for(let I=2+B*4;I<m-6;I+=8){const X=Math.random()<.2;l.fillStyle=X?O:"rgba(0,0,0,0.45)",l.globalAlpha=X?.85:1,l.beginPath(),l.moveTo(I+3,b),l.lineTo(I+6,b+2),l.lineTo(I+6,b+5),l.lineTo(I+3,b+7),l.lineTo(I,b+5),l.lineTo(I,b+2),l.closePath(),l.fill(),l.globalAlpha=1}V()}else if(E===12){l.fillStyle="#040a08",l.fillRect(0,0,m,p);for(let b=3;b<m-2;b+=5){let B=Math.random()*p|0;const I=p*.2+Math.random()*p*.4|0;for(let X=0;X<I;X+=4){const se=(B+X)%p;l.fillStyle=X<8?"#d8ffe8":"#3adc7a",l.globalAlpha=Math.max(.15,1-X/I),l.fillRect(b,se,2,3)}l.globalAlpha=1}V()}else if(E===13){l.fillStyle="#1c1a22",l.fillRect(0,0,m,p);for(let b=4;b<z-10;b+=12)for(let B=3;B<m-8;B+=10)l.fillStyle="#0a090f",l.fillRect(B,b,8,9),l.fillStyle="#26232e",l.fillRect(B,b,8,1),l.fillRect(B,b,1,9),Math.random()<.22&&(l.fillStyle="#ffd24a",l.globalAlpha=.75,l.fillRect(B+2,b+3,3,3),l.globalAlpha=1);l.fillStyle="rgba(0,0,0,0.3)";for(let b=0;b<5;b++)l.fillRect(Math.random()*m|0,0,2,p);V()}else if(E===14){for(let b=2;b<z-2;b+=4)l.fillStyle="#0c0a18",l.fillRect(1,b,m-2,3),Math.random()<.3&&(l.fillStyle=Math.random()<.6?"#ffb046":O,l.globalAlpha=.5,l.fillRect(1,b+3,m-2,1),l.globalAlpha=1);V()}else if(E===15){l.fillStyle="#08060e",l.fillRect(0,0,m,p);for(let b=3;b<z-8;b+=9)for(let B=2;B<m-8;B+=10){const I=D[Math.random()*D.length|0];l.fillStyle="#020204",l.fillRect(B,b,9,7),l.fillStyle=I,l.globalAlpha=.25+Math.random()*.6,l.fillRect(B+1,b+1,7,5),l.globalAlpha=1,Math.random()<.4&&(l.fillStyle="rgba(255,255,255,0.5)",l.fillRect(B+1,b+1+(Math.random()*4|0),7,1))}V()}else if(E===16){for(let b=0,B=0;b<z;b+=9,B^=1)for(let I=-6;I<m;I+=12){const X=Math.random();l.fillStyle=X<.12?O:X<.5?"#141126":"#0d0b1c",l.globalAlpha=X<.12?.6:1,l.beginPath(),(B^I/12&1)%2?(l.moveTo(I+B*6,b),l.lineTo(I+12+B*6,b),l.lineTo(I+6+B*6,b+9)):(l.moveTo(I+6+B*6,b),l.lineTo(I+12+B*6,b+9),l.lineTo(I+B*6,b+9)),l.closePath(),l.fill(),l.globalAlpha=1}l.strokeStyle="rgba(255,255,255,0.08)";for(let b=0;b<z;b+=9)l.beginPath(),l.moveTo(0,b+.5),l.lineTo(m,b+.5),l.stroke();V()}else if(E===17){for(let b=6;b<z-14;b+=16){l.fillStyle="#221018",l.fillRect(0,b,m,3),l.fillStyle="#160a10",l.fillRect(2,b+3,m-4,10);for(let B=4;B<m-4;B+=6)Math.random()<.55&&(l.fillStyle="#ffb046",l.globalAlpha=.85,l.fillRect(B,b+6,3,4),l.globalAlpha=1);l.fillStyle="#ff5a3c",l.globalAlpha=.9;for(let B=3;B<m-3;B+=10)l.fillRect(B,b+2,2,2);l.globalAlpha=1}V()}else if(E===18){l.fillStyle="#0e0a16",l.fillRect(0,0,m,p);const b=14+(Math.random()*10|0);for(let B=0;B<b;B++){const I=Math.random()*(m-10)|0,X=Math.random()*(z-12)|0,se=6+Math.random()*10|0,fe=5+Math.random()*9|0,Le=D[Math.random()*D.length|0];l.fillStyle="#0a0512",l.fillRect(I-1,X-1,se+2,fe+2),l.fillStyle=Le,l.globalAlpha=.55+Math.random()*.35,l.fillRect(I,X,se,fe),l.globalAlpha=1,l.fillStyle="rgba(0,0,0,0.5)";for(let Ne=X+2;Ne<X+fe-1;Ne+=3)l.fillRect(I+1,Ne,se-2,1)}V()}else if(E===19){l.fillStyle="#100d18",l.fillRect(0,0,m,p);const b=Math.max(4,m*.16|0),B=m-b>>1;l.fillStyle=O,l.globalAlpha=.9,l.fillRect(B,4,b,z-8),l.globalAlpha=1,l.fillStyle="rgba(255,255,255,0.6)",l.fillRect(B+(b/2|0),4,1,z-8);for(let I=8;I<z-6;I+=14)l.fillStyle="#080612",l.fillRect(B-2,I,b+4,2);for(let I=6;I<z-8;I+=18)l.fillStyle="#e6c02a",l.globalAlpha=.5,l.fillRect(3,I,4,2),l.fillRect(5,I+2,4,2),l.fillRect(m-7,I,4,2),l.fillRect(m-9,I+2,4,2),l.globalAlpha=1;V()}else if(E===20){l.fillStyle="#141018",l.fillRect(0,0,m,p);for(let b=3;b<m-2;b+=6)l.fillStyle=b/6%3===0?"#c8a24a":"#3a2f22",l.globalAlpha=b/6%3===0?.8:1,l.fillRect(b,6,2,z-10),l.globalAlpha=1;for(let b=10;b<z-6;b+=24)l.fillStyle="#c8a24a",l.globalAlpha=.4,l.fillRect(2,b,m-4,1),l.globalAlpha=1;l.fillStyle="#ffd24a",l.globalAlpha=.85;for(let b=5;b<m-4;b+=12)Math.random()<.5&&l.fillRect(b,8+Math.random()*(z-20)|0,2,4);l.globalAlpha=1,V()}else if(E===21){l.fillStyle="#0a0812",l.fillRect(0,0,m,p);for(let b=4;b<z;b+=8)for(let B=3;B<m-4;B+=5)Math.random()<.25&&(l.fillStyle="#ffcf5e",l.globalAlpha=.6,l.fillRect(B,b+2,3,3),l.globalAlpha=1);l.strokeStyle="#2a2438",l.lineWidth=1;for(let b=1;b<m;b+=6)l.beginPath(),l.moveTo(b+.5,0),l.lineTo(b+.5,z),l.stroke();for(let b=1;b<z;b+=6)l.beginPath(),l.moveTo(0,b+.5),l.lineTo(m,b+.5),l.stroke();V()}else if(E===22){l.fillStyle="#12101e",l.fillRect(0,0,m,p);for(let b=6;b<z-4;b+=7)for(let B=5;B<m-4;B+=7){const I=Math.random()<.4;l.fillStyle=I?Math.random()<.8?"#ffd24a":"#7adcff":"#060410",l.globalAlpha=I?.9:1,l.beginPath(),l.arc(B,b,2.2,0,7),l.fill(),l.globalAlpha=1}V()}else if(E===23){l.fillStyle="#0c1018",l.fillRect(0,0,m,p);for(let b=4;b<z-8;b+=10)for(let B=2;B<m-10;B+=11)l.fillStyle="#0a1c33",l.beginPath(),l.moveTo(B,b+7),l.lineTo(B+9,b+5),l.lineTo(B+9,b),l.lineTo(B,b+2),l.closePath(),l.fill(),l.strokeStyle="rgba(120,190,255,0.35)",l.stroke(),Math.random()<.08&&(l.fillStyle="#04070c",l.fillRect(B+2,b+1,5,4));V()}else if(E===24){l.fillStyle="#100e16",l.fillRect(0,0,m,p);for(let b=4;b<z-6;b+=8)for(let B=3;B<m-5;B+=6){const I=Math.random();l.fillStyle=I<.1?"#ffcf5e":I<.35?"#04030a":"#0a0814",l.globalAlpha=I<.1?.8:1,l.fillRect(B,b,4,5),l.globalAlpha=1,I>=.1&&I<.2&&(l.fillStyle="#1c1826",l.beginPath(),l.moveTo(B,b),l.lineTo(B+4,b+5),l.stroke())}for(let b=0;b<3;b++){const B=D[Math.random()*D.length|0],I=z*.2+Math.random()*z*.6|0;l.strokeStyle=B,l.lineWidth=2,l.globalAlpha=.85,l.beginPath();let X=2+Math.random()*m*.3|0;l.moveTo(X,I);for(let se=0;se<4;se++)X+=4+Math.random()*8,l.lineTo(X,I+(Math.random()-.5)*8|0);l.stroke(),l.globalAlpha=1,l.lineWidth=1}V()}else if(E===25){l.fillStyle="#062a30",l.fillRect(0,0,m,p);const b=l.createLinearGradient(0,0,0,p);b.addColorStop(0,"rgba(20,220,210,0.25)"),b.addColorStop(1,"rgba(10,90,110,0.4)"),l.fillStyle=b,l.fillRect(0,0,m,p);for(let B=8;B<z;B+=9){l.fillStyle="rgba(0,0,0,0.5)",l.fillRect(0,B,m,2);for(let I=0;I<3;I++)Math.random()<.5&&(l.fillStyle="rgba(0,0,0,0.55)",l.fillRect(Math.random()*(m-8)|0,B-5,3+Math.random()*6|0,4))}l.fillStyle="rgba(255,255,255,0.25)";for(let B=0;B<10;B++)l.fillRect(Math.random()*m|0,Math.random()*z|0,1,1);V()}else if(E===26){l.fillStyle="#12101c",l.fillRect(0,0,m,p);for(let b=8;b<z-10;b+=13)for(let B=7;B<m-6;B+=13)l.fillStyle="#0a0814",l.fillRect(B-6,b-6,12,12),l.fillStyle="#050308",l.beginPath(),l.arc(B,b,4.5,0,7),l.fill(),l.strokeStyle="#221e30",l.beginPath(),l.moveTo(B-4,b),l.lineTo(B+4,b),l.moveTo(B,b-4),l.lineTo(B,b+4),l.stroke(),Math.random()<.15&&(l.fillStyle=O,l.globalAlpha=.7,l.fillRect(B-5,b+4,10,1),l.globalAlpha=1);V()}else if(E===27){l.fillStyle="#100d1a",l.fillRect(0,0,m,p);for(let b=6;b<z-6;b+=9)for(let B=4;B<m-6;B+=7)Math.random()<.3&&(l.fillStyle="#ffcf5e",l.globalAlpha=.55,l.fillRect(B,b,3,4),l.globalAlpha=1);l.strokeStyle="#060410",l.lineWidth=1.5;for(let b=0;b<7;b++){const B=Math.random()*z*.8|0,I=4+Math.random()*8;l.beginPath(),l.moveTo(0,B),l.quadraticCurveTo(m/2,B+I,m,B+(Math.random()-.5)*8|0),l.stroke()}for(let b=0;b<4;b++){const B=Math.random()*(m-8)|0,I=Math.random()*(z-10)|0;l.fillStyle="#1a1626",l.fillRect(B,I,6,8),l.fillStyle=Math.random()<.5?"#ff2b4c":"#2af0ff",l.fillRect(B+2,I+2,2,1)}V()}else if(E===28){l.fillStyle="#0a0814",l.fillRect(0,0,m,p);const b=Math.max(8,m*.4|0),B=m-b>>1;l.fillStyle="#050208",l.fillRect(B-1,3,b+2,z-6);for(let I=5;I<z-8;I+=8){const X=D[Math.random()*D.length|0];l.fillStyle=X,l.globalAlpha=.55+Math.random()*.35,l.fillRect(B,I,b,6),l.globalAlpha=1,l.fillStyle="rgba(0,0,0,0.4)",l.fillRect(B,I+2,b,1)}l.strokeStyle=O,l.strokeRect(B-1.5,2.5,b+3,z-5),V()}else if(E===29){l.fillStyle="#070a0c",l.fillRect(0,0,m,p);for(let b=2;b<m-1;b+=3){const B=Math.random()<.7?"#4ef0b0":D[Math.random()*D.length|0];l.fillStyle=B,l.globalAlpha=.25+Math.random()*.55;const I=Math.random()*10|0,X=z-(Math.random()*10|0);l.fillRect(b,I,1,X-I),l.globalAlpha=1;for(let se=I+6;se<X;se+=8+(Math.random()*8|0))l.fillStyle="rgba(0,0,0,0.6)",l.fillRect(b,se,1,2)}V()}else{l.fillStyle="#141118",l.fillRect(0,0,m,p);for(let b=-m;b<z+m;b+=14)l.fillStyle=(b/14|0)%2?"#1c1822":"#0e0b12",l.beginPath(),l.moveTo(0,b),l.lineTo(m,b-m*.4),l.lineTo(m,b-m*.4+8),l.lineTo(0,b+8),l.closePath(),l.fill();l.fillStyle=O,l.globalAlpha=.8;for(let b=10;b<z-6;b+=26)l.fillRect(2,b,m-4,2);l.globalAlpha=1;for(let b=0;b<2;b++){const B=4+Math.random()*(m-24)|0,I=z*.3+Math.random()*z*.4|0;l.fillStyle="#0a0a14",l.fillRect(B,I,16,12);for(let X=I+2;X<I+11;X+=2)l.fillStyle="rgba(255,255,255,0.06)",l.fillRect(B+1,X,14,1)}V()}l.fillStyle="rgba(0,0,0,0.4)",l.fillRect(0,0,1,p),l.fillRect(m-1,0,1,p)}function ge(l,m,p){if(Math.random()<.38){const y=["#4ef0e0","#2af0ff","#c0ff5e","#ff2bd6"][Math.random()*4|0];l.strokeStyle=y,l.fillStyle=y,l.lineWidth=1,l.globalAlpha=.85;const E=2+(Math.random()*4|0);for(let L=0;L<E;L++){let z=4+Math.random()*(m-8)|0,D=0;for(l.beginPath(),l.moveTo(z+.5,0);D<p-8;){const O=8+(Math.random()*30|0);if(D=Math.min(p-4,D+O),l.lineTo(z+.5,D+.5),Math.random()<.5&&D<p-12){const V=(Math.random()<.5?-1:1)*(3+Math.random()*8)|0;z=Math.max(3,Math.min(m-4,z+V)),l.lineTo(z+.5,D+.5)}}l.stroke(),l.fillRect(z-1,D-1,3,3)}l.globalAlpha=1}if(Math.random()<.4){const y=3+(Math.random()*6|0);for(let E=0;E<y;E++){const L=2+Math.random()*Math.max(4,m-12)|0,z=6+Math.random()*Math.max(8,p-24)|0,D=4+Math.random()*8|0,O=3+Math.random()*5|0,V=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.random()*5|0];l.fillStyle="#0a0616",l.fillRect(L-1,z-1,D+2,O+2),l.fillStyle=V,l.globalAlpha=.8,l.fillRect(L,z,D,O),l.globalAlpha=1,l.fillStyle="rgba(255,255,255,0.6)",l.fillRect(L+1,z+1,Math.max(1,D*.4|0),1)}}}function _e(l,m,p,y){const E=Me[Math.floor(Math.random()*Me.length)],L=Math.random(),z=p!==void 0?p:Math.random()<.6?L<.13?0:L<.25?1:L<.39?2:L<.47?3:L<.54?4:L<.6?5:L<.68?6:L<.76?7:L<.84?8:L<.92?9:10:11+(Math.random()*20|0),D=Math.max(24,Math.min(160,Math.round(l*2)))|0,O=Math.max(48,Math.min(1024,Math.round(m*2)))|0,V=W(D,O,b=>{if(z!==0){he(b,D,O,E,z),ge(b,D,O);return}b.fillStyle=E.base,b.fillRect(0,0,D,O);const B=8+(Math.random()*6|0);for(let Le=0;Le<D;Le+=B)b.fillStyle=E.mull,b.fillRect(Le,0,1,O);b.fillStyle="rgba(255,255,255,0.03)";for(let Le=0;Le<D;Le+=B*2)b.fillRect(Le,0,B,O);const I=8,X=Math.min(16,O*.08|0)+6,se=6+(Math.random()*6|0);for(let Le=se;Le<O-X-I;Le+=I){b.fillStyle=E.slab,b.fillRect(0,Le+I-1,D,1);const Ne=Math.random();let Se=-1,Pe=-1;if(Ne<.14)Se=0,Pe=D;else if(Ne<.62){const bt=Math.random()*D|0;Se=bt,Pe=bt+(D*.15+Math.random()*D*.3|0)}for(let bt=0;bt<D-2;bt+=B)for(let Pt=bt+2;Pt<bt+B-1&&Pt<D-3;Pt+=4){const mn=Pt>=Se&&Pt<=Pe&&Math.random()<.9;mn?b.fillStyle=Math.random()<.8?E.win:Math.random()<.85?E.win2:E.acc:b.fillStyle="rgba(0,0,0,0.55)",b.fillRect(Pt,Le+2,3,I-4),mn&&Math.random()<.35&&(b.fillStyle="rgba(255,255,255,0.55)",b.fillRect(Pt+1,Le+3,1,1))}}b.fillStyle="rgba(0,0,0,0.5)",b.fillRect(0,0,D,se),Math.random()<.6&&(b.fillStyle=E.acc,b.fillRect(0,0,D,1));const fe=O-X;b.fillStyle="#05030c",b.fillRect(0,fe,D,X);for(let Le=1;Le<D-3;){const Ne=4+(Math.random()*9|0);b.fillStyle=E.shop[Math.random()*E.shop.length|0],b.globalAlpha=.75,b.fillRect(Le,fe+2,Math.min(Ne,D-Le-2),X-4),b.globalAlpha=1,Le+=Ne+2+(Math.random()*4|0)}b.fillStyle="rgba(255,240,200,0.5)",b.fillRect(0,fe,D,1),b.fillStyle="rgba(0,0,0,0.4)",b.fillRect(0,0,1,O),b.fillRect(D-1,0,1,O),ge(b,D,O)});return V.wrapS=V.wrapT=Nn,y&&y>1&&(V.wrapS=Mi,V.repeat.x=y),V.minFilter=Mr,V.generateMipmaps=!0,V.anisotropy=f,new ze({map:V})}var Z=new zh().load("models/facades/cyberpunk_facade_asset/symmetrical_neon_cyberpunk_tower.png");Z.colorSpace=Ot,Z.anisotropy=f;var ue=Z.clone();ue.wrapS=Mi,ue.repeat.x=-1,ue.offset.x=1,ue.needsUpdate=!0;var Ae=[];for(const l of[Z,ue])for(const m of[16777215,16767176,13165823,15780095])Ae.push(new ze({map:l,color:m}));var we=["01_neon_cyberpunk_tower_facade","02_neon_cyberpunk_hotel_facade","03_neon_pixel_art_skyscraper_facade","04_neon_split_industrial_facade","05_neon_symmetry_cyberpunk_building_facade","06_neon_dataflow_tower_facade","07_neon_dream_cyberpunk_hotel_skyscraper","08_neon_cyberpunk_megastructure_facade","09_nexus_cyberpunk_megastructure_facade","10_cyberpunk_core_tower_tx_09","11_neon_datacore_cyberpunk_server_citywall","12_neo_terminal_cyberpunk_market_facade","13_neon_megablock_city_facade","14_nova_civic_systems_megastructure"],Ve=4,et=4,dt=512,tt=1536,xt=document.createElement("canvas");xt.width=Ve*dt,xt.height=et*tt;var K=xt.getContext("2d");K.fillStyle="#0a0820",K.fillRect(0,0,xt.width,xt.height);var Qt=new Li(xt);Qt.colorSpace=Ot,Qt.minFilter=Mr,Qt.generateMipmaps=!0,Qt.anisotropy=f;var ht=new ze({map:Qt});we.forEach((l,m)=>{const p=new Image;p.onload=()=>{K.drawImage(p,m%Ve*dt,(m/Ve|0)*tt,dt,tt),Qt.needsUpdate=!0},p.src="models/facades/cyberpunk_facades_all/"+l+".png"});var Ge=0;function Je(l,m,p){const y=m%Ve/Ve,E=1-((m/Ve|0)+1)/et,L=1/Ve,z=1/et,D=l.attributes.uv;for(let O=0;O<D.count;O++){let V=D.getX(O);p&&(V=1-V),D.setXY(O,y+V*L,E+D.getY(O)*z)}D.needsUpdate=!0}var Ye=["PUNK","VICE","TURBO","NEON","BUST","RUN","MAXX","GRID"];function _t(){const l=Math.floor(Math.random()*3);return W(48,24,m=>{const p=["#12062a","#1a0630","#08102a"][Math.floor(Math.random()*3)];m.fillStyle=p,m.fillRect(0,0,48,24);const y=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.floor(Math.random()*4)];if(l===0){m.fillStyle="#ff9a3c",m.beginPath(),m.arc(14,12,8,0,7),m.fill(),m.fillStyle=p;for(let E=0;E<3;E++)m.fillRect(4,13+E*3,20,1);m.fillStyle=y,m.fillRect(30,6,2,14);for(const E of[[-6,-2],[-4,-4],[0,-5],[4,-4],[6,-2]])m.fillRect(31+E[0],6+E[1],4,1)}else if(l===1)m.fillStyle=y,m.font="8px monospace",m.textBaseline="top",m.fillText(Ye[Math.floor(Math.random()*Ye.length)],4,3),m.fillStyle="rgba(255,255,255,0.15)",m.fillRect(0,13,48,1),m.fillStyle="#ffd24a",m.fillText(Ye[Math.floor(Math.random()*Ye.length)],12,14);else for(let E=4;E<44;E+=7){m.fillStyle=Math.random()<.5?y:"#ffd24a";for(let L=3;L<21;L+=5)Math.random()<.8&&(m.fillRect(E,L,4,3),Math.random()<.5&&m.fillRect(E+1,L+3,2,1))}m.strokeStyle=y,m.lineWidth=1,m.strokeRect(.5,.5,47,23)})}var ot=[];for(let l=0;l<24;l++)ot.push(new ze({map:_t(),transparent:!0,opacity:.92,side:Bt,depthWrite:!1}));function U(l,m){return new re(new yt(l,m),ot[Math.random()*ot.length|0])}function A(){return W(8,48,l=>{l.fillStyle="#0c0620",l.fillRect(0,0,8,48);const m=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.floor(Math.random()*5)];l.strokeStyle=m,l.strokeRect(.5,.5,7,47),l.fillStyle=m;for(let p=3;p<45;p+=6)Math.random()<.85&&(l.fillRect(2,p,4,3),Math.random()<.5&&(l.fillStyle="#ffffff",l.fillRect(3,p+1,1,1),l.fillStyle=m))})}var ee=[];for(let l=0;l<16;l++)ee.push(new ze({map:A(),transparent:!0,side:Bt,depthWrite:!1}));var ve={};function oe(l,m){const p=l+"_"+m;return ve[p]||(ve[p]=new ze({color:l,transparent:!0,opacity:m,side:Bt,depthWrite:!1})),ve[p]}var pe=new ze({color:16722764}),qe=new ze({color:2758726}),Ee=new ze({color:16722748}),Ie=[];for(let l=0;l<64;l++)Ie.push(_e(26+Math.random()*22,80+Math.random()*280));var ye=[];for(let l=0;l<16;l++)ye.push(_e(30,90+Math.random()*260,void 0,3));var at=[];for(let l=0;l<12;l++)at.push(_e(90,500+Math.random()*400,[1,0,4,15,28,19][l%6]));var de=new ut,Wt=new ut;function gt(l,m,p){const y=l.index.array,E=l.attributes.position,L=l.attributes.uv,z=l.attributes.normal,D=new Float32Array(p*3),O=L?new Float32Array(p*2):null,V=z?new Float32Array(p*3):null;for(let B=0;B<p;B++){const I=y[m+B];D[B*3]=E.getX(I),D[B*3+1]=E.getY(I),D[B*3+2]=E.getZ(I),O&&(O[B*2]=L.getX(I),O[B*2+1]=L.getY(I)),V&&(V[B*3]=z.getX(I),V[B*3+1]=z.getY(I),V[B*3+2]=z.getZ(I))}const b=new Zt;return b.setAttribute("position",new Jt(D,3)),O&&b.setAttribute("uv",new Jt(O,2)),V&&b.setAttribute("normal",new Jt(V,3)),b}function Ze(l){l.updateMatrixWorld(!0),de.copy(l.matrixWorld).invert();const m=new Map,p=new Map,y=new Map,E=[];l.traverse(D=>{if(D===l||!D.geometry||!D.geometry.isBufferGeometry)return;if(D.isMesh&&Array.isArray(D.material)){if(!D.geometry.index||!D.geometry.groups||!D.geometry.groups.length)return;Wt.multiplyMatrices(de,D.matrixWorld);for(const b of D.geometry.groups){const B=D.material[b.materialIndex];if(!B)continue;let I=y.get(B);I||(I={geos:[],srcs:[]},y.set(B,I)),I.geos.push(gt(D.geometry,b.start,b.count).applyMatrix4(Wt)),I.srcs.push(D)}E.push(D);return}const O=D.isMesh?m:D.isLineSegments?p:null;if(!O)return;let V=O.get(D.material);V||(V={geos:[],origs:[]},O.set(D.material,V)),Wt.multiplyMatrices(de,D.matrixWorld),V.geos.push(D.geometry.clone().applyMatrix4(Wt)),V.origs.push(D)});const L=(D,O)=>{for(const[V,b]of D){if(b.origs.length<2){b.geos.forEach(I=>I.dispose());continue}const B=Wn(b.geos);if(!B){b.geos.forEach(I=>I.dispose());continue}for(const I of b.origs)I.parent&&I.parent.remove(I);b.geos.forEach(I=>I.dispose()),l.add(new O(B,V))}};L(m,re),L(p,Qn);const z=new Set;for(const[D,O]of y){const V=O.geos.length>1?Wn(O.geos):O.geos[0];if(V)l.add(new re(V,D)),O.geos.length>1&&O.geos.forEach(b=>b.dispose());else{O.geos.forEach(b=>b.dispose());for(const b of O.srcs)z.add(b)}}for(const D of E)!z.has(D)&&D.parent&&D.parent.remove(D);return l.traverse(D=>{D!==l&&(D.matrixAutoUpdate=!1,D.updateMatrix())}),l}var Ue=W(32,64,l=>{l.fillStyle="#160a2e",l.fillRect(0,0,32,64),l.fillStyle="rgba(255,255,255,0.04)";for(let m=0;m<120;m++)l.fillRect(Math.random()*32|0,Math.random()*64|0,1,1);l.fillStyle="rgba(0,0,0,0.35)",l.fillRect(0,0,2,64),l.fillRect(30,0,2,64),l.fillStyle="rgba(122,63,242,0.25)",l.fillRect(4,0,1,64),l.fillRect(27,0,1,64)});Ue.repeat.set(1,60);var Oe=new re(new yt(74,9e3),new ze({map:Ue}));Oe.rotation.x=-Math.PI/2,Oe.position.set(0,-29.6,-1500),c.add(Oe);function mt(l,m){const p=new re(new Be(1.4,.2,9e3),new ze({color:m}));return p.position.set(l,-29,-1500),p}c.add(mt(-36,n)),c.add(mt(36,n));function Ut(){const l=document.createElement("canvas");l.width=16,l.height=256;const m=l.getContext("2d"),p=m.createLinearGradient(0,0,0,256);return p.addColorStop(0,"rgba(255,170,70,0.38)"),p.addColorStop(.35,"rgba(255,110,120,0.2)"),p.addColorStop(.7,"rgba(255,70,150,0.07)"),p.addColorStop(1,"rgba(255,60,160,0)"),m.fillStyle=p,m.fillRect(0,0,16,256),new Li(l)}var vt=new re(new yt(46,1500),new ze({map:Ut(),transparent:!0,opacity:.6,blending:un,depthWrite:!1}));vt.rotation.x=-Math.PI/2,vt.position.set(0,-29.2,-820),c.add(vt);var Lt=[];for(let l=0;l<70;l++){const m=new Be(1.8,.2,16);m.translate(0,-29,-l*46),Lt.push(m)}var xe=new re(Wn(Lt),new ze({color:r}));Lt.forEach(l=>l.dispose()),c.add(xe);var H=W(128,128,l=>{l.fillStyle="#0c0618",l.fillRect(0,0,128,128),l.fillStyle="#140a24",l.fillRect(0,0,128,18),l.fillRect(0,0,18,128),l.fillStyle="#22123a",l.fillRect(0,18,128,2),l.fillRect(18,0,2,128),l.fillStyle="#1a0e2c";for(let m=0;m<7;m++){const p=24+Math.random()*90|0,y=24+Math.random()*90|0;l.fillRect(p,y,6+Math.random()*16|0,5+Math.random()*12|0)}l.fillStyle="#3a1f5e";for(let m=0;m<40;m++)l.fillRect(Math.random()*128|0,Math.random()*128|0,1,1);l.globalAlpha=.5,l.fillStyle="#ffd24a";for(let m=6;m<128;m+=14)l.fillRect(m,8,5,1),l.fillRect(8,m,1,5);l.globalAlpha=.25,l.fillStyle="#2af0ff",l.fillRect(0,17,128,1),l.fillRect(17,0,1,128),l.globalAlpha=1});H.repeat.set(16,16),H.minFilter=yi,H.generateMipmaps=!0,H.anisotropy=f,Ue.minFilter=yi,Ue.generateMipmaps=!0,Ue.anisotropy=f;var Te=new re(new yt(9e3,9e3),new ze({map:H}));Te.rotation.x=-Math.PI/2,Te.position.set(0,-30.2,-1500),c.add(Te);var Re=9e3/16,je=[],We=[];for(let l=0;l<66;l++)for(const m of[-1,1]){const p=-l*90,y=m*40,E=new Be(.8,14,.8);E.translate(y,-23,p),je.push(E);const L=new Be(5,.7,.7);L.translate(y-m*2.5,-16,p),je.push(L);const z=new Be(2.6,.5,1);z.translate(y-m*4,-30+13.6,p),We.push(z)}var Rt=new re(Wn(je),new ze({color:1313318}));je.forEach(l=>l.dispose());var zt=new re(Wn(We),new ze({color:16757866}));We.forEach(l=>l.dispose()),c.add(Rt),c.add(zt);var en=[];for(let l=0;l<22;l++){const m=Math.random()<.5,p=new re(new yt(1.6,10),new ze({color:m?16769184:16722764,transparent:!0,opacity:.7,blending:un,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.set((Math.random()<.5?-1:1)*(120+Math.random()*160),-29.4,-Math.random()*5800),p.userData.rel=m?1.6+Math.random()*.8:.5+Math.random()*.35,c.add(p),en.push(p)}var _n=[];for(let l=0;l<26;l++){const m=Math.random()<.5?1:-1,p=new re(new yt(6,1.2),new ze({color:m>0?16769184:16730714,transparent:!0,opacity:.8,blending:un,depthWrite:!1,side:Bt}));p.position.set((Math.random()-.5)*2400,160+Math.random()*220,-900-Math.random()*2400),p.userData={vx:m*(1.2+Math.random()*1.4)},c.add(p),_n.push(p)}var Tt=[];function ei(){const l=document.createElement("canvas");l.width=16,l.height=128;const m=l.getContext("2d"),p=m.createLinearGradient(0,128,0,0);return p.addColorStop(0,"rgba(200,230,255,0.55)"),p.addColorStop(1,"rgba(200,230,255,0)"),m.fillStyle=p,m.fillRect(0,0,16,128),new Li(l)}for(let l=0;l<9;l++){const m=new re(new yt(9,360).translate(0,180,0),new ze({map:ei(),transparent:!0,opacity:.5,blending:un,depthWrite:!1,side:Bt,fog:!1}));m.position.set((Math.random()<.5?-1:1)*(70+Math.random()*140),-30,-500-l*650-Math.random()*400),m.userData={ph:Math.random()*6.3,sp:.35+Math.random()*.3,z0:m.position.z},c.add(m),Tt.push(m)}var qn=[];{const l=["04_neon_corner_kiosk","13_subway_entrance_pair","14_subway_corner_entrance","15_bus_stop_shelter","16_vending_machine_cluster","17_street_furniture_strip","18_neon_food_cart","19_crosswalk_signal_island"],m=["01_pocket_park_plaza","02_sunset_fountain_plaza","03_arcade_market_stalls","05_service_pipe_cluster","06_utility_tank_stack","11_hovercar_parking_bay","12_glidebooster_landing_pad","20_loading_dock_crates"];setTimeout(()=>{cl(l.concat(m),"cityfillers/synthwave_city_fillers").then(p=>{const y=[n,i,16765514,8060826,16747098];for(let E=0;E<26;E++){const L=E%2===0,z=L?l:m,D=Math.random()*z.length|0,O=p[L?D:l.length+D];if(!O)continue;const V=G(O,y[Math.random()*y.length|0]);P(V,L?6+Math.random()*7:9+Math.random()*12,-30);const b=Math.random()<.5?-1:1;V.position.x=b*(L?54+Math.random()*70:130+Math.random()*170),V.position.z=-E*(6e3/26)-80-Math.random()*100,V.rotation.y=Math.random()<.5?0:Math.PI,Ze(V),c.add(V),qn.push(V)}}).catch(p=>console.warn("[cityfillers]",p))},0)}var Uo=!1,$r=[];for(let l=0;Uo&&l<8;l++){const m=new jt,p=26+Math.random()*30,y=4+Math.random()*3,E=[];for(let L=0;L<=10;L++){const z=L/10;E.push(new F((z-.5)*110,p-Math.sin(Math.PI*z)*y,0))}m.add(new wo(new Zt().setFromPoints(E),new Hr({color:2758726})));for(let L=1;L<10;L+=2){const z=E[L],D=new re(new yt(1.6,2.2),new ze({color:[16734780,16765514,16722902][Math.random()*3|0],transparent:!0,opacity:.9,side:Bt}));D.position.set(z.x,z.y-1.4,0),m.add(D)}m.position.z=-l*760-140,c.add(m),$r.push(m)}var No=[];for(let l=0;Uo&&l<2;l++){const m=[];for(let y=0;y<=24;y++){const E=y/24;m.push(new F((E-.5)*150,40+Math.sin(E*Math.PI*2.2)*12,Math.sin(E*9)*6))}const p=new re(new L0(new Dh(m),48,1.6,6,!1),new ze({color:12514559,transparent:!0,opacity:.5,blending:un,depthWrite:!1}));p.position.z=-l*3100-900,c.add(p),No.push(p)}var Jr=[];for(let l=0;Uo&&l<4;l++){const m=new jt,p=30+Math.random()*34,y=new re(new Be(150,5,10),J);y.position.y=p,m.add(y);const E=[n,i,16765514][Math.random()*3|0],L=new re(new Be(150,.8,10.4),new ze({color:E,transparent:!0,opacity:.8}));L.position.y=p+2.9,m.add(L);for(const z of[-70,70]){const D=new re(new Be(5,p+30,7),J);D.position.set(z,(p-30)/2,0),m.add(D)}m.position.z=-l*1500-700,c.add(m),Jr.push(m)}function sl(l,m){const p=45+Math.pow(Math.random(),1.7)*430,y=15+Math.random()*36,E=15+Math.random()*36,L=new jt,z=Ie[Math.random()*Ie.length|0];function D(I,X,se,fe){const Le=new re(new Be(I,X,se),[z,z,j,j,z,z]);return Le.position.y=fe+X/2,L.add(Le),Le}function O(I,X,se,fe,Le,Ne,Se){const Pe=new re(new Dn(I,X,se,Le),[Ne,j,j]);return Pe.position.y=fe+se/2,Se&&(Pe.scale.z=Se),L.add(Pe),Pe}function V(I,X,se){const fe=Math.random(),Le=[n,i,16751164,16765514][Math.random()*4|0];if(fe<.15){const Ne=8+Math.random()*16,Se=new re(new Dn(.6,Math.min(I,X)*.6,Ne,4),J);Se.position.y=se+Ne/2,Se.rotation.y=Math.PI/4,L.add(Se)}else if(fe<.3){const Ne=Math.min(I,X)*.42,Se=new re(new hr(Ne,10,6,0,Math.PI*2,0,Math.PI/2),J);Se.position.y=se,L.add(Se)}else if(fe<.44){const Ne=Math.min(I,X)*.5,Se=new re(new Dn(Ne,Ne,Math.max(I,X)*.9,10,1,!1,0,Math.PI),J);Se.rotation.z=Math.PI/2,X>I&&(Se.rotation.y=Math.PI/2),Se.position.y=se,L.add(Se)}else if(fe<.6){let Ne=se,Se=I*.8,Pe=X*.8;for(let bt=0;bt<2+(Math.random()*2|0);bt++){const Pt=4+Math.random()*5,mn=new re(new Be(Se,Pt,Pe),J);mn.position.y=Ne+Pt/2,L.add(mn),Ne+=Pt,Se*=.68,Pe*=.68}}else if(fe<.72){const Ne=Math.min(I,X)*.4,Se=new re(new Dn(Ne,Ne,1,12),J);Se.position.y=se+.5,L.add(Se);const Pe=new re(new Oh(Ne*.8,.35,6,16),oe(16765514,.95));Pe.rotation.x=Math.PI/2,Pe.position.y=se+1.2,L.add(Pe)}if(Math.random()<.45){const Ne=new re(new Be(I+.6,1.6,X+.6),oe(Le,.85));Ne.position.y=se-1.2,L.add(Ne)}}const b=Math.random();if(b<.025&&p>200){const I=Math.max(y,E)/2;O(I*.22,I*.5,p*.82,0,10,ye[Math.random()*ye.length|0]);const X=new re(new Dn(I*1.15,I*.75,p*.07,14),[ye[Math.random()*ye.length|0],j,J]);X.position.y=p*.86,L.add(X);const se=new re(new Dn(.5,.5,p*.12,6),qe);se.position.y=p*.96,L.add(se);const fe=new re(new hr(1.2,6,6),pe);fe.position.y=p*1.02,L.add(fe)}else if(b<.055){const I=Math.max(y,E)/2;let X=0;const se=4+(Math.random()*3|0),fe=p/se;for(let Le=0;Le<se;Le++){const Ne=Le%2===0;O(I*(Ne?1:.78),I*(Ne?1:.78),fe,X,12,ye[Math.random()*ye.length|0]),X+=fe}}else if(b<.085){const I=Math.max(y,E)/2;O(I*(.85+Math.random()*.15),I,p,0,14,ye[Math.random()*ye.length|0])}else if(b<.115){const I=Math.random()<.5?6:8,X=Math.max(y,E)/1.7;O(X*.94,X,p,0,I,ye[Math.random()*ye.length|0])}else if(b<.14){const I=Math.max(y,E)/1.8;O(I*.45,I,p,0,12,ye[Math.random()*ye.length|0])}else if(b<.165&&p>160){const I=Math.max(y,E)/1.5;let X=0;for(let se=0;se<3;se++){const fe=p*(.42-se*.07);O(I*(1-se*.27)*.96,I*(1-se*.27),fe,X,10,ye[Math.random()*ye.length|0]),X+=fe}}else if(b<.19){const I=Math.max(y,E)/1.6;O(I,I,p,0,16,ye[Math.random()*ye.length|0],.45+Math.random()*.2)}else if(b<.23&&p>180){const I=y*.42,X=Ie[Math.random()*Ie.length|0],se=Ie[Math.random()*Ie.length|0],fe=new re(new Be(I,p,E*.8),[X,X,j,j,X,X]);fe.position.set(-y*.32,p/2,0),L.add(fe);const Le=new re(new Be(I,p*.86,E*.8),[se,se,j,j,se,se]);Le.position.set(y*.32,p*.43,0),L.add(Le);const Ne=new re(new Be(y*.66,4,E*.3),J);Ne.position.set(0,p*.62,0),L.add(Ne);const Se=new re(new yt(y*.6,1),oe(2814207,.7));Se.position.set(0,p*.62,E*.16),L.add(Se)}else if(p/y>1.7&&p/y<5.4&&Math.random()<.6){if(Math.random()<.75){const I=new Be(y,p,E);Je(I,Math.random()*we.length|0,Math.random()<.5);const X=new re(I,[ht,ht,j,j,ht,ht]);X.position.y=p/2,L.add(X),Ge++}else{const I=Ae[Math.random()*Ae.length|0],X=new re(new Be(y,p,E),[I,I,j,j,I,I]);X.position.y=p/2,L.add(X)}V(y,E,p)}else{const I=Math.random()*26|0,X=Math.max(y,E)/2;if(I===0&&p>120){const se=p*.55+Math.random()*p*.15;D(y,se,E,0),D(y*.68,p-se,E*.68,se),V(y*.68,E*.68,p)}else if(I===1&&p>140)D(y*1.3,p*.16,E*1.2,0),D(y*.72,p*.84,E*.72,p*.16),V(y*.72,E*.72,p);else if(I===2&&p>220){const se=p*.45,fe=p*.3;D(y,se,E,0),D(y*.78,fe,E*.78,se),D(y*.55,p-se-fe,E*.55,se+fe),V(y*.55,E*.55,p)}else if(I===3&&p>100){const se=p*(.55+Math.random()*.25),fe=D(y*.62,p,E,0);fe.position.x=-y*.19,D(y*.62,se,E*.62,0).position.set(y*.19,se/2,E*.19),V(y*.62,E,p)}else if(I===4&&p>140){const se=D(y*.38,p,E,0);se.position.x=-y*.26;const fe=D(y*.38,p*.92,E,0);fe.position.x=y*.26;const Le=new re(new yt(y*.1,p*.85),oe([n,i,16765514][Math.random()*3|0],.5));Le.position.set(0,p*.45,0),L.add(Le),V(y*.38,E,p)}else if(I===6&&p>140){const se=D(y*.3,p*.75,E,0);se.position.x=-y*.35;const fe=D(y*.3,p*.75,E,0);fe.position.x=y*.35,D(y,p*.25,E,p*.75),V(y,E,p)}else if(I===7&&p>120){for(let se=0;se<4;se++){const fe=p*(.4+.2*se),Le=D(y*.3,fe,E,0);Le.position.x=-y*.45+se*y*.3}V(y*.3,E,p)}else if(I===8&&p>120)D(y*.4,p*.8,E*.55,0),D(y,p*.2,E,p*.8),V(y,E,p);else if(I===9&&p>150)O(X*.32,X*.38,p*.75,0,10,ye[Math.random()*ye.length|0]),O(X*1.05,X*1.05,p*.18,p*.75,12,ye[Math.random()*ye.length|0]);else if(I===10&&p>140){D(y*.5,p,E*.5,0);const se=new re(new Be(y*1.9,2.5,3.5),J);se.position.set(y*.35,p-3,0),L.add(se);const fe=new re(new yt(1.6,5),oe(16765514,.8));fe.position.set(y*1.1,p-8,0),L.add(fe),V(y*.5,E*.5,p)}else if(I===11&&p>150){D(y,p*.55,E,0);const se=D(y*.32,p*.45,E*.8,p*.55);se.position.x=-y*.3;const fe=D(y*.32,p*.45,E*.8,p*.55);fe.position.x=y*.3,V(y*.32,E*.8,p)}else if(I===12){D(y,p*.85,E,0);const se=new re(new Be(y*1.12,3,E*1.05),J);se.position.y=p*.9,se.rotation.z=.3,L.add(se)}else if(I===13&&p>130){for(let se=0;se<4;se++){const fe=p*(1-se*.2),Le=D(y*.42,fe,E,0);Le.position.x=-l*(se-1.5)*y*.28}V(y*.42,E,p)}else if(I===14&&p>140){const se=D(y*.24,p,E,0);se.position.x=-y*.38;const fe=D(y*.24,p,E,0);fe.position.x=y*.38,D(y,p*.16,E,p*.84),V(y,E,p)}else if(I===15){D(y,Math.min(p,90),E,0);for(let se=0;se<6;se++){const fe=15+Math.random()*40,Le=new re(new Dn(.3,.3,fe,4),qe);if(Le.position.set((Math.random()-.5)*y*.7,Math.min(p,90)+fe/2,(Math.random()-.5)*E*.7),L.add(Le),Math.random()<.5){const Ne=new re(new hr(.7,5,5),pe);Ne.position.set(Le.position.x,Math.min(p,90)+fe+1,Le.position.z),L.add(Ne)}}}else if(I===16&&p>120)O(X*.5,X*.5,p,0,10,ye[Math.random()*ye.length|0]).position.x=-X*.5,O(X*.45,X*.45,p*.85,0,10,ye[Math.random()*ye.length|0]).position.set(X*.5,p*.85/2,X*.2),O(X*.4,X*.4,p*.68,0,10,ye[Math.random()*ye.length|0]).position.set(0,p*.68/2,-X*.5);else if(I===17&&p>150){const se=O(1.2,X*1.3,p,0,4,ye[Math.random()*ye.length|0]);se.rotation.y=Math.PI/4}else if(I===18&&p>160){const se=O(X*.5,X*.9,p,0,4,ye[Math.random()*ye.length|0]);se.rotation.y=Math.PI/4;const fe=new re(new R0(1.6,7,4),oe(16765514,.9));fe.position.y=p+3,L.add(fe)}else if(I===19&&p>130){const se=D(y*.3,p,E,0);se.position.x=-y*.35;const fe=D(y*.3,p,E,0);fe.position.x=y*.35,D(y*.42,p*.5,E*.55,p*.25),V(y*.3,E,p)}else if(I===20&&p>140)O(X*1.05,X*1.05,p*.28,0,12,ye[Math.random()*ye.length|0]),D(y*.58,p*.72,E*.58,p*.28),V(y*.58,E*.58,p);else if(I===21&&p>150){D(y,p*.18,E,0);const se=D(y*.4,p*.82,E*.8,p*.18);se.position.x=-y*.27;const fe=D(y*.4,p*.55,E*.8,p*.18);fe.position.x=y*.27,V(y*.4,E*.8,p)}else if(I===22&&p>150){D(y*.55,p,E,0);const se=D(y*1.15,p*.14,E,p*.78);se.position.x=y*.28,V(y*.55,E,p)}else if(I===23&&p>140){for(let fe=0;fe<5;fe++)O(X*.85,X*.85,p*.13,fe*p*.2,12,ye[Math.random()*ye.length|0]);const se=new re(new Dn(X*.3,X*.3,p,8),oe(2814207,.35));se.position.y=p/2,L.add(se)}else if(I===24&&p>120){const se=O(X*1.1,X*1.1,p,0,3,ye[Math.random()*ye.length|0]);se.rotation.y=Math.random()*6.3}else I===25?(D(y*.55,p,E*.7,0),D(y*.45,p*.7,E*.55,0).position.set(-y*.35,p*.35,E*.15),D(y*.4,p*.45,E*.5,0).position.set(y*.33,p*.225,-E*.15),V(y*.55,E*.7,p)):(D(y,p,E,0),V(y,E,p))}if(Math.random()<.25){const I=new re(new Dn(Math.min(3,y*.14),Math.min(3,y*.14),4,7),J);I.position.set((Math.random()-.5)*y*.3,p+2,(Math.random()-.5)*E*.3),L.add(I)}if(p>120&&Math.random()<.35){const I=[n,i,8077298,16765514][Math.random()*4|0],X=[];for(const fe of[-y/2-.3,y/2+.3]){const Le=new yt(.9,p*.92);Le.rotateY(Math.PI/2),Le.translate(fe,p*.46,E*.28*(Math.random()<.5?1:-1)),X.push(Le)}const se=new re(Wn(X),oe(I,.75));X.forEach(fe=>fe.dispose()),L.add(se)}if(Math.random()<.4){const I=4+(Math.random()*5|0);let X=6+Math.random()*10;const se=[],fe=l>0?-Math.PI/2:Math.PI/2,Le=-l*(y/2+1.6);for(let Ne=0;Ne<I&&X<p-8;Ne++){const Se=4+Math.random()*4,Pe=3+Math.random()*3,bt=new yt(Se,Pe);bt.rotateY(fe),bt.translate(Le,X+Pe/2,E*.15),se.push(bt),X+=Pe+1.2+Math.random()*2}if(se.length){const Ne=new re(Wn(se),ot[Math.random()*ot.length|0]);se.forEach(Se=>Se.dispose()),L.add(Ne)}}if(Math.random()<.7){const I=new re(new Be(Math.max(2,y*.25),3,Math.max(2,E*.25)),J);I.position.set((Math.random()-.5)*y*.4,p+1.5,(Math.random()-.5)*E*.4),L.add(I)}if(Math.random()<.45){const I=8+Math.random()*26,X=new re(new Dn(.35,.35,I,5),qe);X.position.y=p+I/2,L.add(X)}const B=new re(new hr(.9,6,6),pe);if(B.position.y=p+1,L.add(B),Math.random()<.6){const I=[n,i,16751164,8077298][Math.floor(Math.random()*4)],X=new Qn(new Wi(new Be(y+.4,.4,E+.4)),x(I));X.position.y=p-.2,L.add(X)}if(Math.random()<.7){const I=Math.min(y*.9,10+Math.random()*14),X=U(I,I*.5);X.position.set(-l*(y/2+.4),8+Math.random()*(p*.5),0),X.rotation.y=l>0?-Math.PI/2:Math.PI/2,L.add(X)}{const I=new re(new yt(y*.96,2.2),oe([16751164,16722902,2814207][Math.floor(Math.random()*3)],.55));I.position.set(-l*(y/2+.25),2.2,0),I.rotation.y=l>0?-Math.PI/2:Math.PI/2,L.add(I)}if(Math.random()<.55){const I=Math.min(p*.5,18+Math.random()*22),X=new re(new yt(3.4,I),ee[Math.random()*ee.length|0]);X.position.set(-l*(y/2+2.2),6+Math.random()*(p*.4)+I/2,E*.2),L.add(X)}L.position.set(l*(44+y/2+Math.random()*150),-30,m),L.updateMatrixWorld(!0);{const I=new rn().setFromObject(L);L.userData={hw:Math.max(4,I.max.x-L.position.x,L.position.x-I.min.x),hd:E/2,top:-30+p,done:!1}}return L}var ol=new F(0,0,1),Wg=new F(0,1,0);function Qh(l){l.updateMatrixWorld(!0);const m=new F,p=new F,y=new F,E=new F,L=new F,z=new F,D=[];let O=0;if(l.traverse(fe=>{if(!fe.isMesh||!fe.geometry||!fe.geometry.attributes.position)return;const Le=fe.geometry.attributes.position,Ne=fe.geometry.index,Se=fe.matrixWorld,Pe=Ne?Ne.count/3:Le.count/3;for(let bt=0;bt<Pe;bt++){const Pt=Ne?Ne.getX(bt*3):bt*3,mn=Ne?Ne.getX(bt*3+1):bt*3+1,kn=Ne?Ne.getX(bt*3+2):bt*3+2;m.fromBufferAttribute(Le,Pt).applyMatrix4(Se),p.fromBufferAttribute(Le,mn).applyMatrix4(Se),y.fromBufferAttribute(Le,kn).applyMatrix4(Se),E.subVectors(p,m),L.subVectors(y,m),z.crossVectors(E,L);const ct=z.length()*.5;ct<2||(z.normalize(),!(Math.abs(z.y)>.55)&&(D.push({ax:m.x,ay:m.y,az:m.z,bx:E.x,by:E.y,bz:E.z,cx:L.x,cy:L.y,cz:L.z,nx:z.x,ny:z.y,nz:z.z,area:ct}),O+=ct))}}),!D.length||O<=0)return null;const V=Math.max(6,Math.min(150,Math.round(O/220))),b=new ut,B=new Ti,I=new F,X=[];for(let fe=0;fe<V;fe++){let Le=Math.random()*O,Ne=0;for(;Ne<D.length-1&&(Le-=D[Ne].area)>0;)Ne++;const Se=D[Ne];let Pe=Math.random(),bt=Math.random();Pe+bt>1&&(Pe=1-Pe,bt=1-bt);const Pt=Se.ax+Se.bx*Pe+Se.cx*bt,mn=Se.ay+Se.by*Pe+Se.cy*bt,kn=Se.az+Se.bz*Pe+Se.cz*bt;I.set(Se.nx,Se.ny,Se.nz),B.setFromUnitVectors(ol,I),b.makeRotationFromQuaternion(B);const ct=k.clone();ct.applyMatrix4(b),ct.translate(Pt+Se.nx*.4,mn+Se.ny*.4,kn+Se.nz*.4),X.push(ct)}const se=Wn(X);return X.forEach(fe=>fe.dispose()),new re(se,new ze({color:q,transparent:!0,opacity:.8,depthWrite:!1,side:Bt}))}function eu(l,m){const p=new jt,y=ne[Math.floor(Math.random()*ne.length)],E=G(y,Math.random()<.5?n:i);E.updateMatrixWorld(!0);const L=new rn().setFromObject(E),z=new F;L.getSize(z),E.scale.setScalar((65+Math.pow(Math.random(),1.6)*320)/Math.max(z.y,.001)),E.updateMatrixWorld(!0);const D=new rn().setFromObject(E);E.position.y=-D.min.y,p.add(E),p.updateMatrixWorld(!0);const O=new rn().setFromObject(p),V=Qh(E);V&&p.add(V);const b=new re(new hr(.9,6,6),pe);b.position.set((O.min.x+O.max.x)/2,O.max.y+1,(O.min.z+O.max.z)/2),p.add(b);const B=l>0?-O.min.x:O.max.x;return p.position.set(l*(44+B+Math.random()*150),-30,m),p.userData={hw:Math.max(Math.abs(O.min.x),Math.abs(O.max.x)),hd:Math.max(Math.abs(O.min.z),Math.abs(O.max.z)),top:-30+(O.max.y-O.min.y),done:!1},Ze(p),p}var w=166,Y=w*36,ne=[],ie=[];for(let l=0;l<32;l++)ie.push(_e(30,70,[2,8,3,10,17,18,24,27,21,0][l%10]));function te(l,m,p){const y=p===0?22+Math.random()*58:p===1?14+Math.random()*34:8+Math.random()*18,E=18+Math.random()*30,L=14+Math.random()*24,z=new jt,D=ie[Math.random()*ie.length|0],O=new re(new Be(E,y,L),[D,D,j,j,D,D]);if(O.position.y=y/2,z.add(O),Math.random()<(p===2?.3:.7)){const b=Math.min(E*1.1,12+Math.random()*10),B=U(b,b*.45);B.position.set(0,y+b*.28,0),B.rotation.y=l>0?-Math.PI/2:Math.PI/2,B.rotation.x=-.12,z.add(B);const I=new re(new Be(.5,b*.3,.5),J);I.position.set(-b*.3,y+b*.12,0),z.add(I);const X=new re(new Be(.5,b*.3,.5),J);X.position.set(b*.3,y+b*.12,0),z.add(X)}if(Math.random()<(p===2?.2:.5)){const b=10+Math.random()*10,B=new re(new yt(3.4,b),ee[Math.random()*ee.length|0]);B.position.set(-l*(E/2+2),y*.4+b/2,L*.2),z.add(B)}if(Math.random()<(p===2?.2:.6)){const b=3+(Math.random()*4|0),B=[16734780,16765514,16747052][Math.random()*3|0],I=l>0?-Math.PI/2:Math.PI/2,X=[];for(let fe=0;fe<b;fe++){const Le=new yt(1.3,1.8);Le.rotateY(I),Le.translate(-l*(E/2+.6),y-1.5,-L/2+(fe+.5)*(L/b)),X.push(Le)}const se=new re(Wn(X),oe(B,.95));X.forEach(fe=>fe.dispose()),z.add(se)}const V=p===0?64+Math.random()*260:p===1?330+Math.random()*340:700+Math.random()*400;return z.position.set(l*(V+E/2),-30,m),z.userData={hw:E/2,hd:L/2,top:-30+y,done:!1},z}var Ce=[];function ke(){return W(32,44,l=>{l.clearRect(0,0,32,44);const m=["#7adcff","#ff7ad0","#b0ff7a","#ffd24a"][Math.random()*4|0];l.strokeStyle=m,l.fillStyle=m,l.globalAlpha=.9,l.lineWidth=1;const p=Math.random()*3|0;if(p===0)l.beginPath(),l.moveTo(16,4),l.lineTo(27,22),l.lineTo(16,40),l.lineTo(5,22),l.closePath(),l.stroke(),l.globalAlpha=.3,l.fill(),l.globalAlpha=.9;else if(p===1)l.beginPath(),l.arc(16,22,11,0,7),l.stroke(),l.fillRect(13,19,6,6);else for(let y=4;y<40;y+=6)Math.random()<.85&&l.fillRect(10,y,12,3);for(let y=0;y<44;y+=3)l.clearRect(0,y,32,1)})}var He=6,it=Y/He,Qe=[],rt=[],st=[],Xt=[],bn=new Array(He),tn=new Array(He);function ui(){for(let p=0;p<He;p++){const y=new jt;y.userData.minZ=0,Qe.push(y),st.push([])}const l=p=>{const y=p.position.z,E=Math.min(He-1,Math.floor((-y-.001)/it));Qe[E].add(p),y<Qe[E].userData.minZ&&(Qe[E].userData.minZ=y);const L={x:p.position.x,hw:p.userData.hw,top:p.userData.top,z0:y,k:E,done:!1};return rt.push(L),st[E].push(L),L},m=[];for(let p=0;p<w;p++){const y=Math.random()<.5?1:-1,E=-p*36-70-Math.random()*30;if(ne.length&&Math.random()<.1){const L=eu(y,E);L.userData.z0=L.position.z,c.add(L),Xt.push(L)}else{const L=l(sl(y,E));L.top+30>120&&m.push(L)}}for(let p=0;p<130;p++){const y=Math.random()<.5?1:-1;l(te(y,-p*(Y/130)-60-Math.random()*30,0))}for(let p=0;p<70;p++){const y=Math.random()<.5?1:-1;l(te(y,-p*(Y/70)-80-Math.random()*50,1))}for(let p=0;p<44;p++){const y=Math.random()<.5?1:-1;l(te(y,-p*(Y/44)-90-Math.random()*70,2))}for(const p of Qe)Ze(p),c.add(p);for(let p=0;p<36&&Ce.length<14&&m.length;p++){const y=m[Math.random()*m.length|0];if(y.holo)continue;y.holo=!0;const E=new ze({map:ke(),transparent:!0,opacity:.55,blending:un,depthWrite:!1,side:Bt}),L=new jt,z=new re(new yt(16,22),E);L.add(z);const D=new re(new yt(16,22),E);D.rotation.y=Math.PI/2,L.add(D),L.position.set(y.x,y.top+16+Math.random()*14,y.z0),Qe[y.k].add(L),Ce.push(L)}}var Ft=[],pt=[],Cs=2e4;(function(){for(let l=0;l<26;l++){const m=420+Math.random()*680,p=60+Math.random()*90,y=60+Math.random()*90;let E;if(l%5<2){const O=new Be(p,m,y);Je(O,Math.random()*we.length|0,Math.random()<.5),E=new re(O,[ht,ht,j,j,ht,ht]),Ge++}else{const O=at[l%at.length];E=new re(new Be(p,m,y),[O,O,j,j,O,O])}const L=new jt;E.position.y=m/2,L.add(E);const z=[n,i,16751164][l%3];for(const O of[-p/2-.3,p/2+.3]){const V=new re(new yt(1.6,m*.85),oe(z,.8));V.position.set(O,m*.45,0),V.rotation.y=Math.PI/2,L.add(V)}if(Math.random()<.8){const O=U(p*.85,p*.45);O.position.set(0,m*.55+Math.random()*m*.25,y/2+.6),L.add(O)}const D=new re(new hr(2.2,6,6),pe);D.position.y=m+3,L.add(D),L.userData.h=m,L.position.set((l%2?1:-1)*(320+Math.random()*620),-30,-(l/26)*Cs-Math.random()*600),Ze(L),c.add(L),Ft.push(L)}for(let l=0;l<5;l++){const m=Ft[Math.floor(Math.random()*Ft.length)],p=new re(new yt(26,420).translate(0,210,0),new ze({color:[10146047,16743120,16765562,8060826,12622591][l%5],transparent:!0,opacity:.1,blending:un,depthWrite:!1,side:Bt}));p.position.y=m.userData.h,p.rotation.z=.5+Math.random(),p.userData.spin=(Math.random()<.5?-1:1)*(.1+Math.random()*.15),m.add(p),pt.push(p)}})();var qt=64500,fi=-16e3,vn=new jt,Ui=[],dr=[],ln=[],di=[],Zr=[];function Mn(l,m,p,y,E){const L=new Be(y,p,24);L.translate(l,-30+p/2,m),ln.push(L);const z=new Wi(new Be(y,p,24));if(z.scale(1.004,1.004,1.004),z.translate(l,-30+p/2,m),di.push(z),E){const D=R(l-y/2,-30,m-12,l+y/2,-30+p,m+12,q,.35,!0,34,16);Zr.push(D.geometry)}}var Oo=[[220,228,0,560,1e3,56,150,!0],[160,314,-260,700,1080,74,180,!1],[120,420,-560,880,1180,96,210,!1],[85,595,-900,1060,1300,120,240,!1],[55,920,-1300,1280,1450,150,300,!1]],Qr=250;function es(l,m){const p=Math.min(1,Math.max(0,(Math.abs(l)-Qr)/1300));return m*(.42+.58*p)}for(const l of Oo){const m=l[0],p=l[1],y=l[2];for(let E=0;E<m;E++){const L=(E-(m-1)/2)*p+(Math.random()-.5)*p*.55;if(Math.abs(L)<Qr)continue;let z=l[3]+Math.random()*l[4];Math.random()<.07&&(z*=1.3+Math.random()*.5),Mn(L,y-Math.random()*16,es(L,z),l[5]+Math.random()*l[6],l[7])}}for(let l=0;l<16;l++){const m=-1600-l*420,p=54-(l*2.5|0),y=52e3/(p-1),E=1250+l*95,L=150+l*22;for(let z=0;z<p;z++){const D=(z-(p-1)/2)*y+(Math.random()-.5)*y*.5;Math.abs(D)<Qr||Mn(D,m-Math.random()*20,es(D,E+Math.random()*850),L+Math.random()*320,!1)}}for(let l=0;l<26;l++){const m=(l-12.5)*2100+(Math.random()-.5)*900;Math.abs(m)<Qr*1.2||Mn(m,-8800-Math.random()*1200,es(m,2e3+Math.random()*1800),420+Math.random()*520,!1)}for(let l=0;l<14;l++){const m=(Math.random()<.5?-1:1)*(Qr*1.4+Math.random()*2e4);Mn(m,-3e3-Math.random()*5e3,es(m,1600+Math.random()*1600),60+Math.random()*80,!1)}function Xg(l,m){Mn(l,0,4800,148,!0);const p=new re(new Be(176,42,84),new ze({color:m,fog:!1}));p.position.set(l,4770,0),vn.add(p);const y=new re(new Dn(5.2,5.2,760,8),new ze({color:m,fog:!1,transparent:!0,opacity:.42}));y.position.set(l,5150,0),vn.add(y)}Xg(-95,n),Xg(95,i),vn.add(new re(Wn(ln),new ze({color:1312294,fog:!1}))),ln.forEach(l=>l.dispose());var qg=new Hr({color:6956200,fog:!1,transparent:!0,opacity:.2});dr.push(qg),vn.add(new Qn(Wn(di),qg)),di.forEach(l=>l.dispose());var Yg=new ze({color:q,transparent:!0,opacity:.02,depthWrite:!1,side:Bt,fog:!1});Ui.push(Yg),vn.add(new re(Wn(Zr),Yg)),Zr.forEach(l=>l.dispose());function jg(l){const{r:m,g:p,b:y}=s(l),E=document.createElement("canvas");E.width=4,E.height=128;const L=E.getContext("2d"),z=L.createLinearGradient(0,0,0,128);return z.addColorStop(0,`rgba(${m},${p},${y},0)`),z.addColorStop(.5,`rgba(${m},${p},${y},1)`),z.addColorStop(1,`rgba(${m},${p},${y},0)`),L.fillStyle=z,L.fillRect(0,0,4,128),new Li(E)}var pr=new re(new yt(6e4,5200),new ze({map:jg(o[0].glow),transparent:!0,opacity:.1,blending:un,depthWrite:!1,fog:!1}));pr.position.set(0,560,-360),vn.add(pr),vn.position.z=fi,a.add(vn);var tu=[],nu=[-26,-9,9,26],Fo=[];for(let l=0;l<6;l++)Fo.push(new ze({map:W(64,32,m=>{m.fillStyle=["#0a1626","#140a26","#260a18","#0a2020","#1a1a10","#101226"][l],m.fillRect(0,0,64,32),m.fillStyle="rgba(255,255,255,0.08)";for(let p=4;p<32;p+=7)m.fillRect(0,p,64,1);m.fillStyle=["#ff2b5c","#2af0ff","#ffe08a","#ff2bd6","#7aff9a","#c09aff"][l],m.fillRect(0,14,64,2),m.globalAlpha=.85,m.fillStyle="#9ad0ff";for(let p=6;p<58;p+=9)m.fillRect(p,6,5,4);m.globalAlpha=1})}));function ty(l){const m=new jt,p=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];m.add(new re(new Be(4.4,2,8),Fo[Math.random()*Fo.length|0])),m.add(new Qn(new Wi(new Be(4.4,2,8)),x(p)));const y=new re(new yt(3.6,.7),Ee);return y.position.set(0,.2,4.1),m.add(y),m.position.set(nu[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,-28,l),m.userData.v=.4+Math.random()*.3,m}function ny(l){const m=new jt,p=ts[Math.floor(Math.random()*ts.length)],y=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];{const V=p.clone(!0),b=Fo[Math.random()*Fo.length|0];V.traverse(B=>{B.isMesh&&(B.material=b,B.add(new Qn(new Wi(B.geometry,25),x(y))))}),m.add(V)}m.updateMatrixWorld(!0);const E=new rn().setFromObject(m),L=new F;E.getSize(L);const z=Math.max(L.z,.001);m.scale.setScalar(6.5/z),m.updateMatrixWorld(!0);const D=new rn().setFromObject(m);m.position.y=-28-D.min.y;const O=new re(new yt(2.6,.6),Ee);return O.position.set(0,.6,D.max.z||3),m.add(O),m.position.x=nu[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,m.position.z=l,m.userData.v=.4+Math.random()*.3,m}var iy=2856,ts=[];function ry(){for(let l=0;l<42;l++){const m=ts.length?ny(-l*68-40):ty(-l*68-40);Ze(m),m.userData.z0=m.position.z,m.userData.x0=m.position.x,c.add(m),tu.push(m)}}var al=[],Bo=4200,ll=[];function iu(l){const m=new jt,p=l?16734815:[2814207,16769162,16722902][Math.floor(Math.random()*3)];let y;if(ll.length)y=ll[Math.random()*ll.length|0].clone(!0),y.traverse(z=>{if(z.isMesh){const D=z.material&&z.material.color?z.material.color.clone():new $e(1709104);z.material=new ze({color:D.multiplyScalar(.55)}),z.add(new Qn(new Wi(z.geometry,30),x(p)))}}),y.scale.setScalar(.9+Math.random()*.4);else if(ts.length){y=G(ts[Math.floor(Math.random()*ts.length)],p),y.updateMatrixWorld(!0);const z=new rn().setFromObject(y),D=new F;z.getSize(D),y.scale.setScalar(8.5/Math.max(D.z,.001))}else{y=new jt;const z=new Be(4.5,1.4,8);y.add(new re(z,N())),y.add(new Qn(new Wi(z),x(p)))}m.add(y),m.updateMatrixWorld(!0);const E=new rn().setFromObject(m),L=new F;if(E.getSize(L),L.x>30&&(y.scale.multiplyScalar(30/L.x),m.updateMatrixWorld(!0),E.setFromObject(m),E.getSize(L)),m.userData.rx=Math.min(16,Math.max(2.5,L.x/2)),m.userData.ry=Math.max(2,L.y/2),m.userData.cy=L.y/2,l){m.rotation.y=Math.PI;const z=new re(new yt(Math.max(3.2,L.x*.4),1.1),new ze({color:14676735,transparent:!0,opacity:.9,blending:un,depthWrite:!1,side:Bt}));z.position.set(0,L.y*.4,E.min.z-.4),m.add(z)}else{const z=new re(new yt(Math.max(2.4,L.x*.35),.9),new ze({color:16751164,transparent:!0,opacity:.85,blending:un,depthWrite:!1,side:Bt}));z.position.set(0,L.y*.4,E.max.z+.4),m.add(z)}return m}function Ey(){}var Kg=new _g,sy=["01_pulse_block_44m","02_vector_tower_88m","03_slash_roof_62m","04_night_monolith_118m","05_setback_hotel_72m","06_skyline_spire_102m"],oy=["01_midnight_wedge","02_pulse_sedan","03_vector_van","04_afterburner_supercar","05_night_interceptor"];function cl(l,m){return Promise.all(l.map(p=>new Promise(y=>{Kg.load("models/"+m+"/"+p+".glb",E=>y(E.scene),void 0,()=>y(null))}))).then(p=>p.filter(Boolean))}var $g=!1;function Jg(l){It=iu(!1),It.traverse(y=>{y.isLineSegments&&(y.material=x(16722902))});const m=new re(new yt(3.4,1.4),oe(16738860,.9));m.position.set(0,.6,5.6),It.add(m);const p=new re(new yt(2.2,.9),oe(16765514,.9));p.position.set(0,.6,7.4),It.add(p),It.position.set(0,14,l),c.add(It)}var hl=[],ay=15e3;function Zg(l){const p=Math.random()<.5,y=(p?-1:1)*(30+Math.random()*50),E=(p?1:-1)*(40+Math.random()*55),L={x0:y-18,x1:y+18,narrow:!0},z={x0:E-30,x1:E+30,narrow:!1},D=[L,z].sort((V,b)=>V.x0-b.x0),O=[-150,D[0].x0,D[0].x1,D[1].x0,D[1].x1,150];for(let V=0;V<3;V++){const b=O[V*2],B=O[V*2+1];if(B-b<2)continue;const I=new re(new Be(B-b,100,6),J);I.position.set((b+B)/2,40/2,-3),l.add(I);const X=new re(new Be(B-b,1.2,6.4),oe(16722748,.9));X.position.set((b+B)/2,70-.6,-3),l.add(X)}for(const V of[L,z]){const b=V.narrow?16722902:2814207;for(const B of[V.x0,V.x1]){const I=new re(new Be(1.4,100,6.4),oe(b,.9));I.position.set(B,40/2,-3),l.add(I)}}return{type:"gate",len:6,top:70,gaps:[L,z]}}function ly(l){const E=new re(new Be(6,106,520),J);E.position.set(-88,46/2,-520/2),l.add(E);const L=new re(new Be(6,106,520),J);L.position.set(88,46/2,-520/2),l.add(L);const z=new re(new Be(182,6,520),J);z.position.set(0,79,-520/2),l.add(z);for(let D=0;D<8;D++){const O=new re(new Oh(48,1.2,4,4),oe([n,i,16765514][D%3],.9));O.rotation.z=Math.PI/4,O.position.set(0,20,-D*(520/8)-30),l.add(O)}return{type:"tunnel",len:520,xLim:82,yLim:70}}function cy(l){for(const y of[-1,1]){const E=new re(new Be(8,110,640),J);E.position.set(y*58,25,-640/2),l.add(E);const L=new re(new Be(8.4,1.5,640),oe(y<0?n:i,.9));L.position.set(y*58,81,-640/2),l.add(L)}return{type:"canyon",len:640,xLim:50}}function Qg(l){const y=[];for(let E=0;E<5;E++){const L=(E%2?1:-1)*(26+Math.random()*14),z=-E*(560/5)-40,D=new re(new Dn(4,5,120,8),J);D.position.set(L,30,z),l.add(D);const O=new re(new Dn(4.4,4.4,3,8),oe(E%2?i:n,.95));O.position.set(L,92,z),l.add(O),y.push({x:L,z,done:!1})}return{type:"slalom",len:560,pts:y}}function hy(l){const y=(E,L,z)=>{const D=new re(new Be(L-E,100,6),J);D.position.set((E+L)/2,20,z),l.add(D);const O=new re(new Be(L-E,1.2,6.4),oe(16765514,.9));O.position.set((E+L)/2,69.4,z),l.add(O)};return y(-150,15,-3),y(-15,150,-757),{type:"scurve",len:760,top:70,g1:15,g2:-15}}function uy(l){const p=new re(new Be(300,10,90),J);p.position.set(0,35,-90/2),l.add(p);const y=new re(new Be(300,1.2,90+.6),oe(16751164,.9));y.position.set(0,30.6,-90/2),l.add(y);const E=new re(new Be(300,1.2,90+.6),oe(2814207,.9));E.position.set(0,39.4,-90/2),l.add(E);for(const L of[-110,110]){const z=new re(new Be(10,60,12),J);z.position.set(L,0,-90/2),l.add(z)}return{type:"bridge",len:90,yLow:28,yHigh:42}}function e_(l){const E=new re(new Be(16,108,620),J);E.position.set(0,48/2,-620/2),l.add(E);const L=new re(new Be(16.4,1.4,620),oe(16765514,.9));L.position.set(0,78-.7,-620/2),l.add(L);const z=new re(new Be(108,108,300),J);z.position.set(-96,48/2,-300/2),l.add(z);const D=new re(new Be(4,1.4,300),oe(16722902,.95));D.position.set(-43,78-.7,-300/2),l.add(D);const O=new re(new Be(76,108,620),J);O.position.set(112,48/2,-620/2),l.add(O);const V=new re(new Be(4,1.4,620),oe(2814207,.95));V.position.set(75,78-.7,-620/2),l.add(V);for(const b of[-1,1]){const B=new re(new Be(14,2.2,1.4),oe(16765514,.95));B.position.set(b*5.5,34,1.2),B.rotation.z=b*.7,l.add(B)}return{type:"fork",len:620,lenL:300,top:78,divH:8,lXin:-42,rXout:74}}function fy(){const l=[{z:-2600,kind:"flow"},{z:-5800,kind:"flow"},{z:-7600,kind:"quick"},{z:-8800,kind:"quick"},{z:-11600,kind:"flow"},{z:-14200,kind:"fork"}];for(const m of l){const p=new jt,y=Math.random(),E=m.kind==="fork"?e_(p):m.kind==="quick"?y<.45?Zg(p):y<.8?uy(p):Qg(p):y<.22?Zg(p):y<.42?ly(p):y<.6?cy(p):y<.75?Qg(p):y<.9?hy(p):e_(p);for(const L of[-1,1]){const z=new re(new Be(2.4,32,2.4),J);z.position.set(L*118,-14,420),p.add(z);for(let D=0;D<3;D++){const O=new re(new Be(9,1.8,1.2),oe(16765514,.95));O.position.set(L*118-L*2.6,D*8,420),O.rotation.z=L*.65,p.add(O);const V=new re(new Be(9,1.8,1.2),oe(16765514,.95));V.position.set(L*118+L*2.6,D*8,420),V.rotation.z=-L*.65,p.add(V)}}p.position.z=m.z-Math.random()*200,p.userData=Object.assign({passed:!1,z0:p.position.z},E),Ze(p),c.add(p),hl.push(p)}}function ru(){$g||($g=!0,ui(),ry(),Jg(Ki?-700:-900),fy(),console.log("AF2-Fassaden im Einsatz:",Ge))}var dy=["01_sky_dart_interceptor","02_afterburner_jet","03_pulse_commuter","04_vector_cargo_lifter","05_neon_bomber","06_skyline_heavy_transport"];Promise.all([cl(sy,"buildings"),cl(oy,"vehicles"),cl(dy,"aircraft/synthwave_aircraft")]).then(l=>{ne=l[0],ts=l[1],ll=l[2],ru()}).catch(()=>ru()),setTimeout(ru,5e3);for(var t_=new Zt,su=[],n_=0,i_=44,r_=560,s_=0;su.length<450&&s_<6e3;){s_++;const l=(Math.random()-.5)*4200,m=380+Math.random()*640,p=-2600-Math.random()*2600;(l-n_)*(l-n_)+(m-i_)*(m-i_)<r_*r_||su.push(l,m,p)}t_.setAttribute("position",new Dt(su,3));var ou=new Ga({color:12374271,size:1.5,transparent:!0,opacity:.5,fog:!1});a.add(new Ph(t_,ou));var ti=new jt;(function(){const l=new Zt;l.setAttribute("position",new Jt(new Float32Array([0,0,-4.2,-3.2,-.3,2.6,0,.7,1.4,0,0,-4.2,0,.7,1.4,3.2,-.3,2.6,0,0,-4.2,0,.7,1.4,0,-.9,2.4,0,0,-4.2,0,-.9,2.4,0,.7,1.4]),3)),l.computeVertexNormals(),ti.add(new re(l,new ze({color:530986,side:Bt}))),ti.add(new Qn(new Wi(l,1),x(n)));const m=new re(new Nh(.6),new ze({color:i}));m.position.set(0,.35,-.6),m.scale.set(1,.6,1.8),ti.add(m);for(const p of[-3,3]){const y=new re(new hr(.28,6,6),new ze({color:p<0?i:n}));y.position.set(p,-.25,2.4),ti.add(y)}})(),c.add(ti),Kg.load("models/ship/glidebooster_vx7.glb",l=>{const m=G(l.scene,n);m.updateMatrixWorld(!0);const p=new rn().setFromObject(m),y=new F,E=new F;p.getSize(y),p.getCenter(E);const L=7/Math.max(.001,y.x);for(m.scale.setScalar(L),m.position.set(-E.x*L,-E.y*L,-E.z*L);ti.children.length;)ti.remove(ti.children[0]);ti.add(m);const z=new re(new Nh(.5),new ze({color:i}));z.position.set(0,.4,-.8),z.scale.set(1,.6,1.8),ti.add(z)},void 0,()=>{});var py=(()=>{const l=document.createElement("canvas");l.width=l.height=64;const m=l.getContext("2d"),p=m.createRadialGradient(32,32,2,32,32,30);p.addColorStop(0,"rgba(255,255,255,1)"),p.addColorStop(.28,"rgba(255,214,130,0.85)"),p.addColorStop(.6,"rgba(255,110,70,0.38)"),p.addColorStop(1,"rgba(255,50,130,0)"),m.fillStyle=p,m.fillRect(0,0,64,64);const y=new Li(l);return y.colorSpace=Ot,y})(),au=[];for(let l=0;l<10;l++){const m=new re(new yt(3.4-.22*l,3.4-.22*l),new ze({map:py,color:l<5?16767136:16751327,transparent:!0,opacity:.55-l*.048,blending:un,depthWrite:!1}));c.add(m),au.push(m)}var Yn={};addEventListener("keydown",l=>{if(Yn[l.code]=!0,l.code==="Space"&&l.preventDefault(),zn){!l.repeat&&performance.now()-is>600&&qo();return}if(l.code==="KeyR"&&Os(),l.code==="KeyT"&&(pn.superhot=!pn.superhot),l.code==="Escape"||l.code==="KeyP"){as();return}if($i){l.code==="ArrowUp"&&(Ji=0),l.code==="ArrowDown"&&(Ji=1),(l.code==="ArrowUp"||l.code==="ArrowDown")&&_l(),l.code==="Enter"&&c_();return}Bs()}),addEventListener("keyup",l=>{Yn[l.code]=!1});var lu="none";addEventListener("gamepadconnected",l=>{lu=l.gamepad.id,Bs()});function cu(){const l=navigator.getGamepads?navigator.getGamepads():[];for(const m of l)if(m&&m.connected)return m;return null}function my(){const l=Zi;let m=0,p=0,y=1,E=0;return l<3?y=.6:l<8?m=Math.sin(l*1.2)*.25:l<12?(m=Math.sin(l*2.2)*.35,p=Math.sin(l*1.4)*.3):l<13.4?(y=0,m=-.55):l<17?m=.3:l<21&&(m=Math.sin(l*3.1)*.45,p=Math.sin(l*2.2)*.4),{x:m,y:p,boost:y,brake:E,fire:0}}function gy(){if(Ki&&cs&&!$i&&!zn)return my();let l=0,m=0,p=0,y=0,E=0;(Yn.ArrowLeft||Yn.KeyA)&&(l-=1),(Yn.ArrowRight||Yn.KeyD)&&(l+=1),(Yn.ArrowUp||Yn.KeyW)&&(m+=1),(Yn.ArrowDown||Yn.KeyS)&&(m-=1),(Yn.ShiftLeft||Yn.ShiftRight)&&(p=1),Yn.Space&&(y=1);const L=cu();if(L){lu=L.id;const z=O=>Math.abs(O)<.12?0:O;l+=z(L.axes[0]||0),m-=z(L.axes[1]||0);const D=O=>L.buttons[O]?L.buttons[O].value:0;p=Math.max(p,D(7),D(5)),y=Math.max(y,D(6),D(4)),E=Math.max(D(0),D(2))}return{x:Math.max(-1,Math.min(1,l)),y:Math.max(-1,Math.min(1,m)),boost:p,brake:y,fire:E}}var pn={stickMod:1.35,turnRate:17,smooth:.5,rollMod:.85,baseSpeed:33,lateralGain:3.1,boxW:150,boxH:95,invertY:!1,superhot:!0,timeFloor:.02},ni={x:0,y:0,z:0},kt=0,Et=22,ji=1,Ni=0,Ls=0,Un=0,zn=!1,pi=1,lt=0,Fe=1,yn=0,Rn=1,zo=0,Yt=!1,Ps=0,ul=0,ns=0,fl=!1,is=0,rs=0,ii=0,ss=0,Is=0,ko=!1,Go=!1,Ho=0,It=null,dl=Math.random()*6,Ds=0,Us=0,Tn=0,Ki=location.hash==="#trailer",hu=o[0].skyA,o_=o[0].skyB,_y=[0,16,32,45,55,72,100],Ns=document.createElement("canvas");Ns.width=96,Ns.height=512;var Vo=Ns.getContext("2d"),pl=new Li(Ns);pl.colorSpace=Ot,pl.minFilter=En;var ml=-9;function Wo(l){const m=Ns.width,p=Ns.height,y=Vo.createLinearGradient(0,0,0,p);for(let z=0;z<hu.length;z++){const D=hu[z],O=o_[z];y.addColorStop(_y[z]/100,`rgb(${Math.round(D[0]+(O[0]-D[0])*l)},${Math.round(D[1]+(O[1]-D[1])*l)},${Math.round(D[2]+(O[2]-D[2])*l)})`)}Vo.fillStyle=y,Vo.fillRect(0,0,m,p);const E=Vo.getImageData(0,0,m,p),L=E.data;for(let z=0;z<L.length;z+=4){const D=Math.random()*11-5.5|0;L[z]+=D,L[z+1]+=D,L[z+2]+=D}Vo.putImageData(E,0,0),pl.needsUpdate=!0,ml=l}Wo(0);var gl=new re(new yt(2,2),new ze({map:pl,depthWrite:!1,depthTest:!1,fog:!1}));gl.position.set(0,0,-120),gl.scale.set(560,320,1),gl.renderOrder=-1,h.add(gl),a.add(h);var uu=14,os=new Float32Array(uu*6),a_=[];for(let l=0;l<uu;l++){const m=Math.random()*Math.PI*2,p=6+Math.random()*16;a_.push({x:Math.cos(m)*p,y:Math.sin(m)*p*.62,z:-30-Math.random()*130,len:18+Math.random()*26,v:1+Math.random()*.7})}var fu=new Zt;fu.setAttribute("position",new Jt(os,3));var Xo=new Hr({color:10479871,transparent:!0,opacity:0,blending:un,depthWrite:!1,depthTest:!1,fog:!1}),mr=new Qn(fu,Xo);mr.frustumCulled=!1,mr.renderOrder=5,mr.visible=!1,c.add(mr);function Os(){ni={x:0,y:0,z:0},kt=0,Et=22,Ni=0;for(const m of Qe)m.position.z=0;for(const m of rt)m.done=!1;for(const m of Xt)m.position.z=m.userData.z0,m.userData.done=!1;for(const m of tu)m.position.z=m.userData.z0,m.position.x=m.userData.x0,m.userData.done=!1;for(const m of al)m.position.set(m.userData.x0,m.userData.y0,m.userData.z0),m.userData.done=!1;xe.position.z=0,Ls=0,Un=0,zn=!1,vn.position.z=fi,lt=0,Fe=1,yn=0,Rn=1,zo=0,Yt=!1,Ps=0,ul=0,ns=0,Us=0,Tn=0,Ds=0,rs=0,ii=0,ss=0,Is=0,ko=!1,Go=!1,Ho=0,Xo.opacity=0,mr.visible=!1,It&&(It.visible=!0,It.position.set(0,14,Ki?-700:-900));for(const m of hl)if(m.position.z=m.userData.z0,m.userData.passed=!1,m.userData.hit=!1,m.userData.side=void 0,m.userData.punkGap=void 0,m.userData.pts)for(const p of m.userData.pts)p.done=!1;h.fov=66,h.updateProjectionMatrix(),M.strength=.9;const l=document.getElementById("pops");l&&(l.innerHTML="");for(const m of Ui)m.opacity=.12;for(const m of dr)m.opacity=.42;pr.material.opacity=.14,ou.opacity=.5,Wo(0),xy()}var $i=!1,l_=!1,Ji=0,vy=()=>[document.getElementById("btnResume"),document.getElementById("btnRestart")];function _l(){vy().forEach((m,p)=>m.classList.toggle("sel",p===Ji))}function c_(){Ji===0?as():(Os(),jn.restart(),$i&&as())}function as(){cs&&($i=!$i,document.getElementById("pause").style.display=$i?"flex":"none",$i?(Ji=0,_l(),jn.pause(),document.getElementById("dmg").style.opacity=0):jn.resume())}function My(){const l=cu(),m=!!(l&&l.buttons[9]&&l.buttons[9].pressed),p=m&&!l_;return l_=m,p}var Fs={up:!1,down:!1,a:!1,b:!1,any:!1};function vl(){const l=cu();if(!l)return{};const m=V=>!!(l.buttons[V]&&l.buttons[V].pressed),p=l.axes[1]||0,y=m(12)||p<-.5,E=m(13)||p>.5,L=m(0),z=m(1),D=l.buttons.some(V=>V&&V.pressed)||Math.abs(l.axes[0]||0)>.6||Math.abs(p)>.6,O={up:y&&!Fs.up,down:E&&!Fs.down,a:L&&!Fs.a,b:z&&!Fs.b,any:D&&!Fs.any};return Fs={up:y,down:E,a:L,b:z,any:D},O}document.getElementById("btnResume").addEventListener("click",l=>{l.stopPropagation(),as()}),document.getElementById("btnRestart").addEventListener("click",l=>{l.stopPropagation(),Os(),jn.restart(),$i&&as()});function yy(){jn.pause(),is=performance.now(),document.getElementById("dmg").style.opacity=0;const l=document.getElementById("end");if(!l)return;const m=l.querySelector("h2"),p=l.querySelector(".dist"),y=document.getElementById("btnEndRestart"),E=pi<o.length;m&&(m.textContent=E?"LEVEL "+pi+" CLEARED":"ALL CLEAR"),y&&(y.textContent=E?"NEXT: "+o[pi].name+" \u2192":"FLY AGAIN"),p&&(p.textContent="SCORE "+Math.round(lt)+"   \xB7   RANK "+Sy(lt)+"   \xB7   BUSTS "+Us+"   \xB7   DISTANCE "+Math.round(Ls)),l.style.display="flex"}function Sy(l){return l>=26e3?"S":l>=17e3?"A":l>=1e4?"B":l>=5e3?"C":"D"}function Vt(l,m){const p=document.getElementById("pops");if(!p)return;p.childElementCount>4&&p.firstElementChild.remove();const y=document.createElement("div");y.className="pop",y.textContent=l,y.style.color=m,y.style.textShadow="0 0 12px "+m,p.appendChild(y),setTimeout(()=>{y.remove()},900)}function h_(l){const m=o[l-1];hu=m.skyA,o_=m.skyB,Q.material.map.dispose(),Q.material.map=C(m.sun),Q.material.needsUpdate=!0,pr.material.map.dispose(),pr.material.map=jg(m.glow),pr.material.needsUpdate=!0,me.material.map.dispose(),me.material.map=le(m.haze),me.material.needsUpdate=!0,a.fog.color.setHex(m.fog),jn.setTrack(m.music),ml=-9,Wo(0)}function xy(){const l=document.getElementById("end");l&&(l.style.display="none")}function by(){jn.pause(),is=performance.now(),document.getElementById("dmg").style.opacity=0,fl=!0;const l=document.getElementById("end");if(!l)return;const m=l.querySelector("h2"),p=l.querySelector(".dist"),y=document.getElementById("btnEndRestart");m&&(m.textContent="STALLED - CITY GOT YOU"),y&&(y.textContent="RETRY"),p&&(p.textContent="SCORE "+Math.round(lt)+"   \xB7   BUSTS "+Us+"   \xB7   DISTANCE "+Math.round(Ls)),l.style.display="flex"}function Ty(){jn.pause(),is=performance.now(),Tn=0,document.getElementById("bustfx").style.opacity=0;const l=document.getElementById("end");if(!l)return;const m=l.querySelector("h2"),p=l.querySelector(".dist"),y=document.getElementById("btnEndRestart");m&&(m.textContent="PUNK BOOSTER"),p&&(p.textContent="TOO FAST TO STOP"),y&&(y.textContent="REPLAY"),l.style.display="flex"}function qo(){if(!(zn&&performance.now()-is<600)){if(Ki){fl=!1,Zi=0,Os(),jn.restart();return}if(fl){fl=!1,Os(),jn.restart();return}pi=pi<o.length?pi+1:1,h_(pi),Os()}}document.getElementById("btnEndRestart").addEventListener("click",l=>{l.stopPropagation(),qo()});function du(l,m,p,y){let E=(m-l)*p;return E>y&&(E=y),E<-y&&(E=-y),l+E}var ls=0,Zi=0,pu=60;function Yo(l){const m=My();if(cs?m&&(zn?qo():as()):vl().any&&Bs(),$i){const $=vl();$.up&&(Ji=Math.max(0,Ji-1),_l()),$.down&&(Ji=Math.min(1,Ji+1),_l()),$.a&&c_(),$.b&&as(),ls=0,requestAnimationFrame(Yo);return}if(zn){performance.now()-is>600&&vl().any&&qo(),ls=0,requestAnimationFrame(Yo);return}if(!cs){vn.position.z=-8600,vn.scale.setScalar(1.35),vn.position.y=30*.35;for(const $ of Ui)$.opacity=.5;for(const $ of dr)$.opacity=.88;pr.material.opacity=.5,Q.scale.setScalar(2.2),Q.position.y=-560,Math.abs(.85-ml)>.004&&Wo(.85),h.position.set(0,16,46),h.lookAt(0,40,-90),ls=0,u.info.reset(),S.render(),requestAnimationFrame(Yo);return}const p=ls?l-ls:16.7,y=ls?Math.min(3,p/33.37):1;ls=l,Zi+=y/30,pu+=(1e3/Math.max(1,p)-pu)*.06;const E=gy(),L=pn.invertY?-E.y:E.y,z=Math.max(Math.abs(E.x),Math.abs(E.y),E.boost,E.brake),D=pn.superhot?pn.timeFloor+(1-pn.timeFloor)*Math.min(1,z/.25):1;ji+=(D-ji)*.25;const O=y*ji;jn.setEnergy(ji);const V=pn.turnRate*y,b=1-Math.pow(1-pn.smooth,y);ni.y=du(ni.y,E.x*pn.stickMod,b,V),ni.x=du(ni.x,L*pn.stickMod,b,V),ni.z=du(ni.z,E.x*pn.rollMod,.12,5*y),Ni+=(E.boost-Ni)*.05;const B=ni.y*e,I=ni.x*e,X=pn.baseSpeed*(1+Ni*.45-E.brake*.5)*Rn*(Yt?1.22:1),se=Math.sin(B)*Math.cos(I)*X*pn.lateralGain,fe=Math.sin(I)*X*pn.lateralGain,Le=Math.cos(B)*Math.cos(I)*X;kt+=se*O,Et+=fe*O,kt=Math.max(-pn.boxW,Math.min(pn.boxW,kt)),Et=Math.max(-18,Math.min(pn.boxH,Et)),ti.position.set(kt,Et,0),ti.rotation.set(ni.x*e,ni.y*e,-ni.z*e);const Ne=.7+.3*Math.sin(Zi*18);for(let $=0;$<au.length;$++){const ae=au[$],Ke=$+1;ae.position.set(kt-Math.sin(B)*Ke*1.3,Et+.2,2.6+Ke*1.35),ae.lookAt(h.position);const Xe=(1.2-$*.08)*(.7+.6*z)*Ne*(Yt?1.5:1);ae.scale.set(Xe,Xe,Xe),ae.material.opacity=(.5-$*.045)*(.3+.9*Math.min(1,z*1.4))}const Se=Le*O,Pe=Math.min(.1,p/1e3);E.boost>.5&&Rn>.9&&ji>.8?(Ps=Math.min(1.4,Ps+Pe),ul=.9):Yt&&ul>0?ul-=Pe:Ps=Math.max(0,Ps-Pe*2.2),Yt=Ps>=1.2,ji>.6&&E.boost<.4&&!zn?ns+=Pe*(E.brake>.3?1.6:1):ns=Math.max(0,ns-Pe*2),ns>2.6&&!zn&&(zn=!0,by()),jn.setRedline(Yt),vl(),E.boost>.5&&ji>.8?Fe=Math.min(8,Fe+(Yt?.5:.22)*Pe):ji>.8?Fe=Math.max(1,Fe-.05*Pe):(Fe=Math.max(1,Fe-.7*Pe),lt=Math.max(0,lt-26*Pe)),lt+=Se*.03*Fe*(Yt?1.3:1),yn=Math.max(0,yn-Pe),zo=Math.max(0,zo-Pe),ss=Math.max(0,ss-Pe),Is=Math.max(0,Is-Pe),yn>.65&&(ii=0,rs=0),Rn+=(1-Rn)*Math.min(1,Pe*1.6);for(let $=0;$<He;$++)bn[$]=Qe[$].position.z,tn[$]=bn[$]+Se;for(const $ of rt){const ae=$.z0+bn[$.k],Ke=$.z0+tn[$.k];if(ae<=0&&Ke>0&&!$.done){$.done=!0;const Xe=Math.abs(kt-$.x),nt=Xe<$.hw+3;if(nt&&Et<$.top+2)yn=1,Rn=.35,Fe=1,lt=Math.max(0,lt-800),Ni=0,Vt("CRASH  -800","#ff4a5a");else if(Xe>=$.hw+3&&Xe<$.hw+16&&Et<$.top||nt&&Et-$.top<15){ii=ss>0?ii+1:1,ss=2.5;const wt=Math.round((150+40*(ii-1))*Fe*(Yt?1.5:1));Fe=Math.min(8,Fe+.5),lt+=wt,Yt&&(Tn=Math.max(Tn,.22),h.position.x+=(Math.random()-.5)*1.6),Vt((ii>1?"NEAR MISS x"+ii:"NEAR MISS")+"  +"+wt,"#2af0ff")}}}for(let $=0;$<He;$++){let ae=tn[$];if(Qe[$].userData.minZ+ae>90){ae-=Y;for(const Ke of st[$])Ke.done=!1}Qe[$].position.z=ae}for(const $ of Xt){const ae=$.position.z,Ke=ae+Se,Xe=$.userData;if(ae<=0&&Ke>0&&!Xe.done){Xe.done=!0;const nt=Math.abs(kt-$.position.x),wt=nt<Xe.hw+3;if(wt&&Et<Xe.top+2)yn=1,Rn=.35,Fe=1,lt=Math.max(0,lt-800),Ni=0,Vt("CRASH  -800","#ff4a5a");else if(nt>=Xe.hw+3&&nt<Xe.hw+16&&Et<Xe.top||wt&&Et-Xe.top<15){ii=ss>0?ii+1:1,ss=2.5;const on=Math.round((150+40*(ii-1))*Fe*(Yt?1.5:1));Fe=Math.min(8,Fe+.5),lt+=on,Yt&&(Tn=Math.max(Tn,.22),h.position.x+=(Math.random()-.5)*1.6),Vt((ii>1?"NEAR MISS x"+ii:"NEAR MISS")+"  +"+on,"#2af0ff")}}Ke>90?($.position.z=Ke-Y,Xe.done=!1):$.position.z=Ke}for(const $ of tu){const ae=$.position.z,Ke=ae+Se*(1-$.userData.v);ae<=0&&Ke>0&&!$.userData.done&&($.userData.done=!0,Math.abs(kt-$.position.x)<10&&Et<-8&&zo<=0&&(zo=1.5,Fe=Math.min(8,Fe+.2),lt+=200,Vt("LOW PASS  +200","#ffd24a"))),Ke>60?($.position.z=Ke-iy,$.position.x=nu[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,$.userData.done=!1):$.position.z=Ke}for(const $ of al){const ae=$.userData,Ke=$.position.z,Xe=Ke+Se+ae.own*O;if(Ke<=0&&Xe>0&&!ae.done){ae.done=!0;const nt=ae.rx||5,wt=ae.ry||4,on=Math.abs(kt-$.position.x),ri=Math.abs(Et-($.position.y+(ae.cy||0)));if(on<nt+2&&ri<wt+2.5)yn=1,Rn=.4,Fe=1,lt=Math.max(0,lt-500),Ni=0,Vt("MIDAIR CRASH  -500","#ff4a5a");else if(on<nt+13&&ri<wt+9)if(ae.oncoming)lt+=250,Fe=Math.min(8,Fe+.4),Vt("HEAD-ON PASS  +250","#ff8a5a");else{const jo=Math.round(120*Fe);lt+=jo,Fe=Math.min(8,Fe+.25),Vt("OVERTAKE  +"+jo,"#c0ff5e")}}if($.position.z=Xe,ae.strobeA){const nt=(Zi*5|0)%2===0;ae.strobeA.visible=nt,ae.strobeB.visible=!nt}Xe>80?($.position.z=Xe-Bo-Math.random()*400,$.position.x=(ae.oncoming?-1:1)*(6+Math.random()*24),$.position.y=-12+Math.random()*55,ae.done=!1):Xe<-Bo-800&&($.position.z=Xe+Bo,ae.done=!1)}if(xe.position.z=(xe.position.z+Se)%46,It)if(Ds>0)Ds-=Pe,Ds<=0&&(It.traverse($=>{$.geometry&&$.geometry.dispose()}),c.remove(It),It=null,Jg(-1800));else{const $=-It.position.z,ae=(Ki?43:$>2200?42:46)+.7*(pi-1)+.4*Math.min(3,rs)-(Yt?2.5:0);It.position.z+=Se-ae*O,It.position.z>-6&&(It.position.z=-6),dl+=O*.02;let Ke=null;for(const nt of hl){const wt=nt.userData;if(wt.type!=="gate"&&wt.type!=="fork")continue;const on=It.position.z-nt.position.z;if(on>-wt.len&&on<600){if(wt.punkGap===void 0&&(wt.punkGap=Math.random()<.5?0:1),wt.type==="gate"){const ri=wt.gaps[wt.punkGap];Ke=(ri.x0+ri.x1)/2}else Ke=wt.punkGap===0?-26:40;break}}Ke!==null?It.position.x+=(Ke-It.position.x)*Math.min(1,O*.08):It.position.x+=(Math.sin(dl*1.7)*26-It.position.x)*Math.min(1,O*.08),It.position.y=12+Math.sin(dl*1.13)*10,It.rotation.z=Math.sin(dl*1.7)*.25;const Xe=-It.position.z;if(!Ki&&!zn&&Is<=0&&(Xe<420&&!ko?(ko=!0,Go=!1,Is=6,Vt("HE'S RIGHT THERE - FLOOR IT!","#ff2bd6")):Xe>2400&&!Go&&(Go=!0,ko=!1,Is=6,Vt("DON'T LOSE HIM!","#ff2bd6"))),Xe>=420&&Xe<=2400&&(ko=!1,Go=!1),Xe<30&&Math.abs(kt-It.position.x)<22){rs++;const nt=Math.round(2e3*Fe*(1+.5*(rs-1)));lt+=nt,Fe=Math.min(8,Fe+2),Us++,Tn=1,Ho=12,Vt((rs>1?"BUST x"+rs+"!":"BUSTED!")+"  +"+nt,"#2af0ff"),It.visible=!1,Ds=2,Ki&&(zn=!0,Ty())}else Xe>3200&&(lt=Math.max(0,lt-800),Vt("PUNK ESCAPED  -800","#ff5a5f"),It.position.z=-1600)}Tn=Math.max(0,Tn-Pe*1.6);for(const $ of hl){const ae=$.userData,Ke=$.position.z,Xe=Ke+Se;if($.position.z=Xe,Xe-ae.len>200&&($.position.z=Xe-ay,ae.passed=!1,ae.hit=!1,ae.punkGap=void 0,ae.side=void 0,ae.pts))for(const nt of ae.pts)nt.done=!1;if(!Ki)if(ae.type==="gate"){if(Ke<=0&&Xe>0&&!ae.passed){ae.passed=!0;const nt=ae.gaps.find(wt=>kt>wt.x0+2.5&&kt<wt.x1-2.5);if(Et<ae.top+1&&!nt)yn=1,Rn=.35,Fe=1,lt=Math.max(0,lt-800),Ni=0,Vt("GATE CRASH  -800","#ff4a5a");else if(Et<ae.top+1&&nt&&nt.narrow){const wt=Math.round(300*Fe*(Yt?1.5:1));Fe=Math.min(8,Fe+.8),lt+=wt,Tn=Math.max(Tn,.3),Vt("THREAD THE NEEDLE  +"+wt,"#ff2bd6")}}}else if(ae.type==="scurve"){if(Ke<=0&&Xe>0&&!ae.passed&&(ae.passed=!0,ae.side=Et<ae.top+1&&kt>ae.g1+2?"ok":null,Et<ae.top+1&&kt<ae.g1+2&&(yn=1,Rn=.4,Fe=1,lt=Math.max(0,lt-600),Vt("WALL  -600","#ff4a5a"))),Ke-ae.len<=0&&Xe-ae.len>0&&!ae.hit){if(ae.hit=!0,Et<ae.top+1&&kt>ae.g2-2)yn=1,Rn=.4,Fe=1,lt=Math.max(0,lt-600),Vt("WALL  -600","#ff4a5a");else if(Et<ae.top+1&&ae.side==="ok"){const nt=Math.round(220*Fe*(Yt?1.5:1));Fe=Math.min(8,Fe+.5),lt+=nt,Vt("S-LINE  +"+nt,"#c0ff5e")}}}else if(ae.type==="bridge"){if(Ke<=0&&Xe>0&&!ae.passed){if(ae.passed=!0,Et>ae.yLow-1&&Et<ae.yHigh+1)yn=.9,Rn=.45,Fe=Math.max(1,Fe-2),lt=Math.max(0,lt-400),Vt("BRIDGE SLAM  -400","#ff4a5a");else if(Et<=ae.yLow-1&&Math.abs(Math.abs(kt)-110)<9)yn=.9,Rn=.45,Fe=Math.max(1,Fe-2),lt=Math.max(0,lt-400),Vt("PYLON  -400","#ff4a5a");else if(Et<=ae.yLow-1){const nt=Math.round(250*Fe*(Yt?1.5:1));Fe=Math.min(8,Fe+.5),lt+=nt,Tn=Math.max(Tn,.25),Vt("UNDERPASS  +"+nt,"#ffd24a")}}}else if(ae.type==="fork"){const nt=$.position.z>0&&$.position.z-ae.len<0,wt=$.position.z>0&&$.position.z-ae.lenL<0;if(Ke<=0&&Xe>0&&!ae.passed&&(ae.passed=!0,ae.side=Et<ae.top+1?kt<0?"L":"R":null),nt&&Et<ae.top+1&&!ae.hit&&(Math.abs(kt)<ae.divH+3||wt&&kt<ae.lXin-2||kt>ae.rXout+2)&&(ae.hit=!0,yn=.9,Rn=.45,Fe=Math.max(1,Fe-2),lt=Math.max(0,lt-500),Vt("FORK CRASH  -500","#ff4a5a")),Ke-ae.lenL<=0&&Xe-ae.lenL>0&&ae.side==="L"&&Et<ae.top+1&&!ae.hit){const on=Math.round(350*Fe*(Yt?1.5:1));Fe=Math.min(8,Fe+.8),lt+=on,Tn=Math.max(Tn,.3),Vt("SHORTCUT  +"+on,"#ff2bd6")}if(Ke-ae.len<=0&&Xe-ae.len>0&&ae.side==="R"&&Et<ae.top+1&&!ae.hit){const on=Math.round(120*Fe*(Yt?1.5:1));Fe=Math.min(8,Fe+.3),lt+=on,Vt("SAFE LINE  +"+on,"#2af0ff")}}else if(ae.type==="slalom")for(const nt of ae.pts){const wt=Ke+nt.z,on=Xe+nt.z;if(wt<=0&&on>0&&!nt.done){nt.done=!0;const ri=Math.abs(kt-nt.x);if(ri<8&&Et<90)yn=.8,Rn=.55,Fe=Math.max(1,Fe-1.5),lt=Math.max(0,lt-300),Vt("PYLON  -300","#ff4a5a");else if(ri<20&&Et<90){const jo=Math.round(120*Fe*(Yt?1.5:1));Fe=Math.min(8,Fe+.25),lt+=jo,Vt("SLALOM  +"+jo,"#2af0ff")}}}else{const nt=$.position.z>0&&$.position.z-ae.len<0;nt&&!ae.hit&&(Math.abs(kt)>ae.xLim||ae.yLim!==void 0&&Et>ae.yLim)&&(ae.hit=!0,yn=.8,Rn=.5,Fe=Math.max(1,Fe-2),lt=Math.max(0,lt-400),Vt("WALL SCRAPE  -400","#ff4a5a")),nt||(ae.hit=!1)}}H.offset.y+=Se/Re,Ue.offset.y+=Se/150,Rt.position.z=(Rt.position.z+Se)%90,zt.position.z=Rt.position.z;for(const $ of en)$.position.z+=Se*$.userData.rel,$.position.z>60&&($.position.z-=5900),$.position.z<-5900&&($.position.z+=5900);for(const $ of Ft)$.position.z+=Se,$.position.z>300&&($.position.z-=Cs);for(const $ of pt)$.rotation.z+=$.userData.spin*O*.03;for(const $ of _n)$.position.x+=$.userData.vx*O*2,$.position.z+=Se,$.position.x>1400&&($.position.x=-1400),$.position.x<-1400&&($.position.x=1400),$.position.z>-400&&($.position.z-=3400);for(const $ of Ce)$.rotation.y+=.05*O;for(const $ of Tt)$.position.z+=Se,$.position.z>200&&($.position.z-=6300),$.rotation.z=Math.sin(Zi*$.userData.sp+$.userData.ph)*.45;for(const $ of qn)$.position.z+=Se,$.position.z>100&&($.position.z-=6e3);for(const $ of $r)$.position.z+=Se,$.position.z>40&&($.position.z-=6080);for(const $ of No)$.position.z+=Se,$.position.z>60&&($.position.z-=6200);for(const $ of Jr)$.position.z+=Se,$.position.z>80&&($.position.z-=6e3);Ls+=Se,Un=Math.min(1,Ls/qt),vn.position.z=fi*(1-Un);const Pt=1+Un*.85;vn.scale.set(Pt,Pt,Pt),vn.position.y=30*(Pt-1);const mn=Un*Un;for(const $ of Ui)$.opacity=.12+.88*mn;for(const $ of dr)$.opacity=.42+.55*Un;pr.material.opacity=.14+.5*Math.pow(Un,1),ou.opacity=.5*(1-Un*.92),Math.abs(Un-ml)>.004&&Wo(Un),Ls>=qt&&!zn&&(zn=!0,yy()),vt.position.x=kt*.04;const kn=z*.6+yn*4+(Yt?.35:0);h.position.x+=(kt*.45+(Math.random()-.5)*kn-h.position.x)*.16,h.position.y+=(Et*.4+16+(Math.random()-.5)*kn-h.position.y)*.16,h.position.z=46-Ni*5-(Yt?3:0);const ct=66+Ni*4+(Yt?12:0)+Ho;if(Ho+=(0-Ho)*Math.min(1,Pe*5),Math.abs(h.fov-ct)>.05&&(h.fov+=(ct-h.fov)*.08,h.updateProjectionMatrix()),M.strength+=((Yt?1.25:.9)-M.strength)*.08,Xo.opacity+=((Yt?.7:0)-Xo.opacity)*.1,Xo.opacity>.02){mr.visible=!0,mr.position.set(kt,Et+.2,0);for(let $=0;$<uu;$++){const ae=a_[$];if(ae.z+=X*O*ae.v*.9,ae.z>26){ae.z=-150-Math.random()*40;const Xe=Math.random()*Math.PI*2,nt=6+Math.random()*16;ae.x=Math.cos(Xe)*nt,ae.y=Math.sin(Xe)*nt*.62}const Ke=$*6;os[Ke]=ae.x,os[Ke+1]=ae.y,os[Ke+2]=ae.z,os[Ke+3]=ae.x,os[Ke+4]=ae.y,os[Ke+5]=ae.z-ae.len}fu.attributes.position.needsUpdate=!0}else mr.visible=!1;h.lookAt(kt*.6,Et*.6+6,-90),Q.scale.setScalar(1.3+Un*.9+Un*Un*1.6),Q.position.y=-470+Un*340,document.getElementById("hud").textContent=`PUNK BOOSTER v3 REDLINE
TIME ${(ji*100).toFixed(0)}%   SUPERHOT ${pn.superhot?"ON":"off"}   speed ${X.toFixed(0)}   ${pu.toFixed(0)} fps   ${d} dc
LEVEL ${pi} \xB7 ${o[pi-1].name}   ${lu==="none"?"keyboard":"pad ok"}`;const Cn=document.getElementById("score");Cn.textContent=`SCORE ${String(Math.round(lt)).padStart(6,"0")}
\xD7${Fe.toFixed(1)}${Us?`
BUSTS `+Us:""}`,Cn.style.color=Fe>=6?"#ff2bd6":Fe>=3?"#2af0ff":"#ffe08a",document.getElementById("dmg").style.opacity=yn>0?Math.min(1,yn).toFixed(2):ns>1.2?(.16+.14*Math.sin(Zi*12)).toFixed(2):0,document.getElementById("bustfx").style.opacity=Tn>0?Tn.toFixed(2):0;{const $=Math.max(0,Math.min(1,(X-15)/45));document.getElementById("sbneedle").style.left=($*277).toFixed(0)+"px"}const At=document.getElementById("sblabel");ns>1.2?(At.textContent="CRITICAL SPEED",At.style.color="#ff2b3c",At.style.opacity=(.5+.5*Math.sin(Zi*14)).toFixed(2)):Yt?(At.textContent="REDLINE",At.style.color="#ff2bd6",At.style.opacity=(.7+.3*Math.sin(Zi*10)).toFixed(2)):(At.textContent="",At.style.opacity=1);const $t=document.getElementById("punkui");if(It)if(Ds>0)$t.textContent="PUNK DOWN - NEXT INBOUND",$t.style.color="#2af0ff";else{const $=Math.max(0,Math.round(-It.position.z));$t.textContent="\u25E4 PUNK  "+$+"m",$t.style.color=$<400?"#2af0ff":$>2400?"#ff5a5f":"#ffe08a"}u.info.reset(),S.render(),d=u.info.render.calls,requestAnimationFrame(Yo)}requestAnimationFrame(Yo),window.P=pn;var jn=(function(){let l=null,m=!1,p=1,y=0,E=0,L=null;const z=134,D=60/z,O=D/4,V=ct=>440*Math.pow(2,(ct-69)/12),b=[{root:33,arp:[57,60,64,69],chord:[57,60,64]},{root:29,arp:[53,57,60,65],chord:[53,57,60]},{root:36,arp:[60,64,67,72],chord:[60,64,67]},{root:31,arp:[55,59,62,67],chord:[55,59,62]}];function B(ct,Cn,At,$t,$,ae){const Ke=l.createOscillator(),Xe=l.createGain();return Ke.type=ct,Ke.frequency.setValueAtTime(Cn,At),Xe.gain.setValueAtTime(0,At),Xe.gain.linearRampToValueAtTime($,At+.008),Xe.gain.exponentialRampToValueAtTime(1e-4,At+$t),Ke.connect(Xe),Xe.connect(ae),Ke.start(At),Ke.stop(At+$t+.02),Ke}function I(ct,Cn,At,$t,$){const ae=Math.floor(l.sampleRate*Cn),Ke=l.createBuffer(1,ae,l.sampleRate),Xe=Ke.getChannelData(0);for(let ri=0;ri<ae;ri++)Xe[ri]=Math.random()*2-1;const nt=l.createBufferSource();nt.buffer=Ke;const wt=l.createBiquadFilter();wt.type="highpass",wt.frequency.value=$t;const on=l.createGain();on.gain.setValueAtTime(At,ct),on.gain.exponentialRampToValueAtTime(1e-4,ct+Cn),nt.connect(wt),wt.connect(on),on.connect($),nt.start(ct),nt.stop(ct+Cn+.02)}function X(ct,Cn){const At=l.createOscillator(),$t=l.createGain();At.type="sine",At.frequency.setValueAtTime(160,ct),At.frequency.exponentialRampToValueAtTime(48,ct+.12),$t.gain.setValueAtTime(.9,ct),$t.gain.exponentialRampToValueAtTime(1e-4,ct+.18),At.connect($t),$t.connect(Cn),At.start(ct),At.stop(ct+.2)}let se,fe,Le,Ne;function Se(){for(;E<l.currentTime+.12;){const ct=E,Cn=Math.floor(y/16)%b.length,At=b[Cn],$t=y%16;$t%4===0&&X(ct,Ne),$t%2===1&&I(ct,.03,.18*p,7e3,Ne),($t===4||$t===12)&&I(ct,.14,.35*p,1800,Ne),$t%2===0&&B("square",V(At.root),ct,O*1.8,.16,Le);const $=At.arp[$t%At.arp.length]+($t>=8?12:0);if(B("square",V($),ct,O*.9,.1*p,fe),$t===0)for(const ae of At.chord)B("sawtooth",V(ae+12),ct,D*.9,.05,fe);y++,E+=O}L=setTimeout(Se,25)}let Pe=null,bt="vice-runway.mp3",Pt=!1;function mn(ct){if(!Pe||Pt)return;const Cn=Pe.play();Cn&&Cn.then?(Pt=!0,Cn.then(()=>{Pt=!1,m=!0}).catch(At=>{Pt=!1,console.warn("[audio] play() abgelehnt ("+ct+"):",At&&At.name,At&&At.message)})):m=!0}function kn(){if(Pe)try{Pe.pause()}catch{}Pe=new Audio(bt),Pe.loop=!0,Pe.volume=1;try{Pe.preservesPitch=!1,Pe.mozPreservesPitch=!1}catch{}mn("load")}return{start(){m||(Pe?mn("start"):kn())},setTrack(ct){ct!==bt&&(bt=ct,(m||Pe)&&kn())},setEnergy(ct){Pe&&(Pe.playbackRate=.9+.1*Math.max(0,Math.min(1,ct)))},setRedline(ct){},pause(){Pe&&Pe.pause()},resume(){Pe&&mn("resume")},restart(){if(Pe){try{Pe.currentTime=0}catch{}mn("restart")}}}})(),cs=!1;function Bs(){if(jn.start(),cs)return;cs=!0,c.visible=!0;const l=document.getElementById("start");l&&(l.style.display="none")}if(document.getElementById("start").addEventListener("click",Bs),addEventListener("pointerdown",()=>{if(zn){performance.now()-is>600&&qo();return}Bs()}),location.hash.startsWith("#auto")){cs=!0,c.visible=!0;const l=document.getElementById("start");l&&(l.style.display="none")}{const l=location.hash.match(/lv(\d)/);if(l){const m=Math.max(1,Math.min(o.length,+l[1]));pi=m,h_(m)}}Ki&&(document.getElementById("hud").style.display="none",setTimeout(()=>Bs(),600))}});ey()})();/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
