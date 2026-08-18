(()=>{var li=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(s){throw t=[s],s}};var Z_=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function Eu(n,e){return(n%e+e)%e}function $y(n,e,t,s,r){return s+(n-e)*(r-s)/(t-e)}function Jy(n,e,t){return n!==e?(t-n)/(e-n):0}function ia(n,e,t){return(1-t)*n+t*e}function jy(n,e,t,s){return ia(n,e,1-Math.exp(-t*s))}function Qy(n,e=1){return e-Math.abs(Eu(n,e*2)-e)}function eM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function nM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function iM(n,e){return n+Math.random()*(e-n)}function sM(n){return n*(.5-Math.random())}function rM(n){n!==void 0&&(mm=n);let e=mm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oM(n){return n*Zr}function aM(n){return n*no}function Bf(n){return(n&n-1)===0&&n!==0}function lM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Jl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cM(n,e,t,s,r){let o=Math.cos,a=Math.sin,l=o(t/2),c=a(t/2),f=o((e+s)/2),h=a((e+s)/2),u=o((e-s)/2),d=a((e-s)/2),p=o((s-e)/2),_=a((s-e)/2);switch(r){case"XYX":n.set(l*h,c*u,c*d,l*f);break;case"YZY":n.set(c*d,l*h,c*u,l*f);break;case"ZXZ":n.set(c*u,c*d,l*h,l*f);break;case"XZX":n.set(l*h,c*_,c*p,l*f);break;case"YXY":n.set(c*p,l*h,c*_,l*f);break;case"ZYZ":n.set(c*_,c*p,l*h,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function U0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hM(){let n=ca("canvas");return n.style.display="block",n}function sa(n){n in gm||(gm[n]=!0,console.warn(n))}function $r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function ef(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function nf(n,e,t,s,r){for(let o=0,a=n.length-3;o<=a;o+=3){Ws.fromArray(n,o);let l=r.x*Math.abs(Ws.x)+r.y*Math.abs(Ws.y)+r.z*Math.abs(Ws.z),c=e.dot(Ws),f=t.dot(Ws),h=s.dot(Ws);if(Math.max(-Math.max(c,f,h),Math.min(c,f,h))>l)return!1}return!0}function uf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function SM(n,e,t,s,r,o,a,l){let c;if(e.side===Nn?c=s.intersectTriangle(a,o,r,!0,l):c=s.intersectTriangle(r,o,a,e.side===Ci,l),c===null)return null;Pl.copy(l),Pl.applyMatrix4(n.matrixWorld);let f=t.ray.origin.distanceTo(Pl);return f<t.near||f>t.far?null:{distance:f,point:Pl.clone(),object:n}}function Ll(n,e,t,s,r,o,a,l,c,f){n.getVertexPosition(l,Hr),n.getVertexPosition(c,zr),n.getVertexPosition(f,kr);let h=SM(n,e,t,s,Hr,zr,kr,Cl);if(h){r&&(Al.fromBufferAttribute(r,l),wl.fromBufferAttribute(r,c),Rl.fromBufferAttribute(r,f),h.uv=$s.getInterpolation(Cl,Hr,zr,kr,Al,wl,Rl,new ue)),o&&(Al.fromBufferAttribute(o,l),wl.fromBufferAttribute(o,c),Rl.fromBufferAttribute(o,f),h.uv1=$s.getInterpolation(Cl,Hr,zr,kr,Al,wl,Rl,new ue),h.uv2=h.uv1),a&&(Cm.fromBufferAttribute(a,l),Pm.fromBufferAttribute(a,c),Lm.fromBufferAttribute(a,f),h.normal=$s.getInterpolation(Cl,Hr,zr,kr,Cm,Pm,Lm,new N),h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1));let u={a:l,b:c,c:f,normal:new N,materialIndex:0};$s.getNormal(Hr,zr,kr,u.normal),h.face=u}return h}function so(n){let e={};for(let t in n){e[t]={};for(let s in n[t]){let r=n[t][s];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=r.clone():Array.isArray(r)?e[t][s]=r.slice():e[t][s]=r}}return e}function En(n){let e={};for(let t=0;t<n.length;t++){let s=so(n[t]);for(let r in s)e[r]=s[r]}return e}function TM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function O0(n){return n.getRenderTarget()===null?n.outputColorSpace:lt.workingColorSpace}function F0(){let n=null,e=!1,t=null,s=null;function r(o,a){t(o,a),s=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(s=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function PM(n,e){let t=e.isWebGL2,s=new WeakMap;function r(f,h){let u=f.array,d=f.usage,p=u.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,u,d),f.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:f.version,size:p}}function o(f,h,u){let d=h.array,p=h._updateRange,_=h.updateRanges;if(n.bindBuffer(u,f),p.count===-1&&_.length===0&&n.bufferSubData(u,0,d),_.length!==0){for(let y=0,g=_.length;y<g;y++){let m=_[y];t?n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),s.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);let h=s.get(f);h&&(n.deleteBuffer(h.buffer),s.delete(f))}function c(f,h){if(f.isGLBufferAttribute){let d=s.get(f);(!d||d.version<f.version)&&s.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);let u=s.get(f);if(u===void 0)s.set(f,r(f,h));else if(u.version<f.version){if(u.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(u.buffer,f,h),u.version=f.version}}return{get:a,remove:l,update:c}}function hE(n,e,t,s,r,o,a){let l=new Me(0),c=o===!0?0:1,f,h,u=null,d=0,p=null;function _(g,m){let x=!1,M=m.isScene===!0?m.background:null;M&&M.isTexture&&(M=(m.backgroundBlurriness>0?t:e).get(M)),M===null?y(l,c):M&&M.isColor&&(y(M,1),x=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?s.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ac)?(h===void 0&&(h=new j(new Ze(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:so(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=lt.getTransfer(M.colorSpace)!==Tt,(u!==M||d!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=n.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(f===void 0&&(f=new j(new We(2,2),new fn({name:"BackgroundMaterial",uniforms:so(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=M,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=lt.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),f.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,u=M,d=M.version,p=n.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null))}function y(g,m){g.getRGB(Nl,O0(n)),s.buffers.color.setClear(Nl.r,Nl.g,Nl.b,m,a)}return{getClearColor:function(){return l},setClearColor:function(g,m=1){l.set(g),c=m,y(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,y(l,c)},render:_}}function fE(n,e,t,s){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=s.isWebGL2?null:e.get("OES_vertex_array_object"),a=s.isWebGL2||o!==null,l={},c=g(null),f=c,h=!1;function u(B,V,Z,Q,v){let w=!1;if(a){let F=y(Q,Z,V);f!==F&&(f=F,p(f.object)),w=m(B,Q,Z,v),w&&x(B,Q,Z,v)}else{let F=V.wireframe===!0;(f.geometry!==Q.id||f.program!==Z.id||f.wireframe!==F)&&(f.geometry=Q.id,f.program=Z.id,f.wireframe=F,w=!0)}v!==null&&t.update(v,n.ELEMENT_ARRAY_BUFFER),(w||h)&&(h=!1,D(B,V,Z,Q),v!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(v).buffer))}function d(){return s.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function p(B){return s.isWebGL2?n.bindVertexArray(B):o.bindVertexArrayOES(B)}function _(B){return s.isWebGL2?n.deleteVertexArray(B):o.deleteVertexArrayOES(B)}function y(B,V,Z){let Q=Z.wireframe===!0,v=l[B.id];v===void 0&&(v={},l[B.id]=v);let w=v[V.id];w===void 0&&(w={},v[V.id]=w);let F=w[Q];return F===void 0&&(F=g(d()),w[Q]=F),F}function g(B){let V=[],Z=[],Q=[];for(let v=0;v<r;v++)V[v]=0,Z[v]=0,Q[v]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:Q,object:B,attributes:{},index:null}}function m(B,V,Z,Q){let v=f.attributes,w=V.attributes,F=0,H=Z.getAttributes();for(let $ in H)if(H[$].location>=0){let O=v[$],J=w[$];if(J===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;F++}return f.attributesNum!==F||f.index!==Q}function x(B,V,Z,Q){let v={},w=V.attributes,F=0,H=Z.getAttributes();for(let $ in H)if(H[$].location>=0){let O=w[$];O===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(O=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(O=B.instanceColor));let J={};J.attribute=O,O&&O.data&&(J.data=O.data),v[$]=J,F++}f.attributes=v,f.attributesNum=F,f.index=Q}function M(){let B=f.newAttributes;for(let V=0,Z=B.length;V<Z;V++)B[V]=0}function b(B){I(B,0)}function I(B,V){let Z=f.newAttributes,Q=f.enabledAttributes,v=f.attributeDivisors;Z[B]=1,Q[B]===0&&(n.enableVertexAttribArray(B),Q[B]=1),v[B]!==V&&((s.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,V),v[B]=V)}function R(){let B=f.newAttributes,V=f.enabledAttributes;for(let Z=0,Q=V.length;Z<Q;Z++)V[Z]!==B[Z]&&(n.disableVertexAttribArray(Z),V[Z]=0)}function L(B,V,Z,Q,v,w,F){F===!0?n.vertexAttribIPointer(B,V,Z,v,w):n.vertexAttribPointer(B,V,Z,Q,v,w)}function D(B,V,Z,Q){if(s.isWebGL2===!1&&(B.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let v=Q.attributes,w=Z.getAttributes(),F=V.defaultAttributeValues;for(let H in w){let $=w[H];if($.location>=0){let P=v[H];if(P===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(P=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(P=B.instanceColor)),P!==void 0){let O=P.normalized,J=P.itemSize,ee=t.get(P);if(ee===void 0)continue;let ce=ee.buffer,ye=ee.type,ve=ee.bytesPerElement,me=s.isWebGL2===!0&&(ye===n.INT||ye===n.UNSIGNED_INT||P.gpuType===b0);if(P.isInterleavedBufferAttribute){let Ue=P.data,G=Ue.stride,bt=P.offset;if(Ue.isInstancedInterleavedBuffer){for(let Ee=0;Ee<$.locationSize;Ee++)I($.location+Ee,Ue.meshPerAttribute);B.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Ee=0;Ee<$.locationSize;Ee++)b($.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Ee=0;Ee<$.locationSize;Ee++)L($.location+Ee,J/$.locationSize,ye,O,G*ve,(bt+J/$.locationSize*Ee)*ve,me)}else{if(P.isInstancedBufferAttribute){for(let Ue=0;Ue<$.locationSize;Ue++)I($.location+Ue,P.meshPerAttribute);B.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Ue=0;Ue<$.locationSize;Ue++)b($.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Ue=0;Ue<$.locationSize;Ue++)L($.location+Ue,J/$.locationSize,ye,O,J*ve,J/$.locationSize*Ue*ve,me)}}else if(F!==void 0){let O=F[H];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv($.location,O);break;case 3:n.vertexAttrib3fv($.location,O);break;case 4:n.vertexAttrib4fv($.location,O);break;default:n.vertexAttrib1fv($.location,O)}}}}R()}function E(){K();for(let B in l){let V=l[B];for(let Z in V){let Q=V[Z];for(let v in Q)_(Q[v].object),delete Q[v];delete V[Z]}delete l[B]}}function T(B){if(l[B.id]===void 0)return;let V=l[B.id];for(let Z in V){let Q=V[Z];for(let v in Q)_(Q[v].object),delete Q[v];delete V[Z]}delete l[B.id]}function k(B){for(let V in l){let Z=l[V];if(Z[B.id]===void 0)continue;let Q=Z[B.id];for(let v in Q)_(Q[v].object),delete Q[v];delete Z[B.id]}}function K(){ne(),h=!0,f!==c&&(f=c,p(f.object))}function ne(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:ne,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:M,enableAttribute:b,disableUnusedAttributes:R}}function uE(n,e,t,s){let r=s.isWebGL2,o;function a(h){o=h}function l(h,u){n.drawArrays(o,h,u),t.update(u,o,1)}function c(h,u,d){if(d===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](o,h,u,d),t.update(u,o,d)}function f(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(o,h,0,u,0,d);let _=0;for(let y=0;y<d;y++)_+=u[y];t.update(_,o,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function dE(n,e,t){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",l=t.precision!==void 0?t.precision:"highp",c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);let f=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,b=a||e.has("OES_texture_float"),I=M&&b,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:I,maxSamples:R}}function pE(n){let e=this,t=null,s=0,r=!1,o=!1,a=new $i,l=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||s!==0||r;return r=d,s=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let _=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!r||_===null||_.length===0||o&&!g)o?h(null):f();else{let x=o?0:s,M=x*4,b=m.clippingState||null;c.value=b,b=h(_,d,M,p);for(let I=0;I!==M;++I)b[I]=t[I];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function h(u,d,p,_){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=c.value,_!==!0||g===null){let m=p+y*4,x=d.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,b=p;M!==y;++M,b+=4)a.copy(u[M]).applyMatrix4(x,l),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function mE(n){let e=new WeakMap;function t(a,l){return l===If?a.mapping=jr:l===Nf&&(a.mapping=Qr),a}function s(a){if(a&&a.isTexture){let l=a.mapping;if(l===If||l===Nf)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let f=new zf(c.height/2);return f.fromEquirectangularTexture(n,a),e.set(a,f),a.addEventListener("dispose",r),t(f.texture,a.mapping)}else return null}}return a}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:s,dispose:o}}function gE(n){let e=[],t=[],s=[],r=n,o=n-qr+1+Im.length;for(let a=0;a<o;a++){let l=Math.pow(2,r);t.push(l);let c=1/l;a>n-qr?c=Im[a-n+qr-1]:a===0&&(c=0),s.push(c);let f=1/(l-2),h=-f,u=1+f,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,y=3,g=2,m=1,x=new Float32Array(y*_*p),M=new Float32Array(g*_*p),b=new Float32Array(m*_*p);for(let R=0;R<p;R++){let L=R%3*2/3-1,D=R>2?0:-1,E=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];x.set(E,y*_*R),M.set(d,g*_*R);let T=[R,R,R,R,R,R];b.set(T,m*_*R)}let I=new pt;I.setAttribute("position",new ht(x,y)),I.setAttribute("uv",new ht(M,g)),I.setAttribute("faceIndex",new ht(b,m)),e.push(I),r>qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Um(n,e,t){let s=new bn(n,e,t);return s.texture.mapping=Ac,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dl(n,e,t,s,r){n.viewport.set(e,t,s,r),n.scissor.set(e,t,s,r)}function _E(n,e,t){let s=new Float32Array(Zs),r=new N(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Bm(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Om(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}function yE(n){let e=new WeakMap,t=null;function s(l){if(l&&l.isTexture){let c=l.mapping,f=c===If||c===Nf,h=c===jr||c===Qr;if(f||h)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let u=e.get(l);return t===null&&(t=new ac(n)),u=f?t.fromEquirectangular(l,u):t.fromCubemap(l,u),e.set(l,u),u.texture}else{if(e.has(l))return e.get(l).texture;{let u=l.image;if(f&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new ac(n));let d=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,d),l.addEventListener("dispose",o),d.texture}else return null}}}return l}function r(l){let c=0,f=6;for(let h=0;h<f;h++)l[h]!==void 0&&c++;return c===f}function o(l){let c=l.target;c.removeEventListener("dispose",o);let f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:a}}function ME(n){let e={};function t(s){if(e[s]!==void 0)return e[s];let r;switch(s){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(s)}return e[s]=r,r}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){let r=t(s);return r===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),r}}}function xE(n,e,t,s){let r={},o=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let y=d.morphAttributes[_];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}d.removeEventListener("dispose",a),delete r[d.id];let p=o.get(d);p&&(e.remove(p),o.delete(d)),s.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let _ in d)e.update(d[_],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let _ in p){let y=p[_];for(let g=0,m=y.length;g<m;g++)e.update(y[g],n.ARRAY_BUFFER)}}function f(u){let d=[],p=u.index,_=u.attributes.position,y=0;if(p!==null){let x=p.array;y=p.version;for(let M=0,b=x.length;M<b;M+=3){let I=x[M+0],R=x[M+1],L=x[M+2];d.push(I,R,R,L,L,I)}}else if(_!==void 0){let x=_.array;y=_.version;for(let M=0,b=x.length/3-1;M<b;M+=3){let I=M+0,R=M+1,L=M+2;d.push(I,R,R,L,L,I)}}else return;let g=new(U0(d)?sc:ic)(d,1);g.version=y;let m=o.get(u);m&&e.remove(m),o.set(u,g)}function h(u){let d=o.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&f(u)}else f(u);return o.get(u)}return{get:l,update:c,getWireframeAttribute:h}}function vE(n,e,t,s){let r=s.isWebGL2,o;function a(p){o=p}let l,c;function f(p){l=p.type,c=p.bytesPerElement}function h(p,_){n.drawElements(o,_,l,p*c),t.update(_,o,1)}function u(p,_,y){if(y===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](o,_,l,p*c,y),t.update(_,o,y)}function d(p,_,y){if(y===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<y;m++)this.render(p[m]/c,_[m]);else{g.multiDrawElementsWEBGL(o,_,0,l,p,0,y);let m=0;for(let x=0;x<y;x++)m+=_[x];t.update(m,o,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function EE(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(o,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(o/3);break;case n.LINES:t.lines+=l*(o/2);break;case n.LINE_STRIP:t.lines+=l*(o-1);break;case n.LINE_LOOP:t.lines+=l*o;break;case n.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:s}}function bE(n,e){return n[0]-e[0]}function SE(n,e){return Math.abs(e[1])-Math.abs(n[1])}function TE(n,e,t){let s={},r=new Float32Array(8),o=new WeakMap,a=new _t,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function c(f,h,u){let d=f.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,y=o.get(h);if(y===void 0||y.count!==_){let B=function(){K.dispose(),o.delete(h),h.removeEventListener("dispose",B)};y!==void 0&&y.texture.dispose();let x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],D=0;x===!0&&(D=1),M===!0&&(D=2),b===!0&&(D=3);let E=h.attributes.position.count*D,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let k=new Float32Array(E*T*4*_),K=new ec(k,E,T,_);K.type=Ji,K.needsUpdate=!0;let ne=D*4;for(let V=0;V<_;V++){let Z=I[V],Q=R[V],v=L[V],w=E*T*4*V;for(let F=0;F<Z.count;F++){let H=F*ne;x===!0&&(a.fromBufferAttribute(Z,F),k[w+H+0]=a.x,k[w+H+1]=a.y,k[w+H+2]=a.z,k[w+H+3]=0),M===!0&&(a.fromBufferAttribute(Q,F),k[w+H+4]=a.x,k[w+H+5]=a.y,k[w+H+6]=a.z,k[w+H+7]=0),b===!0&&(a.fromBufferAttribute(v,F),k[w+H+8]=a.x,k[w+H+9]=a.y,k[w+H+10]=a.z,k[w+H+11]=v.itemSize===4?a.w:1)}}y={count:_,texture:K,size:new ue(E,T)},o.set(h,y),h.addEventListener("dispose",B)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];let m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=d===void 0?0:d.length,_=s[h.id];if(_===void 0||_.length!==p){_=[];for(let M=0;M<p;M++)_[M]=[M,0];s[h.id]=_}for(let M=0;M<p;M++){let b=_[M];b[0]=M,b[1]=d[M]}_.sort(SE);for(let M=0;M<8;M++)M<p&&_[M][1]?(l[M][0]=_[M][0],l[M][1]=_[M][1]):(l[M][0]=Number.MAX_SAFE_INTEGER,l[M][1]=0);l.sort(bE);let y=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let M=0;M<8;M++){let b=l[M],I=b[0],R=b[1];I!==Number.MAX_SAFE_INTEGER&&R?(y&&h.getAttribute("morphTarget"+M)!==y[I]&&h.setAttribute("morphTarget"+M,y[I]),g&&h.getAttribute("morphNormal"+M)!==g[I]&&h.setAttribute("morphNormal"+M,g[I]),r[M]=R,m+=R):(y&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),g&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}let x=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function AE(n,e,t,s){let r=new WeakMap;function o(c){let f=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function a(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}function co(n,e,t){let s=n[0];if(s<=0||s>0)return n;let r=e*t,o=Fm[r];if(o===void 0&&(o=new Float32Array(r),Fm[r]=o),e!==0){s.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(o,l)}return o}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,s=e.length;t<s;t++)n[t]=e[t]}function Cc(n,e){let t=Hm[e];t===void 0&&(t=new Int32Array(e),Hm[e]=t);for(let s=0;s!==e;++s)t[s]=n.allocateTextureUnit();return t}function wE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function CE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function PE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function LE(n,e){let t=this.cache,s=e.elements;if(s===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,s))return;Gm.set(s),n.uniformMatrix2fv(this.addr,!1,Gm),qt(t,s)}}function IE(n,e){let t=this.cache,s=e.elements;if(s===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,s))return;km.set(s),n.uniformMatrix3fv(this.addr,!1,km),qt(t,s)}}function NE(n,e){let t=this.cache,s=e.elements;if(s===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,s))return;zm.set(s),n.uniformMatrix4fv(this.addr,!1,zm),qt(t,s)}}function DE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function UE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function BE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function OE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function FE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function HE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function zE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function kE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function GE(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r);let o=this.type===n.SAMPLER_2D_SHADOW?z0:H0;t.setTexture2D(e||o,r)}function VE(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTexture3D(e||G0,r)}function WE(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTextureCube(e||V0,r)}function XE(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTexture2DArray(e||k0,r)}function qE(n){switch(n){case 5126:return wE;case 35664:return RE;case 35665:return CE;case 35666:return PE;case 35674:return LE;case 35675:return IE;case 35676:return NE;case 5124:case 35670:return DE;case 35667:case 35671:return UE;case 35668:case 35672:return BE;case 35669:case 35673:return OE;case 5125:return FE;case 36294:return HE;case 36295:return zE;case 36296:return kE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}function YE(n,e){n.uniform1fv(this.addr,e)}function KE(n,e){let t=co(e,this.size,2);n.uniform2fv(this.addr,t)}function ZE(n,e){let t=co(e,this.size,3);n.uniform3fv(this.addr,t)}function $E(n,e){let t=co(e,this.size,4);n.uniform4fv(this.addr,t)}function JE(n,e){let t=co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jE(n,e){let t=co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QE(n,e){let t=co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e1(n,e){n.uniform1iv(this.addr,e)}function t1(n,e){n.uniform2iv(this.addr,e)}function n1(n,e){n.uniform3iv(this.addr,e)}function i1(n,e){n.uniform4iv(this.addr,e)}function s1(n,e){n.uniform1uiv(this.addr,e)}function r1(n,e){n.uniform2uiv(this.addr,e)}function o1(n,e){n.uniform3uiv(this.addr,e)}function a1(n,e){n.uniform4uiv(this.addr,e)}function l1(n,e,t){let s=this.cache,r=e.length,o=Cc(t,r);Xt(s,o)||(n.uniform1iv(this.addr,o),qt(s,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||H0,o[a])}function c1(n,e,t){let s=this.cache,r=e.length,o=Cc(t,r);Xt(s,o)||(n.uniform1iv(this.addr,o),qt(s,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||G0,o[a])}function h1(n,e,t){let s=this.cache,r=e.length,o=Cc(t,r);Xt(s,o)||(n.uniform1iv(this.addr,o),qt(s,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||V0,o[a])}function f1(n,e,t){let s=this.cache,r=e.length,o=Cc(t,r);Xt(s,o)||(n.uniform1iv(this.addr,o),qt(s,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||k0,o[a])}function u1(n){switch(n){case 5126:return YE;case 35664:return KE;case 35665:return ZE;case 35666:return $E;case 35674:return JE;case 35675:return jE;case 35676:return QE;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return s1;case 36294:return r1;case 36295:return o1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return f1}}function Vm(n,e){n.seq.push(e),n.map[e.id]=e}function d1(n,e,t){let s=n.name,r=s.length;for(xf.lastIndex=0;;){let o=xf.exec(s),a=xf.lastIndex,l=o[1],c=o[2]==="]",f=o[3];if(c&&(l=l|0),f===void 0||f==="["&&a+2===r){Vm(t,f===void 0?new kf(l,n,e):new Gf(l,n,e));break}else{let u=t.map[l];u===void 0&&(u=new Vf(l),Vm(t,u)),t=u}}}function Wm(n,e,t){let s=n.createShader(e);return n.shaderSource(s,t),n.compileShader(s),s}function g1(n,e){let t=n.split(`
`),s=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){let l=a+1;s.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return s.join(`
`)}function _1(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),s;switch(e===t?s="":e===Zl&&t===Kl?s="LinearDisplayP3ToLinearSRGB":e===Kl&&t===Zl&&(s="LinearSRGBToLinearDisplayP3"),n){case Wt:case Rc:return[s,"LinearTransferOETF"];case ct:case vu:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[s,"LinearTransferOETF"]}}function Xm(n,e,t){let s=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(s&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+g1(n.getShaderSource(e),a)}else return r}function y1(n,e){let t=_1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function M1(n,e){let t;switch(e){case Sy:t="Linear";break;case Ty:t="Reinhard";break;case Ay:t="OptimizedCineon";break;case wy:t="ACESFilmic";break;case Cy:t="AgX";break;case Ry:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function x1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function v1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Yr).join(`
`)}function E1(n){let e=[];for(let t in n){let s=n[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function b1(n,e){let t={},s=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let o=n.getActiveAttrib(e,r),a=o.name,l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function Yr(n){return n!==""}function qm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Wf(n){return n.replace(S1,A1)}function A1(n,e){let t=qe[e];if(t===void 0){let s=T1.get(e);if(s!==void 0)t=qe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Wf(t)}function Km(n){return n.replace(w1,R1)}function R1(n,e,t,s){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Zm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===x0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===j_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function P1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Qr&&(e="ENVMAP_MODE_REFRACTION"),e}function I1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case v0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ey:e="ENVMAP_BLENDING_MIX";break;case by:e="ENVMAP_BLENDING_ADD";break}return e}function N1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function D1(n,e,t,s){let r=n.getContext(),o=t.defines,a=t.vertexShader,l=t.fragmentShader,c=C1(t),f=P1(t),h=L1(t),u=I1(t),d=N1(t),p=t.isWebGL2?"":x1(t),_=v1(t),y=E1(o),g=r.createProgram(),m,x,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Yr).join(`
`),m.length>0&&(m+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Yr).join(`
`),x.length>0&&(x+=`
`)):(m=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),x=[p,Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ys?"#define TONE_MAPPING":"",t.toneMapping!==ys?qe.tonemapping_pars_fragment:"",t.toneMapping!==ys?M1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,y1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Wf(a),a=qm(a,t),a=Ym(a,t),l=Wf(l),l=qm(l,t),l=Ym(l,t),a=Km(a),l=Km(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=M+m+a,I=M+x+l,R=Wm(r,r.VERTEX_SHADER,b),L=Wm(r,r.FRAGMENT_SHADER,I);r.attachShader(g,R),r.attachShader(g,L),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function D(K){if(n.debug.checkShaderErrors){let ne=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(L).trim(),Z=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,R,L);else{let v=Xm(r,R,"vertex"),w=Xm(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+v+`
`+w)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(B===""||V==="")&&(Q=!1);Q&&(K.diagnostics={runnable:Z,programLog:ne,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:x}})}r.deleteShader(R),r.deleteShader(L),E=new Jr(r,g),T=b1(r,g)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(g,p1)),k},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=L,this}function B1(n,e,t,s,r,o,a){let l=new nc,c=new Xf,f=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function g(E,T,k,K,ne){let B=K.fog,V=ne.geometry,Z=E.isMeshStandardMaterial?K.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),v=Q&&Q.mapping===Ac?Q.image.height:null,w=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let F=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,H=F!==void 0?F.length:0,$=0;V.morphAttributes.position!==void 0&&($=1),V.morphAttributes.normal!==void 0&&($=2),V.morphAttributes.color!==void 0&&($=3);let P,O,J,ee;if(w){let Mn=Ai[w];P=Mn.vertexShader,O=Mn.fragmentShader}else P=E.vertexShader,O=E.fragmentShader,c.update(E),J=c.getVertexShaderID(E),ee=c.getFragmentShaderID(E);let ce=n.getRenderTarget(),ye=ne.isInstancedMesh===!0,ve=ne.isBatchedMesh===!0,me=!!E.map,Ue=!!E.matcap,G=!!Q,bt=!!E.aoMap,Ee=!!E.lightMap,Le=!!E.bumpMap,xe=!!E.normalMap,St=!!E.displacementMap,He=!!E.emissiveMap,C=!!E.metalnessMap,S=!!E.roughnessMap,X=E.anisotropy>0,se=E.clearcoat>0,ie=E.iridescence>0,re=E.sheen>0,be=E.transmission>0,de=X&&!!E.anisotropyMap,ge=se&&!!E.clearcoatMap,Pe=se&&!!E.clearcoatNormalMap,Ye=se&&!!E.clearcoatRoughnessMap,te=ie&&!!E.iridescenceMap,mt=ie&&!!E.iridescenceThicknessMap,et=re&&!!E.sheenColorMap,ze=re&&!!E.sheenRoughnessMap,Te=!!E.specularMap,_e=!!E.specularColorMap,Xe=!!E.specularIntensityMap,dt=be&&!!E.transmissionMap,Lt=be&&!!E.thicknessMap,Je=!!E.gradientMap,ae=!!E.alphaMap,U=E.alphaTest>0,he=!!E.alphaHash,fe=!!E.extensions,Ie=!!V.attributes.uv1,Re=!!V.attributes.uv2,Mt=!!V.attributes.uv3,xt=ys;return E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(xt=n.toneMapping),{isWebGL2:h,shaderID:w,shaderType:E.type,shaderName:E.name,vertexShader:P,fragmentShader:O,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ve,instancing:ye,instancingColor:ye&&ne.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Wt,map:me,matcap:Ue,envMap:G,envMapMode:G&&Q.mapping,envMapCubeUVHeight:v,aoMap:bt,lightMap:Ee,bumpMap:Le,normalMap:xe,displacementMap:d&&St,emissiveMap:He,normalMapObjectSpace:xe&&E.normalMapType===Gy,normalMapTangentSpace:xe&&E.normalMapType===I0,metalnessMap:C,roughnessMap:S,anisotropy:X,anisotropyMap:de,clearcoat:se,clearcoatMap:ge,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ye,iridescence:ie,iridescenceMap:te,iridescenceThicknessMap:mt,sheen:re,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:Te,specularColorMap:_e,specularIntensityMap:Xe,transmission:be,transmissionMap:dt,thicknessMap:Lt,gradientMap:Je,opaque:E.transparent===!1&&E.blending===Kr,alphaMap:ae,alphaTest:U,alphaHash:he,combine:E.combine,mapUv:me&&y(E.map.channel),aoMapUv:bt&&y(E.aoMap.channel),lightMapUv:Ee&&y(E.lightMap.channel),bumpMapUv:Le&&y(E.bumpMap.channel),normalMapUv:xe&&y(E.normalMap.channel),displacementMapUv:St&&y(E.displacementMap.channel),emissiveMapUv:He&&y(E.emissiveMap.channel),metalnessMapUv:C&&y(E.metalnessMap.channel),roughnessMapUv:S&&y(E.roughnessMap.channel),anisotropyMapUv:de&&y(E.anisotropyMap.channel),clearcoatMapUv:ge&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:et&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&y(E.sheenRoughnessMap.channel),specularMapUv:Te&&y(E.specularMap.channel),specularColorMapUv:_e&&y(E.specularColorMap.channel),specularIntensityMapUv:Xe&&y(E.specularIntensityMap.channel),transmissionMapUv:dt&&y(E.transmissionMap.channel),thicknessMapUv:Lt&&y(E.thicknessMap.channel),alphaMapUv:ae&&y(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xe||X),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Re,vertexUv3s:Mt,pointsUvs:ne.isPoints===!0&&!!V.attributes.uv&&(me||ae),fog:!!B,useFog:E.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ne.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:$,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:me&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===Tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yt,flipSided:E.side===Nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:fe&&E.extensions.derivatives===!0,extensionFragDepth:fe&&E.extensions.fragDepth===!0,extensionDrawBuffers:fe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&E.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let k in E.defines)T.push(k),T.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(x(T,E),M(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function x(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function M(E,T){l.disableAll(),T.isWebGL2&&l.enable(0),T.supportsVertexTextures&&l.enable(1),T.instancing&&l.enable(2),T.instancingColor&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),T.batching&&l.enable(19),E.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.skinning&&l.enable(4),T.morphTargets&&l.enable(5),T.morphNormals&&l.enable(6),T.morphColors&&l.enable(7),T.premultipliedAlpha&&l.enable(8),T.shadowMapEnabled&&l.enable(9),T.useLegacyLights&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),E.push(l.mask)}function b(E){let T=_[E.type],k;if(T){let K=Ai[T];k=lo.clone(K.uniforms)}else k=E.uniforms;return k}function I(E,T){let k;for(let K=0,ne=f.length;K<ne;K++){let B=f[K];if(B.cacheKey===T){k=B,++k.usedTimes;break}}return k===void 0&&(k=new D1(n,T,E,o),f.push(k)),k}function R(E){if(--E.usedTimes===0){let T=f.indexOf(E);f[T]=f[f.length-1],f.pop(),E.destroy()}}function L(E){c.remove(E)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:I,releaseProgram:R,releaseShaderCache:L,programs:f,dispose:D}}function O1(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{get:e,remove:t,update:s,dispose:r}}function F1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jm(){let n=[],e=0,t=[],s=[],r=[];function o(){e=0,t.length=0,s.length=0,r.length=0}function a(u,d,p,_,y,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:y,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=y,m.group=g),e++,m}function l(u,d,p,_,y,g){let m=a(u,d,p,_,y,g);p.transmission>0?s.push(m):p.transparent===!0?r.push(m):t.push(m)}function c(u,d,p,_,y,g){let m=a(u,d,p,_,y,g);p.transmission>0?s.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function f(u,d){t.length>1&&t.sort(u||F1),s.length>1&&s.sort(d||$m),r.length>1&&r.sort(d||$m)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:s,transparent:r,init:o,push:l,unshift:c,finish:h,sort:f}}function H1(){let n=new WeakMap;function e(s,r){let o=n.get(s),a;return o===void 0?(a=new Jm,n.set(s,[a])):r>=o.length?(a=new Jm,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function z1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Me};break;case"SpotLight":t={position:new N,direction:new N,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function k1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function V1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W1(n,e){let t=new z1,s=k1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new N);let o=new N,a=new Be,l=new Be;function c(h,u){let d=0,p=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let y=0,g=0,m=0,x=0,M=0,b=0,I=0,R=0,L=0,D=0,E=0;h.sort(V1);let T=u===!0?Math.PI:1;for(let K=0,ne=h.length;K<ne;K++){let B=h[K],V=B.color,Z=B.intensity,Q=B.distance,v=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=V.r*Z*T,p+=V.g*Z*T,_+=V.b*Z*T;else if(B.isLightProbe){for(let w=0;w<9;w++)r.probe[w].addScaledVector(B.sh.coefficients[w],Z);E++}else if(B.isDirectionalLight){let w=t.get(B);if(w.color.copy(B.color).multiplyScalar(B.intensity*T),B.castShadow){let F=B.shadow,H=s.get(B);H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,r.directionalShadow[y]=H,r.directionalShadowMap[y]=v,r.directionalShadowMatrix[y]=B.shadow.matrix,b++}r.directional[y]=w,y++}else if(B.isSpotLight){let w=t.get(B);w.position.setFromMatrixPosition(B.matrixWorld),w.color.copy(V).multiplyScalar(Z*T),w.distance=Q,w.coneCos=Math.cos(B.angle),w.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),w.decay=B.decay,r.spot[m]=w;let F=B.shadow;if(B.map&&(r.spotLightMap[L]=B.map,L++,F.updateMatrices(B),B.castShadow&&D++),r.spotLightMatrix[m]=F.matrix,B.castShadow){let H=s.get(B);H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,r.spotShadow[m]=H,r.spotShadowMap[m]=v,R++}m++}else if(B.isRectAreaLight){let w=t.get(B);w.color.copy(V).multiplyScalar(Z),w.halfWidth.set(B.width*.5,0,0),w.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=w,x++}else if(B.isPointLight){let w=t.get(B);if(w.color.copy(B.color).multiplyScalar(B.intensity*T),w.distance=B.distance,w.decay=B.decay,B.castShadow){let F=B.shadow,H=s.get(B);H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,H.shadowCameraNear=F.camera.near,H.shadowCameraFar=F.camera.far,r.pointShadow[g]=H,r.pointShadowMap[g]=v,r.pointShadowMatrix[g]=B.shadow.matrix,I++}r.point[g]=w,g++}else if(B.isHemisphereLight){let w=t.get(B);w.skyColor.copy(B.color).multiplyScalar(Z*T),w.groundColor.copy(B.groundColor).multiplyScalar(Z*T),r.hemi[M]=w,M++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;let k=r.hash;(k.directionalLength!==y||k.pointLength!==g||k.spotLength!==m||k.rectAreaLength!==x||k.hemiLength!==M||k.numDirectionalShadows!==b||k.numPointShadows!==I||k.numSpotShadows!==R||k.numSpotMaps!==L||k.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=m,r.rectArea.length=x,r.point.length=g,r.hemi.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=R+L-D,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=E,k.directionalLength=y,k.pointLength=g,k.spotLength=m,k.rectAreaLength=x,k.hemiLength=M,k.numDirectionalShadows=b,k.numPointShadows=I,k.numSpotShadows=R,k.numSpotMaps=L,k.numLightProbes=E,r.version=G1++)}function f(h,u){let d=0,p=0,_=0,y=0,g=0,m=u.matrixWorldInverse;for(let x=0,M=h.length;x<M;x++){let b=h[x];if(b.isDirectionalLight){let I=r.directional[d];I.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(m),d++}else if(b.isSpotLight){let I=r.spot[_];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(m),_++}else if(b.isRectAreaLight){let I=r.rectArea[y];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(m),l.identity(),a.copy(b.matrixWorld),a.premultiply(m),l.extractRotation(a),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(l),I.halfHeight.applyMatrix4(l),y++}else if(b.isPointLight){let I=r.point[p];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){let I=r.hemi[g];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(m),g++}}}return{setup:c,setupView:f,state:r}}function jm(n,e){let t=new W1(n,e),s=[],r=[];function o(){s.length=0,r.length=0}function a(u){s.push(u)}function l(u){r.push(u)}function c(u){t.setup(s,u)}function f(u){t.setupView(s,u)}return{init:o,state:{lightsArray:s,shadowsArray:r,lights:t},setupLights:c,setupLightsView:f,pushLight:a,pushShadow:l}}function X1(n,e){let t=new WeakMap;function s(o,a=0){let l=t.get(o),c;return l===void 0?(c=new jm(n,e),t.set(o,[c])):a>=l.length?(c=new jm(n,e),l.push(c)):c=l[a],c}function r(){t=new WeakMap}return{get:s,dispose:r}}function K1(n,e,t){let s=new ha,r=new ue,o=new ue,a=new _t,l=new Yf({depthPacking:ky}),c=new Kf,f={},h=t.maxTextureSize,u={[Ci]:Nn,[Nn]:Ci,[yt]:yt},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:q1,fragmentShader:Y1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new pt;_.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new j(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x0;let m=this.type;this.render=function(R,L,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let E=n.getRenderTarget(),T=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Ri),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let ne=m!==Zi&&this.type===Zi,B=m===Zi&&this.type!==Zi;for(let V=0,Z=R.length;V<Z;V++){let Q=R[V],v=Q.shadow;if(v===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;r.copy(v.mapSize);let w=v.getFrameExtents();if(r.multiply(w),o.copy(v.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/w.x),r.x=o.x*w.x,v.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/w.y),r.y=o.y*w.y,v.mapSize.y=o.y)),v.map===null||ne===!0||B===!0){let H=this.type!==Zi?{minFilter:At,magFilter:At}:{};v.map!==null&&v.map.dispose(),v.map=new bn(r.x,r.y,H),v.map.texture.name=Q.name+".shadowMap",v.camera.updateProjectionMatrix()}n.setRenderTarget(v.map),n.clear();let F=v.getViewportCount();for(let H=0;H<F;H++){let $=v.getViewport(H);a.set(o.x*$.x,o.y*$.y,o.x*$.z,o.y*$.w),K.viewport(a),v.updateMatrices(Q,H),s=v.getFrustum(),b(L,D,v.camera,Q,this.type)}v.isPointLightShadow!==!0&&this.type===Zi&&x(v,D),v.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(E,T,k)};function x(R,L){let D=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new bn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,D,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,D,p,y,null)}function M(R,L,D,E){let T=null,k=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)T=k;else if(T=D.isPointLight===!0?c:l,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let K=T.uuid,ne=L.uuid,B=f[K];B===void 0&&(B={},f[K]=B);let V=B[ne];V===void 0&&(V=T.clone(),B[ne]=V,L.addEventListener("dispose",I)),T=V}if(T.visible=L.visible,T.wireframe=L.wireframe,E===Zi?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:u[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let K=n.properties.get(T);K.light=D}return T}function b(R,L,D,E,T){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Zi)&&(!R.frustumCulled||s.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let ne=e.update(R),B=R.material;if(Array.isArray(B)){let V=ne.groups;for(let Z=0,Q=V.length;Z<Q;Z++){let v=V[Z],w=B[v.materialIndex];if(w&&w.visible){let F=M(R,w,E,T);R.onBeforeShadow(n,R,L,D,ne,F,v),n.renderBufferDirect(D,null,ne,F,R,v),R.onAfterShadow(n,R,L,D,ne,F,v)}}}else if(B.visible){let V=M(R,B,E,T);R.onBeforeShadow(n,R,L,D,ne,V,null),n.renderBufferDirect(D,null,ne,V,R,null),R.onAfterShadow(n,R,L,D,ne,V,null)}}let K=R.children;for(let ne=0,B=K.length;ne<B;ne++)b(K[ne],L,D,E,T)}function I(R){R.target.removeEventListener("dispose",I);for(let D in f){let E=f[D],T=R.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function Z1(n,e,t){let s=t.isWebGL2;function r(){let U=!1,he=new _t,fe=null,Ie=new _t(0,0,0,0);return{setMask:function(Re){fe!==Re&&!U&&(n.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){U=Re},setClear:function(Re,Mt,xt,jt,Mn){Mn===!0&&(Re*=jt,Mt*=jt,xt*=jt),he.set(Re,Mt,xt,jt),Ie.equals(he)===!1&&(n.clearColor(Re,Mt,xt,jt),Ie.copy(he))},reset:function(){U=!1,fe=null,Ie.set(-1,0,0,0)}}}function o(){let U=!1,he=null,fe=null,Ie=null;return{setTest:function(Re){Re?ve(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(Re){he!==Re&&!U&&(n.depthMask(Re),he=Re)},setFunc:function(Re){if(fe!==Re){switch(Re){case my:n.depthFunc(n.NEVER);break;case gy:n.depthFunc(n.ALWAYS);break;case _y:n.depthFunc(n.LESS);break;case Xl:n.depthFunc(n.LEQUAL);break;case yy:n.depthFunc(n.EQUAL);break;case My:n.depthFunc(n.GEQUAL);break;case xy:n.depthFunc(n.GREATER);break;case vy:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Re}},setLocked:function(Re){U=Re},setClear:function(Re){Ie!==Re&&(n.clearDepth(Re),Ie=Re)},reset:function(){U=!1,he=null,fe=null,Ie=null}}}function a(){let U=!1,he=null,fe=null,Ie=null,Re=null,Mt=null,xt=null,jt=null,Mn=null;return{setTest:function(vt){U||(vt?ve(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(vt){he!==vt&&!U&&(n.stencilMask(vt),he=vt)},setFunc:function(vt,xn,Ti){(fe!==vt||Ie!==xn||Re!==Ti)&&(n.stencilFunc(vt,xn,Ti),fe=vt,Ie=xn,Re=Ti)},setOp:function(vt,xn,Ti){(Mt!==vt||xt!==xn||jt!==Ti)&&(n.stencilOp(vt,xn,Ti),Mt=vt,xt=xn,jt=Ti)},setLocked:function(vt){U=vt},setClear:function(vt){Mn!==vt&&(n.clearStencil(vt),Mn=vt)},reset:function(){U=!1,he=null,fe=null,Ie=null,Re=null,Mt=null,xt=null,jt=null,Mn=null}}}let l=new r,c=new o,f=new a,h=new WeakMap,u=new WeakMap,d={},p={},_=new WeakMap,y=[],g=null,m=!1,x=null,M=null,b=null,I=null,R=null,L=null,D=null,E=new Me(0,0,0),T=0,k=!1,K=null,ne=null,B=null,V=null,Z=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),v=!1,w=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(F)[1]),v=w>=1):F.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),v=w>=2);let H=null,$={},P=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),J=new _t().fromArray(P),ee=new _t().fromArray(O);function ce(U,he,fe,Ie){let Re=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(U,Mt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xt=0;xt<fe;xt++)s&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(he+xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Mt}let ye={};ye[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(ye[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ve(n.DEPTH_TEST),c.setFunc(Xl),He(!1),C(Np),ve(n.CULL_FACE),xe(Ri);function ve(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function me(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Ue(U,he){return p[U]!==he?(n.bindFramebuffer(U,he),p[U]=he,s&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=he),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function G(U,he){let fe=y,Ie=!1;if(U)if(fe=_.get(he),fe===void 0&&(fe=[],_.set(he,fe)),U.isWebGLMultipleRenderTargets){let Re=U.texture;if(fe.length!==Re.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,xt=Re.length;Mt<xt;Mt++)fe[Mt]=n.COLOR_ATTACHMENT0+Mt;fe.length=Re.length,Ie=!0}}else fe[0]!==n.COLOR_ATTACHMENT0&&(fe[0]=n.COLOR_ATTACHMENT0,Ie=!0);else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function bt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}let Ee={[Ks]:n.FUNC_ADD,[ey]:n.FUNC_SUBTRACT,[ty]:n.FUNC_REVERSE_SUBTRACT};if(s)Ee[Bp]=n.MIN,Ee[Op]=n.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(Ee[Bp]=U.MIN_EXT,Ee[Op]=U.MAX_EXT)}let Le={[ny]:n.ZERO,[iy]:n.ONE,[sy]:n.SRC_COLOR,[Pf]:n.SRC_ALPHA,[hy]:n.SRC_ALPHA_SATURATE,[ly]:n.DST_COLOR,[oy]:n.DST_ALPHA,[ry]:n.ONE_MINUS_SRC_COLOR,[Lf]:n.ONE_MINUS_SRC_ALPHA,[cy]:n.ONE_MINUS_DST_COLOR,[ay]:n.ONE_MINUS_DST_ALPHA,[fy]:n.CONSTANT_COLOR,[uy]:n.ONE_MINUS_CONSTANT_COLOR,[dy]:n.CONSTANT_ALPHA,[py]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(U,he,fe,Ie,Re,Mt,xt,jt,Mn,vt){if(U===Ri){m===!0&&(me(n.BLEND),m=!1);return}if(m===!1&&(ve(n.BLEND),m=!0),U!==Q_){if(U!==x||vt!==k){if((M!==Ks||R!==Ks)&&(n.blendEquation(n.FUNC_ADD),M=Ks,R=Ks),vt)switch(U){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ut:n.blendFunc(n.ONE,n.ONE);break;case Dp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Up:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ut:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Up:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,I=null,L=null,D=null,E.set(0,0,0),T=0,x=U,k=vt}return}Re=Re||he,Mt=Mt||fe,xt=xt||Ie,(he!==M||Re!==R)&&(n.blendEquationSeparate(Ee[he],Ee[Re]),M=he,R=Re),(fe!==b||Ie!==I||Mt!==L||xt!==D)&&(n.blendFuncSeparate(Le[fe],Le[Ie],Le[Mt],Le[xt]),b=fe,I=Ie,L=Mt,D=xt),(jt.equals(E)===!1||Mn!==T)&&(n.blendColor(jt.r,jt.g,jt.b,Mn),E.copy(jt),T=Mn),x=U,k=!1}function St(U,he){U.side===yt?me(n.CULL_FACE):ve(n.CULL_FACE);let fe=U.side===Nn;he&&(fe=!fe),He(fe),U.blending===Kr&&U.transparent===!1?xe(Ri):xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),l.setMask(U.colorWrite);let Ie=U.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(U.stencilWriteMask),f.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),f.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),X(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){K!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),K=U)}function C(U){U!==$_?(ve(n.CULL_FACE),U!==ne&&(U===Np?n.cullFace(n.BACK):U===J_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),ne=U}function S(U){U!==B&&(v&&n.lineWidth(U),B=U)}function X(U,he,fe){U?(ve(n.POLYGON_OFFSET_FILL),(V!==he||Z!==fe)&&(n.polygonOffset(he,fe),V=he,Z=fe)):me(n.POLYGON_OFFSET_FILL)}function se(U){U?ve(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function ie(U){U===void 0&&(U=n.TEXTURE0+Q-1),H!==U&&(n.activeTexture(U),H=U)}function re(U,he,fe){fe===void 0&&(H===null?fe=n.TEXTURE0+Q-1:fe=H);let Ie=$[fe];Ie===void 0&&(Ie={type:void 0,texture:void 0},$[fe]=Ie),(Ie.type!==U||Ie.texture!==he)&&(H!==fe&&(n.activeTexture(fe),H=fe),n.bindTexture(U,he||ye[U]),Ie.type=U,Ie.texture=he)}function be(){let U=$[H];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function de(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(U){J.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),J.copy(U))}function dt(U){ee.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Lt(U,he){let fe=u.get(he);fe===void 0&&(fe=new WeakMap,u.set(he,fe));let Ie=fe.get(U);Ie===void 0&&(Ie=n.getUniformBlockIndex(he,U.name),fe.set(U,Ie))}function Je(U,he){let Ie=u.get(he).get(U);h.get(he)!==Ie&&(n.uniformBlockBinding(he,Ie,U.__bindingPointIndex),h.set(he,Ie))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),s===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},H=null,$={},p={},_=new WeakMap,y=[],g=null,m=!1,x=null,M=null,b=null,I=null,R=null,L=null,D=null,E=new Me(0,0,0),T=0,k=!1,K=null,ne=null,B=null,V=null,Z=null,J.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ve,disable:me,bindFramebuffer:Ue,drawBuffers:G,useProgram:bt,setBlending:xe,setMaterial:St,setFlipSided:He,setCullFace:C,setLineWidth:S,setPolygonOffset:X,setScissorTest:se,activeTexture:ie,bindTexture:re,unbindTexture:be,compressedTexImage2D:de,compressedTexImage3D:ge,texImage2D:Te,texImage3D:_e,updateUBOMapping:Lt,uniformBlockBinding:Je,texStorage2D:et,texStorage3D:ze,texSubImage2D:Pe,texSubImage3D:Ye,compressedTexSubImage2D:te,compressedTexSubImage3D:mt,scissor:Xe,viewport:dt,reset:ae}}function $1(n,e,t,s,r,o,a){let l=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):ca("canvas")}function y(C,S,X,se){let ie=1;if((C.width>se||C.height>se)&&(ie=se/Math.max(C.width,C.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let re=S?Jl:Math.floor,be=re(ie*C.width),de=re(ie*C.height);u===void 0&&(u=_(be,de));let ge=X?_(be,de):u;return ge.width=be,ge.height=de,ge.getContext("2d").drawImage(C,0,0,be,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+de+")."),ge}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Bf(C.width)&&Bf(C.height)}function m(C){return l?!1:C.wrapS!==cn||C.wrapT!==cn||C.minFilter!==At&&C.minFilter!==ln}function x(C,S){return C.generateMipmaps&&S&&C.minFilter!==At&&C.minFilter!==ln}function M(C){n.generateMipmap(C)}function b(C,S,X,se,ie=!1){if(l===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=S;if(S===n.RED&&(X===n.FLOAT&&(re=n.R32F),X===n.HALF_FLOAT&&(re=n.R16F),X===n.UNSIGNED_BYTE&&(re=n.R8)),S===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.R8UI),X===n.UNSIGNED_SHORT&&(re=n.R16UI),X===n.UNSIGNED_INT&&(re=n.R32UI),X===n.BYTE&&(re=n.R8I),X===n.SHORT&&(re=n.R16I),X===n.INT&&(re=n.R32I)),S===n.RG&&(X===n.FLOAT&&(re=n.RG32F),X===n.HALF_FLOAT&&(re=n.RG16F),X===n.UNSIGNED_BYTE&&(re=n.RG8)),S===n.RGBA){let be=ie?Yl:lt.getTransfer(se);X===n.FLOAT&&(re=n.RGBA32F),X===n.HALF_FLOAT&&(re=n.RGBA16F),X===n.UNSIGNED_BYTE&&(re=be===Tt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function I(C,S,X){return x(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==At&&C.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){return C===At||C===ql||C===Qi?n.NEAREST:n.LINEAR}function L(C){let S=C.target;S.removeEventListener("dispose",L),E(S),S.isVideoTexture&&h.delete(S)}function D(C){let S=C.target;S.removeEventListener("dispose",D),k(S)}function E(C){let S=s.get(C);if(S.__webglInit===void 0)return;let X=C.source,se=d.get(X);if(se){let ie=se[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(C),Object.keys(se).length===0&&d.delete(X)}s.remove(C)}function T(C){let S=s.get(C);n.deleteTexture(S.__webglTexture);let X=C.source,se=d.get(X);delete se[S.__cacheKey],a.memory.textures--}function k(C){let S=C.texture,X=s.get(C),se=s.get(S);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(X.__webglFramebuffer[ie]))for(let re=0;re<X.__webglFramebuffer[ie].length;re++)n.deleteFramebuffer(X.__webglFramebuffer[ie][re]);else n.deleteFramebuffer(X.__webglFramebuffer[ie]);X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[ie])}else{if(Array.isArray(X.__webglFramebuffer))for(let ie=0;ie<X.__webglFramebuffer.length;ie++)n.deleteFramebuffer(X.__webglFramebuffer[ie]);else n.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ie=0;ie<X.__webglColorRenderbuffer.length;ie++)X.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[ie]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,re=S.length;ie<re;ie++){let be=s.get(S[ie]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),a.memory.textures--),s.remove(S[ie])}s.remove(S),s.remove(C)}let K=0;function ne(){K=0}function B(){let C=K;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),K+=1,C}function V(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Z(C,S){let X=s.get(C);if(C.isVideoTexture&&St(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){let se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,C,S);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+S)}function Q(C,S){let X=s.get(C);if(C.version>0&&X.__version!==C.version){J(X,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+S)}function v(C,S){let X=s.get(C);if(C.version>0&&X.__version!==C.version){J(X,C,S);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+S)}function w(C,S){let X=s.get(C);if(C.version>0&&X.__version!==C.version){ee(X,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+S)}let F={[di]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[la]:n.MIRRORED_REPEAT},H={[At]:n.NEAREST,[ql]:n.NEAREST_MIPMAP_NEAREST,[Qi]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Mu]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},$={[Vy]:n.NEVER,[Zy]:n.ALWAYS,[Wy]:n.LESS,[N0]:n.LEQUAL,[Xy]:n.EQUAL,[Ky]:n.GEQUAL,[qy]:n.GREATER,[Yy]:n.NOTEQUAL};function P(C,S,X){if(X?(n.texParameteri(C,n.TEXTURE_WRAP_S,F[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,F[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,F[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,H[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,H[S.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==cn||S.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,R(S.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==At&&S.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let se=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===At||S.minFilter!==Qi&&S.minFilter!==pi||S.type===Ji&&e.has("OES_texture_float_linear")===!1||l===!1&&S.type===mi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||s.get(S).__currentAnisotropy)&&(n.texParameterf(C,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),s.get(S).__currentAnisotropy=S.anisotropy)}}function O(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",L));let se=S.source,ie=d.get(se);ie===void 0&&(ie={},d.set(se,ie));let re=V(S);if(re!==C.__cacheKey){ie[re]===void 0&&(ie[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[re].usedTimes++;let be=ie[C.__cacheKey];be!==void 0&&(ie[C.__cacheKey].usedTimes--,be.usedTimes===0&&T(S)),C.__cacheKey=re,C.__webglTexture=ie[re].texture}return X}function J(C,S,X){let se=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=n.TEXTURE_3D);let ie=O(C,S),re=S.source;t.bindTexture(se,C.__webglTexture,n.TEXTURE0+X);let be=s.get(re);if(re.version!==be.__version||ie===!0){t.activeTexture(n.TEXTURE0+X);let de=lt.getPrimaries(lt.workingColorSpace),ge=S.colorSpace===ei?null:lt.getPrimaries(S.colorSpace),Pe=S.colorSpace===ei||de===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Ye=m(S)&&g(S.image)===!1,te=y(S.image,Ye,!1,r.maxTextureSize);te=He(S,te);let mt=g(te)||l,et=o.convert(S.format,S.colorSpace),ze=o.convert(S.type),Te=b(S.internalFormat,et,ze,S.colorSpace,S.isVideoTexture);P(se,S,mt);let _e,Xe=S.mipmaps,dt=l&&S.isVideoTexture!==!0&&Te!==C0,Lt=be.__version===void 0||ie===!0,Je=I(S,te,mt);if(S.isDepthTexture)Te=n.DEPTH_COMPONENT,l?S.type===Ji?Te=n.DEPTH_COMPONENT32F:S.type===gs?Te=n.DEPTH_COMPONENT24:S.type===Js?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:S.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===js&&Te===n.DEPTH_COMPONENT&&S.type!==xu&&S.type!==gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=gs,ze=o.convert(S.type)),S.format===eo&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,S.type!==Js&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Js,ze=o.convert(S.type))),Lt&&(dt?t.texStorage2D(n.TEXTURE_2D,1,Te,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,et,ze,null));else if(S.isDataTexture)if(Xe.length>0&&mt){dt&&Lt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,Xe[0].width,Xe[0].height);for(let ae=0,U=Xe.length;ae<U;ae++)_e=Xe[ae],dt?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,_e.width,_e.height,et,ze,_e.data):t.texImage2D(n.TEXTURE_2D,ae,Te,_e.width,_e.height,0,et,ze,_e.data);S.generateMipmaps=!1}else dt?(Lt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,et,ze,te.data)):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,et,ze,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){dt&&Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Te,Xe[0].width,Xe[0].height,te.depth);for(let ae=0,U=Xe.length;ae<U;ae++)_e=Xe[ae],S.format!==Qn?et!==null?dt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,te.depth,et,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Te,_e.width,_e.height,te.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,te.depth,et,ze,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Te,_e.width,_e.height,te.depth,0,et,ze,_e.data)}else{dt&&Lt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,Xe[0].width,Xe[0].height);for(let ae=0,U=Xe.length;ae<U;ae++)_e=Xe[ae],S.format!==Qn?et!==null?dt?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,_e.width,_e.height,et,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,_e.width,_e.height,et,ze,_e.data):t.texImage2D(n.TEXTURE_2D,ae,Te,_e.width,_e.height,0,et,ze,_e.data)}else if(S.isDataArrayTexture)dt?(Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Te,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,et,ze,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,et,ze,te.data);else if(S.isData3DTexture)dt?(Lt&&t.texStorage3D(n.TEXTURE_3D,Je,Te,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,et,ze,te.data)):t.texImage3D(n.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,et,ze,te.data);else if(S.isFramebufferTexture){if(Lt)if(dt)t.texStorage2D(n.TEXTURE_2D,Je,Te,te.width,te.height);else{let ae=te.width,U=te.height;for(let he=0;he<Je;he++)t.texImage2D(n.TEXTURE_2D,he,Te,ae,U,0,et,ze,null),ae>>=1,U>>=1}}else if(Xe.length>0&&mt){dt&&Lt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,Xe[0].width,Xe[0].height);for(let ae=0,U=Xe.length;ae<U;ae++)_e=Xe[ae],dt?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,et,ze,_e):t.texImage2D(n.TEXTURE_2D,ae,Te,et,ze,_e);S.generateMipmaps=!1}else dt?(Lt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,et,ze,te)):t.texImage2D(n.TEXTURE_2D,0,Te,et,ze,te);x(S,mt)&&M(se),be.__version=re.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ee(C,S,X){if(S.image.length!==6)return;let se=O(C,S),ie=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+X);let re=s.get(ie);if(ie.version!==re.__version||se===!0){t.activeTexture(n.TEXTURE0+X);let be=lt.getPrimaries(lt.workingColorSpace),de=S.colorSpace===ei?null:lt.getPrimaries(S.colorSpace),ge=S.colorSpace===ei||be===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Ye=S.image[0]&&S.image[0].isDataTexture,te=[];for(let ae=0;ae<6;ae++)!Pe&&!Ye?te[ae]=y(S.image[ae],!1,!0,r.maxCubemapSize):te[ae]=Ye?S.image[ae].image:S.image[ae],te[ae]=He(S,te[ae]);let mt=te[0],et=g(mt)||l,ze=o.convert(S.format,S.colorSpace),Te=o.convert(S.type),_e=b(S.internalFormat,ze,Te,S.colorSpace),Xe=l&&S.isVideoTexture!==!0,dt=re.__version===void 0||se===!0,Lt=I(S,mt,et);P(n.TEXTURE_CUBE_MAP,S,et);let Je;if(Pe){Xe&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,_e,mt.width,mt.height);for(let ae=0;ae<6;ae++){Je=te[ae].mipmaps;for(let U=0;U<Je.length;U++){let he=Je[U];S.format!==Qn?ze!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U,0,0,he.width,he.height,ze,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U,0,0,he.width,he.height,ze,Te,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U,_e,he.width,he.height,0,ze,Te,he.data)}}}else{Je=S.mipmaps,Xe&&dt&&(Je.length>0&&Lt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,_e,te[0].width,te[0].height));for(let ae=0;ae<6;ae++)if(Ye){Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,te[ae].width,te[ae].height,ze,Te,te[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,te[ae].width,te[ae].height,0,ze,Te,te[ae].data);for(let U=0;U<Je.length;U++){let fe=Je[U].image[ae].image;Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U+1,0,0,fe.width,fe.height,ze,Te,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U+1,_e,fe.width,fe.height,0,ze,Te,fe.data)}}else{Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,Te,te[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,ze,Te,te[ae]);for(let U=0;U<Je.length;U++){let he=Je[U];Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U+1,0,0,ze,Te,he.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U+1,_e,ze,Te,he.image[ae])}}}x(S,et)&&M(n.TEXTURE_CUBE_MAP),re.__version=ie.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ce(C,S,X,se,ie,re){let be=o.convert(X.format,X.colorSpace),de=o.convert(X.type),ge=b(X.internalFormat,be,de,X.colorSpace);if(!s.get(S).__hasExternalTextures){let Ye=Math.max(1,S.width>>re),te=Math.max(1,S.height>>re);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,ge,Ye,te,S.depth,0,be,de,null):t.texImage2D(ie,re,ge,Ye,te,0,be,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),xe(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ie,s.get(X).__webglTexture,0,Le(S)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ie,s.get(X).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(C,S,X){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let se=l===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||xe(S)){let ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Ji?se=n.DEPTH_COMPONENT32F:ie.type===gs&&(se=n.DEPTH_COMPONENT24));let re=Le(S);xe(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,se,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,se,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){let se=Le(S);X&&xe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,S.width,S.height):xe(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let se=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<se.length;ie++){let re=se[ie],be=o.convert(re.format,re.colorSpace),de=o.convert(re.type),ge=b(re.internalFormat,be,de,re.colorSpace),Pe=Le(S);X&&xe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ge,S.width,S.height):xe(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);let se=s.get(S.depthTexture).__webglTexture,ie=Le(S);if(S.depthTexture.format===js)xe(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(S.depthTexture.format===eo)xe(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function me(C){let S=s.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ve(S.__webglFramebuffer,C)}else if(X){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]=n.createRenderbuffer(),ye(S.__webglDepthbuffer[se],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),ye(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,S,X){let se=s.get(C);S!==void 0&&ce(se.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&me(C)}function G(C){let S=C.texture,X=s.get(C),se=s.get(S);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=S.version,a.memory.textures++);let ie=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,be=g(C)||l;if(ie){X.__webglFramebuffer=[];for(let de=0;de<6;de++)if(l&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[de]=[];for(let ge=0;ge<S.mipmaps.length;ge++)X.__webglFramebuffer[de][ge]=n.createFramebuffer()}else X.__webglFramebuffer[de]=n.createFramebuffer()}else{if(l&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)X.__webglFramebuffer[de]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(re)if(r.drawBuffers){let de=C.texture;for(let ge=0,Pe=de.length;ge<Pe;ge++){let Ye=s.get(de[ge]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&C.samples>0&&xe(C)===!1){let de=re?S:[S];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<de.length;ge++){let Pe=de[ge];X.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);let Ye=o.convert(Pe.format,Pe.colorSpace),te=o.convert(Pe.type),mt=b(Pe.internalFormat,Ye,te,Pe.colorSpace,C.isXRRenderTarget===!0),et=Le(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,mt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),P(n.TEXTURE_CUBE_MAP,S,be);for(let de=0;de<6;de++)if(l&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ce(X.__webglFramebuffer[de][ge],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else ce(X.__webglFramebuffer[de],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(S,be)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){let de=C.texture;for(let ge=0,Pe=de.length;ge<Pe;ge++){let Ye=de[ge],te=s.get(Ye);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),P(n.TEXTURE_2D,Ye,be),ce(X.__webglFramebuffer,C,Ye,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),x(Ye,be)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(l?de=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,se.__webglTexture),P(de,S,be),l&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ce(X.__webglFramebuffer[ge],C,S,n.COLOR_ATTACHMENT0,de,ge);else ce(X.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,de,0);x(S,be)&&M(de),t.unbindTexture()}C.depthBuffer&&me(C)}function bt(C){let S=g(C)||l,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let se=0,ie=X.length;se<ie;se++){let re=X[se];if(x(re,S)){let be=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=s.get(re).__webglTexture;t.bindTexture(be,de),M(be),t.unbindTexture()}}}function Ee(C){if(l&&C.samples>0&&xe(C)===!1){let S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,se=C.height,ie=n.COLOR_BUFFER_BIT,re=[],be=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=s.get(C),ge=C.isWebGLMultipleRenderTargets===!0;if(ge)for(let Pe=0;Pe<S.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){re.push(n.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&re.push(be);let Ye=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ye===!1&&(C.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[Pe]),Ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[be])),ge){let te=s.get(S[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,X,se,0,0,X,se,ie,n.NEAREST),f&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Pe=0;Pe<S.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,de.__webglColorRenderbuffer[Pe]);let Ye=s.get(S[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Le(C){return Math.min(r.maxSamples,C.samples)}function xe(C){let S=s.get(C);return l&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function St(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function He(C,S){let X=C.colorSpace,se=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Uf||X!==Wt&&X!==ei&&(lt.getTransfer(X)===Tt?l===!1?e.has("EXT_sRGB")===!0&&se===Qn?(C.format=Uf,C.minFilter=ln,C.generateMipmaps=!1):S=jl.sRGBToLinear(S):(se!==Qn||ie!==Ms)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}this.allocateTextureUnit=B,this.resetTextureUnits=ne,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=v,this.setTextureCube=w,this.rebindTextures=Ue,this.setupRenderTarget=G,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=xe}function J1(n,e,t){let s=t.isWebGL2;function r(o,a=ei){let l,c=lt.getTransfer(a);if(o===Ms)return n.UNSIGNED_BYTE;if(o===S0)return n.UNSIGNED_SHORT_4_4_4_4;if(o===T0)return n.UNSIGNED_SHORT_5_5_5_1;if(o===Ly)return n.BYTE;if(o===Iy)return n.SHORT;if(o===xu)return n.UNSIGNED_SHORT;if(o===b0)return n.INT;if(o===gs)return n.UNSIGNED_INT;if(o===Ji)return n.FLOAT;if(o===mi)return s?n.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===Ny)return n.ALPHA;if(o===Qn)return n.RGBA;if(o===Dy)return n.LUMINANCE;if(o===Uy)return n.LUMINANCE_ALPHA;if(o===js)return n.DEPTH_COMPONENT;if(o===eo)return n.DEPTH_STENCIL;if(o===Uf)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===By)return n.RED;if(o===A0)return n.RED_INTEGER;if(o===Oy)return n.RG;if(o===w0)return n.RG_INTEGER;if(o===R0)return n.RGBA_INTEGER;if(o===qh||o===Yh||o===Kh||o===Zh)if(c===Tt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===qh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Yh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Kh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Zh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===qh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Yh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Kh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Zh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Hp||o===zp||o===kp||o===Gp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===Hp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===zp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===kp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Gp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===C0)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Vp||o===Wp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Vp)return c===Tt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Wp)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Xp||o===qp||o===Yp||o===Kp||o===Zp||o===$p||o===Jp||o===jp||o===Qp||o===em||o===tm||o===nm||o===im||o===sm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Xp)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===qp)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Yp)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Kp)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Zp)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===$p)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Jp)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===jp)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Qp)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===em)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===tm)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===nm)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===im)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===sm)return c===Tt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===$h||o===rm||o===om)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===$h)return c===Tt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===rm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===om)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Fy||o===am||o===lm||o===cm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===$h)return l.COMPRESSED_RED_RGTC1_EXT;if(o===am)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===lm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===cm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Js?s?n.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}function Q1(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function s(g,m){m.color.getRGB(g.fogColor.value,O0(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,M,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),u(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,b)):m.isMeshMatcapMaterial?(o(g,m),_(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),y(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?c(g,m,x,M):m.isSpriteMaterial?f(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=e.get(m).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let M=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*M,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function eb(n,e,t,s){let r={},o={},a=[],l=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,M){let b=M.program;s.uniformBlockBinding(x,b)}function f(x,M){let b=r[x.id];b===void 0&&(_(x),b=h(x),r[x.id]=b,x.addEventListener("dispose",g));let I=M.program;s.updateUBOMapping(x,I);let R=e.render.frame;o[x.id]!==R&&(d(x),o[x.id]=R)}function h(x){let M=u();x.__bindingPointIndex=M;let b=n.createBuffer(),I=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function u(){for(let x=0;x<l;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=r[x.id],b=x.uniforms,I=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,L=b.length;R<L;R++){let D=Array.isArray(b[R])?b[R]:[b[R]];for(let E=0,T=D.length;E<T;E++){let k=D[E];if(p(k,R,E,I)===!0){let K=k.__offset,ne=Array.isArray(k.value)?k.value:[k.value],B=0;for(let V=0;V<ne.length;V++){let Z=ne[V],Q=y(Z);typeof Z=="number"||typeof Z=="boolean"?(k.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,K+B,k.__data)):Z.isMatrix3?(k.__data[0]=Z.elements[0],k.__data[1]=Z.elements[1],k.__data[2]=Z.elements[2],k.__data[3]=0,k.__data[4]=Z.elements[3],k.__data[5]=Z.elements[4],k.__data[6]=Z.elements[5],k.__data[7]=0,k.__data[8]=Z.elements[6],k.__data[9]=Z.elements[7],k.__data[10]=Z.elements[8],k.__data[11]=0):(Z.toArray(k.__data,B),B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,b,I){let R=x.value,L=M+"_"+b;if(I[L]===void 0)return typeof R=="number"||typeof R=="boolean"?I[L]=R:I[L]=R.clone(),!0;{let D=I[L];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return I[L]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(x){let M=x.uniforms,b=0,I=16;for(let L=0,D=M.length;L<D;L++){let E=Array.isArray(M[L])?M[L]:[M[L]];for(let T=0,k=E.length;T<k;T++){let K=E[T],ne=Array.isArray(K.value)?K.value:[K.value];for(let B=0,V=ne.length;B<V;B++){let Z=ne[B],Q=y(Z),v=b%I;v!==0&&I-v<Q.boundary&&(b+=I-v),K.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=Q.storage}}}let R=b%I;return R>0&&(b+=I-R),x.__size=b,x.__cache={},this}function y(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){let M=x.target;M.removeEventListener("dispose",g);let b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function m(){for(let x in r)n.deleteBuffer(r[x]);a=[],r={},o={}}return{bind:c,update:f,dispose:m}}function d0(n,e,t,s,r,o,a){let l=Qf.distanceSqToPoint(n);if(l<t){let c=new N;Qf.closestPointToPoint(n,c),c.applyMatrix4(s);let f=r.ray.origin.distanceTo(c);if(f<r.near||f>r.far)return;o.push({distance:f,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:a})}}function Su(){let n=0,e=0,t=0,s=0;function r(o,a,l,c){n=o,e=l,t=-3*o+3*a-2*l-c,s=2*o-2*a+l+c}return{initCatmullRom:function(o,a,l,c,f){r(a,l,f*(l-o),f*(c-a))},initNonuniformCatmullRom:function(o,a,l,c,f,h,u){let d=(a-o)/f-(l-o)/(f+h)+(l-a)/h,p=(l-a)/h-(c-a)/(h+u)+(c-l)/u;d*=h,p*=h,r(a,l,d,p)},calc:function(o){let a=o*o,l=a*o;return n+e*o+t*a+s*l}}}function p0(n,e,t,s,r){let o=(s-e)*.5,a=(r-t)*.5,l=n*n,c=n*l;return(2*t-2*s+o+a)*c+(-3*t+3*s-2*o-a)*l+o*n+t}function sb(n,e){let t=1-n;return t*t*e}function rb(n,e){return 2*(1-n)*n*e}function ob(n,e){return n*n*e}function oa(n,e,t,s){return sb(n,e)+rb(n,t)+ob(n,s)}function ab(n,e){let t=1-n;return t*t*t*e}function lb(n,e){let t=1-n;return 3*t*t*n*e}function cb(n,e){return 3*(1-n)*n*n*e}function hb(n,e){return n*n*n*e}function aa(n,e,t,s,r){return ab(n,e)+lb(n,t)+cb(n,s)+hb(n,r)}function Wl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ub(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function db(n){function e(r,o){return n[r]-n[o]}let t=n.length,s=new Array(t);for(let r=0;r!==t;++r)s[r]=r;return s.sort(e),s}function m0(n,e,t){let s=n.length,r=new n.constructor(s);for(let o=0,a=0;a!==s;++o){let l=t[o]*e;for(let c=0;c!==e;++c)r[a++]=n[l+c]}return r}function W0(n,e,t,s){let r=1,o=n[0];for(;o!==void 0&&o[s]===void 0;)o=n[r++];if(o===void 0)return;let a=o[s];if(a!==void 0)if(Array.isArray(a))do a=o[s],a!==void 0&&(e.push(o.time),t.push.apply(t,a)),o=n[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[s],a!==void 0&&(e.push(o.time),a.toArray(t,t.length)),o=n[r++];while(o!==void 0);else do a=o[s],a!==void 0&&(e.push(o.time),t.push(a)),o=n[r++];while(o!==void 0)}function pb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Mc;case"quaternion":return Ii;case"bool":case"boolean":return bs;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function mb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=pb(n.type);if(n.times===void 0){let t=[],s=[];W0(n.keys,t,s,"value"),n.times=t,n.values=s}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}function M0(){return(typeof performance>"u"?Date:performance).now()}var $_,Np,J_,x0,j_,Zi,Ci,Nn,yt,Ri,Kr,ut,Dp,Up,Q_,Ks,ey,ty,Bp,Op,ny,iy,sy,ry,Pf,Lf,oy,ay,ly,cy,hy,fy,uy,dy,py,my,gy,_y,Xl,yy,My,xy,vy,v0,Ey,by,ys,Sy,Ty,Ay,wy,Ry,Cy,Fp,Py,E0,jr,Qr,If,Nf,Ac,di,cn,la,At,ql,Qi,ln,Mu,pi,Ms,Ly,Iy,xu,b0,gs,Ji,mi,S0,T0,Js,Ny,Qn,Dy,Uy,js,eo,By,A0,Oy,w0,R0,qh,Yh,Kh,Zh,Hp,zp,kp,Gp,C0,Vp,Wp,Xp,qp,Yp,Kp,Zp,$p,Jp,jp,Qp,em,tm,nm,im,sm,$h,rm,om,Fy,am,lm,cm,to,er,Jh,hm,fm,um,Hy,P0,wc,Ma,L0,Qs,zy,ky,I0,Gy,ei,ct,Wt,vu,Rc,Yl,Tt,Kl,Zl,Cr,dm,Vy,Wy,Xy,N0,qy,Yy,Ky,Zy,Df,pm,Uf,ji,$l,xs,mn,mm,Zr,no,D0,ue,Qe,jh,gm,_m,ym,dl,fM,lt,Pr,jl,uM,Ql,dM,hn,_t,Of,bn,ec,Ff,Wn,N,tf,Mm,wt,Vi,ci,pl,Lr,Ir,Nr,fs,us,Vs,$o,ml,gl,Ws,pM,Jo,sf,Xn,Wi,rf,_l,ds,of,yl,af,io,Be,Dr,hi,mM,gM,ps,Ml,Gn,xm,vm,tc,nc,_M,Em,Ur,Xi,xl,jo,yM,MM,bm,Sm,Tm,xM,vM,Nt,fi,qi,lf,Yi,Br,Or,Am,cf,hf,ff,vl,$s,B0,ms,El,Me,gn,EM,qn,oe,zt,bl,ht,ic,sc,rt,bM,jn,df,Fr,Vn,Qo,en,pt,wm,Xs,Sl,Rm,Hr,zr,kr,pf,Tl,Al,wl,Rl,Cm,Pm,Lm,Cl,Pl,j,Ze,lo,AM,wM,fn,rc,Vt,Gr,Vr,Hf,oc,zf,mf,RM,CM,$i,qs,Il,ha,We,LM,IM,NM,DM,UM,BM,OM,FM,HM,zM,kM,GM,VM,WM,XM,qM,YM,KM,ZM,$M,JM,jM,QM,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,fx,ux,dx,px,mx,gx,_x,yx,Mx,xx,vx,Ex,bx,Sx,Tx,Ax,wx,Rx,Cx,Px,Lx,Ix,Nx,Dx,Ux,Bx,Ox,Fx,Hx,zx,kx,Gx,Vx,Wx,Xx,qx,Yx,Kx,Zx,$x,Jx,jx,Qx,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,fv,uv,dv,pv,mv,gv,_v,yv,Mv,xv,vv,Ev,bv,Sv,Tv,Av,wv,Rv,Cv,Pv,Lv,Iv,Nv,Dv,Uv,Bv,Ov,Fv,Hv,zv,kv,Gv,Vv,Wv,Xv,qv,Yv,Kv,Zv,$v,Jv,jv,Qv,eE,tE,nE,iE,sE,rE,oE,aE,lE,cE,qe,le,Ai,Nl,vs,qr,Im,Zs,gf,Nm,_f,yf,Mf,Ys,Wr,Dm,ac,lc,H0,z0,k0,G0,V0,Fm,Hm,zm,km,Gm,kf,Gf,Vf,xf,Jr,p1,m1,S1,T1,w1,U1,Xf,qf,G1,Yf,Kf,q1,Y1,Zf,ot,j1,ra,$f,fa,Jf,cc,hc,ua,vn,da,Qm,e0,t0,tb,n0,Ul,vf,i0,Ef,fc,pa,jf,s0,nb,uc,tr,Xr,r0,Bl,o0,ib,ea,ta,dc,Dn,a0,l0,c0,bf,Ol,es,h0,f0,kt,pc,nr,u0,Qf,Fl,Hl,ro,Un,gi,mc,eu,zl,Sf,Tf,Af,ma,tu,nu,iu,su,ru,gc,ou,fb,Sn,_c,au,kl,Gl,wf,Vl,un,ir,Pi,Li,yc,oo,ti,Es,lu,cu,hu,ni,bs,Mc,ts,fu,Ii,Ss,ns,xc,_s,uu,gb,is,Ki,du,ga,pu,ao,_a,Rf,g0,_0,ya,mu,vc,y0,na,Cf,gu,Ec,_u,bc,Ts,Sc,Tc,Tu,_b,Au,yb,Mb,xb,vb,Eb,bb,Sb,yu,Et,AT,Ni=li(()=>{$_=0,Np=1,J_=2,x0=1,j_=2,Zi=3,Ci=0,Nn=1,yt=2,Ri=0,Kr=1,ut=2,Dp=3,Up=4,Q_=5,Ks=100,ey=101,ty=102,Bp=103,Op=104,ny=200,iy=201,sy=202,ry=203,Pf=204,Lf=205,oy=206,ay=207,ly=208,cy=209,hy=210,fy=211,uy=212,dy=213,py=214,my=0,gy=1,_y=2,Xl=3,yy=4,My=5,xy=6,vy=7,v0=0,Ey=1,by=2,ys=0,Sy=1,Ty=2,Ay=3,wy=4,Ry=5,Cy=6,Fp="attached",Py="detached",E0=300,jr=301,Qr=302,If=303,Nf=304,Ac=306,di=1e3,cn=1001,la=1002,At=1003,ql=1004,Qi=1005,ln=1006,Mu=1007,pi=1008,Ms=1009,Ly=1010,Iy=1011,xu=1012,b0=1013,gs=1014,Ji=1015,mi=1016,S0=1017,T0=1018,Js=1020,Ny=1021,Qn=1023,Dy=1024,Uy=1025,js=1026,eo=1027,By=1028,A0=1029,Oy=1030,w0=1031,R0=1033,qh=33776,Yh=33777,Kh=33778,Zh=33779,Hp=35840,zp=35841,kp=35842,Gp=35843,C0=36196,Vp=37492,Wp=37496,Xp=37808,qp=37809,Yp=37810,Kp=37811,Zp=37812,$p=37813,Jp=37814,jp=37815,Qp=37816,em=37817,tm=37818,nm=37819,im=37820,sm=37821,$h=36492,rm=36494,om=36495,Fy=36283,am=36284,lm=36285,cm=36286,to=2300,er=2301,Jh=2302,hm=2400,fm=2401,um=2402,Hy=2500,P0=0,wc=1,Ma=2,L0=3e3,Qs=3001,zy=3200,ky=3201,I0=0,Gy=1,ei="",ct="srgb",Wt="srgb-linear",vu="display-p3",Rc="display-p3-linear",Yl="linear",Tt="srgb",Kl="rec709",Zl="p3",Cr=7680,dm=519,Vy=512,Wy=513,Xy=514,N0=515,qy=516,Yy=517,Ky=518,Zy=519,Df=35044,pm="300 es",Uf=1035,ji=2e3,$l=2001,xs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let s=this._listeners[e.type];if(s!==void 0){e.target=this;let r=s.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mm=1234567,Zr=Math.PI/180,no=180/Math.PI;D0={DEG2RAD:Zr,RAD2DEG:no,generateUUID:ui,clamp:tn,euclideanModulo:Eu,mapLinear:$y,inverseLerp:Jy,lerp:ia,damp:jy,pingpong:Qy,smoothstep:eM,smootherstep:tM,randInt:nM,randFloat:iM,randFloatSpread:sM,seededRandom:rM,degToRad:oM,radToDeg:aM,isPowerOfTwo:Bf,ceilPowerOfTwo:lM,floorPowerOfTwo:Jl,setQuaternionFromProperEuler:cM,normalize:gt,denormalize:wi},ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,s=this.y,r=e.elements;return this.x=r[0]*t+r[3]*s+r[6],this.y=r[1]*t+r[4]*s+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(tn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let s=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*s-a*r+e.x,this.y=o*r+a*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class n{constructor(e,t,s,r,o,a,l,c,f){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,r,o,a,l,c,f)}set(e,t,s,r,o,a,l,c,f){let h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=o,h[5]=c,h[6]=s,h[7]=a,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,r=t.elements,o=this.elements,a=s[0],l=s[3],c=s[6],f=s[1],h=s[4],u=s[7],d=s[2],p=s[5],_=s[8],y=r[0],g=r[3],m=r[6],x=r[1],M=r[4],b=r[7],I=r[2],R=r[5],L=r[8];return o[0]=a*y+l*x+c*I,o[3]=a*g+l*M+c*R,o[6]=a*m+l*b+c*L,o[1]=f*y+h*x+u*I,o[4]=f*g+h*M+u*R,o[7]=f*m+h*b+u*L,o[2]=d*y+p*x+_*I,o[5]=d*g+p*M+_*R,o[8]=d*m+p*b+_*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],f=e[7],h=e[8];return t*a*h-t*l*f-s*o*h+s*l*c+r*o*f-r*a*c}invert(){let e=this.elements,t=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],f=e[7],h=e[8],u=h*a-l*f,d=l*c-h*o,p=f*o-a*c,_=t*u+s*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=u*y,e[1]=(r*f-h*s)*y,e[2]=(l*s-r*a)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*o-l*t)*y,e[6]=p*y,e[7]=(s*c-f*t)*y,e[8]=(a*t-s*o)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,r,o,a,l){let c=Math.cos(o),f=Math.sin(o);return this.set(s*c,s*f,-s*(c*a+f*l)+a+e,-r*f,r*c,-r*(-f*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(jh.makeScale(e,t)),this}rotate(e){return this.premultiply(jh.makeRotation(-e)),this}translate(e,t){return this.premultiply(jh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,s=e.elements;for(let r=0;r<9;r++)if(t[r]!==s[r])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jh=new Qe;gm={};_m=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ym=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dl={[Wt]:{transfer:Yl,primaries:Kl,toReference:n=>n,fromReference:n=>n},[ct]:{transfer:Tt,primaries:Kl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Rc]:{transfer:Yl,primaries:Zl,toReference:n=>n.applyMatrix3(ym),fromReference:n=>n.applyMatrix3(_m)},[vu]:{transfer:Tt,primaries:Zl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ym),fromReference:n=>n.applyMatrix3(_m).convertLinearToSRGB()}},fM=new Set([Wt,Rc]),lt={enabled:!0,_workingColorSpace:Wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let s=dl[e].toReference,r=dl[t].fromReference;return r(s(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return dl[n].primaries},getTransfer:function(n){return n===ei?Yl:dl[n].transfer}};jl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=ca("canvas")),Pr.width=e.width,Pr.height=e.height;let s=Pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ca("canvas");t.width=e.width,t.height=e.height;let s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);let r=s.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=$r(o[a]/255)*255;return s.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor($r(t[s]/255)*255):t[s]=$r(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},uM=0,Ql=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let s={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(ef(r[a].image)):o.push(ef(r[a]))}else o=ef(r);s.url=o}return t||(e.images[this.uuid]=s),s}};dM=0,hn=class n extends xs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,s=cn,r=cn,o=ln,a=pi,l=Qn,c=Ms,f=n.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=ui(),this.name="",this.source=new Ql(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Qs?ct:ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Qs:L0}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qs?ct:ei}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=E0;hn.DEFAULT_ANISOTROPY=1;_t=class n{constructor(e=0,t=0,s=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,r){return this.x=e,this.y=t,this.z=s,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,s=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*s+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*s+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*s+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*s+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,r,o,c=e.elements,f=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(_+g)<.1&&Math.abs(f+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(f+1)/2,b=(p+1)/2,I=(m+1)/2,R=(h+d)/4,L=(u+y)/4,D=(_+g)/4;return M>b&&M>I?M<.01?(s=0,r=.707106781,o=.707106781):(s=Math.sqrt(M),r=R/s,o=L/s):b>I?b<.01?(s=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),s=R/r,o=D/r):I<.01?(s=.707106781,r=.707106781,o=0):(o=Math.sqrt(I),s=L/o,r=D/o),this.set(s,r,o,t),this}let x=Math.sqrt((g-_)*(g-_)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((f+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Of=class extends xs{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let r={width:e,height:t,depth:1};s.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Qs?ct:ei),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new hn(r,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ql(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Of{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}},ec=class extends hn{constructor(e=null,t=1,s=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ff=class extends hn{constructor(e=null,t=1,s=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wn=class{constructor(e=0,t=0,s=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=r}static slerpFlat(e,t,s,r,o,a,l){let c=s[r+0],f=s[r+1],h=s[r+2],u=s[r+3],d=o[a+0],p=o[a+1],_=o[a+2],y=o[a+3];if(l===0){e[t+0]=c,e[t+1]=f,e[t+2]=h,e[t+3]=u;return}if(l===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(u!==y||c!==d||f!==p||h!==_){let g=1-l,m=c*d+f*p+h*_+u*y,x=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let I=Math.sqrt(M),R=Math.atan2(I,m*x);g=Math.sin(g*R)/I,l=Math.sin(l*R)/I}let b=l*x;if(c=c*g+d*b,f=f*g+p*b,h=h*g+_*b,u=u*g+y*b,g===1-l){let I=1/Math.sqrt(c*c+f*f+h*h+u*u);c*=I,f*=I,h*=I,u*=I}}e[t]=c,e[t+1]=f,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,s,r,o,a){let l=s[r],c=s[r+1],f=s[r+2],h=s[r+3],u=o[a],d=o[a+1],p=o[a+2],_=o[a+3];return e[t]=l*_+h*u+c*p-f*d,e[t+1]=c*_+h*d+f*u-l*p,e[t+2]=f*_+h*p+l*d-c*u,e[t+3]=h*_-l*u-c*d-f*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,r){return this._x=e,this._y=t,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let s=e._x,r=e._y,o=e._z,a=e._order,l=Math.cos,c=Math.sin,f=l(s/2),h=l(r/2),u=l(o/2),d=c(s/2),p=c(r/2),_=c(o/2);switch(a){case"XYZ":this._x=d*h*u+f*p*_,this._y=f*p*u-d*h*_,this._z=f*h*_+d*p*u,this._w=f*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+f*p*_,this._y=f*p*u-d*h*_,this._z=f*h*_-d*p*u,this._w=f*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-f*p*_,this._y=f*p*u+d*h*_,this._z=f*h*_+d*p*u,this._w=f*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-f*p*_,this._y=f*p*u+d*h*_,this._z=f*h*_-d*p*u,this._w=f*h*u+d*p*_;break;case"YZX":this._x=d*h*u+f*p*_,this._y=f*p*u+d*h*_,this._z=f*h*_-d*p*u,this._w=f*h*u-d*p*_;break;case"XZY":this._x=d*h*u-f*p*_,this._y=f*p*u-d*h*_,this._z=f*h*_+d*p*u,this._w=f*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let s=t/2,r=Math.sin(s);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,s=t[0],r=t[4],o=t[8],a=t[1],l=t[5],c=t[9],f=t[2],h=t[6],u=t[10],d=s+l+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-f)*p,this._z=(a-r)*p}else if(s>l&&s>u){let p=2*Math.sqrt(1+s-l-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+f)/p}else if(l>u){let p=2*Math.sqrt(1+l-s-u);this._w=(o-f)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-s-l);this._w=(a-r)/p,this._x=(o+f)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let s=this.angleTo(e);if(s===0)return this;let r=Math.min(1,t/s);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let s=e._x,r=e._y,o=e._z,a=e._w,l=t._x,c=t._y,f=t._z,h=t._w;return this._x=s*h+a*l+r*f-o*c,this._y=r*h+a*c+o*l-s*f,this._z=o*h+a*f+s*c-r*l,this._w=a*h-s*l-r*c-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let s=this._x,r=this._y,o=this._z,a=this._w,l=a*e._w+s*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=s,this._y=r,this._z=o,this;let c=1-l*l;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*s+t*this._x,this._y=p*r+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}let f=Math.sqrt(c),h=Math.atan2(f,l),u=Math.sin((1-t)*h)/f,d=Math.sin(t*h)/f;return this._w=a*u+this._w*d,this._x=s*u+this._x*d,this._y=r*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){let e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),s*Math.sin(o),s*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,s=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,s=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6]*r,this.y=o[1]*t+o[4]*s+o[7]*r,this.z=o[2]*t+o[5]*s+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,s=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*s+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*s+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*s+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*s+o[10]*r+o[14])*a,this}applyQuaternion(e){let t=this.x,s=this.y,r=this.z,o=e.x,a=e.y,l=e.z,c=e.w,f=2*(a*r-l*s),h=2*(l*t-o*r),u=2*(o*s-a*t);return this.x=t+c*f+a*u-l*h,this.y=s+c*h+l*f-o*u,this.z=r+c*u+o*h-a*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,s=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*s+o[8]*r,this.y=o[1]*t+o[5]*s+o[9]*r,this.z=o[2]*t+o[6]*s+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let s=e.x,r=e.y,o=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-o*l,this.y=o*a-s*c,this.z=s*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(tn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y,r=this.z-e.z;return t*t+s*s+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){let r=Math.sin(t)*e;return this.x=r*Math.sin(s),this.y=Math.cos(t)*e,this.z=r*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tf=new N,Mm=new Wn,wt=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let s=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let s=e.geometry;if(s!==void 0){let o=s.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(o,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pl.copy(s.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}let r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),ml.subVectors(this.max,$o),Lr.subVectors(e.a,$o),Ir.subVectors(e.b,$o),Nr.subVectors(e.c,$o),fs.subVectors(Ir,Lr),us.subVectors(Nr,Ir),Vs.subVectors(Lr,Nr);let t=[0,-fs.z,fs.y,0,-us.z,us.y,0,-Vs.z,Vs.y,fs.z,0,-fs.x,us.z,0,-us.x,Vs.z,0,-Vs.x,-fs.y,fs.x,0,-us.y,us.x,0,-Vs.y,Vs.x,0];return!nf(t,Lr,Ir,Nr,ml)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,Lr,Ir,Nr,ml))?!1:(gl.crossVectors(fs,us),t=[gl.x,gl.y,gl.z],nf(t,Lr,Ir,Nr,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Vi=[new N,new N,new N,new N,new N,new N,new N,new N],ci=new N,pl=new wt,Lr=new N,Ir=new N,Nr=new N,fs=new N,us=new N,Vs=new N,$o=new N,ml=new N,gl=new N,Ws=new N;pM=new wt,Jo=new N,sf=new N,Xn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let s=this.center;t!==void 0?s.copy(t):pM.setFromPoints(e).getCenter(s);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,s.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);let t=Jo.lengthSq();if(t>this.radius*this.radius){let s=Math.sqrt(t),r=(s-this.radius)*.5;this.center.addScaledVector(Jo,r/s),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(sf)),this.expandByPoint(Jo.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wi=new N,rf=new N,_l=new N,ds=new N,of=new N,yl=new N,af=new N,io=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,s,r){rf.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(rf);let o=e.distanceTo(t)*.5,a=-this.direction.dot(_l),l=ds.dot(this.direction),c=-ds.dot(_l),f=ds.lengthSq(),h=Math.abs(1-a*a),u,d,p,_;if(h>0)if(u=a*c-l,d=a*l-c,_=o*h,u>=0)if(d>=-_)if(d<=_){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*l)+d*(a*u+d+2*c)+f}else d=o,u=Math.max(0,-(a*d+l)),p=-u*u+d*(d+2*c)+f;else d=-o,u=Math.max(0,-(a*d+l)),p=-u*u+d*(d+2*c)+f;else d<=-_?(u=Math.max(0,-(-a*o+l)),d=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+f):d<=_?(u=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+f):(u=Math.max(0,-(a*o+l)),d=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+f);else d=a>0?-o:o,u=Math.max(0,-(a*d+l)),p=-u*u+d*(d+2*c)+f;return s&&s.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(rf).addScaledVector(_l,d),p}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);let s=Wi.dot(this.direction),r=Wi.dot(Wi)-s*s,o=e.radius*e.radius;if(r>o)return null;let a=Math.sqrt(o-r),l=s-a,c=s+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){let s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,r,o,a,l,c,f=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return f>=0?(s=(e.min.x-d.x)*f,r=(e.max.x-d.x)*f):(s=(e.max.x-d.x)*f,r=(e.min.x-d.x)*f),h>=0?(o=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),s>a||o>r||((o>s||isNaN(s))&&(s=o),(a<r||isNaN(r))&&(r=a),u>=0?(l=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(l=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),s>c||l>r)||((l>s||s!==s)&&(s=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(s>=0?s:r,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,s,r,o){of.subVectors(t,e),yl.subVectors(s,e),af.crossVectors(of,yl);let a=this.direction.dot(af),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ds.subVectors(this.origin,e);let c=l*this.direction.dot(yl.crossVectors(ds,yl));if(c<0)return null;let f=l*this.direction.dot(of.cross(ds));if(f<0||c+f>a)return null;let h=-l*ds.dot(af);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class n{constructor(e,t,s,r,o,a,l,c,f,h,u,d,p,_,y,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,r,o,a,l,c,f,h,u,d,p,_,y,g)}set(e,t,s,r,o,a,l,c,f,h,u,d,p,_,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=s,m[12]=r,m[1]=o,m[5]=a,m[9]=l,m[13]=c,m[2]=f,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=_,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){let t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,s=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),o=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=s[0]*r,t[1]=s[1]*r,t[2]=s[2]*r,t[3]=0,t[4]=s[4]*o,t[5]=s[5]*o,t[6]=s[6]*o,t[7]=0,t[8]=s[8]*a,t[9]=s[9]*a,t[10]=s[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,s=e.x,r=e.y,o=e.z,a=Math.cos(s),l=Math.sin(s),c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){let d=a*h,p=a*u,_=l*h,y=l*u;t[0]=c*h,t[4]=-c*u,t[8]=f,t[1]=p+_*f,t[5]=d-y*f,t[9]=-l*c,t[2]=y-d*f,t[6]=_+p*f,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,_=f*h,y=f*u;t[0]=d+y*l,t[4]=_*l-p,t[8]=a*f,t[1]=a*u,t[5]=a*h,t[9]=-l,t[2]=p*l-_,t[6]=y+d*l,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,_=f*h,y=f*u;t[0]=d-y*l,t[4]=-a*u,t[8]=_+p*l,t[1]=p+_*l,t[5]=a*h,t[9]=y-d*l,t[2]=-a*f,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,_=l*h,y=l*u;t[0]=c*h,t[4]=_*f-p,t[8]=d*f+y,t[1]=c*u,t[5]=y*f+d,t[9]=p*f-_,t[2]=-f,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*f,_=l*c,y=l*f;t[0]=c*h,t[4]=y-d*u,t[8]=_*u+p,t[1]=u,t[5]=a*h,t[9]=-l*h,t[2]=-f*h,t[6]=p*u+_,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*c,p=a*f,_=l*c,y=l*f;t[0]=c*h,t[4]=-u,t[8]=f*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=l*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mM,e,gM)}lookAt(e,t,s){let r=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ps.crossVectors(s,Gn),ps.lengthSq()===0&&(Math.abs(s.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ps.crossVectors(s,Gn)),ps.normalize(),Ml.crossVectors(Gn,ps),r[0]=ps.x,r[4]=Ml.x,r[8]=Gn.x,r[1]=ps.y,r[5]=Ml.y,r[9]=Gn.y,r[2]=ps.z,r[6]=Ml.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,r=t.elements,o=this.elements,a=s[0],l=s[4],c=s[8],f=s[12],h=s[1],u=s[5],d=s[9],p=s[13],_=s[2],y=s[6],g=s[10],m=s[14],x=s[3],M=s[7],b=s[11],I=s[15],R=r[0],L=r[4],D=r[8],E=r[12],T=r[1],k=r[5],K=r[9],ne=r[13],B=r[2],V=r[6],Z=r[10],Q=r[14],v=r[3],w=r[7],F=r[11],H=r[15];return o[0]=a*R+l*T+c*B+f*v,o[4]=a*L+l*k+c*V+f*w,o[8]=a*D+l*K+c*Z+f*F,o[12]=a*E+l*ne+c*Q+f*H,o[1]=h*R+u*T+d*B+p*v,o[5]=h*L+u*k+d*V+p*w,o[9]=h*D+u*K+d*Z+p*F,o[13]=h*E+u*ne+d*Q+p*H,o[2]=_*R+y*T+g*B+m*v,o[6]=_*L+y*k+g*V+m*w,o[10]=_*D+y*K+g*Z+m*F,o[14]=_*E+y*ne+g*Q+m*H,o[3]=x*R+M*T+b*B+I*v,o[7]=x*L+M*k+b*V+I*w,o[11]=x*D+M*K+b*Z+I*F,o[15]=x*E+M*ne+b*Q+I*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[4],r=e[8],o=e[12],a=e[1],l=e[5],c=e[9],f=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],y=e[7],g=e[11],m=e[15];return _*(+o*c*u-r*f*u-o*l*d+s*f*d+r*l*p-s*c*p)+y*(+t*c*p-t*f*d+o*a*d-r*a*p+r*f*h-o*c*h)+g*(+t*f*u-t*l*p-o*a*u+s*a*p+o*l*h-s*f*h)+m*(-r*l*h-t*c*u+t*l*d+r*a*u-s*a*d+s*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=s),this}invert(){let e=this.elements,t=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],f=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],y=e[13],g=e[14],m=e[15],x=u*g*f-y*d*f+y*c*p-l*g*p-u*c*m+l*d*m,M=_*d*f-h*g*f-_*c*p+a*g*p+h*c*m-a*d*m,b=h*y*f-_*u*f+_*l*p-a*y*p-h*l*m+a*u*m,I=_*u*c-h*y*c-_*l*d+a*y*d+h*l*g-a*u*g,R=t*x+s*M+r*b+o*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=x*L,e[1]=(y*d*o-u*g*o-y*r*p+s*g*p+u*r*m-s*d*m)*L,e[2]=(l*g*o-y*c*o+y*r*f-s*g*f-l*r*m+s*c*m)*L,e[3]=(u*c*o-l*d*o-u*r*f+s*d*f+l*r*p-s*c*p)*L,e[4]=M*L,e[5]=(h*g*o-_*d*o+_*r*p-t*g*p-h*r*m+t*d*m)*L,e[6]=(_*c*o-a*g*o-_*r*f+t*g*f+a*r*m-t*c*m)*L,e[7]=(a*d*o-h*c*o+h*r*f-t*d*f-a*r*p+t*c*p)*L,e[8]=b*L,e[9]=(_*u*o-h*y*o-_*s*p+t*y*p+h*s*m-t*u*m)*L,e[10]=(a*y*o-_*l*o+_*s*f-t*y*f-a*s*m+t*l*m)*L,e[11]=(h*l*o-a*u*o-h*s*f+t*u*f+a*s*p-t*l*p)*L,e[12]=I*L,e[13]=(h*y*r-_*u*r+_*s*d-t*y*d-h*s*g+t*u*g)*L,e[14]=(_*l*r-a*y*r-_*s*c+t*y*c+a*s*g-t*l*g)*L,e[15]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*d+t*l*d)*L,this}scale(e){let t=this.elements,s=e.x,r=e.y,o=e.z;return t[0]*=s,t[4]*=r,t[8]*=o,t[1]*=s,t[5]*=r,t[9]*=o,t[2]*=s,t[6]*=r,t[10]*=o,t[3]*=s,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,r))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let s=Math.cos(t),r=Math.sin(t),o=1-s,a=e.x,l=e.y,c=e.z,f=o*a,h=o*l;return this.set(f*a+s,f*l-r*c,f*c+r*l,0,f*l+r*c,h*l+s,h*c-r*a,0,f*c-r*l,h*c+r*a,o*c*c+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,r,o,a){return this.set(1,s,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,s){let r=this.elements,o=t._x,a=t._y,l=t._z,c=t._w,f=o+o,h=a+a,u=l+l,d=o*f,p=o*h,_=o*u,y=a*h,g=a*u,m=l*u,x=c*f,M=c*h,b=c*u,I=s.x,R=s.y,L=s.z;return r[0]=(1-(y+m))*I,r[1]=(p+b)*I,r[2]=(_-M)*I,r[3]=0,r[4]=(p-b)*R,r[5]=(1-(d+m))*R,r[6]=(g+x)*R,r[7]=0,r[8]=(_+M)*L,r[9]=(g-x)*L,r[10]=(1-(d+y))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,s){let r=this.elements,o=Dr.set(r[0],r[1],r[2]).length(),a=Dr.set(r[4],r[5],r[6]).length(),l=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);let f=1/o,h=1/a,u=1/l;return hi.elements[0]*=f,hi.elements[1]*=f,hi.elements[2]*=f,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,t.setFromRotationMatrix(hi),s.x=o,s.y=a,s.z=l,this}makePerspective(e,t,s,r,o,a,l=ji){let c=this.elements,f=2*o/(t-e),h=2*o/(s-r),u=(t+e)/(t-e),d=(s+r)/(s-r),p,_;if(l===ji)p=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(l===$l)p=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,s,r,o,a,l=ji){let c=this.elements,f=1/(t-e),h=1/(s-r),u=1/(a-o),d=(t+e)*f,p=(s+r)*h,_,y;if(l===ji)_=(a+o)*u,y=-2*u;else if(l===$l)_=o*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,s=e.elements;for(let r=0;r<16;r++)if(t[r]!==s[r])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}},Dr=new N,hi=new Be,mM=new N(0,0,0),gM=new N(1,1,1),ps=new N,Ml=new N,Gn=new N,xm=new Be,vm=new Wn,tc=class n{constructor(e=0,t=0,s=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,r=this._order){return this._x=e,this._y=t,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){let r=e.elements,o=r[0],a=r[4],l=r[8],c=r[1],f=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,f),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,f),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tc.DEFAULT_ORDER="XYZ";nc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_M=0,Em=new N,Ur=new Wn,Xi=new Be,xl=new N,jo=new N,yM=new N,MM=new Wn,bm=new N(1,0,0),Sm=new N(0,1,0),Tm=new N(0,0,1),xM={type:"added"},vM={type:"removed"},Nt=class n extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new tc,s=new Wn,r=new N(1,1,1);function o(){s.setFromEuler(t,!1)}function a(){t.setFromQuaternion(s,void 0,!1)}t._onChange(o),s._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new Qe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,t){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?xl.copy(e):xl.set(e,t,s);let r=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(jo,xl,this.up):Xi.lookAt(xl,jo,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(Xi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vM)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let s=0,r=t.length;s<r;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let s=0,r=t.length;s<r;s++)t[s].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let s=0,r=t.length;s<r;s++){let o=t[s];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++){let l=r[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let f=0,h=c.length;f<h;f++){let u=c[f];o(e.shapes,u)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,f=this.material.length;c<f;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(o(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),f=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);l.length>0&&(s.geometries=l),c.length>0&&(s.materials=c),f.length>0&&(s.textures=f),h.length>0&&(s.images=h),u.length>0&&(s.shapes=u),d.length>0&&(s.skeletons=d),p.length>0&&(s.animations=p),_.length>0&&(s.nodes=_)}return s.object=r,s;function a(l){let c=[];for(let f in l){let h=l[f];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){let r=e.children[s];this.add(r.clone())}return this}};Nt.DEFAULT_UP=new N(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;fi=new N,qi=new N,lf=new N,Yi=new N,Br=new N,Or=new N,Am=new N,cf=new N,hf=new N,ff=new N,vl=!1,$s=class n{constructor(e=new N,t=new N,s=new N){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,r){r.subVectors(s,t),fi.subVectors(e,t),r.cross(fi);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,s,r,o){fi.subVectors(r,t),qi.subVectors(s,t),lf.subVectors(e,t);let a=fi.dot(fi),l=fi.dot(qi),c=fi.dot(lf),f=qi.dot(qi),h=qi.dot(lf),u=a*f-l*l;if(u===0)return o.set(0,0,0),null;let d=1/u,p=(f*c-l*h)*d,_=(a*h-l*c)*d;return o.set(1-p-_,_,p)}static containsPoint(e,t,s,r){return this.getBarycoord(e,t,s,r,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getUV(e,t,s,r,o,a,l,c){return vl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vl=!0),this.getInterpolation(e,t,s,r,o,a,l,c)}static getInterpolation(e,t,s,r,o,a,l,c){return this.getBarycoord(e,t,s,r,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Yi.x),c.addScaledVector(a,Yi.y),c.addScaledVector(l,Yi.z),c)}static isFrontFacing(e,t,s,r){return fi.subVectors(s,t),qi.subVectors(e,t),fi.cross(qi).dot(r)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,r){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,s,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),fi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,s,r,o){return vl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,s,r,o)}getInterpolation(e,t,s,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,s,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let s=this.a,r=this.b,o=this.c,a,l;Br.subVectors(r,s),Or.subVectors(o,s),cf.subVectors(e,s);let c=Br.dot(cf),f=Or.dot(cf);if(c<=0&&f<=0)return t.copy(s);hf.subVectors(e,r);let h=Br.dot(hf),u=Or.dot(hf);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*f;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(s).addScaledVector(Br,a);ff.subVectors(e,o);let p=Br.dot(ff),_=Or.dot(ff);if(_>=0&&p<=_)return t.copy(o);let y=p*f-c*_;if(y<=0&&f>=0&&_<=0)return l=f/(f-_),t.copy(s).addScaledVector(Or,l);let g=h*_-p*u;if(g<=0&&u-h>=0&&p-_>=0)return Am.subVectors(o,r),l=(u-h)/(u-h+(p-_)),t.copy(r).addScaledVector(Am,l);let m=1/(g+y+d);return a=y*m,l=d*m,t.copy(s).addScaledVector(Br,a).addScaledVector(Or,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},B0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},El={h:0,s:0,l:0};Me=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=s,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,s,r=lt.workingColorSpace){if(e=Eu(e,1),t=tn(t,0,1),s=tn(s,0,1),t===0)this.r=this.g=this.b=s;else{let o=s<=.5?s*(1+t):s+t-s*t,a=2*s-o;this.r=uf(a,o,e+1/3),this.g=uf(a,o,e),this.b=uf(a,o,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=ct){function s(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let s=B0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=Qh(e.r),this.g=Qh(e.g),this.b=Qh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return lt.fromWorkingColorSpace(gn.copy(this),e),Math.round(tn(gn.r*255,0,255))*65536+Math.round(tn(gn.g*255,0,255))*256+Math.round(tn(gn.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(gn.copy(this),t);let s=gn.r,r=gn.g,o=gn.b,a=Math.max(s,r,o),l=Math.min(s,r,o),c,f,h=(l+a)/2;if(l===a)c=0,f=0;else{let u=a-l;switch(f=h<=.5?u/(a+l):u/(2-a-l),a){case s:c=(r-o)/u+(r<o?6:0);break;case r:c=(o-s)/u+2;break;case o:c=(s-r)/u+4;break}c/=6}return e.h=c,e.s=f,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=ct){lt.fromWorkingColorSpace(gn.copy(this),e);let t=gn.r,s=gn.g,r=gn.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(r*255)})`}offsetHSL(e,t,s){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(El);let s=ia(ms.h,El.h,t),r=ia(ms.s,El.s,t),o=ia(ms.l,El.l,t);return this.setHSL(s,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,s=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*s+o[6]*r,this.g=o[1]*t+o[4]*s+o[7]*r,this.b=o[2]*t+o[5]*s+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Me;Me.NAMES=B0;EM=0,qn=class extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Kr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Lf,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(s):r&&r.isVector3&&s&&s.isVector3?r.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(s.blending=this.blending),this.side!==Ci&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Pf&&(s.blendSrc=this.blendSrc),this.blendDst!==Lf&&(s.blendDst=this.blendDst),this.blendEquation!==Ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function r(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}if(t){let o=r(e.textures),a=r(e.images);o.length>0&&(s.textures=o),a.length>0&&(s.images=a)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,s=null;if(t!==null){let r=t.length;s=new Array(r);for(let o=0;o!==r;++o)s[o]=t[o].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},oe=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=v0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zt=new N,bl=new ue,ht=class{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Df,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[s+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=wi(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=gt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=r,this}setXYZW(e,t,s,r,o){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),s=gt(s,this.array),r=gt(r,this.array),o=gt(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}},ic=class extends ht{constructor(e,t,s){super(new Uint16Array(e),t,s)}},sc=class extends ht{constructor(e,t,s){super(new Uint32Array(e),t,s)}},rt=class extends ht{constructor(e,t,s){super(new Float32Array(e),t,s)}},bM=0,jn=new Be,df=new Nt,Fr=new N,Vn=new wt,Qo=new wt,en=new N,pt=class n extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?sc:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let o=new Qe().getNormalMatrix(e);s.applyNormalMatrix(o),s.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,s){return jn.makeTranslation(e,t,s),this.applyMatrix4(jn),this}scale(e,t,s){return jn.makeScale(e,t,s),this.applyMatrix4(jn),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Vn.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let s=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){let l=t[o];Qo.setFromBufferAttribute(l),this.morphTargetsRelative?(en.addVectors(Vn.min,Qo.min),Vn.expandByPoint(en),en.addVectors(Vn.max,Qo.max),Vn.expandByPoint(en)):(Vn.expandByPoint(Qo.min),Vn.expandByPoint(Qo.max))}Vn.getCenter(s);let r=0;for(let o=0,a=e.count;o<a;o++)en.fromBufferAttribute(e,o),r=Math.max(r,s.distanceToSquared(en));if(t)for(let o=0,a=t.length;o<a;o++){let l=t[o],c=this.morphTargetsRelative;for(let f=0,h=l.count;f<h;f++)en.fromBufferAttribute(l,f),c&&(Fr.fromBufferAttribute(e,f),en.add(Fr)),r=Math.max(r,s.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*l),4));let c=this.getAttribute("tangent").array,f=[],h=[];for(let T=0;T<l;T++)f[T]=new N,h[T]=new N;let u=new N,d=new N,p=new N,_=new ue,y=new ue,g=new ue,m=new N,x=new N;function M(T,k,K){u.fromArray(r,T*3),d.fromArray(r,k*3),p.fromArray(r,K*3),_.fromArray(a,T*2),y.fromArray(a,k*2),g.fromArray(a,K*2),d.sub(u),p.sub(u),y.sub(_),g.sub(_);let ne=1/(y.x*g.y-g.x*y.y);isFinite(ne)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(ne),x.copy(p).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(ne),f[T].add(m),f[k].add(m),f[K].add(m),h[T].add(x),h[k].add(x),h[K].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:s.length}]);for(let T=0,k=b.length;T<k;++T){let K=b[T],ne=K.start,B=K.count;for(let V=ne,Z=ne+B;V<Z;V+=3)M(s[V+0],s[V+1],s[V+2])}let I=new N,R=new N,L=new N,D=new N;function E(T){L.fromArray(o,T*3),D.copy(L);let k=f[T];I.copy(k),I.sub(L.multiplyScalar(L.dot(k))).normalize(),R.crossVectors(D,k);let ne=R.dot(h[T])<0?-1:1;c[T*4]=I.x,c[T*4+1]=I.y,c[T*4+2]=I.z,c[T*4+3]=ne}for(let T=0,k=b.length;T<k;++T){let K=b[T],ne=K.start,B=K.count;for(let V=ne,Z=ne+B;V<Z;V+=3)E(s[V+0]),E(s[V+1]),E(s[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let d=0,p=s.count;d<p;d++)s.setXYZ(d,0,0,0);let r=new N,o=new N,a=new N,l=new N,c=new N,f=new N,h=new N,u=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){let _=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,o),u.subVectors(r,o),h.cross(u),l.fromBufferAttribute(s,_),c.fromBufferAttribute(s,y),f.fromBufferAttribute(s,g),l.add(h),c.add(h),f.add(h),s.setXYZ(_,l.x,l.y,l.z),s.setXYZ(y,c.x,c.y,c.z),s.setXYZ(g,f.x,f.y,f.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,o),u.subVectors(r,o),h.cross(u),s.setXYZ(d+0,h.x,h.y,h.z),s.setXYZ(d+1,h.x,h.y,h.z),s.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(l,c){let f=l.array,h=l.itemSize,u=l.normalized,d=new f.constructor(c.length*h),p=0,_=0;for(let y=0,g=c.length;y<g;y++){l.isInterleavedBufferAttribute?p=c[y]*l.data.stride+l.offset:p=c[y]*h;for(let m=0;m<h;m++)d[_++]=f[p++]}return new ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,s=this.index.array,r=this.attributes;for(let l in r){let c=r[l],f=e(c,s);t.setAttribute(l,f)}let o=this.morphAttributes;for(let l in o){let c=[],f=o[l];for(let h=0,u=f.length;h<u;h++){let d=f[h],p=e(d,s);c.push(p)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let f=a[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let s=this.attributes;for(let c in s){let f=s[c];e.data.attributes[c]=f.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let f=this.morphAttributes[c],h=[];for(let u=0,d=f.length;u<d;u++){let p=f[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let s=e.index;s!==null&&this.setIndex(s.clone(t));let r=e.attributes;for(let f in r){let h=r[f];this.setAttribute(f,h.clone(t))}let o=e.morphAttributes;for(let f in o){let h=[],u=o[f];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let f=0,h=a.length;f<h;f++){let u=a[f];this.addGroup(u.start,u.count,u.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wm=new Be,Xs=new io,Sl=new Xn,Rm=new N,Hr=new N,zr=new N,kr=new N,pf=new N,Tl=new N,Al=new ue,wl=new ue,Rl=new ue,Cm=new N,Pm=new N,Lm=new N,Cl=new N,Pl=new N,j=class extends Nt{constructor(e=new pt,t=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){let s=this.geometry,r=s.attributes.position,o=s.morphAttributes.position,a=s.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(o&&l){Tl.set(0,0,0);for(let c=0,f=o.length;c<f;c++){let h=l[c],u=o[c];h!==0&&(pf.fromBufferAttribute(u,e),a?Tl.addScaledVector(pf,h):Tl.addScaledVector(pf.sub(t),h))}t.add(Tl)}return t}raycast(e,t){let s=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sl.copy(s.boundingSphere),Sl.applyMatrix4(o),Xs.copy(e.ray).recast(e.near),!(Sl.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Sl,Rm)===null||Xs.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(wm.copy(o).invert(),Xs.copy(e.ray).applyMatrix4(wm),!(s.boundingBox!==null&&Xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,s){let r,o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,f=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){let g=d[_],m=a[g.materialIndex],x=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=x,I=M;b<I;b+=3){let R=l.getX(b),L=l.getX(b+1),D=l.getX(b+2);r=Ll(this,m,e,s,f,h,u,R,L,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,m=y;g<m;g+=3){let x=l.getX(g),M=l.getX(g+1),b=l.getX(g+2);r=Ll(this,a,e,s,f,h,u,x,M,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){let g=d[_],m=a[g.materialIndex],x=Math.max(g.start,p.start),M=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let b=x,I=M;b<I;b+=3){let R=b,L=b+1,D=b+2;r=Ll(this,m,e,s,f,h,u,R,L,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=_,m=y;g<m;g+=3){let x=g,M=g+1,b=g+2;r=Ll(this,a,e,s,f,h,u,x,M,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};Ze=class n extends pt{constructor(e=1,t=1,s=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:r,heightSegments:o,depthSegments:a};let l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);let c=[],f=[],h=[],u=[],d=0,p=0;_("z","y","x",-1,-1,s,t,e,a,o,0),_("z","y","x",1,-1,s,t,-e,a,o,1),_("x","z","y",1,1,e,s,t,r,a,2),_("x","z","y",1,-1,e,s,-t,r,a,3),_("x","y","z",1,-1,e,t,s,r,o,4),_("x","y","z",-1,-1,e,t,-s,r,o,5),this.setIndex(c),this.setAttribute("position",new rt(f,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function _(y,g,m,x,M,b,I,R,L,D,E){let T=b/L,k=I/D,K=b/2,ne=I/2,B=R/2,V=L+1,Z=D+1,Q=0,v=0,w=new N;for(let F=0;F<Z;F++){let H=F*k-ne;for(let $=0;$<V;$++){let P=$*T-K;w[y]=P*x,w[g]=H*M,w[m]=B,f.push(w.x,w.y,w.z),w[y]=0,w[g]=0,w[m]=R>0?1:-1,h.push(w.x,w.y,w.z),u.push($/L),u.push(1-F/D),Q+=1}}for(let F=0;F<D;F++)for(let H=0;H<L;H++){let $=d+H+V*F,P=d+H+V*(F+1),O=d+(H+1)+V*(F+1),J=d+(H+1)+V*F;c.push($,P,J),c.push(P,O,J),v+=6}l.addGroup(p,v,E),p+=v,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};lo={clone:so,merge:En},AM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AM,this.fragmentShader=wM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=TM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let s={};for(let r in this.extensions)this.extensions[r]===!0&&(s[r]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}},rc=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vt=class extends rc{constructor(e=50,t=1,s=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,s,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*.5*this.fov)/this.zoom,s=2*t,r=this.aspect*s,o=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,f=a.fullHeight;o+=a.offsetX*r/c,t-=a.offsetY*s/f,r*=a.width/c,s*=a.height/f}let l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gr=-90,Vr=1,Hf=class extends Nt{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Vt(Gr,Vr,e,t);r.layers=this.layers,this.add(r);let o=new Vt(Gr,Vr,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Gr,Vr,e,t);a.layers=this.layers,this.add(a);let l=new Vt(Gr,Vr,e,t);l.layers=this.layers,this.add(l);let c=new Vt(Gr,Vr,e,t);c.layers=this.layers,this.add(c);let f=new Vt(Gr,Vr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[s,r,o,a,l,c]=t;for(let f of t)this.remove(f);if(e===ji)s.up.set(0,1,0),s.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$l)s.up.set(0,-1,0),s.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:s,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,a,l,c,f,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,r),e.render(t,o),e.setRenderTarget(s,1,r),e.render(t,a),e.setRenderTarget(s,2,r),e.render(t,l),e.setRenderTarget(s,3,r),e.render(t,c),e.setRenderTarget(s,4,r),e.render(t,f),s.texture.generateMipmaps=y,e.setRenderTarget(s,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,s.texture.needsPMREMUpdate=!0}},oc=class extends hn{constructor(e,t,s,r,o,a,l,c,f,h){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,s,r,o,a,l,c,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zf=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let s={width:e,height:e,depth:1},r=[s,s,s,s,s,s];t.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qs?ct:ei),this.texture=new oc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ze(5,5,5),o=new fn({name:"CubemapFromEquirect",uniforms:so(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Nn,blending:Ri});o.uniforms.tEquirect.value=t;let a=new j(r,o),l=t.minFilter;return t.minFilter===pi&&(t.minFilter=ln),new Hf(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,s,r){let o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,s,r);e.setRenderTarget(o)}},mf=new N,RM=new N,CM=new Qe,$i=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,r){return this.normal.set(e,t,s),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){let r=mf.subVectors(s,t).cross(RM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let s=e.delta(mf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let s=t||CM.getNormalMatrix(e),r=this.coplanarPoint(mf).applyMatrix4(e),o=this.normal.applyMatrix3(s).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new Xn,Il=new N,ha=class{constructor(e=new $i,t=new $i,s=new $i,r=new $i,o=new $i,a=new $i){this.planes=[e,t,s,r,o,a]}set(e,t,s,r,o,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(s),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(e){let t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=ji){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],d=r[7],p=r[8],_=r[9],y=r[10],g=r[11],m=r[12],x=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-o,d-f,g-p,b-m).normalize(),s[1].setComponents(c+o,d+f,g+p,b+m).normalize(),s[2].setComponents(c+a,d+h,g+_,b+x).normalize(),s[3].setComponents(c-a,d-h,g-_,b-x).normalize(),s[4].setComponents(c-l,d-u,g-y,b-M).normalize(),t===ji)s[5].setComponents(c+l,d+u,g+y,b+M).normalize();else if(t===$l)s[5].setComponents(l,u,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,s=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(s)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let s=0;s<6;s++){let r=t[s];if(Il.x=r.normal.x>0?e.max.x:e.min.x,Il.y=r.normal.y>0?e.max.y:e.min.y,Il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};We=class n extends pt{constructor(e=1,t=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:r};let o=e/2,a=t/2,l=Math.floor(s),c=Math.floor(r),f=l+1,h=c+1,u=e/l,d=t/c,p=[],_=[],y=[],g=[];for(let m=0;m<h;m++){let x=m*d-a;for(let M=0;M<f;M++){let b=M*u-o;_.push(b,-x,0),y.push(0,0,1),g.push(M/l),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<l;x++){let M=x+f*m,b=x+f*(m+1),I=x+1+f*(m+1),R=x+1+f*m;p.push(M,b,R),p.push(b,I,R)}this.setIndex(p),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},LM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
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
#endif`,NM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
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
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HM=`#ifdef USE_BATCHING
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
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WM=`#ifdef USE_IRIDESCENCE
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
#endif`,XM=`#ifdef USE_BUMPMAP
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ex=`#define PI 3.141592653589793
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
} // validated`,tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nx=`vec3 transformedNormal = objectNormal;
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
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`
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
}`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
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
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
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
#endif`,Px=`struct PhysicalMaterial {
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
}`,Lx=`
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xx=`#ifdef USE_MORPHNORMALS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
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
#endif`,ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mv=`float getShadowMask() {
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
}`,gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_v=`#ifdef USE_SKINNING
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
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lv=`uniform sampler2D t2D;
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`#include <common>
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
}`,Ov=`#if DEPTH_PACKING == 3200
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
}`,Fv=`#define DISTANCE
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
}`,Hv=`#define DISTANCE
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`uniform float scale;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#define LAMBERT
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
}`,Yv=`#define LAMBERT
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
}`,Kv=`#define MATCAP
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
}`,Zv=`#define MATCAP
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
}`,$v=`#define NORMAL
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
}`,Jv=`#define NORMAL
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
}`,jv=`#define PHONG
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
}`,Qv=`#define PHONG
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
}`,eE=`#define STANDARD
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
}`,tE=`#define STANDARD
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
}`,nE=`#define TOON
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
}`,iE=`#define TOON
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
}`,sE=`uniform float size;
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
}`,rE=`uniform vec3 diffuse;
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
}`,oE=`#include <common>
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
}`,aE=`uniform vec3 color;
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
}`,lE=`uniform float rotation;
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
}`,cE=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:LM,alphahash_pars_fragment:IM,alphamap_fragment:NM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:BM,aomap_fragment:OM,aomap_pars_fragment:FM,batching_pars_vertex:HM,batching_vertex:zM,begin_vertex:kM,beginnormal_vertex:GM,bsdfs:VM,iridescence_fragment:WM,bumpmap_pars_fragment:XM,clipping_planes_fragment:qM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:KM,clipping_planes_vertex:ZM,color_fragment:$M,color_pars_fragment:JM,color_pars_vertex:jM,color_vertex:QM,common:ex,cube_uv_reflection_fragment:tx,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:sx,emissivemap_fragment:rx,emissivemap_pars_fragment:ox,colorspace_fragment:ax,colorspace_pars_fragment:lx,envmap_fragment:cx,envmap_common_pars_fragment:hx,envmap_pars_fragment:fx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:Sx,envmap_vertex:dx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:_x,gradientmap_pars_fragment:yx,lightmap_fragment:Mx,lightmap_pars_fragment:xx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:Ex,lights_pars_begin:bx,lights_toon_fragment:Tx,lights_toon_pars_fragment:Ax,lights_phong_fragment:wx,lights_phong_pars_fragment:Rx,lights_physical_fragment:Cx,lights_physical_pars_fragment:Px,lights_fragment_begin:Lx,lights_fragment_maps:Ix,lights_fragment_end:Nx,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Ux,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:Ox,map_fragment:Fx,map_pars_fragment:Hx,map_particle_fragment:zx,map_particle_pars_fragment:kx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Vx,morphcolor_vertex:Wx,morphnormal_vertex:Xx,morphtarget_pars_vertex:qx,morphtarget_vertex:Yx,normal_fragment_begin:Kx,normal_fragment_maps:Zx,normal_pars_fragment:$x,normal_pars_vertex:Jx,normal_vertex:jx,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:ev,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:nv,iridescence_pars_fragment:iv,opaque_fragment:sv,packing:rv,premultiplied_alpha_fragment:ov,project_vertex:av,dithering_fragment:lv,dithering_pars_fragment:cv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:dv,shadowmap_vertex:pv,shadowmask_pars_fragment:mv,skinbase_vertex:gv,skinning_pars_vertex:_v,skinning_vertex:yv,skinnormal_vertex:Mv,specularmap_fragment:xv,specularmap_pars_fragment:vv,tonemapping_fragment:Ev,tonemapping_pars_fragment:bv,transmission_fragment:Sv,transmission_pars_fragment:Tv,uv_pars_fragment:Av,uv_pars_vertex:wv,uv_vertex:Rv,worldpos_vertex:Cv,background_vert:Pv,background_frag:Lv,backgroundCube_vert:Iv,backgroundCube_frag:Nv,cube_vert:Dv,cube_frag:Uv,depth_vert:Bv,depth_frag:Ov,distanceRGBA_vert:Fv,distanceRGBA_frag:Hv,equirect_vert:zv,equirect_frag:kv,linedashed_vert:Gv,linedashed_frag:Vv,meshbasic_vert:Wv,meshbasic_frag:Xv,meshlambert_vert:qv,meshlambert_frag:Yv,meshmatcap_vert:Kv,meshmatcap_frag:Zv,meshnormal_vert:$v,meshnormal_frag:Jv,meshphong_vert:jv,meshphong_frag:Qv,meshphysical_vert:eE,meshphysical_frag:tE,meshtoon_vert:nE,meshtoon_frag:iE,points_vert:sE,points_frag:rE,shadow_vert:oE,shadow_frag:aE,sprite_vert:lE,sprite_frag:cE},le={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ai={basic:{uniforms:En([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:En([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Me(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:En([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:En([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:En([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Me(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:En([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:En([le.points,le.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:En([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:En([le.common,le.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:En([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:En([le.sprite,le.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:En([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:En([le.lights,le.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Ai.physical={uniforms:En([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};Nl={r:0,b:0,g:0};vs=class extends rc{constructor(e=-1,t=1,s=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=s-e,a=s+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,a=o+f*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qr=4,Im=[.125,.215,.35,.446,.526,.582],Zs=20,gf=new vs,Nm=new Me,_f=null,yf=0,Mf=0,Ys=(1+Math.sqrt(5))/2,Wr=1/Ys,Dm=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ys,Wr),new N(0,Ys,-Wr),new N(Wr,0,Ys),new N(-Wr,0,Ys),new N(Ys,Wr,0),new N(-Ys,Wr,0)],ac=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,r=100){_f=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,s,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_f,yf,Mf),e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_f=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel();let s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:mi,format:Qn,colorSpace:Wt,depthBuffer:!1},r=Um(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,t,s);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gE(o)),this._blurMaterial=_E(o,e,t)}return r}_compileMaterial(e){let t=new j(this._lodPlanes[0],e);this._renderer.compile(t,gf)}_sceneToCubeUV(e,t,s,r){let l=new Vt(90,1,t,s),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Nm),h.toneMapping=ys,h.autoClear=!1;let p=new oe({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),_=new j(new Ze,p),y=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Nm),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(l.up.set(0,c[m],0),l.lookAt(f[m],0,0)):x===1?(l.up.set(0,0,c[m]),l.lookAt(0,f[m],0)):(l.up.set(0,c[m],0),l.lookAt(0,0,f[m]));let M=this._cubeSize;Dl(r,x*M,m>2?M:0,M,M),h.setRenderTarget(r),y&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let s=this._renderer,r=e.mapping===jr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());let o=r?this._cubemapMaterial:this._equirectMaterial,a=new j(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;let c=this._cubeSize;Dl(t,0,0,3*c,2*c),s.setRenderTarget(t),s.render(a,gf)}_applyPMREM(e){let t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dm[(r-1)%Dm.length];this._blur(e,r-1,r,o,a)}t.autoClear=s}_blur(e,t,s,r,o){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,s,r,"latitudinal",o),this._halfBlur(a,e,s,s,r,"longitudinal",o)}_halfBlur(e,t,s,r,o,a,l){let c=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new j(this._lodPlanes[r],f),d=f.uniforms,p=this._sizeLods[s]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Zs-1),y=o/_,g=isFinite(o)?1+Math.floor(h*y):Zs;g>Zs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zs}`);let m=[],x=0;for(let L=0;L<Zs;++L){let D=L/y,E=Math.exp(-D*D/2);m.push(E),L===0?x+=E:L<g&&(x+=2*E)}for(let L=0;L<m.length;L++)m[L]=m[L]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",l&&(d.poleAxis.value=l);let{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-s;let b=this._sizeLods[r],I=3*b*(r>M-qr?r-M+qr:0),R=4*(this._cubeSize-b);Dl(t,I,R,3*b,2*b),c.setRenderTarget(t),c.render(u,gf)}};lc=class extends hn{constructor(e,t,s,r,o,a,l,c,f,h){if(h=h!==void 0?h:js,h!==js&&h!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&h===js&&(s=gs),s===void 0&&h===eo&&(s=Js),super(null,r,o,a,l,c,h,s,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:At,this.minFilter=c!==void 0?c:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},H0=new hn,z0=new lc(1,1);z0.compareFunction=N0;k0=new ec,G0=new Ff,V0=new oc,Fm=[],Hm=[],zm=new Float32Array(16),km=new Float32Array(9),Gm=new Float32Array(4);kf=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=qE(t.type)}},Gf=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u1(t.type)}},Vf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){let r=this.seq;for(let o=0,a=r.length;o!==a;++o){let l=r[o];l.setValue(e,t[l.id],s)}}},xf=/(\w+)(\])?(\[|\.)?/g;Jr=class{constructor(e,t){this.seq=[],this.map={};let s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){let o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);d1(o,a,this)}}setValue(e,t,s,r){let o=this.map[t];o!==void 0&&o.setValue(e,s,r)}setOptional(e,t,s){let r=t[s];r!==void 0&&this.setValue(e,s,r)}static upload(e,t,s,r){for(let o=0,a=t.length;o!==a;++o){let l=t[o],c=s[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){let s=[];for(let r=0,o=e.length;r!==o;++r){let a=e[r];a.id in t&&s.push(a)}return s}};p1=37297,m1=0;S1=/^[ \t]*#include +<([\w\d./]+)>/gm;T1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;U1=0,Xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,s=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(s),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){let t=this.shaderCache,s=t.get(e);return s===void 0&&(s=new qf(e),t.set(e,s)),s}},qf=class{constructor(e){this.id=U1++,this.code=e,this.usedTimes=0}};G1=0;Yf=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kf=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y1=`uniform sampler2D shadow_pass;
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
}`;Zf=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ot=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},j1={type:"move"},ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let r=null,o=null,a=null,l=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,s),m=this._getHandJoint(f,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=f.joints["index-finger-tip"],u=f.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;f.inputState.pinching&&d>p+_?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&d<=p-_&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,s),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,s),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(j1)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let s=new ot;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}},$f=class extends xs{constructor(e,t){super();let s=this,r=null,o=1,a=null,l="local-floor",c=1,f=null,h=null,u=null,d=null,p=null,_=null,y=t.getContextAttributes(),g=null,m=null,x=[],M=[],b=new ue,I=null,R=new Vt;R.layers.enable(1),R.viewport=new _t;let L=new Vt;L.layers.enable(2),L.viewport=new _t;let D=[R,L],E=new Zf;E.layers.enable(1),E.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let O=x[P];return O===void 0&&(O=new ra,x[P]=O),O.getTargetRaySpace()},this.getControllerGrip=function(P){let O=x[P];return O===void 0&&(O=new ra,x[P]=O),O.getGripSpace()},this.getHand=function(P){let O=x[P];return O===void 0&&(O=new ra,x[P]=O),O.getHandSpace()};function K(P){let O=M.indexOf(P.inputSource);if(O===-1)return;let J=x[O];J!==void 0&&(J.update(P.inputSource,P.frame,f||a),J.dispatchEvent({type:P.type,data:P.inputSource}))}function ne(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",B);for(let P=0;P<x.length;P++){let O=M[P];O!==null&&(M[P]=null,x[P].disconnect(O))}T=null,k=null,e.setRenderTarget(g),p=null,d=null,u=null,r=null,m=null,$.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(b.width,b.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){o=P,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){l=P,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(P){f=P},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let O={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new bn(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Ms,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let O=null,J=null,ee=null;y.depth&&(ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=y.stencil?eo:js,J=y.stencil?Js:gs);let ce={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:o};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new bn(d.textureWidth,d.textureHeight,{format:Qn,type:Ms,depthTexture:new lc(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let ye=e.properties.get(m);ye.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),f=null,a=await r.requestReferenceSpace(l),$.setContext(r),$.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(P){for(let O=0;O<P.removed.length;O++){let J=P.removed[O],ee=M.indexOf(J);ee>=0&&(M[ee]=null,x[ee].disconnect(J))}for(let O=0;O<P.added.length;O++){let J=P.added[O],ee=M.indexOf(J);if(ee===-1){for(let ye=0;ye<x.length;ye++)if(ye>=M.length){M.push(J),ee=ye;break}else if(M[ye]===null){M[ye]=J,ee=ye;break}if(ee===-1)break}let ce=x[ee];ce&&ce.connect(J)}}let V=new N,Z=new N;function Q(P,O,J){V.setFromMatrixPosition(O.matrixWorld),Z.setFromMatrixPosition(J.matrixWorld);let ee=V.distanceTo(Z),ce=O.projectionMatrix.elements,ye=J.projectionMatrix.elements,ve=ce[14]/(ce[10]-1),me=ce[14]/(ce[10]+1),Ue=(ce[9]+1)/ce[5],G=(ce[9]-1)/ce[5],bt=(ce[8]-1)/ce[0],Ee=(ye[8]+1)/ye[0],Le=ve*bt,xe=ve*Ee,St=ee/(-bt+Ee),He=St*-bt;O.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(He),P.translateZ(St),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();let C=ve+St,S=me+St,X=Le-He,se=xe+(ee-He),ie=Ue*me/S*C,re=G*me/S*C;P.projectionMatrix.makePerspective(X,se,ie,re,C,S),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function v(P,O){O===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(O.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;E.near=L.near=R.near=P.near,E.far=L.far=R.far=P.far,(T!==E.near||k!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,k=E.far);let O=P.parent,J=E.cameras;v(E,O);for(let ee=0;ee<J.length;ee++)v(J[ee],O);J.length===2?Q(E,R,L):E.projectionMatrix.copy(R.projectionMatrix),w(P,E,O)};function w(P,O,J){J===null?P.matrix.copy(O.matrixWorld):(P.matrix.copy(J.matrixWorld),P.matrix.invert(),P.matrix.multiply(O.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(O.projectionMatrix),P.projectionMatrixInverse.copy(O.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=no*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(P){c=P,d!==null&&(d.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)};let F=null;function H(P,O){if(h=O.getViewerPose(f||a),_=O,h!==null){let J=h.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let ee=!1;J.length!==E.cameras.length&&(E.cameras.length=0,ee=!0);for(let ce=0;ce<J.length;ce++){let ye=J[ce],ve=null;if(p!==null)ve=p.getViewport(ye);else{let Ue=u.getViewSubImage(d,ye);ve=Ue.viewport,ce===0&&(e.setRenderTargetTextures(m,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(m))}let me=D[ce];me===void 0&&(me=new Vt,me.layers.enable(ce),me.viewport=new _t,D[ce]=me),me.matrix.fromArray(ye.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ye.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ve.x,ve.y,ve.width,ve.height),ce===0&&(E.matrix.copy(me.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ee===!0&&E.cameras.push(me)}}for(let J=0;J<x.length;J++){let ee=M[J],ce=x[J];ee!==null&&ce!==void 0&&ce.update(ee,O,f||a)}F&&F(P,O),O.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:O}),_=null}let $=new F0;$.setAnimationLoop(H),this.setAnimationLoop=function(P){F=P},this.dispose=function(){}}};fa=class{constructor(e={}){let{canvas:t=hM(),context:s=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;s!==null?d=s.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),_=new Int32Array(4),y=null,g=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=ys,this.toneMappingExposure=1;let M=this,b=!1,I=0,R=0,L=null,D=-1,E=null,T=new _t,k=new _t,K=null,ne=new Me(0),B=0,V=t.width,Z=t.height,Q=1,v=null,w=null,F=new _t(0,0,V,Z),H=new _t(0,0,V,Z),$=!1,P=new ha,O=!1,J=!1,ee=null,ce=new Be,ye=new ue,ve=new N,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return L===null?Q:1}let G=s;function bt(A,z){for(let q=0;q<A.length;q++){let Y=A[q],W=t.getContext(Y,z);if(W!==null)return W}return null}try{let A={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",he,!1),G===null){let z=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&z.shift(),G=bt(z,A),G===null)throw bt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,Le,xe,St,He,C,S,X,se,ie,re,be,de,ge,Pe,Ye,te,mt,et,ze,Te,_e,Xe,dt;function Lt(){Ee=new ME(G),Le=new dE(G,Ee,e),Ee.init(Le),_e=new J1(G,Ee,Le),xe=new Z1(G,Ee,Le),St=new EE(G),He=new O1,C=new $1(G,Ee,xe,He,Le,_e,St),S=new mE(M),X=new yE(M),se=new PM(G,Le),Xe=new fE(G,Ee,se,Le),ie=new xE(G,se,St,Xe),re=new AE(G,ie,se,St),et=new TE(G,Le,C),Ye=new pE(He),be=new B1(M,S,X,Ee,Le,Xe,Ye),de=new Q1(M,He),ge=new H1,Pe=new X1(Ee,Le),mt=new hE(M,S,X,xe,re,d,c),te=new K1(M,re,Le),dt=new eb(G,St,Le,xe),ze=new uE(G,Ee,St,Le),Te=new vE(G,Ee,St,Le),St.programs=be.programs,M.capabilities=Le,M.extensions=Ee,M.properties=He,M.renderLists=ge,M.shadowMap=te,M.state=xe,M.info=St}Lt();let Je=new $f(M,G);this.xr=Je,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(V,Z,!1))},this.getSize=function(A){return A.set(V,Z)},this.setSize=function(A,z,q=!0){if(Je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,Z=z,t.width=Math.floor(A*Q),t.height=Math.floor(z*Q),q===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(V*Q,Z*Q).floor()},this.setDrawingBufferSize=function(A,z,q){V=A,Z=z,Q=q,t.width=Math.floor(A*q),t.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,z,q,Y){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,z,q,Y),xe.viewport(T.copy(F).multiplyScalar(Q).floor())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,z,q,Y){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,z,q,Y),xe.scissor(k.copy(H).multiplyScalar(Q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){xe.setScissorTest($=A)},this.setOpaqueSort=function(A){v=A},this.setTransparentSort=function(A){w=A},this.getClearColor=function(A){return A.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(A=!0,z=!0,q=!0){let Y=0;if(A){let W=!1;if(L!==null){let pe=L.texture.format;W=pe===R0||pe===w0||pe===A0}if(W){let pe=L.texture.type,Se=pe===Ms||pe===gs||pe===xu||pe===Js||pe===S0||pe===T0,Ce=mt.getClearColor(),Ne=mt.getClearAlpha(),Ke=Ce.r,Ge=Ce.g,Ve=Ce.b;Se?(p[0]=Ke,p[1]=Ge,p[2]=Ve,p[3]=Ne,G.clearBufferuiv(G.COLOR,0,p)):(_[0]=Ke,_[1]=Ge,_[2]=Ve,_[3]=Ne,G.clearBufferiv(G.COLOR,0,_))}else Y|=G.COLOR_BUFFER_BIT}z&&(Y|=G.DEPTH_BUFFER_BIT),q&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),Pe.dispose(),He.dispose(),S.dispose(),X.dispose(),re.dispose(),Xe.dispose(),dt.dispose(),be.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",Mn),Je.removeEventListener("sessionend",vt),ee&&(ee.dispose(),ee=null),xn.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let A=St.autoReset,z=te.enabled,q=te.autoUpdate,Y=te.needsUpdate,W=te.type;Lt(),St.autoReset=A,te.enabled=z,te.autoUpdate=q,te.needsUpdate=Y,te.type=W}function he(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){let z=A.target;z.removeEventListener("dispose",fe),Ie(z)}function Ie(A){Re(A),He.remove(A)}function Re(A){let z=He.get(A).programs;z!==void 0&&(z.forEach(function(q){be.releaseProgram(q)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,Y,W,pe){z===null&&(z=me);let Se=W.isMesh&&W.matrixWorld.determinant()<0,Ce=X_(A,z,q,Y,W);xe.setMaterial(Y,Se);let Ne=q.index,Ke=1;if(Y.wireframe===!0){if(Ne=ie.getWireframeAttribute(q),Ne===void 0)return;Ke=2}let Ge=q.drawRange,Ve=q.attributes.position,Bt=Ge.start*Ke,kn=(Ge.start+Ge.count)*Ke;pe!==null&&(Bt=Math.max(Bt,pe.start*Ke),kn=Math.min(kn,(pe.start+pe.count)*Ke)),Ne!==null?(Bt=Math.max(Bt,0),kn=Math.min(kn,Ne.count)):Ve!=null&&(Bt=Math.max(Bt,0),kn=Math.min(kn,Ve.count));let Qt=kn-Bt;if(Qt<0||Qt===1/0)return;Xe.setup(W,Y,Ce,q,Ne);let Gi,Ct=ze;if(Ne!==null&&(Gi=se.get(Ne),Ct=Te,Ct.setIndex(Gi)),W.isMesh)Y.wireframe===!0?(xe.setLineWidth(Y.wireframeLinewidth*Ue()),Ct.setMode(G.LINES)):Ct.setMode(G.TRIANGLES);else if(W.isLine){let je=Y.linewidth;je===void 0&&(je=1),xe.setLineWidth(je*Ue()),W.isLineSegments?Ct.setMode(G.LINES):W.isLineLoop?Ct.setMode(G.LINE_LOOP):Ct.setMode(G.LINE_STRIP)}else W.isPoints?Ct.setMode(G.POINTS):W.isSprite&&Ct.setMode(G.TRIANGLES);if(W.isBatchedMesh)Ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Ct.renderInstances(Bt,Qt,W.count);else if(q.isInstancedBufferGeometry){let je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Gh=Math.min(q.instanceCount,je);Ct.renderInstances(Bt,Qt,Gh)}else Ct.render(Bt,Qt)};function Mt(A,z,q){A.transparent===!0&&A.side===yt&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,ul(A,z,q),A.side=Ci,A.needsUpdate=!0,ul(A,z,q),A.side=yt):ul(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),g=Pe.get(q),g.init(),x.push(g),q.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),A!==q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(M._useLegacyLights);let Y=new Set;return A.traverse(function(W){let pe=W.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){let Ce=pe[Se];Mt(Ce,q,W),Y.add(Ce)}else Mt(pe,q,W),Y.add(pe)}),x.pop(),g=null,Y},this.compileAsync=function(A,z,q=null){let Y=this.compile(A,z,q);return new Promise(W=>{function pe(){if(Y.forEach(function(Se){He.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){W(A);return}setTimeout(pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let xt=null;function jt(A){xt&&xt(A)}function Mn(){xn.stop()}function vt(){xn.start()}let xn=new F0;xn.setAnimationLoop(jt),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(A){xt=A,Je.setAnimationLoop(A),A===null?xn.stop():xn.start()},Je.addEventListener("sessionstart",Mn),Je.addEventListener("sessionend",vt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(z),z=Je.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,z,L),g=Pe.get(A,x.length),g.init(),x.push(g),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),P.setFromProjectionMatrix(ce),J=this.localClippingEnabled,O=Ye.init(this.clippingPlanes,J),y=ge.get(A,m.length),y.init(),m.push(y),Ti(A,z,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(v,w),this.info.render.frame++,O===!0&&Ye.beginShadows();let q=g.state.shadowsArray;if(te.render(q,A,z),O===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(y,A),g.setupLights(M._useLegacyLights),z.isArrayCamera){let Y=z.cameras;for(let W=0,pe=Y.length;W<pe;W++){let Se=Y[W];wp(y,A,Se,Se.viewport)}}else wp(y,A,z);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(M,A,z),Xe.resetDefaultState(),D=-1,E=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Ti(A,z,q,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||P.intersectsSprite(A)){Y&&ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);let Se=re.update(A),Ce=A.material;Ce.visible&&y.push(A,Se,Ce,q,ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||P.intersectsObject(A))){let Se=re.update(A),Ce=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ve.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ve.copy(Se.boundingSphere.center)),ve.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Ce)){let Ne=Se.groups;for(let Ke=0,Ge=Ne.length;Ke<Ge;Ke++){let Ve=Ne[Ke],Bt=Ce[Ve.materialIndex];Bt&&Bt.visible&&y.push(A,Se,Bt,q,ve.z,Ve)}}else Ce.visible&&y.push(A,Se,Ce,q,ve.z,null)}}let pe=A.children;for(let Se=0,Ce=pe.length;Se<Ce;Se++)Ti(pe[Se],z,q,Y)}function wp(A,z,q,Y){let W=A.opaque,pe=A.transmissive,Se=A.transparent;g.setupLightsView(q),O===!0&&Ye.setGlobalState(M.clippingPlanes,q),pe.length>0&&W_(W,pe,z,q),Y&&xe.viewport(T.copy(Y)),W.length>0&&fl(W,z,q),pe.length>0&&fl(pe,z,q),Se.length>0&&fl(Se,z,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function W_(A,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let pe=Le.isWebGL2;ee===null&&(ee=new bn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?mi:Ms,minFilter:pi,samples:pe?4:0})),M.getDrawingBufferSize(ye),pe?ee.setSize(ye.x,ye.y):ee.setSize(Jl(ye.x),Jl(ye.y));let Se=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(ne),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear();let Ce=M.toneMapping;M.toneMapping=ys,fl(A,q,Y),C.updateMultisampleRenderTarget(ee),C.updateRenderTargetMipmap(ee);let Ne=!1;for(let Ke=0,Ge=z.length;Ke<Ge;Ke++){let Ve=z[Ke],Bt=Ve.object,kn=Ve.geometry,Qt=Ve.material,Gi=Ve.group;if(Qt.side===yt&&Bt.layers.test(Y.layers)){let Ct=Qt.side;Qt.side=Nn,Qt.needsUpdate=!0,Rp(Bt,q,Y,kn,Qt,Gi),Qt.side=Ct,Qt.needsUpdate=!0,Ne=!0}}Ne===!0&&(C.updateMultisampleRenderTarget(ee),C.updateRenderTargetMipmap(ee)),M.setRenderTarget(Se),M.setClearColor(ne,B),M.toneMapping=Ce}function fl(A,z,q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let W=0,pe=A.length;W<pe;W++){let Se=A[W],Ce=Se.object,Ne=Se.geometry,Ke=Y===null?Se.material:Y,Ge=Se.group;Ce.layers.test(q.layers)&&Rp(Ce,z,q,Ne,Ke,Ge)}}function Rp(A,z,q,Y,W,pe){A.onBeforeRender(M,z,q,Y,W,pe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(M,z,q,Y,A,pe),W.transparent===!0&&W.side===yt&&W.forceSinglePass===!1?(W.side=Nn,W.needsUpdate=!0,M.renderBufferDirect(q,z,Y,W,A,pe),W.side=Ci,W.needsUpdate=!0,M.renderBufferDirect(q,z,Y,W,A,pe),W.side=yt):M.renderBufferDirect(q,z,Y,W,A,pe),A.onAfterRender(M,z,q,Y,W,pe)}function ul(A,z,q){z.isScene!==!0&&(z=me);let Y=He.get(A),W=g.state.lights,pe=g.state.shadowsArray,Se=W.state.version,Ce=be.getParameters(A,W.state,pe,z,q),Ne=be.getProgramCacheKey(Ce),Ke=Y.programs;Y.environment=A.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(A.isMeshStandardMaterial?X:S).get(A.envMap||Y.environment),Ke===void 0&&(A.addEventListener("dispose",fe),Ke=new Map,Y.programs=Ke);let Ge=Ke.get(Ne);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===Se)return Pp(A,Ce),Ge}else Ce.uniforms=be.getUniforms(A),A.onBuild(q,Ce,M),A.onBeforeCompile(Ce,M),Ge=be.acquireProgram(Ce,Ne),Ke.set(Ne,Ge),Y.uniforms=Ce.uniforms;let Ve=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Ye.uniform),Pp(A,Ce),Y.needsLights=Y_(A),Y.lightsStateVersion=Se,Y.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMap.value=W.state.directionalShadowMap,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotShadowMap.value=W.state.spotShadowMap,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMap.value=W.state.pointShadowMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function Cp(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Jr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Pp(A,z){let q=He.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function X_(A,z,q,Y,W){z.isScene!==!0&&(z=me),C.resetTextureUnits();let pe=z.fog,Se=Y.isMeshStandardMaterial?z.environment:null,Ce=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Wt,Ne=(Y.isMeshStandardMaterial?X:S).get(Y.envMap||Se),Ke=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ve=!!q.morphAttributes.position,Bt=!!q.morphAttributes.normal,kn=!!q.morphAttributes.color,Qt=ys;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Qt=M.toneMapping);let Gi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ct=Gi!==void 0?Gi.length:0,je=He.get(Y),Gh=g.state.lights;if(O===!0&&(J===!0||A!==E)){let Jn=A===E&&Y.id===D;Ye.setState(Y,A,Jn)}let It=!1;Y.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Gh.state.version||je.outputColorSpace!==Ce||W.isBatchedMesh&&je.batching===!1||!W.isBatchedMesh&&je.batching===!0||W.isInstancedMesh&&je.instancing===!1||!W.isInstancedMesh&&je.instancing===!0||W.isSkinnedMesh&&je.skinning===!1||!W.isSkinnedMesh&&je.skinning===!0||W.isInstancedMesh&&je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&je.instancingColor===!1&&W.instanceColor!==null||je.envMap!==Ne||Y.fog===!0&&je.fog!==pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ye.numPlanes||je.numIntersection!==Ye.numIntersection)||je.vertexAlphas!==Ke||je.vertexTangents!==Ge||je.morphTargets!==Ve||je.morphNormals!==Bt||je.morphColors!==kn||je.toneMapping!==Qt||Le.isWebGL2===!0&&je.morphTargetsCount!==Ct)&&(It=!0):(It=!0,je.__version=Y.version);let ks=je.currentProgram;It===!0&&(ks=ul(Y,z,W));let Lp=!1,Zo=!1,Vh=!1,pn=ks.getUniforms(),Gs=je.uniforms;if(xe.useProgram(ks.program)&&(Lp=!0,Zo=!0,Vh=!0),Y.id!==D&&(D=Y.id,Zo=!0),Lp||E!==A){pn.setValue(G,"projectionMatrix",A.projectionMatrix),pn.setValue(G,"viewMatrix",A.matrixWorldInverse);let Jn=pn.map.cameraPosition;Jn!==void 0&&Jn.setValue(G,ve.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&pn.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pn.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Zo=!0,Vh=!0)}if(W.isSkinnedMesh){pn.setOptional(G,W,"bindMatrix"),pn.setOptional(G,W,"bindMatrixInverse");let Jn=W.skeleton;Jn&&(Le.floatVertexTextures?(Jn.boneTexture===null&&Jn.computeBoneTexture(),pn.setValue(G,"boneTexture",Jn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(pn.setOptional(G,W,"batchingTexture"),pn.setValue(G,"batchingTexture",W._matricesTexture,C));let Wh=q.morphAttributes;if((Wh.position!==void 0||Wh.normal!==void 0||Wh.color!==void 0&&Le.isWebGL2===!0)&&et.update(W,q,ks),(Zo||je.receiveShadow!==W.receiveShadow)&&(je.receiveShadow=W.receiveShadow,pn.setValue(G,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Gs.envMap.value=Ne,Gs.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Zo&&(pn.setValue(G,"toneMappingExposure",M.toneMappingExposure),je.needsLights&&q_(Gs,Vh),pe&&Y.fog===!0&&de.refreshFogUniforms(Gs,pe),de.refreshMaterialUniforms(Gs,Y,Q,Z,ee),Jr.upload(G,Cp(je),Gs,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Jr.upload(G,Cp(je),Gs,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pn.setValue(G,"center",W.center),pn.setValue(G,"modelViewMatrix",W.modelViewMatrix),pn.setValue(G,"normalMatrix",W.normalMatrix),pn.setValue(G,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Jn=Y.uniformsGroups;for(let Xh=0,K_=Jn.length;Xh<K_;Xh++)if(Le.isWebGL2){let Ip=Jn[Xh];dt.update(Ip,ks),dt.bind(Ip,ks)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ks}function q_(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Y_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,z,q){He.get(A.texture).__webglTexture=z,He.get(A.depthTexture).__webglTexture=q;let Y=He.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){let q=He.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,q=0){L=A,I=z,R=q;let Y=!0,W=null,pe=!1,Se=!1;if(A){let Ne=He.get(A);Ne.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(G.FRAMEBUFFER,null),Y=!1):Ne.__webglFramebuffer===void 0?C.setupRenderTarget(A):Ne.__hasExternalTextures&&C.rebindTextures(A,He.get(A.texture).__webglTexture,He.get(A.depthTexture).__webglTexture);let Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Se=!0);let Ge=He.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?W=Ge[z][q]:W=Ge[z],pe=!0):Le.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?W=He.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?W=Ge[q]:W=Ge,T.copy(A.viewport),k.copy(A.scissor),K=A.scissorTest}else T.copy(F).multiplyScalar(Q).floor(),k.copy(H).multiplyScalar(Q).floor(),K=$;if(xe.bindFramebuffer(G.FRAMEBUFFER,W)&&Le.drawBuffers&&Y&&xe.drawBuffers(A,W),xe.viewport(T),xe.scissor(k),xe.setScissorTest(K),pe){let Ne=He.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,q)}else if(Se){let Ne=He.get(A.texture),Ke=z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.__webglTexture,q||0,Ke)}D=-1},this.readRenderTargetPixels=function(A,z,q,Y,W,pe,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){xe.bindFramebuffer(G.FRAMEBUFFER,Ce);try{let Ne=A.texture,Ke=Ne.format,Ge=Ne.type;if(Ke!==Qn&&_e.convert(Ke)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=Ge===mi&&(Ee.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ge!==Ms&&_e.convert(Ge)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Ji&&(Le.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&q>=0&&q<=A.height-W&&G.readPixels(z,q,Y,W,_e.convert(Ke),_e.convert(Ge),pe)}finally{let Ne=L!==null?He.get(L).__webglFramebuffer:null;xe.bindFramebuffer(G.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(A,z,q=0){let Y=Math.pow(2,-q),W=Math.floor(z.image.width*Y),pe=Math.floor(z.image.height*Y);C.setTexture2D(z,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,A.x,A.y,W,pe),xe.unbindTexture()},this.copyTextureToTexture=function(A,z,q,Y=0){let W=z.image.width,pe=z.image.height,Se=_e.convert(q.format),Ce=_e.convert(q.type);C.setTexture2D(q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment),z.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,A.x,A.y,W,pe,Se,Ce,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Se,z.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Y,A.x,A.y,Se,Ce,z.image),Y===0&&q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(A,z,q,Y,W=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pe=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Ce=A.max.z-A.min.z+1,Ne=_e.convert(Y.format),Ke=_e.convert(Y.type),Ge;if(Y.isData3DTexture)C.setTexture3D(Y,0),Ge=G.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),Ge=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);let Ve=G.getParameter(G.UNPACK_ROW_LENGTH),Bt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),kn=G.getParameter(G.UNPACK_SKIP_PIXELS),Qt=G.getParameter(G.UNPACK_SKIP_ROWS),Gi=G.getParameter(G.UNPACK_SKIP_IMAGES),Ct=q.isCompressedTexture?q.mipmaps[W]:q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Ct.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ct.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(Ge,W,z.x,z.y,z.z,pe,Se,Ce,Ne,Ke,Ct.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ge,W,z.x,z.y,z.z,pe,Se,Ce,Ne,Ct.data)):G.texSubImage3D(Ge,W,z.x,z.y,z.z,pe,Se,Ce,Ne,Ke,Ct),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ve),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Bt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Gi),W===0&&Y.generateMipmaps&&G.generateMipmap(Ge),xe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){I=0,R=0,L=null,xe.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vu?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Rc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Qs:L0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qs?ct:Wt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Jf=class extends fa{};Jf.prototype.isWebGL1Renderer=!0;cc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},hc=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ua=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Df,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[s+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new N,da=class n{constructor(e,t,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=r,this}setXYZW(e,t,s,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),s=gt(s,this.array),r=gt(r,this.array),o=gt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qm=new N,e0=new _t,t0=new _t,tb=new N,n0=new Be,Ul=new N,vf=new Xn,i0=new Be,Ef=new io,fc=class extends j{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fp,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let s=0;s<t.count;s++)this.getVertexPosition(s,Ul),this.boundingBox.expandByPoint(Ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let s=0;s<t.count;s++)this.getVertexPosition(s,Ul),this.boundingSphere.expandByPoint(Ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let s=this.material,r=this.matrixWorld;s!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vf.copy(this.boundingSphere),vf.applyMatrix4(r),e.ray.intersectsSphere(vf)!==!1&&(i0.copy(r).invert(),Ef.copy(e.ray).applyMatrix4(i0),!(this.boundingBox!==null&&Ef.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ef)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let s=0,r=t.count;s<r;s++){e.fromBufferAttribute(t,s);let o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(s,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Py?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let s=this.skeleton,r=this.geometry;e0.fromBufferAttribute(r.attributes.skinIndex,e),t0.fromBufferAttribute(r.attributes.skinWeight,e),Qm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){let a=t0.getComponent(o);if(a!==0){let l=e0.getComponent(o);n0.multiplyMatrices(s.bones[l].matrixWorld,s.boneInverses[l]),t.addScaledVector(tb.copy(Qm).applyMatrix4(n0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},pa=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},jf=class extends hn{constructor(e=null,t=1,s=1,r,o,a,l,c,f=At,h=At,u,d){super(null,a,l,c,f,h,r,o,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},s0=new Be,nb=new Be,uc=class n{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let s=0,r=this.bones.length;s<r;s++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let s=new Be;this.bones[e]&&s.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(s)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let s=this.bones[e];s&&s.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let s=this.bones[e];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){let e=this.bones,t=this.boneInverses,s=this.boneMatrices,r=this.boneTexture;for(let o=0,a=e.length;o<a;o++){let l=e[o]?e[o].matrixWorld:nb;s0.multiplyMatrices(l,t[o]),s0.toArray(s,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let s=new jf(t,e,e,Qn,Ji);return s.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=s,this}getBoneByName(e){for(let t=0,s=this.bones.length;t<s;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let s=0,r=e.bones.length;s<r;s++){let o=e.bones[s],a=t[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new pa),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[s]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,s=this.boneInverses;for(let r=0,o=t.length;r<o;r++){let a=t[r];e.bones.push(a.uuid);let l=s[r];e.boneInverses.push(l.toArray())}return e}},tr=class extends ht{constructor(e,t,s,r=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xr=new Be,r0=new Be,Bl=[],o0=new wt,ib=new Be,ea=new j,ta=new Xn,dc=class extends j{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(s*16),16),this.instanceColor=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<s;r++)this.setMatrixAt(r,ib)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Xr),o0.copy(e.boundingBox).applyMatrix4(Xr),this.boundingBox.union(o0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Xr),ta.copy(e.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let s=this.matrixWorld,r=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(s),e.ray.intersectsSphere(ta)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Xr),r0.multiplyMatrices(s,Xr),ea.matrixWorld=r0,ea.raycast(e,Bl);for(let a=0,l=Bl.length;a<l;a++){let c=Bl[a];c.instanceId=o,c.object=this,t.push(c)}Bl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},a0=new N,l0=new N,c0=new Be,bf=new io,Ol=new Xn,es=class extends Nt{constructor(e=new pt,t=new Dn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[0];for(let r=1,o=t.count;r<o;r++)a0.fromBufferAttribute(t,r-1),l0.fromBufferAttribute(t,r),s[r]=s[r-1],s[r]+=a0.distanceTo(l0);e.setAttribute("lineDistance",new rt(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let s=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ol.copy(s.boundingSphere),Ol.applyMatrix4(r),Ol.radius+=o,e.ray.intersectsSphere(Ol)===!1)return;c0.copy(r).invert(),bf.copy(e.ray).applyMatrix4(c0);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,f=new N,h=new N,u=new N,d=new N,p=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){let m=Math.max(0,a.start),x=Math.min(_.count,a.start+a.count);for(let M=m,b=x-1;M<b;M+=p){let I=_.getX(M),R=_.getX(M+1);if(f.fromBufferAttribute(g,I),h.fromBufferAttribute(g,R),bf.distanceSqToSegment(f,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let M=m,b=x-1;M<b;M+=p){if(f.fromBufferAttribute(g,M),h.fromBufferAttribute(g,M+1),bf.distanceSqToSegment(f,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}},h0=new N,f0=new N,kt=class extends es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[];for(let r=0,o=t.count;r<o;r+=2)h0.fromBufferAttribute(t,r),f0.fromBufferAttribute(t,r+1),s[r]=r===0?0:s[r-1],s[r+1]=s[r]+h0.distanceTo(f0);e.setAttribute("lineDistance",new rt(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},pc=class extends es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},nr=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},u0=new Be,Qf=new io,Fl=new Xn,Hl=new N,ro=class extends Nt{constructor(e=new pt,t=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let s=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Fl.copy(s.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=o,e.ray.intersectsSphere(Fl)===!1)return;u0.copy(r).invert(),Qf.copy(e.ray).applyMatrix4(u0);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,f=s.index,u=s.attributes.position;if(f!==null){let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,y=p;_<y;_++){let g=f.getX(_);Hl.fromBufferAttribute(u,g),d0(Hl,g,c,r,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,y=p;_<y;_++)Hl.fromBufferAttribute(u,_),d0(Hl,_,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}};Un=class extends hn{constructor(e,t,s,r,o,a,l,c,f){super(e,t,s,r,o,a,l,c,f),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],s,r=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)s=this.getPoint(a/e),o+=s.distanceTo(r),t.push(o),r=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let s=this.getLengths(),r=0,o=s.length,a;t?a=t:a=e*s[o-1];let l=0,c=o-1,f;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),f=s[r]-a,f<0)l=r+1;else if(f>0)c=r-1;else{c=r;break}if(r=c,s[r]===a)return r/(o-1);let h=s[r],d=s[r+1]-h,p=(a-h)/d;return(r+p)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let a=this.getPoint(r),l=this.getPoint(o),c=t||(a.isVector2?new ue:new N);return c.copy(l).sub(a).normalize(),c}getTangentAt(e,t){let s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){let s=new N,r=[],o=[],a=[],l=new N,c=new Be;for(let p=0;p<=e;p++){let _=p/e;r[p]=this.getTangentAt(_,new N)}o[0]=new N,a[0]=new N;let f=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=f&&(f=h,s.set(1,0,0)),u<=f&&(f=u,s.set(0,1,0)),d<=f&&s.set(0,0,1),l.crossVectors(r[0],s).normalize(),o[0].crossVectors(r[0],l),a[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),a[p]=a[p-1].clone(),l.crossVectors(r[p-1],r[p]),l.length()>Number.EPSILON){l.normalize();let _=Math.acos(tn(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(l,_))}a[p].crossVectors(r[p],o[p])}if(t===!0){let p=Math.acos(tn(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(l.crossVectors(o[0],o[e]))>0&&(p=-p);for(let _=1;_<=e;_++)o[_].applyMatrix4(c.makeRotationAxis(r[_],p*_)),a[_].crossVectors(r[_],o[_])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mc=class extends gi{constructor(e=0,t=0,s=1,r=1,o=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(e,t){let s=t||new ue,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(a?o=0:o=r),this.aClockwise===!0&&!a&&(o===r?o=-r:o=o-r);let l=this.aStartAngle+e*o,c=this.aX+this.xRadius*Math.cos(l),f=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=f-this.aY;c=d*h-p*u+this.aX,f=d*u+p*h+this.aY}return s.set(c,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},eu=class extends mc{constructor(e,t,s,r,o,a){super(e,t,s,s,r,o,a),this.isArcCurve=!0,this.type="ArcCurve"}};zl=new N,Sf=new Su,Tf=new Su,Af=new Su,ma=class extends gi{constructor(e=[],t=!1,s="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=r}getPoint(e,t=new N){let s=t,r=this.points,o=r.length,a=(o-(this.closed?0:1))*e,l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:c===0&&l===o-1&&(l=o-2,c=1);let f,h;this.closed||l>0?f=r[(l-1)%o]:(zl.subVectors(r[0],r[1]).add(r[0]),f=zl);let u=r[l%o],d=r[(l+1)%o];if(this.closed||l+2<o?h=r[(l+2)%o]:(zl.subVectors(r[o-1],r[o-2]).add(r[o-1]),h=zl),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(f.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),Sf.initNonuniformCatmullRom(f.x,u.x,d.x,h.x,_,y,g),Tf.initNonuniformCatmullRom(f.y,u.y,d.y,h.y,_,y,g),Af.initNonuniformCatmullRom(f.z,u.z,d.z,h.z,_,y,g)}else this.curveType==="catmullrom"&&(Sf.initCatmullRom(f.x,u.x,d.x,h.x,this.tension),Tf.initCatmullRom(f.y,u.y,d.y,h.y,this.tension),Af.initCatmullRom(f.z,u.z,d.z,h.z,this.tension));return s.set(Sf.calc(c),Tf.calc(c),Af.calc(c)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};tu=class extends gi{constructor(e=new ue,t=new ue,s=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=r}getPoint(e,t=new ue){let s=t,r=this.v0,o=this.v1,a=this.v2,l=this.v3;return s.set(aa(e,r.x,o.x,a.x,l.x),aa(e,r.y,o.y,a.y,l.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nu=class extends gi{constructor(e=new N,t=new N,s=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=r}getPoint(e,t=new N){let s=t,r=this.v0,o=this.v1,a=this.v2,l=this.v3;return s.set(aa(e,r.x,o.x,a.x,l.x),aa(e,r.y,o.y,a.y,l.y),aa(e,r.z,o.z,a.z,l.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},iu=class extends gi{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},su=class extends gi{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ru=class extends gi{constructor(e=new ue,t=new ue,s=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new ue){let s=t,r=this.v0,o=this.v1,a=this.v2;return s.set(oa(e,r.x,o.x,a.x),oa(e,r.y,o.y,a.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gc=class extends gi{constructor(e=new N,t=new N,s=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new N){let s=t,r=this.v0,o=this.v1,a=this.v2;return s.set(oa(e,r.x,o.x,a.x),oa(e,r.y,o.y,a.y),oa(e,r.z,o.z,a.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ou=class extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let s=t,r=this.points,o=(r.length-1)*e,a=Math.floor(o),l=o-a,c=r[a===0?a:a-1],f=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return s.set(p0(l,c.x,f.x,h.x,u.x),p0(l,c.y,f.y,h.y,u.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(new ue().fromArray(r))}return this}},fb=Object.freeze({__proto__:null,ArcCurve:eu,CatmullRomCurve3:ma,CubicBezierCurve:tu,CubicBezierCurve3:nu,EllipseCurve:mc,LineCurve:iu,LineCurve3:su,QuadraticBezierCurve:ru,QuadraticBezierCurve3:gc,SplineCurve:ou}),Sn=class n extends pt{constructor(e=1,t=1,s=1,r=32,o=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:c};let f=this;r=Math.floor(r),o=Math.floor(o);let h=[],u=[],d=[],p=[],_=0,y=[],g=s/2,m=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(p,2));function x(){let b=new N,I=new N,R=0,L=(t-e)/s;for(let D=0;D<=o;D++){let E=[],T=D/o,k=T*(t-e)+e;for(let K=0;K<=r;K++){let ne=K/r,B=ne*c+l,V=Math.sin(B),Z=Math.cos(B);I.x=k*V,I.y=-T*s+g,I.z=k*Z,u.push(I.x,I.y,I.z),b.set(V,L,Z).normalize(),d.push(b.x,b.y,b.z),p.push(ne,1-T),E.push(_++)}y.push(E)}for(let D=0;D<r;D++)for(let E=0;E<o;E++){let T=y[E][D],k=y[E+1][D],K=y[E+1][D+1],ne=y[E][D+1];h.push(T,k,ne),h.push(k,K,ne),R+=6}f.addGroup(m,R,0),m+=R}function M(b){let I=_,R=new ue,L=new N,D=0,E=b===!0?e:t,T=b===!0?1:-1;for(let K=1;K<=r;K++)u.push(0,g*T,0),d.push(0,T,0),p.push(.5,.5),_++;let k=_;for(let K=0;K<=r;K++){let B=K/r*c+l,V=Math.cos(B),Z=Math.sin(B);L.x=E*Z,L.y=g*T,L.z=E*V,u.push(L.x,L.y,L.z),d.push(0,T,0),R.x=V*.5+.5,R.y=Z*.5*T+.5,p.push(R.x,R.y),_++}for(let K=0;K<r;K++){let ne=I+K,B=k+K;b===!0?h.push(B,B+1,ne):h.push(B+1,B,ne),D+=3}f.addGroup(m,D,b===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_c=class n extends Sn{constructor(e=1,t=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(0,e,t,s,r,o,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},au=class n extends pt{constructor(e=[],t=[],s=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:r};let o=[],a=[];l(r),f(s),h(),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(o.slice(),3)),this.setAttribute("uv",new rt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let M=new N,b=new N,I=new N;for(let R=0;R<t.length;R+=3)p(t[R+0],M),p(t[R+1],b),p(t[R+2],I),c(M,b,I,x)}function c(x,M,b,I){let R=I+1,L=[];for(let D=0;D<=R;D++){L[D]=[];let E=x.clone().lerp(b,D/R),T=M.clone().lerp(b,D/R),k=R-D;for(let K=0;K<=k;K++)K===0&&D===R?L[D][K]=E:L[D][K]=E.clone().lerp(T,K/k)}for(let D=0;D<R;D++)for(let E=0;E<2*(R-D)-1;E++){let T=Math.floor(E/2);E%2===0?(d(L[D][T+1]),d(L[D+1][T]),d(L[D][T])):(d(L[D][T+1]),d(L[D+1][T+1]),d(L[D+1][T]))}}function f(x){let M=new N;for(let b=0;b<o.length;b+=3)M.x=o[b+0],M.y=o[b+1],M.z=o[b+2],M.normalize().multiplyScalar(x),o[b+0]=M.x,o[b+1]=M.y,o[b+2]=M.z}function h(){let x=new N;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];let b=g(x)/2/Math.PI+.5,I=m(x)/Math.PI+.5;a.push(b,1-I)}_(),u()}function u(){for(let x=0;x<a.length;x+=6){let M=a[x+0],b=a[x+2],I=a[x+4],R=Math.max(M,b,I),L=Math.min(M,b,I);R>.9&&L<.1&&(M<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),I<.2&&(a[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function p(x,M){let b=x*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function _(){let x=new N,M=new N,b=new N,I=new N,R=new ue,L=new ue,D=new ue;for(let E=0,T=0;E<o.length;E+=9,T+=6){x.set(o[E+0],o[E+1],o[E+2]),M.set(o[E+3],o[E+4],o[E+5]),b.set(o[E+6],o[E+7],o[E+8]),R.set(a[T+0],a[T+1]),L.set(a[T+2],a[T+3]),D.set(a[T+4],a[T+5]),I.copy(x).add(M).add(b).divideScalar(3);let k=g(I);y(R,T+0,x,k),y(L,T+2,M,k),y(D,T+4,b,k)}}function y(x,M,b,I){I<0&&x.x===1&&(a[M]=x.x-1),b.x===0&&b.z===0&&(a[M]=I/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},kl=new N,Gl=new N,wf=new N,Vl=new $s,un=class extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),o=Math.cos(Zr*t),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,f=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let _=0;_<c;_+=3){a?(f[0]=a.getX(_),f[1]=a.getX(_+1),f[2]=a.getX(_+2)):(f[0]=_,f[1]=_+1,f[2]=_+2);let{a:y,b:g,c:m}=Vl;if(y.fromBufferAttribute(l,f[0]),g.fromBufferAttribute(l,f[1]),m.fromBufferAttribute(l,f[2]),Vl.getNormal(wf),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){let M=(x+1)%3,b=u[x],I=u[M],R=Vl[h[x]],L=Vl[h[M]],D=`${b}_${I}`,E=`${I}_${b}`;E in d&&d[E]?(wf.dot(d[E].normal)<=o&&(p.push(R.x,R.y,R.z),p.push(L.x,L.y,L.z)),d[E]=null):D in d||(d[D]={index0:f[x],index1:f[M],normal:wf.clone()})}}for(let _ in d)if(d[_]){let{index0:y,index1:g}=d[_];kl.fromBufferAttribute(l,y),Gl.fromBufferAttribute(l,g),p.push(kl.x,kl.y,kl.z),p.push(Gl.x,Gl.y,Gl.z)}this.setAttribute("position",new rt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ir=class n extends au{constructor(e=1,t=0){let s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Pi=class n extends pt{constructor(e=1,t=32,s=16,r=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:r,phiLength:o,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));let c=Math.min(a+l,Math.PI),f=0,h=[],u=new N,d=new N,p=[],_=[],y=[],g=[];for(let m=0;m<=s;m++){let x=[],M=m/s,b=0;m===0&&a===0?b=.5/t:m===s&&c===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){let R=I/t;u.x=-e*Math.cos(r+R*o)*Math.sin(a+M*l),u.y=e*Math.cos(a+M*l),u.z=e*Math.sin(r+R*o)*Math.sin(a+M*l),_.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(R+b,1-M),x.push(f++)}h.push(x)}for(let m=0;m<s;m++)for(let x=0;x<t;x++){let M=h[m][x+1],b=h[m][x],I=h[m+1][x],R=h[m+1][x+1];(m!==0||a>0)&&p.push(M,b,R),(m!==s-1||c<Math.PI)&&p.push(b,I,R)}this.setIndex(p),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Li=class n extends pt{constructor(e=1,t=.4,s=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:r,arc:o},s=Math.floor(s),r=Math.floor(r);let a=[],l=[],c=[],f=[],h=new N,u=new N,d=new N;for(let p=0;p<=s;p++)for(let _=0;_<=r;_++){let y=_/r*o,g=p/s*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(y),u.y=(e+t*Math.cos(g))*Math.sin(y),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),f.push(_/r),f.push(p/s)}for(let p=1;p<=s;p++)for(let _=1;_<=r;_++){let y=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,m=(r+1)*(p-1)+_,x=(r+1)*p+_;a.push(y,g,x),a.push(g,m,x)}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},yc=class n extends pt{constructor(e=new gc(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,s=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:s,radialSegments:r,closed:o};let a=e.computeFrenetFrames(t,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let l=new N,c=new N,f=new ue,h=new N,u=[],d=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(p,2));function y(){for(let M=0;M<t;M++)g(M);g(o===!1?t:0),x(),m()}function g(M){h=e.getPointAt(M/t,h);let b=a.normals[M],I=a.binormals[M];for(let R=0;R<=r;R++){let L=R/r*Math.PI*2,D=Math.sin(L),E=-Math.cos(L);c.x=E*b.x+D*I.x,c.y=E*b.y+D*I.y,c.z=E*b.z+D*I.z,c.normalize(),d.push(c.x,c.y,c.z),l.x=h.x+s*c.x,l.y=h.y+s*c.y,l.z=h.z+s*c.z,u.push(l.x,l.y,l.z)}}function m(){for(let M=1;M<=t;M++)for(let b=1;b<=r;b++){let I=(r+1)*(M-1)+(b-1),R=(r+1)*M+(b-1),L=(r+1)*M+b,D=(r+1)*(M-1)+b;_.push(I,R,D),_.push(R,L,D)}}function x(){for(let M=0;M<=t;M++)for(let b=0;b<=r;b++)f.x=M/t,f.y=b/r,p.push(f.x,f.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new fb[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},oo=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I0,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ti=class extends oo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Es=class{constructor(e,t,s,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(s),this.sampleValues=t,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,s=this._cachedIndex,r=t[s],o=t[s-1];n:{e:{let a;t:{i:if(!(e<r)){for(let l=s+2;;){if(r===void 0){if(e<o)break i;return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===l)break;if(o=r,r=t[++s],e<r)break e}a=t.length;break t}if(!(e>=o)){let l=t[1];e<l&&(s=2,o=l);for(let c=s-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===c)break;if(r=o,o=t[--s-1],e>=o)break e}a=s,s=0;break t}break n}for(;s<a;){let l=s+a>>>1;e<t[l]?a=l:s=l+1}if(r=t[s],o=t[s-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,o,r)}return this.interpolate_(s,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=e*r;for(let a=0;a!==r;++a)t[a]=s[o+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lu=class extends Es{constructor(e,t,s,r){super(e,t,s,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hm,endingEnd:hm}}intervalChanged_(e,t,s){let r=this.parameterPositions,o=e-2,a=e+1,l=r[o],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case fm:o=e,l=2*t-s;break;case um:o=r.length-2,l=t+r[o]-r[o+1];break;default:o=e,l=s}if(c===void 0)switch(this.getSettings_().endingEnd){case fm:a=e,c=2*s-t;break;case um:a=1,c=s+r[1]-r[0];break;default:a=e-1,c=t}let f=(s-t)*.5,h=this.valueSize;this._weightPrev=f/(t-l),this._weightNext=f/(c-s),this._offsetPrev=o*h,this._offsetNext=a*h}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,f=c-l,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(s-t)/(r-t),y=_*_,g=y*_,m=-d*g+2*d*y-d*_,x=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*_+1,M=(-1-p)*g+(1.5+p)*y+.5*_,b=p*g-p*y;for(let I=0;I!==l;++I)o[I]=m*a[h+I]+x*a[f+I]+M*a[c+I]+b*a[u+I];return o}},cu=class extends Es{constructor(e,t,s,r){super(e,t,s,r)}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,f=c-l,h=(s-t)/(r-t),u=1-h;for(let d=0;d!==l;++d)o[d]=a[f+d]*u+a[c+d]*h;return o}},hu=class extends Es{constructor(e,t,s,r){super(e,t,s,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ni=class{constructor(e,t,s,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wl(t,this.TimeBufferType),this.values=Wl(s,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,s;if(t.toJSON!==this.toJSON)s=t.toJSON(e);else{s={name:e.name,times:Wl(e.times,Array),values:Wl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(s.interpolation=r)}return s.type=e.ValueTypeName,s}InterpolantFactoryMethodDiscrete(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case er:t=this.InterpolantFactoryMethodLinear;break;case Jh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return console.warn("THREE.KeyframeTrack:",s),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return Jh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let s=0,r=t.length;s!==r;++s)t[s]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let s=0,r=t.length;s!==r;++s)t[s]*=e}return this}trim(e,t){let s=this.times,r=s.length,o=0,a=r-1;for(;o!==r&&s[o]<e;)++o;for(;a!==-1&&s[a]>t;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);let l=this.getValueSize();this.times=s.slice(o,a),this.values=this.values.slice(o*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let s=this.times,r=this.values,o=s.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==o;l++){let c=s[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(r!==void 0&&ub(r))for(let l=0,c=r.length;l!==c;++l){let f=r[l];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,f),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),s=this.getValueSize(),r=this.getInterpolation()===Jh,o=e.length-1,a=1;for(let l=1;l<o;++l){let c=!1,f=e[l],h=e[l+1];if(f!==h&&(l!==1||f!==e[0]))if(r)c=!0;else{let u=l*s,d=u-s,p=u+s;for(let _=0;_!==s;++_){let y=t[u+_];if(y!==t[d+_]||y!==t[p+_]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let u=l*s,d=a*s;for(let p=0;p!==s;++p)t[d+p]=t[u+p]}++a}}if(o>0){e[a]=e[o];for(let l=o*s,c=a*s,f=0;f!==s;++f)t[c+f]=t[l+f];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*s)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),s=this.constructor,r=new s(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=er;bs=class extends ni{};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=to;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;Mc=class extends ni{};Mc.prototype.ValueTypeName="color";ts=class extends ni{};ts.prototype.ValueTypeName="number";fu=class extends Es{constructor(e,t,s,r){super(e,t,s,r)}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(s-t)/(r-t),f=e*l;for(let h=f+l;f!==h;f+=4)Wn.slerpFlat(o,0,a,f-l,a,f,c);return o}},Ii=class extends ni{InterpolantFactoryMethodLinear(e){return new fu(this.times,this.values,this.getValueSize(),e)}};Ii.prototype.ValueTypeName="quaternion";Ii.prototype.DefaultInterpolation=er;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;Ss=class extends ni{};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=to;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;ns=class extends ni{};ns.prototype.ValueTypeName="vector";xc=class{constructor(e,t=-1,s,r=Hy){this.name=e,this.tracks=s,this.duration=t,this.blendMode=r,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],s=e.tracks,r=1/(e.fps||1);for(let a=0,l=s.length;a!==l;++a)t.push(mb(s[a]).scale(r));let o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){let t=[],s=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=s.length;o!==a;++o)t.push(ni.toJSON(s[o]));return r}static CreateFromMorphTargetSequence(e,t,s,r){let o=t.length,a=[];for(let l=0;l<o;l++){let c=[],f=[];c.push((l+o-1)%o,l,(l+1)%o),f.push(0,1,0);let h=db(c);c=m0(c,1,h),f=m0(f,1,h),!r&&c[0]===0&&(c.push(o),f.push(f[0])),a.push(new ts(".morphTargetInfluences["+t[l].name+"]",c,f).scale(1/s))}return new this(e,-1,a)}static findByName(e,t){let s=e;if(!Array.isArray(e)){let r=e;s=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<s.length;r++)if(s[r].name===t)return s[r];return null}static CreateClipsFromMorphTargetSequences(e,t,s){let r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){let f=e[l],h=f.name.match(o);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(f)}}let a=[];for(let l in r)a.push(this.CreateFromMorphTargetSequence(l,r[l],t,s));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let s=function(u,d,p,_,y){if(p.length!==0){let g=[],m=[];W0(p,g,m,_),g.length!==0&&y.push(new u(d,g,m))}},r=[],o=e.name||"default",a=e.fps||30,l=e.blendMode,c=e.length||-1,f=e.hierarchy||[];for(let u=0;u<f.length;u++){let d=f[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let y=0;y<d[_].morphTargets.length;y++)p[d[_].morphTargets[y]]=-1;for(let y in p){let g=[],m=[];for(let x=0;x!==d[_].morphTargets.length;++x){let M=d[_];g.push(M.time),m.push(M.morphTarget===y?1:0)}r.push(new ts(".morphTargetInfluence["+y+"]",g,m))}c=p.length*a}else{let p=".bones["+t[u].name+"]";s(ns,p+".position",d,"pos",r),s(Ii,p+".quaternion",d,"rot",r),s(ns,p+".scale",d,"scl",r)}}return r.length===0?null:new this(o,c,r,l)}resetDuration(){let e=this.tracks,t=0;for(let s=0,r=e.length;s!==r;++s){let o=this.tracks[s];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};_s={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},uu=class{constructor(e,t,s){let r=this,o=!1,a=0,l=0,c,f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(h){l++,o===!1&&r.onStart!==void 0&&r.onStart(h,a,l),o=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,l),a===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return f.push(h,u),this},this.removeHandler=function(h){let u=f.indexOf(h);return u!==-1&&f.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=f.length;u<d;u+=2){let p=f[u],_=f[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},gb=new uu,is=class{constructor(e){this.manager=e!==void 0?e:gb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let s=this;return new Promise(function(r,o){s.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};is.DEFAULT_MATERIAL_NAME="__DEFAULT";Ki={},du=class extends Error{constructor(e,t){super(e),this.response=t}},ga=class extends is{constructor(e){super(e)}load(e,t,s,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=_s.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:s,onError:r});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:s,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;let h=Ki[e],u=f.body.getReader(),d=f.headers.get("Content-Length")||f.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0,y=0,g=new ReadableStream({start(m){x();function x(){u.read().then(({done:M,value:b})=>{if(M)m.close();else{y+=b.byteLength;let I=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let R=0,L=h.length;R<L;R++){let D=h[R];D.onProgress&&D.onProgress(I)}m.enqueue(b),x()}})}}});return new Response(g)}else throw new du(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(c){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return f.json();default:if(l===void 0)return f.text();{let u=/charset="?([^;"\s]*)"?/i.exec(l),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return f.arrayBuffer().then(_=>p.decode(_))}}}).then(f=>{_s.add(e,f);let h=Ki[e];delete Ki[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(f)}}).catch(f=>{let h=Ki[e];if(h===void 0)throw this.manager.itemError(e),f;delete Ki[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},pu=class extends is{constructor(e){super(e)}load(e,t,s,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,a=_s.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;let l=ca("img");function c(){h(),_s.add(e,this),t&&t(this),o.manager.itemEnd(e)}function f(u){h(),r&&r(u),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}},ao=class extends is{constructor(e){super(e)}load(e,t,s,r){let o=new hn,a=new pu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},s,r),o}},_a=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Rf=new Be,g0=new N,_0=new N,ya=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ha,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,s=this.matrix;g0.setFromMatrixPosition(e.matrixWorld),t.position.copy(g0),_0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_0),t.updateMatrixWorld(),Rf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Rf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mu=class extends ya{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,s=no*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(s!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=s,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},vc=class extends _a{constructor(e,t,s=0,r=Math.PI/3,o=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=s,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new mu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},y0=new Be,na=new N,Cf=new N,gu=class extends ya{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let s=this.camera,r=this.matrix,o=e.distance||s.far;o!==s.far&&(s.far=o,s.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),s.position.copy(na),Cf.copy(s.position),Cf.add(this._cubeDirections[t]),s.up.copy(this._cubeUps[t]),s.lookAt(Cf),s.updateMatrixWorld(),r.makeTranslation(-na.x,-na.y,-na.z),y0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(y0)}},Ec=class extends _a{constructor(e,t,s=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=r,this.shadow=new gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_u=class extends ya{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bc=class extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new _u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ts=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let s=0,r=e.length;s<r;s++)t+=String.fromCharCode(e[s]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Sc=class extends is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,s,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,a=_s.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(f=>{t&&t(f),o.manager.itemEnd(e)}).catch(f=>{r&&r(f)});return}return setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;let c=fetch(e,l).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(f){return _s.add(e,f),t&&t(f),o.manager.itemEnd(e),f}).catch(function(f){r&&r(f),_s.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});_s.add(e,c),o.manager.itemStart(e)}},Tc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=M0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=M0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Tu="\\[\\]\\.:\\/",_b=new RegExp("["+Tu+"]","g"),Au="[^"+Tu+"]",yb="[^"+Tu.replace("\\.","")+"]",Mb=/((?:WC+[\/:])*)/.source.replace("WC",Au),xb=/(WCOD+)?/.source.replace("WCOD",yb),vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Au),Eb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Au),bb=new RegExp("^"+Mb+xb+vb+Eb+"$"),Sb=["material","materials","bones","map"],yu=class{constructor(e,t,s){let r=s||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let s=this._targetGroup.nCachedObjects_,r=this._bindings[s];r!==void 0&&r.getValue(e,t)}setValue(e,t){let s=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=s.length;r!==o;++r)s[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].unbind()}},Et=class n{constructor(e,t,s){this.path=t,this.parsedPath=s||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,s){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,s):new n(e,t,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_b,"")}static parseTrackName(e){let t=bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=s.nodeName.substring(r+1);Sb.indexOf(o)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=o)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(t);if(s!==void 0)return s}if(e.children){let s=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===t||l.uuid===t)return l;let c=s(l.children);if(c)return c}return null},r=s(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)e[t++]=s[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,s=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let f=t.objectIndex;switch(s){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===f){f=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}let a=e[r];if(a===void 0){let f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=yu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];AT=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var Pc,wu=li(()=>{Pc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var _i,Ab,Ru,wb,ho,xa=li(()=>{Ni();_i=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ab=new vs(-1,1,1,-1,0,1),Ru=class extends pt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},wb=new Ru,ho=class{constructor(e){this._mesh=new j(wb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ab)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Lc,X0=li(()=>{Ni();xa();Lc=class extends _i{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=lo.clone(e.uniforms),this.material=new fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ho(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var va,Ic,Cu=li(()=>{xa();va=class extends _i{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){let r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}},Ic=class extends _i{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Nc,q0=li(()=>{Ni();wu();X0();Cu();Cu();Nc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let s=e.getSize(new ue);this._width=s.width,this._height=s.height,t=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lc(Pc),this.copyPass.material.blending=Ri,this.clock=new Tc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),s=!1;for(let r=0,o=this.passes.length;r<o;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),a.needsSwap){if(s){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}va!==void 0&&(a instanceof va?s=!0:a instanceof Ic&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let s=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(s,r),this.renderTarget2.setSize(s,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(s,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Dc,Y0=li(()=>{Ni();xa();Dc=class extends _i{constructor(e,t,s=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,s){let r=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}});var K0,Z0=li(()=>{Ni();K0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var fo,$0=li(()=>{Ni();xa();wu();Z0();fo=class n extends _i{constructor(e,t,s,r){super(),this.strength=t!==void 0?t:1,this.radius=s,this.threshold=r,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(o,a,{type:mi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new bn(o,a,{type:mi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new bn(o,a,{type:mi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),a=Math.round(a/2)}let l=K0;this.highPassUniforms=lo.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ue(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Pc;this.copyUniforms=lo.clone(h.uniforms),this.blendMaterial=new fn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ut,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new oe,this.fsQuad=new ho(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(s,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(s,r),this.renderTargetsVertical[o].setSize(s,r),this.separableBlurMaterials[o].uniforms.invSize.value=new ue(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2)}render(e,t,s,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=s.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new fn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new fn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};fo.BlurDirectionX=new ue(1,0);fo.BlurDirectionY=new ue(0,1)});function Tn(n,e=!1){let t=n[0].index!==null,s=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),o={},a={},l=n[0].morphTargetsRelative,c=new pt,f=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.attributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(f,p,h),f+=p}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let _=0;_<p.count;++_)u.push(p.getX(_)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in o){let u=J0(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let _=J0(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}return c}function J0(n){let e,t,s,r=-1,o=0;for(let f=0;f<n.length;++f){let h=n[f];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=h.normalized),s!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.array.length}let a=new e(o),l=0;for(let f=0;f<n.length;++f)a.set(n[f].array,l),l+=n[f].array.length;let c=new ht(a,t,s);return r!==void 0&&(c.gpuType=r),c}function Pu(n,e){if(e===P0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ma||e===wc){let t=n.getIndex();if(t===null){let a=[],l=n.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let s=t.count-2,r=[];if(e===Ma)for(let a=1;a<=s;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<s;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let o=n.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Lu=li(()=>{Ni()});function Rb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Lb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new oo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),n.DefaultMaterial}function sr(n,e,t){for(let s in t.extensions)n[s]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[s]=t.extensions[s])}function ws(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ib(n,e,t){let s=!1,r=!1,o=!1;for(let f=0,h=e.length;f<h;f++){let u=e[f];if(u.POSITION!==void 0&&(s=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(o=!0),s&&r&&o)break}if(!s&&!r&&!o)return Promise.resolve(n);let a=[],l=[],c=[];for(let f=0,h=e.length;f<h;f++){let u=e[f];if(s){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(d)}if(r){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;l.push(d)}if(o){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(f){let h=f[0],u=f[1],d=f[2];return s&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=u),o&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function Nb(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,s=e.weights.length;t<s;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let s=0,r=t.length;s<r;s++)n.morphTargetDictionary[t[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Db(n){let e,t=n.extensions&&n.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Du(t.attributes):e=n.indices+":"+Du(n.attributes)+":"+n.mode,n.targets!==void 0)for(let s=0,r=n.targets.length;s<r;s++)e+=":"+Du(n.targets[s]);return e}function Du(n){let e="",t=Object.keys(n).sort();for(let s=0,r=t.length;s<r;s++)e+=t[s]+":"+n[t[s]]+";";return e}function sd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ub(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function Ob(n,e,t){let s=e.attributes,r=new wt;if(s.POSITION!==void 0){let l=t.json.accessors[s.POSITION],c=l.min,f=l.max;if(c!==void 0&&f!==void 0){if(r.set(new N(c[0],c[1],c[2]),new N(f[0],f[1],f[2])),l.normalized){let h=sd(uo[l.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let o=e.targets;if(o!==void 0){let l=new N,c=new N;for(let f=0,h=o.length;f<h;f++){let u=o[f];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){let y=sd(uo[d.componentType]);c.multiplyScalar(y)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(l)}n.boundingBox=r;let a=new Xn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function tg(n,e,t){let s=e.attributes,r=[];function o(a,l){return t.getDependency("accessor",a).then(function(c){n.setAttribute(l,c)})}for(let a in s){let l=id[a]||a.toLowerCase();l in n.attributes||r.push(o(s[a],l))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(l){n.setIndex(l)});r.push(a)}return lt.workingColorSpace!==Wt&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),ws(n,e),Ob(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Ib(n,e.targets,t):n})}var Uc,st,Uu,Bu,Ou,Fu,Hu,zu,ku,Gu,Vu,Wu,Xu,qu,Yu,Ku,Zu,$u,Ju,ng,Ea,j0,ju,Qu,ed,td,Bc,Cb,nd,ii,uo,Q0,eg,Iu,id,As,Pb,Nu,Bb,rd,ig=li(()=>{Ni();Lu();Uc=class extends is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Ju(t)})}load(e,t,s,r){let o=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let f=Ts.extractUrlBase(e);a=Ts.resolveURL(f,this.path)}else a=Ts.extractUrlBase(e);this.manager.itemStart(e);let l=function(f){r?r(f):console.error(f),o.manager.itemError(e),o.manager.itemEnd(e)},c=new ga(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{o.parse(f,a,function(h){t(h),o.manager.itemEnd(e)},l)}catch(h){l(h)}},s,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,r){let o,a={},l={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ng){try{a[st.KHR_BINARY_GLTF]=new ju(e)}catch(u){r&&r(u);return}o=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let f=new rd(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](f);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[u.name]=u,a[u.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){let u=o.extensionsUsed[h],d=o.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:a[u]=new Bu;break;case st.KHR_DRACO_MESH_COMPRESSION:a[u]=new Qu(o,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[u]=new ed;break;case st.KHR_MESH_QUANTIZATION:a[u]=new td;break;default:d.indexOf(u)>=0&&l[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}f.setExtensions(a),f.setPlugins(l),f.parse(s,r)}parseAsync(e,t){let s=this;return new Promise(function(r,o){s.parse(e,t,r,o)})}};st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uu=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){let t=this.parser,s="light:"+e,r=t.cache.get(s);if(r)return r;let o=t.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e],f,h=new Me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Wt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":f=new bc(h),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new Ec(h),f.distance=u;break;case"spot":f=new vc(h),f.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,f.angle=c.spot.outerConeAngle,f.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return f.position.set(0,0,0),f.decay=2,ws(f,c),c.intensity!==void 0&&(f.intensity=c.intensity),f.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(f),t.cache.add(s,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,s=this.parser,o=s.json.nodes[e],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return s._getNodeRef(t.cache,l,c)})}},Bu=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return oe}extendParams(e,t,s){let r=[];e.color=new Me(1,1,1),e.opacity=1;let o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){let a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Wt),e.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(s.assignTexture(e,"map",o.baseColorTexture,ct))}return Promise.all(r)}},Ou=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}},Fu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(s.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(s.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(s.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(l,l)}return Promise.all(o)}},Hu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(s.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(s.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}},zu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],Wt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(s.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ct)),a.sheenRoughnessTexture!==void 0&&o.push(s.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}},ku=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(s.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(o)}},Gu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(s.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let l=a.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(l[0],l[1],l[2],Wt),Promise.all(o)}},Vu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:ti}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=r.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}},Wu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(s.assignTexture(t,"specularIntensityMap",a.specularTexture));let l=a.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(l[0],l[1],l[2],Wt),a.specularColorTexture!==void 0&&o.push(s.assignTexture(t,"specularColorMap",a.specularColorTexture,ct)),Promise.all(o)}},Xu=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(s.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(o)}},qu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(s.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}},Yu=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,s=t.json,r=s.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let o=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,a)}},Ku=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,s=this.parser,r=s.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;let a=o.extensions[t],l=r.images[a.source],c=s.textureLoader;if(l.uri){let f=s.options.manager.getHandler(l.uri);f!==null&&(c=f)}return this.detectSupport().then(function(f){if(f)return s.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zu=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,s=this.parser,r=s.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;let a=o.extensions[t],l=r.images[a.source],c=s.textureLoader;if(l.uri){let f=s.options.manager.getHandler(l.uri);f!==null&&(c=f)}return this.detectSupport().then(function(f){if(f)return s.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$u=class{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,s=t.bufferViews[e];if(s.extensions&&s.extensions[this.name]){let r=s.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){let c=r.byteOffset||0,f=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(l,c,f);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,r.mode,r.filter),p})})}else return null}},Ju=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,s=t.nodes[e];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;let r=t.meshes[s.mesh];for(let f of r.primitives)if(f.mode!==ii.TRIANGLES&&f.mode!==ii.TRIANGLE_STRIP&&f.mode!==ii.TRIANGLE_FAN&&f.mode!==void 0)return null;let a=s.extensions[this.name].attributes,l=[],c={};for(let f in a)l.push(this.parser.getDependency("accessor",a[f]).then(h=>(c[f]=h,c[f])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(f=>{let h=f.pop(),u=h.isGroup?h.children:[h],d=f[0].count,p=[];for(let _ of u){let y=new Be,g=new N,m=new Wn,x=new N(1,1,1),M=new dc(_.geometry,_.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,b),c.SCALE&&x.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,y.compose(g,m,x));for(let b in c)if(b==="_COLOR_0"){let I=c[b];M.instanceColor=new tr(I.array,I.itemSize,I.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&_.geometry.setAttribute(b,c[b]);Nt.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},ng="glTF",Ea=12,j0={JSON:1313821514,BIN:5130562},ju=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ea),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ng)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ea,o=new DataView(e,Ea),a=0;for(;a<r;){let l=o.getUint32(a,!0);a+=4;let c=o.getUint32(a,!0);if(a+=4,c===j0.JSON){let f=new Uint8Array(e,Ea+a,l);this.content=s.decode(f)}else if(c===j0.BIN){let f=Ea+a;this.body=e.slice(f,f+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let s=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},f={};for(let h in a){let u=id[h]||h.toLowerCase();l[u]=a[h]}for(let h in e.attributes){let u=id[h]||h.toLowerCase();if(a[h]!==void 0){let d=s.accessors[e.attributes[h]],p=uo[d.componentType];f[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",o).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(p){for(let _ in p.attributes){let y=p.attributes[_],g=c[_];g!==void 0&&(y.normalized=g)}u(p)},l,f,Wt,d)})})}},ed=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},td=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},Bc=class extends Es{constructor(e,t,s,r){super(e,t,s,r)}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let a=0;a!==r;a++)t[a]=s[o+a];return t}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,f=l*3,h=r-t,u=(s-t)/h,d=u*u,p=d*u,_=e*f,y=_-f,g=-2*p+3*d,m=p-d,x=1-g,M=m-d+u;for(let b=0;b!==l;b++){let I=a[y+b+l],R=a[y+b+c]*h,L=a[_+b+l],D=a[_+b]*h;o[b]=x*I+M*R+g*L+m*D}return o}},Cb=new Wn,nd=class extends Bc{interpolate_(e,t,s,r){let o=super.interpolate_(e,t,s,r);return Cb.fromArray(o).normalize().toArray(o),o}},ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Q0={9728:At,9729:ln,9984:ql,9985:Mu,9986:Qi,9987:pi},eg={33071:cn,33648:la,10497:di},Iu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},As={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Pb={CUBICSPLINE:void 0,LINEAR:er,STEP:to},Nu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};Bb=new Be,rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,r=!1,o=-1;typeof navigator<"u"&&(s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,o=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||s||r&&o<98?this.textureLoader=new ao(this.options.manager):this.textureLoader=new Sc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ga(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let s=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(a){let l={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:s,userData:{}};return sr(o,l,r),ws(l,r),Promise.all(s._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){let a=t[r].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let r=0,o=e.length;r<o;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(s[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,s){if(e.refs[t]<=1)return s;let r=s.clone(),o=(a,l)=>{let c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(let[f,h]of a.children.entries())o(h,l.children[f])};return o(s,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let s=0;s<t.length;s++){let r=e(t[s]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let s=[];for(let r=0;r<t.length;r++){let o=e(t[r]);o&&s.push(o)}return s}getDependency(e,t){let s=e+":"+t,r=this.cache.get(s);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(s,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let s=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,a){return s.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],s=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(o,a){s.load(Ts.resolveURL(t.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(s){let r=t.byteLength||0,o=t.byteOffset||0;return s.slice(o,o+r)})}loadAccessor(e){let t=this,s=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=Iu[r.type],l=uo[r.componentType],c=r.normalized===!0,f=new l(r.count*a);return Promise.resolve(new ht(f,a,c))}let o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){let l=a[0],c=Iu[r.type],f=uo[r.componentType],h=f.BYTES_PER_ELEMENT,u=h*c,d=r.byteOffset||0,p=r.bufferView!==void 0?s.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0,y,g;if(p&&p!==u){let m=Math.floor(d/p),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,M=t.cache.get(x);M||(y=new f(l,m*p,r.count*p/h),M=new ua(y,p/h),t.cache.add(x,M)),g=new da(M,c,d%p/h,_)}else l===null?y=new f(r.count*c):y=new f(l,d,r.count*c),g=new ht(y,c,_);if(r.sparse!==void 0){let m=Iu.SCALAR,x=uo[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,I=new x(a[1],M,r.sparse.count*m),R=new f(a[2],b,r.sparse.count*c);l!==null&&(g=new ht(g.array.slice(),g.itemSize,g.normalized));for(let L=0,D=I.length;L<D;L++){let E=I[L];if(g.setX(E,R[L*c]),c>=2&&g.setY(E,R[L*c+1]),c>=3&&g.setZ(E,R[L*c+2]),c>=4&&g.setW(E,R[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,s=this.options,o=t.textures[e].source,a=t.images[o],l=this.textureLoader;if(a.uri){let c=s.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,o,l)}loadTextureImage(e,t,s){let r=this,o=this.json,a=o.textures[e],l=o.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let f=this.loadImageSource(t,s).then(function(h){h.flipY=!1,h.name=a.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);let d=(o.samplers||{})[a.sampler]||{};return h.magFilter=Q0[d.magFilter]||ln,h.minFilter=Q0[d.minFilter]||pi,h.wrapS=eg[d.wrapS]||di,h.wrapT=eg[d.wrapT]||di,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=f,f}loadImageSource(e,t){let s=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=r.images[e],l=self.URL||self.webkitURL,c=a.uri||"",f=!1;if(a.bufferView!==void 0)c=s.getDependency("bufferView",a.bufferView).then(function(u){f=!0;let d=new Blob([u],{type:a.mimeType});return c=l.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(y){let g=new hn(y);g.needsUpdate=!0,d(g)}),t.load(Ts.resolveURL(u,o.path),_,void 0,p)})}).then(function(u){return f===!0&&l.revokeObjectURL(c),u.userData.mimeType=a.mimeType||Ub(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,s,r){let o=this;return this.getDependency("texture",s.index).then(function(a){if(!a)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(a=a.clone(),a.channel=s.texCoord),o.extensions[st.KHR_TEXTURE_TRANSFORM]){let l=s.extensions!==void 0?s.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let c=o.associations.get(a);a=o.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),o.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,s=e.material,r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+s.uuid,c=this.cache.get(l);c||(c=new nr,qn.prototype.copy.call(c,s),c.color.copy(s.color),c.map=s.map,c.sizeAttenuation=!1,this.cache.add(l,c)),s=c}else if(e.isLine){let l="LineBasicMaterial:"+s.uuid,c=this.cache.get(l);c||(c=new Dn,qn.prototype.copy.call(c,s),c.color.copy(s.color),c.map=s.map,this.cache.add(l,c)),s=c}if(r||o||a){let l="ClonedMaterial:"+s.uuid+":";r&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=s.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(s))),s=c}e.material=s}getMaterialType(){return oo}loadMaterial(e){let t=this,s=this.json,r=this.extensions,o=s.materials[e],a,l={},c=o.extensions||{},f=[];if(c[st.KHR_MATERIALS_UNLIT]){let u=r[st.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),f.push(u.extendParams(l,o,t))}else{let u=o.pbrMetallicRoughness||{};if(l.color=new Me(1,1,1),l.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],Wt),l.opacity=d[3]}u.baseColorTexture!==void 0&&f.push(t.assignTexture(l,"map",u.baseColorTexture,ct)),l.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,l.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(l,"metalnessMap",u.metallicRoughnessTexture)),f.push(t.assignTexture(l,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}o.doubleSided===!0&&(l.side=yt);let h=o.alphaMode||Nu.OPAQUE;if(h===Nu.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===Nu.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==oe&&(f.push(t.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new ue(1,1),o.normalTexture.scale!==void 0)){let u=o.normalTexture.scale;l.normalScale.set(u,u)}if(o.occlusionTexture!==void 0&&a!==oe&&(f.push(t.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==oe){let u=o.emissiveFactor;l.emissive=new Me().setRGB(u[0],u[1],u[2],Wt)}return o.emissiveTexture!==void 0&&a!==oe&&f.push(t.assignTexture(l,"emissiveMap",o.emissiveTexture,ct)),Promise.all(f).then(function(){let u=new a(l);return o.name&&(u.name=o.name),ws(u,o),t.associations.set(u,{materials:e}),o.extensions&&sr(r,u,o),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,s=this.extensions,r=this.primitiveCache;function o(l){return s[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return tg(c,l,t)})}let a=[];for(let l=0,c=e.length;l<c;l++){let f=e[l],h=Db(f),u=r[h];if(u)a.push(u.promise);else{let d;f.extensions&&f.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=o(f):d=tg(new pt,f,t),r[h]={primitive:f,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,s=this.json,r=this.extensions,o=s.meshes[e],a=o.primitives,l=[];for(let c=0,f=a.length;c<f;c++){let h=a[c].material===void 0?Lb(this.cache):this.getDependency("material",a[c].material);l.push(h)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){let f=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,_=h.length;p<_;p++){let y=h[p],g=a[p],m,x=f[p];if(g.mode===ii.TRIANGLES||g.mode===ii.TRIANGLE_STRIP||g.mode===ii.TRIANGLE_FAN||g.mode===void 0)m=o.isSkinnedMesh===!0?new fc(y,x):new j(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===ii.TRIANGLE_STRIP?m.geometry=Pu(m.geometry,wc):g.mode===ii.TRIANGLE_FAN&&(m.geometry=Pu(m.geometry,Ma));else if(g.mode===ii.LINES)m=new kt(y,x);else if(g.mode===ii.LINE_STRIP)m=new es(y,x);else if(g.mode===ii.LINE_LOOP)m=new pc(y,x);else if(g.mode===ii.POINTS)m=new ro(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Nb(m,o),m.name=t.createUniqueName(o.name||"mesh_"+e),ws(m,o),g.extensions&&sr(r,m,g),t.assignFinalMaterial(m),u.push(m)}for(let p=0,_=u.length;p<_;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return o.extensions&&sr(r,u[0],o),u[0];let d=new ot;o.extensions&&sr(r,d,o),t.associations.set(d,{meshes:e});for(let p=0,_=u.length;p<_;p++)d.add(u[p]);return d})}loadCamera(e){let t,s=this.json.cameras[e],r=s[s.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?t=new Vt(D0.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):s.type==="orthographic"&&(t=new vs(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),s.name&&(t.name=this.createUniqueName(s.name)),ws(t,s),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],s=[];for(let r=0,o=t.joints.length;r<o;r++)s.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",t.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(r){let o=r.pop(),a=r,l=[],c=[];for(let f=0,h=a.length;f<h;f++){let u=a[f];if(u){l.push(u);let d=new Be;o!==null&&d.fromArray(o.array,f*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new uc(l,c)})}loadAnimation(e){let t=this.json,s=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,a=[],l=[],c=[],f=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){let p=r.channels[u],_=r.samplers[p.sampler],y=p.target,g=y.node,m=r.parameters!==void 0?r.parameters[_.input]:_.input,x=r.parameters!==void 0?r.parameters[_.output]:_.output;y.node!==void 0&&(a.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),f.push(_),h.push(y))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(f),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],_=u[2],y=u[3],g=u[4],m=[];for(let x=0,M=d.length;x<M;x++){let b=d[x],I=p[x],R=_[x],L=y[x],D=g[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let E=s._createAnimationTracks(b,I,R,L,D);if(E)for(let T=0;T<E.length;T++)m.push(E[T])}return new xc(o,void 0,m)})}createNodeMesh(e){let t=this.json,s=this,r=t.nodes[e];return r.mesh===void 0?null:s.getDependency("mesh",r.mesh).then(function(o){let a=s._getNodeRef(s.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,f=r.weights.length;c<f;c++)l.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,s=this,r=t.nodes[e],o=s._loadNodeShallow(e),a=[],l=r.children||[];for(let f=0,h=l.length;f<h;f++)a.push(s.getDependency("node",l[f]));let c=r.skin===void 0?Promise.resolve(null):s.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),c]).then(function(f){let h=f[0],u=f[1],d=f[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Bb)});for(let p=0,_=u.length;p<_;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,s=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let o=t.nodes[e],a=o.name?r.createUniqueName(o.name):"",l=[],c=r._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return c&&l.push(c),o.camera!==void 0&&l.push(r.getDependency("camera",o.camera).then(function(f){return r._getNodeRef(r.cameraCache,o.camera,f)})),r._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){l.push(f)}),this.nodeCache[e]=Promise.all(l).then(function(f){let h;if(o.isBone===!0?h=new pa:f.length>1?h=new ot:f.length===1?h=f[0]:h=new Nt,h!==f[0])for(let u=0,d=f.length;u<d;u++)h.add(f[u]);if(o.name&&(h.userData.name=o.name,h.name=a),ws(h,o),o.extensions&&sr(s,h,o),o.matrix!==void 0){let u=new Be;u.fromArray(o.matrix),h.applyMatrix4(u)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,s=this.json.scenes[e],r=this,o=new ot;s.name&&(o.name=r.createUniqueName(s.name)),ws(o,s),s.extensions&&sr(t,o,s);let a=s.nodes||[],l=[];for(let c=0,f=a.length;c<f;c++)l.push(r.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let h=0,u=c.length;h<u;h++)o.add(c[h]);let f=h=>{let u=new Map;for(let[d,p]of r.associations)(d instanceof qn||d instanceof hn)&&u.set(d,p);return h.traverse(d=>{let p=r.associations.get(d);p!=null&&u.set(d,p)}),u};return r.associations=f(o),o})}_createAnimationTracks(e,t,s,r,o){let a=[],l=e.name?e.name:e.uuid,c=[];As[o.path]===As.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(l);let f;switch(As[o.path]){case As.weights:f=ts;break;case As.rotation:f=Ii;break;case As.position:case As.scale:f=ns;break;default:s.itemSize===1?f=ts:f=ns;break}let h=r.interpolation!==void 0?Pb[r.interpolation]:er,u=this._getArrayFromAccessor(s);for(let d=0,p=c.length;d<p;d++){let _=new f(c[d]+"."+As[o.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let s=sd(t.constructor),r=new Float32Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=t[o]*s;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(s){let r=this instanceof Ii?nd:Bc;return new r(this.times,this.values,this.getValueSize()/3,s)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var ST=Z_(()=>{Ni();q0();Y0();$0();ig();Lu();var po=Math.PI/180,Fb=656928,Pt=2814207,Ht=16722902,Hb=16769162;function Ng(n){return{r:n>>16&255,g:n>>8&255,b:n&255}}var bi=[{name:"VICE RUNWAY",music:"vice-runway.mp3",sun:{halo:["rgba(255,178,96,0.34)","rgba(255,96,112,0.13)","rgba(255,60,150,0)"],disc:["#ffcf72","#ff9a3e","#ff5a5f","#ff2f8e","#d81ea0"]},fog:7218768,glow:16731558,haze:16747158,skyA:[[24,12,48],[50,22,70],[92,34,86],[130,52,82],[156,82,66],[74,36,56],[24,13,36]],skyB:[[46,23,86],[90,40,112],[160,58,126],[206,90,112],[222,136,94],[118,58,86],[38,21,58]]},{name:"TURBO KASKADE",music:"turbo-kaskade.mp3",sun:{halo:["rgba(170,195,255,0.30)","rgba(90,130,220,0.12)","rgba(60,90,180,0)"],disc:["#eef4ff","#cdd9f2","#a6bce6","#8098d0","#5f78ba"]},fog:1450058,glow:4881151,haze:6982352,skyA:[[8,12,36],[16,24,60],[28,42,88],[44,64,116],[70,98,150],[40,54,96],[12,16,40]],skyB:[[20,28,68],[34,50,100],[52,78,136],[80,112,168],[116,154,198],[66,90,142],[20,26,62]]},{name:"POISON HEARTBEAT",music:"poison-heartbeat.mp3",sun:{halo:["rgba(150,255,120,0.32)","rgba(60,200,90,0.13)","rgba(30,150,80,0)"],disc:["#eaffb0","#a8ff5e","#4ef05a","#1fc96a","#0d8a5a"]},fog:1456159,glow:5504874,haze:8048746,skyA:[[6,16,20],[10,30,32],[16,48,40],[26,70,48],[44,100,56],[22,52,40],[8,18,18]],skyB:[[14,36,34],[24,62,52],[40,96,64],[64,132,72],[108,176,84],[52,102,64],[16,34,30]]}],Si=new hc;Si.fog=new cc(7218768,6e-5);var Fe=new ot;Fe.visible=!1;Si.add(Fe);var Rt=new Vt(66,innerWidth/innerHeight,2.5,3e4),vi=new fa({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:location.search.includes("shotbuf")}),ko=Math.min(16,vi.capabilities.getMaxAnisotropy());vi.info.autoReset=!1;var Md=0;document.body.appendChild(vi.domElement);var Bi=1.85,od=3,Ka=new Nc(vi);Ka.addPass(new Dc(Si,Rt));var Io=new fo(new ue(1,1),.9,.55,.18);Ka.addPass(Io);function Za(){Rt.aspect=innerWidth/innerHeight,Rt.updateProjectionMatrix();let n=Math.ceil(innerWidth/Bi),e=Math.ceil(innerHeight/Bi);vi.setSize(n,e,!1),Ka.setSize(n,e),Io.setSize(Math.ceil(n/3),Math.ceil(e/3));let t=vi.domElement;t.style.width=innerWidth+"px",t.style.height=innerHeight+"px",t.style.imageRendering="pixelated"}Za();addEventListener("resize",Za);var sg={},cs=n=>sg[n]||(sg[n]=new Dn({color:n})),zb=new oe({color:Fb,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2});function Dg(){return zb}function Ah(n,e){let t=n.clone(!0);return t.traverse(s=>{s.isMesh&&(s.material=Dg(),s.add(new kt(new un(s.geometry,25),cs(e))))}),t}function kb(n,e,t){n.updateMatrixWorld(!0);let s=new wt().setFromObject(n),r=new N;s.getSize(r),r.y>.001&&n.scale.setScalar(e/r.y),n.updateMatrixWorld(!0);let o=new wt().setFromObject(n);n.position.y=t-o.min.y}var xd=new We(1.9,1.3),wh=16765514;function Gb(n,e,t,s,r,o,a,l,c,f,h){let d=f||10,p=h||4,_=[],y=[{rot:0,o:o+.95,a:[n+3,s-3]},{rot:Math.PI,o:t-.95,a:[n+3,s-3]},{rot:Math.PI/2,o:s+.95,a:[t+3,o-3]},{rot:-Math.PI/2,o:n-.95,a:[t+3,o-3]}],g=typeof l=="number"&&l<=1?l:.5;for(let x of y)for(let M=e+d+5;M<r-4;M+=d){let b=Math.min(1,g*(.35+Math.random()*1.5));for(let I=x.a[0]+p*.5;I<x.a[1];I+=p){if(Math.random()>b)continue;let R=xd.clone(),L=new Be;x.rot===0?L.makeTranslation(I,M,x.o):(L.makeRotationY(x.rot),L.setPosition(x.rot===Math.PI?I:x.o,M,x.rot===Math.PI?x.o:I)),R.applyMatrix4(L),_.push(R)}}_.length||_.push(xd.clone().translate(0,e-999,0));let m=Tn(_);return _.forEach(x=>x.dispose()),new j(m,new oe({color:wh,transparent:!0,opacity:.8,depthWrite:!1,side:yt,fog:!c}))}function Ug(n){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),s=t.createRadialGradient(128,128,44,128,128,128);s.addColorStop(0,n.halo[0]),s.addColorStop(.5,n.halo[1]),s.addColorStop(1,n.halo[2]),t.fillStyle=s,t.fillRect(0,0,256,256);let r=t.createLinearGradient(0,26,0,230);r.addColorStop(0,n.disc[0]),r.addColorStop(.34,n.disc[1]),r.addColorStop(.62,n.disc[2]),r.addColorStop(.85,n.disc[3]),r.addColorStop(1,n.disc[4]),t.fillStyle=r,t.beginPath(),t.arc(128,128,104,0,7),t.fill(),t.globalCompositeOperation="destination-out";for(let a=0;a<4;a++)t.fillRect(0,102+a*7,256,3);let o=t.createLinearGradient(0,127,0,139);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=o,t.fillRect(0,127,256,129),new Un(e)}var Zn=new j(new We(6400,6400),new oe({map:Ug(bi[0].sun),transparent:!0,depthWrite:!1,fog:!1}));Zn.position.set(0,-470,-16800);Si.add(Zn);function Bg(n){let{r:e,g:t,b:s}=Ng(n),r=document.createElement("canvas");r.width=4,r.height=128;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,0,128);return a.addColorStop(0,`rgba(${e},${t},${s},0)`),a.addColorStop(.5,`rgba(${e},${t},${s},0.5)`),a.addColorStop(1,`rgba(${e},${t},${s},0)`),o.fillStyle=a,o.fillRect(0,0,4,128),new Un(r)}var zi=new j(new We(6e4,1500),new oe({map:Bg(bi[0].haze),transparent:!0,depthWrite:!1,fog:!1,blending:ut}));zi.position.set(0,-10,-6e3);Si.add(zi);function il(n,e,t){let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d");r.imageSmoothingEnabled=!1,t(r,n,e);let o=new Un(s);return o.magFilter=At,o.minFilter=At,o.colorSpace=ct,o.wrapS=o.wrapT=di,o}var Zt=new oe({color:656918}),Rn=new oe({color:1314854}),rg=[{base:"#140b28",slab:"#1d1236",mull:"#0d0719",win:"#ffd24a",win2:"#7adcff",acc:"#ff2bd6",shop:["#ff9a3c","#ff2bd6","#2af0ff","#ffe08a"]},{base:"#0e0d2c",slab:"#171a3e",mull:"#080716",win:"#ffe08a",win2:"#9adcff",acc:"#2af0ff",shop:["#ffd24a","#ff5a5f","#2af0ff","#c0ff5e"]},{base:"#190a20",slab:"#241031",mull:"#0e0614",win:"#ffcf5e",win2:"#ff8a7a",acc:"#7b3ff2",shop:["#ff9a3c","#ff2bd6","#ffe08a","#7adcff"]},{base:"#101226",slab:"#1a1e38",mull:"#090a16",win:"#f5d98c",win2:"#8ac8f0",acc:"#ff5a8f",shop:["#ffb45e","#ff4a7c","#4adcff","#ffe08a"]},{base:"#0d1420",slab:"#152238",mull:"#070b12",win:"#ffe6a0",win2:"#6ae0d0",acc:"#2af0ff",shop:["#4adcff","#ffd24a","#ff2bd6","#c0ff5e"]},{base:"#1c0d16",slab:"#2a1522",mull:"#100710",win:"#ffc86a",win2:"#ff7ab0",acc:"#ff2b5c",shop:["#ff5a5f","#ffb45e","#ff2bd6","#ffe08a"]},{base:"#12102a",slab:"#1b1a40",mull:"#0a0918",win:"#e8d48a",win2:"#a0b8ff",acc:"#7b3ff2",shop:["#9a6aff","#2af0ff","#ffd24a","#ff4a7c"]},{base:"#0a1616",slab:"#122424",mull:"#060e0e",win:"#d8ffb0",win2:"#7adcff",acc:"#c0ff5e",shop:["#c0ff5e","#2af0ff","#ffe08a","#ff9a3c"]}];function Vb(n,e,t,s,r){if(r>=11)return Wb(n,e,t,s,r);n.fillStyle=s.base,n.fillRect(0,0,e,t);let o=Math.min(16,t*.08|0)+6,a=6+(Math.random()*6|0),l=t-o;if(r===1){n.fillStyle="rgba(120,180,255,0.05)",n.fillRect(0,0,e,t);for(let f=0;f<e;f+=3)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(f,0,1,t);let c=0;for(let f=a;f<l-6;f+=6){if(c<=0&&Math.random()<.16&&(c=1+(Math.random()*3|0)),c>0){c--,n.fillStyle=Math.random()<.7?s.win:s.win2,n.globalAlpha=.75,n.fillRect(1,f+1,e-2,4),n.globalAlpha=1;for(let h=0;h<e;h+=3)n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(h,f+1,1,4)}else if(n.fillStyle="rgba(10,16,40,0.55)",n.fillRect(1,f+1,e-2,4),Math.random()<.2){n.fillStyle=s.win2,n.globalAlpha=.5;let h=Math.random()*e*.7|0;n.fillRect(h,f+1,3+Math.random()*8|0,4),n.globalAlpha=1}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,f+5,e,1)}n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(0,0,e,a),n.fillStyle=s.acc,n.fillRect(0,0,e,1),n.fillStyle="#0a0a18",n.fillRect(0,l,e,o),n.fillStyle=s.win2,n.globalAlpha=.55,n.fillRect(2,l+1,e-4,o-3),n.globalAlpha=1;for(let f=2;f<e-2;f+=5)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(f,l+1,1,o-3)}else if(r===2){for(let f=a;f<l-7;f+=7){n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,f+7-1,e,1);for(let h=2;h<e-4;h+=5+(Math.random()*3|0)){let u=Math.random()<.34;n.fillStyle=u?Math.random()<.7?s.win:Math.random()<.85?"#aef2ff":s.acc:"rgba(0,0,0,0.55)",n.fillRect(h,f+2,2+(Math.random()*2|0),3+(Math.random()*2|0)),Math.random()<.16&&(n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(h,f+7-3,4,2)),Math.random()<.05&&(n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.fillRect(h+1,f+1,1,1))}}n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(0,0,e,a),n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let f=1;f<e-3;){let h=3+(Math.random()*6|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.8,n.fillRect(f,l+2,Math.min(h,e-f-2),o-4),n.globalAlpha=1,f+=h+1+(Math.random()*3|0)}}else if(r===3){n.fillStyle="rgba(255,255,255,0.03)";for(let c=0;c<t;c+=24)n.fillRect(0,c,e,12);for(let c=0;c<3;c++){let f=4+Math.random()*(e-8)|0;n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(f,0,2,t),n.fillStyle="rgba(255,255,255,0.08)",n.fillRect(f+2,0,1,t)}for(let c=a+6;c<l-10;c+=26){let f=4+Math.random()*Math.max(4,e-20)|0;for(let h=0;h<4;h++)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(f,c+h*3,12,2)}for(let c=a+14;c<l-8;c+=34)if(Math.random()<.7){let f=3+Math.random()*Math.max(4,e-12)|0;n.fillStyle=Math.random()<.6?s.win2:s.win,n.globalAlpha=.8,n.fillRect(f,c,7,5),n.globalAlpha=1}n.fillStyle="#0a0808",n.fillRect(0,l,e,o);for(let c=0;c<e;c+=6)n.fillStyle=c/6%2?"#e6c02a":"#141414",n.fillRect(c,l+o-4,6,3);n.fillStyle="#ff2b4c",n.globalAlpha=.8;for(let c=a+8;c<l;c+=40)n.fillRect(e-4,c,2,2);n.globalAlpha=1}else if(r===4){for(let d=a;d<l-8;d+=8){n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,d+8-1,e,1);for(let p=2;p<e-4;p+=4)Math.random()<.18&&(n.fillStyle=s.win,n.fillRect(p,d+2,3,4))}let f=t*.22|0,h=t*.4|0,u=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0];if(n.fillStyle="#0b0518",n.fillRect(1,f,e-2,h),n.strokeStyle=u,n.lineWidth=1,n.strokeRect(1.5,f+.5,e-3,h-1),Math.random()<.5){n.fillStyle="#ff9a3c",n.beginPath(),n.arc(e/2,f+h*.42,Math.min(e,h)*.3,0,7),n.fill(),n.fillStyle="#0b0518";for(let d=0;d<4;d++)n.fillRect(2,f+h*.42+d*4,e-4,2);n.fillStyle=u,n.font="8px monospace",n.textBaseline="top",n.fillText(Fi[Math.random()*Fi.length|0],3,f+h-11)}else for(let d=f+4;d<f+h-8;d+=9)for(let p=4;p<e-8;p+=8)Math.random()<.75&&(n.fillStyle=Math.random()<.6?u:"#ffd24a",n.fillRect(p,d,5,5),Math.random()<.5&&n.fillRect(p+2,d+5,2,2));n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let d=1;d<e-3;){let p=4+(Math.random()*8|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.75,n.fillRect(d,l+2,Math.min(p,e-d-2),o-4),n.globalAlpha=1,d+=p+2+(Math.random()*4|0)}}else if(r===6){n.fillStyle="#070b18",n.fillRect(0,0,e,t),n.globalAlpha=.3,n.strokeStyle="#2af0ff",n.lineWidth=1;for(let c=0;c<t;c+=8)n.beginPath(),n.moveTo(0,c+.5),n.lineTo(e,c+.5),n.stroke();for(let c=0;c<e;c+=8)n.beginPath(),n.moveTo(c+.5,0),n.lineTo(c+.5,t),n.stroke();n.globalAlpha=1;for(let c=0;c<t/12;c++){let f=(Math.random()*(e/8)|0)*8+1,h=(Math.random()*(t/8)|0)*8+1;n.fillStyle=Math.random()<.7?"#2af0ff":"#ff2bd6",n.globalAlpha=.45+Math.random()*.45,n.fillRect(f,h,6,6),n.globalAlpha=1}n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let c=1;c<e-3;){let f=4+(Math.random()*7|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.75,n.fillRect(c,l+2,Math.min(f,e-c-2),o-4),n.globalAlpha=1,c+=f+2+(Math.random()*4|0)}}else if(r===7){n.fillStyle="#05060e",n.fillRect(0,0,e,t);for(let h=0;h<e;h+=4)n.fillStyle="rgba(255,255,255,0.025)",n.fillRect(h,0,1,t);n.fillStyle=s.acc,n.globalAlpha=.8,n.fillRect(e*.5|0,a,1,t-a-o),n.globalAlpha=1;let c=t*.2|0,f=Math.max(6,Math.min(e*.28,20))|0;n.strokeStyle=s.acc,n.lineWidth=2,n.beginPath(),n.arc(e/2,c,f,0,7),n.stroke(),Math.random()<.5&&(n.fillStyle=s.acc,n.globalAlpha=.7,n.fillRect(e/2-f*.4,c-1.5,f*.8,3),n.globalAlpha=1);for(let h=a;h<l;h+=10)Math.random()<.14&&(n.fillStyle=s.win2,n.globalAlpha=.45,n.fillRect(2,h,e-4,1),n.globalAlpha=1);n.fillStyle="#04040a",n.fillRect(0,l,e,o),n.fillStyle=s.acc,n.globalAlpha=.8,n.fillRect(e/2-2,l+2,4,o-4),n.globalAlpha=1}else if(r===8){for(let c=a;c<l;c+=3)n.fillStyle=(c/3|0)%2?"#ffd24a":"#ff2bd6",n.fillRect(1,c,2,2),n.fillRect(e-3,c,2,2);for(let c=a+6;c<l-14;c+=18+(Math.random()*10|0)){let f=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.random()*4|0];n.fillStyle="#0a0512",n.fillRect(4,c,e-8,10),n.strokeStyle=f,n.lineWidth=1,n.strokeRect(4.5,c+.5,e-9,9),n.fillStyle=f,n.font="8px monospace",n.textBaseline="top",n.fillText(Fi[Math.random()*Fi.length|0],7,c+1),n.fillStyle="rgba(0,0,0,0.55)";for(let h=c+12;h<Math.min(c+17,l-2);h+=5)for(let u=4;u<e-6;u+=4)n.fillRect(u,h,3,3)}n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let c=1;c<e-3;){let f=3+(Math.random()*6|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.85,n.fillRect(c,l+2,Math.min(f,e-c-2),o-4),n.globalAlpha=1,c+=f+1+(Math.random()*3|0)}}else if(r===9){n.fillStyle="#0a0616",n.fillRect(0,0,e,t);let c=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0],f=Math.random()*3|0;if(f===0){n.fillStyle="#1a1030",n.fillRect(2,2,e-4,t-4);let h=t*.4;n.fillStyle="#ffd8c0",n.fillRect(e*.25,h-t*.12,e*.5,t*.24),n.fillStyle="#141024",n.fillRect(e*.2,h-t*.18,e*.6,t*.08),n.fillRect(e*.2,h-t*.16,e*.12,t*.2),n.fillRect(e*.68,h-t*.16,e*.12,t*.2),n.fillStyle="#ff2b4c",n.beginPath(),n.arc(e*.5,h+t*.02,e*.05,0,7),n.fill(),n.fillStyle="#141024",n.fillRect(e*.34,h-t*.02,e*.08,2),n.fillRect(e*.58,h-t*.02,e*.08,2),n.fillStyle=c,n.font="8px monospace",n.textBaseline="top",n.fillText(Fi[Math.random()*Fi.length|0],4,t*.72|0)}else if(f===1){n.fillStyle="#101a3a",n.fillRect(2,2,e-4,t-4);let h=t*.38,u=e*.18;n.fillStyle="#e8f0ff",n.beginPath(),n.ellipse(e/2,h,e*.32,u,0,0,7),n.fill(),n.fillStyle=c,n.beginPath(),n.arc(e/2,h,u*.6,0,7),n.fill(),n.fillStyle="#08060e",n.beginPath(),n.arc(e/2,h,u*.28,0,7),n.fill()}else{for(let h=4;h<t-4;h+=5){n.fillStyle=Math.random()<.5?c:"#7b3ff2",n.globalAlpha=.4+Math.random()*.5;let u=Math.sin(h*.15)*e*.2+e*.3|0;n.fillRect(4,h,u+(e*.2|0),2)}n.globalAlpha=1}n.fillStyle="rgba(0,0,0,0.35)";for(let h=2;h<t;h+=3)n.fillRect(2,h,e-4,1);n.strokeStyle=c,n.lineWidth=1,n.strokeRect(1.5,1.5,e-3,t-3),n.fillStyle="#05030c",n.fillRect(0,l,e,o)}else if(r===10){n.fillStyle="#141230",n.fillRect(0,0,e,t);for(let u=0;u<t;u+=14+(Math.random()*10|0))for(let d=0;d<e;d+=12+(Math.random()*12|0))n.fillStyle="rgba(255,255,255,"+(.02+Math.random()*.04).toFixed(3)+")",n.fillRect(d,u,10+(Math.random()*12|0),12+(Math.random()*10|0));let c="#2ab4ff",f="#ff2bd6",h=(u,d)=>{n.strokeStyle=d,n.lineWidth=1.5,n.globalAlpha=.95,n.beginPath();let p=2+Math.random()*8;for(n.moveTo(u+.5,p);p<t-10;){let _=14+Math.random()*30;if(p=Math.min(t-6,p+_),n.lineTo(u+.5,p),Math.random()<.55){let y=(Math.random()<.5?-1:1)*(4+Math.random()*10)|0;u=Math.max(3,Math.min(e-3,u+y)),n.lineTo(u+.5,p)}}n.stroke(),n.globalAlpha=1};h(3+Math.random()*e*.25|0,c),h(6+Math.random()*e*.2|0,c),h(e-4-Math.random()*e*.25|0,f),h(e-8-Math.random()*e*.2|0,f);for(let u=0;u<3;u++){let d=3+Math.random()*(e-10)|0;n.fillStyle="#0d0b22",n.fillRect(d,4,3,t-8),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(d+2,4,1,t-8)}if(e>30){let u=4+Math.random()*(e-26)|0,d=t*.3+Math.random()*t*.3|0;n.fillStyle="#0c0a20",n.fillRect(u,d,22,22),n.fillStyle="#050410";for(let p of[[5,5],[16,5],[5,16],[16,16]])n.beginPath(),n.arc(u+p[0],d+p[1],4,0,7),n.fill()}{let u=4+Math.random()*Math.max(6,e-20)|0,d=t*.15+Math.random()*t*.5|0;for(let p=0;p<5;p++)n.fillStyle="#080618",n.fillRect(u,d+p*3,16,2)}for(let u=0;u<3+(t/90|0);u++){let d=4+Math.random()*Math.max(6,e-20)|0,p=6+Math.random()*Math.max(10,t-30)|0;n.fillStyle="#0a0816",n.fillRect(d-1,p-1,14,7);for(let _=0;_<3;_++)n.fillStyle=Math.random()<.85?"#ffb742":"#3a2c14",n.fillRect(d+_*4,p,3,5)}for(let u=0;u<8;u++)n.fillStyle=Math.random()<.5?c:f,n.globalAlpha=.9,n.fillRect(3+Math.random()*(e-6)|0,3+Math.random()*(t-8)|0,2,1),n.globalAlpha=1;n.fillStyle="#0a0a1a",n.fillRect(e*.25,l-2,e*.5,o+2);for(let u=l+1;u<t-3;u+=3)n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(e*.27,u,e*.46,1);for(let u=0;u<e;u+=6)n.fillStyle=(u/6|0)%2?"#e6c02a":"#141414",n.fillRect(u,t-3,6,2)}else{let c=0,f=["rgba(255,255,255,0.05)","rgba(0,0,0,0.22)","rgba(122,63,242,0.10)","rgba(255,154,60,0.07)","rgba(42,240,255,0.06)"];for(;c<t;){let h=Math.min(t-c,40+(Math.random()*90|0));n.fillStyle=f[Math.random()*f.length|0],n.fillRect(0,c,e,h);let u=6+(Math.random()*3|0),d=3+(Math.random()*2|0),p=.2+Math.random()*.35;for(let _=c+3;_<c+h-u;_+=u)for(let y=2;y<e-4;y+=d+2)n.fillStyle=Math.random()<p?Math.random()<.75?s.win:s.win2:"rgba(0,0,0,0.5)",n.fillRect(y,_,d,u-3);n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(0,c+h-1,e,1),c+=h}n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let h=1;h<e-3;){let u=3+(Math.random()*7|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.8,n.fillRect(h,l+2,Math.min(u,e-h-2),o-4),n.globalAlpha=1,h+=u+1+(Math.random()*4|0)}}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,0,1,t),n.fillRect(e-1,0,1,t)}function Wb(n,e,t,s,r){let o=Math.min(16,t*.08|0)+6,a=t-o,l=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e","#9a6aff"],c=l[Math.random()*l.length|0],f=()=>{n.fillStyle="#05030c",n.fillRect(0,a,e,o);for(let h=1;h<e-3;){let u=4+(Math.random()*7|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.8,n.fillRect(h,a+2,Math.min(u,e-h-2),o-4),n.globalAlpha=1,h+=u+2+(Math.random()*3|0)}};if(n.fillStyle=s.base,n.fillRect(0,0,e,t),r===11){for(let h=4,u=0;h<a-6;h+=7,u^=1)for(let d=2+u*4;d<e-6;d+=8){let p=Math.random()<.2;n.fillStyle=p?c:"rgba(0,0,0,0.45)",n.globalAlpha=p?.85:1,n.beginPath(),n.moveTo(d+3,h),n.lineTo(d+6,h+2),n.lineTo(d+6,h+5),n.lineTo(d+3,h+7),n.lineTo(d,h+5),n.lineTo(d,h+2),n.closePath(),n.fill(),n.globalAlpha=1}f()}else if(r===12){n.fillStyle="#040a08",n.fillRect(0,0,e,t);for(let h=3;h<e-2;h+=5){let u=Math.random()*t|0,d=t*.2+Math.random()*t*.4|0;for(let p=0;p<d;p+=4){let _=(u+p)%t;n.fillStyle=p<8?"#d8ffe8":"#3adc7a",n.globalAlpha=Math.max(.15,1-p/d),n.fillRect(h,_,2,3)}n.globalAlpha=1}f()}else if(r===13){n.fillStyle="#1c1a22",n.fillRect(0,0,e,t);for(let h=4;h<a-10;h+=12)for(let u=3;u<e-8;u+=10)n.fillStyle="#0a090f",n.fillRect(u,h,8,9),n.fillStyle="#26232e",n.fillRect(u,h,8,1),n.fillRect(u,h,1,9),Math.random()<.22&&(n.fillStyle="#ffd24a",n.globalAlpha=.75,n.fillRect(u+2,h+3,3,3),n.globalAlpha=1);n.fillStyle="rgba(0,0,0,0.3)";for(let h=0;h<5;h++)n.fillRect(Math.random()*e|0,0,2,t);f()}else if(r===14){for(let h=2;h<a-2;h+=4)n.fillStyle="#0c0a18",n.fillRect(1,h,e-2,3),Math.random()<.3&&(n.fillStyle=Math.random()<.6?"#ffb046":c,n.globalAlpha=.5,n.fillRect(1,h+3,e-2,1),n.globalAlpha=1);f()}else if(r===15){n.fillStyle="#08060e",n.fillRect(0,0,e,t);for(let h=3;h<a-8;h+=9)for(let u=2;u<e-8;u+=10){let d=l[Math.random()*l.length|0];n.fillStyle="#020204",n.fillRect(u,h,9,7),n.fillStyle=d,n.globalAlpha=.25+Math.random()*.6,n.fillRect(u+1,h+1,7,5),n.globalAlpha=1,Math.random()<.4&&(n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(u+1,h+1+(Math.random()*4|0),7,1))}f()}else if(r===16){for(let h=0,u=0;h<a;h+=9,u^=1)for(let d=-6;d<e;d+=12){let p=Math.random();n.fillStyle=p<.12?c:p<.5?"#141126":"#0d0b1c",n.globalAlpha=p<.12?.6:1,n.beginPath(),(u^d/12&1)%2?(n.moveTo(d+u*6,h),n.lineTo(d+12+u*6,h),n.lineTo(d+6+u*6,h+9)):(n.moveTo(d+6+u*6,h),n.lineTo(d+12+u*6,h+9),n.lineTo(d+u*6,h+9)),n.closePath(),n.fill(),n.globalAlpha=1}n.strokeStyle="rgba(255,255,255,0.08)";for(let h=0;h<a;h+=9)n.beginPath(),n.moveTo(0,h+.5),n.lineTo(e,h+.5),n.stroke();f()}else if(r===17){for(let h=6;h<a-14;h+=16){n.fillStyle="#221018",n.fillRect(0,h,e,3),n.fillStyle="#160a10",n.fillRect(2,h+3,e-4,10);for(let u=4;u<e-4;u+=6)Math.random()<.55&&(n.fillStyle="#ffb046",n.globalAlpha=.85,n.fillRect(u,h+6,3,4),n.globalAlpha=1);n.fillStyle="#ff5a3c",n.globalAlpha=.9;for(let u=3;u<e-3;u+=10)n.fillRect(u,h+2,2,2);n.globalAlpha=1}f()}else if(r===18){n.fillStyle="#0e0a16",n.fillRect(0,0,e,t);let h=14+(Math.random()*10|0);for(let u=0;u<h;u++){let d=Math.random()*(e-10)|0,p=Math.random()*(a-12)|0,_=6+Math.random()*10|0,y=5+Math.random()*9|0,g=l[Math.random()*l.length|0];n.fillStyle="#0a0512",n.fillRect(d-1,p-1,_+2,y+2),n.fillStyle=g,n.globalAlpha=.55+Math.random()*.35,n.fillRect(d,p,_,y),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.5)";for(let m=p+2;m<p+y-1;m+=3)n.fillRect(d+1,m,_-2,1)}f()}else if(r===19){n.fillStyle="#100d18",n.fillRect(0,0,e,t);let h=Math.max(4,e*.16|0),u=e-h>>1;n.fillStyle=c,n.globalAlpha=.9,n.fillRect(u,4,h,a-8),n.globalAlpha=1,n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(u+(h/2|0),4,1,a-8);for(let d=8;d<a-6;d+=14)n.fillStyle="#080612",n.fillRect(u-2,d,h+4,2);for(let d=6;d<a-8;d+=18)n.fillStyle="#e6c02a",n.globalAlpha=.5,n.fillRect(3,d,4,2),n.fillRect(5,d+2,4,2),n.fillRect(e-7,d,4,2),n.fillRect(e-9,d+2,4,2),n.globalAlpha=1;f()}else if(r===20){n.fillStyle="#141018",n.fillRect(0,0,e,t);for(let h=3;h<e-2;h+=6)n.fillStyle=h/6%3===0?"#c8a24a":"#3a2f22",n.globalAlpha=h/6%3===0?.8:1,n.fillRect(h,6,2,a-10),n.globalAlpha=1;for(let h=10;h<a-6;h+=24)n.fillStyle="#c8a24a",n.globalAlpha=.4,n.fillRect(2,h,e-4,1),n.globalAlpha=1;n.fillStyle="#ffd24a",n.globalAlpha=.85;for(let h=5;h<e-4;h+=12)Math.random()<.5&&n.fillRect(h,8+Math.random()*(a-20)|0,2,4);n.globalAlpha=1,f()}else if(r===21){n.fillStyle="#0a0812",n.fillRect(0,0,e,t);for(let h=4;h<a;h+=8)for(let u=3;u<e-4;u+=5)Math.random()<.25&&(n.fillStyle="#ffcf5e",n.globalAlpha=.6,n.fillRect(u,h+2,3,3),n.globalAlpha=1);n.strokeStyle="#2a2438",n.lineWidth=1;for(let h=1;h<e;h+=6)n.beginPath(),n.moveTo(h+.5,0),n.lineTo(h+.5,a),n.stroke();for(let h=1;h<a;h+=6)n.beginPath(),n.moveTo(0,h+.5),n.lineTo(e,h+.5),n.stroke();f()}else if(r===22){n.fillStyle="#12101e",n.fillRect(0,0,e,t);for(let h=6;h<a-4;h+=7)for(let u=5;u<e-4;u+=7){let d=Math.random()<.4;n.fillStyle=d?Math.random()<.8?"#ffd24a":"#7adcff":"#060410",n.globalAlpha=d?.9:1,n.beginPath(),n.arc(u,h,2.2,0,7),n.fill(),n.globalAlpha=1}f()}else if(r===23){n.fillStyle="#0c1018",n.fillRect(0,0,e,t);for(let h=4;h<a-8;h+=10)for(let u=2;u<e-10;u+=11)n.fillStyle="#0a1c33",n.beginPath(),n.moveTo(u,h+7),n.lineTo(u+9,h+5),n.lineTo(u+9,h),n.lineTo(u,h+2),n.closePath(),n.fill(),n.strokeStyle="rgba(120,190,255,0.35)",n.stroke(),Math.random()<.08&&(n.fillStyle="#04070c",n.fillRect(u+2,h+1,5,4));f()}else if(r===24){n.fillStyle="#100e16",n.fillRect(0,0,e,t);for(let h=4;h<a-6;h+=8)for(let u=3;u<e-5;u+=6){let d=Math.random();n.fillStyle=d<.1?"#ffcf5e":d<.35?"#04030a":"#0a0814",n.globalAlpha=d<.1?.8:1,n.fillRect(u,h,4,5),n.globalAlpha=1,d>=.1&&d<.2&&(n.fillStyle="#1c1826",n.beginPath(),n.moveTo(u,h),n.lineTo(u+4,h+5),n.stroke())}for(let h=0;h<3;h++){let u=l[Math.random()*l.length|0],d=a*.2+Math.random()*a*.6|0;n.strokeStyle=u,n.lineWidth=2,n.globalAlpha=.85,n.beginPath();let p=2+Math.random()*e*.3|0;n.moveTo(p,d);for(let _=0;_<4;_++)p+=4+Math.random()*8,n.lineTo(p,d+(Math.random()-.5)*8|0);n.stroke(),n.globalAlpha=1,n.lineWidth=1}f()}else if(r===25){n.fillStyle="#062a30",n.fillRect(0,0,e,t);let h=n.createLinearGradient(0,0,0,t);h.addColorStop(0,"rgba(20,220,210,0.25)"),h.addColorStop(1,"rgba(10,90,110,0.4)"),n.fillStyle=h,n.fillRect(0,0,e,t);for(let u=8;u<a;u+=9){n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(0,u,e,2);for(let d=0;d<3;d++)Math.random()<.5&&(n.fillStyle="rgba(0,0,0,0.55)",n.fillRect(Math.random()*(e-8)|0,u-5,3+Math.random()*6|0,4))}n.fillStyle="rgba(255,255,255,0.25)";for(let u=0;u<10;u++)n.fillRect(Math.random()*e|0,Math.random()*a|0,1,1);f()}else if(r===26){n.fillStyle="#12101c",n.fillRect(0,0,e,t);for(let h=8;h<a-10;h+=13)for(let u=7;u<e-6;u+=13)n.fillStyle="#0a0814",n.fillRect(u-6,h-6,12,12),n.fillStyle="#050308",n.beginPath(),n.arc(u,h,4.5,0,7),n.fill(),n.strokeStyle="#221e30",n.beginPath(),n.moveTo(u-4,h),n.lineTo(u+4,h),n.moveTo(u,h-4),n.lineTo(u,h+4),n.stroke(),Math.random()<.15&&(n.fillStyle=c,n.globalAlpha=.7,n.fillRect(u-5,h+4,10,1),n.globalAlpha=1);f()}else if(r===27){n.fillStyle="#100d1a",n.fillRect(0,0,e,t);for(let h=6;h<a-6;h+=9)for(let u=4;u<e-6;u+=7)Math.random()<.3&&(n.fillStyle="#ffcf5e",n.globalAlpha=.55,n.fillRect(u,h,3,4),n.globalAlpha=1);n.strokeStyle="#060410",n.lineWidth=1.5;for(let h=0;h<7;h++){let u=Math.random()*a*.8|0,d=4+Math.random()*8;n.beginPath(),n.moveTo(0,u),n.quadraticCurveTo(e/2,u+d,e,u+(Math.random()-.5)*8|0),n.stroke()}for(let h=0;h<4;h++){let u=Math.random()*(e-8)|0,d=Math.random()*(a-10)|0;n.fillStyle="#1a1626",n.fillRect(u,d,6,8),n.fillStyle=Math.random()<.5?"#ff2b4c":"#2af0ff",n.fillRect(u+2,d+2,2,1)}f()}else if(r===28){n.fillStyle="#0a0814",n.fillRect(0,0,e,t);let h=Math.max(8,e*.4|0),u=e-h>>1;n.fillStyle="#050208",n.fillRect(u-1,3,h+2,a-6);for(let d=5;d<a-8;d+=8){let p=l[Math.random()*l.length|0];n.fillStyle=p,n.globalAlpha=.55+Math.random()*.35,n.fillRect(u,d,h,6),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(u,d+2,h,1)}n.strokeStyle=c,n.strokeRect(u-1.5,2.5,h+3,a-5),f()}else if(r===29){n.fillStyle="#070a0c",n.fillRect(0,0,e,t);for(let h=2;h<e-1;h+=3){let u=Math.random()<.7?"#4ef0b0":l[Math.random()*l.length|0];n.fillStyle=u,n.globalAlpha=.25+Math.random()*.55;let d=Math.random()*10|0,p=a-(Math.random()*10|0);n.fillRect(h,d,1,p-d),n.globalAlpha=1;for(let _=d+6;_<p;_+=8+(Math.random()*8|0))n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(h,_,1,2)}f()}else{n.fillStyle="#141118",n.fillRect(0,0,e,t);for(let h=-e;h<a+e;h+=14)n.fillStyle=(h/14|0)%2?"#1c1822":"#0e0b12",n.beginPath(),n.moveTo(0,h),n.lineTo(e,h-e*.4),n.lineTo(e,h-e*.4+8),n.lineTo(0,h+8),n.closePath(),n.fill();n.fillStyle=c,n.globalAlpha=.8;for(let h=10;h<a-6;h+=26)n.fillRect(2,h,e-4,2);n.globalAlpha=1;for(let h=0;h<2;h++){let u=4+Math.random()*(e-24)|0,d=a*.3+Math.random()*a*.4|0;n.fillStyle="#0a0a14",n.fillRect(u,d,16,12);for(let p=d+2;p<d+11;p+=2)n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(u+1,p,14,1)}f()}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,0,1,t),n.fillRect(e-1,0,1,t)}function og(n,e,t){if(Math.random()<.38){let s=["#4ef0e0","#2af0ff","#c0ff5e","#ff2bd6"][Math.random()*4|0];n.strokeStyle=s,n.fillStyle=s,n.lineWidth=1,n.globalAlpha=.85;let r=2+(Math.random()*4|0);for(let o=0;o<r;o++){let a=4+Math.random()*(e-8)|0,l=0;for(n.beginPath(),n.moveTo(a+.5,0);l<t-8;){let c=8+(Math.random()*30|0);if(l=Math.min(t-4,l+c),n.lineTo(a+.5,l+.5),Math.random()<.5&&l<t-12){let f=(Math.random()<.5?-1:1)*(3+Math.random()*8)|0;a=Math.max(3,Math.min(e-4,a+f)),n.lineTo(a+.5,l+.5)}}n.stroke(),n.fillRect(a-1,l-1,3,3)}n.globalAlpha=1}if(Math.random()<.4){let s=3+(Math.random()*6|0);for(let r=0;r<s;r++){let o=2+Math.random()*Math.max(4,e-12)|0,a=6+Math.random()*Math.max(8,t-24)|0,l=4+Math.random()*8|0,c=3+Math.random()*5|0,f=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.random()*5|0];n.fillStyle="#0a0616",n.fillRect(o-1,a-1,l+2,c+2),n.fillStyle=f,n.globalAlpha=.8,n.fillRect(o,a,l,c),n.globalAlpha=1,n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(o+1,a+1,Math.max(1,l*.4|0),1)}}}function Rh(n,e,t,s){let r=rg[Math.floor(Math.random()*rg.length)],o=Math.random(),a=t!==void 0?t:Math.random()<.6?o<.13?0:o<.25?1:o<.39?2:o<.47?3:o<.54?4:o<.6?5:o<.68?6:o<.76?7:o<.84?8:o<.92?9:10:11+(Math.random()*20|0),l=Math.max(24,Math.min(160,Math.round(n*2)))|0,c=Math.max(48,Math.min(1024,Math.round(e*2)))|0,f=il(l,c,h=>{if(a!==0){Vb(h,l,c,r,a),og(h,l,c);return}h.fillStyle=r.base,h.fillRect(0,0,l,c);let u=8+(Math.random()*6|0);for(let g=0;g<l;g+=u)h.fillStyle=r.mull,h.fillRect(g,0,1,c);h.fillStyle="rgba(255,255,255,0.03)";for(let g=0;g<l;g+=u*2)h.fillRect(g,0,u,c);let d=8,p=Math.min(16,c*.08|0)+6,_=6+(Math.random()*6|0);for(let g=_;g<c-p-d;g+=d){h.fillStyle=r.slab,h.fillRect(0,g+d-1,l,1);let m=Math.random(),x=-1,M=-1;if(m<.14)x=0,M=l;else if(m<.62){let b=Math.random()*l|0;x=b,M=b+(l*.15+Math.random()*l*.3|0)}for(let b=0;b<l-2;b+=u)for(let I=b+2;I<b+u-1&&I<l-3;I+=4){let R=I>=x&&I<=M&&Math.random()<.9;R?h.fillStyle=Math.random()<.8?r.win:Math.random()<.85?r.win2:r.acc:h.fillStyle="rgba(0,0,0,0.55)",h.fillRect(I,g+2,3,d-4),R&&Math.random()<.35&&(h.fillStyle="rgba(255,255,255,0.55)",h.fillRect(I+1,g+3,1,1))}}h.fillStyle="rgba(0,0,0,0.5)",h.fillRect(0,0,l,_),Math.random()<.6&&(h.fillStyle=r.acc,h.fillRect(0,0,l,1));let y=c-p;h.fillStyle="#05030c",h.fillRect(0,y,l,p);for(let g=1;g<l-3;){let m=4+(Math.random()*9|0);h.fillStyle=r.shop[Math.random()*r.shop.length|0],h.globalAlpha=.75,h.fillRect(g,y+2,Math.min(m,l-g-2),p-4),h.globalAlpha=1,g+=m+2+(Math.random()*4|0)}h.fillStyle="rgba(255,240,200,0.5)",h.fillRect(0,y,l,1),h.fillStyle="rgba(0,0,0,0.4)",h.fillRect(0,0,1,c),h.fillRect(l-1,0,1,c),og(h,l,c)});return f.wrapS=f.wrapT=cn,s&&s>1&&(f.wrapS=di,f.repeat.x=s),f.minFilter=Qi,f.generateMipmaps=!0,f.anisotropy=ko,new oe({map:f})}var Ch=new ao().load("models/facades/cyberpunk_facade_asset/symmetrical_neon_cyberpunk_tower.png");Ch.colorSpace=ct;Ch.anisotropy=ko;var sl=Ch.clone();sl.wrapS=di;sl.repeat.x=-1;sl.offset.x=1;sl.needsUpdate=!0;var vd=[];for(let n of[Ch,sl])for(let e of[16777215,16767176,13165823,15780095])vd.push(new oe({map:n,color:e}));var Gd=["01_neon_cyberpunk_tower_facade","02_neon_cyberpunk_hotel_facade","03_neon_pixel_art_skyscraper_facade","04_neon_split_industrial_facade","05_neon_symmetry_cyberpunk_building_facade","06_neon_dataflow_tower_facade","07_neon_dream_cyberpunk_hotel_skyscraper","08_neon_cyberpunk_megastructure_facade","09_nexus_cyberpunk_megastructure_facade","10_cyberpunk_core_tower_tx_09","11_neon_datacore_cyberpunk_server_citywall","12_neo_terminal_cyberpunk_market_facade","13_neon_megablock_city_facade","14_nova_civic_systems_megastructure"],vr=4,Ed=4,bd=512,Sd=1536,No=document.createElement("canvas");No.width=vr*bd;No.height=Ed*Sd;var Vd=No.getContext("2d");Vd.fillStyle="#0a0820";Vd.fillRect(0,0,No.width,No.height);var Go=new Un(No);Go.colorSpace=ct;Go.minFilter=Qi;Go.generateMipmaps=!0;Go.anisotropy=ko;var Us=new oe({map:Go});Gd.forEach((n,e)=>{let t=new Image;t.onload=()=>{Vd.drawImage(t,e%vr*bd,(e/vr|0)*Sd,bd,Sd),Go.needsUpdate=!0},t.src="models/facades/cyberpunk_facades_all/"+n+".png"});var Wd=0;function Og(n,e,t){let s=e%vr/vr,r=1-((e/vr|0)+1)/Ed,o=1/vr,a=1/Ed,l=n.attributes.uv;for(let c=0;c<l.count;c++){let f=l.getX(c);t&&(f=1-f),l.setXY(c,s+f*o,r+l.getY(c)*a)}l.needsUpdate=!0}var Fi=["PUNK","VICE","TURBO","NEON","BUST","RUN","MAXX","GRID"];function Fg(n,e,t,s,r){let o=document.createElement("canvas");o.width=n*t,o.height=e*s;let a=o.getContext("2d");a.imageSmoothingEnabled=!1;for(let c=0;c<t*s;c++)a.save(),a.translate(c%t*n,(c/t|0)*e),a.beginPath(),a.rect(0,0,n,e),a.clip(),r(a,c),a.restore();let l=new Un(o);return l.magFilter=At,l.minFilter=At,l.colorSpace=ct,l.wrapS=l.wrapT=cn,l}function Hg(n,e,t,s,r,o){let a=n.attributes.uv;if(!a)return n;let l=e%t,c=e/t|0,f=.5/(r*t),h=.5/(o*s),u=l/t+f,d=(l+1)/t-f,p=1-(c+1)/s+h,_=1-c/s-h;for(let y=0;y<a.count;y++)a.setXY(y,u+(d-u)*a.getX(y),p+(_-p)*a.getY(y));return a.needsUpdate=!0,n}function Xb(n){let e=Math.floor(Math.random()*3);{let t=["#12062a","#1a0630","#08102a"][Math.floor(Math.random()*3)];n.fillStyle=t,n.fillRect(0,0,48,24);let s=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.floor(Math.random()*4)];if(e===0){n.fillStyle="#ff9a3c",n.beginPath(),n.arc(14,12,8,0,7),n.fill(),n.fillStyle=t;for(let r=0;r<3;r++)n.fillRect(4,13+r*3,20,1);n.fillStyle=s,n.fillRect(30,6,2,14);for(let r of[[-6,-2],[-4,-4],[0,-5],[4,-4],[6,-2]])n.fillRect(31+r[0],6+r[1],4,1)}else if(e===1)n.fillStyle=s,n.font="8px monospace",n.textBaseline="top",n.fillText(Fi[Math.floor(Math.random()*Fi.length)],4,3),n.fillStyle="rgba(255,255,255,0.15)",n.fillRect(0,13,48,1),n.fillStyle="#ffd24a",n.fillText(Fi[Math.floor(Math.random()*Fi.length)],12,14);else for(let r=4;r<44;r+=7){n.fillStyle=Math.random()<.5?s:"#ffd24a";for(let o=3;o<21;o+=5)Math.random()<.8&&(n.fillRect(r,o,4,3),Math.random()<.5&&n.fillRect(r+1,o+3,2,1))}n.strokeStyle=s,n.lineWidth=1,n.strokeRect(.5,.5,47,23)}}var Xd=6,qd=4,qb=Xd*qd,Yb=Fg(48,24,Xd,qd,Xb),zg=new oe({map:Yb,transparent:!0,opacity:.92,side:yt,depthWrite:!1});function kg(n,e){return Hg(new We(n,e),Sr?0:Math.random()*qb|0,Xd,qd,48,24)}var Sr=location.search.includes("onefac");function Yd(n,e){return new j(kg(n,e),zg)}function Kb(n){{n.fillStyle="#0c0620",n.fillRect(0,0,8,48);let e=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.floor(Math.random()*5)];n.strokeStyle=e,n.strokeRect(.5,.5,7,47),n.fillStyle=e;for(let t=3;t<45;t+=6)Math.random()<.85&&(n.fillRect(2,t,4,3),Math.random()<.5&&(n.fillStyle="#ffffff",n.fillRect(3,t+1,1,1),n.fillStyle=e))}}var Kd=8,Zd=2,Zb=Kd*Zd,$b=Fg(8,48,Kd,Zd,Kb),Gg=new oe({map:$b,transparent:!0,side:yt,depthWrite:!1});function Vg(n,e){return Hg(new We(n,e),Sr?0:Math.random()*Zb|0,Kd,Zd,8,48)}var ad={};function Kn(n,e){let t=n+"_"+e;return ad[t]||(ad[t]=new oe({color:n,transparent:!0,opacity:e,side:yt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})),ad[t]}var Ga=new oe({color:16722764}),ld=new oe({color:2758726}),Wg=new oe({color:16722748}),Jb=Math.max(1,Math.min(128,parseInt(new URLSearchParams(location.search).get("facs"),10)||64)),rr=[];for(let n=0;n<Jb;n++)rr.push(Rh(26+Math.random()*22,80+Math.random()*280));var tt=[];for(let n=0;n<16;n++)tt.push(Rh(30,90+Math.random()*260,void 0,3));var Td=[];for(let n=0;n<12;n++)Td.push(Rh(90,500+Math.random()*400,[1,0,4,15,28,19][n%6]));var cd=new Be,Oc=new Be;function jb(n,e,t){let s=n.index.array,r=n.attributes.position,o=n.attributes.uv,a=n.attributes.normal,l=new Float32Array(t*3),c=o?new Float32Array(t*2):null,f=a?new Float32Array(t*3):null;for(let u=0;u<t;u++){let d=s[e+u];l[u*3]=r.getX(d),l[u*3+1]=r.getY(d),l[u*3+2]=r.getZ(d),c&&(c[u*2]=o.getX(d),c[u*2+1]=o.getY(d)),f&&(f[u*3]=a.getX(d),f[u*3+1]=a.getY(d),f[u*3+2]=a.getZ(d))}let h=new pt;return h.setAttribute("position",new ht(l,3)),c&&h.setAttribute("uv",new ht(c,2)),f&&h.setAttribute("normal",new ht(f,3)),h}function rl(n){n.updateMatrixWorld(!0),cd.copy(n.matrixWorld).invert();let e=new Map,t=new Map,s=new Map,r=[];n.traverse(l=>{if(l===n||!l.geometry||!l.geometry.isBufferGeometry)return;if(l.isMesh&&Array.isArray(l.material)){if(!l.geometry.index||!l.geometry.groups||!l.geometry.groups.length)return;Oc.multiplyMatrices(cd,l.matrixWorld);for(let h of l.geometry.groups){let u=l.material[h.materialIndex];if(!u)continue;let d=s.get(u);d||(d={geos:[],srcs:[]},s.set(u,d)),d.geos.push(jb(l.geometry,h.start,h.count).applyMatrix4(Oc)),d.srcs.push(l)}r.push(l);return}let c=l.isMesh?e:l.isLineSegments?t:null;if(!c)return;let f=c.get(l.material);f||(f={geos:[],origs:[]},c.set(l.material,f)),Oc.multiplyMatrices(cd,l.matrixWorld),f.geos.push(l.geometry.clone().applyMatrix4(Oc)),f.origs.push(l)});let o=(l,c)=>{for(let[f,h]of l){if(h.origs.length<2){h.geos.forEach(d=>d.dispose());continue}let u=Tn(h.geos);if(!u){h.geos.forEach(d=>d.dispose());continue}for(let d of h.origs)d.parent&&d.parent.remove(d);h.geos.forEach(d=>d.dispose()),n.add(new c(u,f))}};o(e,j),o(t,kt);let a=new Set;for(let[l,c]of s){let f=c.geos.length>1?Tn(c.geos):c.geos[0];if(f)n.add(new j(f,l)),c.geos.length>1&&c.geos.forEach(h=>h.dispose());else{c.geos.forEach(h=>h.dispose());for(let h of c.srcs)a.add(h)}}for(let l of r)!a.has(l)&&l.parent&&l.parent.remove(l);return n.traverse(l=>{l!==n&&(l.matrixAutoUpdate=!1,l.updateMatrix())}),n}var Vo=il(32,64,n=>{n.fillStyle="#160a2e",n.fillRect(0,0,32,64),n.fillStyle="rgba(255,255,255,0.04)";for(let e=0;e<120;e++)n.fillRect(Math.random()*32|0,Math.random()*64|0,1,1);n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,0,2,64),n.fillRect(30,0,2,64),n.fillStyle="rgba(122,63,242,0.25)",n.fillRect(4,0,1,64),n.fillRect(27,0,1,64)});Vo.repeat.set(1,60);var Ph=new j(new We(74,9e3),new oe({map:Vo}));Ph.rotation.x=-Math.PI/2;Ph.position.set(0,-29.6,-1500);Fe.add(Ph);function Xg(n,e){let t=new j(new Ze(1.4,.2,9e3),new oe({color:e}));return t.position.set(n,-29,-1500),t}Fe.add(Xg(-36,Pt));Fe.add(Xg(36,Pt));function Qb(){let n=document.createElement("canvas");n.width=16,n.height=256;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,256);return t.addColorStop(0,"rgba(255,170,70,0.38)"),t.addColorStop(.35,"rgba(255,110,120,0.2)"),t.addColorStop(.7,"rgba(255,70,150,0.07)"),t.addColorStop(1,"rgba(255,60,160,0)"),e.fillStyle=t,e.fillRect(0,0,16,256),new Un(n)}var ol=new j(new We(46,1500),new oe({map:Qb(),transparent:!0,opacity:.6,blending:ut,depthWrite:!1}));ol.rotation.x=-Math.PI/2;ol.position.set(0,-29.2,-820);Fe.add(ol);var $d=[];for(let n=0;n<70;n++){let e=new Ze(1.8,.2,16);e.translate(0,-29,-n*46),$d.push(e)}var ah=new j(Tn($d),new oe({color:Hb}));$d.forEach(n=>n.dispose());Fe.add(ah);var Wo=il(128,128,n=>{n.fillStyle="#0c0618",n.fillRect(0,0,128,128),n.fillStyle="#140a24",n.fillRect(0,0,128,18),n.fillRect(0,0,18,128),n.fillStyle="#22123a",n.fillRect(0,18,128,2),n.fillRect(18,0,2,128),n.fillStyle="#1a0e2c";for(let e=0;e<7;e++){let t=24+Math.random()*90|0,s=24+Math.random()*90|0;n.fillRect(t,s,6+Math.random()*16|0,5+Math.random()*12|0)}n.fillStyle="#3a1f5e";for(let e=0;e<40;e++)n.fillRect(Math.random()*128|0,Math.random()*128|0,1,1);n.globalAlpha=.5,n.fillStyle="#ffd24a";for(let e=6;e<128;e+=14)n.fillRect(e,8,5,1),n.fillRect(8,e,1,5);n.globalAlpha=.25,n.fillStyle="#2af0ff",n.fillRect(0,17,128,1),n.fillRect(17,0,1,128),n.globalAlpha=1});Wo.repeat.set(16,16);Wo.minFilter=pi;Wo.generateMipmaps=!0;Wo.anisotropy=ko;Vo.minFilter=pi;Vo.generateMipmaps=!0;Vo.anisotropy=ko;var Lh=new j(new We(9e3,9e3),new oe({map:Wo}));Lh.rotation.x=-Math.PI/2;Lh.position.set(0,-30.2,-1500);Fe.add(Lh);var eS=9e3/16,lh=[],Jd=[];for(let n=0;n<66;n++)for(let e of[-1,1]){let t=-n*90,s=e*40,r=new Ze(.8,14,.8);r.translate(s,-23,t),lh.push(r);let o=new Ze(5,.7,.7);o.translate(s-e*2.5,-16,t),lh.push(o);let a=new Ze(2.6,.5,1);a.translate(s-e*4,-30+13.6,t),Jd.push(a)}var Va=new j(Tn(lh),new oe({color:1313318}));lh.forEach(n=>n.dispose());var jd=new j(Tn(Jd),new oe({color:16757866}));Jd.forEach(n=>n.dispose());Fe.add(Va);Fe.add(jd);var Qd=[];for(let n=0;n<22;n++){let e=Math.random()<.5,t=new j(new We(1.6,10),new oe({color:e?16769184:16722764,transparent:!0,opacity:.7,blending:ut,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.set((Math.random()<.5?-1:1)*(120+Math.random()*160),-29.4,-Math.random()*5800),t.userData.rel=e?1.6+Math.random()*.8:.5+Math.random()*.35,Fe.add(t),Qd.push(t)}var ep=[];for(let n=0;n<26;n++){let e=Math.random()<.5?1:-1,t=new j(new We(6,1.2),new oe({color:e>0?16769184:16730714,transparent:!0,opacity:.8,blending:ut,depthWrite:!1,side:yt}));t.position.set((Math.random()-.5)*2400,160+Math.random()*220,-900-Math.random()*2400),t.userData={vx:e*(1.2+Math.random()*1.4)},Fe.add(t),ep.push(t)}var tp=[];function tS(){let n=document.createElement("canvas");n.width=16,n.height=128;let e=n.getContext("2d"),t=e.createLinearGradient(0,128,0,0);return t.addColorStop(0,"rgba(200,230,255,0.55)"),t.addColorStop(1,"rgba(200,230,255,0)"),e.fillStyle=t,e.fillRect(0,0,16,128),new Un(n)}for(let n=0;n<9;n++){let e=new j(new We(9,360).translate(0,180,0),new oe({map:tS(),transparent:!0,opacity:.5,blending:ut,depthWrite:!1,side:yt,fog:!1}));e.position.set((Math.random()<.5?-1:1)*(70+Math.random()*140),-30,-500-n*650-Math.random()*400),e.userData={ph:Math.random()*6.3,sp:.35+Math.random()*.3,z0:e.position.z},Fe.add(e),tp.push(e)}var Ih=[];{let n=["04_neon_corner_kiosk","13_subway_entrance_pair","14_subway_corner_entrance","15_bus_stop_shelter","16_vending_machine_cluster","17_street_furniture_strip","18_neon_food_cart","19_crosswalk_signal_island"],e=["01_pocket_park_plaza","02_sunset_fountain_plaza","03_arcade_market_stalls","05_service_pipe_cluster","06_utility_tank_stack","11_hovercar_parking_bay","12_glidebooster_landing_pad","20_loading_dock_crates"];setTimeout(()=>{Wc(n.concat(e),"cityfillers/synthwave_city_fillers").then(t=>{let s=[Pt,Ht,16765514,8060826,16747098];for(let r=0;r<18;r++){let o=r%2===0,a=o?n:e,l=Math.random()*a.length|0,c=t[o?l:n.length+l];if(!c)continue;let f=Ah(c,s[Math.random()*s.length|0]);kb(f,o?6+Math.random()*7:9+Math.random()*12,-30);let h=Math.random()<.5?-1:1;f.position.x=h*(o?70+Math.random()*54:130+Math.random()*170),f.position.z=-r*(6e3/18)-80-Math.random()*100,f.rotation.y=Math.random()<.5?0:Math.PI,rl(f),Fe.add(f),Ih.push(f)}}).catch(t=>console.warn("[cityfillers]",t))},0)}var np=!1,qg=[];for(let n=0;np&&n<8;n++){let e=new ot,t=26+Math.random()*30,s=4+Math.random()*3,r=[];for(let o=0;o<=10;o++){let a=o/10;r.push(new N((a-.5)*110,t-Math.sin(Math.PI*a)*s,0))}e.add(new es(new pt().setFromPoints(r),new Dn({color:2758726})));for(let o=1;o<10;o+=2){let a=r[o],l=new j(new We(1.6,2.2),new oe({color:[16734780,16765514,16722902][Math.random()*3|0],transparent:!0,opacity:.9,side:yt}));l.position.set(a.x,a.y-1.4,0),e.add(l)}e.position.z=-n*760-140,Fe.add(e),qg.push(e)}var ip=[];for(let n=0;np&&n<2;n++){let e=[];for(let s=0;s<=24;s++){let r=s/24;e.push(new N((r-.5)*150,40+Math.sin(r*Math.PI*2.2)*12,Math.sin(r*9)*6))}let t=new j(new yc(new ma(e),48,1.6,6,!1),new oe({color:12514559,transparent:!0,opacity:.5,blending:ut,depthWrite:!1}));t.position.z=-n*3100-900,Fe.add(t),ip.push(t)}var sp=[];for(let n=0;np&&n<4;n++){let e=new ot,t=30+Math.random()*34,s=new j(new Ze(150,5,10),Rn);s.position.y=t,e.add(s);let r=[Pt,Ht,16765514][Math.random()*3|0],o=new j(new Ze(150,.8,10.4),new oe({color:r,transparent:!0,opacity:.8}));o.position.y=t+2.9,e.add(o);for(let a of[-70,70]){let l=new j(new Ze(5,t+30,7),Rn);l.position.set(a,(t-30)/2,0),e.add(l)}e.position.z=-n*1500-700,Fe.add(e),sp.push(e)}function nS(n,e){let t=45+Math.pow(Math.random(),1.7)*430,s=15+Math.random()*36,r=15+Math.random()*36,o=new ot,a=rr[Sr?0:Math.random()*rr.length|0];function l(d,p,_,y){let g=new j(new Ze(d,p,_),[a,a,Zt,Zt,a,a]);return g.position.y=y+p/2,o.add(g),g}function c(d,p,_,y,g,m,x){let M=new j(new Sn(d,p,_,g),[m,Zt,Zt]);return M.position.y=y+_/2,x&&(M.scale.z=x),o.add(M),M}function f(d,p,_){let y=Math.random(),g=[Pt,Ht,16751164,16765514][Math.random()*4|0];if(y<.15){let m=8+Math.random()*16,x=new j(new Sn(.6,Math.min(d,p)*.6,m,4),Rn);x.position.y=_+m/2,x.rotation.y=Math.PI/4,o.add(x)}else if(y<.3){let m=Math.min(d,p)*.42,x=new j(new Pi(m,10,6,0,Math.PI*2,0,Math.PI/2),Rn);x.position.y=_,o.add(x)}else if(y<.44){let m=Math.min(d,p)*.5,x=new j(new Sn(m,m,Math.max(d,p)*.9,10,1,!1,0,Math.PI),Rn);x.rotation.z=Math.PI/2,p>d&&(x.rotation.y=Math.PI/2),x.position.y=_,o.add(x)}else if(y<.6){let m=_,x=d*.8,M=p*.8;for(let b=0;b<2+(Math.random()*2|0);b++){let I=4+Math.random()*5,R=new j(new Ze(x,I,M),Rn);R.position.y=m+I/2,o.add(R),m+=I,x*=.68,M*=.68}}else if(y<.72){let m=Math.min(d,p)*.4,x=new j(new Sn(m,m,1,12),Rn);x.position.y=_+.5,o.add(x);let M=new j(new Li(m*.8,.35,6,16),Kn(16765514,.95));M.rotation.x=Math.PI/2,M.position.y=_+1.2,o.add(M)}if(Math.random()<.45){let m=new j(new Ze(d+.6,1.6,p+.6),Kn(g,.85));m.position.y=_-1.2,o.add(m)}}let h=Math.random();if(h<.025&&t>200){let d=Math.max(s,r)/2;c(d*.22,d*.5,t*.82,0,10,tt[Math.random()*tt.length|0]);let p=new j(new Sn(d*1.15,d*.75,t*.07,14),[tt[Math.random()*tt.length|0],Zt,Rn]);p.position.y=t*.86,o.add(p);let _=new j(new Sn(.5,.5,t*.12,6),ld);_.position.y=t*.96,o.add(_);let y=new j(new Pi(1.2,6,6),Ga);y.position.y=t*1.02,o.add(y)}else if(h<.055){let d=Math.max(s,r)/2,p=0,_=4+(Math.random()*3|0),y=t/_;for(let g=0;g<_;g++){let m=g%2===0;c(d*(m?1:.78),d*(m?1:.78),y,p,12,tt[Math.random()*tt.length|0]),p+=y}}else if(h<.085){let d=Math.max(s,r)/2;c(d*(.85+Math.random()*.15),d,t,0,14,tt[Math.random()*tt.length|0])}else if(h<.115){let d=Math.random()<.5?6:8,p=Math.max(s,r)/1.7;c(p*.94,p,t,0,d,tt[Math.random()*tt.length|0])}else if(h<.14){let d=Math.max(s,r)/1.8;c(d*.45,d,t,0,12,tt[Math.random()*tt.length|0])}else if(h<.165&&t>160){let d=Math.max(s,r)/1.5,p=0;for(let _=0;_<3;_++){let y=t*(.42-_*.07);c(d*(1-_*.27)*.96,d*(1-_*.27),y,p,10,tt[Math.random()*tt.length|0]),p+=y}}else if(h<.19){let d=Math.max(s,r)/1.6;c(d,d,t,0,16,tt[Math.random()*tt.length|0],.45+Math.random()*.2)}else if(h<.23&&t>180){let d=s*.42,p=rr[Sr?0:Math.random()*rr.length|0],_=rr[Sr?0:Math.random()*rr.length|0],y=new j(new Ze(d,t,r*.8),[p,p,Zt,Zt,p,p]);y.position.set(-s*.32,t/2,0),o.add(y);let g=new j(new Ze(d,t*.86,r*.8),[_,_,Zt,Zt,_,_]);g.position.set(s*.32,t*.43,0),o.add(g);let m=new j(new Ze(s*.66,4,r*.3),Rn);m.position.set(0,t*.62,0),o.add(m);let x=new j(new We(s*.6,1),Kn(2814207,.7));x.position.set(0,t*.62,r*.16),o.add(x)}else if(t/s>1.7&&t/s<5.4&&Math.random()<.6){if(Math.random()<.75){let d=new Ze(s,t,r);Og(d,Math.random()*Gd.length|0,Math.random()<.5);let p=new j(d,[Us,Us,Zt,Zt,Us,Us]);p.position.y=t/2,o.add(p),Wd++}else{let d=vd[Math.random()*vd.length|0],p=new j(new Ze(s,t,r),[d,d,Zt,Zt,d,d]);p.position.y=t/2,o.add(p)}f(s,r,t)}else{let d=Math.random()*26|0,p=Math.max(s,r)/2;if(d===0&&t>120){let _=t*.55+Math.random()*t*.15;l(s,_,r,0),l(s*.68,t-_,r*.68,_),f(s*.68,r*.68,t)}else if(d===1&&t>140)l(s*1.3,t*.16,r*1.2,0),l(s*.72,t*.84,r*.72,t*.16),f(s*.72,r*.72,t);else if(d===2&&t>220){let _=t*.45,y=t*.3;l(s,_,r,0),l(s*.78,y,r*.78,_),l(s*.55,t-_-y,r*.55,_+y),f(s*.55,r*.55,t)}else if(d===3&&t>100){let _=t*(.55+Math.random()*.25),y=l(s*.62,t,r,0);y.position.x=-s*.19,l(s*.62,_,r*.62,0).position.set(s*.19,_/2,r*.19),f(s*.62,r,t)}else if(d===4&&t>140){let _=l(s*.38,t,r,0);_.position.x=-s*.26;let y=l(s*.38,t*.92,r,0);y.position.x=s*.26;let g=new j(new We(s*.1,t*.85),Kn([Pt,Ht,16765514][Math.random()*3|0],.5));g.position.set(0,t*.45,0),o.add(g),f(s*.38,r,t)}else if(d===6&&t>140){let _=l(s*.3,t*.75,r,0);_.position.x=-s*.35;let y=l(s*.3,t*.75,r,0);y.position.x=s*.35,l(s,t*.25,r,t*.75),f(s,r,t)}else if(d===7&&t>120){for(let _=0;_<4;_++){let y=t*(.4+.2*_),g=l(s*.3,y,r,0);g.position.x=-s*.45+_*s*.3}f(s*.3,r,t)}else if(d===8&&t>120)l(s*.4,t*.8,r*.55,0),l(s,t*.2,r,t*.8),f(s,r,t);else if(d===9&&t>150)c(p*.32,p*.38,t*.75,0,10,tt[Math.random()*tt.length|0]),c(p*1.05,p*1.05,t*.18,t*.75,12,tt[Math.random()*tt.length|0]);else if(d===10&&t>140){l(s*.5,t,r*.5,0);let _=new j(new Ze(s*1.9,2.5,3.5),Rn);_.position.set(s*.35,t-3,0),o.add(_);let y=new j(new We(1.6,5),Kn(16765514,.8));y.position.set(s*1.1,t-8,0),o.add(y),f(s*.5,r*.5,t)}else if(d===11&&t>150){l(s,t*.55,r,0);let _=l(s*.32,t*.45,r*.8,t*.55);_.position.x=-s*.3;let y=l(s*.32,t*.45,r*.8,t*.55);y.position.x=s*.3,f(s*.32,r*.8,t)}else if(d===12){l(s,t*.85,r,0);let _=new j(new Ze(s*1.12,3,r*1.05),Rn);_.position.y=t*.9,_.rotation.z=.3,o.add(_)}else if(d===13&&t>130){for(let _=0;_<4;_++){let y=t*(1-_*.2),g=l(s*.42,y,r,0);g.position.x=-n*(_-1.5)*s*.28}f(s*.42,r,t)}else if(d===14&&t>140){let _=l(s*.24,t,r,0);_.position.x=-s*.38;let y=l(s*.24,t,r,0);y.position.x=s*.38,l(s,t*.16,r,t*.84),f(s,r,t)}else if(d===15){l(s,Math.min(t,90),r,0);for(let _=0;_<6;_++){let y=15+Math.random()*40,g=new j(new Sn(.3,.3,y,4),ld);if(g.position.set((Math.random()-.5)*s*.7,Math.min(t,90)+y/2,(Math.random()-.5)*r*.7),o.add(g),Math.random()<.5){let m=new j(new Pi(.7,5,5),Ga);m.position.set(g.position.x,Math.min(t,90)+y+1,g.position.z),o.add(m)}}}else if(d===16&&t>120)c(p*.5,p*.5,t,0,10,tt[Math.random()*tt.length|0]).position.x=-p*.5,c(p*.45,p*.45,t*.85,0,10,tt[Math.random()*tt.length|0]).position.set(p*.5,t*.85/2,p*.2),c(p*.4,p*.4,t*.68,0,10,tt[Math.random()*tt.length|0]).position.set(0,t*.68/2,-p*.5);else if(d===17&&t>150){let _=c(1.2,p*1.3,t,0,4,tt[Math.random()*tt.length|0]);_.rotation.y=Math.PI/4}else if(d===18&&t>160){let _=c(p*.5,p*.9,t,0,4,tt[Math.random()*tt.length|0]);_.rotation.y=Math.PI/4;let y=new j(new _c(1.6,7,4),Kn(16765514,.9));y.position.y=t+3,o.add(y)}else if(d===19&&t>130){let _=l(s*.3,t,r,0);_.position.x=-s*.35;let y=l(s*.3,t,r,0);y.position.x=s*.35,l(s*.42,t*.5,r*.55,t*.25),f(s*.3,r,t)}else if(d===20&&t>140)c(p*1.05,p*1.05,t*.28,0,12,tt[Math.random()*tt.length|0]),l(s*.58,t*.72,r*.58,t*.28),f(s*.58,r*.58,t);else if(d===21&&t>150){l(s,t*.18,r,0);let _=l(s*.4,t*.82,r*.8,t*.18);_.position.x=-s*.27;let y=l(s*.4,t*.55,r*.8,t*.18);y.position.x=s*.27,f(s*.4,r*.8,t)}else if(d===22&&t>150){l(s*.55,t,r,0);let _=l(s*1.15,t*.14,r,t*.78);_.position.x=s*.28,f(s*.55,r,t)}else if(d===23&&t>140){for(let y=0;y<5;y++)c(p*.85,p*.85,t*.13,y*t*.2,12,tt[Math.random()*tt.length|0]);let _=new j(new Sn(p*.3,p*.3,t,8),Kn(2814207,.35));_.position.y=t/2,o.add(_)}else if(d===24&&t>120){let _=c(p*1.1,p*1.1,t,0,3,tt[Math.random()*tt.length|0]);_.rotation.y=Math.random()*6.3}else d===25?(l(s*.55,t,r*.7,0),l(s*.45,t*.7,r*.55,0).position.set(-s*.35,t*.35,r*.15),l(s*.4,t*.45,r*.5,0).position.set(s*.33,t*.225,-r*.15),f(s*.55,r*.7,t)):(l(s,t,r,0),f(s,r,t))}if(Math.random()<.25){let d=new j(new Sn(Math.min(3,s*.14),Math.min(3,s*.14),4,7),Rn);d.position.set((Math.random()-.5)*s*.3,t+2,(Math.random()-.5)*r*.3),o.add(d)}if(t>120&&Math.random()<.35){let d=[Pt,Ht,8077298,16765514][Math.random()*4|0],p=[];for(let y of[-s/2-.3,s/2+.3]){let g=new We(.9,t*.92);g.rotateY(Math.PI/2),g.translate(y,t*.46,r*.28*(Math.random()<.5?1:-1)),p.push(g)}let _=new j(Tn(p),Kn(d,.75));p.forEach(y=>y.dispose()),o.add(_)}if(Math.random()<.4){let d=4+(Math.random()*5|0),p=6+Math.random()*10,_=[],y=n>0?-Math.PI/2:Math.PI/2,g=-n*(s/2+1.6);for(let m=0;m<d&&p<t-8;m++){let x=4+Math.random()*4,M=3+Math.random()*3,b=kg(x,M);b.rotateY(y),b.translate(g,p+M/2,r*.15),_.push(b),p+=M+1.2+Math.random()*2}if(_.length){let m=new j(Tn(_),zg);_.forEach(x=>x.dispose()),o.add(m)}}if(Math.random()<.7){let d=new j(new Ze(Math.max(2,s*.25),3,Math.max(2,r*.25)),Rn);d.position.set((Math.random()-.5)*s*.4,t+1.5,(Math.random()-.5)*r*.4),o.add(d)}if(Math.random()<.45){let d=8+Math.random()*26,p=new j(new Sn(.35,.35,d,5),ld);p.position.y=t+d/2,o.add(p)}let u=new j(new Pi(.9,6,6),Ga);if(u.position.y=t+1,o.add(u),Math.random()<.6){let d=[Pt,Ht,16751164,8077298][Math.floor(Math.random()*4)],p=new kt(new un(new Ze(s+.4,.4,r+.4)),cs(d));p.position.y=t-.2,o.add(p)}if(Math.random()<.7){let d=Math.min(s*.9,10+Math.random()*14),p=Yd(d,d*.5);p.position.set(-n*(s/2+.4),8+Math.random()*(t*.5),0),p.rotation.y=n>0?-Math.PI/2:Math.PI/2,o.add(p)}{let d=new j(new We(s*.96,2.2),Kn([16751164,16722902,2814207][Math.floor(Math.random()*3)],.55));d.position.set(-n*(s/2+.25),2.2,0),d.rotation.y=n>0?-Math.PI/2:Math.PI/2,o.add(d)}if(Math.random()<.55){let d=Math.min(t*.5,18+Math.random()*22),p=new j(Vg(3.4,d),Gg);p.position.set(-n*(s/2+2.2),6+Math.random()*(t*.4)+d/2,r*.2),o.add(p)}o.position.set(n*(68+s/2+Math.random()*126),-30,e),o.updateMatrixWorld(!0);{let d=new wt().setFromObject(o);o.userData={hw:Math.max(4,d.max.x-o.position.x,o.position.x-d.min.x),hd:r/2,top:-30+t,done:!1}}return o}var iS=new N(0,0,1),aA=new N(0,1,0);function sS(n){n.updateMatrixWorld(!0);let e=new N,t=new N,s=new N,r=new N,o=new N,a=new N,l=[],c=0;if(n.traverse(y=>{if(!y.isMesh||!y.geometry||!y.geometry.attributes.position)return;let g=y.geometry.attributes.position,m=y.geometry.index,x=y.matrixWorld,M=m?m.count/3:g.count/3;for(let b=0;b<M;b++){let I=m?m.getX(b*3):b*3,R=m?m.getX(b*3+1):b*3+1,L=m?m.getX(b*3+2):b*3+2;e.fromBufferAttribute(g,I).applyMatrix4(x),t.fromBufferAttribute(g,R).applyMatrix4(x),s.fromBufferAttribute(g,L).applyMatrix4(x),r.subVectors(t,e),o.subVectors(s,e),a.crossVectors(r,o);let D=a.length()*.5;D<2||(a.normalize(),!(Math.abs(a.y)>.55)&&(l.push({ax:e.x,ay:e.y,az:e.z,bx:r.x,by:r.y,bz:r.z,cx:o.x,cy:o.y,cz:o.z,nx:a.x,ny:a.y,nz:a.z,area:D}),c+=D))}}),!l.length||c<=0)return null;let f=Math.max(6,Math.min(150,Math.round(c/220))),h=new Be,u=new Wn,d=new N,p=[];for(let y=0;y<f;y++){let g=Math.random()*c,m=0;for(;m<l.length-1&&(g-=l[m].area)>0;)m++;let x=l[m],M=Math.random(),b=Math.random();M+b>1&&(M=1-M,b=1-b);let I=x.ax+x.bx*M+x.cx*b,R=x.ay+x.by*M+x.cy*b,L=x.az+x.bz*M+x.cz*b;d.set(x.nx,x.ny,x.nz),u.setFromUnitVectors(iS,d),h.makeRotationFromQuaternion(u);let D=xd.clone();D.applyMatrix4(h),D.translate(I+x.nx*.4,R+x.ny*.4,L+x.nz*.4),p.push(D)}let _=Tn(p);return p.forEach(y=>y.dispose()),new j(_,new oe({color:wh,transparent:!0,opacity:.8,depthWrite:!1,side:yt}))}function rS(n,e){let t=new ot,s=ch[Math.floor(Math.random()*ch.length)],r=Ah(s,Math.random()<.5?Pt:Ht);r.updateMatrixWorld(!0);let o=new wt().setFromObject(r),a=new N;o.getSize(a),r.scale.setScalar((65+Math.pow(Math.random(),1.6)*320)/Math.max(a.y,.001)),r.updateMatrixWorld(!0);let l=new wt().setFromObject(r);r.position.y=-l.min.y,t.add(r),t.updateMatrixWorld(!0);let c=new wt().setFromObject(t),f=sS(r);f&&t.add(f);let h=new j(new Pi(.9,6,6),Ga);h.position.set((c.min.x+c.max.x)/2,c.max.y+1,(c.min.z+c.max.z)/2),t.add(h);let u=n>0?-c.min.x:c.max.x;return t.position.set(n*(68+u+Math.random()*126),-30,e),t.userData={hw:Math.max(Math.abs(c.min.x),Math.abs(c.max.x)),hd:Math.max(Math.abs(c.min.z),Math.abs(c.max.z)),top:-30+(c.max.y-c.min.y),done:!1},rl(t),t}var Yg=166,$a=Yg*36,ch=[],hh=[];for(let n=0;n<32;n++)hh.push(Rh(30,70,[2,8,3,10,17,18,24,27,21,0][n%10]));var Co=8,Kg=4,Zg=hh.length,On=4,$g=(function(){let n=hh[0].map.image,e=n.width,t=n.height,s=e+On*2,r=t+On*2,o=document.createElement("canvas");o.width=s*Co,o.height=r*Kg;let a=o.getContext("2d");a.imageSmoothingEnabled=!1;for(let c=0;c<Zg;c++){let f=hh[c].map.image,h=c%Co*s+On,u=(c/Co|0)*r+On;a.drawImage(f,h,u,e,t),a.drawImage(f,0,0,1,t,h-On,u,On,t),a.drawImage(f,e-1,0,1,t,h+e,u,On,t),a.drawImage(f,0,0,e,1,h,u-On,e,On),a.drawImage(f,0,t-1,e,1,h,u+t,e,On)}let l=new Un(o);return l.magFilter=At,l.minFilter=Qi,l.generateMipmaps=!0,l.anisotropy=ko,l.colorSpace=ct,l.wrapS=l.wrapT=cn,l.userData={cw:e,ch:t,pw:s,ph:r},l})(),Fc=new oe({map:$g});function oS(n,e){let t=n.attributes.uv;if(!t)return n;let s=$g.userData,r=s.pw*Co,o=s.ph*Kg,a=e%Co,l=e/Co|0,c=(a*s.pw+On)/r,f=(a*s.pw+On+s.cw)/r,h=(l*s.ph+On)/o,d=1-(l*s.ph+On+s.ch)/o,p=1-h;for(let _ of[[0,8],[16,24]])for(let y=_[0];y<_[1];y++)t.setXY(y,c+(f-c)*t.getX(y),d+(p-d)*t.getY(y));return t.needsUpdate=!0,n}function ag(n,e,t){let s=26+Math.random()*88+(t?55+Math.random()*150:0),r=18+Math.random()*30,o=14+Math.random()*24,a=new ot,l=oS(new Ze(r,s,o),Sr?0:Math.random()*Zg|0),c=new j(l,[Fc,Fc,Zt,Zt,Fc,Fc]);if(c.position.y=s/2,a.add(c),Math.random()<.7&&!Sr){let f=Math.min(r*1.1,12+Math.random()*10),h=Yd(f,f*.45);h.position.set(0,s+f*.28,0),h.rotation.y=n>0?-Math.PI/2:Math.PI/2,h.rotation.x=-.12,a.add(h);let u=new j(new Ze(.5,f*.3,.5),Rn);u.position.set(-f*.3,s+f*.12,0),a.add(u);let d=new j(new Ze(.5,f*.3,.5),Rn);d.position.set(f*.3,s+f*.12,0),a.add(d)}if(Math.random()<.5){let f=10+Math.random()*10,h=new j(Vg(3.4,f),Gg);h.position.set(-n*(r/2+2),s*.4+f/2,o*.2),a.add(h)}if(Math.random()<.6){let f=3+(Math.random()*4|0),h=[16734780,16765514,16747052][Math.random()*3|0],u=n>0?-Math.PI/2:Math.PI/2,d=[];for(let _=0;_<f;_++){let y=new We(1.3,1.8);y.rotateY(u),y.translate(-n*(r/2+.6),s-1.5,-o/2+(_+.5)*(o/f)),d.push(y)}let p=new j(Tn(d),Kn(h,.95));d.forEach(_=>_.dispose()),a.add(p)}return a.position.set(n*((t?300+Math.random()*380:68+Math.pow(Math.random(),1.8)*256)+r/2),-30,e),a.userData={hw:r/2,hd:o/2,top:-30+s,done:!1},a}var Ad=[];function aS(){return il(32,44,n=>{n.clearRect(0,0,32,44);let e=["#7adcff","#ff7ad0","#b0ff7a","#ffd24a"][Math.random()*4|0];n.strokeStyle=e,n.fillStyle=e,n.globalAlpha=.9,n.lineWidth=1;let t=Math.random()*3|0;if(t===0)n.beginPath(),n.moveTo(16,4),n.lineTo(27,22),n.lineTo(16,40),n.lineTo(5,22),n.closePath(),n.stroke(),n.globalAlpha=.3,n.fill(),n.globalAlpha=.9;else if(t===1)n.beginPath(),n.arc(16,22,11,0,7),n.stroke(),n.fillRect(13,19,6,6);else for(let s=4;s<40;s+=6)Math.random()<.85&&n.fillRect(10,s,12,3);for(let s=0;s<44;s+=3)n.clearRect(0,s,32,1)})}var wr=6,lS=$a/wr,$n=[],rp=[],wd=[],Xo=[],hd=new Array(wr),fd=new Array(wr);function cS(){for(let r=0;r<wr;r++){let o=new ot;o.userData.minZ=0,$n.push(o),wd.push([])}let n=r=>{let o=r.position.z,a=Math.min(wr-1,Math.floor((-o-.001)/lS));$n[a].add(r),o<$n[a].userData.minZ&&($n[a].userData.minZ=o);let l={x:r.position.x,hw:r.userData.hw,top:r.userData.top,z0:o,k:a,done:!1};return rp.push(l),wd[a].push(l),l},e=[];for(let r=0;r<Yg;r++){let o=Math.random()<.5?1:-1,a=-r*36-70-Math.random()*30;if(ch.length&&Math.random()<.055){let l=rS(o,a);l.userData.z0=l.position.z,Fe.add(l),Xo.push(l)}else{let l=n(nS(o,a));l.top+30>120&&e.push(l)}}let t=Math.max(20,Math.min(2500,parseInt(new URLSearchParams(location.search).get("city"),10)||400)),s=Math.round(t*.71);for(let r=0;r<t;r++){let o=Math.random()<.5?1:-1;n(ag(o,-r*($a/t)-60-Math.random()*45,!1))}for(let r=0;r<s;r++){let o=Math.random()<.5?1:-1;n(ag(o,-r*($a/s)-80-Math.random()*60,!0))}for(let r of $n)rl(r),Fe.add(r);for(let r=0;r<36&&Ad.length<14&&e.length;r++){let o=e[Math.random()*e.length|0];if(o.holo)continue;o.holo=!0;let a=new oe({map:aS(),transparent:!0,opacity:.55,blending:ut,depthWrite:!1,side:yt}),l=new ot,c=new j(new We(16,22),a);l.add(c);let f=new j(new We(16,22),a);f.rotation.y=Math.PI/2,l.add(f),l.position.set(o.x,o.top+16+Math.random()*14,o.z0),$n[o.k].add(l),Ad.push(l)}}var Po=[],Jg=[],jg=2e4;(function(){for(let n=0;n<20;n++){let e=420+Math.random()*680,t=60+Math.random()*90,s=60+Math.random()*90,r;if(n%5<2){let c=new Ze(t,e,s);Og(c,Math.random()*Gd.length|0,Math.random()<.5),r=new j(c,[Us,Us,Zt,Zt,Us,Us]),Wd++}else{let c=Td[n%Td.length];r=new j(new Ze(t,e,s),[c,c,Zt,Zt,c,c])}let o=new ot;r.position.y=e/2,o.add(r);let a=[Pt,Ht,16751164][n%3];for(let c of[-t/2-.3,t/2+.3]){let f=new j(new We(1.6,e*.85),Kn(a,.8));f.position.set(c,e*.45,0),f.rotation.y=Math.PI/2,o.add(f)}if(Math.random()<.8){let c=Yd(t*.85,t*.45);c.position.set(0,e*.55+Math.random()*e*.25,s/2+.6),o.add(c)}let l=new j(new Pi(2.2,6,6),Ga);l.position.y=e+3,o.add(l),o.userData.h=e,o.position.set((n%2?1:-1)*(320+Math.random()*620),-30,-(n/20)*jg-Math.random()*600),rl(o),Fe.add(o),Po.push(o)}for(let n=0;n<5;n++){let e=Po[Math.floor(Math.random()*Po.length)],t=new j(new We(26,420).translate(0,210,0),new oe({color:[10146047,16743120,16765562,8060826,12622591][n%5],transparent:!0,opacity:.1,blending:ut,depthWrite:!1,side:yt}));t.position.y=e.userData.h,t.rotation.z=.5+Math.random(),t.userData.spin=(Math.random()<.5?-1:1)*(.1+Math.random()*.15),e.add(t),Jg.push(t)}})();var op=-16e3,Ut=new ot,fh=[],uh=[],ap=[],lp=[],cp=[];function al(n,e,t,s,r){let o=new Ze(s,t,24);o.translate(n,-30+t/2,e),ap.push(o);let a=new un(new Ze(s,t,24));if(a.scale(1.004,1.004,1.004),a.translate(n,-30+t/2,e),lp.push(a),r){let l=Gb(n-s/2,-30,e-12,n+s/2,-30+t,e+12,wh,.35,!0,42,20);cp.push(l.geometry)}}var hS=[[170,295,0,560,1e3,56,150,!0],[120,419,-260,700,1080,74,180,!1],[90,560,-560,880,1180,96,210,!1],[48,1055,-900,1060,1300,120,240,!1],[30,1685,-1300,1280,1450,150,300,!1]],ll=250;function Nh(n,e){let t=Math.min(1,Math.max(0,(Math.abs(n)-ll)/1300));return e*(.42+.58*t)}for(let n of hS){let e=n[0],t=n[1],s=n[2];for(let r=0;r<e;r++){let o=(r-(e-1)/2)*t+(Math.random()-.5)*t*.55;if(Math.abs(o)<ll)continue;let a=n[3]+Math.random()*n[4];Math.random()<.07&&(a*=1.3+Math.random()*.5),al(o,s-Math.random()*16,Nh(o,a),n[5]+Math.random()*n[6],n[7])}}for(let n=0;n<16;n++){let e=-1600-n*420,t=54-(n*2.5|0),s=52e3/(t-1),r=1250+n*95,o=150+n*22;for(let a=0;a<t;a++){let l=(a-(t-1)/2)*s+(Math.random()-.5)*s*.5;Math.abs(l)<ll||al(l,e-Math.random()*20,Nh(l,r+Math.random()*850),o+Math.random()*320,!1)}}for(let n=0;n<26;n++){let e=(n-12.5)*2100+(Math.random()-.5)*900;Math.abs(e)<ll*1.2||al(e,-8800-Math.random()*1200,Nh(e,2e3+Math.random()*1800),420+Math.random()*520,!1)}for(let n=0;n<14;n++){let e=(Math.random()<.5?-1:1)*(ll*1.4+Math.random()*2e4);al(e,-3e3-Math.random()*5e3,Nh(e,1600+Math.random()*1600),60+Math.random()*80,!1)}function Qg(n,e){al(n,0,4800,148,!0);let t=new j(new Ze(176,42,84),new oe({color:e,fog:!1}));t.position.set(n,4770,0),Ut.add(t);let s=new j(new Sn(5.2,5.2,760,8),new oe({color:e,fog:!1,transparent:!0,opacity:.42}));s.position.set(n,5150,0),Ut.add(s)}Qg(-95,Pt);Qg(95,Ht);Ut.add(new j(Tn(ap),new oe({color:1312294,fog:!1})));ap.forEach(n=>n.dispose());var e_=new Dn({color:6956200,fog:!1,transparent:!0,opacity:.2});uh.push(e_);Ut.add(new kt(Tn(lp),e_));lp.forEach(n=>n.dispose());var t_=new oe({color:wh,transparent:!0,opacity:.02,depthWrite:!1,side:yt,fog:!1});fh.push(t_);Ut.add(new j(Tn(cp),t_));cp.forEach(n=>n.dispose());function n_(n){let{r:e,g:t,b:s}=Ng(n),r=document.createElement("canvas");r.width=4,r.height=128;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,0,128);return a.addColorStop(0,`rgba(${e},${t},${s},0)`),a.addColorStop(.5,`rgba(${e},${t},${s},1)`),a.addColorStop(1,`rgba(${e},${t},${s},0)`),o.fillStyle=a,o.fillRect(0,0,4,128),new Un(r)}var ls=new j(new We(6e4,5200),new oe({map:n_(bi[0].glow),transparent:!0,opacity:.1,blending:ut,depthWrite:!1,fog:!1}));ls.position.set(0,560,-360);Ut.add(ls);Ut.position.z=op;Si.add(Ut);var Dh=[],hp=[-26,-9,9,26],Ja=[];for(let n=0;n<6;n++)Ja.push(new oe({map:il(64,32,e=>{e.fillStyle=["#0a1626","#140a26","#260a18","#0a2020","#1a1a10","#101226"][n],e.fillRect(0,0,64,32),e.fillStyle="rgba(255,255,255,0.08)";for(let t=4;t<32;t+=7)e.fillRect(0,t,64,1);e.fillStyle=["#ff2b5c","#2af0ff","#ffe08a","#ff2bd6","#7aff9a","#c09aff"][n],e.fillRect(0,14,64,2),e.globalAlpha=.85,e.fillStyle="#9ad0ff";for(let t=6;t<58;t+=9)e.fillRect(t,6,5,4);e.globalAlpha=1})}));function fS(n){let e=new ot,t=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];e.add(new j(new Ze(4.4,2,8),Ja[Math.random()*Ja.length|0])),e.add(new kt(new un(new Ze(4.4,2,8)),cs(t)));let s=new j(new We(3.6,.7),Wg);return s.position.set(0,.2,4.1),e.add(s),e.position.set(hp[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,-28,n),e.userData.v=.4+Math.random()*.3,e}function uS(n){let e=new ot,t=Tr[Math.floor(Math.random()*Tr.length)],s=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];{let f=t.clone(!0),h=Ja[Math.random()*Ja.length|0];f.traverse(u=>{u.isMesh&&(u.material=h,u.add(new kt(new un(u.geometry,25),cs(s))))}),e.add(f)}e.updateMatrixWorld(!0);let r=new wt().setFromObject(e),o=new N;r.getSize(o);let a=Math.max(o.z,.001);e.scale.setScalar(6.5/a),e.updateMatrixWorld(!0);let l=new wt().setFromObject(e);e.position.y=-28-l.min.y;let c=new j(new We(2.6,.6),Wg);return c.position.set(0,.6,l.max.z||3),e.add(c),e.position.x=hp[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,e.position.z=n,e.userData.v=.4+Math.random()*.3,e}var dS=2856,Tr=[];function pS(){for(let n=0;n<42;n++){let e=Tr.length?uS(-n*68-40):fS(-n*68-40);rl(e),e.userData.z0=e.position.z,e.userData.x0=e.position.x,Fe.add(e),Dh.push(e)}}var i_=[],ud=4200,Vc=[];function mS(n){let e=new ot,t=n?16734815:[2814207,16769162,16722902][Math.floor(Math.random()*3)],s;if(Vc.length)s=Vc[Math.random()*Vc.length|0].clone(!0),s.traverse(a=>{if(a.isMesh){let l=a.material&&a.material.color?a.material.color.clone():new Me(1709104);a.material=new oe({color:l.multiplyScalar(.55)}),a.add(new kt(new un(a.geometry,30),cs(t)))}}),s.scale.setScalar(.9+Math.random()*.4);else if(Tr.length){s=Ah(Tr[Math.floor(Math.random()*Tr.length)],t),s.updateMatrixWorld(!0);let a=new wt().setFromObject(s),l=new N;a.getSize(l),s.scale.setScalar(8.5/Math.max(l.z,.001))}else{s=new ot;let a=new Ze(4.5,1.4,8);s.add(new j(a,Dg())),s.add(new kt(new un(a),cs(t)))}e.add(s),e.updateMatrixWorld(!0);let r=new wt().setFromObject(e),o=new N;if(r.getSize(o),o.x>30&&(s.scale.multiplyScalar(30/o.x),e.updateMatrixWorld(!0),r.setFromObject(e),r.getSize(o)),e.userData.rx=Math.min(16,Math.max(2.5,o.x/2)),e.userData.ry=Math.max(2,o.y/2),e.userData.cy=o.y/2,n){e.rotation.y=Math.PI;let a=new j(new We(Math.max(3.2,o.x*.4),1.1),new oe({color:14676735,transparent:!0,opacity:.9,blending:ut,depthWrite:!1,side:yt}));a.position.set(0,o.y*.4,r.min.z-.4),e.add(a)}else{let a=new j(new We(Math.max(2.4,o.x*.35),.9),new oe({color:16751164,transparent:!0,opacity:.85,blending:ut,depthWrite:!1,side:yt}));a.position.set(0,o.y*.4,r.max.z+.4),e.add(a)}return e}var s_=new Uc,gS=["01_pulse_block_44m","02_vector_tower_88m","03_slash_roof_62m","04_night_monolith_118m","05_setback_hotel_72m","06_skyline_spire_102m"],_S=["01_midnight_wedge","02_pulse_sedan","03_vector_van","04_afterburner_supercar","05_night_interceptor"];function Wc(n,e){return Promise.all(n.map(t=>new Promise(s=>{s_.load("models/"+e+"/"+t+".glb",r=>s(r.scene),void 0,()=>s(null))}))).then(t=>t.filter(Boolean))}var Rd=!1;function r_(n){ft=mS(!1),ft.traverse(s=>{s.isLineSegments&&(s.material=cs(16722902))});let e=new j(new We(3.4,1.4),Kn(16738860,.9));e.position.set(0,.6,5.6),ft.add(e);let t=new j(new We(2.2,.9),Kn(16765514,.9));t.position.set(0,.6,7.4),ft.add(t),ft.position.set(0,14,n),Fe.add(ft)}var Cd=[],yS=15e3,on=[-52,0,52],$t=[-6,28,62],dd=1.15,Uh=3e3,or={1:65,2:80.75,3:65},ar={1:16.78,2:.38,3:1.18},Pd=null,os=null,Kt=null;fetch("beatmaps.json",{cache:"no-store"}).then(n=>n.json()).then(n=>{Pd=n}).catch(n=>console.warn("[beatmaps]",n));var Lo=[{name:"EASY",tol:1.35,den:2,punk:-4},{name:"NORMAL",tol:1,den:1,punk:0},{name:"HARD",tol:.8,den:1,punk:4}],Hn=1,MS=parseInt(localStorage.getItem("pb_cal")||"0",10)||0,o_=!0,pd=1,xS=1,lg=1,a_=!1,Bs=localStorage.getItem("pb_ringfb")!=="0",Aa=localStorage.getItem("pb_rings")!=="0",wa=localStorage.getItem("pb_styleroll")!=="0",dh=!1,xi=location.hash.includes("sim"),cl=location.hash.includes("bot"),md=xi?Math.max(1,parseFloat((location.hash.match(/sim(\d+(?:\.\d+)?)/)||[])[1]||1)):1,vS=location.hash.includes("test"),Ld=parseFloat((location.hash.match(/at(\d+(?:\.\d+)?)/)||[])[1]||0),Ra=!1,l_=!1,Xc=0;function ES(){if(!os)return-1;let n=os.find(e=>e.tower);return Math.max(0,n?n.t0-10:(Hs||30)-30)}var Ca=Ld*1e3,bS={1:134.08,2:188,3:123.92},Wa=0,fp=!1,Hc="",qc=0;xi&&cl&&(addEventListener("error",n=>{Wa++,Hc=String(n.message||n.error||"?").slice(0,60)}),addEventListener("unhandledrejection",n=>{Wa++,Hc=("REJ "+String(n.reason)).slice(0,60)}),setInterval(()=>{if(!fp)try{document.title="E2E L"+$e+" t="+Math.round(at.time())+" f="+qc+" sc="+Math.round(we)+" h="+ki+"/"+oi+" live="+ri.length+" vis="+$n.reduce((n,e)=>n+(e.visible?1:0),0)+"/"+Xo.reduce((n,e)=>n+(e.visible?1:0),0)+"/"+(Ut.visible?1:0)+"/"+Ih.reduce((n,e)=>n+(e.visible?1:0),0)+" ph="+Ln+" err="+Wa+(Hc?" ["+Hc+"]":"")}catch{}},1e3));addEventListener("keydown",n=>{n.code==="F9"&&(n.preventDefault(),n.stopImmediatePropagation(),dh=!dh)});var Mi=0,c_=["normal","BLOOM AUS","CRT+VIGNETTE AUS","BLOOM+CRT+VIG AUS","PIX 3.5 (halbe Pixelzahl)"];function SS(){let n=document.getElementById("crt"),e=document.getElementById("vig");Io.enabled=!(Mi===1||Mi===3);let t=Mi===2||Mi===3;n&&(n.style.display=t?"none":o_?"":"none"),e&&(e.style.display=t?"none":""),Bi=Mi===4?3.5:1.85,Za();let s=document.getElementById("perfmode");s||(s=document.createElement("div"),s.id="perfmode",s.style.cssText='position:fixed;left:14px;bottom:12px;z-index:9;pointer-events:none;font:bold 13px "Courier New",monospace;letter-spacing:.16em;color:#c0ff5e;text-shadow:0 1px 3px rgba(0,0,0,.95),0 0 10px rgba(192,255,94,.5)',document.body.appendChild(s)),s.textContent=Mi?"F10  "+Mi+"/4  "+c_[Mi]:""}addEventListener("keydown",n=>{n.code==="F10"&&(n.preventDefault(),n.stopImmediatePropagation(),Mi=(Mi+1)%c_.length,SS())});var Jt=[],Is=0,Ds=0,ri=[],Ae=0,rn=0,ki=0,oi=0,gr=null,h_=8,Ui=[],Pa=0,lr=0;function TS(n){if(!gr)return .5;let e=n*h_,t=Math.max(0,Math.min(gr.length-1,Math.floor(e))),s=Math.min(gr.length-1,t+1),r=e-t;return gr[t]*(1-r)+gr[s]*r}var it=0,Ft=0,ss=!1,Hs=0,bo=0,ph=0,mh=0,cg=0,Id=0,Yc=0,Ps=0,cr=0,Kc=0,Yn=0,Zc=1,$c=0,Jc=0;document.addEventListener("visibilitychange",()=>{document.hidden&&dn&&!zn&&!Dt&&hs()});var AS=new Li(15,2.4,6,24),wS=new Li(15,5.5,6,24),RS=new We(5.5,1.6),up=new oe({color:16777215,fog:!1}),f_=new oe({color:16773882,fog:!1}),Bh=new oe({color:Pt,transparent:!0,opacity:.6,blending:ut,depthWrite:!1,fog:!1}),dp=new oe({color:Ht,transparent:!0,opacity:.6,blending:ut,depthWrite:!1,fog:!1}),u_=new oe({color:16777215,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}),CS=new Li(15,5,6,24),d_=new oe({color:263434,fog:!1}),an=!0,gh=[Pt,Ht],hg=["#2af0ff","#ff2bd6"],Ei=0,So=0,_h=[],yh=[],p_=!1,go=localStorage.getItem("pb_flip")!=="0",Ar=[],To=1,m_=[new oe({color:Pt,fog:!1}),new oe({color:Ht,fog:!1})],pp=[new oe({color:Pt,transparent:!0,opacity:.34,blending:ut,depthWrite:!1,fog:!1}),new oe({color:Ht,transparent:!0,opacity:.34,blending:ut,depthWrite:!1,fog:!1})],g_=[new oe({color:Pt,transparent:!0,opacity:.92,blending:ut,depthWrite:!1,fog:!1}),new oe({color:Ht,transparent:!0,opacity:.92,blending:ut,depthWrite:!1,fog:!1})],PS=new Li(15,.9,6,24),__=new oe({color:16777215,fog:!1});function LS(n,e){let t=new ot,s=an?(e|0)&1:0;t.add(new j(AS,an?m_[s]:up)),t.add(new j(wS,an?pp[s]:Bh));for(let o=0;o<4;o++){let a=new j(RS,u_);a.position.set(Math.cos(o*Math.PI/2)*10.5,Math.sin(o*Math.PI/2)*10.5,0),a.rotation.z=o*Math.PI/2,t.add(a)}let r=new j(CS,d_);return r.position.z=-.8,r.renderOrder=-1,t.add(r),an&&t.add(new j(PS,__)),t.position.set(on[n[0]],$t[n[1]],-Uh),Fe.add(t),t}var IS=new Li(15,3.2,6,24),Do=[];for(let n=0;n<6;n++){let e=new j(IS,new oe({color:Pt,transparent:!0,opacity:0,blending:ut,depthWrite:!1,fog:!1}));e.visible=!1,Fe.add(e),Do.push({m:e,t:0})}function La(n,e,t,s){let r=Do.find(o=>o.t<=0)||Do[0];r.t=1,r.mag=s||1,r.m.visible=!0,r.m.material.color.setHex(t),r.m.position.set(n,e,0),r.m.scale.set(1,1,1)}var ja=[];{let n=new Li(16,1,6,24);for(let e=0;e<3;e++)for(let t=0;t<3;t++){let s=new j(n,new oe({color:2814207,transparent:!0,opacity:.08,fog:!1,depthWrite:!1}));s.visible=a_,s.position.set(on[t],$t[e],0),Fe.add(s),ja.push({cx:t,cy:e,m:s})}}var y_=new oe({color:659752,transparent:!0,opacity:.88,fog:!1}),mp=new Dn({color:16722748,transparent:!0,opacity:.9,fog:!1}),M_=new oe({color:8060826,transparent:!0,opacity:.9,fog:!1,depthWrite:!1}),x_=new We(46,30),NS=new un(x_),DS=(()=>{let n=new We(50,2.4),e=new We(2.4,34),t=[n.clone().translate(0,17,0),n.clone().translate(0,-17,0),e.clone().translate(25,0,0),e.clone().translate(-25,0,0)],s=Tn(t);return t.forEach(r=>r.dispose()),n.dispose(),e.dispose(),s})();function US(n){let e=new ot;for(let t=0;t<3;t++)for(let s=0;s<3;s++)if(s===n[0]&&t===n[1]){let r=new j(DS,M_);r.position.set(on[s],$t[t],0);let o=Lo[Hn].tol;r.scale.set(26*o/25,18*o/17,1),e.add(r)}else{let r=new j(x_,y_);r.position.set(on[s],$t[t],0),e.add(r);let o=new kt(NS,mp);o.position.copy(r.position),e.add(o)}return e.position.z=-Uh,Fe.add(e),e}var Mh=!1,BS=12,Xa=[],OS=new Ze(.9,.9,14),FS=new oe({color:10485736,transparent:!0,opacity:.95,blending:ut,depthWrite:!1,fog:!1});for(let n=0;n<BS;n++){let e=new j(OS,FS);e.visible=!1,Fe.add(e),Xa.push({m:e,on:!1,onBeat:!1})}var HS=8,Ao=[],v_=new ir(7),zS=new un(v_),Nd={d:new oe({color:1706534,fog:!1}),h:new oe({color:2759174,fog:!1})};for(let n=0;n<HS;n++){let e=new ot,t=new j(v_,Nd.d);e.add(t),e.add(new kt(zS,cs(Ht))),e.visible=!1,Fe.add(e),Ao.push({g:e,body:t,on:!1,hp:1,type:"drone",cx:1,cy:1,ph:Math.random()*6})}var Ia=0,Oh=!1,Dd=-1;addEventListener("pointerdown",()=>{Oh=!0});addEventListener("pointerup",()=>{Oh=!1});addEventListener("blur",()=>{Oh=!1;for(let n in _n)_n[n]=!1});var gp=new oe({color:16722780,transparent:!0,opacity:.55,blending:ut,depthWrite:!1,fog:!1}),E_=new We(320,26),b_=new We(40,150),kS=new un(E_),GS=new un(b_);function VS(n,e){let t=new ot,s=new j(n==="row"?E_:b_,gp),r=Lo[Hn].tol;n==="row"?(s.position.set(0,$t[e],0),s.scale.y=17/r/13):(s.position.set(on[e],($t[0]+$t[2])/2,0),s.scale.x=24/r/20),t.add(s);let o=new kt(n==="row"?kS:GS,mp);return o.position.copy(s.position),t.add(o),t.position.z=-Uh,Fe.add(t),t}function WS(){Ra=!1,Xc=0,Eh=[],ih=0,iT();for(let f of ri)Fe.remove(f.g);Jt=[],ri=[],Is=0,Ds=0,Ae=0,rn=0,ki=0,it=0,Ft=0;let n=or[$e]||120,e=60/n,t=ar[$e]||.5;Hs=at.duration(),oi=0,Kt=null;let s=Pd&&Pd[String($e)];if(gr=s&&s.flow||null,h_=s&&s.flowHz||8,lr=0,s){os=s.sections,XS(s),ss=!0,fg(),In.visible=Qa&&!!os.find(f=>f.tower),In.rotation.x=0,In.position.set(0,-30,-16e3);return}os=null;let r=t;for(;r-e*4>4;)r-=e*4;for(;r<3;)r+=e*4;let o=1,a=1,l=0,c=0;for(;r<Hs-4;){let f=l%6,h=Mh&&$e>=3&&f>=4;for(let u=0;u<8&&r<Hs-4;u++){if($e>=2&&f%2===1&&u===0){Jt.push({t:r,cell:[o,a],kind:"gate"}),oi++,r+=e;continue}if(h){if(u%2===0){let p=c%2===0?"row":"col",_=(c*2+1)%3;Jt.push({t:r,cell:[_,_],kind:"bar",axis:p,idx:_}),oi++,c++}r+=e;continue}let d=f===5?4:f>=3?1:2;u%d===0&&(f===0?o=(o+1)%3:f===1?a=(a+1)%3:f===2?(o=(o+2)%3,u%4===0&&(a=(a+1)%3)):f===3?o=[0,2,1,0,2,1,0,2][u]:f===4?(o=u%3,a=u%3):(o=1,a=1),Jt.push({t:r,cell:[o,a],kind:"ring",pol:an?l%2:0}),oi++),r+=e}l++}ss=!0,fg()}function XS(n){let e=60/n.bpm,t=n.offset,s=1,r=1,o=0,a=0,l=Hn===2?4:Hn===0?16:8,c=(y,g)=>((a+Math.floor((g-y.t0)/(e*l)))%2+2)%2,f=null,h=1,u=1,d=n.flow||null,p=n.flowHz||8,_=y=>{if(!d)return null;let g=Math.max(0,Math.min(d.length-1,Math.round(y*p))),m=d[g];return m<.34?0:m<.67?1:2};for(let y of n.sections){let g=t+Math.ceil((y.t0-t)/e-1e-6)*e,m=0;for(;g<y.t1&&g<Hs-2;g+=e,m++){if(y.mode==="combat"&&Mh){if(m%(y.density||2)===0){let D=o%2===0?"row":"col",E=(o*2+1)%3;Jt.push({t:g,cell:[E,E],kind:"bar",axis:D,idx:E}),oi++,o++}continue}let x=y.gateEvery?Hn===2?Math.max(4,y.gateEvery/2|0):y.gateEvery:0,M=x&&m>0&&m%x===0,b=(y.density||1)*Lo[Hn].den;if(!M&&m%b!==0)continue;let I=y.patterns&&y.patterns.length?y.patterns:["h"],R=I[(m/8|0)%I.length];if(R==="h")s=(s+1)%3;else if(R==="vert")r=(r+1)%3;else if(R==="zig")s=(s+2)%3,m%4===0&&(r=(r+1)%3);else if(R==="diag")s=m%3,r=m%3;else if(R==="stair")s=(m>>1)%3,r=((m>>1)/3|0)%3;else if(R==="orbit"){let D=[[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1]],E=D[m%8];s=E[0],r=E[1]}else s=1,r=1;let L=_(g);if(L!==null&&(r=L),Qa&&y.tower&&(r=0),f!==null){let D=g-f;D>0&&Math.max(Math.abs(s-h),Math.abs(r-u))/D>2.4&&(s=h+Math.sign(s-h),r=u+Math.sign(r-u))}Jt.push({t:g,cell:[s,r],kind:M?"gate":"ring",pol:an?c(y,g):0}),oi++,f=g,h=s,u=r}a++}Jt.sort((y,g)=>y.t-g.t)}function fg(){Ui=Jt.filter(n=>n.kind!=="bar").map(n=>({t:n.t,x:on[n.cell[0]],y:$t[n.cell[1]]})),Pa=0}var zs=56,ug=2.4,hl=new pt;hl.setAttribute("position",new ht(new Float32Array(zs*2*3),3));{let n=[];for(let e=0;e<zs-1;e++){let t=e*2;n.push(t,t+1,t+2,t+1,t+3,t+2)}hl.setIndex(n)}function S_(n){let e=8-n*44;return Math.max(0,Math.min(1,(-e-160)/400))}{let n=new Float32Array(zs*2*3);for(let e=0;e<zs;e++){let t=S_(e);n[e*6]=n[e*6+1]=n[e*6+2]=t,n[e*6+3]=n[e*6+4]=n[e*6+5]=t}hl.setAttribute("color",new ht(n,3))}var Ud=new oe({color:2814207,transparent:!0,opacity:.4,blending:ut,depthWrite:!1,fog:!1,side:yt,vertexColors:!0}),Uo=new j(hl,Ud);Uo.visible=!1;Uo.frustumCulled=!1;Fe.add(Uo);var Fh=new pt;Fh.setAttribute("position",new ht(new Float32Array(zs*3),3));{let n=new Float32Array(zs*3);for(let e=0;e<zs;e++){let t=S_(e);n[e*3]=n[e*3+1]=n[e*3+2]=t}Fh.setAttribute("color",new ht(n,3))}var T_=new Dn({color:12450559,transparent:!0,opacity:.7,blending:ut,depthWrite:!1,fog:!1,vertexColors:!0}),Bo=new es(Fh,T_);Bo.visible=!1;Bo.frustumCulled=!1;Fe.add(Bo);var Qa=!1,Ln=0,wo=0,jc=0,Qc=0,Na=-1,eh=0,ba=0,th=0,A_=9e3,qS=1600,w_=1600,dg=new oe({color:1706544}),pg=new oe({color:1707056}),mg=new oe({color:1378856}),In=new ot;In.visible=!1;Si.add(In);var xh=new j(new Ze(qS,A_,w_),[mg,mg,dg,dg,pg,pg]);xh.position.set(0,A_/2,-w_/2);xh.add(new kt(new un(xh.geometry),new Dn({color:2814207,transparent:!0,opacity:.8,fog:!1})));In.add(xh);function vh(n){Ph.visible=n,ol.visible=n,Lh.visible=n,Zn.visible=n,ls.visible=n;for(let e of $n)e.visible=n;for(let e of Xo)e.visible=n;for(let e of Dh)e.visible=n;for(let e of Ih)e.visible=n;for(let e of ip)e.visible=n;for(let e of sp)e.visible=n;for(let e of tp)e.visible=n;Va.visible=n,jd.visible=n;for(let e of Qd)(e.m||e).visible=n;for(let e of ep)(e.m||e).visible=n}function YS(){Ln>0||(Ln=1,wo=0,Qc=0,Na=-1,In.visible=!0,In.rotation.x=0,Oe("TOWER AHEAD!","#ffd24a"),Cn(.4,.4,220))}function KS(){if(Ln!==0){Ln=0,wo=0,eh=0,th=0,In.visible=!1,vh(!0),Ut.visible=!0,zi.visible=!0;for(let n of ja)n.m.visible=!0}}var Bd=!1;function _p(n){for(let e of["grid9","speedbar","sblabel"]){let t=document.getElementById(e);t&&(t.style.display=n&&Bd?"":"none")}}_p(!1);var yp=[];{let n=document.getElementById("grid9");if(n)for(let e=2;e>=0;e--)for(let t=0;t<3;t++){let s=document.createElement("div");n.appendChild(s),yp.push({c:t,r:e,el:s})}}function Od(){Rd||(Rd=!0,cS(),pS(),U_&&r_(Fs?-700:-900),console.log("AF2-Fassaden im Einsatz:",Wd),eT(),xp(Ei))}var ZS=["01_sky_dart_interceptor","02_afterburner_jet","03_pulse_commuter","04_vector_cargo_lifter","05_neon_bomber","06_skyline_heavy_transport"];Promise.all([Wc(gS,"buildings"),Wc(_S,"vehicles"),Wc(ZS,"aircraft/synthwave_aircraft")]).then(n=>{ch=n[0],Tr=n[1],Vc=n[2],Od()}).catch(()=>Od());setTimeout(Od,5e3);var R_=new pt,Fd=[],gg=0,_g=44,yg=560,Mg=0;for(;Fd.length<450&&Mg<6e3;){Mg++;let n=(Math.random()-.5)*4200,e=380+Math.random()*640,t=-2600-Math.random()*2600;(n-gg)*(n-gg)+(e-_g)*(e-_g)<yg*yg||Fd.push(n,e,t)}R_.setAttribute("position",new rt(Fd,3));var Mp=new nr({color:12374271,size:1.5,transparent:!0,opacity:.5,fog:!1});Si.add(new ro(R_,Mp));var Fn=new ot;(function(){let n=new pt;n.setAttribute("position",new ht(new Float32Array([0,0,-4.2,-3.2,-.3,2.6,0,.7,1.4,0,0,-4.2,0,.7,1.4,3.2,-.3,2.6,0,0,-4.2,0,.7,1.4,0,-.9,2.4,0,0,-4.2,0,-.9,2.4,0,.7,1.4]),3)),n.computeVertexNormals(),Fn.add(new j(n,new oe({color:530986,side:yt}))),Fn.add(new kt(new un(n,1),cs(Pt)));let e=new j(new ir(.6),new oe({color:Ht}));e.position.set(0,.35,-.6),e.scale.set(1,.6,1.8),Fn.add(e);for(let t of[-3,3]){let s=new j(new Pi(.28,6,6),new oe({color:t<0?Ht:Pt}));s.position.set(t,-.25,2.4),Fn.add(s)}C_(Fn)})();Fe.add(Fn);s_.load("models/ship/glidebooster_vx7.glb",n=>{let e=Ah(n.scene,Pt);e.updateMatrixWorld(!0);let t=new wt().setFromObject(e),s=new N,r=new N;t.getSize(s),t.getCenter(r);let o=7/Math.max(.001,s.x);for(e.scale.setScalar(o),e.position.set(-r.x*o,-r.y*o,-r.z*o);Fn.children.length;)Fn.remove(Fn.children[0]);Fn.add(e);let a=new j(new ir(.5),new oe({color:Ht}));a.position.set(0,.4,-.8),a.scale.set(1,.6,1.8),Fn.add(a),C_(Fn)},void 0,()=>{});var $S=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.28,"rgba(255,214,130,0.85)"),t.addColorStop(.6,"rgba(255,110,70,0.38)"),t.addColorStop(1,"rgba(255,50,130,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let s=new Un(n);return s.colorSpace=ct,s})(),Oo=[];for(let n=0;n<10;n++){let e=new j(new We(3.4-.22*n,3.4-.22*n),new oe({map:$S,color:n<5?16767136:16751327,transparent:!0,opacity:.55-n*.048,blending:ut,depthWrite:!1}));Fe.add(e),Oo.push(e)}p_=!0;Hh();var _n={};addEventListener("keydown",n=>{if(_n[n.code]=!0,n.code==="Space"&&n.preventDefault(),Dt){!n.repeat&&performance.now()-Yo>600&&nl();return}if(n.code==="KeyR"&&(zo(),at.restart(),zn&&hs()),n.code==="KeyT"&&(nn.superhot=!nn.superhot),n.code==="Escape"||n.code==="KeyP"){hs();return}if(zn){n.code==="ArrowUp"&&(ai=Math.max(0,ai-1)),n.code==="ArrowDown"&&(ai=Math.min(2,ai+1)),(n.code==="ArrowUp"||n.code==="ArrowDown")&&Th(),n.code==="Enter"&&z_();return}Ko()});addEventListener("keyup",n=>{_n[n.code]=!1});var xg=0,vg=0,qa=0,Eg=!1,bg=!1,Da=null,_o=0,nh=0,Ua=0,JS=.55,jS=.32,QS=.7;function Er(n){if(Yn<=0&&qa<=0&&dn&&!zn&&!Dt){if(Yn=1,Zc=n,qa=an?.06:1.1,an){Ei^=1,So=1,Hh(),Cn(.3,.5,120),it=Math.min(1,it+.02);return}qa=1.1,we+=30,it=Math.min(1,it+.02),Oe("BARREL ROLL  +30","#c78bff"),Cn(.2,.45,180)}}function C_(n){_h.length=0,yh.length=0,n.traverse(e=>{!e.material||Array.isArray(e.material)||(e.isLineSegments||e.isLine?(e.material=e.material.clone(),yh.push(e.material)):e.isMesh&&(e.material=e.material.clone(),_h.push(e.material)))}),p_&&Hh()}function Hh(){if(!an)return;let n=gh[Ei],e=gh[Ei^1];for(let t of yh)t.color.setHex(n);for(let t of _h)t.color.setHex(e);for(let t=0;t<Oo.length;t++)Oo[t].material.color.setHex(t<4?16767136:n);xp(Ei)}function eT(){let n=new Set([up,f_,Bh,dp,d_,__,u_].concat(_h,yh,m_,pp,g_));try{n.add(y_),n.add(mp),n.add(M_),n.add(gp)}catch{}for(let o of Oo)n.add(o.material);for(let o of Do)n.add(o.m.material);for(let o of ja)n.add(o.m.material);Ar.length=0;let e=new Set,t={},s=(()=>{let o={};return new Me(Pt).getHSL(o),o.h})(),r=(()=>{let o={};return new Me(Ht).getHSL(o),o.h})();Fe.traverse(o=>{let a=o.material;if(!a)return;let l=Array.isArray(a)?a:[a];for(let c of l){if(!c||!c.color||e.has(c)||n.has(c)||(e.add(c),c.color.getHSL(t),t.s<.25||t.l<.06))continue;let f=t.h>.42&&t.h<.63,h=t.h>.8&&t.h<.98;if(!f&&!h)continue;let u=new Me().setHSL(f?r:s,t.s,t.l);Ar.push({m:c,base:c.color.clone(),alt:u,from:c.color.clone(),to:c.color.clone()})}}),console.log("WELT-FLIP: getauschte Materialien =",Ar.length)}function xp(n){if(!(!go||!Ar.length)){for(let e of Ar)e.from.copy(e.m.color),e.to.copy(n?e.alt:e.base);To=0}}addEventListener("keydown",n=>{if(!n.repeat){if(n.code==="KeyQ")Er(-1);else if(n.code==="KeyE")Er(1);else if(n.code==="KeyA"||n.code==="ArrowLeft"){let e=performance.now();e-xg<280&&Er(-1),xg=e}else if(n.code==="KeyD"||n.code==="ArrowRight"){let e=performance.now();e-vg<280&&Er(1),vg=e}}});var vp="none";addEventListener("gamepadconnected",n=>{vp=n.gamepad.id,Ko()});function qo(){let n=navigator.getGamepads?navigator.getGamepads():[];for(let e of n)if(e&&e.connected)return e;return null}function P_(){return"pb_hs_"+$e+"_"+Hn}function L_(){try{return JSON.parse(localStorage.getItem(P_())||"[]")}catch{return[]}}function tT(n,e,t){let s=L_(),r={s:n,r:e,c:t};s.push(r),s.sort((a,l)=>l.s-a.s);let o=s.slice(0,5);try{localStorage.setItem(P_(),JSON.stringify(o))}catch{}return o.indexOf(r)}function mo(n){for(let e of[10,25,50,100])if(n<e&&Ae>=e){Oe("\u2605 COMBO "+e+" \u2605","#ffd24a"),sn=Math.max(sn,6),Gt=Math.max(Gt,.5),La(ke,De,16765514),Cn(.7,.5,250);break}}function Ya(){let n=document.getElementById("hsline");if(n){let e=L_();n.textContent=e.length?"BEST  "+Math.round(e[0].s)+"  \xB7  RANK "+e[0].r+"  \xB7  COMBO \xD7"+e[0].c:"NO RECORD YET - FLY!"}}var Eh=[],ih=0,rs=null,_r=0,Os=new ot;{let n=new ir(2.2),e=new j(n,new oe({color:10475775,transparent:!0,opacity:.3,blending:ut,depthWrite:!1}));e.scale.set(1.5,.5,2.4),Os.add(e);let t=new kt(new un(n),new Dn({color:10475775,transparent:!0,opacity:.55}));t.scale.copy(e.scale),Os.add(t),Os.visible=!1,Fe.add(Os)}var nT=!1;function I_(){return"pb_ghost_"+$e+"_"+Hn}function iT(){if(!nT){rs=null,_r=0,Os.visible=!1;return}try{rs=JSON.parse(localStorage.getItem(I_())||"null")}catch{rs=null}_r=0,Os.visible=!1}function Cn(n,e,t){try{let s=qo();s&&s.vibrationActuator&&s.vibrationActuator.playEffect&&s.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:n,weakMagnitude:e})}catch{}}function sT(){let n=0,e=28,t=ri.find(r=>!r.judged)||Jt[Ds]||null;t&&(t.kind==="bar"?t.axis==="row"?(e=$t[(t.idx+1)%3],n=0):(n=on[(t.idx+1)%3],e=28):(n=on[t.cell[0]],e=$t[t.cell[1]]),an&&t.kind==="ring"&&((t.pol|0)&1)!==Ei&&Er(Ei?-1:1));let s=r=>Math.max(-1,Math.min(1,r));return{x:s((n-ke)*.06),y:s((e-De)*.07),boost:1,brake:0}}function rT(){if((cl||Fs)&&dn&&!zn&&!Dt)return sT();let n=0,e=0,t=0,s=0,r=0;(_n.ArrowLeft||_n.KeyA)&&(n-=1),(_n.ArrowRight||_n.KeyD)&&(n+=1),(_n.ArrowUp||_n.KeyW)&&(e+=1),(_n.ArrowDown||_n.KeyS)&&(e-=1),(_n.ShiftLeft||_n.ShiftRight)&&(t=1),_n.Space&&(s=1);let o=qo();if(o){vp=o.id;let a=c=>Math.abs(c)<.12?0:c;n+=a(o.axes[0]||0),e-=a(o.axes[1]||0);let l=c=>o.buttons[c]?o.buttons[c].value:0;t=Math.max(t,l(7)),s=Math.max(s,l(6)),r=Math.max(l(0),l(2))}return{x:Math.max(-1,Math.min(1,n)),y:Math.max(-1,Math.min(1,e)),boost:t,brake:s,fire:r}}var nn={stickMod:1.35,turnRate:17,smooth:.5,rollMod:.85,baseSpeed:33,lateralGain:3.1,boxW:62,boxH:95,invertY:!1,superhot:!0,timeFloor:.02},wn={x:0,y:0,z:0},ke=0,De=22,Di=1,Ls=0,Ep=0,An=0,Dt=!1,$e=1,we=0,nt=1,Ot=0,Bn=1,Ba=0,Yt=!1,hr=0,sh=0,fr=0,bh=!1,Yo=0,Sg=!1,oT=!1,ur=0,N_=0,dr=0,yo=0,Oa=!1,Fa=!1,sn=0,D_=.0026,Tg=.3,aT=52,lT=38.5,cT=56.5,Ag=Math.PI,wg=.7,hT=7,fT=.35,uT=1.6,yr=0,Mr=0,Mo=0,Ns=1,Ha=0,za=25,Hd=null;function dT(){if(Hd)return Hd;let n=qo();if(!n||!n.axes)return{x:0,y:0,z:0};let e=s=>Math.abs(s)<.15?0:(s-Math.sign(s)*.15)/.85,t=s=>!!(n.buttons&&n.buttons[s]&&n.buttons[s].pressed);return{x:e(n.axes[2]||0),y:e(n.axes[3]||0),z:(t(12)?1:0)-(t(13)?1:0)}}var pT=1.6,mT=-1,Oi=0,br=0,zd=0,xo=0,ka=0,zc=0,pr=0,U_=!1,ft=null,kc=Math.random()*6,vo=0,el=0,Gt=0,Fs=location.hash==="#trailer",kd=bi[0].skyA,B_=bi[0].skyB,gT=[0,16,32,45,55,72,100],Fo=document.createElement("canvas");Fo.width=96;Fo.height=512;var Sa=Fo.getContext("2d"),zh=new Un(Fo);zh.colorSpace=ct;zh.minFilter=ln;var Sh=-9;function tl(n){let e=Fo.width,t=Fo.height,s=Sa.createLinearGradient(0,0,0,t);for(let a=0;a<kd.length;a++){let l=kd[a],c=B_[a];s.addColorStop(gT[a]/100,`rgb(${Math.round(l[0]+(c[0]-l[0])*n)},${Math.round(l[1]+(c[1]-l[1])*n)},${Math.round(l[2]+(c[2]-l[2])*n)})`)}Sa.fillStyle=s,Sa.fillRect(0,0,e,t);let r=Sa.getImageData(0,0,e,t),o=r.data;for(let a=0;a<o.length;a+=4){let l=Math.random()*11-5.5|0;o[a]+=l,o[a+1]+=l,o[a+2]+=l}Sa.putImageData(r,0,0),zh.needsUpdate=!0,Sh=n}tl(0);var kh=new j(new We(2,2),new oe({map:zh,depthWrite:!1,depthTest:!1,fog:!1}));kh.position.set(0,0,-120);kh.scale.set(560,320,1);kh.renderOrder=-1;Rt.add(kh);Si.add(Rt);var Rr=[{name:"SWARM",n:46,rMin:3,rMax:32,lenMin:8,lenMax:70,tail:.3,vMin:.8,vMax:2.2},{name:"TRACER",n:24,rMin:5,rMax:26,lenMin:90,lenMax:200,tail:.18,vMin:1,vMax:1.9}],O_=Math.max(...Rr.map(n=>n.n)),F_=location.search.includes("streakdemo"),Hi=(function(){let n=new URLSearchParams(location.search).get("streak");if(n!==null){let t=parseInt(n,10);if(t>=0&&t<=Rr.length)return t}let e=parseInt(localStorage.getItem("pb_streak"),10);return e>=0&&e<=Rr.length?e:1})(),yn=Rr[Math.max(0,Hi-1)],rh=yn.n,bp=[],mr=new Float32Array(O_*2*3),oh=new Float32Array(O_*2*3),Ho=new pt;Ho.setAttribute("position",new ht(mr,3));Ho.setAttribute("color",new ht(oh,3));var Ro=new Dn({color:10479871,transparent:!0,opacity:0,vertexColors:!0,blending:ut,depthWrite:!1,depthTest:!1,fog:!1}),as=new kt(Ho,Ro);as.frustumCulled=!1;as.renderOrder=5;as.visible=!1;Fe.add(as);function Rg(n,e){oh[n]=e,oh[n+1]=e,oh[n+2]=e}var Cg=new Me,_T=15;function yT(n){let e=Math.random()*Math.PI*2,t=yn.rMin+Math.random()*(yn.rMax-yn.rMin);bp[n]={x:Math.cos(e)*t,y:Math.sin(e)*t*.62,z:-30-Math.random()*130,len:yn.lenMin+Math.random()*(yn.lenMax-yn.lenMin),v:yn.vMin+Math.random()*(yn.vMax-yn.vMin)}}function H_(){yn=Rr[Math.max(0,Hi-1)],rh=yn.n,bp.length=0;for(let n=0;n<rh;n++)yT(n);Ho.setDrawRange(0,rh*2),Hi||(as.visible=!1,Ro.opacity=0)}H_();function zo(){wn={x:0,y:0,z:0},ke=0,De=22,Ls=0;for(let e of $n)e.position.z=0;for(let e of rp)e.done=!1;for(let e of Xo)e.position.z=e.userData.z0,e.userData.done=!1;for(let e of Dh)e.position.z=e.userData.z0,e.position.x=e.userData.x0,e.userData.done=!1;for(let e of i_)e.position.set(e.userData.x0,e.userData.y0,e.userData.z0),e.userData.done=!1;ah.position.z=0,Ep=0,An=0,Dt=!1,Ut.position.z=op,we=0,nt=1,Ot=0,Bn=1,Ba=0,Yt=!1,hr=0,sh=0,fr=0,el=0,Gt=0,vo=0,ur=0,N_=0,dr=0,yo=0,Oa=!1,Fa=!1,sn=0,br=0,zd=0,xo=0,ka=0,KS(),jc=0,Oi=0,yr=0,Mr=0,Ns=1,Ha=0,za=25;for(let e of ri)Fe.remove(e.g);ri.length=0,Jt.length=0,ss=!1,Is=0,Ds=0,Ae=0,rn=0,ki=0,oi=0,it=0,Ft=0,Hs=0,bo=0,ph=0,mh=0,Kt=null,Yc=0,Ps=0,cr=0,Kc=0,pr=0,Id=0,Yn=0,$c=0,Jc=0,Da=null,_o=0,nh=0,Ua=0,Ei=0,So=0,Hh();{let e=document.getElementById("polflash");e&&(e.style.opacity=0)}for(let e of Do)e.t=0,e.m&&(e.m.visible=!1);Uo.visible=!1,Bo.visible=!1;for(let e of Ao)e.on=!1,e.g.visible=!1;for(let e of Xa)e.on=!1,e.m.visible=!1;Ia=0,Dd=-1;for(let e of yp)e.el.className="";ft&&(ft.visible=!0,ft.position.set(0,14,Fs?-700:-900));for(let e of Cd)if(e.position.z=e.userData.z0,e.userData.passed=!1,e.userData.hit=!1,e.userData.side=void 0,e.userData.punkGap=void 0,e.userData.pts)for(let t of e.userData.pts)t.done=!1;Rt.fov=66,Rt.updateProjectionMatrix(),Io.strength=.9;let n=document.getElementById("pops");n&&(n.innerHTML="");for(let e of fh)e.opacity=.12;for(let e of uh)e.opacity=.42;ls.material.opacity=.14,Mp.opacity=.5,tl(0),G_()}var zn=!1,Pg=!1,ai=0,MT=()=>[document.getElementById("btnResume"),document.getElementById("btnRestart"),document.getElementById("btnMenu")];function Sp(){zn=!1,document.getElementById("pause").style.display="none",Dt=!1,bh=!1,G_(),zo(),at.stop(),dn=!1,Fe.visible=!1,_p(!1);let n=document.getElementById("start");n&&(n.style.display="flex");let e=document.getElementById("menu");e&&e.querySelectorAll(".lv").forEach(t=>t.classList.toggle("sel",+t.dataset.lv===$e&&!t.dataset.warp)),Ya()}function Th(){MT().forEach((e,t)=>e.classList.toggle("sel",t===ai))}function z_(){ai===0?hs():ai===1?(zo(),at.restart(),zn&&hs()):Sp()}function hs(){!dn||xi&&cl||(zn=!zn,document.getElementById("pause").style.display=zn?"flex":"none",zn?(ai=0,Th(),at.pause(),document.getElementById("dmg").style.opacity=0):at.resume())}var Pn=0,si=0;function Tp(){let n=document.getElementById("menu");return n?[...n.querySelectorAll(".mrow")].map(e=>[...e.querySelectorAll(".mopt")].filter(t=>t.offsetParent!==null)).filter(e=>e.length):[]}function Eo(){let n=Tp();n.forEach(e=>e.forEach(t=>t.classList.remove("cur"))),n.length&&(Pn=Math.max(0,Math.min(n.length-1,Pn)),si=Math.max(0,Math.min(n[Pn].length-1,si)),n[Pn][si].classList.add("cur"))}function k_(n){let e=Tp();if(e.length&&(n.down&&(Pn=(Pn+1)%e.length,si=Math.min(si,e[Pn].length-1),Eo()),n.up&&(Pn=(Pn-1+e.length)%e.length,si=Math.min(si,e[Pn].length-1),Eo()),n.right&&(si=(si+1)%e[Pn].length,Eo()),n.left&&(si=(si-1+e[Pn].length)%e[Pn].length,Eo()),n.a)){let t=e[Pn]&&e[Pn][si];t&&(t.click(),Eo())}}function xT(){let n=qo(),e=!!(n&&n.buttons[9]&&n.buttons[9].pressed),t=e&&!Pg;return Pg=e,t}var Rs={up:!1,down:!1,a:!1,b:!1,left:!1,right:!1,any:!1};function Gc(){let n=qo();if(!n)return{};let e=d=>!!(n.buttons[d]&&n.buttons[d].pressed),t=n.axes[1]||0,s=n.axes[0]||0,r=e(12)||t<-.5,o=e(13)||t>.5,a=e(0),l=e(1),c=e(14)||s<-.5,f=e(15)||s>.5,h=n.buttons.some(d=>d&&d.pressed)||Math.abs(s)>.6||Math.abs(t)>.6,u={up:r&&!Rs.up,down:o&&!Rs.down,a:a&&!Rs.a,b:l&&!Rs.b,left:c&&!Rs.left,right:f&&!Rs.right,any:h&&!Rs.any};return Rs={up:r,down:o,a,b:l,left:c,right:f,any:h},u}document.getElementById("btnResume").addEventListener("click",n=>{n.stopPropagation(),hs()});document.getElementById("btnRestart").addEventListener("click",n=>{n.stopPropagation(),zo(),at.restart(),zn&&hs()});document.getElementById("btnMenu").addEventListener("click",n=>{n.stopPropagation(),Sp()});document.getElementById("btnEndMenu").addEventListener("click",n=>{n.stopPropagation(),Sp()});document.getElementById("btnEndMenu").addEventListener("pointerdown",n=>{n.stopPropagation()});function vT(){at.pause(),Yo=performance.now(),document.getElementById("dmg").style.opacity=0;let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),s=document.getElementById("btnEndRestart"),r=$e<bi.length;e&&(e.textContent=r?"LEVEL "+$e+" CLEARED":"ALL CLEAR"),s&&(s.textContent=r?"NEXT: "+bi[$e].name+" \u2192":"FLY AGAIN");let o=tT(Math.round(we),Lg(),rn);if(Ya(),o===0&&Eh.length>10)try{localStorage.setItem(I_(),JSON.stringify(Eh))}catch{}if(t&&(t.textContent="SCORE "+Math.round(we)+" \xB7 RANK "+Lg()+" \xB7 HITS "+ki+"/"+oi+" \xB7 MAX COMBO "+rn+" \xB7 NEAR MISS "+bo+(mh?" \xB7 KILLS "+mh:"")+(el?" \xB7 BUSTS "+el:"")+" \xB7 TOP SPEED "+Math.round(ph)+(o===0?"   \xB7   \u2605 NEW RECORD \u2605":o>0?"   \xB7   TOP "+(o+1):"")),xi&&cl){fp=!0;try{document.title="E2E-DONE L"+$e+" "+(t?t.textContent:"")+" \xB7 ERRJS "+Wa}catch{}}n.style.display="flex"}function Lg(){let n=oi?ki/oi:0;return n>=.95?"S":n>=.85?"A":n>=.7?"B":n>=.5?"C":"D"}function ET(n,e,t,s){let r=document.createElement("canvas").getContext("2d"),o="bold "+t+'px "Courier New",monospace';r.font=o;let a=Math.ceil(r.measureText(n).width)+4,l=t+6,c=document.createElement("canvas");c.width=a,c.height=l;let f=c.getContext("2d");f.font=o,f.textBaseline="top",f.imageSmoothingEnabled=!1,f.fillStyle="#000";for(let h of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]])f.fillText(n,2+h[0],3+h[1]);return f.fillStyle=e,f.fillText(n,2,3),c.style.imageRendering="pixelated",c.style.width=Math.round(a*s)+"px",c.style.height=Math.round(l*s)+"px",c.style.display="block",c.style.margin="0 auto",c}function gd(n,e,t){Bs&&Oe(n,e,t)}function Oe(n,e,t){let s=document.getElementById("pops");if(!s)return;s.childElementCount>4&&s.firstElementChild.remove();let r=document.createElement("div");r.className="pop"+(t===2?" perfect":t===1?" hit":""),r.appendChild(ET(n,e,t===2?26:t===1?22:17,t===2?2:t===1?1.7:1.55)),r.style.filter="drop-shadow(0 0 "+(t?7:4)+"px "+e+")"+(t?" drop-shadow(0 0 18px "+e+")":""),s.appendChild(r),setTimeout(()=>{r.remove()},900)}function Ap(n){let e=bi[n-1];kd=e.skyA,B_=e.skyB,Zn.material.map.dispose(),Zn.material.map=Ug(e.sun),Zn.material.needsUpdate=!0,ls.material.map.dispose(),ls.material.map=n_(e.glow),ls.material.needsUpdate=!0,zi.material.map.dispose(),zi.material.map=Bg(e.haze),zi.material.needsUpdate=!0,Si.fog.color.setHex(e.fog),Bh.color.setHex(e.ringA!==void 0?e.ringA:Pt),dp.color.setHex(e.ringB!==void 0?e.ringB:Ht),at.setTrack(e.music),Sh=-9,tl(0)}function G_(){let n=document.getElementById("end");n&&(n.style.display="none")}function bT(){at.pause(),Yo=performance.now(),document.getElementById("dmg").style.opacity=0,bh=!0;let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),s=document.getElementById("btnEndRestart");if(e&&(e.textContent="STALLED - CITY GOT YOU"),s&&(s.textContent="RETRY"),t&&(t.textContent="SCORE "+Math.round(we)+"   \xB7   BUSTS "+el+"   \xB7   DISTANCE "+Math.round(Ep)),xi&&cl){fp=!0;try{document.title="E2E-FAIL L"+$e+" STALL sc="+Math.round(we)+" h="+ki+"/"+oi+" err="+Wa}catch{}}n.style.display="flex"}function Ig(){at.pause(),Yo=performance.now();let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),s=document.getElementById("btnEndRestart");e&&(e.textContent="PUNKBUSTER"),t&&(t.textContent="TOO FAST TO STOP"),s&&(s.textContent="REPLAY"),n.style.display="flex"}function nl(){if(bh){bh=!1,zo(),at.restart();return}$e=$e<bi.length?$e+1:1,Ap($e),zo(),at.restart()}document.getElementById("btnEndRestart").addEventListener("click",n=>{n.stopPropagation(),nl()});function _d(n,e,t,s){let r=(e-n)*t;return r>s&&(r=s),r<-s&&(r=-s),n+r}var Cs=0,yi=0,Ta=60;function xr(n){let e=xT();if(dn)e&&(Dt?nl():hs());else{let v=Gc();e?Ko():k_(v)}if(zn){let v=Gc();v.up&&(ai=Math.max(0,ai-1),Th()),v.down&&(ai=Math.min(2,ai+1),Th()),v.a&&z_(),v.b&&hs(),Cs=0,requestAnimationFrame(xr);return}if(Dt){performance.now()-Yo>600&&Gc().any&&nl(),Cs=0,requestAnimationFrame(xr);return}if(!dn){Ut.position.z=-8600,Ut.scale.setScalar(1.35),Ut.position.y=30*.35;for(let v of fh)v.opacity=.5;for(let v of uh)v.opacity=.88;ls.material.opacity=.5,Zn.scale.setScalar(2.2),Zn.position.y=-560,Math.abs(.85-Sh)>.004&&tl(.85),Rt.position.set(0,16,46),Rt.lookAt(0,40,-90),Cs=0,vi.info.reset(),Ka.render(),requestAnimationFrame(xr);return}if(!Rd){Cs=n,requestAnimationFrame(xr);return}let t=Cs?n-Cs:16.7,s=Cs?Math.min(3,t/33.37):1;Cs=n,yi+=s/30,qc++,xi&&dn&&(Ca+=Math.min(50,t)*md),Ta+=(1e3/Math.max(1,t)-Ta)*.06;let r=rT(),o=nn.invertY?-r.y:r.y;if(wa){let v=s*.03337;if(Ua=Math.max(0,Ua-v),Math.hypot(r.x,r.y)>JS){let F=Math.atan2(r.y,r.x);if(Da!==null){let H=F-Da;for(;H>Math.PI;)H-=2*Math.PI;for(;H<-Math.PI;)H+=2*Math.PI;_o+=H,nh=jS}Da=F}else Da=null;nh-=v,nh<=0&&(_o=0),Math.abs(_o)>=Math.PI*2&&Ua<=0&&Yn<=0&&dn&&!zn&&!Dt&&(Yn=1,Zc=Math.sign(_o),_o=0,Ua=QS,Cn(.3,.35,140))}let a=Math.max(Math.abs(r.x),Math.abs(r.y),r.boost,r.brake),l=nn.superhot?nn.timeFloor+(1-nn.timeFloor)*Math.min(1,a/.25):1;Di+=(l-Di)*.25;let c=s*Di*md;at.setEnergy(Di);let f=nn.turnRate*s,h=1-Math.pow(1-nn.smooth,s);wn.y=_d(wn.y,r.x*nn.stickMod,h,f),wn.x=_d(wn.x,o*nn.stickMod,h,f),wn.z=_d(wn.z,r.x*nn.rollMod,.12,5*s);{let v=ke/aT,w=(De-lT)/cT,F=Math.min(1,Math.hypot(v,w)),H=Math.atan2(v,-w)*57.2958,P=mT*H*Math.pow(F,pT)-Oi;for(;P>180;)P-=360;for(;P<-180;)P+=360;let O=9*s;for(Oi+=Math.max(-O,Math.min(O,P*.12));Oi>180;)Oi-=360;for(;Oi<-180;)Oi+=360}Ls+=(r.boost-Ls)*(1-Math.exp(-.0821*s));let u=wn.y*po,d=wn.x*po,p=nn.baseSpeed*(1+Ls*.45-r.brake*.5)*Bn*(Yt?1.22:1),_=Math.sin(u)*Math.cos(d)*p*nn.lateralGain,y=Math.sin(d)*p*nn.lateralGain,g=Math.cos(u)*Math.cos(d)*p;if(ke+=_*c,De+=y*c,ke=Math.max(-nn.boxW,Math.min(nn.boxW,ke)),De=Math.max(-18,Math.min(nn.boxH,De)),Fn.position.set(ke,De,0),Yn=Math.max(0,Yn-s*(an?.11:.045)),qa=Math.max(0,qa-s*.14),To<1){To=Math.min(1,To+s*.09);for(let v of Ar)v.m.color.copy(v.from).lerp(v.to,To)}if(an&&So>0){So=Math.max(0,So-s*.11);let v=document.getElementById("polflash");v&&(v.style.background="radial-gradient(ellipse at center, transparent 42%, "+hg[Ei]+" 140%)",v.style.opacity=(So*.3).toFixed(3))}{let v=qo();if(v&&v.buttons){let w=!!(v.buttons[4]&&v.buttons[4].pressed),F=!!(v.buttons[5]&&v.buttons[5].pressed);w&&!Eg&&Er(-1),F&&!bg&&Er(1),Eg=w,bg=F}}Ln===0&&(ba*=Math.max(0,1-s*2)),Fn.rotation.set(wn.x*po+ba,wn.y*po,-(wn.z+Oi)*po+(Yn>0?Zc*(1-Yn)*Math.PI*2:0)),$c>0&&($c-=s/30,De+=((Jc>0?-12:82)-De)*Math.min(1,c*.05));let m=.7+.3*Math.sin(yi*18);for(let v=0;v<Oo.length;v++){let w=Oo[v],F=v+1;w.position.set(ke-Math.sin(u)*F*1.3,De+.2,2.6+F*1.35),w.lookAt(Rt.position);let H=(1.2-v*.08)*(.7+.6*a)*m*(Yt?1.5:1)*(1+Math.min(.5,Ae*.02));w.scale.set(H,H,H),w.material.opacity=(.5-v*.045)*(.3+.9*Math.min(1,a*1.4))}let x=g*c,M=Math.min(.1,t/1e3);r.boost>.5&&Bn>.9&&Di>.8?(hr=Math.min(1.4,hr+M),sh=.9):hr>=1.2&&sh>0?sh-=M:hr=Math.max(0,hr-M*2.2),Ft=Math.max(0,Ft-M),Yt=hr>=1.2||Ft>0,Di>.6&&r.boost<.4&&!Dt?fr+=M*(r.brake>.3?1.6:1):fr=Math.max(0,fr-M*2),fr>2.6&&!Dt&&(Dt=!0,bT()),at.setRedline(Yt),Gc(),nt=1+Math.min(7,Ae*.12),r.boost>.5&&Di>.8&&(it=Math.min(1,it+M*.012)),ph=Math.max(ph,p*Di),we+=x*.004*nt*(Yt?1.3:1),Ot=Math.max(0,Ot-M),Ba=Math.max(0,Ba-M),dr=Math.max(0,dr-M),yo=Math.max(0,yo-M),od-=M,od<=0&&!Mi&&(od=2,Ta<48&&Bi<2.6?(Bi=Math.min(2.6,Bi+.15),Za()):Ta>58&&Bi>1.85&&(Bi=Math.max(1.85,Bi-.1),Za())),Ot>.65&&(N_=0,ur=0),Bn+=(1-Bn)*Math.min(1,M*1.6);for(let v=0;v<wr;v++)hd[v]=$n[v].position.z,fd[v]=hd[v]+x;for(let v of rp){let w=v.z0+hd[v.k],F=v.z0+fd[v.k];if(w<=0&&F>0&&!v.done){v.done=!0;let H=Math.abs(ke-v.x);if(Sg&&H>=v.hw-2&&H<v.hw+14&&De<v.top&&dr<=0){let $=Yn>0;dr=.5,it=Math.min(1,it+($?.06:.02)),we+=$?120:40,bo++,xo=ke>v.x?-.09:.09,$?Oe("ROLL MISS  +120","#c78bff"):bo%3===1&&Oe("NEAR MISS  +40","#2af0ff")}}}for(let v=0;v<wr;v++){let w=fd[v];if($n[v].userData.minZ+w>90){w-=$a;for(let F of wd[v])F.done=!1}$n[v].position.z=w}for(let v of Xo){let w=v.position.z,F=w+x,H=v.userData;if(w<=0&&F>0&&!H.done){H.done=!0;let $=Math.abs(ke-v.position.x);if(Sg&&$>=H.hw-2&&$<H.hw+14&&De<H.top&&dr<=0){let P=Yn>0;dr=.5,it=Math.min(1,it+(P?.06:.02)),we+=P?120:40,bo++,xo=ke>v.position.x?-.09:.09,P?Oe("ROLL MISS  +120","#c78bff"):bo%3===1&&Oe("NEAR MISS  +40","#2af0ff")}}F>90?(v.position.z=F-$a,H.done=!1):v.position.z=F}for(let v of Dh){let w=v.position.z,F=w+x*(1-v.userData.v);if(w<=0&&F>0&&!v.userData.done&&(v.userData.done=!0,oT&&Math.abs(ke-v.position.x)<10&&De<-8&&Ba<=0)){Ba=1.5;let H=Ae;Ae+=1,rn=Math.max(rn,Ae),mo(H),we+=200,Oe("LOW PASS  +200","#ffd24a")}F>60?(v.position.z=F-dS,v.position.x=hp[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,v.userData.done=!1):v.position.z=F}for(let v of i_){let w=v.userData,F=v.position.z,H=F+x+w.own*c;if(F<=0&&H>0&&!w.done){w.done=!0;let $=w.rx||5,P=w.ry||4,O=Math.abs(ke-v.position.x),J=Math.abs(De-(v.position.y+(w.cy||0)));if(O<$+2&&J<P+2.5)Ot=1,Bn=.4,Ae=0,we=Math.max(0,we-500),Ls=0,Oe("MIDAIR CRASH  -500","#ff4a5a");else if(O<$+13&&J<P+9){let ee=Ae;if(w.oncoming)we+=250,Ae+=3,Oe("HEAD-ON PASS  +250","#ff8a5a");else{let ce=Math.round(120*nt);we+=ce,Ae+=2,Oe("OVERTAKE  +"+ce,"#c0ff5e")}rn=Math.max(rn,Ae),mo(ee)}}if(v.position.z=H,w.strobeA){let $=(yi*5|0)%2===0;w.strobeA.visible=$,w.strobeB.visible=!$}H>80?(v.position.z=H-ud-Math.random()*400,v.position.x=(w.oncoming?-1:1)*(6+Math.random()*24),v.position.y=-12+Math.random()*55,w.done=!1):H<-ud-800&&(v.position.z=H+ud,w.done=!1)}if(ah.position.z=(ah.position.z+x)%46,ft)if(vo>0)vo-=M,vo<=0&&(Fe.remove(ft),ft=null,r_(-1800));else{let v=-10+Math.min(26,Ae*1.1)+(Yt?8:0)+it*10-2.5*($e-1)-.5*Math.min(3,ur)+(Kt&&Kt.mode==="pursuit"?7:0)+(Kt&&Kt.mode==="climax"?13:0)-Lo[Hn].punk;ft.position.z+=v*c*.55,ft.position.z<-2900&&(ft.position.z=-2900),ft.position.z>-6&&(ft.position.z=-6),kc+=c*.02;let w=null;for(let H of Cd){let $=H.userData;if($.type!=="gate"&&$.type!=="fork")continue;let P=ft.position.z-H.position.z;if(P>0&&P<600){if($.punkGap===void 0&&($.punkGap=Math.random()<.5?0:1),$.type==="gate"){let O=$.gaps[$.punkGap];w=(O.x0+O.x1)/2}else w=$.punkGap===0?-26:40;break}}w!==null?ft.position.x+=(w-ft.position.x)*Math.min(1,c*.08):ft.position.x=Math.sin(kc*1.7)*26,ft.position.y=12+Math.sin(kc*1.13)*10,ft.rotation.z=Math.sin(kc*1.7)*.25;let F=-ft.position.z;if(!Fs&&!Dt&&yo<=0&&(F<420&&!Oa?(Oa=!0,Fa=!1,yo=6,Oe("HE'S RIGHT THERE - FLOOR IT!","#ff2bd6")):F>2400&&!Fa&&(Fa=!0,Oa=!1,yo=6,Oe("DON'T LOSE HIM!","#ff2bd6"))),F>=420&&F<=2400&&(Oa=!1,Fa=!1),F<30&&Math.abs(ke-ft.position.x)<22){ur++;let H=Math.round(2e3*nt*(1+.5*(ur-1)));we+=H;let $=Ae;Ae+=8,rn=Math.max(rn,Ae),mo($),el++,Gt=1,sn=12,Cn(1,.7,380),Oe((ur>1?"BUST x"+ur+"!":"BUSTED!")+"  +"+H,"#2af0ff"),ft.visible=!1,vo=2,Fs&&(Dt=!0,Ig())}else F>3200&&(we=Math.max(0,we-800),Oe("PUNK ESCAPED  -800","#ff5a5f"),ft.position.z=-1600)}if(Gt=Math.max(0,Gt-M*1.6),!ss&&dn&&at.time()>.5&&at.duration()>10&&WS(),ss&&dn&&!Ra){let v=-1;Ld>0?v=Ld:(vS||l_)&&(v=ES()),v<0?Ra=!0:Math.abs(at.time()-v)<3?(Ra=!0,Oe("WARP: FINALE","#c78bff")):(Xc+=M,Xc>6?(Ra=!0,Oe("WARP FEHLGESCHLAGEN - VON VORN","#ff5a5f")):(Xc===M||qc%30===0)&&at.seek(v))}if(ss){let v=at.time()+MS/1e3,w=Lo[Hn].tol;for(it>=1&&Ft<=0&&(Ft=6,it=0,Oe("\u2605 OVERDRIVE \u2605","#ffd24a"),sn=10,Cn(.8,.6,320));Is<Jt.length&&(Jt[Is].t-v)*1e3*dd<Uh;){let P=Jt[Is];if(!Aa){Is++;continue}let O=P.kind==="gate"?US(P.cell):P.kind==="bar"?VS(P.axis,P.idx):LS(P.cell,P.pol);ri.push({t:P.t,cell:P.cell,kind:P.kind||"ring",axis:P.axis,idx:P.idx,pol:P.pol|0,g:O,judged:(P.t-v)*1e3<-60}),Is++}if(gp.opacity=.38+.25*Math.sin(yi*12),gr&&Ui.length){for(Uo.visible=dn,Bo.visible=dn;Pa<Ui.length-1&&Ui[Pa+1].t<v-.5;)Pa++;let P=hl.attributes.position,O=Fh.attributes.position,J=Pa,ee=0,ce=0;for(let ye=0;ye<zs;ye++){let ve=8-ye*44,me=v-ve/(1e3*dd);for(;J<Ui.length-1&&Ui[J+1].t<me;)J++;let Ue=Ui[Math.min(J,Ui.length-1)],G=Ui[Math.min(J+1,Ui.length-1)],bt=-6+TS(Math.max(0,me))*68,Ee,Le=G.t>Ue.t?Math.max(0,Math.min(1,(me-Ue.t)/(G.t-Ue.t))):0,xe=Le*Le*(3-2*Le);Ee=Ue.x+(G.x-Ue.x)*xe;let St=Math.min(Math.abs(me-Ue.t),Math.abs(me-G.t)),He=Math.max(0,1-St/.4),C=He*He*(3-2*He),S=Math.abs(me-Ue.t)<=Math.abs(me-G.t)?Ue.y:G.y;bt+=(S-bt)*C,ye===0&&(ee=Ee,ce=bt),P.setXYZ(ye*2,Ee-ug,bt,ve),P.setXYZ(ye*2+1,Ee+ug,bt,ve),O.setXYZ(ye,Ee,bt+.15,ve)}if(P.needsUpdate=!0,O.needsUpdate=!0,!Dt&&Math.abs(De-ce)<9&&Math.abs(ke-ee)<15){if(lr+=M,it<1&&(it=Math.min(1,it+M*.012)),lr>3){lr=0;let ye=Ae;Ae+=2,rn=Math.max(rn,Ae),mo(ye),we+=150,it=Math.min(1,it+.06),Oe("FLOW RIDE  +150","#9ff8ff"),Cn(.25,.5,140)}}else lr=0;Ud.opacity=(lr>0?.58:.4)+(Ft>0?.12:0),Ud.color.setHex(Ft>0?16766826:lr>0?10483967:2814207),T_.color.setHex(Ft>0?16771496:12450559)}else Uo.visible=!1,Bo.visible=!1;if(ih-=M,ih<=0&&(ih=.15,Eh.push([Math.round(v*100)/100,Math.round(ke),Math.round(De)])),rs&&rs.length>1){for(;_r<rs.length-2&&rs[_r+1][0]<v;)_r++;let P=rs[_r],O=rs[_r+1],J=Math.max(0,Math.min(1,(v-P[0])/Math.max(.01,O[0]-P[0])));Os.visible=!0,Os.position.set(P[1]+(O[1]-P[1])*J,P[2]+(O[2]-P[2])*J,-14)}for(let P of Do){if(P.t<=0)continue;P.t-=M*3.2;let O=(1+(1-Math.max(0,P.t))*1.7)*(P.mag||1);P.m.scale.set(O,O,1),P.m.material.opacity=Math.max(0,P.t)*.9,P.t<=0&&(P.m.visible=!1)}for(let P=ri.length-1;P>=0;P--){let O=ri[P],J=(O.t-v)*1e3;if(O.g.position.z=-J*dd,O.kind==="ring"){O.g.rotation.z+=.04*c;let ee=J<700;if(an){let ye=(O.pol|0)&1;O.g.children[1].material=ee?g_[ye]:pp[ye]}else O.g.children[0].material=ee?f_:up,O.g.children[1].material=ee?dp:Bh;let ce=1+Math.max(0,(500-Math.abs(J))/500)*(an?.45:.3);O.g.scale.set(ce,ce,1)}if(!O.judged&&J<=60)if(O.judged=!0,O.kind==="gate"){let ee=Math.abs(ke-on[O.cell[0]]),ce=Math.abs(De-$t[O.cell[1]]);if(ee<26*w&&ce<18*w){let ye=Ae;Ae+=2,rn=Math.max(rn,Ae),ki++,mo(ye),it=Math.min(1,it+.08);let ve=Math.round(350*(1+Ae*.06)*(Ft>0?2:1));we+=ve,La(on[O.cell[0]],$t[O.cell[1]],8060826),Oe("GATE  +"+ve,"#7aff9a",1),Gt=Math.max(Gt,.22)}else Ae=0,it=Math.max(0,it-.15),we=Math.max(0,we-300),Oe("GATE SLAM  -300","#ff5a5f"),Ot=Math.max(Ot,.5),Bn=.6,Cn(.9,.5,220)}else if(O.kind==="bar")if(O.axis==="row"?Math.abs(De-$t[O.idx])<17/w:Math.abs(ke-on[O.idx])<24/w)Ae=0,it=Math.max(0,it-.1),we=Math.max(0,we-200),Oe("BAR HIT  -200","#ff5a5f"),Ot=Math.max(Ot,.45),Cn(.85,.5,200);else{ki++;let ce=Math.round(60*(Ft>0?2:1));we+=ce,it=Math.min(1,it+.03),Oe("DODGE  +"+ce,"#9ad0ff")}else{let ee=Math.abs(ke-on[O.cell[0]]),ce=Math.abs(De-$t[O.cell[1]]),ye=ee<26*w&&ce<18*w,ve=ee<13*w&&ce<9*w,me=!ye&&Yn>0&&ee<26*w+52&&ce<18*w,Ue=!an||((O.pol|0)&1)===Ei;if((ye||me)&&!Ue){ki++;let G=Math.round(70*(1+Ae*.04)*(Ft>0?2:1));we+=G,Hn===2&&(Ae=0),O.g.visible=!1,La(on[O.cell[0]],$t[O.cell[1]],9076661,.8),gd("MISMATCH  +"+G+"   (ROLL!)","#c78bff"),Bs&&Cn(.35,.35,90)}else if(ye||me){let G=Ae;Ae++,rn=Math.max(rn,Ae),ki++,mo(G),it=Math.min(1,it+(ve?.09:.05));let bt=Math.round((ve?300:me?120:150)*(1+Ae*.06)*(Ft>0?2:1));we+=bt,O.g.visible=!1;let Ee=an?gh[(O.pol|0)&1]:Pt;La(on[O.cell[0]],$t[O.cell[1]],me?13077503:Ee,(ve?1.25:1)+Math.min(1,Ae*.03)),gd((me?"ROLL SWEEP":ve?"PERFECT":"GOOD")+"  +"+bt+(Ae>4?"   x"+Ae:""),me?"#c78bff":ve?"#ff2bd6":"#2af0ff",ve?2:1),Bs&&Cn(ve?.5:.22,.3,60),ve&&(Gt=Math.max(Gt,.18),sn=Math.max(sn,2.5))}else Ln===1||Ln===2||(Ae=0,it=Math.max(0,it-.15),we=Math.max(0,we-100),gd("MISS  -100","#ff5a5f"),Bs&&(Ot=Math.max(Ot,.25),Cn(.7,.4,160)))}J<-400&&(Fe.remove(O.g),ri.splice(P,1))}for(;Ds<Jt.length&&Jt[Ds].t<v;)Ds++;let F=Jt[Ds],H=Jt[Ds+1];for(let P of yp){let O="";if(F&&(F.kind==="bar"?(F.axis==="row"&&P.r===F.idx||F.axis==="col"&&P.c===F.idx)&&(O="nb"):P.c===F.cell[0]&&P.r===F.cell[1]&&(O="nx")),!O&&H&&H.kind!=="bar"&&P.c===H.cell[0]&&P.r===H.cell[1]&&(O="n2"),P.el.className=O,an){let J=O==="nx"?F:O==="n2"?H:null;if(J&&J.kind==="ring"){let ee=hg[(J.pol|0)&1];P.el.style.borderColor=ee,P.el.style.background=O==="nx"?"rgba(255,255,255,.13)":"rgba(255,255,255,.05)",P.el.style.boxShadow="0 0 "+(O==="nx"?16:8)+"px "+ee}else P.el.style.borderColor="",P.el.style.background="",P.el.style.boxShadow=""}}if(a_)for(let P of ja){let O=F&&F.kind!=="bar"&&P.cx===F.cell[0]&&P.cy===F.cell[1],J=H&&H.kind!=="bar"&&P.cx===H.cell[0]&&P.cy===H.cell[1];P.m.material.opacity=O?.5+.25*Math.sin(yi*14):J?.22:Ft>0?.16:.07;let ee=an&&O&&F.kind==="ring"?gh[(F.pol|0)&1]:null;P.m.material.color.setHex(Ft>0?16765514:ee!==null?ee:O?Ht:2814207)}{let P=60/(or[$e]||120),O=(v-(ar[$e]||0))/P,J=(O%1+1)%1;if(Bd){let ce=document.getElementById("grid9");ce&&(ce.style.opacity=(.65+.3*(1-J)).toFixed(2))}let ee=(O/4%1+1)%1;cg=Math.max(0,1-ee*5)*.07}{let P=null;if(os){for(let O of os)if(v>=O.t0&&v<O.t1){P=O;break}}P!==Kt&&(Kt=P,P&&P.turn&&(Kc+=P.turn*Math.PI/2,Oe(P.turn>0?"HARD RIGHT!":"HARD LEFT!","#ff8a3c"),sn=Math.max(sn,8),Yn=1,Zc=P.turn>0?1:-1),P&&P.dive&&(Jc=P.dive,$c=1.4,Oe(Jc>0?"DIVE!":"CLIMB!","#9ad0ff"),sn=Math.max(sn,7)),P&&P.label&&Oe(P.label,P.mode==="combat"?"#ff5a5f":"#ffd24a"))}if(Mh&&Kt&&(Kt.mode==="combat"||Kt.mode==="climax"&&$e>=3)){let P=Kt.mode==="climax",O=60/(or[$e]||120),J=Math.floor((v-(ar[$e]||0))/O);if(J!==Dd&&J%(P?4:Hn===2?1:2)===0){Dd=J;let ee=Ao.find(ce=>!ce.on);ee&&(ee.on=!0,ee.type=$e>=3&&Math.random()<.3?"heavy":Math.random()<.4?"sweeper":"drone",ee.hp=ee.type==="heavy"?3:1,ee.cx=Math.random()*3|0,ee.cy=Math.random()*3|0,ee.g.position.set(on[ee.cx],$t[ee.cy],-880),ee.g.scale.setScalar(ee.type==="heavy"?1.7:1),ee.body.material=ee.type==="heavy"?Nd.h:Nd.d,ee.g.visible=!0)}}for(let P of Ao)P.on&&(P.ph+=c*.05,P.g.position.z+=2.4*c,P.g.rotation.y+=.06*c,P.type==="sweeper"&&(P.g.position.x=on[P.cx]+Math.sin(P.ph)*34),P.g.position.z>-40&&(P.on=!1,P.g.visible=!1));if(Ia=Math.max(0,Ia-M*Math.max(.25,Di)),Mh&&(_n.KeyX||Oh||r.fire>.5)&&Ia<=0&&!Dt){Ia=.14;let P=Xa.find(O=>!O.on);if(P){let O=60/(or[$e]||120),J=((v-(ar[$e]||0))/O%1+1)%1;P.on=!0,P.onBeat=J<.12||J>.88,P.m.position.set(ke,De,-6),P.m.visible=!0}}for(let P of Xa){if(!P.on)continue;let O=P.m.position.z;if(P.m.position.z-=30*c,P.m.position.z<-940){P.on=!1,P.m.visible=!1;continue}for(let J of Ao)if(J.on&&Math.abs(P.m.position.x-J.g.position.x)<15&&Math.abs(P.m.position.y-J.g.position.y)<13&&J.g.position.z>P.m.position.z-28&&J.g.position.z<O+28){if(P.on=!1,P.m.visible=!1,J.hp-=P.onBeat?2:1,J.hp<=0){J.on=!1,J.g.visible=!1,mh++,La(J.g.position.x,J.g.position.y,16765514);let ee=Math.round((J.type==="heavy"?400:150)*(P.onBeat?2:1)*(Ft>0?2:1));we+=ee,it=Math.min(1,it+.05),Ae++,rn=Math.max(rn,Ae),Oe((P.onBeat?"BEAT KILL":"KILL")+"  +"+ee,P.onBeat?"#ffd24a":"#c0ff5e"),Gt=Math.max(Gt,.15)}else Oe("HIT","#9ad0ff");break}}}for(let v of Cd){let w=v.userData,F=v.position.z,H=F+x;if(v.position.z=H,H-w.len>200&&(v.position.z=H-yS,w.passed=!1,w.hit=!1,w.punkGap=void 0,w.side=void 0,w.pts))for(let $ of w.pts)$.done=!1;if(!Fs)if(w.type==="gate"){if(F<=0&&H>0&&!w.passed){w.passed=!0;let $=w.gaps.find(P=>ke>P.x0+2.5&&ke<P.x1-2.5);if(De<w.top+1&&!$)Ot=1,Bn=.35,nt=1,we=Math.max(0,we-800),Ls=0,Oe("GATE CRASH  -800","#ff4a5a");else if(De<w.top+1&&$&&$.narrow){let P=Math.round(300*nt*(Yt?1.5:1));nt=Math.min(8,nt+.8),we+=P,Gt=Math.max(Gt,.3),Oe("THREAD THE NEEDLE  +"+P,"#ff2bd6")}}}else if(w.type==="scurve"){if(F<=0&&H>0&&!w.passed&&(w.passed=!0,De<w.top+1&&ke<w.g1+2&&(Ot=1,Bn=.4,nt=1,we=Math.max(0,we-600),Oe("WALL  -600","#ff4a5a"))),F-w.len<=0&&H-w.len>0&&!w.hit){if(w.hit=!0,De<w.top+1&&ke>w.g2-2)Ot=1,Bn=.4,nt=1,we=Math.max(0,we-600),Oe("WALL  -600","#ff4a5a");else if(De<w.top+1){let $=Math.round(220*nt*(Yt?1.5:1));nt=Math.min(8,nt+.5),we+=$,Oe("S-LINE  +"+$,"#c0ff5e")}}}else if(w.type==="bridge"){if(F<=0&&H>0&&!w.passed){if(w.passed=!0,De>w.yLow-1&&De<w.yHigh+1)Ot=.9,Bn=.45,nt=Math.max(1,nt-2),we=Math.max(0,we-400),Oe("BRIDGE SLAM  -400","#ff4a5a");else if(De<=w.yLow-1){let $=Math.round(250*nt*(Yt?1.5:1));nt=Math.min(8,nt+.5),we+=$,Gt=Math.max(Gt,.25),Oe("UNDERPASS  +"+$,"#ffd24a")}}}else if(w.type==="fork"){let $=v.position.z>0&&v.position.z-w.len<0,P=v.position.z>0&&v.position.z-w.lenL<0;if(F<=0&&H>0&&!w.passed&&(w.passed=!0,w.side=De<w.top+1?ke<0?"L":"R":null),$&&De<w.top+1&&!w.hit&&(Math.abs(ke)<w.divH+3||P&&ke<w.lXin-2||ke>w.rXout+2)&&(w.hit=!0,Ot=.9,Bn=.45,nt=Math.max(1,nt-2),we=Math.max(0,we-500),Oe("FORK CRASH  -500","#ff4a5a")),F-w.lenL<=0&&H-w.lenL>0&&w.side==="L"&&De<w.top+1&&!w.hit){let O=Math.round(350*nt*(Yt?1.5:1));nt=Math.min(8,nt+.8),we+=O,Gt=Math.max(Gt,.3),Oe("SHORTCUT  +"+O,"#ff2bd6")}if(F-w.len<=0&&H-w.len>0&&w.side==="R"&&De<w.top+1&&!w.hit){let O=Math.round(120*nt*(Yt?1.5:1));nt=Math.min(8,nt+.3),we+=O,Oe("SAFE LINE  +"+O,"#2af0ff")}}else if(w.type==="slalom")for(let $ of w.pts){let P=F+$.z,O=H+$.z;if(P<=0&&O>0&&!$.done){$.done=!0;let J=Math.abs(ke-$.x);if(J<8&&De<90)Ot=.7,Bn=.55,nt=Math.max(1,nt-1.5),we=Math.max(0,we-300),Oe("PYLON  -300","#ff4a5a");else if(J<20&&De<90){let ee=Math.round(120*nt*(Yt?1.5:1));nt=Math.min(8,nt+.25),we+=ee,Oe("SLALOM  +"+ee,"#2af0ff")}}}else{let $=v.position.z>0&&v.position.z-w.len<0;$&&!w.hit&&(Math.abs(ke)>w.xLim||w.yLim!==void 0&&De>w.yLim)&&(w.hit=!0,Ot=.8,Bn=.5,nt=Math.max(1,nt-2),we=Math.max(0,we-400),Oe("WALL SCRAPE  -400","#ff4a5a")),$||(w.hit=!1)}}Wo.offset.y+=x/eS,Vo.offset.y+=x/150,Va.position.z=(Va.position.z+x)%90,jd.position.z=Va.position.z;for(let v of Qd)v.position.z+=x*v.userData.rel,v.position.z>60&&(v.position.z-=5900),v.position.z<-5900&&(v.position.z+=5900);for(let v of Po)v.position.z+=x,v.position.z>300&&(v.position.z-=jg);for(let v of Jg)v.rotation.z+=v.userData.spin*c*.03;for(let v of ep)v.position.x+=v.userData.vx*c*2,v.position.z+=x,v.position.x>1400&&(v.position.x=-1400),v.position.x<-1400&&(v.position.x=1400),v.position.z>-400&&(v.position.z-=3400);for(let v of Ad)v.rotation.y+=.05*c;for(let v of tp)v.position.z+=x,v.position.z>200&&(v.position.z-=6300),v.rotation.z=Math.sin(yi*v.userData.sp+v.userData.ph)*.45;for(let v of Ih)v.position.z+=x,v.position.z>100&&(v.position.z-=6e3);for(let v of qg)v.position.z+=x,v.position.z>40&&(v.position.z-=6080);for(let v of ip)v.position.z+=x,v.position.z>60&&(v.position.z-=6200);for(let v of sp)v.position.z+=x,v.position.z>80&&(v.position.z-=6e3);Ep+=x,An=Math.min(1,Hs>0?at.time()/Hs:0),Ut.position.z=Math.min(-6600,op*(1-An));let I=1+An*1.25;Ut.scale.set(I,I,I),Ut.position.y=30*(I-1);{let v=(Kt&&Kt.curve||0)+(Kt&&Kt.weave?Math.sin(at.time()*.85)*Kt.weave:0);Ps+=(v-Ps)*Math.min(1,M*.9),cr+=(Kc-cr)*Math.min(1,M*2);let w=16800;pr+=((Kc-cr)*1.5-pr)*Math.min(1,M*8),Zn.position.x=-Math.sin(cr)*w-Ps*3200,Zn.position.z=-Math.cos(cr)*w,Zn.rotation.y=cr,Ut.rotation.y=pr*.8,Ut.position.x=-Ps*2600,zi.rotation.y=pr*.8,zi.position.x=-Ps*1300,zi.position.z=-6e3}let R=An*An;for(let v of fh)v.opacity=.12+.88*R;for(let v of uh)v.opacity=.42+.55*An;if(ls.material.opacity=.14+.5*Math.pow(An,1)+cg,Mp.opacity=.5*(1-An*.92),Math.abs(An-Sh)>.004&&tl(An),Fs&&!Dt&&ss&&at.time()>28&&(Dt=!0,Ig()),ss&&Jt.length&&Is>=Jt.length&&ri.length===0?(Yc+=M,Yc>2&&(Dt=!0,vT())):Yc=0,ol.position.x=ke*.04,jc+=((Ln>=2?1:0)-jc)*Math.min(1,s*2),Qa&&Ln===0&&ss&&os&&!Dt){let v=os.find(w=>w.tower);if(v){let w=at.time();if(In.visible){let F=Math.max(0,Math.min(1,w/Math.max(1,v.t0-9)));In.position.z=-16e3+F*8800}w>=v.t0-9&&w<v.t1-2&&YS()}}if(Ln>0)if(wo+=M*md,Ln===1){let v=Math.min(1,wo/5),w=v*(2-v);In.position.z=-7200+w*7350,v>=1&&(Ln=2,wo=0,vh(!1),Ut.visible=!1,zi.visible=!1,sn=Math.max(sn,12),zc=1,Oe("GO VERTICAL!","#ffd24a"),Cn(.9,.9,450))}else if(Ln===2){let v=Math.min(1,wo/3.6),w=v*v*(3-2*v);if(In.rotation.x=-w*Math.PI/2,In.position.y=-30+Math.pow(w,3)*10,eh=-Math.sin(w*Math.PI)*.62,th=Math.sin(w*Math.PI)*9,ba=-Math.sin(w*Math.PI)*.9-w*.22,De+=(30-De)*Math.min(1,s*.9),at.setEnergy(1-Math.sin(w*Math.PI)*.9),v>=1){Ln=3,eh=0,th=0;for(let F of ja)F.m.visible=F.cy===0}}else{In.position.z+=x,ba+=(-.24-ba)*Math.min(1,s*2),(qc&63)===0&&vh(!1);let v=60/(or[$e]||120),w=Math.floor((at.time()-(ar[$e]||0))/v);Na<0?Na=w+8:w>=Na&&(Na=w+8,Qc=(Qc+1)%4,xo=(Qc%2?1:-1)*.14,sn=Math.max(sn,8),Oe("EDGE TURN!","#ff8a3c"),Cn(.5,.5,220))}let L=(a*.6+Ot*4+(Yt?.35:0))*xS,D=(ke-zd)/Math.max(.001,s);zd=ke,br+=(D-br)*Math.min(1,s*6),ka+=((Ft>0?1:0)-ka)*Math.min(1,s*3),zc=Math.max(0,zc-s*1.4);let E=1-Math.exp(-8.37*M);Ha+=(ke*.45+Ps*12+(Math.random()-.5)*L-Ha)*E,za+=(De*.4+16-Math.sin(zc*Math.PI)*5+(Math.random()-.5)*L-za)*E;let T=46-Ls*5-(Yt?3:0)+ka*7+th;Rt.position.set(Ha,za,T);{let v=dT(),w=1-Math.exp(-hT*M);yr+=(v.x*Ag-yr)*w,Mr+=(-v.y*wg-Mr)*w;let F=v.z>0?fT:v.z<0?uT:1;if(Ns+=(F-Ns)*w,Math.abs(yr)>5e-4||Math.abs(Mr)>5e-4||Math.abs(Ns-1)>.002){let H=ke,$=De+.2,P=Ha-H,O=T,J=Math.hypot(P,O)*Ns,ee=Math.atan2(P,O)+yr;Rt.position.x=H+Math.sin(ee)*J,Rt.position.z=Math.cos(ee)*J,Rt.position.y=$+(za-$)*Ns+Math.sin(Mr)*J*.55,Mo=Math.min(1,Math.hypot(yr/Ag,Mr/wg)+Math.abs(Ns-1))}else Mo=0}let k=at.time(),K=60/(or[$e]||120),ne=((k-(ar[$e]||0))/K%1+1)%1,B=66+Ls*4+(Yt?12:0)+sn+ka*(4+Math.pow(1-ne,3)*2.2);if(sn+=(0-sn)*Math.min(1,M*5),Math.abs(Rt.fov-B)>.05&&(Rt.fov+=(B-Rt.fov)*(1-Math.exp(-4*M)),Rt.updateProjectionMatrix()),Io.strength+=((Yt?1.25:.9)-Io.strength)*(1-Math.exp(-4*M)),!Hi)as.visible=!1;else if(Ro.opacity+=((F_||Yt?.7:Ae>=25?.3:0)-Ro.opacity)*.1,Cg.setHex(Ft>0?16766826:Ae>=_T?16765514:10479871),Ro.color.lerp(Cg,Math.min(1,M*6)),Ro.opacity>.02){as.visible=!0,as.position.set(ke,De+.2,0);for(let v=0;v<rh;v++){let w=bp[v];if(w.z+=p*c*w.v*.9,w.z>26){w.z=-150-Math.random()*40;let H=Math.random()*Math.PI*2,$=yn.rMin+Math.random()*(yn.rMax-yn.rMin);w.x=Math.cos(H)*$,w.y=Math.sin(H)*$*.62}let F=v*6;mr[F]=w.x,mr[F+1]=w.y,mr[F+2]=w.z,mr[F+3]=w.x,mr[F+4]=w.y,mr[F+5]=w.z-w.len,Rg(F,1),Rg(F+3,yn.tail)}Ho.attributes.position.needsUpdate=!0,Ho.attributes.color.needsUpdate=!0}else as.visible=!1;{let v=ke*.6+br*.05,w=De*.6+6+jc*16,F=-90;Rt.lookAt(v+(ke-v)*Mo,w+(De+4-w)*Mo,F+(0-F)*Mo)}let V=Math.min(1,Math.abs(pr)*2.2);Rt.rotation.z+=-pr*.72-Ps*.2-wn.z*po*.3-Math.max(-Tg,Math.min(Tg,br*D_))*(1-V*.85)+xo,xo*=Math.exp(-s*3.4),Rt.rotation.x+=eh,Zn.scale.setScalar(1.3+An*.9+An*An*1.6),Zn.position.y=-470+An*340,document.getElementById("hud").textContent=`PUNKBUSTER
SONG ${$e} \xB7 ${bi[$e-1].name} \xB7 ${Lo[Hn].name}   ${vp==="none"?"keyboard":"pad ok"}`+(dh?`
${Ta.toFixed(0)} fps \xB7 ${Md} dc \xB7 PIX ${Bi.toFixed(2)}`:"")+(dh?(()=>{let v=(at.time()-(ar[$e]||0))/(60/(or[$e]||120)),w=on.reduce((H,$,P)=>Math.abs(ke-$)<Math.abs(ke-on[H])?P:H,0),F=$t.reduce((H,$,P)=>Math.abs(De-$)<Math.abs(De-$t[H])?P:H,0);return`
BEAT ${v|0} \xB7 BAR ${v/4|0} \xB7 PH ${Math.max(0,v%1).toFixed(2)} \xB7 CELL ${w},${F} \xB7 FLOW ${it*100|0}% \xB7 RATE ${(.9+.1*Di).toFixed(2)} \xB7 SEC ${Kt?Kt.mode:"-"} \xB7 PUNK ${ft?Math.round(-ft.position.z)+"m":"-"} \xB7 NOTES ${ri.length} \xB7 DRONES ${Ao.filter(H=>H.on).length} \xB7 LASER ${Xa.filter(H=>H.on).length}`})():"");let Z=document.getElementById("score");if(Z.textContent=`SCORE ${String(Math.round(we)).padStart(6,"0")}
\xD7${nt.toFixed(1)}${Ae>1?`
COMBO `+Ae:""}`,Z.style.color=nt>=6?"#ff2bd6":nt>=3?"#2af0ff":"#ffe08a",document.getElementById("dmg").style.opacity=Ot>0?(Math.min(1,Ot)*pd).toFixed(2):fr>1.2?((.16+.14*Math.sin(yi*12))*pd).toFixed(2):0,document.getElementById("bustfx").style.opacity=Gt>0?(Gt*pd).toFixed(2):0,Bd){{let w=Math.max(0,Math.min(1,Ft>0?1:it));document.getElementById("sbneedle").style.left=(w*277).toFixed(0)+"px"}let v=document.getElementById("sblabel");Ft>0?(v.textContent="\u2605 OVERDRIVE \u2605",v.style.color="#ffd24a",v.style.opacity=(.7+.3*Math.sin(yi*10)).toFixed(2)):fr>1.2?(v.textContent="CRITICAL SPEED",v.style.color="#ff2b3c",v.style.opacity=(.5+.5*Math.sin(yi*14)).toFixed(2)):Yt?(v.textContent="REDLINE",v.style.color="#ff2bd6",v.style.opacity=(.7+.3*Math.sin(yi*10)).toFixed(2)):it>.8?(v.textContent="FLOW MAX...",v.style.color="#2af0ff",v.style.opacity=(.6+.4*Math.sin(yi*8)).toFixed(2)):(v.textContent="",v.style.opacity=1)}{let v=document.getElementById("combometer");Ae>1&&dn&&!Dt?(v.textContent="\xD7"+Ae,v.style.color=Ae>=25?"#ffd24a":Ae>=10?"#ff2bd6":"#2af0ff",v.style.fontSize=Ae>=25?"58px":Ae>=10?"46px":"36px",v.classList.toggle("hot",Ae>=25),v.style.display="block",Ae>Id&&(v.classList.remove("pop"),v.offsetWidth,v.classList.add("pop"))):(v.style.display="none",v.classList.remove("hot")),Id=Ae}let Q=document.getElementById("punkui");if(U_&&ft)if(vo>0)Q.textContent="PUNK DOWN - NEXT INBOUND",Q.style.color="#2af0ff";else{let v=Math.max(0,Math.round(-ft.position.z));Q.textContent="\u25E4 PUNK  "+v+"m",Q.style.color=v<400?"#2af0ff":v>2400?"#ff5a5f":"#ffe08a"}vi.info.reset(),Ka.render(),Md=vi.info.render.calls,requestAnimationFrame(xr)}requestAnimationFrame(xr);window.P=nn;F_&&(window.__pump=n=>xr(n),window.__cv=vi.domElement,window.__scene=Si,window.__world=Fe,window.__rnd=vi,window.__dc=()=>Md,window.__menuNav=k_,window.__menuRows=Tp,window.__cam=()=>({vxSm:br,tiltRad:-Math.max(-.3,Math.min(.3,br*D_)),posX:ke,rotZ:wn.z,bankSm:Oi,shipRollGrad:-(wn.z+Oi),orbYaw:yr,orbPitch:Mr,orbAmt:Mo,orbZoom:Ns,camPos:[Rt.position.x,Rt.position.y,Rt.position.z]}),window.__setOrb=(n,e,t)=>{Hd=n===null?null:{x:n,y:e,z:t||0}},window.__groups={skyline:Ut,megaTowers:Po,buildSegs:$n,glbB:Xo,world:Fe});var at=(function(){let n=null,e=!1,t=1,s=0,r=0,o=null,a=134,l=60/a,c=l/4,f=D=>440*Math.pow(2,(D-69)/12),h=[{root:33,arp:[57,60,64,69],chord:[57,60,64]},{root:29,arp:[53,57,60,65],chord:[53,57,60]},{root:36,arp:[60,64,67,72],chord:[60,64,67]},{root:31,arp:[55,59,62,67],chord:[55,59,62]}];function u(D,E,T,k,K,ne){let B=n.createOscillator(),V=n.createGain();return B.type=D,B.frequency.setValueAtTime(E,T),V.gain.setValueAtTime(0,T),V.gain.linearRampToValueAtTime(K,T+.008),V.gain.exponentialRampToValueAtTime(1e-4,T+k),B.connect(V),V.connect(ne),B.start(T),B.stop(T+k+.02),B}function d(D,E,T,k,K){let ne=Math.floor(n.sampleRate*E),B=n.createBuffer(1,ne,n.sampleRate),V=B.getChannelData(0);for(let w=0;w<ne;w++)V[w]=Math.random()*2-1;let Z=n.createBufferSource();Z.buffer=B;let Q=n.createBiquadFilter();Q.type="highpass",Q.frequency.value=k;let v=n.createGain();v.gain.setValueAtTime(T,D),v.gain.exponentialRampToValueAtTime(1e-4,D+E),Z.connect(Q),Q.connect(v),v.connect(K),Z.start(D),Z.stop(D+E+.02)}function p(D,E){let T=n.createOscillator(),k=n.createGain();T.type="sine",T.frequency.setValueAtTime(160,D),T.frequency.exponentialRampToValueAtTime(48,D+.12),k.gain.setValueAtTime(.9,D),k.gain.exponentialRampToValueAtTime(1e-4,D+.18),T.connect(k),k.connect(E),T.start(D),T.stop(D+.2)}let _,y,g,m;function x(){for(;r<n.currentTime+.12;){let D=r,E=Math.floor(s/16)%h.length,T=h[E],k=s%16;k%4===0&&p(D,m),k%2===1&&d(D,.03,.18*t,7e3,m),(k===4||k===12)&&d(D,.14,.35*t,1800,m),k%2===0&&u("square",f(T.root),D,c*1.8,.16,g);let K=T.arp[k%T.arp.length]+(k>=8?12:0);if(u("square",f(K),D,c*.9,.1*t,y),k===0)for(let ne of T.chord)u("sawtooth",f(ne+12),D,l*.9,.05,y);s++,r+=c}o=setTimeout(x,25)}let M=null,b="vice-runway.mp3",I=!1;function R(D){if(!M||I)return;let E=M.play();E&&E.then?(I=!0,E.then(()=>{I=!1,e=!0}).catch(T=>{I=!1,console.warn("[audio] play() abgelehnt ("+D+"):",T&&T.name,T&&T.message)})):e=!0}function L(){if(M)try{M.pause()}catch{}M=new Audio(b),M.loop=!1,M.volume=location.search.includes("mute")?0:typeof lg<"u"?lg:1;try{M.preservesPitch=!1,M.mozPreservesPitch=!1}catch{}R("load")}return{start(){e||(M?R("start"):L())},setTrack(D){D!==b&&(b=D,(e||M)&&L())},time(){return xi?dn?Ca/1e3:0:M&&M.currentTime||0},duration(){return xi?bS[$e]||130:M&&isFinite(M.duration)?M.duration:0},setVolume(D){M&&(M.volume=D)},setEnergy(D){M&&(M.playbackRate=.9+.1*Math.max(0,Math.min(1,D)))},setRedline(D){},pause(){M&&M.pause()},stop(){if(M)try{M.pause(),M.currentTime=0}catch{}M=null,e=!1,xi&&(Ca=0)},resume(){M&&R("resume")},restart(){if(xi&&(Ca=0),M){try{M.currentTime=0}catch{}R("restart")}},seek(D){if(xi){Ca=D*1e3;return}if(M)try{M.currentTime=D}catch{}}}})(),dn=!1,yd=!1;function V_(){dn=!0,_p(!0),Fe.visible=!0;let n=document.getElementById("start");n&&(n.style.display="none")}function Ko(){if(dn||yd)return;at.start(),at.pause(),yd=!0;let n=document.createElement("div");n.id="intro";let e=document.createElement("div");e.id="introtext",n.appendChild(e),document.body.appendChild(n);let t=[[400,""],[2200,"FOR FULL IMMERSION SWITCH TO FULLSCREEN  \xB7  F11"],[450,""],[1600,"BOOST..   BOOST..   BOOST.."],[1300,"ALWAYS BOOST"],[700,"GO",!0]],s=0;for(let[r,o,a]of t)setTimeout(()=>{e.textContent=o,e.className=a?"go":"",e.style.opacity=o?"1":"0"},s),s+=r;setTimeout(()=>{yd=!1,V_(),at.restart(),n.style.opacity="0",setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},500)},s)}document.getElementById("start").addEventListener("click",Ko);addEventListener("pointerdown",()=>{if(Dt){performance.now()-Yo>600&&nl();return}Ko()});{let n=document.getElementById("menu");if(n){if(n.addEventListener("pointerdown",c=>{c.stopPropagation()}),n.addEventListener("click",c=>{c.stopPropagation()}),!Qa){let c=n.querySelector("[data-warp]");c&&(c.style.display="none")}n.querySelectorAll(".lv").forEach(c=>c.addEventListener("click",()=>{n.querySelectorAll(".lv").forEach(f=>f.classList.remove("sel")),c.classList.add("sel"),$e=+c.dataset.lv,l_=Qa&&!!c.dataset.warp,Ap($e),Ya()})),n.querySelectorAll(".df").forEach(c=>c.addEventListener("click",()=>{n.querySelectorAll(".df").forEach(f=>f.classList.remove("sel")),c.classList.add("sel"),Hn=+c.dataset.df,Ya()})),Ya(),Eo();let e=(c,f,h)=>{let u=document.getElementById(c),d=()=>u.classList.toggle("sel",f());d(),u.addEventListener("click",()=>{h(),d()})};e("setFlip",()=>go,()=>{if(go=!go,localStorage.setItem("pb_flip",go?"1":"0"),go)xp(Ei);else{for(let c of Ar)c.from.copy(c.m.color),c.to.copy(c.base);To=0}});let t=document.getElementById("setStreak"),s=()=>{t.textContent="STREAKS: "+(Hi?Rr[Hi-1].name:"OFF"),t.classList.toggle("sel",Hi>0)};s(),t.addEventListener("click",()=>{Hi=(Hi+1)%(Rr.length+1),localStorage.setItem("pb_streak",Hi),H_(),s()}),e("setRings",()=>Aa,()=>{Aa=!Aa,localStorage.setItem("pb_rings",Aa?"1":"0")}),e("setStyleRoll",()=>wa,()=>{wa=!wa,localStorage.setItem("pb_styleroll",wa?"1":"0")}),e("setRingFb",()=>Bs,()=>{Bs=!Bs,localStorage.setItem("pb_ringfb",Bs?"1":"0")});let r={setFlip:"Every ring carries a colour and only counts if your ship carries the same one - a barrel roll flips you over. FLIP CITY sends the entire skyline with you, so the polarity you are on is impossible to miss. Switch it off and the city keeps its own colours; ship and rings still flip.",setRings:"Rhythm rings on or off. Without them it is a pure free flight - no scoring, no misses.",setStyleRoll:"Spin the stick fast and the ship rolls. Looks only: no points, and your colour stays.",setRingFb:"Show the hit and miss callouts. The scoring happens either way.",setStreak:"Light streaks at full tilt. SWARM is dense and short, TRACER long and sparse."},o=document.getElementById("opthint"),a=c=>{o&&(o.textContent=r[c]||"")};Object.keys(r).forEach(c=>{let f=document.getElementById(c);f&&(f.addEventListener("mouseenter",()=>a(c)),f.addEventListener("focus",()=>a(c)))});let l=document.getElementById("menu");l&&l.addEventListener("mouseleave",()=>a("setFlip")),window.__optHint=a,document.getElementById("crt").style.display=o_?"":"none"}}location.search.includes("nocity")&&setTimeout(()=>{vh(!1),Ut.visible=!1;for(let n of Po)n.visible=!1},6e3);location.hash.startsWith("#auto")&&V_();{let n=location.hash.match(/lv(\d)/);if(n){let e=Math.max(1,Math.min(bi.length,+n[1]));$e=e,Ap(e)}}Fs&&(document.getElementById("hud").style.display="none",setTimeout(()=>Ko(),600))});ST();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
