(()=>{var ei=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(s){throw t=[s],s}};var bg=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function si(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function Bu(n,e){return(n%e+e)%e}function S_(n,e,t,s,r){return s+(n-e)*(r-s)/(t-e)}function T_(n,e,t){return n!==e?(t-n)/(e-n):0}function Ao(n,e,t){return(1-t)*n+t*e}function A_(n,e,t,s){return Ao(n,e,1-Math.exp(-t*s))}function w_(n,e=1){return e-Math.abs(Bu(n,e*2)-e)}function R_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function C_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function P_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function L_(n,e){return n+Math.random()*(e-n)}function I_(n){return n*(.5-Math.random())}function D_(n){n!==void 0&&(xp=n);let e=xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function N_(n){return n*Ir}function U_(n){return n*Hr}function $h(n){return(n&n-1)===0&&n!==0}function B_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function O_(n,e,t,s,r){let o=Math.cos,a=Math.sin,l=o(t/2),c=a(t/2),u=o((e+s)/2),h=a((e+s)/2),f=o((e-s)/2),d=a((e-s)/2),p=o((s-e)/2),g=a((s-e)/2);switch(r){case"XYX":n.set(l*h,c*f,c*d,l*u);break;case"YZY":n.set(c*d,l*h,c*f,l*u);break;case"ZXZ":n.set(c*f,c*d,l*h,l*u);break;case"XZX":n.set(l*h,c*g,c*p,l*u);break;case"YXY":n.set(c*p,l*h,c*g,l*u);break;case"ZYZ":n.set(c*g,c*p,l*h,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function zm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function F_(){let n=Io("canvas");return n.style.display="block",n}function wo(n){n in vp||(vp[n]=!0,console.warn(n))}function Dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ph(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function mh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function _h(n,e,t,s,r){for(let o=0,a=n.length-3;o<=a;o+=3){Is.fromArray(n,o);let l=r.x*Math.abs(Is.x)+r.y*Math.abs(Is.y)+r.z*Math.abs(Is.z),c=e.dot(Is),u=t.dot(Is),h=s.dot(Is);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}function Ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function j_(n,e,t,s,r,o,a,l){let c;if(e.side===Rn?c=s.intersectTriangle(a,o,r,!0,l):c=s.intersectTriangle(r,o,a,e.side===Mi,l),c===null)return null;Qa.copy(l),Qa.applyMatrix4(n.matrixWorld);let u=t.ray.origin.distanceTo(Qa);return u<t.near||u>t.far?null:{distance:u,point:Qa.clone(),object:n}}function el(n,e,t,s,r,o,a,l,c,u){n.getVertexPosition(l,Er),n.getVertexPosition(c,br),n.getVertexPosition(u,Sr);let h=j_(n,e,t,s,Er,br,Sr,ja);if(h){r&&(Za.fromBufferAttribute(r,l),$a.fromBufferAttribute(r,c),Ja.fromBufferAttribute(r,u),h.uv=Fs.getInterpolation(ja,Er,br,Sr,Za,$a,Ja,new ue)),o&&(Za.fromBufferAttribute(o,l),$a.fromBufferAttribute(o,c),Ja.fromBufferAttribute(o,u),h.uv1=Fs.getInterpolation(ja,Er,br,Sr,Za,$a,Ja,new ue),h.uv2=h.uv1),a&&(Np.fromBufferAttribute(a,l),Up.fromBufferAttribute(a,c),Bp.fromBufferAttribute(a,u),h.normal=Fs.getInterpolation(ja,Er,br,Sr,Np,Up,Bp,new I),h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1));let f={a:l,b:c,c:u,normal:new I,materialIndex:0};Fs.getNormal(Er,br,Sr,f.normal),h.face=f}return h}function kr(n){let e={};for(let t in n){e[t]={};for(let s in n[t]){let r=n[t][s];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=r.clone():Array.isArray(r)?e[t][s]=r.slice():e[t][s]=r}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let s=kr(n[t]);for(let r in s)e[r]=s[r]}return e}function Q_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gm(n){return n.getRenderTarget()===null?n.outputColorSpace:at.workingColorSpace}function Vm(){let n=null,e=!1,t=null,s=null;function r(o,a){t(o,a),s=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(s=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function sy(n,e){let t=e.isWebGL2,s=new WeakMap;function r(u,h){let f=u.array,d=u.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,f,d),u.onUploadCallback();let y;if(f instanceof Float32Array)y=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=n.SHORT;else if(f instanceof Uint32Array)y=n.UNSIGNED_INT;else if(f instanceof Int32Array)y=n.INT;else if(f instanceof Int8Array)y=n.BYTE;else if(f instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,h,f){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&g.length===0&&n.bufferSubData(f,0,d),g.length!==0){for(let y=0,_=g.length;y<_;y++){let m=g[y];t?n.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),s.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);let h=s.get(u);h&&(n.deleteBuffer(h.buffer),s.delete(u))}function c(u,h){if(u.isGLBufferAttribute){let d=s.get(u);(!d||d.version<u.version)&&s.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);let f=s.get(u);if(f===void 0)s.set(u,r(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,u,h),f.version=u.version}}return{get:a,remove:l,update:c}}function Fx(n,e,t,s,r,o,a){let l=new xe(0),c=o===!0?0:1,u,h,f=null,d=0,p=null;function g(_,m){let x=!1,M=m.isScene===!0?m.background:null;M&&M.isTexture&&(M=(m.backgroundBlurriness>0?t:e).get(M)),M===null?y(l,c):M&&M.isColor&&(y(M,1),x=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?s.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Zl)?(h===void 0&&(h=new j(new Ze(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:kr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=at.getTransfer(M.colorSpace)!==St,(f!==M||d!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new j(new Oe(2,2),new on({name:"BackgroundMaterial",uniforms:kr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=at.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function y(_,m){_.getRGB(nl,Gm(n)),s.buffers.color.setClear(nl.r,nl.g,nl.b,m,a)}return{getClearColor:function(){return l},setClearColor:function(_,m=1){l.set(_),c=m,y(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,y(l,c)},render:g}}function Hx(n,e,t,s){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=s.isWebGL2?null:e.get("OES_vertex_array_object"),a=s.isWebGL2||o!==null,l={},c=_(null),u=c,h=!1;function f(O,H,$,S,C){let F=!1;if(a){let G=y(S,$,H);u!==G&&(u=G,p(u.object)),F=m(O,S,$,C),F&&x(O,S,$,C)}else{let G=H.wireframe===!0;(u.geometry!==S.id||u.program!==$.id||u.wireframe!==G)&&(u.geometry=S.id,u.program=$.id,u.wireframe=G,F=!0)}C!==null&&t.update(C,n.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,D(O,H,$,S),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function d(){return s.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function p(O){return s.isWebGL2?n.bindVertexArray(O):o.bindVertexArrayOES(O)}function g(O){return s.isWebGL2?n.deleteVertexArray(O):o.deleteVertexArrayOES(O)}function y(O,H,$){let S=$.wireframe===!0,C=l[O.id];C===void 0&&(C={},l[O.id]=C);let F=C[H.id];F===void 0&&(F={},C[H.id]=F);let G=F[S];return G===void 0&&(G=_(d()),F[S]=G),G}function _(O){let H=[],$=[],S=[];for(let C=0;C<r;C++)H[C]=0,$[C]=0,S[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:S,object:O,attributes:{},index:null}}function m(O,H,$,S){let C=u.attributes,F=H.attributes,G=0,W=$.getAttributes();for(let N in W)if(W[N].location>=0){let q=C[N],Q=F[N];if(Q===void 0&&(N==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),N==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),q===void 0||q.attribute!==Q||Q&&q.data!==Q.data)return!0;G++}return u.attributesNum!==G||u.index!==S}function x(O,H,$,S){let C={},F=H.attributes,G=0,W=$.getAttributes();for(let N in W)if(W[N].location>=0){let q=F[N];q===void 0&&(N==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),N==="instanceColor"&&O.instanceColor&&(q=O.instanceColor));let Q={};Q.attribute=q,q&&q.data&&(Q.data=q.data),C[N]=Q,G++}u.attributes=C,u.attributesNum=G,u.index=S}function M(){let O=u.newAttributes;for(let H=0,$=O.length;H<$;H++)O[H]=0}function E(O){L(O,0)}function L(O,H){let $=u.newAttributes,S=u.enabledAttributes,C=u.attributeDivisors;$[O]=1,S[O]===0&&(n.enableVertexAttribArray(O),S[O]=1),C[O]!==H&&((s.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,H),C[O]=H)}function w(){let O=u.newAttributes,H=u.enabledAttributes;for(let $=0,S=H.length;$<S;$++)H[$]!==O[$]&&(n.disableVertexAttribArray($),H[$]=0)}function P(O,H,$,S,C,F,G){G===!0?n.vertexAttribIPointer(O,H,$,C,F):n.vertexAttribPointer(O,H,$,S,C,F)}function D(O,H,$,S){if(s.isWebGL2===!1&&(O.isInstancedMesh||S.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let C=S.attributes,F=$.getAttributes(),G=H.defaultAttributeValues;for(let W in F){let N=F[W];if(N.location>=0){let U=C[W];if(U===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(U=O.instanceColor)),U!==void 0){let q=U.normalized,Q=U.itemSize,he=t.get(U);if(he===void 0)continue;let de=he.buffer,ye=he.type,be=he.bytesPerElement,Me=s.isWebGL2===!0&&(ye===n.INT||ye===n.UNSIGNED_INT||U.gpuType===Rm);if(U.isInterleavedBufferAttribute){let Ue=U.data,V=Ue.stride,Dt=U.offset;if(Ue.isInstancedInterleavedBuffer){for(let Se=0;Se<N.locationSize;Se++)L(N.location+Se,Ue.meshPerAttribute);O.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Se=0;Se<N.locationSize;Se++)E(N.location+Se);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Se=0;Se<N.locationSize;Se++)P(N.location+Se,Q/N.locationSize,ye,q,V*be,(Dt+Q/N.locationSize*Se)*be,Me)}else{if(U.isInstancedBufferAttribute){for(let Ue=0;Ue<N.locationSize;Ue++)L(N.location+Ue,U.meshPerAttribute);O.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Ue=0;Ue<N.locationSize;Ue++)E(N.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Ue=0;Ue<N.locationSize;Ue++)P(N.location+Ue,Q/N.locationSize,ye,q,Q*be,Q/N.locationSize*Ue*be,Me)}}else if(G!==void 0){let q=G[W];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(N.location,q);break;case 3:n.vertexAttrib3fv(N.location,q);break;case 4:n.vertexAttrib4fv(N.location,q);break;default:n.vertexAttrib1fv(N.location,q)}}}}w()}function v(){J();for(let O in l){let H=l[O];for(let $ in H){let S=H[$];for(let C in S)g(S[C].object),delete S[C];delete H[$]}delete l[O]}}function T(O){if(l[O.id]===void 0)return;let H=l[O.id];for(let $ in H){let S=H[$];for(let C in S)g(S[C].object),delete S[C];delete H[$]}delete l[O.id]}function k(O){for(let H in l){let $=l[H];if($[O.id]===void 0)continue;let S=$[O.id];for(let C in S)g(S[C].object),delete S[C];delete $[O.id]}}function J(){te(),h=!0,u!==c&&(u=c,p(u.object))}function te(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:J,resetDefaultState:te,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:M,enableAttribute:E,disableUnusedAttributes:w}}function zx(n,e,t,s){let r=s.isWebGL2,o;function a(h){o=h}function l(h,f){n.drawArrays(o,h,f),t.update(f,o,1)}function c(h,f,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](o,h,f,d),t.update(f,o,d)}function u(h,f,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{p.multiDrawArraysWEBGL(o,h,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=f[y];t.update(g,o,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kx(n,e,t){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",l=t.precision!==void 0?t.precision:"highp",c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);let u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,E=a||e.has("OES_texture_float"),L=M&&E,w=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:w}}function Gx(n){let e=this,t=null,s=0,r=!1,o=!1,a=new Oi,l=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||s!==0||r;return r=d,s=f.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,y=f.clipIntersection,_=f.clipShadows,m=n.get(f);if(!r||g===null||g.length===0||o&&!_)o?h(null):u();else{let x=o?0:s,M=x*4,E=m.clippingState||null;c.value=E,E=h(g,d,M,p);for(let L=0;L!==M;++L)E[L]=t[L];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function h(f,d,p,g){let y=f!==null?f.length:0,_=null;if(y!==0){if(_=c.value,g!==!0||_===null){let m=p+y*4,x=d.matrixWorldInverse;l.getNormalMatrix(x),(_===null||_.length<m)&&(_=new Float32Array(m));for(let M=0,E=p;M!==y;++M,E+=4)a.copy(f[M]).applyMatrix4(x,l),a.normal.toArray(_,E),_[E+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function Vx(n){let e=new WeakMap;function t(a,l){return l===qh?a.mapping=Ur:l===Yh&&(a.mapping=Br),a}function s(a){if(a&&a.isTexture){let l=a.mapping;if(l===qh||l===Yh)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let u=new eu(c.height/2);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:s,dispose:o}}function Wx(n){let e=[],t=[],s=[],r=n,o=n-Cr+1+Op.length;for(let a=0;a<o;a++){let l=Math.pow(2,r);t.push(l);let c=1/l;a>n-Cr?c=Op[a-n+Cr-1]:a===0&&(c=0),s.push(c);let u=1/(l-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,y=3,_=2,m=1,x=new Float32Array(y*g*p),M=new Float32Array(_*g*p),E=new Float32Array(m*g*p);for(let w=0;w<p;w++){let P=w%3*2/3-1,D=w>2?0:-1,v=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];x.set(v,y*g*w),M.set(d,_*g*w);let T=[w,w,w,w,w,w];E.set(T,m*g*w)}let L=new dt;L.setAttribute("position",new ht(x,y)),L.setAttribute("uv",new ht(M,_)),L.setAttribute("faceIndex",new ht(E,m)),e.push(L),r>Cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function zp(n,e,t){let s=new vn(n,e,t);return s.texture.mapping=Zl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function il(n,e,t,s,r){n.viewport.set(e,t,s,r),n.scissor.set(e,t,s,r)}function Xx(n,e,t){let s=new Float32Array(Os),r=new I(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function kp(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Gp(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ou(){return`

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
	`}function qx(n){let e=new WeakMap,t=null;function s(l){if(l&&l.isTexture){let c=l.mapping,u=c===qh||c===Yh,h=c===Ur||c===Br;if(u||h)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let f=e.get(l);return t===null&&(t=new Pl(n)),f=u?t.fromEquirectangular(l,f):t.fromCubemap(l,f),e.set(l,f),f.texture}else{if(e.has(l))return e.get(l).texture;{let f=l.image;if(u&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new Pl(n));let d=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,d),l.addEventListener("dispose",o),d.texture}else return null}}}return l}function r(l){let c=0,u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function o(l){let c=l.target;c.removeEventListener("dispose",o);let u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:a}}function Yx(n){let e={};function t(s){if(e[s]!==void 0)return e[s];let r;switch(s){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(s)}return e[s]=r,r}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){let r=t(s);return r===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),r}}}function Kx(n,e,t,s){let r={},o=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let _=0,m=y.length;_<m;_++)e.remove(y[_])}d.removeEventListener("dispose",a),delete r[d.id];let p=o.get(d);p&&(e.remove(p),o.delete(d)),s.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let y=p[g];for(let _=0,m=y.length;_<m;_++)e.update(y[_],n.ARRAY_BUFFER)}}function u(f){let d=[],p=f.index,g=f.attributes.position,y=0;if(p!==null){let x=p.array;y=p.version;for(let M=0,E=x.length;M<E;M+=3){let L=x[M+0],w=x[M+1],P=x[M+2];d.push(L,w,w,P,P,L)}}else if(g!==void 0){let x=g.array;y=g.version;for(let M=0,E=x.length/3-1;M<E;M+=3){let L=M+0,w=M+1,P=M+2;d.push(L,w,w,P,P,L)}}else return;let _=new(zm(d)?wl:Al)(d,1);_.version=y;let m=o.get(f);m&&e.remove(m),o.set(f,_)}function h(f){let d=o.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return o.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function Zx(n,e,t,s){let r=s.isWebGL2,o;function a(p){o=p}let l,c;function u(p){l=p.type,c=p.bytesPerElement}function h(p,g){n.drawElements(o,g,l,p*c),t.update(g,o,1)}function f(p,g,y){if(y===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](o,g,l,p*c,y),t.update(g,o,y)}function d(p,g,y){if(y===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<y;m++)this.render(p[m]/c,g[m]);else{_.multiDrawElementsWEBGL(o,g,0,l,p,0,y);let m=0;for(let x=0;x<y;x++)m+=g[x];t.update(m,o,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function $x(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(o,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(o/3);break;case n.LINES:t.lines+=l*(o/2);break;case n.LINE_STRIP:t.lines+=l*(o-1);break;case n.LINE_LOOP:t.lines+=l*o;break;case n.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:s}}function Jx(n,e){return n[0]-e[0]}function jx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Qx(n,e,t){let s={},r=new Float32Array(8),o=new WeakMap,a=new _t,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function c(u,h,f){let d=u.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,y=o.get(h);if(y===void 0||y.count!==g){let O=function(){J.dispose(),o.delete(h),h.removeEventListener("dispose",O)};y!==void 0&&y.texture.dispose();let x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],D=0;x===!0&&(D=1),M===!0&&(D=2),E===!0&&(D=3);let v=h.attributes.position.count*D,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let k=new Float32Array(v*T*4*g),J=new bl(k,v,T,g);J.type=Fi,J.needsUpdate=!0;let te=D*4;for(let H=0;H<g;H++){let $=L[H],S=w[H],C=P[H],F=v*T*4*H;for(let G=0;G<$.count;G++){let W=G*te;x===!0&&(a.fromBufferAttribute($,G),k[F+W+0]=a.x,k[F+W+1]=a.y,k[F+W+2]=a.z,k[F+W+3]=0),M===!0&&(a.fromBufferAttribute(S,G),k[F+W+4]=a.x,k[F+W+5]=a.y,k[F+W+6]=a.z,k[F+W+7]=0),E===!0&&(a.fromBufferAttribute(C,G),k[F+W+8]=a.x,k[F+W+9]=a.y,k[F+W+10]=a.z,k[F+W+11]=C.itemSize===4?a.w:1)}}y={count:g,texture:J,size:new ue(v,T)},o.set(h,y),h.addEventListener("dispose",O)}let _=0;for(let x=0;x<d.length;x++)_+=d[x];let m=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",m),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=d===void 0?0:d.length,g=s[h.id];if(g===void 0||g.length!==p){g=[];for(let M=0;M<p;M++)g[M]=[M,0];s[h.id]=g}for(let M=0;M<p;M++){let E=g[M];E[0]=M,E[1]=d[M]}g.sort(jx);for(let M=0;M<8;M++)M<p&&g[M][1]?(l[M][0]=g[M][0],l[M][1]=g[M][1]):(l[M][0]=Number.MAX_SAFE_INTEGER,l[M][1]=0);l.sort(Jx);let y=h.morphAttributes.position,_=h.morphAttributes.normal,m=0;for(let M=0;M<8;M++){let E=l[M],L=E[0],w=E[1];L!==Number.MAX_SAFE_INTEGER&&w?(y&&h.getAttribute("morphTarget"+M)!==y[L]&&h.setAttribute("morphTarget"+M,y[L]),_&&h.getAttribute("morphNormal"+M)!==_[L]&&h.setAttribute("morphNormal"+M,_[L]),r[M]=w,m+=w):(y&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),_&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}let x=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function ev(n,e,t,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}function qr(n,e,t){let s=n[0];if(s<=0||s>0)return n;let r=e*t,o=Vp[r];if(o===void 0&&(o=new Float32Array(r),Vp[r]=o),e!==0){s.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(o,l)}return o}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,s=e.length;t<s;t++)n[t]=e[t]}function jl(n,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let s=0;s!==e;++s)t[s]=n.allocateTextureUnit();return t}function tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function rv(n,e){let t=this.cache,s=e.elements;if(s===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,s))return;Yp.set(s),n.uniformMatrix2fv(this.addr,!1,Yp),Xt(t,s)}}function ov(n,e){let t=this.cache,s=e.elements;if(s===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,s))return;qp.set(s),n.uniformMatrix3fv(this.addr,!1,qp),Xt(t,s)}}function av(n,e){let t=this.cache,s=e.elements;if(s===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,s))return;Xp.set(s),n.uniformMatrix4fv(this.addr,!1,Xp),Xt(t,s)}}function lv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function hv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function fv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function gv(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r);let o=this.type===n.SAMPLER_2D_SHADOW?Xm:Wm;t.setTexture2D(e||o,r)}function _v(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTexture3D(e||Ym,r)}function yv(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTextureCube(e||Km,r)}function Mv(n,e,t){let s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTexture2DArray(e||qm,r)}function xv(n){switch(n){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return fv;case 36294:return dv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}function vv(n,e){n.uniform1fv(this.addr,e)}function Ev(n,e){let t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function bv(n,e){let t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function Sv(n,e){let t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function Tv(n,e){let t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Av(n,e){let t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wv(n,e){let t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rv(n,e){n.uniform1iv(this.addr,e)}function Cv(n,e){n.uniform2iv(this.addr,e)}function Pv(n,e){n.uniform3iv(this.addr,e)}function Lv(n,e){n.uniform4iv(this.addr,e)}function Iv(n,e){n.uniform1uiv(this.addr,e)}function Dv(n,e){n.uniform2uiv(this.addr,e)}function Nv(n,e){n.uniform3uiv(this.addr,e)}function Uv(n,e){n.uniform4uiv(this.addr,e)}function Bv(n,e,t){let s=this.cache,r=e.length,o=jl(t,r);Wt(s,o)||(n.uniform1iv(this.addr,o),Xt(s,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Wm,o[a])}function Ov(n,e,t){let s=this.cache,r=e.length,o=jl(t,r);Wt(s,o)||(n.uniform1iv(this.addr,o),Xt(s,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ym,o[a])}function Fv(n,e,t){let s=this.cache,r=e.length,o=jl(t,r);Wt(s,o)||(n.uniform1iv(this.addr,o),Xt(s,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Km,o[a])}function Hv(n,e,t){let s=this.cache,r=e.length,o=jl(t,r);Wt(s,o)||(n.uniform1iv(this.addr,o),Xt(s,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qm,o[a])}function zv(n){switch(n){case 5126:return vv;case 35664:return Ev;case 35665:return bv;case 35666:return Sv;case 35674:return Tv;case 35675:return Av;case 35676:return wv;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Iv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Kp(n,e){n.seq.push(e),n.map[e.id]=e}function kv(n,e,t){let s=n.name,r=s.length;for(Nh.lastIndex=0;;){let o=Nh.exec(s),a=Nh.lastIndex,l=o[1],c=o[2]==="]",u=o[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Kp(t,u===void 0?new tu(l,n,e):new nu(l,n,e));break}else{let f=t.map[l];f===void 0&&(f=new iu(l),Kp(t,f)),t=f}}}function Zp(n,e,t){let s=n.createShader(e);return n.shaderSource(s,t),n.compileShader(s),s}function Wv(n,e){let t=n.split(`
`),s=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){let l=a+1;s.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return s.join(`
`)}function Xv(n){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n),s;switch(e===t?s="":e===yl&&t===_l?s="LinearDisplayP3ToLinearSRGB":e===_l&&t===yl&&(s="LinearSRGBToLinearDisplayP3"),n){case Vt:case Jl:return[s,"LinearTransferOETF"];case ft:case Uu:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[s,"LinearTransferOETF"]}}function $p(n,e,t){let s=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(s&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Wv(n.getShaderSource(e),a)}else return r}function qv(n,e){let t=Xv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yv(n,e){let t;switch(e){case jg:t="Linear";break;case Qg:t="Reinhard";break;case e_:t="OptimizedCineon";break;case t_:t="ACESFilmic";break;case i_:t="AgX";break;case n_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pr).join(`
`)}function Zv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pr).join(`
`)}function $v(n){let e=[];for(let t in n){let s=n[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Jv(n,e){let t={},s=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let o=n.getActiveAttrib(e,r),a=o.name,l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function Pr(n){return n!==""}function Jp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function su(n){return n.replace(jv,eE)}function eE(n,e){let t=qe[e];if(t===void 0){let s=Qv.get(e);if(s!==void 0)t=qe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return su(t)}function Qp(n){return n.replace(tE,nE)}function nE(n,e,t,s){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function em(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ag?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function sE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case Br:e="ENVMAP_TYPE_CUBE";break;case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rE(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Br&&(e="ENVMAP_MODE_REFRACTION"),e}function oE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Am:e="ENVMAP_BLENDING_MULTIPLY";break;case $g:e="ENVMAP_BLENDING_MIX";break;case Jg:e="ENVMAP_BLENDING_ADD";break}return e}function aE(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function lE(n,e,t,s){let r=n.getContext(),o=t.defines,a=t.vertexShader,l=t.fragmentShader,c=iE(t),u=sE(t),h=rE(t),f=oE(t),d=aE(t),p=t.isWebGL2?"":Kv(t),g=Zv(t),y=$v(o),_=r.createProgram(),m,x,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Pr).join(`
`),m.length>0&&(m+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Pr).join(`
`),x.length>0&&(x+=`
`)):(m=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),x=[p,em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?qe.tonemapping_pars_fragment:"",t.toneMapping!==os?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=su(a),a=Jp(a,t),a=jp(a,t),l=su(l),l=Jp(l,t),l=jp(l,t),a=Qp(a),l=Qp(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let E=M+m+a,L=M+x+l,w=Zp(r,r.VERTEX_SHADER,E),P=Zp(r,r.FRAGMENT_SHADER,L);r.attachShader(_,w),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(J){if(n.debug.checkShaderErrors){let te=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(w).trim(),H=r.getShaderInfoLog(P).trim(),$=!0,S=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,P);else{let C=$p(r,w,"vertex"),F=$p(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+C+`
`+F)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(O===""||H==="")&&(S=!1);S&&(J.diagnostics={runnable:$,programLog:te,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:x}})}r.deleteShader(w),r.deleteShader(P),v=new Nr(r,_),T=Jv(r,_)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(_,Gv)),k},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=P,this}function hE(n,e,t,s,r,o,a){let l=new Tl,c=new ru,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return v===0?"uv":`uv${v}`}function _(v,T,k,J,te){let O=J.fog,H=te.geometry,$=v.isMeshStandardMaterial?J.environment:null,S=(v.isMeshStandardMaterial?t:e).get(v.envMap||$),C=S&&S.mapping===Zl?S.image.height:null,F=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,W=G!==void 0?G.length:0,N=0;H.morphAttributes.position!==void 0&&(N=1),H.morphAttributes.normal!==void 0&&(N=2),H.morphAttributes.color!==void 0&&(N=3);let U,q,Q,he;if(F){let gn=gi[F];U=gn.vertexShader,q=gn.fragmentShader}else U=v.vertexShader,q=v.fragmentShader,c.update(v),Q=c.getVertexShaderID(v),he=c.getFragmentShaderID(v);let de=n.getRenderTarget(),ye=te.isInstancedMesh===!0,be=te.isBatchedMesh===!0,Me=!!v.map,Ue=!!v.matcap,V=!!S,Dt=!!v.aoMap,Se=!!v.lightMap,De=!!v.bumpMap,_e=!!v.normalMap,gt=!!v.displacementMap,Ve=!!v.emissiveMap,R=!!v.metalnessMap,b=!!v.roughnessMap,Y=v.anisotropy>0,ie=v.clearcoat>0,ne=v.iridescence>0,se=v.sheen>0,ve=v.transmission>0,fe=Y&&!!v.anisotropyMap,me=ie&&!!v.clearcoatMap,Ce=ie&&!!v.clearcoatNormalMap,Ye=ie&&!!v.clearcoatRoughnessMap,ee=ne&&!!v.iridescenceMap,pt=ne&&!!v.iridescenceThicknessMap,tt=se&&!!v.sheenColorMap,Be=se&&!!v.sheenRoughnessMap,Te=!!v.specularMap,ge=!!v.specularColorMap,Xe=!!v.specularIntensityMap,ut=ve&&!!v.transmissionMap,Rt=ve&&!!v.thicknessMap,Je=!!v.gradientMap,re=!!v.alphaMap,B=v.alphaTest>0,le=!!v.alphaHash,ce=!!v.extensions,Pe=!!H.attributes.uv1,we=!!H.attributes.uv2,Mt=!!H.attributes.uv3,xt=os;return v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(xt=n.toneMapping),{isWebGL2:h,shaderID:F,shaderType:v.type,shaderName:v.name,vertexShader:U,fragmentShader:q,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:be,instancing:ye,instancingColor:ye&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Vt,map:Me,matcap:Ue,envMap:V,envMapMode:V&&S.mapping,envMapCubeUVHeight:C,aoMap:Dt,lightMap:Se,bumpMap:De,normalMap:_e,displacementMap:d&&gt,emissiveMap:Ve,normalMapObjectSpace:_e&&v.normalMapType===g_,normalMapTangentSpace:_e&&v.normalMapType===Om,metalnessMap:R,roughnessMap:b,anisotropy:Y,anisotropyMap:fe,clearcoat:ie,clearcoatMap:me,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,iridescence:ne,iridescenceMap:ee,iridescenceThicknessMap:pt,sheen:se,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:Te,specularColorMap:ge,specularIntensityMap:Xe,transmission:ve,transmissionMap:ut,thicknessMap:Rt,gradientMap:Je,opaque:v.transparent===!1&&v.blending===Lr,alphaMap:re,alphaTest:B,alphaHash:le,combine:v.combine,mapUv:Me&&y(v.map.channel),aoMapUv:Dt&&y(v.aoMap.channel),lightMapUv:Se&&y(v.lightMap.channel),bumpMapUv:De&&y(v.bumpMap.channel),normalMapUv:_e&&y(v.normalMap.channel),displacementMapUv:gt&&y(v.displacementMap.channel),emissiveMapUv:Ve&&y(v.emissiveMap.channel),metalnessMapUv:R&&y(v.metalnessMap.channel),roughnessMapUv:b&&y(v.roughnessMap.channel),anisotropyMapUv:fe&&y(v.anisotropyMap.channel),clearcoatMapUv:me&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Be&&y(v.sheenRoughnessMap.channel),specularMapUv:Te&&y(v.specularMap.channel),specularColorMapUv:ge&&y(v.specularColorMap.channel),specularIntensityMapUv:Xe&&y(v.specularIntensityMap.channel),transmissionMapUv:ut&&y(v.transmissionMap.channel),thicknessMapUv:Rt&&y(v.thicknessMap.channel),alphaMapUv:re&&y(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_e||Y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:we,vertexUv3s:Mt,pointsUvs:te.isPoints===!0&&!!H.attributes.uv&&(Me||re),fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:N,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Me&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yt,flipSided:v.side===Rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ce&&v.extensions.derivatives===!0,extensionFragDepth:ce&&v.extensions.fragDepth===!0,extensionDrawBuffers:ce&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&v.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let k in v.defines)T.push(k),T.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){l.disableAll(),T.isWebGL2&&l.enable(0),T.supportsVertexTextures&&l.enable(1),T.instancing&&l.enable(2),T.instancingColor&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),T.batching&&l.enable(19),v.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.skinning&&l.enable(4),T.morphTargets&&l.enable(5),T.morphNormals&&l.enable(6),T.morphColors&&l.enable(7),T.premultipliedAlpha&&l.enable(8),T.shadowMapEnabled&&l.enable(9),T.useLegacyLights&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),v.push(l.mask)}function E(v){let T=g[v.type],k;if(T){let J=gi[T];k=Xr.clone(J.uniforms)}else k=v.uniforms;return k}function L(v,T){let k;for(let J=0,te=u.length;J<te;J++){let O=u[J];if(O.cacheKey===T){k=O,++k.usedTimes;break}}return k===void 0&&(k=new lE(n,T,v,o),u.push(k)),k}function w(v){if(--v.usedTimes===0){let T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function P(v){c.remove(v)}function D(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:L,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:D}}function uE(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{get:e,remove:t,update:s,dispose:r}}function fE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nm(){let n=[],e=0,t=[],s=[],r=[];function o(){e=0,t.length=0,s.length=0,r.length=0}function a(f,d,p,g,y,_){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:_},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=y,m.group=_),e++,m}function l(f,d,p,g,y,_){let m=a(f,d,p,g,y,_);p.transmission>0?s.push(m):p.transparent===!0?r.push(m):t.push(m)}function c(f,d,p,g,y,_){let m=a(f,d,p,g,y,_);p.transmission>0?s.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||fE),s.length>1&&s.sort(d||tm),r.length>1&&r.sort(d||tm)}function h(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:s,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function dE(){let n=new WeakMap;function e(s,r){let o=n.get(s),a;return o===void 0?(a=new nm,n.set(s,[a])):r>=o.length?(a=new nm,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function pE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new xe};break;case"SpotLight":t={position:new I,direction:new I,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function mE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function _E(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yE(n,e){let t=new pE,s=mE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new I);let o=new I,a=new Ne,l=new Ne;function c(h,f){let d=0,p=0,g=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let y=0,_=0,m=0,x=0,M=0,E=0,L=0,w=0,P=0,D=0,v=0;h.sort(_E);let T=f===!0?Math.PI:1;for(let J=0,te=h.length;J<te;J++){let O=h[J],H=O.color,$=O.intensity,S=O.distance,C=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=H.r*$*T,p+=H.g*$*T,g+=H.b*$*T;else if(O.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(O.sh.coefficients[F],$);v++}else if(O.isDirectionalLight){let F=t.get(O);if(F.color.copy(O.color).multiplyScalar(O.intensity*T),O.castShadow){let G=O.shadow,W=s.get(O);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=C,r.directionalShadowMatrix[y]=O.shadow.matrix,E++}r.directional[y]=F,y++}else if(O.isSpotLight){let F=t.get(O);F.position.setFromMatrixPosition(O.matrixWorld),F.color.copy(H).multiplyScalar($*T),F.distance=S,F.coneCos=Math.cos(O.angle),F.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),F.decay=O.decay,r.spot[m]=F;let G=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,G.updateMatrices(O),O.castShadow&&D++),r.spotLightMatrix[m]=G.matrix,O.castShadow){let W=s.get(O);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.spotShadow[m]=W,r.spotShadowMap[m]=C,w++}m++}else if(O.isRectAreaLight){let F=t.get(O);F.color.copy(H).multiplyScalar($),F.halfWidth.set(O.width*.5,0,0),F.halfHeight.set(0,O.height*.5,0),r.rectArea[x]=F,x++}else if(O.isPointLight){let F=t.get(O);if(F.color.copy(O.color).multiplyScalar(O.intensity*T),F.distance=O.distance,F.decay=O.decay,O.castShadow){let G=O.shadow,W=s.get(O);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,r.pointShadow[_]=W,r.pointShadowMap[_]=C,r.pointShadowMatrix[_]=O.shadow.matrix,L++}r.point[_]=F,_++}else if(O.isHemisphereLight){let F=t.get(O);F.skyColor.copy(O.color).multiplyScalar($*T),F.groundColor.copy(O.groundColor).multiplyScalar($*T),r.hemi[M]=F,M++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;let k=r.hash;(k.directionalLength!==y||k.pointLength!==_||k.spotLength!==m||k.rectAreaLength!==x||k.hemiLength!==M||k.numDirectionalShadows!==E||k.numPointShadows!==L||k.numSpotShadows!==w||k.numSpotMaps!==P||k.numLightProbes!==v)&&(r.directional.length=y,r.spot.length=m,r.rectArea.length=x,r.point.length=_,r.hemi.length=M,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+P-D,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=v,k.directionalLength=y,k.pointLength=_,k.spotLength=m,k.rectAreaLength=x,k.hemiLength=M,k.numDirectionalShadows=E,k.numPointShadows=L,k.numSpotShadows=w,k.numSpotMaps=P,k.numLightProbes=v,r.version=gE++)}function u(h,f){let d=0,p=0,g=0,y=0,_=0,m=f.matrixWorldInverse;for(let x=0,M=h.length;x<M;x++){let E=h[x];if(E.isDirectionalLight){let L=r.directional[d];L.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(m),d++}else if(E.isSpotLight){let L=r.spot[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(m),g++}else if(E.isRectAreaLight){let L=r.rectArea[y];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(m),l.identity(),a.copy(E.matrixWorld),a.premultiply(m),l.extractRotation(a),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(l),L.halfHeight.applyMatrix4(l),y++}else if(E.isPointLight){let L=r.point[p];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let L=r.hemi[_];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(m),_++}}}return{setup:c,setupView:u,state:r}}function im(n,e){let t=new yE(n,e),s=[],r=[];function o(){s.length=0,r.length=0}function a(f){s.push(f)}function l(f){r.push(f)}function c(f){t.setup(s,f)}function u(f){t.setupView(s,f)}return{init:o,state:{lightsArray:s,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:l}}function ME(n,e){let t=new WeakMap;function s(o,a=0){let l=t.get(o),c;return l===void 0?(c=new im(n,e),t.set(o,[c])):a>=l.length?(c=new im(n,e),l.push(c)):c=l[a],c}function r(){t=new WeakMap}return{get:s,dispose:r}}function EE(n,e,t){let s=new Do,r=new ue,o=new ue,a=new _t,l=new au({depthPacking:m_}),c=new lu,u={},h=t.maxTextureSize,f={[Mi]:Rn,[Rn]:Mi,[yt]:yt},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:xE,fragmentShader:vE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new j(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tm;let m=this.type;this.render=function(w,P,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;let v=n.getRenderTarget(),T=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),J=n.state;J.setBlending(yi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let te=m!==Bi&&this.type===Bi,O=m===Bi&&this.type!==Bi;for(let H=0,$=w.length;H<$;H++){let S=w[H],C=S.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",S,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);let F=C.getFrameExtents();if(r.multiply(F),o.copy(C.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/F.x),r.x=o.x*F.x,C.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/F.y),r.y=o.y*F.y,C.mapSize.y=o.y)),C.map===null||te===!0||O===!0){let W=this.type!==Bi?{minFilter:Pt,magFilter:Pt}:{};C.map!==null&&C.map.dispose(),C.map=new vn(r.x,r.y,W),C.map.texture.name=S.name+".shadowMap",C.camera.updateProjectionMatrix()}n.setRenderTarget(C.map),n.clear();let G=C.getViewportCount();for(let W=0;W<G;W++){let N=C.getViewport(W);a.set(o.x*N.x,o.y*N.y,o.x*N.z,o.y*N.w),J.viewport(a),C.updateMatrices(S,W),s=C.getFrustum(),E(P,D,C.camera,S,this.type)}C.isPointLightShadow!==!0&&this.type===Bi&&x(C,D),C.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(v,T,k)};function x(w,P){let D=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vn(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,D,d,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,D,p,y,null)}function M(w,P,D,v){let T=null,k=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)T=k;else if(T=D.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let J=T.uuid,te=P.uuid,O=u[J];O===void 0&&(O={},u[J]=O);let H=O[te];H===void 0&&(H=T.clone(),O[te]=H,P.addEventListener("dispose",L)),T=H}if(T.visible=P.visible,T.wireframe=P.wireframe,v===Bi?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let J=n.properties.get(T);J.light=D}return T}function E(w,P,D,v,T){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Bi)&&(!w.frustumCulled||s.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let te=e.update(w),O=w.material;if(Array.isArray(O)){let H=te.groups;for(let $=0,S=H.length;$<S;$++){let C=H[$],F=O[C.materialIndex];if(F&&F.visible){let G=M(w,F,v,T);w.onBeforeShadow(n,w,P,D,te,G,C),n.renderBufferDirect(D,null,te,G,w,C),w.onAfterShadow(n,w,P,D,te,G,C)}}}else if(O.visible){let H=M(w,O,v,T);w.onBeforeShadow(n,w,P,D,te,H,null),n.renderBufferDirect(D,null,te,H,w,null),w.onAfterShadow(n,w,P,D,te,H,null)}}let J=w.children;for(let te=0,O=J.length;te<O;te++)E(J[te],P,D,v,T)}function L(w){w.target.removeEventListener("dispose",L);for(let D in u){let v=u[D],T=w.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}function bE(n,e,t){let s=t.isWebGL2;function r(){let B=!1,le=new _t,ce=null,Pe=new _t(0,0,0,0);return{setMask:function(we){ce!==we&&!B&&(n.colorMask(we,we,we,we),ce=we)},setLocked:function(we){B=we},setClear:function(we,Mt,xt,$t,gn){gn===!0&&(we*=$t,Mt*=$t,xt*=$t),le.set(we,Mt,xt,$t),Pe.equals(le)===!1&&(n.clearColor(we,Mt,xt,$t),Pe.copy(le))},reset:function(){B=!1,ce=null,Pe.set(-1,0,0,0)}}}function o(){let B=!1,le=null,ce=null,Pe=null;return{setTest:function(we){we?be(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(we){le!==we&&!B&&(n.depthMask(we),le=we)},setFunc:function(we){if(ce!==we){switch(we){case Vg:n.depthFunc(n.NEVER);break;case Wg:n.depthFunc(n.ALWAYS);break;case Xg:n.depthFunc(n.LESS);break;case pl:n.depthFunc(n.LEQUAL);break;case qg:n.depthFunc(n.EQUAL);break;case Yg:n.depthFunc(n.GEQUAL);break;case Kg:n.depthFunc(n.GREATER);break;case Zg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=we}},setLocked:function(we){B=we},setClear:function(we){Pe!==we&&(n.clearDepth(we),Pe=we)},reset:function(){B=!1,le=null,ce=null,Pe=null}}}function a(){let B=!1,le=null,ce=null,Pe=null,we=null,Mt=null,xt=null,$t=null,gn=null;return{setTest:function(vt){B||(vt?be(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(vt){le!==vt&&!B&&(n.stencilMask(vt),le=vt)},setFunc:function(vt,_n,mi){(ce!==vt||Pe!==_n||we!==mi)&&(n.stencilFunc(vt,_n,mi),ce=vt,Pe=_n,we=mi)},setOp:function(vt,_n,mi){(Mt!==vt||xt!==_n||$t!==mi)&&(n.stencilOp(vt,_n,mi),Mt=vt,xt=_n,$t=mi)},setLocked:function(vt){B=vt},setClear:function(vt){gn!==vt&&(n.clearStencil(vt),gn=vt)},reset:function(){B=!1,le=null,ce=null,Pe=null,we=null,Mt=null,xt=null,$t=null,gn=null}}}let l=new r,c=new o,u=new a,h=new WeakMap,f=new WeakMap,d={},p={},g=new WeakMap,y=[],_=null,m=!1,x=null,M=null,E=null,L=null,w=null,P=null,D=null,v=new xe(0,0,0),T=0,k=!1,J=null,te=null,O=null,H=null,$=null,S=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,F=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(G)[1]),C=F>=1):G.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),C=F>=2);let W=null,N={},U=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),Q=new _t().fromArray(U),he=new _t().fromArray(q);function de(B,le,ce,Pe){let we=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(B,Mt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xt=0;xt<ce;xt++)s&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(le+xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Mt}let ye={};ye[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(ye[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),be(n.DEPTH_TEST),c.setFunc(pl),Ve(!1),R(Fd),be(n.CULL_FACE),_e(yi);function be(B){d[B]!==!0&&(n.enable(B),d[B]=!0)}function Me(B){d[B]!==!1&&(n.disable(B),d[B]=!1)}function Ue(B,le){return p[B]!==le?(n.bindFramebuffer(B,le),p[B]=le,s&&(B===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),B===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function V(B,le){let ce=y,Pe=!1;if(B)if(ce=g.get(le),ce===void 0&&(ce=[],g.set(le,ce)),B.isWebGLMultipleRenderTargets){let we=B.texture;if(ce.length!==we.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,xt=we.length;Mt<xt;Mt++)ce[Mt]=n.COLOR_ATTACHMENT0+Mt;ce.length=we.length,Pe=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,Pe=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,Pe=!0);Pe&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Dt(B){return _!==B?(n.useProgram(B),_=B,!0):!1}let Se={[Bs]:n.FUNC_ADD,[Rg]:n.FUNC_SUBTRACT,[Cg]:n.FUNC_REVERSE_SUBTRACT};if(s)Se[kd]=n.MIN,Se[Gd]=n.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(Se[kd]=B.MIN_EXT,Se[Gd]=B.MAX_EXT)}let De={[Pg]:n.ZERO,[Lg]:n.ONE,[Ig]:n.SRC_COLOR,[Wh]:n.SRC_ALPHA,[Fg]:n.SRC_ALPHA_SATURATE,[Bg]:n.DST_COLOR,[Ng]:n.DST_ALPHA,[Dg]:n.ONE_MINUS_SRC_COLOR,[Xh]:n.ONE_MINUS_SRC_ALPHA,[Og]:n.ONE_MINUS_DST_COLOR,[Ug]:n.ONE_MINUS_DST_ALPHA,[Hg]:n.CONSTANT_COLOR,[zg]:n.ONE_MINUS_CONSTANT_COLOR,[kg]:n.CONSTANT_ALPHA,[Gg]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(B,le,ce,Pe,we,Mt,xt,$t,gn,vt){if(B===yi){m===!0&&(Me(n.BLEND),m=!1);return}if(m===!1&&(be(n.BLEND),m=!0),B!==wg){if(B!==x||vt!==k){if((M!==Bs||w!==Bs)&&(n.blendEquation(n.FUNC_ADD),M=Bs,w=Bs),vt)switch(B){case Lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bt:n.blendFunc(n.ONE,n.ONE);break;case Hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,L=null,P=null,D=null,v.set(0,0,0),T=0,x=B,k=vt}return}we=we||le,Mt=Mt||ce,xt=xt||Pe,(le!==M||we!==w)&&(n.blendEquationSeparate(Se[le],Se[we]),M=le,w=we),(ce!==E||Pe!==L||Mt!==P||xt!==D)&&(n.blendFuncSeparate(De[ce],De[Pe],De[Mt],De[xt]),E=ce,L=Pe,P=Mt,D=xt),($t.equals(v)===!1||gn!==T)&&(n.blendColor($t.r,$t.g,$t.b,gn),v.copy($t),T=gn),x=B,k=!1}function gt(B,le){B.side===yt?Me(n.CULL_FACE):be(n.CULL_FACE);let ce=B.side===Rn;le&&(ce=!ce),Ve(ce),B.blending===Lr&&B.transparent===!1?_e(yi):_e(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),l.setMask(B.colorWrite);let Pe=B.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(B.stencilWriteMask),u.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),u.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Y(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(B){J!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),J=B)}function R(B){B!==Sg?(be(n.CULL_FACE),B!==te&&(B===Fd?n.cullFace(n.BACK):B===Tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),te=B}function b(B){B!==O&&(C&&n.lineWidth(B),O=B)}function Y(B,le,ce){B?(be(n.POLYGON_OFFSET_FILL),(H!==le||$!==ce)&&(n.polygonOffset(le,ce),H=le,$=ce)):Me(n.POLYGON_OFFSET_FILL)}function ie(B){B?be(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function ne(B){B===void 0&&(B=n.TEXTURE0+S-1),W!==B&&(n.activeTexture(B),W=B)}function se(B,le,ce){ce===void 0&&(W===null?ce=n.TEXTURE0+S-1:ce=W);let Pe=N[ce];Pe===void 0&&(Pe={type:void 0,texture:void 0},N[ce]=Pe),(Pe.type!==B||Pe.texture!==le)&&(W!==ce&&(n.activeTexture(ce),W=ce),n.bindTexture(B,le||ye[B]),Pe.type=B,Pe.texture=le)}function ve(){let B=N[W];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(B){Q.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Q.copy(B))}function ut(B){he.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),he.copy(B))}function Rt(B,le){let ce=f.get(le);ce===void 0&&(ce=new WeakMap,f.set(le,ce));let Pe=ce.get(B);Pe===void 0&&(Pe=n.getUniformBlockIndex(le,B.name),ce.set(B,Pe))}function Je(B,le){let Pe=f.get(le).get(B);h.get(le)!==Pe&&(n.uniformBlockBinding(le,Pe,B.__bindingPointIndex),h.set(le,Pe))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),s===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},W=null,N={},p={},g=new WeakMap,y=[],_=null,m=!1,x=null,M=null,E=null,L=null,w=null,P=null,D=null,v=new xe(0,0,0),T=0,k=!1,J=null,te=null,O=null,H=null,$=null,Q.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:be,disable:Me,bindFramebuffer:Ue,drawBuffers:V,useProgram:Dt,setBlending:_e,setMaterial:gt,setFlipSided:Ve,setCullFace:R,setLineWidth:b,setPolygonOffset:Y,setScissorTest:ie,activeTexture:ne,bindTexture:se,unbindTexture:ve,compressedTexImage2D:fe,compressedTexImage3D:me,texImage2D:Te,texImage3D:ge,updateUBOMapping:Rt,uniformBlockBinding:Je,texStorage2D:tt,texStorage3D:Be,texSubImage2D:Ce,texSubImage3D:Ye,compressedTexSubImage2D:ee,compressedTexSubImage3D:pt,scissor:Xe,viewport:ut,reset:re}}function SE(n,e,t,s,r,o,a){let l=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):Io("canvas")}function y(R,b,Y,ie){let ne=1;if((R.width>ie||R.height>ie)&&(ne=ie/Math.max(R.width,R.height)),ne<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let se=b?xl:Math.floor,ve=se(ne*R.width),fe=se(ne*R.height);f===void 0&&(f=g(ve,fe));let me=Y?g(ve,fe):f;return me.width=ve,me.height=fe,me.getContext("2d").drawImage(R,0,0,ve,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ve+"x"+fe+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function _(R){return $h(R.width)&&$h(R.height)}function m(R){return l?!1:R.wrapS!==xn||R.wrapT!==xn||R.minFilter!==Pt&&R.minFilter!==sn}function x(R,b){return R.generateMipmaps&&b&&R.minFilter!==Pt&&R.minFilter!==sn}function M(R){n.generateMipmap(R)}function E(R,b,Y,ie,ne=!1){if(l===!1)return b;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=b;if(b===n.RED&&(Y===n.FLOAT&&(se=n.R32F),Y===n.HALF_FLOAT&&(se=n.R16F),Y===n.UNSIGNED_BYTE&&(se=n.R8)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.R8UI),Y===n.UNSIGNED_SHORT&&(se=n.R16UI),Y===n.UNSIGNED_INT&&(se=n.R32UI),Y===n.BYTE&&(se=n.R8I),Y===n.SHORT&&(se=n.R16I),Y===n.INT&&(se=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(se=n.RG32F),Y===n.HALF_FLOAT&&(se=n.RG16F),Y===n.UNSIGNED_BYTE&&(se=n.RG8)),b===n.RGBA){let ve=ne?gl:at.getTransfer(ie);Y===n.FLOAT&&(se=n.RGBA32F),Y===n.HALF_FLOAT&&(se=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(se=ve===St?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function L(R,b,Y){return x(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==Pt&&R.minFilter!==sn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){return R===Pt||R===ml||R===as?n.NEAREST:n.LINEAR}function P(R){let b=R.target;b.removeEventListener("dispose",P),v(b),b.isVideoTexture&&h.delete(b)}function D(R){let b=R.target;b.removeEventListener("dispose",D),k(b)}function v(R){let b=s.get(R);if(b.__webglInit===void 0)return;let Y=R.source,ie=d.get(Y);if(ie){let ne=ie[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(R),Object.keys(ie).length===0&&d.delete(Y)}s.remove(R)}function T(R){let b=s.get(R);n.deleteTexture(b.__webglTexture);let Y=R.source,ie=d.get(Y);delete ie[b.__cacheKey],a.memory.textures--}function k(R){let b=R.texture,Y=s.get(R),ie=s.get(b);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(Y.__webglFramebuffer[ne]))for(let se=0;se<Y.__webglFramebuffer[ne].length;se++)n.deleteFramebuffer(Y.__webglFramebuffer[ne][se]);else n.deleteFramebuffer(Y.__webglFramebuffer[ne]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[ne])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ne=0;ne<Y.__webglFramebuffer.length;ne++)n.deleteFramebuffer(Y.__webglFramebuffer[ne]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ne=0;ne<Y.__webglColorRenderbuffer.length;ne++)Y.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[ne]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,se=b.length;ne<se;ne++){let ve=s.get(b[ne]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),s.remove(b[ne])}s.remove(b),s.remove(R)}let J=0;function te(){J=0}function O(){let R=J;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),J+=1,R}function H(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function $(R,b){let Y=s.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){let ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Y,R,b);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function S(R,b){let Y=s.get(R);if(R.version>0&&Y.__version!==R.version){Q(Y,R,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function C(R,b){let Y=s.get(R);if(R.version>0&&Y.__version!==R.version){Q(Y,R,b);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function F(R,b){let Y=s.get(R);if(R.version>0&&Y.__version!==R.version){he(Y,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}let G={[ri]:n.REPEAT,[xn]:n.CLAMP_TO_EDGE,[Lo]:n.MIRRORED_REPEAT},W={[Pt]:n.NEAREST,[ml]:n.NEAREST_MIPMAP_NEAREST,[as]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[Du]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},N={[__]:n.NEVER,[b_]:n.ALWAYS,[y_]:n.LESS,[Fm]:n.LEQUAL,[M_]:n.EQUAL,[E_]:n.GEQUAL,[x_]:n.GREATER,[v_]:n.NOTEQUAL};function U(R,b,Y){if(Y?(n.texParameteri(R,n.TEXTURE_WRAP_S,G[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,G[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,G[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,W[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,W[b.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==xn||b.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,w(b.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==Pt&&b.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Pt||b.minFilter!==as&&b.minFilter!==oi||b.type===Fi&&e.has("OES_texture_float_linear")===!1||l===!1&&b.type===ai&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||s.get(b).__currentAnisotropy)&&(n.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy)}}function q(R,b){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));let ie=b.source,ne=d.get(ie);ne===void 0&&(ne={},d.set(ie,ne));let se=H(b);if(se!==R.__cacheKey){ne[se]===void 0&&(ne[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ne[se].usedTimes++;let ve=ne[R.__cacheKey];ve!==void 0&&(ne[R.__cacheKey].usedTimes--,ve.usedTimes===0&&T(b)),R.__cacheKey=se,R.__webglTexture=ne[se].texture}return Y}function Q(R,b,Y){let ie=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=n.TEXTURE_3D);let ne=q(R,b),se=b.source;t.bindTexture(ie,R.__webglTexture,n.TEXTURE0+Y);let ve=s.get(se);if(se.version!==ve.__version||ne===!0){t.activeTexture(n.TEXTURE0+Y);let fe=at.getPrimaries(at.workingColorSpace),me=b.colorSpace===Vn?null:at.getPrimaries(b.colorSpace),Ce=b.colorSpace===Vn||fe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Ye=m(b)&&_(b.image)===!1,ee=y(b.image,Ye,!1,r.maxTextureSize);ee=Ve(b,ee);let pt=_(ee)||l,tt=o.convert(b.format,b.colorSpace),Be=o.convert(b.type),Te=E(b.internalFormat,tt,Be,b.colorSpace,b.isVideoTexture);U(ie,b,pt);let ge,Xe=b.mipmaps,ut=l&&b.isVideoTexture!==!0&&Te!==Nm,Rt=ve.__version===void 0||ne===!0,Je=L(b,ee,pt);if(b.isDepthTexture)Te=n.DEPTH_COMPONENT,l?b.type===Fi?Te=n.DEPTH_COMPONENT32F:b.type===ss?Te=n.DEPTH_COMPONENT24:b.type===Hs?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:b.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===zs&&Te===n.DEPTH_COMPONENT&&b.type!==Nu&&b.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ss,Be=o.convert(b.type)),b.format===Or&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,b.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Hs,Be=o.convert(b.type))),Rt&&(ut?t.texStorage2D(n.TEXTURE_2D,1,Te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,tt,Be,null));else if(b.isDataTexture)if(Xe.length>0&&pt){ut&&Rt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,Xe[0].width,Xe[0].height);for(let re=0,B=Xe.length;re<B;re++)ge=Xe[re],ut?t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,tt,Be,ge.data):t.texImage2D(n.TEXTURE_2D,re,Te,ge.width,ge.height,0,tt,Be,ge.data);b.generateMipmaps=!1}else ut?(Rt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,tt,Be,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,tt,Be,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ut&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Te,Xe[0].width,Xe[0].height,ee.depth);for(let re=0,B=Xe.length;re<B;re++)ge=Xe[re],b.format!==Gn?tt!==null?ut?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ee.depth,tt,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Te,ge.width,ge.height,ee.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ee.depth,tt,Be,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Te,ge.width,ge.height,ee.depth,0,tt,Be,ge.data)}else{ut&&Rt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,Xe[0].width,Xe[0].height);for(let re=0,B=Xe.length;re<B;re++)ge=Xe[re],b.format!==Gn?tt!==null?ut?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,tt,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,tt,Be,ge.data):t.texImage2D(n.TEXTURE_2D,re,Te,ge.width,ge.height,0,tt,Be,ge.data)}else if(b.isDataArrayTexture)ut?(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,tt,Be,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,tt,Be,ee.data);else if(b.isData3DTexture)ut?(Rt&&t.texStorage3D(n.TEXTURE_3D,Je,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,tt,Be,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,tt,Be,ee.data);else if(b.isFramebufferTexture){if(Rt)if(ut)t.texStorage2D(n.TEXTURE_2D,Je,Te,ee.width,ee.height);else{let re=ee.width,B=ee.height;for(let le=0;le<Je;le++)t.texImage2D(n.TEXTURE_2D,le,Te,re,B,0,tt,Be,null),re>>=1,B>>=1}}else if(Xe.length>0&&pt){ut&&Rt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,Xe[0].width,Xe[0].height);for(let re=0,B=Xe.length;re<B;re++)ge=Xe[re],ut?t.texSubImage2D(n.TEXTURE_2D,re,0,0,tt,Be,ge):t.texImage2D(n.TEXTURE_2D,re,Te,tt,Be,ge);b.generateMipmaps=!1}else ut?(Rt&&t.texStorage2D(n.TEXTURE_2D,Je,Te,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,tt,Be,ee)):t.texImage2D(n.TEXTURE_2D,0,Te,tt,Be,ee);x(b,pt)&&M(ie),ve.__version=se.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function he(R,b,Y){if(b.image.length!==6)return;let ie=q(R,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+Y);let se=s.get(ne);if(ne.version!==se.__version||ie===!0){t.activeTexture(n.TEXTURE0+Y);let ve=at.getPrimaries(at.workingColorSpace),fe=b.colorSpace===Vn?null:at.getPrimaries(b.colorSpace),me=b.colorSpace===Vn||ve===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Ye=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let re=0;re<6;re++)!Ce&&!Ye?ee[re]=y(b.image[re],!1,!0,r.maxCubemapSize):ee[re]=Ye?b.image[re].image:b.image[re],ee[re]=Ve(b,ee[re]);let pt=ee[0],tt=_(pt)||l,Be=o.convert(b.format,b.colorSpace),Te=o.convert(b.type),ge=E(b.internalFormat,Be,Te,b.colorSpace),Xe=l&&b.isVideoTexture!==!0,ut=se.__version===void 0||ie===!0,Rt=L(b,pt,tt);U(n.TEXTURE_CUBE_MAP,b,tt);let Je;if(Ce){Xe&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ge,pt.width,pt.height);for(let re=0;re<6;re++){Je=ee[re].mipmaps;for(let B=0;B<Je.length;B++){let le=Je[B];b.format!==Gn?Be!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,B,0,0,le.width,le.height,Be,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,B,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,B,0,0,le.width,le.height,Be,Te,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,B,ge,le.width,le.height,0,Be,Te,le.data)}}}else{Je=b.mipmaps,Xe&&ut&&(Je.length>0&&Rt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ge,ee[0].width,ee[0].height));for(let re=0;re<6;re++)if(Ye){Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ee[re].width,ee[re].height,Be,Te,ee[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,ee[re].width,ee[re].height,0,Be,Te,ee[re].data);for(let B=0;B<Je.length;B++){let ce=Je[B].image[re].image;Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,B+1,0,0,ce.width,ce.height,Be,Te,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,B+1,ge,ce.width,ce.height,0,Be,Te,ce.data)}}else{Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Be,Te,ee[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,Be,Te,ee[re]);for(let B=0;B<Je.length;B++){let le=Je[B];Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,B+1,0,0,Be,Te,le.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,B+1,ge,Be,Te,le.image[re])}}}x(b,tt)&&M(n.TEXTURE_CUBE_MAP),se.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function de(R,b,Y,ie,ne,se){let ve=o.convert(Y.format,Y.colorSpace),fe=o.convert(Y.type),me=E(Y.internalFormat,ve,fe,Y.colorSpace);if(!s.get(b).__hasExternalTextures){let Ye=Math.max(1,b.width>>se),ee=Math.max(1,b.height>>se);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,me,Ye,ee,b.depth,0,ve,fe,null):t.texImage2D(ne,se,me,Ye,ee,0,ve,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),_e(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ne,s.get(Y).__webglTexture,0,De(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ne,s.get(Y).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(R,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let ie=l===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||_e(b)){let ne=b.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Fi?ie=n.DEPTH_COMPONENT32F:ne.type===ss&&(ie=n.DEPTH_COMPONENT24));let se=De(b);_e(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,ie,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ie,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){let ie=De(b);Y&&_e(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,b.width,b.height):_e(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{let ie=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0;ne<ie.length;ne++){let se=ie[ne],ve=o.convert(se.format,se.colorSpace),fe=o.convert(se.type),me=E(se.internalFormat,ve,fe,se.colorSpace),Ce=De(b);Y&&_e(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,me,b.width,b.height):_e(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,me,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let ie=s.get(b.depthTexture).__webglTexture,ne=De(b);if(b.depthTexture.format===zs)_e(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(b.depthTexture.format===Or)_e(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Me(R){let b=s.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");be(b.__webglFramebuffer,R)}else if(Y){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]=n.createRenderbuffer(),ye(b.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ye(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(R,b,Y){let ie=s.get(R);b!==void 0&&de(ie.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Me(R)}function V(R){let b=R.texture,Y=s.get(R),ie=s.get(b);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=b.version,a.memory.textures++);let ne=R.isWebGLCubeRenderTarget===!0,se=R.isWebGLMultipleRenderTargets===!0,ve=_(R)||l;if(ne){Y.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(l&&b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[fe]=[];for(let me=0;me<b.mipmaps.length;me++)Y.__webglFramebuffer[fe][me]=n.createFramebuffer()}else Y.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(l&&b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)Y.__webglFramebuffer[fe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(se)if(r.drawBuffers){let fe=R.texture;for(let me=0,Ce=fe.length;me<Ce;me++){let Ye=s.get(fe[me]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&R.samples>0&&_e(R)===!1){let fe=se?b:[b];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let me=0;me<fe.length;me++){let Ce=fe[me];Y.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[me]);let Ye=o.convert(Ce.format,Ce.colorSpace),ee=o.convert(Ce.type),pt=E(Ce.internalFormat,Ye,ee,Ce.colorSpace,R.isXRRenderTarget===!0),tt=De(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,pt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Y.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),U(n.TEXTURE_CUBE_MAP,b,ve);for(let fe=0;fe<6;fe++)if(l&&b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)de(Y.__webglFramebuffer[fe][me],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else de(Y.__webglFramebuffer[fe],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(b,ve)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){let fe=R.texture;for(let me=0,Ce=fe.length;me<Ce;me++){let Ye=fe[me],ee=s.get(Ye);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),U(n.TEXTURE_2D,Ye,ve),de(Y.__webglFramebuffer,R,Ye,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),x(Ye,ve)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(l?fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ie.__webglTexture),U(fe,b,ve),l&&b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)de(Y.__webglFramebuffer[me],R,b,n.COLOR_ATTACHMENT0,fe,me);else de(Y.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,fe,0);x(b,ve)&&M(fe),t.unbindTexture()}R.depthBuffer&&Me(R)}function Dt(R){let b=_(R)||l,Y=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ne=Y.length;ie<ne;ie++){let se=Y[ie];if(x(se,b)){let ve=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=s.get(se).__webglTexture;t.bindTexture(ve,fe),M(ve),t.unbindTexture()}}}function Se(R){if(l&&R.samples>0&&_e(R)===!1){let b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Y=R.width,ie=R.height,ne=n.COLOR_BUFFER_BIT,se=[],ve=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=s.get(R),me=R.isWebGLMultipleRenderTargets===!0;if(me)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){se.push(n.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&se.push(ve);let Ye=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ye===!1&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]),Ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),me){let ee=s.get(b[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,ne,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]);let Ye=s.get(b[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function De(R){return Math.min(r.maxSamples,R.samples)}function _e(R){let b=s.get(R);return l&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function gt(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ve(R,b){let Y=R.colorSpace,ie=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Zh||Y!==Vt&&Y!==Vn&&(at.getTransfer(Y)===St?l===!1?e.has("EXT_sRGB")===!0&&ie===Gn?(R.format=Zh,R.minFilter=sn,R.generateMipmaps=!1):b=vl.sRGBToLinear(b):(ie!==Gn||ne!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}this.allocateTextureUnit=O,this.resetTextureUnits=te,this.setTexture2D=$,this.setTexture2DArray=S,this.setTexture3D=C,this.setTextureCube=F,this.rebindTextures=Ue,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e}function TE(n,e,t){let s=t.isWebGL2;function r(o,a=Vn){let l,c=at.getTransfer(a);if(o===ls)return n.UNSIGNED_BYTE;if(o===Cm)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Pm)return n.UNSIGNED_SHORT_5_5_5_1;if(o===r_)return n.BYTE;if(o===o_)return n.SHORT;if(o===Nu)return n.UNSIGNED_SHORT;if(o===Rm)return n.INT;if(o===ss)return n.UNSIGNED_INT;if(o===Fi)return n.FLOAT;if(o===ai)return s?n.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===a_)return n.ALPHA;if(o===Gn)return n.RGBA;if(o===l_)return n.LUMINANCE;if(o===c_)return n.LUMINANCE_ALPHA;if(o===zs)return n.DEPTH_COMPONENT;if(o===Or)return n.DEPTH_STENCIL;if(o===Zh)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===h_)return n.RED;if(o===Lm)return n.RED_INTEGER;if(o===u_)return n.RG;if(o===Im)return n.RG_INTEGER;if(o===Dm)return n.RGBA_INTEGER;if(o===ah||o===lh||o===ch||o===hh)if(c===St)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===ah)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===lh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ch)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===hh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===ah)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===lh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ch)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===hh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Wd||o===Xd||o===qd||o===Yd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===Wd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Xd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===qd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Yd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Nm)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Kd||o===Zd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Kd)return c===St?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Zd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===$d||o===Jd||o===jd||o===Qd||o===ep||o===tp||o===np||o===ip||o===sp||o===rp||o===op||o===ap||o===lp||o===cp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===$d)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Jd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===jd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Qd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ep)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===tp)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===np)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ip)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===sp)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===rp)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===op)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ap)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===lp)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===cp)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===uh||o===hp||o===up)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===uh)return c===St?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===hp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===up)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===f_||o===fp||o===dp||o===pp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===uh)return l.COMPRESSED_RED_RGTC1_EXT;if(o===fp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===dp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===pp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Hs?s?n.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}function wE(n,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function s(_,m){m.color.getRGB(_.fogColor.value,Gm(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,x,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(_,m):m.isMeshToonMaterial?(o(_,m),f(_,m)):m.isMeshPhongMaterial?(o(_,m),h(_,m)):m.isMeshStandardMaterial?(o(_,m),d(_,m),m.isMeshPhysicalMaterial&&p(_,m,E)):m.isMeshMatcapMaterial?(o(_,m),g(_,m)):m.isMeshDepthMaterial?o(_,m):m.isMeshDistanceMaterial?(o(_,m),y(_,m)):m.isMeshNormalMaterial?o(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&l(_,m)):m.isPointsMaterial?c(_,m,x,M):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Rn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Rn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let x=e.get(m).envMap;if(x&&(_.envMap.value=x,_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;let M=n._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*M,t(m.lightMap,_.lightMapTransform)}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function l(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,x,M){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*x,_.scale.value=M*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),e.get(m).envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,x){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&_.clearcoatNormalScale.value.negate())),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function y(_,m){let x=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function RE(n,e,t,s){let r={},o={},a=[],l=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,M){let E=M.program;s.uniformBlockBinding(x,E)}function u(x,M){let E=r[x.id];E===void 0&&(g(x),E=h(x),r[x.id]=E,x.addEventListener("dispose",_));let L=M.program;s.updateUBOMapping(x,L);let w=e.render.frame;o[x.id]!==w&&(d(x),o[x.id]=w)}function h(x){let M=f();x.__bindingPointIndex=M;let E=n.createBuffer(),L=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function f(){for(let x=0;x<l;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=r[x.id],E=x.uniforms,L=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,P=E.length;w<P;w++){let D=Array.isArray(E[w])?E[w]:[E[w]];for(let v=0,T=D.length;v<T;v++){let k=D[v];if(p(k,w,v,L)===!0){let J=k.__offset,te=Array.isArray(k.value)?k.value:[k.value],O=0;for(let H=0;H<te.length;H++){let $=te[H],S=y($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,J+O,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,O),O+=S.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,E,L){let w=x.value,P=M+"_"+E;if(L[P]===void 0)return typeof w=="number"||typeof w=="boolean"?L[P]=w:L[P]=w.clone(),!0;{let D=L[P];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return L[P]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(x){let M=x.uniforms,E=0,L=16;for(let P=0,D=M.length;P<D;P++){let v=Array.isArray(M[P])?M[P]:[M[P]];for(let T=0,k=v.length;T<k;T++){let J=v[T],te=Array.isArray(J.value)?J.value:[J.value];for(let O=0,H=te.length;O<H;O++){let $=te[O],S=y($),C=E%L;C!==0&&L-C<S.boundary&&(E+=L-C),J.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=E,E+=S.storage}}}let w=E%L;return w>0&&(E+=L-w),x.__size=E,x.__cache={},this}function y(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function _(x){let M=x.target;M.removeEventListener("dispose",_);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function m(){for(let x in r)n.deleteBuffer(r[x]);a=[],r={},o={}}return{bind:c,update:u,dispose:m}}function ym(n,e,t,s,r,o,a){let l=du.distanceSqToPoint(n);if(l<t){let c=new I;du.closestPointToPoint(n,c),c.applyMatrix4(s);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:a})}}function Fu(){let n=0,e=0,t=0,s=0;function r(o,a,l,c){n=o,e=l,t=-3*o+3*a-2*l-c,s=2*o-2*a+l+c}return{initCatmullRom:function(o,a,l,c,u){r(a,l,u*(l-o),u*(c-a))},initNonuniformCatmullRom:function(o,a,l,c,u,h,f){let d=(a-o)/u-(l-o)/(u+h)+(l-a)/h,p=(l-a)/h-(c-a)/(h+f)+(c-l)/f;d*=h,p*=h,r(a,l,d,p)},calc:function(o){let a=o*o,l=a*o;return n+e*o+t*a+s*l}}}function Mm(n,e,t,s,r){let o=(s-e)*.5,a=(r-t)*.5,l=n*n,c=n*l;return(2*t-2*s+o+a)*c+(-3*t+3*s-2*o-a)*l+o*n+t}function IE(n,e){let t=1-n;return t*t*e}function DE(n,e){return 2*(1-n)*n*e}function NE(n,e){return n*n*e}function Co(n,e,t,s){return IE(n,e)+DE(n,t)+NE(n,s)}function UE(n,e){let t=1-n;return t*t*t*e}function BE(n,e){let t=1-n;return 3*t*t*n*e}function OE(n,e){return 3*(1-n)*n*n*e}function FE(n,e){return n*n*n*e}function Po(n,e,t,s,r){return UE(n,e)+BE(n,t)+OE(n,s)+FE(n,r)}function dl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function zE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function kE(n){function e(r,o){return n[r]-n[o]}let t=n.length,s=new Array(t);for(let r=0;r!==t;++r)s[r]=r;return s.sort(e),s}function xm(n,e,t){let s=n.length,r=new n.constructor(s);for(let o=0,a=0;a!==s;++o){let l=t[o]*e;for(let c=0;c!==e;++c)r[a++]=n[l+c]}return r}function Zm(n,e,t,s){let r=1,o=n[0];for(;o!==void 0&&o[s]===void 0;)o=n[r++];if(o===void 0)return;let a=o[s];if(a!==void 0)if(Array.isArray(a))do a=o[s],a!==void 0&&(e.push(o.time),t.push.apply(t,a)),o=n[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[s],a!==void 0&&(e.push(o.time),a.toArray(t,t.length)),o=n[r++];while(o!==void 0);else do a=o[s],a!==void 0&&(e.push(o.time),t.push(a)),o=n[r++];while(o!==void 0)}function GE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return Gi;case"color":return Gl;case"quaternion":return vi;case"bool":case"boolean":return ds;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function VE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=GE(n.type);if(n.times===void 0){let t=[],s=[];Zm(n.keys,t,s,"value"),n.times=t,n.values=s}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}function Sm(){return(typeof performance>"u"?Date:performance).now()}var Sg,Fd,Tg,Tm,Ag,Bi,Mi,Rn,yt,yi,Lr,bt,Hd,zd,wg,Bs,Rg,Cg,kd,Gd,Pg,Lg,Ig,Dg,Wh,Xh,Ng,Ug,Bg,Og,Fg,Hg,zg,kg,Gg,Vg,Wg,Xg,pl,qg,Yg,Kg,Zg,Am,$g,Jg,os,jg,Qg,e_,t_,n_,i_,Vd,s_,wm,Ur,Br,qh,Yh,Zl,ri,xn,Lo,Pt,ml,as,sn,Du,oi,ls,r_,o_,Nu,Rm,ss,Fi,ai,Cm,Pm,Hs,a_,Gn,l_,c_,zs,Or,h_,Lm,u_,Im,Dm,ah,lh,ch,hh,Wd,Xd,qd,Yd,Nm,Kd,Zd,$d,Jd,jd,Qd,ep,tp,np,ip,sp,rp,op,ap,lp,cp,uh,hp,up,f_,fp,dp,pp,Fr,Gs,fh,mp,gp,_p,d_,Um,$l,Go,Bm,ks,p_,m_,Om,g_,Vn,ft,Vt,Uu,Jl,gl,St,_l,yl,fr,yp,__,y_,M_,Fm,x_,v_,E_,b_,Kh,Mp,Zh,Hi,Ml,cs,fn,xp,Ir,Hr,Hm,ue,Qe,dh,vp,Ep,bp,Ba,H_,at,dr,vl,z_,El,k_,rn,_t,Jh,vn,bl,jh,Nn,I,gh,Sp,Tt,Pi,ti,Oa,pr,mr,gr,Qi,es,Ls,Mo,Fa,Ha,Is,G_,xo,yh,Un,Li,Mh,za,ts,xh,ka,vh,zr,Ne,_r,ni,V_,W_,ns,Ga,In,Tp,Ap,Sl,Tl,X_,wp,yr,Ii,Va,vo,q_,Y_,Rp,Cp,Pp,K_,Z_,Lt,ii,Di,Eh,Ni,Mr,xr,Lp,bh,Sh,Th,Wa,Fs,km,is,Xa,xe,dn,$_,Bn,ae,Ot,qa,ht,Al,wl,rt,J_,kn,wh,vr,Dn,Eo,jt,dt,Ip,Ds,Ya,Dp,Er,br,Sr,Rh,Ka,Za,$a,Ja,Np,Up,Bp,ja,Qa,j,Ze,Xr,ey,ty,on,Rl,Gt,Tr,Ar,Qh,Cl,eu,Ch,ny,iy,Oi,Ns,tl,Do,Oe,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,_y,yy,My,xy,vy,Ey,by,Sy,Ty,Ay,wy,Ry,Cy,Py,Ly,Iy,Dy,Ny,Uy,By,Oy,Fy,Hy,zy,ky,Gy,Vy,Wy,Xy,qy,Yy,Ky,Zy,$y,Jy,jy,Qy,eM,tM,nM,iM,sM,rM,oM,aM,lM,cM,hM,uM,fM,dM,pM,mM,gM,_M,yM,MM,xM,vM,EM,bM,SM,TM,AM,wM,RM,CM,PM,LM,IM,DM,NM,UM,BM,OM,FM,HM,zM,kM,GM,VM,WM,XM,qM,YM,KM,ZM,$M,JM,jM,QM,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,_x,yx,Mx,xx,vx,Ex,bx,Sx,Tx,Ax,wx,Rx,Cx,Px,Lx,Ix,Dx,Nx,Ux,Bx,Ox,qe,oe,gi,nl,hs,Cr,Op,Os,Ph,Fp,Lh,Ih,Dh,Us,wr,Hp,Pl,Ll,Wm,Xm,qm,Ym,Km,Vp,Wp,Xp,qp,Yp,tu,nu,iu,Nh,Nr,Gv,Vv,jv,Qv,tE,cE,ru,ou,gE,au,lu,xE,vE,cu,ot,AE,Ro,hu,No,uu,Il,Dl,Uo,yn,Bo,sm,rm,om,CE,am,sl,Uh,lm,Bh,Nl,Oo,fu,cm,PE,Ul,Vs,Rr,hm,rl,um,LE,bo,So,Bl,Cn,fm,dm,pm,Oh,ol,zi,mm,gm,Ft,Ol,Ws,_m,du,al,ll,Gr,Wn,li,Fl,pu,cl,Fh,Hh,zh,Fo,mu,gu,_u,yu,Mu,Hl,xu,HE,En,zl,vu,hl,ul,kh,fl,an,Xs,xi,us,kl,Vr,Xn,fs,Eu,bu,Su,qn,ds,Gl,ki,Tu,vi,ps,Gi,Vl,rs,Au,WE,Vi,Ui,wu,Ho,Ru,Wr,zo,Gh,vm,Em,ko,Cu,Wl,bm,To,Vh,Pu,Xl,Lu,ql,ms,Yl,Kl,Hu,XE,zu,qE,YE,KE,ZE,$E,JE,jE,Iu,Et,Ib,Ei=ei(()=>{Sg=0,Fd=1,Tg=2,Tm=1,Ag=2,Bi=3,Mi=0,Rn=1,yt=2,yi=0,Lr=1,bt=2,Hd=3,zd=4,wg=5,Bs=100,Rg=101,Cg=102,kd=103,Gd=104,Pg=200,Lg=201,Ig=202,Dg=203,Wh=204,Xh=205,Ng=206,Ug=207,Bg=208,Og=209,Fg=210,Hg=211,zg=212,kg=213,Gg=214,Vg=0,Wg=1,Xg=2,pl=3,qg=4,Yg=5,Kg=6,Zg=7,Am=0,$g=1,Jg=2,os=0,jg=1,Qg=2,e_=3,t_=4,n_=5,i_=6,Vd="attached",s_="detached",wm=300,Ur=301,Br=302,qh=303,Yh=304,Zl=306,ri=1e3,xn=1001,Lo=1002,Pt=1003,ml=1004,as=1005,sn=1006,Du=1007,oi=1008,ls=1009,r_=1010,o_=1011,Nu=1012,Rm=1013,ss=1014,Fi=1015,ai=1016,Cm=1017,Pm=1018,Hs=1020,a_=1021,Gn=1023,l_=1024,c_=1025,zs=1026,Or=1027,h_=1028,Lm=1029,u_=1030,Im=1031,Dm=1033,ah=33776,lh=33777,ch=33778,hh=33779,Wd=35840,Xd=35841,qd=35842,Yd=35843,Nm=36196,Kd=37492,Zd=37496,$d=37808,Jd=37809,jd=37810,Qd=37811,ep=37812,tp=37813,np=37814,ip=37815,sp=37816,rp=37817,op=37818,ap=37819,lp=37820,cp=37821,uh=36492,hp=36494,up=36495,f_=36283,fp=36284,dp=36285,pp=36286,Fr=2300,Gs=2301,fh=2302,mp=2400,gp=2401,_p=2402,d_=2500,Um=0,$l=1,Go=2,Bm=3e3,ks=3001,p_=3200,m_=3201,Om=0,g_=1,Vn="",ft="srgb",Vt="srgb-linear",Uu="display-p3",Jl="display-p3-linear",gl="linear",St="srgb",_l="rec709",yl="p3",fr=7680,yp=519,__=512,y_=513,M_=514,Fm=515,x_=516,v_=517,E_=518,b_=519,Kh=35044,Mp="300 es",Zh=1035,Hi=2e3,Ml=2001,cs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let s=this._listeners[e.type];if(s!==void 0){e.target=this;let r=s.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xp=1234567,Ir=Math.PI/180,Hr=180/Math.PI;Hm={DEG2RAD:Ir,RAD2DEG:Hr,generateUUID:si,clamp:Qt,euclideanModulo:Bu,mapLinear:S_,inverseLerp:T_,lerp:Ao,damp:A_,pingpong:w_,smoothstep:R_,smootherstep:C_,randInt:P_,randFloat:L_,randFloatSpread:I_,seededRandom:D_,degToRad:N_,radToDeg:U_,isPowerOfTwo:$h,ceilPowerOfTwo:B_,floorPowerOfTwo:xl,setQuaternionFromProperEuler:O_,normalize:mt,denormalize:_i},ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,s=this.y,r=e.elements;return this.x=r[0]*t+r[3]*s+r[6],this.y=r[1]*t+r[4]*s+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Qt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let s=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*s-a*r+e.x,this.y=o*r+a*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class n{constructor(e,t,s,r,o,a,l,c,u){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,r,o,a,l,c,u)}set(e,t,s,r,o,a,l,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=o,h[5]=c,h[6]=s,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,r=t.elements,o=this.elements,a=s[0],l=s[3],c=s[6],u=s[1],h=s[4],f=s[7],d=s[2],p=s[5],g=s[8],y=r[0],_=r[3],m=r[6],x=r[1],M=r[4],E=r[7],L=r[2],w=r[5],P=r[8];return o[0]=a*y+l*x+c*L,o[3]=a*_+l*M+c*w,o[6]=a*m+l*E+c*P,o[1]=u*y+h*x+f*L,o[4]=u*_+h*M+f*w,o[7]=u*m+h*E+f*P,o[2]=d*y+p*x+g*L,o[5]=d*_+p*M+g*w,o[8]=d*m+p*E+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*l*u-s*o*h+s*l*c+r*o*u-r*a*c}invert(){let e=this.elements,t=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=h*a-l*u,d=l*c-h*o,p=u*o-a*c,g=t*f+s*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(r*u-h*s)*y,e[2]=(l*s-r*a)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*o-l*t)*y,e[6]=p*y,e[7]=(s*c-u*t)*y,e[8]=(a*t-s*o)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,r,o,a,l){let c=Math.cos(o),u=Math.sin(o);return this.set(s*c,s*u,-s*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(dh.makeScale(e,t)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,s=e.elements;for(let r=0;r<9;r++)if(t[r]!==s[r])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dh=new Qe;vp={};Ep=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bp=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ba={[Vt]:{transfer:gl,primaries:_l,toReference:n=>n,fromReference:n=>n},[ft]:{transfer:St,primaries:_l,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Jl]:{transfer:gl,primaries:yl,toReference:n=>n.applyMatrix3(bp),fromReference:n=>n.applyMatrix3(Ep)},[Uu]:{transfer:St,primaries:yl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(bp),fromReference:n=>n.applyMatrix3(Ep).convertLinearToSRGB()}},H_=new Set([Vt,Jl]),at={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!H_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let s=Ba[e].toReference,r=Ba[t].fromReference;return r(s(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ba[n].primaries},getTransfer:function(n){return n===Vn?gl:Ba[n].transfer}};vl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dr===void 0&&(dr=Io("canvas")),dr.width=e.width,dr.height=e.height;let s=dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Io("canvas");t.width=e.width,t.height=e.height;let s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);let r=s.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Dr(o[a]/255)*255;return s.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Dr(t[s]/255)*255):t[s]=Dr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},z_=0,El=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let s={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(mh(r[a].image)):o.push(mh(r[a]))}else o=mh(r);s.url=o}return t||(e.images[this.uuid]=s),s}};k_=0,rn=class n extends cs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,s=xn,r=xn,o=sn,a=oi,l=Gn,c=ls,u=n.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=si(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ks?ft:Vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ri:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ri:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?ks:Bm}set encoding(e){wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ks?ft:Vn}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=wm;rn.DEFAULT_ANISOTROPY=1;_t=class n{constructor(e=0,t=0,s=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,r){return this.x=e,this.y=t,this.z=s,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,s=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*s+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*s+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*s+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*s+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,r,o,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],p=c[5],g=c[9],y=c[2],_=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+_)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(u+1)/2,E=(p+1)/2,L=(m+1)/2,w=(h+d)/4,P=(f+y)/4,D=(g+_)/4;return M>E&&M>L?M<.01?(s=0,r=.707106781,o=.707106781):(s=Math.sqrt(M),r=w/s,o=P/s):E>L?E<.01?(s=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),s=w/r,o=D/r):L<.01?(s=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),s=P/o,r=D/o),this.set(s,r,o,t),this}let x=Math.sqrt((_-g)*(_-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(_-g)/x,this.y=(f-y)/x,this.z=(d-h)/x,this.w=Math.acos((u+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jh=class extends cs{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let r={width:e,height:t,depth:1};s.encoding!==void 0&&(wo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===ks?ft:Vn),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new rn(r,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new El(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Jh{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}},bl=class extends rn{constructor(e=null,t=1,s=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jh=class extends rn{constructor(e=null,t=1,s=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nn=class{constructor(e=0,t=0,s=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=r}static slerpFlat(e,t,s,r,o,a,l){let c=s[r+0],u=s[r+1],h=s[r+2],f=s[r+3],d=o[a+0],p=o[a+1],g=o[a+2],y=o[a+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(l===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(f!==y||c!==d||u!==p||h!==g){let _=1-l,m=c*d+u*p+h*g+f*y,x=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let L=Math.sqrt(M),w=Math.atan2(L,m*x);_=Math.sin(_*w)/L,l=Math.sin(l*w)/L}let E=l*x;if(c=c*_+d*E,u=u*_+p*E,h=h*_+g*E,f=f*_+y*E,_===1-l){let L=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=L,u*=L,h*=L,f*=L}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,s,r,o,a){let l=s[r],c=s[r+1],u=s[r+2],h=s[r+3],f=o[a],d=o[a+1],p=o[a+2],g=o[a+3];return e[t]=l*g+h*f+c*p-u*d,e[t+1]=c*g+h*d+u*f-l*p,e[t+2]=u*g+h*p+l*d-c*f,e[t+3]=h*g-l*f-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,r){return this._x=e,this._y=t,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let s=e._x,r=e._y,o=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(s/2),h=l(r/2),f=l(o/2),d=c(s/2),p=c(r/2),g=c(o/2);switch(a){case"XYZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"YZX":this._x=d*h*f+u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f-d*p*g;break;case"XZY":this._x=d*h*f-u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let s=t/2,r=Math.sin(s);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,s=t[0],r=t[4],o=t[8],a=t[1],l=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=s+l+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-u)*p,this._z=(a-r)*p}else if(s>l&&s>f){let p=2*Math.sqrt(1+s-l-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+u)/p}else if(l>f){let p=2*Math.sqrt(1+l-s-f);this._w=(o-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-s-l);this._w=(a-r)/p,this._x=(o+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let s=this.angleTo(e);if(s===0)return this;let r=Math.min(1,t/s);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let s=e._x,r=e._y,o=e._z,a=e._w,l=t._x,c=t._y,u=t._z,h=t._w;return this._x=s*h+a*l+r*u-o*c,this._y=r*h+a*c+o*l-s*u,this._z=o*h+a*u+s*c-r*l,this._w=a*h-s*l-r*c-o*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let s=this._x,r=this._y,o=this._z,a=this._w,l=a*e._w+s*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=s,this._y=r,this._z=o,this;let c=1-l*l;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*s+t*this._x,this._y=p*r+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}let u=Math.sqrt(c),h=Math.atan2(u,l),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=a*f+this._w*d,this._x=s*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){let e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),s*Math.sin(o),s*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,s=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,s=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6]*r,this.y=o[1]*t+o[4]*s+o[7]*r,this.z=o[2]*t+o[5]*s+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,s=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*s+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*s+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*s+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*s+o[10]*r+o[14])*a,this}applyQuaternion(e){let t=this.x,s=this.y,r=this.z,o=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*s),h=2*(l*t-o*r),f=2*(o*s-a*t);return this.x=t+c*u+a*f-l*h,this.y=s+c*h+l*u-o*f,this.z=r+c*f+o*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,s=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*s+o[8]*r,this.y=o[1]*t+o[5]*s+o[9]*r,this.z=o[2]*t+o[6]*s+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let s=e.x,r=e.y,o=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-o*l,this.y=o*a-s*c,this.z=s*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Qt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y,r=this.z-e.z;return t*t+s*s+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){let r=Math.sin(t)*e;return this.x=r*Math.sin(s),this.y=Math.cos(t)*e,this.z=r*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gh=new I,Sp=new Nn,Tt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let s=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let s=e.geometry;if(s!==void 0){let o=s.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(o,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Oa.copy(s.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}let r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Fa.subVectors(this.max,Mo),pr.subVectors(e.a,Mo),mr.subVectors(e.b,Mo),gr.subVectors(e.c,Mo),Qi.subVectors(mr,pr),es.subVectors(gr,mr),Ls.subVectors(pr,gr);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-Ls.z,Ls.y,Qi.z,0,-Qi.x,es.z,0,-es.x,Ls.z,0,-Ls.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-Ls.y,Ls.x,0];return!_h(t,pr,mr,gr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,pr,mr,gr,Fa))?!1:(Ha.crossVectors(Qi,es),t=[Ha.x,Ha.y,Ha.z],_h(t,pr,mr,gr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new I,new I,new I,new I,new I,new I,new I,new I],ti=new I,Oa=new Tt,pr=new I,mr=new I,gr=new I,Qi=new I,es=new I,Ls=new I,Mo=new I,Fa=new I,Ha=new I,Is=new I;G_=new Tt,xo=new I,yh=new I,Un=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let s=this.center;t!==void 0?s.copy(t):G_.setFromPoints(e).getCenter(s);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,s.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);let t=xo.lengthSq();if(t>this.radius*this.radius){let s=Math.sqrt(t),r=(s-this.radius)*.5;this.center.addScaledVector(xo,r/s),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(yh)),this.expandByPoint(xo.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new I,Mh=new I,za=new I,ts=new I,xh=new I,ka=new I,vh=new I,zr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,s,r){Mh.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(Mh);let o=e.distanceTo(t)*.5,a=-this.direction.dot(za),l=ts.dot(this.direction),c=-ts.dot(za),u=ts.lengthSq(),h=Math.abs(1-a*a),f,d,p,g;if(h>0)if(f=a*c-l,d=a*l-c,g=o*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,p=f*(f+a*d+2*l)+d*(a*f+d+2*c)+u}else d=o,f=Math.max(0,-(a*d+l)),p=-f*f+d*(d+2*c)+u;else d=-o,f=Math.max(0,-(a*d+l)),p=-f*f+d*(d+2*c)+u;else d<=-g?(f=Math.max(0,-(-a*o+l)),d=f>0?-o:Math.min(Math.max(-o,-c),o),p=-f*f+d*(d+2*c)+u):d<=g?(f=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+u):(f=Math.max(0,-(a*o+l)),d=f>0?o:Math.min(Math.max(-o,-c),o),p=-f*f+d*(d+2*c)+u);else d=a>0?-o:o,f=Math.max(0,-(a*d+l)),p=-f*f+d*(d+2*c)+u;return s&&s.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Mh).addScaledVector(za,d),p}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let s=Li.dot(this.direction),r=Li.dot(Li)-s*s,o=e.radius*e.radius;if(r>o)return null;let a=Math.sqrt(o-r),l=s-a,c=s+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){let s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,r,o,a,l,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(s=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(s=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(o=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),s>a||o>r||((o>s||isNaN(s))&&(s=o),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(l=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),s>c||l>r)||((l>s||s!==s)&&(s=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(s>=0?s:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,s,r,o){xh.subVectors(t,e),ka.subVectors(s,e),vh.crossVectors(xh,ka);let a=this.direction.dot(vh),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ts.subVectors(this.origin,e);let c=l*this.direction.dot(ka.crossVectors(ts,ka));if(c<0)return null;let u=l*this.direction.dot(xh.cross(ts));if(u<0||c+u>a)return null;let h=-l*ts.dot(vh);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class n{constructor(e,t,s,r,o,a,l,c,u,h,f,d,p,g,y,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,r,o,a,l,c,u,h,f,d,p,g,y,_)}set(e,t,s,r,o,a,l,c,u,h,f,d,p,g,y,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=s,m[12]=r,m[1]=o,m[5]=a,m[9]=l,m[13]=c,m[2]=u,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=g,m[11]=y,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){let t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,s=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),o=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=s[0]*r,t[1]=s[1]*r,t[2]=s[2]*r,t[3]=0,t[4]=s[4]*o,t[5]=s[5]*o,t[6]=s[6]*o,t[7]=0,t[8]=s[8]*a,t[9]=s[9]*a,t[10]=s[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,s=e.x,r=e.y,o=e.z,a=Math.cos(s),l=Math.sin(s),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){let d=a*h,p=a*f,g=l*h,y=l*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=p+g*u,t[5]=d-y*u,t[9]=-l*c,t[2]=y-d*u,t[6]=g+p*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d+y*l,t[4]=g*l-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-l,t[2]=p*l-g,t[6]=y+d*l,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d-y*l,t[4]=-a*f,t[8]=g+p*l,t[1]=p+g*l,t[5]=a*h,t[9]=y-d*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*f,g=l*h,y=l*f;t[0]=c*h,t[4]=g*u-p,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=p*u-g,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*u,g=l*c,y=l*u;t[0]=c*h,t[4]=y-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-l*h,t[2]=-u*h,t[6]=p*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,p=a*u,g=l*c,y=l*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=l*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V_,e,W_)}lookAt(e,t,s){let r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),ns.crossVectors(s,In),ns.lengthSq()===0&&(Math.abs(s.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),ns.crossVectors(s,In)),ns.normalize(),Ga.crossVectors(In,ns),r[0]=ns.x,r[4]=Ga.x,r[8]=In.x,r[1]=ns.y,r[5]=Ga.y,r[9]=In.y,r[2]=ns.z,r[6]=Ga.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,r=t.elements,o=this.elements,a=s[0],l=s[4],c=s[8],u=s[12],h=s[1],f=s[5],d=s[9],p=s[13],g=s[2],y=s[6],_=s[10],m=s[14],x=s[3],M=s[7],E=s[11],L=s[15],w=r[0],P=r[4],D=r[8],v=r[12],T=r[1],k=r[5],J=r[9],te=r[13],O=r[2],H=r[6],$=r[10],S=r[14],C=r[3],F=r[7],G=r[11],W=r[15];return o[0]=a*w+l*T+c*O+u*C,o[4]=a*P+l*k+c*H+u*F,o[8]=a*D+l*J+c*$+u*G,o[12]=a*v+l*te+c*S+u*W,o[1]=h*w+f*T+d*O+p*C,o[5]=h*P+f*k+d*H+p*F,o[9]=h*D+f*J+d*$+p*G,o[13]=h*v+f*te+d*S+p*W,o[2]=g*w+y*T+_*O+m*C,o[6]=g*P+y*k+_*H+m*F,o[10]=g*D+y*J+_*$+m*G,o[14]=g*v+y*te+_*S+m*W,o[3]=x*w+M*T+E*O+L*C,o[7]=x*P+M*k+E*H+L*F,o[11]=x*D+M*J+E*$+L*G,o[15]=x*v+M*te+E*S+L*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[4],r=e[8],o=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],_=e[11],m=e[15];return g*(+o*c*f-r*u*f-o*l*d+s*u*d+r*l*p-s*c*p)+y*(+t*c*p-t*u*d+o*a*d-r*a*p+r*u*h-o*c*h)+_*(+t*u*f-t*l*p-o*a*f+s*a*p+o*l*h-s*u*h)+m*(-r*l*h-t*c*f+t*l*d+r*a*f-s*a*d+s*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=s),this}invert(){let e=this.elements,t=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],_=e[14],m=e[15],x=f*_*u-y*d*u+y*c*p-l*_*p-f*c*m+l*d*m,M=g*d*u-h*_*u-g*c*p+a*_*p+h*c*m-a*d*m,E=h*y*u-g*f*u+g*l*p-a*y*p-h*l*m+a*f*m,L=g*f*c-h*y*c-g*l*d+a*y*d+h*l*_-a*f*_,w=t*x+s*M+r*E+o*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return e[0]=x*P,e[1]=(y*d*o-f*_*o-y*r*p+s*_*p+f*r*m-s*d*m)*P,e[2]=(l*_*o-y*c*o+y*r*u-s*_*u-l*r*m+s*c*m)*P,e[3]=(f*c*o-l*d*o-f*r*u+s*d*u+l*r*p-s*c*p)*P,e[4]=M*P,e[5]=(h*_*o-g*d*o+g*r*p-t*_*p-h*r*m+t*d*m)*P,e[6]=(g*c*o-a*_*o-g*r*u+t*_*u+a*r*m-t*c*m)*P,e[7]=(a*d*o-h*c*o+h*r*u-t*d*u-a*r*p+t*c*p)*P,e[8]=E*P,e[9]=(g*f*o-h*y*o-g*s*p+t*y*p+h*s*m-t*f*m)*P,e[10]=(a*y*o-g*l*o+g*s*u-t*y*u-a*s*m+t*l*m)*P,e[11]=(h*l*o-a*f*o-h*s*u+t*f*u+a*s*p-t*l*p)*P,e[12]=L*P,e[13]=(h*y*r-g*f*r+g*s*d-t*y*d-h*s*_+t*f*_)*P,e[14]=(g*l*r-a*y*r-g*s*c+t*y*c+a*s*_-t*l*_)*P,e[15]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*P,this}scale(e){let t=this.elements,s=e.x,r=e.y,o=e.z;return t[0]*=s,t[4]*=r,t[8]*=o,t[1]*=s,t[5]*=r,t[9]*=o,t[2]*=s,t[6]*=r,t[10]*=o,t[3]*=s,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,r))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let s=Math.cos(t),r=Math.sin(t),o=1-s,a=e.x,l=e.y,c=e.z,u=o*a,h=o*l;return this.set(u*a+s,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+s,h*c-r*a,0,u*c-r*l,h*c+r*a,o*c*c+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,r,o,a){return this.set(1,s,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,s){let r=this.elements,o=t._x,a=t._y,l=t._z,c=t._w,u=o+o,h=a+a,f=l+l,d=o*u,p=o*h,g=o*f,y=a*h,_=a*f,m=l*f,x=c*u,M=c*h,E=c*f,L=s.x,w=s.y,P=s.z;return r[0]=(1-(y+m))*L,r[1]=(p+E)*L,r[2]=(g-M)*L,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(d+m))*w,r[6]=(_+x)*w,r[7]=0,r[8]=(g+M)*P,r[9]=(_-x)*P,r[10]=(1-(d+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,s){let r=this.elements,o=_r.set(r[0],r[1],r[2]).length(),a=_r.set(r[4],r[5],r[6]).length(),l=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ni.copy(this);let u=1/o,h=1/a,f=1/l;return ni.elements[0]*=u,ni.elements[1]*=u,ni.elements[2]*=u,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,t.setFromRotationMatrix(ni),s.x=o,s.y=a,s.z=l,this}makePerspective(e,t,s,r,o,a,l=Hi){let c=this.elements,u=2*o/(t-e),h=2*o/(s-r),f=(t+e)/(t-e),d=(s+r)/(s-r),p,g;if(l===Hi)p=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(l===Ml)p=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,s,r,o,a,l=Hi){let c=this.elements,u=1/(t-e),h=1/(s-r),f=1/(a-o),d=(t+e)*u,p=(s+r)*h,g,y;if(l===Hi)g=(a+o)*f,y=-2*f;else if(l===Ml)g=o*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,s=e.elements;for(let r=0;r<16;r++)if(t[r]!==s[r])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}},_r=new I,ni=new Ne,V_=new I(0,0,0),W_=new I(1,1,1),ns=new I,Ga=new I,In=new I,Tp=new Ne,Ap=new Nn,Sl=class n{constructor(e=0,t=0,s=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,r=this._order){return this._x=e,this._y=t,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){let r=e.elements,o=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sl.DEFAULT_ORDER="XYZ";Tl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},X_=0,wp=new I,yr=new Nn,Ii=new Ne,Va=new I,vo=new I,q_=new I,Y_=new Nn,Rp=new I(1,0,0),Cp=new I(0,1,0),Pp=new I(0,0,1),K_={type:"added"},Z_={type:"removed"},Lt=class n extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Sl,s=new Nn,r=new I(1,1,1);function o(){s.setFromEuler(t,!1)}function a(){t.setFromQuaternion(s,void 0,!1)}t._onChange(o),s._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Qe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,t){return wp.copy(e).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Va.copy(e):Va.set(e,t,s);let r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(vo,Va,this.up):Ii.lookAt(Va,vo,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(Ii),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(K_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z_)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,Y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let s=0,r=t.length;s<r;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let s=0,r=t.length;s<r;s++)t[s].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let s=0,r=t.length;s<r;s++){let o=t[s];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++){let l=r[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];o(e.shapes,f)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(o(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);l.length>0&&(s.geometries=l),c.length>0&&(s.materials=c),u.length>0&&(s.textures=u),h.length>0&&(s.images=h),f.length>0&&(s.shapes=f),d.length>0&&(s.skeletons=d),p.length>0&&(s.animations=p),g.length>0&&(s.nodes=g)}return s.object=r,s;function a(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){let r=e.children[s];this.add(r.clone())}return this}};Lt.DEFAULT_UP=new I(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ii=new I,Di=new I,Eh=new I,Ni=new I,Mr=new I,xr=new I,Lp=new I,bh=new I,Sh=new I,Th=new I,Wa=!1,Fs=class n{constructor(e=new I,t=new I,s=new I){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,r){r.subVectors(s,t),ii.subVectors(e,t),r.cross(ii);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,s,r,o){ii.subVectors(r,t),Di.subVectors(s,t),Eh.subVectors(e,t);let a=ii.dot(ii),l=ii.dot(Di),c=ii.dot(Eh),u=Di.dot(Di),h=Di.dot(Eh),f=a*u-l*l;if(f===0)return o.set(0,0,0),null;let d=1/f,p=(u*c-l*h)*d,g=(a*h-l*c)*d;return o.set(1-p-g,g,p)}static containsPoint(e,t,s,r){return this.getBarycoord(e,t,s,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getUV(e,t,s,r,o,a,l,c){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,t,s,r,o,a,l,c)}static getInterpolation(e,t,s,r,o,a,l,c){return this.getBarycoord(e,t,s,r,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ni.x),c.addScaledVector(a,Ni.y),c.addScaledVector(l,Ni.z),c)}static isFrontFacing(e,t,s,r){return ii.subVectors(s,t),Di.subVectors(e,t),ii.cross(Di).dot(r)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,r){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,s,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ii.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,s,r,o){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,s,r,o)}getInterpolation(e,t,s,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,s,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let s=this.a,r=this.b,o=this.c,a,l;Mr.subVectors(r,s),xr.subVectors(o,s),bh.subVectors(e,s);let c=Mr.dot(bh),u=xr.dot(bh);if(c<=0&&u<=0)return t.copy(s);Sh.subVectors(e,r);let h=Mr.dot(Sh),f=xr.dot(Sh);if(h>=0&&f<=h)return t.copy(r);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(s).addScaledVector(Mr,a);Th.subVectors(e,o);let p=Mr.dot(Th),g=xr.dot(Th);if(g>=0&&p<=g)return t.copy(o);let y=p*u-c*g;if(y<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(s).addScaledVector(xr,l);let _=h*g-p*f;if(_<=0&&f-h>=0&&p-g>=0)return Lp.subVectors(o,r),l=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(Lp,l);let m=1/(_+y+d);return a=y*m,l=d*m,t.copy(s).addScaledVector(Mr,a).addScaledVector(xr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Xa={h:0,s:0,l:0};xe=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,s,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=s,at.toWorkingColorSpace(this,r),this}setHSL(e,t,s,r=at.workingColorSpace){if(e=Bu(e,1),t=Qt(t,0,1),s=Qt(s,0,1),t===0)this.r=this.g=this.b=s;else{let o=s<=.5?s*(1+t):s+t-s*t,a=2*s-o;this.r=Ah(a,o,e+1/3),this.g=Ah(a,o,e),this.b=Ah(a,o,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=ft){function s(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let s=km[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=ph(e.r),this.g=ph(e.g),this.b=ph(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return at.fromWorkingColorSpace(dn.copy(this),e),Math.round(Qt(dn.r*255,0,255))*65536+Math.round(Qt(dn.g*255,0,255))*256+Math.round(Qt(dn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(dn.copy(this),t);let s=dn.r,r=dn.g,o=dn.b,a=Math.max(s,r,o),l=Math.min(s,r,o),c,u,h=(l+a)/2;if(l===a)c=0,u=0;else{let f=a-l;switch(u=h<=.5?f/(a+l):f/(2-a-l),a){case s:c=(r-o)/f+(r<o?6:0);break;case r:c=(o-s)/f+2;break;case o:c=(s-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=ft){at.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,s=dn.g,r=dn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(r*255)})`}offsetHSL(e,t,s){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Xa);let s=Ao(is.h,Xa.h,t),r=Ao(is.s,Xa.s,t),o=Ao(is.l,Xa.l,t);return this.setHSL(s,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,s=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*s+o[6]*r,this.g=o[1]*t+o[4]*s+o[7]*r,this.b=o[2]*t+o[5]*s+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new xe;xe.NAMES=km;$_=0,Bn=class extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Lr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Xh,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(s):r&&r.isVector3&&s&&s.isVector3?r.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==Mi&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Xh&&(s.blendDst=this.blendDst),this.blendEquation!==Bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==pl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yp&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function r(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}if(t){let o=r(e.textures),a=r(e.images);o.length>0&&(s.textures=o),a.length>0&&(s.images=a)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,s=null;if(t!==null){let r=t.length;s=new Array(r);for(let o=0;o!==r;++o)s[o]=t[o].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ae=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ot=new I,qa=new ue,ht=class{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Kh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[s+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=_i(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=mt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=r,this}setXYZW(e,t,s,r,o){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),s=mt(s,this.array),r=mt(r,this.array),o=mt(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kh&&(e.usage=this.usage),e}},Al=class extends ht{constructor(e,t,s){super(new Uint16Array(e),t,s)}},wl=class extends ht{constructor(e,t,s){super(new Uint32Array(e),t,s)}},rt=class extends ht{constructor(e,t,s){super(new Float32Array(e),t,s)}},J_=0,kn=new Ne,wh=new Lt,vr=new I,Dn=new Tt,Eo=new Tt,jt=new I,dt=class n extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?wl:Al)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let o=new Qe().getNormalMatrix(e);s.applyNormalMatrix(o),s.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,s){return kn.makeTranslation(e,t,s),this.applyMatrix4(kn),this}scale(e,t,s){return kn.makeScale(e,t,s),this.applyMatrix4(kn),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let s=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){let l=t[o];Eo.setFromBufferAttribute(l),this.morphTargetsRelative?(jt.addVectors(Dn.min,Eo.min),Dn.expandByPoint(jt),jt.addVectors(Dn.max,Eo.max),Dn.expandByPoint(jt)):(Dn.expandByPoint(Eo.min),Dn.expandByPoint(Eo.max))}Dn.getCenter(s);let r=0;for(let o=0,a=e.count;o<a;o++)jt.fromBufferAttribute(e,o),r=Math.max(r,s.distanceToSquared(jt));if(t)for(let o=0,a=t.length;o<a;o++){let l=t[o],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)jt.fromBufferAttribute(l,u),c&&(vr.fromBufferAttribute(e,u),jt.add(vr)),r=Math.max(r,s.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*l),4));let c=this.getAttribute("tangent").array,u=[],h=[];for(let T=0;T<l;T++)u[T]=new I,h[T]=new I;let f=new I,d=new I,p=new I,g=new ue,y=new ue,_=new ue,m=new I,x=new I;function M(T,k,J){f.fromArray(r,T*3),d.fromArray(r,k*3),p.fromArray(r,J*3),g.fromArray(a,T*2),y.fromArray(a,k*2),_.fromArray(a,J*2),d.sub(f),p.sub(f),y.sub(g),_.sub(g);let te=1/(y.x*_.y-_.x*y.y);isFinite(te)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(p,-y.y).multiplyScalar(te),x.copy(p).multiplyScalar(y.x).addScaledVector(d,-_.x).multiplyScalar(te),u[T].add(m),u[k].add(m),u[J].add(m),h[T].add(x),h[k].add(x),h[J].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:s.length}]);for(let T=0,k=E.length;T<k;++T){let J=E[T],te=J.start,O=J.count;for(let H=te,$=te+O;H<$;H+=3)M(s[H+0],s[H+1],s[H+2])}let L=new I,w=new I,P=new I,D=new I;function v(T){P.fromArray(o,T*3),D.copy(P);let k=u[T];L.copy(k),L.sub(P.multiplyScalar(P.dot(k))).normalize(),w.crossVectors(D,k);let te=w.dot(h[T])<0?-1:1;c[T*4]=L.x,c[T*4+1]=L.y,c[T*4+2]=L.z,c[T*4+3]=te}for(let T=0,k=E.length;T<k;++T){let J=E[T],te=J.start,O=J.count;for(let H=te,$=te+O;H<$;H+=3)v(s[H+0]),v(s[H+1]),v(s[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let d=0,p=s.count;d<p;d++)s.setXYZ(d,0,0,0);let r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I,f=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),l.fromBufferAttribute(s,g),c.fromBufferAttribute(s,y),u.fromBufferAttribute(s,_),l.add(h),c.add(h),u.add(h),s.setXYZ(g,l.x,l.y,l.z),s.setXYZ(y,c.x,c.y,c.z),s.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),s.setXYZ(d+0,h.x,h.y,h.z),s.setXYZ(d+1,h.x,h.y,h.z),s.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(l,c){let u=l.array,h=l.itemSize,f=l.normalized,d=new u.constructor(c.length*h),p=0,g=0;for(let y=0,_=c.length;y<_;y++){l.isInterleavedBufferAttribute?p=c[y]*l.data.stride+l.offset:p=c[y]*h;for(let m=0;m<h;m++)d[g++]=u[p++]}return new ht(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,s=this.index.array,r=this.attributes;for(let l in r){let c=r[l],u=e(c,s);t.setAttribute(l,u)}let o=this.morphAttributes;for(let l in o){let c=[],u=o[l];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,s);c.push(p)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let s=this.attributes;for(let c in s){let u=s[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let s=e.index;s!==null&&this.setIndex(s.clone(t));let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let o=e.morphAttributes;for(let u in o){let h=[],f=o[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ip=new Ne,Ds=new zr,Ya=new Un,Dp=new I,Er=new I,br=new I,Sr=new I,Rh=new I,Ka=new I,Za=new ue,$a=new ue,Ja=new ue,Np=new I,Up=new I,Bp=new I,ja=new I,Qa=new I,j=class extends Lt{constructor(e=new dt,t=new ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){let s=this.geometry,r=s.attributes.position,o=s.morphAttributes.position,a=s.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(o&&l){Ka.set(0,0,0);for(let c=0,u=o.length;c<u;c++){let h=l[c],f=o[c];h!==0&&(Rh.fromBufferAttribute(f,e),a?Ka.addScaledVector(Rh,h):Ka.addScaledVector(Rh.sub(t),h))}t.add(Ka)}return t}raycast(e,t){let s=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ya.copy(s.boundingSphere),Ya.applyMatrix4(o),Ds.copy(e.ray).recast(e.near),!(Ya.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Ya,Dp)===null||Ds.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Ip.copy(o).invert(),Ds.copy(e.ray).applyMatrix4(Ip),!(s.boundingBox!==null&&Ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,s){let r,o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,u=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,d=o.groups,p=o.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let _=d[g],m=a[_.materialIndex],x=Math.max(_.start,p.start),M=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let E=x,L=M;E<L;E+=3){let w=l.getX(E),P=l.getX(E+1),D=l.getX(E+2);r=el(this,m,e,s,u,h,f,w,P,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){let x=l.getX(_),M=l.getX(_+1),E=l.getX(_+2);r=el(this,a,e,s,u,h,f,x,M,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let _=d[g],m=a[_.materialIndex],x=Math.max(_.start,p.start),M=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let E=x,L=M;E<L;E+=3){let w=E,P=E+1,D=E+2;r=el(this,m,e,s,u,h,f,w,P,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){let x=_,M=_+1,E=_+2;r=el(this,a,e,s,u,h,f,x,M,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};Ze=class n extends dt{constructor(e=1,t=1,s=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:r,heightSegments:o,depthSegments:a};let l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,s,t,e,a,o,0),g("z","y","x",1,-1,s,t,-e,a,o,1),g("x","z","y",1,1,e,s,t,r,a,2),g("x","z","y",1,-1,e,s,-t,r,a,3),g("x","y","z",1,-1,e,t,s,r,o,4),g("x","y","z",-1,-1,e,t,-s,r,o,5),this.setIndex(c),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(f,2));function g(y,_,m,x,M,E,L,w,P,D,v){let T=E/P,k=L/D,J=E/2,te=L/2,O=w/2,H=P+1,$=D+1,S=0,C=0,F=new I;for(let G=0;G<$;G++){let W=G*k-te;for(let N=0;N<H;N++){let U=N*T-J;F[y]=U*x,F[_]=W*M,F[m]=O,u.push(F.x,F.y,F.z),F[y]=0,F[_]=0,F[m]=w>0?1:-1,h.push(F.x,F.y,F.z),f.push(N/P),f.push(1-G/D),S+=1}}for(let G=0;G<D;G++)for(let W=0;W<P;W++){let N=d+W+H*G,U=d+W+H*(G+1),q=d+(W+1)+H*(G+1),Q=d+(W+1)+H*G;c.push(N,U,Q),c.push(U,q,Q),C+=6}l.addGroup(p,C,v),p+=C,d+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Xr={clone:kr,merge:Mn},ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let s={};for(let r in this.extensions)this.extensions[r]===!0&&(s[r]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}},Rl=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends Rl{constructor(e=50,t=1,s=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,s,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,s=2*t,r=this.aspect*s,o=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/c,t-=a.offsetY*s/u,r*=a.width/c,s*=a.height/u}let l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tr=-90,Ar=1,Qh=class extends Lt{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(Tr,Ar,e,t);r.layers=this.layers,this.add(r);let o=new Gt(Tr,Ar,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Tr,Ar,e,t);a.layers=this.layers,this.add(a);let l=new Gt(Tr,Ar,e,t);l.layers=this.layers,this.add(l);let c=new Gt(Tr,Ar,e,t);c.layers=this.layers,this.add(c);let u=new Gt(Tr,Ar,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[s,r,o,a,l,c]=t;for(let u of t)this.remove(u);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ml)s.up.set(0,-1,0),s.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:s,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,a,l,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,r),e.render(t,o),e.setRenderTarget(s,1,r),e.render(t,a),e.setRenderTarget(s,2,r),e.render(t,l),e.setRenderTarget(s,3,r),e.render(t,c),e.setRenderTarget(s,4,r),e.render(t,u),s.texture.generateMipmaps=y,e.setRenderTarget(s,5,r),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,s.texture.needsPMREMUpdate=!0}},Cl=class extends rn{constructor(e,t,s,r,o,a,l,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,s,r,o,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eu=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let s={width:e,height:e,depth:1},r=[s,s,s,s,s,s];t.encoding!==void 0&&(wo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ks?ft:Vn),this.texture=new Cl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ze(5,5,5),o=new on({name:"CubemapFromEquirect",uniforms:kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Rn,blending:yi});o.uniforms.tEquirect.value=t;let a=new j(r,o),l=t.minFilter;return t.minFilter===oi&&(t.minFilter=sn),new Qh(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,s,r){let o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,s,r);e.setRenderTarget(o)}},Ch=new I,ny=new I,iy=new Qe,Oi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,r){return this.normal.set(e,t,s),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){let r=Ch.subVectors(s,t).cross(ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let s=e.delta(Ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let s=t||iy.getNormalMatrix(e),r=this.coplanarPoint(Ch).applyMatrix4(e),o=this.normal.applyMatrix3(s).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ns=new Un,tl=new I,Do=class{constructor(e=new Oi,t=new Oi,s=new Oi,r=new Oi,o=new Oi,a=new Oi){this.planes=[e,t,s,r,o,a]}set(e,t,s,r,o,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(s),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(e){let t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Hi){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],y=r[10],_=r[11],m=r[12],x=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,d-u,_-p,E-m).normalize(),s[1].setComponents(c+o,d+u,_+p,E+m).normalize(),s[2].setComponents(c+a,d+h,_+g,E+x).normalize(),s[3].setComponents(c-a,d-h,_-g,E-x).normalize(),s[4].setComponents(c-l,d-f,_-y,E-M).normalize(),t===Hi)s[5].setComponents(c+l,d+f,_+y,E+M).normalize();else if(t===Ml)s[5].setComponents(l,f,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,s=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(s)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let s=0;s<6;s++){let r=t[s];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Oe=class n extends dt{constructor(e=1,t=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:r};let o=e/2,a=t/2,l=Math.floor(s),c=Math.floor(r),u=l+1,h=c+1,f=e/l,d=t/c,p=[],g=[],y=[],_=[];for(let m=0;m<h;m++){let x=m*d-a;for(let M=0;M<u;M++){let E=M*f-o;g.push(E,-x,0),y.push(0,0,1),_.push(M/l),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<l;x++){let M=x+u*m,E=x+u*(m+1),L=x+1+u*(m+1),w=x+1+u*m;p.push(M,E,w),p.push(E,L,w)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
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
#endif`,ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uy=`#ifdef USE_AOMAP
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
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
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
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yy=`#ifdef USE_IRIDESCENCE
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
#endif`,My=`#ifdef USE_BUMPMAP
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ry=`#define PI 3.141592653589793
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
} // validated`,Cy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Py=`vec3 transformedNormal = objectNormal;
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
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",By=`
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
}`,Oy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
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
}`,Yy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jy=`uniform bool receiveShadow;
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
#endif`,jy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iM=`PhysicalMaterial material;
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
#endif`,sM=`struct PhysicalMaterial {
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
}`,rM=`
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
#endif`,oM=`#if defined( RE_IndirectDiffuse )
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
#endif`,aM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mM=`#if defined( USE_POINTS_UV )
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
#endif`,gM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MM=`#ifdef USE_MORPHNORMALS
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
#endif`,xM=`#ifdef USE_MORPHTARGETS
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
#endif`,vM=`#ifdef USE_MORPHTARGETS
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
#endif`,EM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wM=`#ifdef USE_NORMALMAP
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
#endif`,RM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VM=`float getShadowMask() {
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
}`,WM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XM=`#ifdef USE_SKINNING
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
#endif`,qM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YM=`#ifdef USE_SKINNING
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
#endif`,KM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jM=`#ifdef USE_TRANSMISSION
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
#endif`,QM=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,_x=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,Mx=`uniform vec3 diffuse;
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
}`,xx=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,Ex=`#define MATCAP
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
}`,bx=`#define MATCAP
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
}`,Sx=`#define NORMAL
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
}`,Tx=`#define NORMAL
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
}`,Ax=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Ux=`uniform vec3 color;
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
}`,Bx=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:ry,alphahash_pars_fragment:oy,alphamap_fragment:ay,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:hy,aomap_fragment:uy,aomap_pars_fragment:fy,batching_pars_vertex:dy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:_y,iridescence_fragment:yy,bumpmap_pars_fragment:My,clipping_planes_fragment:xy,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:by,color_fragment:Sy,color_pars_fragment:Ty,color_pars_vertex:Ay,color_vertex:wy,common:Ry,cube_uv_reflection_fragment:Cy,defaultnormal_vertex:Py,displacementmap_pars_vertex:Ly,displacementmap_vertex:Iy,emissivemap_fragment:Dy,emissivemap_pars_fragment:Ny,colorspace_fragment:Uy,colorspace_pars_fragment:By,envmap_fragment:Oy,envmap_common_pars_fragment:Fy,envmap_pars_fragment:Hy,envmap_pars_vertex:zy,envmap_physical_pars_fragment:jy,envmap_vertex:ky,fog_vertex:Gy,fog_pars_vertex:Vy,fog_fragment:Wy,fog_pars_fragment:Xy,gradientmap_pars_fragment:qy,lightmap_fragment:Yy,lightmap_pars_fragment:Ky,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:$y,lights_pars_begin:Jy,lights_toon_fragment:Qy,lights_toon_pars_fragment:eM,lights_phong_fragment:tM,lights_phong_pars_fragment:nM,lights_physical_fragment:iM,lights_physical_pars_fragment:sM,lights_fragment_begin:rM,lights_fragment_maps:oM,lights_fragment_end:aM,logdepthbuf_fragment:lM,logdepthbuf_pars_fragment:cM,logdepthbuf_pars_vertex:hM,logdepthbuf_vertex:uM,map_fragment:fM,map_pars_fragment:dM,map_particle_fragment:pM,map_particle_pars_fragment:mM,metalnessmap_fragment:gM,metalnessmap_pars_fragment:_M,morphcolor_vertex:yM,morphnormal_vertex:MM,morphtarget_pars_vertex:xM,morphtarget_vertex:vM,normal_fragment_begin:EM,normal_fragment_maps:bM,normal_pars_fragment:SM,normal_pars_vertex:TM,normal_vertex:AM,normalmap_pars_fragment:wM,clearcoat_normal_fragment_begin:RM,clearcoat_normal_fragment_maps:CM,clearcoat_pars_fragment:PM,iridescence_pars_fragment:LM,opaque_fragment:IM,packing:DM,premultiplied_alpha_fragment:NM,project_vertex:UM,dithering_fragment:BM,dithering_pars_fragment:OM,roughnessmap_fragment:FM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:zM,shadowmap_pars_vertex:kM,shadowmap_vertex:GM,shadowmask_pars_fragment:VM,skinbase_vertex:WM,skinning_pars_vertex:XM,skinning_vertex:qM,skinnormal_vertex:YM,specularmap_fragment:KM,specularmap_pars_fragment:ZM,tonemapping_fragment:$M,tonemapping_pars_fragment:JM,transmission_fragment:jM,transmission_pars_fragment:QM,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:lx,cube_frag:cx,depth_vert:hx,depth_frag:ux,distanceRGBA_vert:fx,distanceRGBA_frag:dx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:_x,meshbasic_vert:yx,meshbasic_frag:Mx,meshlambert_vert:xx,meshlambert_frag:vx,meshmatcap_vert:Ex,meshmatcap_frag:bx,meshnormal_vert:Sx,meshnormal_frag:Tx,meshphong_vert:Ax,meshphong_frag:wx,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Ix,points_frag:Dx,shadow_vert:Nx,shadow_frag:Ux,sprite_vert:Bx,sprite_frag:Ox},oe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},gi={basic:{uniforms:Mn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Mn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Mn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Mn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Mn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Mn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Mn([oe.points,oe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Mn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Mn([oe.common,oe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Mn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Mn([oe.sprite,oe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Mn([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Mn([oe.lights,oe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};gi.physical={uniforms:Mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};nl={r:0,b:0,g:0};hs=class extends Rl{constructor(e=-1,t=1,s=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=s-e,a=s+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cr=4,Op=[.125,.215,.35,.446,.526,.582],Os=20,Ph=new hs,Fp=new xe,Lh=null,Ih=0,Dh=0,Us=(1+Math.sqrt(5))/2,wr=1/Us,Hp=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Us,wr),new I(0,Us,-wr),new I(wr,0,Us),new I(-wr,0,Us),new I(Us,wr,0),new I(-Us,wr,0)],Pl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,r=100){Lh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,s,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lh,Ih,Dh),e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel();let s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ai,format:Gn,colorSpace:Vt,depthBuffer:!1},r=zp(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zp(e,t,s);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wx(o)),this._blurMaterial=Xx(o,e,t)}return r}_compileMaterial(e){let t=new j(this._lodPlanes[0],e);this._renderer.compile(t,Ph)}_sceneToCubeUV(e,t,s,r){let l=new Gt(90,1,t,s),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Fp),h.toneMapping=os,h.autoClear=!1;let p=new ae({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new j(new Ze,p),y=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,y=!0):(p.color.copy(Fp),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(l.up.set(0,c[m],0),l.lookAt(u[m],0,0)):x===1?(l.up.set(0,0,c[m]),l.lookAt(0,u[m],0)):(l.up.set(0,c[m],0),l.lookAt(0,0,u[m]));let M=this._cubeSize;il(r,x*M,m>2?M:0,M,M),h.setRenderTarget(r),y&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){let s=this._renderer,r=e.mapping===Ur||e.mapping===Br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kp());let o=r?this._cubemapMaterial:this._equirectMaterial,a=new j(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;let c=this._cubeSize;il(t,0,0,3*c,2*c),s.setRenderTarget(t),s.render(a,Ph)}_applyPMREM(e){let t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hp[(r-1)%Hp.length];this._blur(e,r-1,r,o,a)}t.autoClear=s}_blur(e,t,s,r,o){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,s,r,"latitudinal",o),this._halfBlur(a,e,s,s,r,"longitudinal",o)}_halfBlur(e,t,s,r,o,a,l){let c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new j(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[s]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Os-1),y=o/g,_=isFinite(o)?1+Math.floor(h*y):Os;_>Os&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Os}`);let m=[],x=0;for(let P=0;P<Os;++P){let D=P/y,v=Math.exp(-D*D/2);m.push(v),P===0?x+=v:P<_&&(x+=2*v)}for(let P=0;P<m.length;P++)m[P]=m[P]/x;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",l&&(d.poleAxis.value=l);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-s;let E=this._sizeLods[r],L=3*E*(r>M-Cr?r-M+Cr:0),w=4*(this._cubeSize-E);il(t,L,w,3*E,2*E),c.setRenderTarget(t),c.render(f,Ph)}};Ll=class extends rn{constructor(e,t,s,r,o,a,l,c,u,h){if(h=h!==void 0?h:zs,h!==zs&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&h===zs&&(s=ss),s===void 0&&h===Or&&(s=Hs),super(null,r,o,a,l,c,h,s,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Pt,this.minFilter=c!==void 0?c:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wm=new rn,Xm=new Ll(1,1);Xm.compareFunction=Fm;qm=new bl,Ym=new jh,Km=new Cl,Vp=[],Wp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);tu=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=xv(t.type)}},nu=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zv(t.type)}},iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){let r=this.seq;for(let o=0,a=r.length;o!==a;++o){let l=r[o];l.setValue(e,t[l.id],s)}}},Nh=/(\w+)(\])?(\[|\.)?/g;Nr=class{constructor(e,t){this.seq=[],this.map={};let s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){let o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);kv(o,a,this)}}setValue(e,t,s,r){let o=this.map[t];o!==void 0&&o.setValue(e,s,r)}setOptional(e,t,s){let r=t[s];r!==void 0&&this.setValue(e,s,r)}static upload(e,t,s,r){for(let o=0,a=t.length;o!==a;++o){let l=t[o],c=s[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){let s=[];for(let r=0,o=e.length;r!==o;++r){let a=e[r];a.id in t&&s.push(a)}return s}};Gv=37297,Vv=0;jv=/^[ \t]*#include +<([\w\d./]+)>/gm;Qv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;cE=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,s=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(s),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){let t=this.shaderCache,s=t.get(e);return s===void 0&&(s=new ou(e),t.set(e,s)),s}},ou=class{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}};gE=0;au=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lu=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},xE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
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
}`;cu=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ot=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},AE={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let r=null,o=null,a=null,l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,s),m=this._getHandJoint(u,y);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,s),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,s),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let s=new ot;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}},hu=class extends cs{constructor(e,t){super();let s=this,r=null,o=1,a=null,l="local-floor",c=1,u=null,h=null,f=null,d=null,p=null,g=null,y=t.getContextAttributes(),_=null,m=null,x=[],M=[],E=new ue,L=null,w=new Gt;w.layers.enable(1),w.viewport=new _t;let P=new Gt;P.layers.enable(2),P.viewport=new _t;let D=[w,P],v=new cu;v.layers.enable(1),v.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let q=x[U];return q===void 0&&(q=new Ro,x[U]=q),q.getTargetRaySpace()},this.getControllerGrip=function(U){let q=x[U];return q===void 0&&(q=new Ro,x[U]=q),q.getGripSpace()},this.getHand=function(U){let q=x[U];return q===void 0&&(q=new Ro,x[U]=q),q.getHandSpace()};function J(U){let q=M.indexOf(U.inputSource);if(q===-1)return;let Q=x[q];Q!==void 0&&(Q.update(U.inputSource,U.frame,u||a),Q.dispatchEvent({type:U.type,data:U.inputSource}))}function te(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",O);for(let U=0;U<x.length;U++){let q=M[U];q!==null&&(M[U]=null,x[U].disconnect(q))}T=null,k=null,e.setRenderTarget(_),p=null,d=null,f=null,r=null,m=null,N.stop(),s.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){o=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){l=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",te),r.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new vn(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let q=null,Q=null,he=null;y.depth&&(he=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=y.stencil?Or:zs,Q=y.stencil?Hs:ss);let de={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:o};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(de),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new vn(d.textureWidth,d.textureHeight,{format:Gn,type:ls,depthTexture:new Ll(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let ye=e.properties.get(m);ye.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),N.setContext(r),N.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(U){for(let q=0;q<U.removed.length;q++){let Q=U.removed[q],he=M.indexOf(Q);he>=0&&(M[he]=null,x[he].disconnect(Q))}for(let q=0;q<U.added.length;q++){let Q=U.added[q],he=M.indexOf(Q);if(he===-1){for(let ye=0;ye<x.length;ye++)if(ye>=M.length){M.push(Q),he=ye;break}else if(M[ye]===null){M[ye]=Q,he=ye;break}if(he===-1)break}let de=x[he];de&&de.connect(Q)}}let H=new I,$=new I;function S(U,q,Q){H.setFromMatrixPosition(q.matrixWorld),$.setFromMatrixPosition(Q.matrixWorld);let he=H.distanceTo($),de=q.projectionMatrix.elements,ye=Q.projectionMatrix.elements,be=de[14]/(de[10]-1),Me=de[14]/(de[10]+1),Ue=(de[9]+1)/de[5],V=(de[9]-1)/de[5],Dt=(de[8]-1)/de[0],Se=(ye[8]+1)/ye[0],De=be*Dt,_e=be*Se,gt=he/(-Dt+Se),Ve=gt*-Dt;q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ve),U.translateZ(gt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();let R=be+gt,b=Me+gt,Y=De-Ve,ie=_e+(he-Ve),ne=Ue*Me/b*R,se=V*Me/b*R;U.projectionMatrix.makePerspective(Y,ie,ne,se,R,b),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function C(U,q){q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;v.near=P.near=w.near=U.near,v.far=P.far=w.far=U.far,(T!==v.near||k!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,k=v.far);let q=U.parent,Q=v.cameras;C(v,q);for(let he=0;he<Q.length;he++)C(Q[he],q);Q.length===2?S(v,w,P):v.projectionMatrix.copy(w.projectionMatrix),F(U,v,q)};function F(U,q,Q){Q===null?U.matrix.copy(q.matrixWorld):(U.matrix.copy(Q.matrixWorld),U.matrix.invert(),U.matrix.multiply(q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Hr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)};let G=null;function W(U,q){if(h=q.getViewerPose(u||a),g=q,h!==null){let Q=h.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let he=!1;Q.length!==v.cameras.length&&(v.cameras.length=0,he=!0);for(let de=0;de<Q.length;de++){let ye=Q[de],be=null;if(p!==null)be=p.getViewport(ye);else{let Ue=f.getViewSubImage(d,ye);be=Ue.viewport,de===0&&(e.setRenderTargetTextures(m,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(m))}let Me=D[de];Me===void 0&&(Me=new Gt,Me.layers.enable(de),Me.viewport=new _t,D[de]=Me),Me.matrix.fromArray(ye.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ye.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(be.x,be.y,be.width,be.height),de===0&&(v.matrix.copy(Me.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),he===!0&&v.cameras.push(Me)}}for(let Q=0;Q<x.length;Q++){let he=M[Q],de=x[Q];he!==null&&de!==void 0&&de.update(he,q,u||a)}G&&G(U,q),q.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:q}),g=null}let N=new Vm;N.setAnimationLoop(W),this.setAnimationLoop=function(U){G=U},this.dispose=function(){}}};No=class{constructor(e={}){let{canvas:t=F_(),context:s=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;s!==null?d=s.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),y=null,_=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=os,this.toneMappingExposure=1;let M=this,E=!1,L=0,w=0,P=null,D=-1,v=null,T=new _t,k=new _t,J=null,te=new xe(0),O=0,H=t.width,$=t.height,S=1,C=null,F=null,G=new _t(0,0,H,$),W=new _t(0,0,H,$),N=!1,U=new Do,q=!1,Q=!1,he=null,de=new Ne,ye=new ue,be=new I,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return P===null?S:1}let V=s;function Dt(A,z){for(let K=0;K<A.length;K++){let Z=A[K],X=t.getContext(Z,z);if(X!==null)return X}return null}try{let A={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",le,!1),V===null){let z=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&z.shift(),V=Dt(z,A),V===null)throw Dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Se,De,_e,gt,Ve,R,b,Y,ie,ne,se,ve,fe,me,Ce,Ye,ee,pt,tt,Be,Te,ge,Xe,ut;function Rt(){Se=new Yx(V),De=new kx(V,Se,e),Se.init(De),ge=new TE(V,Se,De),_e=new bE(V,Se,De),gt=new $x(V),Ve=new uE,R=new SE(V,Se,_e,Ve,De,ge,gt),b=new Vx(M),Y=new qx(M),ie=new sy(V,De),Xe=new Hx(V,Se,ie,De),ne=new Kx(V,ie,gt,Xe),se=new ev(V,ne,ie,gt),tt=new Qx(V,De,R),Ye=new Gx(Ve),ve=new hE(M,b,Y,Se,De,Xe,Ye),fe=new wE(M,Ve),me=new dE,Ce=new ME(Se,De),pt=new Fx(M,b,Y,_e,se,d,c),ee=new EE(M,se,De),ut=new RE(V,gt,De,_e),Be=new zx(V,Se,gt,De),Te=new Zx(V,Se,gt,De),gt.programs=ve.programs,M.capabilities=De,M.extensions=Se,M.properties=Ve,M.renderLists=me,M.shadowMap=ee,M.state=_e,M.info=gt}Rt();let Je=new hu(M,V);this.xr=Je,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(A){A!==void 0&&(S=A,this.setSize(H,$,!1))},this.getSize=function(A){return A.set(H,$)},this.setSize=function(A,z,K=!0){if(Je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,$=z,t.width=Math.floor(A*S),t.height=Math.floor(z*S),K===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(H*S,$*S).floor()},this.setDrawingBufferSize=function(A,z,K){H=A,$=z,S=K,t.width=Math.floor(A*K),t.height=Math.floor(z*K),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(G)},this.setViewport=function(A,z,K,Z){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,z,K,Z),_e.viewport(T.copy(G).multiplyScalar(S).floor())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,z,K,Z){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,z,K,Z),_e.scissor(k.copy(W).multiplyScalar(S).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(A){_e.setScissorTest(N=A)},this.setOpaqueSort=function(A){C=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(A=!0,z=!0,K=!0){let Z=0;if(A){let X=!1;if(P!==null){let pe=P.texture.format;X=pe===Dm||pe===Im||pe===Lm}if(X){let pe=P.texture.type,Ee=pe===ls||pe===ss||pe===Nu||pe===Hs||pe===Cm||pe===Pm,Re=pt.getClearColor(),Le=pt.getClearAlpha(),Ke=Re.r,Fe=Re.g,We=Re.b;Ee?(p[0]=Ke,p[1]=Fe,p[2]=We,p[3]=Le,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=Ke,g[1]=Fe,g[2]=We,g[3]=Le,V.clearBufferiv(V.COLOR,0,g))}else Z|=V.COLOR_BUFFER_BIT}z&&(Z|=V.DEPTH_BUFFER_BIT),K&&(Z|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",le,!1),me.dispose(),Ce.dispose(),Ve.dispose(),b.dispose(),Y.dispose(),se.dispose(),Xe.dispose(),ut.dispose(),ve.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",gn),Je.removeEventListener("sessionend",vt),he&&(he.dispose(),he=null),_n.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let A=gt.autoReset,z=ee.enabled,K=ee.autoUpdate,Z=ee.needsUpdate,X=ee.type;Rt(),gt.autoReset=A,ee.enabled=z,ee.autoUpdate=K,ee.needsUpdate=Z,ee.type=X}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){let z=A.target;z.removeEventListener("dispose",ce),Pe(z)}function Pe(A){we(A),Ve.remove(A)}function we(A){let z=Ve.get(A).programs;z!==void 0&&(z.forEach(function(K){ve.releaseProgram(K)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,K,Z,X,pe){z===null&&(z=Me);let Ee=X.isMesh&&X.matrixWorld.determinant()<0,Re=Mg(A,z,K,Z,X);_e.setMaterial(Z,Ee);let Le=K.index,Ke=1;if(Z.wireframe===!0){if(Le=ne.getWireframeAttribute(K),Le===void 0)return;Ke=2}let Fe=K.drawRange,We=K.attributes.position,Nt=Fe.start*Ke,Ln=(Fe.start+Fe.count)*Ke;pe!==null&&(Nt=Math.max(Nt,pe.start*Ke),Ln=Math.min(Ln,(pe.start+pe.count)*Ke)),Le!==null?(Nt=Math.max(Nt,0),Ln=Math.min(Ln,Le.count)):We!=null&&(Nt=Math.max(Nt,0),Ln=Math.min(Ln,We.count));let Jt=Ln-Nt;if(Jt<0||Jt===1/0)return;Xe.setup(X,Z,Re,K,Le);let Ci,At=Be;if(Le!==null&&(Ci=ie.get(Le),At=Te,At.setIndex(Ci)),X.isMesh)Z.wireframe===!0?(_e.setLineWidth(Z.wireframeLinewidth*Ue()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(X.isLine){let je=Z.linewidth;je===void 0&&(je=1),_e.setLineWidth(je*Ue()),X.isLineSegments?At.setMode(V.LINES):X.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else X.isPoints?At.setMode(V.POINTS):X.isSprite&&At.setMode(V.TRIANGLES);if(X.isBatchedMesh)At.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)At.renderInstances(Nt,Jt,X.count);else if(K.isInstancedBufferGeometry){let je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ih=Math.min(K.instanceCount,je);At.renderInstances(Nt,Jt,ih)}else At.render(Nt,Jt)};function Mt(A,z,K){A.transparent===!0&&A.side===yt&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,Ua(A,z,K),A.side=Mi,A.needsUpdate=!0,Ua(A,z,K),A.side=yt):Ua(A,z,K)}this.compile=function(A,z,K=null){K===null&&(K=A),_=Ce.get(K),_.init(),x.push(_),K.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),A!==K&&A.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights(M._useLegacyLights);let Z=new Set;return A.traverse(function(X){let pe=X.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){let Re=pe[Ee];Mt(Re,K,X),Z.add(Re)}else Mt(pe,K,X),Z.add(pe)}),x.pop(),_=null,Z},this.compileAsync=function(A,z,K=null){let Z=this.compile(A,z,K);return new Promise(X=>{function pe(){if(Z.forEach(function(Ee){Ve.get(Ee).currentProgram.isReady()&&Z.delete(Ee)}),Z.size===0){X(A);return}setTimeout(pe,10)}Se.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let xt=null;function $t(A){xt&&xt(A)}function gn(){_n.stop()}function vt(){_n.start()}let _n=new Vm;_n.setAnimationLoop($t),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(A){xt=A,Je.setAnimationLoop(A),A===null?_n.stop():_n.start()},Je.addEventListener("sessionstart",gn),Je.addEventListener("sessionend",vt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(z),z=Je.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,z,P),_=Ce.get(A,x.length),_.init(),x.push(_),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),U.setFromProjectionMatrix(de),Q=this.localClippingEnabled,q=Ye.init(this.clippingPlanes,Q),y=me.get(A,m.length),y.init(),m.push(y),mi(A,z,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(C,F),this.info.render.frame++,q===!0&&Ye.beginShadows();let K=_.state.shadowsArray;if(ee.render(K,A,z),q===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(y,A),_.setupLights(M._useLegacyLights),z.isArrayCamera){let Z=z.cameras;for(let X=0,pe=Z.length;X<pe;X++){let Ee=Z[X];Id(y,A,Ee,Ee.viewport)}}else Id(y,A,z);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(M,A,z),Xe.resetDefaultState(),D=-1,v=null,x.pop(),x.length>0?_=x[x.length-1]:_=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function mi(A,z,K,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||U.intersectsSprite(A)){Z&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);let Ee=se.update(A),Re=A.material;Re.visible&&y.push(A,Ee,Re,K,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||U.intersectsObject(A))){let Ee=se.update(A),Re=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),be.copy(Ee.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Re)){let Le=Ee.groups;for(let Ke=0,Fe=Le.length;Ke<Fe;Ke++){let We=Le[Ke],Nt=Re[We.materialIndex];Nt&&Nt.visible&&y.push(A,Ee,Nt,K,be.z,We)}}else Re.visible&&y.push(A,Ee,Re,K,be.z,null)}}let pe=A.children;for(let Ee=0,Re=pe.length;Ee<Re;Ee++)mi(pe[Ee],z,K,Z)}function Id(A,z,K,Z){let X=A.opaque,pe=A.transmissive,Ee=A.transparent;_.setupLightsView(K),q===!0&&Ye.setGlobalState(M.clippingPlanes,K),pe.length>0&&yg(X,pe,z,K),Z&&_e.viewport(T.copy(Z)),X.length>0&&Na(X,z,K),pe.length>0&&Na(pe,z,K),Ee.length>0&&Na(Ee,z,K),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function yg(A,z,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let pe=De.isWebGL2;he===null&&(he=new vn(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?ai:ls,minFilter:oi,samples:pe?4:0})),M.getDrawingBufferSize(ye),pe?he.setSize(ye.x,ye.y):he.setSize(xl(ye.x),xl(ye.y));let Ee=M.getRenderTarget();M.setRenderTarget(he),M.getClearColor(te),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear();let Re=M.toneMapping;M.toneMapping=os,Na(A,K,Z),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he);let Le=!1;for(let Ke=0,Fe=z.length;Ke<Fe;Ke++){let We=z[Ke],Nt=We.object,Ln=We.geometry,Jt=We.material,Ci=We.group;if(Jt.side===yt&&Nt.layers.test(Z.layers)){let At=Jt.side;Jt.side=Rn,Jt.needsUpdate=!0,Dd(Nt,K,Z,Ln,Jt,Ci),Jt.side=At,Jt.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he)),M.setRenderTarget(Ee),M.setClearColor(te,O),M.toneMapping=Re}function Na(A,z,K){let Z=z.isScene===!0?z.overrideMaterial:null;for(let X=0,pe=A.length;X<pe;X++){let Ee=A[X],Re=Ee.object,Le=Ee.geometry,Ke=Z===null?Ee.material:Z,Fe=Ee.group;Re.layers.test(K.layers)&&Dd(Re,z,K,Le,Ke,Fe)}}function Dd(A,z,K,Z,X,pe){A.onBeforeRender(M,z,K,Z,X,pe),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(M,z,K,Z,A,pe),X.transparent===!0&&X.side===yt&&X.forceSinglePass===!1?(X.side=Rn,X.needsUpdate=!0,M.renderBufferDirect(K,z,Z,X,A,pe),X.side=Mi,X.needsUpdate=!0,M.renderBufferDirect(K,z,Z,X,A,pe),X.side=yt):M.renderBufferDirect(K,z,Z,X,A,pe),A.onAfterRender(M,z,K,Z,X,pe)}function Ua(A,z,K){z.isScene!==!0&&(z=Me);let Z=Ve.get(A),X=_.state.lights,pe=_.state.shadowsArray,Ee=X.state.version,Re=ve.getParameters(A,X.state,pe,z,K),Le=ve.getProgramCacheKey(Re),Ke=Z.programs;Z.environment=A.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(A.isMeshStandardMaterial?Y:b).get(A.envMap||Z.environment),Ke===void 0&&(A.addEventListener("dispose",ce),Ke=new Map,Z.programs=Ke);let Fe=Ke.get(Le);if(Fe!==void 0){if(Z.currentProgram===Fe&&Z.lightsStateVersion===Ee)return Ud(A,Re),Fe}else Re.uniforms=ve.getUniforms(A),A.onBuild(K,Re,M),A.onBeforeCompile(Re,M),Fe=ve.acquireProgram(Re,Le),Ke.set(Le,Fe),Z.uniforms=Re.uniforms;let We=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Ye.uniform),Ud(A,Re),Z.needsLights=vg(A),Z.lightsStateVersion=Ee,Z.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Fe,Z.uniformsList=null,Fe}function Nd(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Nr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ud(A,z){let K=Ve.get(A);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Mg(A,z,K,Z,X){z.isScene!==!0&&(z=Me),R.resetTextureUnits();let pe=z.fog,Ee=Z.isMeshStandardMaterial?z.environment:null,Re=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vt,Le=(Z.isMeshStandardMaterial?Y:b).get(Z.envMap||Ee),Ke=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Fe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),We=!!K.morphAttributes.position,Nt=!!K.morphAttributes.normal,Ln=!!K.morphAttributes.color,Jt=os;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Jt=M.toneMapping);let Ci=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,At=Ci!==void 0?Ci.length:0,je=Ve.get(Z),ih=_.state.lights;if(q===!0&&(Q===!0||A!==v)){let zn=A===v&&Z.id===D;Ye.setState(Z,A,zn)}let Ct=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ih.state.version||je.outputColorSpace!==Re||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||je.envMap!==Le||Z.fog===!0&&je.fog!==pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ye.numPlanes||je.numIntersection!==Ye.numIntersection)||je.vertexAlphas!==Ke||je.vertexTangents!==Fe||je.morphTargets!==We||je.morphNormals!==Nt||je.morphColors!==Ln||je.toneMapping!==Jt||De.isWebGL2===!0&&je.morphTargetsCount!==At)&&(Ct=!0):(Ct=!0,je.__version=Z.version);let Cs=je.currentProgram;Ct===!0&&(Cs=Ua(Z,z,X));let Bd=!1,yo=!1,sh=!1,un=Cs.getUniforms(),Ps=je.uniforms;if(_e.useProgram(Cs.program)&&(Bd=!0,yo=!0,sh=!0),Z.id!==D&&(D=Z.id,yo=!0),Bd||v!==A){un.setValue(V,"projectionMatrix",A.projectionMatrix),un.setValue(V,"viewMatrix",A.matrixWorldInverse);let zn=un.map.cameraPosition;zn!==void 0&&zn.setValue(V,be.setFromMatrixPosition(A.matrixWorld)),De.logarithmicDepthBuffer&&un.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&un.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,yo=!0,sh=!0)}if(X.isSkinnedMesh){un.setOptional(V,X,"bindMatrix"),un.setOptional(V,X,"bindMatrixInverse");let zn=X.skeleton;zn&&(De.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),un.setValue(V,"boneTexture",zn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(un.setOptional(V,X,"batchingTexture"),un.setValue(V,"batchingTexture",X._matricesTexture,R));let rh=K.morphAttributes;if((rh.position!==void 0||rh.normal!==void 0||rh.color!==void 0&&De.isWebGL2===!0)&&tt.update(X,K,Cs),(yo||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,un.setValue(V,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ps.envMap.value=Le,Ps.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),yo&&(un.setValue(V,"toneMappingExposure",M.toneMappingExposure),je.needsLights&&xg(Ps,sh),pe&&Z.fog===!0&&fe.refreshFogUniforms(Ps,pe),fe.refreshMaterialUniforms(Ps,Z,S,$,he),Nr.upload(V,Nd(je),Ps,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Nr.upload(V,Nd(je),Ps,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&un.setValue(V,"center",X.center),un.setValue(V,"modelViewMatrix",X.modelViewMatrix),un.setValue(V,"normalMatrix",X.normalMatrix),un.setValue(V,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let zn=Z.uniformsGroups;for(let oh=0,Eg=zn.length;oh<Eg;oh++)if(De.isWebGL2){let Od=zn[oh];ut.update(Od,Cs),ut.bind(Od,Cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cs}function xg(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function vg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,z,K){Ve.get(A.texture).__webglTexture=z,Ve.get(A.depthTexture).__webglTexture=K;let Z=Ve.get(A);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){let K=Ve.get(A);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,K=0){P=A,L=z,w=K;let Z=!0,X=null,pe=!1,Ee=!1;if(A){let Le=Ve.get(A);Le.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(V.FRAMEBUFFER,null),Z=!1):Le.__webglFramebuffer===void 0?R.setupRenderTarget(A):Le.__hasExternalTextures&&R.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);let Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ee=!0);let Fe=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?X=Fe[z][K]:X=Fe[z],pe=!0):De.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?X=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?X=Fe[K]:X=Fe,T.copy(A.viewport),k.copy(A.scissor),J=A.scissorTest}else T.copy(G).multiplyScalar(S).floor(),k.copy(W).multiplyScalar(S).floor(),J=N;if(_e.bindFramebuffer(V.FRAMEBUFFER,X)&&De.drawBuffers&&Z&&_e.drawBuffers(A,X),_e.viewport(T),_e.scissor(k),_e.setScissorTest(J),pe){let Le=Ve.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,K)}else if(Ee){let Le=Ve.get(A.texture),Ke=z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Le.__webglTexture,K||0,Ke)}D=-1},this.readRenderTargetPixels=function(A,z,K,Z,X,pe,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){_e.bindFramebuffer(V.FRAMEBUFFER,Re);try{let Le=A.texture,Ke=Le.format,Fe=Le.type;if(Ke!==Gn&&ge.convert(Ke)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=Fe===ai&&(Se.has("EXT_color_buffer_half_float")||De.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Fe!==ls&&ge.convert(Fe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Fi&&(De.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Z&&K>=0&&K<=A.height-X&&V.readPixels(z,K,Z,X,ge.convert(Ke),ge.convert(Fe),pe)}finally{let Le=P!==null?Ve.get(P).__webglFramebuffer:null;_e.bindFramebuffer(V.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(A,z,K=0){let Z=Math.pow(2,-K),X=Math.floor(z.image.width*Z),pe=Math.floor(z.image.height*Z);R.setTexture2D(z,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,A.x,A.y,X,pe),_e.unbindTexture()},this.copyTextureToTexture=function(A,z,K,Z=0){let X=z.image.width,pe=z.image.height,Ee=ge.convert(K.format),Re=ge.convert(K.type);R.setTexture2D(K,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment),z.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Z,A.x,A.y,X,pe,Ee,Re,z.image.data):z.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Z,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Ee,z.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Z,A.x,A.y,Ee,Re,z.image),Z===0&&K.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,z,K,Z,X=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pe=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Re=A.max.z-A.min.z+1,Le=ge.convert(Z.format),Ke=ge.convert(Z.type),Fe;if(Z.isData3DTexture)R.setTexture3D(Z,0),Fe=V.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)R.setTexture2DArray(Z,0),Fe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);let We=V.getParameter(V.UNPACK_ROW_LENGTH),Nt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ln=V.getParameter(V.UNPACK_SKIP_PIXELS),Jt=V.getParameter(V.UNPACK_SKIP_ROWS),Ci=V.getParameter(V.UNPACK_SKIP_IMAGES),At=K.isCompressedTexture?K.mipmaps[X]:K.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,At.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,A.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,A.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?V.texSubImage3D(Fe,X,z.x,z.y,z.z,pe,Ee,Re,Le,Ke,At.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Fe,X,z.x,z.y,z.z,pe,Ee,Re,Le,At.data)):V.texSubImage3D(Fe,X,z.x,z.y,z.z,pe,Ee,Re,Le,Ke,At),V.pixelStorei(V.UNPACK_ROW_LENGTH,We),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ln),V.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ci),X===0&&Z.generateMipmaps&&V.generateMipmap(Fe),_e.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){L=0,w=0,P=null,_e.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Uu?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Jl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?ks:Bm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ks?ft:Vt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},uu=class extends No{};uu.prototype.isWebGL1Renderer=!0;Il=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Dl=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Uo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[s+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new I,Bo=class n{constructor(e,t,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=r,this}setXYZW(e,t,s,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),s=mt(s,this.array),r=mt(r,this.array),o=mt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sm=new I,rm=new _t,om=new _t,CE=new I,am=new Ne,sl=new I,Uh=new Un,lm=new Ne,Bh=new zr,Nl=class extends j{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vd,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let s=0;s<t.count;s++)this.getVertexPosition(s,sl),this.boundingBox.expandByPoint(sl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let s=0;s<t.count;s++)this.getVertexPosition(s,sl),this.boundingSphere.expandByPoint(sl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let s=this.material,r=this.matrixWorld;s!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uh.copy(this.boundingSphere),Uh.applyMatrix4(r),e.ray.intersectsSphere(Uh)!==!1&&(lm.copy(r).invert(),Bh.copy(e.ray).applyMatrix4(lm),!(this.boundingBox!==null&&Bh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let s=0,r=t.count;s<r;s++){e.fromBufferAttribute(t,s);let o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(s,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let s=this.skeleton,r=this.geometry;rm.fromBufferAttribute(r.attributes.skinIndex,e),om.fromBufferAttribute(r.attributes.skinWeight,e),sm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){let a=om.getComponent(o);if(a!==0){let l=rm.getComponent(o);am.multiplyMatrices(s.bones[l].matrixWorld,s.boneInverses[l]),t.addScaledVector(CE.copy(sm).applyMatrix4(am),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Oo=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},fu=class extends rn{constructor(e=null,t=1,s=1,r,o,a,l,c,u=Pt,h=Pt,f,d){super(null,a,l,c,u,h,r,o,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cm=new Ne,PE=new Ne,Ul=class n{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let s=0,r=this.bones.length;s<r;s++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let s=new Ne;this.bones[e]&&s.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(s)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let s=this.bones[e];s&&s.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let s=this.bones[e];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){let e=this.bones,t=this.boneInverses,s=this.boneMatrices,r=this.boneTexture;for(let o=0,a=e.length;o<a;o++){let l=e[o]?e[o].matrixWorld:PE;cm.multiplyMatrices(l,t[o]),cm.toArray(s,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let s=new fu(t,e,e,Gn,Fi);return s.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=s,this}getBoneByName(e){for(let t=0,s=this.bones.length;t<s;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let s=0,r=e.bones.length;s<r;s++){let o=e.bones[s],a=t[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new Oo),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[s]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,s=this.boneInverses;for(let r=0,o=t.length;r<o;r++){let a=t[r];e.bones.push(a.uuid);let l=s[r];e.boneInverses.push(l.toArray())}return e}},Vs=class extends ht{constructor(e,t,s,r=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rr=new Ne,hm=new Ne,rl=[],um=new Tt,LE=new Ne,bo=new j,So=new Un,Bl=class extends j{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(s*16),16),this.instanceColor=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<s;r++)this.setMatrixAt(r,LE)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Rr),um.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(um)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Rr),So.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(So)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let s=this.matrixWorld,r=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(s),e.ray.intersectsSphere(So)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Rr),hm.multiplyMatrices(s,Rr),bo.matrixWorld=hm,bo.raycast(e,rl);for(let a=0,l=rl.length;a<l;a++){let c=rl[a];c.instanceId=o,c.object=this,t.push(c)}rl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fm=new I,dm=new I,pm=new Ne,Oh=new zr,ol=new Un,zi=class extends Lt{constructor(e=new dt,t=new Cn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[0];for(let r=1,o=t.count;r<o;r++)fm.fromBufferAttribute(t,r-1),dm.fromBufferAttribute(t,r),s[r]=s[r-1],s[r]+=fm.distanceTo(dm);e.setAttribute("lineDistance",new rt(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let s=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ol.copy(s.boundingSphere),ol.applyMatrix4(r),ol.radius+=o,e.ray.intersectsSphere(ol)===!1)return;pm.copy(r).invert(),Oh.copy(e.ray).applyMatrix4(pm);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=new I,h=new I,f=new I,d=new I,p=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){let m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let M=m,E=x-1;M<E;M+=p){let L=g.getX(M),w=g.getX(M+1);if(u.fromBufferAttribute(_,L),h.fromBufferAttribute(_,w),Oh.distanceSqToSegment(u,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),x=Math.min(_.count,a.start+a.count);for(let M=m,E=x-1;M<E;M+=p){if(u.fromBufferAttribute(_,M),h.fromBufferAttribute(_,M+1),Oh.distanceSqToSegment(u,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}},mm=new I,gm=new I,Ft=class extends zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[];for(let r=0,o=t.count;r<o;r+=2)mm.fromBufferAttribute(t,r),gm.fromBufferAttribute(t,r+1),s[r]=r===0?0:s[r-1],s[r+1]=s[r]+mm.distanceTo(gm);e.setAttribute("lineDistance",new rt(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ol=class extends zi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ws=class extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_m=new Ne,du=new zr,al=new Un,ll=new I,Gr=class extends Lt{constructor(e=new dt,t=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let s=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),al.copy(s.boundingSphere),al.applyMatrix4(r),al.radius+=o,e.ray.intersectsSphere(al)===!1)return;_m.copy(r).invert(),du.copy(e.ray).applyMatrix4(_m);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=s.index,f=s.attributes.position;if(u!==null){let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,y=p;g<y;g++){let _=u.getX(g);ll.fromBufferAttribute(f,_),ym(ll,_,c,r,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,y=p;g<y;g++)ll.fromBufferAttribute(f,g),ym(ll,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}};Wn=class extends rn{constructor(e,t,s,r,o,a,l,c,u){super(e,t,s,r,o,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],s,r=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)s=this.getPoint(a/e),o+=s.distanceTo(r),t.push(o),r=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let s=this.getLengths(),r=0,o=s.length,a;t?a=t:a=e*s[o-1];let l=0,c=o-1,u;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),u=s[r]-a,u<0)l=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,s[r]===a)return r/(o-1);let h=s[r],d=s[r+1]-h,p=(a-h)/d;return(r+p)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let a=this.getPoint(r),l=this.getPoint(o),c=t||(a.isVector2?new ue:new I);return c.copy(l).sub(a).normalize(),c}getTangentAt(e,t){let s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){let s=new I,r=[],o=[],a=[],l=new I,c=new Ne;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new I)}o[0]=new I,a[0]=new I;let u=Number.MAX_VALUE,h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=u&&(u=h,s.set(1,0,0)),f<=u&&(u=f,s.set(0,1,0)),d<=u&&s.set(0,0,1),l.crossVectors(r[0],s).normalize(),o[0].crossVectors(r[0],l),a[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),a[p]=a[p-1].clone(),l.crossVectors(r[p-1],r[p]),l.length()>Number.EPSILON){l.normalize();let g=Math.acos(Qt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(l,g))}a[p].crossVectors(r[p],o[p])}if(t===!0){let p=Math.acos(Qt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(l.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],o[g])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fl=class extends li{constructor(e=0,t=0,s=1,r=1,o=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(e,t){let s=t||new ue,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(a?o=0:o=r),this.aClockwise===!0&&!a&&(o===r?o=-r:o=o-r);let l=this.aStartAngle+e*o,c=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=u-this.aY;c=d*h-p*f+this.aX,u=d*f+p*h+this.aY}return s.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pu=class extends Fl{constructor(e,t,s,r,o,a){super(e,t,s,s,r,o,a),this.isArcCurve=!0,this.type="ArcCurve"}};cl=new I,Fh=new Fu,Hh=new Fu,zh=new Fu,Fo=class extends li{constructor(e=[],t=!1,s="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=r}getPoint(e,t=new I){let s=t,r=this.points,o=r.length,a=(o-(this.closed?0:1))*e,l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:c===0&&l===o-1&&(l=o-2,c=1);let u,h;this.closed||l>0?u=r[(l-1)%o]:(cl.subVectors(r[0],r[1]).add(r[0]),u=cl);let f=r[l%o],d=r[(l+1)%o];if(this.closed||l+2<o?h=r[(l+2)%o]:(cl.subVectors(r[o-1],r[o-2]).add(r[o-1]),h=cl),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(u.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),_<1e-4&&(_=y),Fh.initNonuniformCatmullRom(u.x,f.x,d.x,h.x,g,y,_),Hh.initNonuniformCatmullRom(u.y,f.y,d.y,h.y,g,y,_),zh.initNonuniformCatmullRom(u.z,f.z,d.z,h.z,g,y,_)}else this.curveType==="catmullrom"&&(Fh.initCatmullRom(u.x,f.x,d.x,h.x,this.tension),Hh.initCatmullRom(u.y,f.y,d.y,h.y,this.tension),zh.initCatmullRom(u.z,f.z,d.z,h.z,this.tension));return s.set(Fh.calc(c),Hh.calc(c),zh.calc(c)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};mu=class extends li{constructor(e=new ue,t=new ue,s=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=r}getPoint(e,t=new ue){let s=t,r=this.v0,o=this.v1,a=this.v2,l=this.v3;return s.set(Po(e,r.x,o.x,a.x,l.x),Po(e,r.y,o.y,a.y,l.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gu=class extends li{constructor(e=new I,t=new I,s=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=r}getPoint(e,t=new I){let s=t,r=this.v0,o=this.v1,a=this.v2,l=this.v3;return s.set(Po(e,r.x,o.x,a.x,l.x),Po(e,r.y,o.y,a.y,l.y),Po(e,r.z,o.z,a.z,l.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_u=class extends li{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yu=class extends li{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mu=class extends li{constructor(e=new ue,t=new ue,s=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new ue){let s=t,r=this.v0,o=this.v1,a=this.v2;return s.set(Co(e,r.x,o.x,a.x),Co(e,r.y,o.y,a.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends li{constructor(e=new I,t=new I,s=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new I){let s=t,r=this.v0,o=this.v1,a=this.v2;return s.set(Co(e,r.x,o.x,a.x),Co(e,r.y,o.y,a.y),Co(e,r.z,o.z,a.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xu=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let s=t,r=this.points,o=(r.length-1)*e,a=Math.floor(o),l=o-a,c=r[a===0?a:a-1],u=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return s.set(Mm(l,c.x,u.x,h.x,f.x),Mm(l,c.y,u.y,h.y,f.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let r=e.points[t];this.points.push(new ue().fromArray(r))}return this}},HE=Object.freeze({__proto__:null,ArcCurve:pu,CatmullRomCurve3:Fo,CubicBezierCurve:mu,CubicBezierCurve3:gu,EllipseCurve:Fl,LineCurve:_u,LineCurve3:yu,QuadraticBezierCurve:Mu,QuadraticBezierCurve3:Hl,SplineCurve:xu}),En=class n extends dt{constructor(e=1,t=1,s=1,r=32,o=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:c};let u=this;r=Math.floor(r),o=Math.floor(o);let h=[],f=[],d=[],p=[],g=0,y=[],_=s/2,m=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new rt(f,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(p,2));function x(){let E=new I,L=new I,w=0,P=(t-e)/s;for(let D=0;D<=o;D++){let v=[],T=D/o,k=T*(t-e)+e;for(let J=0;J<=r;J++){let te=J/r,O=te*c+l,H=Math.sin(O),$=Math.cos(O);L.x=k*H,L.y=-T*s+_,L.z=k*$,f.push(L.x,L.y,L.z),E.set(H,P,$).normalize(),d.push(E.x,E.y,E.z),p.push(te,1-T),v.push(g++)}y.push(v)}for(let D=0;D<r;D++)for(let v=0;v<o;v++){let T=y[v][D],k=y[v+1][D],J=y[v+1][D+1],te=y[v][D+1];h.push(T,k,te),h.push(k,J,te),w+=6}u.addGroup(m,w,0),m+=w}function M(E){let L=g,w=new ue,P=new I,D=0,v=E===!0?e:t,T=E===!0?1:-1;for(let J=1;J<=r;J++)f.push(0,_*T,0),d.push(0,T,0),p.push(.5,.5),g++;let k=g;for(let J=0;J<=r;J++){let O=J/r*c+l,H=Math.cos(O),$=Math.sin(O);P.x=v*$,P.y=_*T,P.z=v*H,f.push(P.x,P.y,P.z),d.push(0,T,0),w.x=H*.5+.5,w.y=$*.5*T+.5,p.push(w.x,w.y),g++}for(let J=0;J<r;J++){let te=L+J,O=k+J;E===!0?h.push(O,O+1,te):h.push(O+1,O,te),D+=3}u.addGroup(m,D,E===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zl=class n extends En{constructor(e=1,t=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(0,e,t,s,r,o,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vu=class n extends dt{constructor(e=[],t=[],s=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:r};let o=[],a=[];l(r),u(s),h(),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(o.slice(),3)),this.setAttribute("uv",new rt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let M=new I,E=new I,L=new I;for(let w=0;w<t.length;w+=3)p(t[w+0],M),p(t[w+1],E),p(t[w+2],L),c(M,E,L,x)}function c(x,M,E,L){let w=L+1,P=[];for(let D=0;D<=w;D++){P[D]=[];let v=x.clone().lerp(E,D/w),T=M.clone().lerp(E,D/w),k=w-D;for(let J=0;J<=k;J++)J===0&&D===w?P[D][J]=v:P[D][J]=v.clone().lerp(T,J/k)}for(let D=0;D<w;D++)for(let v=0;v<2*(w-D)-1;v++){let T=Math.floor(v/2);v%2===0?(d(P[D][T+1]),d(P[D+1][T]),d(P[D][T])):(d(P[D][T+1]),d(P[D+1][T+1]),d(P[D+1][T]))}}function u(x){let M=new I;for(let E=0;E<o.length;E+=3)M.x=o[E+0],M.y=o[E+1],M.z=o[E+2],M.normalize().multiplyScalar(x),o[E+0]=M.x,o[E+1]=M.y,o[E+2]=M.z}function h(){let x=new I;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];let E=_(x)/2/Math.PI+.5,L=m(x)/Math.PI+.5;a.push(E,1-L)}g(),f()}function f(){for(let x=0;x<a.length;x+=6){let M=a[x+0],E=a[x+2],L=a[x+4],w=Math.max(M,E,L),P=Math.min(M,E,L);w>.9&&P<.1&&(M<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),L<.2&&(a[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function p(x,M){let E=x*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){let x=new I,M=new I,E=new I,L=new I,w=new ue,P=new ue,D=new ue;for(let v=0,T=0;v<o.length;v+=9,T+=6){x.set(o[v+0],o[v+1],o[v+2]),M.set(o[v+3],o[v+4],o[v+5]),E.set(o[v+6],o[v+7],o[v+8]),w.set(a[T+0],a[T+1]),P.set(a[T+2],a[T+3]),D.set(a[T+4],a[T+5]),L.copy(x).add(M).add(E).divideScalar(3);let k=_(L);y(w,T+0,x,k),y(P,T+2,M,k),y(D,T+4,E,k)}}function y(x,M,E,L){L<0&&x.x===1&&(a[M]=x.x-1),E.x===0&&E.z===0&&(a[M]=L/2/Math.PI+.5)}function _(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},hl=new I,ul=new I,kh=new I,fl=new Fs,an=class extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),o=Math.cos(Ir*t),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,u=[0,0,0],h=["a","b","c"],f=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){a?(u[0]=a.getX(g),u[1]=a.getX(g+1),u[2]=a.getX(g+2)):(u[0]=g,u[1]=g+1,u[2]=g+2);let{a:y,b:_,c:m}=fl;if(y.fromBufferAttribute(l,u[0]),_.fromBufferAttribute(l,u[1]),m.fromBufferAttribute(l,u[2]),fl.getNormal(kh),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){let M=(x+1)%3,E=f[x],L=f[M],w=fl[h[x]],P=fl[h[M]],D=`${E}_${L}`,v=`${L}_${E}`;v in d&&d[v]?(kh.dot(d[v].normal)<=o&&(p.push(w.x,w.y,w.z),p.push(P.x,P.y,P.z)),d[v]=null):D in d||(d[D]={index0:u[x],index1:u[M],normal:kh.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:_}=d[g];hl.fromBufferAttribute(l,y),ul.fromBufferAttribute(l,_),p.push(hl.x,hl.y,hl.z),p.push(ul.x,ul.y,ul.z)}this.setAttribute("position",new rt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Xs=class n extends vu{constructor(e=1,t=0){let s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},xi=class n extends dt{constructor(e=1,t=32,s=16,r=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:r,phiLength:o,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));let c=Math.min(a+l,Math.PI),u=0,h=[],f=new I,d=new I,p=[],g=[],y=[],_=[];for(let m=0;m<=s;m++){let x=[],M=m/s,E=0;m===0&&a===0?E=.5/t:m===s&&c===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){let w=L/t;f.x=-e*Math.cos(r+w*o)*Math.sin(a+M*l),f.y=e*Math.cos(a+M*l),f.z=e*Math.sin(r+w*o)*Math.sin(a+M*l),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),_.push(w+E,1-M),x.push(u++)}h.push(x)}for(let m=0;m<s;m++)for(let x=0;x<t;x++){let M=h[m][x+1],E=h[m][x],L=h[m+1][x],w=h[m+1][x+1];(m!==0||a>0)&&p.push(M,E,w),(m!==s-1||c<Math.PI)&&p.push(E,L,w)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},us=class n extends dt{constructor(e=1,t=.4,s=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:r,arc:o},s=Math.floor(s),r=Math.floor(r);let a=[],l=[],c=[],u=[],h=new I,f=new I,d=new I;for(let p=0;p<=s;p++)for(let g=0;g<=r;g++){let y=g/r*o,_=p/s*Math.PI*2;f.x=(e+t*Math.cos(_))*Math.cos(y),f.y=(e+t*Math.cos(_))*Math.sin(y),f.z=t*Math.sin(_),l.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),u.push(g/r),u.push(p/s)}for(let p=1;p<=s;p++)for(let g=1;g<=r;g++){let y=(r+1)*p+g-1,_=(r+1)*(p-1)+g-1,m=(r+1)*(p-1)+g,x=(r+1)*p+g;a.push(y,_,x),a.push(_,m,x)}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},kl=class n extends dt{constructor(e=new Hl(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,s=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:s,radialSegments:r,closed:o};let a=e.computeFrenetFrames(t,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let l=new I,c=new I,u=new ue,h=new I,f=[],d=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new rt(f,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(p,2));function y(){for(let M=0;M<t;M++)_(M);_(o===!1?t:0),x(),m()}function _(M){h=e.getPointAt(M/t,h);let E=a.normals[M],L=a.binormals[M];for(let w=0;w<=r;w++){let P=w/r*Math.PI*2,D=Math.sin(P),v=-Math.cos(P);c.x=v*E.x+D*L.x,c.y=v*E.y+D*L.y,c.z=v*E.z+D*L.z,c.normalize(),d.push(c.x,c.y,c.z),l.x=h.x+s*c.x,l.y=h.y+s*c.y,l.z=h.z+s*c.z,f.push(l.x,l.y,l.z)}}function m(){for(let M=1;M<=t;M++)for(let E=1;E<=r;E++){let L=(r+1)*(M-1)+(E-1),w=(r+1)*M+(E-1),P=(r+1)*M+E,D=(r+1)*(M-1)+E;g.push(L,w,D),g.push(w,P,D)}}function x(){for(let M=0;M<=t;M++)for(let E=0;E<=r;E++)u.x=M/t,u.y=E/r,p.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new HE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Vr=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Om,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xn=class extends Vr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};fs=class{constructor(e,t,s,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(s),this.sampleValues=t,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,s=this._cachedIndex,r=t[s],o=t[s-1];n:{e:{let a;t:{i:if(!(e<r)){for(let l=s+2;;){if(r===void 0){if(e<o)break i;return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===l)break;if(o=r,r=t[++s],e<r)break e}a=t.length;break t}if(!(e>=o)){let l=t[1];e<l&&(s=2,o=l);for(let c=s-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===c)break;if(r=o,o=t[--s-1],e>=o)break e}a=s,s=0;break t}break n}for(;s<a;){let l=s+a>>>1;e<t[l]?a=l:s=l+1}if(r=t[s],o=t[s-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,o,r)}return this.interpolate_(s,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=e*r;for(let a=0;a!==r;++a)t[a]=s[o+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eu=class extends fs{constructor(e,t,s,r){super(e,t,s,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mp,endingEnd:mp}}intervalChanged_(e,t,s){let r=this.parameterPositions,o=e-2,a=e+1,l=r[o],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case gp:o=e,l=2*t-s;break;case _p:o=r.length-2,l=t+r[o]-r[o+1];break;default:o=e,l=s}if(c===void 0)switch(this.getSettings_().endingEnd){case gp:a=e,c=2*s-t;break;case _p:a=1,c=s+r[1]-r[0];break;default:a=e-1,c=t}let u=(s-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-s),this._offsetPrev=o*h,this._offsetNext=a*h}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(s-t)/(r-t),y=g*g,_=y*g,m=-d*_+2*d*y-d*g,x=(1+d)*_+(-1.5-2*d)*y+(-.5+d)*g+1,M=(-1-p)*_+(1.5+p)*y+.5*g,E=p*_-p*y;for(let L=0;L!==l;++L)o[L]=m*a[h+L]+x*a[u+L]+M*a[c+L]+E*a[f+L];return o}},bu=class extends fs{constructor(e,t,s,r){super(e,t,s,r)}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=(s-t)/(r-t),f=1-h;for(let d=0;d!==l;++d)o[d]=a[u+d]*f+a[c+d]*h;return o}},Su=class extends fs{constructor(e,t,s,r){super(e,t,s,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,s,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dl(t,this.TimeBufferType),this.values=dl(s,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,s;if(t.toJSON!==this.toJSON)s=t.toJSON(e);else{s={name:e.name,times:dl(e.times,Array),values:dl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(s.interpolation=r)}return s.type=e.ValueTypeName,s}InterpolantFactoryMethodDiscrete(e){return new Su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case fh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return console.warn("THREE.KeyframeTrack:",s),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let s=0,r=t.length;s!==r;++s)t[s]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let s=0,r=t.length;s!==r;++s)t[s]*=e}return this}trim(e,t){let s=this.times,r=s.length,o=0,a=r-1;for(;o!==r&&s[o]<e;)++o;for(;a!==-1&&s[a]>t;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);let l=this.getValueSize();this.times=s.slice(o,a),this.values=this.values.slice(o*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let s=this.times,r=this.values,o=s.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==o;l++){let c=s[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(r!==void 0&&zE(r))for(let l=0,c=r.length;l!==c;++l){let u=r[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),s=this.getValueSize(),r=this.getInterpolation()===fh,o=e.length-1,a=1;for(let l=1;l<o;++l){let c=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(r)c=!0;else{let f=l*s,d=f-s,p=f+s;for(let g=0;g!==s;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[p+g]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let f=l*s,d=a*s;for(let p=0;p!==s;++p)t[d+p]=t[f+p]}++a}}if(o>0){e[a]=e[o];for(let l=o*s,c=a*s,u=0;u!==s;++u)t[c+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*s)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),s=this.constructor,r=new s(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Gs;ds=class extends qn{};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Fr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;Gl=class extends qn{};Gl.prototype.ValueTypeName="color";ki=class extends qn{};ki.prototype.ValueTypeName="number";Tu=class extends fs{constructor(e,t,s,r){super(e,t,s,r)}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(s-t)/(r-t),u=e*l;for(let h=u+l;u!==h;u+=4)Nn.slerpFlat(o,0,a,u-l,a,u,c);return o}},vi=class extends qn{InterpolantFactoryMethodLinear(e){return new Tu(this.times,this.values,this.getValueSize(),e)}};vi.prototype.ValueTypeName="quaternion";vi.prototype.DefaultInterpolation=Gs;vi.prototype.InterpolantFactoryMethodSmooth=void 0;ps=class extends qn{};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Fr;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;Gi=class extends qn{};Gi.prototype.ValueTypeName="vector";Vl=class{constructor(e,t=-1,s,r=d_){this.name=e,this.tracks=s,this.duration=t,this.blendMode=r,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],s=e.tracks,r=1/(e.fps||1);for(let a=0,l=s.length;a!==l;++a)t.push(VE(s[a]).scale(r));let o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){let t=[],s=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=s.length;o!==a;++o)t.push(qn.toJSON(s[o]));return r}static CreateFromMorphTargetSequence(e,t,s,r){let o=t.length,a=[];for(let l=0;l<o;l++){let c=[],u=[];c.push((l+o-1)%o,l,(l+1)%o),u.push(0,1,0);let h=kE(c);c=xm(c,1,h),u=xm(u,1,h),!r&&c[0]===0&&(c.push(o),u.push(u[0])),a.push(new ki(".morphTargetInfluences["+t[l].name+"]",c,u).scale(1/s))}return new this(e,-1,a)}static findByName(e,t){let s=e;if(!Array.isArray(e)){let r=e;s=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<s.length;r++)if(s[r].name===t)return s[r];return null}static CreateClipsFromMorphTargetSequences(e,t,s){let r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){let u=e[l],h=u.name.match(o);if(h&&h.length>1){let f=h[1],d=r[f];d||(r[f]=d=[]),d.push(u)}}let a=[];for(let l in r)a.push(this.CreateFromMorphTargetSequence(l,r[l],t,s));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let s=function(f,d,p,g,y){if(p.length!==0){let _=[],m=[];Zm(p,_,m,g),_.length!==0&&y.push(new f(d,_,m))}},r=[],o=e.name||"default",a=e.fps||30,l=e.blendMode,c=e.length||-1,u=e.hierarchy||[];for(let f=0;f<u.length;f++){let d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)p[d[g].morphTargets[y]]=-1;for(let y in p){let _=[],m=[];for(let x=0;x!==d[g].morphTargets.length;++x){let M=d[g];_.push(M.time),m.push(M.morphTarget===y?1:0)}r.push(new ki(".morphTargetInfluence["+y+"]",_,m))}c=p.length*a}else{let p=".bones["+t[f].name+"]";s(Gi,p+".position",d,"pos",r),s(vi,p+".quaternion",d,"rot",r),s(Gi,p+".scale",d,"scl",r)}}return r.length===0?null:new this(o,c,r,l)}resetDuration(){let e=this.tracks,t=0;for(let s=0,r=e.length;s!==r;++s){let o=this.tracks[s];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};rs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Au=class{constructor(e,t,s){let r=this,o=!1,a=0,l=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(h){l++,o===!1&&r.onStart!==void 0&&r.onStart(h,a,l),o=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,l),a===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},WE=new Au,Vi=class{constructor(e){this.manager=e!==void 0?e:WE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let s=this;return new Promise(function(r,o){s.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";Ui={},wu=class extends Error{constructor(e,t){super(e),this.response=t}},Ho=class extends Vi{constructor(e){super(e)}load(e,t,s,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=rs.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:s,onError:r});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:s,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let h=Ui[e],f=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,y=0,_=new ReadableStream({start(m){x();function x(){f.read().then(({done:M,value:E})=>{if(M)m.close();else{y+=E.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let w=0,P=h.length;w<P;w++){let D=h[w];D.onProgress&&D.onProgress(L)}m.enqueue(E),x()}})}}});return new Response(_)}else throw new wu(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return u.json();default:if(l===void 0)return u.text();{let f=/charset="?([^;"\s]*)"?/i.exec(l),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{rs.add(e,u);let h=Ui[e];delete Ui[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{let h=Ui[e];if(h===void 0)throw this.manager.itemError(e),u;delete Ui[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Ru=class extends Vi{constructor(e){super(e)}load(e,t,s,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,a=rs.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;let l=Io("img");function c(){h(),rs.add(e,this),t&&t(this),o.manager.itemEnd(e)}function u(f){h(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}},Wr=class extends Vi{constructor(e){super(e)}load(e,t,s,r){let o=new rn,a=new Ru(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},s,r),o}},zo=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Gh=new Ne,vm=new I,Em=new I,ko=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,s=this.matrix;vm.setFromMatrixPosition(e.matrixWorld),t.position.copy(vm),Em.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Em),t.updateMatrixWorld(),Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cu=class extends ko{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,s=Hr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(s!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=s,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Wl=class extends zo{constructor(e,t,s=0,r=Math.PI/3,o=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=s,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new Cu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bm=new Ne,To=new I,Vh=new I,Pu=class extends ko{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let s=this.camera,r=this.matrix,o=e.distance||s.far;o!==s.far&&(s.far=o,s.updateProjectionMatrix()),To.setFromMatrixPosition(e.matrixWorld),s.position.copy(To),Vh.copy(s.position),Vh.add(this._cubeDirections[t]),s.up.copy(this._cubeUps[t]),s.lookAt(Vh),s.updateMatrixWorld(),r.makeTranslation(-To.x,-To.y,-To.z),bm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bm)}},Xl=class extends zo{constructor(e,t,s=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=r,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Lu=class extends ko{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ql=class extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Lu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ms=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let s=0,r=e.length;s<r;s++)t+=String.fromCharCode(e[s]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Yl=class extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,s,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,a=rs.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(u=>{t&&t(u),o.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;let c=fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(u){return rs.add(e,u),t&&t(u),o.manager.itemEnd(e),u}).catch(function(u){r&&r(u),rs.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});rs.add(e,c),o.manager.itemStart(e)}},Kl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Sm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Hu="\\[\\]\\.:\\/",XE=new RegExp("["+Hu+"]","g"),zu="[^"+Hu+"]",qE="[^"+Hu.replace("\\.","")+"]",YE=/((?:WC+[\/:])*)/.source.replace("WC",zu),KE=/(WCOD+)?/.source.replace("WCOD",qE),ZE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zu),$E=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zu),JE=new RegExp("^"+YE+KE+ZE+$E+"$"),jE=["material","materials","bones","map"],Iu=class{constructor(e,t,s){let r=s||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let s=this._targetGroup.nCachedObjects_,r=this._bindings[s];r!==void 0&&r.getValue(e,t)}setValue(e,t){let s=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=s.length;r!==o;++r)s[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].unbind()}},Et=class n{constructor(e,t,s){this.path=t,this.parsedPath=s||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,s){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,s):new n(e,t,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XE,"")}static parseTrackName(e){let t=JE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=s.nodeName.substring(r+1);jE.indexOf(o)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=o)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(t);if(s!==void 0)return s}if(e.children){let s=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===t||l.uuid===t)return l;let c=s(l.children);if(c)return c}return null},r=s(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)e[t++]=s[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,s=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let u=t.objectIndex;switch(s){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Iu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Ib=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var Ql,ku=ei(()=>{Ql={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var ci,e1,Gu,t1,Yr,Vo=ei(()=>{Ei();ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},e1=new hs(-1,1,1,-1,0,1),Gu=class extends dt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},t1=new Gu,Yr=class{constructor(e){this._mesh=new j(t1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,e1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var ec,$m=ei(()=>{Ei();Vo();ec=class extends ci{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xr.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Yr(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Wo,tc,Vu=ei(()=>{Vo();Wo=class extends ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){let r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}},tc=class extends ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var nc,Jm=ei(()=>{Ei();ku();$m();Vu();Vu();nc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let s=e.getSize(new ue);this._width=s.width,this._height=s.height,t=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ec(Ql),this.copyPass.material.blending=yi,this.clock=new Kl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),s=!1;for(let r=0,o=this.passes.length;r<o;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),a.needsSwap){if(s){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Wo!==void 0&&(a instanceof Wo?s=!0:a instanceof tc&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let s=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(s,r),this.renderTarget2.setSize(s,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(s,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var ic,jm=ei(()=>{Ei();Vo();ic=class extends ci{constructor(e,t,s=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,s){let r=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}});var Qm,e0=ei(()=>{Ei();Qm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var Kr,t0=ei(()=>{Ei();Vo();ku();e0();Kr=class n extends ci{constructor(e,t,s,r){super(),this.strength=t!==void 0?t:1,this.radius=s,this.threshold=r,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(o,a,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new vn(o,a,{type:ai});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new vn(o,a,{type:ai});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),a=Math.round(a/2)}let l=Qm;this.highPassUniforms=Xr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ue(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ql;this.copyUniforms=Xr.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new ae,this.fsQuad=new Yr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(s,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(s,r),this.renderTargetsVertical[o].setSize(s,r),this.separableBlurMaterials[o].uniforms.invSize.value=new ue(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2)}render(e,t,s,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=s.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Kr.BlurDirectionX=new ue(1,0);Kr.BlurDirectionY=new ue(0,1)});function bn(n,e=!1){let t=n[0].index!==null,s=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),o={},a={},l=n[0].morphTargetsRelative,c=new dt,u=0;for(let h=0;h<n.length;++h){let f=n[h],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.attributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,p,h),u+=p}}if(t){let h=0,f=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(f)}for(let h in o){let f=n0(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let g=n0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function n0(n){let e,t,s,r=-1,o=0;for(let u=0;u<n.length;++u){let h=n[u];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=h.normalized),s!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.array.length}let a=new e(o),l=0;for(let u=0;u<n.length;++u)a.set(n[u].array,l),l+=n[u].array.length;let c=new ht(a,t,s);return r!==void 0&&(c.gpuType=r),c}function Wu(n,e){if(e===Um)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Go||e===$l){let t=n.getIndex();if(t===null){let a=[],l=n.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let s=t.count-2,r=[];if(e===Go)for(let a=1;a<=s;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<s;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let o=n.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Xu=ei(()=>{Ei()});function n1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function r1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Vr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),n.DefaultMaterial}function qs(n,e,t){for(let s in t.extensions)n[s]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[s]=t.extensions[s])}function _s(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function o1(n,e,t){let s=!1,r=!1,o=!1;for(let u=0,h=e.length;u<h;u++){let f=e[u];if(f.POSITION!==void 0&&(s=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(o=!0),s&&r&&o)break}if(!s&&!r&&!o)return Promise.resolve(n);let a=[],l=[],c=[];for(let u=0,h=e.length;u<h;u++){let f=e[u];if(s){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;a.push(d)}if(r){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;l.push(d)}if(o){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){let h=u[0],f=u[1],d=u[2];return s&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=f),o&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function a1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,s=e.weights.length;t<s;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let s=0,r=t.length;s<r;s++)n.morphTargetDictionary[t[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function l1(n){let e,t=n.extensions&&n.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ku(t.attributes):e=n.indices+":"+Ku(n.attributes)+":"+n.mode,n.targets!==void 0)for(let s=0,r=n.targets.length;s<r;s++)e+=":"+Ku(n.targets[s]);return e}function Ku(n){let e="",t=Object.keys(n).sort();for(let s=0,r=t.length;s<r;s++)e+=t[s]+":"+n[t[s]]+";";return e}function Mf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function c1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function u1(n,e,t){let s=e.attributes,r=new Tt;if(s.POSITION!==void 0){let l=t.json.accessors[s.POSITION],c=l.min,u=l.max;if(c!==void 0&&u!==void 0){if(r.set(new I(c[0],c[1],c[2]),new I(u[0],u[1],u[2])),l.normalized){let h=Mf(Zr[l.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let o=e.targets;if(o!==void 0){let l=new I,c=new I;for(let u=0,h=o.length;u<h;u++){let f=o[u];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let y=Mf(Zr[d.componentType]);c.multiplyScalar(y)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(l)}n.boundingBox=r;let a=new Un;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function o0(n,e,t){let s=e.attributes,r=[];function o(a,l){return t.getDependency("accessor",a).then(function(c){n.setAttribute(l,c)})}for(let a in s){let l=yf[a]||a.toLowerCase();l in n.attributes||r.push(o(s[a],l))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(l){n.setIndex(l)});r.push(a)}return at.workingColorSpace!==Vt&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),_s(n,e),u1(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?o1(n,e.targets,t):n})}var sc,it,Zu,$u,Ju,ju,Qu,ef,tf,nf,sf,rf,of,af,lf,cf,hf,uf,ff,a0,Xo,i0,df,pf,mf,gf,rc,i1,_f,Yn,Zr,s0,r0,qu,yf,gs,s1,Yu,h1,xf,l0=ei(()=>{Ei();Xu();sc=class extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ju(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new ff(t)})}load(e,t,s,r){let o=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=ms.extractUrlBase(e);a=ms.resolveURL(u,this.path)}else a=ms.extractUrlBase(e);this.manager.itemStart(e);let l=function(u){r?r(u):console.error(u),o.manager.itemError(e),o.manager.itemEnd(e)},c=new Ho(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{o.parse(u,a,function(h){t(h),o.manager.itemEnd(e)},l)}catch(h){l(h)}},s,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,r){let o,a={},l={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===a0){try{a[it.KHR_BINARY_GLTF]=new df(e)}catch(f){r&&r(f);return}o=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new xf(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,a[f.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){let f=o.extensionsUsed[h],d=o.extensionsRequired||[];switch(f){case it.KHR_MATERIALS_UNLIT:a[f]=new $u;break;case it.KHR_DRACO_MESH_COMPRESSION:a[f]=new pf(o,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[f]=new mf;break;case it.KHR_MESH_QUANTIZATION:a[f]=new gf;break;default:d.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(a),u.setPlugins(l),u.parse(s,r)}parseAsync(e,t){let s=this;return new Promise(function(r,o){s.parse(e,t,r,o)})}};it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zu=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){let t=this.parser,s="light:"+e,r=t.cache.get(s);if(r)return r;let o=t.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e],u,h=new xe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Vt);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new ql(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Xl(h),u.distance=f;break;case"spot":u=new Wl(h),u.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,_s(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(s,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,s=this.parser,o=s.json.nodes[e],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return s._getNodeRef(t.cache,l,c)})}},$u=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return ae}extendParams(e,t,s){let r=[];e.color=new xe(1,1,1),e.opacity=1;let o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){let a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Vt),e.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(s.assignTexture(e,"map",o.baseColorTexture,ft))}return Promise.all(r)}},Ju=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}},ju=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(s.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(s.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(s.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(l,l)}return Promise.all(o)}},Qu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(s.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(s.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}},ef=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],Vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(s.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ft)),a.sheenRoughnessTexture!==void 0&&o.push(s.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}},tf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(s.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(o)}},nf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(s.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let l=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(l[0],l[1],l[2],Vt),Promise.all(o)}},sf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=r.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}},rf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(s.assignTexture(t,"specularIntensityMap",a.specularTexture));let l=a.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(l[0],l[1],l[2],Vt),a.specularColorTexture!==void 0&&o.push(s.assignTexture(t,"specularColorMap",a.specularColorTexture,ft)),Promise.all(o)}},of=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(s.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(o)}},af=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let s=this.parser,r=s.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(s.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}},lf=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,s=t.json,r=s.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let o=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,a)}},cf=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,s=this.parser,r=s.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;let a=o.extensions[t],l=r.images[a.source],c=s.textureLoader;if(l.uri){let u=s.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return s.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},hf=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,s=this.parser,r=s.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;let a=o.extensions[t],l=r.images[a.source],c=s.textureLoader;if(l.uri){let u=s.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return s.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},uf=class{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,s=t.bufferViews[e];if(s.extensions&&s.extensions[this.name]){let r=s.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){let c=r.byteOffset||0,u=r.byteLength||0,h=r.count,f=r.byteStride,d=new Uint8Array(l,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(p),h,f,d,r.mode,r.filter),p})})}else return null}},ff=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,s=t.nodes[e];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;let r=t.meshes[s.mesh];for(let u of r.primitives)if(u.mode!==Yn.TRIANGLES&&u.mode!==Yn.TRIANGLE_STRIP&&u.mode!==Yn.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=s.extensions[this.name].attributes,l=[],c={};for(let u in a)l.push(this.parser.getDependency("accessor",a[u]).then(h=>(c[u]=h,c[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(u=>{let h=u.pop(),f=h.isGroup?h.children:[h],d=u[0].count,p=[];for(let g of f){let y=new Ne,_=new I,m=new Nn,x=new I(1,1,1),M=new Bl(g.geometry,g.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&_.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&x.fromBufferAttribute(c.SCALE,E),M.setMatrixAt(E,y.compose(_,m,x));for(let E in c)if(E==="_COLOR_0"){let L=c[E];M.instanceColor=new Vs(L.array,L.itemSize,L.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,c[E]);Lt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},a0="glTF",Xo=12,i0={JSON:1313821514,BIN:5130562},df=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xo),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==a0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Xo,o=new DataView(e,Xo),a=0;for(;a<r;){let l=o.getUint32(a,!0);a+=4;let c=o.getUint32(a,!0);if(a+=4,c===i0.JSON){let u=new Uint8Array(e,Xo+a,l);this.content=s.decode(u)}else if(c===i0.BIN){let u=Xo+a;this.body=e.slice(u,u+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},pf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let s=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},u={};for(let h in a){let f=yf[h]||h.toLowerCase();l[f]=a[h]}for(let h in e.attributes){let f=yf[h]||h.toLowerCase();if(a[h]!==void 0){let d=s.accessors[e.attributes[h]],p=Zr[d.componentType];u[f]=p.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",o).then(function(h){return new Promise(function(f,d){r.decodeDracoFile(h,function(p){for(let g in p.attributes){let y=p.attributes[g],_=c[g];_!==void 0&&(y.normalized=_)}f(p)},l,u,Vt,d)})})}},mf=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},gf=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},rc=class extends fs{constructor(e,t,s,r){super(e,t,s,r)}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let a=0;a!==r;a++)t[a]=s[o+a];return t}interpolate_(e,t,s,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,u=l*3,h=r-t,f=(s-t)/h,d=f*f,p=d*f,g=e*u,y=g-u,_=-2*p+3*d,m=p-d,x=1-_,M=m-d+f;for(let E=0;E!==l;E++){let L=a[y+E+l],w=a[y+E+c]*h,P=a[g+E+l],D=a[g+E]*h;o[E]=x*L+M*w+_*P+m*D}return o}},i1=new Nn,_f=class extends rc{interpolate_(e,t,s,r){let o=super.interpolate_(e,t,s,r);return i1.fromArray(o).normalize().toArray(o),o}},Yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},s0={9728:Pt,9729:sn,9984:ml,9985:Du,9986:as,9987:oi},r0={33071:xn,33648:Lo,10497:ri},qu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},s1={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Fr},Yu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};h1=new Ne,xf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new n1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,r=!1,o=-1;typeof navigator<"u"&&(s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,o=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||s||r&&o<98?this.textureLoader=new Wr(this.options.manager):this.textureLoader=new Yl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ho(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let s=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(a){let l={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:s,userData:{}};return qs(o,l,r),_s(l,r),Promise.all(s._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){let a=t[r].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let r=0,o=e.length;r<o;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(s[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,s){if(e.refs[t]<=1)return s;let r=s.clone(),o=(a,l)=>{let c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(let[u,h]of a.children.entries())o(h,l.children[u])};return o(s,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let s=0;s<t.length;s++){let r=e(t[s]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let s=[];for(let r=0;r<t.length;r++){let o=e(t[r]);o&&s.push(o)}return s}getDependency(e,t){let s=e+":"+t,r=this.cache.get(s);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(s,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let s=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,a){return s.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],s=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(o,a){s.load(ms.resolveURL(t.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(s){let r=t.byteLength||0,o=t.byteOffset||0;return s.slice(o,o+r)})}loadAccessor(e){let t=this,s=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=qu[r.type],l=Zr[r.componentType],c=r.normalized===!0,u=new l(r.count*a);return Promise.resolve(new ht(u,a,c))}let o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){let l=a[0],c=qu[r.type],u=Zr[r.componentType],h=u.BYTES_PER_ELEMENT,f=h*c,d=r.byteOffset||0,p=r.bufferView!==void 0?s.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,y,_;if(p&&p!==f){let m=Math.floor(d/p),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,M=t.cache.get(x);M||(y=new u(l,m*p,r.count*p/h),M=new Uo(y,p/h),t.cache.add(x,M)),_=new Bo(M,c,d%p/h,g)}else l===null?y=new u(r.count*c):y=new u(l,d,r.count*c),_=new ht(y,c,g);if(r.sparse!==void 0){let m=qu.SCALAR,x=Zr[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,L=new x(a[1],M,r.sparse.count*m),w=new u(a[2],E,r.sparse.count*c);l!==null&&(_=new ht(_.array.slice(),_.itemSize,_.normalized));for(let P=0,D=L.length;P<D;P++){let v=L[P];if(_.setX(v,w[P*c]),c>=2&&_.setY(v,w[P*c+1]),c>=3&&_.setZ(v,w[P*c+2]),c>=4&&_.setW(v,w[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return _})}loadTexture(e){let t=this.json,s=this.options,o=t.textures[e].source,a=t.images[o],l=this.textureLoader;if(a.uri){let c=s.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,o,l)}loadTextureImage(e,t,s){let r=this,o=this.json,a=o.textures[e],l=o.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let u=this.loadImageSource(t,s).then(function(h){h.flipY=!1,h.name=a.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);let d=(o.samplers||{})[a.sampler]||{};return h.magFilter=s0[d.magFilter]||sn,h.minFilter=s0[d.minFilter]||oi,h.wrapS=r0[d.wrapS]||ri,h.wrapT=r0[d.wrapT]||ri,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){let s=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=r.images[e],l=self.URL||self.webkitURL,c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=s.getDependency("bufferView",a.bufferView).then(function(f){u=!0;let d=new Blob([f],{type:a.mimeType});return c=l.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(f){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let _=new rn(y);_.needsUpdate=!0,d(_)}),t.load(ms.resolveURL(f,o.path),g,void 0,p)})}).then(function(f){return u===!0&&l.revokeObjectURL(c),f.userData.mimeType=a.mimeType||c1(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,s,r){let o=this;return this.getDependency("texture",s.index).then(function(a){if(!a)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(a=a.clone(),a.channel=s.texCoord),o.extensions[it.KHR_TEXTURE_TRANSFORM]){let l=s.extensions!==void 0?s.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let c=o.associations.get(a);a=o.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),o.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,s=e.material,r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+s.uuid,c=this.cache.get(l);c||(c=new Ws,Bn.prototype.copy.call(c,s),c.color.copy(s.color),c.map=s.map,c.sizeAttenuation=!1,this.cache.add(l,c)),s=c}else if(e.isLine){let l="LineBasicMaterial:"+s.uuid,c=this.cache.get(l);c||(c=new Cn,Bn.prototype.copy.call(c,s),c.color.copy(s.color),c.map=s.map,this.cache.add(l,c)),s=c}if(r||o||a){let l="ClonedMaterial:"+s.uuid+":";r&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=s.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(s))),s=c}e.material=s}getMaterialType(){return Vr}loadMaterial(e){let t=this,s=this.json,r=this.extensions,o=s.materials[e],a,l={},c=o.extensions||{},u=[];if(c[it.KHR_MATERIALS_UNLIT]){let f=r[it.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(l,o,t))}else{let f=o.pbrMetallicRoughness||{};if(l.color=new xe(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],Vt),l.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(l,"map",f.baseColorTexture,ft)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}o.doubleSided===!0&&(l.side=yt);let h=o.alphaMode||Yu.OPAQUE;if(h===Yu.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===Yu.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==ae&&(u.push(t.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new ue(1,1),o.normalTexture.scale!==void 0)){let f=o.normalTexture.scale;l.normalScale.set(f,f)}if(o.occlusionTexture!==void 0&&a!==ae&&(u.push(t.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==ae){let f=o.emissiveFactor;l.emissive=new xe().setRGB(f[0],f[1],f[2],Vt)}return o.emissiveTexture!==void 0&&a!==ae&&u.push(t.assignTexture(l,"emissiveMap",o.emissiveTexture,ft)),Promise.all(u).then(function(){let f=new a(l);return o.name&&(f.name=o.name),_s(f,o),t.associations.set(f,{materials:e}),o.extensions&&qs(r,f,o),f})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,s=this.extensions,r=this.primitiveCache;function o(l){return s[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return o0(c,l,t)})}let a=[];for(let l=0,c=e.length;l<c;l++){let u=e[l],h=l1(u),f=r[h];if(f)a.push(f.promise);else{let d;u.extensions&&u.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=o(u):d=o0(new dt,u,t),r[h]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,s=this.json,r=this.extensions,o=s.meshes[e],a=o.primitives,l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c].material===void 0?r1(this.cache):this.getDependency("material",a[c].material);l.push(h)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){let u=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let p=0,g=h.length;p<g;p++){let y=h[p],_=a[p],m,x=u[p];if(_.mode===Yn.TRIANGLES||_.mode===Yn.TRIANGLE_STRIP||_.mode===Yn.TRIANGLE_FAN||_.mode===void 0)m=o.isSkinnedMesh===!0?new Nl(y,x):new j(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),_.mode===Yn.TRIANGLE_STRIP?m.geometry=Wu(m.geometry,$l):_.mode===Yn.TRIANGLE_FAN&&(m.geometry=Wu(m.geometry,Go));else if(_.mode===Yn.LINES)m=new Ft(y,x);else if(_.mode===Yn.LINE_STRIP)m=new zi(y,x);else if(_.mode===Yn.LINE_LOOP)m=new Ol(y,x);else if(_.mode===Yn.POINTS)m=new Gr(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(m.geometry.morphAttributes).length>0&&a1(m,o),m.name=t.createUniqueName(o.name||"mesh_"+e),_s(m,o),_.extensions&&qs(r,m,_),t.assignFinalMaterial(m),f.push(m)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return o.extensions&&qs(r,f[0],o),f[0];let d=new ot;o.extensions&&qs(r,d,o),t.associations.set(d,{meshes:e});for(let p=0,g=f.length;p<g;p++)d.add(f[p]);return d})}loadCamera(e){let t,s=this.json.cameras[e],r=s[s.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?t=new Gt(Hm.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):s.type==="orthographic"&&(t=new hs(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),s.name&&(t.name=this.createUniqueName(s.name)),_s(t,s),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],s=[];for(let r=0,o=t.joints.length;r<o;r++)s.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",t.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(r){let o=r.pop(),a=r,l=[],c=[];for(let u=0,h=a.length;u<h;u++){let f=a[u];if(f){l.push(f);let d=new Ne;o!==null&&d.fromArray(o.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Ul(l,c)})}loadAnimation(e){let t=this.json,s=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,a=[],l=[],c=[],u=[],h=[];for(let f=0,d=r.channels.length;f<d;f++){let p=r.channels[f],g=r.samplers[p.sampler],y=p.target,_=y.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",_)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),u.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(f){let d=f[0],p=f[1],g=f[2],y=f[3],_=f[4],m=[];for(let x=0,M=d.length;x<M;x++){let E=d[x],L=p[x],w=g[x],P=y[x],D=_[x];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let v=s._createAnimationTracks(E,L,w,P,D);if(v)for(let T=0;T<v.length;T++)m.push(v[T])}return new Vl(o,void 0,m)})}createNodeMesh(e){let t=this.json,s=this,r=t.nodes[e];return r.mesh===void 0?null:s.getDependency("mesh",r.mesh).then(function(o){let a=s._getNodeRef(s.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,u=r.weights.length;c<u;c++)l.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,s=this,r=t.nodes[e],o=s._loadNodeShallow(e),a=[],l=r.children||[];for(let u=0,h=l.length;u<h;u++)a.push(s.getDependency("node",l[u]));let c=r.skin===void 0?Promise.resolve(null):s.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),c]).then(function(u){let h=u[0],f=u[1],d=u[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,h1)});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}_loadNodeShallow(e){let t=this.json,s=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let o=t.nodes[e],a=o.name?r.createUniqueName(o.name):"",l=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&l.push(c),o.camera!==void 0&&l.push(r.getDependency("camera",o.camera).then(function(u){return r._getNodeRef(r.cameraCache,o.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){l.push(u)}),this.nodeCache[e]=Promise.all(l).then(function(u){let h;if(o.isBone===!0?h=new Oo:u.length>1?h=new ot:u.length===1?h=u[0]:h=new Lt,h!==u[0])for(let f=0,d=u.length;f<d;f++)h.add(u[f]);if(o.name&&(h.userData.name=o.name,h.name=a),_s(h,o),o.extensions&&qs(s,h,o),o.matrix!==void 0){let f=new Ne;f.fromArray(o.matrix),h.applyMatrix4(f)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,s=this.json.scenes[e],r=this,o=new ot;s.name&&(o.name=r.createUniqueName(s.name)),_s(o,s),s.extensions&&qs(t,o,s);let a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(r.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let h=0,f=c.length;h<f;h++)o.add(c[h]);let u=h=>{let f=new Map;for(let[d,p]of r.associations)(d instanceof Bn||d instanceof rn)&&f.set(d,p);return h.traverse(d=>{let p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=u(o),o})}_createAnimationTracks(e,t,s,r,o){let a=[],l=e.name?e.name:e.uuid,c=[];gs[o.path]===gs.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(l);let u;switch(gs[o.path]){case gs.weights:u=ki;break;case gs.rotation:u=vi;break;case gs.position:case gs.scale:u=Gi;break;default:s.itemSize===1?u=ki:u=Gi;break}let h=r.interpolation!==void 0?s1[r.interpolation]:Gs,f=this._getArrayFromAccessor(s);for(let d=0,p=c.length;d<p;d++){let g=new u(c[d]+"."+gs[o.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let s=Mf(t.constructor),r=new Float32Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=t[o]*s;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(s){let r=this instanceof vi?_f:rc;return new r(this.times,this.values,this.getValueSize()/3,s)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Pb=bg(()=>{Ei();Jm();jm();t0();l0();Xu();var $r=Math.PI/180,f1=656928,nn=2814207,hn=16722902,d1=16769162;function L0(n){return{r:n>>16&255,g:n>>8&255,b:n&255}}var pi=[{name:"VICE RUNWAY",music:"vice-runway.mp3",sun:{halo:["rgba(255,178,96,0.34)","rgba(255,96,112,0.13)","rgba(255,60,150,0)"],disc:["#ffcf72","#ff9a3e","#ff5a5f","#ff2f8e","#d81ea0"]},fog:7218768,glow:16731558,haze:16747158,skyA:[[24,12,48],[50,22,70],[92,34,86],[130,52,82],[156,82,66],[74,36,56],[24,13,36]],skyB:[[46,23,86],[90,40,112],[160,58,126],[206,90,112],[222,136,94],[118,58,86],[38,21,58]]},{name:"TURBO KASKADE",music:"turbo-kaskade.mp3",sun:{halo:["rgba(170,195,255,0.30)","rgba(90,130,220,0.12)","rgba(60,90,180,0)"],disc:["#eef4ff","#cdd9f2","#a6bce6","#8098d0","#5f78ba"]},fog:1450058,glow:4881151,haze:6982352,skyA:[[8,12,36],[16,24,60],[28,42,88],[44,64,116],[70,98,150],[40,54,96],[12,16,40]],skyB:[[20,28,68],[34,50,100],[52,78,136],[80,112,168],[116,154,198],[66,90,142],[20,26,62]]},{name:"POISON HEARTBEAT",music:"poison-heartbeat.mp3",sun:{halo:["rgba(150,255,120,0.32)","rgba(60,200,90,0.13)","rgba(30,150,80,0)"],disc:["#eaffb0","#a8ff5e","#4ef05a","#1fc96a","#0d8a5a"]},fog:1456159,glow:5504874,haze:8048746,skyA:[[6,16,20],[10,30,32],[16,48,40],[26,70,48],[44,100,56],[22,52,40],[8,18,18]],skyB:[[14,36,34],[24,62,52],[40,96,64],[64,132,72],[108,176,84],[52,102,64],[16,34,30]]}],Ri=new Dl;Ri.fog=new Il(7218768,6e-5);var Ge=new ot;Ge.visible=!1;Ri.add(Ge);var It=new Gt(66,innerWidth/innerHeight,2.5,3e4),Zi=new No({antialias:!1,alpha:!0}),Ta=Math.min(16,Zi.capabilities.getMaxAnisotropy());Zi.info.autoReset=!1;var c0=0;document.body.appendChild(Zi.domElement);var Xi=1.85,vf=3,fa=new nc(Zi);fa.addPass(new ic(Ri,It));var da=new Kr(new ue(1,1),.9,.55,.18);fa.addPass(da);function wc(){It.aspect=innerWidth/innerHeight,It.updateProjectionMatrix();let n=Math.ceil(innerWidth/Xi),e=Math.ceil(innerHeight/Xi);Zi.setSize(n,e,!1),fa.setSize(n,e),da.setSize(Math.ceil(n/3),Math.ceil(e/3));let t=Zi.domElement;t.style.width=innerWidth+"px",t.style.height=innerHeight+"px",t.style.imageRendering="pixelated"}wc();addEventListener("resize",wc);var h0={},ji=n=>h0[n]||(h0[n]=new Cn({color:n})),p1=new ae({color:f1,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2});function I0(){return p1}function Gc(n,e){let t=n.clone(!0);return t.traverse(s=>{s.isMesh&&(s.material=I0(),s.add(new Ft(new an(s.geometry,25),ji(e))))}),t}function m1(n,e,t){n.updateMatrixWorld(!0);let s=new Tt().setFromObject(n),r=new I;s.getSize(r),r.y>.001&&n.scale.setScalar(e/r.y),n.updateMatrixWorld(!0);let o=new Tt().setFromObject(n);n.position.y=t-o.min.y}var Lf=new Oe(1.9,1.3),Vc=16765514;function g1(n,e,t,s,r,o,a,l,c,u,h){let d=u||10,p=h||4,g=[],y=[{rot:0,o:o+.95,a:[n+3,s-3]},{rot:Math.PI,o:t-.95,a:[n+3,s-3]},{rot:Math.PI/2,o:s+.95,a:[t+3,o-3]},{rot:-Math.PI/2,o:n-.95,a:[t+3,o-3]}],_=typeof l=="number"&&l<=1?l:.5;for(let x of y)for(let M=e+d+5;M<r-4;M+=d){let E=Math.min(1,_*(.35+Math.random()*1.5));for(let L=x.a[0]+p*.5;L<x.a[1];L+=p){if(Math.random()>E)continue;let w=Lf.clone(),P=new Ne;x.rot===0?P.makeTranslation(L,M,x.o):(P.makeRotationY(x.rot),P.setPosition(x.rot===Math.PI?L:x.o,M,x.rot===Math.PI?x.o:L)),w.applyMatrix4(P),g.push(w)}}g.length||g.push(Lf.clone().translate(0,e-999,0));let m=bn(g);return g.forEach(x=>x.dispose()),new j(m,new ae({color:Vc,transparent:!0,opacity:.8,depthWrite:!1,side:yt,fog:!c}))}function D0(n){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),s=t.createRadialGradient(128,128,44,128,128,128);s.addColorStop(0,n.halo[0]),s.addColorStop(.5,n.halo[1]),s.addColorStop(1,n.halo[2]),t.fillStyle=s,t.fillRect(0,0,256,256);let r=t.createLinearGradient(0,26,0,230);r.addColorStop(0,n.disc[0]),r.addColorStop(.34,n.disc[1]),r.addColorStop(.62,n.disc[2]),r.addColorStop(.85,n.disc[3]),r.addColorStop(1,n.disc[4]),t.fillStyle=r,t.beginPath(),t.arc(128,128,104,0,7),t.fill(),t.globalCompositeOperation="destination-out";for(let a=0;a<4;a++)t.fillRect(0,102+a*7,256,3);let o=t.createLinearGradient(0,127,0,139);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=o,t.fillRect(0,127,256,129),new Wn(e)}var Hn=new j(new Oe(6400,6400),new ae({map:D0(pi[0].sun),transparent:!0,depthWrite:!1,fog:!1}));Hn.position.set(0,-470,-16800);Ri.add(Hn);function N0(n){let{r:e,g:t,b:s}=L0(n),r=document.createElement("canvas");r.width=4,r.height=128;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,0,128);return a.addColorStop(0,`rgba(${e},${t},${s},0)`),a.addColorStop(.5,`rgba(${e},${t},${s},0.5)`),a.addColorStop(1,`rgba(${e},${t},${s},0)`),o.fillStyle=a,o.fillRect(0,0,4,128),new Wn(r)}var Ai=new j(new Oe(6e4,1500),new ae({map:N0(pi[0].haze),transparent:!0,depthWrite:!1,fog:!1,blending:bt}));Ai.position.set(0,-10,-6e3);Ri.add(Ai);function ur(n,e,t){let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d");r.imageSmoothingEnabled=!1,t(r,n,e);let o=new Wn(s);return o.magFilter=Pt,o.minFilter=Pt,o.colorSpace=ft,o.wrapS=o.wrapT=ri,o}var Kt=new ae({color:656918}),Tn=new ae({color:1314854}),u0=[{base:"#140b28",slab:"#1d1236",mull:"#0d0719",win:"#ffd24a",win2:"#7adcff",acc:"#ff2bd6",shop:["#ff9a3c","#ff2bd6","#2af0ff","#ffe08a"]},{base:"#0e0d2c",slab:"#171a3e",mull:"#080716",win:"#ffe08a",win2:"#9adcff",acc:"#2af0ff",shop:["#ffd24a","#ff5a5f","#2af0ff","#c0ff5e"]},{base:"#190a20",slab:"#241031",mull:"#0e0614",win:"#ffcf5e",win2:"#ff8a7a",acc:"#7b3ff2",shop:["#ff9a3c","#ff2bd6","#ffe08a","#7adcff"]},{base:"#101226",slab:"#1a1e38",mull:"#090a16",win:"#f5d98c",win2:"#8ac8f0",acc:"#ff5a8f",shop:["#ffb45e","#ff4a7c","#4adcff","#ffe08a"]},{base:"#0d1420",slab:"#152238",mull:"#070b12",win:"#ffe6a0",win2:"#6ae0d0",acc:"#2af0ff",shop:["#4adcff","#ffd24a","#ff2bd6","#c0ff5e"]},{base:"#1c0d16",slab:"#2a1522",mull:"#100710",win:"#ffc86a",win2:"#ff7ab0",acc:"#ff2b5c",shop:["#ff5a5f","#ffb45e","#ff2bd6","#ffe08a"]},{base:"#12102a",slab:"#1b1a40",mull:"#0a0918",win:"#e8d48a",win2:"#a0b8ff",acc:"#7b3ff2",shop:["#9a6aff","#2af0ff","#ffd24a","#ff4a7c"]},{base:"#0a1616",slab:"#122424",mull:"#060e0e",win:"#d8ffb0",win2:"#7adcff",acc:"#c0ff5e",shop:["#c0ff5e","#2af0ff","#ffe08a","#ff9a3c"]}];function _1(n,e,t,s,r){if(r>=11)return y1(n,e,t,s,r);n.fillStyle=s.base,n.fillRect(0,0,e,t);let o=Math.min(16,t*.08|0)+6,a=6+(Math.random()*6|0),l=t-o;if(r===1){n.fillStyle="rgba(120,180,255,0.05)",n.fillRect(0,0,e,t);for(let u=0;u<e;u+=3)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(u,0,1,t);let c=0;for(let u=a;u<l-6;u+=6){if(c<=0&&Math.random()<.16&&(c=1+(Math.random()*3|0)),c>0){c--,n.fillStyle=Math.random()<.7?s.win:s.win2,n.globalAlpha=.75,n.fillRect(1,u+1,e-2,4),n.globalAlpha=1;for(let h=0;h<e;h+=3)n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(h,u+1,1,4)}else if(n.fillStyle="rgba(10,16,40,0.55)",n.fillRect(1,u+1,e-2,4),Math.random()<.2){n.fillStyle=s.win2,n.globalAlpha=.5;let h=Math.random()*e*.7|0;n.fillRect(h,u+1,3+Math.random()*8|0,4),n.globalAlpha=1}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,u+5,e,1)}n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(0,0,e,a),n.fillStyle=s.acc,n.fillRect(0,0,e,1),n.fillStyle="#0a0a18",n.fillRect(0,l,e,o),n.fillStyle=s.win2,n.globalAlpha=.55,n.fillRect(2,l+1,e-4,o-3),n.globalAlpha=1;for(let u=2;u<e-2;u+=5)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(u,l+1,1,o-3)}else if(r===2){for(let u=a;u<l-7;u+=7){n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,u+7-1,e,1);for(let h=2;h<e-4;h+=5+(Math.random()*3|0)){let f=Math.random()<.34;n.fillStyle=f?Math.random()<.7?s.win:Math.random()<.85?"#aef2ff":s.acc:"rgba(0,0,0,0.55)",n.fillRect(h,u+2,2+(Math.random()*2|0),3+(Math.random()*2|0)),Math.random()<.16&&(n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(h,u+7-3,4,2)),Math.random()<.05&&(n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.fillRect(h+1,u+1,1,1))}}n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(0,0,e,a),n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let u=1;u<e-3;){let h=3+(Math.random()*6|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.8,n.fillRect(u,l+2,Math.min(h,e-u-2),o-4),n.globalAlpha=1,u+=h+1+(Math.random()*3|0)}}else if(r===3){n.fillStyle="rgba(255,255,255,0.03)";for(let c=0;c<t;c+=24)n.fillRect(0,c,e,12);for(let c=0;c<3;c++){let u=4+Math.random()*(e-8)|0;n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(u,0,2,t),n.fillStyle="rgba(255,255,255,0.08)",n.fillRect(u+2,0,1,t)}for(let c=a+6;c<l-10;c+=26){let u=4+Math.random()*Math.max(4,e-20)|0;for(let h=0;h<4;h++)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(u,c+h*3,12,2)}for(let c=a+14;c<l-8;c+=34)if(Math.random()<.7){let u=3+Math.random()*Math.max(4,e-12)|0;n.fillStyle=Math.random()<.6?s.win2:s.win,n.globalAlpha=.8,n.fillRect(u,c,7,5),n.globalAlpha=1}n.fillStyle="#0a0808",n.fillRect(0,l,e,o);for(let c=0;c<e;c+=6)n.fillStyle=c/6%2?"#e6c02a":"#141414",n.fillRect(c,l+o-4,6,3);n.fillStyle="#ff2b4c",n.globalAlpha=.8;for(let c=a+8;c<l;c+=40)n.fillRect(e-4,c,2,2);n.globalAlpha=1}else if(r===4){for(let d=a;d<l-8;d+=8){n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,d+8-1,e,1);for(let p=2;p<e-4;p+=4)Math.random()<.18&&(n.fillStyle=s.win,n.fillRect(p,d+2,3,4))}let u=t*.22|0,h=t*.4|0,f=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0];if(n.fillStyle="#0b0518",n.fillRect(1,u,e-2,h),n.strokeStyle=f,n.lineWidth=1,n.strokeRect(1.5,u+.5,e-3,h-1),Math.random()<.5){n.fillStyle="#ff9a3c",n.beginPath(),n.arc(e/2,u+h*.42,Math.min(e,h)*.3,0,7),n.fill(),n.fillStyle="#0b0518";for(let d=0;d<4;d++)n.fillRect(2,u+h*.42+d*4,e-4,2);n.fillStyle=f,n.font="8px monospace",n.textBaseline="top",n.fillText(Ti[Math.random()*Ti.length|0],3,u+h-11)}else for(let d=u+4;d<u+h-8;d+=9)for(let p=4;p<e-8;p+=8)Math.random()<.75&&(n.fillStyle=Math.random()<.6?f:"#ffd24a",n.fillRect(p,d,5,5),Math.random()<.5&&n.fillRect(p+2,d+5,2,2));n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let d=1;d<e-3;){let p=4+(Math.random()*8|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.75,n.fillRect(d,l+2,Math.min(p,e-d-2),o-4),n.globalAlpha=1,d+=p+2+(Math.random()*4|0)}}else if(r===6){n.fillStyle="#070b18",n.fillRect(0,0,e,t),n.globalAlpha=.3,n.strokeStyle="#2af0ff",n.lineWidth=1;for(let c=0;c<t;c+=8)n.beginPath(),n.moveTo(0,c+.5),n.lineTo(e,c+.5),n.stroke();for(let c=0;c<e;c+=8)n.beginPath(),n.moveTo(c+.5,0),n.lineTo(c+.5,t),n.stroke();n.globalAlpha=1;for(let c=0;c<t/12;c++){let u=(Math.random()*(e/8)|0)*8+1,h=(Math.random()*(t/8)|0)*8+1;n.fillStyle=Math.random()<.7?"#2af0ff":"#ff2bd6",n.globalAlpha=.45+Math.random()*.45,n.fillRect(u,h,6,6),n.globalAlpha=1}n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let c=1;c<e-3;){let u=4+(Math.random()*7|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.75,n.fillRect(c,l+2,Math.min(u,e-c-2),o-4),n.globalAlpha=1,c+=u+2+(Math.random()*4|0)}}else if(r===7){n.fillStyle="#05060e",n.fillRect(0,0,e,t);for(let h=0;h<e;h+=4)n.fillStyle="rgba(255,255,255,0.025)",n.fillRect(h,0,1,t);n.fillStyle=s.acc,n.globalAlpha=.8,n.fillRect(e*.5|0,a,1,t-a-o),n.globalAlpha=1;let c=t*.2|0,u=Math.max(6,Math.min(e*.28,20))|0;n.strokeStyle=s.acc,n.lineWidth=2,n.beginPath(),n.arc(e/2,c,u,0,7),n.stroke(),Math.random()<.5&&(n.fillStyle=s.acc,n.globalAlpha=.7,n.fillRect(e/2-u*.4,c-1.5,u*.8,3),n.globalAlpha=1);for(let h=a;h<l;h+=10)Math.random()<.14&&(n.fillStyle=s.win2,n.globalAlpha=.45,n.fillRect(2,h,e-4,1),n.globalAlpha=1);n.fillStyle="#04040a",n.fillRect(0,l,e,o),n.fillStyle=s.acc,n.globalAlpha=.8,n.fillRect(e/2-2,l+2,4,o-4),n.globalAlpha=1}else if(r===8){for(let c=a;c<l;c+=3)n.fillStyle=(c/3|0)%2?"#ffd24a":"#ff2bd6",n.fillRect(1,c,2,2),n.fillRect(e-3,c,2,2);for(let c=a+6;c<l-14;c+=18+(Math.random()*10|0)){let u=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.random()*4|0];n.fillStyle="#0a0512",n.fillRect(4,c,e-8,10),n.strokeStyle=u,n.lineWidth=1,n.strokeRect(4.5,c+.5,e-9,9),n.fillStyle=u,n.font="8px monospace",n.textBaseline="top",n.fillText(Ti[Math.random()*Ti.length|0],7,c+1),n.fillStyle="rgba(0,0,0,0.55)";for(let h=c+12;h<Math.min(c+17,l-2);h+=5)for(let f=4;f<e-6;f+=4)n.fillRect(f,h,3,3)}n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let c=1;c<e-3;){let u=3+(Math.random()*6|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.85,n.fillRect(c,l+2,Math.min(u,e-c-2),o-4),n.globalAlpha=1,c+=u+1+(Math.random()*3|0)}}else if(r===9){n.fillStyle="#0a0616",n.fillRect(0,0,e,t);let c=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0],u=Math.random()*3|0;if(u===0){n.fillStyle="#1a1030",n.fillRect(2,2,e-4,t-4);let h=t*.4;n.fillStyle="#ffd8c0",n.fillRect(e*.25,h-t*.12,e*.5,t*.24),n.fillStyle="#141024",n.fillRect(e*.2,h-t*.18,e*.6,t*.08),n.fillRect(e*.2,h-t*.16,e*.12,t*.2),n.fillRect(e*.68,h-t*.16,e*.12,t*.2),n.fillStyle="#ff2b4c",n.beginPath(),n.arc(e*.5,h+t*.02,e*.05,0,7),n.fill(),n.fillStyle="#141024",n.fillRect(e*.34,h-t*.02,e*.08,2),n.fillRect(e*.58,h-t*.02,e*.08,2),n.fillStyle=c,n.font="8px monospace",n.textBaseline="top",n.fillText(Ti[Math.random()*Ti.length|0],4,t*.72|0)}else if(u===1){n.fillStyle="#101a3a",n.fillRect(2,2,e-4,t-4);let h=t*.38,f=e*.18;n.fillStyle="#e8f0ff",n.beginPath(),n.ellipse(e/2,h,e*.32,f,0,0,7),n.fill(),n.fillStyle=c,n.beginPath(),n.arc(e/2,h,f*.6,0,7),n.fill(),n.fillStyle="#08060e",n.beginPath(),n.arc(e/2,h,f*.28,0,7),n.fill()}else{for(let h=4;h<t-4;h+=5){n.fillStyle=Math.random()<.5?c:"#7b3ff2",n.globalAlpha=.4+Math.random()*.5;let f=Math.sin(h*.15)*e*.2+e*.3|0;n.fillRect(4,h,f+(e*.2|0),2)}n.globalAlpha=1}n.fillStyle="rgba(0,0,0,0.35)";for(let h=2;h<t;h+=3)n.fillRect(2,h,e-4,1);n.strokeStyle=c,n.lineWidth=1,n.strokeRect(1.5,1.5,e-3,t-3),n.fillStyle="#05030c",n.fillRect(0,l,e,o)}else if(r===10){n.fillStyle="#141230",n.fillRect(0,0,e,t);for(let f=0;f<t;f+=14+(Math.random()*10|0))for(let d=0;d<e;d+=12+(Math.random()*12|0))n.fillStyle="rgba(255,255,255,"+(.02+Math.random()*.04).toFixed(3)+")",n.fillRect(d,f,10+(Math.random()*12|0),12+(Math.random()*10|0));let c="#2ab4ff",u="#ff2bd6",h=(f,d)=>{n.strokeStyle=d,n.lineWidth=1.5,n.globalAlpha=.95,n.beginPath();let p=2+Math.random()*8;for(n.moveTo(f+.5,p);p<t-10;){let g=14+Math.random()*30;if(p=Math.min(t-6,p+g),n.lineTo(f+.5,p),Math.random()<.55){let y=(Math.random()<.5?-1:1)*(4+Math.random()*10)|0;f=Math.max(3,Math.min(e-3,f+y)),n.lineTo(f+.5,p)}}n.stroke(),n.globalAlpha=1};h(3+Math.random()*e*.25|0,c),h(6+Math.random()*e*.2|0,c),h(e-4-Math.random()*e*.25|0,u),h(e-8-Math.random()*e*.2|0,u);for(let f=0;f<3;f++){let d=3+Math.random()*(e-10)|0;n.fillStyle="#0d0b22",n.fillRect(d,4,3,t-8),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(d+2,4,1,t-8)}if(e>30){let f=4+Math.random()*(e-26)|0,d=t*.3+Math.random()*t*.3|0;n.fillStyle="#0c0a20",n.fillRect(f,d,22,22),n.fillStyle="#050410";for(let p of[[5,5],[16,5],[5,16],[16,16]])n.beginPath(),n.arc(f+p[0],d+p[1],4,0,7),n.fill()}{let f=4+Math.random()*Math.max(6,e-20)|0,d=t*.15+Math.random()*t*.5|0;for(let p=0;p<5;p++)n.fillStyle="#080618",n.fillRect(f,d+p*3,16,2)}for(let f=0;f<3+(t/90|0);f++){let d=4+Math.random()*Math.max(6,e-20)|0,p=6+Math.random()*Math.max(10,t-30)|0;n.fillStyle="#0a0816",n.fillRect(d-1,p-1,14,7);for(let g=0;g<3;g++)n.fillStyle=Math.random()<.85?"#ffb742":"#3a2c14",n.fillRect(d+g*4,p,3,5)}for(let f=0;f<8;f++)n.fillStyle=Math.random()<.5?c:u,n.globalAlpha=.9,n.fillRect(3+Math.random()*(e-6)|0,3+Math.random()*(t-8)|0,2,1),n.globalAlpha=1;n.fillStyle="#0a0a1a",n.fillRect(e*.25,l-2,e*.5,o+2);for(let f=l+1;f<t-3;f+=3)n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(e*.27,f,e*.46,1);for(let f=0;f<e;f+=6)n.fillStyle=(f/6|0)%2?"#e6c02a":"#141414",n.fillRect(f,t-3,6,2)}else{let c=0,u=["rgba(255,255,255,0.05)","rgba(0,0,0,0.22)","rgba(122,63,242,0.10)","rgba(255,154,60,0.07)","rgba(42,240,255,0.06)"];for(;c<t;){let h=Math.min(t-c,40+(Math.random()*90|0));n.fillStyle=u[Math.random()*u.length|0],n.fillRect(0,c,e,h);let f=6+(Math.random()*3|0),d=3+(Math.random()*2|0),p=.2+Math.random()*.35;for(let g=c+3;g<c+h-f;g+=f)for(let y=2;y<e-4;y+=d+2)n.fillStyle=Math.random()<p?Math.random()<.75?s.win:s.win2:"rgba(0,0,0,0.5)",n.fillRect(y,g,d,f-3);n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(0,c+h-1,e,1),c+=h}n.fillStyle="#05030c",n.fillRect(0,l,e,o);for(let h=1;h<e-3;){let f=3+(Math.random()*7|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.8,n.fillRect(h,l+2,Math.min(f,e-h-2),o-4),n.globalAlpha=1,h+=f+1+(Math.random()*4|0)}}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,0,1,t),n.fillRect(e-1,0,1,t)}function y1(n,e,t,s,r){let o=Math.min(16,t*.08|0)+6,a=t-o,l=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e","#9a6aff"],c=l[Math.random()*l.length|0],u=()=>{n.fillStyle="#05030c",n.fillRect(0,a,e,o);for(let h=1;h<e-3;){let f=4+(Math.random()*7|0);n.fillStyle=s.shop[Math.random()*s.shop.length|0],n.globalAlpha=.8,n.fillRect(h,a+2,Math.min(f,e-h-2),o-4),n.globalAlpha=1,h+=f+2+(Math.random()*3|0)}};if(n.fillStyle=s.base,n.fillRect(0,0,e,t),r===11){for(let h=4,f=0;h<a-6;h+=7,f^=1)for(let d=2+f*4;d<e-6;d+=8){let p=Math.random()<.2;n.fillStyle=p?c:"rgba(0,0,0,0.45)",n.globalAlpha=p?.85:1,n.beginPath(),n.moveTo(d+3,h),n.lineTo(d+6,h+2),n.lineTo(d+6,h+5),n.lineTo(d+3,h+7),n.lineTo(d,h+5),n.lineTo(d,h+2),n.closePath(),n.fill(),n.globalAlpha=1}u()}else if(r===12){n.fillStyle="#040a08",n.fillRect(0,0,e,t);for(let h=3;h<e-2;h+=5){let f=Math.random()*t|0,d=t*.2+Math.random()*t*.4|0;for(let p=0;p<d;p+=4){let g=(f+p)%t;n.fillStyle=p<8?"#d8ffe8":"#3adc7a",n.globalAlpha=Math.max(.15,1-p/d),n.fillRect(h,g,2,3)}n.globalAlpha=1}u()}else if(r===13){n.fillStyle="#1c1a22",n.fillRect(0,0,e,t);for(let h=4;h<a-10;h+=12)for(let f=3;f<e-8;f+=10)n.fillStyle="#0a090f",n.fillRect(f,h,8,9),n.fillStyle="#26232e",n.fillRect(f,h,8,1),n.fillRect(f,h,1,9),Math.random()<.22&&(n.fillStyle="#ffd24a",n.globalAlpha=.75,n.fillRect(f+2,h+3,3,3),n.globalAlpha=1);n.fillStyle="rgba(0,0,0,0.3)";for(let h=0;h<5;h++)n.fillRect(Math.random()*e|0,0,2,t);u()}else if(r===14){for(let h=2;h<a-2;h+=4)n.fillStyle="#0c0a18",n.fillRect(1,h,e-2,3),Math.random()<.3&&(n.fillStyle=Math.random()<.6?"#ffb046":c,n.globalAlpha=.5,n.fillRect(1,h+3,e-2,1),n.globalAlpha=1);u()}else if(r===15){n.fillStyle="#08060e",n.fillRect(0,0,e,t);for(let h=3;h<a-8;h+=9)for(let f=2;f<e-8;f+=10){let d=l[Math.random()*l.length|0];n.fillStyle="#020204",n.fillRect(f,h,9,7),n.fillStyle=d,n.globalAlpha=.25+Math.random()*.6,n.fillRect(f+1,h+1,7,5),n.globalAlpha=1,Math.random()<.4&&(n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(f+1,h+1+(Math.random()*4|0),7,1))}u()}else if(r===16){for(let h=0,f=0;h<a;h+=9,f^=1)for(let d=-6;d<e;d+=12){let p=Math.random();n.fillStyle=p<.12?c:p<.5?"#141126":"#0d0b1c",n.globalAlpha=p<.12?.6:1,n.beginPath(),(f^d/12&1)%2?(n.moveTo(d+f*6,h),n.lineTo(d+12+f*6,h),n.lineTo(d+6+f*6,h+9)):(n.moveTo(d+6+f*6,h),n.lineTo(d+12+f*6,h+9),n.lineTo(d+f*6,h+9)),n.closePath(),n.fill(),n.globalAlpha=1}n.strokeStyle="rgba(255,255,255,0.08)";for(let h=0;h<a;h+=9)n.beginPath(),n.moveTo(0,h+.5),n.lineTo(e,h+.5),n.stroke();u()}else if(r===17){for(let h=6;h<a-14;h+=16){n.fillStyle="#221018",n.fillRect(0,h,e,3),n.fillStyle="#160a10",n.fillRect(2,h+3,e-4,10);for(let f=4;f<e-4;f+=6)Math.random()<.55&&(n.fillStyle="#ffb046",n.globalAlpha=.85,n.fillRect(f,h+6,3,4),n.globalAlpha=1);n.fillStyle="#ff5a3c",n.globalAlpha=.9;for(let f=3;f<e-3;f+=10)n.fillRect(f,h+2,2,2);n.globalAlpha=1}u()}else if(r===18){n.fillStyle="#0e0a16",n.fillRect(0,0,e,t);let h=14+(Math.random()*10|0);for(let f=0;f<h;f++){let d=Math.random()*(e-10)|0,p=Math.random()*(a-12)|0,g=6+Math.random()*10|0,y=5+Math.random()*9|0,_=l[Math.random()*l.length|0];n.fillStyle="#0a0512",n.fillRect(d-1,p-1,g+2,y+2),n.fillStyle=_,n.globalAlpha=.55+Math.random()*.35,n.fillRect(d,p,g,y),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.5)";for(let m=p+2;m<p+y-1;m+=3)n.fillRect(d+1,m,g-2,1)}u()}else if(r===19){n.fillStyle="#100d18",n.fillRect(0,0,e,t);let h=Math.max(4,e*.16|0),f=e-h>>1;n.fillStyle=c,n.globalAlpha=.9,n.fillRect(f,4,h,a-8),n.globalAlpha=1,n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(f+(h/2|0),4,1,a-8);for(let d=8;d<a-6;d+=14)n.fillStyle="#080612",n.fillRect(f-2,d,h+4,2);for(let d=6;d<a-8;d+=18)n.fillStyle="#e6c02a",n.globalAlpha=.5,n.fillRect(3,d,4,2),n.fillRect(5,d+2,4,2),n.fillRect(e-7,d,4,2),n.fillRect(e-9,d+2,4,2),n.globalAlpha=1;u()}else if(r===20){n.fillStyle="#141018",n.fillRect(0,0,e,t);for(let h=3;h<e-2;h+=6)n.fillStyle=h/6%3===0?"#c8a24a":"#3a2f22",n.globalAlpha=h/6%3===0?.8:1,n.fillRect(h,6,2,a-10),n.globalAlpha=1;for(let h=10;h<a-6;h+=24)n.fillStyle="#c8a24a",n.globalAlpha=.4,n.fillRect(2,h,e-4,1),n.globalAlpha=1;n.fillStyle="#ffd24a",n.globalAlpha=.85;for(let h=5;h<e-4;h+=12)Math.random()<.5&&n.fillRect(h,8+Math.random()*(a-20)|0,2,4);n.globalAlpha=1,u()}else if(r===21){n.fillStyle="#0a0812",n.fillRect(0,0,e,t);for(let h=4;h<a;h+=8)for(let f=3;f<e-4;f+=5)Math.random()<.25&&(n.fillStyle="#ffcf5e",n.globalAlpha=.6,n.fillRect(f,h+2,3,3),n.globalAlpha=1);n.strokeStyle="#2a2438",n.lineWidth=1;for(let h=1;h<e;h+=6)n.beginPath(),n.moveTo(h+.5,0),n.lineTo(h+.5,a),n.stroke();for(let h=1;h<a;h+=6)n.beginPath(),n.moveTo(0,h+.5),n.lineTo(e,h+.5),n.stroke();u()}else if(r===22){n.fillStyle="#12101e",n.fillRect(0,0,e,t);for(let h=6;h<a-4;h+=7)for(let f=5;f<e-4;f+=7){let d=Math.random()<.4;n.fillStyle=d?Math.random()<.8?"#ffd24a":"#7adcff":"#060410",n.globalAlpha=d?.9:1,n.beginPath(),n.arc(f,h,2.2,0,7),n.fill(),n.globalAlpha=1}u()}else if(r===23){n.fillStyle="#0c1018",n.fillRect(0,0,e,t);for(let h=4;h<a-8;h+=10)for(let f=2;f<e-10;f+=11)n.fillStyle="#0a1c33",n.beginPath(),n.moveTo(f,h+7),n.lineTo(f+9,h+5),n.lineTo(f+9,h),n.lineTo(f,h+2),n.closePath(),n.fill(),n.strokeStyle="rgba(120,190,255,0.35)",n.stroke(),Math.random()<.08&&(n.fillStyle="#04070c",n.fillRect(f+2,h+1,5,4));u()}else if(r===24){n.fillStyle="#100e16",n.fillRect(0,0,e,t);for(let h=4;h<a-6;h+=8)for(let f=3;f<e-5;f+=6){let d=Math.random();n.fillStyle=d<.1?"#ffcf5e":d<.35?"#04030a":"#0a0814",n.globalAlpha=d<.1?.8:1,n.fillRect(f,h,4,5),n.globalAlpha=1,d>=.1&&d<.2&&(n.fillStyle="#1c1826",n.beginPath(),n.moveTo(f,h),n.lineTo(f+4,h+5),n.stroke())}for(let h=0;h<3;h++){let f=l[Math.random()*l.length|0],d=a*.2+Math.random()*a*.6|0;n.strokeStyle=f,n.lineWidth=2,n.globalAlpha=.85,n.beginPath();let p=2+Math.random()*e*.3|0;n.moveTo(p,d);for(let g=0;g<4;g++)p+=4+Math.random()*8,n.lineTo(p,d+(Math.random()-.5)*8|0);n.stroke(),n.globalAlpha=1,n.lineWidth=1}u()}else if(r===25){n.fillStyle="#062a30",n.fillRect(0,0,e,t);let h=n.createLinearGradient(0,0,0,t);h.addColorStop(0,"rgba(20,220,210,0.25)"),h.addColorStop(1,"rgba(10,90,110,0.4)"),n.fillStyle=h,n.fillRect(0,0,e,t);for(let f=8;f<a;f+=9){n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(0,f,e,2);for(let d=0;d<3;d++)Math.random()<.5&&(n.fillStyle="rgba(0,0,0,0.55)",n.fillRect(Math.random()*(e-8)|0,f-5,3+Math.random()*6|0,4))}n.fillStyle="rgba(255,255,255,0.25)";for(let f=0;f<10;f++)n.fillRect(Math.random()*e|0,Math.random()*a|0,1,1);u()}else if(r===26){n.fillStyle="#12101c",n.fillRect(0,0,e,t);for(let h=8;h<a-10;h+=13)for(let f=7;f<e-6;f+=13)n.fillStyle="#0a0814",n.fillRect(f-6,h-6,12,12),n.fillStyle="#050308",n.beginPath(),n.arc(f,h,4.5,0,7),n.fill(),n.strokeStyle="#221e30",n.beginPath(),n.moveTo(f-4,h),n.lineTo(f+4,h),n.moveTo(f,h-4),n.lineTo(f,h+4),n.stroke(),Math.random()<.15&&(n.fillStyle=c,n.globalAlpha=.7,n.fillRect(f-5,h+4,10,1),n.globalAlpha=1);u()}else if(r===27){n.fillStyle="#100d1a",n.fillRect(0,0,e,t);for(let h=6;h<a-6;h+=9)for(let f=4;f<e-6;f+=7)Math.random()<.3&&(n.fillStyle="#ffcf5e",n.globalAlpha=.55,n.fillRect(f,h,3,4),n.globalAlpha=1);n.strokeStyle="#060410",n.lineWidth=1.5;for(let h=0;h<7;h++){let f=Math.random()*a*.8|0,d=4+Math.random()*8;n.beginPath(),n.moveTo(0,f),n.quadraticCurveTo(e/2,f+d,e,f+(Math.random()-.5)*8|0),n.stroke()}for(let h=0;h<4;h++){let f=Math.random()*(e-8)|0,d=Math.random()*(a-10)|0;n.fillStyle="#1a1626",n.fillRect(f,d,6,8),n.fillStyle=Math.random()<.5?"#ff2b4c":"#2af0ff",n.fillRect(f+2,d+2,2,1)}u()}else if(r===28){n.fillStyle="#0a0814",n.fillRect(0,0,e,t);let h=Math.max(8,e*.4|0),f=e-h>>1;n.fillStyle="#050208",n.fillRect(f-1,3,h+2,a-6);for(let d=5;d<a-8;d+=8){let p=l[Math.random()*l.length|0];n.fillStyle=p,n.globalAlpha=.55+Math.random()*.35,n.fillRect(f,d,h,6),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(f,d+2,h,1)}n.strokeStyle=c,n.strokeRect(f-1.5,2.5,h+3,a-5),u()}else if(r===29){n.fillStyle="#070a0c",n.fillRect(0,0,e,t);for(let h=2;h<e-1;h+=3){let f=Math.random()<.7?"#4ef0b0":l[Math.random()*l.length|0];n.fillStyle=f,n.globalAlpha=.25+Math.random()*.55;let d=Math.random()*10|0,p=a-(Math.random()*10|0);n.fillRect(h,d,1,p-d),n.globalAlpha=1;for(let g=d+6;g<p;g+=8+(Math.random()*8|0))n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(h,g,1,2)}u()}else{n.fillStyle="#141118",n.fillRect(0,0,e,t);for(let h=-e;h<a+e;h+=14)n.fillStyle=(h/14|0)%2?"#1c1822":"#0e0b12",n.beginPath(),n.moveTo(0,h),n.lineTo(e,h-e*.4),n.lineTo(e,h-e*.4+8),n.lineTo(0,h+8),n.closePath(),n.fill();n.fillStyle=c,n.globalAlpha=.8;for(let h=10;h<a-6;h+=26)n.fillRect(2,h,e-4,2);n.globalAlpha=1;for(let h=0;h<2;h++){let f=4+Math.random()*(e-24)|0,d=a*.3+Math.random()*a*.4|0;n.fillStyle="#0a0a14",n.fillRect(f,d,16,12);for(let p=d+2;p<d+11;p+=2)n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(f+1,p,14,1)}u()}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,0,1,t),n.fillRect(e-1,0,1,t)}function f0(n,e,t){if(Math.random()<.38){let s=["#4ef0e0","#2af0ff","#c0ff5e","#ff2bd6"][Math.random()*4|0];n.strokeStyle=s,n.fillStyle=s,n.lineWidth=1,n.globalAlpha=.85;let r=2+(Math.random()*4|0);for(let o=0;o<r;o++){let a=4+Math.random()*(e-8)|0,l=0;for(n.beginPath(),n.moveTo(a+.5,0);l<t-8;){let c=8+(Math.random()*30|0);if(l=Math.min(t-4,l+c),n.lineTo(a+.5,l+.5),Math.random()<.5&&l<t-12){let u=(Math.random()<.5?-1:1)*(3+Math.random()*8)|0;a=Math.max(3,Math.min(e-4,a+u)),n.lineTo(a+.5,l+.5)}}n.stroke(),n.fillRect(a-1,l-1,3,3)}n.globalAlpha=1}if(Math.random()<.4){let s=3+(Math.random()*6|0);for(let r=0;r<s;r++){let o=2+Math.random()*Math.max(4,e-12)|0,a=6+Math.random()*Math.max(8,t-24)|0,l=4+Math.random()*8|0,c=3+Math.random()*5|0,u=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.random()*5|0];n.fillStyle="#0a0616",n.fillRect(o-1,a-1,l+2,c+2),n.fillStyle=u,n.globalAlpha=.8,n.fillRect(o,a,l,c),n.globalAlpha=1,n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(o+1,a+1,Math.max(1,l*.4|0),1)}}}function Wc(n,e,t,s){let r=u0[Math.floor(Math.random()*u0.length)],o=Math.random(),a=t!==void 0?t:Math.random()<.6?o<.13?0:o<.25?1:o<.39?2:o<.47?3:o<.54?4:o<.6?5:o<.68?6:o<.76?7:o<.84?8:o<.92?9:10:11+(Math.random()*20|0),l=Math.max(24,Math.min(160,Math.round(n*2)))|0,c=Math.max(48,Math.min(1024,Math.round(e*2)))|0,u=ur(l,c,h=>{if(a!==0){_1(h,l,c,r,a),f0(h,l,c);return}h.fillStyle=r.base,h.fillRect(0,0,l,c);let f=8+(Math.random()*6|0);for(let _=0;_<l;_+=f)h.fillStyle=r.mull,h.fillRect(_,0,1,c);h.fillStyle="rgba(255,255,255,0.03)";for(let _=0;_<l;_+=f*2)h.fillRect(_,0,f,c);let d=8,p=Math.min(16,c*.08|0)+6,g=6+(Math.random()*6|0);for(let _=g;_<c-p-d;_+=d){h.fillStyle=r.slab,h.fillRect(0,_+d-1,l,1);let m=Math.random(),x=-1,M=-1;if(m<.14)x=0,M=l;else if(m<.62){let E=Math.random()*l|0;x=E,M=E+(l*.15+Math.random()*l*.3|0)}for(let E=0;E<l-2;E+=f)for(let L=E+2;L<E+f-1&&L<l-3;L+=4){let w=L>=x&&L<=M&&Math.random()<.9;w?h.fillStyle=Math.random()<.8?r.win:Math.random()<.85?r.win2:r.acc:h.fillStyle="rgba(0,0,0,0.55)",h.fillRect(L,_+2,3,d-4),w&&Math.random()<.35&&(h.fillStyle="rgba(255,255,255,0.55)",h.fillRect(L+1,_+3,1,1))}}h.fillStyle="rgba(0,0,0,0.5)",h.fillRect(0,0,l,g),Math.random()<.6&&(h.fillStyle=r.acc,h.fillRect(0,0,l,1));let y=c-p;h.fillStyle="#05030c",h.fillRect(0,y,l,p);for(let _=1;_<l-3;){let m=4+(Math.random()*9|0);h.fillStyle=r.shop[Math.random()*r.shop.length|0],h.globalAlpha=.75,h.fillRect(_,y+2,Math.min(m,l-_-2),p-4),h.globalAlpha=1,_+=m+2+(Math.random()*4|0)}h.fillStyle="rgba(255,240,200,0.5)",h.fillRect(0,y,l,1),h.fillStyle="rgba(0,0,0,0.4)",h.fillRect(0,0,1,c),h.fillRect(l-1,0,1,c),f0(h,l,c)});return u.wrapS=u.wrapT=xn,s&&s>1&&(u.wrapS=ri,u.repeat.x=s),u.minFilter=as,u.generateMipmaps=!0,u.anisotropy=Ta,new ae({map:u})}var Xc=new Wr().load("models/facades/cyberpunk_facade_asset/symmetrical_neon_cyberpunk_tower.png");Xc.colorSpace=ft;Xc.anisotropy=Ta;var Aa=Xc.clone();Aa.wrapS=ri;Aa.repeat.x=-1;Aa.offset.x=1;Aa.needsUpdate=!0;var If=[];for(let n of[Xc,Aa])for(let e of[16777215,16767176,13165823,15780095])If.push(new ae({map:n,color:e}));var id=["01_neon_cyberpunk_tower_facade","02_neon_cyberpunk_hotel_facade","03_neon_pixel_art_skyscraper_facade","04_neon_split_industrial_facade","05_neon_symmetry_cyberpunk_building_facade","06_neon_dataflow_tower_facade","07_neon_dream_cyberpunk_hotel_skyscraper","08_neon_cyberpunk_megastructure_facade","09_nexus_cyberpunk_megastructure_facade","10_cyberpunk_core_tower_tx_09","11_neon_datacore_cyberpunk_server_citywall","12_neo_terminal_cyberpunk_market_facade","13_neon_megablock_city_facade","14_nova_civic_systems_megastructure"],or=4,Df=4,Nf=512,Uf=1536,co=document.createElement("canvas");co.width=or*Nf;co.height=Df*Uf;var sd=co.getContext("2d");sd.fillStyle="#0a0820";sd.fillRect(0,0,co.width,co.height);var fo=new Wn(co);fo.colorSpace=ft;fo.minFilter=as;fo.generateMipmaps=!0;fo.anisotropy=Ta;var bs=new ae({map:fo});id.forEach((n,e)=>{let t=new Image;t.onload=()=>{sd.drawImage(t,e%or*Nf,(e/or|0)*Uf,Nf,Uf),fo.needsUpdate=!0},t.src="models/facades/cyberpunk_facades_all/"+n+".png"});var rd=0;function U0(n,e,t){let s=e%or/or,r=1-((e/or|0)+1)/Df,o=1/or,a=1/Df,l=n.attributes.uv;for(let c=0;c<l.count;c++){let u=l.getX(c);t&&(u=1-u),l.setXY(c,s+u*o,r+l.getY(c)*a)}l.needsUpdate=!0}var Ti=["PUNK","VICE","TURBO","NEON","BUST","RUN","MAXX","GRID"];function M1(){let n=Math.floor(Math.random()*3);return ur(48,24,e=>{let t=["#12062a","#1a0630","#08102a"][Math.floor(Math.random()*3)];e.fillStyle=t,e.fillRect(0,0,48,24);let s=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.floor(Math.random()*4)];if(n===0){e.fillStyle="#ff9a3c",e.beginPath(),e.arc(14,12,8,0,7),e.fill(),e.fillStyle=t;for(let r=0;r<3;r++)e.fillRect(4,13+r*3,20,1);e.fillStyle=s,e.fillRect(30,6,2,14);for(let r of[[-6,-2],[-4,-4],[0,-5],[4,-4],[6,-2]])e.fillRect(31+r[0],6+r[1],4,1)}else if(n===1)e.fillStyle=s,e.font="8px monospace",e.textBaseline="top",e.fillText(Ti[Math.floor(Math.random()*Ti.length)],4,3),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(0,13,48,1),e.fillStyle="#ffd24a",e.fillText(Ti[Math.floor(Math.random()*Ti.length)],12,14);else for(let r=4;r<44;r+=7){e.fillStyle=Math.random()<.5?s:"#ffd24a";for(let o=3;o<21;o+=5)Math.random()<.8&&(e.fillRect(r,o,4,3),Math.random()<.5&&e.fillRect(r+1,o+3,2,1))}e.strokeStyle=s,e.lineWidth=1,e.strokeRect(.5,.5,47,23)})}var pa=[];for(let n=0;n<24;n++)pa.push(new ae({map:M1(),transparent:!0,opacity:.92,side:yt,depthWrite:!1}));function od(n,e){return new j(new Oe(n,e),pa[Math.random()*pa.length|0])}function x1(){return ur(8,48,n=>{n.fillStyle="#0c0620",n.fillRect(0,0,8,48);let e=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.floor(Math.random()*5)];n.strokeStyle=e,n.strokeRect(.5,.5,7,47),n.fillStyle=e;for(let t=3;t<45;t+=6)Math.random()<.85&&(n.fillRect(2,t,4,3),Math.random()<.5&&(n.fillStyle="#ffffff",n.fillRect(3,t+1,1,1),n.fillStyle=e))})}var ma=[];for(let n=0;n<16;n++)ma.push(new ae({map:x1(),transparent:!0,side:yt,depthWrite:!1}));var Ef={};function Fn(n,e){let t=n+"_"+e;return Ef[t]||(Ef[t]=new ae({color:n,transparent:!0,opacity:e,side:yt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})),Ef[t]}var aa=new ae({color:16722764}),bf=new ae({color:2758726}),B0=new ae({color:16722748}),Ys=[];for(let n=0;n<64;n++)Ys.push(Wc(26+Math.random()*22,80+Math.random()*280));var nt=[];for(let n=0;n<16;n++)nt.push(Wc(30,90+Math.random()*260,void 0,3));var Bf=[];for(let n=0;n<12;n++)Bf.push(Wc(90,500+Math.random()*400,[1,0,4,15,28,19][n%6]));var Sf=new Ne,oc=new Ne;function v1(n,e,t){let s=n.index.array,r=n.attributes.position,o=n.attributes.uv,a=n.attributes.normal,l=new Float32Array(t*3),c=o?new Float32Array(t*2):null,u=a?new Float32Array(t*3):null;for(let f=0;f<t;f++){let d=s[e+f];l[f*3]=r.getX(d),l[f*3+1]=r.getY(d),l[f*3+2]=r.getZ(d),c&&(c[f*2]=o.getX(d),c[f*2+1]=o.getY(d)),u&&(u[f*3]=a.getX(d),u[f*3+1]=a.getY(d),u[f*3+2]=a.getZ(d))}let h=new dt;return h.setAttribute("position",new ht(l,3)),c&&h.setAttribute("uv",new ht(c,2)),u&&h.setAttribute("normal",new ht(u,3)),h}function wa(n){n.updateMatrixWorld(!0),Sf.copy(n.matrixWorld).invert();let e=new Map,t=new Map,s=new Map,r=[];n.traverse(l=>{if(l===n||!l.geometry||!l.geometry.isBufferGeometry)return;if(l.isMesh&&Array.isArray(l.material)){if(!l.geometry.index||!l.geometry.groups||!l.geometry.groups.length)return;oc.multiplyMatrices(Sf,l.matrixWorld);for(let h of l.geometry.groups){let f=l.material[h.materialIndex];if(!f)continue;let d=s.get(f);d||(d={geos:[],srcs:[]},s.set(f,d)),d.geos.push(v1(l.geometry,h.start,h.count).applyMatrix4(oc)),d.srcs.push(l)}r.push(l);return}let c=l.isMesh?e:l.isLineSegments?t:null;if(!c)return;let u=c.get(l.material);u||(u={geos:[],origs:[]},c.set(l.material,u)),oc.multiplyMatrices(Sf,l.matrixWorld),u.geos.push(l.geometry.clone().applyMatrix4(oc)),u.origs.push(l)});let o=(l,c)=>{for(let[u,h]of l){if(h.origs.length<2){h.geos.forEach(d=>d.dispose());continue}let f=bn(h.geos);if(!f){h.geos.forEach(d=>d.dispose());continue}for(let d of h.origs)d.parent&&d.parent.remove(d);h.geos.forEach(d=>d.dispose()),n.add(new c(f,u))}};o(e,j),o(t,Ft);let a=new Set;for(let[l,c]of s){let u=c.geos.length>1?bn(c.geos):c.geos[0];if(u)n.add(new j(u,l)),c.geos.length>1&&c.geos.forEach(h=>h.dispose());else{c.geos.forEach(h=>h.dispose());for(let h of c.srcs)a.add(h)}}for(let l of r)!a.has(l)&&l.parent&&l.parent.remove(l);return n.traverse(l=>{l!==n&&(l.matrixAutoUpdate=!1,l.updateMatrix())}),n}var po=ur(32,64,n=>{n.fillStyle="#160a2e",n.fillRect(0,0,32,64),n.fillStyle="rgba(255,255,255,0.04)";for(let e=0;e<120;e++)n.fillRect(Math.random()*32|0,Math.random()*64|0,1,1);n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,0,2,64),n.fillRect(30,0,2,64),n.fillStyle="rgba(122,63,242,0.25)",n.fillRect(4,0,1,64),n.fillRect(27,0,1,64)});po.repeat.set(1,60);var qc=new j(new Oe(74,9e3),new ae({map:po}));qc.rotation.x=-Math.PI/2;qc.position.set(0,-29.6,-1500);Ge.add(qc);function O0(n,e){let t=new j(new Ze(1.4,.2,9e3),new ae({color:e}));return t.position.set(n,-29,-1500),t}Ge.add(O0(-36,nn));Ge.add(O0(36,nn));function E1(){let n=document.createElement("canvas");n.width=16,n.height=256;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,256);return t.addColorStop(0,"rgba(255,170,70,0.38)"),t.addColorStop(.35,"rgba(255,110,120,0.2)"),t.addColorStop(.7,"rgba(255,70,150,0.07)"),t.addColorStop(1,"rgba(255,60,160,0)"),e.fillStyle=t,e.fillRect(0,0,16,256),new Wn(n)}var Ra=new j(new Oe(46,1500),new ae({map:E1(),transparent:!0,opacity:.6,blending:bt,depthWrite:!1}));Ra.rotation.x=-Math.PI/2;Ra.position.set(0,-29.2,-820);Ge.add(Ra);var ad=[];for(let n=0;n<70;n++){let e=new Ze(1.8,.2,16);e.translate(0,-29,-n*46),ad.push(e)}var Rc=new j(bn(ad),new ae({color:d1}));ad.forEach(n=>n.dispose());Ge.add(Rc);var mo=ur(128,128,n=>{n.fillStyle="#0c0618",n.fillRect(0,0,128,128),n.fillStyle="#140a24",n.fillRect(0,0,128,18),n.fillRect(0,0,18,128),n.fillStyle="#22123a",n.fillRect(0,18,128,2),n.fillRect(18,0,2,128),n.fillStyle="#1a0e2c";for(let e=0;e<7;e++){let t=24+Math.random()*90|0,s=24+Math.random()*90|0;n.fillRect(t,s,6+Math.random()*16|0,5+Math.random()*12|0)}n.fillStyle="#3a1f5e";for(let e=0;e<40;e++)n.fillRect(Math.random()*128|0,Math.random()*128|0,1,1);n.globalAlpha=.5,n.fillStyle="#ffd24a";for(let e=6;e<128;e+=14)n.fillRect(e,8,5,1),n.fillRect(8,e,1,5);n.globalAlpha=.25,n.fillStyle="#2af0ff",n.fillRect(0,17,128,1),n.fillRect(17,0,1,128),n.globalAlpha=1});mo.repeat.set(16,16);mo.minFilter=oi;mo.generateMipmaps=!0;mo.anisotropy=Ta;po.minFilter=oi;po.generateMipmaps=!0;po.anisotropy=Ta;var Yc=new j(new Oe(9e3,9e3),new ae({map:mo}));Yc.rotation.x=-Math.PI/2;Yc.position.set(0,-30.2,-1500);Ge.add(Yc);var b1=9e3/16,Cc=[],ld=[];for(let n=0;n<66;n++)for(let e of[-1,1]){let t=-n*90,s=e*40,r=new Ze(.8,14,.8);r.translate(s,-23,t),Cc.push(r);let o=new Ze(5,.7,.7);o.translate(s-e*2.5,-16,t),Cc.push(o);let a=new Ze(2.6,.5,1);a.translate(s-e*4,-30+13.6,t),ld.push(a)}var la=new j(bn(Cc),new ae({color:1313318}));Cc.forEach(n=>n.dispose());var cd=new j(bn(ld),new ae({color:16757866}));ld.forEach(n=>n.dispose());Ge.add(la);Ge.add(cd);var hd=[];for(let n=0;n<22;n++){let e=Math.random()<.5,t=new j(new Oe(1.6,10),new ae({color:e?16769184:16722764,transparent:!0,opacity:.7,blending:bt,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.set((Math.random()<.5?-1:1)*(120+Math.random()*160),-29.4,-Math.random()*5800),t.userData.rel=e?1.6+Math.random()*.8:.5+Math.random()*.35,Ge.add(t),hd.push(t)}var ud=[];for(let n=0;n<26;n++){let e=Math.random()<.5?1:-1,t=new j(new Oe(6,1.2),new ae({color:e>0?16769184:16730714,transparent:!0,opacity:.8,blending:bt,depthWrite:!1,side:yt}));t.position.set((Math.random()-.5)*2400,160+Math.random()*220,-900-Math.random()*2400),t.userData={vx:e*(1.2+Math.random()*1.4)},Ge.add(t),ud.push(t)}var fd=[];function S1(){let n=document.createElement("canvas");n.width=16,n.height=128;let e=n.getContext("2d"),t=e.createLinearGradient(0,128,0,0);return t.addColorStop(0,"rgba(200,230,255,0.55)"),t.addColorStop(1,"rgba(200,230,255,0)"),e.fillStyle=t,e.fillRect(0,0,16,128),new Wn(n)}for(let n=0;n<9;n++){let e=new j(new Oe(9,360).translate(0,180,0),new ae({map:S1(),transparent:!0,opacity:.5,blending:bt,depthWrite:!1,side:yt,fog:!1}));e.position.set((Math.random()<.5?-1:1)*(70+Math.random()*140),-30,-500-n*650-Math.random()*400),e.userData={ph:Math.random()*6.3,sp:.35+Math.random()*.3,z0:e.position.z},Ge.add(e),fd.push(e)}var Kc=[];{let n=["04_neon_corner_kiosk","13_subway_entrance_pair","14_subway_corner_entrance","15_bus_stop_shelter","16_vending_machine_cluster","17_street_furniture_strip","18_neon_food_cart","19_crosswalk_signal_island"],e=["01_pocket_park_plaza","02_sunset_fountain_plaza","03_arcade_market_stalls","05_service_pipe_cluster","06_utility_tank_stack","11_hovercar_parking_bay","12_glidebooster_landing_pad","20_loading_dock_crates"];setTimeout(()=>{pc(n.concat(e),"cityfillers/synthwave_city_fillers").then(t=>{let s=[nn,hn,16765514,8060826,16747098];for(let r=0;r<18;r++){let o=r%2===0,a=o?n:e,l=Math.random()*a.length|0,c=t[o?l:n.length+l];if(!c)continue;let u=Gc(c,s[Math.random()*s.length|0]);m1(u,o?6+Math.random()*7:9+Math.random()*12,-30);let h=Math.random()<.5?-1:1;u.position.x=h*(o?70+Math.random()*54:130+Math.random()*170),u.position.z=-r*(6e3/18)-80-Math.random()*100,u.rotation.y=Math.random()<.5?0:Math.PI,wa(u),Ge.add(u),Kc.push(u)}}).catch(t=>console.warn("[cityfillers]",t))},0)}var dd=!1,F0=[];for(let n=0;dd&&n<8;n++){let e=new ot,t=26+Math.random()*30,s=4+Math.random()*3,r=[];for(let o=0;o<=10;o++){let a=o/10;r.push(new I((a-.5)*110,t-Math.sin(Math.PI*a)*s,0))}e.add(new zi(new dt().setFromPoints(r),new Cn({color:2758726})));for(let o=1;o<10;o+=2){let a=r[o],l=new j(new Oe(1.6,2.2),new ae({color:[16734780,16765514,16722902][Math.random()*3|0],transparent:!0,opacity:.9,side:yt}));l.position.set(a.x,a.y-1.4,0),e.add(l)}e.position.z=-n*760-140,Ge.add(e),F0.push(e)}var pd=[];for(let n=0;dd&&n<2;n++){let e=[];for(let s=0;s<=24;s++){let r=s/24;e.push(new I((r-.5)*150,40+Math.sin(r*Math.PI*2.2)*12,Math.sin(r*9)*6))}let t=new j(new kl(new Fo(e),48,1.6,6,!1),new ae({color:12514559,transparent:!0,opacity:.5,blending:bt,depthWrite:!1}));t.position.z=-n*3100-900,Ge.add(t),pd.push(t)}var md=[];for(let n=0;dd&&n<4;n++){let e=new ot,t=30+Math.random()*34,s=new j(new Ze(150,5,10),Tn);s.position.y=t,e.add(s);let r=[nn,hn,16765514][Math.random()*3|0],o=new j(new Ze(150,.8,10.4),new ae({color:r,transparent:!0,opacity:.8}));o.position.y=t+2.9,e.add(o);for(let a of[-70,70]){let l=new j(new Ze(5,t+30,7),Tn);l.position.set(a,(t-30)/2,0),e.add(l)}e.position.z=-n*1500-700,Ge.add(e),md.push(e)}function T1(n,e){let t=45+Math.pow(Math.random(),1.7)*430,s=15+Math.random()*36,r=15+Math.random()*36,o=new ot,a=Ys[Math.random()*Ys.length|0];function l(d,p,g,y){let _=new j(new Ze(d,p,g),[a,a,Kt,Kt,a,a]);return _.position.y=y+p/2,o.add(_),_}function c(d,p,g,y,_,m,x){let M=new j(new En(d,p,g,_),[m,Kt,Kt]);return M.position.y=y+g/2,x&&(M.scale.z=x),o.add(M),M}function u(d,p,g){let y=Math.random(),_=[nn,hn,16751164,16765514][Math.random()*4|0];if(y<.15){let m=8+Math.random()*16,x=new j(new En(.6,Math.min(d,p)*.6,m,4),Tn);x.position.y=g+m/2,x.rotation.y=Math.PI/4,o.add(x)}else if(y<.3){let m=Math.min(d,p)*.42,x=new j(new xi(m,10,6,0,Math.PI*2,0,Math.PI/2),Tn);x.position.y=g,o.add(x)}else if(y<.44){let m=Math.min(d,p)*.5,x=new j(new En(m,m,Math.max(d,p)*.9,10,1,!1,0,Math.PI),Tn);x.rotation.z=Math.PI/2,p>d&&(x.rotation.y=Math.PI/2),x.position.y=g,o.add(x)}else if(y<.6){let m=g,x=d*.8,M=p*.8;for(let E=0;E<2+(Math.random()*2|0);E++){let L=4+Math.random()*5,w=new j(new Ze(x,L,M),Tn);w.position.y=m+L/2,o.add(w),m+=L,x*=.68,M*=.68}}else if(y<.72){let m=Math.min(d,p)*.4,x=new j(new En(m,m,1,12),Tn);x.position.y=g+.5,o.add(x);let M=new j(new us(m*.8,.35,6,16),Fn(16765514,.95));M.rotation.x=Math.PI/2,M.position.y=g+1.2,o.add(M)}if(Math.random()<.45){let m=new j(new Ze(d+.6,1.6,p+.6),Fn(_,.85));m.position.y=g-1.2,o.add(m)}}let h=Math.random();if(h<.025&&t>200){let d=Math.max(s,r)/2;c(d*.22,d*.5,t*.82,0,10,nt[Math.random()*nt.length|0]);let p=new j(new En(d*1.15,d*.75,t*.07,14),[nt[Math.random()*nt.length|0],Kt,Tn]);p.position.y=t*.86,o.add(p);let g=new j(new En(.5,.5,t*.12,6),bf);g.position.y=t*.96,o.add(g);let y=new j(new xi(1.2,6,6),aa);y.position.y=t*1.02,o.add(y)}else if(h<.055){let d=Math.max(s,r)/2,p=0,g=4+(Math.random()*3|0),y=t/g;for(let _=0;_<g;_++){let m=_%2===0;c(d*(m?1:.78),d*(m?1:.78),y,p,12,nt[Math.random()*nt.length|0]),p+=y}}else if(h<.085){let d=Math.max(s,r)/2;c(d*(.85+Math.random()*.15),d,t,0,14,nt[Math.random()*nt.length|0])}else if(h<.115){let d=Math.random()<.5?6:8,p=Math.max(s,r)/1.7;c(p*.94,p,t,0,d,nt[Math.random()*nt.length|0])}else if(h<.14){let d=Math.max(s,r)/1.8;c(d*.45,d,t,0,12,nt[Math.random()*nt.length|0])}else if(h<.165&&t>160){let d=Math.max(s,r)/1.5,p=0;for(let g=0;g<3;g++){let y=t*(.42-g*.07);c(d*(1-g*.27)*.96,d*(1-g*.27),y,p,10,nt[Math.random()*nt.length|0]),p+=y}}else if(h<.19){let d=Math.max(s,r)/1.6;c(d,d,t,0,16,nt[Math.random()*nt.length|0],.45+Math.random()*.2)}else if(h<.23&&t>180){let d=s*.42,p=Ys[Math.random()*Ys.length|0],g=Ys[Math.random()*Ys.length|0],y=new j(new Ze(d,t,r*.8),[p,p,Kt,Kt,p,p]);y.position.set(-s*.32,t/2,0),o.add(y);let _=new j(new Ze(d,t*.86,r*.8),[g,g,Kt,Kt,g,g]);_.position.set(s*.32,t*.43,0),o.add(_);let m=new j(new Ze(s*.66,4,r*.3),Tn);m.position.set(0,t*.62,0),o.add(m);let x=new j(new Oe(s*.6,1),Fn(2814207,.7));x.position.set(0,t*.62,r*.16),o.add(x)}else if(t/s>1.7&&t/s<5.4&&Math.random()<.6){if(Math.random()<.75){let d=new Ze(s,t,r);U0(d,Math.random()*id.length|0,Math.random()<.5);let p=new j(d,[bs,bs,Kt,Kt,bs,bs]);p.position.y=t/2,o.add(p),rd++}else{let d=If[Math.random()*If.length|0],p=new j(new Ze(s,t,r),[d,d,Kt,Kt,d,d]);p.position.y=t/2,o.add(p)}u(s,r,t)}else{let d=Math.random()*26|0,p=Math.max(s,r)/2;if(d===0&&t>120){let g=t*.55+Math.random()*t*.15;l(s,g,r,0),l(s*.68,t-g,r*.68,g),u(s*.68,r*.68,t)}else if(d===1&&t>140)l(s*1.3,t*.16,r*1.2,0),l(s*.72,t*.84,r*.72,t*.16),u(s*.72,r*.72,t);else if(d===2&&t>220){let g=t*.45,y=t*.3;l(s,g,r,0),l(s*.78,y,r*.78,g),l(s*.55,t-g-y,r*.55,g+y),u(s*.55,r*.55,t)}else if(d===3&&t>100){let g=t*(.55+Math.random()*.25),y=l(s*.62,t,r,0);y.position.x=-s*.19,l(s*.62,g,r*.62,0).position.set(s*.19,g/2,r*.19),u(s*.62,r,t)}else if(d===4&&t>140){let g=l(s*.38,t,r,0);g.position.x=-s*.26;let y=l(s*.38,t*.92,r,0);y.position.x=s*.26;let _=new j(new Oe(s*.1,t*.85),Fn([nn,hn,16765514][Math.random()*3|0],.5));_.position.set(0,t*.45,0),o.add(_),u(s*.38,r,t)}else if(d===6&&t>140){let g=l(s*.3,t*.75,r,0);g.position.x=-s*.35;let y=l(s*.3,t*.75,r,0);y.position.x=s*.35,l(s,t*.25,r,t*.75),u(s,r,t)}else if(d===7&&t>120){for(let g=0;g<4;g++){let y=t*(.4+.2*g),_=l(s*.3,y,r,0);_.position.x=-s*.45+g*s*.3}u(s*.3,r,t)}else if(d===8&&t>120)l(s*.4,t*.8,r*.55,0),l(s,t*.2,r,t*.8),u(s,r,t);else if(d===9&&t>150)c(p*.32,p*.38,t*.75,0,10,nt[Math.random()*nt.length|0]),c(p*1.05,p*1.05,t*.18,t*.75,12,nt[Math.random()*nt.length|0]);else if(d===10&&t>140){l(s*.5,t,r*.5,0);let g=new j(new Ze(s*1.9,2.5,3.5),Tn);g.position.set(s*.35,t-3,0),o.add(g);let y=new j(new Oe(1.6,5),Fn(16765514,.8));y.position.set(s*1.1,t-8,0),o.add(y),u(s*.5,r*.5,t)}else if(d===11&&t>150){l(s,t*.55,r,0);let g=l(s*.32,t*.45,r*.8,t*.55);g.position.x=-s*.3;let y=l(s*.32,t*.45,r*.8,t*.55);y.position.x=s*.3,u(s*.32,r*.8,t)}else if(d===12){l(s,t*.85,r,0);let g=new j(new Ze(s*1.12,3,r*1.05),Tn);g.position.y=t*.9,g.rotation.z=.3,o.add(g)}else if(d===13&&t>130){for(let g=0;g<4;g++){let y=t*(1-g*.2),_=l(s*.42,y,r,0);_.position.x=-n*(g-1.5)*s*.28}u(s*.42,r,t)}else if(d===14&&t>140){let g=l(s*.24,t,r,0);g.position.x=-s*.38;let y=l(s*.24,t,r,0);y.position.x=s*.38,l(s,t*.16,r,t*.84),u(s,r,t)}else if(d===15){l(s,Math.min(t,90),r,0);for(let g=0;g<6;g++){let y=15+Math.random()*40,_=new j(new En(.3,.3,y,4),bf);if(_.position.set((Math.random()-.5)*s*.7,Math.min(t,90)+y/2,(Math.random()-.5)*r*.7),o.add(_),Math.random()<.5){let m=new j(new xi(.7,5,5),aa);m.position.set(_.position.x,Math.min(t,90)+y+1,_.position.z),o.add(m)}}}else if(d===16&&t>120)c(p*.5,p*.5,t,0,10,nt[Math.random()*nt.length|0]).position.x=-p*.5,c(p*.45,p*.45,t*.85,0,10,nt[Math.random()*nt.length|0]).position.set(p*.5,t*.85/2,p*.2),c(p*.4,p*.4,t*.68,0,10,nt[Math.random()*nt.length|0]).position.set(0,t*.68/2,-p*.5);else if(d===17&&t>150){let g=c(1.2,p*1.3,t,0,4,nt[Math.random()*nt.length|0]);g.rotation.y=Math.PI/4}else if(d===18&&t>160){let g=c(p*.5,p*.9,t,0,4,nt[Math.random()*nt.length|0]);g.rotation.y=Math.PI/4;let y=new j(new zl(1.6,7,4),Fn(16765514,.9));y.position.y=t+3,o.add(y)}else if(d===19&&t>130){let g=l(s*.3,t,r,0);g.position.x=-s*.35;let y=l(s*.3,t,r,0);y.position.x=s*.35,l(s*.42,t*.5,r*.55,t*.25),u(s*.3,r,t)}else if(d===20&&t>140)c(p*1.05,p*1.05,t*.28,0,12,nt[Math.random()*nt.length|0]),l(s*.58,t*.72,r*.58,t*.28),u(s*.58,r*.58,t);else if(d===21&&t>150){l(s,t*.18,r,0);let g=l(s*.4,t*.82,r*.8,t*.18);g.position.x=-s*.27;let y=l(s*.4,t*.55,r*.8,t*.18);y.position.x=s*.27,u(s*.4,r*.8,t)}else if(d===22&&t>150){l(s*.55,t,r,0);let g=l(s*1.15,t*.14,r,t*.78);g.position.x=s*.28,u(s*.55,r,t)}else if(d===23&&t>140){for(let y=0;y<5;y++)c(p*.85,p*.85,t*.13,y*t*.2,12,nt[Math.random()*nt.length|0]);let g=new j(new En(p*.3,p*.3,t,8),Fn(2814207,.35));g.position.y=t/2,o.add(g)}else if(d===24&&t>120){let g=c(p*1.1,p*1.1,t,0,3,nt[Math.random()*nt.length|0]);g.rotation.y=Math.random()*6.3}else d===25?(l(s*.55,t,r*.7,0),l(s*.45,t*.7,r*.55,0).position.set(-s*.35,t*.35,r*.15),l(s*.4,t*.45,r*.5,0).position.set(s*.33,t*.225,-r*.15),u(s*.55,r*.7,t)):(l(s,t,r,0),u(s,r,t))}if(Math.random()<.25){let d=new j(new En(Math.min(3,s*.14),Math.min(3,s*.14),4,7),Tn);d.position.set((Math.random()-.5)*s*.3,t+2,(Math.random()-.5)*r*.3),o.add(d)}if(t>120&&Math.random()<.35){let d=[nn,hn,8077298,16765514][Math.random()*4|0],p=[];for(let y of[-s/2-.3,s/2+.3]){let _=new Oe(.9,t*.92);_.rotateY(Math.PI/2),_.translate(y,t*.46,r*.28*(Math.random()<.5?1:-1)),p.push(_)}let g=new j(bn(p),Fn(d,.75));p.forEach(y=>y.dispose()),o.add(g)}if(Math.random()<.4){let d=4+(Math.random()*5|0),p=6+Math.random()*10,g=[],y=n>0?-Math.PI/2:Math.PI/2,_=-n*(s/2+1.6);for(let m=0;m<d&&p<t-8;m++){let x=4+Math.random()*4,M=3+Math.random()*3,E=new Oe(x,M);E.rotateY(y),E.translate(_,p+M/2,r*.15),g.push(E),p+=M+1.2+Math.random()*2}if(g.length){let m=new j(bn(g),pa[Math.random()*pa.length|0]);g.forEach(x=>x.dispose()),o.add(m)}}if(Math.random()<.7){let d=new j(new Ze(Math.max(2,s*.25),3,Math.max(2,r*.25)),Tn);d.position.set((Math.random()-.5)*s*.4,t+1.5,(Math.random()-.5)*r*.4),o.add(d)}if(Math.random()<.45){let d=8+Math.random()*26,p=new j(new En(.35,.35,d,5),bf);p.position.y=t+d/2,o.add(p)}let f=new j(new xi(.9,6,6),aa);if(f.position.y=t+1,o.add(f),Math.random()<.6){let d=[nn,hn,16751164,8077298][Math.floor(Math.random()*4)],p=new Ft(new an(new Ze(s+.4,.4,r+.4)),ji(d));p.position.y=t-.2,o.add(p)}if(Math.random()<.7){let d=Math.min(s*.9,10+Math.random()*14),p=od(d,d*.5);p.position.set(-n*(s/2+.4),8+Math.random()*(t*.5),0),p.rotation.y=n>0?-Math.PI/2:Math.PI/2,o.add(p)}{let d=new j(new Oe(s*.96,2.2),Fn([16751164,16722902,2814207][Math.floor(Math.random()*3)],.55));d.position.set(-n*(s/2+.25),2.2,0),d.rotation.y=n>0?-Math.PI/2:Math.PI/2,o.add(d)}if(Math.random()<.55){let d=Math.min(t*.5,18+Math.random()*22),p=new j(new Oe(3.4,d),ma[Math.random()*ma.length|0]);p.position.set(-n*(s/2+2.2),6+Math.random()*(t*.4)+d/2,r*.2),o.add(p)}o.position.set(n*(68+s/2+Math.random()*126),-30,e),o.updateMatrixWorld(!0);{let d=new Tt().setFromObject(o);o.userData={hw:Math.max(4,d.max.x-o.position.x,o.position.x-d.min.x),hd:r/2,top:-30+t,done:!1}}return o}var A1=new I(0,0,1),dS=new I(0,1,0);function w1(n){n.updateMatrixWorld(!0);let e=new I,t=new I,s=new I,r=new I,o=new I,a=new I,l=[],c=0;if(n.traverse(y=>{if(!y.isMesh||!y.geometry||!y.geometry.attributes.position)return;let _=y.geometry.attributes.position,m=y.geometry.index,x=y.matrixWorld,M=m?m.count/3:_.count/3;for(let E=0;E<M;E++){let L=m?m.getX(E*3):E*3,w=m?m.getX(E*3+1):E*3+1,P=m?m.getX(E*3+2):E*3+2;e.fromBufferAttribute(_,L).applyMatrix4(x),t.fromBufferAttribute(_,w).applyMatrix4(x),s.fromBufferAttribute(_,P).applyMatrix4(x),r.subVectors(t,e),o.subVectors(s,e),a.crossVectors(r,o);let D=a.length()*.5;D<2||(a.normalize(),!(Math.abs(a.y)>.55)&&(l.push({ax:e.x,ay:e.y,az:e.z,bx:r.x,by:r.y,bz:r.z,cx:o.x,cy:o.y,cz:o.z,nx:a.x,ny:a.y,nz:a.z,area:D}),c+=D))}}),!l.length||c<=0)return null;let u=Math.max(6,Math.min(150,Math.round(c/220))),h=new Ne,f=new Nn,d=new I,p=[];for(let y=0;y<u;y++){let _=Math.random()*c,m=0;for(;m<l.length-1&&(_-=l[m].area)>0;)m++;let x=l[m],M=Math.random(),E=Math.random();M+E>1&&(M=1-M,E=1-E);let L=x.ax+x.bx*M+x.cx*E,w=x.ay+x.by*M+x.cy*E,P=x.az+x.bz*M+x.cz*E;d.set(x.nx,x.ny,x.nz),f.setFromUnitVectors(A1,d),h.makeRotationFromQuaternion(f);let D=Lf.clone();D.applyMatrix4(h),D.translate(L+x.nx*.4,w+x.ny*.4,P+x.nz*.4),p.push(D)}let g=bn(p);return p.forEach(y=>y.dispose()),new j(g,new ae({color:Vc,transparent:!0,opacity:.8,depthWrite:!1,side:yt}))}function R1(n,e){let t=new ot,s=Pc[Math.floor(Math.random()*Pc.length)],r=Gc(s,Math.random()<.5?nn:hn);r.updateMatrixWorld(!0);let o=new Tt().setFromObject(r),a=new I;o.getSize(a),r.scale.setScalar((65+Math.pow(Math.random(),1.6)*320)/Math.max(a.y,.001)),r.updateMatrixWorld(!0);let l=new Tt().setFromObject(r);r.position.y=-l.min.y,t.add(r),t.updateMatrixWorld(!0);let c=new Tt().setFromObject(t),u=w1(r);u&&t.add(u);let h=new j(new xi(.9,6,6),aa);h.position.set((c.min.x+c.max.x)/2,c.max.y+1,(c.min.z+c.max.z)/2),t.add(h);let f=n>0?-c.min.x:c.max.x;return t.position.set(n*(68+f+Math.random()*126),-30,e),t.userData={hw:Math.max(Math.abs(c.min.x),Math.abs(c.max.x)),hd:Math.max(Math.abs(c.min.z),Math.abs(c.max.z)),top:-30+(c.max.y-c.min.y),done:!1},wa(t),t}var H0=166,ga=H0*36,Pc=[],Of=[];for(let n=0;n<32;n++)Of.push(Wc(30,70,[2,8,3,10,17,18,24,27,21,0][n%10]));function d0(n,e,t){let s=16+Math.random()*46+(t?26+Math.random()*60:0),r=18+Math.random()*30,o=14+Math.random()*24,a=new ot,l=Of[Math.random()*Of.length|0],c=new j(new Ze(r,s,o),[l,l,Kt,Kt,l,l]);if(c.position.y=s/2,a.add(c),Math.random()<.7){let u=Math.min(r*1.1,12+Math.random()*10),h=od(u,u*.45);h.position.set(0,s+u*.28,0),h.rotation.y=n>0?-Math.PI/2:Math.PI/2,h.rotation.x=-.12,a.add(h);let f=new j(new Ze(.5,u*.3,.5),Tn);f.position.set(-u*.3,s+u*.12,0),a.add(f);let d=new j(new Ze(.5,u*.3,.5),Tn);d.position.set(u*.3,s+u*.12,0),a.add(d)}if(Math.random()<.5){let u=10+Math.random()*10,h=new j(new Oe(3.4,u),ma[Math.random()*ma.length|0]);h.position.set(-n*(r/2+2),s*.4+u/2,o*.2),a.add(h)}if(Math.random()<.6){let u=3+(Math.random()*4|0),h=[16734780,16765514,16747052][Math.random()*3|0],f=n>0?-Math.PI/2:Math.PI/2,d=[];for(let g=0;g<u;g++){let y=new Oe(1.3,1.8);y.rotateY(f),y.translate(-n*(r/2+.6),s-1.5,-o/2+(g+.5)*(o/u)),d.push(y)}let p=new j(bn(d),Fn(h,.95));d.forEach(g=>g.dispose()),a.add(p)}return a.position.set(n*((t?300+Math.random()*380:68+Math.random()*256)+r/2),-30,e),a.userData={hw:r/2,hd:o/2,top:-30+s,done:!1},a}var Ff=[];function C1(){return ur(32,44,n=>{n.clearRect(0,0,32,44);let e=["#7adcff","#ff7ad0","#b0ff7a","#ffd24a"][Math.random()*4|0];n.strokeStyle=e,n.fillStyle=e,n.globalAlpha=.9,n.lineWidth=1;let t=Math.random()*3|0;if(t===0)n.beginPath(),n.moveTo(16,4),n.lineTo(27,22),n.lineTo(16,40),n.lineTo(5,22),n.closePath(),n.stroke(),n.globalAlpha=.3,n.fill(),n.globalAlpha=.9;else if(t===1)n.beginPath(),n.arc(16,22,11,0,7),n.stroke(),n.fillRect(13,19,6,6);else for(let s=4;s<40;s+=6)Math.random()<.85&&n.fillRect(10,s,12,3);for(let s=0;s<44;s+=3)n.clearRect(0,s,32,1)})}var hr=6,P1=ga/hr,Zn=[],gd=[],Hf=[],Ca=[],Tf=new Array(hr),Af=new Array(hr);function L1(){for(let t=0;t<hr;t++){let s=new ot;s.userData.minZ=0,Zn.push(s),Hf.push([])}let n=t=>{let s=t.position.z,r=Math.min(hr-1,Math.floor((-s-.001)/P1));Zn[r].add(t),s<Zn[r].userData.minZ&&(Zn[r].userData.minZ=s);let o={x:t.position.x,hw:t.userData.hw,top:t.userData.top,z0:s,k:r,done:!1};return gd.push(o),Hf[r].push(o),o},e=[];for(let t=0;t<H0;t++){let s=Math.random()<.5?1:-1,r=-t*36-70-Math.random()*30;if(Pc.length&&Math.random()<.1){let o=R1(s,r);o.userData.z0=o.position.z,Ge.add(o),Ca.push(o)}else{let o=n(T1(s,r));o.top+30>120&&e.push(o)}}for(let t=0;t<80;t++){let s=Math.random()<.5?1:-1;n(d0(s,-t*(ga/80)-60-Math.random()*45,!1))}for(let t=0;t<60;t++){let s=Math.random()<.5?1:-1;n(d0(s,-t*(ga/60)-80-Math.random()*60,!0))}for(let t of Zn)wa(t),Ge.add(t);for(let t=0;t<36&&Ff.length<14&&e.length;t++){let s=e[Math.random()*e.length|0];if(s.holo)continue;s.holo=!0;let r=new ae({map:C1(),transparent:!0,opacity:.55,blending:bt,depthWrite:!1,side:yt}),o=new ot,a=new j(new Oe(16,22),r);o.add(a);let l=new j(new Oe(16,22),r);l.rotation.y=Math.PI/2,o.add(l),o.position.set(s.x,s.top+16+Math.random()*14,s.z0),Zn[s.k].add(o),Ff.push(o)}}var fc=[],z0=[],k0=2e4;(function(){for(let n=0;n<26;n++){let e=420+Math.random()*680,t=60+Math.random()*90,s=60+Math.random()*90,r;if(n%5<2){let c=new Ze(t,e,s);U0(c,Math.random()*id.length|0,Math.random()<.5),r=new j(c,[bs,bs,Kt,Kt,bs,bs]),rd++}else{let c=Bf[n%Bf.length];r=new j(new Ze(t,e,s),[c,c,Kt,Kt,c,c])}let o=new ot;r.position.y=e/2,o.add(r);let a=[nn,hn,16751164][n%3];for(let c of[-t/2-.3,t/2+.3]){let u=new j(new Oe(1.6,e*.85),Fn(a,.8));u.position.set(c,e*.45,0),u.rotation.y=Math.PI/2,o.add(u)}if(Math.random()<.8){let c=od(t*.85,t*.45);c.position.set(0,e*.55+Math.random()*e*.25,s/2+.6),o.add(c)}let l=new j(new xi(2.2,6,6),aa);l.position.y=e+3,o.add(l),o.userData.h=e,o.position.set((n%2?1:-1)*(320+Math.random()*620),-30,-(n/26)*k0-Math.random()*600),wa(o),Ge.add(o),fc.push(o)}for(let n=0;n<5;n++){let e=fc[Math.floor(Math.random()*fc.length)],t=new j(new Oe(26,420).translate(0,210,0),new ae({color:[10146047,16743120,16765562,8060826,12622591][n%5],transparent:!0,opacity:.1,blending:bt,depthWrite:!1,side:yt}));t.position.y=e.userData.h,t.rotation.z=.5+Math.random(),t.userData.spin=(Math.random()<.5?-1:1)*(.1+Math.random()*.15),e.add(t),z0.push(t)}})();var _d=-16e3,kt=new ot,Lc=[],Ic=[],yd=[],Md=[],xd=[];function Pa(n,e,t,s,r){let o=new Ze(s,t,24);o.translate(n,-30+t/2,e),yd.push(o);let a=new an(new Ze(s,t,24));if(a.scale(1.004,1.004,1.004),a.translate(n,-30+t/2,e),Md.push(a),r){let l=g1(n-s/2,-30,e-12,n+s/2,-30+t,e+12,Vc,.35,!0,34,16);xd.push(l.geometry)}}var I1=[[220,228,0,560,1e3,56,150,!0],[160,314,-260,700,1080,74,180,!1],[120,420,-560,880,1180,96,210,!1],[85,595,-900,1060,1300,120,240,!1],[55,920,-1300,1280,1450,150,300,!1]],La=250;function Zc(n,e){let t=Math.min(1,Math.max(0,(Math.abs(n)-La)/1300));return e*(.42+.58*t)}for(let n of I1){let e=n[0],t=n[1],s=n[2];for(let r=0;r<e;r++){let o=(r-(e-1)/2)*t+(Math.random()-.5)*t*.55;if(Math.abs(o)<La)continue;let a=n[3]+Math.random()*n[4];Math.random()<.07&&(a*=1.3+Math.random()*.5),Pa(o,s-Math.random()*16,Zc(o,a),n[5]+Math.random()*n[6],n[7])}}for(let n=0;n<16;n++){let e=-1600-n*420,t=54-(n*2.5|0),s=52e3/(t-1),r=1250+n*95,o=150+n*22;for(let a=0;a<t;a++){let l=(a-(t-1)/2)*s+(Math.random()-.5)*s*.5;Math.abs(l)<La||Pa(l,e-Math.random()*20,Zc(l,r+Math.random()*850),o+Math.random()*320,!1)}}for(let n=0;n<26;n++){let e=(n-12.5)*2100+(Math.random()-.5)*900;Math.abs(e)<La*1.2||Pa(e,-8800-Math.random()*1200,Zc(e,2e3+Math.random()*1800),420+Math.random()*520,!1)}for(let n=0;n<14;n++){let e=(Math.random()<.5?-1:1)*(La*1.4+Math.random()*2e4);Pa(e,-3e3-Math.random()*5e3,Zc(e,1600+Math.random()*1600),60+Math.random()*80,!1)}function G0(n,e){Pa(n,0,4800,148,!0);let t=new j(new Ze(176,42,84),new ae({color:e,fog:!1}));t.position.set(n,4770,0),kt.add(t);let s=new j(new En(5.2,5.2,760,8),new ae({color:e,fog:!1,transparent:!0,opacity:.42}));s.position.set(n,5150,0),kt.add(s)}G0(-95,nn);G0(95,hn);kt.add(new j(bn(yd),new ae({color:1312294,fog:!1})));yd.forEach(n=>n.dispose());var V0=new Cn({color:6956200,fog:!1,transparent:!0,opacity:.2});Ic.push(V0);kt.add(new Ft(bn(Md),V0));Md.forEach(n=>n.dispose());var W0=new ae({color:Vc,transparent:!0,opacity:.02,depthWrite:!1,side:yt,fog:!1});Lc.push(W0);kt.add(new j(bn(xd),W0));xd.forEach(n=>n.dispose());function X0(n){let{r:e,g:t,b:s}=L0(n),r=document.createElement("canvas");r.width=4,r.height=128;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,0,128);return a.addColorStop(0,`rgba(${e},${t},${s},0)`),a.addColorStop(.5,`rgba(${e},${t},${s},1)`),a.addColorStop(1,`rgba(${e},${t},${s},0)`),o.fillStyle=a,o.fillRect(0,0,4,128),new Wn(r)}var $i=new j(new Oe(6e4,5200),new ae({map:X0(pi[0].glow),transparent:!0,opacity:.1,blending:bt,depthWrite:!1,fog:!1}));$i.position.set(0,560,-360);kt.add($i);kt.position.z=_d;Ri.add(kt);var $c=[],vd=[-26,-9,9,26],_a=[];for(let n=0;n<6;n++)_a.push(new ae({map:ur(64,32,e=>{e.fillStyle=["#0a1626","#140a26","#260a18","#0a2020","#1a1a10","#101226"][n],e.fillRect(0,0,64,32),e.fillStyle="rgba(255,255,255,0.08)";for(let t=4;t<32;t+=7)e.fillRect(0,t,64,1);e.fillStyle=["#ff2b5c","#2af0ff","#ffe08a","#ff2bd6","#7aff9a","#c09aff"][n],e.fillRect(0,14,64,2),e.globalAlpha=.85,e.fillStyle="#9ad0ff";for(let t=6;t<58;t+=9)e.fillRect(t,6,5,4);e.globalAlpha=1})}));function D1(n){let e=new ot,t=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];e.add(new j(new Ze(4.4,2,8),_a[Math.random()*_a.length|0])),e.add(new Ft(new an(new Ze(4.4,2,8)),ji(t)));let s=new j(new Oe(3.6,.7),B0);return s.position.set(0,.2,4.1),e.add(s),e.position.set(vd[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,-28,n),e.userData.v=.4+Math.random()*.3,e}function N1(n){let e=new ot,t=lr[Math.floor(Math.random()*lr.length)],s=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];{let u=t.clone(!0),h=_a[Math.random()*_a.length|0];u.traverse(f=>{f.isMesh&&(f.material=h,f.add(new Ft(new an(f.geometry,25),ji(s))))}),e.add(u)}e.updateMatrixWorld(!0);let r=new Tt().setFromObject(e),o=new I;r.getSize(o);let a=Math.max(o.z,.001);e.scale.setScalar(6.5/a),e.updateMatrixWorld(!0);let l=new Tt().setFromObject(e);e.position.y=-28-l.min.y;let c=new j(new Oe(2.6,.6),B0);return c.position.set(0,.6,l.max.z||3),e.add(c),e.position.x=vd[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,e.position.z=n,e.userData.v=.4+Math.random()*.3,e}var U1=2856,lr=[];function B1(){for(let n=0;n<42;n++){let e=lr.length?N1(-n*68-40):D1(-n*68-40);wa(e),e.userData.z0=e.position.z,e.userData.x0=e.position.x,Ge.add(e),$c.push(e)}}var q0=[],wf=4200,dc=[];function O1(n){let e=new ot,t=n?16734815:[2814207,16769162,16722902][Math.floor(Math.random()*3)],s;if(dc.length)s=dc[Math.random()*dc.length|0].clone(!0),s.traverse(a=>{if(a.isMesh){let l=a.material&&a.material.color?a.material.color.clone():new xe(1709104);a.material=new ae({color:l.multiplyScalar(.55)}),a.add(new Ft(new an(a.geometry,30),ji(t)))}}),s.scale.setScalar(.9+Math.random()*.4);else if(lr.length){s=Gc(lr[Math.floor(Math.random()*lr.length)],t),s.updateMatrixWorld(!0);let a=new Tt().setFromObject(s),l=new I;a.getSize(l),s.scale.setScalar(8.5/Math.max(l.z,.001))}else{s=new ot;let a=new Ze(4.5,1.4,8);s.add(new j(a,I0())),s.add(new Ft(new an(a),ji(t)))}e.add(s),e.updateMatrixWorld(!0);let r=new Tt().setFromObject(e),o=new I;if(r.getSize(o),o.x>30&&(s.scale.multiplyScalar(30/o.x),e.updateMatrixWorld(!0),r.setFromObject(e),r.getSize(o)),e.userData.rx=Math.min(16,Math.max(2.5,o.x/2)),e.userData.ry=Math.max(2,o.y/2),e.userData.cy=o.y/2,n){e.rotation.y=Math.PI;let a=new j(new Oe(Math.max(3.2,o.x*.4),1.1),new ae({color:14676735,transparent:!0,opacity:.9,blending:bt,depthWrite:!1,side:yt}));a.position.set(0,o.y*.4,r.min.z-.4),e.add(a)}else{let a=new j(new Oe(Math.max(2.4,o.x*.35),.9),new ae({color:16751164,transparent:!0,opacity:.85,blending:bt,depthWrite:!1,side:yt}));a.position.set(0,o.y*.4,r.max.z+.4),e.add(a)}return e}var Y0=new sc,F1=["01_pulse_block_44m","02_vector_tower_88m","03_slash_roof_62m","04_night_monolith_118m","05_setback_hotel_72m","06_skyline_spire_102m"],H1=["01_midnight_wedge","02_pulse_sedan","03_vector_van","04_afterburner_supercar","05_night_interceptor"];function pc(n,e){return Promise.all(n.map(t=>new Promise(s=>{Y0.load("models/"+e+"/"+t+".glb",r=>s(r.scene),void 0,()=>s(null))}))).then(t=>t.filter(Boolean))}var zf=!1;function K0(n){lt=O1(!1),lt.traverse(s=>{s.isLineSegments&&(s.material=ji(16722902))});let e=new j(new Oe(3.4,1.4),Fn(16738860,.9));e.position.set(0,.6,5.6),lt.add(e);let t=new j(new Oe(2.2,.9),Fn(16765514,.9));t.position.set(0,.6,7.4),lt.add(t),lt.position.set(0,14,n),Ge.add(lt)}var kf=[],z1=15e3,ln=[-52,0,52],tn=[-6,28,62],Rf=1.15,Jc=3e3,Ks={1:65,2:80.75,3:65},Zs={1:16.78,2:.38,3:1.18},Gf=null,Ki=null,Yt=null;fetch("beatmaps.json",{cache:"no-store"}).then(n=>n.json()).then(n=>{Gf=n}).catch(n=>console.warn("[beatmaps]",n));var lo=[{name:"EASY",tol:1.35,den:2,punk:-4},{name:"NORMAL",tol:1,den:1,punk:0},{name:"HARD",tol:.8,den:1,punk:4}],di=1,k1=parseInt(localStorage.getItem("pb_cal")||"0",10)||0,Jr=localStorage.getItem("pb_crt")!=="0",ar=localStorage.getItem("pb_flash")!=="0"?1:.35,Zo=localStorage.getItem("pb_shake")!=="0"?1:.35,vs=parseFloat(localStorage.getItem("pb_vol")||"1")||1,nr=localStorage.getItem("pb_recep")==="1",Dc=!1,fi=location.hash.includes("sim"),Ia=location.hash.includes("bot"),Cf=fi?Math.max(1,parseFloat((location.hash.match(/sim(\d+(?:\.\d+)?)/)||[])[1]||1)):1,G1=location.hash.includes("test"),Vf=parseFloat((location.hash.match(/at(\d+(?:\.\d+)?)/)||[])[1]||0),$o=!1,Z0=!1,mc=0;function V1(){if(!Ki)return-1;let n=Ki.find(e=>e.tower);return Math.max(0,n?n.t0-10:(As||30)-30)}var Jo=Vf*1e3,W1={1:134.08,2:188,3:123.92},ca=0,Ed=!1,ac="",gc=0;fi&&Ia&&(addEventListener("error",n=>{ca++,ac=String(n.message||n.error||"?").slice(0,60)}),addEventListener("unhandledrejection",n=>{ca++,ac=("REJ "+String(n.reason)).slice(0,60)}),setInterval(()=>{if(!Ed)try{document.title="E2E L"+et+" t="+Math.round(ct.time())+" f="+gc+" sc="+Math.round(Ae)+" h="+Ji+"/"+jn+" live="+$n.length+" vis="+Zn.reduce((n,e)=>n+(e.visible?1:0),0)+"/"+Ca.reduce((n,e)=>n+(e.visible?1:0),0)+"/"+(kt.visible?1:0)+"/"+Kc.reduce((n,e)=>n+(e.visible?1:0),0)+" ph="+An+" err="+ca+(ac?" ["+ac+"]":"")}catch{}},1e3));addEventListener("keydown",n=>{n.code==="F9"&&(n.preventDefault(),n.stopImmediatePropagation(),Dc=!Dc)});var Zt=[],ir=0,Es=0,$n=[],ze=0,pn=0,Ji=0,jn=0,sr=null,$0=8,Si=[],jo=0,$s=0;function X1(n){if(!sr)return .5;let e=n*$0,t=Math.max(0,Math.min(sr.length-1,Math.floor(e))),s=Math.min(sr.length-1,t+1),r=e-t;return sr[t]*(1-r)+sr[s]*r}var st=0,Ht=0,qi=!1,As=0,so=0,Nc=0,Uc=0,p0=0,Wf=0,_c=0,Ms=0,Wi=0,Qr=0,ui=0,Xf=1,yc=0,Mc=0;document.addEventListener("visibilitychange",()=>{document.hidden&&cn&&!Qn&&!Bt&&Rs()});var q1=new us(15,2.4,6,24),Y1=new us(15,5.5,6,24),K1=new Oe(5.5,1.6),J0=new ae({color:nn,fog:!1}),Z1=new ae({color:hn,fog:!1}),j0=new ae({color:nn,transparent:!0,opacity:.32,blending:bt,depthWrite:!1,fog:!1}),$1=new ae({color:hn,transparent:!0,opacity:.32,blending:bt,depthWrite:!1,fog:!1}),J1=new ae({color:16777215,transparent:!0,opacity:.85,fog:!1,depthWrite:!1});function j1(n){let e=new ot;e.add(new j(q1,J0)),e.add(new j(Y1,j0));for(let t=0;t<4;t++){let s=new j(K1,J1);s.position.set(Math.cos(t*Math.PI/2)*10.5,Math.sin(t*Math.PI/2)*10.5,0),s.rotation.z=t*Math.PI/2,e.add(s)}return e.position.set(ln[n[0]],tn[n[1]],-Jc),Ge.add(e),e}var Q1=new us(15,3.2,6,24),Bc=[];for(let n=0;n<6;n++){let e=new j(Q1,new ae({color:nn,transparent:!0,opacity:0,blending:bt,depthWrite:!1,fog:!1}));e.visible=!1,Ge.add(e),Bc.push({m:e,t:0})}function xc(n,e,t,s){let r=Bc.find(o=>o.t<=0)||Bc[0];r.t=1,r.mag=s||1,r.m.visible=!0,r.m.material.color.setHex(t),r.m.position.set(n,e,0),r.m.scale.set(1,1,1)}var ya=[];{let n=new us(16,1,6,24);for(let e=0;e<3;e++)for(let t=0;t<3;t++){let s=new j(n,new ae({color:2814207,transparent:!0,opacity:.08,fog:!1,depthWrite:!1}));s.visible=nr,s.position.set(ln[t],tn[e],0),Ge.add(s),ya.push({cx:t,cy:e,m:s})}}var eb=new ae({color:659752,transparent:!0,opacity:.88,fog:!1}),Q0=new Cn({color:16722748,transparent:!0,opacity:.9,fog:!1}),tb=new ae({color:8060826,transparent:!0,opacity:.9,fog:!1,depthWrite:!1}),eg=new Oe(46,30),nb=new an(eg),ib=(()=>{let n=new Oe(50,2.4),e=new Oe(2.4,34),t=[n.clone().translate(0,17,0),n.clone().translate(0,-17,0),e.clone().translate(25,0,0),e.clone().translate(-25,0,0)],s=bn(t);return t.forEach(r=>r.dispose()),n.dispose(),e.dispose(),s})();function sb(n){let e=new ot;for(let t=0;t<3;t++)for(let s=0;s<3;s++)if(s===n[0]&&t===n[1]){let r=new j(ib,tb);r.position.set(ln[s],tn[t],0);let o=lo[di].tol;r.scale.set(26*o/25,18*o/17,1),e.add(r)}else{let r=new j(eg,eb);r.position.set(ln[s],tn[t],0),e.add(r);let o=new Ft(nb,Q0);o.position.copy(r.position),e.add(o)}return e.position.z=-Jc,Ge.add(e),e}var qf=!1,rb=12,ha=[],ob=new Ze(.9,.9,14),ab=new ae({color:10485736,transparent:!0,opacity:.95,blending:bt,depthWrite:!1,fog:!1});for(let n=0;n<rb;n++){let e=new j(ob,ab);e.visible=!1,Ge.add(e),ha.push({m:e,on:!1,onBeat:!1})}var lb=8,ro=[],tg=new Xs(7),cb=new an(tg),Yf={d:new ae({color:1706534,fog:!1}),h:new ae({color:2759174,fog:!1})};for(let n=0;n<lb;n++){let e=new ot,t=new j(tg,Yf.d);e.add(t),e.add(new Ft(cb,ji(hn))),e.visible=!1,Ge.add(e),ro.push({g:e,body:t,on:!1,hp:1,type:"drone",cx:1,cy:1,ph:Math.random()*6})}var Qo=0,jc=!1,Kf=-1;addEventListener("pointerdown",()=>{jc=!0});addEventListener("pointerup",()=>{jc=!1});addEventListener("blur",()=>{jc=!1;for(let n in mn)mn[n]=!1});var ng=new ae({color:16722780,transparent:!0,opacity:.55,blending:bt,depthWrite:!1,fog:!1}),ig=new Oe(320,26),sg=new Oe(40,150),hb=new an(ig),ub=new an(sg);function fb(n,e){let t=new ot,s=new j(n==="row"?ig:sg,ng),r=lo[di].tol;n==="row"?(s.position.set(0,tn[e],0),s.scale.y=17/r/13):(s.position.set(ln[e],(tn[0]+tn[2])/2,0),s.scale.x=24/r/20),t.add(s);let o=new Ft(n==="row"?hb:ub,Q0);return o.position.copy(s.position),t.add(o),t.position.z=-Jc,Ge.add(t),t}function db(){$o=!1,mc=0,Hc=[],Tc=0,Eb();for(let u of $n)Ge.remove(u.g);Zt=[],$n=[],ir=0,Es=0,ze=0,pn=0,Ji=0,st=0,Ht=0;let n=Ks[et]||120,e=60/n,t=Zs[et]||.5;As=ct.duration(),jn=0,Yt=null;let s=Gf&&Gf[String(et)];if(sr=s&&s.flow||null,$0=s&&s.flowHz||8,$s=0,s){Ki=s.sections,pb(s),qi=!0,m0(),wn.visible=va&&!!Ki.find(u=>u.tower),wn.rotation.x=0,wn.position.set(0,-30,-16e3);return}Ki=null;let r=t;for(;r-e*4>4;)r-=e*4;for(;r<3;)r+=e*4;let o=1,a=1,l=0,c=0;for(;r<As-4;){let u=l%6,h=et>=3&&u>=4;for(let f=0;f<8&&r<As-4;f++){if(et>=2&&u%2===1&&f===0){Zt.push({t:r,cell:[o,a],kind:"gate"}),jn++,r+=e;continue}if(h){if(f%2===0){let p=c%2===0?"row":"col",g=(c*2+1)%3;Zt.push({t:r,cell:[g,g],kind:"bar",axis:p,idx:g}),jn++,c++}r+=e;continue}let d=u===5?4:u>=3?1:2;f%d===0&&(u===0?o=(o+1)%3:u===1?a=(a+1)%3:u===2?(o=(o+2)%3,f%4===0&&(a=(a+1)%3)):u===3?o=[0,2,1,0,2,1,0,2][f]:u===4?(o=f%3,a=f%3):(o=1,a=1),Zt.push({t:r,cell:[o,a],kind:"ring"}),jn++),r+=e}l++}qi=!0,m0()}function pb(n){let e=60/n.bpm,t=n.offset,s=1,r=1,o=0,a=null,l=1,c=1,u=n.flow||null,h=n.flowHz||8,f=d=>{if(!u)return null;let p=Math.max(0,Math.min(u.length-1,Math.round(d*h))),g=u[p];return g<.34?0:g<.67?1:2};for(let d of n.sections){let p=t+Math.ceil((d.t0-t)/e-1e-6)*e,g=0;for(;p<d.t1&&p<As-2;p+=e,g++){if(d.mode==="combat"&&qf){if(g%(d.density||2)===0){let L=o%2===0?"row":"col",w=(o*2+1)%3;Zt.push({t:p,cell:[w,w],kind:"bar",axis:L,idx:w}),jn++,o++}continue}let y=d.gateEvery?di===2?Math.max(4,d.gateEvery/2|0):d.gateEvery:0,_=y&&g>0&&g%y===0,m=(d.density||1)*lo[di].den;if(!_&&g%m!==0)continue;let x=d.patterns&&d.patterns.length?d.patterns:["h"],M=x[(g/8|0)%x.length];if(M==="h")s=(s+1)%3;else if(M==="vert")r=(r+1)%3;else if(M==="zig")s=(s+2)%3,g%4===0&&(r=(r+1)%3);else if(M==="diag")s=g%3,r=g%3;else if(M==="stair")s=(g>>1)%3,r=((g>>1)/3|0)%3;else if(M==="orbit"){let L=[[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1]],w=L[g%8];s=w[0],r=w[1]}else s=1,r=1;let E=f(p);if(E!==null&&(r=E),va&&d.tower&&(r=0),a!==null){let L=p-a;L>0&&Math.max(Math.abs(s-l),Math.abs(r-c))/L>2.4&&(s=l+Math.sign(s-l),r=c+Math.sign(r-c))}Zt.push({t:p,cell:[s,r],kind:_?"gate":"ring"}),jn++,a=p,l=s,c=r}}Zt.sort((d,p)=>d.t-p.t)}function m0(){Si=Zt.filter(n=>n.kind!=="bar").map(n=>({t:n.t,x:ln[n.cell[0]],y:tn[n.cell[1]]})),jo=0}var ws=56,g0=2.4,Da=new dt;Da.setAttribute("position",new ht(new Float32Array(ws*2*3),3));{let n=[];for(let e=0;e<ws-1;e++){let t=e*2;n.push(t,t+1,t+2,t+1,t+3,t+2)}Da.setIndex(n)}function rg(n){let e=8-n*44;return Math.max(0,Math.min(1,(-e-160)/400))}{let n=new Float32Array(ws*2*3);for(let e=0;e<ws;e++){let t=rg(e);n[e*6]=n[e*6+1]=n[e*6+2]=t,n[e*6+3]=n[e*6+4]=n[e*6+5]=t}Da.setAttribute("color",new ht(n,3))}var Zf=new ae({color:2814207,transparent:!0,opacity:.4,blending:bt,depthWrite:!1,fog:!1,side:yt,vertexColors:!0}),Ma=new j(Da,Zf);Ma.visible=!1;Ma.frustumCulled=!1;Ge.add(Ma);var Qc=new dt;Qc.setAttribute("position",new ht(new Float32Array(ws*3),3));{let n=new Float32Array(ws*3);for(let e=0;e<ws;e++){let t=rg(e);n[e*3]=n[e*3+1]=n[e*3+2]=t}Qc.setAttribute("color",new ht(n,3))}var og=new Cn({color:12450559,transparent:!0,opacity:.7,blending:bt,depthWrite:!1,fog:!1,vertexColors:!0}),xa=new zi(Qc,og);xa.visible=!1;xa.frustumCulled=!1;Ge.add(xa);var va=!1,An=0,oo=0,vc=0,Ec=0,ea=-1,bc=0,qo=0,Sc=0,ag=9e3,mb=1600,lg=1600,_0=new ae({color:1706544}),y0=new ae({color:1707056}),M0=new ae({color:1378856}),wn=new ot;wn.visible=!1;Ri.add(wn);var Oc=new j(new Ze(mb,ag,lg),[M0,M0,_0,_0,y0,y0]);Oc.position.set(0,ag/2,-lg/2);Oc.add(new Ft(new an(Oc.geometry),new Cn({color:2814207,transparent:!0,opacity:.8,fog:!1})));wn.add(Oc);function $f(n){qc.visible=n,Ra.visible=n,Yc.visible=n,Hn.visible=n,$i.visible=n;for(let e of Zn)e.visible=n;for(let e of Ca)e.visible=n;for(let e of $c)e.visible=n;for(let e of Kc)e.visible=n;for(let e of pd)e.visible=n;for(let e of md)e.visible=n;for(let e of fd)e.visible=n;la.visible=n,cd.visible=n;for(let e of hd)(e.m||e).visible=n;for(let e of ud)(e.m||e).visible=n}function gb(){An>0||(An=1,oo=0,Ec=0,ea=-1,wn.visible=!0,wn.rotation.x=0,Ie("TOWER AHEAD!","#ffd24a"),Kn(.4,.4,220))}function _b(){if(An!==0){An=0,oo=0,bc=0,Sc=0,wn.visible=!1,$f(!0),kt.visible=!0,Ai.visible=!0;for(let n of ya)n.m.visible=!0}}function eh(n){for(let e of["grid9","speedbar","sblabel"]){let t=document.getElementById(e);t&&(t.style.display=n?"":"none")}}eh(!1);var bd=[];{let n=document.getElementById("grid9");if(n)for(let e=2;e>=0;e--)for(let t=0;t<3;t++){let s=document.createElement("div");n.appendChild(s),bd.push({c:t,r:e,el:s})}}function Jf(){zf||(zf=!0,L1(),B1(),K0(Ts?-700:-900),console.log("AF2-Fassaden im Einsatz:",rd))}var yb=["01_sky_dart_interceptor","02_afterburner_jet","03_pulse_commuter","04_vector_cargo_lifter","05_neon_bomber","06_skyline_heavy_transport"];Promise.all([pc(F1,"buildings"),pc(H1,"vehicles"),pc(yb,"aircraft/synthwave_aircraft")]).then(n=>{Pc=n[0],lr=n[1],dc=n[2],Jf()}).catch(()=>Jf());setTimeout(Jf,5e3);var cg=new dt,jf=[],x0=0,v0=44,E0=560,b0=0;for(;jf.length<450&&b0<6e3;){b0++;let n=(Math.random()-.5)*4200,e=380+Math.random()*640,t=-2600-Math.random()*2600;(n-x0)*(n-x0)+(e-v0)*(e-v0)<E0*E0||jf.push(n,e,t)}cg.setAttribute("position",new rt(jf,3));var Sd=new Ws({color:12374271,size:1.5,transparent:!0,opacity:.5,fog:!1});Ri.add(new Gr(cg,Sd));var Jn=new ot;(function(){let n=new dt;n.setAttribute("position",new ht(new Float32Array([0,0,-4.2,-3.2,-.3,2.6,0,.7,1.4,0,0,-4.2,0,.7,1.4,3.2,-.3,2.6,0,0,-4.2,0,.7,1.4,0,-.9,2.4,0,0,-4.2,0,-.9,2.4,0,.7,1.4]),3)),n.computeVertexNormals(),Jn.add(new j(n,new ae({color:530986,side:yt}))),Jn.add(new Ft(new an(n,1),ji(nn)));let e=new j(new Xs(.6),new ae({color:hn}));e.position.set(0,.35,-.6),e.scale.set(1,.6,1.8),Jn.add(e);for(let t of[-3,3]){let s=new j(new xi(.28,6,6),new ae({color:t<0?hn:nn}));s.position.set(t,-.25,2.4),Jn.add(s)}})();Ge.add(Jn);Y0.load("models/ship/glidebooster_vx7.glb",n=>{let e=Gc(n.scene,nn);e.updateMatrixWorld(!0);let t=new Tt().setFromObject(e),s=new I,r=new I;t.getSize(s),t.getCenter(r);let o=7/Math.max(.001,s.x);for(e.scale.setScalar(o),e.position.set(-r.x*o,-r.y*o,-r.z*o);Jn.children.length;)Jn.remove(Jn.children[0]);Jn.add(e);let a=new j(new Xs(.5),new ae({color:hn}));a.position.set(0,.4,-.8),a.scale.set(1,.6,1.8),Jn.add(a)},void 0,()=>{});var Mb=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.28,"rgba(255,214,130,0.85)"),t.addColorStop(.6,"rgba(255,110,70,0.38)"),t.addColorStop(1,"rgba(255,50,130,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let s=new Wn(n);return s.colorSpace=ft,s})(),Qf=[];for(let n=0;n<10;n++){let e=new j(new Oe(3.4-.22*n,3.4-.22*n),new ae({map:Mb,color:n<5?16767136:16751327,transparent:!0,opacity:.55-n*.048,blending:bt,depthWrite:!1}));Ge.add(e),Qf.push(e)}var mn={};addEventListener("keydown",n=>{if(mn[n.code]=!0,n.code==="Space"&&n.preventDefault(),Bt){!n.repeat&&performance.now()-go>600&&Sa();return}if(n.code==="KeyR"&&(uo(),ct.restart()),n.code==="KeyT"&&(wt.superhot=!wt.superhot),n.code==="Escape"||n.code==="KeyP"){Rs();return}if(Qn){n.code==="ArrowUp"&&(wi=0),n.code==="ArrowDown"&&(wi=1),(n.code==="ArrowUp"||n.code==="ArrowDown")&&kc(),n.code==="Enter"&&gg();return}_o()});addEventListener("keyup",n=>{mn[n.code]=!1});var S0=0,T0=0,Fc=0,A0=!1,w0=!1;function ao(n){ui<=0&&Fc<=0&&cn&&!Qn&&!Bt&&(ui=1,Xf=n,Fc=1.1,Ae+=30,st=Math.min(1,st+.02),Ie("BARREL ROLL  +30","#c78bff"),Kn(.2,.45,180))}addEventListener("keydown",n=>{if(!n.repeat){if(n.code==="KeyQ")ao(-1);else if(n.code==="KeyE")ao(1);else if(n.code==="KeyA"||n.code==="ArrowLeft"){let e=performance.now();e-S0<280&&ao(-1),S0=e}else if(n.code==="KeyD"||n.code==="ArrowRight"){let e=performance.now();e-T0<280&&ao(1),T0=e}}});var Td="none";addEventListener("gamepadconnected",n=>{Td=n.gamepad.id,_o()});function Ad(){let n=navigator.getGamepads?navigator.getGamepads():[];for(let e of n)if(e&&e.connected)return e;return null}function hg(){return"pb_hs_"+et+"_"+di}function ug(){try{return JSON.parse(localStorage.getItem(hg())||"[]")}catch{return[]}}function xb(n,e,t){let s=ug(),r={s:n,r:e,c:t};s.push(r),s.sort((a,l)=>l.s-a.s);let o=s.slice(0,5);try{localStorage.setItem(hg(),JSON.stringify(o))}catch{}return o.indexOf(r)}function lc(n){for(let e of[10,25,50,100])if(n<e&&ze>=e){Ie("\u2605 COMBO "+e+" \u2605","#ffd24a"),en=Math.max(en,6),zt=Math.max(zt,.5),xc($e,ke,16765514),Kn(.7,.5,250);break}}function ua(){let n=document.getElementById("hsline");if(n){let e=ug();n.textContent=e.length?"BEST  "+Math.round(e[0].s)+"  \xB7  RANK "+e[0].r+"  \xB7  COMBO \xD7"+e[0].c:"NO RECORD YET - FLY!"}}var Hc=[],Tc=0,Yi=null,rr=0,Ss=new ot;{let n=new Xs(2.2),e=new j(n,new ae({color:10475775,transparent:!0,opacity:.3,blending:bt,depthWrite:!1}));e.scale.set(1.5,.5,2.4),Ss.add(e);let t=new Ft(new an(n),new Cn({color:10475775,transparent:!0,opacity:.55}));t.scale.copy(e.scale),Ss.add(t),Ss.visible=!1,Ge.add(Ss)}var vb=!1;function fg(){return"pb_ghost_"+et+"_"+di}function Eb(){if(!vb){Yi=null,rr=0,Ss.visible=!1;return}try{Yi=JSON.parse(localStorage.getItem(fg())||"null")}catch{Yi=null}rr=0,Ss.visible=!1}function Kn(n,e,t){try{let s=navigator.getGamepads&&navigator.getGamepads()[0];s&&s.vibrationActuator&&s.vibrationActuator.playEffect&&s.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:n,weakMagnitude:e})}catch{}}function bb(){let n=0,e=28,t=$n.find(r=>!r.judged)||Zt[Es]||null;t&&(t.kind==="bar"?t.axis==="row"?(e=tn[(t.idx+1)%3],n=0):(n=ln[(t.idx+1)%3],e=28):(n=ln[t.cell[0]],e=tn[t.cell[1]]));let s=r=>Math.max(-1,Math.min(1,r));return{x:s((n-$e)*.06),y:s((e-ke)*.07),boost:1,brake:0}}function Sb(){if((Ia||Ts)&&cn&&!Qn&&!Bt)return bb();let n=0,e=0,t=0,s=0,r=0;(mn.ArrowLeft||mn.KeyA)&&(n-=1),(mn.ArrowRight||mn.KeyD)&&(n+=1),(mn.ArrowUp||mn.KeyW)&&(e+=1),(mn.ArrowDown||mn.KeyS)&&(e-=1),(mn.ShiftLeft||mn.ShiftRight)&&(t=1),mn.Space&&(s=1);let o=Ad();if(o){Td=o.id;let a=c=>Math.abs(c)<.12?0:c;n+=a(o.axes[0]||0),e-=a(o.axes[1]||0);let l=c=>o.buttons[c]?o.buttons[c].value:0;t=Math.max(t,l(7),l(5)),s=Math.max(s,l(6),l(4)),r=Math.max(l(0),l(2))}return{x:Math.max(-1,Math.min(1,n)),y:Math.max(-1,Math.min(1,e)),boost:t,brake:s,fire:r}}var wt={stickMod:1.35,turnRate:17,smooth:.5,rollMod:.85,baseSpeed:33,lateralGain:3.1,boxW:150,boxH:95,invertY:!1,superhot:!0,timeFloor:.02},On={x:0,y:0,z:0},$e=0,ke=22,bi=1,xs=0,wd=0,Sn=0,Bt=!1,et=1,Ae=0,He=1,Ut=0,Pn=1,ta=0,qt=!1,Js=0,Ac=0,js=0,ed=!1,go=0,Qs=0,dg=0,er=0,eo=0,na=!1,ia=!1,en=0,sa=0,td=0,to=0,ra=0,cc=0,lt=null,hc=Math.random()*6,no=0,Ea=0,zt=0,Ts=location.hash==="#trailer",nd=pi[0].skyA,pg=pi[0].skyB,Tb=[0,16,32,45,55,72,100],ho=document.createElement("canvas");ho.width=96;ho.height=512;var Yo=ho.getContext("2d"),th=new Wn(ho);th.colorSpace=ft;th.minFilter=sn;var zc=-9;function ba(n){let e=ho.width,t=ho.height,s=Yo.createLinearGradient(0,0,0,t);for(let a=0;a<nd.length;a++){let l=nd[a],c=pg[a];s.addColorStop(Tb[a]/100,`rgb(${Math.round(l[0]+(c[0]-l[0])*n)},${Math.round(l[1]+(c[1]-l[1])*n)},${Math.round(l[2]+(c[2]-l[2])*n)})`)}Yo.fillStyle=s,Yo.fillRect(0,0,e,t);let r=Yo.getImageData(0,0,e,t),o=r.data;for(let a=0;a<o.length;a+=4){let l=Math.random()*11-5.5|0;o[a]+=l,o[a+1]+=l,o[a+2]+=l}Yo.putImageData(r,0,0),th.needsUpdate=!0,zc=n}ba(0);var nh=new j(new Oe(2,2),new ae({map:th,depthWrite:!1,depthTest:!1,fog:!1}));nh.position.set(0,0,-120);nh.scale.set(560,320,1);nh.renderOrder=-1;It.add(nh);Ri.add(It);var Rd=14,tr=new Float32Array(Rd*6),mg=[];for(let n=0;n<Rd;n++){let e=Math.random()*Math.PI*2,t=6+Math.random()*16;mg.push({x:Math.cos(e)*t,y:Math.sin(e)*t*.62,z:-30-Math.random()*130,len:18+Math.random()*26,v:1+Math.random()*.7})}var Cd=new dt;Cd.setAttribute("position",new ht(tr,3));var oa=new Cn({color:10479871,transparent:!0,opacity:0,blending:bt,depthWrite:!1,depthTest:!1,fog:!1}),cr=new Ft(Cd,oa);cr.frustumCulled=!1;cr.renderOrder=5;cr.visible=!1;Ge.add(cr);function uo(){On={x:0,y:0,z:0},$e=0,ke=22,xs=0;for(let e of Zn)e.position.z=0;for(let e of gd)e.done=!1;for(let e of Ca)e.position.z=e.userData.z0,e.userData.done=!1;for(let e of $c)e.position.z=e.userData.z0,e.position.x=e.userData.x0,e.userData.done=!1;for(let e of q0)e.position.set(e.userData.x0,e.userData.y0,e.userData.z0),e.userData.done=!1;Rc.position.z=0,wd=0,Sn=0,Bt=!1,kt.position.z=_d,Ae=0,He=1,Ut=0,Pn=1,ta=0,qt=!1,Js=0,Ac=0,js=0,Ea=0,zt=0,no=0,Qs=0,dg=0,er=0,eo=0,na=!1,ia=!1,en=0,sa=0,td=0,to=0,ra=0,_b(),vc=0;for(let e of $n)Ge.remove(e.g);$n.length=0,Zt.length=0,qi=!1,ir=0,Es=0,ze=0,pn=0,Ji=0,jn=0,st=0,Ht=0,As=0,so=0,Nc=0,Uc=0,Yt=null,_c=0,Ms=0,Wi=0,Qr=0,Wf=0,ui=0,yc=0,Mc=0;for(let e of ro)e.on=!1,e.g.visible=!1;for(let e of ha)e.on=!1,e.m.visible=!1;Qo=0,Kf=-1;for(let e of bd)e.el.className="";lt&&(lt.visible=!0,lt.position.set(0,14,Ts?-700:-900));for(let e of kf)if(e.position.z=e.userData.z0,e.userData.passed=!1,e.userData.hit=!1,e.userData.side=void 0,e.userData.punkGap=void 0,e.userData.pts)for(let t of e.userData.pts)t.done=!1;It.fov=66,It.updateProjectionMatrix(),da.strength=.9;let n=document.getElementById("pops");n&&(n.innerHTML="");for(let e of Lc)e.opacity=.12;for(let e of Ic)e.opacity=.42;$i.material.opacity=.14,Sd.opacity=.5,ba(0),_g()}var Qn=!1,R0=!1,wi=0,Ab=()=>[document.getElementById("btnResume"),document.getElementById("btnRestart"),document.getElementById("btnMenu")];function Pd(){Qn=!1,document.getElementById("pause").style.display="none",Bt=!1,_g(),uo(),ct.stop(),cn=!1,Ge.visible=!1,eh(!1);let n=document.getElementById("start");n&&(n.style.display="flex"),ua()}function kc(){Ab().forEach((e,t)=>e.classList.toggle("sel",t===wi))}function gg(){wi===0?Rs():wi===1?(uo(),ct.restart(),Qn&&Rs()):Pd()}function Rs(){!cn||fi&&Ia||(Qn=!Qn,document.getElementById("pause").style.display=Qn?"flex":"none",Qn?(wi=0,kc(),ct.pause(),document.getElementById("dmg").style.opacity=0):ct.resume())}function wb(){let n=Ad(),e=!!(n&&n.buttons[9]&&n.buttons[9].pressed),t=e&&!R0;return R0=e,t}var jr={up:!1,down:!1,a:!1,b:!1,any:!1};function uc(){let n=Ad();if(!n)return{};let e=u=>!!(n.buttons[u]&&n.buttons[u].pressed),t=n.axes[1]||0,s=e(12)||t<-.5,r=e(13)||t>.5,o=e(0),a=e(1),l=n.buttons.some(u=>u&&u.pressed)||Math.abs(n.axes[0]||0)>.6||Math.abs(t)>.6,c={up:s&&!jr.up,down:r&&!jr.down,a:o&&!jr.a,b:a&&!jr.b,any:l&&!jr.any};return jr={up:s,down:r,a:o,b:a,any:l},c}document.getElementById("btnResume").addEventListener("click",n=>{n.stopPropagation(),Rs()});document.getElementById("btnRestart").addEventListener("click",n=>{n.stopPropagation(),uo(),ct.restart(),Qn&&Rs()});document.getElementById("btnMenu").addEventListener("click",n=>{n.stopPropagation(),Pd()});document.getElementById("btnEndMenu").addEventListener("click",n=>{n.stopPropagation(),Pd()});document.getElementById("btnEndMenu").addEventListener("pointerdown",n=>{n.stopPropagation()});function Rb(){ct.pause(),go=performance.now(),document.getElementById("dmg").style.opacity=0;let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),s=document.getElementById("btnEndRestart"),r=et<pi.length;e&&(e.textContent=r?"LEVEL "+et+" CLEARED":"ALL CLEAR"),s&&(s.textContent=r?"NEXT: "+pi[et].name+" \u2192":"FLY AGAIN");let o=xb(Math.round(Ae),C0(),pn);if(ua(),o===0&&Hc.length>10)try{localStorage.setItem(fg(),JSON.stringify(Hc))}catch{}if(t&&(t.textContent="SCORE "+Math.round(Ae)+" \xB7 RANK "+C0()+" \xB7 HITS "+Ji+"/"+jn+" \xB7 MAX COMBO "+pn+" \xB7 NEAR MISS "+so+(Uc?" \xB7 KILLS "+Uc:"")+(Ea?" \xB7 BUSTS "+Ea:"")+" \xB7 TOP SPEED "+Math.round(Nc)+(o===0?"   \xB7   \u2605 NEW RECORD \u2605":o>0?"   \xB7   TOP "+(o+1):"")),fi&&Ia){Ed=!0;try{document.title="E2E-DONE L"+et+" "+(t?t.textContent:"")+" \xB7 ERRJS "+ca}catch{}}n.style.display="flex"}function C0(){let n=jn?Ji/jn:0;return n>=.95?"S":n>=.85?"A":n>=.7?"B":n>=.5?"C":"D"}function Ie(n,e){let t=document.getElementById("pops");if(!t)return;t.childElementCount>4&&t.firstElementChild.remove();let s=document.createElement("div");s.className="pop",s.textContent=n,s.style.color=e,s.style.textShadow="0 0 12px "+e,t.appendChild(s),setTimeout(()=>{s.remove()},900)}function Ld(n){let e=pi[n-1];nd=e.skyA,pg=e.skyB,Hn.material.map.dispose(),Hn.material.map=D0(e.sun),Hn.material.needsUpdate=!0,$i.material.map.dispose(),$i.material.map=X0(e.glow),$i.material.needsUpdate=!0,Ai.material.map.dispose(),Ai.material.map=N0(e.haze),Ai.material.needsUpdate=!0,Ri.fog.color.setHex(e.fog),ct.setTrack(e.music),zc=-9,ba(0)}function _g(){let n=document.getElementById("end");n&&(n.style.display="none")}function Cb(){ct.pause(),go=performance.now(),document.getElementById("dmg").style.opacity=0,ed=!0;let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),s=document.getElementById("btnEndRestart");if(e&&(e.textContent="STALLED - CITY GOT YOU"),s&&(s.textContent="RETRY"),t&&(t.textContent="SCORE "+Math.round(Ae)+"   \xB7   BUSTS "+Ea+"   \xB7   DISTANCE "+Math.round(wd)),fi&&Ia){Ed=!0;try{document.title="E2E-FAIL L"+et+" STALL sc="+Math.round(Ae)+" h="+Ji+"/"+jn+" err="+ca}catch{}}n.style.display="flex"}function P0(){ct.pause(),go=performance.now();let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),s=document.getElementById("btnEndRestart");e&&(e.textContent="PUNK BOOSTER"),t&&(t.textContent="TOO FAST TO STOP"),s&&(s.textContent="REPLAY"),n.style.display="flex"}function Sa(){if(ed){ed=!1,uo(),ct.restart();return}et=et<pi.length?et+1:1,Ld(et),uo(),ct.restart()}document.getElementById("btnEndRestart").addEventListener("click",n=>{n.stopPropagation(),Sa()});function Pf(n,e,t,s){let r=(e-n)*t;return r>s&&(r=s),r<-s&&(r=-s),n+r}var ys=0,hi=0,Ko=60;function io(n){let e=wb();if(cn?e&&(Bt?Sa():Rs()):uc().any&&_o(),Qn){let S=uc();S.up&&(wi=Math.max(0,wi-1),kc()),S.down&&(wi=Math.min(2,wi+1),kc()),S.a&&gg(),S.b&&Rs(),ys=0,requestAnimationFrame(io);return}if(Bt){performance.now()-go>600&&uc().any&&Sa(),ys=0,requestAnimationFrame(io);return}if(!cn){kt.position.z=-8600,kt.scale.setScalar(1.35),kt.position.y=30*.35;for(let S of Lc)S.opacity=.5;for(let S of Ic)S.opacity=.88;$i.material.opacity=.5,Hn.scale.setScalar(2.2),Hn.position.y=-560,Math.abs(.85-zc)>.004&&ba(.85),It.position.set(0,16,46),It.lookAt(0,40,-90),ys=0,Zi.info.reset(),fa.render(),requestAnimationFrame(io);return}if(!zf){ys=n,requestAnimationFrame(io);return}let t=ys?n-ys:16.7,s=ys?Math.min(3,t/33.37):1;ys=n,hi+=s/30,gc++,fi&&cn&&(Jo+=Math.min(50,t)*Cf),Ko+=(1e3/Math.max(1,t)-Ko)*.06;let r=Sb(),o=wt.invertY?-r.y:r.y,a=Math.max(Math.abs(r.x),Math.abs(r.y),r.boost,r.brake),l=wt.superhot?wt.timeFloor+(1-wt.timeFloor)*Math.min(1,a/.25):1;bi+=(l-bi)*.25;let c=s*bi*Cf;ct.setEnergy(bi);let u=wt.turnRate*s,h=1-Math.pow(1-wt.smooth,s);On.y=Pf(On.y,r.x*wt.stickMod,h,u),On.x=Pf(On.x,o*wt.stickMod,h,u),On.z=Pf(On.z,r.x*wt.rollMod,.12,5*s),xs+=(r.boost-xs)*.05;let f=On.y*$r,d=On.x*$r,p=wt.baseSpeed*(1+xs*.45-r.brake*.5)*Pn*(qt?1.22:1),g=Math.sin(f)*Math.cos(d)*p*wt.lateralGain,y=Math.sin(d)*p*wt.lateralGain,_=Math.cos(f)*Math.cos(d)*p;$e+=g*c,ke+=y*c,$e=Math.max(-wt.boxW,Math.min(wt.boxW,$e)),ke=Math.max(-18,Math.min(wt.boxH,ke)),Jn.position.set($e,ke,0),ui=Math.max(0,ui-s*.045),Fc=Math.max(0,Fc-s*.05);{let S=navigator.getGamepads&&navigator.getGamepads()[0];if(S&&S.buttons){let C=!!(S.buttons[4]&&S.buttons[4].pressed),F=!!(S.buttons[5]&&S.buttons[5].pressed);C&&!A0&&ao(-1),F&&!w0&&ao(1),A0=C,w0=F}}An===0&&(qo*=Math.max(0,1-s*2)),Jn.rotation.set(On.x*$r+qo,On.y*$r,-On.z*$r+(ui>0?Xf*(1-ui)*Math.PI*2:0)),yc>0&&(yc-=s/30,ke+=((Mc>0?-12:82)-ke)*Math.min(1,c*.05));let m=.7+.3*Math.sin(hi*18);for(let S=0;S<Qf.length;S++){let C=Qf[S],F=S+1;C.position.set($e-Math.sin(f)*F*1.3,ke+.2,2.6+F*1.35),C.lookAt(It.position);let G=(1.2-S*.08)*(.7+.6*a)*m*(qt?1.5:1)*(1+Math.min(.5,ze*.02));C.scale.set(G,G,G),C.material.opacity=(.5-S*.045)*(.3+.9*Math.min(1,a*1.4))}let x=_*c,M=Math.min(.1,t/1e3);r.boost>.5&&Pn>.9&&bi>.8?(Js=Math.min(1.4,Js+M),Ac=.9):Js>=1.2&&Ac>0?Ac-=M:Js=Math.max(0,Js-M*2.2),Ht=Math.max(0,Ht-M),qt=Js>=1.2||Ht>0,bi>.6&&r.boost<.4&&!Bt?js+=M*(r.brake>.3?1.6:1):js=Math.max(0,js-M*2),js>2.6&&!Bt&&(Bt=!0,Cb()),ct.setRedline(qt),uc(),He=1+Math.min(7,ze*.12),r.boost>.5&&bi>.8&&(st=Math.min(1,st+M*.012)),Nc=Math.max(Nc,p*bi),Ae+=x*.004*He*(qt?1.3:1),Ut=Math.max(0,Ut-M),ta=Math.max(0,ta-M),er=Math.max(0,er-M),eo=Math.max(0,eo-M),vf-=M,vf<=0&&(vf=2,Ko<48&&Xi<2.6?(Xi=Math.min(2.6,Xi+.15),wc()):Ko>58&&Xi>1.85&&(Xi=Math.max(1.85,Xi-.1),wc())),Ut>.65&&(dg=0,Qs=0),Pn+=(1-Pn)*Math.min(1,M*1.6);for(let S=0;S<hr;S++)Tf[S]=Zn[S].position.z,Af[S]=Tf[S]+x;for(let S of gd){let C=S.z0+Tf[S.k],F=S.z0+Af[S.k];if(C<=0&&F>0&&!S.done){S.done=!0;let G=Math.abs($e-S.x);if(G>=S.hw-2&&G<S.hw+14&&ke<S.top&&er<=0){let W=ui>0;er=.5,st=Math.min(1,st+(W?.06:.02)),Ae+=W?120:40,so++,to=$e>S.x?-.09:.09,W?Ie("ROLL MISS  +120","#c78bff"):so%3===1&&Ie("NEAR MISS  +40","#2af0ff")}}}for(let S=0;S<hr;S++){let C=Af[S];if(Zn[S].userData.minZ+C>90){C-=ga;for(let F of Hf[S])F.done=!1}Zn[S].position.z=C}for(let S of Ca){let C=S.position.z,F=C+x,G=S.userData;if(C<=0&&F>0&&!G.done){G.done=!0;let W=Math.abs($e-S.position.x);if(W>=G.hw-2&&W<G.hw+14&&ke<G.top&&er<=0){let N=ui>0;er=.5,st=Math.min(1,st+(N?.06:.02)),Ae+=N?120:40,so++,to=$e>S.position.x?-.09:.09,N?Ie("ROLL MISS  +120","#c78bff"):so%3===1&&Ie("NEAR MISS  +40","#2af0ff")}}F>90?(S.position.z=F-ga,G.done=!1):S.position.z=F}for(let S of $c){let C=S.position.z,F=C+x*(1-S.userData.v);C<=0&&F>0&&!S.userData.done&&(S.userData.done=!0,Math.abs($e-S.position.x)<10&&ke<-8&&ta<=0&&(ta=1.5,ze+=1,pn=Math.max(pn,ze),Ae+=200,Ie("LOW PASS  +200","#ffd24a"))),F>60?(S.position.z=F-U1,S.position.x=vd[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,S.userData.done=!1):S.position.z=F}for(let S of q0){let C=S.userData,F=S.position.z,G=F+x+C.own*c;if(F<=0&&G>0&&!C.done){C.done=!0;let W=C.rx||5,N=C.ry||4,U=Math.abs($e-S.position.x),q=Math.abs(ke-(S.position.y+(C.cy||0)));if(U<W+2&&q<N+2.5)Ut=1,Pn=.4,He=1,Ae=Math.max(0,Ae-500),xs=0,Ie("MIDAIR CRASH  -500","#ff4a5a");else if(U<W+13&&q<N+9)if(C.oncoming)Ae+=250,He=Math.min(8,He+.4),Ie("HEAD-ON PASS  +250","#ff8a5a");else{let Q=Math.round(120*He);Ae+=Q,He=Math.min(8,He+.25),Ie("OVERTAKE  +"+Q,"#c0ff5e")}}if(S.position.z=G,C.strobeA){let W=(hi*5|0)%2===0;C.strobeA.visible=W,C.strobeB.visible=!W}G>80?(S.position.z=G-wf-Math.random()*400,S.position.x=(C.oncoming?-1:1)*(6+Math.random()*24),S.position.y=-12+Math.random()*55,C.done=!1):G<-wf-800&&(S.position.z=G+wf,C.done=!1)}if(Rc.position.z=(Rc.position.z+x)%46,lt)if(no>0)no-=M,no<=0&&(Ge.remove(lt),lt=null,K0(-1800));else{let S=-10+Math.min(26,ze*1.1)+(qt?8:0)+st*10-2.5*(et-1)-.5*Math.min(3,Qs)+(Yt&&Yt.mode==="pursuit"?7:0)+(Yt&&Yt.mode==="climax"?13:0)-lo[di].punk;lt.position.z+=S*c*.55,lt.position.z<-2900&&(lt.position.z=-2900),lt.position.z>-6&&(lt.position.z=-6),hc+=c*.02;let C=null;for(let G of kf){let W=G.userData;if(W.type!=="gate"&&W.type!=="fork")continue;let N=lt.position.z-G.position.z;if(N>0&&N<600){if(W.punkGap===void 0&&(W.punkGap=Math.random()<.5?0:1),W.type==="gate"){let U=W.gaps[W.punkGap];C=(U.x0+U.x1)/2}else C=W.punkGap===0?-26:40;break}}C!==null?lt.position.x+=(C-lt.position.x)*Math.min(1,c*.08):lt.position.x=Math.sin(hc*1.7)*26,lt.position.y=12+Math.sin(hc*1.13)*10,lt.rotation.z=Math.sin(hc*1.7)*.25;let F=-lt.position.z;if(!Ts&&!Bt&&eo<=0&&(F<420&&!na?(na=!0,ia=!1,eo=6,Ie("HE'S RIGHT THERE - FLOOR IT!","#ff2bd6")):F>2400&&!ia&&(ia=!0,na=!1,eo=6,Ie("DON'T LOSE HIM!","#ff2bd6"))),F>=420&&F<=2400&&(na=!1,ia=!1),F<30&&Math.abs($e-lt.position.x)<22){Qs++;let G=Math.round(2e3*He*(1+.5*(Qs-1)));Ae+=G;let W=ze;ze+=8,pn=Math.max(pn,ze),lc(W),Ea++,zt=1,en=12,Kn(1,.7,380),Ie((Qs>1?"BUST x"+Qs+"!":"BUSTED!")+"  +"+G,"#2af0ff"),lt.visible=!1,no=2,Ts&&(Bt=!0,P0())}else F>3200&&(Ae=Math.max(0,Ae-800),Ie("PUNK ESCAPED  -800","#ff5a5f"),lt.position.z=-1600)}if(zt=Math.max(0,zt-M*1.6),!qi&&cn&&ct.time()>.5&&ct.duration()>10&&db(),qi&&cn&&!$o){let S=-1;Vf>0?S=Vf:(G1||Z0)&&(S=V1()),S<0?$o=!0:Math.abs(ct.time()-S)<3?($o=!0,Ie("WARP: FINALE","#c78bff")):(mc+=M,mc>6?($o=!0,Ie("WARP FEHLGESCHLAGEN - VON VORN","#ff5a5f")):(mc===M||gc%30===0)&&ct.seek(S))}if(qi){let S=ct.time()+k1/1e3,C=lo[di].tol;for(st>=1&&Ht<=0&&(Ht=6,st=0,Ie("\u2605 OVERDRIVE \u2605","#ffd24a"),en=10,Kn(.8,.6,320));ir<Zt.length&&(Zt[ir].t-S)*1e3*Rf<Jc;){let N=Zt[ir],U=N.kind==="gate"?sb(N.cell):N.kind==="bar"?fb(N.axis,N.idx):j1(N.cell);$n.push({t:N.t,cell:N.cell,kind:N.kind||"ring",axis:N.axis,idx:N.idx,g:U,judged:(N.t-S)*1e3<-60}),ir++}if(ng.opacity=.38+.25*Math.sin(hi*12),sr&&Si.length){for(Ma.visible=cn,xa.visible=cn;jo<Si.length-1&&Si[jo+1].t<S-.5;)jo++;let N=Da.attributes.position,U=Qc.attributes.position,q=jo,Q=0,he=0;for(let de=0;de<ws;de++){let ye=8-de*44,be=S-ye/(1e3*Rf);for(;q<Si.length-1&&Si[q+1].t<be;)q++;let Me=Si[Math.min(q,Si.length-1)],Ue=Si[Math.min(q+1,Si.length-1)],V=-6+X1(Math.max(0,be))*68,Dt,Se=Ue.t>Me.t?Math.max(0,Math.min(1,(be-Me.t)/(Ue.t-Me.t))):0,De=Se*Se*(3-2*Se);Dt=Me.x+(Ue.x-Me.x)*De;let _e=Math.min(Math.abs(be-Me.t),Math.abs(be-Ue.t)),gt=Math.max(0,1-_e/.4),Ve=gt*gt*(3-2*gt),R=Math.abs(be-Me.t)<=Math.abs(be-Ue.t)?Me.y:Ue.y;V+=(R-V)*Ve,de===0&&(Q=Dt,he=V),N.setXYZ(de*2,Dt-g0,V,ye),N.setXYZ(de*2+1,Dt+g0,V,ye),U.setXYZ(de,Dt,V+.15,ye)}if(N.needsUpdate=!0,U.needsUpdate=!0,!Bt&&Math.abs(ke-he)<9&&Math.abs($e-Q)<15){if($s+=M,st<1&&(st=Math.min(1,st+M*.012)),$s>3){$s=0;let de=ze;ze+=2,pn=Math.max(pn,ze),lc(de),Ae+=150,st=Math.min(1,st+.06),Ie("FLOW RIDE  +150","#9ff8ff"),Kn(.25,.5,140)}}else $s=0;Zf.opacity=($s>0?.58:.4)+(Ht>0?.12:0),Zf.color.setHex(Ht>0?16766826:$s>0?10483967:2814207),og.color.setHex(Ht>0?16771496:12450559)}else Ma.visible=!1,xa.visible=!1;if(Tc-=M,Tc<=0&&(Tc=.15,Hc.push([Math.round(S*100)/100,Math.round($e),Math.round(ke)])),Yi&&Yi.length>1){for(;rr<Yi.length-2&&Yi[rr+1][0]<S;)rr++;let N=Yi[rr],U=Yi[rr+1],q=Math.max(0,Math.min(1,(S-N[0])/Math.max(.01,U[0]-N[0])));Ss.visible=!0,Ss.position.set(N[1]+(U[1]-N[1])*q,N[2]+(U[2]-N[2])*q,-14)}for(let N of Bc){if(N.t<=0)continue;N.t-=M*3.2;let U=(1+(1-Math.max(0,N.t))*1.7)*(N.mag||1);N.m.scale.set(U,U,1),N.m.material.opacity=Math.max(0,N.t)*.9,N.t<=0&&(N.m.visible=!1)}for(let N=$n.length-1;N>=0;N--){let U=$n[N],q=(U.t-S)*1e3;if(U.g.position.z=-q*Rf,U.kind==="ring"){U.g.rotation.z+=.04*c;let Q=q<700;U.g.children[0].material=Q?Z1:J0,U.g.children[1].material=Q?$1:j0;let he=1+Math.max(0,(500-Math.abs(q))/500)*.3;U.g.scale.set(he,he,1)}if(!U.judged&&q<=60)if(U.judged=!0,U.kind==="gate"){let Q=Math.abs($e-ln[U.cell[0]]),he=Math.abs(ke-tn[U.cell[1]]);if(Q<26*C&&he<18*C){let de=ze;ze+=2,pn=Math.max(pn,ze),Ji++,lc(de),st=Math.min(1,st+.08);let ye=Math.round(350*(1+ze*.06)*(Ht>0?2:1));Ae+=ye,xc(ln[U.cell[0]],tn[U.cell[1]],8060826),Ie("GATE  +"+ye,"#7aff9a"),zt=Math.max(zt,.22)}else ze=0,st=Math.max(0,st-.15),Ae=Math.max(0,Ae-300),Ie("GATE SLAM  -300","#ff5a5f"),Ut=Math.max(Ut,.5),Pn=.6,Kn(.9,.5,220)}else if(U.kind==="bar")if(U.axis==="row"?Math.abs(ke-tn[U.idx])<17/C:Math.abs($e-ln[U.idx])<24/C)ze=0,st=Math.max(0,st-.1),Ae=Math.max(0,Ae-200),Ie("BAR HIT  -200","#ff5a5f"),Ut=Math.max(Ut,.45),Kn(.85,.5,200);else{Ji++;let he=Math.round(60*(Ht>0?2:1));Ae+=he,st=Math.min(1,st+.03),Ie("DODGE  +"+he,"#9ad0ff")}else{let Q=Math.abs($e-ln[U.cell[0]]),he=Math.abs(ke-tn[U.cell[1]]),de=Q<26*C&&he<18*C,ye=Q<13*C&&he<9*C,be=!de&&ui>0&&Q<26*C+52&&he<18*C;if(de||be){let Me=ze;ze++,pn=Math.max(pn,ze),Ji++,lc(Me),st=Math.min(1,st+(ye?.09:.05));let Ue=Math.round((ye?300:be?120:150)*(1+ze*.06)*(Ht>0?2:1));Ae+=Ue,U.g.visible=!1,xc(ln[U.cell[0]],tn[U.cell[1]],be?13077503:ye?hn:nn,1+Math.min(1,ze*.03)),Ie((be?"ROLL SWEEP":ye?"PERFECT":"GOOD")+"  +"+Ue+(ze>4?"   x"+ze:""),be?"#c78bff":ye?"#ff2bd6":"#2af0ff"),Kn(ye?.5:.22,.3,60),ye&&(zt=Math.max(zt,.18),en=Math.max(en,2.5))}else An===1||An===2||(ze=0,st=Math.max(0,st-.15),Ae=Math.max(0,Ae-100),Ie("MISS  -100","#ff5a5f"),Ut=Math.max(Ut,.25),Kn(.7,.4,160))}q<-400&&(Ge.remove(U.g),$n.splice(N,1))}for(;Es<Zt.length&&Zt[Es].t<S;)Es++;let F=Zt[Es],G=Zt[Es+1];for(let N of bd){let U="";F&&(F.kind==="bar"?(F.axis==="row"&&N.r===F.idx||F.axis==="col"&&N.c===F.idx)&&(U="nb"):N.c===F.cell[0]&&N.r===F.cell[1]&&(U="nx")),!U&&G&&G.kind!=="bar"&&N.c===G.cell[0]&&N.r===G.cell[1]&&(U="n2"),N.el.className=U}if(nr)for(let N of ya){let U=F&&F.kind!=="bar"&&N.cx===F.cell[0]&&N.cy===F.cell[1],q=G&&G.kind!=="bar"&&N.cx===G.cell[0]&&N.cy===G.cell[1];N.m.material.opacity=U?.5+.25*Math.sin(hi*14):q?.22:Ht>0?.16:.07,N.m.material.color.setHex(Ht>0?16765514:U?hn:2814207)}{let N=60/(Ks[et]||120),U=(S-(Zs[et]||0))/N,q=U%1,Q=document.getElementById("grid9");Q&&(Q.style.opacity=(.65+.3*(1-q)).toFixed(2));let he=U/4%1;p0=Math.max(0,1-he*5)*.07}{let N=null;if(Ki){for(let U of Ki)if(S>=U.t0&&S<U.t1){N=U;break}}N!==Yt&&(Yt=N,N&&N.turn&&(Qr+=N.turn*Math.PI/2,Ie(N.turn>0?"HARD RIGHT!":"HARD LEFT!","#ff8a3c"),en=Math.max(en,8),ui=1,Xf=N.turn>0?1:-1),N&&N.dive&&(Mc=N.dive,yc=1.4,Ie(Mc>0?"DIVE!":"CLIMB!","#9ad0ff"),en=Math.max(en,7)),N&&N.label&&Ie(N.label,N.mode==="combat"?"#ff5a5f":"#ffd24a"))}if(qf&&Yt&&(Yt.mode==="combat"||Yt.mode==="climax"&&et>=3)){let N=Yt.mode==="climax",U=60/(Ks[et]||120),q=Math.floor((S-(Zs[et]||0))/U);if(q!==Kf&&q%(N?4:di===2?1:2)===0){Kf=q;let Q=ro.find(he=>!he.on);Q&&(Q.on=!0,Q.type=et>=3&&Math.random()<.3?"heavy":Math.random()<.4?"sweeper":"drone",Q.hp=Q.type==="heavy"?3:1,Q.cx=Math.random()*3|0,Q.cy=Math.random()*3|0,Q.g.position.set(ln[Q.cx],tn[Q.cy],-880),Q.g.scale.setScalar(Q.type==="heavy"?1.7:1),Q.body.material=Q.type==="heavy"?Yf.h:Yf.d,Q.g.visible=!0)}}for(let N of ro)N.on&&(N.ph+=c*.05,N.g.position.z+=2.4*c,N.g.rotation.y+=.06*c,N.type==="sweeper"&&(N.g.position.x=ln[N.cx]+Math.sin(N.ph)*34),N.g.position.z>-40&&(N.on=!1,N.g.visible=!1));if(Qo=Math.max(0,Qo-M*Math.max(.25,bi)),qf&&(mn.KeyX||jc||r.fire>.5)&&Qo<=0&&!Bt){Qo=.14;let N=ha.find(U=>!U.on);if(N){let U=60/(Ks[et]||120),q=((S-(Zs[et]||0))/U%1+1)%1;N.on=!0,N.onBeat=q<.12||q>.88,N.m.position.set($e,ke,-6),N.m.visible=!0}}for(let N of ha){if(!N.on)continue;let U=N.m.position.z;if(N.m.position.z-=30*c,N.m.position.z<-940){N.on=!1,N.m.visible=!1;continue}for(let q of ro)if(q.on&&Math.abs(N.m.position.x-q.g.position.x)<15&&Math.abs(N.m.position.y-q.g.position.y)<13&&q.g.position.z>N.m.position.z-28&&q.g.position.z<U+28){if(N.on=!1,N.m.visible=!1,q.hp-=N.onBeat?2:1,q.hp<=0){q.on=!1,q.g.visible=!1,Uc++,xc(q.g.position.x,q.g.position.y,16765514);let Q=Math.round((q.type==="heavy"?400:150)*(N.onBeat?2:1)*(Ht>0?2:1));Ae+=Q,st=Math.min(1,st+.05),ze++,pn=Math.max(pn,ze),Ie((N.onBeat?"BEAT KILL":"KILL")+"  +"+Q,N.onBeat?"#ffd24a":"#c0ff5e"),zt=Math.max(zt,.15)}else Ie("HIT","#9ad0ff");break}}}for(let S of kf){let C=S.userData,F=S.position.z,G=F+x;if(S.position.z=G,G-C.len>200&&(S.position.z=G-z1,C.passed=!1,C.hit=!1,C.punkGap=void 0,C.side=void 0,C.pts))for(let W of C.pts)W.done=!1;if(!Ts)if(C.type==="gate"){if(F<=0&&G>0&&!C.passed){C.passed=!0;let W=C.gaps.find(N=>$e>N.x0+2.5&&$e<N.x1-2.5);if(ke<C.top+1&&!W)Ut=1,Pn=.35,He=1,Ae=Math.max(0,Ae-800),xs=0,Ie("GATE CRASH  -800","#ff4a5a");else if(ke<C.top+1&&W&&W.narrow){let N=Math.round(300*He*(qt?1.5:1));He=Math.min(8,He+.8),Ae+=N,zt=Math.max(zt,.3),Ie("THREAD THE NEEDLE  +"+N,"#ff2bd6")}}}else if(C.type==="scurve"){if(F<=0&&G>0&&!C.passed&&(C.passed=!0,ke<C.top+1&&$e<C.g1+2&&(Ut=1,Pn=.4,He=1,Ae=Math.max(0,Ae-600),Ie("WALL  -600","#ff4a5a"))),F-C.len<=0&&G-C.len>0&&!C.hit){if(C.hit=!0,ke<C.top+1&&$e>C.g2-2)Ut=1,Pn=.4,He=1,Ae=Math.max(0,Ae-600),Ie("WALL  -600","#ff4a5a");else if(ke<C.top+1){let W=Math.round(220*He*(qt?1.5:1));He=Math.min(8,He+.5),Ae+=W,Ie("S-LINE  +"+W,"#c0ff5e")}}}else if(C.type==="bridge"){if(F<=0&&G>0&&!C.passed){if(C.passed=!0,ke>C.yLow-1&&ke<C.yHigh+1)Ut=.9,Pn=.45,He=Math.max(1,He-2),Ae=Math.max(0,Ae-400),Ie("BRIDGE SLAM  -400","#ff4a5a");else if(ke<=C.yLow-1){let W=Math.round(250*He*(qt?1.5:1));He=Math.min(8,He+.5),Ae+=W,zt=Math.max(zt,.25),Ie("UNDERPASS  +"+W,"#ffd24a")}}}else if(C.type==="fork"){let W=S.position.z>0&&S.position.z-C.len<0,N=S.position.z>0&&S.position.z-C.lenL<0;if(F<=0&&G>0&&!C.passed&&(C.passed=!0,C.side=ke<C.top+1?$e<0?"L":"R":null),W&&ke<C.top+1&&!C.hit&&(Math.abs($e)<C.divH+3||N&&$e<C.lXin-2||$e>C.rXout+2)&&(C.hit=!0,Ut=.9,Pn=.45,He=Math.max(1,He-2),Ae=Math.max(0,Ae-500),Ie("FORK CRASH  -500","#ff4a5a")),F-C.lenL<=0&&G-C.lenL>0&&C.side==="L"&&ke<C.top+1&&!C.hit){let U=Math.round(350*He*(qt?1.5:1));He=Math.min(8,He+.8),Ae+=U,zt=Math.max(zt,.3),Ie("SHORTCUT  +"+U,"#ff2bd6")}if(F-C.len<=0&&G-C.len>0&&C.side==="R"&&ke<C.top+1&&!C.hit){let U=Math.round(120*He*(qt?1.5:1));He=Math.min(8,He+.3),Ae+=U,Ie("SAFE LINE  +"+U,"#2af0ff")}}else if(C.type==="slalom")for(let W of C.pts){let N=F+W.z,U=G+W.z;if(N<=0&&U>0&&!W.done){W.done=!0;let q=Math.abs($e-W.x);if(q<8&&ke<90)Ut=.7,Pn=.55,He=Math.max(1,He-1.5),Ae=Math.max(0,Ae-300),Ie("PYLON  -300","#ff4a5a");else if(q<20&&ke<90){let Q=Math.round(120*He*(qt?1.5:1));He=Math.min(8,He+.25),Ae+=Q,Ie("SLALOM  +"+Q,"#2af0ff")}}}else{let W=S.position.z>0&&S.position.z-C.len<0;W&&!C.hit&&(Math.abs($e)>C.xLim||C.yLim!==void 0&&ke>C.yLim)&&(C.hit=!0,Ut=.8,Pn=.5,He=Math.max(1,He-2),Ae=Math.max(0,Ae-400),Ie("WALL SCRAPE  -400","#ff4a5a")),W||(C.hit=!1)}}mo.offset.y+=x/b1,po.offset.y+=x/150,la.position.z=(la.position.z+x)%90,cd.position.z=la.position.z;for(let S of hd)S.position.z+=x*S.userData.rel,S.position.z>60&&(S.position.z-=5900),S.position.z<-5900&&(S.position.z+=5900);for(let S of fc)S.position.z+=x,S.position.z>300&&(S.position.z-=k0);for(let S of z0)S.rotation.z+=S.userData.spin*c*.03;for(let S of ud)S.position.x+=S.userData.vx*c*2,S.position.z+=x,S.position.x>1400&&(S.position.x=-1400),S.position.x<-1400&&(S.position.x=1400),S.position.z>-400&&(S.position.z-=3400);for(let S of Ff)S.rotation.y+=.05*c;for(let S of fd)S.position.z+=x,S.position.z>200&&(S.position.z-=6300),S.rotation.z=Math.sin(hi*S.userData.sp+S.userData.ph)*.45;for(let S of Kc)S.position.z+=x,S.position.z>100&&(S.position.z-=6e3);for(let S of F0)S.position.z+=x,S.position.z>40&&(S.position.z-=6080);for(let S of pd)S.position.z+=x,S.position.z>60&&(S.position.z-=6200);for(let S of md)S.position.z+=x,S.position.z>80&&(S.position.z-=6e3);wd+=x,Sn=Math.min(1,As>0?ct.time()/As:0),kt.position.z=Math.min(-6600,_d*(1-Sn));let L=1+Sn*1.25;kt.scale.set(L,L,L),kt.position.y=30*(L-1);{let S=(Yt&&Yt.curve||0)+(Yt&&Yt.weave?Math.sin(ct.time()*.85)*Yt.weave:0);Ms+=(S-Ms)*Math.min(1,M*.9),Wi+=(Qr-Wi)*Math.min(1,M*2);let C=16800,F=Qr-Wi;Hn.position.x=-Math.sin(Wi)*C-Ms*3200,Hn.position.z=-Math.cos(Wi)*C,Hn.rotation.y=Wi,kt.rotation.y=F*.8,kt.position.x=-Ms*2600,Ai.rotation.y=F*.8,Ai.position.x=-Ms*1300,Ai.position.z=-6e3}let w=Sn*Sn;for(let S of Lc)S.opacity=.12+.88*w;for(let S of Ic)S.opacity=.42+.55*Sn;if($i.material.opacity=.14+.5*Math.pow(Sn,1)+p0,Sd.opacity=.5*(1-Sn*.92),Math.abs(Sn-zc)>.004&&ba(Sn),Ts&&!Bt&&qi&&ct.time()>28&&(Bt=!0,P0()),qi&&Zt.length&&ir>=Zt.length&&$n.length===0?(_c+=M,_c>2&&(Bt=!0,Rb())):_c=0,Ra.position.x=$e*.04,vc+=((An>=2?1:0)-vc)*Math.min(1,s*2),va&&An===0&&qi&&Ki&&!Bt){let S=Ki.find(C=>C.tower);if(S){let C=ct.time();if(wn.visible){let F=Math.max(0,Math.min(1,C/Math.max(1,S.t0-9)));wn.position.z=-16e3+F*8800}C>=S.t0-9&&C<S.t1-2&&gb()}}if(An>0)if(oo+=M*Cf,An===1){let S=Math.min(1,oo/5),C=S*(2-S);wn.position.z=-7200+C*7350,S>=1&&(An=2,oo=0,$f(!1),kt.visible=!1,Ai.visible=!1,en=Math.max(en,12),cc=1,Ie("GO VERTICAL!","#ffd24a"),Kn(.9,.9,450))}else if(An===2){let S=Math.min(1,oo/3.6),C=S*S*(3-2*S);if(wn.rotation.x=-C*Math.PI/2,wn.position.y=-30+Math.pow(C,3)*10,bc=-Math.sin(C*Math.PI)*.62,Sc=Math.sin(C*Math.PI)*9,qo=-Math.sin(C*Math.PI)*.9-C*.22,ke+=(30-ke)*Math.min(1,s*.9),ct.setEnergy(1-Math.sin(C*Math.PI)*.9),S>=1){An=3,bc=0,Sc=0;for(let F of ya)F.m.visible=F.cy===0}}else{wn.position.z+=x,qo+=(-.24-qo)*Math.min(1,s*2),(gc&63)===0&&$f(!1);let S=60/(Ks[et]||120),C=Math.floor((ct.time()-(Zs[et]||0))/S);ea<0?ea=C+8:C>=ea&&(ea=C+8,Ec=(Ec+1)%4,to=(Ec%2?1:-1)*.14,en=Math.max(en,8),Ie("EDGE TURN!","#ff8a3c"),Kn(.5,.5,220))}let P=(a*.6+Ut*4+(qt?.35:0))*Zo,D=($e-td)/Math.max(.001,s);td=$e,sa+=(D-sa)*Math.min(1,s*6),to*=Math.max(0,1-s*3.4),ra+=((Ht>0?1:0)-ra)*Math.min(1,s*3),cc=Math.max(0,cc-s*1.4),It.position.x+=($e*.45+Ms*12+(Math.random()-.5)*P-It.position.x)*.16,It.position.y+=(ke*.4+16-Math.sin(cc*Math.PI)*5+(Math.random()-.5)*P-It.position.y)*.16,It.position.z=46-xs*5-(qt?3:0)+ra*7+Sc;let v=ct.time(),T=60/(Ks[et]||120),k=((v-(Zs[et]||0))/T%1+1)%1,J=66+xs*4+(qt?12:0)+en+ra*(4+Math.pow(1-k,3)*2.2);if(en+=(0-en)*Math.min(1,M*5),Math.abs(It.fov-J)>.05&&(It.fov+=(J-It.fov)*.08,It.updateProjectionMatrix()),da.strength+=((qt?1.25:.9)-da.strength)*.08,oa.opacity+=((qt?.7:ze>=25?.3:0)-oa.opacity)*.1,oa.color.setHex(Ht>0?16766826:10479871),oa.opacity>.02){cr.visible=!0,cr.position.set($e,ke+.2,0);for(let S=0;S<Rd;S++){let C=mg[S];if(C.z+=p*c*C.v*.9,C.z>26){C.z=-150-Math.random()*40;let G=Math.random()*Math.PI*2,W=6+Math.random()*16;C.x=Math.cos(G)*W,C.y=Math.sin(G)*W*.62}let F=S*6;tr[F]=C.x,tr[F+1]=C.y,tr[F+2]=C.z,tr[F+3]=C.x,tr[F+4]=C.y,tr[F+5]=C.z-C.len}Cd.attributes.position.needsUpdate=!0}else cr.visible=!1;It.lookAt($e*.6+sa*.05,ke*.6+6+vc*16,-90);let te=Math.min(1,Math.abs(Qr-Wi)*2.2);It.rotation.z+=-(Qr-Wi)*.72-Ms*.2-On.z*$r*.3-Math.max(-.3,Math.min(.3,sa*.0026))*(1-te*.85)+to,It.rotation.x+=bc,Hn.scale.setScalar(1.3+Sn*.9+Sn*Sn*1.6),Hn.position.y=-470+Sn*340,document.getElementById("hud").textContent=`PUNK BOOSTER
SONG ${et} \xB7 ${pi[et-1].name} \xB7 ${lo[di].name}   ${Td==="none"?"keyboard":"pad ok"}`+(Dc?`
${Ko.toFixed(0)} fps \xB7 ${c0} dc \xB7 PIX ${Xi.toFixed(2)}`:"")+(Dc?(()=>{let S=(ct.time()-(Zs[et]||0))/(60/(Ks[et]||120)),C=ln.reduce((G,W,N)=>Math.abs($e-W)<Math.abs($e-ln[G])?N:G,0),F=tn.reduce((G,W,N)=>Math.abs(ke-W)<Math.abs(ke-tn[G])?N:G,0);return`
BEAT ${S|0} \xB7 BAR ${S/4|0} \xB7 PH ${Math.max(0,S%1).toFixed(2)} \xB7 CELL ${C},${F} \xB7 FLOW ${st*100|0}% \xB7 RATE ${(.9+.1*bi).toFixed(2)} \xB7 SEC ${Yt?Yt.mode:"-"} \xB7 PUNK ${lt?Math.round(-lt.position.z)+"m":"-"} \xB7 NOTES ${$n.length} \xB7 DRONES ${ro.filter(G=>G.on).length} \xB7 LASER ${ha.filter(G=>G.on).length}`})():"");let O=document.getElementById("score");O.textContent=`SCORE ${String(Math.round(Ae)).padStart(6,"0")}
\xD7${He.toFixed(1)}${ze>1?`
COMBO `+ze:""}`,O.style.color=He>=6?"#ff2bd6":He>=3?"#2af0ff":"#ffe08a",document.getElementById("dmg").style.opacity=Ut>0?(Math.min(1,Ut)*ar).toFixed(2):js>1.2?((.16+.14*Math.sin(hi*12))*ar).toFixed(2):0,document.getElementById("bustfx").style.opacity=zt>0?(zt*ar).toFixed(2):0;{let S=Math.max(0,Math.min(1,Ht>0?1:st));document.getElementById("sbneedle").style.left=(S*277).toFixed(0)+"px"}let H=document.getElementById("sblabel");Ht>0?(H.textContent="\u2605 OVERDRIVE \u2605",H.style.color="#ffd24a",H.style.opacity=(.7+.3*Math.sin(hi*10)).toFixed(2)):js>1.2?(H.textContent="CRITICAL SPEED",H.style.color="#ff2b3c",H.style.opacity=(.5+.5*Math.sin(hi*14)).toFixed(2)):qt?(H.textContent="REDLINE",H.style.color="#ff2bd6",H.style.opacity=(.7+.3*Math.sin(hi*10)).toFixed(2)):st>.8?(H.textContent="FLOW MAX...",H.style.color="#2af0ff",H.style.opacity=(.6+.4*Math.sin(hi*8)).toFixed(2)):(H.textContent="",H.style.opacity=1);{let S=document.getElementById("combometer");ze>1&&cn&&!Bt?(S.textContent="\xD7"+ze,S.style.color=ze>=25?"#ffd24a":ze>=10?"#ff2bd6":"#2af0ff",S.style.fontSize=ze>=25?"58px":ze>=10?"46px":"36px",S.classList.toggle("hot",ze>=25),S.style.display="block",ze>Wf&&(S.classList.remove("pop"),S.offsetWidth,S.classList.add("pop"))):(S.style.display="none",S.classList.remove("hot")),Wf=ze}let $=document.getElementById("punkui");if(lt)if(no>0)$.textContent="PUNK DOWN - NEXT INBOUND",$.style.color="#2af0ff";else{let S=Math.max(0,Math.round(-lt.position.z));$.textContent="\u25E4 PUNK  "+S+"m",$.style.color=S<400?"#2af0ff":S>2400?"#ff5a5f":"#ffe08a"}Zi.info.reset(),fa.render(),c0=Zi.info.render.calls,requestAnimationFrame(io)}requestAnimationFrame(io);window.P=wt;var ct=(function(){let n=null,e=!1,t=1,s=0,r=0,o=null,a=134,l=60/a,c=l/4,u=D=>440*Math.pow(2,(D-69)/12),h=[{root:33,arp:[57,60,64,69],chord:[57,60,64]},{root:29,arp:[53,57,60,65],chord:[53,57,60]},{root:36,arp:[60,64,67,72],chord:[60,64,67]},{root:31,arp:[55,59,62,67],chord:[55,59,62]}];function f(D,v,T,k,J,te){let O=n.createOscillator(),H=n.createGain();return O.type=D,O.frequency.setValueAtTime(v,T),H.gain.setValueAtTime(0,T),H.gain.linearRampToValueAtTime(J,T+.008),H.gain.exponentialRampToValueAtTime(1e-4,T+k),O.connect(H),H.connect(te),O.start(T),O.stop(T+k+.02),O}function d(D,v,T,k,J){let te=Math.floor(n.sampleRate*v),O=n.createBuffer(1,te,n.sampleRate),H=O.getChannelData(0);for(let F=0;F<te;F++)H[F]=Math.random()*2-1;let $=n.createBufferSource();$.buffer=O;let S=n.createBiquadFilter();S.type="highpass",S.frequency.value=k;let C=n.createGain();C.gain.setValueAtTime(T,D),C.gain.exponentialRampToValueAtTime(1e-4,D+v),$.connect(S),S.connect(C),C.connect(J),$.start(D),$.stop(D+v+.02)}function p(D,v){let T=n.createOscillator(),k=n.createGain();T.type="sine",T.frequency.setValueAtTime(160,D),T.frequency.exponentialRampToValueAtTime(48,D+.12),k.gain.setValueAtTime(.9,D),k.gain.exponentialRampToValueAtTime(1e-4,D+.18),T.connect(k),k.connect(v),T.start(D),T.stop(D+.2)}let g,y,_,m;function x(){for(;r<n.currentTime+.12;){let D=r,v=Math.floor(s/16)%h.length,T=h[v],k=s%16;k%4===0&&p(D,m),k%2===1&&d(D,.03,.18*t,7e3,m),(k===4||k===12)&&d(D,.14,.35*t,1800,m),k%2===0&&f("square",u(T.root),D,c*1.8,.16,_);let J=T.arp[k%T.arp.length]+(k>=8?12:0);if(f("square",u(J),D,c*.9,.1*t,y),k===0)for(let te of T.chord)f("sawtooth",u(te+12),D,l*.9,.05,y);s++,r+=c}o=setTimeout(x,25)}let M=null,E="vice-runway.mp3",L=!1;function w(D){if(!M||L)return;let v=M.play();v&&v.then?(L=!0,v.then(()=>{L=!1,e=!0}).catch(T=>{L=!1,console.warn("[audio] play() abgelehnt ("+D+"):",T&&T.name,T&&T.message)})):e=!0}function P(){if(M)try{M.pause()}catch{}M=new Audio(E),M.loop=!1,M.volume=typeof vs<"u"?vs:1;try{M.preservesPitch=!1,M.mozPreservesPitch=!1}catch{}w("load")}return{start(){e||(M?w("start"):P())},setTrack(D){D!==E&&(E=D,(e||M)&&P())},time(){return fi?cn?Jo/1e3:0:M&&M.currentTime||0},duration(){return fi?W1[et]||130:M&&isFinite(M.duration)?M.duration:0},setVolume(D){M&&(M.volume=D)},setEnergy(D){M&&(M.playbackRate=.9+.1*Math.max(0,Math.min(1,D)))},setRedline(D){},pause(){M&&M.pause()},stop(){if(M)try{M.pause(),M.currentTime=0}catch{}e=!1,fi&&(Jo=0)},resume(){M&&w("resume")},restart(){if(fi&&(Jo=0),M){try{M.currentTime=0}catch{}w("restart")}},seek(D){if(fi){Jo=D*1e3;return}if(M)try{M.currentTime=D}catch{}}}})(),cn=!1;function _o(){if(ct.start(),cn)return;cn=!0,eh(!0),Ge.visible=!0;let n=document.getElementById("start");n&&(n.style.display="none")}document.getElementById("start").addEventListener("click",_o);addEventListener("pointerdown",()=>{if(Bt){performance.now()-go>600&&Sa();return}_o()});{let n=document.getElementById("menu");if(n){if(n.addEventListener("pointerdown",r=>{r.stopPropagation()}),n.addEventListener("click",r=>{r.stopPropagation()}),!va){let r=n.querySelector("[data-warp]");r&&(r.style.display="none")}n.querySelectorAll(".lv").forEach(r=>r.addEventListener("click",()=>{n.querySelectorAll(".lv").forEach(o=>o.classList.remove("sel")),r.classList.add("sel"),et=+r.dataset.lv,Z0=va&&!!r.dataset.warp,Ld(et),ua()})),n.querySelectorAll(".df").forEach(r=>r.addEventListener("click",()=>{n.querySelectorAll(".df").forEach(o=>o.classList.remove("sel")),r.classList.add("sel"),di=+r.dataset.df,ua()})),ua(),location.hostname.endsWith("github.io")?document.getElementById("modeswitch").style.display="none":document.getElementById("modeswitch").addEventListener("click",()=>{location.href="v3/"});let e=(r,o,a)=>{let l=document.getElementById(r),c=()=>l.classList.toggle("sel",o());c(),l.addEventListener("click",()=>{a(),c()})};e("setCrt",()=>Jr,()=>{Jr=!Jr,localStorage.setItem("pb_crt",Jr?"1":"0"),document.getElementById("crt").style.display=Jr?"":"none"}),e("setFlash",()=>ar===1,()=>{ar=ar===1?.35:1,localStorage.setItem("pb_flash",ar===1?"1":"0")}),e("setShake",()=>Zo===1,()=>{Zo=Zo===1?.35:1,localStorage.setItem("pb_shake",Zo===1?"1":"0")}),e("setRecep",()=>nr,()=>{nr=!nr,localStorage.setItem("pb_recep",nr?"1":"0"),ya.forEach(r=>r.m.visible=nr)}),wt.invertY=localStorage.getItem("pb_inverty")==="1",e("setInvY",()=>wt.invertY,()=>{wt.invertY=!wt.invertY,localStorage.setItem("pb_inverty",wt.invertY?"1":"0")}),document.getElementById("crt").style.display=Jr?"":"none";let t=document.getElementById("setVol"),s=()=>t.textContent="VOL "+Math.round(vs*100)+"%";s(),t.addEventListener("click",()=>{vs=vs>.9?.7:vs>.6?.4:1,localStorage.setItem("pb_vol",vs),ct.setVolume(vs),s()})}}if(location.hash.startsWith("#auto")){cn=!0,Ge.visible=!0,eh(!0);let n=document.getElementById("start");n&&(n.style.display="none")}{let n=location.hash.match(/lv(\d)/);if(n){let e=Math.max(1,Math.min(pi.length,+n[1]));et=e,Ld(e)}}Ts&&(document.getElementById("hud").style.display="none",setTimeout(()=>_o(),600))});Pb();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
