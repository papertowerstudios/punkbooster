(()=>{var Ru=Object.getOwnPropertyNames,ci=(e,t,n)=>function(){if(n)throw n[0];try{return e&&(t=(0,e[Ru(e)[0]])(e=0)),t}catch(s){throw n=[s],s}},$_=(e,t)=>function(){try{return t||(0,e[Ru(e)[0]])((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};function hi(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[e&255]+bn[e>>8&255]+bn[e>>16&255]+bn[e>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[n&63|128]+bn[n>>8&255]+"-"+bn[n>>16&255]+bn[n>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function yn(e,t,n){return Math.max(t,Math.min(n,e))}function Ll(e,t){return(e%t+t)%t}function J_(e,t,n,r,s){return r+(e-t)*(s-r)/(n-t)}function Z_(e,t,n){return e!==t?(n-e)/(t-e):0}function Ys(e,t,n){return(1-n)*e+n*t}function Q_(e,t,n,r){return Ys(e,t,1-Math.exp(-n*r))}function ev(e,t=1){return t-Math.abs(Ll(e,t*2)-t)}function tv(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function nv(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function iv(e,t){return e+Math.floor(Math.random()*(t-e+1))}function rv(e,t){return e+Math.random()*(t-e)}function sv(e){return e*(.5-Math.random())}function ov(e){e!==void 0&&(Oc=e);let t=Oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function av(e){return e*Pr}function lv(e){return e*Ir}function Pl(e){return(e&e-1)===0&&e!==0}function cv(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function ia(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function hv(e,t,n,r,s){const o=Math.cos,l=Math.sin,c=o(n/2),h=l(n/2),u=o((t+r)/2),f=l((t+r)/2),d=o((t-r)/2),m=l((t-r)/2),v=o((r-t)/2),x=l((r-t)/2);switch(s){case"XYX":e.set(c*f,h*d,h*m,c*u);break;case"YZY":e.set(h*m,c*f,h*d,c*u);break;case"ZXZ":e.set(h*d,h*m,c*f,c*u);break;case"XZX":e.set(c*f,h*x,h*v,c*u);break;case"YXY":e.set(h*v,c*f,h*x,c*u);break;case"ZYZ":e.set(h*x,h*v,c*f,c*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}function Cu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function js(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function uv(){const e=js("canvas");return e.style.display="block",e}function Ks(e){e in Fc||(Fc[e]=!0,console.warn(e))}function Ms(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Il(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Dl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?kc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Nl(e,t,n,r,s){for(let o=0,l=e.length-3;o<=l;o+=3){lr.fromArray(e,o);const c=s.x*Math.abs(lr.x)+s.y*Math.abs(lr.y)+s.z*Math.abs(lr.z),h=t.dot(lr),u=n.dot(lr),f=r.dot(lr);if(Math.max(-Math.max(h,u,f),Math.min(h,u,f))>c)return!1}return!0}function Ul(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function fv(e,t,n,r,s,o,l,c){let h;if(t.side===Nn?h=r.intersectTriangle(l,o,s,!0,c):h=r.intersectTriangle(s,o,l,t.side===yi,c),h===null)return null;Eo.copy(c),Eo.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(Eo);return u<n.near||u>n.far?null:{distance:u,point:Eo.clone(),object:e}}function ra(e,t,n,r,s,o,l,c,h,u){e.getVertexPosition(c,Gr),e.getVertexPosition(h,Hr),e.getVertexPosition(u,Vr);const f=fv(e,t,n,r,Gr,Hr,Vr,To);if(f){s&&(So.fromBufferAttribute(s,c),xo.fromBufferAttribute(s,h),bo.fromBufferAttribute(s,u),f.uv=Rs.getInterpolation(To,Gr,Hr,Vr,So,xo,bo,new Ne)),o&&(So.fromBufferAttribute(o,c),xo.fromBufferAttribute(o,h),bo.fromBufferAttribute(o,u),f.uv1=Rs.getInterpolation(To,Gr,Hr,Vr,So,xo,bo,new Ne),f.uv2=f.uv1),l&&(rh.fromBufferAttribute(l,c),sh.fromBufferAttribute(l,h),oh.fromBufferAttribute(l,u),f.normal=Rs.getInterpolation(To,Gr,Hr,Vr,rh,sh,oh,new B),f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1));const d={a:c,b:h,c:u,normal:new B,materialIndex:0};Rs.getNormal(Gr,Hr,Vr,d.normal),f.face=d}return f}function ys(e){const t={};for(const n in e){t[n]={};for(const r in e[n]){const s=e[n][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=s.clone():Array.isArray(s)?t[n][r]=s.slice():t[n][r]=s}}return t}function Dn(e){const t={};for(let n=0;n<e.length;n++){const r=ys(e[n]);for(const s in r)t[s]=r[s]}return t}function dv(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Lu(e){return e.getRenderTarget()===null?e.outputColorSpace:Rt.workingColorSpace}function Pu(){let e=null,t=!1,n=null,r=null;function s(o,l){n(o,l),r=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){e=o}}}function pv(e,t){const n=t.isWebGL2,r=new WeakMap;function s(u,f){const d=u.array,m=u.usage,v=d.byteLength,x=e.createBuffer();e.bindBuffer(f,x),e.bufferData(f,d,m),u.onUploadCallback();let S;if(d instanceof Float32Array)S=e.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)S=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=e.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=e.SHORT;else if(d instanceof Uint32Array)S=e.UNSIGNED_INT;else if(d instanceof Int32Array)S=e.INT;else if(d instanceof Int8Array)S=e.BYTE;else if(d instanceof Uint8Array)S=e.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:v}}function o(u,f,d){const m=f.array,v=f._updateRange,x=f.updateRanges;if(e.bindBuffer(d,u),v.count===-1&&x.length===0&&e.bufferSubData(d,0,m),x.length!==0){for(let S=0,M=x.length;S<M;S++){const _=x[S];n?e.bufferSubData(d,_.start*m.BYTES_PER_ELEMENT,m,_.start,_.count):e.bufferSubData(d,_.start*m.BYTES_PER_ELEMENT,m.subarray(_.start,_.start+_.count))}f.clearUpdateRanges()}v.count!==-1&&(n?e.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):e.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),r.get(u)}function c(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=r.get(u);f&&(e.deleteBuffer(f.buffer),r.delete(u))}function h(u,f){if(u.isGLBufferAttribute){const m=r.get(u);(!m||m.version<u.version)&&r.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=r.get(u);if(d===void 0)r.set(u,s(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,u,f),d.version=u.version}}return{get:l,remove:c,update:h}}function mv(e,t,n,r,s,o,l){const c=new Je(0);let h=o===!0?0:1,u,f,d=null,m=0,v=null;function x(M,_){let b=!1,A=_.isScene===!0?_.background:null;A&&A.isTexture&&(A=(_.backgroundBlurriness>0?n:t).get(A)),A===null?S(c,h):A&&A.isColor&&(S(A,1),b=!0);const F=e.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,l),(e.autoClear||b)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Qs)?(f===void 0&&(f=new re(new Ge(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ys(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(H,D,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(A.colorSpace)!==Vt,(d!==A||m!==A.version||v!==e.toneMapping)&&(f.material.needsUpdate=!0,d=A,m=A.version,v=e.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new re(new ht(2,2),new Gn({name:"BackgroundMaterial",uniforms:ys(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Rt.getTransfer(A.colorSpace)!==Vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||m!==A.version||v!==e.toneMapping)&&(u.material.needsUpdate=!0,d=A,m=A.version,v=e.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function S(M,_){M.getRGB(Ro,Lu(e)),r.buffers.color.setClear(Ro.r,Ro.g,Ro.b,_,l)}return{getClearColor:function(){return c},setClearColor:function(M,_=1){c.set(M),h=_,S(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(M){h=M,S(c,h)},render:x}}function gv(e,t,n,r){const s=e.getParameter(e.MAX_VERTEX_ATTRIBS),o=r.isWebGL2?null:t.get("OES_vertex_array_object"),l=r.isWebGL2||o!==null,c={},h=M(null);let u=h,f=!1;function d(X,K,Z,ye,ue){let he=!1;if(l){const _e=S(ye,Z,K);u!==_e&&(u=_e,v(u.object)),he=_(X,ye,Z,ue),he&&b(X,ye,Z,ue)}else{const _e=K.wireframe===!0;(u.geometry!==ye.id||u.program!==Z.id||u.wireframe!==_e)&&(u.geometry=ye.id,u.program=Z.id,u.wireframe=_e,he=!0)}ue!==null&&n.update(ue,e.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,q(X,K,Z,ye),ue!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(ue).buffer))}function m(){return r.isWebGL2?e.createVertexArray():o.createVertexArrayOES()}function v(X){return r.isWebGL2?e.bindVertexArray(X):o.bindVertexArrayOES(X)}function x(X){return r.isWebGL2?e.deleteVertexArray(X):o.deleteVertexArrayOES(X)}function S(X,K,Z){const ye=Z.wireframe===!0;let ue=c[X.id];ue===void 0&&(ue={},c[X.id]=ue);let he=ue[K.id];he===void 0&&(he={},ue[K.id]=he);let _e=he[ye];return _e===void 0&&(_e=M(m()),he[ye]=_e),_e}function M(X){const K=[],Z=[],ye=[];for(let ue=0;ue<s;ue++)K[ue]=0,Z[ue]=0,ye[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:Z,attributeDivisors:ye,object:X,attributes:{},index:null}}function _(X,K,Z,ye){const ue=u.attributes,he=K.attributes;let _e=0;const ve=Z.getAttributes();for(const Q in ve)if(ve[Q].location>=0){const Ce=ue[Q];let Le=he[Q];if(Le===void 0&&(Q==="instanceMatrix"&&X.instanceMatrix&&(Le=X.instanceMatrix),Q==="instanceColor"&&X.instanceColor&&(Le=X.instanceColor)),Ce===void 0||Ce.attribute!==Le||Le&&Ce.data!==Le.data)return!0;_e++}return u.attributesNum!==_e||u.index!==ye}function b(X,K,Z,ye){const ue={},he=K.attributes;let _e=0;const ve=Z.getAttributes();for(const Q in ve)if(ve[Q].location>=0){let Ce=he[Q];Ce===void 0&&(Q==="instanceMatrix"&&X.instanceMatrix&&(Ce=X.instanceMatrix),Q==="instanceColor"&&X.instanceColor&&(Ce=X.instanceColor));const Le={};Le.attribute=Ce,Ce&&Ce.data&&(Le.data=Ce.data),ue[Q]=Le,_e++}u.attributes=ue,u.attributesNum=_e,u.index=ye}function A(){const X=u.newAttributes;for(let K=0,Z=X.length;K<Z;K++)X[K]=0}function F(X){H(X,0)}function H(X,K){const Z=u.newAttributes,ye=u.enabledAttributes,ue=u.attributeDivisors;Z[X]=1,ye[X]===0&&(e.enableVertexAttribArray(X),ye[X]=1),ue[X]!==K&&((r.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,K),ue[X]=K)}function D(){const X=u.newAttributes,K=u.enabledAttributes;for(let Z=0,ye=K.length;Z<ye;Z++)K[Z]!==X[Z]&&(e.disableVertexAttribArray(Z),K[Z]=0)}function G(X,K,Z,ye,ue,he,_e){_e===!0?e.vertexAttribIPointer(X,K,Z,ue,he):e.vertexAttribPointer(X,K,Z,ye,ue,he)}function q(X,K,Z,ye){if(r.isWebGL2===!1&&(X.isInstancedMesh||ye.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;A();const ue=ye.attributes,he=Z.getAttributes(),_e=K.defaultAttributeValues;for(const ve in he){const Q=he[ve];if(Q.location>=0){let fe=ue[ve];if(fe===void 0&&(ve==="instanceMatrix"&&X.instanceMatrix&&(fe=X.instanceMatrix),ve==="instanceColor"&&X.instanceColor&&(fe=X.instanceColor)),fe!==void 0){const Ce=fe.normalized,Le=fe.itemSize,qe=n.get(fe);if(qe===void 0)continue;const tt=qe.buffer,pt=qe.type,nt=qe.bytesPerElement,Tt=r.isWebGL2===!0&&(pt===e.INT||pt===e.UNSIGNED_INT||fe.gpuType===Kl);if(fe.isInterleavedBufferAttribute){const J=fe.data,tn=J.stride,ut=fe.offset;if(J.isInstancedInterleavedBuffer){for(let We=0;We<Q.locationSize;We++)H(Q.location+We,J.meshPerAttribute);X.isInstancedMesh!==!0&&ye._maxInstanceCount===void 0&&(ye._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let We=0;We<Q.locationSize;We++)F(Q.location+We);e.bindBuffer(e.ARRAY_BUFFER,tt);for(let We=0;We<Q.locationSize;We++)G(Q.location+We,Le/Q.locationSize,pt,Ce,tn*nt,(ut+Le/Q.locationSize*We)*nt,Tt)}else{if(fe.isInstancedBufferAttribute){for(let J=0;J<Q.locationSize;J++)H(Q.location+J,fe.meshPerAttribute);X.isInstancedMesh!==!0&&ye._maxInstanceCount===void 0&&(ye._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let J=0;J<Q.locationSize;J++)F(Q.location+J);e.bindBuffer(e.ARRAY_BUFFER,tt);for(let J=0;J<Q.locationSize;J++)G(Q.location+J,Le/Q.locationSize,pt,Ce,Le*nt,Le/Q.locationSize*J*nt,Tt)}}else if(_e!==void 0){const Ce=_e[ve];if(Ce!==void 0)switch(Ce.length){case 2:e.vertexAttrib2fv(Q.location,Ce);break;case 3:e.vertexAttrib3fv(Q.location,Ce);break;case 4:e.vertexAttrib4fv(Q.location,Ce);break;default:e.vertexAttrib1fv(Q.location,Ce)}}}}D()}function C(){ce();for(const X in c){const K=c[X];for(const Z in K){const ye=K[Z];for(const ue in ye)x(ye[ue].object),delete ye[ue];delete K[Z]}delete c[X]}}function P(X){if(c[X.id]===void 0)return;const K=c[X.id];for(const Z in K){const ye=K[Z];for(const ue in ye)x(ye[ue].object),delete ye[ue];delete K[Z]}delete c[X.id]}function ee(X){for(const K in c){const Z=c[K];if(Z[X.id]===void 0)continue;const ye=Z[X.id];for(const ue in ye)x(ye[ue].object),delete ye[ue];delete Z[X.id]}}function ce(){ge(),f=!0,u!==h&&(u=h,v(u.object))}function ge(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:d,reset:ce,resetDefaultState:ge,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:ee,initAttributes:A,enableAttribute:F,disableUnusedAttributes:D}}function _v(e,t,n,r){const s=r.isWebGL2;let o;function l(f){o=f}function c(f,d){e.drawArrays(o,f,d),n.update(d,o,1)}function h(f,d,m){if(m===0)return;let v,x;if(s)v=e,x="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](o,f,d,m),n.update(d,o,m)}function u(f,d,m){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<m;x++)this.render(f[x],d[x]);else{v.multiDrawArraysWEBGL(o,f,0,d,0,m);let x=0;for(let S=0;S<m;S++)x+=d[S];n.update(x,o,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function vv(e,t,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(G){if(G==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=l||t.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),x=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),S=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,F=l||t.has("OES_texture_float"),H=A&&F,D=l?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:A,floatFragmentTextures:F,floatVertexTextures:H,maxSamples:D}}function Mv(e){const t=this;let n=null,r=0,s=!1,o=!1;const l=new hr,c=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const v=d.length!==0||m||r!==0||s;return s=m,r=d.length,v},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,m){n=f(d,m,0)},this.setState=function(d,m,v){const x=d.clippingPlanes,S=d.clipIntersection,M=d.clipShadows,_=e.get(d);if(!s||x===null||x.length===0||o&&!M)o?f(null):u();else{const b=o?0:r,A=b*4;let F=_.clippingState||null;h.value=F,F=f(x,m,A,v);for(let H=0;H!==A;++H)F[H]=n[H];_.clippingState=F,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function u(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function f(d,m,v,x){const S=d!==null?d.length:0;let M=null;if(S!==0){if(M=h.value,x!==!0||M===null){const _=v+S*4,b=m.matrixWorldInverse;c.getNormalMatrix(b),(M===null||M.length<_)&&(M=new Float32Array(_));for(let A=0,F=v;A!==S;++A,F+=4)l.copy(d[A]).applyMatrix4(b,c),l.normal.toArray(M,F),M[F+3]=l.constant}h.value=M,h.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,M}}function yv(e){let t=new WeakMap;function n(l,c){return c===ua?l.mapping=Tr:c===fa&&(l.mapping=Er),l}function r(l){if(l&&l.isTexture){const c=l.mapping;if(c===ua||c===fa)if(t.has(l)){const h=t.get(l).texture;return n(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const u=new _d(h.height/2);return u.fromEquirectangularTexture(e,l),t.set(l,u),l.addEventListener("dispose",s),n(u.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap}return{get:r,dispose:o}}function Sv(e){const t=[],n=[],r=[];let s=e;const o=e-qr+1+ch.length;for(let l=0;l<o;l++){const c=Math.pow(2,s);n.push(c);let h=1/c;l>e-qr?h=ch[l-e+qr-1]:l===0&&(h=0),r.push(h);const u=1/(c-2),f=-u,d=1+u,m=[f,f,d,f,d,d,f,f,d,d,f,d],v=6,x=6,S=3,M=2,_=1,b=new Float32Array(S*x*v),A=new Float32Array(M*x*v),F=new Float32Array(_*x*v);for(let D=0;D<v;D++){const G=D%3*2/3-1,q=D>2?0:-1,C=[G,q,0,G+2/3,q,0,G+2/3,q+1,0,G,q,0,G+2/3,q+1,0,G,q+1,0];b.set(C,S*x*D),A.set(m,M*x*D);const P=[D,D,D,D,D,D];F.set(P,_*x*D)}const H=new en;H.setAttribute("position",new Qt(b,S)),H.setAttribute("uv",new Qt(A,M)),H.setAttribute("faceIndex",new Qt(F,_)),t.push(H),s>qr&&s--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Iu(e,t,n){const r=new ni(e,t,n);return r.texture.mapping=Qs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function sa(e,t,n,r,s){e.viewport.set(t,n,r,s),e.scissor.set(t,n,r,s)}function xv(e,t,n){const r=new Float32Array(fr),s=new B(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Du(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Nu(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function bv(e){let t=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const h=c.mapping,u=h===ua||h===fa,f=h===Tr||h===Er;if(u||f)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let d=t.get(c);return n===null&&(n=new fh(e)),d=u?n.fromEquirectangular(c,d):n.fromCubemap(c,d),t.set(c,d),d.texture}else{if(t.has(c))return t.get(c).texture;{const d=c.image;if(u&&d&&d.height>0||f&&d&&s(d)){n===null&&(n=new fh(e));const m=u?n.fromEquirectangular(c):n.fromCubemap(c);return t.set(c,m),c.addEventListener("dispose",o),m.texture}else return null}}}return c}function s(c){let h=0;const u=6;for(let f=0;f<u;f++)c[f]!==void 0&&h++;return h===u}function o(c){const h=c.target;h.removeEventListener("dispose",o);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function l(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:l}}function Tv(e){const t={};function n(r){if(t[r]!==void 0)return t[r];let s;switch(r){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(r)}return t[r]=s,s}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const s=n(r);return s===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function Ev(e,t,n,r){const s={},o=new WeakMap;function l(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const x in m.attributes)t.remove(m.attributes[x]);for(const x in m.morphAttributes){const S=m.morphAttributes[x];for(let M=0,_=S.length;M<_;M++)t.remove(S[M])}m.removeEventListener("dispose",l),delete s[m.id];const v=o.get(m);v&&(t.remove(v),o.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function c(d,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,n.memory.geometries++),m}function h(d){const m=d.attributes;for(const x in m)t.update(m[x],e.ARRAY_BUFFER);const v=d.morphAttributes;for(const x in v){const S=v[x];for(let M=0,_=S.length;M<_;M++)t.update(S[M],e.ARRAY_BUFFER)}}function u(d){const m=[],v=d.index,x=d.attributes.position;let S=0;if(v!==null){const b=v.array;S=v.version;for(let A=0,F=b.length;A<F;A+=3){const H=b[A+0],D=b[A+1],G=b[A+2];m.push(H,D,D,G,G,H)}}else if(x!==void 0){const b=x.array;S=x.version;for(let A=0,F=b.length/3-1;A<F;A+=3){const H=A+0,D=A+1,G=A+2;m.push(H,D,D,G,G,H)}}else return;const M=new(Cu(m)?th:eh)(m,1);M.version=S;const _=o.get(d);_&&t.remove(_),o.set(d,M)}function f(d){const m=o.get(d);if(m){const v=d.index;v!==null&&m.version<v.version&&u(d)}else u(d);return o.get(d)}return{get:c,update:h,getWireframeAttribute:f}}function Av(e,t,n,r){const s=r.isWebGL2;let o;function l(v){o=v}let c,h;function u(v){c=v.type,h=v.bytesPerElement}function f(v,x){e.drawElements(o,x,c,v*h),n.update(x,o,1)}function d(v,x,S){if(S===0)return;let M,_;if(s)M=e,_="drawElementsInstanced";else if(M=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[_](o,x,c,v*h,S),n.update(x,o,S)}function m(v,x,S){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S;_++)this.render(v[_]/h,x[_]);else{M.multiDrawElementsWEBGL(o,x,0,c,v,0,S);let _=0;for(let b=0;b<S;b++)_+=x[b];n.update(_,o,1)}}this.setMode=l,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=m}function wv(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,l,c){switch(n.calls++,l){case e.TRIANGLES:n.triangles+=c*(o/3);break;case e.LINES:n.lines+=c*(o/2);break;case e.LINE_STRIP:n.lines+=c*(o-1);break;case e.LINE_LOOP:n.lines+=c*o;break;case e.POINTS:n.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:r}}function Rv(e,t){return e[0]-t[0]}function Cv(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Lv(e,t,n){const r={},s=new Float32Array(8),o=new WeakMap,l=new Wt,c=[];for(let u=0;u<8;u++)c[u]=[u,0];function h(u,f,d){const m=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let S=o.get(f);if(S===void 0||S.count!==x){let b=function(){ge.dispose(),o.delete(f),f.removeEventListener("dispose",b)};S!==void 0&&S.texture.dispose();const A=f.morphAttributes.position!==void 0,F=f.morphAttributes.normal!==void 0,H=f.morphAttributes.color!==void 0,D=f.morphAttributes.position||[],G=f.morphAttributes.normal||[],q=f.morphAttributes.color||[];let C=0;A===!0&&(C=1),F===!0&&(C=2),H===!0&&(C=3);let P=f.attributes.position.count*C,ee=1;P>t.maxTextureSize&&(ee=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const ce=new Float32Array(P*ee*4*x),ge=new Hc(ce,P,ee,x);ge.type=Ti,ge.needsUpdate=!0;const X=C*4;for(let K=0;K<x;K++){const Z=D[K],ye=G[K],ue=q[K],he=P*ee*4*K;for(let _e=0;_e<Z.count;_e++){const ve=_e*X;A===!0&&(l.fromBufferAttribute(Z,_e),ce[he+ve+0]=l.x,ce[he+ve+1]=l.y,ce[he+ve+2]=l.z,ce[he+ve+3]=0),F===!0&&(l.fromBufferAttribute(ye,_e),ce[he+ve+4]=l.x,ce[he+ve+5]=l.y,ce[he+ve+6]=l.z,ce[he+ve+7]=0),H===!0&&(l.fromBufferAttribute(ue,_e),ce[he+ve+8]=l.x,ce[he+ve+9]=l.y,ce[he+ve+10]=l.z,ce[he+ve+11]=ue.itemSize===4?l.w:1)}}S={count:x,texture:ge,size:new Ne(P,ee)},o.set(f,S),f.addEventListener("dispose",b)}let M=0;for(let b=0;b<m.length;b++)M+=m[b];const _=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(e,"morphTargetBaseInfluence",_),d.getUniforms().setValue(e,"morphTargetInfluences",m),d.getUniforms().setValue(e,"morphTargetsTexture",S.texture,n),d.getUniforms().setValue(e,"morphTargetsTextureSize",S.size)}else{const v=m===void 0?0:m.length;let x=r[f.id];if(x===void 0||x.length!==v){x=[];for(let A=0;A<v;A++)x[A]=[A,0];r[f.id]=x}for(let A=0;A<v;A++){const F=x[A];F[0]=A,F[1]=m[A]}x.sort(Cv);for(let A=0;A<8;A++)A<v&&x[A][1]?(c[A][0]=x[A][0],c[A][1]=x[A][1]):(c[A][0]=Number.MAX_SAFE_INTEGER,c[A][1]=0);c.sort(Rv);const S=f.morphAttributes.position,M=f.morphAttributes.normal;let _=0;for(let A=0;A<8;A++){const F=c[A],H=F[0],D=F[1];H!==Number.MAX_SAFE_INTEGER&&D?(S&&f.getAttribute("morphTarget"+A)!==S[H]&&f.setAttribute("morphTarget"+A,S[H]),M&&f.getAttribute("morphNormal"+A)!==M[H]&&f.setAttribute("morphNormal"+A,M[H]),s[A]=D,_+=D):(S&&f.hasAttribute("morphTarget"+A)===!0&&f.deleteAttribute("morphTarget"+A),M&&f.hasAttribute("morphNormal"+A)===!0&&f.deleteAttribute("morphNormal"+A),s[A]=0)}const b=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(e,"morphTargetBaseInfluence",b),d.getUniforms().setValue(e,"morphTargetInfluences",s)}}return{update:h}}function Pv(e,t,n,r){let s=new WeakMap;function o(h){const u=r.render.frame,f=h.geometry,d=t.get(h,f);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==u&&(n.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,e.ARRAY_BUFFER),s.set(h,u))),h.isSkinnedMesh){const m=h.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return d}function l(){s=new WeakMap}function c(h){const u=h.target;u.removeEventListener("dispose",c),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:l}}function Ss(e,t,n){const r=e[0];if(r<=0||r>0)return e;const s=t*n;let o=Mh[s];if(o===void 0&&(o=new Float32Array(s),Mh[s]=o),t!==0){r.toArray(o,0);for(let l=1,c=0;l!==t;++l)c+=n,e[l].toArray(o,c)}return o}function gn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function _n(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function oa(e,t){let n=yh[t];n===void 0&&(n=new Int32Array(t),yh[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Iv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Dv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;e.uniform2fv(this.addr,t),_n(n,t)}}function Nv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gn(n,t))return;e.uniform3fv(this.addr,t),_n(n,t)}}function Uv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;e.uniform4fv(this.addr,t),_n(n,t)}}function Ov(e,t){const n=this.cache,r=t.elements;if(r===void 0){if(gn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,r))return;bh.set(r),e.uniformMatrix2fv(this.addr,!1,bh),_n(n,r)}}function Fv(e,t){const n=this.cache,r=t.elements;if(r===void 0){if(gn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,r))return;xh.set(r),e.uniformMatrix3fv(this.addr,!1,xh),_n(n,r)}}function Bv(e,t){const n=this.cache,r=t.elements;if(r===void 0){if(gn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,r))return;Sh.set(r),e.uniformMatrix4fv(this.addr,!1,Sh),_n(n,r)}}function zv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function kv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;e.uniform2iv(this.addr,t),_n(n,t)}}function Gv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;e.uniform3iv(this.addr,t),_n(n,t)}}function Hv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;e.uniform4iv(this.addr,t),_n(n,t)}}function Vv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Wv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;e.uniform2uiv(this.addr,t),_n(n,t)}}function Xv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;e.uniform3uiv(this.addr,t),_n(n,t)}}function qv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;e.uniform4uiv(this.addr,t),_n(n,t)}}function Yv(e,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(e.uniform1i(this.addr,s),r[0]=s);const o=this.type===e.SAMPLER_2D_SHADOW?mh:ph;n.setTexture2D(t||o,s)}function jv(e,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(e.uniform1i(this.addr,s),r[0]=s),n.setTexture3D(t||_h,s)}function Kv(e,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(e.uniform1i(this.addr,s),r[0]=s),n.setTextureCube(t||vh,s)}function $v(e,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(e.uniform1i(this.addr,s),r[0]=s),n.setTexture2DArray(t||gh,s)}function Jv(e){switch(e){case 5126:return Iv;case 35664:return Dv;case 35665:return Nv;case 35666:return Uv;case 35674:return Ov;case 35675:return Fv;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Gv;case 35669:case 35673:return Hv;case 5125:return Vv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return $v}}function Zv(e,t){e.uniform1fv(this.addr,t)}function Qv(e,t){const n=Ss(t,this.size,2);e.uniform2fv(this.addr,n)}function eM(e,t){const n=Ss(t,this.size,3);e.uniform3fv(this.addr,n)}function tM(e,t){const n=Ss(t,this.size,4);e.uniform4fv(this.addr,n)}function nM(e,t){const n=Ss(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function iM(e,t){const n=Ss(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rM(e,t){const n=Ss(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sM(e,t){e.uniform1iv(this.addr,t)}function oM(e,t){e.uniform2iv(this.addr,t)}function aM(e,t){e.uniform3iv(this.addr,t)}function lM(e,t){e.uniform4iv(this.addr,t)}function cM(e,t){e.uniform1uiv(this.addr,t)}function hM(e,t){e.uniform2uiv(this.addr,t)}function uM(e,t){e.uniform3uiv(this.addr,t)}function fM(e,t){e.uniform4uiv(this.addr,t)}function dM(e,t,n){const r=this.cache,s=t.length,o=oa(n,s);gn(r,o)||(e.uniform1iv(this.addr,o),_n(r,o));for(let l=0;l!==s;++l)n.setTexture2D(t[l]||ph,o[l])}function pM(e,t,n){const r=this.cache,s=t.length,o=oa(n,s);gn(r,o)||(e.uniform1iv(this.addr,o),_n(r,o));for(let l=0;l!==s;++l)n.setTexture3D(t[l]||_h,o[l])}function mM(e,t,n){const r=this.cache,s=t.length,o=oa(n,s);gn(r,o)||(e.uniform1iv(this.addr,o),_n(r,o));for(let l=0;l!==s;++l)n.setTextureCube(t[l]||vh,o[l])}function gM(e,t,n){const r=this.cache,s=t.length,o=oa(n,s);gn(r,o)||(e.uniform1iv(this.addr,o),_n(r,o));for(let l=0;l!==s;++l)n.setTexture2DArray(t[l]||gh,o[l])}function _M(e){switch(e){case 5126:return Zv;case 35664:return Qv;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return hM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function Uu(e,t){e.seq.push(t),e.map[t.id]=t}function vM(e,t,n){const r=e.name,s=r.length;for(Va.lastIndex=0;;){const o=Va.exec(r),l=Va.lastIndex;let c=o[1];const h=o[2]==="]",u=o[3];if(h&&(c=c|0),u===void 0||u==="["&&l+2===s){Uu(n,u===void 0?new Qm(c,e,t):new e0(c,e,t));break}else{let d=n.map[c];d===void 0&&(d=new t0(c),Uu(n,d)),n=d}}}function Ou(e,t,n){const r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function MM(e,t){const n=e.split(`
`),r=[],s=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let l=s;l<o;l++){const c=l+1;r.push(`${c===t?">":" "} ${c}: ${n[l]}`)}return r.join(`
`)}function yM(e){const t=Rt.getPrimaries(Rt.workingColorSpace),n=Rt.getPrimaries(e);let r;switch(t===n?r="":t===ro&&n===io?r="LinearDisplayP3ToLinearSRGB":t===io&&n===ro&&(r="LinearSRGBToLinearDisplayP3"),e){case vn:case to:return[r,"LinearTransferOETF"];case Ot:case xa:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[r,"LinearTransferOETF"]}}function Fu(e,t,n){const r=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(r&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+MM(e.getShaderSource(t),l)}else return s}function SM(e,t){const n=yM(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xM(e,t){let n;switch(t){case Ef:n="Linear";break;case Af:n="Reinhard";break;case wf:n="OptimizedCineon";break;case Rf:n="ACESFilmic";break;case Lf:n="AgX";break;case Cf:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function bM(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function TM(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function EM(e){const t=[];for(const n in e){const r=e[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function AM(e,t){const n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const o=e.getActiveAttrib(t,s),l=o.name;let c=1;o.type===e.FLOAT_MAT2&&(c=2),o.type===e.FLOAT_MAT3&&(c=3),o.type===e.FLOAT_MAT4&&(c=4),n[l]={type:o.type,location:e.getAttribLocation(t,l),locationSize:c}}return n}function xs(e){return e!==""}function Bu(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Fl(e){return e.replace(r0,wM)}function wM(e,t){let n=dt[t];if(n===void 0){const r=s0.get(t);if(r!==void 0)n=dt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Fl(n)}function ku(e){return e.replace(o0,RM)}function RM(e,t,n,r){let s="";for(let o=parseInt(t);o<parseInt(n);o++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Gu(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function CM(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Zu?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function LM(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Tr:case Er:t="ENVMAP_TYPE_CUBE";break;case Qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function PM(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Er&&(t="ENVMAP_MODE_REFRACTION"),t}function IM(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Xl:t="ENVMAP_BLENDING_MULTIPLY";break;case bf:t="ENVMAP_BLENDING_MIX";break;case Tf:t="ENVMAP_BLENDING_ADD";break}return t}function DM(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function NM(e,t,n,r){const s=e.getContext(),o=n.defines;let l=n.vertexShader,c=n.fragmentShader;const h=CM(n),u=LM(n),f=PM(n),d=IM(n),m=DM(n),v=n.isWebGL2?"":bM(n),x=TM(n),S=EM(o),M=s.createProgram();let _,b,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(xs).join(`
`),_.length>0&&(_+=`
`),b=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(xs).join(`
`),b.length>0&&(b+=`
`)):(_=[Gu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),b=[v,Gu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?dt.tonemapping_pars_fragment:"",n.toneMapping!==ki?xM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,SM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xs).join(`
`)),l=Fl(l),l=Bu(l,n),l=zu(l,n),c=Fl(c),c=Bu(c,n),c=zu(c,n),l=ku(l),c=ku(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,b=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const F=A+_+l,H=A+b+c,D=Ou(s,s.VERTEX_SHADER,F),G=Ou(s,s.FRAGMENT_SHADER,H);s.attachShader(M,D),s.attachShader(M,G),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function q(ce){if(e.debug.checkShaderErrors){const ge=s.getProgramInfoLog(M).trim(),X=s.getShaderInfoLog(D).trim(),K=s.getShaderInfoLog(G).trim();let Z=!0,ye=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,D,G);else{const ue=Fu(s,D,"vertex"),he=Fu(s,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Program Info Log: `+ge+`
`+ue+`
`+he)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(X===""||K==="")&&(ye=!1);ye&&(ce.diagnostics={runnable:Z,programLog:ge,vertexShader:{log:X,prefix:_},fragmentShader:{log:K,prefix:b}})}s.deleteShader(D),s.deleteShader(G),C=new Lo(s,M),P=AM(s,M)}let C;this.getUniforms=function(){return C===void 0&&q(this),C};let P;this.getAttributes=function(){return P===void 0&&q(this),P};let ee=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=s.getProgramParameter(M,n0)),ee},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=i0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=G,this}function UM(e,t,n,r,s,o,l){const c=new Yc,h=new l0,u=[],f=s.isWebGL2,d=s.logarithmicDepthBuffer,m=s.vertexTextures;let v=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(C){return C===0?"uv":`uv${C}`}function M(C,P,ee,ce,ge){const X=ce.fog,K=ge.geometry,Z=C.isMeshStandardMaterial?ce.environment:null,ye=(C.isMeshStandardMaterial?n:t).get(C.envMap||Z),ue=ye&&ye.mapping===Qs?ye.image.height:null,he=x[C.type];C.precision!==null&&(v=s.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const _e=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=_e!==void 0?_e.length:0;let Q=0;K.morphAttributes.position!==void 0&&(Q=1),K.morphAttributes.normal!==void 0&&(Q=2),K.morphAttributes.color!==void 0&&(Q=3);let fe,Ce,Le,qe;if(he){const Sn=di[he];fe=Sn.vertexShader,Ce=Sn.fragmentShader}else fe=C.vertexShader,Ce=C.fragmentShader,h.update(C),Le=h.getVertexShaderID(C),qe=h.getFragmentShaderID(C);const tt=e.getRenderTarget(),pt=ge.isInstancedMesh===!0,nt=ge.isBatchedMesh===!0,Tt=!!C.map,J=!!C.matcap,tn=!!ye,ut=!!C.aoMap,We=!!C.lightMap,Ze=!!C.bumpMap,Ke=!!C.normalMap,yt=!!C.displacementMap,at=!!C.emissiveMap,O=!!C.metalnessMap,w=!!C.roughnessMap,te=C.anisotropy>0,Me=C.clearcoat>0,le=C.iridescence>0,me=C.sheen>0,je=C.transmission>0,Re=te&&!!C.anisotropyMap,De=Me&&!!C.clearcoatMap,Se=Me&&!!C.clearcoatNormalMap,lt=Me&&!!C.clearcoatRoughnessMap,pe=le&&!!C.iridescenceMap,jt=le&&!!C.iridescenceThicknessMap,Mt=me&&!!C.sheenColorMap,Qe=me&&!!C.sheenRoughnessMap,Fe=!!C.specularMap,ke=!!C.specularColorMap,vt=!!C.specularIntensityMap,Dt=je&&!!C.transmissionMap,St=je&&!!C.thicknessMap,Ct=!!C.gradientMap,be=!!C.alphaMap,W=C.alphaTest>0,we=!!C.alphaHash,Pe=!!C.extensions,$e=!!K.attributes.uv1,Ye=!!K.attributes.uv2,wt=!!K.attributes.uv3;let Gt=ki;return C.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Gt=e.toneMapping),{isWebGL2:f,shaderID:he,shaderType:C.type,shaderName:C.name,vertexShader:fe,fragmentShader:Ce,defines:C.defines,customVertexShaderID:Le,customFragmentShaderID:qe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:nt,instancing:pt,instancingColor:pt&&ge.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:vn,map:Tt,matcap:J,envMap:tn,envMapMode:tn&&ye.mapping,envMapCubeUVHeight:ue,aoMap:ut,lightMap:We,bumpMap:Ze,normalMap:Ke,displacementMap:m&&yt,emissiveMap:at,normalMapObjectSpace:Ke&&C.normalMapType===Wf,normalMapTangentSpace:Ke&&C.normalMapType===Ic,metalnessMap:O,roughnessMap:w,anisotropy:te,anisotropyMap:Re,clearcoat:Me,clearcoatMap:De,clearcoatNormalMap:Se,clearcoatRoughnessMap:lt,iridescence:le,iridescenceMap:pe,iridescenceThicknessMap:jt,sheen:me,sheenColorMap:Mt,sheenRoughnessMap:Qe,specularMap:Fe,specularColorMap:ke,specularIntensityMap:vt,transmission:je,transmissionMap:Dt,thicknessMap:St,gradientMap:Ct,opaque:C.transparent===!1&&C.blending===br,alphaMap:be,alphaTest:W,alphaHash:we,combine:C.combine,mapUv:Tt&&S(C.map.channel),aoMapUv:ut&&S(C.aoMap.channel),lightMapUv:We&&S(C.lightMap.channel),bumpMapUv:Ze&&S(C.bumpMap.channel),normalMapUv:Ke&&S(C.normalMap.channel),displacementMapUv:yt&&S(C.displacementMap.channel),emissiveMapUv:at&&S(C.emissiveMap.channel),metalnessMapUv:O&&S(C.metalnessMap.channel),roughnessMapUv:w&&S(C.roughnessMap.channel),anisotropyMapUv:Re&&S(C.anisotropyMap.channel),clearcoatMapUv:De&&S(C.clearcoatMap.channel),clearcoatNormalMapUv:Se&&S(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&S(C.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&S(C.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&S(C.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&S(C.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&S(C.sheenRoughnessMap.channel),specularMapUv:Fe&&S(C.specularMap.channel),specularColorMapUv:ke&&S(C.specularColorMap.channel),specularIntensityMapUv:vt&&S(C.specularIntensityMap.channel),transmissionMapUv:Dt&&S(C.transmissionMap.channel),thicknessMapUv:St&&S(C.thicknessMap.channel),alphaMapUv:be&&S(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ke||te),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Ye,vertexUv3s:wt,pointsUvs:ge.isPoints===!0&&!!K.attributes.uv&&(Tt||be),fog:!!X,useFog:C.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ge.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Q,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:e.shadowMap.enabled&&ee.length>0,shadowMapType:e.shadowMap.type,toneMapping:Gt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:Tt&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===Vt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===zt,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Pe&&C.extensions.derivatives===!0,extensionFragDepth:Pe&&C.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pe&&C.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function _(C){const P=[];if(C.shaderID?P.push(C.shaderID):(P.push(C.customVertexShaderID),P.push(C.customFragmentShaderID)),C.defines!==void 0)for(const ee in C.defines)P.push(ee),P.push(C.defines[ee]);return C.isRawShaderMaterial===!1&&(b(P,C),A(P,C),P.push(e.outputColorSpace)),P.push(C.customProgramCacheKey),P.join()}function b(C,P){C.push(P.precision),C.push(P.outputColorSpace),C.push(P.envMapMode),C.push(P.envMapCubeUVHeight),C.push(P.mapUv),C.push(P.alphaMapUv),C.push(P.lightMapUv),C.push(P.aoMapUv),C.push(P.bumpMapUv),C.push(P.normalMapUv),C.push(P.displacementMapUv),C.push(P.emissiveMapUv),C.push(P.metalnessMapUv),C.push(P.roughnessMapUv),C.push(P.anisotropyMapUv),C.push(P.clearcoatMapUv),C.push(P.clearcoatNormalMapUv),C.push(P.clearcoatRoughnessMapUv),C.push(P.iridescenceMapUv),C.push(P.iridescenceThicknessMapUv),C.push(P.sheenColorMapUv),C.push(P.sheenRoughnessMapUv),C.push(P.specularMapUv),C.push(P.specularColorMapUv),C.push(P.specularIntensityMapUv),C.push(P.transmissionMapUv),C.push(P.thicknessMapUv),C.push(P.combine),C.push(P.fogExp2),C.push(P.sizeAttenuation),C.push(P.morphTargetsCount),C.push(P.morphAttributeCount),C.push(P.numDirLights),C.push(P.numPointLights),C.push(P.numSpotLights),C.push(P.numSpotLightMaps),C.push(P.numHemiLights),C.push(P.numRectAreaLights),C.push(P.numDirLightShadows),C.push(P.numPointLightShadows),C.push(P.numSpotLightShadows),C.push(P.numSpotLightShadowsWithMaps),C.push(P.numLightProbes),C.push(P.shadowMapType),C.push(P.toneMapping),C.push(P.numClippingPlanes),C.push(P.numClipIntersection),C.push(P.depthPacking)}function A(C,P){c.disableAll(),P.isWebGL2&&c.enable(0),P.supportsVertexTextures&&c.enable(1),P.instancing&&c.enable(2),P.instancingColor&&c.enable(3),P.matcap&&c.enable(4),P.envMap&&c.enable(5),P.normalMapObjectSpace&&c.enable(6),P.normalMapTangentSpace&&c.enable(7),P.clearcoat&&c.enable(8),P.iridescence&&c.enable(9),P.alphaTest&&c.enable(10),P.vertexColors&&c.enable(11),P.vertexAlphas&&c.enable(12),P.vertexUv1s&&c.enable(13),P.vertexUv2s&&c.enable(14),P.vertexUv3s&&c.enable(15),P.vertexTangents&&c.enable(16),P.anisotropy&&c.enable(17),P.alphaHash&&c.enable(18),P.batching&&c.enable(19),C.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.skinning&&c.enable(4),P.morphTargets&&c.enable(5),P.morphNormals&&c.enable(6),P.morphColors&&c.enable(7),P.premultipliedAlpha&&c.enable(8),P.shadowMapEnabled&&c.enable(9),P.useLegacyLights&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),C.push(c.mask)}function F(C){const P=x[C.type];let ee;if(P){const ce=di[P];ee=Ao.clone(ce.uniforms)}else ee=C.uniforms;return ee}function H(C,P){let ee;for(let ce=0,ge=u.length;ce<ge;ce++){const X=u[ce];if(X.cacheKey===P){ee=X,++ee.usedTimes;break}}return ee===void 0&&(ee=new NM(e,P,C,o),u.push(ee)),ee}function D(C){if(--C.usedTimes===0){const P=u.indexOf(C);u[P]=u[u.length-1],u.pop(),C.destroy()}}function G(C){h.remove(C)}function q(){h.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:F,acquireProgram:H,releaseProgram:D,releaseShaderCache:G,programs:u,dispose:q}}function OM(){let e=new WeakMap;function t(o){let l=e.get(o);return l===void 0&&(l={},e.set(o,l)),l}function n(o){e.delete(o)}function r(o,l,c){e.get(o)[l]=c}function s(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:s}}function FM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Hu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Vu(){const e=[];let t=0;const n=[],r=[],s=[];function o(){t=0,n.length=0,r.length=0,s.length=0}function l(d,m,v,x,S,M){let _=e[t];return _===void 0?(_={id:d.id,object:d,geometry:m,material:v,groupOrder:x,renderOrder:d.renderOrder,z:S,group:M},e[t]=_):(_.id=d.id,_.object=d,_.geometry=m,_.material=v,_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=S,_.group=M),t++,_}function c(d,m,v,x,S,M){const _=l(d,m,v,x,S,M);v.transmission>0?r.push(_):v.transparent===!0?s.push(_):n.push(_)}function h(d,m,v,x,S,M){const _=l(d,m,v,x,S,M);v.transmission>0?r.unshift(_):v.transparent===!0?s.unshift(_):n.unshift(_)}function u(d,m){n.length>1&&n.sort(d||FM),r.length>1&&r.sort(m||Hu),s.length>1&&s.sort(m||Hu)}function f(){for(let d=t,m=e.length;d<m;d++){const v=e[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:r,transparent:s,init:o,push:c,unshift:h,finish:f,sort:u}}function BM(){let e=new WeakMap;function t(r,s){const o=e.get(r);let l;return o===void 0?(l=new Vu,e.set(r,[l])):s>=o.length?(l=new Vu,o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}function zM(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new Je};break;case"SpotLight":n={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function kM(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function GM(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function HM(e,t){const n=new zM,r=kM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)s.probe.push(new B);const o=new B,l=new ft,c=new ft;function h(f,d){let m=0,v=0,x=0;for(let ce=0;ce<9;ce++)s.probe[ce].set(0,0,0);let S=0,M=0,_=0,b=0,A=0,F=0,H=0,D=0,G=0,q=0,C=0;f.sort(GM);const P=d===!0?Math.PI:1;for(let ce=0,ge=f.length;ce<ge;ce++){const X=f[ce],K=X.color,Z=X.intensity,ye=X.distance,ue=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)m+=K.r*Z*P,v+=K.g*Z*P,x+=K.b*Z*P;else if(X.isLightProbe){for(let he=0;he<9;he++)s.probe[he].addScaledVector(X.sh.coefficients[he],Z);C++}else if(X.isDirectionalLight){const he=n.get(X);if(he.color.copy(X.color).multiplyScalar(X.intensity*P),X.castShadow){const _e=X.shadow,ve=r.get(X);ve.shadowBias=_e.bias,ve.shadowNormalBias=_e.normalBias,ve.shadowRadius=_e.radius,ve.shadowMapSize=_e.mapSize,s.directionalShadow[S]=ve,s.directionalShadowMap[S]=ue,s.directionalShadowMatrix[S]=X.shadow.matrix,F++}s.directional[S]=he,S++}else if(X.isSpotLight){const he=n.get(X);he.position.setFromMatrixPosition(X.matrixWorld),he.color.copy(K).multiplyScalar(Z*P),he.distance=ye,he.coneCos=Math.cos(X.angle),he.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),he.decay=X.decay,s.spot[_]=he;const _e=X.shadow;if(X.map&&(s.spotLightMap[G]=X.map,G++,_e.updateMatrices(X),X.castShadow&&q++),s.spotLightMatrix[_]=_e.matrix,X.castShadow){const ve=r.get(X);ve.shadowBias=_e.bias,ve.shadowNormalBias=_e.normalBias,ve.shadowRadius=_e.radius,ve.shadowMapSize=_e.mapSize,s.spotShadow[_]=ve,s.spotShadowMap[_]=ue,D++}_++}else if(X.isRectAreaLight){const he=n.get(X);he.color.copy(K).multiplyScalar(Z),he.halfWidth.set(X.width*.5,0,0),he.halfHeight.set(0,X.height*.5,0),s.rectArea[b]=he,b++}else if(X.isPointLight){const he=n.get(X);if(he.color.copy(X.color).multiplyScalar(X.intensity*P),he.distance=X.distance,he.decay=X.decay,X.castShadow){const _e=X.shadow,ve=r.get(X);ve.shadowBias=_e.bias,ve.shadowNormalBias=_e.normalBias,ve.shadowRadius=_e.radius,ve.shadowMapSize=_e.mapSize,ve.shadowCameraNear=_e.camera.near,ve.shadowCameraFar=_e.camera.far,s.pointShadow[M]=ve,s.pointShadowMap[M]=ue,s.pointShadowMatrix[M]=X.shadow.matrix,H++}s.point[M]=he,M++}else if(X.isHemisphereLight){const he=n.get(X);he.skyColor.copy(X.color).multiplyScalar(Z*P),he.groundColor.copy(X.groundColor).multiplyScalar(Z*P),s.hemi[A]=he,A++}}b>0&&(t.isWebGL2?e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=x;const ee=s.hash;(ee.directionalLength!==S||ee.pointLength!==M||ee.spotLength!==_||ee.rectAreaLength!==b||ee.hemiLength!==A||ee.numDirectionalShadows!==F||ee.numPointShadows!==H||ee.numSpotShadows!==D||ee.numSpotMaps!==G||ee.numLightProbes!==C)&&(s.directional.length=S,s.spot.length=_,s.rectArea.length=b,s.point.length=M,s.hemi.length=A,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=H,s.pointShadowMap.length=H,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=H,s.spotLightMatrix.length=D+G-q,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=C,ee.directionalLength=S,ee.pointLength=M,ee.spotLength=_,ee.rectAreaLength=b,ee.hemiLength=A,ee.numDirectionalShadows=F,ee.numPointShadows=H,ee.numSpotShadows=D,ee.numSpotMaps=G,ee.numLightProbes=C,s.version=h0++)}function u(f,d){let m=0,v=0,x=0,S=0,M=0;const _=d.matrixWorldInverse;for(let b=0,A=f.length;b<A;b++){const F=f[b];if(F.isDirectionalLight){const H=s.directional[m];H.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),H.direction.sub(o),H.direction.transformDirection(_),m++}else if(F.isSpotLight){const H=s.spot[x];H.position.setFromMatrixPosition(F.matrixWorld),H.position.applyMatrix4(_),H.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),H.direction.sub(o),H.direction.transformDirection(_),x++}else if(F.isRectAreaLight){const H=s.rectArea[S];H.position.setFromMatrixPosition(F.matrixWorld),H.position.applyMatrix4(_),c.identity(),l.copy(F.matrixWorld),l.premultiply(_),c.extractRotation(l),H.halfWidth.set(F.width*.5,0,0),H.halfHeight.set(0,F.height*.5,0),H.halfWidth.applyMatrix4(c),H.halfHeight.applyMatrix4(c),S++}else if(F.isPointLight){const H=s.point[v];H.position.setFromMatrixPosition(F.matrixWorld),H.position.applyMatrix4(_),v++}else if(F.isHemisphereLight){const H=s.hemi[M];H.direction.setFromMatrixPosition(F.matrixWorld),H.direction.transformDirection(_),M++}}}return{setup:h,setupView:u,state:s}}function Wu(e,t){const n=new HM(e,t),r=[],s=[];function o(){r.length=0,s.length=0}function l(d){r.push(d)}function c(d){s.push(d)}function h(d){n.setup(r,d)}function u(d){n.setupView(r,d)}return{init:o,state:{lightsArray:r,shadowsArray:s,lights:n},setupLights:h,setupLightsView:u,pushLight:l,pushShadow:c}}function VM(e,t){let n=new WeakMap;function r(o,l=0){const c=n.get(o);let h;return c===void 0?(h=new Wu(e,t),n.set(o,[h])):l>=c.length?(h=new Wu(e,t),c.push(h)):h=c[l],h}function s(){n=new WeakMap}return{get:r,dispose:s}}function WM(e,t,n){let r=new Ba;const s=new Ne,o=new Ne,l=new Wt,c=new u0({depthPacking:Vf}),h=new f0,u={},f=n.maxTextureSize,d={[yi]:Nn,[Nn]:yi,[zt]:zt},m=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:d0,fragmentShader:p0}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const x=new en;x.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new re(x,m),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let _=this.type;this.render=function(D,G,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;const C=e.getRenderTarget(),P=e.getActiveCubeFace(),ee=e.getActiveMipmapLevel(),ce=e.state;ce.setBlending(Si),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ge=_!==Mi&&this.type===Mi,X=_===Mi&&this.type!==Mi;for(let K=0,Z=D.length;K<Z;K++){const ye=D[K],ue=ye.shadow;if(ue===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;s.copy(ue.mapSize);const he=ue.getFrameExtents();if(s.multiply(he),o.copy(ue.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(o.x=Math.floor(f/he.x),s.x=o.x*he.x,ue.mapSize.x=o.x),s.y>f&&(o.y=Math.floor(f/he.y),s.y=o.y*he.y,ue.mapSize.y=o.y)),ue.map===null||ge===!0||X===!0){const ve=this.type!==Mi?{minFilter:an,magFilter:an}:{};ue.map!==null&&ue.map.dispose(),ue.map=new ni(s.x,s.y,ve),ue.map.texture.name=ye.name+".shadowMap",ue.camera.updateProjectionMatrix()}e.setRenderTarget(ue.map),e.clear();const _e=ue.getViewportCount();for(let ve=0;ve<_e;ve++){const Q=ue.getViewport(ve);l.set(o.x*Q.x,o.y*Q.y,o.x*Q.z,o.y*Q.w),ce.viewport(l),ue.updateMatrices(ye,ve),r=ue.getFrustum(),F(G,q,ue.camera,ye,this.type)}ue.isPointLightShadow!==!0&&this.type===Mi&&b(ue,q),ue.needsUpdate=!1}_=this.type,M.needsUpdate=!1,e.setRenderTarget(C,P,ee)};function b(D,G){const q=t.update(S);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,v.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ni(s.x,s.y)),m.uniforms.shadow_pass.value=D.map.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(G,null,q,m,S,null),v.uniforms.shadow_pass.value=D.mapPass.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(G,null,q,v,S,null)}function A(D,G,q,C){let P=null;const ee=q.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(ee!==void 0)P=ee;else if(P=q.isPointLight===!0?h:c,e.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0){const ce=P.uuid,ge=G.uuid;let X=u[ce];X===void 0&&(X={},u[ce]=X);let K=X[ge];K===void 0&&(K=P.clone(),X[ge]=K,G.addEventListener("dispose",H)),P=K}if(P.visible=G.visible,P.wireframe=G.wireframe,C===Mi?P.side=G.shadowSide!==null?G.shadowSide:G.side:P.side=G.shadowSide!==null?G.shadowSide:d[G.side],P.alphaMap=G.alphaMap,P.alphaTest=G.alphaTest,P.map=G.map,P.clipShadows=G.clipShadows,P.clippingPlanes=G.clippingPlanes,P.clipIntersection=G.clipIntersection,P.displacementMap=G.displacementMap,P.displacementScale=G.displacementScale,P.displacementBias=G.displacementBias,P.wireframeLinewidth=G.wireframeLinewidth,P.linewidth=G.linewidth,q.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const ce=e.properties.get(P);ce.light=q}return P}function F(D,G,q,C,P){if(D.visible===!1)return;if(D.layers.test(G.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&P===Mi)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,D.matrixWorld);const ge=t.update(D),X=D.material;if(Array.isArray(X)){const K=ge.groups;for(let Z=0,ye=K.length;Z<ye;Z++){const ue=K[Z],he=X[ue.materialIndex];if(he&&he.visible){const _e=A(D,he,C,P);D.onBeforeShadow(e,D,G,q,ge,_e,ue),e.renderBufferDirect(q,null,ge,_e,D,ue),D.onAfterShadow(e,D,G,q,ge,_e,ue)}}}else if(X.visible){const K=A(D,X,C,P);D.onBeforeShadow(e,D,G,q,ge,K,null),e.renderBufferDirect(q,null,ge,K,D,null),D.onAfterShadow(e,D,G,q,ge,K,null)}}const ce=D.children;for(let ge=0,X=ce.length;ge<X;ge++)F(ce[ge],G,q,C,P)}function H(D){D.target.removeEventListener("dispose",H);for(const q in u){const C=u[q],P=D.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function XM(e,t,n){const r=n.isWebGL2;function s(){let W=!1;const we=new Wt;let Pe=null;const $e=new Wt(0,0,0,0);return{setMask:function(Ye){Pe!==Ye&&!W&&(e.colorMask(Ye,Ye,Ye,Ye),Pe=Ye)},setLocked:function(Ye){W=Ye},setClear:function(Ye,wt,Gt,nn,Sn){Sn===!0&&(Ye*=nn,wt*=nn,Gt*=nn),we.set(Ye,wt,Gt,nn),$e.equals(we)===!1&&(e.clearColor(Ye,wt,Gt,nn),$e.copy(we))},reset:function(){W=!1,Pe=null,$e.set(-1,0,0,0)}}}function o(){let W=!1,we=null,Pe=null,$e=null;return{setTest:function(Ye){Ye?nt(e.DEPTH_TEST):Tt(e.DEPTH_TEST)},setMask:function(Ye){we!==Ye&&!W&&(e.depthMask(Ye),we=Ye)},setFunc:function(Ye){if(Pe!==Ye){switch(Ye){case gf:e.depthFunc(e.NEVER);break;case _f:e.depthFunc(e.ALWAYS);break;case vf:e.depthFunc(e.LESS);break;case Zs:e.depthFunc(e.LEQUAL);break;case Mf:e.depthFunc(e.EQUAL);break;case yf:e.depthFunc(e.GEQUAL);break;case Sf:e.depthFunc(e.GREATER);break;case xf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Pe=Ye}},setLocked:function(Ye){W=Ye},setClear:function(Ye){$e!==Ye&&(e.clearDepth(Ye),$e=Ye)},reset:function(){W=!1,we=null,Pe=null,$e=null}}}function l(){let W=!1,we=null,Pe=null,$e=null,Ye=null,wt=null,Gt=null,nn=null,Sn=null;return{setTest:function(At){W||(At?nt(e.STENCIL_TEST):Tt(e.STENCIL_TEST))},setMask:function(At){we!==At&&!W&&(e.stencilMask(At),we=At)},setFunc:function(At,oi,Qn){(Pe!==At||$e!==oi||Ye!==Qn)&&(e.stencilFunc(At,oi,Qn),Pe=At,$e=oi,Ye=Qn)},setOp:function(At,oi,Qn){(wt!==At||Gt!==oi||nn!==Qn)&&(e.stencilOp(At,oi,Qn),wt=At,Gt=oi,nn=Qn)},setLocked:function(At){W=At},setClear:function(At){Sn!==At&&(e.clearStencil(At),Sn=At)},reset:function(){W=!1,we=null,Pe=null,$e=null,Ye=null,wt=null,Gt=null,nn=null,Sn=null}}}const c=new s,h=new o,u=new l,f=new WeakMap,d=new WeakMap;let m={},v={},x=new WeakMap,S=[],M=null,_=!1,b=null,A=null,F=null,H=null,D=null,G=null,q=null,C=new Je(0,0,0),P=0,ee=!1,ce=null,ge=null,X=null,K=null,Z=null;const ye=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,he=0;const _e=e.getParameter(e.VERSION);_e.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(_e)[1]),ue=he>=1):_e.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),ue=he>=2);let ve=null,Q={};const fe=e.getParameter(e.SCISSOR_BOX),Ce=e.getParameter(e.VIEWPORT),Le=new Wt().fromArray(fe),qe=new Wt().fromArray(Ce);function tt(W,we,Pe,$e){const Ye=new Uint8Array(4),wt=e.createTexture();e.bindTexture(W,wt),e.texParameteri(W,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(W,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Gt=0;Gt<Pe;Gt++)r&&(W===e.TEXTURE_3D||W===e.TEXTURE_2D_ARRAY)?e.texImage3D(we,0,e.RGBA,1,1,$e,0,e.RGBA,e.UNSIGNED_BYTE,Ye):e.texImage2D(we+Gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ye);return wt}const pt={};pt[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),pt[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(pt[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pt[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),u.setClear(0),nt(e.DEPTH_TEST),h.setFunc(Zs),at(!1),O(zl),nt(e.CULL_FACE),Ke(Si);function nt(W){m[W]!==!0&&(e.enable(W),m[W]=!0)}function Tt(W){m[W]!==!1&&(e.disable(W),m[W]=!1)}function J(W,we){return v[W]!==we?(e.bindFramebuffer(W,we),v[W]=we,r&&(W===e.DRAW_FRAMEBUFFER&&(v[e.FRAMEBUFFER]=we),W===e.FRAMEBUFFER&&(v[e.DRAW_FRAMEBUFFER]=we)),!0):!1}function tn(W,we){let Pe=S,$e=!1;if(W)if(Pe=x.get(we),Pe===void 0&&(Pe=[],x.set(we,Pe)),W.isWebGLMultipleRenderTargets){const Ye=W.texture;if(Pe.length!==Ye.length||Pe[0]!==e.COLOR_ATTACHMENT0){for(let wt=0,Gt=Ye.length;wt<Gt;wt++)Pe[wt]=e.COLOR_ATTACHMENT0+wt;Pe.length=Ye.length,$e=!0}}else Pe[0]!==e.COLOR_ATTACHMENT0&&(Pe[0]=e.COLOR_ATTACHMENT0,$e=!0);else Pe[0]!==e.BACK&&(Pe[0]=e.BACK,$e=!0);$e&&(n.isWebGL2?e.drawBuffers(Pe):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function ut(W){return M!==W?(e.useProgram(W),M=W,!0):!1}const We={[ir]:e.FUNC_ADD,[ef]:e.FUNC_SUBTRACT,[tf]:e.FUNC_REVERSE_SUBTRACT};if(r)We[Vl]=e.MIN,We[Wl]=e.MAX;else{const W=t.get("EXT_blend_minmax");W!==null&&(We[Vl]=W.MIN_EXT,We[Wl]=W.MAX_EXT)}const Ze={[nf]:e.ZERO,[rf]:e.ONE,[sf]:e.SRC_COLOR,[ca]:e.SRC_ALPHA,[uf]:e.SRC_ALPHA_SATURATE,[cf]:e.DST_COLOR,[af]:e.DST_ALPHA,[of]:e.ONE_MINUS_SRC_COLOR,[ha]:e.ONE_MINUS_SRC_ALPHA,[hf]:e.ONE_MINUS_DST_COLOR,[lf]:e.ONE_MINUS_DST_ALPHA,[ff]:e.CONSTANT_COLOR,[df]:e.ONE_MINUS_CONSTANT_COLOR,[pf]:e.CONSTANT_ALPHA,[mf]:e.ONE_MINUS_CONSTANT_ALPHA};function Ke(W,we,Pe,$e,Ye,wt,Gt,nn,Sn,At){if(W===Si){_===!0&&(Tt(e.BLEND),_=!1);return}if(_===!1&&(nt(e.BLEND),_=!0),W!==Qu){if(W!==b||At!==ee){if((A!==ir||D!==ir)&&(e.blendEquation(e.FUNC_ADD),A=ir,D=ir),At)switch(W){case br:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case on:e.blendFunc(e.ONE,e.ONE);break;case Gl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Hl:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case br:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case on:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Gl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Hl:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}F=null,H=null,G=null,q=null,C.set(0,0,0),P=0,b=W,ee=At}return}Ye=Ye||we,wt=wt||Pe,Gt=Gt||$e,(we!==A||Ye!==D)&&(e.blendEquationSeparate(We[we],We[Ye]),A=we,D=Ye),(Pe!==F||$e!==H||wt!==G||Gt!==q)&&(e.blendFuncSeparate(Ze[Pe],Ze[$e],Ze[wt],Ze[Gt]),F=Pe,H=$e,G=wt,q=Gt),(nn.equals(C)===!1||Sn!==P)&&(e.blendColor(nn.r,nn.g,nn.b,Sn),C.copy(nn),P=Sn),b=W,ee=!1}function yt(W,we){W.side===zt?Tt(e.CULL_FACE):nt(e.CULL_FACE);let Pe=W.side===Nn;we&&(Pe=!Pe),at(Pe),W.blending===br&&W.transparent===!1?Ke(Si):Ke(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const $e=W.stencilWrite;u.setTest($e),$e&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),te(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):Tt(e.SAMPLE_ALPHA_TO_COVERAGE)}function at(W){ce!==W&&(W?e.frontFace(e.CW):e.frontFace(e.CCW),ce=W)}function O(W){W!==$u?(nt(e.CULL_FACE),W!==ge&&(W===zl?e.cullFace(e.BACK):W===Ju?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Tt(e.CULL_FACE),ge=W}function w(W){W!==X&&(ue&&e.lineWidth(W),X=W)}function te(W,we,Pe){W?(nt(e.POLYGON_OFFSET_FILL),(K!==we||Z!==Pe)&&(e.polygonOffset(we,Pe),K=we,Z=Pe)):Tt(e.POLYGON_OFFSET_FILL)}function Me(W){W?nt(e.SCISSOR_TEST):Tt(e.SCISSOR_TEST)}function le(W){W===void 0&&(W=e.TEXTURE0+ye-1),ve!==W&&(e.activeTexture(W),ve=W)}function me(W,we,Pe){Pe===void 0&&(ve===null?Pe=e.TEXTURE0+ye-1:Pe=ve);let $e=Q[Pe];$e===void 0&&($e={type:void 0,texture:void 0},Q[Pe]=$e),($e.type!==W||$e.texture!==we)&&(ve!==Pe&&(e.activeTexture(Pe),ve=Pe),e.bindTexture(W,we||pt[W]),$e.type=W,$e.texture=we)}function je(){const W=Q[ve];W!==void 0&&W.type!==void 0&&(e.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Re(){try{e.compressedTexImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(){try{e.compressedTexImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{e.texSubImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function lt(){try{e.texSubImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function jt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{e.texStorage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(){try{e.texStorage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{e.texImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{e.texImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(W){Le.equals(W)===!1&&(e.scissor(W.x,W.y,W.z,W.w),Le.copy(W))}function Dt(W){qe.equals(W)===!1&&(e.viewport(W.x,W.y,W.z,W.w),qe.copy(W))}function St(W,we){let Pe=d.get(we);Pe===void 0&&(Pe=new WeakMap,d.set(we,Pe));let $e=Pe.get(W);$e===void 0&&($e=e.getUniformBlockIndex(we,W.name),Pe.set(W,$e))}function Ct(W,we){const $e=d.get(we).get(W);f.get(we)!==$e&&(e.uniformBlockBinding(we,$e,W.__bindingPointIndex),f.set(we,$e))}function be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},ve=null,Q={},v={},x=new WeakMap,S=[],M=null,_=!1,b=null,A=null,F=null,H=null,D=null,G=null,q=null,C=new Je(0,0,0),P=0,ee=!1,ce=null,ge=null,X=null,K=null,Z=null,Le.set(0,0,e.canvas.width,e.canvas.height),qe.set(0,0,e.canvas.width,e.canvas.height),c.reset(),h.reset(),u.reset()}return{buffers:{color:c,depth:h,stencil:u},enable:nt,disable:Tt,bindFramebuffer:J,drawBuffers:tn,useProgram:ut,setBlending:Ke,setMaterial:yt,setFlipSided:at,setCullFace:O,setLineWidth:w,setPolygonOffset:te,setScissorTest:Me,activeTexture:le,bindTexture:me,unbindTexture:je,compressedTexImage2D:Re,compressedTexImage3D:De,texImage2D:Fe,texImage3D:ke,updateUBOMapping:St,uniformBlockBinding:Ct,texStorage2D:Mt,texStorage3D:Qe,texSubImage2D:Se,texSubImage3D:lt,compressedTexSubImage2D:pe,compressedTexSubImage3D:jt,scissor:vt,viewport:Dt,reset:be}}function qM(e,t,n,r,s,o,l){const c=s.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,w){return v?new OffscreenCanvas(O,w):js("canvas")}function S(O,w,te,Me){let le=1;if((O.width>Me||O.height>Me)&&(le=Me/Math.max(O.width,O.height)),le<1||w===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const me=w?ia:Math.floor,je=me(le*O.width),Re=me(le*O.height);d===void 0&&(d=x(je,Re));const De=te?x(je,Re):d;return De.width=je,De.height=Re,De.getContext("2d").drawImage(O,0,0,je,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+je+"x"+Re+")."),De}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function M(O){return Pl(O.width)&&Pl(O.height)}function _(O){return c?!1:O.wrapS!==Bn||O.wrapT!==Bn||O.minFilter!==an&&O.minFilter!==Rn}function b(O,w){return O.generateMipmaps&&w&&O.minFilter!==an&&O.minFilter!==Rn}function A(O){e.generateMipmap(O)}function F(O,w,te,Me,le=!1){if(c===!1)return w;if(O!==null){if(e[O]!==void 0)return e[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let me=w;if(w===e.RED&&(te===e.FLOAT&&(me=e.R32F),te===e.HALF_FLOAT&&(me=e.R16F),te===e.UNSIGNED_BYTE&&(me=e.R8)),w===e.RED_INTEGER&&(te===e.UNSIGNED_BYTE&&(me=e.R8UI),te===e.UNSIGNED_SHORT&&(me=e.R16UI),te===e.UNSIGNED_INT&&(me=e.R32UI),te===e.BYTE&&(me=e.R8I),te===e.SHORT&&(me=e.R16I),te===e.INT&&(me=e.R32I)),w===e.RG&&(te===e.FLOAT&&(me=e.RG32F),te===e.HALF_FLOAT&&(me=e.RG16F),te===e.UNSIGNED_BYTE&&(me=e.RG8)),w===e.RGBA){const je=le?no:Rt.getTransfer(Me);te===e.FLOAT&&(me=e.RGBA32F),te===e.HALF_FLOAT&&(me=e.RGBA16F),te===e.UNSIGNED_BYTE&&(me=je===Vt?e.SRGB8_ALPHA8:e.RGBA8),te===e.UNSIGNED_SHORT_4_4_4_4&&(me=e.RGBA4),te===e.UNSIGNED_SHORT_5_5_5_1&&(me=e.RGB5_A1)}return(me===e.R16F||me===e.R32F||me===e.RG16F||me===e.RG32F||me===e.RGBA16F||me===e.RGBA32F)&&t.get("EXT_color_buffer_float"),me}function H(O,w,te){return b(O,te)===!0||O.isFramebufferTexture&&O.minFilter!==an&&O.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function D(O){return O===an||O===da||O===Ar?e.NEAREST:e.LINEAR}function G(O){const w=O.target;w.removeEventListener("dispose",G),C(w),w.isVideoTexture&&f.delete(w)}function q(O){const w=O.target;w.removeEventListener("dispose",q),ee(w)}function C(O){const w=r.get(O);if(w.__webglInit===void 0)return;const te=O.source,Me=m.get(te);if(Me){const le=Me[w.__cacheKey];le.usedTimes--,le.usedTimes===0&&P(O),Object.keys(Me).length===0&&m.delete(te)}r.remove(O)}function P(O){const w=r.get(O);e.deleteTexture(w.__webglTexture);const te=O.source,Me=m.get(te);delete Me[w.__cacheKey],l.memory.textures--}function ee(O){const w=O.texture,te=r.get(O),Me=r.get(w);if(Me.__webglTexture!==void 0&&(e.deleteTexture(Me.__webglTexture),l.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(te.__webglFramebuffer[le]))for(let me=0;me<te.__webglFramebuffer[le].length;me++)e.deleteFramebuffer(te.__webglFramebuffer[le][me]);else e.deleteFramebuffer(te.__webglFramebuffer[le]);te.__webglDepthbuffer&&e.deleteRenderbuffer(te.__webglDepthbuffer[le])}else{if(Array.isArray(te.__webglFramebuffer))for(let le=0;le<te.__webglFramebuffer.length;le++)e.deleteFramebuffer(te.__webglFramebuffer[le]);else e.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&e.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&e.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let le=0;le<te.__webglColorRenderbuffer.length;le++)te.__webglColorRenderbuffer[le]&&e.deleteRenderbuffer(te.__webglColorRenderbuffer[le]);te.__webglDepthRenderbuffer&&e.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let le=0,me=w.length;le<me;le++){const je=r.get(w[le]);je.__webglTexture&&(e.deleteTexture(je.__webglTexture),l.memory.textures--),r.remove(w[le])}r.remove(w),r.remove(O)}let ce=0;function ge(){ce=0}function X(){const O=ce;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),ce+=1,O}function K(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function Z(O,w){const te=r.get(O);if(O.isVideoTexture&&yt(O),O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){const Me=O.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(te,O,w);return}}n.bindTexture(e.TEXTURE_2D,te.__webglTexture,e.TEXTURE0+w)}function ye(O,w){const te=r.get(O);if(O.version>0&&te.__version!==O.version){Le(te,O,w);return}n.bindTexture(e.TEXTURE_2D_ARRAY,te.__webglTexture,e.TEXTURE0+w)}function ue(O,w){const te=r.get(O);if(O.version>0&&te.__version!==O.version){Le(te,O,w);return}n.bindTexture(e.TEXTURE_3D,te.__webglTexture,e.TEXTURE0+w)}function he(O,w){const te=r.get(O);if(O.version>0&&te.__version!==O.version){qe(te,O,w);return}n.bindTexture(e.TEXTURE_CUBE_MAP,te.__webglTexture,e.TEXTURE0+w)}const _e={[xi]:e.REPEAT,[Bn]:e.CLAMP_TO_EDGE,[eo]:e.MIRRORED_REPEAT},ve={[an]:e.NEAREST,[da]:e.NEAREST_MIPMAP_NEAREST,[Ar]:e.NEAREST_MIPMAP_LINEAR,[Rn]:e.LINEAR,[jl]:e.LINEAR_MIPMAP_NEAREST,[bi]:e.LINEAR_MIPMAP_LINEAR},Q={[Xf]:e.NEVER,[Jf]:e.ALWAYS,[qf]:e.LESS,[Nc]:e.LEQUAL,[Yf]:e.EQUAL,[$f]:e.GEQUAL,[jf]:e.GREATER,[Kf]:e.NOTEQUAL};function fe(O,w,te){if(te?(e.texParameteri(O,e.TEXTURE_WRAP_S,_e[w.wrapS]),e.texParameteri(O,e.TEXTURE_WRAP_T,_e[w.wrapT]),(O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY)&&e.texParameteri(O,e.TEXTURE_WRAP_R,_e[w.wrapR]),e.texParameteri(O,e.TEXTURE_MAG_FILTER,ve[w.magFilter]),e.texParameteri(O,e.TEXTURE_MIN_FILTER,ve[w.minFilter])):(e.texParameteri(O,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(O,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY)&&e.texParameteri(O,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(w.wrapS!==Bn||w.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(O,e.TEXTURE_MAG_FILTER,D(w.magFilter)),e.texParameteri(O,e.TEXTURE_MIN_FILTER,D(w.minFilter)),w.minFilter!==an&&w.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(e.texParameteri(O,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(O,e.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Me=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===an||w.minFilter!==Ar&&w.minFilter!==bi||w.type===Ti&&t.has("OES_texture_float_linear")===!1||c===!1&&w.type===Ei&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(e.texParameterf(O,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function Ce(O,w){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",G));const Me=w.source;let le=m.get(Me);le===void 0&&(le={},m.set(Me,le));const me=K(w);if(me!==O.__cacheKey){le[me]===void 0&&(le[me]={texture:e.createTexture(),usedTimes:0},l.memory.textures++,te=!0),le[me].usedTimes++;const je=le[O.__cacheKey];je!==void 0&&(le[O.__cacheKey].usedTimes--,je.usedTimes===0&&P(w)),O.__cacheKey=me,O.__webglTexture=le[me].texture}return te}function Le(O,w,te){let Me=e.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Me=e.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Me=e.TEXTURE_3D);const le=Ce(O,w),me=w.source;n.bindTexture(Me,O.__webglTexture,e.TEXTURE0+te);const je=r.get(me);if(me.version!==je.__version||le===!0){n.activeTexture(e.TEXTURE0+te);const Re=Rt.getPrimaries(Rt.workingColorSpace),De=w.colorSpace===$n?null:Rt.getPrimaries(w.colorSpace),Se=w.colorSpace===$n||Re===De?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const lt=_(w)&&M(w.image)===!1;let pe=S(w.image,lt,!1,s.maxTextureSize);pe=at(w,pe);const jt=M(pe)||c,Mt=o.convert(w.format,w.colorSpace);let Qe=o.convert(w.type),Fe=F(w.internalFormat,Mt,Qe,w.colorSpace,w.isVideoTexture);fe(Me,w,jt);let ke;const vt=w.mipmaps,Dt=c&&w.isVideoTexture!==!0&&Fe!==sc,St=je.__version===void 0||le===!0,Ct=H(w,pe,jt);if(w.isDepthTexture)Fe=e.DEPTH_COMPONENT,c?w.type===Ti?Fe=e.DEPTH_COMPONENT32F:w.type===Hi?Fe=e.DEPTH_COMPONENT24:w.type===rr?Fe=e.DEPTH24_STENCIL8:Fe=e.DEPTH_COMPONENT16:w.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===sr&&Fe===e.DEPTH_COMPONENT&&w.type!==pa&&w.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Hi,Qe=o.convert(w.type)),w.format===wr&&Fe===e.DEPTH_COMPONENT&&(Fe=e.DEPTH_STENCIL,w.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=rr,Qe=o.convert(w.type))),St&&(Dt?n.texStorage2D(e.TEXTURE_2D,1,Fe,pe.width,pe.height):n.texImage2D(e.TEXTURE_2D,0,Fe,pe.width,pe.height,0,Mt,Qe,null));else if(w.isDataTexture)if(vt.length>0&&jt){Dt&&St&&n.texStorage2D(e.TEXTURE_2D,Ct,Fe,vt[0].width,vt[0].height);for(let be=0,W=vt.length;be<W;be++)ke=vt[be],Dt?n.texSubImage2D(e.TEXTURE_2D,be,0,0,ke.width,ke.height,Mt,Qe,ke.data):n.texImage2D(e.TEXTURE_2D,be,Fe,ke.width,ke.height,0,Mt,Qe,ke.data);w.generateMipmaps=!1}else Dt?(St&&n.texStorage2D(e.TEXTURE_2D,Ct,Fe,pe.width,pe.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,pe.width,pe.height,Mt,Qe,pe.data)):n.texImage2D(e.TEXTURE_2D,0,Fe,pe.width,pe.height,0,Mt,Qe,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Dt&&St&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ct,Fe,vt[0].width,vt[0].height,pe.depth);for(let be=0,W=vt.length;be<W;be++)ke=vt[be],w.format!==Kn?Mt!==null?Dt?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,be,0,0,0,ke.width,ke.height,pe.depth,Mt,ke.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,be,Fe,ke.width,ke.height,pe.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?n.texSubImage3D(e.TEXTURE_2D_ARRAY,be,0,0,0,ke.width,ke.height,pe.depth,Mt,Qe,ke.data):n.texImage3D(e.TEXTURE_2D_ARRAY,be,Fe,ke.width,ke.height,pe.depth,0,Mt,Qe,ke.data)}else{Dt&&St&&n.texStorage2D(e.TEXTURE_2D,Ct,Fe,vt[0].width,vt[0].height);for(let be=0,W=vt.length;be<W;be++)ke=vt[be],w.format!==Kn?Mt!==null?Dt?n.compressedTexSubImage2D(e.TEXTURE_2D,be,0,0,ke.width,ke.height,Mt,ke.data):n.compressedTexImage2D(e.TEXTURE_2D,be,Fe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?n.texSubImage2D(e.TEXTURE_2D,be,0,0,ke.width,ke.height,Mt,Qe,ke.data):n.texImage2D(e.TEXTURE_2D,be,Fe,ke.width,ke.height,0,Mt,Qe,ke.data)}else if(w.isDataArrayTexture)Dt?(St&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ct,Fe,pe.width,pe.height,pe.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Mt,Qe,pe.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,Fe,pe.width,pe.height,pe.depth,0,Mt,Qe,pe.data);else if(w.isData3DTexture)Dt?(St&&n.texStorage3D(e.TEXTURE_3D,Ct,Fe,pe.width,pe.height,pe.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Mt,Qe,pe.data)):n.texImage3D(e.TEXTURE_3D,0,Fe,pe.width,pe.height,pe.depth,0,Mt,Qe,pe.data);else if(w.isFramebufferTexture){if(St)if(Dt)n.texStorage2D(e.TEXTURE_2D,Ct,Fe,pe.width,pe.height);else{let be=pe.width,W=pe.height;for(let we=0;we<Ct;we++)n.texImage2D(e.TEXTURE_2D,we,Fe,be,W,0,Mt,Qe,null),be>>=1,W>>=1}}else if(vt.length>0&&jt){Dt&&St&&n.texStorage2D(e.TEXTURE_2D,Ct,Fe,vt[0].width,vt[0].height);for(let be=0,W=vt.length;be<W;be++)ke=vt[be],Dt?n.texSubImage2D(e.TEXTURE_2D,be,0,0,Mt,Qe,ke):n.texImage2D(e.TEXTURE_2D,be,Fe,Mt,Qe,ke);w.generateMipmaps=!1}else Dt?(St&&n.texStorage2D(e.TEXTURE_2D,Ct,Fe,pe.width,pe.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,Mt,Qe,pe)):n.texImage2D(e.TEXTURE_2D,0,Fe,Mt,Qe,pe);b(w,jt)&&A(Me),je.__version=me.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function qe(O,w,te){if(w.image.length!==6)return;const Me=Ce(O,w),le=w.source;n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+te);const me=r.get(le);if(le.version!==me.__version||Me===!0){n.activeTexture(e.TEXTURE0+te);const je=Rt.getPrimaries(Rt.workingColorSpace),Re=w.colorSpace===$n?null:Rt.getPrimaries(w.colorSpace),De=w.colorSpace===$n||je===Re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Se=w.isCompressedTexture||w.image[0].isCompressedTexture,lt=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let be=0;be<6;be++)!Se&&!lt?pe[be]=S(w.image[be],!1,!0,s.maxCubemapSize):pe[be]=lt?w.image[be].image:w.image[be],pe[be]=at(w,pe[be]);const jt=pe[0],Mt=M(jt)||c,Qe=o.convert(w.format,w.colorSpace),Fe=o.convert(w.type),ke=F(w.internalFormat,Qe,Fe,w.colorSpace),vt=c&&w.isVideoTexture!==!0,Dt=me.__version===void 0||Me===!0;let St=H(w,jt,Mt);fe(e.TEXTURE_CUBE_MAP,w,Mt);let Ct;if(Se){vt&&Dt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,St,ke,jt.width,jt.height);for(let be=0;be<6;be++){Ct=pe[be].mipmaps;for(let W=0;W<Ct.length;W++){const we=Ct[W];w.format!==Kn?Qe!==null?vt?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,W,0,0,we.width,we.height,Qe,we.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,W,ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,W,0,0,we.width,we.height,Qe,Fe,we.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,W,ke,we.width,we.height,0,Qe,Fe,we.data)}}}else{Ct=w.mipmaps,vt&&Dt&&(Ct.length>0&&St++,n.texStorage2D(e.TEXTURE_CUBE_MAP,St,ke,pe[0].width,pe[0].height));for(let be=0;be<6;be++)if(lt){vt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,pe[be].width,pe[be].height,Qe,Fe,pe[be].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ke,pe[be].width,pe[be].height,0,Qe,Fe,pe[be].data);for(let W=0;W<Ct.length;W++){const Pe=Ct[W].image[be].image;vt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,W+1,0,0,Pe.width,Pe.height,Qe,Fe,Pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,W+1,ke,Pe.width,Pe.height,0,Qe,Fe,Pe.data)}}else{vt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Qe,Fe,pe[be]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ke,Qe,Fe,pe[be]);for(let W=0;W<Ct.length;W++){const we=Ct[W];vt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,W+1,0,0,Qe,Fe,we.image[be]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,W+1,ke,Qe,Fe,we.image[be])}}}b(w,Mt)&&A(e.TEXTURE_CUBE_MAP),me.__version=le.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function tt(O,w,te,Me,le,me){const je=o.convert(te.format,te.colorSpace),Re=o.convert(te.type),De=F(te.internalFormat,je,Re,te.colorSpace);if(!r.get(w).__hasExternalTextures){const lt=Math.max(1,w.width>>me),pe=Math.max(1,w.height>>me);le===e.TEXTURE_3D||le===e.TEXTURE_2D_ARRAY?n.texImage3D(le,me,De,lt,pe,w.depth,0,je,Re,null):n.texImage2D(le,me,De,lt,pe,0,je,Re,null)}n.bindFramebuffer(e.FRAMEBUFFER,O),Ke(w)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Me,le,r.get(te).__webglTexture,0,Ze(w)):(le===e.TEXTURE_2D||le>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Me,le,r.get(te).__webglTexture,me),n.bindFramebuffer(e.FRAMEBUFFER,null)}function pt(O,w,te){if(e.bindRenderbuffer(e.RENDERBUFFER,O),w.depthBuffer&&!w.stencilBuffer){let Me=c===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(te||Ke(w)){const le=w.depthTexture;le&&le.isDepthTexture&&(le.type===Ti?Me=e.DEPTH_COMPONENT32F:le.type===Hi&&(Me=e.DEPTH_COMPONENT24));const me=Ze(w);Ke(w)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me,Me,w.width,w.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,me,Me,w.width,w.height)}else e.renderbufferStorage(e.RENDERBUFFER,Me,w.width,w.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,O)}else if(w.depthBuffer&&w.stencilBuffer){const Me=Ze(w);te&&Ke(w)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me,e.DEPTH24_STENCIL8,w.width,w.height):Ke(w)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me,e.DEPTH24_STENCIL8,w.width,w.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,O)}else{const Me=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let le=0;le<Me.length;le++){const me=Me[le],je=o.convert(me.format,me.colorSpace),Re=o.convert(me.type),De=F(me.internalFormat,je,Re,me.colorSpace),Se=Ze(w);te&&Ke(w)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se,De,w.width,w.height):Ke(w)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se,De,w.width,w.height):e.renderbufferStorage(e.RENDERBUFFER,De,w.width,w.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function nt(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const Me=r.get(w.depthTexture).__webglTexture,le=Ze(w);if(w.depthTexture.format===sr)Ke(w)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Me,0,le):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Me,0);else if(w.depthTexture.format===wr)Ke(w)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Me,0,le):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Tt(O){const w=r.get(O),te=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");nt(w.__webglFramebuffer,O)}else if(te){w.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)n.bindFramebuffer(e.FRAMEBUFFER,w.__webglFramebuffer[Me]),w.__webglDepthbuffer[Me]=e.createRenderbuffer(),pt(w.__webglDepthbuffer[Me],O,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=e.createRenderbuffer(),pt(w.__webglDepthbuffer,O,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function J(O,w,te){const Me=r.get(O);w!==void 0&&tt(Me.__webglFramebuffer,O,O.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),te!==void 0&&Tt(O)}function tn(O){const w=O.texture,te=r.get(O),Me=r.get(w);O.addEventListener("dispose",q),O.isWebGLMultipleRenderTargets!==!0&&(Me.__webglTexture===void 0&&(Me.__webglTexture=e.createTexture()),Me.__version=w.version,l.memory.textures++);const le=O.isWebGLCubeRenderTarget===!0,me=O.isWebGLMultipleRenderTargets===!0,je=M(O)||c;if(le){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(c&&w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let De=0;De<w.mipmaps.length;De++)te.__webglFramebuffer[Re][De]=e.createFramebuffer()}else te.__webglFramebuffer[Re]=e.createFramebuffer()}else{if(c&&w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)te.__webglFramebuffer[Re]=e.createFramebuffer()}else te.__webglFramebuffer=e.createFramebuffer();if(me)if(s.drawBuffers){const Re=O.texture;for(let De=0,Se=Re.length;De<Se;De++){const lt=r.get(Re[De]);lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&O.samples>0&&Ke(O)===!1){const Re=me?w:[w];te.__webglMultisampledFramebuffer=e.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let De=0;De<Re.length;De++){const Se=Re[De];te.__webglColorRenderbuffer[De]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,te.__webglColorRenderbuffer[De]);const lt=o.convert(Se.format,Se.colorSpace),pe=o.convert(Se.type),jt=F(Se.internalFormat,lt,pe,Se.colorSpace,O.isXRRenderTarget===!0),Mt=Ze(O);e.renderbufferStorageMultisample(e.RENDERBUFFER,Mt,jt,O.width,O.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+De,e.RENDERBUFFER,te.__webglColorRenderbuffer[De])}e.bindRenderbuffer(e.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=e.createRenderbuffer(),pt(te.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(le){n.bindTexture(e.TEXTURE_CUBE_MAP,Me.__webglTexture),fe(e.TEXTURE_CUBE_MAP,w,je);for(let Re=0;Re<6;Re++)if(c&&w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)tt(te.__webglFramebuffer[Re][De],O,w,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,De);else tt(te.__webglFramebuffer[Re],O,w,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);b(w,je)&&A(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){const Re=O.texture;for(let De=0,Se=Re.length;De<Se;De++){const lt=Re[De],pe=r.get(lt);n.bindTexture(e.TEXTURE_2D,pe.__webglTexture),fe(e.TEXTURE_2D,lt,je),tt(te.__webglFramebuffer,O,lt,e.COLOR_ATTACHMENT0+De,e.TEXTURE_2D,0),b(lt,je)&&A(e.TEXTURE_2D)}n.unbindTexture()}else{let Re=e.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(c?Re=O.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Re,Me.__webglTexture),fe(Re,w,je),c&&w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)tt(te.__webglFramebuffer[De],O,w,e.COLOR_ATTACHMENT0,Re,De);else tt(te.__webglFramebuffer,O,w,e.COLOR_ATTACHMENT0,Re,0);b(w,je)&&A(Re),n.unbindTexture()}O.depthBuffer&&Tt(O)}function ut(O){const w=M(O)||c,te=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let Me=0,le=te.length;Me<le;Me++){const me=te[Me];if(b(me,w)){const je=O.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Re=r.get(me).__webglTexture;n.bindTexture(je,Re),A(je),n.unbindTexture()}}}function We(O){if(c&&O.samples>0&&Ke(O)===!1){const w=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],te=O.width,Me=O.height;let le=e.COLOR_BUFFER_BIT;const me=[],je=O.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Re=r.get(O),De=O.isWebGLMultipleRenderTargets===!0;if(De)for(let Se=0;Se<w.length;Se++)n.bindFramebuffer(e.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){me.push(e.COLOR_ATTACHMENT0+Se),O.depthBuffer&&me.push(je);const lt=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(lt===!1&&(O.depthBuffer&&(le|=e.DEPTH_BUFFER_BIT),O.stencilBuffer&&(le|=e.STENCIL_BUFFER_BIT)),De&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Re.__webglColorRenderbuffer[Se]),lt===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[je]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[je])),De){const pe=r.get(w[Se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,pe,0)}e.blitFramebuffer(0,0,te,Me,0,0,te,Me,le,e.NEAREST),u&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,me)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),De)for(let Se=0;Se<w.length;Se++){n.bindFramebuffer(e.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,Re.__webglColorRenderbuffer[Se]);const lt=r.get(w[Se]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,lt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function Ze(O){return Math.min(s.maxSamples,O.samples)}function Ke(O){const w=r.get(O);return c&&O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yt(O){const w=l.render.frame;f.get(O)!==w&&(f.set(O,w),O.update())}function at(O,w){const te=O.colorSpace,Me=O.format,le=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Ta||te!==vn&&te!==$n&&(Rt.getTransfer(te)===Vt?c===!1?t.has("EXT_sRGB")===!0&&Me===Kn?(O.format=Ta,O.minFilter=Rn,O.generateMipmaps=!1):w=kc.sRGBToLinear(w):(Me!==Kn||le!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),w}this.allocateTextureUnit=X,this.resetTextureUnits=ge,this.setTexture2D=Z,this.setTexture2DArray=ye,this.setTexture3D=ue,this.setTextureCube=he,this.rebindTextures=J,this.setupRenderTarget=tn,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Ke}function YM(e,t,n){const r=n.isWebGL2;function s(o,l=$n){let c;const h=Rt.getTransfer(l);if(o===Gi)return e.UNSIGNED_BYTE;if(o===$l)return e.UNSIGNED_SHORT_4_4_4_4;if(o===Jl)return e.UNSIGNED_SHORT_5_5_5_1;if(o===If)return e.BYTE;if(o===Df)return e.SHORT;if(o===pa)return e.UNSIGNED_SHORT;if(o===Kl)return e.INT;if(o===Hi)return e.UNSIGNED_INT;if(o===Ti)return e.FLOAT;if(o===Ei)return r?e.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===Nf)return e.ALPHA;if(o===Kn)return e.RGBA;if(o===Uf)return e.LUMINANCE;if(o===Of)return e.LUMINANCE_ALPHA;if(o===sr)return e.DEPTH_COMPONENT;if(o===wr)return e.DEPTH_STENCIL;if(o===Ta)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===Ff)return e.RED;if(o===Zl)return e.RED_INTEGER;if(o===Bf)return e.RG;if(o===Ql)return e.RG_INTEGER;if(o===ec)return e.RGBA_INTEGER;if(o===ma||o===ga||o===_a||o===va)if(h===Vt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===ma)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ga)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===_a)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===va)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===ma)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ga)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===_a)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===va)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===tc||o===nc||o===ic||o===rc)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===tc)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===nc)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ic)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===rc)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===sc)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===oc||o===ac)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(o===oc)return h===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===ac)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===lc||o===cc||o===hc||o===uc||o===fc||o===dc||o===pc||o===mc||o===gc||o===_c||o===vc||o===Mc||o===yc||o===Sc)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(o===lc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===cc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===hc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===uc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===fc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===dc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===pc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===mc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===gc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===_c)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===vc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Mc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===yc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Sc)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ma||o===xc||o===bc)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(o===Ma)return h===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===xc)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===bc)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===zf||o===Tc||o===Ec||o===Ac)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(o===Ma)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Tc)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Ec)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ac)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===rr?r?e.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):e[o]!==void 0?e[o]:null}return{convert:s}}function jM(e,t){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Lu(e)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function s(M,_,b,A,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(M,_):_.isMeshToonMaterial?(o(M,_),d(M,_)):_.isMeshPhongMaterial?(o(M,_),f(M,_)):_.isMeshStandardMaterial?(o(M,_),m(M,_),_.isMeshPhysicalMaterial&&v(M,_,F)):_.isMeshMatcapMaterial?(o(M,_),x(M,_)):_.isMeshDepthMaterial?o(M,_):_.isMeshDistanceMaterial?(o(M,_),S(M,_)):_.isMeshNormalMaterial?o(M,_):_.isLineBasicMaterial?(l(M,_),_.isLineDashedMaterial&&c(M,_)):_.isPointsMaterial?h(M,_,b,A):_.isSpriteMaterial?u(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Nn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Nn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const b=t.get(_).envMap;if(b&&(M.envMap.value=b,M.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap){M.lightMap.value=_.lightMap;const A=e._useLegacyLights===!0?Math.PI:1;M.lightMapIntensity.value=_.lightMapIntensity*A,n(_.lightMap,M.lightMapTransform)}_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function l(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function c(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function h(M,_,b,A){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*b,M.scale.value=A*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function u(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function f(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function d(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function m(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),t.get(_).envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function v(M,_,b){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Nn&&M.clearcoatNormalScale.value.negate())),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=b.texture,M.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function x(M,_){_.matcap&&(M.matcap.value=_.matcap)}function S(M,_){const b=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(b.matrixWorld),M.nearDistance.value=b.shadow.camera.near,M.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function KM(e,t,n,r){let s={},o={},l=[];const c=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(b,A){const F=A.program;r.uniformBlockBinding(b,F)}function u(b,A){let F=s[b.id];F===void 0&&(x(b),F=f(b),s[b.id]=F,b.addEventListener("dispose",M));const H=A.program;r.updateUBOMapping(b,H);const D=t.render.frame;o[b.id]!==D&&(m(b),o[b.id]=D)}function f(b){const A=d();b.__bindingPointIndex=A;const F=e.createBuffer(),H=b.__size,D=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,F),e.bufferData(e.UNIFORM_BUFFER,H,D),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,F),F}function d(){for(let b=0;b<c;b++)if(l.indexOf(b)===-1)return l.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const A=s[b.id],F=b.uniforms,H=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let D=0,G=F.length;D<G;D++){const q=Array.isArray(F[D])?F[D]:[F[D]];for(let C=0,P=q.length;C<P;C++){const ee=q[C];if(v(ee,D,C,H)===!0){const ce=ee.__offset,ge=Array.isArray(ee.value)?ee.value:[ee.value];let X=0;for(let K=0;K<ge.length;K++){const Z=ge[K],ye=S(Z);typeof Z=="number"||typeof Z=="boolean"?(ee.__data[0]=Z,e.bufferSubData(e.UNIFORM_BUFFER,ce+X,ee.__data)):Z.isMatrix3?(ee.__data[0]=Z.elements[0],ee.__data[1]=Z.elements[1],ee.__data[2]=Z.elements[2],ee.__data[3]=0,ee.__data[4]=Z.elements[3],ee.__data[5]=Z.elements[4],ee.__data[6]=Z.elements[5],ee.__data[7]=0,ee.__data[8]=Z.elements[6],ee.__data[9]=Z.elements[7],ee.__data[10]=Z.elements[8],ee.__data[11]=0):(Z.toArray(ee.__data,X),X+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,ce,ee.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(b,A,F,H){const D=b.value,G=A+"_"+F;if(H[G]===void 0)return typeof D=="number"||typeof D=="boolean"?H[G]=D:H[G]=D.clone(),!0;{const q=H[G];if(typeof D=="number"||typeof D=="boolean"){if(q!==D)return H[G]=D,!0}else if(q.equals(D)===!1)return q.copy(D),!0}return!1}function x(b){const A=b.uniforms;let F=0;const H=16;for(let G=0,q=A.length;G<q;G++){const C=Array.isArray(A[G])?A[G]:[A[G]];for(let P=0,ee=C.length;P<ee;P++){const ce=C[P],ge=Array.isArray(ce.value)?ce.value:[ce.value];for(let X=0,K=ge.length;X<K;X++){const Z=ge[X],ye=S(Z),ue=F%H;ue!==0&&H-ue<ye.boundary&&(F+=H-ue),ce.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=F,F+=ye.storage}}}const D=F%H;return D>0&&(F+=H-D),b.__size=F,b.__cache={},this}function S(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function M(b){const A=b.target;A.removeEventListener("dispose",M);const F=l.indexOf(A.__bindingPointIndex);l.splice(F,1),e.deleteBuffer(s[A.id]),delete s[A.id],delete o[A.id]}function _(){for(const b in s)e.deleteBuffer(s[b]);l=[],s={},o={}}return{bind:h,update:u,dispose:_}}function Xu(e,t,n,r,s,o,l){const c=$a.distanceSqToPoint(e);if(c<n){const h=new B;$a.closestPointToPoint(e,h),h.applyMatrix4(r);const u=s.ray.origin.distanceTo(h);if(u<s.near||u>s.far)return;o.push({distance:u,distanceToRay:Math.sqrt(c),point:h,index:t,face:null,object:l})}}function Bl(){let e=0,t=0,n=0,r=0;function s(o,l,c,h){e=o,t=c,n=-3*o+3*l-2*c-h,r=2*o-2*l+c+h}return{initCatmullRom:function(o,l,c,h,u){s(l,c,u*(c-o),u*(h-l))},initNonuniformCatmullRom:function(o,l,c,h,u,f,d){let m=(l-o)/u-(c-o)/(u+f)+(c-l)/f,v=(c-l)/f-(h-l)/(f+d)+(h-c)/d;m*=f,v*=f,s(l,c,m,v)},calc:function(o){const l=o*o,c=l*o;return e+t*o+n*l+r*c}}}function qu(e,t,n,r,s){const o=(r-t)*.5,l=(s-n)*.5,c=e*e,h=e*c;return(2*n-2*r+o+l)*h+(-3*n+3*r-2*o-l)*c+o*e+n}function $M(e,t){const n=1-e;return n*n*t}function JM(e,t){return 2*(1-e)*e*t}function ZM(e,t){return e*e*t}function $s(e,t,n,r){return $M(e,t)+JM(e,n)+ZM(e,r)}function QM(e,t){const n=1-e;return n*n*n*t}function ey(e,t){const n=1-e;return 3*n*n*e*t}function ty(e,t){return 3*(1-e)*e*e*t}function ny(e,t){return e*e*e*t}function Js(e,t,n,r,s){return QM(e,t)+ey(e,n)+ty(e,r)+ny(e,s)}function aa(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function iy(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ry(e){function t(s,o){return e[s]-e[o]}const n=e.length,r=new Array(n);for(let s=0;s!==n;++s)r[s]=s;return r.sort(t),r}function Yu(e,t,n){const r=e.length,s=new e.constructor(r);for(let o=0,l=0;l!==r;++o){const c=n[o]*t;for(let h=0;h!==t;++h)s[l++]=e[c+h]}return s}function ju(e,t,n,r){let s=1,o=e[0];for(;o!==void 0&&o[r]===void 0;)o=e[s++];if(o===void 0)return;let l=o[r];if(l!==void 0)if(Array.isArray(l))do l=o[r],l!==void 0&&(t.push(o.time),n.push.apply(n,l)),o=e[s++];while(o!==void 0);else if(l.toArray!==void 0)do l=o[r],l!==void 0&&(t.push(o.time),l.toArray(n,n.length)),o=e[s++];while(o!==void 0);else do l=o[r],l!==void 0&&(t.push(o.time),n.push(l)),o=e[s++];while(o!==void 0)}function sy(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $r;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return Xh;case"quaternion":return gr;case"bool":case"boolean":return Kr;case"string":return Jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function oy(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=sy(e.type);if(e.times===void 0){const n=[],r=[];ju(e.keys,n,r,"value"),e.times=n,e.values=r}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}function Ku(){return(typeof performance>"u"?Date:performance).now()}var la,$u,zl,Ju,kl,Zu,Mi,yi,Nn,zt,Si,br,on,Gl,Hl,Qu,ir,ef,tf,Vl,Wl,nf,rf,sf,of,ca,ha,af,lf,cf,hf,uf,ff,df,pf,mf,gf,_f,vf,Zs,Mf,yf,Sf,xf,Xl,bf,Tf,ki,Ef,Af,wf,Rf,Cf,Lf,ql,Pf,Yl,Tr,Er,ua,fa,Qs,xi,Bn,eo,an,da,Ar,Rn,jl,bi,Gi,If,Df,pa,Kl,Hi,Ti,Ei,$l,Jl,rr,Nf,Kn,Uf,Of,sr,wr,Ff,Zl,Bf,Ql,ec,ma,ga,_a,va,tc,nc,ic,rc,sc,oc,ac,lc,cc,hc,uc,fc,dc,pc,mc,gc,_c,vc,Mc,yc,Sc,Ma,xc,bc,zf,Tc,Ec,Ac,bs,Rr,ya,wc,Rc,Cc,kf,Gf,Lc,Sa,Pc,or,Hf,Vf,Ic,Wf,$n,Ot,vn,xa,to,no,Vt,io,ro,Cr,Dc,Xf,qf,Yf,Nc,jf,Kf,$f,Jf,ba,Uc,Ta,Ai,so,Lr,bn,Oc,Pr,Ir,Zf,Ne,xt,Ea,Fc,Bc,zc,oo,Qf,Rt,Ts,kc,ed,Gc,td,Un,Wt,nd,ni,Hc,id,wi,B,Aa,Vc,ln,Ri,ii,ao,Dr,Nr,Ur,Vi,Wi,ar,Es,lo,co,lr,rd,As,wa,ui,Ci,Ra,ho,Xi,Ca,uo,La,fo,ft,Or,ri,sd,od,qi,po,zn,Wc,Xc,qc,Yc,ad,jc,Fr,Li,mo,ws,ld,cd,Kc,$c,Jc,hd,ud,fn,si,Pi,Pa,Ii,Br,zr,Zc,Ia,Da,Na,go,Rs,Qc,Yi,_o,Je,Tn,fd,fi,ze,cn,vo,Qt,eh,th,It,dd,Jn,Ua,kr,kn,Cs,Mn,en,nh,cr,Mo,ih,Gr,Hr,Vr,Oa,yo,So,xo,bo,rh,sh,oh,To,Eo,re,Ge,Ao,pd,md,Gn,ah,Cn,Wr,Xr,gd,lh,_d,Fa,vd,Md,hr,ur,wo,Ba,ht,yd,Sd,xd,bd,Td,Ed,Ad,wd,Rd,Cd,Ld,Pd,Id,Dd,Nd,Ud,Od,Fd,Bd,zd,kd,Gd,Hd,Vd,Wd,Xd,qd,Yd,jd,Kd,$d,Jd,Zd,Qd,ep,tp,np,ip,rp,sp,op,ap,lp,cp,hp,up,fp,dp,pp,mp,gp,_p,vp,Mp,yp,Sp,xp,bp,Tp,Ep,Ap,wp,Rp,Cp,Lp,Pp,Ip,Dp,Np,Up,Op,Fp,Bp,zp,kp,Gp,Hp,Vp,Wp,Xp,qp,Yp,jp,Kp,$p,Jp,Zp,Qp,em,tm,nm,im,rm,sm,om,am,lm,cm,hm,um,fm,dm,pm,mm,gm,_m,vm,Mm,ym,Sm,xm,bm,Tm,Em,Am,wm,Rm,Cm,Lm,Pm,Im,Dm,Nm,Um,Om,Fm,Bm,zm,km,Gm,Hm,Vm,Wm,Xm,qm,Ym,jm,Km,$m,Jm,Zm,dt,Te,di,Ro,Co,qr,ch,fr,za,hh,ka,Ga,Ha,dr,Yr,uh,fh,dh,ph,mh,gh,_h,vh,Mh,yh,Sh,xh,bh,Qm,e0,t0,Va,Lo,n0,i0,r0,s0,o0,a0,l0,c0,h0,u0,f0,d0,p0,m0,kt,g0,Wa,_0,Th,v0,M0,y0,S0,Ln,x0,Eh,Ah,wh,b0,Rh,Po,Xa,Ch,qa,T0,Lh,E0,Ph,A0,w0,Ya,jr,Ih,Io,Dh,R0,Ls,Ps,C0,pr,Nh,Uh,Oh,ja,Do,No,Fh,Bh,Hn,L0,Ka,zh,$a,Uo,Oo,kh,Di,Ni,Gh,P0,Fo,Ja,Za,Qa,Hh,I0,D0,N0,U0,O0,Vh,F0,B0,On,z0,k0,Bo,zo,el,ko,pi,Wh,mr,Is,G0,tl,Ui,Ds,H0,V0,W0,mi,Kr,Xh,$r,X0,gr,Jr,Zr,q0,ji,Y0,j0,Qr,Oi,K0,qh,$0,Yh,nl,il,jh,Kh,rl,J0,Z0,$h,Ns,sl,Q0,eg,tg,ng,Us,ig,rg,ol,sg,al,og,ag,lg,cg,hg,ug,fg,dg,$t,ay,Ki=ci({"node_modules/three/build/three.module.js"(){la="160",$u=0,zl=1,Ju=2,kl=1,Zu=2,Mi=3,yi=0,Nn=1,zt=2,Si=0,br=1,on=2,Gl=3,Hl=4,Qu=5,ir=100,ef=101,tf=102,Vl=103,Wl=104,nf=200,rf=201,sf=202,of=203,ca=204,ha=205,af=206,lf=207,cf=208,hf=209,uf=210,ff=211,df=212,pf=213,mf=214,gf=0,_f=1,vf=2,Zs=3,Mf=4,yf=5,Sf=6,xf=7,Xl=0,bf=1,Tf=2,ki=0,Ef=1,Af=2,wf=3,Rf=4,Cf=5,Lf=6,ql="attached",Pf="detached",Yl=300,Tr=301,Er=302,ua=303,fa=304,Qs=306,xi=1e3,Bn=1001,eo=1002,an=1003,da=1004,Ar=1005,Rn=1006,jl=1007,bi=1008,Gi=1009,If=1010,Df=1011,pa=1012,Kl=1013,Hi=1014,Ti=1015,Ei=1016,$l=1017,Jl=1018,rr=1020,Nf=1021,Kn=1023,Uf=1024,Of=1025,sr=1026,wr=1027,Ff=1028,Zl=1029,Bf=1030,Ql=1031,ec=1033,ma=33776,ga=33777,_a=33778,va=33779,tc=35840,nc=35841,ic=35842,rc=35843,sc=36196,oc=37492,ac=37496,lc=37808,cc=37809,hc=37810,uc=37811,fc=37812,dc=37813,pc=37814,mc=37815,gc=37816,_c=37817,vc=37818,Mc=37819,yc=37820,Sc=37821,Ma=36492,xc=36494,bc=36495,zf=36283,Tc=36284,Ec=36285,Ac=36286,bs=2300,Rr=2301,ya=2302,wc=2400,Rc=2401,Cc=2402,kf=2500,Gf=0,Lc=1,Sa=2,Pc=3e3,or=3001,Hf=3200,Vf=3201,Ic=0,Wf=1,$n="",Ot="srgb",vn="srgb-linear",xa="display-p3",to="display-p3-linear",no="linear",Vt="srgb",io="rec709",ro="p3",Cr=7680,Dc=519,Xf=512,qf=513,Yf=514,Nc=515,jf=516,Kf=517,$f=518,Jf=519,ba=35044,Uc="300 es",Ta=1035,Ai=2e3,so=2001,Lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oc=1234567,Pr=Math.PI/180,Ir=180/Math.PI,Zf={DEG2RAD:Pr,RAD2DEG:Ir,generateUUID:hi,clamp:yn,euclideanModulo:Ll,mapLinear:J_,inverseLerp:Z_,lerp:Ys,damp:Q_,pingpong:ev,smoothstep:tv,smootherstep:nv,randInt:iv,randFloat:rv,randFloatSpread:sv,seededRandom:ov,degToRad:av,radToDeg:lv,isPowerOfTwo:Pl,ceilPowerOfTwo:cv,floorPowerOfTwo:ia,setQuaternionFromProperEuler:hv,normalize:Ut,denormalize:vi},Ne=class I_{constructor(t=0,n=0){I_.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,s=t.elements;return this.x=s[0]*n+s[3]*r+s[6],this.y=s[1]*n+s[4]*r+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(yn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),s=Math.sin(n),o=this.x-t.x,l=this.y-t.y;return this.x=o*r-l*s+t.x,this.y=o*s+l*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xt=class D_{constructor(t,n,r,s,o,l,c,h,u){D_.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,s,o,l,c,h,u)}set(t,n,r,s,o,l,c,h,u){const f=this.elements;return f[0]=t,f[1]=s,f[2]=c,f[3]=n,f[4]=o,f[5]=h,f[6]=r,f[7]=l,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,s=n.elements,o=this.elements,l=r[0],c=r[3],h=r[6],u=r[1],f=r[4],d=r[7],m=r[2],v=r[5],x=r[8],S=s[0],M=s[3],_=s[6],b=s[1],A=s[4],F=s[7],H=s[2],D=s[5],G=s[8];return o[0]=l*S+c*b+h*H,o[3]=l*M+c*A+h*D,o[6]=l*_+c*F+h*G,o[1]=u*S+f*b+d*H,o[4]=u*M+f*A+d*D,o[7]=u*_+f*F+d*G,o[2]=m*S+v*b+x*H,o[5]=m*M+v*A+x*D,o[8]=m*_+v*F+x*G,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],s=t[2],o=t[3],l=t[4],c=t[5],h=t[6],u=t[7],f=t[8];return n*l*f-n*c*u-r*o*f+r*c*h+s*o*u-s*l*h}invert(){const t=this.elements,n=t[0],r=t[1],s=t[2],o=t[3],l=t[4],c=t[5],h=t[6],u=t[7],f=t[8],d=f*l-c*u,m=c*h-f*o,v=u*o-l*h,x=n*d+r*m+s*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=d*S,t[1]=(s*u-f*r)*S,t[2]=(c*r-s*l)*S,t[3]=m*S,t[4]=(f*n-s*h)*S,t[5]=(s*o-c*n)*S,t[6]=v*S,t[7]=(r*h-u*n)*S,t[8]=(l*n-r*o)*S,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,s,o,l,c){const h=Math.cos(o),u=Math.sin(o);return this.set(r*h,r*u,-r*(h*l+u*c)+l+t,-s*u,s*h,-s*(-u*l+h*c)+c+n,0,0,1),this}scale(t,n){return this.premultiply(Ea.makeScale(t,n)),this}rotate(t){return this.premultiply(Ea.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ea.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let s=0;s<9;s++)if(n[s]!==r[s])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ea=new xt,Fc={},Bc=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zc=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[vn]:{transfer:no,primaries:io,toReference:e=>e,fromReference:e=>e},[Ot]:{transfer:Vt,primaries:io,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[to]:{transfer:no,primaries:ro,toReference:e=>e.applyMatrix3(zc),fromReference:e=>e.applyMatrix3(Bc)},[xa]:{transfer:Vt,primaries:ro,toReference:e=>e.convertSRGBToLinear().applyMatrix3(zc),fromReference:e=>e.applyMatrix3(Bc).convertLinearToSRGB()}},Qf=new Set([vn,to]),Rt={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Qf.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const r=oo[t].toReference,s=oo[n].fromReference;return s(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return oo[e].primaries},getTransfer:function(e){return e===$n?no:oo[e].transfer}},kc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=js("canvas")),Ts.width=e.width,Ts.height=e.height;const n=Ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ed=0,Gc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(Dl(r[o].image)):s.push(Dl(r[o]))}else s=Dl(r);n.url=s}return t||(e.images[this.uuid]=n),n}},td=0,Un=class Rl extends Lr{constructor(t=Rl.DEFAULT_IMAGE,n=Rl.DEFAULT_MAPPING,r=Bn,s=Bn,o=Rn,l=bi,c=Kn,h=Gi,u=Rl.DEFAULT_ANISOTROPY,f=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=hi(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===or?Ot:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xi:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xi:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?or:Pc}set encoding(t){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===or?Ot:$n}},Un.DEFAULT_IMAGE=null,Un.DEFAULT_MAPPING=Yl,Un.DEFAULT_ANISOTROPY=1,Wt=class N_{constructor(t=0,n=0,r=0,s=1){N_.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,s){return this.x=t,this.y=n,this.z=r,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,s=this.z,o=this.w,l=t.elements;return this.x=l[0]*n+l[4]*r+l[8]*s+l[12]*o,this.y=l[1]*n+l[5]*r+l[9]*s+l[13]*o,this.z=l[2]*n+l[6]*r+l[10]*s+l[14]*o,this.w=l[3]*n+l[7]*r+l[11]*s+l[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,s,o;const h=t.elements,u=h[0],f=h[4],d=h[8],m=h[1],v=h[5],x=h[9],S=h[2],M=h[6],_=h[10];if(Math.abs(f-m)<.01&&Math.abs(d-S)<.01&&Math.abs(x-M)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+S)<.1&&Math.abs(x+M)<.1&&Math.abs(u+v+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(u+1)/2,F=(v+1)/2,H=(_+1)/2,D=(f+m)/4,G=(d+S)/4,q=(x+M)/4;return A>F&&A>H?A<.01?(r=0,s=.707106781,o=.707106781):(r=Math.sqrt(A),s=D/r,o=G/r):F>H?F<.01?(r=.707106781,s=0,o=.707106781):(s=Math.sqrt(F),r=D/s,o=q/s):H<.01?(r=.707106781,s=.707106781,o=0):(o=Math.sqrt(H),r=G/o,s=q/o),this.set(r,s,o,n),this}let b=Math.sqrt((M-x)*(M-x)+(d-S)*(d-S)+(m-f)*(m-f));return Math.abs(b)<.001&&(b=1),this.x=(M-x)/b,this.y=(d-S)/b,this.z=(m-f)/b,this.w=Math.acos((u+v+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nd=class extends Lr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===or?Ot:$n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Un(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends nd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hc=class extends Un{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},id=class extends Un{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,l){let c=n[r+0],h=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(l===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f;return}if(l===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(f!==x||c!==d||h!==m||u!==v){let S=1-l;const M=c*d+h*m+u*v+f*x,_=M>=0?1:-1,b=1-M*M;if(b>Number.EPSILON){const F=Math.sqrt(b),H=Math.atan2(F,M*_);S=Math.sin(S*H)/F,l=Math.sin(l*H)/F}const A=l*_;if(c=c*S+d*A,h=h*S+m*A,u=u*S+v*A,f=f*S+x*A,S===1-l){const F=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=F,h*=F,u*=F,f*=F}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const l=n[r],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=l*v+u*f+c*m-h*d,e[t+1]=c*v+u*d+h*f-l*m,e[t+2]=h*v+u*m+l*d-c*f,e[t+3]=u*v-l*f-c*d-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,h=l(n/2),u=l(r/2),f=l(s/2),d=c(n/2),m=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=d*u*f+h*m*v,this._y=h*m*f-d*u*v,this._z=h*u*v+d*m*f,this._w=h*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+h*m*v,this._y=h*m*f-d*u*v,this._z=h*u*v-d*m*f,this._w=h*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-h*m*v,this._y=h*m*f+d*u*v,this._z=h*u*v+d*m*f,this._w=h*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-h*m*v,this._y=h*m*f+d*u*v,this._z=h*u*v-d*m*f,this._w=h*u*f+d*m*v;break;case"YZX":this._x=d*u*f+h*m*v,this._y=h*m*f+d*u*v,this._z=h*u*v-d*m*f,this._w=h*u*f-d*m*v;break;case"XZY":this._x=d*u*f-h*m*v,this._y=h*m*f-d*u*v,this._z=h*u*v+d*m*f,this._w=h*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],l=t[5],c=t[9],h=t[2],u=t[6],f=t[10],d=n+l+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-h)*m,this._z=(o-r)*m}else if(n>l&&n>f){const m=2*Math.sqrt(1+n-l-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+h)/m}else if(l>f){const m=2*Math.sqrt(1+l-n-f);this._w=(s-h)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-l);this._w=(o-r)/m,this._x=(s+h)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,l=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+o*l+r*h-s*c,this._y=r*u+o*c+s*l-n*h,this._z=s*u+o*h+n*c-r*l,this._w=o*u-n*l-r*c-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,l),f=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class U_{constructor(t=0,n=0,r=0){U_.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Vc.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,s=this.z,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6]*s,this.y=o[1]*n+o[4]*r+o[7]*s,this.z=o[2]*n+o[5]*r+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,s=this.z,o=t.elements,l=1/(o[3]*n+o[7]*r+o[11]*s+o[15]);return this.x=(o[0]*n+o[4]*r+o[8]*s+o[12])*l,this.y=(o[1]*n+o[5]*r+o[9]*s+o[13])*l,this.z=(o[2]*n+o[6]*r+o[10]*s+o[14])*l,this}applyQuaternion(t){const n=this.x,r=this.y,s=this.z,o=t.x,l=t.y,c=t.z,h=t.w,u=2*(l*s-c*r),f=2*(c*n-o*s),d=2*(o*r-l*n);return this.x=n+h*u+l*d-c*f,this.y=r+h*f+c*u-o*d,this.z=s+h*d+o*f-l*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,s=this.z,o=t.elements;return this.x=o[0]*n+o[4]*r+o[8]*s,this.y=o[1]*n+o[5]*r+o[9]*s,this.z=o[2]*n+o[6]*r+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,s=t.y,o=t.z,l=n.x,c=n.y,h=n.z;return this.x=s*h-o*c,this.y=o*l-r*h,this.z=r*c-s*l,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(yn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,s=this.z-t.z;return n*n+r*r+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const s=Math.sin(n)*t;return this.x=s*Math.sin(r),this.y=Math.cos(n)*t,this.z=s*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Aa=new B,Vc=new wi,ln=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),lo.subVectors(this.max,Es),Dr.subVectors(e.a,Es),Nr.subVectors(e.b,Es),Ur.subVectors(e.c,Es),Vi.subVectors(Nr,Dr),Wi.subVectors(Ur,Nr),ar.subVectors(Dr,Ur);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-ar.z,ar.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,ar.z,0,-ar.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-ar.y,ar.x,0];return!Nl(t,Dr,Nr,Ur,lo)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Dr,Nr,Ur,lo))?!1:(co.crossVectors(Vi,Wi),t=[co.x,co.y,co.z],Nl(t,Dr,Nr,Ur,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ri=[new B,new B,new B,new B,new B,new B,new B,new B],ii=new B,ao=new ln,Dr=new B,Nr=new B,Ur=new B,Vi=new B,Wi=new B,ar=new B,Es=new B,lo=new B,co=new B,lr=new B,rd=new ln,As=new B,wa=new B,ui=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(As,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(wa)),this.expandByPoint(As.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new B,Ra=new B,ho=new B,Xi=new B,Ca=new B,uo=new B,La=new B,fo=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ra.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Ra);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ho),l=Xi.dot(this.direction),c=-Xi.dot(ho),h=Xi.lengthSq(),u=Math.abs(1-o*o);let f,d,m,v;if(u>0)if(f=o*c-l,d=o*l-c,v=s*u,f>=0)if(d>=-v)if(d<=v){const x=1/u;f*=x,d*=x,m=f*(f+o*d+2*l)+d*(o*f+d+2*c)+h}else d=s,f=Math.max(0,-(o*d+l)),m=-f*f+d*(d+2*c)+h;else d=-s,f=Math.max(0,-(o*d+l)),m=-f*f+d*(d+2*c)+h;else d<=-v?(f=Math.max(0,-(-o*s+l)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+h):d<=v?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+h):(f=Math.max(0,-(o*s+l)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+h);else d=o>0?-s:s,f=Math.max(0,-(o*d+l)),m=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ra).addScaledVector(ho,d),m}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),r=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,l,c;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,r=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,r=(e.min.x-d.x)*h),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(l=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(l=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,r,s){Ca.subVectors(t,e),uo.subVectors(n,e),La.crossVectors(Ca,uo);let o=this.direction.dot(La),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const c=l*this.direction.dot(uo.crossVectors(Xi,uo));if(c<0)return null;const h=l*this.direction.dot(Ca.cross(Xi));if(h<0||c+h>o)return null;const u=-l*Xi.dot(La);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class Au{constructor(t,n,r,s,o,l,c,h,u,f,d,m,v,x,S,M){Au.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,s,o,l,c,h,u,f,d,m,v,x,S,M)}set(t,n,r,s,o,l,c,h,u,f,d,m,v,x,S,M){const _=this.elements;return _[0]=t,_[4]=n,_[8]=r,_[12]=s,_[1]=o,_[5]=l,_[9]=c,_[13]=h,_[2]=u,_[6]=f,_[10]=d,_[14]=m,_[3]=v,_[7]=x,_[11]=S,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Au().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,s=1/Or.setFromMatrixColumn(t,0).length(),o=1/Or.setFromMatrixColumn(t,1).length(),l=1/Or.setFromMatrixColumn(t,2).length();return n[0]=r[0]*s,n[1]=r[1]*s,n[2]=r[2]*s,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*l,n[9]=r[9]*l,n[10]=r[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,s=t.y,o=t.z,l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s),f=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const m=l*f,v=l*d,x=c*f,S=c*d;n[0]=h*f,n[4]=-h*d,n[8]=u,n[1]=v+x*u,n[5]=m-S*u,n[9]=-c*h,n[2]=S-m*u,n[6]=x+v*u,n[10]=l*h}else if(t.order==="YXZ"){const m=h*f,v=h*d,x=u*f,S=u*d;n[0]=m+S*c,n[4]=x*c-v,n[8]=l*u,n[1]=l*d,n[5]=l*f,n[9]=-c,n[2]=v*c-x,n[6]=S+m*c,n[10]=l*h}else if(t.order==="ZXY"){const m=h*f,v=h*d,x=u*f,S=u*d;n[0]=m-S*c,n[4]=-l*d,n[8]=x+v*c,n[1]=v+x*c,n[5]=l*f,n[9]=S-m*c,n[2]=-l*u,n[6]=c,n[10]=l*h}else if(t.order==="ZYX"){const m=l*f,v=l*d,x=c*f,S=c*d;n[0]=h*f,n[4]=x*u-v,n[8]=m*u+S,n[1]=h*d,n[5]=S*u+m,n[9]=v*u-x,n[2]=-u,n[6]=c*h,n[10]=l*h}else if(t.order==="YZX"){const m=l*h,v=l*u,x=c*h,S=c*u;n[0]=h*f,n[4]=S-m*d,n[8]=x*d+v,n[1]=d,n[5]=l*f,n[9]=-c*f,n[2]=-u*f,n[6]=v*d+x,n[10]=m-S*d}else if(t.order==="XZY"){const m=l*h,v=l*u,x=c*h,S=c*u;n[0]=h*f,n[4]=-d,n[8]=u*f,n[1]=m*d+S,n[5]=l*f,n[9]=v*d-x,n[2]=x*d-v,n[6]=c*f,n[10]=S*d+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,od)}lookAt(t,n,r){const s=this.elements;return zn.subVectors(t,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),qi.crossVectors(r,zn),qi.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),qi.crossVectors(r,zn)),qi.normalize(),po.crossVectors(zn,qi),s[0]=qi.x,s[4]=po.x,s[8]=zn.x,s[1]=qi.y,s[5]=po.y,s[9]=zn.y,s[2]=qi.z,s[6]=po.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,s=n.elements,o=this.elements,l=r[0],c=r[4],h=r[8],u=r[12],f=r[1],d=r[5],m=r[9],v=r[13],x=r[2],S=r[6],M=r[10],_=r[14],b=r[3],A=r[7],F=r[11],H=r[15],D=s[0],G=s[4],q=s[8],C=s[12],P=s[1],ee=s[5],ce=s[9],ge=s[13],X=s[2],K=s[6],Z=s[10],ye=s[14],ue=s[3],he=s[7],_e=s[11],ve=s[15];return o[0]=l*D+c*P+h*X+u*ue,o[4]=l*G+c*ee+h*K+u*he,o[8]=l*q+c*ce+h*Z+u*_e,o[12]=l*C+c*ge+h*ye+u*ve,o[1]=f*D+d*P+m*X+v*ue,o[5]=f*G+d*ee+m*K+v*he,o[9]=f*q+d*ce+m*Z+v*_e,o[13]=f*C+d*ge+m*ye+v*ve,o[2]=x*D+S*P+M*X+_*ue,o[6]=x*G+S*ee+M*K+_*he,o[10]=x*q+S*ce+M*Z+_*_e,o[14]=x*C+S*ge+M*ye+_*ve,o[3]=b*D+A*P+F*X+H*ue,o[7]=b*G+A*ee+F*K+H*he,o[11]=b*q+A*ce+F*Z+H*_e,o[15]=b*C+A*ge+F*ye+H*ve,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],s=t[8],o=t[12],l=t[1],c=t[5],h=t[9],u=t[13],f=t[2],d=t[6],m=t[10],v=t[14],x=t[3],S=t[7],M=t[11],_=t[15];return x*(+o*h*d-s*u*d-o*c*m+r*u*m+s*c*v-r*h*v)+S*(+n*h*v-n*u*m+o*l*m-s*l*v+s*u*f-o*h*f)+M*(+n*u*d-n*c*v-o*l*d+r*l*v+o*c*f-r*u*f)+_*(-s*c*f-n*h*d+n*c*m+s*l*d-r*l*m+r*h*f)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],s=t[2],o=t[3],l=t[4],c=t[5],h=t[6],u=t[7],f=t[8],d=t[9],m=t[10],v=t[11],x=t[12],S=t[13],M=t[14],_=t[15],b=d*M*u-S*m*u+S*h*v-c*M*v-d*h*_+c*m*_,A=x*m*u-f*M*u-x*h*v+l*M*v+f*h*_-l*m*_,F=f*S*u-x*d*u+x*c*v-l*S*v-f*c*_+l*d*_,H=x*d*h-f*S*h-x*c*m+l*S*m+f*c*M-l*d*M,D=n*b+r*A+s*F+o*H;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/D;return t[0]=b*G,t[1]=(S*m*o-d*M*o-S*s*v+r*M*v+d*s*_-r*m*_)*G,t[2]=(c*M*o-S*h*o+S*s*u-r*M*u-c*s*_+r*h*_)*G,t[3]=(d*h*o-c*m*o-d*s*u+r*m*u+c*s*v-r*h*v)*G,t[4]=A*G,t[5]=(f*M*o-x*m*o+x*s*v-n*M*v-f*s*_+n*m*_)*G,t[6]=(x*h*o-l*M*o-x*s*u+n*M*u+l*s*_-n*h*_)*G,t[7]=(l*m*o-f*h*o+f*s*u-n*m*u-l*s*v+n*h*v)*G,t[8]=F*G,t[9]=(x*d*o-f*S*o-x*r*v+n*S*v+f*r*_-n*d*_)*G,t[10]=(l*S*o-x*c*o+x*r*u-n*S*u-l*r*_+n*c*_)*G,t[11]=(f*c*o-l*d*o-f*r*u+n*d*u+l*r*v-n*c*v)*G,t[12]=H*G,t[13]=(f*S*s-x*d*s+x*r*m-n*S*m-f*r*M+n*d*M)*G,t[14]=(x*c*s-l*S*s-x*r*h+n*S*h+l*r*M-n*c*M)*G,t[15]=(l*d*s-f*c*s+f*r*h-n*d*h-l*r*m+n*c*m)*G,this}scale(t){const n=this.elements,r=t.x,s=t.y,o=t.z;return n[0]*=r,n[4]*=s,n[8]*=o,n[1]*=r,n[5]*=s,n[9]*=o,n[2]*=r,n[6]*=s,n[10]*=o,n[3]*=r,n[7]*=s,n[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,s))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),s=Math.sin(n),o=1-r,l=t.x,c=t.y,h=t.z,u=o*l,f=o*c;return this.set(u*l+r,u*c-s*h,u*h+s*c,0,u*c+s*h,f*c+r,f*h-s*l,0,u*h-s*c,f*h+s*l,o*h*h+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,s,o,l){return this.set(1,r,o,0,t,1,l,0,n,s,1,0,0,0,0,1),this}compose(t,n,r){const s=this.elements,o=n._x,l=n._y,c=n._z,h=n._w,u=o+o,f=l+l,d=c+c,m=o*u,v=o*f,x=o*d,S=l*f,M=l*d,_=c*d,b=h*u,A=h*f,F=h*d,H=r.x,D=r.y,G=r.z;return s[0]=(1-(S+_))*H,s[1]=(v+F)*H,s[2]=(x-A)*H,s[3]=0,s[4]=(v-F)*D,s[5]=(1-(m+_))*D,s[6]=(M+b)*D,s[7]=0,s[8]=(x+A)*G,s[9]=(M-b)*G,s[10]=(1-(m+S))*G,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,r){const s=this.elements;let o=Or.set(s[0],s[1],s[2]).length();const l=Or.set(s[4],s[5],s[6]).length(),c=Or.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ri.copy(this);const u=1/o,f=1/l,d=1/c;return ri.elements[0]*=u,ri.elements[1]*=u,ri.elements[2]*=u,ri.elements[4]*=f,ri.elements[5]*=f,ri.elements[6]*=f,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,n.setFromRotationMatrix(ri),r.x=o,r.y=l,r.z=c,this}makePerspective(t,n,r,s,o,l,c=Ai){const h=this.elements,u=2*o/(n-t),f=2*o/(r-s),d=(n+t)/(n-t),m=(r+s)/(r-s);let v,x;if(c===Ai)v=-(l+o)/(l-o),x=-2*l*o/(l-o);else if(c===so)v=-l/(l-o),x=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=u,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,r,s,o,l,c=Ai){const h=this.elements,u=1/(n-t),f=1/(r-s),d=1/(l-o),m=(n+t)*u,v=(r+s)*f;let x,S;if(c===Ai)x=(l+o)*d,S=-2*d;else if(c===so)x=o*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*u,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*f,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=S,h[14]=-x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}},Or=new B,ri=new ft,sd=new B(0,0,0),od=new B(1,1,1),qi=new B,po=new B,zn=new B,Wc=new ft,Xc=new wi,qc=class O_{constructor(t=0,n=0,r=0,s=O_.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const s=t.elements,o=s[0],l=s[4],c=s[8],h=s[1],u=s[5],f=s[9],d=s[2],m=s[6],v=s[10];switch(n){case"XYZ":this._y=Math.asin(yn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(yn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(yn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},qc.DEFAULT_ORDER="XYZ",Yc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ad=0,jc=new B,Fr=new wi,Li=new ft,mo=new B,ws=new B,ld=new B,cd=new wi,Kc=new B(1,0,0),$c=new B(0,1,0),Jc=new B(0,0,1),hd={type:"added"},ud={type:"removed"},fn=class Cl extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cl.DEFAULT_UP.clone();const t=new B,n=new qc,r=new wi,s=new B(1,1,1);function o(){r.setFromEuler(n,!1)}function l(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new xt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Cl.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cl.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Fr.setFromAxisAngle(t,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(t,n){return Fr.setFromAxisAngle(t,n),this.quaternion.premultiply(Fr),this}rotateX(t){return this.rotateOnAxis(Kc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,n){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Kc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?mo.copy(t):mo.set(t,n,r);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ws,mo,this.up):Li.lookAt(mo,ws,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),Fr.setFromRotationMatrix(Li),this.quaternion.premultiply(Fr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ud)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){const l=this.children[r].getObjectByProperty(t,n);if(l!==void 0)return l}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,s=n.length;r<s;r++){const o=n[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++){const c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let u=0,f=h.length;u<f;u++){const d=h[u];o(t.shapes,d)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,u=this.material.length;h<u;h++)c.push(o(t.materials,this.material[h]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(o(t.animations,h))}}if(n){const c=l(t.geometries),h=l(t.materials),u=l(t.textures),f=l(t.images),d=l(t.shapes),m=l(t.skeletons),v=l(t.animations),x=l(t.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),u.length>0&&(r.textures=u),f.length>0&&(r.images=f),d.length>0&&(r.shapes=d),m.length>0&&(r.skeletons=m),v.length>0&&(r.animations=v),x.length>0&&(r.nodes=x)}return r.object=s,r;function l(c){const h=[];for(const u in c){const f=c[u];delete f.metadata,h.push(f)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const s=t.children[r];this.add(s.clone())}return this}},fn.DEFAULT_UP=new B(0,1,0),fn.DEFAULT_MATRIX_AUTO_UPDATE=!0,fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,si=new B,Pi=new B,Pa=new B,Ii=new B,Br=new B,zr=new B,Zc=new B,Ia=new B,Da=new B,Na=new B,go=!1,Rs=class vs{constructor(t=new B,n=new B,r=new B){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,s){s.subVectors(r,n),si.subVectors(t,n),s.cross(si);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,n,r,s,o){si.subVectors(s,n),Pi.subVectors(r,n),Pa.subVectors(t,n);const l=si.dot(si),c=si.dot(Pi),h=si.dot(Pa),u=Pi.dot(Pi),f=Pi.dot(Pa),d=l*u-c*c;if(d===0)return o.set(0,0,0),null;const m=1/d,v=(u*h-c*f)*m,x=(l*f-c*h)*m;return o.set(1-v-x,x,v)}static containsPoint(t,n,r,s){return this.getBarycoord(t,n,r,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(t,n,r,s,o,l,c,h){return go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),go=!0),this.getInterpolation(t,n,r,s,o,l,c,h)}static getInterpolation(t,n,r,s,o,l,c,h){return this.getBarycoord(t,n,r,s,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Ii.x),h.addScaledVector(l,Ii.y),h.addScaledVector(c,Ii.z),h)}static isFrontFacing(t,n,r,s){return si.subVectors(r,n),Pi.subVectors(t,n),si.cross(Pi).dot(s)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,s){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,r,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),si.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vs.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return vs.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,s,o){return go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),go=!0),vs.getInterpolation(t,this.a,this.b,this.c,n,r,s,o)}getInterpolation(t,n,r,s,o){return vs.getInterpolation(t,this.a,this.b,this.c,n,r,s,o)}containsPoint(t){return vs.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vs.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,s=this.b,o=this.c;let l,c;Br.subVectors(s,r),zr.subVectors(o,r),Ia.subVectors(t,r);const h=Br.dot(Ia),u=zr.dot(Ia);if(h<=0&&u<=0)return n.copy(r);Da.subVectors(t,s);const f=Br.dot(Da),d=zr.dot(Da);if(f>=0&&d<=f)return n.copy(s);const m=h*d-f*u;if(m<=0&&h>=0&&f<=0)return l=h/(h-f),n.copy(r).addScaledVector(Br,l);Na.subVectors(t,o);const v=Br.dot(Na),x=zr.dot(Na);if(x>=0&&v<=x)return n.copy(o);const S=v*u-h*x;if(S<=0&&u>=0&&x<=0)return c=u/(u-x),n.copy(r).addScaledVector(zr,c);const M=f*x-v*d;if(M<=0&&d-f>=0&&v-x>=0)return Zc.subVectors(o,s),c=(d-f)/(d-f+(v-x)),n.copy(s).addScaledVector(Zc,c);const _=1/(M+S+m);return l=S*_,c=m*_,n.copy(r).addScaledVector(Br,l).addScaledVector(zr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},_o={h:0,s:0,l:0},Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=Ll(e,1),t=yn(t,0,1),n=yn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ul(o,s,e+1/3),this.g=Ul(o,s,e),this.b=Ul(o,s,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Il(e.r),this.g=Il(e.g),this.b=Il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Rt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(yn(Tn.r*255,0,255))*65536+Math.round(yn(Tn.g*255,0,255))*256+Math.round(yn(Tn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Tn.copy(this),t);const n=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let c,h;const u=(l+o)/2;if(l===o)c=0,h=0;else{const f=o-l;switch(h=u<=.5?f/(o+l):f/(2-o-l),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Ot){Rt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,r=Tn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(_o);const n=Ys(Yi.h,_o.h,t),r=Ys(Yi.s,_o.s,t),s=Ys(Yi.l,_o.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Je,Je.NAMES=Qc,fd=0,fi=class extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=br,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ze=class extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cn=new B,vo=new Ne,Qt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ba,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ba&&(e.usage=this.usage),e}},eh=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},th=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},It=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},dd=0,Jn=new ft,Ua=new fn,kr=new B,kn=new ln,Cs=new ln,Mn=new B,en=class F_ extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?th:eh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new xt().getNormalMatrix(t);r.applyNormalMatrix(o),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,n,r){return Jn.makeTranslation(t,n,r),this.applyMatrix4(Jn),this}scale(t,n,r){return Jn.makeScale(t,n,r),this.applyMatrix4(Jn),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new It(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];kn.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),n)for(let o=0,l=n.length;o<l;o++){const c=n[o];Cs.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(kn.min,Cs.min),kn.expandByPoint(Mn),Mn.addVectors(kn.max,Cs.max),kn.expandByPoint(Mn)):(kn.expandByPoint(Cs.min),kn.expandByPoint(Cs.max))}kn.getCenter(r);let s=0;for(let o=0,l=t.count;o<l;o++)Mn.fromBufferAttribute(t,o),s=Math.max(s,r.distanceToSquared(Mn));if(n)for(let o=0,l=n.length;o<l;o++){const c=n[o],h=this.morphTargetsRelative;for(let u=0,f=c.count;u<f;u++)Mn.fromBufferAttribute(c,u),h&&(kr.fromBufferAttribute(t,u),Mn.add(kr)),s=Math.max(s,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.array,s=n.position.array,o=n.normal.array,l=n.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,u=[],f=[];for(let P=0;P<c;P++)u[P]=new B,f[P]=new B;const d=new B,m=new B,v=new B,x=new Ne,S=new Ne,M=new Ne,_=new B,b=new B;function A(P,ee,ce){d.fromArray(s,P*3),m.fromArray(s,ee*3),v.fromArray(s,ce*3),x.fromArray(l,P*2),S.fromArray(l,ee*2),M.fromArray(l,ce*2),m.sub(d),v.sub(d),S.sub(x),M.sub(x);const ge=1/(S.x*M.y-M.x*S.y);isFinite(ge)&&(_.copy(m).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(ge),b.copy(v).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(ge),u[P].add(_),u[ee].add(_),u[ce].add(_),f[P].add(b),f[ee].add(b),f[ce].add(b))}let F=this.groups;F.length===0&&(F=[{start:0,count:r.length}]);for(let P=0,ee=F.length;P<ee;++P){const ce=F[P],ge=ce.start,X=ce.count;for(let K=ge,Z=ge+X;K<Z;K+=3)A(r[K+0],r[K+1],r[K+2])}const H=new B,D=new B,G=new B,q=new B;function C(P){G.fromArray(o,P*3),q.copy(G);const ee=u[P];H.copy(ee),H.sub(G.multiplyScalar(G.dot(ee))).normalize(),D.crossVectors(q,ee);const ge=D.dot(f[P])<0?-1:1;h[P*4]=H.x,h[P*4+1]=H.y,h[P*4+2]=H.z,h[P*4+3]=ge}for(let P=0,ee=F.length;P<ee;++P){const ce=F[P],ge=ce.start,X=ce.count;for(let K=ge,Z=ge+X;K<Z;K+=3)C(r[K+0]),C(r[K+1]),C(r[K+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qt(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let m=0,v=r.count;m<v;m++)r.setXYZ(m,0,0,0);const s=new B,o=new B,l=new B,c=new B,h=new B,u=new B,f=new B,d=new B;if(t)for(let m=0,v=t.count;m<v;m+=3){const x=t.getX(m+0),S=t.getX(m+1),M=t.getX(m+2);s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,M),f.subVectors(l,o),d.subVectors(s,o),f.cross(d),c.fromBufferAttribute(r,x),h.fromBufferAttribute(r,S),u.fromBufferAttribute(r,M),c.add(f),h.add(f),u.add(f),r.setXYZ(x,c.x,c.y,c.z),r.setXYZ(S,h.x,h.y,h.z),r.setXYZ(M,u.x,u.y,u.z)}else for(let m=0,v=n.count;m<v;m+=3)s.fromBufferAttribute(n,m+0),o.fromBufferAttribute(n,m+1),l.fromBufferAttribute(n,m+2),f.subVectors(l,o),d.subVectors(s,o),f.cross(d),r.setXYZ(m+0,f.x,f.y,f.z),r.setXYZ(m+1,f.x,f.y,f.z),r.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Mn.fromBufferAttribute(t,n),Mn.normalize(),t.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(c,h){const u=c.array,f=c.itemSize,d=c.normalized,m=new u.constructor(h.length*f);let v=0,x=0;for(let S=0,M=h.length;S<M;S++){c.isInterleavedBufferAttribute?v=h[S]*c.data.stride+c.offset:v=h[S]*f;for(let _=0;_<f;_++)m[x++]=u[v++]}return new Qt(m,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new F_,r=this.index.array,s=this.attributes;for(const c in s){const h=s[c],u=t(h,r);n.setAttribute(c,u)}const o=this.morphAttributes;for(const c in o){const h=[],u=o[c];for(let f=0,d=u.length;f<d;f++){const m=u[f],v=t(m,r);h.push(v)}n.morphAttributes[c]=h}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const u=l[c];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const u=r[h];t.data.attributes[h]=u.toJSON(t.data)}const s={};let o=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],f=[];for(let d=0,m=u.length;d<m;d++){const v=u[d];f.push(v.toJSON(t.data))}f.length>0&&(s[h]=f,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(n));const s=t.attributes;for(const u in s){const f=s[u];this.setAttribute(u,f.clone(n))}const o=t.morphAttributes;for(const u in o){const f=[],d=o[u];for(let m=0,v=d.length;m<v;m++)f.push(d[m].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];this.addGroup(d.start,d.count,d.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nh=new ft,cr=new fo,Mo=new ui,ih=new B,Gr=new B,Hr=new B,Vr=new B,Oa=new B,yo=new B,So=new Ne,xo=new Ne,bo=new Ne,rh=new B,sh=new B,oh=new B,To=new B,Eo=new B,re=class extends fn{constructor(e=new en,t=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){yo.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const u=l[c],f=s[c];u!==0&&(Oa.fromBufferAttribute(f,e),o?yo.addScaledVector(Oa,u):yo.addScaledVector(Oa.sub(t),u))}t.add(yo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Mo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Mo,ih)===null||cr.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(s).invert(),cr.copy(e.ray).applyMatrix4(nh),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const S=d[v],M=o[S.materialIndex],_=Math.max(S.start,m.start),b=Math.min(l.count,Math.min(S.start+S.count,m.start+m.count));for(let A=_,F=b;A<F;A+=3){const H=l.getX(A),D=l.getX(A+1),G=l.getX(A+2);r=ra(this,M,e,n,h,u,f,H,D,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let S=v,M=x;S<M;S+=3){const _=l.getX(S),b=l.getX(S+1),A=l.getX(S+2);r=ra(this,o,e,n,h,u,f,_,b,A),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const S=d[v],M=o[S.materialIndex],_=Math.max(S.start,m.start),b=Math.min(c.count,Math.min(S.start+S.count,m.start+m.count));for(let A=_,F=b;A<F;A+=3){const H=A,D=A+1,G=A+2;r=ra(this,M,e,n,h,u,f,H,D,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let S=v,M=x;S<M;S+=3){const _=S,b=S+1,A=S+2;r=ra(this,o,e,n,h,u,f,_,b,A),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}},Ge=class B_ extends en{constructor(t=1,n=1,r=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:s,heightSegments:o,depthSegments:l};const c=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const h=[],u=[],f=[],d=[];let m=0,v=0;x("z","y","x",-1,-1,r,n,t,l,o,0),x("z","y","x",1,-1,r,n,-t,l,o,1),x("x","z","y",1,1,t,r,n,s,l,2),x("x","z","y",1,-1,t,r,-n,s,l,3),x("x","y","z",1,-1,t,n,r,s,o,4),x("x","y","z",-1,-1,t,n,-r,s,o,5),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(d,2));function x(S,M,_,b,A,F,H,D,G,q,C){const P=F/G,ee=H/q,ce=F/2,ge=H/2,X=D/2,K=G+1,Z=q+1;let ye=0,ue=0;const he=new B;for(let _e=0;_e<Z;_e++){const ve=_e*ee-ge;for(let Q=0;Q<K;Q++){const fe=Q*P-ce;he[S]=fe*b,he[M]=ve*A,he[_]=X,u.push(he.x,he.y,he.z),he[S]=0,he[M]=0,he[_]=D>0?1:-1,f.push(he.x,he.y,he.z),d.push(Q/G),d.push(1-_e/q),ye+=1}}for(let _e=0;_e<q;_e++)for(let ve=0;ve<G;ve++){const Q=m+ve+K*_e,fe=m+ve+K*(_e+1),Ce=m+(ve+1)+K*(_e+1),Le=m+(ve+1)+K*_e;h.push(Q,fe,Le),h.push(fe,Ce,Le),ue+=6}c.addGroup(v,ue,C),v+=ue,m+=ye}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new B_(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ao={clone:ys,merge:Dn},pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ah=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Cn=class extends ah{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/h,r*=o.width/c,n*=o.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wr=-90,Xr=1,gd=class extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(Wr,Xr,e,t);r.layers=this.layers,this.add(r);const s=new Cn(Wr,Xr,e,t);s.layers=this.layers,this.add(s);const o=new Cn(Wr,Xr,e,t);o.layers=this.layers,this.add(o);const l=new Cn(Wr,Xr,e,t);l.layers=this.layers,this.add(l);const c=new Cn(Wr,Xr,e,t);c.layers=this.layers,this.add(c);const h=new Cn(Wr,Xr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,l,c]=t;for(const h of t)this.remove(h);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,h,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},lh=class extends Un{constructor(e,t,n,r,s,o,l,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,n,r,s,o,l,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_d=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===or?Ot:$n),this.texture=new lh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ge(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:Si});s.uniforms.tEquirect.value=t;const o=new re(r,s),l=t.minFilter;return t.minFilter===bi&&(t.minFilter=Rn),new gd(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Fa=new B,vd=new B,Md=new xt,hr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fa.subVectors(n,t).cross(vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Md.getNormalMatrix(e),r=this.coplanarPoint(Fa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ur=new ui,wo=new B,Ba=class{constructor(e=new hr,t=new hr,n=new hr,r=new hr,s=new hr,o=new hr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai){const n=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],x=r[10],S=r[11],M=r[12],_=r[13],b=r[14],A=r[15];if(n[0].setComponents(c-s,d-h,S-m,A-M).normalize(),n[1].setComponents(c+s,d+h,S+m,A+M).normalize(),n[2].setComponents(c+o,d+u,S+v,A+_).normalize(),n[3].setComponents(c-o,d-u,S-v,A-_).normalize(),n[4].setComponents(c-l,d-f,S-x,A-b).normalize(),t===Ai)n[5].setComponents(c+l,d+f,S+x,A+b).normalize();else if(t===so)n[5].setComponents(l,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ht=class z_ extends en{constructor(t=1,n=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:s};const o=t/2,l=n/2,c=Math.floor(r),h=Math.floor(s),u=c+1,f=h+1,d=t/c,m=n/h,v=[],x=[],S=[],M=[];for(let _=0;_<f;_++){const b=_*m-l;for(let A=0;A<u;A++){const F=A*d-o;x.push(F,-b,0),S.push(0,0,1),M.push(A/c),M.push(1-_/h)}}for(let _=0;_<h;_++)for(let b=0;b<c;b++){const A=b+u*_,F=b+u*(_+1),H=b+1+u*(_+1),D=b+1+u*_;v.push(A,F,D),v.push(F,H,D)}this.setIndex(v),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(S,3)),this.setAttribute("uv",new It(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new z_(t.width,t.height,t.widthSegments,t.heightSegments)}},yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
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
#endif`,Cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Nd=`#ifdef USE_BUMPMAP
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
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
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`
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
}`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,lp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,Mp=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lp=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rm=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Um=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,Gm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Vm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:yd,alphahash_pars_fragment:Sd,alphamap_fragment:xd,alphamap_pars_fragment:bd,alphatest_fragment:Td,alphatest_pars_fragment:Ed,aomap_fragment:Ad,aomap_pars_fragment:wd,batching_pars_vertex:Rd,batching_vertex:Cd,begin_vertex:Ld,beginnormal_vertex:Pd,bsdfs:Id,iridescence_fragment:Dd,bumpmap_pars_fragment:Nd,clipping_planes_fragment:Ud,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Bd,color_fragment:zd,color_pars_fragment:kd,color_pars_vertex:Gd,color_vertex:Hd,common:Vd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:qd,displacementmap_vertex:Yd,emissivemap_fragment:jd,emissivemap_pars_fragment:Kd,colorspace_fragment:$d,colorspace_pars_fragment:Jd,envmap_fragment:Zd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:ep,envmap_pars_vertex:tp,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:rp,fog_fragment:sp,fog_pars_fragment:op,gradientmap_pars_fragment:ap,lightmap_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:fp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:vp,lights_physical_pars_fragment:Mp,lights_fragment_begin:yp,lights_fragment_maps:Sp,lights_fragment_end:xp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Tp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:Ap,map_fragment:wp,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Lp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Ip,morphcolor_vertex:Dp,morphnormal_vertex:Np,morphtarget_pars_vertex:Up,morphtarget_vertex:Op,normal_fragment_begin:Fp,normal_fragment_maps:Bp,normal_pars_fragment:zp,normal_pars_vertex:kp,normal_vertex:Gp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:Yp,packing:jp,premultiplied_alpha_fragment:Kp,project_vertex:$p,dithering_fragment:Jp,dithering_pars_fragment:Zp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:rm,skinbase_vertex:sm,skinning_pars_vertex:om,skinning_vertex:am,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:fm,transmission_fragment:dm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:vm,background_vert:Mm,background_frag:ym,backgroundCube_vert:Sm,backgroundCube_frag:xm,cube_vert:bm,cube_frag:Tm,depth_vert:Em,depth_frag:Am,distanceRGBA_vert:wm,distanceRGBA_frag:Rm,equirect_vert:Cm,equirect_frag:Lm,linedashed_vert:Pm,linedashed_frag:Im,meshbasic_vert:Dm,meshbasic_frag:Nm,meshlambert_vert:Um,meshlambert_frag:Om,meshmatcap_vert:Fm,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:km,meshphong_vert:Gm,meshphong_frag:Hm,meshphysical_vert:Vm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:jm,shadow_vert:Km,shadow_frag:$m,sprite_vert:Jm,sprite_frag:Zm},Te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},di={basic:{uniforms:Dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Dn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Dn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Dn([Te.points,Te.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Dn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Dn([Te.common,Te.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Dn([Te.sprite,Te.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Dn([Te.common,Te.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Dn([Te.lights,Te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}},di.physical={uniforms:Dn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},Ro={r:0,b:0,g:0},Co=class extends ah{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qr=4,ch=[.125,.215,.35,.446,.526,.582],fr=20,za=new Co,hh=new Je,ka=null,Ga=0,Ha=0,dr=(1+Math.sqrt(5))/2,Yr=1/dr,uh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,dr,Yr),new B(0,dr,-Yr),new B(Yr,0,dr),new B(-Yr,0,dr),new B(dr,Yr,0),new B(-dr,Yr,0)],fh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Ga,Ha),e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ei,format:Kn,colorSpace:vn,depthBuffer:!1},r=Iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(s)),this._blurMaterial=xv(s,e,t)}return r}_compileMaterial(e){const t=new re(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,r){const l=new Cn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(hh),u.toneMapping=ki,u.autoClear=!1;const m=new ze({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),v=new re(new Ge,m);let x=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,x=!0):(m.color.copy(hh),x=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.lookAt(h[M],0,0)):_===1?(l.up.set(0,0,c[M]),l.lookAt(0,h[M],0)):(l.up.set(0,c[M],0),l.lookAt(0,0,h[M]));const b=this._cubeSize;sa(r,_*b,M>2?b:0,b,b),u.setRenderTarget(r),x&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Tr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;sa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uh[(r-1)%uh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,l){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new re(this._lodPlanes[r],h),d=h.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),x=s/v,S=isFinite(s)?1+Math.floor(u*x):fr;S>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${fr}`);const M=[];let _=0;for(let D=0;D<fr;++D){const G=D/x,q=Math.exp(-G*G/2);M.push(q),D===0?_+=q:D<S&&(_+=2*q)}for(let D=0;D<M.length;D++)M[D]=M[D]/_;d.envMap.value=e.texture,d.samples.value=S,d.weights.value=M,d.latitudinal.value=o==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-n;const A=this._sizeLods[r],F=3*A*(r>b-qr?r-b+qr:0),H=4*(this._cubeSize-A);sa(t,F,H,3*A,2*A),c.setRenderTarget(t),c.render(f,za)}},dh=class extends Un{constructor(e,t,n,r,s,o,l,c,h,u){if(u=u!==void 0?u:sr,u!==sr&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===sr&&(n=Hi),n===void 0&&u===wr&&(n=rr),super(null,r,s,o,l,c,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ph=new Un,mh=new dh(1,1),mh.compareFunction=Nc,gh=new Hc,_h=new id,vh=new lh,Mh=[],yh=[],Sh=new Float32Array(16),xh=new Float32Array(9),bh=new Float32Array(4),Qm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jv(t.type)}},e0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_M(t.type)}},t0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,t[l.id],n)}}},Va=/(\w+)(\])?(\[|\.)?/g,Lo=class{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vM(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}},n0=37297,i0=0,r0=/^[ \t]*#include +<([\w\d./]+)>/gm,s0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]),o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,a0=0,l0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c0(e),t.set(e,n)),n}},c0=class{constructor(e){this.id=a0++,this.code=e,this.usedTimes=0}},h0=0,u0=class extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},f0=class extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
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
}`,m0=class extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},kt=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},g0={type:"move"},Wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const x of e.hand.values()){const S=t.getJointPose(x,n),M=this._getHandJoint(h,x);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;h.inputState.pinching&&d>m+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=m-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_0=class extends Lr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,l="local-floor",c=1,h=null,u=null,f=null,d=null,m=null,v=null;const x=t.getContextAttributes();let S=null,M=null;const _=[],b=[],A=new Ne;let F=null;const H=new Cn;H.layers.enable(1),H.viewport=new Wt;const D=new Cn;D.layers.enable(2),D.viewport=new Wt;const G=[H,D],q=new m0;q.layers.enable(1),q.layers.enable(2);let C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=_[Q];return fe===void 0&&(fe=new Wa,_[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=_[Q];return fe===void 0&&(fe=new Wa,_[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=_[Q];return fe===void 0&&(fe=new Wa,_[Q]=fe),fe.getHandSpace()};function ee(Q){const fe=b.indexOf(Q.inputSource);if(fe===-1)return;const Ce=_[fe];Ce!==void 0&&(Ce.update(Q.inputSource,Q.frame,h||o),Ce.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",ge);for(let Q=0;Q<_.length;Q++){const fe=b[Q];fe!==null&&(b[Q]=null,_[Q].disconnect(fe))}C=null,P=null,e.setRenderTarget(S),m=null,d=null,f=null,r=null,M=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",ge),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ni(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let fe=null,Ce=null,Le=null;x.depth&&(Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?wr:sr,Ce=x.stencil?rr:Hi);const qe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ni(d.textureWidth,d.textureHeight,{format:Kn,type:Gi,depthTexture:new dh(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const tt=e.properties.get(M);tt.__ignoreDepthValues=d.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(l),ve.setContext(r),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ge(Q){for(let fe=0;fe<Q.removed.length;fe++){const Ce=Q.removed[fe],Le=b.indexOf(Ce);Le>=0&&(b[Le]=null,_[Le].disconnect(Ce))}for(let fe=0;fe<Q.added.length;fe++){const Ce=Q.added[fe];let Le=b.indexOf(Ce);if(Le===-1){for(let tt=0;tt<_.length;tt++)if(tt>=b.length){b.push(Ce),Le=tt;break}else if(b[tt]===null){b[tt]=Ce,Le=tt;break}if(Le===-1)break}const qe=_[Le];qe&&qe.connect(Ce)}}const X=new B,K=new B;function Z(Q,fe,Ce){X.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(Ce.matrixWorld);const Le=X.distanceTo(K),qe=fe.projectionMatrix.elements,tt=Ce.projectionMatrix.elements,pt=qe[14]/(qe[10]-1),nt=qe[14]/(qe[10]+1),Tt=(qe[9]+1)/qe[5],J=(qe[9]-1)/qe[5],tn=(qe[8]-1)/qe[0],ut=(tt[8]+1)/tt[0],We=pt*tn,Ze=pt*ut,Ke=Le/(-tn+ut),yt=Ke*-tn;fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(yt),Q.translateZ(Ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const at=pt+Ke,O=nt+Ke,w=We-yt,te=Ze+(Le-yt),Me=Tt*nt/O*at,le=J*nt/O*at;Q.projectionMatrix.makePerspective(w,te,Me,le,at,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ye(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;q.near=D.near=H.near=Q.near,q.far=D.far=H.far=Q.far,(C!==q.near||P!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),C=q.near,P=q.far);const fe=Q.parent,Ce=q.cameras;ye(q,fe);for(let Le=0;Le<Ce.length;Le++)ye(Ce[Le],fe);Ce.length===2?Z(q,H,D):q.projectionMatrix.copy(H.projectionMatrix),ue(Q,q,fe)};function ue(Q,fe,Ce){Ce===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(Ce.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ir*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)};let he=null;function _e(Q,fe){if(u=fe.getViewerPose(h||o),v=fe,u!==null){const Ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Le=!1;Ce.length!==q.cameras.length&&(q.cameras.length=0,Le=!0);for(let qe=0;qe<Ce.length;qe++){const tt=Ce[qe];let pt=null;if(m!==null)pt=m.getViewport(tt);else{const Tt=f.getViewSubImage(d,tt);pt=Tt.viewport,qe===0&&(e.setRenderTargetTextures(M,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(M))}let nt=G[qe];nt===void 0&&(nt=new Cn,nt.layers.enable(qe),nt.viewport=new Wt,G[qe]=nt),nt.matrix.fromArray(tt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(tt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(pt.x,pt.y,pt.width,pt.height),qe===0&&(q.matrix.copy(nt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Le===!0&&q.cameras.push(nt)}}for(let Ce=0;Ce<_.length;Ce++){const Le=b[Ce],qe=_[Ce];Le!==null&&qe!==void 0&&qe.update(Le,fe,h||o)}he&&he(Q,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const ve=new Pu;ve.setAnimationLoop(_e),this.setAnimationLoop=function(Q){he=Q},this.dispose=function(){}}},Th=class{constructor(e={}){const{canvas:t=uv(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,S=null;const M=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=ki,this.toneMappingExposure=1;const b=this;let A=!1,F=0,H=0,D=null,G=-1,q=null;const C=new Wt,P=new Wt;let ee=null;const ce=new Je(0);let ge=0,X=t.width,K=t.height,Z=1,ye=null,ue=null;const he=new Wt(0,0,X,K),_e=new Wt(0,0,X,K);let ve=!1;const Q=new Ba;let fe=!1,Ce=!1,Le=null;const qe=new ft,tt=new Ne,pt=new B,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return D===null?Z:1}let J=n;function tn(R,j){for(let ne=0;ne<R.length;ne++){const se=R[ne],ie=t.getContext(se,j);if(ie!==null)return ie}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",W,!1),J===null){const j=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&j.shift(),J=tn(j,R),J===null)throw tn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ut,We,Ze,Ke,yt,at,O,w,te,Me,le,me,je,Re,De,Se,lt,pe,jt,Mt,Qe,Fe,ke,vt;function Dt(){ut=new Tv(J),We=new vv(J,ut,e),ut.init(We),Fe=new YM(J,ut,We),Ze=new XM(J,ut,We),Ke=new wv(J),yt=new OM,at=new qM(J,ut,Ze,yt,We,Fe,Ke),O=new yv(b),w=new bv(b),te=new pv(J,We),ke=new gv(J,ut,te,We),Me=new Ev(J,te,Ke,ke),le=new Pv(J,Me,te,Ke),jt=new Lv(J,We,at),Se=new Mv(yt),me=new UM(b,O,w,ut,We,ke,Se),je=new jM(b,yt),Re=new BM,De=new VM(ut,We),pe=new mv(b,O,w,Ze,le,d,c),lt=new WM(b,le,We),vt=new KM(J,Ke,We,Ze),Mt=new _v(J,ut,Ke,We),Qe=new Av(J,ut,Ke,We),Ke.programs=me.programs,b.capabilities=We,b.extensions=ut,b.properties=yt,b.renderLists=Re,b.shadowMap=lt,b.state=Ze,b.info=Ke}Dt();const St=new _0(b,J);this.xr=St,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(X,K,!1))},this.getSize=function(R){return R.set(X,K)},this.setSize=function(R,j,ne=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,K=j,t.width=Math.floor(R*Z),t.height=Math.floor(j*Z),ne===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(X*Z,K*Z).floor()},this.setDrawingBufferSize=function(R,j,ne){X=R,K=j,Z=ne,t.width=Math.floor(R*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,j,ne,se){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,j,ne,se),Ze.viewport(C.copy(he).multiplyScalar(Z).floor())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,j,ne,se){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,j,ne,se),Ze.scissor(P.copy(_e).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(R){Ze.setScissorTest(ve=R)},this.setOpaqueSort=function(R){ye=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(R=!0,j=!0,ne=!0){let se=0;if(R){let ie=!1;if(D!==null){const Ie=D.texture.format;ie=Ie===ec||Ie===Ql||Ie===Zl}if(ie){const Ie=D.texture.type,He=Ie===Gi||Ie===Hi||Ie===pa||Ie===rr||Ie===$l||Ie===Jl,Xe=pe.getClearColor(),it=pe.getClearAlpha(),et=Xe.r,rt=Xe.g,ot=Xe.b;He?(m[0]=et,m[1]=rt,m[2]=ot,m[3]=it,J.clearBufferuiv(J.COLOR,0,m)):(v[0]=et,v[1]=rt,v[2]=ot,v[3]=it,J.clearBufferiv(J.COLOR,0,v))}else se|=J.COLOR_BUFFER_BIT}j&&(se|=J.DEPTH_BUFFER_BIT),ne&&(se|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Re.dispose(),De.dispose(),yt.dispose(),O.dispose(),w.dispose(),le.dispose(),ke.dispose(),vt.dispose(),me.dispose(),St.dispose(),St.removeEventListener("sessionstart",nn),St.removeEventListener("sessionend",Sn),Le&&(Le.dispose(),Le=null),At.stop()};function Ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=Ke.autoReset,j=lt.enabled,ne=lt.autoUpdate,se=lt.needsUpdate,ie=lt.type;Dt(),Ke.autoReset=R,lt.enabled=j,lt.autoUpdate=ne,lt.needsUpdate=se,lt.type=ie}function W(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function we(R){const j=R.target;j.removeEventListener("dispose",we),Pe(j)}function Pe(R){$e(R),yt.remove(R)}function $e(R){const j=yt.get(R).programs;j!==void 0&&(j.forEach(function(ne){me.releaseProgram(ne)}),R.isShaderMaterial&&me.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ne,se,ie,Ie){j===null&&(j=nt);const He=ie.isMesh&&ie.matrixWorld.determinant()<0,Xe=t_(R,j,ne,se,ie);Ze.setMaterial(se,He);let it=ne.index,et=1;if(se.wireframe===!0){if(it=Me.getWireframeAttribute(ne),it===void 0)return;et=2}const rt=ne.drawRange,ot=ne.attributes.position;let Kt=rt.start*et,En=(rt.start+rt.count)*et;Ie!==null&&(Kt=Math.max(Kt,Ie.start*et),En=Math.min(En,(Ie.start+Ie.count)*et)),it!==null?(Kt=Math.max(Kt,0),En=Math.min(En,it.count)):ot!=null&&(Kt=Math.max(Kt,0),En=Math.min(En,ot.count));const rn=En-Kt;if(rn<0||rn===1/0)return;ke.setup(ie,se,Xe,ne,it);let gi,Ft=Mt;if(it!==null&&(gi=te.get(it),Ft=Qe,Ft.setIndex(gi)),ie.isMesh)se.wireframe===!0?(Ze.setLineWidth(se.wireframeLinewidth*Tt()),Ft.setMode(J.LINES)):Ft.setMode(J.TRIANGLES);else if(ie.isLine){let mt=se.linewidth;mt===void 0&&(mt=1),Ze.setLineWidth(mt*Tt()),ie.isLineSegments?Ft.setMode(J.LINES):ie.isLineLoop?Ft.setMode(J.LINE_LOOP):Ft.setMode(J.LINE_STRIP)}else ie.isPoints?Ft.setMode(J.POINTS):ie.isSprite&&Ft.setMode(J.TRIANGLES);if(ie.isBatchedMesh)Ft.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)Ft.renderInstances(Kt,rn,ie.count);else if(ne.isInstancedBufferGeometry){const mt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Bs=Math.min(ne.instanceCount,mt);Ft.renderInstances(Kt,rn,Bs)}else Ft.render(Kt,rn)};function Ye(R,j,ne){R.transparent===!0&&R.side===zt&&R.forceSinglePass===!1?(R.side=Nn,R.needsUpdate=!0,is(R,j,ne),R.side=yi,R.needsUpdate=!0,is(R,j,ne),R.side=zt):is(R,j,ne)}this.compile=function(R,j,ne=null){ne===null&&(ne=R),S=De.get(ne),S.init(),_.push(S),ne.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(S.pushLight(ie),ie.castShadow&&S.pushShadow(ie))}),R!==ne&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(S.pushLight(ie),ie.castShadow&&S.pushShadow(ie))}),S.setupLights(b._useLegacyLights);const se=new Set;return R.traverse(function(ie){const Ie=ie.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){const Xe=Ie[He];Ye(Xe,ne,ie),se.add(Xe)}else Ye(Ie,ne,ie),se.add(Ie)}),_.pop(),S=null,se},this.compileAsync=function(R,j,ne=null){const se=this.compile(R,j,ne);return new Promise(ie=>{function Ie(){if(se.forEach(function(He){yt.get(He).currentProgram.isReady()&&se.delete(He)}),se.size===0){ie(R);return}setTimeout(Ie,10)}ut.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let wt=null;function Gt(R){wt&&wt(R)}function nn(){At.stop()}function Sn(){At.start()}const At=new Pu;At.setAnimationLoop(Gt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(R){wt=R,St.setAnimationLoop(R),R===null?At.stop():At.start()},St.addEventListener("sessionstart",nn),St.addEventListener("sessionend",Sn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(j),j=St.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,j,D),S=De.get(R,_.length),S.init(),_.push(S),qe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(qe),Ce=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,Ce),x=Re.get(R,M.length),x.init(),M.push(x),oi(R,j,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(ye,ue),this.info.render.frame++,fe===!0&&Se.beginShadows();const ne=S.state.shadowsArray;if(lt.render(ne,R,j),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(x,R),S.setupLights(b._useLegacyLights),j.isArrayCamera){const se=j.cameras;for(let ie=0,Ie=se.length;ie<Ie;ie++){const He=se[ie];Qn(x,R,He,He.viewport)}}else Qn(x,R,j);D!==null&&(at.updateMultisampleRenderTarget(D),at.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(b,R,j),ke.resetDefaultState(),G=-1,q=null,_.pop(),_.length>0?S=_[_.length-1]:S=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function oi(R,j,ne,se){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){se&&pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(qe);const He=le.update(R),Xe=R.material;Xe.visible&&x.push(R,He,Xe,ne,pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const He=le.update(R),Xe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pt.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),pt.copy(He.boundingSphere.center)),pt.applyMatrix4(R.matrixWorld).applyMatrix4(qe)),Array.isArray(Xe)){const it=He.groups;for(let et=0,rt=it.length;et<rt;et++){const ot=it[et],Kt=Xe[ot.materialIndex];Kt&&Kt.visible&&x.push(R,He,Kt,ne,pt.z,ot)}}else Xe.visible&&x.push(R,He,Xe,ne,pt.z,null)}}const Ie=R.children;for(let He=0,Xe=Ie.length;He<Xe;He++)oi(Ie[He],j,ne,se)}function Qn(R,j,ne,se){const ie=R.opaque,Ie=R.transmissive,He=R.transparent;S.setupLightsView(ne),fe===!0&&Se.setGlobalState(b.clippingPlanes,ne),Ie.length>0&&Go(ie,Ie,j,ne),se&&Ze.viewport(C.copy(se)),ie.length>0&&ns(ie,j,ne),Ie.length>0&&ns(Ie,j,ne),He.length>0&&ns(He,j,ne),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Go(R,j,ne,se){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Ie=We.isWebGL2;Le===null&&(Le=new ni(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")?Ei:Gi,minFilter:bi,samples:Ie?4:0})),b.getDrawingBufferSize(tt),Ie?Le.setSize(tt.x,tt.y):Le.setSize(ia(tt.x),ia(tt.y));const He=b.getRenderTarget();b.setRenderTarget(Le),b.getClearColor(ce),ge=b.getClearAlpha(),ge<1&&b.setClearColor(16777215,.5),b.clear();const Xe=b.toneMapping;b.toneMapping=ki,ns(R,ne,se),at.updateMultisampleRenderTarget(Le),at.updateRenderTargetMipmap(Le);let it=!1;for(let et=0,rt=j.length;et<rt;et++){const ot=j[et],Kt=ot.object,En=ot.geometry,rn=ot.material,gi=ot.group;if(rn.side===zt&&Kt.layers.test(se.layers)){const Ft=rn.side;rn.side=Nn,rn.needsUpdate=!0,Ho(Kt,ne,se,En,rn,gi),rn.side=Ft,rn.needsUpdate=!0,it=!0}}it===!0&&(at.updateMultisampleRenderTarget(Le),at.updateRenderTargetMipmap(Le)),b.setRenderTarget(He),b.setClearColor(ce,ge),b.toneMapping=Xe}function ns(R,j,ne){const se=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,Ie=R.length;ie<Ie;ie++){const He=R[ie],Xe=He.object,it=He.geometry,et=se===null?He.material:se,rt=He.group;Xe.layers.test(ne.layers)&&Ho(Xe,j,ne,it,et,rt)}}function Ho(R,j,ne,se,ie,Ie){R.onBeforeRender(b,j,ne,se,ie,Ie),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(b,j,ne,se,R,Ie),ie.transparent===!0&&ie.side===zt&&ie.forceSinglePass===!1?(ie.side=Nn,ie.needsUpdate=!0,b.renderBufferDirect(ne,j,se,ie,R,Ie),ie.side=yi,ie.needsUpdate=!0,b.renderBufferDirect(ne,j,se,ie,R,Ie),ie.side=zt):b.renderBufferDirect(ne,j,se,ie,R,Ie),R.onAfterRender(b,j,ne,se,ie,Ie)}function is(R,j,ne){j.isScene!==!0&&(j=nt);const se=yt.get(R),ie=S.state.lights,Ie=S.state.shadowsArray,He=ie.state.version,Xe=me.getParameters(R,ie.state,Ie,j,ne),it=me.getProgramCacheKey(Xe);let et=se.programs;se.environment=R.isMeshStandardMaterial?j.environment:null,se.fog=j.fog,se.envMap=(R.isMeshStandardMaterial?w:O).get(R.envMap||se.environment),et===void 0&&(R.addEventListener("dispose",we),et=new Map,se.programs=et);let rt=et.get(it);if(rt!==void 0){if(se.currentProgram===rt&&se.lightsStateVersion===He)return pl(R,Xe),rt}else Xe.uniforms=me.getUniforms(R),R.onBuild(ne,Xe,b),R.onBeforeCompile(Xe,b),rt=me.acquireProgram(Xe,it),et.set(it,rt),se.uniforms=Xe.uniforms;const ot=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ot.clippingPlanes=Se.uniform),pl(R,Xe),se.needsLights=lu(R),se.lightsStateVersion=He,se.needsLights&&(ot.ambientLightColor.value=ie.state.ambient,ot.lightProbe.value=ie.state.probe,ot.directionalLights.value=ie.state.directional,ot.directionalLightShadows.value=ie.state.directionalShadow,ot.spotLights.value=ie.state.spot,ot.spotLightShadows.value=ie.state.spotShadow,ot.rectAreaLights.value=ie.state.rectArea,ot.ltc_1.value=ie.state.rectAreaLTC1,ot.ltc_2.value=ie.state.rectAreaLTC2,ot.pointLights.value=ie.state.point,ot.pointLightShadows.value=ie.state.pointShadow,ot.hemisphereLights.value=ie.state.hemi,ot.directionalShadowMap.value=ie.state.directionalShadowMap,ot.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,ot.spotShadowMap.value=ie.state.spotShadowMap,ot.spotLightMatrix.value=ie.state.spotLightMatrix,ot.spotLightMap.value=ie.state.spotLightMap,ot.pointShadowMap.value=ie.state.pointShadowMap,ot.pointShadowMatrix.value=ie.state.pointShadowMatrix),se.currentProgram=rt,se.uniformsList=null,rt}function dl(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Lo.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function pl(R,j){const ne=yt.get(R);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function t_(R,j,ne,se,ie){j.isScene!==!0&&(j=nt),at.resetTextureUnits();const Ie=j.fog,He=se.isMeshStandardMaterial?j.environment:null,Xe=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:vn,it=(se.isMeshStandardMaterial?w:O).get(se.envMap||He),et=se.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ot=!!ne.morphAttributes.position,Kt=!!ne.morphAttributes.normal,En=!!ne.morphAttributes.color;let rn=ki;se.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(rn=b.toneMapping);const gi=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ft=gi!==void 0?gi.length:0,mt=yt.get(se),Bs=S.state.lights;if(fe===!0&&(Ce===!0||R!==q)){const Wn=R===q&&se.id===G;Se.setState(se,R,Wn)}let Xt=!1;se.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Bs.state.version||mt.outputColorSpace!==Xe||ie.isBatchedMesh&&mt.batching===!1||!ie.isBatchedMesh&&mt.batching===!0||ie.isInstancedMesh&&mt.instancing===!1||!ie.isInstancedMesh&&mt.instancing===!0||ie.isSkinnedMesh&&mt.skinning===!1||!ie.isSkinnedMesh&&mt.skinning===!0||ie.isInstancedMesh&&mt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&mt.instancingColor===!1&&ie.instanceColor!==null||mt.envMap!==it||se.fog===!0&&mt.fog!==Ie||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==Se.numPlanes||mt.numIntersection!==Se.numIntersection)||mt.vertexAlphas!==et||mt.vertexTangents!==rt||mt.morphTargets!==ot||mt.morphNormals!==Kt||mt.morphColors!==En||mt.toneMapping!==rn||We.isWebGL2===!0&&mt.morphTargetsCount!==Ft)&&(Xt=!0):(Xt=!0,mt.__version=se.version);let Zt=mt.currentProgram;Xt===!0&&(Zt=is(se,j,ie));let rs=!1,Fi=!1,ss=!1;const dn=Zt.getUniforms(),_i=mt.uniforms;if(Ze.useProgram(Zt.program)&&(rs=!0,Fi=!0,ss=!0),se.id!==G&&(G=se.id,Fi=!0),rs||q!==R){dn.setValue(J,"projectionMatrix",R.projectionMatrix),dn.setValue(J,"viewMatrix",R.matrixWorldInverse);const Wn=dn.map.cameraPosition;Wn!==void 0&&Wn.setValue(J,pt.setFromMatrixPosition(R.matrixWorld)),We.logarithmicDepthBuffer&&dn.setValue(J,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&dn.setValue(J,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,Fi=!0,ss=!0)}if(ie.isSkinnedMesh){dn.setOptional(J,ie,"bindMatrix"),dn.setOptional(J,ie,"bindMatrixInverse");const Wn=ie.skeleton;Wn&&(We.floatVertexTextures?(Wn.boneTexture===null&&Wn.computeBoneTexture(),dn.setValue(J,"boneTexture",Wn.boneTexture,at)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(dn.setOptional(J,ie,"batchingTexture"),dn.setValue(J,"batchingTexture",ie._matricesTexture,at));const Ji=ne.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0&&We.isWebGL2===!0)&&jt.update(ie,ne,Zt),(Fi||mt.receiveShadow!==ie.receiveShadow)&&(mt.receiveShadow=ie.receiveShadow,dn.setValue(J,"receiveShadow",ie.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(_i.envMap.value=it,_i.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),Fi&&(dn.setValue(J,"toneMappingExposure",b.toneMappingExposure),mt.needsLights&&au(_i,ss),Ie&&se.fog===!0&&je.refreshFogUniforms(_i,Ie),je.refreshMaterialUniforms(_i,se,Z,K,Le),Lo.upload(J,dl(mt),_i,at)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Lo.upload(J,dl(mt),_i,at),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&dn.setValue(J,"center",ie.center),dn.setValue(J,"modelViewMatrix",ie.modelViewMatrix),dn.setValue(J,"normalMatrix",ie.normalMatrix),dn.setValue(J,"modelMatrix",ie.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Wn=se.uniformsGroups;for(let Zi=0,zs=Wn.length;Zi<zs;Zi++)if(We.isWebGL2){const Vo=Wn[Zi];vt.update(Vo,Zt),vt.bind(Vo,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function au(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function lu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,j,ne){yt.get(R.texture).__webglTexture=j,yt.get(R.depthTexture).__webglTexture=ne;const se=yt.get(R);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=ne===void 0,se.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,j){const ne=yt.get(R);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ne=0){D=R,F=j,H=ne;let se=!0,ie=null,Ie=!1,He=!1;if(R){const it=yt.get(R);it.__useDefaultFramebuffer!==void 0?(Ze.bindFramebuffer(J.FRAMEBUFFER,null),se=!1):it.__webglFramebuffer===void 0?at.setupRenderTarget(R):it.__hasExternalTextures&&at.rebindTextures(R,yt.get(R.texture).__webglTexture,yt.get(R.depthTexture).__webglTexture);const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(He=!0);const rt=yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?ie=rt[j][ne]:ie=rt[j],Ie=!0):We.isWebGL2&&R.samples>0&&at.useMultisampledRTT(R)===!1?ie=yt.get(R).__webglMultisampledFramebuffer:Array.isArray(rt)?ie=rt[ne]:ie=rt,C.copy(R.viewport),P.copy(R.scissor),ee=R.scissorTest}else C.copy(he).multiplyScalar(Z).floor(),P.copy(_e).multiplyScalar(Z).floor(),ee=ve;if(Ze.bindFramebuffer(J.FRAMEBUFFER,ie)&&We.drawBuffers&&se&&Ze.drawBuffers(R,ie),Ze.viewport(C),Ze.scissor(P),Ze.setScissorTest(ee),Ie){const it=yt.get(R.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+j,it.__webglTexture,ne)}else if(He){const it=yt.get(R.texture),et=j||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,it.__webglTexture,ne||0,et)}G=-1},this.readRenderTargetPixels=function(R,j,ne,se,ie,Ie,He){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe){Ze.bindFramebuffer(J.FRAMEBUFFER,Xe);try{const it=R.texture,et=it.format,rt=it.type;if(et!==Kn&&Fe.convert(et)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=rt===Ei&&(ut.has("EXT_color_buffer_half_float")||We.isWebGL2&&ut.has("EXT_color_buffer_float"));if(rt!==Gi&&Fe.convert(rt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===Ti&&(We.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-se&&ne>=0&&ne<=R.height-ie&&J.readPixels(j,ne,se,ie,Fe.convert(et),Fe.convert(rt),Ie)}finally{const it=D!==null?yt.get(D).__webglFramebuffer:null;Ze.bindFramebuffer(J.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(R,j,ne=0){const se=Math.pow(2,-ne),ie=Math.floor(j.image.width*se),Ie=Math.floor(j.image.height*se);at.setTexture2D(j,0),J.copyTexSubImage2D(J.TEXTURE_2D,ne,0,0,R.x,R.y,ie,Ie),Ze.unbindTexture()},this.copyTextureToTexture=function(R,j,ne,se=0){const ie=j.image.width,Ie=j.image.height,He=Fe.convert(ne.format),Xe=Fe.convert(ne.type);at.setTexture2D(ne,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ne.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ne.unpackAlignment),j.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,se,R.x,R.y,ie,Ie,He,Xe,j.image.data):j.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,se,R.x,R.y,j.mipmaps[0].width,j.mipmaps[0].height,He,j.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,se,R.x,R.y,He,Xe,j.image),se===0&&ne.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Ze.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ne,se,ie=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=R.max.x-R.min.x+1,He=R.max.y-R.min.y+1,Xe=R.max.z-R.min.z+1,it=Fe.convert(se.format),et=Fe.convert(se.type);let rt;if(se.isData3DTexture)at.setTexture3D(se,0),rt=J.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)at.setTexture2DArray(se,0),rt=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,se.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,se.unpackAlignment);const ot=J.getParameter(J.UNPACK_ROW_LENGTH),Kt=J.getParameter(J.UNPACK_IMAGE_HEIGHT),En=J.getParameter(J.UNPACK_SKIP_PIXELS),rn=J.getParameter(J.UNPACK_SKIP_ROWS),gi=J.getParameter(J.UNPACK_SKIP_IMAGES),Ft=ne.isCompressedTexture?ne.mipmaps[ie]:ne.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Ft.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ft.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,R.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,R.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,R.min.z),ne.isDataTexture||ne.isData3DTexture?J.texSubImage3D(rt,ie,j.x,j.y,j.z,Ie,He,Xe,it,et,Ft.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(rt,ie,j.x,j.y,j.z,Ie,He,Xe,it,Ft.data)):J.texSubImage3D(rt,ie,j.x,j.y,j.z,Ie,He,Xe,it,et,Ft),J.pixelStorei(J.UNPACK_ROW_LENGTH,ot),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Kt),J.pixelStorei(J.UNPACK_SKIP_PIXELS,En),J.pixelStorei(J.UNPACK_SKIP_ROWS,rn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,gi),ie===0&&se.generateMipmaps&&J.generateMipmap(rt),Ze.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){F=0,H=0,D=null,Ze.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xa?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===to?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?or:Pc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===or?Ot:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},v0=class extends Th{},v0.prototype.isWebGL1Renderer=!0,M0=class k_{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(t),this.density=n}clone(){return new k_(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},y0=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},S0=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ba,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new B,x0=class G_{constructor(t,n,r,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=r,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,r=this.data.count;n<r;n++)Ln.fromBufferAttribute(this,n),Ln.applyMatrix4(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)Ln.fromBufferAttribute(this,n),Ln.applyNormalMatrix(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)Ln.fromBufferAttribute(this,n),Ln.transformDirection(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}setX(t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=vi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=vi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=vi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=vi(n,this.array)),n}setXY(t,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ut(n,this.array),r=Ut(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this}setXYZ(t,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=s,this}setXYZW(t,n,r,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array),o=Ut(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[s+o])}return new Qt(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new G_(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Eh=new B,Ah=new Wt,wh=new Wt,b0=new B,Rh=new ft,Po=new B,Xa=new ui,Ch=new ft,qa=new fo,T0=class extends re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ql,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Po),this.boundingBox.expandByPoint(Po)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Po),this.boundingSphere.expandByPoint(Po)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(r),e.ray.intersectsSphere(Xa)!==!1&&(Ch.copy(r).invert(),qa.copy(e.ray).applyMatrix4(Ch),!(this.boundingBox!==null&&qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ql?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ah.fromBufferAttribute(r.attributes.skinIndex,e),wh.fromBufferAttribute(r.attributes.skinWeight,e),Eh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=wh.getComponent(s);if(o!==0){const l=Ah.getComponent(s);Rh.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(b0.copy(Eh).applyMatrix4(Rh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Lh=class extends fn{constructor(){super(),this.isBone=!0,this.type="Bone"}},E0=class extends Un{constructor(e=null,t=1,n=1,r,s,o,l,c,h=an,u=an,f,d){super(null,o,l,c,h,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ph=new ft,A0=new ft,w0=class H_{constructor(t=[],n=[]){this.uuid=hi(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,s=this.bones.length;r<s;r++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const r=new ft;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const t=this.bones,n=this.boneInverses,r=this.boneMatrices,s=this.boneTexture;for(let o=0,l=t.length;o<l;o++){const c=t[o]?t[o].matrixWorld:A0;Ph.multiplyMatrices(c,n[o]),Ph.toArray(r,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new H_(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const r=new E0(n,t,t,Kn,Ti);return r.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=r,this}getBoneByName(t){for(let n=0,r=this.bones.length;n<r;n++){const s=this.bones[n];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let r=0,s=t.bones.length;r<s;r++){const o=t.bones[r];let l=n[o];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),l=new Lh),this.bones.push(l),this.boneInverses.push(new ft().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,r=this.boneInverses;for(let s=0,o=n.length;s<o;s++){const l=n[s];t.bones.push(l.uuid);const c=r[s];t.boneInverses.push(c.toArray())}return t}},Ya=class extends Qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jr=new ft,Ih=new ft,Io=[],Dh=new ln,R0=new ft,Ls=new re,Ps=new ui,C0=class extends re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ya(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,R0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jr),Dh.copy(e.boundingBox).applyMatrix4(jr),this.boundingBox.union(Dh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jr),Ps.copy(e.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),e.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,jr),Ih.multiplyMatrices(n,jr),Ls.matrixWorld=Ih,Ls.raycast(e,Io);for(let o=0,l=Io.length;o<l;o++){const c=Io[o];c.instanceId=s,c.object=this,t.push(c)}Io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ya(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},pr=class extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nh=new B,Uh=new B,Oh=new ft,ja=new fo,Do=new ui,No=class extends fn{constructor(e=new en,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Nh.fromBufferAttribute(t,r-1),Uh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Nh.distanceTo(Uh);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;Oh.copy(r).invert(),ja.copy(e.ray).applyMatrix4(Oh);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=new B,u=new B,f=new B,d=new B,m=this.isLineSegments?2:1,v=n.index,S=n.attributes.position;if(v!==null){const M=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let b=M,A=_-1;b<A;b+=m){const F=v.getX(b),H=v.getX(b+1);if(h.fromBufferAttribute(S,F),u.fromBufferAttribute(S,H),ja.distanceSqToSegment(h,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(d);G<e.near||G>e.far||t.push({distance:G,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const M=Math.max(0,o.start),_=Math.min(S.count,o.start+o.count);for(let b=M,A=_-1;b<A;b+=m){if(h.fromBufferAttribute(S,b),u.fromBufferAttribute(S,b+1),ja.distanceSqToSegment(h,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(d);H<e.near||H>e.far||t.push({distance:H,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}},Fh=new B,Bh=new B,Hn=class extends No{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Fh.fromBufferAttribute(t,r),Bh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Fh.distanceTo(Bh);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},L0=class extends No{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ka=class extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zh=new ft,$a=new fo,Uo=new ui,Oo=new B,kh=class extends fn{constructor(e=new en,t=new Ka){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;zh.copy(r).invert(),$a.copy(e.ray).applyMatrix4(zh);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,x=m;v<x;v++){const S=h.getX(v);Oo.fromBufferAttribute(f,S),Xu(Oo,S,c,r,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,x=m;v<x;v++)Oo.fromBufferAttribute(f,v),Xu(Oo,v,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}},Di=class extends Un{constructor(e,t,n,r,s,o,l,c,h){super(e,t,n,r,s,o,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let l=0,c=s-1,h;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),h=n[r]-o,h<0)l=r+1;else if(h>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],d=n[r+1]-u,m=(o-u)/d;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),l=this.getPoint(s),c=t||(o.isVector2?new Ne:new B);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new B,r=[],s=[],o=[],l=new B,c=new ft;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new B)}s[0]=new B,o[0]=new B;let h=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),d<=h&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),l.crossVectors(r[m-1],r[m]),l.length()>Number.EPSILON){l.normalize();const v=Math.acos(yn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(l,v))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(yn(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(c.makeRotationAxis(r[v],m*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gh=class extends Ni{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t){const n=t||new Ne,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const l=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,m=h-this.aY;c=d*u-m*f+this.aX,h=d*f+m*u+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},P0=class extends Gh{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}},Fo=new B,Ja=new Bl,Za=new Bl,Qa=new Bl,Hh=class extends Ni{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:c===0&&l===s-1&&(l=s-2,c=1);let h,u;this.closed||l>0?h=r[(l-1)%s]:(Fo.subVectors(r[0],r[1]).add(r[0]),h=Fo);const f=r[l%s],d=r[(l+1)%s];if(this.closed||l+2<s?u=r[(l+2)%s]:(Fo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(d),m),S=Math.pow(d.distanceToSquared(u),m);x<1e-4&&(x=1),v<1e-4&&(v=x),S<1e-4&&(S=x),Ja.initNonuniformCatmullRom(h.x,f.x,d.x,u.x,v,x,S),Za.initNonuniformCatmullRom(h.y,f.y,d.y,u.y,v,x,S),Qa.initNonuniformCatmullRom(h.z,f.z,d.z,u.z,v,x,S)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(h.x,f.x,d.x,u.x,this.tension),Za.initCatmullRom(h.y,f.y,d.y,u.y,this.tension),Qa.initCatmullRom(h.z,f.z,d.z,u.z,this.tension));return n.set(Ja.calc(c),Za.calc(c),Qa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},I0=class extends Ni{constructor(e=new Ne,t=new Ne,n=new Ne,r=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ne){const n=t,r=this.v0,s=this.v1,o=this.v2,l=this.v3;return n.set(Js(e,r.x,s.x,o.x,l.x),Js(e,r.y,s.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},D0=class extends Ni{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,o=this.v2,l=this.v3;return n.set(Js(e,r.x,s.x,o.x,l.x),Js(e,r.y,s.y,o.y,l.y),Js(e,r.z,s.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},N0=class extends Ni{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},U0=class extends Ni{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},O0=class extends Ni{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($s(e,r.x,s.x,o.x),$s(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vh=class extends Ni{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($s(e,r.x,s.x,o.x),$s(e,r.y,s.y,o.y),$s(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},F0=class extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),l=s-o,c=r[o===0?o:o-1],h=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(qu(l,c.x,h.x,u.x,f.x),qu(l,c.y,h.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ne().fromArray(r))}return this}},B0=Object.freeze({__proto__:null,ArcCurve:P0,CatmullRomCurve3:Hh,CubicBezierCurve:I0,CubicBezierCurve3:D0,EllipseCurve:Gh,LineCurve:N0,LineCurve3:U0,QuadraticBezierCurve:O0,QuadraticBezierCurve3:Vh,SplineCurve:F0}),On=class V_ extends en{constructor(t=1,n=1,r=1,s=32,o=1,l=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:r,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:h};const u=this;s=Math.floor(s),o=Math.floor(o);const f=[],d=[],m=[],v=[];let x=0;const S=[],M=r/2;let _=0;b(),l===!1&&(t>0&&A(!0),n>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(v,2));function b(){const F=new B,H=new B;let D=0;const G=(n-t)/r;for(let q=0;q<=o;q++){const C=[],P=q/o,ee=P*(n-t)+t;for(let ce=0;ce<=s;ce++){const ge=ce/s,X=ge*h+c,K=Math.sin(X),Z=Math.cos(X);H.x=ee*K,H.y=-P*r+M,H.z=ee*Z,d.push(H.x,H.y,H.z),F.set(K,G,Z).normalize(),m.push(F.x,F.y,F.z),v.push(ge,1-P),C.push(x++)}S.push(C)}for(let q=0;q<s;q++)for(let C=0;C<o;C++){const P=S[C][q],ee=S[C+1][q],ce=S[C+1][q+1],ge=S[C][q+1];f.push(P,ee,ge),f.push(ee,ce,ge),D+=6}u.addGroup(_,D,0),_+=D}function A(F){const H=x,D=new Ne,G=new B;let q=0;const C=F===!0?t:n,P=F===!0?1:-1;for(let ce=1;ce<=s;ce++)d.push(0,M*P,0),m.push(0,P,0),v.push(.5,.5),x++;const ee=x;for(let ce=0;ce<=s;ce++){const X=ce/s*h+c,K=Math.cos(X),Z=Math.sin(X);G.x=C*Z,G.y=M*P,G.z=C*K,d.push(G.x,G.y,G.z),m.push(0,P,0),D.x=K*.5+.5,D.y=Z*.5*P+.5,v.push(D.x,D.y),x++}for(let ce=0;ce<s;ce++){const ge=H+ce,X=ee+ce;F===!0?f.push(X,X+1,ge):f.push(X+1,X,ge),q+=3}u.addGroup(_,q,F===!0?1:2),_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new V_(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},z0=class W_ extends On{constructor(t=1,n=1,r=32,s=1,o=!1,l=0,c=Math.PI*2){super(0,t,n,r,s,o,l,c),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:c}}static fromJSON(t){return new W_(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},k0=class X_ extends en{constructor(t=[],n=[],r=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:r,detail:s};const o=[],l=[];c(s),u(r),f(),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(o.slice(),3)),this.setAttribute("uv",new It(l,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function c(b){const A=new B,F=new B,H=new B;for(let D=0;D<n.length;D+=3)v(n[D+0],A),v(n[D+1],F),v(n[D+2],H),h(A,F,H,b)}function h(b,A,F,H){const D=H+1,G=[];for(let q=0;q<=D;q++){G[q]=[];const C=b.clone().lerp(F,q/D),P=A.clone().lerp(F,q/D),ee=D-q;for(let ce=0;ce<=ee;ce++)ce===0&&q===D?G[q][ce]=C:G[q][ce]=C.clone().lerp(P,ce/ee)}for(let q=0;q<D;q++)for(let C=0;C<2*(D-q)-1;C++){const P=Math.floor(C/2);C%2===0?(m(G[q][P+1]),m(G[q+1][P]),m(G[q][P])):(m(G[q][P+1]),m(G[q+1][P+1]),m(G[q+1][P]))}}function u(b){const A=new B;for(let F=0;F<o.length;F+=3)A.x=o[F+0],A.y=o[F+1],A.z=o[F+2],A.normalize().multiplyScalar(b),o[F+0]=A.x,o[F+1]=A.y,o[F+2]=A.z}function f(){const b=new B;for(let A=0;A<o.length;A+=3){b.x=o[A+0],b.y=o[A+1],b.z=o[A+2];const F=M(b)/2/Math.PI+.5,H=_(b)/Math.PI+.5;l.push(F,1-H)}x(),d()}function d(){for(let b=0;b<l.length;b+=6){const A=l[b+0],F=l[b+2],H=l[b+4],D=Math.max(A,F,H),G=Math.min(A,F,H);D>.9&&G<.1&&(A<.2&&(l[b+0]+=1),F<.2&&(l[b+2]+=1),H<.2&&(l[b+4]+=1))}}function m(b){o.push(b.x,b.y,b.z)}function v(b,A){const F=b*3;A.x=t[F+0],A.y=t[F+1],A.z=t[F+2]}function x(){const b=new B,A=new B,F=new B,H=new B,D=new Ne,G=new Ne,q=new Ne;for(let C=0,P=0;C<o.length;C+=9,P+=6){b.set(o[C+0],o[C+1],o[C+2]),A.set(o[C+3],o[C+4],o[C+5]),F.set(o[C+6],o[C+7],o[C+8]),D.set(l[P+0],l[P+1]),G.set(l[P+2],l[P+3]),q.set(l[P+4],l[P+5]),H.copy(b).add(A).add(F).divideScalar(3);const ee=M(H);S(D,P+0,b,ee),S(G,P+2,A,ee),S(q,P+4,F,ee)}}function S(b,A,F,H){H<0&&b.x===1&&(l[A]=b.x-1),F.x===0&&F.z===0&&(l[A]=H/2/Math.PI+.5)}function M(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new X_(t.vertices,t.indices,t.radius,t.details)}},Bo=new B,zo=new B,el=new B,ko=new Rs,pi=class extends en{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Pr*t),o=e.getIndex(),l=e.getAttribute("position"),c=o?o.count:l.count,h=[0,0,0],u=["a","b","c"],f=new Array(3),d={},m=[];for(let v=0;v<c;v+=3){o?(h[0]=o.getX(v),h[1]=o.getX(v+1),h[2]=o.getX(v+2)):(h[0]=v,h[1]=v+1,h[2]=v+2);const{a:x,b:S,c:M}=ko;if(x.fromBufferAttribute(l,h[0]),S.fromBufferAttribute(l,h[1]),M.fromBufferAttribute(l,h[2]),ko.getNormal(el),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,f[2]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let _=0;_<3;_++){const b=(_+1)%3,A=f[_],F=f[b],H=ko[u[_]],D=ko[u[b]],G=`${A}_${F}`,q=`${F}_${A}`;q in d&&d[q]?(el.dot(d[q].normal)<=s&&(m.push(H.x,H.y,H.z),m.push(D.x,D.y,D.z)),d[q]=null):G in d||(d[G]={index0:h[_],index1:h[b],normal:el.clone()})}}for(const v in d)if(d[v]){const{index0:x,index1:S}=d[v];Bo.fromBufferAttribute(l,x),zo.fromBufferAttribute(l,S),m.push(Bo.x,Bo.y,Bo.z),m.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new It(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Wh=class q_ extends k0{constructor(t=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,s,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new q_(t.radius,t.detail)}},mr=class Y_ extends en{constructor(t=1,n=32,r=16,s=0,o=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:s,phiLength:o,thetaStart:l,thetaLength:c},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(l+c,Math.PI);let u=0;const f=[],d=new B,m=new B,v=[],x=[],S=[],M=[];for(let _=0;_<=r;_++){const b=[],A=_/r;let F=0;_===0&&l===0?F=.5/n:_===r&&h===Math.PI&&(F=-.5/n);for(let H=0;H<=n;H++){const D=H/n;d.x=-t*Math.cos(s+D*o)*Math.sin(l+A*c),d.y=t*Math.cos(l+A*c),d.z=t*Math.sin(s+D*o)*Math.sin(l+A*c),x.push(d.x,d.y,d.z),m.copy(d).normalize(),S.push(m.x,m.y,m.z),M.push(D+F,1-A),b.push(u++)}f.push(b)}for(let _=0;_<r;_++)for(let b=0;b<n;b++){const A=f[_][b+1],F=f[_][b],H=f[_+1][b],D=f[_+1][b+1];(_!==0||l>0)&&v.push(A,F,D),(_!==r-1||h<Math.PI)&&v.push(F,H,D)}this.setIndex(v),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(S,3)),this.setAttribute("uv",new It(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y_(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Is=class j_ extends en{constructor(t=1,n=.4,r=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:r,tubularSegments:s,arc:o},r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],u=[],f=new B,d=new B,m=new B;for(let v=0;v<=r;v++)for(let x=0;x<=s;x++){const S=x/s*o,M=v/r*Math.PI*2;d.x=(t+n*Math.cos(M))*Math.cos(S),d.y=(t+n*Math.cos(M))*Math.sin(S),d.z=n*Math.sin(M),c.push(d.x,d.y,d.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(x/s),u.push(v/r)}for(let v=1;v<=r;v++)for(let x=1;x<=s;x++){const S=(s+1)*v+x-1,M=(s+1)*(v-1)+x-1,_=(s+1)*(v-1)+x,b=(s+1)*v+x;l.push(S,M,b),l.push(M,_,b)}this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new j_(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},G0=class K_ extends en{constructor(t=new Vh(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),n=64,r=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:r,radialSegments:s,closed:o};const l=t.computeFrenetFrames(n,o);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new B,h=new B,u=new Ne;let f=new B;const d=[],m=[],v=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(v,2));function S(){for(let A=0;A<n;A++)M(A);M(o===!1?n:0),b(),_()}function M(A){f=t.getPointAt(A/n,f);const F=l.normals[A],H=l.binormals[A];for(let D=0;D<=s;D++){const G=D/s*Math.PI*2,q=Math.sin(G),C=-Math.cos(G);h.x=C*F.x+q*H.x,h.y=C*F.y+q*H.y,h.z=C*F.z+q*H.z,h.normalize(),m.push(h.x,h.y,h.z),c.x=f.x+r*h.x,c.y=f.y+r*h.y,c.z=f.z+r*h.z,d.push(c.x,c.y,c.z)}}function _(){for(let A=1;A<=n;A++)for(let F=1;F<=s;F++){const H=(s+1)*(A-1)+(F-1),D=(s+1)*A+(F-1),G=(s+1)*A+F,q=(s+1)*(A-1)+F;x.push(H,D,q),x.push(D,G,q)}}function b(){for(let A=0;A<=n;A++)for(let F=0;F<=s;F++)u.x=A/n,u.y=F/s,v.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new K_(new B0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},tl=class extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ui=class extends tl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ds=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},H0=class extends Ds{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,l=r[s],c=r[o];if(l===void 0)switch(this.getSettings_().endingStart){case Rc:s=e,l=2*t-n;break;case Cc:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rc:o=e,c=2*n-t;break;case Cc:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(n-t)/(r-t),x=v*v,S=x*v,M=-d*S+2*d*x-d*v,_=(1+d)*S+(-1.5-2*d)*x+(-.5+d)*v+1,b=(-1-m)*S+(1.5+m)*x+.5*v,A=m*S-m*x;for(let F=0;F!==l;++F)s[F]=M*o[u+F]+_*o[h+F]+b*o[c+F]+A*o[f+F];return s}},V0=class extends Ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,u=(n-t)/(r-t),f=1-u;for(let d=0;d!==l;++d)s[d]=o[h+d]*f+o[c+d]*u;return s}},W0=class extends Ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mi=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new W0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new V0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new H0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const l=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==s;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(r!==void 0&&iy(r))for(let l=0,c=r.length;l!==c;++l){const h=r[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ya,s=e.length-1;let o=1;for(let l=1;l<s;++l){let c=!1;const h=e[l],u=e[l+1];if(h!==u&&(l!==1||h!==e[0]))if(r)c=!0;else{const f=l*n,d=f-n,m=f+n;for(let v=0;v!==n;++v){const x=t[f+v];if(x!==t[d+v]||x!==t[m+v]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];const f=l*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++o}}if(s>0){e[o]=e[s];for(let l=s*n,c=o*n,h=0;h!==n;++h)t[c+h]=t[l+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}},mi.prototype.TimeBufferType=Float32Array,mi.prototype.ValueBufferType=Float32Array,mi.prototype.DefaultInterpolation=Rr,Kr=class extends mi{},Kr.prototype.ValueTypeName="bool",Kr.prototype.ValueBufferType=Array,Kr.prototype.DefaultInterpolation=bs,Kr.prototype.InterpolantFactoryMethodLinear=void 0,Kr.prototype.InterpolantFactoryMethodSmooth=void 0,Xh=class extends mi{},Xh.prototype.ValueTypeName="color",$r=class extends mi{},$r.prototype.ValueTypeName="number",X0=class extends Ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(r-t);let h=e*l;for(let u=h+l;h!==u;h+=4)wi.slerpFlat(s,0,o,h-l,o,h,c);return s}},gr=class extends mi{InterpolantFactoryMethodLinear(e){return new X0(this.times,this.values,this.getValueSize(),e)}},gr.prototype.ValueTypeName="quaternion",gr.prototype.DefaultInterpolation=Rr,gr.prototype.InterpolantFactoryMethodSmooth=void 0,Jr=class extends mi{},Jr.prototype.ValueTypeName="string",Jr.prototype.ValueBufferType=Array,Jr.prototype.DefaultInterpolation=bs,Jr.prototype.InterpolantFactoryMethodLinear=void 0,Jr.prototype.InterpolantFactoryMethodSmooth=void 0,Zr=class extends mi{},Zr.prototype.ValueTypeName="vector",q0=class{constructor(e,t=-1,n,r=kf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(oy(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(mi.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let l=0;l<s;l++){let c=[],h=[];c.push((l+s-1)%s,l,(l+1)%s),h.push(0,1,0);const u=ry(c);c=Yu(c,1,u),h=Yu(h,1,u),!r&&c[0]===0&&(c.push(s),h.push(h[0])),o.push(new $r(".morphTargetInfluences["+t[l].name+"]",c,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const h=e[l],u=h.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(h)}}const o=[];for(const l in r)o.push(this.CreateFromMorphTargetSequence(l,r[l],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,m,v,x){if(m.length!==0){const S=[],M=[];ju(m,S,M,v),S.length!==0&&x.push(new f(d,S,M))}},r=[],s=e.name||"default",o=e.fps||30,l=e.blendMode;let c=e.length||-1;const h=e.hierarchy||[];for(let f=0;f<h.length;f++){const d=h[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let x=0;x<d[v].morphTargets.length;x++)m[d[v].morphTargets[x]]=-1;for(const x in m){const S=[],M=[];for(let _=0;_!==d[v].morphTargets.length;++_){const b=d[v];S.push(b.time),M.push(b.morphTarget===x?1:0)}r.push(new $r(".morphTargetInfluence["+x+"]",S,M))}c=m.length*o}else{const m=".bones["+t[f].name+"]";n(Zr,m+".position",d,"pos",r),n(gr,m+".quaternion",d,"rot",r),n(Zr,m+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}},ji={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},Y0=class{constructor(e,t,n){const r=this;let s=!1,o=0,l=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){l++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,l),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){const f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=h.length;f<d;f+=2){const m=h[f],v=h[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}},j0=new Y0,Qr=class{constructor(e){this.manager=e!==void 0?e:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Qr.DEFAULT_MATERIAL_NAME="__DEFAULT",Oi={},K0=class extends Error{constructor(e,t){super(e),this.response=t}},qh=class extends Qr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ji.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:r});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Oi[e],f=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),m=d?parseInt(d):0,v=m!==0;let x=0;const S=new ReadableStream({start(M){_();function _(){f.read().then(({done:b,value:A})=>{if(b)M.close();else{x+=A.byteLength;const F=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:m});for(let H=0,D=u.length;H<D;H++){const G=u[H];G.onProgress&&G.onProgress(F)}M.enqueue(A),_()}})}}});return new Response(S)}else throw new K0(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,l));case"json":return h.json();default:if(l===void 0)return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return h.arrayBuffer().then(v=>m.decode(v))}}}).then(h=>{ji.add(e,h);const u=Oi[e];delete Oi[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onLoad&&m.onLoad(h)}}).catch(h=>{const u=Oi[e];if(u===void 0)throw this.manager.itemError(e),h;delete Oi[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onError&&m.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},$0=class extends Qr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ji.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=js("img");function c(){u(),ji.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){l.removeEventListener("load",c,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}},Yh=class extends Qr{constructor(e){super(e)}load(e,t,n,r){const s=new Un,o=new $0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},nl=class extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},il=new ft,jh=new B,Kh=new B,rl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(jh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},J0=class extends rl{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ir*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Z0=class extends nl{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new J0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$h=new ft,Ns=new B,sl=new B,Q0=class extends rl{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ns),sl.copy(n.position),sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sl),n.updateMatrixWorld(),r.makeTranslation(-Ns.x,-Ns.y,-Ns.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h)}},eg=class extends nl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Q0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tg=class extends rl{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ng=class extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Us=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ig=class extends Qr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ji.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{r&&r(h)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const c=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return ji.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){r&&r(h),ji.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ji.add(e,c),s.manager.itemStart(e)}},rg=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},ol="\\[\\]\\.:\\/",sg=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",og="[^"+ol.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",al),lg=/(WCOD+)?/.source.replace("WCOD",og),cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),ug=new RegExp("^"+ag+lg+cg+hg+"$"),fg=["material","materials","bones","map"],dg=class{constructor(e,t,n){const r=n||$t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$t=class qs{constructor(t,n,r){this.path=n,this.parsedPath=r||qs.parseTrackName(n),this.node=qs.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new qs.Composite(t,n,r):new qs(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sg,"")}static parseTrackName(t){const n=ug.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=r.nodeName.substring(s+1);fg.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){const r=function(o){for(let l=0;l<o.length;l++){const c=o[l];if(c.name===n||c.uuid===n)return c;const h=r(c.children);if(h)return h}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,r=n.objectName,s=n.propertyName;let o=n.propertyIndex;if(t||(t=qs.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const l=t[s];if(l===void 0){const u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},$t.Composite=dg,$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray],$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],ay=new Float32Array(1),typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la)}}),Jh,pg=ci({"node_modules/three/examples/jsm/shaders/CopyShader.js"(){Jh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}}}),Os,mg,gg,_g,Zh,ll=ci({"node_modules/three/examples/jsm/postprocessing/Pass.js"(){Ki(),Os=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},mg=new Co(-1,1,1,-1,0,1),gg=class extends en{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}},_g=new gg,Zh=class{constructor(e){this._mesh=new re(_g,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}}}),vg,ly=ci({"node_modules/three/examples/jsm/postprocessing/ShaderPass.js"(){Ki(),ll(),vg=class extends Os{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ao.clone(e.uniforms),this.material=new Gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}}}),Qh,Mg,yg=ci({"node_modules/three/examples/jsm/postprocessing/MaskPass.js"(){ll(),Qh=class extends Os{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Mg=class extends Os{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}}}),Sg,cy=ci({"node_modules/three/examples/jsm/postprocessing/EffectComposer.js"(){Ki(),pg(),ly(),yg(),yg(),Sg=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vg(Jh),this.copyPass.material.blending=Si,this.clock=new rg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Qh!==void 0&&(o instanceof Qh?n=!0:o instanceof Mg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}}}),xg,hy=ci({"node_modules/three/examples/jsm/postprocessing/RenderPass.js"(){Ki(),ll(),xg=class extends Os{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}}}),bg,uy=ci({"node_modules/three/examples/jsm/shaders/LuminosityHighPassShader.js"(){Ki(),bg={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}}}),cl,fy=ci({"node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js"(){Ki(),ll(),pg(),uy(),cl=class wu extends Os{constructor(t,n,r,s){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=s,this.resolution=t!==void 0?new Ne(t.x,t.y):new Ne(256,256),this.clearColor=new Je(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(o,l,{type:Ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const m=new ni(o,l,{type:Ei});m.texture.name="UnrealBloomPass.h"+d,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const v=new ni(o,l,{type:Ei});v.texture.name="UnrealBloomPass.v"+d,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),o=Math.round(o/2),l=Math.round(l/2)}const c=bg;this.highPassUniforms=Ao.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gn({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ne(1/o,1/l),o=Math.round(o/2),l=Math.round(l/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=Jh;this.copyUniforms=Ao.clone(f.uniforms),this.blendMaterial=new Gn({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:on,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Je,this.oldClearAlpha=1,this.basic=new ze,this.fsQuad=new Zh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,n){let r=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(r,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(r,s),this.renderTargetsVertical[o].setSize(r,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Ne(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2)}render(t,n,r,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const l=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let c=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[h].uniforms.direction.value=wu.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[h]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=wu.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[h]),t.clear(),this.fsQuad.render(t),c=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=l}getSeperableBlurMaterial(t){const n=[];for(let r=0;r<t;r++)n.push(.39894*Math.exp(-.5*r*r/(t*t))/t);return new Gn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Gn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}},cl.BlurDirectionX=new Ne(1,0),cl.BlurDirectionY=new Ne(0,1)}});function Vn(e,t=!1){const n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),o={},l={},c=e[0].morphTargetsRelative,h=new en;let u=0;for(let f=0;f<e.length;++f){const d=e[f];let m=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in d.attributes){if(!r.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;o[v]===void 0&&(o[v]=[]),o[v].push(d.attributes[v]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(c!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in d.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;l[v]===void 0&&(l[v]=[]),l[v].push(d.morphAttributes[v])}if(t){let v;if(n)v=d.index.count;else if(d.attributes.position!==void 0)v=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;h.addGroup(u,v,f),u+=v}}if(n){let f=0;const d=[];for(let m=0;m<e.length;++m){const v=e[m].index;for(let x=0;x<v.count;++x)d.push(v.getX(x)+f);f+=e[m].attributes.position.count}h.setIndex(d)}for(const f in o){const d=Tg(o[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;h.setAttribute(f,d)}for(const f in l){const d=l[f][0].length;if(d===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[f]=[];for(let m=0;m<d;++m){const v=[];for(let S=0;S<l[f].length;++S)v.push(l[f][S][m]);const x=Tg(v);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;h.morphAttributes[f].push(x)}}return h}function Tg(e){let t,n,r,s=-1,o=0;for(let u=0;u<e.length;++u){const f=e[u];if(f.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=f.itemSize),n!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=f.normalized),r!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=f.array.length}const l=new t(o);let c=0;for(let u=0;u<e.length;++u)l.set(e[u].array,c),c+=e[u].array.length;const h=new Qt(l,n,r);return s!==void 0&&(h.gpuType=s),h}function Eg(e,t){if(t===Gf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Sa||t===Lc){let n=e.getIndex();if(n===null){const l=[],c=e.getAttribute("position");if(c!==void 0){for(let h=0;h<c.count;h++)l.push(h);e.setIndex(l),n=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const r=n.count-2,s=[];if(t===Sa)for(let l=1;l<=r;l++)s.push(n.getX(0)),s.push(n.getX(l)),s.push(n.getX(l+1));else for(let l=0;l<r;l++)l%2===0?(s.push(n.getX(l)),s.push(n.getX(l+1)),s.push(n.getX(l+2))):(s.push(n.getX(l+2)),s.push(n.getX(l+1)),s.push(n.getX(l)));s.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=e.clone();return o.setIndex(s),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}var Ag=ci({"node_modules/three/examples/jsm/utils/BufferGeometryUtils.js"(){Ki()}});function dy(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function py(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new tl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),e.DefaultMaterial}function es(e,t,n){for(const r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function _r(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function my(e,t,n){let r=!1,s=!1,o=!1;for(let u=0,f=t.length;u<f;u++){const d=t[u];if(d.POSITION!==void 0&&(r=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(o=!0),r&&s&&o)break}if(!r&&!s&&!o)return Promise.resolve(e);const l=[],c=[],h=[];for(let u=0,f=t.length;u<f;u++){const d=t[u];if(r){const m=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):e.attributes.position;l.push(m)}if(s){const m=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):e.attributes.normal;c.push(m)}if(o){const m=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):e.attributes.color;h.push(m)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2];return r&&(e.morphAttributes.position=f),s&&(e.morphAttributes.normal=d),o&&(e.morphAttributes.color=m),e.morphTargetsRelative=!0,e})}function gy(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++)e.morphTargetDictionary[n[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _y(e){let t;const n=e.extensions&&e.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+eu(n.attributes):t=e.indices+":"+eu(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,s=e.targets.length;r<s;r++)t+=":"+eu(e.targets[r]);return t}function eu(e){let t="";const n=Object.keys(e).sort();for(let r=0,s=n.length;r<s;r++)t+=n[r]+":"+e[n[r]]+";";return t}function tu(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vy(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function My(e,t,n){const r=t.attributes,s=new ln;if(r.POSITION!==void 0){const c=n.json.accessors[r.POSITION],h=c.min,u=c.max;if(h!==void 0&&u!==void 0){if(s.set(new B(h[0],h[1],h[2]),new B(u[0],u[1],u[2])),c.normalized){const f=tu(ts[c.componentType]);s.min.multiplyScalar(f),s.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=t.targets;if(o!==void 0){const c=new B,h=new B;for(let u=0,f=o.length;u<f;u++){const d=o[u];if(d.POSITION!==void 0){const m=n.json.accessors[d.POSITION],v=m.min,x=m.max;if(v!==void 0&&x!==void 0){if(h.setX(Math.max(Math.abs(v[0]),Math.abs(x[0]))),h.setY(Math.max(Math.abs(v[1]),Math.abs(x[1]))),h.setZ(Math.max(Math.abs(v[2]),Math.abs(x[2]))),m.normalized){const S=tu(ts[m.componentType]);h.multiplyScalar(S)}c.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}e.boundingBox=s;const l=new ui;s.getCenter(l.center),l.radius=s.min.distanceTo(s.max)/2,e.boundingSphere=l}function wg(e,t,n){const r=t.attributes,s=[];function o(l,c){return n.getDependency("accessor",l).then(function(h){e.setAttribute(c,h)})}for(const l in r){const c=ul[l]||l.toLowerCase();c in e.attributes||s.push(o(r[l],c))}if(t.indices!==void 0&&!e.index){const l=n.getDependency("accessor",t.indices).then(function(c){e.setIndex(c)});s.push(l)}return Rt.workingColorSpace!==vn&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),_r(e,t),My(e,t,n),Promise.all(s).then(function(){return t.targets!==void 0?my(e,t.targets,n):e})}var Rg,bt,Cg,Lg,Pg,Ig,Dg,Ng,Ug,Og,Fg,Bg,zg,kg,Gg,Hg,Vg,Wg,Xg,nu,Fs,iu,qg,Yg,jg,Kg,ru,$g,Jg,Zn,ts,su,ou,hl,ul,$i,Zg,fl,Qg,e_,yy=ci({"node_modules/three/examples/jsm/loaders/GLTFLoader.js"(){Ki(),Ag(),Rg=class extends Qr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ig(t)}),this.register(function(t){return new Gg(t)}),this.register(function(t){return new Hg(t)}),this.register(function(t){return new Vg(t)}),this.register(function(t){return new Ng(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new Og(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Bg(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new kg(t)}),this.register(function(t){return new zg(t)}),this.register(function(t){return new Cg(t)}),this.register(function(t){return new Wg(t)}),this.register(function(t){return new Xg(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=Us.extractUrlBase(e);o=Us.resolveURL(h,this.path)}else o=Us.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){r?r(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},c=new qh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{s.parse(h,o,function(u){t(u),s.manager.itemEnd(e)},l)}catch(u){l(u)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},l={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===nu){try{o[bt.KHR_BINARY_GLTF]=new qg(e)}catch(f){r&&r(f);return}s=JSON.parse(o[bt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new e_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](h);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case bt.KHR_MATERIALS_UNLIT:o[f]=new Lg;break;case bt.KHR_DRACO_MESH_COMPRESSION:o[f]=new Yg(s,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:o[f]=new jg;break;case bt.KHR_MESH_QUANTIZATION:o[f]=new Kg;break;default:d.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}h.setExtensions(o),h.setPlugins(l),h.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}},bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Cg=class{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const u=new Je(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],vn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new ng(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new eg(u),h.distance=f;break;case"spot":h=new Z0(u),h.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,_r(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(h),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}},Lg=class{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return ze}extendParams(e,t,n){const r=[];e.color=new Je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],vn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(r)}},Pg=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Ig=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(l,l)}return Promise.all(s)}},Dg=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},Ng=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],vn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Ug=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Og=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(l[0],l[1],l[2],vn),Promise.all(s)}},Fg=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Bg=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(l[0],l[1],l[2],vn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(s)}},zg=class{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},kg=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},Gg=class{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Hg=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=r.images[o.source];let c=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Vg=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=r.images[o.source];let c=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Wg=class{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const c=r.byteOffset||0,h=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(l,c,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(m),u,f,d,r.mode,r.filter),m})})}else return null}},Xg=class{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const h of r.primitives)if(h.mode!==Zn.TRIANGLES&&h.mode!==Zn.TRIANGLE_STRIP&&h.mode!==Zn.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],c={};for(const h in o)l.push(this.parser.getDependency("accessor",o[h]).then(u=>(c[h]=u,c[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const u=h.pop(),f=u.isGroup?u.children:[u],d=h[0].count,m=[];for(const v of f){const x=new ft,S=new B,M=new wi,_=new B(1,1,1),b=new C0(v.geometry,v.material,d);for(let A=0;A<d;A++)c.TRANSLATION&&S.fromBufferAttribute(c.TRANSLATION,A),c.ROTATION&&M.fromBufferAttribute(c.ROTATION,A),c.SCALE&&_.fromBufferAttribute(c.SCALE,A),b.setMatrixAt(A,x.compose(S,M,_));for(const A in c)if(A==="_COLOR_0"){const F=c[A];b.instanceColor=new Ya(F.array,F.itemSize,F.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&v.geometry.setAttribute(A,c[A]);fn.prototype.copy.call(b,v),this.parser.assignFinalMaterial(b),m.push(b)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}},nu="glTF",Fs=12,iu={JSON:1313821514,BIN:5130562},qg=class{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Fs,s=new DataView(e,Fs);let o=0;for(;o<r;){const l=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===iu.JSON){const h=new Uint8Array(e,Fs+o,l);this.content=n.decode(h)}else if(c===iu.BIN){const h=Fs+o;this.body=e.slice(h,h+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Yg=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},c={},h={};for(const u in o){const f=ul[u]||u.toLowerCase();l[f]=o[u]}for(const u in e.attributes){const f=ul[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],m=ts[d.componentType];h[f]=m.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){r.decodeDracoFile(u,function(m){for(const v in m.attributes){const x=m.attributes[v],S=c[v];S!==void 0&&(x.normalized=S)}f(m)},l,h,vn,d)})})}},jg=class{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Kg=class{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}},ru=class extends Ds{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=l*2,h=l*3,u=r-t,f=(n-t)/u,d=f*f,m=d*f,v=e*h,x=v-h,S=-2*m+3*d,M=m-d,_=1-S,b=M-d+f;for(let A=0;A!==l;A++){const F=o[x+A+l],H=o[x+A+c]*u,D=o[v+A+l],G=o[v+A]*u;s[A]=_*F+b*H+S*D+M*G}return s}},$g=new wi,Jg=class extends ru{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return $g.fromArray(s).normalize().toArray(s),s}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},su={9728:an,9729:Rn,9984:da,9985:jl,9986:Ar,9987:bi},ou={33071:Bn,33648:eo,10497:xi},hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ul={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zg={CUBICSPLINE:void 0,LINEAR:Rr,STEP:bs},fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"},Qg=new ft,e_=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new Yh(this.options.manager):this.textureLoader=new ig(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return es(s,l,r),_r(l,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let l=0,c=o.length;l<c;l++)e[o[l]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,l)=>{const c=this.associations.get(o);c!=null&&this.associations.set(l,c);for(const[h,u]of o.children.entries())s(u,l.children[h])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Us.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=hl[r.type],l=ts[r.componentType],c=r.normalized===!0,h=new l(r.count*o);return Promise.resolve(new Qt(h,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const l=o[0],c=hl[r.type],h=ts[r.componentType],u=h.BYTES_PER_ELEMENT,f=u*c,d=r.byteOffset||0,m=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let x,S;if(m&&m!==f){const M=Math.floor(d/m),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+M+":"+r.count;let b=t.cache.get(_);b||(x=new h(l,M*m,r.count*m/u),b=new S0(x,m/u),t.cache.add(_,b)),S=new x0(b,c,d%m/u,v)}else l===null?x=new h(r.count*c):x=new h(l,d,r.count*c),S=new Qt(x,c,v);if(r.sparse!==void 0){const M=hl.SCALAR,_=ts[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,A=r.sparse.values.byteOffset||0,F=new _(o[1],b,r.sparse.count*M),H=new h(o[2],A,r.sparse.count*c);l!==null&&(S=new Qt(S.array.slice(),S.itemSize,S.normalized));for(let D=0,G=F.length;D<G;D++){const q=F[D];if(S.setX(q,H[D*c]),c>=2&&S.setY(q,H[D*c+1]),c>=3&&S.setZ(q,H[D*c+2]),c>=4&&S.setW(q,H[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return S})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let l=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(l=c)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],l=s.images[t],c=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||l.name||"",u.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(u.name=l.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=su[d.magFilter]||Rn,u.minFilter=su[d.minFilter]||bi,u.wrapS=ou[d.wrapS]||xi,u.wrapT=ou[d.wrapT]||xi,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],l=self.URL||self.webkitURL;let c=o.uri||"",h=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){h=!0;const d=new Blob([f],{type:o.mimeType});return c=l.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(d,m){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){const S=new Un(x);S.needsUpdate=!0,d(S)}),t.load(Us.resolveURL(f,s.path),v,void 0,m)})}).then(function(f){return h===!0&&l.revokeObjectURL(c),f.userData.mimeType=o.mimeType||vy(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[bt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=s.associations.get(o);o=s.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Ka,fi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new pr,fi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(r||s||o){let l="ClonedMaterial:"+n.uuid+":";r&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return tl}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const l={},c=s.extensions||{},h=[];if(c[bt.KHR_MATERIALS_UNLIT]){const f=r[bt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),h.push(f.extendParams(l,s,t))}else{const f=s.pbrMetallicRoughness||{};if(l.color=new Je(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],vn),l.opacity=d[3]}f.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",f.baseColorTexture,Ot)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=zt);const u=s.alphaMode||fl.OPAQUE;if(u===fl.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,u===fl.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ze&&(h.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new Ne(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;l.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==ze&&(h.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ze){const f=s.emissiveFactor;l.emissive=new Je().setRGB(f[0],f[1],f[2],vn)}return s.emissiveTexture!==void 0&&o!==ze&&h.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(h).then(function(){const f=new o(l);return s.name&&(f.name=s.name),_r(f,s),t.associations.set(f,{materials:e}),s.extensions&&es(r,f,s),f})}createUniqueName(e){const t=$t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(l){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return wg(c,l,t)})}const o=[];for(let l=0,c=e.length;l<c;l++){const h=e[l],u=_y(h),f=r[u];if(f)o.push(f.promise);else{let d;h.extensions&&h.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=wg(new en,h,t),r[u]={primitive:h,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c].material===void 0?py(this.cache):this.getDependency("material",o[c].material);l.push(u)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(c){const h=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let m=0,v=u.length;m<v;m++){const x=u[m],S=o[m];let M;const _=h[m];if(S.mode===Zn.TRIANGLES||S.mode===Zn.TRIANGLE_STRIP||S.mode===Zn.TRIANGLE_FAN||S.mode===void 0)M=s.isSkinnedMesh===!0?new T0(x,_):new re(x,_),M.isSkinnedMesh===!0&&M.normalizeSkinWeights(),S.mode===Zn.TRIANGLE_STRIP?M.geometry=Eg(M.geometry,Lc):S.mode===Zn.TRIANGLE_FAN&&(M.geometry=Eg(M.geometry,Sa));else if(S.mode===Zn.LINES)M=new Hn(x,_);else if(S.mode===Zn.LINE_STRIP)M=new No(x,_);else if(S.mode===Zn.LINE_LOOP)M=new L0(x,_);else if(S.mode===Zn.POINTS)M=new kh(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(M.geometry.morphAttributes).length>0&&gy(M,s),M.name=t.createUniqueName(s.name||"mesh_"+e),_r(M,s),S.extensions&&es(r,M,S),t.assignFinalMaterial(M),f.push(M)}for(let m=0,v=f.length;m<v;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return s.extensions&&es(r,f[0],s),f[0];const d=new kt;s.extensions&&es(r,d,s),t.associations.set(d,{meshes:e});for(let m=0,v=f.length;m<v;m++)d.add(f[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Cn(Zf.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Co(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_r(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,l=[],c=[];for(let h=0,u=o.length;h<u;h++){const f=o[h];if(f){l.push(f);const d=new ft;s!==null&&d.fromArray(s.array,h*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new w0(l,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],l=[],c=[],h=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const m=r.channels[f],v=r.samplers[m.sampler],x=m.target,S=x.node,M=r.parameters!==void 0?r.parameters[v.input]:v.input,_=r.parameters!==void 0?r.parameters[v.output]:v.output;x.node!==void 0&&(o.push(this.getDependency("node",S)),l.push(this.getDependency("accessor",M)),c.push(this.getDependency("accessor",_)),h.push(v),u.push(x))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h),Promise.all(u)]).then(function(f){const d=f[0],m=f[1],v=f[2],x=f[3],S=f[4],M=[];for(let _=0,b=d.length;_<b;_++){const A=d[_],F=m[_],H=v[_],D=x[_],G=S[_];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const q=n._createAnimationTracks(A,F,H,D,G);if(q)for(let C=0;C<q.length;C++)M.push(q[C])}return new q0(s,void 0,M)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let c=0,h=r.weights.length;c<h;c++)l.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],l=r.children||[];for(let h=0,u=l.length;h<u;h++)o.push(n.getDependency("node",l[h]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(h){const u=h[0],f=h[1],d=h[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Qg)});for(let m=0,v=f.length;m<v;m++)u.add(f[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",l=[],c=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&l.push(c),s.camera!==void 0&&l.push(r.getDependency("camera",s.camera).then(function(h){return r._getNodeRef(r.cameraCache,s.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let u;if(s.isBone===!0?u=new Lh:h.length>1?u=new kt:h.length===1?u=h[0]:u=new fn,u!==h[0])for(let f=0,d=h.length;f<d;f++)u.add(h[f]);if(s.name&&(u.userData.name=s.name,u.name=o),_r(u,s),s.extensions&&es(n,u,s),s.matrix!==void 0){const f=new ft;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new kt;n.name&&(s.name=r.createUniqueName(n.name)),_r(s,n),n.extensions&&es(t,s,n);const o=n.nodes||[],l=[];for(let c=0,h=o.length;c<h;c++)l.push(r.getDependency("node",o[c]));return Promise.all(l).then(function(c){for(let u=0,f=c.length;u<f;u++)s.add(c[u]);const h=u=>{const f=new Map;for(const[d,m]of r.associations)(d instanceof fi||d instanceof Un)&&f.set(d,m);return u.traverse(d=>{const m=r.associations.get(d);m!=null&&f.set(d,m)}),f};return r.associations=h(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],l=e.name?e.name:e.uuid,c=[];$i[s.path]===$i.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(l);let h;switch($i[s.path]){case $i.weights:h=$r;break;case $i.rotation:h=gr;break;case $i.position:case $i.scale:h=Zr;break;default:n.itemSize===1?h=$r:h=Zr;break}const u=r.interpolation!==void 0?Zg[r.interpolation]:Rr,f=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const v=new h(c[d]+"."+$i[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=tu(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof gr?Jg:ru;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}}}),Sy=$_({"game-web35.js"(){Ki(),cy(),hy(),fy(),yy(),Ag();var e=Math.PI/180,t=656928,n=2814207,r=16722902,s=16769162;function o(a){return{r:a>>16&255,g:a>>8&255,b:a&255}}var l=[{name:"VICE RUNWAY",music:"../vice-runway.mp3",sun:{halo:["rgba(255,178,96,0.34)","rgba(255,96,112,0.13)","rgba(255,60,150,0)"],disc:["#ffcf72","#ff9a3e","#ff5a5f","#ff2f8e","#d81ea0"]},fog:7218768,glow:16731558,haze:16747158,skyA:[[24,12,48],[50,22,70],[92,34,86],[130,52,82],[156,82,66],[74,36,56],[24,13,36]],skyB:[[46,23,86],[90,40,112],[160,58,126],[206,90,112],[222,136,94],[118,58,86],[38,21,58]]},{name:"TURBO KASKADE",music:"../turbo-kaskade.mp3",sun:{halo:["rgba(170,195,255,0.30)","rgba(90,130,220,0.12)","rgba(60,90,180,0)"],disc:["#eef4ff","#cdd9f2","#a6bce6","#8098d0","#5f78ba"]},fog:1450058,glow:4881151,haze:6982352,skyA:[[8,12,36],[16,24,60],[28,42,88],[44,64,116],[70,98,150],[40,54,96],[12,16,40]],skyB:[[20,28,68],[34,50,100],[52,78,136],[80,112,168],[116,154,198],[66,90,142],[20,26,62]]},{name:"POISON HEARTBEAT",music:"../poison-heartbeat.mp3",sun:{halo:["rgba(150,255,120,0.32)","rgba(60,200,90,0.13)","rgba(30,150,80,0)"],disc:["#eaffb0","#a8ff5e","#4ef05a","#1fc96a","#0d8a5a"]},fog:1456159,glow:5504874,haze:8048746,skyA:[[6,16,20],[10,30,32],[16,48,40],[26,70,48],[44,100,56],[22,52,40],[8,18,18]],skyB:[[14,36,34],[24,62,52],[40,96,64],[64,132,72],[108,176,84],[52,102,64],[16,34,30]]}],c=new y0;c.fog=new M0(7218768,6e-5);var h=new kt;h.visible=!1,c.add(h);var u=new Cn(66,innerWidth/innerHeight,1,3e4),f=new Th({antialias:!1,alpha:!0,logarithmicDepthBuffer:!0}),d=Math.min(16,f.capabilities.getMaxAnisotropy());f.info.autoReset=!1;var m=0;document.body.appendChild(f.domElement);var v=1.85,x=new Sg(f);x.addPass(new xg(c,u));var S=new cl(new Ne(1,1),.9,.55,.18);x.addPass(S);function M(){u.aspect=innerWidth/innerHeight,u.updateProjectionMatrix();const a=Math.ceil(innerWidth/v),p=Math.ceil(innerHeight/v);f.setSize(a,p,!1),x.setSize(a,p),S.setSize(Math.ceil(a/3),Math.ceil(p/3));const g=f.domElement;g.style.width=innerWidth+"px",g.style.height=innerHeight+"px",g.style.imageRendering="pixelated"}M(),addEventListener("resize",M);var _={},b=a=>_[a]||(_[a]=new pr({color:a})),A=new ze({color:t,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2});function F(){return A}function H(a,p){const g=a.clone(!0);return g.traverse(y=>{y.isMesh&&(y.material=F(),y.add(new Hn(new pi(y.geometry,25),b(p))))}),g}function D(a,p,g){a.updateMatrixWorld(!0);const y=new ln().setFromObject(a),E=new B;y.getSize(E),E.y>.001&&a.scale.setScalar(p/E.y),a.updateMatrixWorld(!0);const L=new ln().setFromObject(a);a.position.y=g-L.min.y}var G=new ht(1.9,1.3),q=16765514;function C(a,p,g,y,E,L,k,N,U,V,T){const I=V||10,Y=T||4,oe=[],de=[{rot:0,o:L+.95,a:[a+3,y-3]},{rot:Math.PI,o:g-.95,a:[a+3,y-3]},{rot:Math.PI/2,o:y+.95,a:[g+3,L-3]},{rot:-Math.PI/2,o:a-.95,a:[g+3,L-3]}],Ue=typeof N=="number"&&N<=1?N:.5;for(const xe of de)for(let Oe=p+I+5;Oe<E-4;Oe+=I){const _t=Math.min(1,Ue*(.35+Math.random()*1.5));for(let Bt=xe.a[0]+Y*.5;Bt<xe.a[1];Bt+=Y){if(Math.random()>_t)continue;const mn=G.clone(),Yn=new ft;xe.rot===0?Yn.makeTranslation(Bt,Oe,xe.o):(Yn.makeRotationY(xe.rot),Yn.setPosition(xe.rot===Math.PI?Bt:xe.o,Oe,xe.rot===Math.PI?xe.o:Bt)),mn.applyMatrix4(Yn),oe.push(mn)}}oe.length||oe.push(G.clone().translate(0,p-999,0));const Be=Vn(oe);return oe.forEach(xe=>xe.dispose()),new re(Be,new ze({color:q,transparent:!0,opacity:.8,depthWrite:!1,side:zt,fog:!U}))}function P(a){const p=document.createElement("canvas");p.width=p.height=256;const g=p.getContext("2d"),y=g.createRadialGradient(128,128,44,128,128,128);y.addColorStop(0,a.halo[0]),y.addColorStop(.5,a.halo[1]),y.addColorStop(1,a.halo[2]),g.fillStyle=y,g.fillRect(0,0,256,256);const E=g.createLinearGradient(0,26,0,230);E.addColorStop(0,a.disc[0]),E.addColorStop(.34,a.disc[1]),E.addColorStop(.62,a.disc[2]),E.addColorStop(.85,a.disc[3]),E.addColorStop(1,a.disc[4]),g.fillStyle=E,g.beginPath(),g.arc(128,128,104,0,7),g.fill(),g.globalCompositeOperation="destination-out";for(let k=0;k<4;k++)g.fillRect(0,102+k*7,256,3);const L=g.createLinearGradient(0,127,0,139);return L.addColorStop(0,"rgba(0,0,0,0)"),L.addColorStop(1,"rgba(0,0,0,1)"),g.fillStyle=L,g.fillRect(0,127,256,129),new Di(p)}var ee=new re(new ht(6400,6400),new ze({map:P(l[0].sun),transparent:!0,depthWrite:!1,fog:!1}));ee.position.set(0,-470,-16800),c.add(ee);function ce(a){const{r:p,g,b:y}=o(a),E=document.createElement("canvas");E.width=4,E.height=128;const L=E.getContext("2d"),k=L.createLinearGradient(0,0,0,128);return k.addColorStop(0,`rgba(${p},${g},${y},0)`),k.addColorStop(.5,`rgba(${p},${g},${y},0.5)`),k.addColorStop(1,`rgba(${p},${g},${y},0)`),L.fillStyle=k,L.fillRect(0,0,4,128),new Di(E)}var ge=new re(new ht(6e4,1500),new ze({map:ce(l[0].haze),transparent:!0,depthWrite:!1,fog:!1,blending:on}));ge.position.set(0,-10,-6e3),c.add(ge);function X(a,p,g){const y=document.createElement("canvas");y.width=a,y.height=p;const E=y.getContext("2d");E.imageSmoothingEnabled=!1,g(E,a,p);const L=new Di(y);return L.magFilter=an,L.minFilter=an,L.colorSpace=Ot,L.wrapS=L.wrapT=xi,L}var K=new ze({color:656918}),Z=new ze({color:1314854}),ye=[{base:"#140b28",slab:"#1d1236",mull:"#0d0719",win:"#ffd24a",win2:"#7adcff",acc:"#ff2bd6",shop:["#ff9a3c","#ff2bd6","#2af0ff","#ffe08a"]},{base:"#0e0d2c",slab:"#171a3e",mull:"#080716",win:"#ffe08a",win2:"#9adcff",acc:"#2af0ff",shop:["#ffd24a","#ff5a5f","#2af0ff","#c0ff5e"]},{base:"#190a20",slab:"#241031",mull:"#0e0614",win:"#ffcf5e",win2:"#ff8a7a",acc:"#7b3ff2",shop:["#ff9a3c","#ff2bd6","#ffe08a","#7adcff"]},{base:"#101226",slab:"#1a1e38",mull:"#090a16",win:"#f5d98c",win2:"#8ac8f0",acc:"#ff5a8f",shop:["#ffb45e","#ff4a7c","#4adcff","#ffe08a"]},{base:"#0d1420",slab:"#152238",mull:"#070b12",win:"#ffe6a0",win2:"#6ae0d0",acc:"#2af0ff",shop:["#4adcff","#ffd24a","#ff2bd6","#c0ff5e"]},{base:"#1c0d16",slab:"#2a1522",mull:"#100710",win:"#ffc86a",win2:"#ff7ab0",acc:"#ff2b5c",shop:["#ff5a5f","#ffb45e","#ff2bd6","#ffe08a"]},{base:"#12102a",slab:"#1b1a40",mull:"#0a0918",win:"#e8d48a",win2:"#a0b8ff",acc:"#7b3ff2",shop:["#9a6aff","#2af0ff","#ffd24a","#ff4a7c"]},{base:"#0a1616",slab:"#122424",mull:"#060e0e",win:"#d8ffb0",win2:"#7adcff",acc:"#c0ff5e",shop:["#c0ff5e","#2af0ff","#ffe08a","#ff9a3c"]}];function ue(a,p,g,y,E){if(E>=11)return he(a,p,g,y,E);a.fillStyle=y.base,a.fillRect(0,0,p,g);const L=Math.min(16,g*.08|0)+6,k=6+(Math.random()*6|0),N=g-L;if(E===1){a.fillStyle="rgba(120,180,255,0.05)",a.fillRect(0,0,p,g);for(let V=0;V<p;V+=3)a.fillStyle="rgba(0,0,0,0.18)",a.fillRect(V,0,1,g);let U=0;for(let V=k;V<N-6;V+=6){if(U<=0&&Math.random()<.16&&(U=1+(Math.random()*3|0)),U>0){U--,a.fillStyle=Math.random()<.7?y.win:y.win2,a.globalAlpha=.75,a.fillRect(1,V+1,p-2,4),a.globalAlpha=1;for(let T=0;T<p;T+=3)a.fillStyle="rgba(0,0,0,0.35)",a.fillRect(T,V+1,1,4)}else if(a.fillStyle="rgba(10,16,40,0.55)",a.fillRect(1,V+1,p-2,4),Math.random()<.2){a.fillStyle=y.win2,a.globalAlpha=.5;const T=Math.random()*p*.7|0;a.fillRect(T,V+1,3+Math.random()*8|0,4),a.globalAlpha=1}a.fillStyle="rgba(0,0,0,0.4)",a.fillRect(0,V+5,p,1)}a.fillStyle="rgba(0,0,0,0.5)",a.fillRect(0,0,p,k),a.fillStyle=y.acc,a.fillRect(0,0,p,1),a.fillStyle="#0a0a18",a.fillRect(0,N,p,L),a.fillStyle=y.win2,a.globalAlpha=.55,a.fillRect(2,N+1,p-4,L-3),a.globalAlpha=1;for(let V=2;V<p-2;V+=5)a.fillStyle="rgba(0,0,0,0.5)",a.fillRect(V,N+1,1,L-3)}else if(E===2){for(let V=k;V<N-7;V+=7){a.fillStyle="rgba(0,0,0,0.25)",a.fillRect(0,V+7-1,p,1);for(let T=2;T<p-4;T+=5+(Math.random()*3|0)){const z=Math.random()<.34;a.fillStyle=z?Math.random()<.7?y.win:Math.random()<.85?"#aef2ff":y.acc:"rgba(0,0,0,0.55)",a.fillRect(T,V+2,2+(Math.random()*2|0),3+(Math.random()*2|0)),Math.random()<.16&&(a.fillStyle="rgba(0,0,0,0.6)",a.fillRect(T,V+7-3,4,2)),Math.random()<.05&&(a.fillStyle=y.shop[Math.random()*y.shop.length|0],a.fillRect(T+1,V+1,1,1))}}a.fillStyle="rgba(0,0,0,0.45)",a.fillRect(0,0,p,k),a.fillStyle="#05030c",a.fillRect(0,N,p,L);for(let V=1;V<p-3;){const T=3+(Math.random()*6|0);a.fillStyle=y.shop[Math.random()*y.shop.length|0],a.globalAlpha=.8,a.fillRect(V,N+2,Math.min(T,p-V-2),L-4),a.globalAlpha=1,V+=T+1+(Math.random()*3|0)}}else if(E===3){a.fillStyle="rgba(255,255,255,0.03)";for(let U=0;U<g;U+=24)a.fillRect(0,U,p,12);for(let U=0;U<3;U++){const V=4+Math.random()*(p-8)|0;a.fillStyle="rgba(0,0,0,0.45)",a.fillRect(V,0,2,g),a.fillStyle="rgba(255,255,255,0.08)",a.fillRect(V+2,0,1,g)}for(let U=k+6;U<N-10;U+=26){const V=4+Math.random()*Math.max(4,p-20)|0;for(let T=0;T<4;T++)a.fillStyle="rgba(0,0,0,0.5)",a.fillRect(V,U+T*3,12,2)}for(let U=k+14;U<N-8;U+=34)if(Math.random()<.7){const V=3+Math.random()*Math.max(4,p-12)|0;a.fillStyle=Math.random()<.6?y.win2:y.win,a.globalAlpha=.8,a.fillRect(V,U,7,5),a.globalAlpha=1}a.fillStyle="#0a0808",a.fillRect(0,N,p,L);for(let U=0;U<p;U+=6)a.fillStyle=U/6%2?"#e6c02a":"#141414",a.fillRect(U,N+L-4,6,3);a.fillStyle="#ff2b4c",a.globalAlpha=.8;for(let U=k+8;U<N;U+=40)a.fillRect(p-4,U,2,2);a.globalAlpha=1}else if(E===4){for(let I=k;I<N-8;I+=8){a.fillStyle="rgba(0,0,0,0.4)",a.fillRect(0,I+8-1,p,1);for(let Y=2;Y<p-4;Y+=4)Math.random()<.18&&(a.fillStyle=y.win,a.fillRect(Y,I+2,3,4))}const V=g*.22|0,T=g*.4|0,z=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0];if(a.fillStyle="#0b0518",a.fillRect(1,V,p-2,T),a.strokeStyle=z,a.lineWidth=1,a.strokeRect(1.5,V+.5,p-3,T-1),Math.random()<.5){a.fillStyle="#ff9a3c",a.beginPath(),a.arc(p/2,V+T*.42,Math.min(p,T)*.3,0,7),a.fill(),a.fillStyle="#0b0518";for(let I=0;I<4;I++)a.fillRect(2,V+T*.42+I*4,p-4,2);a.fillStyle=z,a.font="8px monospace",a.textBaseline="top",a.fillText(Ke[Math.random()*Ke.length|0],3,V+T-11)}else for(let I=V+4;I<V+T-8;I+=9)for(let Y=4;Y<p-8;Y+=8)Math.random()<.75&&(a.fillStyle=Math.random()<.6?z:"#ffd24a",a.fillRect(Y,I,5,5),Math.random()<.5&&a.fillRect(Y+2,I+5,2,2));a.fillStyle="#05030c",a.fillRect(0,N,p,L);for(let I=1;I<p-3;){const Y=4+(Math.random()*8|0);a.fillStyle=y.shop[Math.random()*y.shop.length|0],a.globalAlpha=.75,a.fillRect(I,N+2,Math.min(Y,p-I-2),L-4),a.globalAlpha=1,I+=Y+2+(Math.random()*4|0)}}else if(E===6){a.fillStyle="#070b18",a.fillRect(0,0,p,g),a.globalAlpha=.3,a.strokeStyle="#2af0ff",a.lineWidth=1;for(let U=0;U<g;U+=8)a.beginPath(),a.moveTo(0,U+.5),a.lineTo(p,U+.5),a.stroke();for(let U=0;U<p;U+=8)a.beginPath(),a.moveTo(U+.5,0),a.lineTo(U+.5,g),a.stroke();a.globalAlpha=1;for(let U=0;U<g/12;U++){const V=(Math.random()*(p/8)|0)*8+1,T=(Math.random()*(g/8)|0)*8+1;a.fillStyle=Math.random()<.7?"#2af0ff":"#ff2bd6",a.globalAlpha=.45+Math.random()*.45,a.fillRect(V,T,6,6),a.globalAlpha=1}a.fillStyle="#05030c",a.fillRect(0,N,p,L);for(let U=1;U<p-3;){const V=4+(Math.random()*7|0);a.fillStyle=y.shop[Math.random()*y.shop.length|0],a.globalAlpha=.75,a.fillRect(U,N+2,Math.min(V,p-U-2),L-4),a.globalAlpha=1,U+=V+2+(Math.random()*4|0)}}else if(E===7){a.fillStyle="#05060e",a.fillRect(0,0,p,g);for(let T=0;T<p;T+=4)a.fillStyle="rgba(255,255,255,0.025)",a.fillRect(T,0,1,g);a.fillStyle=y.acc,a.globalAlpha=.8,a.fillRect(p*.5|0,k,1,g-k-L),a.globalAlpha=1;const U=g*.2|0,V=Math.max(6,Math.min(p*.28,20))|0;a.strokeStyle=y.acc,a.lineWidth=2,a.beginPath(),a.arc(p/2,U,V,0,7),a.stroke(),Math.random()<.5&&(a.fillStyle=y.acc,a.globalAlpha=.7,a.fillRect(p/2-V*.4,U-1.5,V*.8,3),a.globalAlpha=1);for(let T=k;T<N;T+=10)Math.random()<.14&&(a.fillStyle=y.win2,a.globalAlpha=.45,a.fillRect(2,T,p-4,1),a.globalAlpha=1);a.fillStyle="#04040a",a.fillRect(0,N,p,L),a.fillStyle=y.acc,a.globalAlpha=.8,a.fillRect(p/2-2,N+2,4,L-4),a.globalAlpha=1}else if(E===8){for(let U=k;U<N;U+=3)a.fillStyle=(U/3|0)%2?"#ffd24a":"#ff2bd6",a.fillRect(1,U,2,2),a.fillRect(p-3,U,2,2);for(let U=k+6;U<N-14;U+=18+(Math.random()*10|0)){const V=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.random()*4|0];a.fillStyle="#0a0512",a.fillRect(4,U,p-8,10),a.strokeStyle=V,a.lineWidth=1,a.strokeRect(4.5,U+.5,p-9,9),a.fillStyle=V,a.font="8px monospace",a.textBaseline="top",a.fillText(Ke[Math.random()*Ke.length|0],7,U+1),a.fillStyle="rgba(0,0,0,0.55)";for(let T=U+12;T<Math.min(U+17,N-2);T+=5)for(let z=4;z<p-6;z+=4)a.fillRect(z,T,3,3)}a.fillStyle="#05030c",a.fillRect(0,N,p,L);for(let U=1;U<p-3;){const V=3+(Math.random()*6|0);a.fillStyle=y.shop[Math.random()*y.shop.length|0],a.globalAlpha=.85,a.fillRect(U,N+2,Math.min(V,p-U-2),L-4),a.globalAlpha=1,U+=V+1+(Math.random()*3|0)}}else if(E===9){a.fillStyle="#0a0616",a.fillRect(0,0,p,g);const U=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0],V=Math.random()*3|0;if(V===0){a.fillStyle="#1a1030",a.fillRect(2,2,p-4,g-4);const T=g*.4;a.fillStyle="#ffd8c0",a.fillRect(p*.25,T-g*.12,p*.5,g*.24),a.fillStyle="#141024",a.fillRect(p*.2,T-g*.18,p*.6,g*.08),a.fillRect(p*.2,T-g*.16,p*.12,g*.2),a.fillRect(p*.68,T-g*.16,p*.12,g*.2),a.fillStyle="#ff2b4c",a.beginPath(),a.arc(p*.5,T+g*.02,p*.05,0,7),a.fill(),a.fillStyle="#141024",a.fillRect(p*.34,T-g*.02,p*.08,2),a.fillRect(p*.58,T-g*.02,p*.08,2),a.fillStyle=U,a.font="8px monospace",a.textBaseline="top",a.fillText(Ke[Math.random()*Ke.length|0],4,g*.72|0)}else if(V===1){a.fillStyle="#101a3a",a.fillRect(2,2,p-4,g-4);const T=g*.38,z=p*.18;a.fillStyle="#e8f0ff",a.beginPath(),a.ellipse(p/2,T,p*.32,z,0,0,7),a.fill(),a.fillStyle=U,a.beginPath(),a.arc(p/2,T,z*.6,0,7),a.fill(),a.fillStyle="#08060e",a.beginPath(),a.arc(p/2,T,z*.28,0,7),a.fill()}else{for(let T=4;T<g-4;T+=5){a.fillStyle=Math.random()<.5?U:"#7b3ff2",a.globalAlpha=.4+Math.random()*.5;const z=Math.sin(T*.15)*p*.2+p*.3|0;a.fillRect(4,T,z+(p*.2|0),2)}a.globalAlpha=1}a.fillStyle="rgba(0,0,0,0.35)";for(let T=2;T<g;T+=3)a.fillRect(2,T,p-4,1);a.strokeStyle=U,a.lineWidth=1,a.strokeRect(1.5,1.5,p-3,g-3),a.fillStyle="#05030c",a.fillRect(0,N,p,L)}else if(E===10){a.fillStyle="#141230",a.fillRect(0,0,p,g);for(let z=0;z<g;z+=14+(Math.random()*10|0))for(let I=0;I<p;I+=12+(Math.random()*12|0))a.fillStyle="rgba(255,255,255,"+(.02+Math.random()*.04).toFixed(3)+")",a.fillRect(I,z,10+(Math.random()*12|0),12+(Math.random()*10|0));const U="#2ab4ff",V="#ff2bd6",T=(z,I)=>{a.strokeStyle=I,a.lineWidth=1.5,a.globalAlpha=.95,a.beginPath();let Y=2+Math.random()*8;for(a.moveTo(z+.5,Y);Y<g-10;){const oe=14+Math.random()*30;if(Y=Math.min(g-6,Y+oe),a.lineTo(z+.5,Y),Math.random()<.55){const de=(Math.random()<.5?-1:1)*(4+Math.random()*10)|0;z=Math.max(3,Math.min(p-3,z+de)),a.lineTo(z+.5,Y)}}a.stroke(),a.globalAlpha=1};T(3+Math.random()*p*.25|0,U),T(6+Math.random()*p*.2|0,U),T(p-4-Math.random()*p*.25|0,V),T(p-8-Math.random()*p*.2|0,V);for(let z=0;z<3;z++){const I=3+Math.random()*(p-10)|0;a.fillStyle="#0d0b22",a.fillRect(I,4,3,g-8),a.fillStyle="rgba(255,255,255,0.12)",a.fillRect(I+2,4,1,g-8)}if(p>30){const z=4+Math.random()*(p-26)|0,I=g*.3+Math.random()*g*.3|0;a.fillStyle="#0c0a20",a.fillRect(z,I,22,22),a.fillStyle="#050410";for(const Y of[[5,5],[16,5],[5,16],[16,16]])a.beginPath(),a.arc(z+Y[0],I+Y[1],4,0,7),a.fill()}{const z=4+Math.random()*Math.max(6,p-20)|0,I=g*.15+Math.random()*g*.5|0;for(let Y=0;Y<5;Y++)a.fillStyle="#080618",a.fillRect(z,I+Y*3,16,2)}for(let z=0;z<3+(g/90|0);z++){const I=4+Math.random()*Math.max(6,p-20)|0,Y=6+Math.random()*Math.max(10,g-30)|0;a.fillStyle="#0a0816",a.fillRect(I-1,Y-1,14,7);for(let oe=0;oe<3;oe++)a.fillStyle=Math.random()<.85?"#ffb742":"#3a2c14",a.fillRect(I+oe*4,Y,3,5)}for(let z=0;z<8;z++)a.fillStyle=Math.random()<.5?U:V,a.globalAlpha=.9,a.fillRect(3+Math.random()*(p-6)|0,3+Math.random()*(g-8)|0,2,1),a.globalAlpha=1;a.fillStyle="#0a0a1a",a.fillRect(p*.25,N-2,p*.5,L+2);for(let z=N+1;z<g-3;z+=3)a.fillStyle="rgba(255,255,255,0.06)",a.fillRect(p*.27,z,p*.46,1);for(let z=0;z<p;z+=6)a.fillStyle=(z/6|0)%2?"#e6c02a":"#141414",a.fillRect(z,g-3,6,2)}else{let U=0;const V=["rgba(255,255,255,0.05)","rgba(0,0,0,0.22)","rgba(122,63,242,0.10)","rgba(255,154,60,0.07)","rgba(42,240,255,0.06)"];for(;U<g;){const T=Math.min(g-U,40+(Math.random()*90|0));a.fillStyle=V[Math.random()*V.length|0],a.fillRect(0,U,p,T);const z=6+(Math.random()*3|0),I=3+(Math.random()*2|0),Y=.2+Math.random()*.35;for(let oe=U+3;oe<U+T-z;oe+=z)for(let de=2;de<p-4;de+=I+2)a.fillStyle=Math.random()<Y?Math.random()<.75?y.win:y.win2:"rgba(0,0,0,0.5)",a.fillRect(de,oe,I,z-3);a.fillStyle="rgba(0,0,0,0.6)",a.fillRect(0,U+T-1,p,1),U+=T}a.fillStyle="#05030c",a.fillRect(0,N,p,L);for(let T=1;T<p-3;){const z=3+(Math.random()*7|0);a.fillStyle=y.shop[Math.random()*y.shop.length|0],a.globalAlpha=.8,a.fillRect(T,N+2,Math.min(z,p-T-2),L-4),a.globalAlpha=1,T+=z+1+(Math.random()*4|0)}}a.fillStyle="rgba(0,0,0,0.4)",a.fillRect(0,0,1,g),a.fillRect(p-1,0,1,g)}function he(a,p,g,y,E){const L=Math.min(16,g*.08|0)+6,k=g-L,N=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e","#9a6aff"],U=N[Math.random()*N.length|0],V=()=>{a.fillStyle="#05030c",a.fillRect(0,k,p,L);for(let T=1;T<p-3;){const z=4+(Math.random()*7|0);a.fillStyle=y.shop[Math.random()*y.shop.length|0],a.globalAlpha=.8,a.fillRect(T,k+2,Math.min(z,p-T-2),L-4),a.globalAlpha=1,T+=z+2+(Math.random()*3|0)}};if(a.fillStyle=y.base,a.fillRect(0,0,p,g),E===11){for(let T=4,z=0;T<k-6;T+=7,z^=1)for(let I=2+z*4;I<p-6;I+=8){const Y=Math.random()<.2;a.fillStyle=Y?U:"rgba(0,0,0,0.45)",a.globalAlpha=Y?.85:1,a.beginPath(),a.moveTo(I+3,T),a.lineTo(I+6,T+2),a.lineTo(I+6,T+5),a.lineTo(I+3,T+7),a.lineTo(I,T+5),a.lineTo(I,T+2),a.closePath(),a.fill(),a.globalAlpha=1}V()}else if(E===12){a.fillStyle="#040a08",a.fillRect(0,0,p,g);for(let T=3;T<p-2;T+=5){let z=Math.random()*g|0;const I=g*.2+Math.random()*g*.4|0;for(let Y=0;Y<I;Y+=4){const oe=(z+Y)%g;a.fillStyle=Y<8?"#d8ffe8":"#3adc7a",a.globalAlpha=Math.max(.15,1-Y/I),a.fillRect(T,oe,2,3)}a.globalAlpha=1}V()}else if(E===13){a.fillStyle="#1c1a22",a.fillRect(0,0,p,g);for(let T=4;T<k-10;T+=12)for(let z=3;z<p-8;z+=10)a.fillStyle="#0a090f",a.fillRect(z,T,8,9),a.fillStyle="#26232e",a.fillRect(z,T,8,1),a.fillRect(z,T,1,9),Math.random()<.22&&(a.fillStyle="#ffd24a",a.globalAlpha=.75,a.fillRect(z+2,T+3,3,3),a.globalAlpha=1);a.fillStyle="rgba(0,0,0,0.3)";for(let T=0;T<5;T++)a.fillRect(Math.random()*p|0,0,2,g);V()}else if(E===14){for(let T=2;T<k-2;T+=4)a.fillStyle="#0c0a18",a.fillRect(1,T,p-2,3),Math.random()<.3&&(a.fillStyle=Math.random()<.6?"#ffb046":U,a.globalAlpha=.5,a.fillRect(1,T+3,p-2,1),a.globalAlpha=1);V()}else if(E===15){a.fillStyle="#08060e",a.fillRect(0,0,p,g);for(let T=3;T<k-8;T+=9)for(let z=2;z<p-8;z+=10){const I=N[Math.random()*N.length|0];a.fillStyle="#020204",a.fillRect(z,T,9,7),a.fillStyle=I,a.globalAlpha=.25+Math.random()*.6,a.fillRect(z+1,T+1,7,5),a.globalAlpha=1,Math.random()<.4&&(a.fillStyle="rgba(255,255,255,0.5)",a.fillRect(z+1,T+1+(Math.random()*4|0),7,1))}V()}else if(E===16){for(let T=0,z=0;T<k;T+=9,z^=1)for(let I=-6;I<p;I+=12){const Y=Math.random();a.fillStyle=Y<.12?U:Y<.5?"#141126":"#0d0b1c",a.globalAlpha=Y<.12?.6:1,a.beginPath(),(z^I/12&1)%2?(a.moveTo(I+z*6,T),a.lineTo(I+12+z*6,T),a.lineTo(I+6+z*6,T+9)):(a.moveTo(I+6+z*6,T),a.lineTo(I+12+z*6,T+9),a.lineTo(I+z*6,T+9)),a.closePath(),a.fill(),a.globalAlpha=1}a.strokeStyle="rgba(255,255,255,0.08)";for(let T=0;T<k;T+=9)a.beginPath(),a.moveTo(0,T+.5),a.lineTo(p,T+.5),a.stroke();V()}else if(E===17){for(let T=6;T<k-14;T+=16){a.fillStyle="#221018",a.fillRect(0,T,p,3),a.fillStyle="#160a10",a.fillRect(2,T+3,p-4,10);for(let z=4;z<p-4;z+=6)Math.random()<.55&&(a.fillStyle="#ffb046",a.globalAlpha=.85,a.fillRect(z,T+6,3,4),a.globalAlpha=1);a.fillStyle="#ff5a3c",a.globalAlpha=.9;for(let z=3;z<p-3;z+=10)a.fillRect(z,T+2,2,2);a.globalAlpha=1}V()}else if(E===18){a.fillStyle="#0e0a16",a.fillRect(0,0,p,g);const T=14+(Math.random()*10|0);for(let z=0;z<T;z++){const I=Math.random()*(p-10)|0,Y=Math.random()*(k-12)|0,oe=6+Math.random()*10|0,de=5+Math.random()*9|0,Ue=N[Math.random()*N.length|0];a.fillStyle="#0a0512",a.fillRect(I-1,Y-1,oe+2,de+2),a.fillStyle=Ue,a.globalAlpha=.55+Math.random()*.35,a.fillRect(I,Y,oe,de),a.globalAlpha=1,a.fillStyle="rgba(0,0,0,0.5)";for(let Be=Y+2;Be<Y+de-1;Be+=3)a.fillRect(I+1,Be,oe-2,1)}V()}else if(E===19){a.fillStyle="#100d18",a.fillRect(0,0,p,g);const T=Math.max(4,p*.16|0),z=p-T>>1;a.fillStyle=U,a.globalAlpha=.9,a.fillRect(z,4,T,k-8),a.globalAlpha=1,a.fillStyle="rgba(255,255,255,0.6)",a.fillRect(z+(T/2|0),4,1,k-8);for(let I=8;I<k-6;I+=14)a.fillStyle="#080612",a.fillRect(z-2,I,T+4,2);for(let I=6;I<k-8;I+=18)a.fillStyle="#e6c02a",a.globalAlpha=.5,a.fillRect(3,I,4,2),a.fillRect(5,I+2,4,2),a.fillRect(p-7,I,4,2),a.fillRect(p-9,I+2,4,2),a.globalAlpha=1;V()}else if(E===20){a.fillStyle="#141018",a.fillRect(0,0,p,g);for(let T=3;T<p-2;T+=6)a.fillStyle=T/6%3===0?"#c8a24a":"#3a2f22",a.globalAlpha=T/6%3===0?.8:1,a.fillRect(T,6,2,k-10),a.globalAlpha=1;for(let T=10;T<k-6;T+=24)a.fillStyle="#c8a24a",a.globalAlpha=.4,a.fillRect(2,T,p-4,1),a.globalAlpha=1;a.fillStyle="#ffd24a",a.globalAlpha=.85;for(let T=5;T<p-4;T+=12)Math.random()<.5&&a.fillRect(T,8+Math.random()*(k-20)|0,2,4);a.globalAlpha=1,V()}else if(E===21){a.fillStyle="#0a0812",a.fillRect(0,0,p,g);for(let T=4;T<k;T+=8)for(let z=3;z<p-4;z+=5)Math.random()<.25&&(a.fillStyle="#ffcf5e",a.globalAlpha=.6,a.fillRect(z,T+2,3,3),a.globalAlpha=1);a.strokeStyle="#2a2438",a.lineWidth=1;for(let T=1;T<p;T+=6)a.beginPath(),a.moveTo(T+.5,0),a.lineTo(T+.5,k),a.stroke();for(let T=1;T<k;T+=6)a.beginPath(),a.moveTo(0,T+.5),a.lineTo(p,T+.5),a.stroke();V()}else if(E===22){a.fillStyle="#12101e",a.fillRect(0,0,p,g);for(let T=6;T<k-4;T+=7)for(let z=5;z<p-4;z+=7){const I=Math.random()<.4;a.fillStyle=I?Math.random()<.8?"#ffd24a":"#7adcff":"#060410",a.globalAlpha=I?.9:1,a.beginPath(),a.arc(z,T,2.2,0,7),a.fill(),a.globalAlpha=1}V()}else if(E===23){a.fillStyle="#0c1018",a.fillRect(0,0,p,g);for(let T=4;T<k-8;T+=10)for(let z=2;z<p-10;z+=11)a.fillStyle="#0a1c33",a.beginPath(),a.moveTo(z,T+7),a.lineTo(z+9,T+5),a.lineTo(z+9,T),a.lineTo(z,T+2),a.closePath(),a.fill(),a.strokeStyle="rgba(120,190,255,0.35)",a.stroke(),Math.random()<.08&&(a.fillStyle="#04070c",a.fillRect(z+2,T+1,5,4));V()}else if(E===24){a.fillStyle="#100e16",a.fillRect(0,0,p,g);for(let T=4;T<k-6;T+=8)for(let z=3;z<p-5;z+=6){const I=Math.random();a.fillStyle=I<.1?"#ffcf5e":I<.35?"#04030a":"#0a0814",a.globalAlpha=I<.1?.8:1,a.fillRect(z,T,4,5),a.globalAlpha=1,I>=.1&&I<.2&&(a.fillStyle="#1c1826",a.beginPath(),a.moveTo(z,T),a.lineTo(z+4,T+5),a.stroke())}for(let T=0;T<3;T++){const z=N[Math.random()*N.length|0],I=k*.2+Math.random()*k*.6|0;a.strokeStyle=z,a.lineWidth=2,a.globalAlpha=.85,a.beginPath();let Y=2+Math.random()*p*.3|0;a.moveTo(Y,I);for(let oe=0;oe<4;oe++)Y+=4+Math.random()*8,a.lineTo(Y,I+(Math.random()-.5)*8|0);a.stroke(),a.globalAlpha=1,a.lineWidth=1}V()}else if(E===25){a.fillStyle="#062a30",a.fillRect(0,0,p,g);const T=a.createLinearGradient(0,0,0,g);T.addColorStop(0,"rgba(20,220,210,0.25)"),T.addColorStop(1,"rgba(10,90,110,0.4)"),a.fillStyle=T,a.fillRect(0,0,p,g);for(let z=8;z<k;z+=9){a.fillStyle="rgba(0,0,0,0.5)",a.fillRect(0,z,p,2);for(let I=0;I<3;I++)Math.random()<.5&&(a.fillStyle="rgba(0,0,0,0.55)",a.fillRect(Math.random()*(p-8)|0,z-5,3+Math.random()*6|0,4))}a.fillStyle="rgba(255,255,255,0.25)";for(let z=0;z<10;z++)a.fillRect(Math.random()*p|0,Math.random()*k|0,1,1);V()}else if(E===26){a.fillStyle="#12101c",a.fillRect(0,0,p,g);for(let T=8;T<k-10;T+=13)for(let z=7;z<p-6;z+=13)a.fillStyle="#0a0814",a.fillRect(z-6,T-6,12,12),a.fillStyle="#050308",a.beginPath(),a.arc(z,T,4.5,0,7),a.fill(),a.strokeStyle="#221e30",a.beginPath(),a.moveTo(z-4,T),a.lineTo(z+4,T),a.moveTo(z,T-4),a.lineTo(z,T+4),a.stroke(),Math.random()<.15&&(a.fillStyle=U,a.globalAlpha=.7,a.fillRect(z-5,T+4,10,1),a.globalAlpha=1);V()}else if(E===27){a.fillStyle="#100d1a",a.fillRect(0,0,p,g);for(let T=6;T<k-6;T+=9)for(let z=4;z<p-6;z+=7)Math.random()<.3&&(a.fillStyle="#ffcf5e",a.globalAlpha=.55,a.fillRect(z,T,3,4),a.globalAlpha=1);a.strokeStyle="#060410",a.lineWidth=1.5;for(let T=0;T<7;T++){const z=Math.random()*k*.8|0,I=4+Math.random()*8;a.beginPath(),a.moveTo(0,z),a.quadraticCurveTo(p/2,z+I,p,z+(Math.random()-.5)*8|0),a.stroke()}for(let T=0;T<4;T++){const z=Math.random()*(p-8)|0,I=Math.random()*(k-10)|0;a.fillStyle="#1a1626",a.fillRect(z,I,6,8),a.fillStyle=Math.random()<.5?"#ff2b4c":"#2af0ff",a.fillRect(z+2,I+2,2,1)}V()}else if(E===28){a.fillStyle="#0a0814",a.fillRect(0,0,p,g);const T=Math.max(8,p*.4|0),z=p-T>>1;a.fillStyle="#050208",a.fillRect(z-1,3,T+2,k-6);for(let I=5;I<k-8;I+=8){const Y=N[Math.random()*N.length|0];a.fillStyle=Y,a.globalAlpha=.55+Math.random()*.35,a.fillRect(z,I,T,6),a.globalAlpha=1,a.fillStyle="rgba(0,0,0,0.4)",a.fillRect(z,I+2,T,1)}a.strokeStyle=U,a.strokeRect(z-1.5,2.5,T+3,k-5),V()}else if(E===29){a.fillStyle="#070a0c",a.fillRect(0,0,p,g);for(let T=2;T<p-1;T+=3){const z=Math.random()<.7?"#4ef0b0":N[Math.random()*N.length|0];a.fillStyle=z,a.globalAlpha=.25+Math.random()*.55;const I=Math.random()*10|0,Y=k-(Math.random()*10|0);a.fillRect(T,I,1,Y-I),a.globalAlpha=1;for(let oe=I+6;oe<Y;oe+=8+(Math.random()*8|0))a.fillStyle="rgba(0,0,0,0.6)",a.fillRect(T,oe,1,2)}V()}else{a.fillStyle="#141118",a.fillRect(0,0,p,g);for(let T=-p;T<k+p;T+=14)a.fillStyle=(T/14|0)%2?"#1c1822":"#0e0b12",a.beginPath(),a.moveTo(0,T),a.lineTo(p,T-p*.4),a.lineTo(p,T-p*.4+8),a.lineTo(0,T+8),a.closePath(),a.fill();a.fillStyle=U,a.globalAlpha=.8;for(let T=10;T<k-6;T+=26)a.fillRect(2,T,p-4,2);a.globalAlpha=1;for(let T=0;T<2;T++){const z=4+Math.random()*(p-24)|0,I=k*.3+Math.random()*k*.4|0;a.fillStyle="#0a0a14",a.fillRect(z,I,16,12);for(let Y=I+2;Y<I+11;Y+=2)a.fillStyle="rgba(255,255,255,0.06)",a.fillRect(z+1,Y,14,1)}V()}a.fillStyle="rgba(0,0,0,0.4)",a.fillRect(0,0,1,g),a.fillRect(p-1,0,1,g)}function _e(a,p,g){if(Math.random()<.38){const y=["#4ef0e0","#2af0ff","#c0ff5e","#ff2bd6"][Math.random()*4|0];a.strokeStyle=y,a.fillStyle=y,a.lineWidth=1,a.globalAlpha=.85;const E=2+(Math.random()*4|0);for(let L=0;L<E;L++){let k=4+Math.random()*(p-8)|0,N=0;for(a.beginPath(),a.moveTo(k+.5,0);N<g-8;){const U=8+(Math.random()*30|0);if(N=Math.min(g-4,N+U),a.lineTo(k+.5,N+.5),Math.random()<.5&&N<g-12){const V=(Math.random()<.5?-1:1)*(3+Math.random()*8)|0;k=Math.max(3,Math.min(p-4,k+V)),a.lineTo(k+.5,N+.5)}}a.stroke(),a.fillRect(k-1,N-1,3,3)}a.globalAlpha=1}if(Math.random()<.4){const y=3+(Math.random()*6|0);for(let E=0;E<y;E++){const L=2+Math.random()*Math.max(4,p-12)|0,k=6+Math.random()*Math.max(8,g-24)|0,N=4+Math.random()*8|0,U=3+Math.random()*5|0,V=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.random()*5|0];a.fillStyle="#0a0616",a.fillRect(L-1,k-1,N+2,U+2),a.fillStyle=V,a.globalAlpha=.8,a.fillRect(L,k,N,U),a.globalAlpha=1,a.fillStyle="rgba(255,255,255,0.6)",a.fillRect(L+1,k+1,Math.max(1,N*.4|0),1)}}}function ve(a,p,g,y){const E=ye[Math.floor(Math.random()*ye.length)],L=Math.random(),k=g!==void 0?g:Math.random()<.6?L<.13?0:L<.25?1:L<.39?2:L<.47?3:L<.54?4:L<.6?5:L<.68?6:L<.76?7:L<.84?8:L<.92?9:10:11+(Math.random()*20|0),N=Math.max(24,Math.min(160,Math.round(a*2)))|0,U=Math.max(48,Math.min(1024,Math.round(p*2)))|0,V=X(N,U,T=>{if(k!==0){ue(T,N,U,E,k),_e(T,N,U);return}T.fillStyle=E.base,T.fillRect(0,0,N,U);const z=8+(Math.random()*6|0);for(let Ue=0;Ue<N;Ue+=z)T.fillStyle=E.mull,T.fillRect(Ue,0,1,U);T.fillStyle="rgba(255,255,255,0.03)";for(let Ue=0;Ue<N;Ue+=z*2)T.fillRect(Ue,0,z,U);const I=8,Y=Math.min(16,U*.08|0)+6,oe=6+(Math.random()*6|0);for(let Ue=oe;Ue<U-Y-I;Ue+=I){T.fillStyle=E.slab,T.fillRect(0,Ue+I-1,N,1);const Be=Math.random();let xe=-1,Oe=-1;if(Be<.14)xe=0,Oe=N;else if(Be<.62){const _t=Math.random()*N|0;xe=_t,Oe=_t+(N*.15+Math.random()*N*.3|0)}for(let _t=0;_t<N-2;_t+=z)for(let Bt=_t+2;Bt<_t+z-1&&Bt<N-3;Bt+=4){const mn=Bt>=xe&&Bt<=Oe&&Math.random()<.9;mn?T.fillStyle=Math.random()<.8?E.win:Math.random()<.85?E.win2:E.acc:T.fillStyle="rgba(0,0,0,0.55)",T.fillRect(Bt,Ue+2,3,I-4),mn&&Math.random()<.35&&(T.fillStyle="rgba(255,255,255,0.55)",T.fillRect(Bt+1,Ue+3,1,1))}}T.fillStyle="rgba(0,0,0,0.5)",T.fillRect(0,0,N,oe),Math.random()<.6&&(T.fillStyle=E.acc,T.fillRect(0,0,N,1));const de=U-Y;T.fillStyle="#05030c",T.fillRect(0,de,N,Y);for(let Ue=1;Ue<N-3;){const Be=4+(Math.random()*9|0);T.fillStyle=E.shop[Math.random()*E.shop.length|0],T.globalAlpha=.75,T.fillRect(Ue,de+2,Math.min(Be,N-Ue-2),Y-4),T.globalAlpha=1,Ue+=Be+2+(Math.random()*4|0)}T.fillStyle="rgba(255,240,200,0.5)",T.fillRect(0,de,N,1),T.fillStyle="rgba(0,0,0,0.4)",T.fillRect(0,0,1,U),T.fillRect(N-1,0,1,U),_e(T,N,U)});return V.wrapS=V.wrapT=Bn,y&&y>1&&(V.wrapS=xi,V.repeat.x=y),V.minFilter=Ar,V.generateMipmaps=!0,V.anisotropy=d,new ze({map:V})}var Q=new Yh().load("../models/facades/cyberpunk_facade_asset/symmetrical_neon_cyberpunk_tower.png");Q.colorSpace=Ot,Q.anisotropy=d;var fe=Q.clone();fe.wrapS=xi,fe.repeat.x=-1,fe.offset.x=1,fe.needsUpdate=!0;var Ce=[];for(const a of[Q,fe])for(const p of[16777215,16767176,13165823,15780095])Ce.push(new ze({map:a,color:p}));var Le=["01_neon_cyberpunk_tower_facade","02_neon_cyberpunk_hotel_facade","03_neon_pixel_art_skyscraper_facade","04_neon_split_industrial_facade","05_neon_symmetry_cyberpunk_building_facade","06_neon_dataflow_tower_facade","07_neon_dream_cyberpunk_hotel_skyscraper","08_neon_cyberpunk_megastructure_facade","09_nexus_cyberpunk_megastructure_facade","10_cyberpunk_core_tower_tx_09","11_neon_datacore_cyberpunk_server_citywall","12_neo_terminal_cyberpunk_market_facade","13_neon_megablock_city_facade","14_nova_civic_systems_megastructure"],qe=4,tt=4,pt=512,nt=1536,Tt=document.createElement("canvas");Tt.width=qe*pt,Tt.height=tt*nt;var J=Tt.getContext("2d");J.fillStyle="#0a0820",J.fillRect(0,0,Tt.width,Tt.height);var tn=new Di(Tt);tn.colorSpace=Ot,tn.minFilter=Ar,tn.generateMipmaps=!0,tn.anisotropy=d;var ut=new ze({map:tn});Le.forEach((a,p)=>{const g=new Image;g.onload=()=>{J.drawImage(g,p%qe*pt,(p/qe|0)*nt,pt,nt),tn.needsUpdate=!0},g.src="../models/facades/cyberpunk_facades_all/"+a+".png"});var We=0;function Ze(a,p,g){const y=p%qe/qe,E=1-((p/qe|0)+1)/tt,L=1/qe,k=1/tt,N=a.attributes.uv;for(let U=0;U<N.count;U++){let V=N.getX(U);g&&(V=1-V),N.setXY(U,y+V*L,E+N.getY(U)*k)}N.needsUpdate=!0}var Ke=["PUNK","VICE","TURBO","NEON","BUST","RUN","MAXX","GRID"];function yt(){const a=Math.floor(Math.random()*3);return X(48,24,p=>{const g=["#12062a","#1a0630","#08102a"][Math.floor(Math.random()*3)];p.fillStyle=g,p.fillRect(0,0,48,24);const y=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.floor(Math.random()*4)];if(a===0){p.fillStyle="#ff9a3c",p.beginPath(),p.arc(14,12,8,0,7),p.fill(),p.fillStyle=g;for(let E=0;E<3;E++)p.fillRect(4,13+E*3,20,1);p.fillStyle=y,p.fillRect(30,6,2,14);for(const E of[[-6,-2],[-4,-4],[0,-5],[4,-4],[6,-2]])p.fillRect(31+E[0],6+E[1],4,1)}else if(a===1)p.fillStyle=y,p.font="8px monospace",p.textBaseline="top",p.fillText(Ke[Math.floor(Math.random()*Ke.length)],4,3),p.fillStyle="rgba(255,255,255,0.15)",p.fillRect(0,13,48,1),p.fillStyle="#ffd24a",p.fillText(Ke[Math.floor(Math.random()*Ke.length)],12,14);else for(let E=4;E<44;E+=7){p.fillStyle=Math.random()<.5?y:"#ffd24a";for(let L=3;L<21;L+=5)Math.random()<.8&&(p.fillRect(E,L,4,3),Math.random()<.5&&p.fillRect(E+1,L+3,2,1))}p.strokeStyle=y,p.lineWidth=1,p.strokeRect(.5,.5,47,23)})}var at=[];for(let a=0;a<24;a++)at.push(new ze({map:yt(),transparent:!0,opacity:.92,side:zt,depthWrite:!1}));function O(a,p){return new re(new ht(a,p),at[Math.random()*at.length|0])}function w(){return X(8,48,a=>{a.fillStyle="#0c0620",a.fillRect(0,0,8,48);const p=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.floor(Math.random()*5)];a.strokeStyle=p,a.strokeRect(.5,.5,7,47),a.fillStyle=p;for(let g=3;g<45;g+=6)Math.random()<.85&&(a.fillRect(2,g,4,3),Math.random()<.5&&(a.fillStyle="#ffffff",a.fillRect(3,g+1,1,1),a.fillStyle=p))})}var te=[];for(let a=0;a<16;a++)te.push(new ze({map:w(),transparent:!0,side:zt,depthWrite:!1}));var Me={};function le(a,p){const g=a+"_"+p;return Me[g]||(Me[g]=new ze({color:a,transparent:!0,opacity:p,side:zt,depthWrite:!1})),Me[g]}var me=new ze({color:16722764}),je=new ze({color:2758726}),Re=new ze({color:16722748}),De=[];for(let a=0;a<64;a++)De.push(ve(26+Math.random()*22,80+Math.random()*280));var Se=[];for(let a=0;a<16;a++)Se.push(ve(30,90+Math.random()*260,void 0,3));var lt=[];for(let a=0;a<12;a++)lt.push(ve(90,500+Math.random()*400,[1,0,4,15,28,19][a%6]));var pe=new ft,jt=new ft;function Mt(a,p,g){const y=a.index.array,E=a.attributes.position,L=a.attributes.uv,k=a.attributes.normal,N=new Float32Array(g*3),U=L?new Float32Array(g*2):null,V=k?new Float32Array(g*3):null;for(let z=0;z<g;z++){const I=y[p+z];N[z*3]=E.getX(I),N[z*3+1]=E.getY(I),N[z*3+2]=E.getZ(I),U&&(U[z*2]=L.getX(I),U[z*2+1]=L.getY(I)),V&&(V[z*3]=k.getX(I),V[z*3+1]=k.getY(I),V[z*3+2]=k.getZ(I))}const T=new en;return T.setAttribute("position",new Qt(N,3)),U&&T.setAttribute("uv",new Qt(U,2)),V&&T.setAttribute("normal",new Qt(V,3)),T}function Qe(a){a.updateMatrixWorld(!0),pe.copy(a.matrixWorld).invert();const p=new Map,g=new Map,y=new Map,E=[];a.traverse(N=>{if(N===a||!N.geometry||!N.geometry.isBufferGeometry)return;if(N.isMesh&&Array.isArray(N.material)){if(!N.geometry.index||!N.geometry.groups||!N.geometry.groups.length)return;jt.multiplyMatrices(pe,N.matrixWorld);for(const T of N.geometry.groups){const z=N.material[T.materialIndex];if(!z)continue;let I=y.get(z);I||(I={geos:[],srcs:[]},y.set(z,I)),I.geos.push(Mt(N.geometry,T.start,T.count).applyMatrix4(jt)),I.srcs.push(N)}E.push(N);return}const U=N.isMesh?p:N.isLineSegments?g:null;if(!U)return;let V=U.get(N.material);V||(V={geos:[],origs:[]},U.set(N.material,V)),jt.multiplyMatrices(pe,N.matrixWorld),V.geos.push(N.geometry.clone().applyMatrix4(jt)),V.origs.push(N)});const L=(N,U)=>{for(const[V,T]of N){if(T.origs.length<2){T.geos.forEach(I=>I.dispose());continue}const z=Vn(T.geos);if(!z){T.geos.forEach(I=>I.dispose());continue}for(const I of T.origs)I.parent&&I.parent.remove(I);T.geos.forEach(I=>I.dispose()),a.add(new U(z,V))}};L(p,re),L(g,Hn);const k=new Set;for(const[N,U]of y){const V=U.geos.length>1?Vn(U.geos):U.geos[0];if(V)a.add(new re(V,N)),U.geos.length>1&&U.geos.forEach(T=>T.dispose());else{U.geos.forEach(T=>T.dispose());for(const T of U.srcs)k.add(T)}}for(const N of E)!k.has(N)&&N.parent&&N.parent.remove(N);return a.traverse(N=>{N!==a&&(N.matrixAutoUpdate=!1,N.updateMatrix())}),a}var Fe=X(32,64,a=>{a.fillStyle="#160a2e",a.fillRect(0,0,32,64),a.fillStyle="rgba(255,255,255,0.04)";for(let p=0;p<120;p++)a.fillRect(Math.random()*32|0,Math.random()*64|0,1,1);a.fillStyle="rgba(0,0,0,0.35)",a.fillRect(0,0,2,64),a.fillRect(30,0,2,64),a.fillStyle="rgba(122,63,242,0.25)",a.fillRect(4,0,1,64),a.fillRect(27,0,1,64)});Fe.repeat.set(1,60);var ke=new re(new ht(74,9e3),new ze({map:Fe}));ke.rotation.x=-Math.PI/2,ke.position.set(0,-29.6,-1500),h.add(ke);function vt(a,p){const g=new re(new Ge(1.4,.2,9e3),new ze({color:p}));return g.position.set(a,-29,-1500),g}h.add(vt(-36,n)),h.add(vt(36,n));function Dt(){const a=document.createElement("canvas");a.width=16,a.height=256;const p=a.getContext("2d"),g=p.createLinearGradient(0,0,0,256);return g.addColorStop(0,"rgba(255,170,70,0.38)"),g.addColorStop(.35,"rgba(255,110,120,0.2)"),g.addColorStop(.7,"rgba(255,70,150,0.07)"),g.addColorStop(1,"rgba(255,60,160,0)"),p.fillStyle=g,p.fillRect(0,0,16,256),new Di(a)}var St=new re(new ht(46,1500),new ze({map:Dt(),transparent:!0,opacity:.6,blending:on,depthWrite:!1}));St.rotation.x=-Math.PI/2,St.position.set(0,-29.2,-820),h.add(St);var Ct=[];for(let a=0;a<70;a++){const p=new Ge(1.8,.2,16);p.translate(0,-29,-a*46),Ct.push(p)}var be=new re(Vn(Ct),new ze({color:s}));Ct.forEach(a=>a.dispose()),h.add(be);var W=X(128,128,a=>{a.fillStyle="#0c0618",a.fillRect(0,0,128,128),a.fillStyle="#140a24",a.fillRect(0,0,128,18),a.fillRect(0,0,18,128),a.fillStyle="#22123a",a.fillRect(0,18,128,2),a.fillRect(18,0,2,128),a.fillStyle="#1a0e2c";for(let p=0;p<7;p++){const g=24+Math.random()*90|0,y=24+Math.random()*90|0;a.fillRect(g,y,6+Math.random()*16|0,5+Math.random()*12|0)}a.fillStyle="#3a1f5e";for(let p=0;p<40;p++)a.fillRect(Math.random()*128|0,Math.random()*128|0,1,1);a.globalAlpha=.5,a.fillStyle="#ffd24a";for(let p=6;p<128;p+=14)a.fillRect(p,8,5,1),a.fillRect(8,p,1,5);a.globalAlpha=.25,a.fillStyle="#2af0ff",a.fillRect(0,17,128,1),a.fillRect(17,0,1,128),a.globalAlpha=1});W.repeat.set(16,16),W.minFilter=bi,W.generateMipmaps=!0,W.anisotropy=d,Fe.minFilter=bi,Fe.generateMipmaps=!0,Fe.anisotropy=d;var we=new re(new ht(9e3,9e3),new ze({map:W}));we.rotation.x=-Math.PI/2,we.position.set(0,-30.2,-1500),h.add(we);var Pe=9e3/16,$e=[],Ye=[];for(let a=0;a<66;a++)for(const p of[-1,1]){const g=-a*90,y=p*40,E=new Ge(.8,14,.8);E.translate(y,-23,g),$e.push(E);const L=new Ge(5,.7,.7);L.translate(y-p*2.5,-16,g),$e.push(L);const k=new Ge(2.6,.5,1);k.translate(y-p*4,-30+13.6,g),Ye.push(k)}var wt=new re(Vn($e),new ze({color:1313318}));$e.forEach(a=>a.dispose());var Gt=new re(Vn(Ye),new ze({color:16757866}));Ye.forEach(a=>a.dispose()),h.add(wt),h.add(Gt);var nn=[];for(let a=0;a<22;a++){const p=Math.random()<.5,g=new re(new ht(1.6,10),new ze({color:p?16769184:16722764,transparent:!0,opacity:.7,blending:on,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.set((Math.random()<.5?-1:1)*(120+Math.random()*160),-29.4,-Math.random()*5800),g.userData.rel=p?1.6+Math.random()*.8:.5+Math.random()*.35,h.add(g),nn.push(g)}var Sn=[];for(let a=0;a<26;a++){const p=Math.random()<.5?1:-1,g=new re(new ht(6,1.2),new ze({color:p>0?16769184:16730714,transparent:!0,opacity:.8,blending:on,depthWrite:!1,side:zt}));g.position.set((Math.random()-.5)*2400,160+Math.random()*220,-900-Math.random()*2400),g.userData={vx:p*(1.2+Math.random()*1.4)},h.add(g),Sn.push(g)}var At=[];function oi(){const a=document.createElement("canvas");a.width=16,a.height=128;const p=a.getContext("2d"),g=p.createLinearGradient(0,128,0,0);return g.addColorStop(0,"rgba(200,230,255,0.55)"),g.addColorStop(1,"rgba(200,230,255,0)"),p.fillStyle=g,p.fillRect(0,0,16,128),new Di(a)}for(let a=0;a<9;a++){const p=new re(new ht(9,360).translate(0,180,0),new ze({map:oi(),transparent:!0,opacity:.5,blending:on,depthWrite:!1,side:zt,fog:!1}));p.position.set((Math.random()<.5?-1:1)*(70+Math.random()*140),-30,-500-a*650-Math.random()*400),p.userData={ph:Math.random()*6.3,sp:.35+Math.random()*.3,z0:p.position.z},h.add(p),At.push(p)}var Qn=[];{const a=["04_neon_corner_kiosk","13_subway_entrance_pair","14_subway_corner_entrance","15_bus_stop_shelter","16_vending_machine_cluster","17_street_furniture_strip","18_neon_food_cart","19_crosswalk_signal_island"],p=["01_pocket_park_plaza","02_sunset_fountain_plaza","03_arcade_market_stalls","05_service_pipe_cluster","06_utility_tank_stack","11_hovercar_parking_bay","12_glidebooster_landing_pad","20_loading_dock_crates"];setTimeout(()=>{_l(a.concat(p),"cityfillers/synthwave_city_fillers").then(g=>{const y=[n,r,16765514,8060826,16747098];for(let E=0;E<26;E++){const L=E%2===0,k=L?a:p,N=Math.random()*k.length|0,U=g[L?N:a.length+N];if(!U)continue;const V=H(U,y[Math.random()*y.length|0]);D(V,L?6+Math.random()*7:9+Math.random()*12,-30);const T=Math.random()<.5?-1:1;V.position.x=T*(L?54+Math.random()*70:130+Math.random()*170),V.position.z=-E*(6e3/26)-80-Math.random()*100,V.rotation.y=Math.random()<.5?0:Math.PI,Qe(V),h.add(V),Qn.push(V)}}).catch(g=>console.warn("[cityfillers]",g))},0)}var Go=!1,ns=[];for(let a=0;Go&&a<8;a++){const p=new kt,g=26+Math.random()*30,y=4+Math.random()*3,E=[];for(let L=0;L<=10;L++){const k=L/10;E.push(new B((k-.5)*110,g-Math.sin(Math.PI*k)*y,0))}p.add(new No(new en().setFromPoints(E),new pr({color:2758726})));for(let L=1;L<10;L+=2){const k=E[L],N=new re(new ht(1.6,2.2),new ze({color:[16734780,16765514,16722902][Math.random()*3|0],transparent:!0,opacity:.9,side:zt}));N.position.set(k.x,k.y-1.4,0),p.add(N)}p.position.z=-a*760-140,h.add(p),ns.push(p)}var Ho=[];for(let a=0;Go&&a<2;a++){const p=[];for(let y=0;y<=24;y++){const E=y/24;p.push(new B((E-.5)*150,40+Math.sin(E*Math.PI*2.2)*12,Math.sin(E*9)*6))}const g=new re(new G0(new Hh(p),48,1.6,6,!1),new ze({color:12514559,transparent:!0,opacity:.5,blending:on,depthWrite:!1}));g.position.z=-a*3100-900,h.add(g),Ho.push(g)}var is=[];for(let a=0;Go&&a<4;a++){const p=new kt,g=30+Math.random()*34,y=new re(new Ge(150,5,10),Z);y.position.y=g,p.add(y);const E=[n,r,16765514][Math.random()*3|0],L=new re(new Ge(150,.8,10.4),new ze({color:E,transparent:!0,opacity:.8}));L.position.y=g+2.9,p.add(L);for(const k of[-70,70]){const N=new re(new Ge(5,g+30,7),Z);N.position.set(k,(g-30)/2,0),p.add(N)}p.position.z=-a*1500-700,h.add(p),is.push(p)}function dl(a,p){const g=45+Math.pow(Math.random(),1.7)*430,y=15+Math.random()*36,E=15+Math.random()*36,L=new kt,k=De[Math.random()*De.length|0];function N(I,Y,oe,de){const Ue=new re(new Ge(I,Y,oe),[k,k,K,K,k,k]);return Ue.position.y=de+Y/2,L.add(Ue),Ue}function U(I,Y,oe,de,Ue,Be,xe){const Oe=new re(new On(I,Y,oe,Ue),[Be,K,K]);return Oe.position.y=de+oe/2,xe&&(Oe.scale.z=xe),L.add(Oe),Oe}function V(I,Y,oe){const de=Math.random(),Ue=[n,r,16751164,16765514][Math.random()*4|0];if(de<.15){const Be=8+Math.random()*16,xe=new re(new On(.6,Math.min(I,Y)*.6,Be,4),Z);xe.position.y=oe+Be/2,xe.rotation.y=Math.PI/4,L.add(xe)}else if(de<.3){const Be=Math.min(I,Y)*.42,xe=new re(new mr(Be,10,6,0,Math.PI*2,0,Math.PI/2),Z);xe.position.y=oe,L.add(xe)}else if(de<.44){const Be=Math.min(I,Y)*.5,xe=new re(new On(Be,Be,Math.max(I,Y)*.9,10,1,!1,0,Math.PI),Z);xe.rotation.z=Math.PI/2,Y>I&&(xe.rotation.y=Math.PI/2),xe.position.y=oe,L.add(xe)}else if(de<.6){let Be=oe,xe=I*.8,Oe=Y*.8;for(let _t=0;_t<2+(Math.random()*2|0);_t++){const Bt=4+Math.random()*5,mn=new re(new Ge(xe,Bt,Oe),Z);mn.position.y=Be+Bt/2,L.add(mn),Be+=Bt,xe*=.68,Oe*=.68}}else if(de<.72){const Be=Math.min(I,Y)*.4,xe=new re(new On(Be,Be,1,12),Z);xe.position.y=oe+.5,L.add(xe);const Oe=new re(new Is(Be*.8,.35,6,16),le(16765514,.95));Oe.rotation.x=Math.PI/2,Oe.position.y=oe+1.2,L.add(Oe)}if(Math.random()<.45){const Be=new re(new Ge(I+.6,1.6,Y+.6),le(Ue,.85));Be.position.y=oe-1.2,L.add(Be)}}const T=Math.random();if(T<.025&&g>200){const I=Math.max(y,E)/2;U(I*.22,I*.5,g*.82,0,10,Se[Math.random()*Se.length|0]);const Y=new re(new On(I*1.15,I*.75,g*.07,14),[Se[Math.random()*Se.length|0],K,Z]);Y.position.y=g*.86,L.add(Y);const oe=new re(new On(.5,.5,g*.12,6),je);oe.position.y=g*.96,L.add(oe);const de=new re(new mr(1.2,6,6),me);de.position.y=g*1.02,L.add(de)}else if(T<.055){const I=Math.max(y,E)/2;let Y=0;const oe=4+(Math.random()*3|0),de=g/oe;for(let Ue=0;Ue<oe;Ue++){const Be=Ue%2===0;U(I*(Be?1:.78),I*(Be?1:.78),de,Y,12,Se[Math.random()*Se.length|0]),Y+=de}}else if(T<.085){const I=Math.max(y,E)/2;U(I*(.85+Math.random()*.15),I,g,0,14,Se[Math.random()*Se.length|0])}else if(T<.115){const I=Math.random()<.5?6:8,Y=Math.max(y,E)/1.7;U(Y*.94,Y,g,0,I,Se[Math.random()*Se.length|0])}else if(T<.14){const I=Math.max(y,E)/1.8;U(I*.45,I,g,0,12,Se[Math.random()*Se.length|0])}else if(T<.165&&g>160){const I=Math.max(y,E)/1.5;let Y=0;for(let oe=0;oe<3;oe++){const de=g*(.42-oe*.07);U(I*(1-oe*.27)*.96,I*(1-oe*.27),de,Y,10,Se[Math.random()*Se.length|0]),Y+=de}}else if(T<.19){const I=Math.max(y,E)/1.6;U(I,I,g,0,16,Se[Math.random()*Se.length|0],.45+Math.random()*.2)}else if(T<.23&&g>180){const I=y*.42,Y=De[Math.random()*De.length|0],oe=De[Math.random()*De.length|0],de=new re(new Ge(I,g,E*.8),[Y,Y,K,K,Y,Y]);de.position.set(-y*.32,g/2,0),L.add(de);const Ue=new re(new Ge(I,g*.86,E*.8),[oe,oe,K,K,oe,oe]);Ue.position.set(y*.32,g*.43,0),L.add(Ue);const Be=new re(new Ge(y*.66,4,E*.3),Z);Be.position.set(0,g*.62,0),L.add(Be);const xe=new re(new ht(y*.6,1),le(2814207,.7));xe.position.set(0,g*.62,E*.16),L.add(xe)}else if(g/y>1.7&&g/y<5.4&&Math.random()<.6){if(Math.random()<.75){const I=new Ge(y,g,E);Ze(I,Math.random()*Le.length|0,Math.random()<.5);const Y=new re(I,[ut,ut,K,K,ut,ut]);Y.position.y=g/2,L.add(Y),We++}else{const I=Ce[Math.random()*Ce.length|0],Y=new re(new Ge(y,g,E),[I,I,K,K,I,I]);Y.position.y=g/2,L.add(Y)}V(y,E,g)}else{const I=Math.random()*26|0,Y=Math.max(y,E)/2;if(I===0&&g>120){const oe=g*.55+Math.random()*g*.15;N(y,oe,E,0),N(y*.68,g-oe,E*.68,oe),V(y*.68,E*.68,g)}else if(I===1&&g>140)N(y*1.3,g*.16,E*1.2,0),N(y*.72,g*.84,E*.72,g*.16),V(y*.72,E*.72,g);else if(I===2&&g>220){const oe=g*.45,de=g*.3;N(y,oe,E,0),N(y*.78,de,E*.78,oe),N(y*.55,g-oe-de,E*.55,oe+de),V(y*.55,E*.55,g)}else if(I===3&&g>100){const oe=g*(.55+Math.random()*.25),de=N(y*.62,g,E,0);de.position.x=-y*.19,N(y*.62,oe,E*.62,0).position.set(y*.19,oe/2,E*.19),V(y*.62,E,g)}else if(I===4&&g>140){const oe=N(y*.38,g,E,0);oe.position.x=-y*.26;const de=N(y*.38,g*.92,E,0);de.position.x=y*.26;const Ue=new re(new ht(y*.1,g*.85),le([n,r,16765514][Math.random()*3|0],.5));Ue.position.set(0,g*.45,0),L.add(Ue),V(y*.38,E,g)}else if(I===6&&g>140){const oe=N(y*.3,g*.75,E,0);oe.position.x=-y*.35;const de=N(y*.3,g*.75,E,0);de.position.x=y*.35,N(y,g*.25,E,g*.75),V(y,E,g)}else if(I===7&&g>120){for(let oe=0;oe<4;oe++){const de=g*(.4+.2*oe),Ue=N(y*.3,de,E,0);Ue.position.x=-y*.45+oe*y*.3}V(y*.3,E,g)}else if(I===8&&g>120)N(y*.4,g*.8,E*.55,0),N(y,g*.2,E,g*.8),V(y,E,g);else if(I===9&&g>150)U(Y*.32,Y*.38,g*.75,0,10,Se[Math.random()*Se.length|0]),U(Y*1.05,Y*1.05,g*.18,g*.75,12,Se[Math.random()*Se.length|0]);else if(I===10&&g>140){N(y*.5,g,E*.5,0);const oe=new re(new Ge(y*1.9,2.5,3.5),Z);oe.position.set(y*.35,g-3,0),L.add(oe);const de=new re(new ht(1.6,5),le(16765514,.8));de.position.set(y*1.1,g-8,0),L.add(de),V(y*.5,E*.5,g)}else if(I===11&&g>150){N(y,g*.55,E,0);const oe=N(y*.32,g*.45,E*.8,g*.55);oe.position.x=-y*.3;const de=N(y*.32,g*.45,E*.8,g*.55);de.position.x=y*.3,V(y*.32,E*.8,g)}else if(I===12){N(y,g*.85,E,0);const oe=new re(new Ge(y*1.12,3,E*1.05),Z);oe.position.y=g*.9,oe.rotation.z=.3,L.add(oe)}else if(I===13&&g>130){for(let oe=0;oe<4;oe++){const de=g*(1-oe*.2),Ue=N(y*.42,de,E,0);Ue.position.x=-a*(oe-1.5)*y*.28}V(y*.42,E,g)}else if(I===14&&g>140){const oe=N(y*.24,g,E,0);oe.position.x=-y*.38;const de=N(y*.24,g,E,0);de.position.x=y*.38,N(y,g*.16,E,g*.84),V(y,E,g)}else if(I===15){N(y,Math.min(g,90),E,0);for(let oe=0;oe<6;oe++){const de=15+Math.random()*40,Ue=new re(new On(.3,.3,de,4),je);if(Ue.position.set((Math.random()-.5)*y*.7,Math.min(g,90)+de/2,(Math.random()-.5)*E*.7),L.add(Ue),Math.random()<.5){const Be=new re(new mr(.7,5,5),me);Be.position.set(Ue.position.x,Math.min(g,90)+de+1,Ue.position.z),L.add(Be)}}}else if(I===16&&g>120)U(Y*.5,Y*.5,g,0,10,Se[Math.random()*Se.length|0]).position.x=-Y*.5,U(Y*.45,Y*.45,g*.85,0,10,Se[Math.random()*Se.length|0]).position.set(Y*.5,g*.85/2,Y*.2),U(Y*.4,Y*.4,g*.68,0,10,Se[Math.random()*Se.length|0]).position.set(0,g*.68/2,-Y*.5);else if(I===17&&g>150){const oe=U(1.2,Y*1.3,g,0,4,Se[Math.random()*Se.length|0]);oe.rotation.y=Math.PI/4}else if(I===18&&g>160){const oe=U(Y*.5,Y*.9,g,0,4,Se[Math.random()*Se.length|0]);oe.rotation.y=Math.PI/4;const de=new re(new z0(1.6,7,4),le(16765514,.9));de.position.y=g+3,L.add(de)}else if(I===19&&g>130){const oe=N(y*.3,g,E,0);oe.position.x=-y*.35;const de=N(y*.3,g,E,0);de.position.x=y*.35,N(y*.42,g*.5,E*.55,g*.25),V(y*.3,E,g)}else if(I===20&&g>140)U(Y*1.05,Y*1.05,g*.28,0,12,Se[Math.random()*Se.length|0]),N(y*.58,g*.72,E*.58,g*.28),V(y*.58,E*.58,g);else if(I===21&&g>150){N(y,g*.18,E,0);const oe=N(y*.4,g*.82,E*.8,g*.18);oe.position.x=-y*.27;const de=N(y*.4,g*.55,E*.8,g*.18);de.position.x=y*.27,V(y*.4,E*.8,g)}else if(I===22&&g>150){N(y*.55,g,E,0);const oe=N(y*1.15,g*.14,E,g*.78);oe.position.x=y*.28,V(y*.55,E,g)}else if(I===23&&g>140){for(let de=0;de<5;de++)U(Y*.85,Y*.85,g*.13,de*g*.2,12,Se[Math.random()*Se.length|0]);const oe=new re(new On(Y*.3,Y*.3,g,8),le(2814207,.35));oe.position.y=g/2,L.add(oe)}else if(I===24&&g>120){const oe=U(Y*1.1,Y*1.1,g,0,3,Se[Math.random()*Se.length|0]);oe.rotation.y=Math.random()*6.3}else I===25?(N(y*.55,g,E*.7,0),N(y*.45,g*.7,E*.55,0).position.set(-y*.35,g*.35,E*.15),N(y*.4,g*.45,E*.5,0).position.set(y*.33,g*.225,-E*.15),V(y*.55,E*.7,g)):(N(y,g,E,0),V(y,E,g))}if(Math.random()<.25){const I=new re(new On(Math.min(3,y*.14),Math.min(3,y*.14),4,7),Z);I.position.set((Math.random()-.5)*y*.3,g+2,(Math.random()-.5)*E*.3),L.add(I)}if(g>120&&Math.random()<.35){const I=[n,r,8077298,16765514][Math.random()*4|0],Y=[];for(const de of[-y/2-.3,y/2+.3]){const Ue=new ht(.9,g*.92);Ue.rotateY(Math.PI/2),Ue.translate(de,g*.46,E*.28*(Math.random()<.5?1:-1)),Y.push(Ue)}const oe=new re(Vn(Y),le(I,.75));Y.forEach(de=>de.dispose()),L.add(oe)}if(Math.random()<.4){const I=4+(Math.random()*5|0);let Y=6+Math.random()*10;const oe=[],de=a>0?-Math.PI/2:Math.PI/2,Ue=-a*(y/2+1.6);for(let Be=0;Be<I&&Y<g-8;Be++){const xe=4+Math.random()*4,Oe=3+Math.random()*3,_t=new ht(xe,Oe);_t.rotateY(de),_t.translate(Ue,Y+Oe/2,E*.15),oe.push(_t),Y+=Oe+1.2+Math.random()*2}if(oe.length){const Be=new re(Vn(oe),at[Math.random()*at.length|0]);oe.forEach(xe=>xe.dispose()),L.add(Be)}}if(Math.random()<.7){const I=new re(new Ge(Math.max(2,y*.25),3,Math.max(2,E*.25)),Z);I.position.set((Math.random()-.5)*y*.4,g+1.5,(Math.random()-.5)*E*.4),L.add(I)}if(Math.random()<.45){const I=8+Math.random()*26,Y=new re(new On(.35,.35,I,5),je);Y.position.y=g+I/2,L.add(Y)}const z=new re(new mr(.9,6,6),me);if(z.position.y=g+1,L.add(z),Math.random()<.6){const I=[n,r,16751164,8077298][Math.floor(Math.random()*4)],Y=new Hn(new pi(new Ge(y+.4,.4,E+.4)),b(I));Y.position.y=g-.2,L.add(Y)}if(Math.random()<.7){const I=Math.min(y*.9,10+Math.random()*14),Y=O(I,I*.5);Y.position.set(-a*(y/2+.4),8+Math.random()*(g*.5),0),Y.rotation.y=a>0?-Math.PI/2:Math.PI/2,L.add(Y)}{const I=new re(new ht(y*.96,2.2),le([16751164,16722902,2814207][Math.floor(Math.random()*3)],.55));I.position.set(-a*(y/2+.25),2.2,0),I.rotation.y=a>0?-Math.PI/2:Math.PI/2,L.add(I)}if(Math.random()<.55){const I=Math.min(g*.5,18+Math.random()*22),Y=new re(new ht(3.4,I),te[Math.random()*te.length|0]);Y.position.set(-a*(y/2+2.2),6+Math.random()*(g*.4)+I/2,E*.2),L.add(Y)}L.position.set(a*(44+y/2+Math.random()*150),-30,p),L.updateMatrixWorld(!0);{const I=new ln().setFromObject(L);L.userData={hw:Math.max(4,I.max.x-L.position.x,L.position.x-I.min.x),hd:E/2,top:-30+g,done:!1}}return L}var pl=new B(0,0,1),t_=new B(0,1,0);function au(a){a.updateMatrixWorld(!0);const p=new B,g=new B,y=new B,E=new B,L=new B,k=new B,N=[];let U=0;if(a.traverse(de=>{if(!de.isMesh||!de.geometry||!de.geometry.attributes.position)return;const Ue=de.geometry.attributes.position,Be=de.geometry.index,xe=de.matrixWorld,Oe=Be?Be.count/3:Ue.count/3;for(let _t=0;_t<Oe;_t++){const Bt=Be?Be.getX(_t*3):_t*3,mn=Be?Be.getX(_t*3+1):_t*3+1,Yn=Be?Be.getX(_t*3+2):_t*3+2;p.fromBufferAttribute(Ue,Bt).applyMatrix4(xe),g.fromBufferAttribute(Ue,mn).applyMatrix4(xe),y.fromBufferAttribute(Ue,Yn).applyMatrix4(xe),E.subVectors(g,p),L.subVectors(y,p),k.crossVectors(E,L);const ct=k.length()*.5;ct<2||(k.normalize(),!(Math.abs(k.y)>.55)&&(N.push({ax:p.x,ay:p.y,az:p.z,bx:E.x,by:E.y,bz:E.z,cx:L.x,cy:L.y,cz:L.z,nx:k.x,ny:k.y,nz:k.z,area:ct}),U+=ct))}}),!N.length||U<=0)return null;const V=Math.max(6,Math.min(150,Math.round(U/220))),T=new ft,z=new wi,I=new B,Y=[];for(let de=0;de<V;de++){let Ue=Math.random()*U,Be=0;for(;Be<N.length-1&&(Ue-=N[Be].area)>0;)Be++;const xe=N[Be];let Oe=Math.random(),_t=Math.random();Oe+_t>1&&(Oe=1-Oe,_t=1-_t);const Bt=xe.ax+xe.bx*Oe+xe.cx*_t,mn=xe.ay+xe.by*Oe+xe.cy*_t,Yn=xe.az+xe.bz*Oe+xe.cz*_t;I.set(xe.nx,xe.ny,xe.nz),z.setFromUnitVectors(pl,I),T.makeRotationFromQuaternion(z);const ct=G.clone();ct.applyMatrix4(T),ct.translate(Bt+xe.nx*.4,mn+xe.ny*.4,Yn+xe.nz*.4),Y.push(ct)}const oe=Vn(Y);return Y.forEach(de=>de.dispose()),new re(oe,new ze({color:q,transparent:!0,opacity:.8,depthWrite:!1,side:zt}))}function lu(a,p){const g=new kt,y=ne[Math.floor(Math.random()*ne.length)],E=H(y,Math.random()<.5?n:r);E.updateMatrixWorld(!0);const L=new ln().setFromObject(E),k=new B;L.getSize(k),E.scale.setScalar((65+Math.pow(Math.random(),1.6)*320)/Math.max(k.y,.001)),E.updateMatrixWorld(!0);const N=new ln().setFromObject(E);E.position.y=-N.min.y,g.add(E),g.updateMatrixWorld(!0);const U=new ln().setFromObject(g),V=au(E);V&&g.add(V);const T=new re(new mr(.9,6,6),me);T.position.set((U.min.x+U.max.x)/2,U.max.y+1,(U.min.z+U.max.z)/2),g.add(T);const z=a>0?-U.min.x:U.max.x;return g.position.set(a*(44+z+Math.random()*150),-30,p),g.userData={hw:Math.max(Math.abs(U.min.x),Math.abs(U.max.x)),hd:Math.max(Math.abs(U.min.z),Math.abs(U.max.z)),top:-30+(U.max.y-U.min.y),done:!1},Qe(g),g}var R=166,j=R*36,ne=[],se=[];for(let a=0;a<32;a++)se.push(ve(30,70,[2,8,3,10,17,18,24,27,21,0][a%10]));function ie(a,p,g){const y=16+Math.random()*46+(g?26+Math.random()*60:0),E=18+Math.random()*30,L=14+Math.random()*24,k=new kt,N=se[Math.random()*se.length|0],U=new re(new Ge(E,y,L),[N,N,K,K,N,N]);if(U.position.y=y/2,k.add(U),Math.random()<.7){const V=Math.min(E*1.1,12+Math.random()*10),T=O(V,V*.45);T.position.set(0,y+V*.28,0),T.rotation.y=a>0?-Math.PI/2:Math.PI/2,T.rotation.x=-.12,k.add(T);const z=new re(new Ge(.5,V*.3,.5),Z);z.position.set(-V*.3,y+V*.12,0),k.add(z);const I=new re(new Ge(.5,V*.3,.5),Z);I.position.set(V*.3,y+V*.12,0),k.add(I)}if(Math.random()<.5){const V=10+Math.random()*10,T=new re(new ht(3.4,V),te[Math.random()*te.length|0]);T.position.set(-a*(E/2+2),y*.4+V/2,L*.2),k.add(T)}if(Math.random()<.6){const V=3+(Math.random()*4|0),T=[16734780,16765514,16747052][Math.random()*3|0],z=a>0?-Math.PI/2:Math.PI/2,I=[];for(let oe=0;oe<V;oe++){const de=new ht(1.3,1.8);de.rotateY(z),de.translate(-a*(E/2+.6),y-1.5,-L/2+(oe+.5)*(L/V)),I.push(de)}const Y=new re(Vn(I),le(T,.95));I.forEach(oe=>oe.dispose()),k.add(Y)}return k.position.set(a*((g?300+Math.random()*380:64+Math.random()*260)+E/2),-30,p),k.userData={hw:E/2,hd:L/2,top:-30+y,done:!1},k}var Ie=[];function He(){return X(32,44,a=>{a.clearRect(0,0,32,44);const p=["#7adcff","#ff7ad0","#b0ff7a","#ffd24a"][Math.random()*4|0];a.strokeStyle=p,a.fillStyle=p,a.globalAlpha=.9,a.lineWidth=1;const g=Math.random()*3|0;if(g===0)a.beginPath(),a.moveTo(16,4),a.lineTo(27,22),a.lineTo(16,40),a.lineTo(5,22),a.closePath(),a.stroke(),a.globalAlpha=.3,a.fill(),a.globalAlpha=.9;else if(g===1)a.beginPath(),a.arc(16,22,11,0,7),a.stroke(),a.fillRect(13,19,6,6);else for(let y=4;y<40;y+=6)Math.random()<.85&&a.fillRect(10,y,12,3);for(let y=0;y<44;y+=3)a.clearRect(0,y,32,1)})}var Xe=6,it=j/Xe,et=[],rt=[],ot=[],Kt=[],En=new Array(Xe),rn=new Array(Xe);function gi(){for(let g=0;g<Xe;g++){const y=new kt;y.userData.minZ=0,et.push(y),ot.push([])}const a=g=>{const y=g.position.z,E=Math.min(Xe-1,Math.floor((-y-.001)/it));et[E].add(g),y<et[E].userData.minZ&&(et[E].userData.minZ=y);const L={x:g.position.x,hw:g.userData.hw,top:g.userData.top,z0:y,k:E,done:!1};return rt.push(L),ot[E].push(L),L},p=[];for(let g=0;g<R;g++){const y=Math.random()<.5?1:-1,E=-g*36-70-Math.random()*30;if(ne.length&&Math.random()<.1){const L=lu(y,E);L.userData.z0=L.position.z,h.add(L),Kt.push(L)}else{const L=a(dl(y,E));L.top+30>120&&p.push(L)}}for(let g=0;g<80;g++){const y=Math.random()<.5?1:-1;a(ie(y,-g*(j/80)-60-Math.random()*45,!1))}for(let g=0;g<60;g++){const y=Math.random()<.5?1:-1;a(ie(y,-g*(j/60)-80-Math.random()*60,!0))}for(const g of et)Qe(g),h.add(g);for(let g=0;g<36&&Ie.length<14&&p.length;g++){const y=p[Math.random()*p.length|0];if(y.holo)continue;y.holo=!0;const E=new ze({map:He(),transparent:!0,opacity:.55,blending:on,depthWrite:!1,side:zt}),L=new kt,k=new re(new ht(16,22),E);L.add(k);const N=new re(new ht(16,22),E);N.rotation.y=Math.PI/2,L.add(N),L.position.set(y.x,y.top+16+Math.random()*14,y.z0),et[y.k].add(L),Ie.push(L)}}var Ft=[],mt=[],Bs=2e4;(function(){for(let a=0;a<26;a++){const p=420+Math.random()*680,g=60+Math.random()*90,y=60+Math.random()*90;let E;if(a%5<2){const U=new Ge(g,p,y);Ze(U,Math.random()*Le.length|0,Math.random()<.5),E=new re(U,[ut,ut,K,K,ut,ut]),We++}else{const U=lt[a%lt.length];E=new re(new Ge(g,p,y),[U,U,K,K,U,U])}const L=new kt;E.position.y=p/2,L.add(E);const k=[n,r,16751164][a%3];for(const U of[-g/2-.3,g/2+.3]){const V=new re(new ht(1.6,p*.85),le(k,.8));V.position.set(U,p*.45,0),V.rotation.y=Math.PI/2,L.add(V)}if(Math.random()<.8){const U=O(g*.85,g*.45);U.position.set(0,p*.55+Math.random()*p*.25,y/2+.6),L.add(U)}const N=new re(new mr(2.2,6,6),me);N.position.y=p+3,L.add(N),L.userData.h=p,L.position.set((a%2?1:-1)*(320+Math.random()*620),-30,-(a/26)*Bs-Math.random()*600),Qe(L),h.add(L),Ft.push(L)}for(let a=0;a<5;a++){const p=Ft[Math.floor(Math.random()*Ft.length)],g=new re(new ht(26,420).translate(0,210,0),new ze({color:[10146047,16743120,16765562,8060826,12622591][a%5],transparent:!0,opacity:.1,blending:on,depthWrite:!1,side:zt}));g.position.y=p.userData.h,g.rotation.z=.5+Math.random(),g.userData.spin=(Math.random()<.5?-1:1)*(.1+Math.random()*.15),p.add(g),mt.push(g)}})();var Xt=-16e3,Zt=new kt,rs=[],Fi=[],ss=[],dn=[],_i=[];function Ji(a,p,g,y,E){const L=new Ge(y,g,24);L.translate(a,-30+g/2,p),ss.push(L);const k=new pi(new Ge(y,g,24));if(k.scale(1.004,1.004,1.004),k.translate(a,-30+g/2,p),dn.push(k),E){const N=C(a-y/2,-30,p-12,a+y/2,-30+g,p+12,q,.35,!0,34,16);_i.push(N.geometry)}}var Wn=[[220,228,0,560,1e3,56,150,!0],[160,314,-260,700,1080,74,180,!1],[120,420,-560,880,1180,96,210,!1],[85,595,-900,1060,1300,120,240,!1],[55,920,-1300,1280,1450,150,300,!1]],Zi=250;function zs(a,p){const g=Math.min(1,Math.max(0,(Math.abs(a)-Zi)/1300));return p*(.42+.58*g)}for(const a of Wn){const p=a[0],g=a[1],y=a[2];for(let E=0;E<p;E++){const L=(E-(p-1)/2)*g+(Math.random()-.5)*g*.55;if(Math.abs(L)<Zi)continue;let k=a[3]+Math.random()*a[4];Math.random()<.07&&(k*=1.3+Math.random()*.5),Ji(L,y-Math.random()*16,zs(L,k),a[5]+Math.random()*a[6],a[7])}}for(let a=0;a<16;a++){const p=-1600-a*420,g=54-(a*2.5|0),y=52e3/(g-1),E=1250+a*95,L=150+a*22;for(let k=0;k<g;k++){const N=(k-(g-1)/2)*y+(Math.random()-.5)*y*.5;Math.abs(N)<Zi||Ji(N,p-Math.random()*20,zs(N,E+Math.random()*850),L+Math.random()*320,!1)}}for(let a=0;a<26;a++){const p=(a-12.5)*2100+(Math.random()-.5)*900;Math.abs(p)<Zi*1.2||Ji(p,-8800-Math.random()*1200,zs(p,2e3+Math.random()*1800),420+Math.random()*520,!1)}for(let a=0;a<14;a++){const p=(Math.random()<.5?-1:1)*(Zi*1.4+Math.random()*2e4);Ji(p,-3e3-Math.random()*5e3,zs(p,1600+Math.random()*1600),60+Math.random()*80,!1)}function Vo(a,p){Ji(a,0,4800,148,!0);const g=new re(new Ge(176,42,84),new ze({color:p,fog:!1}));g.position.set(a,4770,0),Zt.add(g);const y=new re(new On(5.2,5.2,760,8),new ze({color:p,fog:!1,transparent:!0,opacity:.42}));y.position.set(a,5150,0),Zt.add(y)}Vo(-95,n),Vo(95,r),Zt.add(new re(Vn(ss),new ze({color:1312294,fog:!1}))),ss.forEach(a=>a.dispose());var n_=new pr({color:6956200,fog:!1,transparent:!0,opacity:.2});Fi.push(n_),Zt.add(new Hn(Vn(dn),n_)),dn.forEach(a=>a.dispose());var i_=new ze({color:q,transparent:!0,opacity:.02,depthWrite:!1,side:zt,fog:!1});rs.push(i_),Zt.add(new re(Vn(_i),i_)),_i.forEach(a=>a.dispose());function r_(a){const{r:p,g,b:y}=o(a),E=document.createElement("canvas");E.width=4,E.height=128;const L=E.getContext("2d"),k=L.createLinearGradient(0,0,0,128);return k.addColorStop(0,`rgba(${p},${g},${y},0)`),k.addColorStop(.5,`rgba(${p},${g},${y},1)`),k.addColorStop(1,`rgba(${p},${g},${y},0)`),L.fillStyle=k,L.fillRect(0,0,4,128),new Di(E)}var vr=new re(new ht(6e4,5200),new ze({map:r_(l[0].glow),transparent:!0,opacity:.1,blending:on,depthWrite:!1,fog:!1}));vr.position.set(0,560,-360),Zt.add(vr),Zt.position.z=Xt,c.add(Zt);var cu=[],hu=[-26,-9,9,26],Wo=[];for(let a=0;a<6;a++)Wo.push(new ze({map:X(64,32,p=>{p.fillStyle=["#0a1626","#140a26","#260a18","#0a2020","#1a1a10","#101226"][a],p.fillRect(0,0,64,32),p.fillStyle="rgba(255,255,255,0.08)";for(let g=4;g<32;g+=7)p.fillRect(0,g,64,1);p.fillStyle=["#ff2b5c","#2af0ff","#ffe08a","#ff2bd6","#7aff9a","#c09aff"][a],p.fillRect(0,14,64,2),p.globalAlpha=.85,p.fillStyle="#9ad0ff";for(let g=6;g<58;g+=9)p.fillRect(g,6,5,4);p.globalAlpha=1})}));function xy(a){const p=new kt,g=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];p.add(new re(new Ge(4.4,2,8),Wo[Math.random()*Wo.length|0])),p.add(new Hn(new pi(new Ge(4.4,2,8)),b(g)));const y=new re(new ht(3.6,.7),Re);return y.position.set(0,.2,4.1),p.add(y),p.position.set(hu[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,-28,a),p.userData.v=.4+Math.random()*.3,p}function by(a){const p=new kt,g=os[Math.floor(Math.random()*os.length)],y=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];{const V=g.clone(!0),T=Wo[Math.random()*Wo.length|0];V.traverse(z=>{z.isMesh&&(z.material=T,z.add(new Hn(new pi(z.geometry,25),b(y))))}),p.add(V)}p.updateMatrixWorld(!0);const E=new ln().setFromObject(p),L=new B;E.getSize(L);const k=Math.max(L.z,.001);p.scale.setScalar(6.5/k),p.updateMatrixWorld(!0);const N=new ln().setFromObject(p);p.position.y=-28-N.min.y;const U=new re(new ht(2.6,.6),Re);return U.position.set(0,.6,N.max.z||3),p.add(U),p.position.x=hu[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,p.position.z=a,p.userData.v=.4+Math.random()*.3,p}var Ty=2856,os=[];function Ey(){for(let a=0;a<42;a++){const p=os.length?by(-a*68-40):xy(-a*68-40);Qe(p),p.userData.z0=p.position.z,p.userData.x0=p.position.x,h.add(p),cu.push(p)}}var ml=[],Xo=4200,gl=[];function uu(a){const p=new kt,g=a?16734815:[2814207,16769162,16722902][Math.floor(Math.random()*3)];let y;if(gl.length)y=gl[Math.random()*gl.length|0].clone(!0),y.traverse(k=>{if(k.isMesh){const N=k.material&&k.material.color?k.material.color.clone():new Je(1709104);k.material=new ze({color:N.multiplyScalar(.55)}),k.add(new Hn(new pi(k.geometry,30),b(g)))}}),y.scale.setScalar(.9+Math.random()*.4);else if(os.length){y=H(os[Math.floor(Math.random()*os.length)],g),y.updateMatrixWorld(!0);const k=new ln().setFromObject(y),N=new B;k.getSize(N),y.scale.setScalar(8.5/Math.max(N.z,.001))}else{y=new kt;const k=new Ge(4.5,1.4,8);y.add(new re(k,F())),y.add(new Hn(new pi(k),b(g)))}p.add(y),p.updateMatrixWorld(!0);const E=new ln().setFromObject(p),L=new B;if(E.getSize(L),L.x>30&&(y.scale.multiplyScalar(30/L.x),p.updateMatrixWorld(!0),E.setFromObject(p),E.getSize(L)),p.userData.rx=Math.min(16,Math.max(2.5,L.x/2)),p.userData.ry=Math.max(2,L.y/2),p.userData.cy=L.y/2,a){p.rotation.y=Math.PI;const k=new re(new ht(Math.max(3.2,L.x*.4),1.1),new ze({color:14676735,transparent:!0,opacity:.9,blending:on,depthWrite:!1,side:zt}));k.position.set(0,L.y*.4,E.min.z-.4),p.add(k)}else{const k=new re(new ht(Math.max(2.4,L.x*.35),.9),new ze({color:16751164,transparent:!0,opacity:.85,blending:on,depthWrite:!1,side:zt}));k.position.set(0,L.y*.4,E.max.z+.4),p.add(k)}return p}function s1(){}var s_=new Rg,Ay=["01_pulse_block_44m","02_vector_tower_88m","03_slash_roof_62m","04_night_monolith_118m","05_setback_hotel_72m","06_skyline_spire_102m"],wy=["01_midnight_wedge","02_pulse_sedan","03_vector_van","04_afterburner_supercar","05_night_interceptor"];function _l(a,p){return Promise.all(a.map(g=>new Promise(y=>{s_.load("../models/"+p+"/"+g+".glb",E=>y(E.scene),void 0,()=>y(null))}))).then(g=>g.filter(Boolean))}var o_=!1;function o1(a){}var vl=[],Ry=15e3;function a_(a){const g=Math.random()<.5,y=(g?-1:1)*(30+Math.random()*50),E=(g?1:-1)*(40+Math.random()*55),L={x0:y-18,x1:y+18,narrow:!0},k={x0:E-30,x1:E+30,narrow:!1},N=[L,k].sort((V,T)=>V.x0-T.x0),U=[-150,N[0].x0,N[0].x1,N[1].x0,N[1].x1,150];for(let V=0;V<3;V++){const T=U[V*2],z=U[V*2+1];if(z-T<2)continue;const I=new re(new Ge(z-T,100,6),Z);I.position.set((T+z)/2,40/2,-3),a.add(I);const Y=new re(new Ge(z-T,1.2,6.4),le(16722748,.9));Y.position.set((T+z)/2,70-.6,-3),a.add(Y)}for(const V of[L,k]){const T=V.narrow?16722902:2814207;for(const z of[V.x0,V.x1]){const I=new re(new Ge(1.4,100,6.4),le(T,.9));I.position.set(z,40/2,-3),a.add(I)}}return{type:"gate",len:6,top:70,gaps:[L,k]}}function Cy(a){const E=new re(new Ge(6,106,520),Z);E.position.set(-88,46/2,-520/2),a.add(E);const L=new re(new Ge(6,106,520),Z);L.position.set(88,46/2,-520/2),a.add(L);const k=new re(new Ge(182,6,520),Z);k.position.set(0,79,-520/2),a.add(k);for(let N=0;N<8;N++){const U=new re(new Is(48,1.2,4,4),le([n,r,16765514][N%3],.9));U.rotation.z=Math.PI/4,U.position.set(0,20,-N*(520/8)-30),a.add(U)}return{type:"tunnel",len:520,xLim:82,yLim:70}}function Ly(a){for(const y of[-1,1]){const E=new re(new Ge(8,110,640),Z);E.position.set(y*58,25,-640/2),a.add(E);const L=new re(new Ge(8.4,1.5,640),le(y<0?n:r,.9));L.position.set(y*58,81,-640/2),a.add(L)}return{type:"canyon",len:640,xLim:50}}function l_(a){const y=[];for(let E=0;E<5;E++){const L=(E%2?1:-1)*(26+Math.random()*14),k=-E*(560/5)-40,N=new re(new On(4,5,120,8),Z);N.position.set(L,30,k),a.add(N);const U=new re(new On(4.4,4.4,3,8),le(E%2?r:n,.95));U.position.set(L,92,k),a.add(U),y.push({x:L,z:k,done:!1})}return{type:"slalom",len:560,pts:y}}function Py(a){const y=(E,L,k)=>{const N=new re(new Ge(L-E,100,6),Z);N.position.set((E+L)/2,20,k),a.add(N);const U=new re(new Ge(L-E,1.2,6.4),le(16765514,.9));U.position.set((E+L)/2,69.4,k),a.add(U)};return y(-150,15,-3),y(-15,150,-757),{type:"scurve",len:760,top:70,g1:15,g2:-15}}function Iy(a){const g=new re(new Ge(300,10,90),Z);g.position.set(0,35,-90/2),a.add(g);const y=new re(new Ge(300,1.2,90+.6),le(16751164,.9));y.position.set(0,30.6,-90/2),a.add(y);const E=new re(new Ge(300,1.2,90+.6),le(2814207,.9));E.position.set(0,39.4,-90/2),a.add(E);for(const L of[-110,110]){const k=new re(new Ge(10,60,12),Z);k.position.set(L,0,-90/2),a.add(k)}return{type:"bridge",len:90,yLow:28,yHigh:42}}function c_(a){const E=new re(new Ge(16,108,620),Z);E.position.set(0,48/2,-620/2),a.add(E);const L=new re(new Ge(16.4,1.4,620),le(16765514,.9));L.position.set(0,78-.7,-620/2),a.add(L);const k=new re(new Ge(108,108,300),Z);k.position.set(-96,48/2,-300/2),a.add(k);const N=new re(new Ge(4,1.4,300),le(16722902,.95));N.position.set(-43,78-.7,-300/2),a.add(N);const U=new re(new Ge(76,108,620),Z);U.position.set(112,48/2,-620/2),a.add(U);const V=new re(new Ge(4,1.4,620),le(2814207,.95));V.position.set(75,78-.7,-620/2),a.add(V);for(const T of[-1,1]){const z=new re(new Ge(14,2.2,1.4),le(16765514,.95));z.position.set(T*5.5,34,1.2),z.rotation.z=T*.7,a.add(z)}return{type:"fork",len:620,lenL:300,top:78,divH:8,lXin:-42,rXout:74}}function a1(){}var Mr=[-52,0,52],Bi=[-6,28,62],h_=1.15,Ml=3e3,u_={1:65,2:80.5,3:65},f_={1:16.78,2:.38,3:1.18},Pn=[],as=0,ls=0,Qi=[],hn=0,cs=0,hs=0,yr=0,pn=0,Xn=0,qo=!1,ks=0,Dy=new Is(15,2.4,6,24),Ny=new Is(15,5.5,6,24),Uy=new ht(5.5,1.6);function Oy(a){const p=new kt;p.add(new re(Dy,new ze({color:n,fog:!1}))),p.add(new re(Ny,new ze({color:n,transparent:!0,opacity:.32,blending:on,depthWrite:!1,fog:!1})));const g=new ze({color:16777215,transparent:!0,opacity:.85,fog:!1,depthWrite:!1});for(let y=0;y<4;y++){const E=new re(Uy,g);E.position.set(Math.cos(y*Math.PI/2)*10.5,Math.sin(y*Math.PI/2)*10.5,0),E.rotation.z=y*Math.PI/2,p.add(E)}return p.position.set(Mr[a[0]],Bi[a[1]],-Ml),h.add(p),p}var d_=[];{const a=new Is(16,1,6,24);for(let p=0;p<3;p++)for(let g=0;g<3;g++){const y=new re(a,new ze({color:2814207,transparent:!0,opacity:.08,fog:!1,depthWrite:!1}));y.position.set(Mr[g],Bi[p],0),h.add(y),d_.push({cx:g,cy:p,m:y})}}var Fy=new ze({color:659752,transparent:!0,opacity:.88,fog:!1}),p_=new pr({color:16722748,transparent:!0,opacity:.9,fog:!1}),By=new ze({color:8060826,transparent:!0,opacity:.9,fog:!1,depthWrite:!1}),m_=new ht(46,30),zy=new pi(m_),ky=(()=>{const a=new ht(50,2.4),p=new ht(2.4,34),g=[a.clone().translate(0,17,0),a.clone().translate(0,-17,0),p.clone().translate(25,0,0),p.clone().translate(-25,0,0)],y=Vn(g);return g.forEach(E=>E.dispose()),a.dispose(),p.dispose(),y})();function Gy(a){const p=new kt;for(let g=0;g<3;g++)for(let y=0;y<3;y++)if(y===a[0]&&g===a[1]){const E=new re(ky,By);E.position.set(Mr[y],Bi[g],0),p.add(E)}else{const E=new re(m_,Fy);E.position.set(Mr[y],Bi[g],0),p.add(E);const L=new Hn(zy,p_);L.position.copy(E.position),p.add(L)}return p.position.z=-Ml,h.add(p),p}var g_=new ze({color:16722780,transparent:!0,opacity:.55,blending:on,depthWrite:!1,fog:!1}),Hy=new ht(190,26),Vy=new ht(40,150);function Wy(a,p){const g=new kt,y=new re(a==="row"?Hy:Vy,g_);a==="row"?y.position.set(0,Bi[p],0):y.position.set(Mr[p],(Bi[0]+Bi[2])/2,0),g.add(y);const E=new Hn(new pi(y.geometry),p_);return E.position.copy(y.position),g.add(E),g.position.z=-Ml,h.add(g),g}function Xy(){for(const U of Qi)h.remove(U.g);Pn=[],Qi=[],as=0,ls=0,hn=0,cs=0,hs=0,pn=0,Xn=0;const a=u_[An]||120,p=60/a,g=f_[An]||.5;ks=wn.duration(),yr=0;let y=g;for(;y-p*4>4;)y-=p*4;for(;y<3;)y+=p*4;let E=1,L=1,k=0,N=0;for(;y<ks-4;){const U=k%6,V=An>=3&&U>=4;for(let T=0;T<8&&y<ks-4;T++){if(An>=2&&U%2===1&&T===0){Pn.push({t:y,cell:[E,L],kind:"gate"}),yr++,y+=p;continue}if(V){if(T%2===0){const I=N%2===0?"row":"col",Y=(N*2+1)%3;Pn.push({t:y,cell:[Y,Y],kind:"bar",axis:I,idx:Y}),yr++,N++}y+=p;continue}const z=U===5?4:U>=3?1:2;T%z===0&&(U===0?E=(E+1)%3:U===1?L=(L+1)%3:U===2?(E=(E+2)%3,T%4===0&&(L=(L+1)%3)):U===3?E=[0,2,1,0,2,1,0,2][T]:U===4?(E=T%3,L=T%3):(E=1,L=1),Pn.push({t:y,cell:[E,L],kind:"ring"}),yr++),y+=p}k++}qo=!0}var fu=[];{const a=document.getElementById("grid9");if(a)for(let p=2;p>=0;p--)for(let g=0;g<3;g++){const y=document.createElement("div");a.appendChild(y),fu.push({c:g,r:p,el:y})}}function du(){o_||(o_=!0,gi(),Ey(),console.log("AF2-Fassaden im Einsatz:",We))}var qy=["01_sky_dart_interceptor","02_afterburner_jet","03_pulse_commuter","04_vector_cargo_lifter","05_neon_bomber","06_skyline_heavy_transport"];Promise.all([_l(Ay,"buildings"),_l(wy,"vehicles"),_l(qy,"aircraft/synthwave_aircraft")]).then(a=>{ne=a[0],os=a[1],gl=a[2],du()}).catch(()=>du()),setTimeout(du,5e3);for(var __=new en,pu=[],v_=0,M_=44,y_=560,S_=0;pu.length<450&&S_<6e3;){S_++;const a=(Math.random()-.5)*4200,p=380+Math.random()*640,g=-2600-Math.random()*2600;(a-v_)*(a-v_)+(p-M_)*(p-M_)<y_*y_||pu.push(a,p,g)}__.setAttribute("position",new It(pu,3));var mu=new Ka({color:12374271,size:1.5,transparent:!0,opacity:.5,fog:!1});c.add(new kh(__,mu));var ai=new kt;(function(){const a=new en;a.setAttribute("position",new Qt(new Float32Array([0,0,-4.2,-3.2,-.3,2.6,0,.7,1.4,0,0,-4.2,0,.7,1.4,3.2,-.3,2.6,0,0,-4.2,0,.7,1.4,0,-.9,2.4,0,0,-4.2,0,-.9,2.4,0,.7,1.4]),3)),a.computeVertexNormals(),ai.add(new re(a,new ze({color:530986,side:zt}))),ai.add(new Hn(new pi(a,1),b(n)));const p=new re(new Wh(.6),new ze({color:r}));p.position.set(0,.35,-.6),p.scale.set(1,.6,1.8),ai.add(p);for(const g of[-3,3]){const y=new re(new mr(.28,6,6),new ze({color:g<0?r:n}));y.position.set(g,-.25,2.4),ai.add(y)}})(),h.add(ai),s_.load("../models/ship/glidebooster_vx7.glb",a=>{const p=H(a.scene,n);p.updateMatrixWorld(!0);const g=new ln().setFromObject(p),y=new B,E=new B;g.getSize(y),g.getCenter(E);const L=7/Math.max(.001,y.x);for(p.scale.setScalar(L),p.position.set(-E.x*L,-E.y*L,-E.z*L);ai.children.length;)ai.remove(ai.children[0]);ai.add(p);const k=new re(new Wh(.5),new ze({color:r}));k.position.set(0,.4,-.8),k.scale.set(1,.6,1.8),ai.add(k)},void 0,()=>{});var Yy=(()=>{const a=document.createElement("canvas");a.width=a.height=64;const p=a.getContext("2d"),g=p.createRadialGradient(32,32,2,32,32,30);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(.28,"rgba(255,214,130,0.85)"),g.addColorStop(.6,"rgba(255,110,70,0.38)"),g.addColorStop(1,"rgba(255,50,130,0)"),p.fillStyle=g,p.fillRect(0,0,64,64);const y=new Di(a);return y.colorSpace=Ot,y})(),gu=[];for(let a=0;a<10;a++){const p=new re(new ht(3.4-.22*a,3.4-.22*a),new ze({map:Yy,color:a<5?16767136:16751327,transparent:!0,opacity:.55-a*.048,blending:on,depthWrite:!1}));h.add(p),gu.push(p)}var ei={};addEventListener("keydown",a=>{if(ei[a.code]=!0,a.code==="Space"&&a.preventDefault(),er){!a.repeat&&performance.now()-jo>600&&ea();return}if(a.code==="KeyR"&&Qo(),a.code==="KeyT"&&(qn.superhot=!qn.superhot),a.code==="Escape"||a.code==="KeyP"){gs();return}if(tr){a.code==="ArrowUp"&&(nr=0),a.code==="ArrowDown"&&(nr=1),(a.code==="ArrowUp"||a.code==="ArrowDown")&&Al(),a.code==="Enter"&&C_();return}Xs()}),addEventListener("keyup",a=>{ei[a.code]=!1});var _u="none";addEventListener("gamepadconnected",a=>{_u=a.gamepad.id,Xs()});function vu(){const a=navigator.getGamepads?navigator.getGamepads():[];for(const p of a)if(p&&p.connected)return p;return null}function jy(){const a=zi;let p=0,g=0,y=1,E=0;return a<3?y=.6:a<8?p=Math.sin(a*1.2)*.25:a<12?(p=Math.sin(a*2.2)*.35,g=Math.sin(a*1.4)*.3):a<13.4?(y=0,p=-.55):a<17?p=.3:a<21&&(p=Math.sin(a*3.1)*.45,g=Math.sin(a*2.2)*.4),{x:p,y:g,boost:y,brake:E,fire:0}}function Ky(){if(Sr&&xr&&!tr&&!er)return jy();let a=0,p=0,g=0,y=0,E=0;(ei.ArrowLeft||ei.KeyA)&&(a-=1),(ei.ArrowRight||ei.KeyD)&&(a+=1),(ei.ArrowUp||ei.KeyW)&&(p+=1),(ei.ArrowDown||ei.KeyS)&&(p-=1),(ei.ShiftLeft||ei.ShiftRight)&&(g=1),ei.Space&&(y=1);const L=vu();if(L){_u=L.id;const k=U=>Math.abs(U)<.12?0:U;a+=k(L.axes[0]||0),p-=k(L.axes[1]||0);const N=U=>L.buttons[U]?L.buttons[U].value:0;g=Math.max(g,N(7),N(5)),y=Math.max(y,N(6),N(4)),E=Math.max(N(0),N(2))}return{x:Math.max(-1,Math.min(1,a)),y:Math.max(-1,Math.min(1,p)),boost:g,brake:y,fire:E}}var qn={stickMod:1.35,turnRate:17,smooth:.5,rollMod:.85,baseSpeed:33,lateralGain:3.1,boxW:150,boxH:95,invertY:!1,superhot:!0,timeFloor:.02},li={x:0,y:0,z:0},qt=0,Nt=22,yl=1,us=0,x_=0,Fn=0,er=!1,An=1,gt=0,st=1,un=0,ti=1,Yo=0,xn=!1,$y=0,Jy=0,Mu=0,b_=!1,jo=0,fs=0,T_=0,yu=0,Gs=0,Ko=!1,$o=!1,ds=0,Yt=null,Sl=Math.random()*6,Hs=0,E_=0,In=0,Sr=location.hash==="#trailer",Su=l[0].skyA,A_=l[0].skyB,Zy=[0,16,32,45,55,72,100],Vs=document.createElement("canvas");Vs.width=96,Vs.height=512;var Jo=Vs.getContext("2d"),xl=new Di(Vs);xl.colorSpace=Ot,xl.minFilter=Rn;var bl=-9;function Zo(a){const p=Vs.width,g=Vs.height,y=Jo.createLinearGradient(0,0,0,g);for(let k=0;k<Su.length;k++){const N=Su[k],U=A_[k];y.addColorStop(Zy[k]/100,`rgb(${Math.round(N[0]+(U[0]-N[0])*a)},${Math.round(N[1]+(U[1]-N[1])*a)},${Math.round(N[2]+(U[2]-N[2])*a)})`)}Jo.fillStyle=y,Jo.fillRect(0,0,p,g);const E=Jo.getImageData(0,0,p,g),L=E.data;for(let k=0;k<L.length;k+=4){const N=Math.random()*11-5.5|0;L[k]+=N,L[k+1]+=N,L[k+2]+=N}Jo.putImageData(E,0,0),xl.needsUpdate=!0,bl=a}Zo(0);var Tl=new re(new ht(2,2),new ze({map:xl,depthWrite:!1,depthTest:!1,fog:!1}));Tl.position.set(0,0,-120),Tl.scale.set(560,320,1),Tl.renderOrder=-1,u.add(Tl),c.add(u);var xu=14,ps=new Float32Array(xu*6),w_=[];for(let a=0;a<xu;a++){const p=Math.random()*Math.PI*2,g=6+Math.random()*16;w_.push({x:Math.cos(p)*g,y:Math.sin(p)*g*.62,z:-30-Math.random()*130,len:18+Math.random()*26,v:1+Math.random()*.7})}var bu=new en;bu.setAttribute("position",new Qt(ps,3));var El=new pr({color:10479871,transparent:!0,opacity:0,blending:on,depthWrite:!1,depthTest:!1,fog:!1}),ms=new Hn(bu,El);ms.frustumCulled=!1,ms.renderOrder=5,ms.visible=!1,h.add(ms);function Qo(){li={x:0,y:0,z:0},qt=0,Nt=22,us=0;for(const p of et)p.position.z=0;for(const p of rt)p.done=!1;for(const p of Kt)p.position.z=p.userData.z0,p.userData.done=!1;for(const p of cu)p.position.z=p.userData.z0,p.position.x=p.userData.x0,p.userData.done=!1;for(const p of ml)p.position.set(p.userData.x0,p.userData.y0,p.userData.z0),p.userData.done=!1;be.position.z=0,x_=0,Fn=0,er=!1,Zt.position.z=Xt,gt=0,st=1,un=0,ti=1,Yo=0,xn=!1,$y=0,Jy=0,Mu=0,E_=0,In=0,Hs=0,fs=0,T_=0,yu=0,Gs=0,Ko=!1,$o=!1,ds=0;for(const p of Qi)h.remove(p.g);Qi.length=0,Pn.length=0,qo=!1,as=0,ls=0,hn=0,cs=0,hs=0,yr=0,pn=0,Xn=0,ks=0;for(const p of fu)p.el.className="";Yt&&(Yt.visible=!0,Yt.position.set(0,14,Sr?-700:-900));for(const p of vl)if(p.position.z=p.userData.z0,p.userData.passed=!1,p.userData.hit=!1,p.userData.side=void 0,p.userData.punkGap=void 0,p.userData.pts)for(const g of p.userData.pts)g.done=!1;u.fov=66,u.updateProjectionMatrix(),S.strength=.9;const a=document.getElementById("pops");a&&(a.innerHTML="");for(const p of rs)p.opacity=.12;for(const p of Fi)p.opacity=.42;vr.material.opacity=.14,mu.opacity=.5,Zo(0),i1()}var tr=!1,R_=!1,nr=0,Qy=()=>[document.getElementById("btnResume"),document.getElementById("btnRestart")];function Al(){Qy().forEach((p,g)=>p.classList.toggle("sel",g===nr))}function C_(){nr===0?gs():(Qo(),wn.restart(),tr&&gs())}function gs(){xr&&(tr=!tr,document.getElementById("pause").style.display=tr?"flex":"none",tr?(nr=0,Al(),wn.pause(),document.getElementById("dmg").style.opacity=0):wn.resume())}function e1(){const a=vu(),p=!!(a&&a.buttons[9]&&a.buttons[9].pressed),g=p&&!R_;return R_=p,g}var Ws={up:!1,down:!1,a:!1,b:!1,any:!1};function wl(){const a=vu();if(!a)return{};const p=V=>!!(a.buttons[V]&&a.buttons[V].pressed),g=a.axes[1]||0,y=p(12)||g<-.5,E=p(13)||g>.5,L=p(0),k=p(1),N=a.buttons.some(V=>V&&V.pressed)||Math.abs(a.axes[0]||0)>.6||Math.abs(g)>.6,U={up:y&&!Ws.up,down:E&&!Ws.down,a:L&&!Ws.a,b:k&&!Ws.b,any:N&&!Ws.any};return Ws={up:y,down:E,a:L,b:k,any:N},U}document.getElementById("btnResume").addEventListener("click",a=>{a.stopPropagation(),gs()}),document.getElementById("btnRestart").addEventListener("click",a=>{a.stopPropagation(),Qo(),wn.restart(),tr&&gs()});function t1(){wn.pause(),jo=performance.now(),document.getElementById("dmg").style.opacity=0;const a=document.getElementById("end");if(!a)return;const p=a.querySelector("h2"),g=a.querySelector(".dist"),y=document.getElementById("btnEndRestart"),E=An<l.length;p&&(p.textContent=E?"LEVEL "+An+" CLEARED":"ALL CLEAR"),y&&(y.textContent=E?"NEXT: "+l[An].name+" \u2192":"FLY AGAIN"),g&&(g.textContent="SCORE "+Math.round(gt)+"   \xB7   RANK "+n1()+"   \xB7   HITS "+hs+"/"+yr+"   \xB7   MAX COMBO "+cs),a.style.display="flex"}function n1(){const a=yr?hs/yr:0;return a>=.95?"S":a>=.85?"A":a>=.7?"B":a>=.5?"C":"D"}function Lt(a,p){const g=document.getElementById("pops");if(!g)return;g.childElementCount>4&&g.firstElementChild.remove();const y=document.createElement("div");y.className="pop",y.textContent=a,y.style.color=p,y.style.textShadow="0 0 12px "+p,g.appendChild(y),setTimeout(()=>{y.remove()},900)}function L_(a){const p=l[a-1];Su=p.skyA,A_=p.skyB,ee.material.map.dispose(),ee.material.map=P(p.sun),ee.material.needsUpdate=!0,vr.material.map.dispose(),vr.material.map=r_(p.glow),vr.material.needsUpdate=!0,ge.material.map.dispose(),ge.material.map=ce(p.haze),ge.material.needsUpdate=!0,c.fog.color.setHex(p.fog),wn.setTrack(p.music),bl=-9,Zo(0)}function i1(){const a=document.getElementById("end");a&&(a.style.display="none")}function r1(){wn.pause(),jo=performance.now();const a=document.getElementById("end");if(!a)return;const p=a.querySelector("h2"),g=a.querySelector(".dist"),y=document.getElementById("btnEndRestart");p&&(p.textContent="PUNK BOOSTER"),g&&(g.textContent="TOO FAST TO STOP"),y&&(y.textContent="REPLAY"),a.style.display="flex"}function ea(){if(b_){b_=!1,Qo(),wn.restart();return}An=An<l.length?An+1:1,L_(An),Qo()}document.getElementById("btnEndRestart").addEventListener("click",a=>{a.stopPropagation(),ea()});function Tu(a,p,g,y){let E=(p-a)*g;return E>y&&(E=y),E<-y&&(E=-y),a+E}var _s=0,zi=0,Eu=60;function ta(a){const p=e1();if(xr?p&&(er?ea():gs()):wl().any&&Xs(),tr){const $=wl();$.up&&(nr=Math.max(0,nr-1),Al()),$.down&&(nr=Math.min(1,nr+1),Al()),$.a&&C_(),$.b&&gs(),_s=0,requestAnimationFrame(ta);return}if(er){performance.now()-jo>600&&wl().any&&ea(),_s=0,requestAnimationFrame(ta);return}if(!xr){Zt.position.z=-8600,Zt.scale.setScalar(1.35),Zt.position.y=30*.35;for(const $ of rs)$.opacity=.5;for(const $ of Fi)$.opacity=.88;vr.material.opacity=.5,ee.scale.setScalar(2.2),ee.position.y=-560,Math.abs(.85-bl)>.004&&Zo(.85),u.position.set(0,16,46),u.lookAt(0,40,-90),_s=0,f.info.reset(),x.render(),requestAnimationFrame(ta);return}const g=_s?a-_s:16.7,y=_s?Math.min(3,g/33.37):1;_s=a,zi+=y/30,Eu+=(1e3/Math.max(1,g)-Eu)*.06;const E=Ky(),L=qn.invertY?-E.y:E.y,k=Math.max(Math.abs(E.x),Math.abs(E.y),E.boost,E.brake);yl+=(1-yl)*.25;const U=y*yl;wn.setEnergy(yl);const V=qn.turnRate*y,T=1-Math.pow(1-qn.smooth,y);li.y=Tu(li.y,E.x*qn.stickMod,T,V),li.x=Tu(li.x,L*qn.stickMod,T,V),li.z=Tu(li.z,E.x*qn.rollMod,.12,5*y),us+=(E.boost-us)*.05;const z=li.y*e,I=li.x*e,Y=46*ti*(xn?1.1:1),oe=Math.sin(z)*Math.cos(I)*Y*qn.lateralGain,de=Math.sin(I)*Y*qn.lateralGain,Ue=Math.cos(z)*Math.cos(I)*Y;qt+=oe*U,Nt+=de*U,qt=Math.max(-qn.boxW,Math.min(qn.boxW,qt)),Nt=Math.max(-18,Math.min(qn.boxH,Nt)),ai.position.set(qt,Nt,0),ai.rotation.set(li.x*e,li.y*e,-li.z*e);const Be=.7+.3*Math.sin(zi*18);for(let $=0;$<gu.length;$++){const ae=gu[$],Ve=$+1;ae.position.set(qt-Math.sin(z)*Ve*1.3,Nt+.2,2.6+Ve*1.35),ae.lookAt(u.position);const Ee=(1.2-$*.08)*(.7+.6*k)*Be*(xn?1.5:1);ae.scale.set(Ee,Ee,Ee),ae.material.opacity=(.5-$*.045)*(.3+.9*Math.min(1,k*1.4))}const xe=Ue*U,Oe=Math.min(.1,g/1e3);Xn=Math.max(0,Xn-Oe),xn=Xn>0,Mu=0,wn.setRedline(xn),wl(),st=1+Math.min(7,hn*.12),gt+=xe*.004*st*(xn?1.3:1),un=Math.max(0,un-Oe),Yo=Math.max(0,Yo-Oe),yu=Math.max(0,yu-Oe),Gs=Math.max(0,Gs-Oe),un>.65&&(T_=0,fs=0),ti+=(1-ti)*Math.min(1,Oe*1.6);for(let $=0;$<Xe;$++)En[$]=et[$].position.z,rn[$]=En[$]+xe;for(const $ of rt){const ae=$.z0+En[$.k],Ve=$.z0+rn[$.k];ae<=0&&Ve>0&&!$.done&&($.done=!0)}for(let $=0;$<Xe;$++){let ae=rn[$];if(et[$].userData.minZ+ae>90){ae-=j;for(const Ve of ot[$])Ve.done=!1}et[$].position.z=ae}for(const $ of Kt){const ae=$.position.z,Ve=ae+xe,Ee=$.userData;ae<=0&&Ve>0&&!Ee.done&&(Ee.done=!0),Ve>90?($.position.z=Ve-j,Ee.done=!1):$.position.z=Ve}for(const $ of cu){const ae=$.position.z,Ve=ae+xe*(1-$.userData.v);ae<=0&&Ve>0&&!$.userData.done&&($.userData.done=!0,Math.abs(qt-$.position.x)<10&&Nt<-8&&Yo<=0&&(Yo=1.5,st=Math.min(8,st+.2),gt+=200,Lt("LOW PASS  +200","#ffd24a"))),Ve>60?($.position.z=Ve-Ty,$.position.x=hu[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,$.userData.done=!1):$.position.z=Ve}for(const $ of ml){const ae=$.userData,Ve=$.position.z,Ee=Ve+xe+ae.own*U;if(Ve<=0&&Ee>0&&!ae.done){ae.done=!0;const Ae=ae.rx||5,Et=ae.ry||4,Ht=Math.abs(qt-$.position.x),Jt=Math.abs(Nt-($.position.y+(ae.cy||0)));if(Ht<Ae+2&&Jt<Et+2.5)un=1,ti=.4,st=1,gt=Math.max(0,gt-500),us=0,Lt("MIDAIR CRASH  -500","#ff4a5a");else if(Ht<Ae+13&&Jt<Et+9)if(ae.oncoming)gt+=250,st=Math.min(8,st+.4),Lt("HEAD-ON PASS  +250","#ff8a5a");else{const jn=Math.round(120*st);gt+=jn,st=Math.min(8,st+.25),Lt("OVERTAKE  +"+jn,"#c0ff5e")}}if($.position.z=Ee,ae.strobeA){const Ae=(zi*5|0)%2===0;ae.strobeA.visible=Ae,ae.strobeB.visible=!Ae}Ee>80?($.position.z=Ee-Xo-Math.random()*400,$.position.x=(ae.oncoming?-1:1)*(6+Math.random()*24),$.position.y=-12+Math.random()*55,ae.done=!1):Ee<-Xo-800&&($.position.z=Ee+Xo,ae.done=!1)}if(be.position.z=(be.position.z+xe)%46,Yt)if(Hs>0)Hs-=Oe,Hs<=0&&(h.remove(Yt),Yt=null,void 0);else{const $=-Yt.position.z,ae=(Sr?43:$>2200?42:46)+.7*(An-1)+.4*Math.min(3,fs)-(xn?2.5:0);Yt.position.z+=xe-ae*U,Sl+=U*.02;let Ve=null;for(const Ae of vl){const Et=Ae.userData;if(Et.type!=="gate"&&Et.type!=="fork")continue;const Ht=Yt.position.z-Ae.position.z;if(Ht>0&&Ht<600){if(Et.punkGap===void 0&&(Et.punkGap=Math.random()<.5?0:1),Et.type==="gate"){const Jt=Et.gaps[Et.punkGap];Ve=(Jt.x0+Jt.x1)/2}else Ve=Et.punkGap===0?-26:40;break}}Ve!==null?Yt.position.x+=(Ve-Yt.position.x)*Math.min(1,U*.08):Yt.position.x=Math.sin(Sl*1.7)*26,Yt.position.y=12+Math.sin(Sl*1.13)*10,Yt.rotation.z=Math.sin(Sl*1.7)*.25;const Ee=-Yt.position.z;if(!Sr&&!er&&Gs<=0&&(Ee<420&&!Ko?(Ko=!0,$o=!1,Gs=6,Lt("HE'S RIGHT THERE - FLOOR IT!","#ff2bd6")):Ee>2400&&!$o&&($o=!0,Ko=!1,Gs=6,Lt("DON'T LOSE HIM!","#ff2bd6"))),Ee>=420&&Ee<=2400&&(Ko=!1,$o=!1),Ee<30&&Math.abs(qt-Yt.position.x)<22){fs++;const Ae=Math.round(2e3*st*(1+.5*(fs-1)));gt+=Ae,st=Math.min(8,st+2),E_++,In=1,ds=12,Lt((fs>1?"BUST x"+fs+"!":"BUSTED!")+"  +"+Ae,"#2af0ff"),Yt.visible=!1,Hs=2,Sr&&(er=!0,r1())}else Ee>3200&&(gt=Math.max(0,gt-800),Lt("PUNK ESCAPED  -800","#ff5a5f"),Yt.position.z=-1600)}if(In=Math.max(0,In-Oe*1.6),!qo&&xr&&wn.time()>.5&&wn.duration()>10&&Xy(),qo){const $=wn.time();for(;as<Pn.length&&(Pn[as].t-$)*1e3*h_<Ml;){const Ee=Pn[as],Ae=Ee.kind==="gate"?Gy(Ee.cell):Ee.kind==="bar"?Wy(Ee.axis,Ee.idx):Oy(Ee.cell);Qi.push({t:Ee.t,cell:Ee.cell,kind:Ee.kind||"ring",axis:Ee.axis,idx:Ee.idx,g:Ae,judged:!1}),as++}g_.opacity=.38+.25*Math.sin(zi*12);for(let Ee=Qi.length-1;Ee>=0;Ee--){const Ae=Qi[Ee],Et=(Ae.t-$)*1e3;if(Ae.g.position.z=-Et*h_,Ae.kind==="ring"){Ae.g.rotation.z+=.04*U;const Ht=Et<700;Ae.g.children[0].material.color.setHex(Ht?r:n),Ae.g.children[1].material.color.setHex(Ht?r:n);const Jt=1+Math.max(0,(500-Math.abs(Et))/500)*.3;Ae.g.scale.set(Jt,Jt,1)}if(!Ae.judged&&Et<=60)if(Ae.judged=!0,Ae.kind==="gate"){const Ht=Math.abs(qt-Mr[Ae.cell[0]]),Jt=Math.abs(Nt-Bi[Ae.cell[1]]);if(Ht<26&&Jt<18){hn+=2,cs=Math.max(cs,hn),hs++,pn=Math.min(1,pn+.08);const jn=Math.round(350*(1+hn*.06)*(Xn>0?2:1));gt+=jn,Lt("GATE  +"+jn,"#7aff9a"),In=Math.max(In,.22),pn>=1&&Xn<=0&&(Xn=6,pn=0,Lt("\u2605 STAR REDLINE \u2605","#ffd24a"),ds=10)}else hn=0,pn=Math.max(0,pn-.15),gt=Math.max(0,gt-300),Lt("GATE SLAM  -300","#ff5a5f"),un=Math.max(un,.5),ti=.6}else if(Ae.kind==="bar")if(Ae.axis==="row"?Math.abs(Nt-Bi[Ae.idx])<17:Math.abs(qt-Mr[Ae.idx])<24)hn=0,pn=Math.max(0,pn-.1),gt=Math.max(0,gt-200),Lt("BAR HIT  -200","#ff5a5f"),un=Math.max(un,.45);else{hs++;const Jt=Math.round(60*(Xn>0?2:1));gt+=Jt,pn=Math.min(1,pn+.03),Lt("DODGE  +"+Jt,"#9ad0ff")}else{const Ht=Math.abs(qt-Mr[Ae.cell[0]]),Jt=Math.abs(Nt-Bi[Ae.cell[1]]),jn=Ht<26&&Jt<18,na=Ht<13&&Jt<9;if(jn){hn++,cs=Math.max(cs,hn),hs++,pn=Math.min(1,pn+(na?.09:.05));const P_=Math.round((na?300:150)*(1+hn*.06)*(Xn>0?2:1));gt+=P_,Lt((na?"PERFECT":"GOOD")+"  +"+P_+(hn>4?"   x"+hn:""),na?"#ff2bd6":"#2af0ff"),(hn===10||hn===25||hn===50||hn===100)&&Lt("\u2605 COMBO "+hn+" \u2605","#ffd24a"),na&&(In=Math.max(In,.18)),pn>=1&&Xn<=0&&(Xn=6,pn=0,Lt("\u2605 STAR REDLINE \u2605","#ffd24a"),ds=10)}else hn=0,pn=Math.max(0,pn-.15),gt=Math.max(0,gt-100),Lt("MISS  -100","#ff5a5f"),un=Math.max(un,.25)}Et<-400&&(h.remove(Ae.g),Qi.splice(Ee,1))}for(;ls<Pn.length&&Pn[ls].t<$;)ls++;const ae=Pn[ls],Ve=Pn[ls+1];for(const Ee of fu){let Ae="";ae&&(ae.kind==="bar"?(ae.axis==="row"&&Ee.r===ae.idx||ae.axis==="col"&&Ee.c===ae.idx)&&(Ae="nb"):Ee.c===ae.cell[0]&&Ee.r===ae.cell[1]&&(Ae="nx")),!Ae&&Ve&&Ve.kind!=="bar"&&Ee.c===Ve.cell[0]&&Ee.r===Ve.cell[1]&&(Ae="n2"),Ee.el.className=Ae}for(const Ee of d_){const Ae=ae&&ae.kind!=="bar"&&Ee.cx===ae.cell[0]&&Ee.cy===ae.cell[1],Et=Ve&&Ve.kind!=="bar"&&Ee.cx===Ve.cell[0]&&Ee.cy===Ve.cell[1];Ee.m.material.opacity=Ae?.5+.25*Math.sin(zi*14):Et?.22:.07,Ee.m.material.color.setHex(Ae?r:2814207)}{const Ee=60/(u_[An]||120),Ae=($-(f_[An]||0))/Ee%1,Et=document.getElementById("grid9");Et&&(Et.style.opacity=(.65+.3*(1-Ae)).toFixed(2))}}for(const $ of vl){const ae=$.userData,Ve=$.position.z,Ee=Ve+xe;if($.position.z=Ee,Ee-ae.len>200&&($.position.z=Ee-Ry,ae.passed=!1,ae.hit=!1,ae.punkGap=void 0,ae.side=void 0,ae.pts))for(const Ae of ae.pts)Ae.done=!1;if(!Sr)if(ae.type==="gate"){if(Ve<=0&&Ee>0&&!ae.passed){ae.passed=!0;const Ae=ae.gaps.find(Et=>qt>Et.x0+2.5&&qt<Et.x1-2.5);if(Nt<ae.top+1&&!Ae)un=1,ti=.35,st=1,gt=Math.max(0,gt-800),us=0,Lt("GATE CRASH  -800","#ff4a5a");else if(Nt<ae.top+1&&Ae&&Ae.narrow){const Et=Math.round(300*st*(xn?1.5:1));st=Math.min(8,st+.8),gt+=Et,In=Math.max(In,.3),Lt("THREAD THE NEEDLE  +"+Et,"#ff2bd6")}}}else if(ae.type==="scurve"){if(Ve<=0&&Ee>0&&!ae.passed&&(ae.passed=!0,Nt<ae.top+1&&qt<ae.g1+2&&(un=1,ti=.4,st=1,gt=Math.max(0,gt-600),Lt("WALL  -600","#ff4a5a"))),Ve-ae.len<=0&&Ee-ae.len>0&&!ae.hit){if(ae.hit=!0,Nt<ae.top+1&&qt>ae.g2-2)un=1,ti=.4,st=1,gt=Math.max(0,gt-600),Lt("WALL  -600","#ff4a5a");else if(Nt<ae.top+1){const Ae=Math.round(220*st*(xn?1.5:1));st=Math.min(8,st+.5),gt+=Ae,Lt("S-LINE  +"+Ae,"#c0ff5e")}}}else if(ae.type==="bridge"){if(Ve<=0&&Ee>0&&!ae.passed){if(ae.passed=!0,Nt>ae.yLow-1&&Nt<ae.yHigh+1)un=.9,ti=.45,st=Math.max(1,st-2),gt=Math.max(0,gt-400),Lt("BRIDGE SLAM  -400","#ff4a5a");else if(Nt<=ae.yLow-1){const Ae=Math.round(250*st*(xn?1.5:1));st=Math.min(8,st+.5),gt+=Ae,In=Math.max(In,.25),Lt("UNDERPASS  +"+Ae,"#ffd24a")}}}else if(ae.type==="fork"){const Ae=$.position.z>0&&$.position.z-ae.len<0,Et=$.position.z>0&&$.position.z-ae.lenL<0;if(Ve<=0&&Ee>0&&!ae.passed&&(ae.passed=!0,ae.side=Nt<ae.top+1?qt<0?"L":"R":null),Ae&&Nt<ae.top+1&&!ae.hit&&(Math.abs(qt)<ae.divH+3||Et&&qt<ae.lXin-2||qt>ae.rXout+2)&&(ae.hit=!0,un=.9,ti=.45,st=Math.max(1,st-2),gt=Math.max(0,gt-500),Lt("FORK CRASH  -500","#ff4a5a")),Ve-ae.lenL<=0&&Ee-ae.lenL>0&&ae.side==="L"&&Nt<ae.top+1&&!ae.hit){const Ht=Math.round(350*st*(xn?1.5:1));st=Math.min(8,st+.8),gt+=Ht,In=Math.max(In,.3),Lt("SHORTCUT  +"+Ht,"#ff2bd6")}if(Ve-ae.len<=0&&Ee-ae.len>0&&ae.side==="R"&&Nt<ae.top+1&&!ae.hit){const Ht=Math.round(120*st*(xn?1.5:1));st=Math.min(8,st+.3),gt+=Ht,Lt("SAFE LINE  +"+Ht,"#2af0ff")}}else if(ae.type==="slalom")for(const Ae of ae.pts){const Et=Ve+Ae.z,Ht=Ee+Ae.z;if(Et<=0&&Ht>0&&!Ae.done){Ae.done=!0;const Jt=Math.abs(qt-Ae.x);if(Jt<8&&Nt<90)un=.7,ti=.55,st=Math.max(1,st-1.5),gt=Math.max(0,gt-300),Lt("PYLON  -300","#ff4a5a");else if(Jt<20&&Nt<90){const jn=Math.round(120*st*(xn?1.5:1));st=Math.min(8,st+.25),gt+=jn,Lt("SLALOM  +"+jn,"#2af0ff")}}}else{const Ae=$.position.z>0&&$.position.z-ae.len<0;Ae&&!ae.hit&&(Math.abs(qt)>ae.xLim||ae.yLim!==void 0&&Nt>ae.yLim)&&(ae.hit=!0,un=.8,ti=.5,st=Math.max(1,st-2),gt=Math.max(0,gt-400),Lt("WALL SCRAPE  -400","#ff4a5a")),Ae||(ae.hit=!1)}}W.offset.y+=xe/Pe,Fe.offset.y+=xe/150,wt.position.z=(wt.position.z+xe)%90,Gt.position.z=wt.position.z;for(const $ of nn)$.position.z+=xe*$.userData.rel,$.position.z>60&&($.position.z-=5900),$.position.z<-5900&&($.position.z+=5900);for(const $ of Ft)$.position.z+=xe,$.position.z>300&&($.position.z-=Bs);for(const $ of mt)$.rotation.z+=$.userData.spin*U*.03;for(const $ of Sn)$.position.x+=$.userData.vx*U*2,$.position.z+=xe,$.position.x>1400&&($.position.x=-1400),$.position.x<-1400&&($.position.x=1400),$.position.z>-400&&($.position.z-=3400);for(const $ of Ie)$.rotation.y+=.05*U;for(const $ of At)$.position.z+=xe,$.position.z>200&&($.position.z-=6300),$.rotation.z=Math.sin(zi*$.userData.sp+$.userData.ph)*.45;for(const $ of Qn)$.position.z+=xe,$.position.z>100&&($.position.z-=6e3);for(const $ of ns)$.position.z+=xe,$.position.z>40&&($.position.z-=6080);for(const $ of Ho)$.position.z+=xe,$.position.z>60&&($.position.z-=6200);for(const $ of is)$.position.z+=xe,$.position.z>80&&($.position.z-=6e3);x_+=xe,Fn=Math.min(1,ks>0?wn.time()/ks:0),Zt.position.z=Xt*(1-Fn);const _t=1+Fn*.85;Zt.scale.set(_t,_t,_t),Zt.position.y=30*(_t-1);const Bt=Fn*Fn;for(const $ of rs)$.opacity=.12+.88*Bt;for(const $ of Fi)$.opacity=.42+.55*Fn;vr.material.opacity=.14+.5*Math.pow(Fn,1),mu.opacity=.5*(1-Fn*.92),Math.abs(Fn-bl)>.004&&Zo(Fn),qo&&Pn.length&&as>=Pn.length&&Qi.length===0&&wn.time()>Pn[Pn.length-1].t+2&&(er=!0,t1()),St.position.x=qt*.04;const mn=k*.6+un*4+(xn?.35:0);u.position.x+=(qt*.45+(Math.random()-.5)*mn-u.position.x)*.16,u.position.y+=(Nt*.4+16+(Math.random()-.5)*mn-u.position.y)*.16,u.position.z=46-us*5-(xn?3:0);const Yn=66+us*4+(xn?12:0)+ds;if(ds+=(0-ds)*Math.min(1,Oe*5),Math.abs(u.fov-Yn)>.05&&(u.fov+=(Yn-u.fov)*.08,u.updateProjectionMatrix()),S.strength+=((xn?1.25:.9)-S.strength)*.08,El.opacity+=((xn?.7:0)-El.opacity)*.1,El.opacity>.02){ms.visible=!0,ms.position.set(qt,Nt+.2,0);for(let $=0;$<xu;$++){const ae=w_[$];if(ae.z+=Y*U*ae.v*.9,ae.z>26){ae.z=-150-Math.random()*40;const Ee=Math.random()*Math.PI*2,Ae=6+Math.random()*16;ae.x=Math.cos(Ee)*Ae,ae.y=Math.sin(Ee)*Ae*.62}const Ve=$*6;ps[Ve]=ae.x,ps[Ve+1]=ae.y,ps[Ve+2]=ae.z,ps[Ve+3]=ae.x,ps[Ve+4]=ae.y,ps[Ve+5]=ae.z-ae.len}bu.attributes.position.needsUpdate=!0}else ms.visible=!1;u.lookAt(qt*.6,Nt*.6+6,-90),ee.scale.setScalar(1.3+Fn*.9+Fn*Fn*1.6),ee.position.y=-470+Fn*340,document.getElementById("hud").textContent=`PUNK BOOSTER v3.5 RHYTHM
${Eu.toFixed(0)} fps   ${m} dc
SONG ${An} \xB7 ${l[An-1].name}   ${_u==="none"?"keyboard":"pad ok"}`;const ct=document.getElementById("score");ct.textContent=`SCORE ${String(Math.round(gt)).padStart(6,"0")}
\xD7${st.toFixed(1)}${hn>1?`
COMBO `+hn:""}`,ct.style.color=st>=6?"#ff2bd6":st>=3?"#2af0ff":"#ffe08a",document.getElementById("dmg").style.opacity=un>0?Math.min(1,un).toFixed(2):Mu>1.2?(.16+.14*Math.sin(zi*12)).toFixed(2):0,document.getElementById("bustfx").style.opacity=In>0?In.toFixed(2):0;{const $=Math.max(0,Math.min(1,Xn>0?1:pn));document.getElementById("sbneedle").style.left=($*277).toFixed(0)+"px"}const sn=document.getElementById("sblabel");Xn>0?(sn.textContent="\u2605 STAR REDLINE \u2605",sn.style.color="#ffd24a",sn.style.opacity=(.7+.3*Math.sin(zi*10)).toFixed(2)):pn>.8?(sn.textContent="ENERGY READY...",sn.style.color="#2af0ff",sn.style.opacity=(.6+.4*Math.sin(zi*8)).toFixed(2)):(sn.textContent="",sn.style.opacity=1);const Pt=document.getElementById("punkui");if(Yt)if(Hs>0)Pt.textContent="PUNK DOWN - NEXT INBOUND",Pt.style.color="#2af0ff";else{const $=Math.max(0,Math.round(-Yt.position.z));Pt.textContent="\u25E4 PUNK  "+$+"m",Pt.style.color=$<400?"#2af0ff":$>2400?"#ff5a5f":"#ffe08a"}f.info.reset(),x.render(),m=f.info.render.calls,requestAnimationFrame(ta)}requestAnimationFrame(ta),window.P=qn;var wn=(function(){let a=null,p=!1,g=1,y=0,E=0,L=null;const k=134,N=60/k,U=N/4,V=ct=>440*Math.pow(2,(ct-69)/12),T=[{root:33,arp:[57,60,64,69],chord:[57,60,64]},{root:29,arp:[53,57,60,65],chord:[53,57,60]},{root:36,arp:[60,64,67,72],chord:[60,64,67]},{root:31,arp:[55,59,62,67],chord:[55,59,62]}];function z(ct,sn,Pt,$,ae,Ve){const Ee=a.createOscillator(),Ae=a.createGain();return Ee.type=ct,Ee.frequency.setValueAtTime(sn,Pt),Ae.gain.setValueAtTime(0,Pt),Ae.gain.linearRampToValueAtTime(ae,Pt+.008),Ae.gain.exponentialRampToValueAtTime(1e-4,Pt+$),Ee.connect(Ae),Ae.connect(Ve),Ee.start(Pt),Ee.stop(Pt+$+.02),Ee}function I(ct,sn,Pt,$,ae){const Ve=Math.floor(a.sampleRate*sn),Ee=a.createBuffer(1,Ve,a.sampleRate),Ae=Ee.getChannelData(0);for(let jn=0;jn<Ve;jn++)Ae[jn]=Math.random()*2-1;const Et=a.createBufferSource();Et.buffer=Ee;const Ht=a.createBiquadFilter();Ht.type="highpass",Ht.frequency.value=$;const Jt=a.createGain();Jt.gain.setValueAtTime(Pt,ct),Jt.gain.exponentialRampToValueAtTime(1e-4,ct+sn),Et.connect(Ht),Ht.connect(Jt),Jt.connect(ae),Et.start(ct),Et.stop(ct+sn+.02)}function Y(ct,sn){const Pt=a.createOscillator(),$=a.createGain();Pt.type="sine",Pt.frequency.setValueAtTime(160,ct),Pt.frequency.exponentialRampToValueAtTime(48,ct+.12),$.gain.setValueAtTime(.9,ct),$.gain.exponentialRampToValueAtTime(1e-4,ct+.18),Pt.connect($),$.connect(sn),Pt.start(ct),Pt.stop(ct+.2)}let oe,de,Ue,Be;function xe(){for(;E<a.currentTime+.12;){const ct=E,sn=Math.floor(y/16)%T.length,Pt=T[sn],$=y%16;$%4===0&&Y(ct,Be),$%2===1&&I(ct,.03,.18*g,7e3,Be),($===4||$===12)&&I(ct,.14,.35*g,1800,Be),$%2===0&&z("square",V(Pt.root),ct,U*1.8,.16,Ue);const ae=Pt.arp[$%Pt.arp.length]+($>=8?12:0);if(z("square",V(ae),ct,U*.9,.1*g,de),$===0)for(const Ve of Pt.chord)z("sawtooth",V(Ve+12),ct,N*.9,.05,de);y++,E+=U}L=setTimeout(xe,25)}let Oe=null,_t="../vice-runway.mp3",Bt=!1;function mn(ct){if(!Oe||Bt)return;const sn=Oe.play();sn&&sn.then?(Bt=!0,sn.then(()=>{Bt=!1,p=!0}).catch(Pt=>{Bt=!1,console.warn("[audio] play() abgelehnt ("+ct+"):",Pt&&Pt.name,Pt&&Pt.message)})):p=!0}function Yn(){if(Oe)try{Oe.pause()}catch{}Oe=new Audio(_t),Oe.loop=!0,Oe.volume=1;try{Oe.preservesPitch=!1,Oe.mozPreservesPitch=!1}catch{}mn("load")}return{start(){p||(Oe?mn("start"):Yn())},setTrack(ct){ct!==_t&&(_t=ct,(p||Oe)&&Yn())},time(){return Oe&&Oe.currentTime||0},duration(){return Oe&&isFinite(Oe.duration)?Oe.duration:0},setEnergy(ct){Oe&&(Oe.playbackRate=.9+.1*Math.max(0,Math.min(1,ct)))},setRedline(ct){},pause(){Oe&&Oe.pause()},resume(){Oe&&mn("resume")},restart(){if(Oe){try{Oe.currentTime=0}catch{}mn("restart")}}}})(),xr=!1;function Xs(){if(wn.start(),xr)return;xr=!0,h.visible=!0;const a=document.getElementById("start");a&&(a.style.display="none")}if(document.getElementById("start").addEventListener("click",Xs),addEventListener("pointerdown",()=>{if(er){performance.now()-jo>600&&ea();return}Xs()}),location.hash.startsWith("#auto")){xr=!0,h.visible=!0;const a=document.getElementById("start");a&&(a.style.display="none")}{const a=location.hash.match(/lv(\d)/);if(a){const p=Math.max(1,Math.min(l.length,+a[1]));An=p,L_(p)}}Sr&&(document.getElementById("hud").style.display="none",setTimeout(()=>Xs(),600))}});Sy()})();/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
