(()=>{var Dn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var tm=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Bn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function jc(n,e){return(n%e+e)%e}function n0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function i0(n,e,t){return n!==e?(t-n)/(e-n):0}function Dr(n,e,t){return(1-t)*n+t*e}function s0(n,e,t,i){return Dr(n,e,1-Math.exp(-t*i))}function r0(n,e=1){return e-Math.abs(jc(n,e*2)-e)}function o0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function a0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function l0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function c0(n,e){return n+Math.random()*(e-n)}function h0(n){return n*(.5-Math.random())}function u0(n){n!==void 0&&(gf=n);let e=gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function f0(n){return n*Xs}function d0(n){return n*js}function fc(n){return(n&n-1)===0&&n!==0}function p0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function la(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function m0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+i)/2),c=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*c,l*u,l*f,a*h);break;case"YZY":n.set(l*f,a*c,l*u,a*h);break;case"ZXZ":n.set(l*u,l*f,a*c,a*h);break;case"XZX":n.set(a*c,l*g,l*d,a*h);break;case"YXY":n.set(l*d,a*c,l*g,a*h);break;case"ZYZ":n.set(l*g,l*d,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function Od(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function g0(){let n=Hr("canvas");return n.style.display="block",n}function Nr(n){n in _f||(_f[n]=!0,console.warn(n))}function qs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ca.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Dl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);let a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),h=t.dot(Qi),c=i.dot(Qi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}function Gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function P0(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;ko.copy(a),ko.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(ko);return h<t.near||h>t.far?null:{distance:h,point:ko.clone(),object:n}}function Go(n,e,t,i,s,r,o,a,l,h){n.getVertexPosition(a,Us),n.getVertexPosition(l,Os),n.getVertexPosition(h,Bs);let c=P0(n,e,t,i,Us,Os,Bs,zo);if(c){s&&(Bo.fromBufferAttribute(s,a),Fo.fromBufferAttribute(s,l),Ho.fromBufferAttribute(s,h),c.uv=rs.getInterpolation(zo,Us,Os,Bs,Bo,Fo,Ho,new oe)),r&&(Bo.fromBufferAttribute(r,a),Fo.fromBufferAttribute(r,l),Ho.fromBufferAttribute(r,h),c.uv1=rs.getInterpolation(zo,Us,Os,Bs,Bo,Fo,Ho,new oe),c.uv2=c.uv1),o&&(Pf.fromBufferAttribute(o,a),Lf.fromBufferAttribute(o,l),If.fromBufferAttribute(o,h),c.normal=rs.getInterpolation(zo,Us,Os,Bs,Pf,Lf,If,new C),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new C,materialIndex:0};rs.getNormal(Us,Os,Bs,u.normal),c.face=u}return c}function er(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function sn(n){let e={};for(let t=0;t<n.length;t++){let i=er(n[t]);for(let s in i)e[s]=i[s]}return e}function L0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fd(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}function Hd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function O0(n,e){let t=e.isWebGL2,i=new WeakMap;function s(h,c){let u=h.array,f=h.usage,d=u.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,u,f),h.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:d}}function r(h,c,u){let f=c.array,d=c._updateRange,g=c.updateRanges;if(n.bindBuffer(u,h),d.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}c.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);let c=i.get(h);c&&(n.deleteBuffer(c.buffer),i.delete(h))}function l(h,c){if(h.isGLBufferAttribute){let f=i.get(h);(!f||f.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=i.get(h);if(u===void 0)i.set(h,s(h,c));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,h,c),u.version=h.version}}return{get:o,remove:a,update:l}}function gy(n,e,t,i,s,r,o){let a=new _e(0),l=r===!0?0:1,h,c,u=null,f=0,d=null;function g(m,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),M=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ba)?(c===void 0&&(c=new W(new de(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:er(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==Mt,(u!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new W(new Ye(2,2),new Xt({name:"BackgroundMaterial",uniforms:er(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function _(m,p){m.getRGB(Wo,Fd(n)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function _y(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),h=l,c=!1;function u(L,U,O,X,q){let Y=!1;if(o){let Z=_(X,O,U);h!==Z&&(h=Z,d(h.object)),Y=p(L,X,O,q),Y&&M(L,X,O,q)}else{let Z=U.wireframe===!0;(h.geometry!==X.id||h.program!==O.id||h.wireframe!==Z)&&(h.geometry=X.id,h.program=O.id,h.wireframe=Z,Y=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Y||c)&&(c=!1,D(L,U,O,X),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,U,O){let X=O.wireframe===!0,q=a[L.id];q===void 0&&(q={},a[L.id]=q);let Y=q[U.id];Y===void 0&&(Y={},q[U.id]=Y);let Z=Y[X];return Z===void 0&&(Z=m(f()),Y[X]=Z),Z}function m(L){let U=[],O=[],X=[];for(let q=0;q<s;q++)U[q]=0,O[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:X,object:L,attributes:{},index:null}}function p(L,U,O,X){let q=h.attributes,Y=U.attributes,Z=0,te=O.getAttributes();for(let he in te)if(te[he].location>=0){let J=q[he],le=Y[he];if(le===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;Z++}return h.attributesNum!==Z||h.index!==X}function M(L,U,O,X){let q={},Y=U.attributes,Z=0,te=O.getAttributes();for(let he in te)if(te[he].location>=0){let J=Y[he];J===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let le={};le.attribute=J,J&&J.data&&(le.data=J.data),q[he]=le,Z++}h.attributes=q,h.attributesNum=Z,h.index=X}function y(){let L=h.newAttributes;for(let U=0,O=L.length;U<O;U++)L[U]=0}function v(L){P(L,0)}function P(L,U){let O=h.newAttributes,X=h.enabledAttributes,q=h.attributeDivisors;O[L]=1,X[L]===0&&(n.enableVertexAttribArray(L),X[L]=1),q[L]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),q[L]=U)}function w(){let L=h.newAttributes,U=h.enabledAttributes;for(let O=0,X=U.length;O<X;O++)U[O]!==L[O]&&(n.disableVertexAttribArray(O),U[O]=0)}function R(L,U,O,X,q,Y,Z){Z===!0?n.vertexAttribIPointer(L,U,O,q,Y):n.vertexAttribPointer(L,U,O,X,q,Y)}function D(L,U,O,X){if(i.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let q=X.attributes,Y=O.getAttributes(),Z=U.defaultAttributeValues;for(let te in Y){let he=Y[te];if(he.location>=0){let K=q[te];if(K===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let J=K.normalized,le=K.itemSize,ve=t.get(K);if(ve===void 0)continue;let xe=ve.buffer,Ue=ve.type,Be=ve.bytesPerElement,we=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||K.gpuType===bd);if(K.isInterleavedBufferAttribute){let $e=K.data,H=$e.stride,Qt=K.offset;if($e.isInstancedInterleavedBuffer){for(let Se=0;Se<he.locationSize;Se++)P(he.location+Se,$e.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let Se=0;Se<he.locationSize;Se++)v(he.location+Se);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Se=0;Se<he.locationSize;Se++)R(he.location+Se,le/he.locationSize,Ue,J,H*Be,(Qt+le/he.locationSize*Se)*Be,we)}else{if(K.isInstancedBufferAttribute){for(let $e=0;$e<he.locationSize;$e++)P(he.location+$e,K.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let $e=0;$e<he.locationSize;$e++)v(he.location+$e);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let $e=0;$e<he.locationSize;$e++)R(he.location+$e,le/he.locationSize,Ue,J,le*Be,le/he.locationSize*$e*Be,we)}}else if(Z!==void 0){let J=Z[te];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(he.location,J);break;case 3:n.vertexAttrib3fv(he.location,J);break;case 4:n.vertexAttrib4fv(he.location,J);break;default:n.vertexAttrib1fv(he.location,J)}}}}w()}function x(){T();for(let L in a){let U=a[L];for(let O in U){let X=U[O];for(let q in X)g(X[q].object),delete X[q];delete U[O]}delete a[L]}}function S(L){if(a[L.id]===void 0)return;let U=a[L.id];for(let O in U){let X=U[O];for(let q in X)g(X[q].object),delete X[q];delete U[O]}delete a[L.id]}function B(L){for(let U in a){let O=a[U];if(O[L.id]===void 0)continue;let X=O[L.id];for(let q in X)g(X[q].object),delete X[q];delete O[L.id]}}function T(){I(),c=!0,h!==l&&(h=l,d(h.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:T,resetDefaultState:I,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:v,disableUnusedAttributes:w}}function yy(n,e,t,i){let s=i.isWebGL2,r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,c,u,f),t.update(u,r,f)}function h(c,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(c[g],u[g]);else{d.multiDrawArraysWEBGL(r,c,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=h}function My(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let h=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,v=o||e.has("OES_texture_float"),P=y&&v,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:P,maxSamples:w}}function xy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new fi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=c(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):h();else{let M=r?0:i,y=M*4,v=p.clippingState||null;l.value=v,v=c(g,f,y,d);for(let P=0;P!==y;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vy(n){let e=new WeakMap;function t(o,a){return a===lc?o.mapping=Ks:a===cc&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===lc||a===cc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new gc(l.height/2);return h.fromEquirectangularTexture(n,o),e.set(o,h),o.addEventListener("dispose",s),t(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function Ey(n){let e=[],t=[],i=[],s=n,r=n-Gs+1+Df.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Gs?l=Df[o-n+Gs-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),c=-h,u=1+h,f=[c,c,u,c,u,u,c,c,u,u,c,u],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){let R=w%3*2/3-1,D=w>2?0:-1,x=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];M.set(x,_*g*w),y.set(f,m*g*w);let S=[w,w,w,w,w,w];v.set(S,p*g*w)}let P=new ct;P.setAttribute("position",new _t(M,_)),P.setAttribute("uv",new _t(y,m)),P.setAttribute("faceIndex",new _t(v,p)),e.push(P),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Of(n,e,t){let i=new on(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Sy(n,e,t){let i=new Float32Array(ss),s=new C(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bf(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ff(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function by(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===lc||l===cc,c=l===Ks||l===Zs;if(h||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ya(n)),u=h?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(h&&u&&u.height>0||c&&u&&s(u)){t===null&&(t=new ya(n));let f=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ty(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ay(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function h(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let y=0,v=M.length;y<v;y+=3){let P=M[y+0],w=M[y+1],R=M[y+2];f.push(P,w,w,R,R,P)}}else if(g!==void 0){let M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){let P=y+0,w=y+1,R=y+2;f.push(P,w,w,R,R,P)}}else return;let m=new(Od(f)?ma:pa)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function c(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function wy(n,e,t,i){let s=i.isWebGL2,r;function o(d){r=d}let a,l;function h(d){a=d.type,l=d.bytesPerElement}function c(d,g){n.drawElements(r,g,a,d*l),t.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),t.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];t.update(p,r,1)}}this.setMode=o,this.setIndex=h,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function Ry(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Cy(n,e){return n[0]-e[0]}function Py(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ly(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new at,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,c,u){let f=h.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(c);if(_===void 0||_.count!==g){let L=function(){T.dispose(),r.delete(c),c.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let M=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],R=c.morphAttributes.color||[],D=0;M===!0&&(D=1),y===!0&&(D=2),v===!0&&(D=3);let x=c.attributes.position.count*D,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let B=new Float32Array(x*S*4*g),T=new ua(B,x,S,g);T.type=di,T.needsUpdate=!0;let I=D*4;for(let U=0;U<g;U++){let O=P[U],X=w[U],q=R[U],Y=x*S*4*U;for(let Z=0;Z<O.count;Z++){let te=Z*I;M===!0&&(o.fromBufferAttribute(O,Z),B[Y+te+0]=o.x,B[Y+te+1]=o.y,B[Y+te+2]=o.z,B[Y+te+3]=0),y===!0&&(o.fromBufferAttribute(X,Z),B[Y+te+4]=o.x,B[Y+te+5]=o.y,B[Y+te+6]=o.z,B[Y+te+7]=0),v===!0&&(o.fromBufferAttribute(q,Z),B[Y+te+8]=o.x,B[Y+te+9]=o.y,B[Y+te+10]=o.z,B[Y+te+11]=q.itemSize===4?o.w:1)}}_={count:g,texture:T,size:new oe(x,S)},r.set(c,_),c.addEventListener("dispose",L)}let m=0;for(let M=0;M<f.length;M++)m+=f[M];let p=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=i[c.id];if(g===void 0||g.length!==d){g=[];for(let y=0;y<d;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<d;y++){let v=g[y];v[0]=y,v[1]=f[y]}g.sort(Py);for(let y=0;y<8;y++)y<d&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Cy);let _=c.morphAttributes.position,m=c.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let v=a[y],P=v[0],w=v[1];P!==Number.MAX_SAFE_INTEGER&&w?(_&&c.getAttribute("morphTarget"+y)!==_[P]&&c.setAttribute("morphTarget"+y,_[P]),m&&c.getAttribute("morphNormal"+y)!==m[P]&&c.setAttribute("morphNormal"+y,m[P]),s[y]=w,p+=w):(_&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),m&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),s[y]=0)}let M=c.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Iy(n,e,t,i){let s=new WeakMap;function r(l){let h=i.render.frame,c=l.geometry,u=e.get(l,c);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}function rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Hf[s];if(r===void 0&&(r=new Float32Array(s),Hf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function za(n,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function Uy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function Oy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function By(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;Vf.set(i),n.uniformMatrix2fv(this.addr,!1,Vf),Nt(t,i)}}function Fy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;Gf.set(i),n.uniformMatrix3fv(this.addr,!1,Gf),Nt(t,i)}}function Hy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;kf.set(i),n.uniformMatrix4fv(this.addr,!1,kf),Nt(t,i)}}function zy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ky(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function Gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function Vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function Wy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function qy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function Yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function Ky(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?kd:zd;t.setTexture2D(e||r,s)}function Zy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vd,s)}function Jy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Wd,s)}function $y(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gd,s)}function jy(n){switch(n){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return Oy;case 35674:return By;case 35675:return Fy;case 35676:return Hy;case 5124:case 35670:return zy;case 35667:case 35671:return ky;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return $y}}function Qy(n,e){n.uniform1fv(this.addr,e)}function eM(n,e){let t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function tM(n,e){let t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function nM(n,e){let t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function iM(n,e){let t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sM(n,e){let t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rM(n,e){let t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oM(n,e){n.uniform1iv(this.addr,e)}function aM(n,e){n.uniform2iv(this.addr,e)}function lM(n,e){n.uniform3iv(this.addr,e)}function cM(n,e){n.uniform4iv(this.addr,e)}function hM(n,e){n.uniform1uiv(this.addr,e)}function uM(n,e){n.uniform2uiv(this.addr,e)}function fM(n,e){n.uniform3uiv(this.addr,e)}function dM(n,e){n.uniform4uiv(this.addr,e)}function pM(n,e,t){let i=this.cache,s=e.length,r=za(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zd,r[o])}function mM(n,e,t){let i=this.cache,s=e.length,r=za(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vd,r[o])}function gM(n,e,t){let i=this.cache,s=e.length,r=za(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wd,r[o])}function _M(n,e,t){let i=this.cache,s=e.length,r=za(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gd,r[o])}function yM(n){switch(n){case 5126:return Qy;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return hM;case 36294:return uM;case 36295:return fM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}function Wf(n,e){n.seq.push(e),n.map[e.id]=e}function MM(n,e,t){let i=n.name,s=i.length;for(Jl.lastIndex=0;;){let r=Jl.exec(i),o=Jl.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Wf(t,h===void 0?new _c(a,n,e):new yc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Mc(a),Wf(t,u)),t=u}}}function Xf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function EM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function SM(n){let e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n),i;switch(e===t?i="":e===oa&&t===ra?i="LinearDisplayP3ToLinearSRGB":e===ra&&t===oa&&(i="LinearSRGBToLinearDisplayP3"),n){case It:case Ha:return[i,"LinearTransferOETF"];case nt:case $c:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function qf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+EM(n.getShaderSource(e),o)}else return s}function bM(n,e){let t=SM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function TM(n,e){let t;switch(e){case Pm:t="Linear";break;case Lm:t="Reinhard";break;case Im:t="OptimizedCineon";break;case Dm:t="ACESFilmic";break;case Um:t="AgX";break;case Nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function AM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function wM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vs).join(`
`)}function RM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vs(n){return n!==""}function Yf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function xc(n){return n.replace(PM,IM)}function IM(n,e){let t=He[e];if(t===void 0){let i=LM.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xc(t)}function Zf(n){return n.replace(DM,NM)}function NM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function OM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Zs&&(e="ENVMAP_MODE_REFRACTION"),e}function FM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ed:e="ENVMAP_BLENDING_MULTIPLY";break;case Rm:e="ENVMAP_BLENDING_MIX";break;case Cm:e="ENVMAP_BLENDING_ADD";break}return e}function HM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function zM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=UM(t),h=OM(t),c=BM(t),u=FM(t),f=HM(t),d=t.isWebGL2?"":AM(t),g=wM(t),_=RM(r),m=s.createProgram(),p,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vs).join(`
`),p.length>0&&(p+=`
`),M=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vs).join(`
`),M.length>0&&(M+=`
`)):(p=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),M=[d,Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?He.tonemapping_pars_fragment:"",t.toneMapping!==Di?TM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,bM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=xc(o),o=Yf(o,t),o=Kf(o,t),a=xc(a),a=Yf(a,t),a=Kf(a,t),o=Zf(o),a=Zf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let v=y+p+o,P=y+M+a,w=Xf(s,s.VERTEX_SHADER,v),R=Xf(s,s.FRAGMENT_SHADER,P);s.attachShader(m,w),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(T){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),U=s.getShaderInfoLog(R).trim(),O=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,w,R);else{let q=qf(s,w,"vertex"),Y=qf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+I+`
`+q+`
`+Y)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||U==="")&&(X=!1);X&&(T.diagnostics={runnable:O,programLog:I,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:M}})}s.deleteShader(w),s.deleteShader(R),x=new Ys(s,m),S=CM(s,m)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,xM)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}function GM(n,e,t,i,s,r,o){let a=new da,l=new vc,h=[],c=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,S,B,T,I){let L=T.fog,U=I.geometry,O=x.isMeshStandardMaterial?T.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||O),q=X&&X.mapping===Ba?X.image.height:null,Y=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=Z!==void 0?Z.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let K,J,le,ve;if(Y){let en=Yn[Y];K=en.vertexShader,J=en.fragmentShader}else K=x.vertexShader,J=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),ve=l.getFragmentShaderID(x);let xe=n.getRenderTarget(),Ue=I.isInstancedMesh===!0,Be=I.isBatchedMesh===!0,we=!!x.map,$e=!!x.matcap,H=!!X,Qt=!!x.aoMap,Se=!!x.lightMap,De=!!x.bumpMap,ge=!!x.normalMap,Et=!!x.displacementMap,ze=!!x.emissiveMap,A=!!x.metalnessMap,E=!!x.roughnessMap,k=x.anisotropy>0,Q=x.clearcoat>0,j=x.iridescence>0,ee=x.sheen>0,ye=x.transmission>0,ae=k&&!!x.anisotropyMap,ue=Q&&!!x.clearcoatMap,Ae=Q&&!!x.clearcoatNormalMap,ke=Q&&!!x.clearcoatRoughnessMap,$=j&&!!x.iridescenceMap,st=j&&!!x.iridescenceThicknessMap,qe=ee&&!!x.sheenColorMap,Ie=ee&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,fe=!!x.specularColorMap,Fe=!!x.specularIntensityMap,tt=ye&&!!x.transmissionMap,bt=ye&&!!x.thicknessMap,Ve=!!x.gradientMap,ne=!!x.alphaMap,N=x.alphaTest>0,se=!!x.alphaHash,re=!!x.extensions,Re=!!U.attributes.uv1,be=!!U.attributes.uv2,ft=!!U.attributes.uv3,dt=Di;return x.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(dt=n.toneMapping),{isWebGL2:c,shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:K,fragmentShader:J,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Be,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:It,map:we,matcap:$e,envMap:H,envMapMode:H&&X.mapping,envMapCubeUVHeight:q,aoMap:Qt,lightMap:Se,bumpMap:De,normalMap:ge,displacementMap:f&&Et,emissiveMap:ze,normalMapObjectSpace:ge&&x.normalMapType===Km,normalMapTangentSpace:ge&&x.normalMapType===Dd,metalnessMap:A,roughnessMap:E,anisotropy:k,anisotropyMap:ae,clearcoat:Q,clearcoatMap:ue,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ke,iridescence:j,iridescenceMap:$,iridescenceThicknessMap:st,sheen:ee,sheenColorMap:qe,sheenRoughnessMap:Ie,specularMap:Ee,specularColorMap:fe,specularIntensityMap:Fe,transmission:ye,transmissionMap:tt,thicknessMap:bt,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Ws,alphaMap:ne,alphaTest:N,alphaHash:se,combine:x.combine,mapUv:we&&_(x.map.channel),aoMapUv:Qt&&_(x.aoMap.channel),lightMapUv:Se&&_(x.lightMap.channel),bumpMapUv:De&&_(x.bumpMap.channel),normalMapUv:ge&&_(x.normalMap.channel),displacementMapUv:Et&&_(x.displacementMap.channel),emissiveMapUv:ze&&_(x.emissiveMap.channel),metalnessMapUv:A&&_(x.metalnessMap.channel),roughnessMapUv:E&&_(x.roughnessMap.channel),anisotropyMapUv:ae&&_(x.anisotropyMap.channel),clearcoatMapUv:ue&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(x.sheenRoughnessMap.channel),specularMapUv:Ee&&_(x.specularMap.channel),specularColorMapUv:fe&&_(x.specularColorMap.channel),specularIntensityMapUv:Fe&&_(x.specularIntensityMap.channel),transmissionMapUv:tt&&_(x.transmissionMap.channel),thicknessMapUv:bt&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ge||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:be,vertexUv3s:ft,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(we||ne),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gt,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:re&&x.extensions.derivatives===!0,extensionFragDepth:re&&x.extensions.fragDepth===!0,extensionDrawBuffers:re&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)S.push(B),S.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(M(S,x),y(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function M(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function v(x){let S=g[x.type],B;if(S){let T=Yn[S];B=sr.clone(T.uniforms)}else B=x.uniforms;return B}function P(x,S){let B;for(let T=0,I=h.length;T<I;T++){let L=h[T];if(L.cacheKey===S){B=L,++B.usedTimes;break}}return B===void 0&&(B=new zM(n,S,x,r),h.push(B)),B}function w(x){if(--x.usedTimes===0){let S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:D}}function VM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function WM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $f(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function h(u,f){t.length>1&&t.sort(u||WM),i.length>1&&i.sort(f||$f),s.length>1&&s.sort(f||$f)}function c(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function XM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new jf,n.set(i,[o])):s>=r.length?(o=new jf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new _e};break;case"SpotLight":t={position:new C,direction:new C,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function YM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function ZM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JM(n,e){let t=new qM,i=YM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new C);let r=new C,o=new Pe,a=new Pe;function l(c,u){let f=0,d=0,g=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let _=0,m=0,p=0,M=0,y=0,v=0,P=0,w=0,R=0,D=0,x=0;c.sort(ZM);let S=u===!0?Math.PI:1;for(let T=0,I=c.length;T<I;T++){let L=c[T],U=L.color,O=L.intensity,X=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=U.r*O*S,d+=U.g*O*S,g+=U.b*O*S;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],O);x++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){let Z=L.shadow,te=i.get(L);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,s.directionalShadow[_]=te,s.directionalShadowMap[_]=q,s.directionalShadowMatrix[_]=L.shadow.matrix,v++}s.directional[_]=Y,_++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(U).multiplyScalar(O*S),Y.distance=X,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[p]=Y;let Z=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,Z.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[p]=Z.matrix,L.castShadow){let te=i.get(L);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,s.spotShadow[p]=te,s.spotShadowMap[p]=q,w++}p++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(U).multiplyScalar(O),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[M]=Y,M++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*S),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let Z=L.shadow,te=i.get(L);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,s.pointShadow[m]=te,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=L.shadow.matrix,P++}s.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(O*S),Y.groundColor.copy(L.groundColor).multiplyScalar(O*S),s.hemi[y]=Y,y++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let B=s.hash;(B.directionalLength!==_||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==M||B.hemiLength!==y||B.numDirectionalShadows!==v||B.numPointShadows!==P||B.numSpotShadows!==w||B.numSpotMaps!==R||B.numLightProbes!==x)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=w+R-D,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=x,B.directionalLength=_,B.pointLength=m,B.spotLength=p,B.rectAreaLength=M,B.hemiLength=y,B.numDirectionalShadows=v,B.numPointShadows=P,B.numSpotShadows=w,B.numSpotMaps=R,B.numLightProbes=x,s.version=KM++)}function h(c,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let M=0,y=c.length;M<y;M++){let v=c[M];if(v.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),f++}else if(v.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),P.halfWidth.set(v.width*.5,0,0),P.halfHeight.set(0,v.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let P=s.point[d];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(v.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:l,setupView:h,state:s}}function Qf(n,e){let t=new JM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function h(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function $M(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Qf(n,e),t.set(r,[l])):o>=a.length?(l=new Qf(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function ex(n,e,t){let i=new zr,s=new oe,r=new oe,o=new at,a=new Sc({depthPacking:Ym}),l=new bc,h={},c=t.maxTextureSize,u={[Jn]:un,[un]:Jn,[gt]:gt},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:jM,fragmentShader:QM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new W(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let p=this.type;this.render=function(w,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let x=n.getRenderTarget(),S=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),T=n.state;T.setBlending(Zn),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let I=p!==ui&&this.type===ui,L=p===ui&&this.type!==ui;for(let U=0,O=w.length;U<O;U++){let X=w[U],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Y=q.getFrameExtents();if(s.multiply(Y),r.copy(q.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/Y.x),s.x=r.x*Y.x,q.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/Y.y),s.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||I===!0||L===!0){let te=this.type!==ui?{minFilter:At,magFilter:At}:{};q.map!==null&&q.map.dispose(),q.map=new on(s.x,s.y,te),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let Z=q.getViewportCount();for(let te=0;te<Z;te++){let he=q.getViewport(te);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),T.viewport(o),q.updateMatrices(X,te),i=q.getFrustum(),v(R,D,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===ui&&M(q,D),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,S,B)};function M(w,R){let D=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new on(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,D,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,D,d,_,null)}function y(w,R,D,x){let S=null,B=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)S=B;else if(S=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let T=S.uuid,I=R.uuid,L=h[T];L===void 0&&(L={},h[T]=L);let U=L[I];U===void 0&&(U=S.clone(),L[I]=U,R.addEventListener("dispose",P)),S=U}if(S.visible=R.visible,S.wireframe=R.wireframe,x===ui?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let T=n.properties.get(S);T.light=D}return S}function v(w,R,D,x,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let I=e.update(w),L=w.material;if(Array.isArray(L)){let U=I.groups;for(let O=0,X=U.length;O<X;O++){let q=U[O],Y=L[q.materialIndex];if(Y&&Y.visible){let Z=y(w,Y,x,S);w.onBeforeShadow(n,w,R,D,I,Z,q),n.renderBufferDirect(D,null,I,Z,w,q),w.onAfterShadow(n,w,R,D,I,Z,q)}}}else if(L.visible){let U=y(w,L,x,S);w.onBeforeShadow(n,w,R,D,I,U,null),n.renderBufferDirect(D,null,I,U,w,null),w.onAfterShadow(n,w,R,D,I,U,null)}}let T=w.children;for(let I=0,L=T.length;I<L;I++)v(T[I],R,D,x,S)}function P(w){w.target.removeEventListener("dispose",P);for(let D in h){let x=h[D],S=w.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}function tx(n,e,t){let i=t.isWebGL2;function s(){let N=!1,se=new at,re=null,Re=new at(0,0,0,0);return{setMask:function(be){re!==be&&!N&&(n.colorMask(be,be,be,be),re=be)},setLocked:function(be){N=be},setClear:function(be,ft,dt,Bt,en){en===!0&&(be*=Bt,ft*=Bt,dt*=Bt),se.set(be,ft,dt,Bt),Re.equals(se)===!1&&(n.clearColor(be,ft,dt,Bt),Re.copy(se))},reset:function(){N=!1,re=null,Re.set(-1,0,0,0)}}}function r(){let N=!1,se=null,re=null,Re=null;return{setTest:function(be){be?Be(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(be){se!==be&&!N&&(n.depthMask(be),se=be)},setFunc:function(be){if(re!==be){switch(be){case vm:n.depthFunc(n.NEVER);break;case Em:n.depthFunc(n.ALWAYS);break;case Sm:n.depthFunc(n.LESS);break;case na:n.depthFunc(n.LEQUAL);break;case bm:n.depthFunc(n.EQUAL);break;case Tm:n.depthFunc(n.GEQUAL);break;case Am:n.depthFunc(n.GREATER);break;case wm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=be}},setLocked:function(be){N=be},setClear:function(be){Re!==be&&(n.clearDepth(be),Re=be)},reset:function(){N=!1,se=null,re=null,Re=null}}}function o(){let N=!1,se=null,re=null,Re=null,be=null,ft=null,dt=null,Bt=null,en=null;return{setTest:function(pt){N||(pt?Be(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(pt){se!==pt&&!N&&(n.stencilMask(pt),se=pt)},setFunc:function(pt,tn,qn){(re!==pt||Re!==tn||be!==qn)&&(n.stencilFunc(pt,tn,qn),re=pt,Re=tn,be=qn)},setOp:function(pt,tn,qn){(ft!==pt||dt!==tn||Bt!==qn)&&(n.stencilOp(pt,tn,qn),ft=pt,dt=tn,Bt=qn)},setLocked:function(pt){N=pt},setClear:function(pt){en!==pt&&(n.clearStencil(pt),en=pt)},reset:function(){N=!1,se=null,re=null,Re=null,be=null,ft=null,dt=null,Bt=null,en=null}}}let a=new s,l=new r,h=new o,c=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,M=null,y=null,v=null,P=null,w=null,R=null,D=null,x=new _e(0,0,0),S=0,B=!1,T=null,I=null,L=null,U=null,O=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=Y>=2);let te=null,he={},K=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),le=new at().fromArray(K),ve=new at().fromArray(J);function xe(N,se,re,Re){let be=new Uint8Array(4),ft=n.createTexture();n.bindTexture(N,ft),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<re;dt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(se+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return ft}let Ue={};Ue[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Be(n.DEPTH_TEST),l.setFunc(na),ze(!1),A(Du),Be(n.CULL_FACE),ge(Zn);function Be(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function we(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function $e(N,se){return d[N]!==se?(n.bindFramebuffer(N,se),d[N]=se,i&&(N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function H(N,se){let re=_,Re=!1;if(N)if(re=g.get(se),re===void 0&&(re=[],g.set(se,re)),N.isWebGLMultipleRenderTargets){let be=N.texture;if(re.length!==be.length||re[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,dt=be.length;ft<dt;ft++)re[ft]=n.COLOR_ATTACHMENT0+ft;re.length=be.length,Re=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,Re=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Qt(N){return m!==N?(n.useProgram(N),m=N,!0):!1}let Se={[is]:n.FUNC_ADD,[om]:n.FUNC_SUBTRACT,[am]:n.FUNC_REVERSE_SUBTRACT};if(i)Se[Ou]=n.MIN,Se[Bu]=n.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(Se[Ou]=N.MIN_EXT,Se[Bu]=N.MAX_EXT)}let De={[lm]:n.ZERO,[cm]:n.ONE,[hm]:n.SRC_COLOR,[oc]:n.SRC_ALPHA,[gm]:n.SRC_ALPHA_SATURATE,[pm]:n.DST_COLOR,[fm]:n.DST_ALPHA,[um]:n.ONE_MINUS_SRC_COLOR,[ac]:n.ONE_MINUS_SRC_ALPHA,[mm]:n.ONE_MINUS_DST_COLOR,[dm]:n.ONE_MINUS_DST_ALPHA,[_m]:n.CONSTANT_COLOR,[ym]:n.ONE_MINUS_CONSTANT_COLOR,[Mm]:n.CONSTANT_ALPHA,[xm]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(N,se,re,Re,be,ft,dt,Bt,en,pt){if(N===Zn){p===!0&&(we(n.BLEND),p=!1);return}if(p===!1&&(Be(n.BLEND),p=!0),N!==rm){if(N!==M||pt!==B){if((y!==is||w!==is)&&(n.blendEquation(n.FUNC_ADD),y=is,w=is),pt)switch(N){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kt:n.blendFunc(n.ONE,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,P=null,R=null,D=null,x.set(0,0,0),S=0,M=N,B=pt}return}be=be||se,ft=ft||re,dt=dt||Re,(se!==y||be!==w)&&(n.blendEquationSeparate(Se[se],Se[be]),y=se,w=be),(re!==v||Re!==P||ft!==R||dt!==D)&&(n.blendFuncSeparate(De[re],De[Re],De[ft],De[dt]),v=re,P=Re,R=ft,D=dt),(Bt.equals(x)===!1||en!==S)&&(n.blendColor(Bt.r,Bt.g,Bt.b,en),x.copy(Bt),S=en),M=N,B=!1}function Et(N,se){N.side===gt?we(n.CULL_FACE):Be(n.CULL_FACE);let re=N.side===un;se&&(re=!re),ze(re),N.blending===Ws&&N.transparent===!1?ge(Zn):ge(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);let Re=N.stencilWrite;h.setTest(Re),Re&&(h.setMask(N.stencilWriteMask),h.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),h.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),k(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Be(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(N){T!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),T=N)}function A(N){N!==nm?(Be(n.CULL_FACE),N!==I&&(N===Du?n.cullFace(n.BACK):N===im?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),I=N}function E(N){N!==L&&(q&&n.lineWidth(N),L=N)}function k(N,se,re){N?(Be(n.POLYGON_OFFSET_FILL),(U!==se||O!==re)&&(n.polygonOffset(se,re),U=se,O=re)):we(n.POLYGON_OFFSET_FILL)}function Q(N){N?Be(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function j(N){N===void 0&&(N=n.TEXTURE0+X-1),te!==N&&(n.activeTexture(N),te=N)}function ee(N,se,re){re===void 0&&(te===null?re=n.TEXTURE0+X-1:re=te);let Re=he[re];Re===void 0&&(Re={type:void 0,texture:void 0},he[re]=Re),(Re.type!==N||Re.texture!==se)&&(te!==re&&(n.activeTexture(re),te=re),n.bindTexture(N,se||Ue[N]),Re.type=N,Re.texture=se)}function ye(){let N=he[te];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(N){le.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),le.copy(N))}function tt(N){ve.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ve.copy(N))}function bt(N,se){let re=u.get(se);re===void 0&&(re=new WeakMap,u.set(se,re));let Re=re.get(N);Re===void 0&&(Re=n.getUniformBlockIndex(se,N.name),re.set(N,Re))}function Ve(N,se){let Re=u.get(se).get(N);c.get(se)!==Re&&(n.uniformBlockBinding(se,Re,N.__bindingPointIndex),c.set(se,Re))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},te=null,he={},d={},g=new WeakMap,_=[],m=null,p=!1,M=null,y=null,v=null,P=null,w=null,R=null,D=null,x=new _e(0,0,0),S=0,B=!1,T=null,I=null,L=null,U=null,O=null,le.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:Be,disable:we,bindFramebuffer:$e,drawBuffers:H,useProgram:Qt,setBlending:ge,setMaterial:Et,setFlipSided:ze,setCullFace:A,setLineWidth:E,setPolygonOffset:k,setScissorTest:Q,activeTexture:j,bindTexture:ee,unbindTexture:ye,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:Ee,texImage3D:fe,updateUBOMapping:bt,uniformBlockBinding:Ve,texStorage2D:qe,texStorage3D:Ie,texSubImage2D:Ae,texSubImage3D:ke,compressedTexSubImage2D:$,compressedTexSubImage3D:st,scissor:Fe,viewport:tt,reset:ne}}function nx(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return d?new OffscreenCanvas(A,E):Hr("canvas")}function _(A,E,k,Q){let j=1;if((A.width>Q||A.height>Q)&&(j=Q/Math.max(A.width,A.height)),j<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let ee=E?la:Math.floor,ye=ee(j*A.width),ae=ee(j*A.height);u===void 0&&(u=g(ye,ae));let ue=k?g(ye,ae):u;return ue.width=ye,ue.height=ae,ue.getContext("2d").drawImage(A,0,0,ye,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ye+"x"+ae+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return fc(A.width)&&fc(A.height)}function p(A){return a?!1:A.wrapS!==rn||A.wrapT!==rn||A.minFilter!==At&&A.minFilter!==Vt}function M(A,E){return A.generateMipmaps&&E&&A.minFilter!==At&&A.minFilter!==Vt}function y(A){n.generateMipmap(A)}function v(A,E,k,Q,j=!1){if(a===!1)return E;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=E;if(E===n.RED&&(k===n.FLOAT&&(ee=n.R32F),k===n.HALF_FLOAT&&(ee=n.R16F),k===n.UNSIGNED_BYTE&&(ee=n.R8)),E===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.R8UI),k===n.UNSIGNED_SHORT&&(ee=n.R16UI),k===n.UNSIGNED_INT&&(ee=n.R32UI),k===n.BYTE&&(ee=n.R8I),k===n.SHORT&&(ee=n.R16I),k===n.INT&&(ee=n.R32I)),E===n.RG&&(k===n.FLOAT&&(ee=n.RG32F),k===n.HALF_FLOAT&&(ee=n.RG16F),k===n.UNSIGNED_BYTE&&(ee=n.RG8)),E===n.RGBA){let ye=j?sa:Qe.getTransfer(Q);k===n.FLOAT&&(ee=n.RGBA32F),k===n.HALF_FLOAT&&(ee=n.RGBA16F),k===n.UNSIGNED_BYTE&&(ee=ye===Mt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function P(A,E,k){return M(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Vt?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){return A===At||A===ia||A===Ni?n.NEAREST:n.LINEAR}function R(A){let E=A.target;E.removeEventListener("dispose",R),x(E),E.isVideoTexture&&c.delete(E)}function D(A){let E=A.target;E.removeEventListener("dispose",D),B(E)}function x(A){let E=i.get(A);if(E.__webglInit===void 0)return;let k=A.source,Q=f.get(k);if(Q){let j=Q[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(A),Object.keys(Q).length===0&&f.delete(k)}i.remove(A)}function S(A){let E=i.get(A);n.deleteTexture(E.__webglTexture);let k=A.source,Q=f.get(k);delete Q[E.__cacheKey],o.memory.textures--}function B(A){let E=A.texture,k=i.get(A),Q=i.get(E);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(k.__webglFramebuffer[j]))for(let ee=0;ee<k.__webglFramebuffer[j].length;ee++)n.deleteFramebuffer(k.__webglFramebuffer[j][ee]);else n.deleteFramebuffer(k.__webglFramebuffer[j]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[j])}else{if(Array.isArray(k.__webglFramebuffer))for(let j=0;j<k.__webglFramebuffer.length;j++)n.deleteFramebuffer(k.__webglFramebuffer[j]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let j=0;j<k.__webglColorRenderbuffer.length;j++)k.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[j]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let j=0,ee=E.length;j<ee;j++){let ye=i.get(E[j]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(E[j])}i.remove(E),i.remove(A)}let T=0;function I(){T=0}function L(){let A=T;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),T+=1,A}function U(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function O(A,E){let k=i.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(k,A,E);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+E)}function X(A,E){let k=i.get(A);if(A.version>0&&k.__version!==A.version){le(k,A,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+E)}function q(A,E){let k=i.get(A);if(A.version>0&&k.__version!==A.version){le(k,A,E);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+E)}function Y(A,E){let k=i.get(A);if(A.version>0&&k.__version!==A.version){ve(k,A,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+E)}let Z={[Fn]:n.REPEAT,[rn]:n.CLAMP_TO_EDGE,[Fr]:n.MIRRORED_REPEAT},te={[At]:n.NEAREST,[ia]:n.NEAREST_MIPMAP_NEAREST,[Ni]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[Zc]:n.LINEAR_MIPMAP_NEAREST,[Hn]:n.LINEAR_MIPMAP_LINEAR},he={[Zm]:n.NEVER,[t0]:n.ALWAYS,[Jm]:n.LESS,[Nd]:n.LEQUAL,[$m]:n.EQUAL,[e0]:n.GEQUAL,[jm]:n.GREATER,[Qm]:n.NOTEQUAL};function K(A,E,k){if(k?(n.texParameteri(A,n.TEXTURE_WRAP_S,Z[E.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Z[E.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Z[E.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,te[E.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,te[E.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==rn||E.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,w(E.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==At&&E.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,he[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===At||E.minFilter!==Ni&&E.minFilter!==Hn||E.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===zn&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function J(A,E){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",R));let Q=E.source,j=f.get(Q);j===void 0&&(j={},f.set(Q,j));let ee=U(E);if(ee!==A.__cacheKey){j[ee]===void 0&&(j[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[ee].usedTimes++;let ye=j[A.__cacheKey];ye!==void 0&&(j[A.__cacheKey].usedTimes--,ye.usedTimes===0&&S(E)),A.__cacheKey=ee,A.__webglTexture=j[ee].texture}return k}function le(A,E,k){let Q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=n.TEXTURE_3D);let j=J(A,E),ee=E.source;t.bindTexture(Q,A.__webglTexture,n.TEXTURE0+k);let ye=i.get(ee);if(ee.version!==ye.__version||j===!0){t.activeTexture(n.TEXTURE0+k);let ae=Qe.getPrimaries(Qe.workingColorSpace),ue=E.colorSpace===Tn?null:Qe.getPrimaries(E.colorSpace),Ae=E.colorSpace===Tn||ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ke=p(E)&&m(E.image)===!1,$=_(E.image,ke,!1,s.maxTextureSize);$=ze(E,$);let st=m($)||a,qe=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),Ee=v(E.internalFormat,qe,Ie,E.colorSpace,E.isVideoTexture);K(Q,E,st);let fe,Fe=E.mipmaps,tt=a&&E.isVideoTexture!==!0&&Ee!==Pd,bt=ye.__version===void 0||j===!0,Ve=P(E,$,st);if(E.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?E.type===di?Ee=n.DEPTH_COMPONENT32F:E.type===Li?Ee=n.DEPTH_COMPONENT24:E.type===os?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:E.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===as&&Ee===n.DEPTH_COMPONENT&&E.type!==Jc&&E.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Li,Ie=r.convert(E.type)),E.format===Js&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,E.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=os,Ie=r.convert(E.type))),bt&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Ee,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Ee,$.width,$.height,0,qe,Ie,null));else if(E.isDataTexture)if(Fe.length>0&&st){tt&&bt&&t.texStorage2D(n.TEXTURE_2D,Ve,Ee,Fe[0].width,Fe[0].height);for(let ne=0,N=Fe.length;ne<N;ne++)fe=Fe[ne],tt?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,qe,Ie,fe.data):t.texImage2D(n.TEXTURE_2D,ne,Ee,fe.width,fe.height,0,qe,Ie,fe.data);E.generateMipmaps=!1}else tt?(bt&&t.texStorage2D(n.TEXTURE_2D,Ve,Ee,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,qe,Ie,$.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,$.width,$.height,0,qe,Ie,$.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Ee,Fe[0].width,Fe[0].height,$.depth);for(let ne=0,N=Fe.length;ne<N;ne++)fe=Fe[ne],E.format!==bn?qe!==null?tt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,$.depth,qe,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ee,fe.width,fe.height,$.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,$.depth,qe,Ie,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ee,fe.width,fe.height,$.depth,0,qe,Ie,fe.data)}else{tt&&bt&&t.texStorage2D(n.TEXTURE_2D,Ve,Ee,Fe[0].width,Fe[0].height);for(let ne=0,N=Fe.length;ne<N;ne++)fe=Fe[ne],E.format!==bn?qe!==null?tt?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,qe,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ee,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,qe,Ie,fe.data):t.texImage2D(n.TEXTURE_2D,ne,Ee,fe.width,fe.height,0,qe,Ie,fe.data)}else if(E.isDataArrayTexture)tt?(bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Ee,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,qe,Ie,$.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,$.width,$.height,$.depth,0,qe,Ie,$.data);else if(E.isData3DTexture)tt?(bt&&t.texStorage3D(n.TEXTURE_3D,Ve,Ee,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,qe,Ie,$.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,$.width,$.height,$.depth,0,qe,Ie,$.data);else if(E.isFramebufferTexture){if(bt)if(tt)t.texStorage2D(n.TEXTURE_2D,Ve,Ee,$.width,$.height);else{let ne=$.width,N=$.height;for(let se=0;se<Ve;se++)t.texImage2D(n.TEXTURE_2D,se,Ee,ne,N,0,qe,Ie,null),ne>>=1,N>>=1}}else if(Fe.length>0&&st){tt&&bt&&t.texStorage2D(n.TEXTURE_2D,Ve,Ee,Fe[0].width,Fe[0].height);for(let ne=0,N=Fe.length;ne<N;ne++)fe=Fe[ne],tt?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,qe,Ie,fe):t.texImage2D(n.TEXTURE_2D,ne,Ee,qe,Ie,fe);E.generateMipmaps=!1}else tt?(bt&&t.texStorage2D(n.TEXTURE_2D,Ve,Ee,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,qe,Ie,$)):t.texImage2D(n.TEXTURE_2D,0,Ee,qe,Ie,$);M(E,st)&&y(Q),ye.__version=ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ve(A,E,k){if(E.image.length!==6)return;let Q=J(A,E),j=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);let ee=i.get(j);if(j.version!==ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);let ye=Qe.getPrimaries(Qe.workingColorSpace),ae=E.colorSpace===Tn?null:Qe.getPrimaries(E.colorSpace),ue=E.colorSpace===Tn||ye===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,$=[];for(let ne=0;ne<6;ne++)!Ae&&!ke?$[ne]=_(E.image[ne],!1,!0,s.maxCubemapSize):$[ne]=ke?E.image[ne].image:E.image[ne],$[ne]=ze(E,$[ne]);let st=$[0],qe=m(st)||a,Ie=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type),fe=v(E.internalFormat,Ie,Ee,E.colorSpace),Fe=a&&E.isVideoTexture!==!0,tt=ee.__version===void 0||Q===!0,bt=P(E,st,qe);K(n.TEXTURE_CUBE_MAP,E,qe);let Ve;if(Ae){Fe&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,fe,st.width,st.height);for(let ne=0;ne<6;ne++){Ve=$[ne].mipmaps;for(let N=0;N<Ve.length;N++){let se=Ve[N];E.format!==bn?Ie!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,N,0,0,se.width,se.height,Ie,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,N,fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,N,0,0,se.width,se.height,Ie,Ee,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,N,fe,se.width,se.height,0,Ie,Ee,se.data)}}}else{Ve=E.mipmaps,Fe&&tt&&(Ve.length>0&&bt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,fe,$[0].width,$[0].height));for(let ne=0;ne<6;ne++)if(ke){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$[ne].width,$[ne].height,Ie,Ee,$[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,$[ne].width,$[ne].height,0,Ie,Ee,$[ne].data);for(let N=0;N<Ve.length;N++){let re=Ve[N].image[ne].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,N+1,0,0,re.width,re.height,Ie,Ee,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,N+1,fe,re.width,re.height,0,Ie,Ee,re.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Ee,$[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,Ie,Ee,$[ne]);for(let N=0;N<Ve.length;N++){let se=Ve[N];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,N+1,0,0,Ie,Ee,se.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,N+1,fe,Ie,Ee,se.image[ne])}}}M(E,qe)&&y(n.TEXTURE_CUBE_MAP),ee.__version=j.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function xe(A,E,k,Q,j,ee){let ye=r.convert(k.format,k.colorSpace),ae=r.convert(k.type),ue=v(k.internalFormat,ye,ae,k.colorSpace);if(!i.get(E).__hasExternalTextures){let ke=Math.max(1,E.width>>ee),$=Math.max(1,E.height>>ee);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,ee,ue,ke,$,E.depth,0,ye,ae,null):t.texImage2D(j,ee,ue,ke,$,0,ye,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ge(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,j,i.get(k).__webglTexture,0,De(E)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,j,i.get(k).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(A,E,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let Q=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||ge(E)){let j=E.depthTexture;j&&j.isDepthTexture&&(j.type===di?Q=n.DEPTH_COMPONENT32F:j.type===Li&&(Q=n.DEPTH_COMPONENT24));let ee=De(E);ge(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,Q,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Q,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){let Q=De(E);k&&ge(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let Q=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let j=0;j<Q.length;j++){let ee=Q[j],ye=r.convert(ee.format,ee.colorSpace),ae=r.convert(ee.type),ue=v(ee.internalFormat,ye,ae,ee.colorSpace),Ae=De(E);k&&ge(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ue,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ue,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ue,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);let Q=i.get(E.depthTexture).__webglTexture,j=De(E);if(E.depthTexture.format===as)ge(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Js)ge(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function we(A){let E=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Be(E.__webglFramebuffer,A)}else if(k){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=n.createRenderbuffer(),Ue(E.__webglDepthbuffer[Q],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ue(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(A,E,k){let Q=i.get(A);E!==void 0&&xe(Q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&we(A)}function H(A){let E=A.texture,k=i.get(A),Q=i.get(E);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=E.version,o.memory.textures++);let j=A.isWebGLCubeRenderTarget===!0,ee=A.isWebGLMultipleRenderTargets===!0,ye=m(A)||a;if(j){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let ue=0;ue<E.mipmaps.length;ue++)k.__webglFramebuffer[ae][ue]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ee)if(s.drawBuffers){let ae=A.texture;for(let ue=0,Ae=ae.length;ue<Ae;ue++){let ke=i.get(ae[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ge(A)===!1){let ae=ee?E:[E];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){let Ae=ae[ue];k.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);let ke=r.convert(Ae.format,Ae.colorSpace),$=r.convert(Ae.type),st=v(Ae.internalFormat,ke,$,Ae.colorSpace,A.isXRRenderTarget===!0),qe=De(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,st,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),K(n.TEXTURE_CUBE_MAP,E,ye);for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)xe(k.__webglFramebuffer[ae][ue],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else xe(k.__webglFramebuffer[ae],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);M(E,ye)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let ae=A.texture;for(let ue=0,Ae=ae.length;ue<Ae;ue++){let ke=ae[ue],$=i.get(ke);t.bindTexture(n.TEXTURE_2D,$.__webglTexture),K(n.TEXTURE_2D,ke,ye),xe(k.__webglFramebuffer,A,ke,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),M(ke,ye)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ae=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Q.__webglTexture),K(ae,E,ye),a&&E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)xe(k.__webglFramebuffer[ue],A,E,n.COLOR_ATTACHMENT0,ae,ue);else xe(k.__webglFramebuffer,A,E,n.COLOR_ATTACHMENT0,ae,0);M(E,ye)&&y(ae),t.unbindTexture()}A.depthBuffer&&we(A)}function Qt(A){let E=m(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,j=k.length;Q<j;Q++){let ee=k[Q];if(M(ee,E)){let ye=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(ee).__webglTexture;t.bindTexture(ye,ae),y(ye),t.unbindTexture()}}}function Se(A){if(a&&A.samples>0&&ge(A)===!1){let E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,Q=A.height,j=n.COLOR_BUFFER_BIT,ee=[],ye=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(A),ue=A.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ae=0;Ae<E.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){ee.push(n.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&ee.push(ye);let ke=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ke===!1&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]),ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),ue){let $=i.get(E[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,k,Q,0,0,k,Q,j,n.NEAREST),h&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ae=0;Ae<E.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]);let ke=i.get(E[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function De(A){return Math.min(s.maxSamples,A.samples)}function ge(A){let E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(A){let E=o.render.frame;c.get(A)!==E&&(c.set(A,E),A.update())}function ze(A,E){let k=A.colorSpace,Q=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===uc||k!==It&&k!==Tn&&(Qe.getTransfer(k)===Mt?a===!1?e.has("EXT_sRGB")===!0&&Q===bn?(A.format=uc,A.minFilter=Vt,A.generateMipmaps=!1):E=ca.sRGBToLinear(E):(Q!==bn||j!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=$e,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ge}function ix(n,e,t){let i=t.isWebGL2;function s(r,o=Tn){let a,l=Qe.getTransfer(o);if(r===Ui)return n.UNSIGNED_BYTE;if(r===Td)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ad)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Bm)return n.BYTE;if(r===Fm)return n.SHORT;if(r===Jc)return n.UNSIGNED_SHORT;if(r===bd)return n.INT;if(r===Li)return n.UNSIGNED_INT;if(r===di)return n.FLOAT;if(r===zn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Hm)return n.ALPHA;if(r===bn)return n.RGBA;if(r===zm)return n.LUMINANCE;if(r===km)return n.LUMINANCE_ALPHA;if(r===as)return n.DEPTH_COMPONENT;if(r===Js)return n.DEPTH_STENCIL;if(r===uc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Gm)return n.RED;if(r===wd)return n.RED_INTEGER;if(r===Vm)return n.RG;if(r===Rd)return n.RG_INTEGER;if(r===Cd)return n.RGBA_INTEGER;if(r===Sl||r===bl||r===Tl||r===Al)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hu||r===zu||r===ku||r===Gu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Hu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ku)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vu||r===Wu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vu)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Wu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xu||r===qu||r===Yu||r===Ku||r===Zu||r===Ju||r===$u||r===ju||r===Qu||r===ef||r===tf||r===nf||r===sf||r===rf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ku)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ju)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$u)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ju)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ef)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wl||r===of||r===af)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===wl)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===of)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===af)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wm||r===lf||r===cf||r===hf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===wl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===lf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===os?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function rx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ox(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){let v=y.program;i.uniformBlockBinding(M,v)}function h(M,y){let v=s[M.id];v===void 0&&(g(M),v=c(M),s[M.id]=v,M.addEventListener("dispose",m));let P=y.program;i.updateUBOMapping(M,P);let w=e.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function c(M){let y=u();M.__bindingPointIndex=y;let v=n.createBuffer(),P=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=s[M.id],v=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,R=v.length;w<R;w++){let D=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,S=D.length;x<S;x++){let B=D[x];if(d(B,w,x,P)===!0){let T=B.__offset,I=Array.isArray(B.value)?B.value:[B.value],L=0;for(let U=0;U<I.length;U++){let O=I[U],X=_(O);typeof O=="number"||typeof O=="boolean"?(B.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,T+L,B.__data)):O.isMatrix3?(B.__data[0]=O.elements[0],B.__data[1]=O.elements[1],B.__data[2]=O.elements[2],B.__data[3]=0,B.__data[4]=O.elements[3],B.__data[5]=O.elements[4],B.__data[6]=O.elements[5],B.__data[7]=0,B.__data[8]=O.elements[6],B.__data[9]=O.elements[7],B.__data[10]=O.elements[8],B.__data[11]=0):(O.toArray(B.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,y,v,P){let w=M.value,R=y+"_"+v;if(P[R]===void 0)return typeof w=="number"||typeof w=="boolean"?P[R]=w:P[R]=w.clone(),!0;{let D=P[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return P[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(M){let y=M.uniforms,v=0,P=16;for(let R=0,D=y.length;R<D;R++){let x=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,B=x.length;S<B;S++){let T=x[S],I=Array.isArray(T.value)?T.value:[T.value];for(let L=0,U=I.length;L<U;L++){let O=I[L],X=_(O),q=v%P;q!==0&&P-q<X.boundary&&(v+=P-q),T.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=v,v+=X.storage}}}let w=v%P;return w>0&&(v+=P-w),M.__size=v,M.__cache={},this}function _(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}function pd(n,e,t,i,s,r,o){let a=Cc.distanceSqToPoint(n);if(a<t){let l=new C;Cc.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function eh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let f=(o-r)/h-(a-r)/(h+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+u)+(l-a)/u;f*=c,d*=c,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function md(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function hx(n,e){let t=1-n;return t*t*e}function ux(n,e){return 2*(1-n)*n*e}function fx(n,e){return n*n*e}function Or(n,e,t,i){return hx(n,e)+ux(n,t)+fx(n,i)}function dx(n,e){let t=1-n;return t*t*t*e}function px(n,e){let t=1-n;return 3*t*t*n*e}function mx(n,e){return 3*(1-n)*n*n*e}function gx(n,e){return n*n*n*e}function Br(n,e,t,i,s){return dx(n,e)+px(n,t)+mx(n,i)+gx(n,s)}function ta(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function yx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Mx(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function gd(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Xd(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}function xx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mi;case"vector":case"vector2":case"vector3":case"vector4":return gi;case"color":return Pa;case"quaternion":return Qn;case"bool":case"boolean":return zi;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function vx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=xx(n.type);if(n.times===void 0){let t=[],i=[];Xd(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}function xd(){return(typeof performance>"u"?Date:performance).now()}var nm,Du,im,vd,sm,ui,Jn,un,gt,Zn,Ws,kt,Nu,Uu,rm,is,om,am,Ou,Bu,lm,cm,hm,um,oc,ac,fm,dm,pm,mm,gm,_m,ym,Mm,xm,vm,Em,Sm,na,bm,Tm,Am,wm,Ed,Rm,Cm,Di,Pm,Lm,Im,Dm,Nm,Um,Fu,Om,Sd,Ks,Zs,lc,cc,Ba,Fn,rn,Fr,At,ia,Ni,Vt,Zc,Hn,Ui,Bm,Fm,Jc,bd,Li,di,zn,Td,Ad,os,Hm,bn,zm,km,as,Js,Gm,wd,Vm,Rd,Cd,Sl,bl,Tl,Al,Hu,zu,ku,Gu,Pd,Vu,Wu,Xu,qu,Yu,Ku,Zu,Ju,$u,ju,Qu,ef,tf,nf,sf,rf,wl,of,af,Wm,lf,cf,hf,$s,cs,Rl,uf,ff,df,Xm,Ld,Fa,$r,Id,ls,qm,Ym,Dd,Km,Tn,nt,It,$c,Ha,sa,Mt,ra,oa,Ts,pf,Zm,Jm,$m,Nd,jm,Qm,e0,t0,hc,mf,uc,pi,aa,Oi,Jt,gf,Xs,js,Ud,oe,Xe,Cl,_f,yf,Mf,bo,_0,Qe,As,ca,y0,ha,M0,Wt,at,dc,on,ua,pc,_n,C,Il,xf,vt,ri,Nn,To,ws,Rs,Cs,Ai,wi,ji,Ar,Ao,wo,Qi,x0,wr,Nl,yn,oi,Ul,Ro,Ri,Ol,Co,Bl,Qs,Pe,Ps,Un,v0,E0,Ci,Po,mn,vf,Ef,fa,da,S0,Sf,Ls,ai,Lo,Rr,b0,T0,bf,Tf,Af,A0,w0,wt,On,li,Fl,ci,Is,Ds,wf,Hl,zl,kl,Io,rs,Bd,Pi,Do,_e,$t,R0,Mn,me,Pt,No,_t,pa,ma,je,C0,Sn,Vl,Ns,gn,Cr,Ht,ct,Rf,es,Uo,Cf,Us,Os,Bs,Wl,Oo,Bo,Fo,Ho,Pf,Lf,If,zo,ko,W,de,sr,I0,D0,Xt,ga,Lt,Fs,Hs,mc,_a,gc,Xl,N0,U0,fi,ts,Vo,zr,Ye,B0,F0,H0,z0,k0,G0,V0,W0,X0,q0,Y0,K0,Z0,J0,$0,j0,Q0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,fg,dg,pg,mg,gg,_g,yg,Mg,xg,vg,Eg,Sg,bg,Tg,Ag,wg,Rg,Cg,Pg,Lg,Ig,Dg,Ng,Ug,Og,Bg,Fg,Hg,zg,kg,Gg,Vg,Wg,Xg,qg,Yg,Kg,Zg,Jg,$g,jg,Qg,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,y_,M_,x_,v_,E_,S_,b_,T_,A_,w_,R_,C_,P_,L_,I_,D_,N_,U_,O_,B_,F_,H_,z_,k_,G_,V_,W_,X_,q_,Y_,K_,Z_,J_,$_,j_,Q_,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,He,ie,Yn,Wo,Bi,Gs,Df,ss,ql,Nf,Yl,Kl,Zl,ns,zs,Uf,ya,Ma,zd,kd,Gd,Vd,Wd,Hf,zf,kf,Gf,Vf,_c,yc,Mc,Jl,Ys,xM,vM,PM,LM,DM,kM,vc,Ec,KM,Sc,bc,jM,QM,Tc,lt,sx,Ur,Ac,kr,wc,xa,va,Gr,nn,Vr,ed,td,nd,ax,id,qo,$l,sd,jl,Ea,Wr,Rc,rd,lx,Sa,hs,ks,od,Yo,ad,cx,Pr,Lr,ba,$n,ld,cd,hd,Ql,Ko,Fi,ud,fd,an,Ta,us,dd,Cc,Zo,Jo,tr,An,kn,Aa,Pc,$o,ec,tc,nc,Xr,Lc,Ic,Dc,Nc,Uc,wa,Oc,_x,qt,Ra,Bc,jo,Qo,ic,ea,Gn,qr,jn,Yr,Ca,nr,wn,Hi,Fc,Hc,zc,Rn,zi,Pa,mi,kc,Qn,ki,gi,La,Ii,Gc,Ex,_i,hi,Vc,Kr,Wc,ir,Zr,sc,_d,yd,Jr,Xc,Ia,Md,Ir,rc,qc,Da,Yc,Na,Gi,Ua,Oa,th,Sx,nh,bx,Tx,Ax,wx,Rx,Cx,Px,Kc,mt,Fv,ei=Dn(()=>{nm=0,Du=1,im=2,vd=1,sm=2,ui=3,Jn=0,un=1,gt=2,Zn=0,Ws=1,kt=2,Nu=3,Uu=4,rm=5,is=100,om=101,am=102,Ou=103,Bu=104,lm=200,cm=201,hm=202,um=203,oc=204,ac=205,fm=206,dm=207,pm=208,mm=209,gm=210,_m=211,ym=212,Mm=213,xm=214,vm=0,Em=1,Sm=2,na=3,bm=4,Tm=5,Am=6,wm=7,Ed=0,Rm=1,Cm=2,Di=0,Pm=1,Lm=2,Im=3,Dm=4,Nm=5,Um=6,Fu="attached",Om="detached",Sd=300,Ks=301,Zs=302,lc=303,cc=304,Ba=306,Fn=1e3,rn=1001,Fr=1002,At=1003,ia=1004,Ni=1005,Vt=1006,Zc=1007,Hn=1008,Ui=1009,Bm=1010,Fm=1011,Jc=1012,bd=1013,Li=1014,di=1015,zn=1016,Td=1017,Ad=1018,os=1020,Hm=1021,bn=1023,zm=1024,km=1025,as=1026,Js=1027,Gm=1028,wd=1029,Vm=1030,Rd=1031,Cd=1033,Sl=33776,bl=33777,Tl=33778,Al=33779,Hu=35840,zu=35841,ku=35842,Gu=35843,Pd=36196,Vu=37492,Wu=37496,Xu=37808,qu=37809,Yu=37810,Ku=37811,Zu=37812,Ju=37813,$u=37814,ju=37815,Qu=37816,ef=37817,tf=37818,nf=37819,sf=37820,rf=37821,wl=36492,of=36494,af=36495,Wm=36283,lf=36284,cf=36285,hf=36286,$s=2300,cs=2301,Rl=2302,uf=2400,ff=2401,df=2402,Xm=2500,Ld=0,Fa=1,$r=2,Id=3e3,ls=3001,qm=3200,Ym=3201,Dd=0,Km=1,Tn="",nt="srgb",It="srgb-linear",$c="display-p3",Ha="display-p3-linear",sa="linear",Mt="srgb",ra="rec709",oa="p3",Ts=7680,pf=519,Zm=512,Jm=513,$m=514,Nd=515,jm=516,Qm=517,e0=518,t0=519,hc=35044,mf="300 es",uc=1035,pi=2e3,aa=2001,Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=1234567,Xs=Math.PI/180,js=180/Math.PI;Ud={DEG2RAD:Xs,RAD2DEG:js,generateUUID:Bn,clamp:zt,euclideanModulo:jc,mapLinear:n0,inverseLerp:i0,lerp:Dr,damp:s0,pingpong:r0,smoothstep:o0,smootherstep:a0,randInt:l0,randFloat:c0,randFloatSpread:h0,seededRandom:u0,degToRad:f0,radToDeg:d0,isPowerOfTwo:fc,ceilPowerOfTwo:p0,floorPowerOfTwo:la,setQuaternionFromProperEuler:m0,normalize:rt,denormalize:Kn},oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class n{constructor(e,t,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,h)}set(e,t,i,s,r,o,a,l,h){let c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],M=s[1],y=s[4],v=s[7],P=s[2],w=s[5],R=s[8];return r[0]=o*_+a*M+l*P,r[3]=o*m+a*y+l*w,r[6]=o*p+a*v+l*R,r[1]=h*_+c*M+u*P,r[4]=h*m+c*y+u*w,r[7]=h*p+c*v+u*R,r[2]=f*_+d*M+g*P,r[5]=f*m+d*y+g*w,r[8]=f*p+d*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8];return t*o*c-t*a*h-i*r*c+i*a*l+s*r*h-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],u=c*o-a*h,f=a*l-c*r,d=h*r-o*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*h-c*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(c*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-h*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+e,-s*h,s*l,-s*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new Xe;_f={};yf=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mf=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[It]:{transfer:sa,primaries:ra,toReference:n=>n,fromReference:n=>n},[nt]:{transfer:Mt,primaries:ra,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ha]:{transfer:sa,primaries:oa,toReference:n=>n.applyMatrix3(Mf),fromReference:n=>n.applyMatrix3(yf)},[$c]:{transfer:Mt,primaries:oa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Mf),fromReference:n=>n.applyMatrix3(yf).convertLinearToSRGB()}},_0=new Set([It,Ha]),Qe={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=bo[e].toReference,s=bo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return bo[n].primaries},getTransfer:function(n){return n===Tn?sa:bo[n].transfer}};ca=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Hr("canvas")),As.width=e.width,As.height=e.height;let i=As.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qs(t[i]/255)*255):t[i]=qs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y0=0,ha=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ll(s[o].image)):r.push(Ll(s[o]))}else r=Ll(s);i.url=r}return t||(e.images[this.uuid]=i),i}};M0=0,Wt=class n extends Oi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=rn,s=rn,r=Vt,o=Hn,a=bn,l=Ui,h=n.DEFAULT_ANISOTROPY,c=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Bn(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ls?nt:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?ls:Id}set encoding(e){Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ls?nt:Tn}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Sd;Wt.DEFAULT_ANISOTROPY=1;at=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,h=l[0],c=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(h+1)/2,v=(d+1)/2,P=(p+1)/2,w=(c+f)/4,R=(u+_)/4,D=(g+m)/4;return y>v&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=R/i):v>P?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=D/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=R/r,s=D/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-c)/M,this.w=Math.acos((h+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dc=class extends Oi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ls?nt:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Wt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends dc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ua=class extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pc=class extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_n=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||h!==d||c!==g){let m=1-a,p=l*f+h*d+c*g+u*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),w=Math.atan2(P,p*M);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}let v=a*M;if(l=l*m+f*v,h=h*m+d*v,c=c*m+g*v,u=u*m+_*v,m===1-a){let P=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=P,h*=P,c*=P,u*=P}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+c*u+l*d-h*f,e[t+1]=l*g+c*f+h*u-a*d,e[t+2]=h*g+c*d+a*f-l*u,e[t+3]=c*g-a*u-l*f-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*c*u+h*d*g,this._y=h*d*u-f*c*g,this._z=h*c*g+f*d*u,this._w=h*c*u-f*d*g;break;case"YXZ":this._x=f*c*u+h*d*g,this._y=h*d*u-f*c*g,this._z=h*c*g-f*d*u,this._w=h*c*u+f*d*g;break;case"ZXY":this._x=f*c*u-h*d*g,this._y=h*d*u+f*c*g,this._z=h*c*g+f*d*u,this._w=h*c*u-f*d*g;break;case"ZYX":this._x=f*c*u-h*d*g,this._y=h*d*u+f*c*g,this._z=h*c*g-f*d*u,this._w=h*c*u+f*d*g;break;case"YZX":this._x=f*c*u+h*d*g,this._y=h*d*u+f*c*g,this._z=h*c*g-f*d*u,this._w=h*c*u-f*d*g;break;case"XZY":this._x=f*c*u-h*d*g,this._y=h*d*u-f*c*g,this._z=h*c*g+f*d*u,this._w=h*c*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],c=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(r-h)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(c-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+h)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-h)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+c)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+h)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-s*a,this._w=o*c-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-t)*c)/h,f=Math.sin(t*c)/h;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*s-a*i),c=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*h+o*u-a*c,this.y=i+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Il.copy(this).projectOnVector(e),this.sub(Il)}reflect(e){return this.sub(Il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Il=new C,xf=new _n,vt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Ao.subVectors(this.max,Ar),ws.subVectors(e.a,Ar),Rs.subVectors(e.b,Ar),Cs.subVectors(e.c,Ar),Ai.subVectors(Rs,ws),wi.subVectors(Cs,Rs),ji.subVectors(ws,Cs);let t=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-ji.z,ji.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,ji.z,0,-ji.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-ji.y,ji.x,0];return!Dl(t,ws,Rs,Cs,Ao)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,ws,Rs,Cs,Ao))?!1:(wo.crossVectors(Ai,wi),t=[wo.x,wo.y,wo.z],Dl(t,ws,Rs,Cs,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ri=[new C,new C,new C,new C,new C,new C,new C,new C],Nn=new C,To=new vt,ws=new C,Rs=new C,Cs=new C,Ai=new C,wi=new C,ji=new C,Ar=new C,Ao=new C,wo=new C,Qi=new C;x0=new vt,wr=new C,Nl=new C,yn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):x0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Nl)),this.expandByPoint(wr.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},oi=new C,Ul=new C,Ro=new C,Ri=new C,Ol=new C,Co=new C,Bl=new C,Qs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ul.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Ul);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=Ri.dot(this.direction),l=-Ri.dot(Ro),h=Ri.lengthSq(),c=Math.abs(1-o*o),u,f,d,g;if(c>0)if(u=o*l-a,f=o*a-l,g=r*c,u>=0)if(f>=-g)if(f<=g){let _=1/c;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+h}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+h;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+h;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+h):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+h):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+h);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ul).addScaledVector(Ro,f),d}intersectSphere(e,t){oi.subVectors(e.center,this.origin);let i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(i=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),c>=0?(r=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,s,r){Ol.subVectors(t,e),Co.subVectors(i,e),Bl.crossVectors(Ol,Co);let o=this.direction.dot(Bl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);let l=a*this.direction.dot(Co.crossVectors(Ri,Co));if(l<0)return null;let h=a*this.direction.dot(Ol.cross(Ri));if(h<0||l+h>o)return null;let c=-a*Ri.dot(Bl);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class n{constructor(e,t,i,s,r,o,a,l,h,c,u,f,d,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,h,c,u,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,h,c,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*c,d=o*u,g=a*c,_=a*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=d+g*h,t[5]=f-_*h,t[9]=-a*l,t[2]=_-f*h,t[6]=g+d*h,t[10]=o*l}else if(e.order==="YXZ"){let f=l*c,d=l*u,g=h*c,_=h*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*h,t[1]=o*u,t[5]=o*c,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*c,d=l*u,g=h*c,_=h*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*c,d=o*u,g=a*c,_=a*u;t[0]=l*c,t[4]=g*h-d,t[8]=f*h+_,t[1]=l*u,t[5]=_*h+f,t[9]=d*h-g,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*h,g=a*l,_=a*h;t[0]=l*c,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*c,t[9]=-a*c,t[2]=-h*c,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*h,g=a*l,_=a*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=f*u+_,t[5]=o*c,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*c,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,E0)}lookAt(e,t,i){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ci.crossVectors(i,mn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ci.crossVectors(i,mn)),Ci.normalize(),Po.crossVectors(mn,Ci),s[0]=Ci.x,s[4]=Po.x,s[8]=mn.x,s[1]=Ci.y,s[5]=Po.y,s[9]=mn.y,s[2]=Ci.z,s[6]=Po.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],y=i[7],v=i[11],P=i[15],w=s[0],R=s[4],D=s[8],x=s[12],S=s[1],B=s[5],T=s[9],I=s[13],L=s[2],U=s[6],O=s[10],X=s[14],q=s[3],Y=s[7],Z=s[11],te=s[15];return r[0]=o*w+a*S+l*L+h*q,r[4]=o*R+a*B+l*U+h*Y,r[8]=o*D+a*T+l*O+h*Z,r[12]=o*x+a*I+l*X+h*te,r[1]=c*w+u*S+f*L+d*q,r[5]=c*R+u*B+f*U+d*Y,r[9]=c*D+u*T+f*O+d*Z,r[13]=c*x+u*I+f*X+d*te,r[2]=g*w+_*S+m*L+p*q,r[6]=g*R+_*B+m*U+p*Y,r[10]=g*D+_*T+m*O+p*Z,r[14]=g*x+_*I+m*X+p*te,r[3]=M*w+y*S+v*L+P*q,r[7]=M*R+y*B+v*U+P*Y,r[11]=M*D+y*T+v*O+P*Z,r[15]=M*x+y*I+v*X+P*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],c=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*h*u-r*a*f+i*h*f+s*a*d-i*l*d)+_*(+t*l*d-t*h*f+r*o*f-s*o*d+s*h*c-r*l*c)+m*(+t*h*u-t*a*d-r*o*u+i*o*d+r*a*c-i*h*c)+p*(-s*a*c-t*l*u+t*a*f+s*o*u-i*o*f+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=u*m*h-_*f*h+_*l*d-a*m*d-u*l*p+a*f*p,y=g*f*h-c*m*h-g*l*d+o*m*d+c*l*p-o*f*p,v=c*_*h-g*u*h+g*a*d-o*_*d-c*a*p+o*u*p,P=g*u*l-c*_*l-g*a*f+o*_*f+c*a*m-o*u*m,w=t*M+i*y+s*v+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=M*R,e[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*R,e[2]=(a*m*r-_*l*r+_*s*h-i*m*h-a*s*p+i*l*p)*R,e[3]=(u*l*r-a*f*r-u*s*h+i*f*h+a*s*d-i*l*d)*R,e[4]=y*R,e[5]=(c*m*r-g*f*r+g*s*d-t*m*d-c*s*p+t*f*p)*R,e[6]=(g*l*r-o*m*r-g*s*h+t*m*h+o*s*p-t*l*p)*R,e[7]=(o*f*r-c*l*r+c*s*h-t*f*h-o*s*d+t*l*d)*R,e[8]=v*R,e[9]=(g*u*r-c*_*r-g*i*d+t*_*d+c*i*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*i*h-t*_*h-o*i*p+t*a*p)*R,e[11]=(c*a*r-o*u*r-c*i*h+t*u*h+o*i*d-t*a*d)*R,e[12]=P*R,e[13]=(c*_*s-g*u*s+g*i*f-t*_*f-c*i*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*R,e[15]=(o*u*s-c*a*s+c*i*l-t*u*l-o*i*f+t*a*f)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+i,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,c=o+o,u=a+a,f=r*h,d=r*c,g=r*u,_=o*c,m=o*u,p=a*u,M=l*h,y=l*c,v=l*u,P=i.x,w=i.y,R=i.z;return s[0]=(1-(_+p))*P,s[1]=(d+v)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+y)*R,s[9]=(m-M)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let h=1/r,c=1/o,u=1/a;return Un.elements[0]*=h,Un.elements[1]*=h,Un.elements[2]*=h,Un.elements[4]*=c,Un.elements[5]*=c,Un.elements[6]*=c,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=pi){let l=this.elements,h=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(a===pi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===aa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=pi){let l=this.elements,h=1/(t-e),c=1/(i-s),u=1/(o-r),f=(t+e)*h,d=(i+s)*c,g,_;if(a===pi)g=(o+r)*u,_=-2*u;else if(a===aa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ps=new C,Un=new Pe,v0=new C(0,0,0),E0=new C(1,1,1),Ci=new C,Po=new C,mn=new C,vf=new Pe,Ef=new _n,fa=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fa.DEFAULT_ORDER="XYZ";da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},S0=0,Sf=new C,Ls=new _n,ai=new Pe,Lo=new C,Rr=new C,b0=new C,T0=new _n,bf=new C(1,0,0),Tf=new C(0,1,0),Af=new C(0,0,1),A0={type:"added"},w0={type:"removed"},wt=class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new fa,i=new _n,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Xe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(bf,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bf,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lo.copy(e):Lo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Rr,Lo,this.up):ai.lookAt(Lo,Rr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ai),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(A0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,b0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),h=o(e.textures),c=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};wt.DEFAULT_UP=new C(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;On=new C,li=new C,Fl=new C,ci=new C,Is=new C,Ds=new C,wf=new C,Hl=new C,zl=new C,kl=new C,Io=!1,rs=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){On.subVectors(s,t),li.subVectors(i,t),Fl.subVectors(e,t);let o=On.dot(On),a=On.dot(li),l=On.dot(Fl),h=li.dot(li),c=li.dot(Fl),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(h*l-a*c)*f,g=(o*c-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,i,s,r,o,a,l){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static isFrontFacing(e,t,i,s){return On.subVectors(i,t),li.subVectors(e,t),On.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),li.subVectors(this.a,this.b),On.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,i),Ds.subVectors(r,i),Hl.subVectors(e,i);let l=Is.dot(Hl),h=Ds.dot(Hl);if(l<=0&&h<=0)return t.copy(i);zl.subVectors(e,s);let c=Is.dot(zl),u=Ds.dot(zl);if(c>=0&&u<=c)return t.copy(s);let f=l*u-c*h;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Is,o);kl.subVectors(e,r);let d=Is.dot(kl),g=Ds.dot(kl);if(g>=0&&d<=g)return t.copy(r);let _=d*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(i).addScaledVector(Ds,a);let m=c*g-d*u;if(m<=0&&u-c>=0&&d-g>=0)return wf.subVectors(r,s),a=(u-c)/(u-c+(d-g)),t.copy(s).addScaledVector(wf,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Do={h:0,s:0,l:0};_e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=jc(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Gl(o,r,e+1/3),this.g=Gl(o,r,e),this.b=Gl(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let i=Bd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}copyLinearToSRGB(e){return this.r=Pl(e.r),this.g=Pl(e.g),this.b=Pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return Qe.fromWorkingColorSpace($t.copy(this),e),Math.round(zt($t.r*255,0,255))*65536+Math.round(zt($t.g*255,0,255))*256+Math.round(zt($t.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace($t.copy(this),t);let i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=nt){Qe.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,s=$t.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Do);let i=Dr(Pi.h,Do.h,t),s=Dr(Pi.s,Do.s,t),r=Dr(Pi.l,Do.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new _e;_e.NAMES=Bd;R0=0,Mn=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Ws,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oc&&(i.blendSrc=this.blendSrc),this.blendDst!==ac&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},me=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pt=new C,No=new oe,_t=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}},pa=class extends _t{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ma=class extends _t{constructor(e,t,i){super(new Uint32Array(e),t,i)}},je=class extends _t{constructor(e,t,i){super(new Float32Array(e),t,i)}},C0=0,Sn=new Pe,Vl=new wt,Ns=new C,gn=new vt,Cr=new vt,Ht=new C,ct=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Od(e)?ma:pa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(gn.min,Cr.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,Cr.max),gn.expandByPoint(Ht)):(gn.expandByPoint(Cr.min),gn.expandByPoint(Cr.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Ht.fromBufferAttribute(a,h),l&&(Ns.fromBufferAttribute(e,h),Ht.add(Ns)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,h=[],c=[];for(let S=0;S<a;S++)h[S]=new C,c[S]=new C;let u=new C,f=new C,d=new C,g=new oe,_=new oe,m=new oe,p=new C,M=new C;function y(S,B,T){u.fromArray(s,S*3),f.fromArray(s,B*3),d.fromArray(s,T*3),g.fromArray(o,S*2),_.fromArray(o,B*2),m.fromArray(o,T*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(I),M.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(I),h[S].add(p),h[B].add(p),h[T].add(p),c[S].add(M),c[B].add(M),c[T].add(M))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let S=0,B=v.length;S<B;++S){let T=v[S],I=T.start,L=T.count;for(let U=I,O=I+L;U<O;U+=3)y(i[U+0],i[U+1],i[U+2])}let P=new C,w=new C,R=new C,D=new C;function x(S){R.fromArray(r,S*3),D.copy(R);let B=h[S];P.copy(B),P.sub(R.multiplyScalar(R.dot(B))).normalize(),w.crossVectors(D,B);let I=w.dot(c[S])<0?-1:1;l[S*4]=P.x,l[S*4+1]=P.y,l[S*4+2]=P.z,l[S*4+3]=I}for(let S=0,B=v.length;S<B;++S){let T=v[S],I=T.start,L=T.count;for(let U=I,O=I+L;U<O;U+=3)x(i[U+0]),x(i[U+1]),x(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,h=new C,c=new C,u=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,m),a.add(c),l.add(c),h.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){let h=a.array,c=a.itemSize,u=a.normalized,f=new h.constructor(l.length*c),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)f[g++]=h[d++]}return new _t(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=e(l,i);t.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){let f=h[c],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,f=h.length;u<f;u++){let d=h[u];c.push(d.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(t))}let r=e.morphAttributes;for(let h in r){let c=[],u=r[h];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rf=new Pe,es=new Qs,Uo=new yn,Cf=new C,Us=new C,Os=new C,Bs=new C,Wl=new C,Oo=new C,Bo=new oe,Fo=new oe,Ho=new oe,Pf=new C,Lf=new C,If=new C,zo=new C,ko=new C,W=class extends wt{constructor(e=new ct,t=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],u=r[l];c!==0&&(Wl.fromBufferAttribute(u,e),o?Oo.addScaledVector(Wl,c):Oo.addScaledVector(Wl.sub(t),c))}t.add(Oo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(Uo.containsPoint(es.origin)===!1&&(es.intersectSphere(Uo,Cf)===null||es.origin.distanceToSquared(Cf)>(e.far-e.near)**2))&&(Rf.copy(r).invert(),es.copy(e.ray).applyMatrix4(Rf),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,P=y;v<P;v+=3){let w=a.getX(v),R=a.getX(v+1),D=a.getX(v+2);s=Go(this,p,e,i,h,c,u,w,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Go(this,o,e,i,h,c,u,M,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,P=y;v<P;v+=3){let w=v,R=v+1,D=v+2;s=Go(this,p,e,i,h,c,u,w,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=m,y=m+1,v=m+2;s=Go(this,o,e,i,h,c,u,M,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};de=class n extends ct{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(u,2));function g(_,m,p,M,y,v,P,w,R,D,x){let S=v/R,B=P/D,T=v/2,I=P/2,L=w/2,U=R+1,O=D+1,X=0,q=0,Y=new C;for(let Z=0;Z<O;Z++){let te=Z*B-I;for(let he=0;he<U;he++){let K=he*S-T;Y[_]=K*M,Y[m]=te*y,Y[p]=L,h.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=w>0?1:-1,c.push(Y.x,Y.y,Y.z),u.push(he/R),u.push(1-Z/D),X+=1}}for(let Z=0;Z<D;Z++)for(let te=0;te<R;te++){let he=f+te+U*Z,K=f+te+U*(Z+1),J=f+(te+1)+U*(Z+1),le=f+(te+1)+U*Z;l.push(he,K,le),l.push(K,J,le),q+=6}a.addGroup(d,q,x),d+=q,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};sr={clone:er,merge:sn},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=L0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ga=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Lt=class extends ga{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fs=-90,Hs=1,mc=class extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Fs,Hs,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Fs,Hs,e,t);r.layers=this.layers,this.add(r);let o=new Lt(Fs,Hs,e,t);o.layers=this.layers,this.add(o);let a=new Lt(Fs,Hs,e,t);a.layers=this.layers,this.add(a);let l=new Lt(Fs,Hs,e,t);l.layers=this.layers,this.add(l);let h=new Lt(Fs,Hs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let h of t)this.remove(h);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},_a=class extends Wt{constructor(e,t,i,s,r,o,a,l,h,c){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,i,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gc=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ls?nt:Tn),this.texture=new _a(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Zn});r.uniforms.tEquirect.value=t;let o=new W(s,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Vt),new mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Xl=new C,N0=new C,U0=new Xe,fi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Xl.subVectors(i,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Xl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||U0.getNormalMatrix(e),s=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new yn,Vo=new C,zr=class{constructor(e=new fi,t=new fi,i=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],c=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,f-h,m-d,v-p).normalize(),i[1].setComponents(l+r,f+h,m+d,v+p).normalize(),i[2].setComponents(l+o,f+c,m+g,v+M).normalize(),i[3].setComponents(l-o,f-c,m-g,v-M).normalize(),i[4].setComponents(l-a,f-u,m-_,v-y).normalize(),t===pi)i[5].setComponents(l+a,f+u,m+_,v+y).normalize();else if(t===aa)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ye=class n extends ct{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),h=a+1,c=l+1,u=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){let M=p*f-o;for(let y=0;y<h;y++){let v=y*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let y=M+h*p,v=M+h*(p+1),P=M+1+h*(p+1),w=M+1+h*p;d.push(y,v,w),d.push(v,P,w)}this.setIndex(d),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},B0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
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
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,G0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V0=`#ifdef USE_AOMAP
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
#endif`,W0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X0=`#ifdef USE_BATCHING
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
#endif`,q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J0=`#ifdef USE_IRIDESCENCE
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
#endif`,$0=`#ifdef USE_BUMPMAP
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,og=`#define PI 3.141592653589793
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
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`
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
}`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
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
}`,Tg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ug=`PhysicalMaterial material;
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
#endif`,Og=`struct PhysicalMaterial {
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
}`,Bg=`
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
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v_=`float getShadowMask() {
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
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S_=`#ifdef USE_SKINNING
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
#endif`,b_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,A_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B_=`uniform sampler2D t2D;
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
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
}`,V_=`#if DEPTH_PACKING == 3200
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
}`,W_=`#define DISTANCE
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
}`,X_=`#define DISTANCE
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,$_=`uniform vec3 diffuse;
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
}`,j_=`#define LAMBERT
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
}`,Q_=`#define LAMBERT
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
}`,ey=`#define MATCAP
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
}`,ty=`#define MATCAP
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
}`,ny=`#define NORMAL
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
}`,iy=`#define NORMAL
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
}`,sy=`#define PHONG
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
}`,ry=`#define PHONG
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
}`,oy=`#define STANDARD
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
}`,ay=`#define STANDARD
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
}`,ly=`#define TOON
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
}`,cy=`#define TOON
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
}`,hy=`uniform float size;
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
}`,uy=`uniform vec3 diffuse;
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
}`,fy=`#include <common>
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
}`,dy=`uniform vec3 color;
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
}`,py=`uniform float rotation;
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
}`,my=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:B0,alphahash_pars_fragment:F0,alphamap_fragment:H0,alphamap_pars_fragment:z0,alphatest_fragment:k0,alphatest_pars_fragment:G0,aomap_fragment:V0,aomap_pars_fragment:W0,batching_pars_vertex:X0,batching_vertex:q0,begin_vertex:Y0,beginnormal_vertex:K0,bsdfs:Z0,iridescence_fragment:J0,bumpmap_pars_fragment:$0,clipping_planes_fragment:j0,clipping_planes_pars_fragment:Q0,clipping_planes_pars_vertex:eg,clipping_planes_vertex:tg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:og,cube_uv_reflection_fragment:ag,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:fg,colorspace_fragment:dg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:_g,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Pg,envmap_vertex:Mg,fog_vertex:xg,fog_pars_vertex:vg,fog_fragment:Eg,fog_pars_fragment:Sg,gradientmap_pars_fragment:bg,lightmap_fragment:Tg,lightmap_pars_fragment:Ag,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Dg,lights_phong_pars_fragment:Ng,lights_physical_fragment:Ug,lights_physical_pars_fragment:Og,lights_fragment_begin:Bg,lights_fragment_maps:Fg,lights_fragment_end:Hg,logdepthbuf_fragment:zg,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Vg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:Zg,morphcolor_vertex:Jg,morphnormal_vertex:$g,morphtarget_pars_vertex:jg,morphtarget_vertex:Qg,normal_fragment_begin:e_,normal_fragment_maps:t_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:s_,normalmap_pars_fragment:r_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:c_,opaque_fragment:h_,packing:u_,premultiplied_alpha_fragment:f_,project_vertex:d_,dithering_fragment:p_,dithering_pars_fragment:m_,roughnessmap_fragment:g_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:y_,shadowmap_pars_vertex:M_,shadowmap_vertex:x_,shadowmask_pars_fragment:v_,skinbase_vertex:E_,skinning_pars_vertex:S_,skinning_vertex:b_,skinnormal_vertex:T_,specularmap_fragment:A_,specularmap_pars_fragment:w_,tonemapping_fragment:R_,tonemapping_pars_fragment:C_,transmission_fragment:P_,transmission_pars_fragment:L_,uv_pars_fragment:I_,uv_pars_vertex:D_,uv_vertex:N_,worldpos_vertex:U_,background_vert:O_,background_frag:B_,backgroundCube_vert:F_,backgroundCube_frag:H_,cube_vert:z_,cube_frag:k_,depth_vert:G_,depth_frag:V_,distanceRGBA_vert:W_,distanceRGBA_frag:X_,equirect_vert:q_,equirect_frag:Y_,linedashed_vert:K_,linedashed_frag:Z_,meshbasic_vert:J_,meshbasic_frag:$_,meshlambert_vert:j_,meshlambert_frag:Q_,meshmatcap_vert:ey,meshmatcap_frag:ty,meshnormal_vert:ny,meshnormal_frag:iy,meshphong_vert:sy,meshphong_frag:ry,meshphysical_vert:oy,meshphysical_frag:ay,meshtoon_vert:ly,meshtoon_frag:cy,points_vert:hy,points_frag:uy,shadow_vert:fy,shadow_frag:dy,sprite_vert:py,sprite_frag:my},ie={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Yn={basic:{uniforms:sn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:sn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new _e(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:sn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:sn([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:sn([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new _e(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:sn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:sn([ie.points,ie.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:sn([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:sn([ie.common,ie.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:sn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:sn([ie.sprite,ie.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:sn([ie.common,ie.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:sn([ie.lights,ie.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Yn.physical={uniforms:sn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};Wo={r:0,b:0,g:0};Bi=class extends ga{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gs=4,Df=[.125,.215,.35,.446,.526,.582],ss=20,ql=new Bi,Nf=new _e,Yl=null,Kl=0,Zl=0,ns=(1+Math.sqrt(5))/2,zs=1/ns,Uf=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ns,zs),new C(0,ns,-zs),new C(zs,0,ns),new C(-zs,0,ns),new C(ns,zs,0),new C(-ns,zs,0)],ya=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Yl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,Kl,Zl),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:zn,format:bn,colorSpace:It,depthBuffer:!1},s=Of(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Of(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ey(r)),this._blurMaterial=Sy(r,e,t)}return s}_compileMaterial(e){let t=new W(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,i,s){let a=new Lt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(Nf),c.toneMapping=Di,c.autoClear=!1;let d=new me({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new W(new de,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Nf),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let y=this._cubeSize;Xo(s,M*y,p>2?y:0,y,y),c.setRenderTarget(s),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ks||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Xo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ql)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Uf[(s-1)%Uf.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new W(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ss-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],M=0;for(let R=0;R<ss;++R){let D=R/_,x=Math.exp(-D*D/2);p.push(x),R===0?M+=x:R<m&&(M+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let v=this._sizeLods[s],P=3*v*(s>y-Gs?s-y+Gs:0),w=4*(this._cubeSize-v);Xo(t,P,w,3*v,2*v),l.setRenderTarget(t),l.render(u,ql)}};Ma=class extends Wt{constructor(e,t,i,s,r,o,a,l,h,c){if(c=c!==void 0?c:as,c!==as&&c!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===as&&(i=Li),i===void 0&&c===Js&&(i=os),super(null,s,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zd=new Wt,kd=new Ma(1,1);kd.compareFunction=Nd;Gd=new ua,Vd=new pc,Wd=new _a,Hf=[],zf=[],kf=new Float32Array(16),Gf=new Float32Array(9),Vf=new Float32Array(4);_c=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jy(t.type)}},yc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yM(t.type)}},Mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Jl=/(\w+)(\])?(\[|\.)?/g;Ys=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);MM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};xM=37297,vM=0;PM=/^[ \t]*#include +<([\w\d./]+)>/gm;LM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;kM=0,vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ec(e),t.set(e,i)),i}},Ec=class{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}};KM=0;Sc=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bc=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},jM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QM=`uniform sampler2D shadow_pass;
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
}`;Tc=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),d=.02,g=.005;h.inputState.pinching&&f>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ac=class extends Oi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,f=null,d=null,g=null,_=t.getContextAttributes(),m=null,p=null,M=[],y=[],v=new oe,P=null,w=new Lt;w.layers.enable(1),w.viewport=new at;let R=new Lt;R.layers.enable(2),R.viewport=new at;let D=[w,R],x=new Tc;x.layers.enable(1),x.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=M[K];return J===void 0&&(J=new Ur,M[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=M[K];return J===void 0&&(J=new Ur,M[K]=J),J.getGripSpace()},this.getHand=function(K){let J=M[K];return J===void 0&&(J=new Ur,M[K]=J),J.getHandSpace()};function T(K){let J=y.indexOf(K.inputSource);if(J===-1)return;let le=M[J];le!==void 0&&(le.update(K.inputSource,K.frame,h||o),le.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",L);for(let K=0;K<M.length;K++){let J=y[K];J!==null&&(y[K]=null,M[K].disconnect(J))}S=null,B=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",I),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new on(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,le=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?Js:as,le=_.stencil?os:Li);let xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new on(f.textureWidth,f.textureHeight,{format:bn,type:Ui,depthTexture:new Ma(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ue=e.properties.get(p);Ue.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(K){for(let J=0;J<K.removed.length;J++){let le=K.removed[J],ve=y.indexOf(le);ve>=0&&(y[ve]=null,M[ve].disconnect(le))}for(let J=0;J<K.added.length;J++){let le=K.added[J],ve=y.indexOf(le);if(ve===-1){for(let Ue=0;Ue<M.length;Ue++)if(Ue>=y.length){y.push(le),ve=Ue;break}else if(y[Ue]===null){y[Ue]=le,ve=Ue;break}if(ve===-1)break}let xe=M[ve];xe&&xe.connect(le)}}let U=new C,O=new C;function X(K,J,le){U.setFromMatrixPosition(J.matrixWorld),O.setFromMatrixPosition(le.matrixWorld);let ve=U.distanceTo(O),xe=J.projectionMatrix.elements,Ue=le.projectionMatrix.elements,Be=xe[14]/(xe[10]-1),we=xe[14]/(xe[10]+1),$e=(xe[9]+1)/xe[5],H=(xe[9]-1)/xe[5],Qt=(xe[8]-1)/xe[0],Se=(Ue[8]+1)/Ue[0],De=Be*Qt,ge=Be*Se,Et=ve/(-Qt+Se),ze=Et*-Qt;J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ze),K.translateZ(Et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let A=Be+Et,E=we+Et,k=De-ze,Q=ge+(ve-ze),j=$e*we/E*A,ee=H*we/E*A;K.projectionMatrix.makePerspective(k,Q,j,ee,A,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function q(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;x.near=R.near=w.near=K.near,x.far=R.far=w.far=K.far,(S!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,B=x.far);let J=K.parent,le=x.cameras;q(x,J);for(let ve=0;ve<le.length;ve++)q(le[ve],J);le.length===2?X(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),Y(K,x,J)};function Y(K,J,le){le===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=js*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)};let Z=null;function te(K,J){if(c=J.getViewerPose(h||o),g=J,c!==null){let le=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ve=!1;le.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let xe=0;xe<le.length;xe++){let Ue=le[xe],Be=null;if(d!==null)Be=d.getViewport(Ue);else{let $e=u.getViewSubImage(f,Ue);Be=$e.viewport,xe===0&&(e.setRenderTargetTextures(p,$e.colorTexture,f.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(p))}let we=D[xe];we===void 0&&(we=new Lt,we.layers.enable(xe),we.viewport=new at,D[xe]=we),we.matrix.fromArray(Ue.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ue.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Be.x,Be.y,Be.width,Be.height),xe===0&&(x.matrix.copy(we.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(we)}}for(let le=0;le<M.length;le++){let ve=y[le],xe=M[le];ve!==null&&xe!==void 0&&xe.update(ve,J,h||o)}Z&&Z(K,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let he=new Hd;he.setAnimationLoop(te),this.setAnimationLoop=function(K){Z=K},this.dispose=function(){}}};kr=class{constructor(e={}){let{canvas:t=g0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=Di,this.toneMappingExposure=1;let y=this,v=!1,P=0,w=0,R=null,D=-1,x=null,S=new at,B=new at,T=null,I=new _e(0),L=0,U=t.width,O=t.height,X=1,q=null,Y=null,Z=new at(0,0,U,O),te=new at(0,0,U,O),he=!1,K=new zr,J=!1,le=!1,ve=null,xe=new Pe,Ue=new oe,Be=new C,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return R===null?X:1}let H=i;function Qt(b,F){for(let G=0;G<b.length;G++){let V=b[G],z=t.getContext(V,F);if(z!==null)return z}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",se,!1),H===null){let F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),H=Qt(F,b),H===null)throw Qt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Se,De,ge,Et,ze,A,E,k,Q,j,ee,ye,ae,ue,Ae,ke,$,st,qe,Ie,Ee,fe,Fe,tt;function bt(){Se=new Ty(H),De=new My(H,Se,e),Se.init(De),fe=new ix(H,Se,De),ge=new tx(H,Se,De),Et=new Ry(H),ze=new VM,A=new nx(H,Se,ge,ze,De,fe,Et),E=new vy(y),k=new by(y),Q=new O0(H,De),Fe=new _y(H,Se,Q,De),j=new Ay(H,Q,Et,Fe),ee=new Iy(H,j,Q,Et),qe=new Ly(H,De,A),ke=new xy(ze),ye=new GM(y,E,k,Se,De,Fe,ke),ae=new rx(y,ze),ue=new XM,Ae=new $M(Se,De),st=new gy(y,E,k,ge,ee,f,l),$=new ex(y,ee,De),tt=new ox(H,Et,De,ge),Ie=new yy(H,Se,Et,De),Ee=new wy(H,Se,Et,De),Et.programs=ye.programs,y.capabilities=De,y.extensions=Se,y.properties=ze,y.renderLists=ue,y.shadowMap=$,y.state=ge,y.info=Et}bt();let Ve=new Ac(y,H);this.xr=Ve,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let b=Se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(U,O,!1))},this.getSize=function(b){return b.set(U,O)},this.setSize=function(b,F,G=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,O=F,t.width=Math.floor(b*X),t.height=Math.floor(F*X),G===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(U*X,O*X).floor()},this.setDrawingBufferSize=function(b,F,G){U=b,O=F,X=G,t.width=Math.floor(b*G),t.height=Math.floor(F*G),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,F,G,V){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,F,G,V),ge.viewport(S.copy(Z).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,F,G,V){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,F,G,V),ge.scissor(B.copy(te).multiplyScalar(X).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(b){ge.setScissorTest(he=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(b=!0,F=!0,G=!0){let V=0;if(b){let z=!1;if(R!==null){let ce=R.texture.format;z=ce===Cd||ce===Rd||ce===wd}if(z){let ce=R.texture.type,Me=ce===Ui||ce===Li||ce===Jc||ce===os||ce===Td||ce===Ad,Te=st.getClearColor(),Ce=st.getClearAlpha(),Ge=Te.r,Ne=Te.g,Oe=Te.b;Me?(d[0]=Ge,d[1]=Ne,d[2]=Oe,d[3]=Ce,H.clearBufferuiv(H.COLOR,0,d)):(g[0]=Ge,g[1]=Ne,g[2]=Oe,g[3]=Ce,H.clearBufferiv(H.COLOR,0,g))}else V|=H.COLOR_BUFFER_BIT}F&&(V|=H.DEPTH_BUFFER_BIT),G&&(V|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),Ae.dispose(),ze.dispose(),E.dispose(),k.dispose(),ee.dispose(),Fe.dispose(),tt.dispose(),ye.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",en),Ve.removeEventListener("sessionend",pt),ve&&(ve.dispose(),ve=null),tn.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let b=Et.autoReset,F=$.enabled,G=$.autoUpdate,V=$.needsUpdate,z=$.type;bt(),Et.autoReset=b,$.enabled=F,$.autoUpdate=G,$.needsUpdate=V,$.type=z}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function re(b){let F=b.target;F.removeEventListener("dispose",re),Re(F)}function Re(b){be(b),ze.remove(b)}function be(b){let F=ze.get(b).programs;F!==void 0&&(F.forEach(function(G){ye.releaseProgram(G)}),b.isShaderMaterial&&ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,G,V,z,ce){F===null&&(F=we);let Me=z.isMesh&&z.matrixWorld.determinant()<0,Te=$p(b,F,G,V,z);ge.setMaterial(V,Me);let Ce=G.index,Ge=1;if(V.wireframe===!0){if(Ce=j.getWireframeAttribute(G),Ce===void 0)return;Ge=2}let Ne=G.drawRange,Oe=G.attributes.position,Ct=Ne.start*Ge,pn=(Ne.start+Ne.count)*Ge;ce!==null&&(Ct=Math.max(Ct,ce.start*Ge),pn=Math.min(pn,(ce.start+ce.count)*Ge)),Ce!==null?(Ct=Math.max(Ct,0),pn=Math.min(pn,Ce.count)):Oe!=null&&(Ct=Math.max(Ct,0),pn=Math.min(pn,Oe.count));let Ft=pn-Ct;if(Ft<0||Ft===1/0)return;Fe.setup(z,V,Te,G,Ce);let si,St=Ie;if(Ce!==null&&(si=Q.get(Ce),St=Ee,St.setIndex(si)),z.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*$e()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(z.isLine){let We=V.linewidth;We===void 0&&(We=1),ge.setLineWidth(We*$e()),z.isLineSegments?St.setMode(H.LINES):z.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else z.isPoints?St.setMode(H.POINTS):z.isSprite&&St.setMode(H.TRIANGLES);if(z.isBatchedMesh)St.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)St.renderInstances(Ct,Ft,z.count);else if(G.isInstancedBufferGeometry){let We=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ml=Math.min(G.instanceCount,We);St.renderInstances(Ct,Ft,Ml)}else St.render(Ct,Ft)};function ft(b,F,G){b.transparent===!0&&b.side===gt&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,So(b,F,G),b.side=Jn,b.needsUpdate=!0,So(b,F,G),b.side=gt):So(b,F,G)}this.compile=function(b,F,G=null){G===null&&(G=b),m=Ae.get(G),m.init(),M.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),b!==G&&b.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(y._useLegacyLights);let V=new Set;return b.traverse(function(z){let ce=z.material;if(ce)if(Array.isArray(ce))for(let Me=0;Me<ce.length;Me++){let Te=ce[Me];ft(Te,G,z),V.add(Te)}else ft(ce,G,z),V.add(ce)}),M.pop(),m=null,V},this.compileAsync=function(b,F,G=null){let V=this.compile(b,F,G);return new Promise(z=>{function ce(){if(V.forEach(function(Me){ze.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){z(b);return}setTimeout(ce,10)}Se.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let dt=null;function Bt(b){dt&&dt(b)}function en(){tn.stop()}function pt(){tn.start()}let tn=new Hd;tn.setAnimationLoop(Bt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(b){dt=b,Ve.setAnimationLoop(b),b===null?tn.stop():tn.start()},Ve.addEventListener("sessionstart",en),Ve.addEventListener("sessionend",pt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(F),F=Ve.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,R),m=Ae.get(b,M.length),m.init(),M.push(m),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(xe),le=this.localClippingEnabled,J=ke.init(this.clippingPlanes,le),_=ue.get(b,p.length),_.init(),p.push(_),qn(b,F,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(q,Y),this.info.render.frame++,J===!0&&ke.beginShadows();let G=m.state.shadowsArray;if($.render(G,b,F),J===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(_,b),m.setupLights(y._useLegacyLights),F.isArrayCamera){let V=F.cameras;for(let z=0,ce=V.length;z<ce;z++){let Me=V[z];wu(_,b,Me,Me.viewport)}}else wu(_,b,F);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,F),Fe.resetDefaultState(),D=-1,x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function qn(b,F,G,V){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){V&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);let Me=ee.update(b),Te=b.material;Te.visible&&_.push(b,Me,Te,G,Be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){let Me=ee.update(b),Te=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Be.copy(Me.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){let Ce=Me.groups;for(let Ge=0,Ne=Ce.length;Ge<Ne;Ge++){let Oe=Ce[Ge],Ct=Te[Oe.materialIndex];Ct&&Ct.visible&&_.push(b,Me,Ct,G,Be.z,Oe)}}else Te.visible&&_.push(b,Me,Te,G,Be.z,null)}}let ce=b.children;for(let Me=0,Te=ce.length;Me<Te;Me++)qn(ce[Me],F,G,V)}function wu(b,F,G,V){let z=b.opaque,ce=b.transmissive,Me=b.transparent;m.setupLightsView(G),J===!0&&ke.setGlobalState(y.clippingPlanes,G),ce.length>0&&Jp(z,ce,F,G),V&&ge.viewport(S.copy(V)),z.length>0&&Eo(z,F,G),ce.length>0&&Eo(ce,F,G),Me.length>0&&Eo(Me,F,G),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Jp(b,F,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let ce=De.isWebGL2;ve===null&&(ve=new on(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?zn:Ui,minFilter:Hn,samples:ce?4:0})),y.getDrawingBufferSize(Ue),ce?ve.setSize(Ue.x,Ue.y):ve.setSize(la(Ue.x),la(Ue.y));let Me=y.getRenderTarget();y.setRenderTarget(ve),y.getClearColor(I),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Te=y.toneMapping;y.toneMapping=Di,Eo(b,G,V),A.updateMultisampleRenderTarget(ve),A.updateRenderTargetMipmap(ve);let Ce=!1;for(let Ge=0,Ne=F.length;Ge<Ne;Ge++){let Oe=F[Ge],Ct=Oe.object,pn=Oe.geometry,Ft=Oe.material,si=Oe.group;if(Ft.side===gt&&Ct.layers.test(V.layers)){let St=Ft.side;Ft.side=un,Ft.needsUpdate=!0,Ru(Ct,G,V,pn,Ft,si),Ft.side=St,Ft.needsUpdate=!0,Ce=!0}}Ce===!0&&(A.updateMultisampleRenderTarget(ve),A.updateRenderTargetMipmap(ve)),y.setRenderTarget(Me),y.setClearColor(I,L),y.toneMapping=Te}function Eo(b,F,G){let V=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ce=b.length;z<ce;z++){let Me=b[z],Te=Me.object,Ce=Me.geometry,Ge=V===null?Me.material:V,Ne=Me.group;Te.layers.test(G.layers)&&Ru(Te,F,G,Ce,Ge,Ne)}}function Ru(b,F,G,V,z,ce){b.onBeforeRender(y,F,G,V,z,ce),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(y,F,G,V,b,ce),z.transparent===!0&&z.side===gt&&z.forceSinglePass===!1?(z.side=un,z.needsUpdate=!0,y.renderBufferDirect(G,F,V,z,b,ce),z.side=Jn,z.needsUpdate=!0,y.renderBufferDirect(G,F,V,z,b,ce),z.side=gt):y.renderBufferDirect(G,F,V,z,b,ce),b.onAfterRender(y,F,G,V,z,ce)}function So(b,F,G){F.isScene!==!0&&(F=we);let V=ze.get(b),z=m.state.lights,ce=m.state.shadowsArray,Me=z.state.version,Te=ye.getParameters(b,z.state,ce,F,G),Ce=ye.getProgramCacheKey(Te),Ge=V.programs;V.environment=b.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(b.isMeshStandardMaterial?k:E).get(b.envMap||V.environment),Ge===void 0&&(b.addEventListener("dispose",re),Ge=new Map,V.programs=Ge);let Ne=Ge.get(Ce);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===Me)return Pu(b,Te),Ne}else Te.uniforms=ye.getUniforms(b),b.onBuild(G,Te,y),b.onBeforeCompile(Te,y),Ne=ye.acquireProgram(Te,Ce),Ge.set(Ce,Ne),V.uniforms=Te.uniforms;let Oe=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=ke.uniform),Pu(b,Te),V.needsLights=Qp(b),V.lightsStateVersion=Me,V.needsLights&&(Oe.ambientLightColor.value=z.state.ambient,Oe.lightProbe.value=z.state.probe,Oe.directionalLights.value=z.state.directional,Oe.directionalLightShadows.value=z.state.directionalShadow,Oe.spotLights.value=z.state.spot,Oe.spotLightShadows.value=z.state.spotShadow,Oe.rectAreaLights.value=z.state.rectArea,Oe.ltc_1.value=z.state.rectAreaLTC1,Oe.ltc_2.value=z.state.rectAreaLTC2,Oe.pointLights.value=z.state.point,Oe.pointLightShadows.value=z.state.pointShadow,Oe.hemisphereLights.value=z.state.hemi,Oe.directionalShadowMap.value=z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Oe.spotShadowMap.value=z.state.spotShadowMap,Oe.spotLightMatrix.value=z.state.spotLightMatrix,Oe.spotLightMap.value=z.state.spotLightMap,Oe.pointShadowMap.value=z.state.pointShadowMap,Oe.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Ne,V.uniformsList=null,Ne}function Cu(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Ys.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Pu(b,F){let G=ze.get(b);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function $p(b,F,G,V,z){F.isScene!==!0&&(F=we),A.resetTextureUnits();let ce=F.fog,Me=V.isMeshStandardMaterial?F.environment:null,Te=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:It,Ce=(V.isMeshStandardMaterial?k:E).get(V.envMap||Me),Ge=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!G.morphAttributes.position,Ct=!!G.morphAttributes.normal,pn=!!G.morphAttributes.color,Ft=Di;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ft=y.toneMapping);let si=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,St=si!==void 0?si.length:0,We=ze.get(V),Ml=m.state.lights;if(J===!0&&(le===!0||b!==x)){let En=b===x&&V.id===D;ke.setState(V,b,En)}let Tt=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ml.state.version||We.outputColorSpace!==Te||z.isBatchedMesh&&We.batching===!1||!z.isBatchedMesh&&We.batching===!0||z.isInstancedMesh&&We.instancing===!1||!z.isInstancedMesh&&We.instancing===!0||z.isSkinnedMesh&&We.skinning===!1||!z.isSkinnedMesh&&We.skinning===!0||z.isInstancedMesh&&We.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&We.instancingColor===!1&&z.instanceColor!==null||We.envMap!==Ce||V.fog===!0&&We.fog!==ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ke.numPlanes||We.numIntersection!==ke.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Ne||We.morphTargets!==Oe||We.morphNormals!==Ct||We.morphColors!==pn||We.toneMapping!==Ft||De.isWebGL2===!0&&We.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,We.__version=V.version);let Ji=We.currentProgram;Tt===!0&&(Ji=So(V,F,z));let Lu=!1,Tr=!1,xl=!1,Zt=Ji.getUniforms(),$i=We.uniforms;if(ge.useProgram(Ji.program)&&(Lu=!0,Tr=!0,xl=!0),V.id!==D&&(D=V.id,Tr=!0),Lu||x!==b){Zt.setValue(H,"projectionMatrix",b.projectionMatrix),Zt.setValue(H,"viewMatrix",b.matrixWorldInverse);let En=Zt.map.cameraPosition;En!==void 0&&En.setValue(H,Be.setFromMatrixPosition(b.matrixWorld)),De.logarithmicDepthBuffer&&Zt.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Zt.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,Tr=!0,xl=!0)}if(z.isSkinnedMesh){Zt.setOptional(H,z,"bindMatrix"),Zt.setOptional(H,z,"bindMatrixInverse");let En=z.skeleton;En&&(De.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Zt.setValue(H,"boneTexture",En.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Zt.setOptional(H,z,"batchingTexture"),Zt.setValue(H,"batchingTexture",z._matricesTexture,A));let vl=G.morphAttributes;if((vl.position!==void 0||vl.normal!==void 0||vl.color!==void 0&&De.isWebGL2===!0)&&qe.update(z,G,Ji),(Tr||We.receiveShadow!==z.receiveShadow)&&(We.receiveShadow=z.receiveShadow,Zt.setValue(H,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&($i.envMap.value=Ce,$i.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Tr&&(Zt.setValue(H,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&jp($i,xl),ce&&V.fog===!0&&ae.refreshFogUniforms($i,ce),ae.refreshMaterialUniforms($i,V,X,O,ve),Ys.upload(H,Cu(We),$i,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ys.upload(H,Cu(We),$i,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Zt.setValue(H,"center",z.center),Zt.setValue(H,"modelViewMatrix",z.modelViewMatrix),Zt.setValue(H,"normalMatrix",z.normalMatrix),Zt.setValue(H,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let En=V.uniformsGroups;for(let El=0,em=En.length;El<em;El++)if(De.isWebGL2){let Iu=En[El];tt.update(Iu,Ji),tt.bind(Iu,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function jp(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Qp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,F,G){ze.get(b.texture).__webglTexture=F,ze.get(b.depthTexture).__webglTexture=G;let V=ze.get(b);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){let G=ze.get(b);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,G=0){R=b,P=F,w=G;let V=!0,z=null,ce=!1,Me=!1;if(b){let Ce=ze.get(b);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(H.FRAMEBUFFER,null),V=!1):Ce.__webglFramebuffer===void 0?A.setupRenderTarget(b):Ce.__hasExternalTextures&&A.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);let Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);let Ne=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?z=Ne[F][G]:z=Ne[F],ce=!0):De.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?z=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[G]:z=Ne,S.copy(b.viewport),B.copy(b.scissor),T=b.scissorTest}else S.copy(Z).multiplyScalar(X).floor(),B.copy(te).multiplyScalar(X).floor(),T=he;if(ge.bindFramebuffer(H.FRAMEBUFFER,z)&&De.drawBuffers&&V&&ge.drawBuffers(b,z),ge.viewport(S),ge.scissor(B),ge.setScissorTest(T),ce){let Ce=ze.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,G)}else if(Me){let Ce=ze.get(b.texture),Ge=F||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ce.__webglTexture,G||0,Ge)}D=-1},this.readRenderTargetPixels=function(b,F,G,V,z,ce,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){ge.bindFramebuffer(H.FRAMEBUFFER,Te);try{let Ce=b.texture,Ge=Ce.format,Ne=Ce.type;if(Ge!==bn&&fe.convert(Ge)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Ne===zn&&(Se.has("EXT_color_buffer_half_float")||De.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ne!==Ui&&fe.convert(Ne)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===di&&(De.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-V&&G>=0&&G<=b.height-z&&H.readPixels(F,G,V,z,fe.convert(Ge),fe.convert(Ne),ce)}finally{let Ce=R!==null?ze.get(R).__webglFramebuffer:null;ge.bindFramebuffer(H.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(b,F,G=0){let V=Math.pow(2,-G),z=Math.floor(F.image.width*V),ce=Math.floor(F.image.height*V);A.setTexture2D(F,0),H.copyTexSubImage2D(H.TEXTURE_2D,G,0,0,b.x,b.y,z,ce),ge.unbindTexture()},this.copyTextureToTexture=function(b,F,G,V=0){let z=F.image.width,ce=F.image.height,Me=fe.convert(G.format),Te=fe.convert(G.type);A.setTexture2D(G,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,V,b.x,b.y,z,ce,Me,Te,F.image.data):F.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,V,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Me,F.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,V,b.x,b.y,Me,Te,F.image),V===0&&G.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,F,G,V,z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Te=b.max.z-b.min.z+1,Ce=fe.convert(V.format),Ge=fe.convert(V.type),Ne;if(V.isData3DTexture)A.setTexture3D(V,0),Ne=H.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),Ne=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let Oe=H.getParameter(H.UNPACK_ROW_LENGTH),Ct=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ft=H.getParameter(H.UNPACK_SKIP_ROWS),si=H.getParameter(H.UNPACK_SKIP_IMAGES),St=G.isCompressedTexture?G.mipmaps[z]:G.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,St.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,b.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,b.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,b.min.z),G.isDataTexture||G.isData3DTexture?H.texSubImage3D(Ne,z,F.x,F.y,F.z,ce,Me,Te,Ce,Ge,St.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ne,z,F.x,F.y,F.z,ce,Me,Te,Ce,St.data)):H.texSubImage3D(Ne,z,F.x,F.y,F.z,ce,Me,Te,Ce,Ge,St),H.pixelStorei(H.UNPACK_ROW_LENGTH,Oe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ct),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ft),H.pixelStorei(H.UNPACK_SKIP_IMAGES,si),z===0&&V.generateMipmaps&&H.generateMipmap(Ne),ge.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){P=0,w=0,R=null,ge.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===$c?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?ls:Id}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ls?nt:It}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},wc=class extends kr{};wc.prototype.isWebGL1Renderer=!0;xa=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},va=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new C,Vr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ed=new C,td=new at,nd=new at,ax=new C,id=new Pe,qo=new C,$l=new yn,sd=new Pe,jl=new Qs,Ea=class extends W{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fu,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$l.copy(this.boundingSphere),$l.applyMatrix4(s),e.ray.intersectsSphere($l)!==!1&&(sd.copy(s).invert(),jl.copy(e.ray).applyMatrix4(sd),!(this.boundingBox!==null&&jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Om?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;td.fromBufferAttribute(s.attributes.skinIndex,e),nd.fromBufferAttribute(s.attributes.skinWeight,e),ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=nd.getComponent(r);if(o!==0){let a=td.getComponent(r);id.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ax.copy(ed).applyMatrix4(id),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Wr=class extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rc=class extends Wt{constructor(e=null,t=1,i=1,s,r,o,a,l,h=At,c=At,u,f){super(null,o,a,l,h,c,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rd=new Pe,lx=new Pe,Sa=class n{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Pe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:lx;rd.multiplyMatrices(a,t[r]),rd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Rc(t,e,e,bn,di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wr),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},hs=class extends _t{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new Pe,od=new Pe,Yo=[],ad=new vt,cx=new Pe,Pr=new W,Lr=new yn,ba=class extends W{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hs(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,cx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),ad.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Lr.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(i),e.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),od.multiplyMatrices(i,ks),Pr.matrixWorld=od,Pr.raycast(e,Yo);for(let o=0,a=Yo.length;o<a;o++){let l=Yo[o];l.instanceId=r,l.object=this,t.push(l)}Yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ld=new C,cd=new C,hd=new Pe,Ql=new Qs,Ko=new yn,Fi=class extends wt{constructor(e=new ct,t=new $n){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ld.fromBufferAttribute(t,s-1),cd.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ld.distanceTo(cd);e.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;hd.copy(s).invert(),Ql.copy(e.ray).applyMatrix4(hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new C,c=new C,u=new C,f=new C,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let y=p,v=M-1;y<v;y+=d){let P=g.getX(y),w=g.getX(y+1);if(h.fromBufferAttribute(m,P),c.fromBufferAttribute(m,w),Ql.distanceSqToSegment(h,c,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let y=p,v=M-1;y<v;y+=d){if(h.fromBufferAttribute(m,y),c.fromBufferAttribute(m,y+1),Ql.distanceSqToSegment(h,c,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},ud=new C,fd=new C,an=class extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ud.fromBufferAttribute(t,s),fd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ud.distanceTo(fd);e.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends Fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},us=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dd=new Pe,Cc=new Qs,Zo=new yn,Jo=new C,tr=class extends wt{constructor(e=new ct,t=new us){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;dd.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(dd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=h.getX(g);Jo.fromBufferAttribute(u,m),pd(Jo,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Jo.fromBufferAttribute(u,g),pd(Jo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};An=class extends Wt{constructor(e,t,i,s,r,o,a,l,h){super(e,t,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let c=i[s],f=i[s+1]-c,d=(o-c)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,s=[],r=[],o=[],a=new C,l=new Pe;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),f<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(zt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Aa=class extends kn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new oe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=h-this.aY;l=f*c-d*u+this.aX,h=f*u+d*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pc=class extends Aa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};$o=new C,ec=new eh,tc=new eh,nc=new eh,Xr=class extends kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),h=$o);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:($o.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=$o),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(c),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ec.initNonuniformCatmullRom(h.x,u.x,f.x,c.x,g,_,m),tc.initNonuniformCatmullRom(h.y,u.y,f.y,c.y,g,_,m),nc.initNonuniformCatmullRom(h.z,u.z,f.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(h.x,u.x,f.x,c.x,this.tension),tc.initCatmullRom(h.y,u.y,f.y,c.y,this.tension),nc.initCatmullRom(h.z,u.z,f.z,c.z,this.tension));return i.set(ec.calc(l),tc.calc(l),nc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Lc=class extends kn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Br(e,s.x,r.x,o.x,a.x),Br(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ic=class extends kn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Br(e,s.x,r.x,o.x,a.x),Br(e,s.y,r.y,o.y,a.y),Br(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dc=class extends kn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends kn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends kn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends kn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y),Or(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(md(a,l.x,h.x,c.x,u.x),md(a,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},_x=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:Xr,CubicBezierCurve:Lc,CubicBezierCurve3:Ic,EllipseCurve:Aa,LineCurve:Dc,LineCurve3:Nc,QuadraticBezierCurve:Uc,QuadraticBezierCurve3:wa,SplineCurve:Oc}),qt=class n extends ct{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],u=[],f=[],d=[],g=0,_=[],m=i/2,p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(d,2));function M(){let v=new C,P=new C,w=0,R=(t-e)/i;for(let D=0;D<=r;D++){let x=[],S=D/r,B=S*(t-e)+e;for(let T=0;T<=s;T++){let I=T/s,L=I*l+a,U=Math.sin(L),O=Math.cos(L);P.x=B*U,P.y=-S*i+m,P.z=B*O,u.push(P.x,P.y,P.z),v.set(U,R,O).normalize(),f.push(v.x,v.y,v.z),d.push(I,1-S),x.push(g++)}_.push(x)}for(let D=0;D<s;D++)for(let x=0;x<r;x++){let S=_[x][D],B=_[x+1][D],T=_[x+1][D+1],I=_[x][D+1];c.push(S,B,I),c.push(B,T,I),w+=6}h.addGroup(p,w,0),p+=w}function y(v){let P=g,w=new oe,R=new C,D=0,x=v===!0?e:t,S=v===!0?1:-1;for(let T=1;T<=s;T++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let B=g;for(let T=0;T<=s;T++){let L=T/s*l+a,U=Math.cos(L),O=Math.sin(L);R.x=x*O,R.y=m*S,R.z=x*U,u.push(R.x,R.y,R.z),f.push(0,S,0),w.x=U*.5+.5,w.y=O*.5*S+.5,d.push(w.x,w.y),g++}for(let T=0;T<s;T++){let I=P+T,L=B+T;v===!0?c.push(L,L+1,I):c.push(L+1,L,I),D+=3}h.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ra=class n extends qt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bc=class n extends ct{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),h(i),c(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new C,v=new C,P=new C;for(let w=0;w<t.length;w+=3)d(t[w+0],y),d(t[w+1],v),d(t[w+2],P),l(y,v,P,M)}function l(M,y,v,P){let w=P+1,R=[];for(let D=0;D<=w;D++){R[D]=[];let x=M.clone().lerp(v,D/w),S=y.clone().lerp(v,D/w),B=w-D;for(let T=0;T<=B;T++)T===0&&D===w?R[D][T]=x:R[D][T]=x.clone().lerp(S,T/B)}for(let D=0;D<w;D++)for(let x=0;x<2*(w-D)-1;x++){let S=Math.floor(x/2);x%2===0?(f(R[D][S+1]),f(R[D+1][S]),f(R[D][S])):(f(R[D][S+1]),f(R[D+1][S+1]),f(R[D+1][S]))}}function h(M){let y=new C;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(M),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function c(){let M=new C;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let v=m(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],v=o[M+2],P=o[M+4],w=Math.max(y,v,P),R=Math.min(y,v,P);w>.9&&R<.1&&(y<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),P<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,y){let v=M*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){let M=new C,y=new C,v=new C,P=new C,w=new oe,R=new oe,D=new oe;for(let x=0,S=0;x<r.length;x+=9,S+=6){M.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),w.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),P.copy(M).add(y).add(v).divideScalar(3);let B=m(P);_(w,S+0,M,B),_(R,S+2,y,B),_(D,S+4,v,B)}}function _(M,y,v,P){P<0&&M.x===1&&(o[y]=M.x-1),v.x===0&&v.z===0&&(o[y]=P/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},jo=new C,Qo=new C,ic=new C,ea=new rs,Gn=class extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Xs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(h[0]=o.getX(g),h[1]=o.getX(g+1),h[2]=o.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);let{a:_,b:m,c:p}=ea;if(_.fromBufferAttribute(a,h[0]),m.fromBufferAttribute(a,h[1]),p.fromBufferAttribute(a,h[2]),ea.getNormal(ic),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let y=(M+1)%3,v=u[M],P=u[y],w=ea[c[M]],R=ea[c[y]],D=`${v}_${P}`,x=`${P}_${v}`;x in f&&f[x]?(ic.dot(f[x].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(R.x,R.y,R.z)),f[x]=null):D in f||(f[D]={index0:h[M],index1:h[y],normal:ic.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:m}=f[g];jo.fromBufferAttribute(a,_),Qo.fromBufferAttribute(a,m),d.push(jo.x,jo.y,jo.z),d.push(Qo.x,Qo.y,Qo.z)}this.setAttribute("position",new je(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},qr=class n extends Bc{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},jn=class n extends ct{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,c=[],u=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let M=[],y=p/i,v=0;p===0&&o===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){let w=P/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-y),M.push(h++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let y=c[p][M+1],v=c[p][M],P=c[p+1][M],w=c[p+1][M+1];(p!==0||o>0)&&d.push(y,v,w),(p!==i-1||l<Math.PI)&&d.push(v,P,w)}this.setIndex(d),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Yr=class n extends ct{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],c=new C,u=new C,f=new C;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),c.x=e*Math.cos(_),c.y=e*Math.sin(_),f.subVectors(u,c).normalize(),l.push(f.x,f.y,f.z),h.push(g/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ca=class n extends ct{constructor(e=new wa(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,h=new oe,c=new C,u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(d,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),M(),p()}function m(y){c=e.getPointAt(y/t,c);let v=o.normals[y],P=o.binormals[y];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,D=Math.sin(R),x=-Math.cos(R);l.x=x*v.x+D*P.x,l.y=x*v.y+D*P.y,l.z=x*v.z+D*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let P=(s+1)*(y-1)+(v-1),w=(s+1)*y+(v-1),R=(s+1)*y+v,D=(s+1)*(y-1)+v;g.push(P,w,D),g.push(w,R,D)}}function M(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)h.x=y/t,h.y=v/s,d.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new _x[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},nr=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wn=class extends nr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Hi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends Hi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uf,endingEnd:uf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ff:r=e,a=2*t-i;break;case df:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ff:o=e,l=2*i-t;break;case df:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let h=(i-t)*.5,c=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let P=0;P!==a;++P)r[P]=p*o[c+P]+M*o[h+P]+y*o[l+P]+v*o[u+P];return r}},Hc=class extends Hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=(i-t)/(s-t),u=1-c;for(let f=0;f!==a;++f)r[f]=o[h+f]*u+o[l+f]*c;return r}},zc=class extends Hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case cs:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return cs;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&yx(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Rl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=e[a],c=e[a+1];if(h!==c&&(a!==1||h!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=cs;zi=class extends Rn{};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=$s;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;Pa=class extends Rn{};Pa.prototype.ValueTypeName="color";mi=class extends Rn{};mi.prototype.ValueTypeName="number";kc=class extends Hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),h=e*a;for(let c=h+a;h!==c;h+=4)_n.slerpFlat(r,0,o,h-a,o,h,l);return r}},Qn=class extends Rn{InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};Qn.prototype.ValueTypeName="quaternion";Qn.prototype.DefaultInterpolation=cs;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;ki=class extends Rn{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=$s;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;gi=class extends Rn{};gi.prototype.ValueTypeName="vector";La=class{constructor(e,t=-1,i,s=Xm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(vx(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Rn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],h=[];l.push((a+r-1)%r,a,(a+1)%r),h.push(0,1,0);let c=Mx(l);l=gd(l,1,c),h=gd(h,1,c),!s&&l[0]===0&&(l.push(r),h.push(h[0])),o.push(new mi(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let h=e[a],c=h.name.match(r);if(c&&c.length>1){let u=c[1],f=s[u];f||(s[u]=f=[]),f.push(h)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,d,g,_){if(d.length!==0){let m=[],p=[];Xd(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,h=e.hierarchy||[];for(let u=0;u<h.length;u++){let f=h[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let M=0;M!==f[g].morphTargets.length;++M){let y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new mi(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{let d=".bones["+t[u].name+"]";i(gi,d+".position",f,"pos",s),i(Qn,d+".quaternion",f,"rot",s),i(gi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Ii={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Gc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=h.length;u<f;u+=2){let d=h[u],g=h[u+1];if(d.global&&(d.lastIndex=0),d.test(c))return g}return null}}},Ex=new Gc,_i=class{constructor(e){this.manager=e!==void 0?e:Ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_i.DEFAULT_MATERIAL_NAME="__DEFAULT";hi={},Vc=class extends Error{constructor(e,t){super(e),this.response=t}},Kr=class extends _i{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:i,onError:s});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let c=hi[e],u=h.body.getReader(),f=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,R=c.length;w<R;w++){let D=c[w];D.onProgress&&D.onProgress(P)}p.enqueue(v),M()}})}}});return new Response(m)}else throw new Vc(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return h.json();default:if(a===void 0)return h.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return h.arrayBuffer().then(g=>d.decode(g))}}}).then(h=>{Ii.add(e,h);let c=hi[e];delete hi[e];for(let u=0,f=c.length;u<f;u++){let d=c[u];d.onLoad&&d.onLoad(h)}}).catch(h=>{let c=hi[e];if(c===void 0)throw this.manager.itemError(e),h;delete hi[e];for(let u=0,f=c.length;u<f;u++){let d=c[u];d.onError&&d.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Wc=class extends _i{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ii.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Hr("img");function l(){c(),Ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(u){c(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},ir=class extends _i{constructor(e){super(e)}load(e,t,i,s){let r=new Wt,o=new Wc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Zr=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},sc=new Pe,_d=new C,yd=new C,Jr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yd),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xc=class extends Jr{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ia=class extends Zr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Md=new Pe,Ir=new C,rc=new C,qc=class extends Jr{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ir.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ir),rc.copy(i.position),rc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rc),i.updateMatrixWorld(),s.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Md.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md)}},Da=class extends Zr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yc=class extends Jr{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Na=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Yc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Gi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ua=class extends _i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ii.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Ii.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(e,l),r.manager.itemStart(e)}},Oa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=xd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};th="\\[\\]\\.:\\/",Sx=new RegExp("["+th+"]","g"),nh="[^"+th+"]",bx="[^"+th.replace("\\.","")+"]",Tx=/((?:WC+[\/:])*)/.source.replace("WC",nh),Ax=/(WCOD+)?/.source.replace("WCOD",bx),wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),Rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),Cx=new RegExp("^"+Tx+Ax+wx+Rx+"$"),Px=["material","materials","bones","map"],Kc=class{constructor(e,t,i){let s=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sx,"")}static parseTrackName(e){let t=Cx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Px.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[s];if(o===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Kc;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Fv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var ka,ih=Dn(()=>{ka={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var Vn,Ix,sh,Dx,or,jr=Dn(()=>{ei();Vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ix=new Bi(-1,1,1,-1,0,1),sh=class extends ct{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},Dx=new sh,or=class{constructor(e){this._mesh=new W(Dx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ix)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Ga,qd=Dn(()=>{ei();jr();Ga=class extends Vn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sr.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new or(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Qr,Va,rh=Dn(()=>{jr();Qr=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Va=class extends Vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Wa,Yd=Dn(()=>{ei();ih();qd();rh();rh();Wa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new oe);this._width=i.width,this._height=i.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ga(ka),this.copyPass.material.blending=Zn,this.clock=new Oa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qr!==void 0&&(o instanceof Qr?i=!0:o instanceof Va&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Xa,Kd=Dn(()=>{ei();jr();Xa=class extends Vn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var Zd,Jd=Dn(()=>{ei();Zd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var ar,$d=Dn(()=>{ei();jr();ih();Jd();ar=class n extends Vn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new _e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new on(r,o,{type:zn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new on(r,o,{type:zn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Zd;this.highPassUniforms=sr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=ka;this.copyUniforms=sr.clone(c.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _e,this.oldClearAlpha=1,this.basic=new me,this.fsQuad=new or(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ar.BlurDirectionX=new oe(1,0);ar.BlurDirectionY=new oe(0,1)});function fn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ct,h=0;for(let c=0;c<n.length;++c){let u=n[c],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,c),h+=d}}if(t){let c=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+c);c+=n[f].attributes.position.count}l.setIndex(u)}for(let c in r){let u=jd(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in o){let u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[c].length;++_)d.push(o[c][_][f]);let g=jd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function jd(n){let e,t,i,s=-1,r=0;for(let h=0;h<n.length;++h){let c=n[h];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.array.length}let o=new e(r),a=0;for(let h=0;h<n.length;++h)o.set(n[h].array,a),a+=n[h].array.length;let l=new _t(o,t,i);return s!==void 0&&(l.gpuType=s),l}function oh(n,e){if(e===Ld)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===$r||e===Fa){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===$r)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var ah=Dn(()=>{ei()});function Nx(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Bx(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new nr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),n.DefaultMaterial}function fs(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fx(n,e,t){let i=!1,s=!1,r=!1;for(let h=0,c=e.length;h<c;h++){let u=e[h];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let h=0,c=e.length;h<c;h++){let u=e[h];if(i){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(h){let c=h[0],u=h[1],f=h[2];return i&&(n.morphAttributes.position=c),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Hx(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zx(n){let e,t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hh(t.attributes):e=n.indices+":"+hh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+hh(n.targets[i]);return e}function hh(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Nh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kx(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function Vx(n,e,t){let i=e.attributes,s=new vt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(h[0],h[1],h[2])),a.normalized){let c=Nh(lr[a.componentType]);s.min.multiplyScalar(c),s.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let h=0,c=r.length;h<c;h++){let u=r[h];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=Nh(lr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new yn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function np(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Dh[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==It&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Wi(n,e),Vx(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Fx(n,e.targets,t):n})}var qa,Ze,uh,fh,dh,ph,mh,gh,_h,yh,Mh,xh,vh,Eh,Sh,bh,Th,Ah,wh,ip,eo,Qd,Rh,Ch,Ph,Lh,Ya,Ux,Ih,Cn,lr,ep,tp,lh,Dh,Vi,Ox,ch,Gx,Uh,sp=Dn(()=>{ei();ah();qa=class extends _i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ph(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new wh(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let h=Gi.extractUrlBase(e);o=Gi.resolveURL(h,this.path)}else o=Gi.extractUrlBase(e);this.manager.itemStart(e);let a=function(h){s?s(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Kr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{r.parse(h,o,function(c){t(c),r.manager.itemEnd(e)},a)}catch(c){a(c)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ip){try{o[Ze.KHR_BINARY_GLTF]=new Rh(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new Uh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let u=this.pluginCallbacks[c](h);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){let u=r.extensionsUsed[c],f=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new fh;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ch(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new Ph;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new Lh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}h.setExtensions(o),h.setPlugins(a),h.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uh=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],h,c=new _e(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],It);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Na(c),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Da(c),h.distance=u;break;case"spot":h=new Ia(c),h.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Wi(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},fh=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return me}extendParams(e,t,i){let s=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(s)}},dh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ph=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(a,a)}return Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},gh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,nt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],It),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},xh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,nt)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},bh=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let h=i.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Th=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let h=i.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ah=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,h=s.byteLength||0,c=s.count,u=s.byteStride,f=new Uint8Array(a,l,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(c*u);return o.decodeGltfBuffer(new Uint8Array(d),c,u,f,s.mode,s.filter),d})})}else return null}},wh=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let h of s.primitives)if(h.mode!==Cn.TRIANGLES&&h.mode!==Cn.TRIANGLE_STRIP&&h.mode!==Cn.TRIANGLE_FAN&&h.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let h in o)a.push(this.parser.getDependency("accessor",o[h]).then(c=>(l[h]=c,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(h=>{let c=h.pop(),u=c.isGroup?c.children:[c],f=h[0].count,d=[];for(let g of u){let _=new Pe,m=new C,p=new _n,M=new C(1,1,1),y=new ba(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(m,p,M));for(let v in l)if(v==="_COLOR_0"){let P=l[v];y.instanceColor=new hs(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);wt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}},ip="glTF",eo=12,Qd={JSON:1313821514,BIN:5130562},Rh=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,eo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ip)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-eo,r=new DataView(e,eo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Qd.JSON){let h=new Uint8Array(e,eo+o,a);this.content=i.decode(h)}else if(l===Qd.BIN){let h=eo+o;this.body=e.slice(h,h+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ch=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},h={};for(let c in o){let u=Dh[c]||c.toLowerCase();a[u]=o[c]}for(let c in e.attributes){let u=Dh[c]||c.toLowerCase();if(o[c]!==void 0){let f=i.accessors[e.attributes[c]],d=lr[f.componentType];h[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(u,f){s.decodeDracoFile(c,function(d){for(let g in d.attributes){let _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(d)},a,h,It,f)})})}},Ph=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Lh=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},Ya=class extends Hi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,c=s-t,u=(i-t)/c,f=u*u,d=f*u,g=e*h,_=g-h,m=-2*d+3*f,p=d-f,M=1-m,y=p-f+u;for(let v=0;v!==a;v++){let P=o[_+v+a],w=o[_+v+l]*c,R=o[g+v+a],D=o[g+v]*c;r[v]=M*P+y*w+m*R+p*D}return r}},Ux=new _n,Ih=class extends Ya{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return Ux.fromArray(r).normalize().toArray(r),r}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ep={9728:At,9729:Vt,9984:ia,9985:Zc,9986:Ni,9987:Hn},tp={33071:rn,33648:Fr,10497:Fn},lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ox={CUBICSPLINE:void 0,LINEAR:cs,STEP:$s},ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};Gx=new Pe,Uh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new ir(this.options.manager):this.textureLoader=new Ua(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return fs(r,a,s),Wi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[h,c]of o.children.entries())r(c,a.children[h])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Gi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=lh[s.type],a=lr[s.componentType],l=s.normalized===!0,h=new a(s.count*o);return Promise.resolve(new _t(h,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=lh[s.type],h=lr[s.componentType],c=h.BYTES_PER_ELEMENT,u=c*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(d&&d!==u){let p=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(M);y||(_=new h(a,p*d,s.count*d/c),y=new Gr(_,d/c),t.cache.add(M,y)),m=new Vr(y,l,f%d/c,g)}else a===null?_=new h(s.count*l):_=new h(a,f,s.count*l),m=new _t(_,l,g);if(s.sparse!==void 0){let p=lh.SCALAR,M=lr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,P=new M(o[1],y,s.sparse.count*p),w=new h(o[2],v,s.sparse.count*l);a!==null&&(m=new _t(m.array.slice(),m.itemSize,m.normalized));for(let R=0,D=P.length;R<D;R++){let x=P[R];if(m.setX(x,w[R*l]),l>=2&&m.setY(x,w[R*l+1]),l>=3&&m.setZ(x,w[R*l+2]),l>=4&&m.setW(x,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let h=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return c.magFilter=ep[f.magFilter]||Vt,c.minFilter=ep[f.minFilter]||Hn,c.wrapS=tp[f.wrapS]||Fn,c.wrapT=tp[f.wrapT]||Fn,s.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",h=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){h=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let c=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Wt(_);m.needsUpdate=!0,f(m)}),t.load(Gi.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return h===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||kx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=c,c}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new us,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new $n,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return nr}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},h=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let u=s[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),h.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],It),a.opacity=f[3]}u.baseColorTexture!==void 0&&h.push(t.assignTexture(a,"map",u.baseColorTexture,nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gt);let c=r.alphaMode||ch.OPAQUE;if(c===ch.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===ch.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==me&&(h.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==me&&(h.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==me){let u=r.emissiveFactor;a.emissive=new _e().setRGB(u[0],u[1],u[2],It)}return r.emissiveTexture!==void 0&&o!==me&&h.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(h).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&fs(s,u,r),u})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return np(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let h=e[a],c=zx(h),u=s[c];if(u)o.push(u.promise);else{let f;h.extensions&&h.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(h):f=np(new ct,h,t),s[c]={primitive:h,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,h=o.length;l<h;l++){let c=o[l].material===void 0?Bx(this.cache):this.getDependency("material",o[l].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let h=l.slice(0,l.length-1),c=l[l.length-1],u=[];for(let d=0,g=c.length;d<g;d++){let _=c[d],m=o[d],p,M=h[d];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ea(_,M):new W(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Cn.TRIANGLE_STRIP?p.geometry=oh(p.geometry,Fa):m.mode===Cn.TRIANGLE_FAN&&(p.geometry=oh(p.geometry,$r));else if(m.mode===Cn.LINES)p=new an(_,M);else if(m.mode===Cn.LINE_STRIP)p=new Fi(_,M);else if(m.mode===Cn.LINE_LOOP)p=new Ta(_,M);else if(m.mode===Cn.POINTS)p=new tr(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Hx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Wi(p,r),m.extensions&&fs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&fs(s,u[0],r),u[0];let f=new lt;r.extensions&&fs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Lt(Ud.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Bi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let h=0,c=o.length;h<c;h++){let u=o[h];if(u){a.push(u);let f=new Pe;r!==null&&f.fromArray(r.array,h*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Sa(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],h=[],c=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),h.push(g),c.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(c)]).then(function(u){let f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let M=0,y=f.length;M<y;M++){let v=f[M],P=d[M],w=g[M],R=_[M],D=m[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let x=i._createAnimationTracks(v,P,w,R,D);if(x)for(let S=0;S<x.length;S++)p.push(x[S])}return new La(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,h=s.weights.length;l<h;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let h=0,c=a.length;h<c;h++)o.push(i.getDependency("node",a[h]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(h){let c=h[0],u=h[1],f=h[2];f!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Gx)});for(let d=0,g=u.length;d<g;d++)c.add(u[d]);return c})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(h){return s._getNodeRef(s.cameraCache,r.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)}),this.nodeCache[e]=Promise.all(a).then(function(h){let c;if(r.isBone===!0?c=new Wr:h.length>1?c=new lt:h.length===1?c=h[0]:c=new wt,c!==h[0])for(let u=0,f=h.length;u<f;u++)c.add(h[u]);if(r.name&&(c.userData.name=r.name,c.name=o),Wi(c,r),r.extensions&&fs(i,c,r),r.matrix!==void 0){let u=new Pe;u.fromArray(r.matrix),c.applyMatrix4(u)}else r.translation!==void 0&&c.position.fromArray(r.translation),r.rotation!==void 0&&c.quaternion.fromArray(r.rotation),r.scale!==void 0&&c.scale.fromArray(r.scale);return s.associations.has(c)||s.associations.set(c,{}),s.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new lt;i.name&&(r.name=s.createUniqueName(i.name)),Wi(r,i),i.extensions&&fs(t,r,i);let o=i.nodes||[],a=[];for(let l=0,h=o.length;l<h;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let c=0,u=l.length;c<u;c++)r.add(l[c]);let h=c=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Mn||f instanceof Wt)&&u.set(f,d);return c.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=h(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Vi[r.path]===Vi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let h;switch(Vi[r.path]){case Vi.weights:h=mi;break;case Vi.rotation:h=Qn;break;case Vi.position:case Vi.scale:h=gi;break;default:i.itemSize===1?h=mi:h=gi;break}let c=s.interpolation!==void 0?Ox[s.interpolation]:cs,u=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){let g=new h(l[f]+"."+Vi[r.path],t.array,u,c);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Nh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Qn?Ih:Ya;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Ov=tm(()=>{ei();Yd();Kd();$d();sp();ah();var to=Math.PI/180,Wx=656928,Kt=2814207,hn=16722902,Xx=16769162;function Mp(n){return{r:n>>16&255,g:n>>8&255,b:n&255}}var Xn=[{name:"VICE RUNWAY",music:"vice-runway.mp3",sun:{halo:["rgba(255,178,96,0.34)","rgba(255,96,112,0.13)","rgba(255,60,150,0)"],disc:["#ffcf72","#ff9a3e","#ff5a5f","#ff2f8e","#d81ea0"]},fog:7218768,glow:16731558,haze:16747158,skyA:[[24,12,48],[50,22,70],[92,34,86],[130,52,82],[156,82,66],[74,36,56],[24,13,36]],skyB:[[46,23,86],[90,40,112],[160,58,126],[206,90,112],[222,136,94],[118,58,86],[38,21,58]]},{name:"TURBO KASKADE",music:"turbo-kaskade.mp3",sun:{halo:["rgba(170,195,255,0.30)","rgba(90,130,220,0.12)","rgba(60,90,180,0)"],disc:["#eef4ff","#cdd9f2","#a6bce6","#8098d0","#5f78ba"]},fog:1450058,glow:4881151,haze:6982352,skyA:[[8,12,36],[16,24,60],[28,42,88],[44,64,116],[70,98,150],[40,54,96],[12,16,40]],skyB:[[20,28,68],[34,50,100],[52,78,136],[80,112,168],[116,154,198],[66,90,142],[20,26,62]]},{name:"POISON HEARTBEAT",music:"poison-heartbeat.mp3",sun:{halo:["rgba(150,255,120,0.32)","rgba(60,200,90,0.13)","rgba(30,150,80,0)"],disc:["#eaffb0","#a8ff5e","#4ef05a","#1fc96a","#0d8a5a"]},fog:1456159,glow:5504874,haze:8048746,skyA:[[6,16,20],[10,30,32],[16,48,40],[26,70,48],[44,100,56],[22,52,40],[8,18,18]],skyB:[[14,36,34],[24,62,52],[40,96,64],[64,132,72],[108,176,84],[52,102,64],[16,34,30]]}],Ti=new va;Ti.fog=new xa(7218768,6e-5);var it=new lt;it.visible=!1;Ti.add(it);var Rt=new Lt(66,innerWidth/innerHeight,2.5,3e4),bi=new kr({antialias:!1,alpha:!0}),yo=Math.min(16,bi.capabilities.getMaxAnisotropy());bi.info.autoReset=!1;var rp=0;document.body.appendChild(bi.domElement);var op=1.85,ho=new Wa(bi);ho.addPass(new Xa(Ti,Rt));var uo=new ar(new oe(1,1),.9,.55,.18);ho.addPass(uo);function xp(){Rt.aspect=innerWidth/innerHeight,Rt.updateProjectionMatrix();let n=Math.ceil(innerWidth/op),e=Math.ceil(innerHeight/op);bi.setSize(n,e,!1),ho.setSize(n,e),uo.setSize(Math.ceil(n/3),Math.ceil(e/3));let t=bi.domElement;t.style.width=innerWidth+"px",t.style.height=innerHeight+"px",t.style.imageRendering="pixelated"}xp();addEventListener("resize",xp);var ap={},Zi=n=>ap[n]||(ap[n]=new $n({color:n})),qx=new me({color:Wx,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2});function vp(){return qx}function ul(n,e){let t=n.clone(!0);return t.traverse(i=>{i.isMesh&&(i.material=vp(),i.add(new an(new Gn(i.geometry,25),Zi(e))))}),t}function Yx(n,e,t){n.updateMatrixWorld(!0);let i=new vt().setFromObject(n),s=new C;i.getSize(s),s.y>.001&&n.scale.setScalar(e/s.y),n.updateMatrixWorld(!0);let r=new vt().setFromObject(n);n.position.y=t-r.min.y}var Xh=new Ye(1.9,1.3),fl=16765514;function Kx(n,e,t,i,s,r,o,a,l,h,c){let f=h||10,d=c||4,g=[],_=[{rot:0,o:r+.95,a:[n+3,i-3]},{rot:Math.PI,o:t-.95,a:[n+3,i-3]},{rot:Math.PI/2,o:i+.95,a:[t+3,r-3]},{rot:-Math.PI/2,o:n-.95,a:[t+3,r-3]}],m=typeof a=="number"&&a<=1?a:.5;for(let M of _)for(let y=e+f+5;y<s-4;y+=f){let v=Math.min(1,m*(.35+Math.random()*1.5));for(let P=M.a[0]+d*.5;P<M.a[1];P+=d){if(Math.random()>v)continue;let w=Xh.clone(),R=new Pe;M.rot===0?R.makeTranslation(P,y,M.o):(R.makeRotationY(M.rot),R.setPosition(M.rot===Math.PI?P:M.o,y,M.rot===Math.PI?M.o:P)),w.applyMatrix4(R),g.push(w)}}g.length||g.push(Xh.clone().translate(0,e-999,0));let p=fn(g);return g.forEach(M=>M.dispose()),new W(p,new me({color:fl,transparent:!0,opacity:.8,depthWrite:!1,side:gt,fog:!l}))}function Ep(n){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i=t.createRadialGradient(128,128,44,128,128,128);i.addColorStop(0,n.halo[0]),i.addColorStop(.5,n.halo[1]),i.addColorStop(1,n.halo[2]),t.fillStyle=i,t.fillRect(0,0,256,256);let s=t.createLinearGradient(0,26,0,230);s.addColorStop(0,n.disc[0]),s.addColorStop(.34,n.disc[1]),s.addColorStop(.62,n.disc[2]),s.addColorStop(.85,n.disc[3]),s.addColorStop(1,n.disc[4]),t.fillStyle=s,t.beginPath(),t.arc(128,128,104,0,7),t.fill(),t.globalCompositeOperation="destination-out";for(let o=0;o<4;o++)t.fillRect(0,102+o*7,256,3);let r=t.createLinearGradient(0,127,0,139);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=r,t.fillRect(0,127,256,129),new An(e)}var xi=new W(new Ye(6400,6400),new me({map:Ep(Xn[0].sun),transparent:!0,depthWrite:!1,fog:!1}));xi.position.set(0,-470,-16800);Ti.add(xi);function Sp(n){let{r:e,g:t,b:i}=Mp(n),s=document.createElement("canvas");s.width=4,s.height=128;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,0,128);return o.addColorStop(0,`rgba(${e},${t},${i},0)`),o.addColorStop(.5,`rgba(${e},${t},${i},0.5)`),o.addColorStop(1,`rgba(${e},${t},${i},0)`),r.fillStyle=o,r.fillRect(0,0,4,128),new An(s)}var ao=new W(new Ye(6e4,1500),new me({map:Sp(Xn[0].haze),transparent:!0,depthWrite:!1,fog:!1,blending:kt}));ao.position.set(0,-10,-6e3);Ti.add(ao);function Ss(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");s.imageSmoothingEnabled=!1,t(s,n,e);let r=new An(i);return r.magFilter=At,r.minFilter=At,r.colorSpace=nt,r.wrapS=r.wrapT=Fn,r}var Ot=new me({color:656918}),ot=new me({color:1314854}),lp=[{base:"#140b28",slab:"#1d1236",mull:"#0d0719",win:"#ffd24a",win2:"#7adcff",acc:"#ff2bd6",shop:["#ff9a3c","#ff2bd6","#2af0ff","#ffe08a"]},{base:"#0e0d2c",slab:"#171a3e",mull:"#080716",win:"#ffe08a",win2:"#9adcff",acc:"#2af0ff",shop:["#ffd24a","#ff5a5f","#2af0ff","#c0ff5e"]},{base:"#190a20",slab:"#241031",mull:"#0e0614",win:"#ffcf5e",win2:"#ff8a7a",acc:"#7b3ff2",shop:["#ff9a3c","#ff2bd6","#ffe08a","#7adcff"]},{base:"#101226",slab:"#1a1e38",mull:"#090a16",win:"#f5d98c",win2:"#8ac8f0",acc:"#ff5a8f",shop:["#ffb45e","#ff4a7c","#4adcff","#ffe08a"]},{base:"#0d1420",slab:"#152238",mull:"#070b12",win:"#ffe6a0",win2:"#6ae0d0",acc:"#2af0ff",shop:["#4adcff","#ffd24a","#ff2bd6","#c0ff5e"]},{base:"#1c0d16",slab:"#2a1522",mull:"#100710",win:"#ffc86a",win2:"#ff7ab0",acc:"#ff2b5c",shop:["#ff5a5f","#ffb45e","#ff2bd6","#ffe08a"]},{base:"#12102a",slab:"#1b1a40",mull:"#0a0918",win:"#e8d48a",win2:"#a0b8ff",acc:"#7b3ff2",shop:["#9a6aff","#2af0ff","#ffd24a","#ff4a7c"]},{base:"#0a1616",slab:"#122424",mull:"#060e0e",win:"#d8ffb0",win2:"#7adcff",acc:"#c0ff5e",shop:["#c0ff5e","#2af0ff","#ffe08a","#ff9a3c"]}];function Zx(n,e,t,i,s){if(s>=11)return Jx(n,e,t,i,s);n.fillStyle=i.base,n.fillRect(0,0,e,t);let r=Math.min(16,t*.08|0)+6,o=6+(Math.random()*6|0),a=t-r;if(s===1){n.fillStyle="rgba(120,180,255,0.05)",n.fillRect(0,0,e,t);for(let h=0;h<e;h+=3)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(h,0,1,t);let l=0;for(let h=o;h<a-6;h+=6){if(l<=0&&Math.random()<.16&&(l=1+(Math.random()*3|0)),l>0){l--,n.fillStyle=Math.random()<.7?i.win:i.win2,n.globalAlpha=.75,n.fillRect(1,h+1,e-2,4),n.globalAlpha=1;for(let c=0;c<e;c+=3)n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(c,h+1,1,4)}else if(n.fillStyle="rgba(10,16,40,0.55)",n.fillRect(1,h+1,e-2,4),Math.random()<.2){n.fillStyle=i.win2,n.globalAlpha=.5;let c=Math.random()*e*.7|0;n.fillRect(c,h+1,3+Math.random()*8|0,4),n.globalAlpha=1}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,h+5,e,1)}n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(0,0,e,o),n.fillStyle=i.acc,n.fillRect(0,0,e,1),n.fillStyle="#0a0a18",n.fillRect(0,a,e,r),n.fillStyle=i.win2,n.globalAlpha=.55,n.fillRect(2,a+1,e-4,r-3),n.globalAlpha=1;for(let h=2;h<e-2;h+=5)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(h,a+1,1,r-3)}else if(s===2){for(let h=o;h<a-7;h+=7){n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,h+7-1,e,1);for(let c=2;c<e-4;c+=5+(Math.random()*3|0)){let u=Math.random()<.34;n.fillStyle=u?Math.random()<.7?i.win:Math.random()<.85?"#aef2ff":i.acc:"rgba(0,0,0,0.55)",n.fillRect(c,h+2,2+(Math.random()*2|0),3+(Math.random()*2|0)),Math.random()<.16&&(n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(c,h+7-3,4,2)),Math.random()<.05&&(n.fillStyle=i.shop[Math.random()*i.shop.length|0],n.fillRect(c+1,h+1,1,1))}}n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(0,0,e,o),n.fillStyle="#05030c",n.fillRect(0,a,e,r);for(let h=1;h<e-3;){let c=3+(Math.random()*6|0);n.fillStyle=i.shop[Math.random()*i.shop.length|0],n.globalAlpha=.8,n.fillRect(h,a+2,Math.min(c,e-h-2),r-4),n.globalAlpha=1,h+=c+1+(Math.random()*3|0)}}else if(s===3){n.fillStyle="rgba(255,255,255,0.03)";for(let l=0;l<t;l+=24)n.fillRect(0,l,e,12);for(let l=0;l<3;l++){let h=4+Math.random()*(e-8)|0;n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(h,0,2,t),n.fillStyle="rgba(255,255,255,0.08)",n.fillRect(h+2,0,1,t)}for(let l=o+6;l<a-10;l+=26){let h=4+Math.random()*Math.max(4,e-20)|0;for(let c=0;c<4;c++)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(h,l+c*3,12,2)}for(let l=o+14;l<a-8;l+=34)if(Math.random()<.7){let h=3+Math.random()*Math.max(4,e-12)|0;n.fillStyle=Math.random()<.6?i.win2:i.win,n.globalAlpha=.8,n.fillRect(h,l,7,5),n.globalAlpha=1}n.fillStyle="#0a0808",n.fillRect(0,a,e,r);for(let l=0;l<e;l+=6)n.fillStyle=l/6%2?"#e6c02a":"#141414",n.fillRect(l,a+r-4,6,3);n.fillStyle="#ff2b4c",n.globalAlpha=.8;for(let l=o+8;l<a;l+=40)n.fillRect(e-4,l,2,2);n.globalAlpha=1}else if(s===4){for(let f=o;f<a-8;f+=8){n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,f+8-1,e,1);for(let d=2;d<e-4;d+=4)Math.random()<.18&&(n.fillStyle=i.win,n.fillRect(d,f+2,3,4))}let h=t*.22|0,c=t*.4|0,u=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0];if(n.fillStyle="#0b0518",n.fillRect(1,h,e-2,c),n.strokeStyle=u,n.lineWidth=1,n.strokeRect(1.5,h+.5,e-3,c-1),Math.random()<.5){n.fillStyle="#ff9a3c",n.beginPath(),n.arc(e/2,h+c*.42,Math.min(e,c)*.3,0,7),n.fill(),n.fillStyle="#0b0518";for(let f=0;f<4;f++)n.fillRect(2,h+c*.42+f*4,e-4,2);n.fillStyle=u,n.font="8px monospace",n.textBaseline="top",n.fillText(ni[Math.random()*ni.length|0],3,h+c-11)}else for(let f=h+4;f<h+c-8;f+=9)for(let d=4;d<e-8;d+=8)Math.random()<.75&&(n.fillStyle=Math.random()<.6?u:"#ffd24a",n.fillRect(d,f,5,5),Math.random()<.5&&n.fillRect(d+2,f+5,2,2));n.fillStyle="#05030c",n.fillRect(0,a,e,r);for(let f=1;f<e-3;){let d=4+(Math.random()*8|0);n.fillStyle=i.shop[Math.random()*i.shop.length|0],n.globalAlpha=.75,n.fillRect(f,a+2,Math.min(d,e-f-2),r-4),n.globalAlpha=1,f+=d+2+(Math.random()*4|0)}}else if(s===6){n.fillStyle="#070b18",n.fillRect(0,0,e,t),n.globalAlpha=.3,n.strokeStyle="#2af0ff",n.lineWidth=1;for(let l=0;l<t;l+=8)n.beginPath(),n.moveTo(0,l+.5),n.lineTo(e,l+.5),n.stroke();for(let l=0;l<e;l+=8)n.beginPath(),n.moveTo(l+.5,0),n.lineTo(l+.5,t),n.stroke();n.globalAlpha=1;for(let l=0;l<t/12;l++){let h=(Math.random()*(e/8)|0)*8+1,c=(Math.random()*(t/8)|0)*8+1;n.fillStyle=Math.random()<.7?"#2af0ff":"#ff2bd6",n.globalAlpha=.45+Math.random()*.45,n.fillRect(h,c,6,6),n.globalAlpha=1}n.fillStyle="#05030c",n.fillRect(0,a,e,r);for(let l=1;l<e-3;){let h=4+(Math.random()*7|0);n.fillStyle=i.shop[Math.random()*i.shop.length|0],n.globalAlpha=.75,n.fillRect(l,a+2,Math.min(h,e-l-2),r-4),n.globalAlpha=1,l+=h+2+(Math.random()*4|0)}}else if(s===7){n.fillStyle="#05060e",n.fillRect(0,0,e,t);for(let c=0;c<e;c+=4)n.fillStyle="rgba(255,255,255,0.025)",n.fillRect(c,0,1,t);n.fillStyle=i.acc,n.globalAlpha=.8,n.fillRect(e*.5|0,o,1,t-o-r),n.globalAlpha=1;let l=t*.2|0,h=Math.max(6,Math.min(e*.28,20))|0;n.strokeStyle=i.acc,n.lineWidth=2,n.beginPath(),n.arc(e/2,l,h,0,7),n.stroke(),Math.random()<.5&&(n.fillStyle=i.acc,n.globalAlpha=.7,n.fillRect(e/2-h*.4,l-1.5,h*.8,3),n.globalAlpha=1);for(let c=o;c<a;c+=10)Math.random()<.14&&(n.fillStyle=i.win2,n.globalAlpha=.45,n.fillRect(2,c,e-4,1),n.globalAlpha=1);n.fillStyle="#04040a",n.fillRect(0,a,e,r),n.fillStyle=i.acc,n.globalAlpha=.8,n.fillRect(e/2-2,a+2,4,r-4),n.globalAlpha=1}else if(s===8){for(let l=o;l<a;l+=3)n.fillStyle=(l/3|0)%2?"#ffd24a":"#ff2bd6",n.fillRect(1,l,2,2),n.fillRect(e-3,l,2,2);for(let l=o+6;l<a-14;l+=18+(Math.random()*10|0)){let h=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.random()*4|0];n.fillStyle="#0a0512",n.fillRect(4,l,e-8,10),n.strokeStyle=h,n.lineWidth=1,n.strokeRect(4.5,l+.5,e-9,9),n.fillStyle=h,n.font="8px monospace",n.textBaseline="top",n.fillText(ni[Math.random()*ni.length|0],7,l+1),n.fillStyle="rgba(0,0,0,0.55)";for(let c=l+12;c<Math.min(l+17,a-2);c+=5)for(let u=4;u<e-6;u+=4)n.fillRect(u,c,3,3)}n.fillStyle="#05030c",n.fillRect(0,a,e,r);for(let l=1;l<e-3;){let h=3+(Math.random()*6|0);n.fillStyle=i.shop[Math.random()*i.shop.length|0],n.globalAlpha=.85,n.fillRect(l,a+2,Math.min(h,e-l-2),r-4),n.globalAlpha=1,l+=h+1+(Math.random()*3|0)}}else if(s===9){n.fillStyle="#0a0616",n.fillRect(0,0,e,t);let l=["#ff2bd6","#2af0ff","#ffd24a"][Math.random()*3|0],h=Math.random()*3|0;if(h===0){n.fillStyle="#1a1030",n.fillRect(2,2,e-4,t-4);let c=t*.4;n.fillStyle="#ffd8c0",n.fillRect(e*.25,c-t*.12,e*.5,t*.24),n.fillStyle="#141024",n.fillRect(e*.2,c-t*.18,e*.6,t*.08),n.fillRect(e*.2,c-t*.16,e*.12,t*.2),n.fillRect(e*.68,c-t*.16,e*.12,t*.2),n.fillStyle="#ff2b4c",n.beginPath(),n.arc(e*.5,c+t*.02,e*.05,0,7),n.fill(),n.fillStyle="#141024",n.fillRect(e*.34,c-t*.02,e*.08,2),n.fillRect(e*.58,c-t*.02,e*.08,2),n.fillStyle=l,n.font="8px monospace",n.textBaseline="top",n.fillText(ni[Math.random()*ni.length|0],4,t*.72|0)}else if(h===1){n.fillStyle="#101a3a",n.fillRect(2,2,e-4,t-4);let c=t*.38,u=e*.18;n.fillStyle="#e8f0ff",n.beginPath(),n.ellipse(e/2,c,e*.32,u,0,0,7),n.fill(),n.fillStyle=l,n.beginPath(),n.arc(e/2,c,u*.6,0,7),n.fill(),n.fillStyle="#08060e",n.beginPath(),n.arc(e/2,c,u*.28,0,7),n.fill()}else{for(let c=4;c<t-4;c+=5){n.fillStyle=Math.random()<.5?l:"#7b3ff2",n.globalAlpha=.4+Math.random()*.5;let u=Math.sin(c*.15)*e*.2+e*.3|0;n.fillRect(4,c,u+(e*.2|0),2)}n.globalAlpha=1}n.fillStyle="rgba(0,0,0,0.35)";for(let c=2;c<t;c+=3)n.fillRect(2,c,e-4,1);n.strokeStyle=l,n.lineWidth=1,n.strokeRect(1.5,1.5,e-3,t-3),n.fillStyle="#05030c",n.fillRect(0,a,e,r)}else if(s===10){n.fillStyle="#141230",n.fillRect(0,0,e,t);for(let u=0;u<t;u+=14+(Math.random()*10|0))for(let f=0;f<e;f+=12+(Math.random()*12|0))n.fillStyle="rgba(255,255,255,"+(.02+Math.random()*.04).toFixed(3)+")",n.fillRect(f,u,10+(Math.random()*12|0),12+(Math.random()*10|0));let l="#2ab4ff",h="#ff2bd6",c=(u,f)=>{n.strokeStyle=f,n.lineWidth=1.5,n.globalAlpha=.95,n.beginPath();let d=2+Math.random()*8;for(n.moveTo(u+.5,d);d<t-10;){let g=14+Math.random()*30;if(d=Math.min(t-6,d+g),n.lineTo(u+.5,d),Math.random()<.55){let _=(Math.random()<.5?-1:1)*(4+Math.random()*10)|0;u=Math.max(3,Math.min(e-3,u+_)),n.lineTo(u+.5,d)}}n.stroke(),n.globalAlpha=1};c(3+Math.random()*e*.25|0,l),c(6+Math.random()*e*.2|0,l),c(e-4-Math.random()*e*.25|0,h),c(e-8-Math.random()*e*.2|0,h);for(let u=0;u<3;u++){let f=3+Math.random()*(e-10)|0;n.fillStyle="#0d0b22",n.fillRect(f,4,3,t-8),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(f+2,4,1,t-8)}if(e>30){let u=4+Math.random()*(e-26)|0,f=t*.3+Math.random()*t*.3|0;n.fillStyle="#0c0a20",n.fillRect(u,f,22,22),n.fillStyle="#050410";for(let d of[[5,5],[16,5],[5,16],[16,16]])n.beginPath(),n.arc(u+d[0],f+d[1],4,0,7),n.fill()}{let u=4+Math.random()*Math.max(6,e-20)|0,f=t*.15+Math.random()*t*.5|0;for(let d=0;d<5;d++)n.fillStyle="#080618",n.fillRect(u,f+d*3,16,2)}for(let u=0;u<3+(t/90|0);u++){let f=4+Math.random()*Math.max(6,e-20)|0,d=6+Math.random()*Math.max(10,t-30)|0;n.fillStyle="#0a0816",n.fillRect(f-1,d-1,14,7);for(let g=0;g<3;g++)n.fillStyle=Math.random()<.85?"#ffb742":"#3a2c14",n.fillRect(f+g*4,d,3,5)}for(let u=0;u<8;u++)n.fillStyle=Math.random()<.5?l:h,n.globalAlpha=.9,n.fillRect(3+Math.random()*(e-6)|0,3+Math.random()*(t-8)|0,2,1),n.globalAlpha=1;n.fillStyle="#0a0a1a",n.fillRect(e*.25,a-2,e*.5,r+2);for(let u=a+1;u<t-3;u+=3)n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(e*.27,u,e*.46,1);for(let u=0;u<e;u+=6)n.fillStyle=(u/6|0)%2?"#e6c02a":"#141414",n.fillRect(u,t-3,6,2)}else{let l=0,h=["rgba(255,255,255,0.05)","rgba(0,0,0,0.22)","rgba(122,63,242,0.10)","rgba(255,154,60,0.07)","rgba(42,240,255,0.06)"];for(;l<t;){let c=Math.min(t-l,40+(Math.random()*90|0));n.fillStyle=h[Math.random()*h.length|0],n.fillRect(0,l,e,c);let u=6+(Math.random()*3|0),f=3+(Math.random()*2|0),d=.2+Math.random()*.35;for(let g=l+3;g<l+c-u;g+=u)for(let _=2;_<e-4;_+=f+2)n.fillStyle=Math.random()<d?Math.random()<.75?i.win:i.win2:"rgba(0,0,0,0.5)",n.fillRect(_,g,f,u-3);n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(0,l+c-1,e,1),l+=c}n.fillStyle="#05030c",n.fillRect(0,a,e,r);for(let c=1;c<e-3;){let u=3+(Math.random()*7|0);n.fillStyle=i.shop[Math.random()*i.shop.length|0],n.globalAlpha=.8,n.fillRect(c,a+2,Math.min(u,e-c-2),r-4),n.globalAlpha=1,c+=u+1+(Math.random()*4|0)}}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,0,1,t),n.fillRect(e-1,0,1,t)}function Jx(n,e,t,i,s){let r=Math.min(16,t*.08|0)+6,o=t-r,a=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e","#9a6aff"],l=a[Math.random()*a.length|0],h=()=>{n.fillStyle="#05030c",n.fillRect(0,o,e,r);for(let c=1;c<e-3;){let u=4+(Math.random()*7|0);n.fillStyle=i.shop[Math.random()*i.shop.length|0],n.globalAlpha=.8,n.fillRect(c,o+2,Math.min(u,e-c-2),r-4),n.globalAlpha=1,c+=u+2+(Math.random()*3|0)}};if(n.fillStyle=i.base,n.fillRect(0,0,e,t),s===11){for(let c=4,u=0;c<o-6;c+=7,u^=1)for(let f=2+u*4;f<e-6;f+=8){let d=Math.random()<.2;n.fillStyle=d?l:"rgba(0,0,0,0.45)",n.globalAlpha=d?.85:1,n.beginPath(),n.moveTo(f+3,c),n.lineTo(f+6,c+2),n.lineTo(f+6,c+5),n.lineTo(f+3,c+7),n.lineTo(f,c+5),n.lineTo(f,c+2),n.closePath(),n.fill(),n.globalAlpha=1}h()}else if(s===12){n.fillStyle="#040a08",n.fillRect(0,0,e,t);for(let c=3;c<e-2;c+=5){let u=Math.random()*t|0,f=t*.2+Math.random()*t*.4|0;for(let d=0;d<f;d+=4){let g=(u+d)%t;n.fillStyle=d<8?"#d8ffe8":"#3adc7a",n.globalAlpha=Math.max(.15,1-d/f),n.fillRect(c,g,2,3)}n.globalAlpha=1}h()}else if(s===13){n.fillStyle="#1c1a22",n.fillRect(0,0,e,t);for(let c=4;c<o-10;c+=12)for(let u=3;u<e-8;u+=10)n.fillStyle="#0a090f",n.fillRect(u,c,8,9),n.fillStyle="#26232e",n.fillRect(u,c,8,1),n.fillRect(u,c,1,9),Math.random()<.22&&(n.fillStyle="#ffd24a",n.globalAlpha=.75,n.fillRect(u+2,c+3,3,3),n.globalAlpha=1);n.fillStyle="rgba(0,0,0,0.3)";for(let c=0;c<5;c++)n.fillRect(Math.random()*e|0,0,2,t);h()}else if(s===14){for(let c=2;c<o-2;c+=4)n.fillStyle="#0c0a18",n.fillRect(1,c,e-2,3),Math.random()<.3&&(n.fillStyle=Math.random()<.6?"#ffb046":l,n.globalAlpha=.5,n.fillRect(1,c+3,e-2,1),n.globalAlpha=1);h()}else if(s===15){n.fillStyle="#08060e",n.fillRect(0,0,e,t);for(let c=3;c<o-8;c+=9)for(let u=2;u<e-8;u+=10){let f=a[Math.random()*a.length|0];n.fillStyle="#020204",n.fillRect(u,c,9,7),n.fillStyle=f,n.globalAlpha=.25+Math.random()*.6,n.fillRect(u+1,c+1,7,5),n.globalAlpha=1,Math.random()<.4&&(n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(u+1,c+1+(Math.random()*4|0),7,1))}h()}else if(s===16){for(let c=0,u=0;c<o;c+=9,u^=1)for(let f=-6;f<e;f+=12){let d=Math.random();n.fillStyle=d<.12?l:d<.5?"#141126":"#0d0b1c",n.globalAlpha=d<.12?.6:1,n.beginPath(),(u^f/12&1)%2?(n.moveTo(f+u*6,c),n.lineTo(f+12+u*6,c),n.lineTo(f+6+u*6,c+9)):(n.moveTo(f+6+u*6,c),n.lineTo(f+12+u*6,c+9),n.lineTo(f+u*6,c+9)),n.closePath(),n.fill(),n.globalAlpha=1}n.strokeStyle="rgba(255,255,255,0.08)";for(let c=0;c<o;c+=9)n.beginPath(),n.moveTo(0,c+.5),n.lineTo(e,c+.5),n.stroke();h()}else if(s===17){for(let c=6;c<o-14;c+=16){n.fillStyle="#221018",n.fillRect(0,c,e,3),n.fillStyle="#160a10",n.fillRect(2,c+3,e-4,10);for(let u=4;u<e-4;u+=6)Math.random()<.55&&(n.fillStyle="#ffb046",n.globalAlpha=.85,n.fillRect(u,c+6,3,4),n.globalAlpha=1);n.fillStyle="#ff5a3c",n.globalAlpha=.9;for(let u=3;u<e-3;u+=10)n.fillRect(u,c+2,2,2);n.globalAlpha=1}h()}else if(s===18){n.fillStyle="#0e0a16",n.fillRect(0,0,e,t);let c=14+(Math.random()*10|0);for(let u=0;u<c;u++){let f=Math.random()*(e-10)|0,d=Math.random()*(o-12)|0,g=6+Math.random()*10|0,_=5+Math.random()*9|0,m=a[Math.random()*a.length|0];n.fillStyle="#0a0512",n.fillRect(f-1,d-1,g+2,_+2),n.fillStyle=m,n.globalAlpha=.55+Math.random()*.35,n.fillRect(f,d,g,_),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.5)";for(let p=d+2;p<d+_-1;p+=3)n.fillRect(f+1,p,g-2,1)}h()}else if(s===19){n.fillStyle="#100d18",n.fillRect(0,0,e,t);let c=Math.max(4,e*.16|0),u=e-c>>1;n.fillStyle=l,n.globalAlpha=.9,n.fillRect(u,4,c,o-8),n.globalAlpha=1,n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(u+(c/2|0),4,1,o-8);for(let f=8;f<o-6;f+=14)n.fillStyle="#080612",n.fillRect(u-2,f,c+4,2);for(let f=6;f<o-8;f+=18)n.fillStyle="#e6c02a",n.globalAlpha=.5,n.fillRect(3,f,4,2),n.fillRect(5,f+2,4,2),n.fillRect(e-7,f,4,2),n.fillRect(e-9,f+2,4,2),n.globalAlpha=1;h()}else if(s===20){n.fillStyle="#141018",n.fillRect(0,0,e,t);for(let c=3;c<e-2;c+=6)n.fillStyle=c/6%3===0?"#c8a24a":"#3a2f22",n.globalAlpha=c/6%3===0?.8:1,n.fillRect(c,6,2,o-10),n.globalAlpha=1;for(let c=10;c<o-6;c+=24)n.fillStyle="#c8a24a",n.globalAlpha=.4,n.fillRect(2,c,e-4,1),n.globalAlpha=1;n.fillStyle="#ffd24a",n.globalAlpha=.85;for(let c=5;c<e-4;c+=12)Math.random()<.5&&n.fillRect(c,8+Math.random()*(o-20)|0,2,4);n.globalAlpha=1,h()}else if(s===21){n.fillStyle="#0a0812",n.fillRect(0,0,e,t);for(let c=4;c<o;c+=8)for(let u=3;u<e-4;u+=5)Math.random()<.25&&(n.fillStyle="#ffcf5e",n.globalAlpha=.6,n.fillRect(u,c+2,3,3),n.globalAlpha=1);n.strokeStyle="#2a2438",n.lineWidth=1;for(let c=1;c<e;c+=6)n.beginPath(),n.moveTo(c+.5,0),n.lineTo(c+.5,o),n.stroke();for(let c=1;c<o;c+=6)n.beginPath(),n.moveTo(0,c+.5),n.lineTo(e,c+.5),n.stroke();h()}else if(s===22){n.fillStyle="#12101e",n.fillRect(0,0,e,t);for(let c=6;c<o-4;c+=7)for(let u=5;u<e-4;u+=7){let f=Math.random()<.4;n.fillStyle=f?Math.random()<.8?"#ffd24a":"#7adcff":"#060410",n.globalAlpha=f?.9:1,n.beginPath(),n.arc(u,c,2.2,0,7),n.fill(),n.globalAlpha=1}h()}else if(s===23){n.fillStyle="#0c1018",n.fillRect(0,0,e,t);for(let c=4;c<o-8;c+=10)for(let u=2;u<e-10;u+=11)n.fillStyle="#0a1c33",n.beginPath(),n.moveTo(u,c+7),n.lineTo(u+9,c+5),n.lineTo(u+9,c),n.lineTo(u,c+2),n.closePath(),n.fill(),n.strokeStyle="rgba(120,190,255,0.35)",n.stroke(),Math.random()<.08&&(n.fillStyle="#04070c",n.fillRect(u+2,c+1,5,4));h()}else if(s===24){n.fillStyle="#100e16",n.fillRect(0,0,e,t);for(let c=4;c<o-6;c+=8)for(let u=3;u<e-5;u+=6){let f=Math.random();n.fillStyle=f<.1?"#ffcf5e":f<.35?"#04030a":"#0a0814",n.globalAlpha=f<.1?.8:1,n.fillRect(u,c,4,5),n.globalAlpha=1,f>=.1&&f<.2&&(n.fillStyle="#1c1826",n.beginPath(),n.moveTo(u,c),n.lineTo(u+4,c+5),n.stroke())}for(let c=0;c<3;c++){let u=a[Math.random()*a.length|0],f=o*.2+Math.random()*o*.6|0;n.strokeStyle=u,n.lineWidth=2,n.globalAlpha=.85,n.beginPath();let d=2+Math.random()*e*.3|0;n.moveTo(d,f);for(let g=0;g<4;g++)d+=4+Math.random()*8,n.lineTo(d,f+(Math.random()-.5)*8|0);n.stroke(),n.globalAlpha=1,n.lineWidth=1}h()}else if(s===25){n.fillStyle="#062a30",n.fillRect(0,0,e,t);let c=n.createLinearGradient(0,0,0,t);c.addColorStop(0,"rgba(20,220,210,0.25)"),c.addColorStop(1,"rgba(10,90,110,0.4)"),n.fillStyle=c,n.fillRect(0,0,e,t);for(let u=8;u<o;u+=9){n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(0,u,e,2);for(let f=0;f<3;f++)Math.random()<.5&&(n.fillStyle="rgba(0,0,0,0.55)",n.fillRect(Math.random()*(e-8)|0,u-5,3+Math.random()*6|0,4))}n.fillStyle="rgba(255,255,255,0.25)";for(let u=0;u<10;u++)n.fillRect(Math.random()*e|0,Math.random()*o|0,1,1);h()}else if(s===26){n.fillStyle="#12101c",n.fillRect(0,0,e,t);for(let c=8;c<o-10;c+=13)for(let u=7;u<e-6;u+=13)n.fillStyle="#0a0814",n.fillRect(u-6,c-6,12,12),n.fillStyle="#050308",n.beginPath(),n.arc(u,c,4.5,0,7),n.fill(),n.strokeStyle="#221e30",n.beginPath(),n.moveTo(u-4,c),n.lineTo(u+4,c),n.moveTo(u,c-4),n.lineTo(u,c+4),n.stroke(),Math.random()<.15&&(n.fillStyle=l,n.globalAlpha=.7,n.fillRect(u-5,c+4,10,1),n.globalAlpha=1);h()}else if(s===27){n.fillStyle="#100d1a",n.fillRect(0,0,e,t);for(let c=6;c<o-6;c+=9)for(let u=4;u<e-6;u+=7)Math.random()<.3&&(n.fillStyle="#ffcf5e",n.globalAlpha=.55,n.fillRect(u,c,3,4),n.globalAlpha=1);n.strokeStyle="#060410",n.lineWidth=1.5;for(let c=0;c<7;c++){let u=Math.random()*o*.8|0,f=4+Math.random()*8;n.beginPath(),n.moveTo(0,u),n.quadraticCurveTo(e/2,u+f,e,u+(Math.random()-.5)*8|0),n.stroke()}for(let c=0;c<4;c++){let u=Math.random()*(e-8)|0,f=Math.random()*(o-10)|0;n.fillStyle="#1a1626",n.fillRect(u,f,6,8),n.fillStyle=Math.random()<.5?"#ff2b4c":"#2af0ff",n.fillRect(u+2,f+2,2,1)}h()}else if(s===28){n.fillStyle="#0a0814",n.fillRect(0,0,e,t);let c=Math.max(8,e*.4|0),u=e-c>>1;n.fillStyle="#050208",n.fillRect(u-1,3,c+2,o-6);for(let f=5;f<o-8;f+=8){let d=a[Math.random()*a.length|0];n.fillStyle=d,n.globalAlpha=.55+Math.random()*.35,n.fillRect(u,f,c,6),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(u,f+2,c,1)}n.strokeStyle=l,n.strokeRect(u-1.5,2.5,c+3,o-5),h()}else if(s===29){n.fillStyle="#070a0c",n.fillRect(0,0,e,t);for(let c=2;c<e-1;c+=3){let u=Math.random()<.7?"#4ef0b0":a[Math.random()*a.length|0];n.fillStyle=u,n.globalAlpha=.25+Math.random()*.55;let f=Math.random()*10|0,d=o-(Math.random()*10|0);n.fillRect(c,f,1,d-f),n.globalAlpha=1;for(let g=f+6;g<d;g+=8+(Math.random()*8|0))n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(c,g,1,2)}h()}else{n.fillStyle="#141118",n.fillRect(0,0,e,t);for(let c=-e;c<o+e;c+=14)n.fillStyle=(c/14|0)%2?"#1c1822":"#0e0b12",n.beginPath(),n.moveTo(0,c),n.lineTo(e,c-e*.4),n.lineTo(e,c-e*.4+8),n.lineTo(0,c+8),n.closePath(),n.fill();n.fillStyle=l,n.globalAlpha=.8;for(let c=10;c<o-6;c+=26)n.fillRect(2,c,e-4,2);n.globalAlpha=1;for(let c=0;c<2;c++){let u=4+Math.random()*(e-24)|0,f=o*.3+Math.random()*o*.4|0;n.fillStyle="#0a0a14",n.fillRect(u,f,16,12);for(let d=f+2;d<f+11;d+=2)n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(u+1,d,14,1)}h()}n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,0,1,t),n.fillRect(e-1,0,1,t)}function cp(n,e,t){if(Math.random()<.38){let i=["#4ef0e0","#2af0ff","#c0ff5e","#ff2bd6"][Math.random()*4|0];n.strokeStyle=i,n.fillStyle=i,n.lineWidth=1,n.globalAlpha=.85;let s=2+(Math.random()*4|0);for(let r=0;r<s;r++){let o=4+Math.random()*(e-8)|0,a=0;for(n.beginPath(),n.moveTo(o+.5,0);a<t-8;){let l=8+(Math.random()*30|0);if(a=Math.min(t-4,a+l),n.lineTo(o+.5,a+.5),Math.random()<.5&&a<t-12){let h=(Math.random()<.5?-1:1)*(3+Math.random()*8)|0;o=Math.max(3,Math.min(e-4,o+h)),n.lineTo(o+.5,a+.5)}}n.stroke(),n.fillRect(o-1,a-1,3,3)}n.globalAlpha=1}if(Math.random()<.4){let i=3+(Math.random()*6|0);for(let s=0;s<i;s++){let r=2+Math.random()*Math.max(4,e-12)|0,o=6+Math.random()*Math.max(8,t-24)|0,a=4+Math.random()*8|0,l=3+Math.random()*5|0,h=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.random()*5|0];n.fillStyle="#0a0616",n.fillRect(r-1,o-1,a+2,l+2),n.fillStyle=h,n.globalAlpha=.8,n.fillRect(r,o,a,l),n.globalAlpha=1,n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(r+1,o+1,Math.max(1,a*.4|0),1)}}}function dl(n,e,t,i){let s=lp[Math.floor(Math.random()*lp.length)],r=Math.random(),o=t!==void 0?t:Math.random()<.6?r<.13?0:r<.25?1:r<.39?2:r<.47?3:r<.54?4:r<.6?5:r<.68?6:r<.76?7:r<.84?8:r<.92?9:10:11+(Math.random()*20|0),a=Math.max(24,Math.min(160,Math.round(n*2)))|0,l=Math.max(48,Math.min(1024,Math.round(e*2)))|0,h=Ss(a,l,c=>{if(o!==0){Zx(c,a,l,s,o),cp(c,a,l);return}c.fillStyle=s.base,c.fillRect(0,0,a,l);let u=8+(Math.random()*6|0);for(let m=0;m<a;m+=u)c.fillStyle=s.mull,c.fillRect(m,0,1,l);c.fillStyle="rgba(255,255,255,0.03)";for(let m=0;m<a;m+=u*2)c.fillRect(m,0,u,l);let f=8,d=Math.min(16,l*.08|0)+6,g=6+(Math.random()*6|0);for(let m=g;m<l-d-f;m+=f){c.fillStyle=s.slab,c.fillRect(0,m+f-1,a,1);let p=Math.random(),M=-1,y=-1;if(p<.14)M=0,y=a;else if(p<.62){let v=Math.random()*a|0;M=v,y=v+(a*.15+Math.random()*a*.3|0)}for(let v=0;v<a-2;v+=u)for(let P=v+2;P<v+u-1&&P<a-3;P+=4){let w=P>=M&&P<=y&&Math.random()<.9;w?c.fillStyle=Math.random()<.8?s.win:Math.random()<.85?s.win2:s.acc:c.fillStyle="rgba(0,0,0,0.55)",c.fillRect(P,m+2,3,f-4),w&&Math.random()<.35&&(c.fillStyle="rgba(255,255,255,0.55)",c.fillRect(P+1,m+3,1,1))}}c.fillStyle="rgba(0,0,0,0.5)",c.fillRect(0,0,a,g),Math.random()<.6&&(c.fillStyle=s.acc,c.fillRect(0,0,a,1));let _=l-d;c.fillStyle="#05030c",c.fillRect(0,_,a,d);for(let m=1;m<a-3;){let p=4+(Math.random()*9|0);c.fillStyle=s.shop[Math.random()*s.shop.length|0],c.globalAlpha=.75,c.fillRect(m,_+2,Math.min(p,a-m-2),d-4),c.globalAlpha=1,m+=p+2+(Math.random()*4|0)}c.fillStyle="rgba(255,240,200,0.5)",c.fillRect(0,_,a,1),c.fillStyle="rgba(0,0,0,0.4)",c.fillRect(0,0,1,l),c.fillRect(a-1,0,1,l),cp(c,a,l)});return h.wrapS=h.wrapT=rn,i&&i>1&&(h.wrapS=Fn,h.repeat.x=i),h.minFilter=Ni,h.generateMipmaps=!0,h.anisotropy=yo,new me({map:h})}var pl=new ir().load("models/facades/cyberpunk_facade_asset/symmetrical_neon_cyberpunk_tower.png");pl.colorSpace=nt;pl.anisotropy=yo;var Mo=pl.clone();Mo.wrapS=Fn;Mo.repeat.x=-1;Mo.offset.x=1;Mo.needsUpdate=!0;var qh=[];for(let n of[pl,Mo])for(let e of[16777215,16767176,13165823,15780095])qh.push(new me({map:n,color:e}));var ru=["01_neon_cyberpunk_tower_facade","02_neon_cyberpunk_hotel_facade","03_neon_pixel_art_skyscraper_facade","04_neon_split_industrial_facade","05_neon_symmetry_cyberpunk_building_facade","06_neon_dataflow_tower_facade","07_neon_dream_cyberpunk_hotel_skyscraper","08_neon_cyberpunk_megastructure_facade","09_nexus_cyberpunk_megastructure_facade","10_cyberpunk_core_tower_tx_09","11_neon_datacore_cyberpunk_server_citywall","12_neo_terminal_cyberpunk_market_facade","13_neon_megablock_city_facade","14_nova_civic_systems_megastructure"],ys=4,Yh=4,Kh=512,Zh=1536,yr=document.createElement("canvas");yr.width=ys*Kh;yr.height=Yh*Zh;var ou=yr.getContext("2d");ou.fillStyle="#0a0820";ou.fillRect(0,0,yr.width,yr.height);var xr=new An(yr);xr.colorSpace=nt;xr.minFilter=Ni;xr.generateMipmaps=!0;xr.anisotropy=yo;var qi=new me({map:xr});ru.forEach((n,e)=>{let t=new Image;t.onload=()=>{ou.drawImage(t,e%ys*Kh,(e/ys|0)*Zh,Kh,Zh),xr.needsUpdate=!0},t.src="models/facades/cyberpunk_facades_all/"+n+".png"});var au=0;function bp(n,e,t){let i=e%ys/ys,s=1-((e/ys|0)+1)/Yh,r=1/ys,o=1/Yh,a=n.attributes.uv;for(let l=0;l<a.count;l++){let h=a.getX(l);t&&(h=1-h),a.setXY(l,i+h*r,s+a.getY(l)*o)}a.needsUpdate=!0}var ni=["PUNK","VICE","TURBO","NEON","BUST","RUN","MAXX","GRID"];function $x(){let n=Math.floor(Math.random()*3);return Ss(48,24,e=>{let t=["#12062a","#1a0630","#08102a"][Math.floor(Math.random()*3)];e.fillStyle=t,e.fillRect(0,0,48,24);let i=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f"][Math.floor(Math.random()*4)];if(n===0){e.fillStyle="#ff9a3c",e.beginPath(),e.arc(14,12,8,0,7),e.fill(),e.fillStyle=t;for(let s=0;s<3;s++)e.fillRect(4,13+s*3,20,1);e.fillStyle=i,e.fillRect(30,6,2,14);for(let s of[[-6,-2],[-4,-4],[0,-5],[4,-4],[6,-2]])e.fillRect(31+s[0],6+s[1],4,1)}else if(n===1)e.fillStyle=i,e.font="8px monospace",e.textBaseline="top",e.fillText(ni[Math.floor(Math.random()*ni.length)],4,3),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(0,13,48,1),e.fillStyle="#ffd24a",e.fillText(ni[Math.floor(Math.random()*ni.length)],12,14);else for(let s=4;s<44;s+=7){e.fillStyle=Math.random()<.5?i:"#ffd24a";for(let r=3;r<21;r+=5)Math.random()<.8&&(e.fillRect(s,r,4,3),Math.random()<.5&&e.fillRect(s+1,r+3,2,1))}e.strokeStyle=i,e.lineWidth=1,e.strokeRect(.5,.5,47,23)})}var fo=[];for(let n=0;n<24;n++)fo.push(new me({map:$x(),transparent:!0,opacity:.92,side:gt,depthWrite:!1}));function lu(n,e){return new W(new Ye(n,e),fo[Math.random()*fo.length|0])}function jx(){return Ss(8,48,n=>{n.fillStyle="#0c0620",n.fillRect(0,0,8,48);let e=["#ff2bd6","#2af0ff","#ffd24a","#ff5a5f","#c0ff5e"][Math.floor(Math.random()*5)];n.strokeStyle=e,n.strokeRect(.5,.5,7,47),n.fillStyle=e;for(let t=3;t<45;t+=6)Math.random()<.85&&(n.fillRect(2,t,4,3),Math.random()<.5&&(n.fillStyle="#ffffff",n.fillRect(3,t+1,1,1),n.fillStyle=e))})}var po=[];for(let n=0;n<16;n++)po.push(new me({map:jx(),transparent:!0,side:gt,depthWrite:!1}));var Oh={};function ut(n,e){let t=n+"_"+e;return Oh[t]||(Oh[t]=new me({color:n,transparent:!0,opacity:e,side:gt,depthWrite:!1})),Oh[t]}var lo=new me({color:16722764}),Bh=new me({color:2758726}),Tp=new me({color:16722748}),ds=[];for(let n=0;n<64;n++)ds.push(dl(26+Math.random()*22,80+Math.random()*280));var Ke=[];for(let n=0;n<16;n++)Ke.push(dl(30,90+Math.random()*260,void 0,3));var Jh=[];for(let n=0;n<12;n++)Jh.push(dl(90,500+Math.random()*400,[1,0,4,15,28,19][n%6]));var Fh=new Pe,Ka=new Pe;function Qx(n,e,t){let i=n.index.array,s=n.attributes.position,r=n.attributes.uv,o=n.attributes.normal,a=new Float32Array(t*3),l=r?new Float32Array(t*2):null,h=o?new Float32Array(t*3):null;for(let u=0;u<t;u++){let f=i[e+u];a[u*3]=s.getX(f),a[u*3+1]=s.getY(f),a[u*3+2]=s.getZ(f),l&&(l[u*2]=r.getX(f),l[u*2+1]=r.getY(f)),h&&(h[u*3]=o.getX(f),h[u*3+1]=o.getY(f),h[u*3+2]=o.getZ(f))}let c=new ct;return c.setAttribute("position",new _t(a,3)),l&&c.setAttribute("uv",new _t(l,2)),h&&c.setAttribute("normal",new _t(h,3)),c}function vr(n){n.updateMatrixWorld(!0),Fh.copy(n.matrixWorld).invert();let e=new Map,t=new Map,i=new Map,s=[];n.traverse(a=>{if(a===n||!a.geometry||!a.geometry.isBufferGeometry)return;if(a.isMesh&&Array.isArray(a.material)){if(!a.geometry.index||!a.geometry.groups||!a.geometry.groups.length)return;Ka.multiplyMatrices(Fh,a.matrixWorld);for(let c of a.geometry.groups){let u=a.material[c.materialIndex];if(!u)continue;let f=i.get(u);f||(f={geos:[],srcs:[]},i.set(u,f)),f.geos.push(Qx(a.geometry,c.start,c.count).applyMatrix4(Ka)),f.srcs.push(a)}s.push(a);return}let l=a.isMesh?e:a.isLineSegments?t:null;if(!l)return;let h=l.get(a.material);h||(h={geos:[],origs:[]},l.set(a.material,h)),Ka.multiplyMatrices(Fh,a.matrixWorld),h.geos.push(a.geometry.clone().applyMatrix4(Ka)),h.origs.push(a)});let r=(a,l)=>{for(let[h,c]of a){if(c.origs.length<2){c.geos.forEach(f=>f.dispose());continue}let u=fn(c.geos);if(!u){c.geos.forEach(f=>f.dispose());continue}for(let f of c.origs)f.parent&&f.parent.remove(f);c.geos.forEach(f=>f.dispose()),n.add(new l(u,h))}};r(e,W),r(t,an);let o=new Set;for(let[a,l]of i){let h=l.geos.length>1?fn(l.geos):l.geos[0];if(h)n.add(new W(h,a)),l.geos.length>1&&l.geos.forEach(c=>c.dispose());else{l.geos.forEach(c=>c.dispose());for(let c of l.srcs)o.add(c)}}for(let a of s)!o.has(a)&&a.parent&&a.parent.remove(a);return n.traverse(a=>{a!==n&&(a.matrixAutoUpdate=!1,a.updateMatrix())}),n}var Er=Ss(32,64,n=>{n.fillStyle="#160a2e",n.fillRect(0,0,32,64),n.fillStyle="rgba(255,255,255,0.04)";for(let e=0;e<120;e++)n.fillRect(Math.random()*32|0,Math.random()*64|0,1,1);n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,0,2,64),n.fillRect(30,0,2,64),n.fillStyle="rgba(122,63,242,0.25)",n.fillRect(4,0,1,64),n.fillRect(27,0,1,64)});Er.repeat.set(1,60);var cu=new W(new Ye(74,9e3),new me({map:Er}));cu.rotation.x=-Math.PI/2;cu.position.set(0,-29.6,-1500);it.add(cu);function Ap(n,e){let t=new W(new de(1.4,.2,9e3),new me({color:e}));return t.position.set(n,-29,-1500),t}it.add(Ap(-36,Kt));it.add(Ap(36,Kt));function ev(){let n=document.createElement("canvas");n.width=16,n.height=256;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,256);return t.addColorStop(0,"rgba(255,170,70,0.38)"),t.addColorStop(.35,"rgba(255,110,120,0.2)"),t.addColorStop(.7,"rgba(255,70,150,0.07)"),t.addColorStop(1,"rgba(255,60,160,0)"),e.fillStyle=t,e.fillRect(0,0,16,256),new An(n)}var ml=new W(new Ye(46,1500),new me({map:ev(),transparent:!0,opacity:.6,blending:kt,depthWrite:!1}));ml.rotation.x=-Math.PI/2;ml.position.set(0,-29.2,-820);it.add(ml);var hu=[];for(let n=0;n<70;n++){let e=new de(1.8,.2,16);e.translate(0,-29,-n*46),hu.push(e)}var il=new W(fn(hu),new me({color:Xx}));hu.forEach(n=>n.dispose());it.add(il);var Sr=Ss(128,128,n=>{n.fillStyle="#0c0618",n.fillRect(0,0,128,128),n.fillStyle="#140a24",n.fillRect(0,0,128,18),n.fillRect(0,0,18,128),n.fillStyle="#22123a",n.fillRect(0,18,128,2),n.fillRect(18,0,2,128),n.fillStyle="#1a0e2c";for(let e=0;e<7;e++){let t=24+Math.random()*90|0,i=24+Math.random()*90|0;n.fillRect(t,i,6+Math.random()*16|0,5+Math.random()*12|0)}n.fillStyle="#3a1f5e";for(let e=0;e<40;e++)n.fillRect(Math.random()*128|0,Math.random()*128|0,1,1);n.globalAlpha=.5,n.fillStyle="#ffd24a";for(let e=6;e<128;e+=14)n.fillRect(e,8,5,1),n.fillRect(8,e,1,5);n.globalAlpha=.25,n.fillStyle="#2af0ff",n.fillRect(0,17,128,1),n.fillRect(17,0,1,128),n.globalAlpha=1});Sr.repeat.set(16,16);Sr.minFilter=Hn;Sr.generateMipmaps=!0;Sr.anisotropy=yo;Er.minFilter=Hn;Er.generateMipmaps=!0;Er.anisotropy=yo;var uu=new W(new Ye(9e3,9e3),new me({map:Sr}));uu.rotation.x=-Math.PI/2;uu.position.set(0,-30.2,-1500);it.add(uu);var tv=9e3/16,sl=[],fu=[];for(let n=0;n<66;n++)for(let e of[-1,1]){let t=-n*90,i=e*40,s=new de(.8,14,.8);s.translate(i,-23,t),sl.push(s);let r=new de(5,.7,.7);r.translate(i-e*2.5,-16,t),sl.push(r);let o=new de(2.6,.5,1);o.translate(i-e*4,-30+13.6,t),fu.push(o)}var $a=new W(fn(sl),new me({color:1313318}));sl.forEach(n=>n.dispose());var wp=new W(fn(fu),new me({color:16757866}));fu.forEach(n=>n.dispose());it.add($a);it.add(wp);var Rp=[];for(let n=0;n<22;n++){let e=Math.random()<.5,t=new W(new Ye(1.6,10),new me({color:e?16769184:16722764,transparent:!0,opacity:.7,blending:kt,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.set((Math.random()<.5?-1:1)*(120+Math.random()*160),-29.4,-Math.random()*5800),t.userData.rel=e?1.6+Math.random()*.8:.5+Math.random()*.35,it.add(t),Rp.push(t)}var Cp=[];for(let n=0;n<26;n++){let e=Math.random()<.5?1:-1,t=new W(new Ye(6,1.2),new me({color:e>0?16769184:16730714,transparent:!0,opacity:.8,blending:kt,depthWrite:!1,side:gt}));t.position.set((Math.random()-.5)*2400,160+Math.random()*220,-900-Math.random()*2400),t.userData={vx:e*(1.2+Math.random()*1.4)},it.add(t),Cp.push(t)}var Pp=[];function nv(){let n=document.createElement("canvas");n.width=16,n.height=128;let e=n.getContext("2d"),t=e.createLinearGradient(0,128,0,0);return t.addColorStop(0,"rgba(200,230,255,0.55)"),t.addColorStop(1,"rgba(200,230,255,0)"),e.fillStyle=t,e.fillRect(0,0,16,128),new An(n)}for(let n=0;n<9;n++){let e=new W(new Ye(9,360).translate(0,180,0),new me({map:nv(),transparent:!0,opacity:.5,blending:kt,depthWrite:!1,side:gt,fog:!1}));e.position.set((Math.random()<.5?-1:1)*(70+Math.random()*140),-30,-500-n*650-Math.random()*400),e.userData={ph:Math.random()*6.3,sp:.35+Math.random()*.3,z0:e.position.z},it.add(e),Pp.push(e)}var Lp=[];{let n=["04_neon_corner_kiosk","13_subway_entrance_pair","14_subway_corner_entrance","15_bus_stop_shelter","16_vending_machine_cluster","17_street_furniture_strip","18_neon_food_cart","19_crosswalk_signal_island"],e=["01_pocket_park_plaza","02_sunset_fountain_plaza","03_arcade_market_stalls","05_service_pipe_cluster","06_utility_tank_stack","11_hovercar_parking_bay","12_glidebooster_landing_pad","20_loading_dock_crates"];setTimeout(()=>{el(n.concat(e),"cityfillers/synthwave_city_fillers").then(t=>{let i=[Kt,hn,16765514,8060826,16747098];for(let s=0;s<18;s++){let r=s%2===0,o=r?n:e,a=Math.random()*o.length|0,l=t[r?a:n.length+a];if(!l)continue;let h=ul(l,i[Math.random()*i.length|0]);Yx(h,r?6+Math.random()*7:9+Math.random()*12,-30);let c=Math.random()<.5?-1:1;h.position.x=c*(r?54+Math.random()*70:130+Math.random()*170),h.position.z=-s*(6e3/18)-80-Math.random()*100,h.rotation.y=Math.random()<.5?0:Math.PI,vr(h),it.add(h),Lp.push(h)}}).catch(t=>console.warn("[cityfillers]",t))},0)}var du=!1,Ip=[];for(let n=0;du&&n<8;n++){let e=new lt,t=26+Math.random()*30,i=4+Math.random()*3,s=[];for(let r=0;r<=10;r++){let o=r/10;s.push(new C((o-.5)*110,t-Math.sin(Math.PI*o)*i,0))}e.add(new Fi(new ct().setFromPoints(s),new $n({color:2758726})));for(let r=1;r<10;r+=2){let o=s[r],a=new W(new Ye(1.6,2.2),new me({color:[16734780,16765514,16722902][Math.random()*3|0],transparent:!0,opacity:.9,side:gt}));a.position.set(o.x,o.y-1.4,0),e.add(a)}e.position.z=-n*760-140,it.add(e),Ip.push(e)}var Dp=[];for(let n=0;du&&n<2;n++){let e=[];for(let i=0;i<=24;i++){let s=i/24;e.push(new C((s-.5)*150,40+Math.sin(s*Math.PI*2.2)*12,Math.sin(s*9)*6))}let t=new W(new Ca(new Xr(e),48,1.6,6,!1),new me({color:12514559,transparent:!0,opacity:.5,blending:kt,depthWrite:!1}));t.position.z=-n*3100-900,it.add(t),Dp.push(t)}var Np=[];for(let n=0;du&&n<4;n++){let e=new lt,t=30+Math.random()*34,i=new W(new de(150,5,10),ot);i.position.y=t,e.add(i);let s=[Kt,hn,16765514][Math.random()*3|0],r=new W(new de(150,.8,10.4),new me({color:s,transparent:!0,opacity:.8}));r.position.y=t+2.9,e.add(r);for(let o of[-70,70]){let a=new W(new de(5,t+30,7),ot);a.position.set(o,(t-30)/2,0),e.add(a)}e.position.z=-n*1500-700,it.add(e),Np.push(e)}function iv(n,e){let t=45+Math.pow(Math.random(),1.7)*430,i=15+Math.random()*36,s=15+Math.random()*36,r=new lt,o=ds[Math.random()*ds.length|0];function a(f,d,g,_){let m=new W(new de(f,d,g),[o,o,Ot,Ot,o,o]);return m.position.y=_+d/2,r.add(m),m}function l(f,d,g,_,m,p,M){let y=new W(new qt(f,d,g,m),[p,Ot,Ot]);return y.position.y=_+g/2,M&&(y.scale.z=M),r.add(y),y}function h(f,d,g){let _=Math.random(),m=[Kt,hn,16751164,16765514][Math.random()*4|0];if(_<.15){let p=8+Math.random()*16,M=new W(new qt(.6,Math.min(f,d)*.6,p,4),ot);M.position.y=g+p/2,M.rotation.y=Math.PI/4,r.add(M)}else if(_<.3){let p=Math.min(f,d)*.42,M=new W(new jn(p,10,6,0,Math.PI*2,0,Math.PI/2),ot);M.position.y=g,r.add(M)}else if(_<.44){let p=Math.min(f,d)*.5,M=new W(new qt(p,p,Math.max(f,d)*.9,10,1,!1,0,Math.PI),ot);M.rotation.z=Math.PI/2,d>f&&(M.rotation.y=Math.PI/2),M.position.y=g,r.add(M)}else if(_<.6){let p=g,M=f*.8,y=d*.8;for(let v=0;v<2+(Math.random()*2|0);v++){let P=4+Math.random()*5,w=new W(new de(M,P,y),ot);w.position.y=p+P/2,r.add(w),p+=P,M*=.68,y*=.68}}else if(_<.72){let p=Math.min(f,d)*.4,M=new W(new qt(p,p,1,12),ot);M.position.y=g+.5,r.add(M);let y=new W(new Yr(p*.8,.35,6,16),ut(16765514,.95));y.rotation.x=Math.PI/2,y.position.y=g+1.2,r.add(y)}if(Math.random()<.45){let p=new W(new de(f+.6,1.6,d+.6),ut(m,.85));p.position.y=g-1.2,r.add(p)}}let c=Math.random();if(c<.025&&t>200){let f=Math.max(i,s)/2;l(f*.22,f*.5,t*.82,0,10,Ke[Math.random()*Ke.length|0]);let d=new W(new qt(f*1.15,f*.75,t*.07,14),[Ke[Math.random()*Ke.length|0],Ot,ot]);d.position.y=t*.86,r.add(d);let g=new W(new qt(.5,.5,t*.12,6),Bh);g.position.y=t*.96,r.add(g);let _=new W(new jn(1.2,6,6),lo);_.position.y=t*1.02,r.add(_)}else if(c<.055){let f=Math.max(i,s)/2,d=0,g=4+(Math.random()*3|0),_=t/g;for(let m=0;m<g;m++){let p=m%2===0;l(f*(p?1:.78),f*(p?1:.78),_,d,12,Ke[Math.random()*Ke.length|0]),d+=_}}else if(c<.085){let f=Math.max(i,s)/2;l(f*(.85+Math.random()*.15),f,t,0,14,Ke[Math.random()*Ke.length|0])}else if(c<.115){let f=Math.random()<.5?6:8,d=Math.max(i,s)/1.7;l(d*.94,d,t,0,f,Ke[Math.random()*Ke.length|0])}else if(c<.14){let f=Math.max(i,s)/1.8;l(f*.45,f,t,0,12,Ke[Math.random()*Ke.length|0])}else if(c<.165&&t>160){let f=Math.max(i,s)/1.5,d=0;for(let g=0;g<3;g++){let _=t*(.42-g*.07);l(f*(1-g*.27)*.96,f*(1-g*.27),_,d,10,Ke[Math.random()*Ke.length|0]),d+=_}}else if(c<.19){let f=Math.max(i,s)/1.6;l(f,f,t,0,16,Ke[Math.random()*Ke.length|0],.45+Math.random()*.2)}else if(c<.23&&t>180){let f=i*.42,d=ds[Math.random()*ds.length|0],g=ds[Math.random()*ds.length|0],_=new W(new de(f,t,s*.8),[d,d,Ot,Ot,d,d]);_.position.set(-i*.32,t/2,0),r.add(_);let m=new W(new de(f,t*.86,s*.8),[g,g,Ot,Ot,g,g]);m.position.set(i*.32,t*.43,0),r.add(m);let p=new W(new de(i*.66,4,s*.3),ot);p.position.set(0,t*.62,0),r.add(p);let M=new W(new Ye(i*.6,1),ut(2814207,.7));M.position.set(0,t*.62,s*.16),r.add(M)}else if(t/i>1.7&&t/i<5.4&&Math.random()<.6){if(Math.random()<.75){let f=new de(i,t,s);bp(f,Math.random()*ru.length|0,Math.random()<.5);let d=new W(f,[qi,qi,Ot,Ot,qi,qi]);d.position.y=t/2,r.add(d),au++}else{let f=qh[Math.random()*qh.length|0],d=new W(new de(i,t,s),[f,f,Ot,Ot,f,f]);d.position.y=t/2,r.add(d)}h(i,s,t)}else{let f=Math.random()*26|0,d=Math.max(i,s)/2;if(f===0&&t>120){let g=t*.55+Math.random()*t*.15;a(i,g,s,0),a(i*.68,t-g,s*.68,g),h(i*.68,s*.68,t)}else if(f===1&&t>140)a(i*1.3,t*.16,s*1.2,0),a(i*.72,t*.84,s*.72,t*.16),h(i*.72,s*.72,t);else if(f===2&&t>220){let g=t*.45,_=t*.3;a(i,g,s,0),a(i*.78,_,s*.78,g),a(i*.55,t-g-_,s*.55,g+_),h(i*.55,s*.55,t)}else if(f===3&&t>100){let g=t*(.55+Math.random()*.25),_=a(i*.62,t,s,0);_.position.x=-i*.19,a(i*.62,g,s*.62,0).position.set(i*.19,g/2,s*.19),h(i*.62,s,t)}else if(f===4&&t>140){let g=a(i*.38,t,s,0);g.position.x=-i*.26;let _=a(i*.38,t*.92,s,0);_.position.x=i*.26;let m=new W(new Ye(i*.1,t*.85),ut([Kt,hn,16765514][Math.random()*3|0],.5));m.position.set(0,t*.45,0),r.add(m),h(i*.38,s,t)}else if(f===6&&t>140){let g=a(i*.3,t*.75,s,0);g.position.x=-i*.35;let _=a(i*.3,t*.75,s,0);_.position.x=i*.35,a(i,t*.25,s,t*.75),h(i,s,t)}else if(f===7&&t>120){for(let g=0;g<4;g++){let _=t*(.4+.2*g),m=a(i*.3,_,s,0);m.position.x=-i*.45+g*i*.3}h(i*.3,s,t)}else if(f===8&&t>120)a(i*.4,t*.8,s*.55,0),a(i,t*.2,s,t*.8),h(i,s,t);else if(f===9&&t>150)l(d*.32,d*.38,t*.75,0,10,Ke[Math.random()*Ke.length|0]),l(d*1.05,d*1.05,t*.18,t*.75,12,Ke[Math.random()*Ke.length|0]);else if(f===10&&t>140){a(i*.5,t,s*.5,0);let g=new W(new de(i*1.9,2.5,3.5),ot);g.position.set(i*.35,t-3,0),r.add(g);let _=new W(new Ye(1.6,5),ut(16765514,.8));_.position.set(i*1.1,t-8,0),r.add(_),h(i*.5,s*.5,t)}else if(f===11&&t>150){a(i,t*.55,s,0);let g=a(i*.32,t*.45,s*.8,t*.55);g.position.x=-i*.3;let _=a(i*.32,t*.45,s*.8,t*.55);_.position.x=i*.3,h(i*.32,s*.8,t)}else if(f===12){a(i,t*.85,s,0);let g=new W(new de(i*1.12,3,s*1.05),ot);g.position.y=t*.9,g.rotation.z=.3,r.add(g)}else if(f===13&&t>130){for(let g=0;g<4;g++){let _=t*(1-g*.2),m=a(i*.42,_,s,0);m.position.x=-n*(g-1.5)*i*.28}h(i*.42,s,t)}else if(f===14&&t>140){let g=a(i*.24,t,s,0);g.position.x=-i*.38;let _=a(i*.24,t,s,0);_.position.x=i*.38,a(i,t*.16,s,t*.84),h(i,s,t)}else if(f===15){a(i,Math.min(t,90),s,0);for(let g=0;g<6;g++){let _=15+Math.random()*40,m=new W(new qt(.3,.3,_,4),Bh);if(m.position.set((Math.random()-.5)*i*.7,Math.min(t,90)+_/2,(Math.random()-.5)*s*.7),r.add(m),Math.random()<.5){let p=new W(new jn(.7,5,5),lo);p.position.set(m.position.x,Math.min(t,90)+_+1,m.position.z),r.add(p)}}}else if(f===16&&t>120)l(d*.5,d*.5,t,0,10,Ke[Math.random()*Ke.length|0]).position.x=-d*.5,l(d*.45,d*.45,t*.85,0,10,Ke[Math.random()*Ke.length|0]).position.set(d*.5,t*.85/2,d*.2),l(d*.4,d*.4,t*.68,0,10,Ke[Math.random()*Ke.length|0]).position.set(0,t*.68/2,-d*.5);else if(f===17&&t>150){let g=l(1.2,d*1.3,t,0,4,Ke[Math.random()*Ke.length|0]);g.rotation.y=Math.PI/4}else if(f===18&&t>160){let g=l(d*.5,d*.9,t,0,4,Ke[Math.random()*Ke.length|0]);g.rotation.y=Math.PI/4;let _=new W(new Ra(1.6,7,4),ut(16765514,.9));_.position.y=t+3,r.add(_)}else if(f===19&&t>130){let g=a(i*.3,t,s,0);g.position.x=-i*.35;let _=a(i*.3,t,s,0);_.position.x=i*.35,a(i*.42,t*.5,s*.55,t*.25),h(i*.3,s,t)}else if(f===20&&t>140)l(d*1.05,d*1.05,t*.28,0,12,Ke[Math.random()*Ke.length|0]),a(i*.58,t*.72,s*.58,t*.28),h(i*.58,s*.58,t);else if(f===21&&t>150){a(i,t*.18,s,0);let g=a(i*.4,t*.82,s*.8,t*.18);g.position.x=-i*.27;let _=a(i*.4,t*.55,s*.8,t*.18);_.position.x=i*.27,h(i*.4,s*.8,t)}else if(f===22&&t>150){a(i*.55,t,s,0);let g=a(i*1.15,t*.14,s,t*.78);g.position.x=i*.28,h(i*.55,s,t)}else if(f===23&&t>140){for(let _=0;_<5;_++)l(d*.85,d*.85,t*.13,_*t*.2,12,Ke[Math.random()*Ke.length|0]);let g=new W(new qt(d*.3,d*.3,t,8),ut(2814207,.35));g.position.y=t/2,r.add(g)}else if(f===24&&t>120){let g=l(d*1.1,d*1.1,t,0,3,Ke[Math.random()*Ke.length|0]);g.rotation.y=Math.random()*6.3}else f===25?(a(i*.55,t,s*.7,0),a(i*.45,t*.7,s*.55,0).position.set(-i*.35,t*.35,s*.15),a(i*.4,t*.45,s*.5,0).position.set(i*.33,t*.225,-s*.15),h(i*.55,s*.7,t)):(a(i,t,s,0),h(i,s,t))}if(Math.random()<.25){let f=new W(new qt(Math.min(3,i*.14),Math.min(3,i*.14),4,7),ot);f.position.set((Math.random()-.5)*i*.3,t+2,(Math.random()-.5)*s*.3),r.add(f)}if(t>120&&Math.random()<.35){let f=[Kt,hn,8077298,16765514][Math.random()*4|0],d=[];for(let _ of[-i/2-.3,i/2+.3]){let m=new Ye(.9,t*.92);m.rotateY(Math.PI/2),m.translate(_,t*.46,s*.28*(Math.random()<.5?1:-1)),d.push(m)}let g=new W(fn(d),ut(f,.75));d.forEach(_=>_.dispose()),r.add(g)}if(Math.random()<.4){let f=4+(Math.random()*5|0),d=6+Math.random()*10,g=[],_=n>0?-Math.PI/2:Math.PI/2,m=-n*(i/2+1.6);for(let p=0;p<f&&d<t-8;p++){let M=4+Math.random()*4,y=3+Math.random()*3,v=new Ye(M,y);v.rotateY(_),v.translate(m,d+y/2,s*.15),g.push(v),d+=y+1.2+Math.random()*2}if(g.length){let p=new W(fn(g),fo[Math.random()*fo.length|0]);g.forEach(M=>M.dispose()),r.add(p)}}if(Math.random()<.7){let f=new W(new de(Math.max(2,i*.25),3,Math.max(2,s*.25)),ot);f.position.set((Math.random()-.5)*i*.4,t+1.5,(Math.random()-.5)*s*.4),r.add(f)}if(Math.random()<.45){let f=8+Math.random()*26,d=new W(new qt(.35,.35,f,5),Bh);d.position.y=t+f/2,r.add(d)}let u=new W(new jn(.9,6,6),lo);if(u.position.y=t+1,r.add(u),Math.random()<.6){let f=[Kt,hn,16751164,8077298][Math.floor(Math.random()*4)],d=new an(new Gn(new de(i+.4,.4,s+.4)),Zi(f));d.position.y=t-.2,r.add(d)}if(Math.random()<.7){let f=Math.min(i*.9,10+Math.random()*14),d=lu(f,f*.5);d.position.set(-n*(i/2+.4),8+Math.random()*(t*.5),0),d.rotation.y=n>0?-Math.PI/2:Math.PI/2,r.add(d)}{let f=new W(new Ye(i*.96,2.2),ut([16751164,16722902,2814207][Math.floor(Math.random()*3)],.55));f.position.set(-n*(i/2+.25),2.2,0),f.rotation.y=n>0?-Math.PI/2:Math.PI/2,r.add(f)}if(Math.random()<.55){let f=Math.min(t*.5,18+Math.random()*22),d=new W(new Ye(3.4,f),po[Math.random()*po.length|0]);d.position.set(-n*(i/2+2.2),6+Math.random()*(t*.4)+f/2,s*.2),r.add(d)}r.position.set(n*(44+i/2+Math.random()*150),-30,e),r.updateMatrixWorld(!0);{let f=new vt().setFromObject(r);r.userData={hw:Math.max(4,f.max.x-r.position.x,r.position.x-f.min.x),hd:s/2,top:-30+t,done:!1}}return r}var sv=new C(0,0,1),ME=new C(0,1,0);function rv(n){n.updateMatrixWorld(!0);let e=new C,t=new C,i=new C,s=new C,r=new C,o=new C,a=[],l=0;if(n.traverse(_=>{if(!_.isMesh||!_.geometry||!_.geometry.attributes.position)return;let m=_.geometry.attributes.position,p=_.geometry.index,M=_.matrixWorld,y=p?p.count/3:m.count/3;for(let v=0;v<y;v++){let P=p?p.getX(v*3):v*3,w=p?p.getX(v*3+1):v*3+1,R=p?p.getX(v*3+2):v*3+2;e.fromBufferAttribute(m,P).applyMatrix4(M),t.fromBufferAttribute(m,w).applyMatrix4(M),i.fromBufferAttribute(m,R).applyMatrix4(M),s.subVectors(t,e),r.subVectors(i,e),o.crossVectors(s,r);let D=o.length()*.5;D<2||(o.normalize(),!(Math.abs(o.y)>.55)&&(a.push({ax:e.x,ay:e.y,az:e.z,bx:s.x,by:s.y,bz:s.z,cx:r.x,cy:r.y,cz:r.z,nx:o.x,ny:o.y,nz:o.z,area:D}),l+=D))}}),!a.length||l<=0)return null;let h=Math.max(6,Math.min(150,Math.round(l/220))),c=new Pe,u=new _n,f=new C,d=[];for(let _=0;_<h;_++){let m=Math.random()*l,p=0;for(;p<a.length-1&&(m-=a[p].area)>0;)p++;let M=a[p],y=Math.random(),v=Math.random();y+v>1&&(y=1-y,v=1-v);let P=M.ax+M.bx*y+M.cx*v,w=M.ay+M.by*y+M.cy*v,R=M.az+M.bz*y+M.cz*v;f.set(M.nx,M.ny,M.nz),u.setFromUnitVectors(sv,f),c.makeRotationFromQuaternion(u);let D=Xh.clone();D.applyMatrix4(c),D.translate(P+M.nx*.4,w+M.ny*.4,R+M.nz*.4),d.push(D)}let g=fn(d);return d.forEach(_=>_.dispose()),new W(g,new me({color:fl,transparent:!0,opacity:.8,depthWrite:!1,side:gt}))}function ov(n,e){let t=new lt,i=rl[Math.floor(Math.random()*rl.length)],s=ul(i,Math.random()<.5?Kt:hn);s.updateMatrixWorld(!0);let r=new vt().setFromObject(s),o=new C;r.getSize(o),s.scale.setScalar((65+Math.pow(Math.random(),1.6)*320)/Math.max(o.y,.001)),s.updateMatrixWorld(!0);let a=new vt().setFromObject(s);s.position.y=-a.min.y,t.add(s),t.updateMatrixWorld(!0);let l=new vt().setFromObject(t),h=rv(s);h&&t.add(h);let c=new W(new jn(.9,6,6),lo);c.position.set((l.min.x+l.max.x)/2,l.max.y+1,(l.min.z+l.max.z)/2),t.add(c);let u=n>0?-l.min.x:l.max.x;return t.position.set(n*(44+u+Math.random()*150),-30,e),t.userData={hw:Math.max(Math.abs(l.min.x),Math.abs(l.max.x)),hd:Math.max(Math.abs(l.min.z),Math.abs(l.max.z)),top:-30+(l.max.y-l.min.y),done:!1},vr(t),t}var Up=166,pr=Up*36,rl=[],$h=[];for(let n=0;n<32;n++)$h.push(dl(30,70,[2,8,3,10,17,18,24,27,21,0][n%10]));function Hh(n,e,t){let i=t===0?22+Math.random()*58:t===1?14+Math.random()*34:8+Math.random()*18,s=18+Math.random()*30,r=14+Math.random()*24,o=new lt,a=$h[Math.random()*$h.length|0],l=new W(new de(s,i,r),[a,a,Ot,Ot,a,a]);if(l.position.y=i/2,o.add(l),Math.random()<(t===2?.3:.7)){let c=Math.min(s*1.1,12+Math.random()*10),u=lu(c,c*.45);u.position.set(0,i+c*.28,0),u.rotation.y=n>0?-Math.PI/2:Math.PI/2,u.rotation.x=-.12,o.add(u);let f=new W(new de(.5,c*.3,.5),ot);f.position.set(-c*.3,i+c*.12,0),o.add(f);let d=new W(new de(.5,c*.3,.5),ot);d.position.set(c*.3,i+c*.12,0),o.add(d)}if(Math.random()<(t===2?.2:.5)){let c=10+Math.random()*10,u=new W(new Ye(3.4,c),po[Math.random()*po.length|0]);u.position.set(-n*(s/2+2),i*.4+c/2,r*.2),o.add(u)}if(Math.random()<(t===2?.2:.6)){let c=3+(Math.random()*4|0),u=[16734780,16765514,16747052][Math.random()*3|0],f=n>0?-Math.PI/2:Math.PI/2,d=[];for(let _=0;_<c;_++){let m=new Ye(1.3,1.8);m.rotateY(f),m.translate(-n*(s/2+.6),i-1.5,-r/2+(_+.5)*(r/c)),d.push(m)}let g=new W(fn(d),ut(u,.95));d.forEach(_=>_.dispose()),o.add(g)}let h=t===0?64+Math.random()*260:t===1?330+Math.random()*340:700+Math.random()*400;return o.position.set(n*(h+s/2),-30,e),o.userData={hw:s/2,hd:r/2,top:-30+i,done:!1},o}var jh=[];function av(){return Ss(32,44,n=>{n.clearRect(0,0,32,44);let e=["#7adcff","#ff7ad0","#b0ff7a","#ffd24a"][Math.random()*4|0];n.strokeStyle=e,n.fillStyle=e,n.globalAlpha=.9,n.lineWidth=1;let t=Math.random()*3|0;if(t===0)n.beginPath(),n.moveTo(16,4),n.lineTo(27,22),n.lineTo(16,40),n.lineTo(5,22),n.closePath(),n.stroke(),n.globalAlpha=.3,n.fill(),n.globalAlpha=.9;else if(t===1)n.beginPath(),n.arc(16,22,11,0,7),n.stroke(),n.fillRect(13,19,6,6);else for(let i=4;i<40;i+=6)Math.random()<.85&&n.fillRect(10,i,12,3);for(let i=0;i<44;i+=3)n.clearRect(0,i,32,1)})}var xs=6,lv=pr/xs,ii=[],pu=[],Qh=[],mu=[],zh=new Array(xs),kh=new Array(xs);function cv(){for(let t=0;t<xs;t++){let i=new lt;i.userData.minZ=0,ii.push(i),Qh.push([])}let n=t=>{let i=t.position.z,s=Math.min(xs-1,Math.floor((-i-.001)/lv));ii[s].add(t),i<ii[s].userData.minZ&&(ii[s].userData.minZ=i);let r={x:t.position.x,hw:t.userData.hw,top:t.userData.top,z0:i,k:s,done:!1};return pu.push(r),Qh[s].push(r),r},e=[];for(let t=0;t<Up;t++){let i=Math.random()<.5?1:-1,s=-t*36-70-Math.random()*30;if(rl.length&&Math.random()<.1){let r=ov(i,s);r.userData.z0=r.position.z,it.add(r),mu.push(r)}else{let r=n(iv(i,s));r.top+30>120&&e.push(r)}}for(let t=0;t<130;t++){let i=Math.random()<.5?1:-1;n(Hh(i,-t*(pr/130)-60-Math.random()*30,0))}for(let t=0;t<70;t++){let i=Math.random()<.5?1:-1;n(Hh(i,-t*(pr/70)-80-Math.random()*50,1))}for(let t=0;t<44;t++){let i=Math.random()<.5?1:-1;n(Hh(i,-t*(pr/44)-90-Math.random()*70,2))}for(let t of ii)vr(t),it.add(t);for(let t=0;t<36&&jh.length<14&&e.length;t++){let i=e[Math.random()*e.length|0];if(i.holo)continue;i.holo=!0;let s=new me({map:av(),transparent:!0,opacity:.55,blending:kt,depthWrite:!1,side:gt}),r=new lt,o=new W(new Ye(16,22),s);r.add(o);let a=new W(new Ye(16,22),s);a.rotation.y=Math.PI/2,r.add(a),r.position.set(i.x,i.top+16+Math.random()*14,i.z0),ii[i.k].add(r),jh.push(r)}}var ja=[],Op=[],Bp=2e4;(function(){for(let n=0;n<26;n++){let e=420+Math.random()*680,t=60+Math.random()*90,i=60+Math.random()*90,s;if(n%5<2){let l=new de(t,e,i);bp(l,Math.random()*ru.length|0,Math.random()<.5),s=new W(l,[qi,qi,Ot,Ot,qi,qi]),au++}else{let l=Jh[n%Jh.length];s=new W(new de(t,e,i),[l,l,Ot,Ot,l,l])}let r=new lt;s.position.y=e/2,r.add(s);let o=[Kt,hn,16751164][n%3];for(let l of[-t/2-.3,t/2+.3]){let h=new W(new Ye(1.6,e*.85),ut(o,.8));h.position.set(l,e*.45,0),h.rotation.y=Math.PI/2,r.add(h)}if(Math.random()<.8){let l=lu(t*.85,t*.45);l.position.set(0,e*.55+Math.random()*e*.25,i/2+.6),r.add(l)}let a=new W(new jn(2.2,6,6),lo);a.position.y=e+3,r.add(a),r.userData.h=e,r.position.set((n%2?1:-1)*(320+Math.random()*620),-30,-(n/26)*Bp-Math.random()*600),vr(r),it.add(r),ja.push(r)}for(let n=0;n<5;n++){let e=ja[Math.floor(Math.random()*ja.length)],t=new W(new Ye(26,420).translate(0,210,0),new me({color:[10146047,16743120,16765562,8060826,12622591][n%5],transparent:!0,opacity:.1,blending:kt,depthWrite:!1,side:gt}));t.position.y=e.userData.h,t.rotation.z=.5+Math.random(),t.userData.spin=(Math.random()<.5?-1:1)*(.1+Math.random()*.15),e.add(t),Op.push(t)}})();var hp=64500,gu=-16e3,cn=new lt,ol=[],al=[],_u=[],yu=[],Mu=[];function xo(n,e,t,i,s){let r=new de(i,t,24);r.translate(n,-30+t/2,e),_u.push(r);let o=new Gn(new de(i,t,24));if(o.scale(1.004,1.004,1.004),o.translate(n,-30+t/2,e),yu.push(o),s){let a=Kx(n-i/2,-30,e-12,n+i/2,-30+t,e+12,fl,.35,!0,34,16);Mu.push(a.geometry)}}var hv=[[220,228,0,560,1e3,56,150,!0],[160,314,-260,700,1080,74,180,!1],[120,420,-560,880,1180,96,210,!1],[85,595,-900,1060,1300,120,240,!1],[55,920,-1300,1280,1450,150,300,!1]],vo=250;function gl(n,e){let t=Math.min(1,Math.max(0,(Math.abs(n)-vo)/1300));return e*(.42+.58*t)}for(let n of hv){let e=n[0],t=n[1],i=n[2];for(let s=0;s<e;s++){let r=(s-(e-1)/2)*t+(Math.random()-.5)*t*.55;if(Math.abs(r)<vo)continue;let o=n[3]+Math.random()*n[4];Math.random()<.07&&(o*=1.3+Math.random()*.5),xo(r,i-Math.random()*16,gl(r,o),n[5]+Math.random()*n[6],n[7])}}for(let n=0;n<16;n++){let e=-1600-n*420,t=54-(n*2.5|0),i=52e3/(t-1),s=1250+n*95,r=150+n*22;for(let o=0;o<t;o++){let a=(o-(t-1)/2)*i+(Math.random()-.5)*i*.5;Math.abs(a)<vo||xo(a,e-Math.random()*20,gl(a,s+Math.random()*850),r+Math.random()*320,!1)}}for(let n=0;n<26;n++){let e=(n-12.5)*2100+(Math.random()-.5)*900;Math.abs(e)<vo*1.2||xo(e,-8800-Math.random()*1200,gl(e,2e3+Math.random()*1800),420+Math.random()*520,!1)}for(let n=0;n<14;n++){let e=(Math.random()<.5?-1:1)*(vo*1.4+Math.random()*2e4);xo(e,-3e3-Math.random()*5e3,gl(e,1600+Math.random()*1600),60+Math.random()*80,!1)}function Fp(n,e){xo(n,0,4800,148,!0);let t=new W(new de(176,42,84),new me({color:e,fog:!1}));t.position.set(n,4770,0),cn.add(t);let i=new W(new qt(5.2,5.2,760,8),new me({color:e,fog:!1,transparent:!0,opacity:.42}));i.position.set(n,5150,0),cn.add(i)}Fp(-95,Kt);Fp(95,hn);cn.add(new W(fn(_u),new me({color:1312294,fog:!1})));_u.forEach(n=>n.dispose());var Hp=new $n({color:6956200,fog:!1,transparent:!0,opacity:.2});al.push(Hp);cn.add(new an(fn(yu),Hp));yu.forEach(n=>n.dispose());var zp=new me({color:fl,transparent:!0,opacity:.02,depthWrite:!1,side:gt,fog:!1});ol.push(zp);cn.add(new W(fn(Mu),zp));Mu.forEach(n=>n.dispose());function kp(n){let{r:e,g:t,b:i}=Mp(n),s=document.createElement("canvas");s.width=4,s.height=128;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,0,128);return o.addColorStop(0,`rgba(${e},${t},${i},0)`),o.addColorStop(.5,`rgba(${e},${t},${i},1)`),o.addColorStop(1,`rgba(${e},${t},${i},0)`),r.fillStyle=o,r.fillRect(0,0,4,128),new An(s)}var Yi=new W(new Ye(6e4,5200),new me({map:kp(Xn[0].glow),transparent:!0,opacity:.1,blending:kt,depthWrite:!1,fog:!1}));Yi.position.set(0,560,-360);cn.add(Yi);cn.position.z=gu;Ti.add(cn);var xu=[],vu=[-26,-9,9,26],mo=[];for(let n=0;n<6;n++)mo.push(new me({map:Ss(64,32,e=>{e.fillStyle=["#0a1626","#140a26","#260a18","#0a2020","#1a1a10","#101226"][n],e.fillRect(0,0,64,32),e.fillStyle="rgba(255,255,255,0.08)";for(let t=4;t<32;t+=7)e.fillRect(0,t,64,1);e.fillStyle=["#ff2b5c","#2af0ff","#ffe08a","#ff2bd6","#7aff9a","#c09aff"][n],e.fillRect(0,14,64,2),e.globalAlpha=.85,e.fillStyle="#9ad0ff";for(let t=6;t<58;t+=9)e.fillRect(t,6,5,4);e.globalAlpha=1})}));function uv(n){let e=new lt,t=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];e.add(new W(new de(4.4,2,8),mo[Math.random()*mo.length|0])),e.add(new an(new Gn(new de(4.4,2,8)),Zi(t)));let i=new W(new Ye(3.6,.7),Tp);return i.position.set(0,.2,4.1),e.add(i),e.position.set(vu[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,-28,n),e.userData.v=.4+Math.random()*.3,e}function fv(n){let e=new lt,t=Ms[Math.floor(Math.random()*Ms.length)],i=[16722780,2814207,16769162,16722902][Math.floor(Math.random()*4)];{let h=t.clone(!0),c=mo[Math.random()*mo.length|0];h.traverse(u=>{u.isMesh&&(u.material=c,u.add(new an(new Gn(u.geometry,25),Zi(i))))}),e.add(h)}e.updateMatrixWorld(!0);let s=new vt().setFromObject(e),r=new C;s.getSize(r);let o=Math.max(r.z,.001);e.scale.setScalar(6.5/o),e.updateMatrixWorld(!0);let a=new vt().setFromObject(e);e.position.y=-28-a.min.y;let l=new W(new Ye(2.6,.6),Tp);return l.position.set(0,.6,a.max.z||3),e.add(l),e.position.x=vu[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,e.position.z=n,e.userData.v=.4+Math.random()*.3,e}var dv=2856,Ms=[];function pv(){for(let n=0;n<42;n++){let e=Ms.length?fv(-n*68-40):uv(-n*68-40);vr(e),e.userData.z0=e.position.z,e.userData.x0=e.position.x,it.add(e),xu.push(e)}}var Gp=[],Gh=4200,Qa=[];function mv(n){let e=new lt,t=n?16734815:[2814207,16769162,16722902][Math.floor(Math.random()*3)],i;if(Qa.length)i=Qa[Math.random()*Qa.length|0].clone(!0),i.traverse(o=>{if(o.isMesh){let a=o.material&&o.material.color?o.material.color.clone():new _e(1709104);o.material=new me({color:a.multiplyScalar(.55)}),o.add(new an(new Gn(o.geometry,30),Zi(t)))}}),i.scale.setScalar(.9+Math.random()*.4);else if(Ms.length){i=ul(Ms[Math.floor(Math.random()*Ms.length)],t),i.updateMatrixWorld(!0);let o=new vt().setFromObject(i),a=new C;o.getSize(a),i.scale.setScalar(8.5/Math.max(a.z,.001))}else{i=new lt;let o=new de(4.5,1.4,8);i.add(new W(o,vp())),i.add(new an(new Gn(o),Zi(t)))}e.add(i),e.updateMatrixWorld(!0);let s=new vt().setFromObject(e),r=new C;if(s.getSize(r),r.x>30&&(i.scale.multiplyScalar(30/r.x),e.updateMatrixWorld(!0),s.setFromObject(e),s.getSize(r)),e.userData.rx=Math.min(16,Math.max(2.5,r.x/2)),e.userData.ry=Math.max(2,r.y/2),e.userData.cy=r.y/2,n){e.rotation.y=Math.PI;let o=new W(new Ye(Math.max(3.2,r.x*.4),1.1),new me({color:14676735,transparent:!0,opacity:.9,blending:kt,depthWrite:!1,side:gt}));o.position.set(0,r.y*.4,s.min.z-.4),e.add(o)}else{let o=new W(new Ye(Math.max(2.4,r.x*.35),.9),new me({color:16751164,transparent:!0,opacity:.85,blending:kt,depthWrite:!1,side:gt}));o.position.set(0,r.y*.4,s.max.z+.4),e.add(o)}return e}var Vp=new qa,gv=["01_pulse_block_44m","02_vector_tower_88m","03_slash_roof_62m","04_night_monolith_118m","05_setback_hotel_72m","06_skyline_spire_102m"],_v=["01_midnight_wedge","02_pulse_sedan","03_vector_van","04_afterburner_supercar","05_night_interceptor"];function el(n,e){return Promise.all(n.map(t=>new Promise(i=>{Vp.load("models/"+e+"/"+t+".glb",s=>i(s.scene),void 0,()=>i(null))}))).then(t=>t.filter(Boolean))}var eu=!1;function Wp(n){et=mv(!1),et.traverse(i=>{i.isLineSegments&&(i.material=Zi(16722902))});let e=new W(new Ye(3.4,1.4),ut(16738860,.9));e.position.set(0,.6,5.6),et.add(e);let t=new W(new Ye(2.2,.9),ut(16765514,.9));t.position.set(0,.6,7.4),et.add(t),et.position.set(0,14,n),it.add(et)}var ll=[],yv=15e3;function up(n){let t=Math.random()<.5,i=(t?-1:1)*(30+Math.random()*50),s=(t?1:-1)*(40+Math.random()*55),r={x0:i-18,x1:i+18,narrow:!0},o={x0:s-30,x1:s+30,narrow:!1},a=[r,o].sort((h,c)=>h.x0-c.x0),l=[-150,a[0].x0,a[0].x1,a[1].x0,a[1].x1,150];for(let h=0;h<3;h++){let c=l[h*2],u=l[h*2+1];if(u-c<2)continue;let f=new W(new de(u-c,100,6),ot);f.position.set((c+u)/2,40/2,-3),n.add(f);let d=new W(new de(u-c,1.2,6.4),ut(16722748,.9));d.position.set((c+u)/2,70-.6,-3),n.add(d)}for(let h of[r,o]){let c=h.narrow?16722902:2814207;for(let u of[h.x0,h.x1]){let f=new W(new de(1.4,100,6.4),ut(c,.9));f.position.set(u,40/2,-3),n.add(f)}}return{type:"gate",len:6,top:70,gaps:[r,o]}}function Mv(n){let s=new W(new de(6,106,520),ot);s.position.set(-88,46/2,-520/2),n.add(s);let r=new W(new de(6,106,520),ot);r.position.set(88,46/2,-520/2),n.add(r);let o=new W(new de(182,6,520),ot);o.position.set(0,79,-520/2),n.add(o);for(let a=0;a<8;a++){let l=new W(new Yr(48,1.2,4,4),ut([Kt,hn,16765514][a%3],.9));l.rotation.z=Math.PI/4,l.position.set(0,20,-a*(520/8)-30),n.add(l)}return{type:"tunnel",len:520,xLim:82,yLim:70}}function xv(n){for(let i of[-1,1]){let s=new W(new de(8,110,640),ot);s.position.set(i*58,25,-640/2),n.add(s);let r=new W(new de(8.4,1.5,640),ut(i<0?Kt:hn,.9));r.position.set(i*58,81,-640/2),n.add(r)}return{type:"canyon",len:640,xLim:50}}function fp(n){let i=[];for(let s=0;s<5;s++){let r=(s%2?1:-1)*(26+Math.random()*14),o=-s*(560/5)-40,a=new W(new qt(4,5,120,8),ot);a.position.set(r,30,o),n.add(a);let l=new W(new qt(4.4,4.4,3,8),ut(s%2?hn:Kt,.95));l.position.set(r,92,o),n.add(l),i.push({x:r,z:o,done:!1})}return{type:"slalom",len:560,pts:i}}function vv(n){let i=(s,r,o)=>{let a=new W(new de(r-s,100,6),ot);a.position.set((s+r)/2,20,o),n.add(a);let l=new W(new de(r-s,1.2,6.4),ut(16765514,.9));l.position.set((s+r)/2,69.4,o),n.add(l)};return i(-150,15,-3),i(-15,150,-757),{type:"scurve",len:760,top:70,g1:15,g2:-15}}function Ev(n){let t=new W(new de(300,10,90),ot);t.position.set(0,35,-90/2),n.add(t);let i=new W(new de(300,1.2,90+.6),ut(16751164,.9));i.position.set(0,30.6,-90/2),n.add(i);let s=new W(new de(300,1.2,90+.6),ut(2814207,.9));s.position.set(0,39.4,-90/2),n.add(s);for(let r of[-110,110]){let o=new W(new de(10,60,12),ot);o.position.set(r,0,-90/2),n.add(o)}return{type:"bridge",len:90,yLow:28,yHigh:42}}function dp(n){let s=new W(new de(16,108,620),ot);s.position.set(0,48/2,-620/2),n.add(s);let r=new W(new de(16.4,1.4,620),ut(16765514,.9));r.position.set(0,78-.7,-620/2),n.add(r);let o=new W(new de(108,108,300),ot);o.position.set(-96,48/2,-300/2),n.add(o);let a=new W(new de(4,1.4,300),ut(16722902,.95));a.position.set(-43,78-.7,-300/2),n.add(a);let l=new W(new de(76,108,620),ot);l.position.set(112,48/2,-620/2),n.add(l);let h=new W(new de(4,1.4,620),ut(2814207,.95));h.position.set(75,78-.7,-620/2),n.add(h);for(let c of[-1,1]){let u=new W(new de(14,2.2,1.4),ut(16765514,.95));u.position.set(c*5.5,34,1.2),u.rotation.z=c*.7,n.add(u)}return{type:"fork",len:620,lenL:300,top:78,divH:8,lXin:-42,rXout:74}}function Sv(){let n=[{z:-2600,kind:"flow"},{z:-5800,kind:"flow"},{z:-7600,kind:"quick"},{z:-8800,kind:"quick"},{z:-11600,kind:"flow"},{z:-14200,kind:"fork"}];for(let e of n){let t=new lt,i=Math.random(),s=e.kind==="fork"?dp(t):e.kind==="quick"?i<.45?up(t):i<.8?Ev(t):fp(t):i<.22?up(t):i<.42?Mv(t):i<.6?xv(t):i<.75?fp(t):i<.9?vv(t):dp(t);for(let r of[-1,1]){let o=new W(new de(2.4,32,2.4),ot);o.position.set(r*118,-14,420),t.add(o);for(let a=0;a<3;a++){let l=new W(new de(9,1.8,1.2),ut(16765514,.95));l.position.set(r*118-r*2.6,a*8,420),l.rotation.z=r*.65,t.add(l);let h=new W(new de(9,1.8,1.2),ut(16765514,.95));h.position.set(r*118+r*2.6,a*8,420),h.rotation.z=-r*.65,t.add(h)}}t.position.z=e.z-Math.random()*200,t.userData=Object.assign({passed:!1,z0:t.position.z},s),vr(t),it.add(t),ll.push(t)}}function tu(){eu||(eu=!0,cv(),pv(),Wp(vi?-700:-900),Sv(),console.log("AF2-Fassaden im Einsatz:",au))}var bv=["01_sky_dart_interceptor","02_afterburner_jet","03_pulse_commuter","04_vector_cargo_lifter","05_neon_bomber","06_skyline_heavy_transport"];Promise.all([el(gv,"buildings"),el(_v,"vehicles"),el(bv,"aircraft/synthwave_aircraft")]).then(n=>{rl=n[0],Ms=n[1],Qa=n[2],tu()}).catch(()=>tu());setTimeout(tu,5e3);var Xp=new ct,nu=[],pp=0,mp=44,gp=560,_p=0;for(;nu.length<450&&_p<6e3;){_p++;let n=(Math.random()-.5)*4200,e=380+Math.random()*640,t=-2600-Math.random()*2600;(n-pp)*(n-pp)+(e-mp)*(e-mp)<gp*gp||nu.push(n,e,t)}Xp.setAttribute("position",new je(nu,3));var Eu=new us({color:12374271,size:1.5,transparent:!0,opacity:.5,fog:!1});Ti.add(new tr(Xp,Eu));var In=new lt;(function(){let n=new ct;n.setAttribute("position",new _t(new Float32Array([0,0,-4.2,-3.2,-.3,2.6,0,.7,1.4,0,0,-4.2,0,.7,1.4,3.2,-.3,2.6,0,0,-4.2,0,.7,1.4,0,-.9,2.4,0,0,-4.2,0,-.9,2.4,0,.7,1.4]),3)),n.computeVertexNormals(),In.add(new W(n,new me({color:530986,side:gt}))),In.add(new an(new Gn(n,1),Zi(Kt)));let e=new W(new qr(.6),new me({color:hn}));e.position.set(0,.35,-.6),e.scale.set(1,.6,1.8),In.add(e);for(let t of[-3,3]){let i=new W(new jn(.28,6,6),new me({color:t<0?hn:Kt}));i.position.set(t,-.25,2.4),In.add(i)}})();it.add(In);Vp.load("models/ship/glidebooster_vx7.glb",n=>{let e=ul(n.scene,Kt);e.updateMatrixWorld(!0);let t=new vt().setFromObject(e),i=new C,s=new C;t.getSize(i),t.getCenter(s);let r=7/Math.max(.001,i.x);for(e.scale.setScalar(r),e.position.set(-s.x*r,-s.y*r,-s.z*r);In.children.length;)In.remove(In.children[0]);In.add(e);let o=new W(new qr(.5),new me({color:hn}));o.position.set(0,.4,-.8),o.scale.set(1,.6,1.8),In.add(o)},void 0,()=>{});var Tv=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.28,"rgba(255,214,130,0.85)"),t.addColorStop(.6,"rgba(255,110,70,0.38)"),t.addColorStop(1,"rgba(255,50,130,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new An(n);return i.colorSpace=nt,i})(),iu=[];for(let n=0;n<10;n++){let e=new W(new Ye(3.4-.22*n,3.4-.22*n),new me({map:Tv,color:n<5?16767136:16751327,transparent:!0,opacity:.55-n*.048,blending:kt,depthWrite:!1}));it.add(e),iu.push(e)}var xn={};addEventListener("keydown",n=>{if(xn[n.code]=!0,n.code==="Space"&&n.preventDefault(),dn){!n.repeat&&performance.now()-bs>600&&_o();return}if(n.code==="KeyR"&&_r(),n.code==="KeyT"&&(Ut.superhot=!Ut.superhot),n.code==="Escape"||n.code==="KeyP"){vs();return}if(Ei){n.code==="ArrowUp"&&(Si=0),n.code==="ArrowDown"&&(Si=1),(n.code==="ArrowUp"||n.code==="ArrowDown")&&hl(),n.code==="Enter"&&Kp();return}br()});addEventListener("keyup",n=>{xn[n.code]=!1});var Su="none";addEventListener("gamepadconnected",n=>{Su=n.gamepad.id,br()});function bu(){let n=navigator.getGamepads?navigator.getGamepads():[];for(let e of n)if(e&&e.connected)return e;return null}function Av(){let n=Mi,e=0,t=0,i=1,s=0;return n<3?i=.6:n<8?e=Math.sin(n*1.2)*.25:n<12?(e=Math.sin(n*2.2)*.35,t=Math.sin(n*1.4)*.3):n<13.4?(i=0,e=-.55):n<17?e=.3:n<21&&(e=Math.sin(n*3.1)*.45,t=Math.sin(n*2.2)*.4),{x:e,y:t,boost:i,brake:s,fire:0}}function wv(){if(vi&&Es&&!Ei&&!dn)return Av();let n=0,e=0,t=0,i=0,s=0;(xn.ArrowLeft||xn.KeyA)&&(n-=1),(xn.ArrowRight||xn.KeyD)&&(n+=1),(xn.ArrowUp||xn.KeyW)&&(e+=1),(xn.ArrowDown||xn.KeyS)&&(e-=1),(xn.ShiftLeft||xn.ShiftRight)&&(t=1),xn.Space&&(i=1);let r=bu();if(r){Su=r.id;let o=l=>Math.abs(l)<.12?0:l;n+=o(r.axes[0]||0),e-=o(r.axes[1]||0);let a=l=>r.buttons[l]?r.buttons[l].value:0;t=Math.max(t,a(7),a(5)),i=Math.max(i,a(6),a(4)),s=Math.max(a(0),a(2))}return{x:Math.max(-1,Math.min(1,n)),y:Math.max(-1,Math.min(1,e)),boost:t,brake:i,fire:s}}var Ut={stickMod:1.35,turnRate:17,smooth:.5,rollMod:.85,baseSpeed:33,lateralGain:3.1,boxW:150,boxH:95,invertY:!1,superhot:!0,timeFloor:.02},Pn={x:0,y:0,z:0},ht=0,Je=22,yi=1,ti=0,mr=0,ln=0,dn=!1,Wn=1,Le=0,pe=1,Gt=0,jt=1,io=0,xt=!1,hr=0,tl=0,ps=0,nl=!1,bs=0,ms=0,Ln=0,gs=0,ur=0,so=!1,ro=!1,oo=0,et=null,Za=Math.random()*6,fr=0,gr=0,Yt=0,vi=location.hash==="#trailer",su=Xn[0].skyA,qp=Xn[0].skyB,Rv=[0,16,32,45,55,72,100],Mr=document.createElement("canvas");Mr.width=96;Mr.height=512;var no=Mr.getContext("2d"),_l=new An(Mr);_l.colorSpace=nt;_l.minFilter=Vt;var cl=-9;function go(n){let e=Mr.width,t=Mr.height,i=no.createLinearGradient(0,0,0,t);for(let o=0;o<su.length;o++){let a=su[o],l=qp[o];i.addColorStop(Rv[o]/100,`rgb(${Math.round(a[0]+(l[0]-a[0])*n)},${Math.round(a[1]+(l[1]-a[1])*n)},${Math.round(a[2]+(l[2]-a[2])*n)})`)}no.fillStyle=i,no.fillRect(0,0,e,t);let s=no.getImageData(0,0,e,t),r=s.data;for(let o=0;o<r.length;o+=4){let a=Math.random()*11-5.5|0;r[o]+=a,r[o+1]+=a,r[o+2]+=a}no.putImageData(s,0,0),_l.needsUpdate=!0,cl=n}go(0);var yl=new W(new Ye(2,2),new me({map:_l,depthWrite:!1,depthTest:!1,fog:!1}));yl.position.set(0,0,-120);yl.scale.set(560,320,1);yl.renderOrder=-1;Rt.add(yl);Ti.add(Rt);var Tu=14,_s=new Float32Array(Tu*6),Yp=[];for(let n=0;n<Tu;n++){let e=Math.random()*Math.PI*2,t=6+Math.random()*16;Yp.push({x:Math.cos(e)*t,y:Math.sin(e)*t*.62,z:-30-Math.random()*130,len:18+Math.random()*26,v:1+Math.random()*.7})}var Au=new ct;Au.setAttribute("position",new _t(_s,3));var co=new $n({color:10479871,transparent:!0,opacity:0,blending:kt,depthWrite:!1,depthTest:!1,fog:!1}),Ki=new an(Au,co);Ki.frustumCulled=!1;Ki.renderOrder=5;Ki.visible=!1;it.add(Ki);function _r(){Pn={x:0,y:0,z:0},ht=0,Je=22,ti=0;for(let e of ii)e.position.z=0;for(let e of pu)e.done=!1;for(let e of mu)e.position.z=e.userData.z0,e.userData.done=!1;for(let e of xu)e.position.z=e.userData.z0,e.position.x=e.userData.x0,e.userData.done=!1;for(let e of Gp)e.position.set(e.userData.x0,e.userData.y0,e.userData.z0),e.userData.done=!1;il.position.z=0,mr=0,ln=0,dn=!1,cn.position.z=gu,Le=0,pe=1,Gt=0,jt=1,io=0,xt=!1,hr=0,tl=0,ps=0,gr=0,Yt=0,fr=0,ms=0,Ln=0,gs=0,ur=0,so=!1,ro=!1,oo=0,co.opacity=0,Ki.visible=!1,et&&(et.visible=!0,et.position.set(0,14,vi?-700:-900));for(let e of ll)if(e.position.z=e.userData.z0,e.userData.passed=!1,e.userData.hit=!1,e.userData.side=void 0,e.userData.punkGap=void 0,e.userData.pts)for(let t of e.userData.pts)t.done=!1;Rt.fov=66,Rt.updateProjectionMatrix(),uo.strength=.9;let n=document.getElementById("pops");n&&(n.innerHTML="");for(let e of ol)e.opacity=.12;for(let e of al)e.opacity=.42;Yi.material.opacity=.14,Eu.opacity=.5,go(0),Dv()}var Ei=!1,yp=!1,Si=0,Cv=()=>[document.getElementById("btnResume"),document.getElementById("btnRestart")];function hl(){Cv().forEach((e,t)=>e.classList.toggle("sel",t===Si))}function Kp(){Si===0?vs():(_r(),vn.restart(),Ei&&vs())}function vs(){Es&&(Ei=!Ei,document.getElementById("pause").style.display=Ei?"flex":"none",Ei?(Si=0,hl(),vn.pause(),document.getElementById("dmg").style.opacity=0):vn.resume())}function Pv(){let n=bu(),e=!!(n&&n.buttons[9]&&n.buttons[9].pressed),t=e&&!yp;return yp=e,t}var cr={up:!1,down:!1,a:!1,b:!1,any:!1};function Ja(){let n=bu();if(!n)return{};let e=h=>!!(n.buttons[h]&&n.buttons[h].pressed),t=n.axes[1]||0,i=e(12)||t<-.5,s=e(13)||t>.5,r=e(0),o=e(1),a=n.buttons.some(h=>h&&h.pressed)||Math.abs(n.axes[0]||0)>.6||Math.abs(t)>.6,l={up:i&&!cr.up,down:s&&!cr.down,a:r&&!cr.a,b:o&&!cr.b,any:a&&!cr.any};return cr={up:i,down:s,a:r,b:o,any:a},l}document.getElementById("btnResume").addEventListener("click",n=>{n.stopPropagation(),vs()});document.getElementById("btnRestart").addEventListener("click",n=>{n.stopPropagation(),_r(),vn.restart(),Ei&&vs()});function Lv(){vn.pause(),bs=performance.now(),document.getElementById("dmg").style.opacity=0;let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),i=document.getElementById("btnEndRestart"),s=Wn<Xn.length;e&&(e.textContent=s?"LEVEL "+Wn+" CLEARED":"ALL CLEAR"),i&&(i.textContent=s?"NEXT: "+Xn[Wn].name+" \u2192":"FLY AGAIN"),t&&(t.textContent="SCORE "+Math.round(Le)+"   \xB7   RANK "+Iv(Le)+"   \xB7   BUSTS "+gr+"   \xB7   DISTANCE "+Math.round(mr)),n.style.display="flex"}function Iv(n){return n>=26e3?"S":n>=17e3?"A":n>=1e4?"B":n>=5e3?"C":"D"}function yt(n,e){let t=document.getElementById("pops");if(!t)return;t.childElementCount>4&&t.firstElementChild.remove();let i=document.createElement("div");i.className="pop",i.textContent=n,i.style.color=e,i.style.textShadow="0 0 12px "+e,t.appendChild(i),setTimeout(()=>{i.remove()},900)}function Zp(n){let e=Xn[n-1];su=e.skyA,qp=e.skyB,xi.material.map.dispose(),xi.material.map=Ep(e.sun),xi.material.needsUpdate=!0,Yi.material.map.dispose(),Yi.material.map=kp(e.glow),Yi.material.needsUpdate=!0,ao.material.map.dispose(),ao.material.map=Sp(e.haze),ao.material.needsUpdate=!0,Ti.fog.color.setHex(e.fog),vn.setTrack(e.music),cl=-9,go(0)}function Dv(){let n=document.getElementById("end");n&&(n.style.display="none")}function Nv(){vn.pause(),bs=performance.now(),document.getElementById("dmg").style.opacity=0,nl=!0;let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),i=document.getElementById("btnEndRestart");e&&(e.textContent="STALLED - CITY GOT YOU"),i&&(i.textContent="RETRY"),t&&(t.textContent="SCORE "+Math.round(Le)+"   \xB7   BUSTS "+gr+"   \xB7   DISTANCE "+Math.round(mr)),n.style.display="flex"}function Uv(){vn.pause(),bs=performance.now(),Yt=0,document.getElementById("bustfx").style.opacity=0;let n=document.getElementById("end");if(!n)return;let e=n.querySelector("h2"),t=n.querySelector(".dist"),i=document.getElementById("btnEndRestart");e&&(e.textContent="PUNK BOOSTER"),t&&(t.textContent="TOO FAST TO STOP"),i&&(i.textContent="REPLAY"),n.style.display="flex"}function _o(){if(!(dn&&performance.now()-bs<600)){if(vi){nl=!1,Mi=0,_r(),vn.restart();return}if(nl){nl=!1,_r(),vn.restart();return}Wn=Wn<Xn.length?Wn+1:1,Zp(Wn),_r()}}document.getElementById("btnEndRestart").addEventListener("click",n=>{n.stopPropagation(),_o()});function Vh(n,e,t,i){let s=(e-n)*t;return s>i&&(s=i),s<-i&&(s=-i),n+s}var Xi=0,Mi=0,Wh=60;function dr(n){let e=Pv();if(Es?e&&(dn?_o():vs()):Ja().any&&br(),Ei){let T=Ja();T.up&&(Si=Math.max(0,Si-1),hl()),T.down&&(Si=Math.min(1,Si+1),hl()),T.a&&Kp(),T.b&&vs(),Xi=0,requestAnimationFrame(dr);return}if(dn){performance.now()-bs>600&&Ja().any&&_o(),Xi=0,requestAnimationFrame(dr);return}if(!Es){cn.position.z=-8600,cn.scale.setScalar(1.35),cn.position.y=30*.35;for(let T of ol)T.opacity=.5;for(let T of al)T.opacity=.88;Yi.material.opacity=.5,xi.scale.setScalar(2.2),xi.position.y=-560,Math.abs(.85-cl)>.004&&go(.85),Rt.position.set(0,16,46),Rt.lookAt(0,40,-90),Xi=0,bi.info.reset(),ho.render(),requestAnimationFrame(dr);return}if(!eu){Xi=n,requestAnimationFrame(dr);return}let t=Xi?n-Xi:16.7,i=Xi?Math.min(3,t/33.37):1;Xi=n,Mi+=i/30,Wh+=(1e3/Math.max(1,t)-Wh)*.06;let s=wv(),r=Ut.invertY?-s.y:s.y,o=Math.max(Math.abs(s.x),Math.abs(s.y),s.boost,s.brake),a=Ut.superhot?Ut.timeFloor+(1-Ut.timeFloor)*Math.min(1,o/.25):1;yi+=(a-yi)*.25;let l=i*yi;vn.setEnergy(yi);let h=Ut.turnRate*i,c=1-Math.pow(1-Ut.smooth,i);Pn.y=Vh(Pn.y,s.x*Ut.stickMod,c,h),Pn.x=Vh(Pn.x,r*Ut.stickMod,c,h),Pn.z=Vh(Pn.z,s.x*Ut.rollMod,.12,5*i),ti+=(s.boost-ti)*.05;let u=Pn.y*to,f=Pn.x*to,d=Ut.baseSpeed*(1+ti*.45-s.brake*.5)*jt*(xt?1.22:1),g=Math.sin(u)*Math.cos(f)*d*Ut.lateralGain,_=Math.sin(f)*d*Ut.lateralGain,m=Math.cos(u)*Math.cos(f)*d;ht+=g*l,Je+=_*l,ht=Math.max(-Ut.boxW,Math.min(Ut.boxW,ht)),Je=Math.max(-18,Math.min(Ut.boxH,Je)),In.position.set(ht,Je,0),In.rotation.set(Pn.x*to,Pn.y*to,-Pn.z*to);let p=.7+.3*Math.sin(Mi*18);for(let T=0;T<iu.length;T++){let I=iu[T],L=T+1;I.position.set(ht-Math.sin(u)*L*1.3,Je+.2,2.6+L*1.35),I.lookAt(Rt.position);let U=(1.2-T*.08)*(.7+.6*o)*p*(xt?1.5:1);I.scale.set(U,U,U),I.material.opacity=(.5-T*.045)*(.3+.9*Math.min(1,o*1.4))}let M=m*l,y=Math.min(.1,t/1e3);s.boost>.5&&jt>.9&&yi>.8?(hr=Math.min(1.4,hr+y),tl=.9):xt&&tl>0?tl-=y:hr=Math.max(0,hr-y*2.2),xt=hr>=1.2,yi>.6&&s.boost<.4&&!dn?ps+=y*(s.brake>.3?1.6:1):ps=Math.max(0,ps-y*2),ps>2.6&&!dn&&(dn=!0,Nv()),vn.setRedline(xt),Ja(),s.boost>.5&&yi>.8?pe=Math.min(8,pe+(xt?.5:.22)*y):yi>.8?pe=Math.max(1,pe-.05*y):(pe=Math.max(1,pe-.7*y),Le=Math.max(0,Le-26*y)),Le+=M*.03*pe*(xt?1.3:1),Gt=Math.max(0,Gt-y),io=Math.max(0,io-y),gs=Math.max(0,gs-y),ur=Math.max(0,ur-y),Gt>.65&&(Ln=0,ms=0),jt+=(1-jt)*Math.min(1,y*1.6);for(let T=0;T<xs;T++)zh[T]=ii[T].position.z,kh[T]=zh[T]+M;for(let T of pu){let I=T.z0+zh[T.k],L=T.z0+kh[T.k];if(I<=0&&L>0&&!T.done){T.done=!0;let U=Math.abs(ht-T.x),O=U<T.hw+3;if(O&&Je<T.top+2)Gt=1,jt=.35,pe=1,Le=Math.max(0,Le-800),ti=0,yt("CRASH  -800","#ff4a5a");else if(U>=T.hw+3&&U<T.hw+16&&Je<T.top||O&&Je-T.top<15){Ln=gs>0?Ln+1:1,gs=2.5;let X=Math.round((150+40*(Ln-1))*pe*(xt?1.5:1));pe=Math.min(8,pe+.5),Le+=X,xt&&(Yt=Math.max(Yt,.22),Rt.position.x+=(Math.random()-.5)*1.6),yt((Ln>1?"NEAR MISS x"+Ln:"NEAR MISS")+"  +"+X,"#2af0ff")}}}for(let T=0;T<xs;T++){let I=kh[T];if(ii[T].userData.minZ+I>90){I-=pr;for(let L of Qh[T])L.done=!1}ii[T].position.z=I}for(let T of mu){let I=T.position.z,L=I+M,U=T.userData;if(I<=0&&L>0&&!U.done){U.done=!0;let O=Math.abs(ht-T.position.x),X=O<U.hw+3;if(X&&Je<U.top+2)Gt=1,jt=.35,pe=1,Le=Math.max(0,Le-800),ti=0,yt("CRASH  -800","#ff4a5a");else if(O>=U.hw+3&&O<U.hw+16&&Je<U.top||X&&Je-U.top<15){Ln=gs>0?Ln+1:1,gs=2.5;let q=Math.round((150+40*(Ln-1))*pe*(xt?1.5:1));pe=Math.min(8,pe+.5),Le+=q,xt&&(Yt=Math.max(Yt,.22),Rt.position.x+=(Math.random()-.5)*1.6),yt((Ln>1?"NEAR MISS x"+Ln:"NEAR MISS")+"  +"+q,"#2af0ff")}}L>90?(T.position.z=L-pr,U.done=!1):T.position.z=L}for(let T of xu){let I=T.position.z,L=I+M*(1-T.userData.v);I<=0&&L>0&&!T.userData.done&&(T.userData.done=!0,Math.abs(ht-T.position.x)<10&&Je<-8&&io<=0&&(io=1.5,pe=Math.min(8,pe+.2),Le+=200,yt("LOW PASS  +200","#ffd24a"))),L>60?(T.position.z=L-dv,T.position.x=vu[Math.floor(Math.random()*4)]+(Math.random()-.5)*3,T.userData.done=!1):T.position.z=L}for(let T of Gp){let I=T.userData,L=T.position.z,U=L+M+I.own*l;if(L<=0&&U>0&&!I.done){I.done=!0;let O=I.rx||5,X=I.ry||4,q=Math.abs(ht-T.position.x),Y=Math.abs(Je-(T.position.y+(I.cy||0)));if(q<O+2&&Y<X+2.5)Gt=1,jt=.4,pe=1,Le=Math.max(0,Le-500),ti=0,yt("MIDAIR CRASH  -500","#ff4a5a");else if(q<O+13&&Y<X+9)if(I.oncoming)Le+=250,pe=Math.min(8,pe+.4),yt("HEAD-ON PASS  +250","#ff8a5a");else{let Z=Math.round(120*pe);Le+=Z,pe=Math.min(8,pe+.25),yt("OVERTAKE  +"+Z,"#c0ff5e")}}if(T.position.z=U,I.strobeA){let O=(Mi*5|0)%2===0;I.strobeA.visible=O,I.strobeB.visible=!O}U>80?(T.position.z=U-Gh-Math.random()*400,T.position.x=(I.oncoming?-1:1)*(6+Math.random()*24),T.position.y=-12+Math.random()*55,I.done=!1):U<-Gh-800&&(T.position.z=U+Gh,I.done=!1)}if(il.position.z=(il.position.z+M)%46,et)if(fr>0)fr-=y,fr<=0&&(et.traverse(T=>{T.geometry&&T.geometry.dispose()}),it.remove(et),et=null,Wp(-1800));else{let T=-et.position.z,I=(vi?43:T>2200?42:46)+.7*(Wn-1)+.4*Math.min(3,ms)-(xt?2.5:0);et.position.z+=M-I*l,et.position.z>-6&&(et.position.z=-6),Za+=l*.02;let L=null;for(let O of ll){let X=O.userData;if(X.type!=="gate"&&X.type!=="fork")continue;let q=et.position.z-O.position.z;if(q>-X.len&&q<600){if(X.punkGap===void 0&&(X.punkGap=Math.random()<.5?0:1),X.type==="gate"){let Y=X.gaps[X.punkGap];L=(Y.x0+Y.x1)/2}else L=X.punkGap===0?-26:40;break}}L!==null?et.position.x+=(L-et.position.x)*Math.min(1,l*.08):et.position.x+=(Math.sin(Za*1.7)*26-et.position.x)*Math.min(1,l*.08),et.position.y=12+Math.sin(Za*1.13)*10,et.rotation.z=Math.sin(Za*1.7)*.25;let U=-et.position.z;if(!vi&&!dn&&ur<=0&&(U<420&&!so?(so=!0,ro=!1,ur=6,yt("HE'S RIGHT THERE - FLOOR IT!","#ff2bd6")):U>2400&&!ro&&(ro=!0,so=!1,ur=6,yt("DON'T LOSE HIM!","#ff2bd6"))),U>=420&&U<=2400&&(so=!1,ro=!1),U<30&&Math.abs(ht-et.position.x)<22){ms++;let O=Math.round(2e3*pe*(1+.5*(ms-1)));Le+=O,pe=Math.min(8,pe+2),gr++,Yt=1,oo=12,yt((ms>1?"BUST x"+ms+"!":"BUSTED!")+"  +"+O,"#2af0ff"),et.visible=!1,fr=2,vi&&(dn=!0,Uv())}else U>3200&&(Le=Math.max(0,Le-800),yt("PUNK ESCAPED  -800","#ff5a5f"),et.position.z=-1600)}Yt=Math.max(0,Yt-y*1.6);for(let T of ll){let I=T.userData,L=T.position.z,U=L+M;if(T.position.z=U,U-I.len>200&&(T.position.z=U-yv,I.passed=!1,I.hit=!1,I.punkGap=void 0,I.side=void 0,I.pts))for(let O of I.pts)O.done=!1;if(!vi)if(I.type==="gate"){if(L<=0&&U>0&&!I.passed){I.passed=!0;let O=I.gaps.find(X=>ht>X.x0+2.5&&ht<X.x1-2.5);if(Je<I.top+1&&!O)Gt=1,jt=.35,pe=1,Le=Math.max(0,Le-800),ti=0,yt("GATE CRASH  -800","#ff4a5a");else if(Je<I.top+1&&O&&O.narrow){let X=Math.round(300*pe*(xt?1.5:1));pe=Math.min(8,pe+.8),Le+=X,Yt=Math.max(Yt,.3),yt("THREAD THE NEEDLE  +"+X,"#ff2bd6")}}}else if(I.type==="scurve"){if(L<=0&&U>0&&!I.passed&&(I.passed=!0,I.side=Je<I.top+1&&ht>I.g1+2?"ok":null,Je<I.top+1&&ht<I.g1+2&&(Gt=1,jt=.4,pe=1,Le=Math.max(0,Le-600),yt("WALL  -600","#ff4a5a"))),L-I.len<=0&&U-I.len>0&&!I.hit){if(I.hit=!0,Je<I.top+1&&ht>I.g2-2)Gt=1,jt=.4,pe=1,Le=Math.max(0,Le-600),yt("WALL  -600","#ff4a5a");else if(Je<I.top+1&&I.side==="ok"){let O=Math.round(220*pe*(xt?1.5:1));pe=Math.min(8,pe+.5),Le+=O,yt("S-LINE  +"+O,"#c0ff5e")}}}else if(I.type==="bridge"){if(L<=0&&U>0&&!I.passed){if(I.passed=!0,Je>I.yLow-1&&Je<I.yHigh+1)Gt=.9,jt=.45,pe=Math.max(1,pe-2),Le=Math.max(0,Le-400),yt("BRIDGE SLAM  -400","#ff4a5a");else if(Je<=I.yLow-1&&Math.abs(Math.abs(ht)-110)<9)Gt=.9,jt=.45,pe=Math.max(1,pe-2),Le=Math.max(0,Le-400),yt("PYLON  -400","#ff4a5a");else if(Je<=I.yLow-1){let O=Math.round(250*pe*(xt?1.5:1));pe=Math.min(8,pe+.5),Le+=O,Yt=Math.max(Yt,.25),yt("UNDERPASS  +"+O,"#ffd24a")}}}else if(I.type==="fork"){let O=T.position.z>0&&T.position.z-I.len<0,X=T.position.z>0&&T.position.z-I.lenL<0;if(L<=0&&U>0&&!I.passed&&(I.passed=!0,I.side=Je<I.top+1?ht<0?"L":"R":null),O&&Je<I.top+1&&!I.hit&&(Math.abs(ht)<I.divH+3||X&&ht<I.lXin-2||ht>I.rXout+2)&&(I.hit=!0,Gt=.9,jt=.45,pe=Math.max(1,pe-2),Le=Math.max(0,Le-500),yt("FORK CRASH  -500","#ff4a5a")),L-I.lenL<=0&&U-I.lenL>0&&I.side==="L"&&Je<I.top+1&&!I.hit){let q=Math.round(350*pe*(xt?1.5:1));pe=Math.min(8,pe+.8),Le+=q,Yt=Math.max(Yt,.3),yt("SHORTCUT  +"+q,"#ff2bd6")}if(L-I.len<=0&&U-I.len>0&&I.side==="R"&&Je<I.top+1&&!I.hit){let q=Math.round(120*pe*(xt?1.5:1));pe=Math.min(8,pe+.3),Le+=q,yt("SAFE LINE  +"+q,"#2af0ff")}}else if(I.type==="slalom")for(let O of I.pts){let X=L+O.z,q=U+O.z;if(X<=0&&q>0&&!O.done){O.done=!0;let Y=Math.abs(ht-O.x);if(Y<8&&Je<90)Gt=.8,jt=.55,pe=Math.max(1,pe-1.5),Le=Math.max(0,Le-300),yt("PYLON  -300","#ff4a5a");else if(Y<20&&Je<90){let Z=Math.round(120*pe*(xt?1.5:1));pe=Math.min(8,pe+.25),Le+=Z,yt("SLALOM  +"+Z,"#2af0ff")}}}else{let O=T.position.z>0&&T.position.z-I.len<0;O&&!I.hit&&(Math.abs(ht)>I.xLim||I.yLim!==void 0&&Je>I.yLim)&&(I.hit=!0,Gt=.8,jt=.5,pe=Math.max(1,pe-2),Le=Math.max(0,Le-400),yt("WALL SCRAPE  -400","#ff4a5a")),O||(I.hit=!1)}}Sr.offset.y+=M/tv,Er.offset.y+=M/150,$a.position.z=($a.position.z+M)%90,wp.position.z=$a.position.z;for(let T of Rp)T.position.z+=M*T.userData.rel,T.position.z>60&&(T.position.z-=5900),T.position.z<-5900&&(T.position.z+=5900);for(let T of ja)T.position.z+=M,T.position.z>300&&(T.position.z-=Bp);for(let T of Op)T.rotation.z+=T.userData.spin*l*.03;for(let T of Cp)T.position.x+=T.userData.vx*l*2,T.position.z+=M,T.position.x>1400&&(T.position.x=-1400),T.position.x<-1400&&(T.position.x=1400),T.position.z>-400&&(T.position.z-=3400);for(let T of jh)T.rotation.y+=.05*l;for(let T of Pp)T.position.z+=M,T.position.z>200&&(T.position.z-=6300),T.rotation.z=Math.sin(Mi*T.userData.sp+T.userData.ph)*.45;for(let T of Lp)T.position.z+=M,T.position.z>100&&(T.position.z-=6e3);for(let T of Ip)T.position.z+=M,T.position.z>40&&(T.position.z-=6080);for(let T of Dp)T.position.z+=M,T.position.z>60&&(T.position.z-=6200);for(let T of Np)T.position.z+=M,T.position.z>80&&(T.position.z-=6e3);mr+=M,ln=Math.min(1,mr/hp),cn.position.z=gu*(1-ln);let P=1+ln*.85;cn.scale.set(P,P,P),cn.position.y=30*(P-1);let w=ln*ln;for(let T of ol)T.opacity=.12+.88*w;for(let T of al)T.opacity=.42+.55*ln;Yi.material.opacity=.14+.5*Math.pow(ln,1),Eu.opacity=.5*(1-ln*.92),Math.abs(ln-cl)>.004&&go(ln),mr>=hp&&!dn&&(dn=!0,Lv()),ml.position.x=ht*.04;let R=o*.6+Gt*4+(xt?.35:0);Rt.position.x+=(ht*.45+(Math.random()-.5)*R-Rt.position.x)*.16,Rt.position.y+=(Je*.4+16+(Math.random()-.5)*R-Rt.position.y)*.16,Rt.position.z=46-ti*5-(xt?3:0);let D=66+ti*4+(xt?12:0)+oo;if(oo+=(0-oo)*Math.min(1,y*5),Math.abs(Rt.fov-D)>.05&&(Rt.fov+=(D-Rt.fov)*.08,Rt.updateProjectionMatrix()),uo.strength+=((xt?1.25:.9)-uo.strength)*.08,co.opacity+=((xt?.7:0)-co.opacity)*.1,co.opacity>.02){Ki.visible=!0,Ki.position.set(ht,Je+.2,0);for(let T=0;T<Tu;T++){let I=Yp[T];if(I.z+=d*l*I.v*.9,I.z>26){I.z=-150-Math.random()*40;let U=Math.random()*Math.PI*2,O=6+Math.random()*16;I.x=Math.cos(U)*O,I.y=Math.sin(U)*O*.62}let L=T*6;_s[L]=I.x,_s[L+1]=I.y,_s[L+2]=I.z,_s[L+3]=I.x,_s[L+4]=I.y,_s[L+5]=I.z-I.len}Au.attributes.position.needsUpdate=!0}else Ki.visible=!1;Rt.lookAt(ht*.6,Je*.6+6,-90),xi.scale.setScalar(1.3+ln*.9+ln*ln*1.6),xi.position.y=-470+ln*340,document.getElementById("hud").textContent=`PUNK BOOSTER v3 REDLINE
TIME ${(yi*100).toFixed(0)}%   SUPERHOT ${Ut.superhot?"ON":"off"}   speed ${d.toFixed(0)}   ${Wh.toFixed(0)} fps   ${rp} dc
LEVEL ${Wn} \xB7 ${Xn[Wn-1].name}   ${Su==="none"?"keyboard":"pad ok"}`;let x=document.getElementById("score");x.textContent=`SCORE ${String(Math.round(Le)).padStart(6,"0")}
\xD7${pe.toFixed(1)}${gr?`
BUSTS `+gr:""}`,x.style.color=pe>=6?"#ff2bd6":pe>=3?"#2af0ff":"#ffe08a",document.getElementById("dmg").style.opacity=Gt>0?Math.min(1,Gt).toFixed(2):ps>1.2?(.16+.14*Math.sin(Mi*12)).toFixed(2):0,document.getElementById("bustfx").style.opacity=Yt>0?Yt.toFixed(2):0;{let T=Math.max(0,Math.min(1,(d-15)/45));document.getElementById("sbneedle").style.left=(T*277).toFixed(0)+"px"}let S=document.getElementById("sblabel");ps>1.2?(S.textContent="CRITICAL SPEED",S.style.color="#ff2b3c",S.style.opacity=(.5+.5*Math.sin(Mi*14)).toFixed(2)):xt?(S.textContent="REDLINE",S.style.color="#ff2bd6",S.style.opacity=(.7+.3*Math.sin(Mi*10)).toFixed(2)):(S.textContent="",S.style.opacity=1);let B=document.getElementById("punkui");if(et)if(fr>0)B.textContent="PUNK DOWN - NEXT INBOUND",B.style.color="#2af0ff";else{let T=Math.max(0,Math.round(-et.position.z));B.textContent="\u25E4 PUNK  "+T+"m",B.style.color=T<400?"#2af0ff":T>2400?"#ff5a5f":"#ffe08a"}bi.info.reset(),ho.render(),rp=bi.info.render.calls,requestAnimationFrame(dr)}requestAnimationFrame(dr);window.P=Ut;var vn=(function(){let n=null,e=!1,t=1,i=0,s=0,r=null,o=134,a=60/o,l=a/4,h=D=>440*Math.pow(2,(D-69)/12),c=[{root:33,arp:[57,60,64,69],chord:[57,60,64]},{root:29,arp:[53,57,60,65],chord:[53,57,60]},{root:36,arp:[60,64,67,72],chord:[60,64,67]},{root:31,arp:[55,59,62,67],chord:[55,59,62]}];function u(D,x,S,B,T,I){let L=n.createOscillator(),U=n.createGain();return L.type=D,L.frequency.setValueAtTime(x,S),U.gain.setValueAtTime(0,S),U.gain.linearRampToValueAtTime(T,S+.008),U.gain.exponentialRampToValueAtTime(1e-4,S+B),L.connect(U),U.connect(I),L.start(S),L.stop(S+B+.02),L}function f(D,x,S,B,T){let I=Math.floor(n.sampleRate*x),L=n.createBuffer(1,I,n.sampleRate),U=L.getChannelData(0);for(let Y=0;Y<I;Y++)U[Y]=Math.random()*2-1;let O=n.createBufferSource();O.buffer=L;let X=n.createBiquadFilter();X.type="highpass",X.frequency.value=B;let q=n.createGain();q.gain.setValueAtTime(S,D),q.gain.exponentialRampToValueAtTime(1e-4,D+x),O.connect(X),X.connect(q),q.connect(T),O.start(D),O.stop(D+x+.02)}function d(D,x){let S=n.createOscillator(),B=n.createGain();S.type="sine",S.frequency.setValueAtTime(160,D),S.frequency.exponentialRampToValueAtTime(48,D+.12),B.gain.setValueAtTime(.9,D),B.gain.exponentialRampToValueAtTime(1e-4,D+.18),S.connect(B),B.connect(x),S.start(D),S.stop(D+.2)}let g,_,m,p;function M(){for(;s<n.currentTime+.12;){let D=s,x=Math.floor(i/16)%c.length,S=c[x],B=i%16;B%4===0&&d(D,p),B%2===1&&f(D,.03,.18*t,7e3,p),(B===4||B===12)&&f(D,.14,.35*t,1800,p),B%2===0&&u("square",h(S.root),D,l*1.8,.16,m);let T=S.arp[B%S.arp.length]+(B>=8?12:0);if(u("square",h(T),D,l*.9,.1*t,_),B===0)for(let I of S.chord)u("sawtooth",h(I+12),D,a*.9,.05,_);i++,s+=l}r=setTimeout(M,25)}let y=null,v="vice-runway.mp3",P=!1;function w(D){if(!y||P)return;let x=y.play();x&&x.then?(P=!0,x.then(()=>{P=!1,e=!0}).catch(S=>{P=!1,console.warn("[audio] play() abgelehnt ("+D+"):",S&&S.name,S&&S.message)})):e=!0}function R(){if(y)try{y.pause()}catch{}y=new Audio(v),y.loop=!0,y.volume=1;try{y.preservesPitch=!1,y.mozPreservesPitch=!1}catch{}w("load")}return{start(){e||(y?w("start"):R())},setTrack(D){D!==v&&(v=D,(e||y)&&R())},setEnergy(D){y&&(y.playbackRate=.9+.1*Math.max(0,Math.min(1,D)))},setRedline(D){},pause(){y&&y.pause()},resume(){y&&w("resume")},restart(){if(y){try{y.currentTime=0}catch{}w("restart")}}}})(),Es=!1;function br(){if(vn.start(),Es)return;Es=!0,it.visible=!0;let n=document.getElementById("start");n&&(n.style.display="none")}document.getElementById("start").addEventListener("click",br);addEventListener("pointerdown",()=>{if(dn){performance.now()-bs>600&&_o();return}br()});{let n=document.getElementById("modeswitch");n&&(n.addEventListener("pointerdown",e=>{e.stopPropagation()}),n.addEventListener("click",e=>{e.stopPropagation(),location.href=(location.hostname.endsWith("github.io"),"v35/")}))}if(location.hash.startsWith("#auto")){Es=!0,it.visible=!0;let n=document.getElementById("start");n&&(n.style.display="none")}{let n=location.hash.match(/lv(\d)/);if(n){let e=Math.max(1,Math.min(Xn.length,+n[1]));Wn=e,Zp(e)}}vi&&(document.getElementById("hud").style.display="none",setTimeout(()=>br(),600))});Ov();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
