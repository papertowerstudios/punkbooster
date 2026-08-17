(()=>{var Yn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(s){throw t=[s],s}};var b0=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Jn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[s&255]+on[s>>8&255]+on[s>>16&255]+on[s>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function Jh(n,e){return(n%e+e)%e}function Sg(n,e,t,s,r){return s+(n-e)*(r-s)/(t-e)}function Tg(n,e,t){return n!==e?(t-n)/(e-n):0}function uo(n,e,t){return(1-t)*n+t*e}function Ag(n,e,t,s){return uo(n,e,1-Math.exp(-t*s))}function wg(n,e=1){return e-Math.abs(Jh(n,e*2)-e)}function Rg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lg(n,e){return n+Math.random()*(e-n)}function Ig(n){return n*(.5-Math.random())}function Dg(n){n!==void 0&&(Ad=n);let e=Ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(n){return n*xr}function Ug(n){return n*wr}function uh(n){return(n&n-1)===0&&n!==0}function Bg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ya(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Og(n,e,t,s,r){let o=Math.cos,a=Math.sin,l=o(t/2),c=a(t/2),u=o((e+s)/2),h=a((e+s)/2),f=o((e-s)/2),d=a((e-s)/2),p=o((s-e)/2),g=a((s-e)/2);switch(r){case"XYX":n.set(l*h,c*f,c*d,l*u);break;case"YZY":n.set(c*d,l*h,c*f,l*u);break;case"ZXZ":n.set(c*f,c*d,l*h,l*u);break;case"XZX":n.set(l*h,c*g,c*p,l*u);break;case"YXY":n.set(c*p,l*h,c*g,l*u);break;case"ZYZ":n.set(c*g,c*p,l*h,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function qp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fg(){let n=yo("canvas");return n.style.display="block",n}function fo(n){n in wd||(wd[n]=!0,console.warn(n))}function vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ka.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ic(n,e,t,s,r){for(let o=0,a=n.length-3;o<=a;o+=3){xs.fromArray(n,o);let l=r.x*Math.abs(xs.x)+r.y*Math.abs(xs.y)+r.z*Math.abs(xs.z),c=e.dot(xs),u=t.dot(xs),h=s.dot(xs);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}function kc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function jg(n,e,t,s,r,o,a,l){let c;if(e.side===bn?c=s.intersectTriangle(a,o,r,!0,l):c=s.intersectTriangle(r,o,a,e.side===fi,l),c===null)return null;Aa.copy(l),Aa.applyMatrix4(n.matrixWorld);let u=t.ray.origin.distanceTo(Aa);return u<t.near||u>t.far?null:{distance:u,point:Aa.clone(),object:n}}function wa(n,e,t,s,r,o,a,l,c,u){n.getVertexPosition(l,hr),n.getVertexPosition(c,ur),n.getVertexPosition(u,fr);let h=jg(n,e,t,s,hr,ur,fr,Ta);if(h){r&&(Ea.fromBufferAttribute(r,l),ba.fromBufferAttribute(r,c),Sa.fromBufferAttribute(r,u),h.uv=As.getInterpolation(Ta,hr,ur,fr,Ea,ba,Sa,new le)),o&&(Ea.fromBufferAttribute(o,l),ba.fromBufferAttribute(o,c),Sa.fromBufferAttribute(o,u),h.uv1=As.getInterpolation(Ta,hr,ur,fr,Ea,ba,Sa,new le),h.uv2=h.uv1),a&&(zd.fromBufferAttribute(a,l),kd.fromBufferAttribute(a,c),Gd.fromBufferAttribute(a,u),h.normal=As.getInterpolation(Ta,hr,ur,fr,zd,kd,Gd,new L),h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1));let f={a:l,b:c,c:u,normal:new L,materialIndex:0};As.getNormal(hr,ur,fr,f.normal),h.face=f}return h}function Cr(n){let e={};for(let t in n){e[t]={};for(let s in n[t]){let r=n[t][s];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=r.clone():Array.isArray(r)?e[t][s]=r.slice():e[t][s]=r}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let s=Cr(n[t]);for(let r in s)e[r]=s[r]}return e}function Qg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kp(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}function Zp(){let n=null,e=!1,t=null,s=null;function r(o,a){t(o,a),s=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(s=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function s_(n,e){let t=e.isWebGL2,s=new WeakMap;function r(u,h){let f=u.array,d=u.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,f,d),u.onUploadCallback();let y;if(f instanceof Float32Array)y=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=n.SHORT;else if(f instanceof Uint32Array)y=n.UNSIGNED_INT;else if(f instanceof Int32Array)y=n.INT;else if(f instanceof Int8Array)y=n.BYTE;else if(f instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,h,f){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&g.length===0&&n.bufferSubData(f,0,d),g.length!==0){for(let y=0,_=g.length;y<_;y++){let m=g[y];t?n.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),s.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);let h=s.get(u);h&&(n.deleteBuffer(h.buffer),s.delete(u))}function c(u,h){if(u.isGLBufferAttribute){let d=s.get(u);(!d||d.version<u.version)&&s.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);let f=s.get(u);if(f===void 0)s.set(u,r(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,u,h),f.version=u.version}}return{get:a,remove:l,update:c}}function FM(n,e,t,s,r,o,a){let l=new ge(0),c=o===!0?0:1,u,h,f=null,d=0,p=null;function g(_,m){let x=!1,M=m.isScene===!0?m.background:null;M&&M.isTexture&&(M=(m.backgroundBlurriness>0?t:e).get(M)),M===null?y(l,c):M&&M.isColor&&(y(M,1),x=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?s.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===El)?(h===void 0&&(h=new $(new $e(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Cr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=st.getTransfer(M.colorSpace)!==vt,(f!==M||d!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new $(new Ie(2,2),new en({name:"BackgroundMaterial",uniforms:Cr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=st.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function y(_,m){_.getRGB(Ca,Kp(n)),s.buffers.color.setClear(Ca.r,Ca.g,Ca.b,m,a)}return{getClearColor:function(){return l},setClearColor:function(_,m=1){l.set(_),c=m,y(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,y(l,c)},render:g}}function HM(n,e,t,s){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=s.isWebGL2?null:e.get("OES_vertex_array_object"),a=s.isWebGL2||o!==null,l={},c=_(null),u=c,h=!1;function f(P,U,H,D,F){let G=!1;if(a){let Z=y(D,H,U);u!==Z&&(u=Z,p(u.object)),G=m(P,D,H,F),G&&x(P,D,H,F)}else{let Z=U.wireframe===!0;(u.geometry!==D.id||u.program!==H.id||u.wireframe!==Z)&&(u.geometry=D.id,u.program=H.id,u.wireframe=Z,G=!0)}F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,B(P,U,H,D),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function d(){return s.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function p(P){return s.isWebGL2?n.bindVertexArray(P):o.bindVertexArrayOES(P)}function g(P){return s.isWebGL2?n.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function y(P,U,H){let D=H.wireframe===!0,F=l[P.id];F===void 0&&(F={},l[P.id]=F);let G=F[U.id];G===void 0&&(G={},F[U.id]=G);let Z=G[D];return Z===void 0&&(Z=_(d()),G[D]=Z),Z}function _(P){let U=[],H=[],D=[];for(let F=0;F<r;F++)U[F]=0,H[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:D,object:P,attributes:{},index:null}}function m(P,U,H,D){let F=u.attributes,G=U.attributes,Z=0,J=H.getAttributes();for(let ue in J)if(J[ue].location>=0){let j=F[ue],ce=G[ue];if(ce===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;Z++}return u.attributesNum!==Z||u.index!==D}function x(P,U,H,D){let F={},G=U.attributes,Z=0,J=H.getAttributes();for(let ue in J)if(J[ue].location>=0){let j=G[ue];j===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),F[ue]=ce,Z++}u.attributes=F,u.attributesNum=Z,u.index=D}function M(){let P=u.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function E(P){I(P,0)}function I(P,U){let H=u.newAttributes,D=u.enabledAttributes,F=u.attributeDivisors;H[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),F[P]!==U&&((s.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),F[P]=U)}function R(){let P=u.newAttributes,U=u.enabledAttributes;for(let H=0,D=U.length;H<D;H++)U[H]!==P[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function C(P,U,H,D,F,G,Z){Z===!0?n.vertexAttribIPointer(P,U,H,F,G):n.vertexAttribPointer(P,U,H,D,F,G)}function B(P,U,H,D){if(s.isWebGL2===!1&&(P.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let F=D.attributes,G=H.getAttributes(),Z=U.defaultAttributeValues;for(let J in G){let ue=G[J];if(ue.location>=0){let Y=F[J];if(Y===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let j=Y.normalized,ce=Y.itemSize,xe=t.get(Y);if(xe===void 0)continue;let Me=xe.buffer,Be=xe.type,Fe=xe.bytesPerElement,Ae=s.isWebGL2===!0&&(Be===n.INT||Be===n.UNSIGNED_INT||Y.gpuType===Np);if(Y.isInterleavedBufferAttribute){let nt=Y.data,V=nt.stride,fn=Y.offset;if(nt.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ue.locationSize;Ee++)I(ue.location+Ee,nt.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ee=0;Ee<ue.locationSize;Ee++)E(ue.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Ee=0;Ee<ue.locationSize;Ee++)C(ue.location+Ee,ce/ue.locationSize,Be,j,V*Fe,(fn+ce/ue.locationSize*Ee)*Fe,Ae)}else{if(Y.isInstancedBufferAttribute){for(let nt=0;nt<ue.locationSize;nt++)I(ue.location+nt,Y.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let nt=0;nt<ue.locationSize;nt++)E(ue.location+nt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let nt=0;nt<ue.locationSize;nt++)C(ue.location+nt,ce/ue.locationSize,Be,j,ce*Fe,ce/ue.locationSize*nt*Fe,Ae)}}else if(Z!==void 0){let j=Z[J];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ue.location,j);break;case 3:n.vertexAttrib3fv(ue.location,j);break;case 4:n.vertexAttrib4fv(ue.location,j);break;default:n.vertexAttrib1fv(ue.location,j)}}}}R()}function v(){T();for(let P in l){let U=l[P];for(let H in U){let D=U[H];for(let F in D)g(D[F].object),delete D[F];delete U[H]}delete l[P]}}function S(P){if(l[P.id]===void 0)return;let U=l[P.id];for(let H in U){let D=U[H];for(let F in D)g(D[F].object),delete D[F];delete U[H]}delete l[P.id]}function z(P){for(let U in l){let H=l[U];if(H[P.id]===void 0)continue;let D=H[P.id];for(let F in D)g(D[F].object),delete D[F];delete H[P.id]}}function T(){N(),h=!0,u!==c&&(u=c,p(u.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:T,resetDefaultState:N,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:z,initAttributes:M,enableAttribute:E,disableUnusedAttributes:R}}function zM(n,e,t,s){let r=s.isWebGL2,o;function a(h){o=h}function l(h,f){n.drawArrays(o,h,f),t.update(f,o,1)}function c(h,f,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](o,h,f,d),t.update(f,o,d)}function u(h,f,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{p.multiDrawArraysWEBGL(o,h,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=f[y];t.update(g,o,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kM(n,e,t){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",l=t.precision!==void 0?t.precision:"highp",c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);let u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,E=a||e.has("OES_texture_float"),I=M&&E,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:I,maxSamples:R}}function GM(n){let e=this,t=null,s=0,r=!1,o=!1,a=new Ci,l=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||s!==0||r;return r=d,s=f.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,y=f.clipIntersection,_=f.clipShadows,m=n.get(f);if(!r||g===null||g.length===0||o&&!_)o?h(null):u();else{let x=o?0:s,M=x*4,E=m.clippingState||null;c.value=E,E=h(g,d,M,p);for(let I=0;I!==M;++I)E[I]=t[I];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function h(f,d,p,g){let y=f!==null?f.length:0,_=null;if(y!==0){if(_=c.value,g!==!0||_===null){let m=p+y*4,x=d.matrixWorldInverse;l.getNormalMatrix(x),(_===null||_.length<m)&&(_=new Float32Array(m));for(let M=0,E=p;M!==y;++M,E+=4)a.copy(f[M]).applyMatrix4(x,l),a.normal.toArray(_,E),_[E+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function VM(n){let e=new WeakMap;function t(a,l){return l===ah?a.mapping=br:l===lh&&(a.mapping=Sr),a}function s(a){if(a&&a.isTexture){let l=a.mapping;if(l===ah||l===lh)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let u=new mh(c.height/2);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:s,dispose:o}}function WM(n){let e=[],t=[],s=[],r=n,o=n-_r+1+Vd.length;for(let a=0;a<o;a++){let l=Math.pow(2,r);t.push(l);let c=1/l;a>n-_r?c=Vd[a-n+_r-1]:a===0&&(c=0),s.push(c);let u=1/(l-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,y=3,_=2,m=1,x=new Float32Array(y*g*p),M=new Float32Array(_*g*p),E=new Float32Array(m*g*p);for(let R=0;R<p;R++){let C=R%3*2/3-1,B=R>2?0:-1,v=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];x.set(v,y*g*R),M.set(d,_*g*R);let S=[R,R,R,R,R,R];E.set(S,m*g*R)}let I=new pt;I.setAttribute("position",new xt(x,y)),I.setAttribute("uv",new xt(M,_)),I.setAttribute("faceIndex",new xt(E,m)),e.push(I),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function qd(n,e,t){let s=new yn(n,e,t);return s.texture.mapping=El,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pa(n,e,t,s,r){n.viewport.set(e,t,s,r),n.scissor.set(e,t,s,r)}function XM(n,e,t){let s=new Float32Array(Ts),r=new L(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jh(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Yd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Kd(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function jh(){return`

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
	`}function qM(n){let e=new WeakMap,t=null;function s(l){if(l&&l.isTexture){let c=l.mapping,u=c===ah||c===lh,h=c===br||c===Sr;if(u||h)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let f=e.get(l);return t===null&&(t=new il(n)),f=u?t.fromEquirectangular(l,f):t.fromCubemap(l,f),e.set(l,f),f.texture}else{if(e.has(l))return e.get(l).texture;{let f=l.image;if(u&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new il(n));let d=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,d),l.addEventListener("dispose",o),d.texture}else return null}}}return l}function r(l){let c=0,u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function o(l){let c=l.target;c.removeEventListener("dispose",o);let u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:a}}function YM(n){let e={};function t(s){if(e[s]!==void 0)return e[s];let r;switch(s){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(s)}return e[s]=r,r}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){let r=t(s);return r===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),r}}}function KM(n,e,t,s){let r={},o=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let _=0,m=y.length;_<m;_++)e.remove(y[_])}d.removeEventListener("dispose",a),delete r[d.id];let p=o.get(d);p&&(e.remove(p),o.delete(d)),s.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let y=p[g];for(let _=0,m=y.length;_<m;_++)e.update(y[_],n.ARRAY_BUFFER)}}function u(f){let d=[],p=f.index,g=f.attributes.position,y=0;if(p!==null){let x=p.array;y=p.version;for(let M=0,E=x.length;M<E;M+=3){let I=x[M+0],R=x[M+1],C=x[M+2];d.push(I,R,R,C,C,I)}}else if(g!==void 0){let x=g.array;y=g.version;for(let M=0,E=x.length/3-1;M<E;M+=3){let I=M+0,R=M+1,C=M+2;d.push(I,R,R,C,C,I)}}else return;let _=new(qp(d)?el:Qa)(d,1);_.version=y;let m=o.get(f);m&&e.remove(m),o.set(f,_)}function h(f){let d=o.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return o.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function ZM(n,e,t,s){let r=s.isWebGL2,o;function a(p){o=p}let l,c;function u(p){l=p.type,c=p.bytesPerElement}function h(p,g){n.drawElements(o,g,l,p*c),t.update(g,o,1)}function f(p,g,y){if(y===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](o,g,l,p*c,y),t.update(g,o,y)}function d(p,g,y){if(y===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<y;m++)this.render(p[m]/c,g[m]);else{_.multiDrawElementsWEBGL(o,g,0,l,p,0,y);let m=0;for(let x=0;x<y;x++)m+=g[x];t.update(m,o,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function $M(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(o,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(o/3);break;case n.LINES:t.lines+=l*(o/2);break;case n.LINE_STRIP:t.lines+=l*(o-1);break;case n.LINE_LOOP:t.lines+=l*o;break;case n.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:s}}function JM(n,e){return n[0]-e[0]}function jM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function QM(n,e,t){let s={},r=new Float32Array(8),o=new WeakMap,a=new dt,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function c(u,h,f){let d=u.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,y=o.get(h);if(y===void 0||y.count!==g){let P=function(){T.dispose(),o.delete(h),h.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();let x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],B=0;x===!0&&(B=1),M===!0&&(B=2),E===!0&&(B=3);let v=h.attributes.position.count*B,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let z=new Float32Array(v*S*4*g),T=new $a(z,v,S,g);T.type=Pi,T.needsUpdate=!0;let N=B*4;for(let U=0;U<g;U++){let H=I[U],D=R[U],F=C[U],G=v*S*4*U;for(let Z=0;Z<H.count;Z++){let J=Z*N;x===!0&&(a.fromBufferAttribute(H,Z),z[G+J+0]=a.x,z[G+J+1]=a.y,z[G+J+2]=a.z,z[G+J+3]=0),M===!0&&(a.fromBufferAttribute(D,Z),z[G+J+4]=a.x,z[G+J+5]=a.y,z[G+J+6]=a.z,z[G+J+7]=0),E===!0&&(a.fromBufferAttribute(F,Z),z[G+J+8]=a.x,z[G+J+9]=a.y,z[G+J+10]=a.z,z[G+J+11]=F.itemSize===4?a.w:1)}}y={count:g,texture:T,size:new le(v,S)},o.set(h,y),h.addEventListener("dispose",P)}let _=0;for(let x=0;x<d.length;x++)_+=d[x];let m=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",m),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=d===void 0?0:d.length,g=s[h.id];if(g===void 0||g.length!==p){g=[];for(let M=0;M<p;M++)g[M]=[M,0];s[h.id]=g}for(let M=0;M<p;M++){let E=g[M];E[0]=M,E[1]=d[M]}g.sort(jM);for(let M=0;M<8;M++)M<p&&g[M][1]?(l[M][0]=g[M][0],l[M][1]=g[M][1]):(l[M][0]=Number.MAX_SAFE_INTEGER,l[M][1]=0);l.sort(JM);let y=h.morphAttributes.position,_=h.morphAttributes.normal,m=0;for(let M=0;M<8;M++){let E=l[M],I=E[0],R=E[1];I!==Number.MAX_SAFE_INTEGER&&R?(y&&h.getAttribute("morphTarget"+M)!==y[I]&&h.setAttribute("morphTarget"+M,y[I]),_&&h.getAttribute("morphNormal"+M)!==_[I]&&h.setAttribute("morphNormal"+M,_[I]),r[M]=R,m+=R):(y&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),_&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}let x=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function ex(n,e,t,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}function Nr(n,e,t){let s=n[0];if(s<=0||s>0)return n;let r=e*t,o=Zd[r];if(o===void 0&&(o=new Float32Array(r),Zd[r]=o),e!==0){s.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(o,l)}return o}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,s=e.length;t<s;t++)n[t]=e[t]}function Tl(n,e){let t=$d[e];t===void 0&&(t=new Int32Array(e),$d[e]=t);for(let s=0;s!==e;++s)t[s]=n.allocateTextureUnit();return t}function tx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function rx(n,e){let t=this.cache,s=e.elements;if(s===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,s))return;Qd.set(s),n.uniformMatrix2fv(this.addr,!1,Qd),zt(t,s)}}function ox(n,e){let t=this.cache,s=e.elements;if(s===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,s))return;jd.set(s),n.uniformMatrix3fv(this.addr,!1,jd),zt(t,s)}}function ax(n,e){let t=this.cache,s=e.elements;if(s===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,s))return;Jd.set(s),n.uniformMatrix4fv(this.addr,!1,Jd),zt(t,s)}}function lx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function fx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function gx(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r);let o=this.type===n.SAMPLER_2D_SHADOW?Jp:$p;t.setTexture2D(e||o,r)}function _x(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTexture3D(e||Qp,r)}function yx(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTextureCube(e||em,r)}function Mx(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTexture2DArray(e||jp,r)}function xx(n){switch(n){case 5126:return tx;case 35664:return nx;case 35665:return ix;case 35666:return sx;case 35674:return rx;case 35675:return ox;case 35676:return ax;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return hx;case 35669:case 35673:return ux;case 5125:return fx;case 36294:return dx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Mx}}function vx(n,e){n.uniform1fv(this.addr,e)}function Ex(n,e){let t=Nr(e,this.size,2);n.uniform2fv(this.addr,t)}function bx(n,e){let t=Nr(e,this.size,3);n.uniform3fv(this.addr,t)}function Sx(n,e){let t=Nr(e,this.size,4);n.uniform4fv(this.addr,t)}function Tx(n,e){let t=Nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ax(n,e){let t=Nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wx(n,e){let t=Nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rx(n,e){n.uniform1iv(this.addr,e)}function Cx(n,e){n.uniform2iv(this.addr,e)}function Px(n,e){n.uniform3iv(this.addr,e)}function Lx(n,e){n.uniform4iv(this.addr,e)}function Ix(n,e){n.uniform1uiv(this.addr,e)}function Dx(n,e){n.uniform2uiv(this.addr,e)}function Nx(n,e){n.uniform3uiv(this.addr,e)}function Ux(n,e){n.uniform4uiv(this.addr,e)}function Bx(n,e,t){let s=this.cache,r=e.length,o=Tl(t,r);Ht(s,o)||(n.uniform1iv(this.addr,o),zt(s,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||$p,o[a])}function Ox(n,e,t){let s=this.cache,r=e.length,o=Tl(t,r);Ht(s,o)||(n.uniform1iv(this.addr,o),zt(s,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Qp,o[a])}function Fx(n,e,t){let s=this.cache,r=e.length,o=Tl(t,r);Ht(s,o)||(n.uniform1iv(this.addr,o),zt(s,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||em,o[a])}function Hx(n,e,t){let s=this.cache,r=e.length,o=Tl(t,r);Ht(s,o)||(n.uniform1iv(this.addr,o),zt(s,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||jp,o[a])}function zx(n){switch(n){case 5126:return vx;case 35664:return Ex;case 35665:return bx;case 35666:return Sx;case 35674:return Tx;case 35675:return Ax;case 35676:return wx;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Lx;case 5125:return Ix;case 36294:return Dx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Hx}}function ep(n,e){n.seq.push(e),n.map[e.id]=e}function kx(n,e,t){let s=n.name,r=s.length;for(Zc.lastIndex=0;;){let o=Zc.exec(s),a=Zc.lastIndex,l=o[1],c=o[2]==="]",u=o[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){ep(t,u===void 0?new gh(l,n,e):new _h(l,n,e));break}else{let f=t.map[l];f===void 0&&(f=new yh(l),ep(t,f)),t=f}}}function tp(n,e,t){let s=n.createShader(e);return n.shaderSource(s,t),n.compileShader(s),s}function Wx(n,e){let t=n.split(`
`),s=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){let l=a+1;s.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return s.join(`
`)}function Xx(n){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n),s;switch(e===t?s="":e===Xa&&t===Wa?s="LinearDisplayP3ToLinearSRGB":e===Wa&&t===Xa&&(s="LinearSRGBToLinearDisplayP3"),n){case Ft:case Sl:return[s,"LinearTransferOETF"];case ct:case $h:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[s,"LinearTransferOETF"]}}function np(n,e,t){let s=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(s&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Wx(n.getShaderSource(e),a)}else return r}function qx(n,e){let t=Xx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yx(n,e){let t;switch(e){case j0:t="Linear";break;case Q0:t="Reinhard";break;case eg:t="OptimizedCineon";break;case tg:t="ACESFilmic";break;case ig:t="AgX";break;case ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yr).join(`
`)}function Zx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(yr).join(`
`)}function $x(n){let e=[];for(let t in n){let s=n[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Jx(n,e){let t={},s=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let o=n.getActiveAttrib(e,r),a=o.name,l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function yr(n){return n!==""}function ip(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Mh(n){return n.replace(jx,ev)}function ev(n,e){let t=ze[e];if(t===void 0){let s=Qx.get(e);if(s!==void 0)t=ze[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Mh(t)}function rp(n){return n.replace(tv,nv)}function nv(n,e,t,s){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function op(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===A0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function sv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Sr:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Sr&&(e="ENVMAP_MODE_REFRACTION"),e}function ov(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ip:e="ENVMAP_BLENDING_MULTIPLY";break;case $0:e="ENVMAP_BLENDING_MIX";break;case J0:e="ENVMAP_BLENDING_ADD";break}return e}function av(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function lv(n,e,t,s){let r=n.getContext(),o=t.defines,a=t.vertexShader,l=t.fragmentShader,c=iv(t),u=sv(t),h=rv(t),f=ov(t),d=av(t),p=t.isWebGL2?"":Kx(t),g=Zx(t),y=$x(o),_=r.createProgram(),m,x,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(yr).join(`
`),m.length>0&&(m+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(yr).join(`
`),x.length>0&&(x+=`
`)):(m=[op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),x=[p,op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?ze.tonemapping_pars_fragment:"",t.toneMapping!==qi?Yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,qx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=Mh(a),a=ip(a,t),a=sp(a,t),l=Mh(l),l=ip(l,t),l=sp(l,t),a=rp(a),l=rp(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let E=M+m+a,I=M+x+l,R=tp(r,r.VERTEX_SHADER,E),C=tp(r,r.FRAGMENT_SHADER,I);r.attachShader(_,R),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function B(T){if(n.debug.checkShaderErrors){let N=r.getProgramInfoLog(_).trim(),P=r.getShaderInfoLog(R).trim(),U=r.getShaderInfoLog(C).trim(),H=!0,D=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,C);else{let F=np(r,R,"vertex"),G=np(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+F+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||U==="")&&(D=!1);D&&(T.diagnostics={runnable:H,programLog:N,vertexShader:{log:P,prefix:m},fragmentShader:{log:U,prefix:x}})}r.deleteShader(R),r.deleteShader(C),v=new Er(r,_),S=Jx(r,_)}let v;this.getUniforms=function(){return v===void 0&&B(this),v};let S;this.getAttributes=function(){return S===void 0&&B(this),S};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(_,Gx)),z},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}function hv(n,e,t,s,r,o,a){let l=new ja,c=new xh,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return v===0?"uv":`uv${v}`}function _(v,S,z,T,N){let P=T.fog,U=N.geometry,H=v.isMeshStandardMaterial?T.environment:null,D=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),F=D&&D.mapping===El?D.image.height:null,G=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=Z!==void 0?Z.length:0,ue=0;U.morphAttributes.position!==void 0&&(ue=1),U.morphAttributes.normal!==void 0&&(ue=2),U.morphAttributes.color!==void 0&&(ue=3);let Y,j,ce,xe;if(G){let dn=ci[G];Y=dn.vertexShader,j=dn.fragmentShader}else Y=v.vertexShader,j=v.fragmentShader,c.update(v),ce=c.getVertexShaderID(v),xe=c.getFragmentShaderID(v);let Me=n.getRenderTarget(),Be=N.isInstancedMesh===!0,Fe=N.isBatchedMesh===!0,Ae=!!v.map,nt=!!v.matcap,V=!!D,fn=!!v.aoMap,Ee=!!v.lightMap,De=!!v.bumpMap,me=!!v.normalMap,Tt=!!v.displacementMap,Ge=!!v.emissiveMap,w=!!v.metalnessMap,b=!!v.roughnessMap,X=v.anisotropy>0,te=v.clearcoat>0,ee=v.iridescence>0,ne=v.sheen>0,_e=v.transmission>0,he=X&&!!v.anisotropyMap,de=te&&!!v.clearcoatMap,Te=te&&!!v.clearcoatNormalMap,Ve=te&&!!v.clearcoatRoughnessMap,Q=ee&&!!v.iridescenceMap,ht=ee&&!!v.iridescenceThicknessMap,Je=ne&&!!v.sheenColorMap,Le=ne&&!!v.sheenRoughnessMap,ve=!!v.specularMap,pe=!!v.specularColorMap,He=!!v.specularIntensityMap,lt=_e&&!!v.transmissionMap,Rt=_e&&!!v.thicknessMap,Ye=!!v.gradientMap,ie=!!v.alphaMap,O=v.alphaTest>0,re=!!v.alphaHash,oe=!!v.extensions,we=!!U.attributes.uv1,be=!!U.attributes.uv2,mt=!!U.attributes.uv3,gt=qi;return v.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(gt=n.toneMapping),{isWebGL2:h,shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:j,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Fe,instancing:Be,instancingColor:Be&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Ft,map:Ae,matcap:nt,envMap:V,envMapMode:V&&D.mapping,envMapCubeUVHeight:F,aoMap:fn,lightMap:Ee,bumpMap:De,normalMap:me,displacementMap:d&&Tt,emissiveMap:Ge,normalMapObjectSpace:me&&v.normalMapType===gg,normalMapTangentSpace:me&&v.normalMapType===Vp,metalnessMap:w,roughnessMap:b,anisotropy:X,anisotropyMap:he,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ve,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:ht,sheen:ne,sheenColorMap:Je,sheenRoughnessMap:Le,specularMap:ve,specularColorMap:pe,specularIntensityMap:He,transmission:_e,transmissionMap:lt,thicknessMap:Rt,gradientMap:Ye,opaque:v.transparent===!1&&v.blending===Mr,alphaMap:ie,alphaTest:O,alphaHash:re,combine:v.combine,mapUv:Ae&&y(v.map.channel),aoMapUv:fn&&y(v.aoMap.channel),lightMapUv:Ee&&y(v.lightMap.channel),bumpMapUv:De&&y(v.bumpMap.channel),normalMapUv:me&&y(v.normalMap.channel),displacementMapUv:Tt&&y(v.displacementMap.channel),emissiveMapUv:Ge&&y(v.emissiveMap.channel),metalnessMapUv:w&&y(v.metalnessMap.channel),roughnessMapUv:b&&y(v.roughnessMap.channel),anisotropyMapUv:he&&y(v.anisotropyMap.channel),clearcoatMapUv:de&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:Te&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Le&&y(v.sheenRoughnessMap.channel),specularMapUv:ve&&y(v.specularMap.channel),specularColorMapUv:pe&&y(v.specularColorMap.channel),specularIntensityMapUv:He&&y(v.specularIntensityMap.channel),transmissionMapUv:lt&&y(v.transmissionMap.channel),thicknessMapUv:Rt&&y(v.thicknessMap.channel),alphaMapUv:ie&&y(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(me||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:be,vertexUv3s:mt,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Ae||ie),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mt,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:oe&&v.extensions.derivatives===!0,extensionFragDepth:oe&&v.extensions.fragDepth===!0,extensionDrawBuffers:oe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&v.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let z in v.defines)S.push(z),S.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(x(S,v),M(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){l.disableAll(),S.isWebGL2&&l.enable(0),S.supportsVertexTextures&&l.enable(1),S.instancing&&l.enable(2),S.instancingColor&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),v.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.skinning&&l.enable(4),S.morphTargets&&l.enable(5),S.morphNormals&&l.enable(6),S.morphColors&&l.enable(7),S.premultipliedAlpha&&l.enable(8),S.shadowMapEnabled&&l.enable(9),S.useLegacyLights&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),v.push(l.mask)}function E(v){let S=g[v.type],z;if(S){let T=ci[S];z=Dr.clone(T.uniforms)}else z=v.uniforms;return z}function I(v,S){let z;for(let T=0,N=u.length;T<N;T++){let P=u[T];if(P.cacheKey===S){z=P,++z.usedTimes;break}}return z===void 0&&(z=new lv(n,S,v,o),u.push(z)),z}function R(v){if(--v.usedTimes===0){let S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function C(v){c.remove(v)}function B(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:I,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:B}}function uv(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{get:e,remove:t,update:s,dispose:r}}function fv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ap(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lp(){let n=[],e=0,t=[],s=[],r=[];function o(){e=0,t.length=0,s.length=0,r.length=0}function a(f,d,p,g,y,_){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:_},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=y,m.group=_),e++,m}function l(f,d,p,g,y,_){let m=a(f,d,p,g,y,_);p.transmission>0?s.push(m):p.transparent===!0?r.push(m):t.push(m)}function c(f,d,p,g,y,_){let m=a(f,d,p,g,y,_);p.transmission>0?s.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||fv),s.length>1&&s.sort(d||ap),r.length>1&&r.sort(d||ap)}function h(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:s,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function dv(){let n=new WeakMap;function e(s,r){let o=n.get(s),a;return o===void 0?(a=new lp,n.set(s,[a])):r>=o.length?(a=new lp,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function pv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ge};break;case"SpotLight":t={position:new L,direction:new L,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function mv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function _v(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yv(n,e){let t=new pv,s=mv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new L);let o=new L,a=new Pe,l=new Pe;function c(h,f){let d=0,p=0,g=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let y=0,_=0,m=0,x=0,M=0,E=0,I=0,R=0,C=0,B=0,v=0;h.sort(_v);let S=f===!0?Math.PI:1;for(let T=0,N=h.length;T<N;T++){let P=h[T],U=P.color,H=P.intensity,D=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*H*S,p+=U.g*H*S,g+=U.b*H*S;else if(P.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(P.sh.coefficients[G],H);v++}else if(P.isDirectionalLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let Z=P.shadow,J=s.get(P);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,r.directionalShadow[y]=J,r.directionalShadowMap[y]=F,r.directionalShadowMatrix[y]=P.shadow.matrix,E++}r.directional[y]=G,y++}else if(P.isSpotLight){let G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(U).multiplyScalar(H*S),G.distance=D,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,r.spot[m]=G;let Z=P.shadow;if(P.map&&(r.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&B++),r.spotLightMatrix[m]=Z.matrix,P.castShadow){let J=s.get(P);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,r.spotShadow[m]=J,r.spotShadowMap[m]=F,R++}m++}else if(P.isRectAreaLight){let G=t.get(P);G.color.copy(U).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),r.rectArea[x]=G,x++}else if(P.isPointLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*S),G.distance=P.distance,G.decay=P.decay,P.castShadow){let Z=P.shadow,J=s.get(P);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,r.pointShadow[_]=J,r.pointShadowMap[_]=F,r.pointShadowMatrix[_]=P.shadow.matrix,I++}r.point[_]=G,_++}else if(P.isHemisphereLight){let G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(H*S),G.groundColor.copy(P.groundColor).multiplyScalar(H*S),r.hemi[M]=G,M++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;let z=r.hash;(z.directionalLength!==y||z.pointLength!==_||z.spotLength!==m||z.rectAreaLength!==x||z.hemiLength!==M||z.numDirectionalShadows!==E||z.numPointShadows!==I||z.numSpotShadows!==R||z.numSpotMaps!==C||z.numLightProbes!==v)&&(r.directional.length=y,r.spot.length=m,r.rectArea.length=x,r.point.length=_,r.hemi.length=M,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=R+C-B,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=v,z.directionalLength=y,z.pointLength=_,z.spotLength=m,z.rectAreaLength=x,z.hemiLength=M,z.numDirectionalShadows=E,z.numPointShadows=I,z.numSpotShadows=R,z.numSpotMaps=C,z.numLightProbes=v,r.version=gv++)}function u(h,f){let d=0,p=0,g=0,y=0,_=0,m=f.matrixWorldInverse;for(let x=0,M=h.length;x<M;x++){let E=h[x];if(E.isDirectionalLight){let I=r.directional[d];I.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(m),d++}else if(E.isSpotLight){let I=r.spot[g];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(m),g++}else if(E.isRectAreaLight){let I=r.rectArea[y];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),l.identity(),a.copy(E.matrixWorld),a.premultiply(m),l.extractRotation(a),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(l),I.halfHeight.applyMatrix4(l),y++}else if(E.isPointLight){let I=r.point[p];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let I=r.hemi[_];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(m),_++}}}return{setup:c,setupView:u,state:r}}function cp(n,e){let t=new yv(n,e),s=[],r=[];function o(){s.length=0,r.length=0}function a(f){s.push(f)}function l(f){r.push(f)}function c(f){t.setup(s,f)}function u(f){t.setupView(s,f)}return{init:o,state:{lightsArray:s,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:l}}function Mv(n,e){let t=new WeakMap;function s(o,a=0){let l=t.get(o),c;return l===void 0?(c=new cp(n,e),t.set(o,[c])):a>=l.length?(c=new cp(n,e),l.push(c)):c=l[a],c}function r(){t=new WeakMap}return{get:s,dispose:r}}function Ev(n,e,t){let s=new Mo,r=new le,o=new le,a=new dt,l=new Eh({depthPacking:mg}),c=new bh,u={},h=t.maxTextureSize,f={[fi]:bn,[bn]:fi,[Mt]:Mt},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:xv,fragmentShader:vv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new $(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lp;let m=this.type;this.render=function(R,C,B){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;let v=n.getRenderTarget(),S=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),T=n.state;T.setBlending(ui),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let N=m!==Ri&&this.type===Ri,P=m===Ri&&this.type!==Ri;for(let U=0,H=R.length;U<H;U++){let D=R[U],F=D.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let G=F.getFrameExtents();if(r.multiply(G),o.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/G.x),r.x=o.x*G.x,F.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/G.y),r.y=o.y*G.y,F.mapSize.y=o.y)),F.map===null||N===!0||P===!0){let J=this.type!==Ri?{minFilter:Pt,magFilter:Pt}:{};F.map!==null&&F.map.dispose(),F.map=new yn(r.x,r.y,J),F.map.texture.name=D.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let Z=F.getViewportCount();for(let J=0;J<Z;J++){let ue=F.getViewport(J);a.set(o.x*ue.x,o.y*ue.y,o.x*ue.z,o.y*ue.w),T.viewport(a),F.updateMatrices(D,J),s=F.getFrustum(),E(C,B,F.camera,D,this.type)}F.isPointLightShadow!==!0&&this.type===Ri&&x(F,B),F.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(v,S,z)};function x(R,C){let B=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new yn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,B,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,B,p,y,null)}function M(R,C,B,v){let S=null,z=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)S=z;else if(S=B.isPointLight===!0?c:l,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let T=S.uuid,N=C.uuid,P=u[T];P===void 0&&(P={},u[T]=P);let U=P[N];U===void 0&&(U=S.clone(),P[N]=U,C.addEventListener("dispose",I)),S=U}if(S.visible=C.visible,S.wireframe=C.wireframe,v===Ri?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let T=n.properties.get(S);T.light=B}return S}function E(R,C,B,v,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Ri)&&(!R.frustumCulled||s.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);let N=e.update(R),P=R.material;if(Array.isArray(P)){let U=N.groups;for(let H=0,D=U.length;H<D;H++){let F=U[H],G=P[F.materialIndex];if(G&&G.visible){let Z=M(R,G,v,S);R.onBeforeShadow(n,R,C,B,N,Z,F),n.renderBufferDirect(B,null,N,Z,R,F),R.onAfterShadow(n,R,C,B,N,Z,F)}}}else if(P.visible){let U=M(R,P,v,S);R.onBeforeShadow(n,R,C,B,N,U,null),n.renderBufferDirect(B,null,N,U,R,null),R.onAfterShadow(n,R,C,B,N,U,null)}}let T=R.children;for(let N=0,P=T.length;N<P;N++)E(T[N],C,B,v,S)}function I(R){R.target.removeEventListener("dispose",I);for(let B in u){let v=u[B],S=R.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function bv(n,e,t){let s=t.isWebGL2;function r(){let O=!1,re=new dt,oe=null,we=new dt(0,0,0,0);return{setMask:function(be){oe!==be&&!O&&(n.colorMask(be,be,be,be),oe=be)},setLocked:function(be){O=be},setClear:function(be,mt,gt,Xt,dn){dn===!0&&(be*=Xt,mt*=Xt,gt*=Xt),re.set(be,mt,gt,Xt),we.equals(re)===!1&&(n.clearColor(be,mt,gt,Xt),we.copy(re))},reset:function(){O=!1,oe=null,we.set(-1,0,0,0)}}}function o(){let O=!1,re=null,oe=null,we=null;return{setTest:function(be){be?Fe(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(be){re!==be&&!O&&(n.depthMask(be),re=be)},setFunc:function(be){if(oe!==be){switch(be){case V0:n.depthFunc(n.NEVER);break;case W0:n.depthFunc(n.ALWAYS);break;case X0:n.depthFunc(n.LESS);break;case ka:n.depthFunc(n.LEQUAL);break;case q0:n.depthFunc(n.EQUAL);break;case Y0:n.depthFunc(n.GEQUAL);break;case K0:n.depthFunc(n.GREATER);break;case Z0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=be}},setLocked:function(be){O=be},setClear:function(be){we!==be&&(n.clearDepth(be),we=be)},reset:function(){O=!1,re=null,oe=null,we=null}}}function a(){let O=!1,re=null,oe=null,we=null,be=null,mt=null,gt=null,Xt=null,dn=null;return{setTest:function(_t){O||(_t?Fe(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(_t){re!==_t&&!O&&(n.stencilMask(_t),re=_t)},setFunc:function(_t,pn,li){(oe!==_t||we!==pn||be!==li)&&(n.stencilFunc(_t,pn,li),oe=_t,we=pn,be=li)},setOp:function(_t,pn,li){(mt!==_t||gt!==pn||Xt!==li)&&(n.stencilOp(_t,pn,li),mt=_t,gt=pn,Xt=li)},setLocked:function(_t){O=_t},setClear:function(_t){dn!==_t&&(n.clearStencil(_t),dn=_t)},reset:function(){O=!1,re=null,oe=null,we=null,be=null,mt=null,gt=null,Xt=null,dn=null}}}let l=new r,c=new o,u=new a,h=new WeakMap,f=new WeakMap,d={},p={},g=new WeakMap,y=[],_=null,m=!1,x=null,M=null,E=null,I=null,R=null,C=null,B=null,v=new ge(0,0,0),S=0,z=!1,T=null,N=null,P=null,U=null,H=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,G=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=G>=2);let J=null,ue={},Y=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),ce=new dt().fromArray(Y),xe=new dt().fromArray(j);function Me(O,re,oe,we){let be=new Uint8Array(4),mt=n.createTexture();n.bindTexture(O,mt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<oe;gt++)s&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(re+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return mt}let Be={};Be[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Be[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Fe(n.DEPTH_TEST),c.setFunc(ka),Ge(!1),w(Wf),Fe(n.CULL_FACE),me(ui);function Fe(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function Ae(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function nt(O,re){return p[O]!==re?(n.bindFramebuffer(O,re),p[O]=re,s&&(O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=re),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function V(O,re){let oe=y,we=!1;if(O)if(oe=g.get(re),oe===void 0&&(oe=[],g.set(re,oe)),O.isWebGLMultipleRenderTargets){let be=O.texture;if(oe.length!==be.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,gt=be.length;mt<gt;mt++)oe[mt]=n.COLOR_ATTACHMENT0+mt;oe.length=be.length,we=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,we=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,we=!0);we&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function fn(O){return _!==O?(n.useProgram(O),_=O,!0):!1}let Ee={[Ss]:n.FUNC_ADD,[R0]:n.FUNC_SUBTRACT,[C0]:n.FUNC_REVERSE_SUBTRACT};if(s)Ee[Yf]=n.MIN,Ee[Kf]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Ee[Yf]=O.MIN_EXT,Ee[Kf]=O.MAX_EXT)}let De={[P0]:n.ZERO,[L0]:n.ONE,[I0]:n.SRC_COLOR,[rh]:n.SRC_ALPHA,[F0]:n.SRC_ALPHA_SATURATE,[B0]:n.DST_COLOR,[N0]:n.DST_ALPHA,[D0]:n.ONE_MINUS_SRC_COLOR,[oh]:n.ONE_MINUS_SRC_ALPHA,[O0]:n.ONE_MINUS_DST_COLOR,[U0]:n.ONE_MINUS_DST_ALPHA,[H0]:n.CONSTANT_COLOR,[z0]:n.ONE_MINUS_CONSTANT_COLOR,[k0]:n.CONSTANT_ALPHA,[G0]:n.ONE_MINUS_CONSTANT_ALPHA};function me(O,re,oe,we,be,mt,gt,Xt,dn,_t){if(O===ui){m===!0&&(Ae(n.BLEND),m=!1);return}if(m===!1&&(Fe(n.BLEND),m=!0),O!==w0){if(O!==x||_t!==z){if((M!==Ss||R!==Ss)&&(n.blendEquation(n.FUNC_ADD),M=Ss,R=Ss),_t)switch(O){case Mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Et:n.blendFunc(n.ONE,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Et:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,I=null,C=null,B=null,v.set(0,0,0),S=0,x=O,z=_t}return}be=be||re,mt=mt||oe,gt=gt||we,(re!==M||be!==R)&&(n.blendEquationSeparate(Ee[re],Ee[be]),M=re,R=be),(oe!==E||we!==I||mt!==C||gt!==B)&&(n.blendFuncSeparate(De[oe],De[we],De[mt],De[gt]),E=oe,I=we,C=mt,B=gt),(Xt.equals(v)===!1||dn!==S)&&(n.blendColor(Xt.r,Xt.g,Xt.b,dn),v.copy(Xt),S=dn),x=O,z=!1}function Tt(O,re){O.side===Mt?Ae(n.CULL_FACE):Fe(n.CULL_FACE);let oe=O.side===bn;re&&(oe=!oe),Ge(oe),O.blending===Mr&&O.transparent===!1?me(ui):me(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),l.setMask(O.colorWrite);let we=O.stencilWrite;u.setTest(we),we&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),X(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(O){T!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),T=O)}function w(O){O!==S0?(Fe(n.CULL_FACE),O!==N&&(O===Wf?n.cullFace(n.BACK):O===T0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),N=O}function b(O){O!==P&&(F&&n.lineWidth(O),P=O)}function X(O,re,oe){O?(Fe(n.POLYGON_OFFSET_FILL),(U!==re||H!==oe)&&(n.polygonOffset(re,oe),U=re,H=oe)):Ae(n.POLYGON_OFFSET_FILL)}function te(O){O?Fe(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function ee(O){O===void 0&&(O=n.TEXTURE0+D-1),J!==O&&(n.activeTexture(O),J=O)}function ne(O,re,oe){oe===void 0&&(J===null?oe=n.TEXTURE0+D-1:oe=J);let we=ue[oe];we===void 0&&(we={type:void 0,texture:void 0},ue[oe]=we),(we.type!==O||we.texture!==re)&&(J!==oe&&(n.activeTexture(oe),J=oe),n.bindTexture(O,re||Be[O]),we.type=O,we.texture=re)}function _e(){let O=ue[J];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(O){ce.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function lt(O){xe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),xe.copy(O))}function Rt(O,re){let oe=f.get(re);oe===void 0&&(oe=new WeakMap,f.set(re,oe));let we=oe.get(O);we===void 0&&(we=n.getUniformBlockIndex(re,O.name),oe.set(O,we))}function Ye(O,re){let we=f.get(re).get(O);h.get(re)!==we&&(n.uniformBlockBinding(re,we,O.__bindingPointIndex),h.set(re,we))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),s===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},J=null,ue={},p={},g=new WeakMap,y=[],_=null,m=!1,x=null,M=null,E=null,I=null,R=null,C=null,B=null,v=new ge(0,0,0),S=0,z=!1,T=null,N=null,P=null,U=null,H=null,ce.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:Fe,disable:Ae,bindFramebuffer:nt,drawBuffers:V,useProgram:fn,setBlending:me,setMaterial:Tt,setFlipSided:Ge,setCullFace:w,setLineWidth:b,setPolygonOffset:X,setScissorTest:te,activeTexture:ee,bindTexture:ne,unbindTexture:_e,compressedTexImage2D:he,compressedTexImage3D:de,texImage2D:ve,texImage3D:pe,updateUBOMapping:Rt,uniformBlockBinding:Ye,texStorage2D:Je,texStorage3D:Le,texSubImage2D:Te,texSubImage3D:Ve,compressedTexSubImage2D:Q,compressedTexSubImage3D:ht,scissor:He,viewport:lt,reset:ie}}function Sv(n,e,t,s,r,o,a){let l=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,b){return p?new OffscreenCanvas(w,b):yo("canvas")}function y(w,b,X,te){let ee=1;if((w.width>te||w.height>te)&&(ee=te/Math.max(w.width,w.height)),ee<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let ne=b?Ya:Math.floor,_e=ne(ee*w.width),he=ne(ee*w.height);f===void 0&&(f=g(_e,he));let de=X?g(_e,he):f;return de.width=_e,de.height=he,de.getContext("2d").drawImage(w,0,0,_e,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+he+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function _(w){return uh(w.width)&&uh(w.height)}function m(w){return l?!1:w.wrapS!==_n||w.wrapT!==_n||w.minFilter!==Pt&&w.minFilter!==jt}function x(w,b){return w.generateMipmaps&&b&&w.minFilter!==Pt&&w.minFilter!==jt}function M(w){n.generateMipmap(w)}function E(w,b,X,te,ee=!1){if(l===!1)return b;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=b;if(b===n.RED&&(X===n.FLOAT&&(ne=n.R32F),X===n.HALF_FLOAT&&(ne=n.R16F),X===n.UNSIGNED_BYTE&&(ne=n.R8)),b===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ne=n.R8UI),X===n.UNSIGNED_SHORT&&(ne=n.R16UI),X===n.UNSIGNED_INT&&(ne=n.R32UI),X===n.BYTE&&(ne=n.R8I),X===n.SHORT&&(ne=n.R16I),X===n.INT&&(ne=n.R32I)),b===n.RG&&(X===n.FLOAT&&(ne=n.RG32F),X===n.HALF_FLOAT&&(ne=n.RG16F),X===n.UNSIGNED_BYTE&&(ne=n.RG8)),b===n.RGBA){let _e=ee?Va:st.getTransfer(te);X===n.FLOAT&&(ne=n.RGBA32F),X===n.HALF_FLOAT&&(ne=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ne=_e===vt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function I(w,b,X){return x(w,X)===!0||w.isFramebufferTexture&&w.minFilter!==Pt&&w.minFilter!==jt?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function R(w){return w===Pt||w===Ga||w===Yi?n.NEAREST:n.LINEAR}function C(w){let b=w.target;b.removeEventListener("dispose",C),v(b),b.isVideoTexture&&h.delete(b)}function B(w){let b=w.target;b.removeEventListener("dispose",B),z(b)}function v(w){let b=s.get(w);if(b.__webglInit===void 0)return;let X=w.source,te=d.get(X);if(te){let ee=te[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(w),Object.keys(te).length===0&&d.delete(X)}s.remove(w)}function S(w){let b=s.get(w);n.deleteTexture(b.__webglTexture);let X=w.source,te=d.get(X);delete te[b.__cacheKey],a.memory.textures--}function z(w){let b=w.texture,X=s.get(w),te=s.get(b);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(X.__webglFramebuffer[ee]))for(let ne=0;ne<X.__webglFramebuffer[ee].length;ne++)n.deleteFramebuffer(X.__webglFramebuffer[ee][ne]);else n.deleteFramebuffer(X.__webglFramebuffer[ee]);X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[ee])}else{if(Array.isArray(X.__webglFramebuffer))for(let ee=0;ee<X.__webglFramebuffer.length;ee++)n.deleteFramebuffer(X.__webglFramebuffer[ee]);else n.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ee=0;ee<X.__webglColorRenderbuffer.length;ee++)X.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[ee]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,ne=b.length;ee<ne;ee++){let _e=s.get(b[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),s.remove(b[ee])}s.remove(b),s.remove(w)}let T=0;function N(){T=0}function P(){let w=T;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),T+=1,w}function U(w){let b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function H(w,b){let X=s.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){let te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(X,w,b);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+b)}function D(w,b){let X=s.get(w);if(w.version>0&&X.__version!==w.version){ce(X,w,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+b)}function F(w,b){let X=s.get(w);if(w.version>0&&X.__version!==w.version){ce(X,w,b);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+b)}function G(w,b){let X=s.get(w);if(w.version>0&&X.__version!==w.version){xe(X,w,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+b)}let Z={[jn]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},J={[Pt]:n.NEAREST,[Ga]:n.NEAREST_MIPMAP_NEAREST,[Yi]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Kh]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},ue={[_g]:n.NEVER,[bg]:n.ALWAYS,[yg]:n.LESS,[Wp]:n.LEQUAL,[Mg]:n.EQUAL,[Eg]:n.GEQUAL,[xg]:n.GREATER,[vg]:n.NOTEQUAL};function Y(w,b,X){if(X?(n.texParameteri(w,n.TEXTURE_WRAP_S,Z[b.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Z[b.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Z[b.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,J[b.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,J[b.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==_n||b.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,R(b.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,R(b.minFilter)),b.minFilter!==Pt&&b.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let te=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Pt||b.minFilter!==Yi&&b.minFilter!==Qn||b.type===Pi&&e.has("OES_texture_float_linear")===!1||l===!1&&b.type===ei&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||s.get(b).__currentAnisotropy)&&(n.texParameterf(w,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy)}}function j(w,b){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",C));let te=b.source,ee=d.get(te);ee===void 0&&(ee={},d.set(te,ee));let ne=U(b);if(ne!==w.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ee[ne].usedTimes++;let _e=ee[w.__cacheKey];_e!==void 0&&(ee[w.__cacheKey].usedTimes--,_e.usedTimes===0&&S(b)),w.__cacheKey=ne,w.__webglTexture=ee[ne].texture}return X}function ce(w,b,X){let te=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=n.TEXTURE_3D);let ee=j(w,b),ne=b.source;t.bindTexture(te,w.__webglTexture,n.TEXTURE0+X);let _e=s.get(ne);if(ne.version!==_e.__version||ee===!0){t.activeTexture(n.TEXTURE0+X);let he=st.getPrimaries(st.workingColorSpace),de=b.colorSpace===Fn?null:st.getPrimaries(b.colorSpace),Te=b.colorSpace===Fn||he===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Ve=m(b)&&_(b.image)===!1,Q=y(b.image,Ve,!1,r.maxTextureSize);Q=Ge(b,Q);let ht=_(Q)||l,Je=o.convert(b.format,b.colorSpace),Le=o.convert(b.type),ve=E(b.internalFormat,Je,Le,b.colorSpace,b.isVideoTexture);Y(te,b,ht);let pe,He=b.mipmaps,lt=l&&b.isVideoTexture!==!0&&ve!==zp,Rt=_e.__version===void 0||ee===!0,Ye=I(b,Q,ht);if(b.isDepthTexture)ve=n.DEPTH_COMPONENT,l?b.type===Pi?ve=n.DEPTH_COMPONENT32F:b.type===Wi?ve=n.DEPTH_COMPONENT24:b.type===ws?ve=n.DEPTH24_STENCIL8:ve=n.DEPTH_COMPONENT16:b.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Rs&&ve===n.DEPTH_COMPONENT&&b.type!==Zh&&b.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Wi,Le=o.convert(b.type)),b.format===Tr&&ve===n.DEPTH_COMPONENT&&(ve=n.DEPTH_STENCIL,b.type!==ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ws,Le=o.convert(b.type))),Rt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ve,Q.width,Q.height,0,Je,Le,null));else if(b.isDataTexture)if(He.length>0&&ht){lt&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ye,ve,He[0].width,He[0].height);for(let ie=0,O=He.length;ie<O;ie++)pe=He[ie],lt?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Je,Le,pe.data):t.texImage2D(n.TEXTURE_2D,ie,ve,pe.width,pe.height,0,Je,Le,pe.data);b.generateMipmaps=!1}else lt?(Rt&&t.texStorage2D(n.TEXTURE_2D,Ye,ve,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Je,Le,Q.data)):t.texImage2D(n.TEXTURE_2D,0,ve,Q.width,Q.height,0,Je,Le,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,ve,He[0].width,He[0].height,Q.depth);for(let ie=0,O=He.length;ie<O;ie++)pe=He[ie],b.format!==On?Je!==null?lt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Q.depth,Je,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,ve,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Q.depth,Je,Le,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,ve,pe.width,pe.height,Q.depth,0,Je,Le,pe.data)}else{lt&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ye,ve,He[0].width,He[0].height);for(let ie=0,O=He.length;ie<O;ie++)pe=He[ie],b.format!==On?Je!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Je,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,ve,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Je,Le,pe.data):t.texImage2D(n.TEXTURE_2D,ie,ve,pe.width,pe.height,0,Je,Le,pe.data)}else if(b.isDataArrayTexture)lt?(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,ve,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Je,Le,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,Je,Le,Q.data);else if(b.isData3DTexture)lt?(Rt&&t.texStorage3D(n.TEXTURE_3D,Ye,ve,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Je,Le,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,Je,Le,Q.data);else if(b.isFramebufferTexture){if(Rt)if(lt)t.texStorage2D(n.TEXTURE_2D,Ye,ve,Q.width,Q.height);else{let ie=Q.width,O=Q.height;for(let re=0;re<Ye;re++)t.texImage2D(n.TEXTURE_2D,re,ve,ie,O,0,Je,Le,null),ie>>=1,O>>=1}}else if(He.length>0&&ht){lt&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ye,ve,He[0].width,He[0].height);for(let ie=0,O=He.length;ie<O;ie++)pe=He[ie],lt?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Je,Le,pe):t.texImage2D(n.TEXTURE_2D,ie,ve,Je,Le,pe);b.generateMipmaps=!1}else lt?(Rt&&t.texStorage2D(n.TEXTURE_2D,Ye,ve,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Je,Le,Q)):t.texImage2D(n.TEXTURE_2D,0,ve,Je,Le,Q);x(b,ht)&&M(te),_e.__version=ne.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function xe(w,b,X){if(b.image.length!==6)return;let te=j(w,b),ee=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+X);let ne=s.get(ee);if(ee.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+X);let _e=st.getPrimaries(st.workingColorSpace),he=b.colorSpace===Fn?null:st.getPrimaries(b.colorSpace),de=b.colorSpace===Fn||_e===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Te=b.isCompressedTexture||b.image[0].isCompressedTexture,Ve=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!Te&&!Ve?Q[ie]=y(b.image[ie],!1,!0,r.maxCubemapSize):Q[ie]=Ve?b.image[ie].image:b.image[ie],Q[ie]=Ge(b,Q[ie]);let ht=Q[0],Je=_(ht)||l,Le=o.convert(b.format,b.colorSpace),ve=o.convert(b.type),pe=E(b.internalFormat,Le,ve,b.colorSpace),He=l&&b.isVideoTexture!==!0,lt=ne.__version===void 0||te===!0,Rt=I(b,ht,Je);Y(n.TEXTURE_CUBE_MAP,b,Je);let Ye;if(Te){He&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,pe,ht.width,ht.height);for(let ie=0;ie<6;ie++){Ye=Q[ie].mipmaps;for(let O=0;O<Ye.length;O++){let re=Ye[O];b.format!==On?Le!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O,0,0,re.width,re.height,Le,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O,pe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O,0,0,re.width,re.height,Le,ve,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O,pe,re.width,re.height,0,Le,ve,re.data)}}}else{Ye=b.mipmaps,He&&lt&&(Ye.length>0&&Rt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,pe,Q[0].width,Q[0].height));for(let ie=0;ie<6;ie++)if(Ve){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q[ie].width,Q[ie].height,Le,ve,Q[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Q[ie].width,Q[ie].height,0,Le,ve,Q[ie].data);for(let O=0;O<Ye.length;O++){let oe=Ye[O].image[ie].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O+1,0,0,oe.width,oe.height,Le,ve,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O+1,pe,oe.width,oe.height,0,Le,ve,oe.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,ve,Q[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Le,ve,Q[ie]);for(let O=0;O<Ye.length;O++){let re=Ye[O];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O+1,0,0,Le,ve,re.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O+1,pe,Le,ve,re.image[ie])}}}x(b,Je)&&M(n.TEXTURE_CUBE_MAP),ne.__version=ee.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Me(w,b,X,te,ee,ne){let _e=o.convert(X.format,X.colorSpace),he=o.convert(X.type),de=E(X.internalFormat,_e,he,X.colorSpace);if(!s.get(b).__hasExternalTextures){let Ve=Math.max(1,b.width>>ne),Q=Math.max(1,b.height>>ne);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,de,Ve,Q,b.depth,0,_e,he,null):t.texImage2D(ee,ne,de,Ve,Q,0,_e,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),me(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ee,s.get(X).__webglTexture,0,De(b)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ee,s.get(X).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(w,b,X){if(n.bindRenderbuffer(n.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let te=l===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||me(b)){let ee=b.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Pi?te=n.DEPTH_COMPONENT32F:ee.type===Wi&&(te=n.DEPTH_COMPONENT24));let ne=De(b);me(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,te,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,te,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){let te=De(b);X&&me(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,b.width,b.height):me(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let te=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0;ee<te.length;ee++){let ne=te[ee],_e=o.convert(ne.format,ne.colorSpace),he=o.convert(ne.type),de=E(ne.internalFormat,_e,he,ne.colorSpace),Te=De(b);X&&me(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,de,b.width,b.height):me(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,de,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,de,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);let te=s.get(b.depthTexture).__webglTexture,ee=De(b);if(b.depthTexture.format===Rs)me(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(b.depthTexture.format===Tr)me(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ae(w){let b=s.get(w),X=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Fe(b.__webglFramebuffer,w)}else if(X){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]=n.createRenderbuffer(),Be(b.__webglDepthbuffer[te],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),Be(b.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(w,b,X){let te=s.get(w);b!==void 0&&Me(te.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ae(w)}function V(w){let b=w.texture,X=s.get(w),te=s.get(b);w.addEventListener("dispose",B),w.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=b.version,a.memory.textures++);let ee=w.isWebGLCubeRenderTarget===!0,ne=w.isWebGLMultipleRenderTargets===!0,_e=_(w)||l;if(ee){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(l&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let de=0;de<b.mipmaps.length;de++)X.__webglFramebuffer[he][de]=n.createFramebuffer()}else X.__webglFramebuffer[he]=n.createFramebuffer()}else{if(l&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)X.__webglFramebuffer[he]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){let he=w.texture;for(let de=0,Te=he.length;de<Te;de++){let Ve=s.get(he[de]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&w.samples>0&&me(w)===!1){let he=ne?b:[b];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){let Te=he[de];X.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[de]);let Ve=o.convert(Te.format,Te.colorSpace),Q=o.convert(Te.type),ht=E(Te.internalFormat,Ve,Q,Te.colorSpace,w.isXRRenderTarget===!0),Je=De(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,ht,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,X.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Y(n.TEXTURE_CUBE_MAP,b,_e);for(let he=0;he<6;he++)if(l&&b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Me(X.__webglFramebuffer[he][de],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,de);else Me(X.__webglFramebuffer[he],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(b,_e)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let he=w.texture;for(let de=0,Te=he.length;de<Te;de++){let Ve=he[de],Q=s.get(Ve);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Y(n.TEXTURE_2D,Ve,_e),Me(X.__webglFramebuffer,w,Ve,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),x(Ve,_e)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(l?he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,te.__webglTexture),Y(he,b,_e),l&&b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Me(X.__webglFramebuffer[de],w,b,n.COLOR_ATTACHMENT0,he,de);else Me(X.__webglFramebuffer,w,b,n.COLOR_ATTACHMENT0,he,0);x(b,_e)&&M(he),t.unbindTexture()}w.depthBuffer&&Ae(w)}function fn(w){let b=_(w)||l,X=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0,ee=X.length;te<ee;te++){let ne=X[te];if(x(ne,b)){let _e=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=s.get(ne).__webglTexture;t.bindTexture(_e,he),M(_e),t.unbindTexture()}}}function Ee(w){if(l&&w.samples>0&&me(w)===!1){let b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],X=w.width,te=w.height,ee=n.COLOR_BUFFER_BIT,ne=[],_e=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=s.get(w),de=w.isWebGLMultipleRenderTargets===!0;if(de)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){ne.push(n.COLOR_ATTACHMENT0+Te),w.depthBuffer&&ne.push(_e);let Ve=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ve===!1&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Te]),Ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),de){let Q=s.get(b[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,ee,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,he.__webglColorRenderbuffer[Te]);let Ve=s.get(b[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function De(w){return Math.min(r.maxSamples,w.samples)}function me(w){let b=s.get(w);return l&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(w){let b=a.render.frame;h.get(w)!==b&&(h.set(w,b),w.update())}function Ge(w,b){let X=w.colorSpace,te=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===hh||X!==Ft&&X!==Fn&&(st.getTransfer(X)===vt?l===!1?e.has("EXT_sRGB")===!0&&te===On?(w.format=hh,w.minFilter=jt,w.generateMipmaps=!1):b=Ka.sRGBToLinear(b):(te!==On||ee!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=D,this.setTexture3D=F,this.setTextureCube=G,this.rebindTextures=nt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=fn,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=me}function Tv(n,e,t){let s=t.isWebGL2;function r(o,a=Fn){let l,c=st.getTransfer(a);if(o===Ki)return n.UNSIGNED_BYTE;if(o===Up)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Bp)return n.UNSIGNED_SHORT_5_5_5_1;if(o===rg)return n.BYTE;if(o===og)return n.SHORT;if(o===Zh)return n.UNSIGNED_SHORT;if(o===Np)return n.INT;if(o===Wi)return n.UNSIGNED_INT;if(o===Pi)return n.FLOAT;if(o===ei)return s?n.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===ag)return n.ALPHA;if(o===On)return n.RGBA;if(o===lg)return n.LUMINANCE;if(o===cg)return n.LUMINANCE_ALPHA;if(o===Rs)return n.DEPTH_COMPONENT;if(o===Tr)return n.DEPTH_STENCIL;if(o===hh)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===hg)return n.RED;if(o===Op)return n.RED_INTEGER;if(o===ug)return n.RG;if(o===Fp)return n.RG_INTEGER;if(o===Hp)return n.RGBA_INTEGER;if(o===Ec||o===bc||o===Sc||o===Tc)if(c===vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===Ec)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===Ec)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===bc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Sc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Tc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===$f||o===Jf||o===jf||o===Qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===$f)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Jf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===zp)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ed||o===td)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===ed)return c===vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===td)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===nd||o===id||o===sd||o===rd||o===od||o===ad||o===ld||o===cd||o===hd||o===ud||o===fd||o===dd||o===pd||o===md)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===nd)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===id)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===sd)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===rd)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===od)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ad)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===ld)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===cd)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===hd)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ud)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===fd)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===dd)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===pd)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===md)return c===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ac||o===gd||o===_d)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===Ac)return c===vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===gd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===_d)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===fg||o===yd||o===Md||o===xd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===Ac)return l.COMPRESSED_RED_RGTC1_EXT;if(o===yd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Md)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===xd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===ws?s?n.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}function wv(n,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function s(_,m){m.color.getRGB(_.fogColor.value,Kp(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,x,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(_,m):m.isMeshToonMaterial?(o(_,m),f(_,m)):m.isMeshPhongMaterial?(o(_,m),h(_,m)):m.isMeshStandardMaterial?(o(_,m),d(_,m),m.isMeshPhysicalMaterial&&p(_,m,E)):m.isMeshMatcapMaterial?(o(_,m),g(_,m)):m.isMeshDepthMaterial?o(_,m):m.isMeshDistanceMaterial?(o(_,m),y(_,m)):m.isMeshNormalMaterial?o(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&l(_,m)):m.isPointsMaterial?c(_,m,x,M):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===bn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===bn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let x=e.get(m).envMap;if(x&&(_.envMap.value=x,_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;let M=n._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*M,t(m.lightMap,_.lightMapTransform)}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function l(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,x,M){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*x,_.scale.value=M*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),e.get(m).envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,x){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&_.clearcoatNormalScale.value.negate())),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function y(_,m){let x=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function Rv(n,e,t,s){let r={},o={},a=[],l=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,M){let E=M.program;s.uniformBlockBinding(x,E)}function u(x,M){let E=r[x.id];E===void 0&&(g(x),E=h(x),r[x.id]=E,x.addEventListener("dispose",_));let I=M.program;s.updateUBOMapping(x,I);let R=e.render.frame;o[x.id]!==R&&(d(x),o[x.id]=R)}function h(x){let M=f();x.__bindingPointIndex=M;let E=n.createBuffer(),I=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function f(){for(let x=0;x<l;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=r[x.id],E=x.uniforms,I=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,C=E.length;R<C;R++){let B=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,S=B.length;v<S;v++){let z=B[v];if(p(z,R,v,I)===!0){let T=z.__offset,N=Array.isArray(z.value)?z.value:[z.value],P=0;for(let U=0;U<N.length;U++){let H=N[U],D=y(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,T+P,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,P),P+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,E,I){let R=x.value,C=M+"_"+E;if(I[C]===void 0)return typeof R=="number"||typeof R=="boolean"?I[C]=R:I[C]=R.clone(),!0;{let B=I[C];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return I[C]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(x){let M=x.uniforms,E=0,I=16;for(let C=0,B=M.length;C<B;C++){let v=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,z=v.length;S<z;S++){let T=v[S],N=Array.isArray(T.value)?T.value:[T.value];for(let P=0,U=N.length;P<U;P++){let H=N[P],D=y(H),F=E%I;F!==0&&I-F<D.boundary&&(E+=I-F),T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,E+=D.storage}}}let R=E%I;return R>0&&(E+=I-R),x.__size=E,x.__cache={},this}function y(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function _(x){let M=x.target;M.removeEventListener("dispose",_);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function m(){for(let x in r)n.deleteBuffer(r[x]);a=[],r={},o={}}return{bind:c,update:u,dispose:m}}function Sp(n,e,t,s,r,o,a){let l=Rh.distanceSqToPoint(n);if(l<t){let c=new L;Rh.closestPointToPoint(n,c),c.applyMatrix4(s);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:a})}}function Qh(){let n=0,e=0,t=0,s=0;function r(o,a,l,c){n=o,e=l,t=-3*o+3*a-2*l-c,s=2*o-2*a+l+c}return{initCatmullRom:function(o,a,l,c,u){r(a,l,u*(l-o),u*(c-a))},initNonuniformCatmullRom:function(o,a,l,c,u,h,f){let d=(a-o)/u-(l-o)/(u+h)+(l-a)/h,p=(l-a)/h-(c-a)/(h+f)+(c-l)/f;d*=h,p*=h,r(a,l,d,p)},calc:function(o){let a=o*o,l=a*o;return n+e*o+t*a+s*l}}}function Tp(n,e,t,s,r){let o=(s-e)*.5,a=(r-t)*.5,l=n*n,c=n*l;return(2*t-2*s+o+a)*c+(-3*t+3*s-2*o-a)*l+o*n+t}function Iv(n,e){let t=1-n;return t*t*e}function Dv(n,e){return 2*(1-n)*n*e}function Nv(n,e){return n*n*e}function mo(n,e,t,s){return Iv(n,e)+Dv(n,t)+Nv(n,s)}function Uv(n,e){let t=1-n;return t*t*t*e}function Bv(n,e){let t=1-n;return 3*t*t*n*e}function Ov(n,e){return 3*(1-n)*n*n*e}function Fv(n,e){return n*n*n*e}function go(n,e,t,s,r){return Uv(n,e)+Bv(n,t)+Ov(n,s)+Fv(n,r)}function za(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function zv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function kv(n){function e(r,o){return n[r]-n[o]}let t=n.length,s=new Array(t);for(let r=0;r!==t;++r)s[r]=r;return s.sort(e),s}function Ap(n,e,t){let s=n.length,r=new n.constructor(s);for(let o=0,a=0;a!==s;++o){let l=t[o]*e;for(let c=0;c!==e;++c)r[a++]=n[l+c]}return r}function tm(n,e,t,s){let r=1,o=n[0];for(;o!==void 0&&o[s]===void 0;)o=n[r++];if(o===void 0)return;let a=o[s];if(a!==void 0)if(Array.isArray(a))do a=o[s],a!==void 0&&(e.push(o.time),t.push.apply(t,a)),o=n[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[s],a!==void 0&&(e.push(o.time),a.toArray(t,t.length)),o=n[r++];while(o!==void 0);else do a=o[s],a!==void 0&&(e.push(o.time),t.push(a)),o=n[r++];while(o!==void 0)}function Gv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Di;case"color":return ml;case"quaternion":return pi;case"bool":case"boolean":return es;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Vv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Gv(n.type);if(n.times===void 0){let t=[],s=[];tm(n.keys,t,s,"value"),n.times=t,n.values=s}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}function Pp(){return(typeof performance>"u"?Date:performance).now()}var S0,Wf,T0,Lp,A0,Ri,fi,bn,Mt,ui,Mr,Et,Xf,qf,w0,Ss,R0,C0,Yf,Kf,P0,L0,I0,D0,rh,oh,N0,U0,B0,O0,F0,H0,z0,k0,G0,V0,W0,X0,ka,q0,Y0,K0,Z0,Ip,$0,J0,qi,j0,Q0,eg,tg,ng,ig,Zf,sg,Dp,br,Sr,ah,lh,El,jn,_n,_o,Pt,Ga,Yi,jt,Kh,Qn,Ki,rg,og,Zh,Np,Wi,Pi,ei,Up,Bp,ws,ag,On,lg,cg,Rs,Tr,hg,Op,ug,Fp,Hp,Ec,bc,Sc,Tc,$f,Jf,jf,Qf,zp,ed,td,nd,id,sd,rd,od,ad,ld,cd,hd,ud,fd,dd,pd,md,Ac,gd,_d,fg,yd,Md,xd,Ar,Ps,wc,vd,Ed,bd,dg,kp,bl,Ro,Gp,Cs,pg,mg,Vp,gg,Fn,ct,Ft,$h,Sl,Va,vt,Wa,Xa,er,Sd,_g,yg,Mg,Wp,xg,vg,Eg,bg,ch,Td,hh,Li,qa,Zi,on,Ad,xr,wr,Xp,le,Ze,Rc,wd,Rd,Cd,ca,Hg,st,tr,Ka,zg,Za,kg,Qt,dt,fh,yn,$a,dh,Pn,L,Lc,Pd,bt,Ei,Kn,ha,nr,ir,sr,Hi,zi,Ms,so,ua,fa,xs,Gg,ro,Dc,Ln,bi,Nc,da,ki,Uc,pa,Bc,Rr,Pe,rr,Zn,Vg,Wg,Gi,ma,Rn,Ld,Id,Ja,ja,Xg,Dd,or,Si,ga,oo,qg,Yg,Nd,Ud,Bd,Kg,Zg,Lt,$n,Ti,Oc,Ai,ar,lr,Od,Fc,Hc,zc,_a,As,Yp,Vi,ya,ge,an,$g,In,ae,Ut,Ma,xt,Qa,el,it,Jg,Bn,Gc,cr,Cn,ao,Yt,pt,Fd,vs,xa,Hd,hr,ur,fr,Vc,va,Ea,ba,Sa,zd,kd,Gd,Ta,Aa,$,$e,Dr,e_,t_,en,tl,Ot,dr,pr,ph,nl,mh,Wc,n_,i_,Ci,Es,Ra,Mo,Ie,r_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,y_,M_,x_,v_,E_,b_,S_,T_,A_,w_,R_,C_,P_,L_,I_,D_,N_,U_,B_,O_,F_,H_,z_,k_,G_,V_,W_,X_,q_,Y_,K_,Z_,$_,J_,j_,Q_,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,_y,yy,My,xy,vy,Ey,by,Sy,Ty,Ay,wy,Ry,Cy,Py,Ly,Iy,Dy,Ny,Uy,By,Oy,Fy,Hy,zy,ky,Gy,Vy,Wy,Xy,qy,Yy,Ky,Zy,$y,Jy,jy,Qy,eM,tM,nM,iM,sM,rM,oM,aM,lM,cM,hM,uM,fM,dM,pM,mM,gM,_M,yM,MM,xM,vM,EM,bM,SM,TM,AM,wM,RM,CM,PM,LM,IM,DM,NM,UM,BM,OM,ze,se,ci,Ca,$i,_r,Vd,Ts,Xc,Wd,qc,Yc,Kc,bs,mr,Xd,il,sl,$p,Jp,jp,Qp,em,Zd,$d,Jd,jd,Qd,gh,_h,yh,Zc,Er,Gx,Vx,jx,Qx,tv,cv,xh,vh,gv,Eh,bh,xv,vv,Sh,rt,Av,po,Th,xo,Ah,rl,ol,vo,mn,Eo,hp,up,fp,Cv,dp,La,$c,pp,Jc,al,bo,wh,mp,Pv,ll,Ls,gr,gp,Ia,_p,Lv,lo,co,cl,Hn,yp,Mp,xp,jc,Da,Ji,vp,Ep,kt,hl,Is,bp,Rh,Na,Ua,Pr,zn,ti,ul,Ch,Ba,Qc,eh,th,So,Ph,Lh,Ih,Dh,Nh,fl,Uh,Hv,Mn,dl,Bh,Oa,Fa,nh,Ha,ln,Ds,di,ji,pl,Lr,kn,Qi,Oh,Fh,Hh,Gn,es,ml,Ii,zh,pi,ts,Di,gl,Xi,kh,Wv,Ni,wi,Gh,To,Vh,Ir,Ao,ih,wp,Rp,wo,Wh,_l,Cp,ho,sh,Xh,yl,qh,Ml,ns,xl,vl,eu,Xv,tu,qv,Yv,Kv,Zv,$v,Jv,jv,Yh,yt,Ab,mi=Yn(()=>{S0=0,Wf=1,T0=2,Lp=1,A0=2,Ri=3,fi=0,bn=1,Mt=2,ui=0,Mr=1,Et=2,Xf=3,qf=4,w0=5,Ss=100,R0=101,C0=102,Yf=103,Kf=104,P0=200,L0=201,I0=202,D0=203,rh=204,oh=205,N0=206,U0=207,B0=208,O0=209,F0=210,H0=211,z0=212,k0=213,G0=214,V0=0,W0=1,X0=2,ka=3,q0=4,Y0=5,K0=6,Z0=7,Ip=0,$0=1,J0=2,qi=0,j0=1,Q0=2,eg=3,tg=4,ng=5,ig=6,Zf="attached",sg="detached",Dp=300,br=301,Sr=302,ah=303,lh=304,El=306,jn=1e3,_n=1001,_o=1002,Pt=1003,Ga=1004,Yi=1005,jt=1006,Kh=1007,Qn=1008,Ki=1009,rg=1010,og=1011,Zh=1012,Np=1013,Wi=1014,Pi=1015,ei=1016,Up=1017,Bp=1018,ws=1020,ag=1021,On=1023,lg=1024,cg=1025,Rs=1026,Tr=1027,hg=1028,Op=1029,ug=1030,Fp=1031,Hp=1033,Ec=33776,bc=33777,Sc=33778,Tc=33779,$f=35840,Jf=35841,jf=35842,Qf=35843,zp=36196,ed=37492,td=37496,nd=37808,id=37809,sd=37810,rd=37811,od=37812,ad=37813,ld=37814,cd=37815,hd=37816,ud=37817,fd=37818,dd=37819,pd=37820,md=37821,Ac=36492,gd=36494,_d=36495,fg=36283,yd=36284,Md=36285,xd=36286,Ar=2300,Ps=2301,wc=2302,vd=2400,Ed=2401,bd=2402,dg=2500,kp=0,bl=1,Ro=2,Gp=3e3,Cs=3001,pg=3200,mg=3201,Vp=0,gg=1,Fn="",ct="srgb",Ft="srgb-linear",$h="display-p3",Sl="display-p3-linear",Va="linear",vt="srgb",Wa="rec709",Xa="p3",er=7680,Sd=519,_g=512,yg=513,Mg=514,Wp=515,xg=516,vg=517,Eg=518,bg=519,ch=35044,Td="300 es",hh=1035,Li=2e3,qa=2001,Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let s=this._listeners[e.type];if(s!==void 0){e.target=this;let r=s.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=1234567,xr=Math.PI/180,wr=180/Math.PI;Xp={DEG2RAD:xr,RAD2DEG:wr,generateUUID:Jn,clamp:Kt,euclideanModulo:Jh,mapLinear:Sg,inverseLerp:Tg,lerp:uo,damp:Ag,pingpong:wg,smoothstep:Rg,smootherstep:Cg,randInt:Pg,randFloat:Lg,randFloatSpread:Ig,seededRandom:Dg,degToRad:Ng,radToDeg:Ug,isPowerOfTwo:uh,ceilPowerOfTwo:Bg,floorPowerOfTwo:Ya,setQuaternionFromProperEuler:Og,normalize:ut,denormalize:hi},le=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,s=this.y,r=e.elements;return this.x=r[0]*t+r[3]*s+r[6],this.y=r[1]*t+r[4]*s+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Kt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let s=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*s-a*r+e.x,this.y=o*r+a*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class n{constructor(e,t,s,r,o,a,l,c,u){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,r,o,a,l,c,u)}set(e,t,s,r,o,a,l,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=o,h[5]=c,h[6]=s,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,r=t.elements,o=this.elements,a=s[0],l=s[3],c=s[6],u=s[1],h=s[4],f=s[7],d=s[2],p=s[5],g=s[8],y=r[0],_=r[3],m=r[6],x=r[1],M=r[4],E=r[7],I=r[2],R=r[5],C=r[8];return o[0]=a*y+l*x+c*I,o[3]=a*_+l*M+c*R,o[6]=a*m+l*E+c*C,o[1]=u*y+h*x+f*I,o[4]=u*_+h*M+f*R,o[7]=u*m+h*E+f*C,o[2]=d*y+p*x+g*I,o[5]=d*_+p*M+g*R,o[8]=d*m+p*E+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*l*u-s*o*h+s*l*c+r*o*u-r*a*c}invert(){let e=this.elements,t=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=h*a-l*u,d=l*c-h*o,p=u*o-a*c,g=t*f+s*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(r*u-h*s)*y,e[2]=(l*s-r*a)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*o-l*t)*y,e[6]=p*y,e[7]=(s*c-u*t)*y,e[8]=(a*t-s*o)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,r,o,a,l){let c=Math.cos(o),u=Math.sin(o);return this.set(s*c,s*u,-s*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,s=e.elements;for(let r=0;r<9;r++)if(t[r]!==s[r])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new Ze;wd={};Rd=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cd=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[Ft]:{transfer:Va,primaries:Wa,toReference:n=>n,fromReference:n=>n},[ct]:{transfer:vt,primaries:Wa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Sl]:{transfer:Va,primaries:Xa,toReference:n=>n.applyMatrix3(Cd),fromReference:n=>n.applyMatrix3(Rd)},[$h]:{transfer:vt,primaries:Xa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Cd),fromReference:n=>n.applyMatrix3(Rd).convertLinearToSRGB()}},Hg=new Set([Ft,Sl]),st={enabled:!0,_workingColorSpace:Ft,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Hg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let s=ca[e].toReference,r=ca[t].fromReference;return r(s(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ca[n].primaries},getTransfer:function(n){return n===Fn?Va:ca[n].transfer}};Ka=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=yo("canvas")),tr.width=e.width,tr.height=e.height;let s=tr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);let r=s.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=vr(o[a]/255)*255;return s.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(vr(t[s]/255)*255):t[s]=vr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zg=0,Za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let s={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(Pc(r[a].image)):o.push(Pc(r[a]))}else o=Pc(r);s.url=o}return t||(e.images[this.uuid]=s),s}};kg=0,Qt=class n extends Zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,s=_n,r=_n,o=jt,a=Qn,l=On,c=Ki,u=n.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Jn(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Cs?ct:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Cs:Gp}set encoding(e){fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cs?ct:Fn}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Dp;Qt.DEFAULT_ANISOTROPY=1;dt=class n{constructor(e=0,t=0,s=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,r){return this.x=e,this.y=t,this.z=s,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,s=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*s+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*s+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*s+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*s+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,r,o,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],p=c[5],g=c[9],y=c[2],_=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+_)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(u+1)/2,E=(p+1)/2,I=(m+1)/2,R=(h+d)/4,C=(f+y)/4,B=(g+_)/4;return M>E&&M>I?M<.01?(s=0,r=.707106781,o=.707106781):(s=Math.sqrt(M),r=R/s,o=C/s):E>I?E<.01?(s=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),s=R/r,o=B/r):I<.01?(s=.707106781,r=.707106781,o=0):(o=Math.sqrt(I),s=C/o,r=B/o),this.set(s,r,o,t),this}let x=Math.sqrt((_-g)*(_-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(_-g)/x,this.y=(f-y)/x,this.z=(d-h)/x,this.w=Math.acos((u+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fh=class extends Zi{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let r={width:e,height:t,depth:1};s.encoding!==void 0&&(fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Cs?ct:Fn),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Qt(r,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends fh{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}},$a=class extends Qt{constructor(e=null,t=1,s=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dh=class extends Qt{constructor(e=null,t=1,s=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pn=class{constructor(e=0,t=0,s=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=r}static slerpFlat(e,t,s,r,o,a,l){let c=s[r+0],u=s[r+1],h=s[r+2],f=s[r+3],d=o[a+0],p=o[a+1],g=o[a+2],y=o[a+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(l===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(f!==y||c!==d||u!==p||h!==g){let _=1-l,m=c*d+u*p+h*g+f*y,x=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let I=Math.sqrt(M),R=Math.atan2(I,m*x);_=Math.sin(_*R)/I,l=Math.sin(l*R)/I}let E=l*x;if(c=c*_+d*E,u=u*_+p*E,h=h*_+g*E,f=f*_+y*E,_===1-l){let I=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=I,u*=I,h*=I,f*=I}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,s,r,o,a){let l=s[r],c=s[r+1],u=s[r+2],h=s[r+3],f=o[a],d=o[a+1],p=o[a+2],g=o[a+3];return e[t]=l*g+h*f+c*p-u*d,e[t+1]=c*g+h*d+u*f-l*p,e[t+2]=u*g+h*p+l*d-c*f,e[t+3]=h*g-l*f-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,r){return this._x=e,this._y=t,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let s=e._x,r=e._y,o=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(s/2),h=l(r/2),f=l(o/2),d=c(s/2),p=c(r/2),g=c(o/2);switch(a){case"XYZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"YZX":this._x=d*h*f+u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f-d*p*g;break;case"XZY":this._x=d*h*f-u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let s=t/2,r=Math.sin(s);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,s=t[0],r=t[4],o=t[8],a=t[1],l=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=s+l+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-u)*p,this._z=(a-r)*p}else if(s>l&&s>f){let p=2*Math.sqrt(1+s-l-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+u)/p}else if(l>f){let p=2*Math.sqrt(1+l-s-f);this._w=(o-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-s-l);this._w=(a-r)/p,this._x=(o+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let s=this.angleTo(e);if(s===0)return this;let r=Math.min(1,t/s);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let s=e._x,r=e._y,o=e._z,a=e._w,l=t._x,c=t._y,u=t._z,h=t._w;return this._x=s*h+a*l+r*u-o*c,this._y=r*h+a*c+o*l-s*u,this._z=o*h+a*u+s*c-r*l,this._w=a*h-s*l-r*c-o*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let s=this._x,r=this._y,o=this._z,a=this._w,l=a*e._w+s*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=s,this._y=r,this._z=o,this;let c=1-l*l;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*s+t*this._x,this._y=p*r+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}let u=Math.sqrt(c),h=Math.atan2(u,l),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=a*f+this._w*d,this._x=s*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){let e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),s*Math.sin(o),s*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,s=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,s=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6]*r,this.y=o[1]*t+o[4]*s+o[7]*r,this.z=o[2]*t+o[5]*s+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,s=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*s+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*s+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*s+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*s+o[10]*r+o[14])*a,this}applyQuaternion(e){let t=this.x,s=this.y,r=this.z,o=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*s),h=2*(l*t-o*r),f=2*(o*s-a*t);return this.x=t+c*u+a*f-l*h,this.y=s+c*h+l*u-o*f,this.z=r+c*f+o*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,s=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*s+o[8]*r,this.y=o[1]*t+o[5]*s+o[9]*r,this.z=o[2]*t+o[6]*s+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let s=e.x,r=e.y,o=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-o*l,this.y=o*a-s*c,this.z=s*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Kt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y,r=this.z-e.z;return t*t+s*s+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){let r=Math.sin(t)*e;return this.x=r*Math.sin(s),this.y=Math.cos(t)*e,this.z=r*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new L,Pd=new Pn,bt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let s=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let s=e.geometry;if(s!==void 0){let o=s.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(o,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ha.copy(s.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),ua.subVectors(this.max,so),nr.subVectors(e.a,so),ir.subVectors(e.b,so),sr.subVectors(e.c,so),Hi.subVectors(ir,nr),zi.subVectors(sr,ir),Ms.subVectors(nr,sr);let t=[0,-Hi.z,Hi.y,0,-zi.z,zi.y,0,-Ms.z,Ms.y,Hi.z,0,-Hi.x,zi.z,0,-zi.x,Ms.z,0,-Ms.x,-Hi.y,Hi.x,0,-zi.y,zi.x,0,-Ms.y,Ms.x,0];return!Ic(t,nr,ir,sr,ua)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,nr,ir,sr,ua))?!1:(fa.crossVectors(Hi,zi),t=[fa.x,fa.y,fa.z],Ic(t,nr,ir,sr,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ei=[new L,new L,new L,new L,new L,new L,new L,new L],Kn=new L,ha=new bt,nr=new L,ir=new L,sr=new L,Hi=new L,zi=new L,Ms=new L,so=new L,ua=new L,fa=new L,xs=new L;Gg=new bt,ro=new L,Dc=new L,Ln=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let s=this.center;t!==void 0?s.copy(t):Gg.setFromPoints(e).getCenter(s);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,s.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);let t=ro.lengthSq();if(t>this.radius*this.radius){let s=Math.sqrt(t),r=(s-this.radius)*.5;this.center.addScaledVector(ro,r/s),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Dc)),this.expandByPoint(ro.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new L,Nc=new L,da=new L,ki=new L,Uc=new L,pa=new L,Bc=new L,Rr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,s,r){Nc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Nc);let o=e.distanceTo(t)*.5,a=-this.direction.dot(da),l=ki.dot(this.direction),c=-ki.dot(da),u=ki.lengthSq(),h=Math.abs(1-a*a),f,d,p,g;if(h>0)if(f=a*c-l,d=a*l-c,g=o*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,p=f*(f+a*d+2*l)+d*(a*f+d+2*c)+u}else d=o,f=Math.max(0,-(a*d+l)),p=-f*f+d*(d+2*c)+u;else d=-o,f=Math.max(0,-(a*d+l)),p=-f*f+d*(d+2*c)+u;else d<=-g?(f=Math.max(0,-(-a*o+l)),d=f>0?-o:Math.min(Math.max(-o,-c),o),p=-f*f+d*(d+2*c)+u):d<=g?(f=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+u):(f=Math.max(0,-(a*o+l)),d=f>0?o:Math.min(Math.max(-o,-c),o),p=-f*f+d*(d+2*c)+u);else d=a>0?-o:o,f=Math.max(0,-(a*d+l)),p=-f*f+d*(d+2*c)+u;return s&&s.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nc).addScaledVector(da,d),p}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let s=bi.dot(this.direction),r=bi.dot(bi)-s*s,o=e.radius*e.radius;if(r>o)return null;let a=Math.sqrt(o-r),l=s-a,c=s+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){let s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,r,o,a,l,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(s=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(s=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(o=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),s>a||o>r||((o>s||isNaN(s))&&(s=o),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(l=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),s>c||l>r)||((l>s||s!==s)&&(s=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(s>=0?s:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,s,r,o){Uc.subVectors(t,e),pa.subVectors(s,e),Bc.crossVectors(Uc,pa);let a=this.direction.dot(Bc),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ki.subVectors(this.origin,e);let c=l*this.direction.dot(pa.crossVectors(ki,pa));if(c<0)return null;let u=l*this.direction.dot(Uc.cross(ki));if(u<0||c+u>a)return null;let h=-l*ki.dot(Bc);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class n{constructor(e,t,s,r,o,a,l,c,u,h,f,d,p,g,y,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,r,o,a,l,c,u,h,f,d,p,g,y,_)}set(e,t,s,r,o,a,l,c,u,h,f,d,p,g,y,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=s,m[12]=r,m[1]=o,m[5]=a,m[9]=l,m[13]=c,m[2]=u,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=g,m[11]=y,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){let t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,s=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),o=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=s[0]*r,t[1]=s[1]*r,t[2]=s[2]*r,t[3]=0,t[4]=s[4]*o,t[5]=s[5]*o,t[6]=s[6]*o,t[7]=0,t[8]=s[8]*a,t[9]=s[9]*a,t[10]=s[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,s=e.x,r=e.y,o=e.z,a=Math.cos(s),l=Math.sin(s),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){let d=a*h,p=a*f,g=l*h,y=l*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=p+g*u,t[5]=d-y*u,t[9]=-l*c,t[2]=y-d*u,t[6]=g+p*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d+y*l,t[4]=g*l-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-l,t[2]=p*l-g,t[6]=y+d*l,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d-y*l,t[4]=-a*f,t[8]=g+p*l,t[1]=p+g*l,t[5]=a*h,t[9]=y-d*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*f,g=l*h,y=l*f;t[0]=c*h,t[4]=g*u-p,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=p*u-g,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*u,g=l*c,y=l*u;t[0]=c*h,t[4]=y-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-l*h,t[2]=-u*h,t[6]=p*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,p=a*u,g=l*c,y=l*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=l*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vg,e,Wg)}lookAt(e,t,s){let r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Gi.crossVectors(s,Rn),Gi.lengthSq()===0&&(Math.abs(s.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Gi.crossVectors(s,Rn)),Gi.normalize(),ma.crossVectors(Rn,Gi),r[0]=Gi.x,r[4]=ma.x,r[8]=Rn.x,r[1]=Gi.y,r[5]=ma.y,r[9]=Rn.y,r[2]=Gi.z,r[6]=ma.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,r=t.elements,o=this.elements,a=s[0],l=s[4],c=s[8],u=s[12],h=s[1],f=s[5],d=s[9],p=s[13],g=s[2],y=s[6],_=s[10],m=s[14],x=s[3],M=s[7],E=s[11],I=s[15],R=r[0],C=r[4],B=r[8],v=r[12],S=r[1],z=r[5],T=r[9],N=r[13],P=r[2],U=r[6],H=r[10],D=r[14],F=r[3],G=r[7],Z=r[11],J=r[15];return o[0]=a*R+l*S+c*P+u*F,o[4]=a*C+l*z+c*U+u*G,o[8]=a*B+l*T+c*H+u*Z,o[12]=a*v+l*N+c*D+u*J,o[1]=h*R+f*S+d*P+p*F,o[5]=h*C+f*z+d*U+p*G,o[9]=h*B+f*T+d*H+p*Z,o[13]=h*v+f*N+d*D+p*J,o[2]=g*R+y*S+_*P+m*F,o[6]=g*C+y*z+_*U+m*G,o[10]=g*B+y*T+_*H+m*Z,o[14]=g*v+y*N+_*D+m*J,o[3]=x*R+M*S+E*P+I*F,o[7]=x*C+M*z+E*U+I*G,o[11]=x*B+M*T+E*H+I*Z,o[15]=x*v+M*N+E*D+I*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[4],r=e[8],o=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],_=e[11],m=e[15];return g*(+o*c*f-r*u*f-o*l*d+s*u*d+r*l*p-s*c*p)+y*(+t*c*p-t*u*d+o*a*d-r*a*p+r*u*h-o*c*h)+_*(+t*u*f-t*l*p-o*a*f+s*a*p+o*l*h-s*u*h)+m*(-r*l*h-t*c*f+t*l*d+r*a*f-s*a*d+s*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=s),this}invert(){let e=this.elements,t=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],_=e[14],m=e[15],x=f*_*u-y*d*u+y*c*p-l*_*p-f*c*m+l*d*m,M=g*d*u-h*_*u-g*c*p+a*_*p+h*c*m-a*d*m,E=h*y*u-g*f*u+g*l*p-a*y*p-h*l*m+a*f*m,I=g*f*c-h*y*c-g*l*d+a*y*d+h*l*_-a*f*_,R=t*x+s*M+r*E+o*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=x*C,e[1]=(y*d*o-f*_*o-y*r*p+s*_*p+f*r*m-s*d*m)*C,e[2]=(l*_*o-y*c*o+y*r*u-s*_*u-l*r*m+s*c*m)*C,e[3]=(f*c*o-l*d*o-f*r*u+s*d*u+l*r*p-s*c*p)*C,e[4]=M*C,e[5]=(h*_*o-g*d*o+g*r*p-t*_*p-h*r*m+t*d*m)*C,e[6]=(g*c*o-a*_*o-g*r*u+t*_*u+a*r*m-t*c*m)*C,e[7]=(a*d*o-h*c*o+h*r*u-t*d*u-a*r*p+t*c*p)*C,e[8]=E*C,e[9]=(g*f*o-h*y*o-g*s*p+t*y*p+h*s*m-t*f*m)*C,e[10]=(a*y*o-g*l*o+g*s*u-t*y*u-a*s*m+t*l*m)*C,e[11]=(h*l*o-a*f*o-h*s*u+t*f*u+a*s*p-t*l*p)*C,e[12]=I*C,e[13]=(h*y*r-g*f*r+g*s*d-t*y*d-h*s*_+t*f*_)*C,e[14]=(g*l*r-a*y*r-g*s*c+t*y*c+a*s*_-t*l*_)*C,e[15]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*C,this}scale(e){let t=this.elements,s=e.x,r=e.y,o=e.z;return t[0]*=s,t[4]*=r,t[8]*=o,t[1]*=s,t[5]*=r,t[9]*=o,t[2]*=s,t[6]*=r,t[10]*=o,t[3]*=s,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,r))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let s=Math.cos(t),r=Math.sin(t),o=1-s,a=e.x,l=e.y,c=e.z,u=o*a,h=o*l;return this.set(u*a+s,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+s,h*c-r*a,0,u*c-r*l,h*c+r*a,o*c*c+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,r,o,a){return this.set(1,s,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,s){let r=this.elements,o=t._x,a=t._y,l=t._z,c=t._w,u=o+o,h=a+a,f=l+l,d=o*u,p=o*h,g=o*f,y=a*h,_=a*f,m=l*f,x=c*u,M=c*h,E=c*f,I=s.x,R=s.y,C=s.z;return r[0]=(1-(y+m))*I,r[1]=(p+E)*I,r[2]=(g-M)*I,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(d+m))*R,r[6]=(_+x)*R,r[7]=0,r[8]=(g+M)*C,r[9]=(_-x)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,s){let r=this.elements,o=rr.set(r[0],r[1],r[2]).length(),a=rr.set(r[4],r[5],r[6]).length(),l=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);let u=1/o,h=1/a,f=1/l;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),s.x=o,s.y=a,s.z=l,this}makePerspective(e,t,s,r,o,a,l=Li){let c=this.elements,u=2*o/(t-e),h=2*o/(s-r),f=(t+e)/(t-e),d=(s+r)/(s-r),p,g;if(l===Li)p=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(l===qa)p=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,s,r,o,a,l=Li){let c=this.elements,u=1/(t-e),h=1/(s-r),f=1/(a-o),d=(t+e)*u,p=(s+r)*h,g,y;if(l===Li)g=(a+o)*f,y=-2*f;else if(l===qa)g=o*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,s=e.elements;for(let r=0;r<16;r++)if(t[r]!==s[r])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}},rr=new L,Zn=new Pe,Vg=new L(0,0,0),Wg=new L(1,1,1),Gi=new L,ma=new L,Rn=new L,Ld=new Pe,Id=new Pn,Ja=class n{constructor(e=0,t=0,s=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,r=this._order){return this._x=e,this._y=t,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){let r=e.elements,o=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ja.DEFAULT_ORDER="XYZ";ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xg=0,Dd=new L,or=new Pn,Si=new Pe,ga=new L,oo=new L,qg=new L,Yg=new Pn,Nd=new L(1,0,0),Ud=new L(0,1,0),Bd=new L(0,0,1),Kg={type:"added"},Zg={type:"removed"},Lt=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Ja,s=new Pn,r=new L(1,1,1);function o(){s.setFromEuler(t,!1)}function a(){t.setFromQuaternion(s,void 0,!1)}t._onChange(o),s._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ze}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Ud,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Ud,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?ga.copy(e):ga.set(e,t,s);let r=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(oo,ga,this.up):Si.lookAt(ga,oo,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),or.setFromRotationMatrix(Si),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,Yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let s=0,r=t.length;s<r;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let s=0,r=t.length;s<r;s++)t[s].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let s=0,r=t.length;s<r;s++){let o=t[s];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++){let l=r[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];o(e.shapes,f)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(o(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);l.length>0&&(s.geometries=l),c.length>0&&(s.materials=c),u.length>0&&(s.textures=u),h.length>0&&(s.images=h),f.length>0&&(s.shapes=f),d.length>0&&(s.skeletons=d),p.length>0&&(s.animations=p),g.length>0&&(s.nodes=g)}return s.object=r,s;function a(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){let r=e.children[s];this.add(r.clone())}return this}};Lt.DEFAULT_UP=new L(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;$n=new L,Ti=new L,Oc=new L,Ai=new L,ar=new L,lr=new L,Od=new L,Fc=new L,Hc=new L,zc=new L,_a=!1,As=class n{constructor(e=new L,t=new L,s=new L){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,r){r.subVectors(s,t),$n.subVectors(e,t),r.cross($n);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,s,r,o){$n.subVectors(r,t),Ti.subVectors(s,t),Oc.subVectors(e,t);let a=$n.dot($n),l=$n.dot(Ti),c=$n.dot(Oc),u=Ti.dot(Ti),h=Ti.dot(Oc),f=a*u-l*l;if(f===0)return o.set(0,0,0),null;let d=1/f,p=(u*c-l*h)*d,g=(a*h-l*c)*d;return o.set(1-p-g,g,p)}static containsPoint(e,t,s,r){return this.getBarycoord(e,t,s,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,s,r,o,a,l,c){return _a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_a=!0),this.getInterpolation(e,t,s,r,o,a,l,c)}static getInterpolation(e,t,s,r,o,a,l,c){return this.getBarycoord(e,t,s,r,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ai.x),c.addScaledVector(a,Ai.y),c.addScaledVector(l,Ai.z),c)}static isFrontFacing(e,t,s,r){return $n.subVectors(s,t),Ti.subVectors(e,t),$n.cross(Ti).dot(r)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,r){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,s,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),$n.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,s,r,o){return _a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_a=!0),n.getInterpolation(e,this.a,this.b,this.c,t,s,r,o)}getInterpolation(e,t,s,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,s,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let s=this.a,r=this.b,o=this.c,a,l;ar.subVectors(r,s),lr.subVectors(o,s),Fc.subVectors(e,s);let c=ar.dot(Fc),u=lr.dot(Fc);if(c<=0&&u<=0)return t.copy(s);Hc.subVectors(e,r);let h=ar.dot(Hc),f=lr.dot(Hc);if(h>=0&&f<=h)return t.copy(r);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(s).addScaledVector(ar,a);zc.subVectors(e,o);let p=ar.dot(zc),g=lr.dot(zc);if(g>=0&&p<=g)return t.copy(o);let y=p*u-c*g;if(y<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(s).addScaledVector(lr,l);let _=h*g-p*f;if(_<=0&&f-h>=0&&p-g>=0)return Od.subVectors(o,r),l=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(Od,l);let m=1/(_+y+d);return a=y*m,l=d*m,t.copy(s).addScaledVector(ar,a).addScaledVector(lr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ya={h:0,s:0,l:0};ge=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,s,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=s,st.toWorkingColorSpace(this,r),this}setHSL(e,t,s,r=st.workingColorSpace){if(e=Jh(e,1),t=Kt(t,0,1),s=Kt(s,0,1),t===0)this.r=this.g=this.b=s;else{let o=s<=.5?s*(1+t):s+t-s*t,a=2*s-o;this.r=kc(a,o,e+1/3),this.g=kc(a,o,e),this.b=kc(a,o,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=ct){function s(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let s=Yp[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return st.fromWorkingColorSpace(an.copy(this),e),Math.round(Kt(an.r*255,0,255))*65536+Math.round(Kt(an.g*255,0,255))*256+Math.round(Kt(an.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(an.copy(this),t);let s=an.r,r=an.g,o=an.b,a=Math.max(s,r,o),l=Math.min(s,r,o),c,u,h=(l+a)/2;if(l===a)c=0,u=0;else{let f=a-l;switch(u=h<=.5?f/(a+l):f/(2-a-l),a){case s:c=(r-o)/f+(r<o?6:0);break;case r:c=(o-s)/f+2;break;case o:c=(s-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=ct){st.fromWorkingColorSpace(an.copy(this),e);let t=an.r,s=an.g,r=an.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(r*255)})`}offsetHSL(e,t,s){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ya);let s=uo(Vi.h,ya.h,t),r=uo(Vi.s,ya.s,t),o=uo(Vi.l,ya.l,t);return this.setHSL(s,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,s=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*s+o[6]*r,this.g=o[1]*t+o[4]*s+o[7]*r,this.b=o[2]*t+o[5]*s+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new ge;ge.NAMES=Yp;$g=0,In=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Mr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(s):r&&r.isVector3&&s&&s.isVector3?r.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(s.blending=this.blending),this.side!==fi&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rh&&(s.blendSrc=this.blendSrc),this.blendDst!==oh&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ka&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sd&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function r(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}if(t){let o=r(e.textures),a=r(e.images);o.length>0&&(s.textures=o),a.length>0&&(s.images=a)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,s=null;if(t!==null){let r=t.length;s=new Array(r);for(let o=0;o!==r;++o)s[o]=t[o].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ae=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ut=new L,Ma=new le,xt=class{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=ch,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[s+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=hi(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=ut(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=r,this}setXYZW(e,t,s,r,o){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),s=ut(s,this.array),r=ut(r,this.array),o=ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),e}},Qa=class extends xt{constructor(e,t,s){super(new Uint16Array(e),t,s)}},el=class extends xt{constructor(e,t,s){super(new Uint32Array(e),t,s)}},it=class extends xt{constructor(e,t,s){super(new Float32Array(e),t,s)}},Jg=0,Bn=new Pe,Gc=new Lt,cr=new L,Cn=new bt,ao=new bt,Yt=new L,pt=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qp(e)?el:Qa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let o=new Ze().getNormalMatrix(e);s.applyNormalMatrix(o),s.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,s){return Bn.makeTranslation(e,t,s),this.applyMatrix4(Bn),this}scale(e,t,s){return Bn.makeScale(e,t,s),this.applyMatrix4(Bn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Cn.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let s=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){let l=t[o];ao.setFromBufferAttribute(l),this.morphTargetsRelative?(Yt.addVectors(Cn.min,ao.min),Cn.expandByPoint(Yt),Yt.addVectors(Cn.max,ao.max),Cn.expandByPoint(Yt)):(Cn.expandByPoint(ao.min),Cn.expandByPoint(ao.max))}Cn.getCenter(s);let r=0;for(let o=0,a=e.count;o<a;o++)Yt.fromBufferAttribute(e,o),r=Math.max(r,s.distanceToSquared(Yt));if(t)for(let o=0,a=t.length;o<a;o++){let l=t[o],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Yt.fromBufferAttribute(l,u),c&&(cr.fromBufferAttribute(e,u),Yt.add(cr)),r=Math.max(r,s.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*l),4));let c=this.getAttribute("tangent").array,u=[],h=[];for(let S=0;S<l;S++)u[S]=new L,h[S]=new L;let f=new L,d=new L,p=new L,g=new le,y=new le,_=new le,m=new L,x=new L;function M(S,z,T){f.fromArray(r,S*3),d.fromArray(r,z*3),p.fromArray(r,T*3),g.fromArray(a,S*2),y.fromArray(a,z*2),_.fromArray(a,T*2),d.sub(f),p.sub(f),y.sub(g),_.sub(g);let N=1/(y.x*_.y-_.x*y.y);isFinite(N)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(p,-y.y).multiplyScalar(N),x.copy(p).multiplyScalar(y.x).addScaledVector(d,-_.x).multiplyScalar(N),u[S].add(m),u[z].add(m),u[T].add(m),h[S].add(x),h[z].add(x),h[T].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:s.length}]);for(let S=0,z=E.length;S<z;++S){let T=E[S],N=T.start,P=T.count;for(let U=N,H=N+P;U<H;U+=3)M(s[U+0],s[U+1],s[U+2])}let I=new L,R=new L,C=new L,B=new L;function v(S){C.fromArray(o,S*3),B.copy(C);let z=u[S];I.copy(z),I.sub(C.multiplyScalar(C.dot(z))).normalize(),R.crossVectors(B,z);let N=R.dot(h[S])<0?-1:1;c[S*4]=I.x,c[S*4+1]=I.y,c[S*4+2]=I.z,c[S*4+3]=N}for(let S=0,z=E.length;S<z;++S){let T=E[S],N=T.start,P=T.count;for(let U=N,H=N+P;U<H;U+=3)v(s[U+0]),v(s[U+1]),v(s[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let d=0,p=s.count;d<p;d++)s.setXYZ(d,0,0,0);let r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L,f=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),l.fromBufferAttribute(s,g),c.fromBufferAttribute(s,y),u.fromBufferAttribute(s,_),l.add(h),c.add(h),u.add(h),s.setXYZ(g,l.x,l.y,l.z),s.setXYZ(y,c.x,c.y,c.z),s.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),s.setXYZ(d+0,h.x,h.y,h.z),s.setXYZ(d+1,h.x,h.y,h.z),s.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(l,c){let u=l.array,h=l.itemSize,f=l.normalized,d=new u.constructor(c.length*h),p=0,g=0;for(let y=0,_=c.length;y<_;y++){l.isInterleavedBufferAttribute?p=c[y]*l.data.stride+l.offset:p=c[y]*h;for(let m=0;m<h;m++)d[g++]=u[p++]}return new xt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,s=this.index.array,r=this.attributes;for(let l in r){let c=r[l],u=e(c,s);t.setAttribute(l,u)}let o=this.morphAttributes;for(let l in o){let c=[],u=o[l];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,s);c.push(p)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let s=this.attributes;for(let c in s){let u=s[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let s=e.index;s!==null&&this.setIndex(s.clone(t));let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let o=e.morphAttributes;for(let u in o){let h=[],f=o[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fd=new Pe,vs=new Rr,xa=new Ln,Hd=new L,hr=new L,ur=new L,fr=new L,Vc=new L,va=new L,Ea=new le,ba=new le,Sa=new le,zd=new L,kd=new L,Gd=new L,Ta=new L,Aa=new L,$=class extends Lt{constructor(e=new pt,t=new ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){let s=this.geometry,r=s.attributes.position,o=s.morphAttributes.position,a=s.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(o&&l){va.set(0,0,0);for(let c=0,u=o.length;c<u;c++){let h=l[c],f=o[c];h!==0&&(Vc.fromBufferAttribute(f,e),a?va.addScaledVector(Vc,h):va.addScaledVector(Vc.sub(t),h))}t.add(va)}return t}raycast(e,t){let s=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xa.copy(s.boundingSphere),xa.applyMatrix4(o),vs.copy(e.ray).recast(e.near),!(xa.containsPoint(vs.origin)===!1&&(vs.intersectSphere(xa,Hd)===null||vs.origin.distanceToSquared(Hd)>(e.far-e.near)**2))&&(Fd.copy(o).invert(),vs.copy(e.ray).applyMatrix4(Fd),!(s.boundingBox!==null&&vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,s){let r,o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,u=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,d=o.groups,p=o.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let _=d[g],m=a[_.materialIndex],x=Math.max(_.start,p.start),M=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let E=x,I=M;E<I;E+=3){let R=l.getX(E),C=l.getX(E+1),B=l.getX(E+2);r=wa(this,m,e,s,u,h,f,R,C,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){let x=l.getX(_),M=l.getX(_+1),E=l.getX(_+2);r=wa(this,a,e,s,u,h,f,x,M,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let _=d[g],m=a[_.materialIndex],x=Math.max(_.start,p.start),M=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let E=x,I=M;E<I;E+=3){let R=E,C=E+1,B=E+2;r=wa(this,m,e,s,u,h,f,R,C,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){let x=_,M=_+1,E=_+2;r=wa(this,a,e,s,u,h,f,x,M,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};$e=class n extends pt{constructor(e=1,t=1,s=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:r,heightSegments:o,depthSegments:a};let l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,s,t,e,a,o,0),g("z","y","x",1,-1,s,t,-e,a,o,1),g("x","z","y",1,1,e,s,t,r,a,2),g("x","z","y",1,-1,e,s,-t,r,a,3),g("x","y","z",1,-1,e,t,s,r,o,4),g("x","y","z",-1,-1,e,t,-s,r,o,5),this.setIndex(c),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(f,2));function g(y,_,m,x,M,E,I,R,C,B,v){let S=E/C,z=I/B,T=E/2,N=I/2,P=R/2,U=C+1,H=B+1,D=0,F=0,G=new L;for(let Z=0;Z<H;Z++){let J=Z*z-N;for(let ue=0;ue<U;ue++){let Y=ue*S-T;G[y]=Y*x,G[_]=J*M,G[m]=P,u.push(G.x,G.y,G.z),G[y]=0,G[_]=0,G[m]=R>0?1:-1,h.push(G.x,G.y,G.z),f.push(ue/C),f.push(1-Z/B),D+=1}}for(let Z=0;Z<B;Z++)for(let J=0;J<C;J++){let ue=d+J+U*Z,Y=d+J+U*(Z+1),j=d+(J+1)+U*(Z+1),ce=d+(J+1)+U*Z;c.push(ue,Y,ce),c.push(Y,j,ce),F+=6}l.addGroup(p,F,v),p+=F,d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Dr={clone:Cr,merge:gn},e_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e_,this.fragmentShader=t_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=Qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let s={};for(let r in this.extensions)this.extensions[r]===!0&&(s[r]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}},tl=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ot=class extends tl{constructor(e=50,t=1,s=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,s,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xr*.5*this.fov)/this.zoom,s=2*t,r=this.aspect*s,o=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/c,t-=a.offsetY*s/u,r*=a.width/c,s*=a.height/u}let l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dr=-90,pr=1,ph=class extends Lt{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ot(dr,pr,e,t);r.layers=this.layers,this.add(r);let o=new Ot(dr,pr,e,t);o.layers=this.layers,this.add(o);let a=new Ot(dr,pr,e,t);a.layers=this.layers,this.add(a);let l=new Ot(dr,pr,e,t);l.layers=this.layers,this.add(l);let c=new Ot(dr,pr,e,t);c.layers=this.layers,this.add(c);let u=new Ot(dr,pr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[s,r,o,a,l,c]=t;for(let u of t)this.remove(u);if(e===Li)s.up.set(0,1,0),s.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qa)s.up.set(0,-1,0),s.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:s,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,a,l,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,r),e.render(t,o),e.setRenderTarget(s,1,r),e.render(t,a),e.setRenderTarget(s,2,r),e.render(t,l),e.setRenderTarget(s,3,r),e.render(t,c),e.setRenderTarget(s,4,r),e.render(t,u),s.texture.generateMipmaps=y,e.setRenderTarget(s,5,r),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,s.texture.needsPMREMUpdate=!0}},nl=class extends Qt{constructor(e,t,s,r,o,a,l,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,s,r,o,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mh=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let s={width:e,height:e,depth:1},r=[s,s,s,s,s,s];t.encoding!==void 0&&(fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cs?ct:Fn),this.texture=new nl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $e(5,5,5),o=new en({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:bn,blending:ui});o.uniforms.tEquirect.value=t;let a=new $(r,o),l=t.minFilter;return t.minFilter===Qn&&(t.minFilter=jt),new ph(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,s,r){let o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,s,r);e.setRenderTarget(o)}},Wc=new L,n_=new L,i_=new Ze,Ci=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,r){return this.normal.set(e,t,s),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){let r=Wc.subVectors(s,t).cross(n_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let s=e.delta(Wc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let s=t||i_.getNormalMatrix(e),r=this.coplanarPoint(Wc).applyMatrix4(e),o=this.normal.applyMatrix3(s).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new Ln,Ra=new L,Mo=class{constructor(e=new Ci,t=new Ci,s=new Ci,r=new Ci,o=new Ci,a=new Ci){this.planes=[e,t,s,r,o,a]}set(e,t,s,r,o,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(s),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(e){let t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Li){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],y=r[10],_=r[11],m=r[12],x=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,d-u,_-p,E-m).normalize(),s[1].setComponents(c+o,d+u,_+p,E+m).normalize(),s[2].setComponents(c+a,d+h,_+g,E+x).normalize(),s[3].setComponents(c-a,d-h,_-g,E-x).normalize(),s[4].setComponents(c-l,d-f,_-y,E-M).normalize(),t===Li)s[5].setComponents(c+l,d+f,_+y,E+M).normalize();else if(t===qa)s[5].setComponents(l,f,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,s=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(s)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let s=0;s<6;s++){let r=t[s];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ie=class n extends pt{constructor(e=1,t=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:r};let o=e/2,a=t/2,l=Math.floor(s),c=Math.floor(r),u=l+1,h=c+1,f=e/l,d=t/c,p=[],g=[],y=[],_=[];for(let m=0;m<h;m++){let x=m*d-a;for(let M=0;M<u;M++){let E=M*f-o;g.push(E,-x,0),y.push(0,0,1),_.push(M/l),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<l;x++){let M=x+u*m,E=x+u*(m+1),I=x+1+u*(m+1),R=x+1+u*m;p.push(M,E,R),p.push(E,I,R)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(y,3)),this.setAttribute("uv",new it(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},r_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o_=`#ifdef USE_ALPHAHASH
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
#endif`,a_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,h_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u_=`#ifdef USE_AOMAP
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
#endif`,f_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
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
#endif`,p_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,m_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,__=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y_=`#ifdef USE_IRIDESCENCE
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
#endif`,M_=`#ifdef USE_BUMPMAP
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
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,R_=`#define PI 3.141592653589793
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
} // validated`,C_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P_=`vec3 transformedNormal = objectNormal;
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
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`
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
}`,O_=`#ifdef USE_ENVMAP
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
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q_=`#ifdef USE_GRADIENTMAP
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
}`,Y_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,K_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
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
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
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
#endif`,sy=`struct PhysicalMaterial {
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
}`,ry=`
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,my=`#if defined( USE_POINTS_UV )
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
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
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
#endif`,xy=`#ifdef USE_MORPHTARGETS
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
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wy=`#ifdef USE_NORMALMAP
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
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vy=`float getShadowMask() {
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
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
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
#endif`,qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,Ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`#include <common>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
}`,fM=`#define DISTANCE
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
}`,dM=`#define DISTANCE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
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
}`,_M=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,MM=`uniform vec3 diffuse;
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
}`,xM=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,EM=`#define MATCAP
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
}`,bM=`#define MATCAP
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
}`,SM=`#define NORMAL
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
}`,TM=`#define NORMAL
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
}`,AM=`#define PHONG
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
}`,wM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,CM=`#define STANDARD
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
}`,PM=`#define TOON
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
}`,LM=`#define TOON
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
}`,IM=`uniform float size;
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
}`,DM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,UM=`uniform vec3 color;
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
}`,BM=`uniform float rotation;
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
}`,OM=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:r_,alphahash_pars_fragment:o_,alphamap_fragment:a_,alphamap_pars_fragment:l_,alphatest_fragment:c_,alphatest_pars_fragment:h_,aomap_fragment:u_,aomap_pars_fragment:f_,batching_pars_vertex:d_,batching_vertex:p_,begin_vertex:m_,beginnormal_vertex:g_,bsdfs:__,iridescence_fragment:y_,bumpmap_pars_fragment:M_,clipping_planes_fragment:x_,clipping_planes_pars_fragment:v_,clipping_planes_pars_vertex:E_,clipping_planes_vertex:b_,color_fragment:S_,color_pars_fragment:T_,color_pars_vertex:A_,color_vertex:w_,common:R_,cube_uv_reflection_fragment:C_,defaultnormal_vertex:P_,displacementmap_pars_vertex:L_,displacementmap_vertex:I_,emissivemap_fragment:D_,emissivemap_pars_fragment:N_,colorspace_fragment:U_,colorspace_pars_fragment:B_,envmap_fragment:O_,envmap_common_pars_fragment:F_,envmap_pars_fragment:H_,envmap_pars_vertex:z_,envmap_physical_pars_fragment:j_,envmap_vertex:k_,fog_vertex:G_,fog_pars_vertex:V_,fog_fragment:W_,fog_pars_fragment:X_,gradientmap_pars_fragment:q_,lightmap_fragment:Y_,lightmap_pars_fragment:K_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:$_,lights_pars_begin:J_,lights_toon_fragment:Q_,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:sy,lights_fragment_begin:ry,lights_fragment_maps:oy,lights_fragment_end:ay,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:uy,map_fragment:fy,map_pars_fragment:dy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:_y,morphcolor_vertex:yy,morphnormal_vertex:My,morphtarget_pars_vertex:xy,morphtarget_vertex:vy,normal_fragment_begin:Ey,normal_fragment_maps:by,normal_pars_fragment:Sy,normal_pars_vertex:Ty,normal_vertex:Ay,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Py,iridescence_pars_fragment:Ly,opaque_fragment:Iy,packing:Dy,premultiplied_alpha_fragment:Ny,project_vertex:Uy,dithering_fragment:By,dithering_pars_fragment:Oy,roughnessmap_fragment:Fy,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:zy,shadowmap_pars_vertex:ky,shadowmap_vertex:Gy,shadowmask_pars_fragment:Vy,skinbase_vertex:Wy,skinning_pars_vertex:Xy,skinning_vertex:qy,skinnormal_vertex:Yy,specularmap_fragment:Ky,specularmap_pars_fragment:Zy,tonemapping_fragment:$y,tonemapping_pars_fragment:Jy,transmission_fragment:jy,transmission_pars_fragment:Qy,uv_pars_fragment:eM,uv_pars_vertex:tM,uv_vertex:nM,worldpos_vertex:iM,background_vert:sM,background_frag:rM,backgroundCube_vert:oM,backgroundCube_frag:aM,cube_vert:lM,cube_frag:cM,depth_vert:hM,depth_frag:uM,distanceRGBA_vert:fM,distanceRGBA_frag:dM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:gM,linedashed_frag:_M,meshbasic_vert:yM,meshbasic_frag:MM,meshlambert_vert:xM,meshlambert_frag:vM,meshmatcap_vert:EM,meshmatcap_frag:bM,meshnormal_vert:SM,meshnormal_frag:TM,meshphong_vert:AM,meshphong_frag:wM,meshphysical_vert:RM,meshphysical_frag:CM,meshtoon_vert:PM,meshtoon_frag:LM,points_vert:IM,points_frag:DM,shadow_vert:NM,shadow_frag:UM,sprite_vert:BM,sprite_frag:OM},se={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ci={basic:{uniforms:gn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:gn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ge(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:gn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:gn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:gn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:gn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:gn([se.points,se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:gn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:gn([se.common,se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:gn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:gn([se.sprite,se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:gn([se.common,se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:gn([se.lights,se.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ci.physical={uniforms:gn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};Ca={r:0,b:0,g:0};$i=class extends tl{constructor(e=-1,t=1,s=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=s-e,a=s+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_r=4,Vd=[.125,.215,.35,.446,.526,.582],Ts=20,Xc=new $i,Wd=new ge,qc=null,Yc=0,Kc=0,bs=(1+Math.sqrt(5))/2,mr=1/bs,Xd=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,bs,mr),new L(0,bs,-mr),new L(mr,0,bs),new L(-mr,0,bs),new L(bs,mr,0),new L(-bs,mr,0)],il=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,r=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,s,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,Kc),e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel();let s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:ei,format:On,colorSpace:Ft,depthBuffer:!1},r=qd(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(e,t,s);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WM(o)),this._blurMaterial=XM(o,e,t)}return r}_compileMaterial(e){let t=new $(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,s,r){let l=new Ot(90,1,t,s),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Wd),h.toneMapping=qi,h.autoClear=!1;let p=new ae({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new $(new $e,p),y=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,y=!0):(p.color.copy(Wd),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(l.up.set(0,c[m],0),l.lookAt(u[m],0,0)):x===1?(l.up.set(0,0,c[m]),l.lookAt(0,u[m],0)):(l.up.set(0,c[m],0),l.lookAt(0,0,u[m]));let M=this._cubeSize;Pa(r,x*M,m>2?M:0,M,M),h.setRenderTarget(r),y&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){let s=this._renderer,r=e.mapping===br||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let o=r?this._cubemapMaterial:this._equirectMaterial,a=new $(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;let c=this._cubeSize;Pa(t,0,0,3*c,2*c),s.setRenderTarget(t),s.render(a,Xc)}_applyPMREM(e){let t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xd[(r-1)%Xd.length];this._blur(e,r-1,r,o,a)}t.autoClear=s}_blur(e,t,s,r,o){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,s,r,"latitudinal",o),this._halfBlur(a,e,s,s,r,"longitudinal",o)}_halfBlur(e,t,s,r,o,a,l){let c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new $(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[s]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ts-1),y=o/g,_=isFinite(o)?1+Math.floor(h*y):Ts;_>Ts&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ts}`);let m=[],x=0;for(let C=0;C<Ts;++C){let B=C/y,v=Math.exp(-B*B/2);m.push(v),C===0?x+=v:C<_&&(x+=2*v)}for(let C=0;C<m.length;C++)m[C]=m[C]/x;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",l&&(d.poleAxis.value=l);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-s;let E=this._sizeLods[r],I=3*E*(r>M-_r?r-M+_r:0),R=4*(this._cubeSize-E);Pa(t,I,R,3*E,2*E),c.setRenderTarget(t),c.render(f,Xc)}};sl=class extends Qt{constructor(e,t,s,r,o,a,l,c,u,h){if(h=h!==void 0?h:Rs,h!==Rs&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&h===Rs&&(s=Wi),s===void 0&&h===Tr&&(s=ws),super(null,r,o,a,l,c,h,s,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Pt,this.minFilter=c!==void 0?c:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$p=new Qt,Jp=new sl(1,1);Jp.compareFunction=Wp;jp=new $a,Qp=new dh,em=new nl,Zd=[],$d=[],Jd=new Float32Array(16),jd=new Float32Array(9),Qd=new Float32Array(4);gh=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=xx(t.type)}},_h=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zx(t.type)}},yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){let r=this.seq;for(let o=0,a=r.length;o!==a;++o){let l=r[o];l.setValue(e,t[l.id],s)}}},Zc=/(\w+)(\])?(\[|\.)?/g;Er=class{constructor(e,t){this.seq=[],this.map={};let s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){let o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);kx(o,a,this)}}setValue(e,t,s,r){let o=this.map[t];o!==void 0&&o.setValue(e,s,r)}setOptional(e,t,s){let r=t[s];r!==void 0&&this.setValue(e,s,r)}static upload(e,t,s,r){for(let o=0,a=t.length;o!==a;++o){let l=t[o],c=s[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){let s=[];for(let r=0,o=e.length;r!==o;++r){let a=e[r];a.id in t&&s.push(a)}return s}};Gx=37297,Vx=0;jx=/^[ \t]*#include +<([\w\d./]+)>/gm;Qx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;cv=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,s=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(s),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){let t=this.shaderCache,s=t.get(e);return s===void 0&&(s=new vh(e),t.set(e,s)),s}},vh=class{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}};gv=0;Eh=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bh=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
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
}`;Sh=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},rt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Av={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let r=null,o=null,a=null,l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,s),m=this._getHandJoint(u,y);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,s),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,s),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let s=new rt;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}},Th=class extends Zi{constructor(e,t){super();let s=this,r=null,o=1,a=null,l="local-floor",c=1,u=null,h=null,f=null,d=null,p=null,g=null,y=t.getContextAttributes(),_=null,m=null,x=[],M=[],E=new le,I=null,R=new Ot;R.layers.enable(1),R.viewport=new dt;let C=new Ot;C.layers.enable(2),C.viewport=new dt;let B=[R,C],v=new Sh;v.layers.enable(1),v.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=x[Y];return j===void 0&&(j=new po,x[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=x[Y];return j===void 0&&(j=new po,x[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=x[Y];return j===void 0&&(j=new po,x[Y]=j),j.getHandSpace()};function T(Y){let j=M.indexOf(Y.inputSource);if(j===-1)return;let ce=x[j];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,u||a),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",P);for(let Y=0;Y<x.length;Y++){let j=M[Y];j!==null&&(M[Y]=null,x[Y].disconnect(j))}S=null,z=null,e.setRenderTarget(_),p=null,d=null,f=null,r=null,m=null,ue.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(E.width,E.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",N),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new yn(p.framebufferWidth,p.framebufferHeight,{format:On,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,ce=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?Tr:Rs,ce=y.stencil?ws:Wi);let Me={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:o};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new yn(d.textureWidth,d.textureHeight,{format:On,type:Ki,depthTexture:new sl(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Be=e.properties.get(m);Be.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),ue.setContext(r),ue.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(Y){for(let j=0;j<Y.removed.length;j++){let ce=Y.removed[j],xe=M.indexOf(ce);xe>=0&&(M[xe]=null,x[xe].disconnect(ce))}for(let j=0;j<Y.added.length;j++){let ce=Y.added[j],xe=M.indexOf(ce);if(xe===-1){for(let Be=0;Be<x.length;Be++)if(Be>=M.length){M.push(ce),xe=Be;break}else if(M[Be]===null){M[Be]=ce,xe=Be;break}if(xe===-1)break}let Me=x[xe];Me&&Me.connect(ce)}}let U=new L,H=new L;function D(Y,j,ce){U.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(ce.matrixWorld);let xe=U.distanceTo(H),Me=j.projectionMatrix.elements,Be=ce.projectionMatrix.elements,Fe=Me[14]/(Me[10]-1),Ae=Me[14]/(Me[10]+1),nt=(Me[9]+1)/Me[5],V=(Me[9]-1)/Me[5],fn=(Me[8]-1)/Me[0],Ee=(Be[8]+1)/Be[0],De=Fe*fn,me=Fe*Ee,Tt=xe/(-fn+Ee),Ge=Tt*-fn;j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ge),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let w=Fe+Tt,b=Ae+Tt,X=De-Ge,te=me+(xe-Ge),ee=nt*Ae/b*w,ne=V*Ae/b*w;Y.projectionMatrix.makePerspective(X,te,ee,ne,w,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function F(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;v.near=C.near=R.near=Y.near,v.far=C.far=R.far=Y.far,(S!==v.near||z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,z=v.far);let j=Y.parent,ce=v.cameras;F(v,j);for(let xe=0;xe<ce.length;xe++)F(ce[xe],j);ce.length===2?D(v,R,C):v.projectionMatrix.copy(R.projectionMatrix),G(Y,v,j)};function G(Y,j,ce){ce===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let Z=null;function J(Y,j){if(h=j.getViewerPose(u||a),g=j,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let xe=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,xe=!0);for(let Me=0;Me<ce.length;Me++){let Be=ce[Me],Fe=null;if(p!==null)Fe=p.getViewport(Be);else{let nt=f.getViewSubImage(d,Be);Fe=nt.viewport,Me===0&&(e.setRenderTargetTextures(m,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(m))}let Ae=B[Me];Ae===void 0&&(Ae=new Ot,Ae.layers.enable(Me),Ae.viewport=new dt,B[Me]=Ae),Ae.matrix.fromArray(Be.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Be.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Me===0&&(v.matrix.copy(Ae.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),xe===!0&&v.cameras.push(Ae)}}for(let ce=0;ce<x.length;ce++){let xe=M[ce],Me=x[ce];xe!==null&&Me!==void 0&&Me.update(xe,j,u||a)}Z&&Z(Y,j),j.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:j}),g=null}let ue=new Zp;ue.setAnimationLoop(J),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}};xo=class{constructor(e={}){let{canvas:t=Fg(),context:s=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;s!==null?d=s.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),y=null,_=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;let M=this,E=!1,I=0,R=0,C=null,B=-1,v=null,S=new dt,z=new dt,T=null,N=new ge(0),P=0,U=t.width,H=t.height,D=1,F=null,G=null,Z=new dt(0,0,U,H),J=new dt(0,0,U,H),ue=!1,Y=new Mo,j=!1,ce=!1,xe=null,Me=new Pe,Be=new le,Fe=new L,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return C===null?D:1}let V=s;function fn(A,k){for(let q=0;q<A.length;q++){let K=A[q],W=t.getContext(K,k);if(W!==null)return W}return null}try{let A={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",re,!1),V===null){let k=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&k.shift(),V=fn(k,A),V===null)throw fn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,De,me,Tt,Ge,w,b,X,te,ee,ne,_e,he,de,Te,Ve,Q,ht,Je,Le,ve,pe,He,lt;function Rt(){Ee=new YM(V),De=new kM(V,Ee,e),Ee.init(De),pe=new Tv(V,Ee,De),me=new bv(V,Ee,De),Tt=new $M(V),Ge=new uv,w=new Sv(V,Ee,me,Ge,De,pe,Tt),b=new VM(M),X=new qM(M),te=new s_(V,De),He=new HM(V,Ee,te,De),ee=new KM(V,te,Tt,He),ne=new ex(V,ee,te,Tt),Je=new QM(V,De,w),Ve=new GM(Ge),_e=new hv(M,b,X,Ee,De,He,Ve),he=new wv(M,Ge),de=new dv,Te=new Mv(Ee,De),ht=new FM(M,b,X,me,ne,d,c),Q=new Ev(M,ne,De),lt=new Rv(V,Tt,De,me),Le=new zM(V,Ee,Tt,De),ve=new ZM(V,Ee,Tt,De),Tt.programs=_e.programs,M.capabilities=De,M.extensions=Ee,M.properties=Ge,M.renderLists=de,M.shadowMap=Q,M.state=me,M.info=Tt}Rt();let Ye=new Th(M,V);this.xr=Ye,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(U,H,!1))},this.getSize=function(A){return A.set(U,H)},this.setSize=function(A,k,q=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,H=k,t.width=Math.floor(A*D),t.height=Math.floor(k*D),q===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(U*D,H*D).floor()},this.setDrawingBufferSize=function(A,k,q){U=A,H=k,D=q,t.width=Math.floor(A*q),t.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,k,q,K){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,k,q,K),me.viewport(S.copy(Z).multiplyScalar(D).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,k,q,K){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,k,q,K),me.scissor(z.copy(J).multiplyScalar(D).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(A){me.setScissorTest(ue=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(A=!0,k=!0,q=!0){let K=0;if(A){let W=!1;if(C!==null){let fe=C.texture.format;W=fe===Hp||fe===Fp||fe===Op}if(W){let fe=C.texture.type,ye=fe===Ki||fe===Wi||fe===Zh||fe===ws||fe===Up||fe===Bp,Se=ht.getClearColor(),Ce=ht.getClearAlpha(),We=Se.r,Ne=Se.g,Oe=Se.b;ye?(p[0]=We,p[1]=Ne,p[2]=Oe,p[3]=Ce,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=We,g[1]=Ne,g[2]=Oe,g[3]=Ce,V.clearBufferiv(V.COLOR,0,g))}else K|=V.COLOR_BUFFER_BIT}k&&(K|=V.DEPTH_BUFFER_BIT),q&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),Te.dispose(),Ge.dispose(),b.dispose(),X.dispose(),ne.dispose(),He.dispose(),lt.dispose(),_e.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",dn),Ye.removeEventListener("sessionend",_t),xe&&(xe.dispose(),xe=null),pn.stop()};function ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let A=Tt.autoReset,k=Q.enabled,q=Q.autoUpdate,K=Q.needsUpdate,W=Q.type;Rt(),Tt.autoReset=A,Q.enabled=k,Q.autoUpdate=q,Q.needsUpdate=K,Q.type=W}function re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oe(A){let k=A.target;k.removeEventListener("dispose",oe),we(k)}function we(A){be(A),Ge.remove(A)}function be(A){let k=Ge.get(A).programs;k!==void 0&&(k.forEach(function(q){_e.releaseProgram(q)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,K,W,fe){k===null&&(k=Ae);let ye=W.isMesh&&W.matrixWorld.determinant()<0,Se=M0(A,k,q,K,W);me.setMaterial(K,ye);let Ce=q.index,We=1;if(K.wireframe===!0){if(Ce=ee.getWireframeAttribute(q),Ce===void 0)return;We=2}let Ne=q.drawRange,Oe=q.attributes.position,It=Ne.start*We,wn=(Ne.start+Ne.count)*We;fe!==null&&(It=Math.max(It,fe.start*We),wn=Math.min(wn,(fe.start+fe.count)*We)),Ce!==null?(It=Math.max(It,0),wn=Math.min(wn,Ce.count)):Oe!=null&&(It=Math.max(It,0),wn=Math.min(wn,Oe.count));let qt=wn-It;if(qt<0||qt===1/0)return;He.setup(W,K,Se,q,Ce);let vi,At=Le;if(Ce!==null&&(vi=te.get(Ce),At=ve,At.setIndex(vi)),W.isMesh)K.wireframe===!0?(me.setLineWidth(K.wireframeLinewidth*nt()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(W.isLine){let Ke=K.linewidth;Ke===void 0&&(Ke=1),me.setLineWidth(Ke*nt()),W.isLineSegments?At.setMode(V.LINES):W.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else W.isPoints?At.setMode(V.POINTS):W.isSprite&&At.setMode(V.TRIANGLES);if(W.isBatchedMesh)At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)At.renderInstances(It,qt,W.count);else if(q.isInstancedBufferGeometry){let Ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yc=Math.min(q.instanceCount,Ke);At.renderInstances(It,qt,yc)}else At.render(It,qt)};function mt(A,k,q){A.transparent===!0&&A.side===Mt&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,la(A,k,q),A.side=fi,A.needsUpdate=!0,la(A,k,q),A.side=Mt):la(A,k,q)}this.compile=function(A,k,q=null){q===null&&(q=A),_=Te.get(q),_.init(),x.push(_),q.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),A!==q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights(M._useLegacyLights);let K=new Set;return A.traverse(function(W){let fe=W.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){let Se=fe[ye];mt(Se,q,W),K.add(Se)}else mt(fe,q,W),K.add(fe)}),x.pop(),_=null,K},this.compileAsync=function(A,k,q=null){let K=this.compile(A,k,q);return new Promise(W=>{function fe(){if(K.forEach(function(ye){Ge.get(ye).currentProgram.isReady()&&K.delete(ye)}),K.size===0){W(A);return}setTimeout(fe,10)}Ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let gt=null;function Xt(A){gt&&gt(A)}function dn(){pn.stop()}function _t(){pn.start()}let pn=new Zp;pn.setAnimationLoop(Xt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(A){gt=A,Ye.setAnimationLoop(A),A===null?pn.stop():pn.start()},Ye.addEventListener("sessionstart",dn),Ye.addEventListener("sessionend",_t),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(k),k=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,k,C),_=Te.get(A,x.length),_.init(),x.push(_),Me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Me),ce=this.localClippingEnabled,j=Ve.init(this.clippingPlanes,ce),y=de.get(A,m.length),y.init(),m.push(y),li(A,k,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(F,G),this.info.render.frame++,j===!0&&Ve.beginShadows();let q=_.state.shadowsArray;if(Q.render(q,A,k),j===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(y,A),_.setupLights(M._useLegacyLights),k.isArrayCamera){let K=k.cameras;for(let W=0,fe=K.length;W<fe;W++){let ye=K[W];Ff(y,A,ye,ye.viewport)}}else Ff(y,A,k);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(M,A,k),He.resetDefaultState(),B=-1,v=null,x.pop(),x.length>0?_=x[x.length-1]:_=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function li(A,k,q,K){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){K&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);let ye=ne.update(A),Se=A.material;Se.visible&&y.push(A,ye,Se,q,Fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){let ye=ne.update(A),Se=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Fe.copy(ye.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Se)){let Ce=ye.groups;for(let We=0,Ne=Ce.length;We<Ne;We++){let Oe=Ce[We],It=Se[Oe.materialIndex];It&&It.visible&&y.push(A,ye,It,q,Fe.z,Oe)}}else Se.visible&&y.push(A,ye,Se,q,Fe.z,null)}}let fe=A.children;for(let ye=0,Se=fe.length;ye<Se;ye++)li(fe[ye],k,q,K)}function Ff(A,k,q,K){let W=A.opaque,fe=A.transmissive,ye=A.transparent;_.setupLightsView(q),j===!0&&Ve.setGlobalState(M.clippingPlanes,q),fe.length>0&&y0(W,fe,k,q),K&&me.viewport(S.copy(K)),W.length>0&&aa(W,k,q),fe.length>0&&aa(fe,k,q),ye.length>0&&aa(ye,k,q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function y0(A,k,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let fe=De.isWebGL2;xe===null&&(xe=new yn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ei:Ki,minFilter:Qn,samples:fe?4:0})),M.getDrawingBufferSize(Be),fe?xe.setSize(Be.x,Be.y):xe.setSize(Ya(Be.x),Ya(Be.y));let ye=M.getRenderTarget();M.setRenderTarget(xe),M.getClearColor(N),P=M.getClearAlpha(),P<1&&M.setClearColor(16777215,.5),M.clear();let Se=M.toneMapping;M.toneMapping=qi,aa(A,q,K),w.updateMultisampleRenderTarget(xe),w.updateRenderTargetMipmap(xe);let Ce=!1;for(let We=0,Ne=k.length;We<Ne;We++){let Oe=k[We],It=Oe.object,wn=Oe.geometry,qt=Oe.material,vi=Oe.group;if(qt.side===Mt&&It.layers.test(K.layers)){let At=qt.side;qt.side=bn,qt.needsUpdate=!0,Hf(It,q,K,wn,qt,vi),qt.side=At,qt.needsUpdate=!0,Ce=!0}}Ce===!0&&(w.updateMultisampleRenderTarget(xe),w.updateRenderTargetMipmap(xe)),M.setRenderTarget(ye),M.setClearColor(N,P),M.toneMapping=Se}function aa(A,k,q){let K=k.isScene===!0?k.overrideMaterial:null;for(let W=0,fe=A.length;W<fe;W++){let ye=A[W],Se=ye.object,Ce=ye.geometry,We=K===null?ye.material:K,Ne=ye.group;Se.layers.test(q.layers)&&Hf(Se,k,q,Ce,We,Ne)}}function Hf(A,k,q,K,W,fe){A.onBeforeRender(M,k,q,K,W,fe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(M,k,q,K,A,fe),W.transparent===!0&&W.side===Mt&&W.forceSinglePass===!1?(W.side=bn,W.needsUpdate=!0,M.renderBufferDirect(q,k,K,W,A,fe),W.side=fi,W.needsUpdate=!0,M.renderBufferDirect(q,k,K,W,A,fe),W.side=Mt):M.renderBufferDirect(q,k,K,W,A,fe),A.onAfterRender(M,k,q,K,W,fe)}function la(A,k,q){k.isScene!==!0&&(k=Ae);let K=Ge.get(A),W=_.state.lights,fe=_.state.shadowsArray,ye=W.state.version,Se=_e.getParameters(A,W.state,fe,k,q),Ce=_e.getProgramCacheKey(Se),We=K.programs;K.environment=A.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(A.isMeshStandardMaterial?X:b).get(A.envMap||K.environment),We===void 0&&(A.addEventListener("dispose",oe),We=new Map,K.programs=We);let Ne=We.get(Ce);if(Ne!==void 0){if(K.currentProgram===Ne&&K.lightsStateVersion===ye)return kf(A,Se),Ne}else Se.uniforms=_e.getUniforms(A),A.onBuild(q,Se,M),A.onBeforeCompile(Se,M),Ne=_e.acquireProgram(Se,Ce),We.set(Ce,Ne),K.uniforms=Se.uniforms;let Oe=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=Ve.uniform),kf(A,Se),K.needsLights=v0(A),K.lightsStateVersion=ye,K.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMap.value=W.state.directionalShadowMap,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotShadowMap.value=W.state.spotShadowMap,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMap.value=W.state.pointShadowMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Ne,K.uniformsList=null,Ne}function zf(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Er.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function kf(A,k){let q=Ge.get(A);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function M0(A,k,q,K,W){k.isScene!==!0&&(k=Ae),w.resetTextureUnits();let fe=k.fog,ye=K.isMeshStandardMaterial?k.environment:null,Se=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ft,Ce=(K.isMeshStandardMaterial?X:b).get(K.envMap||ye),We=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ne=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Oe=!!q.morphAttributes.position,It=!!q.morphAttributes.normal,wn=!!q.morphAttributes.color,qt=qi;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(qt=M.toneMapping);let vi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,At=vi!==void 0?vi.length:0,Ke=Ge.get(K),yc=_.state.lights;if(j===!0&&(ce===!0||A!==v)){let Un=A===v&&K.id===B;Ve.setState(K,A,Un)}let Ct=!1;K.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==yc.state.version||Ke.outputColorSpace!==Se||W.isBatchedMesh&&Ke.batching===!1||!W.isBatchedMesh&&Ke.batching===!0||W.isInstancedMesh&&Ke.instancing===!1||!W.isInstancedMesh&&Ke.instancing===!0||W.isSkinnedMesh&&Ke.skinning===!1||!W.isSkinnedMesh&&Ke.skinning===!0||W.isInstancedMesh&&Ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ke.instancingColor===!1&&W.instanceColor!==null||Ke.envMap!==Ce||K.fog===!0&&Ke.fog!==fe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ve.numPlanes||Ke.numIntersection!==Ve.numIntersection)||Ke.vertexAlphas!==We||Ke.vertexTangents!==Ne||Ke.morphTargets!==Oe||Ke.morphNormals!==It||Ke.morphColors!==wn||Ke.toneMapping!==qt||De.isWebGL2===!0&&Ke.morphTargetsCount!==At)&&(Ct=!0):(Ct=!0,Ke.__version=K.version);let _s=Ke.currentProgram;Ct===!0&&(_s=la(K,k,W));let Gf=!1,io=!1,Mc=!1,rn=_s.getUniforms(),ys=Ke.uniforms;if(me.useProgram(_s.program)&&(Gf=!0,io=!0,Mc=!0),K.id!==B&&(B=K.id,io=!0),Gf||v!==A){rn.setValue(V,"projectionMatrix",A.projectionMatrix),rn.setValue(V,"viewMatrix",A.matrixWorldInverse);let Un=rn.map.cameraPosition;Un!==void 0&&Un.setValue(V,Fe.setFromMatrixPosition(A.matrixWorld)),De.logarithmicDepthBuffer&&rn.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&rn.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,io=!0,Mc=!0)}if(W.isSkinnedMesh){rn.setOptional(V,W,"bindMatrix"),rn.setOptional(V,W,"bindMatrixInverse");let Un=W.skeleton;Un&&(De.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),rn.setValue(V,"boneTexture",Un.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(rn.setOptional(V,W,"batchingTexture"),rn.setValue(V,"batchingTexture",W._matricesTexture,w));let xc=q.morphAttributes;if((xc.position!==void 0||xc.normal!==void 0||xc.color!==void 0&&De.isWebGL2===!0)&&Je.update(W,q,_s),(io||Ke.receiveShadow!==W.receiveShadow)&&(Ke.receiveShadow=W.receiveShadow,rn.setValue(V,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ys.envMap.value=Ce,ys.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),io&&(rn.setValue(V,"toneMappingExposure",M.toneMappingExposure),Ke.needsLights&&x0(ys,Mc),fe&&K.fog===!0&&he.refreshFogUniforms(ys,fe),he.refreshMaterialUniforms(ys,K,D,H,xe),Er.upload(V,zf(Ke),ys,w)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Er.upload(V,zf(Ke),ys,w),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&rn.setValue(V,"center",W.center),rn.setValue(V,"modelViewMatrix",W.modelViewMatrix),rn.setValue(V,"normalMatrix",W.normalMatrix),rn.setValue(V,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Un=K.uniformsGroups;for(let vc=0,E0=Un.length;vc<E0;vc++)if(De.isWebGL2){let Vf=Un[vc];lt.update(Vf,_s),lt.bind(Vf,_s)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _s}function x0(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function v0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,k,q){Ge.get(A.texture).__webglTexture=k,Ge.get(A.depthTexture).__webglTexture=q;let K=Ge.get(A);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){let q=Ge.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,q=0){C=A,I=k,R=q;let K=!0,W=null,fe=!1,ye=!1;if(A){let Ce=Ge.get(A);Ce.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(V.FRAMEBUFFER,null),K=!1):Ce.__webglFramebuffer===void 0?w.setupRenderTarget(A):Ce.__hasExternalTextures&&w.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);let We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ye=!0);let Ne=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?W=Ne[k][q]:W=Ne[k],fe=!0):De.isWebGL2&&A.samples>0&&w.useMultisampledRTT(A)===!1?W=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[q]:W=Ne,S.copy(A.viewport),z.copy(A.scissor),T=A.scissorTest}else S.copy(Z).multiplyScalar(D).floor(),z.copy(J).multiplyScalar(D).floor(),T=ue;if(me.bindFramebuffer(V.FRAMEBUFFER,W)&&De.drawBuffers&&K&&me.drawBuffers(A,W),me.viewport(S),me.scissor(z),me.setScissorTest(T),fe){let Ce=Ge.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,q)}else if(ye){let Ce=Ge.get(A.texture),We=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ce.__webglTexture,q||0,We)}B=-1},this.readRenderTargetPixels=function(A,k,q,K,W,fe,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){me.bindFramebuffer(V.FRAMEBUFFER,Se);try{let Ce=A.texture,We=Ce.format,Ne=Ce.type;if(We!==On&&pe.convert(We)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Ne===ei&&(Ee.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ne!==Ki&&pe.convert(Ne)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Pi&&(De.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-K&&q>=0&&q<=A.height-W&&V.readPixels(k,q,K,W,pe.convert(We),pe.convert(Ne),fe)}finally{let Ce=C!==null?Ge.get(C).__webglFramebuffer:null;me.bindFramebuffer(V.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,k,q=0){let K=Math.pow(2,-q),W=Math.floor(k.image.width*K),fe=Math.floor(k.image.height*K);w.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,q,0,0,A.x,A.y,W,fe),me.unbindTexture()},this.copyTextureToTexture=function(A,k,q,K=0){let W=k.image.width,fe=k.image.height,ye=pe.convert(q.format),Se=pe.convert(q.type);w.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,K,A.x,A.y,W,fe,ye,Se,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,K,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,ye,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,K,A.x,A.y,ye,Se,k.image),K===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(A,k,q,K,W=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let fe=A.max.x-A.min.x+1,ye=A.max.y-A.min.y+1,Se=A.max.z-A.min.z+1,Ce=pe.convert(K.format),We=pe.convert(K.type),Ne;if(K.isData3DTexture)w.setTexture3D(K,0),Ne=V.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)w.setTexture2DArray(K,0),Ne=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);let Oe=V.getParameter(V.UNPACK_ROW_LENGTH),It=V.getParameter(V.UNPACK_IMAGE_HEIGHT),wn=V.getParameter(V.UNPACK_SKIP_PIXELS),qt=V.getParameter(V.UNPACK_SKIP_ROWS),vi=V.getParameter(V.UNPACK_SKIP_IMAGES),At=q.isCompressedTexture?q.mipmaps[W]:q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,At.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,A.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,A.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Ne,W,k.x,k.y,k.z,fe,ye,Se,Ce,We,At.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ne,W,k.x,k.y,k.z,fe,ye,Se,Ce,At.data)):V.texSubImage3D(Ne,W,k.x,k.y,k.z,fe,ye,Se,Ce,We,At),V.pixelStorei(V.UNPACK_ROW_LENGTH,Oe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,It),V.pixelStorei(V.UNPACK_SKIP_PIXELS,wn),V.pixelStorei(V.UNPACK_SKIP_ROWS,qt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,vi),W===0&&K.generateMipmaps&&V.generateMipmap(Ne),me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),me.unbindTexture()},this.resetState=function(){I=0,R=0,C=null,me.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===$h?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Sl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Cs:Gp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cs?ct:Ft}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ah=class extends xo{};Ah.prototype.isWebGL1Renderer=!0;rl=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ol=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ch,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[s+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new L,Eo=class n{constructor(e,t,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=r,this}setXYZW(e,t,s,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),s=ut(s,this.array),r=ut(r,this.array),o=ut(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hp=new L,up=new dt,fp=new dt,Cv=new L,dp=new Pe,La=new L,$c=new Ln,pp=new Pe,Jc=new Rr,al=class extends ${constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zf,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let s=0;s<t.count;s++)this.getVertexPosition(s,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let s=0;s<t.count;s++)this.getVertexPosition(s,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let s=this.material,r=this.matrixWorld;s!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$c.copy(this.boundingSphere),$c.applyMatrix4(r),e.ray.intersectsSphere($c)!==!1&&(pp.copy(r).invert(),Jc.copy(e.ray).applyMatrix4(pp),!(this.boundingBox!==null&&Jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let s=0,r=t.count;s<r;s++){e.fromBufferAttribute(t,s);let o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(s,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let s=this.skeleton,r=this.geometry;up.fromBufferAttribute(r.attributes.skinIndex,e),fp.fromBufferAttribute(r.attributes.skinWeight,e),hp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){let a=fp.getComponent(o);if(a!==0){let l=up.getComponent(o);dp.multiplyMatrices(s.bones[l].matrixWorld,s.boneInverses[l]),t.addScaledVector(Cv.copy(hp).applyMatrix4(dp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},bo=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},wh=class extends Qt{constructor(e=null,t=1,s=1,r,o,a,l,c,u=Pt,h=Pt,f,d){super(null,a,l,c,u,h,r,o,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mp=new Pe,Pv=new Pe,ll=class n{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let s=0,r=this.bones.length;s<r;s++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let s=new Pe;this.bones[e]&&s.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(s)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let s=this.bones[e];s&&s.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let s=this.bones[e];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){let e=this.bones,t=this.boneInverses,s=this.boneMatrices,r=this.boneTexture;for(let o=0,a=e.length;o<a;o++){let l=e[o]?e[o].matrixWorld:Pv;mp.multiplyMatrices(l,t[o]),mp.toArray(s,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let s=new wh(t,e,e,On,Pi);return s.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=s,this}getBoneByName(e){for(let t=0,s=this.bones.length;t<s;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let s=0,r=e.bones.length;s<r;s++){let o=e.bones[s],a=t[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new bo),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[s]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,s=this.boneInverses;for(let r=0,o=t.length;r<o;r++){let a=t[r];e.bones.push(a.uuid);let l=s[r];e.boneInverses.push(l.toArray())}return e}},Ls=class extends xt{constructor(e,t,s,r=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new Pe,gp=new Pe,Ia=[],_p=new bt,Lv=new Pe,lo=new $,co=new Ln,cl=class extends ${constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(s*16),16),this.instanceColor=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<s;r++)this.setMatrixAt(r,Lv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,gr),_p.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(_p)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,gr),co.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let s=this.matrixWorld,r=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(s),e.ray.intersectsSphere(co)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,gr),gp.multiplyMatrices(s,gr),lo.matrixWorld=gp,lo.raycast(e,Ia);for(let a=0,l=Ia.length;a<l;a++){let c=Ia[a];c.instanceId=o,c.object=this,t.push(c)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yp=new L,Mp=new L,xp=new Pe,jc=new Rr,Da=new Ln,Ji=class extends Lt{constructor(e=new pt,t=new Hn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[0];for(let r=1,o=t.count;r<o;r++)yp.fromBufferAttribute(t,r-1),Mp.fromBufferAttribute(t,r),s[r]=s[r-1],s[r]+=yp.distanceTo(Mp);e.setAttribute("lineDistance",new it(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let s=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Da.copy(s.boundingSphere),Da.applyMatrix4(r),Da.radius+=o,e.ray.intersectsSphere(Da)===!1)return;xp.copy(r).invert(),jc.copy(e.ray).applyMatrix4(xp);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=new L,h=new L,f=new L,d=new L,p=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){let m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let M=m,E=x-1;M<E;M+=p){let I=g.getX(M),R=g.getX(M+1);if(u.fromBufferAttribute(_,I),h.fromBufferAttribute(_,R),jc.distanceSqToSegment(u,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),x=Math.min(_.count,a.start+a.count);for(let M=m,E=x-1;M<E;M+=p){if(u.fromBufferAttribute(_,M),h.fromBufferAttribute(_,M+1),jc.distanceSqToSegment(u,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}},vp=new L,Ep=new L,kt=class extends Ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[];for(let r=0,o=t.count;r<o;r+=2)vp.fromBufferAttribute(t,r),Ep.fromBufferAttribute(t,r+1),s[r]=r===0?0:s[r-1],s[r+1]=s[r]+vp.distanceTo(Ep);e.setAttribute("lineDistance",new it(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},hl=class extends Ji{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Is=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bp=new Pe,Rh=new Rr,Na=new Ln,Ua=new L,Pr=class extends Lt{constructor(e=new pt,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let s=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Na.copy(s.boundingSphere),Na.applyMatrix4(r),Na.radius+=o,e.ray.intersectsSphere(Na)===!1)return;bp.copy(r).invert(),Rh.copy(e.ray).applyMatrix4(bp);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=s.index,f=s.attributes.position;if(u!==null){let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,y=p;g<y;g++){let _=u.getX(g);Ua.fromBufferAttribute(f,_),Sp(Ua,_,c,r,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,y=p;g<y;g++)Ua.fromBufferAttribute(f,g),Sp(Ua,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}};zn=class extends Qt{constructor(e,t,s,r,o,a,l,c,u){super(e,t,s,r,o,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],s,r=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)s=this.getPoint(a/e),o+=s.distanceTo(r),t.push(o),r=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let s=this.getLengths(),r=0,o=s.length,a;t?a=t:a=e*s[o-1];let l=0,c=o-1,u;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),u=s[r]-a,u<0)l=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,s[r]===a)return r/(o-1);let h=s[r],d=s[r+1]-h,p=(a-h)/d;return(r+p)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let a=this.getPoint(r),l=this.getPoint(o),c=t||(a.isVector2?new le:new L);return c.copy(l).sub(a).normalize(),c}getTangentAt(e,t){let s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){let s=new L,r=[],o=[],a=[],l=new L,c=new Pe;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new L)}o[0]=new L,a[0]=new L;let u=Number.MAX_VALUE,h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=u&&(u=h,s.set(1,0,0)),f<=u&&(u=f,s.set(0,1,0)),d<=u&&s.set(0,0,1),l.crossVectors(r[0],s).normalize(),o[0].crossVectors(r[0],l),a[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),a[p]=a[p-1].clone(),l.crossVectors(r[p-1],r[p]),l.length()>Number.EPSILON){l.normalize();let g=Math.acos(Kt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(l,g))}a[p].crossVectors(r[p],o[p])}if(t===!0){let p=Math.acos(Kt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(l.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],o[g])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ul=class extends ti{constructor(e=0,t=0,s=1,r=1,o=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(e,t){let s=t||new le,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(a?o=0:o=r),this.aClockwise===!0&&!a&&(o===r?o=-r:o=o-r);let l=this.aStartAngle+e*o,c=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=u-this.aY;c=d*h-p*f+this.aX,u=d*f+p*h+this.aY}return s.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ch=class extends ul{constructor(e,t,s,r,o,a){super(e,t,s,s,r,o,a),this.isArcCurve=!0,this.type="ArcCurve"}};Ba=new L,Qc=new Qh,eh=new Qh,th=new Qh,So=class extends ti{constructor(e=[],t=!1,s="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=r}getPoint(e,t=new L){let s=t,r=this.points,o=r.length,a=(o-(this.closed?0:1))*e,l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:c===0&&l===o-1&&(l=o-2,c=1);let u,h;this.closed||l>0?u=r[(l-1)%o]:(Ba.subVectors(r[0],r[1]).add(r[0]),u=Ba);let f=r[l%o],d=r[(l+1)%o];if(this.closed||l+2<o?h=r[(l+2)%o]:(Ba.subVectors(r[o-1],r[o-2]).add(r[o-1]),h=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(u.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),_<1e-4&&(_=y),Qc.initNonuniformCatmullRom(u.x,f.x,d.x,h.x,g,y,_),eh.initNonuniformCatmullRom(u.y,f.y,d.y,h.y,g,y,_),th.initNonuniformCatmullRom(u.z,f.z,d.z,h.z,g,y,_)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(u.x,f.x,d.x,h.x,this.tension),eh.initCatmullRom(u.y,f.y,d.y,h.y,this.tension),th.initCatmullRom(u.z,f.z,d.z,h.z,this.tension));return s.set(Qc.calc(c),eh.calc(c),th.calc(c)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ph=class extends ti{constructor(e=new le,t=new le,s=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=r}getPoint(e,t=new le){let s=t,r=this.v0,o=this.v1,a=this.v2,l=this.v3;return s.set(go(e,r.x,o.x,a.x,l.x),go(e,r.y,o.y,a.y,l.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lh=class extends ti{constructor(e=new L,t=new L,s=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=r}getPoint(e,t=new L){let s=t,r=this.v0,o=this.v1,a=this.v2,l=this.v3;return s.set(go(e,r.x,o.x,a.x,l.x),go(e,r.y,o.y,a.y,l.y),go(e,r.z,o.z,a.z,l.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ih=class extends ti{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dh=class extends ti{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nh=class extends ti{constructor(e=new le,t=new le,s=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new le){let s=t,r=this.v0,o=this.v1,a=this.v2;return s.set(mo(e,r.x,o.x,a.x),mo(e,r.y,o.y,a.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends ti{constructor(e=new L,t=new L,s=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new L){let s=t,r=this.v0,o=this.v1,a=this.v2;return s.set(mo(e,r.x,o.x,a.x),mo(e,r.y,o.y,a.y),mo(e,r.z,o.z,a.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uh=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let s=t,r=this.points,o=(r.length-1)*e,a=Math.floor(o),l=o-a,c=r[a===0?a:a-1],u=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return s.set(Tp(l,c.x,u.x,h.x,f.x),Tp(l,c.y,u.y,h.y,f.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(new le().fromArray(r))}return this}},Hv=Object.freeze({__proto__:null,ArcCurve:Ch,CatmullRomCurve3:So,CubicBezierCurve:Ph,CubicBezierCurve3:Lh,EllipseCurve:ul,LineCurve:Ih,LineCurve3:Dh,QuadraticBezierCurve:Nh,QuadraticBezierCurve3:fl,SplineCurve:Uh}),Mn=class n extends pt{constructor(e=1,t=1,s=1,r=32,o=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:c};let u=this;r=Math.floor(r),o=Math.floor(o);let h=[],f=[],d=[],p=[],g=0,y=[],_=s/2,m=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(p,2));function x(){let E=new L,I=new L,R=0,C=(t-e)/s;for(let B=0;B<=o;B++){let v=[],S=B/o,z=S*(t-e)+e;for(let T=0;T<=r;T++){let N=T/r,P=N*c+l,U=Math.sin(P),H=Math.cos(P);I.x=z*U,I.y=-S*s+_,I.z=z*H,f.push(I.x,I.y,I.z),E.set(U,C,H).normalize(),d.push(E.x,E.y,E.z),p.push(N,1-S),v.push(g++)}y.push(v)}for(let B=0;B<r;B++)for(let v=0;v<o;v++){let S=y[v][B],z=y[v+1][B],T=y[v+1][B+1],N=y[v][B+1];h.push(S,z,N),h.push(z,T,N),R+=6}u.addGroup(m,R,0),m+=R}function M(E){let I=g,R=new le,C=new L,B=0,v=E===!0?e:t,S=E===!0?1:-1;for(let T=1;T<=r;T++)f.push(0,_*S,0),d.push(0,S,0),p.push(.5,.5),g++;let z=g;for(let T=0;T<=r;T++){let P=T/r*c+l,U=Math.cos(P),H=Math.sin(P);C.x=v*H,C.y=_*S,C.z=v*U,f.push(C.x,C.y,C.z),d.push(0,S,0),R.x=U*.5+.5,R.y=H*.5*S+.5,p.push(R.x,R.y),g++}for(let T=0;T<r;T++){let N=I+T,P=z+T;E===!0?h.push(P,P+1,N):h.push(P+1,P,N),B+=3}u.addGroup(m,B,E===!0?1:2),m+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},dl=class n extends Mn{constructor(e=1,t=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(0,e,t,s,r,o,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bh=class n extends pt{constructor(e=[],t=[],s=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:r};let o=[],a=[];l(r),u(s),h(),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(o.slice(),3)),this.setAttribute("uv",new it(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let M=new L,E=new L,I=new L;for(let R=0;R<t.length;R+=3)p(t[R+0],M),p(t[R+1],E),p(t[R+2],I),c(M,E,I,x)}function c(x,M,E,I){let R=I+1,C=[];for(let B=0;B<=R;B++){C[B]=[];let v=x.clone().lerp(E,B/R),S=M.clone().lerp(E,B/R),z=R-B;for(let T=0;T<=z;T++)T===0&&B===R?C[B][T]=v:C[B][T]=v.clone().lerp(S,T/z)}for(let B=0;B<R;B++)for(let v=0;v<2*(R-B)-1;v++){let S=Math.floor(v/2);v%2===0?(d(C[B][S+1]),d(C[B+1][S]),d(C[B][S])):(d(C[B][S+1]),d(C[B+1][S+1]),d(C[B+1][S]))}}function u(x){let M=new L;for(let E=0;E<o.length;E+=3)M.x=o[E+0],M.y=o[E+1],M.z=o[E+2],M.normalize().multiplyScalar(x),o[E+0]=M.x,o[E+1]=M.y,o[E+2]=M.z}function h(){let x=new L;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];let E=_(x)/2/Math.PI+.5,I=m(x)/Math.PI+.5;a.push(E,1-I)}g(),f()}function f(){for(let x=0;x<a.length;x+=6){let M=a[x+0],E=a[x+2],I=a[x+4],R=Math.max(M,E,I),C=Math.min(M,E,I);R>.9&&C<.1&&(M<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),I<.2&&(a[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function p(x,M){let E=x*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){let x=new L,M=new L,E=new L,I=new L,R=new le,C=new le,B=new le;for(let v=0,S=0;v<o.length;v+=9,S+=6){x.set(o[v+0],o[v+1],o[v+2]),M.set(o[v+3],o[v+4],o[v+5]),E.set(o[v+6],o[v+7],o[v+8]),R.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),B.set(a[S+4],a[S+5]),I.copy(x).add(M).add(E).divideScalar(3);let z=_(I);y(R,S+0,x,z),y(C,S+2,M,z),y(B,S+4,E,z)}}function y(x,M,E,I){I<0&&x.x===1&&(a[M]=x.x-1),E.x===0&&E.z===0&&(a[M]=I/2/Math.PI+.5)}function _(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Oa=new L,Fa=new L,nh=new L,Ha=new As,ln=class extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),o=Math.cos(xr*t),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,u=[0,0,0],h=["a","b","c"],f=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){a?(u[0]=a.getX(g),u[1]=a.getX(g+1),u[2]=a.getX(g+2)):(u[0]=g,u[1]=g+1,u[2]=g+2);let{a:y,b:_,c:m}=Ha;if(y.fromBufferAttribute(l,u[0]),_.fromBufferAttribute(l,u[1]),m.fromBufferAttribute(l,u[2]),Ha.getNormal(nh),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){let M=(x+1)%3,E=f[x],I=f[M],R=Ha[h[x]],C=Ha[h[M]],B=`${E}_${I}`,v=`${I}_${E}`;v in d&&d[v]?(nh.dot(d[v].normal)<=o&&(p.push(R.x,R.y,R.z),p.push(C.x,C.y,C.z)),d[v]=null):B in d||(d[B]={index0:u[x],index1:u[M],normal:nh.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:_}=d[g];Oa.fromBufferAttribute(l,y),Fa.fromBufferAttribute(l,_),p.push(Oa.x,Oa.y,Oa.z),p.push(Fa.x,Fa.y,Fa.z)}this.setAttribute("position",new it(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ds=class n extends Bh{constructor(e=1,t=0){let s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},di=class n extends pt{constructor(e=1,t=32,s=16,r=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:r,phiLength:o,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));let c=Math.min(a+l,Math.PI),u=0,h=[],f=new L,d=new L,p=[],g=[],y=[],_=[];for(let m=0;m<=s;m++){let x=[],M=m/s,E=0;m===0&&a===0?E=.5/t:m===s&&c===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){let R=I/t;f.x=-e*Math.cos(r+R*o)*Math.sin(a+M*l),f.y=e*Math.cos(a+M*l),f.z=e*Math.sin(r+R*o)*Math.sin(a+M*l),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),_.push(R+E,1-M),x.push(u++)}h.push(x)}for(let m=0;m<s;m++)for(let x=0;x<t;x++){let M=h[m][x+1],E=h[m][x],I=h[m+1][x],R=h[m+1][x+1];(m!==0||a>0)&&p.push(M,E,R),(m!==s-1||c<Math.PI)&&p.push(E,I,R)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(y,3)),this.setAttribute("uv",new it(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ji=class n extends pt{constructor(e=1,t=.4,s=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:r,arc:o},s=Math.floor(s),r=Math.floor(r);let a=[],l=[],c=[],u=[],h=new L,f=new L,d=new L;for(let p=0;p<=s;p++)for(let g=0;g<=r;g++){let y=g/r*o,_=p/s*Math.PI*2;f.x=(e+t*Math.cos(_))*Math.cos(y),f.y=(e+t*Math.cos(_))*Math.sin(y),f.z=t*Math.sin(_),l.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),u.push(g/r),u.push(p/s)}for(let p=1;p<=s;p++)for(let g=1;g<=r;g++){let y=(r+1)*p+g-1,_=(r+1)*(p-1)+g-1,m=(r+1)*(p-1)+g,x=(r+1)*p+g;a.push(y,_,x),a.push(_,m,x)}this.setIndex(a),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},pl=class n extends pt{constructor(e=new fl(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,s=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:s,radialSegments:r,closed:o};let a=e.computeFrenetFrames(t,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let l=new L,c=new L,u=new le,h=new L,f=[],d=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(p,2));function y(){for(let M=0;M<t;M++)_(M);_(o===!1?t:0),x(),m()}function _(M){h=e.getPointAt(M/t,h);let E=a.normals[M],I=a.binormals[M];for(let R=0;R<=r;R++){let C=R/r*Math.PI*2,B=Math.sin(C),v=-Math.cos(C);c.x=v*E.x+B*I.x,c.y=v*E.y+B*I.y,c.z=v*E.z+B*I.z,c.normalize(),d.push(c.x,c.y,c.z),l.x=h.x+s*c.x,l.y=h.y+s*c.y,l.z=h.z+s*c.z,f.push(l.x,l.y,l.z)}}function m(){for(let M=1;M<=t;M++)for(let E=1;E<=r;E++){let I=(r+1)*(M-1)+(E-1),R=(r+1)*M+(E-1),C=(r+1)*M+E,B=(r+1)*(M-1)+E;g.push(I,R,B),g.push(R,C,B)}}function x(){for(let M=0;M<=t;M++)for(let E=0;E<=r;E++)u.x=M/t,u.y=E/r,p.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Hv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Lr=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends Lr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Qi=class{constructor(e,t,s,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(s),this.sampleValues=t,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,s=this._cachedIndex,r=t[s],o=t[s-1];n:{e:{let a;t:{i:if(!(e<r)){for(let l=s+2;;){if(r===void 0){if(e<o)break i;return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===l)break;if(o=r,r=t[++s],e<r)break e}a=t.length;break t}if(!(e>=o)){let l=t[1];e<l&&(s=2,o=l);for(let c=s-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===c)break;if(r=o,o=t[--s-1],e>=o)break e}a=s,s=0;break t}break n}for(;s<a;){let l=s+a>>>1;e<t[l]?a=l:s=l+1}if(r=t[s],o=t[s-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,o,r)}return this.interpolate_(s,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=e*r;for(let a=0;a!==r;++a)t[a]=s[o+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oh=class extends Qi{constructor(e,t,s,r){super(e,t,s,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vd,endingEnd:vd}}intervalChanged_(e,t,s){let r=this.parameterPositions,o=e-2,a=e+1,l=r[o],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case Ed:o=e,l=2*t-s;break;case bd:o=r.length-2,l=t+r[o]-r[o+1];break;default:o=e,l=s}if(c===void 0)switch(this.getSettings_().endingEnd){case Ed:a=e,c=2*s-t;break;case bd:a=1,c=s+r[1]-r[0];break;default:a=e-1,c=t}let u=(s-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-s),this._offsetPrev=o*h,this._offsetNext=a*h}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(s-t)/(r-t),y=g*g,_=y*g,m=-d*_+2*d*y-d*g,x=(1+d)*_+(-1.5-2*d)*y+(-.5+d)*g+1,M=(-1-p)*_+(1.5+p)*y+.5*g,E=p*_-p*y;for(let I=0;I!==l;++I)o[I]=m*a[h+I]+x*a[u+I]+M*a[c+I]+E*a[f+I];return o}},Fh=class extends Qi{constructor(e,t,s,r){super(e,t,s,r)}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=(s-t)/(r-t),f=1-h;for(let d=0;d!==l;++d)o[d]=a[u+d]*f+a[c+d]*h;return o}},Hh=class extends Qi{constructor(e,t,s,r){super(e,t,s,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,s,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(s,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,s;if(t.toJSON!==this.toJSON)s=t.toJSON(e);else{s={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(s.interpolation=r)}return s.type=e.ValueTypeName,s}InterpolantFactoryMethodDiscrete(e){return new Hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return console.warn("THREE.KeyframeTrack:",s),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let s=0,r=t.length;s!==r;++s)t[s]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let s=0,r=t.length;s!==r;++s)t[s]*=e}return this}trim(e,t){let s=this.times,r=s.length,o=0,a=r-1;for(;o!==r&&s[o]<e;)++o;for(;a!==-1&&s[a]>t;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);let l=this.getValueSize();this.times=s.slice(o,a),this.values=this.values.slice(o*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let s=this.times,r=this.values,o=s.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==o;l++){let c=s[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(r!==void 0&&zv(r))for(let l=0,c=r.length;l!==c;++l){let u=r[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),s=this.getValueSize(),r=this.getInterpolation()===wc,o=e.length-1,a=1;for(let l=1;l<o;++l){let c=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(r)c=!0;else{let f=l*s,d=f-s,p=f+s;for(let g=0;g!==s;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[p+g]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let f=l*s,d=a*s;for(let p=0;p!==s;++p)t[d+p]=t[f+p]}++a}}if(o>0){e[a]=e[o];for(let l=o*s,c=a*s,u=0;u!==s;++u)t[c+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*s)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),s=this.constructor,r=new s(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Ps;es=class extends Gn{};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Ar;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;ml=class extends Gn{};ml.prototype.ValueTypeName="color";Ii=class extends Gn{};Ii.prototype.ValueTypeName="number";zh=class extends Qi{constructor(e,t,s,r){super(e,t,s,r)}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(s-t)/(r-t),u=e*l;for(let h=u+l;u!==h;u+=4)Pn.slerpFlat(o,0,a,u-l,a,u,c);return o}},pi=class extends Gn{InterpolantFactoryMethodLinear(e){return new zh(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.DefaultInterpolation=Ps;pi.prototype.InterpolantFactoryMethodSmooth=void 0;ts=class extends Gn{};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ar;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;Di=class extends Gn{};Di.prototype.ValueTypeName="vector";gl=class{constructor(e,t=-1,s,r=dg){this.name=e,this.tracks=s,this.duration=t,this.blendMode=r,this.uuid=Jn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],s=e.tracks,r=1/(e.fps||1);for(let a=0,l=s.length;a!==l;++a)t.push(Vv(s[a]).scale(r));let o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){let t=[],s=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=s.length;o!==a;++o)t.push(Gn.toJSON(s[o]));return r}static CreateFromMorphTargetSequence(e,t,s,r){let o=t.length,a=[];for(let l=0;l<o;l++){let c=[],u=[];c.push((l+o-1)%o,l,(l+1)%o),u.push(0,1,0);let h=kv(c);c=Ap(c,1,h),u=Ap(u,1,h),!r&&c[0]===0&&(c.push(o),u.push(u[0])),a.push(new Ii(".morphTargetInfluences["+t[l].name+"]",c,u).scale(1/s))}return new this(e,-1,a)}static findByName(e,t){let s=e;if(!Array.isArray(e)){let r=e;s=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<s.length;r++)if(s[r].name===t)return s[r];return null}static CreateClipsFromMorphTargetSequences(e,t,s){let r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){let u=e[l],h=u.name.match(o);if(h&&h.length>1){let f=h[1],d=r[f];d||(r[f]=d=[]),d.push(u)}}let a=[];for(let l in r)a.push(this.CreateFromMorphTargetSequence(l,r[l],t,s));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let s=function(f,d,p,g,y){if(p.length!==0){let _=[],m=[];tm(p,_,m,g),_.length!==0&&y.push(new f(d,_,m))}},r=[],o=e.name||"default",a=e.fps||30,l=e.blendMode,c=e.length||-1,u=e.hierarchy||[];for(let f=0;f<u.length;f++){let d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)p[d[g].morphTargets[y]]=-1;for(let y in p){let _=[],m=[];for(let x=0;x!==d[g].morphTargets.length;++x){let M=d[g];_.push(M.time),m.push(M.morphTarget===y?1:0)}r.push(new Ii(".morphTargetInfluence["+y+"]",_,m))}c=p.length*a}else{let p=".bones["+t[f].name+"]";s(Di,p+".position",d,"pos",r),s(pi,p+".quaternion",d,"rot",r),s(Di,p+".scale",d,"scl",r)}}return r.length===0?null:new this(o,c,r,l)}resetDuration(){let e=this.tracks,t=0;for(let s=0,r=e.length;s!==r;++s){let o=this.tracks[s];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Xi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},kh=class{constructor(e,t,s){let r=this,o=!1,a=0,l=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(h){l++,o===!1&&r.onStart!==void 0&&r.onStart(h,a,l),o=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,l),a===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Wv=new kh,Ni=class{constructor(e){this.manager=e!==void 0?e:Wv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let s=this;return new Promise(function(r,o){s.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";wi={},Gh=class extends Error{constructor(e,t){super(e),this.response=t}},To=class extends Ni{constructor(e){super(e)}load(e,t,s,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=Xi.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:s,onError:r});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:s,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let h=wi[e],f=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,y=0,_=new ReadableStream({start(m){x();function x(){f.read().then(({done:M,value:E})=>{if(M)m.close();else{y+=E.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let R=0,C=h.length;R<C;R++){let B=h[R];B.onProgress&&B.onProgress(I)}m.enqueue(E),x()}})}}});return new Response(_)}else throw new Gh(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return u.json();default:if(l===void 0)return u.text();{let f=/charset="?([^;"\s]*)"?/i.exec(l),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{Xi.add(e,u);let h=wi[e];delete wi[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{let h=wi[e];if(h===void 0)throw this.manager.itemError(e),u;delete wi[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Vh=class extends Ni{constructor(e){super(e)}load(e,t,s,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,a=Xi.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;let l=yo("img");function c(){h(),Xi.add(e,this),t&&t(this),o.manager.itemEnd(e)}function u(f){h(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}},Ir=class extends Ni{constructor(e){super(e)}load(e,t,s,r){let o=new Qt,a=new Vh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},s,r),o}},Ao=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ih=new Pe,wp=new L,Rp=new L,wo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,s=this.matrix;wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(wp),Rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rp),t.updateMatrixWorld(),ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wh=class extends wo{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,s=wr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(s!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=s,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_l=class extends Ao{constructor(e,t,s=0,r=Math.PI/3,o=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=s,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Cp=new Pe,ho=new L,sh=new L,Xh=class extends wo{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let s=this.camera,r=this.matrix,o=e.distance||s.far;o!==s.far&&(s.far=o,s.updateProjectionMatrix()),ho.setFromMatrixPosition(e.matrixWorld),s.position.copy(ho),sh.copy(s.position),sh.add(this._cubeDirections[t]),s.up.copy(this._cubeUps[t]),s.lookAt(sh),s.updateMatrixWorld(),r.makeTranslation(-ho.x,-ho.y,-ho.z),Cp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cp)}},yl=class extends Ao{constructor(e,t,s=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=r,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},qh=class extends wo{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ml=class extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new qh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ns=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let s=0,r=e.length;s<r;s++)t+=String.fromCharCode(e[s]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},xl=class extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,s,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,a=Xi.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(u=>{t&&t(u),o.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;let c=fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(u){return Xi.add(e,u),t&&t(u),o.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Xi.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Xi.add(e,c),o.manager.itemStart(e)}},vl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Pp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};eu="\\[\\]\\.:\\/",Xv=new RegExp("["+eu+"]","g"),tu="[^"+eu+"]",qv="[^"+eu.replace("\\.","")+"]",Yv=/((?:WC+[\/:])*)/.source.replace("WC",tu),Kv=/(WCOD+)?/.source.replace("WCOD",qv),Zv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),$v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),Jv=new RegExp("^"+Yv+Kv+Zv+$v+"$"),jv=["material","materials","bones","map"],Yh=class{constructor(e,t,s){let r=s||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let s=this._targetGroup.nCachedObjects_,r=this._bindings[s];r!==void 0&&r.getValue(e,t)}setValue(e,t){let s=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=s.length;r!==o;++r)s[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].unbind()}},yt=class n{constructor(e,t,s){this.path=t,this.parsedPath=s||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,s){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,s):new n(e,t,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xv,"")}static parseTrackName(e){let t=Jv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=s.nodeName.substring(r+1);jv.indexOf(o)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=o)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(t);if(s!==void 0)return s}if(e.children){let s=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===t||l.uuid===t)return l;let c=s(l.children);if(c)return c}return null},r=s(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)e[t++]=s[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,s=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let u=t.objectIndex;switch(s){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Yh;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Ab=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var Al,nu=Yn(()=>{Al={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var ni,eE,iu,tE,Ur,Co=Yn(()=>{mi();ni=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},eE=new $i(-1,1,1,-1,0,1),iu=class extends pt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},tE=new iu,Ur=class{constructor(e){this._mesh=new $(tE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var wl,nm=Yn(()=>{mi();Co();wl=class extends ni{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Dr.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ur(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Po,Rl,su=Yn(()=>{Co();Po=class extends ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){let r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}},Rl=class extends ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Cl,im=Yn(()=>{mi();nu();nm();su();su();Cl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let s=e.getSize(new le);this._width=s.width,this._height=s.height,t=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wl(Al),this.copyPass.material.blending=ui,this.clock=new vl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),s=!1;for(let r=0,o=this.passes.length;r<o;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),a.needsSwap){if(s){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Po!==void 0&&(a instanceof Po?s=!0:a instanceof Rl&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let s=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(s,r),this.renderTarget2.setSize(s,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(s,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Pl,sm=Yn(()=>{mi();Co();Pl=class extends ni{constructor(e,t,s=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,s){let r=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}});var rm,om=Yn(()=>{mi();rm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var Br,am=Yn(()=>{mi();Co();nu();om();Br=class n extends ni{constructor(e,t,s,r){super(),this.strength=t!==void 0?t:1,this.radius=s,this.threshold=r,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(o,a,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new yn(o,a,{type:ei});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new yn(o,a,{type:ei});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),a=Math.round(a/2)}let l=rm;this.highPassUniforms=Dr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new le(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Al;this.copyUniforms=Dr.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Et,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new ae,this.fsQuad=new Ur(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(s,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(s,r),this.renderTargetsVertical[o].setSize(s,r),this.separableBlurMaterials[o].uniforms.invSize.value=new le(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2)}render(e,t,s,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=s.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new en({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Br.BlurDirectionX=new le(1,0);Br.BlurDirectionY=new le(0,1)});function xn(n,e=!1){let t=n[0].index!==null,s=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),o={},a={},l=n[0].morphTargetsRelative,c=new pt,u=0;for(let h=0;h<n.length;++h){let f=n[h],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.attributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,p,h),u+=p}}if(t){let h=0,f=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(f)}for(let h in o){let f=lm(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let g=lm(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function lm(n){let e,t,s,r=-1,o=0;for(let u=0;u<n.length;++u){let h=n[u];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=h.normalized),s!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.array.length}let a=new e(o),l=0;for(let u=0;u<n.length;++u)a.set(n[u].array,l),l+=n[u].array.length;let c=new xt(a,t,s);return r!==void 0&&(c.gpuType=r),c}function ru(n,e){if(e===kp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ro||e===bl){let t=n.getIndex();if(t===null){let a=[],l=n.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let s=t.count-2,r=[];if(e===Ro)for(let a=1;a<=s;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<s;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let o=n.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var ou=Yn(()=>{mi()});function nE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function rE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Lr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fi})),n.DefaultMaterial}function Ns(n,e,t){for(let s in t.extensions)n[s]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[s]=t.extensions[s])}function ss(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oE(n,e,t){let s=!1,r=!1,o=!1;for(let u=0,h=e.length;u<h;u++){let f=e[u];if(f.POSITION!==void 0&&(s=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(o=!0),s&&r&&o)break}if(!s&&!r&&!o)return Promise.resolve(n);let a=[],l=[],c=[];for(let u=0,h=e.length;u<h;u++){let f=e[u];if(s){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;a.push(d)}if(r){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;l.push(d)}if(o){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){let h=u[0],f=u[1],d=u[2];return s&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=f),o&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function aE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,s=e.weights.length;t<s;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let s=0,r=t.length;s<r;s++)n.morphTargetDictionary[t[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lE(n){let e,t=n.extensions&&n.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cu(t.attributes):e=n.indices+":"+cu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let s=0,r=n.targets.length;s<r;s++)e+=":"+cu(n.targets[s]);return e}function cu(n){let e="",t=Object.keys(n).sort();for(let s=0,r=t.length;s<r;s++)e+=t[s]+":"+n[t[s]]+";";return e}function Du(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function uE(n,e,t){let s=e.attributes,r=new bt;if(s.POSITION!==void 0){let l=t.json.accessors[s.POSITION],c=l.min,u=l.max;if(c!==void 0&&u!==void 0){if(r.set(new L(c[0],c[1],c[2]),new L(u[0],u[1],u[2])),l.normalized){let h=Du(Or[l.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let o=e.targets;if(o!==void 0){let l=new L,c=new L;for(let u=0,h=o.length;u<h;u++){let f=o[u];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let y=Du(Or[d.componentType]);c.multiplyScalar(y)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(l)}n.boundingBox=r;let a=new Ln;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function fm(n,e,t){let s=e.attributes,r=[];function o(a,l){return t.getDependency("accessor",a).then(function(c){n.setAttribute(l,c)})}for(let a in s){let l=Iu[a]||a.toLowerCase();l in n.attributes||r.push(o(s[a],l))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(l){n.setIndex(l)});r.push(a)}return st.workingColorSpace!==Ft&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),ss(n,e),uE(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?oE(n,e.targets,t):n})}var Ll,Qe,hu,uu,fu,du,pu,mu,gu,_u,yu,Mu,xu,vu,Eu,bu,Su,Tu,Au,dm,Lo,cm,wu,Ru,Cu,Pu,Il,iE,Lu,Vn,Or,hm,um,au,Iu,is,sE,lu,hE,Nu,pm=Yn(()=>{mi();ou();Ll=class extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new du(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)})}load(e,t,s,r){let o=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=ns.extractUrlBase(e);a=ns.resolveURL(u,this.path)}else a=ns.extractUrlBase(e);this.manager.itemStart(e);let l=function(u){r?r(u):console.error(u),o.manager.itemError(e),o.manager.itemEnd(e)},c=new To(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{o.parse(u,a,function(h){t(h),o.manager.itemEnd(e)},l)}catch(h){l(h)}},s,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,r){let o,a={},l={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===dm){try{a[Qe.KHR_BINARY_GLTF]=new wu(e)}catch(f){r&&r(f);return}o=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Nu(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,a[f.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){let f=o.extensionsUsed[h],d=o.extensionsRequired||[];switch(f){case Qe.KHR_MATERIALS_UNLIT:a[f]=new uu;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[f]=new Ru(o,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[f]=new Cu;break;case Qe.KHR_MESH_QUANTIZATION:a[f]=new Pu;break;default:d.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(a),u.setPlugins(l),u.parse(s,r)}parseAsync(e,t){let s=this;return new Promise(function(r,o){s.parse(e,t,r,o)})}};Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hu=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){let t=this.parser,s="light:"+e,r=t.cache.get(s);if(r)return r;let o=t.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e],u,h=new ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ft);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Ml(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new yl(h),u.distance=f;break;case"spot":u=new _l(h),u.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,ss(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(s,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,s=this.parser,o=s.json.nodes[e],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return s._getNodeRef(t.cache,l,c)})}},uu=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return ae}extendParams(e,t,s){let r=[];e.color=new ge(1,1,1),e.opacity=1;let o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){let a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ft),e.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(s.assignTexture(e,"map",o.baseColorTexture,ct))}return Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}},du=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(s.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(s.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(s.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(l,l)}return Promise.all(o)}},pu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(s.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(s.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}},mu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],Ft)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(s.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ct)),a.sheenRoughnessTexture!==void 0&&o.push(s.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}},gu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(s.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(o)}},_u=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(s.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let l=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(l[0],l[1],l[2],Ft),Promise.all(o)}},yu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:kn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=r.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}},Mu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(s.assignTexture(t,"specularIntensityMap",a.specularTexture));let l=a.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(l[0],l[1],l[2],Ft),a.specularColorTexture!==void 0&&o.push(s.assignTexture(t,"specularColorMap",a.specularColorTexture,ct)),Promise.all(o)}},xu=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(s.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(o)}},vu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(s.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}},Eu=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,s=t.json,r=s.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let o=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,a)}},bu=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,s=this.parser,r=s.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;let a=o.extensions[t],l=r.images[a.source],c=s.textureLoader;if(l.uri){let u=s.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return s.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Su=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,s=this.parser,r=s.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;let a=o.extensions[t],l=r.images[a.source],c=s.textureLoader;if(l.uri){let u=s.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return s.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Tu=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,s=t.bufferViews[e];if(s.extensions&&s.extensions[this.name]){let r=s.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){let c=r.byteOffset||0,u=r.byteLength||0,h=r.count,f=r.byteStride,d=new Uint8Array(l,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(p),h,f,d,r.mode,r.filter),p})})}else return null}},Au=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,s=t.nodes[e];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;let r=t.meshes[s.mesh];for(let u of r.primitives)if(u.mode!==Vn.TRIANGLES&&u.mode!==Vn.TRIANGLE_STRIP&&u.mode!==Vn.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=s.extensions[this.name].attributes,l=[],c={};for(let u in a)l.push(this.parser.getDependency("accessor",a[u]).then(h=>(c[u]=h,c[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(u=>{let h=u.pop(),f=h.isGroup?h.children:[h],d=u[0].count,p=[];for(let g of f){let y=new Pe,_=new L,m=new Pn,x=new L(1,1,1),M=new cl(g.geometry,g.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&_.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&x.fromBufferAttribute(c.SCALE,E),M.setMatrixAt(E,y.compose(_,m,x));for(let E in c)if(E==="_COLOR_0"){let I=c[E];M.instanceColor=new Ls(I.array,I.itemSize,I.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,c[E]);Lt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},dm="glTF",Lo=12,cm={JSON:1313821514,BIN:5130562},wu=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Lo),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Lo,o=new DataView(e,Lo),a=0;for(;a<r;){let l=o.getUint32(a,!0);a+=4;let c=o.getUint32(a,!0);if(a+=4,c===cm.JSON){let u=new Uint8Array(e,Lo+a,l);this.content=s.decode(u)}else if(c===cm.BIN){let u=Lo+a;this.body=e.slice(u,u+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ru=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let s=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},u={};for(let h in a){let f=Iu[h]||h.toLowerCase();l[f]=a[h]}for(let h in e.attributes){let f=Iu[h]||h.toLowerCase();if(a[h]!==void 0){let d=s.accessors[e.attributes[h]],p=Or[d.componentType];u[f]=p.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",o).then(function(h){return new Promise(function(f,d){r.decodeDracoFile(h,function(p){for(let g in p.attributes){let y=p.attributes[g],_=c[g];_!==void 0&&(y.normalized=_)}f(p)},l,u,Ft,d)})})}},Cu=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Pu=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},Il=class extends Qi{constructor(e,t,s,r){super(e,t,s,r)}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let a=0;a!==r;a++)t[a]=s[o+a];return t}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,u=l*3,h=r-t,f=(s-t)/h,d=f*f,p=d*f,g=e*u,y=g-u,_=-2*p+3*d,m=p-d,x=1-_,M=m-d+f;for(let E=0;E!==l;E++){let I=a[y+E+l],R=a[y+E+c]*h,C=a[g+E+l],B=a[g+E]*h;o[E]=x*I+M*R+_*C+m*B}return o}},iE=new Pn,Lu=class extends Il{interpolate_(e,t,s,r){let o=super.interpolate_(e,t,s,r);return iE.fromArray(o).normalize().toArray(o),o}},Vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hm={9728:Pt,9729:jt,9984:Ga,9985:Kh,9986:Yi,9987:Qn},um={33071:_n,33648:_o,10497:jn},au={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sE={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Ar},lu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};hE=new Pe,Nu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,r=!1,o=-1;typeof navigator<"u"&&(s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,o=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||s||r&&o<98?this.textureLoader=new Ir(this.options.manager):this.textureLoader=new xl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new To(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let s=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(a){let l={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:s,userData:{}};return Ns(o,l,r),ss(l,r),Promise.all(s._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){let a=t[r].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let r=0,o=e.length;r<o;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(s[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,s){if(e.refs[t]<=1)return s;let r=s.clone(),o=(a,l)=>{let c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(let[u,h]of a.children.entries())o(h,l.children[u])};return o(s,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let s=0;s<t.length;s++){let r=e(t[s]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let s=[];for(let r=0;r<t.length;r++){let o=e(t[r]);o&&s.push(o)}return s}getDependency(e,t){let s=e+":"+t,r=this.cache.get(s);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(s,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let s=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,a){return s.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],s=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(o,a){s.load(ns.resolveURL(t.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(s){let r=t.byteLength||0,o=t.byteOffset||0;return s.slice(o,o+r)})}loadAccessor(e){let t=this,s=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=au[r.type],l=Or[r.componentType],c=r.normalized===!0,u=new l(r.count*a);return Promise.resolve(new xt(u,a,c))}let o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){let l=a[0],c=au[r.type],u=Or[r.componentType],h=u.BYTES_PER_ELEMENT,f=h*c,d=r.byteOffset||0,p=r.bufferView!==void 0?s.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,y,_;if(p&&p!==f){let m=Math.floor(d/p),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,M=t.cache.get(x);M||(y=new u(l,m*p,r.count*p/h),M=new vo(y,p/h),t.cache.add(x,M)),_=new Eo(M,c,d%p/h,g)}else l===null?y=new u(r.count*c):y=new u(l,d,r.count*c),_=new xt(y,c,g);if(r.sparse!==void 0){let m=au.SCALAR,x=Or[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,I=new x(a[1],M,r.sparse.count*m),R=new u(a[2],E,r.sparse.count*c);l!==null&&(_=new xt(_.array.slice(),_.itemSize,_.normalized));for(let C=0,B=I.length;C<B;C++){let v=I[C];if(_.setX(v,R[C*c]),c>=2&&_.setY(v,R[C*c+1]),c>=3&&_.setZ(v,R[C*c+2]),c>=4&&_.setW(v,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return _})}loadTexture(e){let t=this.json,s=this.options,o=t.textures[e].source,a=t.images[o],l=this.textureLoader;if(a.uri){let c=s.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,o,l)}loadTextureImage(e,t,s){let r=this,o=this.json,a=o.textures[e],l=o.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let u=this.loadImageSource(t,s).then(function(h){h.flipY=!1,h.name=a.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);let d=(o.samplers||{})[a.sampler]||{};return h.magFilter=hm[d.magFilter]||jt,h.minFilter=hm[d.minFilter]||Qn,h.wrapS=um[d.wrapS]||jn,h.wrapT=um[d.wrapT]||jn,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){let s=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=r.images[e],l=self.URL||self.webkitURL,c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=s.getDependency("bufferView",a.bufferView).then(function(f){u=!0;let d=new Blob([f],{type:a.mimeType});return c=l.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(f){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let _=new Qt(y);_.needsUpdate=!0,d(_)}),t.load(ns.resolveURL(f,o.path),g,void 0,p)})}).then(function(f){return u===!0&&l.revokeObjectURL(c),f.userData.mimeType=a.mimeType||cE(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,s,r){let o=this;return this.getDependency("texture",s.index).then(function(a){if(!a)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(a=a.clone(),a.channel=s.texCoord),o.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let l=s.extensions!==void 0?s.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let c=o.associations.get(a);a=o.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),o.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,s=e.material,r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+s.uuid,c=this.cache.get(l);c||(c=new Is,In.prototype.copy.call(c,s),c.color.copy(s.color),c.map=s.map,c.sizeAttenuation=!1,this.cache.add(l,c)),s=c}else if(e.isLine){let l="LineBasicMaterial:"+s.uuid,c=this.cache.get(l);c||(c=new Hn,In.prototype.copy.call(c,s),c.color.copy(s.color),c.map=s.map,this.cache.add(l,c)),s=c}if(r||o||a){let l="ClonedMaterial:"+s.uuid+":";r&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=s.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(s))),s=c}e.material=s}getMaterialType(){return Lr}loadMaterial(e){let t=this,s=this.json,r=this.extensions,o=s.materials[e],a,l={},c=o.extensions||{},u=[];if(c[Qe.KHR_MATERIALS_UNLIT]){let f=r[Qe.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(l,o,t))}else{let f=o.pbrMetallicRoughness||{};if(l.color=new ge(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],Ft),l.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(l,"map",f.baseColorTexture,ct)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}o.doubleSided===!0&&(l.side=Mt);let h=o.alphaMode||lu.OPAQUE;if(h===lu.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===lu.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==ae&&(u.push(t.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new le(1,1),o.normalTexture.scale!==void 0)){let f=o.normalTexture.scale;l.normalScale.set(f,f)}if(o.occlusionTexture!==void 0&&a!==ae&&(u.push(t.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==ae){let f=o.emissiveFactor;l.emissive=new ge().setRGB(f[0],f[1],f[2],Ft)}return o.emissiveTexture!==void 0&&a!==ae&&u.push(t.assignTexture(l,"emissiveMap",o.emissiveTexture,ct)),Promise.all(u).then(function(){let f=new a(l);return o.name&&(f.name=o.name),ss(f,o),t.associations.set(f,{materials:e}),o.extensions&&Ns(r,f,o),f})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,s=this.extensions,r=this.primitiveCache;function o(l){return s[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return fm(c,l,t)})}let a=[];for(let l=0,c=e.length;l<c;l++){let u=e[l],h=lE(u),f=r[h];if(f)a.push(f.promise);else{let d;u.extensions&&u.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=o(u):d=fm(new pt,u,t),r[h]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,s=this.json,r=this.extensions,o=s.meshes[e],a=o.primitives,l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c].material===void 0?rE(this.cache):this.getDependency("material",a[c].material);l.push(h)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){let u=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let p=0,g=h.length;p<g;p++){let y=h[p],_=a[p],m,x=u[p];if(_.mode===Vn.TRIANGLES||_.mode===Vn.TRIANGLE_STRIP||_.mode===Vn.TRIANGLE_FAN||_.mode===void 0)m=o.isSkinnedMesh===!0?new al(y,x):new $(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),_.mode===Vn.TRIANGLE_STRIP?m.geometry=ru(m.geometry,bl):_.mode===Vn.TRIANGLE_FAN&&(m.geometry=ru(m.geometry,Ro));else if(_.mode===Vn.LINES)m=new kt(y,x);else if(_.mode===Vn.LINE_STRIP)m=new Ji(y,x);else if(_.mode===Vn.LINE_LOOP)m=new hl(y,x);else if(_.mode===Vn.POINTS)m=new Pr(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(m.geometry.morphAttributes).length>0&&aE(m,o),m.name=t.createUniqueName(o.name||"mesh_"+e),ss(m,o),_.extensions&&Ns(r,m,_),t.assignFinalMaterial(m),f.push(m)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return o.extensions&&Ns(r,f[0],o),f[0];let d=new rt;o.extensions&&Ns(r,d,o),t.associations.set(d,{meshes:e});for(let p=0,g=f.length;p<g;p++)d.add(f[p]);return d})}loadCamera(e){let t,s=this.json.cameras[e],r=s[s.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?t=new Ot(Xp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):s.type==="orthographic"&&(t=new $i(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),s.name&&(t.name=this.createUniqueName(s.name)),ss(t,s),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],s=[];for(let r=0,o=t.joints.length;r<o;r++)s.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",t.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(r){let o=r.pop(),a=r,l=[],c=[];for(let u=0,h=a.length;u<h;u++){let f=a[u];if(f){l.push(f);let d=new Pe;o!==null&&d.fromArray(o.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new ll(l,c)})}loadAnimation(e){let t=this.json,s=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,a=[],l=[],c=[],u=[],h=[];for(let f=0,d=r.channels.length;f<d;f++){let p=r.channels[f],g=r.samplers[p.sampler],y=p.target,_=y.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",_)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),u.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(f){let d=f[0],p=f[1],g=f[2],y=f[3],_=f[4],m=[];for(let x=0,M=d.length;x<M;x++){let E=d[x],I=p[x],R=g[x],C=y[x],B=_[x];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let v=s._createAnimationTracks(E,I,R,C,B);if(v)for(let S=0;S<v.length;S++)m.push(v[S])}return new gl(o,void 0,m)})}createNodeMesh(e){let t=this.json,s=this,r=t.nodes[e];return r.mesh===void 0?null:s.getDependency("mesh",r.mesh).then(function(o){let a=s._getNodeRef(s.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,u=r.weights.length;c<u;c++)l.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,s=this,r=t.nodes[e],o=s._loadNodeShallow(e),a=[],l=r.children||[];for(let u=0,h=l.length;u<h;u++)a.push(s.getDependency("node",l[u]));let c=r.skin===void 0?Promise.resolve(null):s.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),c]).then(function(u){let h=u[0],f=u[1],d=u[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,hE)});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}_loadNodeShallow(e){let t=this.json,s=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let o=t.nodes[e],a=o.name?r.createUniqueName(o.name):"",l=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&l.push(c),o.camera!==void 0&&l.push(r.getDependency("camera",o.camera).then(function(u){return r._getNodeRef(r.cameraCache,o.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){l.push(u)}),this.nodeCache[e]=Promise.all(l).then(function(u){let h;if(o.isBone===!0?h=new bo:u.length>1?h=new rt:u.length===1?h=u[0]:h=new Lt,h!==u[0])for(let f=0,d=u.length;f<d;f++)h.add(u[f]);if(o.name&&(h.userData.name=o.name,h.name=a),ss(h,o),o.extensions&&Ns(s,h,o),o.matrix!==void 0){let f=new Pe;f.fromArray(o.matrix),h.applyMatrix4(f)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,s=this.json.scenes[e],r=this,o=new rt;s.name&&(o.name=r.createUniqueName(s.name)),ss(o,s),s.extensions&&Ns(t,o,s);let a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(r.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let h=0,f=c.length;h<f;h++)o.add(c[h]);let u=h=>{let f=new Map;for(let[d,p]of r.associations)(d instanceof In||d instanceof Qt)&&f.set(d,p);return h.traverse(d=>{let p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=u(o),o})}_createAnimationTracks(e,t,s,r,o){let a=[],l=e.name?e.name:e.uuid,c=[];is[o.path]===is.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(l);let u;switch(is[o.path]){case is.weights:u=Ii;break;case is.rotation:u=pi;break;case is.position:case is.scale:u=Di;break;default:s.itemSize===1?u=Ii:u=Di;break}let h=r.interpolation!==void 0?sE[r.interpolation]:Ps,f=this._getArrayFromAccessor(s);for(let d=0,p=c.length;d<p;d++){let g=new u(c[d]+"."+is[o.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let s=Du(t.constructor),r=new Float32Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=t[o]*s;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(s){let r=this instanceof pi?Lu:Il;return new r(this.times,this.values,this.getValueSize()/3,s)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Sb=b0(()=>{mi();im();sm();am();pm();ou();var Fr=Math.PI/180,fE=656928,Jt=2814207,sn=16722902,dE=16769162;function Pm(n){return{r:n>>16&255,g:n>>8&255,b:n&255}}var ai=[{name:"VICE RUNWAY",music:"vice-runway.mp3",sun:{halo:["rgba(255,178,96,0.34)","rgba(255,96,112,0.13)","rgba(255,60,150,0)"],disc:["#ffcf72","#ff9a3e","#ff5a5f","#ff2f8e","#d81ea0"]},fog:7218768,glow:16731558,haze:16747158,skyA:[[24,12,48],[50,22,70],[92,34,86],[130,52,82],[156,82,66],[74,36,56],[24,13,36]],skyB:[[46,23,86],[90,40,112],[160,58,126],[206,90,112],[222,136,94],[118,58,86],[38,21,58]]},{name:"TURBO KASKADE",music:"turbo-kaskade.mp3",sun:{halo:["rgba(170,195,255,0.30)","rgba(90,130,220,0.12)","rgba(60,90,180,0)"],disc:["#eef4ff","#cdd9f2","#a6bce6","#8098d0","#5f78ba"]},fog:1450058,glow:4881151,haze:6982352,skyA:[[8,12,36],[16,24,60],[28,42,88],[44,64,116],[70,98,150],[40,54,96],[12,16,40]],skyB:[[20,28,68],[34,50,100],[52,78,136],[80,112,168],[116,154,198],[66,90,142],[20,26,62]]},{name:"POISON HEARTBEAT",music:"poison-heartbeat.mp3",sun:{halo:["rgba(150,255,120,0.32)","rgba(60,200,90,0.13)","rgba(30,150,80,0)"],disc:["#eaffb0","#a8ff5e","#4ef05a","#1fc96a","#0d8a5a"]},fog:1456159,glow:5504874,haze:8048746,skyA:[[6,16,20],[10,30,32],[16,48,40],[26,70,48],[44,100,56],[22,52,40],[8,18,18]],skyB:[[14,36,34],[24,62,52],[40,96,64],[64,132,72],[108,176,84],[52,102,64],[16,34,30]]}],Fi=new ol;Fi.fog=new rl(7218768,6e-5);var ke=new rt;ke.visible=!1;Fi.add(ke);var Nt=new Ot(66,innerWidth/innerHeight,2.5,3e4),Bi=new xo({antialias:!1,alpha:!0}),na=Math.min(16,Bi.capabilities.getMaxAnisotropy());Bi.info.autoReset=!1;var mm=0;document.body.appendChild(Bi.domElement);var Ui=1.85,Uu=3,Yo=new Cl(Bi);Yo.addPass(new Pl(Fi,Nt));var Ko=new Br(new le(1,1),.9,.55,.18);Yo.addPass(Ko);function Yl(){Nt.aspect=innerWidth/innerHeight,Nt.updateProjectionMatrix();let n=Math.ceil(innerWidth/Ui),e=Math.ceil(innerHeight/Ui);Bi.setSize(n,e,!1),Yo.setSize(n,e),Ko.setSize(Math.ceil(n/3),Math.ceil(e/3));let t=Bi.domElement;t.style.width=innerWidth+"px",t.style.height=innerHeight+"px",t.style.imageRendering="pixelated"}Yl();addEventListener("resize",Yl);var gm={},Oi=n=>gm[n]||(gm[n]=new Hn({color:n})),pE=new ae({color:fE,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2});function Lm(){return pE}function ac(n,e){let t=n.clone(!0);return t.traverse(s=>{s.isMesh&&(s.material=Lm(),s.add(new kt(new ln(s.geometry,25),Oi(e))))}),t}function mE(n,e,t){n.updateMatrixWorld(!0);let s=new bt().setFromObject(n),r=new L;s.getSize(r),r.y>.001&&n.scale.setScalar(e/r.y),n.updateMatrixWorld(!0);let o=new bt().setFromObject(n);n.position.y=t-o.min.y}var Wu=new Ie(1.9,1.3),lc=16765514;function gE(n,e,t,s,r,o,a,l,c,u,h){let d=u||10,p=h||4,g=[],y=[{rot:0,o:o+.95,a:[n+3,s-3]},{rot:Math.PI,o:t-.95,a:[n+3,s-3]},{rot:Math.PI/2,o:s+.95,a:[t+3,o-3]},{rot:-Math.PI/2,o:n-.95,a:[t+3,o-3]}],_=typeof l=="number"&&l<=1?l:.5;for(let x of y)for(let M=e+d+5;M<r-4;M+=d){let E=Math.min(1,_*(.35+Math.random()*1.5));for(let I=x.a[0]+p*.5;I<x.a[1];I+=p){if(Math.random()>E)continue;let R=Wu.clone(),C=new Pe;x.rot===0?C.makeTranslation(I,M,x.o):(C.makeRotationY(x.rot),C.setPosition(x.rot===Math.PI?I:x.o,M,x.rot===Math.PI?x.o:I)),R.applyMatrix4(C),g.push(R)}}g.length||g.push(Wu.clone().translate(0,e-999,0));let m=xn(g);return g.forEach(x=>x.dispose()),new $(m,new ae({color:lc,transparent:!0,opacity:.8,depthWrite:!1,side:Mt,fog:!c}))}function Im(n){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),s=t.createRadialGradient(128,128,44,128,128,128);s.addColorStop(0,n.halo[0]),s.addColorStop(.5,n.halo[1]),s.addColorStop(1,n.halo[2]),t.fillStyle=s,t.fillRect(0,0,256,256);let r=t.createLinearGradient(0,26,0,230);r.addColorStop(0,n.disc[0]),r.addColorStop(.34,n.disc[1]),r.addColorStop(.62,n.disc[2]),r.addColorStop(.85,n.disc[3]),r.addColorStop(1,n.disc[4]),t.fillStyle=r,t.beginPath(),t.arc(128,128,104,0,7),t.fill(),t.globalCompositeOperation="destination-out";for(let a=0;a<4;a++)t.fillRect(0,102+a*7,256,3);let o=t.createLinearGradient(0,127,0,139);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=o,t.fillRect(0,127,256,129),new zn(e)}var Wn=new $(new Ie(6400,6400),new ae({map:Im(ai[0].sun),transparent:!0,depthWrite:!1,fog:!1}));Wn.position.set(0,-470,-16800);Fi.add(Wn);function Dm(n){let{r:e,g:t,b:s}=Pm(n),r=document.createElement("canvas");r.width=4,r.height=128;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,0,128);return a.addColorStop(0,`rgba(${e},${t},${s},0)`),a.addColorStop(.5,`rgba(${e},${t},${s},0.5)`),a.addColorStop(1,`rgba(${e},${t},${s},0)`),o.fillStyle=a,o.fillRect(0,0,4,128),new zn(r)}var ps=new $(new Ie(6e4,1500),new ae({map:Dm(ai[0].haze),transparent:!0,depthWrite:!1,fog:!1,blending:Et}));ps.position.set(0,-10,-6e3);Fi.add(ps);function Qs(n,e,t){let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d");r.imageSmoothingEnabled=!1,t(r,n,e);let o=new zn(s);return o.magFilter=Pt,o.minFilter=Pt,o.colorSpace=ct,o.wrapS=o.wrapT=jn,o}var Wt=new ae({color:656918}),En=new ae({color:1314854}),_m=[{base:"#140b28",slab:"#1d1236",mull:"#0d0719",win:"#ffd24a",win2:"#7adcff",acc:"#ff2bd6",shop:["#ff9a3c","#ff2bd6","#2af0ff","#ffe08a"]},{base:"#0e0d2c",slab:"#171a3e",mull:"#080716",win:"#ffe08a",win2:"#9adcff",acc:"#2af0ff",shop:["#ffd24a","#ff5a5f","#2af0ff","#c0ff5e"]},{base:"#190a20",slab:"#241031",mull:"#0e0614",win:"#ffcf5e",win2:"#ff8a7a",acc:"#7b3ff2",shop:["#ff9a3c","#ff2bd6","#ffe08a","#7adcff"]},{base:"#101226",slab:"#1a1e38",mull:"#090a16",win:"#f5d98c",win2:"#8ac8f0",acc:"#ff5a8f",shop:["#ffb45e","#ff4a7c","#4adcff","#ffe08a"]},{base:"#0d1420",slab:"#152238",mull:"#070b12",win:"#ffe6a0",win2:"#6ae0d0",acc:"#2af0ff",shop:["#4adcff","#ffd24a","#ff2bd6","#c0ff5e"]},{base:"#1c0d16",slab:"#2a1522",mull:"#100710",win:"#ffc86a",win2:"#ff7ab0",acc:"#ff2b5c",shop:["#ff5a5f","#ffb45e","#ff2bd6","#ffe08a"]},{base:"#12102a",slab:"#1b1a40",mull:"#0a0918",win:"#e8d48a",win2:"#a0b8ff",acc:"#7b3ff2",shop:["#9a6aff","#2af0ff","#ffd24a","#ff4a7c"]},{base:"#0a1616",slab:"#122424",mull:"#060e0e",win:"#d8ffb0",win2:"#7adcff",acc:"#c0ff5e",shop:["#c0ff5e","#2af0ff","#ffe08a","#ff9a3c"]}];function _E(n,e,t,s,r){if(r>=11)return yE(n,e,t,s,r);n.fillStyle=s.base,n.fillRect(0,0,e,t);let o=Math.min(16,t*.08|0)+6,a=6+(Math.random()*6|0),l=t-o;if(r===1){n.fillStyle="rgba(120,180,255,0.05)",n.fillRect(0,0,e,t);for(let u=0;u<e;u+=3)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(u,0,1,t);let c=0;for(let u=a;u<l-6;u+=6){if(c<=0&&Math.random()<.16&&(c=1+(Math.random()*3|0)),c>0){c--,n.fillStyle=Math.random()<.7?s.win:s.win2,n.globalAlpha=.75,n.fillRect(1,u+1,e-2,4),n.globalAlpha=1;for(let h=0;h<e;h+=3)n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(h,u+1,1,4)}else if(n.fillStyle="rgba(10,16,40,0.55)",n.fillRect(1,u+1,e-2,4),Math.random()<.2){n.fillStyle=s.win2,n.globalAlpha=.5;let h=Math.random()*e*.7|0;n.fillRect(h,u+1,3+Math.random()*8|0,4),n.globalAlpha=1}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,u+5,e,1)}n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(0,0,e,a),n.fillStyle=s.acc,n.fillRect(0,0,e,1),n.fillStyle="#0a0a18",n.fillRect(0,l,e,o),n.fillStyle=s.win2,n.globalAlpha=.55,n.fillRect(2,l+1,e-4,o-3),n.globalAlpha=1;for(let u=2;u<e-2;u+=5)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(u,l+1,1,o-3)}else if(r===2){for(let u=a;u<l-7;u+=7){n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,u+7-1,e,1);for(let h=2;h<e-4;h+=5+(Math.random()*3|0)){let f=Math.random()<.34;n.fillStyle=f?Math.random()<.7?s.win:Math.random()<.85?"#aef2ff":s.acc:"rgba(0,0,0,0.55)",n.fillRect(h,u+2,2+(Math.random()*2|0),3+(Math.random()*2|0)),Math.random()<.16&&(n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(h,u+7-3,4,2)),Math.random()<.05&&(n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.fillRect(h+1,u+1,1,1))}}n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(0,0,e,a),n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let u=1;u<e-3;){let h=3+(Math.random()*6|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.8,n.fillRect(u,l+2,Math.min(h,e-u-2),o-4),n.globalAlpha=1,u+=h+1+(Math.random()*3|0)}}else if(r===3){n.fillStyle="rgba(255,255,255,0.03)";for(let c=0;c<t;c+=24)n.fillRect(0,c,e,12);for(let c=0;c<3;c++){let u=4+Math.random()*(e-8)|0;n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(u,0,2,t),n.fillStyle="rgba(255,255,255,0.08)",n.fillRect(u+2,0,1,t)}for(let c=a+6;c<l-10;c+=26){let u=4+Math.random()*Math.max(4,e-20)|0;for(let h=0;h<4;h++)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(u,c+h*3,12,2)}for(let c=a+14;c<l-8;c+=34)if(Math.random()<.7){let u=3+Math.random()*Math.max(4,e-12)|0;n.fillStyle=Math.random()<.6?s.win2:s.win,n.globalAlpha=.8,n.fillRect(u,c,7,5),n.globalAlpha=1}n.fillStyle="#0a0808",n.fillRect(0,l,e,o);for(let c=0;c<e;c+=6)n.fillStyle=c/6%2?"#e6c02a":"#141414",n.fillRect(c,l+o-4,6,3);n.fillStyle="#ff2b4c",n.globalAlpha=.8;for(let c=a+8;c<l;c+=40)n.fillRect(e-4,c,2,2);n.globalAlpha=1}else if(r===4){for(let d=a;d<l-8;d+=8){n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,d+8-1,e,1);for(let p=2;p<e-4;p+=4)Math.random()<.18&&(n.fillStyle=s.win,n.fillRect(p,d+2,3,4))}let u=t*.22|0,h=t*.4|0,f=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0];if(n.fillStyle="#0b0518",n.fillRect(1,u,e-2,h),n.strokeStyle=f,n.lineWidth=1,n.strokeRect(1.5,u+.5,e-3,h-1),Math.random()<.5){n.fillStyle="#ff9a3c",n.beginPath(),n.arc(e/2,u+h*.42,Math.min(e,h)*.3,0,7),n.fill(),n.fillStyle="#0b0518";for(let d=0;d<4;d++)n.fillRect(2,u+h*.42+d*4,e-4,2);n.fillStyle=f,n.font="8px monospace",n.textBaseline="top",n.fillText(_i[Math.random()*_i.length|0],3,u+h-11)}else for(let d=u+4;d<u+h-8;d+=9)for(let p=4;p<e-8;p+=8)Math.random()<.75&&(n.fillStyle=Math.random()<.6?f:"#ffd24a",n.fillRect(p,d,5,5),Math.random()<.5&&n.fillRect(p+2,d+5,2,2));n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let d=1;d<e-3;){let p=4+(Math.random()*8|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.75,n.fillRect(d,l+2,Math.min(p,e-d-2),o-4),n.globalAlpha=1,d+=p+2+(Math.random()*4|0)}}else if(r===6){n.fillStyle="#070b18",n.fillRect(0,0,e,t),n.globalAlpha=.3,n.strokeStyle="#2af0ff",n.lineWidth=1;for(let c=0;c<t;c+=8)n.beginPath(),n.moveTo(0,c+.5),n.lineTo(e,c+.5),n.stroke();for(let c=0;c<e;c+=8)n.beginPath(),n.moveTo(c+.5,0),n.lineTo(c+.5,t),n.stroke();n.globalAlpha=1;for(let c=0;c<t/12;c++){let u=(Math.random()*(e/8)|0)*8+1,h=(Math.random()*(t/8)|0)*8+1;n.fillStyle=Math.random()<.7?"#2af0ff":"#ff2bd6",n.globalAlpha=.45+Math.random()*.45,n.fillRect(u,h,6,6),n.globalAlpha=1}n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let c=1;c<e-3;){let u=4+(Math.random()*7|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.75,n.fillRect(c,l+2,Math.min(u,e-c-2),o-4),n.globalAlpha=1,c+=u+2+(Math.random()*4|0)}}else if(r===7){n.fillStyle="#05060e",n.fillRect(0,0,e,t);for(let h=0;h<e;h+=4)n.fillStyle="rgba(255,255,255,0.025)",n.fillRect(h,0,1,t);n.fillStyle=s.acc,n.globalAlpha=.8,n.fillRect(e*.5|0,a,1,t-a-o),n.globalAlpha=1;let c=t*.2|0,u=Math.max(6,Math.min(e*.28,20))|0;n.strokeStyle=s.acc,n.lineWidth=2,n.beginPath(),n.arc(e/2,c,u,0,7),n.stroke(),Math.random()<.5&&(n.fillStyle=s.acc,n.globalAlpha=.7,n.fillRect(e/2-u*.4,c-1.5,u*.8,3),n.globalAlpha=1);for(let h=a;h<l;h+=10)Math.random()<.14&&(n.fillStyle=s.win2,n.globalAlpha=.45,n.fillRect(2,h,e-4,1),n.globalAlpha=1);n.fillStyle="#04040a",n.fillRect(0,l,e,o),n.fillStyle=s.acc,n.globalAlpha=.8,n.fillRect(e/2-2,l+2,4,o-4),n.globalAlpha=1}else if(r===8){for(let c=a;c<l;c+=3)n.fillStyle=(c/3|0)%2?"#ffd24a":"#ff2bd6",n.fillRect(1,c,2,2),n.fillRect(e-3,c,2,2);for(let c=a+6;c<l-14;c+=18+(Math.random()*10|0)){let u=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.random()*4|0];n.fillStyle="#0a0512",n.fillRect(4,c,e-8,10),n.strokeStyle=u,n.lineWidth=1,n.strokeRect(4.5,c+.5,e-9,9),n.fillStyle=u,n.font="8px monospace",n.textBaseline="top",n.fillText(_i[Math.random()*_i.length|0],7,c+1),n.fillStyle="rgba(0,0,0,0.55)";for(let h=c+12;h<Math.min(c+17,l-2);h+=5)for(let f=4;f<e-6;f+=4)n.fillRect(f,h,3,3)}n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let c=1;c<e-3;){let u=3+(Math.random()*6|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.85,n.fillRect(c,l+2,Math.min(u,e-c-2),o-4),n.globalAlpha=1,c+=u+1+(Math.random()*3|0)}}else if(r===9){n.fillStyle="#0a0616",n.fillRect(0,0,e,t);let c=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0],u=Math.random()*3|0;if(u===0){n.fillStyle="#1a1030",n.fillRect(2,2,e-4,t-4);let h=t*.4;n.fillStyle="#ffd8c0",n.fillRect(e*.25,h-t*.12,e*.5,t*.24),n.fillStyle="#141024",n.fillRect(e*.2,h-t*.18,e*.6,t*.08),n.fillRect(e*.2,h-t*.16,e*.12,t*.2),n.fillRect(e*.68,h-t*.16,e*.12,t*.2),n.fillStyle="#ff2b4c",n.beginPath(),n.arc(e*.5,h+t*.02,e*.05,0,7),n.fill(),n.fillStyle="#141024",n.fillRect(e*.34,h-t*.02,e*.08,2),n.fillRect(e*.58,h-t*.02,e*.08,2),n.fillStyle=c,n.font="8px monospace",n.textBaseline="top",n.fillText(_i[Math.random()*_i.length|0],4,t*.72|0)}else if(u===1){n.fillStyle="#101a3a",n.fillRect(2,2,e-4,t-4);let h=t*.38,f=e*.18;n.fillStyle="#e8f0ff",n.beginPath(),n.ellipse(e/2,h,e*.32,f,0,0,7),n.fill(),n.fillStyle=c,n.beginPath(),n.arc(e/2,h,f*.6,0,7),n.fill(),n.fillStyle="#08060e",n.beginPath(),n.arc(e/2,h,f*.28,0,7),n.fill()}else{for(let h=4;h<t-4;h+=5){n.fillStyle=Math.random()<.5?c:"#7b3ff2",n.globalAlpha=.4+Math.random()*.5;let f=Math.sin(h*.15)*e*.2+e*.3|0;n.fillRect(4,h,f+(e*.2|0),2)}n.globalAlpha=1}n.fillStyle="rgba(0,0,0,0.35)";for(let h=2;h<t;h+=3)n.fillRect(2,h,e-4,1);n.strokeStyle=c,n.lineWidth=1,n.strokeRect(1.5,1.5,e-3,t-3),n.fillStyle="#05030c",n.fillRect(0,l,e,o)}else if(r===10){n.fillStyle="#141230",n.fillRect(0,0,e,t);for(let f=0;f<t;f+=14+(Math.random()*10|0))for(let d=0;d<e;d+=12+(Math.random()*12|0))n.fillStyle="rgba(255,255,255,"+(.02+Math.random()*.04).toFixed(3)+")",n.fillRect(d,f,10+(Math.random()*12|0),12+(Math.random()*10|0));let c="#2ab4ff",u="#ff2bd6",h=(f,d)=>{n.strokeStyle=d,n.lineWidth=1.5,n.globalAlpha=.95,n.beginPath();let p=2+Math.random()*8;for(n.moveTo(f+.5,p);p<t-10;){let g=14+Math.random()*30;if(p=Math.min(t-6,p+g),n.lineTo(f+.5,p),Math.random()<.55){let y=(Math.random()<.5?-1:1)*(4+Math.random()*10)|0;f=Math.max(3,Math.min(e-3,f+y)),n.lineTo(f+.5,p)}}n.stroke(),n.globalAlpha=1};h(3+Math.random()*e*.25|0,c),h(6+Math.random()*e*.2|0,c),h(e-4-Math.random()*e*.25|0,u),h(e-8-Math.random()*e*.2|0,u);for(let f=0;f<3;f++){let d=3+Math.random()*(e-10)|0;n.fillStyle="#0d0b22",n.fillRect(d,4,3,t-8),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(d+2,4,1,t-8)}if(e>30){let f=4+Math.random()*(e-26)|0,d=t*.3+Math.random()*t*.3|0;n.fillStyle="#0c0a20",n.fillRect(f,d,22,22),n.fillStyle="#050410";for(let p of[[5,5],[16,5],[5,16],[16,16]])n.beginPath(),n.arc(f+p[0],d+p[1],4,0,7),n.fill()}{let f=4+Math.random()*Math.max(6,e-20)|0,d=t*.15+Math.random()*t*.5|0;for(let p=0;p<5;p++)n.fillStyle="#080618",n.fillRect(f,d+p*3,16,2)}for(let f=0;f<3+(t/90|0);f++){let d=4+Math.random()*Math.max(6,e-20)|0,p=6+Math.random()*Math.max(10,t-30)|0;n.fillStyle="#0a0816",n.fillRect(d-1,p-1,14,7);for(let g=0;g<3;g++)n.fillStyle=Math.random()<.85?"#ffb742":"#3a2c14",n.fillRect(d+g*4,p,3,5)}for(let f=0;f<8;f++)n.fillStyle=Math.random()<.5?c:u,n.globalAlpha=.9,n.fillRect(3+Math.random()*(e-6)|0,3+Math.random()*(t-8)|0,2,1),n.globalAlpha=1;n.fillStyle="#0a0a1a",n.fillRect(e*.25,l-2,e*.5,o+2);for(let f=l+1;f<t-3;f+=3)n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(e*.27,f,e*.46,1);for(let f=0;f<e;f+=6)n.fillStyle=(f/6|0)%2?"#e6c02a":"#141414",n.fillRect(f,t-3,6,2)}else{let c=0,u=["rgba(255,255,255,0.05)","rgba(0,0,0,0.22)","rgba(122,63,242,0.10)","rgba(255,154,60,0.07)","rgba(42,240,255,0.06)"];for(;c<t;){let h=Math.min(t-c,40+(Math.random()*90|0));n.fillStyle=u[Math.random()*u.length|0],n.fillRect(0,c,e,h);let f=6+(Math.random()*3|0),d=3+(Math.random()*2|0),p=.2+Math.random()*.35;for(let g=c+3;g<c+h-f;g+=f)for(let y=2;y<e-4;y+=d+2)n.fillStyle=Math.random()<p?Math.random()<.75?s.win:s.win2:"rgba(0,0,0,0.5)",n.fillRect(y,g,d,f-3);n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(0,c+h-1,e,1),c+=h}n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let h=1;h<e-3;){let f=3+(Math.random()*7|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.8,n.fillRect(h,l+2,Math.min(f,e-h-2),o-4),n.globalAlpha=1,h+=f+1+(Math.random()*4|0)}}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,0,1,t),n.fillRect(e-1,0,1,t)}function yE(n,e,t,s,r){let o=Math.min(16,t*.08|0)+6,a=t-o,l=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e","#9a6aff"],c=l[Math.random()*l.length|0],u=()=>{n.fillStyle="#05030c",n.fillRect(0,a,e,o);for(let h=1;h<e-3;){let f=4+(Math.random()*7|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.8,n.fillRect(h,a+2,Math.min(f,e-h-2),o-4),n.globalAlpha=1,h+=f+2+(Math.random()*3|0)}};if(n.fillStyle=s.base,n.fillRect(0,0,e,t),r===11){for(let h=4,f=0;h<a-6;h+=7,f^=1)for(let d=2+f*4;d<e-6;d+=8){let p=Math.random()<.2;n.fillStyle=p?c:"rgba(0,0,0,0.45)",n.globalAlpha=p?.85:1,n.beginPath(),n.moveTo(d+3,h),n.lineTo(d+6,h+2),n.lineTo(d+6,h+5),n.lineTo(d+3,h+7),n.lineTo(d,h+5),n.lineTo(d,h+2),n.closePath(),n.fill(),n.globalAlpha=1}u()}else if(r===12){n.fillStyle="#040a08",n.fillRect(0,0,e,t);for(let h=3;h<e-2;h+=5){let f=Math.random()*t|0,d=t*.2+Math.random()*t*.4|0;for(let p=0;p<d;p+=4){let g=(f+p)%t;n.fillStyle=p<8?"#d8ffe8":"#3adc7a",n.globalAlpha=Math.max(.15,1-p/d),n.fillRect(h,g,2,3)}n.globalAlpha=1}u()}else if(r===13){n.fillStyle="#1c1a22",n.fillRect(0,0,e,t);for(let h=4;h<a-10;h+=12)for(let f=3;f<e-8;f+=10)n.fillStyle="#0a090f",n.fillRect(f,h,8,9),n.fillStyle="#26232e",n.fillRect(f,h,8,1),n.fillRect(f,h,1,9),Math.random()<.22&&(n.fillStyle="#ffd24a",n.globalAlpha=.75,n.fillRect(f+2,h+3,3,3),n.globalAlpha=1);n.fillStyle="rgba(0,0,0,0.3)";for(let h=0;h<5;h++)n.fillRect(Math.random()*e|0,0,2,t);u()}else if(r===14){for(let h=2;h<a-2;h+=4)n.fillStyle="#0c0a18",n.fillRect(1,h,e-2,3),Math.random()<.3&&(n.fillStyle=Math.random()<.6?"#ffb046":c,n.globalAlpha=.5,n.fillRect(1,h+3,e-2,1),n.globalAlpha=1);u()}else if(r===15){n.fillStyle="#08060e",n.fillRect(0,0,e,t);for(let h=3;h<a-8;h+=9)for(let f=2;f<e-8;f+=10){let d=l[Math.random()*l.length|0];n.fillStyle="#020204",n.fillRect(f,h,9,7),n.fillStyle=d,n.globalAlpha=.25+Math.random()*.6,n.fillRect(f+1,h+1,7,5),n.globalAlpha=1,Math.random()<.4&&(n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(f+1,h+1+(Math.random()*4|0),7,1))}u()}else if(r===16){for(let h=0,f=0;h<a;h+=9,f^=1)for(let d=-6;d<e;d+=12){let p=Math.random();n.fillStyle=p<.12?c:p<.5?"#141126":"#0d0b1c",n.globalAlpha=p<.12?.6:1,n.beginPath(),(f^d/12&1)%2?(n.moveTo(d+f*6,h),n.lineTo(d+12+f*6,h),n.lineTo(d+6+f*6,h+9)):(n.moveTo(d+6+f*6,h),n.lineTo(d+12+f*6,h+9),n.lineTo(d+f*6,h+9)),n.closePath(),n.fill(),n.globalAlpha=1}n.strokeStyle="rgba(255,255,255,0.08)";for(let h=0;h<a;h+=9)n.beginPath(),n.moveTo(0,h+.5),n.lineTo(e,h+.5),n.stroke();u()}else if(r===17){for(let h=6;h<a-14;h+=16){n.fillStyle="#221018",n.fillRect(0,h,e,3),n.fillStyle="#160a10",n.fillRect(2,h+3,e-4,10);for(let f=4;f<e-4;f+=6)Math.random()<.55&&(n.fillStyle="#ffb046",n.globalAlpha=.85,n.fillRect(f,h+6,3,4),n.globalAlpha=1);n.fillStyle="#ff5a3c",n.globalAlpha=.9;for(let f=3;f<e-3;f+=10)n.fillRect(f,h+2,2,2);n.globalAlpha=1}u()}else if(r===18){n.fillStyle="#0e0a16",n.fillRect(0,0,e,t);let h=14+(Math.random()*10|0);for(let f=0;f<h;f++){let d=Math.random()*(e-10)|0,p=Math.random()*(a-12)|0,g=6+Math.random()*10|0,y=5+Math.random()*9|0,_=l[Math.random()*l.length|0];n.fillStyle="#0a0512",n.fillRect(d-1,p-1,g+2,y+2),n.fillStyle=_,n.globalAlpha=.55+Math.random()*.35,n.fillRect(d,p,g,y),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.5)";for(let m=p+2;m<p+y-1;m+=3)n.fillRect(d+1,m,g-2,1)}u()}else if(r===19){n.fillStyle="#100d18",n.fillRect(0,0,e,t);let h=Math.max(4,e*.16|0),f=e-h>>1;n.fillStyle=c,n.globalAlpha=.9,n.fillRect(f,4,h,a-8),n.globalAlpha=1,n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(f+(h/2|0),4,1,a-8);for(let d=8;d<a-6;d+=14)n.fillStyle="#080612",n.fillRect(f-2,d,h+4,2);for(let d=6;d<a-8;d+=18)n.fillStyle="#e6c02a",n.globalAlpha=.5,n.fillRect(3,d,4,2),n.fillRect(5,d+2,4,2),n.fillRect(e-7,d,4,2),n.fillRect(e-9,d+2,4,2),n.globalAlpha=1;u()}else if(r===20){n.fillStyle="#141018",n.fillRect(0,0,e,t);for(let h=3;h<e-2;h+=6)n.fillStyle=h/6%3===0?"#c8a24a":"#3a2f22",n.globalAlpha=h/6%3===0?.8:1,n.fillRect(h,6,2,a-10),n.globalAlpha=1;for(let h=10;h<a-6;h+=24)n.fillStyle="#c8a24a",n.globalAlpha=.4,n.fillRect(2,h,e-4,1),n.globalAlpha=1;n.fillStyle="#ffd24a",n.globalAlpha=.85;for(let h=5;h<e-4;h+=12)Math.random()<.5&&n.fillRect(h,8+Math.random()*(a-20)|0,2,4);n.globalAlpha=1,u()}else if(r===21){n.fillStyle="#0a0812",n.fillRect(0,0,e,t);for(let h=4;h<a;h+=8)for(let f=3;f<e-4;f+=5)Math.random()<.25&&(n.fillStyle="#ffcf5e",n.globalAlpha=.6,n.fillRect(f,h+2,3,3),n.globalAlpha=1);n.strokeStyle="#2a2438",n.lineWidth=1;for(let h=1;h<e;h+=6)n.beginPath(),n.moveTo(h+.5,0),n.lineTo(h+.5,a),n.stroke();for(let h=1;h<a;h+=6)n.beginPath(),n.moveTo(0,h+.5),n.lineTo(e,h+.5),n.stroke();u()}else if(r===22){n.fillStyle="#12101e",n.fillRect(0,0,e,t);for(let h=6;h<a-4;h+=7)for(let f=5;f<e-4;f+=7){let d=Math.random()<.4;n.fillStyle=d?Math.random()<.8?"#ffd24a":"#7adcff":"#060410",n.globalAlpha=d?.9:1,n.beginPath(),n.arc(f,h,2.2,0,7),n.fill(),n.globalAlpha=1}u()}else if(r===23){n.fillStyle="#0c1018",n.fillRect(0,0,e,t);for(let h=4;h<a-8;h+=10)for(let f=2;f<e-10;f+=11)n.fillStyle="#0a1c33",n.beginPath(),n.moveTo(f,h+7),n.lineTo(f+9,h+5),n.lineTo(f+9,h),n.lineTo(f,h+2),n.closePath(),n.fill(),n.strokeStyle="rgba(120,190,255,0.35)",n.stroke(),Math.random()<.08&&(n.fillStyle="#04070c",n.fillRect(f+2,h+1,5,4));u()}else if(r===24){n.fillStyle="#100e16",n.fillRect(0,0,e,t);for(let h=4;h<a-6;h+=8)for(let f=3;f<e-5;f+=6){let d=Math.random();n.fillStyle=d<.1?"#ffcf5e":d<.35?"#04030a":"#0a0814",n.globalAlpha=d<.1?.8:1,n.fillRect(f,h,4,5),n.globalAlpha=1,d>=.1&&d<.2&&(n.fillStyle="#1c1826",n.beginPath(),n.moveTo(f,h),n.lineTo(f+4,h+5),n.stroke())}for(let h=0;h<3;h++){let f=l[Math.random()*l.length|0],d=a*.2+Math.random()*a*.6|0;n.strokeStyle=f,n.lineWidth=2,n.globalAlpha=.85,n.beginPath();let p=2+Math.random()*e*.3|0;n.moveTo(p,d);for(let g=0;g<4;g++)p+=4+Math.random()*8,n.lineTo(p,d+(Math.random()-.5)*8|0);n.stroke(),n.globalAlpha=1,n.lineWidth=1}u()}else if(r===25){n.fillStyle="#062a30",n.fillRect(0,0,e,t);let h=n.createLinearGradient(0,0,0,t);h.addColorStop(0,"rgba(20,220,210,0.25)"),h.addColorStop(1,"rgba(10,90,110,0.4)"),n.fillStyle=h,n.fillRect(0,0,e,t);for(let f=8;f<a;f+=9){n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(0,f,e,2);for(let d=0;d<3;d++)Math.random()<.5&&(n.fillStyle="rgba(0,0,0,0.55)",n.fillRect(Math.random()*(e-8)|0,f-5,3+Math.random()*6|0,4))}n.fillStyle="rgba(255,255,255,0.25)";for(let f=0;f<10;f++)n.fillRect(Math.random()*e|0,Math.random()*a|0,1,1);u()}else if(r===26){n.fillStyle="#12101c",n.fillRect(0,0,e,t);for(let h=8;h<a-10;h+=13)for(let f=7;f<e-6;f+=13)n.fillStyle="#0a0814",n.fillRect(f-6,h-6,12,12),n.fillStyle="#050308",n.beginPath(),n.arc(f,h,4.5,0,7),n.fill(),n.strokeStyle="#221e30",n.beginPath(),n.moveTo(f-4,h),n.lineTo(f+4,h),n.moveTo(f,h-4),n.lineTo(f,h+4),n.stroke(),Math.random()<.15&&(n.fillStyle=c,n.globalAlpha=.7,n.fillRect(f-5,h+4,10,1),n.globalAlpha=1);u()}else if(r===27){n.fillStyle="#100d1a",n.fillRect(0,0,e,t);for(let h=6;h<a-6;h+=9)for(let f=4;f<e-6;f+=7)Math.random()<.3&&(n.fillStyle="#ffcf5e",n.globalAlpha=.55,n.fillRect(f,h,3,4),n.globalAlpha=1);n.strokeStyle="#060410",n.lineWidth=1.5;for(let h=0;h<7;h++){let f=Math.random()*a*.8|0,d=4+Math.random()*8;n.beginPath(),n.moveTo(0,f),n.quadraticCurveTo(e/2,f+d,e,f+(Math.random()-.5)*8|0),n.stroke()}for(let h=0;h<4;h++){let f=Math.random()*(e-8)|0,d=Math.random()*(a-10)|0;n.fillStyle="#1a1626",n.fillRect(f,d,6,8),n.fillStyle=Math.random()<.5?"#ff2b4c":"#2af0ff",n.fillRect(f+2,d+2,2,1)}u()}else if(r===28){n.fillStyle="#0a0814",n.fillRect(0,0,e,t);let h=Math.max(8,e*.4|0),f=e-h>>1;n.fillStyle="#050208",n.fillRect(f-1,3,h+2,a-6);for(let d=5;d<a-8;d+=8){let p=l[Math.random()*l.length|0];n.fillStyle=p,n.globalAlpha=.55+Math.random()*.35,n.fillRect(f,d,h,6),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(f,d+2,h,1)}n.strokeStyle=c,n.strokeRect(f-1.5,2.5,h+3,a-5),u()}else if(r===29){n.fillStyle="#070a0c",n.fillRect(0,0,e,t);for(let h=2;h<e-1;h+=3){let f=Math.random()<.7?"#4ef0b0":l[Math.random()*l.length|0];n.fillStyle=f,n.globalAlpha=.25+Math.random()*.55;let d=Math.random()*10|0,p=a-(Math.random()*10|0);n.fillRect(h,d,1,p-d),n.globalAlpha=1;for(let g=d+6;g<p;g+=8+(Math.random()*8|0))n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(h,g,1,2)}u()}else{n.fillStyle="#141118",n.fillRect(0,0,e,t);for(let h=-e;h<a+e;h+=14)n.fillStyle=(h/14|0)%2?"#1c1822":"#0e0b12",n.beginPath(),n.moveTo(0,h),n.lineTo(e,h-e*.4),n.lineTo(e,h-e*.4+8),n.lineTo(0,h+8),n.closePath(),n.fill();n.fillStyle=c,n.globalAlpha=.8;for(let h=10;h<a-6;h+=26)n.fillRect(2,h,e-4,2);n.globalAlpha=1;for(let h=0;h<2;h++){let f=4+Math.random()*(e-24)|0,d=a*.3+Math.random()*a*.4|0;n.fillStyle="#0a0a14",n.fillRect(f,d,16,12);for(let p=d+2;p<d+11;p+=2)n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(f+1,p,14,1)}u()}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,0,1,t),n.fillRect(e-1,0,1,t)}function ym(n,e,t){if(Math.random()<.38){let s=["#4ef0e0","#2af0ff","#c0ff5e","#ff2bd6"][Math.random()*4|0];n.strokeStyle=s,n.fillStyle=s,n.lineWidth=1,n.globalAlpha=.85;let r=2+(Math.random()*4|0);for(let o=0;o<r;o++){let a=4+Math.random()*(e-8)|0,l=0;for(n.beginPath(),n.moveTo(a+.5,0);l<t-8;){let c=8+(Math.random()*30|0);if(l=Math.min(t-4,l+c),n.lineTo(a+.5,l+.5),Math.random()<.5&&l<t-12){let u=(Math.random()<.5?-1:1)*(3+Math.random()*8)|0;a=Math.max(3,Math.min(e-4,a+u)),n.lineTo(a+.5,l+.5)}}n.stroke(),n.fillRect(a-1,l-1,3,3)}n.globalAlpha=1}if(Math.random()<.4){let s=3+(Math.random()*6|0);for(let r=0;r<s;r++){let o=2+Math.random()*Math.max(4,e-12)|0,a=6+Math.random()*Math.max(8,t-24)|0,l=4+Math.random()*8|0,c=3+Math.random()*5|0,u=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.random()*5|0];n.fillStyle="#0a0616",n.fillRect(o-1,a-1,l+2,c+2),n.fillStyle=u,n.globalAlpha=.8,n.fillRect(o,a,l,c),n.globalAlpha=1,n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(o+1,a+1,Math.max(1,l*.4|0),1)}}}function cc(n,e,t,s){let r=_m[Math.floor(Math.random()*_m.length)],o=Math.random(),a=t!==void 0?t:Math.random()<.6?o<.13?0:o<.25?1:o<.39?2:o<.47?3:o<.54?4:o<.6?5:o<.68?6:o<.76?7:o<.84?8:o<.92?9:10:11+(Math.random()*20|0),l=Math.max(24,Math.min(160,Math.round(n*2)))|0,c=Math.max(48,Math.min(1024,Math.round(e*2)))|0,u=Qs(l,c,h=>{if(a!==0){_E(h,l,c,r,a),ym(h,l,c);return}h.fillStyle=r.base,h.fillRect(0,0,l,c);let f=8+(Math.random()*6|0);for(let _=0;_<l;_+=f)h.fillStyle=r.mull,h.fillRect(_,0,1,c);h.fillStyle="rgba(255,255,255,0.03)";for(let _=0;_<l;_+=f*2)h.fillRect(_,0,f,c);let d=8,p=Math.min(16,c*.08|0)+6,g=6+(Math.random()*6|0);for(let _=g;_<c-p-d;_+=d){h.fillStyle=r.slab,h.fillRect(0,_+d-1,l,1);let m=Math.random(),x=-1,M=-1;if(m<.14)x=0,M=l;else if(m<.62){let E=Math.random()*l|0;x=E,M=E+(l*.15+Math.random()*l*.3|0)}for(let E=0;E<l-2;E+=f)for(let I=E+2;I<E+f-1&&I<l-3;I+=4){let R=I>=x&&I<=M&&Math.random()<.9;R?h.fillStyle=Math.random()<.8?r.win:Math.random()<.85?r.win2:r.acc:h.fillStyle="rgba(0,0,0,0.55)",h.fillRect(I,_+2,3,d-4),R&&Math.random()<.35&&(h.fillStyle="rgba(255,255,255,0.55)",h.fillRect(I+1,_+3,1,1))}}h.fillStyle="rgba(0,0,0,0.5)",h.fillRect(0,0,l,g),Math.random()<.6&&(h.fillStyle=r.acc,h.fillRect(0,0,l,1));let y=c-p;h.fillStyle="#05030c",h.fillRect(0,y,l,p);for(let _=1;_<l-3;){let m=4+(Math.random()*9|0);h.fillStyle=r.shop[Math.random()*r.shop.length|0],h.globalAlpha=.75,h.fillRect(_,y+2,Math.min(m,l-_-2),p-4),h.globalAlpha=1,_+=m+2+(Math.random()*4|0)}h.fillStyle="rgba(255,240,200,0.5)",h.fillRect(0,y,l,1),h.fillStyle="rgba(0,0,0,0.4)",h.fillRect(0,0,1,c),h.fillRect(l-1,0,1,c),ym(h,l,c)});return u.wrapS=u.wrapT=_n,s&&s>1&&(u.wrapS=jn,u.repeat.x=s),u.minFilter=Yi,u.generateMipmaps=!0,u.anisotropy=na,new ae({map:u})}var hc=new Ir().load("models/facades/cyberpunk_facade_asset/symmetrical_neon_cyberpunk_tower.png");hc.colorSpace=ct;hc.anisotropy=na;var ia=hc.clone();ia.wrapS=jn;ia.repeat.x=-1;ia.offset.x=1;ia.needsUpdate=!0;var Xu=[];for(let n of[hc,ia])for(let e of[16777215,16767176,13165823,15780095])Xu.push(new ae({map:n,color:e}));var uf=["01_neon_cyberpunk_tower_facade","02_neon_cyberpunk_hotel_facade","03_neon_pixel_art_skyscraper_facade","04_neon_split_industrial_facade","05_neon_symmetry_cyberpunk_building_facade","06_neon_dataflow_tower_facade","07_neon_dream_cyberpunk_hotel_skyscraper","08_neon_cyberpunk_megastructure_facade","09_nexus_cyberpunk_megastructure_facade","10_cyberpunk_core_tower_tx_09","11_neon_datacore_cyberpunk_server_citywall","12_neo_terminal_cyberpunk_market_facade","13_neon_megablock_city_facade","14_nova_civic_systems_megastructure"],Ws=4,qu=4,Yu=512,Ku=1536,Zr=document.createElement("canvas");Zr.width=Ws*Yu;Zr.height=qu*Ku;var ff=Zr.getContext("2d");ff.fillStyle="#0a0820";ff.fillRect(0,0,Zr.width,Zr.height);var jr=new zn(Zr);jr.colorSpace=ct;jr.minFilter=Yi;jr.generateMipmaps=!0;jr.anisotropy=na;var fs=new ae({map:jr});uf.forEach((n,e)=>{let t=new Image;t.onload=()=>{ff.drawImage(t,e%Ws*Yu,(e/Ws|0)*Ku,Yu,Ku),jr.needsUpdate=!0},t.src="models/facades/cyberpunk_facades_all/"+n+".png"});var df=0;function Nm(n,e,t){let s=e%Ws/Ws,r=1-((e/Ws|0)+1)/qu,o=1/Ws,a=1/qu,l=n.attributes.uv;for(let c=0;c<l.count;c++){let u=l.getX(c);t&&(u=1-u),l.setXY(c,s+u*o,r+l.getY(c)*a)}l.needsUpdate=!0}var _i=["PUNK","VICE","TURBO","NEON","BUST","RUN","MAXX","GRID"];function ME(){let n=Math.floor(Math.random()*3);return Qs(48,24,e=>{let t=["#12062a","#1a0630","#08102a"][Math.floor(Math.random()*3)];e.fillStyle=t,e.fillRect(0,0,48,24);let s=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.floor(Math.random()*4)];if(n===0){e.fillStyle="#ff9a3c",e.beginPath(),e.arc(14,12,8,0,7),e.fill(),e.fillStyle=t;for(let r=0;r<3;r++)e.fillRect(4,13+r*3,20,1);e.fillStyle=s,e.fillRect(30,6,2,14);for(let r of[[-6,-2],[-4,-4],[0,-5],[4,-4],[6,-2]])e.fillRect(31+r[0],6+r[1],4,1)}else if(n===1)e.fillStyle=s,e.font="8px monospace",e.textBaseline="top",e.fillText(_i[Math.floor(Math.random()*_i.length)],4,3),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(0,13,48,1),e.fillStyle="#ffd24a",e.fillText(_i[Math.floor(Math.random()*_i.length)],12,14);else for(let r=4;r<44;r+=7){e.fillStyle=Math.random()<.5?s:"#ffd24a";for(let o=3;o<21;o+=5)Math.random()<.8&&(e.fillRect(r,o,4,3),Math.random()<.5&&e.fillRect(r+1,o+3,2,1))}e.strokeStyle=s,e.lineWidth=1,e.strokeRect(.5,.5,47,23)})}var Zo=[];for(let n=0;n<24;n++)Zo.push(new ae({map:ME(),transparent:!0,opacity:.92,side:Mt,depthWrite:!1}));function pf(n,e){return new $(new Ie(n,e),Zo[Math.random()*Zo.length|0])}function xE(){return Qs(8,48,n=>{n.fillStyle="#0c0620",n.fillRect(0,0,8,48);let e=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.floor(Math.random()*5)];n.strokeStyle=e,n.strokeRect(.5,.5,7,47),n.fillStyle=e;for(let t=3;t<45;t+=6)Math.random()<.85&&(n.fillRect(2,t,4,3),Math.random()<.5&&(n.fillStyle="#ffffff",n.fillRect(3,t+1,1,1),n.fillStyle=e))})}var $o=[];for(let n=0;n<16;n++)$o.push(new ae({map:xE(),transparent:!0,side:Mt,depthWrite:!1}));var Bu={};function Nn(n,e){let t=n+"_"+e;return Bu[t]||(Bu[t]=new ae({color:n,transparent:!0,opacity:e,side:Mt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})),Bu[t]}var Wo=new ae({color:16722764}),Ou=new ae({color:2758726}),Um=new ae({color:16722748}),Us=[];for(let n=0;n<64;n++)Us.push(cc(26+Math.random()*22,80+Math.random()*280));var je=[];for(let n=0;n<16;n++)je.push(cc(30,90+Math.random()*260,void 0,3));var Zu=[];for(let n=0;n<12;n++)Zu.push(cc(90,500+Math.random()*400,[1,0,4,15,28,19][n%6]));var Fu=new Pe,Dl=new Pe;function vE(n,e,t){let s=n.index.array,r=n.attributes.position,o=n.attributes.uv,a=n.attributes.normal,l=new Float32Array(t*3),c=o?new Float32Array(t*2):null,u=a?new Float32Array(t*3):null;for(let f=0;f<t;f++){let d=s[e+f];l[f*3]=r.getX(d),l[f*3+1]=r.getY(d),l[f*3+2]=r.getZ(d),c&&(c[f*2]=o.getX(d),c[f*2+1]=o.getY(d)),u&&(u[f*3]=a.getX(d),u[f*3+1]=a.getY(d),u[f*3+2]=a.getZ(d))}let h=new pt;return h.setAttribute("position",new xt(l,3)),c&&h.setAttribute("uv",new xt(c,2)),u&&h.setAttribute("normal",new xt(u,3)),h}function sa(n){n.updateMatrixWorld(!0),Fu.copy(n.matrixWorld).invert();let e=new Map,t=new Map,s=new Map,r=[];n.traverse(l=>{if(l===n||!l.geometry||!l.geometry.isBufferGeometry)return;if(l.isMesh&&Array.isArray(l.material)){if(!l.geometry.index||!l.geometry.groups||!l.geometry.groups.length)return;Dl.multiplyMatrices(Fu,l.matrixWorld);for(let h of l.geometry.groups){let f=l.material[h.materialIndex];if(!f)continue;let d=s.get(f);d||(d={geos:[],srcs:[]},s.set(f,d)),d.geos.push(vE(l.geometry,h.start,h.count).applyMatrix4(Dl)),d.srcs.push(l)}r.push(l);return}let c=l.isMesh?e:l.isLineSegments?t:null;if(!c)return;let u=c.get(l.material);u||(u={geos:[],origs:[]},c.set(l.material,u)),Dl.multiplyMatrices(Fu,l.matrixWorld),u.geos.push(l.geometry.clone().applyMatrix4(Dl)),u.origs.push(l)});let o=(l,c)=>{for(let[u,h]of l){if(h.origs.length<2){h.geos.forEach(d=>d.dispose());continue}let f=xn(h.geos);if(!f){h.geos.forEach(d=>d.dispose());continue}for(let d of h.origs)d.parent&&d.parent.remove(d);h.geos.forEach(d=>d.dispose()),n.add(new c(f,u))}};o(e,$),o(t,kt);let a=new Set;for(let[l,c]of s){let u=c.geos.length>1?xn(c.geos):c.geos[0];if(u)n.add(new $(u,l)),c.geos.length>1&&c.geos.forEach(h=>h.dispose());else{c.geos.forEach(h=>h.dispose());for(let h of c.srcs)a.add(h)}}for(let l of r)!a.has(l)&&l.parent&&l.parent.remove(l);return n.traverse(l=>{l!==n&&(l.matrixAutoUpdate=!1,l.updateMatrix())}),n}var Qr=Qs(32,64,n=>{n.fillStyle="#160a2e",n.fillRect(0,0,32,64),n.fillStyle="rgba(255,255,255,0.04)";for(let e=0;e<120;e++)n.fillRect(Math.random()*32|0,Math.random()*64|0,1,1);n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,0,2,64),n.fillRect(30,0,2,64),n.fillStyle="rgba(122,63,242,0.25)",n.fillRect(4,0,1,64),n.fillRect(27,0,1,64)});Qr.repeat.set(1,60);var mf=new $(new Ie(74,9e3),new ae({map:Qr}));mf.rotation.x=-Math.PI/2;mf.position.set(0,-29.6,-1500);ke.add(mf);function Bm(n,e){let t=new $(new $e(1.4,.2,9e3),new ae({color:e}));return t.position.set(n,-29,-1500),t}ke.add(Bm(-36,Jt));ke.add(Bm(36,Jt));function EE(){let n=document.createElement("canvas");n.width=16,n.height=256;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,256);return t.addColorStop(0,"rgba(255,170,70,0.38)"),t.addColorStop(.35,"rgba(255,110,120,0.2)"),t.addColorStop(.7,"rgba(255,70,150,0.07)"),t.addColorStop(1,"rgba(255,60,160,0)"),e.fillStyle=t,e.fillRect(0,0,16,256),new zn(n)}var uc=new $(new Ie(46,1500),new ae({map:EE(),transparent:!0,opacity:.6,blending:Et,depthWrite:!1}));uc.rotation.x=-Math.PI/2;uc.position.set(0,-29.2,-820);ke.add(uc);var gf=[];for(let n=0;n<70;n++){let e=new $e(1.8,.2,16);e.translate(0,-29,-n*46),gf.push(e)}var Kl=new $(xn(gf),new ae({color:dE}));gf.forEach(n=>n.dispose());ke.add(Kl);var eo=Qs(128,128,n=>{n.fillStyle="#0c0618",n.fillRect(0,0,128,128),n.fillStyle="#140a24",n.fillRect(0,0,128,18),n.fillRect(0,0,18,128),n.fillStyle="#22123a",n.fillRect(0,18,128,2),n.fillRect(18,0,2,128),n.fillStyle="#1a0e2c";for(let e=0;e<7;e++){let t=24+Math.random()*90|0,s=24+Math.random()*90|0;n.fillRect(t,s,6+Math.random()*16|0,5+Math.random()*12|0)}n.fillStyle="#3a1f5e";for(let e=0;e<40;e++)n.fillRect(Math.random()*128|0,Math.random()*128|0,1,1);n.globalAlpha=.5,n.fillStyle="#ffd24a";for(let e=6;e<128;e+=14)n.fillRect(e,8,5,1),n.fillRect(8,e,1,5);n.globalAlpha=.25,n.fillStyle="#2af0ff",n.fillRect(0,17,128,1),n.fillRect(17,0,1,128),n.globalAlpha=1});eo.repeat.set(16,16);eo.minFilter=Qn;eo.generateMipmaps=!0;eo.anisotropy=na;Qr.minFilter=Qn;Qr.generateMipmaps=!0;Qr.anisotropy=na;var _f=new $(new Ie(9e3,9e3),new ae({map:eo}));_f.rotation.x=-Math.PI/2;_f.position.set(0,-30.2,-1500);ke.add(_f);var bE=9e3/16,Zl=[],yf=[];for(let n=0;n<66;n++)for(let e of[-1,1]){let t=-n*90,s=e*40,r=new $e(.8,14,.8);r.translate(s,-23,t),Zl.push(r);let o=new $e(5,.7,.7);o.translate(s-e*2.5,-16,t),Zl.push(o);let a=new $e(2.6,.5,1);a.translate(s-e*4,-30+13.6,t),yf.push(a)}var Ol=new $(xn(Zl),new ae({color:1313318}));Zl.forEach(n=>n.dispose());var Om=new $(xn(yf),new ae({color:16757866}));yf.forEach(n=>n.dispose());ke.add(Ol);ke.add(Om);var Fm=[];for(let n=0;n<22;n++){let e=Math.random()<.5,t=new $(new Ie(1.6,10),new ae({color:e?16769184:16722764,transparent:!0,opacity:.7,blending:Et,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.set((Math.random()<.5?-1:1)*(120+Math.random()*160),-29.4,-Math.random()*5800),t.userData.rel=e?1.6+Math.random()*.8:.5+Math.random()*.35,ke.add(t),Fm.push(t)}var Hm=[];for(let n=0;n<26;n++){let e=Math.random()<.5?1:-1,t=new $(new Ie(6,1.2),new ae({color:e>0?16769184:16730714,transparent:!0,opacity:.8,blending:Et,depthWrite:!1,side:Mt}));t.position.set((Math.random()-.5)*2400,160+Math.random()*220,-900-Math.random()*2400),t.userData={vx:e*(1.2+Math.random()*1.4)},ke.add(t),Hm.push(t)}var zm=[];function SE(){let n=document.createElement("canvas");n.width=16,n.height=128;let e=n.getContext("2d"),t=e.createLinearGradient(0,128,0,0);return t.addColorStop(0,"rgba(200,230,255,0.55)"),t.addColorStop(1,"rgba(200,230,255,0)"),e.fillStyle=t,e.fillRect(0,0,16,128),new zn(n)}for(let n=0;n<9;n++){let e=new $(new Ie(9,360).translate(0,180,0),new ae({map:SE(),transparent:!0,opacity:.5,blending:Et,depthWrite:!1,side:Mt,fog:!1}));e.position.set((Math.random()<.5?-1:1)*(70+Math.random()*140),-30,-500-n*650-Math.random()*400),e.userData={ph:Math.random()*6.3,sp:.35+Math.random()*.3,z0:e.position.z},ke.add(e),zm.push(e)}var km=[];{let n=["04_neon_corner_kiosk","13_subway_entrance_pair","14_subway_corner_entrance","15_bus_stop_shelter","16_vending_machine_cluster","17_street_furniture_strip","18_neon_food_cart","19_crosswalk_signal_island"],e=["01_pocket_park_plaza","02_sunset_fountain_plaza","03_arcade_market_stalls","05_service_pipe_cluster","06_utility_tank_stack","11_hovercar_parking_bay","12_glidebooster_landing_pad","20_loading_dock_crates"];setTimeout(()=>{zl(n.concat(e),"cityfillers/synthwave_city_fillers").then(t=>{let s=[Jt,sn,16765514,8060826,16747098];for(let r=0;r<18;r++){let o=r%2===0,a=o?n:e,l=Math.random()*a.length|0,c=t[o?l:n.length+l];if(!c)continue;let u=ac(c,s[Math.random()*s.length|0]);mE(u,o?6+Math.random()*7:9+Math.random()*12,-30);let h=Math.random()<.5?-1:1;u.position.x=h*(o?54+Math.random()*70:130+Math.random()*170),u.position.z=-r*(6e3/18)-80-Math.random()*100,u.rotation.y=Math.random()<.5?0:Math.PI,sa(u),ke.add(u),km.push(u)}}).catch(t=>console.warn("[cityfillers]",t))},0)}var Mf=!1,Gm=[];for(let n=0;Mf&&n<8;n++){let e=new rt,t=26+Math.random()*30,s=4+Math.random()*3,r=[];for(let o=0;o<=10;o++){let a=o/10;r.push(new L((a-.5)*110,t-Math.sin(Math.PI*a)*s,0))}e.add(new Ji(new pt().setFromPoints(r),new Hn({color:2758726})));for(let o=1;o<10;o+=2){let a=r[o],l=new $(new Ie(1.6,2.2),new ae({color:[16734780,16765514,16722902][Math.random()*3|0],transparent:!0,opacity:.9,side:Mt}));l.position.set(a.x,a.y-1.4,0),e.add(l)}e.position.z=-n*760-140,ke.add(e),Gm.push(e)}var Vm=[];for(let n=0;Mf&&n<2;n++){let e=[];for(let s=0;s<=24;s++){let r=s/24;e.push(new L((r-.5)*150,40+Math.sin(r*Math.PI*2.2)*12,Math.sin(r*9)*6))}let t=new $(new pl(new So(e),48,1.6,6,!1),new ae({color:12514559,transparent:!0,opacity:.5,blending:Et,depthWrite:!1}));t.position.z=-n*3100-900,ke.add(t),Vm.push(t)}var Wm=[];for(let n=0;Mf&&n<4;n++){let e=new rt,t=30+Math.random()*34,s=new $(new $e(150,5,10),En);s.position.y=t,e.add(s);let r=[Jt,sn,16765514][Math.random()*3|0],o=new $(new $e(150,.8,10.4),new ae({color:r,transparent:!0,opacity:.8}));o.position.y=t+2.9,e.add(o);for(let a of[-70,70]){let l=new $(new $e(5,t+30,7),En);l.position.set(a,(t-30)/2,0),e.add(l)}e.position.z=-n*1500-700,ke.add(e),Wm.push(e)}function TE(n,e){let t=45+Math.pow(Math.random(),1.7)*430,s=15+Math.random()*36,r=15+Math.random()*36,o=new rt,a=Us[Math.random()*Us.length|0];function l(d,p,g,y){let _=new $(new $e(d,p,g),[a,a,Wt,Wt,a,a]);return _.position.y=y+p/2,o.add(_),_}function c(d,p,g,y,_,m,x){let M=new $(new Mn(d,p,g,_),[m,Wt,Wt]);return M.position.y=y+g/2,x&&(M.scale.z=x),o.add(M),M}function u(d,p,g){let y=Math.random(),_=[Jt,sn,16751164,16765514][Math.random()*4|0];if(y<.15){let m=8+Math.random()*16,x=new $(new Mn(.6,Math.min(d,p)*.6,m,4),En);x.position.y=g+m/2,x.rotation.y=Math.PI/4,o.add(x)}else if(y<.3){let m=Math.min(d,p)*.42,x=new $(new di(m,10,6,0,Math.PI*2,0,Math.PI/2),En);x.position.y=g,o.add(x)}else if(y<.44){let m=Math.min(d,p)*.5,x=new $(new Mn(m,m,Math.max(d,p)*.9,10,1,!1,0,Math.PI),En);x.rotation.z=Math.PI/2,p>d&&(x.rotation.y=Math.PI/2),x.position.y=g,o.add(x)}else if(y<.6){let m=g,x=d*.8,M=p*.8;for(let E=0;E<2+(Math.random()*2|0);E++){let I=4+Math.random()*5,R=new $(new $e(x,I,M),En);R.position.y=m+I/2,o.add(R),m+=I,x*=.68,M*=.68}}else if(y<.72){let m=Math.min(d,p)*.4,x=new $(new Mn(m,m,1,12),En);x.position.y=g+.5,o.add(x);let M=new $(new ji(m*.8,.35,6,16),Nn(16765514,.95));M.rotation.x=Math.PI/2,M.position.y=g+1.2,o.add(M)}if(Math.random()<.45){let m=new $(new $e(d+.6,1.6,p+.6),Nn(_,.85));m.position.y=g-1.2,o.add(m)}}let h=Math.random();if(h<.025&&t>200){let d=Math.max(s,r)/2;c(d*.22,d*.5,t*.82,0,10,je[Math.random()*je.length|0]);let p=new $(new Mn(d*1.15,d*.75,t*.07,14),[je[Math.random()*je.length|0],Wt,En]);p.position.y=t*.86,o.add(p);let g=new $(new Mn(.5,.5,t*.12,6),Ou);g.position.y=t*.96,o.add(g);let y=new $(new di(1.2,6,6),Wo);y.position.y=t*1.02,o.add(y)}else if(h<.055){let d=Math.max(s,r)/2,p=0,g=4+(Math.random()*3|0),y=t/g;for(let _=0;_<g;_++){let m=_%2===0;c(d*(m?1:.78),d*(m?1:.78),y,p,12,je[Math.random()*je.length|0]),p+=y}}else if(h<.085){let d=Math.max(s,r)/2;c(d*(.85+Math.random()*.15),d,t,0,14,je[Math.random()*je.length|0])}else if(h<.115){let d=Math.random()<.5?6:8,p=Math.max(s,r)/1.7;c(p*.94,p,t,0,d,je[Math.random()*je.length|0])}else if(h<.14){let d=Math.max(s,r)/1.8;c(d*.45,d,t,0,12,je[Math.random()*je.length|0])}else if(h<.165&&t>160){let d=Math.max(s,r)/1.5,p=0;for(let g=0;g<3;g++){let y=t*(.42-g*.07);c(d*(1-g*.27)*.96,d*(1-g*.27),y,p,10,je[Math.random()*je.length|0]),p+=y}}else if(h<.19){let d=Math.max(s,r)/1.6;c(d,d,t,0,16,je[Math.random()*je.length|0],.45+Math.random()*.2)}else if(h<.23&&t>180){let d=s*.42,p=Us[Math.random()*Us.length|0],g=Us[Math.random()*Us.length|0],y=new $(new $e(d,t,r*.8),[p,p,Wt,Wt,p,p]);y.position.set(-s*.32,t/2,0),o.add(y);let _=new $(new $e(d,t*.86,r*.8),[g,g,Wt,Wt,g,g]);_.position.set(s*.32,t*.43,0),o.add(_);let m=new $(new $e(s*.66,4,r*.3),En);m.position.set(0,t*.62,0),o.add(m);let x=new $(new Ie(s*.6,1),Nn(2814207,.7));x.position.set(0,t*.62,r*.16),o.add(x)}else if(t/s>1.7&&t/s<5.4&&Math.random()<.6){if(Math.random()<.75){let d=new $e(s,t,r);Nm(d,Math.random()*uf.length|0,Math.random()<.5);let p=new $(d,[fs,fs,Wt,Wt,fs,fs]);p.position.y=t/2,o.add(p),df++}else{let d=Xu[Math.random()*Xu.length|0],p=new $(new $e(s,t,r),[d,d,Wt,Wt,d,d]);p.position.y=t/2,o.add(p)}u(s,r,t)}else{let d=Math.random()*26|0,p=Math.max(s,r)/2;if(d===0&&t>120){let g=t*.55+Math.random()*t*.15;l(s,g,r,0),l(s*.68,t-g,r*.68,g),u(s*.68,r*.68,t)}else if(d===1&&t>140)l(s*1.3,t*.16,r*1.2,0),l(s*.72,t*.84,r*.72,t*.16),u(s*.72,r*.72,t);else if(d===2&&t>220){let g=t*.45,y=t*.3;l(s,g,r,0),l(s*.78,y,r*.78,g),l(s*.55,t-g-y,r*.55,g+y),u(s*.55,r*.55,t)}else if(d===3&&t>100){let g=t*(.55+Math.random()*.25),y=l(s*.62,t,r,0);y.position.x=-s*.19,l(s*.62,g,r*.62,0).position.set(s*.19,g/2,r*.19),u(s*.62,r,t)}else if(d===4&&t>140){let g=l(s*.38,t,r,0);g.position.x=-s*.26;let y=l(s*.38,t*.92,r,0);y.position.x=s*.26;let _=new $(new Ie(s*.1,t*.85),Nn([Jt,sn,16765514][Math.random()*3|0],.5));_.position.set(0,t*.45,0),o.add(_),u(s*.38,r,t)}else if(d===6&&t>140){let g=l(s*.3,t*.75,r,0);g.position.x=-s*.35;let y=l(s*.3,t*.75,r,0);y.position.x=s*.35,l(s,t*.25,r,t*.75),u(s,r,t)}else if(d===7&&t>120){for(let g=0;g<4;g++){let y=t*(.4+.2*g),_=l(s*.3,y,r,0);_.position.x=-s*.45+g*s*.3}u(s*.3,r,t)}else if(d===8&&t>120)l(s*.4,t*.8,r*.55,0),l(s,t*.2,r,t*.8),u(s,r,t);else if(d===9&&t>150)c(p*.32,p*.38,t*.75,0,10,je[Math.random()*je.length|0]),c(p*1.05,p*1.05,t*.18,t*.75,12,je[Math.random()*je.length|0]);else if(d===10&&t>140){l(s*.5,t,r*.5,0);let g=new $(new $e(s*1.9,2.5,3.5),En);g.position.set(s*.35,t-3,0),o.add(g);let y=new $(new Ie(1.6,5),Nn(16765514,.8));y.position.set(s*1.1,t-8,0),o.add(y),u(s*.5,r*.5,t)}else if(d===11&&t>150){l(s,t*.55,r,0);let g=l(s*.32,t*.45,r*.8,t*.55);g.position.x=-s*.3;let y=l(s*.32,t*.45,r*.8,t*.55);y.position.x=s*.3,u(s*.32,r*.8,t)}else if(d===12){l(s,t*.85,r,0);let g=new $(new $e(s*1.12,3,r*1.05),En);g.position.y=t*.9,g.rotation.z=.3,o.add(g)}else if(d===13&&t>130){for(let g=0;g<4;g++){let y=t*(1-g*.2),_=l(s*.42,y,r,0);_.position.x=-n*(g-1.5)*s*.28}u(s*.42,r,t)}else if(d===14&&t>140){let g=l(s*.24,t,r,0);g.position.x=-s*.38;let y=l(s*.24,t,r,0);y.position.x=s*.38,l(s,t*.16,r,t*.84),u(s,r,t)}else if(d===15){l(s,Math.min(t,90),r,0);for(let g=0;g<6;g++){let y=15+Math.random()*40,_=new $(new Mn(.3,.3,y,4),Ou);if(_.position.set((Math.random()-.5)*s*.7,Math.min(t,90)+y/2,(Math.random()-.5)*r*.7),o.add(_),Math.random()<.5){let m=new $(new di(.7,5,5),Wo);m.position.set(_.position.x,Math.min(t,90)+y+1,_.position.z),o.add(m)}}}else if(d===16&&t>120)c(p*.5,p*.5,t,0,10,je[Math.random()*je.length|0]).position.x=-p*.5,c(p*.45,p*.45,t*.85,0,10,je[Math.random()*je.length|0]).position.set(p*.5,t*.85/2,p*.2),c(p*.4,p*.4,t*.68,0,10,je[Math.random()*je.length|0]).position.set(0,t*.68/2,-p*.5);else if(d===17&&t>150){let g=c(1.2,p*1.3,t,0,4,je[Math.random()*je.length|0]);g.rotation.y=Math.PI/4}else if(d===18&&t>160){let g=c(p*.5,p*.9,t,0,4,je[Math.random()*je.length|0]);g.rotation.y=Math.PI/4;let y=new $(new dl(1.6,7,4),Nn(16765514,.9));y.position.y=t+3,o.add(y)}else if(d===19&&t>130){let g=l(s*.3,t,r,0);g.position.x=-s*.35;let y=l(s*.3,t,r,0);y.position.x=s*.35,l(s*.42,t*.5,r*.55,t*.25),u(s*.3,r,t)}else if(d===20&&t>140)c(p*1.05,p*1.05,t*.28,0,12,je[Math.random()*je.length|0]),l(s*.58,t*.72,r*.58,t*.28),u(s*.58,r*.58,t);else if(d===21&&t>150){l(s,t*.18,r,0);let g=l(s*.4,t*.82,r*.8,t*.18);g.position.x=-s*.27;let y=l(s*.4,t*.55,r*.8,t*.18);y.position.x=s*.27,u(s*.4,r*.8,t)}else if(d===22&&t>150){l(s*.55,t,r,0);let g=l(s*1.15,t*.14,r,t*.78);g.position.x=s*.28,u(s*.55,r,t)}else if(d===23&&t>140){for(let y=0;y<5;y++)c(p*.85,p*.85,t*.13,y*t*.2,12,je[Math.random()*je.length|0]);let g=new $(new Mn(p*.3,p*.3,t,8),Nn(2814207,.35));g.position.y=t/2,o.add(g)}else if(d===24&&t>120){let g=c(p*1.1,p*1.1,t,0,3,je[Math.random()*je.length|0]);g.rotation.y=Math.random()*6.3}else d===25?(l(s*.55,t,r*.7,0),l(s*.45,t*.7,r*.55,0).position.set(-s*.35,t*.35,r*.15),l(s*.4,t*.45,r*.5,0).position.set(s*.33,t*.225,-r*.15),u(s*.55,r*.7,t)):(l(s,t,r,0),u(s,r,t))}if(Math.random()<.25){let d=new $(new Mn(Math.min(3,s*.14),Math.min(3,s*.14),4,7),En);d.position.set((Math.random()-.5)*s*.3,t+2,(Math.random()-.5)*r*.3),o.add(d)}if(t>120&&Math.random()<.35){let d=[Jt,sn,8077298,16765514][Math.random()*4|0],p=[];for(let y of[-s/2-.3,s/2+.3]){let _=new Ie(.9,t*.92);_.rotateY(Math.PI/2),_.translate(y,t*.46,r*.28*(Math.random()<.5?1:-1)),p.push(_)}let g=new $(xn(p),Nn(d,.75));p.forEach(y=>y.dispose()),o.add(g)}if(Math.random()<.4){let d=4+(Math.random()*5|0),p=6+Math.random()*10,g=[],y=n>0?-Math.PI/2:Math.PI/2,_=-n*(s/2+1.6);for(let m=0;m<d&&p<t-8;m++){let x=4+Math.random()*4,M=3+Math.random()*3,E=new Ie(x,M);E.rotateY(y),E.translate(_,p+M/2,r*.15),g.push(E),p+=M+1.2+Math.random()*2}if(g.length){let m=new $(xn(g),Zo[Math.random()*Zo.length|0]);g.forEach(x=>x.dispose()),o.add(m)}}if(Math.random()<.7){let d=new $(new $e(Math.max(2,s*.25),3,Math.max(2,r*.25)),En);d.position.set((Math.random()-.5)*s*.4,t+1.5,(Math.random()-.5)*r*.4),o.add(d)}if(Math.random()<.45){let d=8+Math.random()*26,p=new $(new Mn(.35,.35,d,5),Ou);p.position.y=t+d/2,o.add(p)}let f=new $(new di(.9,6,6),Wo);if(f.position.y=t+1,o.add(f),Math.random()<.6){let d=[Jt,sn,16751164,8077298][Math.floor(Math.random()*4)],p=new kt(new ln(new $e(s+.4,.4,r+.4)),Oi(d));p.position.y=t-.2,o.add(p)}if(Math.random()<.7){let d=Math.min(s*.9,10+Math.random()*14),p=pf(d,d*.5);p.position.set(-n*(s/2+.4),8+Math.random()*(t*.5),0),p.rotation.y=n>0?-Math.PI/2:Math.PI/2,o.add(p)}{let d=new $(new Ie(s*.96,2.2),Nn([16751164,16722902,2814207][Math.floor(Math.random()*3)],.55));d.position.set(-n*(s/2+.25),2.2,0),d.rotation.y=n>0?-Math.PI/2:Math.PI/2,o.add(d)}if(Math.random()<.55){let d=Math.min(t*.5,18+Math.random()*22),p=new $(new Ie(3.4,d),$o[Math.random()*$o.length|0]);p.position.set(-n*(s/2+2.2),6+Math.random()*(t*.4)+d/2,r*.2),o.add(p)}o.position.set(n*(44+s/2+Math.random()*150),-30,e),o.updateMatrixWorld(!0);{let d=new bt().setFromObject(o);o.userData={hw:Math.max(4,d.max.x-o.position.x,o.position.x-d.min.x),hd:r/2,top:-30+t,done:!1}}return o}var AE=new L(0,0,1),a1=new L(0,1,0);function wE(n){n.updateMatrixWorld(!0);let e=new L,t=new L,s=new L,r=new L,o=new L,a=new L,l=[],c=0;if(n.traverse(y=>{if(!y.isMesh||!y.geometry||!y.geometry.attributes.position)return;let _=y.geometry.attributes.position,m=y.geometry.index,x=y.matrixWorld,M=m?m.count/3:_.count/3;for(let E=0;E<M;E++){let I=m?m.getX(E*3):E*3,R=m?m.getX(E*3+1):E*3+1,C=m?m.getX(E*3+2):E*3+2;e.fromBufferAttribute(_,I).applyMatrix4(x),t.fromBufferAttribute(_,R).applyMatrix4(x),s.fromBufferAttribute(_,C).applyMatrix4(x),r.subVectors(t,e),o.subVectors(s,e),a.crossVectors(r,o);let B=a.length()*.5;B<2||(a.normalize(),!(Math.abs(a.y)>.55)&&(l.push({ax:e.x,ay:e.y,az:e.z,bx:r.x,by:r.y,bz:r.z,cx:o.x,cy:o.y,cz:o.z,nx:a.x,ny:a.y,nz:a.z,area:B}),c+=B))}}),!l.length||c<=0)return null;let u=Math.max(6,Math.min(150,Math.round(c/220))),h=new Pe,f=new Pn,d=new L,p=[];for(let y=0;y<u;y++){let _=Math.random()*c,m=0;for(;m<l.length-1&&(_-=l[m].area)>0;)m++;let x=l[m],M=Math.random(),E=Math.random();M+E>1&&(M=1-M,E=1-E);let I=x.ax+x.bx*M+x.cx*E,R=x.ay+x.by*M+x.cy*E,C=x.az+x.bz*M+x.cz*E;d.set(x.nx,x.ny,x.nz),f.setFromUnitVectors(AE,d),h.makeRotationFromQuaternion(f);let B=Wu.clone();B.applyMatrix4(h),B.translate(I+x.nx*.4,R+x.ny*.4,C+x.nz*.4),p.push(B)}let g=xn(p);return p.forEach(y=>y.dispose()),new $(g,new ae({color:lc,transparent:!0,opacity:.8,depthWrite:!1,side:Mt}))}function RE(n,e){let t=new rt,s=$l[Math.floor(Math.random()*$l.length)],r=ac(s,Math.random()<.5?Jt:sn);r.updateMatrixWorld(!0);let o=new bt().setFromObject(r),a=new L;o.getSize(a),r.scale.setScalar((65+Math.pow(Math.random(),1.6)*320)/Math.max(a.y,.001)),r.updateMatrixWorld(!0);let l=new bt().setFromObject(r);r.position.y=-l.min.y,t.add(r),t.updateMatrixWorld(!0);let c=new bt().setFromObject(t),u=wE(r);u&&t.add(u);let h=new $(new di(.9,6,6),Wo);h.position.set((c.min.x+c.max.x)/2,c.max.y+1,(c.min.z+c.max.z)/2),t.add(h);let f=n>0?-c.min.x:c.max.x;return t.position.set(n*(44+f+Math.random()*150),-30,e),t.userData={hw:Math.max(Math.abs(c.min.x),Math.abs(c.max.x)),hd:Math.max(Math.abs(c.min.z),Math.abs(c.max.z)),top:-30+(c.max.y-c.min.y),done:!1},sa(t),t}var Xm=166,Jo=Xm*36,$l=[],$u=[];for(let n=0;n<32;n++)$u.push(cc(30,70,[2,8,3,10,17,18,24,27,21,0][n%10]));function Mm(n,e,t){let s=16+Math.random()*46+(t?26+Math.random()*60:0),r=18+Math.random()*30,o=14+Math.random()*24,a=new rt,l=$u[Math.random()*$u.length|0],c=new $(new $e(r,s,o),[l,l,Wt,Wt,l,l]);if(c.position.y=s/2,a.add(c),Math.random()<.7){let u=Math.min(r*1.1,12+Math.random()*10),h=pf(u,u*.45);h.position.set(0,s+u*.28,0),h.rotation.y=n>0?-Math.PI/2:Math.PI/2,h.rotation.x=-.12,a.add(h);let f=new $(new $e(.5,u*.3,.5),En);f.position.set(-u*.3,s+u*.12,0),a.add(f);let d=new $(new $e(.5,u*.3,.5),En);d.position.set(u*.3,s+u*.12,0),a.add(d)}if(Math.random()<.5){let u=10+Math.random()*10,h=new $(new Ie(3.4,u),$o[Math.random()*$o.length|0]);h.position.set(-n*(r/2+2),s*.4+u/2,o*.2),a.add(h)}if(Math.random()<.6){let u=3+(Math.random()*4|0),h=[16734780,16765514,16747052][Math.random()*3|0],f=n>0?-Math.PI/2:Math.PI/2,d=[];for(let g=0;g<u;g++){let y=new Ie(1.3,1.8);y.rotateY(f),y.translate(-n*(r/2+.6),s-1.5,-o/2+(g+.5)*(o/u)),d.push(y)}let p=new $(xn(d),Nn(h,.95));d.forEach(g=>g.dispose()),a.add(p)}return a.position.set(n*((t?300+Math.random()*380:64+Math.random()*260)+r/2),-30,e),a.userData={hw:r/2,hd:o/2,top:-30+s,done:!1},a}var Ju=[];function CE(){return Qs(32,44,n=>{n.clearRect(0,0,32,44);let e=["#7adcff","#ff7ad0","#b0ff7a","#ffd24a"][Math.random()*4|0];n.strokeStyle=e,n.fillStyle=e,n.globalAlpha=.9,n.lineWidth=1;let t=Math.random()*3|0;if(t===0)n.beginPath(),n.moveTo(16,4),n.lineTo(27,22),n.lineTo(16,40),n.lineTo(5,22),n.closePath(),n.stroke(),n.globalAlpha=.3,n.fill(),n.globalAlpha=.9;else if(t===1)n.beginPath(),n.arc(16,22,11,0,7),n.stroke(),n.fillRect(13,19,6,6);else for(let s=4;s<40;s+=6)Math.random()<.85&&n.fillRect(10,s,12,3);for(let s=0;s<44;s+=3)n.clearRect(0,s,32,1)})}var js=6,PE=Jo/js,yi=[],xf=[],ju=[],vf=[],Hu=new Array(js),zu=new Array(js);function LE(){for(let t=0;t<js;t++){let s=new rt;s.userData.minZ=0,yi.push(s),ju.push([])}let n=t=>{let s=t.position.z,r=Math.min(js-1,Math.floor((-s-.001)/PE));yi[r].add(t),s<yi[r].userData.minZ&&(yi[r].userData.minZ=s);let o={x:t.position.x,hw:t.userData.hw,top:t.userData.top,z0:s,k:r,done:!1};return xf.push(o),ju[r].push(o),o},e=[];for(let t=0;t<Xm;t++){let s=Math.random()<.5?1:-1,r=-t*36-70-Math.random()*30;if($l.length&&Math.random()<.1){let o=RE(s,r);o.userData.z0=o.position.z,ke.add(o),vf.push(o)}else{let o=n(TE(s,r));o.top+30>120&&e.push(o)}}for(let t=0;t<80;t++){let s=Math.random()<.5?1:-1;n(Mm(s,-t*(Jo/80)-60-Math.random()*45,!1))}for(let t=0;t<60;t++){let s=Math.random()<.5?1:-1;n(Mm(s,-t*(Jo/60)-80-Math.random()*60,!0))}for(let t of yi)sa(t),ke.add(t);for(let t=0;t<36&&Ju.length<14&&e.length;t++){let s=e[Math.random()*e.length|0];if(s.holo)continue;s.holo=!0;let r=new ae({map:CE(),transparent:!0,opacity:.55,blending:Et,depthWrite:!1,side:Mt}),o=new rt,a=new $(new Ie(16,22),r);o.add(a);let l=new $(new Ie(16,22),r);l.rotation.y=Math.PI/2,o.add(l),o.position.set(s.x,s.top+16+Math.random()*14,s.z0),yi[s.k].add(o),Ju.push(o)}}var Fl=[],qm=[],Ym=2e4;(function(){for(let n=0;n<26;n++){let e=420+Math.random()*680,t=60+Math.random()*90,s=60+Math.random()*90,r;if(n%5<2){let c=new $e(t,e,s);Nm(c,Math.random()*uf.length|0,Math.random()<.5),r=new $(c,[fs,fs,Wt,Wt,fs,fs]),df++}else{let c=Zu[n%Zu.length];r=new $(new $e(t,e,s),[c,c,Wt,Wt,c,c])}let o=new rt;r.position.y=e/2,o.add(r);let a=[Jt,sn,16751164][n%3];for(let c of[-t/2-.3,t/2+.3]){let u=new $(new Ie(1.6,e*.85),Nn(a,.8));u.position.set(c,e*.45,0),u.rotation.y=Math.PI/2,o.add(u)}if(Math.random()<.8){let c=pf(t*.85,t*.45);c.position.set(0,e*.55+Math.random()*e*.25,s/2+.6),o.add(c)}let l=new $(new di(2.2,6,6),Wo);l.position.y=e+3,o.add(l),o.userData.h=e,o.position.set((n%2?1:-1)*(320+Math.random()*620),-30,-(n/26)*Ym-Math.random()*600),sa(o),ke.add(o),Fl.push(o)}for(let n=0;n<5;n++){let e=Fl[Math.floor(Math.random()*Fl.length)],t=new $(new Ie(26,420).translate(0,210,0),new ae({color:[10146047,16743120,16765562,8060826,12622591][n%5],transparent:!0,opacity:.1,blending:Et,depthWrite:!1,side:Mt}));t.position.y=e.userData.h,t.rotation.z=.5+Math.random(),t.userData.spin=(Math.random()<.5?-1:1)*(.1+Math.random()*.15),e.add(t),qm.push(t)}})();var Ef=-16e3,tn=new rt,Jl=[],jl=[],bf=[],Sf=[],Tf=[];function ra(n,e,t,s,r){let o=new $e(s,t,24);o.translate(n,-30+t/2,e),bf.push(o);let a=new ln(new $e(s,t,24));if(a.scale(1.004,1.004,1.004),a.translate(n,-30+t/2,e),Sf.push(a),r){let l=gE(n-s/2,-30,e-12,n+s/2,-30+t,e+12,lc,.35,!0,34,16);Tf.push(l.geometry)}}var IE=[[220,228,0,560,1e3,56,150,!0],[160,314,-260,700,1080,74,180,!1],[120,420,-560,880,1180,96,210,!1],[85,595,-900,1060,1300,120,240,!1],[55,920,-1300,1280,1450,150,300,!1]],oa=250;function fc(n,e){let t=Math.min(1,Math.max(0,(Math.abs(n)-oa)/1300));return e*(.42+.58*t)}for(let n of IE){let e=n[0],t=n[1],s=n[2];for(let r=0;r<e;r++){let o=(r-(e-1)/2)*t+(Math.random()-.5)*t*.55;if(Math.abs(o)<oa)continue;let a=n[3]+Math.random()*n[4];Math.random()<.07&&(a*=1.3+Math.random()*.5),ra(o,s-Math.random()*16,fc(o,a),n[5]+Math.random()*n[6],n[7])}}for(let n=0;n<16;n++){let e=-1600-n*420,t=54-(n*2.5|0),s=52e3/(t-1),r=1250+n*95,o=150+n*22;for(let a=0;a<t;a++){let l=(a-(t-1)/2)*s+(Math.random()-.5)*s*.5;Math.abs(l)<oa||ra(l,e-Math.random()*20,fc(l,r+Math.random()*850),o+Math.random()*320,!1)}}for(let n=0;n<26;n++){let e=(n-12.5)*2100+(Math.random()-.5)*900;Math.abs(e)<oa*1.2||ra(e,-8800-Math.random()*1200,fc(e,2e3+Math.random()*1800),420+Math.random()*520,!1)}for(let n=0;n<14;n++){let e=(Math.random()<.5?-1:1)*(oa*1.4+Math.random()*2e4);ra(e,-3e3-Math.random()*5e3,fc(e,1600+Math.random()*1600),60+Math.random()*80,!1)}function Km(n,e){ra(n,0,4800,148,!0);let t=new $(new $e(176,42,84),new ae({color:e,fog:!1}));t.position.set(n,4770,0),tn.add(t);let s=new $(new Mn(5.2,5.2,760,8),new ae({color:e,fog:!1,transparent:!0,opacity:.42}));s.position.set(n,5150,0),tn.add(s)}Km(-95,Jt);Km(95,sn);tn.add(new $(xn(bf),new ae({color:1312294,fog:!1})));bf.forEach(n=>n.dispose());var Zm=new Hn({color:6956200,fog:!1,transparent:!0,opacity:.2});jl.push(Zm);tn.add(new kt(xn(Sf),Zm));Sf.forEach(n=>n.dispose());var $m=new ae({color:lc,transparent:!0,opacity:.02,depthWrite:!1,side:Mt,fog:!1});Jl.push($m);tn.add(new $(xn(Tf),$m));Tf.forEach(n=>n.dispose());function Jm(n){let{r:e,g:t,b:s}=Pm(n),r=document.createElement("canvas");r.width=4,r.height=128;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,0,128);return a.addColorStop(0,`rgba(${e},${t},${s},0)`),a.addColorStop(.5,`rgba(${e},${t},${s},1)`),a.addColorStop(1,`rgba(${e},${t},${s},0)`),o.fillStyle=a,o.fillRect(0,0,4,128),new zn(r)}var ms=new $(new Ie(6e4,5200),new ae({map:Jm(ai[0].glow),transparent:!0,opacity:.1,blending:Et,depthWrite:!1,fog:!1}));ms.position.set(0,560,-360);tn.add(ms);tn.position.z=Ef;Fi.add(tn);var Af=[],wf=[-26,-9,9,26],jo=[];for(let n=0;n<6;n++)jo.push(new ae({map:Qs(64,32,e=>{e.fillStyle=["#0a1626","#140a26","#260a18","#0a2020","#1a1a10","#101226"][n],e.fillRect(0,0,64,32),e.fillStyle="rgba(255,255,255,0.08)";for(let t=4;t<32;t+=7)e.fillRect(0,t,64,1);e.fillStyle=["#ff2b5c","#2af0ff","#ffe08a","#ff2bd6","#7aff9a","#c09aff"][n],e.fillRect(0,14,64,2),e.globalAlpha=.85,e.fillStyle="#9ad0ff";for(let t=6;t<58;t+=9)e.fillRect(t,6,5,4);e.globalAlpha=1})}));function DE(n){let e=new rt,t=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];e.add(new $(new $e(4.4,2,8),jo[Math.random()*jo.length|0])),e.add(new kt(new ln(new $e(4.4,2,8)),Oi(t)));let s=new $(new Ie(3.6,.7),Um);return s.position.set(0,.2,4.1),e.add(s),e.position.set(wf[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,-28,n),e.userData.v=.4+Math.random()*.3,e}function NE(n){let e=new rt,t=Ks[Math.floor(Math.random()*Ks.length)],s=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];{let u=t.clone(!0),h=jo[Math.random()*jo.length|0];u.traverse(f=>{f.isMesh&&(f.material=h,f.add(new kt(new ln(f.geometry,25),Oi(s))))}),e.add(u)}e.updateMatrixWorld(!0);let r=new bt().setFromObject(e),o=new L;r.getSize(o);let a=Math.max(o.z,.001);e.scale.setScalar(6.5/a),e.updateMatrixWorld(!0);let l=new bt().setFromObject(e);e.position.y=-28-l.min.y;let c=new $(new Ie(2.6,.6),Um);return c.position.set(0,.6,l.max.z||3),e.add(c),e.position.x=wf[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,e.position.z=n,e.userData.v=.4+Math.random()*.3,e}var UE=2856,Ks=[];function BE(){for(let n=0;n<42;n++){let e=Ks.length?NE(-n*68-40):DE(-n*68-40);sa(e),e.userData.z0=e.position.z,e.userData.x0=e.position.x,ke.add(e),Af.push(e)}}var jm=[],ku=4200,Hl=[];function OE(n){let e=new rt,t=n?16734815:[2814207,16769162,16722902][Math.floor(Math.random()*3)],s;if(Hl.length)s=Hl[Math.random()*Hl.length|0].clone(!0),s.traverse(a=>{if(a.isMesh){let l=a.material&&a.material.color?a.material.color.clone():new ge(1709104);a.material=new ae({color:l.multiplyScalar(.55)}),a.add(new kt(new ln(a.geometry,30),Oi(t)))}}),s.scale.setScalar(.9+Math.random()*.4);else if(Ks.length){s=ac(Ks[Math.floor(Math.random()*Ks.length)],t),s.updateMatrixWorld(!0);let a=new bt().setFromObject(s),l=new L;a.getSize(l),s.scale.setScalar(8.5/Math.max(l.z,.001))}else{s=new rt;let a=new $e(4.5,1.4,8);s.add(new $(a,Lm())),s.add(new kt(new ln(a),Oi(t)))}e.add(s),e.updateMatrixWorld(!0);let r=new bt().setFromObject(e),o=new L;if(r.getSize(o),o.x>30&&(s.scale.multiplyScalar(30/o.x),e.updateMatrixWorld(!0),r.setFromObject(e),r.getSize(o)),e.userData.rx=Math.min(16,Math.max(2.5,o.x/2)),e.userData.ry=Math.max(2,o.y/2),e.userData.cy=o.y/2,n){e.rotation.y=Math.PI;let a=new $(new Ie(Math.max(3.2,o.x*.4),1.1),new ae({color:14676735,transparent:!0,opacity:.9,blending:Et,depthWrite:!1,side:Mt}));a.position.set(0,o.y*.4,r.min.z-.4),e.add(a)}else{let a=new $(new Ie(Math.max(2.4,o.x*.35),.9),new ae({color:16751164,transparent:!0,opacity:.85,blending:Et,depthWrite:!1,side:Mt}));a.position.set(0,o.y*.4,r.max.z+.4),e.add(a)}return e}var Qm=new Ll,FE=["01_pulse_block_44m","02_vector_tower_88m","03_slash_roof_62m","04_night_monolith_118m","05_setback_hotel_72m","06_skyline_spire_102m"],HE=["01_midnight_wedge","02_pulse_sedan","03_vector_van","04_afterburner_supercar","05_night_interceptor"];function zl(n,e){return Promise.all(n.map(t=>new Promise(s=>{Qm.load("models/"+e+"/"+t+".glb",r=>s(r.scene),void 0,()=>s(null))}))).then(t=>t.filter(Boolean))}var Qu=!1;function e0(n){ot=OE(!1),ot.traverse(s=>{s.isLineSegments&&(s.material=Oi(16722902))});let e=new $(new Ie(3.4,1.4),Nn(16738860,.9));e.position.set(0,.6,5.6),ot.add(e);let t=new $(new Ie(2.2,.9),Nn(16765514,.9));t.position.set(0,.6,7.4),ot.add(t),ot.position.set(0,14,n),ke.add(ot)}var ef=[],zE=15e3,un=[-52,0,52],nn=[-6,28,62],xm=1.15,dc=3e3,Uo={1:65,2:80.75,3:65},Bo={1:16.78,2:.38,3:1.18},tf=null,Ql=null,Vt=null;fetch("beatmaps.json").then(n=>n.json()).then(n=>{tf=n}).catch(n=>console.warn("[beatmaps]",n));var Kr=[{name:"EASY",tol:1.35,den:2,punk:-4},{name:"NORMAL",tol:1,den:1,punk:0},{name:"HARD",tol:.8,den:1,punk:4}],ri=1,kE=parseInt(localStorage.getItem("pb_cal")||"0",10)||0,Hr=localStorage.getItem("pb_crt")!=="0",Xs=localStorage.getItem("pb_flash")!=="0"?1:.35,Oo=localStorage.getItem("pb_shake")!=="0"?1:.35,cs=parseFloat(localStorage.getItem("pb_vol")||"1")||1,Gs=localStorage.getItem("pb_recep")==="1",ec=!1,Nl=location.hash.includes("sim"),GE=location.hash.includes("bot"),Io=0,VE={1:134.08,2:188,3:123.92};addEventListener("keydown",n=>{n.code==="F9"&&(n.preventDefault(),n.stopImmediatePropagation(),ec=!ec)});var $t=[],Vs=0,us=0,si=[],Xe=0,An=0,Zs=0,Mi=0,ft=0,cn=0,qs=!1,$s=0,qr=0,tc=0,nc=0,vm=0,nf=0,kl=0,os=0,as=0,Fo=0,kr=0,Em=1,Gl=0,Vl=0;document.addEventListener("visibilitychange",()=>{document.hidden&&qn&&!oi&&!Zt&&gs()});var WE=new ji(15,2.4,6,24),XE=new ji(15,5.5,6,24),qE=new Ie(5.5,1.6),t0=new ae({color:Jt,fog:!1}),YE=new ae({color:sn,fog:!1}),n0=new ae({color:Jt,transparent:!0,opacity:.32,blending:Et,depthWrite:!1,fog:!1}),KE=new ae({color:sn,transparent:!0,opacity:.32,blending:Et,depthWrite:!1,fog:!1}),ZE=new ae({color:16777215,transparent:!0,opacity:.85,fog:!1,depthWrite:!1});function $E(n){let e=new rt;e.add(new $(WE,t0)),e.add(new $(XE,n0));for(let t=0;t<4;t++){let s=new $(qE,ZE);s.position.set(Math.cos(t*Math.PI/2)*10.5,Math.sin(t*Math.PI/2)*10.5,0),s.rotation.z=t*Math.PI/2,e.add(s)}return e.position.set(un[n[0]],nn[n[1]],-dc),ke.add(e),e}var JE=new ji(15,3.2,6,24),ic=[];for(let n=0;n<6;n++){let e=new $(JE,new ae({color:Jt,transparent:!0,opacity:0,blending:Et,depthWrite:!1,fog:!1}));e.visible=!1,ke.add(e),ic.push({m:e,t:0})}function Wl(n,e,t,s){let r=ic.find(o=>o.t<=0)||ic[0];r.t=1,r.mag=s||1,r.m.visible=!0,r.m.material.color.setHex(t),r.m.position.set(n,e,0),r.m.scale.set(1,1,1)}var Rf=[];{let n=new ji(16,1,6,24);for(let e=0;e<3;e++)for(let t=0;t<3;t++){let s=new $(n,new ae({color:2814207,transparent:!0,opacity:.08,fog:!1,depthWrite:!1}));s.visible=Gs,s.position.set(un[t],nn[e],0),ke.add(s),Rf.push({cx:t,cy:e,m:s})}}var jE=new ae({color:659752,transparent:!0,opacity:.88,fog:!1}),i0=new Hn({color:16722748,transparent:!0,opacity:.9,fog:!1}),QE=new ae({color:8060826,transparent:!0,opacity:.9,fog:!1,depthWrite:!1}),s0=new Ie(46,30),eb=new ln(s0),tb=(()=>{let n=new Ie(50,2.4),e=new Ie(2.4,34),t=[n.clone().translate(0,17,0),n.clone().translate(0,-17,0),e.clone().translate(25,0,0),e.clone().translate(-25,0,0)],s=xn(t);return t.forEach(r=>r.dispose()),n.dispose(),e.dispose(),s})();function nb(n){let e=new rt;for(let t=0;t<3;t++)for(let s=0;s<3;s++)if(s===n[0]&&t===n[1]){let r=new $(tb,QE);r.position.set(un[s],nn[t],0);let o=Kr[ri].tol;r.scale.set(26*o/25,18*o/17,1),e.add(r)}else{let r=new $(s0,jE);r.position.set(un[s],nn[t],0),e.add(r);let o=new kt(eb,i0);o.position.copy(r.position),e.add(o)}return e.position.z=-dc,ke.add(e),e}var ib=12,Xo=[],sb=new $e(.9,.9,14),rb=new ae({color:10485736,transparent:!0,opacity:.95,blending:Et,depthWrite:!1,fog:!1});for(let n=0;n<ib;n++){let e=new $(sb,rb);e.visible=!1,ke.add(e),Xo.push({m:e,on:!1,onBeat:!1})}var ob=8,Yr=[],r0=new Ds(7),ab=new ln(r0),sf={d:new ae({color:1706534,fog:!1}),h:new ae({color:2759174,fog:!1})};for(let n=0;n<ob;n++){let e=new rt,t=new $(r0,sf.d);e.add(t),e.add(new kt(ab,Oi(sn))),e.visible=!1,ke.add(e),Yr.push({g:e,body:t,on:!1,hp:1,type:"drone",cx:1,cy:1,ph:Math.random()*6})}var Ho=0,pc=!1,rf=-1;addEventListener("pointerdown",()=>{pc=!0});addEventListener("pointerup",()=>{pc=!1});addEventListener("blur",()=>{pc=!1;for(let n in hn)hn[n]=!1});var o0=new ae({color:16722780,transparent:!0,opacity:.55,blending:Et,depthWrite:!1,fog:!1}),a0=new Ie(320,26),l0=new Ie(40,150),lb=new ln(a0),cb=new ln(l0);function hb(n,e){let t=new rt,s=new $(n==="row"?a0:l0,o0),r=Kr[ri].tol;n==="row"?(s.position.set(0,nn[e],0),s.scale.y=17/r/13):(s.position.set(un[e],(nn[0]+nn[2])/2,0),s.scale.x=24/r/20),t.add(s);let o=new kt(n==="row"?lb:cb,i0);return o.position.copy(s.position),t.add(o),t.position.z=-dc,ke.add(t),t}function ub(){sc=[],Xl=0,gb();for(let u of si)ke.remove(u.g);$t=[],si=[],Vs=0,us=0,Xe=0,An=0,Zs=0,ft=0,cn=0;let n=Uo[at]||120,e=60/n,t=Bo[at]||.5;$s=St.duration(),Mi=0,Vt=null;let s=tf&&tf[String(at)];if(s){Ql=s.sections,fb(s),qs=!0;return}Ql=null;let r=t;for(;r-e*4>4;)r-=e*4;for(;r<3;)r+=e*4;let o=1,a=1,l=0,c=0;for(;r<$s-4;){let u=l%6,h=at>=3&&u>=4;for(let f=0;f<8&&r<$s-4;f++){if(at>=2&&u%2===1&&f===0){$t.push({t:r,cell:[o,a],kind:"gate"}),Mi++,r+=e;continue}if(h){if(f%2===0){let p=c%2===0?"row":"col",g=(c*2+1)%3;$t.push({t:r,cell:[g,g],kind:"bar",axis:p,idx:g}),Mi++,c++}r+=e;continue}let d=u===5?4:u>=3?1:2;f%d===0&&(u===0?o=(o+1)%3:u===1?a=(a+1)%3:u===2?(o=(o+2)%3,f%4===0&&(a=(a+1)%3)):u===3?o=[0,2,1,0,2,1,0,2][f]:u===4?(o=f%3,a=f%3):(o=1,a=1),$t.push({t:r,cell:[o,a],kind:"ring"}),Mi++),r+=e}l++}qs=!0}function fb(n){let e=60/n.bpm,t=n.offset,s=1,r=1,o=0,a=null,l=1,c=1;for(let u of n.sections){let h=t+Math.ceil((u.t0-t)/e-1e-6)*e,f=0;for(;h<u.t1&&h<$s-2;h+=e,f++){if(u.mode==="combat"){if(f%(u.density||2)===0){let m=o%2===0?"row":"col",x=(o*2+1)%3;$t.push({t:h,cell:[x,x],kind:"bar",axis:m,idx:x}),Mi++,o++}continue}let d=u.gateEvery?ri===2?Math.max(4,u.gateEvery/2|0):u.gateEvery:0,p=d&&f>0&&f%d===0,g=(u.density||1)*Kr[ri].den;if(!p&&f%g!==0)continue;let y=u.patterns&&u.patterns.length?u.patterns:["h"],_=y[(f/8|0)%y.length];if(_==="h")s=(s+1)%3;else if(_==="vert")r=(r+1)%3;else if(_==="zig")s=(s+2)%3,f%4===0&&(r=(r+1)%3);else if(_==="diag")s=f%3,r=f%3;else if(_==="stair")s=(f>>1)%3,r=((f>>1)/3|0)%3;else if(_==="orbit"){let m=[[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1]],x=m[f%8];s=x[0],r=x[1]}else s=1,r=1;if(a!==null){let m=h-a;m>0&&Math.max(Math.abs(s-l),Math.abs(r-c))/m>2.4&&(s=l+Math.sign(s-l),r=c+Math.sign(r-c))}$t.push({t:h,cell:[s,r],kind:p?"gate":"ring"}),Mi++,a=h,l=s,c=r}}$t.sort((u,h)=>u.t-h.t)}function mc(n){for(let e of["grid9","speedbar","sblabel"]){let t=document.getElementById(e);t&&(t.style.display=n?"":"none")}}mc(!1);var Cf=[];{let n=document.getElementById("grid9");if(n)for(let e=2;e>=0;e--)for(let t=0;t<3;t++){let s=document.createElement("div");n.appendChild(s),Cf.push({c:t,r:e,el:s})}}function of(){Qu||(Qu=!0,LE(),BE(),e0(ds?-700:-900),console.log("AF2-Fassaden im Einsatz:",df))}var db=["01_sky_dart_interceptor","02_afterburner_jet","03_pulse_commuter","04_vector_cargo_lifter","05_neon_bomber","06_skyline_heavy_transport"];Promise.all([zl(FE,"buildings"),zl(HE,"vehicles"),zl(db,"aircraft/synthwave_aircraft")]).then(n=>{$l=n[0],Ks=n[1],Hl=n[2],of()}).catch(()=>of());setTimeout(of,5e3);var c0=new pt,af=[],bm=0,Sm=44,Tm=560,Am=0;for(;af.length<450&&Am<6e3;){Am++;let n=(Math.random()-.5)*4200,e=380+Math.random()*640,t=-2600-Math.random()*2600;(n-bm)*(n-bm)+(e-Sm)*(e-Sm)<Tm*Tm||af.push(n,e,t)}c0.setAttribute("position",new it(af,3));var Pf=new Is({color:12374271,size:1.5,transparent:!0,opacity:.5,fog:!1});Fi.add(new Pr(c0,Pf));var Xn=new rt;(function(){let n=new pt;n.setAttribute("position",new xt(new Float32Array([0,0,-4.2,-3.2,-.3,2.6,0,.7,1.4,0,0,-4.2,0,.7,1.4,3.2,-.3,2.6,0,0,-4.2,0,.7,1.4,0,-.9,2.4,0,0,-4.2,0,-.9,2.4,0,.7,1.4]),3)),n.computeVertexNormals(),Xn.add(new $(n,new ae({color:530986,side:Mt}))),Xn.add(new kt(new ln(n,1),Oi(Jt)));let e=new $(new Ds(.6),new ae({color:sn}));e.position.set(0,.35,-.6),e.scale.set(1,.6,1.8),Xn.add(e);for(let t of[-3,3]){let s=new $(new di(.28,6,6),new ae({color:t<0?sn:Jt}));s.position.set(t,-.25,2.4),Xn.add(s)}})();ke.add(Xn);Qm.load("models/ship/glidebooster_vx7.glb",n=>{let e=ac(n.scene,Jt);e.updateMatrixWorld(!0);let t=new bt().setFromObject(e),s=new L,r=new L;t.getSize(s),t.getCenter(r);let o=7/Math.max(.001,s.x);for(e.scale.setScalar(o),e.position.set(-r.x*o,-r.y*o,-r.z*o);Xn.children.length;)Xn.remove(Xn.children[0]);Xn.add(e);let a=new $(new Ds(.5),new ae({color:sn}));a.position.set(0,.4,-.8),a.scale.set(1,.6,1.8),Xn.add(a)},void 0,()=>{});var pb=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.28,"rgba(255,214,130,0.85)"),t.addColorStop(.6,"rgba(255,110,70,0.38)"),t.addColorStop(1,"rgba(255,50,130,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let s=new zn(n);return s.colorSpace=ct,s})(),lf=[];for(let n=0;n<10;n++){let e=new $(new Ie(3.4-.22*n,3.4-.22*n),new ae({map:pb,color:n<5?16767136:16751327,transparent:!0,opacity:.55-n*.048,blending:Et,depthWrite:!1}));ke.add(e),lf.push(e)}var hn={};addEventListener("keydown",n=>{if(hn[n.code]=!0,n.code==="Space"&&n.preventDefault(),Zt){!n.repeat&&performance.now()-to>600&&ta();return}if(n.code==="KeyR"&&(Jr(),St.restart()),n.code==="KeyT"&&(wt.superhot=!wt.superhot),n.code==="Escape"||n.code==="KeyP"){gs();return}if(oi){n.code==="ArrowUp"&&(xi=0),n.code==="ArrowDown"&&(xi=1),(n.code==="ArrowUp"||n.code==="ArrowDown")&&oc(),n.code==="Enter"&&g0();return}no()});addEventListener("keyup",n=>{hn[n.code]=!1});var Lf="none";addEventListener("gamepadconnected",n=>{Lf=n.gamepad.id,no()});function If(){let n=navigator.getGamepads?navigator.getGamepads():[];for(let e of n)if(e&&e.connected)return e;return null}function h0(){return"pb_hs_"+at+"_"+ri}function u0(){try{return JSON.parse(localStorage.getItem(h0())||"[]")}catch{return[]}}function mb(n,e,t){let s=u0(),r={s:n,r:e,c:t};s.push(r),s.sort((a,l)=>l.s-a.s);let o=s.slice(0,5);try{localStorage.setItem(h0(),JSON.stringify(o))}catch{}return o.indexOf(r)}function Gu(n){for(let e of[10,25,50,100])if(n<e&&Xe>=e){et("\u2605 COMBO "+e+" \u2605","#ffd24a"),Tn=Math.max(Tn,6),Bt=Math.max(Bt,.5),Wl(tt,qe,16765514),Bs(.7,.5,250);break}}function qo(){let n=document.getElementById("hsline");if(n){let e=u0();n.textContent=e.length?"BEST  "+Math.round(e[0].s)+"  \xB7  RANK "+e[0].r+"  \xB7  COMBO \xD7"+e[0].c:"NO RECORD YET - FLY!"}}var sc=[],Xl=0,hs=null,Gr=0,Ys=new rt;{let n=new Ds(2.2),e=new $(n,new ae({color:10475775,transparent:!0,opacity:.3,blending:Et,depthWrite:!1}));e.scale.set(1.5,.5,2.4),Ys.add(e);let t=new kt(new ln(n),new Hn({color:10475775,transparent:!0,opacity:.55}));t.scale.copy(e.scale),Ys.add(t),Ys.visible=!1,ke.add(Ys)}function f0(){return"pb_ghost_"+at+"_"+ri}function gb(){try{hs=JSON.parse(localStorage.getItem(f0())||"null")}catch{hs=null}Gr=0,Ys.visible=!1}function Bs(n,e,t){try{let s=navigator.getGamepads&&navigator.getGamepads()[0];s&&s.vibrationActuator&&s.vibrationActuator.playEffect&&s.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:n,weakMagnitude:e})}catch{}}function _b(){let n=0,e=28,t=si.find(r=>!r.judged)||$t[us]||null;t&&(t.kind==="bar"?t.axis==="row"?(e=nn[(t.idx+1)%3],n=0):(n=un[(t.idx+1)%3],e=28):(n=un[t.cell[0]],e=nn[t.cell[1]]));let s=r=>Math.max(-1,Math.min(1,r));return{x:s((n-tt)*.06),y:s((e-qe)*.07),boost:1,brake:0}}function yb(){if((GE||ds)&&qn&&!oi&&!Zt)return _b();let n=0,e=0,t=0,s=0,r=0;(hn.ArrowLeft||hn.KeyA)&&(n-=1),(hn.ArrowRight||hn.KeyD)&&(n+=1),(hn.ArrowUp||hn.KeyW)&&(e+=1),(hn.ArrowDown||hn.KeyS)&&(e-=1),(hn.ShiftLeft||hn.ShiftRight)&&(t=1),hn.Space&&(s=1);let o=If();if(o){Lf=o.id;let a=c=>Math.abs(c)<.12?0:c;n+=a(o.axes[0]||0),e-=a(o.axes[1]||0);let l=c=>o.buttons[c]?o.buttons[c].value:0;t=Math.max(t,l(7),l(5)),s=Math.max(s,l(6),l(4)),r=Math.max(l(0),l(2))}return{x:Math.max(-1,Math.min(1,n)),y:Math.max(-1,Math.min(1,e)),boost:t,brake:s,fire:r}}var wt={stickMod:1.35,turnRate:17,smooth:.5,rollMod:.85,baseSpeed:33,lateralGain:3.1,boxW:150,boxH:95,invertY:!1,superhot:!0,timeFloor:.02},Dn={x:0,y:0,z:0},tt=0,qe=22,gi=1,ls=0,Df=0,vn=0,Zt=!1,at=1,Re=0,Ue=1,Dt=0,Sn=1,zo=0,Gt=!1,Os=0,ql=0,Fs=0,cf=!1,to=0,Hs=0,d0=0,zs=0,Vr=0,ko=!1,Go=!1,Tn=0,ot=null,Ul=Math.random()*6,Wr=0,Qo=0,Bt=0,ds=location.hash==="#trailer",hf=ai[0].skyA,p0=ai[0].skyB,Mb=[0,16,32,45,55,72,100],$r=document.createElement("canvas");$r.width=96;$r.height=512;var Do=$r.getContext("2d"),gc=new zn($r);gc.colorSpace=ct;gc.minFilter=jt;var rc=-9;function ea(n){let e=$r.width,t=$r.height,s=Do.createLinearGradient(0,0,0,t);for(let a=0;a<hf.length;a++){let l=hf[a],c=p0[a];s.addColorStop(Mb[a]/100,`rgb(${Math.round(l[0]+(c[0]-l[0])*n)},${Math.round(l[1]+(c[1]-l[1])*n)},${Math.round(l[2]+(c[2]-l[2])*n)})`)}Do.fillStyle=s,Do.fillRect(0,0,e,t);let r=Do.getImageData(0,0,e,t),o=r.data;for(let a=0;a<o.length;a+=4){let l=Math.random()*11-5.5|0;o[a]+=l,o[a+1]+=l,o[a+2]+=l}Do.putImageData(r,0,0),gc.needsUpdate=!0,rc=n}ea(0);var _c=new $(new Ie(2,2),new ae({map:gc,depthWrite:!1,depthTest:!1,fog:!1}));_c.position.set(0,0,-120);_c.scale.set(560,320,1);_c.renderOrder=-1;Nt.add(_c);Fi.add(Nt);var Nf=14,ks=new Float32Array(Nf*6),m0=[];for(let n=0;n<Nf;n++){let e=Math.random()*Math.PI*2,t=6+Math.random()*16;m0.push({x:Math.cos(e)*t,y:Math.sin(e)*t*.62,z:-30-Math.random()*130,len:18+Math.random()*26,v:1+Math.random()*.7})}var Uf=new pt;Uf.setAttribute("position",new xt(ks,3));var Vo=new Hn({color:10479871,transparent:!0,opacity:0,blending:Et,depthWrite:!1,depthTest:!1,fog:!1}),Js=new kt(Uf,Vo);Js.frustumCulled=!1;Js.renderOrder=5;Js.visible=!1;ke.add(Js);function Jr(){Dn={x:0,y:0,z:0},tt=0,qe=22,ls=0;for(let e of yi)e.position.z=0;for(let e of xf)e.done=!1;for(let e of vf)e.position.z=e.userData.z0,e.userData.done=!1;for(let e of Af)e.position.z=e.userData.z0,e.position.x=e.userData.x0,e.userData.done=!1;for(let e of jm)e.position.set(e.userData.x0,e.userData.y0,e.userData.z0),e.userData.done=!1;Kl.position.z=0,Df=0,vn=0,Zt=!1,tn.position.z=Ef,Re=0,Ue=1,Dt=0,Sn=1,zo=0,Gt=!1,Os=0,ql=0,Fs=0,Qo=0,Bt=0,Wr=0,Hs=0,d0=0,zs=0,Vr=0,ko=!1,Go=!1,Tn=0;for(let e of si)ke.remove(e.g);si.length=0,$t.length=0,qs=!1,Vs=0,us=0,Xe=0,An=0,Zs=0,Mi=0,ft=0,cn=0,$s=0,qr=0,tc=0,nc=0,Vt=null,kl=0,os=0,as=0,Fo=0,nf=0,kr=0,Gl=0,Vl=0;for(let e of Yr)e.on=!1,e.g.visible=!1;for(let e of Xo)e.on=!1,e.m.visible=!1;Ho=0,rf=-1;for(let e of Cf)e.el.className="";ot&&(ot.visible=!0,ot.position.set(0,14,ds?-700:-900));for(let e of ef)if(e.position.z=e.userData.z0,e.userData.passed=!1,e.userData.hit=!1,e.userData.side=void 0,e.userData.punkGap=void 0,e.userData.pts)for(let t of e.userData.pts)t.done=!1;Nt.fov=66,Nt.updateProjectionMatrix(),Ko.strength=.9;let n=document.getElementById("pops");n&&(n.innerHTML="");for(let e of Jl)e.opacity=.12;for(let e of jl)e.opacity=.42;ms.material.opacity=.14,Pf.opacity=.5,ea(0),_0()}var oi=!1,wm=!1,xi=0,xb=()=>[document.getElementById("btnResume"),document.getElementById("btnRestart"),document.getElementById("btnMenu")];function Bf(){oi=!1,document.getElementById("pause").style.display="none",Zt=!1,_0(),Jr(),St.stop(),qn=!1,ke.visible=!1,mc(!1);let n=document.getElementById("start");n&&(n.style.display="flex"),qo()}function oc(){xb().forEach((e,t)=>e.classList.toggle("sel",t===xi))}function g0(){xi===0?gs():xi===1?(Jr(),St.restart(),oi&&gs()):Bf()}function gs(){qn&&(oi=!oi,document.getElementById("pause").style.display=oi?"flex":"none",oi?(xi=0,oc(),St.pause(),document.getElementById("dmg").style.opacity=0):St.resume())}function vb(){let n=If(),e=!!(n&&n.buttons[9]&&n.buttons[9].pressed),t=e&&!wm;return wm=e,t}var zr={up:!1,down:!1,a:!1,b:!1,any:!1};function Bl(){let n=If();if(!n)return{};let e=u=>!!(n.buttons[u]&&n.buttons[u].pressed),t=n.axes[1]||0,s=e(12)||t<-.5,r=e(13)||t>.5,o=e(0),a=e(1),l=n.buttons.some(u=>u&&u.pressed)||Math.abs(n.axes[0]||0)>.6||Math.abs(t)>.6,c={up:s&&!zr.up,down:r&&!zr.down,a:o&&!zr.a,b:a&&!zr.b,any:l&&!zr.any};return zr={up:s,down:r,a:o,b:a,any:l},c}document.getElementById("btnResume").addEventListener("click",n=>{n.stopPropagation(),gs()});document.getElementById("btnRestart").addEventListener("click",n=>{n.stopPropagation(),Jr(),St.restart(),oi&&gs()});document.getElementById("btnMenu").addEventListener("click",n=>{n.stopPropagation(),Bf()});document.getElementById("btnEndMenu").addEventListener("click",n=>{n.stopPropagation(),Bf()});document.getElementById("btnEndMenu").addEventListener("pointerdown",n=>{n.stopPropagation()});function Eb(){St.pause(),to=performance.now(),document.getElementById("dmg").style.opacity=0;let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),s=document.getElementById("btnEndRestart"),r=at<ai.length;e&&(e.textContent=r?"LEVEL "+at+" CLEARED":"ALL CLEAR"),s&&(s.textContent=r?"NEXT: "+ai[at].name+" \u2192":"FLY AGAIN");let o=mb(Math.round(Re),Rm(),An);if(qo(),o===0&&sc.length>10)try{localStorage.setItem(f0(),JSON.stringify(sc))}catch{}t&&(t.textContent="SCORE "+Math.round(Re)+" \xB7 RANK "+Rm()+" \xB7 HITS "+Zs+"/"+Mi+" \xB7 MAX COMBO "+An+" \xB7 NEAR MISS "+qr+(nc?" \xB7 KILLS "+nc:"")+(Qo?" \xB7 BUSTS "+Qo:"")+" \xB7 TOP SPEED "+Math.round(tc)+(o===0?"   \xB7   \u2605 NEW RECORD \u2605":o>0?"   \xB7   TOP "+(o+1):"")),n.style.display="flex"}function Rm(){let n=Mi?Zs/Mi:0;return n>=.95?"S":n>=.85?"A":n>=.7?"B":n>=.5?"C":"D"}function et(n,e){let t=document.getElementById("pops");if(!t)return;t.childElementCount>4&&t.firstElementChild.remove();let s=document.createElement("div");s.className="pop",s.textContent=n,s.style.color=e,s.style.textShadow="0 0 12px "+e,t.appendChild(s),setTimeout(()=>{s.remove()},900)}function Of(n){let e=ai[n-1];hf=e.skyA,p0=e.skyB,Wn.material.map.dispose(),Wn.material.map=Im(e.sun),Wn.material.needsUpdate=!0,ms.material.map.dispose(),ms.material.map=Jm(e.glow),ms.material.needsUpdate=!0,ps.material.map.dispose(),ps.material.map=Dm(e.haze),ps.material.needsUpdate=!0,Fi.fog.color.setHex(e.fog),St.setTrack(e.music),rc=-9,ea(0)}function _0(){let n=document.getElementById("end");n&&(n.style.display="none")}function bb(){St.pause(),to=performance.now(),document.getElementById("dmg").style.opacity=0,cf=!0;let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),s=document.getElementById("btnEndRestart");e&&(e.textContent="STALLED - CITY GOT YOU"),s&&(s.textContent="RETRY"),t&&(t.textContent="SCORE "+Math.round(Re)+"   \xB7   BUSTS "+Qo+"   \xB7   DISTANCE "+Math.round(Df)),n.style.display="flex"}function Cm(){St.pause(),to=performance.now();let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),s=document.getElementById("btnEndRestart");e&&(e.textContent="PUNK BOOSTER"),t&&(t.textContent="TOO FAST TO STOP"),s&&(s.textContent="REPLAY"),n.style.display="flex"}function ta(){if(cf){cf=!1,Jr(),St.restart();return}at=at<ai.length?at+1:1,Of(at),Jr(),St.restart()}document.getElementById("btnEndRestart").addEventListener("click",n=>{n.stopPropagation(),ta()});function Vu(n,e,t,s){let r=(e-n)*t;return r>s&&(r=s),r<-s&&(r=-s),n+r}var rs=0,ii=0,No=60;function Xr(n){let e=vb();if(qn?e&&(Zt?ta():gs()):Bl().any&&no(),oi){let T=Bl();T.up&&(xi=Math.max(0,xi-1),oc()),T.down&&(xi=Math.min(2,xi+1),oc()),T.a&&g0(),T.b&&gs(),rs=0,requestAnimationFrame(Xr);return}if(Zt){performance.now()-to>600&&Bl().any&&ta(),rs=0,requestAnimationFrame(Xr);return}if(!qn){tn.position.z=-8600,tn.scale.setScalar(1.35),tn.position.y=30*.35;for(let T of Jl)T.opacity=.5;for(let T of jl)T.opacity=.88;ms.material.opacity=.5,Wn.scale.setScalar(2.2),Wn.position.y=-560,Math.abs(.85-rc)>.004&&ea(.85),Nt.position.set(0,16,46),Nt.lookAt(0,40,-90),rs=0,Bi.info.reset(),Yo.render(),requestAnimationFrame(Xr);return}if(!Qu){rs=n,requestAnimationFrame(Xr);return}let t=rs?n-rs:16.7,s=rs?Math.min(3,t/33.37):1;rs=n,ii+=s/30,No+=(1e3/Math.max(1,t)-No)*.06;let r=yb(),o=wt.invertY?-r.y:r.y,a=Math.max(Math.abs(r.x),Math.abs(r.y),r.boost,r.brake),l=wt.superhot?wt.timeFloor+(1-wt.timeFloor)*Math.min(1,a/.25):1;gi+=(l-gi)*.25;let c=s*gi;St.setEnergy(gi);let u=wt.turnRate*s,h=1-Math.pow(1-wt.smooth,s);Dn.y=Vu(Dn.y,r.x*wt.stickMod,h,u),Dn.x=Vu(Dn.x,o*wt.stickMod,h,u),Dn.z=Vu(Dn.z,r.x*wt.rollMod,.12,5*s),ls+=(r.boost-ls)*.05;let f=Dn.y*Fr,d=Dn.x*Fr,p=wt.baseSpeed*(1+ls*.45-r.brake*.5)*Sn*(Gt?1.22:1),g=Math.sin(f)*Math.cos(d)*p*wt.lateralGain,y=Math.sin(d)*p*wt.lateralGain,_=Math.cos(f)*Math.cos(d)*p;tt+=g*c,qe+=y*c,tt=Math.max(-wt.boxW,Math.min(wt.boxW,tt)),qe=Math.max(-18,Math.min(wt.boxH,qe)),Xn.position.set(tt,qe,0),kr=Math.max(0,kr-s*.045),Xn.rotation.set(Dn.x*Fr,Dn.y*Fr,-Dn.z*Fr+(kr>0?Em*(1-kr)*Math.PI*2:0)),Gl>0&&(Gl-=s/30,qe+=((Vl>0?-12:82)-qe)*Math.min(1,c*.05));let m=.7+.3*Math.sin(ii*18);for(let T=0;T<lf.length;T++){let N=lf[T],P=T+1;N.position.set(tt-Math.sin(f)*P*1.3,qe+.2,2.6+P*1.35),N.lookAt(Nt.position);let U=(1.2-T*.08)*(.7+.6*a)*m*(Gt?1.5:1)*(1+Math.min(.5,Xe*.02));N.scale.set(U,U,U),N.material.opacity=(.5-T*.045)*(.3+.9*Math.min(1,a*1.4))}let x=_*c,M=Math.min(.1,t/1e3);r.boost>.5&&Sn>.9&&gi>.8?(Os=Math.min(1.4,Os+M),ql=.9):Os>=1.2&&ql>0?ql-=M:Os=Math.max(0,Os-M*2.2),cn=Math.max(0,cn-M),Gt=Os>=1.2||cn>0,gi>.6&&r.boost<.4&&!Zt?Fs+=M*(r.brake>.3?1.6:1):Fs=Math.max(0,Fs-M*2),Fs>2.6&&!Zt&&(Zt=!0,bb()),St.setRedline(Gt),Bl(),Ue=1+Math.min(7,Xe*.12),r.boost>.5&&gi>.8&&(ft=Math.min(1,ft+M*.012)),tc=Math.max(tc,p*gi),Re+=x*.004*Ue*(Gt?1.3:1),Dt=Math.max(0,Dt-M),zo=Math.max(0,zo-M),zs=Math.max(0,zs-M),Vr=Math.max(0,Vr-M),Uu-=M,Uu<=0&&(Uu=2,No<48&&Ui<2.6?(Ui=Math.min(2.6,Ui+.15),Yl()):No>58&&Ui>1.85&&(Ui=Math.max(1.85,Ui-.1),Yl())),Dt>.65&&(d0=0,Hs=0),Sn+=(1-Sn)*Math.min(1,M*1.6);for(let T=0;T<js;T++)Hu[T]=yi[T].position.z,zu[T]=Hu[T]+x;for(let T of xf){let N=T.z0+Hu[T.k],P=T.z0+zu[T.k];if(N<=0&&P>0&&!T.done){T.done=!0;let U=Math.abs(tt-T.x);U>=T.hw-2&&U<T.hw+14&&qe<T.top&&zs<=0&&(zs=.5,ft=Math.min(1,ft+.02),Re+=40,qr++,qr%3===1&&et("NEAR MISS  +40","#2af0ff"))}}for(let T=0;T<js;T++){let N=zu[T];if(yi[T].userData.minZ+N>90){N-=Jo;for(let P of ju[T])P.done=!1}yi[T].position.z=N}for(let T of vf){let N=T.position.z,P=N+x,U=T.userData;if(N<=0&&P>0&&!U.done){U.done=!0;let H=Math.abs(tt-T.position.x);H>=U.hw-2&&H<U.hw+14&&qe<U.top&&zs<=0&&(zs=.5,ft=Math.min(1,ft+.02),Re+=40,qr++,qr%3===1&&et("NEAR MISS  +40","#2af0ff"))}P>90?(T.position.z=P-Jo,U.done=!1):T.position.z=P}for(let T of Af){let N=T.position.z,P=N+x*(1-T.userData.v);N<=0&&P>0&&!T.userData.done&&(T.userData.done=!0,Math.abs(tt-T.position.x)<10&&qe<-8&&zo<=0&&(zo=1.5,Xe+=1,An=Math.max(An,Xe),Re+=200,et("LOW PASS  +200","#ffd24a"))),P>60?(T.position.z=P-UE,T.position.x=wf[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,T.userData.done=!1):T.position.z=P}for(let T of jm){let N=T.userData,P=T.position.z,U=P+x+N.own*c;if(P<=0&&U>0&&!N.done){N.done=!0;let H=N.rx||5,D=N.ry||4,F=Math.abs(tt-T.position.x),G=Math.abs(qe-(T.position.y+(N.cy||0)));if(F<H+2&&G<D+2.5)Dt=1,Sn=.4,Ue=1,Re=Math.max(0,Re-500),ls=0,et("MIDAIR CRASH  -500","#ff4a5a");else if(F<H+13&&G<D+9)if(N.oncoming)Re+=250,Ue=Math.min(8,Ue+.4),et("HEAD-ON PASS  +250","#ff8a5a");else{let Z=Math.round(120*Ue);Re+=Z,Ue=Math.min(8,Ue+.25),et("OVERTAKE  +"+Z,"#c0ff5e")}}if(T.position.z=U,N.strobeA){let H=(ii*5|0)%2===0;N.strobeA.visible=H,N.strobeB.visible=!H}U>80?(T.position.z=U-ku-Math.random()*400,T.position.x=(N.oncoming?-1:1)*(6+Math.random()*24),T.position.y=-12+Math.random()*55,N.done=!1):U<-ku-800&&(T.position.z=U+ku,N.done=!1)}if(Kl.position.z=(Kl.position.z+x)%46,ot)if(Wr>0)Wr-=M,Wr<=0&&(ke.remove(ot),ot=null,e0(-1800));else{let T=-10+Math.min(26,Xe*1.1)+(Gt?8:0)+ft*10-2.5*(at-1)-.5*Math.min(3,Hs)+(Vt&&Vt.mode==="pursuit"?7:0)+(Vt&&Vt.mode==="climax"?13:0)-Kr[ri].punk;ot.position.z+=T*c*.55,ot.position.z<-2900&&(ot.position.z=-2900),ot.position.z>-6&&(ot.position.z=-6),Ul+=c*.02;let N=null;for(let U of ef){let H=U.userData;if(H.type!=="gate"&&H.type!=="fork")continue;let D=ot.position.z-U.position.z;if(D>0&&D<600){if(H.punkGap===void 0&&(H.punkGap=Math.random()<.5?0:1),H.type==="gate"){let F=H.gaps[H.punkGap];N=(F.x0+F.x1)/2}else N=H.punkGap===0?-26:40;break}}N!==null?ot.position.x+=(N-ot.position.x)*Math.min(1,c*.08):ot.position.x=Math.sin(Ul*1.7)*26,ot.position.y=12+Math.sin(Ul*1.13)*10,ot.rotation.z=Math.sin(Ul*1.7)*.25;let P=-ot.position.z;if(!ds&&!Zt&&Vr<=0&&(P<420&&!ko?(ko=!0,Go=!1,Vr=6,et("HE'S RIGHT THERE - FLOOR IT!","#ff2bd6")):P>2400&&!Go&&(Go=!0,ko=!1,Vr=6,et("DON'T LOSE HIM!","#ff2bd6"))),P>=420&&P<=2400&&(ko=!1,Go=!1),P<30&&Math.abs(tt-ot.position.x)<22){Hs++;let U=Math.round(2e3*Ue*(1+.5*(Hs-1)));Re+=U;let H=Xe;Xe+=8,An=Math.max(An,Xe),Gu(H),Qo++,Bt=1,Tn=12,Bs(1,.7,380),et((Hs>1?"BUST x"+Hs+"!":"BUSTED!")+"  +"+U,"#2af0ff"),ot.visible=!1,Wr=2,ds&&(Zt=!0,Cm())}else P>3200&&(Re=Math.max(0,Re-800),et("PUNK ESCAPED  -800","#ff5a5f"),ot.position.z=-1600)}if(Bt=Math.max(0,Bt-M*1.6),!qs&&qn&&St.time()>.5&&St.duration()>10&&ub(),qs){let T=St.time()+kE/1e3,N=Kr[ri].tol;for(ft>=1&&cn<=0&&(cn=6,ft=0,et("\u2605 OVERDRIVE \u2605","#ffd24a"),Tn=10,Bs(.8,.6,320));Vs<$t.length&&($t[Vs].t-T)*1e3*xm<dc;){let D=$t[Vs],F=D.kind==="gate"?nb(D.cell):D.kind==="bar"?hb(D.axis,D.idx):$E(D.cell);si.push({t:D.t,cell:D.cell,kind:D.kind||"ring",axis:D.axis,idx:D.idx,g:F,judged:(D.t-T)*1e3<-60}),Vs++}if(o0.opacity=.38+.25*Math.sin(ii*12),Xl-=M,Xl<=0&&(Xl=.15,sc.push([Math.round(T*100)/100,Math.round(tt),Math.round(qe)])),hs&&hs.length>1){for(;Gr<hs.length-2&&hs[Gr+1][0]<T;)Gr++;let D=hs[Gr],F=hs[Gr+1],G=Math.max(0,Math.min(1,(T-D[0])/Math.max(.01,F[0]-D[0])));Ys.visible=!0,Ys.position.set(D[1]+(F[1]-D[1])*G,D[2]+(F[2]-D[2])*G,-14)}for(let D of ic){if(D.t<=0)continue;D.t-=M*3.2;let F=(1+(1-Math.max(0,D.t))*1.7)*(D.mag||1);D.m.scale.set(F,F,1),D.m.material.opacity=Math.max(0,D.t)*.9,D.t<=0&&(D.m.visible=!1)}for(let D=si.length-1;D>=0;D--){let F=si[D],G=(F.t-T)*1e3;if(F.g.position.z=-G*xm,F.kind==="ring"){F.g.rotation.z+=.04*c;let Z=G<700;F.g.children[0].material=Z?YE:t0,F.g.children[1].material=Z?KE:n0;let J=1+Math.max(0,(500-Math.abs(G))/500)*.3;F.g.scale.set(J,J,1)}if(!F.judged&&G<=60)if(F.judged=!0,F.kind==="gate"){let Z=Math.abs(tt-un[F.cell[0]]),J=Math.abs(qe-nn[F.cell[1]]);if(Z<26*N&&J<18*N){let ue=Xe;Xe+=2,An=Math.max(An,Xe),Zs++,Gu(ue),ft=Math.min(1,ft+.08);let Y=Math.round(350*(1+Xe*.06)*(cn>0?2:1));Re+=Y,Wl(un[F.cell[0]],nn[F.cell[1]],8060826),et("GATE  +"+Y,"#7aff9a"),Bt=Math.max(Bt,.22)}else Xe=0,ft=Math.max(0,ft-.15),Re=Math.max(0,Re-300),et("GATE SLAM  -300","#ff5a5f"),Dt=Math.max(Dt,.5),Sn=.6,Bs(.9,.5,220)}else if(F.kind==="bar")if(F.axis==="row"?Math.abs(qe-nn[F.idx])<17/N:Math.abs(tt-un[F.idx])<24/N)Xe=0,ft=Math.max(0,ft-.1),Re=Math.max(0,Re-200),et("BAR HIT  -200","#ff5a5f"),Dt=Math.max(Dt,.45),Bs(.85,.5,200);else{Zs++;let J=Math.round(60*(cn>0?2:1));Re+=J,ft=Math.min(1,ft+.03),et("DODGE  +"+J,"#9ad0ff")}else{let Z=Math.abs(tt-un[F.cell[0]]),J=Math.abs(qe-nn[F.cell[1]]),ue=Z<26*N&&J<18*N,Y=Z<13*N&&J<9*N;if(ue){let j=Xe;Xe++,An=Math.max(An,Xe),Zs++,Gu(j),ft=Math.min(1,ft+(Y?.09:.05));let ce=Math.round((Y?300:150)*(1+Xe*.06)*(cn>0?2:1));Re+=ce,F.g.visible=!1,Wl(un[F.cell[0]],nn[F.cell[1]],Y?sn:Jt,1+Math.min(1,Xe*.03)),et((Y?"PERFECT":"GOOD")+"  +"+ce+(Xe>4?"   x"+Xe:""),Y?"#ff2bd6":"#2af0ff"),Bs(Y?.5:.22,.3,60),Y&&(Bt=Math.max(Bt,.18),Tn=Math.max(Tn,2.5))}else Xe=0,ft=Math.max(0,ft-.15),Re=Math.max(0,Re-100),et("MISS  -100","#ff5a5f"),Dt=Math.max(Dt,.25),Bs(.7,.4,160)}G<-400&&(ke.remove(F.g),si.splice(D,1))}for(;us<$t.length&&$t[us].t<T;)us++;let P=$t[us],U=$t[us+1];for(let D of Cf){let F="";P&&(P.kind==="bar"?(P.axis==="row"&&D.r===P.idx||P.axis==="col"&&D.c===P.idx)&&(F="nb"):D.c===P.cell[0]&&D.r===P.cell[1]&&(F="nx")),!F&&U&&U.kind!=="bar"&&D.c===U.cell[0]&&D.r===U.cell[1]&&(F="n2"),D.el.className=F}if(Gs)for(let D of Rf){let F=P&&P.kind!=="bar"&&D.cx===P.cell[0]&&D.cy===P.cell[1],G=U&&U.kind!=="bar"&&D.cx===U.cell[0]&&D.cy===U.cell[1];D.m.material.opacity=F?.5+.25*Math.sin(ii*14):G?.22:cn>0?.16:.07,D.m.material.color.setHex(cn>0?16765514:F?sn:2814207)}{let D=60/(Uo[at]||120),F=(T-(Bo[at]||0))/D,G=F%1,Z=document.getElementById("grid9");Z&&(Z.style.opacity=(.65+.3*(1-G)).toFixed(2));let J=F/4%1;vm=Math.max(0,1-J*5)*.07}{let D=null;if(Ql){for(let F of Ql)if(T>=F.t0&&T<F.t1){D=F;break}}D!==Vt&&(Vt=D,D&&D.turn&&(Fo+=D.turn*Math.PI/2,et(D.turn>0?"HARD RIGHT!":"HARD LEFT!","#ff8a3c"),Tn=Math.max(Tn,8),kr=1,Em=D.turn>0?1:-1),D&&D.dive&&(Vl=D.dive,Gl=1.4,et(Vl>0?"DIVE!":"CLIMB!","#9ad0ff"),Tn=Math.max(Tn,7)),D&&D.label&&et(D.label,D.mode==="combat"?"#ff5a5f":"#ffd24a"))}if(Vt&&(Vt.mode==="combat"||Vt.mode==="climax"&&at>=3)){let D=Vt.mode==="climax",F=60/(Uo[at]||120),G=Math.floor((T-(Bo[at]||0))/F);if(G!==rf&&G%(D?4:ri===2?1:2)===0){rf=G;let Z=Yr.find(J=>!J.on);Z&&(Z.on=!0,Z.type=at>=3&&Math.random()<.3?"heavy":Math.random()<.4?"sweeper":"drone",Z.hp=Z.type==="heavy"?3:1,Z.cx=Math.random()*3|0,Z.cy=Math.random()*3|0,Z.g.position.set(un[Z.cx],nn[Z.cy],-880),Z.g.scale.setScalar(Z.type==="heavy"?1.7:1),Z.body.material=Z.type==="heavy"?sf.h:sf.d,Z.g.visible=!0)}}for(let D of Yr)D.on&&(D.ph+=c*.05,D.g.position.z+=2.4*c,D.g.rotation.y+=.06*c,D.type==="sweeper"&&(D.g.position.x=un[D.cx]+Math.sin(D.ph)*34),D.g.position.z>-40&&(D.on=!1,D.g.visible=!1));if(Ho=Math.max(0,Ho-M*Math.max(.25,gi)),(hn.KeyX||pc||r.fire>.5)&&Ho<=0&&!Zt){Ho=.14;let D=Xo.find(F=>!F.on);if(D){let F=60/(Uo[at]||120),G=((T-(Bo[at]||0))/F%1+1)%1;D.on=!0,D.onBeat=G<.12||G>.88,D.m.position.set(tt,qe,-6),D.m.visible=!0}}for(let D of Xo){if(!D.on)continue;let F=D.m.position.z;if(D.m.position.z-=30*c,D.m.position.z<-940){D.on=!1,D.m.visible=!1;continue}for(let G of Yr)if(G.on&&Math.abs(D.m.position.x-G.g.position.x)<15&&Math.abs(D.m.position.y-G.g.position.y)<13&&G.g.position.z>D.m.position.z-28&&G.g.position.z<F+28){if(D.on=!1,D.m.visible=!1,G.hp-=D.onBeat?2:1,G.hp<=0){G.on=!1,G.g.visible=!1,nc++,Wl(G.g.position.x,G.g.position.y,16765514);let Z=Math.round((G.type==="heavy"?400:150)*(D.onBeat?2:1)*(cn>0?2:1));Re+=Z,ft=Math.min(1,ft+.05),Xe++,An=Math.max(An,Xe),et((D.onBeat?"BEAT KILL":"KILL")+"  +"+Z,D.onBeat?"#ffd24a":"#c0ff5e"),Bt=Math.max(Bt,.15)}else et("HIT","#9ad0ff");break}}}for(let T of ef){let N=T.userData,P=T.position.z,U=P+x;if(T.position.z=U,U-N.len>200&&(T.position.z=U-zE,N.passed=!1,N.hit=!1,N.punkGap=void 0,N.side=void 0,N.pts))for(let H of N.pts)H.done=!1;if(!ds)if(N.type==="gate"){if(P<=0&&U>0&&!N.passed){N.passed=!0;let H=N.gaps.find(D=>tt>D.x0+2.5&&tt<D.x1-2.5);if(qe<N.top+1&&!H)Dt=1,Sn=.35,Ue=1,Re=Math.max(0,Re-800),ls=0,et("GATE CRASH  -800","#ff4a5a");else if(qe<N.top+1&&H&&H.narrow){let D=Math.round(300*Ue*(Gt?1.5:1));Ue=Math.min(8,Ue+.8),Re+=D,Bt=Math.max(Bt,.3),et("THREAD THE NEEDLE  +"+D,"#ff2bd6")}}}else if(N.type==="scurve"){if(P<=0&&U>0&&!N.passed&&(N.passed=!0,qe<N.top+1&&tt<N.g1+2&&(Dt=1,Sn=.4,Ue=1,Re=Math.max(0,Re-600),et("WALL  -600","#ff4a5a"))),P-N.len<=0&&U-N.len>0&&!N.hit){if(N.hit=!0,qe<N.top+1&&tt>N.g2-2)Dt=1,Sn=.4,Ue=1,Re=Math.max(0,Re-600),et("WALL  -600","#ff4a5a");else if(qe<N.top+1){let H=Math.round(220*Ue*(Gt?1.5:1));Ue=Math.min(8,Ue+.5),Re+=H,et("S-LINE  +"+H,"#c0ff5e")}}}else if(N.type==="bridge"){if(P<=0&&U>0&&!N.passed){if(N.passed=!0,qe>N.yLow-1&&qe<N.yHigh+1)Dt=.9,Sn=.45,Ue=Math.max(1,Ue-2),Re=Math.max(0,Re-400),et("BRIDGE SLAM  -400","#ff4a5a");else if(qe<=N.yLow-1){let H=Math.round(250*Ue*(Gt?1.5:1));Ue=Math.min(8,Ue+.5),Re+=H,Bt=Math.max(Bt,.25),et("UNDERPASS  +"+H,"#ffd24a")}}}else if(N.type==="fork"){let H=T.position.z>0&&T.position.z-N.len<0,D=T.position.z>0&&T.position.z-N.lenL<0;if(P<=0&&U>0&&!N.passed&&(N.passed=!0,N.side=qe<N.top+1?tt<0?"L":"R":null),H&&qe<N.top+1&&!N.hit&&(Math.abs(tt)<N.divH+3||D&&tt<N.lXin-2||tt>N.rXout+2)&&(N.hit=!0,Dt=.9,Sn=.45,Ue=Math.max(1,Ue-2),Re=Math.max(0,Re-500),et("FORK CRASH  -500","#ff4a5a")),P-N.lenL<=0&&U-N.lenL>0&&N.side==="L"&&qe<N.top+1&&!N.hit){let F=Math.round(350*Ue*(Gt?1.5:1));Ue=Math.min(8,Ue+.8),Re+=F,Bt=Math.max(Bt,.3),et("SHORTCUT  +"+F,"#ff2bd6")}if(P-N.len<=0&&U-N.len>0&&N.side==="R"&&qe<N.top+1&&!N.hit){let F=Math.round(120*Ue*(Gt?1.5:1));Ue=Math.min(8,Ue+.3),Re+=F,et("SAFE LINE  +"+F,"#2af0ff")}}else if(N.type==="slalom")for(let H of N.pts){let D=P+H.z,F=U+H.z;if(D<=0&&F>0&&!H.done){H.done=!0;let G=Math.abs(tt-H.x);if(G<8&&qe<90)Dt=.7,Sn=.55,Ue=Math.max(1,Ue-1.5),Re=Math.max(0,Re-300),et("PYLON  -300","#ff4a5a");else if(G<20&&qe<90){let Z=Math.round(120*Ue*(Gt?1.5:1));Ue=Math.min(8,Ue+.25),Re+=Z,et("SLALOM  +"+Z,"#2af0ff")}}}else{let H=T.position.z>0&&T.position.z-N.len<0;H&&!N.hit&&(Math.abs(tt)>N.xLim||N.yLim!==void 0&&qe>N.yLim)&&(N.hit=!0,Dt=.8,Sn=.5,Ue=Math.max(1,Ue-2),Re=Math.max(0,Re-400),et("WALL SCRAPE  -400","#ff4a5a")),H||(N.hit=!1)}}eo.offset.y+=x/bE,Qr.offset.y+=x/150,Ol.position.z=(Ol.position.z+x)%90,Om.position.z=Ol.position.z;for(let T of Fm)T.position.z+=x*T.userData.rel,T.position.z>60&&(T.position.z-=5900),T.position.z<-5900&&(T.position.z+=5900);for(let T of Fl)T.position.z+=x,T.position.z>300&&(T.position.z-=Ym);for(let T of qm)T.rotation.z+=T.userData.spin*c*.03;for(let T of Hm)T.position.x+=T.userData.vx*c*2,T.position.z+=x,T.position.x>1400&&(T.position.x=-1400),T.position.x<-1400&&(T.position.x=1400),T.position.z>-400&&(T.position.z-=3400);for(let T of Ju)T.rotation.y+=.05*c;for(let T of zm)T.position.z+=x,T.position.z>200&&(T.position.z-=6300),T.rotation.z=Math.sin(ii*T.userData.sp+T.userData.ph)*.45;for(let T of km)T.position.z+=x,T.position.z>100&&(T.position.z-=6e3);for(let T of Gm)T.position.z+=x,T.position.z>40&&(T.position.z-=6080);for(let T of Vm)T.position.z+=x,T.position.z>60&&(T.position.z-=6200);for(let T of Wm)T.position.z+=x,T.position.z>80&&(T.position.z-=6e3);Df+=x,vn=Math.min(1,$s>0?St.time()/$s:0),tn.position.z=Ef*(1-vn);let I=1+vn*.85;tn.scale.set(I,I,I),tn.position.y=30*(I-1);{let T=(Vt&&Vt.curve||0)+(Vt&&Vt.weave?Math.sin(St.time()*.85)*Vt.weave:0);os+=(T-os)*Math.min(1,M*.9),as+=(Fo-as)*Math.min(1,M*2);let N=16800,P=Fo-as;Wn.position.x=-Math.sin(as)*N-os*3200,Wn.position.z=-Math.cos(as)*N,Wn.rotation.y=as,tn.rotation.y=P*.8,tn.position.x=-os*2600,ps.rotation.y=P*.8,ps.position.x=-os*1300,ps.position.z=-6e3}let R=vn*vn;for(let T of Jl)T.opacity=.12+.88*R;for(let T of jl)T.opacity=.42+.55*vn;ms.material.opacity=.14+.5*Math.pow(vn,1)+vm,Pf.opacity=.5*(1-vn*.92),Math.abs(vn-rc)>.004&&ea(vn),ds&&!Zt&&qs&&St.time()>28&&(Zt=!0,Cm()),qs&&$t.length&&Vs>=$t.length&&si.length===0?(kl+=M,kl>2&&(Zt=!0,Eb())):kl=0,uc.position.x=tt*.04;let C=(a*.6+Dt*4+(Gt?.35:0))*Oo;Nt.position.x+=(tt*.45+os*12+(Math.random()-.5)*C-Nt.position.x)*.16,Nt.position.y+=(qe*.4+16+(Math.random()-.5)*C-Nt.position.y)*.16,Nt.position.z=46-ls*5-(Gt?3:0);let B=66+ls*4+(Gt?12:0)+Tn;if(Tn+=(0-Tn)*Math.min(1,M*5),Math.abs(Nt.fov-B)>.05&&(Nt.fov+=(B-Nt.fov)*.08,Nt.updateProjectionMatrix()),Ko.strength+=((Gt?1.25:.9)-Ko.strength)*.08,Vo.opacity+=((Gt?.7:Xe>=25?.3:0)-Vo.opacity)*.1,Vo.color.setHex(cn>0?16766826:10479871),Vo.opacity>.02){Js.visible=!0,Js.position.set(tt,qe+.2,0);for(let T=0;T<Nf;T++){let N=m0[T];if(N.z+=p*c*N.v*.9,N.z>26){N.z=-150-Math.random()*40;let U=Math.random()*Math.PI*2,H=6+Math.random()*16;N.x=Math.cos(U)*H,N.y=Math.sin(U)*H*.62}let P=T*6;ks[P]=N.x,ks[P+1]=N.y,ks[P+2]=N.z,ks[P+3]=N.x,ks[P+4]=N.y,ks[P+5]=N.z-N.len}Uf.attributes.position.needsUpdate=!0}else Js.visible=!1;Nt.lookAt(tt*.6,qe*.6+6,-90),Nt.rotation.z+=-(Fo-as)*.55-os*.2-Dn.z*Fr*.3,Wn.scale.setScalar(1.3+vn*.9+vn*vn*1.6),Wn.position.y=-470+vn*340,document.getElementById("hud").textContent=`PUNK BOOSTER
SONG ${at} \xB7 ${ai[at-1].name} \xB7 ${Kr[ri].name}   ${Lf==="none"?"keyboard":"pad ok"}`+(ec?`
${No.toFixed(0)} fps \xB7 ${mm} dc \xB7 PIX ${Ui.toFixed(2)}`:"")+(ec?(()=>{let T=(St.time()-(Bo[at]||0))/(60/(Uo[at]||120)),N=un.reduce((U,H,D)=>Math.abs(tt-H)<Math.abs(tt-un[U])?D:U,0),P=nn.reduce((U,H,D)=>Math.abs(qe-H)<Math.abs(qe-nn[U])?D:U,0);return`
BEAT ${T|0} \xB7 BAR ${T/4|0} \xB7 PH ${Math.max(0,T%1).toFixed(2)} \xB7 CELL ${N},${P} \xB7 FLOW ${ft*100|0}% \xB7 RATE ${(.9+.1*gi).toFixed(2)} \xB7 SEC ${Vt?Vt.mode:"-"} \xB7 PUNK ${ot?Math.round(-ot.position.z)+"m":"-"} \xB7 NOTES ${si.length} \xB7 DRONES ${Yr.filter(U=>U.on).length} \xB7 LASER ${Xo.filter(U=>U.on).length}`})():"");let v=document.getElementById("score");v.textContent=`SCORE ${String(Math.round(Re)).padStart(6,"0")}
\xD7${Ue.toFixed(1)}${Xe>1?`
COMBO `+Xe:""}`,v.style.color=Ue>=6?"#ff2bd6":Ue>=3?"#2af0ff":"#ffe08a",document.getElementById("dmg").style.opacity=Dt>0?(Math.min(1,Dt)*Xs).toFixed(2):Fs>1.2?((.16+.14*Math.sin(ii*12))*Xs).toFixed(2):0,document.getElementById("bustfx").style.opacity=Bt>0?(Bt*Xs).toFixed(2):0;{let T=Math.max(0,Math.min(1,cn>0?1:ft));document.getElementById("sbneedle").style.left=(T*277).toFixed(0)+"px"}let S=document.getElementById("sblabel");cn>0?(S.textContent="\u2605 OVERDRIVE \u2605",S.style.color="#ffd24a",S.style.opacity=(.7+.3*Math.sin(ii*10)).toFixed(2)):Fs>1.2?(S.textContent="CRITICAL SPEED",S.style.color="#ff2b3c",S.style.opacity=(.5+.5*Math.sin(ii*14)).toFixed(2)):Gt?(S.textContent="REDLINE",S.style.color="#ff2bd6",S.style.opacity=(.7+.3*Math.sin(ii*10)).toFixed(2)):ft>.8?(S.textContent="FLOW MAX...",S.style.color="#2af0ff",S.style.opacity=(.6+.4*Math.sin(ii*8)).toFixed(2)):(S.textContent="",S.style.opacity=1);{let T=document.getElementById("combometer");Xe>1&&qn&&!Zt?(T.textContent="\xD7"+Xe,T.style.color=Xe>=25?"#ffd24a":Xe>=10?"#ff2bd6":"#2af0ff",T.style.fontSize=Xe>=25?"58px":Xe>=10?"46px":"36px",T.classList.toggle("hot",Xe>=25),T.style.display="block",Xe>nf&&(T.classList.remove("pop"),T.offsetWidth,T.classList.add("pop"))):(T.style.display="none",T.classList.remove("hot")),nf=Xe}let z=document.getElementById("punkui");if(ot)if(Wr>0)z.textContent="PUNK DOWN - NEXT INBOUND",z.style.color="#2af0ff";else{let T=Math.max(0,Math.round(-ot.position.z));z.textContent="\u25E4 PUNK  "+T+"m",z.style.color=T<400?"#2af0ff":T>2400?"#ff5a5f":"#ffe08a"}Bi.info.reset(),Yo.render(),mm=Bi.info.render.calls,requestAnimationFrame(Xr)}requestAnimationFrame(Xr);window.P=wt;var St=(function(){let n=null,e=!1,t=1,s=0,r=0,o=null,a=134,l=60/a,c=l/4,u=B=>440*Math.pow(2,(B-69)/12),h=[{root:33,arp:[57,60,64,69],chord:[57,60,64]},{root:29,arp:[53,57,60,65],chord:[53,57,60]},{root:36,arp:[60,64,67,72],chord:[60,64,67]},{root:31,arp:[55,59,62,67],chord:[55,59,62]}];function f(B,v,S,z,T,N){let P=n.createOscillator(),U=n.createGain();return P.type=B,P.frequency.setValueAtTime(v,S),U.gain.setValueAtTime(0,S),U.gain.linearRampToValueAtTime(T,S+.008),U.gain.exponentialRampToValueAtTime(1e-4,S+z),P.connect(U),U.connect(N),P.start(S),P.stop(S+z+.02),P}function d(B,v,S,z,T){let N=Math.floor(n.sampleRate*v),P=n.createBuffer(1,N,n.sampleRate),U=P.getChannelData(0);for(let G=0;G<N;G++)U[G]=Math.random()*2-1;let H=n.createBufferSource();H.buffer=P;let D=n.createBiquadFilter();D.type="highpass",D.frequency.value=z;let F=n.createGain();F.gain.setValueAtTime(S,B),F.gain.exponentialRampToValueAtTime(1e-4,B+v),H.connect(D),D.connect(F),F.connect(T),H.start(B),H.stop(B+v+.02)}function p(B,v){let S=n.createOscillator(),z=n.createGain();S.type="sine",S.frequency.setValueAtTime(160,B),S.frequency.exponentialRampToValueAtTime(48,B+.12),z.gain.setValueAtTime(.9,B),z.gain.exponentialRampToValueAtTime(1e-4,B+.18),S.connect(z),z.connect(v),S.start(B),S.stop(B+.2)}let g,y,_,m;function x(){for(;r<n.currentTime+.12;){let B=r,v=Math.floor(s/16)%h.length,S=h[v],z=s%16;z%4===0&&p(B,m),z%2===1&&d(B,.03,.18*t,7e3,m),(z===4||z===12)&&d(B,.14,.35*t,1800,m),z%2===0&&f("square",u(S.root),B,c*1.8,.16,_);let T=S.arp[z%S.arp.length]+(z>=8?12:0);if(f("square",u(T),B,c*.9,.1*t,y),z===0)for(let N of S.chord)f("sawtooth",u(N+12),B,l*.9,.05,y);s++,r+=c}o=setTimeout(x,25)}let M=null,E="vice-runway.mp3",I=!1;function R(B){if(!M||I)return;let v=M.play();v&&v.then?(I=!0,v.then(()=>{I=!1,e=!0}).catch(S=>{I=!1,console.warn("[audio] play() abgelehnt ("+B+"):",S&&S.name,S&&S.message)})):e=!0}function C(){if(M)try{M.pause()}catch{}M=new Audio(E),M.loop=!0,M.volume=typeof cs<"u"?cs:1;try{M.preservesPitch=!1,M.mozPreservesPitch=!1}catch{}R("load")}return{start(){e||(M?R("start"):C())},setTrack(B){B!==E&&(E=B,(e||M)&&C())},time(){return Nl?qn?(Io||(Io=performance.now()),(performance.now()-Io)/1e3):0:M&&M.currentTime||0},duration(){return Nl?VE[at]||130:M&&isFinite(M.duration)?M.duration:0},setVolume(B){M&&(M.volume=B)},setEnergy(B){M&&(M.playbackRate=.9+.1*Math.max(0,Math.min(1,B)))},setRedline(B){},pause(){M&&M.pause()},stop(){if(M)try{M.pause(),M.currentTime=0}catch{}e=!1,Nl&&(Io=0)},resume(){M&&R("resume")},restart(){if(Nl&&(Io=performance.now()),M){try{M.currentTime=0}catch{}R("restart")}}}})(),qn=!1;function no(){if(St.start(),qn)return;qn=!0,mc(!0),ke.visible=!0;let n=document.getElementById("start");n&&(n.style.display="none")}document.getElementById("start").addEventListener("click",no);addEventListener("pointerdown",()=>{if(Zt){performance.now()-to>600&&ta();return}no()});{let n=document.getElementById("menu");if(n){n.addEventListener("pointerdown",r=>{r.stopPropagation()}),n.addEventListener("click",r=>{r.stopPropagation()}),n.querySelectorAll(".lv").forEach(r=>r.addEventListener("click",()=>{n.querySelectorAll(".lv").forEach(o=>o.classList.remove("sel")),r.classList.add("sel"),at=+r.dataset.lv,Of(at),qo()})),n.querySelectorAll(".df").forEach(r=>r.addEventListener("click",()=>{n.querySelectorAll(".df").forEach(o=>o.classList.remove("sel")),r.classList.add("sel"),ri=+r.dataset.df,qo()})),qo(),location.hostname.endsWith("github.io")?document.getElementById("modeswitch").style.display="none":document.getElementById("modeswitch").addEventListener("click",()=>{location.href="v3/"});let e=(r,o,a)=>{let l=document.getElementById(r),c=()=>l.classList.toggle("sel",o());c(),l.addEventListener("click",()=>{a(),c()})};e("setCrt",()=>Hr,()=>{Hr=!Hr,localStorage.setItem("pb_crt",Hr?"1":"0"),document.getElementById("crt").style.display=Hr?"":"none"}),e("setFlash",()=>Xs===1,()=>{Xs=Xs===1?.35:1,localStorage.setItem("pb_flash",Xs===1?"1":"0")}),e("setShake",()=>Oo===1,()=>{Oo=Oo===1?.35:1,localStorage.setItem("pb_shake",Oo===1?"1":"0")}),e("setRecep",()=>Gs,()=>{Gs=!Gs,localStorage.setItem("pb_recep",Gs?"1":"0"),Rf.forEach(r=>r.m.visible=Gs)}),wt.invertY=localStorage.getItem("pb_inverty")==="1",e("setInvY",()=>wt.invertY,()=>{wt.invertY=!wt.invertY,localStorage.setItem("pb_inverty",wt.invertY?"1":"0")}),document.getElementById("crt").style.display=Hr?"":"none";let t=document.getElementById("setVol"),s=()=>t.textContent="VOL "+Math.round(cs*100)+"%";s(),t.addEventListener("click",()=>{cs=cs>.9?.7:cs>.6?.4:1,localStorage.setItem("pb_vol",cs),St.setVolume(cs),s()})}}if(location.hash.startsWith("#auto")){qn=!0,ke.visible=!0,mc(!0);let n=document.getElementById("start");n&&(n.style.display="none")}{let n=location.hash.match(/lv(\d)/);if(n){let e=Math.max(1,Math.min(ai.length,+n[1]));at=e,Of(e)}}ds&&(document.getElementById("hud").style.display="none",setTimeout(()=>no(),600))});Sb();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
